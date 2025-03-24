<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import Venus from '$lib/img/planetas/venus.webp';
	import Saturno from '$lib/img/planetas/saturno.webp';
	import { Badge } from '$lib/components/ui/badge';
	import Marte from '$lib/img/planetas/marte.webp';
	import Plutao from '$lib/img/planetas/plutao.webp';
	import Urano from '$lib/img/planetas/urano.webp';
	import Jupiter from '$lib/img/planetas/jupiter.webp';
	import ContratarDialog from '$lib/components/TabPlanos/ContratarDialog.svelte';

	let { blipClient } = $props<{ blipClient?: any }>();

	const items = [
		{
			id: 1,
			img: Venus, // você pode ajustar o caminho da imagem aqui
			plano: 'Venus',
			megas: 300,
			beneficios: ['Assistência dedicada', 'Router Board', 'IP FIXO']
		},
		{
			id: 2,
			img: Marte, // você pode ajustar o caminho da imagem aqui
			plano: 'Marte',
			megas: 500,
			beneficios: ['Assistência dedicada', 'Router Board', 'IP FIXO']
		},
		{
			id: 3,
			img: Jupiter, // você pode ajustar o caminho da imagem aqui
			plano: 'Jupiter',
			megas: 1000,
			beneficios: ['Assistência dedicada', 'Router Board', 'IP FIXO']
		}
	];
	const items2 = [
		{
			id: 4,
			img: Urano, // você pode ajustar o caminho da imagem aqui
			plano: 'Urano',
			megas: 300,
			beneficios: ['Assistência dedicada', 'Router Board']
		},
		{
			id: 5,
			img: Plutao, // você pode ajustar o caminho da imagem aqui
			plano: 'Plutão',
			megas: 200,
			beneficios: ['Assistência dedicada', 'Router Board']
		},
		{
			id: 6,
			img: Saturno, // você pode ajustar o caminho da imagem aqui
			plano: 'Fibra Dedicada',
			megas: null, // sem valor definido de megas
			beneficios: ['Assistência dedicada', 'Router Board', 'IP FIXO', 'DNS Reverso']
		}
	];

	function handleAtendente() {
		console.log('Chamou atendente');
	}

	function handleAutoAtendimento(plano: string, tipo: string, megas: number | null) {
		window.location.href = `/cadastro?plano=${plano.toLowerCase()}&tipo=${tipo}&megas=${megas || 'ilimitado'}`;
	}
</script>

<div class="flex min-h-full w-full flex-col items-center justify-center text-nowrap">
	<div
		class="mt-6 flex h-full w-3/4 flex-col items-end justify-center gap-5 md:h-80 md:w-2/3 md:flex-row"
	>
		{#each items as item}
			<div
				class="card flex h-64 w-full flex-col items-start justify-center rounded-xl border bg-background/70 pl-10 hover:z-10 hover:scale-105 md:h-72 md:w-1/4"
			>
				<img
					src={item.img}
					alt={item.plano}
					class="absolute -right-10 -top-10 z-10 h-28 hover:z-10"
				/>
				<h1 class="center font-inter text-4xl font-bold text-[#f97316]">
					{item.plano}
					<Badge variant="outline">PRO</Badge>
				</h1>

				<h2 class=" mt-1 text-5xl font-bold">
					{item.megas} <span class="font-inter text-3xl font-bold">Megas</span>
				</h2>
				<ul>
					{#each item.beneficios as beneficio}
						<li class="flex gap-2"><Plus color="#f97316" /> {beneficio}</li>
					{/each}
				</ul>

				<div class="card-button-wrapper">
					<ContratarDialog
						plano={item.plano}
						onAtendente={handleAtendente}
						onAutoAtendimento={() => handleAutoAtendimento(item.plano, 'CNPJ', item.megas)}
						{blipClient}
						tipo="CNPJ"
					>
						<div
							class="card-button justify-center flex items-center text-background no-underline hover:no-underline"
						>
							Saiba Mais
						</div>
					</ContratarDialog>
				</div>
			</div>
		{/each}
	</div>
	<div
		class=" mt-6 flex h-full w-3/4 flex-col items-end justify-center gap-5 md:h-80 md:w-2/3 md:flex-row"
	>
		{#each items2 as item}
			<div
				class=" card flex h-64 w-full flex-col items-start justify-center rounded-xl border bg-background/70 pl-10 hover:z-10 hover:scale-105 md:h-72 md:w-1/4 md:pl-14"
			>
				<img
					src={item.img}
					alt={item.plano}
					class="absolute -right-10 -top-10 z-10 h-28 hover:z-10"
				/>

				{#if item.id !== 6}
					<h1 class="center font-inter text-4xl font-bold text-[#f97316]">
						{item.plano}
						<Badge variant="outline">PRO</Badge>
					</h1>
					<h2 class=" mt-1 text-5xl font-bold">
						{item.megas} <span class="font-inter text-3xl font-bold">Megas</span>
					</h2>
				{:else}
					<h1 class="center font-inter text-3xl font-bold text-[#f97316]">
						{item.plano}
					</h1>
					<h2 class=" mt-1 text-3xl font-bold">Ilimitado</h2>
				{/if}
				<ul>
					{#each item.beneficios as beneficio}
						<li class="flex gap-2"><Plus color="#f97316" /> {beneficio}</li>
					{/each}
				</ul>

				<div class="card-button-wrapper">
					<ContratarDialog
						plano={item.plano}
						onAtendente={handleAtendente}
						onAutoAtendimento={() => handleAutoAtendimento(item.plano, 'CNPJ', item.megas)}
						{blipClient}
						tipo="CNPJ"
					>
						<div
							class="card-button justify-center flex items-center text-background no-underline hover:no-underline"
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
