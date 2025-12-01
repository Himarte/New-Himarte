<script lang="ts">
	import { PUBLIC_GOOGLE_ADS_ID } from '$env/static/public';
	import CardsCPF1 from '$lib/components/TabPlanos/CPF1/CardsCPF1.svelte';
	import CardsCPF2 from '$lib/components/TabPlanos/CPF2/CardsCPF2.svelte';
	import CardsCPF3 from '$lib/components/TabPlanos/CPF3/CardsCPF3.svelte';
	import BgStars from '$lib/img/extras/black-november/nov-estrelas.webp';
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
		loading="eager"
		class="absolute top-0 left-0 h-full w-full object-cover opacity-20"
	/>
	<div
		class="z-10 flex min-h-full w-full flex-col items-center justify-center gap-3 overflow-x-hidden py-4 md:gap-5 md:overflow-x-visible md:py-8"
	>
		<h1 class="z-10 text-center text-4xl font-bold text-orange-400">Planos Residenciais</h1>
		<div
			class="z-10 flex min-h-full w-full flex-col items-center justify-center gap-5 overflow-x-hidden md:overflow-x-visible"
		>
			<div class="mb-10 flex flex-col items-center justify-center gap-2 text-center">
				<p class="font-inter w-2/3 text-zinc-400">
					Escolha o plano perfeito para você e tenha uma experiência de conexão confiável e rápida!
				</p>
				<p class="font-inter hidden w-2/3 text-zinc-400 md:block">
					Oferecemos internet fibra óptica de alta qualidade, garantindo estabilidade e velocidade
					para todas as suas necessidades. Navegue sem preocupações, assista a filmes e série, jogue
					e faça downloads sem interrupções.
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
