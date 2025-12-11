import transporter from '$lib/server/mail.server';
import { SENDER_EMAIL } from '$env/static/private';

interface DadosCadastro {
	fullName: string;
	emailCliente: string;
	telefone: string;
	planoNome: string;
	planoMegas: string;
	valorPlano?: string;
	cidade: string;
}

/**
 * Gera o template HTML para o email de confirmação de cadastro
 */
function gerarTemplateEmail(dados: DadosCadastro): string {
	const primeiroNome = dados.fullName.split(' ')[0];

	return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 520px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #EA580C 0%, #F97316 100%); padding: 32px 40px; text-align: center;">
              <img src="https://himarte.com.br/favicon.ico" alt="Himarte" style="width: 48px; height: 48px; margin-bottom: 16px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Cadastro Confirmado!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0; line-height: 1.6;">
                Olá, <strong style="color: #EA580C;">${primeiroNome}</strong>! 👋
              </p>
              
              <p style="color: #4B5563; font-size: 15px; margin: 0 0 24px 0; line-height: 1.6;">
                Recebemos seu cadastro com sucesso! Nossa equipe de atendimento entrará em contato em breve para finalizar a ativação do seu plano.
              </p>
              
              <!-- Plan Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FFF7ED; border-radius: 8px; border: 1px solid #FDBA74; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #9A3412; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">
                      Plano Selecionado
                    </p>
                    <p style="color: #1F2937; font-size: 20px; font-weight: 700; margin: 0 0 4px 0;">
                      ${dados.planoNome}
                    </p>
                    <p style="color: #6B7280; font-size: 14px; margin: 0;">
                      ${dados.planoMegas} Mega${dados.valorPlano ? ` • R$ ${dados.valorPlano}/mês` : ''}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Info -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                    <span style="color: #6B7280; font-size: 13px;">Cidade</span>
                    <p style="color: #1F2937; font-size: 15px; margin: 4px 0 0 0; font-weight: 500;">${dados.cidade}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                    <span style="color: #6B7280; font-size: 13px;">Telefone para contato</span>
                    <p style="color: #1F2937; font-size: 15px; margin: 4px 0 0 0; font-weight: 500;">${dados.telefone}</p>
                  </td>
                </tr>
              </table>
              
              <!-- CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 8px 0;">
                    <a href="https://himarte.com.br" style="display: inline-block; background-color: #EA580C; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 32px; border-radius: 8px;">
                      Visitar nosso site
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 24px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="color: #6B7280; font-size: 13px; margin: 0 0 8px 0;">
                Fique atento! Entraremos em contato pelo telefone cadastrado.
              </p>
              <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Himarte Internet. Todos os direitos reservados.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

/**
 * Envia email de confirmação para o cliente que realizou cadastro
 * @returns true se enviou com sucesso, false se houve erro
 */
export async function enviarEmailConfirmacaoCadastro(dados: DadosCadastro): Promise<boolean> {
	try {
		// Verifica o transporte
		await transporter.verify();

		const html = gerarTemplateEmail(dados);

		await transporter.sendMail({
			from: `"Himarte Net" <${SENDER_EMAIL}>`,
			to: dados.emailCliente,
			subject: `🎉 Cadastro confirmado  - ${dados.planoNome}`,
			html
		});

		console.log(`Email de confirmação enviado para: ${dados.emailCliente}`);
		return true;
	} catch (error) {
		console.error('Erro ao enviar email de confirmação:', error);
		return false;
	}
}
