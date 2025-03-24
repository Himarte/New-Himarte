<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import Saturno from '$lib/img/planetas/saturno.webp';
	import Netuno from '$lib/img/planetas/netuno.png';
	import Marte from '$lib/img/planetas/marte.webp';
	import BorderBeam from '$lib/components/BorderBeam/BorderBeam.svelte';
	import MelhorPreco from './MelhorPreco.svelte';
	import New from '$lib/img/extras/new.png';
	import ContratarDialog from '$lib/components/ContratarDialog.svelte';

	let { blipClient } = $props<{ blipClient?: any }>();

	const items = [
		{
			id: 1,
			img: Netuno,
			plano: 'Netuno',
			megas: 600,
			precoReais: 109,
			precoCentavos: 90,
			href: '/',
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Santa Cruz do Sul e Rio Pardo']
		},
		{
			id: 2,
			img: Saturno,
			plano: 'Saturno',
			megas: 400,
			precoReais: 99,
			precoCentavos: 90,
			href: '/',
			beneficios: ['Roteador', 'Assistência Técnica', 'Suporte', 'Todas as Cidades']
		},

		{
			id: 3,
			img: Marte,
			plano: 'Marte',
			megas: 1000,
			precoReais: 199,
			precoCentavos: 90,
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

<div class="flex min-h-full w-full items-center justify-center text-nowrap">
	<div
		class="mt-5 flex min-h-full w-full flex-col items-center justify-center gap-10 md:h-96 md:w-2/3 md:flex-row md:items-end md:justify-between"
	>
		{#each items as item}
			{#if item.id === 2}
				<div
					class=" card flex h-96 w-3/4 flex-col items-center justify-center rounded-xl border bg-background/70 text-start hover:z-10 md:w-1/3 md:hover:scale-105"
				>
					<BorderBeam
						size={250}
						duration={10}
						borderWidth={1.5}
						colorFrom="#ffaa40"
						colorTo="#9c40ff"
					/>

					<img
						src={item.img}
						alt={item.plano}
						class="absolute -right-10 -top-11 z-10 h-28 hover:z-10 md:h-32"
					/>
					<h1 class="font-inter text-5xl font-bold text-[#f97316]">{item.plano}</h1>
					<h2 class=" mt-1 text-6xl font-bold">
						{item.megas} <span class="font-inter text-3xl font-bold">Megas</span>
					</h2>
					<ul>
						{#each item.beneficios as beneficio}
							<li class="flex gap-2"><Plus color="#f97316" /> {beneficio}</li>
						{/each}
					</ul>
					<div class="mt-2 flex items-end">
						<span class=" text-2xl font-semibold text-[#f97316]">R$</span>
						<span class="text-4xl font-extrabold tracking-tight">{item.precoReais}</span>
						<span class=" text-3xl font-extrabold tracking-tight text-[#f97316]">,</span>
						<span class="text-3xl font-extrabold tracking-tight">{item.precoCentavos}</span>
						<span class="mx-1 text-xl text-gray-400">/Mês*</span>
					</div>
					<MelhorPreco />
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
			{:else}
				<div
					class=" card flex h-80 w-3/4 flex-col justify-center rounded-xl border bg-background/70 pl-10 text-start hover:z-10 hover:scale-105 md:w-1/3 md:pl-20"
				>
					<img
						src={item.img}
						alt={item.plano}
						class="absolute -right-10 -top-11 z-10 h-28 hover:z-10 md:h-32"
					/>
					{#if item.id === 1}
						<img
							src={New}
							alt="New Plano"
							class="absolute -left-4 -top-5 w-16 -rotate-12 bg-background"
						/>
					{/if}
					<h1 class="font-inter text-5xl font-bold text-[#f97316]">{item.plano}</h1>

					{#if item.megas === 1000}
						<h2 class=" mt-1 text-5xl font-bold">
							1000 <span class="font-inter text-3xl font-bold">Megas</span>
						</h2>
					{:else}
						<h2 class=" mt-1 text-5xl font-bold md:text-5xl">
							{item.megas} <span class="font-inter font-bold md:text-3xl">Megas</span>
						</h2>
					{/if}
					<ul>
						{#each item.beneficios as beneficio}
							<li class="flex gap-2"><Plus color="#f97316" /> {beneficio}</li>
						{/each}
					</ul>
					<div class="mt-2 flex items-end">
						<span class=" text-2xl font-semibold text-[#f97316]">R$</span>
						<span class="text-4xl font-extrabold tracking-tight">{item.precoReais}</span>
						<span class=" text-3xl font-extrabold tracking-tight text-[#f97316]">,</span>
						<span class="text-3xl font-extrabold tracking-tight">{item.precoCentavos}</span>
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
			{/if}
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
