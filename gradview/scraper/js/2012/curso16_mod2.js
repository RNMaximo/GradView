const catalogue = {
	totalCredits: 178,
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
			subjects: ['HZ431', 'HZ447', 'ELET04']
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
			subjects: ['HZ140', 'HZ240', 'HZ249', 'HZ340', 'HZ346', 'HZ348', 'HZ440', 'HZ540', 'HZ640', 'HZ740', 'HZ840', 'HZ940', 'HZ942'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-4': {
			credits: 36,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-5': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-7': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
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
			color: '#D94097',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objeto da Ciência Política. O poder político. A ação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4097D9',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'HZ161': {
			code: 'HZ161',
			name: 'Antropologia I: Introdução à Antropologia Social',
			ementa: 'As noções de alteridade e etnocentrismo. A concepção relativista da diversidade cultural e a sua crítica. A formação de representações e identidades em encontros interculturais nas obras de filósofos, viajantes, missionários e antropólogos. Relações raciais e interétnicas em contextos contemporâneos. Os trabalhos serão desenvolvidos como uma introdução ao método etnográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9C3',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'Rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985. Exame do debate existente na bibliografia sobre esses temas. As transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#4097D9',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940C3',
			obligatory: true
		},
		'HZ263': {
			code: 'HZ263',
			name: 'Antropologia II - Cultura e Práticas Sociais',
			ementa: 'A construção do conceito de cultura na antropologia, focalizando: (1) a crítica às explicações deterministas (de base biológica, ambiental e material); (2) o debate em torno das teorias sobre a origem social do simbolismo e as teses sobre a constituição simbólica do social; (3) a crítica da noção de cultura como superestrutura e as teorias sobre as práticas sociais como ação simbólica. O curso fará referência constante aos estudos etnográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ161'],
			color: '#40D9C3',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'Fundamentos teóricos da análise do Estado contemporâneo. A relação entre o Estado e a sociedade civil. Estado e classes sociais. A questão da burocracia. As estruturas do Estado moderno.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#4097D9',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'HZ363': {
			code: 'HZ363',
			name: 'Antropologia III: Estrutura e Práticas Sociais',
			ementa: 'A construção e os principais debates em torno dos conceitos de estrutura, organização social, ação, processo e história na teoria antropológica. Serão focalizadas situações coloniais e pós-coloniais. Os debates terão por base estudos etnográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ263'],
			color: '#40D9C3',
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
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ161'],
			color: '#4EC39F',
			obligatory: true
		},
		'HZ447': {
			code: 'HZ447',
			name: 'Política IV - Tradições do Pensamento Político',
			ementa: 'A disciplina trata de quatro tradições do pensamento político moderno e contemporâneo: o absolutismo monárquico, o liberalismo, o republicanismo e o socialismo. A disciplina visa propiciar tanto a formação nos autores fundamentais do pensamento político moderno, quanto a introdução aos debates atuais em teoria política, possibilitando aos estudantes uma iniciação à pesquisa nessa área.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
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
			color: '#40D940',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#97D940',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
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
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ161'],
			color: '#71A29D',
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
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ140': {
			code: 'HZ140',
			name: 'Partidos Políticos',
			ementa: 'Esse curso percorre, na sua primeira parte, os três mais importantes enfoques teóricos sobre partidos políticos - o marxista, o organizacional e institucional. Na segunda parte, trata de sistemas partidários, dando enfoque ao funcionamento dos partidos em sistemas competitivos e não competitivos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D997',
			obligatory: false
		},
		'HZ240': {
			code: 'HZ240',
			name: 'Democracia e Cidadania',
			ementa: 'Paradigmas de análise sobre ação coletiva e movimentos sociais nos Estados Unidos e Europa e seus desdobramentos mais recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#C340D9',
			obligatory: false
		},
		'HZ249': {
			code: 'HZ249',
			name: 'Pensamento Político: Debates Contemporâneos',
			ementa: 'O objetivo do curso é apresentar tendências contemporâneas do pensamento político e debates teóricos que marcaram o campo da ciência política nas últimas décadas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ141'],
			color: '#4097D9',
			obligatory: false
		},
		'HZ340': {
			code: 'HZ340',
			name: 'Política e Direito I',
			ementa: 'A disciplina tem o objetivo de introduzir o estudante de ciências sociais nos temas e debates no campo das relações entre política e direito. O curso tem uma parte fixa com o objetivo de introduzir os estudantes aos autores e temas fundamentais no campo, e uma parte variável, na qual diferentes temas serão tratados, com o objetivo de propiciar aos estudantes o conhecimento de temas, conceitos e técnicas de pesquisa atuais no campo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4040D9',
			obligatory: false
		},
		'HZ346': {
			code: 'HZ346',
			name: 'Política e Direito II',
			ementa: 'A disciplina tem o objetivo de introduzir o estudante de ciências sociais nos temas e debates no campo das relações entre política e direito. O curso tem uma parte fixa com o objetivo de introduzir os estudantes aos autores e temas fundamentais no campo, e uma parte variável, na qual diferentes temas serão tratados, com o objetivo de propiciar aos estudantes o conhecimento de temas, conceitos e técnicas de pesquisa atuais no campo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#C3D940',
			obligatory: false
		},
		'HZ348': {
			code: 'HZ348',
			name: 'Teorias da Ação Coletiva e Movimentos Sociais',
			ementa: 'Paradigmas de análise sobre ação coletiva e movimentos sociais nos Estados Unidos e Europa e seus desdobramentos mais recentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D96B40',
			obligatory: false
		},
		'HZ440': {
			code: 'HZ440',
			name: 'Trabalho e Sindicalismo',
			ementa: 'O conceito de trabalho. Transformações nas relações de trabalho. Formas de organização e representação de interesses dos trabalhadores. Formas de ação sindical. Desafios do sindicalismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9C340',
			obligatory: false
		},
		'HZ540': {
			code: 'HZ540',
			name: 'Políticas Públicas',
			ementa: 'Introduzir a temática das políticas públicas com base nas experiências contemporâneas do Estado de Bem-Estar Social. Examinar as principais abordagens com relação à formulação, implementação, legitimação e avaliação das políticas públicas. Analisar o papel das políticas públicas em relação ao processo de formação da cidadania democrática e os desafios da gestão participativa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D96B',
			obligatory: false
		},
		'HZ640': {
			code: 'HZ640',
			name: 'Pensamento Político Brasileiro',
			ementa: 'Introdução ao estudo das principais linhagens do pensamento político no Brasil nos séculos XIX e XX, como: o liberalismo, o conservadorismo, o autoritarismo, o marxismo, o desenvolvimentismo, o nacionalismo etc. A disciplina procura articular a análise de obras clássicas e seu impacto na compreensão dos períodos críticos da formação do estado no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9740D9',
			obligatory: false
		},
		'HZ740': {
			code: 'HZ740',
			name: 'Regimes e Sistemas Políticos Comparados',
			ementa: 'A disciplina tem como objetivo desenvolver conceitos e reflexões necessários à compreensão do processo de construção dos estados modernos. Para isto enfatizará, de uma perspectiva histórica e teórica, a relação entre o desenvolvimento dos sistemas políticos contemporâneos e os principais tipos de regime político. Nesta perspectiva comparada, ênfase especial será atribuída ao sistema político brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40C3D9',
			obligatory: false
		},
		'HZ840': {
			code: 'HZ840',
			name: 'Estado e Reformas Econômicas no Capitalismo Contemporâneo',
			ementa: 'O papel do estado no capitalismo contemporâneo. Estado e classes sociais. Estado e relações internacionais. O debate sobre globalização e o declínio do Estado. As reformas econômicas neoliberais - com especial destaque para o Brasil. As mudanças na sociedade e na economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D99740',
			obligatory: false
		},
		'HZ940': {
			code: 'HZ940',
			name: 'Estado, Nação e Nacionalismo',
			ementa: 'A teoria do Estado burguês: o Estado no modo de produção capitalista. O Estado do capitalismo monopolista de Estado. O Estado dependente na era de capitalismo mundial. O Estado de transição.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D9406B',
			obligatory: false
		},
		'HZ942': {
			code: 'HZ942',
			name: 'Relações Internacionais',
			ementa: 'Introdução às relações internacionais. Noções básicas; algumas abordagens teóricas. Evolução do sistema internacional, do pós-guerra aos dias de hoje, com ênfase na América Latina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#406BD9',
			obligatory: false
		}
	}
};

export default catalogue;
