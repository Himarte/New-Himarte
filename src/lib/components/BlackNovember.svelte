<script lang="ts">
	import GlobeNovember from '$lib/img/extras/black-november/nov-globo.png';
	import Netuno from '$lib/img/planetas/netuno.png';
	import Saturno from '$lib/img/planetas/saturno.webp';
	import Marte from '$lib/img/planetas/marte.webp';
	import Jupiter from '$lib/img/planetas/jupiter.webp';
	import MelhorPreco from '$lib/components/TabPlanos/CPF1/MelhorPreco.svelte';
	import ContratarDialog from '$lib/components/TabPlanos/ContratarDialog.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Info, Plus, Zap } from '@lucide/svelte';
	import descontoImg from '$lib/img/extras/50.png';
	import { resolve } from '$app/paths';

	const items = [
		{
			id: 1,
			img: Marte,
			plano: 'Marte',
			megas: 1000,
			precoReais: 199,
			precoCentavos: 90,
			precoPromocional: 100,
			href: '/',
			beneficios: ['Assistência Técnica', 'Roteador Gratuito', 'Todas as Cidades'],
			faixaText: 'Instalação Grátis'
		},
		{
			id: 2,
			img: Jupiter,
			plano: 'Júpiter',
			megas: 700,
			precoReais: 149,
			precoCentavos: 90,
			precoPromocional: 75,
			regioes: ['Todas'],
			href: '/',
			beneficios: ['Assistência Técnica', 'Roteador Gratuito', 'Todas as Cidades'],
			faixaText: 'Instalação Grátis'
		},
		{
			id: 3,
			img: Netuno,
			plano: 'Netuno',
			megas: 600,
			precoReais: 109,
			precoCentavos: 90,
			precoPromocional: 55,
			href: '/',
			beneficios: ['Assistência Técnica', 'Roteador Gratuito', 'Todas as Cidades'],
			faixaText: 'Instalação Grátis'
		},
		{
			id: 4,
			img: Saturno,
			plano: 'Saturno',
			megas: 400,
			precoPromocional: 50,
			precoReais: 99,
			precoCentavos: 90,
			href: '/',
			beneficios: ['Assistência Técnica', 'Roteador Gratuito', 'Todas as Cidades'],
			faixaText: 'Instalação Grátis'
		}
	];

	function handleAtendente() {
		console.log('Chamou atendente');
	}

	function handleAutoAtendimento(plano: string, tipo: string, megas: number, valor: string) {
		window.location.href = `/cadastro?plano=${plano.toLowerCase()}&tipo=${tipo}&megas=${megas}&valor=${valor}`;
	}
</script>

