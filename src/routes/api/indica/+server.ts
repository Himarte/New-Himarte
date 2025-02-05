import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export interface LeadData {
	fullName: string;
	cpf?: string;
	cnpj?: string;
	telefone: string;
	planoNome?: string;
	planoMegas?: number;
	promoCode?: string;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		console.log('Dados recebidos na API:', data); // Para debug

		const response = await fetch('https://indica.himarte.com.br/api/indicacoes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': '1234567890'
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error('Erro da API externa:', errorData); // Para debug
			throw new Error('Falha ao salvar os dados');
		}

		const responseData = await response.json();
		console.log('Resposta da API externa:', responseData); // Para debug

		return json(responseData);
	} catch (error) {
		console.error('Erro no servidor:', error);
		return json({ error: 'Erro ao salvar lead' }, { status: 500 });
	}
};
