<script lang="ts">
	interface Props {
		text?: string;
	}

	let { text = 'Instalação Grátis' }: Props = $props();
</script>

<div class="absolute top-0 left-0 h-96 w-full">
	<div class="relative flex h-96 w-full overflow-hidden">
		<div
			class="rotate absolute -right-36 bottom-9 flex w-96 -rotate-45 bg-linear-to-r from-orange-800 via-orange-400 to-orange-800 text-center shadow-lg md:-right-36 md:bottom-11"
		>
			<h4
				class="font-inter text-background h-5 w-full text-sm font-bold uppercase shadow-sm md:text-sm"
			>
				{text}
			</h4>
		</div>
	</div>
</div>
