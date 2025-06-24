<script lang="ts">
	import HoverBorderGradient from '$lib/components/HoverBorderGradient.svelte';
	import MenuHome from '$lib/components/MenuHome.svelte';
	import TabsPlanosScroll from '$lib/components/TabPlanosScroll/TabsPlanosScroll.svelte';
	import notebookImg from '$lib/img/extras/notebook4.webp';
	import Zap from '@lucide/svelte/icons/zap';
	import Gauge from '@lucide/svelte/icons/gauge';
	import ExternalLink from '@lucide/svelte/icons/external-link';
</script>

<svelte:head>
	<title>Himarte - Internet Fibra Ótica de Alta Velocidade</title>
	<meta
		name="description"
		content="A melhor internet fibra ótica do RS. Planos residenciais e empresariais com velocidade real, estabilidade e suporte 24h. Teste sua velocidade agora!"
	/>
</svelte:head>

<!-- MenuHome Component - Preserved completely -->
<MenuHome />

<!-- Transition Element -->
<div class="relative">
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
	></div>
</div>

<!-- Plans Section -->
<section class="relative h-full w-full bg-black pb-20">
	<div class="w-full px-4">
		<h2 class="mb-4 text-center text-4xl font-bold text-orange-400">
			Escolha o plano ideal para você
		</h2>
		<TabsPlanosScroll />
	</div>
</section>

<!-- Transition Element -->
<div class="relative">
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
	></div>
</div>

<!-- Hero Content Section -->
<section class="relative h-full w-full bg-black pb-20">
	<div class="relative z-10 w-full">
		<div class="mx-auto max-w-7xl px-4 md:px-8">
			<div class="grid min-h-[50vh] grid-cols-1 items-center gap-12 md:grid-cols-2">
				<!-- Left Content -->
				<div class="space-y-8 text-center md:text-left">
					<div class="space-y-6">
						<h1 class="text-foreground text-5xl leading-tight font-bold md:text-6xl">
							Até onde a
							<span
								class="animate-text-gradient bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent"
							>
								Himarte
							</span>
							<br />pode te levar!
						</h1>

						<p class="text-muted-foreground max-w-2xl text-xl leading-relaxed">
							Conecte-se ao futuro com a internet mais rápida e estável do Rio Grande do Sul. Planos
							residenciais e empresariais com velocidade real garantida.
						</p>
					</div>

					<!-- CTAs -->
					<div class="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
						<HoverBorderGradient>
							<a
								href="https://www.minhaconexao.com.br/?server_id=001805"
								target="_blank"
								class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold md:text-base"
							>
								<Gauge size={20} />
								Teste sua velocidade
								<ExternalLink size={16} />
							</a>
						</HoverBorderGradient>
					</div>
				</div>

				<!-- Right Content - Notebook Image -->
				<div class="relative hidden items-center justify-center md:flex md:justify-end">
					<div class="group relative">
						<!-- Enhanced Glow Effect -->
						<div
							class="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 via-purple-500/15 to-blue-500/20 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:blur-3xl"
						></div>

						<!-- Secondary glow -->
						<div
							class="animate-pulse-slow absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/10 to-blue-400/10 blur-xl"
						></div>

						<!-- Image -->
						<img
							src={notebookImg}
							loading="lazy"
							alt="Notebook conectado à internet Himarte de alta velocidade"
							class="relative z-10 w-full max-w-lg -scale-x-100 drop-shadow-2xl transition-transform duration-500 md:rotate-6"
						/>

						<!-- Enhanced Floating Elements -->
						<div
							class="absolute top-10 right-10 h-16 w-16 animate-pulse rounded-full border border-orange-500/20 bg-gradient-to-br from-orange-500/30 to-orange-600/20 backdrop-blur-sm"
						></div>
						<div
							class="absolute bottom-20 left-10 h-12 w-12 animate-bounce rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-500/30 to-blue-600/20 backdrop-blur-sm"
						></div>
						<div
							class="absolute top-1/2 right-5 h-8 w-8 animate-ping rounded-full bg-gradient-to-br from-purple-500/25 to-pink-500/20"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Video/History Section -->
