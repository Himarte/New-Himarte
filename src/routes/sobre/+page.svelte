<script lang="ts">
	import Gauge from '@lucide/svelte/icons/gauge';
	import Headphones from '@lucide/svelte/icons/headphones';
	import ListChecks from '@lucide/svelte/icons/list-checks';
	import Wifi from '@lucide/svelte/icons/wifi';
	import Wrench from '@lucide/svelte/icons/wrench';
	import Zap from '@lucide/svelte/icons/zap';
	import Target from '@lucide/svelte/icons/target';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import MoveRight from '@lucide/svelte/icons/move-right';
	import Heart from '@lucide/svelte/icons/heart';

	// Array para as vantagens
	const advantages = [
		{
			icon: Zap,
			title: '100% fibra ótica',
			description:
				'A fibra ótica permite que você utilize a internet de forma mais rápida e estável.',
			color: 'orange'
		},
		{
			icon: Gauge,
			title: 'Rápida conexão',
			description: 'A velocidade é uma das principais vantagens dos nossos planos',
			color: 'blue'
		},
		{
			icon: ListChecks,
			title: 'Planos feitos para você',
			description: 'Possuímos planos pensados para nos encaixarmos com a sua necessidade',
			color: 'green'
		},
		{
			icon: Wrench,
			title: 'Instalação rápida',
			description: 'Instalação rápida e segura com mão de obra própria',
			color: 'purple'
		},
		{
			icon: Wifi,
			title: 'Estabilidade de conexão',
			description: 'Além da velocidade, a fibra óptica proporciona muito mais estabilidade',
			color: 'teal'
		},
		{
			icon: Headphones,
			title: 'Atendimento de qualidade',
			description: 'Atendimento personalizado com suporte especializado',
			color: 'pink'
		}
	];

	// Array para Missão, Visão e Valores
	const missionVisionValues = [
		{
			icon: Zap,
			title: 'Missão',
			content:
				'Fornecer conexões de internet rápidas, estáveis e confiáveis, capacitando nossos clientes a alcançarem seu pleno potencial digital.',
			gradient: 'from-orange-500 to-red-500'
		},
		{
			icon: Target,
			title: 'Visão',
			content:
				'Ser reconhecida como a provedora de internet líder em inovação, qualidade e satisfação do cliente em nossa região de atuação.',
			gradient: 'from-blue-500 to-purple-500'
		},
		{
			icon: UsersRound,
			title: 'Valores',
			values: [
				'Excelência no atendimento',
				'Inovação constante',
				'Transparência e confiabilidade',
				'Compromisso com a comunidade'
			],
			gradient: 'from-green-500 to-teal-500'
		}
	];

	function getIconColor(color: string) {
		const colors: Record<string, string> = {
			orange: 'text-orange-400',
			blue: 'text-blue-400',
			green: 'text-green-400',
			purple: 'text-purple-400',
			teal: 'text-teal-400',
			pink: 'text-pink-400'
		};
		return colors[color] || 'text-orange-400';
	}

	function getBgColor(color: string) {
		const colors: Record<string, string> = {
			orange: 'bg-orange-500/20 ring-orange-500/30',
			blue: 'bg-blue-500/20 ring-blue-500/30',
			green: 'bg-green-500/20 ring-green-500/30',
			purple: 'bg-purple-500/20 ring-purple-500/30',
			teal: 'bg-teal-500/20 ring-teal-500/30',
			pink: 'bg-pink-500/20 ring-pink-500/30'
		};
		return colors[color] || 'bg-orange-500/20 ring-orange-500/30';
	}
</script>

<svelte:head>
	<title>Sobre a Himarte - Nossa História e Valores</title>
	<meta
		name="description"
		content="Conheça a Himarte, nossa missão, visão, valores e por que somos a melhor escolha em internet fibra ótica."
	/>
</svelte:head>

