const catalogue = {
	totalCredits: 224,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MU058', 'MU112', 'MU105', 'MU120', 'MU193', 'AR101', 'MU360']
		},
		'sem-2': {
			id: '2',
			subjects: ['EL683', 'MU049', 'MU059', 'MU212', 'MU205', 'MU220', 'MU293', 'MU599', 'MU460', 'MU068']
		},
		'sem-3': {
			id: '3',
			subjects: ['MU070', 'MU060', 'MU119', 'EL511', 'MU393', 'MU560', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['MU061', 'EL212', 'MU219', 'MU493', 'MU660', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'EL774', 'MU319', 'AR301', 'MU699', 'MU190', 'MU147']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL874', 'MU419', 'ELET06', 'MU799', 'MU290']
		},
		'sem-7': {
			id: '7',
			subjects: ['MU573', 'LA001', 'MU162', 'ELET07', 'AR601']
		},
		'sem-8': {
			id: '8',
			subjects: ['MU999', 'MU673', 'MU262', 'MU899', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---', 'MP---', 'MU---'],
		},
		'elet-2': {
			credits: 2,
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
		'elet-5': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['MU114', 'MU146', 'MU214', 'MU246', 'MU314', 'MU346', 'MU414', 'MU446'],
		},
		'elet-6': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['MP110', 'MP130', 'MP210', 'MP230', 'MP330', 'MP430', 'MU111', 'MU231'],
		},
	},

	subjects: {
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Atualização dos saberes pré-adquiridos sobre a temática da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B98B46',
			obligatory: true
		},
		'MU058': {
			code: 'MU058',
			name: 'Rítmica I',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'MU105': {
			code: 'MU105',
			name: 'Estruturação Musical I',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95446',
			obligatory: true
		},
		'MU112': {
			code: 'MU112',
			name: 'Técnica Vocal I',
			ementa: 'Estudos iniciais sobre técnica básica de canto: aparelho fonador, sistema respiratório, noções de ressonância, aplicação técnica e exercícios.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A746',
			obligatory: true
		},
		'MU120': {
			code: 'MU120',
			name: 'Coral I',
			ementa: 'Participação no coral dos Cursos de Bacharelado em Música e Licenciatura em Música.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4F46B9',
			obligatory: true
		},
		'MU193': {
			code: 'MU193',
			name: 'Percepção Musical I',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: '',
			color: '#B99946',
			obligatory: true
		},
		'MU360': {
			code: 'MU360',
			name: 'História da Música I',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#94B946',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9AB',
			obligatory: true
		},
		'MU049': {
			code: 'MU049',
			name: 'Introdução à Pesquisa',
			ementa: 'Referenciais teóricos e metodológicos básicos com revisão da Língua Portuguesa e realização de projeto de pesquisa no campo da música. Leitura e escrita de textos acadêmicos. Elaboração de projeto de pesquisa com definição de objetivo, objeto de estudo, metodologia, cronograma, bibliografia, conforme padrões vigentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#B95446',
			obligatory: true
		},
		'MU059': {
			code: 'MU059',
			name: 'Rítmica II',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU058'],
			color: '#4674B9',
			obligatory: true
		},
		'MU068': {
			code: 'MU068',
			name: 'Laboratório de Instrumentos Harmônicos',
			ementa: 'Estudo ordenado e progressivo de instrumentos harmônicos visando o desenvolvimento técnico-pedagógico do aluno.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#464BB9',
			obligatory: true
		},
		'MU205': {
			code: 'MU205',
			name: 'Estruturação Musical II',
			ementa: 'Revisão de teoria musical básica. Introdução aos princípios de escrita harmônica e contraponto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU105'],
			color: '#B95446',
			obligatory: true
		},
		'MU212': {
			code: 'MU212',
			name: 'Técnica Vocal II',
			ementa: 'Técnica vocal para coral; registros vocais; classificação de vozes; leitura e interpretação de textos musicais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU112'],
			color: '#B9A746',
			obligatory: true
		},
		'MU220': {
			code: 'MU220',
			name: 'Coral II',
			ementa: 'Participação no coral dos Cursos de Bacharelado em Música e Licenciatura em Música.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU120'],
			color: '#4F46B9',
			obligatory: true
		},
		'MU293': {
			code: 'MU293',
			name: 'Percepção Musical II',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU193.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU193'],
			color: '#B99946',
			obligatory: true
		},
		'MU460': {
			code: 'MU460',
			name: 'História da Música II',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU360'],
			color: '#94B946',
			obligatory: true
		},
		'MU599': {
			code: 'MU599',
			name: 'Atividades Científico Culturais I',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico-práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#8646B9',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94662',
			obligatory: true
		},
		'MU060': {
			code: 'MU060',
			name: 'Rítmica III',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU059'],
			color: '#4674B9',
			obligatory: true
		},
		'MU070': {
			code: 'MU070',
			name: 'Percussão Aplicada',
			ementa: 'Estudo ordenado e progressivo de instrumentos de percussão visando o desenvolvimento técnico-pedagógico do aluno.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B966',
			obligatory: true
		},
		'MU119': {
			code: 'MU119',
			name: 'Pedagogia e Didática Musical I',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicados à música.Uso de recursos das tecnologias de informação e comunicação empregados na música e no ensino de música.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#46B958',
			obligatory: true
		},
		'MU393': {
			code: 'MU393',
			name: 'Percepção Musical III',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU293.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU293'],
			color: '#B99946',
			obligatory: true
		},
		'MU560': {
			code: 'MU560',
			name: 'História da Música III',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU460'],
			color: '#94B946',
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
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6B46B9',
			obligatory: true
		},
		'MU061': {
			code: 'MU061',
			name: 'Rítmica IV',
			ementa: 'Treinamento auditivo e prática progressiva rítmica. Conceitos, análise, exercícios e ditados.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU060'],
			color: '#4674B9',
			obligatory: true
		},
		'MU219': {
			code: 'MU219',
			name: 'Pedagogia e Didática Musical II',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicados à música.Uso de recursos das tecnologias de informação e comunicação empregados na música e no ensino de música.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['MU119'],
			color: '#46B958',
			obligatory: true
		},
		'MU493': {
			code: 'MU493',
			name: 'Percepção Musical IV',
			ementa: 'Treinamento auditivo para músicos. Codificação e decodificação de eventos musicais melódicos e harmônicos apresentados de maneira gradual, por ordem de dificuldade. Continuação da disciplina MU393.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:0, D:0, HS:5, SL:2, C:5},
			requisitos: ['MU393'],
			color: '#B99946',
			obligatory: true
		},
		'MU660': {
			code: 'MU660',
			name: 'História da Música IV',
			ementa: 'Estudo sistematizado dos principais elementos teóricos, estéticos e filosóficos da história da música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#94B946',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AR301': {
			code: 'AR301',
			name: 'Psicologia do Desenvolvimento Aplicado às Artes I',
			ementa: 'A compreensão do desenvolvimento do ser humano em relação aos aspectos da habilidade motora, da ampliação do conhecimento e da capacidade criadora, levando-se em conta a expressão lúdica e o aprofundamento da percepção corporal, visual e auditiva do indivíduo. A experiência do fenômeno da arte, tanto em sua aproximação do material concreto quanto na realização de composições mais elaboradas, permitindo a compreensão do processo criativo e evidenciando a necessidade da expressão individual, experiência essa adequada às diversas fases evolutivas e variadas formas de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B94B',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#B96246',
			obligatory: true
		},
		'MU147': {
			code: 'MU147',
			name: 'Iniciação à Regência I',
			ementa: 'Estudo sistematizado dos principais elementos da regência coral, visando o preparo e a formação do músico como artista e líder de coro ou grupo vocal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#79B946',
			obligatory: true
		},
		'MU190': {
			code: 'MU190',
			name: 'História da Música Brasileira I',
			ementa: 'História da música de concerto e de outras manifestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU560'],
			color: '#94B946',
			obligatory: true
		},
		'MU319': {
			code: 'MU319',
			name: 'Pedagogia e Didática Musical III',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicada à música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU219'],
			color: '#46B958',
			obligatory: true
		},
		'MU699': {
			code: 'MU699',
			name: 'Atividades Científico Culturais II',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico-práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:1, C:4},
			requisitos: ['MU599'],
			color: '#8646B9',
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
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#B96246',
			obligatory: true
		},
		'MU290': {
			code: 'MU290',
			name: 'História da Música Brasileira II',
			ementa: 'História da música de concerto e de outras manisfestações musicais no Brasil do período colonial aos dias de hoje.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU190'],
			color: '#94B946',
			obligatory: true
		},
		'MU419': {
			code: 'MU419',
			name: 'Pedagogia e Didática Musical IV',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicada à música.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU319'],
			color: '#46B958',
			obligatory: true
		},
		'MU799': {
			code: 'MU799',
			name: 'Atividades Científico Culturais III',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico-práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:1, C:4},
			requisitos: ['MU699'],
			color: '#8646B9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AR601': {
			code: 'AR601',
			name: 'Processos Pedagógicos Voltados para o Corpo na Arte',
			ementa: 'Discute conhecimentos e problemáticas que integram corpo, arte, educação e sociedade, apresentando fundamentos histórico-contextuais, teóricos, práticos e metodológicos direcionados ao ensino. Prepara o aluno para refletir e atuar no ensino da arte em ambientes de educação formal e não formal, dando suporte ao ensino-aprendizado dos conteúdos necessários à condução dos estágios e demais práticas de ensino. Estuda processos educacionais e produções artísticas de diferentes públicos, propondo também estratégias de inclusão para alunos com deficiência e comunidades com demandas educativas especiais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4658B9',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B99D',
			obligatory: true
		},
		'MU162': {
			code: 'MU162',
			name: 'Laboratório de Expressão Corporal I',
			ementa: 'Introdução à expressão corporal. Laboratório de expressão livre.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B446',
			obligatory: true
		},
		'MU573': {
			code: 'MU573',
			name: 'Estágio Pedagógico I',
			ementa: 'O aluno deverá assumir situações de regência supervisionada de classe, planejando, desenvolvendo e avaliando atividades de música dentro da educação formal - em escolas de educação básica (educação infantil, ensino fundamental e médio) ou escolas especializadas de música - ou ainda em espaços de educação não-formal, como projetos sociais, projetos de extensão universitária, igrejas, programas extracurriculares desenvolvidos em escolas, entre outros. Pelo menos 100 (cem) horas das 400 (quatrocentas) horas totais de estágio têm que ser desenvolvidas na educação básica, preferencialmente em escola pública. O aluno deverá apresentar relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['EL874'],
			color: '#B96246',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MU262': {
			code: 'MU262',
			name: 'Laboratório de Expressão Corporal II',
			ementa: 'Introdução à expressão corporal. Laboratório de expressão livre.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU162'],
			color: '#B9B446',
			obligatory: true
		},
		'MU673': {
			code: 'MU673',
			name: 'Estágio Pedagógico II',
			ementa: 'O aluno deverá assumir situações de regência supervisionada de classe, planejando, desenvolvendo e avaliando atividades de música dentro da educação formal - em escolas de educação básica ou escolas especializadas de música - ou ainda em espaços de educação não-formal, como projetos sociais, projetos de extensão universitária, igrejas, programas extracurriculares desenvolvidos em escolas, entre outros. Pelo menos 100 (cem) horas das 400 (quatrocentas) horas totais de estágio têm que ser desenvolvidas na educação básica, preferencialmente em escola pública. O aluno deverá apresentar relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['MU573'],
			color: '#B96246',
			obligatory: true
		},
		'MU899': {
			code: 'MU899',
			name: 'Atividades Científico Culturais IV',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico-práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:1, C:4},
			requisitos: ['MU799'],
			color: '#8646B9',
			obligatory: true
		},
		'MU999': {
			code: 'MU999',
			name: 'Projeto Final de Graduação',
			ementa: 'Desenvolvimento de projeto individual ou coletivo na especialidade de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['EL874'],
			color: '#B96246',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
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
			color: '#B946A7',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4FB946',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5D46B9',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B990',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B974',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9446B9',
			obligatory: false
		},
		'MP101': {
			code: 'MP101',
			name: 'Cordas I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#A246B9',
			obligatory: false
		},
		'MP102': {
			code: 'MP102',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'MP103': {
			code: 'MP103',
			name: 'Sopros I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46ABB9',
			obligatory: false
		},
		'MP104': {
			code: 'MP104',
			name: 'Teclados I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#86B946',
			obligatory: false
		},
		'MP105': {
			code: 'MP105',
			name: 'Voz I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B9467D',
			obligatory: false
		},
		'MP110': {
			code: 'MP110',
			name: 'Arranjo I',
			ementa: 'Técnicas de escrita musical para formações instrumentais diversas. Prática de arranjo em música popular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: '#B95446',
			obligatory: false
		},
		'MP130': {
			code: 'MP130',
			name: 'Harmonia I',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B4',
			obligatory: false
		},
		'MP201': {
			code: 'MP201',
			name: 'Cordas II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP101'],
			color: '#A246B9',
			obligatory: false
		},
		'MP202': {
			code: 'MP202',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP102'],
			color: '#46B9B9',
			obligatory: false
		},
		'MP203': {
			code: 'MP203',
			name: 'Sopros II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP103'],
			color: '#46ABB9',
			obligatory: false
		},
		'MP204': {
			code: 'MP204',
			name: 'Teclados II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP104'],
			color: '#86B946',
			obligatory: false
		},
		'MP205': {
			code: 'MP205',
			name: 'Voz II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP105'],
			color: '#B9467D',
			obligatory: false
		},
		'MP210': {
			code: 'MP210',
			name: 'Arranjo II',
			ementa: 'Técnicas de escrita musical para formações instrumentais diversas. Prática de arranjo em música popular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP110'],
			color: '#B95446',
			obligatory: false
		},
		'MP230': {
			code: 'MP230',
			name: 'Harmonia II',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP130'],
			color: '#B946B4',
			obligatory: false
		},
		'MP301': {
			code: 'MP301',
			name: 'Cordas III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP201'],
			color: '#A246B9',
			obligatory: false
		},
		'MP302': {
			code: 'MP302',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP202'],
			color: '#46B9B9',
			obligatory: false
		},
		'MP303': {
			code: 'MP303',
			name: 'Sopros III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP203'],
			color: '#46ABB9',
			obligatory: false
		},
		'MP304': {
			code: 'MP304',
			name: 'Teclados III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP204'],
			color: '#86B946',
			obligatory: false
		},
		'MP305': {
			code: 'MP305',
			name: 'Voz III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP205'],
			color: '#B9467D',
			obligatory: false
		},
		'MP330': {
			code: 'MP330',
			name: 'Harmonia III',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP230'],
			color: '#B946B4',
			obligatory: false
		},
		'MP401': {
			code: 'MP401',
			name: 'Cordas IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP301'],
			color: '#A246B9',
			obligatory: false
		},
		'MP402': {
			code: 'MP402',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP302'],
			color: '#46B9B9',
			obligatory: false
		},
		'MP403': {
			code: 'MP403',
			name: 'Sopros IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP303'],
			color: '#46ABB9',
			obligatory: false
		},
		'MP404': {
			code: 'MP404',
			name: 'Teclados IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP304'],
			color: '#86B946',
			obligatory: false
		},
		'MP405': {
			code: 'MP405',
			name: 'Voz IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MP305'],
			color: '#B9467D',
			obligatory: false
		},
		'MP430': {
			code: 'MP430',
			name: 'Harmonia IV',
			ementa: 'Estudo dos conceitos e procedimentos harmônicos característicos da música popular. Prática de escrita harmônica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MP330'],
			color: '#B946B4',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B97D46',
			obligatory: false
		},
		'MU102': {
			code: 'MU102',
			name: 'Instrumento I',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#469DB9',
			obligatory: false
		},
		'MU103': {
			code: 'MU103',
			name: 'Flauta I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#6BB946',
			obligatory: false
		},
		'MU104': {
			code: 'MU104',
			name: 'Oboé I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4666B9',
			obligatory: false
		},
		'MU106': {
			code: 'MU106',
			name: 'Clarineta I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#A2B946',
			obligatory: false
		},
		'MU109': {
			code: 'MU109',
			name: 'Violino I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#7946B9',
			obligatory: false
		},
		'MU111': {
			code: 'MU111',
			name: 'Música Industrializada I',
			ementa: 'Conceitos de industrialização em geral e o caso particular da industrialização do som. Conceitos musicais e de audição em linguagem física. A gravação sonora sob os aspectos histórico e técnico atual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5DB946',
			obligatory: false
		},
		'MU114': {
			code: 'MU114',
			name: 'Análise I',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU205'],
			color: '#B95446',
			obligatory: false
		},
		'MU121': {
			code: 'MU121',
			name: 'Contrabaixo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#4690B9',
			obligatory: false
		},
		'MU123': {
			code: 'MU123',
			name: 'Piano I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B0B946',
			obligatory: false
		},
		'MU124': {
			code: 'MU124',
			name: 'Cravo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B94699',
			obligatory: false
		},
		'MU126': {
			code: 'MU126',
			name: 'Viola I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B94654',
			obligatory: false
		},
		'MU127': {
			code: 'MU127',
			name: 'Violoncelo I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B9468B',
			obligatory: false
		},
		'MU146': {
			code: 'MU146',
			name: 'Harmonia do Período Barroco',
			ementa: 'Estudo progressivo da harmonia por estilos. O período barroco.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4682B9',
			obligatory: false
		},
		'MU184': {
			code: 'MU184',
			name: 'Trompete I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B9466F',
			obligatory: false
		},
		'MU186': {
			code: 'MU186',
			name: 'Trombone I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B046B9',
			obligatory: false
		},
		'MU192': {
			code: 'MU192',
			name: 'Percussão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B96F46',
			obligatory: false
		},
		'MU194': {
			code: 'MU194',
			name: 'Violão I',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#46B982',
			obligatory: false
		},
		'MU196': {
			code: 'MU196',
			name: 'Canto I',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estiloterpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'MU202': {
			code: 'MU202',
			name: 'Instrumento II',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU102'],
			color: '#469DB9',
			obligatory: false
		},
		'MU203': {
			code: 'MU203',
			name: 'Flauta II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU103'],
			color: '#6BB946',
			obligatory: false
		},
		'MU204': {
			code: 'MU204',
			name: 'Oboé II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU104'],
			color: '#4666B9',
			obligatory: false
		},
		'MU206': {
			code: 'MU206',
			name: 'Clarineta II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU106'],
			color: '#A2B946',
			obligatory: false
		},
		'MU209': {
			code: 'MU209',
			name: 'Violino II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU109'],
			color: '#7946B9',
			obligatory: false
		},
		'MU214': {
			code: 'MU214',
			name: 'Análise II',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU114'],
			color: '#B95446',
			obligatory: false
		},
		'MU221': {
			code: 'MU221',
			name: 'Contrabaixo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU121'],
			color: '#4690B9',
			obligatory: false
		},
		'MU223': {
			code: 'MU223',
			name: 'Piano II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU123'],
			color: '#B0B946',
			obligatory: false
		},
		'MU224': {
			code: 'MU224',
			name: 'Cravo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU124'],
			color: '#B94699',
			obligatory: false
		},
		'MU226': {
			code: 'MU226',
			name: 'Viola II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU126'],
			color: '#B94654',
			obligatory: false
		},
		'MU227': {
			code: 'MU227',
			name: 'Violoncelo II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU127'],
			color: '#B9468B',
			obligatory: false
		},
		'MU231': {
			code: 'MU231',
			name: 'Música Industrializada II',
			ementa: 'Conseqüências econômicas, sociais, artísticas e culturais da gravação sonora.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU111'],
			color: '#5DB946',
			obligatory: false
		},
		'MU246': {
			code: 'MU246',
			name: 'Harmonia do Classicismo ao Romantismo',
			ementa: 'Estudo progressivo da harmonia por estilos. O período clássico e introdução ao romantismo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU146'],
			color: '#4682B9',
			obligatory: false
		},
		'MU284': {
			code: 'MU284',
			name: 'Trompete II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU184'],
			color: '#B9466F',
			obligatory: false
		},
		'MU286': {
			code: 'MU286',
			name: 'Trombone II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU186'],
			color: '#B046B9',
			obligatory: false
		},
		'MU292': {
			code: 'MU292',
			name: 'Percussão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU192'],
			color: '#B96F46',
			obligatory: false
		},
		'MU294': {
			code: 'MU294',
			name: 'Violão II',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU194'],
			color: '#46B982',
			obligatory: false
		},
		'MU296': {
			code: 'MU296',
			name: 'Canto II',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU196'],
			color: '#B94646',
			obligatory: false
		},
		'MU302': {
			code: 'MU302',
			name: 'Instrumento III',
			ementa: 'Estudo ordenado e progressivo em instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU202'],
			color: '#469DB9',
			obligatory: false
		},
		'MU303': {
			code: 'MU303',
			name: 'Flauta III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU203'],
			color: '#6BB946',
			obligatory: false
		},
		'MU304': {
			code: 'MU304',
			name: 'Oboé III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU204'],
			color: '#4666B9',
			obligatory: false
		},
		'MU306': {
			code: 'MU306',
			name: 'Clarineta III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU206'],
			color: '#A2B946',
			obligatory: false
		},
		'MU309': {
			code: 'MU309',
			name: 'Violino III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU209'],
			color: '#7946B9',
			obligatory: false
		},
		'MU314': {
			code: 'MU314',
			name: 'Análise III',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU214'],
			color: '#B95446',
			obligatory: false
		},
		'MU321': {
			code: 'MU321',
			name: 'Contrabaixo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU221'],
			color: '#4690B9',
			obligatory: false
		},
		'MU323': {
			code: 'MU323',
			name: 'Piano III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU223'],
			color: '#B0B946',
			obligatory: false
		},
		'MU324': {
			code: 'MU324',
			name: 'Cravo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU224'],
			color: '#B94699',
			obligatory: false
		},
		'MU326': {
			code: 'MU326',
			name: 'Viola III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU226'],
			color: '#B94654',
			obligatory: false
		},
		'MU327': {
			code: 'MU327',
			name: 'Violoncelo III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU227'],
			color: '#B9468B',
			obligatory: false
		},
		'MU346': {
			code: 'MU346',
			name: 'Harmonia do Romantismo ao Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. O período romântico e introdução à música do século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU246'],
			color: '#4682B9',
			obligatory: false
		},
		'MU384': {
			code: 'MU384',
			name: 'Trompete III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU284'],
			color: '#B9466F',
			obligatory: false
		},
		'MU386': {
			code: 'MU386',
			name: 'Trombone III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU286'],
			color: '#B046B9',
			obligatory: false
		},
		'MU392': {
			code: 'MU392',
			name: 'Percussão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU292'],
			color: '#B96F46',
			obligatory: false
		},
		'MU394': {
			code: 'MU394',
			name: 'Violão III',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU294'],
			color: '#46B982',
			obligatory: false
		},
		'MU396': {
			code: 'MU396',
			name: 'Canto III',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU296'],
			color: '#B94646',
			obligatory: false
		},
		'MU402': {
			code: 'MU402',
			name: 'Instrumento IV',
			ementa: 'Estudo ordenado e progressivo em Instrumento de escolha do aluno.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU302'],
			color: '#469DB9',
			obligatory: false
		},
		'MU403': {
			code: 'MU403',
			name: 'Flauta IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU303'],
			color: '#6BB946',
			obligatory: false
		},
		'MU404': {
			code: 'MU404',
			name: 'Oboé IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU304'],
			color: '#4666B9',
			obligatory: false
		},
		'MU406': {
			code: 'MU406',
			name: 'Clarineta IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU306'],
			color: '#A2B946',
			obligatory: false
		},
		'MU409': {
			code: 'MU409',
			name: 'Violino IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU309'],
			color: '#7946B9',
			obligatory: false
		},
		'MU414': {
			code: 'MU414',
			name: 'Análise IV',
			ementa: 'Análise sistemática de obras do repertório musical de acordo com conceitos da teoria musical e princípios de organização do material sonoro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU314'],
			color: '#B95446',
			obligatory: false
		},
		'MU421': {
			code: 'MU421',
			name: 'Contrabaixo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU321'],
			color: '#4690B9',
			obligatory: false
		},
		'MU423': {
			code: 'MU423',
			name: 'Piano IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU323'],
			color: '#B0B946',
			obligatory: false
		},
		'MU424': {
			code: 'MU424',
			name: 'Cravo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU324'],
			color: '#B94699',
			obligatory: false
		},
		'MU426': {
			code: 'MU426',
			name: 'Viola IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU326'],
			color: '#B94654',
			obligatory: false
		},
		'MU427': {
			code: 'MU427',
			name: 'Violoncelo IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU327'],
			color: '#B9468B',
			obligatory: false
		},
		'MU446': {
			code: 'MU446',
			name: 'Harmonia do Século XX',
			ementa: 'Estudo progressivo da harmonia por estilos. A música de século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MU346'],
			color: '#4682B9',
			obligatory: false
		},
		'MU484': {
			code: 'MU484',
			name: 'Trompete IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU384'],
			color: '#B9466F',
			obligatory: false
		},
		'MU486': {
			code: 'MU486',
			name: 'Trombone IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU386'],
			color: '#B046B9',
			obligatory: false
		},
		'MU492': {
			code: 'MU492',
			name: 'Percussão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU392'],
			color: '#B96F46',
			obligatory: false
		},
		'MU494': {
			code: 'MU494',
			name: 'Violão IV',
			ementa: 'Estudo ordenado e progressivo do instrumento.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU394'],
			color: '#46B982',
			obligatory: false
		},
		'MU496': {
			code: 'MU496',
			name: 'Canto IV',
			ementa: 'Estudo ordenado e progressivo do instrumento. Estudo dos autores, estilo, interpretação e repertório.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['MU396'],
			color: '#B94646',
			obligatory: false
		}
	}
};

export default catalogue;
