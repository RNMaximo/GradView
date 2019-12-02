const catalogue = {
	totalCredits: 248,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EB101', 'EB102', 'EB401', 'EB931', 'EB932']
		},
		'sem-2': {
			id: '2',
			subjects: ['EB103', 'EB104', 'EB201', 'EB403', 'EB933']
		},
		'sem-3': {
			id: '3',
			subjects: ['EB203', 'EB204', 'EB301', 'EB406', 'EB940']
		},
		'sem-4': {
			id: '4',
			subjects: ['EB206', 'EB402', 'EB935', 'EB936', 'EB937', 'ST215', 'ST216']
		},
		'sem-5': {
			id: '5',
			subjects: ['EB205', 'EB501', 'EB603', 'EB938', 'EB939', 'EB955', 'ST309']
		},
		'sem-6': {
			id: '6',
			subjects: ['EB941', 'EB942', 'ST410', 'ST423', 'ST540']
		},
		'sem-7': {
			id: '7',
			subjects: ['EB944', 'EB945', 'EB946', 'EB947', 'EB948', 'EB949', 'ST529']
		},
		'sem-8': {
			id: '8',
			subjects: ['EB943', 'EB950', 'EB951', 'EB952', 'EB953', 'EB954', 'EB956', 'EB957']
		},
		'sem-9': {
			id: '9',
			subjects: ['EB802', 'EB958', 'EB959', 'EB960', 'EB961', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EB962', 'EB963', 'EB964', 'EB965', 'EB966', 'EB967', 'EB968', 'EB969']
		},
		'sem-11': {
			id: '11',
			subjects: ['EB970', 'EB971', 'EB972', 'ELET11']
		}
	},

	subjects: {
		'EB101': {
			code: 'EB101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D9408C'
		},
		'EB102': {
			code: 'EB102',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40B3D9'
		},
		'EB401': {
			code: 'EB401',
			name: 'Comunicação e Expressão',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9'
		},
		'EB931': {
			code: 'EB931',
			name: 'Fundamentos da Engenharia de Transportes',
			ementa: 'Papel dos transportes na sociedade contemporânea. Estágio atual da Engenharia de Transportes. Noções de controle operacional. Visão logística aplicada a sistemas regionais e urbanos de transporte rodoviário e ferroviários de carga e de passageiros. Circulação viária e controle de tráfego. Informática aplicada aos transportes. Perspectivas para os transportes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6640D9'
		},
		'EB932': {
			code: 'EB932',
			name: 'Química Geral Aplicada à Engenharia',
			ementa: 'Abordagem conceitual dos princípios fundamentais da Química e suas aplicações. Teoria atômica e estequiometria química. Propriedades das soluções. Equilíbrio químico. Equilíbrio: Ácidos e Bases. Estrutura atômica: Ligações e propriedades. Estrutura molecular: ligações e propriedades. Eletroquímica. Cinética. Gases. Minerais. Polímeros. Noções básicas de espectrofotometria. Tratamento de dados analíticos. Experimentos ilustrando o método científico, preparação de soluções, padronização de soluções, equilíbrio ácido-base, determinação de pH.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96640'
		},
		'EB103': {
			code: 'EB103',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940'
		},
		'EB104': {
			code: 'EB104',
			name: 'Laboratório de Física I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#66D940'
		},
		'EB201': {
			code: 'EB201',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EB101'],
			color: ''
		},
		'EB403': {
			code: 'EB403',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101'],
			color: ''
		},
		'EB933': {
			code: 'EB933',
			name: 'Representação Gráfica',
			ementa: 'Desenvolvimento de habilidades ligadas ao uso de ferramentas gráficas manuais e digitais (sistemas CAD) fundamentais para o desenho técnico (projeções e perspectivas), visando a representação, interpretação e solução de problemas.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#8C40D9'
		},
		'EB203': {
			code: 'EB203',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB103'],
			color: ''
		},
		'EB204': {
			code: 'EB204',
			name: 'Laboratório de Física II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica. Viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB103', 'EB104'],
			color: ''
		},
		'EB301': {
			code: 'EB301',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EB201'],
			color: ''
		},
		'EB406': {
			code: 'EB406',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101'],
			color: ''
		},
		'EB940': {
			code: 'EB940',
			name: 'Filosofia da Ciência',
			ementa: 'Explicação, causação e leis; explicação científica; a estrutura e a metafísica das teorias científicas; o problema da Indução; falsificacionismo de Popper; teorias como estruturas: Lakatos e Thomas Kuhn; racionalismo, relativismo e objetivismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940'
		},
		'EB206': {
			code: 'EB206',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB103'],
			color: ''
		},
		'EB402': {
			code: 'EB402',
			name: 'Fenômenos de Transporte',
			ementa: 'Estática e cinemática de fluidos. Equações gerais da dinâmica dos fluidos. Fluidos Newtonianos e não Newtonianos. Escoamento laminar e turbulento Escoamento em dutos. Condução de calor. Convecção natural e forçada. Transferência de calor com mudança de fase. Radiação. Transferência de massa difusiva, convectiva. Transferência simultânea de calor, massa e movimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB203', 'EB301'],
			color: ''
		},
		'EB935': {
			code: 'EB935',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Planimetria e altimetria. Levantamento Cadastral de áreas urbanas e rurais. Demarcação de obras civis e viárias: teoria e prática.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB933'],
			color: ''
		},
		'EB936': {
			code: 'EB936',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Noções de lógica de programação. Dados, expressões e algoritmos sequenciais. Estruturas de controle. Estruturas complexas. Modularização.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D940D9'
		},
		'EB937': {
			code: 'EB937',
			name: 'Introdução às Ciências Ambientais Voltada aos Transportes',
			ementa: 'Fenômenos químicos da poluição atmosférica produzida pelos transportes. Recursos energéticos e utilização de recursos naturais renováveis e não renováveis. Combustíveis fósseis e biocombustíveis – etanol de primeira e segunda geração e biodiesel. Introdução a poluição do solo e águas subterrâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B340D9'
		},
		'ST215': {
			code: 'ST215',
			name: 'Mecânica Geral',
			ementa: 'Estática, conceitos fundamentais. Força. Momento de uma força. Vínculos e ligações. Grau de mobilidade. Trabalhos virtuais. Equilíbrio de fios, catenária e cabos parabólicos. Cinemática. Movimento, velocidade, aceleração. Dinâmica. Conservação de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*EB102'],
			color: ''
		},
		'ST216': {
			code: 'ST216',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D966'
		},
		'EB205': {
			code: 'EB205',
			name: 'Metodologia Científica e Tecnológica',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos. Redação de textos técnicos. Elaboração de Relatórios. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4066D9'
		},
		'EB501': {
			code: 'EB501',
			name: 'Hidráulica I',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB402'],
			color: ''
		},
		'EB603': {
			code: 'EB603',
			name: 'Ciência e Tecnologia dos Materiais',
			ementa: 'Introdução a Ciência dos Materiais. Materiais de construção. Aglomerantes. Agregados. Argamassas. Concreto: propriedades, produção e dosagem. Aço. Aplicação de materiais reciclados. Ensaios de laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B3'
		},
		'EB938': {
			code: 'EB938',
			name: 'Topografia II',
			ementa: 'Elementos básicos de geodésia. Noções de Cartografia. Cartas topográficas e sistemas de projeção. Introdução ao Sistema de Posicionamento Global (GPS) e aplicações. Aplicativos computacionais. Normas e procedimentos técnicos, analíticos e práticos de georreferenciamento. Projeto e demarcação de obras.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB935'],
			color: ''
		},
		'EB939': {
			code: 'EB939',
			name: 'Grafos e Redes',
			ementa: 'Conceitos. Conectividade e acessibilidade. Problemas de cobertura e partição de conjuntos. Problemas de p-medianas e p-centros. Problema de caminhos mínimos. Expansão de grafos em árvores. Problemas eulerianos e hamiltonianos. Coloração em grafos. Planaridade em grafos. Problemas de fluxo em redes. Modelos de otimização de fluxo em redes multimodais e multi-produtos. Problemas de matchings. Problemas de roteirização de arcos (CPP, UCPP, DCPP, MCPP, URPP, DRPP). Problemas de matchings.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB936'],
			color: ''
		},
		'EB955': {
			code: 'EB955',
			name: 'Legislação',
			ementa: 'Código Brasileiro de trânsito. Leis, decretos, resoluções e regulamentos dos órgãos de transportes e trânsito. Parceria Público-Privada. Estatuto das Cidades. Lei de criação das Agências Nacionais. Normativas ANTT, ANTAC, ANAC. Lei 8666 – Licitações. Lei de Uso e Ocupação do Solo. Lei 8987 – Concessões. Lei Transporte Multimodal de Cargas. Lei do Transporte Urbano.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98C'
		},
		'ST309': {
			code: 'ST309',
			name: 'Resistência dos Materiais I',
			ementa: 'Vinculação das estruturas, definições e considerações gerais. Graus de mobilidade e classificação das estruturas. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Vigas isostáticas, pórticos e vigas Gerber. Momentos de 1a. e 2a. ordem, centro de gravidade e momentos de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*ST215'],
			color: ''
		},
		'EB941': {
			code: 'EB941',
			name: 'Hidrologia',
			ementa: 'Ciência hidrológica. Precipitação. Bacia Hidrográfica. Escoamento superficial: grandezas características, vazão máxima e hidrograma de projeto. Hidrometria de cursos d’água. Manipulação dos dados de vazão: fluviogramas, curva de permanência e regularização de vazão. Estatística aplicada a hidrologia.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB403', '*EB938'],
			color: ''
		},
		'EB942': {
			code: 'EB942',
			name: 'Engenharia de Tráfego',
			ementa: 'Características do tráfego. Capacidade das vias. Interseções. Capacidade das interseções. Segurança de tráfego. Sinalização. Estacionamento. Técnicas de levantamentos de campo. Pesquisas de tráfego.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB403'],
			color: ''
		},
		'ST410': {
			code: 'ST410',
			name: 'Mecânica dos Solos I',
			ementa: 'Propriedades e índices. Identificação tactil-visual. Técnicas de amostragem, ensaios e classificação dos solos. Investigação do subsolo. Permeabilidade, compacidade, limites de consistência. Ensaios e equipamentos de laboratório. Ensaios de controle de compactação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST216'],
			color: ''
		},
		'ST423': {
			code: 'ST423',
			name: 'Resistência dos Materiais II',
			ementa: 'Cargas axiais e tangenciais. Torção em barras de secção circular. Tensões em vigas, flexão simples, composta e oblíqua. Estados de tensão. Circulo de Mohr. Conceito de polo. Combinação de esforços. Critérios de resistência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST309'],
			color: ''
		},
		'ST540': {
			code: 'ST540',
			name: 'Sistemas de Informações Geográficas',
			ementa: 'Elementos essenciais do SIG. Estrutura de dados. Vetorial e Matricial. Aquisição de dados. Gerenciamento de dados. Análise de dados. Fundamentos e técnicas de análise espacial. Exemplos e aplicações de uso do SIG em transportes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB938'],
			color: ''
		},
		'EB944': {
			code: 'EB944',
			name: 'Concreto Armado I',
			ementa: 'Fundamentos e princípios básicos de dimensionamento, hipóteses de cálculo. Comportamento das estruturas. Métodos dos Estados Limites. Estados Limites últimos para solicitações. Método dos Estados Limites (ELU e ELS), ancoragem e emendas por traspasse. Dimensionamento de elementos lineares à flexão e ao cisalhamento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB603', '*ST423'],
			color: ''
		},
		'EB945': {
			code: 'EB945',
			name: 'Sistemas de Transportes',
			ementa: 'A Função transporte. Sistemas de transportes. Movimentação das cargas. Transporte multimodal. Intermodalidade. Transporte de passageiros. Corredores de transportes. Integração dos sistemas de transportes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB938'],
			color: ''
		},
		'EB946': {
			code: 'EB946',
			name: 'Projeto e Construção de Estradas',
			ementa: 'Projeto geométrico de estradas. Anteprojeto. Aerofotogramétrico. Reconhecimento e exploração. Curvas circulares. Curvas de transição. Perfil do terreno natural. Cálculo de cotas sobre as rampas e nas curvas de concordância. Superelevação e superlargura. Seções transversais, primitivas e de projeto. Cálculo de áreas. Diagrama de massas.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB938'],
			color: ''
		},
		'EB947': {
			code: 'EB947',
			name: 'Transporte Hidroviário',
			ementa: 'Definições: hidrovias, embarcações, portos. A malha de transporte hidroviário no Brasil. O transporte hidroviário interior no mundo. Fatores do baixo aproveitamento do transporte hidroviário. Impactos ambientais do transporte fluvial. Legislação ambiental. Licenciamento ambiental. Flutuabilidade, estabilidade, resistência ao avanço. Tipos de embarcações: de passageiros e de cargas. Projeto de uma embarcação: características da via, características da embarcação. Arranjo geral dos portos: dimensionamento de canal de acesso, dimensionamento de profundidade, dimensionamento de bacia de evolução e área de fundeio. Geometria de hidrovias fluviais. Dimensionamento de frota. Custo do transporte fluvial.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB941'],
			color: ''
		},
		'EB948': {
			code: 'EB948',
			name: 'Pesquisa Operacional',
			ementa: 'Programação linear. Problemas de transporte. Resolução gráfica de problemas de programação linear aplicada. Conceito de otimização. Formulação de problemas de otimização por meio de modelos de programação linear. Conceitos de variáveis de folga e variáveis artificiais. Obtenção de solução básica inicial. Resolução algébrica de problemas de otimização.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB102', '*EB403', '*EB939'],
			color: ''
		},
		'EB949': {
			code: 'EB949',
			name: 'Drenagem de Estradas',
			ementa: 'Processos hidrológicos em bacias hidrográficas. Análises estatísticas das precipitações e chuvas de projeto. Escoamento superficial e propagação do fluxo. Planejamento, concepção de projetos de sistemas de drenagens das rodovias e estradas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB941'],
			color: ''
		},
		'ST529': {
			code: 'ST529',
			name: 'Mecânica dos Solos II',
			ementa: 'Adensamento e compressibilidade. Recalques por adensamento. Resistência ao cisalhamento dos solos. Empuxos. Estruturas de arrimo. CBR. Ensaios. Fluxo de água nos solos. Redes de fluxo. Subpressão das estruturas enterradas. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST410', '*ST423'],
			color: ''
		},
		'EB943': {
			code: 'EB943',
			name: 'Operação de Vias de Transportes',
			ementa: 'Pedágios. Sistemas de controle centralizado do tráfego. Controle da qualidade do sistema viário. Participação do cidadão-usuário. Operação e controle. Programação semafórica. Sinalização. Controle de tráfego por área.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D940'
		},
		'EB950': {
			code: 'EB950',
			name: 'Projeto de Terminais Portos e Aeroportos',
			ementa: 'Introdução ao planejamento de portos, aeroportos e vias navegáveis. Interpretação e leitura de projeto. Análise da demanda. Caracterização do sítio de implantação. Configuração dos portos, aeroportos e vias navegáveis. Terminais de carga e passageiros. Soluções técnico-econômicas. Métodos construtivos. Impactos ambientais.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB941', '*EB949', '*ST529'],
			color: ''
		},
		'EB951': {
			code: 'EB951',
			name: 'Demanda de Transportes',
			ementa: 'Modelagem da escolha discreta. Modelo logit multinominal. Modelo probit. Técnica de preferência declarada. Técnica de preferência observada. Equilíbrio oferta x demanda. Metodologias e métodos de coleta de dados. Modelos de previsão de demanda de transportes. Avaliação de alternativas de atendimento da demanda. Modelos de escolha discreta baseados em utilidade aleatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB403', '*EB945'],
			color: ''
		},
		'EB952': {
			code: 'EB952',
			name: 'Logística',
			ementa: 'Visão Geral da Logística. Cadeia de Suprimentos (Supply Chain) – conceitos principais. Organização de Suprimentos: funções e objetivos. Compras e fornecedores. Armazenagem. Gestão de Estoques. Just-in-Time. Avaliação do sistema de suprimentos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA450'],
			color: '#D98C40'
		},
		'EB953': {
			code: 'EB953',
			name: 'Pavimentação I',
			ementa: 'Interação carga-estrutura e análise de camadas. Determinação de parâmetros de tráfego. Dimensionamento de pavimentos flexíveis. Avaliação estrutural de pavimentos flexíveis.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB946', '*ST410'],
			color: ''
		},
		'EB954': {
			code: 'EB954',
			name: 'Ferrovias',
			ementa: 'Via permanente. Esforços sobre a via. Aparelhos de via. Pátios e terminais. Tração e aderência. Resistência do trem. Circulação de trens. Material rodante.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB946', '*ST423'],
			color: ''
		},
		'EB956': {
			code: 'EB956',
			name: 'Movimento de Terra',
			ementa: 'Trabalhos Preparatórios. Introdução à Terraplenagem. Locomoção e Produtividade dos Equipamentos de Terraplenagem. Previsão de Produção dos diversos Equipamentos. Seleção e manutenção dos Equipamentos de Terraplenagem. Acompanhamento das operações de Máquinas de Terraplenagem - Custo de Utilização dos equipamentos - Aterros e obras de Consolidação da Estrada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB938', '*ST423', '*ST529'],
			color: ''
		},
		'EB957': {
			code: 'EB957',
			name: 'Ensaios para Materiais de Pavimentação',
			ementa: 'Caracterização e classificação de materiais utilizados em pavimentos flexíveis e rígidos. Solo, agregados, ligantes, misturas asfálticas. Definição de granulometria e dosagem. Materiais sustentáveis.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST410', '*ST529'],
			color: ''
		},
		'EB802': {
			code: 'EB802',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B340'
		},
		'EB958': {
			code: 'EB958',
			name: 'Planejamento de Transporte Urbano e Uso do Solo',
			ementa: 'Introdução à problemática dos transportes urbanos. Explosão Urbana. Estrutura urbana e movimentação de pessoas. O desenho urbano e uso do solo. Níveis de planejamento. O Processo de planejamento de Transportes Urbanos. Critérios de priorização. Modelos de iteração espacial. Modelos de micro-simulação. Novas perspectivas para os modelos de planejamento de transporte urbano e uso do solo. Caracterização do transporte público. Planejamento dos transportes públicos. Programação e operação dos transportes públicos. Gestão do sistema de transportes públicos. Regulamentos dos transportes públicos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB403', '*EB942', '*ST540'],
			color: ''
		},
		'EB959': {
			code: 'EB959',
			name: 'Sistemas de Monitoramento e Controle de Tráfego',
			ementa: 'Conceitos básicos. Equipamentos de controle de tráfego. Critérios de implantação. Centrais de controle de tráfego: rodoviário, ferroviário e aeroviário. Softwares para controle.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB942', '*EB948'],
			color: ''
		},
		'EB960': {
			code: 'EB960',
			name: 'Pavimentação II',
			ementa: 'Reforços estruturais para pavimentos asfálticos. Análise Mecanicista de estruturas de pavimentos. Processos de degradação dos pavimentos flexíveis. Conservação, recuperação e gerenciamento.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB953'],
			color: ''
		},
		'EB961': {
			code: 'EB961',
			name: 'Modais de Transportes',
			ementa: 'Transporte Intermodal: Conceitos e Fundamentos da operação intermodal. Intermodalidade e logística no transporte. Transporte intermodal no Brasil e no mundo. Tecnologias aplicadas ao transporte intermodal. Classificação geral dos Terminais de Transporte. Caracterização geral dos terminais de passageiros. Caracterização geral dos terminais de carga. Terminais Intermodais.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D9B3'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'EB962': {
			code: 'EB962',
			name: 'Planejamento Estratégico de Transportes',
			ementa: 'Estratégia. Conceitos de Planejamento Operacional, Tático e Estratégico. Processo de Tomada de Decisão. Técnicas de Estruturação de Problemas. Análise de Cenários. Estratégias de Transporte. Indicadores de desempenho logístico. Sistemas de Informações Logísticas. Tópicos Emergentes de Transportes.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB802', '*EB948', '*EB951'],
			color: ''
		},
		'EB963': {
			code: 'EB963',
			name: 'Modelagem Econômica de Transportes',
			ementa: 'Conceitos básicos de micro-economia: demanda, elasticidade da demanda e curva de demanda; custo marginal de produção e a curva de oferta. Modelos de equilíbrio econômico em redes: modelo de concorrência perfeita, modelo do monopólio, modelos de oligopólios (Cournot, Bertrand, Stackelberg). Modelos de equilíbrio em redes com intervenção econômica.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['*EB802', '*EB939'],
			color: ''
		},
		'EB964': {
			code: 'EB964',
			name: 'Pavimento Rígido',
			ementa: 'Dosagem do concreto. Ensaios de controle tecnológico. Dimensionamento de pavimentos rígidos. Construção e controle de execução. Pavimentação de calçadas e praças. Patologias em pavimentos rígidos. Conservação, recuperação e gerenciamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB603', '*EB960'],
			color: ''
		},
		'EB965': {
			code: 'EB965',
			name: 'Impactos Ambientais dos Transportes',
			ementa: 'Definições básicas, possíveis impactos ocasionados por projetos de transportes. Estudos dos Impactos Ambientais: sua obrigatoriedade no Brasil e a sua composição. Processo de licenciamento ambiental. A experiência brasileira na avaliação de impactos ambientais. Métodos e procedimentos para avaliação quantitativa dos impactos ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D94040'
		},
		'EB966': {
			code: 'EB966',
			name: 'Ergonomia e Segurança do Trabalho',
			ementa: 'Introdução a engenharia de segurança. Higiene do trabalho. Gerências de riscos. O ambiente e as doenças do trabalho. Normas regulamentadoras. Conceitos de trabalho, tarefa, atividade, variabilidade, carga de trabalho e regulação. Metodologia de análise ergonômica do trabalho. Métodos e técnicas para a análise da atividade. Ergonomia e projeto. Programa de ergonomia nas empresas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA465'],
			color: '#D94066'
		},
		'EB967': {
			code: 'EB967',
			name: 'Introdução ao Trabalho de Conclusão de Curso',
			ementa: 'Definir o Plano do Trabalho de Conclusão do Curso de Engenharia de Transportes, contendo a revisão bibliográfica, objetivos e metodologia sobre o trabalho a ser desenvolvido, sob a orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA460'],
			color: '#408CD9'
		},
		'EB968': {
			code: 'EB968',
			name: 'Conservação e Manutenção de Pavimentos',
			ementa: 'Comportamento dos pavimentos. Ruína estrutural e funcional. Conservação de rodovias. Manutenção, prevenção, recuperação, reconstrução e reforço. Patologias dos pavimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB960'],
			color: ''
		},
		'EB969': {
			code: 'EB969',
			name: 'Segurança de Vias',
			ementa: 'Sinalização vertical e horizontal. Sinalização rodoviária e urbana. Sinalização especial. Estudos de acidentes e análise de riscos. Segurança em vias urbanas. Segurança em rodovias e vicinais. Cidades inteligentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*EB960'],
			color: ''
		},
		'EB970': {
			code: 'EB970',
			name: 'Atividades Complementares',
			ementa: 'Participação em Atividades Complementares. A matrícula nesta disciplina será autorizada pela Coordenação do Curso mediante apresentação de documentos comprobatórios da execução de atividades complementares por parte do aluno, de acordo com regras internas do curso, visando a contabilização, em créditos, das atividades efetuadas.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA465'],
			color: '#40D9D9'
		},
		'EB971': {
			code: 'EB971',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Realização do Trabalho de Conclusão de Curso, com objetivo de aprofundar e aplicar os conhecimentos específicos das disciplinas, sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['*EB967'],
			color: ''
		},
		'EB972': {
			code: 'EB972',
			name: 'Estágio Supervisionado',
			ementa: 'Realização do Estágio Supervisionado em Engenharia de Transportes, sob orientação de um professor e um supervisor na empresa ou instituição onde o estágio será desenvolvido. O estágio deve ser realizado em área correlata ao curso de Engenharia de Transportes. Obs.: Não é responsabilidade da UNICAMP procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA460'],
			color: '#B3D940'
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
