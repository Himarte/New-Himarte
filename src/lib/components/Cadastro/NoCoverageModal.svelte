<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import type { FormData } from './types';

	let {
		open = $bindable(false),
		cidade = '',
		formData = undefined
	} = $props<{
		open: boolean;
		cidade?: string;
		formData?: FormData;
	}>();

	// Estado para prevenir envios duplicados
	let enviado = $state(false);

	// Envia lead sem cobertura quando o modal abre
	$effect(() => {
		if (open && formData && !enviado) {
			enviarLeadSemCobertura();
			enviado = true;
		}
		if (!open) {
			enviado = false; // Reset quando fechar para permitir novo envio se reabrir
		}
	});

	async function enviarLeadSemCobertura() {
		if (!formData) return;

		try {
			await fetch('/api/cadastro/lead-sem-cobertura', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					nome: formData.fullName,
					telefone: formData.telefone.replace(/\D/g, ''),
					email: formData.emailCliente,
					cep: formData.cep.replace(/\D/g, ''),
					cidade: formData.cidade,
					estado: formData.estado,
					bairro: formData.bairro,
					rua: formData.rua
				})
			});
			// Silenciosamente ignora resultado - sem feedback visual
		} catch (error) {
			console.error('Erro ao enviar lead sem cobertura:', error);
			// Silenciosamente ignora erro - sem feedback visual
		}
	}

	function handleGoToFiliais() {
		open = false;
		goto('/filiais');
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Content
		showCloseButton={false}
		interactOutsideBehavior="ignore"
		class="max-w-md border-0 bg-white p-0 shadow-2xl dark:bg-zinc-950 sm:max-w-lg"
	>
		<div class="relative flex flex-col items-center gap-5 px-6 py-8 text-center sm:px-10 sm:py-10">
			<!-- Icon -->
			<div class="relative">
				<!-- Outer Ring -->
				<div
					class="absolute -inset-2 rounded-full bg-orange-100 opacity-60 dark:bg-orange-950/30"
				></div>
				<!-- Main Circle -->
				<div
					class="relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30"
				>
					<svg
						class="h-8 w-8 text-orange-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
			</div>

			<!-- Title -->
			<div class="space-y-1">
				<h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
					Sem cobertura na sua região
				</h2>
				{#if cidade}
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Cidade identificada: <span class="font-medium text-orange-600">{cidade}</span>
					</p>
				{/if}
			</div>

			<!-- Message -->
			<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
				No momento, não possuímos cobertura na sua região. Mas estamos em constante expansão!
				Confira nossas filiais para mais informações sobre as cidades atendidas.
			</p>

			<!-- Info -->
			<div
				class="flex w-full items-center gap-3 rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-900/30 dark:bg-orange-950/20"
			>
				<svg
					class="h-5 w-5 shrink-0 text-orange-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p class="text-left text-sm text-gray-700 dark:text-gray-300">
					Entre em contato conosco para saber quando chegaremos na sua cidade.
				</p>
			</div>

			<!-- Actions -->
			<div class="flex w-full flex-col gap-3 pt-2 sm:flex-row">
				<Button
					onclick={handleGoToFiliais}
					class="w-full bg-orange-500 px-6 py-5 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-orange-500/30 sm:flex-1"
				>
					<svg
						class="mr-2 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
						/>
					</svg>
					Ver nossas filiais
				</Button>
				<Button
					onclick={() => (open = false)}
					variant="secondary"
					class="w-full px-6 py-5 font-semibold sm:flex-1"
				>
					Tentar outro CEP
				</Button>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
