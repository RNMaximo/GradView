const catalogue = {
	totalCredits: 301,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP111', 'AP211', 'AU110', 'AU221', 'AU991', 'HH788', 'MS123']
		},
		'sem-2': {
			id: '2',
			subjects: ['AP112', 'AP120', 'AU212', 'AU223', 'AU992', 'HH804']
		},
		'sem-3': {
			id: '3',
			subjects: ['AP115', 'AU302', 'AU501', 'AU601', 'AU811', 'AU993', 'HH789', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP314', 'AU145', 'AU605', 'AU812', 'AU994', 'HH805', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['AP213', 'AU146', 'AU401', 'AU609', 'AU817', 'AU995']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP741', 'AU147', 'AU303', 'AU402', 'AU502', 'AU613', 'AU996']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP742', 'AU144', 'AU405', 'AU997', 'HH806']
		},
		'sem-8': {
			id: '8',
			subjects: ['AP216', 'AU148', 'AU406', 'AU504', 'AU610', 'AU612', 'AU998']
		},
		'sem-9': {
			id: '9',
			subjects: ['AP217', 'AU225', 'AU404', 'AU614', 'AU814', 'AU999', 'HH796', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['AU149', 'AU713', 'AU815', 'AU816', 'AU917', 'AU990']
		},
		'sem-11': {
			id: '11',
			subjects: ['AU001', 'AU023', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['AU020']
		}
	},

	subjects: {
		'AP111': {
			code: 'AP111',
			name: 'Teoria e Projeto I: Introdução',
			ementa: 'Introdução ao projeto: materiais e linguagens de projeto (plástica, volumetria, teoria das cores, texturas, escalas, luz e sombras, ritmo, harmonia e composição). Noções gerais da estética aplicada ao espaço da arquitetura. Axiomática arquitetônica. O homem e o ambiente físico. Percepção espacial. A correlação forma e função no projeto. Introdução à metodologia de projeto. Exercício de projeto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A6D940'
		},
		'AP211': {
			code: 'AP211',
			name: 'Desenho I: Desenho Artístico',
			ementa: 'Desenho artístico. Composição, desenho de observação e de memória. Percepção das formas. Utilização de materiais e técnicas de desenho e de representação gráfica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9CF'
		},
		'AU110': {
			code: 'AU110',
			name: 'Fundamentos da Teoria da Arquitetura',
			ementa: 'Introdução à História da Arquitetura; Processos de projeto e de construção ao longo da história; Primeiros processos construtivos: Egito e Creta; Antiguidade Clássica: arquitetura Grega e Romana; O tratado de Vitruvius; Queda do Império Romano e Império Bizantino; Idade Média: da Alta Idade Média ao Gótica; o Renascimento e os Tratados de Arquitetura; Maneirismo, Barroco e Rococó; O iluminismo e as origens do Neoclássico; Romantismo e Neoclassicismo; Arquitetura e Revolução Industrial; Arquitetura e Arte Moderna; Arquitetura e Arte Contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:2, HS:4, SL:2, C:2},
			requisitos: '',
			color: '#CF40D9'
		},
		'AU221': {
			code: 'AU221',
			name: 'Geometria Aplicada à Arquitetura',
			ementa: 'Geometria Espacial: Projeções Ortogonais e Rebatimentos; Conceituação básica da compreensão das figuras no espaço e sua representação através do processo das projeções ortogonais e perspectivas; Perspectivas Paralelas e Representação Gráfica; Sombras; Geometria de Coberturas: concordância e interferência de planos e sua representação; Planificação; Modelagem: Projeto e construção de sólidos: arestas e faces/plano de massa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94054'
		},
		'AU991': {
			code: 'AU991',
			name: 'Práticas de Campo Diurnas 1 (PCD-1)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#40D9BA'
		},
		'HH788': {
			code: 'HH788',
			name: 'Introdução ao Estudo da Cidade',
			ementa: 'Introdução aos aspectos históricos relativos à vida nas cidades e à formação de um saber histórico sobre o espaço urbano. A questão urbana e habitacional, a esfera pública, o espaço privado, a segregação, a forma e a imagem da cidade e as diferentes percepções históricas do espaço habitado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5440D9'
		},
		'MS123': {
			code: 'MS123',
			name: 'Elementos de Cálculo',
			ementa: 'Funções. Limites. Derivada. Integral. Técnicas de integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96940'
		},
		'AP112': {
			code: 'AP112',
			name: 'Teoria e Projeto II: Processo Criativo',
			ementa: 'Percepção espacial: cor, escala, volume, espaço e ambiente. Composição: sintaxe visual, ritmo e harmonia. Processo de criação: metodologia de projeto e partido. Antropometria, modulação, analogias, tipologias, racionalidade construtiva e funcionalidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AP111', '*AP211'],
			color: ''
		},
		'AP120': {
			code: 'AP120',
			name: 'Teoria e Projeto X: Interiores',
			ementa: 'Concepção de ambientes internos. Modelos teóricos sobre as correlações dos espaços interno e externo. Impacto sobre cores aplicadas ao espaço interno/externo. Projetos de equipamentos e objetos. Detalhes arquitetônicos. Ergonometria aplicada. Programação visual. Projetos variados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#6940D9'
		},
		'AU212': {
			code: 'AU212',
			name: 'Desenho II: Desenho Técnico',
			ementa: 'Expressão de idéias através da comunicação visual. Representação do espaço arquitetônico; Introdução à modelagem geométrica digital; Conceituação básica da compreensão das figuras no espaço e sua representação através do processo das projeções ortogonais. Representação gráfica dos elementos construtivos aplicados nos projetos de Arquitetura. Normas Gerais de Desenho Técnico (ABNT).',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AU221'],
			color: ''
		},
		'AU223': {
			code: 'AU223',
			name: 'Topografia e Informações Geográficas para Arquitetura',
			ementa: 'Introdução: Conceitos fundamentais; unidades de medidas e sistema de coordenadas. Planimetria. Altimetria. Terraplenagem. Noções de astronomia. Geodésia. Cartografia. Sistema de projeção UTM (Universal Transferso de Mercator). Conceitos básicos de Fotogrametria e Sensoriamento Remoto. Posicionamento por Satélite - GPS e Sistemas de Informação Geográfica envolvendo questões ambientais.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AU221'],
			color: ''
		},
		'AU992': {
			code: 'AU992',
			name: 'Práticas de Campo Diurnas 2 (PCD-2)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D9CF40'
		},
		'HH804': {
			code: 'HH804',
			name: 'História da Arquitetura e Urbanismo do Clássico ao Barroco',
			ementa: 'Introdução à arquitetura clássica: Grécia e Roma na Antiguidade. A linguagem clássica da arquitetura. Vitrúvio e o Renascimento. O Renascimento italiano e a arquitetura na Europa. A arquitetura e a cidade brasileira no período colonial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7DD940'
		},
		'AP115': {
			code: 'AP115',
			name: 'Modelos e Maquetes',
			ementa: 'Técnicas e materiais na construção de maquetes. Construção de maquetes e modelos iconico-analógicos de obras de significativa importância e de acordo com os modelos teóricos da arquitetura no pensamento moderno. Releitura de projetos existentes com programas específicos variáveis a partir do código estético-funcional de cada tradição arquitetônica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4069D9'
		},
		'AU302': {
			code: 'AU302',
			name: 'Informática Aplicada II: Introdução ao CAD',
			ementa: 'Sistemas de CAD. Introdução ao conceito de BIM. Interoperalidade. Modelagem geométrica digital. Parametrização e definição de classes de objetos. Representação técnica 2D a partir do modelo geométrico digital.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU221'],
			color: ''
		},
		'AU501': {
			code: 'AU501',
			name: 'Física Aplicada à Arquitetura',
			ementa: 'Termodinâmica. Temperatura. Calor, trabalho e a primeira lei da termodinâmica. Propriedades e processos térmicos. A disponibilidade de energia. Propriedades termofísicas dos materiais e componentes construtivos. Movimento ondulatório. Ondas sonoras. Conceitos de acústica. Ondas eletromagnéticas. Radiação solar e radiação térmica. Interação com o meio. Conceitos de iluminação e fotometria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MS123'],
			color: ''
		},
		'AU601': {
			code: 'AU601',
			name: 'Fundamentos do Urbanismo',
			ementa: 'O espaço urbano. A cidade. Processo de ocupação do espaço urbano. Dinâmica do crescimento urbano. Forma, função e estrutura urbana. Uso e ocupação do solo urbano. Exercícios de intervenção urbana.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940BA'
		},
		'AU811': {
			code: 'AU811',
			name: 'Tecnologia do Ambiente Construído I: Materiais de Construção',
			ementa: 'Introdução ao estudo dos materiais de construção. Aglomerantes minerais. Agregados para argamassas e concretos. Argamassas. Concretos. Elementos de alvenaria. Materiais betuminosos e impermeabilizantes. Madeiras e aço para concreto armado. Tintas, vernizes, vidros e plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95440'
		},
		'AU993': {
			code: 'AU993',
			name: 'Práticas de Campo Diurnas 3 (PCD-3)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#40D954'
		},
		'HH789': {
			code: 'HH789',
			name: 'Estudos Socioeconômicos para Arquitetura e Urbanismo I',
			ementa: 'Problematização das cidades no início do século XIX. Processos de urbanização e de transformação urbana, industrialização, formação de mercados de consumo e de trabalho. A cidade do capital. Higienismo, sanitarismo e as correlações entre doença e pobreza urbana. Movimentos sociais e intervenções estratégicas. Reforma urbana e cidades planejadas. O pensamento do século XIX e as definições de urbano. As cidades brasileiras e sua problematização social e urbana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D969'
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'AP314': {
			code: 'AP314',
			name: 'Informática Aplicada IV: Modelagem e Animação',
			ementa: 'Utilização de programas computadorizados para apresentações avançadas. Modelagem virtual e animação. Computação gráfica avançada.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#CFD940'
		},
		'AU145': {
			code: 'AU145',
			name: 'Teoria e Projeto V: Conforto Térmico e Projeto Bioclimático',
			ementa: 'Clima e conforto no ambiente construído. Arquitetura bioclimática. O ser humano e o ambiente térmico. Índices de conforto. Propriedades termofísicas dos materiais e componentes construtivos. Radiação solar. Geometria da insolação. Ventilação natural. Cálculo, detalhamento e simulação do desempenho térmico em projeto. Projeto de arquitetura bioclimática. Concepção e avaliação. Desenvolvimento de projetos variados cujo tema central seja o conforto térmico. Edifícios institucionais. Práticas de laboratório.',
			semestre: 1,
			vector: {T:1, P:4, L:1, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#40D97D'
		},
		'AU605': {
			code: 'AU605',
			name: 'Conforto Urbano',
			ementa: 'Condicionantes da forma urbana para o conforto térmico e acústico dos usuários nos espaços públicos. A relação entre a forma urbana e os aspectos relativos a iluminação, radiação solar, ventilação e ruídos no espaço urbano. Exercícios de intervenção urbana.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40CFD9'
		},
		'AU812': {
			code: 'AU812',
			name: 'Tecnologia do Ambiente Construído II: Técnicas Construtivas',
			ementa: 'Introdução ao estudo de técnicas construtivas. Normalização. Detalhamento. Aplicação dos materiais da construção nas diversas etapas da obra. A construção civil vista como um processo construtivo onde se dá a integração entre técnica e arquitetura.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU811'],
			color: ''
		},
		'AU994': {
			code: 'AU994',
			name: 'Práticas de Campo Diurnas 4 (PCD-4)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#40BAD9'
		},
		'HH805': {
			code: 'HH805',
			name: 'História da Arquitetura e Urbanismo Moderno',
			ementa: 'A cultura arquitetônica do século XIX no Brasil e no exterior. Os modelos e as reformas urbanas nas cidades brasileiras. As novas tecnologias e seus materiais. O movimento moderno em arquitetura: o papel dos \"mestres\" (Le Corbusier, W. Gropius, Mies van der Rohe, Frank L. Wright) e dos CIAMs. Os arquitetos modernos brasileiros: os pioneiros, a escola carioca, os imigrantes europeus em São Paulo e as cidades modernas brasileiras. História do urbanismo e do paisagismo modernos no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D940'
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'AP213': {
			code: 'AP213',
			name: 'Desenho III: Plástica Aplicada',
			ementa: 'Plástica aplicada à Arquitetura. Relação: figura, espaço e forma. Espaço bi e tridimensional. Linguagem visual, comunicação gráfica. Meios de expressão. Exercícios de projeto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AP211'],
			color: ''
		},
		'AU146': {
			code: 'AU146',
			name: 'Teoria e Projeto VI: Iluminação Natural e Artificial na Arquitetura',
			ementa: 'O lugar da iluminação natural e artificial na arquitetura e no urbanismo contemporâneos. Aprender a ver (exercícios de sensibilização). Luz e visão. Conceitos físicos fundamentais. Iluminação Natural: sol e céu como fontes de luz; trajetórias solares, captação da luz e proteção contra a insolação em sistemas de iluminação lateral e zenital. Modelos físicos e computacionais. Processo de Projeto. Exigências legais e normativas. Iluminação Artificial: fontes de luz elétrica, luminárias, equipamentos auxiliares e dispositivos de controle. Modelos gráficos e computacionais. Exigências legais e normativas. Processo de Projeto. Projeto de edifício com ênfase nas soluções de iluminação natural e artificial.',
			semestre: 1,
			vector: {T:2, P:5, L:1, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AA200'],
			color: '#D94069'
		},
		'AU401': {
			code: 'AU401',
			name: 'Estruturas I: Introdução',
			ementa: 'Fundamentos da mecânica Newtoniana. Estática dos corpos rígidos. Noções sobre o projeto estrutural. Morfologia e classificação de elementos estruturais. Vínculos estruturais. Ações e reações. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Centro de gravidade, momento estático e momento de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MS123'],
			color: ''
		},
		'AU609': {
			code: 'AU609',
			name: 'Projeto de Novos Bairros Urbanos',
			ementa: 'Aspectos técnicos e jurídicos do parcelamento do solo no Brasil. O loteamento como modalidade do desenho urbano. Concepção e execução de projetos de loteamentos urbanos. Estudos de terraplenagem, geometria de vias e lotes e noções de infraestrutura urbana.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40A6D9'
		},
		'AU817': {
			code: 'AU817',
			name: 'Sistemas Elétricos',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica, corrente alternada. Aterramento. Sistemas mono e trifásicos. Fator de potência. Materiais elétricos. Proteção e comando de circuitos elétricos. Projeto de instalações elétricas. Instalações de para-raios. TV, Som e telefone.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU501'],
			color: ''
		},
		'AU995': {
			code: 'AU995',
			name: 'Práticas de Campo Diurnas 5 (PCD-5)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#69D940'
		},
		'AP741': {
			code: 'AP741',
			name: 'Arquitetura Paisagística I: Introdução',
			ementa: 'Fundamentos Teóricos da Arquitetura Paisagística. Dimensão histórico cultural do paisagismo: os parques urbanos no desenho das cidades, evolução do conceito de parques e praças. Breve Histórico da arquitetura paisagística no entorno de edificações. Leitura de Projeto: apresentação crítica de exemplos de projetos no entorno de edificações residenciais, comerciais e institucionais, praças, parques e demais áreas livres.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU601'],
			color: ''
		},
		'AU147': {
			code: 'AU147',
			name: 'Teoria e Projeto VII: Acústica Arquitetônica',
			ementa: 'Projeto com ênfase em questões acústicas. Conceitos, materiais e técnicas. Conforto acústico do ambiente construído. Normas e critérios de conforto acústico. Cálculo, detalhamento e simulação acústica de salas aplicados ao projeto. Concepção e avaliação de projetos. Zoneamento e planejamento acústico. Edifícios com ênfase em atividades artístico-culturais: teatro, ópera, sala de concertos. Desenvolvimento de projetos variados cujo tema central seja qualidade acústica de salas.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#D94040'
		},
		'AU303': {
			code: 'AU303',
			name: 'Informática Aplicada III: CAD no Processo Criativo',
			ementa: 'O projeto auxiliado por computador - definições e histórico. Conceitos computacionais para a geração de formas arquitetônicas: composições com diferentes tipos de simetria, com formas paramétricas e com aleatoriedade; substituições e sistemas de composição hierárquicos. Novas metodologias do projeto com o uso de recursos computacionais: gramática da forma, projeto baseado em performance, projeto baseado em restrições, projeto baseado em desempenho. Exercício de projeto com ferramenta computacional específica para a geração de formas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4040D9'
		},
		'AU402': {
			code: 'AU402',
			name: 'Estruturas II: Resistência',
			ementa: 'Tensão. Deformação. Relação tensão-deformação. Tração e compressão. Flexão. Cisalhamento. Torção. Deslocamentos em vigas. Instabilidade de barras.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU401'],
			color: ''
		},
		'AU502': {
			code: 'AU502',
			name: 'Hidráulica',
			ementa: 'Definições básicas. Algumas propriedades físicas dos fluidos. Equação fundamental da estática dos fluidos. Medidas de pressão. Fluidos em movimento: equação da continuidade e equação da energia. Escoamento permanente em encanamentos: perdas de cargas distribuídas e localizadas, noções sobre bombas. Escoamento permanente em canais abertos e fechados: equação de Manning.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MS123'],
			color: ''
		},
		'AU613': {
			code: 'AU613',
			name: 'Planejamento Urbano III: Desenho Urbano',
			ementa: 'Organização do espaço físico. Revitalização e recuperação de áreas degradadas. O parcelamento do solo urbano: loteamentos. Infra-estrutura urbana. Equipamentos urbanos. Custos de urbanização. Desenho e estética urbanos. Representação gráfica de um projeto urbano.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#4054D9'
		},
		'AU996': {
			code: 'AU996',
			name: 'Práticas de Campo Diurnas 6 (PCD-6)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D940A6'
		},
		'AP742': {
			code: 'AP742',
			name: 'Arquitetura Paisagística II: Projetos',
			ementa: 'Projetos de entornos de edificações. Projetos em espaços públicos, parques, praças e sistemas viários. Avaliação da potencialidade do projeto. Implantação e manutenção de projetos paisagísticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AP741', '*AU601'],
			color: ''
		},
		'AU144': {
			code: 'AU144',
			name: 'Teoria e Projeto IV: Arquitetura de Interesse Social',
			ementa: 'Dinâmicas de produção do espaço na cidade. Relações do espaço construído com os espaços abertos e seus diversos significados. Projeto participativo e inclusão do usuário e comunidades. Introdução à sustentabilidade urbana. Modalidades e soluções de projetos de interesse social. Relação entre os espaços públicos, semi-públicos e privados. Relações de vizinhança. Desenho urbano sustentável. Prática de projeto em situações de precariedade habitacional e urbana. Espaços e equipamentos comunitários.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:4, D:0, HS:12, SL:8, C:12},
			requisitos: ['AA200'],
			color: '#BAD940'
		},
		'AU405': {
			code: 'AU405',
			name: 'Estruturas V: Concreto',
			ementa: 'Concepção. Pré-dimensionamento. Cálculo e detalhamento de estruturas de concreto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU402'],
			color: ''
		},
		'AU997': {
			code: 'AU997',
			name: 'Práticas de Campo Diurnas 7 (PCD-7)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#4091D9'
		},
		'HH806': {
			code: 'HH806',
			name: 'História da Arquitetura e Urbanismo Contemporâneo',
			ementa: 'A cultura arquitetônica e urbanística no período 1945-1980. O último modernismo, a arquitetura das corporações e a reconstrução européia no pós-guerra; o Team X e o final dos CIAMs. Arquitetura moderna brasileira pós-45. O debate antimoderno dos anos 1960 e a pós-modernidade. Desconstrutivismo, a dimensão global e emergência do projeto urbano-revitalização urbana, restauro arquitetônico e requalificação de áreas históricas. Arquitetura pós-45 e contemporânea: sua crítica e seus principais arquitetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#BA40D9'
		},
		'AP216': {
			code: 'AP216',
			name: 'Desenho Industrial I: Introdução à Programação Visual',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Identidades e dessemelhanças entre design e arquitetura. Áreas de atuação em programação visual. Método clássico de desenvolvimento de projetos de design aplicado à programação visual. Ergonomia da informação. Semântica do design gráfico. Ética do design gráfico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9A6'
		},
		'AU148': {
			code: 'AU148',
			name: 'Teoria e Projeto VIII: Complexidade em Arquitetura',
			ementa: 'Teoria e crítica da arquitetura e do urbanismo. Pensamento complexo aplicado à arquitetura. Metodologia de projeto. Projetos de alta complexidade programática e funcional. Edifícios multifuncionais. Políticas públicas relacionadas à arquitetura e ao urbanismo. Impacto urbano ambiental dos projetos de arquitetura. A metrópole contemporânea.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#D9BA40'
		},
		'AU406': {
			code: 'AU406',
			name: 'Estruturas VI: Metálicas e Madeira',
			ementa: 'Concepção de estruturas de madeira e de aço. Ações. Esforços. Pré-dimensionamento de estruturas de madeira e de aço. Projetos arquitetônicos de estruturas de madeira e de aço.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU405'],
			color: ''
		},
		'AU504': {
			code: 'AU504',
			name: 'Hidrologia Urbana',
			ementa: 'Ciclo Hidrólogo. Bacia hidrográfica. Precipitações. Escoamento superficial. Infiltração. Evaporação e transpiração. Hidrograma unitário. Vazões de enchentes. Regularização de vazões. Propagação de enchentes em reservatórios e canais. Sistemas de drenagem urbana. Sarjetas, bocas de lobo e galerias. Estruturas de transição.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU502'],
			color: ''
		},
		'AU610': {
			code: 'AU610',
			name: 'Fundamentos de Estatística Aplicada ao Planejamento Urbano',
			ementa: '<span style=\"color:rgb(0, 0, 0)',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D940CF'
		},
		'AU612': {
			code: 'AU612',
			name: 'Planejamento Urbano II: Planos Urbanos',
			ementa: 'Planejamento territorial. Planos, objetivos, teorias, métodos e instrumentos do planejamento urbano. Demografia urbana. O Plano Diretor Municipal: conceitos, métodos de elaboração, implantação e controle. Planos setoriais. Administração municipal e economia urbana.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:2, D:0, HS:5, SL:3, C:5},
			requisitos: ['*AU601'],
			color: ''
		},
		'AU998': {
			code: 'AU998',
			name: 'Práticas de Campo Diurnas 8 (PCD-8)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D97D40'
		},
		'AP217': {
			code: 'AP217',
			name: 'Desenho Industrial II: Introdução ao Projeto de Produto',
			ementa: 'História, teoria e estética do design de produto. Terminologia e conceitos fundamentais. Identidades e dessemelhanças entre design e arquitetura. Áreas de atuação em projeto de produto. Método clássico de desenvolvimento de projetos e design aplicado ao projeto de produto. Ergonomia do produto. Semântica do produto. Ética do design de produto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A640D9'
		},
		'AU225': {
			code: 'AU225',
			name: 'Estágio Supervisionado I',
			ementa: 'Estágio em Arquitetura e Urbanismo, introdução à prática profissional, relação entre teoria e prática no exercício da Arquitetura e Urbanismo.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#54D940'
		},
		'AU404': {
			code: 'AU404',
			name: 'Estruturas IV: Fundações',
			ementa: 'Classificação dos solos. Distribuição de pressões no solo. Compactação. Taludes e arrimos. Capacidade de carga dos solos. Fundações diretas. Tubulações. Estacas. Escoramentos. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU402'],
			color: ''
		},
		'AU614': {
			code: 'AU614',
			name: 'Planejamento Urbano IV: Planejamento Ambiental',
			ementa: 'Histórico e conceitos em planejamento, urbanismo e ambiente. Urbanização e alternativas ambientais. Avaliação ecológica de habitats urbanos. Mapeamento e avaliação da paisagem em áreas urbanas para planejamentos ambientais. Ferramentas do planejamento ambiental (zoneamentos, planos diretores, áreas de proteção ambiental, estudo de bacia hidrográfica e relatório de impacto ambiental).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU613'],
			color: ''
		},
		'AU814': {
			code: 'AU814',
			name: 'Técnicas Retrospectivas',
			ementa: 'Reflexão crítica sobre as práticas projetuais em edifícios pré-existentes; Ações preservacionistas ao longo da história, no Brasil e no Exterior; Teoria e história do restauro, legislação patrimonial, técnicas construtivas, patologias das edificações e sistemas de diagnóstico; Projetos de conservação e restauro de edifícios e sítios de interesse histórico-cultural.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU812'],
			color: ''
		},
		'AU999': {
			code: 'AU999',
			name: 'Práticas de Campo Diurnas 9 (PCD-9)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D9A640'
		},
		'HH796': {
			code: 'HH796',
			name: 'Estudos Socioeconômicos para Arquitetura e Urbanismo II',
			ementa: 'A formação do pensamento urbanístico no Brasil e sua inserção no debate internacional. As políticas urbanas do século XX e suas implicações socioeconômicas e culturais. Problemas e impasses nos diversos processos nacionais de urbanização. Configurações históricas espaciais: Plano Diretor, revitalizações, cidades satélites e crescimento urbano. Efeitos da desigualdade, da especulação imobiliária e da ocupação desordenada do espaço urbano. Esvaziamento da esfera pública. O fim da cidade? A cidade como experiência social, econômica, cultural e estética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9407D'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'AU149': {
			code: 'AU149',
			name: 'Teoria e Projeto IX: Arquitetura e Verticalidade',
			ementa: 'Verticalidade, normas técnicas, densidade e sustentabilidade. Sistemas estruturais, prediais (instalações elétricas e telefonia, hidráulico-sanitárias, gás, ar condicionado e proteção contra incêndio) e métodos construtivos. Concepção e desenvolvimento de projetos de edifícios verticais com ênfase em edifícios residenciais ou comerciais. Detalhamento construtivo. Integração com projeto estrutural e complementares.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#407DD9'
		},
		'AU713': {
			code: 'AU713',
			name: 'Planejamento da Paisagem: Macro Paisagem',
			ementa: 'Questões de desenvolvimento regional. Conceitos e teorias do espaço regional - rede urbana e regionalização. Impactos dos problemas regionais no desenvolvimento urbano. A paisagem na dimensão regional, transformações da paisagem pelos processos de urbanização. Regiões metropolitanas e demais organizações regionais – aspectos técnicos e administrativos. Planos s instrumentos do planejamento regional.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#9140D9'
		},
		'AU815': {
			code: 'AU815',
			name: 'Tecnologia do Ambiente Construído VI: Gerenciamento',
			ementa: 'Sistemas de gerenciamento e planejamento de empreendimentos. Fases da construção civil. Estruturas organizacionais para gerenciamento das operações. Controle de custos e de prazos. Análise de idade técnica, econômica e financeira de empreendimentos. A inflação e seus efeitos no planejamento. Orçamentação com uso de softwares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA450'],
			color: '#D94091'
		},
		'AU816': {
			code: 'AU816',
			name: 'Sistemas Prediais, Hidráulicos e Sanitários',
			ementa: 'Sistemas prediais de água fria, quente, esgoto sanitário e água pluvial:critérios de projeto e normalização. Introdução à conservação de água nos edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:2, HS:6, SL:2, C:4},
			requisitos: ['AU502'],
			color: ''
		},
		'AU917': {
			code: 'AU917',
			name: 'Técnicas Retrospectivas II: Sítios Urbanos',
			ementa: 'Reabilitação urbana e conservação integrada, com ênfase no patrimônio histórico construído. Teorias e métodos de avaliação integrada de recuperação, manutenção e gestão do patrimônio arquitetônico, ambiental e urbano. Aperfeiçoamento das práticas projetuais para requalificação e desenvolvimento sustentável da cidade contemporânea. Políticas públicas. Estudos e projetos para as áreas centrais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AU814'],
			color: ''
		},
		'AU990': {
			code: 'AU990',
			name: 'Práticas de Campo Diurnas 10 (PCD-10)',
			ementa: 'Atividades integradas de campo de arquitetura e urbanismo. Visitas a sítios históricos, áreas habitacionais, centros urbanos, canteiros de obras, edifícios, monumentos, espaços públicos. Práticas associadas a todas as disciplinas do semestre, agendadas aos sábados.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#40D991'
		},
		'AU001': {
			code: 'AU001',
			name: 'Projeto de Graduação I',
			ementa: 'Projeto arquitetônico e de desenho urbano complexo com abordagem interdisciplinar. Sequência completa das etapas de projeto profissional: estudos preliminares, análise de programa funcional, definição de partido, anteprojeto, maquetes de estudo, plano de massa para implantação na malha urbana.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:6, D:0, HS:10, SL:4, C:10},
			requisitos: ['AA200'],
			color: '#91D940'
		},
		'AU023': {
			code: 'AU023',
			name: 'Metodologia de Projeto XI: Sistemas Arquitetônicos',
			ementa: 'Processo de projeto e métodos de apoio: conceitos e teorias da arquitetura contemporânea; impacto urbano ambiental do projeto de arquitetura; legislação, ética e prática profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99140'
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'AU020': {
			code: 'AU020',
			name: 'Projeto de Graduação II',
			ementa: 'Projeto arquitetônico e de desenho urbano complexo com abordagem interdisciplinar. Desenvolvimento do Projeto de Graduação I. Projeto executivo, detalhamento de acabamento, maquetes de apresentação, memorial.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:10, D:0, HS:14, SL:4, C:14},
			requisitos: ['AA200'],
			color: '#7D40D9'
		}
	}
};

export default catalogue;
