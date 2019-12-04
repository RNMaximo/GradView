const catalogue = {
	totalCredits: 204,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MU058', 'MU105', 'MU112', 'MU120', 'MU147', 'MU162', 'MU193', 'MU360']
		},
		'sem-2': {
			id: '2',
			subjects: ['MU049', 'MU059', 'MU205', 'MU212', 'MU220', 'MU247', 'MU262', 'MU293', 'MU460']
		},
		'sem-3': {
			id: '3',
			subjects: ['MU060', 'MU114', 'MU146', 'MU148', 'MU320', 'MU393', 'MU560', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['MU061', 'MU214', 'MU246', 'MU248', 'MU420', 'MU493', 'MU660', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['MU140', 'MU155', 'MU190', 'MU314', 'MU346', 'MU348', 'MU512', 'MU520']
		},
		'sem-6': {
			id: '6',
			subjects: ['MU240', 'MU255', 'MU290', 'MU414', 'MU446', 'MU448', 'MU612', 'MU620']
		},
		'sem-7': {
			id: '7',
			subjects: ['MU165', 'MU175', 'MU355', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['MU265', 'MU275', 'MU455', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['MU375', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['MU475', 'MU998', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['MU198', 'MU199', 'MU298', 'MU299', 'MU398', 'MU399', 'MU498', 'MU499', 'MU548', 'MU575', 'MU648', 'MU675'],
		},
		'elet-2': {
			credits: 2,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 6,
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
			color: '#D94085',
			obligatory: true
		},
		'MU105': {
			code: 'MU105',
			name: 'Estruturação Musical I',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'MU112': {
			code: 'MU112',
			name: 'Técnica Vocal I',
			ementa: 'Estudos iniciais sobre técnica básica de canto: aparelho fonador, sistema respiratório, noções de ressonância, aplicação técnica e exercícios.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96E40',
			obligatory: true
		},
		'MU120': {
			code: 'MU120',
			name: 'Coral I',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98540',
			obligatory: true
		},
		'MU147': {
			code: 'MU147',
			name: 'Iniciação à Regência I',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#BAD940',
			obligatory: true
		},
		'MU162': {
			code: 'MU162',
			name: 'Laboratório de Expressão Corporal I',
			ementa: 'Introdução à expressão corporal. Laboratório de expressão livre.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40ABD9',
			obligatory: true
		},
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#D94057',
			obligatory: true
		},
		'MU360': {
			code: 'MU360',
			name: 'História da Música I',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'MU049': {
			code: 'MU049',
			name: 'Introdução à Pesquisa',
			ementa: 'Referenciais teóricas e metodológicas básicas para realização de projeto de pesquisa no campo da música. Elaboração de projeto de pesquisa com definição de objetivo, objeto de estudo, metodologia, cronograma, bibliografia, conforme padrões vigentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#40D97D',
			obligatory: true
		},
		'MU059': {
			code: 'MU059',
			name: 'Rítmica II',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU058'],
			color: '#D94085',
			obligatory: true
		},
		'MU205': {
			code: 'MU205',
			name: 'Estruturação Musical II',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#40D97D',
			obligatory: true
		},
		'MU212': {
			code: 'MU212',
			name: 'Técnica Vocal II',
			ementa: 'Técnica vocal para coral; registros vocais; classificação de vozes; leitura e interpretação de textos musicais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU112'],
			color: '#D96E40',
			obligatory: true
		},
		'MU220': {
			code: 'MU220',
			name: 'Coral II',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU120'],
			color: '#D98540',
			obligatory: true
		},
		'MU247': {
			code: 'MU247',
			name: 'Iniciação à Regência II',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MU147'],
			color: '#BAD940',
			obligatory: true
		},
		'MU262': {
			code: 'MU262',
			name: 'Laboratório de Expressão Corporal II',
			ementa: 'Introdução à expressão corporal. Laboratório de expressão livre.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU162'],
			color: '#40ABD9',
			obligatory: true
		},
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: '#D94057',
			obligatory: true
		},
		'MU460': {
			code: 'MU460',
			name: 'História da Música II',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU360'],
			color: '#D94040',
			obligatory: true
		},
		'MU060': {
			code: 'MU060',
			name: 'Rítmica III',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU059'],
			color: '#D94085',
			obligatory: true
		},
		'MU114': {
			code: 'MU114',
			name: 'Análise I',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: '#40D97D',
			obligatory: true
		},
		'MU146': {
			code: 'MU146',
			name: 'Harmonia do Período Barroco',
			ementa: 'Estudo progressivo da harmonia por estilos. O período barroco.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A340D9',
			obligatory: true
		},
		'MU148': {
			code: 'MU148',
			name: 'Regência Coral I',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MU247'],
			color: '#BAD940',
			obligatory: true
		},
		'MU320': {
			code: 'MU320',
			name: 'Coral III',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU220'],
			color: '#D98540',
			obligatory: true
		},
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: '#D94057',
			obligatory: true
		},
		'MU560': {
			code: 'MU560',
			name: 'História da Música III',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU460'],
			color: '#D94040',
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
		'MU061': {
			code: 'MU061',
			name: 'Rítmica IV',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU060'],
			color: '#D94085',
			obligatory: true
		},
		'MU214': {
			code: 'MU214',
			name: 'Análise II',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU114'],
			color: '#40D97D',
			obligatory: true
		},
		'MU246': {
			code: 'MU246',
			name: 'Harmonia do Classicismo ao Romantismo',
			ementa: 'Estudo progressivo da harmonia por estilos. O período clássico e introdução ao romantismo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU146'],
			color: '#A340D9',
			obligatory: true
		},
		'MU248': {
			code: 'MU248',
			name: 'Regência Coral II',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MU148'],
			color: '#BAD940',
			obligatory: true
		},
		'MU420': {
			code: 'MU420',
			name: 'Coral IV',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU320'],
			color: '#D98540',
			obligatory: true
		},
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: '#D94057',
			obligatory: true
		},
		'MU660': {
			code: 'MU660',
			name: 'História da Música IV',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#D94040',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
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
			color: '#D99C40',
			obligatory: true
		},
		'MU155': {
			code: 'MU155',
			name: 'Contraponto e Fuga I',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D9C2',
			obligatory: true
		},
		'MU190': {
			code: 'MU190',
			name: 'História da Música Brasileira I',
			ementa: 'História da música de concerto e de outras manifestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#D94040',
			obligatory: true
		},
		'MU314': {
			code: 'MU314',
			name: 'Análise III',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU214'],
			color: '#40D97D',
			obligatory: true
		},
		'MU346': {
			code: 'MU346',
			name: 'Harmonia do Romantismo ao Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. O período romântico e introdução à música do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU246'],
			color: '#A340D9',
			obligatory: true
		},
		'MU348': {
			code: 'MU348',
			name: 'Regência Coral III',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de um coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MU248'],
			color: '#BAD940',
			obligatory: true
		},
		'MU512': {
			code: 'MU512',
			name: 'Dicção I',
			ementa: 'Estudo do alfabeto fonético internacional para o canto e sua utilização no aprendizado das regras de pronúncia de diversas línguas estrangeiras: Latim, Italiano e Alemão.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4066D9',
			obligatory: true
		},
		'MU520': {
			code: 'MU520',
			name: 'Coral V',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU420'],
			color: '#D98540',
			obligatory: true
		},
		'MU240': {
			code: 'MU240',
			name: 'Instrumentação II',
			ementa: 'Estudo de instrumentação: instrumentos de sopro: madeiras e metais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU140'],
			color: '#D99C40',
			obligatory: true
		},
		'MU255': {
			code: 'MU255',
			name: 'Contraponto e Fuga II',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU155'],
			color: '#40D9C2',
			obligatory: true
		},
		'MU290': {
			code: 'MU290',
			name: 'História da Música Brasileira II',
			ementa: 'História da música de concerto e de outras manisfestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU190'],
			color: '#D94040',
			obligatory: true
		},
		'MU414': {
			code: 'MU414',
			name: 'Análise IV',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU314'],
			color: '#40D97D',
			obligatory: true
		},
		'MU446': {
			code: 'MU446',
			name: 'Harmonia do Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. A música de século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU346'],
			color: '#A340D9',
			obligatory: true
		},
		'MU448': {
			code: 'MU448',
			name: 'Regência Coral IV',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MU348'],
			color: '#BAD940',
			obligatory: true
		},
		'MU612': {
			code: 'MU612',
			name: 'Dicção II',
			ementa: 'Estudo do alfabeto fonético internacional para o canto e sua utilização no aprendizado das regras de pronúncia de diversas línguas estrangeiras: Francês, Inglês e Espanhol.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU512'],
			color: '#4066D9',
			obligatory: true
		},
		'MU620': {
			code: 'MU620',
			name: 'Coral VI',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU520'],
			color: '#D98540',
			obligatory: true
		},
		'MU165': {
			code: 'MU165',
			name: 'Orquestração I',
			ementa: 'Estudo comparativo das formas de orquestração. Os diversos conjuntos orquestrais. Transcrições.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU240'],
			color: '#D99C40',
			obligatory: true
		},
		'MU175': {
			code: 'MU175',
			name: 'Regência Orquestral I',
			ementa: 'Estudo sistematizados dos principais elementos da arte da regência orquestral visando o preparo e a formação do músico como artista e líder de uma orquestra, banda ou conjunto instrumental.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU448'],
			color: '#BAD940',
			obligatory: true
		},
		'MU355': {
			code: 'MU355',
			name: 'Contraponto I',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU255'],
			color: '#40D9C2',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
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
			color: '#D99C40',
			obligatory: true
		},
		'MU275': {
			code: 'MU275',
			name: 'Regência Orquestral II',
			ementa: 'Estudo sistematizado dos principais elementos da arte da regência orquestral visando o preparo e a formação do músico como artista e líder de uma orquestra, banda ou conjunto instrumental.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU175'],
			color: '#BAD940',
			obligatory: true
		},
		'MU455': {
			code: 'MU455',
			name: 'Contraponto II',
			ementa: 'Estudo da técnica polifônica da música ocidental. Prática de escrita contrapontística.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU355'],
			color: '#40D9C2',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU375': {
			code: 'MU375',
			name: 'Regência Orquestral III',
			ementa: 'Estudo sistematizado dos principais elementos da arte da regência orquestral visando o preparo e a formação do músico como artista e líder de uma orquestra, banda ou conjunto instrumental.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU275'],
			color: '#BAD940',
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
		'MU475': {
			code: 'MU475',
			name: 'Regência Orquestral IV',
			ementa: 'Preparação e realização de repertório para concerto de final de curso.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU375'],
			color: '#BAD940',
			obligatory: true
		},
		'MU998': {
			code: 'MU998',
			name: 'Recital',
			ementa: 'Montagem, preparação e execução de um programa a ser apresentado publicamente na especialidade de cada aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU448'],
			color: '#BAD940',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MP101': {
			code: 'MP101',
			name: 'Cordas I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D9406E',
			obligatory: false
		},
		'MP102': {
			code: 'MP102',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D95740',
			obligatory: false
		},
		'MP103': {
			code: 'MP103',
			name: 'Sopros I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#5ED940',
			obligatory: false
		},
		'MP104': {
			code: 'MP104',
			name: 'Teclados I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#BA40D9',
			obligatory: false
		},
		'MP105': {
			code: 'MP105',
			name: 'Voz I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D140D9',
			obligatory: false
		},
		'MP201': {
			code: 'MP201',
			name: 'Cordas II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP101'],
			color: '#D9406E',
			obligatory: false
		},
		'MP202': {
			code: 'MP202',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP102'],
			color: '#D95740',
			obligatory: false
		},
		'MP203': {
			code: 'MP203',
			name: 'Sopros II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP103'],
			color: '#5ED940',
			obligatory: false
		},
		'MP204': {
			code: 'MP204',
			name: 'Teclados II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP104'],
			color: '#BA40D9',
			obligatory: false
		},
		'MP205': {
			code: 'MP205',
			name: 'Voz II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP105'],
			color: '#D140D9',
			obligatory: false
		},
		'MP301': {
			code: 'MP301',
			name: 'Cordas III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP201'],
			color: '#D9406E',
			obligatory: false
		},
		'MP302': {
			code: 'MP302',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP202'],
			color: '#D95740',
			obligatory: false
		},
		'MP303': {
			code: 'MP303',
			name: 'Sopros III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP203'],
			color: '#5ED940',
			obligatory: false
		},
		'MP304': {
			code: 'MP304',
			name: 'Teclados III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP204'],
			color: '#BA40D9',
			obligatory: false
		},
		'MP305': {
			code: 'MP305',
			name: 'Voz III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP205'],
			color: '#D140D9',
			obligatory: false
		},
		'MP401': {
			code: 'MP401',
			name: 'Cordas IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP301'],
			color: '#D9406E',
			obligatory: false
		},
		'MP402': {
			code: 'MP402',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP302'],
			color: '#D95740',
			obligatory: false
		},
		'MP403': {
			code: 'MP403',
			name: 'Sopros IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP303'],
			color: '#5ED940',
			obligatory: false
		},
		'MP404': {
			code: 'MP404',
			name: 'Teclados IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP304'],
			color: '#BA40D9',
			obligatory: false
		},
		'MP405': {
			code: 'MP405',
			name: 'Voz IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP305'],
			color: '#D140D9',
			obligatory: false
		},
		'MU102': {
			code: 'MU102',
			name: 'Instrumento I',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#7540D9',
			obligatory: false
		},
		'MU103': {
			code: 'MU103',
			name: 'Flauta I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D9B340',
			obligatory: false
		},
		'MU104': {
			code: 'MU104',
			name: 'Oboé I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40D94F',
			obligatory: false
		},
		'MU106': {
			code: 'MU106',
			name: 'Clarineta I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D940C9',
			obligatory: false
		},
		'MU109': {
			code: 'MU109',
			name: 'Violino I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#5E40D9',
			obligatory: false
		},
		'MU121': {
			code: 'MU121',
			name: 'Contrabaixo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D940B3',
			obligatory: false
		},
		'MU123': {
			code: 'MU123',
			name: 'Piano I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D9C940',
			obligatory: false
		},
		'MU124': {
			code: 'MU124',
			name: 'Cravo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4094D9',
			obligatory: false
		},
		'MU126': {
			code: 'MU126',
			name: 'Viola I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#75D940',
			obligatory: false
		},
		'MU127': {
			code: 'MU127',
			name: 'Violoncelo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#8CD940',
			obligatory: false
		},
		'MU184': {
			code: 'MU184',
			name: 'Trompete I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#404FD9',
			obligatory: false
		},
		'MU186': {
			code: 'MU186',
			name: 'Trombone I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4740D9',
			obligatory: false
		},
		'MU192': {
			code: 'MU192',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40D966',
			obligatory: false
		},
		'MU194': {
			code: 'MU194',
			name: 'Violão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D9409C',
			obligatory: false
		},
		'MU196': {
			code: 'MU196',
			name: 'Canto I',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estiloterpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40D9AB',
			obligatory: false
		},
		'MU198': {
			code: 'MU198',
			name: 'Tópicos Especiais em Regência Coral I',
			ementa: 'Estudo programado de assunto relevante na área de Regência Coral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: false
		},
		'MU199': {
			code: 'MU199',
			name: 'Tópicos Especiais em Regência Orquestral I',
			ementa: 'Estudo programado de assunto relevante na área de Regência Orquestral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#A3D940',
			obligatory: false
		},
		'MU202': {
			code: 'MU202',
			name: 'Instrumento II',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU102'],
			color: '#7540D9',
			obligatory: false
		},
		'MU203': {
			code: 'MU203',
			name: 'Flauta II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU103'],
			color: '#D9B340',
			obligatory: false
		},
		'MU204': {
			code: 'MU204',
			name: 'Oboé II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU104'],
			color: '#40D94F',
			obligatory: false
		},
		'MU206': {
			code: 'MU206',
			name: 'Clarineta II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU106'],
			color: '#D940C9',
			obligatory: false
		},
		'MU209': {
			code: 'MU209',
			name: 'Violino II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU109'],
			color: '#5E40D9',
			obligatory: false
		},
		'MU221': {
			code: 'MU221',
			name: 'Contrabaixo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU121'],
			color: '#D940B3',
			obligatory: false
		},
		'MU223': {
			code: 'MU223',
			name: 'Piano II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU123'],
			color: '#D9C940',
			obligatory: false
		},
		'MU224': {
			code: 'MU224',
			name: 'Cravo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU124'],
			color: '#4094D9',
			obligatory: false
		},
		'MU226': {
			code: 'MU226',
			name: 'Viola II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU126'],
			color: '#75D940',
			obligatory: false
		},
		'MU227': {
			code: 'MU227',
			name: 'Violoncelo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU127'],
			color: '#8CD940',
			obligatory: false
		},
		'MU284': {
			code: 'MU284',
			name: 'Trompete II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU184'],
			color: '#404FD9',
			obligatory: false
		},
		'MU286': {
			code: 'MU286',
			name: 'Trombone II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU186'],
			color: '#4740D9',
			obligatory: false
		},
		'MU292': {
			code: 'MU292',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU192'],
			color: '#40D966',
			obligatory: false
		},
		'MU294': {
			code: 'MU294',
			name: 'Violão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU194'],
			color: '#D9409C',
			obligatory: false
		},
		'MU296': {
			code: 'MU296',
			name: 'Canto II',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU196'],
			color: '#40D9AB',
			obligatory: false
		},
		'MU298': {
			code: 'MU298',
			name: 'Tópicos Especiais em Regência Coral II',
			ementa: 'Estudo programado de assunto relevante na área de Regência Coral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#8C40D9',
			obligatory: false
		},
		'MU299': {
			code: 'MU299',
			name: 'Tópicos Especiais em Regência Orquestral II',
			ementa: 'Estudo programado de assunto relevante na área de Regência Orquestral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40C2D9',
			obligatory: false
		},
		'MU302': {
			code: 'MU302',
			name: 'Instrumento III',
			ementa: 'Estudo ordenado e progressivo em instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU202'],
			color: '#7540D9',
			obligatory: false
		},
		'MU303': {
			code: 'MU303',
			name: 'Flauta III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU203'],
			color: '#D9B340',
			obligatory: false
		},
		'MU304': {
			code: 'MU304',
			name: 'Oboé III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU204'],
			color: '#40D94F',
			obligatory: false
		},
		'MU306': {
			code: 'MU306',
			name: 'Clarineta III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU206'],
			color: '#D940C9',
			obligatory: false
		},
		'MU309': {
			code: 'MU309',
			name: 'Violino III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU209'],
			color: '#5E40D9',
			obligatory: false
		},
		'MU321': {
			code: 'MU321',
			name: 'Contrabaixo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU221'],
			color: '#D940B3',
			obligatory: false
		},
		'MU323': {
			code: 'MU323',
			name: 'Piano III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU223'],
			color: '#D9C940',
			obligatory: false
		},
		'MU324': {
			code: 'MU324',
			name: 'Cravo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU224'],
			color: '#4094D9',
			obligatory: false
		},
		'MU326': {
			code: 'MU326',
			name: 'Viola III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU226'],
			color: '#75D940',
			obligatory: false
		},
		'MU327': {
			code: 'MU327',
			name: 'Violoncelo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU227'],
			color: '#8CD940',
			obligatory: false
		},
		'MU384': {
			code: 'MU384',
			name: 'Trompete III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU284'],
			color: '#404FD9',
			obligatory: false
		},
		'MU386': {
			code: 'MU386',
			name: 'Trombone III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU286'],
			color: '#4740D9',
			obligatory: false
		},
		'MU392': {
			code: 'MU392',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU292'],
			color: '#40D966',
			obligatory: false
		},
		'MU394': {
			code: 'MU394',
			name: 'Violão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU294'],
			color: '#D9409C',
			obligatory: false
		},
		'MU396': {
			code: 'MU396',
			name: 'Canto III',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU296'],
			color: '#40D9AB',
			obligatory: false
		},
		'MU398': {
			code: 'MU398',
			name: 'Tópicos Especiais em Regência Coral III',
			ementa: 'Estudo programado de assunto relevante na área de Regência Coral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D1D940',
			obligatory: false
		},
		'MU399': {
			code: 'MU399',
			name: 'Tópicos Especiais em Regência Orquestral III',
			ementa: 'Estudo programado de assunto relevante na área de Regência Orquestral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D994',
			obligatory: false
		},
		'MU402': {
			code: 'MU402',
			name: 'Instrumento IV',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU302'],
			color: '#7540D9',
			obligatory: false
		},
		'MU403': {
			code: 'MU403',
			name: 'Flauta IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU303'],
			color: '#D9B340',
			obligatory: false
		},
		'MU404': {
			code: 'MU404',
			name: 'Oboé IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU304'],
			color: '#40D94F',
			obligatory: false
		},
		'MU406': {
			code: 'MU406',
			name: 'Clarineta IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU306'],
			color: '#D940C9',
			obligatory: false
		},
		'MU409': {
			code: 'MU409',
			name: 'Violino IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU309'],
			color: '#5E40D9',
			obligatory: false
		},
		'MU421': {
			code: 'MU421',
			name: 'Contrabaixo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU321'],
			color: '#D940B3',
			obligatory: false
		},
		'MU423': {
			code: 'MU423',
			name: 'Piano IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU323'],
			color: '#D9C940',
			obligatory: false
		},
		'MU424': {
			code: 'MU424',
			name: 'Cravo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU324'],
			color: '#4094D9',
			obligatory: false
		},
		'MU426': {
			code: 'MU426',
			name: 'Viola IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU326'],
			color: '#75D940',
			obligatory: false
		},
		'MU427': {
			code: 'MU427',
			name: 'Violoncelo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU327'],
			color: '#8CD940',
			obligatory: false
		},
		'MU484': {
			code: 'MU484',
			name: 'Trompete IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU384'],
			color: '#404FD9',
			obligatory: false
		},
		'MU486': {
			code: 'MU486',
			name: 'Trombone IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU386'],
			color: '#4740D9',
			obligatory: false
		},
		'MU492': {
			code: 'MU492',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU392'],
			color: '#40D966',
			obligatory: false
		},
		'MU494': {
			code: 'MU494',
			name: 'Violão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU394'],
			color: '#D9409C',
			obligatory: false
		},
		'MU496': {
			code: 'MU496',
			name: 'Canto IV',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU396'],
			color: '#40D9AB',
			obligatory: false
		},
		'MU498': {
			code: 'MU498',
			name: 'Tópicos Especiais em Regência Coral IV',
			ementa: 'Estudo programado de assunto relevante na área de Regência Coral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#47D940',
			obligatory: false
		},
		'MU499': {
			code: 'MU499',
			name: 'Tópicos Especiais em Regência Orquestral IV',
			ementa: 'Estudo programado de assunto relevante na área de Regência Orquestral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#407DD9',
			obligatory: false
		},
		'MU548': {
			code: 'MU548',
			name: 'Regência Coral V',
			ementa: 'Estudo sistematizado dos principais elementos da Regência Coral, visando preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU448'],
			color: '#BAD940',
			obligatory: false
		},
		'MU575': {
			code: 'MU575',
			name: 'Regência Orquestral V',
			ementa: 'Estudo sistematizado dos principais elementos da arte da regência orquestral visando o preparo e a formação do músico como artista e líder de uma orquestra, banda ou conjunto instrumental.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU475'],
			color: '#BAD940',
			obligatory: false
		},
		'MU648': {
			code: 'MU648',
			name: 'Regência Coral VI',
			ementa: 'Estudo sitematizado dos principais elementos da Regência Coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['MU548'],
			color: '#BAD940',
			obligatory: false
		},
		'MU675': {
			code: 'MU675',
			name: 'Regência Orquestral VI',
			ementa: 'Estudo sistematizado dos principais elementos da arte da regência orquestral visando o preparo e a formação do músico como artista e líder de uma orquestra, banda ou conjunto instrumental.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU575'],
			color: '#BAD940',
			obligatory: false
		}
	}
};

export default catalogue;
