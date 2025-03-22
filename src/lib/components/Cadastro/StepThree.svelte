<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { FormData, PlanoModelo } from './types';
	import { browser } from '$app/environment';

	export let formData: FormData;
	
	interface PlanoItem {
		value: string;
		label: string;
		megas: string;
		valor?: string;
	}

	const planosCPF = [
		{ value: 'saturno', label: 'Saturno', megas: '400', valor: '99,90' },
		{ value: 'netuno', label: 'Netuno', megas: '600', valor: '109,90' },
		{ value: 'marte', label: 'Marte', megas: '1000', valor: '199,90' },
		{ value: 'venus', label: 'Vênus', megas: '90', valor: '79,90' },
		{ value: 'urano', label: 'Urano', megas: '120', valor: '89,90' },
		{ value: 'jupiter', label: 'Júpiter', megas: '700', valor: '149,90' },
		{ value: 'plutao', label: 'Plutão', megas: '60', valor: '59,90' },
		{ value: 'mercurio', label: 'Mercúrio', megas: '50', valor: '50,00' }
	];



	const planosCNPJ: PlanoItem[] = [
		{ value: 'venus', label: 'Vênus', megas: '300' },
		{ value: 'marte', label: 'Marte', megas: '500' },
		{ value: 'jupiter', label: 'Júpiter', megas: '1000' },
		{ value: 'urano', label: 'Urano', megas: '300' },
		{ value: 'plutao', label: 'Plutão', megas: '200' },
		{ value: 'fibra dedicada', label: 'Fibra Dedicada', megas: 'Ilimitado' },	
	];
	
	let planosAtuais = formData.planoModelo === 'CNPJ' ? planosCNPJ : planosCPF;
	
	// Função para processar os parâmetros da URL
	function processarParametrosURL() {
		if (!browser) return;
		
		try {
			const url = new URL(window.location.href);
			const planoParam = url.searchParams.get('plano');
			const tipoParam = url.searchParams.get('tipo');
			const megasParam = url.searchParams.get('megas');
			const valorParamRaw = url.searchParams.get('valor');
			
			if (!planoParam) return;
			
			// Determinamos o tipo do plano
			if (tipoParam === 'CNPJ' || tipoParam === 'CPF') {
				formData.planoModelo = tipoParam as PlanoModelo;
				planosAtuais = tipoParam === 'CNPJ' ? planosCNPJ : planosCPF;
			}
			
			// Buscamos o plano nos disponíveis
			const planoEncontrado = planosAtuais.find(
				(p: PlanoItem) => p.value === planoParam.toLowerCase() || 
					p.label.toLowerCase() === planoParam.toLowerCase()
			);
			
			if (planoEncontrado) {
				// Se encontramos o plano, usamos seus dados
				formData.planoNome = planoEncontrado.label;
				formData.planoMegas = planoEncontrado.megas;
				if (planoEncontrado.valor) {
					formData.valorPlano = planoEncontrado.valor;
				} else if (valorParamRaw) {
					formData.valorPlano = valorParamRaw;
				}
			} else if (megasParam) {
				// Se não encontrou o plano mas tem os outros parâmetros
				formData.planoNome = planoParam.charAt(0).toUpperCase() + planoParam.slice(1);
				formData.planoMegas = megasParam as string;
				if (valorParamRaw) {
					formData.valorPlano = valorParamRaw as string;
				}
			}
		} catch (error) {
			console.error('Erro ao processar parâmetros da URL:', error);
		}
	}
	
	// Chamamos a função quando o componente é carregado
	processarParametrosURL();

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
	
	// Atualizamos a lista de planos quando o modelo mudar
	$: planosAtuais = formData.planoModelo === 'CNPJ' ? planosCNPJ : planosCPF;
</script>

<div class="w-full flex flex-col gap-8 h-full">
	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label>Tipo de Plano*</Label>
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
		<div class="flex w-full flex-col gap-2">
			<Label for="plano">Plano selecionado*</Label>
			<Select.Root
				type="single"
				onValueChange={(value) => {
					const planoSelecionado = planosAtuais.find((p) => p.value === value);
					if (planoSelecionado) {
						formData.planoNome = planoSelecionado.label;
						formData.planoMegas = planoSelecionado.megas;
						formData.valorPlano = planoSelecionado.valor || '';
					}
				}}
				value={planosAtuais.find((p) => p.label === formData.planoNome)?.value || ''}
			>
				<Select.Trigger class="focus:ring-[#F97316]">
					{formData.planoNome || 'Selecione'}
				</Select.Trigger>
				<Select.Content>
					{#each planosAtuais as plano}
						<Select.Item value={plano.value}>{plano.label}</Select.Item>
					{/each}
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
				placeholder="123.456.789-10"
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
				placeholder="12.345.678/0001-00"
				class="focus-visible:ring-[#F97316]"
				type="text"
				value={formData.cnpj}
				on:input={handleCNPJInput}
			/>
		</div>
	{/if}
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
		
	</div>
	
	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="megas">Velocidade e Megas</Label>
			<Input
				name="planoMegas"
				autocomplete="off"
				class="focus-visible:ring-[#F97316]"
				type="text"
				bind:value={formData.planoMegas}
				readonly
			/>
		</div>
	
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
