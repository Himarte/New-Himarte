<script lang="ts">
	import hiwifiLogo from '$lib/img/extras/logo_hi_wifi_branco.png';
	import Lights from '$lib/components/BackgroundGridHero/Lights.svelte';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid tailwind.config.ts file.
	// No need to install base components for this example. just checkout tailwind.config.ts file.
</script>

<section class="relative block h-screen w-full overflow-hidden rounded-xl bg-black">
	<!-- Grid Background Pattern - você pode trocar bg-dot-grid por bg-grid-pattern se preferir linhas -->
	<div class="bg-dot-grid absolute inset-0 opacity-60"></div>

	<!-- Subtle gradient overlay -->
	<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

	<!-- Main content -->
	<div class="relative z-10 h-full w-full px-4">
		<div
			class="animate-moveUp relative z-[1] flex h-full w-full flex-col items-start justify-center sm:items-center"
		>
			<div class="mb-5 flex h-auto w-full flex-col items-center justify-center">
				<img src={hiwifiLogo} alt="HiWiFi" class="w-48 object-contain md:mb-3 md:w-80" />
			</div>
			<div
				class="mb-1 w-full bg-gradient-to-br from-white/60 via-neutral-300 to-black/[0.6] bg-clip-text text-center text-2xl font-bold text-transparent sm:text-center md:text-5xl"
			>
				Conectividade revolucionária.
			</div>
			<div
				class="mb-1 w-full bg-gradient-to-br from-white/60 via-neutral-300 to-black/[0.6] bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl"
			>
				Segurança incomparável.
			</div>
			<div class="mt-3 w-full text-center text-white/[0.7]">Foco em Eficiência e Qualidade.</div>
			<div
				class="mt-5 flex w-full items-center justify-center gap-4 text-white max-sm:flex-col sm:gap-10"
			>
				<button
					class="group flex h-10 w-[80%] items-center justify-center gap-1.5 rounded-lg border border-green-900 bg-gradient-to-br from-green-950 to-blue-950 md:w-36"
				>
					<a href="#porque">Saiba Mais</a>
					<span class="transition-all group-hover:translate-x-0.5">&rarr;</span>
				</button>
			</div>
		</div>

		<!-- Lights effect in background -->
		<div
			class="absolute bottom-0 left-0 z-0 h-full w-full animate-[appear_0.5s_1s_forwards] opacity-0"
		>
			<Lights direction="top" />
		</div>
	</div>
</section>

<style>
	@keyframes moveUp {
		0% {
			transform: translateY(50px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.animate-moveUp {
		animation: moveUp 1s ease-out forwards;
	}

	/* Grid pattern background */
	.bg-grid-pattern {
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size: 24px 24px;
		background-position:
			0 0,
			0 0;
	}

	/* Alternative dot grid pattern */
	.bg-dot-grid {
		background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
		background-size: 24px 24px;
	}
</style>
