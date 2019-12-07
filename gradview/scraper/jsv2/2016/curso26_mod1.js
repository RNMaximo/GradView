const catalogue = {
	totalCredits: 206,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AC148', 'AC113', 'AC142', 'AC129', 'AC109', 'AC110', 'AC321', 'AC120', 'AC311']
		},
		'sem-2': {
			id: '2',
			subjects: ['AC248', 'AC213', 'AC242', 'AC218', 'AC209', 'AC180', 'AC170', 'AC150', 'AC316', 'AC411']
		},
		'sem-3': {
			id: '3',
			subjects: ['AC305', 'AC320', 'AC511', 'AC340', 'AC317', 'AC315', 'AC420', 'AC331']
		},
		'sem-4': {
			id: '4',
			subjects: ['AC405', 'AC319', 'ELET04', 'AC611', 'AC440', 'AC415', 'AC318']
		},
		'sem-5': {
			id: '5',
			subjects: ['AC556', 'AC555']
		},
		'sem-6': {
			id: '6',
			subjects: ['AC667', 'AC121', 'ELET06', 'AC666']
		},
		'sem-7': {
			id: '7',
			subjects: ['AC778', 'AC777']
		},
		'sem-8': {
			id: '8',
			subjects: ['AC889', 'AC890', 'AC888', 'AC887']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AC001', 'AC002', 'AC003', 'AC004', 'AC105', 'AC112', 'AC143', 'AC160', 'AC161', 'AC205', 'AC212', 'AC219', 'AC221', 'AC229', 'AC243', 'AC260', 'AC261', 'AC270', 'AC280', 'AC325', 'AC350', 'AC360', 'AC361', 'AC370', 'AC425', 'AC431', 'AC460', 'AC461'],
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
			color: '#4679B9',
			obligatory: true
		},
		'AC110': {
			code: 'AC110',
			name: 'Improvisação Teatral',
			ementa: 'Introdução à improvisação teatral, introduzindo o alouno na prática do jogo cênico, com todos os elementos constituintes da cena teatral.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94652',
			obligatory: true
		},
		'AC113': {
			code: 'AC113',
			name: 'Formas Espetaculares no Ocidente',
			ementa: 'Estudo das formas espetaculares ocidentais nos diversos processos de composição cênica: das festas às ritualizações e encenações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98046',
			obligatory: true
		},
		'AC120': {
			code: 'AC120',
			name: 'Tópicos em Estética Teatral',
			ementa: 'Estudo dos fundamentos da estética e da filosofia da arte. Introdução à reflexão analítica e crítica no campo específico do fazer teatral.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#ABB946',
			obligatory: true
		},
		'AC129': {
			code: 'AC129',
			name: 'Formas Espetaculares e Cultura Popular Brasileira I',
			ementa: 'Estudo das relações existentes entre a cultura popular brasileira, especialmente os folguetos ou danças dramáticas, e o teatro enquanto forma espetacular e enquanto arte que auxiliou na configuração da nacionalidade brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#88B946',
			obligatory: true
		},
		'AC142': {
			code: 'AC142',
			name: 'Técnicas Corpóreas: Dança I',
			ementa: 'Introdução aos elementos técnicos da dança, buscando desenvolver no ator a percepção e o domínio corporal na dimensão espacial e temporal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469CB9',
			obligatory: true
		},
		'AC148': {
			code: 'AC148',
			name: 'Elementos Técnicos do Corpo I',
			ementa: 'Desenvolvimento da consciência corporal, privilegiando o reconhecimento da estrutura óssea e muscular, assim como os processos fisiológicos, as estruturas anatômicas e os processos motores envolvidos no movimento.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4684B9',
			obligatory: true
		},
		'AC311': {
			code: 'AC311',
			name: 'Expressão Vocal I',
			ementa: 'Identificação e reconhecimento dos componentes físicos do som vocal. Desenvolvimento desses componentes integrados aos elementos da representação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464AB9',
			obligatory: true
		},
		'AC321': {
			code: 'AC321',
			name: 'Produção Teatral',
			ementa: 'Estudos técnicos sobre organização e gestão de obras artísticas. Relação da obra de arte com o mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7D46B9',
			obligatory: true
		},
		'AC150': {
			code: 'AC150',
			name: 'Improvisação: O Jogo I',
			ementa: 'Introdução ao jogo teatral buscando o desenvolvimento do ator a partir de diferentes dinâmicas relacionais que envolvem o outro, assim como o coletivo.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC110'],
			color: '#B94652',
			obligatory: true
		},
		'AC170': {
			code: 'AC170',
			name: 'Improvisação: O Silêncio I',
			ementa: 'A utilização de um conjunto de procedimentos como instrumento para a expressão do ator, com ênfase nos elementos não-verbais da cena.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC110'],
			color: '#B94652',
			obligatory: true
		},
		'AC180': {
			code: 'AC180',
			name: 'Improvisação: A Palavra I',
			ementa: 'A exploração da palavra como matéria para o desencadeamento do acontecimento cênico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC110'],
			color: '#B94652',
			obligatory: true
		},
		'AC209': {
			code: 'AC209',
			name: 'Música e Ritmo II',
			ementa: 'Estudo de modelos de estrutura musical. Desenvolvimento da percepção rítmica. Contato com instrumentos de percussão para improvisação rítmica, improvisação livre e sua relação com a cena.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC109'],
			color: '#4679B9',
			obligatory: true
		},
		'AC213': {
			code: 'AC213',
			name: 'Formas Espetaculares no Oriente',
			ementa: 'Estudo das formas espetaculares orientais nos diversos processos de composição cênica: das manifestações tradicionais às contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B99C',
			obligatory: true
		},
		'AC218': {
			code: 'AC218',
			name: 'Máscara: Elementos Técnicos de Artes Visuais I',
			ementa: 'Introdução aos elementos técnicos das artes visuais, visando a confecção de adereços cênicos. A máscara no teatro e a dialética do ocultar/revelar. Estudo da máscara facial e aprendizado de técnicas de confecção de máscaras.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4656B9',
			obligatory: true
		},
		'AC242': {
			code: 'AC242',
			name: 'Técnicas Corpóreas: Dança II',
			ementa: 'Aprofundamento dos elementos técnicos da dança: noções de partitura corporal, narrativa gestual e suas possíveis relações com a estrutura musical.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC142'],
			color: '#469CB9',
			obligatory: true
		},
		'AC248': {
			code: 'AC248',
			name: 'Elementos Técnicos do Corpo II',
			ementa: 'Aprofundamento dos estudos realizados em Técnicas do Corpo I, buscando otimização da performance corporal no que diz respeito ao alongamento, força e coordenação motora.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC148'],
			color: '#4684B9',
			obligatory: true
		},
		'AC316': {
			code: 'AC316',
			name: 'Estudos de Dramaturgia',
			ementa: 'Leituras e análises de textos consagrados da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7DB946',
			obligatory: true
		},
		'AC411': {
			code: 'AC411',
			name: 'Expressão Vocal II',
			ementa: 'Identificação e reconhecimento dos elementos materiais da fala. Desenvolvimento desses componentes integrados aos elementos da representação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC311'],
			color: '#464AB9',
			obligatory: true
		},
		'AC305': {
			code: 'AC305',
			name: 'Palavra e Ação I',
			ementa: 'Estudo teórico-prático da palavra como ação, enfatizando seus aspectos semânticos e expressivos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A7',
			obligatory: true
		},
		'AC315': {
			code: 'AC315',
			name: 'Teatro Brasileiro I',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96946',
			obligatory: true
		},
		'AC317': {
			code: 'AC317',
			name: 'Estudos de Cenografia e Figurino',
			ementa: 'Investigar os componentes cênicos cenografia e indumentária visando sua aplicação nas teatralidades contemporâneas.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46B961',
			obligatory: true
		},
		'AC320': {
			code: 'AC320',
			name: 'Formas do Teatro Cômico no Ocidente',
			ementa: 'Estudo dos conceitos do teatro cômico. Análise e interpretação de obras clássicas, modernas e contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5AB946',
			obligatory: true
		},
		'AC331': {
			code: 'AC331',
			name: 'Corpo e Teatralidades Brasileiras I',
			ementa: 'Experiência prática de matrizes da dança e da teatralidade presentes na oralidade popular brasileira. O ponto de vista do artista.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#4E46B9',
			obligatory: true
		},
		'AC340': {
			code: 'AC340',
			name: 'Princípios da Ação Cênica',
			ementa: 'Estudo do conceito de ação física em seus aspectos constitutivos. Exercícios cênicos.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B96D',
			obligatory: true
		},
		'AC420': {
			code: 'AC420',
			name: 'Formas do Teatro Dramático e Derivações',
			ementa: 'Estudo do paradigma dramático e suas reinvenções na cena moderna e contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9465D',
			obligatory: true
		},
		'AC511': {
			code: 'AC511',
			name: 'Expressão Vocal III',
			ementa: 'Identificação e reconhecimento dos componentes físicos da fala. Desenvolvimento desses componentes integrados à ação cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B7B946',
			obligatory: true
		},
		'AC318': {
			code: 'AC318',
			name: 'Estudos de Direção Teatral',
			ementa: 'As origens, especificidades e desenvolvimento das estéticas cênicas matriciais. Características de discursos cênicos empreendidos na contemporaneidade. Elaboração e estudo de projeto de direção de obra curta.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9468C',
			obligatory: true
		},
		'AC319': {
			code: 'AC319',
			name: 'Formas do Teatro Trágico no Ocidente',
			ementa: 'Estudo dos conceitos e das formas do teatro trágico. Análise e interpretação de obras clássicas, modernas e contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99846',
			obligatory: true
		},
		'AC405': {
			code: 'AC405',
			name: 'Palavra e Ação II',
			ementa: 'Estudo teórico-prático da palavra como ação, utilizando a tradição dramatúrgica como matriz geradora de exercícios de linguagem cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC305'],
			color: '#46B9A7',
			obligatory: true
		},
		'AC415': {
			code: 'AC415',
			name: 'Teatro Brasileiro II',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história recente do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC315'],
			color: '#B96946',
			obligatory: true
		},
		'AC440': {
			code: 'AC440',
			name: 'Linguagem da Ação Cênica',
			ementa: 'Desenvolvimento da ação física na construção da cena. Estudo da ação física nas diversas poéticas.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B9B3',
			obligatory: true
		},
		'AC611': {
			code: 'AC611',
			name: 'Expressão Vocal IV',
			ementa: 'Exploração dos componentes expressivos da voz na elaboração do personagem.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#6546B9',
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
		'AC555': {
			code: 'AC555',
			name: 'Projeto Integrado de Criação Cênica I',
			ementa: 'Exercício de montagem cênica a partir de uma fonte não dramatúrgica, seja ela literária, iconográfica ou da tradição oral. Aprendizado de práticas de escrita cênica. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:4, D:0, HS:20, SL:16, C:20},
			requisitos: ['AA200'],
			color: '#B94675',
			obligatory: true
		},
		'AC556': {
			code: 'AC556',
			name: 'Estudos Teatrais I: Semiologias da Cena',
			ementa: 'Estudos das propriedades específicas da cena, seus sistemas significantes e sua organização no fenômeno teatral, voltados para a função do actante. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#AB46B9',
			obligatory: true
		},
		'AC121': {
			code: 'AC121',
			name: 'Práticas de Ação Teatral na Comunidade I',
			ementa: 'As possibilidades de ação teatral em comunidades: análise e estudo de casos existentes; estudo da criação de caráter teatral a partir da interação do indivíduo, ou grupo de artistas, com uma dada comunidade. Planejamento e sondagem em campo de possíveis ações, com viés pedagógicos e/ou criação artística.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46A7B9',
			obligatory: true
		},
		'AC666': {
			code: 'AC666',
			name: 'Projeto Integrado de Criação Cênica II',
			ementa: 'Exercício cênico a partir de texto da tradição dramatúrgica com ênfase na narratividade. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:4, D:0, HS:20, SL:16, C:20},
			requisitos: ['AA200'],
			color: '#46B94A',
			obligatory: true
		},
		'AC667': {
			code: 'AC667',
			name: 'Estudos Teatrais II: A Narratividade no Tempo',
			ementa: 'Estudo de aspectos teóricos e históricos relacionados à narratividade no teatro (o texto e a cena). Esta disciplina contempla questões pertinentes ao PICC II.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC556'],
			color: '#AB46B9',
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
		'AC777': {
			code: 'AC777',
			name: 'Projeto Integrado de Criação Cênica III',
			ementa: 'Exercício cênico a partir de texto da tradição dramatúrgica com ênfase na linguagem realista. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:4, D:0, HS:20, SL:16, C:20},
			requisitos: ['AA200'],
			color: '#B946AF',
			obligatory: true
		},
		'AC778': {
			code: 'AC778',
			name: 'Estudos Teatrais III: A Questão do Personagem',
			ementa: 'Estudo do conceito de personagem em diversas formas teatrais; relação entre o processo de criação da cena e a composição dos aspectos individualizantes do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC667'],
			color: '#AB46B9',
			obligatory: true
		},
		'AC887': {
			code: 'AC887',
			name: 'Memorial',
			ementa: 'Relato do processo de formação artística do aluno no decorrer do curso com orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A0B946',
			obligatory: true
		},
		'AC888': {
			code: 'AC888',
			name: 'Projeto Integrado de Criação Cênica IV',
			ementa: 'Projeto de montagem cênica proposto pelos formandos, em qualquer gênero, estilo ou tendência estética, orientado por um ou mais professores, com apresentação pública final.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AA200'],
			color: '#B746B9',
			obligatory: true
		},
		'AC889': {
			code: 'AC889',
			name: 'Estudos Teatrais IV: Poéticas Cênicas',
			ementa: 'Temas específicos de estudos em poéticas cênicas, abordando a produção teatral e a criação artística em seus aspectos interdisciplinares.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC778'],
			color: '#AB46B9',
			obligatory: true
		},
		'AC890': {
			code: 'AC890',
			name: 'Metodologia e Criação em Artes Cênicas',
			ementa: 'Problematização dos processos de pesquisa e criação no fazer teatral, fornecendo recursos para os projetos desenvolvidos no PICC IV.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'AC001': {
			code: 'AC001',
			name: 'Laboratório de Prática Teatral: Interpretação',
			ementa: 'Elaboração de exercícios cênicos integrando os procedimentos desenvolvidos nas disciplinas práticas anteriores. Relação do sujeito atuante com a construção cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9AF46',
			obligatory: false
		},
		'AC002': {
			code: 'AC002',
			name: 'Laboratório de Prática Teatral: Direção',
			ementa: 'Concepção e prática de direção de espetáculo teatral de curta duração. Planejamento do processo de criação e montagem. A produção de sentido no discurso cênico a partir dos diversos elementos componentes do texto espetacular.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7146B9',
			obligatory: false
		},
		'AC003': {
			code: 'AC003',
			name: 'Laboratório de Prática Teatral: Dramaturgia',
			ementa: 'Elaboração de dramaturgias teatrais. Integração do texto à experimentação cênica. Instrumentalização do aluno para a construção ficcional.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B3B9',
			obligatory: false
		},
		'AC004': {
			code: 'AC004',
			name: 'Laboratório de Prática Teatral: Cenografia e Figurino',
			ementa: 'Processos de criação e execução em cenografia e figurino. Desenvolvimento da percepção espacial e visual e sua relação com os elementos plásticos que compõem a cena.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9A346',
			obligatory: false
		},
		'AC105': {
			code: 'AC105',
			name: 'Canto para o Ator I',
			ementa: 'Desenvolvimento das potencialidades musicais do aluno através do canto individual e do canto coral como elemento de qualificação para o trabalho do ator.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#466DB9',
			obligatory: false
		},
		'AC112': {
			code: 'AC112',
			name: 'Técnicas Circenses I',
			ementa: 'Treinamento das técnicas básicas de acrobacia e malabarismo. Estudo das modalidades de equilíbrio.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B979',
			obligatory: false
		},
		'AC143': {
			code: 'AC143',
			name: 'Técnicas Corpóreas: Luta I',
			ementa: 'Introdução aos elementos técnicos de uma luta ou arte marcial enfatizando os aspectos lúdicos presentes no jogo de combate.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98C46',
			obligatory: false
		},
		'AC160': {
			code: 'AC160',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#65B946',
			obligatory: false
		},
		'AC161': {
			code: 'AC161',
			name: 'Tópicos em Criação Cênica I',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#B94698',
			obligatory: false
		},
		'AC205': {
			code: 'AC205',
			name: 'Canto para o Ator II',
			ementa: 'Estudo das diferentes funções do canto na cena a partir de diversas poéticas teatrais. Articulação entre a palavra cantada e a palavra falada.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#4690B9',
			obligatory: false
		},
		'AC212': {
			code: 'AC212',
			name: 'Técnicas Circenses II',
			ementa: 'Aperfeiçoamento das modalidades estudadas em Técnicas Circenses I. Prática de exercícios coletivos e composição de partituras cênicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#5A46B9',
			obligatory: false
		},
		'AC219': {
			code: 'AC219',
			name: 'Estética Teatral: Dramaturgia Moderna e Contemporânea',
			ementa: 'Abordagem de diferentes concepções e práticas dramatúrgicas a partir da modernidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B990',
			obligatory: false
		},
		'AC221': {
			code: 'AC221',
			name: 'Práticas de Ação Teatral na Comunidade II',
			ementa: 'O compromisso e as ações do artista de teatro em interação com a comunidade. Criação e experimentação de práticas específicas de ação teatral junto à comunidade, com apresentação de resultado final.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AC121'],
			color: '#46A7B9',
			obligatory: false
		},
		'AC229': {
			code: 'AC229',
			name: 'Formas Espetaculares e Cultura Popular Brasileira II',
			ementa: 'Continuidade dos estudos empreendidos na AC129 de forma a elaborar um exercício cênico de rua que envolva a cultura popular brasileira.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC129'],
			color: '#88B946',
			obligatory: false
		},
		'AC243': {
			code: 'AC243',
			name: 'Técnicas Corpóreas: Luta II',
			ementa: 'Utilização de elementos do jogo de combate em situações de conflito dramático.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC143'],
			color: '#B98C46',
			obligatory: false
		},
		'AC260': {
			code: 'AC260',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94680',
			obligatory: false
		},
		'AC261': {
			code: 'AC261',
			name: 'Tópicos em Criação Cênica II',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#A046B9',
			obligatory: false
		},
		'AC270': {
			code: 'AC270',
			name: 'Improvisação: O Silêncio II',
			ementa: 'Aprofundamento dos procedimentos desenvolvidos na disciplina Improvisação: O Silêncio I, aplicados à construção da cena.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC170'],
			color: '#B94652',
			obligatory: false
		},
		'AC280': {
			code: 'AC280',
			name: 'Improvisação: A Palavra II',
			ementa: 'Aprofundamento dos procedimentos desenvolvidos na disciplina Improvisação: A Palavra I, com ênfase na estruturação da cena.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC180'],
			color: '#B94652',
			obligatory: false
		},
		'AC325': {
			code: 'AC325',
			name: 'Danças do Brasil I',
			ementa: 'Iniciação ao estudo de matrizes gestuais de danças brasileiras populares e religiosas. Utilização de recursos específicos da dança na compreensão e expressão desse vocabulário.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:2, D:0, HS:6, SL:2, C:6},
			requisitos: ['AA200'],
			color: '#B97546',
			obligatory: false
		},
		'AC350': {
			code: 'AC350',
			name: 'Análise de Dramaturgia',
			ementa: 'Estudo aprofundado dos elementos presentes nos textos dramáticos. Leitura, análise e debate de peças importantes da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC316'],
			color: '#7DB946',
			obligatory: false
		},
		'AC360': {
			code: 'AC360',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95D46',
			obligatory: false
		},
		'AC361': {
			code: 'AC361',
			name: 'Tópicos em Criação Cênica III',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#46B956',
			obligatory: false
		},
		'AC370': {
			code: 'AC370',
			name: 'Introdução à Pesquisa: Projetos',
			ementa: 'Introdução aos elementos que constituem a pesquisa em arte e à elaboração de projeto na área.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4661B9',
			obligatory: false
		},
		'AC425': {
			code: 'AC425',
			name: 'Danças do Brasil II',
			ementa: 'Aprofundamento no estudo do gestual das danças brasileiras identificadas com a cultura popular brasileira. Investigação dos aspectos de teatralidade presentes nas manifestações.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46B984',
			obligatory: false
		},
		'AC431': {
			code: 'AC431',
			name: 'Corpo e Teatralidades Brasileiras II',
			ementa: 'Realizar um exercício cênico tomando como referência aspectos da dança e da teatralidade na oralidade popular brasileira. O ponto de vista do artista.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B94669',
			obligatory: false
		},
		'AC460': {
			code: 'AC460',
			name: 'Tópicos em Práticas de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95246',
			obligatory: false
		},
		'AC461': {
			code: 'AC461',
			name: 'Tópicos em Criação Cênica IV',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#71B946',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4EB946',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#94B946',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9446B9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8846B9',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946A3',
			obligatory: false
		}
	}
};

export default catalogue;
