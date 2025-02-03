import { request } from 'http';
import type { Actions } from './$types';

export const actions: Actions = {
	novoCadastro: async ({ request }) => {
		const data = await request.formData();
		const nomeCliente = data.get('nomeCliente') as string;
		const sobrenomeCliente = data.get('sobrenomeCliente') as string;
		const generoCliente = data.get('generoCliente') as string;
		const dataNascimento = data.get('dataNascimento') as string;
		const telefoneCliente = data.get('telefoneCliente') as string;
		const emailCliente = data.get('emailCliente') as string;
		const cep = data.get('cep') as string;
		const cidade = data.get('cidade') as string;
		const rua = data.get('rua') as string;
		const bairro = data.get('bairro') as string;
		const estado = data.get('estado') as string;
		const numero = data.get('numero') as string;
		const complemento = data.get('complemento') as string;
		const pontoReferencia = data.get('pontoReferencia') as string;
		const plano = data.get('plano') as string;
		const megasPlano = data.get('megasPlano') as string;
		const valorPlano = data.get('valorPlano') as string;
		const metodoPagamento = data.get('metodoPagamento') as string;
		const cpf = data.get('cpf') as string;
		const codigoDesconto = data.get('codigoDesconto') as string;

		// try{
		// 	await db.insert{cadastroCliente}.values({
		// 		nomeCliente,
		// 		sobrenomeCliente,
		// 		generoCliente,
		// 		dataNascimento,
		// 		telefone,
		// 		emailCliente,
		// 		cep,
		// 		cidade,
		// 		rua,
		// 		bairro,
		// 		estado,
		// 		numero,
		// 		complemento,
		// 		pontoReferencia,
		// 		plano,
		// 		megasPlano,
		// 		valorPlano,
		// 		metodoPagamento,
		// 		cpf,
		// 		codigoDesconto
		// 	})
		// 	return {
		// 		status: 200,
		// 		body: { message: 'Cadastro realizado com sucesso!' }
		// 	};
		// } catch (error) {
		// 	return {
		// 		status: 500,
		// 		body: { message: 'Erro ao realizar cadastro!' }
		// 	};
		// }
	}
};
