<script lang="ts">
	import BackgroundLightsHero from '$lib/components/hiwifi/BackgroundLightsHero.svelte';
	import Beneficios from '$lib/components/hiwifi/BeneficiosParaSuaEmpresa/Beneficios.svelte';
	import FeatureSelectionDemo from '$lib/components/hiwifi/PorqueEscolher/FeatureSelectionDemo.svelte';
	import HoverBorderGradient from '$lib/components/HoverBorderGradient.svelte';
</script>

<BackgroundLightsHero />
<FeatureSelectionDemo />

<Beneficios />
<div
	class="w-full h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-transparent to-transparent"
>
	<div class=" w-full md:w-2/3 flex items-center justify-center">
		<div class="w-full flex flex-col md:w-2/3 gap-5 items-center justify-center">
			<div class="flex flex-col w-full gap-3 mb-4">
				<h1
					class="text-transparent font-inter text-center font-bold text-3xl md:text-5xl text-nowrap bg-clip-text bg-gradient-to-br from-white/60 via-neutral-300 to-black/[0.6]"
				>
					Pronto para começar?
				</h1>
				<h4 class="text-white/[0.7] text-center px-5">
					Temos como propósito entregar <span
						class="underline underline-offset-4 decoration-1 decoration-orange-500"
					>
						excelência e qualidade</span
					>
					nos serviços prestados para
					<span class="underline underline-offset-4 decoration-1 decoration-orange-500"
						>contribuir positivamente</span
					>
					na caminhada de sucesso de sua empresa.
					<span class="underline underline-offset-4 decoration-1 decoration-orange-500"
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
