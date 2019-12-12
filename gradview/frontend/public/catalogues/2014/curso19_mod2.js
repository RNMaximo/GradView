const catalogue = {
	totalCredits: 206,
	maxCreditsSem: 34,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HH188', 'HH185', 'HH183', 'HH186']
		},
		'sem-2': {
			id: '2',
			subjects: ['HH285', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HH381', 'HH386', 'HH384', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HH482', 'HH484', 'HH483', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'HH584', 'EL774', 'HH587']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'HH685', 'HH690', 'HH682']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'EL874']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 48,
			hasRestrictions: true,
			subjects: ['HH7--'],
		},
		'elet-2': {
			credits: 24,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['HH91-', 'HH92-', 'HH930'],
		},
		'elet-4': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL511', 'EL683'],
		},
	},

	subjects: {
		'HH183': {
			code: 'HH183',
			name: 'Introdução ao Estudo de História',
			ementa: 'Reflexão sobre o campo e o objeto de estudo da história e da historiografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#4669B9',
			obligatory: true
		},
		'HH185': {
			code: 'HH185',
			name: 'História Antiga',
			ementa: 'Revisão crítica da historiografia relativa à antiguidade, através da análise de textos e documentos do e sobre o período.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94696',
			obligatory: true
		},
		'HH186': {
			code: 'HH186',
			name: 'Laboratório de História',
			ementa: 'Iniciar o aluno no manuseio instrumental básico de trabalho do historiador, bem como nas atividades por meio das quais recolhe, organiza e transmite conhecimentos adquiridos. Introduzir o aluno às diferentes fontes históricas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#A7B946',
			obligatory: true
		},
		'HH188': {
			code: 'HH188',
			name: 'História da África',
			ementa: 'Estudo da história da África nas épocas moderna e contemporânea, por meio da análise de documentos e da revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8D46B9',
			obligatory: true
		},
		'HH285': {
			code: 'HH285',
			name: 'História Medieval',
			ementa: 'Estudo da constituição e características do mundo medieval (séculos V - XV) por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7246B9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HH381': {
			code: 'HH381',
			name: 'História Moderna I',
			ementa: 'Estudo da constituição e características da sociedade moderna (séculos XV - XVII) por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B96146',
			obligatory: true
		},
		'HH384': {
			code: 'HH384',
			name: 'História do Brasil I',
			ementa: 'Estudo da constituição e características da sociedade na América portuguesa (séculos XVI a XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B94F',
			obligatory: true
		},
		'HH386': {
			code: 'HH386',
			name: 'História da América I',
			ementa: 'Estudo das sociedades pré-colombianas e das sociedades coloniais hispano-americanas, através da análise de documentos e revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
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
		'HH482': {
			code: 'HH482',
			name: 'História da América II',
			ementa: 'Estudo dos processos políticos, sociais e culturais na América hispânica nos séculos XIX e XX, por meio da análise de documentos e do debate historiográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9B9',
			obligatory: true
		},
		'HH483': {
			code: 'HH483',
			name: 'História do Brasil II',
			ementa: 'Estudo da constituição e características da sociedade brasileira no período imperial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5846B9',
			obligatory: true
		},
		'HH484': {
			code: 'HH484',
			name: 'História Moderna II',
			ementa: 'Estudo da constituição e características da crise do antigo regime (século XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B984',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
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
			color: '#B97B46',
			obligatory: true
		},
		'HH584': {
			code: 'HH584',
			name: 'História do Brasil III',
			ementa: 'Estudo da constituição e características da sociedade brasileira nas primeiras décadas republicanas, por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#72B946',
			obligatory: true
		},
		'HH587': {
			code: 'HH587',
			name: 'História Contemporânea I',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#464FB9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HH682': {
			code: 'HH682',
			name: 'História do Brasil IV',
			ementa: 'Estudo da constituição e características da sociedade brasileira contemporânea, por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4684B9',
			obligatory: true
		},
		'HH685': {
			code: 'HH685',
			name: 'História Contemporânea II',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B99E',
			obligatory: true
		},
		'HH690': {
			code: 'HH690',
			name: 'Estágio Supervisionado em História',
			ementa: 'Desenvolvimento de atividades de estágio e de imersão no campo de trabalho que propiciem ao professor em formação o contato com experiências, práticas e conhecimento de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:8, D:0, HS:14, SL:2, C:14},
			requisitos: ['AA200'],
			color: '#B99646',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
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
			color: '#B97B46',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'Programa a ser definido semestralmente pelo DECISAE sobre tópicos especiais em Ciências Sociais e Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#A746B9',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94661',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Estudo das transformações históricas da sociedade e da educação brasileira, com ênfase nas principais concepções filosóficas presentes no pensamento educacional brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#469EB9',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#8DB946',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9467B',
			obligatory: false
		},
		'HH7--': {
			code: 'HH7--',
			name: 'Qualquer Disciplina com codigo HH7--',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH7--, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946B0',
			obligatory: false
		},
		'HH91-': {
			code: 'HH91-',
			name: 'Qualquer Disciplina com codigo HH91-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH91-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#58B946',
			obligatory: false
		},
		'HH92-': {
			code: 'HH92-',
			name: 'Qualquer Disciplina com codigo HH92-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH92-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B969',
			obligatory: false
		},
		'HH930': {
			code: 'HH930',
			name: 'Tópicos Especiais em Teoria da História XXI',
			ementa: 'Estudo do pensamento histórico e dos textos fundamentais produzidos pela tradição historiográfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B9B046',
			obligatory: false
		}
	}
};

export default catalogue;
