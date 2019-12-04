const catalogue = {
	totalCredits: 158,
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
			subjects: ['ST306', 'ST529', 'ST539', 'ST540', 'ST735']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST008', 'ST625', 'ST638', 'ST639', 'ST640']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST728', 'ST736', 'ST737', 'ST738', 'ST739', 'ST740']
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
			subjects: ['ST026', 'ST030', 'ST031', 'ST032', 'ST033', 'ST045', 'ST726', 'TT013', 'TT020', 'TT021', 'TT404', 'TT601'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST833', 'ST834'],
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
			color: '#40D9CC',
			obligatory: true
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'ST114': {
			code: 'ST114',
			name: 'Fundamentos de Química Aplicada a Construção Civil',
			ementa: 'Revisão de conceitos básicos de Química. Propriedades Químicas de Materiais utilizados em Construção Civil. Reações Químicas. Equilíbrio Químico. Estudo de Casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94074',
			obligatory: true
		},
		'ST362': {
			code: 'ST362',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Vetores no R2 e no R3. Produto Escalar e Vetorial. A Reta. O Plano. Distâncias. Cônicas e Quádricas. Dependência e Independência Linear. Espaço Vetorial Real. Transformações Lineares. Autovalores e Autovetores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97440',
			obligatory: true
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#4097D9',
			obligatory: true
		},
		'ST209': {
			code: 'ST209',
			name: 'Física Aplicada II',
			ementa: 'Oscilações. Ondas mecânicas. Deformações e elasticidade. Noções de hidrostática e hidrodinâmica. Termologia. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109'],
			color: '#40D97D',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B1',
			obligatory: true
		},
		'ST213': {
			code: 'ST213',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução à computação gráfica. Representação gráfica em 2D. Desenho para construção civil.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#40D9CC',
			obligatory: true
		},
		'ST215': {
			code: 'ST215',
			name: 'Mecânica Geral',
			ementa: 'Estática, conceitos fundamentais. Força. Momento de uma força. Vínculos e ligações. Grau de mobilidade. Trabalhos virtuais. Equilíbrio de fios, catenária e cabos parabólicos. Cinemática. Movimento, velocidade, aceleração. Dinâmica. Conservação de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109', 'ST362'],
			color: '#8DA75F',
			obligatory: true
		},
		'ST216': {
			code: 'ST216',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4063D9',
			obligatory: true
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940A9',
			obligatory: true
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#40D9CC',
			obligatory: true
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101'],
			color: '#40B8AB',
			obligatory: true
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40CCD9',
			obligatory: true
		},
		'ST309': {
			code: 'ST309',
			name: 'Resistência dos Materiais I',
			ementa: 'Vinculação das estruturas, definições e considerações gerais. Graus de mobilidade e classificação das estruturas. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Vigas isostáticas, pórticos e vigas Gerber. Momentos de 1a. e 2a. ordem, centro de gravidade e momentos de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'ST215', 'TT101'],
			color: '#5AB292',
			obligatory: true
		},
		'ST401': {
			code: 'ST401',
			name: 'Topografia II',
			ementa: 'Sistema de Posicionamento Global (GPS) aplicado. Normas e procedimentos técnicos, analíticos e práticos de georreferenciamento. Processamento de dados georreferenciados. Sensoriamento remoto. Cadastramento de áreas urbanas. Cadastramento de áreas rurais e áreas de preservação ambiental. Demarcação de obras civis: teoria e prática.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST301'],
			color: '#40D9CC',
			obligatory: true
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303'],
			color: '#40B8AB',
			obligatory: true
		},
		'ST410': {
			code: 'ST410',
			name: 'Mecânica dos Solos I',
			ementa: 'Propriedades e índices. Identificação tactil-visual. Técnicas de amostragem, ensaios e classificação dos solos. Investigação do subsolo. Permeabilidade, compacidade, limites de consistência. Ensaios e equipamentos de laboratório. Ensaios de controle de compactação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST216'],
			color: '#4063D9',
			obligatory: true
		},
		'ST420': {
			code: 'ST420',
			name: 'Materiais de Construção Civil II',
			ementa: 'Concreto de cimento Portland. Aço para concreto armado. Fios e cordoalhas para concreto protendido. Ensaios em laboratórios.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST304'],
			color: '#40CCD9',
			obligatory: true
		},
		'ST423': {
			code: 'ST423',
			name: 'Resistência dos Materiais II',
			ementa: 'Cargas axiais e tangenciais. Torção em barras de secção circular. Tensões em vigas, flexão simples, composta e oblíqua. Estados de tensão. Circulo de Mohr. Conceito de polo. Combinação de esforços. Critérios de resistência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST309'],
			color: '#5AB292',
			obligatory: true
		},
		'ST306': {
			code: 'ST306',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'TT101'],
			color: '#40B8C5',
			obligatory: true
		},
		'ST529': {
			code: 'ST529',
			name: 'Mecânica dos Solos II',
			ementa: 'Adensamento e compressibilidade. Recalques por adensamento. Resistência ao cisalhamento dos solos. Empuxos. Estruturas de arrimo. CBR. Ensaios. Fluxo de água nos solos. Redes de fluxo. Subpressão das estruturas enterradas. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST410', 'ST423'],
			color: '#4D8BB6',
			obligatory: true
		},
		'ST539': {
			code: 'ST539',
			name: 'Projeto de Estradas',
			ementa: 'Projeto geométrico de estradas. Anteprojeto. Aerofotogramétrico. Reconhecimento e exploração. Curvas circulares. Curvas de transição. Perfil do terreno natural. Cálculo de cotas sobre as rampas e nas curvas de concordância. Superelevação e superlargura. Seções transversais, primitivas e projeto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST401'],
			color: '#40D9CC',
			obligatory: true
		},
		'ST540': {
			code: 'ST540',
			name: 'Sistemas de Informações Geográficas',
			ementa: 'Elementos essenciais do SIG. Estrutura de dados. Vetorial e Matricial. Aquisição de dados. Gerenciamento de dados. Análise de dados. Fundamentos e técnicas de análise espacial. Exemplos e aplicações de uso do SIG em transportes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST401'],
			color: '#40D9CC',
			obligatory: true
		},
		'ST735': {
			code: 'ST735',
			name: 'Elementos de Concreto',
			ementa: 'Fundamentos. Projeto estrutural. Carregamento. Disposições Construtivas Desenho de concreto armado.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST309', 'ST420'],
			color: '#4DBFB6',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BA40D9',
			obligatory: true
		},
		'ST625': {
			code: 'ST625',
			name: 'Fundações',
			ementa: 'Introdução ao estudo das fundações. Classificação das fundações. Fundações diretas: conceito de capacidade de carga, tensão admissível dos solos, métodos de avaliação. Dimensionamento de sapatas. Fundações profundas: Tipos. Tubulões: Capacidade de carga, tensão admissível dos solos, dimensionamento de tubulões. Estacas: Capacidade de cargas das estacas, formulações teóricas, métodos empíricos de avaliação. Dimensionamento de fundações por estacas. Projeto de estaqueamento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST529'],
			color: '#4D8BB6',
			obligatory: true
		},
		'ST638': {
			code: 'ST638',
			name: 'Mecânica dos Solos III',
			ementa: 'Estabilidade de taludes. Escavações e escoramentos. Barragens. Ensaios.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST529'],
			color: '#4D8BB6',
			obligatory: true
		},
		'ST639': {
			code: 'ST639',
			name: 'Pavimentação I',
			ementa: 'Introdução, conceituação e tipos de pavimentos. Fatores que governam o comportamento dos pavimentos, ruína estrutural e funcional. Estudo do subleito e camadas de reforço, sub-base e base. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST410', 'ST539'],
			color: '#409ED3',
			obligatory: true
		},
		'ST640': {
			code: 'ST640',
			name: 'Tecnologia dos Transportes I',
			ementa: 'O sistema de transportes. Componentes dos sistemas de transporte. Mecânica da locomoção de veículos ferroviários e rodoviários. Fluxo de veículos e seu controle. Princípios fundamentais dos fluxos de veículos. Modelos de fluxo de tráfego rodoviário.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#6BD940',
			obligatory: true
		},
		'ST728': {
			code: 'ST728',
			name: 'Introdução ao Trabalho de Graduação e Estágio Supervisionado',
			ementa: 'Definir plano do trabalho de graduação interdisciplinar ou estágio supervisionado e revisão bibliográfica, sob orientação de um professor. Obs: Não é responsabilidade da Unicamp providenciar estágios para alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA460'],
			color: '#A0D940',
			obligatory: true
		},
		'ST736': {
			code: 'ST736',
			name: 'Movimento de Terra',
			ementa: 'Projeto de Terraplenagem de um trecho de Estrada. Trabalhos Preparatórios. Introdução à Terraplenagem. Estudos de materiais de Superfície. Locomoção e Produtividade dos Equipamentos de Terraplenagem. Previsão de Produção dos diversos Equipamentos. Seleção e manutenção dos Equipamentos de Terraplenagem. Acompanhamento das operações de Máquinas de Terraplenagem - Custo de Utilização dos equipamentos - Aterros e obras de Consolidação da Estrada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST401', 'ST539'],
			color: '#40D9CC',
			obligatory: true
		},
		'ST737': {
			code: 'ST737',
			name: 'Pavimentação II',
			ementa: 'Revestimentos asfálticos. Estudo do carregamento veicular. Concepção, dimensionamento de pavimentos. Avaliação e reforço de pavimentos. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST639'],
			color: '#409ED3',
			obligatory: true
		},
		'ST738': {
			code: 'ST738',
			name: 'Logística',
			ementa: 'Atividades de Logística. Enfoque sistêmico e análise do custo total. Sistemas de controle de estoques. Relacionamento estoque, transporte e distribuição. Modelos logísticos integrados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA475'],
			color: '#D4D940',
			obligatory: true
		},
		'ST739': {
			code: 'ST739',
			name: 'Impactos Ambientais dos Transportes',
			ementa: 'Definições básicas, possíveis impactos ocasionados por projetos de transportes. Estudos dos Impactos Ambientais: sua obrigatoriedade no Brasil e a sua composição. Processo de licenciamento ambiental. A experiência brasileira na avaliação de impactos ambientais. Métodos e procedimentos para avaliação quantitativa dos impactos ambientais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA475'],
			color: '#D9408E',
			obligatory: true
		},
		'ST740': {
			code: 'ST740',
			name: 'Tecnologia dos Transportes II',
			ementa: 'Fluxos de tráfego interrompidos. Controle de tráfego. Fluxo de veículos em intersecções. Cruzamentos não semaforizados. Capacidade e nível de serviço de vias. Transporte público urbano: conceitos, definições e tecnologias. Custos e tarifação. Programação da operação. Levantamentos e pesquisas. Planejamento físico. Terminais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST640'],
			color: '#6BD940',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ST001': {
			code: 'ST001',
			name: 'Português',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B1D9',
			obligatory: false
		},
		'ST002': {
			code: 'ST002',
			name: 'Inglês Técnico',
			ementa: 'Traduções e Interpretações de Textos Técnicos. Vocabulário e Gramática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8640D9',
			obligatory: false
		},
		'ST003': {
			code: 'ST003',
			name: 'Teorias da Qualidade',
			ementa: 'Conceitos de Qualidade. As Teorias da Qualidade. Normas para a Qualidade. Controle Estatístico do Processo. Evolução Histórica da Administração da Qualidade.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D997',
			obligatory: false
		},
		'ST004': {
			code: 'ST004',
			name: 'Legislação Trabalhista e Segurança do Trabalho',
			ementa: 'Direito Trabalhista: Conceito e formação histórica. O empregador e o empregado. Contrato de trabalho e suas alterações. Salário e remuneração. Estabilidade. Normas gerais de proteção ao trabalho. A justiça do trabalho. Previdência social. Segurança do trabalho: Introdução à segurança, higiene e medicina do trabalho. Avaliação e controle dos riscos profissionais. Normas e leis. Proteção contra incêndios. Responsabilidades sobre acidentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6B40D9',
			obligatory: false
		},
		'ST005': {
			code: 'ST005',
			name: 'Relações Humanas',
			ementa: 'Das ciências do comportamento: individual e social. Princípios éticos e hierárquicos. Da divisão das pessoas: naturais e jurídicas. Da responsabilidade civil. Direitos Humanos e suas implicações nas relações individuais. Noções de Direito Civil.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#D440D9',
			obligatory: false
		},
		'ST007': {
			code: 'ST007',
			name: 'Humanidades',
			ementa: 'Estrutura do mundo moderno. Ação do indivíduo na atualidade. Os veículos de comunicação em massas. As artes e sua conceituação. O indivíduo como componente de um mundo cultural. O cinema, o teatro e sua importância no mundo moderno. Os grandes conflitos e suas consequências no plano cultural. Relacionamento entre os povos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D963',
			obligatory: false
		},
		'ST019': {
			code: 'ST019',
			name: 'A Sociedade e os Portadores de Necessidades Especiais',
			ementa: 'Histórico. Legislação. Desenho universal. Inclusão. Tecnologia assistiva. O trabalho e a legislação. Trabalho prático.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D98E40',
			obligatory: false
		},
		'ST026': {
			code: 'ST026',
			name: 'Computação Gráfica Aplicada II',
			ementa: 'Desenho técnico auxiliado por computador em três dimensões.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST213'],
			color: '#40D9CC',
			obligatory: false
		},
		'ST030': {
			code: 'ST030',
			name: 'Investigação do Subsolo',
			ementa: 'Introdução. Conceituação. Importância do conhecimento do subsolo. Métodos geofísicos indiretos de investigação do subsolo. Métodos semidiretos: prova de carga direta sobre placa metálica; ensaio de palheta (vane-test); ensaio de penetração do cone (deep sounding); ensaios pressiométricos. Métodos diretos: abertura de poços e trincheiras; sondagens - diversos tipos. Determinação da permeabilidade in situ de solos - diversos métodos. Controle de compactação no campo. Considerações finais - conclusões.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#86D940',
			obligatory: false
		},
		'ST031': {
			code: 'ST031',
			name: 'Drenagem de Estradas',
			ementa: 'Considerações gerais. Drenagem de superfície. Drenagem de profundidade. Utilização de materiais sintéticos em drenagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST306'],
			color: '#40B8C5',
			obligatory: false
		},
		'ST032': {
			code: 'ST032',
			name: 'Elementos de Mecânica das Rochas',
			ementa: 'Introdução. Propriedades mecânicas da rocha intacta. Propriedades mecânicas das descontinuidades. Estabilidade de taludes em rochas. Aplicação da mecânica das rochas às fundações de barragens. Aplicação da mecânica das rochas a túneis e cavidades subterrâneas. Classificação geomecânica de maciços rochosos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A940',
			obligatory: false
		},
		'ST033': {
			code: 'ST033',
			name: 'Tópicos Especiais em Obras de Solos',
			ementa: 'Estudo de assuntos relevantes introduzidos em Obras de Solos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA475'],
			color: '#D9C340',
			obligatory: false
		},
		'ST045': {
			code: 'ST045',
			name: 'Hidrologia das Águas Subterrâneas',
			ementa: 'Recursos hídricos. Tipos de aquífero. Origem e distribuição das águas subterrâneas. Processos físicos do fluxo de água em meios porosos e fraturados. Métodos de investigação das águas subsuperficiais e subterrâneas. Noções de hidrogeoquímica de águas subterrâneas. Físico-química dos processos de contaminação de águas subterrâneas. Processos de descontaminação e remediação de áreas contaminadas. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST306'],
			color: '#40B8C5',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D948',
			obligatory: false
		},
		'ST091': {
			code: 'ST091',
			name: 'Tópicos em Tecnologia da Construção Civil',
			ementa: 'Estudos de assuntos relevantes na construção civil de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D95A40',
			obligatory: false
		},
		'ST726': {
			code: 'ST726',
			name: 'Construção e Meio Ambiente',
			ementa: 'Meio ambiente e desenvolvimento sustentável. Impactos Ambientais. Reciclagem de materiais na construção civil. Legislação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#407DD9',
			obligatory: false
		},
		'ST833': {
			code: 'ST833',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado em Tecnologia em Estradas, sob a orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágios para alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST728'],
			color: '#A0D940',
			obligatory: false
		},
		'ST834': {
			code: 'ST834',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Desenvolvimento de um trabalho em Tecnologia em Estradas, com o objetivo de aplicar e aprofundar os conhecimentos específicos das disciplinas, sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST728'],
			color: '#A0D940',
			obligatory: false
		},
		'TT013': {
			code: 'TT013',
			name: 'Redes Complexas',
			ementa: 'Redes complexas: introdução, exemplos. Redes complexas em sistemas naturais e construídos pelo ser humano. Modelagem e representação de redes complexas. Modelos estáticos e de crescimento. Caracterização e medidas de redes complexas. Operação, falhas, falhas em cascata, ataques e dinâmica de redes complexas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#5140D9',
			obligatory: false
		},
		'TT020': {
			code: 'TT020',
			name: 'Contabilidade Geral',
			ementa: 'A empresa e a contabilidade. Princípios Contábeis Geralmente Aceitos. Demonstrações Contábeis. Operações da Contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BAD940',
			obligatory: false
		},
		'TT021': {
			code: 'TT021',
			name: 'Contabilidade de Custos',
			ementa: 'Evolução e objetivos da Contabilidade de Custos. Terminologia contábil. Classificação de custos. Elementos de custos diretos e indiretos. Materiais diretos e indiretos. Materiais diretos e mão-de-obra direta: controle de valoração. Custos indiretos de fabricação: aplicação, controle, departamentalização e rateio. Métodos e Sistemas de Custeio. Integração da contabilidade de custos à financeira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT020'],
			color: '#BAD940',
			obligatory: false
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: false
		},
		'TT404': {
			code: 'TT404',
			name: 'Administração de Empresas',
			ementa: 'Os primórdios da Administração. Influências. As escolas Clássica, Científica e Comportamentalista. A era modernista, a escola contemporânea. Organizações que pensam. A estrutura corporativa. Empreendedorismo. Regulamentação do setor: LGT, Regulamentação de Usos, Serviços, Interesse Público e Societário. Contratos e Distratos, Arrecadação de Receitas. Plano de negócios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C3',
			obligatory: false
		},
		'TT504': {
			code: 'TT504',
			name: 'Economia e Finanças',
			ementa: 'Modelo Keynesiano, Governo: Política Orçamentária, Setor Externo, Mercado: Inflação e Emprego. Análise microeconômica, planejamento econômico. Capacidade de geração de serviços. Noções de custos, formação de preço de venda. Aspectos societários e trabalho autônomo, aspectos trabalhistas, regimes tributários. Gestão do conhecimento e da informação. Sistemas de apoio à decisão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4048D9',
			obligatory: false
		},
		'TT550': {
			code: 'TT550',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9405A',
			obligatory: false
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A040D9',
			obligatory: false
		},
		'TT801': {
			code: 'TT801',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#51D940',
			obligatory: false
		}
	}
};

export default catalogue;
