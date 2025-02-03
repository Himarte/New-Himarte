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
				<form action="?/novoCadastro" method="post">
					{#if currentStep === 1}
						<div class="w-full flex flex-col gap-8 h-full">
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="name">Nome*</Label>
									<Input
										type="text"
										name="nomeCliente"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="lastname">Sobrenome*</Label>
									<Input
										name="sobrenomeCliente"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
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
									<Label for="date">Data de nascimento*</Label>
									<Input
										name="dataNascimento"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										type="date"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="phone">Telefone*</Label>
									<Input
										name="telefoneCliente"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										placeholder="(51) 999999999"
										type="tel"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="email">E-mail*</Label>
									<Input
										name="emailCliente"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										placeholder="luke@himarte.com"
										type="email"
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
										name="cep"
										autocomplete="off"
										placeholder="96825-000"
										type="text"
										class="focus-visible:ring-[#F97316]"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="city">Cidade*</Label>
									<Input
										name="cidade"
										autocomplete="off"
										placeholder="Santa Cruz do Sul"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="street">Rua/Avenida*</Label>
									<Input
										name="rua"
										autocomplete="off"
										placeholder=" Rua Manoel Antônio de Barros"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="district">Bairro*</Label>
									<Input
										name="bairro"
										autocomplete="off"
										placeholder="Centro"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="state">Estado*</Label>
									<Input
										name="estado"
										autocomplete="off"
										placeholder="RS"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="number">Número*</Label>
									<Input
										name="numero"
										autocomplete="off"
										placeholder="290"
										class="focus-visible:ring-[#F97316]"
										type="number"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="complement">Complemento*</Label>
									<Input
										name="complemento"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="reference">Ponto de referência (opcional)</Label>
									<Input
										name="pontoReferencia"
										autocomplete="off"
										placeholder="Himarte"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
							</div>
						</div>
					{:else}
						<div class="w-full flex flex-col gap-8 h-full">
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="plano">Selecione o plano*</Label>
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
									<Label for="megas">Megas</Label>
									<Input
										name="megasPlano"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										type="text"
									/>
								</div>
							</div>
							<div class="flex gap-8">
								<div class="flex w-full flex-col gap-2">
									<Label for="value">Valor mensal</Label>
									<Input
										name="valorPlano"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										type="number"
									/>
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
									<Label for="cpf">CPF*</Label>
									<Input
										name="cpf"
										autocomplete="off"
										placeholder="999.999.999-99"
										class="focus-visible:ring-[#F97316]"
										type="number"
									/>
								</div>
								<div class="flex w-full flex-col gap-2">
									<Label for="code">Possui código promocional?</Label>
									<Input
										name="codigoDesconto"
										autocomplete="off"
										class="focus-visible:ring-[#F97316]"
										placeholder="himarte15"
										type="text"
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
								type="submit"
								formaction="?/novoCadastro"
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
