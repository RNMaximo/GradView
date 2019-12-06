const catalogue = {
	totalCredits: 230,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MU105', 'MU058', 'MU143', 'MU120', 'MU360', 'MU193']
		},
		'sem-2': {
			id: '2',
			subjects: ['MU049', 'MU059', 'MU205', 'MU220', 'MU243', 'MU293', 'MU460']
		},
		'sem-3': {
			id: '3',
			subjects: ['MU035', 'MU060', 'MU114', 'MU146', 'MU171', 'MU393', 'MU560', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['MU036', 'MU061', 'MU214', 'MU246', 'MU271', 'MU493', 'MU660', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['MU140', 'MU155', 'MU189', 'MU190', 'MU314', 'MU346', 'MU371', 'MU372']
		},
		'sem-6': {
			id: '6',
			subjects: ['MU240', 'MU255', 'MU289', 'MU290', 'MU414', 'MU446', 'MU471', 'MU472', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['MU165', 'MU355', 'MU389', 'MU571', 'ELET07', 'MU572']
		},
		'sem-8': {
			id: '8',
			subjects: ['MU265', 'MU455', 'MU489', 'MU671', 'MU672', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['ELET09', 'MU771', 'MU772']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'MU871', 'MU872', 'MU999']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---', 'MP---', 'MU---'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---'],
		},
		'elet-4': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['MP101', 'MP102', 'MP103', 'MP104', 'MP105', 'MP201', 'MP202', 'MP203', 'MP204', 'MP205', 'MP301', 'MP302', 'MP303', 'MP304', 'MP305', 'MP401', 'MP402', 'MP403', 'MP404', 'MP405', 'MU102', 'MU103', 'MU104', 'MU106', 'MU109', 'MU121', 'MU123', 'MU124', 'MU126', 'MU127', 'MU184', 'MU186', 'MU192', 'MU194', 'MU196', 'MU202', 'MU203', 'MU204', 'MU206', 'MU209', 'MU221', 'MU223', 'MU224', 'MU226', 'MU227', 'MU284', 'MU286', 'MU292', 'MU294', 'MU296', 'MU302', 'MU303', 'MU304', 'MU306', 'MU309', 'MU321', 'MU323', 'MU324', 'MU326', 'MU327', 'MU384', 'MU386', 'MU392', 'MU394', 'MU396', 'MU402', 'MU403', 'MU404', 'MU406', 'MU409', 'MU421', 'MU423', 'MU424', 'MU426', 'MU427', 'MU484', 'MU486', 'MU492', 'MU494', 'MU496'],
		},
	},

	subjects: {
		'MU058': {
			code: 'MU058',
			name: 'Rítmica I',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#46B0B9',
			obligatory: true
		},
		'MU105': {
			code: 'MU105',
			name: 'Estruturação Musical I',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B98A',
			obligatory: true
		},
		'MU120': {
			code: 'MU120',
			name: 'Coral I',
			ementa: 'Participação no coral dos Cursos de Bacharelado em Música e Licenciatura em Música.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9466B',
			obligatory: true
		},
		'MU143': {
			code: 'MU143',
			name: 'Iniciação à Composição I',
			ementa: 'Introdução às principais técnicas de composição musical. Prática e exercícios supervisionados.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9467E',
			obligatory: true
		},
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#B99146',
			obligatory: true
		},
		'MU360': {
			code: 'MU360',
			name: 'História da Música I',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94691',
			obligatory: true
		},
		'MU049': {
			code: 'MU049',
			name: 'Introdução à Pesquisa',
			ementa: 'Referenciais teóricos e metodológicos básicos com revisão da Língua Portuguesa e realização de projeto de pesquisa no campo da música. Leitura e escrita de textos acadêmicos. Elaboração de projeto de pesquisa com definição de objetivo, objeto de estudo, metodologia, cronograma, bibliografia, conforme padrões vigentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#46B98A',
			obligatory: true
		},
		'MU059': {
			code: 'MU059',
			name: 'Rítmica II',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU058'],
			color: '#46B0B9',
			obligatory: true
		},
		'MU205': {
			code: 'MU205',
			name: 'Estruturação Musical II',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#46B98A',
			obligatory: true
		},
		'MU220': {
			code: 'MU220',
			name: 'Coral II',
			ementa: 'Participação no coral dos Cursos de Bacharelado em Música e Licenciatura em Música.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU120'],
			color: '#B9466B',
			obligatory: true
		},
		'MU243': {
			code: 'MU243',
			name: 'Iniciação à Composição II',
			ementa: 'Introdução às principais técnicas de composição musical. Prática e exercícios supervisionados.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['MU143'],
			color: '#B9467E',
			obligatory: true
		},
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: '#B99146',
			obligatory: true
		},
		'MU460': {
			code: 'MU460',
			name: 'História da Música II',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU360'],
			color: '#B94691',
			obligatory: true
		},
		'MU035': {
			code: 'MU035',
			name: 'Acústica Musical I',
			ementa: 'Estudo de acústica aplicada à música e instrumentos musicais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97E46',
			obligatory: true
		},
		'MU060': {
			code: 'MU060',
			name: 'Rítmica III',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU059'],
			color: '#46B0B9',
			obligatory: true
		},
		'MU114': {
			code: 'MU114',
			name: 'Análise I',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: '#46B98A',
			obligatory: true
		},
		'MU146': {
			code: 'MU146',
			name: 'Harmonia do Período Barroco',
			ementa: 'Estudo progressivo da harmonia por estilos. O período barroco.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94659',
			obligatory: true
		},
		'MU171': {
			code: 'MU171',
			name: 'Composição I',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU243'],
			color: '#B9467E',
			obligatory: true
		},
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: '#B99146',
			obligatory: true
		},
		'MU560': {
			code: 'MU560',
			name: 'História da Música III',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU460'],
			color: '#B94691',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU036': {
			code: 'MU036',
			name: 'Acústica Musical II',
			ementa: 'Estudo de acústica aplicada à música e instrumentos musicais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU035'],
			color: '#B97E46',
			obligatory: true
		},
		'MU061': {
			code: 'MU061',
			name: 'Rítmica IV',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU060'],
			color: '#46B0B9',
			obligatory: true
		},
		'MU214': {
			code: 'MU214',
			name: 'Análise II',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU114'],
			color: '#46B98A',
			obligatory: true
		},
		'MU246': {
			code: 'MU246',
			name: 'Harmonia do Classicismo ao Romantismo',
			ementa: 'Estudo progressivo da harmonia por estilos. O período clássico e introdução ao romantismo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU146'],
			color: '#B94659',
			obligatory: true
		},
		'MU271': {
			code: 'MU271',
			name: 'Composição II',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU171'],
			color: '#B9467E',
			obligatory: true
		},
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: '#B99146',
			obligatory: true
		},
		'MU660': {
			code: 'MU660',
			name: 'História da Música IV',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#B94691',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU140': {
			code: 'MU140',
			name: 'Instrumentação I',
			ementa: 'Estudo de instrumentação: instrumentos de percussão e de cordas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4653B9',
			obligatory: true
		},
		'MU155': {
			code: 'MU155',
			name: 'Contraponto e Fuga I',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'MU189': {
			code: 'MU189',
			name: 'Criação Musical com Novos Suportes Tecnológicos I',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de musica mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU036'],
			color: '#B97E46',
			obligatory: true
		},
		'MU190': {
			code: 'MU190',
			name: 'História da Música Brasileira I',
			ementa: 'História da música de concerto e de outras manifestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#B94691',
			obligatory: true
		},
		'MU314': {
			code: 'MU314',
			name: 'Análise III',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU214'],
			color: '#46B98A',
			obligatory: true
		},
		'MU346': {
			code: 'MU346',
			name: 'Harmonia do Romantismo ao Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. O período romântico e introdução à música do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU246'],
			color: '#B94659',
			obligatory: true
		},
		'MU371': {
			code: 'MU371',
			name: 'Composição III',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU271'],
			color: '#B9467E',
			obligatory: true
		},
		'MU372': {
			code: 'MU372',
			name: 'Port-Folio de Composição Musical I',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU271'],
			color: '#B9467E',
			obligatory: true
		},
		'MU240': {
			code: 'MU240',
			name: 'Instrumentação II',
			ementa: 'Estudo de instrumentação: instrumentos de sopro: madeiras e metais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU140'],
			color: '#4653B9',
			obligatory: true
		},
		'MU255': {
			code: 'MU255',
			name: 'Contraponto e Fuga II',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU155'],
			color: '#B94646',
			obligatory: true
		},
		'MU289': {
			code: 'MU289',
			name: 'Criação Musical com Novos Suportes Tecnológicos II',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de musica mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU189'],
			color: '#B97E46',
			obligatory: true
		},
		'MU290': {
			code: 'MU290',
			name: 'História da Música Brasileira II',
			ementa: 'História da música de concerto e de outras manisfestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU190'],
			color: '#B94691',
			obligatory: true
		},
		'MU414': {
			code: 'MU414',
			name: 'Análise IV',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU314'],
			color: '#46B98A',
			obligatory: true
		},
		'MU446': {
			code: 'MU446',
			name: 'Harmonia do Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. A música de século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU346'],
			color: '#B94659',
			obligatory: true
		},
		'MU471': {
			code: 'MU471',
			name: 'Composição IV',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU371'],
			color: '#B9467E',
			obligatory: true
		},
		'MU472': {
			code: 'MU472',
			name: 'Port-Folio de Composição Musical II',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU372'],
			color: '#B9467E',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU165': {
			code: 'MU165',
			name: 'Orquestração I',
			ementa: 'Estudo comparativo das formas de orquestração. Os diversos conjuntos orquestrais. Transcrições.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU240'],
			color: '#4653B9',
			obligatory: true
		},
		'MU355': {
			code: 'MU355',
			name: 'Contraponto I',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU255'],
			color: '#B94646',
			obligatory: true
		},
		'MU389': {
			code: 'MU389',
			name: 'Criação Musical com Novos Suportes Tecnológicos III',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de música mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU289'],
			color: '#B97E46',
			obligatory: true
		},
		'MU571': {
			code: 'MU571',
			name: 'Composição V',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU471'],
			color: '#B9467E',
			obligatory: true
		},
		'MU572': {
			code: 'MU572',
			name: 'Port-Folio de Composição Musical III',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU472'],
			color: '#B9467E',
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
		'MU265': {
			code: 'MU265',
			name: 'Orquestração II',
			ementa: 'Estudo comparativo das formas de orquestração. Exercícios de orquestração para os diversos conjuntos orquestrais, banda e conjuntos originais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU165'],
			color: '#4653B9',
			obligatory: true
		},
		'MU455': {
			code: 'MU455',
			name: 'Contraponto II',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU355'],
			color: '#B94646',
			obligatory: true
		},
		'MU489': {
			code: 'MU489',
			name: 'Criação Musical com Novos Suportes Tecnológicos IV',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de música mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU389'],
			color: '#B97E46',
			obligatory: true
		},
		'MU671': {
			code: 'MU671',
			name: 'Composição VI',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU571'],
			color: '#B9467E',
			obligatory: true
		},
		'MU672': {
			code: 'MU672',
			name: 'Port-Folio de Composição Musical IV',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU572'],
			color: '#B9467E',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU771': {
			code: 'MU771',
			name: 'Composição VII',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU671'],
			color: '#B9467E',
			obligatory: true
		},
		'MU772': {
			code: 'MU772',
			name: 'Port-Folio de Composição Musical V',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU672'],
			color: '#B9467E',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU871': {
			code: 'MU871',
			name: 'Composição VIII',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU771'],
			color: '#B9467E',
			obligatory: true
		},
		'MU872': {
			code: 'MU872',
			name: 'Port-Folio de Composição Musical VI',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU772'],
			color: '#B9467E',
			obligatory: true
		},
		'MU999': {
			code: 'MU999',
			name: 'Projeto Final de Graduação',
			ementa: 'Desenvolvimento de projeto individual ou coletivo na especialidade de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU671'],
			color: '#B9467E',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#84B946',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B965',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96B46',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4665B9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#469DB9',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5FB946',
			obligatory: false
		},
		'MP101': {
			code: 'MP101',
			name: 'Cordas I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#468AB9',
			obligatory: false
		},
		'MP102': {
			code: 'MP102',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#97B946',
			obligatory: false
		},
		'MP103': {
			code: 'MP103',
			name: 'Sopros I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#5F46B9',
			obligatory: false
		},
		'MP104': {
			code: 'MP104',
			name: 'Teclados I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B9B0',
			obligatory: false
		},
		'MP105': {
			code: 'MP105',
			name: 'Voz I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B99D',
			obligatory: false
		},
		'MP201': {
			code: 'MP201',
			name: 'Cordas II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP101'],
			color: '#468AB9',
			obligatory: false
		},
		'MP202': {
			code: 'MP202',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP102'],
			color: '#97B946',
			obligatory: false
		},
		'MP203': {
			code: 'MP203',
			name: 'Sopros II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP103'],
			color: '#5F46B9',
			obligatory: false
		},
		'MP204': {
			code: 'MP204',
			name: 'Teclados II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP104'],
			color: '#46B9B0',
			obligatory: false
		},
		'MP205': {
			code: 'MP205',
			name: 'Voz II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP105'],
			color: '#46B99D',
			obligatory: false
		},
		'MP301': {
			code: 'MP301',
			name: 'Cordas III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP201'],
			color: '#468AB9',
			obligatory: false
		},
		'MP302': {
			code: 'MP302',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP202'],
			color: '#97B946',
			obligatory: false
		},
		'MP303': {
			code: 'MP303',
			name: 'Sopros III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP203'],
			color: '#5F46B9',
			obligatory: false
		},
		'MP304': {
			code: 'MP304',
			name: 'Teclados III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP204'],
			color: '#46B9B0',
			obligatory: false
		},
		'MP305': {
			code: 'MP305',
			name: 'Voz III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP205'],
			color: '#46B99D',
			obligatory: false
		},
		'MP401': {
			code: 'MP401',
			name: 'Cordas IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP301'],
			color: '#468AB9',
			obligatory: false
		},
		'MP402': {
			code: 'MP402',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP302'],
			color: '#97B946',
			obligatory: false
		},
		'MP403': {
			code: 'MP403',
			name: 'Sopros IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP303'],
			color: '#5F46B9',
			obligatory: false
		},
		'MP404': {
			code: 'MP404',
			name: 'Teclados IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP304'],
			color: '#46B9B0',
			obligatory: false
		},
		'MP405': {
			code: 'MP405',
			name: 'Voz IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP305'],
			color: '#46B99D',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7246B9',
			obligatory: false
		},
		'MU102': {
			code: 'MU102',
			name: 'Instrumento I',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B95946',
			obligatory: false
		},
		'MU103': {
			code: 'MU103',
			name: 'Flauta I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B953',
			obligatory: false
		},
		'MU104': {
			code: 'MU104',
			name: 'Oboé I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4C46B9',
			obligatory: false
		},
		'MU106': {
			code: 'MU106',
			name: 'Clarineta I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#A946B9',
			obligatory: false
		},
		'MU109': {
			code: 'MU109',
			name: 'Violino I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B9B646',
			obligatory: false
		},
		'MU121': {
			code: 'MU121',
			name: 'Contrabaixo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#8446B9',
			obligatory: false
		},
		'MU123': {
			code: 'MU123',
			name: 'Piano I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B946B6',
			obligatory: false
		},
		'MU124': {
			code: 'MU124',
			name: 'Cravo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4CB946',
			obligatory: false
		},
		'MU126': {
			code: 'MU126',
			name: 'Viola I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#A9B946',
			obligatory: false
		},
		'MU127': {
			code: 'MU127',
			name: 'Violoncelo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B978',
			obligatory: false
		},
		'MU184': {
			code: 'MU184',
			name: 'Trompete I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#9746B9',
			obligatory: false
		},
		'MU186': {
			code: 'MU186',
			name: 'Trombone I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4678B9',
			obligatory: false
		},
		'MU192': {
			code: 'MU192',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B946A3',
			obligatory: false
		},
		'MU194': {
			code: 'MU194',
			name: 'Violão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B9A346',
			obligatory: false
		},
		'MU196': {
			code: 'MU196',
			name: 'Canto I',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estiloterpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#72B946',
			obligatory: false
		},
		'MU202': {
			code: 'MU202',
			name: 'Instrumento II',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU102'],
			color: '#B95946',
			obligatory: false
		},
		'MU203': {
			code: 'MU203',
			name: 'Flauta II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU103'],
			color: '#46B953',
			obligatory: false
		},
		'MU204': {
			code: 'MU204',
			name: 'Oboé II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU104'],
			color: '#4C46B9',
			obligatory: false
		},
		'MU206': {
			code: 'MU206',
			name: 'Clarineta II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU106'],
			color: '#A946B9',
			obligatory: false
		},
		'MU209': {
			code: 'MU209',
			name: 'Violino II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU109'],
			color: '#B9B646',
			obligatory: false
		},
		'MU221': {
			code: 'MU221',
			name: 'Contrabaixo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU121'],
			color: '#8446B9',
			obligatory: false
		},
		'MU223': {
			code: 'MU223',
			name: 'Piano II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU123'],
			color: '#B946B6',
			obligatory: false
		},
		'MU224': {
			code: 'MU224',
			name: 'Cravo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU124'],
			color: '#4CB946',
			obligatory: false
		},
		'MU226': {
			code: 'MU226',
			name: 'Viola II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU126'],
			color: '#A9B946',
			obligatory: false
		},
		'MU227': {
			code: 'MU227',
			name: 'Violoncelo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU127'],
			color: '#46B978',
			obligatory: false
		},
		'MU284': {
			code: 'MU284',
			name: 'Trompete II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU184'],
			color: '#9746B9',
			obligatory: false
		},
		'MU286': {
			code: 'MU286',
			name: 'Trombone II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU186'],
			color: '#4678B9',
			obligatory: false
		},
		'MU292': {
			code: 'MU292',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU192'],
			color: '#B946A3',
			obligatory: false
		},
		'MU294': {
			code: 'MU294',
			name: 'Violão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU194'],
			color: '#B9A346',
			obligatory: false
		},
		'MU296': {
			code: 'MU296',
			name: 'Canto II',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU196'],
			color: '#72B946',
			obligatory: false
		},
		'MU302': {
			code: 'MU302',
			name: 'Instrumento III',
			ementa: 'Estudo ordenado e progressivo em instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU202'],
			color: '#B95946',
			obligatory: false
		},
		'MU303': {
			code: 'MU303',
			name: 'Flauta III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU203'],
			color: '#46B953',
			obligatory: false
		},
		'MU304': {
			code: 'MU304',
			name: 'Oboé III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU204'],
			color: '#4C46B9',
			obligatory: false
		},
		'MU306': {
			code: 'MU306',
			name: 'Clarineta III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU206'],
			color: '#A946B9',
			obligatory: false
		},
		'MU309': {
			code: 'MU309',
			name: 'Violino III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU209'],
			color: '#B9B646',
			obligatory: false
		},
		'MU321': {
			code: 'MU321',
			name: 'Contrabaixo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU221'],
			color: '#8446B9',
			obligatory: false
		},
		'MU323': {
			code: 'MU323',
			name: 'Piano III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU223'],
			color: '#B946B6',
			obligatory: false
		},
		'MU324': {
			code: 'MU324',
			name: 'Cravo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU224'],
			color: '#4CB946',
			obligatory: false
		},
		'MU326': {
			code: 'MU326',
			name: 'Viola III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU226'],
			color: '#A9B946',
			obligatory: false
		},
		'MU327': {
			code: 'MU327',
			name: 'Violoncelo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU227'],
			color: '#46B978',
			obligatory: false
		},
		'MU384': {
			code: 'MU384',
			name: 'Trompete III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU284'],
			color: '#9746B9',
			obligatory: false
		},
		'MU386': {
			code: 'MU386',
			name: 'Trombone III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU286'],
			color: '#4678B9',
			obligatory: false
		},
		'MU392': {
			code: 'MU392',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU292'],
			color: '#B946A3',
			obligatory: false
		},
		'MU394': {
			code: 'MU394',
			name: 'Violão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU294'],
			color: '#B9A346',
			obligatory: false
		},
		'MU396': {
			code: 'MU396',
			name: 'Canto III',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU296'],
			color: '#72B946',
			obligatory: false
		},
		'MU402': {
			code: 'MU402',
			name: 'Instrumento IV',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU302'],
			color: '#B95946',
			obligatory: false
		},
		'MU403': {
			code: 'MU403',
			name: 'Flauta IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU303'],
			color: '#46B953',
			obligatory: false
		},
		'MU404': {
			code: 'MU404',
			name: 'Oboé IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU304'],
			color: '#4C46B9',
			obligatory: false
		},
		'MU406': {
			code: 'MU406',
			name: 'Clarineta IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU306'],
			color: '#A946B9',
			obligatory: false
		},
		'MU409': {
			code: 'MU409',
			name: 'Violino IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU309'],
			color: '#B9B646',
			obligatory: false
		},
		'MU421': {
			code: 'MU421',
			name: 'Contrabaixo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU321'],
			color: '#8446B9',
			obligatory: false
		},
		'MU423': {
			code: 'MU423',
			name: 'Piano IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU323'],
			color: '#B946B6',
			obligatory: false
		},
		'MU424': {
			code: 'MU424',
			name: 'Cravo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU324'],
			color: '#4CB946',
			obligatory: false
		},
		'MU426': {
			code: 'MU426',
			name: 'Viola IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU326'],
			color: '#A9B946',
			obligatory: false
		},
		'MU427': {
			code: 'MU427',
			name: 'Violoncelo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU327'],
			color: '#46B978',
			obligatory: false
		},
		'MU484': {
			code: 'MU484',
			name: 'Trompete IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU384'],
			color: '#9746B9',
			obligatory: false
		},
		'MU486': {
			code: 'MU486',
			name: 'Trombone IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU386'],
			color: '#4678B9',
			obligatory: false
		},
		'MU492': {
			code: 'MU492',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU392'],
			color: '#B946A3',
			obligatory: false
		},
		'MU494': {
			code: 'MU494',
			name: 'Violão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU394'],
			color: '#B9A346',
			obligatory: false
		},
		'MU496': {
			code: 'MU496',
			name: 'Canto IV',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU396'],
			color: '#72B946',
			obligatory: false
		}
	}
};

export default catalogue;
