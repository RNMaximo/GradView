const catalogue = {
	totalCredits: 286,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CV101', 'CV111', 'CV141', 'CV151', 'MA111', 'MA141', 'MC102', 'QG102']
		},
		'sem-2': {
			id: '2',
			subjects: ['CV201', 'CV202', 'F_128', 'F_129', 'GM420', 'MA211', 'MA327', 'ME414']
		},
		'sem-3': {
			id: '3',
			subjects: ['CV301', 'CV312', 'CV321', 'CV332', 'CV351', 'F_229', 'MA311', 'MS211']
		},
		'sem-4': {
			id: '4',
			subjects: ['CV401', 'CV402', 'CV411', 'CV421', 'CV422', 'CV431', 'CV450', 'F_328', 'F_329']
		},
		'sem-5': {
			id: '5',
			subjects: ['CV501', 'CV511', 'CV521', 'CV522', 'CV531', 'CV532', 'CV541', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['CV612', 'CV613', 'CV621', 'CV622', 'CV631', 'CV632', 'CV633', 'CV641', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CV701', 'CV702', 'CV712', 'CV713', 'CV714', 'CV721', 'CV722', 'CV741']
		},
		'sem-8': {
			id: '8',
			subjects: ['CV811', 'CV812', 'CV813', 'CV814', 'CV821', 'CV822', 'CV823', 'CV831', 'CV832', 'CV841', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['CV911', 'CV912', 'CV916', 'CV954', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['CV951', 'CV955', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['CV010', 'CV011', 'CV012', 'CV013', 'CV014', 'CV015', 'CV016', 'CV017', 'CV018', 'CV019', 'CV064', 'CV065', 'CV066', 'CV067', 'CV070', 'CV071', 'CV072', 'CV073', 'CV074', 'CV075', 'CV091', 'CV092', 'CV910', 'CV913', 'CV914', 'CV915', 'CV917', 'CV918', 'CV919', 'CV952', 'CV953', 'CV965', 'CV966', 'CV967', 'CV969', 'CV970', 'CV971', 'CV972'],
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
			color: '#4073D9',
			obligatory: true
		},
		'CV111': {
			code: 'CV111',
			name: 'Sistemas Estruturais',
			ementa: 'Noções fundamentais sobre a Engenharia Estrutural. Sistemas estruturais: descrição e estudo dos tipos de Sistemas Estruturais.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#BF40D9',
			obligatory: true
		},
		'CV141': {
			code: 'CV141',
			name: 'Química para Engenharia Civil',
			ementa: 'Estequiometria. Ácidos e Bases. Equilíbrio Químico. Oxidação e Redução. Reações de Precipitação. Corrosão. Química dos Materiais. Água. Atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: '',
			color: '#D9BF40',
			obligatory: true
		},
		'CV151': {
			code: 'CV151',
			name: 'Introdução à Engenharia Civil',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos da Engenharia. Origem e evolução da Engenharia Civil. A Engenharia Civil brasileira. A Faculdade de Engenharia Civil, Arquitetura e Urbanismo e a estrutura curricular do curso da Unicamp. O empreendimento de Engenharia e suas fases. Estudos de casos nas diferentes áreas. Visitas de campo. Atribuições profissionais e perspectivas do mercado de trabalho.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#D94059',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D973',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D98C',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95940',
			obligatory: true
		},
		'CV201': {
			code: 'CV201',
			name: 'Desenho Assistido por Computador',
			ementa: 'Apresentação de uma ferramenta de desenho e projeto assistido por computador.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV101'],
			color: '#4073D9',
			obligatory: true
		},
		'CV202': {
			code: 'CV202',
			name: 'Material de Construção Civil I',
			ementa: 'Introdução ao estudo dos materiais de construção. Propriedades dos materiais. Pedras naturais para revestimento. Agregados para argamassas e concretos. Aglomerantes minerais: gesso, cal, cimento Portland. Argamassas. Proporcionamento de argamassas. Materiais cerâmicos. Aços para concreto armado. Aço para concreto protendido.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV141', 'QG102'],
			color: '#D98C40',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#73D940',
			obligatory: true
		},
		'GM420': {
			code: 'GM420',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra (geosfera, atmosfera, hidrosfera, biosfera e antroposfera) ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#59D940',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#40D980',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#40D98C',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D973',
			obligatory: true
		},
		'CV301': {
			code: 'CV301',
			name: 'Física para Engenharia Civil',
			ementa: 'Temperatura e Dilatação. Calorimetria e transferência de calor. Termodinâmica. Aplicações ao conforto térmico de ambientes. Elasticidade. Ondas em meios materiais. Propagação de ondas. Corpos vibrantes. Fenômenos acústicos. Aplicações ao conforto acústico de ambientes. Natureza e propagação da luz. Conceitos de iluminação e fotometria. Lentes e instrumentos óticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'F_129', 'MA111'],
			color: '#6AD951',
			obligatory: true
		},
		'CV312': {
			code: 'CV312',
			name: 'Mecânica Geral',
			ementa: 'Fundamentos da mecânica newtoniana. Estática dos pontos materiais. Sistemas de partículas. Estática dos corpos rígidos. Centróides, baricentros e momentos de inércia. Análise de estruturas. Atrito.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#D940D9',
			obligatory: true
		},
		'CV321': {
			code: 'CV321',
			name: 'Topografia e Geodésia I',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas). Planimetria (medições de distâncias e ângulos; taqueometria, topometria). Altimetria. Métodos de representação do relevo. Locação de obras de engenharia.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV101'],
			color: '#4073D9',
			obligatory: true
		},
		'CV332': {
			code: 'CV332',
			name: 'Materiais de Construção Civil II',
			ementa: 'Propriedades do concreto fresco. Concreto: preparo, transporte, lançamento, adensamento e cura. Propriedades do concreto endurecido. Aditivos. Dosagem. Controle Tecnológico do concreto. Ensaios não destrutivos. Materiais luminosos. Madeiras. Tintas e vernizes. Vidros. Plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV202'],
			color: '#D98C40',
			obligatory: true
		},
		'CV351': {
			code: 'CV351',
			name: 'Introdução à Economia',
			ementa: 'Objetivo e conceitos da economia. Noções de macroeconomia e de microeconomia. Evolução do pensamento econômico. Noções de produção, preço e lucro. Engenharia econômica: juros e equivalência. Análise de investimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#80D940',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#40D980',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#40D96A',
			obligatory: true
		},
		'CV401': {
			code: 'CV401',
			name: 'Administração Aplicada à Empresas de Construção',
			ementa: 'Teorias de administração. Princípios de administração. As funções de planejamento e controle. Administração de produção, financeira, pessoal e suprimentos. Noções de contabilidade e balanço.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV351'],
			color: '#D9408C',
			obligatory: true
		},
		'CV402': {
			code: 'CV402',
			name: 'Projeto Arquitetônico',
			ementa: 'Fases de elaboração do projeto arquitetônico. Características do sítio urbano/uso e ocupação do solo. Implantação e localização. Programa de necessidades. Isolação. Ventilação natural. Iluminação natural. Condições de compartimentos. Circulação. Noções básicas de projeto.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', '*CV321'],
			color: '#4073D9',
			obligatory: true
		},
		'CV411': {
			code: 'CV411',
			name: 'Mecânica dos Sólidos I',
			ementa: 'Esforços solicitantes. Tração, compressão. Lei de Hooke. Flexão geral. Linha elástica',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV111', '*CV312'],
			color: '#CC40D9',
			obligatory: true
		},
		'CV421': {
			code: 'CV421',
			name: 'Topografia e Geodésia II',
			ementa: 'Introdução (NBR 13.133 e NBR 14.144). Terraplenagem. Teoria dos erros. Geodésia. Astronomia de Posição. Cartografia (Sistemas de Projeções; Sistema Universal de Mercator - UTM). Geodésia por satélite (Sistema de Posicionamento Global - GPS). Geoprocessamento. Fotogrametria.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV321'],
			color: '#4073D9',
			obligatory: true
		},
		'CV422': {
			code: 'CV422',
			name: 'Introdução à Pesquisa Operacional',
			ementa: 'Introdução a problemas de otimização e suas propriedades básicas. Problemas de otimização irrestritos e com restrição. Programação linear, formulação, solução geométrica, o método simplex, dualidade e interpretação econômica.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311', 'MA327'],
			color: '#40D986',
			obligatory: true
		},
		'CV431': {
			code: 'CV431',
			name: 'Mecânica dos Fluidos',
			ementa: 'Noções fundamentais. Lei de viscosidade. Tensão num ponto. Estática dos fluidos. Medidas de pressão. Cinemática. Dinâmica. Análise dimensional e semelhanças. Efeitos de viscosidade no movimento de fluidos.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['MA211', '*CV312'],
			color: '#8D8DAD',
			obligatory: true
		},
		'CV450': {
			code: 'CV450',
			name: 'Metodologia Científica e Redação Científica',
			ementa: 'Como organizar um TFC: escolha de tema, organização de revisão bibliográfica, fichamento, elaboração de um anteprojeto. Estruturas do trabalho: introdução, desenvolvimento, conclusão. Uniformização redacional segundo recomendações da ABNT.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#5940D9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#59D96A',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#5AD95A',
			obligatory: true
		},
		'CV501': {
			code: 'CV501',
			name: 'Planejamento Urbano',
			ementa: 'Origens, históricos e conceitos básicos do planejamento urbano. Objetivos, teorias e métodos do planejamento urbano. O plano diretor, os seus levantamentos, análises, a sua elaboração e implantação. Aspectos específicos e técnicos de setores urbanos. Equipamento, infraestrutura e serviços.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV402'],
			color: '#4073D9',
			obligatory: true
		},
		'CV511': {
			code: 'CV511',
			name: 'Mecânica dos Sólidos II',
			ementa: 'Tensão. Deformação. Energia de deformação. Torção. Teoremas de energia. Flambagem. Critérios de resistência.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV312', '*CV411', 'MA311', 'MA327'],
			color: '#898DB0',
			obligatory: true
		},
		'CV521': {
			code: 'CV521',
			name: 'Geotecnia I',
			ementa: 'Classificação dos solos. Pressões totais, neutras e efetivas. Distribuição de pressões no solo. Permeabilidade. Compactação.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GM420'],
			color: '#59D940',
			obligatory: true
		},
		'CV522': {
			code: 'CV522',
			name: 'Técnica dos Transportes',
			ementa: 'Sistemas de transporte. Modalidade. Características gerais e específicas de rodovias, ferrovias, aquavias e dutovias. Estudo comparativo das modalidades, resistência ao movimento, desempenho técnico, capacidade de flexibilidade de atendimento. Integração intermodal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV351'],
			color: '#D9408C',
			obligatory: true
		},
		'CV531': {
			code: 'CV531',
			name: 'Engenharia Hidráulica',
			ementa: 'Movimento uniforme em canais. Energia específica. Ressalto hidráulico. Movimento gradualmente variado. Orifícios, bocais, vertedores, tubos curtos, hidrometria, calhas. Escoamentos em tubulações. Condutos equivalentes. Séries. Paralelo. Redes ramificadas e malhadas. Bombas, curvas e associações, cavitação. Bueiros. Tipos de barragens. Obras de transportes. Vertedores de superfície. Dissipação de energia. Desvios de rios.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['*CV431'],
			color: '#8D8DAD',
			obligatory: true
		},
		'CV532': {
			code: 'CV532',
			name: 'Eletrotécnica e Energia',
			ementa: 'Noções de corrente alternada. Aterramento. Sistemas monofásicos e trifásicos. Fator de potência. Transformadores. Motores elétricos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_329', '*F_328'],
			color: '#5AD962',
			obligatory: true
		},
		'CV541': {
			code: 'CV541',
			name: 'Qualidade Sanitária do Meio',
			ementa: 'Legislação em saneamento. Qualidade de águas de mananciais x tecnologias de tratamento. Características dos esgotos e padrões de emissão x tecnologias de tratamento. Caracterização de resíduos sólidos x tecnologias de manejo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:1, HS:6, SL:4, C:5},
			requisitos: ['CV141', 'QG102'],
			color: '#D98C40',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#40BFD9',
			obligatory: true
		},
		'CV612': {
			code: 'CV612',
			name: 'Teoria das Estruturas I',
			ementa: 'Princípio dos trabalhos virtuais. Deslocamentos de estruturas lineares. Processo dos esforços: treliças, grelhas, pórticos e arcos. Linhas de influência de estruturas isostáticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CV411', '*CV511'],
			color: '#AB67C5',
			obligatory: true
		},
		'CV613': {
			code: 'CV613',
			name: 'Estruturas de Madeira',
			ementa: 'A árvore. Propriedades físicas e mecânicas. Estados limites. Compressão simples. Instabilidade. Tração. Cisalhamento. Elementos para projetos de coberturas. Ligações: sambladuras, pregos e parafusos. Flexão simples e composta. Escoamento de valas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV511'],
			color: '#898DB0',
			obligatory: true
		},
		'CV621': {
			code: 'CV621',
			name: 'Geotecnia II',
			ementa: 'Adensamento e compressibilidade. Resistência ao cisalhamento dos solos. Estabilidade de taludes. Empuxos. Estruturas de arrimo.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV521', '*CV511'],
			color: '#71B378',
			obligatory: true
		},
		'CV622': {
			code: 'CV622',
			name: 'Estradas I',
			ementa: 'Planejamento. Planos rodoviários. Federal e Estadual. Projeto geométrico de rodovias e ferrovias. Escolha de traçados. Elaboração de projeto geométrico de rodovia. Segurança e dispositivos de conexão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV201', 'CV321', 'CV522', '*CV421'],
			color: '#6666C6',
			obligatory: true
		},
		'CV631': {
			code: 'CV631',
			name: 'Sistemas Elétricos Prediais',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica. Materiais elétricos. Proteção e comando de circuitos elétricos. Luminotécnica. Luz artificial e natural. Projeto de instalações elétricas. Instalações de para-raios. TV, som e telefone. Introdução à instalação de motores.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV532'],
			color: '#4DA69E',
			obligatory: true
		},
		'CV632': {
			code: 'CV632',
			name: 'Hidrologia Básica',
			ementa: 'Ciclo hidrológico, bacia hidrográfica, precipitações, escoamento superficial, infiltração, evaporação e transpiração. Águas subterrâneas. Medições de vazão. Previsão de enchentes por métodos determinísticos (hidrogramas unitários), probabilísticos (Gumbel, Gumbel-chow, log-Pearson tipo III, log Normal, GRADEX, etc). Regularização de vazões. Amortecimento de cheias em reservatórios. Propagação de Enchentes em Canais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*CV531', '*ME414', '*MC102'],
			color: '#5AC075',
			obligatory: true
		},
		'CV633': {
			code: 'CV633',
			name: 'Técnicas Construtivas I',
			ementa: 'Introdução às técnicas e processos construtivos. Mão de obra. Canteiro e locação de obras. Execução e detalhes de construção: fundações convencionais, alvenarias, impermeabilizações, revestimentos e pinturas, esquadrias, ferragens e coberturas usuais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV332'],
			color: '#D98C40',
			obligatory: true
		},
		'CV641': {
			code: 'CV641',
			name: 'Sistemas de Abastecimento de Águas',
			ementa: 'Introdução. Previsão populacional. Consumo de água. Mananciais. Barragens. Captação de água. Bombas e estações elevatórias. Adução de água. Reservatórios de distribuição. Redes de distribuição. Projeto.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:1, D:1, HS:5, SL:3, C:4},
			requisitos: ['CV531', '*CV541'],
			color: '#B38D77',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#40D9BF',
			obligatory: true
		},
		'CV701': {
			code: 'CV701',
			name: 'Planejamento e Controle de Empreendimentos',
			ementa: 'Conceitos fundamentais e organização de empreendimentos. O gerenciamento no canteiro de obras. Fases e operação da construção civil, estruturas organizacionais para o gerenciamento de operações. Orçamentos e BDI. Programação de atividades: metodologia, sistemática de programação, técnicas determinísticas e probabilísticas. Acompanhamento e controle operacional.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414', '*CV401'],
			color: '#8D8D80',
			obligatory: true
		},
		'CV702': {
			code: 'CV702',
			name: 'Sistemas Prediais, Hidráulico-Sanitários e Gás I',
			ementa: 'Sistemas prediais de água fria, quente, combate a incêndio com hidrantes e extintores, esgoto sanitário, água pluvial e gás combustível: conceituação, critérios de projeto e normalização. Conservação de água em edifícios: conceitos fundamentais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV531', '*CV632'],
			color: '#6295A9',
			obligatory: true
		},
		'CV712': {
			code: 'CV712',
			name: 'Teoria das Estruturas II',
			ementa: 'Coeficientes relativos às barras e cargas. Processo dos deslocamentos: manual e matricial. Simplificações de simetria. Linhas de influência de estruturas hiperestática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['CV511', '*CV612'],
			color: '#9A7ABB',
			obligatory: true
		},
		'CV713': {
			code: 'CV713',
			name: 'Estruturas Metálicas I',
			ementa: 'Coeficientes de ponderação de cargas. Dimensionamento de barras sob cargas axiais de tração e compressão de barras com perfil laminado. Dimensionamento de barras sob cargas de flexão ou de flexo-compressão com perfil laminado. Dimensionamento de ligações parafusadas e/ou soldadas sob cargas axiais e/ou de flexões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV511', '*CV612'],
			color: '#9A7ABB',
			obligatory: true
		},
		'CV714': {
			code: 'CV714',
			name: 'Estruturas de Concreto Armado I',
			ementa: 'Fundamentos do concreto armado. Principais elementos estruturais. Desenhos de fôrmas. Dimensionamento nos estados limites últimos. Lajes e vigas. Verificação dos estados limites de serviços.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV511', '*CV332', '*CV612'],
			color: '#AF8092',
			obligatory: true
		},
		'CV721': {
			code: 'CV721',
			name: 'Fundações',
			ementa: 'Norma de fundações. Tipos de fundações. Interação solo-fundação. Investigação do subsolo. Capacidade de carga de fundação direta. Recalque de fundação direta. Influência das dimensões das fundações. Dimensionamento de fundação direta. Capacidade de carga de fundação profunda. Dimensionamento de fundação profunda. Provas de carga. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV521', 'CV621'],
			color: '#65C65C',
			obligatory: true
		},
		'CV722': {
			code: 'CV722',
			name: 'Estradas II',
			ementa: 'Serviços de terraplenagem. Equipamentos de terraplenagem. Produção dos equipamentos. Sistemas de drenagem. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV421', '*CV622', '*CV632'],
			color: '#5588B1',
			obligatory: true
		},
		'CV741': {
			code: 'CV741',
			name: 'Sistemas de Esgotamento Hídrico: Sanitário e Pluvial',
			ementa: 'Sistemas de esgoto. Tipos de sistemas. Características do líquido a esgotar. Tipos de traçados. Partes constituintes. Quantidade de líquido a esgotar. Hidráulica de rede. Carga sobre tubos. Drenagem de águas pluviais. Sarjetas. Bocas de lobo. Galerias. Hidráulica e critérios de dimensionamento. Poço de visita. Caixa de ligação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV632', 'CV641'],
			color: '#87A776',
			obligatory: true
		},
		'CV811': {
			code: 'CV811',
			name: 'Estruturas de Concreto Protendido I',
			ementa: 'Conceitos de protenção aplicada ao concreto: materiais e sistemas de protenção. Determinação das forças de protensão. Estados limites de serviços e últimos. Análise das tensões ao longo do vão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: true
		},
		'CV812': {
			code: 'CV812',
			name: 'Estruturas de Pontes',
			ementa: 'Pontes de concreto: definições, nomenclatura, classificação. Ações. Pontes em vigas. Lajes dos tabuleiros das pontes em vigas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: true
		},
		'CV813': {
			code: 'CV813',
			name: 'Estruturas Metálicas II',
			ementa: 'Introdução. Traves em treliças. Estrutura para coberturas em duas águas. Estrutura para coberturas tipo shed. Estrutura para coberturas em arco. Estrutura para edifícios industriais com ponte rolante. Projeto completo de um telhado em estrutura treliçada de aço.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV612', '*CV712', '*CV713'],
			color: '#A074BE',
			obligatory: true
		},
		'CV814': {
			code: 'CV814',
			name: 'Estruturas de Concreto Armado II',
			ementa: 'Dimensionamento de seções retangulares submetidas à flexo-compressão, normal e oblíqua. Pilares e fundações. Verificação dos efeitos globais de 2ª ordem. Escadas, consolos curtos, vigas-parede e reservatórios comuns de edifícios.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV612', '*CV714', '*CV712'],
			color: '#A776B1',
			obligatory: true
		},
		'CV821': {
			code: 'CV821',
			name: 'Economia dos Transportes',
			ementa: 'Conceitos e métodos de planejamento e economia de transportes. Moldagem de demanda e oferta. Custos e tarifas. Mercados e competitividade. Avaliação econômica e operacional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: ['CV522'],
			color: '#D9408C',
			obligatory: true
		},
		'CV822': {
			code: 'CV822',
			name: 'Estradas III',
			ementa: 'Pavimentação. Estudos de solos para Rodovias. Agregados. Asfaltos. Pavimentos Rígidos. Métodos de dimensionamento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV722'],
			color: '#5588B1',
			obligatory: true
		},
		'CV823': {
			code: 'CV823',
			name: 'Aeroportos',
			ementa: 'Transporte aéreo. Planejamento e projeto de aeroportos, localização, comprimento de pista, características físicas. Zoneamento e proteção ao voo. Dimensionamento de pavimentos para aeroportos. Planejamento e projeto da área terminal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV522', 'CV622'],
			color: '#A053A9',
			obligatory: true
		},
		'CV831': {
			code: 'CV831',
			name: 'Regulamentações da Engenharia Civil',
			ementa: 'Noções de Direito Civil. Direito de propriedade. A Construção Civil e sua disciplina no Código Civil. Código do Consumidor. A legislação profissional e as de interesse dos Engenheiros Civis. Problemas profissionais. Noções sobre licitação. Cadastramento. Propostas e Contratos para a Construção Civil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#D9A640',
			obligatory: true
		},
		'CV832': {
			code: 'CV832',
			name: 'Portos, Rios e Canais',
			ementa: 'Noções de comércio internacional. Evolução das embarcações e sua adequação às rotas comerciais. Planejamento de porto. Arranjo e projeto das principais obras de operação e de proteção. Noções de oceanografia. Estudo de vento, marés e ondas em mares e lagos. Estudo das vias navegáveis. Regularização e canalização. Projeto de obras de transposição de desnível.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV531', '*CV632'],
			color: '#74A791',
			obligatory: true
		},
		'CV841': {
			code: 'CV841',
			name: 'Ecologia Aplicada à Engenharia Civil',
			ementa: 'Engenharia Civil e a questão ambiental. Análise de impactos resultantes de obras civis. Avaliação de impactos ambientais resultantes de ações de engenharia civil no território.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA460'],
			color: '#D940A6',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#40D959',
			obligatory: true
		},
		'CV911': {
			code: 'CV911',
			name: 'Projeto Estrutural de Edifício de Concreto Armado',
			ementa: 'Arranjos estruturais, lançamentos da estrutura e carregamentos básicos. Cálculo tridimensional dos esforços com auxílio de programas computacionais. Verificação, dimensionamento e detalhamento de todos os elementos da estrutura.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV714', 'CV814'],
			color: '#AB7BA2',
			obligatory: true
		},
		'CV912': {
			code: 'CV912',
			name: 'Estruturas Metálicas Compostas de Chapas Dobradas',
			ementa: 'Introdução. Aços utilizados. Tipos de perfis e suas propriedades. Estabilidade de elementos comprimidos. Instalibidade local. Ações e combinações das ações. Barras axialmente tracionadas. Barras axialmente comprimidas. Instabilidade global. Barras solicitadas à flexão. Ligações soldadas. Ligações parafusadas. Projeto completo de um telhado constituído de treliças, terças e contraventamentos, utilizando perfis formados a frio.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV713'],
			color: '#9A7ABB',
			obligatory: true
		},
		'CV916': {
			code: 'CV916',
			name: 'Introdução ao Método dos Elementos Finitos',
			ementa: 'Introdução. Fundamentos essenciais. Processo dos deslocamentos. Estruturas de barras. Estruturas contínuas de superfície. Programação para computador. Panorama sobre a aplicabilidade do método a problemas de Engenharia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV511'],
			color: '#898DB0',
			obligatory: true
		},
		'CV954': {
			code: 'CV954',
			name: 'Trabalho Final de Curso I',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#7340D9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:9},
			requisitos: '',
			color: '#A640D9',
			obligatory: true
		},
		'CV951': {
			code: 'CV951',
			name: 'Estágio Supervisionado',
			ementa: 'Técnicas de execução de obras ou projetos em empresa.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480'],
			color: '#D9D940',
			obligatory: true
		},
		'CV955': {
			code: 'CV955',
			name: 'Trabalho Final de Curso II',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['CV954'],
			color: '#7340D9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#D940BF',
			obligatory: true
		},
		'CV010': {
			code: 'CV010',
			name: 'Complementos de Pontes de Concreto',
			ementa: 'Sistemas Estruturais. Superestrutura das pontes em grelhas. Aparelhos de apoio. Infraestrutura das pontes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV812'],
			color: '#AF8092',
			obligatory: false
		},
		'CV011': {
			code: 'CV011',
			name: 'Complementos de Concreto Protendido',
			ementa: 'Perdas de Protenção. Estruturas hiperestáticas protendidas. Análise das tensões ao longo do vão. Traçado de cabos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV811'],
			color: '#AF8092',
			obligatory: false
		},
		'CV012': {
			code: 'CV012',
			name: 'Projetos de Estruturas de Madeira',
			ementa: 'Vigas entarugadas. Pontilhão rodoviário. Pontes com postes de eucalipto ligados por anéis metálicos. Cobertura com treliças ligadas por chapas com dentes estampados. Arcos de madeira para cobertura. Estruturas com laminados-colados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV613'],
			color: '#898DB0',
			obligatory: false
		},
		'CV013': {
			code: 'CV013',
			name: 'Complementos de Mecânica dos Sólidos',
			ementa: 'Introdução à teoria da elasticidade. Teoria das tensões e deformações. Estados planos de tensões e deformações. Vigas sobre base elástica. Barras esbeltas com flexão combinada com força axial.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV511'],
			color: '#898DB0',
			obligatory: false
		},
		'CV014': {
			code: 'CV014',
			name: 'Patologia e Monitoração de Estruturas',
			ementa: 'Estudos das principais patologias em estrutura de concreto armado. Principais reforços nas estruturas. Técnicas de monitoração em estruturas. Principais equipamentos de medição. Equipamentos de interpretação das medidas. Exemplos de aplicação',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA460'],
			color: '#D94073',
			obligatory: false
		},
		'CV015': {
			code: 'CV015',
			name: 'Dinâmica das Estruturas',
			ementa: 'Princípios da dinâmica. Equação geral do movimento de uma partícula. Princípio de D\'Alembert. Solução da equação diferencial do movimento. Sistemas com um grau de liberdade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['MA311', 'MA327'],
			color: '#40D986',
			obligatory: false
		},
		'CV016': {
			code: 'CV016',
			name: 'Técnicas de Programação',
			ementa: 'Técnicas de programação para resolução de problemas numéricos. Métodos de operações computacionais de matrizes. Métodos elementares de álgebra linear numérica. Aplicações e desenvolvimento de programas computacionais.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['MS211'],
			color: '#40D96A',
			obligatory: false
		},
		'CV017': {
			code: 'CV017',
			name: 'Placas e Cascas',
			ementa: 'Introdução às placas. Definições e hipóteses. Flexão elástica linear de placas retangulares e circulares. Placas retangulares contínuas. Teoria geral das cascas finas. Aplicações das cascas finas em geral. Cascas cilíndricas circulares: coberturas e reservatórios. Cascas esféricas. Cascas cilíndricas com enrigecedores longitudinais e transversais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV511'],
			color: '#898DB0',
			obligatory: false
		},
		'CV018': {
			code: 'CV018',
			name: 'Reservatório e Silos de Concreto Armado',
			ementa: 'Análise de estruturas de silos e de reservatórios de concreto armado, incluindo cálculo de pressões, cálculo estrutural e dimensionamento. Teoria para cálculo de pressões causadas por produto sólido. Detalhamento da estrutura. Especificações de normas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: false
		},
		'CV019': {
			code: 'CV019',
			name: 'Tópicos Especiais em Concreto I',
			ementa: 'A ser definida no semestre em que for oferecida pelo Departamento de Estruturas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: false
		},
		'CV064': {
			code: 'CV064',
			name: 'Tópicos Especiais em Concreto II',
			ementa: 'A ser definida no semestre em que for oferecida pelo Departamento de Estruturas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: false
		},
		'CV065': {
			code: 'CV065',
			name: 'Tópicos em Engenharia de Estruturas I',
			ementa: 'A ser definida no semestre em que for oferecida pelo Departamento de Estruturas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA470'],
			color: '#D97340',
			obligatory: false
		},
		'CV066': {
			code: 'CV066',
			name: 'Tópicos em Engenharia de Estruturas II',
			ementa: 'A ser definida no semestre em que for oferecida pelo Departamento de Estruturas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA470'],
			color: '#BFD940',
			obligatory: false
		},
		'CV067': {
			code: 'CV067',
			name: 'Introdução ao Projeto de Estruturas em Steel Framing',
			ementa: 'Conceitos gerais sobre cargas e estabilidade estrutural, apresentação ao steel framing, fundações, painéis e entrepisos, lajes e coberturas, em steel framing, fixações das peças em steel framing, montagem, noções sobre ventilação das estruturas, acabamento interno, acabamento externo, desenvolvimento do projeto. Noções básicas do dimensionamento em chapa dobrada para o dimensionamento de barras tracionadas, comprimidas, fletidas e flexo-comprimidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#4059D9',
			obligatory: false
		},
		'CV070': {
			code: 'CV070',
			name: 'Programação Matemática Aplicada à Engenharia de Estruturas',
			ementa: 'Descrição de alguns problemas. Revisão de álgebra linear. Implementação em computador do algoritmo simples. Formulação, especificação e interpretação das soluções de modelos matemáticos. Poderão ser estudados: carga e colapso. Plásticos em estruturas, pórticos planos com cabos pré-tensionados, orçamento de capital, transportes, planejamento financeiro.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:2, HS:5, SL:2, C:3},
			requisitos: ['CV712', 'MS211'],
			color: '#6DAA93',
			obligatory: false
		},
		'CV071': {
			code: 'CV071',
			name: 'Tensoestruturas',
			ementa: 'Evolução das tensoestruturas ao longo do tempo. Compreendendo a forma das tensoestruturas. As formas básicas. As formas em paraboloide hiperbólico. As formas cônicas. As formas suportadas por arcos. Combinação das formas básicas. Indicações para projeto arquitetônico. Estudo de caso com aspectos do projeto, dimensionamento e construção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV712'],
			color: '#9A7ABB',
			obligatory: false
		},
		'CV072': {
			code: 'CV072',
			name: 'Laje sobre Solo para Fundação ou Piso',
			ementa: 'Lajes sobre solo. Reforço de aço para minimizar fissuras devidas à retratação do concreto. Análise estrutural para laje sobre solo. Análise estrutural baseada em programa de computador. Recomendações da literatura estrangeira para investigação do solo, análise estrutural e construção de laje sobre solo. Recomendações para minimizar fissuras em laje de concreto sobre o solo. Estudo de caso com aspectos do projeto, dimensionamento e construção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV712', 'CV714'],
			color: '#A57DA7',
			obligatory: false
		},
		'CV073': {
			code: 'CV073',
			name: 'Introdução à Análise Não Linear de Estruturas',
			ementa: 'Busca unidimensional. Algoritmo para o mínimo de interpolação cúbica. Algoritmo para a busca unidimensional. Método de Newton. Método quase Newton. Método incremental Newton Raphson. A estratégia dos quadrados mínimos. A avaliação numérica da matriz de rigidez. Poderão ser estudados: treliças sob não-linearidade geométrica e elasticidade não linear, treliças sob não-linearidade geométrica e elasto-plasticidade, pórticos planos sob não-linearidade geométrica e elasticidade não linear.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:2, HS:5, SL:3, C:3},
			requisitos: ['CV713', 'CV714'],
			color: '#A57DA7',
			obligatory: false
		},
		'CV074': {
			code: 'CV074',
			name: 'Análise Matricial de Estruturas',
			ementa: 'Matrizes de rigidez e de flexibilidade. Processo dos esforços. Processo dos deslocamentos. Efeitos de variação de temperatura, deformação inicial e recalques de apoio. Rotação plana dos eixos de coordenadas. Programas automáticos para cálculo de vigas, grelhas, treliças e pórticos planos.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['MC102', '*CV712'],
			color: '#6DAA7E',
			obligatory: false
		},
		'CV075': {
			code: 'CV075',
			name: 'Estruturas Metálicas Tubulares',
			ementa: 'Introdução. Aços utilizados e suas propriedades. Fabricação de barras laminadas tubulares de aço. Concepções de estruturas metálicas tubulares. Dimensionamento de barras tubulares de aço. Dimensionamento de ligações de barras tubulares de aço. Dimensionamento de estruturas mistas aço-concreto. Detalhamento de projeto de estruturas tubulares. Utilização de software no desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV813'],
			color: '#A074BE',
			obligatory: false
		},
		'CV091': {
			code: 'CV091',
			name: 'Flexo-Torção em Elementos de Estruturas Metálicas',
			ementa: 'Introdução à teoria de torção de barras e à teoria de flexo-torção, conceitos básicos, equação diferencial da peça de seção delgada, exemplos numéricos, o efeito da não linearidade geométrica, barras comprimidas axialmente, barras flexo-comprimidas, efeito da flexo-torção na flexão de barras, efeito de flexo-torção na compressão de barras, efeito da flexo-torção em barras flexo-comprimidas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV411'],
			color: '#CC40D9',
			obligatory: false
		},
		'CV092': {
			code: 'CV092',
			name: 'Instabilidade e Flexo-Torção em Elementos de Estruturas Metálicas',
			ementa: 'Torção de peças delgadas e não delgadas com seção qualquer. Problemas de flexo-compressão. Efeito da não linearidade geométrica, linearizada ou não-linearizada. Tratamento dos problemas de flexo-compressão por métodos aproximados. Cargas críticas. Determinação de deslocamentos em peças esbeltas com seção delgada. Flambagem de placas e cascas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV511'],
			color: '#898DB0',
			obligatory: false
		},
		'CV910': {
			code: 'CV910',
			name: 'Estruturas de Concreto Armado III',
			ementa: 'Projetos estruturais de escadas especiais, lajes nervuradas, lajes cogumelo e muros de arrimo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV714', '*CV814'],
			color: '#AB7BA2',
			obligatory: false
		},
		'CV913': {
			code: 'CV913',
			name: 'Estruturas Metálicas dos Edifícios Industriais',
			ementa: 'Introdução. Composição da estrutura. Detalhes construtivos. Cargas. Determinação dos esforços no pórtico transversal. Análise dos pilares. Vigas de rolamento. Contraventamentos especiais. Viga mestra que substitui alguns pilares.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV813'],
			color: '#A074BE',
			obligatory: false
		},
		'CV914': {
			code: 'CV914',
			name: 'Ações e Segurança das Estruturas',
			ementa: 'Segurança: conceito, métodos determinísticos, métodos semiprobabilísticos. Método dos estados limites. Classificação das ações em estruturas, carregamentos, combinações últimas e combinações de serviço. Ações devidas ao vento em edificações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV202', 'CV411', 'ME414'],
			color: '#A28C84',
			obligatory: false
		},
		'CV915': {
			code: 'CV915',
			name: 'Complementos de Teoria das Estruturas',
			ementa: 'Aplicação do método dos elementos finitos (MEF) em análise estrutural utilizando softwares comerciais. Considerações sobre as diversas fases de análise: pré-processamento, processamento e pós-processamento. Estudos das bibliotecas de elementos disponíveis nos softwares em estudo e suas aplicações. Aplicação dos softwares na moldagem de um edifício padrão: carregamentos a considerar, análise dos esforços, combinações de resultados. Cuidados no uso indevido do MEF e das opções de modelagem.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV712'],
			color: '#9A7ABB',
			obligatory: false
		},
		'CV917': {
			code: 'CV917',
			name: 'Projeto de Estruturas de Concreto Armado Assistido por Computador',
			ementa: 'Lançamento da estrutura e análise estrutural. Avaliação estrutural incluindo durabilidade, estabilidade global e estados limites de serviço. Obtenção de esforços em estado limite último para o dimensionamento.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: false
		},
		'CV918': {
			code: 'CV918',
			name: 'Estruturas em Situação de Incêndio',
			ementa: 'O incêndio padrão. Curvas temperatura-tempo padronizadas. O incêndio natural. O modelo do incêndio e a temperatura na estrutura. Segurança das estruturas em situação de incêndio. Comportamento das estruturas de aço, concreto e madeira em situação de incêndio. Métodos simplificados de dimensionamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: false
		},
		'CV919': {
			code: 'CV919',
			name: 'Alvenaria Estrutural',
			ementa: 'Introdução. Histórico e conceituação atual. Elementos componentes e suas propriedades. Elementos complementares industriais. Projetos de arquitetura, estrutural e de instalações. Técnicas construtivas, equipamentos e gerenciamento das construções.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#AF8092',
			obligatory: false
		},
		'CV952': {
			code: 'CV952',
			name: 'Iniciação Científica em Engenharia Civil I',
			ementa: 'A ser definida em função de pesquisas em que o aluno se engajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#40A6D9',
			obligatory: false
		},
		'CV953': {
			code: 'CV953',
			name: 'Iniciação Científica em Engenharia Civil II',
			ementa: 'A ser definida em função de pesquisas em que o aluno se angajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'CV965': {
			code: 'CV965',
			name: 'Tópicos Especiais em Concreto III',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV714', 'CV814'],
			color: '#AB7BA2',
			obligatory: false
		},
		'CV966': {
			code: 'CV966',
			name: 'Tópicos Especiais em Concreto IV',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV714', 'CV814'],
			color: '#AB7BA2',
			obligatory: false
		},
		'CV967': {
			code: 'CV967',
			name: 'Tópicos Especiais em Concreto V',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV714', 'CV814'],
			color: '#AB7BA2',
			obligatory: false
		},
		'CV969': {
			code: 'CV969',
			name: 'Tópicos em Engenharia de Estruturas III',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA470'],
			color: '#40D9D9',
			obligatory: false
		},
		'CV970': {
			code: 'CV970',
			name: 'Tópicos em Engenharia de Estruturas IV',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA470'],
			color: '#40D9A6',
			obligatory: false
		},
		'CV971': {
			code: 'CV971',
			name: 'Tópicos em Engenharia de Estruturas V',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA470'],
			color: '#8C40D9',
			obligatory: false
		},
		'CV972': {
			code: 'CV972',
			name: 'Tópicos em Engenharia de Estruturas VI',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA470'],
			color: '#D98C40',
			obligatory: false
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#408CD9',
			obligatory: false
		},
		'HZ292': {
			code: 'HZ292',
			name: 'Tópicos Especiais de Humanidades II',
			ementa: 'Filosofia da ciência. Elementos de sociologia. Sociologia rural. Antropologia. Deontologia.Obs.: Sendo uma disciplina reservada aos cursos de engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A6D940',
			obligatory: false
		},
		'HZ293': {
			code: 'HZ293',
			name: 'Tópicos Especiais de Humanidades III',
			ementa: 'O curso abordará a análise dos aspectos sociais das inovações tecnológicas e da pesquisa científica. No decorrer das exposições e seminários, serão desenvolvidas análises de casos precisos, tentando incorporar um quadro de referência comparativo entre a sociedade brasileira e o contexto internacional.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9',
			obligatory: false
		}
	}
};

export default catalogue;
