const catalogue = {
	totalCredits: 180,
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
			subjects: ['HZ431', 'HZ460', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['HZ465', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HZ466', 'HZ631', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'HZ467', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['HZ468', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HZ365', 'HZ562', 'HZ565', 'HZ566', 'HZ567', 'HZ568', 'HZ569', 'HZ666', 'HZ667', 'HZ668', 'HZ669', 'HZ766', 'HZ767', 'HZ768', 'HZ769', 'HZ865', 'HZ866', 'HZ867', 'HZ868', 'HZ869', 'HZ962'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'HG---', 'HH---', 'HZ---', 'LA---'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
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
			color: '#40D99A',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objeto da Ciência Política. O poder político. A ação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4076D9',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D97640',
			obligatory: true
		},
		'HZ161': {
			code: 'HZ161',
			name: 'Antropologia I: Introdução à Antropologia Social',
			ementa: 'As noções de alteridade e etnocentrismo. A concepção relativista da diversidade cultural e a sua crítica. A formação de representações e identidades em encontros interculturais nas obras de filósofos, viajantes, missionários e antropólogos. Relações raciais e interétnicas em contextos contemporâneos. Os trabalhos serão desenvolvidos como uma introdução ao método etnográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D98840',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'Rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985. Exame do debate existente na bibliografia sobre esses temas. As transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#4076D9',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D0D9',
			obligatory: true
		},
		'HZ263': {
			code: 'HZ263',
			name: 'Antropologia II - Cultura e Práticas Sociais',
			ementa: 'A construção do conceito de cultura na antropologia, focalizando: (1) a crítica às explicações deterministas (de base biológica, ambiental e material); (2) o debate em torno das teorias sobre a origem social do simbolismo e as teses sobre a constituição simbólica do social; (3) a crítica da noção de cultura como superestrutura e as teorias sobre as práticas sociais como ação simbólica. O curso fará referência constante aos estudos etnográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ161'],
			color: '#D98840',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D94076',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'Fundamentos teóricos da análise do Estado contemporâneo. A relação entre o Estado e a sociedade civil. Estado e classes sociais. A questão da burocracia. As estruturas do Estado moderno.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#4076D9',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D988',
			obligatory: true
		},
		'HZ363': {
			code: 'HZ363',
			name: 'Antropologia III: Estrutura e Práticas Sociais',
			ementa: 'A construção e os principais debates em torno dos conceitos de estrutura, organização social, ação, processo e história na teoria antropológica. Serão focalizadas situações coloniais e pós-coloniais. Os debates terão por base estudos etnográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ263'],
			color: '#D98840',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#9A40D9',
			obligatory: true
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ161'],
			color: '#A67C73',
			obligatory: true
		},
		'HZ460': {
			code: 'HZ460',
			name: 'Pesquisa Antropológica',
			ementa: 'O curso tem como objetivo fornecer instrumentos teóricos e práticos sobre a pesquisa de campo. Técnicas de pesquisas, observação participante, entrevistas, histórias de vida, o uso dos microcomputadores, as diferentes perspectivas de interpretacão antropológica, as relações entre sujeito e objeto de pesquisa. A bibliografia incluirá textos clássicos sobre pesquisa de campo e textos contemporâneos que fazem uma leitura crítica de seus objetivos e resultados. O curso contemplará a possibilidade de realização de uma experiência de pesquisa de campo e a elaboração de um breve projeto de pesquisa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#6440D9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'HZ465': {
			code: 'HZ465',
			name: 'Antropologia no Brasil',
			ementa: 'Curso que visa familiarizar os estudantes com as tradições da disciplina no Brasil, no contexto mais amplo da história da antropologia. A bibliografia incluirá análises dos aspectos institucionais - museus, centros e faculdades onde os antropólogos desenvolveram seus trabalhos de pesquisa e ensino metodológicos e teóricos dessa história.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#64D940',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#D940D0',
			obligatory: true
		},
		'HZ466': {
			code: 'HZ466',
			name: 'Mito e Ritual',
			ementa: 'Curso que aborda as principais vertentes teóricas, racionalistas e não racionalistas, na análise antropológica do mito e do rito.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D99A40',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D0D940',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#AC40D9',
			obligatory: true
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ161'],
			color: '#8D937D',
			obligatory: true
		},
		'HZ467': {
			code: 'HZ467',
			name: 'Antropologia e Estudos de Parentesco',
			ementa: 'A emergência dos estudos de parentesco na disciplina antropológica. A teoria dos grupos de unifiliação e a teoria da aliança de casamento. Questões clássicas e recentes, modelos e métodos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94052',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#5240D9',
			obligatory: true
		},
		'HZ468': {
			code: 'HZ468',
			name: 'Antropologia e Teoria Social Contemporânea',
			ementa: 'Principais tendências contemporâneas da antropologia revisitadas na tradição antropológica, procurando rediscutir a etnografia e as formas de inserção da antropologia na teoria social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D940AC',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#D9D040',
			obligatory: true
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8840D9',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40ACD9',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D94064',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940BE',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#ACD940',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40BED9',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D952',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4064D9',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#52D940',
			obligatory: false
		},
		'HZ365': {
			code: 'HZ365',
			name: 'Antropologia da Religião',
			ementa: 'O estudo da diversidade dos sistemas e experiências religiosas em diferentes tipos de sociedades, incluída aí a atualidade das nossas próprias culturas. O curso envolve também a leitura crítica de Teorias Antropológicas da Religião e o seu diálogo com teorias de Ciências Afins.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D940',
			obligatory: false
		},
		'HZ562': {
			code: 'HZ562',
			name: 'Antropologia Econômica',
			ementa: 'O curso deve introduzir o objeto da definição da Antropologia Econômica, seus programas de pesquisa, seus temas, seus métodos e suas aplicações. Abordará a comparação entre sistemas econômicos e aspectos da economia informal moderna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D964',
			obligatory: false
		},
		'HZ565': {
			code: 'HZ565',
			name: 'Antropologia Urbana',
			ementa: 'Esta disciplina visa analisar a formação de uma tradição de estudos sobre \"fenômenos urbanos\" nas ciências sociais e, em particular, na antropologia, a partir das experiências sociais da modernidade. A dicotomia rural/urbano. De uma ciência social do urbano aos estudos sociológicos nas cidades.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9AD940',
			obligatory: false
		},
		'HZ566': {
			code: 'HZ566',
			name: 'Antropologia e Meio Ambiente',
			ementa: 'A relação Natureza/Cultura, importante na Antropologia, atualiza-se neste curso através da investigação e da leitura teórica da relação Meio Ambiente/Sociedade. Pretendendo ser algo mais amplo e denso do que uma reflexão da questão ambiental, o curso almeja trazer algumas das mais importantes interpretações da Antropologia a respeito de seus fundamentos culturais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9AC40',
			obligatory: false
		},
		'HZ567': {
			code: 'HZ567',
			name: 'Antropologia e os Estudos de Gênero',
			ementa: 'Este curso pretende situar o campo conceitual e as possibilidades de pesquisa abertas pelos estudos de gênero. Nas discussões das diferentes perspectivas deste estudo estarão incluídos temas como desnaturalização das diferenças sexuais, o caráter relacional das definições de gênero e a importância destas perspectivas para as teorias sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9BE40',
			obligatory: false
		},
		'HZ568': {
			code: 'HZ568',
			name: 'Cidades: Espaços e Territórios',
			ementa: 'Introdução ao estudo transdisciplinar de processos sociais nas assim chamadas megacidades (ou cidades globais). Serão focalizados temas como: (1) a ampliação e aceleração dos fluxos (de capital, de pessoas e de signos) constitutivos dos processos de globalização da economia e a formação de uma nova geografia de \"centros\" e \"margens\": a crise da noção de \"cidade\"; (2) a flexibilização dos referenciais de tempo/espaço nas relações entre \"lugar\" e processos sociais; (3) \"lugares\" e \"não lugares\": marcos culturais, políticas patrimoniais e ambiente urbano.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9409A',
			obligatory: false
		},
		'HZ569': {
			code: 'HZ569',
			name: 'Cultura e Poder',
			ementa: 'A disciplina indaga sobre as articulações simbólicas da política nos contextos urbano-industriais e pós-industriais. O ponto de partida é a crítica feita pelos estudos culturais à teoria marxista, com base, principalmente, na obra de R. Williams e E. P. Thompson. Serão focalizados temas que permitam explorar aspectos da experiência social na alta modernidade tais como: reflexividade e vida cotidiana; a comunicação de massa e o consumo; globalização e a formação de identidades, tradições e comunidades imaginadas; esfera pública e vida privada; nação, diásporas e cidadania.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'HZ666': {
			code: 'HZ666',
			name: 'Identidades',
			ementa: 'Neste curso uma das questões privilegiadas é a do estatuto conceitual da noção de identidade e seu termo par, o de diferença. Serão discutidas algumas das teorias sobre identidade social, bem como várias diferenças e contextos culturais e políticos em que as identidades se formulam, se fixam e se dissolvem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94088',
			obligatory: false
		},
		'HZ667': {
			code: 'HZ667',
			name: 'Mídia, Cultura e História',
			ementa: 'Este curso tem como objetivo introduzir os alunos ao estudo antropológico da cultura e da mídia na sociedade brasileira contemporânea. Ênfase especial será dada tanto às questões relacionadas à visualização da antropologia (especialmente à dimensão imagética da pesquisa etnográfica) quanto à emergente \"antropologia do visual\".',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7640D9',
			obligatory: false
		},
		'HZ668': {
			code: 'HZ668',
			name: 'Etnologia das Populações Rurais',
			ementa: 'O curso pretende fornecer instrumentos teóricos e metodológicos necessários à prática da investigação antropológica no mundo rural. Tem por objetivo familiarizar os estudantes com os conceitos básicos, para o estudo das populações rurais e, a partir de uma perspectiva comparativa, iniciá-los nos estudos de caráter mais etnográfico acerca destas populações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#88D940',
			obligatory: false
		},
		'HZ669': {
			code: 'HZ669',
			name: 'Etnologia Sul Americana',
			ementa: 'Curso que apresenta uma visão geral e introdutória das sociedades indígenas nas terras baixas sul-americanas. Em perspectiva comparativa, aborda áreas etnográficas com ênfase para estrutura social, bem como os debates teóricos que suscitam no campo americanista.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#BED940',
			obligatory: false
		},
		'HZ766': {
			code: 'HZ766',
			name: 'Introdução à Etnologia',
			ementa: 'Panorama da etnologia das terras baixas da América do Sul. Questões Clássicas e Atuais. Teorias e Métodos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9D0',
			obligatory: false
		},
		'HZ767': {
			code: 'HZ767',
			name: 'Itinerários Intelectuais e Etnografia do Saber',
			ementa: 'Abordagem antropológica dos sistemas de conhecimento, inclusive científicos e de biografias intelectuais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D040D9',
			obligatory: false
		},
		'HZ768': {
			code: 'HZ768',
			name: 'Nação e Globalização',
			ementa: 'Discussões de processos de construção das nações contemporâneas. Também será examinada, com argumentos etnográficos, a tensão entre o local, o nacional e a globalização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D95240',
			obligatory: false
		},
		'HZ769': {
			code: 'HZ769',
			name: 'Etnicidade e Racismo',
			ementa: 'As diversas versões de racismo, as várias noções e conotações de raça; a discussão teórica sobre etnia e a crescente importância das etnicidades nos processos sociais contemporâneos são algumas das questões que serão tratadas neste curso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#BE40D9',
			obligatory: false
		},
		'HZ865': {
			code: 'HZ865',
			name: 'Antropologia e Demografia',
			ementa: 'Introdução à problemática demográfica, explorando as possibilidades de diálogo e colaboração entre a Demografia e a Antropologia. Serão tratadas algumas questões gerais de cada uma das disciplinas e examinados alguns temas particularmente suscetíveis desta colaboração interdisciplinar, através de estudos concretos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D96440',
			obligatory: false
		},
		'HZ866': {
			code: 'HZ866',
			name: 'Antropologia e os Grupos de Idade',
			ementa: 'Discussão antropológica sobre as categorias e os grupos de idade. Tendo como base contextos etnográficos distintos, o curso problematizará os estudos sobre grupos de idade nas sociedades urbanas contemporâneas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4052D9',
			obligatory: false
		},
		'HZ867': {
			code: 'HZ867',
			name: 'Antropologia das Organizações',
			ementa: 'Esta disciplina tem como objetivo colocar em evidência a importância da antropologia e da metodologia etnográfica para a compreensão das organizações modernas (especialmente as empresariais).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4088D9',
			obligatory: false
		},
		'HZ868': {
			code: 'HZ868',
			name: 'Sociedades Indígenas no Brasil Contemporâneo',
			ementa: 'Este curso tematiza a sociodiversidade dos povos indígenas no Brasil Contemporâneo, enfocando particularmente questões etnológicas, históricas e políticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9BE',
			obligatory: false
		},
		'HZ869': {
			code: 'HZ869',
			name: 'Estudos de Família',
			ementa: 'Visa oferecer uma visão geral das pesquisas a respeito das relações familiares, sublinhando a importância dos debates entre a história, a demografia e a antropologia na constituição deste campo de estudos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9AC',
			obligatory: false
		},
		'HZ962': {
			code: 'HZ962',
			name: 'Antropologia Política',
			ementa: 'O estudo dos clássicos deverá mostrar como a disciplina, empregando os métodos da etnografia, ocupou-se inicialmente das estruturas de poder em sociedades sem estado, interessando-se depois pela mudança e conflito. O curso tratará ainda de desenvolvimentos mais recentes, abordando as relações de poder nos interstícios da sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#409AD9',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#76D940',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D976',
			obligatory: false
		}
	}
};

export default catalogue;
