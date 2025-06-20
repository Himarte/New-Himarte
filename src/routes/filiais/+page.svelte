<script lang="ts">
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock_8 from '@lucide/svelte/icons/clock-8';
	import Clock_9 from '@lucide/svelte/icons/clock-9';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const listaFiliais: any[] = [
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.2013931489738!2d-52.43097443036854!3d-29.725390698442897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ca36c00d0c4ab%3A0x9f86d6d9573abeea!2sR.%20Manoel%20Ant%C3%B4nio%20de%20Barros%2C%20290%20-%20Centro%2C%20Santa%20Cruz%20do%20Sul%20-%20RS%2C%2096810-370!5e0!3m2!1spt-BR!2sbr!4v1711995566558!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Santa Cruz do Sul',
			city: 'Santa Cruz do Sul',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/gcn9whgELU6MuAuR7'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.1010305099617!2d-52.5019599!3d-29.7168326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951cbacfad314b5f%3A0x21c08751489fdd15!2sR.%20Cl%C3%A1udio%20Manoel%2C%2034%20-%20Centro%2C%20Vera%20Cruz%20-%20RS%2C%2096880-000!5e0!3m2!1spt-BR!2sbr!4v1704916342959!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Vera Cruz',
			city: 'Vera Cruz',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/N2BophAoV8BRfkpB6'
		},
		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8313322753793!2d-52.380830074465095!3d-29.98427696370144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951b5d438b3601f9%3A0xece5e30052035b44!2sR.%20Andrade%20Neves%2C%20545%20-%20Centro%2C%20Rio%20Pardo%20-%20RS%2C%2096640-000!5e0!3m2!1spt-BR!2sbr!4v1704917277535!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Rio Pardo',
			city: 'Rio Pardo',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/eeKHHbRnYcKaVVGk8'
		},

		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.1489580779007!2d-52.52549858463143!3d-30.54509526171223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ad8223a5733bd%3A0x600caf11bf8a4e26!2sAv.%20Cel.%20Hon%C3%B3rio%20Carvalho%2C%201368%20-%20Encruzilhada%20do%20Sul%2C%20RS%2C%2096610-000!5e0!3m2!1spt-BR!2sbr!4v1704916192295!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Encruzilhada do Sul',
			city: 'Encruzilhada do Sul',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/yM85og8nVN1j1Zkh8'
		},

		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5817792356784!2d-53.25349578773347!3d-29.644887812761727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503057ca8505d55%3A0x82f4d6d0f233a364!2sR.%20Ramiro%20Barcelos%2C%20511%20-%2001%20-%20Centro%2C%20Agudo%20-%20RS%2C%2096540-000!5e0!3m2!1spt-BR!2sbr!4v1704917553203!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Agudo',
			city: 'Agudo',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			days: 'Segunda a Sexta',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/o1Df1j2EsaqNaGx29'
		},

		{
			url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.6272188209496!2d-52.789262387732684!3d-29.672590014030767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95034a1dc7593213%3A0x387fd40d2374c5e1!2sAv.%20Pereira%20R%C3%AAgo%2C%201545%20-%20Centro%2C%20Candel%C3%A1ria%20-%20RS%2C%2096930-000!5e0!3m2!1spt-BR!2sbr!4v1704917370236!5m2!1spt-BR!2sbr',
			title: 'Himarte Net Localização Candelaria',
			city: 'Candelaria',
			schedule: 'Segunda a Sexta: 08:30 - 12:00 | 13:30 - 18:00',
			schedule2: 'Sábado: 08:00 - 12:00',
			link: 'https://maps.app.goo.gl/72SJiiRRZEe619qQ7'
		}
	];
</script>

<div class="flex h-full w-full flex-col items-center justify-center pt-28">
	<h1 class="fontSpace px-5 text-center text-sm font-bold text-[#f97316] md:text-3xl">
		Encontre a Himarte mais próxima
	</h1>

	<div class="container mx-auto px-4 pt-12 md:w-[60%]">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2">
			{#each listaFiliais as location}
				<a
					href={location.link}
					target="_blank"
					rel="noopener noreferrer"
					class=" rounded-lg border-2 transition-all duration-300"
				>
					<div class="relative p-0">
						<div class="absolute inset-0"></div>
						<iframe
							class="h-72 w-full rounded-lg md:h-[250px] md:w-full"
							src={location.url}
							allowfullscreen={true}
							loading="lazy"
							referrerpolicy="no-referrer"
							title={location.title}
						></iframe>
						<div
							class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0F1829] to-transparent"
						></div>
						<div class="absolute inset-x-0 bottom-0 p-4 text-white">
							<h2 class="text mb-2 flex items-center text-2xl font-bold">
								<MapPin size={23} class="mr-2" />
								{location.city}
							</h2>
							<div>
								<p class=" flex items-center transition-all duration-300">
									<Clock_9 size={20} class="mr-2" />
									{location.schedule}
								</p>
								<p class=" flex items-center transition-all duration-300">
									<Clock_8 size={20} class="mr-2" />
									{location.schedule2}
								</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
