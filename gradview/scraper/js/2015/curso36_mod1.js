const catalogue = {
	totalCredits: 162,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['SI100', 'SI221', 'TT106', 'TT120']
		},
		'sem-2': {
			id: '2',
			subjects: ['SI102', 'SI200', 'SI201', 'SI202', 'ST008', 'ST266', 'TT304']
		},
		'sem-3': {
			id: '3',
			subjects: ['SI010', 'SI300', 'SI304', 'SI404', 'ST567', 'TT350']
		},
		'sem-4': {
			id: '4',
			subjects: ['SI305', 'SI400', 'ST096', 'ST562', 'ST767', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['SI405', 'SI703', 'ST568', 'ST765', 'TT060', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['SI401', 'SI700', 'SI800', 'SI912', 'SI914', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['SI704', 'SI913', 'SI915', 'ELET07']
		}
	},

	subjects: {
		'SI100': {
			code: 'SI100',
			name: 'Algoritmos e Programação de Computadores I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estrutura de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4040D9'
		},
		'SI221': {
			code: 'SI221',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaçoes Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D9D940'
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Álgebra Booleana. Funções Lógicas e Circuitos Combinacionais. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940'
		},
		'TT120': {
			code: 'TT120',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Funções. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940D9'
		},
		'SI102': {
			code: 'SI102',
			name: 'Seminários I',
			ementa: 'Participação em seminários de assuntos diversos cujo caráter prioritário é a introdução do discente à área de Computação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8C40D9'
		},
		'SI200': {
			code: 'SI200',
			name: 'Algoritmos e Programação de Computadores II',
			ementa: 'Alocação dinâmica de memória. Manipulação de arquivos. Bibliotecas estáticas e dinâmicas. Atividades práticas de implementação de programas, utilizando a Linguagem estudada em Algoritmos e Programação de Computadores I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: ''
		},
		'SI201': {
			code: 'SI201',
			name: 'Estrutura de Dados I',
			ementa: 'Representação e Manipulação de Dados na Memória Interna do Computador: Tabelas, Listas, Árvores. Algoritmos correspondentes de Busca, Inserção, Remoção e Percurso. Desenvolvimento de programas utilizando a linguagem estudada em Algoritmos e Programação de Computadores I.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: ''
		},
		'SI202': {
			code: 'SI202',
			name: 'Resolução de Problemas I',
			ementa: 'Atividades práticas e supervisionadas de resolução de problemas diversos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI100'],
			color: ''
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8CD940'
		},
		'ST266': {
			code: 'ST266',
			name: 'Engenharia de Software I',
			ementa: 'Produção de software. Paradigmas. Especificação de requisitos. Análise e projeto de software. Verificação e validação.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SI100'],
			color: ''
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: ''
		},
		'SI010': {
			code: 'SI010',
			name: 'Estrutura de Dados II',
			ementa: 'Temas complementares em Estrutura de Dados. Atividades práticas de desenvolvimento e implementação de programas e projetos utilizando Estruturas de Dados sob orientação docente.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI201'],
			color: ''
		},
		'SI300': {
			code: 'SI300',
			name: 'Programação Orientada a Objetos I',
			ementa: 'Estudo do Paradigma de Programação Orientada a Objetos. Estudo de linguagem de programação orientada a objetos. Atividades práticas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI100'],
			color: ''
		},
		'SI304': {
			code: 'SI304',
			name: 'Engenharia de Software II',
			ementa: 'Modelagem para análise e projeto orientados a objetos. Fundamentos para o desenvolvimento de Interfaces. Garantia de Qualidade de Software - Teste e Validação. Tecnologias Emergentes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: ''
		},
		'SI404': {
			code: 'SI404',
			name: 'Introdução a Interfaces Humano-Computador',
			ementa: 'Construção e Avaliação de Interfaces Humano-Computador. Aspectos Humanos e Tecnológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST266'],
			color: ''
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: ''
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408C'
		},
		'SI305': {
			code: 'SI305',
			name: 'Análise de Sistemas de Informação I',
			ementa: 'Introdução ao Sistema de Informação. Conceitos Gerais de Sistemas de Informação. Ciclo de Vida de um Projeto de Sistemas. Viabilidade e Implementação de Sistemas. Análise de casos de uso. Análise orientada a objetos. Diagramas estáticos e dinâmicos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', 'TT106'],
			color: ''
		},
		'SI400': {
			code: 'SI400',
			name: 'Programação Orientada a Objetos II',
			ementa: 'Estudo complementar do Paradigma de Programação Orientada a Objetos. Atividades práticas e supervisionadas de implementação de projetos no paradigma orientado a objetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['SI300'],
			color: ''
		},
		'ST096': {
			code: 'ST096',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Estudo de aspectos das relações entre ciência, tecnologia e sociedade ao longo da história, com ênfase na atualidade; análise de valores e ideologias envolvendo a produção e divulgação da ciência e da tecnologia; diferentes concepções de ciência, técnica e tecnologia e de suas relações; a participação pública na produção e nos debates envolvendo simultaneamente questões científicas, técnicas, tecnológicas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#408CD9'
		},
		'ST562': {
			code: 'ST562',
			name: 'Estruturas de Arquivos',
			ementa: 'Dispositivos de armazenamento. Estrutura básica de armazenamento e Recuperação de Informação em Arquivos. Arquivos sequenciais, indexados e de acesso Hashing. Compressão de arquivos. Recuperação e segurança de arquivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201'],
			color: ''
		},
		'ST767': {
			code: 'ST767',
			name: 'Banco de Dados II',
			ementa: 'Conceitos relacionados com a estrutura física dos bancos de dados. Linguagem de acesso a banco de dados. Ferramentas e técnicas utilizadas na implementação de sistemas de bancos de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST567'],
			color: ''
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'SI405': {
			code: 'SI405',
			name: 'Análise de Sistemas de Informação II',
			ementa: 'Assuntos complementares sobre o tema Análise de Sistemas de Informação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI305'],
			color: ''
		},
		'SI703': {
			code: 'SI703',
			name: 'Governança e Planejamento Estratégico de TI',
			ementa: 'Evolução do uso da Informática na Organização. Recursos Humanos em Tecnologia da Informação. Relacionamento da Informática com o negócio: ambientes de tecnologia da informação, estados da administração, atitudes da alta gerência, função da informática na organização. Uso estratégico da tecnologia da informação. Modelo Genérico de Governança: Regulamentações e normas, alinhamento estratégico, planejamento de TI, Operações e Serviços, relacionamento com usuários e fornecedores e Segurança.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT350'],
			color: ''
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: ''
		},
		'ST765': {
			code: 'ST765',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos em Computação Gráfica; Sistemas e dispositivos gráficos; áreas de processamento Digital de Imagens; sistema de cor; desenho de linhas e círculos; algoritmos de preenchimento de regiões; transformações geométricas 2D e 3D; projeções perspectivas e ortográficas; renderização: iluminação e textura.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI201', 'SI221'],
			color: ''
		},
		'TT060': {
			code: 'TT060',
			name: 'Gestão de Projetos',
			ementa: 'Conceitos de subprojeto, projeto, programa, portfólio e plano estratégico. Processos para gestão de projeto. Ferramentas para gestão de escopo, prazo, custo, qualidade, comunicação, risco, contratos, recursos humanos e integralização das atividades. Ciclos de vida de produto e de projeto. A cultura organizacional. Estrutura organizacional. A postura esperada de um gestor: acompanhamento (follow-up) e feedback.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST266'],
			color: ''
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'SI401': {
			code: 'SI401',
			name: 'Programação para a Web',
			ementa: 'Elaboração de páginas web. Linguagens de marcação. Folhas de estilo. Javascript. Uso de linguagens de programação para geração dinâmica de páginas web. Uso de servidores web para armazenamento de sites. Atividades práticas de implementação de sistemas baseados nessas linguagens.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', '*SI201'],
			color: ''
		},
		'SI700': {
			code: 'SI700',
			name: 'Programação para Dispositivos Móveis',
			ementa: 'Estudo de linguagens de programação de alto nível apropriadas para criação de sistemas voltados para dispositivos móveis. Atividades práticas de implementação de sistemas para dispositivos móveis.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SI300', '*SI201'],
			color: ''
		},
		'SI800': {
			code: 'SI800',
			name: 'Empreendedorismo e Inovação',
			ementa: 'Empreendedorismo e tipo psicológico do empreendedor. Gestão da Inovação e sustentabilidade. Análise estratégica. Fatores críticos de sucesso e vantagem competitiva. Análise de cenários, técnicas de mercado para novos produtos. Análise financeira de investimento e formação de preço de venda. Composição de plano de negócios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98C'
		},
		'SI912': {
			code: 'SI912',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Definição de projeto e levantamento de revisão bibliográfica sobre o tema da monografia do trabalho de conclusão de curso, necessariamente relacionado a Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA465'],
			color: '#40D9D9'
		},
		'SI914': {
			code: 'SI914',
			name: 'Estágio em Computação I',
			ementa: 'Estágio desenvolvido de acordo com regras internas da Faculdade de Tecnologia. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA465'],
			color: '#D98C40'
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'SI704': {
			code: 'SI704',
			name: 'Seminários II',
			ementa: 'Participação em seminários de assuntos diversos visando complementação da formação do discente. Os seminários a serem ministrados abordarão prioritariamente pesquisas e trabalhos diversos em andamento, bem como opções de seguimento da carreira após a conclusão do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040'
		},
		'SI913': {
			code: 'SI913',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento e apresentação de monografia referente ao trabalho de conclusão de curso, na área de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['SI912'],
			color: ''
		},
		'SI915': {
			code: 'SI915',
			name: 'Estágio em Computação II',
			ementa: 'Estágio desenvolvido de acordo com regras internas da Faculdade de Tecnologia. Obs.: Não é responsabilidade da Unicamp procurar e obter estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['SI914'],
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
