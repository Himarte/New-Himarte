<script lang="ts">
	import { PUBLIC_GOOGLE_ADS_ID } from '$env/static/public';
	import CardsCPF1 from '$lib/components/TabPlanos/CPF1/CardsCPF1.svelte';
	import CardsCPF2 from '$lib/components/TabPlanos/CPF2/CardsCPF2.svelte';
	import CardsCPF3 from '$lib/components/TabPlanos/CPF3/CardsCPF3.svelte';
	import BgStars from '$lib/img/extras/black-november/nov-estrelas.jpg';
	import GlobeNovember from '$lib/img/extras/black-november/nov-globo.png';
</script>

<svelte:head>
	<title>Planos Residenciais - Himarte</title>
	<meta
		name="description"
		content="Conheça nossos planos de internet fibra ótica. Velocidades de 50MB a 1000MB com preços competitivos. Compare e escolha o ideal para você."
	/>
	<meta
		name="keywords"
		content="planos internet fibra ótica, velocidade internet, planos himarte, internet residencial RS, internet empresarial, preços internet"
	/>
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Planos Residenciais - Himarte" />
	<meta
		property="og:description"
		content="Conheça nossos planos de internet fibra ótica. Velocidades de 50MB a 1000MB com preços competitivos. Compare e escolha o ideal para você."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://himarte.com.br/planos-residenciais" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Planos Residenciais - Himarte" />
	<meta
		name="twitter:description"
		content="Conheça nossos planos de internet fibra ótica. Velocidades de 50MB a 1000MB com preços competitivos. Compare e escolha o ideal para você."
	/>

	<!-- Google tag (gtag.js) -->
	<script
		async
		src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ADS_ID}`}
	></script>
	<script>
		// @ts-ignore - este bloco roda no browser
		window.dataLayer = window.dataLayer || [];
		// @ts-ignore
		function gtag() {
			dataLayer.push(arguments);
		}
		// @ts-ignore
		gtag('js', new Date());
		// @ts-ignore
		gtag('config', `{PUBLIC_GOOGLE_ADS_ID}`);
	</script>
</svelte:head>

<div class="relative flex w-full flex-col items-center justify-center pt-16 pb-6 md:pt-24 md:pb-10">
	<img
		src={BgStars}
		alt="Ceu Estrelado"
		class="absolute top-0 left-0 h-full w-full object-cover opacity-20"
	/>
	<div
		class="z-10 flex min-h-full w-full flex-col items-center justify-center gap-3 overflow-x-hidden py-4 md:gap-5 md:overflow-x-visible md:py-8"
	>
		<div
			class="mb-10 flex max-w-5xl flex-col items-center justify-center gap-4 px-5 md:flex-row md:gap-10 md:px-0"
		>
			<img
				src={GlobeNovember}
				alt="Globo de papel"
				class="h-48 w-48 object-contain md:h-72 md:w-72"
			/>
			<div class="flex flex-col items-center justify-center gap-2 text-center">
				<h1 class="mb-2 text-2xl font-bold text-orange-400 md:text-4xl">
					Promoção de Black November!
				</h1>

				<p class="font-inter w-full text-sm text-zinc-400 md:text-base">
					Conecte-se com velocidade de outro planeta: <span class="font-semibold text-orange-400"
						>50% OFF</span
					>,
					<span class="font-semibold text-orange-400">instalação grátis</span> e
					<span class="font-semibold text-orange-400">3 meses de vantagem</span>. Planos a partir de
					400 Megas, com velocidade de até 1 Giga para todas as cidades.
				</p>
			</div>
		</div>
		<CardsCPF1 />
		<CardsCPF2 />
		<CardsCPF3 />
		<div class="flex w-full items-center justify-center px-4 pt-6 text-center md:px-0 md:pt-8">
			<h5 class="font-inter text-xs text-gray-500 md:text-sm">
				*Os valores são válidos apenas para pagamentos realizados até a data de vencimento.
			</h5>
		</div>
	</div>
</div>