<div class="bg-background min-h-screen pt-24 pb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-20 text-center">
			<div
				class="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 ring-4 ring-orange-500/30"
			>
				<Heart size={32} class="text-orange-400" />
			</div>
			<h1 class="text-foreground mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
				Por que escolher a
				<span class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
					Himarte?
				</span>
			</h1>
			<p class="text-muted-foreground mx-auto max-w-4xl text-xl leading-relaxed">
				Descobra os diferenciais que fazem da Himarte a escolha ideal para sua conectividade.
				Inovação, qualidade e compromisso em cada serviço que oferecemos.
			</p>
		</div>

		<!-- Vantagens Section -->
		<div class="mb-14">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each advantages as advantage, index (index)}
					<div
						class="group bg-card border-border relative overflow-hidden rounded-2xl border p-8 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
						style="animation-delay: {index * 0.1}s;"
					>
						<!-- Icon -->
						<div
							class="mb-6 inline-flex h-16 w-16 items-center justify-center {getBgColor(
								advantage.color
							)} rounded-full ring-2"
						>
							<svelte:component
								this={advantage.icon}
								size={28}
								class={getIconColor(advantage.color)}
							/>
						</div>

						<!-- Content -->
						<h3
							class="text-foreground mb-3 text-xl font-bold transition-colors group-hover:text-orange-400"
						>
							{advantage.title}
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							{advantage.description}
						</p>

						<!-- Hover Effect -->
						<div
							class="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-orange-500/0 transition-all duration-300 group-hover:ring-orange-500/20"
						></div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Stats Section -->

		<!-- Mission, Vision, Values Section -->
		<div class="mb-16">
			<div class="mb-16 text-center">
				<h2 class="text-foreground mb-4 text-4xl font-bold">Nossa Essência</h2>
				<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
					Os pilares que orientam nossa jornada e definem quem somos como empresa.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each missionVisionValues as item, index (index)}
					<div
						class="group bg-card border-border relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 hover:shadow-2xl"
						style="animation-delay: {(index + 11) * 0.2}s;"
					>
						<!-- Gradient Background -->
						<div
							class="absolute inset-0 bg-gradient-to-br {item.gradient} opacity-5 transition-opacity group-hover:opacity-10"
						></div>

						<div class="relative flex min-h-[280px] flex-col p-8">
							<!-- Header -->
							<div class="mb-6 flex items-center gap-3">
								<div
									class="flex h-12 w-12 items-center justify-center bg-gradient-to-br {item.gradient} bg-opacity-20 rounded-full"
								>
									<svelte:component this={item.icon} size={24} class="text-foreground" />
								</div>
								<h3
									class="text-foreground text-2xl font-bold transition-colors group-hover:text-orange-400"
								>
									{item.title}
								</h3>
							</div>

							<!-- Content -->
							<div class="flex-1">
								{#if item.content}
									<p class="text-muted-foreground leading-relaxed">
										{item.content}
									</p>
								{:else if item.values}
									<div class="space-y-3">
										{#each item.values as value, index (index)}
											<div class="text-muted-foreground flex items-center gap-3">
												<div class="flex-shrink-0">
													<MoveRight size={16} class="text-orange-400" />
												</div>
												<span class="leading-relaxed">{value}</span>
											</div>
										{/each}
									</div>
								{/if}
							</div>
						</div>

						<!-- Hover Border Effect -->
						<div
							class="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-orange-500/0 transition-all duration-300 group-hover:ring-orange-500/30"
						></div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Final CTA -->
		<div class="text-center">
			<div
				class="rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 md:p-12"
			>
				<h3 class="text-foreground mb-4 text-3xl font-bold">
					Pronto para fazer parte da nossa história?
				</h3>
				<p class="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
					Descubra como a Himarte pode transformar sua experiência digital. Entre em contato e
					conheça nossos planos.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/planos"
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-700 hover:to-orange-600"
					>
						Ver Nossos Planos
					</a>
					<a
						href="/#contato"
						class="border-border bg-card hover:bg-muted/50 text-foreground inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-4 font-semibold transition-all duration-200"
					>
						Entre em Contato
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.grid > div {
		animation: slideInUp 0.6s ease-out forwards;
		opacity: 0;
	}
</style>
