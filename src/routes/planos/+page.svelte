<svelte:options runes={false} />

<script lang="ts">
	import TabsPlanos from '$lib/components/TabPlanos/TabsPlanos.svelte';
	import { onMount } from 'svelte';

	// Declare 'blipClient' como variável reativa
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let BlipChat: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let blipClient: any;

	onMount(async () => {
		const module = await import('blip-chat-widget');
		BlipChat = module.BlipChat;

		blipClient = new BlipChat()
			.withAppKey(import.meta.env.VITE_CHAVE_API_BLIP_CHAT)
			.withButton({ color: '#EB4F27', icon: '' })
			.withCustomCommonUrl(import.meta.env.VITE_LINK_BLIP_CHAT);
		blipClient.build();
	});
</script>

<div class="w-full flex pt-16 items-center justify-center">
	<TabsPlanos {blipClient} />
</div>
