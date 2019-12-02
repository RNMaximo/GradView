const catalogue = {
	totalCredits: 230,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MU058', 'MU105', 'MU120', 'MU143', 'MU193', 'MU360']
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
			subjects: ['MU165', 'MU355', 'MU389', 'MU571', 'MU572', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['MU265', 'MU455', 'MU489', 'MU671', 'MU672', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['MU771', 'MU772', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['MU871', 'MU872', 'MU999', 'ELET10']
		}
	},

	subjects: {
		'MU058': {
			code: 'MU058',
			name: 'Rítmica I',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#BAD940'
		},
		'MU105': {
			code: 'MU105',
			name: 'Estruturação Musical I',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5ED940'
		},
		'MU120': {
			code: 'MU120',
			name: 'Coral I',
			ementa: 'Participação no coral dos Cursos de Bacharelado em Música e Licenciatura em Música.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409C'
		},
		'MU143': {
			code: 'MU143',
			name: 'Iniciação à Composição I',
			ementa: 'Introdução às principais técnicas de composição musical. Prática e exercícios supervisionados.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5E40D9'
		},
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#BA40D9'
		},
		'MU360': {
			code: 'MU360',
			name: 'História da Música I',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407DD9'
		},
		'MU049': {
			code: 'MU049',
			name: 'Introdução à Pesquisa',
			ementa: 'Referenciais teóricos e metodológicos básicos com revisão da Língua Portuguesa e realização de projeto de pesquisa no campo da música. Leitura e escrita de textos acadêmicos. Elaboração de projeto de pesquisa com definição de objetivo, objeto de estudo, metodologia, cronograma, bibliografia, conforme padrões vigentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: ''
		},
		'MU059': {
			code: 'MU059',
			name: 'Rítmica II',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU058'],
			color: ''
		},
		'MU205': {
			code: 'MU205',
			name: 'Estruturação Musical II',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: ''
		},
		'MU220': {
			code: 'MU220',
			name: 'Coral II',
			ementa: 'Participação no coral dos Cursos de Bacharelado em Música e Licenciatura em Música.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU120'],
			color: ''
		},
		'MU243': {
			code: 'MU243',
			name: 'Iniciação à Composição II',
			ementa: 'Introdução às principais técnicas de composição musical. Prática e exercícios supervisionados.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['MU143'],
			color: ''
		},
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: ''
		},
		'MU460': {
			code: 'MU460',
			name: 'História da Música II',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU360'],
			color: ''
		},
		'MU035': {
			code: 'MU035',
			name: 'Acústica Musical I',
			ementa: 'Estudo de acústica aplicada à música e instrumentos musicais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D9'
		},
		'MU060': {
			code: 'MU060',
			name: 'Rítmica III',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU059'],
			color: ''
		},
		'MU114': {
			code: 'MU114',
			name: 'Análise I',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: ''
		},
		'MU146': {
			code: 'MU146',
			name: 'Harmonia do Período Barroco',
			ementa: 'Estudo progressivo da harmonia por estilos. O período barroco.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D94040'
		},
		'MU171': {
			code: 'MU171',
			name: 'Composição I',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU243'],
			color: ''
		},
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: ''
		},
		'MU560': {
			code: 'MU560',
			name: 'História da Música III',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU460'],
			color: ''
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'MU036': {
			code: 'MU036',
			name: 'Acústica Musical II',
			ementa: 'Estudo de acústica aplicada à música e instrumentos musicais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU035'],
			color: ''
		},
		'MU061': {
			code: 'MU061',
			name: 'Rítmica IV',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU060'],
			color: ''
		},
		'MU214': {
			code: 'MU214',
			name: 'Análise II',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU114'],
			color: ''
		},
		'MU246': {
			code: 'MU246',
			name: 'Harmonia do Classicismo ao Romantismo',
			ementa: 'Estudo progressivo da harmonia por estilos. O período clássico e introdução ao romantismo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU146'],
			color: ''
		},
		'MU271': {
			code: 'MU271',
			name: 'Composição II',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU171'],
			color: ''
		},
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: ''
		},
		'MU660': {
			code: 'MU660',
			name: 'História da Música IV',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: ''
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'MU140': {
			code: 'MU140',
			name: 'Instrumentação I',
			ementa: 'Estudo de instrumentação: instrumentos de percussão e de cordas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97D'
		},
		'MU155': {
			code: 'MU155',
			name: 'Contraponto e Fuga I',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D99C40'
		},
		'MU189': {
			code: 'MU189',
			name: 'Criação Musical com Novos Suportes Tecnológicos I',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de musica mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU036'],
			color: ''
		},
		'MU190': {
			code: 'MU190',
			name: 'História da Música Brasileira I',
			ementa: 'História da música de concerto e de outras manifestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: ''
		},
		'MU314': {
			code: 'MU314',
			name: 'Análise III',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU214'],
			color: ''
		},
		'MU346': {
			code: 'MU346',
			name: 'Harmonia do Romantismo ao Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. O período romântico e introdução à música do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU246'],
			color: ''
		},
		'MU371': {
			code: 'MU371',
			name: 'Composição III',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU271'],
			color: ''
		},
		'MU372': {
			code: 'MU372',
			name: 'Port-Folio de Composição Musical I',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU271'],
			color: ''
		},
		'MU240': {
			code: 'MU240',
			name: 'Instrumentação II',
			ementa: 'Estudo de instrumentação: instrumentos de sopro: madeiras e metais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU140'],
			color: ''
		},
		'MU255': {
			code: 'MU255',
			name: 'Contraponto e Fuga II',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU155'],
			color: ''
		},
		'MU289': {
			code: 'MU289',
			name: 'Criação Musical com Novos Suportes Tecnológicos II',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de musica mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU189'],
			color: ''
		},
		'MU290': {
			code: 'MU290',
			name: 'História da Música Brasileira II',
			ementa: 'História da música de concerto e de outras manisfestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU190'],
			color: ''
		},
		'MU414': {
			code: 'MU414',
			name: 'Análise IV',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU314'],
			color: ''
		},
		'MU446': {
			code: 'MU446',
			name: 'Harmonia do Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. A música de século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU346'],
			color: ''
		},
		'MU471': {
			code: 'MU471',
			name: 'Composição IV',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU371'],
			color: ''
		},
		'MU472': {
			code: 'MU472',
			name: 'Port-Folio de Composição Musical II',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU372'],
			color: ''
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'MU165': {
			code: 'MU165',
			name: 'Orquestração I',
			ementa: 'Estudo comparativo das formas de orquestração. Os diversos conjuntos orquestrais. Transcrições.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU240'],
			color: ''
		},
		'MU355': {
			code: 'MU355',
			name: 'Contraponto I',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU255'],
			color: ''
		},
		'MU389': {
			code: 'MU389',
			name: 'Criação Musical com Novos Suportes Tecnológicos III',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de música mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU289'],
			color: ''
		},
		'MU571': {
			code: 'MU571',
			name: 'Composição V',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU471'],
			color: ''
		},
		'MU572': {
			code: 'MU572',
			name: 'Port-Folio de Composição Musical III',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU472'],
			color: ''
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
		'MU265': {
			code: 'MU265',
			name: 'Orquestração II',
			ementa: 'Estudo comparativo das formas de orquestração. Exercícios de orquestração para os diversos conjuntos orquestrais, banda e conjuntos originais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU165'],
			color: ''
		},
		'MU455': {
			code: 'MU455',
			name: 'Contraponto II',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU355'],
			color: ''
		},
		'MU489': {
			code: 'MU489',
			name: 'Criação Musical com Novos Suportes Tecnológicos IV',
			ementa: 'Estudo teórico e prático de recursos recentes para a criação musical com auxílio de computador e tecnologias eletrônicas. Estudo de estruturas generativas algorítmicas, síntese, análise e processos interativos que sirvam de suporte para a realização de projetos criativos com suporte computacional como instalações, sonoficação de ambientes, performance de música mista, sistemas interativos para improvisação em tempo real, entre outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU389'],
			color: ''
		},
		'MU671': {
			code: 'MU671',
			name: 'Composição VI',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU571'],
			color: ''
		},
		'MU672': {
			code: 'MU672',
			name: 'Port-Folio de Composição Musical IV',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU572'],
			color: ''
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'MU771': {
			code: 'MU771',
			name: 'Composição VII',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU671'],
			color: ''
		},
		'MU772': {
			code: 'MU772',
			name: 'Port-Folio de Composição Musical V',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU672'],
			color: ''
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'MU871': {
			code: 'MU871',
			name: 'Composição VIII',
			ementa: 'Exercícios de criação musical para distintas formações intrumentais e/ou vocal, com ou sem suporte tecnológico, juntamente a estudo de repertório e análise de obras musicais correlatas, com ênfase na produção musical recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['MU771'],
			color: ''
		},
		'MU872': {
			code: 'MU872',
			name: 'Port-Folio de Composição Musical VI',
			ementa: 'Constituição de port-folio de composições musicais permitindo que o aluno do curso de composição conclua seu ciclo de formação com um conjunto de obras compostas compatível com exigências atuais em âmbito acadêmico e demais setores de atividades artísticas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU772'],
			color: ''
		},
		'MU999': {
			code: 'MU999',
			name: 'Projeto Final de Graduação',
			ementa: 'Desenvolvimento de projeto individual ou coletivo na especialidade de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU671'],
			color: ''
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
