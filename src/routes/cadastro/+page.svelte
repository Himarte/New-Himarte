<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let currentStep = $state(1);

	function nextStep() {
		if (currentStep < 3) {
			currentStep++;
		}
	}

	function previousStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}
</script>

<div class="flex flex-col pt-20 w-full h-full">
	<div class="flex justify-center items-center gap-5">
		<div class="flex gap-1 font-semibold {currentStep === 1 ? 'text-[#F97316]' : ''}">
			<p>1</p>
			<p>Cadastro Pessoal</p>
		</div>
		<Separator class="w-20 border-[0.02rem]" />
		<div class="flex gap-1 {currentStep === 2 ? 'text-[#F97316]' : ''}">
			<p>2</p>
			<p>Enderço</p>
		</div>
		<Separator class="w-20 border-[0.02rem]" />
		<div class="flex gap-1 {currentStep === 3 ? 'text-[#F97316]' : ''}">
			<p>3</p>
			<p>Escolha o Plano</p>
		</div>
	</div>

	<div class=" p-5">
		{#if currentStep === 1}
			<div class="w-full flex flex-col gap-8 h-full">
				<div class="flex gap-8 w-1/2">
					<div class="flex flex-col gap-2 w-1/2">
						<Label for="name">Nome*</Label>
						<Input type="text" id="name" />
					</div>
					<div class="flex flex-col gap-2 w-1/2">
						<Label for="name">Sobrenome*</Label>
						<Input type="text" id="lastname" />
					</div>
				</div>
				<div class="flex w-1/2 gap-8">
					<div class="flex flex-col gap-2 w-1/2">
						<Label for="gender">Gênero*</Label>
						<Select.Root type="single">
							<Select.Trigger>Selecione</Select.Trigger>
							<Select.Content>
								<Select.Item value="light">Homem</Select.Item>
								<Select.Item value="dark">Mulher</Select.Item>
								<Select.Item value="system">Outro</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
					<div class="flex flex-col gap-2 w-1/2">
						<Label>Data de nascimento</Label>
						<Input type="date" id="date" />
					</div>
				</div>
				<div class="flex gap-8 w-1/2">
					<div class="flex flex-col gap-2 w-1/2">
						<Label for="tel">Telefone*</Label>
						<Input placeholder="(51) 999999999" type="tel" id="tel" />
					</div>
					<div class="flex flex-col gap-2 w-1/2">
						<Label for="email">E-mail*</Label>
						<Input placeholder="luke@himarte.com" type="email" id="email" />
					</div>
				</div>
			</div>
		{:else if currentStep === 2}
			<div>
				<!-- Form 2 aqui -->
			</div>
		{:else}
			<div>
				<!-- Form 3 aqui -->
			</div>
		{/if}

		<div class="flex justify-between mt-4">
			<button class="px-4 py-2" onclick={previousStep} disabled={currentStep === 1}>
				Anterior
			</button>
			<button class="px-4 py-2" onclick={nextStep} disabled={currentStep === 3}> Próximo </button>
		</div>
	</div>
</div>
