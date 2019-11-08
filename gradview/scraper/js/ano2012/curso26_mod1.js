const catalogue = {
	totalCredits: 189,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AC109', 'AC113', 'AC120', 'AC128', 'AC142', 'AC148', 'AC150', 'AC170', 'AC311']
		},
		'sem-2': {
			id: '2',
			subjects: ['AC180', 'AC209', 'AC213', 'AC218', 'AC242', 'AC248', 'AC250', 'AC316', 'AC411']
		},
		'sem-3': {
			id: '3',
			subjects: ['AC315', 'AC317', 'AC318', 'AC320', 'AC340', 'AC420', 'AC511', 'ELET4']
		},
		'sem-4': {
			id: '4',
			subjects: ['AC319', 'AC415', 'AC440', 'AC611', 'ELET4']
		},
		'sem-5': {
			id: '5',
			subjects: ['AC007', 'AC008', 'AC555', 'AC556']
		},
		'sem-6': {
			id: '6',
			subjects: ['AC009', 'AC010', 'AC121', 'AC666', 'AC667', 'ELET4']
		},
		'sem-7': {
			id: '7',
			subjects: ['AC011', 'AC012', 'AC321', 'AC777', 'AC778']
		},
		'sem-8': {
			id: '8',
			subjects: ['AC887', 'AC888', 'AC889', 'AC890']
		}
	},

	subjects: {
		'AC109': {
			code: 'AC109',
			name: 'Música e Ritmo I',
			ementa: 'Estudo prático e teórico dos principais elementos da linguagem musical. Aspectos rítmicos, melódicos e harmônicos. Treinamento da escuta musical.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC113': {
			code: 'AC113',
			name: 'Formas Espetaculares no Ocidente',
			ementa: 'Estudo das formas espetaculares ocidentais nos diversos processos de composição cênica: das festas às ritualizações e encenações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC120': {
			code: 'AC120',
			name: 'Tópicos em Estética Teatral',
			ementa: 'Estudo dos fundamentos da estética e da filosofia da arte. Introdução à reflexão analítica e crítica no campo específico do fazer teatral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC128': {
			code: 'AC128',
			name: 'História do Teatro: Formas Espetaculares no Brasil I',
			ementa: 'Estudo, em contexto histórico, das principais manifestações artísticas do Brasil geradas pela cultura popular e de natureza teatral. Pesquisa de várias espécies de danças dramáticas, folguedos e jogos cênicos detectáveis na contemporaneidade. Conceituação de performance, patrimônio imaterial e (re)tradicionalização. Reflexão sobre a identidade expressiva do brasileiro e suas relações com a identidade cênica do ator em processo de formação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'AC142': {
			code: 'AC142',
			name: 'Técnicas Corpóreas: Dança I',
			ementa: 'Introdução aos elementos técnicos da dança, buscando desenvolver no ator a percepção e o domínio corporal na dimensão espacial e temporal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AC148': {
			code: 'AC148',
			name: 'Elementos Técnicos do Corpo I',
			ementa: 'Desenvolvimento da consciência corporal, privilegiando o reconhecimento da estrutura óssea e muscular, assim como os processos fisiológicos, as estruturas anatômicas e os processos motores envolvidos no movimento.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC150': {
			code: 'AC150',
			name: 'Improvisação: O Jogo I',
			ementa: 'Introdução ao jogo teatral através de seus procedimentos e regras, promovendo o desenvolvimento do ator em sua dinâmica de relação com o outro e na disponibilidade para o jogo coletivo.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'AC170': {
			code: 'AC170',
			name: 'Improvisação: O Silêncio I',
			ementa: 'A utilização de um conjunto de procedimentos como instrumento para a expressão do ator, com ênfase nos elementos não-verbais da cena.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'AC311': {
			code: 'AC311',
			name: 'Expressão Vocal I',
			ementa: 'Identificação e reconhecimento dos componentes físicos do som vocal. Desenvolvimento desses componentes integrados aos elementos da representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC180': {
			code: 'AC180',
			name: 'Improvisação: A Palavra I',
			ementa: 'A exploração da palavra como matéria para o desencadeamento do acontecimento cênico.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'AC209': {
			code: 'AC209',
			name: 'Música e Ritmo II',
			ementa: 'Estudo de modelos de estrutura musical. Desenvolvimento da percepção rítmica. Contato com instrumentos de percussão para improvisação rítmica, improvisação livre e sua relação com a cena.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC109']
		},
		'AC213': {
			code: 'AC213',
			name: 'Formas Espetaculares no Oriente',
			ementa: 'Estudo das formas espetaculares orientais nos diversos processos de composição cênica: das manifestações tradicionais às contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC218': {
			code: 'AC218',
			name: 'Máscara: Elementos Técnicos de Artes Visuais I',
			ementa: 'Introdução aos elementos técnicos das artes visuais, visando a confecção de adereços cênicos. A máscara no teatro e a dialética do ocultar/revelar. Estudo da máscara facial e aprendizado de técnicas de confecção de máscaras.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC242': {
			code: 'AC242',
			name: 'Técnicas Corpóreas: Dança II',
			ementa: 'Aprofundamento dos elementos técnicos da dança: noções de partitura corporal, narrativa gestual e suas possíveis relações com a estrutura musical.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC142']
		},
		'AC248': {
			code: 'AC248',
			name: 'Elementos Técnicos do Corpo II',
			ementa: 'Aprofundamento dos estudos realizados em Técnicas do Corpo I, buscando otimização da performance corporal no que diz respeito ao alongamento, força e coordenação motora.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC148']
		},
		'AC250': {
			code: 'AC250',
			name: 'Improvisação: O Jogo II',
			ementa: 'Aprofundamento dos elementos estudados na disciplina Improvisação: O Jogo I, desenvolvendo procedimentos e regras do jogo teatral.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AC150']
		},
		'AC316': {
			code: 'AC316',
			name: 'Estudos de Dramaturgia',
			ementa: 'Leituras e análises de textos consagrados da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC411': {
			code: 'AC411',
			name: 'Expressão Vocal II',
			ementa: 'Identificação e reconhecimento dos elementos materiais da fala. Desenvolvimento desses componentes integrados aos elementos da representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC311']
		},
		'AC315': {
			code: 'AC315',
			name: 'Teatro Brasileiro I',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC317': {
			code: 'AC317',
			name: 'Estudos de Cenografia e Figurino',
			ementa: 'Investigar as teatralidades contemporâneas através dos componentes cênicos: cenografia e indumentária.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200']
		},
		'AC318': {
			code: 'AC318',
			name: 'Estudos de Direção Teatral',
			ementa: 'As origens, especificidades e desenvolvimento das estéticas cênicas matriciais. Características de discursos cênicos empreendidos na contemporaneidade. Elaboração e estudo de projeto de direção de obra curta.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AC320': {
			code: 'AC320',
			name: 'Formas do Teatro Cômico no Ocidente',
			ementa: 'Estudo dos conceitos do teatro cômico. Análise e interpretação de obras clássicas, modernas e contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC340': {
			code: 'AC340',
			name: 'Princípios da Ação Cênica',
			ementa: 'Estudo do conceito de ação física em seus aspectos constitutivos. Exercícios cênicos.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ''
		},
		'AC420': {
			code: 'AC420',
			name: 'Formas do Teatro Dramático e Derivações',
			ementa: 'Estudo do paradigma dramático e suas reinvenções na cena moderna e contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC319', 'AC320']
		},
		'AC511': {
			code: 'AC511',
			name: 'Expressão Vocal III',
			ementa: 'Identificação e reconhecimento dos componentes físicos da fala. Desenvolvimento desses componentes integrados à ação cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC411']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'AC319': {
			code: 'AC319',
			name: 'Formas do Teatro Trágico no Ocidente',
			ementa: 'Estudo dos conceitos e das formas do teatro trágico. Análise e interpretação de obras clássicas, modernas e contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC415': {
			code: 'AC415',
			name: 'Teatro Brasileiro II',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história recente do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC315']
		},
		'AC440': {
			code: 'AC440',
			name: 'Linguagem da Ação Cênica',
			ementa: 'Desenvolvimento da ação física na construção da cena. Estudo da ação física nas diversas poéticas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ''
		},
		'AC611': {
			code: 'AC611',
			name: 'Expressão Vocal IV',
			ementa: 'Exploração dos componentes expressivos da voz na elaboração do personagem.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC511']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'AC007': {
			code: 'AC007',
			name: 'Laboratório de Práticas Corporais I',
			ementa: 'Investigação de procedimentos para a composição do corpo ficcional. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AC008': {
			code: 'AC008',
			name: 'Laboratório de Práticas Vocais I',
			ementa: 'Exercícios técnicos e expressivos para a composição vocal na cena. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AC555': {
			code: 'AC555',
			name: 'Projeto Integrado de Criação Cênica I',
			ementa: 'Exercício de montagem cênica a partir de uma fonte não dramatúrgica, seja ela literária, iconográfica ou da tradição oral. Aprendizado de práticas de escrita cênica.',
			semestre: 1,
			vector: {T:0, P:4, L:8, O:0, D:0, HS:12, SL:8, C:12},
			requisitos: ['AA200']
		},
		'AC556': {
			code: 'AC556',
			name: 'Estudos Teatrais I: Semiologias da Cena',
			ementa: 'Estudos das propriedades específicas da cena, seus sistemas significantes e sua organização no fenômeno teatral, voltados para a função do actante. Esta disciplina contempla questões pertinentes ao PICC I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200']
		},
		'AC009': {
			code: 'AC009',
			name: 'Laboratório de Práticas Corporais II',
			ementa: 'Investigação de procedimentos para a composição de uma dramaturgia corpórea. Esta disciplina contempla questões pertinentes ao PICC II.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AC010': {
			code: 'AC010',
			name: 'Laboratório de Práticas Vocais II',
			ementa: 'Exercícios técnicos e expressivos para a composição vocal na cena. Relações entre caracterização da voz e retórica do discurso. Esta disciplina contempla questões pertinentes ao PICC II.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC008']
		},
		'AC121': {
			code: 'AC121',
			name: 'Práticas de Ação Teatral na Comunidade I',
			ementa: 'As possibilidades de ação teatral em comunidades: análise e estudo de casos existentes; estudo da criação de caráter teatral a partir da interação do indivíduo, ou grupo de artistas, com uma dada comunidade. Planejamento e sondagem em campo de possíveis ações, com viés pedagógicos e/ou criação artística.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AC666': {
			code: 'AC666',
			name: 'Projeto Integrado de Criação Cênica II',
			ementa: 'Exercício de montagem com ênfase em aspectos narrativos do discurso cênico.',
			semestre: 1,
			vector: {T:0, P:4, L:8, O:0, D:0, HS:12, SL:8, C:12},
			requisitos: ['AC555']
		},
		'AC667': {
			code: 'AC667',
			name: 'Estudos Teatrais II: A Narratividade no Tempo',
			ementa: 'Estudo das noções gerais da narrativa no teatro: a imitação da ação (Mimese) e o relato do narrador (Diége). Investigação de motivos narrativos, da fábula e das articulações possíveis entre a "história contada" e o "discurso contente". A questão do conflito e do Herói. Esta disciplina oferece suporte ao PICC II, fundamentando tanto a reflexão quanto a prática. O texto teatral utilizado como modelo de análise será o texto encenado no PICC II.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC556']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'AC011': {
			code: 'AC011',
			name: 'Laboratório de Práticas Corporais III',
			ementa: 'Investigação de procedimentos para a composição do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC009']
		},
		'AC012': {
			code: 'AC012',
			name: 'Laboratório de Práticas Vocais III',
			ementa: 'Exercícios técnicos e expressivos para a composição vocal na cena, focalizando a composição do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC010']
		},
		'AC321': {
			code: 'AC321',
			name: 'Produção Teatral',
			ementa: 'Estudos técnicos sobre organização e gestão de obras artísticas. Relação da obra de arte com o mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC777': {
			code: 'AC777',
			name: 'Projeto Integrado de Criação Cênica III',
			ementa: 'Exercício de montagem cênica com base em fonte dramatúrgica pertencente ao teatro dramático, ainda que em suas formas críticas ou derivadas. Relação entre o processo de criação da cena e a composição dos aspectos individualizantes do personagem.',
			semestre: 1,
			vector: {T:0, P:4, L:8, O:0, D:0, HS:12, SL:8, C:12},
			requisitos: ['AC666']
		},
		'AC778': {
			code: 'AC778',
			name: 'Estudos Teatrais III: A Questão do Personagem',
			ementa: 'Estudo do conceito de personagem em diversas formas teatrais; relação entre o processo de criação da cena e a composição dos aspectos individualizantes do personagem. Esta disciplina contempla questões pertinentes ao PICC III.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC667']
		},
		'AC887': {
			code: 'AC887',
			name: 'Memorial',
			ementa: 'Relato do processo de formação artística do aluno no decorrer do curso com orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AC888': {
			code: 'AC888',
			name: 'Projeto Integrado de Criação Cênica IV',
			ementa: 'Projeto de montagem cênica proposto pelos formandos, em qualquer gênero, estilo ou tendência estética, orientado por um ou mais professores, com apresentação pública final.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AC777']
		},
		'AC889': {
			code: 'AC889',
			name: 'Estudos Teatrais IV: Poéticas Cênicas',
			ementa: 'Temas específicos de estudos em poéticas cênicas, abordando a produção teatral e a criação artística em seus aspectos interdisciplinares.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC778']
		},
		'AC890': {
			code: 'AC890',
			name: 'Metodologia e Criação em Artes Cênicas',
			ementa: 'Problematização dos processos de pesquisa e criação no fazer teatral, fornecendo recursos para os projetos desenvolvidos no PICC IV.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		}
	}
};

export default catalogue;
