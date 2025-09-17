<script lang="ts">
	import { PUBLIC_GOOGLE_ADS_ID } from '$env/static/public';
	import CNPJ from '$lib/components/TabPlanos/CNPJ/CNPJ.svelte';
</script>

<svelte:head>
	<title>Planos Empresariais - Himarte</title>
	<meta
		name="description"
		content="Planos de internet fibra ótica para empresas. Conexão estável e rápida para aumentar a produtividade do seu negócio. Conheça nossos planos empresariais."
	/>
	<meta
		name="keywords"
		content="planos internet empresarial, fibra ótica empresas, internet corporativa, planos himarte empresas, internet empresarial RS"
	/>
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Planos Empresariais - Himarte" />
	<meta
		property="og:description"
		content="Planos de internet fibra ótica para empresas. Conexão estável e rápida para aumentar a produtividade do seu negócio."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://himarte.com.br/planos-empresariais" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Planos Empresariais - Himarte" />
	<meta
		name="twitter:description"
		content="Planos de internet fibra ótica para empresas. Conexão estável e rápida para aumentar a produtividade do seu negócio."
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

<div class="flex w-full flex-col items-center justify-center pt-24 pb-10 md:pt-24">
	<h1 class="text-4xl font-bold text-orange-400">Planos Empresariais</h1>
	<div
		class="flex min-h-full w-full flex-col items-center justify-center gap-5 overflow-x-hidden py-8 md:overflow-x-visible"
	>
		<div class="flex flex-col items-center justify-center gap-2 text-center md:w-2/3">
			<p class="font-inter text-zinc-400">
				Trabalhe com mais agilidade e sem interrupções, garantindo a produtividade do seu negócio!
			</p>
			<p class="font-inter hidden max-w-4xl text-zinc-400 md:block">
				Nossa internet proporciona a você e sua equipe uma conexão estável e rápida, facilitando a
				comunicação e aumentando a eficiência nos processos digitais do seu dia a dia.
			</p>
		</div>
		<CNPJ />
	</div>
</div>
