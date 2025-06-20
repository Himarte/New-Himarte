import type { Actions } from './$types';
import transporter from '$lib/server/mail.server';
import { SENDER_EMAIL, EMAIL_RECEIVER } from '$env/static/private';
import sanitizeHtml from 'sanitize-html';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	enviarEmail: async ({ request }) => {
		try {
			// Verifica o transporte de e-mail
			await transporter.verify();

			const formData = await request.formData();
			const nomeInteressado = formData.get('nome')?.toString().trim();
			const emailInteressado = formData.get('emailRemetente')?.toString().trim();
			const vagaInteressado = formData.get('vagaDesejada')?.toString().trim();
			const telefoneInteressado = formData.get('telefone')?.toString().trim();
			const mensagemInteressado = formData.get('mensagem')?.toString().trim();
			const curriculoInteressado = formData.get('curriculo') as File;

			// Validação dos campos obrigatórios
			if (
				!nomeInteressado ||
				!emailInteressado ||
				!vagaInteressado ||
				!telefoneInteressado ||
				!mensagemInteressado ||
				!curriculoInteressado
			) {
				return fail(400, { message: 'Todos os campos são obrigatórios.' });
			}

			// Validação do formato do e-mail
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(emailInteressado)) {
				return fail(400, { message: 'E-mail inválido.' });
			}

			// Sanitização dos inputs
			const nomeSanitizado = sanitizeHtml(nomeInteressado);
			const emailSanitizado = sanitizeHtml(emailInteressado);
			const vagaSanitizada = sanitizeHtml(vagaInteressado);
			const telefoneSanitizado = sanitizeHtml(telefoneInteressado);
			const mensagemSanitizada = sanitizeHtml(mensagemInteressado);

			// Processamento do currículo
			const curriculoArrayBuffer = await curriculoInteressado.arrayBuffer();
			const curriculoBuffer = Buffer.from(curriculoArrayBuffer);

			// Conteúdo do e-mail
			const html = `
			<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
				<div style="max-width: 600px; margin: auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
					<div style="text-align: center; margin-bottom: 20px;">
						<!-- Adicione o logotipo da empresa aqui -->
						<img src="https://himarte.com.br/favicon.ico" alt="Logo Himarte" style="max-width: 150px;">
					</div>
					<h2 style="color: #EB4F27; text-align: center;">HIMARTE - SEU FUTURO É AQUI!</h2>
					<hr style="border: 0; height: 1px; background: #EB4F27; margin: 20px 0;">
					<p><strong>Nome:</strong> ${nomeSanitizado}</p>
					<p><strong>Vaga:</strong> ${vagaSanitizada}</p>
					<p><strong>Email:</strong> ${emailSanitizado}</p>
					<p><strong>Telefone:</strong> ${telefoneSanitizado}</p>
					<p><strong>Mensagem:</strong></p>
					<p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${mensagemSanitizada}</p>
					<div style="margin-top: 30px; text-align: center;">
						<p style="font-size: 12px; color: #aaa;">&copy; ${new Date().getFullYear()} Himarte. Todos os direitos reservados.</p>
					</div>
				</div>
			</div>
		`;

			// Envio do e-mail - corpo dele
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const info = await transporter.sendMail({
				from: SENDER_EMAIL,
				to: EMAIL_RECEIVER,
				subject: `Site Himarte - Vaga ${vagaSanitizada}`,
				html,
				attachments: [
					{
						filename: curriculoInteressado.name,
						contentType: curriculoInteressado.type || 'application/pdf',
						content: curriculoBuffer
					}
				]
			});

			// console.log('Mensagem Enviada:', info);

			return { success: true, message: 'Email enviado com sucesso.' };
		} catch (error) {
			console.error('Erro ao enviar email:', error);
			return fail(500, { message: 'Erro ao enviar email.' });
		}
	}
};
