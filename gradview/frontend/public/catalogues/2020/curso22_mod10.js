const catalogue = {
	totalCredits: 174,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MP102', 'MP140', 'MP150', 'MU058', 'MU105', 'MU193']
		},
		'sem-2': {
			id: '2',
			subjects: ['MP120', 'MP202', 'MP240', 'MP250', 'MU049', 'MU059', 'MU205', 'MU293']
		},
		'sem-3': {
			id: '3',
			subjects: ['MP130', 'MP220', 'MP302', 'MP340', 'MU060', 'MU393']
		},
		'sem-4': {
			id: '4',
			subjects: ['MP230', 'MP320', 'MP402', 'MP440', 'MP450', 'MU061', 'MU493', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['MP110', 'MP330', 'MP420', 'MP502', 'MU111', 'MU132', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['MP210', 'MP430', 'MP520', 'MP602', 'MU231', 'MU232', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['MP620', 'MP702', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['MP802', 'MU999', 'ELET08']
		}
	},

	subjects: {
		'MP102': {
			code: 'MP102',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40D97D'
		},
		'MP140': {
			code: 'MP140',
			name: 'História e Linguagem da Música Popular I',
			ementa: 'Abordagem analítica sobre a evolução estética e sociocultural da música popular nacional e internacional, do início do século até os dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5E40D9'
		},
		'MP150': {
			code: 'MP150',
			name: 'Música e Tecnologia I',
			ementa: 'Introdução aos principais tipos de aplicação dos computadores nas atividades musicais. Editoração de partituras, seqüenciação: áudio digital.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99C40'
		},
		'MU058': {
			code: 'MU058',
			name: 'Rítmica I',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#40D9D9'
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
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#D9409C'
		},
		'MP120': {
			code: 'MP120',
			name: 'Prática Instrumental I',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#BA40D9'
		},
		'MP202': {
			code: 'MP202',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP102'],
			color: ''
		},
		'MP240': {
			code: 'MP240',
			name: 'História e Linguagem da Música Popular II',
			ementa: 'O Jazz desde o seu surgimento no início do século XX até os dias atuais; estudo e audição de seus principais estilos, instrumentistas, grupos e compositores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP140'],
			color: ''
		},
		'MP250': {
			code: 'MP250',
			name: 'Música e Tecnologia II',
			ementa: 'Histórico, conceituação e terminologia do protocolo MIDI. Prática no manuseio de equipamentos MIDI.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP150'],
			color: ''
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
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: ''
		},
		'MP130': {
			code: 'MP130',
			name: 'Harmonia I',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040'
		},
		'MP220': {
			code: 'MP220',
			name: 'Prática Instrumental II',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP120'],
			color: ''
		},
		'MP302': {
			code: 'MP302',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP202'],
			color: ''
		},
		'MP340': {
			code: 'MP340',
			name: 'História e Linguagem da Música Popular III',
			ementa: 'Estudo da história da música popular brasileira das origens aos dias de hoje. Gêneros, estilos, artistas e movimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP240'],
			color: ''
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
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: ''
		},
		'MP230': {
			code: 'MP230',
			name: 'Harmonia II',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP130'],
			color: ''
		},
		'MP320': {
			code: 'MP320',
			name: 'Prática Instrumental III',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP220'],
			color: ''
		},
		'MP402': {
			code: 'MP402',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP302'],
			color: ''
		},
		'MP440': {
			code: 'MP440',
			name: 'História e Linguagem da Música Popular IV',
			ementa: 'Estudo da história da música popular brasileira das origens aos dias de hoje. Gêneros, estilos, artistas e movimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP340'],
			color: ''
		},
		'MP450': {
			code: 'MP450',
			name: 'Música e Tecnologia IV',
			ementa: 'Laboratório de gravações, profissionais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP250'],
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
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: ''
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'MP110': {
			code: 'MP110',
			name: 'Arranjo I',
			ementa: 'Técnicas de escrita musical para formações instrumentais diversas. Prática de arranjo em música popular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: ''
		},
		'MP330': {
			code: 'MP330',
			name: 'Harmonia III',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP230'],
			color: ''
		},
		'MP420': {
			code: 'MP420',
			name: 'Prática Instrumental IV',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP320'],
			color: ''
		},
		'MP502': {
			code: 'MP502',
			name: 'Percussão V',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP402'],
			color: ''
		},
		'MU111': {
			code: 'MU111',
			name: 'Música Industrializada I',
			ementa: 'Conceitos de industrialização em geral e o caso particular da industrialização do som. Conceitos musicais e de audição em linguagem física. A gravação sonora sob os aspectos histórico e técnico atual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407DD9'
		},
		'MU132': {
			code: 'MU132',
			name: 'Trilhas Sonoras I',
			ementa: 'A música como elemento das linguagens audiovisuais. Aspectos histórico e técnico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BAD940'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'MP210': {
			code: 'MP210',
			name: 'Arranjo II',
			ementa: 'Técnicas de escrita musical para formações instrumentais diversas. Prática de arranjo em música popular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP110'],
			color: ''
		},
		'MP430': {
			code: 'MP430',
			name: 'Harmonia IV',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP330'],
			color: ''
		},
		'MP520': {
			code: 'MP520',
			name: 'Prática Instrumental V',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP420'],
			color: ''
		},
		'MP602': {
			code: 'MP602',
			name: 'Percussão VI',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP502'],
			color: ''
		},
		'MU231': {
			code: 'MU231',
			name: 'Música Industrializada II',
			ementa: 'Conseqüências econômicas, sociais, artísticas e culturais da gravação sonora.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU111'],
			color: ''
		},
		'MU232': {
			code: 'MU232',
			name: 'Trilhas Sonoras II',
			ementa: 'A música como elemento das linguagens audiovisuais. Aspectos histórico e técnico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU132'],
			color: ''
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'MP620': {
			code: 'MP620',
			name: 'Prática Instrumental VI',
			ementa: 'Execução em grupo de peças musicais em gêneros e estilos diversos e em grau progressivo de dificuldade.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP520'],
			color: ''
		},
		'MP702': {
			code: 'MP702',
			name: 'Percussão VII',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP602'],
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'MP802': {
			code: 'MP802',
			name: 'Percussão VIII',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP702'],
			color: ''
		},
		'MU999': {
			code: 'MU999',
			name: 'Projeto Final de Graduação',
			ementa: 'Desenvolvimento de projeto individual ou coletivo na especialidade de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['MP602'],
			color: ''
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