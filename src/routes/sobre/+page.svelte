<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import {
		Gauge,
		Headphones,
		ListChecks,
		Wifi,
		Wrench,
		Zap,
		Target,
		UsersRound,
		MoveRight
	} from 'lucide-svelte';
	import NumberUser from '$lib/components/CounterNumber/NumberTickerUser.svelte';
	import NumberColab from '$lib/components/CounterNumber/NumberTickerColab.svelte';
	import NumberEmp from '$lib/components/CounterNumber/NumberTickerEmp.svelte';
	import NumberHouse from '$lib/components/CounterNumber/NumberTickerHouse.svelte';
	import NumberCond from '$lib/components/CounterNumber/NumberTickerCond.svelte';

	// Array para as vantagens
	const advantages = [
		{
			icon: Zap,
			title: '100% fibra ótica',
			description:
				'A fibra ótica permite que você utilize a internet de forma mais rápida e estável.'
		},
		{
			icon: Gauge,
			title: 'Rápida conexão',
			description: 'A velocidade é uma das principais vantagens dos nossos planos'
		},
		{
			icon: ListChecks,
			title: 'Planos feitos para você',
			description: 'Possuímos planos pensados para nos encaixarmos com a sua necessidade'
		},
		{
			icon: Wrench,
			title: 'Instalação rápida',
			description: 'Instalação rápida e segura com mão de obra própria'
		},
		{
			icon: Wifi,
			title: 'Estabilidade de conexão',
			description: 'Além da velocidade, a fibra óptica proporciona muito mais estabilidade'
		},
		{
			icon: Headphones,
			title: 'Atendimento de qualidade',
			description: 'Atendimento personalizado com suporte especializado'
		}
	];

	// Array para os números
	const stats = [
		{
			title: 'Residências',
			value: 5000,
			component: NumberHouse
		},
		{
			title: 'Empresas',
			value: 170,
			component: NumberEmp
		},
		{
			title: 'Condomínios',
			value: 20,
			component: NumberCond
		},
		{
			title: 'Usuários',
			value: 9800,
			component: NumberUser
		},
		{
			title: 'Colaboradores',
			value: 50,
			component: NumberColab
		}
	];

	// Array para Missão, Visão e Valores
	const missionVisionValues = [
		{
			icon: Zap,
			title: 'Missão',
			content:
				'Fornecer conexões de internet rápidas, estáveis e confiáveis, capacitando nossos clientes a alcançarem seu pleno potencial digital.'
		},
		{
			icon: Target,
			title: 'Visão',
			content:
				'Ser reconhecida como a provedora de internet líder em inovação, qualidade e satisfação do cliente em nossa região de atuação.'
		},
		{
			icon: UsersRound,
			title: 'Valores',
			values: [
				'Excelência no atendimento',
				'Inovação constante',
				'Transparência e confiabilidade',
				'Compromisso com a comunidade'
			]
		}
	];
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-10 pt-28">
	<!-- título -->
	<div class="flex flex-col text-center">
		<h1 class="fontSpace text-2xl font-bold text-[#f97316] md:text-3xl">Por que escolher a</h1>
		<h1 class="fontSpace text-3xl font-bold text-[#f97316] md:text-5xl">Himarte?</h1>
	</div>

	<!-- vantagens -->
	<div class="flex w-full flex-col items-center justify-center gap-8 font-inter">
		{#each [0, 1] as index}
			<div class="flex flex-col items-center gap-20 md:w-[60%] md:flex-row">
				{#each advantages.slice(index * 3, index * 3 + 3) as advantage}
					<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
						<svelte:component this={advantage.icon} color={'#f97316'} size={28} />
						<h1 class="text-lg font-semibold">{advantage.title}</h1>
						<p>{advantage.description}</p>
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<!-- números e compromisso -->
	<div class="flex flex-col items-center justify-center py-14 font-inter">
		<!-- contagem números -->
		<div
			class="mb-16 flex flex-col items-center justify-center gap-10 md:mb-0 md:w-[60%] md:flex-row"
		>
			{#each stats as stat}
				<div class="flex flex-col items-center justify-center gap-2 md:w-1/5">
					<h1 class="text-center font-inter text-3xl text-[#f97316] md:text-lg">{stat.title}</h1>
					<p class="text-4xl font-bold">
						+
						<svelte:component this={stat.component} value={stat.value} />
					</p>
				</div>
			{/each}
		</div>

		<Separator class="my-10 hidden md:flex md:w-[60%]" />

		<!-- frase compromisso -->
		<div
			class="flex w-3/4 flex-col items-center gap-10 text-center md:w-[60%] md:flex-row md:gap-20 md:text-start"
		>
			<h1 class="w-full text-3xl font-bold">
				Excelência e <span class="text-[#f97316]">compromisso</span> com nossos clientes!
			</h1>
			<p class="flex w-[95%]">
				Na Himarte, priorizamos seu sucesso. Estamos dedicados a oferecer soluções claras e
				eficientes, com parcerias baseadas em transparência e confiança. Nosso foco é superar suas
				expectativas e garantir satisfação em cada projeto.
			</p>
		</div>

		<!-- valores e missão -->
		<div
			class="flex h-full w-3/4 flex-col items-center justify-center gap-10 pt-10 md:w-[60%] md:flex-row"
		>
			{#each missionVisionValues as item}
				<div class="flex h-full min-h-[15rem] flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<svelte:component this={item.icon} color={'#f97316'} />
						<h1 class="text-lg font-semibold">{item.title}</h1>
					</div>
					{#if item.content}
						<p>{item.content}</p>
					{:else if item.values}
						{#each item.values as value}
							<p class="flex items-center gap-2">
								<MoveRight size={15} color={'#f97316'} />
								{value}
							</p>
						{/each}
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
