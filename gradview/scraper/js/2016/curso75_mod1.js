const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 30,
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

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['TL110', 'TL111', 'TL112', 'TL113', 'TL114', 'TL115', 'TL117', 'TL119', 'TL145', 'TL146', 'TL149', 'TL151', 'TL152', 'TL153', 'TL154', 'TL156', 'TL159', 'TL161', 'TL174', 'TL175', 'TL176', 'TL177', 'TL178', 'TL179', 'TL180', 'TL181', 'TL182', 'TL183', 'TL184', 'TL185', 'TL186', 'TL187', 'TL188', 'TL189'],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['TL162', 'TL163', 'TL164', 'TL170', 'TL171', 'TL172', 'TL211', 'TL212', 'TL213', 'TL214', 'TL215', 'TL216', 'TL217', 'TL219', 'TL220', 'TL221', 'TL223', 'TL224', 'TL225', 'TL229', 'TL230', 'TL231', 'TL232', 'TL233', 'TL234', 'TL235', 'TL236', 'TL237', 'TL239', 'TL240', 'TL241', 'TL242', 'TL243', 'TL244', 'TL245', 'TL246', 'TL247', 'TL248', 'TL249', 'TL250', 'TL251', 'TL252', 'TL253', 'TL254', 'TL256', 'TL257'],
		},
		'elet-3': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['TL008', 'TL011', 'TL021', 'TL022', 'TL024', 'TL031', 'TL036', 'TL038', 'TL040', 'TL055', 'TL059', 'TL060', 'TL061', 'TL062', 'TL063', 'TL064', 'TL065', 'TL066', 'TL067', 'TL068', 'TL069', 'TL070', 'TL072', 'TL073', 'TL074', 'TL075', 'TL076', 'TL077', 'TL078', 'TL079', 'TL080', 'TL081', 'TL082', 'TL083', 'TL084', 'TL085', 'TL086', 'TL090', 'TL091', 'TL092', 'TL096', 'TL097', 'TL098', 'TL107', 'TL120', 'TL121', 'TL122', 'TL123', 'TL124', 'TL125', 'TL126', 'TL127', 'TL130', 'TL131', 'TL132', 'TL133', 'TL134', 'TL135', 'TL136', 'TL137', 'TL140', 'TL141', 'TL142', 'TL143', 'TL147', 'TL150', 'TL157', 'TL160', 'TL167', 'TL207', 'TL209', 'TL227', 'TL258', 'TL259', 'TL260', 'TL304', 'TL305', 'TL306', 'TL309', 'TL311', 'TL312', 'TL313', 'TL314', 'TL315', 'TL316', 'TL317', 'TL319', 'TL320', 'TL321', 'TL322', 'TL323', 'TL324', 'TL409', 'TL420', 'TL509', 'TL609', 'TL709', 'TL809'],
		},
		'elet-4': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['TL087', 'TL088', 'TL089', 'TL128', 'TL138', 'TL148', 'TL158', 'TL168', 'TL208', 'TL228', 'TL238', 'TL318', 'TL328', 'TL338', 'TL418', 'TL428', 'TL438', 'TL518', 'TL528', 'TL538', 'TL618', 'TL628', 'TL638'],
		},
		'elet-5': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['TL---'],
		},
		'elet-6': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AU---', 'CS---', 'EP---', 'GF---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'MU---', 'TL---'],
		},
		'elet-7': {
			credits: 28,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40A1D9',
			obligatory: true
		},
		'TL109': {
			code: 'TL109',
			name: 'Introdução aos Estudos Literários',
			ementa: 'Análise de textos teóricos, críticos e de história literária, bem como de textos em prosa e poesia, que possibilitem uma introdução ao campo dos estudos literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4055D9',
			obligatory: true
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D995',
			obligatory: true
		},
		'TL155': {
			code: 'TL155',
			name: 'Tópicos em Literatura Clássica I',
			ementa: 'Introdução ao estudo de temas, obras e autores paradigmáticos da tradição greco-latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AAD940',
			obligatory: true
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'TL255': {
			code: 'TL255',
			name: 'Tópicos em Literatura Clássica II',
			ementa: 'Estudo de temas, obras e autores paradigmáticos da tradição greco-latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97C40',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#D9B740',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#40D951',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#40D999',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#D6D940',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:24},
			requisitos: '',
			color: '#D940AC',
			obligatory: true
		},
		'TL908': {
			code: 'TL908',
			name: 'Monografia I',
			ementa: 'Trabalho final do curso envolvendo tema de pesquisa em Teoria Literária, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#6A40D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#C240D9',
			obligatory: true
		},
		'TL909': {
			code: 'TL909',
			name: 'Monografia II',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Teoria Literária, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D98D',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D94058',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D99840',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9406C',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40CDD9',
			obligatory: false
		},
		'AU---': {
			code: 'AU---',
			name: 'Qualquer Disciplina com codigo AU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AU---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940C3',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9407C',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4081D9',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#409DD9',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D1D9',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#42D940',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D97040',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D941',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4240D9',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#BA40D9',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D99C40',
			obligatory: false
		},
		'TL008': {
			code: 'TL008',
			name: 'Literatura Infantil',
			ementa: 'Conceitos e evolução dos conceitos; condições de produção e consumo da literatura infantil; literatura infantil e escola; literatura juvenil. Principais autores e obras da literatura infantil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#4075D9',
			obligatory: false
		},
		'TL011': {
			code: 'TL011',
			name: 'Estética e Literatura',
			ementa: 'Relações pertinentes entre teorias estéticas e produção literária. Análise seletiva de obras filosóficas e literárias. Importância do domíno estético para os estudos literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95C40',
			obligatory: false
		},
		'TL021': {
			code: 'TL021',
			name: 'Literatura e Sociedade',
			ementa: 'Estudo das relações entre produção literária e problemas teóricos e históricos de construções socioculturais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D981',
			obligatory: false
		},
		'TL022': {
			code: 'TL022',
			name: 'Literatura e História',
			ementa: 'Estudo das relações entre produção literária e processo histórico. Análise seletiva de obras historiográficas e literárias. A escrita da história, da memória e da ficção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#86D940',
			obligatory: false
		},
		'TL024': {
			code: 'TL024',
			name: 'Literatura e Cultura Popular',
			ementa: 'Estudo de relações entre a literatura e cultura popular. Cultura letrada e outras formas culturais. Análise tópica de obras e manifestações específicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95840',
			obligatory: false
		},
		'TL031': {
			code: 'TL031',
			name: 'Literatura e Psicanálise',
			ementa: 'Estudo das relações entre psicanálise, teoria e crítica da literatura. Subjetividade e produção literária. Análises literárias no discurso psicanalítico. Psicanálise e textos literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40B1D9',
			obligatory: false
		},
		'TL036': {
			code: 'TL036',
			name: 'Literatura e Outras Produções Culturais',
			ementa: 'Estudo das relações entre produção literária e outras produções culturais. Literatura e artes não verbais. Literatura e mídia. Literatura e ciências humanas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9B5',
			obligatory: false
		},
		'TL038': {
			code: 'TL038',
			name: 'Literatura e Filosofia',
			ementa: 'Estudo das relações entre produção literária e discurso filosófico. Aspectos de teorias filosóficas e da história da filosofia considerados relevantes para os estudos literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5E40D9',
			obligatory: false
		},
		'TL040': {
			code: 'TL040',
			name: 'Literatura e Geografia',
			ementa: 'Estudo das relações entre representação literária e espaço geográfico. Literatura de viagem. Geografias imaginárias. Mapas, paisagens e literatura.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9B040',
			obligatory: false
		},
		'TL055': {
			code: 'TL055',
			name: 'Tópicos Especiais em Literatura Infantil',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94080',
			obligatory: false
		},
		'TL059': {
			code: 'TL059',
			name: 'Tópicos Especiais em Estética e Literatura I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99040',
			obligatory: false
		},
		'TL060': {
			code: 'TL060',
			name: 'Tópicos Especiais em Estética e Literatura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9CB40',
			obligatory: false
		},
		'TL061': {
			code: 'TL061',
			name: 'Tópicos Especiais em Estética e Literatura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95440',
			obligatory: false
		},
		'TL062': {
			code: 'TL062',
			name: 'Tópicos Especiais em Teoria Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9BF40',
			obligatory: false
		},
		'TL063': {
			code: 'TL063',
			name: 'Tópicos Especiais em Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9BB40',
			obligatory: false
		},
		'TL064': {
			code: 'TL064',
			name: 'Tópicos Especiais em Teoria Literá- ria III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D98440',
			obligatory: false
		},
		'TL065': {
			code: 'TL065',
			name: 'Tópicos Especiais em Crítica Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7640D9',
			obligatory: false
		},
		'TL066': {
			code: 'TL066',
			name: 'Tópicos Especiais em Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9405C',
			obligatory: false
		},
		'TL067': {
			code: 'TL067',
			name: 'Tópicos Especiais em Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6640D9',
			obligatory: false
		},
		'TL068': {
			code: 'TL068',
			name: 'Tópicos Especiais em História Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940BB',
			obligatory: false
		},
		'TL069': {
			code: 'TL069',
			name: 'Tópicos Especiais em História Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9BD',
			obligatory: false
		},
		'TL070': {
			code: 'TL070',
			name: 'Tópicos Especiais em História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94070',
			obligatory: false
		},
		'TL072': {
			code: 'TL072',
			name: 'Tópicos Especiais de Literatura e Sociedade I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94044',
			obligatory: false
		},
		'TL073': {
			code: 'TL073',
			name: 'Tópicos Especiais de Literatura e Sociedade II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94094',
			obligatory: false
		},
		'TL074': {
			code: 'TL074',
			name: 'Tópicos Especiais de Literatura e Sociedade III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6E40D9',
			obligatory: false
		},
		'TL075': {
			code: 'TL075',
			name: 'Tópicos Especiais de Literatura e História I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94050',
			obligatory: false
		},
		'TL076': {
			code: 'TL076',
			name: 'Tópicos Especiais de Literatura e História II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9A5',
			obligatory: false
		},
		'TL077': {
			code: 'TL077',
			name: 'Tópicos Especiais de Literatura e História III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40C1D9',
			obligatory: false
		},
		'TL078': {
			code: 'TL078',
			name: 'Tópicos Especiais de Literatura e Cultura Popular I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D971',
			obligatory: false
		},
		'TL079': {
			code: 'TL079',
			name: 'Tópicos Especiais de Literatura e Cultura Popular II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9AD',
			obligatory: false
		},
		'TL080': {
			code: 'TL080',
			name: 'Tópicos Especiais de Literatura e Cultura Popular III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4089D9',
			obligatory: false
		},
		'TL081': {
			code: 'TL081',
			name: 'Tópicos Especiais de Literatura e Psicanálise I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7240D9',
			obligatory: false
		},
		'TL082': {
			code: 'TL082',
			name: 'Tópicos Especiais de Literatura e Psicanálise II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94060',
			obligatory: false
		},
		'TL083': {
			code: 'TL083',
			name: 'Tópicos Especiais de Literatura e Psicanálise III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#56D940',
			obligatory: false
		},
		'TL084': {
			code: 'TL084',
			name: 'Tópicos Especiais de Literatura Comparada I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4051D9',
			obligatory: false
		},
		'TL085': {
			code: 'TL085',
			name: 'Tópicos Especiais de Literatura Comparada II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B640D9',
			obligatory: false
		},
		'TL086': {
			code: 'TL086',
			name: 'Tópicos Especiais de Literatura Comparada III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4045D9',
			obligatory: false
		},
		'TL087': {
			code: 'TL087',
			name: 'Tópicos Especiais de Literatura Brasileira I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96C40',
			obligatory: false
		},
		'TL088': {
			code: 'TL088',
			name: 'Tópicos Especiais de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4085D9',
			obligatory: false
		},
		'TL089': {
			code: 'TL089',
			name: 'Tópicos Especiais de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D961',
			obligatory: false
		},
		'TL090': {
			code: 'TL090',
			name: 'Tópicos Especiais de Literatura Portuguesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96840',
			obligatory: false
		},
		'TL091': {
			code: 'TL091',
			name: 'Tópicos Especiais de Literatura Portuguesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9CF40',
			obligatory: false
		},
		'TL092': {
			code: 'TL092',
			name: 'Tópicos Especiais de Literatura Portuguesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4041D9',
			obligatory: false
		},
		'TL096': {
			code: 'TL096',
			name: 'Tópicos Especiais de Literatura e Outras Produções Culturais I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9240D9',
			obligatory: false
		},
		'TL097': {
			code: 'TL097',
			name: 'Tópicos Especiais de Literatura e Outras Produções Culturais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D2D940',
			obligatory: false
		},
		'TL098': {
			code: 'TL098',
			name: 'Tópicos Especiais de Literatura e Outras Produções Culturais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D97D',
			obligatory: false
		},
		'TL107': {
			code: 'TL107',
			name: 'Tópicos em História Literária Portuguesa I',
			ementa: 'Estudo de temas, obras e autores da Idade Média portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94088',
			obligatory: false
		},
		'TL110': {
			code: 'TL110',
			name: 'Textos em Teatro I',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4091D9',
			obligatory: false
		},
		'TL111': {
			code: 'TL111',
			name: 'Textos em Teatro II',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C640D9',
			obligatory: false
		},
		'TL112': {
			code: 'TL112',
			name: 'Textos em Poesia I',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9AC40',
			obligatory: false
		},
		'TL113': {
			code: 'TL113',
			name: 'Textos em Poesia II',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9AD940',
			obligatory: false
		},
		'TL114': {
			code: 'TL114',
			name: 'Textos em Prosa de Ficção I',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94074',
			obligatory: false
		},
		'TL115': {
			code: 'TL115',
			name: 'Textos em Prosa de Ficção II',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94C40',
			obligatory: false
		},
		'TL117': {
			code: 'TL117',
			name: 'Textos em Prosa Não-Ficcional II',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#76D940',
			obligatory: false
		},
		'TL119': {
			code: 'TL119',
			name: 'Textos em Teoria, Crítica e História Literária II',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6240D9',
			obligatory: false
		},
		'TL120': {
			code: 'TL120',
			name: 'Tópicos em Teoria e História Literária I',
			ementa: 'Estudo de temas, obras e autores da Idade Média europeia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8A40D9',
			obligatory: false
		},
		'TL121': {
			code: 'TL121',
			name: 'Tópicos Especiais de Literatura e Identidade Cultural I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940B0',
			obligatory: false
		},
		'TL122': {
			code: 'TL122',
			name: 'Tópicos Especiais de Literatura e Identidade Cultural II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4065D9',
			obligatory: false
		},
		'TL123': {
			code: 'TL123',
			name: 'Tópicos Especiais de Literatura e Identidade Cultural III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46D940',
			obligatory: false
		},
		'TL124': {
			code: 'TL124',
			name: 'Tópicos Especiais de Literatura e Filosofia I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#CAD940',
			obligatory: false
		},
		'TL125': {
			code: 'TL125',
			name: 'Tópicos Especiais de Literatura e Filosofia II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D969',
			obligatory: false
		},
		'TL126': {
			code: 'TL126',
			name: 'Tópicos Especiais de Literatura e Filosofia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40C5D9',
			obligatory: false
		},
		'TL127': {
			code: 'TL127',
			name: 'Tópicos em História Literária Portuguesa II',
			ementa: 'Estudos de temas, obras e autores da Literatura Portuguesa dos séculos XV e XVI, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C2D940',
			obligatory: false
		},
		'TL128': {
			code: 'TL128',
			name: 'Tópicos em Literatura Brasileira I',
			ementa: 'Análise de temas, obras e autores da América Portuguesa produzidos entre os séculos XVI e XVIII, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4069D9',
			obligatory: false
		},
		'TL130': {
			code: 'TL130',
			name: 'Tópicos em Teoria e História Literária II',
			ementa: 'Estudos de temas, obras e autores dos séculos XV e XVI, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A2D940',
			obligatory: false
		},
		'TL131': {
			code: 'TL131',
			name: 'Tópicos Especiais de Literatura Italiana I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94054',
			obligatory: false
		},
		'TL132': {
			code: 'TL132',
			name: 'Tópicos Especiais de Literatura Italiana II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AED940',
			obligatory: false
		},
		'TL133': {
			code: 'TL133',
			name: 'Tópicos Especiais de Literatura Italiana III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9404C',
			obligatory: false
		},
		'TL134': {
			code: 'TL134',
			name: 'Tópicos Especiais de Literatura e Geografia I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4059D9',
			obligatory: false
		},
		'TL135': {
			code: 'TL135',
			name: 'Tópicos Especiais de Literatura e Geografia II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4061D9',
			obligatory: false
		},
		'TL136': {
			code: 'TL136',
			name: 'Tópicos Especiais de Literatura e Geografia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9D740',
			obligatory: false
		},
		'TL137': {
			code: 'TL137',
			name: 'Tópicos em História Literária Portuguesa III',
			ementa: 'Estudos de temas, obras e autores da Literatura Portuguesa dos séculos XVII e XVIII, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940C7',
			obligatory: false
		},
		'TL138': {
			code: 'TL138',
			name: 'Tópicos em Literatura Brasileira II',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil do século XIX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D640D9',
			obligatory: false
		},
		'TL140': {
			code: 'TL140',
			name: 'Tópicos em Teoria e História Literária III',
			ementa: 'Estudo de temas, obras e autores dos séculos XVII e XVIII, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D989',
			obligatory: false
		},
		'TL141': {
			code: 'TL141',
			name: 'Tópicos Especiais em Tradução Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4095D9',
			obligatory: false
		},
		'TL142': {
			code: 'TL142',
			name: 'Tópicos Especiais em Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B2D940',
			obligatory: false
		},
		'TL143': {
			code: 'TL143',
			name: 'Tópicos Especiais em Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#CE40D9',
			obligatory: false
		},
		'TL145': {
			code: 'TL145',
			name: 'Tópicos X: Textos em Teatro III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4A40D9',
			obligatory: false
		},
		'TL146': {
			code: 'TL146',
			name: 'Tópicos XI: Textos em Teatro IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94068',
			obligatory: false
		},
		'TL147': {
			code: 'TL147',
			name: 'Tópicos em História Literária Portuguesa IV',
			ementa: 'Estudo de temas, obras e autores da Literatura Portuguesa do século XIX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D979',
			obligatory: false
		},
		'TL148': {
			code: 'TL148',
			name: 'Tópicos em Literatura Brasileira III',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil entre o final do século XIX e início do século XX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7ED940',
			obligatory: false
		},
		'TL149': {
			code: 'TL149',
			name: 'Tópicos XII: Textos em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9A440',
			obligatory: false
		},
		'TL150': {
			code: 'TL150',
			name: 'Tópicos em Teoria e História Literária IV',
			ementa: 'Estudo de temas, obras e autores do final do século XVIII e do século XIX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D955',
			obligatory: false
		},
		'TL151': {
			code: 'TL151',
			name: 'Tópicos XIII: Textos em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#406DD9',
			obligatory: false
		},
		'TL152': {
			code: 'TL152',
			name: 'Tópicos XIV: Textos em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#404DD9',
			obligatory: false
		},
		'TL153': {
			code: 'TL153',
			name: 'Tópicos XV: Textos em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8E40D9',
			obligatory: false
		},
		'TL154': {
			code: 'TL154',
			name: 'Tópicos XVI: Textos em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#408DD9',
			obligatory: false
		},
		'TL156': {
			code: 'TL156',
			name: 'Tópicos XVII: Textos em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#72D940',
			obligatory: false
		},
		'TL157': {
			code: 'TL157',
			name: 'Tópicos em História Literária Portuguesa V',
			ementa: 'Estudo de temas, obras e autores da Literatura Portuguesa do final do século XIX e do século XX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9A840',
			obligatory: false
		},
		'TL158': {
			code: 'TL158',
			name: 'Tópicos em Literatura Brasileira IV',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil do século XX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4071D9',
			obligatory: false
		},
		'TL159': {
			code: 'TL159',
			name: 'Tópicos XVIII: Textos em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99440',
			obligatory: false
		},
		'TL160': {
			code: 'TL160',
			name: 'Tópicos em Teoria e História Literária V',
			ementa: 'Estudo de temas, obras e autores do final do século XIX e do século XX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94090',
			obligatory: false
		},
		'TL161': {
			code: 'TL161',
			name: 'Tópicos XIX: Textos em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C5',
			obligatory: false
		},
		'TL162': {
			code: 'TL162',
			name: 'Tópicos em Pesquisa XIII: Literatura e Imprensa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C1',
			obligatory: false
		},
		'TL163': {
			code: 'TL163',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D991',
			obligatory: false
		},
		'TL164': {
			code: 'TL164',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5A40D9',
			obligatory: false
		},
		'TL167': {
			code: 'TL167',
			name: 'Tópicos em História Literária Portuguesa VI',
			ementa: 'Estudo monográfico aprofundado da obra de autores representativos da literatura e da cultura portuguesa, em seus diferentes períodos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D240D9',
			obligatory: false
		},
		'TL168': {
			code: 'TL168',
			name: 'Tópicos em Literatura Brasileira V',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil contemporâneo, selecionado de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9B9',
			obligatory: false
		},
		'TL170': {
			code: 'TL170',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C9',
			obligatory: false
		},
		'TL171': {
			code: 'TL171',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8640D9',
			obligatory: false
		},
		'TL172': {
			code: 'TL172',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8ED940',
			obligatory: false
		},
		'TL174': {
			code: 'TL174',
			name: 'Textos em Poesia V',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A9D9',
			obligatory: false
		},
		'TL175': {
			code: 'TL175',
			name: 'Textos em Poesia VI',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5240D9',
			obligatory: false
		},
		'TL176': {
			code: 'TL176',
			name: 'Textos em Poesia VII',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409C',
			obligatory: false
		},
		'TL177': {
			code: 'TL177',
			name: 'Textos em Poesia VIII',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CA40D9',
			obligatory: false
		},
		'TL178': {
			code: 'TL178',
			name: 'Textos em Prosa de Ficção V',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D959',
			obligatory: false
		},
		'TL179': {
			code: 'TL179',
			name: 'Textos em Prosa de Ficção VI',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B9D9',
			obligatory: false
		},
		'TL180': {
			code: 'TL180',
			name: 'Textos em Prosa de Ficção VII',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4079D9',
			obligatory: false
		},
		'TL181': {
			code: 'TL181',
			name: 'Textos em Prosa de Ficção VIII',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98840',
			obligatory: false
		},
		'TL182': {
			code: 'TL182',
			name: 'Textos em Prosa Não-Ficcional V',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94084',
			obligatory: false
		},
		'TL183': {
			code: 'TL183',
			name: 'Textos em Prosa Não-Ficcional VI',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AA40D9',
			obligatory: false
		},
		'TL184': {
			code: 'TL184',
			name: 'Textos em Prosa Não-Ficcional VII',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94078',
			obligatory: false
		},
		'TL185': {
			code: 'TL185',
			name: 'Textos em Prosa Não-Ficcional VIII',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D99D',
			obligatory: false
		},
		'TL186': {
			code: 'TL186',
			name: 'Textos em Teoria, Crítica e História Literária V',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7E40D9',
			obligatory: false
		},
		'TL187': {
			code: 'TL187',
			name: 'Textos em Teoria, Crítica e História Literária VI',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D5',
			obligatory: false
		},
		'TL188': {
			code: 'TL188',
			name: 'Textos em Teoria, Crítica e História Literária VII',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4E40D9',
			obligatory: false
		},
		'TL189': {
			code: 'TL189',
			name: 'Textos em Teoria, Crítica e História Literária VIII',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#92D940',
			obligatory: false
		},
		'TL207': {
			code: 'TL207',
			name: 'Tópicos em Literatura de Língua Portuguesa: África',
			ementa: 'Estudo de textos, autores e temas da produção cultural e literária em língua portuguesa de países e/ou regiões da África.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5AD940',
			obligatory: false
		},
		'TL208': {
			code: 'TL208',
			name: 'Tópicos em Literatura Brasileira: Autores I',
			ementa: 'Estudo monográfico aprofundado da obra de autores representativos da produção literária no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96440',
			obligatory: false
		},
		'TL209': {
			code: 'TL209',
			name: 'Tópicos em Literatura Hispano-Americana',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária em países latino-americanos de língua espanhola.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8AD940',
			obligatory: false
		},
		'TL211': {
			code: 'TL211',
			name: 'Pesquisa I: Literatura e Imprensa I',
			ementa: 'Introdução à pesquisa das relações entre literatura e imprensa, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95040',
			obligatory: false
		},
		'TL212': {
			code: 'TL212',
			name: 'Pesquisa II: Literatura e Outras Artes I',
			ementa: 'Introdução à pesquisa das relações entre literatura e outras artes, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40ADD9',
			obligatory: false
		},
		'TL213': {
			code: 'TL213',
			name: 'Pesquisa III: Literatura e Suportes Materiais I',
			ementa: 'Introdução à pesquisa das relações entre literatura e seus suportes materiais e documentais, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A240D9',
			obligatory: false
		},
		'TL214': {
			code: 'TL214',
			name: 'Pesquisa IV: Literatura e Ensino I',
			ementa: 'Introdução à pesquisa das relações entre literatura e ensino, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4049D9',
			obligatory: false
		},
		'TL215': {
			code: 'TL215',
			name: 'Pesquisa V: Literatura e suas Fontes Históricas I',
			ementa: 'Introdução à pesquisa das relações entre literatura e suas fontes históricas, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408C',
			obligatory: false
		},
		'TL216': {
			code: 'TL216',
			name: 'Pesquisa VI: Literatura e Práticas de Leitura I',
			ementa: 'Introdução à pesquisa das relações entre literatura e as diversas práticas de leitura, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D96D',
			obligatory: false
		},
		'TL217': {
			code: 'TL217',
			name: 'Pesquisa VII: Tradução Literária I',
			ementa: 'Introdução à prática de tradução literária.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D985',
			obligatory: false
		},
		'TL219': {
			code: 'TL219',
			name: 'Pesquisa IX: Literatura e Arquivos I',
			ementa: 'Introdução à pesquisa em temas e questões de Literatura Brasileira, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9E40D9',
			obligatory: false
		},
		'TL220': {
			code: 'TL220',
			name: 'Pesquisa X: Teoria Literária I',
			ementa: 'Introdução à pesquisa em teoria literária, com análise de bibliografia pertinente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9640D9',
			obligatory: false
		},
		'TL221': {
			code: 'TL221',
			name: 'Pesquisa XI: Crítica Literária I',
			ementa: 'Introdução à pesquisa em crítica literária, com análise de bibliografia pertinente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D965',
			obligatory: false
		},
		'TL223': {
			code: 'TL223',
			name: 'Tópicos em Pesquisa XVIII: Literatura e Suportes Materiais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B240D9',
			obligatory: false
		},
		'TL224': {
			code: 'TL224',
			name: 'Tópicos em Pesquisa XX: Literatura e Suportes Materiais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4099D9',
			obligatory: false
		},
		'TL225': {
			code: 'TL225',
			name: 'Tópicos em Pesquisa XXI: Literatura e Suportes Materiais IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940A8',
			obligatory: false
		},
		'TL227': {
			code: 'TL227',
			name: 'Tópicos em Literatura de Língua Portuguesa: Ásia',
			ementa: 'Estudo de textos, autores e temas da produção cultural e literária em língua portuguesa de países e/ou regiões da Ásia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94098',
			obligatory: false
		},
		'TL228': {
			code: 'TL228',
			name: 'Tópicos em Literatura Brasileira: Autores II',
			ementa: 'Estudo monográfico aprofundado da obra representativos da produção literária no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D5D9',
			obligatory: false
		},
		'TL229': {
			code: 'TL229',
			name: 'Tópicos em Pesquisa XXI: Literatura e Ensino II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9A040',
			obligatory: false
		},
		'TL230': {
			code: 'TL230',
			name: 'Tópicos em Pesquisa XXII: Literatura e Ensino III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94840',
			obligatory: false
		},
		'TL231': {
			code: 'TL231',
			name: 'Tópicos em Pesquisa XXIII: Literatura e Ensino IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B5D9',
			obligatory: false
		},
		'TL232': {
			code: 'TL232',
			name: 'Tópicos em Pesquisa XXIV: Literatura e suas Fontes Históricas II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4AD940',
			obligatory: false
		},
		'TL233': {
			code: 'TL233',
			name: 'Tópicos em Pesquisa XXV: Literatura e suas Fontes Históricas III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B1',
			obligatory: false
		},
		'TL234': {
			code: 'TL234',
			name: 'Tópicos em Pesquisa XXVI: Literatura e suas Fontes Históricas IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D3',
			obligatory: false
		},
		'TL235': {
			code: 'TL235',
			name: 'Tópicos em Pesquisa XXVII: Literatura e Práticas de Leitura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98040',
			obligatory: false
		},
		'TL236': {
			code: 'TL236',
			name: 'Tópicos em Pesquisa XXVIII: Literatura e Práticas de Leitura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#82D940',
			obligatory: false
		},
		'TL237': {
			code: 'TL237',
			name: 'Tópicos em Pesquisa XXIX: Literatura e Práticas de Leitura IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BED940',
			obligatory: false
		},
		'TL238': {
			code: 'TL238',
			name: 'Tópicos em Literatura Brasileira: Autores III',
			ementa: 'Estudo monográfico aprofundado da obra de autores representativos da produção literária no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5640D9',
			obligatory: false
		},
		'TL239': {
			code: 'TL239',
			name: 'Tópicos em Pesquisa XXX: Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D340',
			obligatory: false
		},
		'TL240': {
			code: 'TL240',
			name: 'Tópicos em Pesquisa XXXI: Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B340',
			obligatory: false
		},
		'TL241': {
			code: 'TL241',
			name: 'Tópicos em Pesquisa XXXII: Tradução Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97440',
			obligatory: false
		},
		'TL242': {
			code: 'TL242',
			name: 'Tópicos em Pesquisa XXXIII: Temas e Questões de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8240D9',
			obligatory: false
		},
		'TL243': {
			code: 'TL243',
			name: 'Tópicos em Pesquisa XXXIV: Temas e Questões de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9C740',
			obligatory: false
		},
		'TL244': {
			code: 'TL244',
			name: 'Tópicos em Pesquisa XXXV: Temas e Questões de Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A1',
			obligatory: false
		},
		'TL245': {
			code: 'TL245',
			name: 'Tópicos em Pesquisa XXXVI: Literatura e Arquivos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D95D',
			obligatory: false
		},
		'TL246': {
			code: 'TL246',
			name: 'Tópicos em Pesquisa XXXVII: Literatura e Arquivos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9ED940',
			obligatory: false
		},
		'TL247': {
			code: 'TL247',
			name: 'Tópicos em Pesquisa XXXVIII: Literatura e Arquivos IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6ED940',
			obligatory: false
		},
		'TL248': {
			code: 'TL248',
			name: 'Tópicos em Pesquisa XXXIX: Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94064',
			obligatory: false
		},
		'TL249': {
			code: 'TL249',
			name: 'Tópicos em Pesquisa XL: Teoria Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D7',
			obligatory: false
		},
		'TL250': {
			code: 'TL250',
			name: 'Tópicos em Pesquisa XL: Teoria Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A640D9',
			obligatory: false
		},
		'TL251': {
			code: 'TL251',
			name: 'Tópicos em Pesquisa XLII: Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7AD940',
			obligatory: false
		},
		'TL252': {
			code: 'TL252',
			name: 'Tópicos em Pesquisa XLIII: Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C6D940',
			obligatory: false
		},
		'TL253': {
			code: 'TL253',
			name: 'Tópicos em Pesquisa XLIV: Crítica Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94048',
			obligatory: false
		},
		'TL254': {
			code: 'TL254',
			name: 'Tópicos em Pesquisa XLV: Historiografia Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40BDD9',
			obligatory: false
		},
		'TL256': {
			code: 'TL256',
			name: 'Tópicos em Pesquisa XLVI: Historiografia Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#405DD9',
			obligatory: false
		},
		'TL257': {
			code: 'TL257',
			name: 'Tópicos em Pesquisa XLVII: Historiografia Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98C40',
			obligatory: false
		},
		'TL258': {
			code: 'TL258',
			name: 'Tópicos Especiais em Literatura Espanhola I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D975',
			obligatory: false
		},
		'TL259': {
			code: 'TL259',
			name: 'Tópicos Especiais em Literatura Espanhola II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4640D9',
			obligatory: false
		},
		'TL260': {
			code: 'TL260',
			name: 'Tópicos Especiais em Literatura Espanhola III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9A9',
			obligatory: false
		},
		'TL304': {
			code: 'TL304',
			name: 'Tópicos Especiais em Literatura Comparada I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B6D940',
			obligatory: false
		},
		'TL305': {
			code: 'TL305',
			name: 'Tópicos Especiais em Literatura Comparada II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9D1',
			obligatory: false
		},
		'TL306': {
			code: 'TL306',
			name: 'Tópicos Especiais em Literatura Comparada III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#96D940',
			obligatory: false
		},
		'TL309': {
			code: 'TL309',
			name: 'Tópico em Literatura Italiana',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária na Itália.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#CED940',
			obligatory: false
		},
		'TL311': {
			code: 'TL311',
			name: 'Tópicos Especiais em Literatura em Língua Inglesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940A4',
			obligatory: false
		},
		'TL312': {
			code: 'TL312',
			name: 'Tópicos Especiais em Literatura em Língua Inglesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40C9D9',
			obligatory: false
		},
		'TL313': {
			code: 'TL313',
			name: 'Tópicos Especiais em Literatura em Língua Inglesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9CD',
			obligatory: false
		},
		'TL314': {
			code: 'TL314',
			name: 'Tópicos Especiais em Literatura em Língua Francesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7A40D9',
			obligatory: false
		},
		'TL315': {
			code: 'TL315',
			name: 'Tópicos Especiais em Literatura em Língua Francesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#66D940',
			obligatory: false
		},
		'TL316': {
			code: 'TL316',
			name: 'Tópicos Especiais em Literatura em Língua Francesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D94D',
			obligatory: false
		},
		'TL317': {
			code: 'TL317',
			name: 'Tópicos Especiais em Literatura em Língua Alemã I',
			ementa: 'Será divulgada por ocasião do oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A6D940',
			obligatory: false
		},
		'TL318': {
			code: 'TL318',
			name: 'Tópicos em Literatura Brasileira: Regiões I',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinadas regiões do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97840',
			obligatory: false
		},
		'TL319': {
			code: 'TL319',
			name: 'Tópicos Especiais em Literatura em Língua Alemã II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940BF',
			obligatory: false
		},
		'TL320': {
			code: 'TL320',
			name: 'Tópicos em Teoria Literária',
			ementa: 'Estudo avançado de questões da teoria, da crítica e da historiografia literária, situadas na era clássica, moderna ou contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AE40D9',
			obligatory: false
		},
		'TL321': {
			code: 'TL321',
			name: 'Tópicos Especiais em Literatura em Língua Alemã III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#407DD9',
			obligatory: false
		},
		'TL322': {
			code: 'TL322',
			name: 'Tópicos Especiais em Literatura em Línguas Estrangeiras I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#BAD940',
			obligatory: false
		},
		'TL323': {
			code: 'TL323',
			name: 'Tópicos Especiais em Literatura em Línguas Estrangeiras II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94440',
			obligatory: false
		},
		'TL324': {
			code: 'TL324',
			name: 'Tópicos Especiais em Literatura em Línguas Estrangeiras III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#BE40D9',
			obligatory: false
		},
		'TL328': {
			code: 'TL328',
			name: 'Tópicos em Literatura Brasileira: Regiões II',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinadas regiões do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940B3',
			obligatory: false
		},
		'TL338': {
			code: 'TL338',
			name: 'Tópicos em Literatura Brasileira: Regiões III',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinadas regiões do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9C340',
			obligatory: false
		},
		'TL409': {
			code: 'TL409',
			name: 'Tópico em Literatura Espanhola',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária na Espanha.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9A40D9',
			obligatory: false
		},
		'TL418': {
			code: 'TL418',
			name: 'Tópicos em Literatura Brasileira: Movimentos I',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinados movimentos ou escolas estéticas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D949',
			obligatory: false
		},
		'TL420': {
			code: 'TL420',
			name: 'Tópicos em Literatura Comparada',
			ementa: 'Estudo de textos, autores, períodos, gêneros ou temas relevantes da produção cultural e literária internacional em abordagem comparatista.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: false
		},
		'TL428': {
			code: 'TL428',
			name: 'Tópicos em Literatura Brasileira: Movimentos II',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinados movimentos ou escolas estéticas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40A5D9',
			obligatory: false
		},
		'TL438': {
			code: 'TL438',
			name: 'Tópicos em Literatura Brasileira: Movimentos III',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinados movimentos ou escolas estéticas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4ED940',
			obligatory: false
		},
		'TL509': {
			code: 'TL509',
			name: 'Tópico em Literatura em Língua Inglesa',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária em países e/ou regiões de língua inglesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940A0',
			obligatory: false
		},
		'TL518': {
			code: 'TL518',
			name: 'Tópicos em Literatura Brasileira: Gêneros I',
			ementa: 'Estudo monográfico aprofundado da produção de determinados gêneros literários no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#52D940',
			obligatory: false
		},
		'TL528': {
			code: 'TL528',
			name: 'Tópicos em Literatura Brasileira: Gêneros II',
			ementa: 'Estudo monográfico aprofundado da produção de determinados gêneros literários no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96040',
			obligatory: false
		},
		'TL538': {
			code: 'TL538',
			name: 'Tópicos em Literatura Brasileira: Gêneros III',
			ementa: 'Estudo monográfico aprofundado da produção de determinados gêneros literários no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D945',
			obligatory: false
		},
		'TL609': {
			code: 'TL609',
			name: 'Tópico em Literatura em Língua Francesa',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária em países e/ou regiões de língua francesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940B7',
			obligatory: false
		},
		'TL618': {
			code: 'TL618',
			name: 'Tópicos em Literatura Brasileira: Marginais I',
			ementa: 'Estudo monográfico aprofundado da produção literária de autores, obras e/ou movimentos no Brasil marginais em relação às histórias literárias conhecidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940CB',
			obligatory: false
		},
		'TL628': {
			code: 'TL628',
			name: 'Tópicos em Literatura Brasileira: Marginais II',
			ementa: 'Estudo monográfico aprofundado da produção literária de autores, obras e/ou movimentos no Brasil marginais em relação às histórias literárias conhecidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5ED940',
			obligatory: false
		},
		'TL638': {
			code: 'TL638',
			name: 'Tópicos em Literatura Brasileira: Marginais III',
			ementa: 'Estudo monográfico aprofundado da produção literária de autores, obras e/ou movimentos no Brasil marginais em relação às histórias literárias conhecidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6AD940',
			obligatory: false
		},
		'TL709': {
			code: 'TL709',
			name: 'Tópico em Literatura em Língua Alemã',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária em países e/ou regiões de língua alemã.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940CF',
			obligatory: false
		},
		'TL809': {
			code: 'TL809',
			name: 'Tópico em Literatura em Línguas Estrangeiras',
			ementa: 'Estudo de textos, autores e temas relevantes da produção cultural e literária em outras línguas estrangeiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#62D940',
			obligatory: false
		}
	}
};

export default catalogue;