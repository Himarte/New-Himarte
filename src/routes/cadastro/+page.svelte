<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { CheckCircle2 } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import StepOne from '$lib/components/Cadastro/StepOne.svelte';
	import StepTwo from '$lib/components/Cadastro/StepTwo.svelte';
	import StepThree from '$lib/components/Cadastro/StepThree.svelte';
	import type { FormData } from '$lib/components/Cadastro/types';
	import type { SubmitFunction } from '@sveltejs/kit';

	// Estado do formulário usando runes
	let currentStep = $state(1);
	let isSubmitting = $state(false);

	// Dados do formulário
	let formData = $state<FormData>({
		// Dados pessoais (Step 1)
		fullName: '',
		genero: '',
		dataNascimento: '',
		telefone: '',
		emailCliente: '',

		// Endereço (Step 2)
		cep: '',
		cidade: '',
		rua: '',
		bairro: '',
		estado: '',
		numero: '',
		complemento: '',
		pontoReferencia: '',

		// Plano (Step 3)
		planoNome: '',
		planoMegas: '',
		valorPlano: '',
		planoModelo: 'CPF',
		cpf: '',
		cnpj: '',
		promoCode: ''
	});

	// Função de validação personalizada do StepTwo
	let validarStep2 = $state<(() => boolean) | null>(null);

	// Validação por etapa
	const validarEtapa = {
		1: (): boolean => {
			return Boolean(
				formData.fullName &&
					formData.genero &&
					formData.dataNascimento &&
					formData.telefone &&
					formData.emailCliente
			);
		},
		2: (): boolean => {
			// Usa função personalizada do StepTwo se disponível
			if (validarStep2) {
				return validarStep2();
			}
			// Fallback para validação básica
			return Boolean(
				formData.cep &&
					formData.cidade &&
					formData.rua &&
					formData.bairro &&
					formData.estado &&
					formData.numero
			);
		},
		3: (): boolean => {
			return Boolean(
				formData.planoNome &&
					formData.planoMegas &&
					formData.planoModelo &&
					((formData.planoModelo === 'CPF' && formData.cpf) ||
						(formData.planoModelo === 'CNPJ' && formData.cnpj))
			);
		}
	};

	// Recebe função de validação do StepTwo
	function handleValidationChange(detail: { validarStep2: () => boolean }) {
		validarStep2 = detail.validarStep2;
	}

	// Navegação entre etapas
	function navegarEtapa(direcao: 'proximo' | 'anterior') {
		if (direcao === 'proximo' && currentStep < 3) {
			if (validarEtapa[currentStep as keyof typeof validarEtapa]()) {
				currentStep++;
			} else {
				toast.error('Por favor, preencha todos os campos obrigatórios');
			}
		} else if (direcao === 'anterior' && currentStep > 1) {
			currentStep--;
		}
	}

	// Etapas do cadastro
	const etapas = ['Dados Pessoais', 'Endereço', 'Dados Contratuais'];

	// Gerenciador de submissão do formulário
	const submeterFormulario: SubmitFunction = ({ formData: submitFormData, cancel }) => {
		// Validação antes de enviar
		if (!validarEtapa[3]()) {
			toast.error('Por favor, preencha todos os campos obrigatórios');
			cancel();
			return;
		}

		isSubmitting = true;
		toast.loading('Enviando cadastro...');

		// Adiciona os dados do formulário ao FormData
		Object.entries(formData).forEach(([key, value]) => {
			if (value) {
				submitFormData.append(key, value.toString());
			}
		});

		return async ({ result }) => {
			isSubmitting = false;
			toast.dismiss();

			// Função para processar mensagens do Voalle
			const processarMensagensVoalle = (voalleResult: any) => {
				if (!voalleResult) return;

				// Apenas processar mensagens se não for um erro principal já exibido
				if (voalleResult.success) {
					// Verifica se há mensagens específicas de sucesso ou avisos
					if (voalleResult.data?.messages?.length > 0) {
						voalleResult.data.messages.forEach((msg: any) => {
							const tipo =
								msg.type === 'Success' ? 'success' : msg.type === 'Warning' ? 'warning' : 'info';
							toast[tipo](`Voalle: ${msg.message}`);
						});
					}
				}
				// Não exibimos erros do Voalle aqui para evitar duplicidade
			};

			// Processar resultado da submissão
			if (result.type === 'success') {
				// Exibe mensagem de sucesso para o fluxo completo
				toast.success(result.data?.mensagem || 'Cadastro realizado com sucesso!');

				// Exibe detalhes do Voalle se disponíveis
				processarMensagensVoalle(result.data?.voalleResult);

				// Exibe detalhes do sistema Indica se disponíveis
				if (result.data?.indicaResult?.message) {
					toast.success(`Indica: ${result.data.indicaResult.message}`);
				}

				// Resetar formulário após sucesso
				formData = {
					fullName: '',
					genero: '',
					dataNascimento: '',
					telefone: '',
					emailCliente: '',
					cep: '',
					cidade: '',
					rua: '',
					bairro: '',
					estado: '',
					numero: '',
					complemento: '',
					pontoReferencia: '',
					planoNome: '',
					planoMegas: '',
					valorPlano: '',
					planoModelo: 'CPF',
					cpf: '',
					cnpj: '',
					promoCode: ''
				};
				currentStep = 1;
			} else if (result.type === 'failure') {
				// Exibe mensagem principal de erro (que já contém a mensagem do Voalle)
				toast.error(result.data?.mensagem || 'Erro ao processar o cadastro');

				// Não processamos as mensagens de erro do Voalle aqui para evitar duplicidade
				// Apenas processamos mensagens de sucesso ou avisos
				if (result.data?.voalleResult?.success) {
					processarMensagensVoalle(result.data.voalleResult);
				}

				// Exibe detalhes do erro do sistema Indica
				if (result.data?.indicaResult?.message) {
					toast.error(`Indica: ${result.data.indicaResult.message}`);
				}

				// Exibe erro específico do Indica se disponível
				if (result.data?.indicaError) {
					toast.error(`Erro Indica: ${result.data.indicaError}`);
				}
			} else {
				toast.error('Erro ao processar o cadastro');
			}
		};
	};
