const catalogue = {
	totalCredits: 262,
	maxCreditsSem: 35,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BC183', 'BG181', 'BZ183', 'EL212', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BB281', 'BC283', 'BT282', 'BT283', 'BZ281', 'BZ283', 'EL683']
		},
		'sem-3': {
			id: '3',
			subjects: ['BB381', 'BD692', 'BL033', 'BT383', 'BT384', 'BZ382', 'BZ383', 'MS380']
		},
		'sem-4': {
			id: '4',
			subjects: ['BA480', 'BF483', 'BG200', 'BH482', 'BT483', 'BT484']
		},
		'sem-5': {
			id: '5',
			subjects: ['BE581', 'BF583', 'BI520', 'BL583', 'BL600', 'F_107']
		},
		'sem-6': {
			id: '6',
			subjects: ['BE681', 'BG481', 'BH620', 'BL028', 'BL035', 'BV620', 'BZ681', 'BZ682', 'EL511', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['BG520', 'BL300', 'BL682', 'BV720', 'EL774', 'FN468', 'GM280']
		},
		'sem-8': {
			id: '8',
			subjects: ['BD520', 'BL030', 'BP820', 'BT880', 'BT885', 'EL885', 'GM450', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['BD694', 'BH780', 'BL034', 'BM720', 'EL142', 'EL876', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['BD792', 'BG680', 'BL029', 'BL031', 'BT681', 'EL485', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA500', 'BB500', 'BC500', 'BD500', 'BE500', 'BE501', 'BF500', 'BF501', 'BG500', 'BG501', 'BH501', 'BH502', 'BH511', 'BI500', 'BL500', 'BM500', 'BP500', 'BT500', 'BT501', 'BV500', 'BZ500', 'EL101', 'EL201', 'EL505', 'EL506'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA600', 'BB600', 'BC600', 'BD600', 'BE600', 'BE601', 'BF600', 'BF601', 'BG600', 'BG601', 'BH601', 'BH602', 'BH611', 'BI600', 'BL601', 'BM600', 'BP600', 'BT600', 'BT601', 'BV600', 'BZ600', 'EL605', 'EL606'],
		},
		'elet-3': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['BD001', 'BD002', 'BD003', 'BD004', 'BD005', 'BD006', 'BD007', 'BD008', 'BD009', 'BD010', 'BD011', 'BD012', 'BD013', 'BD014', 'BD015', 'BD016', 'BD017', 'BD018', 'BD019', 'BD020', 'BD021', 'BD022', 'BD023', 'BD024', 'BD025', 'BD026'],
		},
	},

	subjects: {
		'BC183': {
			code: 'BC183',
			name: 'Biologia Celular I',
			ementa: 'Revisão de conteúdos básicos. Principais componentes bioquímicos da célula. Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares: biomembranas, envoltório nuclear, nucléolo e ribossomos, cromatina e cromossomos, retículo endoplasmático, complexo de Golgi, sistema endossômico-lisossômico, mitocôndrias, cloroplastos, peroxissomos, citoesqueleto-microtúbulos, filamentos intermediários e microfilamentos. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#407CD9',
			obligatory: true
		},
		'BG181': {
			code: 'BG181',
			name: 'Introdução à Evolução',
			ementa: 'Revisão de conteúdos básicos. Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#68D940',
			obligatory: true
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Revisão de conteúdos básicos. Diversidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D2',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94047',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Estequiometria. Ligação química. Funções da química orgânica. Experimentos que ilustram o método científico, conceito de mol, ligação química, equilíbrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D95F',
			obligatory: true
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9BA40',
			obligatory: true
		},
		'BC283': {
			code: 'BC283',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, movimentação celular, sinalização celular, síntese e degradação proteica, ciclo celular: mecanismos e controle molecular, meiose, diferenciação celular, morte celular e câncer como modelo: alteraçoes nos processos celulares. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC183'],
			color: '#407CD9',
			obligatory: true
		},
		'BT282': {
			code: 'BT282',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Introdução às técnicas de coleta e de preparação de amostras para Coleções Biológicas. Noções de avaliação da biodiversidade, levantamento e mapeamento de criptógamas. Elaboração de relatórios sobre atividade de campo. Elaboração e apresentação de seminários em grupo. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7040D9',
			obligatory: true
		},
		'BT283': {
			code: 'BT283',
			name: 'Botânica no Campo I',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre sistemática de Criptógamas e Gimnospermas. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D9B340',
			obligatory: true
		},
		'BZ281': {
			code: 'BZ281',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Origem, evolução e diversidade dos Invertebrados Metazoários, incluindo Placozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes, Nemertea, Rotifera, Acanthocephala, Gnathostomulida, Annelida, Sipuncula, Echiura, Mollusca, Phoronida, Brachiopoda, Bryozoa e Entoprocta, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como ocupação de ambientes, mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6840D9',
			obligatory: true
		},
		'BZ283': {
			code: 'BZ283',
			name: 'Zoologia de Invertebrados no Campo I',
			ementa: 'Atividades de excursão. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#4074D9',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9C140',
			obligatory: true
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'BD692': {
			code: 'BD692',
			name: 'Temas Transversais no Ensino de Biologia I',
			ementa: 'Relações Ciência, Tecnologia e Sociedade. Biotecnologia e produção de insumos e alimentos. Demonstrar o sentido histórico da ciência e da tecnologia e o papel do homem na transformação do meio ambiente e da sociedade, os avanços na qualidade de vida e nas relações sociais. Elaboração de projetos, textos e relatórios sobre os temas abordados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#9BD940',
			obligatory: true
		},
		'BL033': {
			code: 'BL033',
			name: 'Metodologia e Práticas de Ensino em Ciências I: Evolução e a Vida na Terra',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Ciências na área de Evolução Biológica e a história da vida na Terra no nível Fundamental. Elaboração de metodologias para o ensino de Ciências na área de Evolução. Estudos de caso e problemas brasileiros e mundiais no ensino de Evolução. O uso de ferramentas tecnológicas, espaços alternativos e ambiente de laboratório para aulas de Ciências na área de Evolução no Ensino Fundamental.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94055',
			obligatory: true
		},
		'BT383': {
			code: 'BT383',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angioespermas e estratégias reprodutivas. Aspectos gerais da morfologia de Angiospermas: raiz, caule, folhas, inflorescências, flores, frutos e sementes. Aspectos gerais de citologia, histologia e anatomia dos órgãos vegetativos de Angiospermas. Elaboração de projetos e relatórios de projetos em métodos em morfologia e anatomia vegetal. Seminários sobre temas atuais em morfologia e anatomia vegetal. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94080',
			obligatory: true
		},
		'BT384': {
			code: 'BT384',
			name: 'Botânica no Campo II',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre morfologia de Angiospermas. Elaboração de relatórios das excursões.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#40A7D9',
			obligatory: true
		},
		'BZ382': {
			code: 'BZ382',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origem evolutiva, forma, função e diversidade de artrópodes, lofoforados, equinodermas, protocordados e cordados. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ281'],
			color: '#6840D9',
			obligatory: true
		},
		'BZ383': {
			code: 'BZ383',
			name: 'Zoologia de Invertebrados no Campo II',
			ementa: 'Observar, compreender e explorar diversos aspectos da história natural, ecologia, zoologia e evolução dos invertebrados com atividades diurnas e noturnas. Comportamentos, substratos, ambientes, formas corpóreas e identificações taxonômicas dos invertebrados em campo. Coleta de artrópodes usando diversos métodos. Treinamento na formulação de hipóteses científicas bem como na elaboração de relatórios científicos e apresentação oral de estudos científicos. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['BZ281'],
			color: '#6840D9',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D96D',
			obligatory: true
		},
		'BA480': {
			code: 'BA480',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4091D9',
			obligatory: true
		},
		'BF483': {
			code: 'BF483',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistema nervoso, neuromuscular e endócrino. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5A40D9',
			obligatory: true
		},
		'BG200': {
			code: 'BG200',
			name: 'Bioestatística',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#40D96D',
			obligatory: true
		},
		'BH482': {
			code: 'BH482',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz celular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC183'],
			color: '#407CD9',
			obligatory: true
		},
		'BT483': {
			code: 'BT483',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas: regras básicas de nomenclatura botânica; coleta e preservação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Noções de biossistemática e de sistemas de reprodução em angiospermas. Noções sobre biogeografia e sobre a aplicação do conhecimento taxonômico vegetal em conservação da biodiversidade, pesquisa e produção de bens (alimentos, fármacos, combustível renovável, etc), pasiagismo e arborização humana. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT383'],
			color: '#D94080',
			obligatory: true
		},
		'BT484': {
			code: 'BT484',
			name: 'Botânica no Campo III',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre sistemática e evolução de Angiospermas. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#40CAD9',
			obligatory: true
		},
		'BE581': {
			code: 'BE581',
			name: 'Ecologia de Organismos e Populações',
			ementa: 'O que é ecologia. Adaptação e Evolução. O ambiente físico. Adaptações de plantas e animais ao ambiente físico. Histórias de vida. Populações: propriedades, crescimento, competição intraespecífica, metapopulações, abundância e regulação populacional. Interações entre espécies: competição interespecífica, predação, parasitismo, mutualismo e decompositores. Ecologia comportamental: seleção sexual, sistemas de acasalamento e comportamento social. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG200'],
			color: '#40D96D',
			obligatory: true
		},
		'BF583': {
			code: 'BF583',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistemas digestório, cardiovascular, respiratório e renal. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF483'],
			color: '#5A40D9',
			obligatory: true
		},
		'BI520': {
			code: 'BI520',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases moleculares celulares do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas que mantêm a integridade e a homeostasia do hospedeiro. Elaboração de relatórios de aulas práticas e apresentação de seminários em tópicos de Imunologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC283'],
			color: '#407CD9',
			obligatory: true
		},
		'BL583': {
			code: 'BL583',
			name: 'Construção de Mídias para o Ensino de Ciências e Biologia',
			ementa: 'Utilização de computadores para o desenvolvimento de material didático nas áreas de Ciências e Biologia. Edição digital de textos, imagens, áudio e vídeos. Redação de argumento de roteiros de material didático. Apresentação oral da produção feita durante a disciplina.',
			semestre: 1,
			vector: {T:1, P:6, L:1, O:0, D:0, HS:8, SL:2, C:8},
			requisitos: '',
			color: '#4050D9',
			obligatory: true
		},
		'BL600': {
			code: 'BL600',
			name: 'Produção e Análise de Textos em Ciências Biológicas',
			ementa: 'Vivenciar processos de geração e avaliação de textos em Língua Portuguesa contendo conhecimento de Ciências ou Biologia. Reconhecer espaços institucionais relacionados às Ciências de Biologia (laboratórios, museus, parques, TV, imprensa, mídias sociais, etc.) onde há necessidade de produção de textos em Língua Portuguesa. Reconhecer as diferentes formas de tratamento do conhecimento científicos e biológico sob a forma de texto nestes diferentes espaços de ensino. Reconhecer as diferentes produções textuais como indicadores de aprendizagem. Realizar a avaliar a produção de textos em diferentes contextos (relatórios científicos, pôsteres, sítios de internet, elementos de publicação em mídias sociais, etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D99D40',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#77D940',
			obligatory: true
		},
		'BE681': {
			code: 'BE681',
			name: 'Ecologia de Comunidades e Ecossistemas',
			ementa: 'Estrutura e dinâmica de comunidades. Fatores influenciando a estrutura de comunidades. Teias tróficas. Ecologia de paisagens. Biogeografia. Ecologia de ecossistemas: fluxo de energia e matéria através de ecossistemas. Padrões de diversidade. Ecologia humana: crescimento populacional, uso de recursos, sustentabilidade, perda de habitat, biodiversidade e conservação, mudanças climáticas globais. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG200'],
			color: '#40D96D',
			obligatory: true
		},
		'BG481': {
			code: 'BG481',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG181'],
			color: '#68D940',
			obligatory: true
		},
		'BH620': {
			code: 'BH620',
			name: 'Embriologia Comparada',
			ementa: 'Estudo da embriologia comparada, com ênfase nos processos comuns ao desenvolvimento animal. Os tópicos incluem gametogênese, fecundação e embriogênese inicial de organismos-modelo invertebrados (ouriço-do-mar e drosófila) e vertebrados (peixe-zebra, Xenopus, galinha e camundongo), bem como o estudo do desenvolvimento embrionário humano. As aulas-práticas consistirão na observação de lâminas de embriões de galinha em diferentes estágios do desenvolvimento. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH482'],
			color: '#407CD9',
			obligatory: true
		},
		'BL028': {
			code: 'BL028',
			name: 'Metodologia e Práticas de Ensino de Biologia I: Ciências Morfofuncionais I',
			ementa: 'Preparação de roteiros para aula prática com e sem uso de microscópio. Preparação de material citológico para observações \"a fresco\" após fixação. Elaboração de questões com respostas esperadas, textos e jogos com conteúdo de Biologia Celular. Aprendizado das diferentes técnicas anatômicas para preparação de material pedagógico e preparação de material (roteiros, apostilas) para aulas práticas e/ou teóricas sobre os diferentes conteúdos de Anatomia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#408AD9',
			obligatory: true
		},
		'BL035': {
			code: 'BL035',
			name: 'Metodologia e Prática de Ensino em Biologia: Ecologia e Fauna',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Zoologia e Ecologia de Invertebrados e Vertebrados. Abordagem e elaboração de diferentes metodologias para o ensino de Zoologia e Ecologia de Invertebrados e Vertebrados. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BC',
			obligatory: true
		},
		'BV620': {
			code: 'BV620',
			name: 'Fisiologia Vegetal Geral: Metabolismo',
			ementa: 'Relações hídricas, absorção iônica e transporte de solutos, nutrição mineral, assimilação do nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B0D940',
			obligatory: true
		},
		'BZ681': {
			code: 'BZ681',
			name: 'Zoologia de Vertebrados',
			ementa: 'Características gerais e diversidade das classes de vertebrados: peixes, anfíbios, répteis, aves e mamíferos. Onde e como vivem os vertebrados. Importância dos vertebrados. Prática ilustrativa da diversidade estrutural em cada classe, considerando situações de aprendizagem no Ensino Fundamental e Médio. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7ED940',
			obligatory: true
		},
		'BZ682': {
			code: 'BZ682',
			name: 'Zoologia de Vertebrados no Campo',
			ementa: 'Atividades de excursão. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#B740D9',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9A440',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#40D998',
			obligatory: true
		},
		'BG520': {
			code: 'BG520',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG481'],
			color: '#68D940',
			obligatory: true
		},
		'BL300': {
			code: 'BL300',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação dos pontos de vista dos principais filósofos, dos pré-socráticos aos atuais, e dos principais problemas abordados pela filosofia das ciências naturais. Análise de textos em língua portuguesa publicados na imprensa e em periódicos especializados. Elaboração de questões-guia e de exposições audiovisuais. Apresentação de seminários e debate das questões-guia. Discussão de filmes sob diferentes pontos de vista da filosofia das ciências naturais.Discussão dos principais pontos de vista da filosofia das ciências naturais com vistas à sua aplicação no ensino de Ciências e Biologia.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40BCD9',
			obligatory: true
		},
		'BL682': {
			code: 'BL682',
			name: 'Ensino em Ecologia de Organismos, Populações, Comunidades e Ecossistemas',
			ementa: 'Importância de Ensino de Ecologia em níveis pré-universitários. Estratégias de Ensino de Ecologia, com a participação do aluno na construção do conhecimento novo, através de debate, diálogo, dinâmicas e atividades práticas de laboratório e campo. Abordagens sobre Biodiversidade, Organismos, populações e comunidades. Ecologia Humana (Urbana, Rural e Industrial). Comunidades tradicionais (indígenas, caiçaras, quilombolas dentre outros). Educação Ambiental & Socioambiental. Desenvolvimento sustentável e preservação ambiental.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['BG200'],
			color: '#40D96D',
			obligatory: true
		},
		'BV720': {
			code: 'BV720',
			name: 'Fisiologia Vegetal Geral: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D9408F',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D940B3',
			obligatory: true
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A240D9',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D974',
			obligatory: true
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. Bem comum, proteção do meio ambiente, melhoria da qualidade de vida. O Cógigo de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos e análises de prática profissional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94087',
			obligatory: true
		},
		'BL030': {
			code: 'BL030',
			name: 'Metodologia e Práticas de Ensino em Biologia III: Genética e Evolução I',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Genética e Evolução. Abordagem e elaboração de diferentes metodologias para o ensino de Genética e Evolução. Articulação temática e integrada de temas contemporâneos para o ensino de Genética e Evolução. Estudos de caso e problemas brasileiros e mundiais no ensino de Genética e Evolução. O uso de ferramentas tecnológicas, espaços alternativos e ambiente de laboratório para o ensino de Genética e Evolução.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96B40',
			obligatory: true
		},
		'BP820': {
			code: 'BP820',
			name: 'Zooparasitologia',
			ementa: 'Estudos dos parasitas que infectam humanos e animais. Interações entre hospedeiro-parasito e o meio ambiente. Estudo de protozoários e helmintos: ciclo da vida, transmissão, patogenia, epidemiologia, imunidade e profilaxia. Ectoparasitas e estudo dos principais artrópodes e moluscos veiculadores de parasitoses. Elaboração de relatórios ou seminários sobre temas de protozoologia, helmintologia e ectoparasitologia. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D991',
			obligatory: true
		},
		'BT880': {
			code: 'BT880',
			name: 'Ecologia e Fitogeografia no Campo',
			ementa: 'Atividades de campo na disciplina de Ecologia e Fitogeografia. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#9B40D9',
			obligatory: true
		},
		'BT885': {
			code: 'BT885',
			name: 'Ecologia e Fitogeografia',
			ementa: 'Noções de ecologia global, ecologia vegetal e fitogeografia. Os grandes sistemas climáticos e pedogenéticos mundiais e a distribuição dos grandes biomas. Forma e funções da planta como expressão de adaptações evolutivas. Os grandes domínios fitogeográficos do Brasil. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#CD40D9',
			obligatory: true
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: '',
			color: '#40D9A7',
			obligatory: true
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94E40',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#4CD940',
			obligatory: true
		},
		'BD694': {
			code: 'BD694',
			name: 'Temas Transversais no Ensino de Biologia II',
			ementa: 'Saúde, Saúde Pública e Saúde coletiva: qualidade de vida, ambiente e sociedade.Saúde do adolescente e do escolar; vacinas e a saúde humana e a de outros animais; alterações no ambiente e a saúde coletiva; o homem e seu papel nas epidemias. Novas epidemias e a sociedade contemporânea. Biologia e Saúde na escola. Estudos de propostas para o ensino de saúde no Ensino Fundamental e Médio.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97940',
			obligatory: true
		},
		'BH780': {
			code: 'BH780',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento. Controle genético e molecular da diferenciação celular. Estabelecimento dos eixos corporais. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento.Questões éticas e de biossegurança relacionadas à Biologia do Desenvolvimento. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['BG520', 'BH620'],
			color: '#54AB8D',
			obligatory: true
		},
		'BL034': {
			code: 'BL034',
			name: 'Metodologia e Práticas de Ensino em Biologia e Ciências da Natureza I',
			ementa: 'Estudo das propostas de ensino de Biologia e Ciências da Natureza na escola fundamental e média. Análise de recursos e materiais para o ensino com ênfase em Biologia Vegetal. Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Biologia Vegetal na escola fundamental e média. Elaboração de projetos, textos e relatórios em Biologia Vegetal.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT282', 'BT483', 'BV620', 'BV720'],
			color: '#B5668A',
			obligatory: true
		},
		'BM720': {
			code: 'BM720',
			name: 'Microbiologia',
			ementa: 'Bactérias, fungos e vírus: estrutura e formas de organização. Metabolismo microbiano. Controle dos micro-organismos. Conceito de ecologia microbiana. Relações micro-organismos e seus hospedeiros. Relações vírus e seus hospedeiros. Métodos de visualização de bactérias e fungos. Crescimento bacteriano \"in vitro\". Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5340D9',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#7740D9',
			obligatory: true
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional. Trabalho de campo orientado para a avaliação dos componentes da prática educativa a partir de contextos nos quais ela se desenvolve. Elaboração de projetos e propostas que ampliem as alternativas de intervenção em ações pedagógicas coletivas, estabelecidas em parceria com os profissionais que participam da formação do professor nos variados campos de estágio.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#D9404E',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#BED940',
			obligatory: true
		},
		'BD792': {
			code: 'BD792',
			name: 'Temas Transversais no Ensino de Biologia III',
			ementa: 'Estudo e elaboração de abordagens dos temas relacionados à sexualidade, reprodução humana e saúde sexual e reprodutiva. Anatomia do sistema reprodutor de humanos, tipos de reprodução, ciclo menstrual, métodos contraceptivos, hormônios sexuais e puberdade, doenças sexualmente transmissíveis e seus métodos de prevenção; saúde sexual e reprodutiva.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D440D9',
			obligatory: true
		},
		'BG680': {
			code: 'BG680',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios e análise de textos na área de Genética em Língua Portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG520'],
			color: '#68D940',
			obligatory: true
		},
		'BL029': {
			code: 'BL029',
			name: 'Metodologia e Práticas de Ensino em Biologia II: Ciências Morfofuncionais II',
			ementa: 'Aplicação de métodos e estratégias didáticos-pedagógicas contemporâneas, tais como ferramentas para ensino à distância, preparação de roteiros e materiais para aulas práticas, utilização de programas digitais, para capacitar o estudante de Ciências Biológicas para atuar no Ensino Fundamental e Médio no desenvolvimento de conteúdos pertinentes à área de Biologia Tecidual, Biologia do Desenvolvimento e Fisiologia Humana.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4058D9',
			obligatory: true
		},
		'BL031': {
			code: 'BL031',
			name: 'Metodologia e Prática de Ensino em Biologia IV: Doenças Infecciosas',
			ementa: 'Planejamento, elaboração, aplicação, avaliação de atividades e programas para o ensino de Microbiologia e Parasitologia com ênfase em patógenos humanos, e Imunologia com ênfase nos mecanismos de defesa de humanos. Abordagem e elaboração de diferentes metodologias para o ensino desses temas da área de saúde no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4066D9',
			obligatory: true
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada. Condução de seminário e apresentação de relatório sobre tema relacionado à disciplina. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#D940C8',
			obligatory: true
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D99F',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#45D940',
			obligatory: true
		},
		'BA500': {
			code: 'BA500',
			name: 'Iniciação Científica em Anatomia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#61D940',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#5AD940',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#CDD940',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D958',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D97C',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D95C40',
			obligatory: false
		},
		'BD001': {
			code: 'BD001',
			name: 'Atividades Acadêmicos-Científicas I',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#D940CF',
			obligatory: false
		},
		'BD002': {
			code: 'BD002',
			name: 'Atividades Acadêmico-Científicas II',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D94079',
			obligatory: false
		},
		'BD003': {
			code: 'BD003',
			name: 'Integralização de Atividades Acadêmico-Científicas III',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#4083D9',
			obligatory: false
		},
		'BD004': {
			code: 'BD004',
			name: 'Atividades Acadêmico-Científicas IV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#405FD9',
			obligatory: false
		},
		'BD005': {
			code: 'BD005',
			name: 'Atividades Acadêmico-Científicas V',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#70D940',
			obligatory: false
		},
		'BD006': {
			code: 'BD006',
			name: 'Atividades Acadêmico-Científicas VI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#4049D9',
			obligatory: false
		},
		'BD007': {
			code: 'BD007',
			name: 'Atividades Acadêmico-Científicas VII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#4098D9',
			obligatory: false
		},
		'BD008': {
			code: 'BD008',
			name: 'Atividades Acadêmico-Científicas VIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#40D949',
			obligatory: false
		},
		'BD009': {
			code: 'BD009',
			name: 'Atividades Acadêmico-Científicas IX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#A940D9',
			obligatory: false
		},
		'BD010': {
			code: 'BD010',
			name: 'Atividades Acadêmico-Científicas X',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D98A',
			obligatory: false
		},
		'BD011': {
			code: 'BD011',
			name: 'Atividades Acadêmico-Científicas XI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#D4D940',
			obligatory: false
		},
		'BD012': {
			code: 'BD012',
			name: 'Atividades Acadêmico-Científicas XII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#D94740',
			obligatory: false
		},
		'BD013': {
			code: 'BD013',
			name: 'Atividades Acadêmico-Científicas XIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#93D940',
			obligatory: false
		},
		'BD014': {
			code: 'BD014',
			name: 'Atividades Acadêmico-Científicas XIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D9405C',
			obligatory: false
		},
		'BD015': {
			code: 'BD015',
			name: 'Atividades Acadêmico-Científicas XV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#C6D940',
			obligatory: false
		},
		'BD016': {
			code: 'BD016',
			name: 'Atividades Acadêmico-Científicas XVI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D950',
			obligatory: false
		},
		'BD017': {
			code: 'BD017',
			name: 'Atividades Acadêmico-Científicas XVII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#D940C1',
			obligatory: false
		},
		'BD018': {
			code: 'BD018',
			name: 'Atividades Acadêmico-Científicas XVIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#40D9C3',
			obligatory: false
		},
		'BD019': {
			code: 'BD019',
			name: 'Atividades Acadêmico-Científicas XIX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#6140D9',
			obligatory: false
		},
		'BD020': {
			code: 'BD020',
			name: 'Atividades Acadêmico-Científicas XX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#C640D9',
			obligatory: false
		},
		'BD021': {
			code: 'BD021',
			name: 'Atividades Acadêmico-Científicas XXI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#D9D640',
			obligatory: false
		},
		'BD022': {
			code: 'BD022',
			name: 'Atividades Acadêmico-Científicas XXII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D98F40',
			obligatory: false
		},
		'BD023': {
			code: 'BD023',
			name: 'Atividades Acadêmico-Científicas XXIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#D95540',
			obligatory: false
		},
		'BD024': {
			code: 'BD024',
			name: 'Atividades Acadêmico-Científicas XXIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#B7D940',
			obligatory: false
		},
		'BD025': {
			code: 'BD025',
			name: 'Atividades Acadêmico-Científicas XXV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#40D2D9',
			obligatory: false
		},
		'BD026': {
			code: 'BD026',
			name: 'Atividades Acadêmico-Científicas XXVI',
			ementa: 'Atividades acadêmico-científcas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#4540D9',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D942',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D940BA',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D9C840',
			obligatory: false
		},
		'BE501': {
			code: 'BE501',
			name: 'Iniciação Científica em Ecologia Animal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D9AE',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D96440',
			obligatory: false
		},
		'BE601': {
			code: 'BE601',
			name: 'Iniciação Científica em Ecologia Animal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#7E40D9',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8C40D9',
			obligatory: false
		},
		'BF501': {
			code: 'BF501',
			name: 'Iniciação Científica em Fisiologia Humana I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8540D9',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D983',
			obligatory: false
		},
		'BF601': {
			code: 'BF601',
			name: 'Iniciação Científica em Fisiologia Humana II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D9D9',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#BE40D9',
			obligatory: false
		},
		'BG501': {
			code: 'BG501',
			name: 'Iniciação Científica em Evolução I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D940AB',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8CD940',
			obligatory: false
		},
		'BG601': {
			code: 'BG601',
			name: 'Iniciação Científica em Evolução II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9CF40',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Embriologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#B040D9',
			obligatory: false
		},
		'BH502': {
			code: 'BH502',
			name: 'Iniciação Científica em Biologia Tecidual I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40B5D9',
			obligatory: false
		},
		'BH511': {
			code: 'BH511',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94072',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#409FD9',
			obligatory: false
		},
		'BH602': {
			code: 'BH602',
			name: 'Iniciação Científica em Biologia Tecidual II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#D9AB40',
			obligatory: false
		},
		'BH611': {
			code: 'BH611',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40AED9',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#A9D940',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4C40D9',
			obligatory: false
		},
		'BL500': {
			code: 'BL500',
			name: 'Iniciação Científica em Ensino I',
			ementa: 'Introdução à pesquisa qualitativa do campo das ciências humanas. Pesquisa e estudos em epistemologia da ciência aplicados ao ensino de ciências e biologia. Coleta de dados, metodologias de pesquisa e abordagem científica, análise dos resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D940D6',
			obligatory: false
		},
		'BL601': {
			code: 'BL601',
			name: 'Iniciação Científica em Ensino II',
			ementa: 'Introdução à pesquisa qualitativa do campo das ciências humanas. Pesquisa e estudos em epistemologia da ciência aplicados ao ensino de ciências e biologia. Coleta de dados, metodologias de pesquisa e abordagem científica, análise dos resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D9406B',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94096',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#9340D9',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D9409D',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D9B5',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#53D940',
			obligatory: false
		},
		'BT501': {
			code: 'BT501',
			name: 'Iniciação Científica em Ecologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D98040',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#40D966',
			obligatory: false
		},
		'BT601': {
			code: 'BT601',
			name: 'Iniciação Científica em Ecologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#A2D940',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D99640',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94064',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40C3D9',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#85D940',
			obligatory: false
		},
		'EL101': {
			code: 'EL101',
			name: 'Iniciação Científica em Educação I',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D940A4',
			obligatory: false
		},
		'EL201': {
			code: 'EL201',
			name: 'Iniciação Científica em Educação II',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D98740',
			obligatory: false
		},
		'EL505': {
			code: 'EL505',
			name: 'Iniciação Científica em Ensino de Ciências I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D9CA',
			obligatory: false
		},
		'EL506': {
			code: 'EL506',
			name: 'Iniciação Científica em Ensino de Biologia I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D97240',
			obligatory: false
		},
		'EL605': {
			code: 'EL605',
			name: 'Iniciação Científica em Ensino de Ciências II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4042D9',
			obligatory: false
		},
		'EL606': {
			code: 'EL606',
			name: 'Iniciação Científica em Ensino de Biologia II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#406DD9',
			obligatory: false
		}
	}
};

export default catalogue;
