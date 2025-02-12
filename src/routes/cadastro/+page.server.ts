import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { SITE_CHAVE_API } from '$env/static/private';

export const actions: Actions = {
	novoCadastro: async ({ request }) => {
		try {
			const formData = await request.formData();
			console.log('Form Data Raw:', Object.fromEntries(formData));

			const cadastroData = {
				fullName: formData.get('fullName'),
				cpf: formData.get('cpf'),
				cnpj: formData.get('cnpj'),
				telefone: formData.get('telefone'),
				planoNome: formData.get('planoNome'),
				planoMegas: formData.get('planoMegas'),
				valorPlano: formData.get('valorPlano'),
				planoModelo: formData.get('planoModelo'),
				promoCode: formData.get('promoCode')
			};

			console.log('Cadastro Data ------------------', cadastroData);

			// Construindo a URL com os parâmetros
			const urlBase = 'http://localhost:5173/api/indicacoes';
			const params = new URLSearchParams();

			// Adiciona apenas parâmetros com valores
			Object.entries(cadastroData).forEach(([key, value]) => {
				if (value) {
					params.append(key, value.toString());
				}
			});

			const response = await fetch(`${urlBase}?${params.toString()}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'API-KEY': SITE_CHAVE_API
				}
			});

			const responseData = await response.json();
			console.log('Resposta da API:', responseData);

			if (!response.ok) {
				return fail(response.status, {
					erro: true,
					mensagem: responseData.message || 'Falha ao processar cadastro'
				});
			}

			return {
				success: true,
				mensagem: 'Cadastro realizado com sucesso!'
			};
		} catch (erro) {
			console.error('Erro ao processar cadastro:', erro);
			return fail(500, {
				erro: true,
				mensagem: 'Erro ao processar o cadastro'
			});
		}
	}
};
