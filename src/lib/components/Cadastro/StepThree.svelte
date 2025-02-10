<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { FormData } from './types';

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

	const metodoPagamento = [
		{ value: 'boleto', label: 'Boleto' },
		{ value: 'pix', label: 'Pix' },
		{ value: 'credito', label: 'Cartão de crédito' },
		{ value: 'debito', label: 'Cartão de débito' }
	];
</script>

<div class="w-full flex flex-col gap-8 h-full">
	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="plano">Selecione o plano*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => (formData.planoSelecionado = value)}
				value={formData.planoSelecionado}
			>
				<Select.Trigger class="focus:ring-[#F97316]">
					{formData.planoSelecionado || 'Selecione'}
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
				name="megasPlano"
				autocomplete="off"
				class="focus-visible:ring-[#F97316]"
				type="text"
				bind:value={formData.megasPlano}
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
				type="number"
				bind:value={formData.valorPlano}
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label>Método de pagamento*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => (formData.metodoPagamento = value)}
				value={formData.metodoPagamento}
			>
				<Select.Trigger class="focus:ring-[#F97316]">
					{formData.metodoPagamento || 'Selecione'}
				</Select.Trigger>
				<Select.Content>
					{#each metodoPagamento as metodo}
						<Select.Item value={metodo.value}>{metodo.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="cpf">CPF*</Label>
			<Input
				name="cpf"
				autocomplete="off"
				placeholder="999.999.999-99"
				class="focus-visible:ring-[#F97316]"
				type="text"
				bind:value={formData.cpf}
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label for="code">Código promocional</Label>
			<Input
				name="codigoDesconto"
				autocomplete="off"
				class="focus-visible:ring-[#F97316]"
				placeholder="himarte15"
				type="text"
				bind:value={formData.codigoDesconto}
			/>
		</div>
	</div>
</div>
