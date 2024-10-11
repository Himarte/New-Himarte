<script>
	// Visit Border Beam Component for more information
	import BorderBeam from '$lib/components/BorderBeam/BorderBeam.svelte';
	// Scroll down to see the HeroVideoDialog component
	import HeroVideoDialog from './HeroVideoDialog.svelte';
	import astrocostas from '$lib/img/extras/space-man.jpg';
</script>

<div
	class="relative mx-auto flex h-1/3 max-w-2xl flex-col items-center justify-center px-7 lg:px-0"
>
	<div class="relative overflow-hidden rounded-2xl p-1">
		<BorderBeam />
		<HeroVideoDialog
			animationStyle="from-center"
			thumbnailSrc={astrocostas}
			thumbnailAlt="Astro Costas"
		/>
	</div>
</div>
