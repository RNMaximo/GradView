const catalogue = {
	totalCredits: 204,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['SI100', 'SI101', 'SI102', 'SI120', 'ST008', 'TT106', 'TT120', 'TT350']
		},
		'sem-2': {
			id: '2',
			subjects: ['SI200', 'SI201', 'SI220', 'SI221', 'SI250', 'ST266', 'ST468']
		},
		'sem-3': {
			id: '3',
			subjects: ['SI300', 'SI304', 'SI350', 'ST211', 'ST567', 'ST568', 'TT304', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['SI305', 'SI400', 'SI401', 'SI450', 'ST562', 'ST767', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['SI405', 'TT060', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['SI910', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['SI700', 'SI701', 'SI702', 'SI703', 'SI704', 'SI911', 'SI912']
		},
		'sem-8': {
			id: '8',
			subjects: ['SI800', 'SI801', 'SI913', 'TT050']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 20,
			hasRestrictions: true,
			subjects: ['SI901', 'SI902', 'SI903', 'SI904', 'SI905', 'SI906', 'SI907', 'SI908', 'SI909'],
		},
		'elet-2': {
			credits: 2,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['SI010', 'SI011', 'SI202', 'SI302', 'SI404', 'SI420', 'SI500', 'SI501', 'SI502', 'ST048', 'ST049', 'ST050', 'ST052', 'ST053', 'ST054', 'ST060', 'ST061', 'ST062', 'ST066', 'ST067', 'ST094', 'ST096', 'ST099', 'ST113', 'ST115', 'ST566', 'ST680', 'TT001', 'TT002', 'TT003', 'TT004', 'TT005', 'TT006', 'TT007', 'TT008', 'TT012', 'TT013', 'TT220', 'TT302', 'TT401'],
		},
	},

	subjects: {
		'SI100': {
			code: 'SI100',
			name: 'Algoritmos e Programação de Computadores I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estrutura de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B040',
			obligatory: true
		},
		'SI101': {
			code: 'SI101',
			name: 'Fundamentos de Sistemas de Informação',
			ementa: 'Bases conceituais e filosóficas da área de Sistemas de Informação. Conceitos, objetivos, funções e componentes dos sistemas de informação. Dimensões tecnológica, organizacional e humana dos sistemas de informação. Tipos de sistemas de informação. Áreas de pesquisa em Sistemas de Informação. Conhecimento científico e metodologia de pesquisa em Sistemas de Informação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'SI102': {
			code: 'SI102',
			name: 'Seminários I',
			ementa: 'Participação em seminários de assuntos diversos cujo caráter prioritário é a introdução do discente à área de Computação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40CFD9',
			obligatory: true
		},
		'SI120': {
			code: 'SI120',
			name: 'Lógica Matemática',
			ementa: 'Lógica sentencial e de Primeira ordem. Sistemas dedutivos naturais e axiomáticos. Completeza, consistência e coerência. Formalização de problemas. Formalização de programas e sistemas de computação simples.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B0',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7ED940',
			obligatory: true
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4072D9',
			obligatory: true
		},
		'TT120': {
			code: 'TT120',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Funções. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#91D940',
			obligatory: true
		},
		'SI200': {
			code: 'SI200',
			name: 'Algoritmos e Programação de Computadores II',
			ementa: 'Alocação dinâmica de memória. Manipulação de arquivos. Bibliotecas estáticas e dinâmicas. Atividades práticas de implementação de programas, utilizando a Linguagem estudada em Algoritmos e Programação de Computadores I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#D9B040',
			obligatory: true
		},
		'SI201': {
			code: 'SI201',
			name: 'Estrutura de Dados I',
			ementa: 'Representação e Manipulação de Dados na Memória Interna do Computador: Tabelas, Listas, Árvores e Grafos. Algoritmos correspondentes de Busca, Inserção, Remoção e Percurso. Desenvolvimento de programas utilizando a linguagem estuda em Algoritmos e Programação de Computadores I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#D9B040',
			obligatory: true
		},
		'SI220': {
			code: 'SI220',
			name: 'Matemática Discreta',
			ementa: 'Conjuntos. Álgebra dos conjuntos. Relações. Funções. Estruturas algébricas. Reticulados. Álgebra Booleana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408B',
			obligatory: true
		},
		'SI221': {
			code: 'SI221',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaçoes Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940C3',
			obligatory: true
		},
		'SI250': {
			code: 'SI250',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT350'],
			color: '#91D940',
			obligatory: true
		},
		'ST266': {
			code: 'ST266',
			name: 'Engenharia de Software I',
			ementa: 'Produção de software. Paradigmas. Especificação de requisitos. Análise e projeto de software. Verificação e validação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SI100'],
			color: '#D9B040',
			obligatory: true
		},
		'ST468': {
			code: 'ST468',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97840',
			obligatory: true
		},
		'SI300': {
			code: 'SI300',
			name: 'Programação Orientada a Objetos I',
			ementa: 'Estudo do Paradigma de Programação Orientada a Objetos. Estudo de linguagem de programação orientada a objetos. Atividades práticas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#D9B040',
			obligatory: true
		},
		'SI304': {
			code: 'SI304',
			name: 'Engenharia de Software II',
			ementa: 'Modelagem para análise e projeto orientados a objetos. Fundamentos para o desenvolvimento de Interfaces. Garantia de Qualidade de Software - Teste e Validação. Tecnologias Emergentes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#D9B040',
			obligatory: true
		},
		'SI350': {
			code: 'SI350',
			name: 'Teoria Geral de Sistemas',
			ementa: 'A origem e o conceito da Teoria Geral de Sistemas. O conceito de sistema. Componentes genéricos de um sistema. As relações entre sistema e ambiente. Hierarquia de sistemas. Classificações dos sistemas. Enfoque sistêmico. O pensamento sistêmico aplicado na resolução de problemas. O pensamento sistêmico aplicado às organizações. Modelagem de Sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#91D940',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7E40D9',
			obligatory: true
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: '#D9B040',
			obligatory: true
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#4072D9',
			obligatory: true
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#4072D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#C9D940',
			obligatory: true
		},
		'SI305': {
			code: 'SI305',
			name: 'Análise de Sistemas de Informação I',
			ementa: 'Introdução ao Sistema de Informação. Conceitos Gerais de Sistemas de Informação. Ciclo de Vida de um Projeto de Sistemas. Viabilidade e Implementação de Sistemas. Análise de casos de uso. Análise orientada a objetos. Diagramas estáticos e dinâmicos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', 'TT106'],
			color: '#8D918D',
			obligatory: true
		},
		'SI400': {
			code: 'SI400',
			name: 'Programação Orientada a Objetos II',
			ementa: 'Estudo complementar do Paradigma de Programação Orientada a Objetos. Atividades práticas e supervisionadas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI300'],
			color: '#D9B040',
			obligatory: true
		},
		'SI401': {
			code: 'SI401',
			name: 'Programação para a Web',
			ementa: 'Elaboração de páginas web. Linguagens de marcação. Folhas de estilo. Javascript. Uso de linguagens de programação para geração dinâmica de páginas web. Uso de servidores web para armazenamento de sites. Atividades práticas de implementação de sistemas baseados nessas linguagens.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', '*SI201'],
			color: '#D9B040',
			obligatory: true
		},
		'SI450': {
			code: 'SI450',
			name: 'Administração da Produção',
			ementa: 'Sistemas de produção, ferramentas da produção enxuta e produção sustentável. Gestão da cadeia de suprimentos. Planejamento e coordenação de atividades em projetos. Indicadores de desempenho. Estratégia de produção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#91D940',
			obligatory: true
		},
		'ST562': {
			code: 'ST562',
			name: 'Estruturas de Arquivos',
			ementa: 'Dispositivos de armazenamento. Estrutura básica de armazenamento e Recuperação de Informação em Arquivos. Arquivos sequenciais, indexados e de acesso Hashing. Compressão de arquivos. Recuperação e segurança de arquivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: '#D9B040',
			obligatory: true
		},
		'ST767': {
			code: 'ST767',
			name: 'Banco de Dados II',
			ementa: 'Conceitos relacionados com a estrutura física dos bancos de dados. Linguagem de acesso a banco de dados. Ferramentas e técnicas utilizadas na implementação de sistemas de bancos de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: '#D9B040',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#B6D940',
			obligatory: true
		},
		'SI405': {
			code: 'SI405',
			name: 'Análise de Sistemas de Informação II',
			ementa: 'Assuntos complementares sobre o tema Análise de Sistemas de Informação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI305'],
			color: '#8D918D',
			obligatory: true
		},
		'TT060': {
			code: 'TT060',
			name: 'Gestão de Projetos',
			ementa: 'Conceitos de subprojeto, projeto, programa, portfólio e plano estratégico. Processos para gestão de projeto. Ferramentas para gestão de escopo, prazo, custo, qualidade, comunicação, risco, contratos, recursos humanos e integralização das atividades. Ciclos de vida de produto e de projeto. A cultura organizacional. Estrutura organizacional. A postura esperada de um gestor: acompanhamento (follow-up) e feedback.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#D9B040',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: '',
			color: '#D94078',
			obligatory: true
		},
		'SI910': {
			code: 'SI910',
			name: 'Estágio em Computação I',
			ementa: 'Estágio desenvolvido de acordo com regras internas da Faculdade de Tecnologia. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA465'],
			color: '#D99D40',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#4084D9',
			obligatory: true
		},
		'SI700': {
			code: 'SI700',
			name: 'Programação para Dispositivos Móveis',
			ementa: 'Estudo de linguagens de programação de alto nível apropriadas para criação de sistemas voltados para dispositivos móveis. Atividades práticas de implementação de sistemas para dispositivos móveis.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', '*SI201'],
			color: '#D9B040',
			obligatory: true
		},
		'SI701': {
			code: 'SI701',
			name: 'Introdução a Multimídia',
			ementa: 'Conceitos de multimídia e sistemas multimídia. Arquitetura e aplicações multimídia, classificação dos tipos de sistemas multimídias. Dispositivos de entrada e saída em ambientes multimídia. Fundamentos do processamento de imagens. Fundamentos de animação. Fundamentos de processamento de som. Critérios de seleção de soluções multimídia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#405FD9',
			obligatory: true
		},
		'SI702': {
			code: 'SI702',
			name: 'Inteligência Artificial',
			ementa: 'Fundamentos de IA. Agentes inteligentes. Representação de conhecimento e solução de problemas. Estruturas e estratégias de busca. Lógica matemática, representação e inferência. Sistemas baseados em regras. Inteligência computacional. Aplicações.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI120'],
			color: '#D940B0',
			obligatory: true
		},
		'SI703': {
			code: 'SI703',
			name: 'Governança e Planejamento Estratégico de TI',
			ementa: 'Evolução do uso da Informática na Organização. Recursos Humanos em Tecnologia da Informação. Relacionamento da Informática com o negócio: ambientes de tecnologia da informação, estados da administração, atitudes da alta gerência, função da informática na organização. Uso estratégico da tecnologia da informação. Modelo Genérico de Governança: Regulamentações e normas, alinhamento estratégico, planejamento de TI, Operações e Serviços, relacionamento com usuários e fornecedores e Segurança.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#91D940',
			obligatory: true
		},
		'SI704': {
			code: 'SI704',
			name: 'Seminários II',
			ementa: 'Participação em seminários de assuntos diversos visando complementação da formação do discente. Os seminários a serem ministrados abordarão prioritariamente pesquisas e trabalhos diversos em andamento, bem como opções de seguimento da carreira após a conclusão do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#404CD9',
			obligatory: true
		},
		'SI911': {
			code: 'SI911',
			name: 'Estágio em Computação II',
			ementa: 'Estágio desenvolvido de acordo com regras internas da Faculdade de Tecnologia. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['SI910'],
			color: '#D99D40',
			obligatory: true
		},
		'SI912': {
			code: 'SI912',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Definição de projeto e levantamento de revisão bibliográfica sobre o tema da monografia do trabalho de conclusão de curso, necessariamente relacionado a Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA465'],
			color: '#46D940',
			obligatory: true
		},
		'SI800': {
			code: 'SI800',
			name: 'Empreendedorismo e Inovação',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BD',
			obligatory: true
		},
		'SI801': {
			code: 'SI801',
			name: 'Introdução a Auditoria e Segurança de Sistemas',
			ementa: 'Conceitos e tipos de ameaças, riscos e vulnerabilidades dos sistemas de informação. Conceito e objetivos da segurança de informações. Planejamento, implementação e avaliação de políticas de segurança de informações. Conceito e objetivos da auditoria de sistemas de informação. Técnicas de auditoria em sistemas de informação. Softwares de auditoria. Estrutura da função de auditoria de sistemas de informação nas organizações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SI101'],
			color: '#6BD940',
			obligatory: true
		},
		'SI913': {
			code: 'SI913',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento e apresentação de monografia referente ao trabalho de conclusão de curso, na área de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['SI912'],
			color: '#46D940',
			obligatory: true
		},
		'TT050': {
			code: 'TT050',
			name: 'Sistemas de Apoio à Decisão',
			ementa: 'Teoria da decisão, modelos de decisão; modelagem qualitativa; árvores de decisão, agentes de decisão, análise multicritério; Processo cognitivo e tomada de decisão; Heuristicas de solução de problemas. Sistemas especialistas e sistemas baseados em conhecimento. Introdução às Tecnologias de suporte à decisão.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211'],
			color: '#7E40D9',
			obligatory: true
		},
		'SI010': {
			code: 'SI010',
			name: 'Estrutura de Dados II',
			ementa: 'Temas complementares em Estrutura de Dados. Atividades práticas de desenvolvimento e implementação de programas utilizando Estruturas de Dados.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI201'],
			color: '#D9B040',
			obligatory: false
		},
		'SI011': {
			code: 'SI011',
			name: 'Paradigmas de Linguagens de Programação',
			ementa: 'Paradigmas de linguagens de programação. Programação imperativa: não estruturada, estruturada e orientada a objetos. Programação declarativa: funcional e lógica. Desenvolvimento de programas utilizando os paradigmas estudados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SI100'],
			color: '#D9B040',
			obligatory: false
		},
		'SI202': {
			code: 'SI202',
			name: 'Resolução de Problemas I',
			ementa: 'Atividades práticas e supervisionadas de resolução de problemas diversos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI101'],
			color: '#6BD940',
			obligatory: false
		},
		'SI302': {
			code: 'SI302',
			name: 'Resolução de Problemas II',
			ementa: 'Atividades práticas e supervisionadas de resolução de problemas diversos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI101', '*SI201'],
			color: '#A2C540',
			obligatory: false
		},
		'SI404': {
			code: 'SI404',
			name: 'Introdução a Interfaces Humano-Computador',
			ementa: 'Construção e Avaliação de Interfaces Humano-Computador. Aspectos Humanos e Tecnológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST266'],
			color: '#D9B040',
			obligatory: false
		},
		'SI420': {
			code: 'SI420',
			name: 'Introdução a Algoritmos em Grafos',
			ementa: 'Conceito, representação e aplicação de grafos. Operações sobre grafos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA425'],
			color: '#40AAD9',
			obligatory: false
		},
		'SI500': {
			code: 'SI500',
			name: 'Complexidade de Algoritmos',
			ementa: 'Desenvolvimento de algoritmos. Técnicas de projeto de algoritmos eficientes. Análise assintótica de limites de complexidade. Técnicas de prova de cotas inferiores. Exemplos de análise de algoritmos iterativos e recursivos. Programação dinâmica. Algoritmos probabilísticos. Complexidade Pessimista, Complexidade Média, Complexidade Mínima do problema, Classes de problemas: P, NP, NP-Completa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: '#D9B040',
			obligatory: false
		},
		'SI501': {
			code: 'SI501',
			name: 'Redes de Comunicação II',
			ementa: 'Protocolos para interconexão de redes. Arquiteturas e Protocolos para comunicação sem fio. Gerência de redes. Introdução a redes móveis e ópticas. Comunicação multimídia. Modelos de tráfego. Atividades práticas e supervisionadas de desenvolvimento de protocolos de comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['ST568'],
			color: '#4072D9',
			obligatory: false
		},
		'SI502': {
			code: 'SI502',
			name: 'Projeto Integrador',
			ementa: 'Atividades práticas e supervisionadas de planejamento e execução de projeto que integre os conteúdos de diversas disciplinas do curso.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI201', 'SI300', 'ST767', 'SI304', 'SI404', 'SI305', 'TT060'],
			color: '#CEAC4B',
			obligatory: false
		},
		'SI901': {
			code: 'SI901',
			name: 'Iniciação Científica I',
			ementa: 'Atividades de Iniciação Científica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#40D997',
			obligatory: false
		},
		'SI902': {
			code: 'SI902',
			name: 'Iniciação Científica II',
			ementa: 'Atividades de Iniciação Científica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200', 'SI901'],
			color: '#40D997',
			obligatory: false
		},
		'SI903': {
			code: 'SI903',
			name: 'Iniciação Tecnológica I',
			ementa: 'Atividades de Iniciação Tecnológica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#D96540',
			obligatory: false
		},
		'SI904': {
			code: 'SI904',
			name: 'Iniciação Tecnológica II',
			ementa: 'Atividades de Iniciação Tecnológica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200', 'SI903'],
			color: '#D96540',
			obligatory: false
		},
		'SI905': {
			code: 'SI905',
			name: 'Monitoria I',
			ementa: 'Participação em atividades de monitoria, sob orientação de docente responsável pela disciplina em que o discente irá atuar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:4, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200', 'AA410'],
			color: '#9140D9',
			obligatory: false
		},
		'SI906': {
			code: 'SI906',
			name: 'Monitoria II',
			ementa: 'Participação em atividades de monitoria, sob orientação de docente responsável pela disciplina em que o discente irá atuar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:4, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200', 'AA410', 'SI905'],
			color: '#9140D9',
			obligatory: false
		},
		'SI907': {
			code: 'SI907',
			name: 'Intercâmbio Acadêmico I',
			ementa: 'Participação em Intercâmbio Acadêmico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200', 'AA435'],
			color: '#40D95F',
			obligatory: false
		},
		'SI908': {
			code: 'SI908',
			name: 'Intercâmbio Acadêmico II',
			ementa: 'Participação em Intercâmbio Acadêmico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200', 'AA435', 'SI907'],
			color: '#40D95F',
			obligatory: false
		},
		'SI909': {
			code: 'SI909',
			name: 'Atividades Complementares',
			ementa: 'Participação em Atividades Complementares. A matrícula nesta disciplina será autorizada pela Coordenação do Curso mediante apresentação de documentos comprobatórios da execução de atividades complementares por parte do aluno, de acordo com regras internas do curso, visando a contabilização, em créditos, das atividades efetuadas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:8, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#C940D9',
			obligatory: false
		},
		'ST048': {
			code: 'ST048',
			name: 'Compiladores',
			ementa: 'Teoria de linguagens. Análise léxica e sintática. Geração e otimização de código. Análise semântica. Aspectos e ferramentas para construção de compiladores.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT304'],
			color: '#4072D9',
			obligatory: false
		},
		'ST049': {
			code: 'ST049',
			name: 'Sistemas Distribuídos',
			ementa: 'Coordenação, sincronização e comunicação entre processos. Sistemas operacionais distribuídos: Sistemas de arquivos, Servidores de nomes, Memória compartilhada. Segurança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568', 'TT304'],
			color: '#4072D9',
			obligatory: false
		},
		'ST050': {
			code: 'ST050',
			name: 'Tópicos Avançados em Redes',
			ementa: 'Disciplina de ementa aberta.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568'],
			color: '#4072D9',
			obligatory: false
		},
		'ST052': {
			code: 'ST052',
			name: 'Introdução ao Processamento Discreto de Sinais',
			ementa: 'Sinais e Sistemas Discretos no Tempo. Amostragem de Sinais Contínuos no Tempo. Transformada de Fourier Discreta. Computação e Análise de Sinais usando Transformada de Fourier Discreta.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D94C',
			obligatory: false
		},
		'ST053': {
			code: 'ST053',
			name: 'Tópicos em Modelagem Computacional',
			ementa: 'Aplicações computacionais na resolução de problemas de diferentes naturezas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#59D940',
			obligatory: false
		},
		'ST054': {
			code: 'ST054',
			name: 'Protocolos de Comunicação e Redes',
			ementa: 'Protocolos adaptativos. Protocolos de sinalização. Implementação de protocolos de comunicação. Máquinas de estado dirigidas por eventos. Modelos de tráfego em redes. Simulações e emulações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST568'],
			color: '#4072D9',
			obligatory: false
		},
		'ST060': {
			code: 'ST060',
			name: 'Tópicos Avançados em Banco de Dados',
			ementa: 'Problemas de Segurança. Recuperação de Falhas e Controle de Concorrência em banco de Dados. Conceito de Banco de Dados Distribuídos. Bancos de Dados OO e Banco de Dados Multimídia.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: '#D9B040',
			obligatory: false
		},
		'ST061': {
			code: 'ST061',
			name: 'Tópicos Avançados em Programação',
			ementa: 'Estudo de Assuntos Avançados em Programação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5940D9',
			obligatory: false
		},
		'ST062': {
			code: 'ST062',
			name: 'Engenharia de Software III',
			ementa: 'Aplicação de técnicas de engenharia de software em um ambiente simulado para o desenvolvimento, validação e verificação de sistemas de software.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4640D9',
			obligatory: false
		},
		'ST066': {
			code: 'ST066',
			name: 'Tópicos Avançados em Arquitetura de Computadores',
			ementa: 'Tópicos de organização e arquitetura. Máquinas multinível. Máquinas risc. Arquitetura paralela. Arquiteturas avançadas e alternativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#4072D9',
			obligatory: false
		},
		'ST067': {
			code: 'ST067',
			name: 'Tópicos Especiais em Informática',
			ementa: 'Estudo de Assuntos Especiais de Informática de acordo com a Evolução Tecnológica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A440D9',
			obligatory: false
		},
		'ST094': {
			code: 'ST094',
			name: 'Introdução às Telecomunicações',
			ementa: 'Sistemas de comunicação. Propagação de ondas eletromagnéticas. Eletrônica básica para telecomunicações: amplificadores, osciladores, filtros e casamento de impedâncias. Modulação em amplitude e frequência. Modulação chaveada. Rádio digital. Telefonia celular. Comunicação por satélites. Transmissão digital. Transmissão por fibras ópticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D972',
			obligatory: false
		},
		'ST096': {
			code: 'ST096',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Estudo de aspectos das relações entre ciência, tecnologia e sociedade ao longo da história, com ênfase na atualidade; análise de valores e ideologias envolvendo a produção e divulgação da ciência e da tecnologia; diferentes concepções de ciência, técnica e tecnologia e de suas relações; a participação pública na produção e nos debates envolvendo simultaneamente questões científicas, técnicas, tecnológicas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#40D984',
			obligatory: false
		},
		'ST099': {
			code: 'ST099',
			name: 'Autômatos',
			ementa: 'Revisão de Conceitos Básicos. Alfabetos e linguagens. Autômatos Finitos. Linguagens Regulares. Linguagens Livres de Contexto. Linguagens Recursivas e Linguagem Recursivamente Enumeráveis. Computabilidade e Decidibilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9CF',
			obligatory: false
		},
		'ST113': {
			code: 'ST113',
			name: 'Fundamentos de Eletricidade',
			ementa: 'Conceitos de Eletrostática. Conceitos de Eletrodinâmica. Medições Elétricas. Instalações Elétricas. Normas para Instalações Elétricas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D640',
			obligatory: false
		},
		'ST115': {
			code: 'ST115',
			name: 'Processamento de Imagens',
			ementa: 'Conceitos básicos de imagens digitais; representação de imagens; histograma; rotulação e filtragem; segmentação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94052',
			obligatory: false
		},
		'ST566': {
			code: 'ST566',
			name: 'Tópicos em Desenvolvimento Tecnológico',
			ementa: 'Estudos de assuntos ligados a informática de acordo com os avanços da tecnologia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#D940D6',
			obligatory: false
		},
		'ST680': {
			code: 'ST680',
			name: 'Pesquisa Operacional',
			ementa: 'Problema Padrão da Programação Linear. Métodos Simplex. Teoria do Estoque. Teoria das Filas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST468'],
			color: '#D97840',
			obligatory: false
		},
		'TT001': {
			code: 'TT001',
			name: 'Tópicos em Computação e Informática I',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA425'],
			color: '#6B40D9',
			obligatory: false
		},
		'TT002': {
			code: 'TT002',
			name: 'Tópicos em Computação e Informática II',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#D95240',
			obligatory: false
		},
		'TT003': {
			code: 'TT003',
			name: 'Tópicos em Computação e Informática III',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D94065',
			obligatory: false
		},
		'TT004': {
			code: 'TT004',
			name: 'Tópicos em Computação e Informática IV',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D9409D',
			obligatory: false
		},
		'TT005': {
			code: 'TT005',
			name: 'Tópicos Especiais em Telecomunicações I',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B640D9',
			obligatory: false
		},
		'TT006': {
			code: 'TT006',
			name: 'Tópicos Especiais em Telecomunicações II',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40BDD9',
			obligatory: false
		},
		'TT007': {
			code: 'TT007',
			name: 'Tópicos Especiais em Telecomunicações III',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D9C340',
			obligatory: false
		},
		'TT008': {
			code: 'TT008',
			name: 'Tópicos Especiais em Telecomunicações IV',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A4D940',
			obligatory: false
		},
		'TT012': {
			code: 'TT012',
			name: 'Grafos',
			ementa: 'Conceito, representação e aplicação de grafos. Operações sobre grafos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA425'],
			color: '#4097D9',
			obligatory: false
		},
		'TT013': {
			code: 'TT013',
			name: 'Redes Complexas',
			ementa: 'Redes complexas: introdução, exemplos. Redes complexas em sistemas naturais e construídos pelo ser humano. Modelagem e representação de redes complexas. Modelos estáticos e de crescimento. Caracterização e medidas de redes complexas. Operação, falhas, falhas em cascata, ataques e dinâmica de redes complexas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D98B40',
			obligatory: false
		},
		'TT220': {
			code: 'TT220',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Derivadas e diferenciais. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes. Séries numéricas e séries de funções. Série de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT120'],
			color: '#D94040',
			obligatory: false
		},
		'TT302': {
			code: 'TT302',
			name: 'Circuitos Digitais',
			ementa: 'Sistemas de numeração; Portas lógicas e álgebra booleana; Circuitos lógicos combinacionais; Flip-Flops e dispositivos relacionados; Aritmética digital: Operações e circuitos; Famílias lógicas; Contadores e registradores; Contadores binários: tipos, divisor da frequência. Memórias: tipos, expansão, tempo de acesso. Conversores analógicos/digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AA',
			obligatory: false
		},
		'TT401': {
			code: 'TT401',
			name: 'Microcontroladores',
			ementa: 'Arquitetura e princípios de operação de microcontroladores. Interfaces. Projeto com microcontroladores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#40D9AA',
			obligatory: false
		}
	}
};

export default catalogue;
