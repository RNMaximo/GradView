const catalogue = {
	totalCredits: 265,
	maxCreditsSem: 42,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BC182', 'BE180', 'BG180', 'BZ183', 'EL212', 'MS380', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BA281', 'BB281', 'BC282', 'BG200', 'BG282', 'BH282', 'BT285', 'BZ285', 'EL683', 'F_107']
		},
		'sem-3': {
			id: '3',
			subjects: ['BB381', 'BD692', 'BF381', 'BG380', 'BI381', 'BM382', 'BT385', 'BZ385', 'EL511']
		},
		'sem-4': {
			id: '4',
			subjects: ['BD520', 'BE480', 'BF481', 'BG480', 'BH420', 'BL583', 'BT485', 'BV481', 'BZ485']
		},
		'sem-5': {
			id: '5',
			subjects: ['BD621', 'BH520', 'BL036', 'BL300', 'BP582', 'BV581', 'EL774', 'GM280', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['BL035', 'BL037', 'BL600', 'EL885', 'FN468', 'GM450', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['BD694', 'BL034', 'BT205', 'EL142', 'EL876', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BL031', 'BT681', 'EL485', 'ELET08']
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
			ementa: 'Revisão de conteúdos básicos. Principais componentes bioquímicos da célula. Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares: biomembranas, envoltório nuclear, cromatina e cromossomos, nucléolo, ribossomos (com ênfase em síntese proteica), proteossomo, retículo endoplasmático, complexo de Golgi, sistema endossômico-lisossômico, mitocôndrias, peroxissomos. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B0',
			obligatory: true
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Revisão de conteúdos básicos em ecologia e ciências ambientais. A ecologia no nível do indivíduo, populações, comunidades e ecossistemas. Propriedades de sistemas ecológicos. Biomas. O ambiente físico, adaptações, distribuição e abundância. Introdução às interações ecológicas. Aplicação da ecologia a problemas e desafios ambientais atuais. Método científico e formulação de hipóteses em ecologia e fundamentos teórico-práticos. Excursões obrigatórias. Produção e análise de textos em língua portuguesa, incluindo elaboração de projetos, relatórios científicos e apresentações orais e de painel.',
			semestre: 1,
			vector: {T:1, P:5, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94048',
			obligatory: true
		},
		'BG180': {
			code: 'BG180',
			name: 'Introdução à Evolução',
			ementa: 'Revisão de conteúdos básicos. Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94070',
			obligatory: true
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Revisão de conteúdos básicos. Diversidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4085D9',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B2D940',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D955',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Estequiometria. Ligação química. Funções da química orgânica. Experimentos que ilustram o método científico, conceito de mol, ligação química, equilíbrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#8AD940',
			obligatory: true
		},
		'BA281': {
			code: 'BA281',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9CD',
			obligatory: true
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A840',
			obligatory: true
		},
		'BC282': {
			code: 'BC282',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, citoesqueleto (microtúbulos, microfilamentos e filamentos intermediários), movimentação celular, sinalização celular, ciclo celular (mecanismos e controle molecular), meiose, diferenciação celular, morte celular e câncer como modelo para o estudo de alteraçoes nos processos celulares. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC182'],
			color: '#D940B0',
			obligatory: true
		},
		'BG200': {
			code: 'BG200',
			name: 'Bioestatística',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#40D955',
			obligatory: true
		},
		'BG282': {
			code: 'BG282',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG180'],
			color: '#D94070',
			obligatory: true
		},
		'BH282': {
			code: 'BH282',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz extracelular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: '#D940B0',
			obligatory: true
		},
		'BT285': {
			code: 'BT285',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação da diversidade e evolução de organismos fotossintetizantes. Origem da fotossíntese e tipos de cloroplastos. Morfologia dos principais grupos de algas e plantas terrestres (não angiospermas). Ciclos de vida. Estratégias adaptativas para a conquista do ambiente terrestre. Evolução do sistema reprodutivo. Evolução do sistema vascular. Evolução da semente. Introdução às técnicas de coleta e preparação de amostras de plantas. Treinamento em observações e experimentação no campo. Produção e análise de texos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#A240D9',
			obligatory: true
		},
		'BZ285': {
			code: 'BZ285',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Evolução e diversidade dos invertebrados metazoários, incluindo Placozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes, Nemertea, Rotifera, Gastrotricha, Kinorhyncha, Nematoda, Nematomorpha, Priapula, Acanthocephala, Ento-procta, Gnathostomulida, Loricifera, Annelida e Mollusca, embasando-se em propostas de filogenias. Estudo comparativo dos diferentes grupos, relacionando a anatomia aos aspectos da biologia, como ocupação de ambientes (mar, terra, água doce), locomoção e suporte, mecanismos de alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#42D940',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D5D9',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AAD940',
			obligatory: true
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94088',
			obligatory: true
		},
		'BD692': {
			code: 'BD692',
			name: 'Temas Transversais no Ensino de Biologia I',
			ementa: 'Temas Transversais na Educação Básica: Meio Ambiente e Cultura. Relações entre Ciência, Natureza e Sociedade. Demonstrar o sentido histórico da ciência e da tecnologia e o papel do homem na transformação do meio ambiente e da sociedade, os avanços na qualidade de vida e nas relações sociais e culturais. Elaboração de projetos, textos e relatórios sobre os temas abordados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#9A40D9',
			obligatory: true
		},
		'BF381': {
			code: 'BF381',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistema nervoso, neuromuscular e endócrino. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97840',
			obligatory: true
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG282'],
			color: '#D94070',
			obligatory: true
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases moleculares celulares do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas que mantêm a integridade e a homeostasia do hospedeiro. Elaboração de relatórios de aulas práticas e apresentação de seminários em tópicos de Imunologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC282'],
			color: '#D940B0',
			obligatory: true
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus e dos fungos. Metabolismo microbiano. Controle dos microrganismos. Microbiota. Relações micro-organismos e seus hospedeiros. Relações vírus e seus hospedeiros. Métodos de visualização de bactérias. Crescimento bacteriano \"in vitro\". Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98040',
			obligatory: true
		},
		'BT385': {
			code: 'BT385',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angiospermas e estratégias reprodutivas. Aspectos gerais da morfologia de Angiospermas: raiz, caule, folhas, inflorescências, flores, frutos e sementes. Aspectos gerais de célula vegetal e anatomia dos diferentes tecidos e órgãos vegetativos de Angiospermas. Elaboração de relatórios em aula prática dos conteúdos ministrados. Treinamento em observações e experimentação no campo e elaboração de trabalho escrito sobre morfologia vegetal. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94078',
			obligatory: true
		},
		'BZ385': {
			code: 'BZ385',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origens evolutivas, diversidade, forma, função e organização dos Ecdysozoa e Deuterostomia. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['BZ285'],
			color: '#42D940',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9BD',
			obligatory: true
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. Bem comum, proteção do meio ambiente, melhoria da qualidade de vida. O Código de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos e análises de prática profissional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'BE480': {
			code: 'BE480',
			name: 'Ecologia Básica',
			ementa: 'Fluxo de energia e produtividade primária. Decomposição. Funcionamento de ecossistemas. Estrutura de comunidades ecológicas, riqueza e diversidade de espécies. Interações interespecíficas: predação, competição, mutualismo. Dinâmica populacional e competição intraespecífica. Distribuição e abundância de espécies. Metapopulações. Condições, recursos e adaptações. Ecofisiologia. Serviços ecossistêmicos e aplicação do conhecimento ecológico. Produção e análise de textos em língua portuguesa, incluindo elaboração de projetos e relatórios científicos. Treinamento em apresentações orais e seminários.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['BE180'],
			color: '#D94048',
			obligatory: true
		},
		'BF481': {
			code: 'BF481',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistemas digestório, cardiovascular, respiratório e renal. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF381'],
			color: '#D97840',
			obligatory: true
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios e análise de textos na área de Genética em Língua Portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: '#D94070',
			obligatory: true
		},
		'BH420': {
			code: 'BH420',
			name: 'Embriologia Comparada',
			ementa: 'Estudo da embriologia comparada, com ênfase nos processos comuns ao desenvolvimento animal. Os tópicos incluem gametogênese, fecundação e embriogênese inicial de organismos-modelo invertebrados (ouriço-do-mar e drosófila) e vertebrados (peixe-zebra, Xenopus, galinha e camundongo), bem como o estudo do desenvolvimento embrionário humano. As aulas-práticas consistirão na observação de lâminas de embriões de galinha em diferentes estágios do desenvolvimento. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH282'],
			color: '#D940B0',
			obligatory: true
		},
		'BL583': {
			code: 'BL583',
			name: 'Construção de Mídias para o Ensino de Ciências e Biologia',
			ementa: 'Utilização de computadores para o desenvolvimento de material didático nas áreas de Ciências e Biologia. Edição digital de textos, imagens, áudio e vídeos. Redação de argumento de roteiros de material didático. Apresentação oral da produção feita durante a disciplina.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:4, D:0, HS:8, SL:2, C:8},
			requisitos: '',
			color: '#404DD9',
			obligatory: true
		},
		'BT485': {
			code: 'BT485',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas; regras de nomenclatura botânica; coleta, preservação e documentação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Treinamento em observações e experimentação no campo. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['BT385'],
			color: '#D94078',
			obligatory: true
		},
		'BV481': {
			code: 'BV481',
			name: 'Fisiologia Vegetal Básica: Metabolismo',
			ementa: 'Relações hídricas, absorção iônica e transporte de solutos, nutrição mineral, assimilação de nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7AD940',
			obligatory: true
		},
		'BZ485': {
			code: 'BZ485',
			name: 'Zoologia de Vertebrados',
			ementa: 'Introdução ao estudo de vertebrados: noções sobre variedade de formas, funções, ambiente e modos de vida de peixes, anfíbios, répteis, aves e mamíferos. (Excursão obrigatória, elaboração de trabalhos com apresentação oral e relatório). Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940C7',
			obligatory: true
		},
		'BD621': {
			code: 'BD621',
			name: 'Legislação e Normas para o Profissional de Biologia',
			ementa: 'Análise e estudo das normas e legislação para o profissional em Biologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BD520'],
			color: '#40D97D',
			obligatory: true
		},
		'BH520': {
			code: 'BH520',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento. Controle genético e molecular da diferenciação celular. Estabelecimento dos eixos corporais. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento. Questões éticas e de biossegurança relacionadas à Biologia do Desenvolvimento. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['BG380', 'BH420'],
			color: '#D94090',
			obligatory: true
		},
		'BL036': {
			code: 'BL036',
			name: 'Metodologia Práticas Ensino em Ciências Biologia : Genética , E. V. n. Terra',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas de Genética, Evolução e Vida na Terra para o Ensino Fundamental e Médio. Abordagem e elaboração de diferentes metodologias, articulação temática e integrada de temas contemporâneos em Genética, Evolução e História da Vida na Terra para o Ensino Fundamental e Médio. Estudos de caso e problemas brasileiros e mundiais, uso de ferramentas tecnológicas, espaços alternativos e ambiente de laboratório no Ensino de Genética, Evolução e Vida na Terra.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40ADD9',
			obligatory: true
		},
		'BL300': {
			code: 'BL300',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação dos pontos de vista dos principais filósofos, dos pré-socráticos aos atuais, e dos principais problemas abordados pela filosofia das ciências naturais. Análise de textos em língua portuguesa publicados na imprensa e em periódicos especializados. Elaboração de questões-guia e de exposições audiovisuais. Apresentação de seminários e debate das questões-guia. Discussão de filmes sob diferentes pontos de vista da filosofia das ciências naturais.Discussão dos principais pontos de vista da filosofia das ciências naturais com vistas à sua aplicação no ensino de Ciências e Biologia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#8A40D9',
			obligatory: true
		},
		'BP582': {
			code: 'BP582',
			name: 'Parasitologia Animal I',
			ementa: 'Conceito de parasitismo. Relação parasito-hospedeiro. Ciclos biológicos. Exemplos de protozoários, helmintos e artró-podes parasitas. Vetores. Epidemiologia das principais parasitoses de interesse médico. Elaboração de relatórios ou seminários sobre temas de protozologia, helmintologia e ectoparasitologia. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95040',
			obligatory: true
		},
		'BV581': {
			code: 'BV581',
			name: 'Fisiologia Vegetal Básica: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98840',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D940D7',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94068',
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
		'BL035': {
			code: 'BL035',
			name: 'Metodologia e Prática de Ensino em Biologia: Ecologia e Fauna',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Zoologia e Ecologia de Invertebrados e Vertebrados. Abordagem e elaboração de diferentes metodologias para o ensino de Zoologia e Ecologia de Invertebrados e Vertebrados. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95840',
			obligatory: true
		},
		'BL037': {
			code: 'BL037',
			name: 'Metodologia e Práticas de Ensino em Ciências e Biologia: Morfofisiologia',
			ementa: 'Aplicação de métodos e estratégias didático-pedagógicas contemporâneas, tais como ferramentas para ensino à distância, preparação de roteiros e materias para aulas práticas, utilização de programas digitais, textos e jogos, para capacitar o estudante de Ciências Biológicas para atuar no Ensino Fundamental e Médio no desenvolvimento de conteúdos pertinentes á área de Biologia Celular, Embriologia, Biologia Tecidual, Anatomia e Fisiologia Humana.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA460'],
			color: '#408DD9',
			obligatory: true
		},
		'BL600': {
			code: 'BL600',
			name: 'Produção e Análise de Textos em Ciências Biológicas',
			ementa: 'Vivenciar processos de geração e avaliação de textos em Língua Portuguesa contendo conhecimento de Ciências ou Biologia. Reconhecer espaços institucionais relacionados às Ciências de Biologia (laboratórios, museus, parques, TV, imprensa, mídias sociais, etc.) onde há necessidade de produção de textos em Língua Portuguesa. Reconhecer as diferentes formas de tratamento do conhecimento científicos e biológico sob a forma de texto nestes diferentes espaços de ensino. Reconhecer as diferentes produções textuais como indicadores de aprendizagem. Realizar a avaliar a produção de textos em diferentes contextos (relatórios científicos, pôsteres, sítios de internet, elementos de publicação em mídias sociais, etc.).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40D995',
			obligatory: true
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: '',
			color: '#D94840',
			obligatory: true
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94098',
			obligatory: true
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4055D9',
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
		'BD694': {
			code: 'BD694',
			name: 'Temas Transversais no Ensino de Biologia II',
			ementa: 'Temas Transversais na Educação Básica: Saúde e Sexualidade. Saúde do adolescente e do escolar; epidemias e a sociedade contemporânea; sexualidade, reprodução humana e saúde sexual e reprodutiva. Biologia e Saúde na escola. Estudos de problemáticas e propostas para o ensino de saúde e sexualidade no Ensino Fundamental e Médio.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94050',
			obligatory: true
		},
		'BL034': {
			code: 'BL034',
			name: 'Metodologia e Práticas de Ensino em Biologia e Ciências da Natureza I',
			ementa: 'Estudo das propostas de ensino de Biologia e Ciências da Natureza na escola fundamental e média. Análise de recursos e materiais para o ensino com ênfase em Biologia Vegetal. Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Biologia Vegetal na escola fundamental e média. Elaboração de projetos, textos e relatórios em Biologia Vegetal.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT285', 'BT485', 'BV481', 'BV581'],
			color: '#B47874',
			obligatory: true
		},
		'BT205': {
			code: 'BT205',
			name: 'Biogeografia',
			ementa: 'Biogeografia: histórico e bases teóricas. Geologia da América do Sul e influência na distribuição de plantas. Correntes atmosféricas e marítimas e influência sobre o clima. Flutuações climáticas históricas. Pressões ecológicas que influenciam a distribuição de espécies. Biogeografia insular. Biomas e regionalização da biota. Distribuição individual das espécies . Biodiversidade e gradientes de distribuição. Especiação, extinção e adaptação radiativa. Biogeografia molecular. Filogeografia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#9AD940',
			obligatory: true
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#72D940',
			obligatory: true
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional. Trabalho de campo orientado para a avaliação dos componentes da prática educativa a partir de contextos nos quais ela se desenvolve. Elaboração de projetos e propostas que ampliem as alternativas de intervenção em ações pedagógicas coletivas, estabelecidas em parceria com os profissionais que participam da formação do professor nos variados campos de estágio.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#C240D9',
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
		'BL031': {
			code: 'BL031',
			name: 'Metodologia e Prática de Ensino em Biologia IV: Doenças Infecciosas',
			ementa: 'Planejamento, elaboração, aplicação, avaliação de atividades e programas para o ensino de Microbiologia e Parasitologia com ênfase em patógenos humanos, e Imunologia com ênfase nos mecanismos de defesa de humanos. Abordagem e elaboração de diferentes metodologias para o ensino desses temas da área de saúde no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B040',
			obligatory: true
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada. Condução de seminário e apresentação de relatório sobre tema relacionado à disciplina. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#D2D940',
			obligatory: true
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D975',
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
			color: '#6A40D9',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#C2D940',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#6AD940',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#82D940',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#BA40D9',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40B5D9',
			obligatory: false
		},
		'BD001': {
			code: 'BD001',
			name: 'Atividades Acadêmicos-Científicas I',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#7A40D9',
			obligatory: false
		},
		'BD002': {
			code: 'BD002',
			name: 'Atividades Acadêmico-Científicas II',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#5AD940',
			obligatory: false
		},
		'BD003': {
			code: 'BD003',
			name: 'Integralização de Atividades Acadêmico-Científicas III',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#D940BF',
			obligatory: false
		},
		'BD004': {
			code: 'BD004',
			name: 'Atividades Acadêmico-Científicas IV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#AA40D9',
			obligatory: false
		},
		'BD005': {
			code: 'BD005',
			name: 'Atividades Acadêmico-Científicas V',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#407DD9',
			obligatory: false
		},
		'BD006': {
			code: 'BD006',
			name: 'Atividades Acadêmico-Científicas VI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#D9CF40',
			obligatory: false
		},
		'BD007': {
			code: 'BD007',
			name: 'Atividades Acadêmico-Científicas VII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#40D9AD',
			obligatory: false
		},
		'BD008': {
			code: 'BD008',
			name: 'Atividades Acadêmico-Científicas VIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D9C740',
			obligatory: false
		},
		'BD009': {
			code: 'BD009',
			name: 'Atividades Acadêmico-Científicas IX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#40D945',
			obligatory: false
		},
		'BD010': {
			code: 'BD010',
			name: 'Atividades Acadêmico-Científicas X',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#92D940',
			obligatory: false
		},
		'BD011': {
			code: 'BD011',
			name: 'Atividades Acadêmico-Científicas XI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#40C5D9',
			obligatory: false
		},
		'BD012': {
			code: 'BD012',
			name: 'Atividades Acadêmico-Científicas XII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#4065D9',
			obligatory: false
		},
		'BD013': {
			code: 'BD013',
			name: 'Atividades Acadêmico-Científicas XIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#D9BF40',
			obligatory: false
		},
		'BD014': {
			code: 'BD014',
			name: 'Atividades Acadêmico-Científicas XIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#40D9B5',
			obligatory: false
		},
		'BD015': {
			code: 'BD015',
			name: 'Atividades Acadêmico-Científicas XV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#4240D9',
			obligatory: false
		},
		'BD016': {
			code: 'BD016',
			name: 'Atividades Acadêmico-Científicas XVI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D99840',
			obligatory: false
		},
		'BD017': {
			code: 'BD017',
			name: 'Atividades Acadêmico-Científicas XVII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#40D985',
			obligatory: false
		},
		'BD018': {
			code: 'BD018',
			name: 'Atividades Acadêmico-Científicas XVIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#405DD9',
			obligatory: false
		},
		'BD019': {
			code: 'BD019',
			name: 'Atividades Acadêmico-Científicas XIX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:1, D:0, HS:1, SL:0, C:1},
			requisitos: ['AA200'],
			color: '#D96040',
			obligatory: false
		},
		'BD020': {
			code: 'BD020',
			name: 'Atividades Acadêmico-Científicas XX',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#9240D9',
			obligatory: false
		},
		'BD021': {
			code: 'BD021',
			name: 'Atividades Acadêmico-Científicas XXI',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#D940A8',
			obligatory: false
		},
		'BD022': {
			code: 'BD022',
			name: 'Atividades Acadêmico-Científicas XXII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D95D',
			obligatory: false
		},
		'BD023': {
			code: 'BD023',
			name: 'Atividades Acadêmico-Científicas XXIII',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#5240D9',
			obligatory: false
		},
		'BD024': {
			code: 'BD024',
			name: 'Atividades Acadêmico-Científicas XXIV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:6, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200'],
			color: '#40A5D9',
			obligatory: false
		},
		'BD025': {
			code: 'BD025',
			name: 'Atividades Acadêmico-Científicas XXV',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA200'],
			color: '#4045D9',
			obligatory: false
		},
		'BD026': {
			code: 'BD026',
			name: 'Atividades Acadêmico-Científicas XXVI',
			ementa: 'Atividades acadêmico-científcas: participação do aluno em atividades de cunho acadêmico (científicas, didáticas e/ou de extensão) e de cunho cultural.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:12, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#D940CF',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D240D9',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B240D9',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#CAD940',
			obligatory: false
		},
		'BE501': {
			code: 'BE501',
			name: 'Iniciação Científica em Ecologia Animal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#52D940',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#406DD9',
			obligatory: false
		},
		'BE601': {
			code: 'BE601',
			name: 'Iniciação Científica em Ecologia Animal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#A2D940',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D9A5',
			obligatory: false
		},
		'BF501': {
			code: 'BF501',
			name: 'Iniciação Científica em Fisiologia Humana I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D98D',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#7240D9',
			obligatory: false
		},
		'BF601': {
			code: 'BF601',
			name: 'Iniciação Científica em Fisiologia Humana II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94060',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40CDD9',
			obligatory: false
		},
		'BG501': {
			code: 'BG501',
			name: 'Iniciação Científica em Evolução I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#62D940',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#BAD940',
			obligatory: false
		},
		'BG601': {
			code: 'BG601',
			name: 'Iniciação Científica em Evolução II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94080',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Embriologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D99040',
			obligatory: false
		},
		'BH502': {
			code: 'BH502',
			name: 'Iniciação Científica em Biologia Tecidual I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D94D',
			obligatory: false
		},
		'BH511': {
			code: 'BH511',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D99D',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#409DD9',
			obligatory: false
		},
		'BH602': {
			code: 'BH602',
			name: 'Iniciação Científica em Biologia Tecidual II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94090',
			obligatory: false
		},
		'BH611': {
			code: 'BH611',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D96D',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4095D9',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D940B7',
			obligatory: false
		},
		'BL500': {
			code: 'BL500',
			name: 'Iniciação Científica em Ensino I',
			ementa: 'Introdução à pesquisa qualitativa do campo das ciências humanas. Pesquisa e estudos em epistemologia da ciência aplicados ao ensino de ciências e biologia. Coleta de dados, metodologias de pesquisa e abordagem científica, análise dos resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#6240D9',
			obligatory: false
		},
		'BL601': {
			code: 'BL601',
			name: 'Iniciação Científica em Ensino II',
			ementa: 'Introdução à pesquisa qualitativa do campo das ciências humanas. Pesquisa e estudos em epistemologia da ciência aplicados ao ensino de ciências e biologia. Coleta de dados, metodologias de pesquisa e abordagem científica, análise dos resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94040',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#5A40D9',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D965',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#8240D9',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D9D5',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D94058',
			obligatory: false
		},
		'BT501': {
			code: 'BT501',
			name: 'Iniciação Científica em Ecologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D96840',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D940A0',
			obligatory: false
		},
		'BT601': {
			code: 'BT601',
			name: 'Iniciação Científica em Ecologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#D97040',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40BDD9',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4A40D9',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#40D9C5',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA430'],
			color: '#4075D9',
			obligatory: false
		},
		'EL201': {
			code: 'EL201',
			name: 'Iniciação Científica em Educação II',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#D9A040',
			obligatory: false
		},
		'EL505': {
			code: 'EL505',
			name: 'Iniciação Científica em Ensino de Ciências I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#CA40D9',
			obligatory: false
		},
		'EL506': {
			code: 'EL506',
			name: 'Iniciação Científica em Ensino de Biologia I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D9D740',
			obligatory: false
		},
		'EL605': {
			code: 'EL605',
			name: 'Iniciação Científica em Ensino de Ciências II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4AD940',
			obligatory: false
		},
		'EL606': {
			code: 'EL606',
			name: 'Iniciação Científica em Ensino de Biologia II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D9B740',
			obligatory: false
		}
	}
};

export default catalogue;
