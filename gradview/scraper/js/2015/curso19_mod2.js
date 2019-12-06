const catalogue = {
	totalCredits: 212,
	maxCreditsSem: 34,
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
			subjects: ['HH682', 'HH685', 'HH690', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL774', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EL874', 'LA001', 'ELET08']
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
			color: '#40D9BE',
			obligatory: true
		},
		'HH185': {
			code: 'HH185',
			name: 'História Antiga',
			ementa: 'Revisão crítica da historiografia relativa à antiguidade, através da análise de textos e documentos do e sobre o período.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94076',
			obligatory: true
		},
		'HH186': {
			code: 'HH186',
			name: 'Laboratório de História',
			ementa: 'Iniciar o aluno no manuseio instrumental básico de trabalho do historiador, bem como nas atividades por meio das quais recolhe, organiza e transmite conhecimentos adquiridos. Introduzir o aluno às diferentes fontes históricas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D940AC',
			obligatory: true
		},
		'HH188': {
			code: 'HH188',
			name: 'História da África',
			ementa: 'Estudo da história da África nas épocas moderna e contemporânea, por meio da análise de documentos e da revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4940D9',
			obligatory: true
		},
		'HH285': {
			code: 'HH285',
			name: 'História Medieval',
			ementa: 'Estudo da constituição e características do mundo medieval (séculos V - XV) por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D952',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: '',
			color: '#40D988',
			obligatory: true
		},
		'HH381': {
			code: 'HH381',
			name: 'História Moderna I',
			ementa: 'Estudo da constituição e características da sociedade moderna (séculos XV - XVII) por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#64D940',
			obligatory: true
		},
		'HH384': {
			code: 'HH384',
			name: 'História do Brasil I',
			ementa: 'Estudo da constituição e características da sociedade na América portuguesa (séculos XVI a XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94091',
			obligatory: true
		},
		'HH386': {
			code: 'HH386',
			name: 'História da América I',
			ementa: 'Estudo das sociedades pré-colombianas e das sociedades coloniais hispano-americanas, através da análise de documentos e revisão crítica da historiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40A3D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#D9405B',
			obligatory: true
		},
		'HH482': {
			code: 'HH482',
			name: 'História da América II',
			ementa: 'Estudo dos processos políticos, sociais e culturais na América hispânica nos séculos XIX e XX, por meio da análise de documentos e do debate historiográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: true
		},
		'HH483': {
			code: 'HH483',
			name: 'História do Brasil II',
			ementa: 'Estudo da constituição e características da sociedade brasileira no período imperial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D96D',
			obligatory: true
		},
		'HH484': {
			code: 'HH484',
			name: 'História Moderna II',
			ementa: 'Estudo da constituição e características da crise do antigo regime (século XVIII), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4088D9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D95B40',
			obligatory: true
		},
		'HH584': {
			code: 'HH584',
			name: 'História do Brasil III',
			ementa: 'Estudo da constituição e características da sociedade brasileira nas primeiras décadas republicanas, por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4052D9',
			obligatory: true
		},
		'HH587': {
			code: 'HH587',
			name: 'História Contemporânea I',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XIX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D040D9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#D9AC40',
			obligatory: true
		},
		'HH682': {
			code: 'HH682',
			name: 'História do Brasil IV',
			ementa: 'Estudo da constituição e características da sociedade brasileira contemporânea, por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#406DD9',
			obligatory: true
		},
		'HH685': {
			code: 'HH685',
			name: 'História Contemporânea II',
			ementa: 'Estudo da constituição e características da sociedade industrial (século XX), por meio da revisão crítica da historiografia sobre o período e da análise de documentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D97640',
			obligatory: true
		},
		'HH690': {
			code: 'HH690',
			name: 'Estágio Supervisionado em História',
			ementa: 'Desenvolvimento de atividades de estágio e de imersão no campo de trabalho que propiciem ao professor em formação o contato com experiências, práticas e conhecimento de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:8, D:0, HS:14, SL:2, C:14},
			requisitos: ['AA200'],
			color: '#7F40D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D0D940',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D9C740',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#6440D9',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#D9C740',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40BED9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B5D940',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940C7',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#7FD940',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#9A40D9',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#49D940',
			obligatory: false
		},
		'HH7--': {
			code: 'HH7--',
			name: 'Qualquer Disciplina com codigo HH7--',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH7--, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D99140',
			obligatory: false
		},
		'HH91-': {
			code: 'HH91-',
			name: 'Qualquer Disciplina com codigo HH91-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH91-, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B540D9',
			obligatory: false
		},
		'HH92-': {
			code: 'HH92-',
			name: 'Qualquer Disciplina com codigo HH92-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH92-, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9A3',
			obligatory: false
		},
		'HH930': {
			code: 'HH930',
			name: 'Tópicos Especiais em Teoria da História XXI',
			ementa: 'Estudo do pensamento histórico e dos textos fundamentais produzidos pela tradição historiográfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#9AD940',
			obligatory: false
		}
	}
};

export default catalogue;
