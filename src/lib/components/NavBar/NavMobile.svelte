<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import Menu from 'lucide-svelte/icons/menu';

	import LogoCompleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import Phone from 'lucide-svelte/icons/phone';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import PhoneCall from 'lucide-svelte/icons/phone-call';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Clock_8 from 'lucide-svelte/icons/clock-8';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
</script>

<nav class="fixed z-50 flex h-16 w-full justify-between bg-[#0f1829] px-[5%]">
	<Sheet.Root>
		<Sheet.Trigger><Menu size={32} /></Sheet.Trigger>
		<Sheet.Content side="left" class="flex flex-col justify-between pb-20  ">
			<Sheet.Header class=" flex w-full items-center">
				<Sheet.Title><img src={LogoCompleto} alt="" class="h-14 w-auto" /></Sheet.Title>
			</Sheet.Header>
			<div class="flex flex-col gap-5">
				<Button
					variant="link"
					href="/"
					class=" font-inter text-2xl font-bold  hover:text-orange-500 hover:no-underline"
					>Home</Button
				>
				<Button
					variant="link"
					href="/sobre"
					class="font-inter text-2xl font-bold hover:text-orange-500 hover:no-underline"
					>Sobre</Button
				>
				<Button
					variant="link"
					href="/filiais"
					class="font-inter text-2xl font-bold hover:text-orange-500 hover:no-underline"
					>Nossas Filiais</Button
				>
				<Button
					variant="link"
					href="/trabalhe-conosco"
					class="font-inter text-2xl font-bold hover:text-orange-500 hover:no-underline"
					>Trabalhe Conosco</Button
				>
				<Button
					href="https://himarte.portal.7az.com.br/login"
					target="_blank"
					variant="outline"
					class="mt-20 h-10 gap-3 border border-orange-500 bg-[#f97316]/15 font-inter text-xl font-bold  hover:bg-[#0f1829] hover:text-orange-500 "
					><UsersRound color="white" />
					Area do Cliente</Button
				>
			</div>

			<div class="flex w-full items-center justify-center">
				<Button
					variant="ghost"
					class="hover:bg-transparent hover:text-[#f97316]"
					target="_blank"
					href="https://www.facebook.com/himarte.net/"
					><Facebook strokeWidth={1.5} size="40" /></Button
				>
				<Button
					variant="ghost"
					class="hover:bg-transparent hover:text-[#f97316]"
					target="_blank"
					href="https://www.instagram.com/himarte_net/"
					><Instagram size="40" strokeWidth={1.5} /></Button
				>
				<Button
					variant="ghost"
					href="https://www.linkedin.com/company/himartenet/"
					class="hover:bg-transparent hover:text-[#f97316]"
					target="_blank"><Linkedin size="40" strokeWidth={1.5} /></Button
				>
			</div>
		</Sheet.Content>
	</Sheet.Root>
	<a href="/" class="flex h-16 w-1/3 items-center">
		<img src={LogoCompleto} alt="Logo Himarte Net" />
	</a>

	<div class=" right-10 flex items-center justify-end gap-8">
		<Popover.Root>
			<Popover.Trigger
				class="flex h-10 w-10 items-center justify-center rounded-3xl border border-orange-500 bg-[#f97316]/15  hover:bg-[#0f1829] hover:text-orange-400"
			>
				<Phone />
			</Popover.Trigger>
			<Popover.Content align="end" class="  mt-3 border-2 bg-[#0f1829]" alignOffset={8}>
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
						href="tel:+555130568251"
						variant="ghost"
						class="px-2 py-0 text-[1rem] hover:bg-transparent hover:text-[#f97316]"
						>(51) 3056-8251</Button
					>
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
</nav>
