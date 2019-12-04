const catalogue = {
	totalCredits: 254,
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
			subjects: ['EM306', 'EM360', 'ES235', 'ES401', 'MA327', 'MS211']
		},
		'sem-5': {
			id: '5',
			subjects: ['EE532', 'EM404', 'EM461', 'ES542', 'ES601', 'MC404']
		},
		'sem-6': {
			id: '6',
			subjects: ['EA611', 'EE534', 'EM570', 'EM731', 'ES572', 'MC322']
		},
		'sem-7': {
			id: '7',
			subjects: ['EM406', 'EM607', 'ES575', 'ES672', 'ES730', 'MC722']
		},
		'sem-8': {
			id: '8',
			subjects: ['EM506', 'ES333', 'ES704', 'ES710', 'ES879', 'ET520']
		},
		'sem-9': {
			id: '9',
			subjects: ['ES563', 'ES663', 'ES670', 'ES827', 'ES828', 'ME414']
		},
		'sem-10': {
			id: '10',
			subjects: ['ES664', 'ES667', 'ES690', 'ES728', 'ES770', 'ELET10']
		},
		'sem-11': {
			id: '11',
			subjects: ['BE310', 'ES626', 'ES726', 'ES927', 'ES951', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['CE304', 'CE738', 'ES010', 'ES926', 'ES952', 'ES965']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['EA072', 'EA876', 'EA962', 'EA976', 'EA979', 'EE610', 'EE838', 'EE840', 'EE881', 'EE938', 'EE940', 'EG453', 'EG461', 'EG468', 'EG504', 'EG505', 'EG507', 'EG509', 'EG513', 'EG560', 'EG562', 'EG565', 'EG567', 'EG841', 'EG842', 'EG922'],
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
			color: '#D940C3',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BAD940',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D997',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#86D940',
			obligatory: true
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais \"da idade da pedra lascada ao plástico inteligente\"; a ligação química em materiais isolantes; a ligação química em materiais semicondutores; a ligação química em materiais condutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4048D9',
			obligatory: true
		},
		'EM104': {
			code: 'EM104',
			name: 'Desenho Técnico Assistido por Computador',
			ementa: 'Instrumentação e normas. Sistemas de projeções e perspectivas. Convenções e construções geométricas. Métodos descritivos. Rebatimento. Correspondência homológica. Operação inversa ao rebatimento. Mudança de planos. Introdução a um programa computacional de desenho. Desenho de elementos de máquinas. Desenho de máquinas. Desenho de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'ES330': {
			code: 'ES330',
			name: 'Oficinas - Mecatrônica',
			ementa: 'Metrologia Industrial. Instrumentos básicos de medição linear, angular e posição. Dispositivos de controle dimensional. Programação (código G) e operação de Máquinas-Ferramenta CNC. Simbologia eletro/eletrônica. Comandos elétricos. Comandos de reversão e partida estrela-triângulo. Montagens básicas de dispositivos de eletrônica de potência. Diodos retificadores, tiristores, conversores, amplificadores. Controlador programável - diagrama Ladder. Eletro-pneumática: simbologia, válvulas e interpretação de circuitos. Eletro-hidráulica: normas, simbologia, motores, bombas, válvulas proporcionais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4063D9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#80D95D',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#63D96C',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D4D940',
			obligatory: true
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D997',
			obligatory: true
		},
		'ES242': {
			code: 'ES242',
			name: 'Materiais de Engenharia',
			ementa: 'A estrutura cristalina dos metais: modelos e defeitos. Ligações e difusão atômica. Estrutura e propriedades dos materiais. Materiais cerâmicos e poliméricos. Materiais conjugados. Materiais de grau eletrônico (obtenção/extração, beneficiamento e caracterização). Materiais específicos para o segmento eletro/eletrônico (placas de CI, materiais para contactores e/ou disjuntores). Materiais para aplicação em micro-eletrônica. Materiais específicos para construção de robôs industriais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG100'],
			color: '#4048D9',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#63D96C',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos, e suas generalizações. Algoritmos para construção, consulta, e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#D4D940',
			obligatory: true
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#63D96C',
			obligatory: true
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#63D96C',
			obligatory: true
		},
		'ES235': {
			code: 'ES235',
			name: 'Engenharia de Fabricação',
			ementa: 'Normas técnicas. Tolerâncias dimensionais. Rugosidade superficial. Metrologia industrial. Ajustes e tolerâncias (furo-base, eixo-base). Controle estatístico de processo e sistema de medição em processo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM104'],
			color: '#6B40D9',
			obligatory: true
		},
		'ES401': {
			code: 'ES401',
			name: 'Matemática para Engenharia',
			ementa: 'Introdução às variáveis complexas e funções de variáveis complexas. Transformada de Laplace. Solução de equações diferenciais de primeira e segunda ordem. Série de Fourier e Transformada de Fourier. Transformada discreta de Fourier. Equações a diferenças. Transforma Z. Solução de equações a diferenças de primeira e segunda ordem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: '#63D96C',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#86D940',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#89D95D',
			obligatory: true
		},
		'EE532': {
			code: 'EE532',
			name: 'Eletrônica Aplicada',
			ementa: 'Dispositivos semicondutores: diodos, transistores BJT e MOS. Circuitos com amplificadores operacionais. Conversão de dados: características, amostragem e análise de ruído. Sensores: características e condicionamento de seus sinais. Atuadores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: '#40D997',
			obligatory: true
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#63D96C',
			obligatory: true
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno. Escoamento viscoso incompressível interno. Escoamento viscoso incompressível externo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#63D96C',
			obligatory: true
		},
		'ES542': {
			code: 'ES542',
			name: 'Tratamentos Térmicos',
			ementa: 'Leis de difusão e conceitos fundamentais de solidificação. Técnicas de refino zonal e crescimento de cristais. Tratamentos térmicos e termoquímicos. Fundamentos eletroquímicos da corrosão e tipos de corrosão. Métodos de proteção contra a corrosão. Oxidação. Tratamentos e revestimentos de superfície.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES242'],
			color: '#4048D9',
			obligatory: true
		},
		'ES601': {
			code: 'ES601',
			name: 'Análise Linear de Sistemas',
			ementa: 'Caracterização de sistemas lineares no tempo contínuo e no tempo discreto. Teorema da amostragem. Função de transferência. Análise de resposta em frequência de sistemas no tempo contínuo e no tempo discreto. Representação no espaço de estado. Realizações canônicas de funções de transferência. Solução temporal no espaço de estado. Estabilidade de sistemas contínuos e discretos. Conceitos básicos de controlabilidade e observabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES401'],
			color: '#63D96C',
			obligatory: true
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores RISCs e CISCs. Desenvolvimento, implementação e testes de programas usando linguagens e montagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: '#D4D940',
			obligatory: true
		},
		'EA611': {
			code: 'EA611',
			name: 'Circuitos II',
			ementa: 'Transformada de Laplace. Teoremas de Reciprocidade e de Miller. Dualidade. Estruturas de Dois Pares de Terminais. Circuitos Trifásicos. Representação de Sistemas de Energia Elétrica. Componentes Simétricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: '#40D997',
			obligatory: true
		},
		'EE534': {
			code: 'EE534',
			name: 'Laboratório de Eletrônica Aplicada',
			ementa: 'Análise e síntese de circuitos eletrônicos utilizando: diodos, transistores BJT e MOS, amplificadores operacionais, conversores de dados, sensores e atuadores. Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE532'],
			color: '#40D997',
			obligatory: true
		},
		'EM570': {
			code: 'EM570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à transferência de calor. Introdução à transferência de calor por condução. Condução unidimensional e regime permanente. Condução transiente. Introdução à transferência de calor por convecção. Tópicos em escoamentos externos. Tópicos em convecção natural. Tópicos em escoamentos internos. Radiação térmica: processos e propriedades. Troca radiativa entre superfícies.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: '#63D96C',
			obligatory: true
		},
		'EM731': {
			code: 'EM731',
			name: 'Processos Metalúrgicos de Fabricação',
			ementa: 'Princípios de metalurgia do princípio de solidificação. Tecnologia da fundição. Simbologia e normalização em soldagem. Equipamentos e processos de soldagem. Metalurgia da soldagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES242'],
			color: '#4048D9',
			obligatory: true
		},
		'ES572': {
			code: 'ES572',
			name: 'Circuitos Lógicos',
			ementa: 'Conceitos lógicos. Circuitos básicos. Minimização de funções Booleanas. Sistemas de numeração. Aritmética binária. Códigos. Circuitos à contato. Síntese de circuitos combinacionais. Circuitos de memória. Circuitos sequenciais. Projeto de circuitos sequenciais. Máquinas de Mealy e Moole. Projeto de contadores, decodificadores e multiplexadores. Temporizadores: monoestáveis, astáveis e osciladores. Dispositivos lógicos programáveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532'],
			color: '#40D997',
			obligatory: true
		},
		'MC322': {
			code: 'MC322',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: '#D4D940',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangecial. Lei de Hooke generalizada. Esforços solicitantes. Distribuições de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#63D96C',
			obligatory: true
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos. Introdução aos Sistemas Contínuos. Noções sobre propagação de ondas em sólidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#63D96C',
			obligatory: true
		},
		'ES575': {
			code: 'ES575',
			name: 'Laboratório de Circuitos Lógicos',
			ementa: 'Circuitos combinacionais. Flip-flops, contadores e temporizadores. Circuitos sequenciais. Conversor digital/analógico e analógico/digital. Dispositivos lógicos programáveis.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE534', 'ES572'],
			color: '#40D997',
			obligatory: true
		},
		'ES672': {
			code: 'ES672',
			name: 'Sistemas Fluidotérmicos I',
			ementa: 'Introdução à psicometria. Sistemas de ventilação, condicionamento de ar e frigoríficos. Conceitos aplicados ao cálculo de carga térmica. Fluidos refrigerantes. Componentes dos sistemas de compressão. Componentes dos sistemas de distribuição de gases e líquidos. Cálculo de redes de condutos. Projeto. Introdução à combustão. Motores de combustão interna. Geração e Distribuição de vapor. Geração de potência e co-geração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM570'],
			color: '#63D96C',
			obligatory: true
		},
		'ES730': {
			code: 'ES730',
			name: 'Processos Mecânicos de Fabricação',
			ementa: 'Processos de conformação plástica - descrição e aplicação; Processos de usinagem - descrição e aplicação; Seleção da peça bruta; Sequência de operações de fabricação - definição da superfície de referência, escolha das operações, cálculo dos sobremateriais e das dimensões intermediárias.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES235', 'ES242'],
			color: '#5644D9',
			obligatory: true
		},
		'MC722': {
			code: 'MC722',
			name: 'Projeto de Sistemas Computacionais',
			ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de I/O.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES572', 'MC404'],
			color: '#8AD96C',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Estado de tensão e estado de deformação específica. Energia de deformação. Energia de distorção. Critério: de resistência. Deformações. Teoremas de energia. Introdução ao método dos elementos finitos. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#63D96C',
			obligatory: true
		},
		'ES333': {
			code: 'ES333',
			name: 'Laboratório de Ensaio dos Materiais',
			ementa: 'Normas de ensaios de materiais. Ensaios mecânicos. Ensaios não-destrutivos. Análise metalografia. Caracterização de materiais de grau eletrônico.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES242'],
			color: '#4048D9',
			obligatory: true
		},
		'ES704': {
			code: 'ES704',
			name: 'Instrumentação Básica',
			ementa: 'Características estáticas e dinâmicas dos instrumentos e sensores. Análise de dados e incertezas experimentais. Principios gerais de transdução. Medidas de pressão, vazão e temperatura. Medida e análise de deslocamento, velocidade, aceleração, força, torque, potência mecânica. Medições de som. Instrumentação industrial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406', 'EM570'],
			color: '#63D96C',
			obligatory: true
		},
		'ES710': {
			code: 'ES710',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceito de realimentação. Modelagem de sistemas dinâmicos no tempo contínuo e no tempo discreto. Equivalentes discretos e sistemas amostrados. Análise de resposta em regime transitório e estacionário. Análise de resposta em frequência. Critérios de estabilidade: Routh-Hurwitz e de Nyquist. Projetos no domínio da frequência contínuo e discreto: avanço-atraso; lugar das raízes; PID. Conversão de controladores do tempo contínuo para discreto.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607', 'ES601'],
			color: '#63D96C',
			obligatory: true
		},
		'ES879': {
			code: 'ES879',
			name: 'Sistemas de Aquisição de Dados',
			ementa: 'Amplificadores e condicionadores de sinais. Principais filtros analógicos. Conversão D/A e A/D, amostragem e efeitos de quantização. Transformada z e Tranformada de Fourier discreta. Filtros digitais FIR e IIR. Experimentos apresentando os efeitos e o teorema da amostragem, filtros analógicos e digitais típicos e análise de resposta em frequência.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES601'],
			color: '#63D96C',
			obligatory: true
		},
		'ET520': {
			code: 'ET520',
			name: 'Princípios de Conversão de Energia',
			ementa: 'Circuitos magnéticos. Transformadores. Princípios de conversão eletromecânica de energia. Introdução às máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA611', 'F_328'],
			color: '#60D97A',
			obligatory: true
		},
		'ES563': {
			code: 'ES563',
			name: 'Laboratório de Máquinas Elétricas',
			ementa: 'Potência e energia elétrica. Circuitos monofásicos e trifásicos. Transformadores. Máquinas de corrente contínua de pequeno porte, motores de imã permanente e de passo. Máquinas de corrente contínua de grande porte. Máquinas de indução mono e trifásicos. Máquinas síncronas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ET520'],
			color: '#60D97A',
			obligatory: true
		},
		'ES663': {
			code: 'ES663',
			name: 'Eletrônica para Automação Industrial',
			ementa: 'Revisão de máquinas elétricas de corrente contínua e corrente alterada. Métodos de controle de velocidade de motores. Revisão dos componentes eletrônicos utilizados, diodos de potência, transistores bipolares, mosfet de potência e dispositivos tiristores. Controle de motores de baixa potência. Controle de motores de imã permanente, sem escova e de passo. Acionamento a velocidade variável de motores trifásicos de alta potência. Acionamento a velocidade variável de motores de corrente contínua e de indução. Retificadores, conversores e inversores de frequência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532', 'ET520'],
			color: '#50D989',
			obligatory: true
		},
		'ES670': {
			code: 'ES670',
			name: 'Projeto de Sistemas Embarcados',
			ementa: 'Conceitos gerais de sistemas embarcados. Arquiteturas de microprocessadores, microcontroladores e processadores digitais de sinais. Conceito básico de sistemas de tempo real. Metodologia de projeto de sistemas embarcados. Sistemas de máquinas de estados. Metodologia SDL. Administração do tempo em sistemas computacionais. Linguagens de programação e sistemas operacionais para tempo real. Exemplos práticos de projeto de sistemas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC722'],
			color: '#8AD96C',
			obligatory: true
		},
		'ES827': {
			code: 'ES827',
			name: 'Robótica Industrial',
			ementa: 'Visão geral dos manipuladores. Fundamentos de tecnologia, programação e aplicações de robôs. Descrição matemática de manipuladores. Sistemas de coordenadas em robótica. Modelagem cinemática direta e inversa. Análise e controle de movimentos dos robôs. Modelagem dinâmica e controle de movimentos. Geração de trajetórias. Órgãos terminais, e sensores em robótica. Linguagens de programação de robôs.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES710'],
			color: '#63D96C',
			obligatory: true
		},
		'ES828': {
			code: 'ES828',
			name: 'Laboratório de Controle de Sistemas',
			ementa: 'Identificação de parâmetros de sistemas, controladores avanço-atraso, controladores PID, controladores por realimentação de estados, reguladores lineares quadráticos, controladores em tempo-discreto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: '#63D96C',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D997',
			obligatory: true
		},
		'ES664': {
			code: 'ES664',
			name: 'Laboratório de Eletrônica para Automação Industrial',
			ementa: 'Dispositivos de potência: diodos, tiristores, transistores e outros dispositivos semi-condutores. Reguladores de potência. Conversores. Controle de motores CC. Inversores. Controles de motores CA.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES663'],
			color: '#50D989',
			obligatory: true
		},
		'ES667': {
			code: 'ES667',
			name: 'Planejamento e Controle da Produção I',
			ementa: 'Administração da produção. Papel estratégico e objetivos da produção. Estratégia da produção. Projeto em gestão da produção. Projeto da rede de operações. Arranjo físico e fluxo. Organização do trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES730'],
			color: '#5644D9',
			obligatory: true
		},
		'ES690': {
			code: 'ES690',
			name: 'Sistemas Mecânicos',
			ementa: 'Descrição, dimensionamento, seleção e utilização de elementos mecânicos. Análise de sistemas mecânicos e transmissão de energia. Modelagem matemática de sistemas dinâmicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM506'],
			color: '#63D96C',
			obligatory: true
		},
		'ES728': {
			code: 'ES728',
			name: 'Controle Avançado de Sistemas',
			ementa: 'Modelagem no espaço de estado para sistemas contínuos e discretos. Projeto de controladores contínuos e discretos por realimentação completa de estado. Projeto de rastreadores. Controlabilidade e Observabilidade. Estimadores e observadores de estado. Projeto de controladores dinâmicos contínuos e discretos por realimentação de saída. Controlador linear quadrático ótimo contínuo e discreto. Normas H2 e H-infinito. Projetos de controladores H2 e H-infinito. Introduçãoa incertezas de modelagem e robustez.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES710'],
			color: '#63D96C',
			obligatory: true
		},
		'ES770': {
			code: 'ES770',
			name: 'Laboratório de Sistemas Digitais',
			ementa: 'Arquiteturas de microcontroladores e microprocessadores. Programação em linguagem de montagem e em C. Técnicas de programação em tempo real. Máquinas de estado. Interfaces de entrada/saída. Programação de interface serial e paralela. Comunicação entre computadores. Interrupções.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES575', 'ES670'],
			color: '#65D982',
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
			color: '#D94074',
			obligatory: true
		},
		'ES626': {
			code: 'ES626',
			name: 'Modelagem de Dispositivos Eletromecânicos',
			ementa: 'Dispositivos eletromagnéticos, hidráulicos e pneumáticos. Transdutores. Circuitos eletro-hidráulicos, eletropneumáticos e diagramas ladder. Modelagem e análise dinâmica de dispositivos multidomínio. Simulação de comportamento dinâmico usando circuitos equivalentes e bond graphs. Aplicação a sistemas mecatrônicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: '#63D96C',
			obligatory: true
		},
		'ES726': {
			code: 'ES726',
			name: 'Laboratório de Sistemas Pneumáticos e Hidráulicos',
			ementa: 'Introdução aos dispositivos básicos hidráulicos e pneumáticos; circuitos básicos pneumáticos e hidráulicos e análise de suas características; circuitos básicos eletropneumáticos e eletro-hidráulicos; controle manual e automático; sensores e atuadores; controlador lógico programável.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ES710'],
			color: '#63D96C',
			obligatory: true
		},
		'ES927': {
			code: 'ES927',
			name: 'Controle de Sistemas Robóticos',
			ementa: 'Modelagem dinâmica dos principais robôs. Análise de sistemas não lineares: plano de fase, estabilidade de Lyapunov, funções descritivas. Métodos de controle de robôs: linearização por realimentação, modo de deslizamento, adaptativos e neuro-adaptativo. Aplicações às principais configurações robóticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES827'],
			color: '#63D96C',
			obligatory: true
		},
		'ES951': {
			code: 'ES951',
			name: 'Trabalho de Graduação I',
			ementa: 'Definição do tema, escolha da metodologia a ser utilizada. Definição do cronograma de atividades. Revisão de conceitos específicos para a elaboração do TG. Esta disciplina será desenvolvida sob orientação de um professor do curso (FEM, FEEC ou IC ou de algum profissional ligado a órgão interessado) com apresentação de resultados parciais à uma banca examinadora constituída por professores/profissionais da área.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200', 'AA475'],
			color: '#40D948',
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
			color: '#D98E40',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4097D9',
			obligatory: true
		},
		'ES010': {
			code: 'ES010',
			name: 'Estágio Supervisionado',
			ementa: 'Exercício de atividades típicas do profissional em Controle e Automação junto a órgão habilitado pela coordenação de graduação. O estagiário deverá possuir um orientador no local do estágio, além de um professor orientador da FEM, FEEC ou IC. O estagiário apresentará ao professor-orientador um relatório final de atividades.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#8640D9',
			obligatory: true
		},
		'ES926': {
			code: 'ES926',
			name: 'Automação Industrial',
			ementa: 'Aplicações da automação pneumática, hidráulica e elétrica. Circuitos eletro-hidráulicos e eletropneumáticos industrias. Modelagem e controle de sistemas automatizados. Aplicações de controladores industriais: controladores programáveis e computadores industrias. Integração com métodos de engenharia de produção. Controle de células de manufatura. Dispositivos de segurança. Estudo de casos práticos envolvendo sistemas de produção industrial automatizados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ES667', 'ES827'],
			color: '#5D8FA3',
			obligatory: true
		},
		'ES952': {
			code: 'ES952',
			name: 'Trabalho de Graduação II',
			ementa: 'Conclusão do TG, com ênfase teórica e/ou tecnológica de forma a englobar conhecimentos adquiridos em diversas disciplinas do curso de Engenharia de Controle e Automação. A orientação poderá ser feita por professor da FEM, FEEC ou IC. Ao final do trabalho o aluno apresentará uma monografia escrita, além da apresentação final à uma banca examinadora constituída por professores/profissionais da área.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'ES951'],
			color: '#40D948',
			obligatory: true
		},
		'ES965': {
			code: 'ES965',
			name: 'Projeto de Sistemas Mecatrônicos',
			ementa: 'Sistemática e Metodologia do projeto Industrial. Arquitetura Mecânica, concepção a partir de critérios de funcionalidade do produto, QFD. Análise do valor no desenvolvimento do projeto. Métodos de Sistematização da criatividade no projeto. Projeto Seguro. Ergonomia, Confiabilidade. Projetar para modularidade, expansão, disponibilidade, Controle, custo, etc (design for). Documentação técnica de um projeto: Atributos do produto, detalhes construtivos desenho de montagem final.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9A940',
			obligatory: true
		},
		'EA072': {
			code: 'EA072',
			name: 'Inteligência Artificial em Aplicações Industriais',
			ementa: 'Resolução de problemas. Fundamentos lógico matemáticos. Lógica proposicional e Lógica de primeira ordem. Representação do conhecimento. Mecanismos de inferência. Aprendizagem. Linguagens para implementação. Inteligência computacional. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A040D9',
			obligatory: false
		},
		'EA876': {
			code: 'EA876',
			name: 'Introdução a Software de Sistema',
			ementa: 'Montadores. Carregadores. Compiladores. Sistemas Operacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404'],
			color: '#D4D940',
			obligatory: false
		},
		'EA962': {
			code: 'EA962',
			name: 'Laboratório de Sistemas Computacionais',
			ementa: 'Projeto e desenvolvimento de sistemas computacionais.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA876'],
			color: '#D4D940',
			obligatory: false
		},
		'EA976': {
			code: 'EA976',
			name: 'Engenharia de Software',
			ementa: 'Software e engenharia de software. Análise de sistemas computacionais. Análise de requisitos de software. Metodologias de análise de requisitos. Projeto de software: projeto preliminar e projeto detalhado. Metodologias de projeto de software. O paradigma da Orientação a Objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#D4D940',
			obligatory: false
		},
		'EA979': {
			code: 'EA979',
			name: 'Introdução à Computação Gráfica e ao Processamento de Imagem',
			ementa: 'Dispositivos de aquisição e exibição de imagens, arquitetura de sistemas gráficos interativos, transformações geométricas, transformação de visualização, calibração de câmeras, modelos de iluminação e tonalização, texturas, algoritmos de recorte, algoritmos de remoção de linhas/superfícies escondidas, algoritmos de rasterização, técnicas de antialiasing, representação de curvas e superfícies, operações aritméticas com imagem, técnicas de filtragem de imagem, algoritmos de realce, algoritmos de detecção de bordas, modelos de cor, transformação entre modelos de cor, algoritmos de quantização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#D4D940',
			obligatory: false
		},
		'EE610': {
			code: 'EE610',
			name: 'Eletrônica Digital I',
			ementa: 'Pulsos e circuitos de temporização. Circuitos lógicos-digitais. Circuitos Integrados Digitais. Dispositivos Lógicos Programáveis-PLDs.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532'],
			color: '#40D997',
			obligatory: false
		},
		'EE838': {
			code: 'EE838',
			name: 'Introdução à Engenharia de Som I',
			ementa: 'Introdução: Acústica, ondas sonoras e instrumentos musicais. Instrumentação. Ondas Elásticas I. Corpos sonoros I. Instrumentos de Percussão. Ondas Elásticas II. Corpos Sonoros II. Instrumentos de Sopro. Salas e Conforto Ambiental. Piano. Palestras convidadas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407DD9',
			obligatory: false
		},
		'EE840': {
			code: 'EE840',
			name: 'Introdução à Engenharia do Som II',
			ementa: 'Introdução: Panorama de Informática na Música - Conceitos e Exemplos de Mercado e Experimentais. Protocolo MIDI. Sequenciadores. MIDI Aplicada à Composição Algorítmica. Audição e Psico-Acústica. Fundamentos do Áudio Digital. Sound Design: Aplicações Criativas do Áudio Digital - Cinema, Áudio Visual, Paisagem Sonora. Técnicas de Síntese de Sinais Digitais. Sintetizadores Virtuais. Aplicações Musicais do Áudio Digital I. Aplicações Musicais do Áudio Digital II. Perspectivas da Computação Musical.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9C340',
			obligatory: false
		},
		'EE881': {
			code: 'EE881',
			name: 'Princípios de Comunicações I',
			ementa: 'Canal de comunicação. Processos estocásticos. Modulação de amplitude. Modulação angular. Codificação de sinais analógicos. Transmissão digital em banda básica. Modulação digital. Sistemas de múltiplo acesso. Tópicos em comunicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97440',
			obligatory: false
		},
		'EE938': {
			code: 'EE938',
			name: 'Engenharia de Som I: Acústica',
			ementa: 'Som. Acústica. Cordas, tubos e membranas vibrantes, instrumentos musicais. Acústica fisiológica: audibilidade, curvas de Fletcher Munson, intelegibilidade. Transdutores. Amplificadores: ganho, resposta em frequência, distorção. Gravação: discos, fitas, gravação digital.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: '#40D997',
			obligatory: false
		},
		'EE940': {
			code: 'EE940',
			name: 'Engenharia de Som II: Análise e Síntese de Sinais Musicais',
			ementa: 'Aspectos gerais e históricos. Acústica e psico-acústica da música. Análise de sinais musicais. Síntese de sinais musicais. Protocolo MIDI.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#BA40D9',
			obligatory: false
		},
		'EG453': {
			code: 'EG453',
			name: 'Redes Neurais',
			ementa: 'Paradigmas Computacionais. Ciências da cognição. Modelos elementares de neurônios: discretos e contínuos. Redes neurais artificiais; arquiteturas básicas. Aprendizado através de redes neurais: estratégias e algorítmos. Redes multicamadas. Redes auto-organizadas. Redes de Hopfield. Redes RBF. Aplicações: classificação de padrões, controle e identificação, séries temporais, otimização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#5140D9',
			obligatory: false
		},
		'EG461': {
			code: 'EG461',
			name: 'Sistemas Nebulosos',
			ementa: 'Introdução. Noções básicas, conceitos e definições. Operações com conjuntos nebulosos. Relações nebulosas e seu cálculo. Números nebulosos. Variáveis linguísticas. Sistemas baseados em regras nebulosas; representação, interferência e consistência. Lógica nebulosa e raciocínio aproximado. Teoria da possibilidade e inferência possibilística. Rough sets. Modelagem de sistemas e processos. Redes neurais nebulosas; sistemas evolutivos. Metodologia e técnicas de desenvolvimento de aplicações. Estudos de casos. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#51D940',
			obligatory: false
		},
		'EG468': {
			code: 'EG468',
			name: 'Sistemas de Tempo Real I',
			ementa: 'Definição de sistemas de tempo real e exemplos. Software para sistemas de tempo real: Programação concorrente. Comparação: possibilidade de concorrência usando linguagens de programação (Ada, Occam2, Java) ou sistemas operacionais (Posix e C). Gerenciamento do tempo de resposta: a questão do relógio, gerenciador cíclico, escalonamento estático e dinâmico de processos. Estratégias para atingir as metas de confiabilidade: conceitos básicos sobre tolerância e faltas, redundância estática e dinâmica de software. Introdução a sistemas distribuidos de tempo real.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#D440D9',
			obligatory: false
		},
		'EG504': {
			code: 'EG504',
			name: 'Redes Neurais II',
			ementa: 'Métodos de aprendizagem; estimação de probabilidades; métodos paramétricos e não paramétricos; técnicas Bayesianas; generalização; funções de Kernel; comitê de máquinas; aplicações: classificação e reconhecimento de padrões; \"Clustering\"; identificação de sistemas; predição de séries temporais; controle de processos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#40D9CC',
			obligatory: false
		},
		'EG505': {
			code: 'EG505',
			name: 'Semiótica e Sistemas Inteligentes',
			ementa: 'Estudo do envolvimento entre a semiótica e os sistemas inteligentes; elementos básicos de semiótica: cognição e comunicação, categorias ceno-pitagóricas, semiosis, signos e suas representações, classes de signos; Semiótica e sistemas inteligentes: A influência da semiótica para representação do conhecimento; introdução à teoria matemática dos objetos: classes e objetos, sistemas de objetos, redes de objetos: semiótica computacional: Representando o conhecimento em redes de objeto, arquiteturas de sistemas inteligentes; Semiótica computacional e o futuro; Agentes inteligentes, Robótica Autônoma',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#D9408E',
			obligatory: false
		},
		'EG507': {
			code: 'EG507',
			name: 'Computação Evolutiva',
			ementa: 'Introdução a técnicas de solução de problemas inspiradas na natureza. Base biológica e representação computacional. Algorítmos genéticos. Estratégias evolutivas. Programação genética. Programação evolutiva. Sistemas classificadores. Extensões, operadores avançados e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#40D97D',
			obligatory: false
		},
		'EG509': {
			code: 'EG509',
			name: 'Introdução à Teoria de Agentes',
			ementa: 'Agentes: conceitos básicos. Atributos e usos de agentes; categoria de agentes; agentes e objetos; agentes, processos, threads e programação distribuída, agentes de internet; agentes de interface; agentes móveis; sistemas multi-agentes; ontologias e linguagens de agentes; redes de agentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#40D9B1',
			obligatory: false
		},
		'EG513': {
			code: 'EG513',
			name: 'Introdução à Computação Natural.',
			ementa: 'Introdução e motivação. Computação inspirada na biologia. Algoritmos evolutivos. Inteligência coletiva. Otimização por colônias de formigas, robótica coletiva e otimização por partículas. Conexionismo. Sistemas imunológicos artificiais. Biologia inspirada na computação. Vida artificial e autômatos celulares. Geometria computacional da natureza. Computação com mecanismos naturais: computação de DNA e computação quântica. Aplicações em engenharia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#D940A9',
			obligatory: false
		},
		'EG560': {
			code: 'EG560',
			name: 'Inteligência Artificial Distribuida',
			ementa: 'Introdução: computação distribuída, inteligência artificial distribuída. Agentes inteligentes. Sistemas multiagentes e sociedade de agentes. Comunicação, coordenação, cooperação e negociação. Resolução distribuída de problemas. Algoritmos de busca em sistemas multiagentes. Agentes racionais e aprendizagem. Modelos distribuídos de decisão. Sistemas multiagentes em logística, processamento de informação e automação. Estudos de caso e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#40D963',
			obligatory: false
		},
		'EG562': {
			code: 'EG562',
			name: 'Inteligência Artificial em Automação',
			ementa: 'Introdução. Características, propriedades e requisitos de sistemas inteligentes em problemas de processamento de informação e decisão. Arquiteturas, metodologias e algoritmos de inteligência computacional em sistemas de suporte a tomada de decisão. Conceitos e abordagens de raciocínio e interferência temporal e aplicações em sistemas de tempo real. Arquiteturas e aplicações em logística, automação industrial, controle de tráfego e sistemas hídricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#D95A40',
			obligatory: false
		},
		'EG565': {
			code: 'EG565',
			name: 'Introdução à Análise de Imagens e Reconhecimento de Padrões',
			ementa: 'Fundamentos de segmentação de imagens. Representação de contornos e regiões. \"Template Matching\". Modelos de classificação. Introdução aos métodos de análise sintática. Classificação estatística. Teoria da decisão de Bayes. Estimativa de parâmetros e aprendizagem supervisionada. Aprendizado sem supervisão. \"Clustering\".',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#D94040',
			obligatory: false
		},
		'EG567': {
			code: 'EG567',
			name: 'Visão Robótica',
			ementa: 'Aspectos geométricos e fotométricos da formação da imagem. Calibração de câmeras: parâmetros extrínsecos e intrínsecos. Perspectiva inversa. Estéreo visão. Localização (posição e orientação) de objetos no espaço 3D. Mapa de reflectância. Estéreo fotometria. Shape from shading. Shape from motion.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#A0D940',
			obligatory: false
		},
		'EG841': {
			code: 'EG841',
			name: 'Especificação e Projeto de Sistemas Embutidos',
			ementa: 'Introdução às técnicas para projetos a nível de sistema, modelos e arquiteturas, linguagens de especificação, métodos de particionamento, métodos de avaliação da qualidade de projetos, detalhamento da especificação, exemplo de projeto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40CCD9',
			obligatory: false
		},
		'EG842': {
			code: 'EG842',
			name: 'Coprojeto de Hardware-Software em Sistemas Embutidos',
			ementa: 'Introdução às técnicas de coprojeto de hardware-software. Estudo de um projeto. Particionamento em Hardware-Software. Cossimulação. Verificação formal. Estimativa de desempenho. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40B1D9',
			obligatory: false
		},
		'EG922': {
			code: 'EG922',
			name: 'Sensores Microeletrônicos',
			ementa: 'Sistemas de informação e processamento. Princípios básicos de física do semicondutor. Propriedades mecânicas do silício. Conversão de sinais em transdutores de silício. Sensores térmicos. Sensores magnéticos. Sensores radiantes. Sensores inteligentes. Interface. Conversão A/D.Tecnologia para a fabricação de sensores. Introdução a sistemas microeletrônicos. Empacotamento de sensores. Estabilidade e confiabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9405A',
			obligatory: false
		}
	}
};

export default catalogue;
