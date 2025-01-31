import { request } from 'http';
import type { Actions } from './$types';

export const actions: Actions = {
	novoCadastro: async ({ request }) => {
		const data = await request.formData();
		const nomeCliente = data.get('nomeCliente') as string;
		const sobrenomeCliente = data.get('sobrenomeCliente') as string;
		const generoCliente = data.get('generoCliente') as string;
		const dataNascimento = data.get('dataNascimento') as string;
		const emailCliente = data.get('emailCliente') as string;
	}
};
