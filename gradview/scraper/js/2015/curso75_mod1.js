const catalogue = {
	totalCredits: 160,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['TL108', 'TL109', 'TL118', 'TL155', 'TL222']
		},
		'sem-2': {
			id: '2',
			subjects: ['TL255', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['TL908', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['TL909', 'ELET08']
		}
	},

	subjects: {
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8C40D9'
		},
		'TL109': {
			code: 'TL109',
			name: 'Introdução aos Estudos Literários',
			ementa: 'Análise de textos teóricos, críticos e de história literária, bem como de textos em prosa e poesia, que possibilitem uma introdução ao campo dos estudos literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940B3'
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D966'
		},
		'TL155': {
			code: 'TL155',
			name: 'Tópicos em Literatura Clássica I',
			ementa: 'Introdução ao estudo de temas, obras e autores paradigmáticos da tradição greco-latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8CD940'
		},
		'TL255': {
			code: 'TL255',
			name: 'Tópicos em Literatura Clássica II',
			ementa: 'Estudo de temas, obras e autores paradigmáticos da tradição greco-latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9B340'
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
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:24},
			requisitos: '',
			color: ''
		},
		'TL908': {
			code: 'TL908',
			name: 'Monografia I',
			ementa: 'Trabalho final do curso envolvendo tema de pesquisa em Teoria Literária, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D9D9'
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'TL909': {
			code: 'TL909',
			name: 'Monografia II',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Teoria Literária, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4066D9'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
