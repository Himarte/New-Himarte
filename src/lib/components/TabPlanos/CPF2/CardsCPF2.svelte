<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import Venus from '$lib/img/planetas/venus.webp';
	import Plutao from '$lib/img/planetas/plutao.webp';
	import Urano from '$lib/img/planetas/urano.webp';
	import Jupiter from '$lib/img/planetas/jupiter.webp';
	import ContratarDialog from '$lib/components/TabPlanos/ContratarDialog.svelte';

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
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Todas as Cidades']
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
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Todas as Cidades']
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
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Santa Cruz do Sul e Rio Pardo']
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
		class="flex min-h-full w-full flex-col items-center justify-center gap-5 md:h-96 md:w-3/4 md:flex-row md:items-end"
	>
		{#each items as item}
			<div
				class="card bg-background/70 mt-6 flex h-80 w-3/4 flex-col justify-center border pl-10 text-start hover:z-10 hover:border-amber-500/70 md:w-1/4 md:pl-8 md:hover:scale-105"
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
				<ul>
					{#each item.beneficios as beneficio}
						<li class="flex gap-2 overflow-hidden"><Plus color="#f97316" /> {beneficio}</li>
					{/each}
				</ul>
				<div class="mt-2 flex items-end overflow-hidden">
					<span class=" text-xl font-semibold text-[#f97316]">R$</span>
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
