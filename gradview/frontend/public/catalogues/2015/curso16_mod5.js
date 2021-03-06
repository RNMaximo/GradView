const catalogue = {
	totalCredits: 213,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ158', 'HZ160', 'HZ141']
		},
		'sem-2': {
			id: '2',
			subjects: ['ELET02', 'HZ258', 'HZ260', 'HZ248']
		},
		'sem-3': {
			id: '3',
			subjects: ['HZ358', 'ELET03', 'HZ360', 'HZ345']
		},
		'sem-4': {
			id: '4',
			subjects: ['LA001', 'HZ431', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'ELET05', 'HZ369']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'EL874', 'HZ349', 'HZ631']
		},
		'sem-7': {
			id: '7',
			subjects: ['HZ103', 'HZ339', 'CE730', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['HZ104', 'HZ359', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HZ---'],
		},
		'elet-2': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL511', 'EL683'],
		},
		'elet-3': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['EP107', 'EP110', 'EP128', 'EP129', 'EP130', 'EP142', 'EP144', 'EP146', 'EP152', 'EP158', 'EP162', 'EP164', 'EP210', 'EP226', 'EP230', 'EP315', 'EP316', 'EP317', 'EP330', 'EP340', 'EP347', 'EP348', 'EP372', 'EP377', 'EP412', 'EP445', 'EP471', 'EP472', 'EP529', 'EP566', 'EP567', 'EP568', 'EP810', 'EP811', 'EP812', 'EP813', 'EP814', 'EP887', 'EP910', 'EP914'],
		},
		'elet-4': {
			credits: 36,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'GF---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'TL---'],
		},
		'elet-5': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['HH---'],
		},
		'elet-7': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['HG---'],
		},
	},

	subjects: {
		'CE131': {
			code: 'CE131',
			name: 'Introdução à Economia para Ciências Sociais',
			ementa: 'O sistema de produção. Divisão do trabalho. Os três aspectos da produção. Taxa de lucro e movimento do capital. Salário e lucros. Crescimento e ciclo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B957',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objeto da Ciência Política. O poder político. A ação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#4692B9',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8446B9',
			obligatory: true
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de <i>natureza</i> e <i>cultura</i>. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8E46B9',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'Rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985. Exame do debate existente na bibliografia sobre esses temas. As transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#4692B9',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B99F46',
			obligatory: true
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de <i>troca, sociedade e estrutura</i>. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160'],
			color: '#8E46B9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'Fundamentos teóricos da análise do Estado contemporâneo. A relação entre o Estado e a sociedade civil. Estado e classes sociais. A questão da burocracia. As estruturas do Estado moderno.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#4692B9',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B98146',
			obligatory: true
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de <i>etnografias antropológicas</i> recuperando o arco de discussões sobre o fazer etnográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260'],
			color: '#8E46B9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160'],
			color: '#735FB9',
			obligatory: true
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464DB9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
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
			color: '#B946A8',
			obligatory: true
		},
		'HZ369': {
			code: 'HZ369',
			name: 'Ensino de Antropologia: Temas e Conceitos Fundamentais',
			ementa: 'Disciplina voltada para a formação didático-pedagógica em Antropologia, abrangendo conteúdos que serão objeto do ensino do futuro docente. Estes incluem um conjunto de temas e conceitos fundamentais. Os temas indicados são: história e cultura afro-brasileira, indígena e africana; educação ambiental; problemas sociais contemporâneos; modos de conhecimento e relações de ensino-aprendizagem. Os conceitos: cultura, alteridade, raça, gênero e desigualdade. O objetivo é capacitar os alunos no manejo da sala de aula a partir da seleção e avaliação de materiais e métodos para o ensino da Antropologia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#B9A846',
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
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#B946A8',
			obligatory: true
		},
		'HZ349': {
			code: 'HZ349',
			name: 'Políticas Públicas Educacionais',
			ementa: 'A disciplina pretende fornecer ao estudante elementos que o capacitem a participar das discussões sobre temas relevantes em políticas públicas educacionais. Após uma introdução aos conceitos e noções basilares no estudo de políticas públicas, as aulas se encaminharão para o estabelecimento de um panorama sobre a trajetória das políticas educacionais no Brasil e o debate sobre temas que estabelecem os limites do atual debate neste campo: sistemas de ensino e dimensão federativa, financiamento, políticas específicas em cada nível de ensino (básico, superior e profissional), ensino público e ensino privado, entre outros temas. Por fim, por meio de perspectiva comparada, o estudante tomará contato com os sistemas educacionais na América Latina, de maneira a permitir o conhecimento destes e uma compreensão mais acurada do próprio caso brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#B96D46',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B992',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160'],
			color: '#6876A1',
			obligatory: true
		},
		'HZ103': {
			code: 'HZ103',
			name: 'Estágio Supervisionado em Ciências Sociais I',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450'],
			color: '#5D46B9',
			obligatory: true
		},
		'HZ339': {
			code: 'HZ339',
			name: 'Educação e Questões Demográficas',
			ementa: 'Essa disciplina tem como objetivo fornecer aos alunos um conjunto de conteúdos específicos e de ferramentas pedagógicas sobre a relação entre a educação, em seus diversos níveis, e as questões demográficas. A disciplina é composta por módulos que abordam, por um lado, os aspectos principais da dinâmica demográfica (fecundidade, mortalidade e migração); por outro lado, abordam como estes componentes da dinâmica demográfica se relacionam com a Educação, seja em termos de geração de demandas, seja em termos de caracterização e avaliação do atendimento às demandas educacionais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#B9B246',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ104': {
			code: 'HZ104',
			name: 'Estágio Supervisionado em Ciências Sociais II',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HZ103'],
			color: '#5D46B9',
			obligatory: true
		},
		'HZ359': {
			code: 'HZ359',
			name: 'Educação e Sociedade',
			ementa: 'A educação como objeto de análise e investigação da Sociologia a partir da contribuição de autores clássicos e contemporâneos no que se refere às relações entre educação e sociedade e uma sociologia da educação. Estudo das interpretações relativas à escola, aos sistemas de ensino e aos diferentes processos educacionais existentes na sociedade. A pesquisa sociológica sobre educação no Brasil e em outros contextos escolares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#4946B9',
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
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B960',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96446',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B95046',
			obligatory: false
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B94D',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#466AB9',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9466D',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B97746',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'EP107': {
			code: 'EP107',
			name: 'Introdução à Pedagogia - Organização do Trabalho Pedagógico',
			ementa: 'O objetivo das ciências da educação. O problema da unidade, especificidade e autonomia das ciências da educação. A educação como ponto de partida e de chegada dos estudos e das reflexões dos cientistas. A contribuição das ciências para a explicação e compreensão da educação. Contextualização histórica da Pedagogia no Brasil - o curso de Pedagogia da Unicamp.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AC46B9',
			obligatory: false
		},
		'EP110': {
			code: 'EP110',
			name: 'História da Educação I',
			ementa: 'Introdução à História da Educação. Bases epistemológicas, metodológicas e teóricas da História e História da Educação. Fundamentos da História da educação e da pedagogia: na antiguidade, na modernidade e na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B96A',
			obligatory: false
		},
		'EP128': {
			code: 'EP128',
			name: 'Psicologia I',
			ementa: 'Contribuições das perspectivas teóricas comportamental, social cognitiva e psicanalítica para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas aplicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A5',
			obligatory: false
		},
		'EP129': {
			code: 'EP129',
			name: 'Psicologia II',
			ementa: 'Contribuições das perspectivas teóricas construtivista e histórico-cultural para o estudo do processo de ensino, aprendizagem e desenvolvimento e suas implicações para o contexto educativo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46AFB9',
			obligatory: false
		},
		'EP130': {
			code: 'EP130',
			name: 'Filosofia da Educação I',
			ementa: 'Introdução à filosofia mediante sua caracterização em face de outras formas de conhecimento. Estudo de filósofos antigos que contribuíram significativamente para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental, entre eles: Sócrates, os sofistas, Platão e Aristóteles.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'EP142': {
			code: 'EP142',
			name: 'Educação e Antropologia Cultural',
			ementa: 'Ao propor um diálogo entre educação e antropologia, a disciplina visa discutir a pertinência desta área do conhecimento para a atividade pedagógica como expressão de culturas específicas e de processos históricos e sociais determinados. Os objetivos específicos do curso são introduzir os alunos no quadro conceitual e temático da antropologia, discutir alguns expoentes da literatura antropológica sobre ciclos de vida (especialmente sobre infância e juventude), diversidade cultural, multiculturalismo e interculturalidade na sociedade contemporânea e, em particular, na escola; por fim, pretende-se mostrar a especificidade da antropologia que reside no modo pelo qual delimita seus campos de estudo, propondo modelos de interpretação e análise.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9469F',
			obligatory: false
		},
		'EP144': {
			code: 'EP144',
			name: 'Metodologia da Pesquisa em Ciências da Educação I',
			ementa: 'A disciplina visa introduzir os estudantes nas questões ontológicas, epistemológicas e metodológicas que cercam a produção científica do conhecimento tendo em vista o trabalho da pesquisa em educação. Objetiva estimular a compreensão do processo de produção do conhecimento cientifico e iniciar os estudantes nas etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para reconstrução da realidade social.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94650',
			obligatory: false
		},
		'EP146': {
			code: 'EP146',
			name: 'Educação e Tecnologias',
			ementa: 'Abordagem interdisciplinar, propondo-se o tratamento das tecnologias de comunicação e informação no ambiente educativo. Os alunos vivenciarão situações práticas que os levarão a refletir criticamente sobre o uso de tecnologias na educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B646B9',
			obligatory: false
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9AF',
			obligatory: false
		},
		'EP158': {
			code: 'EP158',
			name: 'Educação, Corpo e Arte',
			ementa: 'Esta disciplina, de caráter teórico-prático, visa introduzir os(as) alunos(as) às diferentes linguagens corporais e/ou artísticas em suas relações com o processo educacional.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5346B9',
			obligatory: false
		},
		'EP162': {
			code: 'EP162',
			name: 'Escola e Currículo',
			ementa: 'História do Currículo, concepções de currículo, fundamentos filosóficos, sociológicos, históricos e culturais, teorias e práticas curriculares. Análise e compreensão da transformação do conhecimento, da educação e da escola na contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7B46B9',
			obligatory: false
		},
		'EP164': {
			code: 'EP164',
			name: 'Organização do Trabalho Pedagógico e Gestão Escolar',
			ementa: 'Fundamentos teóricos da Administração. Teorias da Administração e Gestão Educacional. Escola, Gestão e Projeto Político da escola. A organização do trabalho escolar: linguagem, tempo, espaço.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94677',
			obligatory: false
		},
		'EP210': {
			code: 'EP210',
			name: 'História da Educação II',
			ementa: 'A disciplina história da educação no Brasil. História da educação no Brasil no período colonial e no Império.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9468B',
			obligatory: false
		},
		'EP226': {
			code: 'EP226',
			name: 'Psicologia e Educação',
			ementa: 'Contribuição da Psicologia para a análise de questões relativas ao contexto educativo com base em pesquisas e relatos de práticas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B6B946',
			obligatory: false
		},
		'EP230': {
			code: 'EP230',
			name: 'Filosofia da Educação II',
			ementa: 'Estudo dos filósofos e/ou correntes filosóficas medievais e modernas que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram os fundamentos filosóficos da educação ocidental: a patrística e a escolástica, o racionalismo, o empirismo e a concepção educacional de Rousseau.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A246B9',
			obligatory: false
		},
		'EP315': {
			code: 'EP315',
			name: 'Pesquisa e Prática Pedagógica I',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#67B946',
			obligatory: false
		},
		'EP316': {
			code: 'EP316',
			name: 'Pesquisa e Prática Pedagógica II',
			ementa: 'Estudo das questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#A2B946',
			obligatory: false
		},
		'EP317': {
			code: 'EP317',
			name: 'Pesquisa e Prática Pedagógica III',
			ementa: 'Estudo de questões ligadas à educação e à escola, a partir das contribuições teóricas e da pesquisa em distintas áreas do conhecimento. Investigação e análise das práticas educativas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#53B946',
			obligatory: false
		},
		'EP330': {
			code: 'EP330',
			name: 'Filosofia da Educação III',
			ementa: 'Estudo de filósofos e/ou correntes filosóficas contemporâneas que mais significativamente contribuíram para a reflexão sobre problemas pedagógicos ou que forneceram fundamentos filosóficos da educação ocidental, iniciando com o iluminismo kantiano incluindo as concepções positivista, marxista e as teorias críticas, entre outras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#98B946',
			obligatory: false
		},
		'EP340': {
			code: 'EP340',
			name: 'Sociologia da Educação I',
			ementa: 'Introduz os estudantes aos temas da Sociologia da Educação por intermédio de abordagem de autores clássicos - Karl Marx, Max Weber e Émile Durkheim - e dos seus novos enfoques. Propicia a compreensão das dimensões sociais da Educação, na sociedade contemporânea, a partir de categorias analíticas das principais teorias sociológicas. Analisa a relevância da educação nas relações sociais que engendram exploração, dominação e solidariedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95A46',
			obligatory: false
		},
		'EP347': {
			code: 'EP347',
			name: 'Educação, Cultura e Linguagens',
			ementa: 'Estudos sobre as diferentes linguagens verbais (fala e escrita), visuais (artes plásticas) e audiovisuais (cinema e televisão) que dão forma à Educação cultural e escolar,ao imaginário e à inteligência contemporâneas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5DB946',
			obligatory: false
		},
		'EP348': {
			code: 'EP348',
			name: 'Educação Especial e Inclusão',
			ementa: 'O acesso ao conhecimento e aos ambientes sociais e escolares de alunos com deficiência e altas habilidades, diante da responsabilidade de se garantir o direito à educação, como prescrição constitucional, no ensino básico e superior. A produção social da normalidade e da anormalidade. A constituição da educação especial e as propostas de escolarização das pessoas com deficiência, em diferentes momentos históricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4674B9',
			obligatory: false
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469BB9',
			obligatory: false
		},
		'EP377': {
			code: 'EP377',
			name: 'Planejamento Educacional e Estágio Supervisionado em Gestão Escolar',
			ementa: 'Acompanhamento e análise do processo de planejamento escolar e educacional no âmbito da educação básica e suas modalidades, como fase decisiva da implementação da política e da administração da educação, levando em conta os fundamentos teóricos que embasam a organização da escola e do sistema educacional.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4657B9',
			obligatory: false
		},
		'EP412': {
			code: 'EP412',
			name: 'História da Educação III',
			ementa: 'Fundamentos históricos da educação e da escola no Brasil republicano. Problemas e Perspectivas da educação contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B974',
			obligatory: false
		},
		'EP445': {
			code: 'EP445',
			name: 'Sociologia da Educação II',
			ementa: 'Propicia aos estudantes uma reflexão das preocupações e produções no âmbito da Sociologia da Educação, com ênfase na educação escolar, em diálogo com os processos sociais, políticos e econômicos internacionais na sociedade contemporânea. Contribui para o conhecimento sociológico das diferentes visões que se manifestam e se confrontam nas políticas públicas de educação na atualidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98B46',
			obligatory: false
		},
		'EP471': {
			code: 'EP471',
			name: 'Escola, Alfabetização e Culturas da Escrita',
			ementa: 'Conhecimentos da ordem da escrita, seus usos e objetos, discursos e lugares de produção, circulação, divulgação. Estudos sobre o ensino da língua escrita. Alfabetização e Letramento: conceitos e práticas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9465A',
			obligatory: false
		},
		'EP472': {
			code: 'EP472',
			name: 'Escola e Conhecimento de História e Geografia',
			ementa: 'Estudos sobre as questões de tempo e de espaço, como produções socioculturais, intimamente articuladas, historicamente datadas e inscritas nas culturas escolares, bem como extraescolares.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B99546',
			obligatory: false
		},
		'EP529': {
			code: 'EP529',
			name: 'Educação de Surdos e Língua de Sinais',
			ementa: 'Conhecimentos teórico-práticos introdutórios de Libras, assumindo-a como elemento constitutivo do conhecimento do aluno sobre a surdez. Estudo sobre os parâmetros que caracterizam a Libras como língua; relação língua e constituição do sujeito humano; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens pedagógicas no ensino da pessoa surda; projetos de educação bilíngue.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B97E',
			obligatory: false
		},
		'EP566': {
			code: 'EP566',
			name: 'Seminário de Integração Curricular I',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#84B946',
			obligatory: false
		},
		'EP567': {
			code: 'EP567',
			name: 'Seminário de Integração Curricular II',
			ementa: 'Problematização de questões de interesse para a Educação no cenário nacional contemporâneo, em uma perspectiva interdisciplinar e articulada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#ACB946',
			obligatory: false
		},
		'EP568': {
			code: 'EP568',
			name: 'Seminário de Integração Curricular III',
			ementa: 'Organização conjunta - Coordenação de Pedagogia e alunos concluintes do Curso, de encontros e seminários que permitam a socialização e compartilhamento das experiências de estágio e dos trabalhos desenvolvidos no TCC.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#71B946',
			obligatory: false
		},
		'EP810': {
			code: 'EP810',
			name: 'Seminário de Educação Especial',
			ementa: 'As distintas necessidades especiais e a produção de subjetividade. Perspectiva multidisciplinar para compreensão das necessidades especiais; formas de trabalho educativo e a atuação do pedagogo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#49B946',
			obligatory: false
		},
		'EP811': {
			code: 'EP811',
			name: 'Seminário de Pesquisa nas Áreas do Currículo Escolar',
			ementa: 'A disciplina propõe identificar, problematizar e analisar a literatura referente a pesquisas que focalizam a educação nas áreas do currículo escolar do Ensino Fundamental, visando contribuir à formação do professor dos anos iniciais da educação básica com um olhar crítico, reflexivo e propositivo para essa dimensão da pesquisa educacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8EB946',
			obligatory: false
		},
		'EP812': {
			code: 'EP812',
			name: 'Seminário de Pesquisa em História da África',
			ementa: 'Dimensão histórica da escravidão. Aspectos da história dos negros na África e contextos da escravidão no Brasil. Reflexos nas condições materiais e simbólicas de existência do negro na atualidade e em sua inserção nos contextos educativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94695',
			obligatory: false
		},
		'EP813': {
			code: 'EP813',
			name: 'Seminário de Pesquisa em História Indígena',
			ementa: 'Estudos sobre a história indígena no Brasil. Análise das condições materiais e simbólicas de existência das populações indígenas na atualidade e em sua inserção nos contextos educativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6746B9',
			obligatory: false
		},
		'EP814': {
			code: 'EP814',
			name: 'Seminário de Educação, Cultura e Artes',
			ementa: 'Abordagem de temas que articulem a Arte, em suas diferentes linguagens (dança, música, teatro e artes visuais), e a Educação como produções culturais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7146B9',
			obligatory: false
		},
		'EP887': {
			code: 'EP887',
			name: 'Educação Não Formal',
			ementa: 'A disciplina objetiva fornecer aos alunos uma visão teórico-prática sobre modos, formas e processos educacionais existentes na sociedade e que possa contribuir para a formação crítica do profissional da área da Educação, especialmente em campos que dizem respeito à formação para a cidadania do indivíduo e à atuação de grupos socioculturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7BB946',
			obligatory: false
		},
		'EP910': {
			code: 'EP910',
			name: 'Estágio Supervisionado I - Gestão Escolar',
			ementa: 'Acompanhamento do processo de organização e administração da escola (educação básica e suas modalidades) enquanto unidade vinculada a um sistema de ensino, buscando o entendimento de seus problemas cotidianos e alternativas de solução baseadas nos fundamentos da política e da administração educacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA430'],
			color: '#467EB9',
			obligatory: false
		},
		'EP914': {
			code: 'EP914',
			name: 'Estágio Supervisionado V - Educação Não Formal',
			ementa: 'Fornecer conhecimento teórico-prático para uma melhor compreensão da educação não-formal, permitindo que os alunos: 1- percebam, que o campo de trabalho do pedagogo é mais amplo do que o da escola formal; 2 - se conscientizem de que a educação não formal tem propósitos: a) reformadores, contribuindo para o melhor funcionamento da sociedade, b) transformadores objetivando formar nos educandos uma atitude frente à realidade, que busque a transformação social, c) mesclando as duas atitudes ao realizar a educação; 3 - conhecendo propostas não-formais de caráter transformador.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA430'],
			color: '#B94664',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4660B9',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94681',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B988',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B99B',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9846B9',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946B2',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46A5B9',
			obligatory: false
		}
	}
};

export default catalogue;
