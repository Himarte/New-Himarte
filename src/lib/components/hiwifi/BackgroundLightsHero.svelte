<script lang="ts">
	import hiwifiLogo from '$lib/img/extras/logo_hi_wifi_branco.png';
	import Lights from '$lib/components/BackgroundGridHero/Lights.svelte';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid tailwind.config.ts file.
	// No need to install base components for this example. just checkout tailwind.config.ts file.
</script>

<section class="relative block h-screen w-full overflow-hidden rounded-xl bg-black">
	<!-- Grid Background Pattern mais visível -->
	<!-- Troque bg-grid-lines por: bg-dot-grid (pontos) ou bg-grid-hybrid (híbrido) -->
	<div class="bg-grid-hybrid absolute inset-0 opacity-80"></div>

	<!-- Overlay gradient mais suave para não esconder o grid -->
	<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

	<!-- Main content -->
	<div class="relative z-10 h-full w-full px-4">
		<div
			class="relative z-[1] flex h-full w-full animate-[moveUp_1.4s_ease_forwards] flex-col items-start justify-center sm:items-center"
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

		<!-- Lights effect no fundo com opacidade bem baixa -->
		<div
			class="absolute bottom-0 left-0 z-0 h-full w-full animate-[appear_0.5s_1s_forwards] opacity-0"
		>
			<Lights direction="top" />
		</div>
	</div>
</section>

<style>
	/* Grid híbrido - linhas + pontos nas intersecções */
	.bg-grid-hybrid {
		background-image:
			radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
			linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
		background-size:
			20px 20px,
			20px 20px,
			20px 20px;
		background-position:
			0 0,
			0 0,
			0 0;
	}
</style>
