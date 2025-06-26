<script lang="ts">
	import BackgroundLightsHero from '$lib/components/hiwifi/BackgroundLightsHero.svelte';
	import Beneficios from '$lib/components/hiwifi/BeneficiosParaSuaEmpresa/Beneficios.svelte';
	import FeatureSelectionDemo from '$lib/components/hiwifi/PorqueEscolher/FeatureSelectionDemo.svelte';
	import HoverBorderGradient from '$lib/components/HoverBorderGradient.svelte';
</script>

<svelte:head>
	<title>HiWiFi Empresarial - Internet Corporativa Himarte</title>
	<meta
		name="description"
		content="Conheça a HiWiFi, solução de internet empresarial da Himarte. Conectividade corporativa de alta performance com segurança e eficiência garantida."
	/>
	<meta
		name="keywords"
		content="internet empresarial, wifi corporativo, himarte empresas, conexão empresarial, internet para empresas RS"
	/>
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="HiWiFi Empresarial - Internet Corporativa Himarte" />
	<meta
		property="og:description"
		content="Conheça a HiWiFi, solução de internet empresarial da Himarte. Conectividade corporativa de alta performance com segurança e eficiência garantida."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://himarte.com.br/hiwifi" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="HiWiFi Empresarial - Internet Corporativa Himarte" />
	<meta
		name="twitter:description"
		content="Conheça a HiWiFi, solução de internet empresarial da Himarte. Conectividade corporativa de alta performance com segurança e eficiência garantida."
	/>
</svelte:head>

<BackgroundLightsHero />
<FeatureSelectionDemo />

<Beneficios />
<div
	class="flex h-[60vh] w-full items-center justify-center bg-gradient-to-b from-black via-transparent to-transparent"
>
	<div class=" flex w-full items-center justify-center md:w-2/3">
		<div class="flex w-full flex-col items-center justify-center gap-5 md:w-2/3">
			<div class="mb-4 flex w-full flex-col gap-3">
				<h1
					class="font-inter bg-gradient-to-br from-white/60 via-neutral-300 to-black/[0.6] bg-clip-text text-center text-3xl font-bold text-nowrap text-transparent md:text-5xl"
				>
					Pronto para começar?
				</h1>
				<h4 class="px-5 text-center text-white/[0.7]">
					Temos como propósito entregar <span
						class="underline decoration-orange-500 decoration-1 underline-offset-4"
					>
						excelência e qualidade</span
					>
					nos serviços prestados para
					<span class="underline decoration-orange-500 decoration-1 underline-offset-4"
						>contribuir positivamente</span
					>
					na caminhada de sucesso de sua empresa.
					<span class="underline decoration-orange-500 decoration-1 underline-offset-4"
						>Conte conosco!</span
					>
				</h4>
			</div>
			<HoverBorderGradient className="w-52 text-xl"
				><a
					href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%20Tudo%20bem%3F%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20HIWIFI!&type=phone_number&app_absent=0"
					target="_blank"
				>
					Entre em contato!</a
				></HoverBorderGradient
			>
		</div>
	</div>
</div>
