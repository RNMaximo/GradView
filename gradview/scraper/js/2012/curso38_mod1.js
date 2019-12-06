const catalogue = {
	totalCredits: 231,
	maxCreditsSem: 32,
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

	eletivas: {
		'elet-1': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['EP810', 'EP811', 'EP812', 'EP813', 'EP814', 'EP815'],
		},
		'elet-2': {
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
			color: '#40D95A',
			obligatory: true
		},
		'EP110': {
			code: 'EP110',
			name: 'História da Educação I',
			ementa: 'Introdução à História da Educação. Bases epistemológicas, metodológicas e teóricas da História e História da Educação. Fundamentos da História da educação e da pedagogia: na antiguidade, na modernidade e na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9AF40',
			obligatory: true
		},
		'EP130': {
			code: 'EP130',
			name: 'Filosofia da Educação I',
			ementa: 'Introdução à filosofia mediante sua caracterização em face de outras formas de conhecimento. Estudo de filósofos antigos que contribuíram significativamente para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental, entre eles: Sócrates, os sofistas, Platão e Aristóteles.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99F40',
			obligatory: true
		},
		'EP140': {
			code: 'EP140',
			name: 'Sociologia Geral',
			ementa: 'Estudo das Teorias Sociológicas Clássicas - Durkheim, Weber e Marx. Todos esses autores trouxeram para a sociologia temas fundamentais para o entendimento da formação e transformação da sociedade moderna por intermédio da interpretação e visão de mundo diversas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#406AD9',
			obligatory: true
		},
		'EP315': {
			code: 'EP315',
			name: 'Pesquisa e Prática Pedagógica I',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D9BE40',
			obligatory: true
		},
		'EP128': {
			code: 'EP128',
			name: 'Psicologia I',
			ementa: 'Contribuições das perspectivas teóricas comportamental e psicanalística para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas aplicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'EP142': {
			code: 'EP142',
			name: 'Educação e Antropologia Cultural',
			ementa: 'O diálogo teórico entre Antropologia, Educação e Pedagogia busca compreender as formas de construção dos modos de viver humanos e sua realidade, nas instituições básicas da vida social, entre elas: a família, a escola, o trabalho e outras. Busca compreender a atividade pedagógica através da cultura do ambiente histórico, político e sociologicamente determinado. Discute a dimensão da Antropologia como ciência e alguns de seus conceitos, entre eles, Diferença, Cultura, Diversidade e Alteridade referidos aos diferentes espaços de ação e de intervenção da prática educativa e da prática científica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95F40',
			obligatory: true
		},
		'EP210': {
			code: 'EP210',
			name: 'História da Educação II',
			ementa: 'A disciplina história da educação no Brasil. História da educação no Brasil no período colonial e no Império.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4099D9',
			obligatory: true
		},
		'EP230': {
			code: 'EP230',
			name: 'Filosofia da Educação II',
			ementa: 'Estudo dos filósofos e/ou correntes filosóficas medievais e modernas que mais significativamente contribuiram para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental: a patrística e a escolástica, o racionalismo, o empirismo, o iluminismo Kantiano e a concepção educacional de Rousseau.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940BE',
			obligatory: true
		},
		'EP316': {
			code: 'EP316',
			name: 'Pesquisa e Prática Pedagógica II',
			ementa: 'Estudo das questões ligadas à educação e à escola, a patir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#4540D9',
			obligatory: true
		},
		'EP129': {
			code: 'EP129',
			name: 'Psicologia II',
			ementa: 'Contribuições das perspectivas teóricas cognitiva e histórico-cultural para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas implicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D340D9',
			obligatory: true
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#A4D940',
			obligatory: true
		},
		'EP317': {
			code: 'EP317',
			name: 'Pesquisa e Prática Pedagógica III',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educativas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D940CE',
			obligatory: true
		},
		'EP340': {
			code: 'EP340',
			name: 'Sociologia da Educação I',
			ementa: 'Interpreta as relações entre educação e sociedade e educação e sociologia. Dedica-se ao estudo das concepções teóricas sobre a educação no discurso dos autores clássicos das Ciências Sociais (Durkheim, Weber, Marx).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9409F',
			obligatory: true
		},
		'EP347': {
			code: 'EP347',
			name: 'Educação, Cultura e Linguagens',
			ementa: 'Estudos sobre as diferentes linguagens verbais (fala e escrita), visuais (artes plásticas) e audiovisuais (cinema e televisão) que dão forma à Educação cultural e escolar,ao imaginário e à inteligência contemporâneas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#55D940',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#A440D9',
			obligatory: true
		},
		'EP153': {
			code: 'EP153',
			name: 'Metodologia do Ensino Fundamental',
			ementa: 'Trabalho de campo orientado para o diagnóstico dos componentes metodológicos envolvidos na prática educativa das escolas públicas de ensino fundamental, procurando analisá-las no conjunto das determinações mais amplas a que estão submetidas. Numa perspectiva integrada da área de Magistério, propor reflexões a partir da prática das escolas, a serem encaminhadas para as metodologias específicas, visando a continuidade do trabalho.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#65D940',
			obligatory: true
		},
		'EP165': {
			code: 'EP165',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organizações dos sistemas de ensino considerando as peculiaridades nacionais e os contextos internacionais; políticas educacionais e legislação de ensino, organização da educação básica e do ensino superior; impasses e perspectivas das políticas atuais em relação à educação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9406F',
			obligatory: true
		},
		'EP330': {
			code: 'EP330',
			name: 'Filosofia da Educação III',
			ementa: 'Estudo de filósofos e/ou correntes filosóficas contemporâneos que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram fundamentos filosóficos da educação ocidental, inclluindo as concepções positivistas, marxistas e as teorias críticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D999',
			obligatory: true
		},
		'EP412': {
			code: 'EP412',
			name: 'História da Educação III',
			ementa: 'Fundamentos históricos da educação e da escola no Brasil republicano. Problemas e Perspectivas da educação contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408F',
			obligatory: true
		},
		'EP566': {
			code: 'EP566',
			name: 'Seminário de Integração Curricular I',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'EP164': {
			code: 'EP164',
			name: 'Organização do Trabalho Pedagógico e Gestão Escolar',
			ementa: 'Fundamentos teóricos da Administração. Teorias da Administração e Gestão Educacional. Escola, Gestão e Projeto Político da escola. A organização do trabalho escolar: linguagem, tempo, espaço. Indivíduo e Organização.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#75D940',
			obligatory: true
		},
		'EP376': {
			code: 'EP376',
			name: 'Prát. de Ensino e Estágio Supervisionado nos Anos Iniciais do Ensino Fundamental',
			ementa: 'Planejamento, desenvolvimento e avaliação dos projetos de ensino envolvidos nas práticas educativas dos anos iniciais do Ensino Fundamental. Constitui espaço para tratamento interdisciplinar dos fundamentos oferecidos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6540D9',
			obligatory: true
		},
		'EP471': {
			code: 'EP471',
			name: 'Escola, Alfabetização e Culturas da Escrita',
			ementa: 'Conhecimentos da ordem da escrita, seus usos e objetos, discursos e lugares de produção, circulação, divulgação. Estudos sobre o ensino da língua escrita. Alfabetização e Letramento: conceitos e práticas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#405AD9',
			obligatory: true
		},
		'EP472': {
			code: 'EP472',
			name: 'Escola e Conhecimento de História e Geografia',
			ementa: 'Estudos sobre as questões de tempo e de espaço, como produções socioculturais, intimamente articuladas, historicamente datadas e inscritas nas culturas escolares, bem como extraescolares.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D96F40',
			obligatory: true
		},
		'EP910': {
			code: 'EP910',
			name: 'Estágio Supervisionado I - Gestão Escolar',
			ementa: 'Acompanhamento do processo de organização e administração da escola (educação básica e suas modalidades) enquanto unidade vinculada a um sistema de ensino, buscando o entendimento de seus problemas cotidianos e alternativas de solução baseadas nos fundamentos da política e da administração educacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#94D940',
			obligatory: true
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir os(as) alunos(as) às diferentes linguagens corporais e/ou artísticas em suas relações com o processo educacional.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94050',
			obligatory: true
		},
		'EP377': {
			code: 'EP377',
			name: 'Planejamento Educacional e Estágio Supervisionado em Gestão Escolar',
			ementa: 'Acompanhamento e análise do processo de planejamento escolar e educacional no âmbito da educação básica e suas modalidades, como fase decisiva da implementação da política e da administração da educação, levando em conta os fundamentos teóricos que embasam a organização da escola e do sistema educacional.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9407F',
			obligatory: true
		},
		'EP473': {
			code: 'EP473',
			name: 'Escola e Cultura Matemática',
			ementa: 'A disciplina pretende identificar, caracterizar e problematizar, de forma multidisciplinar e comparativa, os condicionamentos singulares que conformam as práticas escolares e não escolares que envolvem cultura matemática, visando a formação reflexiva e crítica do professor dos anos iniciais da educação básica.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40C9D9',
			obligatory: true
		},
		'EP474': {
			code: 'EP474',
			name: 'Escola e Conhecimento em Ciências Naturais',
			ementa: 'Aspectos históricos do ensino de Ciências Naturais e da pesquisa na área. Concepção de Ciência, Ambiente, Tecnologia e Sociedade e suas relações, subjacentes aos principais modelos curriculares de ensino de Ciências. Reflexão sobre o ensino de Ciências Naturais com base nas diferentes visões do processo de aprendizagem e do processo de construção do conhecimento científico. Papel do ensino de ciências no ensino fundamental e inter-relações com os demais componentes curriculares. Recursos e materiais didáticos para o ensino de Ciências Naturais. Ensino de Ciências como Educação Ambiental.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D97F40',
			obligatory: true
		},
		'EP911': {
			code: 'EP911',
			name: 'Estágio Supervisionado II - Anos Iniciais do Ensino Fundamental',
			ementa: 'Estágio junto às escolas de educação fundamental (anos iniciais), direcionado ao trabalho pedagógico, entendido na articulação entre a docência e a gestão escolar, observação e análise da sala de aula e sua articulação com os demais espaços da escola.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#B440D9',
			obligatory: true
		},
		'EP139': {
			code: 'EP139',
			name: 'Pedagogia da Educação Infantil',
			ementa: 'Estuda as teorias e as práticas pedagógicas da educação infantil de caráter não obrigatório para crianças de 0-6 anos de idade, na primeira etapa da educação básica. Assim como sua crítica numa abordagem das diferenças de classes, idade, gênero e etnia. Analisa a formação docente e as condições de produção das culturas infantis. Estuda numa perspectiva das ciências sociais essas instituições de educação infantil para a pequena infância constituída pelas famílias, crianças e professoras/es no âmbito da educação pública municipal.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#408AD9',
			obligatory: true
		},
		'EP226': {
			code: 'EP226',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da Psicologia para a análise de questões relativas ao contexto educativo com base em pesquisas e relatos de experiências.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B9',
			obligatory: true
		},
		'EP445': {
			code: 'EP445',
			name: 'Sociologia da Educação II',
			ementa: 'Estudo da sociologia do conhecimento com o objetivo de,em termos teóricos, levar à compreensão da sociologia do currículo. Far-se-á o estudo das principais correntes sociológicas atuais, com destaque para discussão do currículo relacionado com os contextos socioculturais e com as novas tecnologias do setor produtivo. Serão analisadas as contribuições dessas teorias nas relações entre escola e sociedade e no conhecimento escolar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8440D9',
			obligatory: true
		},
		'EP790': {
			code: 'EP790',
			name: 'Políticas de Educação Infantil',
			ementa: 'Análise dos fundamentos políticos, econômicos e sociais da educação infantil, ou seja, do atendimento educacional em creches e pré-escolas de crianças de 0 - 6 anos. Conceitos de infância, família e suas historicidades. Funções da educação infantil. Políticas de atendimento à infância. Creches e pré-escolas. Relações entre educação infantil e ensino fundamental. Articulações dos equipamentos de atendimento à crianças de 0 a 6 anos com outras instituições.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9CE40',
			obligatory: true
		},
		'EP912': {
			code: 'EP912',
			name: 'Estágio Supervisionado III - Educação Infantil',
			ementa: 'Estágio em Instituições Formais de Educação da 1ª etapa da educação básica: creches e pré-escolas. Observação da (des)organização do tempo e do espaço físico, da relação criança-criança e da construção das culturas infantis e da relação adulto(professores, educadores)-criança e adulto-adulto(pais, professores e educadores).',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA430'],
			color: '#40D9C9',
			obligatory: true
		},
		'EP144': {
			code: 'EP144',
			name: 'Metodologia da Pesquisa em Ciências da Educação I',
			ementa: 'Introdução às questões epistemológicas, teóricas, técnicas e tecnológicas da produção científica na educação: os problemas contemporâneos da ciência, teorias e modos e linguagens da pesquisa. Prepara o aluno para, na área da educação, apreender o processo de produção do conhecimento, ler, avaliar e criticar pesquisas e formular projetos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D3D940',
			obligatory: true
		},
		'EP146': {
			code: 'EP146',
			name: 'Educação e Tecnologias',
			ementa: 'Abordagem interdisciplinar, propondo-se o tratamento das tecnologias de comunicação e informação no ambiente educativo. Os alunos vivenciarão situações práticas que os levarão a refletir criticamente sobre o uso de tecnologias na educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98F40',
			obligatory: true
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A9D9',
			obligatory: true
		},
		'EP567': {
			code: 'EP567',
			name: 'Seminário de Integração Curricular II',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D96A',
			obligatory: true
		},
		'EP913': {
			code: 'EP913',
			name: 'Estágio Supervisionado IV - Educação Infantil',
			ementa: 'Estágio em Instituições Formais de Educação da primeira etapa da educação básica: creches e pré-escolas. Observação da (des)organização do tempo e do espaço físico, da relação criança-criança e da construção das culturas infantis e da relação adulto(professores, educadores)-criança e adulto-adulto(pais, professores e educadores).',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#C440D9',
			obligatory: true
		},
		'EP147': {
			code: 'EP147',
			name: 'Práticas Curriculares',
			ementa: 'Contempla a realização, pelo aluno, de algumas das seguintes atividades: participação em Congressos, Seminários, Simpósios, Colóquios, Mesas Redondas; audiência de defesas de dissertação ou tese; trabalhos de Iniciação Científica; monitorias; estágios extracurriculares; participação em grupos de pesquisa da FE; apresentação de trabalhos em eventos científicos; representação estudantil; participação em atividades no âmbito da FE e da Unicamp.',
			semestre: 1,
			vector: {T:0, P:7, L:0, O:0, D:0, HS:7, SL:0, C:7},
			requisitos: '',
			color: '#40D98A',
			obligatory: true
		},
		'EP162': {
			code: 'EP162',
			name: 'Escola e Currículo',
			ementa: 'Determinações histórica, cultural, epistemológica, social e ideológica do currículo; paradigmas técnico, prático e crítico e suas implicações para o processo de desenvolvimento curricular; pós-modernidade e suas implicações para o currículo escolar; perspectivas construtivista, pós-construtivista e sociointeracionista do currículo escolar; pressupostos sociofilosóficos de propostas curriculares de diferentes sistemas de educação, níveis de ensino e escolas; o currículo no cotidiano da escola pública.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5540D9',
			obligatory: true
		},
		'EP348': {
			code: 'EP348',
			name: 'Educação Especial e Inclusão',
			ementa: 'O acesso ao conhecimento e aos ambientes sociais e escolares de alunos com deficiência e altas habilidades, diante da responsabilidade de se garantir o direito à educação, como prescrição constitucional, no ensino básico e superior. A produção social da normalidade e da anormalidade. A constituição da educação especial e as propostas de escolarização das pessoas com deficiência, em diferentes momentos históricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D94A',
			obligatory: true
		},
		'EP808': {
			code: 'EP808',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'O aluno deverá iniciar trabalho de conclusão de curso, nos termos da deliberação da Congregação da FE, o qual será desenvolvido sob orientação de um docente da FE.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#D9405F',
			obligatory: true
		},
		'EP887': {
			code: 'EP887',
			name: 'Educação Não Formal',
			ementa: 'A disciplina objetiva fornecer aos alunos uma visão teórico-prática sobre modos, formas e processos educacionais existentes na sociedade que contribuem para a formação crítica do profissional da área da Educação, especialmente em campos que dizem respeito à formação para a cidadania do indivíduo e grupos socioculturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404AD9',
			obligatory: true
		},
		'EP914': {
			code: 'EP914',
			name: 'Estágio Supervisionado V - Educação Não Formal',
			ementa: 'Fornecer conhecimento teórico-prático para diferenciar entre a educação não-formal, permitindo que: 1- percebam, que o campo de trabalho do pedagogo é mais amplo do que da escola formal; 2 - se conscientizem de que a educação não formal tem propósitos: a) reformadores, contribuindo para o funcionamento da sociedade, b) transformadores para formar uma atitude frente à realidade, buscando a transformação social, c) mesclando as duas atitudes ao realizar a educação; 3 - conhecendo propostas não formais de caráter formador.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#C4D940',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#9440D9',
			obligatory: true
		},
		'EP529': {
			code: 'EP529',
			name: 'Educação de Surdos e Língua de Sinais',
			ementa: 'Conhecimentos introdutórios da libra e em libras, assumindo-a como elemento constitutivo do conhecimento do aluno sobre a surdez. Estudo sobre os parâmetros que caracterizam a libras como língua; relação língua e constituição do sujeito humano; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; duas abordagens pedagógicas no ensino da pessoa surda - a clínica e a bilíngue; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B9D9',
			obligatory: true
		},
		'EP568': {
			code: 'EP568',
			name: 'Seminário de Integração Curricular III',
			ementa: 'Organização conjunta - Coordenação de Pedagogia e alunos concluintes do Curso, de encontros e seminários que permitam a socialização e compartilhamento das experiências de estágio e dos trabalhos desenvolvidos no TCC.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97A',
			obligatory: true
		},
		'EP809': {
			code: 'EP809',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'O aluno deverá apresentar trabalho de conclusão de curso sob orientação de um docente da FE, nos termos da deliberação da Congregação da FE.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#7540D9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#45D940',
			obligatory: true
		},
		'EP810': {
			code: 'EP810',
			name: 'Seminário de Educação Especial',
			ementa: 'As distintas necessidades especiais e a produção de subjetividade. Perspectiva multidisciplinar para compreensão das necessidades especiais; formas de trabalho educativo e a atuação do pedagogo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95040',
			obligatory: false
		},
		'EP811': {
			code: 'EP811',
			name: 'Seminário de Pesquisa nas Áreas do Currículo Escolar',
			ementa: 'A disciplina propõe identificar, problematizar e analisar a literatura referente a pesquisas que focalizam a educação nas áreas do currículo escolar do Ensino Fundamental, visando contribuir à formação do professor dos anos iniciais da educação básica com um olhar crítico, reflexivo e propositivo para essa dimensão da pesquisa educacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#84D940',
			obligatory: false
		},
		'EP812': {
			code: 'EP812',
			name: 'Seminário de Pesquisa em História da África',
			ementa: 'Dimensão histórica da escravidão. Aspectos da história dos negros na África e contextos da escravidão no Brasil. Reflexos nas condições materiais e simbólicas de existência do negro na atualidade e em sua inserção nos contextos educativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407AD9',
			obligatory: false
		},
		'EP813': {
			code: 'EP813',
			name: 'Seminário de Pesquisa em História Indígena',
			ementa: 'Estudos sobre a história indígena no Brasil. Análise das condições materiais e simbólicas de existência das populações indígenas na atualidade e em sua inserção nos contextos educativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B4D940',
			obligatory: false
		},
		'EP814': {
			code: 'EP814',
			name: 'Seminário de Educação, Cultura e Artes',
			ementa: 'Abordagem de temas que articulem a Arte, em suas diferentes linguagens (dança, música, teatro e artes visuais), e a Educação como produções culturais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9A9',
			obligatory: false
		},
		'EP815': {
			code: 'EP815',
			name: 'Seminário de Relações Interpessoais na Escola e na Educação Infantil',
			ementa: 'Contribuições da Psicologia para reflexão e análise acerca de temáticas ligadas às relações interpessoais no contexto das instituições educacionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940AF',
			obligatory: false
		}
	}
};

export default catalogue;
