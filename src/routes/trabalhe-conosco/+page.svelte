<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { toast } from 'svelte-sonner';
	import { Bell } from '@lucide/svelte';
	// Definição dos campos obrigatórios e mensagens de erro
	const requiredFields = [
		'nome',
		'telefone',
		'emailRemetente',
		'vagaDesejada',
		'mensagem',
		'curriculo'
	];
	const errorMessages: Record<string, string> = {
		nome: 'Por favor, insira um nome válido',
		telefone: 'Por favor, insira um telefone válido',
		emailRemetente: 'Por favor, insira um e-mail válido',
		vagaDesejada: 'Por favor, insira a vaga desejada',
		mensagem: 'Por favor, insira uma mensagem',
		curriculo: 'Por favor, anexe seu currículo'
	};

	// Estado do componente
	let nome = $state('');
	let telefone = $state('');
	let isSubmitting = $state(false);

	// Função para validar o formulário
	function validateForm(formData: FormData): string[] {
		const invalidFields = [];
		for (const field of requiredFields) {
			const value = formData.get(field);
			if (!value || value.toString().trim() === '') {
				invalidFields.push(field);
			}
		}
		return invalidFields;
	}

	// Função para validar o nome (não permite números)
	function validateNome(value: string): string {
		return value.replace(/\d/g, '');
	}

	// Função para formatar o telefone
	function formatTelefone(value: string): string {
		// Remove todos os caracteres que não são dígitos
		value = value.replace(/\D/g, '');

		// Limita o tamanho máximo a 11 dígitos (2 para o DDD e 9 para o número)
		if (value.length > 11) {
			value = value.slice(0, 11);
		}

		// Aplica a máscara
		if (value.length > 2) {
			value = value.replace(/^(\d{2})(\d)/, '($1) $2');
		}
		if (value.length > 7) {
			value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
		}

		return value;
	}
</script>

<svelte:head>
	<title>Trabalhe Conosco - Himarte</title>
	<meta
		name="description"
		content="Faça parte da equipe Himarte. Envie seu currículo e construa sua carreira conosco."
	/>
</svelte:head>

