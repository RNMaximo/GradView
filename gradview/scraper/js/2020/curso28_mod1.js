const catalogue = {
	totalCredits: 164,
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
			subjects: ['F_315', 'MA044', 'ME310', 'MS003', 'MS328', 'MS428']
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
			credits: 16,
			hasRestrictions: true,
			subjects: ['F_415', 'F_428', 'F_502', 'F_589', 'F_689', 'MA446', 'MA449', 'MA456', 'MA602', 'MA604', 'MA719', 'MA720', 'MA852', 'ME322', 'ME501', 'MS---'],
		},
		'elet-2': {
			credits: 16,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['MS400', 'MS500', 'MS505', 'MS580', 'MS590', 'MS612', 'MS614', 'MS680', 'MS712', 'MS777', 'MS780', 'MS877', 'MS990', 'MS991', 'MS992', 'MS993'],
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
			color: '#D98C40',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98C',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D9B3',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9D940',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D966',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#D98C40',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#D96640',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#8DD97A',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141'],
			color: '#D9D940',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940B3',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#A6BF66',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#8D8D7A',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211'],
			color: '#8DD97A',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D9B3',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#A6A68D',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#B3B35D',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211'],
			color: '#B3D95D',
			obligatory: true
		},
		'ME310': {
			code: 'ME310',
			name: 'Probabilidade II',
			ementa: 'Vetores Aleatórios, distribuições conjuntas, marginais e condicionais. Independência. Modelos gama, beta, Cauchy, multinomial, multinormal. Transformações. Distribuições t de student, qui-quadrado e F de Snedecor. Conjuntos e condicionais. Desigualdades de Markov, Tchebychev, Jensen e Cauchy-Schwartz. Elementos básicos e aplicações da função característica. Simulações. Teoremas limites básicos: modos de convergência, sequência de ensaios independentes, lei dos grandes números, Teorema Central do Limite.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'ME210'],
			color: '#67D997',
			obligatory: true
		},
		'MS003': {
			code: 'MS003',
			name: 'Seminários sobre Matemática Aplicada e Computacional',
			ementa: 'Palestras sobre temas de Matemática Aplicada e Computacional e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica e profissional dos alunos do Bacharelado em Matemática Aplicada e Computacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'MS328': {
			code: 'MS328',
			name: 'Matemática Discreta',
			ementa: 'Indução Matemática. Princípio multiplicativo. Princípio aditivo. Permutação, Arranjo, Combinação. Princípio de inclusão e exclusão. Funções geradoras. Partição de um inteiro. Relações de recorrências. O princípio da casa dos pombos. Noções de teoria dos grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B3D940',
			obligatory: true
		},
		'MS428': {
			code: 'MS428',
			name: 'Programação Linear',
			ementa: 'Formulação de problemas de programação linear. Resolução Gráfica. Método Simplex. Teoria de dualidade. Análise de sensibilidade e análise paramétrica. Algoritmos de pontos interiores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327', 'MS211'],
			color: '#AFC86D',
			obligatory: true
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40B3D9',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#D940B3',
			obligatory: true
		},
		'MS512': {
			code: 'MS512',
			name: 'Análise Numérica I',
			ementa: 'Fatoração de Choleski. Fatorações ortogonais. Quadrados mínimos lineares. Decomposição em valores singulares. Métodos iterativos para resolução de sistemas lineares. Introdução à resolução de sistemas não-lineares. Cálculo de autovalores e autovetores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MS211'],
			color: '#C0C067',
			obligatory: true
		},
		'MS550': {
			code: 'MS550',
			name: 'Métodos de Matemática Aplicada I',
			ementa: 'Análise Vetorial (revisão). Revisão de equações diferenciais: equações da Física Matemática; sistemas de coordenadas. Existência e unicidade da solução das equações diferenciais ordinárias. Pontos singulares regulares: método de Frobenius. Funções especiais (Bessel, Legendre). Equações Fuchsianas; Função Hipergeométrica. Sistemas de Sturm-Liouville. Polinômios ortogonais. Expansão em autofunções: séries de Fourier, séries generalizadas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA311', 'MA327'],
			color: '#B3D95D',
			obligatory: true
		},
		'MS629': {
			code: 'MS629',
			name: 'Programação Não-Linear',
			ementa: 'Minimizadores locais e globais. Condições de otimalidade para minimização de funções com e sem restrições. Métodos para minimização sem restrições. Métodos para minimização com restrições lineares e não lineares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327'],
			color: '#B3D95D',
			obligatory: true
		},
		'MS650': {
			code: 'MS650',
			name: 'Métodos de Matemática Aplicada II',
			ementa: 'Funções de variáveis complexas (revisão). Transformadas integrais (Fourier e Laplace). Transformadas inversas. Representação integral de funções. Equações diferenciais parciais. Classificação; problemas bem-postos. Equações da onda, do calor e de Laplace. Método de separação de variáveis. Introdução às equações integrais. Cálculo de variações.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MS550'],
			color: '#B3D95D',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#B340D9',
			obligatory: true
		},
		'F_415': {
			code: 'F_415',
			name: 'Mecânica Geral II',
			ementa: 'Forças centrais. Sistemas de partículas. Referenciais não inerciais. Dinâmica de corpos rígidos. Oscilações acopladas. Meios contínuos e ondas. Teoria especial da Relatividade.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos da Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9B340',
			obligatory: false
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#A6BF66',
			obligatory: false
		},
		'F_502': {
			code: 'F_502',
			name: 'Eletromagnetismo I',
			ementa: 'Campos eletrostáticos no vácuo e nos materiais dielétricos. Resolução das equações de Poisson e Laplace. Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940D9',
			obligatory: false
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#6640D9',
			obligatory: false
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589', 'MA327'],
			color: '#A08D8D',
			obligatory: false
		},
		'MA446': {
			code: 'MA446',
			name: 'Grupos e Representações',
			ementa: 'Grupos, subgrupos, classes laterais, teorema de Lagrange, homomorfismo, subgrupos normais, teoremas do isomorfismo, produtos diretos e semi-diretos, grupos de permutações, grupo alternado, ações de grupos em conjuntos, órbitas e contagem, classes de conjugação e equação de classe, classificação dos grupos abelianos finitamente gerados, p-grupos e p-subgrupos, teorema de Cauchy, teoremas de Sylow e aplicações, grupos solúveis, representações de grupos finitos, subrepresentações e teoremas do isomorfismo, lema de Schur, Teorema de Maschke, produto tensorial de representações, caracteres, tabelas de caracteres, relações de ortogonalidade, restrição e indução de representações e seus caracteres, aplicações da teoria de representações a solubilidade de grupos finitos e composição de formas quadráticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#4040D9',
			obligatory: false
		},
		'MA449': {
			code: 'MA449',
			name: 'Introdução às Equações Diferenciais Parciais',
			ementa: 'Dedução da Equação da Onda e da Equação do Calor. Equação de Laplace e Poisson. Espaço H1 de Sobolev. Séries de Fourier: unicidade, convolução, núcleos, médias de Abel e de Cesàro, O Teorema de Féjer, o núcleo de Poisson, convergência, aplicações. A transformada de Fourier em R: definição, espaços de Schwartz (S), transformada de Fourier em S, fórmula de inversão de Fourier, Fórmula de Plancherel. Aplicações da transformada de Fourier às equações, fórmula do somatório de Poisson, o Princípio da Incerteza. A transformada de Fourier em Rn e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#8C40D9',
			obligatory: false
		},
		'MA456': {
			code: 'MA456',
			name: 'Equações Diferenciais Ordinárias',
			ementa: 'Teoria de Existência e Unicidade. Método das aproximações sucessivas para existência e unicidade de soluções. Teorema de Peano de existência de soluções. Soluções maximais, fluxos. Sistemas lineares e suas soluções maximais. Dependência diferenciável de soluções em relação a parâmetros e a condições iniciais. Diferencial do fluxo. Teoremas de fluxo tubular. Campos completos. Colchetes de Lie de campos de vetores. Espaço de fase. Classificação das órbitas. Teorema de Hartman-Grobmann. Estabilidade de Lyapunov, funções de Lyapunov e expoentes de Lyapunov. Teorema de Poincaré-Bendixon. Campos conservativos. Recorrência e teorema de recorrência de Poincaré.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#408CD9',
			obligatory: false
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D940',
			obligatory: false
		},
		'MA604': {
			code: 'MA604',
			name: 'Topologia dos Espaços Métricos',
			ementa: 'Métrica. Funções contínuas. Homeomorfismos. Conjuntos abertos e fechados. Conjuntos compactos. Conjuntos convexos e conexos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502'],
			color: '#40B3D9',
			obligatory: false
		},
		'MA719': {
			code: 'MA719',
			name: 'Álgebra Linear Avançada',
			ementa: 'Revisão: espaços vetoriais, bases e coordenadas, transformações lineares e matrizes, posto, nulidade, produto interno, operadores normais e autoadjuntos, diagonalização. Espaço dual e a transposta, teorema de Cayley-Hamilton, polinômio mínimo de endomorfismo linear, forma de Jordan, forma de Jordan real, forma racional. Transformação multilinear, função alternada, determinante, produto tensorial de espaços vetoriais, álgebra tensorial, álgebra dos tensores simétricos. Álgebra de Grassmann, álgebra de Clifford, estrutura de formas bilineares e quadráticas, transformação ortogonal e simplética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA327'],
			color: '#D9D940',
			obligatory: false
		},
		'MA720': {
			code: 'MA720',
			name: 'Análise no R(n)',
			ementa: 'Cálculo de várias variáveis: Aplicações diferenciáveis, Diferencial e Matriz jacobiana, Desigualdade do valor médio, Regra da Cadeia, Derivadas de ordem superior, Fórmula de Taylor, Teorema da função inversa e implícita, Forma local das imersões e submersões e o teorema do posto. Subvariedades de Rn Valores e pontos regulares, espaço tangente, parametrizações locais. Integração, integrais de linha e de superfícies, Formas diferenciais e integração sobre variedades, Teorema de Stokes (Green e Gauss).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211', 'MA502', 'MA327'],
			color: '#8DCC86',
			obligatory: false
		},
		'MA852': {
			code: 'MA852',
			name: 'Geometria Diferencial',
			ementa: 'Curvas no plano e espaço: Curvatura e torção - Teorema Fundamental das Curvas Planas. Superfícies no Espaço - Primeira e segunda forma fundamental, área. Aplicação normal de Gauss. Curvaturas gaussiana e média, Linhas de Curvatura. Geometria intrínseca, derivada covariante, Teorema Egregium, Curvatura Geodésica, geodésicas, a aplicação exponencial. O Teorema de Gauss-Bonet. Tópicos adicionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA720'],
			color: '#8DCC86',
			obligatory: false
		},
		'ME322': {
			code: 'ME322',
			name: 'Inferência',
			ementa: 'Distribuição dos momentos amostrais. Estimação pontual. Métodos de estimação: momentos, máxima verossimilhança, mínimos quadrados. Teorema de Gauss-Markov. A família exponencial e Suficiência. Estimação por intervalos através do método de pivô. Testes de hipóteses. Erros tipo I e II, região crítica, nível de significância p-valor, tamanho e poder do teste.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211', 'ME210'],
			color: '#67D997',
			obligatory: false
		},
		'ME501': {
			code: 'ME501',
			name: 'Processos Estocásticos',
			ementa: 'Cadeias de Markov a tempo discreto. Classificação de estados, noções de recorrência e transiência. Medida estacionária. Reversibilidade. Processo de Poisson. Cadeias de Markov a tempo contínuo, processos de nascimento e morte. Aplicações: noções de teoria de renovação e teoria de filas, simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310'],
			color: '#67D997',
			obligatory: false
		},
		'MS---': {
			code: 'MS---',
			name: 'Qualquer Disciplina com codigo MS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MS---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#66D940',
			obligatory: false
		},
		'MS400': {
			code: 'MS400',
			name: 'Estruturas Discretas',
			ementa: 'Noções de Lógica, Conjuntos, Relações e Grafos; Números, Vetores e Multivetores; Estruturas Geométricas: Modelos Euclidiano, Projetivo e Conforme; Estruturas Algébricas: Álgebras Associativas e Álgebras de Lie; Aplicações: estruturas moleculares, visualização de dados, redes complexas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA141', 'MA211', 'MA327'],
			color: '#C0D953',
			obligatory: false
		},
		'MS500': {
			code: 'MS500',
			name: 'Geometria de Distâncias: Teoria e Aplicações',
			ementa: 'Noções básicas de grafos e de complexidade de algoritmos; O Problema de Geometria de Distâncias (PGD) e suas variações; Abordagem contínua e combinatória do PGD; Incertezas no PGD; Aplicações (estruturas 3D de proteínas, nanoestruturas, visualização de dados).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA141', 'MA211', 'MA327', 'MS211'],
			color: '#B9CC62',
			obligatory: false
		},
		'MS505': {
			code: 'MS505',
			name: 'Álgebra de Imagens',
			ementa: 'Estruturas algébricas pertinentes; imagens digitais e conceitos básicos de álgebra de imagens; histogramas e filtros; detecção de bordas; limiarização; alguns aspectos teóricos e práticos da morfologia matemática; transformadas lineares; descritores de imagens; redes neurais clássicas, morfológicas e convolucionais; tópicos em Deep Learning e afins.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211', 'MA327', 'MC102'],
			color: '#C0A67A',
			obligatory: false
		},
		'MS580': {
			code: 'MS580',
			name: 'Introdução à Teoria Fuzzy',
			ementa: 'Reticulados completos. Conjuntos fuzzy e extensões. Álgebra de conjuntos fuzzy. Números fuzzy. Relações fuzzy. Equações relacionais. Sistemas baseados em regras. Medidas fuzzy. Integrais fuzzy. Esperança fuzzy. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MS211'],
			color: '#A6A68D',
			obligatory: false
		},
		'MS590': {
			code: 'MS590',
			name: 'Introdução à Geofísica Computacional',
			ementa: 'Noções básicas de: propagação de ondas; ondas planas, cilíndricas e esféricas, reflexão e transmissão em interfaces; equações da onda, raios; método das reflexões sísmicas; tempos de trânsito; processamento sísmico; análise de velocidade; imageamento e inversão sísmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D96640',
			obligatory: false
		},
		'MS612': {
			code: 'MS612',
			name: 'Análise Numérica II',
			ementa: 'Equações diferenciais parciais (EDPs). Idéias fundamentais de aproximações por diferenças finitas, EDPs com o problema de Cauchy e/ou diferentes tipos de com condição de contorno: mista/Robin, Dirichlet e Neumann. Considerações teóricas: consistência, estabilidade, convergência e o Teorema de equivalência de Lax-Richtmyer. Análise de estabilidade via transformada de Fourier e teorema Gerschgorin. Equações parabólicas bidimensionais: convergência, estabilidade, métodos ADI. Equações elípticas bidimensionais. Condições de Dirichlet e de Neumann. Equações hiperbólicas unidimensionais: condição de Courant-Friedrichs-Lewy, Esquemas explícitos (Lax-Friedrichs, Upwind, centrado e Lax-Wendroff) e discussão de métodos implícitos e da relação numérica de Dispersão e Dissipação. O problema de Cauchy para lei de conservação em uma dimensão espacial: caso escalar, dificuldades numéricas no cálculo de soluções descontínuas. Equações diferenciais ordinárias (EDOs). Métodos de um passo (Runge-Kutta). Métodos de múltiplos passos, implícitos e explícitos. Controle de passo: Runge-Kutta-Felberg. Estabilidade dos métodos. Problemas de EDOs stiff. Revisão da teoria disponível.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA502', 'MS512'],
			color: '#80BAA0',
			obligatory: false
		},
		'MS614': {
			code: 'MS614',
			name: 'Simulação de Sistemas',
			ementa: 'Técnicas de simulação. Planejamento de experiências de simulação. Técnicas de geração de variáveis aleatórias. Modelos de filas, estoques e programação de sistemas. Simulação versus técnicas Analíticas. Simulação de sistemas econômicos. Linguagens de simulação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MC102', 'ME210'],
			color: '#8D8DB3',
			obligatory: false
		},
		'MS680': {
			code: 'MS680',
			name: 'Modelos Matemáticos para Biologia',
			ementa: 'Modelos de dinâmica de populações homogêneas: ecologia de presa-predador. Exploração e otimização de recursos. Modelos clássicos de Epidemiologia. Modelos em Fisiologia e reações enzimáticas. Equações de diferenças, diferenciais ordinárias e com retardamento. Análise de estabilidade, bifurcação e soluções periódicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211'],
			color: '#8DD97A',
			obligatory: false
		},
		'MS712': {
			code: 'MS712',
			name: 'Análise Numérica III',
			ementa: 'Resultados da teoria de aproximação: interpolação polinomial, interpolação polinomial por partes, melhor aproximação em espaços pré-Hilbert e quadraturas. Análise de erro. Princípios variacionais, minimização de funcionais de energia, o método de Ritz-Galerkin, formas lineares e formas bilineares, formulação variacional abstrata, espaços de Sobolev, V-elipticidade, produto interno energia, norma energia e normas equivalentes. Teorema de representação de Riesz, Teorema de Lax-Milgram, Lema de Cea. Interpretação geométrica da solução de Ritz-Galerkin, estabilidade e estimativa de erro na norma energia. Construção de espaços de elementos finitos clássicos. Formulação variacional de problemas de valores de contorno, com condições de Dirichlet, Neumann e Robin. Conceito de condição de contorno natural e de condição de contorno essencial. Mapeamento afim de um elemento de referência, o mapeamento do local ao global, montagem do sistema linear proveniente do método de Ritz-Galerkin, uma implementação eficiente de métodos de elementos finitos, aplicações em elasticidade linear e em modelos estacionários (difusão-reação e problemas elípticos), abrangendo ainda problemas parabólicos de advecção-difusão-reação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA502', 'MS512'],
			color: '#80BAA0',
			obligatory: false
		},
		'MS777': {
			code: 'MS777',
			name: 'Projeto Supervisionado',
			ementa: 'Desenvolvimento de um projeto de pesquisa, sob orientação de um professor, resultando em uma monografia que será divulgada publicamente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#D94066',
			obligatory: false
		},
		'MS780': {
			code: 'MS780',
			name: 'Modelos Matemáticos para Biologia II',
			ementa: 'Modelos de dinâmica de populações distribuídas: Populações estruturadas, dispersão espacial e interação em Ecologia e Epidemiologia. Modelos em Fisiologia: convecção, difusão e reação. Morfogênese segundo Turing. Equações diferenciais parciais de reação e difusão, Equações integrodiferenciais, e autômatos celulares. Soluções estacionárias, ondas viajantes, estabilidade e bifurcação. Simulação numérica. Conjuntos fuzzy. Controladores Fuzzy dos tipos de Mamdani e Sugeno. Sistemas p-fuzzy aplicados a modelos biológicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA311'],
			color: '#8DD97A',
			obligatory: false
		},
		'MS877': {
			code: 'MS877',
			name: 'Projeto Supervisionado II',
			ementa: 'Desenvolvimento de um projeto de pesquisa, sob a orientação de um professor, resultando em uma monografia que será divulgada publicamente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#4066D9',
			obligatory: false
		},
		'MS990': {
			code: 'MS990',
			name: 'Tópicos Especiais em Otimização',
			ementa: 'Condições de Otimalidade e Qualificação de Restrições. Dualidade. Programação Quadrática Sequencial. Lagrangiano Aumentado. Métodos de Restauração Inexata.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MS629'],
			color: '#B3D95D',
			obligatory: false
		},
		'MS991': {
			code: 'MS991',
			name: 'Análise Aplicada',
			ementa: 'Espaços métricos. Exemplos. Abertos, fechados, vizinhança. Convergência. Sequências de Cauchy. Completude. Espaços normados. Espaços de Banach. Compacidade e dimensão finita. Operadores lineares. Funcionais lineares. Funcionais lineares e dimensão finita. Espaços normados de operadores. Espaço dual. Espaços de Hilbert. Produto interno. Ortogonalidade. Conjuntos ortonormais. Conjuntos ortonormais totais. Exemplos. Representação de funcionais em espaços de Hilbert. Operadores adjuntos. Teorema de ponto fixo de Banach e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA327', 'MA502'],
			color: '#8DC68D',
			obligatory: false
		},
		'MS992': {
			code: 'MS992',
			name: 'Matrizes',
			ementa: 'Álgebra de matrizes; Normas e sensibilidade; Eliminação gaussiana e fatoração LU; Matrizes definidas positivas e fatoração de Cholesky; Ortogonalização e fatoração QR; Quadrados mínimos lineares; Autovalores e autovetores; Decomposição em valores singulares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MS512'],
			color: '#C0C067',
			obligatory: false
		},
		'MS993': {
			code: 'MS993',
			name: 'Métodos Computacionais de Álgebra Linear',
			ementa: 'Operações básicas com vetores e matrizes. Matrizes com estuturas especiais. Matrizes esparsas. Estudo teórico e computacional para: resolução de sistemas lineares (métodos diretos e métodos iterativos);resolução do problema de quadrados mínimos lineares; decomposição em valores singulares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MS512'],
			color: '#C0C067',
			obligatory: false
		}
	}
};

export default catalogue;
