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
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-10 pt-28">
	<!-- titulo -->
	<div class="flex flex-col text-center">
		<h1 class="fontSpace text-2xl font-bold text-[#f97316] md:text-3xl">Por que escolher a</h1>
		<h1 class="fontSpace text-3xl font-bold text-[#f97316] md:text-5xl">Himarte?</h1>
	</div>
	<!-- vantagens -->
	<div class="flex w-full flex-col items-center justify-center gap-8 font-inter">
		<div class="flex flex-col items-center gap-20 md:w-[60%] md:flex-row">
			<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
				<Zap color={'#f97316'} size={28} />
				<h1 class="text-lg font-semibold">100% fibra ótica</h1>
				<p>A fibra ótica permite que você utilize a internet de forma mais rápida e estável.</p>
			</div>
			<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
				<Gauge color={'#f97316'} size={28} />
				<h1 class="text-lg font-semibold">Rápida conexão</h1>
				<p>A velocidade é uma das principais vantagens dos nossos planos</p>
			</div>
			<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
				<ListChecks color={'#f97316'} size={28} />
				<h1 class="text-lg font-semibold">Planos feitos para você</h1>
				<p>Possuímos planos pensados para nos encaixarmos com a sua necessidade</p>
			</div>
		</div>
		<div class="flex flex-col items-center gap-20 md:w-[60%] md:flex-row">
			<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
				<Wrench color={'#f97316'} size={28} />
				<h1 class="text-lg font-semibold">Instalação rápida</h1>
				<p>Instalação rápida e segura com mão de obra própria</p>
			</div>
			<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
				<Wifi color={'#f97316'} size={28} />
				<h1 class="text-lg font-semibold">Estabilidade de conexão</h1>
				<p>Além da velocidade, a fibra óptica proporciona muito mais estabilidade</p>
			</div>
			<div class="flex w-3/4 flex-col gap-2 md:w-1/2">
				<Headphones color={'#f97316'} size={28} />
				<h1 class="text-lg font-semibold">Atendimento de qualidade</h1>
				<p>Atendimento personalizado com suporte especializado</p>
			</div>
		</div>
	</div>

	<!-- numeros e compromisso -->
	<div class="flex flex-col items-center justify-center py-14 font-inter">
		<!-- contagem numeros -->
		<div
			class="mb-16 flex flex-col items-center justify-center gap-10 md:mb-0 md:w-[60%] md:flex-row"
		>
			<div class="flex flex-col items-center justify-center gap-2 md:w-1/5">
				<h1 class="text-center font-inter text-3xl text-[#f97316] md:text-lg">Residências</h1>
				<p class="  text-4xl font-bold">
					+
					<NumberHouse value={5000} />
				</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-2 md:w-1/5">
				<h1 class="text-center font-inter text-3xl text-[#f97316] md:text-lg">Empresas</h1>
				<p class=" text-4xl font-bold">
					+
					<NumberEmp value={170} />
				</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-2 md:w-1/5">
				<h1 class="text-center font-inter text-3xl text-[#f97316] md:text-lg">Condomínios</h1>
				<p class=" text-4xl font-bold">
					+
					<NumberCond value={20} />
				</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-2 md:w-1/5">
				<h1 class="text-center font-inter text-3xl text-[#f97316] md:text-lg">Usuários</h1>
				<p class=" text-4xl font-bold">
					+
					<NumberUser value={9800} />
				</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-2 md:w-1/5">
				<h1 class="text-center font-inter text-3xl text-[#f97316] md:text-lg">Colaboradores</h1>
				<p class=" text-4xl font-bold">
					+
					<NumberColab value={50} />
				</p>
			</div>
		</div>

		<Separator class="my-10 hidden md:flex  md:w-[60%] " />
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
		<!-- valores e missao -->
		<div
			class="flex h-full w-3/4 flex-col items-center justify-center gap-10 pt-10 md:w-[60%] md:flex-row"
		>
			<div class="flex h-full min-h-[15rem] flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
				<div class="flex gap-2">
					<Zap color={'#f97316'} />
					<h1 class="text-lg font-semibold">Missão</h1>
				</div>
				<p>
					Fornecer conexões de internet rápidas, estáveis e confiáveis, capacitando nossos clientes
					a alcançarem seu pleno potencial digital.
				</p>
			</div>
			<div class="flex h-full min-h-[15rem] flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
				<div class="flex gap-2">
					<Target color={'#f97316'} />
					<h1 class="text-lg font-semibold">Visão</h1>
				</div>
				<p>
					Ser reconhecida como a provedora de internet líder em inovação, qualidade e satisfação do
					cliente em nossa região de atuação.
				</p>
			</div>
			<div class="flex h-full min-h-[15rem] flex-col gap-2 rounded-lg bg-[#0F1829] p-5 md:w-1/3">
				<div class="flex items-center gap-2">
					<UsersRound color={'#f97316'} />
					<h1 class="text-lg font-semibold">Valores</h1>
				</div>
				<p class="flex items-center gap-2">
					<MoveRight size={15} color={'#f97316'} />
					Excelência no atendimento
				</p>
				<p class="flex items-center gap-2">
					<MoveRight size={15} color={'#f97316'} />
					Inovação constante
				</p>
				<p class="flex items-center gap-2">
					<MoveRight size={15} color={'#f97316'} />
					Transparência e confiabilidade
				</p>
				<p class="flex items-center gap-2">
					<MoveRight size={15} color={'#f97316'} />
					Compromisso com a comunidade
				</p>
			</div>
		</div>
	</div>
</div>
