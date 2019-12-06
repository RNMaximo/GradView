const catalogue = {
	totalCredits: 231,
	maxCreditsSem: 38,
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
			subjects: ['AP301', 'AP304', 'AP398', 'EL511', 'EL683', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP404', 'AP498', 'AP520', 'EL212', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['AP518', 'AP598', 'AR301', 'EL774', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP600', 'AP625', 'AP709', 'EL874', 'FN468', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP707', 'AP725', 'AP735', 'AP762', 'AR601']
		},
		'sem-8': {
			id: '8',
			subjects: ['AP836', 'AP862', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['AP303', 'AP403', 'AP515', 'AP615', 'AP618', 'AP620', 'AP724', 'AP763'],
		},
		'elet-2': {
			credits: 20,
			hasRestrictions: true,
			subjects: ['AP106', 'AP140', 'AP199', 'AP206', 'AP240', 'AP299', 'AP308', 'AP309', 'AP313', 'AP340', 'AP399', 'AP401', 'AP402', 'AP409', 'AP412', 'AP413', 'AP417', 'AP440', 'AP499', 'AP501', 'AP502', 'AP503', 'AP504', 'AP509', 'AP510', 'AP512', 'AP599', 'AP601', 'AP602', 'AP603', 'AP604', 'AP609', 'AP610', 'AP612', 'AP614', 'AP617', 'AP632', 'AP699', 'AP701', 'AP710', 'AP714', 'AP717', 'AP718', 'AP732', 'AP733', 'AP734', 'AP745', 'AP760', 'AP764', 'AP773', 'AP801', 'AP810', 'AP812', 'AP814', 'AP863', 'AP895', 'AP896', 'AP897', 'AP898', 'AP901', 'AP910', 'AP912', 'AP917', 'AP931', 'AP932', 'AP933', 'AP934', 'AP935', 'AP936', 'AP937', 'AP938', 'AP939', 'AP940', 'AP941', 'AP975', 'AP976', 'AP977', 'AP978', 'AP981', 'AP982', 'AP983', 'AP991', 'AP992', 'AP993', 'EP158'],
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
			color: '#4060D9',
			obligatory: true
		},
		'AP103': {
			code: 'AP103',
			name: 'Pintura I',
			ementa: 'Fundamentos da linguagem pictórica: relação entre o desenho e a pintura. Introdução ao conhecimento de técnicas, materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40C6D9',
			obligatory: true
		},
		'AP104': {
			code: 'AP104',
			name: 'Desenho Artístico I',
			ementa: 'Fundamentos da linguagem visual. Desenvolvimento da observação, percepção e apreensão por meio do desenho. A representação: formas e estruturas básicas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#408CD9',
			obligatory: true
		},
		'AP110': {
			code: 'AP110',
			name: 'Modelagem I',
			ementa: 'Modelagem e Moldagem em materiais diversos. Aplicação de escala para o projeto artístico. Elaboração de modelos maquetes em materiais diversos. Apresentação e elaboração de seminários e pesquisas de campo referentes ao universo próprio da criação artística.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#53D940',
			obligatory: true
		},
		'AP198': {
			code: 'AP198',
			name: 'História da Arte I',
			ementa: 'A disciplina terá como tema as manifestações artísticas do Renascimento, estabelecendo suas ligações e rupturas com a visualidade da Idade Média e examinando suas relações com a cultura clássica da Antiguidade. Estudos teóricos de textos fundamentais para esse campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#69D940',
			obligatory: true
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Compreensão da História e dos desdobramentos sócio-filosóficos das ideias pedagógicas ao longo do tempo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96440',
			obligatory: true
		},
		'AP200': {
			code: 'AP200',
			name: 'Práticas de Oficina II',
			ementa: 'Aprimoramento dos conteúdos e práticas do ateliê artístico por meio da execução de exercícios e projetos que envolvam o conhecimento de métrica, escala e sistema de medidas aplicadas a projetos artísticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#62D940',
			obligatory: true
		},
		'AP203': {
			code: 'AP203',
			name: 'Pintura II',
			ementa: 'Fundamentos da Linguagem pictórica: composição e relações cromáticas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP103'],
			color: '#40C6D9',
			obligatory: true
		},
		'AP204': {
			code: 'AP204',
			name: 'Desenho Artístico II',
			ementa: 'Fundamentos da linguagem visual. Instrumentalização técnica: materiais e suportes através da história do desenho. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico I.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104'],
			color: '#408CD9',
			obligatory: true
		},
		'AP210': {
			code: 'AP210',
			name: 'Modelagem II',
			ementa: 'Modelagem com recursos tecnológicos, enfatizando o uso de ferramentas, equipamentos e materiais do fazer artístico e da área educacional. Apreensão do tempo e do espaço por meio de estudos em desenho e demais linguagens projetivas aplicadas à prática em oficina sistematizada pela orientação docente e apoio técnico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D94098',
			obligatory: true
		},
		'AP298': {
			code: 'AP298',
			name: 'História da Arte II',
			ementa: 'A disciplina terá como tema as manifestações artísticas dos Séculos XVII e primeira metade do XVIII na Europa. Compreende o estudo teórico de textos fundamentais para este campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D9CB40',
			obligatory: true
		},
		'AP415': {
			code: 'AP415',
			name: 'Escultura I',
			ementa: 'A escultura moderna inserida nas principais vertentes artísticas da primeira metade do Século XX; investigações decorrentes da ruptura com valores e procedimentos tradicionais; compreensão das escalas, lugares e materiais para a escultura.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D940AE',
			obligatory: true
		},
		'AP301': {
			code: 'AP301',
			name: 'Elementos da Prática de Pesquisa',
			ementa: 'A investigação científica: lógica, linguagem e método. Estruturas formais e funcionais do discurso científico de distintos tipos de Pesquisa voltados para o grande campo das Artes e Humanidades. Subsídios para a leitura, produção e interpretação de textos científicos. O projeto de pesquisa: a pergunta condutora, a delimitação do problema, a hipótese, os objetivos, o embasamento teórico, metodológico e empírico. A investigação científica como prática social.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#6240D9',
			obligatory: true
		},
		'AP304': {
			code: 'AP304',
			name: 'Desenho Artístico III',
			ementa: 'Da observação à representação: os sistemas de representação dos primórdios da história da arte ao período moderno. O desenho como meio de conhecimento sensível. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico II.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: '#408CD9',
			obligatory: true
		},
		'AP398': {
			code: 'AP398',
			name: 'História da Arte III',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, desde o surgimento do Neoclassicismo, seus desdobramentos na Academia, até o advento do Realismo no Século XIX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#5B40D9',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D99F40',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94091',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#40D967',
			obligatory: true
		},
		'AP404': {
			code: 'AP404',
			name: 'Desenho Artístico IV',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual e seus sistemas de representação no período contemporâneo. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico III.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP304'],
			color: '#408CD9',
			obligatory: true
		},
		'AP498': {
			code: 'AP498',
			name: 'História da Arte IV',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, a partir da produção apresentada por Manet até o desenvolvimento das vanguardas históricas no começo do Século XX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#404AD9',
			obligatory: true
		},
		'AP520': {
			code: 'AP520',
			name: 'Gravura I',
			ementa: 'Introdução à gravura em relevo. A xilografia como linguagem expressiva. História da gravura européia: séculos XV à XVIII, e Brasil. A gravura de madeira de fio e de topo, linoleogravura e variantes. Impressões diretas e simples: monotipias, carimbos e pochoir.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204'],
			color: '#408CD9',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#9540D9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#4067D9',
			obligatory: true
		},
		'AP518': {
			code: 'AP518',
			name: 'Cerâmica I',
			ementa: 'Histórico da cerâmica. Desenvolvimento técnico e seus processos criativos, instrumentos, equipamentos e materiais. Processo e uso de óxidos na cerâmica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D040D9',
			obligatory: true
		},
		'AP598': {
			code: 'AP598',
			name: 'História da Arte V',
			ementa: 'A disciplina aborda a produção artística europeia correspondente ao período que se estende do Pós-Segunda Guerra aos dias de hoje. É permeada pelo exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#D940A7',
			obligatory: true
		},
		'AR301': {
			code: 'AR301',
			name: 'Psicologia do Desenvolvimento Aplicado às Artes I',
			ementa: 'A compreensão do desenvolvimento do ser humano em relação aos aspectos da habilidade motora, da ampliação do conhecimento e da capacidade criadora, levando-se em conta a expressão lúdica e o aprofundamento da percepção corporal, visual e auditiva do indivíduo. A experiência do fenômeno da arte, tanto em sua aproximação do material concreto quanto na realização de composições mais elaboradas, permitindo a compreensão do processo criativo e evidenciando a necessidade da expressão individual, experiência essa adequada às diversas fases evolutivas e variadas formas de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40B0D9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D940BD',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#78D940',
			obligatory: true
		},
		'AP600': {
			code: 'AP600',
			name: 'Metodologia de Pesquisa em Artes Visuais',
			ementa: 'Referenciais teóricos e metodológicos básicos para a realização de pesquisas no campo das artes visuais. Exercícios de elaboração de projetos, levantamento e organização de material empírico, elaboração de relatórios e redação visando ampliar o conhecimento sobre a língua portuguesa orientada para o discurso próprio do artista visual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D94047',
			obligatory: true
		},
		'AP625': {
			code: 'AP625',
			name: 'História da Arte Brasileira I',
			ementa: 'A disciplina tem como conteúdo as manifestações artísticas do período da Colônia e do Império no Brasil. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#4058D9',
			obligatory: true
		},
		'AP709': {
			code: 'AP709',
			name: 'Arte e Novos Meios I',
			ementa: 'A disciplina propõe apresentar e discutir as linguagens tecnológicas enfocando a criação digital para construção da pesquisa artística: a imagem eletrônica videobjetos, videoinstalações e outros, ambientes interativos e imersivos. Ferramentas de tecnologia e Comunicação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D94A',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#D940BD',
			obligatory: true
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D8D940',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#D94089',
			obligatory: true
		},
		'AP707': {
			code: 'AP707',
			name: 'Gestão de Espaços de Arte / Educação',
			ementa: 'Gestão de espaços da Educação Formal e não formal nos quais a Arte de insere como elemento unificador das atividades.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40A2D9',
			obligatory: true
		},
		'AP725': {
			code: 'AP725',
			name: 'História da Arte Brasileira II',
			ementa: 'Arte brasileira no século XX. As realizações da Semana de Arte Moderna e o Movimento Modernista. Arte e identidade nacional. Os desdobramentos do modernismo nos anos 30 e 40. As Bienais de São Paulo. A arte concreta e neoconcreta. O abstracionismo informal no Brasil. A \"pop-art\" brasileira. Novas tendências. Arte contemporânea. Desenvolve o exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D9C440',
			obligatory: true
		},
		'AP735': {
			code: 'AP735',
			name: 'Projeto Experimental em Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto poético do aluno, visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística e do campo da arte educação, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas, técnicas e da docência presentes nos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200'],
			color: '#9DD940',
			obligatory: true
		},
		'AP762': {
			code: 'AP762',
			name: 'Estágio Pedagógico I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional principalmente voltados para a Educação infantil. Estudo do sistema educacional brasileiro e suas diretrizes curriculares. Elaboração de Relatórios e Projetos pertinentes a este campo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['AA200'],
			color: '#40D960',
			obligatory: true
		},
		'AR601': {
			code: 'AR601',
			name: 'Processos Pedagógicos Voltados para o Corpo na Arte',
			ementa: 'Discute conhecimentos que integram corpo e educação, apresentando fundamentos histórico-contextuais, teóricos, práticos e metodológicos direcionados ao ensino. Prepara o aluno para refletir e atuar no ensino da arte em ambientes de educação formal e não formal. Dá suporte ao desenvolvimento dos estágios e do TCC em Arte Educação. Estuda os processos artístico-educativos voltados a diferentes públicos, propondo também estratégias de inclusão direcionadas a públicos com necessidades especiais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C1D940',
			obligatory: true
		},
		'AP836': {
			code: 'AP836',
			name: 'Projeto Experimental em Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200'],
			color: '#A4D940',
			obligatory: true
		},
		'AP862': {
			code: 'AP862',
			name: 'Estágio Pedagógico II',
			ementa: 'Desenvolvimento de atividades de estágio que aprimorem o conhecimento da prática docente em espaços escolares e não-escolares; realização de atividades de imersão no campo de trabalho que propiciem ao professor em formação praticar elementos da arte-educação no ambiente profissional. Análise crítica de projetos praticados na realidade brasileira. Elaboração de Relatórios e Projetos pertinentes a este campo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#95D940',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#D95640',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4051D9',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#A440D9',
			obligatory: false
		},
		'AP106': {
			code: 'AP106',
			name: 'Plástica I',
			ementa: 'Conceituação plástica no espaço bi e tridimensional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D9BD40',
			obligatory: false
		},
		'AP140': {
			code: 'AP140',
			name: 'Ateliê Experimental Multidisciplinar I',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D99840',
			obligatory: false
		},
		'AP199': {
			code: 'AP199',
			name: 'Atividades Artísticas - Culturais - Ensino I',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#C940D9',
			obligatory: false
		},
		'AP206': {
			code: 'AP206',
			name: 'Plástica II',
			ementa: 'A forma e sua dinâmica no espaço. Suportes e técnicas construtivas de investigação plástica na tridimensionalidade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP106'],
			color: '#D9BD40',
			obligatory: false
		},
		'AP240': {
			code: 'AP240',
			name: 'Ateliê Experimental Multidisciplinar II',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP140.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#406ED9',
			obligatory: false
		},
		'AP299': {
			code: 'AP299',
			name: 'Atividades Artísticas - Culturais - Ensino II',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#8740D9',
			obligatory: false
		},
		'AP303': {
			code: 'AP303',
			name: 'Pintura III',
			ementa: 'Teorias da cor: aprofundamento e desenvolvimento dos estudos cromáticos considerando a pintura na história da arte e a pesquisa de novos materiais e suportes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP203'],
			color: '#40C6D9',
			obligatory: false
		},
		'AP308': {
			code: 'AP308',
			name: 'Cultura Popular',
			ementa: 'A disciplina propõe apresentar e discutir as culturas popular e urbana e o folclore sob enfoque antropológico, estendendo-se para a aplicação na educação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D94064',
			obligatory: false
		},
		'AP309': {
			code: 'AP309',
			name: 'Iniciação Científica I',
			ementa: 'A ser definida a cada semestre em que for oferecida.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D940D3',
			obligatory: false
		},
		'AP313': {
			code: 'AP313',
			name: 'Arte Fotográfica I',
			ementa: 'A fotografia como temática nas expressões visuais. Processos fotográficos. Experimentações práticas e teóricas. Fotogravura. Foto conceitual. Ferramentas de tecnologia e Comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D9D5',
			obligatory: false
		},
		'AP340': {
			code: 'AP340',
			name: 'Ateliê Experimental Multidisciplinar III',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP240.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D9B0',
			obligatory: false
		},
		'AP399': {
			code: 'AP399',
			name: 'Atividades Artísticas - Culturais - Ensino III',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#40A9D9',
			obligatory: false
		},
		'AP401': {
			code: 'AP401',
			name: 'Monitoria I',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D99A',
			obligatory: false
		},
		'AP402': {
			code: 'AP402',
			name: 'Tópicos Especiais em História da Arte',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#407DD9',
			obligatory: false
		},
		'AP403': {
			code: 'AP403',
			name: 'Pintura IV',
			ementa: 'Tema e representação na pintura: desenvolvimento das questões abordadas na disciplina anterior.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP303'],
			color: '#40C6D9',
			obligatory: false
		},
		'AP409': {
			code: 'AP409',
			name: 'Iniciação Científica II',
			ementa: 'A ser definida a cada semestre em que for oferecida.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#71D940',
			obligatory: false
		},
		'AP412': {
			code: 'AP412',
			name: 'Tópicos Especiais em História da Arte IV',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#ABD940',
			obligatory: false
		},
		'AP413': {
			code: 'AP413',
			name: 'Arte Fotográfica II',
			ementa: 'Procedimentos fotográficos. Hibridações próprias da composição Fotografia e Arte. Ensaios fotográficos. Experimentações práticas e teóricas. Fotogravura. Foto conceitual. Ferramentas de tecnologia e Comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#40D993',
			obligatory: false
		},
		'AP417': {
			code: 'AP417',
			name: 'Tópicos Especiais em História da Arte V',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B540',
			obligatory: false
		},
		'AP440': {
			code: 'AP440',
			name: 'Ateliê Experimental Multidisciplinar IV',
			ementa: 'A disciplina tem como objetivo estimular a vivência e troca de experiências em ateliê coletivo dando ênfase à produção e ao desenvolvimento de processos de criação em diferentes procedimentos artísticos. Sequência da disciplina AP340.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D9406C',
			obligatory: false
		},
		'AP499': {
			code: 'AP499',
			name: 'Atividades Artísticas - Culturais - Ensino IV',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D940B5',
			obligatory: false
		},
		'AP501': {
			code: 'AP501',
			name: 'Monitoria II',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D94740',
			obligatory: false
		},
		'AP502': {
			code: 'AP502',
			name: 'Tópicos Especiais em História da Arte II',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94073',
			obligatory: false
		},
		'AP503': {
			code: 'AP503',
			name: 'Pintura V',
			ementa: 'Teorias da Cor: O estudo das relações cromáticas em pintura. A representação do espaço.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B340D9',
			obligatory: false
		},
		'AP504': {
			code: 'AP504',
			name: 'Desenho Artístico V',
			ementa: 'Da observação à construção: o desenho como instrumento de conhecimento sensível. A representação do espaço: introdução ao estudo das concepções espaciais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D958',
			obligatory: false
		},
		'AP509': {
			code: 'AP509',
			name: 'Computação Gráfica I',
			ementa: 'Conceitos básicos de informática e computação gráfica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D951',
			obligatory: false
		},
		'AP510': {
			code: 'AP510',
			name: 'Tópicos Especiais em Processos Criativos III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#5BD940',
			obligatory: false
		},
		'AP512': {
			code: 'AP512',
			name: 'Tópicos Especiais em História da Arte VI',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#409AD9',
			obligatory: false
		},
		'AP515': {
			code: 'AP515',
			name: 'Escultura II',
			ementa: 'Novas proposições para o espaço escultórico: conceitos de apropriação, instalação e intervenção nos processos de produção e pensamento da escultura contemporânea. Desdobramentos de pesquisa em seminários e visitas técnicas orientadoras do campo expandido da escultura.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D5D9',
			obligatory: false
		},
		'AP599': {
			code: 'AP599',
			name: 'Atividades Artísticas - Culturais - Ensino V',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#D94040',
			obligatory: false
		},
		'AP601': {
			code: 'AP601',
			name: 'Monitoria III',
			ementa: 'Funções de monitoria a serem exercidas por alunos do Curso de Licenciatura em Artes: Artes Visuais, em disciplinas curriculares e áreas de pesquisa do Departamento de Artes Plásticas: tarefas de ensino e pesquisa a serem desenvolvidas de acordo com o rendimento do aluno e seu plano de estudos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D98C',
			obligatory: false
		},
		'AP602': {
			code: 'AP602',
			name: 'Tópicos Especiais em História da Arte III',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4C40D9',
			obligatory: false
		},
		'AP603': {
			code: 'AP603',
			name: 'Pintura VI',
			ementa: 'Teorias da cor: Desenvolvimento das questões abordadas na disciplina, Pintura V.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D99140',
			obligatory: false
		},
		'AP604': {
			code: 'AP604',
			name: 'Desenho Artístico VI',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico V.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940C4',
			obligatory: false
		},
		'AP609': {
			code: 'AP609',
			name: 'Computação Gráfica II',
			ementa: 'Desenvolvimento da disciplina AP509.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D9407B',
			obligatory: false
		},
		'AP610': {
			code: 'AP610',
			name: 'Tópicos Especiais em Processos Criativos IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D94E40',
			obligatory: false
		},
		'AP612': {
			code: 'AP612',
			name: 'Tópicos Especiais em História da Arte VII',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94082',
			obligatory: false
		},
		'AP614': {
			code: 'AP614',
			name: 'Tópicos Especiais em Processos Criativos V',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D976',
			obligatory: false
		},
		'AP615': {
			code: 'AP615',
			name: 'Escultura III',
			ementa: 'Abordagens da escultura brasileira e sua inserção no panorama internacional. Reconhecimento teórico e prático desta linguagem artística por meio da elaboração de projetos, seminários e leituras comentadas em aula.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#BA40D9',
			obligatory: false
		},
		'AP617': {
			code: 'AP617',
			name: 'Tópicos Especiais em História da Arte VIII',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D96E',
			obligatory: false
		},
		'AP618': {
			code: 'AP618',
			name: 'Cerâmica II',
			ementa: 'Conhecimentos artesanais da cerâmica. Uso do forno. O engobe, os esmaltes vitrificáveis e outras. Suas propriedades. Processo de criação e consideração geral sobre os seus aspectos sociais. Processos de expressão. Aplicações artesanais e industriais. O torno e sua função.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP518'],
			color: '#D040D9',
			obligatory: false
		},
		'AP620': {
			code: 'AP620',
			name: 'Gravura II',
			ementa: 'Introdução à gravura em encavo: calcografia ou gravura em metal. História da gravura em metal. Procedimentos básicos: técnicas de gravação diretas e indiretas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP520'],
			color: '#408CD9',
			obligatory: false
		},
		'AP632': {
			code: 'AP632',
			name: 'Desenho Animado I',
			ementa: 'Representação gráfica do movimento. Noções básicas sobre animação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4076D9',
			obligatory: false
		},
		'AP699': {
			code: 'AP699',
			name: 'Atividades Artísticas - Culturais - Ensino VI',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#40BFD9',
			obligatory: false
		},
		'AP701': {
			code: 'AP701',
			name: 'Tópicos Especiais em Processos Criativos I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D9A740',
			obligatory: false
		},
		'AP710': {
			code: 'AP710',
			name: 'Tópicos Especiais em Processos Criativos VI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#6940D9',
			obligatory: false
		},
		'AP714': {
			code: 'AP714',
			name: 'Tópicos Especiais em Processos Criativos VII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D9CE',
			obligatory: false
		},
		'AP717': {
			code: 'AP717',
			name: 'Tópicos Especiais em História da Arte IX',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9409F',
			obligatory: false
		},
		'AP718': {
			code: 'AP718',
			name: 'Cerâmica III',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos em cerâmica I e II, associados a novas informações históricas e técnicas, encaminhando a reflexão para a cerâmica contemporânea.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AP618'],
			color: '#D040D9',
			obligatory: false
		},
		'AP724': {
			code: 'AP724',
			name: 'Gravura III',
			ementa: 'Introdução à gravura planográfica: história da gravura planográfica, séculos XIX e XX; Introdução à gravura contemporânea. Procedimentos básicos: técnicas de gravação e impressão em litografia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP620'],
			color: '#408CD9',
			obligatory: false
		},
		'AP732': {
			code: 'AP732',
			name: 'Desenho Animado II',
			ementa: 'Desenho animado e outras técnicas de cinema de animação. Aborda os principais processos de produção de um desenho animado, desde a criação da ideia, planejamento da história, animação de desenhos, filmagem e revelação do material com o auxílio da computação gráfica.',
			semestre: 1,
			vector: {T:1, P:0, L:7, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['AP632'],
			color: '#4076D9',
			obligatory: false
		},
		'AP733': {
			code: 'AP733',
			name: 'Pintura VII',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos pictóricos encaminhando a reflexão para a pintura conteporânea.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#D98940',
			obligatory: false
		},
		'AP734': {
			code: 'AP734',
			name: 'Desenho Artístico VII',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos gráficos encaminhando a reflexão para o desenho contemporâneo.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#9D40D9',
			obligatory: false
		},
		'AP745': {
			code: 'AP745',
			name: 'Escultura IV',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos escultóricos voltados para a reflexão conceitual teórica e prática da produção escultórica contemporânea brasileira.',
			semestre: 1,
			vector: {T:1, P:3, L:3, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#40D9A9',
			obligatory: false
		},
		'AP760': {
			code: 'AP760',
			name: 'Computação Gráfica e Multimídia',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseado nos conhecimentos adquiridos nas disciplinas anteriores. Aprofundamento das questões históricas, estéticas e técnicas dos processos tecnológicos encaminhando a reflexão para o uso da tecnologia na arte contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#45D940',
			obligatory: false
		},
		'AP763': {
			code: 'AP763',
			name: 'Pedagogia e Didática de Artes Visuais I',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicada ao ensino de Artes Visuais.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#D96C40',
			obligatory: false
		},
		'AP764': {
			code: 'AP764',
			name: 'Gravura IV',
			ementa: 'Definição e orientação no desenvolvimento de projetos artísticos baseados nos conhecimentos adquiridos em Gravura I, II e III. Aprofundamento das questões históricas, estéticas e técnicas dos processos gráficos, encaminhando a reflexão para a gravura contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:4, O:1, D:0, HS:8, SL:4, C:8},
			requisitos: ['AP620'],
			color: '#408CD9',
			obligatory: false
		},
		'AP773': {
			code: 'AP773',
			name: 'Serigrafia',
			ementa: 'Introdução à serigrafia: história da gravura vazada, século XX; Introdução à serigrafia contemporânea. Procedimentos básicos: técnicas de gravação e impressão em serigrafia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104'],
			color: '#408CD9',
			obligatory: false
		},
		'AP801': {
			code: 'AP801',
			name: 'Tópicos Especiais em Processos Criativos II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#8E40D9',
			obligatory: false
		},
		'AP810': {
			code: 'AP810',
			name: 'Tópicos Especiais em Processos Criativos VIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#BAD940',
			obligatory: false
		},
		'AP812': {
			code: 'AP812',
			name: 'Tópicos Especiais em História da Arte X',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C140D9',
			obligatory: false
		},
		'AP814': {
			code: 'AP814',
			name: 'Tópicos Especiais em Processos Criativos IX',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D9BF',
			obligatory: false
		},
		'AP863': {
			code: 'AP863',
			name: 'Pedagogia e Didática de Artes Visuais II',
			ementa: 'Estudo das principais linhas pedagógicas e conceitos de metodologia de ensino aplicada ao ensino de Artes Visuais.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['AP763'],
			color: '#D96C40',
			obligatory: false
		},
		'AP895': {
			code: 'AP895',
			name: 'Tópicos Especiais em Processos Criativos XII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#D0D940',
			obligatory: false
		},
		'AP896': {
			code: 'AP896',
			name: 'Tópicos Especiais em Processos Criativos XIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#8ED940',
			obligatory: false
		},
		'AP897': {
			code: 'AP897',
			name: 'Tópicos Especiais em Processos Criativos XIV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#C9D940',
			obligatory: false
		},
		'AP898': {
			code: 'AP898',
			name: 'Tópicos Especiais em Processos Criativos XV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4042D9',
			obligatory: false
		},
		'AP901': {
			code: 'AP901',
			name: 'Tópicos Especiais em Processos Criativos X',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#40D97D',
			obligatory: false
		},
		'AP910': {
			code: 'AP910',
			name: 'Tópicos Especiais em Processos Criativos XI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas. Prevê como sua estrutura geral a ampliação dos conhecimentos da práxis artística bem como enriquecimento cultural.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#B3D940',
			obligatory: false
		},
		'AP912': {
			code: 'AP912',
			name: 'Tópicos Especiais em História da Arte XI',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9404E',
			obligatory: false
		},
		'AP917': {
			code: 'AP917',
			name: 'Tópicos Especiais em História da Arte XII',
			ementa: 'A disciplina tem seu conteúdo definido pelo docente responsável, de acordo com o desenvolvimento das atividades didáticas e artísticas do corpo discente do curso em acordo com as pesquisas docentes e seus diálogos com o sistema artístico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D984',
			obligatory: false
		},
		'AP931': {
			code: 'AP931',
			name: 'Tópicos Especiais em Teorias das Artes I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#7140D9',
			obligatory: false
		},
		'AP932': {
			code: 'AP932',
			name: 'Tópicos Especiais em Teorias das Artes II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#7FD940',
			obligatory: false
		},
		'AP933': {
			code: 'AP933',
			name: 'Tópicos Especiais em Teorias das Artes III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D95D40',
			obligatory: false
		},
		'AP934': {
			code: 'AP934',
			name: 'Tópicos Especiais em Teorias das Artes IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D98240',
			obligatory: false
		},
		'AP935': {
			code: 'AP935',
			name: 'Tópicos Especiais em Teorias da Artes V',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#87D940',
			obligatory: false
		},
		'AP936': {
			code: 'AP936',
			name: 'Tópicos Especiais em Teorias das Artes VI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4093D9',
			obligatory: false
		},
		'AP937': {
			code: 'AP937',
			name: 'Tópicos Especiais em Teorias das Artes VII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4540D9',
			obligatory: false
		},
		'AP938': {
			code: 'AP938',
			name: 'Tópicos Especiais em Teorias das Artes VIII',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em Curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D942',
			obligatory: false
		},
		'AP939': {
			code: 'AP939',
			name: 'Tópicos Especiais em Teorias das Artes IX',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#7F40D9',
			obligatory: false
		},
		'AP940': {
			code: 'AP940',
			name: 'Tópicos Especiais em Teorias das Artes X',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D94056',
			obligatory: false
		},
		'AP941': {
			code: 'AP941',
			name: 'Tópicos Especiais em Teorias das Artes XI',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D940CB',
			obligatory: false
		},
		'AP975': {
			code: 'AP975',
			name: 'Tópicos Especiais em Ensino de Artes Visuais I',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40B8D9',
			obligatory: false
		},
		'AP976': {
			code: 'AP976',
			name: 'Tópicos Especiais em Ensino de Artes Visuais II',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#7840D9',
			obligatory: false
		},
		'AP977': {
			code: 'AP977',
			name: 'Tópicos Especiais em Ensino de Artes Visuais III',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D9B8',
			obligatory: false
		},
		'AP978': {
			code: 'AP978',
			name: 'Tópicos Especiais em Ensino de Artes Visuais IV',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D840D9',
			obligatory: false
		},
		'AP981': {
			code: 'AP981',
			name: 'Preservação e Restauro I: Fundamentos e Conceitos',
			ementa: 'Serão apresentadas as principais teorias e referências conceituais da área de preservação e restauro, enquanto disciplina, enfatizando sua vinculação com os artefatos de natureza visual.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: '',
			color: '#40CED9',
			obligatory: false
		},
		'AP982': {
			code: 'AP982',
			name: 'Tópicos Especiais em Preservação e Restauro I: Análise de Experiências',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['AA200'],
			color: '#D97340',
			obligatory: false
		},
		'AP983': {
			code: 'AP983',
			name: 'Tópicos Especiais em Preservação e Restauro II: Técnicas e Métodos',
			ementa: 'O programa da disciplina será estabelecido em função das pesquisas em curso no Departamento de Artes Plásticas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['AA200'],
			color: '#4CD940',
			obligatory: false
		},
		'AP991': {
			code: 'AP991',
			name: 'Design I: Princípios de Projeto em Programação Visual',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Áreas de atuação em programação visual. Método clássico de desenvolvimento de projetos de design aplicado à programação visual. Programas de identidade visual. Ergonomia da informação. Semântica do design gráfico. Ética do design gráfico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D9D340',
			obligatory: false
		},
		'AP992': {
			code: 'AP992',
			name: 'Design II: Princípios de Tipografia',
			ementa: 'História da escrita ocidental, do alfabeto romano e da tipografia. Classificação das famílias de letras do alfabeto romano. Nomenclatura simplificada de letras. Fontes mais utilizadas por comunicadores visuais. Principais tipógrafos do Século XX. Tipografia digital. Visibilidade, legibilidade e inteligibilidade. Diagramação e paginação. Malhas e proporções clássicas. Implicações técnicas e estéticas relacionadas ao desenho de letras e as composições tipográficas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#5340D9',
			obligatory: false
		},
		'AP993': {
			code: 'AP993',
			name: 'Design III: Princípios de Projeto em Projeto de Produto',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Áreas de atuação em projeto de produto. Método clássico de desenvolvimento de projetos de design aplicado ao projeto de produto. Ergonomia do produto. Semântica do produto. Ética do design de produto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D9A2',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9AE40',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9C6',
			obligatory: false
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir o (a) aluno (a) em diferentes atividades corporais e/ou artísticas nas suas relações com o processo educacional, tanto no âmbito da instituição escolar (com ênfase na Educação Infantil e séries iniciais do Ensino Fundamental), como no contexto de outros espaços educativos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#AB40D9',
			obligatory: false
		},
		'ML---': {
			code: 'ML---',
			name: 'Qualquer Disciplina com codigo ML---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ML---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4084D9',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9405D',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D97B40',
			obligatory: false
		}
	}
};

export default catalogue;
