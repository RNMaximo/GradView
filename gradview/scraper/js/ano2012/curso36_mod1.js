const catalogue = {
	totalCredits: 160,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST008', 'ST161', 'ST164', 'ST264', 'TT120', 'TT130']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST265', 'ST266', 'TT102', 'TT106', 'TT220']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST211', 'ST363', 'ST364', 'ST366', 'TT350']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST463', 'ST464', 'ST468', 'TT202', 'TT304', 'ELET2']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST118', 'ST562', 'ST567', 'ST568', 'TT550']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST119', 'ST662', 'ST668', 'ST670', 'ST680', 'ELET4']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST566', 'ST762', 'ST765', 'ST767', 'ELET4']
		},
		'sem-8': {
			id: '8',
			subjects: ['ST120', 'ST880', 'TT801', 'ELET14']
		}
	},

	subjects: {
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST161': {
			code: 'ST161',
			name: 'Introdução à Lógica',
			ementa: 'Cálculo Proposicional. Teoria dos Conjuntos. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Mapas de Karnaugh.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST164': {
			code: 'ST164',
			name: 'Elementos Básicos de Computação',
			ementa: 'Histórico do computador. Partes componentes de um computador. Introdução à informática. Sistemas numéricos. Noções de sistemas operacionais, compiladores, interpretadores, bancos de dados, redes e internet.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST264': {
			code: 'ST264',
			name: 'Inglês para Informática',
			ementa: 'Compreensão e Interpretação de Textos Gerais e Técnicos. Tradução de textos de caráter eminentemente técnico.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT120': {
			code: 'TT120',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Funções. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'TT130': {
			code: 'TT130',
			name: 'Linguagem e Técnica de Programação I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estruturas de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST265': {
			code: 'ST265',
			name: 'Laboratório de Programação I',
			ementa: 'Alocação dinâmica de memória. Manipulação de arquivos. Implementação de programas utilizando a Linguagem estudada em Linguagem e Técnicas de Programação I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT130']
		},
		'ST266': {
			code: 'ST266',
			name: 'Engenharia de Software I',
			ementa: 'Produção de software. Paradigmas. Especificação de requisitos. Análise e projeto de software. Verificação e validação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT130']
		},
		'TT102': {
			code: 'TT102',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores. Operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, intersecções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Secções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Noções básicas sobre circuitos lógicos. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT220': {
			code: 'TT220',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Derivadas e diferenciais. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes. Séries numéricas e séries de funções. Série de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT120']
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST363': {
			code: 'ST363',
			name: 'Linguagem e Técnica de Programação II',
			ementa: 'Estudo e desenvolvimento em uma linguagem de programação Orientada a Objetos. Técnicas de depuração e documentação de programas.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT103']
		},
		'ST364': {
			code: 'ST364',
			name: 'Estruturas de Dados',
			ementa: 'Representação e Manipulação de Dados na Memória Interna do Computador: Tabelas, Listas, Árvores e Grafos. Algoritmos correspondentes de Busca, Inserção, Remoção e Percurso. Desenvolvimento de programas utilizando a linguagem estudada em Laboratório de Programação I.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST263/*ST265']
		},
		'ST366': {
			code: 'ST366',
			name: 'Engenharia de Software II',
			ementa: 'Conceitos de análise e projeto orientados a objetos. Interfaces. Linguagem de modelagem. Testes. Desenvolvimento de software utilizando aspectos estudados em Engenharia de Software I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266']
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST463': {
			code: 'ST463',
			name: 'Laboratório de Programação II',
			ementa: 'Desenvolvimento e Implementação de Programas na Linguagem de Programação Estudada em Linguagem e Técnicas de Programação II.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363']
		},
		'ST464': {
			code: 'ST464',
			name: 'Laboratório de Estruturas de Dados',
			ementa: 'Desenvolvimento e Implementação de Programas utilizando Estruturas de Dados.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364']
		},
		'ST468': {
			code: 'ST468',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT202': {
			code: 'TT202',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Autovalores e autovetores. Produto interno. Diagonalização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT102']
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'ST118': {
			code: 'ST118',
			name: 'Análise de Sistemas de Informação I',
			ementa: 'Introdução ao Sistema de Informação. Conceitos Gerais de Sistemas de Informação. Ciclo de Vida de um Projeto de Sistemas. Viabilidade e Implementação de Sistemas. Ferramentas da Análise Estruturada. Diagramas de Fluxo de Dados. Dicionário de Dados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST265', 'TT106']
		},
		'ST562': {
			code: 'ST562',
			name: 'Estruturas de Arquivos',
			ementa: 'Dispositivos de armazenamento. Estrutura básica de armazenamento e Recuperação de Informação em Arquivos. Arquivos sequenciais, indexados e de acesso Hashing. Compressão de arquivos. Recuperação e segurança de arquivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364']
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363']
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106']
		},
		'TT550': {
			code: 'TT550',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST119': {
			code: 'ST119',
			name: 'Análise de Sistemas de Informação II',
			ementa: 'Análise de casos de uso. Análise orientada a objetos. Diagramas estáticos e dinâmicos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST118']
		},
		'ST662': {
			code: 'ST662',
			name: 'Linguagem e Técnicas de Programação III',
			ementa: 'Estudo e Técnicas Avançadas de Programação e desenvolvimento de uma Linguagem de Programação de Alto Nível.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363', 'ST364']
		},
		'ST668': {
			code: 'ST668',
			name: 'Redes de Comunicação II',
			ementa: 'Protocolos para interconexão de redes. Arquiteturas e Protocolos para comunicação sem fio. Gerência de redes. Introdução a redes móveis e ópticas. Comunicação multimídia. Modelos de tráfego. Desenvolvimento de protocolos de comunicação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568']
		},
		'ST670': {
			code: 'ST670',
			name: 'Tópicos em Programação WEB',
			ementa: 'Estudo de assuntos em programação web. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST363']
		},
		'ST680': {
			code: 'ST680',
			name: 'Pesquisa Operacional',
			ementa: 'Problema Padrão da Programação Linear. Métodos Simplex. Teoria do Estoque. Teoria das Filas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST468']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'ST566': {
			code: 'ST566',
			name: 'Tópicos em Desenvolvimento Tecnológico',
			ementa: 'Estudos de assuntos ligados a informática de acordo com os avanços da tecnologia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450']
		},
		'ST762': {
			code: 'ST762',
			name: 'Laboratório de Programação III',
			ementa: 'Desenvolvimento de Programas Utilizando Linguagem de Programação Estudada em Linguagem e Técnicas de Programação III.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST662']
		},
		'ST765': {
			code: 'ST765',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos em Computação Gráfica; Sistemas e dispositivos gráficos; áreas de processamento Digital de Imagens; sistema de cor; desenho de linhas e círculos; algoritmos de preenchimento de regiões; transformações geométricas 2D e 3D; projeções perspectivas e ortográficas; renderização: iluminação e textura.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST364', 'TT102']
		},
		'ST767': {
			code: 'ST767',
			name: 'Banco de Dados II',
			ementa: 'Conceitos relacionados com a estrutura física dos bancos de dados. Linguagem de acesso a banco de dados. Ferramentas e técnicas utilizadas na implementação de sistemas de bancos de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'ST120': {
			code: 'ST120',
			name: 'Administração de Informática',
			ementa: 'Evolução do uso da Informática na Organização. Recursos Humanos em Tecnologia da Informação. Relacionamento da Informática com o negócio: ambientes de tecnologia da informação, estados da administração, atitudes da alta gerência, função da informática na organização. Uso estratégico da tecnologia da informação. Modelo Genérico de Governança: Regulamentações e normas, alinhamento estratégico, planejamento de TI, Operações e Serviços, relacionamento com usuários e fornecedores e Segurança.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350']
		},
		'ST880': {
			code: 'ST880',
			name: 'Administração da Produção para Tecnologia da Informação',
			ementa: 'Sistemas de produção, ferramentas da produção enxuta e produção sustentável. Gestão da cadeia de suprimentos. Planejamento e coordenação de atividades em projetos. Indicadores de desempenho. Estratégia de produção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350']
		},
		'TT801': {
			code: 'TT801',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ELET14': {
			code: 'ELET14',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:14, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: ''
		}
	}
};

export default catalogue;
