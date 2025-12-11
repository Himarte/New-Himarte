// Lista de cidades com cobertura Himarte
// Baseado nas filiais disponíveis em /filiais
export const CIDADES_COM_COBERTURA = [
	'Vale do Sol',
	'Santa Cruz do Sul',
	'Vera Cruz',
	'Rio Pardo',
	'Encruzilhada do Sul',
	'Agudo',
	'Candelária'
] as const;

export type CidadeComCobertura = (typeof CIDADES_COM_COBERTURA)[number];

/**
 * Verifica se uma cidade possui cobertura Himarte
 * A comparação é case-insensitive e ignora acentos
 */
export function verificarCobertura(cidade: string): boolean {
	if (!cidade) return false;

	const cidadeNormalizada = normalizarTexto(cidade);

	return CIDADES_COM_COBERTURA.some(
		(cidadeCobertura) => normalizarTexto(cidadeCobertura) === cidadeNormalizada
	);
}

/**
 * Normaliza texto removendo acentos e convertendo para minúsculas
 */
function normalizarTexto(texto: string): string {
	return texto
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
}
