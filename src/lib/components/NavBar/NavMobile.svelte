<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import Menu from '@lucide/svelte/icons/menu';
	import Home from '@lucide/svelte/icons/home';
	import Info from '@lucide/svelte/icons/info';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Wifi from '@lucide/svelte/icons/wifi';
	import SquareSquare from '@lucide/svelte/icons/square-square';

	import LogoCompleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import Phone from '@lucide/svelte/icons/phone';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import Facebook from '@lucide/svelte/icons/facebook';
	import Instagram from '@lucide/svelte/icons/instagram';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Clock_8 from '@lucide/svelte/icons/clock-8';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Sheet from '$lib/components/ui/sheet';

	let open = false;

	const navItems = [
		{ href: '/', label: 'Início', icon: Home },
		{ href: '/sobre', label: 'A Himarte', icon: Info },
		{ href: '/filiais', label: 'Filiais', icon: MapPin },
		{ href: '/trabalhe-conosco', label: 'Trabalhe Conosco', icon: Briefcase }
	];

	const serviceItems = [
		{ href: '/planos', label: 'Nossos Planos', icon: SquareSquare },
		{ href: '/hiwifi', label: 'HiWifi', icon: Wifi }
	];

	const socialLinks = [
		{
			href: 'https://www.facebook.com/himarte.net/',
			icon: Facebook,
			label: 'Facebook',
			color: 'hover:text-blue-500'
		},
		{
			href: 'https://www.instagram.com/himarte_net/',
			icon: Instagram,
			label: 'Instagram',
			color: 'hover:text-pink-500'
		},
		{
			href: 'https://www.linkedin.com/company/himartenet/',
			icon: Linkedin,
			label: 'LinkedIn',
			color: 'hover:text-blue-600'
		}
	];
</script>

<nav
	class="bg-background/90 border-border/50 fixed z-50 flex h-16 w-full items-center justify-between border-b px-[5%] backdrop-blur-md"
>
	<Sheet.Root bind:open>
		<Sheet.Trigger
			class="text-foreground hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50"
		>
			<Menu size={24} />
		</Sheet.Trigger>

		<Sheet.Content
			side="left"
			class="bg-background/90 flex w-80 flex-col p-0 backdrop-blur-md sm:max-w-sm"
		>
			<!-- Header com Logo -->
			<Sheet.Header class="border-border/50 border-b px-6 py-4">
				<Sheet.Title class="flex items-center justify-start">
					<img src={LogoCompleto} alt="Himarte Net" class="h-12 w-auto" />
				</Sheet.Title>
			</Sheet.Header>

			<!-- Navegação Principal -->
			<div class="flex-1 px-6 py-6">
				<div class="space-y-1">
					{#each navItems as item}
						<Button
							variant="ghost"
							href={item.href}
							onclick={() => (open = false)}
							class="hover:bg-accent hover:text-accent-foreground group h-12 w-full justify-start gap-3 text-base font-medium transition-all duration-200"
						>
							<svelte:component
								this={item.icon}
								size={20}
								class="text-muted-foreground group-hover:text-foreground transition-colors"
							/>
							{item.label}
						</Button>
					{/each}
				</div>

				<Separator class="my-6" />

				<!-- Seção Serviços -->
				<div class="space-y-1">
					<h3 class="text-muted-foreground mb-2 px-3 text-sm font-semibold">Serviços</h3>
					{#each serviceItems as item}
						<Button
							variant="ghost"
							href={item.href}
							onclick={() => (open = false)}
							class="hover:bg-accent hover:text-accent-foreground group h-12 w-full justify-start gap-3 text-base font-medium transition-all duration-200"
						>
							<svelte:component
								this={item.icon}
								size={20}
								class="text-orange-500 transition-transform duration-200 group-hover:scale-110"
							/>
							{item.label}
						</Button>
					{/each}
				</div>

				<Separator class="my-6" />

				<!-- Área do Cliente -->
				<Button
					href="https://himarte.portal.7az.com.br/login"
					target="_blank"
					variant="outline"
					onclick={() => (open = false)}
					class="group h-12 w-full gap-3 border border-orange-500/50 bg-orange-50 font-semibold text-orange-700 transition-all duration-300 hover:bg-orange-500 hover:text-white dark:bg-orange-950/30 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white"
				>
					<UsersRound size={20} class="transition-transform duration-200 group-hover:scale-110" />
					Área do Cliente
				</Button>
			</div>

			<!-- Footer com Redes Sociais -->
			<div class="border-border/50 bg-muted/30 border-t px-6 py-4">
				<p class="text-muted-foreground mb-3 text-center text-sm font-medium">
					Siga-nos nas redes sociais
				</p>
				<div class="flex items-center justify-center gap-2">
					{#each socialLinks as social}
						<Button
							variant="ghost"
							size="icon"
							class="hover:bg-background h-10 w-10 rounded-full {social.color} transition-all duration-200 hover:scale-110"
							target="_blank"
							href={social.href}
							aria-label={social.label}
						>
							<svelte:component this={social.icon} size={20} strokeWidth={1.5} />
						</Button>
					{/each}
				</div>
			</div>
		</Sheet.Content>
	</Sheet.Root>

	<!-- Logo Central -->
	<a href="/" class="flex h-16 w-full items-center justify-center">
		<img src={LogoCompleto} alt="Logo Himarte Net" class="h-10 w-auto" />
	</a>

	<!-- Popover de Contato -->
	<div class="flex items-center justify-end">
		<Popover.Root>
			<Popover.Trigger class="group inline-flex h-10 w-10 items-center justify-center">
				<Phone size={18} class="transition-transform duration-200 group-hover:scale-110" />
			</Popover.Trigger>

			<Popover.Content
				align="end"
				class="bg-background/90 mt-2 w-72 border-2 shadow-lg backdrop-blur-md"
			>
				<div class="space-y-4">
					<!-- Header do Popover -->
					<div class="border-border/50 flex items-center gap-2 border-b pb-2">
						<Clock_8 size={18} class="text-orange-500" />
						<span class="text-foreground font-semibold">Horário de Atendimento</span>
					</div>

					<!-- Horários -->
					<div class="space-y-3 text-sm">
						<div class="flex items-center justify-between">
							<span class="text-foreground font-medium">Segunda a Sábado</span>
							<span class="text-muted-foreground">08:30 - 22:00</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-foreground font-medium">Domingo</span>
							<span class="text-muted-foreground">08:00 - 19:00</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-foreground font-medium">Feriados</span>
							<span class="text-muted-foreground">13:00 - 17:00</span>
						</div>
					</div>

					<Separator />

					<!-- Botão de Contato - Agora usando WhatsApp como no Desktop -->
					<Button
						href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%21+Tudo+bem%3F&type=phone_number&app_absent=0"
						target="_blank"
						variant="outline"
						class="group w-full gap-2 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
					>
						<PhoneCall size={18} class="transition-transform duration-200 group-hover:scale-110" />
						(51) 3056-8251
					</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
</nav>
