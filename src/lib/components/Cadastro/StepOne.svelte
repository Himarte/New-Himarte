<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import * as Popover from '$lib/components/ui/popover';
	import { Calendar } from '$lib/components/ui/calendar';
	import { Button } from '$lib/components/ui/button';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import type { FormData, Genero } from './types';
	import { cn } from '$lib/utils';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		CalendarDate,
		today
	} from '@internationalized/date';

	let { formData = $bindable() } = $props<{
		formData: FormData;
	}>();

	const generos: { value: Genero; label: string }[] = [
		{ value: 'masculino', label: 'Masculino' },
		{ value: 'feminino', label: 'Feminino' },
		{ value: 'outro', label: 'Outro' }
	];

	// Formatador de data em português
	const df = new DateFormatter('pt-BR', {
		dateStyle: 'long'
	});

	// Converte string (YYYY-MM-DD) para DateValue
	function stringToDateValue(dateString: string): DateValue | undefined {
		if (!dateString) return undefined;
		const [year, month, day] = dateString.split('-').map(Number);
		if (year && month && day) {
			return new CalendarDate(year, month, day);
		}
		return undefined;
	}

	// Converte DateValue para string (YYYY-MM-DD)
	function dateValueToString(dateValue: DateValue | undefined): string {
		if (!dateValue) return '';
		return `${dateValue.year}-${String(dateValue.month).padStart(2, '0')}-${String(dateValue.day).padStart(2, '0')}`;
	}

	// Estado interno do date picker
	let dateValue = $state<DateValue | undefined>(stringToDateValue(formData.dataNascimento));

	// Sincroniza dateValue -> formData.dataNascimento
	$effect(() => {
		formData.dataNascimento = dateValueToString(dateValue);
	});

	// Data máxima (hoje) - não pode nascer no futuro
	const maxDate = today(getLocalTimeZone());

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
</script>

<div class="flex h-full w-full flex-col gap-5">
	<div class="flex flex-col gap-2">
		<Label for="name">Nome completo*</Label>
		<Input
			type="text"
			name="fullName"
			autocomplete="off"
			placeholder="Digite seu nome completo"
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
				placeholder="Digite seu telefone"
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
			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}
						<Button
							variant="outline"
							class={cn(
								'w-full justify-start text-start font-normal focus-visible:ring-0 focus-visible:ring-offset-0',
								!dateValue && 'text-muted-foreground'
							)}
							{...props}
						>
							<CalendarIcon class="mr-2 size-4" />
							{dateValue
								? df.format(dateValue.toDate(getLocalTimeZone()))
								: 'Selecione a data'}
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0">
					<Calendar
						type="single"
						bind:value={dateValue}
						maxValue={maxDate}
						locale="pt-BR"
						captionLayout="dropdown"
						initialFocus
					/>
				</Popover.Content>
			</Popover.Root>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<Label for="email">E-mail*</Label>
		<Input
			type="email"
			name="emailCliente"
			autocomplete="off"
			placeholder="Digite seu e-mail"
			class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
			bind:value={formData.emailCliente}
		/>
	</div>
</div>
