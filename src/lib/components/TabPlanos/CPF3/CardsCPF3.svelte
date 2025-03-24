<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import Plutao from '$lib/img/planetas/plutao.webp';
	import Mercurio from '$lib/img/planetas/Mercurio.svg';
	import ContratarDialog from '$lib/components/TabPlanos/ContratarDialog.svelte';

	let { blipClient } = $props<{ blipClient?: any }>();

	const items = [
		{
			id: 1,
			img: Plutao,
			plano: 'Plutão',
			megas: 60,
			precoReais: 59,
			precoCentavos: 90,
			regioes: ['Todas'],
			href: '/',
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Todas as Cidades']
		},
		{
			id: 2,
			img: Mercurio,
			plano: 'Mercúrio',
			megas: 50,
			precoReais: 50,
			precoCentavos: '00',
			regioes: ['Todas'],
			href: '/',
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Todas as Cidades']
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
				class="card mt-6 flex h-80 w-3/4 flex-col justify-center rounded-xl border bg-background/70 pl-10 text-start hover:z-10 md:w-1/4 md:pl-8 md:hover:scale-105"
			>
				<img
					src={item.img}
					alt={item.plano}
					class="absolute -right-10 -top-11 z-10 h-28 hover:z-10 md:h-32"
				/>
				<h1 class="font-inter text-4xl font-bold text-[#f97316]">{item.plano}</h1>
				<h2 class=" text-5xl font-bold">
					{item.megas}
					<span class="overflow-hidden font-inter text-2xl font-bold md:text-3xl">Megas</span>
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
						{blipClient}
						tipo="CPF"
					>
						<div
							class="card-button justify-center flex items-center text-background no-underline hover:no-underline"
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
		border-radius: 0.5rem;
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
		border-color: #ffaa40;
		box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
	}

	.card:hover .card-button-wrapper {
		transform: translate(-50%, 50%);
		opacity: 1;
	}
</style>
