<script>
	import SimpleGrid from '$lib/components/hiwifi/PorqueEscolher/SimpleGrid.svelte'; // Scroll down to see the SimpleGrid component
	const grid = [
		{
			title: 'Cobertura Wi-Fi Confiável e Consistente',
			description:
				'Garanta conectividade contínua em todo o seu ambiente com nossas soluções avançadas de Wi-Fi que eliminam zonas mortas e interrupções.'
		},
		{
			title: 'Proteção Robusta contra Ciberataques',
			description:
				'Proteja sua rede contra ameaças cibernéticas com nossas medidas de segurança abrangentes, mantendo seus dados sempre seguros.'
		},
		{
			title: 'Suporte Técnico Eficiente e Rápido',
			description:
				'Conte com nossa equipe de suporte técnico ágil e eficaz, pronta para resolver problemas rapidamente e minimizar o tempo de inatividade.'
		},
		{
			title: 'Desempenho de Rede Otimizado',
			description:
				'Melhore a produtividade com nossas soluções de rede de alto desempenho que garantem conectividade rápida e confiável para todas as necessidades do seu negócio.'
		},
		{
			title: 'Facilidade no Monitoramento e Gestão de TI',
			description:
				'Monitore e gerencie facilmente sua infraestrutura de TI com nossas ferramentas intuitivas, permitindo maior controle e eficiência.'
		},
		{
			title: 'Soluções Personalizadas para Suas Necessidades',
			description:
				'Oferecemos soluções sob medida que se adaptam aos desafios específicos do seu negócio, promovendo crescimento e sucesso contínuos.'
		}
	];
</script>

<div class=" pb-14 flex flex-col items-center justify-between h-full w-full bg-black" id="porque">
	<h1 class="text-3xl uppercase font-inter mb-5 text-center">
		<span class="underline underline-offset-4 decoration-1 decoration-orange-500">Por que</span>
		escolher a <span class="text-orange-500 font-bold">HiWiFi</span>
	</h1>
	<h3 class="text-lg mb-8 text-gray-400 text-center md:px-0 px-3">
		<span class="text-orange-500">"</span>Conecte-se com desempenho revolucionário e segurança
		incomparável.<span class="text-orange-500">"</span>
	</h3>

	<div
		class="grid grid-cols-1 w-full px-5 md:px-0 sm:grid-cols-2 gap-5 md:grid-cols-3 md:w-2/3 mx-auto"
	>
		{#each grid as feature}
			<div
				class="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
			>
				<SimpleGrid size={20} />
				<p class="text-base font-bold text-neutral-800 dark:text-white relative z-20">
					{feature.title}
				</p>
				<p class="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
					{feature.description}
				</p>
			</div>
		{/each}
	</div>
</div>
