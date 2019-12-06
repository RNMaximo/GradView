const catalogue = {
	totalCredits: 242,
	maxCreditsSem: 30,
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
			subjects: ['F_428', 'F_315', 'F_429', 'MA044', 'QG102', 'QG101']
		},
		'sem-5': {
			id: '5',
			subjects: ['F_540', 'F_502', 'LE100', 'F_589', 'MC202', 'LE103']
		},
		'sem-6': {
			id: '6',
			subjects: ['F_320', 'F_602', 'F_640', 'F_689', 'LE205', 'LE401', 'LE602']
		},
		'sem-7': {
			id: '7',
			subjects: ['LE501', 'LE500', 'ELET07', 'F_789', 'F_604', 'F_520', 'LE700']
		},
		'sem-8': {
			id: '8',
			subjects: ['BE310', 'CE738', 'ELET08', 'F_887', 'F_888', 'F_620', 'LE801']
		},
		'sem-9': {
			id: '9',
			subjects: ['F_415', 'F_590', 'F_449', 'ELET09', 'F_749', 'CE304', 'F_740']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'F_949', 'F_895']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 24,
			hasRestrictions: true,
			subjects: ['F_0--', 'F_149', 'F_249', 'F_549', 'F_550', 'F_752', 'F_837', 'F_839', 'F_849', 'F_856', 'GL604', 'LE701', 'LE702', 'LE703', 'MC302', 'MC346', 'MC358', 'MC426', 'MC458', 'MC536'],
		},
		'elet-2': {
			credits: 4,
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
			color: '#464DB9',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94695',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9465A',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B99546',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466D',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6746B9',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#464DB9',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#804AA7',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#B96E5A',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#B9466D',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#5346B9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#936379',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#B96E6E',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#B96E5A',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149'],
			color: '#906E80',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC102', 'MA141', 'MA111'],
			color: '#976079',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#805E8A',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#936379',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#B96E6E',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MA211'],
			color: '#B96E5A',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Estrutura atômica, classificação periódica e propriedades dos elementos. Ligação química; estrutura e propriedades das substâncias. Noções de físico-química: termodinâmica, equilíbrios químicos e células eletroquímicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469BB9',
			obligatory: true
		},
		'F_502': {
			code: 'F_502',
			name: 'Eletromagnetismo I',
			ementa: 'Campos eletrostáticos no vácuo e nos materiais dielétricos. Resolução das equações de Poisson e Laplace. Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9AF',
			obligatory: true
		},
		'F_540': {
			code: 'F_540',
			name: 'Métodos da Física Experimental I',
			ementa: 'Circuitos básicos DC-AC. Componentes passivos. Instrumentos de medida. Diodos. Transistores. Amplificação. Amplificadores operacionais. Realimentação. Osciladores. Circuitos digitais básicos. Textos de laboratório.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#53B946',
			obligatory: true
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B6B946',
			obligatory: true
		},
		'LE100': {
			code: 'LE100',
			name: 'Desenho Técnico Assistido por Computador',
			ementa: 'Instrumentação e normas. Sistemas de projeções e perspectivas. Convenções e construções geométricas. Rebatimento. Mudança de planos. Introdução a um programa computacional de desenho. Desenho de elementos de máquinas. Desenho de conjunto.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B974',
			obligatory: true
		},
		'LE103': {
			code: 'LE103',
			name: 'Oficinas',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4660B9',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#5346B9',
			obligatory: true
		},
		'F_320': {
			code: 'F_320',
			name: 'Termodinâmica',
			ementa: 'Sistemas termodinâmicos, reversibilidade, termometria. Variáveis e equações de estado, diagramas PVT. Trabalho e primeira lei da termodinâmica. Equivalente mecânico de calor. Energia interna, entalpia, ciclo de Carnot. Mudanças de fase. Segunda lei da termodinâmica e entropia. Funções termodinâmicas. Aplicações práticas de termodinâmica. Teoria cinética dos gases. Distribuição de velocidades moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA211'],
			color: '#805E8A',
			obligatory: true
		},
		'F_602': {
			code: 'F_602',
			name: 'Eletromagnetismo II',
			ementa: 'Equações de Maxwell. Propagação de ondas eletromagnéticas. Reflexão. Refração. Guias de onda. Radiação. Antenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_502'],
			color: '#46B9AF',
			obligatory: true
		},
		'F_640': {
			code: 'F_640',
			name: 'Métodos da Física Experimental II',
			ementa: 'Introdução: teoria dos gases rarefeitos. Escoamento de gases. Bombas de vácuo. Descrição quantitativa do bombeamento de sistemas de vácuo. Adsorção, dessorção e evaporação de moléculas em vácuo. Medidores de pressão. Acessórios: armadilhas, anteparos, válvulas, etc. Detecção de vazamennto. Vedação. Soldagem. Limpeza. Métodos e máquinas produtoras de baixa temperatura. Liquefação de gases. Medição de temperatura. Componentes criogênicos.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7B46B9',
			obligatory: true
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589', 'MA327'],
			color: '#B8805A',
			obligatory: true
		},
		'LE205': {
			code: 'LE205',
			name: 'Introdução à Metodologia de Projeto',
			ementa: 'Introdução à dinâmica de grupos. Método científico. Conceitos da metodologia de projeto de engenharia. Projeto por funções. Planejamento de projeto. Pesquisa de mercado. Introdução às ferramentas da criatividade. Função desdobramento da qualidade (QFD). Projeto Axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B99B',
			obligatory: true
		},
		'LE401': {
			code: 'LE401',
			name: 'Estrutura e Propriedade dos Materiais',
			ementa: 'Princípios da estrutura e defeitos cristalinos aplicados à materiais metálicos. Difusão atômica. Soluções sólidas. Diagramas de fase. Propriedades dos materiais metálicos e não metálicos. Estrutura e propriedade dos materiais cerâmicos. Estrutura e propriedade dos materiais poliméricos. Noções sobre materiais conjugados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101'],
			color: '#4674B9',
			obligatory: true
		},
		'LE602': {
			code: 'LE602',
			name: 'Usinagem de Materiais',
			ementa: 'Fundamentos da Usinagem. Processos de Usinagem. Escolha de Ferramental e das condições de Usinagem. Programação CN.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#4660B9',
			obligatory: true
		},
		'F_520': {
			code: 'F_520',
			name: 'Métodos Matemáticos da Física I',
			ementa: 'Análise Vetorial (revisão), o operador nabla, sistemas de coordenadas (revisão), determinantes e matrizes, equações diferenciais, teoria de Sturm-Liouville funções ortogonais, a função gama, funções de Bessel, funções de Legendre, funções especiais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46AFB9',
			obligatory: true
		},
		'F_604': {
			code: 'F_604',
			name: 'Física Estatística',
			ementa: 'Introdução às propriedades de sistemas macroscópicos. Conceitos básicos de probabilidade. Interação térmica. Fator de Boltzmann. Relação entre conceitos atômicos e medidas macroscópicas \"Ensemble\" microcanônico. Distribuição canônica na aproximação clássica. Aplicações. Teorema da equipartição da energia. Interação termodinâmica. Termodinâmica estatística. Interação entre sistemas com troca de partículas: o \"Ensemble\" grande canônico. Estatística quântica de gases ideais: estatísticas de fótons, estatísticas de Fermi-Dirac e de Bose-Einstein. Teoria cinética e processos de transporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B95A46',
			obligatory: true
		},
		'F_789': {
			code: 'F_789',
			name: 'Mecânica Quântica II',
			ementa: 'Forças centrais e o átomo de Hidrogênio. Teoria de Espalhamento de uma partícula por um potencial. Spinores na teoria quântica não-relativística. Adição de momentos angulares. Teoria de perturbação independente do tempo. Estruturas fina e hiperfina do átomo de hidrogênio. Teoria de perturbação dependente do tempo. Partículas idênticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#B8805A',
			obligatory: true
		},
		'LE500': {
			code: 'LE500',
			name: 'Resistência dos Materiais',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangencial. Lei de Hooke generalizada. Esforços solicitantes. Distribuição de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_315'],
			color: '#805E8A',
			obligatory: true
		},
		'LE501': {
			code: 'LE501',
			name: 'Fenômenos de Transporte',
			ementa: 'Sistema e análise dimensional. Balanços baseados em volume de controle. Transporte laminar e turbulento (transferência molecular e convectiva de quantidade de movimento, calor e massa). Propriedade de transporte. Coeficientes de transferência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_320'],
			color: '#805E8A',
			obligatory: true
		},
		'LE700': {
			code: 'LE700',
			name: 'Engenharia de Qualidade',
			ementa: 'Conceitos básicos de qualidade. Histórico mundial e brasileiro. Principais correntes e autores. Modelo sistemático de qualidade - Sistema de gestão da qualidade. Organização do sistema da qualidade. Planejamento estratégico da qualidade. Integração dos sistemas na organização. Ciclo da qualidade: mercado, produto, produção. Recursos humanos para a qualidade. Gestão de custos da qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE602'],
			color: '#4660B9',
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
			color: '#B9A846',
			obligatory: true
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B988',
			obligatory: true
		},
		'F_620': {
			code: 'F_620',
			name: 'Métodos Matemáticos da Física II',
			ementa: 'Funções de variáveis complexas I (revisão), funções de variáveis complexas II: cálculo de resíduos (revisão), séries de Fourier, transformações integrais, equações integrais, cálculo de variações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_520'],
			color: '#46AFB9',
			obligatory: true
		},
		'F_887': {
			code: 'F_887',
			name: 'Física Nuclear',
			ementa: 'O átomo nuclear e o núcleo atômico. O modelo de gás de Fermi. O modelo de partícula independente. Aplicações do modelo de partícula independente. Núcleos com mais que um nucleon fora de camadas fechadas. Supercondutividade nuclear. O modelo coletivo. O modelo unificado. Aplicações do modelo unificado: vibrações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#B8805A',
			obligatory: true
		},
		'F_888': {
			code: 'F_888',
			name: 'Física do Estado Sólido',
			ementa: 'O problema geral do sólido e suas aproximações. Movimento de caroços e movimento de elétrons: visão puramente conceitual da aproximação adiabática Born-Oppenheimer. Revisão de estatística quântica: distribuições de Fermi-Dirac, Bose-Einstein e aplicações. Moléculas: ligações e espectros moleculares. Estrutura cristalina e rede recíproca. Condutores, semicondutores, supercondutores. Propriedades magnéticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#B8805A',
			obligatory: true
		},
		'LE801': {
			code: 'LE801',
			name: 'Planejamento e Controle de Produção',
			ementa: 'Caracterização do problema de planejamento e controle da produção (PCP). Cálculo de Necessidades (MRP). Mapeamento do fluxo de valor. Sistema Kaban. Takt time. Fluxo Contínuo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE602'],
			color: '#4660B9',
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
			color: '#B94681',
			obligatory: true
		},
		'F_415': {
			code: 'F_415',
			name: 'Mecânica Geral II',
			ementa: 'Forças centrais. Sistemas de partículas. Referenciais não inerciais. Dinâmica de corpos rígidos. Oscilações acopladas. Meios contínuos e ondas. Teoria especial da Relatividade.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos da Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946A8',
			obligatory: true
		},
		'F_449': {
			code: 'F_449',
			name: 'Lasers e Aplicações',
			ementa: 'Princípio de funcionamento: emissão estimulada, meio ativo, inversão de população e cavidade óptica. Tipos de lasers, tipos de cavidades, laser contínuos e pulsados, amplificação e alargamento de linhas espectrais, limiar de oscilação, saturação do ganho. Espectro de modos. Prisma, redes e espelhos dispersivos para compensação de dispersão da velocidade de grupo. Aplicações científicas do laser (resfriamento a laser, medidas extremamente precisas, holografia, etc). Uso de lasers em telecomunicações; Aplicações em medicina e biofotônica. Aplicações industriais: corte, metrologia, instrumentos a laser.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_429'],
			color: '#B96E6E',
			obligatory: true
		},
		'F_590': {
			code: 'F_590',
			name: 'Iniciação Científica I',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46B94D',
			obligatory: true
		},
		'F_740': {
			code: 'F_740',
			name: 'Métodos da Física Experimental III',
			ementa: 'Experimentos de Física Moderna: Medidas de constantes fundamentais da Física: Emissão Termoiônica. Espectroscopia atômica e nuclear. Movimentos semicondutores. Ressonância magnética.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A246B9',
			obligatory: true
		},
		'F_749': {
			code: 'F_749',
			name: 'Engenharia de Materiais Estruturados e Dispositivos',
			ementa: 'Técnicas de preparação e caracterização de filmes finos e materiais nanoestruturados. Nanomagnetismo. Técnicas de Microscopia, STM e AFM. Engenharia de dispositivos e funcionalização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_888'],
			color: '#B8805A',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'F_895': {
			code: 'F_895',
			name: 'Projeto de Curso',
			ementa: 'Encontrar solução de um problema prático específico através da aplicação de princípios físicos, no projeto e construção de um aparelho ou equipamento. Isto será feito sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#8EB946',
			obligatory: true
		},
		'F_949': {
			code: 'F_949',
			name: 'Estágio em Engenharia Física',
			ementa: 'Estudos de situações reais em engenharia, acompanhamento de projeto, fabricação, especificação, montagem, programação, configuração e teste de equipamento, junto a empresas e centros de pesquisa credenciados pela Universidade.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AA475'],
			color: '#A2B946',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'F_0--': {
			code: 'F_0--',
			name: 'Qualquer Disciplina com codigo F_0--',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo F_0--, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'F_149': {
			code: 'F_149',
			name: 'Desenvolvimento de Novos Materiais',
			ementa: 'Técnicas de preparação de materiais volumétricos: reação do estado sólido, técnica de fluxo metálico, fusão a arco, fusão por zona flutuante, etc. Critérios de estabilidade de estrutura. Síntese por aproximação através da substituição química por similitude de valência ou raio iônico. Critérios de busca por propriedade física desejada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_888'],
			color: '#B8805A',
			obligatory: false
		},
		'F_249': {
			code: 'F_249',
			name: 'Óptica Aplicada',
			ementa: 'Fontes e Detectores de Luz: fontes contínuas (térmicas), discretas (espectrais) e monocromáticas; detectores térmicos e quânticos. Radiometria, Fotometria, Colorimetria e Espectrometria. Formação de Imagens: aproximação paraxial, sistemas espessos, efeito das aberturas (luminosidade e campo de imagem), aberrações: geométricas e cromática, resolução (efeitos de difração). Lentes de Fresnel. Sistemas Ópticos: microscópios, telescópios, objetivas, condensadores, etc. Aplicações envolvendo a polarização da luz: elipsometria, polarimetria, moduladores, mostradores de cristal líquido, etc. Interferometria: medida de pequenas dimensões, deslocamentos e topografia de superfícies. Filmes Finos: espelhos frios, filtros de interferência e antirrefletores.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_429', 'F_589'],
			color: '#B8945A',
			obligatory: false
		},
		'F_549': {
			code: 'F_549',
			name: 'Fontes Alternativas de Energia',
			ementa: 'Fontes de Energia Renovável, Combustíveis alternativos: Biodiesel, Bioetanol. Células Solares. Usinas Nucleares. Energia Eólica. Estudos de Impactos Ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B646B9',
			obligatory: false
		},
		'F_550': {
			code: 'F_550',
			name: 'Radiação: Interação e Detecção',
			ementa: 'Elementos de teoria de espalhamento. Interação da radiação gama com a matéria. Efeitos de atenuação. Método Monte Carlo. Detecção de radiação. Tipos de detetores. Espectroscopia Gama e de raio-x. Análise de dados.Obs.: Recomenda-se cursar junto a disciplina F 502.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_429', 'F_589'],
			color: '#B8945A',
			obligatory: false
		},
		'F_752': {
			code: 'F_752',
			name: 'Ressonância Magnética Aplicada à Medicina',
			ementa: 'Fundamentos de Ressonância Magnética. Geração de Sinais e Detecção. Sequências de Pulso Características. Localização de Sinais e Reconstrução de Imagens. Contraste, Resolução, Ruído e Artefatos. Técnicas para Imageamento Rápido. Imagens por Difusão e Perfusão. Espectroscopia por RM.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_520', 'F_589'],
			color: '#7EB480',
			obligatory: false
		},
		'F_837': {
			code: 'F_837',
			name: 'Laboratório de Física Médica',
			ementa: 'Experimentos de Física Médica e Radiação. Espalhamento Compton. Efeito fotoelétrico. Caracterização de detectores de radiação. Lei de Poisson e distribuição normal em processos de decaimento radioativo. Fonte de neutrons e radioatividade induzida. Formação de imagens utilizando simuladores. Formação da imagem por raios-X: Contraste de absorção e contraste de fase. Ressonância Magnética Nuclear. Dosímetros termoluminescentes.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#67B946',
			obligatory: false
		},
		'F_839': {
			code: 'F_839',
			name: 'Métodos da Física Experimental VI',
			ementa: 'Ótica geométrica, Propagação, Natureza vetorial (relações vetoriais, vetor de Poynting, polarização, reflexão e refração, ondas evanescentes), Interferência e coerência (interferômetros, coerência, autocorrelação, espectro de potência, pulsos), Difração, Holografia (elementos, materiais, reconstrução de uma onda, capacidade e conteúdo de informação). Óptica de sólidos (dielétricos isotrópicos, condutores, interfaces com índices de refração complexos, meios anisotrópicos, cristais eletro-ópticos, óptica não linear.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B960',
			obligatory: false
		},
		'F_849': {
			code: 'F_849',
			name: 'Instrumentação Científica',
			ementa: 'Aquisição de medidas experimentais eletronicamente: conversão de medidas experimentais em sinais elétricos (corrente ou tensão), medidas de corrente, medidas de tensão, amplificadores, conversão de corrente em tensão, amplificadores \"lock-in\", conversão de sinal analógico em digital, comunicação entre sistemas de aquisição e computadores, protocolos de comunicação, programas para controle de experimentos e aquisição de dados.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_540'],
			color: '#53B946',
			obligatory: false
		},
		'F_856': {
			code: 'F_856',
			name: 'Biofotônica',
			ementa: 'Óptica geométrica e instrumentos ópticos - microscópios. Guias de onda e fibras ópticas. Detectores de luz: fotomultiplicadores, APD, e câmeras CCD. Interação da luz com a matéria. Marcadores fluorescentes: proteínas e quantum dots. Funcionalização de interfaces. Espectroscopias de infravermelho e Raman. Óptica não linear. Biossensores fotônicos. Lasers. Cirurgias e terapias com laser. Visualizações fotônicas: OCT, NIR-DOT. Microscopias de fluorescência. Microscopias Multifotônicas. Microscopias Raman. Microscopias com resolução subdifração. Pinças ópticas e medidas biomecânicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#B6B946',
			obligatory: false
		},
		'GL604': {
			code: 'GL604',
			name: 'Sistemas de Informação e Gestão do Conhecimento',
			ementa: 'Tecnologia da informação. Sistemas de informação. O conhecimento como ativo da empresa. Gestão do conhecimento: criação, fluxo e disseminação de conhecimento. Aprendizado organizacional. Impactos na competitividade e na organização da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98146',
			obligatory: false
		},
		'LE701': {
			code: 'LE701',
			name: 'Gestão de Projetos',
			ementa: 'Introdução ao gerenciamento de projeto para implementação de sistemas e desenvolvimento de produto. Fases do projeto (preparação, planejamento, monitoramento e adaptação). Revisão de técnicas clássicas (CPM e PERT). Matriz de estrutura de projeto. Simulação probabilística de projeto. Modelagem de sistemas dinâmicos aplicada ao projeto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#7BB946',
			obligatory: false
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da gestão de pessoas nas empresas. A gestão de RH e seus objetivos, políticas e estratégias. Histórico de gestão de pessoal. Gestão estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: qualidade de vida.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'LE703': {
			code: 'LE703',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Classificação dos sistemas de manufatura. Aplicação de trabalho padrão. Tecnologia de grupo. Métricas da produção. Cálculo de recursos e capacidade produtiva.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96D46',
			obligatory: false
		},
		'MC302': {
			code: 'MC302',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC202'],
			color: '#5346B9',
			obligatory: false
		},
		'MC346': {
			code: 'MC346',
			name: 'Paradigmas de Programação',
			ementa: 'Visão comparativa de paradigmas de programação: programação funcional, programação lógica e programação rápida (prototipação).',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#5346B9',
			obligatory: false
		},
		'MC358': {
			code: 'MC358',
			name: 'Fundamentos Matemáticos da Computação',
			ementa: 'Conceitos básicos de matemática discreta e de lógica para computação. Técnicas de provas, indução matemática. Relações e conceitos de teoria de grafos. Modelagem de problemas usando grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8E46B9',
			obligatory: false
		},
		'MC426': {
			code: 'MC426',
			name: 'Engenharia de Software',
			ementa: 'Modelos de processo de desenvolvimento de software. Engenharia de requisitos. Modelos de análise e projeto de sistemas de software. Arquitetura de software e padrões arquiteturais. Padrões de projeto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#5346B9',
			obligatory: false
		},
		'MC458': {
			code: 'MC458',
			name: 'Projeto e Análise de Algoritmos I',
			ementa: 'Técnicas de projeto e análise de algoritmos. Ferramental Matemático para Análise de Algoritmos. Projeto de algoritmos por indução. Busca, ordenação e estatísticas de ordem. Programação Dinâmica. Algoritmos Gulosos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC358', 'MC202'],
			color: '#7146B9',
			obligatory: false
		},
		'MC536': {
			code: 'MC536',
			name: 'Bancos de Dados: Teoria e Prática',
			ementa: 'Arquiteturas de sistemas de gerenciamento de bancos de dados. Modelagem de dados: modelos conceituais e lógicos, incluindo o modelo relacional e normalização. Álgebra relacional. Linguagens de definição e de manipulação de dados. Otimização de consultas. Mecanismos de proteção, recuperação e segurança. Controle de concorrência. Bancos de dados não relacionais. Projeto e desenvolvimento de ferramentas e técnicas utilizadas na solução de problemas de sistemas de informação, utilizando bancos de dados. Modelagem, especificação, projeto e implementação de aplicações em sistemas de informação.',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC302'],
			color: '#5346B9',
			obligatory: false
		}
	}
};

export default catalogue;
