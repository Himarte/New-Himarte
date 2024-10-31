<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import LogoCompleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import Phone from 'lucide-svelte/icons/phone';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import PhoneCall from 'lucide-svelte/icons/phone-call';
	import Rss from 'lucide-svelte/icons/rss';
	import SquareSquare from 'lucide-svelte/icons/square-square';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	import Clock_8 from 'lucide-svelte/icons/clock-8';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	// Variáveis para controlar o estado de abertura de cada Popover
	let popoverOpen1 = false; // Para "Nossos Serviços"
</script>

<nav
	class="fixed z-50 flex backdrop-blur-md bg-transparent h-[4rem] w-full items-center justify-center gap-5 bg-[#0f1829] px-[2%] xl:px-[5%] 2xl:px-[10%]"
>
	<a href="/" class="flex w-1/4 items-center justify-start gap-5">
		<img src={LogoCompleto} alt="" class="h-10 w-auto" />
	</a>
	<ul class="flex w-2/4 items-center justify-center gap-3">
		<Button
			variant="link"
			href="/"
			class="font-poppins text-lg font-bold hover:text-orange-500 hover:no-underline"
		>
			Início
		</Button>
		<Button
			variant="link"
			href="/sobre"
			class="font-poppins text-lg font-bold hover:text-orange-500 hover:no-underline"
		>
			A Himarte
		</Button>

		<!-- Popover "Nossos Serviços" -->
		<Popover.Root bind:open={popoverOpen1}>
			<Popover.Trigger>
				<span
					class="font-poppins py-2 px-3 rounded-md flex items-center gap-1 text-lg font-bold hover:no-underline hover:text-orange-500"
				>
					Serviços <ChevronDown size={20} />
				</span>
			</Popover.Trigger>
			<Popover.Content
				align="end"
				class="bg-[#0f1829] bg-opacity-45 backdrop-blur flex flex-col border-1 py-3 w-60 rounded shadow-xl justify-center items-start"
			>
				<Button
					variant="link"
					href="/planos"
					onclick={() => (popoverOpen1 = false)}
					class="font-poppins text-lg font-bold flex gap-2 items-center justify-center hover:text-orange-500 hover:no-underline"
				>
					<SquareSquare color="#f97316" />
					Nossos Planos
				</Button>
				<Button
					variant="link"
					href="/hiwifi"
					onclick={() => (popoverOpen1 = false)}
					class="font-poppins text-lg font-bold flex gap-2 items-center justify-center hover:text-orange-500 hover:no-underline"
				>
					<Rss color="#f97316" />
					HiWifi
				</Button>
			</Popover.Content>
		</Popover.Root>

		<Button
			variant="link"
			href="/filiais"
			class="font-poppins text-lg font-bold flex gap-2 items-center justify-center hover:text-orange-500 hover:no-underline"
		>
			Filiais
		</Button>
		<Button
			variant="link"
			href="/trabalhe-conosco"
			class="font-poppins text-lg font-bold flex gap-2 items-center justify-center hover:text-orange-500 hover:no-underline"
		>
			Trabalhe Conosco
		</Button>
	</ul>
	<div class="flex w-1/4 items-center justify-end gap-8">
		<Button
			href="https://himarte.portal.7az.com.br/login"
			target="_blank"
			variant="outline"
			class="h-10 gap-3 border border-orange-500 bg-[#f97316]/15 font-poppins text-lg font-bold hover:bg-background hover:text-orange-500"
		>
			<UsersRound color="white" />
			Área do Cliente
		</Button>

		<!-- Popover do Telefone -->
		<Popover.Root>
			<Popover.Trigger
				class="flex h-10 w-10 items-center justify-center rounded-3xl border border-orange-500 bg-[#f97316]/15 hover:bg-background hover:text-orange-400"
			>
				<Phone />
			</Popover.Trigger>
			<Popover.Content align="end" class="ml-36 mt-3 border-2 bg-[#0f1829]" alignOffset={8}>
				<div class="flex flex-col items-center justify-center gap-2 font-poppins">
					<div class="flex gap-2 font-bold">
						<span class="absolute left-8"><Clock_8 /></span> Atendimento Suporte
					</div>
					<div class="flex flex-col items-center justify-center">
						<p class="font-bold">Segunda a Sábado</p>
						<p>08:30 - 22:00</p>
					</div>
					<div class="flex flex-col items-center justify-center">
						<p class="font-bold">Domingo</p>
						<p>08:00 - 19:00</p>
					</div>
					<div class="flex flex-col items-center justify-center">
						<p class="font-bold">Feriados</p>
						<p>13:00 - 17:00</p>
					</div>
				</div>

				<Separator class="my-3 bg-gray-600" />

				<div class="flex items-center justify-center font-poppins">
					<PhoneCall />
					<Button
						href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%21+Tudo+bem%3F&type=phone_number&app_absent=0"
						variant="ghost"
						class="px-2 py-0 text-[1rem] hover:bg-transparent hover:text-[#f97316]"
					>
						(51) 3056-8251
					</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
</nav>
