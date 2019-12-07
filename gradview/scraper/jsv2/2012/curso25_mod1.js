const catalogue = {
	totalCredits: 194,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP100', 'AP103', 'AP104', 'AR101', 'AP198', 'AP110']
		},
		'sem-2': {
			id: '2',
			subjects: ['AP200', 'AP203', 'AP204', 'AP415', 'AP298', 'AP210']
		},
		'sem-3': {
			id: '3',
			subjects: ['ELET03', 'AP303', 'AP304', 'AP515', 'AP398']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP403', 'AP520', 'AP404', 'AP615', 'AP498']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'AP620', 'AP518', 'AP598']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP625', 'AP724', 'AP618', 'AP600', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP725', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['AP735', 'AP737'],
		},
		'elet-2': {
			credits: 14,
			hasRestrictions: true,
			subjects: ['AP836', 'AP838'],
		},
		'elet-3': {
			credits: 26,
			hasRestrictions: true,
			subjects: ['AP106', 'AP140', 'AP199', 'AP206', 'AP240', 'AP299', 'AP308', 'AP309', 'AP340', 'AP399', 'AP401', 'AP409', 'AP440', 'AP499', 'AP501', 'AP503', 'AP504', 'AP509', 'AP510', 'AP519', 'AP599', 'AP601', 'AP603', 'AP604', 'AP609', 'AP610', 'AP614', 'AP619', 'AP632', 'AP699', 'AP701', 'AP709', 'AP710', 'AP714', 'AP718', 'AP732', 'AP733', 'AP734', 'AP745', 'AP749', 'AP760', 'AP764', 'AP799', 'AP801', 'AP810', 'AP814', 'AP895', 'AP896', 'AP897', 'AP898', 'AP899', 'AP901', 'AP910', 'AP931', 'AP932', 'AP933', 'AP934', 'AP935', 'AP936', 'AP937', 'AP938', 'AP939', 'AP940', 'AP941', 'AP975', 'AP976', 'AP977', 'AP978', 'AP981', 'AP982', 'AP983', 'AP991', 'AP992', 'AP993', 'EP158'],
		},
		'elet-4': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AR---', 'CS---', 'ML---', 'MP---', 'MU---'],
		},
		'elet-5': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'AP100': {
			code: 'AP100',
			name: 'Práticas de Oficina I',
			ementa: 'Estudo do desenvolvimento das técnicas, materiais e equipamentos, considerando sua utilização nas práticas e procedimentos artísticos, visando a produção de uma poética visual.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#9346B9',
			obligatory: true
		},
		'AP103': {
			code: 'AP103',
			name: 'Pintura I',
			ementa: 'Fundamentos da linguagem pictórica: relação entre o desenho e a pintura. Introdução ao conhecimento de técnicas, materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B97C46',
			obligatory: true
		},
		'AP104': {
			code: 'AP104',
			name: 'Desenho Artístico I',
			ementa: 'Fundamentos da linguagem visual. Desenvolvimento da observação, percepção e apreensão por meio do desenho. A representação: formas e estruturas básicas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94E46',
			obligatory: true
		},
		'AP110': {
			code: 'AP110',
			name: 'Modelagem I',
			ementa: 'Modelagem e Moldagem em materiais diversos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9A246',
			obligatory: true
		},
		'AP198': {
			code: 'AP198',
			name: 'História da Arte I',
			ementa: 'A disciplina terá como tema as manifestações artísticas do Renascimento, estabelecendo suas ligações e rupturas com a visualidade da Idade Média e examinando suas relações com a cultura clássica da Antiguidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#7C46B9',
			obligatory: true
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9469A',
			obligatory: true
		},
		'AP200': {
			code: 'AP200',
			name: 'Práticas de Oficina II',
			ementa: 'Desenvolvimento da disciplina AP100.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP100'],
			color: '#9346B9',
			obligatory: true
		},
		'AP203': {
			code: 'AP203',
			name: 'Pintura II',
			ementa: 'Fundamentos da Linguagem pictórica: composição e relações cromáticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP103'],
			color: '#B97C46',
			obligatory: true
		},
		'AP204': {
			code: 'AP204',
			name: 'Desenho Artístico II',
			ementa: 'Fundamentos da linguagem visual. Instrumentalização técnica: materiais e suportes através da história do desenho. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico I.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104'],
			color: '#B94E46',
			obligatory: true
		},
		'AP210': {
			code: 'AP210',
			name: 'Modelagem II',
			ementa: 'Modelagem com recursos tecnológicos, enfatizando o uso de ferramentas, equipamentos e materiais do fazer artístico e da área educacional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP110'],
			color: '#B9A246',
			obligatory: true
		},
		'AP298': {
			code: 'AP298',
			name: 'História da Arte II',
			ementa: 'A disciplina terá como tema as manifestações artísticas dos Séculos XVII e primeira metade do XVIII na Europa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP198'],
			color: '#7C46B9',
			obligatory: true
		},
		'AP415': {
			code: 'AP415',
			name: 'Escultura I',
			ementa: 'A escultura moderna inserida nas principais vertentes artísticas da primeira metade do Século XX; investigações decorrentes da ruptura com valores e procedimentos tradicionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP110'],
			color: '#B9A246',
			obligatory: true
		},
		'AP303': {
			code: 'AP303',
			name: 'Pintura III',
			ementa: 'Teorias da cor: aprofundamento e desenvolvimento dos estudos cromáticos considerando a pintura na história da arte e a pesquisa de novos materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP203'],
			color: '#B97C46',
			obligatory: true
		},
		'AP304': {
			code: 'AP304',
			name: 'Desenho Artístico III',
			ementa: 'Da observação à representação: os sistemas de representação dos primórdios da história da arte ao período moderno. O desenho como meio de conhecimento sensível. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico II.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: '#B94E46',
			obligatory: true
		},
		'AP398': {
			code: 'AP398',
			name: 'História da Arte III',
			ementa: 'A disciplina acompanhará e discutirá as transformações ocorridas na produção artística européia, desde o surgimento do neoclassicismo, seus desdobramentos na Academia, até o advento do Realismo no Século XIX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP298'],
			color: '#7C46B9',
			obligatory: true
		},
		'AP515': {
			code: 'AP515',
			name: 'Escultura II',
			ementa: 'Novas proposições para o espaço escultórico: conceitos de apropriação, instalação e intervenção nos processos de produção e pensamento da escultura contemporânea.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP415'],
			color: '#B9A246',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AP403': {
			code: 'AP403',
			name: 'Pintura IV',
			ementa: 'Tema e representação na pintura: desenvolvimento das questões abordadas na disciplina anterior.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP303'],
			color: '#B97C46',
			obligatory: true
		},
		'AP404': {
			code: 'AP404',
			name: 'Desenho Artístico IV',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual e seus sistemas de representação no período contemporâneo. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico III.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP304'],
			color: '#B94E46',
			obligatory: true
		},
		'AP498': {
			code: 'AP498',
			name: 'História da Arte IV',
			ementa: 'A disciplina acompanhará e discutirá as transformações ocorridas na produção artística européia, desde o surgimento de Manet até o desenvolvimento das vanguardas históricas no começo do Século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP398'],
			color: '#7C46B9',
			obligatory: true
		},
		'AP520': {
			code: 'AP520',
			name: 'Gravura I',
			ementa: 'Introdução à gravura em relevo. A xilografia como linguagem expressiva. História da gravura européia: séculos XV à XVIII, e Brasil. A gravura de madeira de fio e de topo, linoleogravura e variantes. Impressões diretas e simples: monotipias, carimbos e pochoir.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: '#B94E46',
			obligatory: true
		},
		'AP615': {
			code: 'AP615',
			name: 'Escultura III',
			ementa: 'Abordagens da escultura brasileira e sua inserção no panorama internacional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP515'],
			color: '#B9A246',
			obligatory: true
		},
		'AP518': {
			code: 'AP518',
			name: 'Cerâmica I',
			ementa: 'Histórico da cerâmica. Desenvolvimento técnico e seus processos criativos, instrumentos, equipamentos e materiais. Processo e uso de óxidos na cerâmica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9467C',
			obligatory: true
		},
		'AP598': {
			code: 'AP598',
			name: 'História da Arte V',
			ementa: 'A disciplina abordará a produção artística européia correspondente ao período que se estende do Pós-Segunda Guerra aos dias de hoje.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AP498'],
			color: '#7C46B9',
			obligatory: true
		},
		'AP620': {
			code: 'AP620',
			name: 'Gravura II',
			ementa: 'Introdução à gravura em encavo: calcografia ou gravura em metal. História da gravura em metal. Procedimentos básicos: técnicas de gravação diretas e indiretas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP520'],
			color: '#B94E46',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AP600': {
			code: 'AP600',
			name: 'Metodologia de Pesquisa em Artes Visuais',
			ementa: 'Referenciais teóricos e metodológicos básicos para a realização de pesquisas no campo das artes visuais. Exercícios de elaboração de projetos, levantameno e organização de material empírico, elaboração de relatórios e redação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5D46B9',
			obligatory: true
		},
		'AP618': {
			code: 'AP618',
			name: 'Cerâmica II',
			ementa: 'Conhecimentos artesanais da cerâmica. Uso do forno. O engobe, os esmaltes vitrificáveis e outras. Suas propriedades. Processo de criação e consideração geral sobre os seus aspectos sociais. Processos de expressão. Aplicações artesanais e industriais. O torno e sua função.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP518'],
			color: '#B9467C',
			obligatory: true
		},
		'AP625': {
			code: 'AP625',
			name: 'História da Arte Brasileira I',
			ementa: 'A disciplina terá como conteúdo as manifestações artísticas do período da Colônia e do Império no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#7446B9',
			obligatory: true
		},
		'AP724': {
			code: 'AP724',
			name: 'Gravura III',
			ementa: 'Introdução à gravura planográfica: história da gravura planográfica, séculos XIX e XX; Introdução à gravura contemporânea. Procedimentos básicos: técnicas de gravação e impressão em litografia e serigrafia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP620'],
			color: '#B94E46',
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
		'AP725': {
			code: 'AP725',
			name: 'História da Arte Brasileira II',
			ementa: 'Arte brasileira no século XX. As realizações da Semana de Arte Moderna e o Movimento Modernista. Arte e identidade nacional. Os desdobramentos do modernismo nos anos 30 e 40. As Bienais de São Paulo. A arte concreta e neo-concreta. O abstracionismo informal no Brasil. A \"pop-art\" brasileira. Novas tendências. Arte contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#55B946',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:24},
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
			color: '#B146B9',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#A2B946',
			obligatory: false
		},
		'AP106': {
			code: 'AP106',
			name: 'Plástica I',
			ementa: 'Conceituação plástica no espaço bi e tridimensional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9B146',
			obligatory: false
		},
		'AP140': {
			code: 'AP140',
			name: 'Ateliê Experimental Multidisciplinar I',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9AA46',
			obligatory: false
		},
		'AP199': {
			code: 'AP199',
			name: 'Atividades Artísticas - Culturais - Ensino I',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#B1B946',
			obligatory: false
		},
		'AP206': {
			code: 'AP206',
			name: 'Plástica II',
			ementa: 'A forma e sua dinâmica no espaço. Suportes e técnicas construtivas de investigação plástica na tridimensionalidade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP106'],
			color: '#B9B146',
			obligatory: false
		},
		'AP240': {
			code: 'AP240',
			name: 'Ateliê Experimental Multidisciplinar II',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP140.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9464E',
			obligatory: false
		},
		'AP299': {
			code: 'AP299',
			name: 'Atividades Artísticas - Culturais - Ensino II',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, Histórias da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#AA46B9',
			obligatory: false
		},
		'AP308': {
			code: 'AP308',
			name: 'Cultura Popular',
			ementa: 'A disciplina propõe apresentar e discutir as culturas popular e urbana e o folclore sob enfoque antropológico, estendendo-se para a aplicação na educação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B95546',
			obligatory: false
		},
		'AP309': {
			code: 'AP309',
			name: 'Iniciação Científica I',
			ementa: 'A ser definida a cada semestre em que for oferecida.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B9B1',
			obligatory: false
		},
		'AP340': {
			code: 'AP340',
			name: 'Ateliê Experimental Multidisciplinar III',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP240.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#5DB946',
			obligatory: false
		},
		'AP399': {
			code: 'AP399',
			name: 'Atividades Artísticas - Culturais - Ensino III',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, Histórias da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#466CB9',
			obligatory: false
		},
		'AP401': {
			code: 'AP401',
			name: 'Monitoria I',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#464EB9',
			obligatory: false
		},
		'AP409': {
			code: 'AP409',
			name: 'Iniciação Científica II',
			ementa: 'A ser definida a cada semestre em que for oferecida.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B946',
			obligatory: false
		},
		'AP440': {
			code: 'AP440',
			name: 'Ateliê Experimental Multidisciplinar IV',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP340.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B95D',
			obligatory: false
		},
		'AP499': {
			code: 'AP499',
			name: 'Atividades Artísticas - Culturais - Ensino IV',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#65B946',
			obligatory: false
		},
		'AP501': {
			code: 'AP501',
			name: 'Monitoria II',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#46B97C',
			obligatory: false
		},
		'AP503': {
			code: 'AP503',
			name: 'Pintura V',
			ementa: 'Teorias da Cor: O estudo das relações cromáticas em pintura. A representação do espaço.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B96C',
			obligatory: false
		},
		'AP504': {
			code: 'AP504',
			name: 'Desenho Artístico V',
			ementa: 'Da observação à construção: o desenho como instrumento de conhecimento sensível. A representação do espaço: introdução ao estudo das concepções espaciais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B1B9',
			obligatory: false
		},
		'AP509': {
			code: 'AP509',
			name: 'Computação Gráfica I',
			ementa: 'Conceitos básicos de informática e computação gráfica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'AP510': {
			code: 'AP510',
			name: 'Tópicos Especiais em Processos Criativos III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Pláticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94674',
			obligatory: false
		},
		'AP519': {
			code: 'AP519',
			name: 'Desenho de Propaganda I',
			ementa: 'A Propaganda e as Comunicações. A Agência. O Papel do lay-out.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8B46B9',
			obligatory: false
		},
		'AP599': {
			code: 'AP599',
			name: 'Atividades Artísticas - Culturais - Ensino V',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#B9B946',
			obligatory: false
		},
		'AP601': {
			code: 'AP601',
			name: 'Monitoria III',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#46B9B9',
			obligatory: false
		},
		'AP603': {
			code: 'AP603',
			name: 'Pintura VI',
			ementa: 'Teorias da cor: Desenvolvimento das questões abordadas na disciplina, Pintura V.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#93B946',
			obligatory: false
		},
		'AP604': {
			code: 'AP604',
			name: 'Desenho Artístico VI',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico V.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946B1',
			obligatory: false
		},
		'AP609': {
			code: 'AP609',
			name: 'Computação Gráfica II',
			ementa: 'Desenvolvimento da disciplina AP509.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#465DB9',
			obligatory: false
		},
		'AP610': {
			code: 'AP610',
			name: 'Tópicos Especiais em Processos Criativos IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#9AB946',
			obligatory: false
		},
		'AP614': {
			code: 'AP614',
			name: 'Tópicos Especiais em Processos Criativos V',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4655B9',
			obligatory: false
		},
		'AP619': {
			code: 'AP619',
			name: 'Desenho de Propaganda II',
			ementa: 'Composição de texto e imagem, procedimentos de impressão arte final.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4665B9',
			obligatory: false
		},
		'AP632': {
			code: 'AP632',
			name: 'Desenho Animado I',
			ementa: 'Representação gráfica do movimento. Noções básicas sobre animação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B946AA',
			obligatory: false
		},
		'AP699': {
			code: 'AP699',
			name: 'Atividades Artísticas - Culturais - Ensino VI',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#469AB9',
			obligatory: false
		},
		'AP701': {
			code: 'AP701',
			name: 'Tópicos Especiais em Processos Criativos I',
			ementa: 'O programa da disciplina será estabelicido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#468BB9',
			obligatory: false
		},
		'AP709': {
			code: 'AP709',
			name: 'Arte e Novos Meios I',
			ementa: 'A disciplina propõe apresentar e discutir as linguagens tecnológicas enfocando a criação digital para construção da pesquisa artística: a imagem eletrônica videobjetos, videoinstalações e outros, ambientes interativos e imersivos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94693',
			obligatory: false
		},
		'AP710': {
			code: 'AP710',
			name: 'Tópicos Especiais em Processos Criativos VI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94683',
			obligatory: false
		},
		'AP714': {
			code: 'AP714',
			name: 'Tópicos Especiais em Processos Criativos VII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B99A46',
			obligatory: false
		},
		'AP718': {
			code: 'AP718',
			name: 'Cerâmica III',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos em cerâmica I e II, associados a novas informações históricas e técnicas, encaminhando a reflexão para a cerâmica contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AP618'],
			color: '#B9467C',
			obligatory: false
		},
		'AP732': {
			code: 'AP732',
			name: 'Desenho Animado II',
			ementa: 'Desenho animado e outras técnicas de cinema de animação. Aborda os principais processos de produção de um desenho animado, desde a criação da ideia, planejamento da história, animação de desenhos, filmagem e revelação do material com o auxílio da computação gráfica.',
			semestre: 1,
			vector: {T:0, P:0, L:8, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['AP632'],
			color: '#B946AA',
			obligatory: false
		},
		'AP733': {
			code: 'AP733',
			name: 'Pintura VII',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos pictóricos encaminhando a reflexão para a pintura conteporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#46B98B',
			obligatory: false
		},
		'AP734': {
			code: 'AP734',
			name: 'Desenho Artístico VII',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos gráficos encaminhando a reflexão para o desenho contemporâneo.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#4EB946',
			obligatory: false
		},
		'AP735': {
			code: 'AP735',
			name: 'Projeto Experimental em Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA460'],
			color: '#6CB946',
			obligatory: false
		},
		'AP737': {
			code: 'AP737',
			name: 'Projeto Experimental em Abordagens Teóricas das Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto de pesquisa do(a) aluno(a) visando o desenvolvimento de trabalhos teóricos que articulem das teorias estudadas para a compreensão de algum aspecto da arte. Esse trabalho também deve mobilizar as competências de pesquisa desenvolvidas nas disciplinas anteriores.Aprofundamento das questões históricas, estéticas e técnicas, dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção teórica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA460'],
			color: '#B946B9',
			obligatory: false
		},
		'AP745': {
			code: 'AP745',
			name: 'Escultura IV',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos escultóricos encaminhado a reflexão para o estudo da produção escultórica contemporânea brasileira.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#4E46B9',
			obligatory: false
		},
		'AP749': {
			code: 'AP749',
			name: 'Desenho de Propaganda III',
			ementa: 'História em quadrinhos e sua utilização como veículo publicitário.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#9A46B9',
			obligatory: false
		},
		'AP760': {
			code: 'AP760',
			name: 'Computação Gráfica e Multimídia',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos tecnológicos encaminhando a reflexão para o uso da tecnologia na arte contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#83B946',
			obligatory: false
		},
		'AP764': {
			code: 'AP764',
			name: 'Gravura IV',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos em Gravura I, II e III. Aprofundamento das questões históricas, estéticas e técnicas dos processos gráficos, encaminhando a reflexão para a gravura contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AP620'],
			color: '#B94E46',
			obligatory: false
		},
		'AP799': {
			code: 'AP799',
			name: 'Atividades Artísticas - Culturais - Ensino VII',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#B9465D',
			obligatory: false
		},
		'AP801': {
			code: 'AP801',
			name: 'Tópicos Especiais em Processos Criativos II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#6546B9',
			obligatory: false
		},
		'AP810': {
			code: 'AP810',
			name: 'Tópicos Especiais em Processos Criativos VIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B9A2',
			obligatory: false
		},
		'AP814': {
			code: 'AP814',
			name: 'Tópicos Especiais em Processos Criativos IX',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B96C46',
			obligatory: false
		},
		'AP836': {
			code: 'AP836',
			name: 'Projeto Experimental em Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200', 'AP735'],
			color: '#6CB946',
			obligatory: false
		},
		'AP838': {
			code: 'AP838',
			name: 'Projeto Experimental em Abordagens Teóricas das Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto de pesquisa do(a) aluno(a) visando o desenvolvimento de trabalhos teóricos que articulem das teorias estudadas para a compreensão de algum aspecto da arte. Esse trabalho também deve mobilizar as competências de pesquisa desenvolvidas nas disciplinas anteriores.Aprofundamento das questões históricas, estéticas e técnicas, dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção teórica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200', 'AP737'],
			color: '#B946B9',
			obligatory: false
		},
		'AP895': {
			code: 'AP895',
			name: 'Tópicos Especiais em Processos Criativos XII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#5546B9',
			obligatory: false
		},
		'AP896': {
			code: 'AP896',
			name: 'Tópicos Especiais em Processos Criativos XIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8346B9',
			obligatory: false
		},
		'AP897': {
			code: 'AP897',
			name: 'Tópicos Especiais em Processos Criativos XIV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#467CB9',
			obligatory: false
		},
		'AP898': {
			code: 'AP898',
			name: 'Tópicos Especiais em Processos Criativos XV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B99346',
			obligatory: false
		},
		'AP899': {
			code: 'AP899',
			name: 'Atividades Artísticas - Culturais - Ensino VIII',
			ementa: 'Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliers, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#74B946',
			obligatory: false
		},
		'AP901': {
			code: 'AP901',
			name: 'Tópicos Especiais em Processos Criativos X',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B95D46',
			obligatory: false
		},
		'AP910': {
			code: 'AP910',
			name: 'Tópicos Especiais em Processos Criativos XI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9466C',
			obligatory: false
		},
		'AP931': {
			code: 'AP931',
			name: 'Tópicos Especiais em Teorias das Artes I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B9AA',
			obligatory: false
		},
		'AP932': {
			code: 'AP932',
			name: 'Tópicos Especiais em Teorias das Artes II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94655',
			obligatory: false
		},
		'AP933': {
			code: 'AP933',
			name: 'Tópicos Especiais em Teorias das Artes III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4693B9',
			obligatory: false
		},
		'AP934': {
			code: 'AP934',
			name: 'Tópicos Especiais em Teorias das Artes IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#6C46B9',
			obligatory: false
		},
		'AP935': {
			code: 'AP935',
			name: 'Tópicos Especiais em Teorias da Artes V',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B946A2',
			obligatory: false
		},
		'AP936': {
			code: 'AP936',
			name: 'Tópicos Especiais em Teorias das Artes VI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4674B9',
			obligatory: false
		},
		'AP937': {
			code: 'AP937',
			name: 'Tópicos Especiais em Teorias das Artes VII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94665',
			obligatory: false
		},
		'AP938': {
			code: 'AP938',
			name: 'Tópicos Especiais em Teorias das Artes VIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em Curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B96546',
			obligatory: false
		},
		'AP939': {
			code: 'AP939',
			name: 'Tópicos Especiais em Teorias das Artes IX',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B97446',
			obligatory: false
		},
		'AP940': {
			code: 'AP940',
			name: 'Tópicos Especiais em Teorias das Artes X',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B983',
			obligatory: false
		},
		'AP941': {
			code: 'AP941',
			name: 'Tópicos Especiais em Teorias das Artes XI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#AAB946',
			obligatory: false
		},
		'AP975': {
			code: 'AP975',
			name: 'Tópicos Especiais em Ensino de Artes Visuais I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B955',
			obligatory: false
		},
		'AP976': {
			code: 'AP976',
			name: 'Tópicos Especiais em Ensino de Artes Visuais II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B993',
			obligatory: false
		},
		'AP977': {
			code: 'AP977',
			name: 'Tópicos Especiais em Ensino de Artes Visuais III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8BB946',
			obligatory: false
		},
		'AP978': {
			code: 'AP978',
			name: 'Tópicos Especiais em Ensino de Artes Visuais IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#46B94E',
			obligatory: false
		},
		'AP981': {
			code: 'AP981',
			name: 'Preservação e Restauro I: Fundamentos e Conceitos',
			ementa: 'Serão apresentadas as principais teorias e referências conceituais da área de preservação e restauro, enquanto disciplina, enfatizando sua vinculação com os artefatos de natureza visual.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: '',
			color: '#46B965',
			obligatory: false
		},
		'AP982': {
			code: 'AP982',
			name: 'Tópicos Especiais em Preservação e Restauro I: Análise de Experiências',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['AA200'],
			color: '#7CB946',
			obligatory: false
		},
		'AP983': {
			code: 'AP983',
			name: 'Tópicos Especiais em Preservação e Restauro II: Técnicas e Métodos',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['AA200'],
			color: '#46AAB9',
			obligatory: false
		},
		'AP991': {
			code: 'AP991',
			name: 'Design I: Princípios de Projeto em Programação Visual',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Áreas de atuação em programação visual. Método clássico de desenvolvimento de projetos de design aplicado à programação visual. Programas de identidade visual. Ergonomia da informação. Semântica do design gráfico. Ética do design gráfico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B98346',
			obligatory: false
		},
		'AP992': {
			code: 'AP992',
			name: 'Design II: Princípios de Tipografia',
			ementa: 'História da escrita ocidental, do alfabeto romano e da tipografia. Classificação das famílias de letras do alfabeto romano. Nomenclatura simplificada de letras. Fontes mais utilizadas por comunicadores visuais. Principais tipógrafos do Século XX. Tipografia digital. Visibilidade, legibilidade e inteligibilidade. Diagramação e paginação. Malhas e proporções clássicas. Implicações técnicas e estéticas relacionadas ao desenho de letras e as composições tipográficas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B98B46',
			obligatory: false
		},
		'AP993': {
			code: 'AP993',
			name: 'Design III: Princípios de Projeto em Projeto de Produto',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Áreas de atuação em projeto de produto. Método clássico de desenvolvimento de projetos de design aplicado ao projeto de produto. Ergonomia do produto. Semântica do produto. Ética do design de produto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9468B',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B99A',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4683B9',
			obligatory: false
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir os(as) alunos(as) às diferentes linguagens corporais e/ou artísticas em suas relações com o processo educacional.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B974',
			obligatory: false
		},
		'ML---': {
			code: 'ML---',
			name: 'Qualquer Disciplina com codigo ML---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ML---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46A2B9',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4646B9',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#A246B9',
			obligatory: false
		}
	}
};

export default catalogue;
