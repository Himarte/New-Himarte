<!-- Counter do numero de usuários -->
<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cn } from '$lib/utils';
	export let value = 9800;
	export let initial = 6000;
	export let duration = 1000;
	let num = tweened(initial, {
		duration: duration,
		easing: cubicOut
	});
	let className: any = '';
	export { className as class };

	// Função para formatar números com ponto de milhar
	const formatNumber = (num: number) => {
		return new Intl.NumberFormat('pt-BR').format(num);
	};

	onMount(() => {
		num.set(value);
	});
</script>

<span class={cn('inline-block tracking-normal ', className)} {...$$restProps}>
	{formatNumber(Number($num.toFixed(0)))}
</span>
