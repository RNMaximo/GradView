const catalogue = {
	totalCredits: 220,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BA110', 'EF109', 'EF112', 'EF113', 'EF114', 'EF115', 'EF116']
		},
		'sem-2': {
			id: '2',
			subjects: ['BA210', 'BB110', 'EF209', 'EF212', 'EF213', 'EF214', 'EF215', 'EL683']
		},
		'sem-3': {
			id: '3',
			subjects: ['BF310', 'EF309', 'EF312', 'EF313', 'EF314', 'EF315', 'EF316']
		},
		'sem-4': {
			id: '4',
			subjects: ['BF410', 'EF411', 'EF412', 'EF413', 'EF414', 'EF415', 'EF416', 'ELET6']
		},
		'sem-5': {
			id: '5',
			subjects: ['EF511', 'EF512', 'EF513', 'EF514', 'EF521', 'EL511', 'ELET4']
		},
		'sem-6': {
			id: '6',
			subjects: ['EF611', 'EF612', 'EF613', 'EF614', 'EF621', 'EF622', 'EL212', 'ELET4']
		},
		'sem-7': {
			id: '7',
			subjects: ['EF711', 'EF714', 'EF722', 'EF723', 'EL774', 'ELET4']
		},
		'sem-8': {
			id: '8',
			subjects: ['EF811', 'EF814', 'EF822', 'EL874', 'ELET8']
		}
	},

	subjects: {
		'BA110': {
			code: 'BA110',
			name: 'Anatomia Humana I',
			ementa: 'Introdução ao estudo da Anatomia Humana. Organização morfofuncional do aparelho locomotor e sistemas circulatório e respiratório.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF109': {
			code: 'EF109',
			name: 'Socorros de Urgência',
			ementa: 'Reconhecimento da situação de emergência, prioridades e condutas a serem tomadas. Prevenção de acidentes. Primeiros socorros em lesões mais frequentes e naquelas relacionadas às práticas de atividades físicas. Atuação do Professor de Educação Física como educador na prática de primeiro socorrista.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF112': {
			code: 'EF112',
			name: 'História da Educação Física',
			ementa: 'Introdução aos estudos da história e da historiografia da Educação Física e do Esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF113': {
			code: 'EF113',
			name: 'Fundamentos de Antropologia e Educação Física',
			ementa: 'Fundamentos de Antropologia Social e suas implicações para a Educação Física. A relação entre Educação Física e Cultura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF114': {
			code: 'EF114',
			name: 'Fundamentos da Ginástica',
			ementa: 'Estudo e aplicação das principais escolas ou métodos de ginástica, sua influência na atualidade e suas dimensões pedagógicas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF115': {
			code: 'EF115',
			name: 'Jogo',
			ementa: 'Introdução aos estudos do jogo como fenômeno-cultural e suas relações com a Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF116': {
			code: 'EF116',
			name: 'Teorias do Conhecimento',
			ementa: 'Introdução ao estudo das principais correntes do pensamento clássico, das ciências humanas e suas repercussões no pensamento contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BA210': {
			code: 'BA210',
			name: 'Anatomia Humana II',
			ementa: 'Sistema nervoso e órgãos dos sentidos. Sistemas: Digestório e Endócrino. Sistemas: Urinário, Reprodutor Masculino e Reprodutor Feminino.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA110']
		},
		'BB110': {
			code: 'BB110',
			name: 'Bioquímica',
			ementa: 'Bioquímica da contração muscular , princípios de bioenergética; metabolismo anaeróbico: fosfocreatina e glicogênio. Metabolismo aeróbico: ácidos graxos, respiração celular e fosforilação oxidativa; espécies reativas de oxigênio; papel dos aminoácidos no metabolismo oxidativo. Aspectos bioquímicos da ação hormonal e integração metabólica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF209': {
			code: 'EF209',
			name: 'Atletismo',
			ementa: 'Introdução aos estudos do Atletismo, de suas concepções pedagógicas e de treinamento, bem como de seus aspectos organizacionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF212': {
			code: 'EF212',
			name: 'Ritmo e Expressão',
			ementa: 'Estudos teórico-práticos sobre ritmo e suas relações com a Educação Física. Noções de linguagem musical e a sua manifestação na expressão do corpo: a voz, o som, o gesto e a palavra.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF213': {
			code: 'EF213',
			name: 'Fundamentos Metodológicos do Treinamento Desportivo',
			ementa: 'Conceituações e estrutura do treinamento desportivo. Princípios do Treinamento. Meios e Métodos do Treinamento. Caracterização das capacidades físicas. Etapas de preparação desportiva de muitos anos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF214': {
			code: 'EF214',
			name: 'Metodologia de Pesquisa',
			ementa: 'Estudos das diferentes técnicas e procedimentos necessários para o desenvolvimento de pesquisas na área de Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF215': {
			code: 'EF215',
			name: 'Saúde Coletiva e Atividade Física',
			ementa: 'Saúde Coletiva e Atividade Física (SCAF): tendências e características básicas, principais concepções e práticas, bases biológicas e epidemiológicas. Conceitos fundamentais, classificação evolutiva das lesões desportivas (LD).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'BF310': {
			code: 'BF310',
			name: 'Fisiologia Humana I',
			ementa: 'Aquisição de conhecimentos gerais do funcionamento dos sistemas nervoso, neuromuscular e endócrino nas diversas condições ambientais a que são expostos os seres humanos, tais como, crescimento, maturação, variação de disponibilidade de alimento, atividade física, diversos estresses, etc.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BA210', 'BB110']
		},
		'EF309': {
			code: 'EF309',
			name: 'Cinesiologia',
			ementa: 'Estudo dos diversos movimentos do corpo humano com ênfase na estrutura e funções das articulações e grupos musculares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA210']
		},
		'EF312': {
			code: 'EF312',
			name: 'Teorias da Educação Física',
			ementa: 'Estudo das principais teorias da Educação Física, sua filiação epistemológica e suas implicações para a prática pedagógica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF313': {
			code: 'EF313',
			name: 'Fundamentos Teóricos do Lazer',
			ementa: 'Análise das principais concepções do Lazer e suas influências no pensamento contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF314': {
			code: 'EF314',
			name: 'Dança',
			ementa: 'Introdução a linguagem da Dança como expressão histórica e cultural, popular, clássica e moderna e suas relações com a Educação Física. Estudo sobre os métodos de expressão corporal pautados pela poética da Dança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF315': {
			code: 'EF315',
			name: 'Luta',
			ementa: 'Estudos teórico-práticos sobre Luta e suas relações com a Educação Física. Noções das diferentes lutas e procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF316': {
			code: 'EF316',
			name: 'Crescimento e Desenvolvimento',
			ementa: 'Estudo dos processos que envolvem o crescimento físico e o desenvolvimento motor, e as prontidões maturacionais relacionadas à atividade física.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BF410': {
			code: 'BF410',
			name: 'Fisiologia Humana II',
			ementa: 'Aquisição de conhecimentos gerais do funcionamento dos sistemas digestivo, cardiovascular, respiratório e renal nas diversas condições ambientais a que são expostos os seres humanos, tais como, atividade física e diferentes fatores estressantes.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*BF310']
		},
		'EF411': {
			code: 'EF411',
			name: 'Biomecânica',
			ementa: 'Estudo das dinâmicas corporais nas atividades físicas a partir dos conceitos mecânicos básicos: movimento linear e angular, cinética linear e angular, mecânica dos fluídos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF412': {
			code: 'EF412',
			name: 'Fundamentos Neurofuncionais do Movimento Humano',
			ementa: 'Abordagem neuroanatômica e funcional dos diferentes níveis de atividades do sistema nervoso. Aspectos neurofuncionais dos sistemas motores somáticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF413': {
			code: 'EF413',
			name: 'Sociologia do Esporte',
			ementa: 'Estudo das relações Esporte e Sociedade e suas implicações na sociedade contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF414': {
			code: 'EF414',
			name: 'Fundamentos de Psicologia e Educação Física',
			ementa: 'Estudo das teorias psicológicas e suas visões de corpo e movimento. O conhecimento psicológico aplicado à Educação Física. Aspectos psicológicos do processo ensino-aprendizagem em Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF415': {
			code: 'EF415',
			name: 'Nado',
			ementa: 'Estudo das formas de expressão humana no meio aquático, e suas diferentes manifestações na sociedade.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF416': {
			code: 'EF416',
			name: 'Esporte Coletivo',
			ementa: 'O esporte como expressão de cultura e suas implicações para o ensino das modalidades esportivas coletivas; o esporte coletivo como categoria.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		},
		'EF511': {
			code: 'EF511',
			name: 'Estatística Aplicada à Educação Física',
			ementa: 'Descrição e comparação de conjuntos de dados quantitativos e qualitativos. Inferência acerca da similaridade de conjunto de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF512': {
			code: 'EF512',
			name: 'Adaptações dos Sistemas Orgânicos ao Treinamento Físico',
			ementa: 'Estudo da Fisiologia do Exercício. Ajustes e adaptações dos sistemas orgânicos em resposta ao exercício e ao treinamento físico.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF410']
		},
		'EF513': {
			code: 'EF513',
			name: 'Treinamento Desportivo e a Preparação do Desempenho',
			ementa: 'Estudo dos desportos de acordo com a característica das ações motoras, dos meios e métodos de treinamento, das capacidades motoras e sua relação com o princípio da especificidade. Modelos de estruturação e periodização do treinamento desportivo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EF213', 'EF316']
		},
		'EF514': {
			code: 'EF514',
			name: 'Educação Física Adaptada',
			ementa: 'Estudo dos conceitos da Educação Física Adaptada. Fundamentos e características das deficiências sensoriais, físicas e cognitivas. Considerações históricas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF521': {
			code: 'EF521',
			name: 'Estágio Supervisionado em Educação Física I',
			ementa: 'Atividades de estágio que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450']
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'EF611': {
			code: 'EF611',
			name: 'Processo de Envelhecimento e Educação Física',
			ementa: 'Estudo do processo do envelhecimento, elaboração e desenvolvimento de programas específicos para essa fase da vida.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450']
		},
		'EF612': {
			code: 'EF612',
			name: 'Fundamentos de Nutrição e Educação Física',
			ementa: 'Estudo dos nutrientes essenciais, seu papel metabólico e consequências de suas carências. Demandas alimentares durante as fases do desenvolvimento humano e na atividade física. Estudo sobre ergogênicos nutricionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF613': {
			code: 'EF613',
			name: 'Aprendizagem Motora',
			ementa: 'Estudo das teorias, processos e mecanismos específicos da aprendizagem motora.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF614': {
			code: 'EF614',
			name: 'Pesquisa em Educação Física I',
			ementa: 'Elaboração e desenvolvimento de projeto de pesquisa sob orientação de um docente, tendo como objetivo o trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'EF214']
		},
		'EF621': {
			code: 'EF621',
			name: 'Estágio Supervisionado em Educação Física II',
			ementa: 'Atividades de estágio que propiciem ao professor em formação o contato com experiências, práticas, conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['EF521']
		},
		'EF622': {
			code: 'EF622',
			name: 'Educação Física - Educação Infantil',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física e suas relações com a Educação Infantil.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'EF711': {
			code: 'EF711',
			name: 'Lazer e Sociedade',
			ementa: 'Estudo das relações Lazer e Sociedade e suas implicações contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF313']
		},
		'EF714': {
			code: 'EF714',
			name: 'Pesquisa em Educação Física II',
			ementa: 'Desenvolvimento de projeto de pesquisa sob orientação de um docente, tendo como objetivo o trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF614']
		},
		'EF722': {
			code: 'EF722',
			name: 'Educação Física Escolar - Ensino Fundamental',
			ementa: 'Estudos das concepções e procedimentos pedagógicos da Educação Física para o Ensino Fundamental.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EF723': {
			code: 'EF723',
			name: 'Educação Física Escolar Especial',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física relacionado à Educação Física Escolar Especial.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA445', 'EL211', 'EL511', 'EL683']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'EF811': {
			code: 'EF811',
			name: 'Gestão em Esporte',
			ementa: 'Estudo da gestão e do planejamento das estruturas esportivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EF814': {
			code: 'EF814',
			name: 'Seminário de Monografia',
			ementa: 'Conclusão e apresentação pública do trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['EF714']
		},
		'EF822': {
			code: 'EF822',
			name: 'Educação Física Escolar - Ensino Médio',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física para o Ensino Médio.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;