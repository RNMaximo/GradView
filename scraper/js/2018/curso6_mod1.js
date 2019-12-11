const catalogue = {
	totalCredits: 246,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BT181', 'BC182', 'BE180', 'BG180', 'EL212', 'QG107', 'MS380', 'BZ183']
		},
		'sem-2': {
			id: '2',
			subjects: ['BA281', 'F_107', 'BC282', 'BH282', 'BG282', 'BB281', 'BZ280', 'BG200', 'EL683', 'BT281']
		},
		'sem-3': {
			id: '3',
			subjects: ['BM382', 'BF381', 'BI381', 'BG380', 'BL033', 'BZ380', 'EL511', 'BT382', 'BB381']
		},
		'sem-4': {
			id: '4',
			subjects: ['BD692', 'BE480', 'BF481', 'BG480', 'BH420', 'BL028', 'BL035', 'BT482', 'BV481', 'BZ480']
		},
		'sem-5': {
			id: '5',
			subjects: ['BD520', 'GM280', 'ELET05', 'BP582', 'BH520', 'BL029', 'EL774', 'BT201', 'BV581', 'BL030']
		},
		'sem-6': {
			id: '6',
			subjects: ['BL600', 'BD792', 'BD621', 'EL885', 'FN468', 'GM450', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['BL300', 'EL876', 'ELET07', 'EL142', 'BL583', 'BL034']
		},
		'sem-8': {
			id: '8',
			subjects: ['BL031', 'BT681', 'ELET08', 'BD694', 'EL485']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA500', 'BB500', 'BC500', 'BD500', 'BE500', 'BE501', 'BF500', 'BF501', 'BG500', 'BG501', 'BH501', 'BH502', 'BH511', 'BI500', 'BL500', 'BM500', 'BP500', 'BT500', 'BT501', 'BV500', 'BZ500', 'EL201', 'EL505', 'EL506'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA600', 'BB600', 'BC600', 'BD600', 'BE600', 'BE601', 'BF600', 'BF601', 'BG600', 'BG601', 'BH601', 'BH602', 'BH611', 'BI600', 'BL601', 'BM600', 'BP600', 'BT600', 'BT601', 'BV600', 'BZ600', 'EL605', 'EL606'],
		},
		'elet-3': {
			credits: 7,
			hasRestrictions: true,
			subjects: ['BD001', 'BD002', 'BD003', 'BD004', 'BD005', 'BD006', 'BD007', 'BD008', 'BD009', 'BD010', 'BD011', 'BD012', 'BD013', 'BD014', 'BD015', 'BD016', 'BD017', 'BD018', 'BD019', 'BD020', 'BD021', 'BD022', 'BD023', 'BD024', 'BD025', 'BD026'],
		},
	},

	subjects: {
		'BC182': {
			code: 'BC182',
			name: 'Biologia Celular I',
			ementa: 'Principais componentes bioquímicos da célula. Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares: biomembranas, envoltório nuclear, nucléolo e ribossomos, cromatina e cromossomos, retículo endoplasmático, complexo de Golgi, sistema endossômico-lisossômico, mitocôndrias, cloroplastos, peroxissomos, citoesqueleto-microtúbulos, filamentos intermediários e microfilamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464EB9',
			obligatory: true
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Conceitos básicos de sistemas ecológicos. Enfoque teórico-prático de situações reais envolvendo observação, métodos e interpretação de dados ecológicos. Excursões obrigatórias, elaboração de projetos, relatórios científicos, apresentações orais e em forma de painel.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94680',
			obligatory: true
		},
		'BG180': {
			code: 'BG180',
			name: 'Introdução à Evolução',
			ementa: 'Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4688B9',
			obligatory: true
		},
		'BT181': {
			code: 'BT181',
			name: 'Ecologia no Campo I',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre populações e comunidades vegetais e animais, em diferentes ambiente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#B9B446',
			obligatory: true
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Diversidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#466BB9',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6746B9',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B95F',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Estequiometria. Ligação química. Funções da química orgânica. Experimentos que ilustram o método científico, conceito de mol, ligação química, equilíbrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#4671B9',
			obligatory: true
		},
		'BA281': {
			code: 'BA281',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B0',
			obligatory: true
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4648B9',
			obligatory: true
		},
		'BC282': {
			code: 'BC282',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, movimentação celular, sinalização celular, síntese e degradação proteica, ciclo celular: mecanismos e controle molecular, meiose, diferenciação celular, morte celular e câncer como modelo: alteraçoes nos processos celulares.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC182'],
			color: '#464EB9',
			obligatory: true
		},
		'BG200': {
			code: 'BG200',
			name: 'Bioestatística',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#46B95F',
			obligatory: true
		},
		'BG282': {
			code: 'BG282',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG180'],
			color: '#4688B9',
			obligatory: true
		},
		'BH282': {
			code: 'BH282',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz extracelular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: '#464EB9',
			obligatory: true
		},
		'BT281': {
			code: 'BT281',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Introdução às técnicas de coleta e de preparação de amostras para Coleções Biológicas. Noções de avaliação da biodiversidade, levantamento e mapeamento de criptógamas. Elaboração de relatórios sobre atividade de campo. Elaboração e apresentação de seminários em grupo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94652',
			obligatory: true
		},
		'BZ280': {
			code: 'BZ280',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Origem, evolução e diversidade dos Invertebrados Metazoários, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como adaptações aos ambientes em que vivem suas espécies, incluindo mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B993',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#67B946',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7EB946',
			obligatory: true
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#72B946',
			obligatory: true
		},
		'BF381': {
			code: 'BF381',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistema nervoso, neuromuscular e endócrino.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B246B9',
			obligatory: true
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG282'],
			color: '#4688B9',
			obligatory: true
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases moleculares celulares do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas que mantêm a integridade e a homeostasia do hospedeiro. Elaboração de relatórios de aulas práticas e apresentação de seminários em tópicos de Imunologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC282'],
			color: '#464EB9',
			obligatory: true
		},
		'BL033': {
			code: 'BL033',
			name: 'Metodologia e Práticas de Ensino em Ciências I: Evolução e a Vida na Terra',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Ciências na área de Evolução Biológica e a história da vida na Terra no nível Fundamental. Elaboração de metodologias para o ensino de Ciências na área de Evolução. Estudos de caso e problemas brasileiros e mundiais no ensino de Evolução. O uso de ferramentas tecnológicas, espaços alternativos e ambiente de laboratório para aulas de Ciências na área de Evolução no Ensino Fundamental.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B94E',
			obligatory: true
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus. Metabolismo de crescimento microbiano. Controle dos microrganismos. Conceito de ecologia microbiana. Métodos de visualização de bactérias. Crescimento bacteriano \"in vitro\".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5BB946',
			obligatory: true
		},
		'BT382': {
			code: 'BT382',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angioespermas e estratégias reprodutivas. Aspectos gerais da morfologia de Angiospermas: raiz, caule, folhas, inflorescências, flores, frutos e sementes. Aspectos gerais de citologia, histologia e anatomia dos órgãos vegetativos de Angiospermas. Elaboração de projetos e relatórios de projetos em métodos em morfologia e anatomia vegetal. Seminários sobre temas atuais em morfologia e anatomia vegetal.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95246',
			obligatory: true
		},
		'BZ380': {
			code: 'BZ380',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origens evolutivas, diversidades, forma, função e organização dos Ecdysozoa e Deuterostomia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ280'],
			color: '#46B993',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94691',
			obligatory: true
		},
		'BD692': {
			code: 'BD692',
			name: 'Temas Transversais no Ensino de Biologia I',
			ementa: 'Relações Ciência, Tecnologia e Sociedade. Biotecnologia e produção de insumos e alimentos. Demonstrar o sentido histórico da ciência e da tecnologia e o papel do homem na transformação do meio ambiente e da sociedade, os avanços na qualidade de vida e nas relações sociais. Elaboração de projetos, textos e relatórios sobre os temas abordados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94697',
			obligatory: true
		},
		'BE480': {
			code: 'BE480',
			name: 'Ecologia Básica',
			ementa: 'A ecologia e seu domínio, organismos: ecofisiologia. Populações: dinâmicas e interações. Comunidades: organização espacial, temporal e funcional. Ecossistemas: conservação. Aplicação de conceitos ecológicos em problemas atuais. Excursão obrigatória (ecossistemas terrestres e aquáticos). Elaboração de projetos de campo, apresentação oral e seminários.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE180', 'BT181'],
			color: '#B97D63',
			obligatory: true
		},
		'BF481': {
			code: 'BF481',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistemas digestório, cardiovascular, respiratório e renal.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF381'],
			color: '#B246B9',
			obligatory: true
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: '#4688B9',
			obligatory: true
		},
		'BH420': {
			code: 'BH420',
			name: 'Embriologia Comparada',
			ementa: 'Estudo da embriologia comparada, com ênfase nos processos comuns ao desenvolvimento animal. Os tópicos incluem gametogênese, fecundação e embriogênese inicial de organismos-modelo invertebrados (ouriço-do-mar e drosófila) e vertebrados (peixe-zebra, Xenopus, galinha e camundongo), bem como o estudo do desenvolvimento embrionário humano. As aulas-práticas consistirão na observação de embriões de galinha em diferentes estágios do desenvolvimento e na elaboração de relatórios escritos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH282'],
			color: '#464EB9',
			obligatory: true
		},
		'BL028': {
			code: 'BL028',
			name: 'Metodologia e Práticas de Ensino de Biologia I: Ciências Morfofuncionais I',
			ementa: 'Preparação de roteiros para aula prática com e sem uso de microscópio. Preparação de material citológico para observações \"a fresco\" após fixação. Elaboração de questões com respostas esperadas, textos e jogos com conteúdo de Biologia Celular. Aprendizado das diferentes técnicas anatômicas para preparação de material pedagógico e preparação de material (roteiros, apostilas) para aulas práticas e/ou teóricas sobre os diferentes conteúdos de Anatomia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5B46B9',
			obligatory: true
		},
		'BL035': {
			code: 'BL035',
			name: 'Metodologia e Prática de Ensino em Biologia: Ecologia e Fauna',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Zoologia e Ecologia de Invertebrados e Vertebrados. Abordagem e elaboração de diferentes metodologias para o ensino de Zoologia e Ecologia de Invertebrados e Vertebrados. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7246B9',
			obligatory: true
		},
		'BT482': {
			code: 'BT482',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas: regras básicas de nomenclatura botânica; coleta e preservação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Noções de biossistemática e de sistemas de reprodução em angiospermas. Noções sobre biogeografia e sobre a aplicação do conhecimento taxonômico vegetal em conservação da biodiversidade, pesquisa e produção de bens (alimentos, fármacos, combustível renovável, etc), paisagismo e arborização urbana.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT382'],
			color: '#B95246',
			obligatory: true
		},
		'BV481': {
			code: 'BV481',
			name: 'Fisiologia Vegetal Básica: Metabolismo',
			ementa: 'Relações hídricas, absorção iônica e transporte de solutos, nutrição mineral, assimilação de nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#469FB9',
			obligatory: true
		},
		'BZ480': {
			code: 'BZ480',
			name: 'Zoologia de Vertebrados',
			ementa: 'Introdução ao estudo de vertebrados: noções sobre variedade de formas, funções, ambiente e modos de vida de peixes, anfíbios, répteis, aves e mamíferos. (Excursão obrigatória, elaboração de trabalhos com apresentação oral e relatório).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B988',
			obligatory: true
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. Bem comum, proteção do meio ambiente, melhoria da qualidade de vida. O Cógigo de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos e análises de prática profissional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99746',
			obligatory: true
		},
		'BH520': {
			code: 'BH520',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento. Controle genético e molecular da diferenciação celular. Estabelecimento dos eixos corporais. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento. Questões éticas e de biossegurança relacionadas à Biologia do Desenvolvimento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['BG380', 'BH420'],
			color: '#466BB9',
			obligatory: true
		},
		'BL029': {
			code: 'BL029',
			name: 'Metodologia e Práticas de Ensino em Biologia II: Ciências Morfofuncionais II',
			ementa: 'Aplicação de métodos e estratégias didáticos-pedagógicas contemporâneas, tais como ferramentas para ensino à distância, preparação de roteiros e materiais para aulas práticas, utilização de programas digitais, para capacitar o estudante de Ciências Biológicas para atuar no Ensino Fundamental e Médio no desenvolvimento de conteúdos pertinentes à área de Biologia Tecidual, Biologia do Desenvolvimento e Fisiologia Humana.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8AB946',
			obligatory: true
		},
		'BL030': {
			code: 'BL030',
			name: 'Metodologia e Práticas de Ensino em Biologia III: Genética e Evolução I',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Genética e Evolução. Abordagem e elaboração de diferentes metodologias para o ensino de Genética e Evolução. Articulação temática e integrada de temas contemporâneos para o ensino de Genética e Evolução. Estudos de caso e problemas brasileiros e mundiais no ensino de Genética e Evolução. O uso de ferramentas tecnológicas, espaços alternativos e ambiente de laboratório para o ensino de Genética e Evolução.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9546B9',
			obligatory: true
		},
		'BP582': {
			code: 'BP582',
			name: 'Parasitologia Animal I',
			ementa: 'Conceito de parasitismo. Relação parasito-hospedeiro. Ciclos biológicos. Exemplos de protozoários, helmintos e artró-podes parasitas. Vetores. Epidemiologia das principais parasitoses de interesse médico. Elaboração de relatórios ou seminários sobre temas de protozologia, helmintologia e ectoparasitologia.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6146B9',
			obligatory: true
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. 2. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. 3. Biosfera, fluxo de energia e ciclos biogeoquímicos. 4. Métodos e ferramentas para estudos biogeográficos. 5. Fitogeografia do Brasil. 6. Biomas do mundo. 7. Elaboração de projetos de pesquisa em Biogeografia. 8. Elaboração de relatórios e seminários em Biogeografia.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B99D46',
			obligatory: true
		},
		'BV581': {
			code: 'BV581',
			name: 'Fisiologia Vegetal Básica: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BV481'],
			color: '#469FB9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#B8B946',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8A46B9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BD621': {
			code: 'BD621',
			name: 'Legislação e Normas para o Profissional de Biologia',
			ementa: 'Análise e estudo das normas e legislação para o profissional em Biologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9465D',
			obligatory: true
		},
		'BD792': {
			code: 'BD792',
			name: 'Temas Transversais no Ensino de Biologia III',
			ementa: 'Elaboração de diferentes metodologias para abordagem dos temas relacionados à sexualidade, reprodução humana e saúde reprodutiva. Anatomia do sistema reprodutor de humanos, tipos de reprodução, ciclo menstrual, métodos contraceptivos, hormônios sexuais e puberdade, doenças sexualmente transmissíveis e seus métodos de prevenção.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#ACB946',
			obligatory: true
		},
		'BL600': {
			code: 'BL600',
			name: 'Produção e Análise de Textos em Ciências Biológicas',
			ementa: 'Vivenciar processos de geração e avaliação de textos em Língua Portuguesa contendo conhecimento de Ciências ou Biologia. Reconhecer espaços institucionais relacionados às Ciências de Biologia (laboratórios, museus, parques, TV, imprensa, mídias sociais, etc.) onde há necessidade de produção de textos em Língua Portuguesa. Reconhecer as diferentes formas de tratamento do conhecimento científicos e biológico sob a forma de texto nestes diferentes espaços de ensino. Reconhecer as diferentes produções textuais como indicadores de aprendizagem. Realizar a avaliar a produção de textos em diferentes contextos (relatórios científicos, pôsteres, sítios de internet, elementos de publicação em mídias sociais, etc.).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A346',
			obligatory: true
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: '',
			color: '#A146B9',
			obligatory: true
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4654B9',
			obligatory: true
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5646B9',
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
		'BL034': {
			code: 'BL034',
			name: 'Metodologia e Práticas de Ensino em Biologia e Ciências da Natureza I',
			ementa: 'Estudo das propostas de ensino de Biologia e Ciências da Natureza na escola fundamental e média. Análise de recursos e materiais para o ensino com ênfase em Biologia Vegetal. Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Biologia Vegetal na escola fundamental e média. Elaboração de projetos, textos e relatórios em Biologia Vegetal.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT281', 'BT482', 'BV481'],
			color: '#936870',
			obligatory: true
		},
		'BL300': {
			code: 'BL300',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação dos pontos de vista dos principais filósofos desde os pré-socráticos até os atuais e dos principais problemas abordados pela filosofia das Ciências Naturais. Leitura, elaboração de questões, condução de seminários e debate de textos publicados na imprensa e em revistas especializadas e interpretação e discussão de filmes comerciais sob diferentes pontos de vista da filosofia da ciência como pedagogias de ensino de Ciências e Biologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B971',
			obligatory: true
		},
		'BL583': {
			code: 'BL583',
			name: 'Construção de Mídias para o Ensino de Ciências e Biologia',
			ementa: 'Utilização de computadores para o desenvolvimento de material didático nas áreas de Ciências e Biologia. Edição digital de textos, imagens, áudio e vídeos. Redação de argumento de roteiros de material didático. Apresentação oral da produção feita durante a disciplina.',
			semestre: 1,
			vector: {T:1, P:6, L:1, O:0, D:0, HS:8, SL:2, C:8},
			requisitos: '',
			color: '#4659B9',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B98046',
			obligatory: true
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional. Trabalho de campo orientado para a avaliação dos componentes da prática educativa a partir de contextos nos quais ela se desenvolve. Elaboração de projetos e propostas que ampliem as alternativas de intervenção em ações pedagógicas coletivas, estabelecidas em parceria com os profissionais que participam da formação do professor nos variados campos de estágio.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#46B96B',
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
		'BD694': {
			code: 'BD694',
			name: 'Temas Transversais no Ensino de Biologia II',
			ementa: 'Saúde coletiva: qualidade de vida, ambiente e sociedade. Métodos de controle de microorganismos; vacinas e a saúde humana e a de outros animais; alterações no ambiente e a saúde coletiva; o homem e seu papel nas epidemias. Novas epidemias: a sociedade contemporânea e a obesidade.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#467CB9',
			obligatory: true
		},
		'BL031': {
			code: 'BL031',
			name: 'Metodologia e Prática de Ensino em Biologia IV: Doenças Infecciosas',
			ementa: 'Planejamento, elaboração, aplicação, avaliação de atividades e programas para o ensino de Microbiologia e Parasitologia com ênfase em patógenos humanos, e Imunologia com ênfase nos mecanismos de defesa de humanos. Abordagem e elaboração de diferentes metodologias para o ensino desses temas da área de saúde no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9464C',
			obligatory: true
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada. Condução de seminário e apresentação de relatório sobre tema relacionado à disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#A746B9',
			obligatory: true
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B96946',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
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
			requisitos: ['AA200', 'AA430'],
			color: '#46B999',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B6B9',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4A46B9',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B95D46',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B96346',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#A7B946',
			obligatory: false
		},
		'BD001': {
			code: 'BD001',
			name: 'Atividades Acadêmicos-Científicas I',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#46B959',
			obligatory: false
		},
		'BD002': {
			code: 'BD002',
			name: 'Atividades Acadêmico-Científicas II',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B98C46',
			obligatory: false
		},
		'BD003': {
			code: 'BD003',
			name: 'Integralização de Atividades Acadêmico-Científicas III',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#A1B946',
			obligatory: false
		},
		'BD004': {
			code: 'BD004',
			name: 'Atividades Acadêmico-Científicas IV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B98D',
			obligatory: false
		},
		'BD005': {
			code: 'BD005',
			name: 'Atividades Acadêmico-Científicas V',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#50B946',
			obligatory: false
		},
		'BD006': {
			code: 'BD006',
			name: 'Atividades Acadêmico-Científicas VI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: false
		},
		'BD007': {
			code: 'BD007',
			name: 'Atividades Acadêmico-Científicas VII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#7E46B9',
			obligatory: false
		},
		'BD008': {
			code: 'BD008',
			name: 'Atividades Acadêmico-Científicas VIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B94C46',
			obligatory: false
		},
		'BD009': {
			code: 'BD009',
			name: 'Atividades Acadêmico-Científicas IX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#8F46B9',
			obligatory: false
		},
		'BD010': {
			code: 'BD010',
			name: 'Atividades Acadêmico-Científicas X',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B9467A',
			obligatory: false
		},
		'BD011': {
			code: 'BD011',
			name: 'Atividades Acadêmico-Científicas XI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#5046B9',
			obligatory: false
		},
		'BD012': {
			code: 'BD012',
			name: 'Atividades Acadêmico-Científicas XII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#B946AE',
			obligatory: false
		},
		'BD013': {
			code: 'BD013',
			name: 'Atividades Acadêmico-Científicas XIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#46B9AA',
			obligatory: false
		},
		'BD014': {
			code: 'BD014',
			name: 'Atividades Acadêmico-Científicas XIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46AAB9',
			obligatory: false
		},
		'BD015': {
			code: 'BD015',
			name: 'Atividades Acadêmico-Científicas XV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#B9AE46',
			obligatory: false
		},
		'BD016': {
			code: 'BD016',
			name: 'Atividades Acadêmico-Científicas XVI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B9A846',
			obligatory: false
		},
		'BD017': {
			code: 'BD017',
			name: 'Atividades Acadêmico-Científicas XVII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#9BB946',
			obligatory: false
		},
		'BD018': {
			code: 'BD018',
			name: 'Atividades Acadêmico-Científicas XVIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#46A5B9',
			obligatory: false
		},
		'BD019': {
			code: 'BD019',
			name: 'Atividades Acadêmico-Científicas XIX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#46B948',
			obligatory: false
		},
		'BD020': {
			code: 'BD020',
			name: 'Atividades Acadêmico-Científicas XX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#4AB946',
			obligatory: false
		},
		'BD021': {
			code: 'BD021',
			name: 'Atividades Acadêmico-Científicas XXI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#B96F46',
			obligatory: false
		},
		'BD022': {
			code: 'BD022',
			name: 'Atividades Acadêmico-Científicas XXII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#6DB946',
			obligatory: false
		},
		'BD023': {
			code: 'BD023',
			name: 'Atividades Acadêmico-Científicas XXIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#B9469D',
			obligatory: false
		},
		'BD024': {
			code: 'BD024',
			name: 'Atividades Acadêmico-Científicas XXIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#46B976',
			obligatory: false
		},
		'BD025': {
			code: 'BD025',
			name: 'Atividades Acadêmico-Científicas XXV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#B946B4',
			obligatory: false
		},
		'BD026': {
			code: 'BD026',
			name: 'Atividades Acadêmico-Científicas XXVI',
			ementa: 'Atividades acadêmico-científcas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#4699B9',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B99146',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B954',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#9B46B9',
			obligatory: false
		},
		'BE501': {
			code: 'BE501',
			name: 'Iniciação Científica em Ecologia Animal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B9468C',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4682B9',
			obligatory: false
		},
		'BE601': {
			code: 'BE601',
			name: 'Iniciação Científica em Ecologia Animal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#56B946',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B94674',
			obligatory: false
		},
		'BF501': {
			code: 'BF501',
			name: 'Iniciação Científica em Fisiologia Humana I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#46B982',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#465FB9',
			obligatory: false
		},
		'BF601': {
			code: 'BF601',
			name: 'Iniciação Científica em Fisiologia Humana II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B9A5',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#78B946',
			obligatory: false
		},
		'BG501': {
			code: 'BG501',
			name: 'Iniciação Científica em Evolução I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#468DB9',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B846B9',
			obligatory: false
		},
		'BG601': {
			code: 'BG601',
			name: 'Iniciação Científica em Evolução II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94686',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Embriologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#6D46B9',
			obligatory: false
		},
		'BH502': {
			code: 'BH502',
			name: 'Iniciação Científica em Biologia Tecidual I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#8FB946',
			obligatory: false
		},
		'BH511': {
			code: 'BH511',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#84B946',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B97C',
			obligatory: false
		},
		'BH602': {
			code: 'BH602',
			name: 'Iniciação Científica em Biologia Tecidual II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B0B9',
			obligatory: false
		},
		'BH611': {
			code: 'BH611',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B9B6',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4676B9',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B946A3',
			obligatory: false
		},
		'BL500': {
			code: 'BL500',
			name: 'Iniciação Científica em Ensino I',
			ementa: 'Introdução à pesquisa qualitativa do campo das ciências humanas. Pesquisa e estudos em epistemologia da ciência aplicados ao ensino de ciências e biologia. Coleta de dados, metodologias de pesquisa e abordagem científica, análise dos resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B94657',
			obligatory: false
		},
		'BL601': {
			code: 'BL601',
			name: 'Iniciação Científica em Ensino II',
			ementa: 'Introdução à pesquisa qualitativa do campo das ciências humanas. Pesquisa e estudos em epistemologia da ciência aplicados ao ensino de ciências e biologia. Coleta de dados, metodologias de pesquisa e abordagem científica, análise dos resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#46B99F',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B9466F',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8446B9',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#AC46B9',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B97446',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B2B946',
			obligatory: false
		},
		'BT501': {
			code: 'BT501',
			name: 'Iniciação Científica em Ecologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94669',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B965',
			obligatory: false
		},
		'BT601': {
			code: 'BT601',
			name: 'Iniciação Científica em Ecologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94646',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B94663',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4665B9',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B97A46',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B95746',
			obligatory: false
		},
		'EL201': {
			code: 'EL201',
			name: 'Iniciação Científica em Educação II',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#7846B9',
			obligatory: false
		},
		'EL505': {
			code: 'EL505',
			name: 'Iniciação Científica em Ensino de Ciências I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B946A8',
			obligatory: false
		},
		'EL506': {
			code: 'EL506',
			name: 'Iniciação Científica em Ensino de Biologia I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#61B946',
			obligatory: false
		},
		'EL605': {
			code: 'EL605',
			name: 'Iniciação Científica em Ensino de Ciências II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B98646',
			obligatory: false
		},
		'EL606': {
			code: 'EL606',
			name: 'Iniciação Científica em Ensino de Biologia II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#95B946',
			obligatory: false
		}
	}
};

export default catalogue;
