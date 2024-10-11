<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';

	import LogoCompleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import Phone from 'lucide-svelte/icons/phone';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import { PhoneCall } from 'lucide-svelte';
	import Clock_8 from 'lucide-svelte/icons/clock-8';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<nav
	class="fixed z-50 flex h-[4rem] w-full items-center justify-center gap-5 bg-[#0f1829] px-[2%] xl:px-[5%] 2xl:px-[10%]"
>
	<a href="/" class="flex w-1/3 items-center justify-start gap-5">
		<img src={LogoCompleto} alt="" class="h-10 w-auto" />
	</a>
	<ul class=" flex w-1/3 items-center justify-start gap-5">
		<Button
			variant="link"
			href="/"
			class=" font-inter text-xl font-bold  hover:text-orange-500 hover:no-underline">Home</Button
		>
		<Button
			variant="link"
			href="/sobre"
			class="font-inter text-xl font-bold hover:text-orange-500 hover:no-underline">Sobre</Button
		>
		<Button
			variant="link"
			href="/trabalhe-conosco"
			class="font-inter text-xl font-bold hover:text-orange-500 hover:no-underline"
			>Trabalhe Conosco</Button
		>
	</ul>
	<div class="flex w-1/3 items-center justify-end gap-8">
		<Button
			href="https://himarte.portal.7az.com.br/login"
			target="_blank"
			variant="outline"
			class="h-10 gap-3 border border-orange-500 bg-[#f97316]/15 font-inter text-lg font-bold  hover:bg-[#0f1829] hover:text-orange-500 "
			><UsersRound color="white" />
			Area do Cliente</Button
		>

		<Popover.Root>
			<Popover.Trigger
				class="flex h-10 w-10 items-center justify-center rounded-3xl border border-orange-500 bg-[#f97316]/15  hover:bg-[#0f1829] hover:text-orange-400"
			>
				<Phone />
			</Popover.Trigger>
			<Popover.Content align="end" class="ml-36 mt-3 border-2 bg-[#0f1829]" alignOffset={8}>
				<div class="flex flex-col items-center justify-center gap-2 font-inter">
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

				<div class="flex items-center justify-center font-inter">
					<PhoneCall />
					<Button
						href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%21+Tudo+bem%3F&type=phone_number&app_absent=0"
						variant="ghost"
						class="px-2 py-0 text-[1rem] hover:bg-transparent hover:text-[#f97316]"
						>(51) 3056-8251</Button
					>
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
</nav>
