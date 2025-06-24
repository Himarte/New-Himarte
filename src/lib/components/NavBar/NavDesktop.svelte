<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import LogoCompleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import Phone from '@lucide/svelte/icons/phone';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import Rss from '@lucide/svelte/icons/rss';
	import SquareSquare from '@lucide/svelte/icons/square-square';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Clock_8 from '@lucide/svelte/icons/clock-8';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	// Variáveis para controlar o estado de abertura de cada Popover
	let popoverOpen1 = false; // Para "Nossos Serviços"
	let popoverOpenPhone = false; // Para telefone
</script>

<nav
	class="bg-background/80 border-border/40 fixed z-50 flex h-[4.5rem] w-full items-center justify-between border-b px-[3%] shadow-sm backdrop-blur-xl xl:px-[6%] 2xl:px-[12%]"
>
	<!-- Logo Section -->
	<a
		href="/"
		class="flex items-center justify-start transition-transform duration-300 hover:scale-105"
	>
		<img src={LogoCompleto} alt="Himarte Net Logo" class="h-11 w-auto" />
	</a>

	<!-- Navigation Links -->
	<div class="flex items-center justify-center">
		<nav class="flex items-center gap-1">
			<Button
				variant="ghost"
				href="/"
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-4 py-2 text-[1rem] font-semibold transition-all duration-300"
			>
				<span class="relative">
					Início
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<Button
				variant="ghost"
				href="/sobre"
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-4 py-2 text-[1rem] font-semibold transition-all duration-300"
			>
				<span class="relative">
					A Himarte
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<!-- Dropdown Serviços -->
			<Popover.Root bind:open={popoverOpen1}>
				<Popover.Trigger
					class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-[1rem] font-semibold transition-all duration-300"
				>
					<span class="relative">
						Serviços
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
						></span>
					</span>
					<ChevronDown
						size={16}
						class="transition-transform duration-300 {popoverOpen1 ? 'rotate-180' : 'rotate-0'}"
					/>
				</Popover.Trigger>
				<Popover.Content
					align="start"
					class="border-border/50 bg-background/95 w-64 rounded-xl border p-2 shadow-xl backdrop-blur-xl"
				>
					<div class="flex flex-col gap-1">
						<Button
							variant="ghost"
							href="/planos"
							onclick={() => (popoverOpen1 = false)}
							class="group hover:bg-accent/80 flex h-12 items-center justify-start gap-3 rounded-lg px-3 py-2 text-left transition-all duration-200"
						>
							<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
								<SquareSquare size={16} class="text-orange-500" />
							</div>
							<div class="flex flex-col">
								<span class="text-foreground text-sm font-semibold">Nossos Planos</span>
								<span class="text-muted-foreground text-xs">Confira nossas ofertas</span>
							</div>
						</Button>
						<Button
							variant="ghost"
							href="/hiwifi"
							onclick={() => (popoverOpen1 = false)}
							class="group hover:bg-accent/80 flex h-12 items-center justify-start gap-3 rounded-lg px-3 py-2 text-left transition-all duration-200"
						>
							<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
								<Rss size={16} class="text-orange-500" />
							</div>
							<div class="flex flex-col">
								<span class="text-foreground text-sm font-semibold">HiWifi</span>
								<span class="text-muted-foreground text-xs">Internet para empresas</span>
							</div>
						</Button>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Button
				variant="ghost"
				href="/filiais"
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-4 py-2 text-[1rem] font-semibold transition-all duration-300"
			>
				<span class="relative">
					Filiais
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<Button
				variant="ghost"
				href="/trabalhe-conosco"
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-4 py-2 text-[1rem] font-semibold transition-all duration-300"
			>
				<span class="relative">
					Trabalhe Conosco
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>
		</nav>
	</div>

	<!-- Action Buttons -->
	<div class="flex items-center gap-3">
		<!-- Área do Cliente -->
		<Button
			href="https://himarte.portal.7az.com.br/login"
			target="_blank"
			variant="outline"
			class="group text-foreground h-11 w-44 gap-2.5 rounded-xl border-2 border-orange-500/30 bg-orange-500/5 px-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
		>
			<UsersRound
				size={18}
				class="text-orange-500 transition-transform duration-300 group-hover:scale-110"
			/>
			Área do Cliente
		</Button>

		<!-- Telefone -->
		<Popover.Root bind:open={popoverOpenPhone}>
			<Popover.Trigger
				class="group flex h-11 w-11 items-center justify-center rounded-xl border-2 bg-orange-500/5 transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
			>
				<Phone
					size={18}
					class="text-orange-500 transition-transform duration-300 group-hover:scale-110"
				/>
			</Popover.Trigger>
			<Popover.Content
				align="end"
				class="border-border/50 bg-background/95 mt-2 w-80 rounded-xl border p-4 shadow-xl backdrop-blur-xl"
				alignOffset={8}
			>
				<div class="space-y-4">
					<!-- Header -->
					<div class="flex items-center gap-2.5">
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
							<Clock_8 size={16} class="text-orange-500" />
						</div>
						<h3 class="text-foreground text-sm font-semibold">Horário de Atendimento</h3>
					</div>

					<!-- Horários -->
					<div class="space-y-3 text-sm">
						<div class="bg-accent/30 flex items-center justify-between rounded-lg px-3 py-2">
							<span class="text-foreground font-medium">Segunda a Sábado</span>
							<span class="text-muted-foreground font-mono">08:30 - 22:00</span>
						</div>
						<div class="bg-accent/30 flex items-center justify-between rounded-lg px-3 py-2">
							<span class="text-foreground font-medium">Domingo</span>
							<span class="text-muted-foreground font-mono">08:00 - 17:00</span>
						</div>
						<div class="bg-accent/30 flex items-center justify-between rounded-lg px-3 py-2">
							<span class="text-foreground font-medium">Feriados</span>
							<span class="text-muted-foreground font-mono">13:00 - 17:00</span>
						</div>
					</div>

					<Separator class="bg-border/60" />

					<!-- Botão de Contato -->
					<Button
						href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%21+Tudo+bem%3F&type=phone_number&app_absent=0"
						target="_blank"
						variant="outline"
						onclick={() => (popoverOpenPhone = false)}
						class="group h-12 w-full gap-2.5 rounded-lg border-2 border-green-500/30 bg-green-500/5 font-semibold transition-all duration-300 hover:border-green-500/60 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
					>
						<PhoneCall
							size={18}
							class="text-green-500 transition-transform duration-300 group-hover:scale-110"
						/>
						<span class="font-mono">(51) 3056-8251</span>
					</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
</nav>
