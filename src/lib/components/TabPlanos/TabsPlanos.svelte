<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import Building2 from 'lucide-svelte/icons/building-2';
	import CardsCPF1 from '$lib/components/TabPlanos/CPF1/CardsCPF1.svelte';
	import CardsCPF2 from '$lib/components/TabPlanos/CPF2/CardsCPF2.svelte';
	import CNPJ from '$lib/components/TabPlanos/CNPJ/CNPJ.svelte';
	let { blipClient } = $props();
</script>

<Tabs.Root
	value="empresa"
	class="flex min-h-full w-full flex-col gap-5 overflow-x-hidden pb-10 pt-5 md:overflow-x-visible"
>
	<Tabs.List class=" flex h-20 gap-5 border-b bg-transparent ">
		<Tabs.Trigger
			value="casa"
			class="flex h-20 flex-col gap-1 data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:border-orange-500  "
			><UsersRound size={30} />
			Para sua Casa</Tabs.Trigger
		>
		<Tabs.Trigger
			id="CNPJ"
			value="empresa"
			class="flex h-20 flex-col gap-1 data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:border-orange-500  "
			><Building2 size={30} />
			Para sua Empresa</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="casa" id="PessoaFisica">
		<div class="flex flex-col text-center gap-2 items-center justify-center mb-10">
			<p class="w-2/3 text-zinc-400 font-inter">
				Escolha o plano perfeito para você e tenha uma experiência de conexão confiável e rápida!
			</p>
			<p class="w-2/3 text-zinc-400 font-inter">
				Oferecemos internet fibra óptica de alta qualidade, garantindo estabilidade e velocidade
				para todas as suas necessidades. Navegue sem preocupações, assista a filmes e série, jogue e
				faça downloads sem interrupções.
			</p>
		</div>
		<CardsCPF1 {blipClient} />

		<CardsCPF2 {blipClient} />
		<div class="flex justify-center pt-8">
			<h5 class="w-3/4 font-inter text-sm text-gray-500">
				*Os valores são válidos apenas para pagamentos realizados até a data de vencimento.
			</h5>
		</div>
	</Tabs.Content>
	<Tabs.Content value="empresa">
		<div class="flex flex-col text-center gap-2 items-center justify-center">
			<p class="w-2/3 text-zinc-400 font-inter">
				Trabalhe com mais agilidade e sem interrupções, garantindo a produtividade do seu negócio!
			</p>
			<p class="w-2/3 text-zinc-400 font-inter">
				Nossa internet proporciona a você e sua equipe uma conexão estável e rápida, facilitando a
				comunicação e aumentando a eficiência nos processos digitais do seu dia a dia.
			</p>
		</div>
		<CNPJ {blipClient} /></Tabs.Content
	>
</Tabs.Root>
