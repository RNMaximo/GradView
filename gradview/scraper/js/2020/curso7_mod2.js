const catalogue = {
	totalCredits: 292,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HL121', 'HL127', 'HL143', 'LA104', 'LA405', 'LG028', 'TL108']
		},
		'sem-2': {
			id: '2',
			subjects: ['HL220', 'HL236', 'HL337', 'LA204', 'LA404', 'TL404', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HL324', 'HL325', 'HL804', 'LA303', 'LA406', 'TL405', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HL423', 'HL424', 'LA403', 'TL406', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['HL135', 'LA504', 'LA910', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HL245', 'LA712', 'LA911', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL774', 'LA001', 'LA912', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EL874', 'HL913', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['LA271', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['LA281', 'ELET10']
		}
	},

	eletivas: [
		{
			credits: 8,
			hasRestrictions: true,
			subjects: ['HL915', 'LA915', 'TL915'],
		},
		{
			credits: 8,
			hasRestrictions: true,
			subjects: ['HL916', 'LA916', 'TL916'],
		},
		{
			credits: 2,
			hasRestrictions: true,
			subjects: ['LA607', 'LA710', 'LA805', 'LA914'],
		},
		{
			credits: 2,
			hasRestrictions: true,
			subjects: ['HL070', 'HL176', 'HL260', 'HL481', 'HL533', 'HL545', 'HL645'],
		},
		{
			credits: 4,
			hasRestrictions: true,
			subjects: ['TL087', 'TL088', 'TL089', 'TL128', 'TL138', 'TL148', 'TL158', 'TL168', 'TL208', 'TL228', 'TL238', 'TL318', 'TL328', 'TL338', 'TL418', 'TL428', 'TL438', 'TL518', 'TL528', 'TL538', 'TL618', 'TL628', 'TL638'],
		},
		{
			credits: 8,
			hasRestrictions: true,
			subjects: ['TL129', 'TL139', 'TL144', 'TL145', 'TL146', 'TL149', 'TL151', 'TL152', 'TL153', 'TL154', 'TL156', 'TL159', 'TL161', 'TL169', 'TL173', 'TL190', 'TL191', 'TL192', 'TL193', 'TL194', 'TL195', 'TL196', 'TL197', 'TL198', 'TL199', 'TL206', 'TL210', 'TL226', 'TL264', 'TL265'],
		},
		{
			credits: 8,
			hasRestrictions: true,
			subjects: ['TL162', 'TL163', 'TL164', 'TL165', 'TL166', 'TL170', 'TL171', 'TL172', 'TL223', 'TL224', 'TL225', 'TL229', 'TL230', 'TL231', 'TL232', 'TL233', 'TL234', 'TL235', 'TL236', 'TL237', 'TL239', 'TL240', 'TL241', 'TL242', 'TL243', 'TL244', 'TL245', 'TL246', 'TL247', 'TL248', 'TL249', 'TL250', 'TL251', 'TL252', 'TL253', 'TL254', 'TL256', 'TL257'],
		},
		{
			credits: 34,
			hasRestrictions: true,
			subjects: ['HL904', 'HL905', 'HL906', 'HL907', 'LA904', 'LA905', 'LA906', 'LA907', 'TL904', 'TL905', 'TL906', 'TL907'],
		},
		{
			credits: 8,
			hasRestrictions: false,
			subjects: [''],
		},
		{
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL511', 'EL683'],
		},
		{
			credits: 16,
			hasRestrictions: true,
			subjects: ['HL071', 'LA071', 'TL071'],
		},
		{
			credits: 4,
			hasRestrictions: false,
			subjects: [''],
		},
	],

	subjects: {
		'HL121': {
			code: 'HL121',
			name: 'Fonética, Fonologia e Morfologia',
			ementa: 'Conhecimento básico de fonética, fonologia e morfologia do português: teoria e prática. Mód 1: Fonética: a produção da fala - processos aerodinâmicos, fonatórios e articulatórios. Modos e lugares de articulação. Prática de produção e transcrição. Mód 2: Fonologia: a organização dos sons da fala em sistemas fonológicos - fonema, alofone e arquifonema. Mód 3: Morfologia: morfologia flexional e derivacional do português; processos morfofonêmicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4071D9'
		},
		'HL127': {
			code: 'HL127',
			name: 'Introdução às Ciências da Linguagem',
			ementa: 'Visão geral do fenômeno da linguagem e dos métodos de investigação científica desse objeto. Mód 1: Textos fundamentais da linguística. Mód 2: História das Ideias Linguísticas: linguística, língua nacional e instrumentos de gramatização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B8D9'
		},
		'HL143': {
			code: 'HL143',
			name: 'Latim I',
			ementa: 'Introdução ao estudo da palavra latina (em especial, do nome e do verbo latinos e suas particularidades morfossintáticas) e da literatura e civilização romanas. Tradução comentada de trechos adaptados da Aulularia de Plauto. Noções de história do latim e de latim vulgar, e de aspectos relevantes ao ensino do português. (Seções 1A-1D do método: Aprendendo Latim, Ed. Odysseus.)',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9B040'
		},
		'LA104': {
			code: 'LA104',
			name: 'Letramentos: Teoria e Prática',
			ementa: 'Introdução aos estudos dos letramentos como processo histórico-ideológico de apropriação da cultura da escrita. Sensibilização para mitos e preconceitos que cercam os conceitos (alfabetização, alfabetismos, letramentos) e que sustentam certos enfoques que orientam a escolarização. Revisão do conceito de letramentos a partir das práticas multiletradas contemporâneas. A disciplina inclui necessariamente um trabalho de pesquisa no campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#409BD9'
		},
		'LA405': {
			code: 'LA405',
			name: 'Seminários em Ensino de Língua Portuguesa',
			ementa: 'Estudo e discussão de textos de referência para o ensino da disciplina Língua Portuguesa na educação básica. Estudo de conceitos e ideias que sustentam as principais bases do ensino de Língua Portuguesa, inclusive aquelas presentes nas organizações curriculares na área.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96940'
		},
		'LG028': {
			code: 'LG028',
			name: 'Atividades em Diversidade e Direitos Humanos',
			ementa: 'Atividades teórico-práticas em diversidade e direitos humanos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D9B640'
		},
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D240D9'
		},
		'HL220': {
			code: 'HL220',
			name: 'Prática de Análise Gramatical',
			ementa: 'Descrição, análise e representação de estruturas gramaticais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9140D9'
		},
		'HL236': {
			code: 'HL236',
			name: 'Linguagem: Dimensões Históricas e Sociais',
			ementa: 'Aspectos sociais e históricos da diversidade linguística do Brasil: teoria e prática. Implicações para o ensino. Mód 1: Sociolinguística: dimensões históricas e socioculturais da linguagem, o campo da sociolinguística, variedades do português brasileiro e suas implicações para o ensino. Mód 2: Diversidade linguística e situações de contato linguístico nas sociedades indígenas do Brasil, bilinguismo e multilinguismo. Mód 3: Formação do português brasileiro: a questão das origens e o papel do contato com as línguas indígenas e africanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8BD940'
		},
		'HL337': {
			code: 'HL337',
			name: 'Laboratório de Produção Textual II',
			ementa: 'Os estudos a serem desenvolvidos nessa disciplina enfocarão os seguintes conteúdos: a produção de tecnologias de ensino considerando os processos de progressão referencial e textual; produção de tecnologias de ensino considerando as diferenças entre oralidade e escrita; produção de grades de correção de diferentes gêneros textuais (orais e escritos); produção de tecnologias de ensino considerando os processos de estruturação composicional dos textos; práticas de produção e revisão de textos acadêmicos de divulgação científica.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#5BD940'
		},
		'LA204': {
			code: 'LA204',
			name: 'Leitura e Escrita: Teoria e Prática',
			ementa: 'Introdução às teorias - associacionistas, cognitivas e discursivo-enunciativas - de leitura e de produção de textos escritos e análise de seus impactos no ensino-aprendizagem de leitura/escrita. Abordagem da relação entre leitura e escrita e práticas com textos orais e multimodais em ambientes escolares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9BC40'
		},
		'LA404': {
			code: 'LA404',
			name: 'Ensino de Língua Portuguesa: Marcos Históricos e Documentos Curriculares',
			ementa: 'A constituição da disciplina de Língua Portuguesa. Reformas do ensino e os documentos curriculares de Língua Portuguesa. Políticas educacionais e seu impacto sobre a organização curricular de Língua Portuguesa. Políticas públicas para a leitura e a escrita.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D977'
		},
		'TL404': {
			code: 'TL404',
			name: 'Literatura e Ensino',
			ementa: 'Introdução à discussão sobre o ensino da literatura a partir de uma abordagem de seu conteúdo enquanto disciplina escolar. O conceito de cânone e a formação do cânone literário na literatura brasileira. O problema da periodização na história da literatura, aplicado à literatura brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4077D9'
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'HL324': {
			code: 'HL324',
			name: 'Linguagem e Significação no Ensino de Língua Portuguesa',
			ementa: 'Construção de modos de abordagem da significação no ensino de língua portuguesa. Enunciação, argumentação e sentido: relações entre sujeito falante, língua, linguagem e exterioridade; divisão de sentidos e argumentação. A palavra como unidade linguística: criação lexical, mecanismos de formação de palavras, sentido e construção da referência, dicionarização da língua.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4440D9'
		},
		'HL325': {
			code: 'HL325',
			name: 'Texto, Discurso e Ensino de Língua',
			ementa: 'Apresentação e discussão de conceitos básicos da Análise de discurso, tendo por objetivo a compreensão do funcionamento e circulação dos discursos e práticas do campo escolar. Análise discursiva de materiais de ensino, de textos da legislação educacional e de textos que circulam no ambiente escolar.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D95F'
		},
		'HL804': {
			code: 'HL804',
			name: 'Linguística e Ensino de Português',
			ementa: 'Distinção entre erro, variação e patologias de linguagem. As noções de norma e padrão. O lugar da gramática e das teorias de texto e discurso no ensino de língua materna. Conceitos de gramática. O lugar da metalinguagem no ensino de língua materna. Fundamentos de Linguística relevantes para o ensino de língua materna.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98740'
		},
		'LA303': {
			code: 'LA303',
			name: 'Interpretação: Teoria e Prática',
			ementa: 'Estudo e discussão de teorias da interpretação de diferentes tradições teórico-metodológicas que iluminem questões de natureza teórica e prática consideradas relevantes para uma reflexão mais aprofundada sobre leitura/interpretação de textos e demais objetos semióticos que povoam as práticas letradas contemporâneas, particularmente aquelas contempladas no ensino de língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D983'
		},
		'LA406': {
			code: 'LA406',
			name: 'Laboratório Produção Materiais Didáticos para Ensino Língua Portuguesa',
			ementa: 'Modalidades de organização didática no ensino-aprendizagem de Língua Portuguesa. Materiais didáticos impressos e digitais, plataformas, ambientes, ferramentas, recursos e objetos digitais para o ensino-aprendizagem de Língua Portuguesa. Análise e produção de atividades, recursos e objetos digitais.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#4053D9'
		},
		'TL405': {
			code: 'TL405',
			name: 'Seminários em Ensino de Literatura',
			ementa: 'Estudos sobre o ensino de literatura em uma abordagem interdisciplinar com outros campos das humanidades. O papel das humanidades e da literatura na educação. O problema do valor no estudo da literatura, aplicado à literatura brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C4'
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: ''
		},
		'HL423': {
			code: 'HL423',
			name: 'Aquisição da Linguagem e Ensino de Língua',
			ementa: 'Aquisição da língua materna. Fundamentos teóricos e metodológicos da investigação em aquisição da língua materna. Aspectos estruturais da aquisição da linguagem oral e da linguagem escrita. Análise de cenários pedagógicos dentre: (i) estudo de caso: aspectos da gramática adquirida e comparação com a gramática ensinada na escola; (ii) análise de problemas de escrita de alunos do ensino fundamental, visando verificar as hipóteses construídas pelo aluno; e (iii) manipulação de corpora de aquisição e outras fontes textuais, para uso em atividades de análise linguística para o ensino.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D2D940'
		},
		'HL424': {
			code: 'HL424',
			name: 'Neurolinguística e Ensino de Língua',
			ementa: 'O normal e o patológico: (i) Fundamentos teórico-metodológicos em neurolinguística: as relações entre cérebro, linguagem e cognição: (ii) A relação normal/patológico; reflexão crítica sobre a patologização de processos de ensino-aprendizagem; conceitos de “erro” e de “desvio”; (iii) Práticas de análise linguística (formais e discursivas) de dados empíricos (verbais e não-verbais, de oralidade e de escrita), em contextos escolares; (iv) Desenvolvimento de atividades de natureza reflexiva sobre processos linguístico-cognitivos implicados em processos de ensino e aprendizagem.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D989'
		},
		'LA403': {
			code: 'LA403',
			name: 'Linguagem e Diversidade: Pesquisa e Ensino',
			ementa: 'O trabalho do professor de língua portuguesa em abordagens e temas relacionados à diversidade linguística e sociocultural. Legislações e documentos educacionais brasileiros sobre inclusão e diversidade. Relações entre língua e cultura no desenho dos currículos de Língua Portuguesa. Representações identitárias nas práticas discursivas escolares. A construção social dos preconceitos (linguístico, racial, de gênero etc.) e o seus impactos em sala de aula. Discussão acerca dos conceitos de representação, multiculturalismo e multilinguismo e de suas implicações para o ensino crítico de língua portuguesa. Análise de situações pedagógicas e produção de atividade didática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#CCD940'
		},
		'TL406': {
			code: 'TL406',
			name: 'Laboratório de Ensino em Literatura',
			ementa: 'Pesquisa orientada para elaboração de propostas de ensino de Literatura.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D94046'
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: ''
		},
		'HL135': {
			code: 'HL135',
			name: 'Escrita e Oralidade',
			ementa: 'Estudo de processos relativos a usos da oralidade e da escrita. Módulo 1: Caracterização da oralidade e da escrita: processos de produção oral e de produção escrita; usos sociais da linguagem: gêneros orais e escritos; consequências para o ensino de língua portuguesa. Módulo 2: Sistemas de escrita: escrita alfabética e sua base fonológica; marcação prosódica na oralidade, pontuação e outros sinais na escrita; avaliação e compreensão de desvios ortográficos. Módulo 3: Política linguística e normatização; história da ortografia da língua portuguesa; reformas ortográficas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4083D9'
		},
		'LA504': {
			code: 'LA504',
			name: 'Linguagem e Tecnologias',
			ementa: 'Enfoques históricos das relações entre tecnologia, linguagem e sociedade e suas repercussões nas concepções de língua, conhecimento e sujeito. Mutações na linguagem em relação à difusão e apropriação de inovações tecnológicas. Processos de naturalização da escrita enquanto tecnologia e suas repercussões educativas, sociais, cognitivas e epistemológicas na atualidade. Especificidades da interação e do funcionamento da linguagem nas interfaces hipermidiáticas e nos ambientes de comunicação mediada por computador, particularmente nos ambientes escolares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4048D9'
		},
		'LA910': {
			code: 'LA910',
			name: 'Introdução aos Estudos do Português como Segunda Língua e Língua Estrangeira',
			ementa: 'Introdução aos estudos sobre o português como segunda língua e língua estrangeira (L2/LE). Panorama do português como língua adicional no cenário mundial e brasileiro. História do ensino do português como L2/LE no Brasil. A pesquisa nesse campo de atuação profissional. Levantamento e análise dos estudos existentes na área.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98D40'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:26},
			requisitos: '',
			color: ''
		},
		'HL245': {
			code: 'HL245',
			name: 'Escrita e Oralidade: Prática de Análise',
			ementa: 'Relações entre fala/escrita e oralidade/letramento e os modos de funcionamento da fala nos variados contextos de interação. Os impactos da concepção do contínuo oralidade-escrita no ensino de língua materna. Projetos de ensino com gêneros orais formais públicos. Projetos de ensino com gêneros literários enfocando os índices de oralidade neles presentes.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407DD9'
		},
		'LA712': {
			code: 'LA712',
			name: 'Análise Linguística no Ensino de Língua Portuguesa',
			ementa: 'Reflexão crítica acerca do eixo da análise linguística no âmbito do ensino de língua portuguesa. Princípios teórico-metodológicos da prática de análise linguística. Questões de análise linguística relevantes para o ensino. Didatizações no eixo da análise linguística (materiais didáticos, projetos, aulas etc.).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9D440'
		},
		'LA911': {
			code: 'LA911',
			name: 'A Sala de Aula de Português como Segunda Língua e Língua Estrangeira',
			ementa: 'Reflexão crítica sobre os principais modelos de aquisição e de aprendizagem de segunda língua e língua estrangeira (L2/LE). Concepções de língua(gem) e proficiência. Reflexão crítica sobre os conceitos de abordagem, planejamento, metodologias de ensino e avaliação. A formação do professor de português como segunda língua e língua estrangeira. Questões específicas relacionadas ao ensino e avaliação de cada uma das quatro habilidades. Análise de práticas em andamento nesse campo de atuação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4042D9'
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:24},
			requisitos: '',
			color: ''
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#4A40D9'
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D953'
		},
		'LA912': {
			code: 'LA912',
			name: 'Produção e Avaliação de Materiais para o Ensino de Português como L2/LE',
			ementa: 'Reflexão crítica sobre critérios para a avaliação e produção de materiais didáticos impressos e digitais para o ensino de português como segunda língua e língua estrangeira (L2/LE). Reflexão sobre o impacto das novas tecnologias na elaboração de materiais didáticos. Prática de elaboração de unidades de ensino nesse campo de atuação a partir da análise de necessidades de públicos específicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA910'],
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: ''
		},
		'HL913': {
			code: 'HL913',
			name: 'Políticas Linguísticas',
			ementa: 'Gestos de intervenção sobre as línguas e seus efeitos na constituição histórica dos grupos sociais. Línguas e suas divisões: oficiais, nacionais, transnacionais, francas, maternas, estrangeiras, entre outras. Línguas minoritárias e línguas de Estado. Políticas de ensino de línguas e planificação. Relações entre línguas e relações entre Estados nacionais. Organismos supranacionais e políticas linguísticas. Documentação de línguas. Português globalizado.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940BC'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: ''
		},
		'LA271': {
			code: 'LA271',
			name: 'Estágio Supervisionado em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Introdução a questões envolvendo o estágio supervisionado a ser cumprido na área de ensino/aprendizagem/avaliação de Português como Segunda Língua/Língua Estrangeira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: '',
			color: '#D940B0'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'LA281': {
			code: 'LA281',
			name: 'Estágio Supervisionado em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Aprofundamento de questões envolvendo o estágio supervisionado a ser cumprido na área de ensino/aprendizagem/avaliação de Português como Segunda Língua/Língua Estrangeira.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: ['LA271'],
			color: ''
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#AE40D9'
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5040D9'
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#C040D9'
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#8540D9'
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9D0'
		},
		'HL070': {
			code: 'HL070',
			name: 'O Português no Brasil',
			ementa: 'A implantação da língua no Brasil: aspectos históricos e sociais; formação do português brasileiro: variedades padrão e não padrão; estudo de variedades do português brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#5540D9'
		},
		'HL071': {
			code: 'HL071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#50D940'
		},
		'HL176': {
			code: 'HL176',
			name: 'Tópicos em Sociolinguística e Ensino',
			ementa: 'Histórico e constituição da disciplina Língua Portuguesa nos currículos escolares; o problema da aquisição do padrão; a perspectiva sociolinguística na sala de aula: o problema da escolha de códigos comunicativos e linguísticos e de estilos de fala.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#61D940'
		},
		'HL260': {
			code: 'HL260',
			name: 'Sociolinguística',
			ementa: 'O campo da sociolinguística: histórico e constituição. Conceitos teóricos principais: variação e mudança; variedades linguísticas - variedades sociais e regionais; variedades padrão e não padrão; mudança linguística.Temas de interesse; bilinguismo, plurilinguismo, línguas veiculares; pidgins e crioulos; planejamento linguístico; atitudes e comportamentos linguísticos. Contribuições da sociolinguística para o ensino de língua materna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8B40D9'
		},
		'HL481': {
			code: 'HL481',
			name: 'Línguas Indígenas I',
			ementa: 'Línguas Indígenas faladas no Brasil: critérios de classificação e sua distribuição. Demografia. Principais características fonológicas e gramaticais de línguas selecionadas. Teoria e Métodos de trabalho de Campo para o estudo de línguas indígenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6740D9'
		},
		'HL533': {
			code: 'HL533',
			name: 'História das Ideias Linguísticas',
			ementa: 'Estudo de procedimentos e conceitos na constituição e circulação do saber linguístico, importantes para a compreensão da Linguística como ciência e de sua relação com outras disciplinas do Conhecimento. Discussão de processos e instrumentos de gramatização, especificamente gramáticas e dicionários. Os colégios e seu papel na construção da língua nacional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D942'
		},
		'HL545': {
			code: 'HL545',
			name: 'Linguística Histórica do Português I',
			ementa: 'A formação histórica da língua portuguesa - elementos de fonologia, morfologia e sintaxe do português arcáico - panorama da evolução da língua depois do século XVI, em Portugal e no Brasil - a questão da periodização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A2D940'
		},
		'HL645': {
			code: 'HL645',
			name: 'Linguística Histórica do Português II',
			ementa: 'Estudo da história da língua portuguesa em Portugal e no Brasil, com enfoque no período posterior ao séc. XVI, a partir da leitura e análise de textos não modernizados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D96B'
		},
		'HL904': {
			code: 'HL904',
			name: 'Investigação Científica I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#6D40D9'
		},
		'HL905': {
			code: 'HL905',
			name: 'Investigação Científica II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#C640D9'
		},
		'HL906': {
			code: 'HL906',
			name: 'Investigação Científica III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D9D6'
		},
		'HL907': {
			code: 'HL907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Linguística, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: ['AA200'],
			color: '#40BED9'
		},
		'HL915': {
			code: 'HL915',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Desenvolvimento de projeto de pesquisa (definição de objetivos, revisão bibliográfica, constituição de corpus e análise preliminar dos dados) com vistas à elaboração de trabalho final de curso acerca de políticas de planificação e gestão linguística do português como L2/LE no contexto nacional e mundial, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA910', 'LA911', 'LA912'],
			color: ''
		},
		'HL916': {
			code: 'HL916',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Conclusão da análise de dados e redação de trabalho final de curso envolvendo pesquisa individual acerca de políticas de planificação e gestão linguística do português como L2/LE no contexto nacional e mundial, sob orientação de um professor. A disciplina prevê, ao final do semestre, defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HL915'],
			color: ''
		},
		'LA071': {
			code: 'LA071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D95240'
		},
		'LA607': {
			code: 'LA607',
			name: 'Educação Bilíngue: Teoria e Prática',
			ementa: 'Introdução aos estudos e à pesquisa em Educação Bilíngue. Exame dos diferentes contextos educacionais bilíngues no país (contexto indígena, de imigração, de surdez, escolas internacionais etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D995'
		},
		'LA710': {
			code: 'LA710',
			name: 'Tópicos em Língua Estrangeira / Segunda Língua: Teoria e Prática',
			ementa: 'Reflexão crítica sobre abordagens, metodologia e avaliação no ensino de línguas estrangeiras e segundas línguas. Introdução à pesquisa sobre esses tópicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D965'
		},
		'LA805': {
			code: 'LA805',
			name: 'Ensino de Língua Estrangeira',
			ementa: 'Reflexão crítica sobre abordagens, metodologias de ensino e avaliação a partir dessa comparação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94093'
		},
		'LA904': {
			code: 'LA904',
			name: 'Investigação Científica I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94075'
		},
		'LA905': {
			code: 'LA905',
			name: 'Investigação Científica II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#A840D9'
		},
		'LA906': {
			code: 'LA906',
			name: 'Investigação Científica III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4095D9'
		},
		'LA907': {
			code: 'LA907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Linguística Aplicada desenvolvido individualmente pelo aluno, sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: ['AA200'],
			color: '#6140D9'
		},
		'LA914': {
			code: 'LA914',
			name: 'Ensino de Português como Segunda Língua para Surdos',
			ementa: 'A escolarização de alunos surdos. Bilinguismo em contexto de surdez. O ensino da modalidade escrita da Língua Portuguesa, como segunda língua, para pessoas surdas. A avaliação da produção escrita de alunos surdos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5B40D9'
		},
		'LA915': {
			code: 'LA915',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Desenvolvimento de projeto de pesquisa (definição de objetivos, revisão bibliográfica, constituição de corpus e análise preliminar dos dados) com vistas à elaboração de trabalho final de curso acerca do ensino, da aprendizagem e da avaliação de português como L2/LE, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA910', 'LA911', 'LA912'],
			color: ''
		},
		'LA916': {
			code: 'LA916',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Conclusão da análise de dados e redação de trabalho final de curso envolvendo pesquisa individual acerca do ensino, da aprendizagem e da avaliação de português como L2/LE, sob orientação de um professor. A disciplina prevê, ao final do semestre, defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA915'],
			color: ''
		},
		'TL071': {
			code: 'TL071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em atividade relativa ao ensino de literatura.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#C0D940'
		},
		'TL087': {
			code: 'TL087',
			name: 'Tópicos Especiais de Literatura Brasileira I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9407B'
		},
		'TL088': {
			code: 'TL088',
			name: 'Tópicos Especiais de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97540'
		},
		'TL089': {
			code: 'TL089',
			name: 'Tópicos Especiais de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9409F'
		},
		'TL128': {
			code: 'TL128',
			name: 'Tópicos em Literatura Brasileira I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94063'
		},
		'TL129': {
			code: 'TL129',
			name: 'Tópicos Especiais em Teatro I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#85D940'
		},
		'TL138': {
			code: 'TL138',
			name: 'Tópicos em Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#67D940'
		},
		'TL139': {
			code: 'TL139',
			name: 'Tópicos Especiais em Teatro II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7FD940'
		},
		'TL144': {
			code: 'TL144',
			name: 'Tópicos Especiais em Prosa Não-Ficcional I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B6'
		},
		'TL145': {
			code: 'TL145',
			name: 'Tópicos X: Textos em Teatro III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4AD940'
		},
		'TL146': {
			code: 'TL146',
			name: 'Tópicos XI: Textos em Teatro IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40C4D9'
		},
		'TL148': {
			code: 'TL148',
			name: 'Tópicos em Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D96340'
		},
		'TL149': {
			code: 'TL149',
			name: 'Tópicos XII: Textos em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CC40D9'
		},
		'TL151': {
			code: 'TL151',
			name: 'Tópicos XIII: Textos em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C8'
		},
		'TL152': {
			code: 'TL152',
			name: 'Tópicos XIV: Textos em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D4'
		},
		'TL153': {
			code: 'TL153',
			name: 'Tópicos XV: Textos em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97D'
		},
		'TL154': {
			code: 'TL154',
			name: 'Tópicos XVI: Textos em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94069'
		},
		'TL156': {
			code: 'TL156',
			name: 'Tópicos XVII: Textos em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#406BD9'
		},
		'TL158': {
			code: 'TL158',
			name: 'Tópicos em Literatura Brasileira IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94052'
		},
		'TL159': {
			code: 'TL159',
			name: 'Tópicos XVIII: Textos em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9404C'
		},
		'TL161': {
			code: 'TL161',
			name: 'Tópicos XIX: Textos em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40ACD9'
		},
		'TL162': {
			code: 'TL162',
			name: 'Tópicos em Pesquisa XIII: Literatura e Imprensa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A6'
		},
		'TL163': {
			code: 'TL163',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B8'
		},
		'TL164': {
			code: 'TL164',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A6D9'
		},
		'TL165': {
			code: 'TL165',
			name: 'Tópicos em Pesquisa I: Teoria Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9406F'
		},
		'TL166': {
			code: 'TL166',
			name: 'Tópicos em Pesquisa II: Crítica Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D94E'
		},
		'TL168': {
			code: 'TL168',
			name: 'Tópicos em Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99940'
		},
		'TL169': {
			code: 'TL169',
			name: 'Tópicos Especiais em Prosa Não-Ficcional II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D0D9'
		},
		'TL170': {
			code: 'TL170',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408D'
		},
		'TL171': {
			code: 'TL171',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D971'
		},
		'TL172': {
			code: 'TL172',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4059D9'
		},
		'TL173': {
			code: 'TL173',
			name: 'Tópicos Especiais em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99340'
		},
		'TL190': {
			code: 'TL190',
			name: 'Tópicos Especiais em Poesia I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#44D940'
		},
		'TL191': {
			code: 'TL191',
			name: 'Tópicos Especiais em Poesia II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7F40D9'
		},
		'TL192': {
			code: 'TL192',
			name: 'Tópicos Especiais em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95D40'
		},
		'TL193': {
			code: 'TL193',
			name: 'Tópicos Especiais em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A240D9'
		},
		'TL194': {
			code: 'TL194',
			name: 'Tópicos Especiais em Poesia V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9405D'
		},
		'TL195': {
			code: 'TL195',
			name: 'Tópicos Especiais em Prosa de Ficção I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AED940'
		},
		'TL196': {
			code: 'TL196',
			name: 'Tópicos Especiais em Prosa de Ficção II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94081'
		},
		'TL197': {
			code: 'TL197',
			name: 'Tópicos Especiais em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#73D940'
		},
		'TL198': {
			code: 'TL198',
			name: 'Tópicos Especiais em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D99B'
		},
		'TL199': {
			code: 'TL199',
			name: 'Tópicos Especiais em Prosa de Ficção V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97B40'
		},
		'TL206': {
			code: 'TL206',
			name: 'Tópicos Especiais em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A0D9'
		},
		'TL208': {
			code: 'TL208',
			name: 'Tópicos em Literatura Brasileira: Autores I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940C2'
		},
		'TL210': {
			code: 'TL210',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B440D9'
		},
		'TL223': {
			code: 'TL223',
			name: 'Tópicos em Pesquisa XVIII: Literatura e Suportes Materiais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#404ED9'
		},
		'TL224': {
			code: 'TL224',
			name: 'Tópicos em Pesquisa XX: Literatura e Suportes Materiais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C6D940'
		},
		'TL225': {
			code: 'TL225',
			name: 'Tópicos em Pesquisa XXI: Literatura e Suportes Materiais IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D948'
		},
		'TL226': {
			code: 'TL226',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BAD940'
		},
		'TL228': {
			code: 'TL228',
			name: 'Tópicos em Literatura Brasileira: Autores II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9BE'
		},
		'TL229': {
			code: 'TL229',
			name: 'Tópicos em Pesquisa XXI: Literatura e Ensino II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4065D9'
		},
		'TL230': {
			code: 'TL230',
			name: 'Tópicos em Pesquisa XXII: Literatura e Ensino III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B2D9'
		},
		'TL231': {
			code: 'TL231',
			name: 'Tópicos em Pesquisa XXIII: Literatura e Ensino IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9CE40'
		},
		'TL232': {
			code: 'TL232',
			name: 'Tópicos em Pesquisa XXIV: Literatura e suas Fontes Históricas II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D840D9'
		},
		'TL233': {
			code: 'TL233',
			name: 'Tópicos em Pesquisa XXV: Literatura e suas Fontes Históricas III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#79D940'
		},
		'TL234': {
			code: 'TL234',
			name: 'Tópicos em Pesquisa XXVI: Literatura e suas Fontes Históricas IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94099'
		},
		'TL235': {
			code: 'TL235',
			name: 'Tópicos em Pesquisa XXVII: Literatura e Práticas de Leitura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95740'
		},
		'TL236': {
			code: 'TL236',
			name: 'Tópicos em Pesquisa XXVIII: Literatura e Práticas de Leitura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9AC'
		},
		'TL237': {
			code: 'TL237',
			name: 'Tópicos em Pesquisa XXIX: Literatura e Práticas de Leitura IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4089D9'
		},
		'TL238': {
			code: 'TL238',
			name: 'Tópicos em Literatura Brasileira: Autores III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7940D9'
		},
		'TL239': {
			code: 'TL239',
			name: 'Tópicos em Pesquisa XXX: Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9D40D9'
		},
		'TL240': {
			code: 'TL240',
			name: 'Tópicos em Pesquisa XXXI: Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94640'
		},
		'TL241': {
			code: 'TL241',
			name: 'Tópicos em Pesquisa XXXII: Tradução Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D8D940'
		},
		'TL242': {
			code: 'TL242',
			name: 'Tópicos em Pesquisa XXXIII: Temas e Questões de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#405FD9'
		},
		'TL243': {
			code: 'TL243',
			name: 'Tópicos em Pesquisa XXXIV: Temas e Questões de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040'
		},
		'TL244': {
			code: 'TL244',
			name: 'Tópicos em Pesquisa XXXV: Temas e Questões de Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9AA40'
		},
		'TL245': {
			code: 'TL245',
			name: 'Tópicos em Pesquisa XXXVI: Literatura e Arquivos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9DD940'
		},
		'TL246': {
			code: 'TL246',
			name: 'Tópicos em Pesquisa XXXVII: Literatura e Arquivos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A8D940'
		},
		'TL247': {
			code: 'TL247',
			name: 'Tópicos em Pesquisa XXXVIII: Literatura e Arquivos IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98140'
		},
		'TL248': {
			code: 'TL248',
			name: 'Tópicos em Pesquisa XXXIX: Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94057'
		},
		'TL249': {
			code: 'TL249',
			name: 'Tópicos em Pesquisa XL: Teoria Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B4D940'
		},
		'TL250': {
			code: 'TL250',
			name: 'Tópicos em Pesquisa XL: Teoria Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B2'
		},
		'TL251': {
			code: 'TL251',
			name: 'Tópicos em Pesquisa XLII: Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940AA'
		},
		'TL252': {
			code: 'TL252',
			name: 'Tópicos em Pesquisa XLIII: Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40CAD9'
		},
		'TL253': {
			code: 'TL253',
			name: 'Tópicos em Pesquisa XLIV: Crítica Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#55D940'
		},
		'TL254': {
			code: 'TL254',
			name: 'Tópicos em Pesquisa XLV: Historiografia Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#408FD9'
		},
		'TL256': {
			code: 'TL256',
			name: 'Tópicos em Pesquisa XLVI: Historiografia Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96F40'
		},
		'TL257': {
			code: 'TL257',
			name: 'Tópicos em Pesquisa XLVII: Historiografia Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94C40'
		},
		'TL264': {
			code: 'TL264',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D959'
		},
		'TL265': {
			code: 'TL265',
			name: 'Tópicos Especiais em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98F'
		},
		'TL318': {
			code: 'TL318',
			name: 'Tópicos em Literatura Brasileira: Regiões I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6DD940'
		},
		'TL328': {
			code: 'TL328',
			name: 'Tópicos em Literatura Brasileira: Regiões II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D6D9'
		},
		'TL338': {
			code: 'TL338',
			name: 'Tópicos em Literatura Brasileira: Regiões III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9C240'
		},
		'TL418': {
			code: 'TL418',
			name: 'Tópicos em Literatura Brasileira: Movimentos I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9A440'
		},
		'TL428': {
			code: 'TL428',
			name: 'Tópicos em Literatura Brasileira: Movimentos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94087'
		},
		'TL438': {
			code: 'TL438',
			name: 'Tópicos em Literatura Brasileira: Movimentos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#91D940'
		},
		'TL518': {
			code: 'TL518',
			name: 'Tópicos em Literatura Brasileira: Gêneros I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940A4'
		},
		'TL528': {
			code: 'TL528',
			name: 'Tópicos em Literatura Brasileira: Gêneros II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99F40'
		},
		'TL538': {
			code: 'TL538',
			name: 'Tópicos em Literatura Brasileira: Gêneros III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7340D9'
		},
		'TL618': {
			code: 'TL618',
			name: 'Tópicos em Literatura Brasileira: Marginais I',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9740D9'
		},
		'TL628': {
			code: 'TL628',
			name: 'Tópicos em Literatura Brasileira: Marginais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9CA'
		},
		'TL638': {
			code: 'TL638',
			name: 'Tópicos em Literatura Brasileira: Marginais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9C840'
		},
		'TL904': {
			code: 'TL904',
			name: 'Investigação Científica I',
			ementa: 'Elaboração de projeto de pesquisa no campo dos Estudos Literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D9A0'
		},
		'TL905': {
			code: 'TL905',
			name: 'Investigação Científica II',
			ementa: 'Elaboração de projeto de pesquisa no campo dos Estudos Literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#97D940'
		},
		'TL906': {
			code: 'TL906',
			name: 'Investigação Científica III',
			ementa: 'Elaboração de projeto de pesquisa no campo dos Estudos Literários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D940CE'
		},
		'TL907': {
			code: 'TL907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa no campo dos Estudos Literários, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:8, D:0, HS:10, SL:2, C:10},
			requisitos: ['AA200'],
			color: '#BA40D9'
		},
		'TL915': {
			code: 'TL915',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira I',
			ementa: 'Desenvolvimento de projeto de pesquisa (definição de objetivos, revisão bibliográfica, constituição de corpus e análise preliminar dos dados) com vistas à elaboração de trabalho final de curso acerca do ensino de literatura e cultura brasileiras em contexto de português como L2/LE, desenvolvido individualmente pelo aluno sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['LA910', 'LA911', 'LA912'],
			color: ''
		},
		'TL916': {
			code: 'TL916',
			name: 'Monografia em Português como Segunda Língua / Língua Estrangeira II',
			ementa: 'Conclusão da análise de dados e redação de trabalho final de curso envolvendo tema de pesquisa individual sobre o ensino de literatura e cultura brasileiras em contexto de português como L2/LE, sob orientação de um professor. A disciplina prevê, ao final do semestre, defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['TL915'],
			color: ''
		}
	}
};

export default catalogue;
