const catalogue = {
	totalCredits: 193,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP100', 'AP103', 'AP104', 'AP110', 'AP198', 'AR101']
		},
		'sem-2': {
			id: '2',
			subjects: ['AP203', 'AP204', 'AP298', 'AP415']
		},
		'sem-3': {
			id: '3',
			subjects: ['AP301', 'AP303', 'AP304', 'AP313', 'AP398', 'AP515', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP403', 'AP404', 'AP413', 'AP498', 'AP520', 'AP615']
		},
		'sem-5': {
			id: '5',
			subjects: ['AP518', 'AP598', 'AP620', 'AP709', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP600', 'AP618', 'AP625', 'AP724', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP725', 'AP735']
		},
		'sem-8': {
			id: '8',
			subjects: ['AP836', 'ELET08']
		}
	},

	subjects: {
		'AP100': {
			code: 'AP100',
			name: 'Práticas de Oficina I',
			ementa: 'Estudo do desenvolvimento das técnicas, materiais e equipamentos próprios de ateliês artísticos e ou oficinas de madeira, visando a produção de uma poética visual.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B7'
		},
		'AP103': {
			code: 'AP103',
			name: 'Pintura I',
			ementa: 'Fundamentos da linguagem pictórica: relação entre o Desenho e a Pintura. Introdução ao conhecimento de técnicas, materiais e suportes. Estudo das formas de representação da imagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#409DD9'
		},
		'AP104': {
			code: 'AP104',
			name: 'Desenho Artístico I',
			ementa: 'Fundamentos da linguagem visual. Desenvolvimento da observação, percepção e apreensão por meio do desenho. A representação: formas e estruturas básicas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#5AD940'
		},
		'AP110': {
			code: 'AP110',
			name: 'Modelagem I',
			ementa: 'Modelagem e Moldagem em materiais diversos. Aplicação de escala para o projeto artístico. Elaboração de modelos maquetes em materiais diversos. Apresentação e elaboração de seminários e pesquisas de campo referentes ao universo próprio da criação artística.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'AP198': {
			code: 'AP198',
			name: 'História da Arte I',
			ementa: 'A disciplina terá como tema as manifestações artísticas do Renascimento, estabelecendo suas ligações e rupturas com a visualidade da Idade Média e examinando suas relações com a cultura clássica da Antiguidade. Estudos teóricos de textos fundamentais para esse campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#AAD940'
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Compreensão da História e dos desdobramentos sócio-filosóficos das ideias pedagógicas ao longo do tempo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D975'
		},
		'AP203': {
			code: 'AP203',
			name: 'Pintura II',
			ementa: 'Fundamentos da linguagem pictórica: composição e relações cromáticas. Estudo das formas de representação da imagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP103'],
			color: ''
		},
		'AP204': {
			code: 'AP204',
			name: 'Desenho Artístico II',
			ementa: 'Fundamentos da linguagem visual. Instrumentalização técnica: materiais e suportes através da história do desenho. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico I.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104'],
			color: ''
		},
		'AP298': {
			code: 'AP298',
			name: 'História da Arte II',
			ementa: 'A disciplina terá como tema as manifestações artísticas dos Séculos XVII e primeira metade do XVIII na Europa. Compreende o estudo teórico de textos fundamentais para este campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#5A40D9'
		},
		'AP415': {
			code: 'AP415',
			name: 'Escultura I',
			ementa: 'A escultura moderna inserida nas principais vertentes artísticas da primeira metade do Século XX; investigações decorrentes da ruptura com valores e procedimentos tradicionais;compreensão do espaço, escala, construção do objeto artístico em relação ao ambiente e materiais. das escalas, lugares e materiais para a escultura. O objeto artístico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4075D9'
		},
		'AP301': {
			code: 'AP301',
			name: 'Elementos da Prática de Pesquisa',
			ementa: 'A investigação científica: lógica, linguagem e método. Estruturas formais e funcionais do discurso científico de distintos tipos de Pesquisa voltados para o grande campo das Artes e Humanidades. Subsídios para a leitura, produção e interpretação de textos científicos. O projeto de pesquisa: a pergunta condutora, a delimitação do problema, a hipótese, os objetivos, o embasamento teórico, metodológico e empírico. A investigação científica como prática social.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D94090'
		},
		'AP303': {
			code: 'AP303',
			name: 'Pintura III',
			ementa: 'Teorias da cor: aprofundamento e desenvolvimento dos estudos cromáticos considerando a pintura na História da Arte e a pesquisa de novos materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP203'],
			color: ''
		},
		'AP304': {
			code: 'AP304',
			name: 'Desenho Artístico III',
			ementa: 'Da observação à representação: os sistemas de representação dos primórdios da história da arte ao período moderno. O desenho como meio de conhecimento sensível. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico II.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: ''
		},
		'AP313': {
			code: 'AP313',
			name: 'Arte Fotográfica I',
			ementa: 'Introdução à Fotografia: Técnica e Equipamentos entre os processos Analógico e Digital. Expressividade e Gêneros Fotográficos. A imagem fotográfica e as Artes Visuais. Experimentações práticas e conceituações teóricas.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D94D'
		},
		'AP398': {
			code: 'AP398',
			name: 'História da Arte III',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, desde o surgimento do Neoclassicismo, seus desdobramentos na Academia, até o advento do Realismo no Século XIX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#40C5D9'
		},
		'AP515': {
			code: 'AP515',
			name: 'Escultura II',
			ementa: 'Novas proposições para o espaço escultórico: conceitos de apropriação, instalação e intervenção nos processos de produção e pensamento da escultura contemporânea. Desdobramentos de pesquisa em seminários e visitas técnicas orientadoras do campo expandido da escultura.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#AA40D9'
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'AP403': {
			code: 'AP403',
			name: 'Pintura IV',
			ementa: 'Teorias da Cor: uso criativo da cor aplicada sobretudo ao estudo das relações cromáticas a partir das principais teorias Modernas. Tema e Representação na Pintura. Desenvolvimento do pensamento temático e criativo aplicado de forma a estimular sua viabilização por meio de exercícios práticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP303'],
			color: ''
		},
		'AP404': {
			code: 'AP404',
			name: 'Desenho Artístico IV',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual e seus sistemas de representação no período contemporâneo. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico III.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP304'],
			color: ''
		},
		'AP413': {
			code: 'AP413',
			name: 'Arte Fotográfica II',
			ementa: 'Desenvolvimento de Projetos poéticos em Fotografia. Produção de portifólio, ensaios fotográficos em diferentes gêneros, formatos e suportes. Panorama das principais Escolas Fotográficas e seus representantes.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#404DD9'
		},
		'AP498': {
			code: 'AP498',
			name: 'História da Arte IV',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, a partir da produção apresentada por Manet até o desenvolvimento das vanguardas históricas no começo do Século XX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#82D940'
		},
		'AP520': {
			code: 'AP520',
			name: 'Gravura I',
			ementa: 'Introdução à gravura em relevo. A xilografia como linguagem expressiva. História da gravura européia: séculos XV à XVIII, e Brasil. A gravura de madeira de fio e de topo, linoleogravura e variantes. Impressões diretas e simples: monotipias, carimbos e pochoir.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: ''
		},
		'AP615': {
			code: 'AP615',
			name: 'Escultura III',
			ementa: 'Abordagens sobre a constituição e relações próprias do pensamento artístico tridimensional na atualidade. Novas estratégias critico-criativas e proposições da arte pública e urbana contemporâneas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D99D'
		},
		'AP518': {
			code: 'AP518',
			name: 'Cerâmica I',
			ementa: 'Histórico da cerâmica. Desenvolvimento técnico e seus processos criativos, instrumentos, equipamentos e materiais. Processo e uso de óxidos na cerâmica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8240D9'
		},
		'AP598': {
			code: 'AP598',
			name: 'História da Arte V',
			ementa: 'A disciplina aborda a produção artística europeia correspondente ao período que se estende do Pós-Segunda Guerra aos dias de hoje. É permeada pelo exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#D240D9'
		},
		'AP620': {
			code: 'AP620',
			name: 'Gravura II',
			ementa: 'Introdução à gravura em encavo: calcografia ou gravura em metal. História da gravura em metal. Procedimentos básicos: técnicas de gravação diretas e indiretas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP520'],
			color: ''
		},
		'AP709': {
			code: 'AP709',
			name: 'Arte e Novos Meios I',
			ementa: 'A disciplina propõe apresentar e discutir as linguagens tecnológicas enfocando a criação digital para construção da pesquisa artística: a imagem eletrônica videobjetos, videoinstalações e outros, ambientes interativos e imersivos. Ferramentas de tecnologia e Comunicação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D96840'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'AP600': {
			code: 'AP600',
			name: 'Metodologia de Pesquisa em Artes Visuais',
			ementa: 'Referenciais teóricos e metodológicos básicos para a realização de pesquisas no campo das artes visuais. Exercícios de elaboração de projetos, levantamento e organização de material empírico, elaboração de relatórios e redação visando ampliar o conhecimento sobre a língua portuguesa orientada para o discurso próprio do artista visual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D94068'
		},
		'AP618': {
			code: 'AP618',
			name: 'Cerâmica II',
			ementa: 'Conhecimentos artesanais da cerâmica. Uso do forno. O engobe, os esmaltes vitrificáveis e outras. Suas propriedades. Processo de criação e consideração geral sobre os seus aspectos sociais. Processos de expressão. Aplicações artesanais e industriais. O torno e sua função.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP518'],
			color: ''
		},
		'AP625': {
			code: 'AP625',
			name: 'História da Arte Brasileira I',
			ementa: 'A disciplina tem como conteúdo as manifestações artísticas do período da Colônia e do Império no Brasil. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D2D940'
		},
		'AP724': {
			code: 'AP724',
			name: 'Gravura III',
			ementa: 'Introdução à gravura planográfica: história da gravura planográfica, séculos XIX e XX; Introdução à gravura contemporânea. Procedimentos básicos: técnicas de gravação e impressão em litografia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP620'],
			color: ''
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'AP725': {
			code: 'AP725',
			name: 'História da Arte Brasileira II',
			ementa: 'Arte brasileira no século XX. As realizações da Semana de Arte Moderna e o Movimento Modernista. Arte e identidade nacional. Os desdobramentos do modernismo nos anos 30 e 40. As Bienais de São Paulo. A arte concreta e neoconcreta. O abstracionismo informal no Brasil. A \"pop-art\" brasileira. Novas tendências. Arte contemporânea. Desenvolve o exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D99040'
		},
		'AP735': {
			code: 'AP735',
			name: 'Projeto Experimental em Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto poético do aluno, visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística e do campo da arte educação, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas, técnicas e da docência presentes nos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA470', 'AP600'],
			color: '#40D9C5'
		},
		'AP836': {
			code: 'AP836',
			name: 'Projeto Experimental em Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200', 'AA470', 'AP735'],
			color: '#D9B740'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
