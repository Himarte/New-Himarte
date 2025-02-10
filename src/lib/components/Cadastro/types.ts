export type FormData = {
	// Dados pessoais
	fullname: string;
	genero: string;
	dataNascimento: string;
	telefoneCliente: string;
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
	planoSelecionado: string;
	megasPlano: string;
	valorPlano: string;
	metodoPagamento: string;
	cpf: string;
	codigoDesconto: string;
};
