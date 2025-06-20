<script>
	import {
		Activity,
		RadioTower,
		ShieldCheck,
		Headset,
		SquareActivity,
		PencilRuler
	} from '@lucide/svelte';
	import { cn } from '$lib/utils';
	const features = [
		{
			title: 'Conectividade',
			description: 'Garantimos uma conexão Wi-Fi estável e sem falhas em toda a sua empresa.',
			icon: RadioTower
		},
		{
			title: 'Segurança',
			description: 'Protegemos sua rede com soluções avançadas, bloqueando ameaças cibernéticas.',
			icon: ShieldCheck
		},
		{
			title: 'Eficiência',
			description: 'Otimizamos o desempenho da rede para aumentar a produtividade e fluidez.',
			icon: Activity
		},
		{
			title: 'Suporte',
			description: 'Oferecemos suporte técnico ágil e contínuo, resolvendo problemas rapidamente.',
			icon: Headset
		},
		{
			title: 'Monitoramento',
			description: 'Monitoramos sua rede em tempo real, prevenindo falhas e interrupções.',
			icon: SquareActivity
		},
		{
			title: 'Personalização',
			description:
				'Desenvolvemos soluções de rede sob medida para atender às necessidades da sua empresa.',
			icon: PencilRuler
		}
	];
</script>

<div class="flex w-full flex-col items-center justify-between bg-black px-4 py-5 md:py-10">
	<h1 class="font-inter mx-10 mb-5 text-center text-3xl uppercase md:mx-0 md:mb-2">
		Como <span class="underline decoration-orange-500 decoration-1 underline-offset-4"
			>sua empresa</span
		>
		pode evoluir com a
		<span class="font-bold text-orange-500">HiWiFi</span>
	</h1>
	<h3 class="text-center text-lg text-gray-400">
		<span class="text-orange-500">"</span>Descubra como transformar a conectividade com a HiWiFi<span
			class="text-orange-500">,</span
		>
		elevando a eficiência e otimizando a experiência digital<span class="text-orange-500">"</span>
	</h3>
	<div
		class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 bg-black py-10 md:w-2/3 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each features as feature, index}
			<div
				class={cn(
					'group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
					(index === 0 || index === 3) && 'lg:border-l dark:border-neutral-800',
					index < 3 && 'md:border-b dark:border-neutral-800'
				)}
			>
				{#if index < 3}
					<div
						class="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800"
					></div>
				{/if}
				{#if index >= 3}
					<div
						class="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800"
					></div>
				{/if}
				<div class="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
					<feature.icon class="transition duration-200 group-hover/feature:text-orange-500" />
				</div>
				<div class="relative z-10 mb-2 px-10 text-lg font-bold">
					<div
						class="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-orange-700 dark:bg-neutral-700"
					></div>
					<span
						class="inline-block text-xl text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100"
					>
						{feature.title}
					</span>
				</div>
				<p class="text-md relative z-10 max-w-xs px-10 text-neutral-600 dark:text-neutral-300">
					{feature.description}
				</p>
			</div>
		{/each}
	</div>
</div>
