const catalogue = {
	totalCredits: 262,
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

	subjects: {
		'BC183': {
			code: 'BC183',
			name: 'Biologia Celular I',
			ementa: 'Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares (Biomembranas, núcleo, nucléolo, cromatina, cromossomos, ribossomos e síntese proteica, Retículo Endoplasmático, Complexo de Golgi, Sistema Endossômico-lisossômico, mitocôndrias cloroplastos, citoesqueleto e junções Celulares.)',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D986'
		},
		'BG181': {
			code: 'BG181',
			name: 'Introdução à Evolução',
			ementa: 'Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#CDD940'
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Diversibilidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96F40'
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5740D9'
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Fórmulas e equações químicas. Estequiometria. Energia livre. Equilíbrio químico em solução. Ligação química. Ácidos e bases. Funções da química orgânica. Experiências ilustrando o método científico, o conceito de mol, ligação química, equílibrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94057'
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D96F'
		},
		'BC283': {
			code: 'BC283',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, movimentação celular, mitose e ciclo celular, controle do ciclo celular, diferenciação celular, células-tronco, morte celular, sinalização celular, câncer, meiose.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC183'],
			color: ''
		},
		'BT282': {
			code: 'BT282',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Introdução às técnicas de coleta e de preparação de amostras para Coleções Biológicas. Noções de avaliação da biodiversidade, levantamento e mapeamento de criptógamas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98640'
		},
		'BT283': {
			code: 'BT283',
			name: 'Botânica no Campo I',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre sistemática de Criptógamas e Gimnospermas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D94040'
		},
		'BZ281': {
			code: 'BZ281',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Origem, evolução e diversidade dos Invertebrados Metazoários, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como adaptações aos ambientes em que vivem suas espécies, incluindo mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9E40D9'
		},
		'BZ283': {
			code: 'BZ283',
			name: 'Zoologia de Invertebrados no Campo I',
			ementa: 'Atividades de excursão.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D940B5'
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9CD'
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9ED940'
		},
		'BT383': {
			code: 'BT383',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angiospermas e estratégias reprodutivas. Aspectos gerais da morfologia de angiospermas: raiz, caule, folhas, frutos e sementes. Aspectos gerais de citologia, histologia e anatomia dos órgãos vegetativos de Angiospermas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9CD40'
		},
		'BT384': {
			code: 'BT384',
			name: 'Botânica no Campo II',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre morfologia de Angiospermas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D940CD'
		},
		'BZ382': {
			code: 'BZ382',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origem evolutiva, forma, função e diversidade de artrópodes, lofoforados, equinodermas, protocordados e cordados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ281'],
			color: ''
		},
		'BZ383': {
			code: 'BZ383',
			name: 'Zoologia de Invertebrados no Campo II',
			ementa: 'Excursões no campo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#4040D9'
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#57D940'
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'BA480': {
			code: 'BA480',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B5'
		},
		'BF483': {
			code: 'BF483',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6FD940'
		},
		'BG481': {
			code: 'BG481',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG181'],
			color: ''
		},
		'BH482': {
			code: 'BH482',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz celular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC283'],
			color: ''
		},
		'BT483': {
			code: 'BT483',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas: regras básicas de nomenclatura botânica; coleta e preservação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Noções de biossistemática e de sistemas de reprodução em angiospermas. Noções sobre biogeografia e sobre a aplicação do conhecimento taxonômico vegetal em conservação da biodiversidade, pesquisa e produção de bens (alimentos, fármacos, combustível renovável, etc), pasiagismo e arborização humana.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4057D9'
		},
		'BT484': {
			code: 'BT484',
			name: 'Botânica no Campo III',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre sistemática e evolução de Angiospermas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D9B540'
		},
		'ME480': {
			code: 'ME480',
			name: 'Estatística para Biologistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: ''
		},
		'BE581': {
			code: 'BE581',
			name: 'Ecologia de Organismos e Populações',
			ementa: 'O que é ecologia. Adaptação e Evolução. O ambiente físico. Adaptações de plantas e animais ao ambiente físico. Histórias de vida. Populações: propriedades, crescimento, competição intraespecífica, metapopulações, abundância e regulação populacional. Interações entre espécies: competição interespecífica, predação, parasitismo, mutualismo e decompositores. Ecologia comportamental: seleção sexual, sistemas de acasalamento e comportamento social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B540D9'
		},
		'BF583': {
			code: 'BF583',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF483'],
			color: ''
		},
		'BG520': {
			code: 'BG520',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em micro-organismos. DNA recombinante.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG481'],
			color: ''
		},
		'BI520': {
			code: 'BI520',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases molecular e celular do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas e que mantêm a integridade e a homeostasia do hospedeiro.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB281', 'BB381', 'BC183', 'BC283'],
			color: ''
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Forças e máquinas simples, locomoção, dinâmica, fluidos, sólidos e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6F40D9'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'BE681': {
			code: 'BE681',
			name: 'Ecologia de Comunidades e Ecossistemas',
			ementa: 'Estrutura e dinâmica de comunidades. Fatores influenciando a estrutura de comunidades. Teias tróficas. Ecologia de paisagens. Biogeografia. Ecologia de ecossistemas: fluxo de energia e matéria através de ecossistemas. Padrões de diversidade. Ecologia humana: crescimento populacional, uso de recursos, sustentabilidade, perda de habitat, biodiversidade e conservação, mudanças climáticas globais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BE581'],
			color: ''
		},
		'BG680': {
			code: 'BG680',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG520'],
			color: ''
		},
		'BH620': {
			code: 'BH620',
			name: 'Embriologia Comparada',
			ementa: 'Gametogênese, fertilização e início da embriogênese. Gastrulação e formação dos primórdios de órgãos. Embriogênese e organogênese de drosófila, equinodermos, anfíbios, aves e mamíferos. Tópicos de embriologia experimental. Teratologia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH482'],
			color: ''
		},
		'BV620': {
			code: 'BV620',
			name: 'Fisiologia Vegetal Geral: Metabolismo',
			ementa: 'Relações hídricas, nutrição mineral, assimilação do enxofre e do nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4086D9'
		},
		'BZ681': {
			code: 'BZ681',
			name: 'Zoologia de Vertebrados',
			ementa: 'Características gerais e diversidade das classes de vertebrados: peixes, anfíbios, répteis, aves e mamíferos. Onde e como vivem os vertebrados. Importância dos vertebrados. Prática ilustrativa da diversidade estrutural em cada classe, considerando situações de aprendizagem no Ensino Fundamental e Médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8640D9'
		},
		'BZ682': {
			code: 'BZ682',
			name: 'Zoologia de Vertebrados no Campo',
			ementa: 'Atividades de excursão.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#40CDD9'
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9406F'
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'BE682': {
			code: 'BE682',
			name: 'Prática em Ecologia de Organismos, Populações, Comunidades e Ecossistemas',
			ementa: 'Desenvolvimento de projetos de pesquisa de campo em Ecologia de Organismos, Populações, Comunidades ou Ecossistemas. Excursão de 7 dias.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE581', 'BE681'],
			color: ''
		},
		'BH780': {
			code: 'BH780',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento animal e vegetal. Controle genético e molecular da diferenciação celular. Polaridade e informação posicional. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG520', 'BH620'],
			color: ''
		},
		'BM720': {
			code: 'BM720',
			name: 'Microbiologia',
			ementa: 'Bactérias, fungos e vírus: estrutura e formas de organização. Metabolismo microbiano. Controle dos micro-organismos. Conceito de ecologia microbiana. Relações micro-organismos e seus hospedeiros. Relações vírus e seus hospedeiros. Métodos de visualização de bactérias e fungos. Crescimento bacteriano \"in vitro\".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95740'
		},
		'BV720': {
			code: 'BV720',
			name: 'Fisiologia Vegetal Geral: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D99E'
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9409E'
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:11},
			requisitos: '',
			color: ''
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. O Cógigo de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos de má prática profissional. Julgamento simulado do CRBio. Bem comum; proteção do meio ambiente; melhoria da qualidade de vida - na legislação brasileira e nas legislações internacionais dos direitos humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#406FD9'
		},
		'BP820': {
			code: 'BP820',
			name: 'Zooparasitologia',
			ementa: 'Estudos dos parasitas de interesse humano e de animais. Interações entre hospedeiro-parasito e o meio ambiente, ecologia e meio ambiente. Estudo de protozoários e helmintos de interesse animal e humano: ciclo de vida, transmissão, patogenia, epidemiologia, imunidade e profilaxia. Ectoparasitas e estudo dos principais artrópodes e moluscos veiculadores de parasitoses.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940'
		},
		'BT880': {
			code: 'BT880',
			name: 'Ecologia e Fitogeografia no Campo',
			ementa: 'Atividades de campo na disciplina de Ecologia e Fitogeografia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#D99E40'
		},
		'BT885': {
			code: 'BT885',
			name: 'Ecologia e Fitogeografia',
			ementa: 'Noções de ecologia global, ecologia vegetal e fitogeografia. Os grandes sistemas climáticos e pedogenéticos mundiais e a distribuição dos grandes biomas. Forma e funções da planta como expressão de adaptações evolutivas. Os grandes domínios fitogeográficos do Brasil.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#CD40D9'
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B5D940'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'BT200': {
			code: 'BT200',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação das principais correntes e idéias da filosofia sobre as ciências naturais, especialmente a Biologia, e discussão de suas principais implicações sobre a maneira como o conhecimento biológico foi considerado ao longo da história.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D957'
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#409ED9'
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#86D940'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#D94086'
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: '',
			color: '#40B5D9'
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
