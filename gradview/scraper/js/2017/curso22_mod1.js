const catalogue = {
	totalCredits: 172,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MU058', 'MU105', 'MU120', 'MU121', 'MU179', 'MU193', 'MU360']
		},
		'sem-2': {
			id: '2',
			subjects: ['MU049', 'MU059', 'MU205', 'MU220', 'MU221', 'MU279', 'MU293', 'MU460']
		},
		'sem-3': {
			id: '3',
			subjects: ['MU060', 'MU114', 'MU146', 'MU178', 'MU321', 'MU379', 'MU393', 'MU560', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['MU061', 'MU214', 'MU246', 'MU278', 'MU421', 'MU479', 'MU493', 'MU660', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['MU190', 'MU314', 'MU346', 'MU378', 'MU521', 'MU579', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['MU290', 'MU414', 'MU446', 'MU478', 'MU621', 'MU679', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['MU721', 'MU779', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['MU821', 'MU879', 'MU998', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---', 'MP---', 'MU---'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---'],
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
			color: '#CBD940',
			obligatory: true
		},
		'MU105': {
			code: 'MU105',
			name: 'Estruturação Musical I',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9BD40',
			obligatory: true
		},
		'MU120': {
			code: 'MU120',
			name: 'Coral I',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99340',
			obligatory: true
		},
		'MU121': {
			code: 'MU121',
			name: 'Contrabaixo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40D985',
			obligatory: true
		},
		'MU179': {
			code: 'MU179',
			name: 'Prática Orquestral I',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94069',
			obligatory: true
		},
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#CB40D9',
			obligatory: true
		},
		'MU360': {
			code: 'MU360',
			name: 'História da Música I',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A1D940',
			obligatory: true
		},
		'MU049': {
			code: 'MU049',
			name: 'Introdução à Pesquisa',
			ementa: 'Referenciais teóricas e metodológicas básicas para realização de projeto de pesquisa no campo da música. Elaboração de projeto de pesquisa com definição de objetivo, objeto de estudo, metodologia, cronograma, bibliografia, conforme padrões vigentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#D9BD40',
			obligatory: true
		},
		'MU059': {
			code: 'MU059',
			name: 'Rítmica II',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU058'],
			color: '#CBD940',
			obligatory: true
		},
		'MU205': {
			code: 'MU205',
			name: 'Estruturação Musical II',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#D9BD40',
			obligatory: true
		},
		'MU220': {
			code: 'MU220',
			name: 'Coral II',
			ementa: 'Participação no coral da escola.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU120'],
			color: '#D99340',
			obligatory: true
		},
		'MU221': {
			code: 'MU221',
			name: 'Contrabaixo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU121'],
			color: '#40D985',
			obligatory: true
		},
		'MU279': {
			code: 'MU279',
			name: 'Prática Orquestral II',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU179'],
			color: '#D94069',
			obligatory: true
		},
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: '#CB40D9',
			obligatory: true
		},
		'MU460': {
			code: 'MU460',
			name: 'História da Música II',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU360'],
			color: '#A1D940',
			obligatory: true
		},
		'MU060': {
			code: 'MU060',
			name: 'Rítmica III',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU059'],
			color: '#CBD940',
			obligatory: true
		},
		'MU114': {
			code: 'MU114',
			name: 'Análise I',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: '#D9BD40',
			obligatory: true
		},
		'MU146': {
			code: 'MU146',
			name: 'Harmonia do Período Barroco',
			ementa: 'Estudo progressivo da harmonia por estilos. O período barroco.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D95C',
			obligatory: true
		},
		'MU178': {
			code: 'MU178',
			name: 'Música de Câmera I',
			ementa: 'Prática musical em pequenos grupos. Execução de repertório camerístico.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40AFD9',
			obligatory: true
		},
		'MU321': {
			code: 'MU321',
			name: 'Contrabaixo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU221'],
			color: '#40D985',
			obligatory: true
		},
		'MU379': {
			code: 'MU379',
			name: 'Prática Orquestral III',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU279'],
			color: '#D94069',
			obligatory: true
		},
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: '#CB40D9',
			obligatory: true
		},
		'MU560': {
			code: 'MU560',
			name: 'História da Música III',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU460'],
			color: '#A1D940',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#4085D9',
			obligatory: true
		},
		'MU061': {
			code: 'MU061',
			name: 'Rítmica IV',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU060'],
			color: '#CBD940',
			obligatory: true
		},
		'MU214': {
			code: 'MU214',
			name: 'Análise II',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU114'],
			color: '#D9BD40',
			obligatory: true
		},
		'MU246': {
			code: 'MU246',
			name: 'Harmonia do Classicismo ao Romantismo',
			ementa: 'Estudo progressivo da harmonia por estilos. O período clássico e introdução ao romantismo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU146'],
			color: '#40D95C',
			obligatory: true
		},
		'MU278': {
			code: 'MU278',
			name: 'Música de Câmera II',
			ementa: 'Prática musical em pequenos grupos. Execução de repertório camerístico.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU178'],
			color: '#40AFD9',
			obligatory: true
		},
		'MU421': {
			code: 'MU421',
			name: 'Contrabaixo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU321'],
			color: '#40D985',
			obligatory: true
		},
		'MU479': {
			code: 'MU479',
			name: 'Prática Orquestral IV',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU379'],
			color: '#D94069',
			obligatory: true
		},
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: '#CB40D9',
			obligatory: true
		},
		'MU660': {
			code: 'MU660',
			name: 'História da Música IV',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#A1D940',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#7740D9',
			obligatory: true
		},
		'MU190': {
			code: 'MU190',
			name: 'História da Música Brasileira I',
			ementa: 'História da música de concerto e de outras manifestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#A1D940',
			obligatory: true
		},
		'MU314': {
			code: 'MU314',
			name: 'Análise III',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU214'],
			color: '#D9BD40',
			obligatory: true
		},
		'MU346': {
			code: 'MU346',
			name: 'Harmonia do Romantismo ao Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. O período romântico e introdução à música do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU246'],
			color: '#40D95C',
			obligatory: true
		},
		'MU378': {
			code: 'MU378',
			name: 'Música de Câmera III',
			ementa: 'Prática musical em pequenos grupos. Execução de repertório camerístico.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU278'],
			color: '#40AFD9',
			obligatory: true
		},
		'MU521': {
			code: 'MU521',
			name: 'Contrabaixo V',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU421'],
			color: '#40D985',
			obligatory: true
		},
		'MU579': {
			code: 'MU579',
			name: 'Prática Orquestral V',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU479'],
			color: '#D94069',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#D94093',
			obligatory: true
		},
		'MU290': {
			code: 'MU290',
			name: 'História da Música Brasileira II',
			ementa: 'História da música de concerto e de outras manisfestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU190'],
			color: '#A1D940',
			obligatory: true
		},
		'MU414': {
			code: 'MU414',
			name: 'Análise IV',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU314'],
			color: '#D9BD40',
			obligatory: true
		},
		'MU446': {
			code: 'MU446',
			name: 'Harmonia do Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. A música de século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU346'],
			color: '#40D95C',
			obligatory: true
		},
		'MU478': {
			code: 'MU478',
			name: 'Música de Câmera IV',
			ementa: 'Prática musical em pequenos grupos. Execução de repertório camerístico.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU378'],
			color: '#40AFD9',
			obligatory: true
		},
		'MU621': {
			code: 'MU621',
			name: 'Contrabaixo VI',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU521'],
			color: '#40D985',
			obligatory: true
		},
		'MU679': {
			code: 'MU679',
			name: 'Prática Orquestral VI',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU579'],
			color: '#D94069',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'MU721': {
			code: 'MU721',
			name: 'Contrabaixo VII',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU621'],
			color: '#40D985',
			obligatory: true
		},
		'MU779': {
			code: 'MU779',
			name: 'Prática Orquestral VII',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU679'],
			color: '#D94069',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#405CD9',
			obligatory: true
		},
		'MU821': {
			code: 'MU821',
			name: 'Contrabaixo VIII',
			ementa: 'Estudo ordenado e progressivo do instrumento. Apresentação de recital de final de curso.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU721'],
			color: '#40D985',
			obligatory: true
		},
		'MU879': {
			code: 'MU879',
			name: 'Prática Orquestral VIII',
			ementa: 'Disciplina voltada ao estudo do repertório orquestral considerando períodos históricos, elementos estéticos, e aspectos técnicos, avaliados através da análise e execução.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MU779'],
			color: '#D94069',
			obligatory: true
		},
		'MU998': {
			code: 'MU998',
			name: 'Recital',
			ementa: 'Montagem, preparação e execução de um programa a ser apresentado publicamente na especialidade de cada aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MU621'],
			color: '#40D985',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D940BD',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#A140D9',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#77D940',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D96940',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9D9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4E40D9',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9AF',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4ED940',
			obligatory: false
		}
	}
};

export default catalogue;
