const catalogue = {
	totalCredits: 200,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MC009', 'MA111', 'MA141', 'MC102']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_128', 'F_129', 'MA211', 'MA327', 'MC202']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_328', 'F_329', 'MA311', 'ME323', 'MC302']
		},
		'sem-4': {
			id: '4',
			subjects: ['MC602', 'MC038', 'MS211', 'MC358', 'MC750']
		},
		'sem-5': {
			id: '5',
			subjects: ['MC404', 'MC426', 'MC536', 'MC458']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'MC504', 'MC437', 'MC558', 'MC346']
		},
		'sem-7': {
			id: '7',
			subjects: ['MC722', 'MC822', 'MC626', 'MC658', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['MC833', 'MC714', 'ELET08', 'CE839']
		},
		'sem-9': {
			id: '9',
			subjects: ['CE738', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'CE304']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 30,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['MC851', 'MC853', 'MC855', 'MC857', 'MC859', 'MC861', 'MC911'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['MC---'],
		},
		'elet-4': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['MC919', 'MC920', 'MC930', 'MC940', 'MC949', 'MC950'],
		},
		'elet-5': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['MC886', 'MC896', 'MC906', 'MC959'],
		},
		'elet-6': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['MC019', 'MC030', 'MC032', 'MC033', 'MC040'],
		},
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#AC46B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94693',
			obligatory: true
		},
		'MC009': {
			code: 'MC009',
			name: 'Computação e Sociedade',
			ementa: 'Problemas éticos originados pelo uso da Tecnologia de Informação. Oportunidades multidisciplinares do uso da computação - pesquisa, desenvolvimento e empregabilidade. Tendências de mercado e globalização - projetos cooperativos, questões de gênero, trabalho à distância. Computação e a Unicamp - necessidades e oportunidades. Aspectos da política de informática no Brasil e no mundo.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#93B946',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94660',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#79B946',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#B346A6',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#B94693',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#B94660',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#9F6C86',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#798080',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#B346A6',
			obligatory: true
		},
		'MC302': {
			code: 'MC302',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC202'],
			color: '#B94660',
			obligatory: true
		},
		'ME323': {
			code: 'ME323',
			name: 'Introdução aos Modelos Probabilísticos',
			ementa: 'Introdução à probabilidade. Variáveis aleatórias. Esperança de variável aleatória. Vetor aleatório. Noções de inferência estatística. Introdução aos processos estocásticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#B346A6',
			obligatory: true
		},
		'MC038': {
			code: 'MC038',
			name: 'Introdução à Redação Científica',
			ementa: 'O texto científico, suas características e especificidades. Técnicas para a sua redação e estruturação. Modalidades de textos científicos. Aspectos éticos na escrita. Autoria e direito autoral.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#60B946',
			obligatory: true
		},
		'MC358': {
			code: 'MC358',
			name: 'Fundamentos Matemáticos da Computação',
			ementa: 'Conceitos básicos de matemática discreta e de lógica para computação. Técnicas de provas, indução matemática. Relações e conceitos de teoria de grafos. Modelagem de problemas usando grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#ACB946',
			obligatory: true
		},
		'MC602': {
			code: 'MC602',
			name: 'Circuitos Lógicos e Organização de Computadores',
			ementa: 'Introdução aos conceitos básicos de projeto lógico. Portas lógicas. Simulação de circuitos digitais. Minimização de funções lógicas. Mapas de Karnaugh. Circuitos combinacionais. Elementos de memória: latch, flip-flops, contadores. Síntese de circuitos sequenciais síncronos e assíncronos. Organização e hierarquia de memórias. Processador básico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AC',
			obligatory: true
		},
		'MC750': {
			code: 'MC750',
			name: 'Construção de Interfaces Homem-Computador',
			ementa: 'Introdução a Interfaces Homem-Computador (IHC). Aspectos humanos. Aspectos tecnológicos. Métodos de técnicas de design. Ferramentas de suporte. Avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#B94660',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#B5468F',
			obligatory: true
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores RISCs e CISCs. Desenvolvimento, implementação e testes de programas usando linguagens e montagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC602'],
			color: '#46B9AC',
			obligatory: true
		},
		'MC426': {
			code: 'MC426',
			name: 'Engenharia de Software',
			ementa: 'Paradigmas da Engenharia de Software. Levantamento de Dados. Técnicas e ferramentas de especificação dos requisitos do usuário e do sistema. Métodos de análise e projeto de sistemas de informação. Implementação de sistemas de informação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#B94660',
			obligatory: true
		},
		'MC458': {
			code: 'MC458',
			name: 'Projeto e Análise de Algoritmos I',
			ementa: 'Técnicas de projeto e análise de algoritmos. Algoritmos de ordenação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202', 'MC358', 'ME323'],
			color: '#B36C6F',
			obligatory: true
		},
		'MC536': {
			code: 'MC536',
			name: 'Bancos de Dados: Teoria e Prática',
			ementa: 'Modelagem de dados: modelos conceituais, modelos E-R e suas variações. O modelo relacional: normalização e manutenção da integridade. Linguagens: cálculo e álgebra relacional. Arquiteturas de sistemas de bancos de dados. Mecanismos de proteção. Recuperação. Segurança. Controle de concorrência. Noções de bancos de dados distribuídos. Projeto e desenvolvimento de ferramentas e técnicas utilizadas na solução de problemas de sistemas de informação, utilizando bancos de dados. Modelagem, especificação, projeto e implementação de aplicações em sistemas de informação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC302'],
			color: '#B94660',
			obligatory: true
		},
		'MC346': {
			code: 'MC346',
			name: 'Paradigmas de Programação',
			ementa: 'Visão comparativa de paradigmas de programação. Programação funcional, lógica e orientada.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#B94660',
			obligatory: true
		},
		'MC437': {
			code: 'MC437',
			name: 'Projeto de Sistemas de Informação',
			ementa: 'Análise e projeto de Sistemas de Informação usando técnicas de Bancos de Dados, Interface Humano-Computador e Engenharia de Software.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC426', 'MC536'],
			color: '#B94660',
			obligatory: true
		},
		'MC504': {
			code: 'MC504',
			name: 'Sistemas Operacionais',
			ementa: 'Conceito de processos: concorrências, regiões críticas, escalonamento. Conceitos de espaços de endereçamento e de gerenciamento de memória virtual, paginação, segmentação. Sistemas de arquivos: hierarquia, proteção, organização, segurança. Gerenciamento de Entrada/Saída. Estudos de casos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404'],
			color: '#46B9AC',
			obligatory: true
		},
		'MC558': {
			code: 'MC558',
			name: 'Projeto e Análise de Algoritmos II',
			ementa: 'Algoritmos em grafos. Redução entre problemas. Complexidade computacional. Classes de problemas. Problemas NP-completos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MC458'],
			color: '#B65981',
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
		'MC626': {
			code: 'MC626',
			name: 'Análise e Projeto de Sistema de Informação',
			ementa: 'Verificação e Validação: conceitos e técnicas. Revisões Técnicas. Análise Estática. Testes: objetivos e terminologia. Testes de interface. Testes baseados em modelos da UML. Testes baseados em código. Escopo de testes. Testes de requisitos de qualidade. Automação de testes. Aspectos de gerenciamento de testes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC437', 'MC536'],
			color: '#B94660',
			obligatory: true
		},
		'MC658': {
			code: 'MC658',
			name: 'Projeto e Análise de Algoritmos III',
			ementa: 'Tratamento de Problemas NP-difíceis.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC558'],
			color: '#B65981',
			obligatory: true
		},
		'MC722': {
			code: 'MC722',
			name: 'Projeto de Sistemas Computacionais',
			ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de I/O.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404', 'MC602'],
			color: '#46B9AC',
			obligatory: true
		},
		'MC822': {
			code: 'MC822',
			name: 'Teleprocessamento e Redes',
			ementa: 'Noções básicas de teleprocessamento: tipos de enlace, códigos, modos e meios de transmissão. Redes de computadores: locais, metropolitanas e de longa distância. Terminologia e aplicações, topologias, modelos de arquitetura (RM-OSI/ISO e TCP/IP) e protocolos. Interconexão de redes. Nível de transporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC504'],
			color: '#46B9AC',
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
		'CE839': {
			code: 'CE839',
			name: 'Introdução à Administração para Computação',
			ementa: 'Administração pública e privada. Funções e princípios da administração. O planejamento da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7946B9',
			obligatory: true
		},
		'MC714': {
			code: 'MC714',
			name: 'Sistemas Distribuídos',
			ementa: 'Sistemas Distribuídos. Comunicação entre processos. Sistemas de arquivos. Serviços de nomes. Coordenação. Replicação. Segurança.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC504'],
			color: '#46B9AC',
			obligatory: true
		},
		'MC833': {
			code: 'MC833',
			name: 'Programação de Redes de Computadores',
			ementa: 'Programação utilizando diferentes tecnologias de comunicação: sockets, TCP e UDP, e chamada de método remoto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MC822'],
			color: '#46B9AC',
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
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94679',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B979',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MC---': {
			code: 'MC---',
			name: 'Qualquer Disciplina com codigo MC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4660B9',
			obligatory: false
		},
		'MC019': {
			code: 'MC019',
			name: 'Estágio Supervisionado em Ciência da Computação',
			ementa: 'Trabalho prático que seja válido de acordo com normas internas definidas pelo Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:5, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#B946AC',
			obligatory: false
		},
		'MC030': {
			code: 'MC030',
			name: 'Projeto Final de Graduação',
			ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação, acompanhado por monografia redigida pelo aluno.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#46B960',
			obligatory: false
		},
		'MC032': {
			code: 'MC032',
			name: 'Estudo Dirigido',
			ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B96046',
			obligatory: false
		},
		'MC033': {
			code: 'MC033',
			name: 'Estudo Dirigido II',
			ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4646B9',
			obligatory: false
		},
		'MC040': {
			code: 'MC040',
			name: 'Estágio de Iniciação Científica I',
			ementa: 'Projeto de Iniciação Científica na área de Computação, supervisionado ou orientado por um docente do Instituto de Computação e subvencionado por um órgão oficial (UNICAMP, FAPESP, CNPq, etc).',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#46ACB9',
			obligatory: false
		},
		'MC851': {
			code: 'MC851',
			name: 'Projeto em Computação I',
			ementa: 'Implementação de um projeto prático na área de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B99346',
			obligatory: false
		},
		'MC853': {
			code: 'MC853',
			name: 'Projeto em Sistemas de Programação',
			ementa: 'Implementação de um projeto prático na área de Sistemas de Programação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6046B9',
			obligatory: false
		},
		'MC855': {
			code: 'MC855',
			name: 'Projeto em Sistemas de Computação',
			ementa: 'Implementação de um projeto prático na área de Sistemas de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC714'],
			color: '#46B9AC',
			obligatory: false
		},
		'MC857': {
			code: 'MC857',
			name: 'Projeto em Sistemas de Informação',
			ementa: 'Implementação de um projeto prático na área de Sistemas de Informação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC626'],
			color: '#B94660',
			obligatory: false
		},
		'MC859': {
			code: 'MC859',
			name: 'Projeto em Teoria da Computação',
			ementa: 'Implementação de um projeto prático na área de Teoria da Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC558'],
			color: '#B65981',
			obligatory: false
		},
		'MC861': {
			code: 'MC861',
			name: 'Projeto em Computação II',
			ementa: 'Implementação de um projeto prático na área de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9346B9',
			obligatory: false
		},
		'MC886': {
			code: 'MC886',
			name: 'Aprendizado de Máquina',
			ementa: 'Técnicas de aprendizado de máquina estatístico para classificação, agrupamento e detecção de outliers.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'ME323'],
			color: '#B6469D',
			obligatory: false
		},
		'MC896': {
			code: 'MC896',
			name: 'Processamento de Línguas Naturais',
			ementa: 'Introdução ao processamento de línguas naturais. Análise sintática, semântica e pragmática. Ambiguidade. Discurso. Processamento probabilístico da linguagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC346'],
			color: '#B94660',
			obligatory: false
		},
		'MC906': {
			code: 'MC906',
			name: 'Introdução à Inteligência Artificial',
			ementa: 'Estudo introdutório dos fundamentos e aplicações de Inteligência Artificial. Histórico e princípios de IA. Resolução de problemas. Representação de conhecimento. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97946',
			obligatory: false
		},
		'MC911': {
			code: 'MC911',
			name: 'Projeto em Compiladores',
			ementa: 'Implementação de um projeto prático na área de Compiladores.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9AC46',
			obligatory: false
		},
		'MC919': {
			code: 'MC919',
			name: 'Tópicos Especiais em Processamento Gráfico',
			ementa: 'Estudo de problemas especiais em processamento gráfico. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4679B9',
			obligatory: false
		},
		'MC920': {
			code: 'MC920',
			name: 'Introdução ao Processamento de Imagem Digital',
			ementa: 'Fundamentos de imagem digital. Transformações geométricas. Transformações Radiométricas. Filtragem no domínio espacial. Filtragem no domínio da frequência. Técnicas de restauração. Introdução a segmentação. Introdução a morfologia matemática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MA327', 'MC202'],
			color: '#B74688',
			obligatory: false
		},
		'MC930': {
			code: 'MC930',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos. Algoritmos de primitivas gráficas. Representação e estruturação de informação gráfica. Descrição, construção e utilização de um núcleo de um sistema gráfico. Aplicações.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MC202'],
			color: '#B9467A',
			obligatory: false
		},
		'MC940': {
			code: 'MC940',
			name: 'Processamento e Análise de Imagens',
			ementa: 'Segmentação de imagens. Transformações morfológicas. Representação. Descrição. Extração de características. Classificação supervisionada. Classificação não supervisionada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: false
		},
		'MC949': {
			code: 'MC949',
			name: 'Visão Computacional',
			ementa: 'Conceitos básicos de processamento de imagens, correspondências e arestas, álgebra linear e coordenadas homogêneas, representações de rotações. Projeções ortográficas, perspectiva e afim. Câmeras e suas calibrações. Matriz essencial, matriz fundamental, homografia, RANSAC. Fatorização rígida e não rígida. Rastreamento, filtro de Kalman e de partículas. Localização e reconhecimento de objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#B94693',
			obligatory: false
		},
		'MC950': {
			code: 'MC950',
			name: 'Recuperação de Imagens por Conteúdo',
			ementa: 'Introdução à recuperação de informação (modelos de recuperação, avaliação). Bancos de dados de imagem (linguagens de consulta, processamento de consultas, estruturas de indexação). Recuperação de imagem por conteúdo (descrição de imagem, busca por similaridade, relevance feedback). Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B993',
			obligatory: false
		},
		'MC959': {
			code: 'MC959',
			name: 'Tópicos em Inteligência Artificial I',
			ementa: 'Estudos de tópicos avançados em inteligência artificial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: false
		}
	}
};

export default catalogue;
