const catalogue = {
	totalCredits: 169,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ141', 'HZ158', 'HZ160']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ248', 'HZ258', 'HZ260', 'ELET6']
		},
		'sem-3': {
			id: '3',
			subjects: ['HZ345', 'HZ358', 'HZ360', 'ELET6']
		},
		'sem-4': {
			id: '4',
			subjects: ['HZ431', 'ELET12']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET22']
		},
		'sem-6': {
			id: '6',
			subjects: ['HZ631', 'ELET18']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'ELET18']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET22']
		}
	},

	subjects: {
		'CE131': {
			code: 'CE131',
			name: 'Introdução à Economia para Ciências Sociais',
			ementa: 'O sistema de produção. Divisão do trabalho. Os três aspectos da produção. Taxa de lucro e movimento do capital. Salário e lucros. Crescimento e ciclo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender elementos fundamentais da Ciência Política: o objeto da Ciência Política; o poder político; a ação política. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de natureza e cultura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender as rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985; o debate existente na bibliografia sobre esses temas; as transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141']
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de troca, sociedade e estrutura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160']
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender os fundamentos teóricos da análise do Estado contemporâneo; a relação entre o Estado e a sociedade civil; a relação entre Estado e classes sociais; a questão da burocracia; as estruturas do Estado moderno. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141']
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de &quot;espírito de capitalismo&quot;, fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de etnografias antropológicas recuperando o arco de discussões sobre o fazer etnográfico. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260']
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social. Promover o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'ELET22': {
			code: 'ELET22',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:22, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: ''
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['HZ431']
		},
		'ELET18': {
			code: 'ELET18',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:18, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: ''
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160']
		},
		'ELET18': {
			code: 'ELET18',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:18, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: ''
		},
		'ELET22': {
			code: 'ELET22',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:22, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: ''
		}
	}
};

export default catalogue;
