const catalogue = {
	totalCredits: 250,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ES101', 'F_128', 'MA111', 'MA141', 'QG100']
		},
		'sem-2': {
			id: '2',
			subjects: ['EM104', 'ES330', 'F_328', 'MA211', 'MC102']
		},
		'sem-3': {
			id: '3',
			subjects: ['EA513', 'ES242', 'F_129', 'MA311', 'MC202']
		},
		'sem-4': {
			id: '4',
			subjects: ['EM306', 'EM360', 'MA327', 'MC322', 'MS211']
		},
		'sem-5': {
			id: '5',
			subjects: ['EE532', 'EM404', 'EM461', 'MC404', 'ME414']
		},
		'sem-6': {
			id: '6',
			subjects: ['EA611', 'EE534', 'EM570', 'ES235', 'ES572', 'ES601']
		},
		'sem-7': {
			id: '7',
			subjects: ['EM406', 'EM607', 'ES365', 'ES575', 'ES672', 'MC722']
		},
		'sem-8': {
			id: '8',
			subjects: ['EM506', 'ES333', 'ES704', 'ES710', 'ES879', 'ET520']
		},
		'sem-9': {
			id: '9',
			subjects: ['ES563', 'ES626', 'ES663', 'ES667', 'ES670', 'ES827']
		},
		'sem-10': {
			id: '10',
			subjects: ['ES664', 'ES690', 'ES728', 'ES770', 'ES926', 'ELET10']
		},
		'sem-11': {
			id: '11',
			subjects: ['BE310', 'ES726', 'ES828', 'ES927', 'ES951', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['CE304', 'CE738', 'ES010', 'ES952', 'ES965']
		}
	},

	subjects: {
		'ES101': {
			code: 'ES101',
			name: 'Introdução à Engenharia de Controle e Automação',
			ementa: 'Noções gerais sobre ciência e tecnologia e fundamentos metodológicos da engenharia. Origem e evolução de Engenharia de Controle e Automação. Perspectivas da área de trabalho. Habilidades de comunicação e expressão do engenheiro. Métodos de redação técnica e científica. Mercado profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#409FD9'
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8C40D9'
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94040'
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940'
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais isolantes, condutores e semicondutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5340D9'
		},
		'EM104': {
			code: 'EM104',
			name: 'Desenho Técnico Assistido por Computador',
			ementa: 'Instrumentação e normas. Sistemas de projeções e perspectivas. Convenções e construções geométricas. Métodos descritivos. Rebatimento. Correspondência homológica. Operação inversa ao rebatimento. Mudança de planos. Introdução a um programa computacional de desenho. Desenho de elementos de máquinas. Desenho de máquinas. Desenho de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'ES330': {
			code: 'ES330',
			name: 'Oficinas - Mecatrônica',
			ementa: 'Metrologia Industrial. Instrumentos básicos de medição linear, angular e posição. Dispositivos de controle dimensional. Programação (código G) e operação de Máquinas-Ferramenta CNC. Simbologia eletro/eletrônica. Comandos elétricos. Comandos de reversão e partida estrela-triângulo. Montagens básicas de dispositivos de eletrônica de potência. Diodos retificadores, tiristores, conversores, amplificadores. Controlador programável - diagrama Ladder. Eletro-pneumática: simbologia, válvulas e interpretação de circuitos. Eletro-hidráulica: normas, simbologia, motores, bombas, válvulas proporcionais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C6D940'
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: ''
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D99F'
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'ES242': {
			code: 'ES242',
			name: 'Materiais de Engenharia',
			ementa: 'A estrutura cristalina dos metais: modelos e defeitos. Ligações e difusão atômica. Estrutura e propriedades dos materiais. Materiais cerâmicos e poliméricos. Materiais conjugados. Materiais de grau eletrônico (obtenção/extração, beneficiamento e caracterização). Materiais específicos para o segmento eletro/eletrônico (placas de CI, materiais para contactores e/ou disjuntores). Materiais para aplicação em micro-eletrônica. Materiais específicos para construção de robôs industriais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG100'],
			color: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#53D940'
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: ''
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: ''
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: ''
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: ''
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: ''
		},
		'MC322': {
			code: 'MC322',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: ''
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: ''
		},
		'EE532': {
			code: 'EE532',
			name: 'Eletrônica Aplicada',
			ementa: 'Dispositivos semicondutores: diodos, transistores BJT e MOS. Circuitos com amplificadores operacionais. Conversão de dados: características, amostragem e análise de ruído. Sensores: características e condicionamento de seus sinais. Atuadores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: ''
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: ''
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Lei básica da estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno: perda de carga. Escoamento viscoso incompressível externo: arrasto e sustentação. Máquinas de Fluxo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: ''
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores RISCs e CISCs. Desenvolvimento, implementação e testes de programas usando linguagens e montagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: ''
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'EA611': {
			code: 'EA611',
			name: 'Circuitos II',
			ementa: 'Transformada de Laplace. Teoremas de Reciprocidade e de Miller. Dualidade. Estruturas de Dois Pares de Terminais. Circuitos Trifásicos. Representação de Sistemas de Energia Elétrica. Componentes Simétricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: ''
		},
		'EE534': {
			code: 'EE534',
			name: 'Laboratório de Eletrônica Aplicada',
			ementa: 'Análise e síntese de circuitos eletrônicos utilizando: diodos, transistores BJT e MOS, amplificadores operacionais, conversores de dados, sensores e atuadores. Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE532'],
			color: ''
		},
		'EM570': {
			code: 'EM570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à Transferência de Calor e à Condução. Condução Unidimensional em Regime Permanente. Introdução à Condução Bidimensional em Regime Permanente. Formulação Concentrada da Condução Transitória. Introdução à Convecção Térmica. Convecção em Escoamentos Externos. Convecção Natural em Escoamentos Externos. Radiação Térmica: Processos e Propriedades e Transferência de Calor.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: ''
		},
		'ES235': {
			code: 'ES235',
			name: 'Engenharia de Fabricação',
			ementa: 'Normas técnicas. Tolerâncias dimensionais. Rugosidade superficial. Metrologia industrial. Ajustes e tolerâncias (furo-base, eixo-base). Controle estatístico de processo e sistema de medição em processo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM104'],
			color: ''
		},
		'ES572': {
			code: 'ES572',
			name: 'Circuitos Lógicos',
			ementa: 'Conceitos lógicos. Circuitos básicos. Minimização de funções Booleanas. Sistemas de numeração. Aritmética binária. Códigos. Circuitos à contato. Síntese de circuitos combinacionais. Circuitos de memória. Circuitos sequenciais. Projeto de circuitos sequenciais. Máquinas de Mealy e Moole. Projeto de contadores, decodificadores e multiplexadores. Temporizadores: monoestáveis, astáveis e osciladores. Dispositivos lógicos programáveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532'],
			color: ''
		},
		'ES601': {
			code: 'ES601',
			name: 'Análise Linear de Sistemas',
			ementa: 'Caracterização de sistemas lineares no tempo contínuo e no tempo discreto. Teorema da amostragem. Função de transferência. Análise de resposta em frequência de sistemas no tempo contínuo e no tempo discreto. Representação no espaço de estado. Realizações canônicas de funções de transferência. Solução temporal no espaço de estado. Estabilidade de sistemas contínuos e discretos. Conceitos básicos de controlabilidade e observabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MA327'],
			color: ''
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: ''
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas lineares de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404', 'MA327'],
			color: ''
		},
		'ES365': {
			code: 'ES365',
			name: 'Fabricação Mecânica e Metalúrgica',
			ementa: 'Classificação dos processos de fabricação. Processos metalúrgicos: fundição, soldagem, metalurgia do pó, materiais e procedimentos. Processos mecânicos: conformação, usinagem, materiais e procedimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES235', 'ES242'],
			color: ''
		},
		'ES575': {
			code: 'ES575',
			name: 'Laboratório de Circuitos Lógicos',
			ementa: 'Circuitos combinacionais. Flip-flops, contadores e temporizadores. Circuitos sequenciais. Conversor digital/analógico e analógico/digital. Dispositivos lógicos programáveis.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE534', 'ES572'],
			color: ''
		},
		'ES672': {
			code: 'ES672',
			name: 'Sistemas Fluidotérmicos I',
			ementa: 'Introdução à psicometria. Sistemas de ventilação, condicionamento de ar e frigoríficos. Conceitos aplicados ao cálculo de carga térmica. Fluidos refrigerantes. Componentes dos sistemas de compressão. Componentes dos sistemas de distribuição de gases e líquidos. Cálculo de redes de condutos. Projeto. Introdução à combustão. Motores de combustão interna. Geração e Distribuição de vapor. Geração de potência e co-geração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM570'],
			color: ''
		},
		'MC722': {
			code: 'MC722',
			name: 'Projeto de Sistemas Computacionais',
			ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de I/O.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES572', 'MC404'],
			color: ''
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: ''
		},
		'ES333': {
			code: 'ES333',
			name: 'Laboratório de Ensaio dos Materiais',
			ementa: 'Normas de ensaios de materiais. Ensaios mecânicos. Ensaios não-destrutivos. Análise metalografia. Caracterização de materiais de grau eletrônico.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES242'],
			color: ''
		},
		'ES704': {
			code: 'ES704',
			name: 'Instrumentação Básica',
			ementa: 'Características estáticas e dinâmicas dos instrumentos e sensores. Análise de dados e incertezas experimentais. Principios gerais de transdução. Medidas de pressão, vazão e temperatura. Medida e análise de deslocamento, velocidade, aceleração, força, torque, potência mecânica. Medições de som. Instrumentação industrial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406', 'EM570', 'ME414'],
			color: ''
		},
		'ES710': {
			code: 'ES710',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceito de realimentação. Modelagem de sistemas dinâmicos no tempo contínuo e no tempo discreto. Equivalentes discretos e sistemas amostrados. Análise de resposta em regime transitório e estacionário. Análise de resposta em frequência. Critérios de estabilidade: Routh-Hurwitz e de Nyquist. Projetos no domínio da frequência contínuo e discreto: avanço-atraso; lugar das raízes; PID. Conversão de controladores do tempo contínuo para discreto.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607', 'ES601'],
			color: ''
		},
		'ES879': {
			code: 'ES879',
			name: 'Sistemas de Aquisição de Dados',
			ementa: 'Amplificadores e condicionadores de sinais. Principais filtros analógicos. Conversão D/A e A/D, amostragem e efeitos de quantização. Transformada z e Tranformada de Fourier discreta. Filtros digitais FIR e IIR. Experimentos apresentando os efeitos e o teorema da amostragem, filtros analógicos e digitais típicos e análise de resposta em frequência.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES601'],
			color: ''
		},
		'ET520': {
			code: 'ET520',
			name: 'Princípios de Conversão de Energia',
			ementa: 'Circuitos magnéticos. Transformadores. Princípios de conversão eletromecânica de energia. Introdução às máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA611', 'F_328'],
			color: ''
		},
		'ES563': {
			code: 'ES563',
			name: 'Laboratório de Máquinas Elétricas',
			ementa: 'Potência e energia elétrica. Circuitos monofásicos e trifásicos. Transformadores. Máquinas de corrente contínua de pequeno porte, motores de imã permanente e de passo. Máquinas de corrente contínua de grande porte. Máquinas de indução mono e trifásicos. Máquinas síncronas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ET520'],
			color: ''
		},
		'ES626': {
			code: 'ES626',
			name: 'Modelagem de Dispositivos Eletromecânicos',
			ementa: 'Eletromagnetismo aplicado a dispositivos eletromecânicos. Sistemas multidomínio. Modelagem e análise dinâmica de dispositivos multidomínio. Sistemas eletromecânicos, magnéticos e eletro-hidráulicos. Sensores e atuadores. Simulação de comportamento dinâmico usando circuitos equivalentes e grafos de conexões (bond graphs). Aplicação a sistemas mecatrônicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: ''
		},
		'ES663': {
			code: 'ES663',
			name: 'Eletrônica para Automação Industrial',
			ementa: 'Revisão de máquinas elétricas de corrente contínua e corrente alterada. Métodos de controle de velocidade de motores. Revisão dos componentes eletrônicos utilizados, diodos de potência, transistores bipolares, mosfet de potência e dispositivos tiristores. Controle de motores de baixa potência. Controle de motores de imã permanente, sem escova e de passo. Acionamento a velocidade variável de motores trifásicos de alta potência. Acionamento a velocidade variável de motores de corrente contínua e de indução. Retificadores, conversores e inversores de frequência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532', 'ET520'],
			color: ''
		},
		'ES667': {
			code: 'ES667',
			name: 'Planejamento e Controle da Produção I',
			ementa: 'Administração da produção. Papel estratégico e objetivos da produção. Estratégia da produção. Projeto em gestão da produção. Projeto da rede de operações. Arranjo físico e fluxo. Organização do trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES365'],
			color: ''
		},
		'ES670': {
			code: 'ES670',
			name: 'Projeto de Sistemas Embarcados',
			ementa: 'Conceitos gerais de sistemas embarcados. Arquiteturas de microprocessadores, microcontroladores e processadores digitais de sinais. Conceito básico de sistemas de tempo real. Metodologia de projeto de sistemas embarcados. Sistemas de máquinas de estados. Metodologia SDL. Administração do tempo em sistemas computacionais. Linguagens de programação e sistemas operacionais para tempo real. Exemplos práticos de projeto de sistemas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC722'],
			color: ''
		},
		'ES827': {
			code: 'ES827',
			name: 'Robótica Industrial',
			ementa: 'Visão geral dos manipuladores. Fundamentos de tecnologia, programação e aplicações de robôs. Descrição matemática de manipuladores. Sistemas de coordenadas em robótica. Modelagem cinemática direta e inversa. Análise e controle de movimentos dos robôs. Modelagem dinâmica e controle de movimentos. Geração de trajetórias. Órgãos terminais, e sensores em robótica. Linguagens de programação de robôs.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES710'],
			color: ''
		},
		'ES664': {
			code: 'ES664',
			name: 'Laboratório de Eletrônica para Automação Industrial',
			ementa: 'Dispositivos de potência: diodos, tiristores, transistores e outros dispositivos semi-condutores. Reguladores de potência. Conversores. Controle de motores CC. Inversores. Controles de motores CA.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES663'],
			color: ''
		},
		'ES690': {
			code: 'ES690',
			name: 'Sistemas Mecânicos',
			ementa: 'Descrição, dimensionamento, seleção e utilização de elementos mecânicos. Análise de sistemas mecânicos e transmissão de energia. Modelagem matemática de sistemas dinâmicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM506'],
			color: ''
		},
		'ES728': {
			code: 'ES728',
			name: 'Controle Avançado de Sistemas',
			ementa: 'Modelagem no espaço de estado para sistemas contínuos e discretos. Projeto de controladores contínuos e discretos por realimentação completa de estado. Projeto de rastreadores. Controlabilidade e Observabilidade. Estimadores e observadores de estado. Projeto de controladores dinâmicos contínuos e discretos por realimentação de saída. Controlador linear quadrático ótimo contínuo e discreto. Normas H2 e H-infinito. Projetos de controladores H2 e H-infinito. Introduçãoa incertezas de modelagem e robustez.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES710'],
			color: ''
		},
		'ES770': {
			code: 'ES770',
			name: 'Laboratório de Sistemas Digitais',
			ementa: 'Arquiteturas de microcontroladores e microprocessadores. Programação em linguagem de montagem e em C. Técnicas de programação em tempo real. Máquinas de estado. Interfaces de entrada/saída. Programação de interface serial e paralela. Comunicação entre computadores. Interrupções.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES575', 'ES670'],
			color: ''
		},
		'ES926': {
			code: 'ES926',
			name: 'Automação Industrial',
			ementa: 'Aplicações da automação pneumática, hidráulica e elétrica. Circuitos eletro-hidráulicos e eletropneumáticos industrias. Modelagem e controle de sistemas automatizados. Aplicações de controladores industriais: controladores programáveis e computadores industrias. Integração com métodos de engenharia de produção. Controle de células de manufatura. Dispositivos de segurança. Estudo de casos práticos envolvendo sistemas de produção industrial automatizados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES667', 'ES827'],
			color: ''
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#4066D9'
		},
		'ES726': {
			code: 'ES726',
			name: 'Laboratório de Sistemas Pneumáticos e Hidráulicos',
			ementa: 'Introdução aos dispositivos básicos hidráulicos e pneumáticos; circuitos básicos pneumáticos e hidráulicos e análise de suas características; circuitos básicos eletropneumáticos e eletro-hidráulicos; controle manual e automático; sensores e atuadores; controlador lógico programável.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES926'],
			color: ''
		},
		'ES828': {
			code: 'ES828',
			name: 'Laboratório de Controle de Sistemas',
			ementa: 'Identificação de parâmetros de sistemas, controladores avanço-atraso, controladores PID, controladores por realimentação de estados, reguladores lineares quadráticos, controladores em tempo-discreto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: ''
		},
		'ES927': {
			code: 'ES927',
			name: 'Controle de Sistemas Robóticos',
			ementa: 'Modelagem dinâmica dos principais robôs. Análise de sistemas não lineares: plano de fase, estabilidade de Lyapunov, funções descritivas. Métodos de controle de robôs: linearização por realimentação, modo de deslizamento, adaptativos e neuro-adaptativo. Aplicações às principais configurações robóticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES827'],
			color: ''
		},
		'ES951': {
			code: 'ES951',
			name: 'Trabalho de Graduação I',
			ementa: 'Definição do tema, escolha da metodologia a ser utilizada. Definição do cronograma de atividades. Revisão de conceitos específicos para a elaboração do TG. Esta disciplina será desenvolvida sob orientação de um professor do curso (FEM, FEEC ou IC ou de algum profissional ligado a órgão interessado) com apresentação de resultados parciais à uma banca examinadora constituída por professores/profissionais da área.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200', 'AA475'],
			color: '#D9B340'
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D966'
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97940'
		},
		'ES010': {
			code: 'ES010',
			name: 'Estágio Supervisionado',
			ementa: 'Exercício de atividades típicas do profissional em Controle e Automação junto a órgão habilitado pela coordenação de graduação. O estagiário deverá possuir um orientador no local do estágio, além de um professor orientador da FEM, FEEC ou IC. O estagiário apresentará ao professor-orientador um relatório final de atividades.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:2, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#D94079'
		},
		'ES952': {
			code: 'ES952',
			name: 'Trabalho de Graduação II',
			ementa: 'Conclusão do TG, com ênfase teórica e/ou tecnológica de forma a englobar conhecimentos adquiridos em diversas disciplinas do curso de Engenharia de Controle e Automação. A orientação poderá ser feita por professor da FEM, FEEC ou IC. Ao final do trabalho o aluno apresentará uma monografia escrita, além da apresentação final à uma banca examinadora constituída por professores/profissionais da área.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'ES951'],
			color: '#D940B3'
		},
		'ES965': {
			code: 'ES965',
			name: 'Projeto de Sistemas Mecatrônicos',
			ementa: 'Sistemática e Metodologia do projeto Industrial. Arquitetura Mecânica, concepção a partir de critérios de funcionalidade do produto, QFD. Análise do valor no desenvolvimento do projeto. Métodos de Sistematização da criatividade no projeto. Projeto Seguro. Ergonomia, Confiabilidade. Projetar para modularidade, expansão, disponibilidade, Controle, custo, etc (design for). Documentação técnica de um projeto: Atributos do produto, detalhes construtivos desenho de montagem final.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA480'],
			color: '#C640D9'
		}
	}
};

export default catalogue;
