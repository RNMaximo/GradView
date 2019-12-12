const catalogue = {
	totalCredits: 220,
	maxCreditsSem: 37,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BA110', 'EF116', 'EF113', 'EF114', 'EF115', 'EF109', 'EF112']
		},
		'sem-2': {
			id: '2',
			subjects: ['EF214', 'BA210', 'BB110', 'EF215', 'EF209', 'EL683', 'EF212', 'EF213']
		},
		'sem-3': {
			id: '3',
			subjects: ['EF309', 'BF310', 'EF312', 'EF313', 'EF315', 'EF314', 'EF316']
		},
		'sem-4': {
			id: '4',
			subjects: ['EF412', 'EF413', 'BF410', 'EF414', 'ELET04', 'EF411', 'EF415', 'EF416']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'EF512', 'EF521', 'EF514', 'EL511', 'EF511', 'EF513']
		},
		'sem-6': {
			id: '6',
			subjects: ['EF613', 'EF622', 'EF614', 'EF621', 'EL212', 'EF612', 'EF611', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EF722', 'EF714', 'EL774', 'EF711', 'EF723', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EF814', 'EL874', 'EF811', 'EF822', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 16,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['EF428', 'EF441', 'EF442', 'EF443', 'EF444', 'EF445', 'EF446', 'EF447', 'EF449', 'EF450', 'EF451'],
		},
	},

	subjects: {
		'BA110': {
			code: 'BA110',
			name: 'Anatomia Humana I',
			ementa: 'Introdução ao estudo da Anatomia Humana. Organização morfofuncional do aparelho locomotor e sistemas circulatório e respiratório.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B2',
			obligatory: true
		},
		'EF109': {
			code: 'EF109',
			name: 'Socorros de Urgência',
			ementa: 'Reconhecimento da situação de emergência, prioridades e condutas a serem tomadas. Prevenção de acidentes. Primeiros socorros em lesões mais frequentes e naquelas relacionadas às práticas de atividades físicas. Atuação do Professor de Educação Física como educador na prática de primeiro socorrista.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9468A',
			obligatory: true
		},
		'EF112': {
			code: 'EF112',
			name: 'História da Educação Física',
			ementa: 'Introdução aos estudos da história e da historiografia da Educação Física e do Esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B2B9',
			obligatory: true
		},
		'EF113': {
			code: 'EF113',
			name: 'Fundamentos de Antropologia e Educação Física',
			ementa: 'Fundamentos de Antropologia Social e suas implicações para a Educação Física. A relação entre Educação Física e Cultura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8A46B9',
			obligatory: true
		},
		'EF114': {
			code: 'EF114',
			name: 'Fundamentos da Ginástica',
			ementa: 'Estudo e aplicação das principais escolas ou métodos de ginástica, sua influência na atualidade e suas dimensões pedagógicas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A546',
			obligatory: true
		},
		'EF115': {
			code: 'EF115',
			name: 'Jogo',
			ementa: 'Introdução aos estudos do jogo como fenômeno-cultural e suas relações com a Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94697',
			obligatory: true
		},
		'EF116': {
			code: 'EF116',
			name: 'Teorias do Conhecimento',
			ementa: 'Introdução ao estudo das principais correntes do pensamento clássico, das ciências humanas e suas repercussões no pensamento contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4654B9',
			obligatory: true
		},
		'BA210': {
			code: 'BA210',
			name: 'Anatomia Humana II',
			ementa: 'Sistema nervoso e órgãos dos sentidos. Sistemas: Digestório e Endócrino. Sistemas: Urinário, Reprodutor Masculino e Reprodutor Feminino.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA110'],
			color: '#46B9B2',
			obligatory: true
		},
		'BB110': {
			code: 'BB110',
			name: 'Bioquímica',
			ementa: 'Bioquímica da contração muscular, princípios de bioenergética; metabolismo anaeróbico: fosfocreatina e glicogênio. Metabolismo aeróbico: ácidos graxos, respiração celular e fosforilação oxidativa; espécies reativas de oxigênio; papel dos aminoácidos no metabolismo oxidativo. Aspectos bioquímicos da ação hormonal e integração metabólica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#97B946',
			obligatory: true
		},
		'EF209': {
			code: 'EF209',
			name: 'Atletismo',
			ementa: 'Introdução aos estudos do Atletismo, de suas concepções pedagógicas e de treinamento, bem como de seus aspectos organizacionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B98A',
			obligatory: true
		},
		'EF212': {
			code: 'EF212',
			name: 'Ritmo e Expressão',
			ementa: 'Estudos teórico-práticos sobre ritmo e suas relações com a Educação Física. Noções de linguagem musical e a sua manifestação na expressão do corpo: a voz, o som, o gesto e a palavra.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8AB946',
			obligatory: true
		},
		'EF213': {
			code: 'EF213',
			name: 'Fundamentos Metodológicos do Treinamento Desportivo',
			ementa: 'Conceituações e estrutura do treinamento desportivo. Princípios do Treinamento. Meios e Métodos do Treinamento. Caracterização das capacidades físicas. Etapas de preparação desportiva de muitos anos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5446B9',
			obligatory: true
		},
		'EF214': {
			code: 'EF214',
			name: 'Metodologia de Pesquisa',
			ementa: 'Estudos das diferentes técnicas e procedimentos necessários para o desenvolvimento de pesquisas na área de Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98A46',
			obligatory: true
		},
		'EF215': {
			code: 'EF215',
			name: 'Saúde Coletiva e Atividade Física',
			ementa: 'Saúde Coletiva e Atividade Física (SCAF): tendências e características básicas, principais concepções e práticas, bases biológicas e epidemiológicas. Conceitos fundamentais, classificação evolutiva das lesões desportivas (LD).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B97C',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#7CB946',
			obligatory: true
		},
		'BF310': {
			code: 'BF310',
			name: 'Fisiologia Humana I',
			ementa: 'Aquisição de conhecimentos gerais do funcionamento dos sistemas nervoso, neuromuscular e endócrino nas diversas condições ambientais a que são expostos os seres humanos, tais como, crescimento, maturação, variação de disponibilidade de alimento, atividade física, diversos estresses, etc.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BA210', 'BB110'],
			color: '#6FB97C',
			obligatory: true
		},
		'EF309': {
			code: 'EF309',
			name: 'Cinesiologia',
			ementa: 'Estudo dos diversos movimentos do corpo humano com ênfase na estrutura e funções das articulações e grupos musculares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA210'],
			color: '#46B9B2',
			obligatory: true
		},
		'EF312': {
			code: 'EF312',
			name: 'Teorias da Educação Física',
			ementa: 'Estudo das principais teorias da Educação Física, sua filiação epistemológica e suas implicações para a prática pedagógica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99746',
			obligatory: true
		},
		'EF313': {
			code: 'EF313',
			name: 'Fundamentos Teóricos do Lazer',
			ementa: 'Análise das principais concepções do Lazer e suas influências no pensamento contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#61B946',
			obligatory: true
		},
		'EF314': {
			code: 'EF314',
			name: 'Dança',
			ementa: 'Introdução a linguagem da Dança como expressão histórica e cultural, popular, clássica e moderna e suas relações com a Educação Física. Estudo sobre os métodos de expressão corporal pautados pela poética da Dança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#467CB9',
			obligatory: true
		},
		'EF315': {
			code: 'EF315',
			name: 'Luta',
			ementa: 'Estudos teórico-práticos sobre Luta e suas relações com a Educação Física. Noções das diferentes lutas e procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'EF316': {
			code: 'EF316',
			name: 'Crescimento e Desenvolvimento',
			ementa: 'Estudo dos processos que envolvem o crescimento físico e o desenvolvimento motor, e as prontidões maturacionais relacionadas à atividade física.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A5B9',
			obligatory: true
		},
		'BF410': {
			code: 'BF410',
			name: 'Fisiologia Humana II',
			ementa: 'Aquisição de conhecimentos gerais do funcionamento dos sistemas digestivo, cardiovascular, respiratório e renal nas diversas condições ambientais a que são expostos os seres humanos, tais como, atividade física e diferentes fatores estressantes.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*BF310'],
			color: '#6FB97C',
			obligatory: true
		},
		'EF411': {
			code: 'EF411',
			name: 'Biomecânica',
			ementa: 'Estudo das dinâmicas corporais nas atividades físicas a partir dos conceitos mecânicos básicos: movimento linear e angular, cinética linear e angular, mecânica dos fluídos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'EF412': {
			code: 'EF412',
			name: 'Fundamentos Neurofuncionais do Movimento Humano',
			ementa: 'Abordagem neuroanatômica e funcional dos diferentes níveis de atividades do sistema nervoso. Aspectos neurofuncionais dos sistemas motores somáticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B997',
			obligatory: true
		},
		'EF413': {
			code: 'EF413',
			name: 'Sociologia do Esporte',
			ementa: 'Estudo das relações Esporte e Sociedade e suas implicações na sociedade contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B2',
			obligatory: true
		},
		'EF414': {
			code: 'EF414',
			name: 'Fundamentos de Psicologia e Educação Física',
			ementa: 'Estudo das teorias psicológicas e suas visões de corpo e movimento. O conhecimento psicológico aplicado à Educação Física. Aspectos psicológicos do processo ensino-aprendizagem em Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A5',
			obligatory: true
		},
		'EF415': {
			code: 'EF415',
			name: 'Nado',
			ementa: 'Estudo das formas de expressão humana no meio aquático, e suas diferentes manifestações na sociedade.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B2B946',
			obligatory: true
		},
		'EF416': {
			code: 'EF416',
			name: 'Esporte Coletivo',
			ementa: 'O esporte como expressão de cultura e suas implicações para o ensino das modalidades esportivas coletivas; o esporte coletivo como categoria.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9467C',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EF511': {
			code: 'EF511',
			name: 'Estatística Aplicada à Educação Física',
			ementa: 'Descrição e comparação de conjuntos de dados quantitativos e qualitativos. Inferência acerca da similaridade de conjunto de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4661B9',
			obligatory: true
		},
		'EF512': {
			code: 'EF512',
			name: 'Adaptações dos Sistemas Orgânicos ao Treinamento Físico',
			ementa: 'Estudo da Fisiologia do Exercício. Ajustes e adaptações dos sistemas orgânicos em resposta ao exercício e ao treinamento físico.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF410'],
			color: '#6FB97C',
			obligatory: true
		},
		'EF513': {
			code: 'EF513',
			name: 'Treinamento Desportivo e a Preparação do Desempenho',
			ementa: 'Estudo dos desportos de acordo com a característica das ações motoras, dos meios e métodos de treinamento, das capacidades motoras e sua relação com o princípio da especificidade. Modelos de estruturação e periodização do treinamento desportivo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EF213', 'EF316'],
			color: '#4D76B9',
			obligatory: true
		},
		'EF514': {
			code: 'EF514',
			name: 'Educação Física Adaptada',
			ementa: 'Estudo dos conceitos da Educação Física Adaptada. Fundamentos e características das deficiências sensoriais, físicas e cognitivas. Considerações históricas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94661',
			obligatory: true
		},
		'EF521': {
			code: 'EF521',
			name: 'Estágio Supervisionado em Educação Física I',
			ementa: 'Atividades de estágio que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450'],
			color: '#46B954',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4697B9',
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
		'EF611': {
			code: 'EF611',
			name: 'Processo de Envelhecimento e Educação Física',
			ementa: 'Estudo do processo do envelhecimento, elaboração e desenvolvimento de programas específicos para essa fase da vida.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#6FB946',
			obligatory: true
		},
		'EF612': {
			code: 'EF612',
			name: 'Fundamentos de Nutrição e Educação Física',
			ementa: 'Estudo dos nutrientes essenciais, seu papel metabólico e consequências de suas carências. Demandas alimentares durante as fases do desenvolvimento humano e na atividade física. Estudo sobre ergogênicos nutricionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B246',
			obligatory: true
		},
		'EF613': {
			code: 'EF613',
			name: 'Aprendizagem Motora',
			ementa: 'Estudo das teorias, processos e mecanismos específicos da aprendizagem motora.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97C46',
			obligatory: true
		},
		'EF614': {
			code: 'EF614',
			name: 'Pesquisa em Educação Física I',
			ementa: 'Elaboração e desenvolvimento de projeto de pesquisa sob orientação de um docente, tendo como objetivo o trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B246B9',
			obligatory: true
		},
		'EF621': {
			code: 'EF621',
			name: 'Estágio Supervisionado em Educação Física II',
			ementa: 'Atividades de estágio que propiciem ao professor em formação o contato com experiências, práticas, conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['EF521'],
			color: '#46B954',
			obligatory: true
		},
		'EF622': {
			code: 'EF622',
			name: 'Educação Física - Educação Infantil',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física e suas relações com a Educação Infantil.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946A5',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B961',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EF711': {
			code: 'EF711',
			name: 'Lazer e Sociedade',
			ementa: 'Estudo das relações Lazer e Sociedade e suas implicações contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF313'],
			color: '#61B946',
			obligatory: true
		},
		'EF714': {
			code: 'EF714',
			name: 'Pesquisa em Educação Física II',
			ementa: 'Desenvolvimento de projeto de pesquisa sob orientação de um docente, tendo como objetivo o trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF614'],
			color: '#B246B9',
			obligatory: true
		},
		'EF722': {
			code: 'EF722',
			name: 'Educação Física Escolar - Ensino Fundamental',
			ementa: 'Estudos das concepções e procedimentos pedagógicos da Educação Física para o Ensino Fundamental.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466F',
			obligatory: true
		},
		'EF723': {
			code: 'EF723',
			name: 'Educação Física Escolar Especial',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física relacionado à Educação Física Escolar Especial.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94654',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#468AB9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EF811': {
			code: 'EF811',
			name: 'Gestão em Esporte',
			ementa: 'Estudo da gestão e do planejamento das estruturas esportivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'EF814': {
			code: 'EF814',
			name: 'Seminário de Monografia',
			ementa: 'Conclusão e apresentação pública do trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['EF714'],
			color: '#B246B9',
			obligatory: true
		},
		'EF822': {
			code: 'EF822',
			name: 'Educação Física Escolar - Ensino Médio',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física para o Ensino Médio.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6F46B9',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#468AB9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EF428': {
			code: 'EF428',
			name: 'Natação',
			ementa: 'Estudo teórico-prático da Natação. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7C46B9',
			obligatory: false
		},
		'EF441': {
			code: 'EF441',
			name: 'Basquetebol',
			ementa: 'Estudo teórico-prático do Basquetebol. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96146',
			obligatory: false
		},
		'EF442': {
			code: 'EF442',
			name: 'Futebol de Campo',
			ementa: 'Estudo teórico-prático do Futebol de Campo. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95446',
			obligatory: false
		},
		'EF443': {
			code: 'EF443',
			name: 'Futsal',
			ementa: 'Estudo teórico-prático do Futsal. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A5B946',
			obligatory: false
		},
		'EF444': {
			code: 'EF444',
			name: 'Ginástica Geral',
			ementa: 'Estudo teórico-prático da Ginástica Geral. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6146B9',
			obligatory: false
		},
		'EF445': {
			code: 'EF445',
			name: 'Ginástica Artística',
			ementa: 'Estudo teórico-prático da Ginástica Artística. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B96F',
			obligatory: false
		},
		'EF446': {
			code: 'EF446',
			name: 'Ginástica Rítmica',
			ementa: 'Estudo teórico-prático da Ginástica Rítmica. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#466FB9',
			obligatory: false
		},
		'EF447': {
			code: 'EF447',
			name: 'Handebol',
			ementa: 'Estudo teórico-prático do Handebol. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#54B946',
			obligatory: false
		},
		'EF449': {
			code: 'EF449',
			name: 'Voleibol',
			ementa: 'Estudo teórico-prático do Voleibol. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9746B9',
			obligatory: false
		},
		'EF450': {
			code: 'EF450',
			name: 'Esportes de Raquete',
			ementa: 'Estudo teórico-prático dos Esportes de Raquete. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A546B9',
			obligatory: false
		},
		'EF451': {
			code: 'EF451',
			name: 'Ginásticas Competitivas',
			ementa: 'Estudo teórico-prático das Ginásticas Competitivas: Ginástica Rítmica, Ginástica Artística, Ginástica Acrobática, Trampolim Acrobático, entre outras. Procedimentos pedagógicos para o ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96F46',
			obligatory: false
		}
	}
};

export default catalogue;
