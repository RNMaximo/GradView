const catalogue = {
	totalCredits: 264,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HL121', 'HL127', 'HL143', 'LA104', 'LG021', 'TL108']
		},
		'sem-2': {
			id: '2',
			subjects: ['HL220', 'HL236', 'LA204', 'LG022', 'TL118', 'TL222', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HL323', 'LA303', 'LG023', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HL422', 'LA403', 'LG024', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['HL135', 'LA504', 'LG025', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HL245', 'LA712', 'LG026', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['LA001', 'LA910', 'LG027', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['LA911', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['EL774', 'LA912', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EL874', 'HL913', 'ELET10']
		},
		'sem-11': {
			id: '11',
			subjects: ['LA271', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['LA281', 'ELET12']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HL915', 'LA915', 'TL915'],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HL916', 'LA916', 'TL916'],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['LA607', 'LA710', 'LA805', 'LA914'],
		},
		'elet-4': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['HL070', 'HL176', 'HL260', 'HL481', 'HL533', 'HL545', 'HL645'],
		},
		'elet-5': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['TL087', 'TL088', 'TL089', 'TL128', 'TL138', 'TL148', 'TL158', 'TL168', 'TL208', 'TL228', 'TL238', 'TL318', 'TL328', 'TL338', 'TL418', 'TL428', 'TL438', 'TL518', 'TL528', 'TL538', 'TL618', 'TL628', 'TL638'],
		},
		'elet-6': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['TL110', 'TL111', 'TL112', 'TL113', 'TL114', 'TL115', 'TL117', 'TL119', 'TL145', 'TL146', 'TL149', 'TL151', 'TL152', 'TL153', 'TL154', 'TL156', 'TL159', 'TL161', 'TL174', 'TL175', 'TL176', 'TL177', 'TL178', 'TL179', 'TL180', 'TL181', 'TL182', 'TL183', 'TL184', 'TL185', 'TL186', 'TL187', 'TL188', 'TL189'],
		},
		'elet-7': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['TL162', 'TL163', 'TL164', 'TL170', 'TL171', 'TL172', 'TL211', 'TL212', 'TL213', 'TL214', 'TL215', 'TL216', 'TL217', 'TL219', 'TL220', 'TL221', 'TL223', 'TL224', 'TL225', 'TL229', 'TL230', 'TL231', 'TL232', 'TL233', 'TL234', 'TL235', 'TL236', 'TL237', 'TL239', 'TL240', 'TL241', 'TL242', 'TL243', 'TL244', 'TL245', 'TL246', 'TL247', 'TL248', 'TL249', 'TL250', 'TL251', 'TL252', 'TL253', 'TL254', 'TL256', 'TL257'],
		},
		'elet-8': {
			credits: 32,
			hasRestrictions: true,
			subjects: ['HL904', 'HL905', 'HL906', 'HL907', 'LA904', 'LA905', 'LA906', 'LA907', 'TL904', 'TL905', 'TL906', 'TL907'],
		},
		'elet-9': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL511', 'EL683'],
		},
		'elet-10': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['HL---', 'LA---', 'TL---'],
		},
		'elet-11': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-12': {
			credits: 14,
			hasRestrictions: true,
			subjects: ['HL071', 'LA071', 'TL071'],
		},
	},

	subjects: {
		'HL121': {
			code: 'HL121',
			name: 'Fonética, Fonologia e Morfologia',
			ementa: 'Conhecimento básico de fonética, fonologia e morfologia do português: teoria e prática. Mód 1: Fonética: a produção da fala - processos aerodinâmicos, fonatórios e articulatórios. Modos e lugares de articulação. Prática de produção e transcrição. Mód 2: Fonologia: a organização dos sons da fala em sistemas fonológicos - fonema, alofone e arquifonema. Mód 3: Morfologia: morfologia flexional e derivacional do português; processos morfofonêmicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AA',
			obligatory: true
		},
		'HL127': {
			code: 'HL127',
			name: 'Introdução às Ciências da Linguagem',
			ementa: 'Visão geral do fenômeno da linguagem e dos métodos de investigação científica desse objeto. Mód 1: Textos fundamentais da linguística. Mód 2: História das Ideias Linguísticas: linguística, língua nacional e instrumentos de gramatização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404ED9',
			obligatory: true
		},
		'HL143': {
			code: 'HL143',
			name: 'Latim I',
			ementa: 'Introdução ao estudo da palavra latina (em especial, do nome e do verbo latinos e suas particularidades morfossintáticas) e da literatura e civilização romanas. Tradução comentada de trechos adaptados da Aulularia de Plauto. Noções de história do latim e de latim vulgar. (Seções 1A-1D do método: Reading Latin, Cambridge Un. Press.)',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4740D9',
			obligatory: true
		},
		'LA104': {
			code: 'LA104',
			name: 'Letramentos: Teoria e Prática',
			ementa: 'Introdução aos estudos dos letramentos como processo histórico-ideológico de apropriação da cultura da escrita. Sensibilização para mitos e preconceitos que cercam os conceitos (alfabetização, alfabetismos, letramentos) e que sustentam certos enfoques que orientam a escolarização. Revisão do conceito de letramentos a partir das práticas multiletradas contemporâneas. A disciplina inclui necessariamente um trabalho de pesquisa no campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#407CD9',
			obligatory: true
		},
		'LG021': {
			code: 'LG021',
			name: 'Atividades Científico-Culturais I',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Gradução da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#75D940',
			obligatory: true
		},
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9A5',
			obligatory: true
		},
		'HL220': {
			code: 'HL220',
			name: 'Prática de Análise Gramatical',
			ementa: 'Gramática Tradicional: revisão crítica de conceitos e nomenclaturas. Funções sintáticas e categorias sintagmáticas: práticas de análise e representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94045',
			obligatory: true
		},
		'HL236': {
			code: 'HL236',
			name: 'Linguagem: Dimensões Históricas e Sociais',
			ementa: 'Aspectos sociais e históricos da diversidade linguística do Brasil: teoria e prática. Implicações para o ensino. Mód 1: Sociolinguística: dimensões históricas e socioculturais da linguagem, o campo da sociolinguística, variedades do português brasileiro e suas implicações para o ensino. Mód 2: Diversidade linguística e situações de contato linguístico nas sociedades indígenas do Brasil, bilinguismo e multilinguismo. Mód 3: Formação do português brasileiro: a questão das origens e o papel do contato com as línguas indígenas e africanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97840',
			obligatory: true
		},
		'LA204': {
			code: 'LA204',
			name: 'Leitura e Escrita: Teoria e Prática',
			ementa: 'Introdução às teorias - associacionistas, cognitivas e discursivo-enunciativas - de leitura e de produção de textos escritos e análise de seus impactos no ensino-aprendizagem de leitura/escrita. Abordagem da relação entre leitura e escrita e práticas com textos orais e multimodais em ambientes escolares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7FD940',
			obligatory: true
		},
		'LG022': {
			code: 'LG022',
			name: 'Atividades Científico-Culturais II',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#94D940',
			obligatory: true
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96440',
			obligatory: true
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B340D9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#408BD9',
			obligatory: true
		},
		'HL323': {
			code: 'HL323',
			name: 'Linguagem e Significação: Teoria e Prática',
			ementa: 'Linguagem e significação: teoria e prática. Mód 1: Discurso e Texto: produção e formulação de sentidos; gêneros discursivos e textuais; texto, intertexto e interdiscurso; leitura e interpretação; condições de produção; processo de subjetivação, autoria. Mód 2: Semântica e Pragmática: sentido e referência; relações de sentido; polissemia; enunciação; implícitos; atos de fala. Mód 3: Lexicologia e Lexicografia: noções básicas de lexicologia; problemas de definição lexicográfica; léxico, dicionário e significação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#51D940',
			obligatory: true
		},
		'LA303': {
			code: 'LA303',
			name: 'Interpretação: Teoria e Prática',
			ementa: 'Estudo e discussão de teorias da interpretação de diferentes tradições teórico-metodológicas que iluminem questões de natureza teórica e prática consideradas relevantes para uma reflexão mais aprofundada sobre leitura/interpretação de textos e demais objetos semióticos que povoam as práticas letradas contemporâneas, particularmente aquelas contempladas no ensino de língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9A0',
			obligatory: true
		},
		'LG023': {
			code: 'LG023',
			name: 'Atividades Científico-Culturais III',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B8D940',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#40D9B5',
			obligatory: true
		},
		'HL422': {
			code: 'HL422',
			name: 'Linguagem e Pensamento: Teoria e Prática',
			ementa: 'Aquisição da língua materna. O normal e o patológico. Mód. 1: Aquisição da linguagem: heterogeneidade e singularidade da fala da criança; o erro na aquisição. Mód. 2: Neurolinguística: a relação normal/patológico; visão crítica sobre patologias da linguagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94540',
			obligatory: true
		},
		'LA403': {
			code: 'LA403',
			name: 'Linguagem e Diversidade: Pesquisa e Ensino',
			ementa: 'Diversidade linguística e sociocultural no trabalho do professor de língua portuguesa. Variação linguística e a noção de erro. Preconceito linguístico e práticas discursivas escolares. Discussão acerca dos conceitos de representação, multiculturalismo e identidade e de suas implicações para o ensino crítico de língua portuguesa. Políticas linguísticas e ensino de português em contextos multilíngues.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9D040',
			obligatory: true
		},
		'LG024': {
			code: 'LG024',
			name: 'Atividades Científico-Culturais IV',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B140',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#C2D940',
			obligatory: true
		},
		'HL135': {
			code: 'HL135',
			name: 'Escrita e Oralidade',
			ementa: 'Estudo de processos relativos a usos da oralidade e da escrita. Módulo 1: Caracterização da oralidade e da escrita: processos de produção oral e de produção escrita; usos sociais da linguagem: gêneros orais e escritos. Módulo 2: Sistemas de escrita: história da escrita; escrita alfabética e sua base fonológica; marcação prosódica na oralidade, pontuação e outros sinais na escrita. Módulo 3: Constituição histórica da escrita no Brasil: política linguística e normatização; história da ortografia da língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#70D940',
			obligatory: true
		},
		'LA504': {
			code: 'LA504',
			name: 'Linguagem e Tecnologias',
			ementa: 'Enfoques históricos das relações entre tecnologia, linguagem e sociedade e suas repercussões nas concepções de língua, conhecimento e sujeito. Mutações na linguagem em relação à difusão e apropriação de inovações tecnológicas. Processos de naturalização da escrita enquanto tecnologia e suas repercussões educativas, sociais, cognitivas e epistemológicas na atualidade. Especificidades da interação e do funcionamento da linguagem nas interfaces hipermidiáticas e nos ambientes de comunicação mediada por computador, particularmente nos ambientes escolares.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D948',
			obligatory: true
		},
		'LG025': {
			code: 'LG025',
			name: 'Atividades Científico-Culturais V',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A340D9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#4081D9',
			obligatory: true
		},
		'HL245': {
			code: 'HL245',
			name: 'Escrita e Oralidade: Prática de Análise',
			ementa: 'Prática de análise da linguagem: gêneros orais e escritos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94083',
			obligatory: true
		},
		'LA712': {
			code: 'LA712',
			name: 'Análise Linguística no Ensino de Língua Portuguesa',
			ementa: 'Reflexão crítica acerca do eixo da análise linguística no âmbito do ensino de língua portuguesa. Princípios teórico-metodológicos da prática de análise linguística. Questões de análise linguística relevantes para o ensino. Didatizações no eixo da análise linguística (materiais didáticos, projetos, aulas etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94078',
			obligatory: true
		},
		'LG026': {
			code: 'LG026',
			name: 'Atividades Científico-Culturais VI',
			ementa: 'Atividades científicos-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4077D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#D9C640',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7F40D9',
			obligatory: true
		},
		'LA910': {
			code: 'LA910',
			name: 'Introdução aos Estudos do Português como Segunda Língua e Língua Estrangeira',
			ementa: 'Introdução aos estudos sobre o português como segunda língua e língua estrangeira (L2/LE). Panorama do português como língua adicional no cenário mundial e brasileiro. História do ensino do português como L2/LE no Brasil. A pesquisa nesse campo de atuação profissional. Levantamento e análise dos estudos existentes na área.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C4D9',
			obligatory: true
		},
		'LG027': {
			code: 'LG027',
			name: 'Atividades Científico-Culturais VII',
			ementa: 'Atividades científicos-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Gradução da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4140D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:19},
			requisitos: '',
			color: '#8F40D9',
			obligatory: true
		},
		'LA911': {
			code: 'LA911',
			name: 'A Sala de Aula de Português como Segunda Língua e Língua Estrangeira',
			ementa: 'Reflexão crítica sobre os principais modelos de aquisição e de aprendizagem de segunda língua e língua estrangeira (L2/LE). Concepções de língua(gem) e proficiência. Reflexão crítica sobre os conceitos de abordagem, planejamento, metodologias de ensino e avaliação. A formação do professor de português como segunda língua e língua estrangeira. Questões específicas relacionadas ao ensino e avaliação de cada uma das quatro habilidades. Análise de práticas em andamento nesse campo de atuação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA910'],
			color: '#40C4D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:21},
			requisitos: '',
			color: '#D240D9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D94A40',
			obligatory: true
		},
		'LA912': {
			code: 'LA912',
			name: 'Produção e Avaliação de Materiais para o Ensino de Português como L2/LE',
			ementa: 'Reflexão crítica sobre critérios para a avaliação e produção de materiais didáticos impressos e digitais para o ensino de português como segunda língua e língua estrangeira (L2/LE). Reflexão sobre o impacto das novas tecnologias na elaboração de materiais didáticos. Prática de elaboração de unidades de ensino nesse campo de atuação a partir da análise de necessidades de públicos específicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA910'],
			color: '#40C4D9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#4058D9',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#D94A40',
			obligatory: true
		},
		'HL913': {
			code: 'HL913',
			name: 'Políticas Linguísticas',
			ementa: 'Gestos de intervenção sobre as línguas e seus efeitos na constituição histórica dos grupos sociais. Línguas e suas divisões: oficiais, nacionais, transnacionais, francas, maternas, estrangeiras, entre outras. Línguas minoritárias e línguas de Estado. Políticas de ensino de línguas e planificação. Relações entre línguas e relações entre Estados nacionais. Organismos supranacionais e políticas linguísticas. Documentação de línguas. Português globalizado.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D977',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#40D4D9',
			obligatory: true
		},
		'LA271': {
			code: 'LA271',
			name: 'Estágio Supervisionado em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Introdução a questões envolvendo o estágio supervisionado a ser cumprido na área de ensino/aprendizagem/avaliação de Português como Segunda Língua/Língua Estrangeira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'LA281': {
			code: 'LA281',
			name: 'Estágio Supervisionado em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Aprofundamento de questões envolvendo o estágio supervisionado a ser cumprido na área de ensino/aprendizagem/avaliação de Português como Segunda Língua/Língua Estrangeira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: ['LA271'],
			color: '#40D9D9',
			obligatory: true
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D95F40',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9CE',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940C1',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D97340',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#406CD9',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#8A40D9',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9405F',
			obligatory: false
		},
		'HL070': {
			code: 'HL070',
			name: 'O Português no Brasil',
			ementa: 'A implantação da língua no Brasil: aspectos históricos e sociais; formação do português brasileiro: variedades padrão e não padrão; estudo de variedades do português brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D962',
			obligatory: false
		},
		'HL071': {
			code: 'HL071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:3, D:0, HS:7, SL:4, C:7},
			requisitos: '',
			color: '#40D958',
			obligatory: false
		},
		'HL176': {
			code: 'HL176',
			name: 'Tópicos em Sociolinguística e Ensino',
			ementa: 'Histórico e constituição da disciplina Língua Portuguesa nos currículos escolares; o problema da aquisição do padrão; a perspectiva sociolinguística na sala de aula: o problema da escolha de códigos comunicativos e linguísticos e de estilos de fala.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94088',
			obligatory: false
		},
		'HL260': {
			code: 'HL260',
			name: 'Sociolinguística',
			ementa: 'O campo da sociolinguística: histórico e constituição. Conceitos teóricos principais: variação e mudança; variedades linguísticas - variedades sociais e regionais; variedades padrão e não padrão; mudança linguística.Temas de interesse; bilinguismo, plurilinguismo, línguas veiculares; pidgins e crioulos; planejamento linguístico; atitudes e comportamentos linguísticos. Contribuições da sociolinguística para o ensino de língua materna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40AFD9',
			obligatory: false
		},
		'HL481': {
			code: 'HL481',
			name: 'Línguas Indígenas I',
			ementa: 'Línguas Indígenas faladas no Brasil: critérios de classificação e sua distribuição. Demografia. Principais características fonológicas e gramaticais de línguas selecionadas. Teoria e Métodos de trabalho de Campo para o estudo de línguas indígenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94069',
			obligatory: false
		},
		'HL533': {
			code: 'HL533',
			name: 'História das Ideias Linguísticas',
			ementa: 'Estudo de procedimentos e conceitos na constituição e circulação do saber linguístico, importantes para a compreensão da Linguística como ciência e de sua relação com outras disciplinas do Conhecimento. Discussão de processos e instrumentos de gramatização, especificamente gramáticas e dicionários. Os colégios e seu papel na construção da língua nacional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6640D9',
			obligatory: false
		},
		'HL545': {
			code: 'HL545',
			name: 'Linguística Histórica do Português I',
			ementa: 'A formação histórica da língua portuguesa - elementos de fonologia, morfologia e sintaxe do português arcáico - panorama da evolução da língua depois do século XVI, em Portugal e no Brasil - a questão da periodização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8AD940',
			obligatory: false
		},
		'HL645': {
			code: 'HL645',
			name: 'Linguística Histórica do Português II',
			ementa: 'Estudo da história da língua portuguesa em Portugal e no Brasil, com enfoque no período posterior ao séc. XVI, a partir da leitura e análise de textos não modernizados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9405A',
			obligatory: false
		},
		'HL904': {
			code: 'HL904',
			name: 'Investigação Científica I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#A9D940',
			obligatory: false
		},
		'HL905': {
			code: 'HL905',
			name: 'Investigação Científica II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4043D9',
			obligatory: false
		},
		'HL906': {
			code: 'HL906',
			name: 'Investigação Científica III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4072D9',
			obligatory: false
		},
		'HL907': {
			code: 'HL907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Linguística, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D940A2',
			obligatory: false
		},
		'HL915': {
			code: 'HL915',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Desenvolvimento de projeto de pesquisa (definição de objetivos, revisão bibliográfica, constituição de corpus e análise preliminar dos dados) com vistas à elaboração de trabalho final de curso acerca de políticas de planificação e gestão linguística do português como L2/LE no contexto nacional e mundial, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA910', 'LA911', 'LA912'],
			color: '#40C4D9',
			obligatory: false
		},
		'HL916': {
			code: 'HL916',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Conclusão da análise de dados e redação de trabalho final de curso envolvendo pesquisa individual acerca de políticas de planificação e gestão linguística do português como L2/LE no contexto nacional e mundial, sob orientação de um professor. A disciplina prevê, ao final do semestre, defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HL915'],
			color: '#40C4D9',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#6040D9',
			obligatory: false
		},
		'LA071': {
			code: 'LA071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:3, D:0, HS:7, SL:4, C:7},
			requisitos: '',
			color: '#9E40D9',
			obligatory: false
		},
		'LA607': {
			code: 'LA607',
			name: 'Educação Bilíngue: Teoria e Prática',
			ementa: 'Introdução aos estudos e à pesquisa em Educação Bilíngue. Exame dos diferentes contextos educacionais bilíngues no país (contexto indígena, de imigração, de surdez, escolas internacionais etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4086D9',
			obligatory: false
		},
		'LA710': {
			code: 'LA710',
			name: 'Tópicos em Língua Estrangeira/Segunda Língua: Teoria e Prática',
			ementa: 'Reflexão crítica sobre abordagens, metodologia e avaliação no ensino de línguas estrangeiras e segundas línguas. Introdução à pesquisa sobre esses tópicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94092',
			obligatory: false
		},
		'LA805': {
			code: 'LA805',
			name: 'Ensino de Língua Estrangeira',
			ementa: 'Reflexão crítica sobre abordagens, metodologias de ensino e avaliação a partir dessa comparação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40A5D9',
			obligatory: false
		},
		'LA904': {
			code: 'LA904',
			name: 'Investigação Científica I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#7AD940',
			obligatory: false
		},
		'LA905': {
			code: 'LA905',
			name: 'Investigação Científica II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#C8D940',
			obligatory: false
		},
		'LA906': {
			code: 'LA906',
			name: 'Investigação Científica III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94097',
			obligatory: false
		},
		'LA907': {
			code: 'LA907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Linguística Aplicada desenvolvido individualmente pelo aluno, sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D9BA',
			obligatory: false
		},
		'LA914': {
			code: 'LA914',
			name: 'Ensino de Português como Segunda Língua para Surdos',
			ementa: 'A escolarização de alunos surdos. Bilinguismo em contexto de surdez. O ensino da modalidade escrita da Língua Portuguesa, como segunda língua, para pessoas surdas. A avaliação da produção escrita de alunos surdos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5BD940',
			obligatory: false
		},
		'LA915': {
			code: 'LA915',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Desenvolvimento de projeto de pesquisa (definição de objetivos, revisão bibliográfica, constituição de corpus e análise preliminar dos dados) com vistas à elaboração de trabalho final de curso acerca do ensino, da aprendizagem e da avaliação de português como L2/LE, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA910', 'LA911', 'LA912'],
			color: '#40C4D9',
			obligatory: false
		},
		'LA916': {
			code: 'LA916',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira',
			ementa: 'Conclusão da análise de dados e redação de trabalho final de curso envolvendo pesquisa individual acerca do ensino, da aprendizagem e da avaliação de português como L2/LE, sob orientação de um professor. A disciplina prevê, ao final do semestre, defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA915'],
			color: '#40C4D9',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940D0',
			obligatory: false
		},
		'TL071': {
			code: 'TL071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:3, D:0, HS:7, SL:4, C:7},
			requisitos: '',
			color: '#40D9D4',
			obligatory: false
		},
		'TL087': {
			code: 'TL087',
			name: 'Tópicos Especiais de Literatura Brasileira I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99740',
			obligatory: false
		},
		'TL088': {
			code: 'TL088',
			name: 'Tópicos Especiais de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4062D9',
			obligatory: false
		},
		'TL089': {
			code: 'TL089',
			name: 'Tópicos Especiais de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40A0D9',
			obligatory: false
		},
		'TL110': {
			code: 'TL110',
			name: 'Textos em Teatro I',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9C140',
			obligatory: false
		},
		'TL111': {
			code: 'TL111',
			name: 'Textos em Teatro II',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B5D9',
			obligatory: false
		},
		'TL112': {
			code: 'TL112',
			name: 'Textos em Poesia I',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98B',
			obligatory: false
		},
		'TL113': {
			code: 'TL113',
			name: 'Textos em Poesia II',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D95D',
			obligatory: false
		},
		'TL114': {
			code: 'TL114',
			name: 'Textos em Prosa de Ficção I',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96E40',
			obligatory: false
		},
		'TL115': {
			code: 'TL115',
			name: 'Textos em Prosa de Ficção II',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BF',
			obligatory: false
		},
		'TL117': {
			code: 'TL117',
			name: 'Textos em Prosa Não-Ficcional II',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7040D9',
			obligatory: false
		},
		'TL119': {
			code: 'TL119',
			name: 'Textos em Teoria, Crítica e História Literária II',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8540D9',
			obligatory: false
		},
		'TL128': {
			code: 'TL128',
			name: 'Tópicos em Literatura Brasileira I',
			ementa: 'Análise de temas, obras e autores da América Portuguesa produzidos entre os séculos XVI e XVIII, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D967',
			obligatory: false
		},
		'TL138': {
			code: 'TL138',
			name: 'Tópicos em Literatura Brasileira II',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil do século XIX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9A240',
			obligatory: false
		},
		'TL145': {
			code: 'TL145',
			name: 'Tópicos X: Textos em Teatro III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AED940',
			obligatory: false
		},
		'TL146': {
			code: 'TL146',
			name: 'Tópicos XI: Textos em Teatro IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4096D9',
			obligatory: false
		},
		'TL148': {
			code: 'TL148',
			name: 'Tópicos em Literatura Brasileira III',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil entre o final do século XIX e início do século XX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940AC',
			obligatory: false
		},
		'TL149': {
			code: 'TL149',
			name: 'Tópicos XII: Textos em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9404F',
			obligatory: false
		},
		'TL151': {
			code: 'TL151',
			name: 'Tópicos XIII: Textos em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97E40',
			obligatory: false
		},
		'TL152': {
			code: 'TL152',
			name: 'Tópicos XIV: Textos em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7540D9',
			obligatory: false
		},
		'TL153': {
			code: 'TL153',
			name: 'Tópicos XV: Textos em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94F40',
			obligatory: false
		},
		'TL154': {
			code: 'TL154',
			name: 'Tópicos XVI: Textos em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4091D9',
			obligatory: false
		},
		'TL156': {
			code: 'TL156',
			name: 'Tópicos XVII: Textos em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99240',
			obligatory: false
		},
		'TL158': {
			code: 'TL158',
			name: 'Tópicos em Literatura Brasileira IV',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil do século XX, selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#99D940',
			obligatory: false
		},
		'TL159': {
			code: 'TL159',
			name: 'Tópicos XVIII: Textos em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940CB',
			obligatory: false
		},
		'TL161': {
			code: 'TL161',
			name: 'Tópicos XIX: Textos em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B640',
			obligatory: false
		},
		'TL162': {
			code: 'TL162',
			name: 'Tópicos em Pesquisa XIII: Literatura e Imprensa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95A40',
			obligatory: false
		},
		'TL163': {
			code: 'TL163',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B3D940',
			obligatory: false
		},
		'TL164': {
			code: 'TL164',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4CD940',
			obligatory: false
		},
		'TL168': {
			code: 'TL168',
			name: 'Tópicos em Literatura Brasileira V',
			ementa: 'Análise de temas, obras e autores da produção literária no Brasil contemporâneo, selecionado de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94073',
			obligatory: false
		},
		'TL170': {
			code: 'TL170',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9406E',
			obligatory: false
		},
		'TL171': {
			code: 'TL171',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D94E',
			obligatory: false
		},
		'TL172': {
			code: 'TL172',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94054',
			obligatory: false
		},
		'TL174': {
			code: 'TL174',
			name: 'Textos em Poesia V',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9ED940',
			obligatory: false
		},
		'TL175': {
			code: 'TL175',
			name: 'Textos em Poesia VI',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98340',
			obligatory: false
		},
		'TL176': {
			code: 'TL176',
			name: 'Textos em Poesia VII',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9940D9',
			obligatory: false
		},
		'TL177': {
			code: 'TL177',
			name: 'Textos em Poesia VIII',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B1',
			obligatory: false
		},
		'TL178': {
			code: 'TL178',
			name: 'Textos em Prosa de Ficção V',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9407E',
			obligatory: false
		},
		'TL179': {
			code: 'TL179',
			name: 'Textos em Prosa de Ficção VI',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94064',
			obligatory: false
		},
		'TL180': {
			code: 'TL180',
			name: 'Textos em Prosa de Ficção VII',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D5',
			obligatory: false
		},
		'TL181': {
			code: 'TL181',
			name: 'Textos em Prosa de Ficção VIII',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4048D9',
			obligatory: false
		},
		'TL182': {
			code: 'TL182',
			name: 'Textos em Prosa Não-Ficcional V',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D943',
			obligatory: false
		},
		'TL183': {
			code: 'TL183',
			name: 'Textos em Prosa Não-Ficcional VI',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940A7',
			obligatory: false
		},
		'TL184': {
			code: 'TL184',
			name: 'Textos em Prosa Não-Ficcional VII',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40CED9',
			obligatory: false
		},
		'TL185': {
			code: 'TL185',
			name: 'Textos em Prosa Não-Ficcional VIII',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9A740',
			obligatory: false
		},
		'TL186': {
			code: 'TL186',
			name: 'Textos em Teoria, Crítica e História Literária V',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D996',
			obligatory: false
		},
		'TL187': {
			code: 'TL187',
			name: 'Textos em Teoria, Crítica e História Literária VI',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B6',
			obligatory: false
		},
		'TL188': {
			code: 'TL188',
			name: 'Textos em Teoria, Crítica e História Literária VII',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4067D9',
			obligatory: false
		},
		'TL189': {
			code: 'TL189',
			name: 'Textos em Teoria, Crítica e História Literária VIII',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96940',
			obligatory: false
		},
		'TL208': {
			code: 'TL208',
			name: 'Tópicos em Literatura Brasileira: Autores I',
			ementa: 'Estudo monográfico aprofundado da obra de autores representativos da produção literária no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D96C',
			obligatory: false
		},
		'TL211': {
			code: 'TL211',
			name: 'Pesquisa I: Literatura e Imprensa I',
			ementa: 'Introdução à pesquisa das relações entre literatura e imprensa, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D981',
			obligatory: false
		},
		'TL212': {
			code: 'TL212',
			name: 'Pesquisa II: Literatura e Outras Artes I',
			ementa: 'Introdução à pesquisa das relações entre literatura e outras artes, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#60D940',
			obligatory: false
		},
		'TL213': {
			code: 'TL213',
			name: 'Pesquisa III: Literatura e Suportes Materiais I',
			ementa: 'Introdução à pesquisa das relações entre literatura e seus suportes materiais e documentais, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#85D940',
			obligatory: false
		},
		'TL214': {
			code: 'TL214',
			name: 'Pesquisa IV: Literatura e Ensino I',
			ementa: 'Introdução à pesquisa das relações entre literatura e ensino, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BDD940',
			obligatory: false
		},
		'TL215': {
			code: 'TL215',
			name: 'Pesquisa V: Literatura e suas Fontes Históricas I',
			ementa: 'Introdução à pesquisa das relações entre literatura e suas fontes históricas, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A940D9',
			obligatory: false
		},
		'TL216': {
			code: 'TL216',
			name: 'Pesquisa VI: Literatura e Práticas de Leitura I',
			ementa: 'Introdução à pesquisa das relações entre literatura e as diversas práticas de leitura, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A3D940',
			obligatory: false
		},
		'TL217': {
			code: 'TL217',
			name: 'Pesquisa VII: Tradução Literária I',
			ementa: 'Introdução à prática de tradução literária.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D7D940',
			obligatory: false
		},
		'TL219': {
			code: 'TL219',
			name: 'Pesquisa IX: Literatura e Arquivos I',
			ementa: 'Introdução à pesquisa em temas e questões de Literatura Brasileira, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B840D9',
			obligatory: false
		},
		'TL220': {
			code: 'TL220',
			name: 'Pesquisa X: Teoria Literária I',
			ementa: 'Introdução à pesquisa em teoria literária, com análise de bibliografia pertinente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D740D9',
			obligatory: false
		},
		'TL221': {
			code: 'TL221',
			name: 'Pesquisa XI: Crítica Literária I',
			ementa: 'Introdução à pesquisa em crítica literária, com análise de bibliografia pertinente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5140D9',
			obligatory: false
		},
		'TL223': {
			code: 'TL223',
			name: 'Tópicos em Pesquisa XVIII: Literatura e Suportes Materiais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D986',
			obligatory: false
		},
		'TL224': {
			code: 'TL224',
			name: 'Tópicos em Pesquisa XX: Literatura e Suportes Materiais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9CB40',
			obligatory: false
		},
		'TL225': {
			code: 'TL225',
			name: 'Tópicos em Pesquisa XXI: Literatura e Suportes Materiais IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7A40D9',
			obligatory: false
		},
		'TL228': {
			code: 'TL228',
			name: 'Tópicos em Literatura Brasileira: Autores II',
			ementa: 'Estudo monográfico aprofundado da obra representativos da produção literária no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D98840',
			obligatory: false
		},
		'TL229': {
			code: 'TL229',
			name: 'Tópicos em Pesquisa XXI: Literatura e Ensino II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#41D940',
			obligatory: false
		},
		'TL230': {
			code: 'TL230',
			name: 'Tópicos em Pesquisa XXII: Literatura e Ensino III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40BAD9',
			obligatory: false
		},
		'TL231': {
			code: 'TL231',
			name: 'Tópicos em Pesquisa XXIII: Literatura e Ensino IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C240D9',
			obligatory: false
		},
		'TL232': {
			code: 'TL232',
			name: 'Tópicos em Pesquisa XXIV: Literatura e suas Fontes Históricas II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#405DD9',
			obligatory: false
		},
		'TL233': {
			code: 'TL233',
			name: 'Tópicos em Pesquisa XXV: Literatura e suas Fontes Históricas III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99D40',
			obligatory: false
		},
		'TL234': {
			code: 'TL234',
			name: 'Tópicos em Pesquisa XXVI: Literatura e suas Fontes Históricas IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408D',
			obligatory: false
		},
		'TL235': {
			code: 'TL235',
			name: 'Tópicos em Pesquisa XXVII: Literatura e Práticas de Leitura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D540',
			obligatory: false
		},
		'TL236': {
			code: 'TL236',
			name: 'Tópicos em Pesquisa XXVIII: Literatura e Práticas de Leitura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5640D9',
			obligatory: false
		},
		'TL237': {
			code: 'TL237',
			name: 'Tópicos em Pesquisa XXIX: Literatura e Práticas de Leitura IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40AAD9',
			obligatory: false
		},
		'TL238': {
			code: 'TL238',
			name: 'Tópicos em Literatura Brasileira: Autores III',
			ementa: 'Estudo monográfico aprofundado da obra de autores representativos da produção literária no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#47D940',
			obligatory: false
		},
		'TL239': {
			code: 'TL239',
			name: 'Tópicos em Pesquisa XXX: Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9AF',
			obligatory: false
		},
		'TL240': {
			code: 'TL240',
			name: 'Tópicos em Pesquisa XXXI: Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4053D9',
			obligatory: false
		},
		'TL241': {
			code: 'TL241',
			name: 'Tópicos em Pesquisa XXXII: Tradução Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9BC40',
			obligatory: false
		},
		'TL242': {
			code: 'TL242',
			name: 'Tópicos em Pesquisa XXXIII: Temas e Questões de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D991',
			obligatory: false
		},
		'TL243': {
			code: 'TL243',
			name: 'Tópicos em Pesquisa XXXIV: Temas e Questões de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4C40D9',
			obligatory: false
		},
		'TL244': {
			code: 'TL244',
			name: 'Tópicos em Pesquisa XXXV: Temas e Questões de Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D99B',
			obligatory: false
		},
		'TL245': {
			code: 'TL245',
			name: 'Tópicos em Pesquisa XXXVI: Literatura e Arquivos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C6',
			obligatory: false
		},
		'TL246': {
			code: 'TL246',
			name: 'Tópicos em Pesquisa XXXVII: Literatura e Arquivos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9AC40',
			obligatory: false
		},
		'TL247': {
			code: 'TL247',
			name: 'Tópicos em Pesquisa XXXVIII: Literatura e Arquivos IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9404A',
			obligatory: false
		},
		'TL248': {
			code: 'TL248',
			name: 'Tópicos em Pesquisa XXXIX: Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CDD940',
			obligatory: false
		},
		'TL249': {
			code: 'TL249',
			name: 'Tópicos em Pesquisa XL: Teoria Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40BFD9',
			obligatory: false
		},
		'TL250': {
			code: 'TL250',
			name: 'Tópicos em Pesquisa XL: Teoria Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BD40D9',
			obligatory: false
		},
		'TL251': {
			code: 'TL251',
			name: 'Tópicos em Pesquisa XLII: Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409D',
			obligatory: false
		},
		'TL252': {
			code: 'TL252',
			name: 'Tópicos em Pesquisa XLIII: Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D2D940',
			obligatory: false
		},
		'TL253': {
			code: 'TL253',
			name: 'Tópicos em Pesquisa XLIV: Crítica Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6B40D9',
			obligatory: false
		},
		'TL254': {
			code: 'TL254',
			name: 'Tópicos em Pesquisa XLV: Historiografia Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D953',
			obligatory: false
		},
		'TL256': {
			code: 'TL256',
			name: 'Tópicos em Pesquisa XLVI: Historiografia Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97C',
			obligatory: false
		},
		'TL257': {
			code: 'TL257',
			name: 'Tópicos em Pesquisa XLVII: Historiografia Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8FD940',
			obligatory: false
		},
		'TL318': {
			code: 'TL318',
			name: 'Tópicos em Literatura Brasileira: Regiões I',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinadas regiões do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D972',
			obligatory: false
		},
		'TL328': {
			code: 'TL328',
			name: 'Tópicos em Literatura Brasileira: Regiões II',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinadas regiões do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#66D940',
			obligatory: false
		},
		'TL338': {
			code: 'TL338',
			name: 'Tópicos em Literatura Brasileira: Regiões III',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinadas regiões do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9440D9',
			obligatory: false
		},
		'TL418': {
			code: 'TL418',
			name: 'Tópicos em Literatura Brasileira: Movimentos I',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinados movimentos ou escolas estéticas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95440',
			obligatory: false
		},
		'TL428': {
			code: 'TL428',
			name: 'Tópicos em Literatura Brasileira: Movimentos II',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinados movimentos ou escolas estéticas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#CD40D9',
			obligatory: false
		},
		'TL438': {
			code: 'TL438',
			name: 'Tópicos em Literatura Brasileira: Movimentos III',
			ementa: 'Estudo monográfico aprofundado da produção literária de determinados movimentos ou escolas estéticas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40C9D9',
			obligatory: false
		},
		'TL518': {
			code: 'TL518',
			name: 'Tópicos em Literatura Brasileira: Gêneros I',
			ementa: 'Estudo monográfico aprofundado da produção de determinados gêneros literários no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#409BD9',
			obligatory: false
		},
		'TL528': {
			code: 'TL528',
			name: 'Tópicos em Literatura Brasileira: Gêneros II',
			ementa: 'Estudo monográfico aprofundado da produção de determinados gêneros literários no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940BC',
			obligatory: false
		},
		'TL538': {
			code: 'TL538',
			name: 'Tópicos em Literatura Brasileira: Gêneros III',
			ementa: 'Estudo monográfico aprofundado da produção de determinados gêneros literários no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AE40D9',
			obligatory: false
		},
		'TL618': {
			code: 'TL618',
			name: 'Tópicos em Literatura Brasileira: Marginais I',
			ementa: 'Estudo monográfico aprofundado da produção literária de autores, obras e/ou movimentos no Brasil marginais em relação às histórias literárias conhecidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#C840D9',
			obligatory: false
		},
		'TL628': {
			code: 'TL628',
			name: 'Tópicos em Literatura Brasileira: Marginais II',
			ementa: 'Estudo monográfico aprofundado da produção literária de autores, obras e/ou movimentos no Brasil marginais em relação às histórias literárias conhecidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D98D40',
			obligatory: false
		},
		'TL638': {
			code: 'TL638',
			name: 'Tópicos em Literatura Brasileira: Marginais III',
			ementa: 'Estudo monográfico aprofundado da produção literária de autores, obras e/ou movimentos no Brasil marginais em relação às histórias literárias conhecidas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5B40D9',
			obligatory: false
		},
		'TL904': {
			code: 'TL904',
			name: 'Investigação Científica I',
			ementa: 'Introdução a tema de pesquisa em Literatura Brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D9C9',
			obligatory: false
		},
		'TL905': {
			code: 'TL905',
			name: 'Investigação Científica II',
			ementa: 'Elaboração de projeto de pesquisa em Literatura Brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D9C4',
			obligatory: false
		},
		'TL906': {
			code: 'TL906',
			name: 'Investigação Científica III',
			ementa: 'Desenvolvimento de projeto de pesquisa em Literatura Brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#56D940',
			obligatory: false
		},
		'TL907': {
			code: 'TL907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Teoria Literária, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'TL915': {
			code: 'TL915',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Desenvolvimento de projeto de pesquisa (definição de objetivos, revisão bibliográfica, constituição de corpus e análise preliminar dos dados) com vistas à elaboração de trabalho final de curso acerca do ensino de literatura e cultura brasileiras em contexto de português como L2/LE, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA910', 'LA911', 'LA912'],
			color: '#40C4D9',
			obligatory: false
		},
		'TL916': {
			code: 'TL916',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Conclusão da análise de dados e redação de trabalho final de curso envolvendo tema de pesquisa individual sobre o ensino de literatura e cultura brasileiras em contexto de português como L2/LE, sob orientação de um professor. A disciplina prevê, ao final do semestre, defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['TL915'],
			color: '#40C4D9',
			obligatory: false
		}
	}
};

export default catalogue;
