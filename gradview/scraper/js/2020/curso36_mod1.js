const catalogue = {
	totalCredits: 146,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EB101', 'SI100', 'SI102', 'TT106', 'TT350']
		},
		'sem-2': {
			id: '2',
			subjects: ['SI200', 'SI202', 'SI305', 'ST008', 'ST266', 'TT304']
		},
		'sem-3': {
			id: '3',
			subjects: ['EB102', 'SI300', 'SI304', 'SI404', 'ST567']
		},
		'sem-4': {
			id: '4',
			subjects: ['SI201', 'SI400', 'SI401', 'ST096', 'ST767']
		},
		'sem-5': {
			id: '5',
			subjects: ['SI405', 'SI703', 'SI704', 'ST568', 'ST765', 'TT060']
		},
		'sem-6': {
			id: '6',
			subjects: ['SI010', 'SI700', 'SI800', 'ST562', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['SI918', 'ELET07']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['SI912', 'SI913', 'SI917'],
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
			color: '#57D940',
			obligatory: true
		},
		'SI100': {
			code: 'SI100',
			name: 'Algoritmos e Programação de Computadores I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estrutura de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Alocação dinâmica de memória. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9E40D9',
			obligatory: true
		},
		'SI102': {
			code: 'SI102',
			name: 'Seminários I',
			ementa: 'Participação em seminários de assuntos diversos cujo caráter prioritário é a introdução do discente à área de Computação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9CD40',
			obligatory: true
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9ED940',
			obligatory: true
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B5',
			obligatory: true
		},
		'SI200': {
			code: 'SI200',
			name: 'Algoritmos e Programação de Computadores II',
			ementa: 'Recursividade. Manipulação de arquivos. Bibliotecas estáticas e dinâmicas. Desenvolvimento de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI202': {
			code: 'SI202',
			name: 'Resolução de Problemas I',
			ementa: 'Atividades práticas e supervisionadas de resolução de problemas diversos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI305': {
			code: 'SI305',
			name: 'Análise de Sistemas de Informação I',
			ementa: 'Introdução ao Sistema de Informação. Conceitos Gerais de Sistemas de Informação. Ciclo de Vida de um Projeto de Sistemas. Viabilidade e Implementação de Sistemas. Análise de casos de uso. Análise orientada a objetos. Diagramas estáticos e dinâmicos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940CD',
			obligatory: true
		},
		'ST266': {
			code: 'ST266',
			name: 'Engenharia de Software I',
			ementa: 'Produção de software. Paradigmas. Especificação de requisitos. Análise e projeto de software. Verificação e validação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#9ED940',
			obligatory: true
		},
		'EB102': {
			code: 'EB102',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40B5D9',
			obligatory: true
		},
		'SI300': {
			code: 'SI300',
			name: 'Programação Orientada a Objetos I',
			ementa: 'Estudo do Paradigma de Programação Orientada a Objetos. Estudo de linguagem de programação orientada a objetos. Atividades práticas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI304': {
			code: 'SI304',
			name: 'Engenharia de Software II',
			ementa: 'Modelagem para análise e projeto orientados a objetos. Garantia de Qualidade de Software - Teste e Validação. Tecnologias Emergentes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI404': {
			code: 'SI404',
			name: 'Introdução a Interfaces Humano-Computador',
			ementa: 'Construção e Avaliação de Interfaces Humano-Computador. Aspectos Humanos e Tecnológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST266'],
			color: '#9E40D9',
			obligatory: true
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI201': {
			code: 'SI201',
			name: 'Estrutura de Dados I',
			ementa: 'Representação e Manipulação de Dados na Memória Interna do Computador: Tabelas, Listas, Árvores. Algoritmos correspondentes de Busca, Inserção, Remoção e Percurso. Desenvolvimento de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI400': {
			code: 'SI400',
			name: 'Programação Orientada a Objetos II',
			ementa: 'Estudo complementar do Paradigma de Programação Orientada a Objetos. Atividades práticas e supervisionadas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI300'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI401': {
			code: 'SI401',
			name: 'Programação para a Web',
			ementa: 'Elaboração de páginas web. Linguagens de marcação. Folhas de estilo. Javascript. Uso de linguagens de programação para geração dinâmica de páginas web. Uso de servidores web para armazenamento de sites. Atividades práticas de implementação de sistemas baseados nessas linguagens.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300'],
			color: '#9E40D9',
			obligatory: true
		},
		'ST096': {
			code: 'ST096',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Estudo de aspectos das relações entre ciência, tecnologia e sociedade ao longo da história, com ênfase na atualidade; análise de valores e ideologias envolvendo a produção e divulgação da ciência e da tecnologia; diferentes concepções de ciência, técnica e tecnologia e de suas relações; a participação pública na produção e nos debates envolvendo simultaneamente questões científicas, técnicas, tecnológicas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#40D96F',
			obligatory: true
		},
		'ST767': {
			code: 'ST767',
			name: 'Banco de Dados II',
			ementa: 'Conceitos relacionados com a estrutura física dos bancos de dados. Linguagem de acesso a banco de dados. Ferramentas e técnicas utilizadas na implementação de sistemas de bancos de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI405': {
			code: 'SI405',
			name: 'Análise de Sistemas de Informação II',
			ementa: 'Assuntos complementares sobre o tema Análise de Sistemas de Informação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI305'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI703': {
			code: 'SI703',
			name: 'Governança e Planejamento Estratégico de TI',
			ementa: 'Evolução do uso da Informática na Organização. Recursos Humanos em Tecnologia da Informação. Relacionamento da Informática com o negócio: ambientes de tecnologia da informação, estados da administração, atitudes da alta gerência, função da informática na organização. Uso estratégico da tecnologia da informação. Modelo Genérico de Governança: Regulamentações e normas, alinhamento estratégico, planejamento de TI, Operações e Serviços, relacionamento com usuários e fornecedores e Segurança.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#40D9B5',
			obligatory: true
		},
		'SI704': {
			code: 'SI704',
			name: 'Seminários II',
			ementa: 'Participação em seminários de assuntos diversos visando complementação da formação do discente. Os seminários a serem ministrados abordarão prioritariamente pesquisas e trabalhos diversos em andamento, bem como opções de seguimento da carreira após a conclusão do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#406FD9',
			obligatory: true
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#9ED940',
			obligatory: true
		},
		'ST765': {
			code: 'ST765',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos em Computação Gráfica; Sistemas e dispositivos gráficos; áreas de processamento Digital de Imagens; sistema de cor; desenho de linhas e círculos; algoritmos de preenchimento de regiões; transformações geométricas 2D e 3D; projeções perspectivas e ortográficas; renderização: iluminação e textura.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB102', 'SI201'],
			color: '#6F7BD9',
			obligatory: true
		},
		'TT060': {
			code: 'TT060',
			name: 'Gestão de Projetos',
			ementa: 'Conceitos de subprojeto, projeto, programa, portfólio e plano estratégico. Processos para gestão de projeto. Ferramentas para gestão de escopo, prazo, custo, qualidade, comunicação, risco, contratos, recursos humanos e integralização das atividades. Ciclos de vida de produto e de projeto. A cultura organizacional. Estrutura organizacional. A postura esperada de um gestor: acompanhamento (follow-up) e feedback.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI010': {
			code: 'SI010',
			name: 'Estrutura de Dados II',
			ementa: 'Temas complementares em Estrutura de Dados. Atividades práticas de desenvolvimento e implementação de programas e projetos utilizando Estruturas de Dados sob orientação docente.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI201'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI700': {
			code: 'SI700',
			name: 'Programação para Dispositivos Móveis',
			ementa: 'Estudo de linguagens de programação de alto nível apropriadas para criação de sistemas voltados para dispositivos móveis. Atividades práticas de implementação de sistemas para dispositivos móveis.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*SI201', 'SI400'],
			color: '#9E40D9',
			obligatory: true
		},
		'SI800': {
			code: 'SI800',
			name: 'Empreendedorismo e Inovação',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D94040',
			obligatory: true
		},
		'ST562': {
			code: 'ST562',
			name: 'Estruturas de Arquivos',
			ementa: 'Dispositivos de armazenamento. Estrutura básica de armazenamento e Recuperação de Informação em Arquivos. Arquivos sequenciais, indexados e de acesso Hashing. Compressão de arquivos. Recuperação e segurança de arquivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: '#9E40D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'SI918': {
			code: 'SI918',
			name: 'Atividades Complementares',
			ementa: 'Participação em Atividades Complementares. A aprovação nesta disciplina dependerá da apresentação de documentos comprobatórios da execução de atividades complementares por parte do aluno, de acordo com regras internas do curso, visando a contabilização, em créditos, das atividades efetuadas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:14, D:0, HS:16, SL:0, C:16},
			requisitos: ['AA465'],
			color: '#5740D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'SI912': {
			code: 'SI912',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Definição de projeto e levantamento de revisão bibliográfica sobre o tema da monografia do trabalho de conclusão de curso, necessariamente relacionado a Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA465'],
			color: '#D94086',
			obligatory: false
		},
		'SI913': {
			code: 'SI913',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento e apresentação de monografia referente ao trabalho de conclusão de curso, na área de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['SI912'],
			color: '#D94086',
			obligatory: false
		},
		'SI917': {
			code: 'SI917',
			name: 'Estágio em Computação',
			ementa: 'Estágio desenvolvido de acordo com as regras inernas da Faculdade de Tecnologia.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA465'],
			color: '#D98640',
			obligatory: false
		}
	}
};

export default catalogue;
