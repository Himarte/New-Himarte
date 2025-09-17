<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import LogoCompleto from '$lib/img/logos/logo-nome-quliadade2.png';
	import Clock_8 from '@lucide/svelte/icons/clock-8';
	import Phone from '@lucide/svelte/icons/phone';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import UsersRound from '@lucide/svelte/icons/users-round';

	// Variáveis para controlar o estado de abertura de cada Popover
	let popoverOpenPhone = false; // Para telefone
</script>

<nav
	class="bg-background/80 border-border/40 fixed z-50 flex h-[4.5rem] w-full items-center justify-between border-b px-3 shadow-sm backdrop-blur-xl sm:px-4 md:px-6 lg:px-8 xl:px-[6%] 2xl:px-[12%]"
>
	<!-- Logo Section -->
	<a
		href={resolve('/')}
		class="flex shrink-0 items-center justify-start transition-transform duration-300 hover:scale-105"
	>
		<img src={LogoCompleto} alt="Himarte Net Logo" class="h-8 w-auto sm:h-10 md:h-11" />
	</a>

	<!-- Navigation Links -->
	<div class="hidden items-center justify-center lg:flex">
		<nav class="flex items-center gap-0.5 xl:gap-1">
			<Button
				variant="ghost"
				href={resolve('/')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
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
				href={resolve('/planos-residenciais')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
			>
				<span class="relative">
					<span class="hidden xl:inline">Planos Residenciais</span>
					<span class="xl:hidden">Residencial</span>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<Button
				variant="ghost"
				href={resolve('/planos-empresariais')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
			>
				<span class="relative">
					<span class="hidden xl:inline">Planos Empresariais</span>
					<span class="xl:hidden">Empresarial</span>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<Button
				variant="ghost"
				href={resolve('/hiwifi')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
			>
				<span class="relative">
					HiWifi
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<Button
				variant="ghost"
				href={resolve('/trabalhe-conosco')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
			>
				<span class="relative">
					<span class="hidden xl:inline">Trabalhe Conosco</span>
					<span class="xl:hidden">Trabalhe</span>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>

			<Button
				variant="ghost"
				href={resolve('/filiais')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
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
				href={resolve('/sobre')}
				class="text-foreground/80 hover:bg-accent/50 hover:text-foreground group relative px-2 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base"
			>
				<span class="relative">
					<span class="hidden xl:inline">A Himarte</span>
					<span class="xl:hidden">Sobre</span>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
					></span>
				</span>
			</Button>
		</nav>
	</div>

	<!-- Action Buttons -->
	<div class="flex shrink-0 items-center gap-2 sm:gap-3">
		<!-- Área do Cliente -->
		<Button
			href="https://himarte.portal.7az.com.br/login"
			target="_blank"
			variant="outline"
			class="group text-foreground h-10 gap-1.5 rounded-md border border-orange-500/30 bg-orange-500/5 px-2 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 sm:h-11 sm:w-44 sm:gap-2.5 sm:px-4 sm:text-sm"
		>
			<UsersRound
				size={16}
				class="text-orange-500 transition-transform duration-300 group-hover:scale-110 sm:size-[18px]"
			/>
			<span class="hidden sm:inline">Área do Cliente</span>
			<span class="sm:hidden">Cliente</span>
		</Button>

		<!-- Telefone -->
		<Popover.Root bind:open={popoverOpenPhone}>
			<Popover.Trigger
				class="group flex h-10 w-10 items-center justify-center rounded-md border bg-orange-500/5 transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 sm:h-11 sm:w-11"
			>
				<Phone
					size={16}
					class="text-orange-500 transition-transform duration-300 group-hover:scale-110 sm:size-[18px]"
				/>
			</Popover.Trigger>
			<Popover.Content
				align="end"
				class="border-border/50 bg-background/95 mt-2 w-72 rounded-md border p-3 shadow-xl backdrop-blur-xl sm:w-80 sm:p-4"
				alignOffset={8}
			>
				<div class="space-y-3 sm:space-y-4">
					<!-- Header -->
					<div class="flex items-center gap-2">
						<div
							class="flex h-7 w-7 items-center justify-center rounded-md bg-orange-500/10 sm:h-8 sm:w-8"
						>
							<Clock_8 size={14} class="text-orange-500 sm:size-4" />
						</div>
						<h3 class="text-foreground text-xs font-semibold sm:text-sm">Horário de Atendimento</h3>
					</div>

					<!-- Horários -->
					<div class="space-y-2 text-xs sm:space-y-3 sm:text-sm">
						<div
							class="bg-accent/30 flex items-center justify-between rounded-md px-2 py-1.5 sm:px-3 sm:py-2"
						>
							<span class="text-foreground font-medium">Segunda a Sábado</span>
							<span class="text-muted-foreground font-mono text-xs sm:text-sm">08:30 - 22:00</span>
						</div>
						<div
							class="bg-accent/30 flex items-center justify-between rounded-md px-2 py-1.5 sm:px-3 sm:py-2"
						>
							<span class="text-foreground font-medium">Domingo</span>
							<span class="text-muted-foreground font-mono text-xs sm:text-sm">08:00 - 17:00</span>
						</div>
						<div
							class="bg-accent/30 flex items-center justify-between rounded-md px-2 py-1.5 sm:px-3 sm:py-2"
						>
							<span class="text-foreground font-medium">Feriados</span>
							<span class="text-muted-foreground font-mono text-xs sm:text-sm">13:00 - 17:00</span>
						</div>
					</div>

					<Separator class="bg-border/60" />

					<!-- Botão de Contato -->
					<Button
						href="https://api.whatsapp.com/send/?phone=555130568251&text=Ola%21+Tudo+bem%3F&type=phone_number&app_absent=0"
						target="_blank"
						variant="outline"
						onclick={() => (popoverOpenPhone = false)}
						class="group h-10 w-full gap-2 rounded-md border-2 border-green-500/30 bg-green-500/5 text-sm font-semibold transition-all duration-300 hover:border-green-500/60 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20 sm:h-12 sm:gap-2.5"
					>
						<PhoneCall
							size={16}
							class="text-green-500 transition-transform duration-300 group-hover:scale-110 sm:size-[18px]"
						/>
						<span class="font-mono text-xs sm:text-sm">(51) 3056-8251</span>
					</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
</nav>
