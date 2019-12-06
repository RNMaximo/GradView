const catalogue = {
	totalCredits: 166,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST112', 'ST103', 'ST216', 'EB101', 'ST362', 'ST114']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST211', 'ST213', 'EB103', 'ST304', 'ST215']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST301', 'EB203', 'ST210', 'ST303', 'ST309']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST401', 'ST403', 'ST410', 'ST420', 'ST423']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST726', 'ST515', 'ST525', 'ST529', 'ST527', 'ST526']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST306', 'ST618', 'ST625', 'ST626', 'ST008', 'ST628', 'ST728']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'ST723', 'ST722', 'ST729']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['ST020', 'ST021', 'ST026', 'ST027', 'ST028', 'ST042', 'ST044', 'ST045', 'ST046', 'ST055', 'ST056', 'ST057', 'ST058', 'ST059', 'ST090', 'ST091', 'ST540', 'ST617', 'ST640', 'ST727', 'ST730', 'ST736', 'TT013', 'TT020', 'TT021', 'TT350', 'TT404', 'TT504', 'TT550', 'TT601', 'TT801'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST823', 'ST824'],
		},
	},

	subjects: {
		'EB101': {
			code: 'EB101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#9046B9',
			obligatory: true
		},
		'ST103': {
			code: 'ST103',
			name: 'Desenho Técnico',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B998',
			obligatory: true
		},
		'ST112': {
			code: 'ST112',
			name: 'Introdução à Construção de Edifícios',
			ementa: 'Estudo de assuntos relevantes na área de Construção de Edifícios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9469F',
			obligatory: true
		},
		'ST114': {
			code: 'ST114',
			name: 'Fundamentos de Química Aplicada a Construção Civil',
			ementa: 'Revisão de conceitos básicos de Química. Propriedades Químicas de Materiais utilizados em Construção Civil. Reações Químicas. Equilíbrio Químico. Estudo de Casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4681B9',
			obligatory: true
		},
		'ST216': {
			code: 'ST216',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'ST362': {
			code: 'ST362',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Vetores no R2 e no R3. Produto Escalar e Vetorial. A Reta. O Plano. Distâncias. Cônicas e Quádricas. Dependência e Independência Linear. Espaço Vetorial Real. Transformações Lineares. Autovalores e Autovetores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B981',
			obligatory: true
		},
		'EB103': {
			code: 'EB103',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A646B9',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B96B',
			obligatory: true
		},
		'ST213': {
			code: 'ST213',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução à computação gráfica. Representação gráfica em 2D. Desenho para construção civil.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST103'],
			color: '#46B998',
			obligatory: true
		},
		'ST215': {
			code: 'ST215',
			name: 'Mecânica Geral',
			ementa: 'Estática, conceitos fundamentais. Força. Momento de uma força. Vínculos e ligações. Grau de mobilidade. Trabalhos virtuais. Equilíbrio de fios, catenária e cabos parabólicos. Cinemática. Movimento, velocidade, aceleração. Dinâmica. Conservação de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*ST362'],
			color: '#6B809D',
			obligatory: true
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46AEB9',
			obligatory: true
		},
		'EB203': {
			code: 'EB203',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB103'],
			color: '#A646B9',
			obligatory: true
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101', 'EB103'],
			color: '#9B46B9',
			obligatory: true
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST103'],
			color: '#46B998',
			obligatory: true
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*EB103'],
			color: '#9B46B9',
			obligatory: true
		},
		'ST309': {
			code: 'ST309',
			name: 'Resistência dos Materiais I',
			ementa: 'Vinculação das estruturas, definições e considerações gerais. Graus de mobilidade e classificação das estruturas. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Vigas isostáticas, pórticos e vigas Gerber. Momentos de 1a. e 2a. ordem, centro de gravidade e momentos de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*ST215'],
			color: '#7E63AB',
			obligatory: true
		},
		'ST401': {
			code: 'ST401',
			name: 'Topografia II',
			ementa: 'Sistema de Posicionamento Global (GPS) aplicado. Normas e procedimentos técnicos, analíticos e práticos de georreferenciamento. Processamento de dados georreferenciados. Sensoriamento remoto. Cadastramento de áreas urbanas. Cadastramento de áreas rurais e áreas de preservação ambiental. Demarcação de obras civis: teoria e prática.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST301'],
			color: '#46B998',
			obligatory: true
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST303'],
			color: '#9B46B9',
			obligatory: true
		},
		'ST410': {
			code: 'ST410',
			name: 'Mecânica dos Solos I',
			ementa: 'Propriedades e índices. Identificação tactil-visual. Técnicas de amostragem, ensaios e classificação dos solos. Investigação do subsolo. Permeabilidade, compacidade, limites de consistência. Ensaios e equipamentos de laboratório. Ensaios de controle de compactação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST216'],
			color: '#B94646',
			obligatory: true
		},
		'ST420': {
			code: 'ST420',
			name: 'Materiais de Construção Civil II',
			ementa: 'Concreto de cimento Portland. Aço para concreto armado. Fios e cordoalhas para concreto protendido. Ensaios em laboratórios.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST304'],
			color: '#46AEB9',
			obligatory: true
		},
		'ST423': {
			code: 'ST423',
			name: 'Resistência dos Materiais II',
			ementa: 'Cargas axiais e tangenciais. Torção em barras de secção circular. Tensões em vigas, flexão simples, composta e oblíqua. Estados de tensão. Circulo de Mohr. Conceito de polo. Combinação de esforços. Critérios de resistência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST309'],
			color: '#7E63AB',
			obligatory: true
		},
		'ST515': {
			code: 'ST515',
			name: 'Tecnologia da Construção de Edifícios I',
			ementa: 'Implantação da construção: reconhecimento do terreno, topografia do terreno, interferências, restrições e responsabilidades legais, sondagens, locação da construção. Movimento de terra: terraplenagem, escavação manual. Fundações: definições, fundações rasas, fundações profundas. Concreto: condições de recepção e armazenamento, transporte lançamento, vibração e cura do concreto. Formas: quantificação, reaproveitamento, escoamento. Aço: dobramentos, tabelas de ferros, substituição de tipos e bitolas. Concreto aparente: condições e execução. Gestão da qualidade em obras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST420'],
			color: '#46AEB9',
			obligatory: true
		},
		'ST525': {
			code: 'ST525',
			name: 'Instalações Prediais Elétricas',
			ementa: 'Planejamento de uma instalação elétrica. Marcação de pontos. Traçado de tubulação. Dimensionamento de fios e tubulações. Dispositivos de proteção de circuitos. Dispositivos de controle dos circuitos. Luminotécnica. Quadros de distribuição. Cabos de entrada. Instalações de pára-raios e redes telefônicas. Projeto elétrico completo de um edifício.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST210'],
			color: '#9B46B9',
			obligatory: true
		},
		'ST526': {
			code: 'ST526',
			name: 'Estática das Estruturas',
			ementa: 'Treliças. Processos de equilíbrio dos nós, Ritter e Cremona. Flechas e contra flechas em vigas. Equação da linha elástica. Flambagem. Cisalhamento em rebites e parafusos. Vigas hiperestáticas, resolução pelo processo de Cross. Coeficientes relativos à forma, cargas e condições de extremidades das barras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST423'],
			color: '#7E63AB',
			obligatory: true
		},
		'ST527': {
			code: 'ST527',
			name: 'Concreto Armado I',
			ementa: 'Fundamentos e princípios básicos de dimensionamento, hipóteses de cálculo. Comportamento das estruturas. Métodos dos Estados Limites. Estados Limites últimos para solicitações. Estados limites de utilização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST420', '*ST423'],
			color: '#6289B2',
			obligatory: true
		},
		'ST529': {
			code: 'ST529',
			name: 'Mecânica dos Solos II',
			ementa: 'Adensamento e compressibilidade. Recalques por adensamento. Resistência ao cisalhamento dos solos. Empuxos. Estruturas de arrimo. CBR. Ensaios. Fluxo de água nos solos. Redes de fluxo. Subpressão das estruturas enterradas. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST410', '*ST423'],
			color: '#9C5579',
			obligatory: true
		},
		'ST726': {
			code: 'ST726',
			name: 'Construção e Meio Ambiente',
			ementa: 'Meio ambiente e desenvolvimento sustentável. Impactos Ambientais. Reciclagem de materiais na construção civil. Legislação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#B9465C',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94689',
			obligatory: true
		},
		'ST306': {
			code: 'ST306',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST211', '*ST301'],
			color: '#46B982',
			obligatory: true
		},
		'ST618': {
			code: 'ST618',
			name: 'Tecnologia da Construção de Edifícios II',
			ementa: 'Alvenarias: recepção, armazenamento de materiais e execução. Coberturas: traçado de águas, estruturas de suporte, técnicas de execução. Impermeabilização de lajes. Revestimentos e pavimentações. Esquadrias e ferragens: tipos e materiais usuais. Vidros, tipos e sistemas de colocação. Escadas e rampas. Pinturas. Lesões nas edificações. Segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST515'],
			color: '#46AEB9',
			obligatory: true
		},
		'ST625': {
			code: 'ST625',
			name: 'Fundações',
			ementa: 'Introdução ao estudo das fundações. Classificação das fundações. Fundações diretas: conceito de capacidade de carga, tensão admissível dos solos, métodos de avaliação. Dimensionamento de sapatas. Fundações profundas: Tipos. Tubulões: Capacidade de carga, tensão admissível dos solos, dimensionamento de tubulões. Estacas: Capacidade de cargas das estacas, formulações teóricas, métodos empíricos de avaliação. Dimensionamento de fundações por estacas. Projeto de estaqueamento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST529'],
			color: '#9C5579',
			obligatory: true
		},
		'ST626': {
			code: 'ST626',
			name: 'Projetos de Instalações Prediais Hidráulico-Sanitárias',
			ementa: 'Instalação predial de água fria, água quente, esgoto sanitário, água pluvial e combate a incêndio. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST303'],
			color: '#9B46B9',
			obligatory: true
		},
		'ST628': {
			code: 'ST628',
			name: 'Concreto Armado II',
			ementa: 'Fundamentos e princípios do projeto estrutural. Formas de concreto armado. Cargas atuantes nas estruturas. Fundamentos da técnica de armar. Ancoragem. Peças usuais de concreto armado: lajes, vigas e pilares. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST526', '*ST527'],
			color: '#7076AF',
			obligatory: true
		},
		'ST728': {
			code: 'ST728',
			name: 'Introdução ao Trabalho de Graduação e Estágio Supervisionado',
			ementa: 'Definir plano do trabalho de graduação interdisciplinar ou estágio supervisionado e revisão bibliográfica, sob orientação de um professor. Obs: Não é responsabilidade da Unicamp providenciar estágios para alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA460'],
			color: '#B95C46',
			obligatory: true
		},
		'ST722': {
			code: 'ST722',
			name: 'Estruturas de Aço e Madeira',
			ementa: 'Estruturas de madeira. Estruturas metálicas. Prática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST526'],
			color: '#7E63AB',
			obligatory: true
		},
		'ST723': {
			code: 'ST723',
			name: 'Planejamento e Controle da Construção',
			ementa: 'Sistemas de planejamento e controle: metodologia, sistemática de programação e controle, conceituação de WBS (Work Breakdown Structure), programação utilizando técnicas de rede: métodos COM e PERT, Diagrama de Gantt, cronograma físico-financeiro, nivelamento de recursos através de histogramas. Estruturas organizacionais para gerenciamento de operações nas empresas e no canteiro de obras. Utilização de ferramentas de informática no planejamento e controle.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST618'],
			color: '#46AEB9',
			obligatory: true
		},
		'ST729': {
			code: 'ST729',
			name: 'Noções de Concreto Protendido',
			ementa: 'Conceitos de protensão aplicada ao concreto: materiais e sistemas de protensão. Estados limites de serviços e últimos. Aplicações em estruturas de edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['*ST527'],
			color: '#6289B2',
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
		'ST020': {
			code: 'ST020',
			name: 'Processos Construtivos',
			ementa: 'A evolução tecnológica da construção na história. Exposição dos processos: taipa de mão, taipa de pilão, alvenaria de cerâmica, alvenaria de blocos, alvenaria armada e sistemas industrializados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST515'],
			color: '#46AEB9',
			obligatory: false
		},
		'ST021': {
			code: 'ST021',
			name: 'Projeto Executivo',
			ementa: 'Metodologia para desenvolvimento de projeto de execução. A interação entre os vários níveis de projeto. A coordenação entre projetos: arquitetônico, estrutural, hidráulico, elétrico e outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST525', '*ST626'],
			color: '#9B46B9',
			obligatory: false
		},
		'ST026': {
			code: 'ST026',
			name: 'Computação Gráfica Aplicada II',
			ementa: 'Desenho técnico auxiliado por computador em três dimensões.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST213'],
			color: '#46B998',
			obligatory: false
		},
		'ST027': {
			code: 'ST027',
			name: 'Tópicos Especiais em Edifícios',
			ementa: 'Estudo de assuntos relevantes introduzidos em Edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#4E46B9',
			obligatory: false
		},
		'ST028': {
			code: 'ST028',
			name: 'Orçamentos de Construções',
			ementa: 'Sistemas de contratos. Fundamentos de concorrência. Dados de projetos e memoriais descritivos. Gestão de orçamentos: planos de contas, estimativas de custos, custos diretos e indiretos, composição de preços unitários, orçamentos sintéticos e analíticos, relatórios sintéticos e analíticos de custos e insumos. Curvas ABC de custos e insumos, impostos, encargos sociais, benefícios e despesas indiretas-BDI. Aplicativos Computacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST515'],
			color: '#46AEB9',
			obligatory: false
		},
		'ST042': {
			code: 'ST042',
			name: 'Processo de Projeto',
			ementa: 'A importância do projeto nos empreendimentos imobiliários. Idealização do Produto. Projetos do Produto. Indicadores da Qualidade em Projeto. Projetos para Produção. Projeto As Built. Avaliação Pós-Ocupação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST515'],
			color: '#46AEB9',
			obligatory: false
		},
		'ST044': {
			code: 'ST044',
			name: 'Alvenaria Estrutural',
			ementa: 'Histórico e arquitetura, materiais, sistema construtivo, modulação, concepção, estrutural, distribuição das ações, tensões admissíveis, vergas e vigas, paredes e pilares, disposições construtivas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST527'],
			color: '#6289B2',
			obligatory: false
		},
		'ST045': {
			code: 'ST045',
			name: 'Hidrologia das Águas Subterrâneas',
			ementa: 'Recursos hídricos. Tipos de aquífero. Origem e distribuição das águas subterrâneas. Processos físicos do fluxo de água em meios porosos e fraturados. Métodos de investigação das águas subsuperficiais e subterrâneas. Noções de hidrogeoquímica de águas subterrâneas. Físico-química dos processos de contaminação de águas subterrâneas. Processos de descontaminação e remediação de áreas contaminadas. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST306'],
			color: '#46B982',
			obligatory: false
		},
		'ST046': {
			code: 'ST046',
			name: 'Projeto de Estruturas de Concreto Assistido por Computador',
			ementa: 'Modelagem. Lançamento da estrutura e análise estrutural. Avaliação estrutural: durabilidade, estabilidade global e estados limites de serviço. Obtenção de esforços. Dimensionamento.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST628'],
			color: '#7076AF',
			obligatory: false
		},
		'ST055': {
			code: 'ST055',
			name: 'Tópicos Especiais em Edifícios II',
			ementa: 'Estudo de assuntos relevantes introduzidos em Edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#64B946',
			obligatory: false
		},
		'ST056': {
			code: 'ST056',
			name: 'Tópicos Especiais em Edifícios III',
			ementa: 'Estudo de assuntos relevantes introduzidos em Edifícios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#B946B5',
			obligatory: false
		},
		'ST057': {
			code: 'ST057',
			name: 'Tópicos Especiais em Edifícios IV',
			ementa: 'Estudo de assuntos relevantes introduzidos em Edifícios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#4655B9',
			obligatory: false
		},
		'ST058': {
			code: 'ST058',
			name: 'Iniciação Científica I',
			ementa: 'A ser definida em função de pesquisas em que o aluno se engajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B94673',
			obligatory: false
		},
		'ST059': {
			code: 'ST059',
			name: 'Iniciação Científica II',
			ementa: 'A ser definida em função de pesquisas em que o aluno se engajar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46B955',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#466BB9',
			obligatory: false
		},
		'ST091': {
			code: 'ST091',
			name: 'Tópicos em Tecnologia da Construção Civil',
			ementa: 'Estudos de assuntos relevantes na construção civil de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4698B9',
			obligatory: false
		},
		'ST540': {
			code: 'ST540',
			name: 'Sistemas de Informações Geográficas',
			ementa: 'Elementos essenciais do SIG. Estrutura de dados. Vetorial e Matricial. Aquisição de dados. Gerenciamento de dados. Análise de dados. Fundamentos e técnicas de análise espacial. Exemplos e aplicações de uso do SIG em transportes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST401'],
			color: '#46B998',
			obligatory: false
		},
		'ST617': {
			code: 'ST617',
			name: 'Desenho Urbano e Habitação de Interesse Social',
			ementa: 'Ensino de assuntos relevantes em arquitetura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST026', '*ST401'],
			color: '#46B998',
			obligatory: false
		},
		'ST640': {
			code: 'ST640',
			name: 'Tecnologia dos Transportes I',
			ementa: 'O sistema de transportes. Componentes dos sistemas de transporte. Mecânica da locomoção de veículos ferroviários e rodoviários. Fluxo de veículos e seu controle. Princípios fundamentais dos fluxos de veículos. Modelos de fluxo de tráfego rodoviário.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#B99F46',
			obligatory: false
		},
		'ST727': {
			code: 'ST727',
			name: 'Concreto Armado III',
			ementa: 'Fundamentos e princípios do projeto estrutural. Peças usuais de concreto armado. Lajes planas, cogumelo e nervuradas. Punção. Consolos curtos. Vigas parede. Elementos de fundação. Escadas usuais. Reservatórios. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST527'],
			color: '#6289B2',
			obligatory: false
		},
		'ST730': {
			code: 'ST730',
			name: 'Estruturas de Concreto Pré-Moldado',
			ementa: 'Estruturas pré-moldadas de concreto, sistemas e peças usuais, ligações e elementos de fundação. Concretos de alto desempenho. Concreto com adição de fibras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST628'],
			color: '#7076AF',
			obligatory: false
		},
		'ST736': {
			code: 'ST736',
			name: 'Movimento de Terra',
			ementa: 'Projeto de Terraplenagem de um trecho de Estrada. Trabalhos Preparatórios. Introdução à Terraplenagem. Estudos de materiais de Superfície. Locomoção e Produtividade dos Equipamentos de Terraplenagem. Previsão de Produção dos diversos Equipamentos. Seleção e manutenção dos Equipamentos de Terraplenagem. Acompanhamento das operações de Máquinas de Terraplenagem - Custo de Utilização dos equipamentos - Aterros e obras de Consolidação da Estrada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6446B9',
			obligatory: false
		},
		'ST823': {
			code: 'ST823',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio Supervisionado em Tecnologia em Construção de Edifícios, sob a orientação de um professor.Obs.: Não é responsabilidade da Unicamp providenciar estágios para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA460'],
			color: '#B9B546',
			obligatory: false
		},
		'ST824': {
			code: 'ST824',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Desenvolvimento de um trabalho em Tecnologia em Construção de Edifícios, com objetivo de aplicar e aprofundar os conhecimentos específicos das disciplinas, sob a orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST728'],
			color: '#B95C46',
			obligatory: false
		},
		'TT013': {
			code: 'TT013',
			name: 'Redes Complexas',
			ementa: 'Redes complexas: introdução, exemplos. Redes complexas em sistemas naturais e construídos pelo ser humano. Modelagem e representação de redes complexas. Modelos estáticos e de crescimento. Caracterização e medidas de redes complexas. Operação, falhas, falhas em cascata, ataques e dinâmica de redes complexas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#B98946',
			obligatory: false
		},
		'TT020': {
			code: 'TT020',
			name: 'Contabilidade Geral',
			ementa: 'A empresa e a contabilidade. Princípios Contábeis Geralmente Aceitos. Demonstrações Contábeis. Operações da Contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4EB946',
			obligatory: false
		},
		'TT021': {
			code: 'TT021',
			name: 'Contabilidade de Custos',
			ementa: 'Evolução e objetivos da Contabilidade de Custos. Terminologia contábil. Classificação de custos. Elementos de custos diretos e indiretos. Materiais diretos e indiretos. Materiais diretos e mão-de-obra direta: controle de valoração. Custos indiretos de fabricação: aplicação, controle, departamentalização e rateio. Métodos e Sistemas de Custeio. Integração da contabilidade de custos à financeira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT020'],
			color: '#4EB946',
			obligatory: false
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#90B946',
			obligatory: false
		},
		'TT404': {
			code: 'TT404',
			name: 'Administração de Empresas',
			ementa: 'Os primórdios da Administração. Influências. As escolas Clássica, Científica e Comportamentalista. A era modernista, a escola contemporânea. Organizações que pensam. A estrutura corporativa. Empreendedorismo. Regulamentação do setor: LGT, Regulamentação de Usos, Serviços, Interesse Público e Societário. Contratos e Distratos, Arrecadação de Receitas. Plano de negócios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97346',
			obligatory: false
		},
		'TT504': {
			code: 'TT504',
			name: 'Economia e Finanças',
			ementa: 'Modelo Keynesiano, Governo: Política Orçamentária, Setor Externo, Mercado: Inflação e Emprego. Análise microeconômica, planejamento econômico. Capacidade de geração de serviços. Noções de custos, formação de preço de venda. Aspectos societários e trabalho autônomo, aspectos trabalhistas, regimes tributários. Gestão do conhecimento e da informação. Sistemas de apoio à decisão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A6B946',
			obligatory: false
		},
		'TT550': {
			code: 'TT550',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AE',
			obligatory: false
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7AB946',
			obligatory: false
		},
		'TT801': {
			code: 'TT801',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7A46B9',
			obligatory: false
		}
	}
};

export default catalogue;
