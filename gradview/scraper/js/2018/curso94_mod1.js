const catalogue = {
	totalCredits: 204,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EB101', 'SI100', 'SI101', 'SI102', 'SI120', 'ST008', 'TT106', 'TT350']
		},
		'sem-2': {
			id: '2',
			subjects: ['EB102', 'SI200', 'SI201', 'SI220', 'SI250', 'ST266', 'ST468']
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
			subjects: ['SI404', 'SI405', 'TT060', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['SI800', 'SI801', 'TT050', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['SI700', 'SI701', 'SI702', 'SI703', 'SI704', 'SI912']
		},
		'sem-8': {
			id: '8',
			subjects: ['SI913', 'SI916']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 20,
			hasRestrictions: true,
			subjects: ['SI901', 'SI902', 'SI903', 'SI904', 'SI905', 'SI906', 'SI909'],
		},
		'elet-2': {
			credits: 16,
			hasRestrictions: false,
			subjects: [],
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
			color: '#8CD940',
			obligatory: true
		},
		'SI100': {
			code: 'SI100',
			name: 'Algoritmos e Programação de Computadores I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estrutura de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Alocação dinâmica de memória. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B3',
			obligatory: true
		},
		'SI101': {
			code: 'SI101',
			name: 'Fundamentos de Sistemas de Informação',
			ementa: 'Bases conceituais e filosóficas da área de Sistemas de Informação. Conceitos, objetivos, funções e componentes dos sistemas de informação. Dimensões tecnológica, organizacional e humana dos sistemas de informação. Tipos de sistemas de informação. Áreas de pesquisa em Sistemas de Informação. Conhecimento científico e metodologia de pesquisa em Sistemas de Informação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94066',
			obligatory: true
		},
		'SI102': {
			code: 'SI102',
			name: 'Seminários I',
			ementa: 'Participação em seminários de assuntos diversos cujo caráter prioritário é a introdução do discente à área de Computação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#66D940',
			obligatory: true
		},
		'SI120': {
			code: 'SI120',
			name: 'Lógica Matemática',
			ementa: 'Lógica Proposicional e de Quantificadores. Sistemas dedutivos naturais, axiomáticos e tableaux analíticos. Consistência, Compacidade, Completude e Correção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B3D940',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98C40',
			obligatory: true
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96640',
			obligatory: true
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'EB102': {
			code: 'EB102',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#8C40D9',
			obligatory: true
		},
		'SI200': {
			code: 'SI200',
			name: 'Algoritmos e Programação de Computadores II',
			ementa: 'Recursividade. Manipulação de arquivos. Bibliotecas estáticas e dinâmicas. Atividades práticas de implementação de programas, utilizando a Linguagem estudada em Algoritmos e Programação de Computadores I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI201': {
			code: 'SI201',
			name: 'Estrutura de Dados I',
			ementa: 'Representação e Manipulação de Dados na Memória Interna do Computador: Tabelas, Listas, Árvores. Algoritmos correspondentes de Busca, Inserção, Remoção e Percurso. Desenvolvimento de programas utilizando a linguagem estudada em Algoritmos e Programação de Computadores I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI220': {
			code: 'SI220',
			name: 'Matemática Discreta',
			ementa: 'Conjuntos. Álgebra dos conjuntos. Relações. Funções. Estruturas algébricas. Reticulados. Álgebra Booleana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'SI250': {
			code: 'SI250',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B3D9',
			obligatory: true
		},
		'ST266': {
			code: 'ST266',
			name: 'Engenharia de Software I',
			ementa: 'Produção de software. Paradigmas. Especificação de requisitos. Análise e projeto de software. Verificação e validação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SI100'],
			color: '#40D9B3',
			obligatory: true
		},
		'ST468': {
			code: 'ST468',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D966',
			obligatory: true
		},
		'SI300': {
			code: 'SI300',
			name: 'Programação Orientada a Objetos I',
			ementa: 'Estudo do Paradigma de Programação Orientada a Objetos. Estudo de linguagem de programação orientada a objetos. Atividades práticas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI304': {
			code: 'SI304',
			name: 'Engenharia de Software II',
			ementa: 'Modelagem para análise e projeto orientados a objetos. Garantia de Qualidade de Software - Teste e Validação. Tecnologias Emergentes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI350': {
			code: 'SI350',
			name: 'Teoria Geral de Sistemas',
			ementa: 'A origem e o conceito da Teoria Geral de Sistemas. O conceito de sistema. Componentes genéricos de um sistema. As relações entre sistema e ambiente. Hierarquia de sistemas. Classificações dos sistemas. Enfoque sistêmico. O pensamento sistêmico aplicado na resolução de problemas. O pensamento sistêmico aplicado às organizações. Modelagem de Sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#40D940',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4066D9',
			obligatory: true
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: '#40D9B3',
			obligatory: true
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#D96640',
			obligatory: true
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#D96640',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'SI305': {
			code: 'SI305',
			name: 'Análise de Sistemas de Informação I',
			ementa: 'Introdução ao Sistema de Informação. Conceitos Gerais de Sistemas de Informação. Ciclo de Vida de um Projeto de Sistemas. Viabilidade e Implementação de Sistemas. Análise de casos de uso. Análise orientada a objetos. Diagramas estáticos e dinâmicos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', 'TT106'],
			color: '#8DA07A',
			obligatory: true
		},
		'SI400': {
			code: 'SI400',
			name: 'Programação Orientada a Objetos II',
			ementa: 'Estudo complementar do Paradigma de Programação Orientada a Objetos. Atividades práticas e supervisionadas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI300'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI401': {
			code: 'SI401',
			name: 'Programação para a Web',
			ementa: 'Elaboração de páginas web. Linguagens de marcação. Folhas de estilo. Javascript. Uso de linguagens de programação para geração dinâmica de páginas web. Uso de servidores web para armazenamento de sites. Atividades práticas de implementação de sistemas baseados nessas linguagens.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', '*SI201'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI450': {
			code: 'SI450',
			name: 'Administração da Produção',
			ementa: 'Sistemas de produção, ferramentas da produção enxuta e produção sustentável. Gestão da cadeia de suprimentos. Planejamento e coordenação de atividades em projetos. Indicadores de desempenho. Estratégia de produção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#40D940',
			obligatory: true
		},
		'ST562': {
			code: 'ST562',
			name: 'Estruturas de Arquivos',
			ementa: 'Dispositivos de armazenamento. Estrutura básica de armazenamento e Recuperação de Informação em Arquivos. Arquivos sequenciais, indexados e de acesso Hashing. Compressão de arquivos. Recuperação e segurança de arquivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: '#40D9B3',
			obligatory: true
		},
		'ST767': {
			code: 'ST767',
			name: 'Banco de Dados II',
			ementa: 'Conceitos relacionados com a estrutura física dos bancos de dados. Linguagem de acesso a banco de dados. Ferramentas e técnicas utilizadas na implementação de sistemas de bancos de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: '#40D9B3',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'SI404': {
			code: 'SI404',
			name: 'Introdução a Interfaces Humano-Computador',
			ementa: 'Construção e Avaliação de Interfaces Humano-Computador. Aspectos Humanos e Tecnológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST266'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI405': {
			code: 'SI405',
			name: 'Análise de Sistemas de Informação II',
			ementa: 'Assuntos complementares sobre o tema Análise de Sistemas de Informação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI305'],
			color: '#8DA07A',
			obligatory: true
		},
		'TT060': {
			code: 'TT060',
			name: 'Gestão de Projetos',
			ementa: 'Conceitos de subprojeto, projeto, programa, portfólio e plano estratégico. Processos para gestão de projeto. Ferramentas para gestão de escopo, prazo, custo, qualidade, comunicação, risco, contratos, recursos humanos e integralização das atividades. Ciclos de vida de produto e de projeto. A cultura organizacional. Estrutura organizacional. A postura esperada de um gestor: acompanhamento (follow-up) e feedback.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: '#40D9B3',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
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
		'SI801': {
			code: 'SI801',
			name: 'Introdução a Auditoria e Segurança de Sistemas',
			ementa: 'Conceitos e tipos de ameaças, riscos e vulnerabilidades dos sistemas de informação. Conceito e objetivos da segurança de informações. Planejamento, implementação e avaliação de políticas de segurança de informações. Conceito e objetivos da auditoria de sistemas de informação. Técnicas de auditoria em sistemas de informação. Softwares de auditoria. Estrutura da função de auditoria de sistemas de informação nas organizações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'SI101', '*TT304'],
			color: '#D95353',
			obligatory: true
		},
		'TT050': {
			code: 'TT050',
			name: 'Sistemas de Apoio à Decisão',
			ementa: 'Teoria da decisão, modelos de decisão; modelagem qualitativa; árvores de decisão, agentes de decisão, análise multicritério; Processo cognitivo e tomada de decisão; Heuristicas de solução de problemas. Sistemas especialistas e sistemas baseados em conhecimento. Introdução às Tecnologias de suporte à decisão.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211'],
			color: '#4066D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'SI700': {
			code: 'SI700',
			name: 'Programação para Dispositivos Móveis',
			ementa: 'Estudo de linguagens de programação de alto nível apropriadas para criação de sistemas voltados para dispositivos móveis. Atividades práticas de implementação de sistemas para dispositivos móveis.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*SI201', 'SI400'],
			color: '#40D9B3',
			obligatory: true
		},
		'SI701': {
			code: 'SI701',
			name: 'Introdução a Multimídia',
			ementa: 'Conceitos de multimídia e sistemas multimídia. Arquitetura e aplicações multimídia, classificação dos tipos de sistemas multimídias. Dispositivos de entrada e saída em ambientes multimídia. Fundamentos do processamento de imagens. Fundamentos de animação. Fundamentos de processamento de som. Critérios de seleção de soluções multimídia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#D9B340',
			obligatory: true
		},
		'SI702': {
			code: 'SI702',
			name: 'Inteligência Artificial',
			ementa: 'Fundamentos de IA. Agentes inteligentes. Representação de conhecimento e solução de problemas. Estruturas e estratégias de busca. Lógica matemática, representação e inferência. Sistemas baseados em regras. Inteligência computacional. Aplicações.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450', 'SI120'],
			color: '#B3D940',
			obligatory: true
		},
		'SI703': {
			code: 'SI703',
			name: 'Governança e Planejamento Estratégico de TI',
			ementa: 'Evolução do uso da Informática na Organização. Recursos Humanos em Tecnologia da Informação. Relacionamento da Informática com o negócio: ambientes de tecnologia da informação, estados da administração, atitudes da alta gerência, função da informática na organização. Uso estratégico da tecnologia da informação. Modelo Genérico de Governança: Regulamentações e normas, alinhamento estratégico, planejamento de TI, Operações e Serviços, relacionamento com usuários e fornecedores e Segurança.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: '#40D940',
			obligatory: true
		},
		'SI704': {
			code: 'SI704',
			name: 'Seminários II',
			ementa: 'Participação em seminários de assuntos diversos visando complementação da formação do discente. Os seminários a serem ministrados abordarão prioritariamente pesquisas e trabalhos diversos em andamento, bem como opções de seguimento da carreira após a conclusão do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#6640D9',
			obligatory: true
		},
		'SI912': {
			code: 'SI912',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Definição de projeto e levantamento de revisão bibliográfica sobre o tema da monografia do trabalho de conclusão de curso, necessariamente relacionado a Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA465'],
			color: '#D940D9',
			obligatory: true
		},
		'SI913': {
			code: 'SI913',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento e apresentação de monografia referente ao trabalho de conclusão de curso, na área de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['SI912'],
			color: '#D940D9',
			obligatory: true
		},
		'SI916': {
			code: 'SI916',
			name: 'Estágio em Computação',
			ementa: 'Estágio desenvolvido de acordo com regras internas da Faculdade de Tecnologia. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:20, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA465'],
			color: '#408CD9',
			obligatory: true
		},
		'SI901': {
			code: 'SI901',
			name: 'Iniciação Científica I',
			ementa: 'Atividades de Iniciação Científica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#D940B3',
			obligatory: false
		},
		'SI902': {
			code: 'SI902',
			name: 'Iniciação Científica II',
			ementa: 'Atividades de Iniciação Científica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#D9D940',
			obligatory: false
		},
		'SI903': {
			code: 'SI903',
			name: 'Iniciação Tecnológica I',
			ementa: 'Atividades de Iniciação Tecnológica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#4040D9',
			obligatory: false
		},
		'SI904': {
			code: 'SI904',
			name: 'Iniciação Tecnológica II',
			ementa: 'Atividades de Iniciação Tecnológica, desenvolvidas sob orientação de docente da Unicamp.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#40D98C',
			obligatory: false
		},
		'SI905': {
			code: 'SI905',
			name: 'Monitoria I',
			ementa: 'Participação em atividades de monitoria, sob orientação de docente responsável pela disciplina em que o discente irá atuar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:4, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200', 'AA410'],
			color: '#B340D9',
			obligatory: false
		},
		'SI906': {
			code: 'SI906',
			name: 'Monitoria II',
			ementa: 'Participação em atividades de monitoria, sob orientação de docente responsável pela disciplina em que o discente irá atuar.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:4, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200', 'AA410', 'SI905'],
			color: '#B340D9',
			obligatory: false
		},
		'SI909': {
			code: 'SI909',
			name: 'Atividades Complementares',
			ementa: 'Participação em Atividades Complementares. A matrícula nesta disciplina será autorizada pela Coordenação do Curso mediante apresentação de documentos comprobatórios da execução de atividades complementares por parte do aluno, de acordo com regras internas do curso, visando a contabilização, em créditos, das atividades efetuadas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:8, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: false
		}
	}
};

export default catalogue;
