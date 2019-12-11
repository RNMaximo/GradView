const catalogue = {
	totalCredits: 208,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HH185', 'HH181', 'HH182', 'HH183']
		},
		'sem-2': {
			id: '2',
			subjects: ['ELET02', 'HH285', 'HH282']
		},
		'sem-3': {
			id: '3',
			subjects: ['HH384', 'ELET03', 'HH386', 'HH381', 'HH380']
		},
		'sem-4': {
			id: '4',
			subjects: ['ELET04', 'HH483', 'HH481', 'HH484', 'HH482']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'HH584', 'HH582', 'EL774', 'HH587', 'HH590']
		},
		'sem-6': {
			id: '6',
			subjects: ['HH682', 'ELET06', 'HH685', 'HH690', 'HH681']
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
			credits: 36,
			hasRestrictions: true,
			subjects: ['HH7--', 'HH900', 'HH901', 'HH902', 'HH903'],
		},
		'elet-2': {
			credits: 24,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL211', 'EL485', 'EL511', 'EL683'],
		},
	},

	subjects: {
		'HH181': {
			code: 'HH181',
			name: 'Laboratório de História I',
			ementa: 'Iniciar o aluno no manuseio instrumental básico de trabalho do historiador, bem como nas atividades por meio das quais o historiador recolhe, organiza e transmite conhecimentos adquiridos. Introduzir o aluno às fontes históricas textuais e orais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9AC',
			obligatory: true
		},
		'HH182': {
			code: 'HH182',
			name: 'Práticas em História',
			ementa: 'Dimensões do ofício do historiador e suas práticas (procedimentos, métodos e técnicas de trabalho) em seus diferentes campos de atuação.',
			semestre: 1,
			vector: {T:2, P:6, L:0, O:0, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'HH183': {
			code: 'HH183',
			name: 'Introdução ao Estudo de História',
			ementa: 'Reflexão sobre o campo e o objeto de estudo da história e da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4660B9',
			obligatory: true
		},
		'HH185': {
			code: 'HH185',
			name: 'História Antiga',
			ementa: 'Revisão crítica da historiografia relativa à antiguidade, através da análise de textos e documentos do e sobre o período.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94679',
			obligatory: true
		},
		'HH282': {
			code: 'HH282',
			name: 'Laboratório de História II',
			ementa: 'Dar continuidade às atividades de manuseio do instrumental básico de trabalho do historiador, iniciando o aluno no manuseio de fontes iconográficas, midiáticas, multimídia e de cultura material.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*HH183'],
			color: '#4660B9',
			obligatory: true
		},
		'HH285': {
			code: 'HH285',
			name: 'História Medieval',
			ementa: 'Estudo da constituição e características do mundo medieval (séculos V - XV) por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#60B946',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HH380': {
			code: 'HH380',
			name: 'Teoria da História I',
			ementa: 'Estudo do pensamento histórico e de correntes historiográficas dos séculos XVIII ao XIX com ênfase no Iluminismo, Romantismo, Positivismo, Historicismo e sua crise, por meio de textos-chave.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B979',
			obligatory: true
		},
		'HH381': {
			code: 'HH381',
			name: 'História Moderna I',
			ementa: 'Estudo da constituição e características da sociedade moderna (séculos XV - XVII) por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'HH384': {
			code: 'HH384',
			name: 'História do Brasil I',
			ementa: 'Estudo da constituição e características da sociedade na América portuguesa (séculos XVI a XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B99346',
			obligatory: true
		},
		'HH386': {
			code: 'HH386',
			name: 'História da América I',
			ementa: 'Estudo das sociedades pré-colombianas e das sociedades coloniais hispano-americanas, através da análise de documentos e revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#79B946',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HH481': {
			code: 'HH481',
			name: 'Teoria da História II',
			ementa: 'Estudo do pensamento histórico e de correntes historiográficas dos séculos XIX e XX com ênfase no marxismo, escola dos Annales e nova história.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: true
		},
		'HH482': {
			code: 'HH482',
			name: 'História da América II',
			ementa: 'Estudo dos processos políticos, sociais e culturais na América hispânica nos séculos XIX e XX, por meio da análise de documentos e do debate historiográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B993',
			obligatory: true
		},
		'HH483': {
			code: 'HH483',
			name: 'História do Brasil II',
			ementa: 'Estudo da constituição e características da sociedade brasileira no período imperial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46ACB9',
			obligatory: true
		},
		'HH484': {
			code: 'HH484',
			name: 'História Moderna II',
			ementa: 'Estudo da constituição e características da crise do antigo regime (século XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9AC46',
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
			color: '#46B946',
			obligatory: true
		},
		'HH582': {
			code: 'HH582',
			name: 'Teoria da História III',
			ementa: 'Estudo do pensamento histórico e de correntes historiográficas do século XX, com ênfase nas correntes historiográficas recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7946B9',
			obligatory: true
		},
		'HH584': {
			code: 'HH584',
			name: 'História do Brasil III',
			ementa: 'Estudo da constituição e características da sociedade brasileira nas primeiras décadas republicanas, por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B960',
			obligatory: true
		},
		'HH587': {
			code: 'HH587',
			name: 'História Contemporânea I',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#AC46B9',
			obligatory: true
		},
		'HH590': {
			code: 'HH590',
			name: 'História da África',
			ementa: 'Estudo da história da África nas épocas moderna e contemporânea, por meio da análise de documentos e da revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#ACB946',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HH681': {
			code: 'HH681',
			name: 'História da América III',
			ementa: 'Estudos de temas da América Contemporânea por meio da análise de documentos e da revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94693',
			obligatory: true
		},
		'HH682': {
			code: 'HH682',
			name: 'História do Brasil IV',
			ementa: 'Estudo da constituição e características da sociedade brasileira contemporânea, por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9346B9',
			obligatory: true
		},
		'HH685': {
			code: 'HH685',
			name: 'História Contemporânea II',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#93B946',
			obligatory: true
		},
		'HH690': {
			code: 'HH690',
			name: 'Estágio Supervisionado em História',
			ementa: 'Desenvolvimento de atividades de estágio e de imersão no campo de trabalho que propiciem ao professor em formação o contato com experiências, práticas e conhecimento de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:8, D:0, HS:14, SL:2, C:14},
			requisitos: ['AA200', 'AA450', 'HH183'],
			color: '#4660B9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
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
			color: '#46B946',
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
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
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
			color: '#B946AC',
			obligatory: false
		},
		'EL211': {
			code: 'EL211',
			name: 'Política Educacional: Estrutura e Funcionamento da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos internacionais e legislação de ensino; estrutura e funcionamento da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4679B9',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Estudo das transformações históricas da sociedade e da educação brasileira, com ênfase nas principais concepções filosóficas presentes no pensamento educacional brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6046B9',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94660',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B97946',
			obligatory: false
		},
		'HH7--': {
			code: 'HH7--',
			name: 'Qualquer Disciplina com codigo HH7--',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH7--, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96046',
			obligatory: false
		},
		'HH900': {
			code: 'HH900',
			name: 'Monografia de Bacharelado I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA475', 'HH183'],
			color: '#4660B9',
			obligatory: false
		},
		'HH901': {
			code: 'HH901',
			name: 'Monografia de Licenciatura I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA475', 'HH183'],
			color: '#4660B9',
			obligatory: false
		},
		'HH902': {
			code: 'HH902',
			name: 'Monografia de Bacharelado II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475', 'HH183', 'HH900'],
			color: '#4660B9',
			obligatory: false
		},
		'HH903': {
			code: 'HH903',
			name: 'Monografia de Licenciatura II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA475', 'HH183', 'HH901'],
			color: '#4660B9',
			obligatory: false
		}
	}
};

export default catalogue;
