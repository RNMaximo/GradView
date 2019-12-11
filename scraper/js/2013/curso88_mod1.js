const catalogue = {
	totalCredits: 242,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['TT111', 'TT106', 'TT112', 'TT114', 'TT120', 'TT113', 'TT108']
		},
		'sem-2': {
			id: '2',
			subjects: ['TT217', 'TT214', 'TT212', 'TT216', 'TT220', 'TT213', 'TT215']
		},
		'sem-3': {
			id: '3',
			subjects: ['TT310', 'TT314', 'TT302', 'TT313', 'TT312', 'TT311']
		},
		'sem-4': {
			id: '4',
			subjects: ['TT412', 'TT414', 'TT415', 'TT411', 'TT416', 'TT413', 'TT410', 'TT417']
		},
		'sem-5': {
			id: '5',
			subjects: ['TT511', 'TT516', 'TT512', 'TT513', 'TT514', 'TT517', 'TT515']
		},
		'sem-6': {
			id: '6',
			subjects: ['TT607', 'TT606', 'TT608', 'TT610', 'TT604', 'TT609', 'TT605']
		},
		'sem-7': {
			id: '7',
			subjects: ['TT701', 'TT703', 'TT707', 'TT702', 'TT704', 'TT705', 'TT706']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['TT906', 'TT905', 'TT902', 'TT914', 'TT903', 'TT901', 'TT904']
		},
		'sem-10': {
			id: '10',
			subjects: ['TT911', 'TT909', 'TT910', 'TT912', 'TT908', 'TT913', 'TT915', 'TT907']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['TT005', 'TT006', 'TT007', 'TT008', 'TT800', 'TT802', 'TT803'],
		},
	},

	subjects: {
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8B46B9',
			obligatory: true
		},
		'TT108': {
			code: 'TT108',
			name: 'Fundamentos para Telecomunicações',
			ementa: 'Histórico das telecomunicações, introdução aos sinais e sistemas de telecomunicações, atualidades e tendências da tecnologia de telecomunicações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A246B9',
			obligatory: true
		},
		'TT111': {
			code: 'TT111',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B97446',
			obligatory: true
		},
		'TT112': {
			code: 'TT112',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#74B946',
			obligatory: true
		},
		'TT113': {
			code: 'TT113',
			name: 'Laboratório de Física Aplicada I',
			ementa: 'Medidas; Erros e Propagação de Erros; Algarismos Significativos e Gráficos; Método dos Mínimos Quadrados; Linearização e Gráficos log-log; Movimento em Uma Dimensão; Trajetória de um Projétil.	<!--[endif]-->',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'TT114': {
			code: 'TT114',
			name: 'Expressão Gráfica',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções para Projetos Elétricos e de Telecomunicações. Uso do Autocad e suas Toolboxes para auxílio em Projetos de Telecomunicações.	<!--[endif]-->',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'TT120': {
			code: 'TT120',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Funções. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B946A2',
			obligatory: true
		},
		'TT212': {
			code: 'TT212',
			name: 'Física Aplicada II',
			ementa: 'Oscilações. Ondas Mecânicas. Deformações e Elasticidade. Noções de Hidrostática e Hidrodinâmica. Termologia. Noções de Termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT112'],
			color: '#74B946',
			obligatory: true
		},
		'TT213': {
			code: 'TT213',
			name: 'Laboratório de Física Aplicada II',
			ementa: 'Densidade; Pêndulos Simples e Físico; Escoamento de Líquido; Dilatação de Metais; Determinação do coeficiente de dilatação térmica de metais; Ondas Estacionárias.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT113'],
			color: '#B94646',
			obligatory: true
		},
		'TT214': {
			code: 'TT214',
			name: 'Linguagem e Técnica de Programação I',
			ementa: 'Partes Componentes de um Computador. Representação Interna de Numeração. Sistemas Numéricos. Compiladores. Tipos de Processamento. Organização e Arquivos. Conceito de Algoritmo e Programa. Algoritmos: Representações, Técnicas de Construção e Estruturas. Representação de dados. Introdução a uma Linguagem de Programação de Alto Nível. Implementação de Programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B946',
			obligatory: true
		},
		'TT215': {
			code: 'TT215',
			name: 'Comunicação e Expressão',
			ementa: 'Níveis de linguagem, Seleção lexical (questões de precisão vocabular), Questões de pontuação, Adequação da forma e do conteúdo do texto aos interesses do leitor, Análise de modelos de documentos de Redação Técnica, O resumo e a resenha crítica, As relações de significado na construção do pensamento (aplicação prática da análise sintática), Análise de textos e imagens quanto à construção e à expressão das idéias, tendo em vista a clareza e a coerência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A2',
			obligatory: true
		},
		'TT216': {
			code: 'TT216',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'TT217': {
			code: 'TT217',
			name: 'Química Aplicada',
			ementa: 'Desenvolvimento de conceitos fundamentais de química para entendimento de sistemas naturais através de fórmulas e equações químicas. Estrutura atômica. Classificação periódica e propriedades dos elementos. Ligações químicas, estrutura e propriedades das substâncias. Equilíbrio químico. Minerais. Polímeros naturais e sintéticos. Gases e poluentes gasosos. Noções básicas de espectrofotometria. Tratamento de dados analíticos. Experimentos ilustrando o método científico, preparação de soluções, padronização de soluções, equilíbrio ácido-base, determinação de pH de amostras ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95D46',
			obligatory: true
		},
		'TT220': {
			code: 'TT220',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Derivadas e diferenciais. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes. Séries numéricas e séries de funções. Série de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT120'],
			color: '#B946A2',
			obligatory: true
		},
		'TT302': {
			code: 'TT302',
			name: 'Circuitos Digitais',
			ementa: 'Sistemas de numeração; Portas lógicas e álgebra booleana; Circuitos lógicos combinacionais; Flip-Flops e dispositivos relacionados; Aritmética digital: Operações e circuitos; Famílias lógicas; Contadores e registradores; Contadores binários: tipos, divisor da frequência. Memórias: tipos, expansão, tempo de acesso. Conversores analógicos/digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A2B9',
			obligatory: true
		},
		'TT310': {
			code: 'TT310',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#8B46B9',
			obligatory: true
		},
		'TT311': {
			code: 'TT311',
			name: 'Circuitos Elétricos I',
			ementa: 'Carga e campo elétrico. Diferença de potencial, corrente e resistência elétrica. Elementos e leis de circuitos lineares. Equacionamento e Soluções de circuitos por métodos algébricos e matriciais – malhas e nós. Teoremas de Thevenin e Norton, Millman, Superposição, Máxima Transferência de Potência. Uso de instrumentos de medida.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94674',
			obligatory: true
		},
		'TT312': {
			code: 'TT312',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT120'],
			color: '#B946A2',
			obligatory: true
		},
		'TT313': {
			code: 'TT313',
			name: 'Física Aplicada III',
			ementa: 'Cargas Elétricas; Campos Elétricos; Lei de Gauss; Potencial Elétrico ; Capacitância; Corrente Elétrica e Resistência Elétrica; Circuitos; Campos Magnéticos; Campos Magnéticos produzidos por correntes; Indução e Indutância; Oscilações eletromagnéticas e Corrente Alternada; Introdução as Equações de Maxwell.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT220'],
			color: '#B946A2',
			obligatory: true
		},
		'TT314': {
			code: 'TT314',
			name: 'Orientação a Objetos I',
			ementa: 'Estudo e desenvolvimento em uma linguagem de programação Orientada a Objetos. Técnicas de depuração e documentação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT214'],
			color: '#B9B946',
			obligatory: true
		},
		'TT410': {
			code: 'TT410',
			name: 'Circuitos Elétricos II',
			ementa: 'Capacitores. Indutores. Equacionamento de circuitos dinâmicos. Circuitos em correntes alternadas. Impedância complexa. Fasores. Transformada de Laplace e Fourier. Circuitos ressonantes. Transitórios. Projeto de sistemas de 2<sup>a</sup> ordem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT311'],
			color: '#B94674',
			obligatory: true
		},
		'TT411': {
			code: 'TT411',
			name: 'Circuitos Digitais II',
			ementa: 'Dispositivos lógicos programáveis. Projeto de máquinas sequenciais, máquinas de estados.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT302'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT412': {
			code: 'TT412',
			name: 'Probabilidade e Teoria da Informação',
			ementa: 'Conceitos básicos de estatística. Medidas de tedência central. Medidas de dispersão. Correlação Linear. Teoria elementar de probabilidade. Distribuição Binomial, de Poison, Exponencial Negativa, Normal, de Rayliehg, Rician e Nakagami. Introdução aos processos Frequência. Aplicações nas telecomunicações. Conceitos, princípios e fundamentos gerais da teoria dos sistemas de transmissão de informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#468BB9',
			obligatory: true
		},
		'TT413': {
			code: 'TT413',
			name: 'Métodos Matemáticos para Telecomunicacões',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Funções Elementares. Transformações. Integrais. Sequências e séries de números complexos. Séries de potências. Resíduos e polos. Transformações conformes. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT312'],
			color: '#B946A2',
			obligatory: true
		},
		'TT414': {
			code: 'TT414',
			name: 'Redes de Comunicação II',
			ementa: 'Protocolos para interconexão de redes. Arquiteturas e Protocolos para comunicação sem fio. Gerência de redes. Introdução a redes móveis e ópticas. Comunicação multimídia. Modelos de tráfego. Desenvolvimento de protocolos de comunicação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['TT310'],
			color: '#8B46B9',
			obligatory: true
		},
		'TT415': {
			code: 'TT415',
			name: 'Programação de Dispositivos Móveis',
			ementa: 'Introdução à Sistemas Operacionais de dispositivos portáteis. Programação de Dispositivos Móveis.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT314'],
			color: '#B9B946',
			obligatory: true
		},
		'TT416': {
			code: 'TT416',
			name: 'Ciência dos Materiais e Materiais Elétricos',
			ementa: 'Introdução aos Materiais; Ondas Eletromagnéticas e Ondas de Matéria; Mecânica Quantica; Elétrons em Cristais; Materiais Semicondutores; Dispositivos Semicondutores; Materiais e Dispositivos Opto-Eletrônicos; Materiais e Dispositivos Magnéticos; Materiais Importantes para a Eletrônica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT313'],
			color: '#B946A2',
			obligatory: true
		},
		'TT417': {
			code: 'TT417',
			name: 'Fenômenos de Transporte',
			ementa: 'Conceitos fundamentais. Primeira e segunda leis da termodinâmica. Equações gerais da cinemática e dinâmica dos fluidos. Equações básicas de transferência de calor e massa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT312'],
			color: '#B946A2',
			obligatory: true
		},
		'TT511': {
			code: 'TT511',
			name: 'Eletromagnetismo Aplicado',
			ementa: 'Campos magnéticos, correntes estacionárias e materiais não frequência. Força eletromotriz induzida e energia magnética, Materiais magnéticos. Equações de Maxwell. Radiação e propagação de ondas eletromagnéticas no vácuo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT313'],
			color: '#B946A2',
			obligatory: true
		},
		'TT512': {
			code: 'TT512',
			name: 'Mecânica dos Sólidos',
			ementa: 'Operações básicas com vetores (força). Definição de momento de uma força. Equivalência entre conjuntos de forças. Equilíbrio de ponto material e de corpo rígido, no plano e no espaço. Definição, cálculo e representação gráfica das cargas internas em vigas no plano. Definição de deformações e tensões (Lei de Hooke). Análise dos efeitos individuais das cargas internas em vigas: cargas axiais, torques, momentos fletores e esforços cortantes. Superposições de tensões normais. Transformação de tensões (círculo de Mohr).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT112'],
			color: '#74B946',
			obligatory: true
		},
		'TT513': {
			code: 'TT513',
			name: 'Cálculo Numérico',
			ementa: 'Erro de Truncamento e Arredondamento. Aritmética de Ponto Flutuante. Zeros de Funções. Métodos de solução de Sistemas Lineares. Resolução de Problemas não-lineares. Interpolação. Ajuste de Funções. Integração Numérica. Resolução Numérica de Equações.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT120'],
			color: '#B946A2',
			obligatory: true
		},
		'TT514': {
			code: 'TT514',
			name: 'Sinais e Sistemas',
			ementa: 'Introdução a Sinais e Sistemas. Sistemas Lineares e Invariantes no Tempo. Análise de Fourier de Sinais Contínuos e de Sinais Discretos. Caracterização no Tempo e na Frequência de Sinais e Sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT312'],
			color: '#B946A2',
			obligatory: true
		},
		'TT515': {
			code: 'TT515',
			name: 'Eletrônica Analógica I',
			ementa: 'Semicondutores. Circuitos com diodos semicondutores. Transistores bipolares. O transistor como fonte de corrente. Circuitos de polarização. Amplificadores operacionais ideais. Circuitos com amplificadores operacionais. Amplificadores de potência e fontes de alimentação. Simulação e projeto de placas de circuito impresso com softwares profissionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT410'],
			color: '#B94674',
			obligatory: true
		},
		'TT516': {
			code: 'TT516',
			name: 'Microcontroladores I',
			ementa: 'Arquitetura e Princípios de Operação de microcontroladores. Interfaces. Projeto com Microcontroladores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT517': {
			code: 'TT517',
			name: 'Instalações Elétricas',
			ementa: 'Elementos e visão do planejamento de uma instalação elétrica. Dispositivos de proteção e controle dos circuitos. Estudos para projeto elétrico de um edifício. Automação predial. Prédios inteligentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT311'],
			color: '#B94674',
			obligatory: true
		},
		'TT604': {
			code: 'TT604',
			name: 'Processamento Digital de Sinais',
			ementa: 'Estrutura de realização de sistemas discretos: equação de diferença e função de transparência, resposta em frequência e estabilidade. Filtros Digitais: classificação e estruturas de realização.Transformada de Fourier: transformada discreta de Fourier e convolução circular, algoritmo da transformada rápida de Fourier e aplicações. Efeitos de quantização de coeficientes e variáveis. Projeto de filtros digitais: projeto de filtros recursivos, projeto de filtros não recursivos, considerações práticas para implementação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT514'],
			color: '#B946A2',
			obligatory: true
		},
		'TT605': {
			code: 'TT605',
			name: 'Eletrônica Analógica II',
			ementa: 'Princípios de operação e características de FETs. Polarização de FETs. Configurações típicas. Acoplamento entre estágios amplificadores. Resposta de frequência de amplificadores. Amplificadores de potência de AF. Osciladores. Temporizador. Multivibrador astável. Schmitt trigger. Simulação e projeto de placas de circuito impresso com softwares profissionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT515'],
			color: '#B94674',
			obligatory: true
		},
		'TT606': {
			code: 'TT606',
			name: 'Ondas Guiadas',
			ementa: 'Teoria de Linhas de Transmissão: Equação de Onda, Tensão e Corrente na Linha, Constante de Propagação, Impedância Característica, Coeficiente de Reflexão, Razão de Onda Estacionária, Carta de Smith. Casamento de Impedâncias. Guias de Ondas; Modos TE e TM, Perdas em Guias de Ondas, Dispersão. Cavidades Ressonantes. Outros Dispositivos. Parâmetros S. Matriz de parâmetros S. Guias de Ondas Dielétricos: Fibras Ópticas, Propagação, Atenuação e Dispersão em Fibras Ópticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT511'],
			color: '#B946A2',
			obligatory: true
		},
		'TT607': {
			code: 'TT607',
			name: 'Laboratório de Ondas Guiadas',
			ementa: 'Técnicas de Medições em Linhas de Transmissão e Guias de Ondas. Medições no domínio do tempo: tempo de trânsito na linha, impedância característica, velocidade de propagação, permissividade relativa do dielétrico. Medições de indutância e capacitância. Diagrama Zig-Zag. Medições no domínio da frequência: defasagem da linha de Transmissão. Medição da atenuação vs frequência. Introdução ao Analisador Vetorial de Redes e ao Refletômetro Óptico. Manuseio de fibras ópticas.<b></b>',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT511'],
			color: '#B946A2',
			obligatory: true
		},
		'TT608': {
			code: 'TT608',
			name: 'Laboratório de Sistemas de Telecomunicações',
			ementa: 'Projetos assistidos por computador de sistemas e subsistemas de telecomunicações. Simulação e/ou Projetos das modulações analógicas e digitais de AM, FM e Fase. Projetos de Amplificadores de RF. Projetos de Radioenlaces. Simulação de redes de alta velocidade.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT302'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT609': {
			code: 'TT609',
			name: 'Sistemas de Telecomunicações',
			ementa: 'Modulações analógicas e digitais. Temas escolhidos de Rádio Digital. Comunicação via satélite, arquitetura dos transponders e da estação terrena. Temas escolhidos de transmissão digital, hierarquias digitais PDH e SDH, Sistemas Digitais de Radioenlaces por Micro-ondas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT610': {
			code: 'TT610',
			name: 'Dispositivos Fotônicos',
			ementa: 'Introdução. Estado atual da tecnologia. Fibras Ópticas: dispersão, atenuação, efeitos não-lineares. Cabos Ópticos. Conectores Ópticos. Emendas, Acopladores. Geradores e receptores Ópticos. Fotodetectores. Amplificação Óptica. Novas tecnologias. Óptica integrada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT416'],
			color: '#B946A2',
			obligatory: true
		},
		'TT701': {
			code: 'TT701',
			name: 'Propagação de Ondas Eletromagnéticas -Antenas',
			ementa: 'Tipos de Propagação. Propagação no espaço livre. Propagação na atmosfera. Influência do solo e de obstáculos. Propagação ionosférica. Efeitos da atmosfera na propagação de freqüência e de ondas milimétricas. Características Gerais das Antenas. Antenas Lineares de onda estacionária. Antenas de ondas caminhantes. Redes de antenas. Síntese de redes de antenas. Antenas de abertura. Antenas com refletores. Sistemas de alimentação das antenas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT511'],
			color: '#B946A2',
			obligatory: true
		},
		'TT702': {
			code: 'TT702',
			name: 'Comunicações Ópticas',
			ementa: 'Sistemas Ponto-Ponto. Sistemas WDM. Tendências Evolutivas. Capacidade e fatores limitantes. Balanço de Potência. Critérios de Projeto. Enlaces com Amplificadores Ópticos. Compensação de dispersão. Efeitos não-lineares. Sistemas Ópticos em rede. Tipos de serviços. Redes locais. Redes metropolitanas. Redes CATV. Redes Integradas. Comutação Óptica. Medidas e caracterização de enlaces. Caracterização de fontes, receptores e sistemas. Ruídos. Dispositivos e subsistemas fotônicos avançados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT610'],
			color: '#B946A2',
			obligatory: true
		},
		'TT703': {
			code: 'TT703',
			name: 'Microcontroladores II',
			ementa: 'Projetos utilizando microcontroladores.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT516'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT704': {
			code: 'TT704',
			name: 'Comunicações Móveis',
			ementa: 'Sistemas de Comunicações Móveis: Introdução. Técnicas de predição de sinais: modelos de propagação e cobertura estatística. Caracterização do canal rádio móvel em ambientes internos e externos. Estudos de interferência. Modulação e sistemas de transmissão: Cálculo de relação S/N em ambiente com desvanecimento. Métodos de acesso em comunicações móveis. Projetos de sistemas móveis: conceitos iniciais, engenharia de tráfego e capacidade do sistema, reuso de requência e algoritmos de alocação de canais, estratégias de hand-off. Telefonia Móvel Celular: descrição dos sistemas, protocolos e sinalização, padrões. Noções de sistemas de comunicação móveis por satélite. Redes de comunicações pessoais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT609'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT705': {
			code: 'TT705',
			name: 'Tecnologias de Radiofrequência e Micro-Ondas',
			ementa: 'Filtros, Casadores de Impedância, Transmissores, Receptores, Amplificadores Sintonizados de Baixo Sinal, Osciladores de RF. Modulação Analógica em Amplitude, Frequência e Fase, Misturadores, PLL e Sintetizadores de Frequência. Parâmetros de Espalhamento (parâmetro S). Dispositivos Passivos de Micro-ondas. Ruído. Diodos de Micro-ondas. Amplificadores de RF e Micro-ondas. Transistorizados. Osciladores de Micro-ondas a Semicondutores. Válvulas de Micro-ondas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TT515'],
			color: '#B94674',
			obligatory: true
		},
		'TT706': {
			code: 'TT706',
			name: 'Laboratório de Tecnologias de Radiofrequência e Micro-Ondas',
			ementa: 'Técnicas de Medições em Dispositivos de Radiofrequência e Micro-ondas. Utilização do Analisador Vetorial de Redes, Analisador de Espectros e outros equipamentos de Radiofrequência e Micro-ondas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*TT515'],
			color: '#B94674',
			obligatory: true
		},
		'TT707': {
			code: 'TT707',
			name: 'Conversão de Energia',
			ementa: 'Circuitos magnéticos. Transformadores. Princípios de conversão eletromecânica de energia. Introdução às máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT410'],
			color: '#B94674',
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
		'TT901': {
			code: 'TT901',
			name: 'Transmissão de Sinais',
			ementa: 'Fundamentos da teoria estatística da decisão. Análise no espaço de sinais. Receptores Ótimos. Capacidade de Canal. Codificação de Canal. Modulação e codificação. Protocolos ARQ. Sincronização. Equalização. Introdução à Criptografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT609'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT902': {
			code: 'TT902',
			name: 'Introdução ao Trabalho de Conclusão de Curso',
			ementa: 'Definir o Plano do Trabalho de Conclusão do Curso de Engenharia de Telecomunicações, contendo a revisão bibliográfica sobre o trabalho a ser desenvolvido, sob a orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'TT903': {
			code: 'TT903',
			name: 'Conceitos de Televisão',
			ementa: 'Introdução. Sistemas de TV acromáticos de baixa resolução e sinais envolvidos. Sistemas de TV a cores e sinais envolvidos. Modulação e demodulação de sinais de TV em AM-VSB. Transmissores e receptores e sua características. Dimensionamento de enlaces em UHF e SHF. Modulação demodulação FM. Análise e dimensionamento de TV a cabo. Fundamentos de TV de alta definição – HDTV: Principais sistemas, sinais de áudio e vídeo, digitalização, compressão, correção de erro e multiplexação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA465', 'TT609'],
			color: '#46A2B9',
			obligatory: true
		},
		'TT904': {
			code: 'TT904',
			name: 'Economia e Finanças',
			ementa: '<!--[if !supportEmptyParas]--> Modelo Keynesiano, Governo: Política Orçamentária, Setor Externo, Mercado: Inflação e Emprego. Análise microeconômica, planejamento econômico. Capacidade de geração de serviços. Noções de custos, formação de preço de venda. Aspectos societários e trabalho autônomo, aspectos trabalhistas, regimes tributários. Gestão do conhecimento e da informação. Sistemas de apoio à decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA465'],
			color: '#8BB946',
			obligatory: true
		},
		'TT905': {
			code: 'TT905',
			name: 'Programação Web',
			ementa: 'Programação para a web com Servlets, JSP e JSF. Desenvolvimento de sistemas estruturado segundo o padrão MVC (Model-View-Controller).',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA465', 'TT314'],
			color: '#B9B946',
			obligatory: true
		},
		'TT906': {
			code: 'TT906',
			name: 'Telefonia e Comutação',
			ementa: 'Introdução. Comutação de circuitos: técnicas de comutação, tipos de centrais, hierarquia de centrais. Tráfego telefônico. Dimensionamento de centrais. Exemplos de equipamentos. Introdução à comutação de pacotes e de células. Análise comparativa entre os diversos tipos de comutação e suas aplicações típicas. Técnicas de sinalização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA465', 'TT412'],
			color: '#468BB9',
			obligatory: true
		},
		'TT914': {
			code: 'TT914',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio desenvolvido de acordo com regras internas da Faculdade de Tecnologia.Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: '',
			color: '#B9468B',
			obligatory: true
		},
		'TT907': {
			code: 'TT907',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Realização do Trabalho de Conclusão do Curso de Engenharia de Telecomunicações com o objetivo de aprofundar e aplicar os conhecimentos específicos das disciplinas, sob orientação do professor.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#5DB946',
			obligatory: true
		},
		'TT908': {
			code: 'TT908',
			name: 'Projetos de Extensão Comunitária',
			ementa: 'Assuntos relevantes para a educação comunitária e inclusão social.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'TT909': {
			code: 'TT909',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e seu ambiente natural ou construído, rural ou urbano. O ambiente como ameaça ao homem: predação, competição, doença ambiental. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como ameaça ao ambiente: população, energia, clima, ecotoxicologia, extinção. Direito ecológico e política ambiental. Responsabilidade do profissional à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA465'],
			color: '#465DB9',
			obligatory: true
		},
		'TT910': {
			code: 'TT910',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorismo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA465'],
			color: '#7446B9',
			obligatory: true
		},
		'TT911': {
			code: 'TT911',
			name: 'Administração de Empresas',
			ementa: 'Os primórdios da Administração. Influências. As escolas Clássica, Científica e Comportamentalista. A era modernista, a escola contemporânea. Organizações que pensam. A estrutura corporativa. Empreendedorismo. Regulamentação do Setor: LGT, Regulamentação de Usos, Serviços, Interesse Público e Societário. Contratos e Distratos, Arrecadação de Receitas. Plano de negócios.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA465'],
			color: '#4674B9',
			obligatory: true
		},
		'TT912': {
			code: 'TT912',
			name: 'Relações Humanas',
			ementa: 'Das ciências do comportamento: individual e social. Princípios éticos e hierárquicos. Da divisão das pessoas: naturais e jurídicas. Da responsabilidade civil. Direitos Humanos e suas implicações nas relações individuais. Noções de Direito Civil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA465'],
			color: '#5D46B9',
			obligatory: true
		},
		'TT913': {
			code: 'TT913',
			name: 'Ergonomia-Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço. Ferramentas e técnicas de trabalho adequadas às capacidades humanas. Técnicas de avaliação de condições ambientais pré-existentes. (EQ ST090).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA465'],
			color: '#46B98B',
			obligatory: true
		},
		'TT915': {
			code: 'TT915',
			name: 'Atividades Complementares',
			ementa: 'Participação em Atividades Complementares. A matrícula nesta disciplina será autorizada pela Coordenação do Curso mediante apresentação de documentos comprobatórios da execução de atividades complementares por parte do aluno, de acordo com regras internas do curso, visando à contabilização, em créditos, das atividades efetuadas.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA465'],
			color: '#B98B46',
			obligatory: true
		},
		'TT005': {
			code: 'TT005',
			name: 'Tópicos Especiais em Telecomunicações I',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B95D',
			obligatory: false
		},
		'TT006': {
			code: 'TT006',
			name: 'Tópicos Especiais em Telecomunicações II',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4646B9',
			obligatory: false
		},
		'TT007': {
			code: 'TT007',
			name: 'Tópicos Especiais em Telecomunicações III',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B9465D',
			obligatory: false
		},
		'TT008': {
			code: 'TT008',
			name: 'Tópicos Especiais em Telecomunicações IV',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B974',
			obligatory: false
		},
		'TT800': {
			code: 'TT800',
			name: 'Atividades de Intercâmbio',
			ementa: 'Participação em Intercâmbio Acadêmico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: '',
			color: '#B9A246',
			obligatory: false
		},
		'TT802': {
			code: 'TT802',
			name: 'Banco de dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT214'],
			color: '#B9B946',
			obligatory: false
		},
		'TT803': {
			code: 'TT803',
			name: 'Automação e Controle I',
			ementa: 'Análise e síntese de sistemas contínuos e discretos. Obtenção de diagrama de bloco e função de transferência. Modelos e simulação. Controle realimentado. Estabilidade e otimização. Critério de estabilidade de Routh. Análise por frequência. Análise pelo lugar das raízes. Aplicações em filtros e em sistemas industriais. Modos de controle. Controlador programável e sistemas de controle digital. Transdutores e Interfaces.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT214'],
			color: '#B9B946',
			obligatory: false
		}
	}
};

export default catalogue;
