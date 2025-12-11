<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';

	let { open = $bindable(false), clientName = '' } = $props<{
		open: boolean;
		clientName?: string;
	}>();

	function handleGoHome() {
		open = false;
		goto('/');
	}

	// Animação de confetti simples com CSS
	const confettiColors = [
		'bg-orange-400',
		'bg-orange-500',
		'bg-yellow-400',
		'bg-green-400',
		'bg-blue-400',
		'bg-purple-400'
	];
</script>

<Dialog.Root bind:open>
	<Dialog.Content
		showCloseButton={false}
		interactOutsideBehavior="ignore"
		class="max-w-md border-0 bg-linear-to-br from-orange-50 via-white to-orange-50 p-0 shadow-2xl dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 sm:max-w-lg"
	>
		<!-- Confetti Background Animation -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
			{#each Array(20) as _, i}
				<div
					class={cn(
						'absolute h-2 w-2 rounded-full opacity-80',
						confettiColors[i % confettiColors.length]
					)}
					style="
						left: {Math.random() * 100}%;
						animation: confetti-fall {2 + Math.random() * 2}s ease-out forwards;
						animation-delay: {Math.random() * 0.5}s;
					"
				></div>
			{/each}
		</div>

		<div class="relative flex flex-col items-center gap-6 px-6 py-8 text-center sm:px-10 sm:py-12">
			<!-- Success Icon with Animation -->
			<div class="relative">
				<!-- Pulse Ring -->
				<div
					class="absolute inset-0 animate-ping rounded-full bg-green-400/30"
					style="animation-duration: 1.5s;"
				></div>
				<!-- Outer Glow -->
				<div
					class="absolute -inset-3 rounded-full bg-linear-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 blur-xl"
				></div>
				<!-- Main Circle -->
				<div
					class="relative flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30 sm:h-24 sm:w-24"
				>
					<!-- Checkmark SVG with draw animation -->
					<svg
						class="h-10 w-10 text-white sm:h-12 sm:w-12"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="3"
					>
						<path
							class="checkmark-path"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
			</div>

			<!-- Title -->
				<h2
					class="bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
				>
					Cadastro Realizado!
				</h2>
			

			<!-- Message -->
			<div class="space-y-1">
				{#if clientName}
					<p class="text-lg font-medium text-gray-800 dark:text-gray-200">
						Olá, <span class="text-orange-600">{clientName.split(' ')[0]}</span>!
					</p>
				{/if}
				<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
					Seu cadastro foi recebido com sucesso. Nossa equipe de atendimento entrará em contato em
					breve para finalizar a ativação do seu plano.
				</p>
			</div>

			<!-- Info Card -->
			<div
				class="flex w-full items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-900/30 dark:bg-orange-950/20"
			>
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30"
				>
					<svg
						class="h-5 w-5 text-orange-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
				</div>
				<p class="text-left text-sm text-gray-700 dark:text-gray-300">
					<span class="font-semibold">Fique atento!</span> Entraremos em contato pelo telefone cadastrado.
				</p>
			</div>

			<!-- Action Button -->
			<Button
				onclick={handleGoHome}
				class="mt-2 w-full bg-linear-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl hover:shadow-orange-500/30 sm:w-auto"
			>
				<svg
					class="mr-2 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				Voltar para o início
			</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>

<style>
	/* Checkmark draw animation */
	.checkmark-path {
		stroke-dasharray: 30;
		stroke-dashoffset: 30;
		animation: draw-check 0.6s ease forwards;
		animation-delay: 0.3s;
	}

	@keyframes draw-check {
		to {
			stroke-dashoffset: 0;
		}
	}

	/* Confetti fall animation */
	@keyframes confetti-fall {
		0% {
			transform: translateY(-20px) rotate(0deg) scale(0);
			opacity: 0;
		}
		20% {
			opacity: 1;
			transform: translateY(0) rotate(45deg) scale(1);
		}
		100% {
			transform: translateY(200px) rotate(720deg) scale(0.5);
			opacity: 0;
		}
	}
</style>
