const catalogue = {
	totalCredits: 175,
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
			subjects: ['F_315', 'F_428', 'F_429', 'MA044', 'QG101', 'QG102']
		},
		'sem-5': {
			id: '5',
			subjects: ['EA513', 'EM330', 'F_415', 'F_502', 'F_520', 'F_589']
		},
		'sem-6': {
			id: '6',
			subjects: ['EE530', 'F_320', 'F_489', 'F_602', 'F_640', 'F_689']
		},
		'sem-7': {
			id: '7',
			subjects: ['EE531', 'EE640', 'EM423', 'F_740', 'F_789', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EE610', 'EE641', 'EE833', 'F_896', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['F_838', 'F_839'],
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
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9C940',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8C40D9',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9AB',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#BAD940',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BA40D9',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409C',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#D9C940',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#B3858D',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#BA8D8D',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#BA40D9',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40ABD9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#C4A173',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#A38D8D',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#BA8D8D',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149'],
			color: '#CA8D6E',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#9197A6',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#CAAB67',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#C4A173',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#A38D8D',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9406E',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Noções de físico-química: termoquímica, equilíbrios químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96E40',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404FD9',
			obligatory: true
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#BAD940',
			obligatory: true
		},
		'EM330': {
			code: 'EM330',
			name: 'Oficinas I',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora. Obs.: Realizado nas oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, 71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'F_415': {
			code: 'F_415',
			name: 'Mecânica Geral II',
			ementa: 'Forças centrais. Sistemas de partículas. Referenciais não inerciais. Dinâmica de corpos rígidos. Oscilações acopladas. Meios contínuos e ondas. Teoria especial da Relatividade. Obs.: A autorização AA200 não será aplicada aos alunos dos cursos da Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5ED940',
			obligatory: true
		},
		'F_502': {
			code: 'F_502',
			name: 'Eletromagnetismo I',
			ementa: 'Campos eletrostáticos no vácuo e nos materiais dielétricos. Resolução das equações de Poisson e Laplace. Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D94F',
			obligatory: true
		},
		'F_520': {
			code: 'F_520',
			name: 'Métodos Matemáticos da Física I',
			ementa: 'Análise Vetorial (revisão), o operador $\nabla$, sistemas de coordenadas (revisão), determinantes e matrizes, equações diferenciais, teoria de Sturm-Liouville funções ortogonais, a função gama, funções de Bessel, Funções de Legendre, funções especiais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: true
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio. Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940C9',
			obligatory: true
		},
		'EE530': {
			code: 'EE530',
			name: 'Eletrônica Básica I',
			ementa: 'Conceitos básicos de projeto. Amplificadores operacionais Ideais. Circuitos com amplificadores operacionais. Semicondutores. Circuitos com diodos semicondutores. Circuitos com FET. Circuitos com transistores bipolares. Amplificadores de potência e fontes de alimentação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#D940C9',
			obligatory: true
		},
		'F_320': {
			code: 'F_320',
			name: 'Termodinâmica',
			ementa: 'Sistemas termodinâmicos, reversibilidade, termometria. Variáveis e equações de estado, diagramas PVT. Trabalho e primeira lei da termodinâmica. Equivalente mecânico de calor. Energia interna, entalpia, ciclo de Carnot. Mudanças de fase. Segunda lei da termodinâmica e entropia. Funções termodinâmicas. Aplicações práticas de termodinâmica. Teoria cinética dos gases. Distribuição de velocidades moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA211'],
			color: '#CAAB67',
			obligatory: true
		},
		'F_489': {
			code: 'F_489',
			name: 'Estrutura de Matéria II',
			ementa: 'Momentos de dipolo magnético, spin, e taxas de transição. Átomos multieletrônicos. Estatística quântica. Moléculas. Sólidos. Modelos Nucleares. Partículas elementares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#D940C9',
			obligatory: true
		},
		'F_602': {
			code: 'F_602',
			name: 'Eletromagnetismo II',
			ementa: 'Equações de Maxwell. Propagação de ondas eletromagnéticas. Reflexão. Refração. Guias de onda. Radiação. Antenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_502'],
			color: '#40D94F',
			obligatory: true
		},
		'F_640': {
			code: 'F_640',
			name: 'Métodos da Física Experimental II',
			ementa: 'Introdução: teoria dos gases rarefeitos. Escoamento de gases. Bombas de vácuo. Descrição quantitativa do bombeamento de sistemas de vácuo. Adsorção, dessorção e evaporação de moléculas em vácuo. Medidores de pressão. Acessórios: armadilhas, anteparos, válvulas, etc. Detecção de vazamennto. Vedação. Soldagem. Limpeza. Métodos e máquinas produtoras de baixa temperatura. Liquefação de gases. Medição de temperatura. Componentes criogênicos. Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: true
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#D940C9',
			obligatory: true
		},
		'EE531': {
			code: 'EE531',
			name: 'Laboratório de Eletrônica Básica I',
			ementa: 'Diodos. Transistores bipolares. Transistores JFET. Transistores MOS e estruturas CMOS. Caracterização e aplicações.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE530'],
			color: '#D940C9',
			obligatory: true
		},
		'EE640': {
			code: 'EE640',
			name: 'Eletrônica Básica II',
			ementa: 'Projeto de amplificadores com BJT. Estrutura dos amplificadores operacionais. Resposta em frequência de amplificadores. Circuitos quasi-lineares. Circuitos não-lineares. Dispositivos de aplicação específica. Filtros ativos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE530'],
			color: '#D940C9',
			obligatory: true
		},
		'EM423': {
			code: 'EM423',
			name: 'Resistência dos Materiais',
			ementa: 'Noções sobre o material. Conceituação de tensões, solicitação axial. Cisalhamento puro. Torção em eixos circulares. Flexão pura, simples e oblíqua. Deflexão em vigas retas. Estado triplo de tensões e deformações. Círculo de Mohr. Cisalhamento puro. Estado hidrostático de tensões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*F_315'],
			color: '#CAAB67',
			obligatory: true
		},
		'F_740': {
			code: 'F_740',
			name: 'Métodos da Física Experimental III',
			ementa: 'Experimentos de Física Moderna: Medidas de constantes fundamentais da Física: Emissão Termoiônica. Espectroscopia atômica e nuclear. Movimentos semicondutores. Ressonância magnética.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#8CD940',
			obligatory: true
		},
		'F_789': {
			code: 'F_789',
			name: 'Mecânica Quântica II',
			ementa: 'Forças centrais e o átomo de Hidrogênio. Teoria de Espalhamento de uma partícula por um potencial. Spinores na teoria quântica não-relativística. Adição de momentos angulares. Teoria de perturbação independente do tempo. Estruturas fina e hiperfina do átomo de hidrogênio. Teoria de perturbação dependente do tempo. Partículas idênticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#D940C9',
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
		'EE610': {
			code: 'EE610',
			name: 'Eletrônica Digital I',
			ementa: 'Pulsos e circuitos de temporização. Circuitos lógicos-digitais. Circuitos Integrados Digitais. Dispositivos Lógicos Programáveis-PLDs.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE530'],
			color: '#D940C9',
			obligatory: true
		},
		'EE641': {
			code: 'EE641',
			name: 'Laboratório de Eletrônica Básica II',
			ementa: 'Amplificador a transistor bipolar. Amplificador diferencial. Amplificador operacional. Circuitos com amplificadores operacionais.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE531', 'EE640'],
			color: '#D940C9',
			obligatory: true
		},
		'EE833': {
			code: 'EE833',
			name: 'Eletrônica de Potência',
			ementa: 'Diodos de potência. Retificadores. Tiristores. Retificadores controlados. Controladores de tensão AC. Transistores de potência. Retalhadores DC. Inversores. Controle de Motores DC. Controle de Motores AC. Experimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE530'],
			color: '#D940C9',
			obligatory: true
		},
		'F_896': {
			code: 'F_896',
			name: 'Monografia',
			ementa: 'Esta disciplina consistirá de aulas em sala, enfatizando a organização e o formalismo do desenvolvimento do trabalho científico, incluindo técnicas de redação científica, ferramentas de busca, referências bibliográficas, estruturas formais de divulgação científica, etc.. Na parte prática, deverá ser desenvolvido um tema de pesquisa individualmente pelo aluno, com o formato de um trabalho de Iniciação Científica, sob a orientação de um professor ou pesquisador autorizado pela Comissão de Graduação. A Monografia será avaliada no final da disciplina.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480'],
			color: '#D99C40',
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
		},
		'F_838': {
			code: 'F_838',
			name: 'Métodos de Física Experimental VII',
			ementa: 'Simetria das redes cristalinas, produção de raios-X, difração por redes de átomos, difração por sólidos cristalinos, determinação de estruturas cristalinas, espalhamento difuso de raios-X; estrutura da matéria desordenada, polímeros e sistemas biológicos.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#407DD9',
			obligatory: false
		},
		'F_839': {
			code: 'F_839',
			name: 'Métodos da Física Experimental VI',
			ementa: 'Ótica geométrica, Propagação, Natureza vetorial (relações vetoriais, vetor de Poynting, polarização, reflexão e refração, ondas evanescentes), Interferência e coerência (interferômetros, coerência, autocorrelação, espectro de potência, pulsos), Difração, Holografia (elementos, materiais, reconstrução de uma onda, capacidade e conteúdo de informação). Óptica de sólidos (dielétricos isotrópicos, condutores, interfaces com índices de refração complexos, meios anisotrópicos, cristais eletro-ópticos, óptica não linear.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5E40D9',
			obligatory: false
		}
	}
};

export default catalogue;
