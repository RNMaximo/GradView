const catalogue = {
	totalCredits: 282,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CV111', 'CV151', 'CV101', 'CV141', 'QG102', 'MA111', 'MA141', 'MC102']
		},
		'sem-2': {
			id: '2',
			subjects: ['GM420', 'MA211', 'CV201', 'CV202', 'ME203', 'F_129', 'F_128']
		},
		'sem-3': {
			id: '3',
			subjects: ['CV311', 'CV312', 'CV351', 'CV321', 'CV332', 'CV301', 'MS211', 'F_229']
		},
		'sem-4': {
			id: '4',
			subjects: ['CV422', 'CV411', 'CV431', 'CV450', 'CV402', 'F_329', 'CV421', 'F_328', 'CV401']
		},
		'sem-5': {
			id: '5',
			subjects: ['CV521', 'CV511', 'CV522', 'CV501', 'CV541', 'CV531', 'CV532', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['CV612', 'CV613', 'CV621', 'CV622', 'CV631', 'CV632', 'CV633', 'CV641', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CV712', 'CV713', 'CV721', 'CV714', 'CV702', 'CV722', 'CV701', 'CV741']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'CV813', 'CV814', 'CV823', 'CV811', 'CV832', 'CV821', 'CV812', 'CV822', 'CV831', 'CV841']
		},
		'sem-9': {
			id: '9',
			subjects: ['CV951', 'CV954', 'CV941', 'CV942', 'CV945']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'CV955', 'CV944', 'CV943']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 9,
			hasRestrictions: true,
			subjects: ['CV040', 'CV041', 'CV042', 'CV044', 'CV045', 'CV046', 'CV047', 'CV048', 'CV049', 'CV069', 'CV940', 'CV946', 'CV947', 'CV948', 'CV949', 'CV952', 'CV953'],
		},
		'elet-2': {
			credits: 7,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['HZ291', 'HZ292', 'HZ293'],
		},
	},

	subjects: {
		'CV101': {
			code: 'CV101',
			name: 'Desenho Projetivo',
			ementa: 'Introdução aos conceitos básicos do desenho projetivo.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: '',
			color: '#8046B9',
			obligatory: true
		},
		'CV111': {
			code: 'CV111',
			name: 'Sistemas Estruturais',
			ementa: 'Noções fundamentais sobre a Engenharia Estrutural. Sistemas estruturais: descrição e estudo dos tipos de Sistemas Estruturais.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#67B946',
			obligatory: true
		},
		'CV141': {
			code: 'CV141',
			name: 'Química para Engenharia Civil',
			ementa: 'Estequiometria. Ácidos e Bases. Equilíbrio Químico. Oxidação e Redução. Reações de Precipitação. Corrosão. Química dos Materiais. Água. Atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: '',
			color: '#98B946',
			obligatory: true
		},
		'CV151': {
			code: 'CV151',
			name: 'Introdução à Engenharia Civil',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos da Engenharia. Origem e evolução da Engenharia Civil. A Engenharia Civil brasileira. A Faculdade de Engenharia Civil, Arquitetura e Urbanismo e a estrutura curricular do curso da Unicamp. O empreendimento de Engenharia e suas fases. Estudos de casos nas diferentes áreas. Visitas de campo. Atribuições profissionais e perspectivas do mercado de trabalho.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#466FB9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#4688B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99046',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A846',
			obligatory: true
		},
		'CV201': {
			code: 'CV201',
			name: 'Desenho Assistido por Computador',
			ementa: 'Apresentação de uma ferramenta de desenho e projeto assistido por computador.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV101'],
			color: '#8046B9',
			obligatory: true
		},
		'CV202': {
			code: 'CV202',
			name: 'Material de Construção Civil I',
			ementa: 'Introdução ao estudo dos materiais de construção. Propriedades dos materiais. Pedras naturais para revestimento. Agregados para argamassas e concretos. Aglomerantes minerais: gesso, cal, cimento Portland. Argamassas. Proporcionamento de argamassas. Materiais cerâmicos. Aços para concreto armado. Aço para concreto protendido.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV141', 'QG102'],
			color: '#A9B146',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A0B9',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B988',
			obligatory: true
		},
		'GM420': {
			code: 'GM420',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra (geosfera, atmosfera, hidrosfera, biosfera e antroposfera) ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B946A8',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#808C80',
			obligatory: true
		},
		'ME203': {
			code: 'ME203',
			name: 'Estatística Elementar',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Variáveis aleatórias. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#4688B9',
			obligatory: true
		},
		'CV301': {
			code: 'CV301',
			name: 'Física para Engenharia Civil',
			ementa: 'Temperatura e Dilatação. Calorimetria e transferência de calor. Termodinâmica. Aplicações ao conforto térmico de ambientes. Elasticidade. Ondas em meios materiais. Propagação de ondas. Corpos vibrantes. Fenômenos acústicos. Aplicações ao conforto acústico de ambientes. Natureza e propagação da luz. Conceitos de iluminação e fotometria. Lentes e instrumentos óticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'F_129', 'MA111'],
			color: '#46A0A9',
			obligatory: true
		},
		'CV311': {
			code: 'CV311',
			name: 'Cálculo para Engenharia Civil',
			ementa: 'Espaços vetoriais e subespaços. Base e dimensão. Transformações lineares. Fundamentos de equações diferenciais. Autovalores e autovetores de matrizes. Equações homogêneas e não homogêneas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*MA211'],
			color: '#808C80',
			obligatory: true
		},
		'CV312': {
			code: 'CV312',
			name: 'Mecânica Geral',
			ementa: 'Fundamentos da mecânica newtoniana. Estática dos pontos materiais. Sistemas de partículas. Estática dos corpos rígidos. Centróides, baricentros e momentos de inércia. Análise de estruturas. Atrito.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#80B946',
			obligatory: true
		},
		'CV321': {
			code: 'CV321',
			name: 'Topografia e Geodésia I',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas). Planimetria (medições de distâncias e ângulos; taqueometria, topometria). Altimetria. Métodos de representação do relevo. Locação de obras de engenharia.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV101'],
			color: '#8046B9',
			obligatory: true
		},
		'CV332': {
			code: 'CV332',
			name: 'Materiais de Construção Civil II',
			ementa: 'Propriedades do concreto fresco. Concreto: preparo, transporte, lançamento, adensamento e cura. Propriedades do concreto endurecido. Aditivos. Dosagem. Controle Tecnológico do concreto. Ensaios não destrutivos. Materiais luminosos. Madeiras. Tintas e vernizes. Vidros. Plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV202'],
			color: '#A9B146',
			obligatory: true
		},
		'CV351': {
			code: 'CV351',
			name: 'Introdução à Economia',
			ementa: 'Objetivo e conceitos da economia. Noções de macroeconomia e de microeconomia. Evolução do pensamento econômico. Noções de produção, preço e lucro. Engenharia econômica: juros e equivalência. Análise de investimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94677',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#46ADA1',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#93756C',
			obligatory: true
		},
		'CV401': {
			code: 'CV401',
			name: 'Administração Aplicada à Empresas de Construção',
			ementa: 'Teorias de administração. Princípios de administração. As funções de planejamento e controle. Administração de produção, financeira, pessoal e suprimentos. Noções de contabilidade e balanço.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV351'],
			color: '#B94677',
			obligatory: true
		},
		'CV402': {
			code: 'CV402',
			name: 'Projeto Arquitetônico',
			ementa: 'Fases de elaboração do projeto arquitetônico. Características do sítio urbano/uso e ocupação do solo. Implantação e localização. Programa de necessidades. Isolação. Ventilação natural. Iluminação natural. Condições de compartimentos. Circulação. Noções básicas de projeto.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', '*CV321'],
			color: '#8046B9',
			obligatory: true
		},
		'CV411': {
			code: 'CV411',
			name: 'Mecânica dos Sólidos I',
			ementa: 'Esforços solicitantes. Tração, compressão. Lei de Hooke. Flexão geral. Linha elástica',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV111', '*CV312'],
			color: '#74B946',
			obligatory: true
		},
		'CV421': {
			code: 'CV421',
			name: 'Topografia e Geodésia II',
			ementa: 'Introdução (NBR 13.133 e NBR 14.144). Terraplenagem. Teoria dos erros. Geodésia. Astronomia de Posição. Cartografia (Sistemas de Projeções; Sistema Universal de Mercator - UTM). Geodésia por satélite (Sistema de Posicionamento Global - GPS). Geoprocessamento. Fotogrametria.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV321'],
			color: '#8046B9',
			obligatory: true
		},
		'CV422': {
			code: 'CV422',
			name: 'Introdução à Pesquisa Operacional',
			ementa: 'Introdução a problemas de otimização e suas propriedades básicas. Problemas de otimização irrestritos e com restrição. Programação linear, formulação, solução geométrica, o método simplex, dualidade e interpretação econômica.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV311'],
			color: '#808C80',
			obligatory: true
		},
		'CV431': {
			code: 'CV431',
			name: 'Mecânica dos Fluidos',
			ementa: 'Noções fundamentais. Lei de viscosidade. Tensão num ponto. Estática dos fluidos. Medidas de pressão. Cinemática. Dinâmica. Análise dimensional e semelhanças. Efeitos de viscosidade no movimento de fluidos.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['MA211', '*CV312'],
			color: '#80A363',
			obligatory: true
		},
		'CV450': {
			code: 'CV450',
			name: 'Metodologia Científica e Redação Científica',
			ementa: 'Como organizar um TFC: escolha de tema, organização de revisão bibliográfica, fichamento, elaboração de um anteprojeto. Estruturas do trabalho: introdução, desenvolvimento, conclusão. Uniformização redacional segundo recomendações da ABNT.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B9465F',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#6C9393',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#46A1A1',
			obligatory: true
		},
		'CV501': {
			code: 'CV501',
			name: 'Planejamento Urbano',
			ementa: 'Origens, históricos e conceitos básicos do planejamento urbano. Objetivos, teorias e métodos do planejamento urbano. O plano diretor, os seus levantamentos, análises, a sua elaboração e implantação. Aspectos específicos e técnicos de setores urbanos. Equipamento, infraestrutura e serviços.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV402'],
			color: '#8046B9',
			obligatory: true
		},
		'CV511': {
			code: 'CV511',
			name: 'Mecânica dos Sólidos II',
			ementa: 'Tensão. Deformação. Energia de deformação. Torção. Teoremas de energia. Flambagem. Critérios de resistência.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV311', 'CV312', '*CV411'],
			color: '#7CAA59',
			obligatory: true
		},
		'CV521': {
			code: 'CV521',
			name: 'Geotecnia I',
			ementa: 'Classificação dos solos. Pressões totais, neutras e efetivas. Distribuição de pressões no solo. Permeabilidade. Compactação.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GM420'],
			color: '#B946A8',
			obligatory: true
		},
		'CV522': {
			code: 'CV522',
			name: 'Técnica dos Transportes',
			ementa: 'Sistemas de transporte. Modalidade. Características gerais e específicas de rodovias, ferrovias, aquavias e dutovias. Estudo comparativo das modalidades, resistência ao movimento, desempenho técnico, capacidade de flexibilidade de atendimento. Integração intermodal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV351'],
			color: '#B94677',
			obligatory: true
		},
		'CV531': {
			code: 'CV531',
			name: 'Engenharia Hidráulica',
			ementa: 'Movimento uniforme em canais. Energia específica. Ressalto hidráulico. Movimento gradualmente variado. Orifícios, bocais, vertedores, tubos curtos, hidrometria, calhas. Escoamentos em tubulações. Condutos equivalentes. Séries. Paralelo. Redes ramificadas e malhadas. Bombas, curvas e associações, cavitação. Bueiros. Tipos de barragens. Obras de transportes. Vertedores de superfície. Dissipação de energia. Desvios de rios.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['*CV431'],
			color: '#80A363',
			obligatory: true
		},
		'CV532': {
			code: 'CV532',
			name: 'Eletrotécnica e Energia',
			ementa: 'Noções de corrente alternada. Aterramento. Sistemas monofásicos e trifásicos. Fator de potência. Transformadores. Motores elétricos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_329', '*F_328'],
			color: '#599A9A',
			obligatory: true
		},
		'CV541': {
			code: 'CV541',
			name: 'Qualidade Sanitária do Meio',
			ementa: 'Legislação em saneamento. Qualidade de águas de mananciais x tecnologias de tratamento. Características dos esgotos e padrões de emissão x tecnologias de tratamento. Caracterização de resíduos sólidos x tecnologias de manejo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:1, HS:6, SL:4, C:5},
			requisitos: ['CV141', 'QG102'],
			color: '#A9B146',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CV612': {
			code: 'CV612',
			name: 'Teoria das Estruturas I',
			ementa: 'Princípio dos trabalhos virtuais. Deslocamentos de estruturas lineares. Processo dos esforços: treliças, grelhas, pórticos e arcos. Linhas de influência de estruturas isostáticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CV411', '*CV511'],
			color: '#78B250',
			obligatory: true
		},
		'CV613': {
			code: 'CV613',
			name: 'Estruturas de Madeira',
			ementa: 'A árvore. Propriedades físicas e mecânicas. Estados limites. Compressão simples. Instabilidade. Tração. Cisalhamento. Elementos para projetos de coberturas. Ligações: sambladuras, pregos e parafusos. Flexão simples e composta. Escoamento de valas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV511'],
			color: '#7CAA59',
			obligatory: true
		},
		'CV621': {
			code: 'CV621',
			name: 'Geotecnia II',
			ementa: 'Adensamento e compressibilidade. Resistência ao cisalhamento dos solos. Estabilidade de taludes. Empuxos. Estruturas de arrimo.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV521', '*CV511'],
			color: '#9B7881',
			obligatory: true
		},
		'CV622': {
			code: 'CV622',
			name: 'Estradas I',
			ementa: 'Planejamento. Planos rodoviários. Federal e Estadual. Projeto geométrico de rodovias e ferrovias. Escolha de traçados. Elaboração de projeto geométrico de rodovia. Segurança e dispositivos de conexão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV201', 'CV321', 'CV522', '*CV421'],
			color: '#8E46A9',
			obligatory: true
		},
		'CV631': {
			code: 'CV631',
			name: 'Sistemas Elétricos Prediais',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica. Materiais elétricos. Proteção e comando de circuitos elétricos. Luminotécnica. Luz artificial e natural. Projeto de instalações elétricas. Instalações de para-raios. TV, som e telefone. Introdução à instalação de motores.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV532'],
			color: '#6D70AA',
			obligatory: true
		},
		'CV632': {
			code: 'CV632',
			name: 'Hidrologia Básica',
			ementa: 'Ciclo hidrológico, bacia hidrográfica, precipitações, escoamento superficial, infiltração, evaporação e transpiração. Águas subterrâneas. Medições de vazão. Previsão de enchentes por métodos determinísticos (hidrogramas unitários), probabilísticos (Gumbel, Gumbel-chow, log-Pearson tipo III, log Normal, GRADEX, etc). Regularização de vazões. Amortecimento de cheias em reservatórios. Propagação de Enchentes em Canais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*CV531', '*ME203', '*MC102'],
			color: '#807B76',
			obligatory: true
		},
		'CV633': {
			code: 'CV633',
			name: 'Técnicas Construtivas I',
			ementa: 'Introdução às técnicas e processos construtivos. Mão de obra. Canteiro e locação de obras. Execução e detalhes de construção: fundações convencionais, alvenarias, impermeabilizações, revestimentos e pinturas, esquadrias, ferragens e coberturas usuais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV332'],
			color: '#A9B146',
			obligatory: true
		},
		'CV641': {
			code: 'CV641',
			name: 'Sistemas de Abastecimento de Águas',
			ementa: 'Introdução. Previsão populacional. Consumo de água. Mananciais. Barragens. Captação de água. Bombas e estações elevatórias. Adução de água. Reservatórios de distribuição. Redes de distribuição. Projeto.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:1, D:1, HS:5, SL:3, C:4},
			requisitos: ['CV531', '*CV541'],
			color: '#95AA55',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CV701': {
			code: 'CV701',
			name: 'Planejamento e Controle de Empreendimentos',
			ementa: 'Conceitos fundamentais e organização de empreendimentos. O gerenciamento no canteiro de obras. Fases e operação da construção civil, estruturas organizacionais para o gerenciamento de operações. Orçamentos e BDI. Programação de atividades: metodologia, sistemática de programação, técnicas determinísticas e probabilísticas. Acompanhamento e controle operacional.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME203', '*CV401'],
			color: '#806798',
			obligatory: true
		},
		'CV702': {
			code: 'CV702',
			name: 'Sistemas Prediais, Hidráulico-Sanitários e Gás I',
			ementa: 'Sistemas prediais de água fria, quente, combate a incêndio com hidrantes e extintores, esgoto sanitário, água pluvial e gás combustível: conceituação, critérios de projeto e normalização. Conservação de água em edifícios: conceitos fundamentais.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV531', '*CV632'],
			color: '#807786',
			obligatory: true
		},
		'CV712': {
			code: 'CV712',
			name: 'Teoria das Estruturas II',
			ementa: 'Coeficientes relativos às barras e cargas. Processo dos deslocamentos: manual e matricial. Simplificações de simetria. Linhas de influência de estruturas hiperestática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['CV511', '*CV612'],
			color: '#7AAE55',
			obligatory: true
		},
		'CV713': {
			code: 'CV713',
			name: 'Estruturas Metálicas I',
			ementa: 'Coeficientes de ponderação de cargas. Dimensionamento de barras sob cargas axiais de tração e compressão de barras com perfil laminado. Dimensionamento de barras sob cargas de flexão ou de flexo-compressão com perfil laminado. Dimensionamento de ligações parafusadas e/ou soldadas sob cargas axiais e/ou de flexões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV511', '*CV612'],
			color: '#7AAE55',
			obligatory: true
		},
		'CV714': {
			code: 'CV714',
			name: 'Estruturas de Concreto Armado I',
			ementa: 'Fundamentos do concreto armado. Principais elementos estruturais. Desenhos de fôrmas. Dimensionamento nos estados limites últimos. Lajes e vigas. Verificação dos estados limites de serviços.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV511', '*CV332', '*CV612'],
			color: '#8AAF50',
			obligatory: true
		},
		'CV721': {
			code: 'CV721',
			name: 'Fundações',
			ementa: 'Norma de fundações. Tipos de fundações. Interação solo-fundação. Investigação do subsolo. Capacidade de carga de fundação direta. Recalque de fundação direta. Influência das dimensões das fundações. Dimensionamento de fundação direta. Capacidade de carga de fundação profunda. Dimensionamento de fundação profunda. Provas de carga. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV521', 'CV621'],
			color: '#AA5F95',
			obligatory: true
		},
		'CV722': {
			code: 'CV722',
			name: 'Estradas II',
			ementa: 'Serviços de terraplenagem. Equipamentos de terraplenagem. Produção dos equipamentos. Sistemas de drenagem. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV421', '*CV622', '*CV632'],
			color: '#85589D',
			obligatory: true
		},
		'CV741': {
			code: 'CV741',
			name: 'Sistemas de Esgotamento Hídrico: Sanitário e Pluvial',
			ementa: 'Sistemas de esgoto. Tipos de sistemas. Características do líquido a esgotar. Tipos de traçados. Partes constituintes. Quantidade de líquido a esgotar. Hidráulica de rede. Carga sobre tubos. Drenagem de águas pluviais. Sarjetas. Bocas de lobo. Galerias. Hidráulica e critérios de dimensionamento. Poço de visita. Caixa de ligação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV632', 'CV641'],
			color: '#8B9366',
			obligatory: true
		},
		'CV811': {
			code: 'CV811',
			name: 'Estruturas de Concreto Protendido I',
			ementa: 'Conceitos de protenção aplicada ao concreto: materiais e sistemas de protenção. Determinação das forças de protensão. Estados limites de serviços e últimos. Análise das tensões ao longo do vão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#8AAF50',
			obligatory: true
		},
		'CV812': {
			code: 'CV812',
			name: 'Estruturas de Pontes',
			ementa: 'Pontes de concreto: definições, nomenclatura, classificação. Ações. Pontes em vigas. Lajes dos tabuleiros das pontes em vigas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#8AAF50',
			obligatory: true
		},
		'CV813': {
			code: 'CV813',
			name: 'Estruturas Metálicas II',
			ementa: 'Introdução. Traves em treliças. Estrutura para coberturas em duas águas. Estrutura para coberturas tipo shed. Estrutura para coberturas em arco. Estrutura para edifícios industriais com ponte rolante. Projeto completo de um telhado em estrutura treliçada de aço.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV612', '*CV712', '*CV713'],
			color: '#79AF53',
			obligatory: true
		},
		'CV814': {
			code: 'CV814',
			name: 'Estruturas de Concreto Armado II',
			ementa: 'Dimensionamento de seções retangulares submetidas à flexo-compressão, normal e oblíqua. Pilares e fundações. Verificação dos efeitos globais de 2ª ordem. Escadas, consolos curtos, vigas-parede e reservatórios comuns de edifícios.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV612', '*CV714', '*CV712'],
			color: '#7FB052',
			obligatory: true
		},
		'CV821': {
			code: 'CV821',
			name: 'Economia dos Transportes',
			ementa: 'Conceitos e métodos de planejamento e economia de transportes. Moldagem de demanda e oferta. Custos e tarifas. Mercados e competitividade. Avaliação econômica e operacional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: ['CV522'],
			color: '#B94677',
			obligatory: true
		},
		'CV822': {
			code: 'CV822',
			name: 'Estradas III',
			ementa: 'Pavimentação. Estudos de solos para Rodovias. Agregados. Asfaltos. Pavimentos Rígidos. Métodos de dimensionamento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV722'],
			color: '#85589D',
			obligatory: true
		},
		'CV823': {
			code: 'CV823',
			name: 'Aeroportos',
			ementa: 'Transporte aéreo. Planejamento e projeto de aeroportos, localização, comprimento de pista, características físicas. Zoneamento e proteção ao voo. Dimensionamento de pavimentos para aeroportos. Planejamento e projeto da área terminal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV522', 'CV622'],
			color: '#A44690',
			obligatory: true
		},
		'CV831': {
			code: 'CV831',
			name: 'Regulamentações da Engenharia Civil',
			ementa: 'Noções de Direito Civil. Direito de propriedade. A Construção Civil e sua disciplina no Código Civil. Código do Consumidor. A legislação profissional e as de interesse dos Engenheiros Civis. Problemas profissionais. Noções sobre licitação. Cadastramento. Propostas e Contratos para a Construção Civil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#9846B9',
			obligatory: true
		},
		'CV832': {
			code: 'CV832',
			name: 'Portos, Rios e Canais',
			ementa: 'Noções de comércio internacional. Evolução das embarcações e sua adequação às rotas comerciais. Planejamento de porto. Arranjo e projeto das principais obras de operação e de proteção. Noções de oceanografia. Estudo de vento, marés e ondas em mares e lagos. Estudo das vias navegáveis. Regularização e canalização. Projeto de obras de transposição de desnível.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV531', '*CV632'],
			color: '#808F6D',
			obligatory: true
		},
		'CV841': {
			code: 'CV841',
			name: 'Ecologia Aplicada à Engenharia Civil',
			ementa: 'Engenharia Civil e a questão ambiental. Análise de impactos resultantes de obras civis. Avaliação de impactos ambientais resultantes de ações de engenharia civil no território.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA460'],
			color: '#6746B9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CV941': {
			code: 'CV941',
			name: 'Laboratório de Saneamento',
			ementa: 'Segurança e boas práticas em laboratório. Importância e metodologias de determinação dos principais parâmetros físicos, químicos e bacteriológicos para caracterização de águas de abastecimento e águas residuais.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV141', 'QG102'],
			color: '#A9B146',
			obligatory: true
		},
		'CV942': {
			code: 'CV942',
			name: 'Tratamento de Águas para Abastecimento',
			ementa: 'Qualidade da água. Coagulação. Mistura rápida. Floculação. Decantação. Filtração. Desinfecção. Fluoretação.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: true
		},
		'CV945': {
			code: 'CV945',
			name: 'Gestão em Saneamento Ambiental',
			ementa: 'Licenciamento ambiental. Manejo urbano de recursos naturais. Redes técnicas de saneamento. Sustentabilidade socioambiental.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV541', 'CV841'],
			color: '#887C80',
			obligatory: true
		},
		'CV951': {
			code: 'CV951',
			name: 'Estágio Supervisionado',
			ementa: 'Técnicas de execução de obras ou projetos em empresa.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480'],
			color: '#4EB946',
			obligatory: true
		},
		'CV954': {
			code: 'CV954',
			name: 'Trabalho Final de Curso I',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA480', 'CV450'],
			color: '#B9465F',
			obligatory: true
		},
		'CV943': {
			code: 'CV943',
			name: 'Tratamento de Esgotos e Efluentes Industriais',
			ementa: 'Características dos esgotos domésticos. Tratamento preliminar. Processo biológico de tratamento. Lagoas de estabilização. Tratamento secundário: Iodos ativados e filtração biológica. Decantação. Produção e secagem de Iodo. Digestão e tratamento terciário.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: true
		},
		'CV944': {
			code: 'CV944',
			name: 'Manejo e Tratamento de Resíduos Sólidos',
			ementa: 'Origem e produção de lixo urbano. Impactos ambientais. Limpeza pública. Serviços especiais. Coleta especial. Sistemas integrados de tratamento de lixo. Resíduos sólidos e poluição, triagem, aterro sanitário, compostagem, incineração, pirólise, conversão biológica com recuperação de energia; alimentos a partir do lixo doméstico; legislação e normas.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: true
		},
		'CV955': {
			code: 'CV955',
			name: 'Trabalho Final de Curso II',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['CV954'],
			color: '#B9465F',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CV040': {
			code: 'CV040',
			name: 'Seminários em Gestão e Saneamento Ambiental',
			ementa: 'Organização de seminários apresentados por especialistas e/ou pesquisadores convidados a expor sobre temas específicos de interesse em Saneamento e Ambiente. Promover palestras e discussões sobre propostas de pesquisas desenvolvidas pelos pesquisadores da pós-graduação e sobre artigos científicos correlatos recentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#B94690',
			obligatory: false
		},
		'CV041': {
			code: 'CV041',
			name: 'Tópicos em Saneamento Ambiental I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA470'],
			color: '#4657B9',
			obligatory: false
		},
		'CV042': {
			code: 'CV042',
			name: 'Tópicos em Saneamento Ambiental II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA470'],
			color: '#B146B9',
			obligatory: false
		},
		'CV044': {
			code: 'CV044',
			name: 'Controle de Poluição de Água, Solo e Atmosfera',
			ementa: 'Composição e estrutura da atmosfera. Classificação dos poluentes. Fontes e efeitos da poluição. Padrões de qualidade do ar, água e solo. Métodos de controle da poluição; Meteorologia e poluição atmosférica. Melhoramentos de poluentes.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:1, HS:5, SL:3, C:4},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: false
		},
		'CV045': {
			code: 'CV045',
			name: 'Reuso de Águas',
			ementa: 'Processos que afetam o transporte de poluentes nos meios aquáticos. Fontes de Poluição Hídrica. Usos da água na indústria e na agricultura. Estudos de casos envolvendo o reuso de águas, a manutenção de vazões, a recarga de aquíferos, atividades municipais, industriais, agrícolas, domésticas e recreacionais.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: false
		},
		'CV046': {
			code: 'CV046',
			name: 'Tratamento de Lodo de ETE e ETA',
			ementa: 'Características quantitativas e qualitativas dos lodos gerados em ETAs e ETEs. Processos de digestão, condicionamento químico, adensamento, desidratação e disposição de lodos. Tipos de equipamentos e processos usados no tratamento de lodos. Estudos de tratabilidade em laboratório. Exemplos de casos em escala real.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['*CV942'],
			color: '#A9B146',
			obligatory: false
		},
		'CV047': {
			code: 'CV047',
			name: 'Saneamento e Saúde Pública',
			ementa: 'Meio ambiente. Tópicos de meio ambiente. Legislação ambiental e estrutura institucional de meio ambiente em nível federal e estadual. Política de recurso hídrico federal e estadual. EIAs./RIMAs. Saúde pública no Brasil. Aspectos de intervenções da engenharia e arquitetura e no meio ambiente. Saneamento básico e ambiental impactando a saúde pública. Considerações estruturais. Relação qualidade solo, ar e água com saúde e doenças. Ações de saneamento. Controle de vetores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:2, HS:4, SL:2, C:2},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: false
		},
		'CV048': {
			code: 'CV048',
			name: 'Tópicos em Gestão Ambiental I',
			ementa: 'A ementa desta disciplina será oferecida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA470'],
			color: '#4E46B9',
			obligatory: false
		},
		'CV049': {
			code: 'CV049',
			name: 'Tópicos em Gestão Ambiental II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA470'],
			color: '#46B957',
			obligatory: false
		},
		'CV069': {
			code: 'CV069',
			name: 'Limpeza Urbana',
			ementa: 'Resíduos Sólidos Urbanos. Impactos Ambientais. Limpeza Pública. Serviços Especiais. Coleta Especial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['*CV944'],
			color: '#A9B146',
			obligatory: false
		},
		'CV940': {
			code: 'CV940',
			name: 'Gestão Ambiental por Bacias',
			ementa: 'Legislação ambiental e urbana, planejamento ambiental, gestão pública, processos participativos e representação social/percepção. A discussão conceitual será acompanhada de um estudo de caso.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA440'],
			color: '#46B9B9',
			obligatory: false
		},
		'CV946': {
			code: 'CV946',
			name: 'Química Sanitária e Ambiental',
			ementa: 'Fundamentos de química e da qualidade das águas. Produtos químicos utilizados no tratamento de água. Estudos de tratabilidade de águas. Ensaios em aparelhos de jarteste e floteste. Oxidação e Redução. Estequiometria em reações de óxido redução. Cinética de reações. Cloro, hipoclorito e ácido hipocloroso, dióxido de cloro, permanganato de potássio, ozônio, água oxigenada. Subprodutos de oxidação. Custos. Desinfecção.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV141'],
			color: '#98B946',
			obligatory: false
		},
		'CV947': {
			code: 'CV947',
			name: 'Saneamento Aplicado a Casos Específicos',
			ementa: 'Saneamento de habitações. Saneamento de Hospitais. Saneamento de piscinas. Saneamento de praias, logradouros públicos e cemitérios. Saneamento escolar. Higiene dos alimentos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: false
		},
		'CV948': {
			code: 'CV948',
			name: 'Saneamento de Pequenas Comunidades',
			ementa: 'Mananciais abastecedores. Quantidade de água necessária. Proteção sanitária dos mananciais. Desinfecção. Coleta e disposição de despejos. Projeto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV541'],
			color: '#A9B146',
			obligatory: false
		},
		'CV949': {
			code: 'CV949',
			name: 'Aspectos Legais e Institucionais em Saneamento e Ambiente',
			ementa: 'Meio ambiente. Tópicos de meio ambiente. Legislação ambiental e estrutura institucional de meio ambiente em nível federal e estadual. Política de recursos hídricos federal e estadual. EIAs/RIMAs. Saúde pública no Brasil. Aspectos de intervenções da engenharia e arquitetura e no meio ambiente. Saneamento básico e ambiental impactando a saúde pública. Considerações estruturais. Relação qualidade solo, ar e água com saúde e doenças. Ações de saneamento. Controle de vetores.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV541', '*CV841'],
			color: '#887C80',
			obligatory: false
		},
		'CV952': {
			code: 'CV952',
			name: 'Iniciação Científica em Engenharia Civil I',
			ementa: 'A ser definida em função de pesquisas em que o aluno se engajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B1B946',
			obligatory: false
		},
		'CV953': {
			code: 'CV953',
			name: 'Iniciação Científica em Engenharia Civil II',
			ementa: 'A ser definida em função de pesquisas em que o aluno se angajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46B96F',
			obligatory: false
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia. Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A0',
			obligatory: false
		},
		'HZ292': {
			code: 'HZ292',
			name: 'Tópicos Especiais de Humanidades II',
			ementa: 'Filosofia da ciência. Elementos de sociologia. Sociologia rural. Antropologia. Deontologia.Obs.: Sendo uma disciplina reservada aos cursos de engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97746',
			obligatory: false
		},
		'HZ293': {
			code: 'HZ293',
			name: 'Tópicos Especiais de Humanidades III',
			ementa: 'O curso abordará a análise dos aspectos sociais das inovações tecnológicas e da pesquisa científica. No decorrer das exposições e seminários, serão desenvolvidas análises de casos precisos, tentando incorporar um quadro de referência comparativo entre a sociedade brasileira e o contexto internacional.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95F46',
			obligatory: false
		}
	}
};

export default catalogue;
