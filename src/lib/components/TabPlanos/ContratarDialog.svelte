<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { MessagesSquare, FileCheck } from 'lucide-svelte';

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
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger>
		{@render children()}
	</Dialog.Trigger>
	<Dialog.Content class="max-w-2xl  bg-background/95 backdrop-blur-md border-orange-500/50">
		<Dialog.Header>
			<Dialog.Title class="text-2xl font-bold text-center text-orange-500">
				Escolha uma opção
			</Dialog.Title>
			<Dialog.Description class="text-center">
				Como você prefere prosseguir com a contratação do plano {plano}?
			</Dialog.Description>
		</Dialog.Header>
		<div class="flex flex-col md:flex-row gap-4">
			<div
				class="flex flex-col items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
			>
				<div class="bg-orange-500/20 p-3 rounded-full">
					<MessagesSquare size={24} class="text-orange-500" />
				</div>
				<h3 class="font-medium text-xl text-center">Falar com atendente</h3>
				<p class="text-sm text-center text-muted-foreground">
					Converse diretamente com nosso time de vendas
				</p>
				<button
					class="w-full border border-orange-500 rounded-md bg-transparent py-2 hover:bg-orange-500/10 transition-colors"
					onclick={handleAtendente}
				>
					Iniciar chat
				</button>
			</div>
			<div class="relative md:block hidden">
				<div class="absolute inset-0 flex items-center justify-center">
					<Separator orientation="vertical" class="h-full bg-orange-500/30" />
				</div>
			</div>
			<div class="md:hidden block"><Separator class="w-full bg-orange-500/30" /></div>
			<div
				class="flex flex-col items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
			>
				<div class="bg-orange-500/20 p-3 rounded-full">
					<FileCheck size={24} class="text-orange-500" />
				</div>
				<h3 class="font-medium text-xl text-center">Auto atendimento</h3>
				<p class="text-sm text-center text-muted-foreground">
					Continue com o processo online de cadastro
				</p>
				<button
					class="w-full bg-orange-500 text-white rounded-md py-2 hover:bg-orange-600 transition-colors"
					onclick={handleAutoAtendimento}
				>
					Continuar
				</button>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
