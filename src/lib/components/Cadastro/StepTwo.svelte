<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import type { FormData } from './types';
	import { browser } from '$app/environment';
	import { toast } from 'svelte-sonner';
	import { cn } from '$lib/utils';
	import { verificarCobertura } from '$lib/data/cobertura';
	import NoCoverageModal from './NoCoverageModal.svelte';

	let { formData = $bindable(), validationChange } = $props<{
		formData: FormData;
		validationChange: (detail: { validarStep2: () => boolean }) => void;
	}>();

	// Estados reativos com runes
	let cepConsultado = $state(false);
	let carregando = $state(false);
	let showNoCoverageModal = $state(false);
	let cidadeSemCobertura = $state('');
	let temCobertura = $state(true);

	// Mapa de campos disponíveis na API
	const camposDisponiveis = $state({
		rua: false,
		bairro: false,
		cidade: true,
		estado: true
	});

	// Formatar CEP (99999-999)
	function formatarCEP(cep: string): string {
		const apenasNumeros = cep.replace(/\D/g, '').slice(0, 8);
		return apenasNumeros.replace(/(\d{5})(\d{3})/, '$1-$2');
	}

	// Função para validar os campos do step 2
	function validarStep2() {
		// Se não tem cobertura, não permite avançar
		if (!temCobertura) {
			showNoCoverageModal = true;
			return false;
		}

		return Boolean(
			formData.cep &&
				formData.numero &&
				formData.cidade &&
				formData.estado &&
				(camposDisponiveis.rua || formData.rua) &&
				(camposDisponiveis.bairro || formData.bairro)
		);
	}

	// Manipulador de evento para consulta do CEP
	async function handleCEPInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const cepAnterior = formData.cep;

		// Formata o CEP
		formData.cep = formatarCEP(input.value);
		input.value = formData.cep;

		// Verifica se o CEP está completo e foi alterado
		const cepNumeros = formData.cep.replace(/\D/g, '');

		if (cepNumeros.length === 8 && cepAnterior !== formData.cep && browser) {
			try {
				cepConsultado = false;
				carregando = true;

				// Consulta API do ViaCEP
				const response = await fetch(`https://viacep.com.br/ws/${cepNumeros}/json/`);

				if (!response.ok) {
					throw new Error('Erro ao buscar CEP');
				}

				const data = await response.json();

				if (data.erro) {
					toast.error('CEP não encontrado');
					carregando = false;
					return;
				}

				// Identifica campos disponíveis
				camposDisponiveis.rua = !!data.logradouro;
				camposDisponiveis.bairro = !!data.bairro;
				camposDisponiveis.cidade = !!data.localidade;
				camposDisponiveis.estado = !!data.uf;

				// Preenche campos com dados da API
				formData.cidade = data.localidade || '';
				formData.bairro = data.bairro || '';
				formData.rua = data.logradouro || '';
				formData.estado = data.uf || '';

				// Verificar cobertura na cidade
				if (data.localidade) {
					temCobertura = verificarCobertura(data.localidade);
					if (!temCobertura) {
						cidadeSemCobertura = data.localidade;
						showNoCoverageModal = true;
					}
				}

				cepConsultado = true;
				carregando = false;

				// Foco no próximo campo
				setTimeout(() => {
					const nextInput = !camposDisponiveis.rua
						? document.querySelector('input[name="rua"]')
						: !camposDisponiveis.bairro
							? document.querySelector('input[name="bairro"]')
							: document.querySelector('input[name="numero"]');

					if (nextInput) {
						(nextInput as HTMLInputElement).focus();
					}
				}, 100);
			} catch (error) {
				console.error('Erro ao buscar CEP:', error);
				toast.error('Erro ao buscar informações do CEP');
				carregando = false;
			}
		}
	}

	// Emite evento com a função de validação
	$effect(() => {
		validationChange({ validarStep2 });
	});
</script>

<div class="flex h-full w-full flex-col gap-6 sm:gap-8">
	<div class="flex flex-col gap-5 sm:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="cep">CEP*</Label>
			<Input
				name="cep"
				autocomplete="off"
				placeholder="Digite seu CEP"
				type="text"
				class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
				bind:value={formData.cep}
				oninput={handleCEPInput}
			/>
			{#if carregando}
				<p class="mt-1 text-sm text-orange-500">Consultando CEP...</p>
			{/if}
		</div>
	</div>

	{#if cepConsultado}
		<div class="flex flex-col gap-5 sm:gap-8">
			<div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
				{#if camposDisponiveis.cidade}
					<div class="flex w-full flex-col gap-2">
						<Label for="city">Cidade*</Label>
						<Input
							name="cidade"
							autocomplete="off"
							placeholder="Digite sua cidade"
							class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
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
							placeholder="Digite seu estado"
							class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
							type="text"
							bind:value={formData.estado}
							readonly={camposDisponiveis.estado && !!formData.estado}
						/>
					</div>
				{/if}
			</div>

			<div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
				<div class="flex w-full flex-col gap-2">
					<Label for="street">Rua/Avenida*</Label>
					<Input
						name="rua"
						autocomplete="off"
						placeholder={camposDisponiveis.rua
							? 'Preenchido automaticamente'
							: 'Digite a rua/avenida'}
						class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
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
						placeholder={camposDisponiveis.bairro
							? 'Preenchido automaticamente'
							: 'Digite o bairro'}
						class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
						type="text"
						bind:value={formData.bairro}
						readonly={camposDisponiveis.bairro && !!formData.bairro}
					/>
				</div>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
				<div class="flex w-full flex-col gap-2">
					<Label for="number">Número*</Label>
					<Input
						name="numero"
						autocomplete="off"
						placeholder="Digite seu número"
						class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
						type="number"
						bind:value={formData.numero}
					/>
				</div>
				<div class="flex w-full flex-col gap-2">
					<Label for="complement">Complemento</Label>
					<Input
						name="complemento"
						autocomplete="off"
						placeholder="Digite seu complemento"
						class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
						type="text"
						bind:value={formData.complemento}
					/>
				</div>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
				<div class="flex w-full flex-col gap-2">
					<Label class="flex gap-1" for="reference">
						Ponto de referência <span class="hidden sm:inline">(opcional)</span>
					</Label>
					<Input
						name="pontoReferencia"
						autocomplete="off"
						placeholder="Digite seu ponto de referência"
						class="placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
						type="text"
						bind:value={formData.pontoReferencia}
					/>
				</div>
			</div>
		</div>
	{/if}
</div>

<!-- Modal de Sem Cobertura -->
<NoCoverageModal bind:open={showNoCoverageModal} cidade={cidadeSemCobertura} {formData} />
