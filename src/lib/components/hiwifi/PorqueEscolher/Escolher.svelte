<script>
	import { ArrowRight } from 'lucide-svelte';

	const topicos = [
		{
			icon: ArrowRight,
			motivo: 'Cobertura Wi-Fi inconsistente e com falhas.'
		},
		{
			icon: ArrowRight,
			motivo: 'Falta de segurança contra ciberataques.'
		},
		{
			icon: ArrowRight,
			motivo: 'Suporte técnico demorado e ineficiente.'
		}
	];
	const topicos2 = [
		{
			icon: ArrowRight,
			motivo: 'Desempenho de rede que afeta a produtividade.'
		},
		{
			icon: ArrowRight,
			motivo: 'Dificuldade em monitorar e gerenciar a infraestrutura de TI.'
		},
		{
			icon: ArrowRight,
			motivo: 'Criar mais um motivo'
		}
	];
</script>

<div class="flex flex-col gap-10 py-10 justify-center items-center">
	<h1 class="font-inter text-2xl font-bold text-white">Por que sua empresa precisa da HiWiFi?</h1>
	<div class="flex flex-col">
		<div class="flex">
			{#each topicos as topico}
				<div class="px-5 py-3 bg-gray-700 rounded shadow-md">
					<topico.icon />
					<span class="text-white">{topico.motivo}</span>
				</div>
			{/each}
		</div>
		<div class="flex">
			{#each topicos2 as topico}
				<div>
					<topico.icon />
					<span class="text-white">{topico.motivo}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
