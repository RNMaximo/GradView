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

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['TL129', 'TL139', 'TL144', 'TL145', 'TL146', 'TL149', 'TL151', 'TL152', 'TL153', 'TL154', 'TL156', 'TL159', 'TL161', 'TL169', 'TL173', 'TL190', 'TL191', 'TL192', 'TL193', 'TL194', 'TL195', 'TL196', 'TL197', 'TL198', 'TL199', 'TL206', 'TL210', 'TL226', 'TL264', 'TL265'],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['TL162', 'TL163', 'TL164', 'TL165', 'TL166', 'TL170', 'TL171', 'TL172', 'TL223', 'TL224', 'TL225', 'TL229', 'TL230', 'TL231', 'TL232', 'TL233', 'TL234', 'TL235', 'TL236', 'TL237', 'TL239', 'TL240', 'TL241', 'TL242', 'TL243', 'TL244', 'TL245', 'TL246', 'TL247', 'TL248', 'TL249', 'TL250', 'TL251', 'TL252', 'TL253', 'TL254', 'TL256', 'TL257'],
		},
		'elet-3': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['TL055', 'TL059', 'TL060', 'TL061', 'TL062', 'TL063', 'TL064', 'TL065', 'TL066', 'TL067', 'TL068', 'TL069', 'TL070', 'TL072', 'TL073', 'TL074', 'TL075', 'TL076', 'TL077', 'TL078', 'TL079', 'TL080', 'TL081', 'TL082', 'TL083', 'TL084', 'TL085', 'TL086', 'TL090', 'TL091', 'TL092', 'TL096', 'TL097', 'TL098', 'TL099', 'TL107', 'TL120', 'TL121', 'TL122', 'TL123', 'TL124', 'TL125', 'TL126', 'TL127', 'TL130', 'TL131', 'TL132', 'TL133', 'TL134', 'TL135', 'TL136', 'TL137', 'TL140', 'TL141', 'TL142', 'TL143', 'TL147', 'TL150', 'TL157', 'TL160', 'TL167', 'TL207', 'TL209', 'TL227', 'TL258', 'TL259', 'TL260', 'TL304', 'TL305', 'TL306', 'TL309', 'TL311', 'TL312', 'TL313', 'TL314', 'TL315', 'TL316', 'TL317', 'TL319', 'TL320', 'TL321', 'TL322', 'TL323', 'TL324', 'TL409', 'TL420', 'TL509', 'TL609', 'TL709', 'TL809'],
		},
		'elet-4': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['TL087', 'TL088', 'TL089', 'TL128', 'TL138', 'TL148', 'TL158', 'TL168', 'TL208', 'TL228', 'TL238', 'TL318', 'TL328', 'TL338', 'TL418', 'TL428', 'TL438', 'TL518', 'TL528', 'TL538', 'TL618', 'TL628', 'TL638'],
		},
		'elet-5': {
			credits: 16,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 16,
			hasRestrictions: false,
			subjects: [],
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
			color: '#404ED9',
			obligatory: true
		},
		'TL109': {
			code: 'TL109',
			name: 'Introdução aos Estudos Literários',
			ementa: 'Análise de textos teóricos, críticos e de história literária, bem como de textos em prosa e poesia, que possibilitem uma introdução ao campo dos estudos literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#84D940',
			obligatory: true
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94089',
			obligatory: true
		},
		'TL155': {
			code: 'TL155',
			name: 'Tópicos em Literatura Clássica I',
			ementa: 'Introdução ao estudo de temas, obras e autores paradigmáticos da tradição greco-latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C840D9',
			obligatory: true
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#75D940',
			obligatory: true
		},
		'TL255': {
			code: 'TL255',
			name: 'Tópicos em Literatura Clássica II',
			ementa: 'Estudo de temas, obras e autores paradigmáticos da tradição greco-latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940B4',
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
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:24},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'TL908': {
			code: 'TL908',
			name: 'Monografia I',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa no campo dos Estudos Literários, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94049',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'TL909': {
			code: 'TL909',
			name: 'Monografia II',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa no campo dos Estudos Literários, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#409CD9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'TL055': {
			code: 'TL055',
			name: 'Tópicos Especiais em Literatura Infantil',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9D6',
			obligatory: false
		},
		'TL059': {
			code: 'TL059',
			name: 'Tópicos Especiais em Estética e Literatura I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4540D9',
			obligatory: false
		},
		'TL060': {
			code: 'TL060',
			name: 'Tópicos Especiais em Estética e Literatura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9408D',
			obligatory: false
		},
		'TL061': {
			code: 'TL061',
			name: 'Tópicos Especiais em Estética e Literatura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D992',
			obligatory: false
		},
		'TL062': {
			code: 'TL062',
			name: 'Tópicos Especiais em Teoria Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D975',
			obligatory: false
		},
		'TL063': {
			code: 'TL063',
			name: 'Tópicos Especiais em Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9C840',
			obligatory: false
		},
		'TL064': {
			code: 'TL064',
			name: 'Tópicos Especiais em Teoria Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D95D',
			obligatory: false
		},
		'TL065': {
			code: 'TL065',
			name: 'Tópicos Especiais em Crítica Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940A6',
			obligatory: false
		},
		'TL066': {
			code: 'TL066',
			name: 'Tópicos Especiais em Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D989',
			obligatory: false
		},
		'TL067': {
			code: 'TL067',
			name: 'Tópicos Especiais em Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5D40D9',
			obligatory: false
		},
		'TL068': {
			code: 'TL068',
			name: 'Tópicos Especiais em História Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7FD940',
			obligatory: false
		},
		'TL069': {
			code: 'TL069',
			name: 'Tópicos Especiais em História Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40A6D9',
			obligatory: false
		},
		'TL070': {
			code: 'TL070',
			name: 'Tópicos Especiais em História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4062D9',
			obligatory: false
		},
		'TL072': {
			code: 'TL072',
			name: 'Tópicos Especiais de Literatura e Sociedade I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9A6',
			obligatory: false
		},
		'TL073': {
			code: 'TL073',
			name: 'Tópicos Especiais de Literatura e Sociedade II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#BED940',
			obligatory: false
		},
		'TL074': {
			code: 'TL074',
			name: 'Tópicos Especiais de Literatura e Sociedade III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9D140',
			obligatory: false
		},
		'TL075': {
			code: 'TL075',
			name: 'Tópicos Especiais de Literatura e História I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7AD940',
			obligatory: false
		},
		'TL076': {
			code: 'TL076',
			name: 'Tópicos Especiais de Literatura e História II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#45D940',
			obligatory: false
		},
		'TL077': {
			code: 'TL077',
			name: 'Tópicos Especiais de Literatura e História III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D98D40',
			obligatory: false
		},
		'TL078': {
			code: 'TL078',
			name: 'Tópicos Especiais de Literatura e Cultura Popular I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96740',
			obligatory: false
		},
		'TL079': {
			code: 'TL079',
			name: 'Tópicos Especiais de Literatura e Cultura Popular II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D997',
			obligatory: false
		},
		'TL080': {
			code: 'TL080',
			name: 'Tópicos Especiais de Literatura e Cultura Popular III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4058D9',
			obligatory: false
		},
		'TL081': {
			code: 'TL081',
			name: 'Tópicos Especiais de Literatura e Psicanálise I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9404E',
			obligatory: false
		},
		'TL082': {
			code: 'TL082',
			name: 'Tópicos Especiais de Literatura e Psicanálise II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4940D9',
			obligatory: false
		},
		'TL083': {
			code: 'TL083',
			name: 'Tópicos Especiais de Literatura e Psicanálise III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9D940',
			obligatory: false
		},
		'TL084': {
			code: 'TL084',
			name: 'Tópicos Especiais de Literatura Comparada I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B4D940',
			obligatory: false
		},
		'TL085': {
			code: 'TL085',
			name: 'Tópicos Especiais de Literatura Comparada II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9C8',
			obligatory: false
		},
		'TL086': {
			code: 'TL086',
			name: 'Tópicos Especiais de Literatura Comparada III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40B4D9',
			obligatory: false
		},
		'TL087': {
			code: 'TL087',
			name: 'Tópicos Especiais de Literatura Brasileira I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D99C',
			obligatory: false
		},
		'TL088': {
			code: 'TL088',
			name: 'Tópicos Especiais de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D958',
			obligatory: false
		},
		'TL089': {
			code: 'TL089',
			name: 'Tópicos Especiais de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94084',
			obligatory: false
		},
		'TL090': {
			code: 'TL090',
			name: 'Tópicos Especiais de Literatura Portuguesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4049D9',
			obligatory: false
		},
		'TL091': {
			code: 'TL091',
			name: 'Tópicos Especiais de Literatura Portuguesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9BE',
			obligatory: false
		},
		'TL092': {
			code: 'TL092',
			name: 'Tópicos Especiais de Literatura Portuguesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D640D9',
			obligatory: false
		},
		'TL096': {
			code: 'TL096',
			name: 'Tópicos Especiais de Literatura e Outras Produções Culturais I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94045',
			obligatory: false
		},
		'TL097': {
			code: 'TL097',
			name: 'Tópicos Especiais de Literatura e Outras Produções Culturais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#70D940',
			obligatory: false
		},
		'TL098': {
			code: 'TL098',
			name: 'Tópicos Especiais de Literatura e Outras Produções Culturais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#67D940',
			obligatory: false
		},
		'TL099': {
			code: 'TL099',
			name: 'Tópicos em Literatura Infantil',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9C340',
			obligatory: false
		},
		'TL107': {
			code: 'TL107',
			name: 'Tópicos em História Literária Portuguesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97540',
			obligatory: false
		},
		'TL120': {
			code: 'TL120',
			name: 'Tópicos em Teoria e História Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A140D9',
			obligatory: false
		},
		'TL121': {
			code: 'TL121',
			name: 'Tópicos Especiais de Literatura e Identidade Cultural I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B940D9',
			obligatory: false
		},
		'TL122': {
			code: 'TL122',
			name: 'Tópicos Especiais de Literatura e Identidade Cultural II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7540D9',
			obligatory: false
		},
		'TL123': {
			code: 'TL123',
			name: 'Tópicos Especiais de Literatura e Identidade Cultural III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40ABD9',
			obligatory: false
		},
		'TL124': {
			code: 'TL124',
			name: 'Tópicos Especiais de Literatura e Filosofia I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9C40D9',
			obligatory: false
		},
		'TL125': {
			code: 'TL125',
			name: 'Tópicos Especiais de Literatura e Filosofia II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96240',
			obligatory: false
		},
		'TL126': {
			code: 'TL126',
			name: 'Tópicos Especiais de Literatura e Filosofia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4070D9',
			obligatory: false
		},
		'TL127': {
			code: 'TL127',
			name: 'Tópicos em História Literária Portuguesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940CD',
			obligatory: false
		},
		'TL128': {
			code: 'TL128',
			name: 'Tópicos em Literatura Brasileira I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D953',
			obligatory: false
		},
		'TL129': {
			code: 'TL129',
			name: 'Tópicos Especiais em Teatro I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94067',
			obligatory: false
		},
		'TL130': {
			code: 'TL130',
			name: 'Tópicos em Teoria e História Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D1D940',
			obligatory: false
		},
		'TL131': {
			code: 'TL131',
			name: 'Tópicos Especiais de Literatura Italiana I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8D40D9',
			obligatory: false
		},
		'TL132': {
			code: 'TL132',
			name: 'Tópicos Especiais de Literatura Italiana II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40C3D9',
			obligatory: false
		},
		'TL133': {
			code: 'TL133',
			name: 'Tópicos Especiais de Literatura Italiana III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C340D9',
			obligatory: false
		},
		'TL134': {
			code: 'TL134',
			name: 'Tópicos Especiais de Literatura e Geografia I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: false
		},
		'TL135': {
			code: 'TL135',
			name: 'Tópicos Especiais de Literatura e Geografia II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4045D9',
			obligatory: false
		},
		'TL136': {
			code: 'TL136',
			name: 'Tópicos Especiais de Literatura e Geografia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5340D9',
			obligatory: false
		},
		'TL137': {
			code: 'TL137',
			name: 'Tópicos em História Literária Portuguesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9A640',
			obligatory: false
		},
		'TL138': {
			code: 'TL138',
			name: 'Tópicos em Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C3D940',
			obligatory: false
		},
		'TL139': {
			code: 'TL139',
			name: 'Tópicos Especiais em Teatro II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B9D9',
			obligatory: false
		},
		'TL140': {
			code: 'TL140',
			name: 'Tópicos em Teoria e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D6D9',
			obligatory: false
		},
		'TL141': {
			code: 'TL141',
			name: 'Tópicos Especiais em Tradução Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4075D9',
			obligatory: false
		},
		'TL142': {
			code: 'TL142',
			name: 'Tópicos Especiais em Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D949',
			obligatory: false
		},
		'TL143': {
			code: 'TL143',
			name: 'Tópicos Especiais em Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99740',
			obligatory: false
		},
		'TL144': {
			code: 'TL144',
			name: 'Tópicos Especiais em Prosa Não-Ficcional I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BE40D9',
			obligatory: false
		},
		'TL145': {
			code: 'TL145',
			name: 'Tópicos X: Textos em Teatro III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D1',
			obligatory: false
		},
		'TL146': {
			code: 'TL146',
			name: 'Tópicos XI: Textos em Teatro IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#406BD9',
			obligatory: false
		},
		'TL147': {
			code: 'TL147',
			name: 'Tópicos em História Literária Portuguesa IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4067D9',
			obligatory: false
		},
		'TL148': {
			code: 'TL148',
			name: 'Tópicos em Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7F40D9',
			obligatory: false
		},
		'TL149': {
			code: 'TL149',
			name: 'Tópicos XII: Textos em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A640D9',
			obligatory: false
		},
		'TL150': {
			code: 'TL150',
			name: 'Tópicos em Teoria e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#89D940',
			obligatory: false
		},
		'TL151': {
			code: 'TL151',
			name: 'Tópicos XIII: Textos em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C3',
			obligatory: false
		},
		'TL152': {
			code: 'TL152',
			name: 'Tópicos XIV: Textos em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94075',
			obligatory: false
		},
		'TL153': {
			code: 'TL153',
			name: 'Tópicos XV: Textos em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D96B',
			obligatory: false
		},
		'TL154': {
			code: 'TL154',
			name: 'Tópicos XVI: Textos em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#405DD9',
			obligatory: false
		},
		'TL156': {
			code: 'TL156',
			name: 'Tópicos XVII: Textos em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#97D940',
			obligatory: false
		},
		'TL157': {
			code: 'TL157',
			name: 'Tópicos em História Literária Portuguesa V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#CD40D9',
			obligatory: false
		},
		'TL158': {
			code: 'TL158',
			name: 'Tópicos em Literatura Brasileira IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4ED940',
			obligatory: false
		},
		'TL159': {
			code: 'TL159',
			name: 'Tópicos XVIII: Textos em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9740D9',
			obligatory: false
		},
		'TL160': {
			code: 'TL160',
			name: 'Tópicos em Teoria e História Literária V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C8D940',
			obligatory: false
		},
		'TL161': {
			code: 'TL161',
			name: 'Tópicos XIX: Textos em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94940',
			obligatory: false
		},
		'TL162': {
			code: 'TL162',
			name: 'Tópicos em Pesquisa XIII: Literatura e Imprensa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#49D940',
			obligatory: false
		},
		'TL163': {
			code: 'TL163',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94053',
			obligatory: false
		},
		'TL164': {
			code: 'TL164',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D1D9',
			obligatory: false
		},
		'TL165': {
			code: 'TL165',
			name: 'Tópicos em Pesquisa I: Teoria Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4092D9',
			obligatory: false
		},
		'TL166': {
			code: 'TL166',
			name: 'Tópicos em Pesquisa II: Crítica Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A1',
			obligatory: false
		},
		'TL167': {
			code: 'TL167',
			name: 'Tópicos em História Literária Portuguesa VI',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D6D940',
			obligatory: false
		},
		'TL168': {
			code: 'TL168',
			name: 'Tópicos em Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6B40D9',
			obligatory: false
		},
		'TL169': {
			code: 'TL169',
			name: 'Tópicos Especiais em Prosa Não-Ficcional II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D984',
			obligatory: false
		},
		'TL170': {
			code: 'TL170',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5DD940',
			obligatory: false
		},
		'TL171': {
			code: 'TL171',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9',
			obligatory: false
		},
		'TL172': {
			code: 'TL172',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94540',
			obligatory: false
		},
		'TL173': {
			code: 'TL173',
			name: 'Tópicos Especiais em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#62D940',
			obligatory: false
		},
		'TL190': {
			code: 'TL190',
			name: 'Tópicos Especiais em Poesia I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4E40D9',
			obligatory: false
		},
		'TL191': {
			code: 'TL191',
			name: 'Tópicos Especiais em Poesia II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D6',
			obligatory: false
		},
		'TL192': {
			code: 'TL192',
			name: 'Tópicos Especiais em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94E40',
			obligatory: false
		},
		'TL193': {
			code: 'TL193',
			name: 'Tópicos Especiais em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B440D9',
			obligatory: false
		},
		'TL194': {
			code: 'TL194',
			name: 'Tópicos Especiais em Poesia V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8440D9',
			obligatory: false
		},
		'TL195': {
			code: 'TL195',
			name: 'Tópicos Especiais em Prosa de Ficção I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940AB',
			obligatory: false
		},
		'TL196': {
			code: 'TL196',
			name: 'Tópicos Especiais em Prosa de Ficção II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D94E',
			obligatory: false
		},
		'TL197': {
			code: 'TL197',
			name: 'Tópicos Especiais em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9AF40',
			obligatory: false
		},
		'TL198': {
			code: 'TL198',
			name: 'Tópicos Especiais em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C3',
			obligatory: false
		},
		'TL199': {
			code: 'TL199',
			name: 'Tópicos Especiais em Prosa de Ficção V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99240',
			obligatory: false
		},
		'TL206': {
			code: 'TL206',
			name: 'Tópicos Especiais em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407FD9',
			obligatory: false
		},
		'TL207': {
			code: 'TL207',
			name: 'Tópicos em Literatura de Língua Portuguesa: África',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8940D9',
			obligatory: false
		},
		'TL208': {
			code: 'TL208',
			name: 'Tópicos em Literatura Brasileira: Autores I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#407AD9',
			obligatory: false
		},
		'TL209': {
			code: 'TL209',
			name: 'Tópicos em Literatura Hispano-Americana',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A1D940',
			obligatory: false
		},
		'TL210': {
			code: 'TL210',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40BED9',
			obligatory: false
		},
		'TL223': {
			code: 'TL223',
			name: 'Tópicos em Pesquisa XVIII: Literatura e Suportes Materiais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9405D',
			obligatory: false
		},
		'TL224': {
			code: 'TL224',
			name: 'Tópicos em Pesquisa XX: Literatura e Suportes Materiais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6240D9',
			obligatory: false
		},
		'TL225': {
			code: 'TL225',
			name: 'Tópicos em Pesquisa XXI: Literatura e Suportes Materiais IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409C',
			obligatory: false
		},
		'TL226': {
			code: 'TL226',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D945',
			obligatory: false
		},
		'TL227': {
			code: 'TL227',
			name: 'Tópicos em Literatura de Língua Portuguesa: Ásia',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9B940',
			obligatory: false
		},
		'TL228': {
			code: 'TL228',
			name: 'Tópicos em Literatura Brasileira: Autores II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D967',
			obligatory: false
		},
		'TL229': {
			code: 'TL229',
			name: 'Tópicos em Pesquisa XXI: Literatura e Ensino II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#ABD940',
			obligatory: false
		},
		'TL230': {
			code: 'TL230',
			name: 'Tópicos em Pesquisa XXII: Literatura e Ensino III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CDD940',
			obligatory: false
		},
		'TL231': {
			code: 'TL231',
			name: 'Tópicos em Pesquisa XXIII: Literatura e Ensino IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9407F',
			obligatory: false
		},
		'TL232': {
			code: 'TL232',
			name: 'Tópicos em Pesquisa XXIV: Literatura e suas Fontes Históricas II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94062',
			obligatory: false
		},
		'TL233': {
			code: 'TL233',
			name: 'Tópicos em Pesquisa XXV: Literatura e suas Fontes Históricas III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4084D9',
			obligatory: false
		},
		'TL234': {
			code: 'TL234',
			name: 'Tópicos em Pesquisa XXVI: Literatura e suas Fontes Históricas IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40CDD9',
			obligatory: false
		},
		'TL235': {
			code: 'TL235',
			name: 'Tópicos em Pesquisa XXVII: Literatura e Práticas de Leitura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96B40',
			obligatory: false
		},
		'TL236': {
			code: 'TL236',
			name: 'Tópicos em Pesquisa XXVIII: Literatura e Práticas de Leitura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9CD',
			obligatory: false
		},
		'TL237': {
			code: 'TL237',
			name: 'Tópicos em Pesquisa XXIX: Literatura e Práticas de Leitura IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97A40',
			obligatory: false
		},
		'TL238': {
			code: 'TL238',
			name: 'Tópicos em Literatura Brasileira: Autores III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9B4',
			obligatory: false
		},
		'TL239': {
			code: 'TL239',
			name: 'Tópicos em Pesquisa XXX: Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5840D9',
			obligatory: false
		},
		'TL240': {
			code: 'TL240',
			name: 'Tópicos em Pesquisa XXXI: Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B440',
			obligatory: false
		},
		'TL241': {
			code: 'TL241',
			name: 'Tópicos em Pesquisa XXXII: Tradução Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AFD940',
			obligatory: false
		},
		'TL242': {
			code: 'TL242',
			name: 'Tópicos em Pesquisa XXXIII: Temas e Questões de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94092',
			obligatory: false
		},
		'TL243': {
			code: 'TL243',
			name: 'Tópicos em Pesquisa XXXIV: Temas e Questões de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940A1',
			obligatory: false
		},
		'TL244': {
			code: 'TL244',
			name: 'Tópicos em Pesquisa XXXV: Temas e Questões de Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7A40D9',
			obligatory: false
		},
		'TL245': {
			code: 'TL245',
			name: 'Tópicos em Pesquisa XXXVI: Literatura e Arquivos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98D',
			obligatory: false
		},
		'TL246': {
			code: 'TL246',
			name: 'Tópicos em Pesquisa XXXVII: Literatura e Arquivos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C8',
			obligatory: false
		},
		'TL247': {
			code: 'TL247',
			name: 'Tópicos em Pesquisa XXXVIII: Literatura e Arquivos IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4097D9',
			obligatory: false
		},
		'TL248': {
			code: 'TL248',
			name: 'Tópicos em Pesquisa XXXIX: Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#92D940',
			obligatory: false
		},
		'TL249': {
			code: 'TL249',
			name: 'Tópicos em Pesquisa XL: Teoria Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AB40D9',
			obligatory: false
		},
		'TL250': {
			code: 'TL250',
			name: 'Tópicos em Pesquisa XL: Teoria Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#408DD9',
			obligatory: false
		},
		'TL251': {
			code: 'TL251',
			name: 'Tópicos em Pesquisa XLII: Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9CD940',
			obligatory: false
		},
		'TL252': {
			code: 'TL252',
			name: 'Tópicos em Pesquisa XLIII: Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94058',
			obligatory: false
		},
		'TL253': {
			code: 'TL253',
			name: 'Tópicos em Pesquisa XLIV: Crítica Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D640',
			obligatory: false
		},
		'TL254': {
			code: 'TL254',
			name: 'Tópicos em Pesquisa XLV: Historiografia Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D970',
			obligatory: false
		},
		'TL256': {
			code: 'TL256',
			name: 'Tópicos em Pesquisa XLVI: Historiografia Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98940',
			obligatory: false
		},
		'TL257': {
			code: 'TL257',
			name: 'Tópicos em Pesquisa XLVII: Historiografia Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B9',
			obligatory: false
		},
		'TL258': {
			code: 'TL258',
			name: 'Tópicos Especiais em Literatura Espanhola I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6740D9',
			obligatory: false
		},
		'TL259': {
			code: 'TL259',
			name: 'Tópicos Especiais em Literatura Espanhola II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40A1D9',
			obligatory: false
		},
		'TL260': {
			code: 'TL260',
			name: 'Tópicos Especiais em Literatura Espanhola III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40AFD9',
			obligatory: false
		},
		'TL264': {
			code: 'TL264',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7040D9',
			obligatory: false
		},
		'TL265': {
			code: 'TL265',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B9',
			obligatory: false
		},
		'TL304': {
			code: 'TL304',
			name: 'Tópicos Especiais em Literatura Comparada I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9AB40',
			obligatory: false
		},
		'TL305': {
			code: 'TL305',
			name: 'Tópicos Especiais em Literatura Comparada II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9AB',
			obligatory: false
		},
		'TL306': {
			code: 'TL306',
			name: 'Tópicos Especiais em Literatura Comparada III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97040',
			obligatory: false
		},
		'TL309': {
			code: 'TL309',
			name: 'Tópico em Literatura Italiana',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97F40',
			obligatory: false
		},
		'TL311': {
			code: 'TL311',
			name: 'Tópicos Especiais em Literatura em Língua Inglesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9A140',
			obligatory: false
		},
		'TL312': {
			code: 'TL312',
			name: 'Tópicos Especiais em Literatura em Língua Inglesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4089D9',
			obligatory: false
		},
		'TL313': {
			code: 'TL313',
			name: 'Tópicos Especiais em Literatura em Língua Inglesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40C8D9',
			obligatory: false
		},
		'TL314': {
			code: 'TL314',
			name: 'Tópicos Especiais em Literatura em Língua Francesa I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940AF',
			obligatory: false
		},
		'TL315': {
			code: 'TL315',
			name: 'Tópicos Especiais em Literatura em Língua Francesa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4053D9',
			obligatory: false
		},
		'TL316': {
			code: 'TL316',
			name: 'Tópicos Especiais em Literatura em Língua Francesa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99C40',
			obligatory: false
		},
		'TL317': {
			code: 'TL317',
			name: 'Tópicos Especiais em Literatura em Língua Alemã I',
			ementa: 'Será divulgada por ocasião do oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9AF',
			obligatory: false
		},
		'TL318': {
			code: 'TL318',
			name: 'Tópicos em Literatura Brasileira: Regiões I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94070',
			obligatory: false
		},
		'TL319': {
			code: 'TL319',
			name: 'Tópicos Especiais em Literatura em Língua Alemã II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95840',
			obligatory: false
		},
		'TL320': {
			code: 'TL320',
			name: 'Tópicos em Teoria Literária',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D97F',
			obligatory: false
		},
		'TL321': {
			code: 'TL321',
			name: 'Tópicos Especiais em Literatura em Língua Alemã III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9BE40',
			obligatory: false
		},
		'TL322': {
			code: 'TL322',
			name: 'Tópicos Especiais em Literatura em Línguas Estrangeiras I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D140D9',
			obligatory: false
		},
		'TL323': {
			code: 'TL323',
			name: 'Tópicos Especiais em Literatura em Línguas Estrangeiras II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9CD40',
			obligatory: false
		},
		'TL324': {
			code: 'TL324',
			name: 'Tópicos Especiais em Literatura em Línguas Estrangeiras III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: false
		},
		'TL328': {
			code: 'TL328',
			name: 'Tópicos em Literatura Brasileira: Regiões II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#53D940',
			obligatory: false
		},
		'TL338': {
			code: 'TL338',
			name: 'Tópicos em Literatura Brasileira: Regiões III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9407A',
			obligatory: false
		},
		'TL409': {
			code: 'TL409',
			name: 'Tópico em Literatura Espanhola',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6BD940',
			obligatory: false
		},
		'TL418': {
			code: 'TL418',
			name: 'Tópicos em Literatura Brasileira: Movimentos I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940BE',
			obligatory: false
		},
		'TL420': {
			code: 'TL420',
			name: 'Tópicos em Literatura Comparada',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94097',
			obligatory: false
		},
		'TL428': {
			code: 'TL428',
			name: 'Tópicos em Literatura Brasileira: Movimentos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D97A',
			obligatory: false
		},
		'TL438': {
			code: 'TL438',
			name: 'Tópicos em Literatura Brasileira: Movimentos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D962',
			obligatory: false
		},
		'TL509': {
			code: 'TL509',
			name: 'Tópico em Literatura em Língua Inglesa',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9240D9',
			obligatory: false
		},
		'TL518': {
			code: 'TL518',
			name: 'Tópicos em Literatura Brasileira: Gêneros I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AF40D9',
			obligatory: false
		},
		'TL528': {
			code: 'TL528',
			name: 'Tópicos em Literatura Brasileira: Gêneros II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95D40',
			obligatory: false
		},
		'TL538': {
			code: 'TL538',
			name: 'Tópicos em Literatura Brasileira: Gêneros III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D98440',
			obligatory: false
		},
		'TL609': {
			code: 'TL609',
			name: 'Tópico em Literatura em Língua Francesa',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A6D940',
			obligatory: false
		},
		'TL618': {
			code: 'TL618',
			name: 'Tópicos em Literatura Brasileira: Marginais I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8DD940',
			obligatory: false
		},
		'TL628': {
			code: 'TL628',
			name: 'Tópicos em Literatura Brasileira: Marginais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9406B',
			obligatory: false
		},
		'TL638': {
			code: 'TL638',
			name: 'Tópicos em Literatura Brasileira: Marginais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95340',
			obligatory: false
		},
		'TL709': {
			code: 'TL709',
			name: 'Tópico em Literatura em Língua Alemã',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#58D940',
			obligatory: false
		},
		'TL809': {
			code: 'TL809',
			name: 'Tópico em Literatura em Línguas Estrangeiras',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9D1',
			obligatory: false
		}
	}
};

export default catalogue;
