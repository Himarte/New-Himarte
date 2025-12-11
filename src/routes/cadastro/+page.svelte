<script lang="ts">
	import { PUBLIC_GOOGLE_ADS_ID } from '$env/static/public';
	import Button from '$lib/components/ui/button/button.svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import StepOne from '$lib/components/Cadastro/StepOne.svelte';
	import StepTwo from '$lib/components/Cadastro/StepTwo.svelte';
	import StepThree from '$lib/components/Cadastro/StepThree.svelte';
	import SuccessModal from '$lib/components/Cadastro/SuccessModal.svelte';
	import type { FormData } from '$lib/components/Cadastro/types';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { cn } from '$lib/utils';
	import { browser } from '$app/environment';

	// Estado do formulário usando runes
	let currentStep = $state(1);
	let isSubmitting = $state(false);
	let isMobile = $state(false);
	let showSuccessModal = $state(false);
	let successClientName = $state('');

	// Verificar tamanho da tela no carregamento e ao redimensionar
	$effect(() => {
		if (browser) {
			const checkMobile = () => {
				isMobile = window.innerWidth < 640;
			};

			// Verificação inicial
			checkMobile();

			// Adicionar listener para redimensionamento
			window.addEventListener('resize', checkMobile);

			return () => {
				window.removeEventListener('resize', checkMobile);
			};
		}
	});
	interface VoalleResult {
		success: boolean;
		data: {
			messages: VoalleMessage[];
		};
	}
	interface VoalleMessage {
		type: string;
		message: string;
	}

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

	// Função para determinar o status visual de cada etapa
	function getStepStatus(numeroEtapa: number) {
		if (numeroEtapa < currentStep) return 'completed';
		if (numeroEtapa === currentStep) return 'current';
		return 'pending';
	}

	// Classes CSS para cada status
	const stepClasses = {
		completed: {
			circle: 'bg-orange-500 text-black border-orange-500 font-bold text-sm',
			text: 'text-orange-500 font-bold text-sm',
			separator: 'bg-orange-500'
		},
		current: {
			circle: 'bg-orange-500 text-black border-orange-500 font-bold text-sm',
			text: 'text-orange-500 font-bold text-sm',
			separator: 'bg-gray-200'
		},
		pending: {
			circle: 'bg-gray-100 text-black border-gray-300 font-bold text-sm',
			text: 'text-gray-300 font-bold text-sm',
			separator: 'bg-gray-200'
		}
	};

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
			const processarMensagensVoalle = (voalleResult: VoalleResult) => {
				if (!voalleResult) return;

				// Apenas processar mensagens se não for um erro principal já exibido
				if (voalleResult.success) {
					// Verifica se há mensagens específicas de sucesso ou avisos
					if (voalleResult.data?.messages?.length > 0) {
						voalleResult.data.messages.forEach((msg: VoalleMessage) => {
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
				// Salvar nome do cliente antes de resetar
				successClientName = formData.fullName;

				// Abrir modal de sucesso
				showSuccessModal = true;

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

<svelte:head>
	<title>Cadastro de Cliente - Himarte Internet Fibra Ótica</title>
	<meta
		name="description"
		content="Complete seu cadastro na Himarte e aproveite a melhor internet fibra ótica do RS. Processo rápido e seguro para ativar seu plano."
	/>
	<meta
		name="keywords"
		content="cadastro himarte, contratar internet, fibra ótica RS, cadastro cliente, ativação plano internet"
	/>
	<meta name="robots" content="noindex, nofollow" />
	<meta property="og:title" content="Cadastro de Cliente - Himarte Internet Fibra Ótica" />
	<meta
		property="og:description"
		content="Complete seu cadastro na Himarte e aproveite a melhor internet fibra ótica do RS. Processo rápido e seguro para ativar seu plano."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://himarte.com.br/cadastro" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Cadastro de Cliente - Himarte Internet Fibra Ótica" />
	<meta
		name="twitter:description"
		content="Complete seu cadastro na Himarte e aproveite a melhor internet fibra ótica do RS. Processo rápido e seguro para ativar seu plano."
	/>

	<!-- Google tag (gtag.js) -->
	<script
		async
		src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ADS_ID}`}
	></script>
	<script>
		// @ts-ignore - este bloco roda no browser
		window.dataLayer = window.dataLayer || [];
		// @ts-ignore
		function gtag() {
			dataLayer.push(arguments);
		}
		// @ts-ignore
		gtag('js', new Date());
		// @ts-ignore
		gtag('config', `{PUBLIC_GOOGLE_ADS_ID}`);
	</script>
</svelte:head>

<div class="flex h-full w-full items-center justify-center px-4 pt-16 pb-20 sm:px-6 md:pt-28">
	<form
		method="POST"
		action="?/novoCadastro"
		class="flex h-full w-full max-w-3xl flex-col gap-5 md:gap-7"
		use:enhance={submeterFormulario}
	>
		<div class="flex flex-col items-center gap-1 pt-10">
			<h1 class="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
				Quase lá! Complete seu cadastro
			</h1>
			<p class="text-center text-xs text-gray-400 sm:text-sm">
				Preencha os dados para finalizar e aproveitar seu plano de internet.
			</p>
		</div>

		<!-- Indicador de progresso -->
		<div class="flex h-full w-full items-center justify-center gap-1 sm:gap-2">
			{#each etapas as etapa, index (index)}
				{@const numeroEtapa = index + 1}
				{@const status = getStepStatus(numeroEtapa)}
				{@const classes = stepClasses[status]}

				{#if !isMobile || (isMobile && numeroEtapa === currentStep)}
					<div class="flex h-full items-center gap-1 sm:gap-2">
						<!-- Número/Ícone e Label da Etapa -->
						<div class="flex items-center transition-colors duration-200">
							{#if !isMobile}
								<span
									class={cn(
										'flex h-5 w-5 items-center justify-center rounded-full border text-xs transition-colors duration-200 md:h-6 md:w-6 md:text-sm',
										classes.circle
									)}
								>
									{numeroEtapa}
								</span>
							{/if}

							<span
								class={cn(
									'ml-2 text-sm font-semibold transition-colors duration-200 md:text-base',
									isMobile && 'text-base font-bold md:text-lg',
									classes.text
								)}
							>
								{#if isMobile && etapa === 'Dados Contratuais'}
									Plano
								{:else}
									{etapa}
								{/if}
							</span>
						</div>

						<!-- Separador entre etapas (apenas no desktop) -->
						{#if !isMobile && numeroEtapa < 3}
							<div
								class={cn(
									'xs:w-12 h-[1px] w-8 opacity-50 transition-colors duration-200 sm:w-20 md:max-w-full',
									classes.separator
								)}
							></div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>

		<!-- Conteúdo do formulário -->
		<div class="min-h-72 w-full sm:min-h-80 md:h-[60vh]">
			{#if currentStep === 1}
				<StepOne {formData} />
			{:else if currentStep === 2}
				<StepTwo {formData} validationChange={handleValidationChange} />
			{:else}
				<StepThree {formData} />
			{/if}
		</div>

		<!-- Botões de navegação -->
		<div class="flex w-full justify-between">
			<Button
				type="button"
				variant="secondary"
				class="w-24 sm:w-28"
				onclick={() => navegarEtapa('anterior')}
				disabled={currentStep === 1 || isSubmitting}
			>
				Voltar
			</Button>

			{#if currentStep < 3}
				<Button
					type="button"
					variant="default"
					class="w-24 bg-orange-600 font-semibold text-white hover:bg-orange-700 sm:w-28"
					onclick={() => navegarEtapa('proximo')}
					disabled={isSubmitting}
				>
					Continuar
				</Button>
			{:else}
				<Button
					type="submit"
					variant="default"
					class="w-24 bg-orange-600 font-semibold text-white hover:bg-orange-700 sm:w-28"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Enviando...' : 'Finalizar'}
				</Button>
			{/if}
		</div>
	</form>
</div>

<!-- Modal de Sucesso -->
<SuccessModal bind:open={showSuccessModal} clientName={successClientName} />
