const catalogue = {
	totalCredits: 162,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HL111', 'TL222', 'HL533', 'HL143', 'TL118', 'HL120']
		},
		'sem-2': {
			id: '2',
			subjects: ['HL080', 'HL260', 'ELET02', 'HL221', 'HL531']
		},
		'sem-3': {
			id: '3',
			subjects: ['HL081', 'HL085', 'HL524', 'HL521', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HL481', 'HL445', 'ELET04', 'HL341', 'HL082', 'HL832']
		},
		'sem-5': {
			id: '5',
			subjects: ['HL631', 'HL550', 'HL532', 'ELET05', 'HL330', 'HL052', 'HL545', 'HL053']
		},
		'sem-6': {
			id: '6',
			subjects: ['HL624', 'HL645', 'ELET06', 'HL505']
		},
		'sem-7': {
			id: '7',
			subjects: ['HL506', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'HL507']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 30,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'HL111': {
			code: 'HL111',
			name: 'Introdução aos Estudos da Linguagem I',
			ementa: 'Visão geral do Fenômeno da linguagem e de seus métodos de investigação científica, considerando temas como: Linguagem e sociedade, linguagem e línguas naturais, a língua como objeto de estudo, o problema do objeto e do método, áreas da linguística, a linguística e outras ciências. Apresentação e problematização de fatos de linguagem pertinentes para as teorias linguísticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'HL120': {
			code: 'HL120',
			name: 'Linguagem e Investigação em Ciências Humanas',
			ementa: 'Estudo das diferentes teorias do social na história, assim como do que é fato social, visando à perspectiva dos estudos da linguagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B979',
			obligatory: true
		},
		'HL143': {
			code: 'HL143',
			name: 'Latim I',
			ementa: 'Introdução ao estudo da palavra latina (em especial, do nome e do verbo latinos e suas particularidades morfossintáticas) e da literatura e civilização romanas. Tradução comentada de trechos adaptados da Aulularia de Plauto. Noções de história do latim e de latim vulgar. (Seções 1A-1D do método: Reading Latin, Cambridge Un. Press.)',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#60B946',
			obligatory: true
		},
		'HL533': {
			code: 'HL533',
			name: 'História das Ideias Linguísticas',
			ementa: 'Estudo de procedimentos e conceitos na constituição e circulação do saber linguístico, importantes para a compreensão da Linguística como ciência e de sua relação com outras disciplinas do Conhecimento. Discussão de processos e instrumentos de gramatização, especificamente gramáticas e dicionários. Os colégios e seu papel na construção da língua nacional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7946B9',
			obligatory: true
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AC46B9',
			obligatory: true
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4660B9',
			obligatory: true
		},
		'HL080': {
			code: 'HL080',
			name: 'Estudos Gramaticais',
			ementa: 'Elementos de descrição, análise e representação gramatical.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96046',
			obligatory: true
		},
		'HL221': {
			code: 'HL221',
			name: 'Fonética e Fonologia',
			ementa: 'Os aspectos fônicos da linguagem; a produção da fala; aparelho fonador; processos aerodinâmicos, fonatórios e articulatórios; modos e pontos de articulação; consoantes e vogais; articulações secundárias; a sílaba; a prosódia do ritmo e da entoação; prática de produção, reconhecimento e transcrição dos sons da linguagem; a organização dos sons da fala em sistemas fonológicos; fonema, alofone, arquifonema: as noções de oposição, contraste, distribuição complementar, neutralização; traços distintivos; processos e representações fonológicas; prática de análise fonológica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94693',
			obligatory: true
		},
		'HL260': {
			code: 'HL260',
			name: 'Sociolinguística',
			ementa: 'O campo da sociolinguística: histórico e constituição. Conceitos teóricos principais: variação e mudança; variedades linguísticas - variedades sociais e regionais; variedades padrão e não padrão; mudança linguística.Temas de interesse; bilinguismo, plurilinguismo, línguas veiculares; pidgins e crioulos; planejamento linguístico; atitudes e comportamentos linguísticos. Contribuições da sociolinguística para o ensino de língua materna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97946',
			obligatory: true
		},
		'HL531': {
			code: 'HL531',
			name: 'Semântica e Pragmática',
			ementa: 'Discussão da relação entre língua, linguagem, referência e subjetividade no tratamento da significação na linguagem a partir de teorias semânticas e pragmáticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AC',
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
		'HL081': {
			code: 'HL081',
			name: 'Estudos Gramaticais: Sintaxe',
			ementa: 'Estudo de relações gramaticais na perspectiva da sintaxe gerativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['HL080'],
			color: '#B96046',
			obligatory: true
		},
		'HL085': {
			code: 'HL085',
			name: 'Linguística de Corpus',
			ementa: 'Procedimentos para constituição e utilização de grandes corpora.',
			semestre: 1,
			vector: {T:0, P:1, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['HL080'],
			color: '#B96046',
			obligatory: true
		},
		'HL521': {
			code: 'HL521',
			name: 'Modelos de Análise Fonológica',
			ementa: 'Pressupostos teóricos e metodologia de investigação e análise fonológica. Modelos estruturalistas e gerativistas de análise fonológica; fonologias lineares e não lineares; noções básicas de fonologia autossegmental, lexical, métrica e prosódica; a caracterização dos segmentos: geometrias de traços, subespecificação; representações, regras, restrições; otimidade e harmonia em fonologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['HL221'],
			color: '#B94693',
			obligatory: true
		},
		'HL524': {
			code: 'HL524',
			name: 'Semântica da Enunciação',
			ementa: 'Apresentação dos conceitos fundamentais de uma semântica enunciativa a partir de uma discussão geral sobre o significado em relação à subjetividade e à exterioridade. Espaço de enunciação: línguas e falantes. Enunciação e textualidade: reescrituração e articulação. Heterogeneidade enunciativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99346',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL082': {
			code: 'HL082',
			name: 'Estudos Gramaticais: Morfologia',
			ementa: 'Estudo de propriedades morfológicas das línguas naturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B960',
			obligatory: true
		},
		'HL341': {
			code: 'HL341',
			name: 'Fonética Instrumental',
			ementa: 'Observação, experimento e medida. O papel da Fonética Acústica para tornar a fala acessível à mensuração. Análise estatística inferencial aplicada a dados fonético-acústicos. Elementos de Fonética Acústica: onda sonora, representações espectrais e outras técnicas de análise acústica. A teoria fonte-filtro da produção da fala. Principais características acústicas das vogais. Principais características acústicas das consoantes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['HL221'],
			color: '#B94693',
			obligatory: true
		},
		'HL445': {
			code: 'HL445',
			name: 'Linguística Românica',
			ementa: 'O método histórico-comparativo e a filosofia clássica. O latim vulgar: sua formação, estrutura, expansão e dialetação. Aspectos gerais da formação e consolidação das línguas românicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94679',
			obligatory: true
		},
		'HL481': {
			code: 'HL481',
			name: 'Línguas Indígenas I',
			ementa: 'Línguas Indígenas faladas no Brasil: critérios de classificação e sua distribuição. Demografia. Principais características fonológicas e gramaticais de línguas selecionadas. Teoria e Métodos de trabalho de Campo para o estudo de línguas indígenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#93B946',
			obligatory: true
		},
		'HL832': {
			code: 'HL832',
			name: 'Análise do Discurso',
			ementa: 'Análise linguística e análise discursiva. Análise do Discurso e Pragmática. Enunciação. Condições de produção, história, ideologia. A questão da subjetividade. A questão do sentido e a da leitura. Metodologias de análise. Discurso e gêneros textuais. Intertextualidade e interdiscursividade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4679B9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL052': {
			code: 'HL052',
			name: 'Psicolinguística',
			ementa: 'Problemas epistemológicos da psicologia da linguagem. A Psicolinguística nas suas relações com outras disciplinas recentes que abordam as relações entre mente e linguagem. Bases biológicas da linguagem. Cérebro e mente: os debates atuais e suas implicações para o campo. O papel da linguagem nas atividades mentais: percepção, atenção, memória, solução de problemas, a leitura e escrita. A organização mental e/ou comportamental do conhecimento linguístico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94660',
			obligatory: true
		},
		'HL053': {
			code: 'HL053',
			name: 'Neurolinguística',
			ementa: 'A disciplina pretende desenvolver os seguintes aspectos: a)histórico do nascimento da Neurolinguística e suas implicações para as relações entre a Linguística, as Neurociências e outros domínios do estudo da cognição humana; b)aspectos biológicos e socioculturais do funcionamento cerebral e da linguagem; c)discussão em torno das relações entre o normal e o patológico nos estudos da linguagem; d)análise do método clínico e de procedimentos avaliativos relativos à linguagem; e)teorização linguística das afasias e outras patologias linguístico-cognitivas; f)a relação entre oralidade e escrita.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B993',
			obligatory: true
		},
		'HL330': {
			code: 'HL330',
			name: 'Semântica Formal',
			ementa: 'No curso serão ilustrados, a partir de tratamentos clássicos, os conceitos fundamentais de uma teoria formal da significação: a distinção entre sentido, referência e aspectos psicológicos; a composicionalidade do sentido em função da sintaxe; a utilidade de noções como predicado, argumento, variável, quantificadores, eventos. Serão exploradas as implicações e as limitações de um tratamento semântico-formal dos enunciados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946AC',
			obligatory: true
		},
		'HL532': {
			code: 'HL532',
			name: 'Linguística Textual',
			ementa: 'Processos e estratégias de organização textual e sua atuação na construção do sentido.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9346B9',
			obligatory: true
		},
		'HL545': {
			code: 'HL545',
			name: 'Linguística Histórica do Português I',
			ementa: 'A formação histórica da língua portuguesa - elementos de fonologia, morfologia e sintaxe do português arcáico - panorama da evolução da língua depois do século XVI, em Portugal e no Brasil - a questão da periodização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#ACB946',
			obligatory: true
		},
		'HL550': {
			code: 'HL550',
			name: 'Aquisição da Linguagem',
			ementa: 'Fundamentos teóricos e metodológicos da investigação psicolinguística, com ênfase especial no processo de aquisição da língua materna. Aspectos estruturais da aquisição da linguagem oral e da linguagem escrita. Descrição de alguns fenômenos da aquisição do português como língua materna.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#79B946',
			obligatory: true
		},
		'HL631': {
			code: 'HL631',
			name: 'Linguagem e Processos Cognitivos',
			ementa: 'Processos cognitivos subjacentes à linguagem no contexto das ciências cognitivas: arquitetura mental e representação da linguagem. Processamento lexical e parsing; processamento de texto. Modelamento computacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL505': {
			code: 'HL505',
			name: 'Pesquisa em Linguística I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'HL624': {
			code: 'HL624',
			name: 'Lexicologia e Lexicografia',
			ementa: 'Noções básicas de lexicologia: problemas de definição lexical. Léxico e dicionário.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6046B9',
			obligatory: true
		},
		'HL645': {
			code: 'HL645',
			name: 'Linguística Histórica do Português II',
			ementa: 'Estudo da história da língua portuguesa em Portugal e no Brasil, com enfoque no período posterior ao séc. XVI, a partir da leitura e análise de textos não modernizados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46ACB9',
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
		'HL506': {
			code: 'HL506',
			name: 'Pesquisa em Linguística II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL507': {
			code: 'HL507',
			name: 'Pesquisa em Linguística III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor, com elaboração de monografia. Ao final do semestre, opcionalmente e com a autorização do orientador, a monografia poderá ser submetida a defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#B9AC46',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		}
	}
};

export default catalogue;
