const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['TT130', 'TT120', 'ST164', 'ST008', 'ST161', 'ST264']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST266', 'TT220', 'ST265', 'TT106', 'TT102']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST366', 'ST364', 'ST363', 'TT350', 'ST211']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST468', 'ST464', 'ST463', 'TT304', 'TT202', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['TT550', 'ST562', 'ST567', 'ST118', 'ST568']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST680', 'ST662', 'ST670', 'ST119', 'ST668', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'ST762', 'ST767', 'ST566', 'ST765']
		},
		'sem-8': {
			id: '8',
			subjects: ['TT801', 'ELET08', 'ST880', 'ST120']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AM016', 'AM018', 'ST001', 'ST003', 'ST078', 'ST090', 'ST096', 'TT030', 'TT031', 'TT104', 'TT105'],
		},
		'elet-2': {
			credits: 14,
			hasRestrictions: true,
			subjects: ['ST047', 'ST048', 'ST049', 'ST050', 'ST052', 'ST053', 'ST054', 'ST060', 'ST061', 'ST062', 'ST066', 'ST067', 'ST068', 'ST069', 'ST094', 'ST095', 'ST099', 'ST113', 'ST115', 'ST116', 'TT001', 'TT002', 'TT003', 'TT004', 'TT005', 'TT006', 'TT007', 'TT008', 'TT011', 'TT012', 'TT013', 'TT040', 'TT050', 'TT060', 'TT302', 'TT401'],
		},
		'elet-3': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['ST861', 'ST863', 'ST864', 'ST865', 'ST866'],
		},
	},

	subjects: {
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94656',
			obligatory: true
		},
		'ST161': {
			code: 'ST161',
			name: 'Introdução à Lógica',
			ementa: 'Cálculo Proposicional. Teoria dos Conjuntos. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Mapas de Karnaugh.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8046B9',
			obligatory: true
		},
		'ST164': {
			code: 'ST164',
			name: 'Elementos Básicos de Computação',
			ementa: 'Histórico do computador. Partes componentes de um computador. Introdução à informática. Sistemas numéricos. Noções de sistemas operacionais, compiladores, interpretadores, bancos de dados, redes e internet.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B98A',
			obligatory: true
		},
		'ST264': {
			code: 'ST264',
			name: 'Inglês para Informática',
			ementa: 'Compreensão e Interpretação de Textos Gerais e Técnicos. Tradução de textos de caráter eminentemente técnico.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A446',
			obligatory: true
		},
		'TT120': {
			code: 'TT120',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Funções. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#7046B9',
			obligatory: true
		},
		'TT130': {
			code: 'TT130',
			name: 'Linguagem e Técnica de Programação I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estruturas de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AE46B9',
			obligatory: true
		},
		'ST265': {
			code: 'ST265',
			name: 'Laboratório de Programação I',
			ementa: 'Alocação dinâmica de memória. Manipulação de arquivos. Implementação de programas utilizando a Linguagem estudada em Linguagem e Técnicas de Programação I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT130'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST266': {
			code: 'ST266',
			name: 'Engenharia de Software I',
			ementa: 'Produção de software. Paradigmas. Especificação de requisitos. Análise e projeto de software. Verificação e validação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT130'],
			color: '#AE46B9',
			obligatory: true
		},
		'TT102': {
			code: 'TT102',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores. Operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, intersecções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Secções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A9B9',
			obligatory: true
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Noções básicas sobre circuitos lógicos. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95646',
			obligatory: true
		},
		'TT220': {
			code: 'TT220',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Derivadas e diferenciais. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes. Séries numéricas e séries de funções. Série de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT120'],
			color: '#7046B9',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469AB9',
			obligatory: true
		},
		'ST363': {
			code: 'ST363',
			name: 'Linguagem e Técnica de Programação II',
			ementa: 'Estudo e desenvolvimento em uma linguagem de programação Orientada a Objetos. Técnicas de depuração e documentação de programas.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST265'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST364': {
			code: 'ST364',
			name: 'Estruturas de Dados',
			ementa: 'Representação e Manipulação de Dados na Memória Interna do Computador: Tabelas, Listas, Árvores e Grafos. Algoritmos correspondentes de Busca, Inserção, Remoção e Percurso. Desenvolvimento de programas utilizando a linguagem estudada em Laboratório de Programação I.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST265'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST366': {
			code: 'ST366',
			name: 'Engenharia de Software II',
			ementa: 'Conceitos de análise e projeto orientados a objetos. Interfaces. Linguagem de modelagem. Testes. Desenvolvimento de software utilizando aspectos estudados em Engenharia de Software I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#AE46B9',
			obligatory: true
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#70B946',
			obligatory: true
		},
		'ST463': {
			code: 'ST463',
			name: 'Laboratório de Programação II',
			ementa: 'Desenvolvimento e Implementação de Programas na Linguagem de Programação Estudada em Linguagem e Técnicas de Programação II.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST464': {
			code: 'ST464',
			name: 'Laboratório de Estruturas de Dados',
			ementa: 'Desenvolvimento e Implementação de Programas utilizando Estruturas de Dados.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST468': {
			code: 'ST468',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464BB9',
			obligatory: true
		},
		'TT202': {
			code: 'TT202',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Autovalores e autovetores. Produto interno. Diagonalização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT102'],
			color: '#46A9B9',
			obligatory: true
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B95646',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ST118': {
			code: 'ST118',
			name: 'Análise de Sistemas de Informação I',
			ementa: 'Introdução ao Sistema de Informação. Conceitos Gerais de Sistemas de Informação. Ciclo de Vida de um Projeto de Sistemas. Viabilidade e Implementação de Sistemas. Ferramentas da Análise Estruturada. Diagramas de Fluxo de Dados. Dicionário de Dados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST265', 'TT106'],
			color: '#B44E80',
			obligatory: true
		},
		'ST562': {
			code: 'ST562',
			name: 'Estruturas de Arquivos',
			ementa: 'Dispositivos de armazenamento. Estrutura básica de armazenamento e Recuperação de Informação em Arquivos. Arquivos sequenciais, indexados e de acesso Hashing. Compressão de arquivos. Recuperação e segurança de arquivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B95646',
			obligatory: true
		},
		'TT550': {
			code: 'TT550',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B4',
			obligatory: true
		},
		'ST119': {
			code: 'ST119',
			name: 'Análise de Sistemas de Informação II',
			ementa: 'Análise de casos de uso. Análise orientada a objetos. Diagramas estáticos e dinâmicos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST118'],
			color: '#B44E80',
			obligatory: true
		},
		'ST662': {
			code: 'ST662',
			name: 'Linguagem e Técnicas de Programação III',
			ementa: 'Estudo e Técnicas Avançadas de Programação e desenvolvimento de uma Linguagem de Programação de Alto Nível.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363', 'ST364'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST668': {
			code: 'ST668',
			name: 'Redes de Comunicação II',
			ementa: 'Protocolos para interconexão de redes. Arquiteturas e Protocolos para comunicação sem fio. Gerência de redes. Introdução a redes móveis e ópticas. Comunicação multimídia. Modelos de tráfego. Desenvolvimento de protocolos de comunicação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568'],
			color: '#B95646',
			obligatory: true
		},
		'ST670': {
			code: 'ST670',
			name: 'Tópicos em Programação WEB',
			ementa: 'Estudo de assuntos em programação web. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST363'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST680': {
			code: 'ST680',
			name: 'Pesquisa Operacional',
			ementa: 'Problema Padrão da Programação Linear. Métodos Simplex. Teoria do Estoque. Teoria das Filas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST468'],
			color: '#464BB9',
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
		'ST566': {
			code: 'ST566',
			name: 'Tópicos em Desenvolvimento Tecnológico',
			ementa: 'Estudos de assuntos ligados a informática de acordo com os avanços da tecnologia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#8F46B9',
			obligatory: true
		},
		'ST762': {
			code: 'ST762',
			name: 'Laboratório de Programação III',
			ementa: 'Desenvolvimento de Programas Utilizando Linguagem de Programação Estudada em Linguagem e Técnicas de Programação III.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST662'],
			color: '#AE46B9',
			obligatory: true
		},
		'ST765': {
			code: 'ST765',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos em Computação Gráfica; Sistemas e dispositivos gráficos; áreas de processamento Digital de Imagens; sistema de cor; desenho de linhas e círculos; algoritmos de preenchimento de regiões; transformações geométricas 2D e 3D; projeções perspectivas e ortográficas; renderização: iluminação e textura.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364', 'TT102'],
			color: '#7A78B9',
			obligatory: true
		},
		'ST767': {
			code: 'ST767',
			name: 'Banco de Dados II',
			ementa: 'Conceitos relacionados com a estrutura física dos bancos de dados. Linguagem de acesso a banco de dados. Ferramentas e técnicas utilizadas na implementação de sistemas de bancos de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: '#AE46B9',
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
		'ST120': {
			code: 'ST120',
			name: 'Administração de Informática',
			ementa: 'Evolução do uso da Informática na Organização. Recursos Humanos em Tecnologia da Informação. Relacionamento da Informática com o negócio: ambientes de tecnologia da informação, estados da administração, atitudes da alta gerência, função da informática na organização. Uso estratégico da tecnologia da informação. Modelo Genérico de Governança: Regulamentações e normas, alinhamento estratégico, planejamento de TI, Operações e Serviços, relacionamento com usuários e fornecedores e Segurança.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#70B946',
			obligatory: true
		},
		'ST880': {
			code: 'ST880',
			name: 'Administração da Produção para Tecnologia da Informação',
			ementa: 'Sistemas de produção, ferramentas da produção enxuta e produção sustentável. Gestão da cadeia de suprimentos. Planejamento e coordenação de atividades em projetos. Indicadores de desempenho. Estratégia de produção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#70B946',
			obligatory: true
		},
		'TT801': {
			code: 'TT801',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#51B946',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AM016': {
			code: 'AM016',
			name: 'Educação Ambiental',
			ementa: 'Noções de história da ciência. Diálogo entre diferentes áreas do conhecimento. Equilíbrio entre a visão tecno-racional e ético-emocional. Visão geral sobre problemas ambientais. Noções de responsabilidade social, debate e desenvolvimento de posturas e princípios de educação ambiental. Prática na elaboração de projetos de educação ambiental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#466BB9',
			obligatory: false
		},
		'AM018': {
			code: 'AM018',
			name: 'Trabalhos Comunitários I',
			ementa: 'Participação supervisionada em projetos ligados à área de extensão e assuntos comunitários.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B99A',
			obligatory: false
		},
		'ST001': {
			code: 'ST001',
			name: 'Português',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96546',
			obligatory: false
		},
		'ST003': {
			code: 'ST003',
			name: 'Teorias da Qualidade',
			ementa: 'Conceitos de Qualidade. As Teorias da Qualidade. Normas para a Qualidade. Controle Estatístico do Processo. Evolução Histórica da Administração da Qualidade.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6046B9',
			obligatory: false
		},
		'ST047': {
			code: 'ST047',
			name: 'Introdução a Interfaces Humano-Computador',
			ementa: 'Construção de Interfaces Humano-Computador. Aspectos Humanos e Tecnológicos. Uso de Ferramentas para desenvolvimento de interfaces de sistemas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST266'],
			color: '#AE46B9',
			obligatory: false
		},
		'ST048': {
			code: 'ST048',
			name: 'Compiladores',
			ementa: 'Teoria de linguagens. Análise léxica e sintática. Geração e otimização de código. Análise semântica. Aspectos e ferramentas para construção de compiladores.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT304'],
			color: '#B95646',
			obligatory: false
		},
		'ST049': {
			code: 'ST049',
			name: 'Sistemas Distribuídos',
			ementa: 'Coordenação, sincronização e comunicação entre processos. Sistemas operacionais distribuídos: Sistemas de arquivos, Servidores de nomes, Memória compartilhada. Segurança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568', 'TT304'],
			color: '#B95646',
			obligatory: false
		},
		'ST050': {
			code: 'ST050',
			name: 'Tópicos Avançados em Redes',
			ementa: 'Disciplina de ementa aberta.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568'],
			color: '#B95646',
			obligatory: false
		},
		'ST052': {
			code: 'ST052',
			name: 'Introdução ao Processamento Discreto de Sinais',
			ementa: 'Sinais e Sistemas Discretos no Tempo. Amostragem de Sinais Contínuos no Tempo. Transformada de Fourier Discreta. Computação e Análise de Sinais usando Transformada de Fourier Discreta.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT220'],
			color: '#7046B9',
			obligatory: false
		},
		'ST053': {
			code: 'ST053',
			name: 'Tópicos em Modelagem Computacional',
			ementa: 'Aplicações computacionais na resolução de problemas de diferentes naturezas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#468AB9',
			obligatory: false
		},
		'ST054': {
			code: 'ST054',
			name: 'Protocolos de Comunicação e Redes',
			ementa: 'Protocolos adaptativos. Protocolos de sinalização. Implementação de protocolos de comunicação. Máquinas de estado dirigidas por eventos. Modelos de tráfego em redes. Simulações e emulações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST568'],
			color: '#B95646',
			obligatory: false
		},
		'ST060': {
			code: 'ST060',
			name: 'Tópicos Avançados em Banco de Dados',
			ementa: 'Problemas de Segurança. Recuperação de Falhas e Controle de Concorrência em banco de Dados. Conceito de Banco de Dados Distribuídos. Bancos de Dados OO e Banco de Dados Multimídia.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: '#AE46B9',
			obligatory: false
		},
		'ST061': {
			code: 'ST061',
			name: 'Tópicos Avançados em Programação',
			ementa: 'Estudo de Assuntos Avançados em Programação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST464'],
			color: '#AE46B9',
			obligatory: false
		},
		'ST062': {
			code: 'ST062',
			name: 'Engenharia de Software',
			ementa: 'Aplicação de técnicas de engenharia de software em um ambiente simulado para o desenvolvimento, validação e verificação de sistemas de software.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST366'],
			color: '#AE46B9',
			obligatory: false
		},
		'ST066': {
			code: 'ST066',
			name: 'Tópicos Avançados em Arquitetura de Computadores',
			ementa: 'Tópicos de organização e arquitetura. Máquinas multinível. Máquinas risc. Arquitetura paralela. Arquiteturas avançadas e alternativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B95646',
			obligatory: false
		},
		'ST067': {
			code: 'ST067',
			name: 'Tópicos Especiais em Informática',
			ementa: 'Estudo de Assuntos Especiais de Informática de acordo com a Evolução Tecnológica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST164'],
			color: '#46B98A',
			obligatory: false
		},
		'ST068': {
			code: 'ST068',
			name: 'Introdução à Inteligência Artificial',
			ementa: 'Introdução à Inteligência Artificial. Lógica e Dedução. Estratégias de busca. Sistemas Especialistas. Processamento de Linguagem Natural. Sistemas de programação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA430'],
			color: '#467AB9',
			obligatory: false
		},
		'ST069': {
			code: 'ST069',
			name: 'Tópicos em Teoria da Computação',
			ementa: 'Estudo de Assuntos Especiais em Teoria da Computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364', 'TT202'],
			color: '#7A78B9',
			obligatory: false
		},
		'ST078': {
			code: 'ST078',
			name: 'Meio Ambiente e Desenvolvimento',
			ementa: 'Temas ligados aos grandes desafios atuais envolvendo questões ambientais: aquecimento global e clima mundial, matriz energética, consumo consciente, geração de resíduos, consumo da água, preservação de florestas naturais, sustentabilidade (Agenda 21, Relatório Brundtland, Protocolo de Kyoto).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B96B',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98546',
			obligatory: false
		},
		'ST094': {
			code: 'ST094',
			name: 'Introdução às Telecomunicações',
			ementa: 'Sistemas de comunicação. Propagação de ondas eletromagnéticas. Eletrônica básica para telecomunicações: amplificadores, osciladores, filtros e casamento de impedâncias. Modulação em amplitude e frequência. Modulação chaveada. Rádio digital. Telefonia celular. Comunicação por satélites. Transmissão digital. Transmissão por fibras ópticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97546',
			obligatory: false
		},
		'ST095': {
			code: 'ST095',
			name: 'Técnicas de Interfaceamento com Computadores',
			ementa: 'Organização geral de um computador. Dispositivos de entrada e saída. Portas paralelas e seriais. Técnicas de interfaceamento usando portas paralelas. Técnicas de interfaceamento usando portas seriais. Desenvolvimento de hardware para interfaceamento. Aplicações práticas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B95646',
			obligatory: false
		},
		'ST096': {
			code: 'ST096',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Estudo de aspectos das relações entre ciência, tecnologia e sociedade ao longo da história, com ênfase na atualidade; análise de valores e ideologias envolvendo a produção e divulgação da ciência e da tecnologia; diferentes concepções de ciência, técnica e tecnologia e de suas relações; a participação pública na produção e nos debates envolvendo simultaneamente questões científicas, técnicas, tecnológicas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#46B97A',
			obligatory: false
		},
		'ST099': {
			code: 'ST099',
			name: 'Autômatos',
			ementa: 'Revisão de Conceitos Básicos. Alfabetos e linguagens. Autômatos Finitos. Linguagens Regulares. Linguagens Livres de Contexto. Linguagens Recursivas e Linguagem Recursivamente Enumeráveis. Computabilidade e Decidibilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364'],
			color: '#AE46B9',
			obligatory: false
		},
		'ST113': {
			code: 'ST113',
			name: 'Fundamentos de Eletricidade',
			ementa: 'Conceitos de Eletrostática. Conceitos de Eletrodinâmica. Medições Elétricas. Instalações Elétricas. Normas para Instalações Elétricas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#80B946',
			obligatory: false
		},
		'ST115': {
			code: 'ST115',
			name: 'Processamento de Imagens',
			ementa: 'Conceitos básicos de imagens digitais; representação de imagens; histograma; rotulação e filtragem; segmentação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT202'],
			color: '#46A9B9',
			obligatory: false
		},
		'ST116': {
			code: 'ST116',
			name: 'Fundamentos de Jogos Digitais',
			ementa: 'Terminologia; Introdução à matemática e física de jogos; Princípios básicos de áudio e vídeo: características e manipulação; Técnicas e elementos para construção de jogos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST765'],
			color: '#7A78B9',
			obligatory: false
		},
		'ST861': {
			code: 'ST861',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado na área de Tecnologia em Informática. Obs.: Não é responsabilidade da Unicamp providenciar estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA465'],
			color: '#B94665',
			obligatory: false
		},
		'ST863': {
			code: 'ST863',
			name: 'Introdução ao Estágio Supervisionado',
			ementa: 'Elaboração do plano de estágio supervisionado revisão bibliográfica sobre o trabalho a ser desenvolvido. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#5146B9',
			obligatory: false
		},
		'ST864': {
			code: 'ST864',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio Supervisionado na área de Tecnologia em Informática. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST863'],
			color: '#5146B9',
			obligatory: false
		},
		'ST865': {
			code: 'ST865',
			name: 'Introdução ao Trabalho de Graduação',
			ementa: 'Projeto e revisão bibliográfica sobre o tema da monografia do trabalho de graduação interdisciplinar.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#9F46B9',
			obligatory: false
		},
		'ST866': {
			code: 'ST866',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Desenvolvimento e apresentação da monografia referente ao trabalho de graduação interdisciplinar, área de Tecnologia em Informática.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST865'],
			color: '#9F46B9',
			obligatory: false
		},
		'TT001': {
			code: 'TT001',
			name: 'Tópicos em Computação e Informática I',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA425'],
			color: '#9FB946',
			obligatory: false
		},
		'TT002': {
			code: 'TT002',
			name: 'Tópicos em Computação e Informática II',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#46B95B',
			obligatory: false
		},
		'TT003': {
			code: 'TT003',
			name: 'Tópicos em Computação e Informática III',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#46B9B9',
			obligatory: false
		},
		'TT004': {
			code: 'TT004',
			name: 'Tópicos em Computação e Informática IV',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#46B94B',
			obligatory: false
		},
		'TT005': {
			code: 'TT005',
			name: 'Tópicos Especiais em Telecomunicações I',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B9B446',
			obligatory: false
		},
		'TT006': {
			code: 'TT006',
			name: 'Tópicos Especiais em Telecomunicações II',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#AEB946',
			obligatory: false
		},
		'TT007': {
			code: 'TT007',
			name: 'Tópicos Especiais em Telecomunicações III',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94675',
			obligatory: false
		},
		'TT008': {
			code: 'TT008',
			name: 'Tópicos Especiais em Telecomunicações IV',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9A9',
			obligatory: false
		},
		'TT011': {
			code: 'TT011',
			name: 'Estruturas Algébricas',
			ementa: 'Assuntos preliminares: conjuntos, relações, relações de equivalência, congruência. Grupos. Anéis. Corpos. Polinômios.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#465BB9',
			obligatory: false
		},
		'TT012': {
			code: 'TT012',
			name: 'Grafos',
			ementa: 'Conceito, representação e aplicação de grafos.Operações sobre grafos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA425'],
			color: '#B94646',
			obligatory: false
		},
		'TT013': {
			code: 'TT013',
			name: 'Redes Complexas',
			ementa: 'Redes complexas: introdução, exemplos. Redes complexas em sistemas naturais e construídos pelo ser humano. Modelagem e representação de redes complexas. Modelos estáticos e de crescimento. Caracterização e medidas de redes complexas. Operação, falhas, falhas em cascata, ataques e dinâmica de redes complexas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#B94685',
			obligatory: false
		},
		'TT030': {
			code: 'TT030',
			name: 'Contabilidade Geral',
			ementa: 'Evento financeiro e fato contábil. Fluxo de origem e aplicação de recursos. Estrutura de contas: graus de liquidez. Estrutura de capital: estados. Mecânica Contábil. Livros básicos. Balanço Patrimonial e Demonstração de Resultado do Exercício.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8FB946',
			obligatory: false
		},
		'TT031': {
			code: 'TT031',
			name: 'Contabilidade de Custos',
			ementa: 'Componentes do custo. Terminologia. Componentes diretos e indiretos do custo. Estratégia de departamentalização. Sistemas de acumulação por ordem de produção, por processo e por atividades. Análise de curto prazo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94694',
			obligatory: false
		},
		'TT040': {
			code: 'TT040',
			name: 'Matemática Discreta Aplicada',
			ementa: 'Lógica proposicional. Métodos de prova. Indução matemática. Relações de recorrências. Noções de teoria dos grafos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST161'],
			color: '#8046B9',
			obligatory: false
		},
		'TT050': {
			code: 'TT050',
			name: 'Sistemas de Apoio à Decisão',
			ementa: 'Teoria da decisão, modelos de decisão; modelagem qualitativa; árvores de decisão, agentes de decisão, análise multicritério; Processo cognitivo e tomada de decisão; Heuristicas de solução de problemas. Sistemas especialistas e sistemas baseados em conhecimento. Introdução às Tecnologias de suporte à decisão.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'ST680'],
			color: '#4673B9',
			obligatory: false
		},
		'TT060': {
			code: 'TT060',
			name: 'Gestão de Projetos',
			ementa: 'Conceitos de subprojeto, projeto, programa, portfólio e plano estratégico. Processos para gestão de projeto. Ferramentas para gestão de escopo, prazo, custo, qualidade, comunicação, risco, contratos, recursos humanos e integralização das atividades. Ciclos de vida de produto e de projeto. A cultura organizacional. Estrutura organizacional. A postura esperada de um gestor: acompanhamento (follow-up) e feedback.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#AE46B9',
			obligatory: false
		},
		'TT104': {
			code: 'TT104',
			name: 'Leitura e Redação de Textos Técnicos',
			ementa: 'Linguagem escrita e falada. Redação de textos técnicos. Elaboração de relatório.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#60B946',
			obligatory: false
		},
		'TT105': {
			code: 'TT105',
			name: 'Introdução às Ciências Humanas',
			ementa: 'Liberdade, igualdade, fraternidade. As promessas e os novos problemas trazidos pelo moderno. Modernidade e sociologia. A emergência do indivíduo moderno. A descoberta da sociedade. A cidade moderna e a pobreza. Classes sociais e conflito social. Tradição, valores e ordem moral. Ciência e desordem: crítica. Indagações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99446',
			obligatory: false
		},
		'TT302': {
			code: 'TT302',
			name: 'Circuitos Digitais',
			ementa: 'Sistemas de numeração; Portas lógicas e álgebra booleana; Circuitos lógicos combinacionais; Flip-Flops e dispositivos relacionados; Aritmética digital: Operações e circuitos; Famílias lógicas; Contadores e registradores; Contadores binários: tipos, divisor da frequência. Memórias: tipos, expansão, tempo de acesso. Conversores analógicos/digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946A4',
			obligatory: false
		},
		'TT401': {
			code: 'TT401',
			name: 'Microcontroladores',
			ementa: 'Arquitetura e princípios de operação de microcontroladores. Interfaces. Projeto com microcontroladores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#B946A4',
			obligatory: false
		}
	}
};

export default catalogue;
