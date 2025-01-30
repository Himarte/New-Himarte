<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { CheckCircle2 } from 'lucide-svelte';

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

<div class="h-screen flex items-center justify-center">
	<div class="w-[100hv] p-6">
		<div class="flex flex-col w-full h-full gap-10 justify-center items-center">
			<div class="flex flex-col gap-1 items-center">
				<h1 class="font-bold text-4xl">Quase lá! Complete seu cadastro</h1>
				<p class="text-sm text-gray-400">
					Preencha os dados para finalizar e aproveitar seu plano de internet.
				</p>
			</div>
			<div class="flex justify-center items-center gap-10">
				<div
					class="flex gap-1 items-center select-none {currentStep >= 1
						? 'text-[#F97316]'
						: ''} {currentStep === 1 ? 'font-semibold' : ''}"
				>
					{#if currentStep > 1}
						<CheckCircle2 class="w-5 h-5 text-[#F97316]" />
					{:else}
						<p>1</p>
					{/if}
					<p>Cadastro Pessoal</p>
				</div>
				<Separator class="w-32 border-[0.05rem] {currentStep === 2 ? 'bg-[#F97316]' : ''}" />
				<div
					class="flex select-none gap-1 items-center {currentStep >= 2
						? 'text-[#F97316]'
						: ''} {currentStep === 2 ? 'font-semibold' : ''}"
				>
					{#if currentStep > 2}
						<CheckCircle2 class="w-5 h-5 text-[#F97316]" />
					{:else}
						<p>2</p>
					{/if}
					<p>Endereço</p>
				</div>

				<Separator class="w-32 border-[0.02rem]" />
				<div
					class="flex select-none gap-1 items-center {currentStep === 3
						? 'text-[#F97316] font-semibold'
						: ''}"
				>
					<p>3</p>
					<p>Escolha seu plano</p>
				</div>
			</div>

			<div class="w-full p-2">
				<form action="">
					{#if currentStep === 1}
						<div class="w-full flex flex-col gap-8 h-full">
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="name">Nome*</Label>
									<Input type="text" class="focus-visible:ring-[#F97316]" id="name" />
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="name">Sobrenome*</Label>
									<Input class="focus-visible:ring-[#F97316]" type="text" id="lastname" />
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="gender">Gênero*</Label>
									<Select.Root type="single">
										<Select.Trigger class="focus:ring-[#F97316]">Selecione</Select.Trigger>
										<Select.Content>
											<Select.Item value="light">Homem</Select.Item>
											<Select.Item value="dark">Mulher</Select.Item>
											<Select.Item value="system">Outro</Select.Item>
										</Select.Content>
									</Select.Root>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label>Data de nascimento*</Label>
									<Input class="focus-visible:ring-[#F97316]" type="date" id="date" />
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="tel">Telefone*</Label>
									<Input
										class="focus-visible:ring-[#F97316]"
										placeholder="(51) 999999999"
										type="tel"
										id="tel"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="email">E-mail*</Label>
									<Input
										class="focus-visible:ring-[#F97316]"
										placeholder="luke@himarte.com"
										type="email"
										id="email"
									/>
								</div>
							</div>
						</div>
					{:else if currentStep === 2}
						<div class="w-full flex flex-col gap-8 h-full">
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="cep">CEP*</Label>
									<Input
										placeholder="96825-000"
										type="text"
										class="focus-visible:ring-[#F97316]"
										id="cep"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="city">Cidade*</Label>
									<Input
										placeholder="Santa Cruz do Sul"
										class="focus-visible:ring-[#F97316]"
										type="text"
										id="city"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="street">Rua/Avenida*</Label>
									<Input
										placeholder=" Rua Manoel Antônio de Barros"
										class="focus-visible:ring-[#F97316]"
										type="text"
										id="street"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label>Bairro*</Label>
									<Input
										placeholder="Centro"
										class="focus-visible:ring-[#F97316]"
										type="text"
										id="district"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="tel">Estado*</Label>
									<Input
										placeholder="RS"
										class="focus-visible:ring-[#F97316]"
										type="text"
										id="date"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="email">Número*</Label>
									<Input
										placeholder="290"
										class="focus-visible:ring-[#F97316]"
										type="text"
										id="date"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="tel">Complemento*</Label>
									<Input class="focus-visible:ring-[#F97316]" type="text" id="date" />
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="email">Ponto de referência (opcional)</Label>
									<Input
										placeholder="Himarte"
										class="focus-visible:ring-[#F97316]"
										type="text"
										id="date"
									/>
								</div>
							</div>
						</div>
					{:else}
						<div class="w-full flex flex-col gap-8 h-full">
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="name">Selecione o plano*</Label>
									<Select.Root type="single">
										<Select.Trigger class="focus:ring-[#F97316]">Selecione</Select.Trigger>
										<Select.Content>
											<Select.Item value="saturno">Saturno</Select.Item>
											<Select.Item value="netuno">Netuno</Select.Item>
											<Select.Item value="marte">Marte</Select.Item>
											<Select.Item value="venus">Vênus</Select.Item>
											<Select.Item value="urano">Urano</Select.Item>
											<Select.Item value="jupiter">Júpiter</Select.Item>
											<Select.Item value="plutao">Plutão</Select.Item>
											<Select.Item value="mercurio">Mercúrio</Select.Item>
										</Select.Content>
									</Select.Root>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="name">Megas</Label>
									<Input class="focus-visible:ring-[#F97316]" type="text" id="megas" />
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="gender">Valor mensal</Label>
									<Input class="focus-visible:ring-[#F97316]" type="text" id="value" />
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label>Método de pagamento*</Label>
									<Select.Root type="single">
										<Select.Trigger class="focus:ring-[#F97316]">Selecione</Select.Trigger>
										<Select.Content>
											<Select.Item value="boleto">Boleto</Select.Item>
											<Select.Item value="pix">Pix</Select.Item>
											<Select.Item value="credito">Cartão de crédito</Select.Item>
											<Select.Item value="debito">Cartão de débito</Select.Item>
										</Select.Content>
									</Select.Root>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label>CPF*</Label>
									<Input
										placeholder="999.999.999-99"
										class="focus-visible:ring-[#F97316]"
										type="number"
										id="cpf"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="code">Possui código promocional?</Label>
									<Input
										class="focus-visible:ring-[#F97316]"
										placeholder="himarte15"
										type="text"
										id="code"
									/>
								</div>
							</div>
						</div>
					{/if}

					<div class="flex justify-between mt-5">
						<Button
							class="px-4 py-2 bg-gray-200 hover:bg-gray-300"
							onclick={previousStep}
							disabled={currentStep === 1}
						>
							Anterior
						</Button>
						{#if currentStep < 3}
							<Button
								class="px-4 py-2 bg-orange-600 text-white font-semibold hover:bg-orange-700"
								onclick={nextStep}
							>
								Próximo
							</Button>
						{:else}
							<Button
								class="px-4 py-2 bg-orange-600 text-white font-semibold hover:bg-orange-700"
								onclick={nextStep}
							>
								Finalizar
							</Button>
						{/if}
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
