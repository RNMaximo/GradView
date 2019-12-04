const catalogue = {
	totalCredits: 208,
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
			subjects: ['LA001', 'LG027', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['EL774', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EL874', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['TL110', 'TL111', 'TL112', 'TL113', 'TL114', 'TL115', 'TL117', 'TL119', 'TL145', 'TL146', 'TL149', 'TL151', 'TL152', 'TL153', 'TL154', 'TL156', 'TL159', 'TL161'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['TL162', 'TL163', 'TL164', 'TL170', 'TL171', 'TL172', 'TL211', 'TL212', 'TL213', 'TL214', 'TL215', 'TL216', 'TL217', 'TL219', 'TL220', 'TL221', 'TL223', 'TL224', 'TL225', 'TL229', 'TL230', 'TL231', 'TL232', 'TL233', 'TL234', 'TL235', 'TL236', 'TL237', 'TL239', 'TL240', 'TL241', 'TL242', 'TL243', 'TL244', 'TL245', 'TL246', 'TL247', 'TL248', 'TL249', 'TL250', 'TL251', 'TL252', 'TL253', 'TL254', 'TL256', 'TL257'],
		},
		'elet-3': {
			credits: 32,
			hasRestrictions: true,
			subjects: ['HL904', 'HL905', 'HL906', 'HL907', 'LA904', 'LA905', 'LA906', 'LA907', 'TL904', 'TL905', 'TL906', 'TL907'],
		},
		'elet-4': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL511', 'EL683'],
		},
		'elet-5': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-7': {
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
			color: '#A3D940',
			obligatory: true
		},
		'HL127': {
			code: 'HL127',
			name: 'Introdução às Ciências da Linguagem',
			ementa: 'Visão geral do fenômeno da linguagem e dos métodos de investigação científica desse objeto. Mód 1: Textos fundamentais da linguística. Mód 2: História das Ideias Linguísticas: linguística, língua nacional e instrumentos de gramatização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9AB40',
			obligatory: true
		},
		'HL143': {
			code: 'HL143',
			name: 'Latim I',
			ementa: 'Introdução ao estudo da palavra latina (em especial, do nome e do verbo latinos e suas particularidades morfossintáticas) e da literatura e civilização romanas. Tradução comentada de trechos adaptados da Aulularia de Plauto. Noções de história do latim e de latim vulgar. (Seções 1A-1D do método: Reading Latin, Cambridge Un. Press.)',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D95040',
			obligatory: true
		},
		'LA104': {
			code: 'LA104',
			name: 'Letramentos: Teoria e Prática',
			ementa: 'Introdução aos estudos dos letramentos como processo histórico-ideológico de apropriação da cultura da escrita. Sensibilização para mitos e preconceitos que cercam os conceitos (alfabetização, alfabetismos, letramentos) e que sustentam certos enfoques que orientam a escolarização. Revisão do conceito de letramentos a partir das práticas multiletradas contemporâneas. A disciplina inclui necessariamente um trabalho de pesquisa no campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95940',
			obligatory: true
		},
		'LG021': {
			code: 'LG021',
			name: 'Atividades Científico-Culturais I',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Gradução da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9A340',
			obligatory: true
		},
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#408AD9',
			obligatory: true
		},
		'HL220': {
			code: 'HL220',
			name: 'Prática de Análise Gramatical',
			ementa: 'Gramática Tradicional: revisão crítica de conceitos e nomenclaturas. Funções sintáticas e categorias sintagmáticas: práticas de análise e representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D948',
			obligatory: true
		},
		'HL236': {
			code: 'HL236',
			name: 'Linguagem: Dimensões Históricas e Sociais',
			ementa: 'Aspectos sociais e históricos da diversidade linguística do Brasil: teoria e prática. Implicações para o ensino. Mód 1: Sociolinguística: dimensões históricas e socioculturais da linguagem, o campo da sociolinguística, variedades do português brasileiro e suas implicações para o ensino. Mód 2: Diversidade linguística e situações de contato linguístico nas sociedades indígenas do Brasil, bilinguismo e multilinguismo. Mód 3: Formação do português brasileiro: a questão das origens e o papel do contato com as línguas indígenas e africanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4082D9',
			obligatory: true
		},
		'LA204': {
			code: 'LA204',
			name: 'Leitura e Escrita: Teoria e Prática',
			ementa: 'Introdução às teorias - associacionistas, cognitivas e discursivo-enunciativas - de leitura e de produção de textos escritos e análise de seus impactos no ensino-aprendizagem de leitura/escrita. Abordagem da relação entre leitura e escrita e práticas com textos orais e multimodais em ambientes escolares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97140',
			obligatory: true
		},
		'LG022': {
			code: 'LG022',
			name: 'Atividades Científico-Culturais II',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#409BD9',
			obligatory: true
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B4D940',
			obligatory: true
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940C4',
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
		'HL323': {
			code: 'HL323',
			name: 'Linguagem e Significação: Teoria e Prática',
			ementa: 'Linguagem e significação: teoria e prática. Mód 1: Discurso e Texto: produção e formulação de sentidos; gêneros discursivos e textuais; texto, intertexto e interdiscurso; leitura e interpretação; condições de produção; processo de subjetivação, autoria. Mód 2: Semântica e Pragmática: sentido e referência; relações de sentido; polissemia; enunciação; implícitos; atos de fala. Mód 3: Lexicologia e Lexicografia: noções básicas de lexicologia; problemas de definição lexicográfica; léxico, dicionário e significação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8240D9',
			obligatory: true
		},
		'LA303': {
			code: 'LA303',
			name: 'Interpretação: Teoria e Prática',
			ementa: 'Estudo e discussão de teorias da interpretação de diferentes tradições teórico-metodológicas que iluminem questões de natureza teórica e prática consideradas relevantes para uma reflexão mais aprofundada sobre leitura/interpretação de textos e demais objetos semióticos que povoam as práticas letradas contemporâneas, particularmente aquelas contempladas no ensino de língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40CCD9',
			obligatory: true
		},
		'LG023': {
			code: 'LG023',
			name: 'Atividades Científico-Culturais III',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9407A',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL422': {
			code: 'HL422',
			name: 'Linguagem e Pensamento: Teoria e Prática',
			ementa: 'Aquisição da língua materna. O normal e o patológico. Mód. 1: Aquisição da linguagem: heterogeneidade e singularidade da fala da criança; o erro na aquisição. Mód. 2: Neurolinguística: a relação normal/patológico; visão crítica sobre patologias da linguagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D992',
			obligatory: true
		},
		'LA403': {
			code: 'LA403',
			name: 'Linguagem e Diversidade: Pesquisa e Ensino',
			ementa: 'Diversidade linguística e sociocultural no trabalho do professor de língua portuguesa. Variação linguística e a noção de erro. Preconceito linguístico e práticas discursivas escolares. Discussão acerca dos conceitos de representação, multiculturalismo e identidade e de suas implicações para o ensino crítico de língua portuguesa. Políticas linguísticas e ensino de português em contextos multilíngues.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96140',
			obligatory: true
		},
		'LG024': {
			code: 'LG024',
			name: 'Atividades Científico-Culturais IV',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B4',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL135': {
			code: 'HL135',
			name: 'Escrita e Oralidade',
			ementa: 'Estudo de processos relativos a usos da oralidade e da escrita. Módulo 1: Caracterização da oralidade e da escrita: processos de produção oral e de produção escrita; usos sociais da linguagem: gêneros orais e escritos. Módulo 2: Sistemas de escrita: história da escrita; escrita alfabética e sua base fonológica; marcação prosódica na oralidade, pontuação e outros sinais na escrita. Módulo 3: Constituição histórica da escrita no Brasil: política linguística e normatização; história da ortografia da língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D950',
			obligatory: true
		},
		'LA504': {
			code: 'LA504',
			name: 'Linguagem e Tecnologias',
			ementa: 'Enfoques históricos das relações entre tecnologia, linguagem e sociedade e suas repercussões nas concepções de língua, conhecimento e sujeito. Mutações na linguagem em relação à difusão e apropriação de inovações tecnológicas. Processos de naturalização da escrita enquanto tecnologia e suas repercussões educativas, sociais, cognitivas e epistemológicas na atualidade. Especificidades da interação e do funcionamento da linguagem nas interfaces hipermidiáticas e nos ambientes de comunicação mediada por computador, particularmente nos ambientes escolares.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94071',
			obligatory: true
		},
		'LG025': {
			code: 'LG025',
			name: 'Atividades Científico-Culturais V',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9C440',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HL245': {
			code: 'HL245',
			name: 'Escrita e Oralidade: Prática de Análise',
			ementa: 'Prática de análise da linguagem: gêneros orais e escritos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D961',
			obligatory: true
		},
		'LA712': {
			code: 'LA712',
			name: 'Análise Linguística no Ensino de Língua Portuguesa',
			ementa: 'Reflexão crítica acerca do eixo da análise linguística no âmbito do ensino de língua portuguesa. Princípios teórico-metodológicos da prática de análise linguística. Questões de análise linguística relevantes para o ensino. Didatizações no eixo da análise linguística (materiais didáticos, projetos, aulas etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#82D940',
			obligatory: true
		},
		'LG026': {
			code: 'LG026',
			name: 'Atividades Científico-Culturais VI',
			ementa: 'Atividades científicos-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408A',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D971',
			obligatory: true
		},
		'LG027': {
			code: 'LG027',
			name: 'Atividades Científico-Culturais VII',
			ementa: 'Atividades científicos-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Gradução da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CC40D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:23},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:21},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#B440D9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#B440D9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940A3',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40B4D9',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D96940',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9CC40',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9409B',
			obligatory: false
		},
		'HL071': {
			code: 'HL071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:3, D:0, HS:7, SL:4, C:7},
			requisitos: '',
			color: '#40D5D9',
			obligatory: false
		},
		'HL904': {
			code: 'HL904',
			name: 'Investigação Científica I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94092',
			obligatory: false
		},
		'HL905': {
			code: 'HL905',
			name: 'Investigação Científica II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D940',
			obligatory: false
		},
		'HL906': {
			code: 'HL906',
			name: 'Investigação Científica III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#92D940',
			obligatory: false
		},
		'HL907': {
			code: 'HL907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Linguística, desenvolvido individualmente pelo aluno sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#5940D9',
			obligatory: false
		},
		'LA071': {
			code: 'LA071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:3, D:0, HS:7, SL:4, C:7},
			requisitos: '',
			color: '#D94840',
			obligatory: false
		},
		'LA904': {
			code: 'LA904',
			name: 'Investigação Científica I',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40BCD9',
			obligatory: false
		},
		'LA905': {
			code: 'LA905',
			name: 'Investigação Científica II',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40D969',
			obligatory: false
		},
		'LA906': {
			code: 'LA906',
			name: 'Investigação Científica III',
			ementa: 'Tema de pesquisa a ser desenvolvido individualmente pelo aluno, sob orientação de um professor.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D94050',
			obligatory: false
		},
		'LA907': {
			code: 'LA907',
			name: 'Monografia',
			ementa: 'Trabalho final de curso envolvendo tema de pesquisa em Linguística Aplicada desenvolvido individualmente pelo aluno, sob orientação de um professor. A disciplina prevê defesa pública do trabalho perante banca constituída pelo professor orientador e mais dois membros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D9BC40',
			obligatory: false
		},
		'TL071': {
			code: 'TL071',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado a ser cumprido em uma das áreas de atuação previstas pelo curso.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:3, D:0, HS:7, SL:4, C:7},
			requisitos: '',
			color: '#D94061',
			obligatory: false
		},
		'TL110': {
			code: 'TL110',
			name: 'Textos em Teatro I',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9BD940',
			obligatory: false
		},
		'TL111': {
			code: 'TL111',
			name: 'Textos em Teatro II',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98A',
			obligatory: false
		},
		'TL112': {
			code: 'TL112',
			name: 'Textos em Poesia I',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940CC',
			obligatory: false
		},
		'TL113': {
			code: 'TL113',
			name: 'Textos em Poesia II',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C4D940',
			obligatory: false
		},
		'TL114': {
			code: 'TL114',
			name: 'Textos em Prosa de Ficção I',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40ABD9',
			obligatory: false
		},
		'TL115': {
			code: 'TL115',
			name: 'Textos em Prosa de Ficção II',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7140D9',
			obligatory: false
		},
		'TL117': {
			code: 'TL117',
			name: 'Textos em Prosa Não-Ficcional II',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94082',
			obligatory: false
		},
		'TL119': {
			code: 'TL119',
			name: 'Textos em Teoria, Crítica e História Literária II',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D99B',
			obligatory: false
		},
		'TL145': {
			code: 'TL145',
			name: 'Tópicos X: Textos em Teatro III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BC',
			obligatory: false
		},
		'TL146': {
			code: 'TL146',
			name: 'Tópicos XI: Textos em Teatro IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D959',
			obligatory: false
		},
		'TL149': {
			code: 'TL149',
			name: 'Tópicos XII: Textos em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98A40',
			obligatory: false
		},
		'TL151': {
			code: 'TL151',
			name: 'Tópicos XIII: Textos em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940BC',
			obligatory: false
		},
		'TL152': {
			code: 'TL152',
			name: 'Tópicos XIV: Textos em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4069D9',
			obligatory: false
		},
		'TL153': {
			code: 'TL153',
			name: 'Tópicos XV: Textos em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4840D9',
			obligatory: false
		},
		'TL154': {
			code: 'TL154',
			name: 'Tópicos XVI: Textos em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8A40D9',
			obligatory: false
		},
		'TL156': {
			code: 'TL156',
			name: 'Tópicos XVII: Textos em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9AB',
			obligatory: false
		},
		'TL159': {
			code: 'TL159',
			name: 'Tópicos XVIII: Textos em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6940D9',
			obligatory: false
		},
		'TL161': {
			code: 'TL161',
			name: 'Tópicos XIX: Textos em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407AD9',
			obligatory: false
		},
		'TL162': {
			code: 'TL162',
			name: 'Tópicos em Pesquisa XIII: Literatura e Imprensa II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4092D9',
			obligatory: false
		},
		'TL163': {
			code: 'TL163',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#ABD940',
			obligatory: false
		},
		'TL164': {
			code: 'TL164',
			name: 'Tópicos em Pesquisa XIV: Literatura e Imprensa IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9CC',
			obligatory: false
		},
		'TL170': {
			code: 'TL170',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99240',
			obligatory: false
		},
		'TL171': {
			code: 'TL171',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5040D9',
			obligatory: false
		},
		'TL172': {
			code: 'TL172',
			name: 'Tópicos em Pesquisa XV: Literatura e Outras Artes IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BCD940',
			obligatory: false
		},
		'TL211': {
			code: 'TL211',
			name: 'Pesquisa I: Literatura e Imprensa I',
			ementa: 'Introdução à pesquisa das relações entre literatura e imprensa, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#48D940',
			obligatory: false
		},
		'TL212': {
			code: 'TL212',
			name: 'Pesquisa II: Literatura e Outras Artes I',
			ementa: 'Introdução à pesquisa das relações entre literatura e outras artes, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D540',
			obligatory: false
		},
		'TL213': {
			code: 'TL213',
			name: 'Pesquisa III: Literatura e Suportes Materiais I',
			ementa: 'Introdução à pesquisa das relações entre literatura e seus suportes materiais e documentais, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40C4D9',
			obligatory: false
		},
		'TL214': {
			code: 'TL214',
			name: 'Pesquisa IV: Literatura e Ensino I',
			ementa: 'Introdução à pesquisa das relações entre literatura e ensino, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CCD940',
			obligatory: false
		},
		'TL215': {
			code: 'TL215',
			name: 'Pesquisa V: Literatura e suas Fontes Históricas I',
			ementa: 'Introdução à pesquisa das relações entre literatura e suas fontes históricas, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4048D9',
			obligatory: false
		},
		'TL216': {
			code: 'TL216',
			name: 'Pesquisa VI: Literatura e Práticas de Leitura I',
			ementa: 'Introdução à pesquisa das relações entre literatura e as diversas práticas de leitura, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#50D940',
			obligatory: false
		},
		'TL217': {
			code: 'TL217',
			name: 'Pesquisa VII: Tradução Literária I',
			ementa: 'Introdução à prática de tradução literária.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7A40D9',
			obligatory: false
		},
		'TL219': {
			code: 'TL219',
			name: 'Pesquisa IX: Literatura e Arquivos I',
			ementa: 'Introdução à pesquisa em temas e questões de Literatura Brasileira, com análise de corpus a ser estabelecido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A3D9',
			obligatory: false
		},
		'TL220': {
			code: 'TL220',
			name: 'Pesquisa X: Teoria Literária I',
			ementa: 'Introdução à pesquisa em teoria literária, com análise de bibliografia pertinente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D540D9',
			obligatory: false
		},
		'TL221': {
			code: 'TL221',
			name: 'Pesquisa XI: Crítica Literária I',
			ementa: 'Introdução à pesquisa em crítica literária, com análise de bibliografia pertinente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B4',
			obligatory: false
		},
		'TL223': {
			code: 'TL223',
			name: 'Tópicos em Pesquisa XVIII: Literatura e Suportes Materiais II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4071D9',
			obligatory: false
		},
		'TL224': {
			code: 'TL224',
			name: 'Tópicos em Pesquisa XX: Literatura e Suportes Materiais III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#69D940',
			obligatory: false
		},
		'TL225': {
			code: 'TL225',
			name: 'Tópicos em Pesquisa XXI: Literatura e Suportes Materiais IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99B40',
			obligatory: false
		},
		'TL229': {
			code: 'TL229',
			name: 'Tópicos em Pesquisa XXI: Literatura e Ensino II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98240',
			obligatory: false
		},
		'TL230': {
			code: 'TL230',
			name: 'Tópicos em Pesquisa XXII: Literatura e Ensino III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4061D9',
			obligatory: false
		},
		'TL231': {
			code: 'TL231',
			name: 'Tópicos em Pesquisa XXIII: Literatura e Ensino IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B440',
			obligatory: false
		},
		'TL232': {
			code: 'TL232',
			name: 'Tópicos em Pesquisa XXIV: Literatura e suas Fontes Históricas II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AB40D9',
			obligatory: false
		},
		'TL233': {
			code: 'TL233',
			name: 'Tópicos em Pesquisa XXV: Literatura e suas Fontes Históricas III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#59D940',
			obligatory: false
		},
		'TL234': {
			code: 'TL234',
			name: 'Tópicos em Pesquisa XXVI: Literatura e suas Fontes Históricas IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A340D9',
			obligatory: false
		},
		'TL235': {
			code: 'TL235',
			name: 'Tópicos em Pesquisa XXVII: Literatura e Práticas de Leitura II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D5D940',
			obligatory: false
		},
		'TL236': {
			code: 'TL236',
			name: 'Tópicos em Pesquisa XXVIII: Literatura e Práticas de Leitura III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#71D940',
			obligatory: false
		},
		'TL237': {
			code: 'TL237',
			name: 'Tópicos em Pesquisa XXIX: Literatura e Práticas de Leitura IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7AD940',
			obligatory: false
		},
		'TL239': {
			code: 'TL239',
			name: 'Tópicos em Pesquisa XXX: Tradução Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94048',
			obligatory: false
		},
		'TL240': {
			code: 'TL240',
			name: 'Tópicos em Pesquisa XXXI: Tradução Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9240D9',
			obligatory: false
		},
		'TL241': {
			code: 'TL241',
			name: 'Tópicos em Pesquisa XXXII: Tradução Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97A',
			obligatory: false
		},
		'TL242': {
			code: 'TL242',
			name: 'Tópicos em Pesquisa XXXIII: Temas e Questões de Literatura Brasileira II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BC40D9',
			obligatory: false
		},
		'TL243': {
			code: 'TL243',
			name: 'Tópicos em Pesquisa XXXIV: Temas e Questões de Literatura Brasileira III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8AD940',
			obligatory: false
		},
		'TL244': {
			code: 'TL244',
			name: 'Tópicos em Pesquisa XXXV: Temas e Questões de Literatura Brasileira V',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6140D9',
			obligatory: false
		},
		'TL245': {
			code: 'TL245',
			name: 'Tópicos em Pesquisa XXXVI: Literatura e Arquivos II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D5',
			obligatory: false
		},
		'TL246': {
			code: 'TL246',
			name: 'Tópicos em Pesquisa XXXVII: Literatura e Arquivos III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C440D9',
			obligatory: false
		},
		'TL247': {
			code: 'TL247',
			name: 'Tópicos em Pesquisa XXXVIII: Literatura e Arquivos IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D982',
			obligatory: false
		},
		'TL248': {
			code: 'TL248',
			name: 'Tópicos em Pesquisa XXXIX: Teoria Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9B40D9',
			obligatory: false
		},
		'TL249': {
			code: 'TL249',
			name: 'Tópicos em Pesquisa XL: Teoria Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94059',
			obligatory: false
		},
		'TL250': {
			code: 'TL250',
			name: 'Tópicos em Pesquisa XL: Teoria Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94069',
			obligatory: false
		},
		'TL251': {
			code: 'TL251',
			name: 'Tópicos em Pesquisa XLII: Crítica Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D5',
			obligatory: false
		},
		'TL252': {
			code: 'TL252',
			name: 'Tópicos em Pesquisa XLIII: Crítica Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A3',
			obligatory: false
		},
		'TL253': {
			code: 'TL253',
			name: 'Tópicos em Pesquisa XLIV: Crítica Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C4',
			obligatory: false
		},
		'TL254': {
			code: 'TL254',
			name: 'Tópicos em Pesquisa XLV: Historiografia Literária II',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940AB',
			obligatory: false
		},
		'TL256': {
			code: 'TL256',
			name: 'Tópicos em Pesquisa XLVI: Historiografia Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4059D9',
			obligatory: false
		},
		'TL257': {
			code: 'TL257',
			name: 'Tópicos em Pesquisa XLVII: Historiografia Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9',
			obligatory: false
		},
		'TL904': {
			code: 'TL904',
			name: 'Investigação Científica I',
			ementa: 'Introdução a tema de pesquisa em Literatura Brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#61D940',
			obligatory: false
		},
		'TL905': {
			code: 'TL905',
			name: 'Investigação Científica II',
			ementa: 'Elaboração de projeto de pesquisa em Literatura Brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4050D9',
			obligatory: false
		},
		'TL906': {
			code: 'TL906',
			name: 'Investigação Científica III',
			ementa: 'Desenvolvimento de projeto de pesquisa em Literatura Brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#D97A40',
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
		}
	}
};

export default catalogue;
