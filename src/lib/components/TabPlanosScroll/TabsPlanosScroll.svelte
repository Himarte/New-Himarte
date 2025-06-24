<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import Building2 from '@lucide/svelte/icons/building-2';
	import CardsCPF1 from '$lib/components/TabPlanos/CPF1/CardsCPF1.svelte';
	import CNPJ from '$lib/components/TabPlanos/CNPJ/CNPJ.svelte';
	import Zap from '@lucide/svelte/icons/zap';
</script>

<Tabs.Root
	value="casa"
	class="flex min-h-full w-full flex-col items-center justify-center gap-5 overflow-x-hidden py-8 md:overflow-x-visible"
>
	<Tabs.List
		class="flex w-full max-w-md items-center justify-center gap-1 border-none bg-transparent px-2 pb-6 sm:gap-2 md:px-0"
	>
		<Tabs.Trigger
			value="casa"
			class="group relative flex flex-1 items-center justify-center gap-2 border-none bg-transparent px-4 py-5   font-medium text-gray-400 transition-colors duration-200 hover:bg-zinc-500/10 hover:text-gray-200 data-[state=active]:bg-zinc-500/10 data-[state=active]:text-orange-400 sm:flex-none sm:px-8"
		>
			<UsersRound size={20} class="hidden sm:block" />
			<span class="text-xs font-semibold sm:text-xl">Para sua Casa</span>
			<!-- Indicador gradiente -->
			<div
				class="absolute -bottom-1 left-1/2 h-0.5 w-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ease-out group-data-[state=active]:w-3/4 group-data-[state=active]:-translate-x-1/2 sm:h-1"
			></div>
		</Tabs.Trigger>

		<Tabs.Trigger
			id="CNPJ"
			value="empresa"
			class="group relative flex flex-1 items-center justify-center gap-2 border-none bg-transparent px-4 py-5 font-medium text-gray-400 transition-colors duration-200 hover:bg-zinc-500/10 hover:text-gray-200 data-[state=active]:bg-zinc-500/10 data-[state=active]:text-orange-400 sm:flex-none sm:px-8"
		>
			<Building2 size={20} class="sm:hidden" />
			<Building2 size={20} class="hidden sm:block" />
			<span class="text-xs font-semibold sm:text-xl">Para sua Empresa</span>
			<!-- Indicador gradiente -->
			<div
				class="absolute -bottom-1 left-1/2 h-0.5 w-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ease-out group-data-[state=active]:w-3/4 group-data-[state=active]:-translate-x-1/2 sm:h-1"
			></div>
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="casa" id="PessoaFisica">
		<div class="flex w-full flex-col items-center justify-center gap-10">
			<div class="mb-10 flex w-full flex-col items-center justify-center gap-2 text-center">
				<p class="font-inter hidden w-2/3 text-zinc-400 md:block">
					Oferecemos internet fibra óptica de alta qualidade, garantindo estabilidade e velocidade
					para todas as suas necessidades. Navegue sem preocupações, assista a filmes e série, jogue
					e faça downloads sem interrupções.
				</p>
			</div>
			<CardsCPF1 />

			<div class="flex w-full items-center justify-center pt-8 text-center">
				<h5 class=" font-inter text-sm text-gray-500">
					*Os valores são válidos apenas para pagamentos realizados até a data de vencimento.
				</h5>
			</div>
			<div class="flex w-full items-center justify-center pt-8 text-center">
				<a
					href="/planos"
					class="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95"
				>
					<!-- Efeito de brilho no hover -->
					<div
						class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 ease-out group-hover:translate-x-[100%]"
					></div>

					<Zap size={20} class="transition-transform duration-300 group-hover:rotate-12" />
					<span class="relative z-10">Ver Mais Planos</span>

					<!-- Borda animada -->
					<div
						class="absolute inset-0 rounded-lg border-2 border-orange-300/0 transition-colors duration-300 group-hover:border-orange-300/50"
					></div>
				</a>
			</div>
		</div>
	</Tabs.Content>
	<Tabs.Content value="empresa" class="flex w-full flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-2 text-center md:w-2/3">
			<p class="font-inter text-zinc-400">
				Trabalhe com mais agilidade e sem interrupções, garantindo a produtividade do seu negócio!
			</p>
			<p class="font-inter hidden text-zinc-400 md:block">
				Nossa internet proporciona a você e sua equipe uma conexão estável e rápida, facilitando a
				comunicação e aumentando a eficiência nos processos digitais do seu dia a dia.
			</p>
		</div>
		<CNPJ />
	</Tabs.Content>
</Tabs.Root>
