<script lang="ts">
	import logoNome from '$lib/img/logos/logo-nome-quliadade2.png';
	import Facebook from '@lucide/svelte/icons/facebook';
	import Instagram from '@lucide/svelte/icons/instagram';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import Mail from '@lucide/svelte/icons/mail';
	import Clock from '@lucide/svelte/icons/clock';
	import Wifi from '@lucide/svelte/icons/wifi';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<footer class="bg-background relative w-full overflow-hidden">
	<!-- Background Elements -->
	<div
		class="via-background absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5"
	></div>
	<div
		class="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
	></div>

	<!-- Main Footer Content -->
	<div class="relative z-10 px-4 py-16 sm:px-6 md:px-8">
		<div class="mx-auto max-w-7xl">
			<!-- Top Section -->
			<div class="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
				<!-- Company Info -->
				<div class="md:col-span-1">
					<div class="mb-6 flex justify-center md:justify-start">
						<img class="h-12 w-auto" src={logoNome} alt="Logo Himarte - Internet Fibra Ótica" />
					</div>
					<p class="text-muted-foreground mb-6 text-center text-sm leading-relaxed md:text-left">
						Conectando pessoas e empresas com a melhor internet fibra ótica do Rio Grande do Sul.
						Mais de 13 anos levando tecnologia de ponta para sua casa e negócio.
					</p>

					<!-- Horários de Funcionamento -->
					<div class="space-y-3 pl-8 md:pl-0">
						<div class="flex items-center gap-3 text-sm">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
								<Clock size={16} class="text-orange-400" />
							</div>
							<div class="flex flex-col">
								<span class="text-muted-foreground text-xs">Segunda a Sábado</span>
								<span class="text-foreground font-mono text-sm">08:30 - 22:00</span>
							</div>
						</div>
						<div class="flex items-center gap-3 text-sm">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
								<Clock size={16} class="text-blue-400" />
							</div>
							<div class="flex flex-col">
								<span class="text-muted-foreground text-xs">Domingo</span>
								<span class="text-foreground font-mono text-sm">08:00 - 19:00</span>
							</div>
						</div>
						<div class="flex items-center gap-3 text-sm">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
								<Clock size={16} class="text-green-400" />
							</div>
							<div class="flex flex-col">
								<span class="text-muted-foreground text-xs">Feriados</span>
								<span class="text-foreground font-mono text-sm">13:00 - 17:00</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Quick Links -->
				<div class="hidden md:col-span-1 md:block">
					<h3 class="text-foreground mb-6 text-center text-lg font-semibold md:text-left">
						Links Rápidos
					</h3>
					<ul class="space-y-4 pl-8 md:pl-0">
						<li>
							<a
								href="/planos"
								class="text-muted-foreground group inline-flex items-center text-sm transition-colors hover:text-orange-400"
							>
								<ChevronRight
									size={16}
									class="mr-2 text-orange-400/60 transition-transform group-hover:translate-x-1"
								/>
								Planos Residenciais
							</a>
						</li>
						<li>
							<a
								href="/planos"
								class="text-muted-foreground group inline-flex items-center text-sm transition-colors hover:text-orange-400"
							>
								<ChevronRight
									size={16}
									class="mr-2 text-orange-400/60 transition-transform group-hover:translate-x-1"
								/>
								Planos Empresariais
							</a>
						</li>
						<li>
							<a
								href="/sobre"
								class="text-muted-foreground group inline-flex items-center text-sm transition-colors hover:text-orange-400"
							>
								<ChevronRight
									size={16}
									class="mr-2 text-orange-400/60 transition-transform group-hover:translate-x-1"
								/>
								Sobre Nós
							</a>
						</li>
						<li>
							<a
								href="/filiais"
								class="text-muted-foreground group inline-flex items-center text-sm transition-colors hover:text-orange-400"
							>
								<ChevronRight
									size={16}
									class="mr-2 text-orange-400/60 transition-transform group-hover:translate-x-1"
								/>
								Nossas Filiais
							</a>
						</li>
						<li>
							<a
								href="/trabalhe-conosco"
								class="text-muted-foreground group inline-flex items-center text-sm transition-colors hover:text-orange-400"
							>
								<ChevronRight
									size={16}
									class="mr-2 text-orange-400/60 transition-transform group-hover:translate-x-1"
								/>
								Trabalhe Conosco
							</a>
						</li>
					</ul>
				</div>

				<!-- Contact Info -->
				<div class="md:col-span-1">
					<h3 class="text-foreground mb-6 text-center text-lg font-semibold md:text-left">
						Contato
					</h3>
					<div class="space-y-4 pl-8 md:pl-0">
						<div class="flex items-start gap-3">
							<div
								class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20"
							>
								<MapPin size={16} class="text-orange-400" />
							</div>
							<div>
								<p class="text-muted-foreground text-sm">Matriz</p>
								<p class="text-foreground text-sm font-medium">
									R. Manoel Antônio de Barros, 290<br />
									Centro, Santa Cruz do Sul - RS
								</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<div
								class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20"
							>
								<Phone size={16} class="text-blue-400" />
							</div>
							<div>
								<p class="text-muted-foreground text-sm">Atendimento</p>
								<a
									href="tel:+555130568251"
									class="text-foreground text-sm font-medium transition-colors hover:text-orange-400"
								>
									(51) 3056-8251
								</a>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<div
								class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20"
							>
								<Mail size={16} class="text-green-400" />
							</div>
							<div>
								<p class="text-muted-foreground text-sm">E-mail</p>
								<a
									href="mailto:contato@himarte.net"
									class="text-foreground text-sm font-medium transition-colors hover:text-orange-400"
								>
									contato@himarte.net
								</a>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<div
								class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20"
							>
								<Clock size={16} class="text-purple-400" />
							</div>
							<div>
								<p class="text-muted-foreground text-sm">Horário de Atendimento</p>
								<p class="text-foreground text-sm font-medium">
									Seg - Sex: 8h às 18h<br />
									Sáb: 8h às 12h
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Stats & Social -->
				<div class="hidden md:col-span-1 md:block">
					<h3 class="text-foreground mb-2 text-center text-lg font-semibold md:text-left">
						Acompanhe
					</h3>

					<div class="flex flex-col">
						<p class="text-muted-foreground mb-4 text-center text-sm md:text-left">
							Siga-nos nas redes sociais
						</p>
						<div class="flex flex-col gap-3 pl-8 md:pl-0">
							<a
								href="https://www.facebook.com/himarte.net/"
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:backdrop-blur-sm"
							>
								<div
									class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-500/40 group-hover:to-blue-600/40 group-hover:shadow-lg group-hover:shadow-blue-500/25"
								>
									<Facebook
										size={22}
										class="text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300"
									/>
								</div>
								<div class="transition-all duration-300">
									<h1
										class="text-foreground text-lg font-semibold transition-colors duration-300 group-hover:text-blue-300"
									>
										Facebook
									</h1>
									<p
										class="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-blue-400/80"
									>
										@himarte.net
									</p>
								</div>
								<div
									class="ml-auto translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
								>
									<ChevronRight size={18} class="text-blue-400" />
								</div>
							</a>
							<a
								href="https://www.instagram.com/himarte_net/"
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-pink-500/20 hover:backdrop-blur-sm"
							>
								<div
									class="flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/30 bg-gradient-to-br from-pink-500/20 to-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:border-pink-400 group-hover:bg-gradient-to-br group-hover:from-pink-500/40 group-hover:to-purple-500/40 group-hover:shadow-lg group-hover:shadow-pink-500/25"
								>
									<Instagram
										size={22}
										class="text-pink-400 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-300"
									/>
								</div>
								<div class="transition-all duration-300">
									<h1
										class="text-foreground text-lg font-semibold transition-colors duration-300 group-hover:text-pink-300"
									>
										Instagram
									</h1>
									<p
										class="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-pink-400/80"
									>
										@himarte_net
									</p>
								</div>
								<div
									class="ml-auto translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
								>
									<ChevronRight size={18} class="text-pink-400" />
								</div>
							</a>
							<a
								href="https://www.linkedin.com/company/himartenet/"
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 hover:backdrop-blur-sm"
							>
								<div
									class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-600/30 bg-gradient-to-br from-blue-600/20 to-blue-700/20 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-600/40 group-hover:to-blue-700/40 group-hover:shadow-lg group-hover:shadow-blue-600/25"
								>
									<Linkedin
										size={22}
										class="text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400"
									/>
								</div>
								<div class="transition-all duration-300">
									<h1
										class="text-foreground text-lg font-semibold transition-colors duration-300 group-hover:text-blue-400"
									>
										LinkedIn
									</h1>
									<p
										class="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-blue-500/80"
									>
										himartenet
									</p>
								</div>
								<div
									class="ml-auto translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
								>
									<ChevronRight size={18} class="text-blue-500" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Divider -->
			<div class="via-border my-12 h-px bg-gradient-to-r from-transparent to-transparent"></div>

			<!-- Bottom Section -->
			<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
				<!-- Copyright -->
				<div class="text-center md:text-left">
					<p class="text-muted-foreground text-sm">
						© {new Date().getFullYear()} Himarte Internet. Todos os direitos reservados.
					</p>
					<p class="text-muted-foreground mt-1 text-xs">CNPJ: 07.588.404/0001-97</p>
				</div>

				<!-- Test Speed CTA -->
				<div class="flex flex-col items-center justify-center gap-3">
					<span class="text-muted-foreground text-sm">Teste sua velocidade</span>
					<a
						href="https://www.minhaconexao.com.br/?server_id=001805"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-xs bg-gradient-to-r from-orange-600/80 to-orange-500/80 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:from-orange-600 hover:to-orange-500"
					>
						<Wifi size={16} />
						Testar Agora
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom gradient -->
	<div
		class="from-background absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t to-transparent"
	></div>
</footer>
