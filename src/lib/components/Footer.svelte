<script>
	import logoNome from '$lib/img/logos/logo-nome-quliadade2.png';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Button from './ui/button/button.svelte';
</script>

<footer class="mt-16 flex w-full flex-col items-center justify-center px-28 pb-8 md:pt-0">
	<div class="flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0">
		<div class="flex">
			<Button
				variant="ghost"
				class="hover:bg-transparent hover:text-[#f97316]"
				target="_blank"
				href="https://www.facebook.com/himarte.net/"
				><Facebook strokeWidth={1.5} size="32" /></Button
			>
			<Button
				variant="ghost"
				class="hover:bg-transparent hover:text-[#f97316]"
				target="_blank"
				href="https://www.instagram.com/himarte_net/"
				><Instagram size="32" strokeWidth={1.5} /></Button
			>
			<Button
				variant="ghost"
				href="https://www.linkedin.com/company/himartenet/"
				class="hover:bg-transparent hover:text-[#f97316]"
				target="_blank"><Linkedin size="32" strokeWidth={1.5} /></Button
			>
		</div>
		<img class="w-40" src={logoNome} alt="logo prinicpal himarte" />
		<div class="hidden md:flex md:flex-col md:items-end">
			<Button href="/sobre" variant="link" class="decoration-transparent hover:text-[#f97316]"
				>Sobre</Button
			>
			<Button
				href="/trabalhe-conosco"
				variant="link"
				class="decoration-transparent hover:text-[#f97316]">Trabalhe conosco</Button
			>
			<Button href="/filiais" variant="link" class="decoration-transparent hover:text-[#f97316]"
				>Filiais</Button
			>
		</div>
	</div>
</footer>
