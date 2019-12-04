const catalogue = {
	totalCredits: 249,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EP107', 'EP110', 'EP130', 'EP140', 'EP142']
		},
		'sem-2': {
			id: '2',
			subjects: ['EP128', 'EP210', 'EP230', 'EP319', 'EP347']
		},
		'sem-3': {
			id: '3',
			subjects: ['EP129', 'EP152', 'EP330', 'EP340', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['EP153', 'EP165', 'EP226', 'EP372', 'EP412']
		},
		'sem-5': {
			id: '5',
			subjects: ['EP164', 'EP376', 'EP471', 'EP472', 'EP910']
		},
		'sem-6': {
			id: '6',
			subjects: ['EP158', 'EP377', 'EP473', 'EP474', 'EP911']
		},
		'sem-7': {
			id: '7',
			subjects: ['EP139', 'EP445', 'EP790', 'EP912']
		},
		'sem-8': {
			id: '8',
			subjects: ['EP144', 'EP146', 'EP569', 'EP913']
		},
		'sem-9': {
			id: '9',
			subjects: ['EP147', 'EP162', 'EP348', 'EP808', 'EP887', 'EP914', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EP529', 'EP809', 'EP879', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'EP107': {
			code: 'EP107',
			name: 'Introdução à Pedagogia - Organização do Trabalho Pedagógico',
			ementa: 'O objetivo das ciências da educação. O problema da unidade, especificidade e autonomia das ciências da educação. A educação como ponto de partida e de chegada dos estudos e das reflexões dos cientistas. A contribuição das ciências para a explicação e compreensão da educação. Contextualização histórica da Pedagogia no Brasil - o curso de Pedagogia da Unicamp.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95440',
			obligatory: true
		},
		'EP110': {
			code: 'EP110',
			name: 'História da Educação I',
			ementa: 'Introdução à História da Educação. Bases epistemológicas, metodológicas e teóricas da História e História da Educação. Fundamentos da História e História da Educação e da pedagogia: na antiguidade, na medievalidade, na modernidade e na contemporaneidade geral e no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4075D9',
			obligatory: true
		},
		'EP130': {
			code: 'EP130',
			name: 'Filosofia da Educação I',
			ementa: 'Introdução à filosofia mediante sua caracterização em face de outras formas de conhecimento. Estudo de filósofos antigos que contribuíram significativamente para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental, entre eles: Sócrates, os sofistas, Platão e Aristóteles.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B1D9',
			obligatory: true
		},
		'EP140': {
			code: 'EP140',
			name: 'Sociologia Geral',
			ementa: 'Analisa as principais teorias sociológicas que procuram indagar e explicar a sociedade moderna e as mudanças observadas na sociedade contemporânea. Introduz categorias analíticas que informam e expressam o pensamento de seus fundadores Karl Marx, Émile Durkheim e Max Weber, autores considerados clássicos em sociologia porque participaram da construção deste campo científico, por meio de interpretações e visões de mundo diversas, frequentemente antagônicas. Discute questões sociais observadas no presente à luz das teorias analisadas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6ED940',
			obligatory: true
		},
		'EP142': {
			code: 'EP142',
			name: 'Educação e Antropologia Cultural',
			ementa: 'Ao propor um diálogo entre educação e antropologia, a disciplina visa discutir a pertinência desta área do conhecimento para a atividade pedagógica como expressão de culturas específicas e de processos históricos e sociais determinados. Os objetivos específicos do curso são introduzir os alunos no quadro conceitual e temático da antropologia, discutir alguns expoentes da literatura antropológica sobre ciclos de vida (especialmente sobre infância e juventude), diversidade cultural, multiculturalismo e interculturalidade na sociedade contemporânea e, em particular, na escola; por fim, pretende-se mostrar a especificidade da antropologia que reside no modo pelo qual delimita seus campos de estudo, propondo modelos de interpretação e análise.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D975',
			obligatory: true
		},
		'EP128': {
			code: 'EP128',
			name: 'Psicologia I',
			ementa: 'Contribuições das perspectivas teóricas comportamental, social cognitiva e psicanalítica para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas aplicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B740',
			obligatory: true
		},
		'EP210': {
			code: 'EP210',
			name: 'História da Educação II',
			ementa: 'História Moderna e História da Educação no Brasil no período colonial e no Império.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C5',
			obligatory: true
		},
		'EP230': {
			code: 'EP230',
			name: 'Filosofia da Educação II',
			ementa: 'Estudo dos filósofos e/ou correntes filosóficas medievais e modernas que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental: a patrística e a escolástica, o racionalismo, o empirismo e a concepção educacional de Rousseau.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#96D940',
			obligatory: true
		},
		'EP319': {
			code: 'EP319',
			name: 'Pesquisa e Prática Pedagógica',
			ementa: 'Esta disciplina tem por objetivo aproximar o estudante do campo profissional da Pedagogia. Para tanto, pautar-se-á pela apresentação da produção acadêmico-científica das linhas de pesquisa da FE e seus diálogos com a prática deste profissional. Pretende-se, desta forma, ampliar a perspectiva do estudante sobre a diversidade teórica e metodológica que subsidia a pesquisa educacional e contribuir para a compreensão da prática pedagógica em uma perspectiva diversificada.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#BE40D9',
			obligatory: true
		},
		'EP347': {
			code: 'EP347',
			name: 'Educação, Cultura e Linguagens',
			ementa: 'Estudos sobre as diferentes linguagens verbais (fala e escrita), visuais (artes plásticas) e audiovisuais (cinema e televisão) que dão forma à Educação cultural e escolar,ao imaginário e à inteligência contemporâneas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B7',
			obligatory: true
		},
		'EP129': {
			code: 'EP129',
			name: 'Psicologia II',
			ementa: 'Contribuições das perspectivas teóricas construtivista e histórico-cultural para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas implicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#BED940',
			obligatory: true
		},
		'EP330': {
			code: 'EP330',
			name: 'Filosofia da Educação III',
			ementa: 'Estudo de filósofos e/ou correntes filosóficas contemporâneas que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram fundamentos filosóficos da educação ocidental, iniciando com o iluminismo kantiano incluindo as concepções positivista, marxista e as teorias críticas, entre outras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5AD940',
			obligatory: true
		},
		'EP340': {
			code: 'EP340',
			name: 'Sociologia da Educação I',
			ementa: 'Introduz os estudantes aos temas da Sociologia da Educação por intermédio de abordagem de autores clássicos - Karl Marx, Max Weber e Émile Durkheim - e dos seus novos enfoques. Propicia a compreensão das dimensões sociais da Educação, na sociedade contemporânea, a partir de categorias analíticas das principais teorias sociológicas. Analisa a relevância da educação nas relações sociais que engendram exploração, dominação e solidariedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940CB',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EP153': {
			code: 'EP153',
			name: 'Metodologia do Ensino Fundamental',
			ementa: 'Trabalho de campo orientado para o diagnóstico dos componentes metodológicos envolvidos na prática educativa das escolas públicas de ensino fundamental, procurando analisá-las no conjunto das determinações mais amplas a que estão submetidas. Numa perspectiva integrada da área de Magistério, propor reflexões a partir da prática das escolas, a serem encaminhadas para as metodologias específicas, visando a continuidade do trabalho.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D99D',
			obligatory: true
		},
		'EP165': {
			code: 'EP165',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organizações dos sistemas de ensino considerando as peculiaridades nacionais e os contextos internacionais; políticas educacionais e legislação de ensino, organização da educação básica e do ensino superior; impasses e perspectivas das políticas atuais em relação à educação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#82D940',
			obligatory: true
		},
		'EP226': {
			code: 'EP226',
			name: 'Psicologia e Educação',
			ementa: 'Contribuição da Psicologia para a análise de questões relativas ao contexto educativo com base em pesquisas e relatos de práticas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94068',
			obligatory: true
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94090',
			obligatory: true
		},
		'EP412': {
			code: 'EP412',
			name: 'História da Educação III',
			ementa: 'História e História da Educação e da Escola no mundo contemporâneo e no Brasil republicano. Problemas e perspectivas da Educação contemporânea no Brasil e no mundo globalizado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D989',
			obligatory: true
		},
		'EP164': {
			code: 'EP164',
			name: 'Organização do Trabalho Pedagógico e Gestão Escolar',
			ementa: 'Fundamentos teóricos da Administração. Teorias da Administração e Gestão Educacional. Escola, Gestão e Projeto Político da escola. A organização do trabalho escolar: linguagem, tempo, espaço.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D96840',
			obligatory: true
		},
		'EP376': {
			code: 'EP376',
			name: 'Prát. de Ensino e Estágio Supervisionado nos Anos Iniciais do Ensino Fundamental',
			ementa: 'Planejamento, desenvolvimento e avaliação dos projetos de ensino envolvidos nas práticas educativas dos anos iniciais do Ensino Fundamental. Constitui espaço para tratamento interdisciplinar dos fundamentos oferecidos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9CB40',
			obligatory: true
		},
		'EP471': {
			code: 'EP471',
			name: 'Escola, Alfabetização e Culturas da Escrita',
			ementa: 'Conhecimentos da ordem da escrita, seus usos e objetos, discursos e lugares de produção, circulação, divulgação. Estudos sobre linguagem e ensino da Língua Portuguesa: práticas orais, de leitura, de escrita, de análise linguística. Alfabetização e Letramento: conceitos e práticas ligadas à cultura da escrita.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#46D940',
			obligatory: true
		},
		'EP472': {
			code: 'EP472',
			name: 'Escola e Conhecimento de História e Geografia',
			ementa: 'Estudos sobre as questões de tempo e de espaço, como produções socioculturais, inscritas nas culturas escolares. Essas questões serão aprofundadas levando-se em conta os conteúdos das séries iniciais.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#D99040',
			obligatory: true
		},
		'EP910': {
			code: 'EP910',
			name: 'Estágio Supervisionado I - Gestão Escolar',
			ementa: 'Acompanhamento do processo de organização e administração da escola (educação básica e suas modalidades) enquanto unidade vinculada a um sistema de ensino, buscando o entendimento de seus problemas cotidianos e alternativas de solução baseadas nos fundamentos da política e da administração educacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#D94054',
			obligatory: true
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir o (a) aluno (a) em diferentes atividades corporais e/ou artísticas nas suas relações com o processo educacional, tanto no âmbito da instituição escolar (com ênfase na Educação Infantil e séries iniciais do Ensino Fundamental), como no contexto de outros espaços educativos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#AA40D9',
			obligatory: true
		},
		'EP377': {
			code: 'EP377',
			name: 'Planejamento Educacional e Estágio Supervisionado em Gestão Escolar',
			ementa: 'Acompanhamento e análise do processo de planejamento escolar e educacional no âmbito da educação básica e suas modalidades, como fase decisiva da implementação da política e da administração da educação, levando em conta os fundamentos teóricos que embasam a organização da escola e do sistema educacional.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D97C40',
			obligatory: true
		},
		'EP473': {
			code: 'EP473',
			name: 'Escola e Cultura Matemática',
			ementa: 'Identificar, caracterizar e problematizar, de forma multidisciplinar e comparativa, os condicionamentos singulares que conformam as práticas escolares e não escolares que envolvam cultura matemática, visando a formação reflexiva e crítica do professor para o ensino dos conteúdos curriculares de Matemática do Ensino Fundamental I e da Educação Infantil.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#8240D9',
			obligatory: true
		},
		'EP474': {
			code: 'EP474',
			name: 'Escola e Conhecimento em Ciências Naturais',
			ementa: 'Movimentos históricos do Ensino de Ciências no Brasil. Aspectos teóricos e metodológicos do ensino de Ciências: atividades práticas, resolução de problemas, concepções prévias, estudos do meio, abordagem interdisciplinar, recursos e materiais didáticos. Diretrizes curriculares de Ciências para o Ensino Fundamental e Educação Infantil. Linguagens no ensino de Ciências. Relações Ciência, Tecnologia, Sociedade e Ambiente. Produção e divulgação do conhecimento científico. Alfabetização científica e currículo escolar. Temas e conhecimentos escolares no ensino de Ciências.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#5A40D9',
			obligatory: true
		},
		'EP911': {
			code: 'EP911',
			name: 'Estágio Supervisionado II - Anos Iniciais do Ensino Fundamental',
			ementa: 'Estágio junto às escolas de educação fundamental (anos iniciais), direcionado ao trabalho pedagógico, entendido na articulação entre a docência e a gestão escolar, observação e análise da sala de aula e sua articulação com os demais espaços da escola.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#4089D9',
			obligatory: true
		},
		'EP139': {
			code: 'EP139',
			name: 'Pedagogia da Educação Infantil',
			ementa: 'Estuda as teorias, as práticas pedagógicas e a produção das culturas infantis da educação infantil de caráter não obrigatório para crianças de 0-6 anos de idade, em creches e pré-escolas, na primeira etapa da educação básica. Assim como sua crítica numa abordagem das diferenças de classes, idade, gênero e etnia. Analisa a formação docente e as condições de produção das culturas infantis. Estuda numa perspectiva das ciências sociais essas instituições de educação infantil para a pequena infância constituída pelas famílias, crianças e professoras/es no âmbito da educação pública municipal.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A440',
			obligatory: true
		},
		'EP445': {
			code: 'EP445',
			name: 'Sociologia da Educação II',
			ementa: 'Propicia aos estudantes uma reflexão das preocupações e produções no âmbito da Sociologia da Educação, com ênfase na educação escolar, em diálogo com os processos sociais, políticos e econômicos internacionais na sociedade contemporânea. Contribui para o conhecimento sociológico das diferentes visões que se manifestam e se confrontam nas políticas públicas de educação na atualidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#409DD9',
			obligatory: true
		},
		'EP790': {
			code: 'EP790',
			name: 'Políticas de Educação Infantil',
			ementa: 'Descrição e análise dos fundamentos históricos, políticos, econômicos e sociais na Educação Infantil. Conceito de infância, de família e suas historicidades. Funções da Educação Infantil. Políticas de atendimento à infância. Creche e pré-escola.Relação Educação Infantil e Ensino Fundamental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9640D9',
			obligatory: true
		},
		'EP912': {
			code: 'EP912',
			name: 'Estágio Supervisionado III - Educação Infantil',
			ementa: 'Estágio em Instituições Formais de Educação da 1ª etapa da educação básica: creches e pré-escolas. Observação da (des)organização do tempo e do espaço físico. Observação da relação criança-criança e da construção das culturas infantis. Observação da relação adulto (professoras/es, educadoras/es)-criança e as condições de produção das culturas infantis. Observação da relação adulto-adulto entre eles/as, hierarquia de poder, gestão e co-gestão (pais, mães, responsáveis pelas crianças, professoras/es e educadoras/es, orientadoras/es, supervisoras/es, diretoras/es, vice-diretoras/es, coordenadoras/es).',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA430'],
			color: '#AAD940',
			obligatory: true
		},
		'EP144': {
			code: 'EP144',
			name: 'Metodologia da Pesquisa em Ciências da Educação I',
			ementa: 'A disciplina visa introduzir os estudantes nas questões ontológicas, epistemológicas e metodológicas que cercam a produção científica do conhecimento tendo em vista o trabalho da pesquisa em educação. Objetiva estimular a compreensão do processo de produção do conhecimento cientifico e iniciar os estudantes nas etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para reconstrução da realidade social.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D94D',
			obligatory: true
		},
		'EP146': {
			code: 'EP146',
			name: 'Educação e Tecnologias',
			ementa: 'Abordagem interdisciplinar, propondo-se o tratamento das tecnologias de comunicação e informação no ambiente educativo. Os alunos vivenciarão situações práticas que os levarão a refletir criticamente sobre o uso de tecnologias na educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#404DD9',
			obligatory: true
		},
		'EP569': {
			code: 'EP569',
			name: 'Seminário de Integração Curricular',
			ementa: 'Textos acadêmico-científicos da área educacional, suas características e especificidades. Modalidades de textos científicos. Reflexão e prática de leitura e produção de textos acadêmicos nas diversas modalidades. Dimensões metodológicas, técnicas e éticas da escrita, envolvendo o letramento acadêmico.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'EP913': {
			code: 'EP913',
			name: 'Estágio Supervisionado IV - Educação Infantil',
			ementa: 'Estágio em Instituições Formais de Educação da 1ª etapa da educação básica: creches e pré-escolas. Observação da (des)organização do tempo e do espaço físico. Observação da relação criança-criança e da construção das culturas infantis. Observação da relação adulto (professoras/es, educadoras/es)-criança e as condições de produção das culturas infantis. Observação da relação adulto-adulto entre eles/as, hierarquia de poder, gestão e co-gestão (pais, mães, responsáveis pelas crianças, professoras/es e educadoras/es, orientadoras/es, supervisoras/es, diretoras/es, vice-diretoras/es, coordenadoras/es).',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#4640D9',
			obligatory: true
		},
		'EP147': {
			code: 'EP147',
			name: 'Práticas Curriculares',
			ementa: 'Contempla a realização, pelo estudante do curso de Pedagogia, de algumas das seguintes atividades: participação em Congressos, Seminários, Simpósios, Colóquios, Mesas Redondas; audiência de defesas de dissertação ou tese; trabalhos de Iniciação Científica; monitorias; estágios extracurriculares; participação em grupos de pesquise da FE; apresentação de trabalhos em eventos científicos; representção estudantil; participação de atividades no âmbito da FE e da Unicamp. As atividades devem ser realizadas durante todo o período de permanência do estudante no curso.',
			semestre: 1,
			vector: {T:0, P:7, L:0, O:0, D:0, HS:7, SL:0, C:7},
			requisitos: '',
			color: '#4061D9',
			obligatory: true
		},
		'EP162': {
			code: 'EP162',
			name: 'Escola e Currículo',
			ementa: 'História do Currículo, concepções de currículo, fundamentos filosóficos, sociológicos, históricos e culturais, teorias e práticas curriculares. Análise e compreensão da transformação do conhecimento, da educação e da escola na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9407C',
			obligatory: true
		},
		'EP348': {
			code: 'EP348',
			name: 'Educação Especial e Inclusão',
			ementa: 'O acesso ao conhecimento e aos ambientes sociais e escolares de alunos com deficiência e altas habilidades, diante da responsabilidade de se garantir o direito à educação, como prescrição constitucional, no ensino básico e superior. A produção social da normalidade e da anormalidade. A constituição da educação especial e as propostas de escolarização das pessoas com deficiência, em diferentes momentos históricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9B1',
			obligatory: true
		},
		'EP808': {
			code: 'EP808',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'O aluno deverá iniciar trabalho de conclusão de curso, nos termos da deliberação da Congregação da FE, o qual será desenvolvido sob orientação de um docente da FE.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA470'],
			color: '#6E40D9',
			obligatory: true
		},
		'EP887': {
			code: 'EP887',
			name: 'Educação Não Formal',
			ementa: 'A disciplina objetiva fornecer aos alunos uma visão teórico-prática sobre modos, formas e processos educacionais existentes na sociedade e que possa contribuir para a formação crítica do profissional da área da Educação, especialmente em campos que dizem respeito à formação para a cidadania do indivíduo e à atuação de grupos socioculturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D961',
			obligatory: true
		},
		'EP914': {
			code: 'EP914',
			name: 'Estágio Supervisionado V - Educação Não Formal',
			ementa: 'Fornecer conhecimento teórico-prático para uma melhor compreensão da educação não-formal, permitindo que os alunos: 1- percebam, que o campo de trabalho do pedagogo é mais amplo do que o da escola formal; 2 - se conscientizem de que a educação não formal tem propósitos: a) reformadores, contribuindo para o melhor funcionamento da sociedade, b) transformadores objetivando formar nos educandos uma atitude frente à realidade, que busque a transformação social, c) mesclando as duas atitudes ao realizar a educação; 3 - conhecendo propostas não-formais de caráter transformador.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#D940A4',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EP529': {
			code: 'EP529',
			name: 'Educação de Surdos e Língua de Sinais',
			ementa: 'Conhecimentos teórico-práticos introdutórios de Libras, assumindo-a como elemento constitutivo do conhecimento do aluno sobre a surdez. Estudo sobre os parâmetros que caracterizam a Libras como língua; relação língua e constituição do sujeito humano; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens pedagógicas no ensino da pessoa surda; projetos de educação bilíngue.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40C5D9',
			obligatory: true
		},
		'EP809': {
			code: 'EP809',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'O aluno deverá apresentar trabalho de conclusão de curso sob orientação de um docente da FE, nos termos da deliberação da Congregação da FE.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D2D940',
			obligatory: true
		},
		'EP879': {
			code: 'EP879',
			name: 'Educação de Jovens e Adultos',
			ementa: 'Reflexões sobre a perspectiva histórica do direito à Educação para jovens e adultos: direitos, concepções e funções sociais. Abordagem da Educação de Jovens e Adultos enquanto campo de direitos e suas singularidades. As políticas educacionais para Educação de Jovens e Adultos. Cursos ofertados nos diferentes níveis de ensino (Fundamental e Médio) e articulação com a Educação Profissional. Projetos e experiências desenvolvidos na proposta para a modalidade EJA.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D240D9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
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
