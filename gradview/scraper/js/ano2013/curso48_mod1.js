const catalogue = {
	totalCredits: 304,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP111', 'AP211', 'AU110', 'AU221', 'AU301', 'HH788', 'MS123']
		},
		'sem-2': {
			id: '2',
			subjects: ['AP112', 'AU212', 'AU223', 'AU401', 'AU501', 'HH804']
		},
		'sem-3': {
			id: '3',
			subjects: ['AP115', 'AU013', 'AU133', 'AU302', 'AU402', 'HH789', 'ME180']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP213', 'AP314', 'AU014', 'AU134', 'AU403', 'AU601', 'HH805']
		},
		'sem-5': {
			id: '5',
			subjects: ['AU015', 'AU135', 'AU303', 'AU404', 'AU416', 'AU612', 'AU811']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP741', 'AU021', 'AU136', 'AU405', 'AU613', 'HH806', 'ELET2']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP742', 'AU017', 'AU137', 'AU406', 'AU502', 'AU700', 'HH796']
		},
		'sem-8': {
			id: '8',
			subjects: ['AP216', 'AU018', 'AU138', 'AU504', 'AU713', 'AU812', 'AU816', 'AU817']
		},
		'sem-9': {
			id: '9',
			subjects: ['AP217', 'AU019', 'AU139', 'AU225', 'AU614', 'AU814', 'AU815']
		},
		'sem-10': {
			id: '10',
			subjects: ['AP120', 'AU022', 'AU140', 'AU701', 'AU914', 'HH810']
		},
		'sem-11': {
			id: '11',
			subjects: ['AU001', 'AU023', 'ELET6']
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
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'AP211': {
			code: 'AP211',
			name: 'Desenho I: Desenho Artístico',
			ementa: 'Desenho artístico. Composição, desenho de observação e de memória. Percepção das formas. Utilização de materiais e técnicas de desenho e de representação gráfica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU110': {
			code: 'AU110',
			name: 'Fundamentos da Teoria da Arquitetura',
			ementa: 'Introdução à História da Arquitetura; Processos de projeto e de construção ao longo da história; Primeiros processos construtivos: Egito e Creta; Antiguidade Clássica: arquitetura Grega e Romana; O tratado de Vitruvius; Queda do Império Romano e Império Bizantino; Idade Média: da Alta Idade Média ao Gótica; o Renascimento e os Tratados de Arquitetura; Maneirismo, Barroco e Rococó; O iluminismo e as origens do Neoclássico; Romantismo e Neoclassicismo; Arquitetura e Revolução Industrial; Arquitetura e Arte Moderna; Arquitetura e Arte Contemporânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AU221': {
			code: 'AU221',
			name: 'Geometria Aplicada à Arquitetura',
			ementa: 'Geometria Espacial: Projeções Ortogonais e Rebatimentos; Conceituação básica da compreensão das figuras no espaço e sua representação através do processo das projeções ortogonais e perspectivas; Perspectivas Paralelas e Representação Gráfica; Sombras; Geometria de Coberturas: concordância e interferência de planos e sua representação; Planificação; Modelagem: Projeto e construção de sólidos: arestas e faces/plano de massa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU301': {
			code: 'AU301',
			name: 'Informática Aplicada I: Introdução à Comunicação',
			ementa: 'Conceitos de design gráfico. Utilização de sistemas integrados: editor de texto, planilha eletrônica e editor de apresentações. Conceitos de raster e vector. Utilização de programas de tratamento de imagens, editoração eletrônica e web design.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'HH788': {
			code: 'HH788',
			name: 'Introdução ao Estudo da Cidade',
			ementa: 'Introdução aos aspectos históricos relativos à vida nas cidades e à formação de um saber histórico sobre o espaço urbano. A questão urbana e habitacional, a esfera pública, o espaço privado, a segregação, a forma e a imagem da cidade e as diferentes percepções históricas do espaço habitado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200']
		},
		'MS123': {
			code: 'MS123',
			name: 'Elementos de Cálculo',
			ementa: 'Funções. Limites. Derivada. Integral. Técnicas de integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AP112': {
			code: 'AP112',
			name: 'Teoria e Projeto II: Processo Criativo',
			ementa: 'Teoria da Arquitetura. O processo criativo: métodos heurísticos de estímulos à criação no projeto. Lógica arquitetônica: elementos, formas, volumes e composição. Metodologia de projeto e partido: modulação, analogias, linguagens formais, tipologias, relações antropológicas, modelos teóricos da arquitetura no pensamento moderno: idealismo, ativismo, espontâneo, autoconsciente, intuitivo e lógico. Racionalidade construtiva. Flexibilidade. Processo de produção e industrialização. Exercícios de projeto.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AP111', '*AP211']
		},
		'AU212': {
			code: 'AU212',
			name: 'Desenho II: Desenho Técnico',
			ementa: 'Expressão de idéias através da comunicação visual. Representação do espaço arquitetônico; Introdução à modelagem geométrica digital; Conceituação básica da compreensão das figuras no espaço e sua representação através do processo das projeções ortogonais. Representação gráfica dos elementos construtivos aplicados nos projetos de Arquitetura. Normas Gerais de Desenho Técnico (ABNT).',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AU221']
		},
		'AU223': {
			code: 'AU223',
			name: 'Topografia e Informações Geográficas para Arquitetura',
			ementa: 'Introdução: Conceitos fundamentais; unidades de medidas e sistema de coordenadas. Planimetria. Altimetria. Terraplenagem. Noções de astronomia. Geodésia. Cartografia. Sistema de projeção UTM (Universal Transferso de Mercator). Conceitos básicos de Fotogrametria e Sensoriamento Remoto. Posicionamento por Satélite - GPS e Sistemas de Informação Geográfica envolvendo questões ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AU221']
		},
		'AU401': {
			code: 'AU401',
			name: 'Estruturas I: Introdução',
			ementa: 'Fundamentos da mecânica Newtoniana. Estática dos corpos rígidos. Noções sobre o projeto estrutural. Morfologia e classificação de elementos estruturais. Vínculos estruturais. Ações e reações. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Centro de gravidade, momento estático e momento de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA151/*MS123']
		},
		'AU501': {
			code: 'AU501',
			name: 'Física Aplicada à Arquitetura',
			ementa: 'Termodinâmica. Temperatura. Calor, trabalho e a primeira lei da termodinâmica. Propriedades e processos térmicos. A disponibilidade de energia. Propriedades termofísicas dos materiais e componentes construtivos. Movimento ondulatório. Ondas sonoras. Conceitos de acústica. Ondas eletromagnéticas. Radiação solar e radiação térmica. Interação com o meio. Conceitos de iluminação e fotometria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MA151/*MS123']
		},
		'HH804': {
			code: 'HH804',
			name: 'História da Arquitetura e Urbanismo do Clássico ao Barroco',
			ementa: 'Introdução à arquitetura clássica: Grécia e Roma na Antiguidade. A linguagem clássica da arquitetura. Vitrúvio e o Renascimento. O Renascimento italiano e a arquitetura na Europa. A arquitetura e a cidade brasileira no período colonial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AP115': {
			code: 'AP115',
			name: 'Modelos e Maquetes',
			ementa: 'Técnicas e materiais na construção de maquetes. Construção de maquetes e modelos iconico-analógicos de obras de significativa importância e de acordo com os modelos teóricos da arquitetura no pensamento moderno. Releitura de projetos existentes com programas específicos variáveis a partir do código estético-funcional de cada tradição arquitetônica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU013': {
			code: 'AU013',
			name: 'Metodologia de Projeto III: Humanização',
			ementa: 'Processo de projeto e métodos de apoio: análise do local, programa arquitetônico, humanização e construtibilidade. Análise de projetos, considerando os fatores: sociais, culturais, espaciais, comportamentais, ergonômicos, econômicos, de uso e conforto; equacionados sob as exigências locais, ambientais, técnicas e legais, abrangendo questões relativas à estética e aos princípios básicos do desenho urbano sustentável.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AP112']
		},
		'AU133': {
			code: 'AU133',
			name: 'Projeto III: Fatores de Projeto de Arquitetura',
			ementa: 'Fatores na concepção do projeto de arquitetura aplicados a exercícios projetuais: sociais, culturais, espaciais, urbanos, comportamentais, ambientais, legais, econômicos, de uso e conforto. Processo de projeto: entendimento do lugar, programa de necessidades e construbilidade. Concepção do habitat no contexto da cidade com ênfase nos conceitos humanizadores do ambiente cosntruído. Escalas do projeto de arquitetura. Exercícios de projeto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AP112']
		},
		'AU302': {
			code: 'AU302',
			name: 'Informática Aplicada II: Introdução ao CAD',
			ementa: 'Sistemas de CAD. Introdução ao conceito de BIM. Interoperalidade. Modelagem geométrica digital. Parametrização e definição de classes de objetos. Representação técnica 2D a partir do modelo geométrico digital.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU301/*AU221']
		},
		'AU402': {
			code: 'AU402',
			name: 'Estruturas II: Resistência',
			ementa: 'Tensão. Deformação. Relação tensão-deformação. Tração e compressão. Flexão. Cisalhamento. Torção. Deslocamentos em vigas. Instabilidade de barras.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MA151/*AU401']
		},
		'HH789': {
			code: 'HH789',
			name: 'Estudos Socioeconômicos para Arquitetura e Urbanismo I',
			ementa: 'Problematização das cidades no início do século XIX. Processos de urbanização e de transformação urbana, industrialização, formação de mercados de consumo e de trabalho. A cidade do capital. Higienismo, sanitarismo e as correlações entre doença e pobreza urbana. Movimentos sociais e intervenções estratégicas. Reforma urbana e cidades planejadas. O pensamento do século XIX e as definições de urbano. As cidades brasileiras e sua problematização social e urbana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200']
		},
		'ME180': {
			code: 'ME180',
			name: 'Estatística para Ciências da Terra',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Variáveis aleatórias. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS123']
		},
		'AP213': {
			code: 'AP213',
			name: 'Desenho III: Plástica Aplicada',
			ementa: 'Plástica aplicada à Arquitetura. Relação: figura, espaço e forma. Espaço bi e tridimensional. Linguagem visual, comunicação gráfica. Meios de expressão. Exercícios de projeto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AP211']
		},
		'AP314': {
			code: 'AP314',
			name: 'Informática Aplicada IV: Modelagem e Animação',
			ementa: 'Utilização de programas computadorizados para apresentações avançadas. Modelagem virtual e animação. Computação gráfica avançada.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU014': {
			code: 'AU014',
			name: 'Metodologia de Projeto IV: Arquitetura de Interesse Social',
			ementa: 'Processo de projeto e métodos de apoio: participação e inclusão do usuário e comunidades; variáveis físico ambientais, socioeconômicas, técnicas e de uso; relações de vizinhança. Introdução a sustentabilidade no ambiente construído.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU113']
		},
		'AU134': {
			code: 'AU134',
			name: 'Projeto IV: Arquitetura de Interesse Social',
			ementa: 'Modalidades e soluções arquitetônicas e urbanísticas de projetos de interesse social, especialmente da habitação. Análise e diagnóstico dos assentamentos humanos sociais. Variáveis ambientais, socioeconômicas e técnicas. Relações de vizinhança. Participação e inclusão da comunidade no processo de projeto. Desenho urbano sustentável. Espaços e equipamentos de uso coletivo. Exercícios de projeto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU133']
		},
		'AU403': {
			code: 'AU403',
			name: 'Estruturas III: Estática',
			ementa: 'Processo dos esforços. Processo dos deslocamentos. Aplicação a vigas, pórticos e arcos. Aplicações de programas computacionais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MA151/*AU402']
		},
		'AU601': {
			code: 'AU601',
			name: 'Fundamentos do Urbanismo',
			ementa: 'O espaço urbano. Processo de ocupação do espaço urbano. A cidade. Dinâmica do crescimento urbano. Forma, função e estrutura urbana. Uso do solo urbano.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'HH805': {
			code: 'HH805',
			name: 'História da Arquitetura e Urbanismo Moderno',
			ementa: 'A cultura arquitetônica do século XIX no Brasil e no exterior. Os modelos e as reformas urbanas nas cidades brasileiras. As novas tecnologias e seus materiais. O movimento moderno em arquitetura: o papel dos "mestres" (Le Corbusier, W. Gropius, Mies van der Rohe, Frank L. Wright) e dos CIAMs. Os arquitetos modernos brasileiros: os pioneiros, a escola carioca, os imigrantes europeus em São Paulo e as cidades modernas brasileiras. História do urbanismo e do paisagismo modernos no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200']
		},
		'AU015': {
			code: 'AU015',
			name: 'Metodologia de Projeto V: Desempenho Térmico',
			ementa: 'Clima e ambiente construído. Conforto térmico e sustentabilidade na arquitetura. Índices de conforto. Conforto térmico no ambiente construído: conceitos, materiais e técnicas. Geometria da insolação. Ventilação natural. Cálculo, detalhamento e simulação do conforto térmico em projeto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU501', '*AU114']
		},
		'AU135': {
			code: 'AU135',
			name: 'Projeto V: Arquitetura Bioclimática',
			ementa: 'Projeto de arquitetura bioclimática. Concepção e avaliação. Projetos variados cujo tema central seja o conforto térmico. Edifícios institucionais com ênfase na arquitetura escolar.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AU501', '*AU134']
		},
		'AU303': {
			code: 'AU303',
			name: 'Informática Aplicada III: CAD no Processo Criativo',
			ementa: 'O projeto auxiliado por computador - definições e histórico. Conceitos computacionais para a geração de formas arquitetônicas: composições com diferentes tipos de simetria, com formas paramétricas e com aleatoriedade; substituições e sistemas de composição hierárquicos. Novas metodologias do projeto com o uso de recursos computacionais: gramática da forma, projeto baseado em performance, projeto baseado em restrições, projeto baseado em desempenho. Exercício de projeto com ferramenta computacional específica para a geração de formas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU302']
		},
		'AU404': {
			code: 'AU404',
			name: 'Estruturas IV: Fundações',
			ementa: 'Classificação dos solos. Distribuição de pressões no solo. Compactação. Taludes e arrimos. Capacidade de carga dos solos. Fundações diretas. Tubulações. Estacas. Escoramentos. Escolha do tipo de fundação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU403']
		},
		'AU416': {
			code: 'AU416',
			name: 'Estruturas VII: Sistemas Estruturais',
			ementa: 'Discussão sobre diferentes concepções de sistemas estruturais. Sistema laje-viga-pilar. Sistema em alvenaria estrutural. Sistema estrutural misto: aço-concreto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU612': {
			code: 'AU612',
			name: 'Planejamento Urbano II: Planos Urbanos',
			ementa: 'Planejamento territorial. Planos, objetivos, teorias, métodos e instrumentos do planejamento urbano. Demografia urbana. O Plano Diretor Municipal: conceitos, métodos de elaboração, implantação e controle. Planos setoriais. Administração municipal e economia urbana.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU601']
		},
		'AU811': {
			code: 'AU811',
			name: 'Tecnologia do Ambiente Construído I: Materiais de Construção',
			ementa: 'Introdução ao estudo dos materiais de construção. Aglomerantes minerais. Agregados para argamassas e concretos. Argamassas. Concretos. Elementos de alvenaria. Materiais betuminosos e impermeabilizantes. Madeiras e aço para concreto armado. Tintas, vernizes, vidros e plásticos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU403']
		},
		'AP741': {
			code: 'AP741',
			name: 'Arquitetura Paisagística I: Introdução',
			ementa: 'Introdução aos campos do paisagismo. Morfologia e escala da paisagem. Flora, clima e solos. Adequação de espécies ao solo, clima e paisagem. Reconhecimento e avaliação de paisagens. Paisagem e conforto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU601']
		},
		'AU021': {
			code: 'AU021',
			name: 'Metodologia de Projeto VI: Iluminação Natural e Artificial na Arquitetura',
			ementa: 'Processo de projeto e métodos de apoio: luz e visão; conceitos físicos fundamentais; normas brasileiras de iluminação natural e artificial. Modelos físicos e computacionais para estudos da iluminação natural e artificial. Luz elétrica: fontes, luminárias e controles. Conceituação do projeto Luminotécnico. Cálculo e simulação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU113', '*AU115']
		},
		'AU136': {
			code: 'AU136',
			name: 'Projeto VI: Iluminação Natural e Artificial na Arquitetura',
			ementa: 'Concepção e desenvolvimento de projeto com ênfase na iluminação natural e artificial. Aprendendo a ver: exercícios de sensibilização. A iluminação natural na prática do projeto de arquitetura.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU135', '*AU501/*AU133', '*AU135']
		},
		'AU405': {
			code: 'AU405',
			name: 'Estruturas V: Concreto',
			ementa: 'Concepção. Pré-dimensionamento. Cálculo e detalhamento de estruturas de concreto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU404']
		},
		'AU613': {
			code: 'AU613',
			name: 'Planejamento Urbano III: Desenho Urbano',
			ementa: 'Organização do espaço físico. Revitalização e recuperação de áreas degradadas. O parcelamento do solo urbano: loteamentos. Infra-estrutura urbana. Equipamentos urbanos. Custos de urbanização. Desenho e estética urbanos. Representação gráfica de um projeto urbano.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU612']
		},
		'HH806': {
			code: 'HH806',
			name: 'História da Arquitetura e Urbanismo Contemporâneo',
			ementa: 'A cultura arquitetônica e urbanística no período 1945-1980. O último modernismo, a arquitetura das corporações e a reconstrução européia no pós-guerra; o Team X e o final dos CIAMs. Arquitetura moderna brasileira pós-45. O debate antimoderno dos anos 1960 e a pós-modernidade. Desconstrutivismo, a dimensão global e emergência do projeto urbano-revitalização urbana, restauro arquitetônico e requalificação de áreas históricas. Arquitetura pós-45 e contemporânea: sua crítica e seus principais arquitetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'AP742': {
			code: 'AP742',
			name: 'Arquitetura Paisagística II: Projetos',
			ementa: 'Projetos de encontros de edificações. Projetos em espaços públicos, parques, praças e sistemas viários. Avaliação da potencialidade do projeto. Implantação e manutenção de projetos paisagísticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AP741', '*AU613']
		},
		'AU017': {
			code: 'AU017',
			name: 'Metodologia de Projeto VII: Acústica na Arquitetura',
			ementa: 'Acústica arquitetônica: conceitos, materiais e técnicas. Conforto acústico dos ambientes construídos. Normas de conforto acústico. Cálculo, detalhamento e simulação do conforto acústico em projeto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU501']
		},
		'AU137': {
			code: 'AU137',
			name: 'Projeto VII: Acústica na Arquitetura',
			ementa: 'Projeto com ênfase na acústica arquitetônica. Concepção e avaliação. Desenvolvimento de projetos variados cujo tema central seja o conforto acústico. Edifícios com ênfase em atividades culturais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU501']
		},
		'AU406': {
			code: 'AU406',
			name: 'Estruturas VI: Metálicas e Madeira',
			ementa: 'Concepção de estruturas de madeira e de aço. Ações. Esforços. Pré-dimensionamento de estruturas de madeira e de aço. Projetos arquitetônicos de estruturas de madeira e de aço.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU405']
		},
		'AU502': {
			code: 'AU502',
			name: 'Hidráulica',
			ementa: 'Definições básicas. Propriedades dos fluídos. Equação fundamental da estática dos fluídos. Medidas de pressão. Forças sobre superfícies planas. Cinemática dos fluídos: métodos de análise. Equação da continuidade. Equação da quantidade de movimento. Equação de Bernoulli. Escoamento permanente em condutos sob pressão: perdas de cargas distribuídas. Perdas de carga localizadas. Cálculo Hidráulico de instalações prediais de água fria: equações práticas e Bombas: Noções. Escoamento permanente em condutos livres: conceituação e classificação. O Movimento Permanente Uniforme (MPU) em Canais. Equação de Manning. Dimensionamento Econômico e Observações sobre a Construção de Canais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*MA151/*MS123']
		},
		'AU700': {
			code: 'AU700',
			name: 'Eficiência Energética no Projeto e na Construção',
			ementa: 'O consumo de energia no setor de edificações. Bioclimatologia, eficiência no setor residencial. Eficiência no setor comercial e em edifícios de serviços e públicos. Legislação brasileira. O PROCEL. Avaliação de eficiência energética no projeto. Método de cálculo da eficiência, sistemas de iluminação, sistemas de condicionamento de ar, envoltória. Simulação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'HH796': {
			code: 'HH796',
			name: 'Estudos Socioeconômicos para Arquitetura e Urbanismo II',
			ementa: 'A formação do pensamento urbanístico no Brasil e sua inserção no debate internacional. As políticas urbanas do século XX e suas implicações socioeconômicas e culturais. Problemas e impasses nos diversos processos nacionais de urbanização. Configurações históricas espaciais: Plano Diretor, revitalizações, cidades satélites e crescimento urbano. Efeitos da desigualdade, da especulação imobiliária e da ocupação desordenada do espaço urbano. Esvaziamento da esfera pública. O fim da cidade? A cidade como experiência social, econômica, cultural e estética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200']
		},
		'AP216': {
			code: 'AP216',
			name: 'Desenho Industrial I: Introdução à Programação Visual',
			ementa: 'História, teoria e estética do design gráfico. Terminologia e conceitos fundamentais. Identidades e dessemelhanças entre design e arquitetura. Áreas de atuação em programação visual. Método clássico de desenvolvimento de projetos de design aplicado à programação visual. Ergonomia da informação. Semântica do design gráfico. Ética do design gráfico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU018': {
			code: 'AU018',
			name: 'Metodologia do Projeto VIII: Complexidade',
			ementa: 'Teoria e crítica da arquitetura e do projeto urbano contemporâneo. Pensamento complexo aplicado à arquitetura. Processo de projeto e métodos de apoio: sistema axiomático e análise multicriterial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU115', '*AU117']
		},
		'AU138': {
			code: 'AU138',
			name: 'Projeto VIII: Complexidade',
			ementa: 'Projeto de alta complexidade funcional. Edifícios Multifuncionais. Edifícios públicos. Impacto urbano-ambiental dos projetos de arquitetura. Desenho urbano. Metodologia de projeto. Arquitetura contemporânea nacional e internacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AU135', 'AU137']
		},
		'AU504': {
			code: 'AU504',
			name: 'Hidrologia Urbana',
			ementa: 'Ciclo Hidrólogo. Bacia hidrográfica. Precipitações. Escoamento superficial. Infiltração. Evaporação e transpiração. Hidrograma unitário. Vazões de enchentes. Regularização de vazões. Propagação de enchentes em reservatórios e canais. Sistemas de drenagem urbana. Sarjetas, bocas de lobo e galerias. Estruturas de transição.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU502', '*AU612']
		},
		'AU713': {
			code: 'AU713',
			name: 'Planejamento da Paisagem: Macro Paisagem',
			ementa: 'Geografia Urbana e Macro Paisagem: A paisagem na dimensão regional, transformações da paisagem pelos processos de urbanização e das atividades agrícolas e industriais. Intervenções paisagísticas elaboradas em escalas regionais. Relação com impactos ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AP742']
		},
		'AU812': {
			code: 'AU812',
			name: 'Tecnologia do Ambiente Construído II: Técnicas Construtivas',
			ementa: 'Introdução ao estudo de técnicas construtivas. Normalização. Detalhamento. Aplicação dos materiais da construção nas diversas etapas da obra. A construção civil vista como um processo construtivo onde se dá a integração entre técnica e arquitetura.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU811']
		},
		'AU816': {
			code: 'AU816',
			name: 'Sistemas Prediais, Hidráulicos e Sanitários',
			ementa: 'Sistemas prediais de água fria, quente, esgoto sanitário e água pluvial:critérios de projeto e normalização. Introdução à conservação de água nos edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:2, HS:6, SL:2, C:4},
			requisitos: ['AU502']
		},
		'AU817': {
			code: 'AU817',
			name: 'Sistemas Elétricos',
			ementa: 'Noções de geração, transmissão e distribuição de energia elétrica, corrente alternada. Aterramento. Sistemas mono e trifásicos. Fator de potência. Materiais elétricos. Proteção e comando de circuitos elétricos. Projeto de instalações elétricas. Instalações de para-raios. TV, Som e telefone.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AU501']
		},
		'AP217': {
			code: 'AP217',
			name: 'Desenho Industrial II: Introdução ao Projeto de Produto',
			ementa: 'História, teoria e estética do design de produto. Terminologia e conceitos fundamentais. Identidades e dessemelhanças entre design e arquitetura. Áreas de atuação em projeto de produto. Método clássico de desenvolvimento de projetos e design aplicado ao projeto de produto. Ergonomia do produto. Semântica do produto. Ética do design de produto.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AU019': {
			code: 'AU019',
			name: 'Metodologia de Projeto IX: Verticalidade',
			ementa: 'Processo de projeto e métodos de apoio: verticalidade, normas técnicas, densidade e sustentabilidade. Sistemas estruturais, prediais (instalações elétricas e telefonia, hidráulico-sanitárias, gás, ar condicionado e proteção contra incêndio) e métodos construtivos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*AU118']
		},
		'AU139': {
			code: 'AU139',
			name: 'Projeto IX: Verticalidade',
			ementa: 'Processo de projeto e métodos de apoio: verticalidade, normas técnicas, densidade e sustentabilidade. Sistemas estruturais, prediais (instalações elétricas e telefonia, hidráulico-sanitárias, gás, ar condicionado e proteção contra incêndio) e métodos construtivos.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU138', '*AU816', '*AU817']
		},
		'AU225': {
			code: 'AU225',
			name: 'Estágio Supervisionado I',
			ementa: 'Estágio em Arquitetura e Urbanismo, introdução à prática profissional, relação entre teoria e prática no exercício da Arquitetura e Urbanismo.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA475']
		},
		'AU614': {
			code: 'AU614',
			name: 'Planejamento Urbano IV: Planejamento Ambiental',
			ementa: 'Histórico e conceitos em planejamento, urbanismo e ambiente. Urbanização e alternativas ambientais. Avaliação ecológica de habitats urbanos. Mapeamento e avaliação da paisagem em áreas urbanas para planejamentos ambientais. Ferramentas do planejamento ambiental (zoneamentos, planos diretores, áreas de proteção ambiental, estudo de bacia hidrográfica e relatório de impacto ambiental).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU613', '*AU713']
		},
		'AU814': {
			code: 'AU814',
			name: 'Técnicas Retrospectivas',
			ementa: 'Reflexão crítica sobre as práticas projetuais em edifícios pré-existentes; Ações preservacionistas ao longo da história, no Brasil e no Exterior; Teoria e história do restauro, legislação patrimonial, técnicas construtivas, patologias das edificações e sistemas de diagnóstico; Projetos de conservação e restauro de edifícios e sítios de interesse histórico-cultural.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*AU812']
		},
		'AU815': {
			code: 'AU815',
			name: 'Tecnologia do Ambiente Construído VI: Gerenciamento',
			ementa: 'Sistemas de gerenciamento e planejamento de empreendimentos. Fases da construção civil. Estruturas organizacionais para gerenciamento das operações. Controle de custos e de prazos. Análise de idade técnica, econômica e financeira de empreendimentos. A inflação e seus efeitos no planejamento. Orçamentação com uso de softwares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA450']
		},
		'AP120': {
			code: 'AP120',
			name: 'Teoria e Projeto X: Interiores',
			ementa: 'Concepção de ambientes internos. Modelos teóricos sobre as correlações dos espaços interno e externo. Impacto sobre cores aplicadas ao espaço interno/externo. Projetos de equipamentos e objetos. Detalhes arquitetônicos. Ergonometria aplicada. Programação visual. Projetos variados.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AP216']
		},
		'AU022': {
			code: 'AU022',
			name: 'Teoria de Projeto X: Integração Colaboração',
			ementa: 'Processo de projeto com instrumentos e ambientes colaborativos. Metodologias e estratégias organizacionais para projetos integrados. Coordenação de projetos. Estudo de caso de projetos de alto grau de controle de atividades e de orçamentos envolvendo equipes multidisciplinares.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'AU140': {
			code: 'AU140',
			name: 'Projeto X: Projeto Integrado e Colaborativo',
			ementa: 'Desenvolvimento de projetos de arquitetura de forma colaborativa, utilizando recursos da tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*AU139', '*AU406', '*AU815']
		},
		'AU701': {
			code: 'AU701',
			name: 'Arquitetura Sustentável: Projeto e Construção',
			ementa: 'Desenvolvimento sustentável. Agenda 21 para a Construção sustentável. Projeto e arquitetura sustentável. Construção sustentável. Tecnologias para a sustentabilidade. Análise de ciclo de vida. Indicadores de sustentabilidade. Metodologias para avaliação ambiental e certificação verde de produtos e edifícios. Avaliação da sustentabilidade de edifícios. Apresentação e discussão de casos de referência. Aplicações em estudo de caso e exercícios de projeto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AU015', 'AU136', 'AU021', 'AU135', 'AU137', 'AU017']
		},
		'AU914': {
			code: 'AU914',
			name: 'Práticas do Projeto Urbano: Desenvolvimento Urbano',
			ementa: 'Desenvolvimento urbano sustentável. Políticas públicas. Regulamentação fundiária. Projetos urbanos. Noções de direito civil. Direito de propriedade e vizinhança. Código de obras. Zoneamento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'HH810': {
			code: 'HH810',
			name: 'Metodologia e Técnicas de Pesquisa em Arquitetura e Urbanismo',
			ementa: 'Métodos de trabalho em pesquisa científica. Definição e desenvolvimento do objeto de estudo, crítica bibliográfica e desenvolvimento. Subsídios para elaboração do trabalho final de graduação (TFG) em Arquitetura e Urbanismo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA470']
		},
		'AU001': {
			code: 'AU001',
			name: 'Projeto de Graduação I',
			ementa: 'Projeto arquitetônico e de desenho urbano complexo com abordagem interdisciplinar. Sequência completa das etapas de projeto profissional: estudos preliminares, análise de programa funcional, definição de partido, anteprojeto, maquetes de estudo, plano de massa para implantação na malha urbana.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:6, D:0, HS:10, SL:4, C:10},
			requisitos: ['AA480', 'AU120']
		},
		'AU023': {
			code: 'AU023',
			name: 'Metodologia de Projeto XI: Sistemas Arquitetônicos',
			ementa: 'Processo de projeto e métodos de apoio: conceitos e teorias da arquitetura contemporânea; impacto urbano ambiental do projeto de arquitetura; legislação, ética e prática profissional.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
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
		'AU020': {
			code: 'AU020',
			name: 'Projeto de Graduação II',
			ementa: 'Projeto arquitetônico e de desenho urbano complexo com abordagem interdisciplinar. Desenvolvimento do Projeto de Graduação I. Projeto executivo, detalhamento de acabamento, maquetes de apresentação, memorial.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:10, D:0, HS:14, SL:4, C:14},
			requisitos: ['AA490', 'AU001']
		}
	}
};

export default catalogue;
