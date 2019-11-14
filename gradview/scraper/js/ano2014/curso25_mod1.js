const catalogue = {
	totalCredits: 186,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP100', 'AP103', 'AP104', 'AP110', 'AP198', 'AR101']
		},
		'sem-2': {
			id: '2',
			subjects: ['AP200', 'AP203', 'AP204', 'AP210', 'AP298', 'AP415']
		},
		'sem-3': {
			id: '3',
			subjects: ['AP303', 'AP304', 'AP398', 'AP515', 'ELET8']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP403', 'AP404', 'AP498', 'AP520', 'AP615']
		},
		'sem-5': {
			id: '5',
			subjects: ['AP518', 'AP598', 'AP620', 'ELET10']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP600', 'AP618', 'AP625', 'AP724', 'ELET10']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP725', 'AP735']
		},
		'sem-8': {
			id: '8',
			subjects: ['AP836', 'ELET8']
		}
	},

	subjects: {
		'AP100': {
			code: 'AP100',
			name: 'Práticas de Oficina I',
			ementa: 'Estudo do desenvolvimento das técnicas, materiais e equipamentos, considerando sua utilização nas práticas e procedimentos artísticos, visando a produção de uma poética visual.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP103': {
			code: 'AP103',
			name: 'Pintura I',
			ementa: 'Fundamentos da linguagem pictórica: relação entre o desenho e a pintura. Introdução ao conhecimento de técnicas, materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP104': {
			code: 'AP104',
			name: 'Desenho Artístico I',
			ementa: 'Fundamentos da linguagem visual. Desenvolvimento da observação, percepção e apreensão por meio do desenho. A representação: formas e estruturas básicas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP110': {
			code: 'AP110',
			name: 'Modelagem I',
			ementa: 'Modelagem e Moldagem em materiais diversos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP198': {
			code: 'AP198',
			name: 'História da Arte I',
			ementa: 'A disciplina terá como tema as manifestações artísticas do Renascimento, estabelecendo suas ligações e rupturas com a visualidade da Idade Média e examinando suas relações com a cultura clássica da Antiguidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AP200': {
			code: 'AP200',
			name: 'Práticas de Oficina II',
			ementa: 'Desenvolvimento da disciplina AP100.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP100']
		},
		'AP203': {
			code: 'AP203',
			name: 'Pintura II',
			ementa: 'Fundamentos da Linguagem pictórica: composição e relações cromáticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP103']
		},
		'AP204': {
			code: 'AP204',
			name: 'Desenho Artístico II',
			ementa: 'Fundamentos da linguagem visual. Instrumentalização técnica: materiais e suportes através da história do desenho. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico I.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104']
		},
		'AP210': {
			code: 'AP210',
			name: 'Modelagem II',
			ementa: 'Modelagem com recursos tecnológicos, enfatizando o uso de ferramentas, equipamentos e materiais do fazer artístico e da área educacional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP110']
		},
		'AP298': {
			code: 'AP298',
			name: 'História da Arte II',
			ementa: 'A disciplina terá como tema as manifestações artísticas dos Séculos XVII e primeira metade do XVIII na Europa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP198']
		},
		'AP415': {
			code: 'AP415',
			name: 'Escultura I',
			ementa: 'A escultura moderna inserida nas principais vertentes artísticas da primeira metade do Século XX; investigações decorrentes da ruptura com valores e procedimentos tradicionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP110']
		},
		'AP303': {
			code: 'AP303',
			name: 'Pintura III',
			ementa: 'Teorias da cor: aprofundamento e desenvolvimento dos estudos cromáticos considerando a pintura na história da arte e a pesquisa de novos materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP203']
		},
		'AP304': {
			code: 'AP304',
			name: 'Desenho Artístico III',
			ementa: 'Da observação à representação: os sistemas de representação dos primórdios da história da arte ao período moderno. O desenho como meio de conhecimento sensível. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico II.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204']
		},
		'AP398': {
			code: 'AP398',
			name: 'História da Arte III',
			ementa: 'A disciplina acompanhará e discutirá as transformações ocorridas na produção artística européia, desde o surgimento do neoclassicismo, seus desdobramentos na Academia, até o advento do Realismo no Século XIX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP298']
		},
		'AP515': {
			code: 'AP515',
			name: 'Escultura II',
			ementa: 'Novas proposições para o espaço escultórico: conceitos de apropriação, instalação e intervenção nos processos de produção e pensamento da escultura contemporânea.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP415']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'AP403': {
			code: 'AP403',
			name: 'Pintura IV',
			ementa: 'Tema e representação na pintura: desenvolvimento das questões abordadas na disciplina anterior.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP303']
		},
		'AP404': {
			code: 'AP404',
			name: 'Desenho Artístico IV',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual e seus sistemas de representação no período contemporâneo. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico III.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP304']
		},
		'AP498': {
			code: 'AP498',
			name: 'História da Arte IV',
			ementa: 'A disciplina acompanhará e discutirá as transformações ocorridas na produção artística européia, desde o surgimento de Manet até o desenvolvimento das vanguardas históricas no começo do Século XX.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP398']
		},
		'AP520': {
			code: 'AP520',
			name: 'Gravura I',
			ementa: 'Introdução à gravura em relevo. A xilografia como linguagem expressiva. História da gravura européia: séculos XV à XVIII, e Brasil. A gravura de madeira de fio e de topo, linoleogravura e variantes. Impressões diretas e simples: monotipias, carimbos e pochoir.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204']
		},
		'AP615': {
			code: 'AP615',
			name: 'Escultura III',
			ementa: 'Abordagens da escultura brasileira e sua inserção no panorama internacional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP515']
		},
		'AP518': {
			code: 'AP518',
			name: 'Cerâmica I',
			ementa: 'Histórico da cerâmica. Desenvolvimento técnico e seus processos criativos, instrumentos, equipamentos e materiais. Processo e uso de óxidos na cerâmica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP598': {
			code: 'AP598',
			name: 'História da Arte V',
			ementa: 'A disciplina abordará a produção artística européia correspondente ao período que se estende do Pós-Segunda Guerra aos dias de hoje.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AP498']
		},
		'AP620': {
			code: 'AP620',
			name: 'Gravura II',
			ementa: 'Introdução à gravura em encavo: calcografia ou gravura em metal. História da gravura em metal. Procedimentos básicos: técnicas de gravação diretas e indiretas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP520']
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:10, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: ''
		},
		'AP600': {
			code: 'AP600',
			name: 'Metodologia de Pesquisa em Artes Visuais',
			ementa: 'Referenciais teóricos e metodológicos básicos para a realização de pesquisas no campo das artes visuais. Exercícios de elaboração de projetos, levantameno e organização de material empírico, elaboração de relatórios e redação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AP618': {
			code: 'AP618',
			name: 'Cerâmica II',
			ementa: 'Conhecimentos artesanais da cerâmica. Uso do forno. O engobe, os esmaltes vitrificáveis e outras. Suas propriedades. Processo de criação e consideração geral sobre os seus aspectos sociais. Processos de expressão. Aplicações artesanais e industriais. O torno e sua função.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP518']
		},
		'AP625': {
			code: 'AP625',
			name: 'História da Arte Brasileira I',
			ementa: 'A disciplina terá como conteúdo as manifestações artísticas do período da Colônia e do Império no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'AP724': {
			code: 'AP724',
			name: 'Gravura III',
			ementa: 'Introdução à gravura planográfica: história da gravura planográfica, séculos XIX e XX; Introdução à gravura contemporânea. Procedimentos básicos: técnicas de gravação e impressão em litografia e serigrafia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP620']
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:10, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: ''
		},
		'AP725': {
			code: 'AP725',
			name: 'História da Arte Brasileira II',
			ementa: 'Arte brasileira no século XX. As realizações da Semana de Arte Moderna e o Movimento Modernista. Arte e identidade nacional. Os desdobramentos do modernismo nos anos 30 e 40. As Bienais de São Paulo. A arte concreta e neo-concreta. O abstracionismo informal no Brasil. A &quot;pop-art&quot; brasileira. Novas tendências. Arte contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'AP735': {
			code: 'AP735',
			name: 'Projeto Experimental em Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200']
		},
		'AP836': {
			code: 'AP836',
			name: 'Projeto Experimental em Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;