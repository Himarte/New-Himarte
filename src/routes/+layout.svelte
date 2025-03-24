<script lang="ts">
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import ModeWatcherWrapper from '$lib/components/ModeWatcherWrapper.svelte';

	let linktree = $state($page.url.pathname === '/linktree' ? false : true);

	$effect(() => {
		fetch('/api/meta-pixel', {
			method: 'POST'
		});
	});

	let { children }: { children: Snippet } = $props(); // Anotando o tipo de children
</script>

<Toaster richColors />
<ModeWatcherWrapper defaultMode="dark" />

{#snippet Header()}
	{#if linktree}
		<NavBar />
	{/if}
{/snippet}

{#snippet FooterSection()}
	{#if linktree}
		<Footer />
	{/if}
{/snippet}

{#snippet MainContent()}
	<div class="flex min-h-full min-w-full flex-col items-center">
		{@render children()}
	</div>
{/snippet}

<!-- Renderização final -->
{@render Header()}
{@render MainContent()}
{@render FooterSection()}
