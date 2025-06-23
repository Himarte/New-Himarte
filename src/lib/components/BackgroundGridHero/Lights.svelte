<script lang="ts">
	import { cn } from '$lib/utils';

	type Direction = 'top' | 'bottom';

	interface Props {
		direction?: Direction;
		class?: string;
	}

	let { direction = 'bottom', class: className = '' }: Props = $props();

	// Derived variables to adjust gradient and position based on direction
	let gradientDirection = $derived(direction === 'top' ? '0deg' : '180deg');
	let positionClass = $derived(direction === 'top' ? 'top-[-200px]' : 'bottom-[-200px]');
</script>

<div class={cn('h-full w-full overflow-hidden', className)}>
	<div
		style="background: conic-gradient(from {gradientDirection} at 50% 50%, #3b82f6 0deg, #06b6d4 180deg, #facc15 1turn); filter: blur(100px); opacity: 0.15;"
		class="relative h-full w-full {positionClass}"
	></div>
</div>
