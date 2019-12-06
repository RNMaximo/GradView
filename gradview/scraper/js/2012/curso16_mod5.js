const catalogue = {
	totalCredits: 196,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ141', 'HZ158', 'HZ161']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ248', 'HZ258', 'HZ263', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HZ345', 'HZ358', 'HZ363', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HZ431', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL874', 'HZ631', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'HZ103', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['HZ104', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HZ---'],
		},
		'elet-2': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL211', 'EL485', 'EL511', 'EL683'],
		},
		'elet-3': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['EP107', 'EP110', 'EP128', 'EP129', 'EP130', 'EP142', 'EP144', 'EP146', 'EP152', 'EP158', 'EP162', 'EP164', 'EP210', 'EP226', 'EP230', 'EP315', 'EP316', 'EP317', 'EP330', 'EP340', 'EP347', 'EP348', 'EP372', 'EP377', 'EP412', 'EP445', 'EP471', 'EP472', 'EP529', 'EP566', 'EP567', 'EP568', 'EP810', 'EP811', 'EP812', 'EP813', 'EP814', 'EP887', 'EP910', 'EP914'],
		},
		'elet-4': {
			credits: 36,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'GF---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'TL---'],
		},
		'elet-5': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HH---'],
		},
		'elet-7': {
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
			color: '#7340D9',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objeto da Ciência Política. O poder político. A ação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94099',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D959',
			obligatory: true
		},
		'HZ161': {
			code: 'HZ161',
			name: 'Antropologia I: Introdução à Antropologia Social',
			ementa: 'As noções de alteridade e etnocentrismo. A concepção relativista da diversidade cultural e a sua crítica. A formação de representações e identidades em encontros interculturais nas obras de filósofos, viajantes, missionários e antropólogos. Relações raciais e interétnicas em contextos contemporâneos. Os trabalhos serão desenvolvidos como uma introdução ao método etnográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#A6D940',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'Rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985. Exame do debate existente na bibliografia sobre esses temas. As transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#D94099',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940BF',
			obligatory: true
		},
		'HZ263': {
			code: 'HZ263',
			name: 'Antropologia II - Cultura e Práticas Sociais',
			ementa: 'A construção do conceito de cultura na antropologia, focalizando: (1) a crítica às explicações deterministas (de base biológica, ambiental e material); (2) o debate em torno das teorias sobre a origem social do simbolismo e as teses sobre a constituição simbólica do social; (3) a crítica da noção de cultura como superestrutura e as teorias sobre as práticas sociais como ação simbólica. O curso fará referência constante aos estudos etnográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ161'],
			color: '#A6D940',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'Fundamentos teóricos da análise do Estado contemporâneo. A relação entre o Estado e a sociedade civil. Estado e classes sociais. A questão da burocracia. As estruturas do Estado moderno.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#D94099',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4099D9',
			obligatory: true
		},
		'HZ363': {
			code: 'HZ363',
			name: 'Antropologia III: Estrutura e Práticas Sociais',
			ementa: 'A construção e os principais debates em torno dos conceitos de estrutura, organização social, ação, processo e história na teoria antropológica. Serão focalizadas situações coloniais e pós-coloniais. Os debates terão por base estudos etnográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ263'],
			color: '#A6D940',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#40B3D9',
			obligatory: true
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ161'],
			color: '#95A666',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#D95940',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#40CCD9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#40D980',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#40CCD9',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A640D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D9BF40',
			obligatory: true
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ161'],
			color: '#8D8D83',
			obligatory: true
		},
		'HZ103': {
			code: 'HZ103',
			name: 'Estágio Supervisionado em Ciências Sociais I',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450'],
			color: '#D940D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#7FD940',
			obligatory: true
		},
		'HZ104': {
			code: 'HZ104',
			name: 'Estágio Supervisionado em Ciências Sociais II',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HZ103'],
			color: '#D940D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#D98040',
			obligatory: true
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B340D9',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D966',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D94066',
			obligatory: false
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'Programa a ser definido semestralmente pelo DECISAE sobre tópicos especiais em Ciências Sociais e Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9D9',
			obligatory: false
		},
		'EL211': {
			code: 'EL211',
			name: 'Política Educacional: Estrutura e Funcionamento da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos internacionais e legislação de ensino; estrutura e funcionamento da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D98C',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Estudo das transformações históricas da sociedade e da educação brasileira, com ênfase nas principais concepções filosóficas presentes no pensamento educacional brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4D40D9',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4066D9',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#CCD940',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40A6D9',
			obligatory: false
		},
		'EP107': {
			code: 'EP107',
			name: 'Introdução à Pedagogia - Organização do Trabalho Pedagógico',
			ementa: 'O objetivo das ciências da educação. O problema da unidade, especificidade e autonomia das ciências da educação. A educação como ponto de partida e de chegada dos estudos e das reflexões dos cientistas. A contribuição das ciências para a explicação e compreensão da educação. Contextualização histórica da Pedagogia no Brasil - o curso de Pedagogia da Unicamp.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#408CD9',
			obligatory: false
		},
		'EP110': {
			code: 'EP110',
			name: 'História da Educação I',
			ementa: 'Introdução à História da Educação. Bases epistemológicas, metodológicas e teóricas da História e História da Educação. Fundamentos da História da educação e da pedagogia: na antiguidade, na modernidade e na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94D40',
			obligatory: false
		},
		'EP128': {
			code: 'EP128',
			name: 'Psicologia I',
			ementa: 'Contribuições das perspectivas teóricas comportamental e psicanalística para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas aplicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4059D9',
			obligatory: false
		},
		'EP129': {
			code: 'EP129',
			name: 'Psicologia II',
			ementa: 'Contribuições das perspectivas teóricas cognitiva e histórico-cultural para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas implicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940',
			obligatory: false
		},
		'EP130': {
			code: 'EP130',
			name: 'Filosofia da Educação I',
			ementa: 'Introdução à filosofia mediante sua caracterização em face de outras formas de conhecimento. Estudo de filósofos antigos que contribuíram significativamente para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental, entre eles: Sócrates, os sofistas, Platão e Aristóteles.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B3',
			obligatory: false
		},
		'EP142': {
			code: 'EP142',
			name: 'Educação e Antropologia Cultural',
			ementa: 'O diálogo teórico entre Antropologia, Educação e Pedagogia busca compreender as formas de construção dos modos de viver humanos e sua realidade, nas instituições básicas da vida social, entre elas: a família, a escola, o trabalho e outras. Busca compreender a atividade pedagógica através da cultura do ambiente histórico, político e sociologicamente determinado. Discute a dimensão da Antropologia como ciência e alguns de seus conceitos, entre eles, Diferença, Cultura, Diversidade e Alteridade referidos aos diferentes espaços de ação e de intervenção da prática educativa e da prática científica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98C40',
			obligatory: false
		},
		'EP144': {
			code: 'EP144',
			name: 'Metodologia da Pesquisa em Ciências da Educação I',
			ementa: 'Introdução às questões epistemológicas, teóricas, técnicas e tecnológicas da produção científica na educação: os problemas contemporâneos da ciência, teorias e modos e linguagens da pesquisa. Prepara o aluno para, na área da educação, apreender o processo de produção do conhecimento, ler, avaliar e criticar pesquisas e formular projetos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#99D940',
			obligatory: false
		},
		'EP146': {
			code: 'EP146',
			name: 'Educação e Tecnologias',
			ementa: 'Abordagem interdisciplinar, propondo-se o tratamento das tecnologias de comunicação e informação no ambiente educativo. Os alunos vivenciarão situações práticas que os levarão a refletir criticamente sobre o uso de tecnologias na educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A640',
			obligatory: false
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94073',
			obligatory: false
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir os(as) alunos(as) às diferentes linguagens corporais e/ou artísticas em suas relações com o processo educacional.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#8040D9',
			obligatory: false
		},
		'EP162': {
			code: 'EP162',
			name: 'Escola e Currículo',
			ementa: 'Determinações histórica, cultural, epistemológica, social e ideológica do currículo; paradigmas técnico, prático e crítico e suas implicações para o processo de desenvolvimento curricular; pós-modernidade e suas implicações para o currículo escolar; perspectivas construtivista, pós-construtivista e sociointeracionista do currículo escolar; pressupostos sociofilosóficos de propostas curriculares de diferentes sistemas de educação, níveis de ensino e escolas; o currículo no cotidiano da escola pública.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B3D940',
			obligatory: false
		},
		'EP164': {
			code: 'EP164',
			name: 'Organização do Trabalho Pedagógico e Gestão Escolar',
			ementa: 'Fundamentos teóricos da Administração. Teorias da Administração e Gestão Educacional. Escola, Gestão e Projeto Político da escola. A organização do trabalho escolar: linguagem, tempo, espaço. Indivíduo e Organização.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#404CD9',
			obligatory: false
		},
		'EP210': {
			code: 'EP210',
			name: 'História da Educação II',
			ementa: 'A disciplina história da educação no Brasil. História da educação no Brasil no período colonial e no Império.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99940',
			obligatory: false
		},
		'EP226': {
			code: 'EP226',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da Psicologia para a análise de questões relativas ao contexto educativo com base em pesquisas e relatos de experiências.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D973',
			obligatory: false
		},
		'EP230': {
			code: 'EP230',
			name: 'Filosofia da Educação II',
			ementa: 'Estudo dos filósofos e/ou correntes filosóficas medievais e modernas que mais significativamente contribuiram para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental: a patrística e a escolástica, o racionalismo, o empirismo, o iluminismo Kantiano e a concepção educacional de Rousseau.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BFD940',
			obligatory: false
		},
		'EP315': {
			code: 'EP315',
			name: 'Pesquisa e Prática Pedagógica I',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#4073D9',
			obligatory: false
		},
		'EP316': {
			code: 'EP316',
			name: 'Pesquisa e Prática Pedagógica II',
			ementa: 'Estudo das questões ligadas à educação e à escola, a patir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#59D940',
			obligatory: false
		},
		'EP317': {
			code: 'EP317',
			name: 'Pesquisa e Prática Pedagógica III',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educativas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#8C40D9',
			obligatory: false
		},
		'EP330': {
			code: 'EP330',
			name: 'Filosofia da Educação III',
			ementa: 'Estudo de filósofos e/ou correntes filosóficas contemporâneos que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram fundamentos filosóficos da educação ocidental, inclluindo as concepções positivistas, marxistas e as teorias críticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9BF',
			obligatory: false
		},
		'EP340': {
			code: 'EP340',
			name: 'Sociologia da Educação I',
			ementa: 'Interpreta as relações entre educação e sociedade e educação e sociologia. Dedica-se ao estudo das concepções teóricas sobre a educação no discurso dos autores clássicos das Ciências Sociais (Durkheim, Weber, Marx).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9A6',
			obligatory: false
		},
		'EP347': {
			code: 'EP347',
			name: 'Educação, Cultura e Linguagens',
			ementa: 'Estudos sobre as diferentes linguagens verbais (fala e escrita), visuais (artes plásticas) e audiovisuais (cinema e televisão) que dão forma à Educação cultural e escolar,ao imaginário e à inteligência contemporâneas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97340',
			obligatory: false
		},
		'EP348': {
			code: 'EP348',
			name: 'Educação Especial e Inclusão',
			ementa: 'O acesso ao conhecimento e aos ambientes sociais e escolares de alunos com deficiência e altas habilidades, diante da responsabilidade de se garantir o direito à educação, como prescrição constitucional, no ensino básico e superior. A produção social da normalidade e da anormalidade. A constituição da educação especial e as propostas de escolarização das pessoas com deficiência, em diferentes momentos históricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: false
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94059',
			obligatory: false
		},
		'EP377': {
			code: 'EP377',
			name: 'Planejamento Educacional e Estágio Supervisionado em Gestão Escolar',
			ementa: 'Acompanhamento e análise do processo de planejamento escolar e educacional no âmbito da educação básica e suas modalidades, como fase decisiva da implementação da política e da administração da educação, levando em conta os fundamentos teóricos que embasam a organização da escola e do sistema educacional.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5940D9',
			obligatory: false
		},
		'EP412': {
			code: 'EP412',
			name: 'História da Educação III',
			ementa: 'Fundamentos históricos da educação e da escola no Brasil republicano. Problemas e Perspectivas da educação contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B340',
			obligatory: false
		},
		'EP445': {
			code: 'EP445',
			name: 'Sociologia da Educação II',
			ementa: 'Estudo da sociologia do conhecimento com o objetivo de,em termos teóricos, levar à compreensão da sociologia do currículo. Far-se-á o estudo das principais correntes sociológicas atuais, com destaque para discussão do currículo relacionado com os contextos socioculturais e com as novas tecnologias do setor produtivo. Serão analisadas as contribuições dessas teorias nas relações entre escola e sociedade e no conhecimento escolar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40BFD9',
			obligatory: false
		},
		'EP471': {
			code: 'EP471',
			name: 'Escola, Alfabetização e Culturas da Escrita',
			ementa: 'Conhecimentos da ordem da escrita, seus usos e objetos, discursos e lugares de produção, circulação, divulgação. Estudos sobre o ensino da língua escrita. Alfabetização e Letramento: conceitos e práticas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#66D940',
			obligatory: false
		},
		'EP472': {
			code: 'EP472',
			name: 'Escola e Conhecimento de História e Geografia',
			ementa: 'Estudos sobre as questões de tempo e de espaço, como produções socioculturais, intimamente articuladas, historicamente datadas e inscritas nas culturas escolares, bem como extraescolares.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D96640',
			obligatory: false
		},
		'EP529': {
			code: 'EP529',
			name: 'Educação de Surdos e Língua de Sinais',
			ementa: 'Conhecimentos introdutórios da libra e em libras, assumindo-a como elemento constitutivo do conhecimento do aluno sobre a surdez. Estudo sobre os parâmetros que caracterizam a libras como língua; relação língua e constituição do sujeito humano; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; duas abordagens pedagógicas no ensino da pessoa surda - a clínica e a bilíngue; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940A6',
			obligatory: false
		},
		'EP566': {
			code: 'EP566',
			name: 'Seminário de Integração Curricular I',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4DD940',
			obligatory: false
		},
		'EP567': {
			code: 'EP567',
			name: 'Seminário de Integração Curricular II',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CC40D9',
			obligatory: false
		},
		'EP568': {
			code: 'EP568',
			name: 'Seminário de Integração Curricular III',
			ementa: 'Organização conjunta - Coordenação de Pedagogia e alunos concluintes do Curso, de encontros e seminários que permitam a socialização e compartilhamento das experiências de estágio e dos trabalhos desenvolvidos no TCC.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9',
			obligatory: false
		},
		'EP810': {
			code: 'EP810',
			name: 'Seminário de Educação Especial',
			ementa: 'As distintas necessidades especiais e a produção de subjetividade. Perspectiva multidisciplinar para compreensão das necessidades especiais; formas de trabalho educativo e a atuação do pedagogo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#73D940',
			obligatory: false
		},
		'EP811': {
			code: 'EP811',
			name: 'Seminário de Pesquisa nas Áreas do Currículo Escolar',
			ementa: 'A disciplina propõe identificar, problematizar e analisar a literatura referente a pesquisas que focalizam a educação nas áreas do currículo escolar do Ensino Fundamental, visando contribuir à formação do professor dos anos iniciais da educação básica com um olhar crítico, reflexivo e propositivo para essa dimensão da pesquisa educacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9CC',
			obligatory: false
		},
		'EP812': {
			code: 'EP812',
			name: 'Seminário de Pesquisa em História da África',
			ementa: 'Dimensão histórica da escravidão. Aspectos da história dos negros na África e contextos da escravidão no Brasil. Reflexos nas condições materiais e simbólicas de existência do negro na atualidade e em sua inserção nos contextos educativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B3',
			obligatory: false
		},
		'EP813': {
			code: 'EP813',
			name: 'Seminário de Pesquisa em História Indígena',
			ementa: 'Estudos sobre a história indígena no Brasil. Análise das condições materiais e simbólicas de existência das populações indígenas na atualidade e em sua inserção nos contextos educativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D940',
			obligatory: false
		},
		'EP814': {
			code: 'EP814',
			name: 'Seminário de Educação, Cultura e Artes',
			ementa: 'Abordagem de temas que articulem a Arte, em suas diferentes linguagens (dança, música, teatro e artes visuais), e a Educação como produções culturais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9940D9',
			obligatory: false
		},
		'EP887': {
			code: 'EP887',
			name: 'Educação Não Formal',
			ementa: 'A disciplina objetiva fornecer aos alunos uma visão teórico-prática sobre modos, formas e processos educacionais existentes na sociedade que contribuem para a formação crítica do profissional da área da Educação, especialmente em campos que dizem respeito à formação para a cidadania do indivíduo e grupos socioculturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408C',
			obligatory: false
		},
		'EP910': {
			code: 'EP910',
			name: 'Estágio Supervisionado I - Gestão Escolar',
			ementa: 'Acompanhamento do processo de organização e administração da escola (educação básica e suas modalidades) enquanto unidade vinculada a um sistema de ensino, buscando o entendimento de seus problemas cotidianos e alternativas de solução baseadas nos fundamentos da política e da administração educacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#40D999',
			obligatory: false
		},
		'EP914': {
			code: 'EP914',
			name: 'Estágio Supervisionado V - Educação Não Formal',
			ementa: 'Fornecer conhecimento teórico-prático para diferenciar entre a educação não-formal, permitindo que: 1- percebam, que o campo de trabalho do pedagogo é mais amplo do que da escola formal; 2 - se conscientizem de que a educação não formal tem propósitos: a) reformadores, contribuindo para o funcionamento da sociedade, b) transformadores para formar uma atitude frente à realidade, buscando a transformação social, c) mesclando as duas atitudes ao realizar a educação; 3 - conhecendo propostas não formais de caráter formador.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#4080D9',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9407F',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9404C',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D94C',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9CC40',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#BF40D9',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940CC',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#6640D9',
			obligatory: false
		}
	}
};

export default catalogue;