<section class="relative w-full bg-black pb-20">
	<div class="mx-auto max-w-7xl px-4 md:px-0">
		<div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
			<!-- Left Content - Video -->
			<div class="order-2 md:order-1">
				<div class="group relative">
					<!-- Enhanced video container -->
					<div
						class="border-border bg-card relative overflow-hidden rounded-xs border shadow-2xl ring-1 ring-zinc-500/10 backdrop-blur-sm"
					>
						<div class="iframe-container">
							<iframe
								class="rounded-xs"
								src="https://www.youtube-nocookie.com/embed/seGVeab1a-I?si=PoyImY2uxZ11CmHh"
								title="Conheça a história da Himarte - Internet Fibra Ótica"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						</div>

						<!-- Overlay gradient on hover -->
						<div
							class="from-background/20 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<!-- Decorative elements around video -->
					<div
						class="absolute -top-4 -right-4 hidden h-8 w-8 animate-ping rounded-full bg-green-500/30 blur-xs md:block"
					></div>
					<div
						class="absolute -bottom-4 -left-4 h-6 w-6 animate-pulse rounded-full bg-orange-500/30 blur-xs md:block"
					></div>
				</div>
			</div>

			<!-- Right Content - Text with stats -->
			<div class="order-1 space-y-8 px-4 text-center md:order-2 md:px-0 md:text-left">
				<div>
					<h2 class="text-foreground mb-6 text-4xl font-bold">
						Conheça um pouco da nossa
						<span
							class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
						>
							história
						</span>
					</h2>

					<p class="text-muted-foreground mb-8 text-xl leading-relaxed">
						Desde nossa fundação, trabalhamos incansavelmente para levar internet de qualidade
						superior para residências e empresas. Descubra como começamos e para onde estamos indo.
					</p>
				</div>

				<!-- CTA -->
				<div class="pt-4">
					<a
						href="/sobre"
						class="group inline-flex items-center gap-2 font-semibold text-orange-400 transition-all hover:gap-3 hover:text-orange-300"
					>
						Saiba mais sobre nós
						<ExternalLink
							size={16}
							class="transition-transform group-hover:translate-x-1 group-hover:scale-110"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Transition Element -->
<div class="relative">
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
	></div>
</div>

<!-- Footer CTA -->
<section class="relative w-full bg-black pb-20">
	<div class="mx-auto max-w-7xl text-center">
		<div class="bg-card/80 rounded-xs border p-8 shadow-2xl md:p-12">
			<h3 class="text-foreground mb-6 text-3xl font-bold">Pronto para se conectar?</h3>
			<p class="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
				Faça parte da revolução digital com a Himarte. Velocidade, suporte especializado e com a
				confiança de milhares de clientes.
			</p>
			<div class="flex flex-col justify-center gap-4 md:flex-row">
				<a
					href="/planos"
					class="inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-700 hover:to-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
				>
					<Zap size={20} />
					Ver Nossos Planos
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%21+Tudo+bem%3F&type=phone_number&app_absent=0"
					class="border-border bg-card hover:bg-muted/50 text-foreground inline-flex items-center justify-center gap-2 rounded-xs border px-8 py-4 font-semibold transition-all duration-200 hover:scale-105 hover:ring-2 hover:ring-orange-500/20"
				>
					Entre em Contato
				</a>
			</div>
		</div>
	</div>
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

	@keyframes text-gradient {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}

	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(1);
		}
		50% {
			opacity: 0.8;
			transform: scale(1.05);
		}
	}

	.animate-text-gradient {
		background-size: 200% 200%;
		animation: text-gradient 3s ease-in-out infinite;
	}

	.animate-pulse-slow {
		animation: pulse-slow 4s ease-in-out infinite;
	}
</style>