<div class="bg-background h-full w-full py-10 md:py-24">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-12 text-center">
			<div
				class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 ring-2 ring-orange-500/30"
			>
				<Bell size={24} class="text-orange-500" />
			</div>
			<h1 class="text-foreground text-4xl font-bold sm:text-5xl">Trabalhe Conosco</h1>
			<p class="text-muted-foreground mx-auto mt-4 max-w-2xl text-xl">
				Junte-se à nossa equipe e faça parte de uma empresa que valoriza inovação, crescimento e
				excelência profissional.
			</p>
		</div>

		<!-- Form Section -->
		<div
			class="bg-card border-border overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-sm"
		>
			<div class="px-8 py-10 sm:px-12 sm:py-12">
				<form
					action="?/enviarEmail"
					method="POST"
					enctype="multipart/form-data"
					class="space-y-8"
					use:enhance={({ formElement, formData, cancel }) => {
						// Realizar validação antes de enviar o formulário
						const invalidFields = validateForm(formData);

						if (invalidFields.length > 0) {
							invalidFields.forEach((field) => {
								const errorMessage = errorMessages[field] || 'Campo inválido';
								toast.error(errorMessage);
							});
							cancel(); // Cancela o envio do formulário
							return;
						}

						isSubmitting = true;

						return async ({ result, update }) => {
							isSubmitting = false;

							if (result.type === 'failure') {
								// Exibir mensagens de erro
								toast.error('Erro ao enviar currículo. Verifique os campos e tente novamente.');
							} else if (result.type === 'success') {
								// Exibir mensagem de sucesso
								toast.success('Currículo enviado com sucesso! Entraremos em contato em breve.');
								// Atualizar o formulário
								update();
								// Redefinir o formulário após o sucesso
								formElement.reset();
								nome = '';
								telefone = '';
							}
						};
					}}
				>
					<!-- Nome e Email -->
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div class="space-y-2">
							<Label for="nome" class="text-foreground text-sm font-semibold">Nome Completo *</Label
							>
							<Input
								id="nome"
								required
								type="text"
								autocomplete="name"
								autocorrect="off"
								autocapitalize="words"
								class="bg-input border-border text-foreground placeholder:text-muted-foreground h-12 transition-colors focus:border-orange-500 focus:ring-orange-500"
								placeholder="Digite seu nome completo"
								name="nome"
								bind:value={nome}
								oninput={() => {
									nome = validateNome(nome);
								}}
							/>
						</div>

						<div class="space-y-2">
							<Label for="email" class="text-foreground text-sm font-semibold">E-mail *</Label>
							<Input
								id="email"
								required
								type="email"
								autocomplete="email"
								autocorrect="off"
								autocapitalize="off"
								name="emailRemetente"
								class="bg-input border-border text-foreground placeholder:text-muted-foreground h-12 transition-colors focus:border-orange-500 focus:ring-orange-500"
								placeholder="seu.email@exemplo.com"
							/>
						</div>
					</div>

					<!-- Telefone e Vaga -->
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div class="space-y-2">
							<Label for="telefone" class="text-foreground text-sm font-semibold">Telefone *</Label>
							<Input
								id="telefone"
								required
								type="tel"
								autocomplete="tel"
								autocorrect="off"
								autocapitalize="off"
								name="telefone"
								class="bg-input border-border text-foreground placeholder:text-muted-foreground h-12 transition-colors focus:border-orange-500 focus:ring-orange-500"
								placeholder="(11) 99999-9999"
								bind:value={telefone}
								oninput={() => {
									telefone = formatTelefone(telefone);
								}}
							/>
						</div>

						<div class="space-y-2">
							<Label for="vaga" class="text-foreground text-sm font-semibold">
								Vaga de Interesse *
							</Label>
							<Input
								id="vaga"
								required
								type="text"
								autocomplete="off"
								autocorrect="off"
								autocapitalize="words"
								class="bg-input border-border text-foreground placeholder:text-muted-foreground h-12 transition-colors focus:border-orange-500 focus:ring-orange-500"
								placeholder="Ex: Analista de Suporte, Desenvolvedor..."
								name="vagaDesejada"
							/>
						</div>
					</div>

					<!-- Mensagem -->
					<div class="space-y-2">
						<Label for="mensagem" class="text-foreground text-sm font-semibold">Mensagem *</Label>
						<Textarea
							id="mensagem"
							rows={6}
							required
							name="mensagem"
							placeholder="Conte-nos um pouco sobre você, suas experiências profissionais, principais conquistas e por que deseja fazer parte da nossa equipe..."
							class="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none transition-colors focus:border-orange-500 focus:ring-orange-500"
						></Textarea>
					</div>

					<!-- Upload Currículo -->
					<div class="space-y-2">
						<Label for="curriculo" class="text-foreground text-sm font-semibold">
							Currículo (PDF) *
						</Label>
						<div class="relative">
							<input
								id="curriculo"
								type="file"
								name="curriculo"
								accept="application/pdf"
								required
								class="text-foreground bg-input border-border block h-14 w-full cursor-pointer rounded-lg border px-4 py-2 text-sm transition-colors file:mr-4 file:rounded-full file:border-0 file:bg-orange-500/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-orange-300 hover:file:bg-orange-500/30 focus:border-orange-500 focus:ring-orange-500"
							/>
							<p class="text-muted-foreground mt-2 text-xs">
								Apenas arquivos PDF são aceitos. Tamanho máximo: 5MB
							</p>
						</div>
					</div>

					<!-- Buttons -->
					<div class="flex flex-col gap-4 pt-6 sm:flex-row sm:justify-center">
						<Button
							type="reset"
							variant="outline"
							size="lg"
							class="border-border text-muted-foreground bg-muted/30 hover:bg-muted/50 hover:text-foreground h-12 px-8 transition-colors"
							onclick={() => {
								nome = '';
								telefone = '';
							}}
							disabled={isSubmitting}
						>
							<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
								></path>
							</svg>
							Limpar Campos
						</Button>

						<Button
							type="submit"
							size="lg"
							class="h-12 bg-gradient-to-r from-orange-600 to-orange-500 px-8 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:from-orange-700 hover:to-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
							disabled={isSubmitting}
						>
							{#if isSubmitting}
								<svg class="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Enviando...
							{:else}
								<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
									></path>
								</svg>
								Enviar Currículo
							{/if}
						</Button>
					</div>
				</form>
			</div>

			<!-- Footer Info -->
			<div class="bg-muted/50 border-border border-t px-8 py-6 sm:px-12">
				<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
					<div class="text-muted-foreground flex items-center text-sm">
						<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							></path>
						</svg>
						Suas informações são tratadas com total confidencialidade
					</div>
					<div class="text-muted-foreground mt-2 text-sm sm:mt-0">
						Responderemos em até 5 dias úteis
					</div>
				</div>
			</div>
		</div>

		<!-- Additional Info Section -->
		<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 ring-2 ring-blue-500/30"
				>
					<svg class="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="text-foreground mb-2 text-lg font-semibold">Crescimento Acelerado</h3>
				<p class="text-muted-foreground">
					Oportunidades reais de desenvolvimento profissional e crescimento na carreira.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 ring-2 ring-green-500/30"
				>
					<svg class="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<h3 class="text-foreground mb-2 text-lg font-semibold">Ambiente Colaborativo</h3>
				<p class="text-muted-foreground">
					Trabalhe em uma equipe unida, com foco na inovação e excelência.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 ring-2 ring-purple-500/30"
				>
					<svg
						class="h-6 w-6 text-purple-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path>
					</svg>
				</div>
				<h3 class="text-foreground mb-2 text-lg font-semibold">Benefícios Completos</h3>
				<p class="text-muted-foreground">
					Pacote de benefícios competitivo e ambiente de trabalho que valoriza o bem-estar.
				</p>
			</div>
		</div>
	</div>
</div>
