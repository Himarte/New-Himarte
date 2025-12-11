<script lang="ts">
	import { cn } from '$lib/utils';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { onMount } from 'svelte';

	// Usando Svelte 5 runes para props
	let {
		size = 250,
		duration = 15,
		anchor = 90,
		borderWidth = 2,
		colorFrom = '#f97316',
		colorTo = '#ffaa40',
		delay = 0,
		class: className = ''
	} = $props<{
		size?: number;
		duration?: number;
		anchor?: number;
		borderWidth?: number;
		colorFrom?: string;
		colorTo?: string;
		delay?: number;
		class?: string;
	}>();

	// Animação de rotação do gradiente  
	// Usamos um valor fixo inicial, a prop duration é usada diretamente na closure
	let rotation = tweened(0, {
		duration: 15000, // valor inicial default
		easing: linear
	});

	onMount(() => {
		const durationValue = duration * 1000;
		const delayValue = delay * 1000;
		
		setTimeout(() => {
			const startRotation = () => {
				rotation.set(360, { duration: durationValue }).then(() => {
					rotation.set(0, { duration: 0 }).then(startRotation);
				});
			};
			startRotation();
		}, delayValue);
	});

	// Gradiente que gira baseado na rotação atual
	let gradientAngle = $derived($rotation + anchor);
</script>

<!-- Borda com gradiente rotativo -->
<div
	class={cn('pointer-events-none absolute inset-0 rounded-xl', className)}
	style="
		border: {borderWidth}px solid transparent;
		border-image: conic-gradient(from {gradientAngle}deg, {colorFrom}, {colorTo}, transparent, {colorFrom}) 1;
		background: transparent;
	"
></div>
