<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import Venus from '$lib/img/planetas/venus.webp';
	import Urano from '$lib/img/planetas/urano.webp';
	import Jupiter from '$lib/img/planetas/jupiter.webp';
	import ContratarDialog from '$lib/components/TabPlanos/ContratarDialog.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Info } from '@lucide/svelte';

	const items = [
		{
			id: 2,
			img: Venus,
			plano: 'Vênus',
			megas: 90,
			precoReais: 79,
			precoCentavos: 90,
			regioes: ['Todas'],
			href: '/',
			beneficios: ['Assistência Técnica', 'Todas as Cidades', 'Roteador Gratuito']
		},

		{
			id: 3,
			img: Urano,
			plano: 'Urano',
			megas: 120,
			precoReais: 89,
			precoCentavos: 90,
			regioes: ['Todas'],
			href: '/',
			beneficios: ['Assistência Técnica', 'Todas as Cidades', 'Roteador Gratuito']
		},
		{
			id: 4,
			img: Jupiter,
			plano: 'Júpiter',
			megas: 700,
			precoReais: 149,
			precoCentavos: 90,
			regioes: ['Todas'],
			href: '/',
			beneficios: [
				'Assistência Técnica',
				'Instalação Gratuita',
				'Todas as Cidades',
				'Roteador Gratuito'
			]
		}
	];

	function handleAtendente() {
		console.log('Chamou atendente');
	}

	function handleAutoAtendimento(plano: string, tipo: string, megas: number, valor: string) {
		window.location.href = `/cadastro?plano=${plano.toLowerCase()}&tipo=${tipo}&megas=${megas}&valor=${valor}`;
	}
</script>

<div class="mt-5 flex w-full items-center justify-center text-nowrap md:mt-0">
	<div
		class="flex min-h-full w-full flex-col items-center justify-center gap-8 md:h-96 md:w-3/4 md:flex-row md:items-end"
	>
		{#each items as item (item.id)}
			<div
				class="card z-10 mt-6 flex h-80 w-3/4 flex-col justify-center rounded-xl border bg-gray-800/30 pl-5 text-start md:w-1/4 md:pl-8 md:hover:scale-102"
			>
				<img
					src={item.img}
					alt={item.plano}
					class="absolute -top-11 -right-10 z-10 h-28 hover:z-10 md:h-32"
				/>
				<h1 class="font-inter text-4xl font-bold text-[#f97316]">{item.plano}</h1>
				<h2 class=" text-5xl font-bold">
					{item.megas}
					<span class="font-inter overflow-hidden text-2xl font-bold md:text-3xl">Megas</span>
				</h2>
				<ul class="mt-1 flex flex-col gap-1">
					{#each item.beneficios as beneficio (beneficio)}
						{#if beneficio !== 'Todas as Cidades'}
							<li class="flex gap-2"><Plus color="#f97316" /> {beneficio}</li>
						{:else}
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
						{/if}
					{/each}
				</ul>
				<div class="mt-2 flex items-end overflow-hidden">
					<span class=" mr-1 text-xl font-semibold text-[#f97316]">R$</span>
					<span class="text-3xl font-extrabold tracking-tight">{item.precoReais}</span>
					<span class=" text-3xl font-extrabold tracking-tight text-[#f97316]">,</span>
					<span class="text-2xl font-extrabold tracking-tight">{item.precoCentavos}</span>
					<span class="mx-1 text-xl text-gray-400">/Mês*</span>
				</div>
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
							Contratar
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
