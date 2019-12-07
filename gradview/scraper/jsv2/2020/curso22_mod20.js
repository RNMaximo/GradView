const catalogue = {
	totalCredits: 174,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MP141', 'MP105', 'MP140', 'MP150', 'MU105', 'MU058', 'MU193']
		},
		'sem-2': {
			id: '2',
			subjects: ['MP120', 'MP205', 'MP240', 'MP250', 'MU049', 'MU205', 'MU293', 'MU059', 'MP241']
		},
		'sem-3': {
			id: '3',
			subjects: ['MP130', 'MP220', 'MP305', 'MP341', 'MP340', 'MU060', 'MU393']
		},
		'sem-4': {
			id: '4',
			subjects: ['MP230', 'MP320', 'MP405', 'MP450', 'MP440', 'MU061', 'ELET04', 'MP441', 'MU493']
		},
		'sem-5': {
			id: '5',
			subjects: ['MP110', 'MP330', 'MP420', 'MP505', 'MP541', 'MU111', 'MU132', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['MP210', 'MP430', 'MP520', 'MP605', 'MP641', 'MU231', 'MU232', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['MP741', 'MP705', 'MP620', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'MP805', 'MU999']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---', 'MP---', 'MU---'],
		},
		'elet-2': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---'],
		},
	},

	subjects: {
		'MP105': {
			code: 'MP105',
			name: 'Voz I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B94680',
			obligatory: true
		},
		'MP140': {
			code: 'MP140',
			name: 'História e Linguagem da Música Popular I',
			ementa: 'Abordagem analítica sobre a evolução estética e sociocultural da música popular nacional e internacional, do início do século até os dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6346B9',
			obligatory: true
		},
		'MP141': {
			code: 'MP141',
			name: 'Canto na Música Popular I',
			ementa: 'Estudo histórico e técnico do desenvolvimento da voz na canção popular brasileira, realizado a partir da escuta de fonogramas das décadas de 30 a 45, a época de ouro da música popular brasileira.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'MP150': {
			code: 'MP150',
			name: 'Música e Tecnologia I',
			ementa: 'Introdução aos principais tipos de aplicação dos computadores nas atividades musicais. Editoração de partituras, seqüenciação: áudio digital.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94663',
			obligatory: true
		},
		'MU058': {
			code: 'MU058',
			name: 'Rítmica I',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'MU105': {
			code: 'MU105',
			name: 'Estruturação Musical I',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8046B9',
			obligatory: true
		},
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#B98046',
			obligatory: true
		},
		'MP120': {
			code: 'MP120',
			name: 'Prática Instrumental I',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'MP205': {
			code: 'MP205',
			name: 'Voz II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP105'],
			color: '#B94680',
			obligatory: true
		},
		'MP240': {
			code: 'MP240',
			name: 'História e Linguagem da Música Popular II',
			ementa: 'O Jazz desde o seu surgimento no início do século XX até os dias atuais; estudo e audição de seus principais estilos, instrumentistas, grupos e compositores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP140'],
			color: '#6346B9',
			obligatory: true
		},
		'MP241': {
			code: 'MP241',
			name: 'Canto na Música Popular II',
			ementa: 'Estudo histórico e técnico do desenvolvimento da voz na canção popular brasileira, realizado a partir da escuta de fonogramas dos anos de 1946 a 1962, período de renovação do samba-canção e da bossa nova.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#B9B946',
			obligatory: true
		},
		'MP250': {
			code: 'MP250',
			name: 'Música e Tecnologia II',
			ementa: 'Histórico, conceituação e terminologia do protocolo MIDI. Prática no manuseio de equipamentos MIDI.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP150'],
			color: '#B94663',
			obligatory: true
		},
		'MU049': {
			code: 'MU049',
			name: 'Introdução à Pesquisa',
			ementa: 'Referenciais teóricos e metodológicos básicos com revisão da Língua Portuguesa e realização de projeto de pesquisa no campo da música. Leitura e escrita de textos acadêmicos. Elaboração de projeto de pesquisa com definição de objetivo, objeto de estudo, metodologia, cronograma, bibliografia, conforme padrões vigentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#8046B9',
			obligatory: true
		},
		'MU059': {
			code: 'MU059',
			name: 'Rítmica II',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU058'],
			color: '#46B946',
			obligatory: true
		},
		'MU205': {
			code: 'MU205',
			name: 'Estruturação Musical II',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#8046B9',
			obligatory: true
		},
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: '#B98046',
			obligatory: true
		},
		'MP130': {
			code: 'MP130',
			name: 'Harmonia I',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9CB946',
			obligatory: true
		},
		'MP220': {
			code: 'MP220',
			name: 'Prática Instrumental II',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP120'],
			color: '#46B963',
			obligatory: true
		},
		'MP305': {
			code: 'MP305',
			name: 'Voz III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP205'],
			color: '#B94680',
			obligatory: true
		},
		'MP340': {
			code: 'MP340',
			name: 'História e Linguagem da Música Popular III',
			ementa: 'Estudo da história da música popular brasileira das origens aos dias de hoje. Gêneros, estilos, artistas e movimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP240'],
			color: '#6346B9',
			obligatory: true
		},
		'MP341': {
			code: 'MP341',
			name: 'Canto na Música Popular III',
			ementa: 'Estudo histórico e técnico do desenvolvimento da voz na canção popular brasileira, realizado a partir da escuta de fonogramas da época dos festivais, jovem guarda e tropicália.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#63B946',
			obligatory: true
		},
		'MU060': {
			code: 'MU060',
			name: 'Rítmica III',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU059'],
			color: '#46B946',
			obligatory: true
		},
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: '#B98046',
			obligatory: true
		},
		'MP230': {
			code: 'MP230',
			name: 'Harmonia II',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP130'],
			color: '#9CB946',
			obligatory: true
		},
		'MP320': {
			code: 'MP320',
			name: 'Prática Instrumental III',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP220'],
			color: '#46B963',
			obligatory: true
		},
		'MP405': {
			code: 'MP405',
			name: 'Voz IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP305'],
			color: '#B94680',
			obligatory: true
		},
		'MP440': {
			code: 'MP440',
			name: 'História e Linguagem da Música Popular IV',
			ementa: 'Estudo da história da música popular brasileira das origens aos dias de hoje. Gêneros, estilos, artistas e movimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP340'],
			color: '#6346B9',
			obligatory: true
		},
		'MP441': {
			code: 'MP441',
			name: 'Canto na Música Popular IV',
			ementa: 'Estudo histórico e técnico do desenvolvimento da voz na música caipira e no samba paulista.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#9C46B9',
			obligatory: true
		},
		'MP450': {
			code: 'MP450',
			name: 'Música e Tecnologia IV',
			ementa: 'Laboratório de gravações, profissionais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP250'],
			color: '#B94663',
			obligatory: true
		},
		'MU061': {
			code: 'MU061',
			name: 'Rítmica IV',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU060'],
			color: '#46B946',
			obligatory: true
		},
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: '#B98046',
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
		'MP110': {
			code: 'MP110',
			name: 'Arranjo I',
			ementa: 'Técnicas de escrita musical para formações instrumentais diversas. Prática de arranjo em música popular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: '#8046B9',
			obligatory: true
		},
		'MP330': {
			code: 'MP330',
			name: 'Harmonia III',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP230'],
			color: '#9CB946',
			obligatory: true
		},
		'MP420': {
			code: 'MP420',
			name: 'Prática Instrumental IV',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP320'],
			color: '#46B963',
			obligatory: true
		},
		'MP505': {
			code: 'MP505',
			name: 'Voz V',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP405'],
			color: '#B94680',
			obligatory: true
		},
		'MP541': {
			code: 'MP541',
			name: 'Canto na Música Popular V',
			ementa: 'Estudo progressivo e sistemático do repertório referente à música caipira e ao samba paulista.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#B96346',
			obligatory: true
		},
		'MU111': {
			code: 'MU111',
			name: 'Música Industrializada I',
			ementa: 'Conceitos de industrialização em geral e o caso particular da industrialização do som. Conceitos musicais e de audição em linguagem física. A gravação sonora sob os aspectos histórico e técnico atual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'MU132': {
			code: 'MU132',
			name: 'Trilhas Sonoras I',
			ementa: 'A música como elemento das linguagens audiovisuais. Aspectos histórico e técnico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4663B9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MP210': {
			code: 'MP210',
			name: 'Arranjo II',
			ementa: 'Técnicas de escrita musical para formações instrumentais diversas. Prática de arranjo em música popular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP110'],
			color: '#8046B9',
			obligatory: true
		},
		'MP430': {
			code: 'MP430',
			name: 'Harmonia IV',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP330'],
			color: '#9CB946',
			obligatory: true
		},
		'MP520': {
			code: 'MP520',
			name: 'Prática Instrumental V',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP420'],
			color: '#46B963',
			obligatory: true
		},
		'MP605': {
			code: 'MP605',
			name: 'Voz VI',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP505'],
			color: '#B94680',
			obligatory: true
		},
		'MP641': {
			code: 'MP641',
			name: 'Canto na Música Popular VI',
			ementa: 'Estudo progressivo e sistemático do repertório que caracteriza a vanguarda paulista, bem como a produção alternativa de música na cidade de São Paulo nos anos 1980.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#4680B9',
			obligatory: true
		},
		'MU231': {
			code: 'MU231',
			name: 'Música Industrializada II',
			ementa: 'Conseqüências econômicas, sociais, artísticas e culturais da gravação sonora.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU111'],
			color: '#80B946',
			obligatory: true
		},
		'MU232': {
			code: 'MU232',
			name: 'Trilhas Sonoras II',
			ementa: 'A música como elemento das linguagens audiovisuais. Aspectos histórico e técnico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU132'],
			color: '#4663B9',
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
		'MP620': {
			code: 'MP620',
			name: 'Prática Instrumental VI',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP520'],
			color: '#46B963',
			obligatory: true
		},
		'MP705': {
			code: 'MP705',
			name: 'Voz VII',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP605'],
			color: '#B94680',
			obligatory: true
		},
		'MP741': {
			code: 'MP741',
			name: 'Canto na Música Popular VII',
			ementa: 'Estudo progressivo e sistemático da canção popular produzida nos países da América Latina, com enfoque especial para Argentina, Chile, Cuba, Peru e México.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#469CB9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MP805': {
			code: 'MP805',
			name: 'Voz VIII',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP705'],
			color: '#B94680',
			obligatory: true
		},
		'MU999': {
			code: 'MU999',
			name: 'Projeto Final de Graduação',
			ementa: 'Desenvolvimento de projeto individual ou coletivo na especialidade de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MP605'],
			color: '#B94680',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
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
			color: '#B9469C',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B99C46',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B99C',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946B9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4646B9',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B980',
			obligatory: false
		}
	}
};

export default catalogue;
