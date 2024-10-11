<script lang="ts">
	import astroColorido from '$lib/img/extras/astro-costas.webp';
	import appStore from '$lib/img/logos/appleBottao.webp';
	import googlePlay from '$lib/img/logos/googleMaior.webp';
	import mobileFrame from '$lib/img/extras/mobile.webp';
	import instagramIcon from '$lib/img/extras/instaIcon.webp';
	import facebookIcon from '$lib/img/extras/facebookIcone.webp';
	import linkedinIcon from '$lib/img/extras/linkedinIcon.webp';
	import whatsappIcon from '$lib/img/extras/whatsIcon.webp';
	import logoNomeComepleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import baixeNossoApp from '$lib/img/extras/BaixeApp.webp';
</script>

<svelte:head>
	<title>HIMARTE - Sua Conexão com o Futuro</title>
	<meta
		name="description"
		content="Conecte-se com a Himarte através das redes sociais e baixe nosso app na Apple Store e Google Play."
	/>
	<meta
		name="keywords"
		content="Himarte, redes sociais, Apple Store, Google Play, Facebook, Instagram, Linkedin, Whatsapp"
	/>
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="HIMARTE - Sua Conexão com o Futuro" />
	<meta
		property="og:description"
		content="Conecte-se com a Himarte através das redes sociais e baixe nosso app na Apple Store e Google Play."
	/>
	<meta property="og:image" content={astroColorido} />
	<meta property="og:url" content="https://himarte.com.br/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="HIMARTE - Sua Conexão com o Futuro" />
	<meta
		name="twitter:description"
		content="Conecte-se com a Himarte através das redes sociais e baixe nosso app na Apple Store e Google Play."
	/>
	<meta name="twitter:image" content={astroColorido} />
</svelte:head>

<div
	class="relative flex h-screen w-full items-center justify-center bg-gradient-to-r from-[#0f1829] to-[#0A101B] md:bg-blend-saturation"
>
	<img
		src={mobileFrame}
		alt="Frame de um iPhone exibindo o aplicativo Himarte"
		class="absolute z-20 hidden aspect-auto h-full w-[27%] md:flex"
	/>
	<div class="relative flex h-full w-full md:h-[93%] md:w-1/4">
		<img
			src={astroColorido}
			alt="Imagem colorida de um astronauta"
			class="absolute aspect-auto h-full w-full !rounded-3xl object-cover mix-blend-difference blur-[10px]"
		/>
		<nav
			class="absolute z-30 flex h-full w-full flex-col items-center justify-center !bg-transparent"
		>
			<a
				target="_blank"
				href="https://himarte.com.br/"
				class="absolute top-16 z-40 flex w-full items-center justify-center md:top-14"
			>
				<img src={logoNomeComepleto} alt="Logotipo completo da Himarte" class="w-3/4" />
			</a>

			<div class="flex flex-col items-center justify-center gap-5">
				<div class="flex w-2/6 items-center justify-center gap-5">
					<a target="_blank" href="https://www.facebook.com/himarte.net/" class="card-hover w-1/2">
						<img src={facebookIcon} alt="Ícone do Facebook" />
					</a>
					<a target="_blank" href="https://www.instagram.com/himarte_net/" class="card-hover w-1/2">
						<img src={instagramIcon} alt="Ícone do Instagram" />
					</a>
				</div>
				<div class="flex w-2/6 items-center justify-center gap-5">
					<a
						target="_blank"
						href="https://www.linkedin.com/company/himartenet/"
						class="card-hover w-1/2"
					>
						<img src={linkedinIcon} alt="Ícone do LinkedIn" />
					</a>
					<a
						target="_blank"
						href="https://wa.me/555130568251?text=Ola!%20Tudo%20bem?"
						class="card-hover w-1/2"
					>
						<img src={whatsappIcon} alt="Ícone do WhatsApp" />
					</a>
				</div>
			</div>

			<img
				src={baixeNossoApp}
				alt="Texto dizendo Baixe nosso aplicativo"
				class="w-2/3 pb-5 pt-12"
			/>

			<div class="flex w-5/6 flex-col items-center justify-center gap-3">
				<a
					target="_blank"
					href="https://apps.apple.com/ro/app/himarte-net/id6448640271"
					class="card-hover w-2/3"
				>
					<img src={appStore} alt="Botão para download na Apple Store" />
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=br.com.portal.himarte&hl=pt_BR&gl=US&pli=1"
					class="card-hover w-2/3"
				>
					<img src={googlePlay} alt="Botão para download na Google Play Store" />
				</a>
			</div>
		</nav>
	</div>
</div>
