const catalogue = {
	totalCredits: 160,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AC109', 'AC110', 'AC115', 'AC129', 'AC133', 'AC134', 'AC218', 'AC316']
		},
		'sem-2': {
			id: '2',
			subjects: ['AC209', 'AC210', 'AC211', 'AC214', 'AC215', 'AC233', 'AC234', 'AC315']
		},
		'sem-3': {
			id: '3',
			subjects: ['AC105', 'AC331', 'AC333', 'AC334', 'AC340', 'AC415', 'AC890']
		},
		'sem-4': {
			id: '4',
			subjects: ['AC120', 'AC205', 'AC317', 'AC414', 'AC434', 'AC440', 'AC441']
		},
		'sem-5': {
			id: '5',
			subjects: ['AC160', 'AC321', 'AC555', 'AC557']
		},
		'sem-6': {
			id: '6',
			subjects: ['AC121', 'AC260', 'AC657', 'AC666']
		},
		'sem-7': {
			id: '7',
			subjects: ['AC360', 'AC757', 'AC777', 'ELET4']
		},
		'sem-8': {
			id: '8',
			subjects: ['AC857', 'AC887', 'AC888', 'ELET6']
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
		'AC110': {
			code: 'AC110',
			name: 'Improvisação Teatral',
			ementa: 'Introdução à improvisação teatral, introduzindo o aluno na prática do jogo cênico, com todos os elementos constituintes da cena teatral. O silêncio, a palavra e o jogo como eixos norteadores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'AC115': {
			code: 'AC115',
			name: 'Formas do Teatro Ocidental I',
			ementa: 'Estudo de referências fundamentais do Teatro Ocidental, incluindo Antiguidade Grega, Teatro Medieval e Teatro Elizabetano.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC129': {
			code: 'AC129',
			name: 'Formas Espetaculares e Cultura Popular Brasileira I',
			ementa: 'Estudo das relações existentes entre a cultura popular brasileira, especialmente os folguetos ou danças dramáticas, e o teatro enquanto forma espetacular e enquanto arte que auxiliou na configuração da nacionalidade brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC133': {
			code: 'AC133',
			name: 'Artes do Corpo I',
			ementa: 'Estudo experiencial dos fundamentos do corpo cênico visando a articulação corpo-sujeito-imaginário. Desenvolvimento da consciência corporal e reconhecimento das ferramentas expressivas do corpo-sujeito. Revisão de conhecimentos sobre anatomia humana.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC134': {
			code: 'AC134',
			name: 'Artes da Voz I',
			ementa: 'Desenvolvimento da percepção e investigação da produção da voz para criação cênica. Revisão de conhecimentos sobre anatomia humana.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
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
		'AC316': {
			code: 'AC316',
			name: 'Estudos de Dramaturgia',
			ementa: 'Leituras e análises de textos consagrados da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC209': {
			code: 'AC209',
			name: 'Música e Ritmo II',
			ementa: 'Aprofundamento no estudo prático e teórico dos principais elementos da linguagem musical. Primeira abordagem da voz cantada.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC109']
		},
		'AC210': {
			code: 'AC210',
			name: 'Improvisação Teatral II',
			ementa: 'Aprofundamento dos procedimentos trabalhados na disciplina Improvisação Teatral.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AC110']
		},
		'AC211': {
			code: 'AC211',
			name: 'Teatro Latino-Americano I',
			ementa: 'Reflexão sobre a complexidade do fenômeno teatral latino-americano no contexto histórico, socioeconômico e cultural da região.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC214': {
			code: 'AC214',
			name: 'Linguagens Circenses',
			ementa: 'Conhecer as linguagens circenses de maneira ampla, em especial as brasileiras, incluindo não somente as práticas acrobáticas, de equilíbrio e de palhaço, como também o circo-teatro e o melodrama circenses nacionais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC215': {
			code: 'AC215',
			name: 'Formas do Teatro Ocidental II',
			ementa: 'Estudo de referências fundamentais do Teatro Ocidental, incluindo o gênero dramático e suas crises e derivações até o começo do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC115']
		},
		'AC233': {
			code: 'AC233',
			name: 'Artes do Corpo II',
			ementa: 'Ferramentas básicas de composição: fatores de movimento, partitura corporal, narrativa gestual. Investigação de procedimentos para a composição de corpos ficcionais. Estudos do corpo como significação poética. Revisão de conhecimentos sobre anatomia humana.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC133']
		},
		'AC234': {
			code: 'AC234',
			name: 'Artes da Voz II',
			ementa: 'Desenvolver a compreensão do discurso cênico, a partir da integração corpo-voz-movimento e suas possibilidades expressivas, em diferentes recortes de atuação. Revisão de conhecimentos sobre anatomia humana.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC134']
		},
		'AC315': {
			code: 'AC315',
			name: 'Teatro Brasileiro I',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC105': {
			code: 'AC105',
			name: 'Canto para o Ator I',
			ementa: 'Desenvolvimento das potencialidades musicais do aluno através do canto individual e do canto coral como elemento de qualificação para o trabalho do ator.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC109', 'AC209']
		},
		'AC331': {
			code: 'AC331',
			name: 'Corpo e Teatralidades Brasileiras I',
			ementa: 'Experiência prática de teatralidades presentes na oralidade popular brasileira. O ponto de vista do artista.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200']
		},
		'AC333': {
			code: 'AC333',
			name: 'Artes do Corpo III',
			ementa: 'Desenvolver a compreensão do discurso cênico, a partir do corpo em movimento e suas possibilidades expressivas, em diferentes recortes de atuação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC233']
		},
		'AC334': {
			code: 'AC334',
			name: 'Artes da Voz III',
			ementa: 'Desenvolver a compreensão do discurso cênico, a partir da integração corpo-voz e suas possibilidades expressivas, em diferentes recortes de atuação, com foco na questão da palavra cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC234']
		},
		'AC340': {
			code: 'AC340',
			name: 'Princípios da Ação Cênica',
			ementa: 'Estudo do conceito de ação física em seus aspectos constitutivos. Exercícios cênicos.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200']
		},
		'AC415': {
			code: 'AC415',
			name: 'Teatro Brasileiro II',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história recente do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC315']
		},
		'AC890': {
			code: 'AC890',
			name: 'Metodologia e Criação em Artes Cênicas',
			ementa: 'Abordagem de processos de pesquisa e criação no teatro contemporâneo.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
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
		'AC205': {
			code: 'AC205',
			name: 'Canto para o Ator II',
			ementa: 'Desenvolvimento das potencialidades musicais do aluno através do canto individual e do canto coral como elemento de qualificação para o trabalho do ator.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC105']
		},
		'AC317': {
			code: 'AC317',
			name: 'Estudos de Cenografia e Figurino',
			ementa: 'Investigar os componentes cênicos cenografia e indumentária visando sua aplicação nas teatralidades contemporâneas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200']
		},
		'AC414': {
			code: 'AC414',
			name: 'Formas do Teatro Oriental',
			ementa: 'Estudo de tradições cênicas Asiáticas e desdobramentos contemporâneos. Abordagem de diálogos com artistas e pesquisadores Ocidentais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC434': {
			code: 'AC434',
			name: 'Artes da Voz IV',
			ementa: 'Exercícios de criação de leituras encenadas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC334']
		},
		'AC440': {
			code: 'AC440',
			name: 'Linguagem da Ação Cênica',
			ementa: 'Desenvolvimento da ação física na construção da cena. Estudo da ação física nas diversas poéticas.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AC340']
		},
		'AC441': {
			code: 'AC441',
			name: 'Atuação e Mídias',
			ementa: 'Estudos sobre a atuação na linguagem audiovisual.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC340']
		},
		'AC160': {
			code: 'AC160',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AC321': {
			code: 'AC321',
			name: 'Produção Teatral',
			ementa: 'Estudos técnicos sobre organização e gestão de obras artísticas. Relação da obra de arte com o mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC555': {
			code: 'AC555',
			name: 'Projeto Integrado de Criação Cênica I',
			ementa: 'Exercício de montagem cênica a partir de uma fonte não dramatúrgica, seja ela literária, iconográfica ou da tradição oral. Aprendizado de práticas de escrita cênica. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['AA200']
		},
		'AC557': {
			code: 'AC557',
			name: 'Estudos Teóricos no Processo de Criação I',
			ementa: 'Estudar teorias pertinentes à criação do Projeto Integrado de Criação Cênica I, isto é, que fundamentem a elaboração do signo cênico tendo elementos não dramáticos como ponto de partida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AC121': {
			code: 'AC121',
			name: 'Práticas de Ação Teatral na Comunidade I',
			ementa: 'As possibilidades de ação teatral em comunidades: análise e estudo de casos existentes; estudo da criação de caráter teatral a partir da interação do indivíduo, ou grupo de artistas, com uma dada comunidade. Planejamento e sondagem em campo de possíveis ações, com viés pedagógicos e/ou criação artística.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AC260': {
			code: 'AC260',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AC657': {
			code: 'AC657',
			name: 'Estudos Teóricos no Processo de Criação II',
			ementa: 'Estudar teorias pertinentes à criação do Projeto Integrado de Criação Cênica II, isto é, que fundamentem um espetáculo calcado na narratividade, no épico e/ou na personagem clássica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC557']
		},
		'AC666': {
			code: 'AC666',
			name: 'Projeto Integrado de Criação Cênica II',
			ementa: 'Exercício cênico a partir de texto da tradição dramatúrgica com ênfase na narratividade. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['AC555']
		},
		'AC360': {
			code: 'AC360',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AC757': {
			code: 'AC757',
			name: 'Estudos Teóricos no Processo de Criação III',
			ementa: 'Estudar teorias pertinentes à criação do Projeto Integrado de Criação Cênica III, isto é, que fundamentem o aprendizado sobre a construção da personagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC657']
		},
		'AC777': {
			code: 'AC777',
			name: 'Projeto Integrado de Criação Cênica III',
			ementa: 'Exercício cênico a partir de texto da tradição dramatúrgica com ênfase na linguagem realista. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['AC666']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'AC857': {
			code: 'AC857',
			name: 'Poéticas Cênicas',
			ementa: 'Temas específicos de estudos em poéticas cênicas, abordando a produção teatral e a criação artística em seus aspectos interdisciplinares.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC757']
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
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AC777']
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		}
	}
};

export default catalogue;
