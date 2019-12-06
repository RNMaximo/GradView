const catalogue = {
	totalCredits: 189,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AC311', 'AC170', 'AC109', 'AC120', 'AC142', 'AC148', 'AC113', 'AC150', 'AC128']
		},
		'sem-2': {
			id: '2',
			subjects: ['AC411', 'AC213', 'AC218', 'AC209', 'AC242', 'AC248', 'AC316', 'AC250', 'AC180']
		},
		'sem-3': {
			id: '3',
			subjects: ['AC317', 'AC511', 'AC315', 'AC318', 'ELET03', 'AC320', 'AC420', 'AC340']
		},
		'sem-4': {
			id: '4',
			subjects: ['ELET04', 'AC440', 'AC415', 'AC319', 'AC611']
		},
		'sem-5': {
			id: '5',
			subjects: ['AC007', 'AC008', 'AC556', 'AC555']
		},
		'sem-6': {
			id: '6',
			subjects: ['AC009', 'AC010', 'AC667', 'AC666', 'ELET06', 'AC121']
		},
		'sem-7': {
			id: '7',
			subjects: ['AC011', 'AC012', 'AC778', 'AC777', 'AC321']
		},
		'sem-8': {
			id: '8',
			subjects: ['AC887', 'AC890', 'AC889', 'AC888']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['AC001', 'AC002', 'AC003', 'AC004', 'AC105', 'AC112', 'AC143', 'AC160', 'AC205', 'AC212', 'AC221', 'AC228', 'AC243', 'AC260', 'AC270', 'AC280', 'AC310', 'AC350', 'AC360', 'AC410', 'AC460'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AD---', 'AP---', 'AR---', 'CS---', 'MU---'],
		},
	},

	subjects: {
		'AC109': {
			code: 'AC109',
			name: 'Música e Ritmo I',
			ementa: 'Estudo prático e teórico dos principais elementos da linguagem musical. Aspectos rítmicos, melódicos e harmônicos. Treinamento da escuta musical.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B746B9',
			obligatory: true
		},
		'AC113': {
			code: 'AC113',
			name: 'Formas Espetaculares no Ocidente',
			ementa: 'Estudo das formas espetaculares ocidentais nos diversos processos de composição cênica: das festas às ritualizações e encenações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9DB946',
			obligatory: true
		},
		'AC120': {
			code: 'AC120',
			name: 'Tópicos em Estética Teatral',
			ementa: 'Estudo dos fundamentos da estética e da filosofia da arte. Introdução à reflexão analítica e crítica no campo específico do fazer teatral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94653',
			obligatory: true
		},
		'AC128': {
			code: 'AC128',
			name: 'História do Teatro: Formas Espetaculares no Brasil I',
			ementa: 'Estudo, em contexto histórico, das principais manifestações artísticas do Brasil geradas pela cultura popular e de natureza teatral. Pesquisa de várias espécies de danças dramáticas, folguedos e jogos cênicos detectáveis na contemporaneidade. Conceituação de performance, patrimônio imaterial e (re)tradicionalização. Reflexão sobre a identidade expressiva do brasileiro e suas relações com a identidade cênica do ator em processo de formação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B9467A',
			obligatory: true
		},
		'AC142': {
			code: 'AC142',
			name: 'Técnicas Corpóreas: Dança I',
			ementa: 'Introdução aos elementos técnicos da dança, buscando desenvolver no ator a percepção e o domínio corporal na dimensão espacial e temporal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#69B946',
			obligatory: true
		},
		'AC148': {
			code: 'AC148',
			name: 'Elementos Técnicos do Corpo I',
			ementa: 'Desenvolvimento da consciência corporal, privilegiando o reconhecimento da estrutura óssea e muscular, assim como os processos fisiológicos, as estruturas anatômicas e os processos motores envolvidos no movimento.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95346',
			obligatory: true
		},
		'AC150': {
			code: 'AC150',
			name: 'Improvisação: O Jogo I',
			ementa: 'Introdução ao jogo teatral através de seus procedimentos e regras, promovendo o desenvolvimento do ator em sua dinâmica de relação com o outro e na disponibilidade para o jogo coletivo.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B971',
			obligatory: true
		},
		'AC170': {
			code: 'AC170',
			name: 'Improvisação: O Silêncio I',
			ementa: 'A utilização de um conjunto de procedimentos como instrumento para a expressão do ator, com ênfase nos elementos não-verbais da cena.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B97E',
			obligatory: true
		},
		'AC311': {
			code: 'AC311',
			name: 'Expressão Vocal I',
			ementa: 'Identificação e reconhecimento dos componentes físicos do som vocal. Desenvolvimento desses componentes integrados aos elementos da representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4664B9',
			obligatory: true
		},
		'AC180': {
			code: 'AC180',
			name: 'Improvisação: A Palavra I',
			ementa: 'A exploração da palavra como matéria para o desencadeamento do acontecimento cênico.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B96D46',
			obligatory: true
		},
		'AC209': {
			code: 'AC209',
			name: 'Música e Ritmo II',
			ementa: 'Estudo de modelos de estrutura musical. Desenvolvimento da percepção rítmica. Contato com instrumentos de percussão para improvisação rítmica, improvisação livre e sua relação com a cena.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC109'],
			color: '#B746B9',
			obligatory: true
		},
		'AC213': {
			code: 'AC213',
			name: 'Formas Espetaculares no Oriente',
			ementa: 'Estudo das formas espetaculares orientais nos diversos processos de composição cênica: das manifestações tradicionais às contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A146',
			obligatory: true
		},
		'AC218': {
			code: 'AC218',
			name: 'Máscara: Elementos Técnicos de Artes Visuais I',
			ementa: 'Introdução aos elementos técnicos das artes visuais, visando a confecção de adereços cênicos. A máscara no teatro e a dialética do ocultar/revelar. Estudo da máscara facial e aprendizado de técnicas de confecção de máscaras.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946A1',
			obligatory: true
		},
		'AC242': {
			code: 'AC242',
			name: 'Técnicas Corpóreas: Dança II',
			ementa: 'Aprofundamento dos elementos técnicos da dança: noções de partitura corporal, narrativa gestual e suas possíveis relações com a estrutura musical.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC142'],
			color: '#69B946',
			obligatory: true
		},
		'AC248': {
			code: 'AC248',
			name: 'Elementos Técnicos do Corpo II',
			ementa: 'Aprofundamento dos estudos realizados em Técnicas do Corpo I, buscando otimização da performance corporal no que diz respeito ao alongamento, força e coordenação motora.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC148'],
			color: '#B95346',
			obligatory: true
		},
		'AC250': {
			code: 'AC250',
			name: 'Improvisação: O Jogo II',
			ementa: 'Aprofundamento dos elementos estudados na disciplina Improvisação: O Jogo I, desenvolvendo procedimentos e regras do jogo teatral.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AC150'],
			color: '#46B971',
			obligatory: true
		},
		'AC316': {
			code: 'AC316',
			name: 'Estudos de Dramaturgia',
			ementa: 'Leituras e análises de textos consagrados da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97A46',
			obligatory: true
		},
		'AC411': {
			code: 'AC411',
			name: 'Expressão Vocal II',
			ementa: 'Identificação e reconhecimento dos elementos materiais da fala. Desenvolvimento desses componentes integrados aos elementos da representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC311'],
			color: '#4664B9',
			obligatory: true
		},
		'AC315': {
			code: 'AC315',
			name: 'Teatro Brasileiro I',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6946B9',
			obligatory: true
		},
		'AC317': {
			code: 'AC317',
			name: 'Estudos de Cenografia e Figurino',
			ementa: 'Investigar as teatralidades contemporâneas através dos componentes cênicos: cenografia e indumentária.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#5C46B9',
			obligatory: true
		},
		'AC318': {
			code: 'AC318',
			name: 'Estudos de Direção Teatral',
			ementa: 'As origens, especificidades e desenvolvimento das estéticas cênicas matriciais. Características de discursos cênicos empreendidos na contemporaneidade. Elaboração e estudo de projeto de direção de obra curta.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B7B946',
			obligatory: true
		},
		'AC320': {
			code: 'AC320',
			name: 'Formas do Teatro Cômico no Ocidente',
			ementa: 'Estudo dos conceitos do teatro cômico. Análise e interpretação de obras clássicas, modernas e contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9046B9',
			obligatory: true
		},
		'AC340': {
			code: 'AC340',
			name: 'Princípios da Ação Cênica',
			ementa: 'Estudo do conceito de ação física em seus aspectos constitutivos. Exercícios cênicos.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#46B9A5',
			obligatory: true
		},
		'AC420': {
			code: 'AC420',
			name: 'Formas do Teatro Dramático e Derivações',
			ementa: 'Estudo do paradigma dramático e suas reinvenções na cena moderna e contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B998',
			obligatory: true
		},
		'AC511': {
			code: 'AC511',
			name: 'Expressão Vocal III',
			ementa: 'Identificação e reconhecimento dos componentes físicos da fala. Desenvolvimento desses componentes integrados à ação cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B98746',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AC319': {
			code: 'AC319',
			name: 'Formas do Teatro Trágico no Ocidente',
			ementa: 'Estudo dos conceitos e das formas do teatro trágico. Análise e interpretação de obras clássicas, modernas e contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9466D',
			obligatory: true
		},
		'AC415': {
			code: 'AC415',
			name: 'Teatro Brasileiro II',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história recente do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC315'],
			color: '#6946B9',
			obligatory: true
		},
		'AC440': {
			code: 'AC440',
			name: 'Linguagem da Ação Cênica',
			ementa: 'Desenvolvimento da ação física na construção da cena. Estudo da ação física nas diversas poéticas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#B94687',
			obligatory: true
		},
		'AC611': {
			code: 'AC611',
			name: 'Expressão Vocal IV',
			ementa: 'Exploração dos componentes expressivos da voz na elaboração do personagem.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B946AE',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AC007': {
			code: 'AC007',
			name: 'Laboratório de Práticas Corporais I',
			ementa: 'Investigação de procedimentos para a composição do corpo ficcional. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94694',
			obligatory: true
		},
		'AC008': {
			code: 'AC008',
			name: 'Laboratório de Práticas Vocais I',
			ementa: 'Exercícios técnicos e expressivos para a composição vocal na cena. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#467EB9',
			obligatory: true
		},
		'AC555': {
			code: 'AC555',
			name: 'Projeto Integrado de Criação Cênica I',
			ementa: 'Exercício de montagem cênica a partir de uma fonte não dramatúrgica, seja ela literária, iconográfica ou da tradição oral. Aprendizado de práticas de escrita cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:8, O:0, D:0, HS:12, SL:8, C:12},
			requisitos: ['AA200'],
			color: '#8346B9',
			obligatory: true
		},
		'AC556': {
			code: 'AC556',
			name: 'Estudos Teatrais I: Semiologias da Cena',
			ementa: 'Estudos das propriedades específicas da cena, seus sistemas significantes e sua organização no fenômeno teatral, voltados para a função do actante. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#83B946',
			obligatory: true
		},
		'AC009': {
			code: 'AC009',
			name: 'Laboratório de Práticas Corporais II',
			ementa: 'Investigação de procedimentos para a composição de uma dramaturgia corpórea. Esta disciplina contempla questões pertinentes ao PICC II.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AA46B9',
			obligatory: true
		},
		'AC010': {
			code: 'AC010',
			name: 'Laboratório de Práticas Vocais II',
			ementa: 'Exercícios técnicos e expressivos para a composição vocal na cena. Relações entre caracterização da voz e retórica do discurso. Esta disciplina contempla questões pertinentes ao PICC II.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC008'],
			color: '#467EB9',
			obligatory: true
		},
		'AC121': {
			code: 'AC121',
			name: 'Práticas de Ação Teatral na Comunidade I',
			ementa: 'As possibilidades de ação teatral em comunidades: análise e estudo de casos existentes; estudo da criação de caráter teatral a partir da interação do indivíduo, ou grupo de artistas, com uma dada comunidade. Planejamento e sondagem em campo de possíveis ações, com viés pedagógicos e/ou criação artística.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'AC666': {
			code: 'AC666',
			name: 'Projeto Integrado de Criação Cênica II',
			ementa: 'Exercício de montagem com ênfase em aspectos narrativos do discurso cênico.',
			semestre: 1,
			vector: {T:0, P:4, L:8, O:0, D:0, HS:12, SL:8, C:12},
			requisitos: ['AC555'],
			color: '#8346B9',
			obligatory: true
		},
		'AC667': {
			code: 'AC667',
			name: 'Estudos Teatrais II: A Narratividade no Tempo',
			ementa: 'Estudo das noções gerais da narrativa no teatro: a imitação da ação (Mimese) e o relato do narrador (Diége). Investigação de motivos narrativos, da fábula e das articulações possíveis entre a \"história contada\" e o \"discurso contente\". A questão do conflito e do Herói. Esta disciplina oferece suporte ao PICC II, fundamentando tanto a reflexão quanto a prática. O texto teatral utilizado como modelo de análise será o texto encenado no PICC II.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC556'],
			color: '#83B946',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AC011': {
			code: 'AC011',
			name: 'Laboratório de Práticas Corporais III',
			ementa: 'Investigação de procedimentos para a composição do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC009'],
			color: '#AA46B9',
			obligatory: true
		},
		'AC012': {
			code: 'AC012',
			name: 'Laboratório de Práticas Vocais III',
			ementa: 'Exercícios técnicos e expressivos para a composição vocal na cena, focalizando a composição do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC010'],
			color: '#467EB9',
			obligatory: true
		},
		'AC321': {
			code: 'AC321',
			name: 'Produção Teatral',
			ementa: 'Estudos técnicos sobre organização e gestão de obras artísticas. Relação da obra de arte com o mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4671B9',
			obligatory: true
		},
		'AC777': {
			code: 'AC777',
			name: 'Projeto Integrado de Criação Cênica III',
			ementa: 'Exercício de montagem cênica com base em fonte dramatúrgica pertencente ao teatro dramático, ainda que em suas formas críticas ou derivadas. Relação entre o processo de criação da cena e a composição dos aspectos individualizantes do personagem.',
			semestre: 1,
			vector: {T:0, P:4, L:8, O:0, D:0, HS:12, SL:8, C:12},
			requisitos: ['AC666'],
			color: '#8346B9',
			obligatory: true
		},
		'AC778': {
			code: 'AC778',
			name: 'Estudos Teatrais III: A Questão do Personagem',
			ementa: 'Estudo do conceito de personagem em diversas formas teatrais; relação entre o processo de criação da cena e a composição dos aspectos individualizantes do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC667'],
			color: '#83B946',
			obligatory: true
		},
		'AC887': {
			code: 'AC887',
			name: 'Memorial',
			ementa: 'Relato do processo de formação artística do aluno no decorrer do curso com orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AAB946',
			obligatory: true
		},
		'AC888': {
			code: 'AC888',
			name: 'Projeto Integrado de Criação Cênica IV',
			ementa: 'Projeto de montagem cênica proposto pelos formandos, em qualquer gênero, estilo ou tendência estética, orientado por um ou mais professores, com apresentação pública final.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AC777'],
			color: '#8346B9',
			obligatory: true
		},
		'AC889': {
			code: 'AC889',
			name: 'Estudos Teatrais IV: Poéticas Cênicas',
			ementa: 'Temas específicos de estudos em poéticas cênicas, abordando a produção teatral e a criação artística em seus aspectos interdisciplinares.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC778'],
			color: '#83B946',
			obligatory: true
		},
		'AC890': {
			code: 'AC890',
			name: 'Metodologia e Criação em Artes Cênicas',
			ementa: 'Problematização dos processos de pesquisa e criação no fazer teatral, fornecendo recursos para os projetos desenvolvidos no PICC IV.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B957',
			obligatory: true
		},
		'AC001': {
			code: 'AC001',
			name: 'Laboratório de Prática Teatral: Interpretação',
			ementa: 'Elaboração de exercícios cênicos integrando os procedimentos desenvolvidos nas disciplinas práticas anteriores. Relação do sujeito atuante com a construção cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9D46B9',
			obligatory: false
		},
		'AC002': {
			code: 'AC002',
			name: 'Laboratório de Prática Teatral: Direção',
			ementa: 'Concepção e prática de direção de espetáculo teatral de curta duração. Planejamento do processo de criação e montagem. A produção de sentido no discurso cênico a partir dos diversos elementos componentes do texto espetacular.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#90B946',
			obligatory: false
		},
		'AC003': {
			code: 'AC003',
			name: 'Laboratório de Prática Teatral: Dramaturgia',
			ementa: 'Elaboração de dramaturgias teatrais. Integração do texto à experimentação cênica. Instrumentalização do aluno para a construção ficcional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B94A',
			obligatory: false
		},
		'AC004': {
			code: 'AC004',
			name: 'Laboratório de Prática Teatral: Cenografia e Figurino',
			ementa: 'Processos de criação e execução em cenografia e figurino. Desenvolvimento da percepção espacial e visual e sua relação com os elementos plásticos que compõem a cena.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#468BB9',
			obligatory: false
		},
		'AC105': {
			code: 'AC105',
			name: 'Canto para o Ator I',
			ementa: 'Desenvolvimento das potencialidades musicais do aluno através do canto individual e do canto coral como elemento de qualificação para o trabalho do ator.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#5CB946',
			obligatory: false
		},
		'AC112': {
			code: 'AC112',
			name: 'Técnicas Circenses I',
			ementa: 'Treinamento das técnicas básicas de acrobacia e malabarismo. Estudo das modalidades de equilíbrio.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46A5B9',
			obligatory: false
		},
		'AC143': {
			code: 'AC143',
			name: 'Técnicas Corpóreas: Luta I',
			ementa: 'Introdução aos elementos técnicos de uma luta ou arte marcial enfatizando os aspectos lúdicos presentes no jogo de combate.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#76B946',
			obligatory: false
		},
		'AC160': {
			code: 'AC160',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B2B9',
			obligatory: false
		},
		'AC205': {
			code: 'AC205',
			name: 'Canto para o Ator II',
			ementa: 'Estudo das diferentes funções do canto na cena a partir de diversas poéticas teatrais. Articulação entre a palavra cantada e a palavra falada.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#4657B9',
			obligatory: false
		},
		'AC212': {
			code: 'AC212',
			name: 'Técnicas Circenses II',
			ementa: 'Aperfeiçoamento das modalidades estudadas em Técnicas Circenses I. Prática de exercícios coletivos e composição de partituras cênicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#464AB9',
			obligatory: false
		},
		'AC221': {
			code: 'AC221',
			name: 'Práticas de Ação Teatral na Comunidade II',
			ementa: 'O compromisso e as ações do artista de teatro em interação com a comunidade. Criação e experimentação de práticas específicas de ação teatral junto à comunidade, com apresentação de resultado final.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AC121'],
			color: '#B94646',
			obligatory: false
		},
		'AC228': {
			code: 'AC228',
			name: 'Estudos do Teatro no Brasil: Formas Espetaculares no Brasil II',
			ementa: 'Aprofundamento das pesquisas realizadas em Formas Espetaculares no Brasil I. Investigação prática a partir das matrizes estudadas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AC128'],
			color: '#B9467A',
			obligatory: false
		},
		'AC243': {
			code: 'AC243',
			name: 'Técnicas Corpóreas: Luta II',
			ementa: 'Utilização de elementos do jogo de combate em situações de conflito dramático.',
			semestre: 1,
			vector: {T:0, P:0, L:3, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AC143'],
			color: '#76B946',
			obligatory: false
		},
		'AC260': {
			code: 'AC260',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B96046',
			obligatory: false
		},
		'AC270': {
			code: 'AC270',
			name: 'Improvisação: O Silêncio II',
			ementa: 'Aprofundamento dos procedimentos desenvolvidos na disciplina Improvisação: O Silêncio I, aplicados à construção da cena.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AC170'],
			color: '#46B97E',
			obligatory: false
		},
		'AC280': {
			code: 'AC280',
			name: 'Improvisação: A Palavra II',
			ementa: 'Aprofundamento dos procedimentos desenvolvidos na disciplina Improvisação: A Palavra I, com ênfase na estruturação da cena.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AC180'],
			color: '#B96D46',
			obligatory: false
		},
		'AC310': {
			code: 'AC310',
			name: 'Dança: Folclore Brasileiro I',
			ementa: 'Iniciação ao estudo de matrizes gestuais e matrizes de movimento de danças brasileiras de raízes populares, tradicionais e religiosas. Utilização de recursos específicos da dança na compreensão e expressão desse vocabulário.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46B964',
			obligatory: false
		},
		'AC350': {
			code: 'AC350',
			name: 'Análise de Dramaturgia',
			ementa: 'Estudo aprofundado dos elementos presentes nos textos dramáticos. Leitura, análise e debate de peças importantes da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4F46B9',
			obligatory: false
		},
		'AC360': {
			code: 'AC360',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94660',
			obligatory: false
		},
		'AC410': {
			code: 'AC410',
			name: 'Dança: Folclore Brasileiro II',
			ementa: 'Aprofundamento no estudo do gestual e de matrizes das danças brasileiras oriundas de manifestações tradicionais da cultura popular. Investigação dos elementos teatrais presentes nas manifestações. Análise e releitura cênica de uma manifestação específica.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9B2',
			obligatory: false
		},
		'AC460': {
			code: 'AC460',
			name: 'Tópicos em Práticas de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7646B9',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4FB946',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B98B',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9AE46',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B99446',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4698B9',
			obligatory: false
		}
	}
};

export default catalogue;
