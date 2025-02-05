import type { Actions } from './$types';

export const actions: Actions = {
	novoCadastro: async ({ request, fetch }) => {
		const data = await request.formData();
		try {
			const cadastroData = {
				// Dados pessoais
				fullName: data.get('fullname'),
				genero: data.get('genero'),
				dataNascimento: data.get('dataNascimento'),
				telefone: data.get('telefoneCliente'),
				email: data.get('emailCliente'),

				// Endereço
				cep: data.get('cep'),
				cidade: data.get('cidade'),
				rua: data.get('rua'),
				bairro: data.get('bairro'),
				estado: data.get('estado'),
				numero: data.get('numero'),
				complemento: data.get('complemento'),
				pontoReferencia: data.get('pontoReferencia'),

				// Plano
				planoNome: data.get('planoSelecionado'),
				planoMegas: data.get('megasPlano'),
				valorPlano: data.get('valorPlano'),
				metodoPagamento: data.get('metodoPagamento'),
				cpf: data.get('cpf'),
				codigoDesconto: data.get('codigoDesconto')
			};

			console.log('Dados sendo enviados:', cadastroData);

			const response = await fetch('/api/indica', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(cadastroData)
			});

			if (!response.ok) {
				throw new Error('Falha ao salvar os dados');
			}

			const responseData = await response.json();
			console.log('Resposta da API:', responseData);

			return {
				status: 200,
				body: { message: 'Cadastro realizado com sucesso!' }
			};
		} catch (error) {
			console.error('Erro ao salvar lead:', error);
			return {
				status: 500,
				body: { message: 'Erro ao realizar cadastro!' }
			};
		}
	}
};
