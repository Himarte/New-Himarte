import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { SITE_CHAVE_API, SITE_URL_API } from '$env/static/private';

// Função utilitária para limpar caracteres especiais
const limparTexto = (texto: unknown): string => {
	return texto?.toString().replace(/\D/g, '') || '';
};

// Função utilitária para configurar dados de indicação
const prepararDadosIndicacao = (cadastroData: Record<string, any>) => {
	const camposIndicacao = [
		'fullName',
		'telefone',
		'cpf',
		'cnpj',
		'planoNome',
		'planoMegas',
		'planoModelo',
		'promoCode'
	];

	return Object.fromEntries(
		Object.entries(cadastroData)
			.filter(([chave, valor]) => camposIndicacao.includes(chave) && valor)
			.map(([chave, valor]) => [chave, String(valor)])
	);
};

export const actions: Actions = {
	novoCadastro: async ({ request, fetch }) => {
		try {
			const formData = await request.formData();

			// Preparar dados com campos limpos
			const cadastroData = {
				fullName: formData.get('fullName')?.toString().trim(),
				cpf: limparTexto(formData.get('cpf')),
				cnpj: limparTexto(formData.get('cnpj')),
				telefone: formData.get('telefone')?.toString(),
				emailCliente: formData.get('emailCliente'),
				dataNascimento: formData.get('dataNascimento'),
				genero: formData.get('genero'),
				cep: limparTexto(formData.get('cep')),
				rua: formData.get('rua'),
				numero: formData.get('numero'),
				bairro: formData.get('bairro'),
				cidade: formData.get('cidade'),
				estado: formData.get('estado'),
				complemento: formData.get('complemento'),
				pontoReferencia: formData.get('pontoReferencia'),
				planoNome: formData.get('planoNome'),
				planoMegas: formData.get('planoMegas'),
				valorPlano: formData.get('valorPlano'),
				planoModelo: formData.get('planoModelo'),
				promoCode: formData.get('promoCode')
			};

			// 1. Primeiro, integração com Voalle
			let voalleResult;
			try {
				const voalleResponse = await fetch('/api/voalle/criar-pessoa', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(cadastroData)
				});
				voalleResult = await voalleResponse.json();

				// Verificar erros na resposta do Voalle
				const temErroVoalle =
					!voalleResult.success ||
					voalleResult.data?.messages?.some((msg: any) => msg.type === 'Error');

				// Se a criação no Voalle falhou, retornamos o erro sem tentar o Indica
				if (temErroVoalle) {
					// Encontrar a primeira mensagem de erro, se existir
					const mensagemErro =
						voalleResult.mensagem ||
						voalleResult.data?.messages?.find((msg: any) => msg.type === 'Error')?.message ||
						'Falha ao cadastrar no Voalle. Verifique os dados e tente novamente.';

					return fail(400, {
						erro: true,
						mensagem: mensagemErro,
						voalleResult
					});
				}
			} catch (erro) {
				console.error('Erro na comunicação com Voalle:', erro);
				return fail(500, {
					erro: true,
					mensagem: 'Erro de comunicação com o sistema Voalle',
					voalleResult: {
						success: false,
						mensagem: erro instanceof Error ? erro.message : 'Erro desconhecido'
					}
				});
			}

			// 2. Somente após sucesso no Voalle, integração com o Indica Himarte
			try {
				const dadosIndicacao = prepararDadosIndicacao(cadastroData);
				const indicacaoParams = new URLSearchParams(dadosIndicacao);
				const urlBase = `${SITE_URL_API}/api/indicacoes`;

				const response = await fetch(`${urlBase}?${indicacaoParams.toString()}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'API-KEY': SITE_CHAVE_API
					}
				});

				const responseData = await response.json();

				if (!response.ok) {
					return fail(response.status, {
						erro: true,
						mensagem: `Pessoa criada no Voalle, mas falha ao registrar no sistema de indicação: ${responseData.message || 'Erro desconhecido'}`,
						voalleResult,
						indicaResult: responseData
					});
				}

				// Sucesso em ambos os sistemas
				return {
					success: true,
					mensagem: 'Cadastro realizado com sucesso em todos os sistemas!',
					voalleResult,
					indicaResult: responseData
				};
			} catch (erroIndica) {
				console.error('Erro na comunicação com sistema de indicação:', erroIndica);
				return fail(500, {
					erro: true,
					mensagem: 'Pessoa criada no Voalle, mas erro ao comunicar com sistema de indicação',
					voalleResult,
					indicaError: erroIndica instanceof Error ? erroIndica.message : 'Erro desconhecido'
				});
			}
		} catch (erro) {
			console.error('Erro ao processar cadastro:', erro);
			return fail(500, {
				erro: true,
				mensagem: 'Erro ao processar o cadastro'
			});
		}
	}
};
