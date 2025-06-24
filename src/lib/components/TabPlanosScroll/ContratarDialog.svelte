<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card';
	import MessagesSquare from '@lucide/svelte/icons/messages-square';
	import FileCheck from '@lucide/svelte/icons/file-check';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import { cn } from '$lib/utils';

	let open = $state(false);

	let { plano, onAtendente, onAutoAtendimento, children, tipo } = $props<{
		plano: string;
		onAtendente: () => void;
		onAutoAtendimento: () => void;
		children: any; // eslint-disable-line @typescript-eslint/no-explicit-any
		tipo?: string;
	}>();

	// Variável reativa para o tipo de texto
	const tipoTexto = $derived(tipo === 'CNPJ' ? 'empresarial' : 'residencial');

	// Mensagem para o WhatsApp
	const mensagemWhatsApp = $derived(
		`Olá, gostaria de saber mais sobre o plano ${plano} de Fibra ${tipoTexto}.`
	);
	const mensagemCodificada = $derived(encodeURIComponent(mensagemWhatsApp));

	// URL do WhatsApp
	const whatsappUrl = $derived(
		`https://api.whatsapp.com/send/?phone=555130568251&text=${mensagemCodificada}&type=phone_number&app_absent=0`
	);

	// URL do cadastro com parâmetros
	const cadastroUrl = $derived(
		`/cadastro?plano=${plano.toLowerCase()}&tipo=${tipo === 'CNPJ' ? 'CNPJ' : 'CPF'}`
	);

	function handleAtendente() {
		onAtendente();
		open = false;
	}

	function handleAutoAtendimento() {
		onAutoAtendimento();
		open = false;
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger>
		{@render children()}
	</Dialog.Trigger>
	<Dialog.Content
		class="bg-background/95 max-h-[90vh] max-w-[95vw] overflow-y-auto rounded-md border-orange-500/20 shadow-2xl backdrop-blur-md sm:max-w-4xl md:max-h-[95vh]"
	>
		<!-- Container principal com scroll -->
		<div class="flex h-full max-h-[80vh] flex-col overflow-hidden md:max-h-[90vh]">
			<!-- Header fixo -->
			<Dialog.Header class="flex shrink-0 flex-col items-center pb-4 text-center">
				<div
					class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 sm:h-16 sm:w-16"
				>
					<Sparkles class="h-6 w-6 text-white sm:h-8 sm:w-8" />
				</div>
				<Dialog.Title
					class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-center text-xl font-bold text-transparent sm:text-3xl"
				>
					Como você prefere prosseguir?
				</Dialog.Title>
				<Dialog.Description
					class="hidden w-full text-center text-sm text-zinc-400 sm:block sm:text-lg"
				>
					Escolha a melhor forma de contratar o plano <span class="font-semibold text-orange-500"
						>{plano}</span
					>
					{tipo ? `do tipo ${tipo}` : ''}
				</Dialog.Description>
			</Dialog.Header>

			<!-- Área de conteúdo com scroll -->
			<div class="flex-1 overflow-y-auto px-1 pt-2">
				<div class="grid gap-4 pb-4 sm:gap-6 md:grid-cols-2">
					<!-- Opção Atendente -->
					<a
						href={whatsappUrl}
						target="_blank"
						class="group block"
						onclick={() => handleAtendente()}
					>
						<Card.Root
							class={cn(
								'group relative cursor-pointer overflow-hidden  transition-all duration-300',
								'hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10',
								'from-background to-background/50 border-2 bg-gradient-to-br hover:border-orange-500/50',
								'h-full min-h-[280px] sm:min-h-[320px]'
							)}
						>
							<div
								class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>

							<Card.Header class="pb-0 text-center sm:pb-4">
								<div
									class="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-20 sm:w-20"
								>
									<MessagesSquare class="h-8 w-8 text-orange-500 sm:h-10 sm:w-10" />
								</div>
								<Card.Title
									class="text-foreground text-lg font-bold transition-colors group-hover:text-orange-500 sm:text-2xl"
								>
									Falar com atendente
								</Card.Title>
							</Card.Header>

							<Card.Content class="space-y-4 px-4 text-center sm:space-y-6 sm:px-6">
								<div class="space-y-2 sm:space-y-3">
									<p class="text-sm leading-relaxed text-zinc-400 sm:text-base">
										Converse diretamente com nosso time
									</p>
									<div class="flex flex-col gap-2 text-xs text-zinc-400 sm:text-sm">
										<div class="flex items-center justify-center gap-2">
											<div class="h-2 w-2 rounded-full bg-green-500"></div>
											<span>Atendimento personalizado</span>
										</div>
										<div class="flex items-center justify-center gap-2">
											<div class="h-2 w-2 rounded-full bg-green-500"></div>
											<span>Tire todas suas dúvidas</span>
										</div>
										<div class="flex items-center justify-center gap-2">
											<div class="h-2 w-2 rounded-full bg-green-500"></div>
											<span>Suporte em tempo real</span>
										</div>
									</div>
								</div>

								<div
									class={cn(
										'flex h-10 w-full items-center justify-center gap-2 rounded-md text-sm font-semibold sm:h-12 sm:text-base',
										'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
										'transform border-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
										'text-white'
									)}
								>
									<MessagesSquare class="h-4 w-4 sm:h-5 sm:w-5" />
									Iniciar conversa
								</div>
							</Card.Content>
						</Card.Root>
					</a>

					<!-- Opção Auto Atendimento -->
					<a href={cadastroUrl} class="group block" onclick={() => handleAutoAtendimento()}>
						<Card.Root
							class={cn(
								'group relative cursor-pointer overflow-hidden transition-all duration-300',
								'hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10',
								'from-background to-background/50 border-2 bg-gradient-to-br hover:border-blue-500/50',
								'h-full min-h-[280px] sm:min-h-[320px]'
							)}
						>
							<div
								class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>

							<Card.Header class="pb-3 text-center sm:pb-4">
								<div
									class="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-20 sm:w-20"
								>
									<FileCheck class="h-8 w-8 text-blue-500 sm:h-10 sm:w-10" />
								</div>
								<Card.Title
									class="text-foreground text-lg font-bold transition-colors group-hover:text-blue-500 sm:text-2xl"
								>
									Auto atendimento
								</Card.Title>
							</Card.Header>

							<Card.Content class="space-y-4 px-4 text-center sm:space-y-6 sm:px-6">
								<div class="space-y-2 sm:space-y-3">
									<p class="text-muted-foreground text-sm leading-relaxed sm:text-base">
										Continue com o processo online de forma rápida
									</p>
									<div class="text-muted-foreground flex flex-col gap-2 text-xs sm:text-sm">
										<div class="flex items-center justify-center gap-2">
											<div class="h-2 w-2 rounded-full bg-blue-500"></div>
											<span>Processo automatizado</span>
										</div>
										<div class="flex items-center justify-center gap-2">
											<div class="h-2 w-2 rounded-full bg-blue-500"></div>
											<span>Disponível 24/7</span>
										</div>
										<div class="flex items-center justify-center gap-2">
											<div class="h-2 w-2 rounded-full bg-blue-500"></div>
											<span>Contratação imediata</span>
										</div>
									</div>
								</div>

								<div
									class={cn(
										'flex h-10 w-full items-center justify-center gap-2 rounded-md text-sm font-semibold sm:h-12 sm:text-base',
										'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
										'transform border-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
										'text-white'
									)}
								>
									<FileCheck class="h-4 w-4 sm:h-5 sm:w-5" />
									Continuar online
								</div>
							</Card.Content>
						</Card.Root>
					</a>
				</div>
			</div>

			<!-- Footer fixo -->
			<div class="border-border/50 shrink-0 border-t pt-4 sm:pt-6">
				<p class="text-center text-xs text-zinc-400 sm:text-sm">
					💡 <span class="font-medium">Dica:</span> Para dúvidas específicas, recomendamos falar com
					nosso atendente.
				</p>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
