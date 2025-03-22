<svelte:options runes={false} />

<script lang="ts">
	// Não é necessário importar Runes; eles estão disponíveis globalmente
	import HoverBorderGradient from '$lib/components/HoverBorderGradient.svelte';
	import MenuHome from '$lib/components/MenuHome.svelte';
	import TabsPlanos from '$lib/components/TabPlanos/TabsPlanos.svelte';
	import notebookImg from '$lib/img/extras/notebook4.webp';
	import { onMount } from 'svelte';

	// Declare 'blipClient' como variável reativa
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let BlipChat: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let blipClient: any;

	onMount(async () => {
		const module = await import('blip-chat-widget');
		BlipChat = module.BlipChat;

		blipClient = new BlipChat()
			.withAppKey(import.meta.env.VITE_CHAVE_API_BLIP_CHAT)
			.withButton({ color: '#EB4F27', icon: '' })
			.withCustomCommonUrl(import.meta.env.VITE_LINK_BLIP_CHAT);
		blipClient.build();
	});

	// Função para abrir o chat
</script>

<MenuHome />

<TabsPlanos />

<section
	class="relative mt-10 flex min-h-[22rem] w-full flex-col-reverse items-center justify-center overflow-hidden md:mt-16 md:w-2/3 md:flex-row"
>
	<div
		class="z-10 flex min-h-[22rem] w-full flex-col items-center justify-start gap-36 md:w-1/2 md:justify-center md:gap-5"
	>
		<h1
			class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FF8C42] via-[#FFA94D] to-[#FF7B00] bg-[200%_auto] bg-clip-text text-center font-inter text-3xl font-bold uppercase text-transparent"
		>
			Até onde a Himarte <br /> pode te levar!
		</h1>

		<div class="flex justify-center text-center">
			<HoverBorderGradient
				><a href="https://www.minhaconexao.com.br/?server_id=001805" target="_blank"
					>Teste a sua velocidade!</a
				></HoverBorderGradient
			>
		</div>
	</div>
	<div class="absolute bottom-5 flex w-full items-center justify-center md:static md:w-1/2">
		<img
			src={notebookImg}
			loading="lazy"
			alt="Imagem de um notebook no espaço com um botão de teste de velocidade"
			class=" w-[35rem] -scale-x-100 md:ml-16 md:rotate-6"
		/>
	</div>
</section>
<section
	class="mt-16 flex w-full flex-col-reverse items-center gap-5 overflow-hidden md:mt-20 md:w-2/3 md:flex-row md:gap-0"
>
	<div class="flex flex-col w-full h-full items-center justify-center gap-2 md:gap-5 px-0">
		<div class="w-full md:w-2/3 flex mt-5 md:mt-0 px-5 md:px-0">
			<div class="iframe-container">
				<iframe
					class="md:border-2 border border-primary-500 rounded-md md:rounded-2xl border-opacity-70"
					src="https://www.youtube-nocookie.com/embed/seGVeab1a-I?si=PoyImY2uxZ11CmHh"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
	<h1
		class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FF8C42] via-[#FFA94D] to-[#FF7B00] bg-[200%_auto] bg-clip-text text-center font-inter text-3xl font-bold uppercase text-transparent"
	>
		Conheça um pouco da nossa história
	</h1>
</section>

<style>
	.iframe-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		height: 0;
	}
	.iframe-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
