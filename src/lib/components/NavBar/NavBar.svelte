<script lang="ts">
	import NavDesktop from './NavDesktop.svelte';
	import NavMobile from './NavMobile.svelte';

	let screenWidth = $state(1024); // Valor padrão para SSR
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth < 768}
	<!-- Navbar para telas pequenas -->
	<NavMobile />
{:else}
	<!-- Navbar para telas maiores -->
	<NavDesktop />
{/if}
