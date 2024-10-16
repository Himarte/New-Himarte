<script>
	import {
		Activity,
		RadioTower,
		ShieldCheck,
		Headset,
		SquareActivity,
		PencilRuler
	} from 'lucide-svelte';
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

<div class="flex w-full bg-black flex-col items-center justify-between px-4 py-5 md:py-10">
	<h1 class="text-3xl mx-10 md:mx-0 uppercase font-inter mb-5 md:mb-2 text-center">
		Como <span class="underline underline-offset-4 decoration-1 decoration-orange-500"
			>sua empresa</span
		>
		pode evoluir com a
		<span class="text-orange-500 font-bold">HiWiFi</span>
	</h1>
	<h3 class="text-lg text-gray-400 text-center">
		<span class="text-orange-500">"</span>Descubra como transformar a conectividade com a HiWiFi<span
			class="text-orange-500">,</span
		>
		elevando a eficiência e otimizando a experiência digital<span class="text-orange-500">"</span>
	</h3>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto bg-black md:w-2/3"
	>
		{#each features as feature, index}
			<div
				class={cn(
					'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
					(index === 0 || index === 3) && 'lg:border-l dark:border-neutral-800',
					index < 3 && 'md:border-b dark:border-neutral-800'
				)}
			>
				{#if index < 3}
					<div
						class="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
					></div>
				{/if}
				{#if index >= 3}
					<div
						class="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
					></div>
				{/if}
				<div class="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
					<feature.icon class="group-hover/feature:text-orange-500 transition duration-200" />
				</div>
				<div class="text-lg font-bold mb-2 relative z-10 px-10">
					<div
						class="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-700 transition-all duration-200 origin-center"
					></div>
					<span
						class="text-xl group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
					>
						{feature.title}
					</span>
				</div>
				<p class="text-md text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
					{feature.description}
				</p>
			</div>
		{/each}
	</div>
</div>
