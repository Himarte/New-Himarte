import {
	BLIP_VOALLE_CLIENT_ID,
	BLIP_VOALLE_CLIENT_SECRET,
	VOALLE_SYNDATA_API,
	VOALLE_URL
} from '$env/static/private';
import type { RequestHandler } from './$types';

// Função para autenticar e obter token
async function obterTokenVoalle() {
	const response = await fetch(`${VOALLE_URL}:45700/connect/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'client_credentials',
			scope: 'syngw',
			client_id: BLIP_VOALLE_CLIENT_ID,
			client_secret: BLIP_VOALLE_CLIENT_SECRET,
			syndata: VOALLE_SYNDATA_API
		})
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`Falha na autenticação: ${response.status} - ${errorText}`);
	}

	const authData = await response.json();
	if (!authData.access_token) {
		throw new Error('Token não encontrado na resposta de autenticação');
	}

	return authData.access_token;
}

// Função para criar pessoa no Voalle
async function criarPessoaVoalle(accessToken: string, cadastroData: Record<string, string>) {
	// Determinar tipo de documento e obter valor
	const typeTxId = cadastroData.planoModelo === 'CNPJ' ? 1 : 2;
	const txId = typeTxId === 1 ? cadastroData.cnpj : cadastroData.cpf;

	// Dados da pessoa formatados para o Voalle
	const dadosPessoa = {
		typeTxId,
		txId: txId.replace(/\D/g, ''),
		name: cadastroData.fullName,
		email: cadastroData.emailCliente,
		client: true,
		situation: 4, // Lead
		streetType: 'Rua',
		postalCode: cadastroData.cep?.replace(/\D/g, ''),
		street: cadastroData.rua,
		number: cadastroData.numero,
		addressComplement: cadastroData.complemento,
		addressReference: `${cadastroData.pontoReferencia ? `${cadastroData.pontoReferencia}, -` : ''} Telefone: ${cadastroData.telefone}`,
		neighborhood: cadastroData.bairro,
		city: cadastroData.cidade,
		state: cadastroData.estado,
		codeCountry: '1058'
	};

	// Faz a requisição para criar a pessoa
	const response = await fetch(`${VOALLE_URL}:45715/external/integrations/thirdparty/people`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dadosPessoa)
	});

	const resultado = await response.json();

	console.log('resultado --------------', resultado);

	// Verifica se há mensagens de erro na resposta, mesmo que o status seja 200
	const temErro = resultado.messages?.some((msg: { type: string }) => msg.type === 'Error');

	// Verifica se o erro é especificamente de CPF/CNPJ já existente
	const cpfCnpjJaExiste = resultado.messages?.some(
		(msg: { type: string; message: string }) =>
			msg.type === 'Error' && msg.message?.includes('CPF/CNPJ já existe')
	);

	return {
		sucesso: response.ok && !temErro,
		cpfCnpjJaExiste,
		dados: resultado
	};
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		// Recebe os dados da requisição
		const cadastroData = await request.json();

		// 1. Autenticar e obter token
		let accessToken;
		try {
			accessToken = await obterTokenVoalle();
		} catch (erroAuth) {
			console.error('Erro na autenticação Voalle:', erroAuth);
			return new Response(
				JSON.stringify({
					success: false,
					mensagem: erroAuth instanceof Error ? erroAuth.message : 'Falha na autenticação'
				}),
				{
					status: 401,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		// 2. Criar pessoa no Voalle
		try {
			const resultado = await criarPessoaVoalle(accessToken, cadastroData);

			// Extrai mensagem de erro se existir
			const mensagemErro = resultado.dados.messages?.find(
				(msg: { type: string }) => msg.type === 'Error'
			)?.message;

			return new Response(
				JSON.stringify({
					success: resultado.sucesso,
					pessoaJaExiste: resultado.cpfCnpjJaExiste || false,
					data: resultado.dados,
					mensagem: !resultado.sucesso && mensagemErro ? mensagemErro : undefined
				}),
				{
					status: resultado.sucesso ? 200 : 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		} catch (erroCriacao) {
			console.error('Erro ao criar pessoa no Voalle:', erroCriacao);
			return new Response(
				JSON.stringify({
					success: false,
					mensagem: 'Erro ao processar a criação da pessoa'
				}),
				{
					status: 500,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}
	} catch (erro) {
		console.error('Erro geral na API Voalle:', erro);
		return new Response(
			JSON.stringify({
				success: false,
				mensagem: 'Erro ao processar a requisição'
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
