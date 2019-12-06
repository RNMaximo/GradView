const catalogue = {
	totalCredits: 196,
	maxCreditsSem: 28,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA109', 'MA141', 'MA148', 'MA520']
		},
		'sem-2': {
			id: '2',
			subjects: ['EL284', 'MA111', 'MA220', 'MA327']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL683', 'F_128', 'MA211', 'MC102']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'F_228', 'MA311', 'MA811', 'MS211']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL511', 'MA044', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['MA224', 'MA502', 'MA770', 'MA812', 'MA901']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL684', 'MA553', 'MA902', 'ME951', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EL774', 'EL883', 'MA673', 'MA813', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['EL874', 'ELET09']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 20,
			hasRestrictions: true,
			subjects: ['F_---', 'MA---', 'ME---', 'MS---'],
		},
		'elet-3': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['MA225', 'MA741', 'MA742'],
		},
	},

	subjects: {
		'MA109': {
			code: 'MA109',
			name: 'Matemática Básica',
			ementa: 'Estudo elementar de funções reais: gráficos, operações com funções, tipos de funções. Funções trigonométricas: definições, gráficos, funções trigonométricas inversas. Função exponencial e função logarítmica. Polinômios: raízes, regra de sinais. Progressões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D4',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D953',
			obligatory: true
		},
		'MA148': {
			code: 'MA148',
			name: 'Fundamentos da Matemática',
			ementa: 'Visa apresentar um primeiro contato com o rigor matemático, ensinar os alunos a demonstrar proposições simples, de modo rigoroso e coerentemente redigido, a partir de conceitos desenvolvidos no ensino médio. Devem ser introduzidas apenas noções básicas de lógica e conjuntos, além de princípio de indução, conjuntos de números (naturais, inteiros, racionais, reais e complexos), sequências reais e noções básicas de combinatória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#408FD9',
			obligatory: true
		},
		'MA520': {
			code: 'MA520',
			name: 'Geometria Plana e Desenho Geométrico',
			ementa: 'Tratamento axiomático da geometria euclidiana plana. Introdução às geometrias não euclidianas. Isometrias no plano. Desenho geométrico. Tópicos da história da geometria.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95D40',
			obligatory: true
		},
		'EL284': {
			code: 'EL284',
			name: 'Educação Matemática Escolar I',
			ementa: 'O objetivo deste curso é promover análise e estudo de Problemas e perspectivas da Educação Matemática brasileira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4071D9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D98F',
			obligatory: true
		},
		'MA220': {
			code: 'MA220',
			name: 'Matemática Discreta',
			ementa: 'Indução Matemática. Princípio multiplicativo. Princípio aditivo. Permutação, arranjo, combinação. Princípio de inclusão e exclusão. Funções geradoras. Partição de um inteiro. Relações de recorrência. O princípio da casa dos pombos. Noções de teoria dos grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9407B',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#40D953',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#67D940',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#85D940',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#40D971',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#8540D9',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9CA',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#85D940',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#40D971',
			obligatory: true
		},
		'MA811': {
			code: 'MA811',
			name: 'Cultura Matemática I',
			ementa: 'Participação em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#40A5A5',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#57A694',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#A2D940',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#C0D940',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#40D9AC',
			obligatory: true
		},
		'MA224': {
			code: 'MA224',
			name: 'Resolução de Problemas Matemáticos',
			ementa: 'Resolução de problemas matemáticos nem sempre elementares, utilizando matemática elementar. Além de resolver os problemas, o curso deve contemplar a discussão e reflexão sobre como apresentar e orientar alunos na resolução de problemas. A leitura dos trabalhos de G. Polya sobre o assunto é recomendada.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4053D9',
			obligatory: true
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D9405D',
			obligatory: true
		},
		'MA770': {
			code: 'MA770',
			name: 'Geometria',
			ementa: 'Isometrias e similaridades do plano euclidiano, cristalografia bi-dimensional, círculos e esferas, coordenadas e números complexos, sólidos platônicos, geometria de ordem, geometrias afim, projetiva, absoluta e hiperbólica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99940',
			obligatory: true
		},
		'MA812': {
			code: 'MA812',
			name: 'Cultura Matemática II',
			ementa: 'Participação em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#40A5A5',
			obligatory: true
		},
		'MA901': {
			code: 'MA901',
			name: 'Estágio Supervisionado I',
			ementa: 'Elaboração, planejamento e execução de atividades de ensino de matemática, seguida de análise e reestruturação das mesmas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: '',
			color: '#4A40D9',
			obligatory: true
		},
		'EL684': {
			code: 'EL684',
			name: 'Educação Matemática Escolar II',
			ementa: 'O objetivo deste curso é promover uma problematização multidimensional do conhecimento matemático escolar na perspectiva da Educação Matemática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['EL284'],
			color: '#4071D9',
			obligatory: true
		},
		'MA553': {
			code: 'MA553',
			name: 'Teoria Aritmética dos Números',
			ementa: 'Números inteiros. Divisibilidade e congruências. Congruências e sistemas de grau um. Equações diofantinas. Somas de quatro quadrados. Congruências de grau dois. Símbolo de Legendre. Lei da reciprocidade quadrática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#40D953',
			obligatory: true
		},
		'MA902': {
			code: 'MA902',
			name: 'Estágio Supervisionado II',
			ementa: 'Elaboração, planejamento e execução de atividades de ensino de matemática, seguida de análise e reestruturação das mesmas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94099',
			obligatory: true
		},
		'ME951': {
			code: 'ME951',
			name: 'Estatística e Probabilidade I',
			ementa: 'Estatística descritiva. Probabilidade. Probabilidade condicional, independência, Teorema de Bayes. Variável aleatória. Função de distribuição acumulada. Momentos e função geradora de momentos. Os principais modelos discretos (binomial, geométrico, Pascal, hipergeométrico, Poisson) e contínuos (uniforme, normal, exponencial, gamma, qui-quadrado). Relações binomial-geométrica-Pascal versus Poisson-exponencial-gamma. Noções básicas de inferência: estimação pontual e intervalar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D98F',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D9B640',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#40ACD9',
			obligatory: true
		},
		'EL883': {
			code: 'EL883',
			name: 'Práticas Pedagógicas em Matemática',
			ementa: 'O objetivo deste curso é promover estudos e investigações da atividade pedagógica em Matemática na escola.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D440',
			obligatory: true
		},
		'MA673': {
			code: 'MA673',
			name: 'Elementos de Álgebra',
			ementa: 'Grupos: Teorema de Lagrange e Teorema de Isomorfismo. Exemplos: grupos cíclicos, simétricos e diedrais. Anéis e corpos: Domínios Euclidianos, domínios de ideais principais e fatoração única. Corpo de frações. Aritmética do anel dos polinômios. Corpos numéricos e finitos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA553'],
			color: '#40D953',
			obligatory: true
		},
		'MA813': {
			code: 'MA813',
			name: 'Cultura Matemática III',
			ementa: 'Participaçao em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#40A5A5',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#40CAD9',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#40ACD9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#A240D9',
			obligatory: true
		},
		'F_---': {
			code: 'F_---',
			name: 'Qualquer Disciplina com codigo F_---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo F_---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#C040D9',
			obligatory: false
		},
		'MA---': {
			code: 'MA---',
			name: 'Qualquer Disciplina com codigo MA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MA---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4AD940',
			obligatory: false
		},
		'MA225': {
			code: 'MA225',
			name: 'Análise de Livros e Materiais Didáticos de Matemática',
			ementa: 'Exame crítico de livros e/ou materiais didáticos disponíveis para ensino fundamental e médio, analisando-os em ralação à adequação de conteúdo e linguagem, riqueza de problemas propostos, exercícios, etc.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940B6',
			obligatory: false
		},
		'MA741': {
			code: 'MA741',
			name: 'Tópicos Especiais de Ensino de Matemática I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'MA742': {
			code: 'MA742',
			name: 'Tópicos Especiais de Ensino de Matemática II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D97B40',
			obligatory: false
		},
		'ME---': {
			code: 'ME---',
			name: 'Qualquer Disciplina com codigo ME---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ME---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#6740D9',
			obligatory: false
		},
		'MS---': {
			code: 'MS---',
			name: 'Qualquer Disciplina com codigo MS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MS---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D971',
			obligatory: false
		}
	}
};

export default catalogue;
