const catalogue = {
	totalCredits: 244,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['QG111', 'QG122', 'MA111', 'MA141', 'F_128', 'ES101']
		},
		'sem-2': {
			id: '2',
			subjects: ['EM104', 'ES330', 'MA211', 'F_328', 'MC102']
		},
		'sem-3': {
			id: '3',
			subjects: ['ES242', 'F_129', 'EA513', 'MA311', 'MC202']
		},
		'sem-4': {
			id: '4',
			subjects: ['EM360', 'EM306', 'MS211', 'MA327', 'MC322']
		},
		'sem-5': {
			id: '5',
			subjects: ['ME414', 'EE532', 'EM404', 'EM461', 'MC404']
		},
		'sem-6': {
			id: '6',
			subjects: ['ES570', 'EE534', 'EA611', 'ES601', 'ES572']
		},
		'sem-7': {
			id: '7',
			subjects: ['ES672', 'ES704', 'EM406', 'EM607', 'MC732', 'ES575']
		},
		'sem-8': {
			id: '8',
			subjects: ['EM335', 'EM506', 'ET520', 'ES710', 'ES879']
		},
		'sem-9': {
			id: '9',
			subjects: ['EM733', 'ES663', 'ES963', 'ES626', 'ES827', 'ES670']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'ES664', 'ES690', 'ES926', 'ES728', 'ES070']
		},
		'sem-11': {
			id: '11',
			subjects: ['BE310', 'ES951', 'ES925', 'ES828', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['ES965', 'ES952', 'CE304', 'CE738', 'ES010']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['EA---', 'EE---', 'EG---', 'EI---', 'EM---', 'ES---', 'F_---', 'MA---', 'MC---', 'ME---', 'MS---'],
		},
	},

	subjects: {
		'ES101': {
			code: 'ES101',
			name: 'Introdução à Engenharia de Controle e Automação',
			ementa: 'Noções gerais sobre ciência e tecnologia e fundamentos metodológicos da engenharia. Origem e evolução de Engenharia de Controle e Automação. Perspectivas da área de trabalho. Habilidades de comunicação e expressão do engenheiro. Métodos de redação técnica e científica. Mercado profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B988',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9846B9',
			obligatory: true
		},
		'QG111': {
			code: 'QG111',
			name: 'Química Teórica',
			ementa: 'Matéria e radiação eletromagnética; Estrutura atômica; Ligação química; Forças intermoleculares, Metais; Isolantes e semicondutores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#67B946',
			obligatory: true
		},
		'QG122': {
			code: 'QG122',
			name: 'Química Experimental',
			ementa: 'Funções termodinâmicas; Equilíbrios químicos; Soluções; Eletroquímica; Materiais.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99046',
			obligatory: true
		},
		'EM104': {
			code: 'EM104',
			name: 'Desenho Técnico Assistido por Computador',
			ementa: 'Instrumentação e normas. Sistemas de projeções e perspectivas. Convenções e construções geométricas. Métodos descritivos. Rebatimento. Correspondência homológica. Operação inversa ao rebatimento. Mudança de planos. Introdução a um programa computacional de desenho. Desenho de elementos de máquinas. Desenho de máquinas. Desenho de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4E46B9',
			obligatory: true
		},
		'ES330': {
			code: 'ES330',
			name: 'Oficinas - Mecatrônica',
			ementa: 'Metrologia Industrial. Instrumentos básicos de medição linear, angular e posição. Dispositivos de controle dimensional. Programação (código G) e operação de Máquinas-Ferramenta CNC. Simbologia eletro/eletrônica. Comandos elétricos. Comandos de reversão e partida estrela-triângulo. Montagens básicas de dispositivos de eletrônica de potência. Diodos retificadores, tiristores, conversores, amplificadores. Controlador programável - diagrama Ladder. Eletro-pneumática: simbologia, válvulas e interpretação de circuitos. Eletro-hidráulica: normas, simbologia, motores, bombas, válvulas proporcionais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94690',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#6193A9',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#6F80A1',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B9A0',
			obligatory: true
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#46B988',
			obligatory: true
		},
		'ES242': {
			code: 'ES242',
			name: 'Materiais de Engenharia',
			ementa: 'A estrutura cristalina dos metais: modelos e defeitos. Ligações e difusão atômica. Estrutura e propriedades dos materiais. Materiais cerâmicos e poliméricos. Materiais conjugados. Materiais de grau eletrônico (obtenção/extração, beneficiamento e caracterização). Materiais específicos para o segmento eletro/eletrônico (placas de CI, materiais para contatores e/ou disjuntores). Materiais para aplicação em microeletrônica. Materiais específicos para construção de robôs industriais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG111', 'QG122'],
			color: '#90A546',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#98B946',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211'],
			color: '#6F80A1',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#46B9A0',
			obligatory: true
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#6F80A1',
			obligatory: true
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#6F80A1',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141'],
			color: '#9846B9',
			obligatory: true
		},
		'MC322': {
			code: 'MC322',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: '#46B9A0',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#6193A0',
			obligatory: true
		},
		'EE532': {
			code: 'EE532',
			name: 'Eletrônica Aplicada',
			ementa: 'Dispositivos semicondutores: diodos, transistores BJT e MOS. Circuitos com amplificadores operacionais. Conversão de dados: características, amostragem e análise de ruído. Sensores: características e condicionamento de seus sinais. Atuadores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: '#46B988',
			obligatory: true
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#6F80A1',
			obligatory: true
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Lei básica da estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno: perda de carga. Escoamento viscoso incompressível externo: arrasto e sustentação. Máquinas de Fluxo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#6F80A1',
			obligatory: true
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores relevantes. Desenvolvimento, implementação e testes de programas usando linguagens de montagem. Espaço de endereçamento físico e mapeamento de endereços para memória e periféricos. Programação de dispositivos de entrada e saída. Tratamento de interrupções.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: '#46B9A0',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#46B988',
			obligatory: true
		},
		'EA611': {
			code: 'EA611',
			name: 'Circuitos II',
			ementa: 'Transformada de Laplace. Teoremas de Reciprocidade e de Miller, Dualidade; Estruturas de Dois Pares de Terminais. Circuitos Trifásicos, Representação de Sistemas de Energia Elétrica. Componentes Simétricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: '#46B988',
			obligatory: true
		},
		'EE534': {
			code: 'EE534',
			name: 'Laboratório de Eletrônica Aplicada',
			ementa: 'Análise e síntese de circuitos eletrônicos utilizando: diodos, transistores BJT e MOS, amplificadores operacionais, conversores de dados, sensores e atuadores.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE532'],
			color: '#46B988',
			obligatory: true
		},
		'ES570': {
			code: 'ES570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à Transferência de Calor e à Condução. Condução Unidimensional em Regime Permanente. Introdução à Condução Bidimensional em Regime Permanente. Formulação Concentrada da Condução Transitória. Introdução à Convecção Térmica. Convecção em Escoamentos Externos. Convecção Natural em Escoamentos Externos. Radiação Térmica: Processos e Propriedades e Transferência de Calor.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: '#6F80A1',
			obligatory: true
		},
		'ES572': {
			code: 'ES572',
			name: 'Circuitos Lógicos',
			ementa: 'Conceitos lógicos. Circuitos básicos. Minimização de funções Booleanas. Sistemas de numeração. Aritmética binária. Códigos. Circuitos à contato. Síntese de circuitos combinacionais. Circuitos de memória. Circuitos sequenciais. Projeto de circuitos sequenciais. Máquinas de Mealy e Moore. Projeto de contadores, decodificadores e multiplexadores. Temporizadores: monoestáveis, astáveis e osciladores. Dispositivos lógicos programáveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4EB946',
			obligatory: true
		},
		'ES601': {
			code: 'ES601',
			name: 'Análise Linear de Sistemas',
			ementa: 'Caracterização de sistemas lineares no tempo contínuo e no tempo discreto. Teorema da amostragem. Função de transferência. Análise de resposta em frequência de sistemas no tempo contínuo e no tempo discreto. Representação no espaço de estado. Realizações canônicas de funções de transferência. Solução temporal no espaço de estado. Estabilidade de sistemas contínuos e discretos. Conceitos básicos de controlabilidade e observabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MA327'],
			color: '#8463AD',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#6F80A1',
			obligatory: true
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas lineares de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404', 'MA327'],
			color: '#8463AD',
			obligatory: true
		},
		'ES575': {
			code: 'ES575',
			name: 'Laboratório de Circuitos Lógicos',
			ementa: 'Circuitos combinacionais. Flip-flops, contadores e temporizadores. Circuitos sequenciais. Conversor digital/analógico e analógico/digital. Dispositivos lógicos programáveis.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES572'],
			color: '#4EB946',
			obligatory: true
		},
		'ES672': {
			code: 'ES672',
			name: 'Sistemas Fluidotérmicos I',
			ementa: 'Introdução à psicrometria. Sistemas de ventilação, condicionamento de ar e frigoríficos. Conceitos aplicados ao cálculo de carga térmica. Fluidos refrigerantes. Componentes dos sistemas de compressão. Componentes dos sistemas de distribuição de gases e líquidos. Cálculo de redes de condutos. Projeto. Introdução à combustão. Motores de combustão interna. Geração e Distribuição de vapor. Geração de potência e co-geração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'ES570'],
			color: '#6F80A1',
			obligatory: true
		},
		'ES704': {
			code: 'ES704',
			name: 'Instrumentação Básica',
			ementa: 'Características estáticas e dinâmicas dos instrumentos e sensores. Análise de dados e incertezas experimentais. Princípios gerais de transdução. Medidas de pressão, vazão e temperatura. Medida e análise de deslocamento, velocidade, aceleração, força, torque, potência mecânica. Medições de som. Instrumentação industrial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE532', 'ME414'],
			color: '#46B988',
			obligatory: true
		},
		'MC732': {
			code: 'MC732',
			name: 'Projeto de Sistemas Computacionais',
			ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de Entrada/Saída.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES572', 'MC404'],
			color: '#4AB973',
			obligatory: true
		},
		'EM335': {
			code: 'EM335',
			name: 'Tecnologia Mecânica',
			ementa: 'Normalização. Tolerâncias dimensionais e geométricas. Cadeia de Dimensões. Rugosidade. Metrologia industrial. Princípios de Processos de Fabricação. Planejamento do processo e Sobrematerial. Noções de Controle Estatístico de Processo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM104'],
			color: '#4E46B9',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#6F80A1',
			obligatory: true
		},
		'ES710': {
			code: 'ES710',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceito de realimentação. Modelagem de sistemas dinâmicos no tempo contínuo e no tempo discreto. Equivalentes discretos e sistemas amostrados. Análise de resposta em regime transitório e estacionário. Análise de resposta em frequência. Critérios de estabilidade: Routh-Hurwitz e de Nyquist. Projetos no domínio da frequência contínuo e discreto: avanço-atraso; lugar das raízes; PID. Conversão de controladores do tempo contínuo para discreto.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607', 'ES601'],
			color: '#8463AD',
			obligatory: true
		},
		'ES879': {
			code: 'ES879',
			name: 'Sistemas de Aquisição de Dados',
			ementa: 'Amplificadores e condicionadores de sinais. Principais filtros analógicos. Conversão D/A e A/D, amostragem e efeitos de quantização. Transformada Z e Tranformada de Fourier discreta. Filtros digitais FIR e IIR. Experimentos apresentando os efeitos e o teorema da amostragem, filtros analógicos e digitais típicos e análise de resposta em frequência.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES601'],
			color: '#8463AD',
			obligatory: true
		},
		'ET520': {
			code: 'ET520',
			name: 'Princípios de Conversão de Energia',
			ementa: 'Circuitos magnéticos. Transformadores. Princípios de conversão eletromecânica de energia. Introdução às máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA611', 'F_328'],
			color: '#54A699',
			obligatory: true
		},
		'EM733': {
			code: 'EM733',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Tempos padrões. Classificação dos sistemas de manufatura. Tecnologia de grupo. Produtividade industrial. Planejamento e controle da produção. Teoria das Restrições. MRP I e II. Arranjo físico. Sistema Toyota de Produção.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#4E46B9',
			obligatory: true
		},
		'ES626': {
			code: 'ES626',
			name: 'Modelagem de Dispositivos Eletromecânicos',
			ementa: 'Eletromagnetismo aplicado a dispositivos eletromecânicos. Sistemas multidomínio. Modelagem e análise dinâmica de dispositivos multidomínio. Sistemas eletromecânicos, magnéticos e eletro-hidráulicos. Sensores e atuadores. Simulação de comportamento dinâmico usando circuitos equivalentes e grafos de conexões (bond graphs). Aplicação a sistemas mecatrônicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: '#8463AD',
			obligatory: true
		},
		'ES663': {
			code: 'ES663',
			name: 'Eletrônica para Automação Industrial',
			ementa: 'Revisão de máquinas elétricas de corrente contínua e corrente alterada. Métodos de controle de velocidade de motores. Revisão dos componentes eletrônicos utilizados, diodos de potência, transistores bipolares, mosfet de potência e dispositivos tiristores. Controle de motores de baixa potência. Controle de motores de imã permanente, sem escova e de passo. Acionamento a velocidade variável de motores trifásicos de alta potência. Acionamento a velocidade variável de motores de corrente contínua e de indução. Retificadores, conversores e inversores de frequência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532', 'ET520'],
			color: '#4DB091',
			obligatory: true
		},
		'ES670': {
			code: 'ES670',
			name: 'Projeto de Sistemas Embarcados',
			ementa: 'Conceitos gerais de sistemas embarcados. Arquiteturas de microprocessadores, microcontroladores e processadores digitais de sinais. Conceito básico de sistemas de tempo real. Metodologia de projeto de sistemas embarcados. Sistemas de máquinas de estados. Metodologia SDL. Administração do tempo em sistemas computacionais. Linguagens de programação e sistemas operacionais para tempo real. Exemplos práticos de projeto de sistemas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC732'],
			color: '#4AB973',
			obligatory: true
		},
		'ES827': {
			code: 'ES827',
			name: 'Robótica Industrial',
			ementa: 'Visão geral dos manipuladores. Fundamentos de tecnologia, programação e aplicações de robôs. Descrição matemática de manipuladores. Sistemas de coordenadas em robótica. Modelagem cinemática direta e inversa. Análise e controle de movimentos dos robôs. Modelagem dinâmica e controle de movimentos. Geração de trajetórias. Órgãos terminais, e sensores em robótica. Linguagens de programação de robôs.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES710'],
			color: '#8463AD',
			obligatory: true
		},
		'ES963': {
			code: 'ES963',
			name: 'Laboratório de Dispositivos Eletromecânicos',
			ementa: 'Simulação de sistemas eletromecânicos. Testes experimentais dos principais sistemas eletromecânicos. Transformadores. Solenoides. Motores CC e CA. Mini e micromotores. Motores de relutância variável. Sistemas eletromagnéticos didáticos. Projeto de atuadores.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ET520'],
			color: '#54A699',
			obligatory: true
		},
		'ES070': {
			code: 'ES070',
			name: 'Laboratório de Sistemas Embarcados',
			ementa: 'Aplicação prática dos conceitos de arquitetura de microcontroladores e microprocessadores. Programação em linguagem de montagem e linguagem C. Técnicas de programação em tempo real. Máquinas de estado. Interfaces de entrada/saída. Programação de interfaces. Comunicação de dados. Interrupções. Aplicação de técnicas e linguagem de modelagem de sistemas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES575', 'ES670'],
			color: '#4CB95D',
			obligatory: true
		},
		'ES664': {
			code: 'ES664',
			name: 'Laboratório de Eletrônica para Automação Industrial',
			ementa: 'Dispositivos de potência: diodos, tiristores, transistores e outros dispositivos semi-condutores. Reguladores de potência. Conversores. Controle de motores CC. Inversores. Controles de motores CA.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES663'],
			color: '#4DB091',
			obligatory: true
		},
		'ES690': {
			code: 'ES690',
			name: 'Sistemas Mecânicos',
			ementa: 'Descrição, dimensionamento, seleção e utilização de elementos mecânicos. Análise de sistemas mecânicos e transmissão de energia. Modelagem matemática de sistemas dinâmicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM506'],
			color: '#6F80A1',
			obligatory: true
		},
		'ES728': {
			code: 'ES728',
			name: 'Controle Avançado de Sistemas',
			ementa: 'Modelagem no espaço de estado para sistemas contínuos e discretos. Projeto de controladores contínuos e discretos por realimentação completa de estado. Projeto de rastreadores. Controlabilidade e Observabilidade. Estimadores e observadores de estado. Projeto de controladores dinâmicos contínuos e discretos por realimentação de saída. Controlador linear quadrático ótimo contínuo e discreto. Normas H2 e H-infinito. Projetos de controladores H2 e H-infinito. Introdução às incertezas de modelagem e robustez.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES710'],
			color: '#8463AD',
			obligatory: true
		},
		'ES926': {
			code: 'ES926',
			name: 'Automação Industrial',
			ementa: 'Aplicações da automação pneumática, hidráulica e elétrica. Circuitos eletro-hidráulicos e eletropneumáticos industrias. Modelagem e controle de sistemas automatizados. Aplicações de controladores industriais: controladores programáveis e computadores industrias. Integração com métodos de engenharia de produção. Controle de células de manufatura. Dispositivos de segurança. Estudo de casos práticos envolvendo sistemas de produção industrial automatizados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513', 'ES572'],
			color: '#4AB967',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#B946A8',
			obligatory: true
		},
		'ES828': {
			code: 'ES828',
			name: 'Laboratório de Controle de Sistemas',
			ementa: 'Identificação de parâmetros de sistemas, controladores avanço-atraso, controladores PID, controladores por realimentação de estados, reguladores lineares quadráticos, controladores em tempo-discreto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: '#8463AD',
			obligatory: true
		},
		'ES925': {
			code: 'ES925',
			name: 'Laboratório de Automação Industrial',
			ementa: 'Controladores lógicos; Análise e programação de Sistemas Automatizados; Sensores; Dispositivos básicos hidráulicos e pneumáticos; Acionamentos Industriais baseados em motores elétricos; Interface Homem Máquina; Controle manual e automático; Comunicação entre dispositivos automatizados.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES926'],
			color: '#4AB967',
			obligatory: true
		},
		'ES951': {
			code: 'ES951',
			name: 'Trabalho de Graduação I',
			ementa: 'Definição do tema, escolha da metodologia a ser utilizada. Definição do cronograma de atividades. Revisão de conceitos específicos para a elaboração do TG. Esta disciplina será desenvolvida sob orientação de um professor do curso (FEM, FEEC ou IC ou de algum profissional ligado a órgão interessado) com apresentação de resultados parciais a uma banca examinadora constituída por professores/profissionais da área.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200', 'AA475'],
			color: '#B1B946',
			obligatory: true
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94677',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A0B9',
			obligatory: true
		},
		'ES010': {
			code: 'ES010',
			name: 'Estágio Supervisionado',
			ementa: 'Exercício de atividades típicas do profissional em Controle e Automação junto a órgão habilitado pela coordenação de graduação. O estagiário deverá possuir um orientador no local do estágio, além de um professor orientador da FEM, FEEC ou IC. O estagiário apresentará ao professor-orientador um relatório final de atividades.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#6746B9',
			obligatory: true
		},
		'ES952': {
			code: 'ES952',
			name: 'Trabalho de Graduação II',
			ementa: 'Conclusão do TG, com ênfase teórica e/ou tecnológica de forma a englobar conhecimentos adquiridos em diversas disciplinas do curso de Engenharia de Controle e Automação. A orientação poderá ser feita por professor da FEM, FEEC ou IC. Ao final do trabalho o aluno apresentará uma monografia escrita, além da apresentação final a uma banca examinadora constituída por professores/profissionais da área.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'ES951'],
			color: '#B1B946',
			obligatory: true
		},
		'ES965': {
			code: 'ES965',
			name: 'Projeto de Sistemas Mecatrônicos',
			ementa: 'Sistemática e Metodologia do projeto Industrial. Arquitetura Mecânica, concepção a partir de critérios de funcionalidade do produto, QFD. Análise do valor no desenvolvimento do projeto. Métodos de Sistematização da criatividade no projeto. Projeto Seguro. Ergonomia, Confiabilidade. Projetar para modularidade, expansão, disponibilidade, Controle, custo, etc (design for). Documentação técnica de um projeto: Atributos do produto, detalhes construtivos desenho de montagem final.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA480'],
			color: '#466FB9',
			obligatory: true
		},
		'EA---': {
			code: 'EA---',
			name: 'Qualquer Disciplina com codigo EA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B96F',
			obligatory: false
		},
		'EE---': {
			code: 'EE---',
			name: 'Qualquer Disciplina com codigo EE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EE---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B146B9',
			obligatory: false
		},
		'EG---': {
			code: 'EG---',
			name: 'Qualquer Disciplina com codigo EG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B957',
			obligatory: false
		},
		'EI---': {
			code: 'EI---',
			name: 'Qualquer Disciplina com codigo EI---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EI---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'EM---': {
			code: 'EM---',
			name: 'Qualquer Disciplina com codigo EM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9A846',
			obligatory: false
		},
		'ES---': {
			code: 'ES---',
			name: 'Qualquer Disciplina com codigo ES---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ES---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8046B9',
			obligatory: false
		},
		'F_---': {
			code: 'F_---',
			name: 'Qualquer Disciplina com codigo F_---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo F_---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'MA---': {
			code: 'MA---',
			name: 'Qualquer Disciplina com codigo MA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4657B9',
			obligatory: false
		},
		'MC---': {
			code: 'MC---',
			name: 'Qualquer Disciplina com codigo MC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B97746',
			obligatory: false
		},
		'ME---': {
			code: 'ME---',
			name: 'Qualquer Disciplina com codigo ME---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ME---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9465F',
			obligatory: false
		},
		'MS---': {
			code: 'MS---',
			name: 'Qualquer Disciplina com codigo MS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B95F46',
			obligatory: false
		}
	}
};

export default catalogue;
