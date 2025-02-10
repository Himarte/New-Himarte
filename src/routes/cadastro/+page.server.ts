import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	novoCadastro: async ({ request }) => {
		try {
			const formData = await request.formData();
			const cadastroData = {
				// Dados pessoais
				fullName: formData.get('fullname'),
				genero: formData.get('genero'),
				dataNascimento: formData.get('dataNascimento'),
				telefone: formData.get('telefoneCliente'),
				email: formData.get('emailCliente'),

				// Endereço
				cep: formData.get('cep'),
				cidade: formData.get('cidade'),
				rua: formData.get('rua'),
				bairro: formData.get('bairro'),
				estado: formData.get('estado'),
				numero: formData.get('numero'),
				complemento: formData.get('complemento'),
				pontoReferencia: formData.get('pontoReferencia'),

				// Plano
				planoNome: formData.get('planoSelecionado'),
				planoMegas: formData.get('megasPlano'),
				valorPlano: formData.get('valorPlano'),
				metodoPagamento: formData.get('metodoPagamento'),
				cpf: formData.get('cpf'),
				codigoDesconto: formData.get('codigoDesconto')
			};

			const response = await fetch('/api/indica', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(cadastroData)
			});

			if (!response.ok) {
				return fail(400, {
					erro: true,
					mensagem: 'Falha ao salvar os dados'
				});
			}

			return {
				success: true,
				mensagem: 'Cadastro realizado com sucesso!'
			};
		} catch (erro) {
			console.error('Erro ao salvar lead:', erro);
			return fail(500, {
				erro: true,
				mensagem: 'Erro ao processar o cadastro'
			});
		}
	}
};
