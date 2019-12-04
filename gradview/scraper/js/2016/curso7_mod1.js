const catalogue = {
	totalCredits: 204,
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
			subjects: ['HL135', 'LA001', 'LA504', 'LG025', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HL245', 'LA712', 'LG026', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL774', 'LG027', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EL874', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: ,
			hasRestrictions: true,
			subjects: ['TL110', 'TL111', 'TL112', 'TL113', 'TL114', 'TL115', 'TL117', 'TL119', 'TL145', 'TL146', 'TL149', 'TL151', 'TL152', 'TL153', 'TL154', 'TL156', 'TL159', 'TL161', 'TL174', 'TL175', 'TL176', 'TL177', 'TL178', 'TL179', 'TL180', 'TL181', 'TL182', 'TL183', 'TL184', 'TL185', 'TL186', 'TL187', 'TL188', 'TL189'],
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
			color: '#D940C7',
			obligatory: true
		},
		'HL127': {
			code: 'HL127',
			name: 'Introdução às Ciências da Linguagem',
			ementa: 'Visão geral do fenômeno da linguagem e dos métodos de investigação científica desse objeto. Mód 1: Textos fundamentais da linguística. Mód 2: História das Ideias Linguísticas: linguística, língua nacional e instrumentos de gramatização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B3D9',
			obligatory: true
		},
		'HL143': {
			code: 'HL143',
			name: 'Latim I',
			ementa: 'Introdução ao estudo da palavra latina (em especial, do nome e do verbo latinos e suas particularidades morfossintáticas) e da literatura e civilização romanas. Tradução comentada de trechos adaptados da Aulularia de Plauto. Noções de história do latim e de latim vulgar. (Seções 1A-1D do método: Reading Latin, Cambridge Un. Press.)',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'LA104': {
			code: 'LA104',
			name: 'Letramentos: Teoria e Prática',
			ementa: 'Introdução aos estudos dos letramentos como processo histórico-ideológico de apropriação da cultura da escrita. Sensibilização para mitos e preconceitos que cercam os conceitos (alfabetização, alfabetismos, letramentos) e que sustentam certos enfoques que orientam a escolarização. Revisão do conceito de letramentos a partir das práticas multiletradas contemporâneas. A disciplina inclui necessariamente um trabalho de pesquisa no campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#63D940',
			obligatory: true
		},
		'LG021': {
			code: 'LG021',
			name: 'Atividades Científico-Culturais I',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Gradução da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D959',
			obligatory: true
		},
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D9C740',
			obligatory: true
		},
		'HL220': {
			code: 'HL220',
			name: 'Prática de Análise Gramatical',
			ementa: 'Gramática Tradicional: revisão crítica de conceitos e nomenclaturas. Funções sintáticas e categorias sintagmáticas: práticas de análise e representação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9406D',
			obligatory: true
		},
		'HL236': {
			code: 'HL236',
			name: 'Linguagem: Dimensões Históricas e Sociais',
			ementa: 'Aspectos sociais e históricos da diversidade linguística do Brasil: teoria e prática. Implicações para o ensino. Mód 1: Sociolinguística: dimensões históricas e socioculturais da linguagem, o campo da sociolinguística, variedades do português brasileiro e suas implicações para o ensino. Mód 2: Diversidade linguística e situações de contato linguístico nas sociedades indígenas do Brasil, bilinguismo e multilinguismo. Mód 3: Formação do português brasileiro: a questão das origens e o papel do contato com as línguas indígenas e africanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9405E',
			obligatory: true
		},
		'LA204': {
			code: 'LA204',
			name: 'Leitura e Escrita: Teoria e Prática',
			ementa: 'Introdução às teorias - associacionistas, cognitivas e discursivo-enunciativas - de leitura e de produção de textos escritos e análise de seus impactos no ensino-aprendizagem de leitura/escrita. Abordagem da relação entre leitura e escrita e práticas com textos orais e multimodais em ambientes escolares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7240D9',
			obligatory: true
		},
		'LG022': {
			code: 'LG022',
			name: 'Atividades Científico-Culturais II',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5440D9',
			obligatory: true
		},
		'TL118': {
			code: 'TL118',
			name: 'Textos em Teoria, Crítica e História Literária I',
			ementa: 'Introdução à leitura e interpretação de textos de teoria, critica e historiografia literária selecionados de modo a constituir repertório formativo. Sugere-se a concomitância de matrícula com TL222.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D1D9',
			obligatory: true
		},
		'TL222': {
			code: 'TL222',
			name: 'Pesquisa XII: Historiografia Literária I',
			ementa: 'Introdução à pesquisa em historiografia literária, com análise de bibliografia pertinente. Sugere-se a concomitância de matrícula com TL118.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C2',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
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
			color: '#D96D40',
			obligatory: true
		},
		'LA303': {
			code: 'LA303',
			name: 'Interpretação: Teoria e Prática',
			ementa: 'Estudo e discussão de teorias da interpretação de diferentes tradições teórico-metodológicas que iluminem questões de natureza teórica e prática consideradas relevantes para uma reflexão mais aprofundada sobre leitura/interpretação de textos e demais objetos semióticos que povoam as práticas letradas contemporâneas, particularmente aquelas contempladas no ensino de língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97C40',
			obligatory: true
		},
		'LG023': {
			code: 'LG023',
			name: 'Atividades Científico-Culturais III',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D968',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
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
			color: '#9FD940',
			obligatory: true
		},
		'LA403': {
			code: 'LA403',
			name: 'Linguagem e Diversidade: Pesquisa e Ensino',
			ementa: 'Diversidade linguística e sociocultural no trabalho do professor de língua portuguesa. Variação linguística e a noção de erro. Preconceito linguístico e práticas discursivas escolares. Discussão acerca dos conceitos de representação, multiculturalismo e identidade e de suas implicações para o ensino crítico de língua portuguesa. Políticas linguísticas e ensino de português em contextos multilíngues.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D986',
			obligatory: true
		},
		'LG024': {
			code: 'LG024',
			name: 'Atividades Científico-Culturais IV',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A4D9',
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
		'HL135': {
			code: 'HL135',
			name: 'Escrita e Oralidade',
			ementa: 'Estudo de processos relativos a usos da oralidade e da escrita. Módulo 1: Caracterização da oralidade e da escrita: processos de produção oral e de produção escrita; usos sociais da linguagem: gêneros orais e escritos. Módulo 2: Sistemas de escrita: história da escrita; escrita alfabética e sua base fonológica; marcação prosódica na oralidade, pontuação e outros sinais na escrita. Módulo 3: Constituição histórica da escrita no Brasil: política linguística e normatização; história da ortografia da língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9407C',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AED940',
			obligatory: true
		},
		'LA504': {
			code: 'LA504',
			name: 'Linguagem e Tecnologias',
			ementa: 'Enfoques históricos das relações entre tecnologia, linguagem e sociedade e suas repercussões nas concepções de língua, conhecimento e sujeito. Mutações na linguagem em relação à difusão e apropriação de inovações tecnológicas. Processos de naturalização da escrita enquanto tecnologia e suas repercussões educativas, sociais, cognitivas e epistemológicas na atualidade. Especificidades da interação e do funcionamento da linguagem nas interfaces hipermidiáticas e nos ambientes de comunicação mediada por computador, particularmente nos ambientes escolares.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D6',
			obligatory: true
		},
		'LG025': {
			code: 'LG025',
			name: 'Atividades Científico-Culturais V',
			ementa: 'Atividades científico-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40C2D9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:21},
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
			color: '#40D9B3',
			obligatory: true
		},
		'LA712': {
			code: 'LA712',
			name: 'Análise Linguística no Ensino de Língua Portuguesa',
			ementa: 'Reflexão crítica acerca do eixo da análise linguística no âmbito do ensino de língua portuguesa. Princípios teórico-metodológicos da prática de análise linguística. Questões de análise linguística relevantes para o ensino. Didatizações no eixo da análise linguística (materiais didáticos, projetos, aulas etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A4',
			obligatory: true
		},
		'LG026': {
			code: 'LG026',
			name: 'Atividades Científico-Culturais VI',
			ementa: 'Atividades científicos-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Graduação da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#81D940',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:23},
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
			color: '#4077D9',
			obligatory: true
		},
		'LG027': {
			code: 'LG027',
			name: 'Atividades Científico-Culturais VII',
			ementa: 'Atividades científicos-culturais cuja participação será comprovada pelo aluno e convalidada pela Comissão de Gradução da unidade em até 30hs.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8140D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
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
			color: '#4077D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'TL110': {
			code: 'TL110',
			name: 'Textos em Teatro I',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4095D9',
			obligatory: false
		},
		'TL111': {
			code: 'TL111',
			name: 'Textos em Teatro II',
			ementa: 'Leitura e interpretação de textos teatrais selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#90D940',
			obligatory: false
		},
		'TL112': {
			code: 'TL112',
			name: 'Textos em Poesia I',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B840',
			obligatory: false
		},
		'TL113': {
			code: 'TL113',
			name: 'Textos em Poesia II',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940A9',
			obligatory: false
		},
		'TL114': {
			code: 'TL114',
			name: 'Textos em Prosa de Ficção I',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CC40D9',
			obligatory: false
		},
		'TL115': {
			code: 'TL115',
			name: 'Textos em Prosa de Ficção II',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D1',
			obligatory: false
		},
		'TL117': {
			code: 'TL117',
			name: 'Textos em Prosa Não-Ficcional II',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AE40D9',
			obligatory: false
		},
		'TL119': {
			code: 'TL119',
			name: 'Textos em Teoria, Crítica e História Literária II',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99A40',
			obligatory: false
		},
		'TL145': {
			code: 'TL145',
			name: 'Tópicos X: Textos em Teatro III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D640',
			obligatory: false
		},
		'TL146': {
			code: 'TL146',
			name: 'Tópicos XI: Textos em Teatro IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408B',
			obligatory: false
		},
		'TL149': {
			code: 'TL149',
			name: 'Tópicos XII: Textos em Poesia III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BDD940',
			obligatory: false
		},
		'TL151': {
			code: 'TL151',
			name: 'Tópicos XIII: Textos em Poesia IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94F40',
			obligatory: false
		},
		'TL152': {
			code: 'TL152',
			name: 'Tópicos XIV: Textos em Prosa de Ficção III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4540D9',
			obligatory: false
		},
		'TL153': {
			code: 'TL153',
			name: 'Tópicos XV: Textos em Prosa de Ficção IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BD40D9',
			obligatory: false
		},
		'TL154': {
			code: 'TL154',
			name: 'Tópicos XVI: Textos em Prosa Não-Ficcional III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#CCD940',
			obligatory: false
		},
		'TL156': {
			code: 'TL156',
			name: 'Tópicos XVII: Textos em Prosa Não-Ficcional IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4086D9',
			obligatory: false
		},
		'TL159': {
			code: 'TL159',
			name: 'Tópicos XVIII: Textos em Teoria, Crítica e História Literária III',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#45D940',
			obligatory: false
		},
		'TL161': {
			code: 'TL161',
			name: 'Tópicos XIX: Textos em Teoria, Crítica e História Literária IV',
			ementa: 'Será divulgada por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9404F',
			obligatory: false
		},
		'TL174': {
			code: 'TL174',
			name: 'Textos em Poesia V',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D94A',
			obligatory: false
		},
		'TL175': {
			code: 'TL175',
			name: 'Textos em Poesia VI',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4059D9',
			obligatory: false
		},
		'TL176': {
			code: 'TL176',
			name: 'Textos em Poesia VII',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#54D940',
			obligatory: false
		},
		'TL177': {
			code: 'TL177',
			name: 'Textos em Poesia VIII',
			ementa: 'Leitura e interpretação de textos poéticos selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6340D9',
			obligatory: false
		},
		'TL178': {
			code: 'TL178',
			name: 'Textos em Prosa de Ficção V',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95E40',
			obligatory: false
		},
		'TL179': {
			code: 'TL179',
			name: 'Textos em Prosa de Ficção VI',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9A940',
			obligatory: false
		},
		'TL180': {
			code: 'TL180',
			name: 'Textos em Prosa de Ficção VII',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D995',
			obligatory: false
		},
		'TL181': {
			code: 'TL181',
			name: 'Textos em Prosa de Ficção VIII',
			ementa: 'Leitura e interpretação de textos de prosa ficcional selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B8',
			obligatory: false
		},
		'TL182': {
			code: 'TL182',
			name: 'Textos em Prosa Não-Ficcional V',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D977',
			obligatory: false
		},
		'TL183': {
			code: 'TL183',
			name: 'Textos em Prosa Não-Ficcional VI',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9F40D9',
			obligatory: false
		},
		'TL184': {
			code: 'TL184',
			name: 'Textos em Prosa Não-Ficcional VII',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98B40',
			obligatory: false
		},
		'TL185': {
			code: 'TL185',
			name: 'Textos em Prosa Não-Ficcional VIII',
			ementa: 'Leitura e interpretação de textos de prosa não ficcional (ensaio, memórias, correspondência, diários, crônica e etc.) selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4068D9',
			obligatory: false
		},
		'TL186': {
			code: 'TL186',
			name: 'Textos em Teoria, Crítica e História Literária V',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#404AD9',
			obligatory: false
		},
		'TL187': {
			code: 'TL187',
			name: 'Textos em Teoria, Crítica e História Literária VI',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#72D940',
			obligatory: false
		},
		'TL188': {
			code: 'TL188',
			name: 'Textos em Teoria, Crítica e História Literária VII',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409A',
			obligatory: false
		},
		'TL189': {
			code: 'TL189',
			name: 'Textos em Teoria, Crítica e História Literária VIII',
			ementa: 'Leitura e interpretação de textos de teoria, crítica e historiografia literária selecionados de modo a constituir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9040D9',
			obligatory: false
		}
	}
};

export default catalogue;