<section class="flex w-full flex-col items-center justify-center bg-black pt-0 pb-20 md:pt-14">
	<div
		class="mb-16 flex flex-col items-center justify-center gap-4 px-5 md:max-w-400 md:flex-row md:gap-10 md:px-0"
	>
		<img
			src={GlobeNovember}
			alt="Globo de papel"
			class="h-75 w-75 object-contain md:h-100 md:w-100"
		/>
		<div class="flex flex-col items-center justify-center gap-1 text-center">
			<h1 class="mb-3 text-3xl font-bold text-orange-400 md:text-5xl">
				Promoção de Black November!
			</h1>

			<p class="font-inter w-full text-sm text-zinc-400 md:text-xl">
				Conecte-se com velocidade de outro planeta: <br />
				<span class="font-semibold text-orange-400">50% OFF</span>,
				<span class="font-semibold text-orange-400">instalação grátis</span> e
				<span class="font-semibold text-orange-400">3 meses de vantagem</span>.
			</p>
			<p class="font-inter w-full text-sm text-zinc-400 md:text-lg">
				<span class="mr-1 text-xs font-semibold text-orange-400 md:text-sm">*</span>Condições
				promocionais válidas para contratações realizadas entre
				<span class="font-semibold text-orange-400">01/11/25</span>
				até <span class="font-semibold text-orange-400">30/11/25</span>.
			</p>
		</div>
	</div>
	<div class="flex min-h-full min-w-full items-center justify-center text-nowrap">
		<div
			class=" flex min-h-full w-full flex-col items-center justify-center gap-12 md:h-96 md:w-4/5 md:flex-row md:items-end md:justify-between"
		>
			{#each items as item (item.id)}
				<div
					class="card relative z-10 flex h-96 w-3/4 flex-col items-center justify-center rounded-xl border bg-gray-800/30 text-start shadow-[0_0_20px_#f97316]/40 md:w-1/3 md:hover:scale-102"
				>
					<img
						src={item.img}
						alt={item.plano}
						class="absolute -top-11 -right-10 z-10 h-28 hover:z-10 md:h-32"
					/>
					<img
						src={descontoImg}
						alt="New Plano"
						class=" absolute -top-10 -left-8 w-30 -rotate-12"
					/>
					<h1 class="font-inter text-5xl font-bold text-[#f97316]">{item.plano}</h1>
					<h2 class=" mt-1 text-6xl font-bold">
						{item.megas} <span class="font-inter text-3xl font-bold">Megas</span>
					</h2>
					<ul class="mt-1 flex flex-col gap-1">
						{#each item.beneficios as beneficio (beneficio)}
							{#if beneficio === 'Todas as Cidades'}
								<li class="flex gap-2">
									<Plus color="#f97316" />
									<Tooltip.Provider>
										<Tooltip.Root>
											<Tooltip.Trigger class="z-50 flex items-center gap-2"
												>{beneficio}<Info color="#f97316" size={16} />
											</Tooltip.Trigger>
											<Tooltip.Content
												align="end"
												side="right"
												class="text-foreground flex w-40 flex-col gap-1 rounded-md border  bg-gray-800  px-4 py-2 text-center"
											>
												<p class="text-center text-sm">Santa Cruz do Sul</p>
												<p class="text-center text-sm">Encruzilhada do Sul</p>
												<p class="text-center text-sm">Rio Pardo</p>
												<p class="text-center text-sm">Vera Cruz</p>
												<p class="text-center text-sm">Candelária</p>
												<p class="text-center text-sm">Agudo</p>
											</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.Provider>
								</li>
							{:else}
								<li class="flex gap-2"><Plus color="#f97316" /> {beneficio}</li>
							{/if}
						{/each}
					</ul>
					<div class=" mt-1 flex items-end justify-center line-through decoration-orange-500">
						<span class="  mr-1 text-xl font-semibold text-gray-400">R$</span>
						<span class="text-xl font-extrabold tracking-tight text-gray-400"
							>{item.precoReais}</span
						>
						<span class=" text-xl font-extrabold tracking-tight text-gray-400">,</span>
						<span class="text-xl font-extrabold tracking-tight text-gray-400"
							>{item.precoCentavos}</span
						>
						<span class=" text-xl font-semibold text-gray-400">/Mês*</span>
					</div>

					<div class=" flex items-end">
						<span class="  mr-1 text-2xl font-semibold text-[#f97316]">R$</span>
						<span class="text-4xl font-extrabold tracking-tight">{item.precoPromocional}</span>
						<span class=" text-3xl font-extrabold tracking-tight text-[#f97316]">,</span>
						<span class="text-3xl font-extrabold tracking-tight">00</span>
						<span class="mx-1 text-xl text-gray-400">/Mês*</span>
					</div>
					<MelhorPreco text={item.faixaText} />
					<div class="card-button-wrapper">
						<ContratarDialog
							plano={item.plano}
							onAtendente={handleAtendente}
							onAutoAtendimento={() =>
								handleAutoAtendimento(
									item.plano,
									'CPF',
									item.megas,
									`${item.precoReais},${item.precoCentavos}`
								)}
							tipo="CPF"
						>
							<div
								class="card-button text-background flex items-center justify-center rounded-sm no-underline hover:no-underline"
							>
								Saiba Mais
							</div>
						</ContratarDialog>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="mb-2 flex w-full items-center justify-center pt-8 text-center">
		<h5 class=" font-inter px-3 text-xs text-gray-500 md:px-5">
			*Os valores são válidos apenas para pagamentos realizados até a data de vencimento.
		</h5>
	</div>
	<div class="flex w-full items-center justify-center pt-2 text-center">
		<a
			href={resolve('/planos-residenciais')}
			class="group text-background relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xs bg-linear-to-r from-orange-400 to-orange-600 px-8 py-3 text-base font-semibold shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95"
		>
			<!-- Efeito de brilho no hover -->
			<div
				class="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 ease-out group-hover:translate-x-full"
			></div>

			<Zap size={20} class="transition-transform duration-300 group-hover:rotate-12" />
			<span class="relative z-10">Ver Todos os Planos</span>

			<!-- Borda animada -->
			<div
				class="absolute inset-0 rounded-lg border-2 border-orange-300/0 transition-colors duration-300 group-hover:border-orange-300/50"
			></div>
		</a>
	</div>
</section>

<style>
	.card {
		position: relative;
		transition: 0.5s ease-out;
	}

	.card-button {
		width: 100%;
		background-color: #f97316;
		padding: 0.5rem 1rem;
		opacity: 1;
		transition: 0.3s ease-out;
		position: relative;
		z-index: 90;
	}

	.card-button-wrapper {
		transform: translate(-50%, 125%);
		position: absolute;
		left: 50%;
		bottom: 0;
		opacity: 0;
		transition: 0.3s ease-out;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	/*Hover*/
	.card:hover {
		box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
	}

	.card:hover .card-button-wrapper {
		transform: translate(-50%, 50%);
		opacity: 1;
	}
</style>
