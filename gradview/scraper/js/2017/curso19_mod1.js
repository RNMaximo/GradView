const catalogue = {
	totalCredits: 186,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HH183', 'HH185', 'HH186', 'HH188']
		},
		'sem-2': {
			id: '2',
			subjects: ['HH285', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HH381', 'HH384', 'HH386', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HH482', 'HH483', 'HH484', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['HH584', 'HH587', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HH682', 'HH685', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	subjects: {
		'HH183': {
			code: 'HH183',
			name: 'Introdução ao Estudo de História',
			ementa: 'Reflexão sobre o campo e o objeto de estudo da história e da historiografia. Introdução aos estudos didáticos pedagógicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D97D40'
		},
		'HH185': {
			code: 'HH185',
			name: 'História Antiga',
			ementa: 'Revisão crítica da historiografia relativa à antiguidade, através da análise de textos e documentos do e sobre o período. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#BAD940'
		},
		'HH186': {
			code: 'HH186',
			name: 'Laboratório de História',
			ementa: 'Leitura, interpretação e análise de textos historiográficos e de diferentes tipos de fontes. Confecção de textos acadêmicos (sínteses, resenhas, artigos científicos) e didáticos. Desenvolvimento de habilidades discursivas (de exposição e discussão) ligadas à interpretação e ao ensino de história.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D940BA'
		},
		'HH188': {
			code: 'HH188',
			name: 'História da África',
			ementa: 'Estudo da história da África nas épocas moderna e contemporânea, por meio da análise de documentos e da revisão crítica da historiografia. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#7D40D9'
		},
		'HH285': {
			code: 'HH285',
			name: 'História Medieval',
			ementa: 'Estudo da constituição e características do mundo medieval (séculos V - XV) por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D9BA40'
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: ''
		},
		'HH381': {
			code: 'HH381',
			name: 'História Moderna I',
			ementa: 'Estudo da constituição e características da sociedade moderna (séculos XV - XVII) por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#407DD9'
		},
		'HH384': {
			code: 'HH384',
			name: 'História do Brasil I',
			ementa: 'Estudo da constituição e características da sociedade na América portuguesa (séculos XVI a XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#BA40D9'
		},
		'HH386': {
			code: 'HH386',
			name: 'História da América I',
			ementa: 'Estudo das sociedades pré-colombianas e das sociedades coloniais hispano-americanas, através da análise de documentos e revisão crítica da historiografia. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40BAD9'
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'HH482': {
			code: 'HH482',
			name: 'História da América II',
			ementa: 'Estudo dos processos políticos, sociais e culturais na América hispânica nos séculos XIX e XX, por meio da análise de documentos e do debate historiográfico. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#4040D9'
		},
		'HH483': {
			code: 'HH483',
			name: 'História do Brasil II',
			ementa: 'Estudo da constituição e características da sociedade brasileira no período imperial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40D9BA'
		},
		'HH484': {
			code: 'HH484',
			name: 'História Moderna II',
			ementa: 'Estudo da constituição e características da crise do antigo regime (século XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94040'
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'HH584': {
			code: 'HH584',
			name: 'História do Brasil III',
			ementa: 'Estudo da constituição e características da sociedade brasileira nas primeiras décadas republicanas, por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#7DD940'
		},
		'HH587': {
			code: 'HH587',
			name: 'História Contemporânea I',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40D940'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'HH682': {
			code: 'HH682',
			name: 'História do Brasil IV',
			ementa: 'Estudo da constituição e características da sociedade brasileira contemporânea, por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40D97D'
		},
		'HH685': {
			code: 'HH685',
			name: 'História Contemporânea II',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos. Estudos da história do ensino e de temas educacionais e didáticos relacionados à disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D9407D'
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: ''
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
