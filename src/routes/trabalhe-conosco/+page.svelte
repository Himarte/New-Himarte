<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { toast } from 'svelte-sonner';

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
		nome: 'Nome inválido',
		telefone: 'Telefone inválido',
		emailRemetente: 'E-mail inválido',
		vagaDesejada: 'Vaga desejada inválida',
		mensagem: 'Mensagem inválida',
		curriculo: 'Currículo inválido'
	};

	// Estado do componente
	let nome = $state('');
	let telefone = $state('');

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

<form
	action="?/enviarEmail"
	method="POST"
	enctype="multipart/form-data"
	class="flex h-full w-full flex-col items-center justify-center gap-5 px-5 pt-28 md:gap-10"
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

		return async ({ result, update }) => {
			if (result.type === 'failure') {
				// Exibir mensagens de erro
				toast.error('Erro ao enviar email, verifique os campos e tente novamente.');
			} else if (result.type === 'success') {
				// Exibir mensagem de sucesso
				toast.success('Enviado com sucesso!');
				// Atualizar o formulário
				update();
				// Redefinir o formulário após o sucesso
				formElement.reset();
			}
		};
	}}
>
	<h1 class="fontSpace text-center text-3xl font-bold text-[#f97316] md:text-5xl">
		Trabalhe Conosco
	</h1>

	<div
		class="flex w-full flex-col items-center justify-center gap-5 rounded-lg border bg-[#0c121d] px-8 py-8 font-inter md:w-[60%]"
	>
		<div class="flex h-full w-full flex-col gap-6 md:flex-row">
			<div class="flex flex-col gap-2 md:w-1/2">
				<Label class="font-semibold">Nome Completo</Label>
				<Input
					required
					type="text"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					class="focus bg-background focus-visible:ring-[#f97316]"
					placeholder="ex. Marcos da Silva"
					name="nome"
					bind:value={nome}
					on:input={() => {
						nome = validateNome(nome);
					}}
				/>
			</div>
			<div class="flex flex-col gap-2 md:w-1/2">
				<Label class="font-semibold">Email</Label>
				<Input
					required
					type="email"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					name="emailRemetente"
					class="bg-background focus-visible:ring-[#f97316]"
					placeholder="ex. marcos@himarte.com.br"
				/>
			</div>
		</div>

		<div class="flex w-full flex-col gap-6 md:flex-row">
			<div class="flex flex-col gap-2 md:w-1/2">
				<Label class="font-semibold">Telefone</Label>
				<Input
					required
					type="tel"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					name="telefone"
					class="bg-background focus-visible:ring-[#f97316]"
					placeholder="ex. (51) 99999-9999"
					bind:value={telefone}
					on:input={() => {
						telefone = formatTelefone(telefone);
					}}
				/>
			</div>
			<div class="flex flex-col gap-2 md:w-1/2">
				<Label class="font-semibold">Vaga desejada</Label>
				<Input
					required
					type="text"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					class="bg-background focus-visible:ring-[#f97316]"
					placeholder="ex. Suporte Técnico"
					name="vagaDesejada"
				/>
			</div>
		</div>

		<div class="flex w-full flex-col gap-2">
			<Label class="flex font-semibold">Mensagem/Corpo do e-mail</Label>
			<Textarea
				rows={7}
				required
				name="mensagem"
				placeholder="Conte-nos um pouco sobre você, suas experiências e por que deseja trabalhar conosco."
				class="resize-none bg-background focus-visible:ring-[#f97316]"
			></Textarea>
		</div>

		<div class="flex w-full flex-col gap-2">
			<Label for="curriculo" class="text-sm font-semibold">Currículo</Label>
			<input
				type="file"
				name="curriculo"
				accept="application/pdf"
				required
				class="flex w-full items-center rounded-3xl border bg-background px-3 py-2 text-sm text-gray-600 file:rounded-full file:border-none file:bg-gray-200 file:px-4 file:py-1 file:text-sm file:text-gray-700 focus:outline-none focus:ring focus:ring-[#f97316] focus:ring-opacity-40"
			/>
		</div>
		<div class="flex w-full flex-col justify-center gap-6 md:flex-row">
			<Button
				type="reset"
				variant="outline"
				class="border border-orange-500  bg-[#f97316]/15 hover:bg-[#0F1829] hover:text-orange-500"
				on:click={() => {
					nome = '';
					telefone = '';
				}}
			>
				Limpar Campos
			</Button>
			<Button
				variant="outline"
				type="submit"
				class="border border-orange-500 bg-[#f97316]/15 hover:bg-[#0F1829] hover:text-orange-500"
			>
				Enviar currículo
			</Button>
		</div>
	</div>
</form>
