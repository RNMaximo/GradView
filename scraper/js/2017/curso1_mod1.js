const catalogue = {
	totalCredits: 164,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['F_129', 'F_128', 'MA111', 'MA141', 'FM003', 'MS149']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_229', 'F_228', 'MA211', 'MA327', 'MC102']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_329', 'F_328', 'MA311', 'MS211', 'ME210']
		},
		'sem-4': {
			id: '4',
			subjects: ['MA502', 'MA044', 'MA719', 'MA553']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'MA446', 'MA602']
		},
		'sem-6': {
			id: '6',
			subjects: ['MA604', 'MA445', 'MA419']
		},
		'sem-7': {
			id: '7',
			subjects: ['MA453', 'MA720', 'MA456']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'MA852', 'MA449']
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
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99346',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#93B946',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4693B9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#9346B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B993',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#B99346',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#A6A646',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#6D80A6',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#46B993',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94693',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#868686',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#938080',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#6D80A6',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149'],
			color: '#6D8080',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC102', 'MA141', 'MA111'],
			color: '#866CA0',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MA211'],
			color: '#6D80A6',
			obligatory: true
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#4646B9',
			obligatory: true
		},
		'MA553': {
			code: 'MA553',
			name: 'Teoria Aritmética dos Números',
			ementa: 'Estruturas algébricas (operações binárias, grupos, anéis e corpos). Axiomas de Peano e construção do anel dos números inteiros e racionais. Outros exemplos de anéis e corpos (polinômios, corpos quadráticos, inteiros de Gauss, Zm). Domínios euclideanos. Representação de números inteiros em bases diversas. Máximo divisor comum, mínimo múltiplo comum e o Algoritmo de Euclides. Elementos irredutíveis e primos e critérios de divisibilidade. Domínios principais, fatoriais e o teorema fundamental da aritmética. Equações diofantinas de grau um. Sistemas residuais, congruências lineares e o teorema chinês do resto. Os teoremas de Euler e Wilson. Congruências de grau dois, símbolos de Legendre e Jacobi e Lei da Reciprocidade Quadrática. Ternas pitagóricas e números que podem ser escritos como soma de dois quadrados. Equações diofantinas notáveis. Ordem multiplicativa e raízes primitivas. Noções de criptografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#46B993',
			obligatory: true
		},
		'MA719': {
			code: 'MA719',
			name: 'Álgebra Linear Avançada',
			ementa: 'Revisão: espaços vetoriais, bases e coordenadas, transformações lineares e matrizes, posto, nulidade, produto interno, operadores normais e autoadjuntos, diagonalização. Espaço dual e a transposta, teorema de Cayley-Hamilton, polinômio mínimo de endomorfismo linear, forma de Jordan, forma de Jordan real, forma racional. Transformação multilinear, função alternada, determinante, produto tensorial de espaços vetoriais, álgebra tensorial, álgebra dos tensores simétricos. Álgebra de Grassmann, álgebra de Clifford, estrutura de formas bilineares e quadráticas, transformação ortogonal e simplética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA327'],
			color: '#46B993',
			obligatory: true
		},
		'MA446': {
			code: 'MA446',
			name: 'Grupos e Representações',
			ementa: 'Grupos, subgrupos, classes laterais, teorema de Lagrange, homomorfismo, subgrupos normais, teoremas do isomorfismo, produtos diretos e semi-diretos, grupos de permutações, grupo alternado, ações de grupos em conjuntos, órbitas e contagem, classes de conjugação e equação de classe, classificação dos grupos abelianos finitamente gerados, p-grupos e p-subgrupos, teorema de Cauchy, teoremas de Sylow e aplicações, grupos solúveis, representações de grupos finitos, subrepresentações e teoremas do isomorfismo, lema de Schur, Teorema de Maschke, produto tensorial de representações, caracteres, tabelas de caracteres, relações de ortogonalidade, restrição e indução de representações e seus caracteres, aplicações da teoria de representações a solubilidade de grupos finitos e composição de formas quadráticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA719'],
			color: '#46B993',
			obligatory: true
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MA419': {
			code: 'MA419',
			name: 'Análise Real',
			ementa: 'Medida e integral. Integral de Lebesgue no Rn. Conjuntos mensuráveis. Teorema de convergência monótona. Teorema da convergência dominada. Convergência em medida. Espaços L(p). Teorema de Egorov. Teorema de Radon-Nikodym. Teorema de Representação de Riesz. Teorema de Fubini.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA602'],
			color: '#B94646',
			obligatory: true
		},
		'MA445': {
			code: 'MA445',
			name: 'Anéis e Corpos',
			ementa: 'Anéis comutativos, ideais e operações com ideais, homomorfismos entre anéis, teoremas do isomorfismo. Polinômios simétricos, fórmulas de Newton e aplicações. Corpos, característica, extensões algébricas, corpos de raízes, normalidade, corpos finitos. Teorema de Galois. Grupo de Galois de uma extensão e de um polinômio. Extensões cíclicas, construções com régua e compasso, solubilidade de equações em radicais e outras aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA446'],
			color: '#46B993',
			obligatory: true
		},
		'MA604': {
			code: 'MA604',
			name: 'Topologia dos Espaços Métricos',
			ementa: 'Métrica. Funções contínuas. Homeomorfismos. Conjuntos abertos e fechados. Conjuntos compactos. Conjuntos convexos e conexos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502'],
			color: '#4646B9',
			obligatory: true
		},
		'MA453': {
			code: 'MA453',
			name: 'Topologia Geral',
			ementa: 'Espaços Métricos. Exemplos. Noções básicas de Topologia. Espaços topológicos. Bases. Funções contínuas, subespaços, espaços, produto e quociente. Convergência de sequências, redes e filtros.Espaços de Hausdorff. Espaços regulares, normais, compactos, localmente compactos. Metrização. Paracompacidade. Espaços conexos e conexos por caminhos. Homotopia e grupo fundamental. Espaços de recobrimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA604'],
			color: '#4646B9',
			obligatory: true
		},
		'MA456': {
			code: 'MA456',
			name: 'Equações Diferenciais Ordinárias',
			ementa: 'Teoria de Existência e Unicidade. Método das aproximações sucessivas para existência e unicidade de soluções. Teorema de Peano de existência de soluções. Soluções maximais, fluxos. Sistemas lineares e suas soluções maximais. Dependência diferenciável de soluções em relação a parâmetros e a condições iniciais. Diferencial do fluxo. Teoremas de fluxo tubular. Campos completos. Colchetes de Lie de campos de vetores. Espaço de fase. Classificação das órbitas. Teorema de Hartman-Grobmann. Estabilidade de Lyapunov, funções de Lyapunov e expoentes de Lyapunov. Teorema de Poincaré-Bendixon. Campos conservativos. Recorrência e teorema de recorrência de Poincaré.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA602'],
			color: '#B94646',
			obligatory: true
		},
		'MA720': {
			code: 'MA720',
			name: 'Análise no R(n)',
			ementa: 'Cálculo de várias variáveis: Aplicações diferenciáveis, Diferencial e Matriz jacobiana, Desigualdade do valor médio, Regra da Cadeia, Derivadas de ordem superior, Fórmula de Taylor, Teorema da função inversa e implícita, Forma local das imersões e submersões e o teorema do posto. Subvariedades de Rn Valores e pontos regulares, espaço tangente, parametrizações locais. Integração, integrais de linha e de superfícies, Formas diferenciais e integração sobre variedades, Teorema de Stokes (Green e Gauss).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211', 'MA502', 'MA327'],
			color: '#5380A6',
			obligatory: true
		},
		'MA449': {
			code: 'MA449',
			name: 'Introdução às Equações Diferenciais Parciais',
			ementa: 'Dedução da Equação da Onda e da Equação do Calor. Equação de Laplace e Poisson. Espaço H1 de Sobolev. Séries de Fourier: unicidade, convolução, núcleos, médias de Abel e de Cesàro, O Teorema de Féjer, o núcleo de Poisson, convergência, aplicações. A transformada de Fourier em R: definição, espaços de Schwartz (S), transformada de Fourier em S, fórmula de inversão de Fourier, Fórmula de Plancherel. Aplicações da transformada de Fourier às equações, fórmula do somatório de Poisson, o Princípio da Incerteza. A transformada de Fourier em Rn e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA602'],
			color: '#B94646',
			obligatory: true
		},
		'MA852': {
			code: 'MA852',
			name: 'Geometria Diferencial',
			ementa: 'Curvas no plano e espaço: Curvatura e torção - Teorema Fundamental das Curvas Planas. Superfícies no Espaço - Primeira e segunda forma fundamental, área. Aplicação normal de Gauss. Curvaturas gaussiana e média, Linhas de Curvatura. Geometria intrínseca, derivada covariante, Teorema Egregium, Curvatura Geodésica, geodésicas, a aplicação exponencial. O Teorema de Gauss-Bonet. Tópicos adicionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA720'],
			color: '#5380A6',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		}
	}
};

export default catalogue;
