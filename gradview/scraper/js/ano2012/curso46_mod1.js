const catalogue = {
	totalCredits: 219,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BC181', 'BZ182', 'EL211', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BA280', 'BB280', 'BZ281', 'EL683']
		},
		'sem-3': {
			id: '3',
			subjects: ['BT381', 'BZ382', 'F_107', 'MS380', 'ELET4']
		},
		'sem-4': {
			id: '4',
			subjects: ['BG280', 'BH482', 'BT481', 'ME480', 'ELET8']
		},
		'sem-5': {
			id: '5',
			subjects: ['BG380', 'BI381', 'BT581', 'ELET8']
		},
		'sem-6': {
			id: '6',
			subjects: ['BE881', 'BG480', 'BH484', 'BZ681', 'EL511', 'ELET2']
		},
		'sem-7': {
			id: '7',
			subjects: ['BM382', 'BV780', 'GM280', 'ELET8']
		},
		'sem-8': {
			id: '8',
			subjects: ['BF880', 'BP680', 'BT885', 'GM450', 'ELET4']
		},
		'sem-9': {
			id: '9',
			subjects: ['BF982', 'EL774', 'EL876', 'ELET4']
		},
		'sem-10': {
			id: '10',
			subjects: ['BF082', 'BT681', 'EL885', 'ELET4']
		}
	},

	subjects: {
		'BC181': {
			code: 'BC181',
			name: 'Biologia Celular para Licenciatura',
			ementa: 'Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes nucleares e organelas celulares. Ciclo celular. Meiose. Matriz extracelular. Diferenciação celular. Interação entre componentes celulares. Será enfocado a aplicação destes conhecimentos no ensino médio e fundamental.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'BZ182': {
			code: 'BZ182',
			name: 'Zoologia: Introdução e Métodos',
			ementa: 'Taxonomia e nomenclatura. Diversidade do reino animal. Os ambientes da Terra. Sistemática e filogenia. Origem e evolução dos metazoários. Comportamento animal. Coleta e preservação. Conservação e biodiversidade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EL211': {
			code: 'EL211',
			name: 'Política Educacional: Estrutura e Funcionamento da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos internacionais e legislação de ensino; estrutura e funcionamento da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Fórmulas e equações químicas. Estequiometria. Energia livre. Equilíbrio químico em solução. Ligação química. Ácidos e bases. Funções da química orgânica. Experiências ilustrando o método científico, o conceito de mol, ligação química, equílibrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'BA280': {
			code: 'BA280',
			name: 'Anatomia Humana Básica',
			ementa: 'Introdução ao estudo da Anatomia. Organização morfofuncional dos principais sistemas orgânicos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BB280': {
			code: 'BB280',
			name: 'Bioquímica Básica',
			ementa: 'Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Estratégias de Regulação do Metabolismo. Metabolismo de carboidratos. Metabolismo de Lipídeos. Transporte de Elétrons e Fosforilação Oxidativa. Metabolismo de Aminoácidos. Integração Metabólica. Métodos Experimentais Básicos em Bioquímica.',
			semestre: 1,
			vector: {T:2, P:2, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ''
		},
		'BZ281': {
			code: 'BZ281',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Evolução e diversidade dos Invertebrados Metazoários, incluindo Placozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes, Nemertea, Rotifera, Gastrotricha, Kinorhyncha, Nematoda, Nematomorpha, Priapula, Acanthocephala, Entoprocta, Gnathostomulida, Loricifera, Annelida, Sipuncula, Echiura, Pogonophora e Mollusca, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como ocupação de ambientes, mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'BT381': {
			code: 'BT381',
			name: 'Botânica I',
			ementa: 'Apresentação do Reino Vegetal e diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BZ382': {
			code: 'BZ382',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origem evolutiva, forma, função e diversidade de artrópodes, lofoforados, equinodermas, protocordados e cordados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ281']
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Forças e máquinas simples, locomoção, dinâmica, fluidos, sólidos e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'BG280': {
			code: 'BG280',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BH482': {
			code: 'BH482',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz celular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC180']
		},
		'BT481': {
			code: 'BT481',
			name: 'Botânica II',
			ementa: 'Ciclo de vida, estratégias reprodutivas e morfologia básica das angiospermas. Noções anatômicas de órgãos vegetativos e reprodutivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ME480': {
			code: 'ME480',
			name: 'Estatística para Biologistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG280', '*BB280']
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Resistência específica e inespecífica. Biologia do Sistema Imunológico. Resposta humoral e celular. Controle genético. Reações antígeno-anticorpo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB280', 'BC181']
		},
		'BT581': {
			code: 'BT581',
			name: 'Botânica III',
			ementa: 'Taxonomia de Angiospermae: caracterização dos principais grupos. Sistemas botânicos de classificação. Noções de biossistemática. Métodos gerais em taxonomia e biossistemática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'BE881': {
			code: 'BE881',
			name: 'Ecologia Geral',
			ementa: 'Conceitos básicos de ecologia de organismos, populações, comunidades e ecossistemas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380']
		},
		'BH484': {
			code: 'BH484',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Estudo dos processos do desenvolvimento, incluindo aspectos morfológicos, bem como os mecanismos celulares e moleculares universais que atuam na Embriogênese e na Diferenciação Celular. Estes processos serão abordados no contexto do desenvolvimento de diferentes organismos vertebrados e invertebrados, de forma a promover uma ampla compreensão dos eventos que ocorrem no desenvolvimento animal, da fecundação à formação do organismo completo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BH282']
		},
		'BZ681': {
			code: 'BZ681',
			name: 'Zoologia de Vertebrados',
			ementa: 'Características gerais e diversidade das classes de vertebrados: peixes, anfíbios, répteis, aves e mamíferos. Onde e como vivem os vertebrados. Importância dos vertebrados. Prática ilustrativa da diversidade estrutural em cada classe, considerando situações de aprendizagem no Ensino Fundamental e Médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus. Metabolismo de crescimento microbiano. Controle dos microrganismos. Conceito de ecologia microbiana. Métodos de visualização de bactérias. Crescimento bacteriano "in vitro".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB280', 'BC180']
		},
		'BV780': {
			code: 'BV780',
			name: 'Fisiologia Vegetal Geral',
			ementa: 'Relações hídricas. Nutrição mineral. Fotossíntese. Relações fonte-dreno. Respiração. Hormônios vegetais. Fotomorfogênese. Embriogênese e germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'BF880': {
			code: 'BF880',
			name: 'Biofísica e Fisiologia Geral',
			ementa: 'Estudo dos princípios gerais de homeostasia. Processos de transporte através de membranas, bioeletricidade, comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB280', 'BH482']
		},
		'BP680': {
			code: 'BP680',
			name: 'Zooparasitologia',
			ementa: 'Considerações sobre os parasitas de interesse humano e de animais domésticos. Interações entre hospedeiro-parasito e o meio ambiente. Estudo de protozoários e helmintos de interesse animal e humano: ciclo de vida, transmissão, patogenia, diagnóstico, epidemiologia, imunidade e profilaxia. Estudo dos principais artrópodes e moluscos veiculadores de parasitoses. Acidentes com animais peçonhentos e venenosos. Noções sobre saneamento básico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BT885': {
			code: 'BT885',
			name: 'Ecologia e Fitogeografia',
			ementa: 'Noções de ecologia global, ecologia vegetal e fitogeografia. Os grandes sistemas climáticos e pedogenéticos mundiais e a distribuição dos grandes biomas. Forma e funções da planta como expressão de adaptações evolutivas. Os grandes domínios fitogeográficos do Brasil.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ''
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'BF982': {
			code: 'BF982',
			name: 'Fisiologia Humana I',
			ementa: 'Noções do controle dos líquidos e volumes corporais. Estudo das funções gerais dos sistemas cardíaco, respiratório, renal e digestivo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF880']
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA445', 'EL211', 'EL511', 'EL683']
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA450', 'EL211', 'EL511', 'EL683']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'BF082': {
			code: 'BF082',
			name: 'Fisiologia Humana',
			ementa: 'Estudo dos mecanismos de ação hormonal; das funções do sistema endócrino, de reprodução e desenvolvimento. Sistema digestivo e nutrição, regulação do metabolismo interno e da temperatura corpórea.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Aspectos botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas e de potencial econômico. A botânica aplicada e sua importância em diversos campos de interesse econômico. Análise da ação humana no meio ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470']
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		}
	}
};

export default catalogue;
