<script lang="ts">
	import { Steps } from 'svelte-steps';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';

	let currentStep = 0;
	let steps = [{ text: 'Cadastro' }, { text: 'Endereço' }, { text: 'Plano' }];

	function handleStepChange(event: CustomEvent) {
		console.log(event.detail);
		currentStep = event.detail.currentStep;
	}

	function nextStep() {
		if (currentStep < steps.length - 1) {
			currentStep += 1;
		}
	}

	function previousStep() {
		if (currentStep > 0) {
			currentStep -= 1;
		}
	}
</script>

<div class=" px-4 h-screen flex flex-col items-center">
	<div class="w-3/4">
		<Steps
			{steps}
			primary="white"
			light="black"
			on:stepChange={handleStepChange}
			current={currentStep}
		/>

		<div class="flex flex-col w-3/4 p-4">
			{#if currentStep === 0}
				<div class="flex flex-col gap-5 w-full">
					<div class="flex w-full gap-5">
						<div class="flex flex-col w-full gap-2">
							<Label for="nome" class="text-gray-300 font-semibold">Nome</Label>
							<Input id="nome" type="text" />
						</div>
						<div class="flex flex-col w-full gap-2">
							<Label for="nome" class="text-gray-300 font-semibold">Sobrenome</Label>
							<Input id="nome" type="text" />
						</div>
					</div>
					<div class="flex w-full gap-5">
						<div class="flex flex-col w-full gap-2">
							<Label for="nome" class="text-gray-300 font-semibold">Data de nascimento</Label>
							<Input id="nome" type="text" />
						</div>
						<div class="flex flex-col w-full gap-2">
							<Label for="nome" class="text-gray-300 font-semibold">Sobrenome</Label>
							<Input id="nome" type="text" />
						</div>
					</div>
				</div>
			{:else if currentStep === 1}
				<div class="flex flex-col space-y-4 max-w-md mx-auto">
					<div class="flex flex-col">
						<Label for="rua" class="text-white">Rua</Label>
						<Input id="rua" type="text" />
					</div>
				</div>
			{:else if currentStep === 2}
				<div class="flex flex-col space-y-4 max-w-md mx-auto">
					<div class="flex flex-col">
						<Label for="plano" class="text-white">Plano</Label>
						<Input id="plano" type="text" />
					</div>
				</div>
			{/if}

			<div class="flex justify-between max-w-md mx-auto mt-4">
				{#if currentStep > 0}
					<Button on:click={previousStep} variant="outline">Anterior</Button>
				{/if}
				{#if currentStep < steps.length - 1}
					<Button on:click={nextStep} class="ml-auto">Próximo</Button>
				{/if}
			</div>
		</div>
	</div>
</div>
