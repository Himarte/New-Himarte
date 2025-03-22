<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import type { FormData } from './types';
	import { browser } from '$app/environment';
	import { toast } from 'svelte-sonner';

	let { 
		formData = $bindable(),
		validationChange
	} = $props<{ 
		formData: FormData,
		validationChange: (detail: { validarStep2: () => boolean }) => void
	}>();
	
	// Estados para controlar a visibilidade e status do formulário
	let cepConsultado = $state(false);
	let carregando = $state(false);

	// Função para formatar o CEP (99999-999)
	function formatarCEP(cep: string): string {
		const apenasNumeros = cep.replace(/\D/g, '').slice(0, 8);
		return apenasNumeros.replace(/(\d{5})(\d{3})/, '$1-$2');
	}

	// Mapa de campos obrigatórios e disponíveis
	const camposDisponiveis = $state({
		rua: false,
		bairro: false,
		cidade: true,
		estado: true
	});

	// Função para validar step 2 considerando os campos disponíveis
	function validarStep2() {
		const todosCamposNecessariosPreenchidos = 
			formData.cep && 
			formData.numero && 
			formData.cidade && 
			formData.estado &&
			// Se o campo não está disponível na API, verifica se foi preenchido manualmente
			(camposDisponiveis.rua || formData.rua) &&
			(camposDisponiveis.bairro || formData.bairro);
		
		return todosCamposNecessariosPreenchidos;
	}

	// Manipulador de evento para o CEP
	async function handleCEPInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const cepAnterior = formData.cep;
		const cepDigitado = input.value;
		
		// Formata o CEP
		formData.cep = formatarCEP(cepDigitado);
		input.value = formData.cep;
		
		// Verifica se o CEP tem 8 dígitos (completo) e se mudou
		const cepNumeros = formData.cep.replace(/\D/g, '');
		
		if (cepNumeros.length === 8 && cepAnterior !== formData.cep && browser) {
			try {
				// Reset de estados
				cepConsultado = false;
				carregando = true;
				
				// Busca dados na API do ViaCEP
				const response = await fetch(`https://viacep.com.br/ws/${cepNumeros}/json/`);
				
				if (!response.ok) {
					throw new Error('Erro ao buscar CEP');
				}
				
				const data = await response.json();
				
				// Verifica se a API retornou erro
				if (data.erro) {
					toast.error('CEP não encontrado');
					carregando = false;
					return;
				}
				
				// Identifica quais campos estão disponíveis
				camposDisponiveis.rua = !!data.logradouro;
				camposDisponiveis.bairro = !!data.bairro;
				camposDisponiveis.cidade = !!data.localidade;
				camposDisponiveis.estado = !!data.uf;
				
				// Preenche os campos com os dados retornados
				formData.cidade = data.localidade || '';
				formData.bairro = data.bairro || '';
				formData.rua = data.logradouro || '';
				formData.estado = data.uf || '';
				
				// Marca como consultado e remove o carregamento
				cepConsultado = true;
				carregando = false;
				
				// Move o foco para o próximo campo a ser preenchido
				setTimeout(() => {
					let nextInput: HTMLElement | null = null;
					
					if (!camposDisponiveis.rua) {
						nextInput = document.querySelector('input[name="rua"]');
					} else if (!camposDisponiveis.bairro) {
						nextInput = document.querySelector('input[name="bairro"]');
					} else {
						nextInput = document.querySelector('input[name="numero"]');
					}
					
					if (nextInput) {
						(nextInput as HTMLInputElement).focus();
					}
				}, 100);
				
				// Emite evento com função personalizada de validação
				validationChange({ validarStep2 });
				
			} catch (error) {
				console.error('Erro ao buscar CEP:', error);
				toast.error('Erro ao buscar informações do CEP');
				carregando = false;
			}
		}
	}
	
	// Emite evento inicial com função personalizada de validação
	$effect(() => {
		validationChange({ validarStep2 });
	});
