const catalogue = {
	totalCredits: 214,
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
			subjects: ['MA311', 'MC302', 'MC358', 'ME323']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_328', 'F_329', 'MC458', 'MC602', 'MC750']
		},
		'sem-5': {
			id: '5',
			subjects: ['MC404', 'MC426', 'MC536', 'MC558']
		},
		'sem-6': {
			id: '6',
			subjects: ['MC504', 'MC626', 'MC658', 'MS211', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['MC732', 'MC832', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['CE839', 'MC714', 'MC833', 'MC921', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['CE738', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['CE304', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 26,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 24,
			hasRestrictions: true,
			subjects: ['MC851', 'MC853', 'MC855', 'MC857', 'MC859', 'MC861', 'MC871', 'MC881'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['MC919', 'MC920', 'MC937', 'MC940', 'MC950'],
		},
		'elet-4': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['MC886', 'MC896', 'MC906', 'MC949', 'MC959'],
		},
		'elet-5': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['MC018', 'MC019', 'MC020', 'MC030', 'MC032', 'MC033', 'MC040', 'MC041'],
		},
		'elet-6': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['MC346', 'MC521', 'MC621', 'MC721', 'MC821', 'MC970', 'MC971'],
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
			color: '#6440D9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#406DD9',
			obligatory: true
		},
		'MC009': {
			code: 'MC009',
			name: 'Computação e Sociedade',
			ementa: 'Problemas éticos originados pelo uso da Tecnologia de Informação. Oportunidades multidisciplinares do uso da computação - pesquisa, desenvolvimento e empregabilidade. Tendências de mercado e globalização - projetos cooperativos, questões de gênero, trabalho à distância. Computação e a Unicamp - necessidades e oportunidades. Aspectos da política de informática no Brasil e no mundo.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#D94076',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40BED9',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9BE',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7FD940',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#5257D9',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#406DD9',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#40BED9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#5257D9',
			obligatory: true
		},
		'MC302': {
			code: 'MC302',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC202'],
			color: '#40BED9',
			obligatory: true
		},
		'MC358': {
			code: 'MC358',
			name: 'Fundamentos Matemáticos da Computação',
			ementa: 'Conceitos básicos de matemática discreta e de lógica para computação. Técnicas de provas, indução matemática. Relações e conceitos de teoria de grafos. Modelagem de problemas usando grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D952',
			obligatory: true
		},
		'ME323': {
			code: 'ME323',
			name: 'Introdução aos Modelos Probabilísticos',
			ementa: 'Introdução à probabilidade. Variáveis aleatórias. Esperança de variável aleatória. Vetor aleatório. Noções de inferência estatística. Introdução aos processos estocásticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#5257D9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#4C82D0',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#728D8D',
			obligatory: true
		},
		'MC458': {
			code: 'MC458',
			name: 'Projeto e Análise de Algoritmos I',
			ementa: 'Técnicas de projeto e análise de algoritmos. Algoritmos de ordenação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202', 'MC358'],
			color: '#40CC96',
			obligatory: true
		},
		'MC602': {
			code: 'MC602',
			name: 'Circuitos Lógicos e Organização de Computadores',
			ementa: 'Introdução aos conceitos básicos de projeto lógico. Portas lógicas. Simulação de circuitos digitais. Minimização de funções lógicas. Mapas de Karnaugh. Circuitos combinacionais. Elementos de memória: latch, flip-flops, contadores. Síntese de circuitos sequenciais síncronos e assíncronos. Organização e hierarquia de memórias. Processador básico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D96D',
			obligatory: true
		},
		'MC750': {
			code: 'MC750',
			name: 'Construção de Interfaces Homem-Computador',
			ementa: 'Introdução a Interfaces Homem-Computador (IHC). Aspectos humanos. Aspectos tecnológicos. Métodos de técnicas de design. Ferramentas de suporte. Avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#40BED9',
			obligatory: true
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores RISCs e CISCs. Desenvolvimento, implementação e testes de programas usando linguagens e montagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC602'],
			color: '#40D96D',
			obligatory: true
		},
		'MC426': {
			code: 'MC426',
			name: 'Engenharia de Software',
			ementa: 'Paradigmas da Engenharia de Software. Levantamento de Dados. Técnicas e ferramentas de especificação dos requisitos do usuário e do sistema. Métodos de análise e projeto de sistemas de informação. Implementação de sistemas de informação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#40BED9',
			obligatory: true
		},
		'MC536': {
			code: 'MC536',
			name: 'Bancos de Dados: Teoria e Prática',
			ementa: 'Modelagem de dados: modelos conceituais, modelos E-R e suas variações. O modelo relacional: normalização e manutenção da integridade. Linguagens: cálculo e álgebra relacional. Arquiteturas de sistemas de bancos de dados. Mecanismos de proteção. Recuperação. Segurança. Controle de concorrência. Noções de bancos de dados distribuídos. Projeto e desenvolvimento de ferramentas e técnicas utilizadas na solução de problemas de sistemas de informação, utilizando bancos de dados. Modelagem, especificação, projeto e implementação de aplicações em sistemas de informação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC302'],
			color: '#40BED9',
			obligatory: true
		},
		'MC558': {
			code: 'MC558',
			name: 'Projeto e Análise de Algoritmos II',
			ementa: 'Algoritmos em grafos. Redução entre problemas. Complexidade computacional. Classes de problemas. Problemas NP-completos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MC458'],
			color: '#409DB8',
			obligatory: true
		},
		'MC504': {
			code: 'MC504',
			name: 'Sistemas Operacionais',
			ementa: 'Conceito de processos: concorrências, regiões críticas, escalonamento. Conceitos de espaços de endereçamento e de gerenciamento de memória virtual, paginação, segmentação. Sistemas de arquivos: hierarquia, proteção, organização, segurança. Gerenciamento de Entrada/Saída. Estudos de casos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404'],
			color: '#40D96D',
			obligatory: true
		},
		'MC626': {
			code: 'MC626',
			name: 'Análise e Projeto de Sistema de Informação',
			ementa: 'Verificação e Validação: conceitos e técnicas. Revisões Técnicas. Análise Estática. Testes: objetivos e terminologia. Testes de interface. Testes baseados em modelos da UML. Testes baseados em código. Escopo de testes. Testes de requisitos de qualidade. Automação de testes. Aspectos de gerenciamento de testes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC426', 'MC536'],
			color: '#40BED9',
			obligatory: true
		},
		'MC658': {
			code: 'MC658',
			name: 'Projeto e Análise de Algoritmos III',
			ementa: 'Tratamento de Problemas NP-difíceis.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC558'],
			color: '#409DB8',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#4C79D9',
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
		'MC732': {
			code: 'MC732',
			name: 'Projeto de Sistemas Computacionais',
			ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de I/O.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404', 'MC602'],
			color: '#40D96D',
			obligatory: true
		},
		'MC832': {
			code: 'MC832',
			name: 'Redes de Computadores',
			ementa: 'Noções básicas de redes de computadores: tipos de enlace, códigos, modos e meios de transmissão. Redes de computadores: locais, metropolitanas e de longa distância. Terminologia e aplicações, topologias, modelos de arquitetura e protocolos. Interconexão de redes. Níveis de transporte e de aplicação. Redes sem Fio e Redes Móveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC504'],
			color: '#40D96D',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE839': {
			code: 'CE839',
			name: 'Introdução à Administração para Computação',
			ementa: 'Administração pública e privada. Funções e princípios da administração. O planejamento da empresa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4088D9',
			obligatory: true
		},
		'MC714': {
			code: 'MC714',
			name: 'Sistemas Distribuídos',
			ementa: 'Sistemas Distribuídos. Comunicação entre processos. Sistemas de arquivos. Serviços de nomes. Coordenação. Replicação. Segurança.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC504'],
			color: '#40D96D',
			obligatory: true
		},
		'MC833': {
			code: 'MC833',
			name: 'Programação de Redes de Computadores',
			ementa: 'Programação utilizando diferentes tecnologias de comunicação: sockets, TCP e UDP, e chamada de método remoto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MC832'],
			color: '#40D96D',
			obligatory: true
		},
		'MC921': {
			code: 'MC921',
			name: 'Projeto e Construção de Compiladores',
			ementa: 'Métodos de análise sintática. Sistemas de execução. Geração e Otimização de códigos objeto. Recuperação de erros. Implementação de um projeto prático na área de Compiladores.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC504'],
			color: '#40D96D',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
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
			color: '#B540D9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
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
			color: '#9A40D9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:26},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'MC018': {
			code: 'MC018',
			name: 'Estágio Supervisionado',
			ementa: 'Trabalho prático que seja válido de acordo com normas internas definidas pelo Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#D95B40',
			obligatory: false
		},
		'MC019': {
			code: 'MC019',
			name: 'Estágio Supervisionado em Ciência da Computação',
			ementa: 'Trabalho prático que seja válido de acordo com normas internas definidas pelo Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#D94091',
			obligatory: false
		},
		'MC020': {
			code: 'MC020',
			name: 'Estágio Supervisionado em Ciência da Computação II',
			ementa: 'Trabalho prático que seja válido de acordo com normas internas definidas pelo Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#D940C7',
			obligatory: false
		},
		'MC030': {
			code: 'MC030',
			name: 'Projeto Final de Graduação',
			ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação, acompanhado por monografia redigida pelo aluno.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#49D940',
			obligatory: false
		},
		'MC032': {
			code: 'MC032',
			name: 'Estudo Dirigido',
			ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#4940D9',
			obligatory: false
		},
		'MC033': {
			code: 'MC033',
			name: 'Estudo Dirigido II',
			ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#D99140',
			obligatory: false
		},
		'MC040': {
			code: 'MC040',
			name: 'Estágio de Iniciação Científica I',
			ementa: 'Projeto de Iniciação Científica na área de Computação, supervisionado ou orientado por um docente do Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:11, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#64D940',
			obligatory: false
		},
		'MC041': {
			code: 'MC041',
			name: 'Estágio de Iniciação Científica II',
			ementa: 'Projeto de Iniciação Científica na área de Computação, supervisionado ou orientado por um docente do Instituto de Computação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:11, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#D9405B',
			obligatory: false
		},
		'MC346': {
			code: 'MC346',
			name: 'Paradigmas de Programação',
			ementa: 'Visão comparativa de paradigmas de programação. Programação funcional, lógica e orientada.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC302'],
			color: '#40BED9',
			obligatory: false
		},
		'MC521': {
			code: 'MC521',
			name: 'Desafios de Programação I',
			ementa: 'Estruturas de dados. Busca por padrões. Ordenação. Combinatória. Teoria dos Números. Backtracking. Algoritmos em grafos. Programação dinâmica. Reticulados. Geometria computacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9AD940',
			obligatory: false
		},
		'MC621': {
			code: 'MC621',
			name: 'Desafios de Programação II',
			ementa: 'Estruturas de dados. Busca por padrões. Ordenação. Combinatória. Teoria dos Números. Backtracking. Algoritmos em grafos. Programação dinâmica. Reticulados. Geometria computacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4052D9',
			obligatory: false
		},
		'MC721': {
			code: 'MC721',
			name: 'Desafios de Programação III',
			ementa: 'Estruturas de dados. Busca por padrões. Ordenação. Combinatória. Teoria dos Números. Backtracking. Algoritmos em grafos. Programação dinâmica. Reticulados. Geometria computacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D988',
			obligatory: false
		},
		'MC821': {
			code: 'MC821',
			name: 'Desafios de Programação IV',
			ementa: 'Estruturas de dados. Busca por padrões. Ordenação. Combinatória. Teoria dos Números. Backtracking. Algoritmos em grafos. Programação dinâmica. Reticulados. Geometria computacional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: false
		},
		'MC851': {
			code: 'MC851',
			name: 'Projeto em Computação I',
			ementa: 'Implementação de um projeto prático na área de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AA200'],
			color: '#40A3D9',
			obligatory: false
		},
		'MC853': {
			code: 'MC853',
			name: 'Projeto em Sistemas de Programação',
			ementa: 'Implementação de um projeto prático na área de Sistemas de Programação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: '',
			color: '#D9C740',
			obligatory: false
		},
		'MC855': {
			code: 'MC855',
			name: 'Projeto em Sistemas de Computação',
			ementa: 'Implementação de um projeto prático na área de Sistemas de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC714'],
			color: '#40D96D',
			obligatory: false
		},
		'MC857': {
			code: 'MC857',
			name: 'Projeto em Sistemas de Informação',
			ementa: 'Implementação de um projeto prático na área de Sistemas de Informação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['MC626'],
			color: '#40BED9',
			obligatory: false
		},
		'MC859': {
			code: 'MC859',
			name: 'Projeto em Teoria da Computação',
			ementa: 'Implementação de um projeto prático na área de Teoria da Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['MC558'],
			color: '#409DB8',
			obligatory: false
		},
		'MC861': {
			code: 'MC861',
			name: 'Projeto em Computação II',
			ementa: 'Implementação de um projeto prático na área de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AA200'],
			color: '#40D9A3',
			obligatory: false
		},
		'MC871': {
			code: 'MC871',
			name: 'Projeto em Computação III',
			ementa: 'Implementação de um projeto prático na área de computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AA200'],
			color: '#D940AC',
			obligatory: false
		},
		'MC881': {
			code: 'MC881',
			name: 'Projeto em Computação IV',
			ementa: 'Implementação de um projeto prático na área de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:2, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['AA200'],
			color: '#D97640',
			obligatory: false
		},
		'MC886': {
			code: 'MC886',
			name: 'Aprendizado de Máquina',
			ementa: 'Técnicas de aprendizado de máquina estatístico para classificação, agrupamento e detecção de outliers.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'ME323'],
			color: '#4962D9',
			obligatory: false
		},
		'MC896': {
			code: 'MC896',
			name: 'Processamento de Línguas Naturais',
			ementa: 'Introdução ao processamento de línguas naturais. Análise sintática, semântica e pragmática. Ambiguidade. Discurso. Processamento probabilístico da linguagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC346'],
			color: '#40BED9',
			obligatory: false
		},
		'MC906': {
			code: 'MC906',
			name: 'Introdução à Inteligência Artificial',
			ementa: 'Estudo introdutório dos fundamentos e aplicações de Inteligência Artificial. Histórico e princípios de IA. Resolução de problemas. Representação de conhecimento. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B5D940',
			obligatory: false
		},
		'MC919': {
			code: 'MC919',
			name: 'Tópicos Especiais em Processamento Gráfico',
			ementa: 'Estudo de problemas especiais em processamento gráfico. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D040D9',
			obligatory: false
		},
		'MC920': {
			code: 'MC920',
			name: 'Introdução ao Processamento de Imagem Digital',
			ementa: 'Fundamentos de imagem digital. Transformações geométricas. Transformações Radiométricas. Filtragem no domínio espacial. Filtragem no domínio da frequência. Técnicas de restauração. Introdução a segmentação. Introdução a morfologia matemática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MA327', 'MC202'],
			color: '#4681D9',
			obligatory: false
		},
		'MC937': {
			code: 'MC937',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos. Algoritmos de primitivas gráficas. Representação e estruturação de informação gráfica. Descrição, construção e utilização de um núcleo de um sistema gráfico. Aplicações.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MC202'],
			color: '#4096D9',
			obligatory: false
		},
		'MC940': {
			code: 'MC940',
			name: 'Processamento e Análise de Imagens',
			ementa: 'Segmentação de imagens. Transformações morfológicas. Representação. Descrição. Extração de características. Classificação supervisionada. Classificação não supervisionada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7F40D9',
			obligatory: false
		},
		'MC949': {
			code: 'MC949',
			name: 'Visão Computacional',
			ementa: 'Conceitos básicos de processamento de imagens, correspondências e arestas, álgebra linear e coordenadas homogêneas, representações de rotações. Projeções ortográficas, perspectiva e afim. Câmeras e suas calibrações. Matriz essencial, matriz fundamental, homografia, RANSAC. Fatorização rígida e não rígida. Rastreamento, filtro de Kalman e de partículas. Localização e reconhecimento de objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327'],
			color: '#406DD9',
			obligatory: false
		},
		'MC950': {
			code: 'MC950',
			name: 'Recuperação de Imagens por Conteúdo',
			ementa: 'Introdução à recuperação de informação (modelos de recuperação, avaliação). Bancos de dados de imagem (linguagens de consulta, processamento de consultas, estruturas de indexação). Recuperação de imagem por conteúdo (descrição de imagem, busca por similaridade, relevance feedback). Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D0D940',
			obligatory: false
		},
		'MC959': {
			code: 'MC959',
			name: 'Tópicos em Inteligência Artificial I',
			ementa: 'Estudos de tópicos avançados em inteligência artificial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'MC970': {
			code: 'MC970',
			name: 'Introdução à Programação Paralela',
			ementa: 'Mecanismos e modelos de programação paralela utilizados em arquiteturas multicore. Sincronização de threads (ex. locks, mutexes, semáforos e barreiras). Metodologias de programação (usando, por exemplo, Pthreads e OpenMP). Técnicas de programação paralela na nuvem (usando, por exemplo, Map-Reduce). Ao final do curso, espera-se que o aluno compreenda os principais métodos usados em computação paralela, e os ambientes de programação comumente utilizados na indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9AC40',
			obligatory: false
		},
		'MC971': {
			code: 'MC971',
			name: 'Introdução à Programação Concorrente',
			ementa: 'Princípio de programação concorrente. Processos Concorrentes. Exclusão Mútua. Memória Compartilhada. Primitivas de Sincronização. Consenso. Estrutura de Dados Concorrentes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC504'],
			color: '#40D96D',
			obligatory: false
		}
	}
};

export default catalogue;
