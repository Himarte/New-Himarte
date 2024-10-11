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
	value="PessoaFisica"
	class="flex min-h-full w-full flex-col gap-5 overflow-x-hidden pb-10 pt-5 md:overflow-x-visible"
>
	<Tabs.List class=" flex h-20 gap-5 border-b bg-transparent ">
		<Tabs.Trigger
			value="PessoaFisica"
			class="flex h-20 flex-col gap-1 data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:border-orange-500  "
			><UsersRound size={30} />
			Pessoa Fisica</Tabs.Trigger
		>
		<Tabs.Trigger
			value="CNPJ"
			class="flex h-20 flex-col gap-1 data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:border-orange-500  "
			><Building2 size={30} />
			CNPJ</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="PessoaFisica"
		><CardsCPF1 {blipClient} />

		<CardsCPF2 {blipClient} />
		<div class="flex justify-center pt-8">
			<h5 class="w-3/4 font-inter text-sm text-gray-500">
				*Os valores são válidos apenas para pagamentos realizados até a data de vencimento.
			</h5>
		</div>
	</Tabs.Content>
	<Tabs.Content value="CNPJ"><CNPJ {blipClient} /></Tabs.Content>
</Tabs.Root>
