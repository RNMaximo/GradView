const catalogue = {
	totalCredits: 253,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA141', 'FA173', 'MA111', 'MC102', 'FA100', 'QG101', 'QG102']
		},
		'sem-2': {
			id: '2',
			subjects: ['BT330', 'FA273', 'MA211', 'ME414', 'F_128', 'F_129', 'FA270']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_328', 'EM306', 'MA311', 'F_329', 'FA374', 'FA370', 'FA379', 'FA373']
		},
		'sem-4': {
			id: '4',
			subjects: ['CV323', 'FA473', 'EM406', 'FA474', 'FA470', 'FA425', 'FA479', 'FA481']
		},
		'sem-5': {
			id: '5',
			subjects: ['FA503', 'FA520', 'EM506', 'FA586', 'FA585', 'FA577', 'FA576', 'FA573', 'FA564']
		},
		'sem-6': {
			id: '6',
			subjects: ['ET016', 'FA665', 'FA682', 'FA670', 'FA679', 'FA673', 'FA676', 'FA622', 'FA680']
		},
		'sem-7': {
			id: '7',
			subjects: ['FA780', 'FA720', 'FA778', 'FA782', 'FA770', 'FA721', 'FA733', 'FA786', 'FA779']
		},
		'sem-8': {
			id: '8',
			subjects: ['FA878', 'FA877', 'FA870', 'FA873', 'FA880', 'FA879', 'FA874', 'FA876']
		},
		'sem-9': {
			id: '9',
			subjects: ['FA070', 'FA978', 'ELET09', 'FA979', 'FA972', 'FA983']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'FA071', 'FA072']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 24,
			hasRestrictions: true,
			subjects: ['AM030', 'EI001', 'EI002', 'EI003', 'EI004', 'FA001', 'FA002', 'FA006', 'FA013', 'FA016', 'FA017', 'FA018', 'FA019', 'FA020', 'FA021', 'FA024', 'FA026', 'FA028', 'FA030', 'FA031', 'FA032', 'FA033', 'FA039', 'FA041', 'FA042', 'FA043', 'FA044', 'FA045', 'FA048', 'FA050', 'FA051', 'FA052', 'FA054', 'FA055', 'FA056', 'FA057', 'FA058', 'FA059', 'FA060', 'FA061', 'FA062', 'FA063', 'FA064', 'FA065', 'FA066', 'FA067', 'FA068', 'FA069', 'FA073', 'FA074', 'FA075', 'FA076', 'FA080', 'FA081', 'FA082', 'FA083', 'FA084', 'FA085', 'FA086', 'FA087'],
		},
	},

	subjects: {
		'FA100': {
			code: 'FA100',
			name: 'Engenharia Agrícola: Curso e Profissão',
			ementa: 'Universidade Estadual de Campinas e Faculdade de Engenharia Agrícola: histórico e perfil. O profissional Engenheiro Agrícola. Curso de graduação em Engenharia Agrícola da UNICAMP. Inserção da Engenharia Agrícola na Agricultura Brasileira. Mercado de Trabalho. Interação com outros ramos de Engenharia. Conceitos de Engenharia (Regulamentos, Ética Profissional).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99346',
			obligatory: true
		},
		'FA173': {
			code: 'FA173',
			name: 'Desenho Técnico',
			ementa: 'Introdução aos conceitos básicos de desenho técnico utilizando recursos assistidos por computador. Perspectiva; sistema de projeções, vistas principais, parciais e auxiliares. Cortes e seções. Cotas e tolerâncias. Desenhos de conjunto, detalhamento de conjunto e montagem de peças.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97946',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46ACB9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946AC',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B979',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Noções de físico-química: termoquímica, equilíbrios químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6046B9',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#79B946',
			obligatory: true
		},
		'BT330': {
			code: 'BT330',
			name: 'Botânica Básica',
			ementa: 'Aspectos gerais de morfologia de Dicotiledôneas e Monocotiledôneas, raiz, caule, folhas, flores, frutos e sementes. Aspectos gerais da fisiologia de plantas superiores, enfocando relações energéticas, relações hídricas e minerais, relações hormonais e a fisiologia da germinação. Aspectos gerais de taxonomia vegetal, com ênfase nas espécies cultivadas. Ciclo de vida das culturas de maior importância econômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#93B946',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B960',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#60B946',
			obligatory: true
		},
		'FA270': {
			code: 'FA270',
			name: 'Metodologia Científica e do Projeto',
			ementa: 'O conhecimento, ciência e senso comum. O Método Científico. A pesquisa científica; problematização; elaboração de hipóteses; verificação. Metodologia do trabalho científico. Metodologia de Projeto. Exemplo do desenvolvimento de um projeto de engenharia agrícola. Eficiências nas etapas do projeto. Fases e desenvolvimento do projeto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96046',
			obligatory: true
		},
		'FA273': {
			code: 'FA273',
			name: 'Desenho Civil Assistido por Computador',
			ementa: 'Simbologia básica e normas técnicas para a representação do projeto arquitetônico; Modelagem tridimensional de maquete arquitetônica e sistemas estruturais. Introdução à compatibilização tridimensional de projeto arquitetônico e estrutural. Detalhamento arquitetônico de anteprojeto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA173'],
			color: '#B97946',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#8079B3',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#46ACB9',
			obligatory: true
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#8079B3',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#6C8E97',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#53B380',
			obligatory: true
		},
		'FA370': {
			code: 'FA370',
			name: 'Mecânica dos Fluidos para Engenharia',
			ementa: 'Introdução as principais propriedades físicas dos fluidos. Esforços nos fluidos. Fluidostática. Equilibrio relativo. Manometria. Cinemática dos fluidos. Viscosidade. Equação da quantidade de movimento. Teorema de Bernoulli (conservação de energia). Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_128', 'F_129'],
			color: '#53B953',
			obligatory: true
		},
		'FA373': {
			code: 'FA373',
			name: 'Pedologia',
			ementa: 'Caracterização da crosta terrestre. Fundamentos de mineralogia, principais minerais e rochas. Intemperismo. O solo como recurso natural. Fatores e processos de formação do solo. O perfil de solo. Definição e notação de horizontes e camadas. Principais atributos morfológicos. Introdução à classificação de solos. Evolução da classificação de solos no Brasil. O sistema brasileiro de classificação de solos. Solos do Brasil e do Estado de São Paulo. Levantamento de solos. Bases para leitura de mapas de solos. Aplicações da Pedagogia em Engenharia Agrícola.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['QG101'],
			color: '#6046B9',
			obligatory: true
		},
		'FA374': {
			code: 'FA374',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética do ponto flutuante. Zeros de funções reais. Interpolação: Integração numérica. Resolução de sistemas: lineares, não lineares e com restrições. Ajuste de dados e curvas, tratamento numérico de equações diferenciais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211', 'MC102'],
			color: '#807D9D',
			obligatory: true
		},
		'FA379': {
			code: 'FA379',
			name: 'Introdução à Termodinâmica',
			ementa: 'História da termodinâmica. Conceitos básicos. Propriedades de substâncias puras. Equações de estado. Trabalho e calor. Primeira Lei. Balanços de energia, eficiências de Primeira Lei. Segunda Lei. Exergia e Irreversibilidade. Análises energéticas e exergéticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128'],
			color: '#46B960',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#8079B3',
			obligatory: true
		},
		'CV323': {
			code: 'CV323',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas, introdução, normas NBR 13.133 e NBR 14.144). Planimetria (medições de distâncias e ângulos; taqueometria, topometria, medições eletrônicas de distâncias). Altimetria. Terraço, curvas de nível e locação de canais. Métodos de representação do relevo. Automação topográfica. Terraplanagem. Locação de obras.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA173'],
			color: '#B97946',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#8079B3',
			obligatory: true
		},
		'FA425': {
			code: 'FA425',
			name: 'Instrumentação Básica',
			ementa: 'Conceitos básicos de instrumentação. Simbologia. Características estáticas de instrumentos. Calibração. Sensores. Condicionamento e aquisição de sinais. Válvulas e atuadores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328', 'F_329', 'FA370'],
			color: '#5BA979',
			obligatory: true
		},
		'FA470': {
			code: 'FA470',
			name: 'Dinâmica de Corpos Rígidos',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton. Conservação dos momentos linear e angular e conservação de energia. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial. Aplicações em linguagem simbólica Matlab.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EM306', 'F_128', 'FA374'],
			color: '#6D9090',
			obligatory: true
		},
		'FA473': {
			code: 'FA473',
			name: 'Sistemas de Produção',
			ementa: 'Roteiros e equipamentos para a produção vegetal. Sistemas de cultivo de vegetais. Equipamentos e instalações para produção animal. Sistemas de produção animal.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['BT330'],
			color: '#93B946',
			obligatory: true
		},
		'FA474': {
			code: 'FA474',
			name: 'Dinâmica de Sistemas',
			ementa: 'Sistemas mecânicos, elétricos, térmicos e fluídicos. Elementos ideais e puros. Modelos com parâmetros concentrados e distribuídos. Dinâmica de sistemas lineares. Sistemas de primeira e segunda ordem. Estabilidade de sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329', 'MA311'],
			color: '#6A969A',
			obligatory: true
		},
		'FA479': {
			code: 'FA479',
			name: 'Termodinâmica Aplicada',
			ementa: 'Introdução aos ciclos de potência. Introdução aos ciclos de refrigeração. Bombas de calor. Misturas. Psicrometria. Combustíveis e reações químicas. Introdução ao equilíbrio químico. Propriedades coligativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA379', 'QG101'],
			color: '#53808D',
			obligatory: true
		},
		'FA481': {
			code: 'FA481',
			name: 'Características e Propriedades do Solo',
			ementa: 'O solo como um sistema sólido, poroso, heterogêneo e anisotrópico. Composição volumétrica do solo. Caracterização e métodos de determinação de atributos físicos, químicos e biológicos do solo. Granulometria e textura do solo. Estrutura e agregação do solo. Cor do solo. Porosidade do solo. Ar do solo. Regime térmico do solo. Densidade do solo e das partículas. Consistência do solo. Água do solo. Atributos químicos e de fertilidade do solo. Matéria orgânica do solo. Organismos do solo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA373'],
			color: '#6046B9',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#8079B3',
			obligatory: true
		},
		'FA503': {
			code: 'FA503',
			name: 'Meteorologia Agrícola',
			ementa: 'Meteorologia, climatologia, atmosfera terrestre, radiação solar, ciclo hidrológico, fotossíntese, posto meteorológico, zoneamento agrícola, planejamento das atividades agrícolas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT330', 'F_328'],
			color: '#80A46F',
			obligatory: true
		},
		'FA520': {
			code: 'FA520',
			name: 'História e Desenvolvimento da Agricultura Brasileira',
			ementa: 'Fundamentos históricos da agricultura brasileira. Modernização da agricultura no Brasil. Caracterização da produção agrícola e agroindustrial. Política agrícola. Estrutura Agrária. Relações sociais na agricultura. Desenvolvimento agrícola e agroindustrial.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7946B9',
			obligatory: true
		},
		'FA564': {
			code: 'FA564',
			name: 'Barragens e Estradas de Terra',
			ementa: 'Principais elementos de uma barragem de terra. Definição e determinação dos parâmetros a serem considerados em obras de barragens. Determinação das características de resistência ao cisalhamento e deformabilidade dos solos. Anteprojeto de pequena barragem de terra. Introdução ao estudo de estradas vicinais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481'],
			color: '#6046B9',
			obligatory: true
		},
		'FA573': {
			code: 'FA573',
			name: 'Laboratório de Máquinas Agrícolas',
			ementa: 'Conceitos básicos de motores, máquinas e implementos agrícolas. Princípios, fundamentos e práticas sobre tratores agrícolas, máquinas e implementos de preparo do solo, semeadoras, adubadoras, cultivadores, colhedoras, pulverizadores e tecnologia de aplicação de produtos fitossanitários.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA425'],
			color: '#5BA979',
			obligatory: true
		},
		'FA576': {
			code: 'FA576',
			name: 'Propriedades Mecânicas de Materiais Biológicos',
			ementa: 'Propriedades mecânicas de produtos agrícolas. Relações tensão-deformação. Lei de Hooke generalizada. Elasticidade e Viscoelasticidade linear. Teorias de ruptura. Índices de firmeza. Variabilidade de medidas em produtos agrícolas. Efeitos da vibração.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406'],
			color: '#8079B3',
			obligatory: true
		},
		'FA577': {
			code: 'FA577',
			name: 'Propriedades Físicas dos Produtos Agrícolas',
			ementa: 'Caracterização das matérias-primas. Propriedades higroscópicas, gravimétricas, friccionais, aerodinâmicas e térmicas dos produtos agrícolas. Redução de tamanho.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA425'],
			color: '#5BA979',
			obligatory: true
		},
		'FA585': {
			code: 'FA585',
			name: 'Materiais e Tecnologia Mecânica',
			ementa: 'Materiais de construção mecânica, metálicos e não metálicos, obtenção, processamento e propriedades. Ensaios de materiais. Processos de fabricação por conformação mecânica. Fundição. Usinagem. Soldagem. Tratamento térmico. Tratamento superficial.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406'],
			color: '#8079B3',
			obligatory: true
		},
		'FA586': {
			code: 'FA586',
			name: 'Materiais de Construção Civil',
			ementa: 'Introdução. Materiais cerâmicos. Aglomerantes. Agregados. Argamassas. Concreto simples. Madeiras. Outros materiais.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4660B9',
			obligatory: true
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328'],
			color: '#6C8E97',
			obligatory: true
		},
		'FA622': {
			code: 'FA622',
			name: 'Sistema Solo-Planta-Atmosfera',
			ementa: 'Relação solo-planta-atmosfera. Dinâmica na atmosfera. Radiação solar. Efeito da temperatura no desenvolvimento dos vegetais. Água no sistema vegetal. Balanço de energia, evaporação e transpiração vegetal. Mecanismo de controle de perda de água nos vegetais: controle estomático. Movimentação da água no solo. Absorção da água pelas raízes. Evolução dos mecanismos da tolerância das espécies vegetais à saturação hídrica e ao déficit hídrico no solo. Balanço hídrico. Balanço hidrológico. Modelagem e espacialização das relações solo-planta-atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481', 'FA503'],
			color: '#707594',
			obligatory: true
		},
		'FA665': {
			code: 'FA665',
			name: 'Geotecnologias I',
			ementa: 'Introdução ao geoprocessamento. Cartografia básica. Fotogrametria e fotointerpretação. Sensoriamento remoto. Sistemas de informações geográficas.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV323', 'FA481'],
			color: '#8D6080',
			obligatory: true
		},
		'FA670': {
			code: 'FA670',
			name: 'Elementos de Máquinas',
			ementa: 'Resistência dos materiais à fadiga. Eixos e árvores. Chavetas. Elementos de união. Molas. Tolerância e Ajustes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'FA173', 'FA585'],
			color: '#93798F',
			obligatory: true
		},
		'FA673': {
			code: 'FA673',
			name: 'Transferência de Calor e Massa',
			ementa: 'Condução unidimensional em regime permanente. Equações diferenciais. Condução em regime transiente. Transferência de calor por radiação. Transferência de calor por convecção. Trocador de calor. Fundamentos de transferência de massa. Difusão. Transferência interfacial. Transferência de massa convectiva. Equipamentos de transferência de massa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA370', 'FA374', 'FA479'],
			color: '#62927F',
			obligatory: true
		},
		'FA676': {
			code: 'FA676',
			name: 'Hidráulica Geral',
			ementa: 'Condutos forçados. Perdas de carga. Problemas de dois e três reservatórios. Instalações de recalque. Noções sobre Golpe de aríete. Condutos livres. Canais fechados e abertos. Energia específica. Remanso. Ressalto hidráulico. Medidores de velocidade e de vazão.',
			semestre: 1,
			vector: {T:3, P:1, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['FA370'],
			color: '#53B953',
			obligatory: true
		},
		'FA679': {
			code: 'FA679',
			name: 'Tecnologia de Processos Pós-Colheita I',
			ementa: 'Noções de bioquímica relacionadas à tecnologia pós-colheita. Fatores de pré e pós-colheita. Índices de maturação. Respiração. Modelos respiratórios. Relações térmicas e hídricas. Manutenção da qualidade. Operações do beneficiamento. Tecnologia de conservação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA577'],
			color: '#5BA979',
			obligatory: true
		},
		'FA680': {
			code: 'FA680',
			name: 'Relação Trator-Implemento',
			ementa: 'Princípios de distribuição de tensões no solo. Determinação da reação do solo devido a ação de implementos de preparo. Sistemas de preparo do solo: plantio convencional, plantio reduzido, plantio ou semeadura direta. Forças atuantes em implementos agrícolas. Acoplamento do implemento ao trator. Mecânica da relação veículo-solo. Compactação de solos sob a ação de máquinas e implementos agrícolas, causas e efeitos. Desempenho de pneus e rodas, resistência ao rolamento, capacidade de carga de um solo, patinagem, desempenho conjunto trator-implemento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA564', 'FA573'],
			color: '#5E7899',
			obligatory: true
		},
		'FA682': {
			code: 'FA682',
			name: 'Modelagem Estrutural Aplicada',
			ementa: 'Princípios do projeto estrutural. Tópicos de elasticidade aplicada. Métodos dos deslocamentos. Introdução ao método dos elementos finitos. Utilização de programas computacionais. Simulação do comportamento estrutural de máquinas e estruturas agrícolas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'FA273', 'FA585', 'FA586'],
			color: '#807399',
			obligatory: true
		},
		'FA720': {
			code: 'FA720',
			name: 'Fundamentos de Economia',
			ementa: 'Introdução à macroeconomia (medidas da atividade econômica: produto, renda, consumo, poupança, investimento, exportações e importações). População, emprego e renda: mercado de trabalho, desigualdades sociais e econômicas. Importância e papel da agricultura no desenvolvimento econômico e social. Mercados e transações. Economia informal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520'],
			color: '#7946B9',
			obligatory: true
		},
		'FA721': {
			code: 'FA721',
			name: 'Engenharia Econômica',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de Contabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'MA311'],
			color: '#8079B3',
			obligatory: true
		},
		'FA733': {
			code: 'FA733',
			name: 'Fundamentos de Microbiologia e Qualidade de Água',
			ementa: 'Conceituação básica sobre microbiologia aplicada à pós-colheita de produtos agrícolas e ao saneamento ambiental. Conhecimentos de fundamentos de hidrobiologia. Conhecimentos fundamentais de química da água.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG101'],
			color: '#6046B9',
			obligatory: true
		},
		'FA770': {
			code: 'FA770',
			name: 'Elementos de Transmissões Mecânicas',
			ementa: 'Elementos de transmisão; Correias; Correntes. Engrenagens. Elementos reguladores de movimento. Eixos flexíveis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA670'],
			color: '#93798F',
			obligatory: true
		},
		'FA778': {
			code: 'FA778',
			name: 'Construções Rurais para a Produção Animal',
			ementa: 'Instalações e equipamentos para a produção animal: aves, suínos, bovinos de leite e corte, ovinos e caprinos, equinos, coelhos e outras instalações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA473', 'FA586'],
			color: '#6D8D80',
			obligatory: true
		},
		'FA779': {
			code: 'FA779',
			name: 'Tecnologia de Resfriamento para Produtos Hortícolas',
			ementa: 'A refrigeração e a conservação de produtos hortícolas. A Cadeia do Frio. Sistemas de refrigeração e elementos que o compõem. Cálculo de carga térmica em câmaras refrigeradas. Câmaras de armazenamento. Dimensionamento de câmaras. Seleção de equipamentos e acessórios. Sistemas de resfriamento rápido com ar forçado e com água. Dimensionamento. Transporte frigorífico de frutas e hortaliças. Tempo de resfriamento, determinação teórica e experimental. Custos de resfriamento. Seleção de sistemas. Viabilidade econômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA673', 'FA679'],
			color: '#5F9E7C',
			obligatory: true
		},
		'FA780': {
			code: 'FA780',
			name: 'Instalações Elétricas para Sistemas Agroindustriais',
			ementa: 'Noções básicas sobre geração, transmissão e distribuição de energia elétrica. Linhas de distribuição e ramais rurais. Instalações elétricas em baixa tensão. Sinalização, comando e proteção de circuitos elétricos em baixa tensão. Instrumentos de medidas elétricas. Sistemas de medição e modalidades tarifárias de energia elétrica.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ET016'],
			color: '#6C8E97',
			obligatory: true
		},
		'FA782': {
			code: 'FA782',
			name: 'Dimensionamento de Estruturas de Concreto',
			ementa: 'Esquema estático do projeto estrutural; Dimensionamento de lajes, vigas, pilares e fundações; Projeto de estrutura de concreto.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA682'],
			color: '#807399',
			obligatory: true
		},
		'FA786': {
			code: 'FA786',
			name: 'Hidrologia Ciência e Aplicação',
			ementa: 'Precipitação, infiltração e evapotranspiração em bacias hidrográficas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA622', 'FA676'],
			color: '#629774',
			obligatory: true
		},
		'FA870': {
			code: 'FA870',
			name: 'Dimensionamento de Estruturas de Madeira',
			ementa: 'Esforços e resistência de projeto; Dimensionamento de peças estruturais submetidas a esforços de tração, compressão, cisalhamento e flexão. Efeito do vento. Projeto de uma estrutura de madeira.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA682'],
			color: '#807399',
			obligatory: true
		},
		'FA873': {
			code: 'FA873',
			name: 'Ambientes para Animais e Plantas',
			ementa: 'Respostas fisiológicas: Animal e vegetal em ambientes protegidos. Cálculo da carga térmica. Ventilação natural. Ventilação forçada. Ambientes para a produção vegetal.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA673', 'FA778'],
			color: '#689080',
			obligatory: true
		},
		'FA874': {
			code: 'FA874',
			name: 'Saneamento Ambiental',
			ementa: 'Conceituação básica sobre impactos ambientais. Identificação de fontes de poluição agrícola, zootécnica e agroindustrial. Conceituação das propriedades físicas, químicas e biológicas dos resíduos. Conhecimentos básicos sobre operações e processos unitários. Conceituação e discussão das tecnologias para tratamento de águas residuárias. Discussão de propostas para controle e disposição de resíduos sólidos. Análise e discussão de alternativas para reciclagem de resíduos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA733'],
			color: '#6046B9',
			obligatory: true
		},
		'FA876': {
			code: 'FA876',
			name: 'Técnicas de Irrigação',
			ementa: 'Conceitos básicos da relação solo-água-planta. Métodos de manejo da irrigação: princípios e prática. Qualidade da água para irrigação. Hidráulica de linhas de irrigação pressurizadas. Métodos de irrigação pressurizados: aspersão e localizada. Irrigação por superfície: inundação e sulcos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA786'],
			color: '#629774',
			obligatory: true
		},
		'FA877': {
			code: 'FA877',
			name: 'Planejamento Agrícola',
			ementa: 'Gestão da empresa agrícola. O papel do planejamento na gestão (áreas funcionais, níveis e etapas). Produção agrícola. Planejamento agrícola e seus componentes: planejamento do uso do solo (zoneamento), planejamento da produção (setores e variedades) e planejamento anual das atividades. Softwares para planejamento e controle.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA665'],
			color: '#8D6080',
			obligatory: true
		},
		'FA878': {
			code: 'FA878',
			name: 'Introdução ao Gerenciamento de Projetos',
			ementa: 'Conceitos básicos de gerenciamento de projetos. Os macroprocessos de gerenciamento: iniciação, planejamento, execução, controle e encerramento. Áreas de conhecimento do gerenciamento de projetos: escopo, tempo, custo, qualidade, comunicações, riscos, recursos humanos e suprimentos. As relações dentro da equipe. O gerente e seu papel. Os benefícios do gerenciamento de projetos. Utilização de \"software\" para gerenciamento de projetos.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA460'],
			color: '#46B9AC',
			obligatory: true
		},
		'FA879': {
			code: 'FA879',
			name: 'Tecnologia de Processos Pós-Colheita II',
			ementa: 'Alteração da qualidade na secagem. Psicrometria aplicada à secagem. Teoria de movimentação de ar. Princípios de secagem. Modelos de secagem em leito fixo. Cinética de secagem. Modelo diferencial. Sistemas de Secagem e Secadores. Simulação de secagem. Prática de secagem de grãos. Instalações e custos de secagem.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA577', 'FA673'],
			color: '#5F9E7C',
			obligatory: true
		},
		'FA880': {
			code: 'FA880',
			name: 'Princípios de Operação de Máquinas Agrícolas',
			ementa: 'Princípios mecânicos de corte: cisalhamento, inercial e não-convencionais a laser e jato de água. Fragmentação do solo: arados fixos e rotativos. Fragmentação de fluídos, aspersão e pulverização. Seguimento do perfil do solo para o corte ou catação de produtos agrícolas rasteiros. Rolos convergentes (\"snappers\"): decascadores de arroz e despalhadores. Elevadores de canecas: trajetória. Transporte vibratório: mesa gravitacional. Adensamento de biomassa: enfardamento, briquetagem e pelitização. Dosagem e agitação de agroquímicos fluídos. Dosagem de sementes e agroquímicos granulados.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA470', 'FA573', 'FA576', 'FA577', 'FA770'],
			color: '#71918E',
			obligatory: true
		},
		'FA070': {
			code: 'FA070',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projeto, montagens e execução de equipamentos e sistemas em Engenharia Agrícola junto a um órgão credenciado pela Coordenadoria de Graduação da Faculdade de Engenharia Agrícola.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#46B993',
			obligatory: true
		},
		'FA972': {
			code: 'FA972',
			name: 'Drenagem de Solos Agrícolas',
			ementa: 'Caracterização básica de solos de terras baixas, várzeas e matas ciliares. Drenagem superficial e subterrânea. Dimensionamento de drenos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA786'],
			color: '#629774',
			obligatory: true
		},
		'FA978': {
			code: 'FA978',
			name: 'Projeto Integrado I',
			ementa: 'Idealização dos procedimentos na resolução de um caso real. Elaboração do anteprojeto. Estudo da viabilidade técnico, sócio e econômico. Cronograma de atividades. Apresentação do anteprojeto.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#B94693',
			obligatory: true
		},
		'FA979': {
			code: 'FA979',
			name: 'Tecnologia de Processos Pós-Colheita III',
			ementa: 'Introdução à armazenagem de grãos. Rede armazenadora. Classificação: armazéns e silos. Aspectos do produto relacionados com o dimensionamento de silos e armazéns. Características dos grãos armazenados. Fatores que afetam na deterioração de grãos armazenados. Pragas dos grãos armazenados: fungos, insetos, roedores. Conservação da qualidade do grão armazenado: expurgo, termometria, aeração. Equipamentos para manuseio, transporte e beneficiamento de grãos. Controle de pó. Sistemas de armazenamento. Projeto e dimensionamento de unidades de beneficiamento de grãos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA879'],
			color: '#5F9E7C',
			obligatory: true
		},
		'FA983': {
			code: 'FA983',
			name: 'Manejo e Conservação do Solo',
			ementa: 'Sustentabilidade e uso sustentável em agricultura. Introdução ao planejamento do uso das terras e ao planejamento conservacionista. Metodologias de avaliação de terras para fins agrícolas. Manejo agrícola e qualidade do solo. Degradação da qualidade do solo. Erosão do solo. Conservação do solo e da água. Legislação em conservação do solo e da água.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA680', 'FA786'],
			color: '#608887',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'FA071': {
			code: 'FA071',
			name: 'Sociologia e Extensão Rural',
			ementa: 'Realidade rural brasileira. Introdução à sociologia rural. Geração, transferência, difusão e adoção de tecnologias no meio rural. Comunicação rural. Projetos de intervenção na realidade rural. Fundamentos e metodologia de extensão rural.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA475'],
			color: '#4646B9',
			obligatory: true
		},
		'FA072': {
			code: 'FA072',
			name: 'Projeto Integrado II',
			ementa: 'Execução do projeto desenvolvido na disciplina FA978 - Projeto Integrado I. Apresentação do projeto.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AM030': {
			code: 'AM030',
			name: 'Técnicas e Organização de Apresentações em Público',
			ementa: 'Técnicas de comunicação. Postura de voz e postura corporal na apresentação em público. Estruturação do discurso. Espaço e equipamentos auxiliares. Preparação de material auxiliar. Objetivo: Instrumentalizar os participantes na comunicação e apresentação em público. No que se refere às apresentações e seus desdobramentos, fornecer os elementos que auxiliem na abordagem e apresentação do tema, envolvendo técnicas de apresentação oral, postura de voz e postura corporal; e na preparação do material auxiliar da apresentação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		},
		'EI001': {
			code: 'EI001',
			name: 'Integralização de Estudos',
			ementa: 'Integralização de atividades curriculares desenvolvidas em outra Instituição de Ensino Superior, cujo aproveitamento deverá ser aprovado pela Comissão de Graduação da Unidade do aluno e o número de créditos XX definido pela Diretoria Acadêmica da Unicamp em função da documentação apresentada, podendo variar de XX=01 até XX=20.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:0, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#9346B9',
			obligatory: false
		},
		'EI002': {
			code: 'EI002',
			name: 'Integralização de Estudos',
			ementa: 'Integralização de atividades curriculares desenvolvidas em outra Instituição de Ensino Superior, cujo aproveitamento deverá ser aprovado pela Comissão de Graduação da Unidade do aluno e o número de créditos XX definido pela Diretoria Acadêmica da Unicamp em função da documentação apresentada, podendo variar de XX=01 até XX=20.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: false
		},
		'EI003': {
			code: 'EI003',
			name: 'Integralização de Estudos',
			ementa: 'Integralização de atividades curriculares desenvolvidas em outra Instituição de Ensino Superior, cujo aproveitamento deverá ser aprovado pela Comissão de Graduação da Unidade do aluno e o número de créditos XX definido pela Diretoria Acadêmica da Unicamp em função da documentação apresentada, podendo variar de XX=01 até XX=20.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#B94660',
			obligatory: false
		},
		'EI004': {
			code: 'EI004',
			name: 'Integralização de Estudos',
			ementa: 'Integralização de atividades curriculares desenvolvidas em outra Instituição de Ensino Superior, cujo aproveitamento deverá ser aprovado pela Comissão de Graduação da Unidade do aluno e o número de créditos XX definido pela Diretoria Acadêmica da Unicamp em função da documentação apresentada, podendo variar de XX=01 até XX=20.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4679B9',
			obligatory: false
		},
		'FA001': {
			code: 'FA001',
			name: 'Saneamento Rural',
			ementa: 'Apresentação de fundamentos e tecnologias adequadas de tratamento de água. Conceitos de desinfecção. Desenvolvimento de um projeto de filtro lento. Apresentação de fundamentos e tecnologias para tratamento de resíduos líquidos. Desenvolvimento de projeto de tanque séptico e disposição do efluente.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA874'],
			color: '#6046B9',
			obligatory: false
		},
		'FA002': {
			code: 'FA002',
			name: 'Engenharia de Irrigação',
			ementa: 'Sistemas de irrigação pressurizados: caracterização de materiais e equipamentos, planejamento e dimensionamento de sistemas e métodos de avaliação de campo.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: ['FA876'],
			color: '#629774',
			obligatory: false
		},
		'FA006': {
			code: 'FA006',
			name: 'Projetos Especiais de Ambientes Controlados',
			ementa: 'Determinação da carga térmica de estruturas para produção vegetal. Parâmetros e sistemas de condicionamento de ar. Ambientes totalmente controlados para a produção vegetal.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA873'],
			color: '#689080',
			obligatory: false
		},
		'FA013': {
			code: 'FA013',
			name: 'Sistemas Especialistas Aplicados à Agricultura',
			ementa: 'Introdução aos sistemas especialistas e à Lógica Nebulosa (\"Fuzzy\").',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA374'],
			color: '#807D9D',
			obligatory: false
		},
		'FA016': {
			code: 'FA016',
			name: 'Tecnologia de Produção de Rações',
			ementa: 'Redução de tamanho. Métodos de classificação de partícula reduzida. Mistura: sólido-sólido e líquido-sólido. Extrusão. Peletização. Resfriamento. Armazenagem. Qualidade da matéria-prima e da ração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA577'],
			color: '#5BA979',
			obligatory: false
		},
		'FA017': {
			code: 'FA017',
			name: 'Tópicos Especiais em Tecnologia Pós-Colheita',
			ementa: 'Estudo de alguns produtos agrícolas que apresentam especificidades na fase de pós-colheita. Aspectos da produção e da colheita que interferem na qualidade final. Características das operações de pós-colheita.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA577'],
			color: '#5BA979',
			obligatory: false
		},
		'FA018': {
			code: 'FA018',
			name: 'Tecnologia de Sementes',
			ementa: 'Importância da semente. Características gerais das sementes. Fatores que afetam a produção e o desempenho das sementes. Secagem. Beneficiamento. Armazenamento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA879'],
			color: '#5F9E7C',
			obligatory: false
		},
		'FA019': {
			code: 'FA019',
			name: 'Teorias Avançadas do Processo de Secagem',
			ementa: 'Relacionamento sólido-umidade. Estrutura sólida. Equações fundamentais. Tratamento de dados. Métodos de secagem.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA879'],
			color: '#5F9E7C',
			obligatory: false
		},
		'FA020': {
			code: 'FA020',
			name: 'Propriedades de Transferência',
			ementa: 'Importância dos mecanismos de transporte. Métodos de determinação. Equações empregadas. Interpretação dos valores obtidos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA577', 'FA673'],
			color: '#5F9E7C',
			obligatory: false
		},
		'FA021': {
			code: 'FA021',
			name: 'Gerenciamento de Recursos Hídricos',
			ementa: 'Caracterização geral dos problemas de recursos hídricos. Diagnósticos da disponibilidade de recursos hídricos. Diagnóstico de necessidades de recursos hídricos, caracterização socioeconômica. Balanço de recursos hídricos e política de desenvolvimento socioeconômico. Gestão de recursos hídricos em outros países e no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA786'],
			color: '#629774',
			obligatory: false
		},
		'FA024': {
			code: 'FA024',
			name: 'Projeto Estrutural de Máquinas Agrícolas',
			ementa: 'Revisão da teoria da elasticidade. Introdução ao método dos elementos finitos. Programas computacionais de elementos finitos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA682'],
			color: '#807399',
			obligatory: false
		},
		'FA026': {
			code: 'FA026',
			name: 'Ergonomia Aplicada à Engenharia Agrícola',
			ementa: 'Introdução à ergonomia. Aspectos históricos e metodológicos. Antropometria. Biomecânica. Dimensionamento do espaço de trabalho. O processamento de informações pelo homem. Ruído e vibrações mecânicas. Ergonomia e segurança.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA270'],
			color: '#B96046',
			obligatory: false
		},
		'FA028': {
			code: 'FA028',
			name: 'Avaliação do Desempenho de Máquinas Agrícolas e Qualidade de Operação',
			ementa: 'Metodologia de ensaio de máquinas agrícolas: tratores, máquinas de preparo do solo, plantio, adubação, pulverização e colheita. Dimensionamento e controle operacional de máquinas agrícolas.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA880'],
			color: '#71918E',
			obligatory: false
		},
		'FA030': {
			code: 'FA030',
			name: 'Estradas Vicinais',
			ementa: 'Escolha do traçado de uma estrada vicinal. Projeto geométrico. Pavimentos econômicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA564'],
			color: '#6046B9',
			obligatory: false
		},
		'FA031': {
			code: 'FA031',
			name: 'Fontes Alternativas de Energia',
			ementa: 'Conceitos de geração. Distribuição e utilização de fontes alternativas de energia para processos e sistemas no meio rural. Avaliação termoeconômica de energia solar, eólica, hídrica e de biomassa.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA673', 'FA780'],
			color: '#67908B',
			obligatory: false
		},
		'FA032': {
			code: 'FA032',
			name: 'Estruturas Metálicas',
			ementa: 'Dimensionamento de peças metálicas tracionadas e comprimidas. Ligações de peças metálicas. Vigas metálicas. Projeto de uma estrutura metálica de cobertura.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA586', 'FA682'],
			color: '#636AA9',
			obligatory: false
		},
		'FA033': {
			code: 'FA033',
			name: 'Pesquisa Operacional Aplicada à Agricultura',
			ementa: 'Programação linear, otimização em redes e simulação. Estudo das técnicas e estudos de casos aplicados à agricultura.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA374'],
			color: '#807D9D',
			obligatory: false
		},
		'FA039': {
			code: 'FA039',
			name: 'Tecnologia da Madeira',
			ementa: 'Importância do reflorestamento. Propriedades anatômicas, físicas, químicas e mecânicas da madeira. Preservação. Secagem. Madeira transformada.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA586'],
			color: '#4660B9',
			obligatory: false
		},
		'FA041': {
			code: 'FA041',
			name: 'Aproveitamentos Hidroenergéticos no Meio Rural: Micro, Mini e Pequenas Usinas',
			ementa: 'Introdução. Classificação dos aproveitamentos hidroenergéticos. Fluxograma de atividades para estudos e projetos. Estudos topográficos, hidrográficos, socioeconômicos e hidroenergéticos. Projeto, aspectos construtivos, desenhos do arranjo geral e detalhes. Custos: metodologia, composição e cálculos. Avaliação socioeconômica. Legislação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA564', 'FA676', 'FA780'],
			color: '#60848C',
			obligatory: false
		},
		'FA042': {
			code: 'FA042',
			name: 'Hidráulica Básica Aplicada à Máquinas Agrícolas',
			ementa: 'Teoria básica em hidráulica aplicada à máquinas agrícolas. Teoria essencial para executar ou analisar projetos e operar, realizar manutenção e diagnosticar comportamentos de circuitos hidráulicos utilizados em máquinas agrícolas. Projeto de circuitos hidráulicos com dimensionamento e seleção de seus componentes.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200', 'FA370', 'FA573'],
			color: '#57B166',
			obligatory: false
		},
		'FA043': {
			code: 'FA043',
			name: 'Qualidade e Segurança de Frutas e Hortaliças Frescas',
			ementa: 'Fundamentos de gestão de qualidade e segurança para frutas e hortaliças frescas. Selos e certificados. Cadeia de suprimentos para a obtenção de alimentos seguros. Conceitos de sistema de análise de perigos e de pontos de controle críticos. Guia de gestão para preparação e apresentação de frutas e hortaliças ao mercado. Legislação pertinente a produtos vegetais alimentícios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA679'],
			color: '#5BA979',
			obligatory: false
		},
		'FA044': {
			code: 'FA044',
			name: 'Processamento Mínimo de Frutas e Hortaliças',
			ementa: 'Operações de processamento mínimo de frutas e hortaliças. Fatores de qualidade para produtos minimamente processados. Biologia e fisiologia do produto minimamente processado. Alterações decorrentes do processamento mínimo. Controle de temperatura. Microbiologia. Sanitização e desinfecção. Atmosfera modificada e embalagem. Considerações sobre projeto para unidade processadora.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA679'],
			color: '#5BA979',
			obligatory: false
		},
		'FA045': {
			code: 'FA045',
			name: 'Tecnologia de Conservação de Flores Cortadas',
			ementa: 'Qualidade de flor. Embalagem. Armazenamento. Comercialização. Práticas de conservação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA679'],
			color: '#5BA979',
			obligatory: false
		},
		'FA048': {
			code: 'FA048',
			name: 'Qualidade do Ar em Ambientes para Produção Intensiva de Animais',
			ementa: 'Introdução e formas de alojamento para animais (avicultura, suinocultura e bovinocultura de leite em tropical). Introdução à microbiologia. Fungos toxicogênicos. Micotoxinas. Doenças relacionadas à presença de microrganismos no ar. Análise e avaliação de poluentes aéreos. Instrumentação para medidas e análise de gases e microrganismos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA778'],
			color: '#6D8D80',
			obligatory: false
		},
		'FA050': {
			code: 'FA050',
			name: 'Introdução à Administração de Empresas do Agronegócio',
			ementa: 'Administração, organização e administrador. Breve história da administração. As funções administrativas: planejamento, organização, controle e direção. Planejamento: tipos, etapas e níveis. Organização: tipos de estrutura organizacional, hierarquia e coordenação. Direção: sistemas administrativos. Controle: tipos de controle, avaliação de desempenho. Estudo de casos de empresas ligadas ao agronegócio.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520'],
			color: '#7946B9',
			obligatory: false
		},
		'FA051': {
			code: 'FA051',
			name: 'Gestão Ambiental no Agronegócio',
			ementa: 'Agronegócio e meio ambiente: Sistemas de gestão ambiental públicos e privados. Legislação ambiental. Código Florestal. Licenciamento ambiental: EIA/RIMA, Marketing ambiental. Certificação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520'],
			color: '#7946B9',
			obligatory: false
		},
		'FA052': {
			code: 'FA052',
			name: 'Projeto e Desenvolvimento de Embalagens para Produtos Agrícolas',
			ementa: 'Embalagens para produtos hortícolas. Mercado. Normas vigentes. Metodologia do projeto de embalagens. Custo. Materiais. Dimensionamento geométrico, estrutural e ergonômico. Avaliação do desempenho. Embalagens e a cadeia do frio. Critérios de desempenho térmico. Projeto de embalagens.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA173', 'FA673', 'FA679', 'FA576', 'FA577'],
			color: '#77917C',
			obligatory: false
		},
		'FA054': {
			code: 'FA054',
			name: 'Geotecnologias II',
			ementa: 'Aplicações avançadas de sensoriamento remoto e sistemas de informações geográficas. Monitoramento de áreas agrícolas. Integração e disponibilização de dados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA665'],
			color: '#8D6080',
			obligatory: false
		},
		'FA055': {
			code: 'FA055',
			name: 'Qualidade da Água em Bacias Hidrográficas',
			ementa: 'A ocorrência da água na natureza. Usos da água. Características físicas, químicas e biológicas. Principais alterações antropogênicas da qualidade da água. Movimento dos contaminantes no meio ambiente. Poluição por cargas difusas. Qualidade da água em rios: o processo de autodepuração. Monitoramento da qualidade da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA786'],
			color: '#629774',
			obligatory: false
		},
		'FA056': {
			code: 'FA056',
			name: 'Modelagem Hidrológica',
			ementa: 'Simulação no gerenciamento de recursos hídricos. Simulação dos processos físicos do ciclo hidrológico. Modelos chuva-vazão. Estudo de casos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA786'],
			color: '#629774',
			obligatory: false
		},
		'FA057': {
			code: 'FA057',
			name: 'Limnologia - Dinâmica da Água em Reservatórios',
			ementa: 'Dispersão de poluentes em reservatórios. Dinâmica de reservatórios. Processo de eutrofização dos lagos e sua avaliação. Dinâmica da qualidade de água reservatórios. Poluição por cargas difusas. Influência dos defensivos agrícolas nos lagos. Monitoramento da qualidade da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA786'],
			color: '#629774',
			obligatory: false
		},
		'FA058': {
			code: 'FA058',
			name: 'Instalações Hidráulicas em Edificações Rurais',
			ementa: 'Instalação de água fria. Instalação de água quente. Tipos de aquecedores. Instalação de águas pluviais. Aproveitamento de águas pluviais. Instalação de esgoto sanitário. Introdução ao reuso de esgoto. Projetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA676'],
			color: '#53B953',
			obligatory: false
		},
		'FA059': {
			code: 'FA059',
			name: 'Práticas de Hidráulica Aplicadas à Engenharia',
			ementa: 'Introdução aos princípios básicos de medidas. Medidores de pressão. Medidores de vazão. Experiência de Reynolds. Demonstração do Teorema de Bernoulli. Perda de carga distribuída e localizada. Curva característica de bombas. Escoamento em superfície livre. Determinação de energia específica em canais. Cálculo de ressalto hidráulico. Curva de remanso. Métodos de injeção de produtos químicos.',
			semestre: 1,
			vector: {T:0, P:1, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA676'],
			color: '#53B953',
			obligatory: false
		},
		'FA060': {
			code: 'FA060',
			name: 'Desenvolvimento Rural Sustentável',
			ementa: 'Conceitos e teorias de desenvolvimento. O desenvolvimento brasileiro e suas implicações socioambientais. O desafio do desenvolvimento autossustentado. Agricultura sustentada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520'],
			color: '#7946B9',
			obligatory: false
		},
		'FA061': {
			code: 'FA061',
			name: 'Agroecologia e Extensão Rural',
			ementa: 'Conceitos em agroecologia. Processos de transição agroecológica. Implantação e manejo agroecológico. Manejo vegetal e animal de bens ecológicos. Extensão rural no Brasil. Tecnologia social. Métodos participativos para transição agroecológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520'],
			color: '#7946B9',
			obligatory: false
		},
		'FA062': {
			code: 'FA062',
			name: 'Sistemas de Produção na Agricultura Familiar',
			ementa: 'Campesinato e agricultura familiar. A discussão atual sobre a agricultura familiar. A abordagem sistêmica e sua aplicação na agricultura familiar. Políticas públicas para agricultura familiar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520', 'FA720'],
			color: '#7946B9',
			obligatory: false
		},
		'FA063': {
			code: 'FA063',
			name: 'Técnicas Construtivas',
			ementa: 'Introdução e organização do canteiro. Equipamentos. Fundações. Alvenarias. Concretagem. Revestimentos de paredes e pisos. Esquadrias. Coberturas. Vidros. Pintura. Limpeza e Manutenção. Patologia das construções.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA586'],
			color: '#4660B9',
			obligatory: false
		},
		'FA064': {
			code: 'FA064',
			name: 'Estruturas Pré-Moldadas de Concreto',
			ementa: 'Introdução e histórico das construções pré-moldadas. Pré-moldagem, pré-fabricação. Elementos estruturais pré-moldados, vigas, pilares e lajes. Noções básicas de protensão. Dimensionamento de lajes pré-moldadas. Dentes Gerber e consolos. Aparelhos de apoio. Juntas. Cálices dos elementos de fundações e grauteamento. Sistema Tilt-up. Transporte e montagem das construções pré-moldadas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA782'],
			color: '#807399',
			obligatory: false
		},
		'FA065': {
			code: 'FA065',
			name: 'Materiais Alternativos para Construções Rurais',
			ementa: 'Introdução. Solo e suas aplicações na construção. Argamassa armada. Aproveitamento de resíduos agroindustriais na construção. Bambu: características e aplicações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA586'],
			color: '#4660B9',
			obligatory: false
		},
		'FA066': {
			code: 'FA066',
			name: 'Avaliação de Terras Para Fins Agrícolas',
			ementa: 'Planejamento do uso das terras para fins agrícolas. Levantamento e Interpretação de levantamento de solos para fins agrícolas. Conceitos básicos em avaliação de terras. Necessidades de dados em avaliação de terras. Metodologia FAO de avaliação da aptidão agrícola. Sistema de avaliação da aptidão agrícola das terras (Brasil). Classificação da capacidade da terra. Aplicações. Estudos de caso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA622', 'FA665'],
			color: '#7F6B8A',
			obligatory: false
		},
		'FA067': {
			code: 'FA067',
			name: 'Fertilidade do Solo e Adubação',
			ementa: 'Fertilidade de solos no Brasil. Princípios e conceitos de fertilidade do solo. Avaliação da fertilidade do solo. Amostragem do solo para fins de recomendação de adubação e calagem. Análises de solos e sua interpretação. Acidez e calagem. Macro e micronutrientes. Matéria orgânica. Recomendações de adubação e calagem. Adubação foliar.',
			semestre: 1,
			vector: {T:0, P:1, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481'],
			color: '#6046B9',
			obligatory: false
		},
		'FA068': {
			code: 'FA068',
			name: 'Erosão Acelerada do Solo e seu Controle',
			ementa: 'Erosão geológica e erosão acelerada do solo. Agentes e tipos de erosão. Erosão hídrica. Métodos de estimativa de erosão hídrica. Equação universal de perdas de solo. Tolerância de perdas de solo. Práticas de controle da erosão do solo. Aspectos da legislação em conservação do solo e da água.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA983'],
			color: '#608887',
			obligatory: false
		},
		'FA069': {
			code: 'FA069',
			name: 'Organização e Análise Ergonômica do Trabalho',
			ementa: 'Trabalho e Organizações. Funções Administrativas. Organização do Trabalho. Administração Científica do Trabalho. Organizações no Mundo Contemporâneo. Balanced Theory of Job Design. Sistemas de Trabalho. Ergonomia: Método e Técnica. Demanda, Tarefa e Atividade. Análise Ergonômica do Trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA270'],
			color: '#B96046',
			obligatory: false
		},
		'FA073': {
			code: 'FA073',
			name: 'Interação Mecânica Máquina-Planta',
			ementa: 'Estrutura do material vegetal. Ensaios mecânicos em órgãos vegetais. Desempenho de qualidade no corte. Cilindros destacadores. Ruptura e danos causados por vibração. Efeitos viscoelásticos. Deformação específica limite. Avaliação temporal de firmeza. Força de destacamento. Medidas de qualidade através de recuperação elástica.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA880'],
			color: '#71918E',
			obligatory: false
		},
		'FA074': {
			code: 'FA074',
			name: 'Tecnologia em Agricultura de Precisão',
			ementa: 'O conceito da agricultura de precisão. Sistemas de posicionamento global. Monitoramento da produtividade das culturas e variabilidade espacial de atributos. Sistemas de informação geográfica. Aplicação localizada de insumos a taxas variadas e tomada de decisões.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94679',
			obligatory: false
		},
		'FA075': {
			code: 'FA075',
			name: 'Teoria de Controle Aplicada',
			ementa: 'Modelos matemáticos de sistemas físicos. Transformadas de Laplace. Funções de transferência. Tempo morto e linearização. Comportamento de sistemas dinâmicos. Estabilidade. Projeto e análise de sistemas de controle. Utilização de softwares.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA474'],
			color: '#6A969A',
			obligatory: false
		},
		'FA076': {
			code: 'FA076',
			name: 'Automação de Processos',
			ementa: 'Automoção e controle de processos contínuos e discretos. Lógica combinacional e sequencial. Controladores lógicos programáveis e aplicações.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA075'],
			color: '#6A969A',
			obligatory: false
		},
		'FA080': {
			code: 'FA080',
			name: 'Desenho Aplicado a Projeto de Máquinas Agrícolas',
			ementa: 'Desenhos de elementos de máquinas (sistemas de transmissão, mancais, conexões, etc.) parametrizados utilizando recursos assistidos por computador. Desenho em conjunto, detalhamento de conjunto. Montagem e animação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA173'],
			color: '#B97946',
			obligatory: false
		},
		'FA081': {
			code: 'FA081',
			name: 'Mecanização Agrícola Aplicada a Culturas Comerciais',
			ementa: 'Tratores agrícolas. Máquinas e implementos para preparo de solo. Pulverizadores: máquinas para semeadura, adubação, cultivo e colheita para as culturas do amendoim, arroz, café, cana-de-açúcar, feijão, laranja, milho e soja.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA983'],
			color: '#608887',
			obligatory: false
		},
		'FA082': {
			code: 'FA082',
			name: 'Estratégia e Gestão de Empresas Agropecuárias',
			ementa: 'O atual contexto das empresas agropecuárias. Estruturação do planejamento estratégico nas empresas agropecuárias. Aspectos organizacionais das empresas agropecuárias. Processo gerencial nas empresas agropecuárias. Controle e avaliação de desempenho nas empresas agropecuárias.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#ACB946',
			obligatory: false
		},
		'FA083': {
			code: 'FA083',
			name: 'Gestão de Processos no Agronegócio',
			ementa: 'Gestão por processos. Processos. Ferramentas para gestão de processos (IDEFO, PDCA, QFD, BSC, ABC).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9AC46',
			obligatory: false
		},
		'FA084': {
			code: 'FA084',
			name: 'Introdução à Mineração de Dados: Conceitos e Aplicações na Agricultura',
			ementa: 'Processo de Descoberta de Conhecimento em Banco de Dados (KDD): Pré-Processamento (Preparação) dos Dados, Mineração (Técnicas) dos Dados e Pós-Processamento (Avaliação) do Conhecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA374'],
			color: '#807D9D',
			obligatory: false
		},
		'FA085': {
			code: 'FA085',
			name: 'Zootecnia de Precisão',
			ementa: 'Introdução ao uso de processos eletrônicos de coleta e administração de informações relativas a produção animal (avicultura, suinocultura de leite em clima tropical). Uso de identificação eletrônica para rastreabilidade e estudo do comportamento do animal. Uso de modelagens para extração de conhecimento, modelos preditivos e simulações de sistemas de climatização na produção animal. Aplicações nas diversas cadeias de produção de carne, leite e ovos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA473'],
			color: '#93B946',
			obligatory: false
		},
		'FA086': {
			code: 'FA086',
			name: 'Logística Agrícola e Agroindustrial I',
			ementa: 'Introdução à logística agrícola e agroindustrial e conceitos relacionados. Tipos de Logística. Cadeia de suprimentos, cadeia de valor e sistema logístico. Caracterização dos sistemas de transporte. Armazenagem, manuseio e acondicionamento de produtos. Localização de depósitos e de instalações de armazenagem. Estoques. Gestão logística. Indicadores de desempenho Logístico. Custos e Investimentos Logísticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AC46B9',
			obligatory: false
		},
		'FA087': {
			code: 'FA087',
			name: 'Logística Agrícola e Agroindustrial II',
			ementa: 'Aplicações de logística na agricultura e na agroindústria. Modelagem de sistemas Logísticos. Modelagem de transporte. Sistemas de controle de estoques. Sistemas de suporte à tomada de decisão na logística agrícola e agroindustrial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA086'],
			color: '#AC46B9',
			obligatory: false
		}
	}
};

export default catalogue;
