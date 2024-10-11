<script lang="ts">
	import hiwifiLogo from '$lib/img/logos/hiwifi-logo.svg';
	import internetImg from '$lib/img/extras/intenetimg.png';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="flex w-full flex-col pt-28">
	<div class="flex w-full items-center justify-center gap-40">
		<div class="flex flex-col items-start gap-5">
			<img class="w-40" src={hiwifiLogo} alt="" />
			<h1 class="font-inter text-5xl font-bold text-white">
				Soluções completas <br /> em infraestrutura de redes
			</h1>
			<p class="text-sm text-gray-400">
				Oferecemos soluções completas em redes e segurança. <br />Com a HiWiFi, tenha suporte
				contínuo e infraestrutura personalizada.
			</p>
		</div>
		<img src={internetImg} alt="" />
	</div>
	<div class="flex flex-col gap-10 py-10">
		<h1 class="font-inter text-2xl font-bold text-white">Por que sua empresa precisa da HiWiFi?</h1>
		<div class="flex flex-col gap-3">
			<div class="flex gap-2">
				<ArrowRight />
				<p>Cobertura Wi-Fi inconsistente e com falhas.</p>
			</div>
			<div class="flex gap-2">
				<ArrowRight />
				<p>Falta de segurança contra ciberataques.</p>
			</div>
			<div class="flex gap-2">
				<ArrowRight />
				<p>Suporte técnico demorado e ineficiente.</p>
			</div>
			<div class="flex gap-2">
				<ArrowRight />
				<p>Desempenho de rede que afeta a produtividade.</p>
			</div>
			<div class="flex gap-2">
				<ArrowRight />
				<p>Dificuldade em monitorar e gerenciar a infraestrutura de TI.</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-5">
		<h1 class="font-inter text-2xl font-bold text-white">
			Como sua empresa se beneficia com a HiWiFi
		</h1>
		<div class="flex flex-col gap-5">
			<div class="flex gap-2">
				<div class="flex flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<h1 class="text-lg font-semibold">Conectividade</h1>
					</div>
					<p>Garantimos uma conexão Wi-Fi estável e sem falhas em toda a sua empresa.</p>
				</div>
				<div class="flex flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<h1 class="text-lg font-semibold">Segurança</h1>
					</div>
					<p>Protegemos sua rede com soluções avançadas, bloqueando ameaças cibernéticas.</p>
				</div>
				<div class="flex flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<h1 class="text-lg font-semibold">Eficiência</h1>
					</div>
					<p>Otimizamos o desempenho da rede para aumentar a produtividade e fluidez.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div class="flex flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<h1 class="text-lg font-semibold">Suporte</h1>
					</div>
					<p>Oferecemos suporte técnico ágil e contínuo, resolvendo problemas rapidamente.</p>
				</div>
				<div class="flex flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<h1 class="text-lg font-semibold">Monitoramento</h1>
					</div>
					<p>Monitoramos sua rede em tempo real, prevenindo falhas e interrupções.</p>
				</div>
				<div class="flex flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
					<div class="flex gap-2">
						<h1 class="text-lg font-semibold">Personalização</h1>
					</div>
					<p>
						Desenvolvemos soluções de rede sob medida para atender às necessidades da sua empresa.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
