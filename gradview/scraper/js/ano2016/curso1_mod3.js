const catalogue = {
	totalCredits: 180,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['F_128', 'F_129', 'FM003', 'MA111', 'MA141', 'MS149']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_228', 'F_229', 'MA211', 'MA327', 'MC102']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_328', 'F_329', 'MA311', 'ME210', 'MS211']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_428', 'MA044', 'MA502', 'MA719']
		},
		'sem-5': {
			id: '5',
			subjects: ['F_589', 'MA446', 'MA602', 'MS550']
		},
		'sem-6': {
			id: '6',
			subjects: ['F_320', 'F_689', 'MA604', 'MS520', 'MS650']
		},
		'sem-7': {
			id: '7',
			subjects: ['F_604', 'F_789', 'MA720', 'MS620', 'ELET8']
		},
		'sem-8': {
			id: '8',
			subjects: ['MA852', 'ELET16']
		}
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128']
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129']
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141']
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141']
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211/*MA251']
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149']
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC111']
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328']
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MA211']
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MA211']
		},
		'MA719': {
			code: 'MA719',
			name: 'Álgebra Linear Avançada',
			ementa: 'Revisão: espaços vetoriais, bases e coordenadas, transformações lineares e matrizes, posto, nulidade, produto interno, operadores normais e autoadjuntos, diagonalização. Espaço dual e a transposta, teorema de Cayley-Hamilton, polinômio mínimo de endomorfismo linear, forma de Jordan, forma de Jordan real, forma racional. Transformação multilinear, função alternada, determinante, produto tensorial de espaços vetoriais, álgebra tensorial, álgebra dos tensores simétricos. Álgebra de Grassmann, álgebra de Clifford, estrutura de formas bilineares e quadráticas, transformação ortogonal e simplética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA327']
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200']
		},
		'MA446': {
			code: 'MA446',
			name: 'Grupos e Representações',
			ementa: 'Grupos, subgrupos, classes laterais, teorema de Lagrange, homomorfismo, subgrupos normais, teoremas do isomorfismo, produtos diretos e semi-diretos, grupos de permutações, grupo alternado, ações de grupos em conjuntos, órbitas e contagem, classes de conjugação e equação de classe, classificação dos grupos abelianos finitamente gerados, p-grupos e p-subgrupos, teorema de Cauchy, teoremas de Sylow e aplicações, grupos solúveis, representações de grupos finitos, subrepresentações e teoremas do isomorfismo, lema de Schur, Teorema de Maschke, produto tensorial de representações, caracteres, tabelas de caracteres, relações de ortogonalidade, restrição e indução de representações e seus caracteres, aplicações da teoria de representações a solubilidade de grupos finitos e composição de formas quadráticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA425']
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502']
		},
		'MS550': {
			code: 'MS550',
			name: 'Métodos de Matemática Aplicada I',
			ementa: 'Análise Vetorial (revisão). Revisão de equações diferenciais: equações da Física Matemática; sistemas de coordenadas. Existência e unicidade da solução das equações diferenciais ordinárias. Pontos singulares regulares: método de Frobenius. Funções especiais (Bessel, Legendre). Equações Fuchsianas; Função Hipergeométrica. Sistemas de Sturm-Liouville. Polinômios ortogonais. Expansão em autofunções: séries de Fourier, séries generalizadas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA311', 'MA327']
		},
		'F_320': {
			code: 'F_320',
			name: 'Termodinâmica',
			ementa: 'Sistemas termodinâmicos, reversibilidade, termometria. Variáveis e equações de estado, diagramas PVT. Trabalho e primeira lei da termodinâmica. Equivalente mecânico de calor. Energia interna, entalpia, ciclo de Carnot. Mudanças de fase. Segunda lei da termodinâmica e entropia. Funções termodinâmicas. Aplicações práticas de termodinâmica. Teoria cinética dos gases. Distribuição de velocidades moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA251']
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589', 'MA327']
		},
		'MA604': {
			code: 'MA604',
			name: 'Topologia dos Espaços Métricos',
			ementa: 'Métrica. Funções contínuas. Homeomorfismos. Conjuntos abertos e fechados. Conjuntos compactos. Conjuntos convexos e conexos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502']
		},
		'MS520': {
			code: 'MS520',
			name: 'Estrutura Matemática da Mecânica',
			ementa: 'Princípios de Mecânica, leis de Newton. Problemas de dois corpos. Alguns problemas matemáticos associados ao problema de três corpos. Formulação Lagrangiana da mecânica. Simetrias. Variedades simpléticas. Formulação Hamiltoniana da mecânica. Transformações canônicas. Invariantes integrais de Poincaré. Formulação de Hamilton-Jacobi.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MS550']
		},
		'MS650': {
			code: 'MS650',
			name: 'Métodos de Matemática Aplicada II',
			ementa: 'Funções de variáveis complexas (revisão). Transformadas integrais (Fourier e Laplace). Transformadas inversas. Representação integral de funções. Equações diferenciais parciais. Classificação; problemas bem-postos. Equações da onda, do calor e de Laplace. Método de separação de variáveis. Introdução às equações integrais. Cálculo de variações.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MS550']
		},
		'F_604': {
			code: 'F_604',
			name: 'Física Estatística',
			ementa: 'Introdução às propriedades de sistemas macroscópicos. Conceitos básicos de probabilidade. Interação térmica. Fator de Boltzmann. Relação entre conceitos atômicos e medidas macroscópicas "Ensemble" microcanônico. Distribuição canônica na aproximação clássica. Aplicações. Teorema da equipartição da energia. Interação termodinâmica. Termodinâmica estatística. Interação entre sistemas com troca de partículas: o "Ensemble" grande canônico. Estatística quântica de gases ideais: estatísticas de fótons, estatísticas de Fermi-Dirac e de Bose-Einstein. Teoria cinética e processos de transporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_320', 'ME210']
		},
		'F_789': {
			code: 'F_789',
			name: 'Mecânica Quântica II',
			ementa: 'Forças centrais e o átomo de Hidrogênio. Teoria de Espalhamento de uma partícula por um potencial. Spinores na teoria quântica não-relativística. Adição de momentos angulares. Teoria de perturbação independente do tempo. Estruturas fina e hiperfina do átomo de hidrogênio. Teoria de perturbação dependente do tempo. Partículas idênticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689']
		},
		'MA720': {
			code: 'MA720',
			name: 'Análise no R(n)',
			ementa: 'Cálculo de várias variáveis: Aplicações diferenciáveis, Diferencial e Matriz jacobiana, Desigualdade do valor médio, Regra da Cadeia, Derivadas de ordem superior, Fórmula de Taylor, Teorema da função inversa e implícita, Forma local das imersões e submersões e o teorema do posto. Subvariedades de Rn Valores e pontos regulares, espaço tangente, parametrizações locais. Integração, integrais de linha e de superfícies, Formas diferenciais e integração sobre variedades, Teorema de Stokes (Green e Gauss).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211', 'MA502', 'MA327']
		},
		'MS620': {
			code: 'MS620',
			name: 'Estrutura Matemática do Eletromagnetismo',
			ementa: 'Lei de Coulomb. Equações de Laplace e Poisson. Problema de Neumann e problema de Dirichlet. Magnetostática. Equações de Maxwell. Ondas eletromagnéticas, problema de Cauchy. Guias de ondas e cavidades ressonantes. Formulação tensorial das equações de Maxwell. Tensor de Maxwell e tensor de tensões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_428']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'MA852': {
			code: 'MA852',
			name: 'Geometria Diferencial',
			ementa: 'Curvas no plano e espaço: Curvatura e torção - Teorema Fundamental das Curvas Planas. Superfícies no Espaço - Primeira e segunda forma fundamental, área. Aplicação normal de Gauss. Curvaturas gaussiana e média, Linhas de Curvatura. Geometria intrínseca, derivada covariante, Teorema Egregium, Curvatura Geodésica, geodésicas, a aplicação exponencial. O Teorema de Gauss-Bonet. Tópicos adicionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA720']
		},
		'ELET16': {
			code: 'ELET16',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:16, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: ''
		}
	}
};

export default catalogue;