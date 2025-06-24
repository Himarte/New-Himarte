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
		class="bg-background/95 min-w-4xl rounded-md border-orange-500/20 shadow-2xl backdrop-blur-md"
	>
		<Dialog.Header class="flex w-full flex-col items-center text-center">
			<div
				class="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600"
			>
				<Sparkles class="h-8 w-8 text-white" />
			</div>
			<Dialog.Title
				class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-center text-3xl font-bold text-transparent"
			>
				Como você prefere prosseguir?
			</Dialog.Title>
			<Dialog.Description class="w-full text-center text-lg text-zinc-400">
				Escolha a melhor forma de contratar o plano <span class="font-semibold text-orange-500"
					>{plano}</span
				>
				{tipo ? `do tipo ${tipo}` : ''}
			</Dialog.Description>
		</Dialog.Header>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- Opção Atendente -->
			<a href={whatsappUrl} target="_blank" class="group block" onclick={() => handleAtendente()}>
				<Card.Root
					class={cn(
						'group relative cursor-pointer overflow-hidden transition-all duration-300',
						'hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10',
						'from-background to-background/50 border-2 bg-gradient-to-br hover:border-orange-500/50'
					)}
				>
					<div
						class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>

					<Card.Header class="pb-4 text-center">
						<div
							class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 transition-transform duration-300 group-hover:scale-110"
						>
							<MessagesSquare class="h-10 w-10 text-orange-500" />
						</div>
						<Card.Title
							class="text-foreground text-2xl font-bold transition-colors group-hover:text-orange-500"
						>
							Falar com atendente
						</Card.Title>
					</Card.Header>

					<Card.Content class="space-y-6 text-center">
						<div class="space-y-3">
							<p class="leading-relaxed text-zinc-400">Converse diretamente com nosso time</p>
							<div class="flex flex-col gap-2 text-sm text-zinc-400">
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
								'flex h-12 w-full items-center justify-center gap-2 rounded-md text-base font-semibold',
								'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
								'transform border-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
								'text-white'
							)}
						>
							<MessagesSquare class="h-5 w-5" />
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
						'from-background to-background/50 border-2 bg-gradient-to-br hover:border-blue-500/50'
					)}
				>
					<div
						class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>

					<Card.Header class="pb-4 text-center">
						<div
							class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 transition-transform duration-300 group-hover:scale-110"
						>
							<FileCheck class="h-10 w-10 text-blue-500" />
						</div>
						<Card.Title
							class="text-foreground text-2xl font-bold transition-colors group-hover:text-blue-500"
						>
							Auto atendimento
						</Card.Title>
					</Card.Header>

					<Card.Content class="space-y-6 text-center">
						<div class="space-y-3">
							<p class="text-muted-foreground leading-relaxed">
								Continue com o processo online de forma rápida
							</p>
							<div class="text-muted-foreground flex flex-col gap-2 text-sm">
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
								'flex h-12 w-full items-center justify-center gap-2 rounded-md text-base font-semibold',
								'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
								'transform border-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
								'text-white'
							)}
						>
							<FileCheck class="h-5 w-5" />
							Continuar online
						</div>
					</Card.Content>
				</Card.Root>
			</a>
		</div>

		<div class="border-border/50 mt-8 border-t pt-6">
			<p class="text-center text-sm text-zinc-400">
				💡 <span class="font-medium">Dica:</span> Para dúvidas específicas, recomendamos falar com nosso
				atendente.
			</p>
		</div>
	</Dialog.Content>
</Dialog.Root>
