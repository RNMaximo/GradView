const catalogue = {
	totalCredits: 261,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EA772', 'EM230', 'F_128', 'F_129', 'MA111', 'MA141']
		},
		'sem-2': {
			id: '2',
			subjects: ['EA513', 'EA773', 'EM330', 'F_228', 'F_229', 'MA211']
		},
		'sem-3': {
			id: '3',
			subjects: ['EA611', 'EE300', 'MA327', 'MC102']
		},
		'sem-4': {
			id: '4',
			subjects: ['CE304', 'EA869', 'EE103', 'EE410', 'MA311']
		},
		'sem-5': {
			id: '5',
			subjects: ['EE301', 'EE400', 'EE521', 'EE530', 'ME323']
		},
		'sem-6': {
			id: '6',
			subjects: ['EA614', 'EA871', 'EE540', 'F_315', 'LA122']
		},
		'sem-7': {
			id: '7',
			subjects: ['EA616', 'EA619', 'EE531', 'EE754', 'EE881', 'MS211']
		},
		'sem-8': {
			id: '8',
			subjects: ['EA044', 'EA879', 'EE522', 'EE640', 'ET520', 'ET521']
		},
		'sem-9': {
			id: '9',
			subjects: ['EA721', 'EA722', 'EE610', 'EE641', 'EE882', 'ET620', 'ET621']
		},
		'sem-10': {
			id: '10',
			subjects: ['EA075', 'EE755', 'EM524', 'ET720', 'QG100']
		},
		'sem-11': {
			id: '11',
			subjects: ['CE738', 'EA076', 'EE833', 'EM312', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['CE838', 'EM423', 'ELET12']
		},
		'sem-13': {
			id: '13',
			subjects: ['BE310', 'EA006', 'ELET13']
		},
		'sem-14': {
			id: '14',
			subjects: ['ELET14']
		}
	},

	subjects: {
		'EA772': {
			code: 'EA772',
			name: 'Circuitos Lógicos',
			ementa: 'Conceitos lógicos. Circuitos básicos. Minimização de funções Booleanas. Sistemas de numeração. Aritmética binária. Códigos. Circuitos a contato. Síntese de circuitos combinacionais. Circuitos de memória. Circuitos sequenciais. Projeto de circuitos sequenciais. Considerações sobre a velocidade de operação dos circuitos digitais.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9407D'
		},
		'EM230': {
			code: 'EM230',
			name: 'Oficinas em Instalações Elétricas',
			ementa: 'Tecnologia básica. Operações básicas de instalações elétricas residencial e industrial, de enrolamento de motor monofásico. Ligações de comandos elétricos automáticos.Obs.: Realizado nas Oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, nº71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9BA40'
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7D40D9'
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BAD940'
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D97D'
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#407DD9'
		},
		'EA513': {
			code: 'EA513',
			name: 'Circuitos Elétricos',
			ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'EA773': {
			code: 'EA773',
			name: 'Laboratório de Circuitos Lógicos',
			ementa: 'Circuitos integrados fundamentais. Elementos lógicos com memória. Contadores digitais. Famílias lógicas, sistemas de numeração. Operações aritméticas: soma, subtração, multiplicação, divisão. Unidade lógica e aritmética. Memória ROM. Aplicações.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA772'],
			color: ''
		},
		'EM330': {
			code: 'EM330',
			name: 'Oficinas I',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora. Obs.: Realizado nas oficinas da Escola SENAI \"Roberto Mange\", na Rua Pastor Cícero Canuto de Lima, 71 - São Bernardo - Campinas - SP.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940'
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: ''
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: ''
		},
		'EA611': {
			code: 'EA611',
			name: 'Circuitos II',
			ementa: 'Transformada de Laplace. Teoremas de Reciprocidade e de Miller. Dualidade. Estruturas de Dois Pares de Terminais. Circuitos Trifásicos. Representação de Sistemas de Energia Elétrica. Componentes Simétricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513'],
			color: ''
		},
		'EE300': {
			code: 'EE300',
			name: 'Fundamentos da Física Moderna',
			ementa: 'Introdução à teoria da relatividade restrita. A teoria cinética da matéria. A Quantização da radiação, da carga elétrica e da energia. Modelos atômicos clássicos. Propriedades ondulatórias das partículas. Equação de Schrödinger. O átomo com muitos elétrons. A estrutura do núcleo atômico e reações nucleares. Partículas elementares. Moléculas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA211'],
			color: ''
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: ''
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94040'
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BA'
		},
		'EA869': {
			code: 'EA869',
			name: 'Introdução a Sistemas de Computação Digital',
			ementa: 'Introdução. Arquitetura de Computadores. Software de Sistema. Sub-rotinas. Interrupção. Entrada e Saída. Endereçamento. Representação Numérica e não Numérica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA772', 'MC102'],
			color: ''
		},
		'EE103': {
			code: 'EE103',
			name: 'Laboratório de Engenharia Elétrica I',
			ementa: 'Atividades de laboratório relacionadas ao conhecimento de Engenharia Elétrica adquiridos pelo aluno nas disciplinas do Curso até o 3º semestre. Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA513'],
			color: ''
		},
		'EE410': {
			code: 'EE410',
			name: 'Introdução à Ciência dos Materiais para Engenharia Elétrica',
			ementa: 'Estado sólido. Propriedades mecânicas dos sólidos. Propriedades ópticas dos materiais. Propriedades magnéticas. Propriedades térmicas. Propriedades elétricas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE300'],
			color: ''
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: ''
		},
		'EE301': {
			code: 'EE301',
			name: 'Laboratório de Fundamentos Físicos para a Engenharia Elétrica',
			ementa: 'Medidas em condutores. Efeito da temperatura. Condução em eletrólitos. Condução e ruptura em materiais dielétricos. Difração e refração da Luz. Polarização e birefringência. Espectrometria óptica. Efeito fotoelétrico e efeito Hall.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_229'],
			color: ''
		},
		'EE400': {
			code: 'EE400',
			name: 'Métodos da Engenharia Elétrica',
			ementa: 'Sistemas de coordenadas e vetores. Gradiente, divergente, rotacional e laplaciano. Teoremas de Gauss e de Stokes. Funções de variáveis complexas. Resíduos e pólos. Método de transformação conforme; método de separação de variáveis na solução da equação de Laplace.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311'],
			color: ''
		},
		'EE521': {
			code: 'EE521',
			name: 'Introdução à Teoria Eletromagnética',
			ementa: 'Força e campo eletrostático. Densidade de fluxo elétrico e lei de Gauss. Potencial eletrostático. Corrente estacionária. Condutor e Resistência. Dielétrico e capacitância. Equações de Poisson e Laplace. Campo magnetostático. Campos variáveis no tempo. Força em materiais magnéticos indutância. Sistemas de unidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513', 'F_228', 'F_229', 'MA211'],
			color: ''
		},
		'EE530': {
			code: 'EE530',
			name: 'Eletrônica Básica I',
			ementa: 'Conceitos básicos de projeto. Amplificadores operacionais Ideais. Circuitos com amplificadores operacionais. Semicondutores. Circuitos com diodos semicondutores. Circuitos com FET. Circuitos com transistores bipolares. Amplificadores de potência e fontes de alimentação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513', 'EE410'],
			color: ''
		},
		'ME323': {
			code: 'ME323',
			name: 'Introdução aos Modelos Probabilísticos',
			ementa: 'Introdução à probabilidade. Variáveis aleatórias. Esperança de variável aleatória. Vetor aleatório. Noções de inferência estatística. Introdução aos processos estocásticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: ''
		},
		'EA614': {
			code: 'EA614',
			name: 'Análise de Sinais',
			ementa: 'Sinais contínuos e discretos. Sistemas lineares e invariantes no tempo. Análise de Fourier de sinais contínuos. Análise de Fourier de sinais discretos. Filtragem através de sistemas lineares e invariantes no tempo. Transformada de Laplace e transformada Z. Amostragem de sinais. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE400'],
			color: ''
		},
		'EA871': {
			code: 'EA871',
			name: 'Laboratório de Programação Básica de Sistemas Digitais',
			ementa: 'Programação em linguagem Assembly. Instruções de máquina. Diretivas do montador. Depuradores. Interfaces de entrada/saída. Programação de interface serial. Comunicação entre computadores. Programação de interface paralela. Interrupções.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['EA869'],
			color: ''
		},
		'EE540': {
			code: 'EE540',
			name: 'Teoria Eletromagnética',
			ementa: 'Campos variáveis no tempo e equações de Maxwell. Ondas planas no vácuo e em dielétricos: polarização, impedância do meio. Propagação de ondas eletromagnéticas: velocidade de fase e de grupo, fluxos de potência, atenuação. Reflexão e refração em interfaces planas: ondas TE e TM, ângulo de Brewster, reflexão total, ondas evanescentes. Potenciais retardados e antenas. Radiopropagação. Difração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE400', 'EE521'],
			color: ''
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: ''
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4040D9'
		},
		'EA616': {
			code: 'EA616',
			name: 'Análise Linear de Sistemas',
			ementa: 'Caracterização de sistemas lineares. Modelamento de processos dinâmicos contínuos e discretos no tempo. Solução de Equações diferenciais lineares. Solução de equações a diferenças lineares. Estabilidade. Função de transferência. Resposta em frequência de sistemas contínuos e discretos no tempo. Representação de estado de sistemas contínuos e discretos no tempo. Introdução ao controle por realimentação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA513', 'EA614', 'MA327'],
			color: ''
		},
		'EA619': {
			code: 'EA619',
			name: 'Laboratório de Análise Linear',
			ementa: 'Experimentos utilizando ferramentas computacionais especializadas: modelagem e simulação de sistemas lineares e não lineares. Linearização de sistemas. Análise da resposta temporal e resposta em frequência. Identificação de parâmetros. Experimentos utilizando processos em escala reduzida e equipamentos de controle e aquisição de dados disponíveis no laboratório: Identificação de sistemas. Análise da resposta temporal e resposta em frequência. Discretização de sistemas. Controle por realimentação.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA513', 'EA614'],
			color: ''
		},
		'EE531': {
			code: 'EE531',
			name: 'Laboratório de Eletrônica Básica I',
			ementa: 'Diodos. Transistores bipolares. Transistores JFET. Transistores MOS e estruturas CMOS. Caracterização e aplicações.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE530'],
			color: ''
		},
		'EE754': {
			code: 'EE754',
			name: 'Ondas Guiadas',
			ementa: 'Guias dielétricos: surgimento de modos TE e TM em guias laminares, equação modal, guias circulares. Fibras ópticas: programação modal, aproximação de guiamento fraco, modos linearmente polarizados. Tipologia das fibras ópticas. Atenuação e dispersão em fibras ópticas. Guias metálicos: geometria retangular e circular, modos dominantes, filtros modais, perdas nas paredes. O modo TEM em guias com múltiplos condutores: linhas de transmissão, modelo circuital. A Teoria de linhas de transmissão: impedância característica, transformação de impedâncias, casamento de impedâncias, carta de Smith.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE540'],
			color: ''
		},
		'EE881': {
			code: 'EE881',
			name: 'Princípios de Comunicações I',
			ementa: 'Canal de comunicação. Processos estocásticos. Modulação de amplitude. Modulação angular. Codificação de sinais analógicos. Transmissão digital em banda básica. Modulação digital. Sistemas de múltiplo acesso. Tópicos em comunicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA614', 'ME323'],
			color: ''
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: ''
		},
		'EA044': {
			code: 'EA044',
			name: 'Planejamento e Análise de Sistemas de Produção',
			ementa: 'Introdução a Sistemas de Produção. Introdução à Modelagem Matemática. Modelos de Otimização. Modelos de Programação Linear. Resolução de Modelos de Programação Linear. Resolução de Problemas através de Programação Dinâmica. Modelos de Otimização Discretos. Modelos de Programação Não Linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: ''
		},
		'EA879': {
			code: 'EA879',
			name: 'Introdução a Software Básico',
			ementa: 'Revisão sobre linguagem assembly, linguagem C e montadores. Estruturas de dados. Compiladores. Sistemas Operacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA869'],
			color: ''
		},
		'EE522': {
			code: 'EE522',
			name: 'Laboratório de Eletromagnetismo',
			ementa: 'Mapeamento de equipotências. Fotocópia eletrostática. Descargas elétricas em alta tensão. Interação de campos magnéticos e elétricos com feixe de elétrons. Bomba iônica. Radiação de antena de micro-ondas.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE103', 'F_228', 'F_229', 'MA211'],
			color: ''
		},
		'EE640': {
			code: 'EE640',
			name: 'Eletrônica Básica II',
			ementa: 'Projeto de amplificadores com BJT. Estrutura dos amplificadores operacionais. Resposta em frequência de amplificadores. Circuitos quasi-lineares. Circuitos não-lineares. Dispositivos de aplicação específica. Filtros ativos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE530'],
			color: ''
		},
		'ET520': {
			code: 'ET520',
			name: 'Princípios de Conversão de Energia',
			ementa: 'Circuitos magnéticos. Transformadores. Princípios de conversão eletromecânica de energia. Introdução às máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA611', 'EE521'],
			color: ''
		},
		'ET521': {
			code: 'ET521',
			name: 'Laboratório de Princípios de Conversão de Energia',
			ementa: 'Propriedades de circuitos magnéticos. Estudo de eletroímã. Funcionamento de máquinas elétricas rotativas. Transformador elétrico.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA611', 'EE521'],
			color: ''
		},
		'EA721': {
			code: 'EA721',
			name: 'Princípios de Controle e Servomecanismo',
			ementa: 'Propriedades e conceitos básicos do controle de sistemas dinâmicos em malha fechada. Projeto de controladores utilizando lugar das raízes. Projeto de controladores utilizando resposta em frequência. Projeto de controladores utilizando representação de estados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA616'],
			color: ''
		},
		'EA722': {
			code: 'EA722',
			name: 'Laboratório de Controle e Servomecanismo',
			ementa: 'Experimentos utilizando processos em escala reduzida e equipamentos de controle e aquisição de dados disponíveis no laboratório: propriedades do controle por realimentação. Projeto de controladores PID. Projeto de controladores utilizando lugar das raízes e resposta em frequência. Projeto de controladores utilizando representação de estados. Projeto de controladores utilizando alocação de polos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA616', 'EA619'],
			color: ''
		},
		'EE610': {
			code: 'EE610',
			name: 'Eletrônica Digital I',
			ementa: 'Pulsos e circuitos de temporização. Circuitos lógicos-digitais. Circuitos Integrados Digitais. Dispositivos Lógicos Programáveis-PLDs.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE530'],
			color: ''
		},
		'EE641': {
			code: 'EE641',
			name: 'Laboratório de Eletrônica Básica II',
			ementa: 'Amplificador a transistor bipolar. Amplificador diferencial. Amplificador operacional. Circuitos com amplificadores operacionais.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE531', 'EE640'],
			color: ''
		},
		'EE882': {
			code: 'EE882',
			name: 'Laboratório de Comunicações I',
			ementa: 'Experiências de laboratório com: Sinais. Modulação AM convencional e espalhada, DSB-SC e FM. Amostragem. Codificação. TV.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE881'],
			color: ''
		},
		'ET620': {
			code: 'ET620',
			name: 'Máquinas Elétricas',
			ementa: 'Máquina de Corrente Contínua. Máquina Síncrona. Máquina de Indução. Motores de Potência Fracionária e Subfracionária.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ET520'],
			color: ''
		},
		'ET621': {
			code: 'ET621',
			name: 'Laboratório de Máquinas Elétricas',
			ementa: 'Característica de partida de cada tipo de motor. Ensaios com máquina CC. Ensaios com máquina síncrona. Ensaios com máquina de indução.Obs.: Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ET520', 'ET521'],
			color: ''
		},
		'EA075': {
			code: 'EA075',
			name: 'Introdução ao Projeto de Sistemas Embarcados',
			ementa: 'Introdução. Interligação entre módulos. Ligação com o barramento interno. Memória. Organização da memória. Microprocessador. Coprocessadores e controladores. Entrada/Saída. Periféricos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EA869'],
			color: ''
		},
		'EE755': {
			code: 'EE755',
			name: 'Laboratório de Ondas Guiadas',
			ementa: 'Experiências relacionadas com estruturas de dois pares de terminais e com linhas de transmissão.Obs.: Recomenda-se que seja cursada concomitantemente com EE753. Esta disciplina será ministrada quinzenalmente.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EE522', 'EE754'],
			color: ''
		},
		'EM524': {
			code: 'EM524',
			name: 'Fenômenos de Transporte',
			ementa: 'Conceitos fundamentais. Primeira e segunda leis da termodinâmica. Equações gerais da cinemática e dinâmica dos fluidos. Equações básicas de transferência de calor e massa.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_228', '*F_229'],
			color: ''
		},
		'ET720': {
			code: 'ET720',
			name: 'Sistemas de Energia Elétrica I',
			ementa: 'Introdução geral. Linhas de transmissão. Transformadores de potência. Máquinas síncronas. Introdução ao cálculo de fluxo de potência. Introdução a sistemas de distribuição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ET620'],
			color: ''
		},
		'QG100': {
			code: 'QG100',
			name: 'Química',
			ementa: 'Periodicidade e propriedades; reações redox e estados de oxidação; a ligação química em materiais isolantes, condutores e semicondutores; conceitos de eletroquímica; potenciais de redução; armazenamento de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97D40'
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940BA'
		},
		'EA076': {
			code: 'EA076',
			name: 'Laboratório de Sistemas Embarcados',
			ementa: 'Aplicações de microcontroladores em instrumentação e controle de tempo real. Aspectos práticos de programação de microcontroladores.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EA075', 'EA773', 'EA871'],
			color: ''
		},
		'EE833': {
			code: 'EE833',
			name: 'Eletrônica de Potência',
			ementa: 'Diodos de potência. Retificadores. Tiristores. Retificadores controlados. Controladores de tensão AC. Transistores de potência. Retalhadores DC. Inversores. Controle de Motores DC. Controle de Motores AC. Experimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EE530'],
			color: ''
		},
		'EM312': {
			code: 'EM312',
			name: 'Desenho Técnico',
			ementa: 'Instrumentação e normas. Teoria das projeções: Monjeanas, cotadas. Axonometria e perspectiva. Construções geométricas. Ajustes e tolerâncias. Desenho de elementos básicos de máquinas. Métodos de composição e de reprodução de desenhos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40BAD9'
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'CE838': {
			code: 'CE838',
			name: 'Contabilidade para Engenharia',
			ementa: 'A empresa e a tomada de decisões. Funções da contabilidade. Relatórios Contábeis. Análise aplicada das demonstrações financeiras e indicadores nas empresas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: ''
		},
		'EM423': {
			code: 'EM423',
			name: 'Resistência dos Materiais',
			ementa: 'Noções sobre o material. Conceituação de tensões, solicitação axial. Cisalhamento puro. Torção em eixos circulares. Flexão pura, simples e oblíqua. Deflexão em vigas retas. Estado triplo de tensões e deformações. Círculo de Mohr. Cisalhamento puro. Estado hidrostático de tensões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*F_315'],
			color: ''
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'BE310': {
			code: 'BE310',
			name: 'Ciências do Ambiente',
			ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#7DD940'
		},
		'EA006': {
			code: 'EA006',
			name: 'Trabalho de Fim de Curso',
			ementa: 'Princípios de Metodologia Científica e Tecnológica, redação e expressão gráfica técno-científica. Trabalho de síntese dos conhecimentos, com caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas dos cursos de Engenharia Elétrica ou de Engenharia de Computação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200', 'AA480'],
			color: '#BA40D9'
		},
		'ELET13': {
			code: 'ELET13',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'ELET14': {
			code: 'ELET14',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
