const catalogue = {
	totalCredits: 256,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['QG100', 'F_129', 'F_128', 'MA111', 'MA141', 'HZ291', 'MC102']
		},
		'sem-2': {
			id: '2',
			subjects: ['LA122', 'F_229', 'MA211', 'F_228', 'MA327', 'MC202']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_329', 'MA311', 'F_315', 'F_328', 'EA513', 'MC302']
		},
		'sem-4': {
			id: '4',
			subjects: ['EA772', 'F_429', 'MC404', 'EM524', 'EM423', 'F_428', 'MC358']
		},
		'sem-5': {
			id: '5',
			subjects: ['EA773', 'EA871', 'EA876', 'ME323', 'EE532', 'EE400', 'MC458']
		},
		'sem-6': {
			id: '6',
			subjects: ['EA075', 'EA872', 'EA976', 'EE534', 'MS211', 'EA614', 'MC536']
		},
		'sem-7': {
			id: '7',
			subjects: ['EA074', 'EA979', 'EA960', 'EA044', 'EA975', 'EA616', 'EA619', 'EE881']
		},
		'sem-8': {
			id: '8',
			subjects: ['EA080', 'BE310', 'EA076', 'EA072', 'ELET08', 'EA721', 'EA722', 'EE882']
		},
		'sem-9': {
			id: '9',
			subjects: ['CE838', 'CE304', 'ELET09', 'EE610', 'EA006']
		},
		'sem-10': {
			id: '10',
			subjects: ['CE738', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 23,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['EE015', 'EE016', 'EE017'],
		},
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99C46',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'HZ291': {
			code: 'HZ291',
			name: 'Tópicos Especiais de Humanidades I',
			ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia. Obs.: Sendo uma disciplina reservada aos cursos de Engenharia, nos quais consta como eletiva em seus currículos, os alunos de Humanidades, Artes e do Curso de Filosofia não poderão cursar esta disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5446B9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4663B9',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#54B946',
			obligatory: true
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais isolantes, condutores e semicondutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#B99C46',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#B97146',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#ABB946',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#468EB9',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#4663B9',
			obligatory: true
		},
		'MC202': {
			code: 'MC202',
			name: 'Estruturas de Dados',
			ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC102'],
			color: '#54B946',
			obligatory: true
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#46B9B9',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#809580',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#6C9393',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#808080',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#468EB9',
			obligatory: true
		},
		'MC302': {
			code: 'MC302',
			name: 'Programação Orientada a Objetos',
			ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC202'],
			color: '#54B946',
			obligatory: true
		},
		'EA772': {
			code: 'EA772',
			name: 'Circuitos Lógicos',
			ementa: 'Conceitos lógicos. Circuitos básicos. Minimização de funções Booleanas. Sistemas de numeração. Aritmética binária. Códigos. Circuitos a contato. Síntese de circuitos combinacionais. Circuitos de memória. Circuitos sequenciais. Projeto de circuitos sequenciais. Considerações sobre a velocidade de operação dos circuitos digitais.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97146',
			obligatory: true
		},
		'EM423': {
			code: 'EM423',
			name: 'Resistência dos Materiais',
			ementa: 'Noções sobre o material. Conceituação de tensões, solicitação axial. Cisalhamento puro. Torção em eixos circulares. Flexão pura, simples e oblíqua. Deflexão em vigas retas. Estado triplo de tensões e deformações. Círculo de Mohr. Cisalhamento puro. Estado hidrostático de tensões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*F_315'],
			color: '#809580',
			obligatory: true
		},
		'EM524': {
			code: 'EM524',
			name: 'Fenômenos de Transporte',
			ementa: 'Conceitos fundamentais. Primeira e segunda leis da termodinâmica. Equações gerais da cinemática e dinâmica dos fluidos. Equações básicas de transferência de calor e massa.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_228', '*F_229'],
			color: '#B98746',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#6C9393',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#808080',
			obligatory: true
		},
		'MC358': {
			code: 'MC358',
			name: 'Fundamentos Matemáticos da Computação',
			ementa: 'Conceitos básicos de matemática discreta e de lógica para computação. Técnicas de provas, indução matemática. Relações e conceitos de teoria de grafos. Modelagem de problemas usando grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8046B9',
			obligatory: true
		},
		'MC404': {
			code: 'MC404',
			name: 'Organização Básica de Computadores e Linguagem de Montagem',
			ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores RISCs e CISCs. Desenvolvimento, implementação e testes de programas usando linguagens e montagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202'],
			color: '#54B946',
			obligatory: true
		},
		'EA773': {
			code: 'EA773',
			name: 'Laboratório de Circuitos Lógicos',
			ementa: 'Circuitos integrados fundamentais. Elementos lógicos com memória. Contadores digitais. Famílias lógicas, sistemas de numeração. Operações aritméticas: soma, subtração, multiplicação, divisão. Unidade lógica e aritmética. Memória ROM. Aplicações.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA772'],
			color: '#B97146',
			obligatory: true
		},
		'EA871': {
			code: 'EA871',
			name: 'Laboratório de Programação Básica de Sistemas Digitais',
			ementa: 'Programação em linguagem Assembly. Instruções de máquina. Diretivas do montador. Depuradores. Interfaces de entrada/saída. Programação de interface serial. Comunicação entre computadores. Programação de interface paralela. Interrupções.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['MC404'],
			color: '#54B946',
			obligatory: true
		},
		'EA876': {
			code: 'EA876',
			name: 'Introdução a Software de Sistema',
			ementa: 'Montadores. Carregadores. Compiladores. Sistemas Operacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404'],
			color: '#54B946',
			obligatory: true
		},
		'EE400': {
			code: 'EE400',
			name: 'Métodos da Engenharia Elétrica',
			ementa: 'Sistemas de coordenadas e vetores. Gradiente, divergente, rotacional e laplaciano. Teoremas de Gauss e de Stokes. Funções de variáveis complexas. Resíduos e pólos. Método de transformação conforme; método de separação de variáveis na solução da equação de Laplace.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: '#468EB9',
			obligatory: true
		},
		'EE532': {
			code: 'EE532',
			name: 'Eletrônica Aplicada',
			ementa: 'Dispositivos semicondutores: diodos, transistores BJT e MOS. Circuitos com amplificadores operacionais. Conversão de dados: características, amostragem e análise de ruído. Sensores: características e condicionamento de seus sinais. Atuadores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: '#46B9B9',
			obligatory: true
		},
		'MC458': {
			code: 'MC458',
			name: 'Projeto e Análise de Algoritmos I',
			ementa: 'Técnicas de projeto e análise de algoritmos. Algoritmos de ordenação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC202', 'MC358'],
			color: '#6A8080',
			obligatory: true
		},
		'ME323': {
			code: 'ME323',
			name: 'Introdução aos Modelos Probabilísticos',
			ementa: 'Introdução à probabilidade. Variáveis aleatórias. Esperança de variável aleatória. Vetor aleatório. Noções de inferência estatística. Introdução aos processos estocásticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#468EB9',
			obligatory: true
		},
		'EA075': {
			code: 'EA075',
			name: 'Introdução ao Projeto de Sistemas Embarcados',
			ementa: 'Introdução. Interligação entre módulos. Ligação com o barramento interno. Memória. Organização da memória. Microprocessador. Coprocessadores e controladores. Entrada/Saída. Periféricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC404'],
			color: '#54B946',
			obligatory: true
		},
		'EA614': {
			code: 'EA614',
			name: 'Análise de Sinais',
			ementa: 'Sinais contínuos e discretos. Sistemas lineares e invariantes no tempo. Análise de Fourier de sinais contínuos. Análise de Fourier de sinais discretos. Filtragem através de sistemas lineares e invariantes no tempo. Transformada de Laplace e transformada Z. Amostragem de sinais. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE400'],
			color: '#468EB9',
			obligatory: true
		},
		'EA872': {
			code: 'EA872',
			name: 'Laboratório de Programação de Software Básico',
			ementa: 'Experiências sobre montadores, máquinas, carregadores e sistemas operacionais.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA876'],
			color: '#54B946',
			obligatory: true
		},
		'EA976': {
			code: 'EA976',
			name: 'Engenharia de Software',
			ementa: 'Software e engenharia de software. Análise de sistemas computacionais. Análise de requisitos de software. Metodologias de análise de requisitos. Projeto de software: projeto preliminar e projeto detalhado. Metodologias de projeto de software. O paradigma da Orientação a Objetos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#54B946',
			obligatory: true
		},
		'EE534': {
			code: 'EE534',
			name: 'Laboratório de Eletrônica Aplicada',
			ementa: 'Análise e síntese de circuitos eletrônicos utilizando: diodos, transistores BJT e MOS, amplificadores operacionais, conversores de dados, sensores e atuadores. Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE532'],
			color: '#46B9B9',
			obligatory: true
		},
		'MC536': {
			code: 'MC536',
			name: 'Bancos de Dados: Teoria e Prática',
			ementa: 'Modelagem de dados: modelos conceituais, modelos E-R e suas variações. O modelo relacional: normalização e manutenção da integridade. Linguagens: cálculo e álgebra relacional. Arquiteturas de sistemas de bancos de dados. Mecanismos de proteção. Recuperação. Segurança. Controle de concorrência. Noções de bancos de dados distribuídos. Projeto e desenvolvimento de ferramentas e técnicas utilizadas na solução de problemas de sistemas de informação, utilizando bancos de dados. Modelagem, especificação, projeto e implementação de aplicações em sistemas de informação.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MC302'],
			color: '#54B946',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#4B9C93',
			obligatory: true
		},
		'EA044': {
			code: 'EA044',
			name: 'Planejamento e Análise de Sistemas de Produção',
			ementa: 'Introdução a Sistemas de Produção. Introdução à Modelagem Matemática. Modelos de Otimização. Modelos de Programação Linear. Resolução de Modelos de Programação Linear. Resolução de Problemas através de Programação Dinâmica. Modelos de Otimização Discretos. Modelos de Programação Não Linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#468EB9',
			obligatory: true
		},
		'EA074': {
			code: 'EA074',
			name: 'Introdução às Redes de Computadores',
			ementa: 'Introdução. Modelos de Referência: estrutura em camadas, conceitos de protocolos e serviços. Interconexão de redes de computadores. Redes Locais. Redes Públicas. Rede Internet: Protocolos e Serviços. Redes de Alto Desempenho. Gerenciamento de Redes. Redes na Automação Industrial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#54B946',
			obligatory: true
		},
		'EA616': {
			code: 'EA616',
			name: 'Análise Linear de Sistemas',
			ementa: 'Caracterização de sistemas lineares. Modelamento de processos dinâmicos contínuos e discretos no tempo. Solução de Equações diferenciais lineares. Solução de equações a diferenças lineares. Estabilidade. Função de transferência. Resposta em frequência de sistemas contínuos e discretos no tempo. Representação de estado de sistemas contínuos e discretos no tempo. Introdução ao controle por realimentação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513', 'EA614', 'MA327'],
			color: '#468EB9',
			obligatory: true
		},
		'EA619': {
			code: 'EA619',
			name: 'Laboratório de Análise Linear',
			ementa: 'Experimentos utilizando ferramentas computacionais especializadas: modelagem e simulação de sistemas lineares e não lineares. Linearização de sistemas. Análise da resposta temporal e resposta em frequência. Identificação de parâmetros. Experimentos utilizando processos em escala reduzida e equipamentos de controle e aquisição de dados disponíveis no laboratório: Identificação de sistemas. Análise da resposta temporal e resposta em frequência. Discretização de sistemas. Controle por realimentação.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA513', 'EA614'],
			color: '#46A4B9',
			obligatory: true
		},
		'EA960': {
			code: 'EA960',
			name: 'Organização de Computadores',
			ementa: 'Introdução à organização de computadores. Classificação. Sistemas de memória hierárquica. Subsistemas de entrada/saída. Processadores vetoriais. Processadores matriciais. Multiprocessadores. Outras arquiteturas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#54B946',
			obligatory: true
		},
		'EA975': {
			code: 'EA975',
			name: 'Laboratório de Engenharia de Software',
			ementa: 'Projeto e desenvolvimento de sistemas complexos de software.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA976'],
			color: '#54B946',
			obligatory: true
		},
		'EA979': {
			code: 'EA979',
			name: 'Introdução à Computação Gráfica e ao Processamento de Imagem',
			ementa: 'Dispositivos de aquisição e exibição de imagens, arquitetura de sistemas gráficos interativos, transformações geométricas, transformação de visualização, calibração de câmeras, modelos de iluminação e tonalização, texturas, algoritmos de recorte, algoritmos de remoção de linhas/superfícies escondidas, algoritmos de rasterização, técnicas de antialiasing, representação de curvas e superfícies, operações aritméticas com imagem, técnicas de filtragem de imagem, algoritmos de realce, algoritmos de detecção de bordas, modelos de cor, transformação entre modelos de cor, algoritmos de quantização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#54B946',
			obligatory: true
		},
		'EE881': {
			code: 'EE881',
			name: 'Princípios de Comunicações I',
			ementa: 'Canal de comunicação. Processos estocásticos. Modulação de amplitude. Modulação angular. Codificação de sinais analógicos. Transmissão digital em banda básica. Modulação digital. Sistemas de múltiplo acesso. Tópicos em comunicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA614', 'ME323'],
			color: '#468EB9',
			obligatory: true
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#B94671',
			obligatory: true
		},
		'EA072': {
			code: 'EA072',
			name: 'Inteligência Artificial em Aplicações Industriais',
			ementa: 'Resolução de problemas. Fundamentos lógico matemáticos. Lógica proposicional e Lógica de primeira ordem. Representação do conhecimento. Mecanismos de inferência. Aprendizagem. Linguagens para implementação. Inteligência computacional. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA876'],
			color: '#54B946',
			obligatory: true
		},
		'EA076': {
			code: 'EA076',
			name: 'Laboratório de Sistemas Embarcados',
			ementa: 'Aplicações de microcontroladores em instrumentação e controle de tempo real. Aspectos práticos de programação de microcontroladores.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA075', 'EA773', 'EA871'],
			color: '#76A146',
			obligatory: true
		},
		'EA080': {
			code: 'EA080',
			name: 'Laboratório de Redes de Computadores',
			ementa: 'Atividades práticas envolvendo a operação, configuração e gerenciamento de redes de computadores.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA074'],
			color: '#54B946',
			obligatory: true
		},
		'EA721': {
			code: 'EA721',
			name: 'Princípios de Controle e Servomecanismo',
			ementa: 'Propriedades e conceitos básicos do controle de sistemas dinâmicos em malha fechada. Projeto de controladores utilizando lugar das raízes. Projeto de controladores utilizando resposta em frequência. Projeto de controladores utilizando representação de estados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA616'],
			color: '#468EB9',
			obligatory: true
		},
		'EA722': {
			code: 'EA722',
			name: 'Laboratório de Controle e Servomecanismo',
			ementa: 'Experimentos utilizando processos em escala reduzida e equipamentos de controle e aquisição de dados disponíveis no laboratório: propriedades do controle por realimentação. Projeto de controladores PID. Projeto de controladores utilizando lugar das raízes e resposta em frequência. Projeto de controladores utilizando representação de estados. Projeto de controladores utilizando alocação de polos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA616', 'EA619'],
			color: '#4699B9',
			obligatory: true
		},
		'EE882': {
			code: 'EE882',
			name: 'Laboratório de Comunicações I',
			ementa: 'Experiências de laboratório com: Sinais. Modulação AM convencional e espalhada, DSB-SC e FM. Amostragem. Codificação. TV.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE881'],
			color: '#468EB9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:9},
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
			color: '#B9469C',
			obligatory: true
		},
		'CE838': {
			code: 'CE838',
			name: 'Contabilidade para Engenharia',
			ementa: 'A empresa e a tomada de decisões. Funções da contabilidade. Relatórios Contábeis. Análise aplicada das demonstrações financeiras e indicadores nas empresas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: '#468EB9',
			obligatory: true
		},
		'EA006': {
			code: 'EA006',
			name: 'Trabalho de Fim de Curso',
			ementa: 'Princípios de Metodologia Científica e Tecnológica, redação e expressão gráfica técno-científica. Trabalho de síntese dos conhecimentos, com caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas dos cursos de Engenharia Elétrica ou de Engenharia de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200', 'AA480'],
			color: '#46B98E',
			obligatory: true
		},
		'EE610': {
			code: 'EE610',
			name: 'Eletrônica Digital I',
			ementa: 'Pulsos e circuitos de temporização. Circuitos lógicos-digitais. Circuitos Integrados Digitais. Dispositivos Lógicos Programáveis-PLDs.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE532'],
			color: '#46B9B9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
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
			color: '#AB46B9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EE015': {
			code: 'EE015',
			name: 'Estágio Científico e Tecnológico I',
			ementa: 'Realização de estágio relacionado a projeto de iniciação científica e tecnológica em engenharia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#80B946',
			obligatory: false
		},
		'EE016': {
			code: 'EE016',
			name: 'Estágio Científico e Tecnológico II',
			ementa: 'Realização de estágio relacionado a projeto de iniciação científica e tecnológica em engenharia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200', 'EE015'],
			color: '#80B946',
			obligatory: false
		},
		'EE017': {
			code: 'EE017',
			name: 'Estágio em Empresa',
			ementa: 'Estudos de situações reais em engenharia, com acompanhamento de projetos, especificação, fabricação, montagem, programação, configuração e testes de equipamentos e programas junto a empresas credenciadas pela Universidade.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:11, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA460'],
			color: '#468EB9',
			obligatory: false
		}
	}
};

export default catalogue;
