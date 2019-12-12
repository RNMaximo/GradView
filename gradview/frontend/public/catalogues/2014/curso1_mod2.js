const catalogue = {
	totalCredits: 196,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['F_129', 'F_128', 'MA111', 'MA141', 'MS149', 'FM003']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_228', 'F_229', 'EL284', 'MA211', 'MA327', 'ELET02', 'EL285']
		},
		'sem-3': {
			id: '3',
			subjects: ['ELET03', 'F_329', 'F_328', 'MA311', 'EL683', 'ME210', 'MA520']
		},
		'sem-4': {
			id: '4',
			subjects: ['MA044', 'F_428', 'MA770', 'MC102', 'ELET04', 'EL212']
		},
		'sem-5': {
			id: '5',
			subjects: ['MA901', 'EL511', 'MS211', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['MA224', 'EL684', 'MA502', 'MA553', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'EL774', 'MA673']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'EL874', 'EL883']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['F_590', 'F_690', 'F_896', 'FM201', 'FM301', 'FM401', 'FM501', 'FM601', 'FM701', 'MA811', 'MA812', 'MA813', 'MA903', 'MA904'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['F_609', 'MA225', 'MA700', 'MA741', 'MA742', 'MA800'],
		},
		'elet-3': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['F_901', 'MA902'],
		},
		'elet-4': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['F_---', 'MA---', 'ME---', 'MS---'],
		},
		'elet-5': {
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
			color: '#B94657',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94698',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A8',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#6746B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7746B9',
			obligatory: true
		},
		'EL284': {
			code: 'EL284',
			name: 'Educação Matemática Escolar I',
			ementa: 'O objetivo deste curso é promover análise e estudo de Problemas e perspectivas da Educação Matemática brasileira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#98B946',
			obligatory: true
		},
		'EL285': {
			code: 'EL285',
			name: 'Conhecimento em Física Escolar I',
			ementa: 'Análise de questões específicas do ensino da Física e de campos e conhecimentos envolvidos em propostas de solução para essas questões.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46A8B9',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#B94657',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#B94678',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#578080',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#46B946',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4657B9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#776C72',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#9046A9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#578080',
			obligatory: true
		},
		'MA520': {
			code: 'MA520',
			name: 'Geometria Plana e Desenho Geométrico',
			ementa: 'Tratamento axiomático da geometria euclidiana plana. Introdução às geometrias não euclidianas. Isometrias no plano. Desenho geométrico. Tópicos da história da geometria.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#57B946',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149'],
			color: '#6F46B9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#776C72',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B998',
			obligatory: true
		},
		'MA770': {
			code: 'MA770',
			name: 'Geometria',
			ementa: 'Isometrias e similaridades do plano euclidiano, cristalografia bi-dimensional, círculos e esferas, coordenadas e números complexos, sólidos platônicos, geometria de ordem, geometrias afim, projetiva, absoluta e hiperbólica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99846',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B97746',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'MA901': {
			code: 'MA901',
			name: 'Estágio Supervisionado I',
			ementa: 'Elaboração, planejamento e execução de atividades de ensino de matemática, seguida de análise e reestruturação das mesmas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: '',
			color: '#B94667',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#777D6C',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL684': {
			code: 'EL684',
			name: 'Educação Matemática Escolar II',
			ementa: 'O objetivo deste curso é promover uma problematização multidimensional do conhecimento matemático escolar na perspectiva da Educação Matemática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['EL284'],
			color: '#98B946',
			obligatory: true
		},
		'MA224': {
			code: 'MA224',
			name: 'Resolução de Problemas Matemáticos',
			ementa: 'Resolução de problemas matemáticos nem sempre elementares, utilizando matemática elementar. Além de resolver os problemas, o curso deve contemplar a discussão e reflexão sobre como apresentar e orientar alunos na resolução de problemas. A leitura dos trabalhos de G. Polya sobre o assunto é recomendada.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#77B946',
			obligatory: true
		},
		'MA553': {
			code: 'MA553',
			name: 'Teoria Aritmética dos Números',
			ementa: 'Números inteiros. Divisibilidade e congruências. Congruências e sistemas de grau um. Equações diofantinas. Somas de quatro quadrados. Congruências de grau dois. Símbolo de Legendre. Lei da reciprocidade quadrática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#46B946',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#9846B9',
			obligatory: true
		},
		'MA673': {
			code: 'MA673',
			name: 'Elementos de Álgebra',
			ementa: 'Grupos: Teorema de Lagrange e Teorema de Isomorfismo. Exemplos: grupos cíclicos, simétricos e diedrais. Anéis e corpos: Domínios Euclidianos, domínios de ideais principais e fatoração única. Corpo de frações. Aritmética do anel dos polinômios. Corpos numéricos e finitos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA553'],
			color: '#46B946',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#9846B9',
			obligatory: true
		},
		'EL883': {
			code: 'EL883',
			name: 'Práticas Pedagógicas em Matemática',
			ementa: 'O objetivo deste curso é promover estudos e investigações da atividade pedagógica em Matemática na escola.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#88B946',
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
		'FM201': {
			code: 'FM201',
			name: 'Atividades Científico - Culturais I',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B957',
			obligatory: false
		},
		'FM301': {
			code: 'FM301',
			name: 'Atividades Científico - Culturais II',
			ementa: 'Atividades Científivas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A846B9',
			obligatory: false
		},
		'FM401': {
			code: 'FM401',
			name: 'Atividades Científico - Culturais III',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'FM501': {
			code: 'FM501',
			name: 'Atividades Científico - Culturais IV',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95746',
			obligatory: false
		},
		'FM601': {
			code: 'FM601',
			name: 'Atividades Científico - Culturais V',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94677',
			obligatory: false
		},
		'FM701': {
			code: 'FM701',
			name: 'Atividades Científico - Culturais VI',
			ementa: 'Atividades Científicas e Culturais a serem desenvolvidas no âmbito da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4677B9',
			obligatory: false
		},
		'F_---': {
			code: 'F_---',
			name: 'Qualquer Disciplina com codigo F_---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo F_---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B977',
			obligatory: false
		},
		'F_590': {
			code: 'F_590',
			name: 'Iniciação Científica I',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46B967',
			obligatory: false
		},
		'F_609': {
			code: 'F_609',
			name: 'Tópicos de Ensino de Física I',
			ementa: 'Esta disciplina pretende fornecer ao licenciado uma discussão sobre a inserção das questões relativas ao ensino de Física no ensino médio. Deverão ser desenvolvidas demonstrações em Física em qualquer ambiente.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['F_328', 'F_329'],
			color: '#84598E',
			obligatory: false
		},
		'F_690': {
			code: 'F_690',
			name: 'Iniciação Científica II',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#4667B9',
			obligatory: false
		},
		'F_896': {
			code: 'F_896',
			name: 'Monografia',
			ementa: 'Esta disciplina consistirá de aulas em sala, enfatizando a organização e o formalismo do desenvolvimento do trabalho científico, incluindo técnicas de redação científica, ferramentas de busca, referências bibliográficas, estruturas formais de divulgação científica, etc.. Na parte prática, deverá ser desenvolvido um tema de pesquisa individualmente pelo aluno, com o formato de um trabalho de Iniciação Científica, sob a orientação de um professor ou pesquisador autorizado pela Comissão de Graduação. A Monografia será avaliada no final da disciplina.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480'],
			color: '#46B988',
			obligatory: false
		},
		'F_901': {
			code: 'F_901',
			name: 'Estágio Supervisionado I',
			ementa: 'Aplicação de conhecimentos específicos de Física e técnicas didáticas em situações concretas de ensino, possibilitando a realização de mini-projetos, preparação de material didático e recursos paralelos, visando uma maior eficácia do trabalho formativo.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200'],
			color: '#8846B9',
			obligatory: false
		},
		'MA---': {
			code: 'MA---',
			name: 'Qualquer Disciplina com codigo MA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9A846',
			obligatory: false
		},
		'MA225': {
			code: 'MA225',
			name: 'Análise de Livros e Materiais Didáticos de Matemática',
			ementa: 'Exame crítico de livros e/ou materiais didáticos disponíveis para ensino fundamental e médio, analisando-os em ralação à adequação de conteúdo e linguagem, riqueza de problemas propostos, exercícios, etc.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4698B9',
			obligatory: false
		},
		'MA700': {
			code: 'MA700',
			name: 'Monografia I',
			ementa: 'Projeto teórico ou prático, orientado por um ou mais docentes do IMECC ou da FE, ou ainda de outras unidades, mediante autorização da Coordenadoria de Graduação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#67B946',
			obligatory: false
		},
		'MA741': {
			code: 'MA741',
			name: 'Tópicos Especiais de Ensino de Matemática I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#5746B9',
			obligatory: false
		},
		'MA742': {
			code: 'MA742',
			name: 'Tópicos Especiais de Ensino de Matemática II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: false
		},
		'MA800': {
			code: 'MA800',
			name: 'Monografia II',
			ementa: 'Projeto teórico ou prático, orientado por um ou mais docentes do IMECC ou da FE, ou ainda de outras unidades, mediante autorização da Coordenadoria de Graduação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#A8B946',
			obligatory: false
		},
		'MA811': {
			code: 'MA811',
			name: 'Cultura Matemática I',
			ementa: 'Participação em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#789D63',
			obligatory: false
		},
		'MA812': {
			code: 'MA812',
			name: 'Cultura Matemática II',
			ementa: 'Participação em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#789D63',
			obligatory: false
		},
		'MA813': {
			code: 'MA813',
			name: 'Cultura Matemática III',
			ementa: 'Participaçao em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#789D63',
			obligatory: false
		},
		'MA902': {
			code: 'MA902',
			name: 'Estágio Supervisionado II',
			ementa: 'Elaboração, planejamento e execução de atividades de ensino de matemática, seguida de análise e reestruturação das mesmas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#B94688',
			obligatory: false
		},
		'MA903': {
			code: 'MA903',
			name: 'Iniciação Científica I',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B9B946',
			obligatory: false
		},
		'MA904': {
			code: 'MA904',
			name: 'Iniciação Científica II',
			ementa: 'Iniciação a um projeto de pesquisa sob orientação individual de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B96746',
			obligatory: false
		},
		'ME---': {
			code: 'ME---',
			name: 'Qualquer Disciplina com codigo ME---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ME---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946A8',
			obligatory: false
		},
		'MS---': {
			code: 'MS---',
			name: 'Qualquer Disciplina com codigo MS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B98846',
			obligatory: false
		}
	}
};

export default catalogue;
