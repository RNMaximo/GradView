const catalogue = {
	totalCredits: 226,
	maxCreditsSem: 37,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BA110', 'EF109', 'EF113', 'EF112', 'EF115', 'EF116', 'EF114']
		},
		'sem-2': {
			id: '2',
			subjects: ['BB110', 'BA210', 'EL683', 'EF213', 'EF214', 'EF212', 'EF215', 'EF209']
		},
		'sem-3': {
			id: '3',
			subjects: ['BF310', 'EF309', 'FN468', 'EF314', 'EF316', 'EF313', 'EF315', 'EF312']
		},
		'sem-4': {
			id: '4',
			subjects: ['BF410', 'EF412', 'EF415', 'ELET04', 'EF413', 'EF416', 'EF414', 'EF411']
		},
		'sem-5': {
			id: '5',
			subjects: ['EF512', 'ELET05', 'EL511', 'EF513', 'EF521', 'EF511', 'EF514']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL212', 'EF622', 'EF614', 'EF613', 'EF621', 'EF611', 'EF612', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EF722', 'EF714', 'EL774', 'EF723', 'EF711', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EF814', 'EL874', 'ELET08', 'EF822', 'EF811']
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
			subjects: ['EF428', 'EF441', 'EF442', 'EF443', 'EF444', 'EF445', 'EF446', 'EF447', 'EF449', 'EF450', 'EF451', 'EF452'],
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
			color: '#B446B9',
			obligatory: true
		},
		'EF109': {
			code: 'EF109',
			name: 'Socorros de Urgência',
			ementa: 'Reconhecimento da situação de emergência, prioridades e condutas a serem tomadas. Prevenção de acidentes. Primeiros socorros em lesões mais frequentes e naquelas relacionadas às práticas de atividades físicas. Atuação do Professor de Educação Física como educador na prática de primeiro socorrista.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9467B',
			obligatory: true
		},
		'EF112': {
			code: 'EF112',
			name: 'História da Educação Física',
			ementa: 'Introdução aos estudos da história e da historiografia da Educação Física e do Esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469EB9',
			obligatory: true
		},
		'EF113': {
			code: 'EF113',
			name: 'Fundamentos de Antropologia e Educação Física',
			ementa: 'Fundamentos de Antropologia Social e suas implicações para a Educação Física. A relação entre Educação Física e Cultura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94653',
			obligatory: true
		},
		'EF114': {
			code: 'EF114',
			name: 'Fundamentos da Ginástica',
			ementa: 'Estudo e aplicação dos principais métodos de ginástica, sua influência e suas dimensões pedagógicas nos diferentes âmbitos de ação da Educação Física na atualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6546B9',
			obligatory: true
		},
		'EF115': {
			code: 'EF115',
			name: 'Jogo',
			ementa: 'Introdução aos estudos do jogo como fenômeno cultural e suas relações com a Educação e a Educação Física. Dimensões pedagógicas do jogo nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7246B9',
			obligatory: true
		},
		'EF116': {
			code: 'EF116',
			name: 'Teorias do Conhecimento',
			ementa: 'Introdução ao estudo das principais correntes do pensamento clássico, das ciências humanas e suas repercussões no pensamento contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'BA210': {
			code: 'BA210',
			name: 'Anatomia Humana II',
			ementa: 'Sistema nervoso e órgãos dos sentidos. Sistemas: Digestório e Endócrino. Sistemas: Urinário, Reprodutor Masculino e Reprodutor Feminino.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA110'],
			color: '#B446B9',
			obligatory: true
		},
		'BB110': {
			code: 'BB110',
			name: 'Bioquímica',
			ementa: 'Bioquímica da contração muscular , princípios de bioenergética; metabolismo anaeróbico: fosfocreatina e glicogênio. Metabolismo aeróbico: ácidos graxos, respiração celular e fosforilação oxidativa; espécies reativas de oxigênio; papel dos aminoácidos no metabolismo oxidativo. Aspectos bioquímicos da ação hormonal e integração metabólica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A746B9',
			obligatory: true
		},
		'EF209': {
			code: 'EF209',
			name: 'Atletismo',
			ementa: 'Introdução aos estudos do Atletismo, de suas concepções pedagógicas e de treinamento, bem como de seus aspectos organizacionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96146',
			obligatory: true
		},
		'EF212': {
			code: 'EF212',
			name: 'Ritmo e Expressão',
			ementa: 'Estudos teórico-práticos sobre ritmo e suas relações com a Educação Física. Noções de linguagem musical e a sua manifestação na expressão do corpo: a voz, o som, o gesto e a palavra. Dimensões pedagógicas do ritmo nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B984',
			obligatory: true
		},
		'EF213': {
			code: 'EF213',
			name: 'Fundamentos Metodológicos do Treinamento Desportivo',
			ementa: 'Conceituações e estrutura do treinamento desportivo. Princípios do Treinamento. Meios e Métodos do Treinamento. Caracterização das capacidades físicas. Etapas de preparação desportiva de muitos anos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98846',
			obligatory: true
		},
		'EF214': {
			code: 'EF214',
			name: 'Metodologia de Pesquisa',
			ementa: 'Estudos das diferentes técnicas e procedimentos necessários para o desenvolvimento de pesquisas e elaboração de textos científicos na área de Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46ACB9',
			obligatory: true
		},
		'EF215': {
			code: 'EF215',
			name: 'Saúde Coletiva e Atividade Física',
			ementa: 'Saúde Coletiva e Atividade Física (SCAF): tendências e características básicas, principais concepções e práticas, bases biológicas e epidemiológicas. Conceitos fundamentais, classificação evolutiva das lesões desportivas (LD).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B99E',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B95C',
			obligatory: true
		},
		'BF310': {
			code: 'BF310',
			name: 'Fisiologia Humana I',
			ementa: 'Aquisição de conhecimentos gerais do funcionamento dos sistemas nervoso, neuromuscular e endócrino nas diversas condições ambientais a que são expostos os seres humanos, tais como, crescimento, maturação, variação de disponibilidade de alimento, atividade física, diversos estresses, etc.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BA210', 'BB110'],
			color: '#AE46B9',
			obligatory: true
		},
		'EF309': {
			code: 'EF309',
			name: 'Cinesiologia',
			ementa: 'Estudo dos diversos movimentos do corpo humano com ênfase na estrutura e funções das articulações e grupos musculares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA210'],
			color: '#B446B9',
			obligatory: true
		},
		'EF312': {
			code: 'EF312',
			name: 'Teorias da Educação Física',
			ementa: 'Estudo das principais teorias da Educação Física e sua filiação epistemológica e suas implicações para a prática pedagógica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B977',
			obligatory: true
		},
		'EF313': {
			code: 'EF313',
			name: 'Fundamentos Teóricos do Lazer',
			ementa: 'Análise das principais concepções do Lazer e suas influências no pensamento contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'EF314': {
			code: 'EF314',
			name: 'Dança',
			ementa: 'Introdução à linguagem da Dança como expressão histórica e cultural, popular, clássica e moderna e suas relações com a Educação Física. Estudo sobre os métodos de expressão corporal, pautados pela poética da Dança. Dimensões pedagógicas da dança nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97B46',
			obligatory: true
		},
		'EF315': {
			code: 'EF315',
			name: 'Luta',
			ementa: 'Estudos teórico-práticos sobre Luta e suas relações com a Educação Física. Noções das diferentes lutas e procedimentos pedagógicos para o seu ensino nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4684B9',
			obligatory: true
		},
		'EF316': {
			code: 'EF316',
			name: 'Crescimento e Desenvolvimento',
			ementa: 'Estudo dos processos que envolvem o crescimento físico, o desenvolvimento motor e os processos maturacionais relacionadas à atividade física.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A346',
			obligatory: true
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B94F',
			obligatory: true
		},
		'BF410': {
			code: 'BF410',
			name: 'Fisiologia Humana II',
			ementa: 'Aquisição de conhecimentos gerais do funcionamento dos sistemas digestivo, cardiovascular, respiratório e renal nas diversas condições ambientais a que são expostos os seres humanos, tais como, atividade física e diferentes fatores estressantes.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*BF310'],
			color: '#AE46B9',
			obligatory: true
		},
		'EF411': {
			code: 'EF411',
			name: 'Biomecânica',
			ementa: 'Introdução aos fundamentos da Biomecânica, seus métodos de investigação e aplicações para descrição e análise do movimento humano no contexto da Educação Física e dos Esportes.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94661',
			obligatory: true
		},
		'EF412': {
			code: 'EF412',
			name: 'Fundamentos Neurofuncionais do Movimento Humano',
			ementa: 'Abordagem neuroanatômica e funcional dos diferentes níveis de atividades do sistema nervoso. Aspectos neurofuncionais dos sistemas motores somáticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94696',
			obligatory: true
		},
		'EF413': {
			code: 'EF413',
			name: 'Sociologia do Esporte',
			ementa: 'Estudo das relações Esporte e Sociedade e suas implicações na sociedade contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4B46B9',
			obligatory: true
		},
		'EF414': {
			code: 'EF414',
			name: 'Fundamentos de Psicologia e Educação Física',
			ementa: 'Estudo das teorias psicológicas e suas visões de corpo e movimento. Conhecimento psicológico aplicado à Educação Física. Aspectos psicológicos do processo ensino-aprendizagem em Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94688',
			obligatory: true
		},
		'EF415': {
			code: 'EF415',
			name: 'Nado',
			ementa: 'Estudo das formas de expressão humana no meio aquático e suas diferentes manifestações na sociedade. Dimensões pedagógicas do nado nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4691B9',
			obligatory: true
		},
		'EF416': {
			code: 'EF416',
			name: 'Esporte Coletivo',
			ementa: 'O esporte como expressão de cultura e suas implicações para o ensino das modalidades esportivas coletivas; o esporte coletivo como categoria. Dimensões pedagógicas do esporte coletivo nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99646',
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
			color: '#8046B9',
			obligatory: true
		},
		'EF512': {
			code: 'EF512',
			name: 'Adaptações dos Sistemas Orgânicos ao Treinamento Físico',
			ementa: 'Estudo da Fisiologia do Exercício. Ajustes e adaptações dos sistemas orgânicos em resposta ao exercício e ao treinamento físico.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF410'],
			color: '#AE46B9',
			obligatory: true
		},
		'EF513': {
			code: 'EF513',
			name: 'Treinamento Desportivo e a Preparação do Desempenho',
			ementa: 'Estudo dos desportos de acordo com a característica das ações motoras, dos meios e métodos de treinamento, das capacidades motoras e sua relação com o princípio da especificidade. Modelos de estruturação e periodização do treinamento desportivo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EF213', 'EF316'],
			color: '#B99646',
			obligatory: true
		},
		'EF514': {
			code: 'EF514',
			name: 'Educação Física Adaptada',
			ementa: 'Estudo dos conceitos da Educação Física Adaptada. Fundamentos e características das deficiências sensoriais, físicas e cognitivas. Considerações históricas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4669B9',
			obligatory: true
		},
		'EF521': {
			code: 'EF521',
			name: 'Estágio Supervisionado em Educação Física I',
			ementa: 'Atividades de estágio com ênfase na observação de práticas pedagógicas em Educação Física e do cotidiano escolar, nos diferentes níveis de ensino: educação infantil, ensino fundamental e ensino médio.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450'],
			color: '#46B991',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4677B9',
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
			color: '#58B946',
			obligatory: true
		},
		'EF612': {
			code: 'EF612',
			name: 'Fundamentos de Nutrição e Educação Física',
			ementa: 'Estudo dos nutrientes essenciais, seu papel metabólico e consequências de suas carências. Demandas alimentares durante as fases do desenvolvimento humano e na atividade física. Estudo sobre ergogênicos nutricionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8DB946',
			obligatory: true
		},
		'EF613': {
			code: 'EF613',
			name: 'Aprendizagem Motora',
			ementa: 'Estudo das teorias, processos e mecanismos específicos da aprendizagem motora nos diferentes âmbitos de ação da Educação Física.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9AC',
			obligatory: true
		},
		'EF614': {
			code: 'EF614',
			name: 'Pesquisa em Educação Física I',
			ementa: 'Elaboração de textos e desenvolvimento de projeto de pesquisa para trabalho de conclusão de curso (TCC).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#72B946',
			obligatory: true
		},
		'EF621': {
			code: 'EF621',
			name: 'Estágio Supervisionado em Educação Física II',
			ementa: 'Atividades de estágio de intervenção pedagógica em Educação Física nos diferentes níveis de ensino: educação infantil, ensino fundamental e ensino médio.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['EF521'],
			color: '#46B991',
			obligatory: true
		},
		'EF622': {
			code: 'EF622',
			name: 'Educação Física - Educação Infantil',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física e suas relações com a Educação Infantil.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#9A46B9',
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
			color: '#B94646',
			obligatory: true
		},
		'EF714': {
			code: 'EF714',
			name: 'Pesquisa em Educação Física II',
			ementa: 'Desenvolvimento de projeto de pesquisa sob orientação de um docente, tendo como objetivo o trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF614'],
			color: '#72B946',
			obligatory: true
		},
		'EF722': {
			code: 'EF722',
			name: 'Educação Física Escolar - Ensino Fundamental',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física para o Ensino Fundamental.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466E',
			obligatory: true
		},
		'EF723': {
			code: 'EF723',
			name: 'Educação Física Escolar Especial',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física relacionado à Educação Física Escolar Especial.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B4B946',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#465CB9',
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
			color: '#B96E46',
			obligatory: true
		},
		'EF814': {
			code: 'EF814',
			name: 'Seminário de Monografia',
			ementa: 'Conclusão e apresentação pública do trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['EF714'],
			color: '#72B946',
			obligatory: true
		},
		'EF822': {
			code: 'EF822',
			name: 'Educação Física Escolar - Ensino Médio',
			ementa: 'Estudo das concepções e procedimentos pedagógicos da Educação Física para o Ensino Médio.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9AB946',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#465CB9',
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
			color: '#B946A3',
			obligatory: false
		},
		'EF441': {
			code: 'EF441',
			name: 'Basquetebol',
			ementa: 'Estudo teórico-prático do Basquetebol. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5846B9',
			obligatory: false
		},
		'EF442': {
			code: 'EF442',
			name: 'Futebol de Campo',
			ementa: 'Estudo teórico-prático do Futebol de Campo. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A7B946',
			obligatory: false
		},
		'EF443': {
			code: 'EF443',
			name: 'Futsal',
			ementa: 'Estudo teórico-prático do Futsal. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B0',
			obligatory: false
		},
		'EF444': {
			code: 'EF444',
			name: 'Ginástica Geral',
			ementa: 'Estudo teórico-prático da Ginástica Geral. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8D46B9',
			obligatory: false
		},
		'EF445': {
			code: 'EF445',
			name: 'Ginástica Artística',
			ementa: 'Estudo teórico-prático da Ginástica Artística. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4BB946',
			obligatory: false
		},
		'EF446': {
			code: 'EF446',
			name: 'Ginástica Rítmica',
			ementa: 'Estudo teórico-prático da Ginástica Rítmica. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#464FB9',
			obligatory: false
		},
		'EF447': {
			code: 'EF447',
			name: 'Handebol',
			ementa: 'Estudo teórico-prático do Handebol. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#65B946',
			obligatory: false
		},
		'EF449': {
			code: 'EF449',
			name: 'Voleibol',
			ementa: 'Estudo teórico-prático do Voleibol. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95346',
			obligatory: false
		},
		'EF450': {
			code: 'EF450',
			name: 'Esportes de Raquete',
			ementa: 'Estudo teórico-prático dos Esportes de Raquete. Procedimentos pedagógicos para o seu ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B046',
			obligatory: false
		},
		'EF451': {
			code: 'EF451',
			name: 'Ginásticas Competitivas',
			ementa: 'Estudo teórico-prático das Ginásticas Competitivas: Ginástica Rítmica, Ginástica Artística, Ginástica Acrobática, Trampolim Acrobático, entre outras. Procedimentos pedagógicos para o ensino.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B969',
			obligatory: false
		},
		'EF452': {
			code: 'EF452',
			name: 'Capoeira',
			ementa: 'Estudo da Capoeira como manifestação corporal e artística brasileira. O jogo, a luta, a música e a dança contidos nesta expressão. Desenvolvimento de uma compreensão básica de suas dinâmicas por meio do canto e do jogo.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF212'],
			color: '#46B984',
			obligatory: false
		}
	}
};

export default catalogue;
