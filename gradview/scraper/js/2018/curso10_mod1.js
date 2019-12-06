const catalogue = {
	totalCredits: 240,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EM102', 'EM110', 'F_128', 'MA111', 'MA141', 'QG111', 'QG122']
		},
		'sem-2': {
			id: '2',
			subjects: ['EM103', 'EM200', 'EM240', 'EM306', 'F_129', 'F_328', 'MA211', 'ME414']
		},
		'sem-3': {
			id: '3',
			subjects: ['EM330', 'EM335', 'EM360', 'F_329', 'F_428', 'MA311', 'MC102']
		},
		'sem-4': {
			id: '4',
			subjects: ['EM404', 'EM406', 'EM460', 'EM461', 'EM641', 'F_429', 'MA327', 'MS211']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM014', 'EM503', 'EM504', 'EM506', 'EM561', 'EM570', 'EM638', 'EM737']
		},
		'sem-6': {
			id: '6',
			subjects: ['EM535', 'EM607', 'EM665', 'EM670', 'EM733', 'EM909', 'ET017']
		},
		'sem-7': {
			id: '7',
			subjects: ['EM608', 'EM703', 'EM707', 'EM730', 'EM783', 'EM833', 'EM853', 'EM884']
		},
		'sem-8': {
			id: '8',
			subjects: ['BE310', 'CE738', 'EM740', 'EM790', 'EM807', 'EM984', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['CE304', 'EM105', 'EM926', 'EM928', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EM106', 'EM916']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
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
			color: '#40D9BE',
			obligatory: true
		},
		'EM110': {
			code: 'EM110',
			name: 'Introdução à Engenharia Mecânica',
			ementa: 'Noções gerais sobre ciência e tecnologia. Fundamentos metodológicos de engenharia. Origem e evolução da engenharia mecânica. A engenharia mecânica brasileira. A Faculdade de Engenharia Mecânica da Unicamp. Atribuições profissionais e perspectiva do mercado do trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D988',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97640',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#4052D9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'QG111': {
			code: 'QG111',
			name: 'Química Teórica',
			ementa: 'Matéria e radiação eletromagnética; Estrutura atômica; Ligação química; Forças intermoleculares, Metais; Isolantes e semicondutores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6440D9',
			obligatory: true
		},
		'QG122': {
			code: 'QG122',
			name: 'Química Experimental',
			ementa: 'Funções termodinâmicas; Equilíbrios químicos; Soluções; Eletroquímica; Materiais.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4088D9',
			obligatory: true
		},
		'EM103': {
			code: 'EM103',
			name: 'Metodologia de Pesquisa e Redação Científica',
			ementa: 'Condução de revisão bibliográfica. Estruturas de trabalhos, relatórios, dissertações e teses. Normas de orientação bibliográfica e normas de apresentação de trabalhos. Estrutura e orientação para a formulação de artigos e resumo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94076',
			obligatory: true
		},
		'EM200': {
			code: 'EM200',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução a um programa computacional de desenho. Desenhos de elementos de máquinas (sistemas de transmissão, mancais, conexões, etc.). Desenhos de conjunto. Detalhamento de conjunto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM102'],
			color: '#40D9BE',
			obligatory: true
		},
		'EM240': {
			code: 'EM240',
			name: 'Estrutura e Propriedades dos Materiais',
			ementa: 'Estrutura e defeitos cristalinos. Difusão atômica. Soluções sólidas. Nucleação e Crescimento de fases. Diagramas de fase. Recuperação, recristalização e crescimento de grãos. Solubilização e Precipitação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG111', 'QG122'],
			color: '#5264D9',
			obligatory: true
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#8D498D',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9AD940',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#A65873',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#8D498D',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#4052D9',
			obligatory: true
		},
		'EM330': {
			code: 'EM330',
			name: 'Oficinas I',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora.Obs.: Realizado nas oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, 71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#64D940',
			obligatory: true
		},
		'EM335': {
			code: 'EM335',
			name: 'Tecnologia Mecânica',
			ementa: 'Normalização. Tolerâncias dimensionais e geométricas. Cadeia de Dimensões. Rugosidade. Metrologia industrial. Princípios de Processos de Fabricação. Planejamento do processo e Sobrematerial. Noções de Controle Estatístico de Processo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102'],
			color: '#40D9BE',
			obligatory: true
		},
		'EM360': {
			code: 'EM360',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#8D498D',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#6D968D',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#A65873',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#8D498D',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#9A40D9',
			obligatory: true
		},
		'EM404': {
			code: 'EM404',
			name: 'Dinâmica',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton, conservação dos momentos linear a angular e conservação de energia. Impacto e atrito. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#8D498D',
			obligatory: true
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: '#8D498D',
			obligatory: true
		},
		'EM460': {
			code: 'EM460',
			name: 'Termodinâmica II',
			ementa: 'Análise exergética. Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos; bomba de calor. Propriedade de misturas. Pscicrometria. Reações químicas e combustão. Princípios de equilíbrio químico. Relações de Maxwell e propriedades termodinâmicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360'],
			color: '#8D498D',
			obligatory: true
		},
		'EM461': {
			code: 'EM461',
			name: 'Mecânica dos Fluidos I',
			ementa: 'Introdução e conceitos fundamentais. Lei básica da estática dos fluidos. Leis básicas na forma integral para volume de controle e o Teorema de Transporte de Reynolds. Análise dimensional e semelhança. Escoamento viscoso incompressível interno: perda de carga. Escoamento viscoso incompressível externo: arrasto e sustentação. Máquinas de Fluxo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#8D498D',
			obligatory: true
		},
		'EM641': {
			code: 'EM641',
			name: 'Ensaios dos Materiais',
			ementa: 'Propriedades mecânicas dos materiais. Normas e especificações de ensaios de materiais. Ensaios mecânicos estáticos e dinâmicos. Metalografia. Análise química. Ensaios não destrutivos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#5264D9',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#6D968D',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#D94040',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#9146A6',
			obligatory: true
		},
		'EM014': {
			code: 'EM014',
			name: 'Materiais Poliméricos',
			ementa: 'Conceitos básicos. Estrutura molecular dos polímeros. Classificação dos polímeros. Comportamento térmico e mecânico de polímeros. Processamento de polímeros (classificação dos processos, processos de injeção e extrusão). Compósitos de matriz polimérica e blendas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#5264D9',
			obligatory: true
		},
		'EM503': {
			code: 'EM503',
			name: 'Introdução aos Métodos Numéricos Aplicados à Engenharia',
			ementa: 'Introdução aos métodos das diferenças finitas, dos volumes finitos e dos elementos finitos. Uso de aplicativos computacionais na solução de problemas de engenharia mecânica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM102', 'MS211', 'EM406', 'EM461', 'MA327'],
			color: '#8E638C',
			obligatory: true
		},
		'EM504': {
			code: 'EM504',
			name: 'Mecanismos e Dinâmica das Máquinas',
			ementa: 'Graus de liberdade, características e terminologia dos mecanismos articulados planares. Cinemática do engrenamento. Introdução aos camos. Modelagem cinemática e dinâmica por coordenadas generalizadas, Eksergian e introdução aos métodos de energia por Lagrange. Esforços internos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404'],
			color: '#8D498D',
			obligatory: true
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: '#8D498D',
			obligatory: true
		},
		'EM561': {
			code: 'EM561',
			name: 'Mecânica dos Fluidos II',
			ementa: 'Forças estáticas exercidas por fluidos sobre superfícies. Conceitos cinemáticos. Introdução à analise diferencial dos escoamentos. Equações de Navier-Stokes. Escoamento incompressível de fluidos não viscosos. Noções de escoamentos em canais abertos. Camada-limite. Introdução ao escoamento compressível.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461'],
			color: '#8D498D',
			obligatory: true
		},
		'EM570': {
			code: 'EM570',
			name: 'Transferência de Calor I',
			ementa: 'Introdução à Transferência de Calor. Condução Unidimensional em Regime Permanente. Condução Bidimensional em Regime Permanente. Condução em regime Transitório: soluções analíticas das formulações concentrada e distribuída e método de solução numérica. Transferência de massa por difusão. Conceitos fundamentais da radiação térmica. Radiação de Superfícies negras e de superfícies opacas difusas e cinzentas. Fator de forma e troca de calor entre superfícies negras e entre superfícies opacas, difusa e cinzentas. Radiação combinada com outros mecanismos de troca de calor e em meios participantes.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM360', 'MA311'],
			color: '#8D498D',
			obligatory: true
		},
		'EM638': {
			code: 'EM638',
			name: 'Mecânica e Mecanismos da Fratura',
			ementa: 'Mecanismos de fratura e fadiga. Noções de mecânica da fratura. Fadiga de alto e baixo ciclo. Propagação da trinca por fadiga. Aplicação dos conceitos da mecânica de fratura e fadiga ao projeto estrutural.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240', 'EM406'],
			color: '#7057B3',
			obligatory: true
		},
		'EM737': {
			code: 'EM737',
			name: 'Tecnologia de Ligas Metálicas',
			ementa: 'O sistema ferro-carbono. Decomposição da Austenita e fases metaestáveís. Curvas TTT e CCT. Tratamentos térmicos e termoquímicos. Curvas. Influências dos elementos de liga nos aços. Classificação e seleção dos aços. Produção de Aços. Ferros fundidos: características e aplicações. Metais não ferrosos e suas ligas: tratamentos térmicos, classificação e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM240'],
			color: '#5264D9',
			obligatory: true
		},
		'EM535': {
			code: 'EM535',
			name: 'Usinagem dos Materiais',
			ementa: 'Normas de usinagem. Mecanismos de formação de cavaco. Forças e potência de corte. Materiais de ferramentas. Desgaste, avarias e vida de ferramentas. Análise das condições econômicas de usinagem. Usinabilidade. Furação. Fresamento. Retificação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#40D9BE',
			obligatory: true
		},
		'EM607': {
			code: 'EM607',
			name: 'Vibrações de Sistemas Mecânicos',
			ementa: 'Estudo das vibrações mecânicas. Sistemas lineares de um grau de liberdade. Vibrações livres e forçadas. Transformada de Laplace. Transmissibilidade e isolação de vibrações. Sistemas lineares discretos. Frequência natural e modos próprios. Absorvedores de vibração. Introdução aos ensaios dinâmicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM404', 'MA327'],
			color: '#B34567',
			obligatory: true
		},
		'EM665': {
			code: 'EM665',
			name: 'Processos Metalúrgicos de Fabricação',
			ementa: 'Introdução à Fundição. Solidificação de Metais e Ligas. Formação de Estruturas Fundidas. Fluxo de material e calor na fundição. Controle da Fusão. Ligas de Fundição. Processos de Fundição: Contínua; Molde Colapsável e Molde Permanente. Projeto de Fundição. Análise Econômica de Fundição. Princípios e Metalurgia da soldagem. Simbologia e normalização em soldagem. Equipamentos e processos de soldagem. Princípios de Metalurgia do Pó. Processos de Metalurgia do Pó e controle de Processos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM240'],
			color: '#5264D9',
			obligatory: true
		},
		'EM670': {
			code: 'EM670',
			name: 'Transferência de Calor II',
			ementa: 'Introdução à troca convectiva de calor e de massa e sua analogia; resfriamento evaporativo e analogia de Reynolds. Troca convectiva de calor e massa em escoamentos forçados externos e internos, nos regimes laminar e turbulento. Convecção natural em superfícies e em cavidades; convecção mista e transferência de massa por convecção natural. Troca de calor com mudança de fase: condensação e ebulição em vaso aberto e em convecção forçada. Trocadores de calor: coeficiente global de troca de calor, métodos DMLT e da efetividade, trocadores de calor compactos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM561', 'EM570'],
			color: '#8D498D',
			obligatory: true
		},
		'EM733': {
			code: 'EM733',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Tempos padrões. Classificação dos sistemas de manufatura. Tecnologia de grupo. Produtividade industrial. Planejamento e controle da produção. Teoria das Restrições. MRP I e II. Arranjo físico. Sistema Toyota de Produção.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335'],
			color: '#40D9BE',
			obligatory: true
		},
		'EM909': {
			code: 'EM909',
			name: 'Projeto de Sistemas Mecânicos',
			ementa: 'Metodologia e sistemática do projeto. Métodos de sistematização da criatividade. Concepção a partir de critérios de funcionalidade. QFD e análise do valor. Arquitetura mecânica. Metodologias Design for X: Segurança, Manufatura, Confiabilidade. Otimização. Documentação de projeto. Projeto detalhado. Prototipagem e maquetagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM200'],
			color: '#40D9BE',
			obligatory: true
		},
		'ET017': {
			code: 'ET017',
			name: 'Circuitos e Eletrotécnica',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos em C.C. e C.A. Circuitos monofásicos e trifásicos. Potência e Energia. Transformadores. Máquinas elétricas rotativas. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328', 'F_329'],
			color: '#8A7780',
			obligatory: true
		},
		'EM608': {
			code: 'EM608',
			name: 'Elementos de Máquinas',
			ementa: 'Dimensionamento de componentes mecânicos à fadiga, fadiga superficial e fratura. Eixos, mancais, engrenagens, molas, junções, embreagens e freios, transmissões flexíveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM506', 'EM638', '*EM504', '*EM909'],
			color: '#7371A3',
			obligatory: true
		},
		'EM703': {
			code: 'EM703',
			name: 'Instrumentação',
			ementa: 'Características estáticas e dinâmicas dos instrumentos e sensores. Análise de dados e incertezas experimentais. Medida e análise de deslocamento, velocidade, aceleração, força, torque, potência mecânica. Problemas na amplificação, transmissão e armazenamento de sinais. Medições de som. Medidas de pressão, vazão e tempreatura. Medidas de propriedades térmicas e de transporte. Introdução ao processamento de sinais, amostragem, filtros digitais, janelamento e espectro de frequência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM461', 'EM570', 'EM607'],
			color: '#9A4880',
			obligatory: true
		},
		'EM707': {
			code: 'EM707',
			name: 'Controle de Sistemas Mecânicos',
			ementa: 'Conceitos fundamentais. Critérios de estabilidade. Resposta em frequência. Lugar das raízes. Ações de controle básicas. Noções de modelagem de estado. Aplicações em controle de sistemas mecânicos, hidráulicos e pneumáticos, usando PID/CLP.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM607'],
			color: '#B34567',
			obligatory: true
		},
		'EM730': {
			code: 'EM730',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição de processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240', 'EM335'],
			color: '#499FCC',
			obligatory: true
		},
		'EM783': {
			code: 'EM783',
			name: 'Laboratório de Calor e Fluidos I',
			ementa: 'Conjuntos de experiências de laboratório em termodinâmica básica e aplicada, sistemas fluidomecânicos e fenômenos de transporte. Medição de Pressão, vazão, temperatura e propriedades termofluidodinâmicas. Incertezas de medida.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM561', 'EM570'],
			color: '#8D498D',
			obligatory: true
		},
		'EM833': {
			code: 'EM833',
			name: 'Seleção de Materiais',
			ementa: 'Critérios de seleção de materiais. Matriz de decisão ponderada. Seleção de materiais(metálicos, poliméricos, cerâmicos e conjugados) para atender às solicitações: resistência mecânica, fadiga, tenacidade, desgaste, altas temperaturas, corrosão. Trabalho prático de seleção de materiais junto à indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM240'],
			color: '#5264D9',
			obligatory: true
		},
		'EM853': {
			code: 'EM853',
			name: 'Engenharia Econômica',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'MA311'],
			color: '#8D498D',
			obligatory: true
		},
		'EM884': {
			code: 'EM884',
			name: 'Sistemas Fluidotérmicos II',
			ementa: 'Introdução a sistemas fluidotérmicos. Combustíveis e combustão. Geração, distribuição e utilização de vapor. Fornos, aquecedores e incineradores. Sistemas de geração de potência. Turbinas térmicas. Motores de combustão interna. Sistemas de cogeração. Projeto, análise, integração de critérios econômicos, ambientais e otimização de sistemas de geração de potência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#8D498D',
			obligatory: true
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#D940AC',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D952',
			obligatory: true
		},
		'EM740': {
			code: 'EM740',
			name: 'Laboratório de Engenharia dos Materiais',
			ementa: 'Experiências de laboratório relativas a estrutura, propriedades e transformações de fase de materiais metálicos e não metálicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM641'],
			color: '#5264D9',
			obligatory: true
		},
		'EM790': {
			code: 'EM790',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Conceitos de CAD, CAE e CAM integrados. Sistemas de visualização 2D e 3D. Conceitos de Projeto Mecânico. Modelagem para refinamento, análise e otimização de sistemas mecânicos. Aplicação do método de elementos finitos a problemas estruturais e térmicos. Desenvolvimento de projeto assistido por computador.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM200', 'EM503', '*EM608'],
			color: '#6B8FA4',
			obligatory: true
		},
		'EM807': {
			code: 'EM807',
			name: 'Laboratório de Dinâmica e Vibrações',
			ementa: 'Experimentos com aplicação dos conhecimentos da dinâmica e vibrações.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM703', 'EM707'],
			color: '#A74774',
			obligatory: true
		},
		'EM984': {
			code: 'EM984',
			name: 'Sistemas Fluidotérmicos III',
			ementa: 'Projeto, análise e otimização de sistemas fluidotérmicos. Análise sistêmica de plantas de bombeamento, recuperação de calor, geração de potência, refrigeração e ar-condicionado. Integração de critérios econômicos e ambientais. Uso integrado de ferramentas computacionais de cálculo de propriedades termofluidodinâmicas na simulação e otimização de sistemas fluidotérmicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM460', 'EM461'],
			color: '#8D498D',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D0D940',
			obligatory: true
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40BED9',
			obligatory: true
		},
		'EM105': {
			code: 'EM105',
			name: 'Introdução ao Trabalho de Conclusão de Curso',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica em preparação ao Trabalho de Conclusão de Curso.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200', 'AA465', 'EM103'],
			color: '#D94076',
			obligatory: true
		},
		'EM926': {
			code: 'EM926',
			name: 'Projeto do Produto',
			ementa: 'Aplicação da metodologia de projeto no desenvolvimento das fases de concepção, projeto preliminar e projeto detalhado para componentes e sistemas mecânicos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM608', 'EM790', 'EM909'],
			color: '#5F9EAC',
			obligatory: true
		},
		'EM928': {
			code: 'EM928',
			name: 'Projeto do Processo',
			ementa: 'Projeto de Sistemas de Manufatura. Geração da peça em bruto e seleção de processos. Sequenciamento Completo de Operações e Determinação de Operações Intermediárias. Detalhamento de Operações. Seleção dos Equipamentos de Produção e de Dispositivos Especiais. Montagem. Projeto da Instalação Fabril.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM335', 'EM535', 'EM665', 'EM730', 'EM733'],
			color: '#45B6C6',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D040D9',
			obligatory: true
		},
		'EM106': {
			code: 'EM106',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia Mecânica. A monografia padronizada será analisada por uma banca contendo ao menos dois avaliadores além do orientador.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'EM105'],
			color: '#D94076',
			obligatory: true
		},
		'EM916': {
			code: 'EM916',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projetos. Montagens e execuções de equipamentos e sistemas em Engenharia Mecânica junto a um órgão credenciado pelo departamento. O estágio é orientado bilateralmente e conclui com a apresentação de um relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475'],
			color: '#D9AC40',
			obligatory: true
		}
	}
};

export default catalogue;
