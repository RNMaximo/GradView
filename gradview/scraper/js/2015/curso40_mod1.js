const catalogue = {
	totalCredits: 198,
	maxCreditsSem: 26,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EL285', 'F_129', 'FM003', 'MA111', 'MS149', 'QG101']
		},
		'sem-2': {
			id: '2',
			subjects: ['EL683', 'F_128', 'MA141', 'QG102', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_228', 'F_229', 'MA327', 'MC102', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL511', 'MA211', 'ME414', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['F_320', 'F_328', 'F_329', 'MA311', 'MS211']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL212', 'F_428', 'F_429', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['F_315', 'F_540', 'F_609', 'F_901', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['F_589', 'F_709', 'F_902', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['EL774', 'F_489', 'F_740', 'FL701']
		},
		'sem-10': {
			id: '10',
			subjects: ['EL213', 'EL874', 'F_839', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['EL---'],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['F_530', 'F_590', 'F_690', 'F_896', 'FM201', 'FM301', 'FM401', 'FM501', 'FM601', 'FM701'],
		},
	},

	subjects: {
		'EL285': {
			code: 'EL285',
			name: 'Conhecimento em Física Escolar I',
			ementa: 'Análise de questões específicas do ensino da Física e de campos e conhecimentos envolvidos em propostas de solução para essas questões.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98540',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D994',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94085',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7540D9',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Estrutura atômica, classificação periódica e propriedades dos elementos. Ligação química; estrutura e propriedades das substâncias. Noções de físico-química: termodinâmica, equilíbrios químicos e células eletroquímicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4094D9',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9AB',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9406E',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8C40D9',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B340',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#5ED940',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#D9406E',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#8D8D81',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#8C40D9',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#BA40D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#D9C940',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4066D9',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#B340AF',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D94085',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#D140D9',
			obligatory: true
		},
		'F_320': {
			code: 'F_320',
			name: 'Termodinâmica',
			ementa: 'Sistemas termodinâmicos, reversibilidade, termometria. Variáveis e equações de estado, diagramas PVT. Trabalho e primeira lei da termodinâmica. Equivalente mecânico de calor. Energia interna, entalpia, ciclo de Carnot. Mudanças de fase. Segunda lei da termodinâmica e entropia. Funções termodinâmicas. Aplicações práticas de termodinâmica. Teoria cinética dos gases. Distribuição de velocidades moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA211'],
			color: '#C6408F',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#BF4099',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#8D8D8D',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#B340AF',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#B540BD',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94057',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#BF4099',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#8D8D8D',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#40D966',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#C6408F',
			obligatory: true
		},
		'F_540': {
			code: 'F_540',
			name: 'Métodos da Física Experimental I',
			ementa: 'Circuitos básicos DC-AC. Componentes passivos. Instrumentos de medida. Diodos. Transistores. Amplificação. Amplificadores operacionais. Realimentação. Osciladores. Circuitos digitais básicos. Textos de laboratório.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4740D9',
			obligatory: true
		},
		'F_609': {
			code: 'F_609',
			name: 'Tópicos de Ensino de Física I',
			ementa: 'Esta disciplina pretende fornecer ao licenciado uma discussão sobre a inserção das questões relativas ao ensino de Física no ensino médio. Deverão ser desenvolvidas demonstrações em Física em qualquer ambiente.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['F_328', 'F_329'],
			color: '#A66793',
			obligatory: true
		},
		'F_901': {
			code: 'F_901',
			name: 'Estágio Supervisionado I',
			ementa: 'Aplicação de conhecimentos específicos de Física e técnicas didáticas em situações concretas de ensino, possibilitando a realização de mini-projetos, preparação de material didático e recursos paralelos, visando uma maior eficácia do trabalho formativo.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200'],
			color: '#40ABD9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#D9409C',
			obligatory: true
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#BAD940',
			obligatory: true
		},
		'F_709': {
			code: 'F_709',
			name: 'Tópicos de Ensino de Física II',
			ementa: 'Esta disciplina pretende fornecer ao licenciado uma discussão sobre a inserção dos conceitos de Física diante dos problemas de ensino de Física nas escolas de ensino médio. Deverá ser enfatizado o projeto, a confecção e o uso das demonstrações sobre Física no ensino médio.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['F_609'],
			color: '#A66793',
			obligatory: true
		},
		'F_902': {
			code: 'F_902',
			name: 'Estágio Supervisionado II',
			ementa: 'Aplicação de conhecimentos específicos de Física e técnicas didáticas em situações concretas de ensino, possibilitando a realização de mini-projetos, preparação de material didático e recursos paralelos, visando uma maior eficácia do trabalho formativo.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200'],
			color: '#D940C9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#40C2D9',
			obligatory: true
		},
		'F_489': {
			code: 'F_489',
			name: 'Estrutura de Matéria II',
			ementa: 'Momentos de dipolo magnético, spin, e taxas de transição. Átomos multieletrônicos. Estatística quântica. Moléculas. Sólidos. Modelos Nucleares. Partículas elementares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#BAD940',
			obligatory: true
		},
		'F_740': {
			code: 'F_740',
			name: 'Métodos da Física Experimental III',
			ementa: 'Experimentos de Física Moderna: Medidas de constantes fundamentais da Física: Emissão Termoiônica. Espectroscopia atômica e nuclear. Movimentos semicondutores. Ressonância magnética.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#407DD9',
			obligatory: true
		},
		'FL701': {
			code: 'FL701',
			name: 'Projetos Integrados do Ensino de Física',
			ementa: 'Desenvolvimento de projetos educacionais que poderão ser aplicados em sala de aula, de ensino médio em Física. O projeto deverá ser desenvolvido sob responsabilidade dos institutos de Física e da Faculdade de Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#A340D9',
			obligatory: true
		},
		'EL213': {
			code: 'EL213',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96E40',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#40C2D9',
			obligatory: true
		},
		'F_839': {
			code: 'F_839',
			name: 'Métodos da Física Experimental VI',
			ementa: 'Ótica geométrica, Propagação, Natureza vetorial (relações vetoriais, vetor de Poynting, polarização, reflexão e refração, ondas evanescentes), Interferência e coerência (interferômetros, coerência, autocorrelação, espectro de potência, pulsos), Difração, Holografia (elementos, materiais, reconstrução de uma onda, capacidade e conteúdo de informação). Óptica de sólidos (dielétricos isotrópicos, condutores, interfaces com índices de refração complexos, meios anisotrópicos, cristais eletro-ópticos, óptica não linear.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D99C40',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#D95740',
			obligatory: true
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D94F',
			obligatory: false
		},
		'FM201': {
			code: 'FM201',
			name: 'Atividades Científico - Culturais I',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C2',
			obligatory: false
		},
		'FM301': {
			code: 'FM301',
			name: 'Atividades Científico - Culturais II',
			ementa: 'Atividades Científivas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D1D940',
			obligatory: false
		},
		'FM401': {
			code: 'FM401',
			name: 'Atividades Científico - Culturais III',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97D',
			obligatory: false
		},
		'FM501': {
			code: 'FM501',
			name: 'Atividades Científico - Culturais IV',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: false
		},
		'FM601': {
			code: 'FM601',
			name: 'Atividades Científico - Culturais V',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#404FD9',
			obligatory: false
		},
		'FM701': {
			code: 'FM701',
			name: 'Atividades Científico - Culturais VI',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B3',
			obligatory: false
		},
		'F_530': {
			code: 'F_530',
			name: 'Instrumentação I',
			ementa: 'Projeto individual de sistemas de medição e controle de experiências e processos físicos.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#75D940',
			obligatory: false
		},
		'F_590': {
			code: 'F_590',
			name: 'Iniciação Científica I',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#47D940',
			obligatory: false
		},
		'F_690': {
			code: 'F_690',
			name: 'Iniciação Científica II',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#A3D940',
			obligatory: false
		},
		'F_896': {
			code: 'F_896',
			name: 'Monografia',
			ementa: 'Esta disciplina consistirá de aulas em sala, enfatizando a organização e o formalismo do desenvolvimento do trabalho científico, incluindo técnicas de redação científica, ferramentas de busca, referências bibliográficas, estruturas formais de divulgação científica, etc.. Na parte prática, deverá ser desenvolvido um tema de pesquisa individualmente pelo aluno, com o formato de um trabalho de Iniciação Científica, sob a orientação de um professor ou pesquisador autorizado pela Comissão de Graduação. A Monografia será avaliada no final da disciplina.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480'],
			color: '#5E40D9',
			obligatory: false
		}
	}
};

export default catalogue;
