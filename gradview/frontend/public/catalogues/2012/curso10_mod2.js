const catalogue = {
	totalCredits: 254,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['QG100', 'EM102', 'EM110', 'EM330', 'MA111', 'MA141', 'F_128']
		},
		'sem-2': {
			id: '2',
			subjects: ['EM240', 'F_129', 'EM200', 'EM335', 'MA211', 'ELET02', 'F_328']
		},
		'sem-3': {
			id: '3',
			subjects: ['EM440', 'F_329', 'MA311', 'EM306', 'EM360', 'MC102', 'F_428']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_429', 'EM404', 'EM406', 'EM461', 'EM103', 'MS211', 'MA327', 'EM460']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM504', 'EM506', 'EM503', 'EM561', 'EM570', 'ME414', 'EM535']
		},
		'sem-6': {
			id: '6',
			subjects: ['EM641', 'EM638', 'ELET06', 'EM833', 'EM607', 'EM670', 'ET016', 'EM733']
		},
		'sem-7': {
			id: '7',
			subjects: ['EM740', 'EM731', 'EM730', 'EM703', 'EM783', 'EM707', 'EM884', 'EM802']
		},
		'sem-8': {
			id: '8',
			subjects: ['EM090', 'BE310', 'EM608', 'EM807', 'EM853', 'EM886', 'EM609', 'EM984', 'CE738']
		},
		'sem-9': {
			id: '9',
			subjects: ['EM612', 'EM605', 'EM610', 'EM790', 'EM914', 'CE304', 'EM611']
		},
		'sem-10': {
			id: '10',
			subjects: ['EM916', 'EM803', 'EM919']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['EA513', 'EM513'],
		},
		'elet-2': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['EI---', 'EM---', 'ES---'],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['EM023', 'EM804', 'EM986', 'EM989', 'GT001', 'HG023', 'HZ291', 'HZ292', 'HZ293'],
		},
	},

	subjects: {
		'EM102': {
			code: 'EM102',
			name: 'Desenho Técnico',
			ementa: 'Instrumentação, normas, convenções e padronização. Fase do desenho (croquís, desenho preliminar). Cotagem. Perspectivas. Sistemas de projeções. Vistas principais parciais e auxiliares. Cortes e seções. Indicações de tolerância e ajustes. Desenhos de elementos de máquinas. Elementos de união (soldas, parafusos, rebites). Conjunto montado.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A5',
			obligatory: true
		},
		'EM110': {
			code: 'EM110',
			name: 'Introdução à Engenharia Mecânica',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos de engenharia. Origem e evolução da engenharia mecânica. A engenharia mecânica brasileira. A Faculdade de Engenharia Mecânica da Unicamp. Atribuições profissionais e perspectiva do mercado do trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B954',
			obligatory: true
		},
		'EM330': {
			code: 'EM330',
			name: 'Oficinas I',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora. Obs.: Realizado nas oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, 71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4654B9',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946AB',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94683',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7546B9',
			obligatory: true
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais \"da idade da pedra lascada ao plástico inteligente\"; a ligação química em materiais isolantes; a ligação química em materiais semicondutores; a ligação química em materiais condutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#467CB9',
			obligatory: true
		},
		'EM200': {
			code: 'EM200',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução a um programa computacional de desenho. Desenhos de elementos de máquinas (sistemas de transmissão, mancais, conexões, etc.). Desenhos de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM102'],
			color: '#46B9A5',
			obligatory: true
		},
		'EM240': {
			code: 'EM240',
			name: 'Estrutura e Propriedades dos Materiais',
			ementa: 'Princípios da estrutura e defeitos cristalinos aplicados a materiais metálicos. Difusão atômica. Soluções sólidas. Diagramas de fase. Propriedade dos materiais metálicos e não metálicos. Estrutura e propriedade dos materiais cerâmicos. Estrutura e propriedade dos materiais poliméricos. Noções sobre materiais conjugados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG100'],
			color: '#467CB9',
			obligatory: true
		},
		'EM335': {
			code: 'EM335',
			name: 'Tecnologia Mecânica',
			ementa: 'Normalização. Tolerâncias dimensionais e geométricas. Rugosidade superficial. Metrologia industrial. Processos de fabricação. Planejamento do processo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102', 'EM330'],
			color: '#4687AF',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8AB946',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#A246A2',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#97469E',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#97469E',
			obligatory: true
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#97469E',
			obligatory: true
		},
		'EM440': {
			code: 'EM440',
			name: 'Transformações de Fase dos Materiais',
			ementa: 'Nucleação e crescimento de fases. Recuperação, recristalização e crescimento de grãos. Solubilização e precipitação. Ligas ferro-carbono. Tratamentos térmicos e termoquímicos das ligas ferro-carbono. Oxidação e corrosão de metais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#467CB9',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#A28065',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#A246A2',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#97469E',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B246B9',
			obligatory: true
		},
		'EM103': {
			code: 'EM103',
			name: 'Metodologia de Pesquisa e Redação Científica',
			ementa: 'Condução e revisão bibliográfica. Estruturas de trabalhos, relatórios, dissertações e teses. Normas de orientação bibliográfica e normas de apresentação de trabalhos. Estrutura e orientação para a formulação de artigos e resumo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95A46',
			obligatory: true
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#97469E',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangecial. Lei de Hooke generalizada. Esforços solicitantes. Distribuições de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#97469E',
			obligatory: true
		},
		'EM460': {
			code: 'EM460',
			name: 'Termodinâmica II',
			ementa: 'Análise exergética. Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos; bomba de calor. Propriedade de misturas. Pscicrometria. Reações químicas e combustão. Princípios de equilíbrio químico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360'],
			color: '#97469E',
			obligatory: true
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno. Escoamento viscoso incompressível interno. Escoamento viscoso incompressível externo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#97469E',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#A28065',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#7546B9',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#A046A7',
			obligatory: true
		},
		'EM503': {
			code: 'EM503',
			name: 'Introdução aos Métodos Numéricos Aplicados à Engenharia',
			ementa: 'Introdução aos métodos das diferenças finitas, dos volumes finitos, dos elementos finitos e dos elementos de contorno.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102', 'MS211', 'EM406', 'EM461'],
			color: '#8563A2',
			obligatory: true
		},
		'EM504': {
			code: 'EM504',
			name: 'Mecanismos e Dinâmica das Máquinas',
			ementa: 'Graus de liberdade, características e terminologia dos mecanismos articulados planares. Cinemática do engrenamento. Introdução aos camos. Modelagem cinemática e dinâmica por coordenadas generalizadas, Eksergian e introdução aos métodos de energia por Lagrange. Esforços internos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#97469E',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Estado de tensão e estado de deformação específica. Energia de deformação. Energia de distorção. Critério: de resistência. Deformações. Teoremas de energia. Introdução ao método dos elementos finitos. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#97469E',
			obligatory: true
		},
		'EM535': {
			code: 'EM535',
			name: 'Usinagem dos Materiais',
			ementa: 'Fundamentos da Usinagem. Processos de Usinagem. Escolha de Ferramental e das condições de Usinagem. Programação CN.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#4687AF',
			obligatory: true
		},
		'EM561': {
			code: 'EM561',
			name: 'Mecânica dos Fluidos II',
			ementa: 'Forças estáticas exercidas por fluidos em superfícies. Conceitos cinemáticos. Introdução à analise diferencial dos escoamentos. Escoamento incompressível de fluidos não viscosos. Máquinas de fluxo. Introdução ao escoamento compressível. Noções de escoamentos em canais abertos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461'],
			color: '#97469E',
			obligatory: true
		},
		'EM570': {
			code: 'EM570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à transferência de calor. Introdução à transferência de calor por condução. Condução unidimensional e regime permanente. Condução transiente. Introdução à transferência de calor por convecção. Tópicos em escoamentos externos. Tópicos em convecção natural. Tópicos em escoamentos internos. Radiação térmica: processos e propriedades. Troca radiativa entre superfícies.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: '#97469E',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#B94683',
			obligatory: true
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos. Introdução aos Sistemas Contínuos. Noções sobre propagação de ondas em sólidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#97469E',
			obligatory: true
		},
		'EM638': {
			code: 'EM638',
			name: 'Mecânica e Mecanismos da Fratura',
			ementa: 'Mecanismos de fratura e fadiga. Noções de mecânica da fratura. Ensaios de tenacidade à fratura. Influência de variáveis microestruturais na tenacidade da fratura. Aplicação da mecânica de fratura elástica linear ao projeto estrutural. Noções de mecânica da fratura elastoplástica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#467CB9',
			obligatory: true
		},
		'EM641': {
			code: 'EM641',
			name: 'Ensaios dos Materiais',
			ementa: 'Normas e especificações de ensaios de materiais. Ensaios mecânicos estáticos e dinâmicos. Metalografia. Análise química. Ensaios não destrutivos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#467CB9',
			obligatory: true
		},
		'EM670': {
			code: 'EM670',
			name: 'Transferência de Calor II',
			ementa: 'Condução bidimensional em regime permanente. Condução transiente. Introdução à transferência de calor por convecção. Tópicos em escoamentos externos. Tópicos em convecção natural. Tópicos em escoamentos internos. Ebulição e Condensação. Trocadores de calor. Troca radiativa entre superfícies. Transferência de massa por difusão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM561', 'EM570'],
			color: '#97469E',
			obligatory: true
		},
		'EM733': {
			code: 'EM733',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Tempos padrões. Classificação dos sistemas de manufatura. Tecnologia de grupo. Produtividade industrial. Automação rígida e flexível. Flexibilidade sistemas flexíveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM535'],
			color: '#4687AF',
			obligatory: true
		},
		'EM833': {
			code: 'EM833',
			name: 'Seleção de Materiais',
			ementa: 'Critérios de seleção de materiais. Matriz de decisão ponderada. Seleção de materiais(metálicos, poliméricos, cerâmicos e conjugados) para atender às solicitações: resistência mecânica, fadiga, tenacidade, desgaste, altas temperaturas, corrosão. Trabalho prático de seleção de materiais junto à indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#467CB9',
			obligatory: true
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328'],
			color: '#A246A2',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EM703': {
			code: 'EM703',
			name: 'Instrumentação',
			ementa: 'Características estáticas e dinâmicas dos instrumentos e sensores. Análise de dados e incertezas experimentais. Medida e análise de deslocamento, velocidade, aceleração, força, torque, potência mecânica. Problemas na amplificação, transmissão e armazenamento de sinais. Medições de som. Medidas de pressão, vazão e temperatura. Medidas de propriedades térmicas e de transporte.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM570', 'EM607'],
			color: '#97469E',
			obligatory: true
		},
		'EM707': {
			code: 'EM707',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceitos fundamentais. Ações de controle básicas. Resposta de frequência. Critérios de estabilidade e lugar das raizes. Noções de estado. Aplicações: controle hidráulico e pneumático.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607'],
			color: '#97469E',
			obligatory: true
		},
		'EM730': {
			code: 'EM730',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição de processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240', 'EM335'],
			color: '#4682B4',
			obligatory: true
		},
		'EM731': {
			code: 'EM731',
			name: 'Processos Metalúrgicos de Fabricação',
			ementa: 'Princípios de metalurgia do princípio de solidificação. Tecnologia da fundição. Simbologia e normalização em soldagem. Equipamentos e processos de soldagem. Metalurgia da soldagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#467CB9',
			obligatory: true
		},
		'EM740': {
			code: 'EM740',
			name: 'Laboratório de Engenharia dos Materiais',
			ementa: 'Experiências de laboratório relativas a estrutura, propriedades e transformações de fase de materiais metálicos e não metálicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM440', 'EM641'],
			color: '#467CB9',
			obligatory: true
		},
		'EM783': {
			code: 'EM783',
			name: 'Laboratório de Calor e Fluidos I',
			ementa: 'Conjunto de experiências de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM561', 'EM570'],
			color: '#97469E',
			obligatory: true
		},
		'EM802': {
			code: 'EM802',
			name: 'Caracterização de Reservatórios Petrolíferos',
			ementa: 'Propriedades de rochas e fluidos. Avaliação de reservatórios. Análise de testes de formação. Mecanismos de produção. Análise de reservas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#46B97C',
			obligatory: true
		},
		'EM884': {
			code: 'EM884',
			name: 'Sistemas Fluidotérmicos II',
			ementa: 'Introdução. Sistemas de geração de potência. Motores de combustão interna. Turbinas térmicas. Sistemas de geração de calor. Geradores de vapor. Fornos, aquecedores e incineradores. Sistemas de distribuição e ultilização de vapor e outros fluidos de aquecimento. Sistemas de cogeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#97469E',
			obligatory: true
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#4D46B9',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96F46',
			obligatory: true
		},
		'EM090': {
			code: 'EM090',
			name: 'Introdução à Engenharia de Petróleo',
			ementa: 'Noções básicas de geologia do petróleo, exploração, perfuração, produção e refino do petróleo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94697',
			obligatory: true
		},
		'EM608': {
			code: 'EM608',
			name: 'Elementos de Máquinas',
			ementa: 'Introdução ao projeto de máquinas. Teoria de falhas por fadiga, fadiga superficial e fratura. Eixos, mancais, engrenagens, molas, soldas, embreagens e freios, transmissões flexíveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM504', 'EM506'],
			color: '#97469E',
			obligatory: true
		},
		'EM609': {
			code: 'EM609',
			name: 'Engenharia de Perfuração',
			ementa: 'Introdução às técnicas e equipamentos de perfuração de poços petrolíferos. Considerações sobre a segurança das operações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#46A5B9',
			obligatory: true
		},
		'EM807': {
			code: 'EM807',
			name: 'Laboratório de Dinâmica e Vibrações',
			ementa: 'Experimentos com aplicação dos conhecimentos da dinâmica e vibrações.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM703'],
			color: '#97469E',
			obligatory: true
		},
		'EM853': {
			code: 'EM853',
			name: 'Engenharia Econômica',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'MA311'],
			color: '#97469E',
			obligatory: true
		},
		'EM886': {
			code: 'EM886',
			name: 'Laboratório de Calor e Fluidos II',
			ementa: 'Conjunto de experiências de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM561', 'EM570'],
			color: '#97469E',
			obligatory: true
		},
		'EM984': {
			code: 'EM984',
			name: 'Sistemas Fluidotérmicos III',
			ementa: 'Introdução. Sistemas de bombeamento, ventilação, condicionamento de ar frigorífico. Noções de conforto térmico e qualidade de ar. Conceitos aplicados ao cálculo de carga térmica. Fluidos refrigerantes. Componentes dos sistemas de compressão. Componentes dos sistemas de distribuição de gases e líquidos. Cálculo e redes de condutos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM670'],
			color: '#97469E',
			obligatory: true
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9466F',
			obligatory: true
		},
		'EM605': {
			code: 'EM605',
			name: 'Engenharia de Completação',
			ementa: 'Projeto da completação de um poço petrolífero. Equipamentos de completação. Restauração e estimulação de poços.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#B99746',
			obligatory: true
		},
		'EM610': {
			code: 'EM610',
			name: 'Engenharia de Operações Marítimas',
			ementa: 'Tipos de plataformas marítimas. Noções de oceanografia. Sistemas oceânicos e sistemas para perfuração de petróleo no mar. Comportamento e critérios de operabilidade de sistemas flutuantes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#4DB946',
			obligatory: true
		},
		'EM611': {
			code: 'EM611',
			name: 'Engenharia de Produção Petrolífera',
			ementa: 'Estudos dos processos de produção de óleo e gás. Propriedades e comportamentos de fluídos de reservatório; hidrocarbonetos; Sistemas multicomponentes e multifásico. Equações de transporte de óleo e gás; escoamento compressível; escoamento bifásico. Elevação natural e artificial do petróleo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#46B990',
			obligatory: true
		},
		'EM612': {
			code: 'EM612',
			name: 'Engenharia de Reservatórios',
			ementa: 'Propriedades das rochas e fluidos de reservatórios. Noções de escoamento mono e bifásico em meios porosos. Mecanismos de produção de testes de formação. Noções de métodos de recuperação suplementar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#4690B9',
			obligatory: true
		},
		'EM790': {
			code: 'EM790',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Métodos e técnicas para a engenharia assistida por computador. Projeto, processos e produção assistidos por computador. Conceitos de CAE, CAD, CAM integrados. Sistemas de visualização 2D e 3D. Modelagem para refinamento e análise de sistemas mecânicos, simulação. Prototipagem rápida.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM335'],
			color: '#4687AF',
			obligatory: true
		},
		'EM914': {
			code: 'EM914',
			name: 'Trabalho de Graduação I',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. O trabalho será desenvolvido sob a orientação de um professor, com apresentação final escrita e analisada por, ao menos, dois professores do Curso de Engenharia Mecânica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA475', 'EM103'],
			color: '#B95A46',
			obligatory: true
		},
		'EM803': {
			code: 'EM803',
			name: 'Escoamento Multifásico de Petróleo',
			ementa: 'Introdução. Revisão de escoamento monofásico. Variáveis básicas do escoamento bifásico. Padrões e mapas de fluxos gás-líquido. Balanço unidimensionais de massa, quantidade de movimento e energia em fluxo bifásico. Modelos cinemáticos: homogêneo, fases separadas, deslizamento. Correlações para cálculo de perda de carga e fração volumétrica em fluxo multifásico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#B9465A',
			obligatory: true
		},
		'EM916': {
			code: 'EM916',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projetos. Montagens e execuções de equipamentos e sistemas em Engenharia Mecânica junto a um órgão credenciado pelo departamento. O estágio é orientado bilateralmente e conclui com a apresentação de um relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#46B968',
			obligatory: true
		},
		'EM919': {
			code: 'EM919',
			name: 'Trabalho de Graduação II',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. O trabalho, que deverá ser uma continuação do trabalho iniciado na disciplina EM914, será desenvolvido sob a orientação de um professor, com apresentação final escrita e analisada por, ao menos, dois professores do Curso de Engenharia Mecânica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'EM914'],
			color: '#B95A46',
			obligatory: true
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#B94683',
			obligatory: false
		},
		'EI---': {
			code: 'EI---',
			name: 'Qualquer Disciplina com codigo EI---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EI---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#61B946',
			obligatory: false
		},
		'EM---': {
			code: 'EM---',
			name: 'Qualquer Disciplina com codigo EM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8A46B9',
			obligatory: false
		},
		'EM023': {
			code: 'EM023',
			name: 'Tópicos em Engenharia dos Materiais II',
			ementa: 'Abordagem específica de um assunto relacionado com engenharia e ciência dos materiais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#6146B9',
			obligatory: false
		},
		'EM513': {
			code: 'EM513',
			name: 'Circuitos Elétricos para Engenharia Mecânica',
			ementa: 'Elementos e leis de circuitos. Equacionamento e soluções de circuitos por métodos algébricos e matriciais. Equacionamento de circuitos dinâmicos. Circuitos monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#B94683',
			obligatory: false
		},
		'EM804': {
			code: 'EM804',
			name: 'Tópicos em Engenharia do Petróleo',
			ementa: 'Ementa variável. Seminários sobre tópicos específicos em engenharia do petróleo: Novas tecnologias e métodos utilizados em Engenharia do Petróleo. Novos produtos. Processos especiais. Tópicos complementares em Engenharia do Petróleo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9AB46',
			obligatory: false
		},
		'EM986': {
			code: 'EM986',
			name: 'Tópicos em Engenharia Ambiental',
			ementa: 'Ementa variável. Seminários sobre tópicos específicos em Engenharia Ambiental: Novas tecnologias e métodos utilizados em Engenharia Ambiental. Novos produtos e equipamentos. Processos especiais. Tópicos complementares em Engenharia Ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#9E46B9',
			obligatory: false
		},
		'EM989': {
			code: 'EM989',
			name: 'Tópicos em Mecânica Computacional',
			ementa: 'Ementa variável. Seminários sobre tópicos específicos em mecânica computacional: novas tecnologias e métodos utilizados em mecânica computacional. Novos produtos e equipamentos, processos especiais. Tópicos complementares em mecânica computacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#4668B9',
			obligatory: false
		},
		'ES---': {
			code: 'ES---',
			name: 'Qualquer Disciplina com codigo ES---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ES---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9EB946',
			obligatory: false
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B98346',
			obligatory: false
		},
		'HG023': {
			code: 'HG023',
			name: 'Introdução à Filosofia da Ciência',
			ementa: 'Discussão dos problemas e conceitos fundamentais da filosofia contemporânea da ciência. O conceito de cientificidade. A ciência experimental e o método hipotético-dedutivo. Explicações causais, teleológicas, histórico-genéticas, probabilísticas, estruturais, funcionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia. Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B2B946',
			obligatory: false
		},
		'HZ292': {
			code: 'HZ292',
			name: 'Tópicos Especiais de Humanidades II',
			ementa: 'Filosofia da ciência. Elementos de sociologia. Sociologia rural. Antropologia. Deontologia.Obs.: Sendo uma disciplina reservada aos cursos de engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'HZ293': {
			code: 'HZ293',
			name: 'Tópicos Especiais de Humanidades III',
			ementa: 'O curso abordará a análise dos aspectos sociais das inovações tecnológicas e da pesquisa científica. No decorrer das exposições e seminários, serão desenvolvidas análises de casos precisos, tentando incorporar um quadro de referência comparativo entre a sociedade brasileira e o contexto internacional.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#75B946',
			obligatory: false
		}
	}
};

export default catalogue;
