const catalogue = {
	totalCredits: 168,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ141', 'HZ160', 'HZ158']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ258', 'HZ248', 'HZ260', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['ELET03', 'HZ345', 'HZ360', 'HZ358']
		},
		'sem-4': {
			id: '4',
			subjects: ['HZ447', 'HZ431', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['HZ546', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HZ631', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['HZ140', 'HZ240', 'HZ249', 'HZ340', 'HZ346', 'HZ347', 'HZ348', 'HZ440', 'HZ448', 'HZ449', 'HZ540', 'HZ547', 'HZ548', 'HZ549', 'HZ640', 'HZ647', 'HZ740', 'HZ747', 'HZ840', 'HZ847', 'HZ940', 'HZ942', 'HZ943', 'HZ947', 'HZ948', 'HZ949'],
		},
		'elet-2': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'HG---', 'HH---', 'HZ---', 'LA---'],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-4': {
			credits: 30,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'GF---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'TL---'],
		},
		'elet-5': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 6,
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
			color: '#46B98A',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender elementos fundamentais da Ciência Política: o objeto da Ciência Política; o poder político; a ação política. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#466BB9',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9B446',
			obligatory: true
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de natureza e cultura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8FB946',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender as rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985; o debate existente na bibliografia sobre esses temas; as transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#466BB9',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B95646',
			obligatory: true
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de troca, sociedade e estrutura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160'],
			color: '#8FB946',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender os fundamentos teóricos da análise do Estado contemporâneo; a relação entre o Estado e a sociedade civil; a relação entre Estado e classes sociais; a questão da burocracia; as estruturas do Estado moderno. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#466BB9',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B99446',
			obligatory: true
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de etnografias antropológicas recuperando o arco de discussões sobre o fazer etnográfico. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260'],
			color: '#8FB946',
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
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social. Promover o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160'],
			color: '#859D6C',
			obligatory: true
		},
		'HZ447': {
			code: 'HZ447',
			name: 'Política IV - Tradições do Pensamento Político',
			ementa: 'A disciplina trata de quatro tradições do pensamento político moderno e contemporâneo: o absolutismo monárquico, o liberalismo, o republicanismo e o socialismo. A disciplina visa propiciar tanto a formação nos autores fundamentais do pensamento político moderno, quanto a introdução aos debates atuais em teoria política, possibilitando aos estudantes uma iniciação à pesquisa nessa área.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#6046B9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ546': {
			code: 'HZ546',
			name: 'Política V - Teoria e Pesquisa em Ciência Política',
			ementa: 'Este curso tem como supostos os desdobramentos da relação entre teoria e pesquisa, a afirmação de que teoria e empiria não são dissociadas, e a idéia de que a escolha teórica está associada à escolha de métodos para compreensão do objetivo de estudo selecionado. Apresentação de abordagens da Ciência Política, por exemplo: correntes do institucionalismo, escolha racional, marxismo, pluralismo, cultura política, etc. Apresentação de métodos associados à pesquisa qualitativa e quantitativa, coleta de dados, processamento e análise.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#60B946',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946B4',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160'],
			color: '#75A474',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B99A',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#467AB9',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9F46B9',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46A9B9',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9FB946',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94685',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94665',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B96B',
			obligatory: false
		},
		'HZ140': {
			code: 'HZ140',
			name: 'Partidos Políticos',
			ementa: 'Esse curso percorre, na sua primeira parte, os três mais importantes enfoques teóricos sobre partidos políticos - o marxista, o organizacional e institucional. Na segunda parte, trata de sistemas partidários, dando enfoque ao funcionamento dos partidos em sistemas competitivos e não competitivos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#464BB9',
			obligatory: false
		},
		'HZ240': {
			code: 'HZ240',
			name: 'Democracia e Cidadania',
			ementa: 'Paradigmas de análise sobre ação coletiva e movimentos sociais nos Estados Unidos e Europa e seus desdobramentos mais recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#468AB9',
			obligatory: false
		},
		'HZ249': {
			code: 'HZ249',
			name: 'Pensamento Político: Debates Contemporâneos',
			ementa: 'O objetivo do curso é apresentar tendências contemporâneas do pensamento político e debates teóricos que marcaram o campo da ciência política nas últimas décadas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#466BB9',
			obligatory: false
		},
		'HZ340': {
			code: 'HZ340',
			name: 'Política e Direito I',
			ementa: 'A disciplina tem o objetivo de introduzir o estudante de ciências sociais nos temas e debates no campo das relações entre política e direito. O curso tem uma parte fixa com o objetivo de introduzir os estudantes aos autores e temas fundamentais no campo, e uma parte variável, na qual diferentes temas serão tratados, com o objetivo de propiciar aos estudantes o conhecimento de temas, conceitos e técnicas de pesquisa atuais no campo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B98546',
			obligatory: false
		},
		'HZ346': {
			code: 'HZ346',
			name: 'Política e Direito II',
			ementa: 'A disciplina tem o objetivo de introduzir o estudante de ciências sociais nos temas e debates no campo das relações entre política e direito. O curso tem uma parte fixa com o objetivo de introduzir os estudantes aos autores e temas fundamentais no campo, e uma parte variável, na qual diferentes temas serão tratados, com o objetivo de propiciar aos estudantes o conhecimento de temas, conceitos e técnicas de pesquisa atuais no campo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9A446',
			obligatory: false
		},
		'HZ347': {
			code: 'HZ347',
			name: 'Pensamento Político: Debates Contemporâneos II',
			ementa: 'O objetivo do curso é apresentar tendências contemporâneas do pensamento político e debates teóricos que marcaram o campo da ciência política nas últimas décadas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#466BB9',
			obligatory: false
		},
		'HZ348': {
			code: 'HZ348',
			name: 'Teorias da Ação Coletiva e Movimentos Sociais',
			ementa: 'Paradigmas de análise sobre ação coletiva e movimentos sociais nos Estados Unidos e Europa e seus desdobramentos mais recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946A4',
			obligatory: false
		},
		'HZ440': {
			code: 'HZ440',
			name: 'Trabalho e Sindicalismo',
			ementa: 'O conceito de trabalho. Transformações nas relações de trabalho. Formas de organização e representação de interesses dos trabalhadores. Formas de ação sindical. Desafios do sindicalismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B97A',
			obligatory: false
		},
		'HZ448': {
			code: 'HZ448',
			name: 'Teorias da Ação Coletiva e Movimentos Sociais II',
			ementa: 'Paradigmas de análise sobre ação coletiva e movimentos sociais nos Estados Unidos e Europa e seus desdobramentos mais recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9A9',
			obligatory: false
		},
		'HZ449': {
			code: 'HZ449',
			name: 'Partidos Políticos II',
			ementa: 'Esse curso percorre, na sua primeira parte, os três mais importantes enfoques teóricos sobre partidos políticos - o marxista, o organizacional e institucional. Na segunda parte, trata de sistemas partidários, dando enfoque ao funcionamento dos partidos em sistemas competitivos e não competitivos',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#469AB9',
			obligatory: false
		},
		'HZ540': {
			code: 'HZ540',
			name: 'Políticas Públicas',
			ementa: 'Introduzir a temática das políticas públicas com base nas experiências contemporâneas do Estado de Bem-Estar Social. Examinar as principais abordagens com relação à formulação, implementação, legitimação e avaliação das políticas públicas. Analisar o papel das políticas públicas em relação ao processo de formação da cidadania democrática e os desafios da gestão participativa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#80B946',
			obligatory: false
		},
		'HZ547': {
			code: 'HZ547',
			name: 'Democracia e Cidadania II',
			ementa: 'Paradigmas de análise sobre ação coletiva e movimentos sociais nos Estados Unidos e Europa e seus desdobramentos mais recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: false
		},
		'HZ548': {
			code: 'HZ548',
			name: 'Trabalho e Sindicalismo II',
			ementa: 'O conceito de trabalho. Transformações nas relações de trabalho. Formas de organização e representação de interesses dos trabalhadores. Formas de ação sindical. Desafios do sindicalismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94694',
			obligatory: false
		},
		'HZ549': {
			code: 'HZ549',
			name: 'Políticas Públicas II',
			ementa: 'Introduzir a temática das políticas públicas com base nas experiências contemporâneas do Estado de Bem-Estar Social. Examinar as principais abordagens com relação à formulação, implementação, legitimação e avaliação das políticas públicas. Analisar o papel das políticas públicas em relação ao processo de formação da cidadania democrática e os desafios da gestão participativa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#AE46B9',
			obligatory: false
		},
		'HZ640': {
			code: 'HZ640',
			name: 'Pensamento Político Brasileiro',
			ementa: 'Introdução ao estudo das principais linhagens do pensamento político no Brasil nos séculos XIX e XX, como: o liberalismo, o conservadorismo, o autoritarismo, o marxismo, o desenvolvimentismo, o nacionalismo etc. A disciplina procura articular a análise de obras clássicas e seu impacto na compreensão dos períodos críticos da formação do estado no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94675',
			obligatory: false
		},
		'HZ647': {
			code: 'HZ647',
			name: 'Pensamento Político Brasileiro II',
			ementa: 'Introdução ao estudo das principais linhagens do pensamento político no Brasil nos séculos XIX e XX, como: o liberalismo, o conservadorismo, o autoritarismo, o marxismo, o desenvolvimentismo, o nacionalismo etc. A disciplina procura articular a análise de obras clássicas e seu impacto na compreensão dos períodos críticos da formação do estado no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7046B9',
			obligatory: false
		},
		'HZ740': {
			code: 'HZ740',
			name: 'Regimes e Sistemas Políticos Comparados',
			ementa: 'A disciplina tem como objetivo desenvolver conceitos e reflexões necessários à compreensão do processo de construção dos estados modernos. Para isto enfatizará, de uma perspectiva histórica e teórica, a relação entre o desenvolvimento dos sistemas políticos contemporâneos e os principais tipos de regime político. Nesta perspectiva comparada, ênfase especial será atribuída ao sistema político brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#AEB946',
			obligatory: false
		},
		'HZ747': {
			code: 'HZ747',
			name: 'Regimes e Sistemas Políticos Comparados II',
			ementa: 'A disciplina tem como objetivo desenvolver conceitos e reflexões necessários à compreensão do processo de construção dos estados modernos. Para isto enfatizará, de uma perspectiva histórica e teórica, a relação entre o desenvolvimento dos sistemas políticos contemporâneos e os principais tipos de regime político. Nesta perspectiva comparada, ênfase especial será atribuída ao sistema político brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B96546',
			obligatory: false
		},
		'HZ840': {
			code: 'HZ840',
			name: 'Estado e Reformas Econômicas no Capitalismo Contemporâneo',
			ementa: 'O papel do estado no capitalismo contemporâneo. Estado e classes sociais. Estado e relações internacionais. O debate sobre globalização e o declínio do Estado. As reformas econômicas neoliberais - com especial destaque para o Brasil. As mudanças na sociedade e na economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B97546',
			obligatory: false
		},
		'HZ847': {
			code: 'HZ847',
			name: 'Estado e Reformas Econômicas no Capitalismo Contemporâneo II',
			ementa: 'O papel do estado no capitalismo contemporâneo. Estado e classes sociais. Estado e relações internacionais. O debate sobre globalização e o declínio do Estado. As reformas econômicas neoliberais - com especial destaque para o Brasil. As mudanças na sociedade e na economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B95B',
			obligatory: false
		},
		'HZ940': {
			code: 'HZ940',
			name: 'Estado, Nação e Nacionalismo',
			ementa: 'A teoria do Estado burguês: o Estado no modo de produção capitalista. O Estado do capitalismo monopolista de Estado. O Estado dependente na era de capitalismo mundial. O Estado de transição.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#465BB9',
			obligatory: false
		},
		'HZ942': {
			code: 'HZ942',
			name: 'Relações Internacionais',
			ementa: 'Introdução às relações internacionais. Noções básicas; algumas abordagens teóricas. Evolução do sistema internacional, do pós-guerra aos dias de hoje, com ênfase na América Latina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5146B9',
			obligatory: false
		},
		'HZ943': {
			code: 'HZ943',
			name: 'Relações Internacionais II',
			ementa: 'Introdução às relações internacionais. Noções básicas; algumas abordagens teóricas. Evolução do sistema internacional, do pós-guerra aos dias de hoje, com ênfase na América Latina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B94B',
			obligatory: false
		},
		'HZ947': {
			code: 'HZ947',
			name: 'Estado, Nação e Nacionalismo II',
			ementa: 'A teoria do Estado burguês: o Estado no modo de produção capitalista. O Estado do capitalismo monopolista de Estado. O Estado dependente na era de capitalismo mundial. O Estado de transição.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#8046B9',
			obligatory: false
		},
		'HZ948': {
			code: 'HZ948',
			name: 'Estudos Legislativos I',
			ementa: 'Essa matéria pretende oferecer um panorama sobre a área de Estudos Legislativos, dando ênfase para trabalhos que procuram conectar arena legislativa e arena eleitoral e tiveram grande impacto no campo no debate internacional e nacional sobre estudos legislativos. Serão abordados 4 grandes temas, a saber: os modelos de ação parlamentar, teorias distributivistas, informacional e partidária; o papel da centralização institucional no comportamento dos legisladores (segredo eficiente); a controvérsia sobre o papel dos partidos políticos na condução dos trabalhos legislativos; e a formação de coalizões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#8F46B9',
			obligatory: false
		},
		'HZ949': {
			code: 'HZ949',
			name: 'Estudos Legislativos II',
			ementa: 'Essa matéria pretende oferecer um panorama sobre a área de Estudos Legislativos, dando ênfase para trabalhos que procuram conectar arena legislativa e arena eleitoral e tiveram grande impacto no campo no debate internacional e nacional sobre estudos legislativos. Serão abordados 4 grandes temas, a saber: os modelos de ação parlamentar, teorias distributivistas, informacional e partidária; o papel da centralização institucional no comportamento dos legisladores (segredo eficiente); a controvérsia sobre o papel dos partidos políticos na condução dos trabalhos legislativos; e a formação de coalizões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94656',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#51B946',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#70B946',
			obligatory: false
		}
	}
};

export default catalogue;
