const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AC109', 'AC110', 'AC115', 'AC123', 'AC129', 'AC218', 'AC316']
		},
		'sem-2': {
			id: '2',
			subjects: ['AC209', 'AC210', 'AC211', 'AC214', 'AC215', 'AC223', 'AC315']
		},
		'sem-3': {
			id: '3',
			subjects: ['AC105', 'AC323', 'AC331', 'AC340', 'AC415', 'AC890']
		},
		'sem-4': {
			id: '4',
			subjects: ['AC120', 'AC205', 'AC317', 'AC414', 'AC423', 'AC440', 'AC441']
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
			subjects: ['AC360', 'AC757', 'AC777', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['AC857', 'AC887', 'AC888', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AD---', 'AP---', 'AR---', 'CS---', 'MU---'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
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
			color: '#D95640',
			obligatory: true
		},
		'AC110': {
			code: 'AC110',
			name: 'Improvisação Teatral',
			ementa: 'Introdução à improvisação teatral, introduzindo o aluno na prática do jogo cênico, com todos os elementos constituintes da cena teatral. O silêncio, a palavra e o jogo como eixos norteadores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94056',
			obligatory: true
		},
		'AC115': {
			code: 'AC115',
			name: 'Formas do Teatro Ocidental I',
			ementa: 'Estudo de referências fundamentais do Teatro Ocidental, incluindo Antiguidade Grega, Teatro Medieval e Teatro Elizabetano.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98340',
			obligatory: true
		},
		'AC123': {
			code: 'AC123',
			name: 'Corpo-Voz I',
			ementa: 'Desenvolvimento da percepção e integração entre corpo, voz e movimento.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#BFD940',
			obligatory: true
		},
		'AC129': {
			code: 'AC129',
			name: 'Formas Espetaculares e Cultura Popular Brasileira I',
			ementa: 'Estudo das relações existentes entre a cultura popular brasileira, especialmente os folguetos ou danças dramáticas, e o teatro enquanto forma espetacular e enquanto arte que auxiliou na configuração da nacionalidade brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94099',
			obligatory: true
		},
		'AC218': {
			code: 'AC218',
			name: 'Máscara: Elementos Técnicos de Artes Visuais I',
			ementa: 'Introdução aos elementos técnicos das artes visuais, visando a confecção de adereços cênicos. A máscara no teatro e a dialética do ocultar/revelar. Estudo da máscara facial e aprendizado de técnicas de confecção de máscaras.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D974',
			obligatory: true
		},
		'AC316': {
			code: 'AC316',
			name: 'Estudos de Dramaturgia',
			ementa: 'Leituras e análises de textos consagrados da dramaturgia ocidental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7BD940',
			obligatory: true
		},
		'AC209': {
			code: 'AC209',
			name: 'Música e Ritmo II',
			ementa: 'Aprofundamento no estudo prático e teórico dos principais elementos da linguagem musical. Primeira abordagem da voz cantada.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC109'],
			color: '#D95640',
			obligatory: true
		},
		'AC210': {
			code: 'AC210',
			name: 'Improvisação Teatral II',
			ementa: 'Aprofundamento dos procedimentos trabalhados na disciplina Improvisação Teatral.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AC110'],
			color: '#D94056',
			obligatory: true
		},
		'AC211': {
			code: 'AC211',
			name: 'Teatro Latino-Americano I',
			ementa: 'Reflexão sobre a complexidade do fenômeno teatral latino-americano no contexto histórico, socioeconômico e cultural da região.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B040',
			obligatory: true
		},
		'AC214': {
			code: 'AC214',
			name: 'Linguagens Circenses',
			ementa: 'Conhecer as linguagens circenses de maneira ampla, em especial as brasileiras, incluindo não somente as práticas acrobáticas, de equilíbrio e de palhaço, como também o circo-teatro e o melodrama circenses nacionais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D5D940',
			obligatory: true
		},
		'AC215': {
			code: 'AC215',
			name: 'Formas do Teatro Ocidental II',
			ementa: 'Estudo de referências fundamentais do Teatro Ocidental, incluindo o gênero dramático e suas crises e derivações até o começo do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D94083',
			obligatory: true
		},
		'AC223': {
			code: 'AC223',
			name: 'Corpo-Voz II',
			ementa: 'A partir da integração corpo-voz-movimento, ampliar as possibilidades expressivas corpórea-vocais do ator e seu redimensionamento cênico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AC123'],
			color: '#BFD940',
			obligatory: true
		},
		'AC315': {
			code: 'AC315',
			name: 'Teatro Brasileiro I',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B0',
			obligatory: true
		},
		'AC105': {
			code: 'AC105',
			name: 'Canto para o Ator I',
			ementa: 'Desenvolvimento das potencialidades musicais do aluno através do canto individual e do canto coral como elemento de qualificação para o trabalho do ator.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4047D9',
			obligatory: true
		},
		'AC323': {
			code: 'AC323',
			name: 'Corpo-Voz III',
			ementa: 'Desenvolver a compreensão do discurso cênico, a partir da integração corpo-voz-movimento e suas possibilidades expressivas, em diferentes recortes de atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC223'],
			color: '#BFD940',
			obligatory: true
		},
		'AC331': {
			code: 'AC331',
			name: 'Corpo e Teatralidades Brasileiras I',
			ementa: 'Experiência prática de teatralidades presentes na oralidade popular brasileira. O ponto de vista do artista.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#65D940',
			obligatory: true
		},
		'AC340': {
			code: 'AC340',
			name: 'Princípios da Ação Cênica',
			ementa: 'Estudo do conceito de ação física em seus aspectos constitutivos. Exercícios cênicos.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#405ED9',
			obligatory: true
		},
		'AC415': {
			code: 'AC415',
			name: 'Teatro Brasileiro II',
			ementa: 'Estudo de dramaturgia, espetáculos e teorias fundamentais na história recente do teatro brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC315'],
			color: '#D940B0',
			obligatory: true
		},
		'AC890': {
			code: 'AC890',
			name: 'Metodologia e Criação em Artes Cênicas',
			ementa: 'Abordagem de processos de pesquisa e criação no teatro contemporâneo.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A1D9',
			obligatory: true
		},
		'AC120': {
			code: 'AC120',
			name: 'Tópicos em Estética Teatral',
			ementa: 'Estudo dos fundamentos da estética e da filosofia da arte. Introdução à reflexão analítica e crítica no campo específico do fazer teatral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C6',
			obligatory: true
		},
		'AC205': {
			code: 'AC205',
			name: 'Canto para o Ator II',
			ementa: 'Desenvolvimento das potencialidades musicais do aluno através do canto individual e do canto coral como elemento de qualificação para o trabalho do ator.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4074D9',
			obligatory: true
		},
		'AC317': {
			code: 'AC317',
			name: 'Estudos de Cenografia e Figurino',
			ementa: 'Investigar os componentes cênicos cenografia e indumentária visando sua aplicação nas teatralidades contemporâneas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D947',
			obligatory: true
		},
		'AC414': {
			code: 'AC414',
			name: 'Formas do Teatro Oriental',
			ementa: 'Estudo de tradições cênicas Asiáticas e desdobramentos contemporâneos. Abordagem de diálogos com artistas e pesquisadores Ocidentais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A8D940',
			obligatory: true
		},
		'AC423': {
			code: 'AC423',
			name: 'Corpo-Voz IV',
			ementa: 'Exercícios de criação de leituras encenadas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AC323'],
			color: '#BFD940',
			obligatory: true
		},
		'AC440': {
			code: 'AC440',
			name: 'Linguagem da Ação Cênica',
			ementa: 'Desenvolvimento da ação física na construção da cena. Estudo da ação física nas diversas poéticas.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#40D95E',
			obligatory: true
		},
		'AC441': {
			code: 'AC441',
			name: 'Atuação e Mídias',
			ementa: 'Estudos sobre a atuação na linguagem audiovisual.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AC340'],
			color: '#405ED9',
			obligatory: true
		},
		'AC160': {
			code: 'AC160',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9240D9',
			obligatory: true
		},
		'AC321': {
			code: 'AC321',
			name: 'Produção Teatral',
			ementa: 'Estudos técnicos sobre organização e gestão de obras artísticas. Relação da obra de arte com o mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7B40D9',
			obligatory: true
		},
		'AC555': {
			code: 'AC555',
			name: 'Projeto Integrado de Criação Cênica I',
			ementa: 'Exercício de montagem cênica a partir de uma fonte não dramatúrgica, seja ela literária, iconográfica ou da tradição oral. Aprendizado de práticas de escrita cênica. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['AA200'],
			color: '#92D940',
			obligatory: true
		},
		'AC557': {
			code: 'AC557',
			name: 'Estudos Teóricos no Processo de Criação I',
			ementa: 'Estudar teorias pertinentes à criação do Projeto Integrado de Criação Cênica I, isto é, que fundamentem a elaboração do signo cênico tendo elementos não dramáticos como ponto de partida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6540D9',
			obligatory: true
		},
		'AC121': {
			code: 'AC121',
			name: 'Práticas de Ação Teatral na Comunidade I',
			ementa: 'As possibilidades de ação teatral em comunidades: análise e estudo de casos existentes; estudo da criação de caráter teatral a partir da interação do indivíduo, ou grupo de artistas, com uma dada comunidade. Planejamento e sondagem em campo de possíveis ações, com viés pedagógicos e/ou criação artística.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D540D9',
			obligatory: true
		},
		'AC260': {
			code: 'AC260',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9A1',
			obligatory: true
		},
		'AC657': {
			code: 'AC657',
			name: 'Estudos Teóricos no Processo de Criação II',
			ementa: 'Estudar teorias pertinentes à criação do Projeto Integrado de Criação Cênica II, isto é, que fundamentem um espetáculo calcado na narratividade, no épico e/ou na personagem clássica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D9CE',
			obligatory: true
		},
		'AC666': {
			code: 'AC666',
			name: 'Projeto Integrado de Criação Cênica II',
			ementa: 'Exercício cênico a partir de texto da tradição dramatúrgica com ênfase na narratividade. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['AA200'],
			color: '#408AD9',
			obligatory: true
		},
		'AC360': {
			code: 'AC360',
			name: 'Tópicos em Prática de Encenação',
			ementa: 'Estudos orientados para a investigação de procedimentos específicos de criação cênica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4FD940',
			obligatory: true
		},
		'AC757': {
			code: 'AC757',
			name: 'Estudos Teóricos no Processo de Criação III',
			ementa: 'Estudar teorias pertinentes à criação do Projeto Integrado de Criação Cênica III, isto é, que fundamentem o aprendizado sobre a construção da personagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#BF40D9',
			obligatory: true
		},
		'AC777': {
			code: 'AC777',
			name: 'Projeto Integrado de Criação Cênica III',
			ementa: 'Exercício cênico a partir de texto da tradição dramatúrgica com ênfase na linguagem realista. Laboratórios de práticas interpretativas, corporais e vocais.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['AA200'],
			color: '#D9C640',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'AC857': {
			code: 'AC857',
			name: 'Poéticas Cênicas',
			ementa: 'Temas específicos de estudos em poéticas cênicas, abordando a produção teatral e a criação artística em seus aspectos interdisciplinares.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D9406D',
			obligatory: true
		},
		'AC887': {
			code: 'AC887',
			name: 'Memorial',
			ementa: 'Relato do processo de formação artística do aluno no decorrer do curso com orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9B7',
			obligatory: true
		},
		'AC888': {
			code: 'AC888',
			name: 'Projeto Integrado de Criação Cênica IV',
			ementa: 'Projeto de montagem cênica proposto pelos formandos, em qualquer gênero, estilo ou tendência estética, orientado por um ou mais professores, com apresentação pública final.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#D96D40',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#A840D9',
			obligatory: true
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4F40D9',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40CED9',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40B7D9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D99940',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D98A',
			obligatory: false
		}
	}
};

export default catalogue;
