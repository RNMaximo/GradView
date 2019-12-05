const catalogue = {
	totalCredits: 217,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ141', 'HZ158', 'HZ160']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ248', 'HZ258', 'HZ260', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL105', 'HZ345', 'HZ358', 'HZ360', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HZ379', 'HZ431', 'LA001', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'HZ369', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL874', 'HZ349', 'HZ631', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'EL511', 'HZ103', 'HZ339', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['HZ104', 'HZ359', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL683'],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['EP107', 'EP110', 'EP130', 'EP152', 'EP162', 'EP164', 'EP315', 'EP340', 'EP347', 'EP348', 'EP372', 'EP814', 'EP887'],
		},
		'elet-3': {
			credits: 30,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'GF---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'TL---'],
		},
		'elet-4': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-5': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['HH---'],
		},
		'elet-6': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['HG---'],
		},
	},

	subjects: {
		'CE131': {
			code: 'CE131',
			name: 'Introdução à Economia para Ciências Sociais',
			ementa: 'O sistema de produção. Divisão do trabalho. Os três aspectos da produção. Taxa de lucro e movimento do capital. Salário e lucros. Crescimento e ciclo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#57D940',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender elementos fundamentais da Ciência Política: o objeto da Ciência Política; o poder político; a ação política. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40B5D9',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D992',
			obligatory: true
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de natureza e cultura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D340D9',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender as rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985; o debate existente na bibliografia sobre esses temas; as transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#40B5D9',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D9AA40',
			obligatory: true
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de troca, sociedade e estrutura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160'],
			color: '#D340D9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#406FD9',
			obligatory: true
		},
		'EL105': {
			code: 'EL105',
			name: 'Tecnologias e Processos Educativos',
			ementa: 'Abordagem interdisciplinar e cultural, propondo-se o tratamento das mídias e das tecnologias de comunicação e informação, como parte dos processos educativos amplos. Os alunos vivenciarão situações práticas que os levarão a refletir, criticamente, as tecnologias na educação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#40D9C7',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender os fundamentos teóricos da análise do Estado contemporâneo; a relação entre o Estado e a sociedade civil; a relação entre Estado e classes sociais; a questão da burocracia; as estruturas do Estado moderno. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#40B5D9',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D9A4',
			obligatory: true
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de etnografias antropológicas recuperando o arco de discussões sobre o fazer etnográfico. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260'],
			color: '#D340D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#404CD9',
			obligatory: true
		},
		'HZ379': {
			code: 'HZ379',
			name: 'Oficinas de Leitura e Escrita em Humanidades',
			ementa: 'Leitura, interpretação e discussão de textos fundamentais para a teoria social e humanidades. Contextualização histórica dos textos e autores em discussão. Escrita de conteúdos dissertativos (resenhas, sínteses, artigos científicos). Práticas de leitura e organização de oficinas de escrita para o ensino médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C1D940',
			obligatory: true
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social. Promover o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160'],
			color: '#719AC1',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D3D940',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#405DD9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D97540',
			obligatory: true
		},
		'HZ369': {
			code: 'HZ369',
			name: 'Ensino de Antropologia: Temas e Conceitos Fundamentais',
			ementa: 'Disciplina voltada para a formação didático-pedagógica em Antropologia, abrangendo conteúdos que serão objeto do ensino do futuro docente. Estes incluem um conjunto de temas e conceitos fundamentais. Os temas indicados são: história e cultura afro-brasileira, indígena e africana; educação ambiental; problemas sociais contemporâneos; modos de conhecimento e relações de ensino-aprendizagem. E, os conceitos: cultura, alteridade, raça, gênero e desigualdade. O objetivo é capacitar os alunos no manejo da sala de aula a partir da seleção e avaliação de materiais e métodos para o ensino da Antropologia, estabelecendo a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco em práticas pedagógicas e políticas educacionais que promovam igualdade e inclusão.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#40D94C',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#B040D9',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#D97540',
			obligatory: true
		},
		'HZ349': {
			code: 'HZ349',
			name: 'Políticas Públicas Educacionais',
			ementa: 'Disciplina voltada para a formação didático-pedagógica com ênfase no conhecimento de conceitos e noções basilares sobre políticas públicas educacionais; trajetória das políticas educacionais no Brasil e a questão do financiamento; sistemas de ensino, diretrizes curriculares e dimensão federativa; políticas específicas em cada nível de ensino; ensino público e ensino privado; escola, gestão e projeto político-pedagógico como níveis operacionais e espaços de produção de políticas públicas educacionais. Pretende-se estabelecer a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco em práticas pedagógicas e políticas educacionais que promovam igualdade e inclusão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#8C40D9',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94075',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#4080D9',
			obligatory: true
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160'],
			color: '#6BAAA1',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46D940',
			obligatory: true
		},
		'HZ103': {
			code: 'HZ103',
			name: 'Estágio Supervisionado em Ciências Sociais I',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450'],
			color: '#B0D940',
			obligatory: true
		},
		'HZ339': {
			code: 'HZ339',
			name: 'Educação e Questões Demográficas',
			ementa: 'Essa disciplina tem como objetivo fornecer aos alunos um conjunto de conteúdos específicos e de ferramentas pedagógicas sobre a relação entre a educação, em seus diversos níveis, e as questões demográficas. A disciplina é composta por módulos que abordam, por um lado, os aspectos principais da dinâmica demográfica (fecundidade, mortalidade e migração); por outro lado, abordam como estes componentes da dinâmica demográfica se relacionam com a Educação, seja em termos de geração de demandas, seja em termos de caracterização e avaliação do atendimento às demandas educacionais. Pretende-se estabelecer a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco nas questões demográficas relacionadas à igualdade e à inclusão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94051',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#D96340',
			obligatory: true
		},
		'HZ104': {
			code: 'HZ104',
			name: 'Estágio Supervisionado em Ciências Sociais II',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HZ103'],
			color: '#B0D940',
			obligatory: true
		},
		'HZ359': {
			code: 'HZ359',
			name: 'Educação e Sociedade',
			ementa: 'A educação como objeto de análise e investigação da Sociologia a partir da contribuição de autores clássicos e contemporâneos no que se refere às relações entre educação e sociedade e uma sociologia da educação. Estudo das interpretações relativas à escola, aos sistemas de ensino e aos diferentes processos educacionais existentes na sociedade. A pesquisa sociológica sobre educação no Brasil e em outros contextos escolares. Pretende-se estabelecer a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco nos aspectos sociológicos dos fenômenos da igualdade e da inclusão.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#40A4D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#40D95D',
			obligatory: true
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#69D940',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8CD940',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#C140D9',
			obligatory: false
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9CD40',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94040',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#9E40D9',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940CD',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D98640',
			obligatory: false
		},
		'EP107': {
			code: 'EP107',
			name: 'Introdução à Pedagogia - Organização do Trabalho Pedagógico',
			ementa: 'O objetivo das ciências da educação. O problema da unidade, especificidade e autonomia das ciências da educação. A educação como ponto de partida e de chegada dos estudos e das reflexões dos cientistas. A contribuição das ciências para a explicação e compreensão da educação. Contextualização histórica da Pedagogia no Brasil - o curso de Pedagogia da Unicamp.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C7D9',
			obligatory: false
		},
		'EP110': {
			code: 'EP110',
			name: 'História da Educação I',
			ementa: 'Introdução à História da Educação. Bases epistemológicas, metodológicas e teóricas da História e História da Educação. Fundamentos da História e História da Educação e da pedagogia: na antiguidade, na medievalidade, na modernidade e na contemporaneidade geral e no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5740D9',
			obligatory: false
		},
		'EP130': {
			code: 'EP130',
			name: 'Filosofia da Educação I',
			ementa: 'Introdução à filosofia mediante sua caracterização em face de outras formas de conhecimento. Estudo de pensadores antigos que contribuíram significativamente para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental, entre eles: Sócrates, os sofistas, Platão e Aristóteles.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D96F',
			obligatory: false
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D980',
			obligatory: false
		},
		'EP162': {
			code: 'EP162',
			name: 'Escola e Currículo',
			ementa: 'História do Currículo, concepções de currículo, fundamentos filosóficos, sociológicos, históricos e culturais, teorias e práticas curriculares. Análise e compreensão da transformação do conhecimento, da educação e da escola na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:0, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D940AA',
			obligatory: false
		},
		'EP164': {
			code: 'EP164',
			name: 'Organização do Trabalho Pedagógico e Gestão Escolar',
			ementa: 'Fundamentos teóricos da Administração. Teorias da Administração e Gestão Educacional. Escola, Gestão e Projeto Político da escola. A organização do trabalho escolar: linguagem, tempo, espaço.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9B5',
			obligatory: false
		},
		'EP315': {
			code: 'EP315',
			name: 'Pesquisa e Prática Pedagógica I',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D99840',
			obligatory: false
		},
		'EP340': {
			code: 'EP340',
			name: 'Sociologia da Educação I',
			ementa: 'Introduz os estudantes aos temas da Sociologia da Educação por intermédio de abordagem de autores clássicos - Karl Marx, Max Weber e Émile Durkheim - e dos seus novos enfoques. Propicia a compreensão das dimensões sociais da Educação, na sociedade contemporânea, a partir de categorias analíticas das principais teorias sociológicas. Analisa a relevância da educação nas relações sociais que engendram exploração, dominação e solidariedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4640D9',
			obligatory: false
		},
		'EP347': {
			code: 'EP347',
			name: 'Educação, Cultura e Linguagens',
			ementa: 'Estudos sobre as diferentes linguagens verbais (fala e escrita), visuais (artes plásticas) e audiovisuais (cinema e televisão) que dão forma à Educação cultural e escolar,ao imaginário e à inteligência contemporâneas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95140',
			obligatory: false
		},
		'EP348': {
			code: 'EP348',
			name: 'Educação Especial e Inclusão',
			ementa: 'O acesso ao conhecimento e aos ambientes sociais e escolares de alunos com deficiência e altas habilidades, diante da responsabilidade de se garantir o direito à educação, como prescrição constitucional, no ensino básico e superior. A produção social da normalidade e da anormalidade. A constituição da educação especial e as propostas de escolarização das pessoas com deficiência, em diferentes momentos históricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94098',
			obligatory: false
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6940D9',
			obligatory: false
		},
		'EP814': {
			code: 'EP814',
			name: 'Seminário de Educação, Cultura e Artes',
			ementa: 'Abordagem de temas que articulem a Arte, em suas diferentes linguagens (dança, música, teatro e artes visuais), e a Educação como produções culturais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94063',
			obligatory: false
		},
		'EP887': {
			code: 'EP887',
			name: 'Educação Não Formal',
			ementa: 'A disciplina objetiva fornecer aos alunos uma visão teórico-prática sobre modos, formas e processos educacionais existentes na sociedade e que possa contribuir para a formação crítica do profissional da área da Educação, especialmente em campos que dizem respeito à formação para a cidadania do indivíduo e à atuação de grupos socioculturais.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4092D9',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D9D9',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9BB40',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7B40D9',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940BB',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D94086',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9ED940',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7BD940',
			obligatory: false
		}
	}
};

export default catalogue;
