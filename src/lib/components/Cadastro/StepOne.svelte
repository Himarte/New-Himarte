<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { FormData, Genero } from './types';
	import { cn } from '$lib/utils';

	let { formData = $bindable() } = $props<{
		formData: FormData;
	}>();

	const generos: { value: Genero; label: string }[] = [
		{ value: 'masculino', label: 'Masculino' },
		{ value: 'feminino', label: 'Feminino' },
		{ value: 'outro', label: 'Outro' }
	];

	function formatarTelefone(telefone: string): string {
		const apenasNumeros = telefone.replace(/\D/g, '').slice(0, 11);
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
		formData.telefone = formatarTelefone(input.value);
		input.value = formData.telefone;
	}

	// Data máxima (hoje)
	const hoje = new Date().toISOString().split('T')[0];
</script>

<div class="flex h-full w-full flex-col gap-5">
	<div class="flex flex-col gap-2">
		<Label for="name">Nome completo*</Label>
		<Input
			type="text"
			name="fullName"
			autocomplete="off"
			placeholder="Marcos Silva"
			class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
			bind:value={formData.fullName}
		/>
	</div>

	<div class="flex w-full flex-col gap-4 sm:flex-row sm:gap-2">
		<div class="flex w-full flex-col gap-2 sm:w-1/3">
			<Label for="telefone">Celular*</Label>
			<Input
				type="tel"
				name="telefone"
				autocomplete="off"
				maxlength={15}
				placeholder="(51) 99999-9999"
				class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
				value={formData.telefone}
				oninput={handleTelefoneInput}
			/>
		</div>
		<div class="flex w-full flex-col gap-2 sm:w-1/3">
			<Label for="genero">Gênero*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => (formData.genero = value as Genero)}
				value={formData.genero}
			>
				<Select.Trigger
					class={cn(
						'w-full focus-visible:ring-0 focus-visible:ring-offset-0',
						!formData.genero && 'text-muted-foreground'
					)}
				>
					{formData.genero || 'Selecione'}
				</Select.Trigger>
				<Select.Content>
					{#each generos as genero}
						<Select.Item value={genero.value}>{genero.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<div class="flex w-full flex-col gap-2 sm:w-1/3">
			<Label for="dataNascimento">Data de Nascimento*</Label>
			<Input
				type="date"
				name="dataNascimento"
				autocomplete="off"
				max={hoje}
				class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
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
			class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
			bind:value={formData.emailCliente}
		/>
	</div>
</div>
