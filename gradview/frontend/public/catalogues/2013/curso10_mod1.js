const catalogue = {
	totalCredits: 240,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['QG100', 'EM102', 'MA141', 'MA111', 'F_128', 'EM110']
		},
		'sem-2': {
			id: '2',
			subjects: ['EM306', 'EM240', 'EM200', 'MA211', 'F_328', 'F_129', 'EM103', 'ME414']
		},
		'sem-3': {
			id: '3',
			subjects: ['EM330', 'EM335', 'MC102', 'F_428', 'F_329', 'EM360', 'MA311']
		},
		'sem-4': {
			id: '4',
			subjects: ['EM406', 'EM641', 'EM404', 'MS211', 'MA327', 'EM460', 'EM461', 'F_429']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM014', 'EM638', 'EM504', 'EM506', 'EM503', 'EM737', 'EM570', 'EM561']
		},
		'sem-6': {
			id: '6',
			subjects: ['EM665', 'EM535', 'EM909', 'EM607', 'ET017', 'EM733', 'EM670']
		},
		'sem-7': {
			id: '7',
			subjects: ['EM730', 'EM833', 'EM608', 'EM707', 'EM703', 'EM884', 'EM783', 'EM853']
		},
		'sem-8': {
			id: '8',
			subjects: ['BE310', 'EM740', 'EM790', 'ELET08', 'EM807', 'EM984', 'CE738']
		},
		'sem-9': {
			id: '9',
			subjects: ['EM926', 'CE304', 'EM914', 'EM928']
		},
		'sem-10': {
			id: '10',
			subjects: ['EM916', 'EM919']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['AM---', 'EI---', 'EM---', 'ES---', 'GT001', 'HG023', 'HZ291', 'HZ292', 'HZ293'],
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
			color: '#466EB9',
			obligatory: true
		},
		'EM110': {
			code: 'EM110',
			name: 'Introdução à Engenharia Mecânica',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos de engenharia. Origem e evolução da engenharia mecânica. A engenharia mecânica brasileira. A Faculdade de Engenharia Mecânica da Unicamp. Atribuições profissionais e perspectiva do mercado do trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B950',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946A0',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B4B946',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7846B9',
			obligatory: true
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais \"da idade da pedra lascada ao plástico inteligente\"; a ligação química em materiais isolantes; a ligação química em materiais semicondutores; a ligação química em materiais condutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B96E',
			obligatory: true
		},
		'EM103': {
			code: 'EM103',
			name: 'Metodologia de Pesquisa e Redação Científica',
			ementa: 'Condução e revisão bibliográfica. Estruturas de trabalhos, relatórios, dissertações e teses. Normas de orientação bibliográfica e normas de apresentação de trabalhos. Estrutura e orientação para a formulação de artigos e resumo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94664',
			obligatory: true
		},
		'EM200': {
			code: 'EM200',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução a um programa computacional de desenho. Desenhos de elementos de máquinas (sistemas de transmissão, mancais, conexões, etc.). Desenhos de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM102'],
			color: '#466EB9',
			obligatory: true
		},
		'EM240': {
			code: 'EM240',
			name: 'Estrutura e Propriedades dos Materiais',
			ementa: 'Estrutura e defeitos cristalinos. Difusão atômica. Soluções sólidas. Nucleação e Crescimento de fases. Diagramas de fase. Recuperação, recristalização e crescimento de grãos. Solubilização e Precipitação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG100'],
			color: '#46B96E',
			obligatory: true
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#968080',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9646B9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#A26C8A',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#968080',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#B4B946',
			obligatory: true
		},
		'EM330': {
			code: 'EM330',
			name: 'Oficinas I',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora. Obs.: Realizado nas oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, 71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#96B946',
			obligatory: true
		},
		'EM335': {
			code: 'EM335',
			name: 'Tecnologia Mecânica',
			ementa: 'Normalização. Tolerâncias dimensionais e geométricas. Cadeia de Dimensões. Rugosidade. Metrologia industrial. Princípios de Processos de Fabricação. Planejamento do processo e Sobrematerial. Noções de Controle Estatístico de Processo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102'],
			color: '#466EB9',
			obligatory: true
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#968080',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#A58080',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#A26C8A',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#968080',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#468CB9',
			obligatory: true
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#968080',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#968080',
			obligatory: true
		},
		'EM460': {
			code: 'EM460',
			name: 'Termodinâmica II',
			ementa: 'Análise exergética. Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos; bomba de calor. Propriedade de misturas. Pscicrometria. Reações químicas e combustão. Princípios de equilíbrio químico. Relações de Maxwell e propriedades termodinâmicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360'],
			color: '#968080',
			obligatory: true
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Lei básica da estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno: perda de carga. Escoamento viscoso incompressível externo: arrasto e sustentação. Máquinas de Fluxo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#968080',
			obligatory: true
		},
		'EM641': {
			code: 'EM641',
			name: 'Ensaios dos Materiais',
			ementa: 'Propriedades mecânicas dos materiais. Normas e especificações de ensaios de materiais. Ensaios mecânicos estáticos e dinâmicos. Metalografia. Análise química. Ensaios não destrutivos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#46B96E',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#A58080',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#7846B9',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#7B8493',
			obligatory: true
		},
		'EM014': {
			code: 'EM014',
			name: 'Materiais Poliméricos',
			ementa: 'Conceitos básicos. Estrutura molecular dos polímeros. Classificação dos polímeros. Comportamento térmico e mecânico de polímeros. Processamento de polímeros (classificação dos processos, processos de injeção e extrusão). Compósitos de matriz polimérica e blendas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#46B96E',
			obligatory: true
		},
		'EM503': {
			code: 'EM503',
			name: 'Introdução aos Métodos Numéricos Aplicados à Engenharia',
			ementa: 'Introdução aos métodos das diferenças finitas, dos volumes finitos e dos elementos finitos. Uso de aplicativos computacionais na solução de problemas de engenharia mecânica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102', 'MS211', 'EM406', 'EM461', 'MA327'],
			color: '#7B729B',
			obligatory: true
		},
		'EM504': {
			code: 'EM504',
			name: 'Mecanismos e Dinâmica das Máquinas',
			ementa: 'Graus de liberdade, características e terminologia dos mecanismos articulados planares. Cinemática do engrenamento. Introdução aos camos. Modelagem cinemática e dinâmica por coordenadas generalizadas, Eksergian e introdução aos métodos de energia por Lagrange. Esforços internos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#968080',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#968080',
			obligatory: true
		},
		'EM561': {
			code: 'EM561',
			name: 'Mecânica dos Fluidos II',
			ementa: 'Forças estáticas exercidas por fluidos sobre superfícies. Conceitos cinemáticos. Introdução à analise diferencial dos escoamentos. Equações de Navier-Stokes. Escoamento incompressível de fluidos não viscosos. Noções de escoamentos em canais abertos. Camada-limite. Introdução ao escoamento compressível.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461'],
			color: '#968080',
			obligatory: true
		},
		'EM570': {
			code: 'EM570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à Transferência de Calor e à Condução. Condução Unidimensional em Regime Permanente. Introdução à Condução Bidimensional em Regime Permanente. Formulação Concentrada da Condução Transitória. Introdução à Convecção Térmica. Convecção em Escoamentos Externos. Convecção Natural em Escoamentos Externos. Radiação Térmica: Processos e Propriedades e Transferência de Calor.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: '#968080',
			obligatory: true
		},
		'EM638': {
			code: 'EM638',
			name: 'Mecânica e Mecanismos da Fratura',
			ementa: 'Mecanismos de fratura e fadiga. Noções de mecânica da fratura. Fadiga de alto e baixo ciclo. Propagação da trinca por fadiga. Aplicação dos conceitos da mecânica de fratura e fadiga ao projeto estrutural.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240', 'EM406'],
			color: '#6E9D77',
			obligatory: true
		},
		'EM737': {
			code: 'EM737',
			name: 'Tecnologia de Ligas Metálicas',
			ementa: 'O sistema ferro-carbono. Decomposição da Austenita e fases metaestáveís. Curvas TTT e CCT. Tratamentos térmicos e termoquímicos. Curvas. Influências dos elementos de liga nos aços. Classificação e seleção dos aços. Produção de Aços. Ferros fundidos: características e aplicações. Metais não ferrosos e suas ligas: tratamentos térmicos, classificação e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM240'],
			color: '#46B96E',
			obligatory: true
		},
		'EM535': {
			code: 'EM535',
			name: 'Usinagem dos Materiais',
			ementa: 'Normas de usinagem. Mecanismos de formação de cavaco. Forças e potência de corte. Materiais de ferramentas. Desgaste, avarias e vida de ferramentas. Análise das condições econômicas de usinagem. Usinabilidade. Furação. Fresamento. Retificação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#466EB9',
			obligatory: true
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas lineares de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404', 'MA327'],
			color: '#87639D',
			obligatory: true
		},
		'EM665': {
			code: 'EM665',
			name: 'Processos Metalúrgicos de Fabricação',
			ementa: 'Introdução à Fundição. Solidificação de Metais e Ligas. Formação de Estruturas Fundidas. Fluxo de material e calor na fundição. Controle da Fusão. Ligas de Fundição. Processos de Fundição: Contínua; Molde Colapsável e Molde Permanente. Projeto de Fundição. Análise Econômica de Fundição. Princípios e Metalurgia da soldagem. Simbologia e normalização em soldagem. Equipamentos e processos de soldagem. Princípios de Metalurgia do Pó. Processos de Metalurgia do Pó e controle de Processos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM240'],
			color: '#46B96E',
			obligatory: true
		},
		'EM670': {
			code: 'EM670',
			name: 'Transferência de Calor II',
			ementa: 'Convecção em Escoamentos Internos. Ebulição e Condensação. Trocadores de Calor. Condução Bidimensional em Regime Permanente e em Regime Transitório: Soluções Analíticas e Métodos Numéricos. Transferência de Massa por Difusão. Introdução à Convecção de Calor e Massa. Convecção em Escoamentos Externos. Convecção de Massa em Escoamentos Internos. Convecção Natural em Escoamentos Internos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM561', 'EM570'],
			color: '#968080',
			obligatory: true
		},
		'EM733': {
			code: 'EM733',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Tempos padrões. Classificação dos sistemas de manufatura. Tecnologia de grupo. Produtividade industrial. Planejamento e controle da produção. Teoria das Restrições. MRP I e II. Arranjo físico. Sistema Toyota de Produção.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#466EB9',
			obligatory: true
		},
		'EM909': {
			code: 'EM909',
			name: 'Projeto de Sistemas Mecânicos',
			ementa: 'Metodologia e sistemática do projeto. Métodos de sistematização da criatividade. Concepção a partir de critérios de funcionalidade. QFD e análise do valor. Arquitetura mecânica. Metodologias Design for X: Segurança, Manufatura, Confiabilidade. Otimização. Documentação de projeto. Projeto detalhado. Prototipagem e maquetagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM200'],
			color: '#466EB9',
			obligatory: true
		},
		'ET017': {
			code: 'ET017',
			name: 'Circuitos e Eletrotécnica',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos em C.C. e C.A. Circuitos monofásicos e trifásicos. Potência e Energia. Transformadores. Máquinas elétricas rotativas. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328', 'F_329'],
			color: '#A47685',
			obligatory: true
		},
		'EM608': {
			code: 'EM608',
			name: 'Elementos de Máquinas',
			ementa: 'Dimensionamento de componentes mecânicos à fadiga, fadiga superficial e fratura. Eixos, mancais, engrenagens, molas, junções, embreagens e freios, transmissões flexíveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM506', 'EM638', '*EM504', '*EM909'],
			color: '#78838C',
			obligatory: true
		},
		'EM703': {
			code: 'EM703',
			name: 'Instrumentação',
			ementa: 'Características estáticas e dinâmicas dos instrumentos e sensores. Análise de dados e incertezas experimentais. Medida e análise de deslocamento, velocidade, aceleração, força, torque, potência mecânica. Problemas na amplificação, transmissão e armazenamento de sinais. Medições de som. Medidas de pressão, vazão e tempreatura. Medidas de propriedades térmicas e de transporte. Introdução ao processamento de sinais, amostragem, filtros digitais, janelamento e espectro de frequência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM570', 'EM607'],
			color: '#91768A',
			obligatory: true
		},
		'EM707': {
			code: 'EM707',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceitos fundamentais. Critérios de estabilidade. Resposta em frequência. Lugar das raízes. Ações de controle básicas. Noções de modelagem de estado. Aplicações em controle de sistemas mecânicos, hidráulicos e pneumáticos, usando PID/CLP.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607'],
			color: '#87639D',
			obligatory: true
		},
		'EM730': {
			code: 'EM730',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição de processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240', 'EM335'],
			color: '#469494',
			obligatory: true
		},
		'EM783': {
			code: 'EM783',
			name: 'Laboratório de Calor e Fluidos I',
			ementa: 'Conjuntos de experiências de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte. Medição de Pressão, vazão, temperatura e propriedades termofluidodinâmicas. Incertezas de medida.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM561', 'EM570'],
			color: '#968080',
			obligatory: true
		},
		'EM833': {
			code: 'EM833',
			name: 'Seleção de Materiais',
			ementa: 'Critérios de seleção de materiais. Matriz de decisão ponderada. Seleção de materiais(metálicos, poliméricos, cerâmicos e conjugados) para atender às solicitações: resistência mecânica, fadiga, tenacidade, desgaste, altas temperaturas, corrosão. Trabalho prático de seleção de materiais junto à indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#46B96E',
			obligatory: true
		},
		'EM853': {
			code: 'EM853',
			name: 'Engenharia Econômica',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'MA311'],
			color: '#968080',
			obligatory: true
		},
		'EM884': {
			code: 'EM884',
			name: 'Sistemas Fluidotérmicos II',
			ementa: 'Introdução a sistemas fluidotérmicos. Combustíveis e combustão. Geração, distribuição e utilização de vapor. Fornos, aquecedores e incineradores. Sistemas de geração de potência. Turbinas térmicas. Motores de combustão interna. Sistemas de cogeração. Projeto, análise, integração de critérios econômicos, ambientais e otimização de sistemas de geração de potência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#968080',
			obligatory: true
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#B94646',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96446',
			obligatory: true
		},
		'EM740': {
			code: 'EM740',
			name: 'Laboratório de Engenharia dos Materiais',
			ementa: 'Experiências de laboratório relativas a estrutura, propriedades e transformações de fase de materiais metálicos e não metálicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM641'],
			color: '#46B96E',
			obligatory: true
		},
		'EM790': {
			code: 'EM790',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Conceitos de CAD, CAE e CAM integrados. Sistemas de visualização 2D e 3D. Conceitos de Projeto Mecânico. Modelagem para refinamento, análise e otimização de sistemas mecânicos. Aplicação do método de elementos finitos a problemas estruturais e térmicos. Desenvolvimento de projeto assistido por computador.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM200', 'EM503', '*EM608'],
			color: '#6876A0',
			obligatory: true
		},
		'EM807': {
			code: 'EM807',
			name: 'Laboratório de Dinâmica e Vibrações',
			ementa: 'Experimentos com aplicação dos conhecimentos da dinâmica e vibrações.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM703'],
			color: '#91768A',
			obligatory: true
		},
		'EM984': {
			code: 'EM984',
			name: 'Sistemas Fluidotérmicos III',
			ementa: 'Projeto, análise e otimização de sistemas fluidotérmicos. Análise sistêmica de plantas de bombeamento, recuperação de calor, geração de potência, refrigeração e ar-condicionado. Integração de critérios econômicos e ambientais. Uso integrado de ferramentas computacionais de cálculo de propriedades termofluidodinâmicas na simulação e otimização de sistemas fluidotérmicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM884'],
			color: '#968080',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
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
			color: '#46AAB9',
			obligatory: true
		},
		'EM914': {
			code: 'EM914',
			name: 'Trabalho de Graduação I',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. O trabalho será desenvolvido sob a orientação de um professor, com apresentação final escrita e analisada por, ao menos, dois professores do Curso de Engenharia Mecânica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200', 'AA475', 'EM103'],
			color: '#B94664',
			obligatory: true
		},
		'EM926': {
			code: 'EM926',
			name: 'Projeto do Produto',
			ementa: 'Aplicação da metodologia de projeto no desenvolvimento das fases de concepção, projeto preliminar e projeto detalhado para componentes e sistemas mecânicos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM608', 'EM790', 'EM909'],
			color: '#6278A2',
			obligatory: true
		},
		'EM928': {
			code: 'EM928',
			name: 'Projeto do Processo',
			ementa: 'Projeto de Sistemas de Manufatura. Geração da peça em bruto e seleção de processos. Sequenciamento Completo de Operações e Determinação de Operações Intermediárias. Detalhamento de Operações. Seleção dos Equipamentos de Produção e de Dispositivos Especiais. Montagem. Projeto da Instalação Fabril.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM733'],
			color: '#466EB9',
			obligatory: true
		},
		'EM916': {
			code: 'EM916',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projetos. Montagens e execuções de equipamentos e sistemas em Engenharia Mecânica junto a um órgão credenciado pelo departamento. O estágio é orientado bilateralmente e conclui com a apresentação de um relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#B94682',
			obligatory: true
		},
		'EM919': {
			code: 'EM919',
			name: 'Trabalho de Graduação II',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. O trabalho, que deverá ser uma continuação do trabalho iniciado na disciplina EM914, será desenvolvido sob a orientação de um professor, com apresentação final escrita e analisada por, ao menos, dois professores do Curso de Engenharia Mecânica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'EM914'],
			color: '#B94664',
			obligatory: true
		},
		'AM---': {
			code: 'AM---',
			name: 'Qualquer Disciplina com codigo AM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B98C',
			obligatory: false
		},
		'EI---': {
			code: 'EI---',
			name: 'Qualquer Disciplina com codigo EI---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EI---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5A46B9',
			obligatory: false
		},
		'EM---': {
			code: 'EM---',
			name: 'Qualquer Disciplina com codigo EM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#78B946',
			obligatory: false
		},
		'ES---': {
			code: 'ES---',
			name: 'Qualquer Disciplina com codigo ES---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ES---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B9AA',
			obligatory: false
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#5AB946',
			obligatory: false
		},
		'HG023': {
			code: 'HG023',
			name: 'Introdução à Filosofia da Ciência',
			ementa: 'Discussão dos problemas e conceitos fundamentais da filosofia contemporânea da ciência. O conceito de cientificidade. A ciência experimental e o método hipotético-dedutivo. Explicações causais, teleológicas, histórico-genéticas, probabilísticas, estruturais, funcionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B446B9',
			obligatory: false
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia. Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98246',
			obligatory: false
		},
		'HZ292': {
			code: 'HZ292',
			name: 'Tópicos Especiais de Humanidades II',
			ementa: 'Filosofia da ciência. Elementos de sociologia. Sociologia rural. Antropologia. Deontologia.Obs.: Sendo uma disciplina reservada aos cursos de engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4650B9',
			obligatory: false
		},
		'HZ293': {
			code: 'HZ293',
			name: 'Tópicos Especiais de Humanidades III',
			ementa: 'O curso abordará a análise dos aspectos sociais das inovações tecnológicas e da pesquisa científica. No decorrer das exposições e seminários, serão desenvolvidas análises de casos precisos, tentando incorporar um quadro de referência comparativo entre a sociedade brasileira e o contexto internacional.Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos das Áreas de Humanidades, Artes e do curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A046',
			obligatory: false
		}
	}
};

export default catalogue;
