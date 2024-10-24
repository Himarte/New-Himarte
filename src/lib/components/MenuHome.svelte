<script lang="ts">
	import MainImgAstronalta from '$lib/img/extras/familiaNew.svg';

	let fraseOriginal = 'O FUTURO É AQUI';
	let fraseDigitada = $state('');
	let escritaIntervalo: any;
	let i = 0;

	const digitando = () => {
		escritaIntervalo = setInterval(() => {
			if (i < fraseOriginal.length) {
				fraseDigitada += fraseOriginal[i];
				i += 1;
			} else {
				clearInterval(escritaIntervalo);
			}
		}, 160);
	};

	$effect(() => {
		digitando();
	});
</script>

<section
	class="flex h-screen w-full items-end justify-center bg-cover mt-10 bg-center bg-no-repeat pb-32"
	style="background-image:url({MainImgAstronalta});"
>
	<h1 class="fontSpace px-3 text-center text-3xl font-bold md:px-0 md:text-7xl">
		{fraseDigitada}
	</h1>
</section>
