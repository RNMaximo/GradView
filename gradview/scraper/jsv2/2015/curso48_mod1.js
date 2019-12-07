const catalogue = {
	totalCredits: 306,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP111', 'AP211', 'AU221', 'AU301', 'MS123', 'AU110', 'HH788']
		},
		'sem-2': {
			id: '2',
			subjects: ['HH804', 'AP112', 'AU212', 'AU223', 'AU501', 'AU401']
		},
		'sem-3': {
			id: '3',
			subjects: ['HH789', 'AP115', 'AU143', 'AU302', 'ME180', 'AU402']
		},
		'sem-4': {
			id: '4',
			subjects: ['AU144', 'AP213', 'AU601', 'HH805', 'AP314', 'AU403']
		},
		'sem-5': {
			id: '5',
			subjects: ['AU145', 'AU303', 'AU612', 'AU416', 'AU811', 'AU404']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'AU613', 'AP741', 'AU146', 'HH806', 'AU405']
		},
		'sem-7': {
			id: '7',
			subjects: ['AU700', 'AP742', 'AU502', 'AU147', 'HH796', 'AU406']
		},
		'sem-8': {
			id: '8',
			subjects: ['AU713', 'AU816', 'AU504', 'AP216', 'AU812', 'AU817', 'AU148']
		},
		'sem-9': {
			id: '9',
			subjects: ['AP217', 'AU614', 'AU225', 'AU815', 'AU814', 'AU149']
		},
		'sem-10': {
			id: '10',
			subjects: ['AU914', 'HH810', 'AU150', 'AP120', 'AU701']
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

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['AM031', 'AP---', 'AR101', 'AU---', 'BE180', 'BT280', 'BT330', 'BT380', 'BT591', 'BT680', 'CV---', 'EC---', 'GE903', 'GF100', 'GF102', 'GF105', 'GF112', 'GF503', 'GF604', 'GF702', 'GF805', 'GN301', 'HH---', 'ML102'],
		},
	},

	subjects: {
		'AP111': {
			code: 'AP111',
			name: 'Teoria e Projeto I: Introdução',
			ementa: 'Introdução ao projeto: materiais e linguagens de projeto (plástica, volumetria, teoria das cores, texturas, escalas, luz e sombras, ritmo, harmonia e composição). Noções gerais da estética aplicada ao espaço da arquitetura. Axiomática arquitetônica. O homem e o ambiente físico. Percepção espacial. A correlação forma e função no projeto. Introdução à metodologia de projeto. Exercício de projeto.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#8546B9',
			obligatory: true
		},
		'AP211': {
			code: 'AP211',
			name: 'Desenho I: Desenho Artístico',
			ementa: 'Desenho artístico. Composição, desenho de observação e de memória. Percepção das formas. Utilização de materiais e técnicas de desenho e de representação gráfica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4EB946',
			obligatory: true
		},
		'AU110': {
			code: 'AU110',
			name: 'Fundamentos da Teoria da Arquitetura',
			ementa: 'Introdução à História da Arquitetura; Processos de projeto e de construção ao longo da história; Primeiros processos construtivos: Egito e Creta; Antiguidade Clássica: arquitetura Grega e Romana; O tratado de Vitruvius; Queda do Império Romano e Império Bizantino; Idade Média: da Alta Idade Média ao Gótica; o Renascimento e os Tratados de Arquitetura; Maneirismo, Barroco e Rococó; O iluminismo e as origens do Neoclássico; Romantismo e Neoclassicismo; Arquitetura e Revolução Industrial; Arquitetura e Arte Moderna; Arquitetura e Arte Contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#85B946',
			obligatory: true
		},
		'AU221': {
			code: 'AU221',
			name: 'Geometria Aplicada à Arquitetura',
			ementa: 'Geometria Espacial: Projeções Ortogonais e Rebatimentos; Conceituação básica da compreensão das figuras no espaço e sua representação através do processo das projeções ortogonais e perspectivas; Perspectivas Paralelas e Representação Gráfica; Sombras; Geometria de Coberturas: concordância e interferência de planos e sua representação; Planificação; Modelagem: Projeto e construção de sólidos: arestas e faces/plano de massa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4676B9',
			obligatory: true
		},
		'AU301': {
			code: 'AU301',
			name: 'Informática Aplicada I: Introdução à Comunicação',
			ementa: 'Conceitos de design gráfico. Utilização de sistemas integrados: editor de texto, planilha eletrônica e editor de apresentações. Conceitos de raster e vector. Utilização de programas de tratamento de imagens, editoração eletrônica e web design.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B546',
			obligatory: true
		},
		'HH788': {
			code: 'HH788',
			name: 'Introdução ao Estudo da Cidade',
			ementa: 'Introdução aos aspectos históricos relativos à vida nas cidades e à formação de um saber histórico sobre o espaço urbano. A questão urbana e habitacional, a esfera pública, o espaço privado, a segregação, a forma e a imagem da cidade e as diferentes percepções históricas do espaço habitado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4655B9',
			obligatory: true
		},
		'MS123': {
			code: 'MS123',
			name: 'Elementos de Cálculo',
			ementa: 'Funções. Limites. Derivada. Integral. Técnicas de integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9046B9',
			obligatory: true
		},
		'AP112': {
			code: 'AP112',
			name: 'Teoria e Projeto II: Processo Criativo',
			ementa: 'Percepção espacial: cor, escala, volume, espaço e ambiente. Composição: sintaxe visual, ritmo e harmonia. Processo de criação: metodologia de projeto e partido. Antropometria, modulação, analogias, tipologias, racionalidade construtiva e funcionalidade.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AP111', '*AP211'],
			color: '#6A8080',
			obligatory: true
		},
		'AU212': {
			code: 'AU212',
			name: 'Desenho II: Desenho Técnico',
			ementa: 'Expressão de idéias através da comunicação visual. Representação do espaço arquitetônico; Introdução à modelagem geométrica digital; Conceituação básica da compreensão das figuras no espaço e sua representação através do processo das projeções ortogonais. Representação gráfica dos elementos construtivos aplicados nos projetos de Arquitetura. Normas Gerais de Desenho Técnico (ABNT).',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AU221'],
			color: '#4676B9',
			obligatory: true
		},
		'AU223': {
			code: 'AU223',
			name: 'Topografia e Informações Geográficas para Arquitetura',
			ementa: 'Introdução: Conceitos fundamentais; unidades de medidas e sistema de coordenadas. Planimetria. Altimetria. Terraplenagem. Noções de astronomia. Geodésia. Cartografia. Sistema de projeção UTM (Universal Transferso de Mercator). Conceitos básicos de Fotogrametria e Sensoriamento Remoto. Posicionamento por Satélite - GPS e Sistemas de Informação Geográfica envolvendo questões ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AU221'],
			color: '#4676B9',
			obligatory: true
		},
		'AU401': {
			code: 'AU401',
			name: 'Estruturas I: Introdução',
			ementa: 'Fundamentos da mecânica Newtoniana. Estática dos corpos rígidos. Noções sobre o projeto estrutural. Morfologia e classificação de elementos estruturais. Vínculos estruturais. Ações e reações. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Centro de gravidade, momento estático e momento de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MS123'],
			color: '#9046B9',
			obligatory: true
		},
		'AU501': {
			code: 'AU501',
			name: 'Física Aplicada à Arquitetura',
			ementa: 'Termodinâmica. Temperatura. Calor, trabalho e a primeira lei da termodinâmica. Propriedades e processos térmicos. A disponibilidade de energia. Propriedades termofísicas dos materiais e componentes construtivos. Movimento ondulatório. Ondas sonoras. Conceitos de acústica. Ondas eletromagnéticas. Radiação solar e radiação térmica. Interação com o meio. Conceitos de iluminação e fotometria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MS123'],
			color: '#9046B9',
			obligatory: true
		},
		'HH804': {
			code: 'HH804',
			name: 'História da Arquitetura e Urbanismo do Clássico ao Barroco',
			ementa: 'Introdução à arquitetura clássica: Grécia e Roma na Antiguidade. A linguagem clássica da arquitetura. Vitrúvio e o Renascimento. O Renascimento italiano e a arquitetura na Europa. A arquitetura e a cidade brasileira no período colonial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B998',
			obligatory: true
		},
		'AP115': {
			code: 'AP115',
			name: 'Modelos e Maquetes',
			ementa: 'Técnicas e materiais na construção de maquetes. Construção de maquetes e modelos iconico-analógicos de obras de significativa importância e de acordo com os modelos teóricos da arquitetura no pensamento moderno. Releitura de projetos existentes com programas específicos variáveis a partir do código estético-funcional de cada tradição arquitetônica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A6B946',
			obligatory: true
		},
		'AU143': {
			code: 'AU143',
			name: 'Teoria e Projeto III: Estratégias de Concepção em Arquitetura',
			ementa: 'Metodologia do processo de concepção e conceitos projetuais: partido, programa, humanização e sustentabilidade. Condicionantes do lugar, uso, tecnologias construtivas e contexto socioambiental na concepção do projeto de arquitetura aplicadas à prática projetual. Análise de projetos em relação ao meio e a paisagem: eixos, preexistências edificadas, comunidades e vegetação. Desenvolvimento de projetos a partir da concepção do habitar no contexto da cidade com ênfase na humanização do ambiente construído e desenho urbano sustentável.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#59B946',
			obligatory: true
		},
		'AU302': {
			code: 'AU302',
			name: 'Informática Aplicada II: Introdução ao CAD',
			ementa: 'Sistemas de CAD. Introdução ao conceito de BIM. Interoperalidade. Modelagem geométrica digital. Parametrização e definição de classes de objetos. Representação técnica 2D a partir do modelo geométrico digital.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU301'],
			color: '#B9B546',
			obligatory: true
		},
		'AU402': {
			code: 'AU402',
			name: 'Estruturas II: Resistência',
			ementa: 'Tensão. Deformação. Relação tensão-deformação. Tração e compressão. Flexão. Cisalhamento. Torção. Deslocamentos em vigas. Instabilidade de barras.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU401'],
			color: '#9046B9',
			obligatory: true
		},
		'HH789': {
			code: 'HH789',
			name: 'Estudos Socioeconômicos para Arquitetura e Urbanismo I',
			ementa: 'Problematização das cidades no início do século XIX. Processos de urbanização e de transformação urbana, industrialização, formação de mercados de consumo e de trabalho. A cidade do capital. Higienismo, sanitarismo e as correlações entre doença e pobreza urbana. Movimentos sociais e intervenções estratégicas. Reforma urbana e cidades planejadas. O pensamento do século XIX e as definições de urbano. As cidades brasileiras e sua problematização social e urbana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5946B9',
			obligatory: true
		},
		'ME180': {
			code: 'ME180',
			name: 'Estatística para Ciências da Terra',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Variáveis aleatórias. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS123'],
			color: '#9046B9',
			obligatory: true
		},
		'AP213': {
			code: 'AP213',
			name: 'Desenho III: Plástica Aplicada',
			ementa: 'Plástica aplicada à Arquitetura. Relação: figura, espaço e forma. Espaço bi e tridimensional. Linguagem visual, comunicação gráfica. Meios de expressão. Exercícios de projeto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AP211'],
			color: '#4EB946',
			obligatory: true
		},
		'AP314': {
			code: 'AP314',
			name: 'Informática Aplicada IV: Modelagem e Animação',
			ementa: 'Utilização de programas computadorizados para apresentações avançadas. Modelagem virtual e animação. Computação gráfica avançada.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9467E',
			obligatory: true
		},
		'AU144': {
			code: 'AU144',
			name: 'Teoria e Projeto IV: Arquitetura de Interesse Social',
			ementa: 'Dinâmicas de produção do espaço na cidade. Relações do espaço construído com os espaços abertos e seus diversos significados. Projeto participativo e inclusão do usuário e comunidades. Introdução à sustentabilidade urbana. Modalidades e soluções de projetos de interesse social. Relação entre os espaços públicos, semi-públicos e privados. Relações de vizinhança. Desenho urbano sustentável. Prática de projeto em situações de precariedade habitacional e urbana. Espaços e equipamentos comunitários.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#64B946',
			obligatory: true
		},
		'AU403': {
			code: 'AU403',
			name: 'Estruturas III: Estática',
			ementa: 'Processo dos esforços. Processo dos deslocamentos. Aplicação a vigas, pórticos e arcos. Aplicações de programas computacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU402'],
			color: '#9046B9',
			obligatory: true
		},
		'AU601': {
			code: 'AU601',
			name: 'Fundamentos do Urbanismo',
			ementa: 'O espaço urbano. Processo de ocupação do espaço urbano. A cidade. Dinâmica do crescimento urbano. Forma, função e estrutura urbana. Uso do solo urbano.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B981',
			obligatory: true
		},
		'HH805': {
			code: 'HH805',
			name: 'História da Arquitetura e Urbanismo Moderno',
			ementa: 'A cultura arquitetônica do século XIX no Brasil e no exterior. Os modelos e as reformas urbanas nas cidades brasileiras. As novas tecnologias e seus materiais. O movimento moderno em arquitetura: o papel dos \"mestres\" (Le Corbusier, W. Gropius, Mies van der Rohe, Frank L. Wright) e dos CIAMs. Os arquitetos modernos brasileiros: os pioneiros, a escola carioca, os imigrantes europeus em São Paulo e as cidades modernas brasileiras. História do urbanismo e do paisagismo modernos no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B146B9',
			obligatory: true
		},
		'AU145': {
			code: 'AU145',
			name: 'Teoria e Projeto V: Conforto Térmico e Projeto Bioclimático',
			ementa: 'Clima e conforto no ambiente construído. Arquitetura bioclimática. O ser humano e o ambiente térmico. Índices de conforto. Propriedades termofísicas dos materiais e componentes construtivos. Radiação solar. Geometria da insolação. Ventilação natural. Cálculo, detalhamento e simulação do desempenho térmico em projeto. Projeto de arquitetura bioclimática. Concepção e avaliação. Desenvolvimento de projetos variados cujo tema central seja o conforto térmico. Edifícios institucionais. Práticas de laboratório.',
			semestre: 1,
			vector: {T:1, P:4, L:1, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#6F46B9',
			obligatory: true
		},
		'AU303': {
			code: 'AU303',
			name: 'Informática Aplicada III: CAD no Processo Criativo',
			ementa: 'O projeto auxiliado por computador - definições e histórico. Conceitos computacionais para a geração de formas arquitetônicas: composições com diferentes tipos de simetria, com formas paramétricas e com aleatoriedade; substituições e sistemas de composição hierárquicos. Novas metodologias do projeto com o uso de recursos computacionais: gramática da forma, projeto baseado em performance, projeto baseado em restrições, projeto baseado em desempenho. Exercício de projeto com ferramenta computacional específica para a geração de formas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#466BB9',
			obligatory: true
		},
		'AU404': {
			code: 'AU404',
			name: 'Estruturas IV: Fundações',
			ementa: 'Classificação dos solos. Distribuição de pressões no solo. Compactação. Taludes e arrimos. Capacidade de carga dos solos. Fundações diretas. Tubulações. Estacas. Escoramentos. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU403'],
			color: '#9046B9',
			obligatory: true
		},
		'AU416': {
			code: 'AU416',
			name: 'Estruturas VII: Sistemas Estruturais',
			ementa: 'Discussão sobre diferentes concepções de sistemas estruturais. Sistema laje-viga-pilar. Sistema em alvenaria estrutural. Sistema estrutural misto: aço-concreto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A3B9',
			obligatory: true
		},
		'AU612': {
			code: 'AU612',
			name: 'Planejamento Urbano II: Planos Urbanos',
			ementa: 'Planejamento territorial. Planos, objetivos, teorias, métodos e instrumentos do planejamento urbano. Demografia urbana. O Plano Diretor Municipal: conceitos, métodos de elaboração, implantação e controle. Planos setoriais. Administração municipal e economia urbana.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU601'],
			color: '#46B981',
			obligatory: true
		},
		'AU811': {
			code: 'AU811',
			name: 'Tecnologia do Ambiente Construído I: Materiais de Construção',
			ementa: 'Introdução ao estudo dos materiais de construção. Aglomerantes minerais. Agregados para argamassas e concretos. Argamassas. Concretos. Elementos de alvenaria. Materiais betuminosos e impermeabilizantes. Madeiras e aço para concreto armado. Tintas, vernizes, vidros e plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU403'],
			color: '#9046B9',
			obligatory: true
		},
		'AP741': {
			code: 'AP741',
			name: 'Arquitetura Paisagística I: Introdução',
			ementa: 'Fundamentos Teóricos da Arquitetura Paisagística. Dimensão histórico cultural do paisagismo: os parques urbanos no desenho das cidades, evolução do conceito de parques e praças. Breve Histórico da arquitetura paisagística no entorno de edificações. Leitura de Projeto: apresentação crítica de exemplos de projetos no entorno de edificações residenciais, comerciais e institucionais, praças, parques e demais áreas livres.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU601'],
			color: '#46B981',
			obligatory: true
		},
		'AU146': {
			code: 'AU146',
			name: 'Teoria e Projeto VI: Iluminação Natural e Artificial na Arquitetura',
			ementa: 'O lugar da iluminação natural e artificial na arquitetura e no urbanismo contemporâneos. Aprender a ver (exercícios de sensibilização). Luz e visão. Conceitos físicos fundamentais. Iluminação Natural: sol e céu como fontes de luz; trajetórias solares, captação da luz e proteção contra a insolação em sistemas de iluminação lateral e zenital. Modelos físicos e computacionais. Processo de Projeto. Exigências legais e normativas. Iluminação Artificial: fontes de luz elétrica, luminárias, equipamentos auxiliares e dispositivos de controle. Modelos gráficos e computacionais. Exigências legais e normativas. Processo de Projeto. Projeto de edifício com ênfase nas soluções de iluminação natural e artificial.',
			semestre: 1,
			vector: {T:2, P:5, L:1, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AA200'],
			color: '#4681B9',
			obligatory: true
		},
		'AU405': {
			code: 'AU405',
			name: 'Estruturas V: Concreto',
			ementa: 'Concepção. Pré-dimensionamento. Cálculo e detalhamento de estruturas de concreto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU404'],
			color: '#9046B9',
			obligatory: true
		},
		'AU613': {
			code: 'AU613',
			name: 'Planejamento Urbano III: Desenho Urbano',
			ementa: 'Organização do espaço físico. Revitalização e recuperação de áreas degradadas. O parcelamento do solo urbano: loteamentos. Infra-estrutura urbana. Equipamentos urbanos. Custos de urbanização. Desenho e estética urbanos. Representação gráfica de um projeto urbano.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B9465C',
			obligatory: true
		},
		'HH806': {
			code: 'HH806',
			name: 'História da Arquitetura e Urbanismo Contemporâneo',
			ementa: 'A cultura arquitetônica e urbanística no período 1945-1980. O último modernismo, a arquitetura das corporações e a reconstrução européia no pós-guerra; o Team X e o final dos CIAMs. Arquitetura moderna brasileira pós-45. O debate antimoderno dos anos 1960 e a pós-modernidade. Desconstrutivismo, a dimensão global e emergência do projeto urbano-revitalização urbana, restauro arquitetônico e requalificação de áreas históricas. Arquitetura pós-45 e contemporânea: sua crítica e seus principais arquitetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B99446',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AP742': {
			code: 'AP742',
			name: 'Arquitetura Paisagística II: Projetos',
			ementa: 'Projetos de entornos de edificações. Projetos em espaços públicos, parques, praças e sistemas viários. Avaliação da potencialidade do projeto. Implantação e manutenção de projetos paisagísticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AP741', '*AU613'],
			color: '#80806F',
			obligatory: true
		},
		'AU147': {
			code: 'AU147',
			name: 'Teoria e Projeto VII: Acústica Arquitetônica',
			ementa: 'Projeto com ênfase em questões acústicas. Conceitos, materiais e técnicas. Conforto acústico do ambiente construído. Normas e critérios de conforto acústico. Cálculo, detalhamento e simulação acústica de salas aplicados ao projeto. Concepção e avaliação de projetos. Zoneamento e planejamento acústico. Edifícios com ênfase em atividades artístico-culturais: teatro, ópera, sala de concertos. Desenvolvimento de projetos variados cujo tema central seja qualidade acústica de salas.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#B97E46',
			obligatory: true
		},
		'AU406': {
			code: 'AU406',
			name: 'Estruturas VI: Metálicas e Madeira',
			ementa: 'Concepção de estruturas de madeira e de aço. Ações. Esforços. Pré-dimensionamento de estruturas de madeira e de aço. Projetos arquitetônicos de estruturas de madeira e de aço.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU405'],
			color: '#9046B9',
			obligatory: true
		},
		'AU502': {
			code: 'AU502',
			name: 'Hidráulica',
			ementa: 'Definições básicas. Propriedades dos fluídos. Equação fundamental da estática dos fluídos. Medidas de pressão. Forças sobre superfícies planas. Cinemática dos fluídos: métodos de análise. Equação da continuidade. Equação da quantidade de movimento. Equação de Bernoulli. Escoamento permanente em condutos sob pressão: perdas de cargas distribuídas. Perdas de carga localizadas. Cálculo Hidráulico de instalações prediais de água fria: equações práticas e Bombas: Noções. Escoamento permanente em condutos livres: conceituação e classificação. O Movimento Permanente Uniforme (MPU) em Canais. Equação de Manning. Dimensionamento Econômico e Observações sobre a Construção de Canais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MS123'],
			color: '#9046B9',
			obligatory: true
		},
		'AU700': {
			code: 'AU700',
			name: 'Eficiência Energética no Projeto e na Construção',
			ementa: 'O consumo de energia no setor de edificações. Bioclimatologia, eficiência no setor residencial. Eficiência no setor comercial e em edifícios de serviços e públicos. Legislação brasileira. O PROCEL. Avaliação de eficiência energética no projeto. Método de cálculo da eficiência, sistemas de iluminação, sistemas de condicionamento de ar, envoltória. Simulação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B96B',
			obligatory: true
		},
		'HH796': {
			code: 'HH796',
			name: 'Estudos Socioeconômicos para Arquitetura e Urbanismo II',
			ementa: 'A formação do pensamento urbanístico no Brasil e sua inserção no debate internacional. As políticas urbanas do século XX e suas implicações socioeconômicas e culturais. Problemas e impasses nos diversos processos nacionais de urbanização. Configurações históricas espaciais: Plano Diretor, revitalizações, cidades satélites e crescimento urbano. Efeitos da desigualdade, da especulação imobiliária e da ocupação desordenada do espaço urbano. Esvaziamento da esfera pública. O fim da cidade? A cidade como experiência social, econômica, cultural e estética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B95146',
			obligatory: true
		},
		'AP216': {
			code: 'AP216',
			name: 'Desenho Industrial I: Introdução à Programação Visual',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Identidades e dessemelhanças entre design e arquitetura. Áreas de atuação em programação visual. Método clássico de desenvolvimento de projetos de design aplicado à programação visual. Ergonomia da informação. Semântica do design gráfico. Ética do design gráfico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94689',
			obligatory: true
		},
		'AU148': {
			code: 'AU148',
			name: 'Teoria e Projeto VIII: Complexidade em Arquitetura',
			ementa: 'Teoria e crítica da arquitetura e do urbanismo. Pensamento complexo aplicado à arquitetura. Metodologia de projeto. Projetos de alta complexidade programática e funcional. Edifícios multifuncionais. Políticas públicas relacionadas à arquitetura e ao urbanismo. Impacto urbano ambiental dos projetos de arquitetura. A metrópole contemporânea.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#6446B9',
			obligatory: true
		},
		'AU504': {
			code: 'AU504',
			name: 'Hidrologia Urbana',
			ementa: 'Ciclo Hidrólogo. Bacia hidrográfica. Precipitações. Escoamento superficial. Infiltração. Evaporação e transpiração. Hidrograma unitário. Vazões de enchentes. Regularização de vazões. Propagação de enchentes em reservatórios e canais. Sistemas de drenagem urbana. Sarjetas, bocas de lobo e galerias. Estruturas de transição.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU502', '*AU612'],
			color: '#6B809D',
			obligatory: true
		},
		'AU713': {
			code: 'AU713',
			name: 'Planejamento da Paisagem: Macro Paisagem',
			ementa: 'Geografia Urbana e Macro Paisagem: A paisagem na dimensão regional, transformações da paisagem pelos processos de urbanização e das atividades agrícolas e industriais. Intervenções paisagísticas elaboradas em escalas regionais. Relação com impactos ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94694',
			obligatory: true
		},
		'AU812': {
			code: 'AU812',
			name: 'Tecnologia do Ambiente Construído II: Técnicas Construtivas',
			ementa: 'Introdução ao estudo de técnicas construtivas. Normalização. Detalhamento. Aplicação dos materiais da construção nas diversas etapas da obra. A construção civil vista como um processo construtivo onde se dá a integração entre técnica e arquitetura.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU811'],
			color: '#9046B9',
			obligatory: true
		},
		'AU816': {
			code: 'AU816',
			name: 'Sistemas Prediais, Hidráulicos e Sanitários',
			ementa: 'Sistemas prediais de água fria, quente, esgoto sanitário e água pluvial:critérios de projeto e normalização. Introdução à conservação de água nos edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:2, HS:6, SL:2, C:4},
			requisitos: ['AU502'],
			color: '#9046B9',
			obligatory: true
		},
		'AU817': {
			code: 'AU817',
			name: 'Sistemas Elétricos',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica, corrente alternada. Aterramento. Sistemas mono e trifásicos. Fator de potência. Materiais elétricos. Proteção e comando de circuitos elétricos. Projeto de instalações elétricas. Instalações de para-raios. TV, Som e telefone.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU501'],
			color: '#9046B9',
			obligatory: true
		},
		'AP217': {
			code: 'AP217',
			name: 'Desenho Industrial II: Introdução ao Projeto de Produto',
			ementa: 'História, teoria e estética do design de produto. Terminologia e conceitos fundamentais. Identidades e dessemelhanças entre design e arquitetura. Áreas de atuação em projeto de produto. Método clássico de desenvolvimento de projetos e design aplicado ao projeto de produto. Ergonomia do produto. Semântica do produto. Ética do design de produto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96746',
			obligatory: true
		},
		'AU149': {
			code: 'AU149',
			name: 'Teoria e Projeto IX: Arquitetura e Verticalidade',
			ementa: 'Verticalidade, normas técnicas, densidade e sustentabilidade. Sistemas estruturais, prediais (instalações elétricas e telefonia, hidráulico-sanitárias, gás, ar condicionado e proteção contra incêndio) e métodos construtivos. Concepção e desenvolvimento de projetos de edifícios verticais com ênfase em edifícios residenciais ou comerciais. Detalhamento construtivo. Integração com projeto estrutural e complementares.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#90B946',
			obligatory: true
		},
		'AU225': {
			code: 'AU225',
			name: 'Estágio Supervisionado I',
			ementa: 'Estágio em Arquitetura e Urbanismo, introdução à prática profissional, relação entre teoria e prática no exercício da Arquitetura e Urbanismo.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA475'],
			color: '#46B976',
			obligatory: true
		},
		'AU614': {
			code: 'AU614',
			name: 'Planejamento Urbano IV: Planejamento Ambiental',
			ementa: 'Histórico e conceitos em planejamento, urbanismo e ambiente. Urbanização e alternativas ambientais. Avaliação ecológica de habitats urbanos. Mapeamento e avaliação da paisagem em áreas urbanas para planejamentos ambientais. Ferramentas do planejamento ambiental (zoneamentos, planos diretores, áreas de proteção ambiental, estudo de bacia hidrográfica e relatório de impacto ambiental).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU613', '*AU713'],
			color: '#B94678',
			obligatory: true
		},
		'AU814': {
			code: 'AU814',
			name: 'Técnicas Retrospectivas',
			ementa: 'Reflexão crítica sobre as práticas projetuais em edifícios pré-existentes; Ações preservacionistas ao longo da história, no Brasil e no Exterior; Teoria e história do restauro, legislação patrimonial, técnicas construtivas, patologias das edificações e sistemas de diagnóstico; Projetos de conservação e restauro de edifícios e sítios de interesse histórico-cultural.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU812'],
			color: '#9046B9',
			obligatory: true
		},
		'AU815': {
			code: 'AU815',
			name: 'Tecnologia do Ambiente Construído VI: Gerenciamento',
			ementa: 'Sistemas de gerenciamento e planejamento de empreendimentos. Fases da construção civil. Estruturas organizacionais para gerenciamento das operações. Controle de custos e de prazos. Análise de idade técnica, econômica e financeira de empreendimentos. A inflação e seus efeitos no planejamento. Orçamentação com uso de softwares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA450'],
			color: '#B94667',
			obligatory: true
		},
		'AP120': {
			code: 'AP120',
			name: 'Teoria e Projeto X: Interiores',
			ementa: 'Concepção de ambientes internos. Modelos teóricos sobre as correlações dos espaços interno e externo. Impacto sobre cores aplicadas ao espaço interno/externo. Projetos de equipamentos e objetos. Detalhes arquitetônicos. Ergonometria aplicada. Programação visual. Projetos variados.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#46B98C',
			obligatory: true
		},
		'AU150': {
			code: 'AU150',
			name: 'Teoria e Projeto X: Integração e Colaboração no Projeto',
			ementa: 'Processo de projeto com instrumentos e ambientes colaborativos. Building Information Modeling. Metodologias e estratégias organizacionais para projetos integrados. Coordenação de projetos. Estudo de caso de projetos de alto grau de controle de atividades e de orçamentos envolvendo equipes multidisciplinares. Desenvolvimento de projetos de arquitetura de forma colaborativa utilizando recursos da tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:4, L:1, O:1, D:1, HS:9, SL:6, C:8},
			requisitos: ['AA200'],
			color: '#9B46B9',
			obligatory: true
		},
		'AU701': {
			code: 'AU701',
			name: 'Arquitetura Sustentável: Projeto e Construção',
			ementa: 'Desenvolvimento sustentável. Agenda 21 para a Construção sustentável. Projeto e arquitetura sustentável. Construção sustentável. Tecnologias para a sustentabilidade. Análise de ciclo de vida. Indicadores de sustentabilidade. Metodologias para avaliação ambiental e certificação verde de produtos e edifícios. Avaliação da sustentabilidade de edifícios. Apresentação e discussão de casos de referência. Aplicações em estudo de caso e exercícios de projeto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#46B9B9',
			obligatory: true
		},
		'AU914': {
			code: 'AU914',
			name: 'Práticas do Projeto Urbano: Desenvolvimento Urbano',
			ementa: 'Reabilitação urbana e conservação integrada, com ênfase no patrimônio histórico construído. Teorias e métodos de avaliação integrada de recuperação, manutenção e gestão do patrimônio arquitetônico, ambiental e urbano. Aperfeiçoamento das práticas projetuais para requalificação e desenvolvimento sustentável da cidade contemporânea. Políticas públicas. Estudos e projetos para as áreas centrais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B9AE',
			obligatory: true
		},
		'HH810': {
			code: 'HH810',
			name: 'Metodologia e Técnicas de Pesquisa em Arquitetura e Urbanismo',
			ementa: 'Métodos de trabalho em pesquisa científica. Definição e desenvolvimento do objeto de estudo, crítica bibliográfica e desenvolvimento. Subsídios para elaboração do trabalho final de graduação (TFG) em Arquitetura e Urbanismo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA470'],
			color: '#4E46B9',
			obligatory: true
		},
		'AU001': {
			code: 'AU001',
			name: 'Projeto de Graduação I',
			ementa: 'Projeto arquitetônico e de desenho urbano complexo com abordagem interdisciplinar. Sequência completa das etapas de projeto profissional: estudos preliminares, análise de programa funcional, definição de partido, anteprojeto, maquetes de estudo, plano de massa para implantação na malha urbana.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:6, D:0, HS:10, SL:4, C:10},
			requisitos: ['AA200'],
			color: '#4660B9',
			obligatory: true
		},
		'AU023': {
			code: 'AU023',
			name: 'Metodologia de Projeto XI: Sistemas Arquitetônicos',
			ementa: 'Processo de projeto e métodos de apoio: conceitos e teorias da arquitetura contemporânea; impacto urbano ambiental do projeto de arquitetura; legislação, ética e prática profissional.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#468CB9',
			obligatory: true
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AU020': {
			code: 'AU020',
			name: 'Projeto de Graduação II',
			ementa: 'Projeto arquitetônico e de desenho urbano complexo com abordagem interdisciplinar. Desenvolvimento do Projeto de Graduação I. Projeto executivo, detalhamento de acabamento, maquetes de apresentação, memorial.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:10, D:0, HS:14, SL:4, C:14},
			requisitos: ['AA200'],
			color: '#B99F46',
			obligatory: true
		},
		'AM031': {
			code: 'AM031',
			name: 'Trabalhos em Alfabetização Ambiental',
			ementa: 'Esta disciplina pretende desenvolver trabalhos sob a Plataforma Lixo e Cidadania e do conceito de bacia Ambiental com alunos de graduação da UNICAMP.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#464AB9',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B94A',
			obligatory: false
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Compreensão da História e dos desdobramentos sócio-filosóficos das ideias pedagógicas ao longo do tempo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B9A3',
			obligatory: false
		},
		'AU---': {
			code: 'AU---',
			name: 'Qualquer Disciplina com codigo AU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B960',
			obligatory: false
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Conceitos básicos de sistemas ecológicos. Enfoque teórico-prático de situações reais envolvendo observação, métodos e interpretação de dados ecológicos. Excursões obrigatórias, elaboração de projetos, relatórios científicos, apresentações orais e em forma de painel.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98946',
			obligatory: false
		},
		'BT280': {
			code: 'BT280',
			name: 'Botânica I',
			ementa: 'Ciclo de vida, estratégias reprodutivas e morfologia básica das angiospermas. Noções anatômicas de órgãos vegetativos e reprodutivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946AA',
			obligatory: false
		},
		'BT330': {
			code: 'BT330',
			name: 'Botânica Básica',
			ementa: 'Aspectos gerais de morfologia de Dicotiledôneas e Monocotiledôneas, raiz, caule, folhas, flores, frutos e sementes. Aspectos gerais da fisiologia de plantas superiores, enfocando relações energéticas, relações hídricas e minerais, relações hormonais e a fisiologia da germinação. Aspectos gerais de taxonomia vegetal, com ênfase nas espécies cultivadas. Ciclo de vida das culturas de maior importância econômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9469F',
			obligatory: false
		},
		'BT380': {
			code: 'BT380',
			name: 'Botânica II',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Elaboração de relatórios sobre atividade de campo. Elaboração e apresentação de seminários em grupo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95C46',
			obligatory: false
		},
		'BT591': {
			code: 'BT591',
			name: 'Tópicos em Morfologia e Taxonomia Vegetal',
			ementa: 'Análise de temas atuais em morfologia e taxonomia vegetal a partir da literatura especializada recente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B94673',
			obligatory: false
		},
		'BT680': {
			code: 'BT680',
			name: 'Botânica V',
			ementa: 'Noções de biossistemática vegetal. Uso de métodos experimentais em taxonomia. Citotaxonomia. Quimiotaxonomia. Biologia da polinização e da reprodução.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46AEB9',
			obligatory: false
		},
		'CV---': {
			code: 'CV---',
			name: 'Qualquer Disciplina com codigo CV---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CV---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#A646B9',
			obligatory: false
		},
		'EC---': {
			code: 'EC---',
			name: 'Qualquer Disciplina com codigo EC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'GE903': {
			code: 'GE903',
			name: 'Geologia Urbana',
			ementa: 'Gestão, supervisão, orientação técnica sobre geologia ambiental. Coleta de dados, planejamento e projeto geológicos do curso e ocupação do solo urbano. Estudo e recuperação ambiental de solos e águas subterrâneas, contaminadas, implantação de aterros de resíduos sólidos e avaliação de impactos ambientais, risco geológico (erosão, inundações, instabilidade de encostas). Cartas geotécnica, planejamento do uso racional de recursos minerais hídricos. Visita técnica a casos de tratamento de resíduos, levantamento de contaminação e risco geológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7A46B9',
			obligatory: false
		},
		'GF100': {
			code: 'GF100',
			name: 'Geomorfologia e Meio Ambiente',
			ementa: 'Conteúdo, semiologia e aplicabilidade das legendas geomorfológicas. Cartografia geomorfológica e planejamento: estudos de caso. Monitoramento ambiental e a questão dos geoindicadores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6FB946',
			obligatory: false
		},
		'GF102': {
			code: 'GF102',
			name: 'Movimentos Sociais',
			ementa: 'Debate sobre as teorias dos Movimentos Sociais. Formas de organização dos Movimentos Urbanos e Rurais. Autonomia, organizações locais, nacionais e internacionais. Movimentos libertários: feministas, ecologistas e estudantis. Organizações não governamentais.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9BB946',
			obligatory: false
		},
		'GF105': {
			code: 'GF105',
			name: 'Metrópoles e Metropolização',
			ementa: 'O surgimento das metrópoles e o processo de metropolização contemporâneo. O fenômeno da urbanização/conurbação e as estratégias de planejamento. Qualidade de vida, sociedade e meio ambiente nas grandes metrópoles. As cidades mundiais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B1B946',
			obligatory: false
		},
		'GF112': {
			code: 'GF112',
			name: 'Organização do Espaço Regional',
			ementa: 'Teorias e conceitos do desenvolvimento regional. Região, regionalização e regionalismos: planejamento e organização do espaço. Transformações econômicas e novas estratégias espaciais. Sociedade e natureza na organização socioespacial. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9AA46',
			obligatory: false
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#4698B9',
			obligatory: false
		},
		'GF604': {
			code: 'GF604',
			name: 'Geografia Urbana',
			ementa: 'Definição e evolução do fenômeno urbano. As cidades: os sítios, o crescimento horizontal e vertical, a estrutura urbana, as áreas funcionais, o sistema viário e a circulação. A interdisciplinaridade dos estudos urbanos. Centralidade, hierarquia e redes urbanas. Conjuntos urbanos complexos: áreas metropolitanas e conurbação. Valor e renda da terra. Meio ambiente e qualidade de vida no meio urbano. Paisagens, usos do solo e culturas urbanas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7AB946',
			obligatory: false
		},
		'GF702': {
			code: 'GF702',
			name: 'Meio Ambiente Urbano',
			ementa: 'Produção e consumo da e na Cidade. A metropolização e as redes de relações. Problemáticas urbanas: uso do solo, segregação especial e problemas ambientais da urbanização.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GF604'],
			color: '#7AB946',
			obligatory: false
		},
		'GF805': {
			code: 'GF805',
			name: 'Planejamento Territorial',
			ementa: 'O território como unidade condicionante do planejamento econômico. O planejamento como instrumento de ação política. O papel do estado (Federal, Estadual, Municipal) e das empresas no planejamento do território. A regionalização como instrumento de ação do planejamento. A organização do território impondo-se às ações de planejamento econômico no atual período técnico-científico e informacional. As noções de progresso, desenvolvimento e competitividade como norteadoras do processo de planejamento capitalista. O desenvolvimento geograficamente desigual e os paradoxos do planejamento territorial.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94651',
			obligatory: false
		},
		'GN301': {
			code: 'GN301',
			name: 'História das Teorias Econômicas',
			ementa: 'Elementos de economia. Análise do surgimento e da evolução da Economia Política como ramo do conhecimento científico. As principais escolas do pensamento econômico e suas respectivas contribuições ao entendimento do mundo em que vivemos. Disciplinas propedêuticas para o estudo da Economia dos Recursos Naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B955',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B97346',
			obligatory: false
		},
		'ML102': {
			code: 'ML102',
			name: 'Linguagem Fotográfica I',
			ementa: 'Instrumentalização de aluno, permitindo um conhecimento básico das técnicas fotográficas e da relação destas com a construção daquilo que se convencionou denominar de \"Linguagem Fotográfica\". Debate sobre os impactos da \"visualidade\" fotográfica na sociedade moderna, na arte e nos meios de comunicação de massa.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B5',
			obligatory: false
		}
	}
};

export default catalogue;
