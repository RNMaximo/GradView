const catalogue = {
	totalCredits: 254,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EM102', 'EM110', 'EM330', 'F_128', 'MA111', 'MA141', 'QG100']
		},
		'sem-2': {
			id: '2',
			subjects: ['EM200', 'EM240', 'EM335', 'F_129', 'F_328', 'MA211', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['EM306', 'EM360', 'EM440', 'F_329', 'F_428', 'MA311', 'MC102']
		},
		'sem-4': {
			id: '4',
			subjects: ['EM103', 'EM404', 'EM406', 'EM460', 'EM461', 'F_429', 'MA327', 'MS211']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM503', 'EM504', 'EM506', 'EM535', 'EM561', 'EM570', 'ME414']
		},
		'sem-6': {
			id: '6',
			subjects: ['EM607', 'EM638', 'EM641', 'EM670', 'EM733', 'EM833', 'ET016', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EM703', 'EM707', 'EM730', 'EM731', 'EM740', 'EM783', 'EM884', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BE310', 'CE738', 'EM608', 'EM807', 'EM853', 'EM886', 'EM984', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['CE304', 'EM790', 'EM914', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EM916', 'EM919', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 28,
			hasRestrictions: true,
			subjects: ['EM013', 'EM014', 'EM035', 'EM074', 'EM090', 'EM093', 'EM203', 'EM605', 'EM609', 'EM610', 'EM611', 'EM612', 'EM734', 'EM736', 'EM737', 'EM739', 'EM741', 'EM742', 'EM743', 'EM802', 'EM803', 'EM806', 'EM826', 'EM827', 'EM831', 'EM861', 'EM862', 'EM863', 'EM864', 'EM865', 'EM866', 'EM867', 'EM868', 'EM873', 'EM885', 'EM909', 'EM917', 'EM921', 'EM931', 'EM949', 'EM967', 'EM968', 'EM969', 'EM972', 'EM973', 'EM974', 'EM975', 'EM976', 'EM977', 'EM983', 'EM987', 'EM988', 'EM990', 'EM993', 'EM995', 'ES826', 'ES931'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['EA513', 'EM513'],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-4': {
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
			color: '#7340D9',
			obligatory: true
		},
		'EM110': {
			code: 'EM110',
			name: 'Introdução à Engenharia Mecânica',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos de engenharia. Origem e evolução da engenharia mecânica. A engenharia mecânica brasileira. A Faculdade de Engenharia Mecânica da Unicamp. Atribuições profissionais e perspectiva do mercado do trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'EM330': {
			code: 'EM330',
			name: 'Oficinas I',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora. Obs.: Realizado nas oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, 71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#73D940',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#408CD9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94073',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4059D9',
			obligatory: true
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais \"da idade da pedra lascada ao plástico inteligente\"; a ligação química em materiais isolantes; a ligação química em materiais semicondutores; a ligação química em materiais condutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4073D9',
			obligatory: true
		},
		'EM200': {
			code: 'EM200',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução a um programa computacional de desenho. Desenhos de elementos de máquinas (sistemas de transmissão, mancais, conexões, etc.). Desenhos de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM102'],
			color: '#7340D9',
			obligatory: true
		},
		'EM240': {
			code: 'EM240',
			name: 'Estrutura e Propriedades dos Materiais',
			ementa: 'Princípios da estrutura e defeitos cristalinos aplicados a materiais metálicos. Difusão atômica. Soluções sólidas. Diagramas de fase. Propriedade dos materiais metálicos e não metálicos. Estrutura e propriedade dos materiais cerâmicos. Estrutura e propriedade dos materiais poliméricos. Noções sobre materiais conjugados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG100'],
			color: '#4073D9',
			obligatory: true
		},
		'EM335': {
			code: 'EM335',
			name: 'Tecnologia Mecânica',
			ementa: 'Normalização. Tolerâncias dimensionais e geométricas. Rugosidade superficial. Metrologia industrial. Processos de fabricação. Planejamento do processo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102', 'EM330'],
			color: '#738D8D',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#7362B7',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#8D4DA6',
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
			color: '#8D4DA6',
			obligatory: true
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM440': {
			code: 'EM440',
			name: 'Transformações de Fase dos Materiais',
			ementa: 'Nucleação e crescimento de fases. Recuperação, recristalização e crescimento de grãos. Solubilização e precipitação. Ligas ferro-carbono. Tratamentos térmicos e termoquímicos das ligas ferro-carbono. Oxidação e corrosão de metais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#D94080',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#7362B7',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#8D4DA6',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940A6',
			obligatory: true
		},
		'EM103': {
			code: 'EM103',
			name: 'Metodologia de Pesquisa e Redação Científica',
			ementa: 'Condução e revisão bibliográfica. Estruturas de trabalhos, relatórios, dissertações e teses. Normas de orientação bibliográfica e normas de apresentação de trabalhos. Estrutura e orientação para a formulação de artigos e resumo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#59D940',
			obligatory: true
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangecial. Lei de Hooke generalizada. Esforços solicitantes. Distribuições de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM460': {
			code: 'EM460',
			name: 'Termodinâmica II',
			ementa: 'Análise exergética. Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos; bomba de calor. Propriedade de misturas. Pscicrometria. Reações químicas e combustão. Princípios de equilíbrio químico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno. Escoamento viscoso incompressível interno. Escoamento viscoso incompressível externo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#8D4DA6',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#D94080',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#4059D9',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#A648A6',
			obligatory: true
		},
		'EM503': {
			code: 'EM503',
			name: 'Introdução aos Métodos Numéricos Aplicados à Engenharia',
			ementa: 'Introdução aos métodos das diferenças finitas, dos volumes finitos, dos elementos finitos e dos elementos de contorno.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102', 'MS211', 'EM406', 'EM461'],
			color: '#8D49B3',
			obligatory: true
		},
		'EM504': {
			code: 'EM504',
			name: 'Mecanismos e Dinâmica das Máquinas',
			ementa: 'Graus de liberdade, características e terminologia dos mecanismos articulados planares. Cinemática do engrenamento. Introdução aos camos. Modelagem cinemática e dinâmica por coordenadas generalizadas, Eksergian e introdução aos métodos de energia por Lagrange. Esforços internos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Estado de tensão e estado de deformação específica. Energia de deformação. Energia de distorção. Critério: de resistência. Deformações. Teoremas de energia. Introdução ao método dos elementos finitos. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM535': {
			code: 'EM535',
			name: 'Usinagem dos Materiais',
			ementa: 'Fundamentos da Usinagem. Processos de Usinagem. Escolha de Ferramental e das condições de Usinagem. Programação CN.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#738D8D',
			obligatory: true
		},
		'EM561': {
			code: 'EM561',
			name: 'Mecânica dos Fluidos II',
			ementa: 'Forças estáticas exercidas por fluidos em superfícies. Conceitos cinemáticos. Introdução à analise diferencial dos escoamentos. Escoamento incompressível de fluidos não viscosos. Máquinas de fluxo. Introdução ao escoamento compressível. Noções de escoamentos em canais abertos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM570': {
			code: 'EM570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à transferência de calor. Introdução à transferência de calor por condução. Condução unidimensional e regime permanente. Condução transiente. Introdução à transferência de calor por convecção. Tópicos em escoamentos externos. Tópicos em convecção natural. Tópicos em escoamentos internos. Radiação térmica: processos e propriedades. Troca radiativa entre superfícies.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: '#8D4DA6',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D94073',
			obligatory: true
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos. Introdução aos Sistemas Contínuos. Noções sobre propagação de ondas em sólidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM638': {
			code: 'EM638',
			name: 'Mecânica e Mecanismos da Fratura',
			ementa: 'Mecanismos de fratura e fadiga. Noções de mecânica da fratura. Ensaios de tenacidade à fratura. Influência de variáveis microestruturais na tenacidade da fratura. Aplicação da mecânica de fratura elástica linear ao projeto estrutural. Noções de mecânica da fratura elastoplástica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: true
		},
		'EM641': {
			code: 'EM641',
			name: 'Ensaios dos Materiais',
			ementa: 'Normas e especificações de ensaios de materiais. Ensaios mecânicos estáticos e dinâmicos. Metalografia. Análise química. Ensaios não destrutivos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: true
		},
		'EM670': {
			code: 'EM670',
			name: 'Transferência de Calor II',
			ementa: 'Condução bidimensional em regime permanente. Condução transiente. Introdução à transferência de calor por convecção. Tópicos em escoamentos externos. Tópicos em convecção natural. Tópicos em escoamentos internos. Ebulição e Condensação. Trocadores de calor. Troca radiativa entre superfícies. Transferência de massa por difusão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM561', 'EM570'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM733': {
			code: 'EM733',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Tempos padrões. Classificação dos sistemas de manufatura. Tecnologia de grupo. Produtividade industrial. Automação rígida e flexível. Flexibilidade sistemas flexíveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM535'],
			color: '#738D8D',
			obligatory: true
		},
		'EM833': {
			code: 'EM833',
			name: 'Seleção de Materiais',
			ementa: 'Critérios de seleção de materiais. Matriz de decisão ponderada. Seleção de materiais(metálicos, poliméricos, cerâmicos e conjugados) para atender às solicitações: resistência mecânica, fadiga, tenacidade, desgaste, altas temperaturas, corrosão. Trabalho prático de seleção de materiais junto à indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: true
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328'],
			color: '#7362B7',
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
			color: '#8D4DA6',
			obligatory: true
		},
		'EM707': {
			code: 'EM707',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceitos fundamentais. Ações de controle básicas. Resposta de frequência. Critérios de estabilidade e lugar das raizes. Noções de estado. Aplicações: controle hidráulico e pneumático.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM730': {
			code: 'EM730',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição de processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240', 'EM335'],
			color: '#5A80B3',
			obligatory: true
		},
		'EM731': {
			code: 'EM731',
			name: 'Processos Metalúrgicos de Fabricação',
			ementa: 'Princípios de metalurgia do princípio de solidificação. Tecnologia da fundição. Simbologia e normalização em soldagem. Equipamentos e processos de soldagem. Metalurgia da soldagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: true
		},
		'EM740': {
			code: 'EM740',
			name: 'Laboratório de Engenharia dos Materiais',
			ementa: 'Experiências de laboratório relativas a estrutura, propriedades e transformações de fase de materiais metálicos e não metálicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM440', 'EM641'],
			color: '#4073D9',
			obligatory: true
		},
		'EM783': {
			code: 'EM783',
			name: 'Laboratório de Calor e Fluidos I',
			ementa: 'Conjunto de experiências de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM561', 'EM570'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM884': {
			code: 'EM884',
			name: 'Sistemas Fluidotérmicos II',
			ementa: 'Introdução. Sistemas de geração de potência. Motores de combustão interna. Turbinas térmicas. Sistemas de geração de calor. Geradores de vapor. Fornos, aquecedores e incineradores. Sistemas de distribuição e ultilização de vapor e outros fluidos de aquecimento. Sistemas de cogeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#8D4DA6',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
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
			color: '#5940D9',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97340',
			obligatory: true
		},
		'EM608': {
			code: 'EM608',
			name: 'Elementos de Máquinas',
			ementa: 'Introdução ao projeto de máquinas. Teoria de falhas por fadiga, fadiga superficial e fratura. Eixos, mancais, engrenagens, molas, soldas, embreagens e freios, transmissões flexíveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM504', 'EM506'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM807': {
			code: 'EM807',
			name: 'Laboratório de Dinâmica e Vibrações',
			ementa: 'Experimentos com aplicação dos conhecimentos da dinâmica e vibrações.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM703'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM853': {
			code: 'EM853',
			name: 'Engenharia Econômica',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'MA311'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM886': {
			code: 'EM886',
			name: 'Laboratório de Calor e Fluidos II',
			ementa: 'Conjunto de experiências de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM561', 'EM570'],
			color: '#8D4DA6',
			obligatory: true
		},
		'EM984': {
			code: 'EM984',
			name: 'Sistemas Fluidotérmicos III',
			ementa: 'Introdução. Sistemas de bombeamento, ventilação, condicionamento de ar frigorífico. Noções de conforto térmico e qualidade de ar. Conceitos aplicados ao cálculo de carga térmica. Fluidos refrigerantes. Componentes dos sistemas de compressão. Componentes dos sistemas de distribuição de gases e líquidos. Cálculo e redes de condutos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM670'],
			color: '#8D4DA6',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
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
			color: '#D9BF40',
			obligatory: true
		},
		'EM790': {
			code: 'EM790',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Métodos e técnicas para a engenharia assistida por computador. Projeto, processos e produção assistidos por computador. Conceitos de CAE, CAD, CAM integrados. Sistemas de visualização 2D e 3D. Modelagem para refinamento e análise de sistemas mecânicos, simulação. Prototipagem rápida.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM335'],
			color: '#738D8D',
			obligatory: true
		},
		'EM914': {
			code: 'EM914',
			name: 'Trabalho de Graduação I',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. O trabalho será desenvolvido sob a orientação de um professor, com apresentação final escrita e analisada por, ao menos, dois professores do Curso de Engenharia Mecânica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA475', 'EM103'],
			color: '#59D940',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EM916': {
			code: 'EM916',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projetos. Montagens e execuções de equipamentos e sistemas em Engenharia Mecânica junto a um órgão credenciado pelo departamento. O estágio é orientado bilateralmente e conclui com a apresentação de um relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#40D9D9',
			obligatory: true
		},
		'EM919': {
			code: 'EM919',
			name: 'Trabalho de Graduação II',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. O trabalho, que deverá ser uma continuação do trabalho iniciado na disciplina EM914, será desenvolvido sob a orientação de um professor, com apresentação final escrita e analisada por, ao menos, dois professores do Curso de Engenharia Mecânica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'EM914'],
			color: '#59D940',
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
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D94073',
			obligatory: false
		},
		'EM013': {
			code: 'EM013',
			name: 'Materiais Cerâmicos',
			ementa: 'Definições. Cerâmica convencional X cerâmica avançada. Processamento de materiais cerâmicos: obtenção de pós, conformação, desificação, usinagem final, controle de qualidade. Microestrutura e propriedades de materiais cerâmicos. Exemplos de aplicações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM014': {
			code: 'EM014',
			name: 'Materiais Poliméricos',
			ementa: 'Conceitos básicos. Estruturas e propriedades de polímeros. Comportamento mecânico de polímeros. Processamento mecânico de polímeros (classificação dos processos, processos de injeção e extrusão). Polímeros de Engenharia. Compósitos e blendas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM023': {
			code: 'EM023',
			name: 'Tópicos em Engenharia dos Materiais II',
			ementa: 'Abordagem específica de um assunto relacionado com engenharia e ciência dos materiais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D98C',
			obligatory: false
		},
		'EM035': {
			code: 'EM035',
			name: 'Metrologia Industrial',
			ementa: 'Novas técnicas: Conceitos; Níveis de normalização; O sistema brasileiro de normalização; Estrutura das normas técnicas; ABNT. A importância da metrologia. Relação com normas técnicas. Terminologia Normalizada sobre Medição; Desvios; Erros; Respectividade; etc. (VIM). Consideração sobre Erros de Medição; Calibração; Incertezas; Resultado de uma Medição. Considerações sobre a Avaliação de Sistemas de Medição. Rastreabilidade. A Rede Brasileira de Calibração. Credenciamento de Laboratórios.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM102', 'EM335'],
			color: '#7367B3',
			obligatory: false
		},
		'EM074': {
			code: 'EM074',
			name: 'Confiabilidade',
			ementa: 'Fundamentos básicos. Confiabilidade de sistemas. Modelos Paramétricos e não paramétricos. Qualificação de amostras. Ensaios e testes de qualificação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ME414'],
			color: '#D94073',
			obligatory: false
		},
		'EM090': {
			code: 'EM090',
			name: 'Introdução à Engenharia de Petróleo',
			ementa: 'Noções básicas de geologia do petróleo, exploração, perfuração, produção e refino do petróleo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A6D9',
			obligatory: false
		},
		'EM093': {
			code: 'EM093',
			name: 'Tópicos em Engenharia',
			ementa: 'Abordagem mais ampla ou profunda de um assunto particular de Engenharia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940D9',
			obligatory: false
		},
		'EM203': {
			code: 'EM203',
			name: 'Análise Modal de Estruturas',
			ementa: 'Formulação modal. Sistemas com amortecimento estrutural e viscoso. Funções de resposta em frequência (FRF). Introdução à análise de sinais em tempo discreto. Transformada de Fourier discreta. Densidade espectral. Estimadores da FRF. Métodos de estimação de parâmetros nos domínios do tempo e da frequência. Comparação de resultados da análise modal teórica e experimental. MAC. Introdução ao ajuste de modelos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM703'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM513': {
			code: 'EM513',
			name: 'Circuitos Elétricos para Engenharia Mecânica',
			ementa: 'Elementos e leis de circuitos. Equacionamento e soluções de circuitos por métodos algébricos e matriciais. Equacionamento de circuitos dinâmicos. Circuitos monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D94073',
			obligatory: false
		},
		'EM605': {
			code: 'EM605',
			name: 'Engenharia de Completação',
			ementa: 'Projeto da completação de um poço petrolífero. Equipamentos de completação. Restauração e estimulação de poços.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#D9A640',
			obligatory: false
		},
		'EM609': {
			code: 'EM609',
			name: 'Engenharia de Perfuração',
			ementa: 'Introdução às técnicas e equipamentos de perfuração de poços petrolíferos. Considerações sobre a segurança das operações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#A640D9',
			obligatory: false
		},
		'EM610': {
			code: 'EM610',
			name: 'Engenharia de Operações Marítimas',
			ementa: 'Tipos de plataformas marítimas. Noções de oceanografia. Sistemas oceânicos e sistemas para perfuração de petróleo no mar. Comportamento e critérios de operabilidade de sistemas flutuantes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#D98C40',
			obligatory: false
		},
		'EM611': {
			code: 'EM611',
			name: 'Engenharia de Produção Petrolífera',
			ementa: 'Estudos dos processos de produção de óleo e gás. Propriedades e comportamentos de fluídos de reservatório; hidrocarbonetos; Sistemas multicomponentes e multifásico. Equações de transporte de óleo e gás; escoamento compressível; escoamento bifásico. Elevação natural e artificial do petróleo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#4040D9',
			obligatory: false
		},
		'EM612': {
			code: 'EM612',
			name: 'Engenharia de Reservatórios',
			ementa: 'Propriedades das rochas e fluidos de reservatórios. Noções de escoamento mono e bifásico em meios porosos. Mecanismos de produção de testes de formação. Noções de métodos de recuperação suplementar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#A6D940',
			obligatory: false
		},
		'EM734': {
			code: 'EM734',
			name: 'Processamento de Polímeros',
			ementa: 'Conceitos de reologia, classificação e descrição dos processos de conformação de polímeros, aspectos construtivos de ferramentas e equipamentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM736': {
			code: 'EM736',
			name: 'Caracterização dos Materiais',
			ementa: 'Importância da caracterização dos materiais. Técnicas de análise química. Análise metalográfica. Microscopia óptica. Microscopia eletrônica de varredura. Difração de raio-x. Análise térmica de materiais. Princípios básicos de técnicas experimentais. Análise de falhas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM440'],
			color: '#4073D9',
			obligatory: false
		},
		'EM737': {
			code: 'EM737',
			name: 'Tecnologia de Ligas Metálicas',
			ementa: 'Classificação e seleção de ligas ferrosas e não ferrosas. Principais ligas de uso comercial. Diagramas de fases. Processos de fabricação, microestruturas e propriedades, estruturas de solidificação, estruturas trabalhadas. Tratamentos térmicos e modificações estruturais decorrentes, efeitos em propriedades mecânicas. Exemplo de aplicações. Novas tendências no desenvolvimento de ligas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM739': {
			code: 'EM739',
			name: 'Materiais Compósitos',
			ementa: 'Definição de materiais compósitos. Compósitos de matriz metálica. Compósitos de matriz polimérica. Compósitos de matriz cerâmica. Processos de fabricação, caracterização estrutural e de propriedades. Compatibilidade de matriz e reforço, problemas de incorporação, reações de interface.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM741': {
			code: 'EM741',
			name: 'Engenharia de Superfície',
			ementa: 'Introdução à corrosão. Revestimentos galvânicos; pintura; filmes finos; conversão química; metalização; implantação iônica; laser; difusão e tratamentos termo químicos. Caracterização de superfície.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM742': {
			code: 'EM742',
			name: 'Processos Metalúrgicos de Fabricação II',
			ementa: 'Formação de estruturas brutas de solidificação de ligas - mecanismos de formação de seu controle. Qualidade de produtos fundidos - segregação e defeitos. Manipulação de processos de fundição visando otimização da qualidade dos produtos. Processos de tixoconformação. Solidificação na soldagem. Crescimento de cristais e segregação na solda. Microestrutura de zona afetada pelo calor. Formação de defeitos no cordão decorrentes da solidificação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM731'],
			color: '#4073D9',
			obligatory: false
		},
		'EM743': {
			code: 'EM743',
			name: 'Metalurgia do Pó',
			ementa: 'Matérias primas para a metalurgia do pó; processo de produção de pós metálicos. Mistura convencional de pós. Compactação, densificação, sinterização. Novos processos envolvendo densificação sem sinterização; extrusão a frio, HIP. Qualidade de produtos obtidos por metalurgia do pó. Exemplos de aplicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#4073D9',
			obligatory: false
		},
		'EM802': {
			code: 'EM802',
			name: 'Caracterização de Reservatórios Petrolíferos',
			ementa: 'Propriedades de rochas e fluidos. Avaliação de reservatórios. Análise de testes de formação. Mecanismos de produção. Análise de reservas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#8C40D9',
			obligatory: false
		},
		'EM803': {
			code: 'EM803',
			name: 'Escoamento Multifásico de Petróleo',
			ementa: 'Introdução. Revisão de escoamento monofásico. Variáveis básicas do escoamento bifásico. Padrões e mapas de fluxos gás-líquido. Balanço unidimensionais de massa, quantidade de movimento e energia em fluxo bifásico. Modelos cinemáticos: homogêneo, fases separadas, deslizamento. Correlações para cálculo de perda de carga e fração volumétrica em fluxo multifásico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#BF40D9',
			obligatory: false
		},
		'EM804': {
			code: 'EM804',
			name: 'Tópicos em Engenharia do Petróleo',
			ementa: 'Ementa variável. Seminários sobre tópicos específicos em engenharia do petróleo: Novas tecnologias e métodos utilizados em Engenharia do Petróleo. Novos produtos. Processos especiais. Tópicos complementares em Engenharia do Petróleo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D973',
			obligatory: false
		},
		'EM806': {
			code: 'EM806',
			name: 'Sistemas de Transmissão de Potência',
			ementa: 'Transmissões. Embreagens. Diferencial. CVT\'s. Utilização de curvas de potência e torque no desempenho do veículo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM404', 'EM608'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM826': {
			code: 'EM826',
			name: 'Processamento de Sinais',
			ementa: 'Sinais determinísticos. Relações entre série e transformada de Fourier. Transformada de Fourier discreta e algorítimos da transformada de Fourier rápida. Relações entrada/saída de sistemas lineares. Processos estocásticos. Análise de correlação e densidade espectral de potência. Processamento digital de sinais aleatórios. Erros de estimação. Relações entrada/saída com sinais aleatórios. Aplicações à análise de sinais e vibração de máquinas e estruturas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414'],
			color: '#D94073',
			obligatory: false
		},
		'EM827': {
			code: 'EM827',
			name: 'Mecânica do Contínuo',
			ementa: 'Noções de cálculo tensorial. Cinemática do meio contínuo. Tensores de deformação. Estado de tensores e tensor tensões. Equações constitutivas. Análise dos sólidos elásticos. Análise dos fluidos Newtonianos viscosos. Formulação integral dos princípios da mecânica dos meios contínuos. Solução dos problemas 2d e 3d.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM506'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM831': {
			code: 'EM831',
			name: 'Engenharia de Qualidade I',
			ementa: 'Conceitos básicos de qualidade. Histórico mundial e brasileiro. Principais correntes e autores. Modelo sistemático da qualidade - Sistema de gestão da qualidade. Organização do sistema da qualidade. Planejamento estratégico da qualidade. Integração dos sistemas na organização. Ciclo da qualidade: mercado, produto, produção. Recursos humanos para a qualidade. Gestão de custos da qualidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335', 'ME414'],
			color: '#A66780',
			obligatory: false
		},
		'EM861': {
			code: 'EM861',
			name: 'Aerodinâmica Básica',
			ementa: 'Cinética e dinâmica dos fluidos, técnicas de variáveis complexas, escoamento potencial bidimensional e tridimensional, aerodinâmica de aerofólio, teoria de asa finita, aerofólio e combinação em escoamento compressível.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM862': {
			code: 'EM862',
			name: 'Controle de Vibrações e Ruído',
			ementa: 'Revisão de controle clássico. Introdução ao controle digital. Controle por realimentação de estados digitais. Observadores. Controle adaptativo. Teoria da filtragem adaptativa. Algoritmos baseados em mínimos quadrados. Aplicação ao controle de sistemas aeronáuticos e automobilíticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM707'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM863': {
			code: 'EM863',
			name: 'Aeroelasticidade',
			ementa: 'Introdução e conceitos, deformação de estrutura aerodinâmica sobre cargas estáticas e dinâmicas. Técnicas de cálculo de modo e de forma e frequência natural, análise de aerofólios em escoamentos bi e tridimensional incompressível e compressível, fenômenos de aeroelásticos estáticos, fenômeno de flutter.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM607'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM864': {
			code: 'EM864',
			name: 'Dinâmica de Estruturas',
			ementa: 'Equilíbrio dinâmico e princípio de Hamilton. Obtenção de equações de equilíbrio dinâmico para meios contínuos simples: barras, eixo e vigas. Análise modal e reposta por superposição modal. Métodos aproximados usando equações de Lagrange. Análise modal de sistemas discretos. Resposta livre forçada. Integração direta a resposta por transformadas de Fourier e Laplace. Introdução método dos elementos finitos em dinâmica estrutural. Introdução ao método de redução e subestruturação. Introdução à análise modal experimental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM607'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM865': {
			code: 'EM865',
			name: 'Motores de Combustão Interna',
			ementa: 'Conceitos práticos de motores à gasolina, diesel e gás. Teoria de combustão aplicada a motores. Ondas de combustão. Projeto de câmara de combustão. Curvas de potência, torque, consumo e pressão média. Avaliação prática do motor.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM866': {
			code: 'EM866',
			name: 'Dinâmica de Veículos',
			ementa: 'Princípios da dinâmica veicular. Desempenho em aceleração e frenagem. Aerodinâmica, resistência ao rolamento. Suspensão, sistemas de direção, pneus e freios. Estudo dos elementos do motor. Dinâmica da suspensão: pneus, isolamento da vibração do motor; dirigibilidade, estabilidade, freios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM867': {
			code: 'EM867',
			name: 'Análise Dinâmica Estrutural',
			ementa: 'Aplicação do método dos elementos finitos na análise dinâmica estrutural. Cálculo de frequências naturais e modos de vibração. Cálculo de tensões e deformações dinâmicas. Resposta temporal e em frequência para excitações harmônicas, transientes e aleatórias. Fadiga. Choque.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'EM607'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM868': {
			code: 'EM868',
			name: 'Eletrônica Aplicada a Sistemas Automotivos',
			ementa: 'Sistemas automatizados aplicados a veículos automotores. Sensores em sistemas automáticos veiculares. Sistemas de condução e multiplexação de sinais, redes de comunicação de dados. Estrutura e funcionamento de circuitos lógicos reprogramáveis. Sistema de supervisão e controle. Sistemas eletrônicos de controle ativo de motores, transmissão e freios - Integração de Circuitos lógicos reprogramáveis, sensores e atuadores a partir de redes de comunicação de dados. Sistemas eletrônicos para gerenciamento de motores - ignição e injeção eletrônica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM707'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM873': {
			code: 'EM873',
			name: 'Laboratório de Sistemas Fluidotérmicos',
			ementa: 'Conjunto de disciplinas de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM884'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM885': {
			code: 'EM885',
			name: 'Introdução ao Método dos Elementos Finitos',
			ementa: 'Introdução ao método dos modelos finitos, com aplicações mecânica dos sólidos. Conceitos básicos em mecânica: métodos variacionais e de resíduos ponderados. Discretização e funções de interpolação. Critérios de convergência. Matrizes dos elementos, elementos isoparamétricos, integração numérica. Conceitos elementares de programação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM503'],
			color: '#8D49B3',
			obligatory: false
		},
		'EM909': {
			code: 'EM909',
			name: 'Projeto de Sistemas Mecânicos',
			ementa: 'Normas e sistemáticas do projeto mecânico industrial. Arquitetura mecânica, concepção a partir de critérios de funcionalidade do produto. Documentação técnica de um projeto. Desenhos de montagem final. Detalhes construtivos. Análise do valor no desenvolvimento de projeto. Método de sistematização da criatividade no projeto. Problemas de segurança dos projetos. Integração do projeto com a fabricação e testes com assistência de computadores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM504', 'EM608'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM917': {
			code: 'EM917',
			name: 'Propulsão',
			ementa: 'Empuxo necessário para voo, termodinâmica básica, motor turbo - jato, turbinas a gás: turbina, propulsor e conjunto propulsor - turbina, motor a pistões, motor ranjet, motor foguete.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM921': {
			code: 'EM921',
			name: 'Manufatura Assistida por Computador',
			ementa: 'CNC: Tipos de CNC, Centros de Torneamento; Centros de Usinagem; Programação manual; Programação via CAM; DNC; Desenvolvimento de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM200', 'EM535'],
			color: '#7367B3',
			obligatory: false
		},
		'EM931': {
			code: 'EM931',
			name: 'Engenharia de Qualidade II',
			ementa: 'Análise e resolução de problemas de qualidade. Ferramentas tradicionais de solução de problemas de qualidade. Ferramentas novas de solução de problemas de qualidade. Técnicas de implantação da qualidade: 5S. Análise do modo de falhas. Técnicas de comparação para a qualidade. Desenvolvimento da criatividade para a solução de problemas. Exemplos de solução de problemas da qualidade com técnicas estatísticas. Controle estatístico de processos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM831'],
			color: '#A66780',
			obligatory: false
		},
		'EM949': {
			code: 'EM949',
			name: 'Manutenção Industrial',
			ementa: 'Organização, Planejamento e controle de manutenção. Manutenção mecânica e elétrica de equipamentos e instalações. Lubrificação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM335'],
			color: '#738D8D',
			obligatory: false
		},
		'EM967': {
			code: 'EM967',
			name: 'Dinâmica dos Gases',
			ementa: 'Conceitos básicos dos gases ideal e real. Ondas de choque normal e oblique, ondas de combustão, escoamento com combustão, escoamento com atrito, troca de calor, injeção de massa, escoamento generalizado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM460', 'EM461'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM968': {
			code: 'EM968',
			name: 'Aerodinâmica Numérica',
			ementa: 'Dinâmica de movimento de corpos nos fluidos. Classificação das equações diferenciais parciais, técnicas de solução de problemas elipticos, hiperbólicos ou parabólicos, escoamentos secundários, escoamento compressível em torno de aerofólio, método dos painéis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM861'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM969': {
			code: 'EM969',
			name: 'Laboratório de Aerodinâmica',
			ementa: 'Experimentos para demonstrar conceitos fundamentais, distribuição de pressão em torno de aerofólio com e sem ângulo de ataque, medição de forças, avaliação de atrito induzido, interferência de asa com corpo, efeito biplano, casos de aerofólio em regime subsônico e supersônico, ondas de choque normal. Experimentos de propulsão.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM861'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM972': {
			code: 'EM972',
			name: 'Oferta e Demanda de Energia',
			ementa: 'Recursos minerais energéticos e fontes renováveis de energia. História da produção e consumo da energia no Brasil e no mundo. Influência dos fatores tecnológicos, econômicos, políticos, sociais e ecológicos em sistemas energéticos como petróleo, carvão mineral, gás natural e outros. Avaliação crítica do cumprimento de energia. Descrição dos usos de energia nos principais setores da sociedade moderna e sua evolução recente. Demanda e utilização de energia. Fluxos de energia e estruturas de consumo. Gestão e políticas energéticas. Planejamento energético.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM360'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM973': {
			code: 'EM973',
			name: 'Desenvolvimento e Meio Ambiente',
			ementa: 'Ciclos da natureza e o meio ambiente. Meio ambiente e o desenvolvimento social e econômico. Energia e o meio ambiente. Sustentabilidade. Políticas públicas, instrumentos econômicos e regulatórios. Padrões ambientais e legislação ambiental. Sistema de gestão ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#D94040',
			obligatory: false
		},
		'EM974': {
			code: 'EM974',
			name: 'Métodos Computacionais em Engenharia Térmica e Ambiental',
			ementa: 'Introdução ao método dos volumes finitos, aplicado em programas computacionais para a simulação de fenômenos envolvendo escoamento de fluidos, transferência de calor e transferência de massa, no âmbito do estudo de sistemas energéticos e de seus impactos ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM503'],
			color: '#8D49B3',
			obligatory: false
		},
		'EM975': {
			code: 'EM975',
			name: 'Gestão do Uso da Energia',
			ementa: 'Uso racional de energia: conceitos e princípios da conservação e da substituição. Análise de processos industriais energo-intensivos e caracterização do uso de energia. Instrumento de análise, diagnóstico e auditoria. Princípios da gestão do uso da energia. Otimização energética em sistemas industriais. Aspectos ambientais da gestão do uso de energia: subprodutos, resíduos, efluentes e reciclagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM884'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM976': {
			code: 'EM976',
			name: 'Engenharia Ambiental',
			ementa: 'Problemas e impactos ambientais na conversão do uso de energia. Padrões de emissão e padrões de qualidade. Indicadores e critérios de qualidade. Avaliação de impactos ambientais. Modelos de dispersão. Tecnologia de controle e tecnologias mais limpas. Reciclagem dos materiais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM570'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM977': {
			code: 'EM977',
			name: 'Otimização de Sistemas',
			ementa: 'Programação linear: exemplo introdutório e formulação; método Simplex (procedimento, teoria, programação computacional); análise de sensibilidade, dualidade. Otimização em rede: transporte, caminho mínimo e fluxo máximo, método Simplex especializado. Programação não linear: Condições de otimalidade, busca unidimensional, minimização irrestrita, minimização com restrições.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM983': {
			code: 'EM983',
			name: 'Otimização de Sistemas Energéticos',
			ementa: 'Programação dinâmica: determinística e estocástica. Programação inteira: algoritmo de branch-and-bound. Aplicações em sistemas energéticos. Operação de sistemas hidrotérmico e de distribuição de água. Síntese de gasoduto, de sistema de cogeração e de rede de trocadores de calor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM986': {
			code: 'EM986',
			name: 'Tópicos em Engenharia Ambiental',
			ementa: 'Ementa variável. Seminários sobre tópicos específicos em Engenharia Ambiental: Novas tecnologias e métodos utilizados em Engenharia Ambiental. Novos produtos e equipamentos. Processos especiais. Tópicos complementares em Engenharia Ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#BFD940',
			obligatory: false
		},
		'EM987': {
			code: 'EM987',
			name: 'Introdução ao Método dos Elementos de Contorno',
			ementa: 'Introdução e fundamentos matemáticos. O método de análise por elementos de contorno. Introdução a transferência de calor. Aspectos da análise em 2D de problemas da transferência de calor por elementos de contorno. Conceitos de integração. Introdução à mecânica dos sólidos. Formulação de contorno em mecânica dos sólidos. Formulação de contorno para tensão plana e deformação plana. Análise de tensões em 2D pelo método dos elementos de contorno.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM503'],
			color: '#8D49B3',
			obligatory: false
		},
		'EM988': {
			code: 'EM988',
			name: 'Métodos Matemáticos para a Engenharia',
			ementa: 'Números complexos. Séries. Vetores. Notação indicial. Vetores euclidianos. Produto escalar e projeções em uma reta. Matrizes. Métodos de resolução de sistemas de equações lineares. Transformações similares. Auto valores e auto-vetores. Pseudo-inversa e decomposições em valores singulares. Integradores lineares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#8D4DA6',
			obligatory: false
		},
		'EM989': {
			code: 'EM989',
			name: 'Tópicos em Mecânica Computacional',
			ementa: 'Ementa variável. Seminários sobre tópicos específicos em mecânica computacional: novas tecnologias e métodos utilizados em mecânica computacional. Novos produtos e equipamentos, processos especiais. Tópicos complementares em mecânica computacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#40BFD9',
			obligatory: false
		},
		'EM990': {
			code: 'EM990',
			name: 'Tópicos em Energia',
			ementa: 'Abordagem mais ampla ou profunda de um assunto particular de área de Energia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D95940',
			obligatory: false
		},
		'EM993': {
			code: 'EM993',
			name: 'Tópicos em Engenharia',
			ementa: 'Abordagem mais ampla ou profunda de um assunto particular de Engenharia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9D940',
			obligatory: false
		},
		'EM995': {
			code: 'EM995',
			name: 'Tópicos em Engenharia de Fabricação I',
			ementa: 'Abordagem mais ampla ou profunda de um assunto particular de Engenharia na área de Fabricação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D959',
			obligatory: false
		},
		'ES826': {
			code: 'ES826',
			name: 'Engenharia Simultânea',
			ementa: 'A organização fabril por departamentos. A organização por Centros de Custos. A organização por Centros de Lucros. Técnicas modernas de gestão de projetos. O arranjo celular para manufatura. O conceito de equipes de trabalho multidisciplinares. A organização integrada por computador.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM733'],
			color: '#738D8D',
			obligatory: false
		},
		'ES931': {
			code: 'ES931',
			name: 'Administração dos Sistemas de Produção',
			ementa: 'Evolução das teorias de administração. Estrutura e funcionamento das organizações. Técnicas de planejamento, programação e gerenciamento e controle da produção. Análise de valores. MRP. PERT-CPM. Pesquisa operacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE738'],
			color: '#D97340',
			obligatory: false
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40D9BF',
			obligatory: false
		},
		'HG023': {
			code: 'HG023',
			name: 'Introdução à Filosofia da Ciência',
			ementa: 'Discussão dos problemas e conceitos fundamentais da filosofia contemporânea da ciência. O conceito de cientificidade. A ciência experimental e o método hipotético-dedutivo. Explicações causais, teleológicas, histórico-genéticas, probabilísticas, estruturais, funcionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94059',
			obligatory: false
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia. Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D940',
			obligatory: false
		},
		'HZ292': {
			code: 'HZ292',
			name: 'Tópicos Especiais de Humanidades II',
			ementa: 'Filosofia da ciência. Elementos de sociologia. Sociologia rural. Antropologia. Deontologia.Obs.: Sendo uma disciplina reservada aos cursos de engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A6',
			obligatory: false
		},
		'HZ293': {
			code: 'HZ293',
			name: 'Tópicos Especiais de Humanidades III',
			ementa: 'O curso abordará a análise dos aspectos sociais das inovações tecnológicas e da pesquisa científica. No decorrer das exposições e seminários, serão desenvolvidas análises de casos precisos, tentando incorporar um quadro de referência comparativo entre a sociedade brasileira e o contexto internacional.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940BF',
			obligatory: false
		}
	}
};

export default catalogue;
