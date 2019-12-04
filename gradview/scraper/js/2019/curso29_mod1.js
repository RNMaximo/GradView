const catalogue = {
	totalCredits: 214,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA104', 'MA105', 'MA141', 'MA148']
		},
		'sem-2': {
			id: '2',
			subjects: ['MA111', 'MA327', 'MA521', 'MA750']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL683', 'F_128', 'MA211', 'MA621']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'EL213', 'EL284', 'F_228', 'MA507']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL511', 'MA044', 'MA220', 'MA811', 'MS213']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL774', 'MA224', 'MA312', 'MA553', 'MA812']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL684', 'EL874', 'MA740', 'ME951', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EL883', 'MA673', 'MA752', 'MA840', 'MA901']
		},
		'sem-9': {
			id: '9',
			subjects: ['MA225', 'MA705', 'MA813', 'MA902', 'ELET09']
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
		'MA104': {
			code: 'MA104',
			name: 'Seminários Sobre o Ensino de Matemática',
			ementa: 'Palestras sobre o ensino de matemática no ensino fundamental e médio, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'MA105': {
			code: 'MA105',
			name: 'Matemática Elementar',
			ementa: 'Funções de 1º grau. Matrizes, determinantes e volume. Sistemas lineares. Funções: injetora, sobrejetora, bijetora, inversa, função de 2º grau, valor absoluto. Combinatória e Probabilidade: princípios multiplicativo e aditivo; arranjos, combinações e permutações; probabilidades em conjuntos finitos, probabilidade condicional; triângulo de Pascal, binômio de Newton. Números e Sequências: números naturais, inteiros, racionais, reais, progressões aritméticas e geométricas. Funções Exponencial e Logarítmica. Trigonometria. Equações algébricas, Polinômios e Números Complexos.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#D96840',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C5D9',
			obligatory: true
		},
		'MA148': {
			code: 'MA148',
			name: 'Fundamentos da Matemática',
			ementa: 'Visa apresentar um primeiro contato com o rigor matemático, ensinar os alunos a demonstrar proposições simples, de modo rigoroso e coerentemente redigido, a partir de conceitos desenvolvidos no ensino médio. Devem ser introduzidas apenas noções básicas de lógica e conjuntos, além de princípio de indução, conjuntos de números (naturais, inteiros, racionais, reais e complexos), sequências reais e noções básicas de combinatória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AA40D9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94068',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141'],
			color: '#40C5D9',
			obligatory: true
		},
		'MA521': {
			code: 'MA521',
			name: 'Geometria Plana',
			ementa: 'Os 5 postulados de Euclides; noções comuns da geometria; construções com régua e compasso; crítica das noções comuns. Os axiomas de Hilbert: incidência; ordem e teorema de Pasch; congruência de segmentos e ângulos; paralelas; continuidade e completude. Corpos de segmentos: soma por concatenação, multiplicação via paralelismo, números construtíveis, semelhança de triângulos; a propriedade do supremo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D94D',
			obligatory: true
		},
		'MA750': {
			code: 'MA750',
			name: 'Recursos Computacionais no Ensino de Matemática',
			ementa: 'Análise de aplicativos de informática para o ensino-aprendizagem de matemática na educação básica. Sistemas de computação algébrica e simbólica. Ambientes de geometria dinâmica. Processadores de textos matemáticos e científicos. Resolução de problemas em situações de ensino envolvendo, por exemplo, sistemas lineares, equações polinomiais, geometria analítica e funções de uma variável.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA440'],
			color: '#8240D9',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5A40D9',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C5',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#8D83A1',
			obligatory: true
		},
		'MA621': {
			code: 'MA621',
			name: 'Geometria Espacial',
			ementa: 'Teoria de poliedros: revisão dos axiomas de Hilbert; os números reais como corpo de segmentos; convexidade de polígonos e poliedros; fórmula de Euler para poliedros convexos. Áreas e volumes: princípio de Cavalieri; áreas superficiais e volumes de sólidos (prisma, pirâmide, cilindro, cone e esfera). Isometrias: definição por congruência; classificação das isometrias da reta, do plano e do espaço.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA521'],
			color: '#40D94D',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940B7',
			obligatory: true
		},
		'EL213': {
			code: 'EL213',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D2D940',
			obligatory: true
		},
		'EL284': {
			code: 'EL284',
			name: 'Educação Matemática Escolar I',
			ementa: 'O objetivo deste curso é promover análise e estudo de Problemas e perspectivas da Educação Matemática brasileira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#82D940',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#40D9C5',
			obligatory: true
		},
		'MA507': {
			code: 'MA507',
			name: 'Introdução à Análise',
			ementa: 'Os números reais. Sequências e séries, o número e é irracional; convergência de Cauchy; séries infinitas, testes da comparação, razão e integral; não-enumerabilidade dos números reais, Teorema de Bolzano-Weierstrass, divergência da série harmônica. Funções contínuas: limites, Teoremas de Bolzano, de Weierstrass e do Valor Intermediário, continuidade uniforme. Derivadas, extremos locais, o Teorema do Valor Médio, funções inversas. Integral. O Teorema Fundamental do Cálculo. Aplicações: funções trigonométicas, pi é irracional, as funções logarítmica e exponencial, aproximação por polinômios.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['MA111'],
			color: '#D94068',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#AAD940',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211'],
			color: '#67A4BD',
			obligatory: true
		},
		'MA220': {
			code: 'MA220',
			name: 'Matemática Discreta',
			ementa: 'Indução Matemática. Princípio multiplicativo. Princípio aditivo. Permutação, arranjo, combinação. Princípio de inclusão e exclusão. Funções geradoras. Partição de um inteiro. Relações de recorrência. O princípio da casa dos pombos. Noções de teoria dos grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99040',
			obligatory: true
		},
		'MA811': {
			code: 'MA811',
			name: 'Cultura Matemática I',
			ementa: 'Participação em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#88AE71',
			obligatory: true
		},
		'MS213': {
			code: 'MS213',
			name: 'Introdução à Matemática Computacional',
			ementa: 'Introdução a algoritmos em uma linguagem de programação voltada para Matemática: variáveis, condicionais, laços e funções. Representação de números em ponto flutuante e noções de erros numéricos. Zeros de funções. Métodos diretos para a solução de sistemas lineares. Quadrados mínimos lineares. Interpolação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: '#8D83A1',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#40D99D',
			obligatory: true
		},
		'MA224': {
			code: 'MA224',
			name: 'Resolução de Problemas Matemáticos',
			ementa: 'Resolução de problemas matemáticos nem sempre elementares, utilizando matemática elementar. Os problemas propostos abordarão os seguintes tópicos: proporcionalidade, funções de primeiro e segundo grau, áreas e volumes, funções exponenciais e logarítmicas, Teorema de Pitágoras, trigonometria e aplicações, combinatória e probabilidade.Discussão e reflexão sobre como apresentar e orientar alunos da escola básica na resolução de problemas. Preparação de listas de exercícios e avaliações para o ensino básico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA420'],
			color: '#D240D9',
			obligatory: true
		},
		'MA312': {
			code: 'MA312',
			name: 'Modelagem Matemática e Equações Diferenciais',
			ementa: 'Equações diferenciais de 1ª ordem: equações separáveis, modelos básicos: dinâmica de populações, estabilidade, resfriamento de um corpo. Equações diferenciais de 2ª ordem, modelos básicos; dinâmica de uma partícula, oscilador harmônico, campos centrais de forças. Transformada de Laplace. Teoria básica de sistemas de equações diferenciais: equações algébricas, autovalores, autovetores; sistemas lineares homogêneos com coeficientes constantes; sistemas lineares não homogêneos; variação dos parâmetros; sistemas não lineares; modelos básicos: o pêndulo, o modelo predador-presa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MA211', 'MA327'],
			color: '#67A4BD',
			obligatory: true
		},
		'MA553': {
			code: 'MA553',
			name: 'Teoria Aritmética dos Números',
			ementa: 'Estruturas algébricas (operações binárias, grupos, anéis e corpos). Axiomas de Peano e construção do anel dos números inteiros e racionais. Outros exemplos de anéis e corpos (polinômios, corpos quadráticos, inteiros de Gauss, Zm). Domínios euclideanos. Representação de números inteiros em bases diversas. Máximo divisor comum, mínimo múltiplo comum e o Algoritmo de Euclides. Elementos irredutíveis e primos e critérios de divisibilidade. Domínios principais, fatoriais e o teorema fundamental da aritmética. Equações diofantinas de grau um. Sistemas residuais, congruências lineares e o teorema chinês do resto. Os teoremas de Euler e Wilson. Congruências de grau dois, símbolos de Legendre e Jacobi e Lei da Reciprocidade Quadrática. Ternas pitagóricas e números que podem ser escritos como soma de dois quadrados. Equações diofantinas notáveis. Ordem multiplicativa e raízes primitivas. Noções de criptografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#40C5D9',
			obligatory: true
		},
		'MA812': {
			code: 'MA812',
			name: 'Cultura Matemática II',
			ementa: 'Participação em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#88AE71',
			obligatory: true
		},
		'EL684': {
			code: 'EL684',
			name: 'Educação Matemática Escolar II',
			ementa: 'O objetivo deste curso é promover uma problematização multidimensional do conhecimento matemático escolar na perspectiva da Educação Matemática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['EL284'],
			color: '#82D940',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#40D99D',
			obligatory: true
		},
		'MA740': {
			code: 'MA740',
			name: 'Matemática do Ensino Médio para Professores I',
			ementa: 'Revisão e aprofundamento do conteúdo de funções, combinatória e probabilidade no currículo de matemática do ensino básico. Desenvolvimento de atividades envolvendo os conceitos abordados com vistas ao tratamento para o ensino dos mesmos na escola básica. Conjuntos. Números naturais, reais. Progressões. Funções: polinomiais, exponencial, logarítmica; gráficos, crescimento, taxa de variação. Trigonometria. Combinatória, permutações e combinações; o triângulo aritmético, o binômio de Newton. Probabilidade. Médias e o princípio das gavetas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA450'],
			color: '#D9B740',
			obligatory: true
		},
		'ME951': {
			code: 'ME951',
			name: 'Estatística e Probabilidade I',
			ementa: 'Análise exploratória de dados; noções de amostragem e planejamento de experimentos. Cálculo de probabilidades: probabilidade condicional, independência, teorema de Bayes. Variável aleatória: função de probabilidade, função de distribuição, momentos. Princípios de contagem. Modelos discretos: binomial, geométrico, Pascal, hipergeométrico, Poisson. Modelos contínuos: uniforme, normal, exponencial, gamma, beta. Relações entre algumas distribuições.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D94068',
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
		'EL883': {
			code: 'EL883',
			name: 'Práticas Pedagógicas em Matemática',
			ementa: 'O objetivo deste curso é promover estudos e investigações da atividade pedagógica em Matemática na escola.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94090',
			obligatory: true
		},
		'MA673': {
			code: 'MA673',
			name: 'Elementos de Álgebra',
			ementa: 'Grupos, Teorema de Lagrange e Teoremas de Isomorfismo. Exemplos: grupos cíclicos, simétricos e diedrais, grupos de transformações lineares (SL(n), O (n)). Classificação dos grupos abelianos finitamente gerados. Ações de grupos em conjuntos, órbitas e contagem, classes de conjugação. Corpo de frações e localização. Números algébricos e transcendentes. Característica de um corpo. Corpos finitos. Polinômios simétricos. Teorema fundamental da álgebra. Fórmulas de Newton. Aplicações. Relações entre raízes e coeficientes de um polinômio.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA553'],
			color: '#40C5D9',
			obligatory: true
		},
		'MA752': {
			code: 'MA752',
			name: 'História da Matemática',
			ementa: 'Tópicos de história da matemática tendo em vista a formação de professores de matemática para a escola básica: Pitágoras, a Geometria grega e a teoria dos números; a Matemática grega antes de Euclides; a geometria pré-euclidiana; a Matemática grega depois de Euclides; Arquimedes, o desenvolvimento das ideias da Álgebra, números complexos e funções. A matemática do século XVII. Matemática e Mecânica. História moderna: geometria diferencial e não-euclidiana, topologia e combinatória. Criação de texto. História da Educação Matemática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#8D83A1',
			obligatory: true
		},
		'MA840': {
			code: 'MA840',
			name: 'Matemática do Ensino Médio para Professores II',
			ementa: 'Revisão e aprofundamento do conteúdo de geometria e álgebra no currículo de matemática do ensino fundamental e médio. Desenvolvimento de atividades e resolução de problemas em situações de ensino envolvendo os conceitos abordados com vistas ao tratamento para o ensino dos mesmos na educação básica. Geometria analítica plana e espacial. Poliedros, sólidos, volumes e áreas, superfícies e sólidos de revolução. Sistemas de equações lineares, matrizes e determinantes. Equações algébricas e números complexos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA450'],
			color: '#40D975',
			obligatory: true
		},
		'MA901': {
			code: 'MA901',
			name: 'Estágio Supervisionado I',
			ementa: 'Elaboração, planejamento e execução de atividades de ensino de matemática, seguida de análise e reestruturação das mesmas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA440'],
			color: '#4075D9',
			obligatory: true
		},
		'MA225': {
			code: 'MA225',
			name: 'Análise de Livros e Materiais Didáticos de Matemática',
			ementa: 'Exame crítico de livros e/ou materiais didáticos disponíveis para ensino fundamental e médio, analisando-os em relação à adequação de conteúdo e linguagem, riqueza de problemas propostos e exercícios. Preparação de textos para o ensino de matemática na escola básica, incluindo listas de exercícios e avaliações.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA420'],
			color: '#404DD9',
			obligatory: true
		},
		'MA705': {
			code: 'MA705',
			name: 'Currículo e Didática da Matemática: Teoria e Prática',
			ementa: 'O currículo de matemática do ensino básico. Planejamento de disciplinas. Preparação de aula (definição e revisão de conteúdos prévios, estratégias de apresentação em sala, escolha de exemplos, lição de casa). Acessórios didáticos. Preparação de listas de exercícios e atividades de casa. Avaliação em matemática. Dificuldades de aprendizagem dos alunos da escola básica. Educação colaborativa e adaptada. Orientação para resolução de problemas. Aulas práticas: tutoria com os alunos da MA105 sob supervisão docente.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA440'],
			color: '#409DD9',
			obligatory: true
		},
		'MA813': {
			code: 'MA813',
			name: 'Cultura Matemática III',
			ementa: 'Participaçao em seminários, palestras, conferências e outras atividades de enriquecimento do universo cultural matemático.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EL284', 'MA211'],
			color: '#88AE71',
			obligatory: true
		},
		'MA902': {
			code: 'MA902',
			name: 'Estágio Supervisionado II',
			ementa: 'Elaboração, planejamento e execução de atividades de ensino de matemática, seguida de análise e reestruturação das mesmas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA440'],
			color: '#5AD940',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
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
