const catalogue = {
	totalCredits: 281,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CV111', 'CV151', 'CV141', 'QG102', 'CV101', 'MC102', 'MA111', 'MA141']
		},
		'sem-2': {
			id: '2',
			subjects: ['MA211', 'GM420', 'F_129', 'CV202', 'ME203', 'CV201', 'F_128']
		},
		'sem-3': {
			id: '3',
			subjects: ['CV311', 'CV312', 'F_229', 'CV332', 'CV351', 'CV321', 'CV301', 'MS211']
		},
		'sem-4': {
			id: '4',
			subjects: ['CV422', 'CV411', 'CV431', 'CV450', 'CV401', 'F_329', 'CV402', 'F_328', 'CV421']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'CV511', 'CV521', 'CV541', 'CV522', 'CV531', 'CV501', 'CV532']
		},
		'sem-6': {
			id: '6',
			subjects: ['CV612', 'CV613', 'CV621', 'CV622', 'CV631', 'CV632', 'CV633', 'CV641', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CV713', 'CV712', 'CV714', 'CV721', 'CV701', 'CV702', 'CV741', 'CV722']
		},
		'sem-8': {
			id: '8',
			subjects: ['CV813', 'CV841', 'CV814', 'CV823', 'CV812', 'CV832', 'CV822', 'CV821', 'CV811', 'ELET08', 'CV831']
		},
		'sem-9': {
			id: '9',
			subjects: ['CV951', 'CV922', 'CV954', 'CV921']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'CV955', 'CV923']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 14,
			hasRestrictions: true,
			subjects: ['CV020', 'CV021', 'CV022', 'CV023', 'CV024', 'CV025', 'CV026', 'CV027', 'CV087', 'CV088', 'CV089', 'CV090', 'CV920', 'CV924', 'CV925', 'CV926', 'CV927', 'CV928', 'CV929', 'CV952', 'CV953'],
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
			color: '#6B46B9',
			obligatory: true
		},
		'CV111': {
			code: 'CV111',
			name: 'Sistemas Estruturais',
			ementa: 'Noções fundamentais sobre a Engenharia Estrutural. Sistemas estruturais: descrição e estudo dos tipos de Sistemas Estruturais.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#B9467D',
			obligatory: true
		},
		'CV141': {
			code: 'CV141',
			name: 'Química para Engenharia Civil',
			ementa: 'Estequiometria. Ácidos e Bases. Equilíbrio Químico. Oxidação e Redução. Reações de Precipitação. Corrosão. Química dos Materiais. Água. Atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: '',
			color: '#B94662',
			obligatory: true
		},
		'CV151': {
			code: 'CV151',
			name: 'Introdução à Engenharia Civil',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos da Engenharia. Origem e evolução da Engenharia Civil. A Engenharia Civil brasileira. A Faculdade de Engenharia Civil, Arquitetura e Urbanismo e a estrutura curricular do curso da Unicamp. O empreendimento de Engenharia e suas fases. Estudos de casos nas diferentes áreas. Visitas de campo. Atribuições profissionais e perspectivas do mercado de trabalho.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#4F46B9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#4690B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#86B946',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#6BB946',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4658B9',
			obligatory: true
		},
		'CV201': {
			code: 'CV201',
			name: 'Desenho Assistido por Computador',
			ementa: 'Apresentação de uma ferramenta de desenho e projeto assistido por computador.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV101'],
			color: '#6B46B9',
			obligatory: true
		},
		'CV202': {
			code: 'CV202',
			name: 'Material de Construção Civil I',
			ementa: 'Introdução ao estudo dos materiais de construção. Propriedades dos materiais. Pedras naturais para revestimento. Agregados para argamassas e concretos. Aglomerantes minerais: gesso, cal, cimento Portland. Argamassas. Proporcionamento de argamassas. Materiais cerâmicos. Aços para concreto armado. Aço para concreto protendido.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV141', 'QG102'],
			color: '#804F8E',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B446',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97D46',
			obligatory: true
		},
		'GM420': {
			code: 'GM420',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra (geosfera, atmosfera, hidrosfera, biosfera e antroposfera) ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94699',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#66A580',
			obligatory: true
		},
		'ME203': {
			code: 'ME203',
			name: 'Estatística Elementar',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Variáveis aleatórias. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#4690B9',
			obligatory: true
		},
		'CV301': {
			code: 'CV301',
			name: 'Física para Engenharia Civil',
			ementa: 'Temperatura e Dilatação. Calorimetria e transferência de calor. Termodinâmica. Aplicações ao conforto térmico de ambientes. Elasticidade. Ondas em meios materiais. Propagação de ondas. Corpos vibrantes. Fenômenos acústicos. Aplicações ao conforto acústico de ambientes. Natureza e propagação da luz. Conceitos de iluminação e fotometria. Lentes e instrumentos óticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'F_129', 'MA111'],
			color: '#93966C',
			obligatory: true
		},
		'CV311': {
			code: 'CV311',
			name: 'Cálculo para Engenharia Civil',
			ementa: 'Espaços vetoriais e subespaços. Base e dimensão. Transformações lineares. Fundamentos de equações diferenciais. Autovalores e autovetores de matrizes. Equações homogêneas e não homogêneas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*MA211'],
			color: '#66A580',
			obligatory: true
		},
		'CV312': {
			code: 'CV312',
			name: 'Mecânica Geral',
			ementa: 'Fundamentos da mecânica newtoniana. Estática dos pontos materiais. Sistemas de partículas. Estática dos corpos rígidos. Centróides, baricentros e momentos de inércia. Análise de estruturas. Atrito.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#46ABB9',
			obligatory: true
		},
		'CV321': {
			code: 'CV321',
			name: 'Topografia e Geodésia I',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas). Planimetria (medições de distâncias e ângulos; taqueometria, topometria). Altimetria. Métodos de representação do relevo. Locação de obras de engenharia.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV101'],
			color: '#6B46B9',
			obligatory: true
		},
		'CV332': {
			code: 'CV332',
			name: 'Materiais de Construção Civil II',
			ementa: 'Propriedades do concreto fresco. Concreto: preparo, transporte, lançamento, adensamento e cura. Propriedades do concreto endurecido. Aditivos. Dosagem. Controle Tecnológico do concreto. Ensaios não destrutivos. Materiais luminosos. Madeiras. Tintas e vernizes. Vidros. Plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV202'],
			color: '#804F8E',
			obligatory: true
		},
		'CV351': {
			code: 'CV351',
			name: 'Introdução à Economia',
			ementa: 'Objetivo e conceitos da economia. Noções de macroeconomia e de microeconomia. Evolução do pensamento econômico. Noções de produção, preço e lucro. Engenharia econômica: juros e equivalência. Análise de investimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#B99946',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#68AB6C',
			obligatory: true
		},
		'CV401': {
			code: 'CV401',
			name: 'Administração Aplicada à Empresas de Construção',
			ementa: 'Teorias de administração. Princípios de administração. As funções de planejamento e controle. Administração de produção, financeira, pessoal e suprimentos. Noções de contabilidade e balanço.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV351'],
			color: '#4674B9',
			obligatory: true
		},
		'CV402': {
			code: 'CV402',
			name: 'Projeto Arquitetônico',
			ementa: 'Fases de elaboração do projeto arquitetônico. Características do sítio urbano/uso e ocupação do solo. Implantação e localização. Programa de necessidades. Isolação. Ventilação natural. Iluminação natural. Condições de compartimentos. Circulação. Noções básicas de projeto.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', '*CV321'],
			color: '#6B46B9',
			obligatory: true
		},
		'CV411': {
			code: 'CV411',
			name: 'Mecânica dos Sólidos I',
			ementa: 'Esforços solicitantes. Tração, compressão. Lei de Hooke. Flexão geral. Linha elástica',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV111', '*CV312'],
			color: '#80799B',
			obligatory: true
		},
		'CV421': {
			code: 'CV421',
			name: 'Topografia e Geodésia II',
			ementa: 'Introdução (NBR 13.133 e NBR 14.144). Terraplenagem. Teoria dos erros. Geodésia. Astronomia de Posição. Cartografia (Sistemas de Projeções; Sistema Universal de Mercator - UTM). Geodésia por satélite (Sistema de Posicionamento Global - GPS). Geoprocessamento. Fotogrametria.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV321'],
			color: '#6B46B9',
			obligatory: true
		},
		'CV422': {
			code: 'CV422',
			name: 'Introdução à Pesquisa Operacional',
			ementa: 'Introdução a problemas de otimização e suas propriedades básicas. Problemas de otimização irrestritos e com restrição. Programação linear, formulação, solução geométrica, o método simplex, dualidade e interpretação econômica.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV311'],
			color: '#66A580',
			obligatory: true
		},
		'CV431': {
			code: 'CV431',
			name: 'Mecânica dos Fluidos',
			ementa: 'Noções fundamentais. Lei de viscosidade. Tensão num ponto. Estática dos fluidos. Medidas de pressão. Cinemática. Dinâmica. Análise dimensional e semelhanças. Efeitos de viscosidade no movimento de fluidos.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['MA211', '*CV312'],
			color: '#56A89D',
			obligatory: true
		},
		'CV450': {
			code: 'CV450',
			name: 'Metodologia Científica e Redação Científica',
			ementa: 'Como organizar um TFC: escolha de tema, organização de revisão bibliográfica, fichamento, elaboração de um anteprojeto. Estruturas do trabalho: introdução, desenvolvimento, conclusão. Uniformização redacional segundo recomendações da ABNT.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4FB946',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#82AA6C',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#808780',
			obligatory: true
		},
		'CV501': {
			code: 'CV501',
			name: 'Planejamento Urbano',
			ementa: 'Origens, históricos e conceitos básicos do planejamento urbano. Objetivos, teorias e métodos do planejamento urbano. O plano diretor, os seus levantamentos, análises, a sua elaboração e implantação. Aspectos específicos e técnicos de setores urbanos. Equipamento, infraestrutura e serviços.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV402'],
			color: '#6B46B9',
			obligatory: true
		},
		'CV511': {
			code: 'CV511',
			name: 'Mecânica dos Sólidos II',
			ementa: 'Tensão. Deformação. Energia de deformação. Torção. Teoremas de energia. Flambagem. Critérios de resistência.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV311', 'CV312', '*CV411'],
			color: '#64989C',
			obligatory: true
		},
		'CV521': {
			code: 'CV521',
			name: 'Geotecnia I',
			ementa: 'Classificação dos solos. Pressões totais, neutras e efetivas. Distribuição de pressões no solo. Permeabilidade. Compactação.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GM420'],
			color: '#B94699',
			obligatory: true
		},
		'CV522': {
			code: 'CV522',
			name: 'Técnica dos Transportes',
			ementa: 'Sistemas de transporte. Modalidade. Características gerais e específicas de rodovias, ferrovias, aquavias e dutovias. Estudo comparativo das modalidades, resistência ao movimento, desempenho técnico, capacidade de flexibilidade de atendimento. Integração intermodal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV351'],
			color: '#4674B9',
			obligatory: true
		},
		'CV531': {
			code: 'CV531',
			name: 'Engenharia Hidráulica',
			ementa: 'Movimento uniforme em canais. Energia específica. Ressalto hidráulico. Movimento gradualmente variado. Orifícios, bocais, vertedores, tubos curtos, hidrometria, calhas. Escoamentos em tubulações. Condutos equivalentes. Séries. Paralelo. Redes ramificadas e malhadas. Bombas, curvas e associações, cavitação. Bueiros. Tipos de barragens. Obras de transportes. Vertedores de superfície. Dissipação de energia. Desvios de rios.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['*CV431'],
			color: '#56A89D',
			obligatory: true
		},
		'CV532': {
			code: 'CV532',
			name: 'Eletrotécnica e Energia',
			ementa: 'Noções de corrente alternada. Aterramento. Sistemas monofásicos e trifásicos. Fator de potência. Transformadores. Motores elétricos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_329', '*F_328'],
			color: '#819976',
			obligatory: true
		},
		'CV541': {
			code: 'CV541',
			name: 'Qualidade Sanitária do Meio',
			ementa: 'Legislação em saneamento. Qualidade de águas de mananciais x tecnologias de tratamento. Características dos esgotos e padrões de emissão x tecnologias de tratamento. Caracterização de resíduos sólidos x tecnologias de manejo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:1, HS:6, SL:4, C:5},
			requisitos: ['CV141', 'QG102'],
			color: '#804F8E',
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
			color: '#72899C',
			obligatory: true
		},
		'CV613': {
			code: 'CV613',
			name: 'Estruturas de Madeira',
			ementa: 'A árvore. Propriedades físicas e mecânicas. Estados limites. Compressão simples. Instabilidade. Tração. Cisalhamento. Elementos para projetos de coberturas. Ligações: sambladuras, pregos e parafusos. Flexão simples e composta. Escoamento de valas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV511'],
			color: '#64989C',
			obligatory: true
		},
		'CV621': {
			code: 'CV621',
			name: 'Geotecnia II',
			ementa: 'Adensamento e compressibilidade. Resistência ao cisalhamento dos solos. Estabilidade de taludes. Empuxos. Estruturas de arrimo.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV521', '*CV511'],
			color: '#8F6F9B',
			obligatory: true
		},
		'CV622': {
			code: 'CV622',
			name: 'Estradas I',
			ementa: 'Planejamento. Planos rodoviários. Federal e Estadual. Projeto geométrico de rodovias e ferrovias. Escolha de traçados. Elaboração de projeto geométrico de rodovia. Segurança e dispositivos de conexão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV201', 'CV321', 'CV522', '*CV421'],
			color: '#6252B9',
			obligatory: true
		},
		'CV631': {
			code: 'CV631',
			name: 'Sistemas Elétricos Prediais',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica. Materiais elétricos. Proteção e comando de circuitos elétricos. Luminotécnica. Luz artificial e natural. Projeto de instalações elétricas. Instalações de para-raios. TV, som e telefone. Introdução à instalação de motores.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV532'],
			color: '#767098',
			obligatory: true
		},
		'CV632': {
			code: 'CV632',
			name: 'Hidrologia Básica',
			ementa: 'Ciclo hidrológico, bacia hidrográfica, precipitações, escoamento superficial, infiltração, evaporação e transpiração. Águas subterrâneas. Medições de vazão. Previsão de enchentes por métodos determinísticos (hidrogramas unitários), probabilísticos (Gumbel, Gumbel-chow, log-Pearson tipo III, log Normal, GRADEX, etc). Regularização de vazões. Amortecimento de cheias em reservatórios. Propagação de Enchentes em Canais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*CV531', '*ME203', '*MC102'],
			color: '#58A689',
			obligatory: true
		},
		'CV633': {
			code: 'CV633',
			name: 'Técnicas Construtivas I',
			ementa: 'Introdução às técnicas e processos construtivos. Mão de obra. Canteiro e locação de obras. Execução e detalhes de construção: fundações convencionais, alvenarias, impermeabilizações, revestimentos e pinturas, esquadrias, ferragens e coberturas usuais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV332'],
			color: '#804F8E',
			obligatory: true
		},
		'CV641': {
			code: 'CV641',
			name: 'Sistemas de Abastecimento de Águas',
			ementa: 'Introdução. Previsão populacional. Consumo de água. Mananciais. Barragens. Captação de água. Bombas e estações elevatórias. Adução de água. Reservatórios de distribuição. Redes de distribuição. Projeto.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:1, D:1, HS:5, SL:3, C:4},
			requisitos: ['CV531', '*CV541'],
			color: '#6B7C96',
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
			color: '#4682B9',
			obligatory: true
		},
		'CV702': {
			code: 'CV702',
			name: 'Sistemas Prediais, Hidráulico-Sanitários e Gás I',
			ementa: 'Sistemas prediais de água fria, quente, combate a incêndio com hidrantes e extintores, esgoto sanitário, água pluvial e gás combustível: conceituação, critérios de projeto e normalização. Conservação de água em edifícios: conceitos fundamentais.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV531', '*CV632'],
			color: '#5E87A0',
			obligatory: true
		},
		'CV712': {
			code: 'CV712',
			name: 'Teoria das Estruturas II',
			ementa: 'Coeficientes relativos às barras e cargas. Processo dos deslocamentos: manual e matricial. Simplificações de simetria. Linhas de influência de estruturas hiperestática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['CV511', '*CV612'],
			color: '#6B919C',
			obligatory: true
		},
		'CV713': {
			code: 'CV713',
			name: 'Estruturas Metálicas I',
			ementa: 'Coeficientes de ponderação de cargas. Dimensionamento de barras sob cargas axiais de tração e compressão de barras com perfil laminado. Dimensionamento de barras sob cargas de flexão ou de flexo-compressão com perfil laminado. Dimensionamento de ligações parafusadas e/ou soldadas sob cargas axiais e/ou de flexões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV511', '*CV612'],
			color: '#6B919C',
			obligatory: true
		},
		'CV714': {
			code: 'CV714',
			name: 'Estruturas de Concreto Armado I',
			ementa: 'Fundamentos do concreto armado. Principais elementos estruturais. Desenhos de fôrmas. Dimensionamento nos estados limites últimos. Lajes e vigas. Verificação dos estados limites de serviços.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV511', '*CV332', '*CV612'],
			color: '#727B97',
			obligatory: true
		},
		'CV721': {
			code: 'CV721',
			name: 'Fundações',
			ementa: 'Norma de fundações. Tipos de fundações. Interação solo-fundação. Investigação do subsolo. Capacidade de carga de fundação direta. Recalque de fundação direta. Influência das dimensões das fundações. Dimensionamento de fundação direta. Capacidade de carga de fundação profunda. Dimensionamento de fundação profunda. Provas de carga. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV521', 'CV621'],
			color: '#A45B9A',
			obligatory: true
		},
		'CV722': {
			code: 'CV722',
			name: 'Estradas II',
			ementa: 'Serviços de terraplenagem. Equipamentos de terraplenagem. Produção dos equipamentos. Sistemas de drenagem. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV421', 'CV622', '*CV632'],
			color: '#626AA9',
			obligatory: true
		},
		'CV741': {
			code: 'CV741',
			name: 'Sistemas de Esgotamento Hídrico: Sanitário e Pluvial',
			ementa: 'Sistemas de esgoto. Tipos de sistemas. Características do líquido a esgotar. Tipos de traçados. Partes constituintes. Quantidade de líquido a esgotar. Hidráulica de rede. Carga sobre tubos. Drenagem de águas pluviais. Sarjetas. Bocas de lobo. Galerias. Hidráulica e critérios de dimensionamento. Poço de visita. Caixa de ligação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV632', 'CV641'],
			color: '#629190',
			obligatory: true
		},
		'CV811': {
			code: 'CV811',
			name: 'Estruturas de Concreto Protendido I',
			ementa: 'Conceitos de protenção aplicada ao concreto: materiais e sistemas de protenção. Determinação das forças de protensão. Estados limites de serviços e últimos. Análise das tensões ao longo do vão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#727B97',
			obligatory: true
		},
		'CV812': {
			code: 'CV812',
			name: 'Estruturas de Pontes',
			ementa: 'Pontes de concreto: definições, nomenclatura, classificação. Ações. Pontes em vigas. Lajes dos tabuleiros das pontes em vigas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714'],
			color: '#727B97',
			obligatory: true
		},
		'CV813': {
			code: 'CV813',
			name: 'Estruturas Metálicas II',
			ementa: 'Introdução. Traves em treliças. Estrutura para coberturas em duas águas. Estrutura para coberturas tipo shed. Estrutura para coberturas em arco. Estrutura para edifícios industriais com ponte rolante. Projeto completo de um telhado em estrutura treliçada de aço.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV612', '*CV712', '*CV713'],
			color: '#6D8E9C',
			obligatory: true
		},
		'CV814': {
			code: 'CV814',
			name: 'Estruturas de Concreto Armado II',
			ementa: 'Dimensionamento de seções retangulares submetidas à flexo-compressão, normal e oblíqua. Pilares e fundações. Verificação dos efeitos globais de 2ª ordem. Escadas, consolos curtos, vigas-parede e reservatórios comuns de edifícios.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV612', '*CV714', '*CV712'],
			color: '#70879A',
			obligatory: true
		},
		'CV821': {
			code: 'CV821',
			name: 'Economia dos Transportes',
			ementa: 'Conceitos e métodos de planejamento e economia de transportes. Moldagem de demanda e oferta. Custos e tarifas. Mercados e competitividade. Avaliação econômica e operacional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: ['CV522'],
			color: '#4674B9',
			obligatory: true
		},
		'CV822': {
			code: 'CV822',
			name: 'Estradas III',
			ementa: 'Pavimentação. Estudos de solos para Rodovias. Agregados. Asfaltos. Pavimentos Rígidos. Métodos de dimensionamento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV722'],
			color: '#626AA9',
			obligatory: true
		},
		'CV823': {
			code: 'CV823',
			name: 'Aeroportos',
			ementa: 'Transporte aéreo. Planejamento e projeto de aeroportos, localização, comprimento de pista, características físicas. Zoneamento e proteção ao voo. Dimensionamento de pavimentos para aeroportos. Planejamento e projeto da área terminal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV522', 'CV622'],
			color: '#5463B9',
			obligatory: true
		},
		'CV831': {
			code: 'CV831',
			name: 'Regulamentações da Engenharia Civil',
			ementa: 'Noções de Direito Civil. Direito de propriedade. A Construção Civil e sua disciplina no Código Civil. Código do Consumidor. A legislação profissional e as de interesse dos Engenheiros Civis. Problemas profissionais. Noções sobre licitação. Cadastramento. Propostas e Contratos para a Construção Civil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#46B990',
			obligatory: true
		},
		'CV832': {
			code: 'CV832',
			name: 'Portos, Rios e Canais',
			ementa: 'Noções de comércio internacional. Evolução das embarcações e sua adequação às rotas comerciais. Planejamento de porto. Arranjo e projeto das principais obras de operação e de proteção. Noções de oceanografia. Estudo de vento, marés e ondas em mares e lagos. Estudo das vias navegáveis. Regularização e canalização. Projeto de obras de transposição de desnível.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV531', '*CV632'],
			color: '#57A793',
			obligatory: true
		},
		'CV841': {
			code: 'CV841',
			name: 'Ecologia Aplicada à Engenharia Civil',
			ementa: 'Engenharia Civil e a questão ambiental. Análise de impactos resultantes de obras civis. Avaliação de impactos ambientais resultantes de ações de engenharia civil no território.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA460'],
			color: '#B946B4',
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
		'CV921': {
			code: 'CV921',
			name: 'Superestrutura Ferroviária',
			ementa: 'Empreendimento ferroviário. Noções de projeto geométrico ferroviário. Seções transversais; drenagem; trilhos; dispositivos de fixação; dormentes; lastros; trilhos - escolha de um perfil. Esforços na plataforma. Equipamentos complementares de via. Construção de uma via nova. Manutenção da via férrea.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV522', 'CV622'],
			color: '#5463B9',
			obligatory: true
		},
		'CV922': {
			code: 'CV922',
			name: 'Serviços Logísticos: Gestão e Projeto',
			ementa: 'O contexto e a importância da logística no cenário atual brasileiro e internacional. Conceitos básicos de logísticas e caracterização dos principais componentes da Cadeia Logística. A gestão dos sistemas logísticos como diferencial competitivo. Qualidade e produtividade nos Serviços Logísticos. Administração de materiais. O transporte como componente da Cadeia Logística. A armazenagem e a movimentação de materiais como componente da Cadeia Logística. O fluxo de informações. A Estrutura Organizacional e Recursos Humanos nos Sistemas Logísticos. As Tendências dos Sistemas Logísticos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA450'],
			color: '#46B974',
			obligatory: true
		},
		'CV951': {
			code: 'CV951',
			name: 'Estágio Supervisionado',
			ementa: 'Técnicas de execução de obras ou projetos em empresa.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480'],
			color: '#46B9AB',
			obligatory: true
		},
		'CV954': {
			code: 'CV954',
			name: 'Trabalho Final de Curso I',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200', 'AA480', 'CV450'],
			color: '#4FB946',
			obligatory: true
		},
		'CV923': {
			code: 'CV923',
			name: 'Geotecnia III',
			ementa: 'Fluxo de água nos solos. Barragens. Cortinas e escoramento.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV621'],
			color: '#8F6F9B',
			obligatory: true
		},
		'CV955': {
			code: 'CV955',
			name: 'Trabalho Final de Curso II',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['CV954'],
			color: '#4FB946',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:13},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CV020': {
			code: 'CV020',
			name: 'Geotecnia Ambiental',
			ementa: 'Erosão. Geossintéticos. Disposição de resíduos. Investigação geoambiental. Remediação de áreas contaminadas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV621'],
			color: '#8F6F9B',
			obligatory: false
		},
		'CV021': {
			code: 'CV021',
			name: 'Laboratório de Mecânica dos Solos',
			ementa: 'Ensaios de caracterização. Permeabilidade. Compactação. Adensamento. Resistência ao cisalhamento.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV621'],
			color: '#8F6F9B',
			obligatory: false
		},
		'CV022': {
			code: 'CV022',
			name: 'Manutenção de Pavimentos',
			ementa: 'Tipos de pavimentos e serviços de manutenção. Agentes causadores de deterioração. Processo de deterioração e os efeitos em pavimentos flexíveis. Avaliação do estado funcional do pavimento flexível. Avaliação do estado estrutural do pavimento flexível. Evolução dos defeitos com o índice de serventia de um pavimento. Soluções de restauração de pavimentos flexíveis. Dimensionamento das camadas superpostas. Reconstrução de pavimento. Gerenciamento da manutenção.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV722'],
			color: '#626AA9',
			obligatory: false
		},
		'CV023': {
			code: 'CV023',
			name: 'Segurança Viária',
			ementa: 'Introdução ao conceito de segurança viária. Interseções em mesmo nível e diferentes níveis. Dispositivos e sistemas de controle de tráfego. Sinais de tráfego e sinalização de tráfego: tipos, cores, formatos, aplicação e controle. Projeto de sinalização: distâncias de livre passagem e de ultrapassagem. Distâncias de livre visão em cruzamentos em nível. Defensas e barreiras. Dispositivos e elementos potenciais de geração de acidentes. Acidentes de trânsito: estudo, caracterização e coleta de informações. Identificações de pontos críticos e técnicas de intervenção.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV522'],
			color: '#4674B9',
			obligatory: false
		},
		'CV024': {
			code: 'CV024',
			name: 'Complementos de Aeroportos',
			ementa: 'Previsões no Planejamento Aeroportuário, Análise de Capacidade e Atrasos do Lado Aéreo, Complementos de Projeto Geométrico, Planejamento e Projeto da Área Terminal, Terminal de Passageiros de Carga Aérea, Heliportos, Sinalização, Drenagem de Aeroportos, Pavimentos - O Método LCN e LCG e Impactos Ambientais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV823'],
			color: '#5463B9',
			obligatory: false
		},
		'CV025': {
			code: 'CV025',
			name: 'Barragens de Terra',
			ementa: 'Elementos constituintes de uma barragem. Processos construtivos. Concepção. Barragens construtivas. Elaboração de projeto.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV621'],
			color: '#8F6F9B',
			obligatory: false
		},
		'CV026': {
			code: 'CV026',
			name: 'Ensaios de Campo em Geotecnia',
			ementa: 'Características e emprego de métodos de investigação geotécnica: diretos e indiretos. Estudo e análise crítica dos parâmetros obtidos em campo para concepção de projetos de fundações. Provas de carga. Programação de investigação geotécnica.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV621'],
			color: '#8F6F9B',
			obligatory: false
		},
		'CV027': {
			code: 'CV027',
			name: 'Posicionamento Geodésico',
			ementa: 'Posicionamento por satélite, método fotográfico, sistema laser, altimetria por satélite, GPS, e GLONASS. Sistemas geodésicos de referência: sistema cartesiano terrestre, sistema cartesiano celeste, catálogo celeste de coordenadas, e catálogo terrestre de coordenadas (ITRF). O Sistema de GPS: estrutura dos satélites e dos Sinais. Medições com os códigos. Uso da fase de batimento da portadora. O problema da ambiguidade: métodos de resolução. Combinação linear das medições de fase nas duas portadoras. O GPS e a altimetria.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV321'],
			color: '#6B46B9',
			obligatory: false
		},
		'CV087': {
			code: 'CV087',
			name: 'Posicionamento Geodésico por Satélite',
			ementa: 'Posicionamento Geodésico por satélite. Sistemas Geodésicos de referência: sistema cartesiano terrestre, sistema cartesiano celeste, catálogo celeste de coordenadas e catálogo terrestre de coordenadas (IRTF). O sistema GNSS: estrutura dos satélites e dos sinais. Medições com os códigos. Uso da fase de batimento da portadora. O problema da ambiguidade: métodos de resolução. Combinação Linear das medições de fase nas duas portadoras. O GNSS e a altimetria. Aplicações em obras de engenharia que se utilizam dos levantamentos geodésicos, tais como: Monitoramento por satélite visando à segurança de frotas; Tecnologia de controle e gestão operacional de transporte; Construção de túneis; Implantação de estradas, ferrovias; Locação e controle de deformações em pontes, viadutos; Estabelecimento de pontos de controle GPS para apoio e navegação aérea, maritima e fluvial; Utilização de métodos topográficos e geodésicos no esporte e lazer; Levantamentos batimétricos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV321'],
			color: '#6B46B9',
			obligatory: false
		},
		'CV088': {
			code: 'CV088',
			name: 'Sistema de Informação Geográfica',
			ementa: 'Conceitos básicos. Tópicos de Geodésia. Sistema de projeções cartográficas - Sistema de projeção UTM. Etapas para implantação de um SIG (fontes de dados, componentes de um SIG, geocodificação, base cartográfica, banco de dados). Aplicações temáticas.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV321'],
			color: '#6B46B9',
			obligatory: false
		},
		'CV089': {
			code: 'CV089',
			name: 'Cartografia Digital',
			ementa: 'Evolução da cartografia. Projeções cartográficas. Classificação das projeções. Sistema de projeção UTM. Fotogrametria. Sensoriamento Remoto. Cartografia Digital, sistemática e temática.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV421'],
			color: '#6B46B9',
			obligatory: false
		},
		'CV090': {
			code: 'CV090',
			name: 'Cadastro Técnico Multifinalitário',
			ementa: 'Noções Básicas (NBR 14.166). Cadastro urbano. Rede de referência Cadastral. Conceitos básicos de SIG e sua aplicação em cadastro urbano. Base cartográfica. Métodos para levantamento cadastral. Problemas de locação. Cartografia digital versus Sistemas de Informação Geográfica (SIG).',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV321'],
			color: '#6B46B9',
			obligatory: false
		},
		'CV920': {
			code: 'CV920',
			name: 'Geomática',
			ementa: 'Geodésia: geométrica, física e espacial. Sistemas de projeções cartográficas. Posicionamento por satélite. Fotogrametria, sensoriamento remoto, sistema de informações geográficas.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV421'],
			color: '#6B46B9',
			obligatory: false
		},
		'CV924': {
			code: 'CV924',
			name: 'Complementos de Fundações',
			ementa: 'Fundações especiais. Provas de carga instrumentada. Técnicas de instrumentação em fundações. Ensaios especiais de campo. Análise da curva carga X recalque. Comportamento ao carregamento lateral e tração. Previsão de recalques. Probabilidade de ruína em engenharia de fundações. Estacas de compactação. Estacas de energia. Patologia e reforço de fundações.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV721'],
			color: '#A45B9A',
			obligatory: false
		},
		'CV925': {
			code: 'CV925',
			name: 'Terminais de Transporte',
			ementa: 'Conceituação geral. Localizações. Modelos de representação de fluxos e acúmulos. Acessos viários. Conceitos básicos quanto à forma de interfaces e layout interno. Terminais de passageiros. Terminais de carga na cadeia logística. Movimentação e armazenagem.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV522', 'CV622'],
			color: '#5463B9',
			obligatory: false
		},
		'CV926': {
			code: 'CV926',
			name: 'Apoio à Tomada de Decisão',
			ementa: 'Análise custo-benefício. Avaliação de impacto ambiental. Análise multicritério. Estruturação de problemas. Métodos de avaliação multicritério.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA470'],
			color: '#B94646',
			obligatory: false
		},
		'CV927': {
			code: 'CV927',
			name: 'Engenharia de Tráfego',
			ementa: 'Conceito de tráfego. Teorias do fluxo de tráfego. Capacidade e níveis de serviço em vias expressas, ruas e avenidas. Canalização e sinalização viária. Semáforos e sua coordenação. Esquemas de circulação viária. Estudos de acidentes. Organização de um departamento de trânsito. Papel do engenheiro no planejamento e gerenciamento do tráfego.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV522'],
			color: '#4674B9',
			obligatory: false
		},
		'CV928': {
			code: 'CV928',
			name: 'Laboratório de Aprendizagem em Logística e Transportes',
			ementa: 'Conceitos de estatística, pesquisa operacional e modelagem em sistemas logísticos e de transportes. Modelagem de demanda de transportes. Estudos de engenharia de tráfego. Modelagem da oferta de transportes, ciclos de viagens, função de produção e demais conceitos tanto para terminais multimodais quanto para frotas dos diferentes modais. Análise de competitividade entre modos de transporte tanto de passageiros quanto de cargas. Avaliação operacional de sistemas logísticos e de transportes segundo uma visão sistêmica.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA470'],
			color: '#46B958',
			obligatory: false
		},
		'CV929': {
			code: 'CV929',
			name: 'Transporte Público Urbano',
			ementa: 'Introdução. História de transporte urbano e da evolução das cidades. Modos de transporte urbano: coletivo e individual. Qualidade e eficiência. Integração. Linhas e redes. Planejamento e programação da operação. Controle da operação. Levantamento e pesquisas. Pontos de parada e estações (terminais). Sistema viário: geometria e priorização. Pagamento da passagem e controle de acesso. Informações aos usuários. Custos e tarifas. Avaliação de projetos e de sistemas de transporte público urbano. Legislação brasileira. Planejamento e gestão. Empresas operadoras. Transporte público e urbano.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV522'],
			color: '#4674B9',
			obligatory: false
		},
		'CV952': {
			code: 'CV952',
			name: 'Iniciação Científica em Engenharia Civil I',
			ementa: 'A ser definida em função de pesquisas em que o aluno se engajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B99946',
			obligatory: false
		},
		'CV953': {
			code: 'CV953',
			name: 'Iniciação Científica em Engenharia Civil II',
			ementa: 'A ser definida em função de pesquisas em que o aluno se angajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#A246B9',
			obligatory: false
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia. Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A2B946',
			obligatory: false
		},
		'HZ292': {
			code: 'HZ292',
			name: 'Tópicos Especiais de Humanidades II',
			ementa: 'Filosofia da ciência. Elementos de sociologia. Sociologia rural. Antropologia. Deontologia.Obs.: Sendo uma disciplina reservada aos cursos de engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96246',
			obligatory: false
		},
		'HZ293': {
			code: 'HZ293',
			name: 'Tópicos Especiais de Humanidades III',
			ementa: 'O curso abordará a análise dos aspectos sociais das inovações tecnológicas e da pesquisa científica. No decorrer das exposições e seminários, serão desenvolvidas análises de casos precisos, tentando incorporar um quadro de referência comparativo entre a sociedade brasileira e o contexto internacional.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8646B9',
			obligatory: false
		}
	}
};

export default catalogue;
