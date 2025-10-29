<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import Saturno from '$lib/img/planetas/saturno.webp';
	import Netuno from '$lib/img/planetas/netuno.png';
	import Marte from '$lib/img/planetas/marte.webp';
	import MelhorPreco from './MelhorPreco.svelte';
	import ContratarDialog from '$lib/components/TabPlanos/ContratarDialog.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Info } from '@lucide/svelte';
	import descontoImg from '$lib/img/extras/50.png';

	const items = [
		{
			id: 1,
			img: Saturno,
			plano: 'Saturno',
			megas: 400,
			precoPromocional: 50,
			precoReais: 99,
			precoCentavos: 90,
			href: '/',
			beneficios: ['Assistência Técnica', 'Roteador Gratuito', 'Todas as Cidades'],
			faixaText: 'Instalação Grátis'
		},
		{
			id: 2,
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
			id: 3,
			img: Marte,
			plano: 'Marte',
			megas: 1000,
			precoReais: 199,
			precoCentavos: 90,
			precoPromocional: 100,
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

<div class="flex min-h-full min-w-full items-center justify-center text-nowrap">
	<div
		class=" flex min-h-full w-full flex-col items-center justify-center gap-12 md:h-96 md:w-3/5 md:flex-row md:items-end md:justify-between"
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
				<img src={descontoImg} alt="New Plano" class=" absolute -top-10 -left-8 w-30 -rotate-12" />
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
					<span class="text-xl font-extrabold tracking-tight text-gray-400">{item.precoReais}</span>
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
