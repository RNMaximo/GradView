const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST103', 'ST109', 'ST114', 'ST362', 'TT101']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST209', 'ST211', 'ST213', 'ST215', 'ST216']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST210', 'ST301', 'ST303', 'ST304', 'ST309']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST401', 'ST403', 'ST410', 'ST420', 'ST423']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST515', 'ST525', 'ST526', 'ST527', 'ST529', 'ST726']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST008', 'ST618', 'ST625', 'ST626', 'ST628']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST722', 'ST723', 'ST727', 'ST728', 'ST729', 'ST730']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST001', 'ST002', 'ST003', 'ST004', 'ST005', 'ST007', 'ST019', 'ST090', 'ST091', 'TT350', 'TT504', 'TT550', 'TT801'],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['ST020', 'ST021', 'ST022', 'ST023', 'ST024', 'ST026', 'ST027', 'ST028', 'ST029', 'ST042', 'ST044', 'ST046', 'ST617', 'TT013', 'TT020', 'TT021', 'TT404', 'TT601'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST823', 'ST824'],
		},
		'elet-4': {
			credits: 2,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'ST103': {
			code: 'ST103',
			name: 'Desenho Técnico',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C6D940',
			obligatory: true
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9CF40',
			obligatory: true
		},
		'ST114': {
			code: 'ST114',
			name: 'Fundamentos de Química Aplicada a Construção Civil',
			ementa: 'Revisão de conceitos básicos de Química. Propriedades Químicas de Materiais utilizados em Construção Civil. Reações Químicas. Equilíbrio Químico. Estudo de Casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B340',
			obligatory: true
		},
		'ST362': {
			code: 'ST362',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Vetores no R2 e no R3. Produto Escalar e Vetorial. A Reta. O Plano. Distâncias. Cônicas e Quádricas. Dependência e Independência Linear. Espaço Vetorial Real. Transformações Lineares. Autovalores e Autovetores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40BCD9',
			obligatory: true
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#A9D940',
			obligatory: true
		},
		'ST209': {
			code: 'ST209',
			name: 'Física Aplicada II',
			ementa: 'Oscilações. Ondas mecânicas. Deformações e elasticidade. Noções de hidrostática e hidrodinâmica. Termologia. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109'],
			color: '#D9CF40',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'ST213': {
			code: 'ST213',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução à computação gráfica. Representação gráfica em 2D. Desenho para construção civil.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#C6D940',
			obligatory: true
		},
		'ST215': {
			code: 'ST215',
			name: 'Mecânica Geral',
			ementa: 'Estática, conceitos fundamentais. Força. Momento de uma força. Vínculos e ligações. Grau de mobilidade. Trabalhos virtuais. Equilíbrio de fios, catenária e cabos parabólicos. Cinemática. Movimento, velocidade, aceleração. Dinâmica. Conservação de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109', 'ST362'],
			color: '#8DC68D',
			obligatory: true
		},
		'ST216': {
			code: 'ST216',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4066D9',
			obligatory: true
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D99F',
			obligatory: true
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#C6D940',
			obligatory: true
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101'],
			color: '#C1D440',
			obligatory: true
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#70D940',
			obligatory: true
		},
		'ST309': {
			code: 'ST309',
			name: 'Resistência dos Materiais I',
			ementa: 'Vinculação das estruturas, definições e considerações gerais. Graus de mobilidade e classificação das estruturas. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Vigas isostáticas, pórticos e vigas Gerber. Momentos de 1a. e 2a. ordem, centro de gravidade e momentos de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'ST215', 'TT101'],
			color: '#B0CF5A',
			obligatory: true
		},
		'ST401': {
			code: 'ST401',
			name: 'Topografia II',
			ementa: 'Sistema de Posicionamento Global (GPS) aplicado. Normas e procedimentos técnicos, analíticos e práticos de georreferenciamento. Processamento de dados georreferenciados. Sensoriamento remoto. Cadastramento de áreas urbanas. Cadastramento de áreas rurais e áreas de preservação ambiental. Demarcação de obras civis: teoria e prática.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST301'],
			color: '#C6D940',
			obligatory: true
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303'],
			color: '#C1D440',
			obligatory: true
		},
		'ST410': {
			code: 'ST410',
			name: 'Mecânica dos Solos I',
			ementa: 'Propriedades e índices. Identificação tactil-visual. Técnicas de amostragem, ensaios e classificação dos solos. Investigação do subsolo. Permeabilidade, compacidade, limites de consistência. Ensaios e equipamentos de laboratório. Ensaios de controle de compactação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST216'],
			color: '#4066D9',
			obligatory: true
		},
		'ST420': {
			code: 'ST420',
			name: 'Materiais de Construção Civil II',
			ementa: 'Concreto de cimento Portland. Aço para concreto armado. Fios e cordoalhas para concreto protendido. Ensaios em laboratórios.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST304'],
			color: '#70D940',
			obligatory: true
		},
		'ST423': {
			code: 'ST423',
			name: 'Resistência dos Materiais II',
			ementa: 'Cargas axiais e tangenciais. Torção em barras de secção circular. Tensões em vigas, flexão simples, composta e oblíqua. Estados de tensão. Circulo de Mohr. Conceito de polo. Combinação de esforços. Critérios de resistência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST309'],
			color: '#B0CF5A',
			obligatory: true
		},
		'ST515': {
			code: 'ST515',
			name: 'Tecnologia da Construção de Edifícios I',
			ementa: 'Implantação da construção: reconhecimento do terreno, topografia do terreno, interferências, restrições e responsabilidades legais, sondagens, locação da construção. Movimento de terra: terraplenagem, escavação manual. Fundações: definições, fundações rasas, fundações profundas. Concreto: condições de recepção e armazenamento, transporte lançamento, vibração e cura do concreto. Formas: quantificação, reaproveitamento, escoamento. Aço: dobramentos, tabelas de ferros, substituição de tipos e bitolas. Concreto aparente: condições e execução. Gestão da qualidade em obras.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST420'],
			color: '#70D940',
			obligatory: true
		},
		'ST525': {
			code: 'ST525',
			name: 'Instalações Prediais Elétricas',
			ementa: 'Planejamento de uma instalação elétrica. Marcação de pontos. Traçado de tubulação. Dimensionamento de fios e tubulações. Dispositivos de proteção de circuitos. Dispositivos de controle dos circuitos. Luminotécnica. Quadros de distribuição. Cabos de entrada. Instalações de pára-raios e redes telefônicas. Projeto elétrico completo de um edifício.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST210'],
			color: '#40D99F',
			obligatory: true
		},
		'ST526': {
			code: 'ST526',
			name: 'Estática das Estruturas',
			ementa: 'Treliças. Processos de equilíbrio dos nós, Ritter e Cremona. Flechas e contra flechas em vigas. Equação da linha elástica. Flambagem. Cisalhamento em rebites e parafusos. Vigas hiperestáticas, resolução pelo processo de Cross. Coeficientes relativos à forma, cargas e condições de extremidades das barras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST423'],
			color: '#B0CF5A',
			obligatory: true
		},
		'ST527': {
			code: 'ST527',
			name: 'Concreto Armado I',
			ementa: 'Fundamentos e princípios básicos de dimensionamento, hipóteses de cálculo. Comportamento das estruturas. Métodos dos Estados Limites. Estados Limites últimos para solicitações. Estados limites de utilização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST420', 'ST423'],
			color: '#90D44D',
			obligatory: true
		},
		'ST529': {
			code: 'ST529',
			name: 'Mecânica dos Solos II',
			ementa: 'Adensamento e compressibilidade. Recalques por adensamento. Resistência ao cisalhamento dos solos. Empuxos. Estruturas de arrimo. CBR. Ensaios. Fluxo de água nos solos. Redes de fluxo. Subpressão das estruturas enterradas. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST410', 'ST423'],
			color: '#789B9A',
			obligatory: true
		},
		'ST726': {
			code: 'ST726',
			name: 'Construção e Meio Ambiente',
			ementa: 'Meio ambiente e desenvolvimento sustentável. Impactos Ambientais. Reciclagem de materiais na construção civil. Legislação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#D940CF',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D966',
			obligatory: true
		},
		'ST618': {
			code: 'ST618',
			name: 'Tecnologia da Construção de Edifícios II',
			ementa: 'Alvenarias: recepção, armazenamento de materiais e execução. Coberturas: traçado de águas, estruturas de suporte, técnicas de execução. Impermeabilização de lajes. Revestimentos e pavimentações. Esquadrias e ferragens: tipos e materiais usuais. Vidros, tipos e sistemas de colocação. Escadas e rampas. Pinturas. Lesões nas edificações. Segurança no trabalho.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST515'],
			color: '#70D940',
			obligatory: true
		},
		'ST625': {
			code: 'ST625',
			name: 'Fundações',
			ementa: 'Introdução ao estudo das fundações. Classificação das fundações. Fundações diretas: conceito de capacidade de carga, tensão admissível dos solos, métodos de avaliação. Dimensionamento de sapatas. Fundações profundas: Tipos. Tubulões: Capacidade de carga, tensão admissível dos solos, dimensionamento de tubulões. Estacas: Capacidade de cargas das estacas, formulações teóricas, métodos empíricos de avaliação. Dimensionamento de fundações por estacas. Projeto de estaqueamento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST529'],
			color: '#789B9A',
			obligatory: true
		},
		'ST626': {
			code: 'ST626',
			name: 'Projetos de Instalações Prediais Hidráulico-Sanitárias',
			ementa: 'Instalação predial de água fria, água quente, esgoto sanitário, água pluvial e combate a incêndio. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['ST303'],
			color: '#C1D440',
			obligatory: true
		},
		'ST628': {
			code: 'ST628',
			name: 'Concreto Armado II',
			ementa: 'Fundamentos e princípios do projeto estrutural. Formas de concreto armado. Cargas atuantes nas estruturas. Fundamentos da técnica de armar. Ancoragem. Peças usuais de concreto armado: lajes, vigas e pilares. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST526', 'ST527'],
			color: '#A0D254',
			obligatory: true
		},
		'ST722': {
			code: 'ST722',
			name: 'Estruturas de Aço e Madeira',
			ementa: 'Estruturas de madeira. Estruturas metálicas. Prática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST526'],
			color: '#B0CF5A',
			obligatory: true
		},
		'ST723': {
			code: 'ST723',
			name: 'Planejamento e Controle da Construção',
			ementa: 'Sistemas de planejamento e controle: metodologia, sistemática de programação e controle, conceituação de WBS (Work Breakdown Structure), programação utilizando técnicas de rede: métodos COM e PERT, Diagrama de Gantt, cronograma físico-financeiro, nivelamento de recursos através de histogramas. Estruturas organizacionais para gerenciamento de operações nas empresas e no canteiro de obras. Utilização de ferramentas de informática no planejamento e controle.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST618'],
			color: '#70D940',
			obligatory: true
		},
		'ST727': {
			code: 'ST727',
			name: 'Concreto Armado III',
			ementa: 'Fundamentos e princípios do projeto estrutural. Peças usuais de concreto armado. Lajes planas, cogumelo e nervuradas. Punção. Consolos curtos. Vigas parede. Elementos de fundação. Escadas usuais. Reservatórios. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST628'],
			color: '#A0D254',
			obligatory: true
		},
		'ST728': {
			code: 'ST728',
			name: 'Introdução ao Trabalho de Graduação e Estágio Supervisionado',
			ementa: 'Definir plano do trabalho de graduação interdisciplinar ou estágio supervisionado e revisão bibliográfica, sob orientação de um professor. Obs: Não é responsabilidade da Unicamp providenciar estágios para alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA460'],
			color: '#8CD940',
			obligatory: true
		},
		'ST729': {
			code: 'ST729',
			name: 'Noções de Concreto Protendido',
			ementa: 'Conceitos de protensão aplicada ao concreto: materiais e sistemas de protensão. Estados limites de serviços e últimos. Aplicações em estruturas de edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST628'],
			color: '#A0D254',
			obligatory: true
		},
		'ST730': {
			code: 'ST730',
			name: 'Estruturas de Concreto Pré-Moldado',
			ementa: 'Estruturas pré-moldadas de concreto, sistemas e peças usuais, ligações e elementos de fundação. Concretos de alto desempenho. Concreto com adição de fibras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST628'],
			color: '#A0D254',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#D94096',
			obligatory: true
		},
		'ST001': {
			code: 'ST001',
			name: 'Português',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#409FD9',
			obligatory: false
		},
		'ST002': {
			code: 'ST002',
			name: 'Inglês Técnico',
			ementa: 'Traduções e Interpretações de Textos Técnicos. Vocabulário e Gramática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9405C',
			obligatory: false
		},
		'ST003': {
			code: 'ST003',
			name: 'Teorias da Qualidade',
			ementa: 'Conceitos de Qualidade. As Teorias da Qualidade. Normas para a Qualidade. Controle Estatístico do Processo. Evolução Histórica da Administração da Qualidade.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5340D9',
			obligatory: false
		},
		'ST004': {
			code: 'ST004',
			name: 'Legislação Trabalhista e Segurança do Trabalho',
			ementa: 'Direito Trabalhista: Conceito e formação histórica. O empregador e o empregado. Contrato de trabalho e suas alterações. Salário e remuneração. Estabilidade. Normas gerais de proteção ao trabalho. A justiça do trabalho. Previdência social. Segurança do trabalho: Introdução à segurança, higiene e medicina do trabalho. Avaliação e controle dos riscos profissionais. Normas e leis. Proteção contra incêndios. Responsabilidades sobre acidentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BC',
			obligatory: false
		},
		'ST005': {
			code: 'ST005',
			name: 'Relações Humanas',
			ementa: 'Das ciências do comportamento: individual e social. Princípios éticos e hierárquicos. Da divisão das pessoas: naturais e jurídicas. Da responsabilidade civil. Direitos Humanos e suas implicações nas relações individuais. Noções de Direito Civil.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#53D940',
			obligatory: false
		},
		'ST007': {
			code: 'ST007',
			name: 'Humanidades',
			ementa: 'Estrutura do mundo moderno. Ação do indivíduo na atualidade. Os veículos de comunicação em massas. As artes e sua conceituação. O indivíduo como componente de um mundo cultural. O cinema, o teatro e sua importância no mundo moderno. Os grandes conflitos e suas consequências no plano cultural. Relacionamento entre os povos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4083D9',
			obligatory: false
		},
		'ST019': {
			code: 'ST019',
			name: 'A Sociedade e os Portadores de Necessidades Especiais',
			ementa: 'Histórico. Legislação. Desenho universal. Inclusão. Tecnologia assistiva. O trabalho e a legislação. Trabalho prático.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D940B3',
			obligatory: false
		},
		'ST020': {
			code: 'ST020',
			name: 'Processos Construtivos',
			ementa: 'A evolução tecnológica da construção na história. Exposição dos processos: taipa de mão, taipa de pilão, alvenaria de cerâmica, alvenaria de blocos, alvenaria armada e sistemas industrializados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST515'],
			color: '#70D940',
			obligatory: false
		},
		'ST021': {
			code: 'ST021',
			name: 'Projeto Executivo',
			ementa: 'Metodologia para desenvolvimento de projeto de execução. A interação entre os vários níveis de projeto. A coordenação entre projetos: arquitetônico, estrutural, hidráulico, elétrico e outros.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST525', 'ST626'],
			color: '#81D770',
			obligatory: false
		},
		'ST022': {
			code: 'ST022',
			name: 'Instalações Prediais Hidráulico-Sanitárias - Complementação',
			ementa: 'Tubos e conexões empregados. Características e propriedades dos materiais hidráulicos. Tipos e execução de juntas. Espaços necessários e acessibilidade das instalações. Aparelhos hidráulicos: Válvulas, reguladores de pressão, hidrômetros. Bombas hidráulicas para água e esgoto. Equipamentos para aquecimento de água.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST626'],
			color: '#C1D440',
			obligatory: false
		},
		'ST023': {
			code: 'ST023',
			name: 'Instalações Prediais Elétricas - Complementação',
			ementa: 'Instalações para força motriz. Circuitos alimentadores de motores. Circuitos dos ramais de motores. Proteção de motores contra sobrecargas e curto-circuitos. Quadros de distribuição de luz (QDL), projeto. Quadros de distribuição de força (QDF), projeto. Circuitos de sinalização. Noções básicas sobre aparelhos de medidas elétricas. Manutenção elétrica em instalações prediais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST525'],
			color: '#40D99F',
			obligatory: false
		},
		'ST024': {
			code: 'ST024',
			name: 'Prática da Construção Civil III',
			ementa: 'Movimento de terra: escoramento de vizinhos, cuidados legais, vistorias. Fundações: riscos a construções próximas. Lençol freático. Concreto: microssílica, concretos especiais. Concreto aparente: tratamentos. Instalações: interferências com a estrutura de concreto e entre hidráulica e elétrica; ar condicionado; telefone, interfone, antena coletiva em edifícios. Visitas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST515'],
			color: '#70D940',
			obligatory: false
		},
		'ST026': {
			code: 'ST026',
			name: 'Computação Gráfica Aplicada II',
			ementa: 'Desenho técnico auxiliado por computador em três dimensões.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST213'],
			color: '#C6D940',
			obligatory: false
		},
		'ST027': {
			code: 'ST027',
			name: 'Tópicos Especiais em Edifícios',
			ementa: 'Estudo de assuntos relevantes introduzidos em Edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA475'],
			color: '#D99640',
			obligatory: false
		},
		'ST028': {
			code: 'ST028',
			name: 'Orçamentos de Construções',
			ementa: 'Sistemas de contratos. Fundamentos de concorrência. Dados de projetos e memoriais descritivos. Gestão de orçamentos: planos de contas, estimativas de custos, custos diretos e indiretos, composição de preços unitários, orçamentos sintéticos e analíticos, relatórios sintéticos e analíticos de custos e insumos. Curvas ABC de custos e insumos, impostos, encargos sociais, benefícios e despesas indiretas-BDI. Aplicativos Computacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST515'],
			color: '#70D940',
			obligatory: false
		},
		'ST029': {
			code: 'ST029',
			name: 'Barreiras Arquitetônicas e os Portadores de Necessidades Especiais.',
			ementa: 'NBR 9050 e suas aplicações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D94079',
			obligatory: false
		},
		'ST042': {
			code: 'ST042',
			name: 'Processo de Projeto',
			ementa: 'A importância do projeto nos empreendimentos imobiliários. Idealização do Produto. Projetos do Produto. Indicadores da Qualidade em Projeto. Projetos para Produção. Projeto As Built. Avaliação Pós-Ocupação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST515'],
			color: '#70D940',
			obligatory: false
		},
		'ST044': {
			code: 'ST044',
			name: 'Alvenaria Estrutural',
			ementa: 'Histórico e arquitetura, materiais, sistema construtivo, modulação, concepção, estrutural, distribuição das ações, tensões admissíveis, vergas e vigas, paredes e pilares, disposições construtivas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST527'],
			color: '#90D44D',
			obligatory: false
		},
		'ST046': {
			code: 'ST046',
			name: 'Projeto de Estruturas de Concreto Assistido por Computador',
			ementa: 'Modelagem. Lançamento da estrutura e análise estrutural. Avaliação estrutural: durabilidade, estabilidade global e estados limites de serviço. Obtenção de esforços. Dimensionamento.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST628'],
			color: '#A0D254',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D949',
			obligatory: false
		},
		'ST091': {
			code: 'ST091',
			name: 'Tópicos em Tecnologia da Construção Civil',
			ementa: 'Estudos de assuntos relevantes na construção civil de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A940D9',
			obligatory: false
		},
		'ST617': {
			code: 'ST617',
			name: 'Desenho Urbano e Habitação de Interesse Social',
			ementa: 'Ensino de assuntos relevantes em arquitetura.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST213'],
			color: '#C6D940',
			obligatory: false
		},
		'ST823': {
			code: 'ST823',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio Supervisionado em Tecnologia em Construção de Edifícios, sob a orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágios para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST728'],
			color: '#8CD940',
			obligatory: false
		},
		'ST824': {
			code: 'ST824',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Desenvolvimento de um trabalho em Tecnologia em Construção de Edifícios, com objetivo de aplicar e aprofundar os conhecimentos específicos das disciplinas, sob a orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST728'],
			color: '#8CD940',
			obligatory: false
		},
		'TT013': {
			code: 'TT013',
			name: 'Redes Complexas',
			ementa: 'Redes complexas: introdução, exemplos. Redes complexas em sistemas naturais e construídos pelo ser humano. Modelagem e representação de redes complexas. Modelos estáticos e de crescimento. Caracterização e medidas de redes complexas. Operação, falhas, falhas em cascata, ataques e dinâmica de redes complexas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D95C40',
			obligatory: false
		},
		'TT020': {
			code: 'TT020',
			name: 'Contabilidade Geral',
			ementa: 'A empresa e a contabilidade. Princípios Contábeis Geralmente Aceitos. Demonstrações Contábeis. Operações da Contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4049D9',
			obligatory: false
		},
		'TT021': {
			code: 'TT021',
			name: 'Contabilidade de Custos',
			ementa: 'Evolução e objetivos da Contabilidade de Custos. Terminologia contábil. Classificação de custos. Elementos de custos diretos e indiretos. Materiais diretos e indiretos. Materiais diretos e mão-de-obra direta: controle de valoração. Custos indiretos de fabricação: aplicação, controle, departamentalização e rateio. Métodos e Sistemas de Custeio. Integração da contabilidade de custos à financeira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT020'],
			color: '#4049D9',
			obligatory: false
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D983',
			obligatory: false
		},
		'TT404': {
			code: 'TT404',
			name: 'Administração de Empresas',
			ementa: 'Os primórdios da Administração. Influências. As escolas Clássica, Científica e Comportamentalista. A era modernista, a escola contemporânea. Organizações que pensam. A estrutura corporativa. Empreendedorismo. Regulamentação do setor: LGT, Regulamentação de Usos, Serviços, Interesse Público e Societário. Contratos e Distratos, Arrecadação de Receitas. Plano de negócios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: false
		},
		'TT504': {
			code: 'TT504',
			name: 'Economia e Finanças',
			ementa: 'Modelo Keynesiano, Governo: Política Orçamentária, Setor Externo, Mercado: Inflação e Emprego. Análise microeconômica, planejamento econômico. Capacidade de geração de serviços. Noções de custos, formação de preço de venda. Aspectos societários e trabalho autônomo, aspectos trabalhistas, regimes tributários. Gestão do conhecimento e da informação. Sistemas de apoio à decisão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97940',
			obligatory: false
		},
		'TT550': {
			code: 'TT550',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C640D9',
			obligatory: false
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8C40D9',
			obligatory: false
		},
		'TT801': {
			code: 'TT801',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7040D9',
			obligatory: false
		}
	}
};

export default catalogue;
