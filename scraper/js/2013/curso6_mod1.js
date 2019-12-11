const catalogue = {
	totalCredits: 260,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BE180', 'BT181', 'BC182', 'BG180', 'BZ183', 'EL212', 'F_107', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BB281', 'BC282', 'EL683', 'BH282', 'BG282', 'BZ280', 'ELET02', 'BA281', 'BT281']
		},
		'sem-3': {
			id: '3',
			subjects: ['BF381', 'BI381', 'ELET03', 'BG380', 'BT382', 'BZ380', 'EL511', 'BM382', 'BB381']
		},
		'sem-4': {
			id: '4',
			subjects: ['BE480', 'BF481', 'BG480', 'BH420', 'BT482', 'BV481', 'GM450', 'MS380']
		},
		'sem-5': {
			id: '5',
			subjects: ['BT201', 'BD520', 'BH520', 'ELET05', 'BV581', 'BP582', 'ME480']
		},
		'sem-6': {
			id: '6',
			subjects: ['GM280', 'ELET06', 'BT200', 'BZ480', 'BD621']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL876', 'EL774', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BT681', 'EL885', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 40,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA500', 'BB500', 'BC500', 'BD500', 'BE500', 'BE501', 'BF500', 'BF501', 'BG500', 'BG501', 'BH501', 'BH502', 'BH511', 'BI500', 'BM500', 'BP500', 'BT500', 'BT501', 'BV500', 'BZ500', 'EL201', 'EL505', 'EL506'],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['BA600', 'BB600', 'BC600', 'BD600', 'BE600', 'BE601', 'BF600', 'BF601', 'BG600', 'BG601', 'BH601', 'BH602', 'BH611', 'BI600', 'BM600', 'BP600', 'BT600', 'BT601', 'BV600', 'BZ600', 'EL605', 'EL606'],
		},
		'elet-4': {
			credits: 20,
			hasRestrictions: true,
			subjects: ['BA692', 'BB583', 'BC694', 'BC696', 'BD692', 'BD694', 'BD792', 'BD794', 'BE694', 'BF694', 'BG594', 'BH694', 'BM694', 'BP694', 'BT596', 'BV694', 'BZ594', 'GM082'],
		},
		'elet-5': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['EL110', 'EL142', 'EL210', 'EL485', 'EP108'],
		},
	},

	subjects: {
		'BC182': {
			code: 'BC182',
			name: 'Biologia Celular I',
			ementa: 'Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares (Biomembranas, núcleo, nucléolo, cromatina, cromossomos, ribossomos e síntese proteica, Retículo Endoplasmático, Complexo de Golgi, Sistema Endossômico-lisossômico, mitocôndrias cloroplastos, citoesqueleto e junções Celulares).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98C46',
			obligatory: true
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Conceitos básicos de sistemas ecológicos. Enfoque teórico-prático de situações reais envolvendo observação, métodos e interpretação de dados ecológicos. (Com excursões obrigatórias).',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464DB9',
			obligatory: true
		},
		'BG180': {
			code: 'BG180',
			name: 'Introdução à Evolução',
			ementa: 'Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4669B9',
			obligatory: true
		},
		'BT181': {
			code: 'BT181',
			name: 'Ecologia no Campo I',
			ementa: 'Treinamento em observações e experimentação no campo, com excursões sobre populações e comunidades vegetais e animais, em diferentes ambiente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#70B946',
			obligatory: true
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Diversibilidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9464D',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#A7B946',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Forças e máquinas simples, locomoção, dinâmica, fluidos, sólidos e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B969',
			obligatory: true
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Fórmulas e equações químicas. Estequiometria. Energia livre. Equilíbrio químico em solução. Ligação química. Ácidos e bases. Funções da química orgânica. Experiências ilustrando o método científico, o conceito de mol, ligação química, equílibrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#9A46B9',
			obligatory: true
		},
		'BA281': {
			code: 'BA281',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A146B9',
			obligatory: true
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AE',
			obligatory: true
		},
		'BC282': {
			code: 'BC282',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, movimentação celular, mitose e ciclo celular, controle do ciclo celular, diferenciação celular, células-tronco, morte celular, sinalização celular, câncer, meiose.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC182'],
			color: '#B98C46',
			obligatory: true
		},
		'BG282': {
			code: 'BG282',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG180'],
			color: '#4669B9',
			obligatory: true
		},
		'BH282': {
			code: 'BH282',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz extracelular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: '#B98C46',
			obligatory: true
		},
		'BT281': {
			code: 'BT281',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação do Reino Vegetal e Diversidade de organismos. Evolução do sistema reprodutivo. Ciclos de vida. Morfologia dos principais grupos de criptógamas. Organização do talo. Evolução do sistema vascular. Gimnospermas. Evolução da semente. Introdução às técnicas de coleta e de preparação de amostras para Coleções Biológicas. Noções de avaliação da biodiversidade, levantamento e mapeamento de criptógamas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97E46',
			obligatory: true
		},
		'BZ280': {
			code: 'BZ280',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Origem, evolução e diversidade dos Invertebrados Metazoários, embasando-se em propostas de filogenias. Estudo comparativo da anatomia dos diferentes grupos, relacionando a aspectos da biologia, como adaptações aos ambientes em que vivem suas espécies, incluindo mecanismos de locomoção, alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4654B9',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94693',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#54B946',
			obligatory: true
		},
		'BF381': {
			code: 'BF381',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B546',
			obligatory: true
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG282'],
			color: '#4669B9',
			obligatory: true
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componenetes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases molecular celular do reconhecimento de antígenos pelos línfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas que mantêm a integridade e a homeostasia do hospedeiro.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC282'],
			color: '#B98C46',
			obligatory: true
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus. Metabolismo de crescimento microbiano. Controle dos microrganismos. Conceito de ecologia microbiana. Métodos de visualização de bactérias. Crescimento bacteriano \"in vitro\".',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6946B9',
			obligatory: true
		},
		'BT382': {
			code: 'BT382',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angiospermas e estratégias reprodutivas. Aspectos gerais da morfologia de angiospermas: raiz, caule, folhas, frutos e sementes. Aspectos gerais de citologia, histologia e anatomia dos órgãos vegetativos de Angiospermas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4685B9',
			obligatory: true
		},
		'BZ380': {
			code: 'BZ380',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origens evolutivas, diversidades, forma, função e organização dos Ecdysozoa e Deuterostomia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BZ280'],
			color: '#4654B9',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B946A1',
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
			ementa: 'A ecologia e seu domínio, organismos: ecofisiologia. Populações: dinâmica e interações. Comunidades: organização espacial, temporal e funcional. Ecossistemas: conservação. Aplicação de conceitos ecológicos em problemas atuais. Excursão obrigatória (ecossistemas terrestres e aquáticos).',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BE180', 'BT181'],
			color: '#5B8380',
			obligatory: true
		},
		'BF481': {
			code: 'BF481',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF381'],
			color: '#B9B546',
			obligatory: true
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: '#4669B9',
			obligatory: true
		},
		'BH420': {
			code: 'BH420',
			name: 'Embriologia Comparada',
			ementa: 'Gametogênese, fertilização e início da embriogênese. Gastrulação e formação dos primórdios de órgãos. Embriogênese e organogênese de drosófila, equinodermos, anfíbios, aves e mamíferos. Tópicos de embriologia experimental. Teratologia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH282'],
			color: '#B98C46',
			obligatory: true
		},
		'BT482': {
			code: 'BT482',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas: regras básicas de nomenclatura botânica; coleta e preservação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Noções de biossistemática e de sistemas de reprodução em angiospermas. Noções sobre biogeografia e sobre a aplicação do conhecimento taxonômico vegetal em conservação da biodiversidade, pesquisa e produção de bens (alimentos, fármacos, combustível renovável, etc), paisagismo e arborização urbana.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BT382'],
			color: '#4685B9',
			obligatory: true
		},
		'BV481': {
			code: 'BV481',
			name: 'Fisiologia Vegetal Básica: Metabolismo',
			ementa: 'Relações hídricas, nutrição mineral, assimilação do enxofre e do nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9468C',
			obligatory: true
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9AE46',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A1B9',
			obligatory: true
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. O Cógigo de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos de má prática profissional. Julgamento simulado do CRBio. Bem comum; proteção do meio ambiente; melhoria da qualidade de vida - na legislação brasileira e nas legislações internacionais dos direitos humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4677B9',
			obligatory: true
		},
		'BH520': {
			code: 'BH520',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento animal e vegetal. Controle genético e molecular da diferenciação celular. Polaridade e informação posicional. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG380', 'BH420'],
			color: '#807B80',
			obligatory: true
		},
		'BP582': {
			code: 'BP582',
			name: 'Parasitologia Animal I',
			ementa: 'Conceito de parasitismo. Relação parasito-hospedeiro. Ciclos biológicos. Exemplos de protozoários, helmintos e artrópodes parasitas. Vetores. Epidemiologia das principais parasitoses de interesse médico.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B977',
			obligatory: true
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: '1. Biogeografia: conceito, bases teóricas, a perspectiva ecológica e histórica. 2. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente fisico; os limites da distribuição das espécies. 3. Biosfera, fluxos de energia e ciclos biogeoquímicos. 4. Métodos e ferramentas para estudos biogeográficos. 5. Fitogeografia do Brasil. 6. Biogeografia e Mudanças Climáticas. 7. Biomas do mundo.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B96946',
			obligatory: true
		},
		'BV581': {
			code: 'BV581',
			name: 'Fisiologia Vegetal Básica: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BV481'],
			color: '#B9468C',
			obligatory: true
		},
		'ME480': {
			code: 'ME480',
			name: 'Estatística para Biologistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#46A1B9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
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
			color: '#46B993',
			obligatory: true
		},
		'BT200': {
			code: 'BT200',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação das principais correntes e idéias da filosofia sobre as ciências naturais, especialmente a Biologia, e discussão de suas principais implicações sobre a maneira como o conhecimento biológico foi considerado ao longo da história.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B98546',
			obligatory: true
		},
		'BZ480': {
			code: 'BZ480',
			name: 'Zoologia de Vertebrados',
			ementa: 'Introdução ao estudo de vertebrados: noções sobre variedade de formas, funções, ambiente e modos de vida de peixes, anfíbios, répteis, aves e mamíferos. (Excursão obrigatória).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A1B946',
			obligatory: true
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B5B9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#46B985',
			obligatory: true
		},
		'EL876': {
			code: 'EL876',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#B94670',
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
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#7746B9',
			obligatory: true
		},
		'EL885': {
			code: 'EL885',
			name: 'Estágio Supervisionado III',
			ementa: 'A partir de observação, participação e análise das realidades das instituições escolares, dimensionar o papel da educação científica, com base em referênciais que inter-relacionam os conceitos de ciência e educação, dentre outros. Escolha de elementos do currículo idealizado/praticado para o ensino de ciências e sua análise e discussão em episódios de estágio supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:9, D:0, HS:13, SL:4, C:13},
			requisitos: '',
			color: '#B9467E',
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
			requisitos: ['AA430'],
			color: '#46B98C',
			obligatory: false
		},
		'BA600': {
			code: 'BA600',
			name: 'Iniciação Científica em Anatomia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Anatomia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B9465B',
			obligatory: false
		},
		'BA692': {
			code: 'BA692',
			name: 'Ensino de Biologia 1: Anatomia',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Anatomia. Abordagem e elaboração de diferentes metodologias para o ensino de Anatomia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar, pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46A7B9',
			obligatory: false
		},
		'BB500': {
			code: 'BB500',
			name: 'Iniciação Científica em Bioquímica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B97046',
			obligatory: false
		},
		'BB583': {
			code: 'BB583',
			name: 'Informática Aplicada ao Ensino de Biologia',
			ementa: 'Utilização de computadores para o desenvolvimento de material didático na área de biologia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#B5B946',
			obligatory: false
		},
		'BB600': {
			code: 'BB600',
			name: 'Iniciação Científica em Bioquímica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Bioquímica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#469AB9',
			obligatory: false
		},
		'BC500': {
			code: 'BC500',
			name: 'Iniciação Científica em Biologia Celular I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B94D',
			obligatory: false
		},
		'BC600': {
			code: 'BC600',
			name: 'Iniciação Científica em Biologia Celular II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Celular. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#85B946',
			obligatory: false
		},
		'BC694': {
			code: 'BC694',
			name: 'Preparo de Material Didático em Biologia Celular',
			ementa: 'Técnicas para a preparação e execução de aulas práticas para o ensino de Biologia Celular, utilizando a microscopia de luz.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#7046B9',
			obligatory: false
		},
		'BC696': {
			code: 'BC696',
			name: 'Ensino de Biologia II: Biologia Celular',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Biologia Celular. Abordagem e elaboração de diferentes metodologia para o ensino de Biologia Celular. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B9469A',
			obligatory: false
		},
		'BD500': {
			code: 'BD500',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#8546B9',
			obligatory: false
		},
		'BD600': {
			code: 'BD600',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B97746',
			obligatory: false
		},
		'BD692': {
			code: 'BD692',
			name: 'Temas Transversais no Ensino de Biologia I',
			ementa: 'Temas transversais no ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B9A146',
			obligatory: false
		},
		'BD694': {
			code: 'BD694',
			name: 'Temas Transversais no Ensino de Biologia II',
			ementa: 'Temas transversais em ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#AE46B9',
			obligatory: false
		},
		'BD792': {
			code: 'BD792',
			name: 'Temas Transversais no Ensino de Biologia III',
			ementa: 'Temas transversais no ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#7EB946',
			obligatory: false
		},
		'BD794': {
			code: 'BD794',
			name: 'Temas Transversais no Ensino de Biologia IV',
			ementa: 'Temas transversais no Ensino de Biologia.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B94654',
			obligatory: false
		},
		'BE500': {
			code: 'BE500',
			name: 'Iniciação Científica em Ecologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B95B',
			obligatory: false
		},
		'BE501': {
			code: 'BE501',
			name: 'Iniciação Científica em Ecologia Animal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#467EB9',
			obligatory: false
		},
		'BE600': {
			code: 'BE600',
			name: 'Iniciação Científica em Ecologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46AEB9',
			obligatory: false
		},
		'BE601': {
			code: 'BE601',
			name: 'Iniciação Científica em Ecologia Animal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Animal. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#465BB9',
			obligatory: false
		},
		'BE694': {
			code: 'BE694',
			name: 'Ensino de Biologia III: Ecologia - o Ambiente Terrestre',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Ecologia e o ambiente terrestre. Abordagem e elaboração de diferentes metodologias para o ensino de Ecologia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46B97E',
			obligatory: false
		},
		'BF500': {
			code: 'BF500',
			name: 'Iniciação Científica em Fisiologia e Biofísica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94685',
			obligatory: false
		},
		'BF501': {
			code: 'BF501',
			name: 'Iniciação Científica em Fisiologia Humana I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B946AE',
			obligatory: false
		},
		'BF600': {
			code: 'BF600',
			name: 'Iniciação Científica em Fisiologia e Biofísica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia e Biofísica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4662B9',
			obligatory: false
		},
		'BF601': {
			code: 'BF601',
			name: 'Iniciação Científica em Fisiologia Humana II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Humana. Teorias e hipóteses, levantamento de dados, execução de técnicas e protocolos, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94D46',
			obligatory: false
		},
		'BF694': {
			code: 'BF694',
			name: 'Ensino de Biologia IV: Fisiologia Humana',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Fisiologia Humana. Abordagem e elaboração de diferentes metodologias para o ensino de Fisiologia Humana. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B94662',
			obligatory: false
		},
		'BG500': {
			code: 'BG500',
			name: 'Iniciação Científica em Genética I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética e Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#AEB946',
			obligatory: false
		},
		'BG501': {
			code: 'BG501',
			name: 'Iniciação Científica em Evolução I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B96246',
			obligatory: false
		},
		'BG594': {
			code: 'BG594',
			name: 'Ensino de Biologia V: Genética e Evolução',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Genética e Evolução. Abordagem e elaboração de diferentes metodologias par o ensino de Genétioca e Evolução. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#5B46B9',
			obligatory: false
		},
		'BG600': {
			code: 'BG600',
			name: 'Iniciação Científica em Genética II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Genética. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#5BB946',
			obligatory: false
		},
		'BG601': {
			code: 'BG601',
			name: 'Iniciação Científica em Evolução II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Evolução. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#9346B9',
			obligatory: false
		},
		'BH501': {
			code: 'BH501',
			name: 'Iniciação Científica em Embriologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Embriologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94669',
			obligatory: false
		},
		'BH502': {
			code: 'BH502',
			name: 'Iniciação Científica em Biologia Tecidual I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B9B5',
			obligatory: false
		},
		'BH511': {
			code: 'BH511',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4670B9',
			obligatory: false
		},
		'BH601': {
			code: 'BH601',
			name: 'Iniciação Científica em Embriologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#77B946',
			obligatory: false
		},
		'BH602': {
			code: 'BH602',
			name: 'Iniciação Científica em Biologia Tecidual II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia Tecidual. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B946B5',
			obligatory: false
		},
		'BH611': {
			code: 'BH611',
			name: 'Iniciação Científica em Biologia do Desenvolvimento I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Biologia do Desenvolvimento. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#4DB946',
			obligatory: false
		},
		'BH694': {
			code: 'BH694',
			name: 'Ensino de Biologia VI: Biologia Tecidual e do Desenvolvimento',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Histologia. Abordagens e elaboração de diferentes metodologias para o ensino de Histologia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BH282', 'BH520'],
			color: '#9D8463',
			obligatory: false
		},
		'BI500': {
			code: 'BI500',
			name: 'Iniciação Científica em Imunologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B9A1',
			obligatory: false
		},
		'BI600': {
			code: 'BI600',
			name: 'Iniciação Científica em Imunologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Imunologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B962',
			obligatory: false
		},
		'BM500': {
			code: 'BM500',
			name: 'Iniciação Científica em Microbiologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94646',
			obligatory: false
		},
		'BM600': {
			code: 'BM600',
			name: 'Iniciação Científica em Microbiologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Microbiologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B99346',
			obligatory: false
		},
		'BM694': {
			code: 'BM694',
			name: 'Ensino de Biologia VII: Saúde e Doença, Contágio e Prevenção',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Microbiologia e Saúde Humana. Abordagem e elaboração de diferentes metodoloigas para o ensino de Microbiologia e Epidemiologia. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#9AB946',
			obligatory: false
		},
		'BP500': {
			code: 'BP500',
			name: 'Iniciação Científica em Parasitologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#6246B9',
			obligatory: false
		},
		'BP600': {
			code: 'BP600',
			name: 'Iniciação Científica em Parasitologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Parasitologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B9A746',
			obligatory: false
		},
		'BP694': {
			code: 'BP694',
			name: 'Ensino de Biologia VIII: Parasitologia',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Parasitologia. Abordagem e elaboração de diferentes metodologias para o ensino de Parasitologia. Articulação temática e integrada de temas contemporâneos para o ensino de Biologia. Criação de conteúdos de formas de ensinar pautdados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B546B9',
			obligatory: false
		},
		'BT500': {
			code: 'BT500',
			name: 'Iniciação Científica em Botânica I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#62B946',
			obligatory: false
		},
		'BT501': {
			code: 'BT501',
			name: 'Iniciação Científica em Ecologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B94677',
			obligatory: false
		},
		'BT596': {
			code: 'BT596',
			name: 'Ensino de Biologia IX: Biologia Vegetal',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividade e programas para o ensino de Botânica e Ecologia Vegetal. Abordagem e elaboração de diferentes metodologias para o ensino de Botância e Ecologia Vegetal. Articulação temática e integrada de temas contemporâneos para o ensino de Biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B99A46',
			obligatory: false
		},
		'BT600': {
			code: 'BT600',
			name: 'Iniciação Científica em Botânica II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Botânica II. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B99A',
			obligatory: false
		},
		'BT601': {
			code: 'BT601',
			name: 'Iniciação Científica em Ecologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Ecologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#B95446',
			obligatory: false
		},
		'BV500': {
			code: 'BV500',
			name: 'Iniciação Científica em Fisiologia Vegetal I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B954',
			obligatory: false
		},
		'BV600': {
			code: 'BV600',
			name: 'Iniciação Científica em Fisiologia Vegetal II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Fisiologia Vegetal. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#468CB9',
			obligatory: false
		},
		'BV694': {
			code: 'BV694',
			name: 'Ensino de Biologia X: Fisiologia Vegetal',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Fisiologia Vegetal. Abordagem e elaboração de diferentes metodologias para o ensino de Fisiologia Vegetal. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: false
		},
		'BZ500': {
			code: 'BZ500',
			name: 'Iniciação Científica em Zoologia I',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#46B970',
			obligatory: false
		},
		'BZ594': {
			code: 'BZ594',
			name: 'Ensino de Biologia XI: Fauna e Ambiente',
			ementa: 'Planejamento, elaboração, aplicação e avaliação de atividades e programas para o ensino de Zoologia de Invertebrados e Vertebrados. Abordagem e elaboração de diferentes metodologias para o ensino de Zoologia de Invertebrados e Vertebrados. Articulação temática e integrada de temas contemporâneos para o ensino de biologia. Criação de conteúdos e formas de ensinar pautados na ideia de transversalidade no currículo.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#46B9A7',
			obligatory: false
		},
		'BZ600': {
			code: 'BZ600',
			name: 'Iniciação Científica em Zoologia II',
			ementa: 'Introdução à abordagem científica na solução de problemas relacionados aos estudos em Zoologia. Teorias e hipóteses, levantamento de dados, execução de protocolos e técnicas, análise de resultados. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA430'],
			color: '#8C46B9',
			obligatory: false
		},
		'EL110': {
			code: 'EL110',
			name: 'Tópicos Especiais em Educação I',
			ementa: 'A ementa desta disciplina deverá ser definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5446B9',
			obligatory: false
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'Programa a ser definido semestralmente pelo DECISAE sobre tópicos especiais em Ciências Sociais e Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#8CB946',
			obligatory: false
		},
		'EL201': {
			code: 'EL201',
			name: 'Iniciação Científica em Educação II',
			ementa: 'Introdução às atividades de pesquisa em educação sob a supervisão de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#93B946',
			obligatory: false
		},
		'EL210': {
			code: 'EL210',
			name: 'Tópicos Especiais em Educação II',
			ementa: 'A ementa desta disciplina deverá ser definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4D46B9',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Estudo das transformações históricas da sociedade e da educação brasileira, com ênfase nas principais concepções filosóficas presentes no pensamento educacional brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		},
		'EL505': {
			code: 'EL505',
			name: 'Iniciação Científica em Ensino de Ciências I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#7E46B9',
			obligatory: false
		},
		'EL506': {
			code: 'EL506',
			name: 'Iniciação Científica em Ensino de Biologia I',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B946A7',
			obligatory: false
		},
		'EL605': {
			code: 'EL605',
			name: 'Iniciação Científica em Ensino de Ciências II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Ciências. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B95B46',
			obligatory: false
		},
		'EL606': {
			code: 'EL606',
			name: 'Iniciação Científica em Ensino de Biologia II',
			ementa: 'Introdução à abordagem científica de problemas relacionados aos estudos em Ensino de Biologia. Elaboração de relatórios de pesquisa e de outras formas de divulgação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#69B946',
			obligatory: false
		},
		'EP108': {
			code: 'EP108',
			name: 'Pesquisa Pedagógica I',
			ementa: 'Espaço de introdução do aluno às linguagens de acesso às diferentes fontes de produção da pesquisa educacional: biblioteca, meios informatizados, leitura e produção de textos e artigos com diferentes abordagens. Discussão do profissional da educação frente aos desafios da realidade atual no campo da pesquisa educacional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4646B9',
			obligatory: false
		},
		'GM082': {
			code: 'GM082',
			name: 'Geociências para Ensino Fundamental e Médio',
			ementa: 'Propostas de ensino de conteúdos de Geociências para as disciplinas de Ciências, Biologia e Geografia no ensino Fundamental e Médio. Adequação e inadequação de conteúdos ensinados e de métodos e técnicas aplicados noensino de Geociências para esses níveis de escolaridade. Planejamento, elaboração, aplicação e avaliação de atividades voltadas ao ensino de Geociências.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#A746B9',
			obligatory: false
		}
	}
};

export default catalogue;
