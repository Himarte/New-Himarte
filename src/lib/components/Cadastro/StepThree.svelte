<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { FormData, PlanoModelo } from './types';

	export let formData: FormData;

	const planos = [
		{ value: 'saturno', label: 'Saturno', megas: '400', valor: '99,90' },
		{ value: 'netuno', label: 'Netuno', megas: '600', valor: '109,90' },
		{ value: 'marte', label: 'Marte', megas: '1000', valor: '199,90' },
		{ value: 'venus', label: 'Vênus', megas: '90', valor: '79,90' },
		{ value: 'urano', label: 'Urano', megas: '120', valor: '89,90' },
		{ value: 'jupiter', label: 'Júpiter', megas: '700', valor: '149,90' },
		{ value: 'plutao', label: 'Plutão', megas: '60', valor: '59,90' },
		{ value: 'mercurio', label: 'Mercúrio', megas: '50', valor: '50,00' }
	];

	function formatarCPF(cpf: string): string {
		const apenasNumeros = cpf.replace(/\D/g, '').slice(0, 11);
		return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
	}

	function formatarCNPJ(cnpj: string): string {
		const apenasNumeros = cnpj.replace(/\D/g, '').slice(0, 14);
		return apenasNumeros.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
	}

	function handleCPFInput(event: Event) {
		const input = event.target as HTMLInputElement;
		formData.cpf = formatarCPF(input.value);
		input.value = formData.cpf;
	}

	function handleCNPJInput(event: Event) {
		const input = event.target as HTMLInputElement;
		formData.cnpj = formatarCNPJ(input.value);
		input.value = formData.cnpj;
	}
</script>

<div class="w-full flex flex-col gap-8 h-full">
	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="plano">Selecione o plano*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => {
					const planoSelecionado = planos.find((p) => p.value === value);
					if (planoSelecionado) {
						formData.planoNome = planoSelecionado.label;
						formData.planoMegas = planoSelecionado.megas;
						formData.valorPlano = planoSelecionado.valor;
					}
				}}
				value={planos.find((p) => p.label === formData.planoNome)?.value || ''}
			>
				<Select.Trigger class="focus:ring-[#F97316]">
					{formData.planoNome || 'Selecione'}
				</Select.Trigger>
				<Select.Content>
					{#each planos as plano}
						<Select.Item value={plano.value}>{plano.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label for="megas">Megas</Label>
			<Input
				name="planoMegas"
				autocomplete="off"
				class="focus-visible:ring-[#F97316]"
				type="text"
				bind:value={formData.planoMegas}
				readonly
			/>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="value">Valor mensal</Label>
			<Input
				name="valorPlano"
				autocomplete="off"
				class="focus-visible:ring-[#F97316]"
				type="text"
				bind:value={formData.valorPlano}
				readonly
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label>Tipo de Pessoa*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => (formData.planoModelo = value as PlanoModelo)}
				value={formData.planoModelo}
			>
				<Select.Trigger class="focus:ring-[#F97316]">
					{formData.planoModelo || 'Selecione'}
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="CPF">Pessoa Física (CPF)</Select.Item>
					<Select.Item value="CNPJ">Pessoa Jurídica (CNPJ)</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		{#if formData.planoModelo === 'CPF'}
			<div class="flex w-full flex-col gap-2">
				<Label for="cpf">CPF*</Label>
				<Input
					name="cpf"
					autocomplete="off"
					placeholder="999.999.999-99"
					class="focus-visible:ring-[#F97316]"
					type="text"
					value={formData.cpf}
					on:input={handleCPFInput}
				/>
			</div>
		{:else if formData.planoModelo === 'CNPJ'}
			<div class="flex w-full flex-col gap-2">
				<Label for="cnpj">CNPJ*</Label>
				<Input
					name="cnpj"
					autocomplete="off"
					placeholder="99.999.999/9999-99"
					class="focus-visible:ring-[#F97316]"
					type="text"
					value={formData.cnpj}
					on:input={handleCNPJInput}
				/>
			</div>
		{/if}
		<div class="flex w-full flex-col gap-2">
			<Label for="code">Código promocional</Label>
			<Input
				name="promoCode"
				autocomplete="off"
				class="focus-visible:ring-[#F97316]"
				placeholder="himarte15"
				type="text"
				bind:value={formData.promoCode}
			/>
		</div>
	</div>
</div>
