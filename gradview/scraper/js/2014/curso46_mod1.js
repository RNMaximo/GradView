const catalogue = {
	totalCredits: 262,
	maxCreditsSem: 28,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BC183', 'BG181', 'BZ183', 'EL212', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BB281', 'BC283', 'BT282', 'BT283', 'BZ281', 'BZ283', 'EL683', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['BB381', 'BT383', 'BT384', 'BZ382', 'BZ383', 'MS380', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['BA480', 'BF483', 'BG481', 'BH482', 'BT483', 'BT484', 'ME480']
		},
		'sem-5': {
			id: '5',
			subjects: ['BE581', 'BF583', 'BG520', 'BI520', 'F_107', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['BE681', 'BG680', 'BH620', 'BV620', 'BZ681', 'BZ682', 'EL511', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['BE682', 'BH780', 'BM720', 'BV720', 'GM280', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BD520', 'BP820', 'BT880', 'BT885', 'GM450', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['BT200', 'EL774', 'EL876', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['BT681', 'EL885', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA500', 'BB500', 'BC500', 'BD500', 'BE500', 'BE501', 'BF500', 'BF501', 'BG500', 'BG501', 'BH501', 'BH502', 'BH511', 'BI500', 'BM500', 'BP500', 'BT500', 'BT501', 'BV500', 'BZ500', 'EL101', 'EL201', 'EL505', 'EL506'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA600', 'BB600', 'BC600', 'BD600', 'BE600', 'BE601', 'BF600', 'BF601', 'BG600', 'BG601', 'BH601', 'BH602', 'BH611', 'BI600', 'BM600', 'BP600', 'BT600', 'BT601', 'BV600', 'BZ600', 'EL605', 'EL606'],
		},
		'elet-3': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['BA692', 'BB583', 'BC694', 'BC696', 'BD692', 'BD694', 'BD792', 'BD794', 'BE694', 'BF694', 'BG594', 'BH694', 'BM694', 'BP694', 'BT596', 'BV694', 'BZ594', 'GM082'],
		},
		'elet-4': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['EL110', 'EL142', 'EL210', 'EL485', 'EP108'],
		},
		'elet-5': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['BD001', 'BD002', 'BD003', 'BD004', 'BD005', 'BD006', 'BD007', 'BD008', 'BD009', 'BD010', 'BD011', 'BD012', 'BD013', 'BD014', 'BD015', 'BD016', 'BD017', 'BD018', 'BD019', 'BD020', 'BD021', 'BD022', 'BD023', 'BD024', 'BD025', 'BD026'],
		},
		'elet-6': {
			credits: 23,
			hasRestrictions: true,
			subjects: ['BA581', 'BA582', 'BA583', 'BD---', 'BF586', 'BF587', 'BF590', 'BF594', 'BF785', 'BH582', 'BM682', 'BM695', 'BT595', 'FA001', 'FA733', 'FA874', 'GE801', 'GE913', 'GE916', 'GN101'],
		},
	},

	subjects: {
		'BC183': {
			code: 'BC183',
			name: 'Biologia Celular I',
			ementa: 'Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares (Biomembranas, núcleo, nucléolo, cromatina, cromossomos, ribossomos e síntese proteica, Retículo Endoplasmático, Complexo de Golgi, Sistema Endossômico-lisossômico, mitocôndrias cloroplastos, citoesqueleto e junções Celulares.)',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4070D9',
			obligatory: true
		},
		'BG181': {
			code: 'BG181',
			name: 'Introdução à Evolução',
			ementa: 'Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97640',
			obligatory: true
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Diversibilidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4058D9',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9404C',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Estequiometria. Ligação química. Funções da química orgânica. Experimentos que ilustram o método científico, conceito de mol, ligação química, equilíbrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#70D940',
			obligatory: true
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4640D9',
			obligatory: true
		},
		'BC283': {
			code: 'BC283',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, movimentação celular, mitose e ciclo celular, controle do ciclo celular, diferenciação celular, células-tronco, morte celular, sinalização celular, câncer, meiose.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC183'],
			color: '#4070D9',
			obligatory: true
		},
		'BT282': {
			code: 'BT282',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Introdução às técnicas de coleta e de preparação de amostras para Coleções Biológicas. Noções de avaliação da biodiversidade, levantamento e mapeamento de criptógamas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B2D940',
			obligatory: true
		},
		'BT283': {
			code: 'BT283',
			name: 'Botânica no Campo I',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre sistemática de Criptógamas e Gimnospermas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D9407C',
			obligatory: true
		},
		'BZ281': {
			code: 'BZ281',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Origem, evolução e diversidade dos Invertebrados Metazoários, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como adaptações aos ambientes em que vivem suas espécies, incluindo mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9BE40',
			obligatory: true
		},
		'BZ283': {
			code: 'BZ283',
			name: 'Zoologia de Invertebrados no Campo I',
			ementa: 'Atividades de excursão.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#40ACD9',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9BE',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#6440D9',
			obligatory: true
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97C40',
			obligatory: true
		},
		'BT383': {
			code: 'BT383',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angiospermas e estratégias reprodutivas. Aspectos gerais da morfologia de Angiospermas: raiz, caule, folhas, inflorescências, flores, frutos e sementes. Aspectos gerais de citologia, histologia e anatomia dos órgãos vegetativos de Angiospermas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94076',
			obligatory: true
		},
		'BT384': {
			code: 'BT384',
			name: 'Botânica no Campo II',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre morfologia de Angiospermas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D940CA',
			obligatory: true
		},
		'BZ382': {
			code: 'BZ382',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origem evolutiva, forma, função e diversidade de artrópodes, lofoforados, equinodermas, protocordados e cordados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ281'],
			color: '#D9BE40',
			obligatory: true
		},
		'BZ383': {
			code: 'BZ383',
			name: 'Zoologia de Invertebrados no Campo II',
			ementa: 'Excursões no campo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D98840',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4046D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#4C40D9',
			obligatory: true
		},
		'BA480': {
			code: 'BA480',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B2',
			obligatory: true
		},
		'BF483': {
			code: 'BF483',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94C40',
			obligatory: true
		},
		'BG481': {
			code: 'BG481',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG181'],
			color: '#D97640',
			obligatory: true
		},
		'BH482': {
			code: 'BH482',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz celular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC183'],
			color: '#4070D9',
			obligatory: true
		},
		'BT483': {
			code: 'BT483',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas: regras básicas de nomenclatura botânica; coleta e preservação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Noções de biossistemática e de sistemas de reprodução em angiospermas. Noções sobre biogeografia e sobre a aplicação do conhecimento taxonômico vegetal em conservação da biodiversidade, pesquisa e produção de bens (alimentos, fármacos, combustível renovável, etc), pasiagismo e arborização humana.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8E40D9',
			obligatory: true
		},
		'BT484': {
			code: 'BT484',
			name: 'Botânica no Campo III',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre sistemática e evolução de Angiospermas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#C440D9',
			obligatory: true
		},
		'ME480': {
			code: 'ME480',
			name: 'Estatística para Biologistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#4046D9',
			obligatory: true
		},
		'BE581': {
			code: 'BE581',
			name: 'Ecologia de Organismos e Populações',
			ementa: 'O que é ecologia. Adaptação e Evolução. O ambiente físico. Adaptações de plantas e animais ao ambiente físico. Histórias de vida. Populações: propriedades, crescimento, competição intraespecífica, metapopulações, abundância e regulação populacional. Interações entre espécies: competição interespecífica, predação, parasitismo, mutualismo e decompositores. Ecologia comportamental: seleção sexual, sistemas de acasalamento e comportamento social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D970',
			obligatory: true
		},
		'BF583': {
			code: 'BF583',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF483'],
			color: '#D94C40',
			obligatory: true
		},
		'BG520': {
			code: 'BG520',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em micro-organismos. DNA recombinante.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG481'],
			color: '#D97640',
			obligatory: true
		},
		'BI520': {
			code: 'BI520',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases molecular e celular do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas e que mantêm a integridade e a homeostasia do hospedeiro.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC283'],
			color: '#4070D9',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Forças e máquinas simples, locomoção, dinâmica, fluidos, sólidos e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C4',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D94046',
			obligatory: true
		},
		'BE681': {
			code: 'BE681',
			name: 'Ecologia de Comunidades e Ecossistemas',
			ementa: 'Estrutura e dinâmica de comunidades. Fatores influenciando a estrutura de comunidades. Teias tróficas. Ecologia de paisagens. Biogeografia. Ecologia de ecossistemas: fluxo de energia e matéria através de ecossistemas. Padrões de diversidade. Ecologia humana: crescimento populacional, uso de recursos, sustentabilidade, perda de habitat, biodiversidade e conservação, mudanças climáticas globais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BE581'],
			color: '#40D970',
			obligatory: true
		},
		'BG680': {
			code: 'BG680',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG520'],
			color: '#D97640',
			obligatory: true
		},
		'BH620': {
			code: 'BH620',
			name: 'Embriologia Comparada',
			ementa: 'Gametogênese, fertilização e início da embriogênese. Gastrulação e formação dos primórdios de órgãos. Embriogênese e organogênese de drosófila, equinodermos, anfíbios, aves e mamíferos. Tópicos de embriologia experimental. Teratologia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH482'],
			color: '#4070D9',
			obligatory: true
		},
		'BV620': {
			code: 'BV620',
			name: 'Fisiologia Vegetal Geral: Metabolismo',
			ementa: 'Relações hídricas, nutrição mineral, assimilação do enxofre e do nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94082',
			obligatory: true
		},
		'BZ681': {
			code: 'BZ681',
			name: 'Zoologia de Vertebrados',
			ementa: 'Características gerais e diversidade das classes de vertebrados: peixes, anfíbios, répteis, aves e mamíferos. Onde e como vivem os vertebrados. Importância dos vertebrados. Prática ilustrativa da diversidade estrutural em cada classe, considerando situações de aprendizagem no Ensino Fundamental e Médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A0D940',
			obligatory: true
		},
		'BZ682': {
			code: 'BZ682',
			name: 'Zoologia de Vertebrados no Campo',
			ementa: 'Atividades de excursão.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D94088',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#408ED9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#40D964',
			obligatory: true
		},
		'BE682': {
			code: 'BE682',
			name: 'Prática em Ecologia de Organismos, Populações, Comunidades e Ecossistemas',
			ementa: 'Desenvolvimento de projetos de pesquisa de campo em Ecologia de Organismos, Populações, Comunidades ou Ecossistemas. Excursão de 7 dias.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE581', 'BE681'],
			color: '#40D970',
			obligatory: true
		},
		'BH780': {
			code: 'BH780',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento animal e vegetal. Controle genético e molecular da diferenciação celular. Polaridade e informação posicional. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG520', 'BH620'],
			color: '#8D738D',
			obligatory: true
		},
		'BM720': {
			code: 'BM720',
			name: 'Microbiologia',
			ementa: 'Bactérias, fungos e vírus: estrutura e formas de organização. Metabolismo microbiano. Controle dos micro-organismos. Conceito de ecologia microbiana. Relações micro-organismos e seus hospedeiros. Relações vírus e seus hospedeiros. Métodos de visualização de bactérias e fungos. Crescimento bacteriano \"in vitro\".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46D940',
			obligatory: true
		},
		'BV720': {
			code: 'BV720',
			name: 'Fisiologia Vegetal Geral: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D9408E',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95840',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:11},
			requisitos: '',
			color: '#40D9AC',
			obligatory: true
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. O Cógigo de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos de má prática profissional. Julgamento simulado do CRBio. Bem comum; proteção do meio ambiente; melhoria da qualidade de vida - na legislação brasileira e nas legislações internacionais dos direitos humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B8',
			obligatory: true
		},
		'BP820': {
			code: 'BP820',
			name: 'Zooparasitologia',
			ementa: 'Estudos dos parasitas de interesse humano e de animais. Interações entre hospedeiro-parasito e o meio ambiente, ecologia e meio ambiente. Estudo de protozoários e helmintos de interesse animal e humano: ciclo de vida, transmissão, patogenia, epidemiologia, imunidade e profilaxia. Ectoparasitas e estudo dos principais artrópodes e moluscos veiculadores de parasitoses.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B240',
			obligatory: true
		},
		'BT880': {
			code: 'BT880',
			name: 'Ecologia e Fitogeografia no Campo',
			ementa: 'Atividades de campo na disciplina de Ecologia e Fitogeografia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#6AD940',
			obligatory: true
		},
		'BT885': {
			code: 'BT885',
			name: 'Ecologia e Fitogeografia',
			ementa: 'Noções de ecologia global, ecologia vegetal e fitogeografia. Os grandes sistemas climáticos e pedogenéticos mundiais e a distribuição dos grandes biomas. Forma e funções da planta como expressão de adaptações evolutivas. Os grandes domínios fitogeográficos do Brasil.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#9AD940',
			obligatory: true
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7640D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D9405E',
			obligatory: true
		},
		'BT200': {
			code: 'BT200',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação das principais correntes e idéias da filosofia sobre as ciências naturais, especialmente a Biologia, e discussão de suas principais implicações sobre a maneira como o conhecimento biológico foi considerado ao longo da história.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40B2D9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#40D95E',
			obligatory: true
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#D96440',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#8ED940',
			obligatory: true
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#B240D9',
			obligatory: true
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: '',
			color: '#CAD940',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#D94052',
			obligatory: true
		},
		'BA500': {
			code: 'BA500',
			name: 'Iniciação Científica em Anatomia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D940D6',
			obligatory: false
		},
		'BA581': {
			code: 'BA581',
			name: 'Esplancnologia',
			ementa: 'Esplancnologia: sistema circulatório, sistema respiratório, sistema digestório, sistema urogenital (urinário, genital masculino, genital feminino e glândulas mamárias).',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['BA480'],
			color: '#D940B2',
			obligatory: false
		},
		'BA582': {
			code: 'BA582',
			name: 'Bases Anatômicas da Neurobiologia',
			ementa: 'Estudo da anatomia macroscópica e seccional do Sistema Nervoso Central. Vias aferentes e eferentes. Tronco encefálico: vias trigeminais. Cerebelo: vias e córtex cerebelar. Diencéfalo: tálamo, hipotálamo e hipófise. Telencéfalo: áreas motoras, sensitivas e de associação. Sistema límbico. Estudo de temas relacionados à neurobiologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'BA480'],
			color: '#D940B2',
			obligatory: false
		},
		'BA583': {
			code: 'BA583',
			name: 'Biologia da Regeneração Nervosa',
			ementa: 'Bases da sobrevivência neuronal e regeneração do Sistema Nervoso após lesões centrais e periféricas e durante o curso de doenças neurodegenerativas. Papel da glia na neuroproteção e neurodegeneração. Modelos experimentais empregados no desenvolvimento de estratégias para regeneração nervosa, com ênfase em lesões do plexo branquial. Estudo anatômico dos plexos branquial e lombossacrale de modelos que mimetizam sua lesão/reparo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'BA480'],
			color: '#D940B2',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D994',
			obligatory: false
		},
		'BA692': {
			code: 'BA692',
			name: 'Ensino de Biologia 1: Anatomia',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Anatomia. Abordagem e elaboração de diferentes metodologias para o ensino de Anatomia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar, pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D940A0',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4082D9',
			obligatory: false
		},
		'BB583': {
			code: 'BB583',
			name: 'Informática Aplicada ao Ensino de Biologia',
			ementa: 'Utilização de computadores para o desenvolvimento de material didático na área de biologia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#40B8D9',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9A640',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D940',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#5240D9',
			obligatory: false
		},
		'BC694': {
			code: 'BC694',
			name: 'Preparo de Material Didático em Biologia Celular',
			ementa: 'Técnicas para a preparação e execução de aulas práticas para o ensino de Biologia Celular, utilizando a microscopia de luz.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#BE40D9',
			obligatory: false
		},
		'BC696': {
			code: 'BC696',
			name: 'Ensino de Biologia II: Biologia Celular',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Biologia Celular. Abordagem e elaboração de diferentes metodologia para o ensino de Biologia Celular. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B840D9',
			obligatory: false
		},
		'BD---': {
			code: 'BD---',
			name: 'Qualquer Disciplina com codigo BD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo BD---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#64D940',
			obligatory: false
		},
		'BD001': {
			code: 'BD001',
			name: 'Atividades Acadêmicos-Científicas I',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#40D9CA',
			obligatory: false
		},
		'BD002': {
			code: 'BD002',
			name: 'Atividades Acadêmico-Científicas II',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'BD003': {
			code: 'BD003',
			name: 'Integralização de Atividades Acadêmico-Científicas III',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#D9409A',
			obligatory: false
		},
		'BD004': {
			code: 'BD004',
			name: 'Atividades Acadêmico-Científicas IV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#58D940',
			obligatory: false
		},
		'BD005': {
			code: 'BD005',
			name: 'Atividades Acadêmico-Científicas V',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#D94058',
			obligatory: false
		},
		'BD006': {
			code: 'BD006',
			name: 'Atividades Acadêmico-Científicas VI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#5E40D9',
			obligatory: false
		},
		'BD007': {
			code: 'BD007',
			name: 'Atividades Acadêmico-Científicas VII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#D96A40',
			obligatory: false
		},
		'BD008': {
			code: 'BD008',
			name: 'Atividades Acadêmico-Científicas VIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#C4D940',
			obligatory: false
		},
		'BD009': {
			code: 'BD009',
			name: 'Atividades Acadêmico-Científicas IX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#405ED9',
			obligatory: false
		},
		'BD010': {
			code: 'BD010',
			name: 'Atividades Acadêmico-Científicas X',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40C4D9',
			obligatory: false
		},
		'BD011': {
			code: 'BD011',
			name: 'Atividades Acadêmico-Científicas XI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#4CD940',
			obligatory: false
		},
		'BD012': {
			code: 'BD012',
			name: 'Atividades Acadêmico-Científicas XII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#76D940',
			obligatory: false
		},
		'BD013': {
			code: 'BD013',
			name: 'Atividades Acadêmico-Científicas XIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#40D9D0',
			obligatory: false
		},
		'BD014': {
			code: 'BD014',
			name: 'Atividades Acadêmico-Científicas XIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D99440',
			obligatory: false
		},
		'BD015': {
			code: 'BD015',
			name: 'Atividades Acadêmico-Científicas XV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#ACD940',
			obligatory: false
		},
		'BD016': {
			code: 'BD016',
			name: 'Atividades Acadêmico-Científicas XVI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#88D940',
			obligatory: false
		},
		'BD017': {
			code: 'BD017',
			name: 'Atividades Acadêmico-Científicas XVII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#407CD9',
			obligatory: false
		},
		'BD018': {
			code: 'BD018',
			name: 'Atividades Acadêmico-Científicas XVIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#A6D940',
			obligatory: false
		},
		'BD019': {
			code: 'BD019',
			name: 'Atividades Acadêmico-Científicas XIX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#40D6D9',
			obligatory: false
		},
		'BD020': {
			code: 'BD020',
			name: 'Atividades Acadêmico-Científicas XX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D940BE',
			obligatory: false
		},
		'BD021': {
			code: 'BD021',
			name: 'Atividades Acadêmico-Científicas XXI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#CA40D9',
			obligatory: false
		},
		'BD022': {
			code: 'BD022',
			name: 'Atividades Acadêmico-Científicas XXII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#A040D9',
			obligatory: false
		},
		'BD023': {
			code: 'BD023',
			name: 'Atividades Acadêmico-Científicas XXIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#40D9C4',
			obligatory: false
		},
		'BD024': {
			code: 'BD024',
			name: 'Atividades Acadêmico-Científicas XXIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#40A6D9',
			obligatory: false
		},
		'BD025': {
			code: 'BD025',
			name: 'Atividades Acadêmico-Científicas XXV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#D9AC40',
			obligatory: false
		},
		'BD026': {
			code: 'BD026',
			name: 'Atividades Acadêmico-Científicas XXVI',
			ementa: 'Atividades acadêmico-científcas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#D0D940',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D640D9',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#5ED940',
			obligatory: false
		},
		'BD692': {
			code: 'BD692',
			name: 'Temas Transversais no Ensino de Biologia I',
			ementa: 'Temas transversais no ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#406AD9',
			obligatory: false
		},
		'BD694': {
			code: 'BD694',
			name: 'Temas Transversais no Ensino de Biologia II',
			ementa: 'Temas transversais em ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D9A0',
			obligatory: false
		},
		'BD792': {
			code: 'BD792',
			name: 'Temas Transversais no Ensino de Biologia III',
			ementa: 'Temas transversais no ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#9A40D9',
			obligatory: false
		},
		'BD794': {
			code: 'BD794',
			name: 'Temas Transversais no Ensino de Biologia IV',
			ementa: 'Temas transversais no Ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D6D940',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#94D940',
			obligatory: false
		},
		'BE501': {
			code: 'BE501',
			name: 'Iniciação Científica em Ecologia Animal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#52D940',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4094D9',
			obligatory: false
		},
		'BE601': {
			code: 'BE601',
			name: 'Iniciação Científica em Ecologia Animal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D940A6',
			obligatory: false
		},
		'BE694': {
			code: 'BE694',
			name: 'Ensino de Biologia III: Ecologia - o Ambiente Terrestre',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Ecologia e o ambiente terrestre. Abordagem e elaboração de diferentes metodologias para o ensino de Ecologia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D97040',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9CA40',
			obligatory: false
		},
		'BF501': {
			code: 'BF501',
			name: 'Iniciação Científica em Fisiologia Humana I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D946',
			obligatory: false
		},
		'BF586': {
			code: 'BF586',
			name: 'Fisiologia Animal Comparada',
			ementa: 'Fisiologia dos sistemas: nervoso, locomotor, digestório, endócrino, reprodutor, cardiovascular, respiratório e renal em invertebrados e vertebrados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF583'],
			color: '#D94C40',
			obligatory: false
		},
		'BF587': {
			code: 'BF587',
			name: 'Neurociência',
			ementa: 'Processos básicos das relações organismo-ambiente abordando relações de comunicação celular e plasticidade neural. Integração sensoriomotora, neurovegetativa e comportamental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BF583'],
			color: '#D94C40',
			obligatory: false
		},
		'BF590': {
			code: 'BF590',
			name: 'Fisiologia Humana do Desenvolvimento',
			ementa: 'Estudo dos aspectos da reprodução humana relacionados com diferenciação sexual, puberdade, anticoncepção e parto. Abordagem de temas sobre processos nutricionais e fisiologia endócrina do crescimento e desenvolvimento humano.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#7C40D9',
			obligatory: false
		},
		'BF594': {
			code: 'BF594',
			name: 'Práticas em Fisiologia de Vertebrados',
			ementa: 'Estudo prático do funcionamento dos sistemas nervoso, endócrino, disgestório, cadiovascular, respiratório e renal.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#AC40D9',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9D640',
			obligatory: false
		},
		'BF601': {
			code: 'BF601',
			name: 'Iniciação Científica em Fisiologia Humana II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D940D0',
			obligatory: false
		},
		'BF694': {
			code: 'BF694',
			name: 'Ensino de Biologia IV: Fisiologia Humana',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Fisiologia Humana. Abordagem e elaboração de diferentes metodologias para o ensino de Fisiologia Humana. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D96A',
			obligatory: false
		},
		'BF785': {
			code: 'BF785',
			name: 'Socorros Urgentes para Biólogos',
			ementa: 'Estuda os tipos mais comuns de primeiros socorros, enquanto não chega auxílio especializado, frente a situações de distúrbio da consciência, parada cardiorrespiratória, estado de choque, hemorragias, ferimentos e lacerações, afogamentos, intoxicações e lesões ósseas, articulares e tendiosas. Desenvolve ainda procedimentos para atenuar o sofrimento humano no local do acidente ou enquanto ocorre alguma doença súbita. Estabelece também limitações de seus procedimentos de acordo com os conhecimentos e treinamentos adquiridos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#7040D9',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D98E40',
			obligatory: false
		},
		'BG501': {
			code: 'BG501',
			name: 'Iniciação Científica em Evolução I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D94094',
			obligatory: false
		},
		'BG594': {
			code: 'BG594',
			name: 'Ensino de Biologia V: Genética e Evolução',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Genética e Evolução. Abordagem e elaboração de diferentes metodologias par o ensino de Genétioca e Evolução. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#BED940',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D9D6',
			obligatory: false
		},
		'BG601': {
			code: 'BG601',
			name: 'Iniciação Científica em Evolução II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9A040',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Embriologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9D040',
			obligatory: false
		},
		'BH502': {
			code: 'BH502',
			name: 'Iniciação Científica em Biologia Tecidual I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#6A40D9',
			obligatory: false
		},
		'BH511': {
			code: 'BH511',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D95E40',
			obligatory: false
		},
		'BH582': {
			code: 'BH582',
			name: 'Biologia Tecidual Aplicada a Vertebrados',
			ementa: 'Biologia tecidual aplicada na correlação morfofuncional em órgãos e, sistemas e sua pluralidade nos vertebrados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BH482'],
			color: '#4070D9',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#5840D9',
			obligatory: false
		},
		'BH602': {
			code: 'BH602',
			name: 'Iniciação Científica em Biologia Tecidual II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D958',
			obligatory: false
		},
		'BH611': {
			code: 'BH611',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#82D940',
			obligatory: false
		},
		'BH694': {
			code: 'BH694',
			name: 'Ensino de Biologia VI: Biologia Tecidual e do Desenvolvimento',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Biologia Tecidual e do Desenvolvimento. Abordagens e elaboração de diferentes metodologias para o ensino de Biologia tecidual e do Desenvolvimento. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BH482', 'BH780'],
			color: '#6772B3',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4088D9',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B8D940',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9406A',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#409AD9',
			obligatory: false
		},
		'BM682': {
			code: 'BM682',
			name: 'Laboratório de Microbiologia',
			ementa: 'Principais técnicas utilizadas no estudo dos micro-organismos. Métodos de cultivo, coloração e contagem de bactérias e fungos. Métodos de controle do crescimento bacteriano.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM720'],
			color: '#46D940',
			obligatory: false
		},
		'BM694': {
			code: 'BM694',
			name: 'Ensino de Biologia VII: Saúde e Doença, Contágio e Prevenção',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Microbiologia e Saúde Humana. Abordagem e elaboração de diferentes metodoloigas para o ensino de Microbiologia e Epidemiologia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D040D9',
			obligatory: false
		},
		'BM695': {
			code: 'BM695',
			name: 'Microbiologia Vegetal',
			ementa: 'Micro-organismos em seus habitats naturais. Estrutua e classificação dos micro-organismos. Nutrição e crescimento microbiano. Estrutura e desenvolvimento de comunidades microbianas. Métodos quantitativos em microbiologia ambiental. Aspectos microbiológicos da biodegradação e da bioremediação. Biofilmes. Processos microbianos da recuperação de metais. Micro-organismos indicadores de qualidade do ar. Síndrome dos edifícios doentes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA470'],
			color: '#40CAD9',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40A0D9',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4040D9',
			obligatory: false
		},
		'BP694': {
			code: 'BP694',
			name: 'Ensino de Biologia VIII: Parasitologia',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Parasitologia. Abordagem e elaboração de diferentes metodologias para o ensino de Parasitologia. Articulação temática e integrada de temas contemporâneos para o ensino de Biologia. Criação de conteúdos de formas de ensinar pautdados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D9B840',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D0D9',
			obligatory: false
		},
		'BT501': {
			code: 'BT501',
			name: 'Iniciação Científica em Ecologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D98E',
			obligatory: false
		},
		'BT595': {
			code: 'BT595',
			name: 'Morfologia e Anatomia de Órgãos Reprodutivos em Angiospermas',
			ementa: 'Organização e diversificação da flor. Aspectos da morfologia, citologia, histologia e anatomia da flor, fruto e semente. Esporogênese, gametogênese, fecundação e embriogênese. Noções de técnicas histológicas em vegetais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4064D9',
			obligatory: false
		},
		'BT596': {
			code: 'BT596',
			name: 'Ensino de Biologia IX: Biologia Vegetal',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividade e programas para o ensino de Botânica e Ecologia Vegetal. Abordagem e elaboração de diferentes metodologias para o ensino de Botância e Ecologia Vegetal. Articulação temática e integrada de temas contemporâneos para o ensino de Biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D988',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40BED9',
			obligatory: false
		},
		'BT601': {
			code: 'BT601',
			name: 'Iniciação Científica em Ecologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#7CD940',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#9440D9',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D94070',
			obligatory: false
		},
		'BV694': {
			code: 'BV694',
			name: 'Ensino de Biologia X: Fisiologia Vegetal',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Fisiologia Vegetal. Abordagem e elaboração de diferentes metodologias para o ensino de Fisiologia Vegetal. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D982',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D94C',
			obligatory: false
		},
		'BZ594': {
			code: 'BZ594',
			name: 'Ensino de Biologia XI: Fauna e Ambiente',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Zoologia de Invertebrados e Vertebrados. Abordagem e elaboração de diferentes metodologias para o ensino de Zoologia de Invertebrados e Vertebrados. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#40D99A',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D97C',
			obligatory: false
		},
		'EL101': {
			code: 'EL101',
			name: 'Iniciação Científica em Educação I',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#40D976',
			obligatory: false
		},
		'EL110': {
			code: 'EL110',
			name: 'Tópicos Especiais em Educação I',
			ementa: 'A ementa desta disciplina deverá ser definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94640',
			obligatory: false
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'Programa a ser definido semestralmente pelo DECISAE sobre tópicos especiais em Ciências Sociais e Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9A6',
			obligatory: false
		},
		'EL201': {
			code: 'EL201',
			name: 'Iniciação Científica em Educação II',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D98240',
			obligatory: false
		},
		'EL210': {
			code: 'EL210',
			name: 'Tópicos Especiais em Educação II',
			ementa: 'A ementa desta disciplina deverá ser definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4052D9',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Estudo das transformações históricas da sociedade e da educação brasileira, com ênfase nas principais concepções filosóficas presentes no pensamento educacional brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#404CD9',
			obligatory: false
		},
		'EL505': {
			code: 'EL505',
			name: 'Iniciação Científica em Ensino de Ciências I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D94064',
			obligatory: false
		},
		'EL506': {
			code: 'EL506',
			name: 'Iniciação Científica em Ensino de Biologia I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D940AC',
			obligatory: false
		},
		'EL605': {
			code: 'EL605',
			name: 'Iniciação Científica em Ensino de Ciências II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D95240',
			obligatory: false
		},
		'EL606': {
			code: 'EL606',
			name: 'Iniciação Científica em Ensino de Biologia II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D99A40',
			obligatory: false
		},
		'EP108': {
			code: 'EP108',
			name: 'Pesquisa Pedagógica I',
			ementa: 'Espaço de introdução do aluno às linguagens de acesso às diferentes fontes de produção da pesquisa educacional: biblioteca, meios informatizados, leitura e produção de textos e artigos com diferentes abordagens. Discussão do profissional da educação frente aos desafios da realidade atual no campo da pesquisa educacional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A640D9',
			obligatory: false
		},
		'FA001': {
			code: 'FA001',
			name: 'Saneamento Rural',
			ementa: 'Apresentação de fundamentos e tecnologias adequadas de tratamento de água. Conceitos de desinfecção. Desenvolvimento de um projeto de filtro lento. Apresentação de fundamentos e tecnologias para tratamento de resíduos líquidos. Desenvolvimento de projeto de tanque séptico e disposição do efluente.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8240D9',
			obligatory: false
		},
		'FA733': {
			code: 'FA733',
			name: 'Fundamentos de Microbiologia e Qualidade de Água',
			ementa: 'Conceituação básica sobre microbiologia aplicada à pós-colheita de produtos agrícolas e ao saneamento ambiental. Conhecimentos de fundamentos de hidrobiologia. Conhecimentos fundamentais de química da água.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8840D9',
			obligatory: false
		},
		'FA874': {
			code: 'FA874',
			name: 'Saneamento Ambiental',
			ementa: 'Conceituação básica sobre impactos ambientais. Identificação de fontes de poluição agrícola, zootécnica e agroindustrial. Conceituação das propriedades físicas, químicas e biológicas dos resíduos. Conhecimentos básicos sobre operações e processos unitários. Conceituação e discussão das tecnologias para tratamento de águas residuárias. Discussão de propostas para controle e disposição de resíduos sólidos. Análise e discussão de alternativas para reciclagem de resíduos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA733'],
			color: '#8840D9',
			obligatory: false
		},
		'GE801': {
			code: 'GE801',
			name: 'História das Ciências Naturais',
			ementa: 'O Renascimento e seu impacto na cosmovisão: a releitura do mundo natural. A Revolução Científica e o nascimento da ciência moderna: a Filosofia Natural, a História Natural e a especialização das disciplinas científicas. A 1a. Revolução Industrial, o Naturalismo científico e os viajantes. Colecionismo, Gabinetes e Museus. O processo de institucionalização e profissionalização das ciências naturais com ênfase no Brasil e América Latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B2',
			obligatory: false
		},
		'GE913': {
			code: 'GE913',
			name: 'Ciências Naturais e Ambiente',
			ementa: 'Abordagem epistemológica que busca a construção do entendimento de como as ciências naturais integram-se do ponto de vista de seus objetos de estudo e métodos quando se estuda o ambiente, seja em suas inter-relações no presente - processos e fenômenos atuais, seja em sua evolução ao longo da história da Terra. Natureza do conhecimento geocientífico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#D940B8',
			obligatory: false
		},
		'GE916': {
			code: 'GE916',
			name: 'Ensino de Ciências da Terra e do Ambiente',
			ementa: 'Importância do ensino de Ciências da Terra para o ensino básico. Modelos e dificuldades comuns de ensino e aprendizagem. Importância e perspectiva cognitiva, ambiental e política do ensino de ciclo da água. Papel estratégico do ciclo da água entre temas ensinados em ciências naturais, experimentais e tecnológicas. Inclui levantamentos das condições de ensino de problemas ambientais relativos à circulação da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#4076D9',
			obligatory: false
		},
		'GM082': {
			code: 'GM082',
			name: 'Geociências para Ensino Fundamental e Médio',
			ementa: 'Propostas de ensino de conteúdos de Geociências para as disciplinas de Ciências, Biologia e Geografia no ensino Fundamental e Médio. Adequação e inadequação de conteúdos ensinados e de métodos e técnicas aplicados noensino de Geociências para esses níveis de escolaridade. Planejamento, elaboração, aplicação e avaliação de atividades voltadas ao ensino de Geociências.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#D9C440',
			obligatory: false
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D952',
			obligatory: false
		}
	}
};

export default catalogue;
