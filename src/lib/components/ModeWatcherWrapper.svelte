<script lang="ts">
	import { browser } from '$app/environment';

	// Use $state para ModeWatcher para torná-lo reativo
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let ModeWatcher = $state<any>(undefined);
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
