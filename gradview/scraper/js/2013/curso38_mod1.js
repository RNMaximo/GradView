const catalogue = {
	totalCredits: 231,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EP107', 'EP110', 'EP130', 'EP140', 'EP315']
		},
		'sem-2': {
			id: '2',
			subjects: ['EP128', 'EP142', 'EP210', 'EP230', 'EP316']
		},
		'sem-3': {
			id: '3',
			subjects: ['EP129', 'EP152', 'EP317', 'EP340', 'EP347', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['EP153', 'EP165', 'EP330', 'EP412', 'EP566']
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
			subjects: ['EP139', 'EP226', 'EP445', 'EP790', 'EP912']
		},
		'sem-8': {
			id: '8',
			subjects: ['EP144', 'EP146', 'EP372', 'EP567', 'EP913']
		},
		'sem-9': {
			id: '9',
			subjects: ['EP147', 'EP162', 'EP348', 'EP808', 'EP887', 'EP914', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EP529', 'EP568', 'EP809', 'ELET10']
		}
	},

	subjects: {
		'EP107': {
			code: 'EP107',
			name: 'Introdução à Pedagogia - Organização do Trabalho Pedagógico',
			ementa: 'O objetivo das ciências da educação. O problema da unidade, especificidade e autonomia das ciências da educação. A educação como ponto de partida e de chegada dos estudos e das reflexões dos cientistas. A contribuição das ciências para a explicação e compreensão da educação. Contextualização histórica da Pedagogia no Brasil - o curso de Pedagogia da Unicamp.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99D40'
		},
		'EP110': {
			code: 'EP110',
			name: 'História da Educação I',
			ementa: 'Introdução à História da Educação. Bases epistemológicas, metodológicas e teóricas da História e História da Educação. Fundamentos da História da educação e da pedagogia: na antiguidade, na modernidade e na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#91D940'
		},
		'EP130': {
			code: 'EP130',
			name: 'Filosofia da Educação I',
			ementa: 'Introdução à filosofia mediante sua caracterização em face de outras formas de conhecimento. Estudo de filósofos antigos que contribuíram significativamente para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental, entre eles: Sócrates, os sofistas, Platão e Aristóteles.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404CD9'
		},
		'EP140': {
			code: 'EP140',
			name: 'Sociologia Geral',
			ementa: 'Estudo das Teorias Sociológicas Clássicas - Durkheim, Weber e Marx. Todos esses autores trouxeram para a sociologia temas fundamentais para o entendimento da formação e transformação da sociedade moderna por intermédio da interpretação e visão de mundo diversas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AA'
		},
		'EP315': {
			code: 'EP315',
			name: 'Pesquisa e Prática Pedagógica I',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#40D972'
		},
		'EP128': {
			code: 'EP128',
			name: 'Psicologia I',
			ementa: 'Contribuições das perspectivas teóricas comportamental e psicanalística para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas aplicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9D640'
		},
		'EP142': {
			code: 'EP142',
			name: 'Educação e Antropologia Cultural',
			ementa: 'Ao propor um diálogo entre educação e antropologia, a disciplina visa discutir a pertinência desta área do conhecimento para a atividade pedagógica como expressão de culturas específicas e de processos históricos e sociais determinados. Os objetivos específicos do curso são introduzir os alunos no quadro conceitual e temático da antropologia, discutir alguns expoentes da literatura antropológica sobre ciclos de vida (especialmente sobre infância e juventude), diversidade cultural, multiculturalismo e interculturalidade na sociedade contemporânea e, em particular, na escola; por fim, pretende-se mostrar a especificidade da antropologia que reside no modo pelo qual delimita seus campos de estudo, propondo modelos de interpretação e análise.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96540'
		},
		'EP210': {
			code: 'EP210',
			name: 'História da Educação II',
			ementa: 'A disciplina história da educação no Brasil. História da educação no Brasil no período colonial e no Império.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40AAD9'
		},
		'EP230': {
			code: 'EP230',
			name: 'Filosofia da Educação II',
			ementa: 'Estudo dos filósofos e/ou correntes filosóficas medievais e modernas que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental: a patrística e a escolástica, o racionalismo, o empirismo, o iluminismo kantiano e a concepção educacional de Rousseau.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C9D940'
		},
		'EP316': {
			code: 'EP316',
			name: 'Pesquisa e Prática Pedagógica II',
			ementa: 'Estudo das questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D94078'
		},
		'EP129': {
			code: 'EP129',
			name: 'Psicologia II',
			ementa: 'Contribuições das perspectivas teóricas cognitiva e histórico-cultural para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas implicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D984'
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D95F'
		},
		'EP317': {
			code: 'EP317',
			name: 'Pesquisa e Prática Pedagógica III',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educativas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#A440D9'
		},
		'EP340': {
			code: 'EP340',
			name: 'Sociologia da Educação I',
			ementa: 'Interpreta as relações entre educação e sociedade e educação e sociologia. Dedica-se ao estudo das concepções teóricas sobre a educação no discurso dos autores clássicos das Ciências Sociais (Durkheim, Weber, Marx).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46D940'
		},
		'EP347': {
			code: 'EP347',
			name: 'Educação, Cultura e Linguagens',
			ementa: 'Estudos sobre as diferentes linguagens verbais (fala e escrita), visuais (artes plásticas) e audiovisuais (cinema e televisão) que dão forma à Educação cultural e escolar,ao imaginário e à inteligência contemporâneas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B0'
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'EP153': {
			code: 'EP153',
			name: 'Metodologia do Ensino Fundamental',
			ementa: 'Trabalho de campo orientado para o diagnóstico dos componentes metodológicos envolvidos na prática educativa das escolas públicas de ensino fundamental, procurando analisá-las no conjunto das determinações mais amplas a que estão submetidas. Numa perspectiva integrada da área de Magistério, propor reflexões a partir da prática das escolas, a serem encaminhadas para as metodologias específicas, visando a continuidade do trabalho.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94065'
		},
		'EP165': {
			code: 'EP165',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organizações dos sistemas de ensino considerando as peculiaridades nacionais e os contextos internacionais; políticas educacionais e legislação de ensino, organização da educação básica e do ensino superior; impasses e perspectivas das políticas atuais em relação à educação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94040'
		},
		'EP330': {
			code: 'EP330',
			name: 'Filosofia da Educação III',
			ementa: 'Estudo de filósofos e/ou correntes filosóficas contemporâneas que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram fundamentos filosóficos da educação ocidental, incluindo as concepções positivista, marxista e as teorias críticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9409D'
		},
		'EP412': {
			code: 'EP412',
			name: 'História da Educação III',
			ementa: 'Fundamentos históricos da educação e da escola no Brasil republicano. Problemas e Perspectivas da educação contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40BDD9'
		},
		'EP566': {
			code: 'EP566',
			name: 'Seminário de Integração Curricular I',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B040'
		},
		'EP164': {
			code: 'EP164',
			name: 'Organização do Trabalho Pedagógico e Gestão Escolar',
			ementa: 'Fundamentos teóricos da Administração. Teorias da Administração e Gestão Educacional. Escola, Gestão e Projeto Político da escola. A organização do trabalho escolar: linguagem, tempo, espaço. Indivíduo e Organização.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6BD940'
		},
		'EP376': {
			code: 'EP376',
			name: 'Prát. de Ensino e Estágio Supervisionado nos Anos Iniciais do Ensino Fundamental',
			ementa: 'Planejamento, desenvolvimento e avaliação dos projetos de ensino envolvidos nas práticas educativas dos anos iniciais do Ensino Fundamental. Constitui espaço para tratamento interdisciplinar dos fundamentos oferecidos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D94C'
		},
		'EP471': {
			code: 'EP471',
			name: 'Escola, Alfabetização e Culturas da Escrita',
			ementa: 'Conhecimentos da ordem da escrita, seus usos e objetos, discursos e lugares de produção, circulação, divulgação. Estudos sobre o ensino da língua escrita. Alfabetização e Letramento: conceitos e práticas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9408B'
		},
		'EP472': {
			code: 'EP472',
			name: 'Escola e Conhecimento de História e Geografia',
			ementa: 'Estudos sobre as questões de tempo e de espaço, como produções socioculturais, intimamente articuladas, historicamente datadas e inscritas nas culturas escolares, bem como extraescolares.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9BD'
		},
		'EP910': {
			code: 'EP910',
			name: 'Estágio Supervisionado I - Gestão Escolar',
			ementa: 'Acompanhamento do processo de organização e administração da escola (educação básica e suas modalidades) enquanto unidade vinculada a um sistema de ensino, buscando o entendimento de seus problemas cotidianos e alternativas de solução baseadas nos fundamentos da política e da administração educacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#40D9CF'
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir os(as) alunos(as) às diferentes linguagens corporais e/ou artísticas em suas relações com o processo educacional.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9C340'
		},
		'EP377': {
			code: 'EP377',
			name: 'Planejamento Educacional e Estágio Supervisionado em Gestão Escolar',
			ementa: 'Acompanhamento e análise do processo de planejamento escolar e educacional no âmbito da educação básica e suas modalidades, como fase decisiva da implementação da política e da administração da educação, levando em conta os fundamentos teóricos que embasam a organização da escola e do sistema educacional.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40CFD9'
		},
		'EP473': {
			code: 'EP473',
			name: 'Escola e Cultura Matemática',
			ementa: 'A disciplina pretende identificar, caracterizar e problematizar, de forma multidisciplinar e comparativa, os condicionamentos singulares que conformam as práticas escolares e não escolares que envolvem cultura matemática, visando a formação reflexiva e crítica do professor dos anos iniciais da educação básica.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D97840'
		},
		'EP474': {
			code: 'EP474',
			name: 'Escola e Conhecimento em Ciências Naturais',
			ementa: 'Aspectos históricos do ensino de Ciências Naturais e da pesquisa na área. Concepção de Ciência, Ambiente, Tecnologia e Sociedade e suas relações, subjacentes aos principais modelos curriculares de ensino de Ciências. Reflexão sobre o ensino de Ciências Naturais com base nas diferentes visões do processo de aprendizagem e do processo de construção do conhecimento científico. Papel do ensino de ciências no ensino fundamental e inter-relações com os demais componentes curriculares. Recursos e materiais didáticos para o ensino de Ciências Naturais. Ensino de Ciências como Educação Ambiental.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940D6'
		},
		'EP911': {
			code: 'EP911',
			name: 'Estágio Supervisionado II - Anos Iniciais do Ensino Fundamental',
			ementa: 'Estágio junto às escolas de educação fundamental (anos iniciais), direcionado ao trabalho pedagógico, entendido na articulação entre a docência e a gestão escolar, observação e análise da sala de aula e sua articulação com os demais espaços da escola.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#D940C3'
		},
		'EP139': {
			code: 'EP139',
			name: 'Pedagogia da Educação Infantil',
			ementa: 'Estuda as teorias, as práticas pedagógicas e a produção das culturas infantis da educação infantil de caráter não obrigatório para crianças de 0-6 anos de idade, em creches e pré-escolas, na primeira etapa da educação básica. Assim como sua crítica numa abordagem das diferenças de classes, idade, gênero e etnia. Analisa a formação docente e as condições de produção das culturas infantis. Estuda numa perspectiva das ciências sociais essas instituições de educação infantil para a pequena infância constituída pelas famílias, crianças e professoras/es no âmbito da educação pública municipal.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5940D9'
		},
		'EP226': {
			code: 'EP226',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da Psicologia para a análise de questões relativas ao contexto educativo com base em pesquisas e relatos de experiências.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A4D940'
		},
		'EP445': {
			code: 'EP445',
			name: 'Sociologia da Educação II',
			ementa: 'Estudo da sociologia do conhecimento com o objetivo de,em termos teóricos, levar à compreensão da sociologia do currículo. Far-se-á o estudo das principais correntes sociológicas atuais, com destaque para discussão do currículo relacionado com os contextos socioculturais e com as novas tecnologias do setor produtivo. Serão analisadas as contribuições dessas teorias nas relações entre escola e sociedade e no conhecimento escolar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7ED940'
		},
		'EP790': {
			code: 'EP790',
			name: 'Políticas de Educação Infantil',
			ementa: 'Análise dos fundamentos políticos, econômicos e sociais da educação infantil, ou seja, do atendimento educacional em creches e pré-escolas de crianças de 0 - 6 anos. Conceitos de infância, família e suas historicidades. Funções da educação infantil. Políticas de atendimento à infância. Creches e pré-escolas. Relações entre educação infantil e ensino fundamental. Articulações dos equipamentos de atendimento à crianças de 0 a 6 anos com outras instituições.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B640D9'
		},
		'EP912': {
			code: 'EP912',
			name: 'Estágio Supervisionado III - Educação Infantil',
			ementa: 'Estágio em Instituições Formais de Educação da 1ª etapa da educação básica: creches e pré-escolas. Observação da (des)organização do tempo e do espaço físico. Observação da relação criança-criança e da construção das culturas infantis. Observação da relação adulto (professoras/es, educadoras/es)-criança e as condições de produção das culturas infantis. Observação da relação adulto-adulto entre eles/as, hierarquia de poder, gestão e co-gestão (pais, mães, responsáveis pelas crianças, professoras/es e educadoras/es, orientadoras/es, supervisoras/es, diretoras/es, vice-diretoras/es, coordenadoras/es).',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA430'],
			color: '#4097D9'
		},
		'EP144': {
			code: 'EP144',
			name: 'Metodologia da Pesquisa em Ciências da Educação I',
			ementa: 'A disciplina visa introduzir os estudantes nas questões ontológicas, epistemológicas e metodológicas que cercam a produção científica do conhecimento tendo em vista o trabalho da pesquisa em educação. Objetiva estimular a compreensão do processo de produção do conhecimento cientifico e iniciar os estudantes nas etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para reconstrução da realidade social.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6B40D9'
		},
		'EP146': {
			code: 'EP146',
			name: 'Educação e Tecnologias',
			ementa: 'Abordagem interdisciplinar, propondo-se o tratamento das tecnologias de comunicação e informação no ambiente educativo. Os alunos vivenciarão situações práticas que os levarão a refletir criticamente sobre o uso de tecnologias na educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94052'
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#59D940'
		},
		'EP567': {
			code: 'EP567',
			name: 'Seminário de Integração Curricular II',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7E40D9'
		},
		'EP913': {
			code: 'EP913',
			name: 'Estágio Supervisionado IV - Educação Infantil',
			ementa: 'Estágio em Instituições Formais de Educação da 1ª etapa da educação básica: creches e pré-escolas. Observação da (des)organização do tempo e do espaço físico. Observação da relação criança-criança e da construção das culturas infantis. Observação da relação adulto (professoras/es, educadoras/es)-criança e as condições de produção das culturas infantis. Observação da relação adulto-adulto entre eles/as, hierarquia de poder, gestão e co-gestão (pais, mães, responsáveis pelas crianças, professoras/es e educadoras/es, orientadoras/es, supervisoras/es, diretoras/es, vice-diretoras/es, coordenadoras/es).',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#4072D9'
		},
		'EP147': {
			code: 'EP147',
			name: 'Práticas Curriculares',
			ementa: 'Contempla a realização, pelo aluno, de algumas das seguintes atividades: participação em Congressos, Seminários, Simpósios, Colóquios, Mesas Redondas; audiência de defesas de dissertação ou tese; trabalhos de Iniciação Científica; monitorias; estágios extracurriculares; participação em grupos de pesquisa da FE; apresentação de trabalhos em eventos científicos; representação estudantil; participação em atividades no âmbito da FE e da Unicamp.',
			semestre: 1,
			vector: {T:0, P:7, L:0, O:0, D:0, HS:7, SL:0, C:7},
			requisitos: '',
			color: '#9140D9'
		},
		'EP162': {
			code: 'EP162',
			name: 'Escola e Currículo',
			ementa: 'Determinações histórica, cultural, epistemológica, social e ideológica do currículo; paradigmas técnico, prático e crítico e suas implicações para o processo de desenvolvimento curricular; pós-modernidade e suas implicações para o currículo escolar; perspectivas construtivista, pós-construtivista e sociointeracionista do currículo escolar; pressupostos sociofilosóficos de propostas curriculares de diferentes sistemas de educação, níveis de ensino e escolas; o currículo no cotidiano da escola pública.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C940D9'
		},
		'EP348': {
			code: 'EP348',
			name: 'Educação Especial e Inclusão',
			ementa: 'O acesso ao conhecimento e aos ambientes sociais e escolares de alunos com deficiência e altas habilidades, diante da responsabilidade de se garantir o direito à educação, como prescrição constitucional, no ensino básico e superior. A produção social da normalidade e da anormalidade. A constituição da educação especial e as propostas de escolarização das pessoas com deficiência, em diferentes momentos históricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4640D9'
		},
		'EP808': {
			code: 'EP808',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'O aluno deverá iniciar trabalho de conclusão de curso, nos termos da deliberação da Congregação da FE, o qual será desenvolvido sob orientação de um docente da FE.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#405FD9'
		},
		'EP887': {
			code: 'EP887',
			name: 'Educação Não Formal',
			ementa: 'A disciplina objetiva fornecer aos alunos uma visão teórico-prática sobre modos, formas e processos educacionais existentes na sociedade e que possa contribuir para a formação crítica do profissional da área da Educação, especialmente em campos que dizem respeito à formação para a cidadania do indivíduo e à atuação de grupos socioculturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95240'
		},
		'EP914': {
			code: 'EP914',
			name: 'Estágio Supervisionado V - Educação Não Formal',
			ementa: 'Fornecer conhecimento teórico-prático para uma melhor compreensão da educação não-formal, permitindo que os alunos: 1- percebam, que o campo de trabalho do pedagogo é mais amplo do que o da escola formal; 2 - se conscientizem de que a educação não formal tem propósitos: a) reformadores, contribuindo para o melhor funcionamento da sociedade, b) transformadores objetivando formar nos educandos uma atitude frente à realidade, que busque a transformação social, c) mesclando as duas atitudes ao realizar a educação; 3 - conhecendo propostas não-formais de caráter transformador.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#B6D940'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'EP529': {
			code: 'EP529',
			name: 'Educação de Surdos e Língua de Sinais',
			ementa: 'Conhecimentos introdutórios da libra e em libras, assumindo-a como elemento constitutivo do conhecimento do aluno sobre a surdez. Estudo sobre os parâmetros que caracterizam a libras como língua; relação língua e constituição do sujeito humano; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; duas abordagens pedagógicas no ensino da pessoa surda - a clínica e a bilíngue; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D997'
		},
		'EP568': {
			code: 'EP568',
			name: 'Seminário de Integração Curricular III',
			ementa: 'Organização conjunta - Coordenação de Pedagogia e alunos concluintes do Curso, de encontros e seminários que permitam a socialização e compartilhamento das experiências de estágio e dos trabalhos desenvolvidos no TCC.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98B40'
		},
		'EP809': {
			code: 'EP809',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'O aluno deverá apresentar trabalho de conclusão de curso sob orientação de um docente da FE, nos termos da deliberação da Congregação da FE.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#4084D9'
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
