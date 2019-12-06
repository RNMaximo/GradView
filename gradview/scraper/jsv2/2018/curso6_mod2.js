const catalogue = {
	totalCredits: 219,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MS380', 'BT181', 'BE180', 'BG180', 'BC182', 'BZ183', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BG200', 'BZ280', 'F_107', 'BG282', 'BC282', 'BH282', 'BB281', 'BT281', 'BA281']
		},
		'sem-3': {
			id: '3',
			subjects: ['BM382', 'BZ380', 'ELET03', 'BG380', 'BI381', 'BF381', 'BB381', 'BT382']
		},
		'sem-4': {
			id: '4',
			subjects: ['BV481', 'BZ480', 'BE480', 'BG480', 'BH420', 'BF481', 'ELET04', 'BT482']
		},
		'sem-5': {
			id: '5',
			subjects: ['BV581', 'GM280', 'ELET05', 'BH520', 'BT201', 'BP582']
		},
		'sem-6': {
			id: '6',
			subjects: ['GM450', 'BD520', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['BL300', 'BD621', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BT681', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 22,
			hasRestrictions: true,
			subjects: ['BB017', 'BB018', 'BB585', 'BC680', 'BC692', 'BE781', 'BE782', 'BF586', 'BF587', 'BG580', 'BG582', 'BH382', 'BH584', 'BH586', 'BH684', 'BI583', 'BM584', 'BM681', 'BM682', 'BP580', 'BP590', 'BP670', 'BP915', 'BT582', 'BT595', 'BT597', 'BT682', 'BT685', 'BT792', 'BT916', 'BV586', 'BV587', 'BV782', 'BV880', 'BV884', 'BV886', 'BV888', 'BV916', 'BV925', 'BZ587', 'BZ599', 'BZ680', 'BZ817', 'FR725'],
		},
		'elet-3': {
			credits: 15,
			hasRestrictions: true,
			subjects: ['BA581', 'BA582', 'BA583', 'BB586', 'BB590', 'BC590', 'BC591', 'BC592', 'BC690', 'BC695', 'BC698', 'BC699', 'BD---', 'BE582', 'BE583', 'BE584', 'BE585', 'BE586', 'BE587', 'BE593', 'BE594', 'BE599', 'BF590', 'BG585', 'BG691', 'BH525', 'BH530', 'BH555', 'BH685', 'BI573', 'BM650', 'BP325', 'BP326', 'BP327', 'BT561', 'BV885', 'BZ550', 'BZ560', 'BZ570', 'BZ590', 'FA001', 'FA733', 'FA874', 'GE801', 'GE913', 'GE916', 'GN101'],
		},
		'elet-4': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA500', 'BB500', 'BC500', 'BD500', 'BE500', 'BE501', 'BF500', 'BF501', 'BG500', 'BG501', 'BH501', 'BH502', 'BH511', 'BI500', 'BM500', 'BP500', 'BT500', 'BT501', 'BV500', 'BZ500'],
		},
		'elet-5': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA600', 'BB600', 'BC600', 'BD600', 'BE600', 'BE601', 'BF600', 'BF601', 'BG600', 'BG601', 'BH601', 'BH602', 'BH611', 'BI600', 'BM600', 'BP600', 'BT600', 'BT601', 'BV600', 'BZ600'],
		},
		'elet-6': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['BA700', 'BB700', 'BC700', 'BD700', 'BE700', 'BF700', 'BG700', 'BG712', 'BH702', 'BH711', 'BH712', 'BI700', 'BM710', 'BP700', 'BT700', 'BV700', 'BZ700'],
		},
		'elet-7': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['BA800', 'BB800', 'BC800', 'BD800', 'BE800', 'BF800', 'BG800', 'BG812', 'BH802', 'BH811', 'BI800', 'BM800', 'BP800', 'BT800', 'BT801', 'BV800', 'BZ800'],
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
			color: '#4649B9',
			obligatory: true
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Conceitos básicos de sistemas ecológicos. Enfoque teórico-prático de situações reais envolvendo observação, métodos e interpretação de dados ecológicos. Excursões obrigatórias, elaboração de projetos, relatórios científicos, apresentações orais e em forma de painel.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B953',
			obligatory: true
		},
		'BG180': {
			code: 'BG180',
			name: 'Introdução à Evolução',
			ementa: 'Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94650',
			obligatory: true
		},
		'BT181': {
			code: 'BT181',
			name: 'Ecologia no Campo I',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre populações e comunidades vegetais e animais, em diferentes ambiente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#46B96B',
			obligatory: true
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Diversidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9465E',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4658B9',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Estequiometria. Ligação química. Funções da química orgânica. Experimentos que ilustram o método científico, conceito de mol, ligação química, equilíbrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B99C',
			obligatory: true
		},
		'BA281': {
			code: 'BA281',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#56B946',
			obligatory: true
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A746',
			obligatory: true
		},
		'BC282': {
			code: 'BC282',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, movimentação celular, sinalização celular, síntese e degradação proteica, ciclo celular: mecanismos e controle molecular, meiose, diferenciação celular, morte celular e câncer como modelo: alteraçoes nos processos celulares.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC182'],
			color: '#4649B9',
			obligatory: true
		},
		'BG200': {
			code: 'BG200',
			name: 'Bioestatística',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#4658B9',
			obligatory: true
		},
		'BG282': {
			code: 'BG282',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG180'],
			color: '#B94650',
			obligatory: true
		},
		'BH282': {
			code: 'BH282',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz extracelular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: '#4649B9',
			obligatory: true
		},
		'BT281': {
			code: 'BT281',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Introdução às técnicas de coleta e de preparação de amostras para Coleções Biológicas. Noções de avaliação da biodiversidade, levantamento e mapeamento de criptógamas. Elaboração de relatórios sobre atividade de campo. Elaboração e apresentação de seminários em grupo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5BB946',
			obligatory: true
		},
		'BZ280': {
			code: 'BZ280',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Origem, evolução e diversidade dos Invertebrados Metazoários, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como adaptações aos ambientes em que vivem suas espécies, incluindo mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B975',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B970',
			obligatory: true
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97246',
			obligatory: true
		},
		'BF381': {
			code: 'BF381',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistema nervoso, neuromuscular e endócrino.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4670B9',
			obligatory: true
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG282'],
			color: '#B94650',
			obligatory: true
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases moleculares celulares do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas que mantêm a integridade e a homeostasia do hospedeiro. Elaboração de relatórios de aulas práticas e apresentação de seminários em tópicos de Imunologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC282'],
			color: '#4649B9',
			obligatory: true
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus. Metabolismo de crescimento microbiano. Controle dos microrganismos. Conceito de ecologia microbiana. Métodos de visualização de bactérias. Crescimento bacteriano \"in vitro\".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#95B946',
			obligatory: true
		},
		'BT382': {
			code: 'BT382',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angioespermas e estratégias reprodutivas. Aspectos gerais da morfologia de Angiospermas: raiz, caule, folhas, inflorescências, flores, frutos e sementes. Aspectos gerais de citologia, histologia e anatomia dos órgãos vegetativos de Angiospermas. Elaboração de projetos e relatórios de projetos em métodos em morfologia e anatomia vegetal. Seminários sobre temas atuais em morfologia e anatomia vegetal.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A246',
			obligatory: true
		},
		'BZ380': {
			code: 'BZ380',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origens evolutivas, diversidades, forma, função e organização dos Ecdysozoa e Deuterostomia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ280'],
			color: '#46B975',
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
			ementa: 'A ecologia e seu domínio, organismos: ecofisiologia. Populações: dinâmicas e interações. Comunidades: organização espacial, temporal e funcional. Ecossistemas: conservação. Aplicação de conceitos ecológicos em problemas atuais. Excursão obrigatória (ecossistemas terrestres e aquáticos). Elaboração de projetos de campo, apresentação oral e seminários.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE180', 'BT181'],
			color: '#46B95F',
			obligatory: true
		},
		'BF481': {
			code: 'BF481',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistemas digestório, cardiovascular, respiratório e renal.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF381'],
			color: '#4670B9',
			obligatory: true
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: '#B94650',
			obligatory: true
		},
		'BH420': {
			code: 'BH420',
			name: 'Embriologia Comparada',
			ementa: 'Estudo da embriologia comparada, com ênfase nos processos comuns ao desenvolvimento animal. Os tópicos incluem gametogênese, fecundação e embriogênese inicial de organismos-modelo invertebrados (ouriço-do-mar e drosófila) e vertebrados (peixe-zebra, Xenopus, galinha e camundongo), bem como o estudo do desenvolvimento embrionário humano. As aulas-práticas consistirão na observação de embriões de galinha em diferentes estágios do desenvolvimento e na elaboração de relatórios escritos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH282'],
			color: '#4649B9',
			obligatory: true
		},
		'BT482': {
			code: 'BT482',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas: regras básicas de nomenclatura botânica; coleta e preservação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Noções de biossistemática e de sistemas de reprodução em angiospermas. Noções sobre biogeografia e sobre a aplicação do conhecimento taxonômico vegetal em conservação da biodiversidade, pesquisa e produção de bens (alimentos, fármacos, combustível renovável, etc), paisagismo e arborização urbana.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT382'],
			color: '#B9A246',
			obligatory: true
		},
		'BV481': {
			code: 'BV481',
			name: 'Fisiologia Vegetal Básica: Metabolismo',
			ementa: 'Relações hídricas, absorção iônica e transporte de solutos, nutrição mineral, assimilação de nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7DB946',
			obligatory: true
		},
		'BZ480': {
			code: 'BZ480',
			name: 'Zoologia de Vertebrados',
			ementa: 'Introdução ao estudo de vertebrados: noções sobre variedade de formas, funções, ambiente e modos de vida de peixes, anfíbios, répteis, aves e mamíferos. (Excursão obrigatória, elaboração de trabalhos com apresentação oral e relatório).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B246B9',
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
		'BH520': {
			code: 'BH520',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento. Controle genético e molecular da diferenciação celular. Estabelecimento dos eixos corporais. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento. Questões éticas e de biossegurança relacionadas à Biologia do Desenvolvimento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['BG380', 'BH420'],
			color: '#804885',
			obligatory: true
		},
		'BP582': {
			code: 'BP582',
			name: 'Parasitologia Animal I',
			ementa: 'Conceito de parasitismo. Relação parasito-hospedeiro. Ciclos biológicos. Exemplos de protozoários, helmintos e artró-podes parasitas. Vetores. Epidemiologia das principais parasitoses de interesse médico. Elaboração de relatórios ou seminários sobre temas de protozologia, helmintologia e ectoparasitologia.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A946B9',
			obligatory: true
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. 2. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. 3. Biosfera, fluxo de energia e ciclos biogeoquímicos. 4. Métodos e ferramentas para estudos biogeográficos. 5. Fitogeografia do Brasil. 6. Biomas do mundo. 7. Elaboração de projetos de pesquisa em Biogeografia. 8. Elaboração de relatórios e seminários em Biogeografia.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46AFB9',
			obligatory: true
		},
		'BV581': {
			code: 'BV581',
			name: 'Fisiologia Vegetal Básica: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BV481'],
			color: '#7DB946',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B4',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:15},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. Bem comum, proteção do meio ambiente, melhoria da qualidade de vida. O Cógigo de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos e análises de prática profissional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9AA',
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
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
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
			color: '#B9467B',
			obligatory: true
		},
		'BL300': {
			code: 'BL300',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação dos pontos de vista dos principais filósofos desde os pré-socráticos até os atuais e dos principais problemas abordados pela filosofia das Ciências Naturais. Leitura, elaboração de questões, condução de seminários e debate de textos publicados na imprensa e em revistas especializadas e interpretação e discussão de filmes comerciais sob diferentes pontos de vista da filosofia da ciência como pedagogias de ensino de Ciências e Biologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#51B946',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada. Condução de seminário e apresentação de relatório sobre tema relacionado à disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#B99D46',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
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
			color: '#466BB9',
			obligatory: false
		},
		'BA581': {
			code: 'BA581',
			name: 'Esplancnologia',
			ementa: 'Esplancnologia: sistema circulatório, sistema respiratório, sistema digestório, sistema urogenital (urinário, genital masculino, genital feminino e glândulas mamárias).',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['BA281'],
			color: '#56B946',
			obligatory: false
		},
		'BA582': {
			code: 'BA582',
			name: 'Bases Anatômicas da Neurobiologia',
			ementa: 'Estudo da anatomia macroscópica e seccional do Sistema Nervoso Central. Vias aferentes e eferentes. Tronco encefálico: vias trigeminais. Cerebelo: vias e córtex cerebelar. Diencéfalo: tálamo, hipotálamo e hipófise. Telencéfalo: áreas motoras, sensitivas e de associação. Sistema límbico. Estudo de temas relacionados à neurobiologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'BA281'],
			color: '#56B946',
			obligatory: false
		},
		'BA583': {
			code: 'BA583',
			name: 'Biologia da Regeneração Nervosa',
			ementa: 'Bases da sobrevivência neuronal e regeneração do Sistema Nervoso após lesões centrais e periféricas e durante o curso de doenças neurodegenerativas. Papel da glia na neuroproteção e neurodegeneração. Modelos experimentais empregados no desenvolvimento de estratégias para regeneração nervosa, com ênfase em lesões do plexo branquial. Estudo anatômico dos plexos branquial e lombossacrale de modelos que mimetizam sua lesão/reparo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'BA281'],
			color: '#56B946',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B96346',
			obligatory: false
		},
		'BA700': {
			code: 'BA700',
			name: 'Estágio Supervisionado em Anatomia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de Anatomia, do Departamento de Biologia Funcional e Estrutural.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#87B946',
			obligatory: false
		},
		'BA800': {
			code: 'BA800',
			name: 'Estágio Supervisionado em Anatomia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de Anatomia, do Departamento de Biologia Estrutural e Funcional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#9546B9',
			obligatory: false
		},
		'BB017': {
			code: 'BB017',
			name: 'A Teoria do Proteoma e da Proteômica',
			ementa: 'A proteômica é a ciência que estuda o proteoma, o complemento proteico do genoma, num dado momento, numa dada condição. Os alunos terão um treinamento teórico nos conceitos de análises de proteoma utilizando as técnicas mais difundidas em proteômica em larga escala como a eletroforese de duas dimensões e espectrometria de massas (shotgun). Cromatografia líquida, SDS-PAGE e análise de dados in silico também serão abordados. As aulas basearão em artigos científicos, os quais deverão ser estudados pelos alunos previamente e discutidos em sala. Em geral, proteômica quantitativa como será abordada, visando compreender o papel das proteínas em mecanismos patogênicos (proteômica clínica será o foco, mas não exclusivamente). Ao final do curso, os alunos terão base suficiente para iniciar experimentos em laboratório, que poderão ser empregadas na disciplina prática subsequente (BB018). Como esperado, o ideal é que os alunos desta disciplina já tenham cursado alguma disciplina que aborde estrutura e função de proteínas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46B97F',
			obligatory: false
		},
		'BB018': {
			code: 'BB018',
			name: 'O Proteoma e a Proteômica na Prática',
			ementa: 'A proteômica é a ciência que estuda o proteoma, que é o conjunto de proteínas expressas (produzidas) por uma célula, tecido ou organismo, num dado momento, numa dada condição. Os alunos terão um treinamento prático nos conceitos de análises de proteoma utilizando as técnicas mais difundidas em proteômica em larga escala como a eletroforese de duas dimensõs e espectrometria de massas (shotgun). Ainda, cromatografia líquida. SDS-PAGE e análise de dados in silico serão abordados. Assuntos de proteômica comparativa serão abordados, através da compreensão do papel das proteínas em mecanismos patogênicos (proteômica clínica será o foco, mas não exclusivamente).',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['BB017'],
			color: '#46B97F',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B94655',
			obligatory: false
		},
		'BB585': {
			code: 'BB585',
			name: 'Enzimologia Teórica e Aplicada',
			ementa: 'Teoria: sistema tampão; técnicas de purificação e caracterização de enzimas através de extração, centrifugação, precipitação, cromatografias; eletroforese; cristalografia; espectrofotometria; radioisótopos; clonagem e expressão heteróloga; cinética enzimática; aplicações biotecnológicas de enzimas; biologia molecular aplicada a enzimologia e engenharia de proteínas. Prática: sistema tampão; espectrofotometria; extração e precipitação salina de enzimas; determinação de parâmetros cinéticos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A446B9',
			obligatory: false
		},
		'BB586': {
			code: 'BB586',
			name: 'Expressão de Proteínas por Bactérias: da Clonagem à Purificação',
			ementa: 'Teoria: sistemas de expressão de proteínas; expressão de proteínas em bactérias; plasmídeos; clonagem e subclonagem em plasmídeos; fundamentos de PCR; técnicas de purificação e caracterização de proteínas; centrifugação; precipitação; cromatografia; eletroforese; espectrofotometria. Prática: cultivo de bactérias; extração e purificação de proteínas; preparo de DNA plasmidial; PCR; espectrofotometria; eletroforese de DNA e proteínas.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B98F46',
			obligatory: false
		},
		'BB590': {
			code: 'BB590',
			name: 'Biologia Molecular Aplicada a Biotecnologia',
			ementa: 'A disciplina tem como objetivo geral discutir com os alunos as bases teóricas da biotecnologia nas áreas ambiental, saúde humana, biocombustíveis e produção de alimentos, informando sobre os principais processos biológicos envolvidos. Apresentar mediante exemplos concretos as abordagens metodológicas empregadas para viabilizar estes processos. Para isso, espera-se que os alunos matriculados',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200', 'BB281'],
			color: '#B9A746',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B98046',
			obligatory: false
		},
		'BB700': {
			code: 'BB700',
			name: 'Estágio Supervisionado em Bioquímica I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Bioquímica.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#4653B9',
			obligatory: false
		},
		'BB800': {
			code: 'BB800',
			name: 'Estágio Supervisionado em Bioquímica II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do departamento de Bioquímica.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#46B984',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#8746B9',
			obligatory: false
		},
		'BC590': {
			code: 'BC590',
			name: 'Ultraestrutura Celular I',
			ementa: 'Metodologia básica para o estudo ultraestrutural, com ênfase na microscopia eletrônica de varredura. Noções básicas práticas sobre a operação do microscópio eletrônico. Interpretação dos resultados obtidos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: false
		},
		'BC591': {
			code: 'BC591',
			name: 'Sinalização Celular',
			ementa: 'Princípios gerais da sinalização celular: receptores, mensageiros intracelulares e moléculas efetoras. Vias de sinalização celular mediadas por receptores de membrana e por receptores intracelulares. Integração entre os sistemas de sinalização. Sinalização na regulação de diferentes processos celulares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BC182'],
			color: '#4649B9',
			obligatory: false
		},
		'BC592': {
			code: 'BC592',
			name: 'Biologia Celular do Câncer',
			ementa: 'O câncer como modelo de estudo para a Biologia Celular. Alterações nos processos biológicos e componentes celulares que contribuem para o desenvolvimento e progressão tumoral. Metodologias para a pesquisa, diagnóstico e tratamento do câncer.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BC182'],
			color: '#4649B9',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#9AB946',
			obligatory: false
		},
		'BC680': {
			code: 'BC680',
			name: 'Biologia Celular e Molecular',
			ementa: 'Temas de destaque atual sobre organelas celulares, metodologias de estudo ou funções celulares.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: '#4649B9',
			obligatory: false
		},
		'BC690': {
			code: 'BC690',
			name: 'Ultraestrutura Celular II',
			ementa: 'Metodologia básica para o estudo ultraestrutural, com ênfase no preparo para a microscopia eletrônica de transmissão.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#6F46B9',
			obligatory: false
		},
		'BC692': {
			code: 'BC692',
			name: 'Princípios de Cultura Celular',
			ementa: 'Noções básicas sobre cultura de células animais. Métodos de esterilização. Culturas de curta duração. Manuseio de linhagens celulares.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: '#4649B9',
			obligatory: false
		},
		'BC695': {
			code: 'BC695',
			name: 'Citogenética',
			ementa: 'Métodos clássicos e moleculares utilizados no estudo da estrutura e da função dos cromossomos. Análise da variabilidade cariotípica e sua importância em estudos taxonômicos e filogenéticos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['BC182'],
			color: '#4649B9',
			obligatory: false
		},
		'BC698': {
			code: 'BC698',
			name: 'Cromatina e Epigenética',
			ementa: 'Estrutura e organização da cromatina. Dinâmica cromatínica em modelos especiais, envelhecimento e situações de estresse.Mecanismos epigenéticos: modificações no DNA, em Histonas e RNAs não codificantes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94677',
			obligatory: false
		},
		'BC699': {
			code: 'BC699',
			name: 'Introdução à Biologia Sintética',
			ementa: 'De clonagem à construção de organismos sintéticos. Engenharia genética, componentes sintéticos, promotores modulares, competições internacionais para a construção de partes sintéticas compatíveis), colaborações internacionais. Novas estratégias e aplicações.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200', 'BC182', 'BC282', 'BG380'],
			color: '#6C4896',
			obligatory: false
		},
		'BC700': {
			code: 'BC700',
			name: 'Estágio Supervisionado em Biologia Celular I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas junto ao Departamento de Biologia Funcional e Estrutural, em uma das áreas de pesquisa em Biologia Celular.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#4692B9',
			obligatory: false
		},
		'BC800': {
			code: 'BC800',
			name: 'Estágio Supervisionado em Biologia Celular II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas junto ao Departamento de Biologia Funcional e Estrutural, em uma das áreas de pesquisa em Biologia Celular.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#65B946',
			obligatory: false
		},
		'BD---': {
			code: 'BD---',
			name: 'Qualquer Disciplina com codigo BD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo BD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9046B9',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B96D46',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B96846',
			obligatory: false
		},
		'BD700': {
			code: 'BD700',
			name: 'Processos Industriais I',
			ementa: 'Estágio curricular junto a indústrias.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#B746B9',
			obligatory: false
		},
		'BD800': {
			code: 'BD800',
			name: 'Processos Industriais II',
			ementa: 'Estágio curricular junto às indústrias.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:5, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#46B966',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#5146B9',
			obligatory: false
		},
		'BE501': {
			code: 'BE501',
			name: 'Iniciação Científica em Ecologia Animal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B9469D',
			obligatory: false
		},
		'BE582': {
			code: 'BE582',
			name: 'Ecologia de Agroecossistemas',
			ementa: 'Esta disciplina visa entender a relação entre ecologia e agriculura. No final da disciplina o aluno deverá entender porque a compreensão das interações ecológicas é fundamental para uma agricultura sustentável, descrever as interações entre plantas que afetam o seu crescimento e sua suscebilidade a pragas e doenças, entender como as redes de interções ecológicas são fundamentais para obter controle biológico de forma autônoma no agroecossistema, compreender como a matriz agrícola afeta a conservação da biodiversidade. Na disciplina será abordado: 1) a relação entre ecologia e agricultura; 2) Interações entre plantas; 3) Interações ecológicas e controle de pragas; 4)Agricultura e biologia da conservação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE583': {
			code: 'BE583',
			name: 'Ecologia Química',
			ementa: 'Ecologia química é o estudo ecológico da origem, função e significância de substãncias químicas presentes em organismos e das interações ecológicas das quais elas fazem parte. Dentro deste contexto a disciplina irá abordar a evolução destas substâncias em organismos, a otimização de defessas químicas em plantas e animais como se determina o papel de substâncias químicas em interações ecológicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE584': {
			code: 'BE584',
			name: 'Tópicos em Ecologia de Organismos, Populações, Comunidades e Ecossistemas I',
			ementa: 'A disciplina abordará temas em Ecologia de Organismos, Populações, comunidades ou Ecossistemas',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE585': {
			code: 'BE585',
			name: 'Tópicos em Ecologia de Organismos, Populações, Comunidades e Ecossistemas II',
			ementa: 'A disciplina abordará temas em Ecologia de Organismos, populações, comunidades ou ecossistemas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE586': {
			code: 'BE586',
			name: 'Tópicos em Ecologia de Organismos, Populações, Comunidades e Ecossistemas III',
			ementa: 'A disciplina abordará temas em ecologia de organismos, populações, comunidades ou ecossistemas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE587': {
			code: 'BE587',
			name: 'Tópicos em Ecologia de Organismos, Populações, Comunidades e Ecossistemas IV',
			ementa: 'A disciplina abordará temas em ecologia de organismos, populações, comunidades ou ecossistemas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9465A',
			obligatory: false
		},
		'BE593': {
			code: 'BE593',
			name: 'Ecologia Genética e Evolutiva',
			ementa: 'Ação de fatores ecológicos sobre a composição genética e a evolução adaptativa de populações, focalizando ciclos de vida, polimorfismos genéticos e estratégias alimentares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B98A46',
			obligatory: false
		},
		'BE594': {
			code: 'BE594',
			name: 'Ecologia de Interações',
			ementa: 'Ecologia e evolução de interações envolvendo competição, predação, herbivoria, mutualismo e parasitismo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE599': {
			code: 'BE599',
			name: 'Agroecologia e Desenvolvimento Rural Sustentável',
			ementa: 'Análise dos diferentes aspectos ecológicos, culturais, sociais e econômicos dos sistemas de produção agrícola. Potencial das técnicas e manejos agroecológicos para a produção suficiente e sustentável de alimentos Biotecnologia: impactos e potenciais benéficos. Papel da agricultura no desenvolvimento e conservação de recursos naturais. Importância de programas de reforma agrária na equidade e produtividade do setor agrícola. Impacto da globalização econômica na sustentabilidade agrícola, segurança alimentar, qualidade ambiental de vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE480'],
			color: '#46B95F',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#A9B946',
			obligatory: false
		},
		'BE601': {
			code: 'BE601',
			name: 'Iniciação Científica em Ecologia Animal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4666B9',
			obligatory: false
		},
		'BE700': {
			code: 'BE700',
			name: 'Estágio Supervisionado em Ecologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Biologia Animal, na área de Ecologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#6546B9',
			obligatory: false
		},
		'BE781': {
			code: 'BE781',
			name: 'Ecologia Animal',
			ementa: 'Estudos avançados em Ecologia Animal envolvendo tópicos de Ecologia de Organismos, Populações e Comunidades.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE180'],
			color: '#46B953',
			obligatory: false
		},
		'BE782': {
			code: 'BE782',
			name: 'Ecologia Animal no Campo',
			ementa: 'Atividades de campo em Ecologia Animal envolvendo tópicos de Ecologia de Organismos, Populações e Comunidades.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['BE180'],
			color: '#46B953',
			obligatory: false
		},
		'BE800': {
			code: 'BE800',
			name: 'Estágio Supervisionado em Ecologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Biologia Animal, na área de Ecologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#A4B946',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#46B94E',
			obligatory: false
		},
		'BF501': {
			code: 'BF501',
			name: 'Iniciação Científica em Fisiologia Humana I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#46B997',
			obligatory: false
		},
		'BF586': {
			code: 'BF586',
			name: 'Fisiologia Animal Comparada',
			ementa: 'Fisiologia dos sistemas: nervoso, locomotor, digestório, endócrino, reprodutor, cardiovascular, respiratório e renal em invertebrados e vertebrados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF481'],
			color: '#4670B9',
			obligatory: false
		},
		'BF587': {
			code: 'BF587',
			name: 'Neurociência',
			ementa: 'Processos biofísicos responsáveis pela aquisição e integração de informações, e ação do sistema nervoso. Sistemas sensoriais, motores e integração sensoriomotora. Mecanismos de aprendizagem e memória, sono e vigília. Bases neurais da emoção, linguagem, cognição e consciência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF481'],
			color: '#4670B9',
			obligatory: false
		},
		'BF590': {
			code: 'BF590',
			name: 'Fisiologia Humana do Desenvolvimento',
			ementa: 'Estudo dos aspectos da reprodução humana relacionados com diferenciação sexual, puberdade, anticoncepção e parto. Abordagem de temas sobre processos nutricionais e fisiologia endócrina do crescimento e desenvolvimento humano.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B958',
			obligatory: false
		},
		'BF601': {
			code: 'BF601',
			name: 'Iniciação Científica em Fisiologia Humana II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B95D',
			obligatory: false
		},
		'BF700': {
			code: 'BF700',
			name: 'Estágio Supervisionado em Fisiologia e Biofísica I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Biologia Estrutural e Funcional, na área de Fisiologia e Biofísica.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B9468F',
			obligatory: false
		},
		'BF800': {
			code: 'BF800',
			name: 'Estágio Supervisionado em Fisiologia e Biofísica II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de Fisiologia e Biofísica do Departamento de Biologia Estrutural e Funcional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#90B946',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B946B6',
			obligatory: false
		},
		'BG501': {
			code: 'BG501',
			name: 'Iniciação Científica em Evolução I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4684B9',
			obligatory: false
		},
		'BG580': {
			code: 'BG580',
			name: 'Mecanismos de Evolução',
			ementa: 'Variabilidade fenotípica e adaptação. Estrutura genética das populações. Seleção natural. Coeficiente de seleção e tipos de seleção. Picos adaptativos e especiação. Evolução dos grandes grupos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BG480'],
			color: '#B94650',
			obligatory: false
		},
		'BG582': {
			code: 'BG582',
			name: 'Genética Molecular',
			ementa: 'Biblioteca de DNA. Biblioteca Genômica. Vetores de clonagem. Clonagem e expressão em bactérias. Clonagem e expressão em plantas. Sequenciamento de DNA. Mutagênese sítio dirigida. Engenharia de proteínas.',
			semestre: 1,
			vector: {T:1, P:2, L:3, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'BG480'],
			color: '#B94650',
			obligatory: false
		},
		'BG585': {
			code: 'BG585',
			name: 'Introdução à Biologia de Sistemas e à Biologia Sintética',
			ementa: 'A era dos \"omas\" trouxe grande quantidade de dados moleculares sobre os sistemas biológicos. Sua análise em conjunto através da bioinformática tem revelado a existência de redes de interação entre genes, proteínas e metabólitos. Esta abordagem é conhecida como Biologia de Sistemas e é uma ferramenta poderosa sobre a qual uma verdadeira engenharia da vida foi criada: a Biologia Sintética. O curso visa abordar os conceitos básicos dessas novas áreas da biologia e sua aplicação usando um formato padrão de partes biológicas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BB281', 'BB381', 'BG380'],
			color: '#B97549',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8CB946',
			obligatory: false
		},
		'BG601': {
			code: 'BG601',
			name: 'Iniciação Científica em Evolução II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#82B946',
			obligatory: false
		},
		'BG691': {
			code: 'BG691',
			name: 'Genética Molecular e Genômica Básica',
			ementa: 'Conceito de gene, genoma, EST, proteoma, análise da expressão gênica em larga escala, genoma estrutural.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#60B946',
			obligatory: false
		},
		'BG700': {
			code: 'BG700',
			name: 'Estágio Supervisionado em Genética I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do Curso de Bacharelado em Ciências Biológicas, na área de Genética e Evolução do Departamento de Genética, Evolução e Bioagentes.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B946A7',
			obligatory: false
		},
		'BG712': {
			code: 'BG712',
			name: 'Estágio Supervisionado em Evolução I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de pesquisa em Evolução do Departamento de Genética, Evolução e Bioagentes.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#6AB946',
			obligatory: false
		},
		'BG800': {
			code: 'BG800',
			name: 'Estágio Supervisionado em Genética II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de Genética e Evolução do departamento de Genética, Evolução e Bioagentes.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#5B46B9',
			obligatory: false
		},
		'BG812': {
			code: 'BG812',
			name: 'Estágio Supervisionado em Evolução II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de pesquisa em Evolução do Departamento de Genética, Evolução e Bioagentes.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B946B1',
			obligatory: false
		},
		'BH382': {
			code: 'BH382',
			name: 'Biologia Tecidual Aplicada a Vertebrados',
			ementa: 'Biologia tecidual aplicada na correlação morfofuncional em órgãos e, sistemas e sua pluralidade nos vertebrados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BH282'],
			color: '#4649B9',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Embriologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#7846B9',
			obligatory: false
		},
		'BH502': {
			code: 'BH502',
			name: 'Iniciação Científica em Biologia Tecidual I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B99446',
			obligatory: false
		},
		'BH511': {
			code: 'BH511',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B94694',
			obligatory: false
		},
		'BH525': {
			code: 'BH525',
			name: 'Fundamentos e Práticas de Microscopia Aplicados à Biologia',
			ementa: 'Fundamentos da microscopia óptica e eletrônica aplicados à biologia. Noções básicas de preparo de amostra biológica, instrumentação, análise de resultados e quantificação. Apresentação do estado da arte no desenvolvimento tecnológico das sondas moleculares na fronteira da biologia tecidual e molecular aplicados à microscopia correlativa.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B646',
			obligatory: false
		},
		'BH530': {
			code: 'BH530',
			name: 'Análise Crítica de Artigos Científicos',
			ementa: 'Estudo de artigos de alta relevância para as linhas de pesquisa em Biologia Celular e do Desenvolvimento, visando conferir ao aluno métodos de leitura crítica e formulação de hipóteses baseados nos resultados e conclusões sendo apresentadas. Além da análise do conteúdo científico, a disciplina irá abordar aspectos visuais e estéticos dos artigos. \"Não ensine seu filho a ler, ensine-o a criticar o que estiver lendo\" - frase modificada de George Carlin.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B97A',
			obligatory: false
		},
		'BH555': {
			code: 'BH555',
			name: 'Biologia do Envelhecimento Animal',
			ementa: 'Histórico, Definições e Epidemiologia. Aspectos Evolutivos. Doenças Associadas ao Envelhecimento. Envelhecimento em Modelos Animais. Genética do Envelhecimento. Ontogenia e Envelhecimento. Nutrição, Metabolismo e Envelhecimento. Mitocôndria, Balanço Redox e Envelhecimento. Controle Neuroendócrino do Envelhecimento. Controle da Proteostase. Mecanismos de Reparo e Resposta ao Estresse. Ciclo Celular e Senescência. Células-Tronco, Regeneração e Reparo Tecidual. Estratégias Terapêuticas para o Envelhecimento e para suas Doenças Associadas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BB381', 'BC282', 'BG380'],
			color: '#935670',
			obligatory: false
		},
		'BH584': {
			code: 'BH584',
			name: 'Bases Moleculares do Desenvolvimento',
			ementa: 'Bases moleculares do desenvolvimento. Estudo dos mecanismos de regulação da expressão gênica na Embriogênese e processos pós-natais de desenvolvimento. Sinalização molecular na morfogênese e organogênese.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH520'],
			color: '#804885',
			obligatory: false
		},
		'BH586': {
			code: 'BH586',
			name: 'Células-Tronco Embrionárias, as Células que Fazem a Diferença',
			ementa: 'Introdução à biologia das células-tronco embrionárias, explorando o seu estado pluripotente e as suas semelhanças e diferenças com os diferentes tipos celulares do embrião em desenvolvimento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200', 'AA430'],
			color: '#46A5B9',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4DB946',
			obligatory: false
		},
		'BH602': {
			code: 'BH602',
			name: 'Iniciação Científica em Biologia Tecidual II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B95E46',
			obligatory: false
		},
		'BH611': {
			code: 'BH611',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#78B946',
			obligatory: false
		},
		'BH684': {
			code: 'BH684',
			name: 'Embriologia Humana',
			ementa: 'Aspectos morfológicos, celulares, moleculares e funcionais da biologia do desenvolvimento humano. Embriologia geral e dos sistemas. Métodos de estudo e terapêuticos em medicina fetal. Correlações do desenvolvimento humano com as malformações congênitas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BH420', 'BH520'],
			color: '#63499F',
			obligatory: false
		},
		'BH685': {
			code: 'BH685',
			name: 'Técnicas para Diferenciação de Tecidos a Partir de Células-Tronco Embrionárias',
			ementa: 'Técnicas morfológicas e moleulares para a determinação do estado de diferenciação e tipos celulares. Diferenciação de neurônios, células cardíacas, sangue e cartilagem a partir de células-tronco embrionárias murinas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200', 'AA430'],
			color: '#B94672',
			obligatory: false
		},
		'BH702': {
			code: 'BH702',
			name: 'Estágio Supervisionado em Biologia Tecidual I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Histologia e Embriologia, área de Biologia Tecidual.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#4675B9',
			obligatory: false
		},
		'BH711': {
			code: 'BH711',
			name: 'Estágio Supervisionado em Embriologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Histologia e Embriologia, área de Embriologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#9FB946',
			obligatory: false
		},
		'BH712': {
			code: 'BH712',
			name: 'Estágio Supervisionado em Biologia do Desenvolvimento I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Histologia e Embriologia, área de Biologia do Desenvolvimento.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#46B4B9',
			obligatory: false
		},
		'BH802': {
			code: 'BH802',
			name: 'Estágio Supervisionado em Biologia Tecidual II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Histologia e Embriologia, área de Biologia Tecidual.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#46B98D',
			obligatory: false
		},
		'BH811': {
			code: 'BH811',
			name: 'Estágio Supervisionado em Embriologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de pesquisa em Embriologia, do Departamento de Histologia e Embriologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#46B949',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B95046',
			obligatory: false
		},
		'BI573': {
			code: 'BI573',
			name: 'Imunologia Comparada',
			ementa: 'Revisão comparada das propriedades gerais das respostas imunes, abordando comparativamente os componentes do sistema imune inato e do sistema imune adaptativo de diferentes organismos vivos. Aspectos básicos da evolução do sistema imune. Imunidade celular e humoral de invertebrados. Surgimento da imunidade adaptativa e comparação da imunidade adaptativa entre peixes mandibulados e ágnatas. Sistema imune de vertebrados (peixes, anfíbios, repteis, aves e mamíferos).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BI381'],
			color: '#4649B9',
			obligatory: false
		},
		'BI583': {
			code: 'BI583',
			name: 'Imunologia',
			ementa: 'Genética da resposta imune. Moléculas do sistema imune. Macromoléculas antigênicas. Imunoglobulinas. Marcadores de heterogenicidade e os gens da diversidade de anticorpos. Interleucinas e complemento. Regulação. Metodologia imunológica. Radioimuno ensaio e métodos imunoenzimáticos. Clonotipagem celular. Produção de anticorpos monoclonais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BI381'],
			color: '#4649B9',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#6FB946',
			obligatory: false
		},
		'BI700': {
			code: 'BI700',
			name: 'Estágio Supervisionado em Imunologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Genética, Evolução e Bioagentes, área de Imunologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B99946',
			obligatory: false
		},
		'BI800': {
			code: 'BI800',
			name: 'Estágio Supervisionado em Imunologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em Imunologia, junto ao Departamento de Genética, Evolução e Bioagentes.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#AEB946',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#46B988',
			obligatory: false
		},
		'BM584': {
			code: 'BM584',
			name: 'Microbiologia (Biologia Molecular)',
			ementa: 'Caracterização de antígenos dos Micro-organismos. Mecanismos de patogenicidade dos Micro-organismos. Ecologia Microbiana, alteração entre os micro-organismos com ambiente, plantas e animais. Ciclos Biogeoquímicos, Bactérias, Vírus e leveduras como carreadores de genes para proteínas de interesse biotecnológico. Engenharia genética de vacinas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM382'],
			color: '#95B946',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B94668',
			obligatory: false
		},
		'BM650': {
			code: 'BM650',
			name: 'Biologia dos Fungos',
			ementa: 'Características dos fungos. Ciclos de vida. Sistemática fúngica. Principais grupos: Basidiomycota, Ascomycota, Zygomycota e Chytridiomycota. Pseudo-fungos: Oomycota e Myxomycetes. Associações ecológicas dos fungos e biotransformações. Mutualismo. Micoses e micotoxinas. Fungos e a indústria de alimentos. Grandes pragas e pandemias. Coleta, identificação e cultivo de fungos do ambiente. Preparação de exicata e depósito em herbário.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#7D46B9',
			obligatory: false
		},
		'BM681': {
			code: 'BM681',
			name: 'Microbiologia Ambiental',
			ementa: 'Micro-organismos em seus habitats naturais. Estrutura e classificação dos micro-organismos. Nutrição e crescimento microbiano. Estrutura e desenvolvimento de comunidades microbianas. Métodos quantitativos em microbiologia ambiental. Aspectos microbiológicos da biodegradação e da bioremediação. Biofilmes. Processos microbianos de recuperação de metais. Micro-organismos indicadores da qualidade do ar. Síndrome dos edifícios doentes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#465DB9',
			obligatory: false
		},
		'BM682': {
			code: 'BM682',
			name: 'Laboratório de Microbiologia',
			ementa: 'Principais técnicas utilizadas no estudo dos micro-organismos. Métodos de cultivo, coloração e contagem de bactérias e fungos. Métodos de controle do crescimento bacteriano.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM382'],
			color: '#95B946',
			obligatory: false
		},
		'BM710': {
			code: 'BM710',
			name: 'Estágio Supervisionado na Área de Microbiologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Genética, Evolução e Bioagentes, área de Microbiologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B9466D',
			obligatory: false
		},
		'BM800': {
			code: 'BM800',
			name: 'Estágio Supervisionado em Microbiologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de pesquisa de Microbiologia, do Departamento de Genética, Evolução e Bioagentes.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#467AB9',
			obligatory: false
		},
		'BP325': {
			code: 'BP325',
			name: 'Tópicos em Parasitologia Contemporânea',
			ementa: 'A disciplina abordará aspectos atuais da Parasitologia.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#46B992',
			obligatory: false
		},
		'BP326': {
			code: 'BP326',
			name: 'Tópicos Avançados em Parasitologia I',
			ementa: 'Nessa disciplina, a ementa será proposta por ocasião do seu oferecimento, permitindo a inclusão de novos conteúdos, colaboração de professores visitantes e atividades similares.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#469CB9',
			obligatory: false
		},
		'BP327': {
			code: 'BP327',
			name: 'Tópicos Avançados em Parasitologia II',
			ementa: 'Nessa disciplina, a ementa será proposta por ocasição do seu oferecimento, permitindo a inclusão de novos conteúdos, colaboração de professores visitantes e atividades similares.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9464B',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B9AC46',
			obligatory: false
		},
		'BP580': {
			code: 'BP580',
			name: 'Parasitologia Animal II',
			ementa: 'Parasitoses veiculadas pela água, solo, artrópodes e alimentos. Zoonoses. Impactos das parasitoses na saúde pública. Desenvolvimento de metodologia de ensino em parasitologia no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BP582'],
			color: '#A946B9',
			obligatory: false
		},
		'BP590': {
			code: 'BP590',
			name: 'Introdução à Sistemática Molecular',
			ementa: 'Modelos de evolução em sequências de DNA. Genealogias gênicas e processos de coalescência. Filogenias intraespecíficas e filogeografia. Filogenias específicas e macroevolução.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#464EB9',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8246B9',
			obligatory: false
		},
		'BP670': {
			code: 'BP670',
			name: 'História Natural dos Insetos',
			ementa: 'Introdução à Biologia, Morfologia e Fisiologia de Insetos. Noções básicas sobre os sistemas e aparelhos dos insetos, com ênfase nas adaptações voltadas para a exploração dos diversos ambientes ocupados pelos mesmos. Noções gerais sobre a filogenia e evolução dos insetos. Reconhecimento das principais ordens e das famílias mais comuns.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6046B9',
			obligatory: false
		},
		'BP700': {
			code: 'BP700',
			name: 'Estágio Supervisionado em Parasitologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Biologia Animal, área de Parasitologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B946A2',
			obligatory: false
		},
		'BP800': {
			code: 'BP800',
			name: 'Estágio Supervisionado em Parasitologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de pesquisa de Parasitologia do Departamento de Biologia Animal.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B95546',
			obligatory: false
		},
		'BP915': {
			code: 'BP915',
			name: 'Qualidade de Água, Saúde e Saneamento',
			ementa: 'A água e o meio ambiente. Água e parasitos. Água de abastecimento público: tipos de estações de tratamento de água, controles físico-químico, microbiológico e parasitológico das águas de consumo humano incluindo bactérias, algas, fungos, vírus e protozoários patogênicos. Águas residuais: disposição nos ambientes rural e urbano, processos de tratamento. Fármacos no ambiente. Qualidade de água e Portaria 2914, de 14 de dezembro de 2011 (revogada a Portaria 518).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B7B946',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#6A46B9',
			obligatory: false
		},
		'BT501': {
			code: 'BT501',
			name: 'Iniciação Científica em Ecologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94685',
			obligatory: false
		},
		'BT561': {
			code: 'BT561',
			name: 'Tópicos em Evolução, Ecologia, Sistemática e Morfologia de Plantas',
			ementa: 'Estudo de tópicos em evolução, ecologia, sistemática e morfologia de plantas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT281', 'BT482'],
			color: '#8AAE46',
			obligatory: false
		},
		'BT582': {
			code: 'BT582',
			name: 'Sistemática de Angiospermas II',
			ementa: 'Sistemática de angiospermas: principais grupos. Evolução dos caracteres morfológicos e sua interação com a sistemática. Padrões biogeográficos nas principais famílias. Principais famílias que ocorrem no Brasil. Ferramentas para diagnóstico de vegetação natural e pertubada.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200', 'BT482'],
			color: '#B9A246',
			obligatory: false
		},
		'BT595': {
			code: 'BT595',
			name: 'Morfologia e Anatomia de Órgãos Reprodutivos em Angiospermas',
			ementa: 'Organizações e diversificação da flor. Aspectos da morfologia, citologia, histologia e anatomia da flor, fruto e semente. Esporogênese, gametogênese, fecundação e embriogênese. Noções de técnicas histológicas em vegetais. Elaboração de projetos, relatórios e seminários em órgãos reprodutivos vegetais.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B95A46',
			obligatory: false
		},
		'BT597': {
			code: 'BT597',
			name: 'Anatomia Ecológica',
			ementa: 'Nessa disciplina serão discutidas as adaptações morfoanatômicas em plantas submetidas a diferentes condições ambientais. Serão abordados temas como as características de plantas adaptadas a ambientes sombreados e ambientes sob alta radiação solar, a ambientes sujeitos à inundação e ao estresse hídrico em ambientes com solo arenoso e salino. As características analisadas serão relacionadas as plantas que se desenvolvem no cerrado, restinga, caatinga e Mata Atlântica.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT382'],
			color: '#B9A246',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B9A5',
			obligatory: false
		},
		'BT601': {
			code: 'BT601',
			name: 'Iniciação Científica em Ecologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94B46',
			obligatory: false
		},
		'BT682': {
			code: 'BT682',
			name: 'Ecologia Vegetal',
			ementa: 'Conceitos fundamentais de ecologia do indivíduo, de populações e de comunidades vegetais. Planejamento, condução, análise e interpretação de experimentos relacionados com Ecologia Vegetal.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4697B9',
			obligatory: false
		},
		'BT685': {
			code: 'BT685',
			name: 'Biossistemática, Reprodução, Polinização e Dispersão',
			ementa: 'Biossistemática vegetal: uso de métodos experimentais em taxonomia de plantas, citotaxonomia, fatores que regulam a recombinação em plantas. Sistemas de reprodução de plantas. Biologia floral e ecologia da polinização. Importância dos polinizadores em espécies agrícolas e nos ecossistemas. Dispersão de diásporos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT482'],
			color: '#B9A246',
			obligatory: false
		},
		'BT700': {
			code: 'BT700',
			name: 'Estágio Supervisionado em Botânica I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa de Botânica, do Departamento de Biologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#4846B9',
			obligatory: false
		},
		'BT792': {
			code: 'BT792',
			name: 'Ecologia Vegetal no Campo',
			ementa: 'Introdução ao entendimento ecológico dos cerrados. Introdução ao entendimento das formações geológicas, estruturas geomorfológicas, paisagens, solos, clima e vegetação regionais. Técnicas de levantamento, documentação e estimativa da diversidade de espécies. Fitossociologia e técnicas de levantamento e análise de dados de populações e comunidades vegetais. Diversidade funcional de plantas em comunidades. Impactos ambientais: pastejo, fogo, invasão, extração.',
			semestre: 1,
			vector: {T:4, P:6, L:5, O:0, D:0, HS:15, SL:9, C:15},
			requisitos: ['AA200'],
			color: '#46B9A1',
			obligatory: false
		},
		'BT800': {
			code: 'BT800',
			name: 'Estágio Supervisionado em Botânica II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa de Botânica, do Departamento de Biologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#4662B9',
			obligatory: false
		},
		'BT801': {
			code: 'BT801',
			name: 'Estágio Supervisionado em Ecologia Vegetal II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa de Ecologia Vegetal, do departamento de Biologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#AE46B9',
			obligatory: false
		},
		'BT916': {
			code: 'BT916',
			name: 'Botânica Forense e Plantas Tóxicas',
			ementa: 'Fundamentos de Biologia forense. Diversidade vegetal. Uso de evidências botânicas em investigações criminais. Caracteres anatômicos de relevância para levantamento de evidências em investigações forense. Metodologia para processamento de amostras. Métodos de coletas de dados para estudos criminais e diagnósticos de investigação. Introdução aos métodos de DNA forense (Barcode, microssatélites). Princípios e aplicações de palinologia às ciências forenses. Conceitos gerais em Toxicologia. Plantas tóxicas e substâncias derivadas de interesse toxicológico. Caracterização morfológica e anatômica de drogas proscritas, ferramentas moleculares para diagnose de drogas de origem vegetal e procedimentos analíticos. Estudos de casos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B9468A',
			obligatory: false
		},
		'BV586': {
			code: 'BV586',
			name: 'Propagação e Reprodução de Plantas',
			ementa: 'Propagação vegetativa versus reprodução sexuada em plantas. Propagação vegetativa natural: bulbos, cormos, tubérculos, etc. Técnicas artificiais de propagação vegetativa: estaquia, alporquia, enxertia, cultura de tecidos. Reprodução sexuada: Indução e desenvolvimento floral; polinização e fecundação; Autogamia versus alogamia. Evolução das estruturas reprodutivas das plantas.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BV581'],
			color: '#7DB946',
			obligatory: false
		},
		'BV587': {
			code: 'BV587',
			name: 'Cultura de Tecidos Vegetais',
			ementa: 'Objetivos e usos da cultura de tecidos vegetais. Equipamentos e técnicas usuais empregadas em cultura de tecidos vegetais. Meios de cultura. Interações hormonais. Cultura de embriões zigóticos e órgãos vegetais. Micropropagação. Organogênese. Embriogênese somática. Cultura de anteras e micrósporos. Regeneração de transformantes.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9B146',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#9F46B9',
			obligatory: false
		},
		'BV700': {
			code: 'BV700',
			name: 'Estágio Supervisionado em Fisiologia Vegetal I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa em Fisiologia Vegetal, do Departamento de Biologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#46AAB9',
			obligatory: false
		},
		'BV782': {
			code: 'BV782',
			name: 'Genética e Genômica Vegetal',
			ementa: 'A disciplina abordará aspectos teóricos e práticos de conceitos genéticos e genômicos aplicados ao estudo genético de vegetais, cujos avanços nos últimos anos promoveram uma revolução nas áreas de Ciências Biológicas voltadas aos estudos dos vegetais, tais como: conceitos básicos de genética aplicados aos vegetais; genômica estrutural e genômica funcional, aplicadas aos vegetais; marcadores moleculares e sua importância para o estudo da variabilidade, conservação e melhoramento de plantas. Serão apresentados resultados recentes na literatura obtidos com algumas espécies vegetais utilizadas como modelo para os estudos genéticos e genômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BG380'],
			color: '#B94650',
			obligatory: false
		},
		'BV800': {
			code: 'BV800',
			name: 'Estágio Supervisionado em Fisiologia Vegetal II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas na área de pesquisa de Fisiologia Vegetal, do Departamento de Biologia Vegetal.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#467FB9',
			obligatory: false
		},
		'BV880': {
			code: 'BV880',
			name: 'Melhoramento Genético de Plantas',
			ementa: 'A disciplina aborda aspectos teóricos e práticos da aplicação da genética e da conservação e uso do germoplasma na obtenção de cultivares de plantas, as quais terão diversas aplicações de importância econômica (alimentação, industrial, cosmetológica, farmacêutica e paisagística). Serão apresentados os conceitos de heterose e endogamia e sua importãncia no melhoramento genético, bem como as metodologias utilizadas no melhoramento de plantas autógamas, alógamas e de propagação vegetativa. Também será abordada a obtenção de híbridos, utilização da biotecnologia no melhoramento vegetal, bem como a importância de bancos de germoplasma para o melhoramento. Tais assuntos visam possibilitar aos alunos da Biologa os conhecimentos necessários e suficientes para atuarem profissionalmente em programas de melhoramento, por meio da interação com os melhoristas em diferentes etapas do processo de obtenção de novas cultivares melhoradas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BG380'],
			color: '#B94650',
			obligatory: false
		},
		'BV884': {
			code: 'BV884',
			name: 'Metabolismo de Plantas sob Estresse',
			ementa: 'Metabolismo de carbono, nitrogênio e secundário em plantas sob estresse abiótico. Serão abordados assuntos sobre a importância do sistema antioxidante e a sinalização em situações limitantes, assim como a atenuação dos efeitos de estresses pela interação das plantas com microrganismos.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BV481'],
			color: '#7DB946',
			obligatory: false
		},
		'BV885': {
			code: 'BV885',
			name: 'Mudanças Climáticas',
			ementa: 'A disciplina abordará como as mudanças climáticas podem afetar as plantas e qual a resposta das mesmas às modificações do meio. As estratégias morfo-fisiológicas das plantas e as consequências para o acúmulo de biomassa e sobrevivência serão abordadas em aulas expositivas, com participação dos alunos através de seminários sobre o tema.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#73B946',
			obligatory: false
		},
		'BV886': {
			code: 'BV886',
			name: 'Tópicos em Fisiologia Vegetal',
			ementa: 'Assuntos que envolvem a fisiologia vegetal aplicada serão abordados na disciplina, que terá palestras de especialistas em temas como caracterização da resposta vegetal ao ambiente, tópicos específicos sobre nutrição de plantas, genética, biologia molecular de plantas, interação planta-ambiente e respostas fisiológicas de plantas em condições limitantes. Os alunos participarão da disciplina conduzindo seminários e elaborando relatórios sobre as palestras ministradas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['BV481'],
			color: '#7DB946',
			obligatory: false
		},
		'BV888': {
			code: 'BV888',
			name: 'Práticas em Bioquímica de Plantas',
			ementa: 'Boas práticas no laboratório (medidas de segurança); Noções básicas no preparo de soluções, limpeza e cuidados com vidraria e equipamentos. Colorimetria e espectrofotometria. Extração e quantificação de pigmentos fotossintéticos e carboidratos solúveis e amido. Determinação de diversos metabólitos vegetais como: fenóis, amônia e aminoácidos livres. Extração, quantificação e separação de proteínas. Atividade enzimática. Avaliação de dano oxidativo.',
			semestre: 1,
			vector: {T:1, P:0, L:5, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BV481'],
			color: '#7DB946',
			obligatory: false
		},
		'BV916': {
			code: 'BV916',
			name: 'Expressão do Genoma: RNAs Reguladores e Epigenética',
			ementa: 'Os últimos dez anos revelaram o papel fundamental dos RNAs (ncRNA, miRNA e siRNA) no controle da expressão gênica. A disciplina visa estabelecer os princípios básicos do modo de ação dos RNA reguladores tanto no controle da estabilidade e tradução dos mRNA quanto na regulação da estrutura da cromatina (epigenética e epigenoma). Uma ênfase maior será dada para genomas de plantas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: '#B94650',
			obligatory: false
		},
		'BV925': {
			code: 'BV925',
			name: 'Procedimentos Analíticos para Estudos em Biologia Vegetal e Biociências',
			ementa: 'Principais métodos e procedimentos analíticos usados para separar e análisar substâncias (voláteis e não voláteis) a partir de matrizes vegetais e de amostras de interesse na área de biociências (métodos cromatográficos, extração líquido-líquido e sólido-líquido). Métodos de espectroscópicos mais usados para identificação de substâncias em biociências. Aplicação de modernas técnicas cromatográficas hifenadas com espectrometria de massas no estudo de substâncias de origem biológica em diferentes matrizes. Metodologia analítica usada em estudos metabolômicos e em biociências. Estudos de casos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4D46B9',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#48B946',
			obligatory: false
		},
		'BZ550': {
			code: 'BZ550',
			name: 'Tópicos em Zoologia I',
			ementa: 'A disciplina abordará temas em Zoologia.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AF',
			obligatory: false
		},
		'BZ560': {
			code: 'BZ560',
			name: 'Tópicos em Zoologia II',
			ementa: 'A disciplina abordará temas em Zoologia.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97B46',
			obligatory: false
		},
		'BZ570': {
			code: 'BZ570',
			name: 'Tópicos em Zoologia III',
			ementa: 'A disciplina abordará temas em Zoologia.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B2B946',
			obligatory: false
		},
		'BZ587': {
			code: 'BZ587',
			name: 'História Natural, Sistemática e Evolução de Invertebrados',
			ementa: 'História Natural, Sistemática e Evolução dos principais filos invertebrados. Observação das características estruturais, comportamentais e ecológicas dos invertebrados em atividades de campo e laboratório.',
			semestre: 1,
			vector: {T:2, P:6, L:0, O:0, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#B94699',
			obligatory: false
		},
		'BZ590': {
			code: 'BZ590',
			name: 'Tópicos em Zoologia IV',
			ementa: 'A disciplina abordará temas em Zoologia.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#468DB9',
			obligatory: false
		},
		'BZ599': {
			code: 'BZ599',
			name: 'Entomologia',
			ementa: 'Classe Insecta: morfologia - fisiologia - desenvolvimento - ecologia básica e aplicada - taxonomia - técnicas de coleta, montagem e conservação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BZ380'],
			color: '#46B975',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B98546',
			obligatory: false
		},
		'BZ680': {
			code: 'BZ680',
			name: 'História Natural de Vertebrados',
			ementa: 'Possibilitar o aprendizado de obtenção de dados (observação e registro, análise, interpretação e comunicação) em relação aos diferentes modos de vida de vertebrados, com foco nas espécies nativas do Brasil. Demonstrações em campo ou sala de aula, focalizadas num dado tema, com atividades planejadas ou uso oportunista de eventos. Palestras com finalidade de transmitir aos alunos perspectivas extra-acadêmicas envolvendo a HN de vertebrtados. Desenvolvimento de um trabalho de pesquisa individual ou em grupo sobre algum aspecto da história natural de um vertebrado nativo, nos moldes de uma publicação científica. Excursão não-obrigatória a ambientes de Mata Atlântica para demonstração de técnicas de estudo de vertebrados.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:0, D:0, HS:5, SL:4, C:5},
			requisitos: ['BZ480'],
			color: '#B246B9',
			obligatory: false
		},
		'BZ700': {
			code: 'BZ700',
			name: 'Estágio Supervisionado em Zoologia I',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Biologia Animal, área de Zoologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B97746',
			obligatory: false
		},
		'BZ800': {
			code: 'BZ800',
			name: 'Estágio Supervisionado em Zoologia II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Bacharelado em Ciências Biológicas em uma das áreas de pesquisa do Departamento de Biologia Animal, área de Zoologia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200', 'AA470'],
			color: '#B94663',
			obligatory: false
		},
		'BZ817': {
			code: 'BZ817',
			name: 'Biodiversidade de Comunidades Macrobentônicas de Praias',
			ementa: 'Propiciar o conhecimento teórico e prático sobre a diversidade da macrofauna bentônica de praias: composição, distribuição e densidade. Analisar os hábitos destes organismos, os ambientes em que vivem, as estratégias adaptativas e as relações tróficas. Caracterizar e identificar espécies de importância ecológica e econômica: bioindicadoras e ameaçadas de extinção.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'BZ280', 'BZ380'],
			color: '#46B975',
			obligatory: false
		},
		'FA001': {
			code: 'FA001',
			name: 'Saneamento Rural',
			ementa: 'Apresentação de fundamentos e tecnologias adequadas de tratamento de água para abastecimento e águas residuárias.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7346B9',
			obligatory: false
		},
		'FA733': {
			code: 'FA733',
			name: 'Fundamentos de Microbiologia e Qualidade de Água',
			ementa: 'Conceituação básica sobre microbiologia aplicada à pós-colheita de produtos agrícolas e ao saneamento ambiental. Conhecimentos de fundamentos de hidrobiologia. Conhecimentos fundamentais de química da água.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9A46B9',
			obligatory: false
		},
		'FA874': {
			code: 'FA874',
			name: 'Saneamento Ambiental',
			ementa: 'Tecnologias e abastecimento de águas. Identificação de fontes de poluição agrícola, zootécnica e agroindustrial. Conceituação das propriedades físicas, químicas e biológicas dos resíduos. Conhecimentos básicos sobre operações e processos unitários. Conceituação e discussão das tecnologias para tratamento de águas residuárias. Discussão de propostas para controle e disposição de resíduos sólidos. Análise e discussão de alternativas para reciclagem de resíduos.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA733'],
			color: '#9A46B9',
			obligatory: false
		},
		'FR725': {
			code: 'FR725',
			name: 'Biotecnologia',
			ementa: 'Princípios e aplicações da biotecnologia. Ferramentas para a obtenção de DNA recombinante e construção de vetores. Fermentação: Enzimas e microrganismos na obtenção de produtos biotecnológicos. Biorreatores: Imobilização, otimização e escalas. Biossensores. Legislação de Biossegurança.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A1B9',
			obligatory: false
		},
		'GE801': {
			code: 'GE801',
			name: 'História das Ciências Naturais',
			ementa: 'O Renascimento e seu impacto na cosmovisão: a releitura do mundo natural. A Revolução Científica e o nascimento da ciência moderna: a Filosofia Natural, a História Natural e a especialização das disciplinas científicas. A 1a. Revolução Industrial, o Naturalismo científico e os viajantes. Colecionismo, Gabinetes e Museus. O processo de institucionalização e profissionalização das ciências naturais com ênfase no Brasil e América Latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946AC',
			obligatory: false
		},
		'GE913': {
			code: 'GE913',
			name: 'Ciências Naturais e Ambiente',
			ementa: 'Abordagem epistemológica que busca a construção do entendimento de como as ciências naturais integram-se do ponto de vista de seus objetos de estudo e métodos quando se estuda o ambiente, seja em suas inter-relações no presente - processos e fenômenos atuais, seja em sua evolução ao longo da história da Terra. Natureza do conhecimento geocientífico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#8C46B9',
			obligatory: false
		},
		'GE916': {
			code: 'GE916',
			name: 'Ensino de Ciências da Terra e do Ambiente',
			ementa: 'Importância do ensino de Ciências da Terra para o ensino básico. Modelos e dificuldades comuns de ensino e aprendizagem. Importância e perspectiva cognitiva, ambiental e política do ensino de ciclo da água. Papel estratégico do ciclo da água entre temas ensinados em ciências naturais, experimentais e tecnológicas. Inclui levantamentos das condições de ensino de problemas ambientais relativos à circulação da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B94680',
			obligatory: false
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B962',
			obligatory: false
		}
	}
};

export default catalogue;
