const catalogue = {
	totalCredits: 162,
	maxCreditsSem: 28,
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
			subjects: ['F_315', 'MA044', 'ME310', 'MS328', 'MS428']
		},
		'sem-5': {
			id: '5',
			subjects: ['MA502', 'MC202', 'MS512', 'MS550']
		},
		'sem-6': {
			id: '6',
			subjects: ['MS629', 'MS650', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 36,
			hasRestrictions: true,
			subjects: ['F_415', 'F_428', 'F_502', 'F_589', 'F_689', 'MA602', 'MA604', 'MA719', 'MA720', 'MC---', 'ME319', 'ME419', 'ME430', 'ME501', 'ME524', 'MS317', 'MS329', 'MS416', 'MS431', 'MS480', 'MS515', 'MS519', 'MS520', 'MS529', 'MS580', 'MS602', 'MS612', 'MS614', 'MS620', 'MS680', 'MS712', 'MS714', 'MS715', 'MS720', 'MS728', 'MS750', 'MS777', 'MS780', 'MS820', 'MS828', 'MS850', 'MS877', 'MS901', 'MS911', 'MS915', 'MS950', 'MS960', 'MS970', 'MS980', 'MS991', 'MS992', 'MS993'],
		},
		'elet-2': {
			credits: 12,
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
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C8',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#6240D9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40A6D9',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D984',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#D94040',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#D94084',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#5173D9',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#40A6D9',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#C8D940',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#7E62A6',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#9E40D1',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#5173D9',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149'],
			color: '#518DAF',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#7995A6',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#955A8D',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D962',
			obligatory: true
		},
		'ME310': {
			code: 'ME310',
			name: 'Probabilidade II',
			ementa: 'Vetores Aleatórios, distribuições conjuntas, marginais e condicionais. Independência. Modelos gama, beta, Cauchy, multinomial, multinormal. Transformações. Distribuições t de student, qui-quadrado e F de Snedecor. Conjuntos e condicionais. Desigualdades de Markov, Tchebychev, Jensen e Cauchy-Schwartz. Elementos básicos e aplicações da função característica. Simulações. Teoremas limites básicos: modos de convergência, sequência de ensaios independentes, lei dos grandes números, Teorema Central do Limite.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'ME210'],
			color: '#5180C4',
			obligatory: true
		},
		'MS328': {
			code: 'MS328',
			name: 'Matemática Discreta',
			ementa: 'Indução Matemática. Princípio multiplicativo. Princípio aditivo. Permutação, Arranjo, Combinação. Princípio de inclusão e exclusão. Funções geradoras. Partição de um inteiro. Relações de recorrências. O princípio da casa dos pombos. Noções de teoria dos grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#62D940',
			obligatory: true
		},
		'MS428': {
			code: 'MS428',
			name: 'Programação Linear',
			ementa: 'Formulação de problemas de programação linear. Resolução Gráfica. Método Simplex. Teoria de dualidade. Análise de sensibilidade e análise paramétrica. Algoritmos de pontos interiores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327'],
			color: '#498DD9',
			obligatory: true
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D98440',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#C8D940',
			obligatory: true
		},
		'MS512': {
			code: 'MS512',
			name: 'Análise Numérica I',
			ementa: 'Fatoração de Choleski. Fatorações ortogonais. Quadrados mínimos lineares. Decomposição em valores singulares. Métodos iterativos para resolução de sistemas lineares. Introdução à resolução de sistemas não-lineares. Cálculo de autovalores e autovetores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MS211'],
			color: '#5D9EC0',
			obligatory: true
		},
		'MS550': {
			code: 'MS550',
			name: 'Métodos de Matemática Aplicada I',
			ementa: 'Análise Vetorial (revisão). Revisão de equações diferenciais: equações da Física Matemática; sistemas de coordenadas. Existência e unicidade da solução das equações diferenciais ordinárias. Pontos singulares regulares: método de Frobenius. Funções especiais (Bessel, Legendre). Equações Fuchsianas; Função Hipergeométrica. Sistemas de Sturm-Liouville. Polinômios ortogonais. Expansão em autofunções: séries de Fourier, séries generalizadas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA311', 'MA327'],
			color: '#498DD9',
			obligatory: true
		},
		'MS629': {
			code: 'MS629',
			name: 'Programação Não-Linear',
			ementa: 'Minimizadores locais e globais. Condições de otimalidade para minimização de funções com e sem restrições. Métodos para minimização sem restrições. Métodos para minimização com restrições lineares e não lineares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327'],
			color: '#498DD9',
			obligatory: true
		},
		'MS650': {
			code: 'MS650',
			name: 'Métodos de Matemática Aplicada II',
			ementa: 'Funções de variáveis complexas (revisão). Transformadas integrais (Fourier e Laplace). Transformadas inversas. Representação integral de funções. Equações diferenciais parciais. Classificação; problemas bem-postos. Equações da onda, do calor e de Laplace. Método de separação de variáveis. Introdução às equações integrais. Cálculo de variações.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MS550'],
			color: '#498DD9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#A6D940',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#4084D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#84D940',
			obligatory: true
		},
		'F_415': {
			code: 'F_415',
			name: 'Mecânica Geral II',
			ementa: 'Forças centrais. Sistemas de partículas. Referenciais não inerciais. Dinâmica de corpos rígidos. Oscilações acopladas. Meios contínuos e ondas. Teoria especial da Relatividade.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos da Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94084',
			obligatory: false
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#7E62A6',
			obligatory: false
		},
		'F_502': {
			code: 'F_502',
			name: 'Eletromagnetismo I',
			ementa: 'Campos eletrostáticos no vácuo e nos materiais dielétricos. Resolução das equações de Poisson e Laplace. Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9C840',
			obligatory: false
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4062D9',
			obligatory: false
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#4062D9',
			obligatory: false
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940A6',
			obligatory: false
		},
		'MA604': {
			code: 'MA604',
			name: 'Topologia dos Espaços Métricos',
			ementa: 'Métrica. Funções contínuas. Homeomorfismos. Conjuntos abertos e fechados. Conjuntos compactos. Conjuntos convexos e conexos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502'],
			color: '#D98440',
			obligatory: false
		},
		'MA719': {
			code: 'MA719',
			name: 'Álgebra Linear Avançada',
			ementa: 'Matrizes e determinantes. Forma de Jordan. Formas canônicas. Funções multilineares. Produto tensorial e extensão de escalares. Álgebra tensorial, simétrica, de Grassmann e de Clifford. Grupos clássicos: ortogonal, unitário e simplético.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA327'],
			color: '#40A6D9',
			obligatory: false
		},
		'MA720': {
			code: 'MA720',
			name: 'Análise no R(n)',
			ementa: 'Cálculo de várias variáveis. Aplicações diferenciáveis. Diferencial e matriz Jacobiana. Desigualdade do valor médio. Regra da cadeia. Derivadas de ordem superior. Fórmula de Taylor. Teorema da função inversa e implícita. Forma local de imersões e submersões e o teorema do posto. Subvariedades de Rn. Valores e pontos regulares. Espaço tangente e parametrizações locais. Integração, integrais de linha e integrais de superfícies. Formas diferenciais e integração sobre variedades. Teorema de Stokes (Green e Gauss).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211'],
			color: '#5173D9',
			obligatory: false
		},
		'MC---': {
			code: 'MC---',
			name: 'Qualquer Disciplina com codigo MC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9C8',
			obligatory: false
		},
		'ME319': {
			code: 'ME319',
			name: 'Noções de Inferência',
			ementa: 'Distribuição dos momentos amostrais. Noções de estimação pontual e por intervalo. Métodos de estimação: momentos, máxima verossimilhança, mínimos quadrados. Intervalos de confiança para proporções. Intervalos de confiança para média e variância no caso de normalidade. Noções de teste de hipóteses. Erros de tipo I e II, nível de significância, tamanho e poder do teste. Testes sobre médias e variâncias de distribuições normais. Testes sobre proporções. Tamanho de amostra. Testes não paramétricos baseados em postos para uma e duas amostras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'MA211', 'ME210'],
			color: '#5180C4',
			obligatory: false
		},
		'ME419': {
			code: 'ME419',
			name: 'Inferência',
			ementa: 'Distribuição Normal bivariada e distribuição de Wishart. Distribuição conjunta do vetor de médias e matriz de convariância amostrais. Estimação pontual: momentos, máxima verossimilhança, mínimos quadrados. Teorema de Gauss-Markov. Estimadores não viciados uniformemente de variância mínima. A família exponencial. Suficiência e completitude. Intervalos de Confiança e regiões de confiança. Testes de hipóteses. Erros tipo I e II, região crítica, nível de significância p-valor, tamanho e poder do teste. Testes UMP. Lema de Neyman-Pearson. Noções de inferência bayesiana e de teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310', 'ME319'],
			color: '#5180C4',
			obligatory: false
		},
		'ME430': {
			code: 'ME430',
			name: 'Técnicas de Amostragem',
			ementa: 'Amostragem aleatória simples para se estimar médias, totais, proporções e razões populacionais; amostragem sistemática. Amostragem aleatória estratificada para se estimar médias, totais, proporções e razões populacionais. Estimadores de razão e de regressão. Amostragem por conglomerado em um e dois estágios. Planejamento de amostras.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME319'],
			color: '#5180C4',
			obligatory: false
		},
		'ME501': {
			code: 'ME501',
			name: 'Processos Estocásticos',
			ementa: 'Cadeias de Markov a tempo discreto. Classificação de estados, noções de recorrência e transiência. Medida estacionária. Reversibilidade. Processo de Poisson. Cadeias de Markov a tempo contínuo, processos de nascimento e morte. Aplicações: noções de teoria de renovação e teoria de filas, simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310'],
			color: '#5180C4',
			obligatory: false
		},
		'ME524': {
			code: 'ME524',
			name: 'Computação Aplicada à Estatística',
			ementa: 'Representação de números em base binária. Erros de truncamento e arredondamento. Organização e manipulação de banco de dados em pelo menos um pacote estatístico. Geração de números pseudo-aleatórios uniformes e não uniformes. Métodos de inversão, aceitação-rejeição e por transformações de variáveis aleatórios. Métodos de Monte Carlo. Método de resolução de sistemas lineares (decomposições QR, Householder, valores singulares, equivalência Gram-Schmidt-QR, número condição). Mínimos quadrados: aplicação à regressão linear. Método de Newton-Raphson. Bootstrap, validação cruzada, jacknife. Aspectos estatísticos em redes neurais. Métodos de simulação usando cadeias de Markov.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['MC102', 'ME310', 'ME319', 'MS211'],
			color: '#799C9C',
			obligatory: false
		},
		'MS317': {
			code: 'MS317',
			name: 'Matemática Financeira',
			ementa: 'Noção de taxa de juros. Fluxos de caixa. A calculadora financeira. Operações financeiras. Mercado financeiro. Sistemas de amortização e planilhas financeiras. Comparação entre alternativas de investimento. Extensões.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#6240D9',
			obligatory: false
		},
		'MS329': {
			code: 'MS329',
			name: 'Combinatória Enumerativa',
			ementa: 'Teoremas básicos de combinatória enumerativa. Grupos, grupos de permutação, ação de grupos, teorema de Burnside, teorema de Polya. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS328'],
			color: '#62D940',
			obligatory: false
		},
		'MS416': {
			code: 'MS416',
			name: 'Modelos Matemáticos Aplicados à Economia',
			ementa: 'Representação matemática de elementos de teoria neoclássica de produção, consumo e mercado. Introdução ao Equilíbrio Geral Computável.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327'],
			color: '#498DD9',
			obligatory: false
		},
		'MS431': {
			code: 'MS431',
			name: 'Métodos Geométricos',
			ementa: 'Espaço Euclidiano. Vetores tangentes. Derivadas direcionais. Curvas em R3. Formas diferenciáveis. Fórmulas de Frenet. Derivadas covariantes. Equações estruturais. Isometrias em R3. Geometria Euclidiana. Superfícies em R3. Funções diferenciáveis. Formas diferenciáveis sobre uma superfície. Integração de formas. Variedades. Curvatura normal. Curvatura Gaussiana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA044', 'MA327'],
			color: '#40C09E',
			obligatory: false
		},
		'MS480': {
			code: 'MS480',
			name: 'Modelagem Matemática',
			ementa: 'Modelos e modelagem matemática. A modelagem matemática relacionada às ciências humanas, biológicas e exatas. A modelagem matemática em pesquisa científica. Modelos discretos e contínuos. Técnicas de modelagem. Evolução de modelos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327'],
			color: '#498DD9',
			obligatory: false
		},
		'MS515': {
			code: 'MS515',
			name: 'Métodos Probabilísticos em Pesquisa Operacional',
			ementa: 'Programação dinâmica determinística e estocástica. Modelos determinísticos e probabilísticos de estoques.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME210'],
			color: '#518DAF',
			obligatory: false
		},
		'MS519': {
			code: 'MS519',
			name: 'Análise Dinâmica de Sistemas I',
			ementa: 'Existência e unicidade de sistemas de EDO. Espaço de fase e fluxos. Estabilidade, função de Lyapunov, estabilidade forte, estabilidade orbital. Sistemas autônomos, formas normais. Teorema de Poincaré. Estabilidade estrutural. Dinâmica bidimensional, sistemas presa-predador e similares. Teorema de Poincaré-Bendixson. Órbitas periódicas, teoria de Floquet. Mapas, mapa do retorno. Teoria de perturbações. Teoria de bifurcações, pontos estacionários, bifurcação de Hopf. Caos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MA327'],
			color: '#498DD9',
			obligatory: false
		},
		'MS520': {
			code: 'MS520',
			name: 'Estrutura Matemática da Mecânica',
			ementa: 'Princípios de Mecânica, leis de Newton. Problemas de dois corpos. Alguns problemas matemáticos associados ao problema de três corpos. Formulação Lagrangiana da mecânica. Simetrias. Variedades simpléticas. Formulação Hamiltoniana da mecânica. Transformações canônicas. Invariantes integrais de Poincaré. Formulação de Hamilton-Jacobi.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MS550'],
			color: '#91678D',
			obligatory: false
		},
		'MS529': {
			code: 'MS529',
			name: 'Fluxos em Redes',
			ementa: 'Noções de teoria dos grafos. Problemas de transporte, designação, caminho mínimo, fluxo máximo, fluxo com custo mínimo e árvore geradora mínima.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS428'],
			color: '#498DD9',
			obligatory: false
		},
		'MS580': {
			code: 'MS580',
			name: 'Introdução à Teoria Fuzzy',
			ementa: 'O conceito de subjetividade e os conjuntos fuzzy. Álgebra de conjuntos fuzzy. Números fuzzy. Relações binárias fuzzy. Composição. Equações relacionais. Medidas fuzzy. Integrais fuzzy. Esperança fuzzy. Sistemas variacionais fuzzy. Aplicações em biomatemática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MS211', 'ME210'],
			color: '#5E87BA',
			obligatory: false
		},
		'MS602': {
			code: 'MS602',
			name: 'Mecânica do Meio Contínuo I',
			ementa: 'Modelagem em equações diferenciais parciais usando princípios físicos de conservação e equações constituintes. Classificação das equações diferenciais parciais lineares de segunda ordem: equações elípticas, parabólicas e hiperbólicas. Conservação do calor e modelos de difusão. Introdução de transporte: as equações convecção-difusão. Trânsito em rodovias: leis de conservação não lineares. Potencial gravitacional e elétrico: equação de Poisson. Movimento longitudinal na barra: equação da onda.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS650'],
			color: '#498DD9',
			obligatory: false
		},
		'MS612': {
			code: 'MS612',
			name: 'Análise Numérica II',
			ementa: 'Bases para espaços de funções: funções Lagrange por partes, Hermite por partes, splines cúbicas e polinômios ortogonais. Uso destas bases em interpolação e quadrados mínimos. Uso destas bases em problemas de valores de contorno em equações diferenciais ordinárias: introdução ao método elementos finitos e colocação. Problemas de valor inicial em equações diferenciais ordinárias: Runge-Kutta, passo variável, e passos múltiplos (Adams).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502', 'MS211'],
			color: '#A98D73',
			obligatory: false
		},
		'MS614': {
			code: 'MS614',
			name: 'Simulação de Sistemas',
			ementa: 'Noções de estruturas de dados, cadeias de Markov, teoria de filas e teoria de estoques. Geração de variáveis aleatórias: números aleatórios, métodos da transformação inversa, da convolução e da rejeição, métodos para distribuições clássicas. Simulação de sistemas discretos com lista de eventos futuros. Simulação de sistemas contínuos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC102', 'ME210'],
			color: '#8DB378',
			obligatory: false
		},
		'MS620': {
			code: 'MS620',
			name: 'Estrutura Matemática do Eletromagnetismo',
			ementa: 'Lei de Coulomb. Equações de Laplace e Poisson. Problema de Neumann e problema de Dirichlet. Magnetostática. Equações de Maxwell. Ondas eletromagnéticas, problema de Cauchy. Guias de ondas e cavidades ressonantes. Formulação tensorial das equações de Maxwell. Tensor de Maxwell e tensor de tensões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_428'],
			color: '#7E62A6',
			obligatory: false
		},
		'MS680': {
			code: 'MS680',
			name: 'Modelos Matemáticos para Biologia',
			ementa: 'Formulação e estudo de modelos matemáticos para dinâmica populacional, processos bioquímicos e fisiologia, por meio de equações recursivas e equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#5173D9',
			obligatory: false
		},
		'MS712': {
			code: 'MS712',
			name: 'Análise Numérica III',
			ementa: 'Método de diferenças finitas para problemas de valores de contorno em equações diferenciais ordinárias: aspectos teóricos e computacionais. Método de diferenças finitas em equações diferenciais parciais: métodos explícito, implícito e de Crank-Nicolson para a equação do calor 1D e 2D. Questões de estabilidade e convergência. Equação de Poisson no plano. Aspectos computacionais dos métodos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS512', 'MS612', 'MS650'],
			color: '#7093AF',
			obligatory: false
		},
		'MS714': {
			code: 'MS714',
			name: 'Laboratório de Simulação de Sistemas',
			ementa: 'Desenvolvimento de projetos computacionais, em temas relacionados com teoria de filas, teoria de estoques, planejamento de produção, etc., utilizando pacotes de simulação de sistemas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MS614'],
			color: '#8DB378',
			obligatory: false
		},
		'MS715': {
			code: 'MS715',
			name: 'Planejamento e Controle de Produção',
			ementa: 'A função de produção e seus parâmetros básicos. Custos. Critérios de decisão. Medidas de trabalho. Sistemas de produção. Estoques. Planos e programas integrados. Programação e controle de operações. Será dada ênfase aos modelos matemáticos e aos problemas de planejamento e controle de produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS428'],
			color: '#498DD9',
			obligatory: false
		},
		'MS720': {
			code: 'MS720',
			name: 'Métodos Matemáticos da Mecânica Quântica',
			ementa: 'O conceito de estado em mecânica quântica. Grandezas físicas observáveis e operadores em espaços de Hilbert. Formalismos de Schrodinger e Heisenberg. O oscilador harmônico unidimensional. O átomo de hidrogênio. Spin 1/2 e sistemas de dois níveis. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_415', 'F_589'],
			color: '#8D51AF',
			obligatory: false
		},
		'MS728': {
			code: 'MS728',
			name: 'Programação Combinatória',
			ementa: 'Formulação e problemas combinatórios: mochila, emparelhamento, carteiro chinês, carteiro viajante, representação, cobertura e particionamento de conjuntos, etc. Métodos de otimização: \"branch and bound\", \"branch and cut\", planos de corte e método de Benders.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS428'],
			color: '#498DD9',
			obligatory: false
		},
		'MS750': {
			code: 'MS750',
			name: 'Métodos de Matemática Aplicada III',
			ementa: 'Introdução à teoria dos operadores em espaços de Hilbert. Operadores integrais. Equações integrais (Volterra e Fredholm). Introdução à teoria das distribuições. Função delta de Dirac. Derivadas de distribuições. Produto direto e de convolução. Distribuições temperadas e transformadas integrais. Funções de Green: formalismo e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MS650'],
			color: '#498DD9',
			obligatory: false
		},
		'MS777': {
			code: 'MS777',
			name: 'Projeto Supervisionado',
			ementa: 'Desenvolvimento de um projeto de pesquisa, sob orientação de um professor, resultando em uma monografia que será divulgada publicamente.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40C8D9',
			obligatory: false
		},
		'MS780': {
			code: 'MS780',
			name: 'Modelos Matemáticos para Biologia II',
			ementa: 'Processos difusivos em dinâmica de populações, fisiologia e físico-química. Modelos discretos, probabilísticos e equações diferenciais parciais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#5173D9',
			obligatory: false
		},
		'MS820': {
			code: 'MS820',
			name: 'Métodos Matemáticos da Relatividade',
			ementa: 'O espaço-tempo Newtoniano: transformações de Galileu. A experiência de Michelson-Morley. O espaço-tempo de Minkowski: transformações de Lorentz. Cinemática e dinâmica na teoria da relatividade especial. Referenciais arbitrários. Cálculo tensorial. Introdução à relatividade geral. A equação de Einstein e a solução de Schwarzschild.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS650'],
			color: '#498DD9',
			obligatory: false
		},
		'MS828': {
			code: 'MS828',
			name: 'Laboratório de Programação Matemática',
			ementa: 'Desenvolvimento de projetos computacionais de programação matemática, trabalhando com modelos de programação linear, de prgramação inteira, de programação não linear e de fluxos em redes, e utilizando pacotes de modelagem algébrica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MS428', 'MS529', 'MS629'],
			color: '#498DD9',
			obligatory: false
		},
		'MS850': {
			code: 'MS850',
			name: 'Métodos de Matemática Aplicada IV',
			ementa: 'Introdução à teoria de grupos e representação de grupos. Grupos de Lie e álgebras de Lie. Aplicações de grupos de Lie em equações diferenciais: grupos de simetria. Simetrias e redução de ordem. Formalismo variacional: equações de Euler-Lagrange. Simetrias variacionais. Leis de conservação e teorema de Noether.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MS750'],
			color: '#498DD9',
			obligatory: false
		},
		'MS877': {
			code: 'MS877',
			name: 'Projeto Supervisionado II',
			ementa: 'Desenvolvimento de um projeto de pesquisa, sob a orientação de um professor, resultando em uma monografia que será divulgada publicamente.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D9A6',
			obligatory: false
		},
		'MS901': {
			code: 'MS901',
			name: 'Tópicos Especiais de Matemática Aplicada',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D940',
			obligatory: false
		},
		'MS911': {
			code: 'MS911',
			name: 'Tópicos Especiais de Análise Numérica',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#8440D9',
			obligatory: false
		},
		'MS915': {
			code: 'MS915',
			name: 'Tópicos Especiais de Pesquisa Operacional',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A640D9',
			obligatory: false
		},
		'MS950': {
			code: 'MS950',
			name: 'Tópicos Especiais em Física Matemática',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94062',
			obligatory: false
		},
		'MS960': {
			code: 'MS960',
			name: 'Tópicos Especiais em Processamento de Imagens',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#C840D9',
			obligatory: false
		},
		'MS970': {
			code: 'MS970',
			name: 'Tópicos Especiais em Teoria dos Números',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D96240',
			obligatory: false
		},
		'MS980': {
			code: 'MS980',
			name: 'Tópicos Especiais em Biomatemática',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9A640',
			obligatory: false
		},
		'MS991': {
			code: 'MS991',
			name: 'Análise Aplicada',
			ementa: 'Espaços normados. Transformações lineares contínuas. Compacidade. Espaços de Banach. Espaços de Hilbert. Teorema do ponto fixo de Banach. Aplicacões. Cáculo em espaços de Banach. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MA502'],
			color: '#8D958D',
			obligatory: false
		},
		'MS992': {
			code: 'MS992',
			name: 'Matrizes',
			ementa: 'Álgebra de matrizes. Métricas, sensibilidade. Eliminação Gaussiana. Ortogonalização. Sistemas lineares especiais. Autovalores. Métodos iterativos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS512'],
			color: '#5D9EC0',
			obligatory: false
		},
		'MS993': {
			code: 'MS993',
			name: 'Métodos Computacionais de Álgebra Linear',
			ementa: 'Estudo dos aspectos teóricos e computacionais dos métodos numéricos aplicados à resolução de sistemas lineares provenientes da discretização de problemas elípticos e parabólicos através dos métodos de diferenças finitas, incluindo métodos diretos e métodos iterativos para sistemas lineares, análise de sensibilidade, convergência e aspectos da estrutura de programação de uma linguagem de alto nível.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS512'],
			color: '#5D9EC0',
			obligatory: false
		}
	}
};

export default catalogue;
