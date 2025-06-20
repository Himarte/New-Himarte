<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card';
	import { MessagesSquare, FileCheck, Sparkles } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let open = $state(false);

	let { plano, onAtendente, onAutoAtendimento, children, blipClient, tipo } = $props<{
		plano: string;
		onAtendente: () => void;
		onAutoAtendimento: () => void;
		children: any;
		blipClient?: any;
		tipo?: string;
	}>();

	function handleAtendente() {
		if (blipClient) {
			blipClient.toogleChat();
			blipClient.sendMessage({
				type: 'text/plain',
				content: `Olá, gostaria de saber mais sobre o plano ${plano} ${tipo ? `para ${tipo}` : ''}.`
			});
		} else {
			onAtendente();
		}
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
		class="max-w-4xl bg-background/95 backdrop-blur-md border-orange-500/20 shadow-2xl rounded-lg"
	>
		<Dialog.Header class="text-center flex flex-col items-center w-full">
			<div
				class="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2"
			>
				<Sparkles class="w-8 h-8 text-white" />
			</div>
			<Dialog.Title
				class="text-3xl text-center font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
			>
				Como você prefere prosseguir?
			</Dialog.Title>
			<Dialog.Description class="text-lg text-center text-zinc-400 w-full">
				Escolha a melhor forma de contratar o plano <span class="font-semibold text-orange-500"
					>{plano}</span
				>
				{tipo ? ` para ${tipo}` : ''}
			</Dialog.Description>
		</Dialog.Header>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Opção Atendente -->
			<Card.Root
				class={cn(
					'group relative overflow-hidden cursor-pointer transition-all duration-300',
					'hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1',
					'border-2 hover:border-orange-500/50 bg-gradient-to-br from-background to-background/50'
				)}
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>

				<Card.Header class="text-center pb-4">
					<div
						class="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
					>
						<MessagesSquare class="w-10 h-10 text-orange-500" />
					</div>
					<Card.Title
						class="text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors"
					>
						Falar com atendente
					</Card.Title>
				</Card.Header>

				<Card.Content class="text-center space-y-6">
					<div class="space-y-3">
						<p class="text-zinc-400 leading-relaxed">Converse diretamente com nosso time</p>
						<div class="flex flex-col gap-2 text-sm text-zinc-400">
							<div class="flex items-center justify-center gap-2">
								<div class="w-2 h-2 bg-green-500 rounded-full"></div>
								<span>Atendimento personalizado</span>
							</div>
							<div class="flex items-center justify-center gap-2">
								<div class="w-2 h-2 bg-green-500 rounded-full"></div>
								<span>Tire todas suas dúvidas</span>
							</div>
							<div class="flex items-center justify-center gap-2">
								<div class="w-2 h-2 bg-green-500 rounded-full"></div>
								<span>Suporte em tempo real</span>
							</div>
						</div>
					</div>

					<Button
						class={cn(
							'w-full h-12 text-base font-semibold',
							'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
							'border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300',
							'text-white'
						)}
						onclick={handleAtendente}
					>
						<MessagesSquare class="w-5 h-5 mr-2" />
						Iniciar conversa
					</Button>
				</Card.Content>
			</Card.Root>

			<!-- Opção Auto Atendimento -->
			<Card.Root
				class={cn(
					'group relative overflow-hidden cursor-pointer transition-all duration-300',
					'hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1',
					'border-2 hover:border-blue-500/50 bg-gradient-to-br from-background to-background/50'
				)}
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>

				<Card.Header class="text-center pb-4">
					<div
						class="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
					>
						<FileCheck class="w-10 h-10 text-blue-500" />
					</div>
					<Card.Title
						class="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors"
					>
						Auto atendimento
					</Card.Title>
				</Card.Header>

				<Card.Content class="text-center space-y-6">
					<div class="space-y-3">
						<p class="text-muted-foreground leading-relaxed">
							Continue com o processo online de forma rápida
						</p>
						<div class="flex flex-col gap-2 text-sm text-muted-foreground">
							<div class="flex items-center justify-center gap-2">
								<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
								<span>Processo automatizado</span>
							</div>
							<div class="flex items-center justify-center gap-2">
								<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
								<span>Disponível 24/7</span>
							</div>
							<div class="flex items-center justify-center gap-2">
								<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
								<span>Contratação imediata</span>
							</div>
						</div>
					</div>

					<Button
						class={cn(
							'w-full h-12 text-base font-semibold',
							'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
							'border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300',
							'text-white'
						)}
						onclick={handleAutoAtendimento}
					>
						<FileCheck class="w-5 h-5 mr-2" />
						Continuar online
					</Button>
				</Card.Content>
			</Card.Root>
		</div>

		<div class="mt-8 pt-6 border-t border-border/50">
			<p class="text-center text-sm text-zinc-400">
				💡 <span class="font-medium">Dica:</span> Para dúvidas específicas, recomendamos falar com nosso
				atendente.
			</p>
		</div>
	</Dialog.Content>
</Dialog.Root>
