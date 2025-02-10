<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import type { FormData } from './types';

	export let formData: FormData;
</script>

<div class="w-full flex flex-col gap-8 h-full">
	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="cep">CEP*</Label>
			<Input
				name="cep"
				autocomplete="off"
				placeholder="00000-000"
				type="text"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				bind:value={formData.cep}
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label for="city">Cidade*</Label>
			<Input
				name="cidade"
				autocomplete="off"
				placeholder="Santa Cruz do Sul"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="text"
				bind:value={formData.cidade}
			/>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="street">Rua/Avenida*</Label>
			<Input
				name="rua"
				autocomplete="off"
				placeholder="Rua Manoel Antônio de Barros"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="text"
				bind:value={formData.rua}
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label for="district">Bairro*</Label>
			<Input
				name="bairro"
				autocomplete="off"
				placeholder="Centro"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="text"
				bind:value={formData.bairro}
			/>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="state">Estado*</Label>
			<Input
				name="estado"
				autocomplete="off"
				placeholder="RS"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="text"
				bind:value={formData.estado}
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label for="number">Número*</Label>
			<Input
				name="numero"
				autocomplete="off"
				placeholder="290"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="number"
				bind:value={formData.numero}
			/>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-5 md:gap-8">
		<div class="flex w-full flex-col gap-2">
			<Label for="complement">Complemento</Label>
			<Input
				name="complemento"
				autocomplete="off"
				placeholder="Apto 101"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="text"
				bind:value={formData.complemento}
			/>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Label class="flex gap-1" for="reference">
				Ponto de referência <span class="md:flex hidden">(opcional)</span>
			</Label>
			<Input
				name="pontoReferencia"
				autocomplete="off"
				placeholder="Himarte"
				class="focus-visible:ring-[#F97316] placeholder:text-sm"
				type="text"
				bind:value={formData.pontoReferencia}
			/>
		</div>
	</div>
</div>
