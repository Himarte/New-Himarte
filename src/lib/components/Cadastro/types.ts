export type Genero = 'masculino' | 'feminino' | 'outro';
export type PlanoModelo = 'CPF' | 'CNPJ';

export type FormData = {
	// Dados pessoais
	fullName: string;
	genero: Genero | '';
	dataNascimento: string;
	telefone: string;
	emailCliente: string;

	// Endereço
	cep: string;
	cidade: string;
	rua: string;
	bairro: string;
	estado: string;
	numero: string;
	complemento: string;
	pontoReferencia: string;

	// Plano
	planoNome: string;
	planoMegas: string;
	valorPlano: string;
	planoModelo: PlanoModelo;
	cpf: string;
	cnpj: string;
	promoCode: string;
};
