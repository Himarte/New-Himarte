<script lang="ts">
	import astroColorido from '$lib/img/extras/astro-costas.webp';
	import appStore from '$lib/img/logos/appleBottao.webp';
	import googlePlay from '$lib/img/logos/googleMaior.webp';
	import instagramIcon from '$lib/img/extras/instaIcon.webp';
	import facebookIcon from '$lib/img/extras/facebookIcone.webp';
	import linkedinIcon from '$lib/img/extras/linkedinIcon.webp';
	import whatsappIcon from '$lib/img/extras/whatsIcon.webp';
	import logoNomeComepleto from '$lib/img/logos/logo-nome-quliadade2.png';
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

<!-- Container principal dark -->
<div
	class="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#0A101B]"
>
	<!-- Efeitos de fundo sutis -->
	<div class="absolute inset-0">
		<div class="absolute top-1/3 left-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl"></div>
		<div
			class="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-purple-600/5 blur-3xl"
		></div>
	</div>

	<!-- Conteúdo principal -->
	<div class="relative z-10 flex min-h-screen items-center justify-center p-6">
		<div class="mx-auto w-full max-w-sm">
			<!-- Logo -->
			<div class="mb-10 text-center">
				<img
					src={logoNomeComepleto}
					alt="Logotipo completo da Himarte"
					class="mx-auto mb-4 h-auto w-48"
				/>
				<p class="text-sm text-gray-400">Sua conexão com o futuro</p>
			</div>

			<!-- Links principais -->
			<div class="mb-10 space-y-4">
				<!-- Link para site -->
				<a
					href="https://himarte.com.br/"
					target="_blank"
					class="group block w-full rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
								<svg
									class="h-5 w-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
									></path>
								</svg>
							</div>
							<div>
								<h3 class="font-medium text-white">Visite nosso site</h3>
								<p class="text-sm text-gray-400">himarte.com.br</p>
							</div>
						</div>
						<svg
							class="h-5 w-5 text-gray-400 transition-colors group-hover:text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					</div>
				</a>

				<!-- Link para WhatsApp -->
				<a
					href="https://wa.me/555130568251?text=Ola!%20Tudo%20bem?"
					target="_blank"
					class="group block w-full rounded-xl border border-green-700/50 bg-green-900/30 p-4 transition-all duration-300 hover:border-green-600/50 hover:bg-green-800/40"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-3">
							<img src={whatsappIcon} alt="WhatsApp" class="h-10 w-10" />
							<div>
								<h3 class="font-medium text-white">Fale conosco</h3>
								<p class="text-sm text-gray-400">WhatsApp direto</p>
							</div>
						</div>
						<svg
							class="h-5 w-5 text-gray-400 transition-colors group-hover:text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					</div>
				</a>
			</div>

			<!-- Redes sociais -->
			<div class="mb-10">
				<h3 class="mb-6 text-center text-sm font-medium text-gray-400">Siga-nos nas redes</h3>
				<div class="grid grid-cols-3 gap-4">
					<a
						href="https://www.facebook.com/himarte.net/"
						target="_blank"
						class="flex items-center justify-center rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50"
					>
						<img src={facebookIcon} alt="Facebook" class="h-8 w-8" />
					</a>
					<a
						href="https://www.instagram.com/himarte_net/"
						target="_blank"
						class="flex items-center justify-center rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50"
					>
						<img src={instagramIcon} alt="Instagram" class="h-8 w-8" />
					</a>
					<a
						href="https://www.linkedin.com/company/himartenet/"
						target="_blank"
						class="flex items-center justify-center rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50"
					>
						<img src={linkedinIcon} alt="LinkedIn" class="h-8 w-8" />
					</a>
				</div>
			</div>

			<!-- Download do app -->
			<div class="space-y-4">
				<h3 class="mb-6 text-center text-sm font-medium text-gray-400">Baixe nosso app</h3>

				<a
					href="https://apps.apple.com/ro/app/himarte-net/id6448640271"
					target="_blank"
					class="block w-full rounded-xl border border-gray-700/50 bg-gray-800/50 p-3 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50"
				>
					<img src={appStore} alt="Download na App Store" class="h-auto w-full" />
				</a>

				<a
					href="https://play.google.com/store/apps/details?id=br.com.portal.himarte&hl=pt_BR&gl=US&pli=1"
					target="_blank"
					class="block w-full rounded-xl border border-gray-700/50 bg-gray-800/50 p-3 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50"
				>
					<img src={googlePlay} alt="Download na Google Play" class="h-auto w-full" />
				</a>
			</div>

			<!-- Footer -->
			<div class="mt-10 border-t border-gray-800 pt-6 text-center">
				<p class="text-xs text-gray-500">© 2024 HIMARTE - Todos os direitos reservados</p>
			</div>
		</div>
	</div>
</div>
