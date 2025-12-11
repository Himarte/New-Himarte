import type { RequestHandler } from './$types';
import { SITE_CHAVE_API, SITE_URL_API } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();

		const params = new URLSearchParams({
			nome: data.nome || '',
			telefone: data.telefone || '',
			email: data.email || '',
			cep: data.cep || '',
			cidade: data.cidade || '',
			estado: data.estado || '',
			bairro: data.bairro || '',
			rua: data.rua || ''
		});

		const response = await fetch(
			`${SITE_URL_API}/api/leads/lead-sem-cobertura?${params.toString()}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'API-KEY': SITE_CHAVE_API
				}
			}
		);

		const result = await response.json();
		return new Response(JSON.stringify(result), {
			status: response.status,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Erro ao enviar lead sem cobertura:', error);
		return new Response(JSON.stringify({ error: 'Erro interno' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
