<script lang="ts">
	import { browser } from '$app/environment';

	// Use any para ModeWatcher já que não conhecemos seu tipo exato
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let ModeWatcher: any;
	let isLoaded = $state(false);

	// Props que serão repassados ao componente
	let props = $props();

	$effect(() => {
		if (browser) {
			import('mode-watcher').then((module) => {
				// @ts-ignore - Ignoramos erros de tipo para compatibilidade com o módulo
				ModeWatcher = module.default || module.ModeWatcher;
				isLoaded = true;
			});
		}
	});
</script>

{#if browser && isLoaded}
	{@render ModeWatcher(props)}
{/if}
