<script>
	import hiwifiLogo from '$lib/img/logos/hiwifi-logo.svg';

	import Lights from '../BackgroundGridHero/Lights.svelte';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid tailwind.config.ts file.
	// No need to install base components for this example. just checkout tailwind.config.ts file.
</script>

<section class="bg-black w-full h-screen block rounded-xl overflow-hidden">
	<div class="w-full h-full relative bg-grid-white/[0.03] px-4">
		<div
			class="w-full h-full flex flex-col sm:items-center items-start justify-center relative z-[1] animate-moveUp"
		>
			<div class=" w-full h-auto flex flex-col items-center justify-center mb-5">
				<img src={hiwifiLogo} alt="hiwifi" class="w-96 object-contain" />
			</div>
			<div
				class="text-transparent sm:text-center text-start font-bold sm:text-5xl text-4xl bg-clip-text bg-gradient-to-br from-white/60 via-neutral-300 to-black/[0.6]"
			>
				Good Hero Equals Trust.
			</div>
			<div class="text-white/[0.7] sm:text-center text-start mt-3">
				Trusted by Trusted Companies and Trusted People
			</div>
			<div class="mt-5 w-full flex max-sm:flex-col justify-center sm:gap-10 gap-4 text-white">
				<button
					class="group h-10 sm:h-8 w-full sm:w-36 bg-gradient-to-br from-green-950 to-blue-950 border border-green-900 rounded-lg flex items-center justify-center gap-1.5"
				>
					<span>Saiba Mais</span>
					<span class="group-hover:translate-x-0.5 transition-all">&rarr;</span>
				</button>
			</div>
		</div>
		<div class="absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0">
			<Lights direction="top" />
		</div>
	</div>
</section>