</script>

<div class="min-h-full w-full flex items-center justify-center pt-28">
	<form
		method="POST"
		action="?/novoCadastro"
		class="w-fit flex h-full flex-col gap-7"
		use:enhance={submeterFormulario}
	>
		<div class="flex flex-col gap-1 items-center">
			<h1 class="font-bold text-center text-4xl">Quase lá! Complete seu cadastro</h1>
			<p class="text-sm text-center text-gray-400">
				Preencha os dados para finalizar e aproveitar seu plano de internet.
			</p>
		</div>

		<!-- Indicador de progresso -->
		<div class="flex items-center justify-center w-full gap-2">
			{#each etapas as etapa, index}
				{@const numeroEtapa = index + 1}
				<div class="flex items-center gap-2">
					<!-- Número/Ícone e Label da Etapa -->
					<div
						class="flex items-center transition-colors duration-200
						{currentStep >= numeroEtapa ? 'text-orange-500' : 'text-gray-400'}
						{currentStep === numeroEtapa ? 'font-semibold' : ''}"
					>
						{#if currentStep > numeroEtapa}
							<CheckCircle2 class="h-4 w-4 md:h-5 md:w-5 text-orange-500 transition-all" />
						{:else}
							<span
								class="hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-current"
							>
								{numeroEtapa}
							</span>
						{/if}

						<span class="ml-2 text-base">
							{etapa}
						</span>
					</div>

					<!-- Separador entre etapas -->
					{#if numeroEtapa < 3}
						<Separator
							class="w-32 border-[0.05rem] transition-colors duration-200
								{currentStep > numeroEtapa ? 'bg-orange-500' : 'bg-gray-200'}"
						/>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Conteúdo do formulário -->
		<div class="min-h-96 w-full">
			{#if currentStep === 1}
				<StepOne {formData} />
			{:else if currentStep === 2}
				<StepTwo {formData} validationChange={handleValidationChange} />
			{:else}
				<StepThree {formData} />
			{/if}
		</div>

		<!-- Botões de navegação -->
		<div class="flex justify-between w-full">
			<Button
				type="button"
				variant="secondary"
				class="w-28"
				onclick={() => navegarEtapa('anterior')}
				disabled={currentStep === 1 || isSubmitting}
			>
				Voltar
			</Button>

			{#if currentStep < 3}
				<Button
					type="button"
					variant="default"
					class="w-28 bg-orange-600 text-white font-semibold hover:bg-orange-700"
					onclick={() => navegarEtapa('proximo')}
					disabled={isSubmitting}
				>
					Continuar
				</Button>
			{:else}
				<Button
					type="submit"
					variant="default"
					class="w-28 bg-orange-600 text-white font-semibold hover:bg-orange-700"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Enviando...' : 'Finalizar'}
				</Button>
			{/if}
		</div>
	</form>
</div>
