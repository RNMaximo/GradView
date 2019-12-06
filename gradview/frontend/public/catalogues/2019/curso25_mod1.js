const catalogue = {
	totalCredits: 193,
	maxCreditsSem: 39,
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
			subjects: ['AP600', 'AP618', 'AP625', 'AP773', 'ELET06']
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

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 20,
			hasRestrictions: true,
			subjects: ['AP106', 'AP140', 'AP206', 'AP240', 'AP308', 'AP309', 'AP340', 'AP401', 'AP402', 'AP409', 'AP412', 'AP417', 'AP440', 'AP501', 'AP502', 'AP503', 'AP504', 'AP509', 'AP510', 'AP512', 'AP601', 'AP602', 'AP603', 'AP604', 'AP609', 'AP610', 'AP612', 'AP614', 'AP617', 'AP632', 'AP701', 'AP710', 'AP714', 'AP717', 'AP718', 'AP724', 'AP732', 'AP733', 'AP734', 'AP745', 'AP760', 'AP764', 'AP801', 'AP810', 'AP812', 'AP814', 'AP863', 'AP895', 'AP896', 'AP897', 'AP898', 'AP901', 'AP910', 'AP912', 'AP917', 'AP931', 'AP932', 'AP933', 'AP934', 'AP935', 'AP936', 'AP937', 'AP938', 'AP939', 'AP940', 'AP941', 'AP975', 'AP976', 'AP977', 'AP978', 'AP981', 'AP982', 'AP983', 'AP991', 'AP992', 'AP993', 'EP158'],
		},
		'elet-3': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AR---', 'CS---', 'ML---', 'MP---', 'MU---'],
		},
	},

	subjects: {
		'AP100': {
			code: 'AP100',
			name: 'Práticas de Oficina I',
			ementa: 'Estudo do desenvolvimento das técnicas, materiais e equipamentos próprios de ateliês artísticos e ou oficinas de madeira, visando a produção de uma poética visual.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94049',
			obligatory: true
		},
		'AP103': {
			code: 'AP103',
			name: 'Pintura I',
			ementa: 'Fundamentos da linguagem pictórica: relação entre o Desenho e a Pintura. Introdução ao conhecimento de técnicas, materiais e suportes. Estudo das formas de representação da imagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D940C9',
			obligatory: true
		},
		'AP104': {
			code: 'AP104',
			name: 'Desenho Artístico I',
			ementa: 'Fundamentos da linguagem visual. Desenvolvimento da observação, percepção e apreensão por meio do desenho. A representação: formas e estruturas básicas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D94080',
			obligatory: true
		},
		'AP110': {
			code: 'AP110',
			name: 'Modelagem I',
			ementa: 'Modelagem e Moldagem em materiais diversos. Aplicação de escala para o projeto artístico. Elaboração de modelos maquetes em materiais diversos. Apresentação e elaboração de seminários e pesquisas de campo referentes ao universo próprio da criação artística.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4086D9',
			obligatory: true
		},
		'AP198': {
			code: 'AP198',
			name: 'História da Arte I',
			ementa: 'A disciplina terá como tema as manifestações artísticas do Renascimento, estabelecendo suas ligações e rupturas com a visualidade da Idade Média e examinando suas relações com a cultura clássica da Antiguidade. Estudos teóricos de textos fundamentais para esse campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40A2D9',
			obligatory: true
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Atualização dos saberes pré-adquiridos sobre a temática da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'AP203': {
			code: 'AP203',
			name: 'Pintura II',
			ementa: 'Fundamentos da linguagem pictórica: composição e relações cromáticas. Estudo das formas de representação da imagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP103'],
			color: '#D940C9',
			obligatory: true
		},
		'AP204': {
			code: 'AP204',
			name: 'Desenho Artístico II',
			ementa: 'Fundamentos da linguagem visual. Instrumentalização técnica: materiais e suportes através da história do desenho. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico I.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104'],
			color: '#D94080',
			obligatory: true
		},
		'AP298': {
			code: 'AP298',
			name: 'História da Arte II',
			ementa: 'A disciplina terá como tema as manifestações artísticas dos Séculos XVII e primeira metade do XVIII na Europa. Compreende o estudo teórico de textos fundamentais para este campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#4098D9',
			obligatory: true
		},
		'AP415': {
			code: 'AP415',
			name: 'Escultura I',
			ementa: 'A escultura moderna inserida nas principais vertentes artísticas da primeira metade do Século XX; investigações decorrentes da ruptura com valores e procedimentos tradicionais;compreensão do espaço, escala, construção do objeto artístico em relação ao ambiente e materiais. das escalas, lugares e materiais para a escultura. O objeto artístico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D974',
			obligatory: true
		},
		'AP301': {
			code: 'AP301',
			name: 'Elementos da Prática de Pesquisa',
			ementa: 'A investigação científica: lógica, linguagem e método. Estruturas formais e funcionais do discurso científico de distintos tipos de Pesquisa voltados para o grande campo das Artes e Humanidades. Subsídios para a leitura, produção e interpretação de textos científicos. O projeto de pesquisa: a pergunta condutora, a delimitação do problema, a hipótese, os objetivos, o embasamento teórico, metodológico e empírico. A investigação científica como prática social.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D9C040',
			obligatory: true
		},
		'AP303': {
			code: 'AP303',
			name: 'Pintura III',
			ementa: 'Teorias da cor: aprofundamento e desenvolvimento dos estudos cromáticos considerando a pintura na História da Arte e a pesquisa de novos materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP203'],
			color: '#D940C9',
			obligatory: true
		},
		'AP304': {
			code: 'AP304',
			name: 'Desenho Artístico III',
			ementa: 'Da observação à representação: os sistemas de representação dos primórdios da história da arte ao período moderno. O desenho como meio de conhecimento sensível. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico II.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: '#D94080',
			obligatory: true
		},
		'AP313': {
			code: 'AP313',
			name: 'Arte Fotográfica I',
			ementa: 'Introdução à Fotografia: Técnica e Equipamentos entre os processos Analógico e Digital. Expressividade e Gêneros Fotográficos. A imagem fotográfica e as Artes Visuais. Experimentações práticas e conceituações teóricas.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#43D940',
			obligatory: true
		},
		'AP398': {
			code: 'AP398',
			name: 'História da Arte III',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, desde o surgimento do Neoclassicismo, seus desdobramentos na Academia, até o advento do Realismo no Século XIX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D96440',
			obligatory: true
		},
		'AP515': {
			code: 'AP515',
			name: 'Escultura II',
			ementa: 'Novas proposições para o espaço escultórico: conceitos de apropriação, instalação e intervenção nos processos de produção e pensamento da escultura contemporânea. Desdobramentos de pesquisa em seminários e visitas técnicas orientadoras do campo expandido da escultura.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4340D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AP403': {
			code: 'AP403',
			name: 'Pintura IV',
			ementa: 'Teorias da Cor: uso criativo da cor aplicada sobretudo ao estudo das relações cromáticas a partir das principais teorias Modernas. Tema e Representação na Pintura. Desenvolvimento do pensamento temático e criativo aplicado de forma a estimular sua viabilização por meio de exercícios práticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP303'],
			color: '#D940C9',
			obligatory: true
		},
		'AP404': {
			code: 'AP404',
			name: 'Desenho Artístico IV',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual e seus sistemas de representação no período contemporâneo. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico III.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP304'],
			color: '#D94080',
			obligatory: true
		},
		'AP413': {
			code: 'AP413',
			name: 'Arte Fotográfica II',
			ementa: 'Desenvolvimento de Projetos poéticos em Fotografia. Produção de portifólio, ensaios fotográficos em diferentes gêneros, formatos e suportes. Panorama das principais Escolas Fotográficas e seus representantes.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#D94052',
			obligatory: true
		},
		'AP498': {
			code: 'AP498',
			name: 'História da Arte IV',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, a partir da produção apresentada por Manet até o desenvolvimento das vanguardas históricas no começo do Século XX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D940AE',
			obligatory: true
		},
		'AP520': {
			code: 'AP520',
			name: 'Gravura I',
			ementa: 'Introdução à gravura em relevo. A xilografia como linguagem expressiva. História da gravura européia: séculos XV à XVIII, e Brasil. A gravura de madeira de fio e de topo, linoleogravura e variantes. Impressões diretas e simples: monotipias, carimbos e pochoir.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: '#D94080',
			obligatory: true
		},
		'AP615': {
			code: 'AP615',
			name: 'Escultura III',
			ementa: 'Abordagens sobre a constituição e relações próprias do pensamento artístico tridimensional na atualidade. Novas estratégias critico-criativas e proposições da arte pública e urbana contemporâneas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40B4D9',
			obligatory: true
		},
		'AP518': {
			code: 'AP518',
			name: 'Cerâmica I',
			ementa: 'Histórico da cerâmica. Desenvolvimento técnico e seus processos criativos, instrumentos, equipamentos e materiais. Processo e uso de óxidos na cerâmica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D96E40',
			obligatory: true
		},
		'AP598': {
			code: 'AP598',
			name: 'História da Arte V',
			ementa: 'A disciplina aborda a produção artística europeia correspondente ao período que se estende do Pós-Segunda Guerra aos dias de hoje. É permeada pelo exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#D94940',
			obligatory: true
		},
		'AP620': {
			code: 'AP620',
			name: 'Gravura II',
			ementa: 'Introdução à gravura em encavo: calcografia ou gravura em metal. História da gravura em metal. Procedimentos básicos: técnicas de gravação diretas e indiretas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP520'],
			color: '#D94080',
			obligatory: true
		},
		'AP709': {
			code: 'AP709',
			name: 'Arte e Novos Meios I',
			ementa: 'A disciplina propõe apresentar e discutir as linguagens tecnológicas enfocando a criação digital para construção da pesquisa artística: a imagem eletrônica videobjetos, videoinstalações e outros, ambientes interativos e imersivos. Ferramentas de tecnologia e Comunicação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4061D9',
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
			ementa: 'Referenciais teóricos e metodológicos básicos para a realização de pesquisas no campo das artes visuais. Exercícios de elaboração de projetos, levantamento e organização de material empírico, elaboração de relatórios e redação visando ampliar o conhecimento sobre a língua portuguesa orientada para o discurso próprio do artista visual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#40D986',
			obligatory: true
		},
		'AP618': {
			code: 'AP618',
			name: 'Cerâmica II',
			ementa: 'Conhecimentos artesanais da cerâmica. Uso do forno. O engobe, os esmaltes vitrificáveis e outras. Suas propriedades. Processo de criação e consideração geral sobre os seus aspectos sociais. Processos de expressão. Aplicações artesanais e industriais. O torno e sua função.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP518'],
			color: '#D96E40',
			obligatory: true
		},
		'AP625': {
			code: 'AP625',
			name: 'História da Arte Brasileira I',
			ementa: 'A disciplina tem como conteúdo as manifestações artísticas do período da Colônia e do Império no Brasil. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D9409C',
			obligatory: true
		},
		'AP773': {
			code: 'AP773',
			name: 'Serigrafia',
			ementa: 'Introdução à serigrafia: história da gravura vazada, século XX; Introdução à serigrafia contemporânea. Procedimentos básicos: técnicas de gravação e impressão em serigrafia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104'],
			color: '#D94080',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AP725': {
			code: 'AP725',
			name: 'História da Arte Brasileira II',
			ementa: 'Arte brasileira no século XX. As realizações da Semana de Arte Moderna e o Movimento Modernista. Arte e identidade nacional. Os desdobramentos do modernismo nos anos 30 e 40. As Bienais de São Paulo. A arte concreta e neoconcreta. O abstracionismo informal no Brasil. A \"pop-art\" brasileira. Novas tendências. Arte contemporânea. Desenvolve o exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D9B740',
			obligatory: true
		},
		'AP735': {
			code: 'AP735',
			name: 'Projeto Experimental em Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto poético do aluno, visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística e do campo da arte educação, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas, técnicas e da docência presentes nos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA470', 'AP600'],
			color: '#40D986',
			obligatory: true
		},
		'AP836': {
			code: 'AP836',
			name: 'Projeto Experimental em Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200', 'AA470', 'AP735'],
			color: '#40D986',
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
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D96B',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9D0',
			obligatory: false
		},
		'AP106': {
			code: 'AP106',
			name: 'Plástica I',
			ementa: 'Conceituação plástica no espaço bi e tridimensional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4046D9',
			obligatory: false
		},
		'AP140': {
			code: 'AP140',
			name: 'Ateliê Experimental Multidisciplinar I',
			ementa: 'A disciplina tem como objetivo estimular a vivência e a troca de experiências em ateliê coletivo estruturando-se a partir da investigação em linguagens contemporâneas pautadas pelo corpo e suas combinações com tecnologias e plataformas midiáticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D9A2',
			obligatory: false
		},
		'AP206': {
			code: 'AP206',
			name: 'Plástica II',
			ementa: 'A forma e sua dinâmica no espaço. Suportes e técnicas construtivas de investigação plástica na tridimensionalidade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP106'],
			color: '#4046D9',
			obligatory: false
		},
		'AP240': {
			code: 'AP240',
			name: 'Ateliê Experimental Multidisciplinar II',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP140.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D97740',
			obligatory: false
		},
		'AP308': {
			code: 'AP308',
			name: 'Cultura Popular',
			ementa: 'A disciplina propõe apresentar e discutir as culturas popular e urbana e o folclore sob enfoque antropológico, estendendo-se para a aplicação na educação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D98940',
			obligatory: false
		},
		'AP309': {
			code: 'AP309',
			name: 'Iniciação Científica I',
			ementa: 'A ser definida a cada semestre em que for oferecida.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D9C6',
			obligatory: false
		},
		'AP340': {
			code: 'AP340',
			name: 'Ateliê Experimental Multidisciplinar III',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP240.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: false
		},
		'AP401': {
			code: 'AP401',
			name: 'Monitoria I',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#C3D940',
			obligatory: false
		},
		'AP402': {
			code: 'AP402',
			name: 'Tópicos Especiais em História da Arte',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99C40',
			obligatory: false
		},
		'AP409': {
			code: 'AP409',
			name: 'Iniciação Científica II',
			ementa: 'A ser definida a cada semestre em que for oferecida.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D95240',
			obligatory: false
		},
		'AP412': {
			code: 'AP412',
			name: 'Tópicos Especiais em História da Arte IV',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9FD940',
			obligatory: false
		},
		'AP417': {
			code: 'AP417',
			name: 'Tópicos Especiais em História da Arte V',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D6D940',
			obligatory: false
		},
		'AP440': {
			code: 'AP440',
			name: 'Ateliê Experimental Multidisciplinar IV',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP340.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D961',
			obligatory: false
		},
		'AP501': {
			code: 'AP501',
			name: 'Monitoria II',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4CD940',
			obligatory: false
		},
		'AP502': {
			code: 'AP502',
			name: 'Tópicos Especiais em História da Arte II',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9405B',
			obligatory: false
		},
		'AP503': {
			code: 'AP503',
			name: 'Pintura V',
			ementa: 'Assunto e abordagem na Pintura: desenvolvimento da poética relacionada à linguagem pessoal. Aprofundamento dos aspectos técnicos, estudo e pesquisa dos recursos de materiais e procedimentos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#CD40D9',
			obligatory: false
		},
		'AP504': {
			code: 'AP504',
			name: 'Desenho Artístico V',
			ementa: 'Da observação à construção: o desenho como instrumento de conhecimento sensível. A representação do espaço: introdução ao estudo das concepções espaciais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9F40D9',
			obligatory: false
		},
		'AP509': {
			code: 'AP509',
			name: 'Computação Gráfica I',
			ementa: 'Conceitos básicos de Computação Gráfica. Sistemas matriciais de produção de imagem. Os softwares matriciais e sua relação com as Artes Visuais. Principais Softwares, principais comandos. Desenvolvimento de projetos em Artes Visuais e em Arte/Educação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D940A5',
			obligatory: false
		},
		'AP510': {
			code: 'AP510',
			name: 'Tópicos Especiais em Processos Criativos III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#8340D9',
			obligatory: false
		},
		'AP512': {
			code: 'AP512',
			name: 'Tópicos Especiais em História da Arte VI',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9406E',
			obligatory: false
		},
		'AP601': {
			code: 'AP601',
			name: 'Monitoria III',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40ABD9',
			obligatory: false
		},
		'AP602': {
			code: 'AP602',
			name: 'Tópicos Especiais em História da Arte III',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9BD',
			obligatory: false
		},
		'AP603': {
			code: 'AP603',
			name: 'Pintura VI',
			ementa: 'Assunto e abordagem na pintura: aspectos conceituais do fazer artístico. Estudo e pesquisa das possibilidades da linguagem pictórica na contemporaneidade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7A40D9',
			obligatory: false
		},
		'AP604': {
			code: 'AP604',
			name: 'Desenho Artístico VI',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico V.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D958',
			obligatory: false
		},
		'AP609': {
			code: 'AP609',
			name: 'Computação Gráfica II',
			ementa: 'Conceitos básicos de computação gráfica. Sistemas vetoriais de produção de imagem. Os softwares vetoriais e sua relação com as Artes Visuais. Principais Softwares e comandos. Desenvolvimento de projetos em Artes Visuais e em Arte/Educação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D9AE40',
			obligatory: false
		},
		'AP610': {
			code: 'AP610',
			name: 'Tópicos Especiais em Processos Criativos IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#B1D940',
			obligatory: false
		},
		'AP612': {
			code: 'AP612',
			name: 'Tópicos Especiais em História da Arte VII',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99240',
			obligatory: false
		},
		'AP614': {
			code: 'AP614',
			name: 'Tópicos Especiais em Processos Criativos V',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#CDD940',
			obligatory: false
		},
		'AP617': {
			code: 'AP617',
			name: 'Tópicos Especiais em História da Arte VIII',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404FD9',
			obligatory: false
		},
		'AP632': {
			code: 'AP632',
			name: 'Desenho Animado I',
			ementa: 'Representação gráfica do movimento. Noções básicas sobre animação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4058D9',
			obligatory: false
		},
		'AP701': {
			code: 'AP701',
			name: 'Tópicos Especiais em Processos Criativos I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D9A540',
			obligatory: false
		},
		'AP710': {
			code: 'AP710',
			name: 'Tópicos Especiais em Processos Criativos VI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#408FD9',
			obligatory: false
		},
		'AP714': {
			code: 'AP714',
			name: 'Tópicos Especiais em Processos Criativos VII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D94092',
			obligatory: false
		},
		'AP717': {
			code: 'AP717',
			name: 'Tópicos Especiais em História da Arte IX',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D640D9',
			obligatory: false
		},
		'AP718': {
			code: 'AP718',
			name: 'Cerâmica III',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos em cerâmica I e II, associados a novas informações históricas e técnicas, encaminhando a reflexão para a cerâmica contemporânea.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AP618'],
			color: '#D96E40',
			obligatory: false
		},
		'AP724': {
			code: 'AP724',
			name: 'Gravura III',
			ementa: 'Introdução à gravura planográfica: história da gravura planográfica, séculos XIX e XX; Introdução à gravura contemporânea. Procedimentos básicos: técnicas de gravação e impressão em litografia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP620'],
			color: '#D94080',
			obligatory: false
		},
		'AP732': {
			code: 'AP732',
			name: 'Desenho Animado II',
			ementa: 'Desenho animado e outras técnicas de cinema de animação. Aborda os principais processos de produção de um desenho animado, desde a criação da ideia, planejamento da história, animação de desenhos, filmagem e revelação do material com o auxílio da computação gráfica.',
			semestre: 1,
			vector: {T:1, P:0, L:7, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['AP632'],
			color: '#4058D9',
			obligatory: false
		},
		'AP733': {
			code: 'AP733',
			name: 'Pintura VII',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos pictóricos encaminhando a reflexão para a pintura conteporânea.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#D9D340',
			obligatory: false
		},
		'AP734': {
			code: 'AP734',
			name: 'Desenho Artístico VII',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos gráficos encaminhando a reflexão para o desenho contemporâneo.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#BAD940',
			obligatory: false
		},
		'AP745': {
			code: 'AP745',
			name: 'Escultura IV',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos escultóricos voltados para a reflexão conceitual teórica e prática da produção escultórica contemporânea brasileira.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#7140D9',
			obligatory: false
		},
		'AP760': {
			code: 'AP760',
			name: 'Computação Gráfica e Multimídia',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos tecnológicos encaminhando a reflexão para o uso da tecnologia na arte contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#55D940',
			obligatory: false
		},
		'AP764': {
			code: 'AP764',
			name: 'Gravura IV',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos em Gravura I, II e III. Aprofundamento das questões históricas, estéticas e técnicas dos processos gráficos, encaminhando a reflexão para a gravura contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AP620'],
			color: '#D94080',
			obligatory: false
		},
		'AP801': {
			code: 'AP801',
			name: 'Tópicos Especiais em Processos Criativos II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#A8D940',
			obligatory: false
		},
		'AP810': {
			code: 'AP810',
			name: 'Tópicos Especiais em Processos Criativos VIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'AP812': {
			code: 'AP812',
			name: 'Tópicos Especiais em História da Arte X',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5540D9',
			obligatory: false
		},
		'AP814': {
			code: 'AP814',
			name: 'Tópicos Especiais em Processos Criativos IX',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4C40D9',
			obligatory: false
		},
		'AP863': {
			code: 'AP863',
			name: 'Pedagogia e Didática de Artes Visuais II',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicada ao ensino de Artes Visuais.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#D94064',
			obligatory: false
		},
		'AP895': {
			code: 'AP895',
			name: 'Tópicos Especiais em Processos Criativos XII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D940C0',
			obligatory: false
		},
		'AP896': {
			code: 'AP896',
			name: 'Tópicos Especiais em Processos Criativos XIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D946',
			obligatory: false
		},
		'AP897': {
			code: 'AP897',
			name: 'Tópicos Especiais em Processos Criativos XIV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#C340D9',
			obligatory: false
		},
		'AP898': {
			code: 'AP898',
			name: 'Tópicos Especiais em Processos Criativos XV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#5ED940',
			obligatory: false
		},
		'AP901': {
			code: 'AP901',
			name: 'Tópicos Especiais em Processos Criativos X',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#9540D9',
			obligatory: false
		},
		'AP910': {
			code: 'AP910',
			name: 'Tópicos Especiais em Processos Criativos XI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4074D9',
			obligatory: false
		},
		'AP912': {
			code: 'AP912',
			name: 'Tópicos Especiais em História da Arte XI',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#83D940',
			obligatory: false
		},
		'AP917': {
			code: 'AP917',
			name: 'Tópicos Especiais em História da Arte XII',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AB',
			obligatory: false
		},
		'AP931': {
			code: 'AP931',
			name: 'Tópicos Especiais em Teorias das Artes I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B140D9',
			obligatory: false
		},
		'AP932': {
			code: 'AP932',
			name: 'Tópicos Especiais em Teorias das Artes II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D98F',
			obligatory: false
		},
		'AP933': {
			code: 'AP933',
			name: 'Tópicos Especiais em Teorias das Artes III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D0D9',
			obligatory: false
		},
		'AP934': {
			code: 'AP934',
			name: 'Tópicos Especiais em Teorias das Artes IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D998',
			obligatory: false
		},
		'AP935': {
			code: 'AP935',
			name: 'Tópicos Especiais em Teorias da Artes V',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#5E40D9',
			obligatory: false
		},
		'AP936': {
			code: 'AP936',
			name: 'Tópicos Especiais em Teorias das Artes VI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D98040',
			obligatory: false
		},
		'AP937': {
			code: 'AP937',
			name: 'Tópicos Especiais em Teorias das Artes VII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D9B4',
			obligatory: false
		},
		'AP938': {
			code: 'AP938',
			name: 'Tópicos Especiais em Teorias das Artes VIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em Curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#6840D9',
			obligatory: false
		},
		'AP939': {
			code: 'AP939',
			name: 'Tópicos Especiais em Teorias das Artes IX',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40BDD9',
			obligatory: false
		},
		'AP940': {
			code: 'AP940',
			name: 'Tópicos Especiais em Teorias das Artes X',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#95D940',
			obligatory: false
		},
		'AP941': {
			code: 'AP941',
			name: 'Tópicos Especiais em Teorias das Artes XI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#68D940',
			obligatory: false
		},
		'AP975': {
			code: 'AP975',
			name: 'Tópicos Especiais em Ensino de Artes Visuais I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40C6D9',
			obligatory: false
		},
		'AP976': {
			code: 'AP976',
			name: 'Tópicos Especiais em Ensino de Artes Visuais II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D94089',
			obligatory: false
		},
		'AP977': {
			code: 'AP977',
			name: 'Tópicos Especiais em Ensino de Artes Visuais III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#406BD9',
			obligatory: false
		},
		'AP978': {
			code: 'AP978',
			name: 'Tópicos Especiais em Ensino de Artes Visuais IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D940B7',
			obligatory: false
		},
		'AP981': {
			code: 'AP981',
			name: 'Preservação e Restauro I: Fundamentos e Conceitos',
			ementa: 'Serão apresentadas as principais teorias e referências conceituais da área de preservação e restauro, enquanto disciplina, enfatizando sua vinculação com os artefatos de natureza visual.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: '',
			color: '#A840D9',
			obligatory: false
		},
		'AP982': {
			code: 'AP982',
			name: 'Tópicos Especiais em Preservação e Restauro I: Análise de Experiências',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['AA200'],
			color: '#D940D3',
			obligatory: false
		},
		'AP983': {
			code: 'AP983',
			name: 'Tópicos Especiais em Preservação e Restauro II: Técnicas e Métodos',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['AA200'],
			color: '#7AD940',
			obligatory: false
		},
		'AP991': {
			code: 'AP991',
			name: 'Design I: Princípios de Projeto em Programação Visual',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Áreas de atuação em programação visual. Método clássico de desenvolvimento de projetos de design aplicado à programação visual. Programas de identidade visual. Ergonomia da informação. Semântica do design gráfico. Ética do design gráfico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#407DD9',
			obligatory: false
		},
		'AP992': {
			code: 'AP992',
			name: 'Design II: Princípios de Tipografia',
			ementa: 'História da escrita ocidental, do alfabeto romano e da tipografia. Classificação das famílias de letras do alfabeto romano. Nomenclatura simplificada de letras. Fontes mais utilizadas por comunicadores visuais. Principais tipógrafos do Século XX. Tipografia digital. Visibilidade, legibilidade e inteligibilidade. Diagramação e paginação. Malhas e proporções clássicas. Implicações técnicas e estéticas relacionadas ao desenho de letras e as composições tipográficas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D97D',
			obligatory: false
		},
		'AP993': {
			code: 'AP993',
			name: 'Design III: Princípios de Projeto em Projeto de Produto',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Áreas de atuação em projeto de produto. Método clássico de desenvolvimento de projetos de design aplicado ao projeto de produto. Ergonomia do produto. Semântica do produto. Ética do design de produto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8C40D9',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D94F',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#BA40D9',
			obligatory: false
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, objetiva introduzir o (a) aluno (a) em diferentes linguagens corporais e/ou artísticas nas suas relações com o processo educacional, tanto no âmbito da instituição escolar (com ênfase na Educação Infantil e séries iniciais do Ensino Fundamental), como no contexto de outros espaços educativos.',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D95B40',
			obligatory: false
		},
		'ML---': {
			code: 'ML---',
			name: 'Qualquer Disciplina com codigo ML---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ML---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9C940',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D94077',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#71D940',
			obligatory: false
		}
	}
};

export default catalogue;
