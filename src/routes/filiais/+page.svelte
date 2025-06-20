<script lang="ts">
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import Building2 from '@lucide/svelte/icons/building-2';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const listaFiliais: any[] = [
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.2013931489738!2d-52.43097443036854!3d-29.725390698442897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ca36c00d0c4ab%3A0x9f86d6d9573abeea!2sR.%20Manoel%20Ant%C3%B4nio%20de%20Barros%2C%20290%20-%20Centro%2C%20Santa%20Cruz%20do%20Sul%20-%20RS%2C%2096810-370!5e0!3m2!1spt-BR!2sbr!4v1711995566558!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Santa Cruz do Sul',
			city: 'Santa Cruz do Sul',
			address: 'R. Manoel Antônio de Barros, 290 - Centro',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/gcn9whgELU6MuAuR7'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.1010305099617!2d-52.5019599!3d-29.7168326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951cbacfad314b5f%3A0x21c08751489fdd15!2sR.%20Cl%C3%A1udio%20Manoel%2C%2034%20-%20Centro%2C%20Vera%20Cruz%20-%20RS%2C%2096880-000!5e0!3m2!1spt-BR!2sbr!4v1704916342959!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Vera Cruz',
			city: 'Vera Cruz',
			address: 'R. Cláudio Manoel, 34 - Centro',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/N2BophAoV8BRfkpB6'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8313322753793!2d-52.380830074465095!3d-29.98427696370144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951b5d438b3601f9%3A0xece5e30052035b44!2sR.%20Andrade%20Neves%2C%20545%20-%20Centro%2C%20Rio%20Pardo%20-%20RS%2C%2096640-000!5e0!3m2!1spt-BR!2sbr!4v1704917277535!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Rio Pardo',
			city: 'Rio Pardo',
			address: 'R. Andrade Neves, 545 - Centro',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/eeKHHbRnYcKaVVGk8'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.1489580779007!2d-52.52549858463143!3d-30.54509526171223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ad8223a5733bd%3A0x600caf11bf8a4e26!2sAv.%20Cel.%20Hon%C3%B3rio%20Carvalho%2C%201368%20-%20Encruzilhada%20do%20Sul%2C%20RS%2C%2096610-000!5e0!3m2!1spt-BR!2sbr!4v1704916192295!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Encruzilhada do Sul',
			city: 'Encruzilhada do Sul',
			address: 'Av. Cel. Honório Carvalho, 1368',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/yM85og8nVN1j1Zkh8'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5817792356784!2d-53.25349578773347!3d-29.644887812761727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503057ca8505d55%3A0x82f4d6d0f233a364!2sR.%20Ramiro%20Barcelos%2C%20511%20-%2001%20-%20Centro%2C%20Agudo%20-%20RS%2C%2096540-000!5e0!3m2!1spt-BR!2sbr!4v1704917553203!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Agudo',
			city: 'Agudo',
			address: 'R. Ramiro Barcelos, 511 - Centro',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/o1Df1j2EsaqNaGx29'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.6272188209496!2d-52.789262387732684!3d-29.672590014030767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95034a1dc7593213%3A0x387fd40d2374c5e1!2sAv.%20Pereira%20R%C3%AAgo%2C%201545%20-%20Centro%2C%20Candel%C3%A1ria%20-%20RS%2C%2096930-000!5e0!3m2!1spt-BR!2sbr!4v1704917370236!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Candelaria',
			city: 'Candelária',
			address: 'Av. Pereira Rêgo, 1545 - Centro',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/72SJiiRRZEe619qQ7'
		}
	];
</script>

<svelte:head>
	<title>Nossas Filiais - Himarte</title>
	<meta
		name="description"
		content="Encontre a filial Himarte mais próxima de você. Estamos presentes em várias cidades para melhor atendê-lo."
	/>
</svelte:head>

