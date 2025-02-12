<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { FormData, Genero } from './types';

	export let formData: FormData;

	const generos: { value: Genero; label: string }[] = [
		{ value: 'masculino', label: 'Masculino' },
		{ value: 'feminino', label: 'Feminino' },
		{ value: 'outro', label: 'Outro' }
	];

	function formatarTelefone(telefone: string): string {
		// Remove tudo que não for número
		let apenasNumeros = telefone.replace(/\D/g, '');

		// Limita a 11 dígitos
		apenasNumeros = apenasNumeros.slice(0, 11);

		// Aplica a máscara conforme vai digitando
		let telefoneFormatado = apenasNumeros;

		if (apenasNumeros.length > 2) {
			telefoneFormatado = `(${apenasNumeros.slice(0, 2)})`;

			if (apenasNumeros.length > 2) {
				telefoneFormatado += ` ${apenasNumeros.slice(2, 7)}`;
			}

			if (apenasNumeros.length > 7) {
				telefoneFormatado += `-${apenasNumeros.slice(7, 11)}`;
			}
		} else if (apenasNumeros.length > 0) {
			telefoneFormatado = `(${apenasNumeros}`;
		}

		return telefoneFormatado;
	}

	function handleTelefoneInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const valorFormatado = formatarTelefone(input.value);
		formData.telefone = valorFormatado;

		// Atualiza o valor do input para manter o cursor na posição correta
		input.value = valorFormatado;
	}

	// Validação de data máxima (hoje)
	const hoje = new Date().toISOString().split('T')[0];
</script>

<div class="w-full flex flex-col gap-5 h-full">
	<div class="flex flex-col gap-2">
		<Label for="name">Nome completo*</Label>
		<Input
			type="text"
			name="fullName"
			autocomplete="off"
			placeholder="Marcos Silva"
			class="focus-visible:ring-[#F97316] placeholder:text-sm"
			bind:value={formData.fullName}
		/>
	</div>

	<div class="flex w-full gap-2">
		<div class="flex flex-col gap-2 w-1/3">
			<Label for="telefone">Telefone*</Label>
			<Input
				type="tel"
				name="telefone"
				autocomplete="off"
				placeholder="(51) 99999-9999"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				value={formData.telefone}
				on:input={handleTelefoneInput}
			/>
		</div>
		<div class="flex flex-col gap-2 w-1/3">
			<Label for="genero">Gênero*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => (formData.genero = value as Genero)}
				value={formData.genero}
			>
				<Select.Trigger class="focus:ring-[#F97316]">
					{formData.genero || 'Selecione'}
				</Select.Trigger>
				<Select.Content>
					{#each generos as genero}
						<Select.Item value={genero.value}>{genero.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<div class="flex flex-col gap-2 w-1/3">
			<Label for="dataNascimento">Data de Nascimento*</Label>
			<Input
				type="date"
				name="dataNascimento"
				autocomplete="off"
				max={hoje}
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				bind:value={formData.dataNascimento}
			/>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<Label for="email">E-mail*</Label>
		<Input
			type="email"
			name="emailCliente"
			autocomplete="off"
			placeholder="exemplo@gmail.com"
			class="focus-visible:ring-[#F97316] placeholder:text-sm"
			bind:value={formData.emailCliente}
		/>
	</div>
</div>
