<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import Plutao from '$lib/img/planetas/plutao.webp';
	import Mercurio from '$lib/img/planetas/Mercurio.svg';

	let mensagem = $state('');

	const openChat = (item: any) => {
		mensagem = `https://wa.me/555130568251?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${item.plano}%20de%20Fibra%20dedicada.`;
		window.open(mensagem, '_blank');
	};

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
				<button onclick={() => openChat(item)} class="card-button overflow-visible text-background"
					>Saiba Mais</button
				>
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
		transform: translate(-50%, 125%);
		width: 50%;
		border-radius: 0.5rem;
		background-color: #f97316;
		padding: 0.5rem 1rem;
		position: absolute;
		left: 50%;
		bottom: 0;
		opacity: 0;
		transition: 0.3s ease-out;
	}

	/*Hover*/
	.card:hover {
		border-color: #ffaa40;
		box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
	}

	.card:hover .card-button {
		transform: translate(-50%, 50%);
		opacity: 1;
		z-index: 20;
	}
</style>
