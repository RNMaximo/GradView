const catalogue = {
	totalCredits: 214,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BC180', 'BE180', 'BT380', 'BZ182', 'F_107', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BA280', 'BB280', 'BG280', 'BH282', 'BT280', 'BZ280']
		},
		'sem-3': {
			id: '3',
			subjects: ['BG380', 'BI381', 'BM382', 'BT480', 'BV381', 'BZ380', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['BE480', 'BF482', 'BG480', 'BH484', 'BZ480', 'GM280', 'MS380']
		},
		'sem-5': {
			id: '5',
			subjects: ['BF582', 'BP480', 'ME480', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['BF682', 'GM450', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BT681', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 28,
			hasRestrictions: true,
			subjects: ['BE780', 'BG580', 'BH382', 'BP580', 'BT580', 'BT680', 'BT682', 'BV680', 'BV681', 'BZ584', 'BZ585', 'BZ680'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA500', 'BB500', 'BC500', 'BD500', 'BE500', 'BF500', 'BG500', 'BH500', 'BH501', 'BI500', 'BM500', 'BP500', 'BT500', 'BV500', 'BZ500'],
		},
		'elet-4': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA600', 'BB600', 'BC600', 'BD600', 'BE600', 'BF600', 'BG600', 'BH600', 'BH601', 'BI600', 'BM600', 'BP600', 'BT600', 'BV600', 'BZ600'],
		},
		'elet-5': {
			credits: 17,
			hasRestrictions: true,
			subjects: ['BA700', 'BB700', 'BB710', 'BC700', 'BD700', 'BE700', 'BF700', 'BG700', 'BH700', 'BI700', 'BM700', 'BM710', 'BP700', 'BT700', 'BV700', 'BZ700'],
		},
		'elet-6': {
			credits: 17,
			hasRestrictions: true,
			subjects: ['BA800', 'BB800', 'BC800', 'BD800', 'BE800', 'BF800', 'BG800', 'BH800', 'BI800', 'BM800', 'BP800', 'BT800', 'BV800', 'BZ800'],
		},
		'elet-7': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['BD190', 'BD290', 'BD510', 'BT200'],
		},
	},

	subjects: {
		'BC180': {
			code: 'BC180',
			name: 'Biologia Celular Geral',
			ementa: 'Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares. Biomembranas. Ciclo celular. Meiose. Matriz extracelular. Diferenciação celular. Interação entre componentes celulares.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40A8D9',
			obligatory: true
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Conceitos básicos de sistemas ecológicos. Enfoque teórico-prático de situações reais envolvendo observação, métodos e interpretação de dados ecológicos. (Com excursões obrigatórias).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9406B',
			obligatory: true
		},
		'BT380': {
			code: 'BT380',
			name: 'Botânica II',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C9D9',
			obligatory: true
		},
		'BZ182': {
			code: 'BZ182',
			name: 'Zoologia: Introdução e Métodos',
			ementa: 'Taxonomia e nomenclatura. Diversidade do reino animal. Os ambientes da Terra. Sistemática e filogenia. Origem e evolução dos metazoários. Comportamento animal. Coleta e preservação. Conservação e biodiversidade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C9',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Forças e máquinas simples, locomoção, dinâmica, fluidos, sólidos e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8440D9',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Fórmulas e equações químicas. Estequiometria. Energia livre. Equilíbrio químico em solução. Ligação química. Ácidos e bases. Funções da química orgânica. Experiências ilustrando o método científico, o conceito de mol, ligação química, equílibrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D3D9',
			obligatory: true
		},
		'BA280': {
			code: 'BA280',
			name: 'Anatomia Humana Básica',
			ementa: 'Introdução ao estudo da Anatomia. Organização morfofuncional dos principais sistemas orgânicos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#84D940',
			obligatory: true
		},
		'BB280': {
			code: 'BB280',
			name: 'Bioquímica Básica',
			ementa: 'Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Estratégias de Regulação do Metabolismo. Metabolismo de carboidratos. Metabolismo de Lipídeos. Transporte de Elétrons e Fosforilação Oxidativa. Metabolismo de Aminoácidos. Integração Metabólica. Métodos Experimentais Básicos em Bioquímica.',
			semestre: 1,
			vector: {T:2, P:2, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#79D940',
			obligatory: true
		},
		'BG280': {
			code: 'BG280',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4340D9',
			obligatory: true
		},
		'BH282': {
			code: 'BH282',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz extracelular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC180'],
			color: '#40A8D9',
			obligatory: true
		},
		'BT280': {
			code: 'BT280',
			name: 'Botânica I',
			ementa: 'Ciclo de vida, estratégias reprodutivas e morfologia básica das angiospermas. Noções anatômicas de órgãos vegetativos e reprodutivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D993',
			obligatory: true
		},
		'BZ280': {
			code: 'BZ280',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Evolução e diversidade dos Invertebrados Metazoários, incluindo Placozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes, Nemertea, Rotifera, Gastrotricha, Kinorhyncha, Nematoda, Nematomorpha, Priapula, Acanthocephala, Entoprocta, Gnathostomulida, Loricifera, Annelida, Sipuncula, Echiura, Pogonophora e Mollusca, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como ocupação de ambientes, mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4067D9',
			obligatory: true
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG280', '*BB280'],
			color: '#5E8D8D',
			obligatory: true
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Resistência específica e inespecífica. Biologia do Sistema Imunológico. Resposta humoral e celular. Controle genético. Reações antígeno-anticorpo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB280', 'BC180'],
			color: '#5DC18D',
			obligatory: true
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus. Metabolismo de crescimento microbiano. Controle dos microrganismos. Conceito de ecologia microbiana. Métodos de visualização de bactérias. Crescimento bacteriano \"in vitro\".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB280', 'BC180'],
			color: '#5DC18D',
			obligatory: true
		},
		'BT480': {
			code: 'BT480',
			name: 'Botânica III',
			ementa: 'Sistemas de Classificação dos vegetais. Bases dos sistemas filogenéticos. Introdução à taxonomia das Angiospermae.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT280', 'BT380'],
			color: '#40D1B6',
			obligatory: true
		},
		'BV381': {
			code: 'BV381',
			name: 'Fisiologia Vegetal Básica',
			ementa: 'Relações hídricas. Nutrição mineral. Fotossíntese. Relações fonte-dreno. Respiração. Hormônios vegetais. Fotomorfogênese. Embriogênese e germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940AC',
			obligatory: true
		},
		'BZ380': {
			code: 'BZ380',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origem evolutiva, forma, função e diversidade entre os artrópodos, lofoforados, equinodermas, protocordados e cordados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ280'],
			color: '#4067D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BE480': {
			code: 'BE480',
			name: 'Ecologia Básica',
			ementa: 'A ecologia e seu domínio, organismos: ecofisiologia. Populações: dinâmica e interações. Comunidades: organização espacial, temporal e funcional. Ecossistemas: conservação. Aplicação de conceitos ecológicos em problemas atuais. Excursão obrigatória.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE180'],
			color: '#D9406B',
			obligatory: true
		},
		'BF482': {
			code: 'BF482',
			name: 'Biofísica e Fisiologia Geral I',
			ementa: 'Estudo dos conceitos gerais de homeostasia radioatividade e radiações em biologia. Excitabilidade celular. Processos básicos das relações organismo-ambiente, abordando relações de comunicação celular e plasticidade neural; integração sensório-motora, neurovegetativa e comportamental.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7940D9',
			obligatory: true
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: '#5E8D8D',
			obligatory: true
		},
		'BH484': {
			code: 'BH484',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Estudo dos processos do desenvolvimento, incluindo aspectos morfológicos, bem como os mecanismos celulares e moleculares universais que atuam na Embriogênese e na Diferenciação Celular. Estes processos serão abordados no contexto do desenvolvimento de diferentes organismos vertebrados e invertebrados, de forma a promover uma ampla compreensão dos eventos que ocorrem no desenvolvimento animal, da fecundação à formação do organismo completo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BH282'],
			color: '#40A8D9',
			obligatory: true
		},
		'BZ480': {
			code: 'BZ480',
			name: 'Zoologia de Vertebrados',
			ementa: 'Introdução ao estudo de vertebrados: noções sobre variedade de formas, funções, ambiente e modos de vida de peixes, anfíbios, répteis, aves e mamíferos. (Excursão obrigatória).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ182'],
			color: '#40D9C9',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B3',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940CC',
			obligatory: true
		},
		'BF582': {
			code: 'BF582',
			name: 'Biofísica e Fisiologia Geral II',
			ementa: 'Noções do controle dos líquidos e volumes corporais. Estudo das funções gerais dos sistemas cardíaco, respiratório e renal.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408B',
			obligatory: true
		},
		'BP480': {
			code: 'BP480',
			name: 'Parasitologia Animal I',
			ementa: 'Conceito de parasitismo. Relação parasito-hospedeiro. Ciclos biológicos. Exemplos de protozoários, helmintos e artrópodes parasitas. Vetores. Epidemiologia das principais parasitoses de interesse médico.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D95D',
			obligatory: true
		},
		'ME480': {
			code: 'ME480',
			name: 'Estatística para Biologistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#D940CC',
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
		'BF682': {
			code: 'BF682',
			name: 'Biofísica e Fisiologia Geral III',
			ementa: 'Estudo dos mecanismos de ação hormonal, das funções do sistema endócrino, de reprodução e desenvolvimento. Sistema digestivo, nutrição, regulação do metabolismo interno e da temperatura corpórea.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6FD940',
			obligatory: true
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9404B',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:17},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Aspectos botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas e de potencial econômico. A botânica aplicada e sua importância em diversos campos de interesse econômico. Análise da ação humana no meio ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#40D9D3',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:21},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BA500': {
			code: 'BA500',
			name: 'Iniciação Científica em Anatomia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D94B40',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D9A8',
			obligatory: false
		},
		'BA700': {
			code: 'BA700',
			name: 'Estágio Supervisionado em Anatomia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Anatomia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#40BED9',
			obligatory: false
		},
		'BA800': {
			code: 'BA800',
			name: 'Estágio Supervisionado em Anatomia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Anatomia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D98140',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4052D9',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D94060',
			obligatory: false
		},
		'BB700': {
			code: 'BB700',
			name: 'Estágio Supervisionado em Bioquímica I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Bioquímica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#4093D9',
			obligatory: false
		},
		'BB710': {
			code: 'BB710',
			name: 'Estágio Supervisionado em Bioquímica III',
			ementa: 'Estágio supervisionado a ser cumprido por alunos em uma das áreas de pesquisa do Departamento de Bioquímica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#4088D9',
			obligatory: false
		},
		'BB800': {
			code: 'BB800',
			name: 'Estágio Supervisionado em Bioquímica II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Bioquímica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#9A40D9',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D940D7',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D9B740',
			obligatory: false
		},
		'BC700': {
			code: 'BC700',
			name: 'Estágio Supervisionado em Biologia Celular I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Biologia Celular.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D040D9',
			obligatory: false
		},
		'BC800': {
			code: 'BC800',
			name: 'Estágio Supervisionado em Biologia Celular II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Biologia Celular.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D96040',
			obligatory: false
		},
		'BD190': {
			code: 'BD190',
			name: 'Participação Cultural I',
			ementa: 'Aspectos políticos e socioculturais. Participação em eventos artísticos da Universidade, tais como Bioart, apresentação de coral, encenação de peças teatrais, audição musical. Debates de temas gerais relacionados ao ensino e à pesquisa nos diferentes campos da Biologia, com participação de diretores de Instituto de Pesquisa isolados ou Instituto de Ensino Superior. Avaliação do ensino no Instituto no 1º semestre; proposta de ensino para semestre seguinte.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#405DD9',
			obligatory: false
		},
		'BD290': {
			code: 'BD290',
			name: 'Participação Cultural II',
			ementa: 'Aspectos políticos e socioculturais. Participação em eventos artísticos da Universidade, tais como Bioart, apresentação de coral, encenação de peças teatrais, audição musical. Debates de temas gerais relacionados ao ensino e à pesquisa nos diferentes campos da Biologia, com participação de diretores de Instituto de Pesquisa isolados ou Instituto de Ensino Superior. Avaliação do ensino no Instituto no 2º semestre; proposta de ensino para semestre seguinte.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#407DD9',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica em temas das Ciências Biológicas. Levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D940B7',
			obligatory: false
		},
		'BD510': {
			code: 'BD510',
			name: 'Bioética',
			ementa: 'Bio-Ética: origem, elementos e princípios. Princípios de beneficência, autonomia e justiça. Proteção à vida. Experimentação animal. Comissões de Bioética - Ética e Biota natural.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5940D9',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica em temas das Ciências Biológicas. Levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#BAD940',
			obligatory: false
		},
		'BD700': {
			code: 'BD700',
			name: 'Processos Industriais I',
			ementa: 'Estágio curricular junto a indústrias.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#40D9BE',
			obligatory: false
		},
		'BD800': {
			code: 'BD800',
			name: 'Processos Industriais II',
			ementa: 'Estágio curricular junto a indústrias.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#BA40D9',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D9AC40',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D967',
			obligatory: false
		},
		'BE700': {
			code: 'BE700',
			name: 'Estágio Supervisionado em Ecologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Zoologia, na área de Ecologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D94055',
			obligatory: false
		},
		'BE780': {
			code: 'BE780',
			name: 'Ecologia Animal (Modalidade Biológica)',
			ementa: 'Estudos avançados em Ecologia Animal envolvendo tópicos de Ecologia de Organismos, Populações e Comunidades.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['BE480'],
			color: '#D9406B',
			obligatory: false
		},
		'BE800': {
			code: 'BE800',
			name: 'Estágio Supervisionado em Ecologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Zoologia, na área de Ecologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#40D952',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#6F40D9',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D94076',
			obligatory: false
		},
		'BF700': {
			code: 'BF700',
			name: 'Estágio Supervisionado em Fisiologia e Biofísica I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Fisiologia e Biofísica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D94096',
			obligatory: false
		},
		'BF800': {
			code: 'BF800',
			name: 'Estágio Supervisionado em Fisiologia e Biofísica II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Fisiologia e Biofísica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#AFD940',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#C5D940',
			obligatory: false
		},
		'BG580': {
			code: 'BG580',
			name: 'Mecanismos de Evolução',
			ementa: 'Variabilidade fenotípica e adaptação. Estrutura genética das populações. Seleção natural. Coeficiente de seleção e tipos de seleção. Picos adaptativos e especiação. Evolução dos grandes grupos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BG480'],
			color: '#5E8D8D',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#AF40D9',
			obligatory: false
		},
		'BG700': {
			code: 'BG700',
			name: 'Estágio Supervisionado em Genética I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Genética e Evolução.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#9AD940',
			obligatory: false
		},
		'BG800': {
			code: 'BG800',
			name: 'Estágio Supervisionado em Genética II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Genética e Evolução.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D0D940',
			obligatory: false
		},
		'BH382': {
			code: 'BH382',
			name: 'Biologia Tecidual Aplicada a Vertebrados',
			ementa: 'Biologia tecidual aplicada na correlação morfofuncional em órgãos e, sistemas e sua pluralidade nos vertebrados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BH282'],
			color: '#40A8D9',
			obligatory: false
		},
		'BH500': {
			code: 'BH500',
			name: 'Iniciação Científica em Histologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Histologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D96B40',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D9C140',
			obligatory: false
		},
		'BH600': {
			code: 'BH600',
			name: 'Iniciação Científica em Histologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Histologia. Teorias e hipóteses levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#43D940',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4072D9',
			obligatory: false
		},
		'BH700': {
			code: 'BH700',
			name: 'Estágio Supervisionado em Histologia e Embriologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Histologia e Embriologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D94081',
			obligatory: false
		},
		'BH800': {
			code: 'BH800',
			name: 'Estágio Supervisionado em Histologia e Embriologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Histologia e Embriologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#4ED940',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D99D',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#6440D9',
			obligatory: false
		},
		'BI700': {
			code: 'BI700',
			name: 'Estágio Supervisionado em Imunologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa em imunologia do Departamento de Microbiologia e Imunologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D97640',
			obligatory: false
		},
		'BI800': {
			code: 'BI800',
			name: 'Estágio Supervisionado em Imunologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa em imunologia do departamento de Microbiologia e Imunologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#8FD940',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D97D',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D99640',
			obligatory: false
		},
		'BM700': {
			code: 'BM700',
			name: 'Estágio Supervisionado em Microbiologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa em microbiologia do departamento de Microbiologia e Imunologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D9D740',
			obligatory: false
		},
		'BM710': {
			code: 'BM710',
			name: 'Estágio Supervisionado na Área de Microbiologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa em Microbiologia do Departamento de Microbiologia e Imunologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200', 'AA470'],
			color: '#D940A1',
			obligatory: false
		},
		'BM800': {
			code: 'BM800',
			name: 'Estágio Supervisionado em Microbiologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa em microbiologia do departamento de Microbiologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#4047D9',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40B3D9',
			obligatory: false
		},
		'BP580': {
			code: 'BP580',
			name: 'Parasitologia Animal II',
			ementa: 'Parasitoses veiculadas pela água, solo, artrópodes e alimentos. Zoonoses. Impactos das parasitoses na saúde pública. Desenvolvimento de metodologia de ensino em parasitologia no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BP480'],
			color: '#40D95D',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#409DD9',
			obligatory: false
		},
		'BP700': {
			code: 'BP700',
			name: 'Estágio Supervisionado em Parasitologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Parasitologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#40D972',
			obligatory: false
		},
		'BP800': {
			code: 'BP800',
			name: 'Estágio Supervisionado em Parasitologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Parasitologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'BT200': {
			code: 'BT200',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação das principais correntes e idéias da filosofia sobre as ciências naturais, especialmente a Biologia, e discussão de suas principais implicações sobre a maneira como o conhecimento biológico foi considerado ao longo da história.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D947',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#A540D9',
			obligatory: false
		},
		'BT580': {
			code: 'BT580',
			name: 'Botânica IV',
			ementa: 'Taxonomia das Angiospermae - principais grupos. Famílias principais. Evolução dos caracteres morfológicos e sua interação com a sistemática.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BT480'],
			color: '#40D1B6',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D9CC40',
			obligatory: false
		},
		'BT680': {
			code: 'BT680',
			name: 'Botânica V',
			ementa: 'Noções de biossistemática vegetal. Uso de métodos experimentais em taxonomia. Citotaxonomia. Quimiotaxonomia. Biologia da polinização e da reprodução.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT480'],
			color: '#40D1B6',
			obligatory: false
		},
		'BT682': {
			code: 'BT682',
			name: 'Ecologia Vegetal',
			ementa: 'Aplicação de conceitos fundamentais de ecologia do indivíduo, de populações e de comunidades vegetais através do desenvolvimento de projetos de pesquisa.',
			semestre: 1,
			vector: {T:1, P:5, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['BE480', 'BT480'],
			color: '#8D8991',
			obligatory: false
		},
		'BT700': {
			code: 'BT700',
			name: 'Estágio Supervisionado em Botânica I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Botânica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D940C1',
			obligatory: false
		},
		'BT800': {
			code: 'BT800',
			name: 'Estágio Supervisionado em Botânica II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Botânica.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#C540D9',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D988',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#8F40D9',
			obligatory: false
		},
		'BV680': {
			code: 'BV680',
			name: 'Fisiologia Vegetal III',
			ementa: 'Condições físicas do meio ambiente. Interação planta-ambiente. Respostas fisiológicas das plantas às variações de ambiente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['BV381'],
			color: '#D940AC',
			obligatory: false
		},
		'BV681': {
			code: 'BV681',
			name: 'Fisiologia Vegetal IV',
			ementa: 'Metabolismo do nitrogênio. Metabolismo secundário. Estresse e metabolismo antioxidante.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BV381'],
			color: '#D940AC',
			obligatory: false
		},
		'BV700': {
			code: 'BV700',
			name: 'Estágio Supervisionado em Fisiologia Vegetal I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Fisiologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#A5D940',
			obligatory: false
		},
		'BV800': {
			code: 'BV800',
			name: 'Estágio Supervisionado em Fisiologia Vegetal II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Fisiologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#4E40D9',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#64D940',
			obligatory: false
		},
		'BZ584': {
			code: 'BZ584',
			name: 'Entomologia Básica',
			ementa: 'Classe Insecta: Estruturas e Funções - Hábitos e Habitats dos Insetos - Sistemática - Benefícios e Prejuízos dos Insetos.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ380'],
			color: '#4067D9',
			obligatory: false
		},
		'BZ585': {
			code: 'BZ585',
			name: 'Tópicos em Zoologia de Invertebrados',
			ementa: 'Estudos dos invertebrados e o seu ambiente. Estudos relacionados com sistemática, Filogenia e Biodiversidade. Uso de chaves taxonômicas. Observação das características morfológicas e comportamentais dos grupos taxonômicos em atividades de campo. Excursão (ões) obrigatória (s).',
			semestre: 1,
			vector: {T:2, P:4, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['AA200'],
			color: '#D9A140',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D95540',
			obligatory: false
		},
		'BZ680': {
			code: 'BZ680',
			name: 'História Natural de Vertebrados',
			ementa: 'Estudos de campo e laboratório sobre vertebrados: como são, onde vivem e o que fazem (Excursão obrigatória).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ480'],
			color: '#40D9C9',
			obligatory: false
		},
		'BZ700': {
			code: 'BZ700',
			name: 'Estágio Supervisionado em Zoologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Zoologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D98B40',
			obligatory: false
		},
		'BZ800': {
			code: 'BZ800',
			name: 'Estágio Supervisionado em Zoologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Zoologia.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#59D940',
			obligatory: false
		}
	}
};

export default catalogue;