<div class="bg-background min-h-screen pt-24 pb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<div
				class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 ring-2 ring-orange-500/30"
			>
				<Building2 size={28} class="text-orange-400" />
			</div>
			<h1 class="text-foreground text-4xl font-bold sm:text-5xl lg:text-6xl">Nossas Filiais</h1>
			<p class="text-muted-foreground mx-auto mt-4 max-w-3xl text-xl">
				Encontre a unidade Himarte mais próxima de você. Estamos estrategicamente localizados para
				oferecer o melhor atendimento.
			</p>
			<div class="text-muted-foreground mt-8 flex items-center justify-center gap-2 text-sm">
				<MapPin size={16} class="text-orange-400" />
				<span>{listaFiliais.length} unidades disponíveis</span>
			</div>
		</div>

		<!-- Filiais Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each listaFiliais as location, index}
				<div
					class="group bg-card border-border relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
					style="animation-delay: {index * 0.1}s;"
				>
					<!-- Map Container -->
					<div class="relative h-64 overflow-hidden">
						<iframe
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							src={location.url}
							allowfullscreen={true}
							loading="lazy"
							referrerpolicy="no-referrer"
							title={location.title}
						></iframe>

						<!-- Gradient Overlay -->
						<div
							class="from-background/90 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent"
						></div>

						<!-- Location Badge -->
						<div
							class="bg-background/90 border-border absolute top-4 left-4 flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm"
						>
							<div class="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
							<span class="text-foreground text-xs font-medium">Ativo</span>
						</div>
					</div>

					<!-- Content -->
					<div class="space-y-4 p-6">
						<!-- City Name -->
						<div class="flex items-start justify-between">
							<div>
								<h3
									class="text-foreground text-xl font-bold transition-colors group-hover:text-orange-400"
								>
									{location.city}
								</h3>
								<p class="text-muted-foreground mt-1 flex items-center gap-1 text-sm">
									<MapPin size={14} />
									{location.address}
								</p>
							</div>
							<div class="opacity-0 transition-opacity group-hover:opacity-100">
								<ExternalLink size={18} class="text-orange-400" />
							</div>
						</div>

						<!-- Schedule -->
						<div class="space-y-2">
							<div class="text-muted-foreground flex items-center gap-2 text-sm">
								<Clock size={16} class="flex-shrink-0 text-orange-400" />
								<span class="leading-relaxed">{location.schedule}</span>
							</div>
							<div class="text-muted-foreground flex items-center gap-2 text-sm">
								<Clock size={16} class="flex-shrink-0 text-orange-400" />
								<span class="leading-relaxed">{location.schedule2}</span>
							</div>
						</div>

						<!-- Call to Action -->
						<a
							href={location.link}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-700 hover:to-orange-600 hover:shadow-orange-500/40"
						>
							<MapPin size={16} />
							Ver no Google Maps
							<ExternalLink size={14} />
						</a>
					</div>

					<!-- Hover Effect Border -->
					<div
						class="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-orange-500/0 transition-all duration-300 group-hover:ring-orange-500/30"
					></div>
				</div>
			{/each}
		</div>

		<!-- Info Section -->
		<div class="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div class="text-center lg:text-left">
				<div
					class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 ring-2 ring-blue-500/30"
				>
					<Clock size={24} class="text-blue-400" />
				</div>
				<h3 class="text-foreground mb-2 text-lg font-semibold">Horário de Funcionamento</h3>
				<p class="text-muted-foreground text-sm leading-relaxed">
					Todas as nossas unidades funcionam de segunda a sexta das 08:30 às 12:00 e das 13:30 às
					18:00, e aos sábados das 08:00 às 12:00.
				</p>
			</div>

			<div class="text-center lg:text-left">
				<div
					class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 ring-2 ring-green-500/30"
				>
					<MapPin size={24} class="text-green-400" />
				</div>
				<h3 class="text-foreground mb-2 text-lg font-semibold">Localização Estratégica</h3>
				<p class="text-muted-foreground text-sm leading-relaxed">
					Nossas filiais estão localizadas em pontos estratégicos para facilitar o acesso e oferecer
					comodidade aos nossos clientes.
				</p>
			</div>

			<div class="text-center lg:text-left">
				<div
					class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 ring-2 ring-purple-500/30"
				>
					<Building2 size={24} class="text-purple-400" />
				</div>
				<h3 class="text-foreground mb-2 text-lg font-semibold">Atendimento Presencial</h3>
				<p class="text-muted-foreground text-sm leading-relaxed">
					Em todas as unidades você encontra atendimento especializado para contratação, suporte
					técnico e esclarecimento de dúvidas.
				</p>
			</div>
		</div>

		<!-- Contact CTA -->
		<div class="mt-16 text-center">
			<div class="bg-card border-border rounded-2xl border p-8 shadow-xl">
				<h3 class="text-foreground mb-4 text-2xl font-bold">Não encontrou a sua cidade?</h3>
				<p class="text-muted-foreground mx-auto mb-6 max-w-2xl">
					Estamos sempre expandindo nossa cobertura. Entre em contato conosco para saber sobre
					disponibilidade na sua região.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/trabalhe-conosco"
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:from-orange-700 hover:to-orange-600"
					>
						Trabalhe Conosco
					</a>
					<a
						href="/#contato"
						class="border-border bg-card hover:bg-muted/50 text-foreground inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-all duration-200"
					>
						Entre em Contato
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.grid > div {
		animation: slideInUp 0.6s ease-out forwards;
		opacity: 0;
	}
</style>
