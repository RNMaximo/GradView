const catalogue = {
	totalCredits: 200,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'MA141', 'MC009', 'MC102']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_128', 'F_129', 'MA211', 'MA327', 'MC202']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_328', 'F_329', 'MA311', 'MC302', 'ME323']
		},
		'sem-4': {
			id: '4',
			subjects: ['MC358', 'MC602', 'MC750', 'MS211', 'ELET4']
		},
		'sem-5': {
			id: '5',
			subjects: ['MC404', 'MC426', 'MC458', 'MC536']
		},
		'sem-6': {
			id: '6',
			subjects: ['MC346', 'MC437', 'MC504', 'MC558', 'ELET4']
		},
		'sem-7': {
			id: '7',
			subjects: ['MC626', 'MC658', 'MC732', 'MC832', 'ELET4']
		},
		'sem-8': {
			id: '8',
			subjects: ['CE839', 'MC714', 'MC833', 'ELET12']
		},
		'sem-9': {
			id: '9',
			subjects: ['CE738', 'ELET16']
		},
		'sem-10': {
			id: '10',
			subjects: ['CE304', 'ELET18']
		}
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MC009': {
			code: 'MC009',
			name: 'Computação e Sociedade',
			ementa: 'Problemas éticos originados pelo uso da Tecnologia de Informação. Oportunidades multidisciplinares do uso da computação - pesquisa, desenvolvimento e empregabilidade. Tendências de mercado e globalização - projetos cooperativos, questões de gênero, trabalho à distância. Computação e a Unicamp - necessidades e oportunidades. Aspectos da política de informática no Brasil e no mundo.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ''
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141']
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141']
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102']
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211/*MA251']
		},
		'MC302': {
			code: 'MC302',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC202']
		},
		'ME323': {
			code: 'ME323',
			name: 'Introdução aos Modelos Probabilísticos',
			ementa: 'Introdução à probabilidade. Variáveis aleatórias. Esperança de variável aleatória. Vetor aleatório. Noções de inferência estatística. Introdução aos processos estocásticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211']
		},
		'MC358': {
			code: 'MC358',
			name: 'Fundamentos Matemáticos da Computação',
			ementa: 'Conceitos básicos de matemática discreta e de lógica para computação. Técnicas de provas, indução matemática. Relações e conceitos de teoria de grafos. Modelagem de problemas usando grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MC602': {
			code: 'MC602',
			name: 'Circuitos Lógicos e Organização de Computadores',
			ementa: 'Introdução aos conceitos básicos de projeto lógico. Portas lógicas. Simulação de circuitos digitais. Minimização de funções lógicas. Mapas de Karnaugh. Circuitos combinacionais. Elementos de memória: latch, flip-flops, contadores. Síntese de circuitos sequenciais síncronos e assíncronos. Organização e hierarquia de memórias. Processador básico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MC750': {
			code: 'MC750',
			name: 'Construção de Interfaces Homem-Computador',
			ementa: 'Introdução a Interfaces Homem-Computador (IHC). Aspectos humanos. Aspectos tecnológicos. Métodos de técnicas de design. Ferramentas de suporte. Avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302']
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC111']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores RISCs e CISCs. Desenvolvimento, implementação e testes de programas usando linguagens e montagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC602']
		},
		'MC426': {
			code: 'MC426',
			name: 'Engenharia de Software',
			ementa: 'Paradigmas da Engenharia de Software. Levantamento de Dados. Técnicas e ferramentas de especificação dos requisitos do usuário e do sistema. Métodos de análise e projeto de sistemas de informação. Implementação de sistemas de informação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302']
		},
		'MC458': {
			code: 'MC458',
			name: 'Projeto e Análise de Algoritmos I',
			ementa: 'Técnicas de projeto e análise de algoritmos. Algoritmos de ordenação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202', 'MC358', 'ME323']
		},
		'MC536': {
			code: 'MC536',
			name: 'Bancos de Dados: Teoria e Prática',
			ementa: 'Modelagem de dados: modelos conceituais, modelos E-R e suas variações. O modelo relacional: normalização e manutenção da integridade. Linguagens: cálculo e álgebra relacional. Arquiteturas de sistemas de bancos de dados. Mecanismos de proteção. Recuperação. Segurança. Controle de concorrência. Noções de bancos de dados distribuídos. Projeto e desenvolvimento de ferramentas e técnicas utilizadas na solução de problemas de sistemas de informação, utilizando bancos de dados. Modelagem, especificação, projeto e implementação de aplicações em sistemas de informação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC302']
		},
		'MC346': {
			code: 'MC346',
			name: 'Paradigmas de Programação',
			ementa: 'Visão comparativa de paradigmas de programação. Programação funcional, lógica e orientada.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302']
		},
		'MC437': {
			code: 'MC437',
			name: 'Projeto de Sistemas de Informação',
			ementa: 'Análise e projeto de Sistemas de Informação usando técnicas de Bancos de Dados, Interface Humano-Computador e Engenharia de Software.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC426', 'MC536']
		},
		'MC504': {
			code: 'MC504',
			name: 'Sistemas Operacionais',
			ementa: 'Conceito de processos: concorrências, regiões críticas, escalonamento. Conceitos de espaços de endereçamento e de gerenciamento de memória virtual, paginação, segmentação. Sistemas de arquivos: hierarquia, proteção, organização, segurança. Gerenciamento de Entrada/Saída. Estudos de casos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404']
		},
		'MC558': {
			code: 'MC558',
			name: 'Projeto e Análise de Algoritmos II',
			ementa: 'Algoritmos em grafos. Redução entre problemas. Complexidade computacional. Classes de problemas. Problemas NP-completos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MC458']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'MC626': {
			code: 'MC626',
			name: 'Análise e Projeto de Sistema de Informação',
			ementa: 'Verificação e Validação: conceitos e técnicas. Revisões Técnicas. Análise Estática. Testes: objetivos e terminologia. Testes de interface. Testes baseados em modelos da UML. Testes baseados em código. Escopo de testes. Testes de requisitos de qualidade. Automação de testes. Aspectos de gerenciamento de testes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC437', 'MC536']
		},
		'MC658': {
			code: 'MC658',
			name: 'Projeto e Análise de Algoritmos III',
			ementa: 'Tratamento de Problemas NP-difíceis.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC558']
		},
		'MC732': {
			code: 'MC732',
			name: 'Projeto de Sistemas Computacionais',
			ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de I/O.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404', 'MC602']
		},
		'MC832': {
			code: 'MC832',
			name: 'Redes de Computadores',
			ementa: 'Noções básicas de redes de computadores: tipos de enlace, códigos, modos e meios de transmissão. Redes de computadores: locais, metropolitanas e de longa distância. Terminologia e aplicações, topologias, modelos de arquitetura e protocolos. Interconexão de redes. Níveis de transporte e de aplicação. Redes sem Fio e Redes Móveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC514']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'CE839': {
			code: 'CE839',
			name: 'Introdução à Administração para Computação',
			ementa: 'Administração pública e privada. Funções e princípios da administração. O planejamento da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MC714': {
			code: 'MC714',
			name: 'Sistemas Distribuídos',
			ementa: 'Sistemas Distribuídos. Comunicação entre processos. Sistemas de arquivos. Serviços de nomes. Coordenação. Replicação. Segurança.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876']
		},
		'MC833': {
			code: 'MC833',
			name: 'Programação de Redes de Computadores',
			ementa: 'Programação utilizando diferentes tecnologias de comunicação: sockets, TCP e UDP, e chamada de método remoto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MC822']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET16': {
			code: 'ELET16',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:16, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: ''
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ELET18': {
			code: 'ELET18',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:18, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: ''
		}
	}
};

export default catalogue;