</script>

<div class="w-full flex flex-col gap-8 h-full">
	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="cep">CEP*</Label>
			<Input
				name="cep"
				autocomplete="off"
				placeholder="00000-000"
				type="text"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				bind:value={formData.cep}
				on:input={handleCEPInput}
			/>
			{#if carregando}
				<p class="text-sm text-orange-500 mt-1">Consultando CEP...</p>
			{/if}
		</div>
	</div>

	{#if cepConsultado}
		<div class="flex flex-col md:flex-row gap-5 md:gap-8">
			{#if camposDisponiveis.cidade}
				<div class="flex w-full flex-col gap-2">
					<Label for="city">Cidade*</Label>
					<Input
						name="cidade"
						autocomplete="off"
						placeholder="Santa Cruz do Sul"
						class="focus-visible:ring-[#F97316] placeholder:text-sm"
						type="text"
						bind:value={formData.cidade}
						readonly={camposDisponiveis.cidade && !!formData.cidade}
					/>
				</div>
			{/if}
			
			{#if camposDisponiveis.estado}
				<div class="flex w-full flex-col gap-2">
					<Label for="state">Estado*</Label>
					<Input
						name="estado"
						autocomplete="off"
						placeholder="RS"
						class="focus-visible:ring-[#F97316] placeholder:text-sm"
						type="text"
						bind:value={formData.estado}
						readonly={camposDisponiveis.estado && !!formData.estado}
					/>
				</div>
			{/if}
		</div>

		<div class="flex flex-col md:flex-row gap-5 md:gap-8">
			<div class="flex w-full flex-col gap-2">
				<Label for="street">Rua/Avenida*</Label>
				<Input
					name="rua"
					autocomplete="off"
					placeholder={camposDisponiveis.rua ? "Preenchido automaticamente" : "Digite a rua/avenida"}
					class="focus-visible:ring-[#F97316] placeholder:text-sm"
					type="text"
					bind:value={formData.rua}
					readonly={camposDisponiveis.rua && !!formData.rua}
				/>
			</div>
			<div class="flex w-full flex-col gap-2">
				<Label for="district">Bairro*</Label>
				<Input
					name="bairro"
					autocomplete="off"
					placeholder={camposDisponiveis.bairro ? "Preenchido automaticamente" : "Digite o bairro"}
					class="focus-visible:ring-[#F97316] placeholder:text-sm"
					type="text"
					bind:value={formData.bairro}
					readonly={camposDisponiveis.bairro && !!formData.bairro}
				/>
			</div>
		</div>

		<div class="flex flex-col md:flex-row gap-5 md:gap-8">
			<div class="flex w-full flex-col gap-2">
				<Label for="number">Número*</Label>
				<Input
					name="numero"
					autocomplete="off"
					placeholder="290"
					class="focus-visible:ring-[#F97316] placeholder:text-sm"
					type="number"
					bind:value={formData.numero}
				/>
			</div>
			<div class="flex w-full flex-col gap-2">
				<Label for="complement">Complemento</Label>
				<Input
					name="complemento"
					autocomplete="off"
					placeholder="Apto 101"
					class="focus-visible:ring-[#F97316] placeholder:text-sm"
					type="text"
					bind:value={formData.complemento}
				/>
			</div>
		</div>

		<div class="flex flex-col md:flex-row gap-5 md:gap-8">
			<div class="flex w-full flex-col gap-2">
				<Label class="flex gap-1" for="reference">
					Ponto de referência <span class="md:flex hidden">(opcional)</span>
				</Label>
				<Input
					name="pontoReferencia"
					autocomplete="off"
					placeholder="Himarte"
					class="focus-visible:ring-[#F97316] placeholder:text-sm"
					type="text"
					bind:value={formData.pontoReferencia}
				/>
			</div>
		</div>
	{/if}
</div>
