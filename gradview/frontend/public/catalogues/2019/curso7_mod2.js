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

	subjects: {
		'HL121': {
			code: 'HL121',
			name: 'Fonética, Fonologia e Morfologia',
			ementa: 'Conhecimento básico de fonética, fonologia e morfologia do português: teoria e prática. Mód 1: Fonética: a produção da fala - processos aerodinâmicos, fonatórios e articulatórios. Modos e lugares de articulação. Prática de produção e transcrição. Mód 2: Fonologia: a organização dos sons da fala em sistemas fonológicos - fonema, alofone e arquifonema. Mód 3: Morfologia: morfologia flexional e derivacional do português; processos morfofonêmicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'HL127': {
			code: 'HL127',
			name: 'Introdução às Ciências da Linguagem',
			ementa: 'Visão geral do fenômeno da linguagem e dos métodos de investigação científica desse objeto. Mód 1: Textos fundamentais da linguística. Mód 2: História das Ideias Linguísticas: linguística, língua nacional e instrumentos de gramatização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95C40'
		},
		'HL143': {
			code: 'HL143',
			name: 'Latim I',
			ementa: 'Introdução ao estudo da palavra latina (em especial, do nome e do verbo latinos e suas particularidades morfossintáticas) e da literatura e civilização romanas. Tradução comentada de trechos adaptados da Aulularia de Plauto. Noções de história do latim e de latim vulgar, e de aspectos relevantes ao ensino do português. (Seções 1A-1D do método: Aprendendo Latim, Ed. Odysseus.)',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94079'
		},
		'LA104': {
			code: 'LA104',
			name: 'Letramentos: Teoria e Prática',
			ementa: 'Introdução aos estudos dos letramentos como processo histórico-ideológico de apropriação da cultura da escrita. Sensibilização para mitos e preconceitos que cercam os conceitos (alfabetização, alfabetismos, letramentos) e que sustentam certos enfoques que orientam a escolarização. Revisão do conceito de letramentos a partir das práticas multiletradas contemporâneas. A disciplina inclui necessariamente um trabalho de pesquisa no campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40BCD9'
		},
		'LA405': {
			code: 'LA405',
			name: 'Seminários em Ensino de Língua Portuguesa',
			ementa: 'Estudo e discussão de textos de referência para o ensino da disciplina Língua Portuguesa na educação básica. Estudo de conceitos e ideias que sustentam as principais bases do ensino de Língua Portuguesa, inclusive aquelas presentes nas organizações curriculares na área.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C640D9'
		},
		'LG028': {
			code: 'LG028',
			name: 'Atividades em Diversidade e Direitos Humanos',
			ementa: 'Atividades teórico-práticas em diversidade e direitos humanos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#7040D9'
		},
		'TL108': {
			code: 'TL108',
			name: 'Introdução à Literatura e Cultura Brasileira',
			ementa: 'Apresentação aos alunos ingressantes do campo de pesquisa em literatura e cultura brasileira. Análise de textos literários e/ou ensaísticos que possibilitem a reflexão sobre modelos de ensino de literatura e cultura brasileiras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D966'
		},
		'HL220': {
			code: 'HL220',
			name: 'Prática de Análise Gramatical',
			ementa: 'Descrição, análise e representação de estruturas gramaticais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94096'
		},
		'HL236': {
			code: 'HL236',
			name: 'Linguagem: Dimensões Históricas e Sociais',
			ementa: 'Aspectos sociais e históricos da diversidade linguística do Brasil: teoria e prática. Implicações para o ensino. Mód 1: Sociolinguística: dimensões históricas e socioculturais da linguagem, o campo da sociolinguística, variedades do português brasileiro e suas implicações para o ensino. Mód 2: Diversidade linguística e situações de contato linguístico nas sociedades indígenas do Brasil, bilinguismo e multilinguismo. Mód 3: Formação do português brasileiro: a questão das origens e o papel do contato com as línguas indígenas e africanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9BC'
		},
		'HL337': {
			code: 'HL337',
			name: 'Laboratório de Produção Textual II',
			ementa: 'Os estudos a serem desenvolvidos nessa disciplina enfocarão os seguintes conteúdos: a produção de tecnologias de ensino considerando os processos de progressão referencial e textual; produção de tecnologias de ensino considerando as diferenças entre oralidade e escrita; produção de grades de correção de diferentes gêneros textuais (orais e escritos); produção de tecnologias de ensino considerando os processos de estruturação composicional dos textos; práticas de produção e revisão de textos acadêmicos de divulgação científica.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D9405C'
		},
		'LA204': {
			code: 'LA204',
			name: 'Leitura e Escrita: Teoria e Prática',
			ementa: 'Introdução às teorias - associacionistas, cognitivas e discursivo-enunciativas - de leitura e de produção de textos escritos e análise de seus impactos no ensino-aprendizagem de leitura/escrita. Abordagem da relação entre leitura e escrita e práticas com textos orais e multimodais em ambientes escolares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B340'
		},
		'LA404': {
			code: 'LA404',
			name: 'Ensino de Língua Portuguesa: Marcos Históricos e Documentos Curriculares',
			ementa: 'A constituição da disciplina de Língua Portuguesa. Reformas do ensino e os documentos curriculares de Língua Portuguesa. Políticas educacionais e seu impacto sobre a organização curricular de Língua Portuguesa. Políticas públicas para a leitura e a escrita.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#53D940'
		},
		'TL404': {
			code: 'TL404',
			name: 'Literatura e Ensino',
			ementa: 'Introdução à discussão sobre o ensino da literatura a partir de uma abordagem de seu conteúdo enquanto disciplina escolar. O conceito de cânone e a formação do cânone literário na literatura brasileira. O problema da periodização na história da literatura, aplicado à literatura brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#409FD9'
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
			color: '#40D99F'
		},
		'HL325': {
			code: 'HL325',
			name: 'Texto, Discurso e Ensino de Língua',
			ementa: 'Apresentação e discussão de conceitos básicos da Análise de discurso, tendo por objetivo a compreensão do funcionamento e circulação dos discursos e práticas do campo escolar. Análise discursiva de materiais de ensino, de textos da legislação educacional e de textos que circulam no ambiente escolar.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97940'
		},
		'HL804': {
			code: 'HL804',
			name: 'Linguística e Ensino de Português',
			ementa: 'Distinção entre erro, variação e patologias de linguagem. As noções de norma e padrão. O lugar da gramática e das teorias de texto e discurso no ensino de língua materna. Conceitos de gramática. O lugar da metalinguagem no ensino de língua materna. Fundamentos de Linguística relevantes para o ensino de língua materna.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D949'
		},
		'LA303': {
			code: 'LA303',
			name: 'Interpretação: Teoria e Prática',
			ementa: 'Estudo e discussão de teorias da interpretação de diferentes tradições teórico-metodológicas que iluminem questões de natureza teórica e prática consideradas relevantes para uma reflexão mais aprofundada sobre leitura/interpretação de textos e demais objetos semióticos que povoam as práticas letradas contemporâneas, particularmente aquelas contempladas no ensino de língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940'
		},
		'LA406': {
			code: 'LA406',
			name: 'Laboratório Produção Materiais Didáticos para Ensino Língua Portuguesa',
			ementa: 'Modalidades de organização didática no ensino-aprendizagem de Língua Portuguesa. Materiais didáticos impressos e digitais, plataformas, ambientes, ferramentas, recursos e objetos digitais para o ensino-aprendizagem de Língua Portuguesa. Análise e produção de atividades, recursos e objetos digitais.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#40D9D9'
		},
		'TL405': {
			code: 'TL405',
			name: 'Seminários em Ensino de Literatura',
			ementa: 'Estudos sobre o ensino de literatura em uma abordagem interdisciplinar com outros campos das humanidades. O papel das humanidades e da literatura na educação. O problema do valor no estudo da literatura, aplicado à literatura brasileira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940CF'
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
			color: '#D99640'
		},
		'HL424': {
			code: 'HL424',
			name: 'Neurolinguística e Ensino de Língua',
			ementa: 'O normal e o patológico: (i) Fundamentos teórico-metodológicos em neurolinguística: as relações entre cérebro, linguagem e cognição: (ii) A relação normal/patológico; reflexão crítica sobre a patologização de processos de ensino-aprendizagem; conceitos de “erro” e de “desvio”; (iii) Práticas de análise linguística (formais e discursivas) de dados empíricos (verbais e não-verbais, de oralidade e de escrita), em contextos escolares; (iv) Desenvolvimento de atividades de natureza reflexiva sobre processos linguístico-cognitivos implicados em processos de ensino e aprendizagem.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9CF40'
		},
		'LA403': {
			code: 'LA403',
			name: 'Linguagem e Diversidade: Pesquisa e Ensino',
			ementa: 'Diversidade linguística e sociocultural no trabalho do professor de língua portuguesa. Variação linguística e a noção de erro. Preconceito linguístico e práticas discursivas escolares. Discussão acerca dos conceitos de representação, multiculturalismo e identidade e de suas implicações para o ensino crítico de língua portuguesa. Políticas linguísticas e ensino de português em contextos multilíngues.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5340D9'
		},
		'TL406': {
			code: 'TL406',
			name: 'Laboratório de Ensino em Literatura',
			ementa: 'Pesquisa orientada para elaboração de propostas de ensino de Literatura.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#4049D9'
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
			color: '#8C40D9'
		},
		'LA910': {
			code: 'LA910',
			name: 'Introdução aos Estudos do Português como Segunda Língua e Língua Estrangeira',
			ementa: 'Introdução aos estudos sobre o português como segunda língua e língua estrangeira (L2/LE). Panorama do português como língua adicional no cenário mundial e brasileiro. História do ensino do português como L2/LE no Brasil. A pesquisa nesse campo de atuação profissional. Levantamento e análise dos estudos existentes na área.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D983'
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
			color: '#A940D9'
		},
		'LA712': {
			code: 'LA712',
			name: 'Análise Linguística no Ensino de Língua Portuguesa',
			ementa: 'Reflexão crítica acerca do eixo da análise linguística no âmbito do ensino de língua portuguesa. Princípios teórico-metodológicos da prática de análise linguística. Questões de análise linguística relevantes para o ensino. Didatizações no eixo da análise linguística (materiais didáticos, projetos, aulas etc.).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4066D9'
		},
		'LA911': {
			code: 'LA911',
			name: 'A Sala de Aula de Português como Segunda Língua e Língua Estrangeira',
			ementa: 'Reflexão crítica sobre os principais modelos de aquisição e de aprendizagem de segunda língua e língua estrangeira (L2/LE). Concepções de língua(gem) e proficiência. Reflexão crítica sobre os conceitos de abordagem, planejamento, metodologias de ensino e avaliação. A formação do professor de português como segunda língua e língua estrangeira. Questões específicas relacionadas ao ensino e avaliação de cada uma das quatro habilidades. Análise de práticas em andamento nesse campo de atuação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA910'],
			color: ''
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
			color: '#D940B3'
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C6D940'
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
			color: '#70D940'
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
			color: '#A9D940'
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
		}
	}
};

export default catalogue;
