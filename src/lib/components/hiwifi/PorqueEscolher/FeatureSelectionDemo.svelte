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

<div class="py-16 flex flex-col items-center justify-between w-full bg-gradient-to-b from-black">
	<h1 class="text-3xl uppercase font-inter mb-2">Por que sua empresa precisa da HiWiFi?</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-2 max-w-[60%] mx-auto">
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
