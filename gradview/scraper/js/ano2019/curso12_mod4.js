const catalogue = {
	totalCredits: 284,
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
			subjects: ['CV401', 'CV402', 'CV411', 'CV421', 'CV431', 'CV450', 'F_328', 'F_329', 'ELET2']
		},
		'sem-5': {
			id: '5',
			subjects: ['CV501', 'CV511', 'CV521', 'CV522', 'CV531', 'CV532', 'CV541', 'ELET3']
		},
		'sem-6': {
			id: '6',
			subjects: ['CV612', 'CV613', 'CV621', 'CV622', 'CV631', 'CV632', 'CV633', 'CV641', 'ELET3']
		},
		'sem-7': {
			id: '7',
			subjects: ['CV701', 'CV702', 'CV712', 'CV713', 'CV714', 'CV721', 'CV722', 'CV741']
		},
		'sem-8': {
			id: '8',
			subjects: ['CV811', 'CV812', 'CV813', 'CV814', 'CV821', 'CV822', 'CV823', 'CV831', 'CV832', 'CV841', 'ELET2']
		},
		'sem-9': {
			id: '9',
			subjects: ['CV941', 'CV942', 'CV945', 'CV951', 'CV954']
		},
		'sem-10': {
			id: '10',
			subjects: ['CV943', 'CV955', 'CV984', 'ELET8']
		}
	},

	subjects: {
		'CV101': {
			code: 'CV101',
			name: 'Desenho Projetivo',
			ementa: 'Introdução aos conceitos básicos do desenho projetivo.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ''
		},
		'CV111': {
			code: 'CV111',
			name: 'Sistemas Estruturais',
			ementa: 'Noções fundamentais sobre a Engenharia Estrutural. Sistemas estruturais: descrição e estudo dos tipos de Sistemas Estruturais.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ''
		},
		'CV141': {
			code: 'CV141',
			name: 'Química para Engenharia Civil',
			ementa: 'Estequiometria. Ácidos e Bases. Equilíbrio Químico. Oxidação e Redução. Reações de Precipitação. Corrosão. Química dos Materiais. Água. Atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ''
		},
		'CV151': {
			code: 'CV151',
			name: 'Introdução à Engenharia Civil',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos da Engenharia. Origem e evolução da Engenharia Civil. A Engenharia Civil brasileira. A Faculdade de Engenharia Civil, Arquitetura e Urbanismo e a estrutura curricular do curso da Unicamp. O empreendimento de Engenharia e suas fases. Estudos de casos nas diferentes áreas. Visitas de campo. Atribuições profissionais e perspectivas do mercado de trabalho.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ''
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CV201': {
			code: 'CV201',
			name: 'Desenho Assistido por Computador',
			ementa: 'Apresentação de uma ferramenta de desenho e projeto assistido por computador.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['CV101']
		},
		'CV202': {
			code: 'CV202',
			name: 'Material de Construção Civil I',
			ementa: 'Introdução ao estudo dos materiais de construção. Propriedades dos materiais. Pedras naturais para revestimento. Agregados para argamassas e concretos. Aglomerantes minerais: gesso, cal, cimento Portland. Argamassas. Proporcionamento de argamassas. Materiais cerâmicos. Aços para concreto armado. Aço para concreto protendido.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV141', 'QG102']
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'GM420': {
			code: 'GM420',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra (geosfera, atmosfera, hidrosfera, biosfera e antroposfera) ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141']
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141']
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'CV301': {
			code: 'CV301',
			name: 'Física para Engenharia Civil',
			ementa: 'Temperatura e Dilatação. Calorimetria e transferência de calor. Termodinâmica. Aplicações ao conforto térmico de ambientes. Elasticidade. Ondas em meios materiais. Propagação de ondas. Corpos vibrantes. Fenômenos acústicos. Aplicações ao conforto acústico de ambientes. Natureza e propagação da luz. Conceitos de iluminação e fotometria. Lentes e instrumentos óticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'F_129', 'MA111']
		},
		'CV312': {
			code: 'CV312',
			name: 'Mecânica Geral',
			ementa: 'Fundamentos da mecânica newtoniana. Estática dos pontos materiais. Sistemas de partículas. Estática dos corpos rígidos. Centróides, baricentros e momentos de inércia. Análise de estruturas. Atrito.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV111', '*MA211']
		},
		'CV321': {
			code: 'CV321',
			name: 'Topografia e Geodésia I',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas). Planimetria (medições de distâncias e ângulos; taqueometria, topometria). Altimetria. Métodos de representação do relevo. Locação de obras de engenharia.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV101']
		},
		'CV332': {
			code: 'CV332',
			name: 'Materiais de Construção Civil II',
			ementa: 'Propriedades do concreto fresco. Concreto: preparo, transporte, lançamento, adensamento e cura. Propriedades do concreto endurecido. Aditivos. Dosagem. Controle Tecnológico do concreto. Ensaios não destrutivos. Materiais luminosos. Madeiras. Tintas e vernizes. Vidros. Plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV202']
		},
		'CV351': {
			code: 'CV351',
			name: 'Introdução à Economia',
			ementa: 'Objetivo e conceitos da economia. Noções de macroeconomia e de microeconomia. Evolução do pensamento econômico. Noções de produção, preço e lucro. Engenharia econômica: juros e equivalência. Análise de investimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211']
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102']
		},
		'CV401': {
			code: 'CV401',
			name: 'Administração Aplicada à Empresas de Construção',
			ementa: 'Teorias de administração. Princípios de administração. As funções de planejamento e controle. Administração de produção, financeira, pessoal e suprimentos. Noções de contabilidade e balanço.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV351']
		},
		'CV402': {
			code: 'CV402',
			name: 'Projeto Arquitetônico',
			ementa: 'Fases de elaboração do projeto arquitetônico. Características do sítio urbano/uso e ocupação do solo. Implantação e localização. Programa de necessidades. Isolação. Ventilação natural. Iluminação natural. Condições de compartimentos. Circulação. Noções básicas de projeto.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', '*CV321']
		},
		'CV411': {
			code: 'CV411',
			name: 'Mecânica dos Sólidos I',
			ementa: 'Esforços solicitantes. Tração, compressão. Lei de Hooke. Flexão geral. Linha elástica',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV111', '*CV312']
		},
		'CV421': {
			code: 'CV421',
			name: 'Topografia e Geodésia II',
			ementa: 'Introdução (NBR 13.133 e NBR 14.144). Terraplenagem. Teoria dos erros. Geodésia. Astronomia de Posição. Cartografia (Sistemas de Projeções; Sistema Universal de Mercator - UTM). Geodésia por satélite (Sistema de Posicionamento Global - GPS). Geoprocessamento. Fotogrametria.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV321']
		},
		'CV431': {
			code: 'CV431',
			name: 'Mecânica dos Fluidos',
			ementa: 'Noções fundamentais. Lei de viscosidade. Tensão num ponto. Estática dos fluidos. Medidas de pressão. Cinemática. Dinâmica. Análise dimensional e semelhanças. Efeitos de viscosidade no movimento de fluidos.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['MA211', '*CV312']
		},
		'CV450': {
			code: 'CV450',
			name: 'Metodologia Científica e Redação Científica',
			ementa: 'Como organizar um TFC: escolha de tema, organização de revisão bibliográfica, fichamento, elaboração de um anteprojeto. Estruturas do trabalho: introdução, desenvolvimento, conclusão. Uniformização redacional segundo recomendações da ABNT.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200']
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'CV501': {
			code: 'CV501',
			name: 'Planejamento Urbano',
			ementa: 'Origens, históricos e conceitos básicos do planejamento urbano. Objetivos, teorias e métodos do planejamento urbano. O plano diretor, os seus levantamentos, análises, a sua elaboração e implantação. Aspectos específicos e técnicos de setores urbanos. Equipamento, infraestrutura e serviços.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV402']
		},
		'CV511': {
			code: 'CV511',
			name: 'Mecânica dos Sólidos II',
			ementa: 'Tensão. Deformação. Energia de deformação. Torção. Teoremas de energia. Flambagem. Critérios de resistência.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV312', '*CV411', 'MA311', 'MA327/*CV411', 'F_315', 'MA311', 'MA327']
		},
		'CV521': {
			code: 'CV521',
			name: 'Geotecnia I',
			ementa: 'Classificação dos solos. Pressões totais, neutras e efetivas. Distribuição de pressões no solo. Permeabilidade. Compactação.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GM420']
		},
		'CV522': {
			code: 'CV522',
			name: 'Técnica dos Transportes',
			ementa: 'Sistemas de transporte. Modalidade. Características gerais e específicas de rodovias, ferrovias, aquavias e dutovias. Estudo comparativo das modalidades, resistência ao movimento, desempenho técnico, capacidade de flexibilidade de atendimento. Integração intermodal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV351']
		},
		'CV531': {
			code: 'CV531',
			name: 'Engenharia Hidráulica',
			ementa: 'Movimento uniforme em canais. Energia específica. Ressalto hidráulico. Movimento gradualmente variado. Orifícios, bocais, vertedores, tubos curtos, hidrometria, calhas. Escoamentos em tubulações. Condutos equivalentes. Séries. Paralelo. Redes ramificadas e malhadas. Bombas, curvas e associações, cavitação. Bueiros. Tipos de barragens. Obras de transportes. Vertedores de superfície. Dissipação de energia. Desvios de rios.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['*CV431']
		},
		'CV532': {
			code: 'CV532',
			name: 'Eletrotécnica e Energia',
			ementa: 'Noções de corrente alternada. Aterramento. Sistemas monofásicos e trifásicos. Fator de potência. Transformadores. Motores elétricos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_329', '*F_328']
		},
		'CV541': {
			code: 'CV541',
			name: 'Qualidade Sanitária do Meio',
			ementa: 'Legislação em saneamento. Qualidade de águas de mananciais x tecnologias de tratamento. Características dos esgotos e padrões de emissão x tecnologias de tratamento. Caracterização de resíduos sólidos x tecnologias de manejo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:1, HS:6, SL:4, C:5},
			requisitos: ['CV141', 'QG102']
		},
		'ELET3': {
			code: 'ELET3',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: ''
		},
		'CV612': {
			code: 'CV612',
			name: 'Teoria das Estruturas I',
			ementa: 'Princípio dos trabalhos virtuais. Deslocamentos de estruturas lineares. Processo dos esforços: treliças, grelhas, pórticos e arcos. Linhas de influência de estruturas isostáticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CV411', '*CV511']
		},
		'CV613': {
			code: 'CV613',
			name: 'Estruturas de Madeira',
			ementa: 'A árvore. Propriedades físicas e mecânicas. Estados limites. Compressão simples. Instabilidade. Tração. Cisalhamento. Elementos para projetos de coberturas. Ligações: sambladuras, pregos e parafusos. Flexão simples e composta. Escoamento de valas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV511']
		},
		'CV621': {
			code: 'CV621',
			name: 'Geotecnia II',
			ementa: 'Adensamento e compressibilidade. Resistência ao cisalhamento dos solos. Estabilidade de taludes. Empuxos. Estruturas de arrimo.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV521', '*CV511']
		},
		'CV622': {
			code: 'CV622',
			name: 'Estradas I',
			ementa: 'Planejamento. Planos rodoviários. Federal e Estadual. Projeto geométrico de rodovias e ferrovias. Escolha de traçados. Elaboração de projeto geométrico de rodovia. Segurança e dispositivos de conexão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV201', 'CV321', 'CV522', '*CV421']
		},
		'CV631': {
			code: 'CV631',
			name: 'Sistemas Elétricos Prediais',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica. Materiais elétricos. Proteção e comando de circuitos elétricos. Luminotécnica. Luz artificial e natural. Projeto de instalações elétricas. Instalações de para-raios. TV, som e telefone. Introdução à instalação de motores.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV532']
		},
		'CV632': {
			code: 'CV632',
			name: 'Hidrologia Básica',
			ementa: 'Ciclo hidrológico, bacia hidrográfica, precipitações, escoamento superficial, infiltração, evaporação e transpiração. Águas subterrâneas. Medições de vazão. Previsão de enchentes por métodos determinísticos (hidrogramas unitários), probabilísticos (Gumbel, Gumbel-chow, log-Pearson tipo III, log Normal, GRADEX, etc). Regularização de vazões. Amortecimento de cheias em reservatórios. Propagação de Enchentes em Canais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*CV531', '*ME414', '*MC102']
		},
		'CV633': {
			code: 'CV633',
			name: 'Técnicas Construtivas I',
			ementa: 'Introdução às técnicas e processos construtivos. Mão de obra. Canteiro e locação de obras. Execução e detalhes de construção: fundações convencionais, alvenarias, impermeabilizações, revestimentos e pinturas, esquadrias, ferragens e coberturas usuais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*CV332']
		},
		'CV641': {
			code: 'CV641',
			name: 'Sistemas de Abastecimento de Águas',
			ementa: 'Introdução. Previsão populacional. Consumo de água. Mananciais. Barragens. Captação de água. Bombas e estações elevatórias. Adução de água. Reservatórios de distribuição. Redes de distribuição. Projeto.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:1, D:1, HS:5, SL:3, C:4},
			requisitos: ['CV531', '*CV541']
		},
		'ELET3': {
			code: 'ELET3',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: ''
		},
		'CV701': {
			code: 'CV701',
			name: 'Planejamento e Controle de Empreendimentos',
			ementa: 'Conceitos fundamentais e organização de empreendimentos. O gerenciamento no canteiro de obras. Fases e operação da construção civil, estruturas organizacionais para o gerenciamento de operações. Orçamentos e BDI. Programação de atividades: metodologia, sistemática de programação, técnicas determinísticas e probabilísticas. Acompanhamento e controle operacional.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414', '*CV401']
		},
		'CV702': {
			code: 'CV702',
			name: 'Sistemas Prediais, Hidráulico-Sanitários e Gás I',
			ementa: 'Sistemas prediais de água fria, quente, combate a incêndio com hidrantes e extintores, esgoto sanitário, água pluvial e gás combustível: conceituação, critérios de projeto e normalização. Conservação de água em edifícios: conceitos fundamentais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV201', 'CV531', '*CV632']
		},
		'CV712': {
			code: 'CV712',
			name: 'Teoria das Estruturas II',
			ementa: 'Coeficientes relativos às barras e cargas. Processo dos deslocamentos: manual e matricial. Simplificações de simetria. Linhas de influência de estruturas hiperestática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['CV511', '*CV612']
		},
		'CV713': {
			code: 'CV713',
			name: 'Estruturas Metálicas I',
			ementa: 'Coeficientes de ponderação de cargas. Dimensionamento de barras sob cargas axiais de tração e compressão de barras com perfil laminado. Dimensionamento de barras sob cargas de flexão ou de flexo-compressão com perfil laminado. Dimensionamento de ligações parafusadas e/ou soldadas sob cargas axiais e/ou de flexões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV511', '*CV612']
		},
		'CV714': {
			code: 'CV714',
			name: 'Estruturas de Concreto Armado I',
			ementa: 'Fundamentos do concreto armado. Principais elementos estruturais. Desenhos de fôrmas. Dimensionamento nos estados limites últimos. Lajes e vigas. Verificação dos estados limites de serviços.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV511', '*CV332', '*CV612']
		},
		'CV721': {
			code: 'CV721',
			name: 'Fundações',
			ementa: 'Norma de fundações. Tipos de fundações. Interação solo-fundação. Investigação do subsolo. Capacidade de carga de fundação direta. Recalque de fundação direta. Influência das dimensões das fundações. Dimensionamento de fundação direta. Capacidade de carga de fundação profunda. Dimensionamento de fundação profunda. Provas de carga. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV521', 'CV621']
		},
		'CV722': {
			code: 'CV722',
			name: 'Estradas II',
			ementa: 'Serviços de terraplenagem. Equipamentos de terraplenagem. Produção dos equipamentos. Sistemas de drenagem. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV421', '*CV622', '*CV632']
		},
		'CV741': {
			code: 'CV741',
			name: 'Sistemas de Esgotamento Hídrico: Sanitário e Pluvial',
			ementa: 'Sistemas de esgoto. Tipos de sistemas. Características do líquido a esgotar. Tipos de traçados. Partes constituintes. Quantidade de líquido a esgotar. Hidráulica de rede. Carga sobre tubos. Drenagem de águas pluviais. Sarjetas. Bocas de lobo. Galerias. Hidráulica e critérios de dimensionamento. Poço de visita. Caixa de ligação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['CV632', 'CV641']
		},
		'CV811': {
			code: 'CV811',
			name: 'Estruturas de Concreto Protendido I',
			ementa: 'Conceitos de protenção aplicada ao concreto: materiais e sistemas de protenção. Determinação das forças de protensão. Estados limites de serviços e últimos. Análise das tensões ao longo do vão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714']
		},
		'CV812': {
			code: 'CV812',
			name: 'Estruturas de Pontes',
			ementa: 'Pontes de concreto: definições, nomenclatura, classificação. Ações. Pontes em vigas. Lajes dos tabuleiros das pontes em vigas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['CV714']
		},
		'CV813': {
			code: 'CV813',
			name: 'Estruturas Metálicas II',
			ementa: 'Introdução. Traves em treliças. Estrutura para coberturas em duas águas. Estrutura para coberturas tipo shed. Estrutura para coberturas em arco. Estrutura para edifícios industriais com ponte rolante. Projeto completo de um telhado em estrutura treliçada de aço.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CV612', '*CV712', '*CV713']
		},
		'CV814': {
			code: 'CV814',
			name: 'Estruturas de Concreto Armado II',
			ementa: 'Dimensionamento de seções retangulares submetidas à flexo-compressão, normal e oblíqua. Pilares e fundações. Verificação dos efeitos globais de 2ª ordem. Escadas, consolos curtos, vigas-parede e reservatórios comuns de edifícios.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['CV612', '*CV714', '*CV712']
		},
		'CV821': {
			code: 'CV821',
			name: 'Economia dos Transportes',
			ementa: 'Conceitos e métodos de planejamento e economia de transportes. Moldagem de demanda e oferta. Custos e tarifas. Mercados e competitividade. Avaliação econômica e operacional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: ['CV522']
		},
		'CV822': {
			code: 'CV822',
			name: 'Estradas III',
			ementa: 'Pavimentação. Estudos de solos para Rodovias. Agregados. Asfaltos. Pavimentos Rígidos. Métodos de dimensionamento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV722']
		},
		'CV823': {
			code: 'CV823',
			name: 'Aeroportos',
			ementa: 'Transporte aéreo. Planejamento e projeto de aeroportos, localização, comprimento de pista, características físicas. Zoneamento e proteção ao voo. Dimensionamento de pavimentos para aeroportos. Planejamento e projeto da área terminal.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CV522', 'CV622']
		},
		'CV831': {
			code: 'CV831',
			name: 'Regulamentações da Engenharia Civil',
			ementa: 'Noções de Direito Civil. Direito de propriedade. A Construção Civil e sua disciplina no Código Civil. Código do Consumidor. A legislação profissional e as de interesse dos Engenheiros Civis. Problemas profissionais. Noções sobre licitação. Cadastramento. Propostas e Contratos para a Construção Civil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460']
		},
		'CV832': {
			code: 'CV832',
			name: 'Portos, Rios e Canais',
			ementa: 'Noções de comércio internacional. Evolução das embarcações e sua adequação às rotas comerciais. Planejamento de porto. Arranjo e projeto das principais obras de operação e de proteção. Noções de oceanografia. Estudo de vento, marés e ondas em mares e lagos. Estudo das vias navegáveis. Regularização e canalização. Projeto de obras de transposição de desnível.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*CV531', '*CV632']
		},
		'CV841': {
			code: 'CV841',
			name: 'Ecologia Aplicada à Engenharia Civil',
			ementa: 'Engenharia Civil e a questão ambiental. Análise de impactos resultantes de obras civis. Avaliação de impactos ambientais resultantes de ações de engenharia civil no território.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA460']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'CV941': {
			code: 'CV941',
			name: 'Laboratório de Saneamento',
			ementa: 'Segurança e boas práticas em laboratório. Importância e metodologias de determinação dos principais parâmetros físicos, químicos e bacteriológicos para caracterização de águas de abastecimento e águas residuais.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV141', 'QG102']
		},
		'CV942': {
			code: 'CV942',
			name: 'Tratamento de Águas para Abastecimento',
			ementa: 'Qualidade da água. Coagulação. Mistura rápida. Floculação. Decantação. Filtração. Desinfecção. Fluoretação.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV541']
		},
		'CV945': {
			code: 'CV945',
			name: 'Gestão em Saneamento Ambiental',
			ementa: 'Licenciamento ambiental. Manejo urbano de recursos naturais. Redes técnicas de saneamento. Sustentabilidade socioambiental.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ''
		},
		'CV951': {
			code: 'CV951',
			name: 'Estágio Supervisionado',
			ementa: 'Técnicas de execução de obras ou projetos em empresa.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480']
		},
		'CV954': {
			code: 'CV954',
			name: 'Trabalho Final de Curso I',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA480', 'CV450']
		},
		'CV943': {
			code: 'CV943',
			name: 'Tratamento de Esgotos e Efluentes Industriais',
			ementa: 'Características dos esgotos domésticos. Tratamento preliminar. Processo biológico de tratamento. Lagoas de estabilização. Tratamento secundário: Iodos ativados e filtração biológica. Decantação. Produção e secagem de Iodo. Digestão e tratamento terciário.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:1, HS:4, SL:3, C:3},
			requisitos: ['CV541']
		},
		'CV955': {
			code: 'CV955',
			name: 'Trabalho Final de Curso II',
			ementa: 'Projeto teórico ou prático orientado por um docente da FEC que atua no curso de Engenharia Civil.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['CV954']
		},
		'CV984': {
			code: 'CV984',
			name: 'Gestão e Gerenciamento Integrado de Resíduo Sólido',
			ementa: 'Origem e geração de resíduo sólido. Caracterização de resíduo sólido. Gestão integrada de resíduo sólido. Prevenção e minimização de resíduo sólido. Sistemas de coleta, transporte e armazenamento. Tecnologias de tratamento: reciclagem, compostagem, incineração, pirólise, biogás e aterro sanitário. Produção de energia através do resíduo sólido. Impactos ambientais e análise de ciclo de vida.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV541']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;
