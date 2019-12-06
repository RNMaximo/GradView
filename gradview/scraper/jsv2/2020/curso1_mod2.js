const catalogue = {
	totalCredits: 180,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['F_128', 'F_129', 'MA111', 'MA141', 'MS149', 'FM003']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_228', 'F_229', 'MA211', 'MA327', 'MC102']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_328', 'F_329', 'MA311', 'MS211', 'ME210']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_428', 'MA719', 'MA044', 'MA502']
		},
		'sem-5': {
			id: '5',
			subjects: ['MA602', 'MA446', 'MS550', 'F_589']
		},
		'sem-6': {
			id: '6',
			subjects: ['F_320', 'MS520', 'MS650', 'F_689', 'MA604']
		},
		'sem-7': {
			id: '7',
			subjects: ['MS620', 'F_604', 'MA720', 'F_789', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'MA852']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['MA453', 'MA456'],
		},
		'elet-2': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['F_011', 'F_012', 'F_041', 'F_042', 'F_590', 'F_602', 'F_625', 'F_690', 'F_885', 'F_887', 'F_888', 'MA419', 'MA445', 'MA449', 'MA553', 'MA711', 'MA712', 'MA724', 'MA725', 'MA903', 'MA904', 'MS720', 'MS750', 'MS820'],
		},
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#58B946',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4684B9',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
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
			color: '#469EB9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B984',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5846B9',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#58B946',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#4F9F80',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#46AC9F',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141'],
			color: '#46B984',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B97B46',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#4CB081',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#4691B9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211'],
			color: '#46AC9F',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#469EB9',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#6C9B81',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#4CB081',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211'],
			color: '#46B392',
			obligatory: true
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B9467B',
			obligatory: true
		},
		'MA719': {
			code: 'MA719',
			name: 'Álgebra Linear Avançada',
			ementa: 'Revisão: espaços vetoriais, bases e coordenadas, transformações lineares e matrizes, posto, nulidade, produto interno, operadores normais e autoadjuntos, diagonalização. Espaço dual e a transposta, teorema de Cayley-Hamilton, polinômio mínimo de endomorfismo linear, forma de Jordan, forma de Jordan real, forma racional. Transformação multilinear, função alternada, determinante, produto tensorial de espaços vetoriais, álgebra tensorial, álgebra dos tensores simétricos. Álgebra de Grassmann, álgebra de Clifford, estrutura de formas bilineares e quadráticas, transformação ortogonal e simplética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA327'],
			color: '#46B984',
			obligatory: true
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B96146',
			obligatory: true
		},
		'MA446': {
			code: 'MA446',
			name: 'Grupos e Representações',
			ementa: 'Grupos, subgrupos, classes laterais, teorema de Lagrange, homomorfismo, subgrupos normais, teoremas do isomorfismo, produtos diretos e semi-diretos, grupos de permutações, grupo alternado, ações de grupos em conjuntos, órbitas e contagem, classes de conjugação e equação de classe, classificação dos grupos abelianos finitamente gerados, p-grupos e p-subgrupos, teorema de Cauchy, teoremas de Sylow e aplicações, grupos solúveis, representações de grupos finitos, subrepresentações e teoremas do isomorfismo, lema de Schur, Teorema de Maschke, produto tensorial de representações, caracteres, tabelas de caracteres, relações de ortogonalidade, restrição e indução de representações e seus caracteres, aplicações da teoria de representações a solubilidade de grupos finitos e composição de formas quadráticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA719'],
			color: '#46B984',
			obligatory: true
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946B0',
			obligatory: true
		},
		'MS550': {
			code: 'MS550',
			name: 'Métodos de Matemática Aplicada I',
			ementa: 'Análise Vetorial (revisão). Revisão de equações diferenciais: equações da Física Matemática; sistemas de coordenadas. Existência e unicidade da solução das equações diferenciais ordinárias. Pontos singulares regulares: método de Frobenius. Funções especiais (Bessel, Legendre). Equações Fuchsianas; Função Hipergeométrica. Sistemas de Sturm-Liouville. Polinômios ortogonais. Expansão em autofunções: séries de Fourier, séries generalizadas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA311', 'MA327'],
			color: '#46B392',
			obligatory: true
		},
		'F_320': {
			code: 'F_320',
			name: 'Termodinâmica',
			ementa: 'Sistemas termodinâmicos, reversibilidade, termometria. Variáveis e equações de estado, diagramas PVT. Trabalho e primeira lei da termodinâmica. Equivalente mecânico de calor. Energia interna, entalpia, ciclo de Carnot. Mudanças de fase. Segunda lei da termodinâmica e entropia. Funções termodinâmicas. Aplicações práticas de termodinâmica. Teoria cinética dos gases. Distribuição de velocidades moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA211'],
			color: '#4FB373',
			obligatory: true
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589', 'MA327'],
			color: '#808D65',
			obligatory: true
		},
		'MA604': {
			code: 'MA604',
			name: 'Topologia dos Espaços Métricos',
			ementa: 'Métrica. Funções contínuas. Homeomorfismos. Conjuntos abertos e fechados. Conjuntos compactos. Conjuntos convexos e conexos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502'],
			color: '#B9467B',
			obligatory: true
		},
		'MS520': {
			code: 'MS520',
			name: 'Estrutura Matemática da Mecânica',
			ementa: 'Princípios de Mecânica, leis de Newton. Problemas de dois corpos. Alguns problemas matemáticos associados ao problema de três corpos. Formulação Lagrangiana da mecânica. Simetrias. Variedades simpléticas. Formulação Hamiltoniana da mecânica. Transformações canônicas. Invariantes integrais de Poincaré. Formulação de Hamilton-Jacobi.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MS550'],
			color: '#4FB66C',
			obligatory: true
		},
		'MS650': {
			code: 'MS650',
			name: 'Métodos de Matemática Aplicada II',
			ementa: 'Funções de variáveis complexas (revisão). Transformadas integrais (Fourier e Laplace). Transformadas inversas. Representação integral de funções. Equações diferenciais parciais. Classificação; problemas bem-postos. Equações da onda, do calor e de Laplace. Método de separação de variáveis. Introdução às equações integrais. Cálculo de variações.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MS550'],
			color: '#46B392',
			obligatory: true
		},
		'F_604': {
			code: 'F_604',
			name: 'Física Estatística',
			ementa: 'Introdução às propriedades de sistemas macroscópicos. Conceitos básicos de probabilidade. Interação térmica. Fator de Boltzmann. Relação entre conceitos atômicos e medidas macroscópicas \"Ensemble\" microcanônico. Distribuição canônica na aproximação clássica. Aplicações. Teorema da equipartição da energia. Interação termodinâmica. Termodinâmica estatística. Interação entre sistemas com troca de partículas: o \"Ensemble\" grande canônico. Estatística quântica de gases ideais: estatísticas de fótons, estatísticas de Fermi-Dirac e de Bose-Einstein. Teoria cinética e processos de transporte.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9B046',
			obligatory: true
		},
		'F_789': {
			code: 'F_789',
			name: 'Mecânica Quântica II',
			ementa: 'Forças centrais e o átomo de Hidrogênio. Teoria de Espalhamento de uma partícula por um potencial. Spinores na teoria quântica não-relativística. Adição de momentos angulares. Teoria de perturbação independente do tempo. Estruturas fina e hiperfina do átomo de hidrogênio. Teoria de perturbação dependente do tempo. Partículas idênticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#808D65',
			obligatory: true
		},
		'MA720': {
			code: 'MA720',
			name: 'Análise no R(n)',
			ementa: 'Cálculo de várias variáveis: Aplicações diferenciáveis, Diferencial e Matriz jacobiana, Desigualdade do valor médio, Regra da Cadeia, Derivadas de ordem superior, Fórmula de Taylor, Teorema da função inversa e implícita, Forma local das imersões e submersões e o teorema do posto. Subvariedades de Rn Valores e pontos regulares, espaço tangente, parametrizações locais. Integração, integrais de linha e de superfícies, Formas diferenciais e integração sobre variedades, Teorema de Stokes (Green e Gauss).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211', 'MA502', 'MA327'],
			color: '#6C8E8A',
			obligatory: true
		},
		'MS620': {
			code: 'MS620',
			name: 'Estrutura Matemática do Eletromagnetismo',
			ementa: 'Lei de Coulomb. Equações de Laplace e Poisson. Problema de Neumann e problema de Dirichlet. Magnetostática. Equações de Maxwell. Ondas eletromagnéticas, problema de Cauchy. Guias de ondas e cavidades ressonantes. Formulação tensorial das equações de Maxwell. Tensor de Maxwell e tensor de tensões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_428'],
			color: '#4CB081',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MA852': {
			code: 'MA852',
			name: 'Geometria Diferencial',
			ementa: 'Curvas no plano e espaço: Curvatura e torção - Teorema Fundamental das Curvas Planas. Superfícies no Espaço - Primeira e segunda forma fundamental, área. Aplicação normal de Gauss. Curvaturas gaussiana e média, Linhas de Curvatura. Geometria intrínseca, derivada covariante, Teorema Egregium, Curvatura Geodésica, geodésicas, a aplicação exponencial. O Teorema de Gauss-Bonet. Tópicos adicionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA720'],
			color: '#6C8E8A',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'F_011': {
			code: 'F_011',
			name: 'Tópicos de Física Aplicada I',
			ementa: 'Tópicos atuais de Física Aplicada I',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B94F',
			obligatory: false
		},
		'F_012': {
			code: 'F_012',
			name: 'Tópicos de Física Aplicada II',
			ementa: 'Tópicos atuais de Física Aplicada II',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#7246B9',
			obligatory: false
		},
		'F_041': {
			code: 'F_041',
			name: 'Tópicos de Física Matemática I',
			ementa: 'Tópicos atuais de Física Matemática I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B99E',
			obligatory: false
		},
		'F_042': {
			code: 'F_042',
			name: 'Tópicos de Física Matemática II',
			ementa: 'Tópicos atuais de Física Matemática II.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94696',
			obligatory: false
		},
		'F_590': {
			code: 'F_590',
			name: 'Iniciação Científica I',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#8DB946',
			obligatory: false
		},
		'F_602': {
			code: 'F_602',
			name: 'Eletromagnetismo II',
			ementa: 'Equações de Maxwell. Propagação de ondas eletromagnéticas. Reflexão. Refração. Guias de onda. Radiação. Antenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8D46B9',
			obligatory: false
		},
		'F_625': {
			code: 'F_625',
			name: 'Métodos de Computação Científica I',
			ementa: 'Elementos de programação em python. Parte gráfica: visualização e animação. Integração e diferenciação numérica. Transformadas de Fourier e aplicações. Equações diferenciais ordinárias de primeira e segunda ordem. Equações diferenciais parciais. Problemas de valores de contorno e iniciais. Processos estocásticos e método Monte Carlo. Integração e simulação por métodos Monte Carlo. Método Monte Carlo de Cadeia de Markov.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MS211'],
			color: '#59A490',
			obligatory: false
		},
		'F_690': {
			code: 'F_690',
			name: 'Iniciação Científica II',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#72B946',
			obligatory: false
		},
		'F_885': {
			code: 'F_885',
			name: 'Partículas Elementares e Campos',
			ementa: 'Introdução histórica. Conteúdo de partículas elementares previstos no modelo padrão. Cinemática relativística. Interações fundamentais: bósons intermediários e vértices primitivos da QED, QCD e interações fracas. Teorias de Gauge. Unificação eletrofraca. O mecanismo de Higgs. O modelo padrão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#808D65',
			obligatory: false
		},
		'F_887': {
			code: 'F_887',
			name: 'Física Nuclear',
			ementa: 'O átomo nuclear e o núcleo atômico. O modelo de gás de Fermi. O modelo de partícula independente. Aplicações do modelo de partícula independente. Núcleos com mais que um nucleon fora de camadas fechadas. Supercondutividade nuclear. O modelo coletivo. O modelo unificado. Aplicações do modelo unificado: vibrações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#808D65',
			obligatory: false
		},
		'F_888': {
			code: 'F_888',
			name: 'Física do Estado Sólido',
			ementa: 'O problema geral do sólido e suas aproximações. Movimento de caroços e movimento de elétrons: visão puramente conceitual da aproximação adiabática Born-Oppenheimer. Revisão de estatística quântica: distribuições de Fermi-Dirac, Bose-Einstein e aplicações. Moléculas: ligações e espectros moleculares. Estrutura cristalina e rede recíproca. Condutores, semicondutores, supercondutores. Propriedades magnéticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#808D65',
			obligatory: false
		},
		'MA419': {
			code: 'MA419',
			name: 'Análise Real',
			ementa: 'Medida e integral. Integral de Lebesgue no Rn. Conjuntos mensuráveis. Teorema de convergência monótona. Teorema da convergência dominada. Convergência em medida. Espaços L(p). Teorema de Egorov. Teorema de Radon-Nikodym. Teorema de Representação de Riesz. Teorema de Fubini.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA602'],
			color: '#B946B0',
			obligatory: false
		},
		'MA445': {
			code: 'MA445',
			name: 'Anéis e Corpos',
			ementa: 'Anéis comutativos, ideais e operações com ideais, homomorfismos entre anéis, teoremas do isomorfismo. Polinômios simétricos, fórmulas de Newton e aplicações. Corpos, característica, extensões algébricas, corpos de raízes, normalidade, corpos finitos. Teorema de Galois. Grupo de Galois de uma extensão e de um polinômio. Extensões cíclicas, construções com régua e compasso, solubilidade de equações em radicais e outras aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA446'],
			color: '#46B984',
			obligatory: false
		},
		'MA449': {
			code: 'MA449',
			name: 'Introdução às Equações Diferenciais Parciais',
			ementa: 'Dedução da Equação da Onda e da Equação do Calor. Equação de Laplace e Poisson. Espaço H1 de Sobolev. Séries de Fourier: unicidade, convolução, núcleos, médias de Abel e de Cesàro, O Teorema de Féjer, o núcleo de Poisson, convergência, aplicações. A transformada de Fourier em R: definição, espaços de Schwartz (S), transformada de Fourier em S, fórmula de inversão de Fourier, Fórmula de Plancherel. Aplicações da transformada de Fourier às equações, fórmula do somatório de Poisson, o Princípio da Incerteza. A transformada de Fourier em Rn e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA602'],
			color: '#B946B0',
			obligatory: false
		},
		'MA453': {
			code: 'MA453',
			name: 'Topologia Geral',
			ementa: 'Espaços Métricos. Exemplos. Noções básicas de Topologia. Espaços topológicos. Bases. Funções contínuas, subespaços, espaços, produto e quociente. Convergência de sequências, redes e filtros.Espaços de Hausdorff. Espaços regulares, normais, compactos, localmente compactos. Metrização. Paracompacidade. Espaços conexos e conexos por caminhos. Homotopia e grupo fundamental. Espaços de recobrimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA604'],
			color: '#B9467B',
			obligatory: false
		},
		'MA456': {
			code: 'MA456',
			name: 'Equações Diferenciais Ordinárias',
			ementa: 'Teoria de Existência e Unicidade. Método das aproximações sucessivas para existência e unicidade de soluções. Teorema de Peano de existência de soluções. Soluções maximais, fluxos. Sistemas lineares e suas soluções maximais. Dependência diferenciável de soluções em relação a parâmetros e a condições iniciais. Diferencial do fluxo. Teoremas de fluxo tubular. Campos completos. Colchetes de Lie de campos de vetores. Espaço de fase. Classificação das órbitas. Teorema de Hartman-Grobmann. Estabilidade de Lyapunov, funções de Lyapunov e expoentes de Lyapunov. Teorema de Poincaré-Bendixon. Campos conservativos. Recorrência e teorema de recorrência de Poincaré.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA602'],
			color: '#B946B0',
			obligatory: false
		},
		'MA553': {
			code: 'MA553',
			name: 'Teoria Aritmética dos Números',
			ementa: 'Estruturas algébricas (operações binárias, grupos, anéis e corpos). Axiomas de Peano e construção do anel dos números inteiros e racionais. Outros exemplos de anéis e corpos (polinômios, corpos quadráticos, inteiros de Gauss, Zm). Domínios euclideanos. Representação de números inteiros em bases diversas. Máximo divisor comum, mínimo múltiplo comum e o Algoritmo de Euclides. Elementos irredutíveis e primos e critérios de divisibilidade. Domínios principais, fatoriais e o teorema fundamental da aritmética. Equações diofantinas de grau um. Sistemas residuais, congruências lineares e o teorema chinês do resto. Os teoremas de Euler e Wilson. Congruências de grau dois, símbolos de Legendre e Jacobi e Lei da Reciprocidade Quadrática. Ternas pitagóricas e números que podem ser escritos como soma de dois quadrados. Equações diofantinas notáveis. Ordem multiplicativa e raízes primitivas. Noções de criptografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#46B984',
			obligatory: false
		},
		'MA711': {
			code: 'MA711',
			name: 'Tópicos Especiais de Matemática I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94661',
			obligatory: false
		},
		'MA712': {
			code: 'MA712',
			name: 'Tópicos Especiais de Matemática II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: false
		},
		'MA724': {
			code: 'MA724',
			name: 'Tópicos Distinguidos de Matemática I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A7B946',
			obligatory: false
		},
		'MA725': {
			code: 'MA725',
			name: 'Tópicos Distinguidos de Matemática II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B99646',
			obligatory: false
		},
		'MA903': {
			code: 'MA903',
			name: 'Iniciação Científica I',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B969',
			obligatory: false
		},
		'MA904': {
			code: 'MA904',
			name: 'Iniciação Científica II',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#464FB9',
			obligatory: false
		},
		'MS720': {
			code: 'MS720',
			name: 'Métodos Matemáticos da Mecânica Quântica',
			ementa: 'O conceito de estado em mecânica quântica. Grandezas físicas observáveis e operadores em espaços de Hilbert. Formalismos de Schrodinger e Heisenberg. O oscilador harmônico unidimensional. O átomo de hidrogênio. Spin 1/2 e sistemas de dois níveis. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A746B9',
			obligatory: false
		},
		'MS750': {
			code: 'MS750',
			name: 'Métodos de Matemática Aplicada III',
			ementa: 'Introdução à teoria dos operadores em espaços de Hilbert. Operadores integrais. Equações integrais (Volterra e Fredholm). Introdução à teoria das distribuições. Função delta de Dirac. Derivadas de distribuições. Produto direto e de convolução. Distribuições temperadas e transformadas integrais. Funções de Green: formalismo e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MS650'],
			color: '#46B392',
			obligatory: false
		},
		'MS820': {
			code: 'MS820',
			name: 'Métodos Matemáticos da Relatividade',
			ementa: 'O espaço-tempo Newtoniano: transformações de Galileu. A experiência de Michelson-Morley. O espaço-tempo de Minkowski: transformações de Lorentz. Cinemática e dinâmica na teoria da relatividade especial. Referenciais arbitrários. Cálculo tensorial. Introdução à relatividade geral. A equação de Einstein e a solução de Schwarzschild.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4669B9',
			obligatory: false
		}
	}
};

export default catalogue;
