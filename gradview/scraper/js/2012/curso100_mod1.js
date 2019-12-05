const catalogue = {
	totalCredits: 222,
	maxCreditsSem: 34,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CP100', 'CP101', 'NC101', 'NC102', 'SL100', 'SL101', 'SL104']
		},
		'sem-2': {
			id: '2',
			subjects: ['CP200', 'CP201', 'CP405', 'NC202', 'SL200', 'SL204', 'SL205']
		},
		'sem-3': {
			id: '3',
			subjects: ['CP301', 'CP303', 'CP304', 'CP404', 'NC100', 'SL303', 'SL400']
		},
		'sem-4': {
			id: '4',
			subjects: ['CP300', 'CP403', 'CP407', 'CP408', 'CP600', 'CP700', 'SL401']
		},
		'sem-5': {
			id: '5',
			subjects: ['CP401', 'CP501', 'CP502', 'CP503', 'NC200', 'NC400', 'SL500']
		},
		'sem-6': {
			id: '6',
			subjects: ['CP601', 'CP602', 'CP604', 'NC300', 'NC500', 'SL600', 'SL601', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CP701', 'CP702', 'CP703', 'CP704', 'CP705', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['CP800', 'CP802', 'CP803', 'CP804', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 20,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'CP100': {
			code: 'CP100',
			name: 'Educação Física e Esporte: Ciência e Profissão',
			ementa: 'Análise reflexiva sobre o conhecimento do processo histórico constitutivo das Ciências do Esporte, compreendendo-se os contextos socioculturais, econômicos e políticos geradores de demandas socioindividuais e interpretativas das produções teórico-metodológicas desta especialidade como ciência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40AAD9',
			obligatory: true
		},
		'CP101': {
			code: 'CP101',
			name: 'Fundamentos da Ginástica',
			ementa: 'Estudo e aplicação das principais escolas ou métodos de ginástica, sua influência na atualidade e suas dimensões pedagógicas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4072D9',
			obligatory: true
		},
		'NC101': {
			code: 'NC101',
			name: 'Sociedade e Cultura no Mundo Contemporâneo',
			ementa: 'As mudanças socioculturais nos séculos XX e XXI. Modernidade e pós-modernidade; globalização; nação, estado e mercado; indivíduo e individualismo; o dogma do progresso e a sociedade de risco; as redes na Idade Média.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C940D9',
			obligatory: true
		},
		'NC102': {
			code: 'NC102',
			name: 'Língua, Linguagem e Discurso',
			ementa: 'O funcionamento da língua: relações de sentido; referência, predicação e determinação. Discurso e texto: historicidade e sentido; procedimentos de textualidade; sentido do texto. Argumentação: relações de argumentação; construção da argumentação. O discurso da ciência: funcionamento linguístico; descrição; argumentação; demonstração.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B0',
			obligatory: true
		},
		'SL100': {
			code: 'SL100',
			name: 'A Célula',
			ementa: 'Aspectos estruturais e funcionais de moléculas, células e tecidos. Métodos de estudo, organização de Pró e Eucarióticos. Organelas celulares; biologia do desenvolvimento; interações celulares e transporte; principais tecidos humanos. Ênfase nos principais aspectos do funcionamento normal e anormal dos diversos sistemas, nos níveis celular e molecular; conhecimentos básicos da estrutura e função celular; técnicas diagnósticas e terapêuticas. Integração entre conhecimentos de bioquímica, biologia celular e molecular, genética, fisiologia e biofísica, histologia e as diferentes áreas da saúde.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D94C',
			obligatory: true
		},
		'SL101': {
			code: 'SL101',
			name: 'Morfofisiologia Humana I',
			ementa: 'Introdução aos tecidos básicos, a biologia do desenvolvimento e a organização anatômica do corpo humano. Estudo integrado de anatomia, histologia, embriologia, bioquímica e fisiologia humana, abordando do ponto de vista estrutural e funcional os sistemas osteomuscular, neuromuscular, nervoso e cardiovascular.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#A440D9',
			obligatory: true
		},
		'SL104': {
			code: 'SL104',
			name: 'Saúde e Sociedade',
			ementa: 'Relação saúde e sociedade nos diferentes momentos históricos. Práticas de saúde como construção social. Racionalidades terapêuticas. Corporeidade. Relações entre o processo saúde-doença e as determinações socioculturais. Identidade e prática dos profissionais de saúde. Aspectos de promoção e prevenção em saúde. Demanda, necessidade de saúde e intervenção social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C9D940',
			obligatory: true
		},
		'CP200': {
			code: 'CP200',
			name: 'Fundamentos Metodológicos do Treinamento Desportivo',
			ementa: 'Conceituações e estrutura do treinamento desportivo. Princípios do Treinamento. Meios e Métodos do Treinamento. Caracterização das capacidades físicas. Etapas de preparação desportiva de muitos anos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9BD',
			obligatory: true
		},
		'CP201': {
			code: 'CP201',
			name: 'Atletismo',
			ementa: 'Introdução aos estudos do Atletismo, de suas concepções pedagógicas e do treinamento, bem como de seus aspectos organizacionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B040',
			obligatory: true
		},
		'CP405': {
			code: 'CP405',
			name: 'Jogo',
			ementa: 'Introdução aos estudos do jogo como fenômeno-cultural e suas relações com o Esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D997',
			obligatory: true
		},
		'NC202': {
			code: 'NC202',
			name: 'Sociedade e Ambiente',
			ementa: 'As relações recíprocas, e em distintas escalas, entre fenômenos naturais, estruturas sociais, agentes e organizações indutoras de mudanças ambientais. Os elos entre natureza e políticas públicas, gestão estratégica, desenvolvimento tecnológico e demografia ambiental. As mudanças de paradigmas da sociedade e do conhecimento que acarretam, na atualidade, os conceitos e as estratégias de sustentabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4640D9',
			obligatory: true
		},
		'SL200': {
			code: 'SL200',
			name: 'Morfofisiologia Humana II',
			ementa: 'Estudo integrado de anatomia, histologia, embriologia, bioquímica e fisiologia humana, abordando, do ponto de vista estrutural e funcional os sistema sanguíneo, linfático, respiratório, digestório, urinário, neuro-endócrino e reprodutor feminino e masculino.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['SL101'],
			color: '#A440D9',
			obligatory: true
		},
		'SL204': {
			code: 'SL204',
			name: 'Cinesiologia I',
			ementa: 'Estudo dos diversos movimentos do corpo humano com ênfase na estrutura e funções das articulações e grupos musculares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94078',
			obligatory: true
		},
		'SL205': {
			code: 'SL205',
			name: 'Saúde Coletiva',
			ementa: 'Campo e história da Saúde Coletiva. Políticas e modelos assistenciais. SUS e ações de saúde. Saúde da Família. Planejamento em Saúde. Interdisciplinaridade no trabalho em saúde. Produção de serviços de saúde, formação de pessoal de saúde e estrutura social. Possibilidades de intervenção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7E40D9',
			obligatory: true
		},
		'CP301': {
			code: 'CP301',
			name: 'Bioquímica Aplicada às Ciências do Esporte',
			ementa: 'Estudos do anabolismo e catabolismo de carboidratos, lipídeos e aminoácidos, com ênfase na prática esportiva. Controle hormonal e energético do metabolismo. Maquinaria antioxidante e integração metabólica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D6',
			obligatory: true
		},
		'CP303': {
			code: 'CP303',
			name: 'Pedagogia do Esporte: Esporte Individual I',
			ementa: 'Estudos sobre o conceito e abordagens teóricas em Pedagogia do Esporte, relacionados ao desenvolvimento motor individual, com ênfase nas ações motoras envolvidas na execução dos elementos básicos dos esportes. O Esporte como expressão da cultura e suas implicações para o ensino das modalidades esportivas individuais. Conceitos sobre competição e detecção de talentos esportivos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9409D',
			obligatory: true
		},
		'CP304': {
			code: 'CP304',
			name: 'Psicologia no Esporte',
			ementa: 'Fundamentos teóricos da Psicologia no esporte. Estudos dos conceitos básicos e fenômenos da psicologia nas atividades físicas. A relação mente/corpo e fatores de bem-estar e saúde mental. Formação da personalidade. Normal e patológico. Estudo da relação entre as dimensões psicológicas (motivação, ansiedade, tendências, hábitos, vontade, estresse, dependências, agressividade, reações afetivas e auto-imagem) e a prática de atividades específicas. Compulsão. Perdas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5940D9',
			obligatory: true
		},
		'CP404': {
			code: 'CP404',
			name: 'Biomecânica Aplicada em Ciências do Esporte',
			ementa: 'Estudo das dinâmicas corporais nas atividades físicas e no Esporte a partir dos conceitos mecânicos básicos: movimento linear e angular; cinética linear e angular; mecânica de fluídos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A4D940',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46D940',
			obligatory: true
		},
		'SL303': {
			code: 'SL303',
			name: 'Estatística e Bioestatística',
			ementa: 'Estatística descritiva, probabilidade, variáveis aleatórias, distribuição de frequências, distribuições discretas e contínuas, medidas de tendência central, medidas de dispersão, análise de variância, inferência estatística, distribuição gráfica, gráficos de controle, intervalos de confiança, amostragens e testes de hipóteses, regressão e correlação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'SL400': {
			code: 'SL400',
			name: 'Crescimento e Desenvolvimento',
			ementa: 'Estudo dos processos que envolvem o crescimento físico e o desenvolvimento motor, e as prontidões maturacionais relacionadas à atividade física e ao esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'CP300': {
			code: 'CP300',
			name: 'Luta',
			ementa: 'Estudos teórico-práticos sobre Luta e suas relações com o Esporte. Noções das diferentes lutas e procedimentos pedagógicos para o seu ensino e aperfeiçoamento.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99D40',
			obligatory: true
		},
		'CP403': {
			code: 'CP403',
			name: 'Adaptações dos Sistemas Orgânicos ao Treinamento Físico',
			ementa: 'Estudo da fisiologia do exercício. Ajustes e adaptações dos sistemas orgânicos em resposta ao exercício e ao treinamento físico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4084D9',
			obligatory: true
		},
		'CP407': {
			code: 'CP407',
			name: 'Farmacologia',
			ementa: 'Estudo dos princípios gerais de farmacologia, farmacocinética e farmacodinâmica. Natureza macromolecular dos receptores das drogas. Ações e efeitos de drogas no organismo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97840',
			obligatory: true
		},
		'CP408': {
			code: 'CP408',
			name: 'Pedagogia do Esporte: Esporte Individual II',
			ementa: 'Iniciação esportiva em modalidades individuais, enquanto processo pedagógico, nos esportes de raquete, de aventura, da dança, e outras modalidades individuais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4097D9',
			obligatory: true
		},
		'CP600': {
			code: 'CP600',
			name: 'Políticas Públicas em Esporte',
			ementa: 'Estudo das políticas públicas em Esporte e suas implicações na sociedade contemporânea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40CFD9',
			obligatory: true
		},
		'CP700': {
			code: 'CP700',
			name: 'Socorros de Urgência',
			ementa: 'Reconhecimento da situação de emergência, prioridade e condutas a serem tomadas. Prevenção de acidentes. Primeiros Socorros em lesões mais frequentes e naquelas relacionadas às práticas de atividades físicas. Atuação do Profissional de Educação Física como educador na prática de primeiro socorrista.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95240',
			obligatory: true
		},
		'SL401': {
			code: 'SL401',
			name: 'Educação e Comunicação em Saúde',
			ementa: 'Fundamentos teóricos e históricos da educação em saúde no Brasil; diferentes abordagens pedagógicas; limites e possibilidades; metodologias alternativas didático-pedagógicas (oficinas). Teorias da comunicação, linguagem. Elementos básicos do processo de comunicação. Diferentes tipos de comunicação (verbal e não-verbal). Subjetividade. A comunicação como ferramenta para estabelecer relações de cuidado. O trabalho em equipes multidisciplinares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL104', 'SL205'],
			color: '#A48D8D',
			obligatory: true
		},
		'CP401': {
			code: 'CP401',
			name: 'Pedagogia do Esporte: Esporte Coletivo',
			ementa: 'Estudos sobre o conceito e abordagens teóricas em Pedagogia do Esporte. O esporte como expressão de cultura e suas implicações para o ensino das modalidades esportivas coletivas; o esporte coletivo como categoria.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#91D940',
			obligatory: true
		},
		'CP501': {
			code: 'CP501',
			name: 'Esporte Adaptado I',
			ementa: 'Estudo dos conceitos de Esporte Adaptado. Fundamentos e características das deficiências sensoriais, físicas e cognitivas. Considerações históricas e sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D984',
			obligatory: true
		},
		'CP502': {
			code: 'CP502',
			name: 'Treinamento Desportivo e Rendimento',
			ementa: 'Estudo dos desportos de acordo com a característica das ações motoras, dos meios e métodos de treinamento, das capacidades motoras e sua relação com o princípio da especificidade. Modelos de estruturação e periodização do treinamento desportivo. Planejamento, diagnóstico, programação e execução de treinamento em Ciência do Esporte. Preparação do desempenho.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96540',
			obligatory: true
		},
		'CP503': {
			code: 'CP503',
			name: 'Aprendizagem Motora',
			ementa: 'Estudo das teorias, processos e mecanismos específicos da aprendizagem motora.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94065',
			obligatory: true
		},
		'NC200': {
			code: 'NC200',
			name: 'Epistemologia e Filosofia da Ciência',
			ementa: 'Introdução à filosofia e à epistemologia das ciências naturais. Ruptura e continuidade na história da ciência. A ciência moderna e suas raízes epistemológicas. A cultura e a produção do conhecimento. Os rumos da tecnociência contemporânea e de suas relações com a sociedade, com a política e com a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#59D940',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9C340',
			obligatory: true
		},
		'SL500': {
			code: 'SL500',
			name: 'Epidemiologia',
			ementa: 'Conceitos, métodos e aplicabilidade. Epidemiologia descritiva. História natural das doenças. Distribuição de doenças e agravos à saúde. Coeficientes e índices. Indicadores de saúde. Método epidemiológico. Vigilância epidemiológica. Delineamentos de Pesquisa. Análises e interpretação das medidas de risco e associação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL303', 'SL401'],
			color: '#88B367',
			obligatory: true
		},
		'CP601': {
			code: 'CP601',
			name: 'Fundamentos de Nutrição e Esporte',
			ementa: 'Estudo dos nutrientes essenciais, seu papel metabólico e consequências de suas carências. Demandas alimentares durante as fases do desenvolvimento humano e na atividade física e esporte. Estudo sobre ergogênicos nutricionais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'CP602': {
			code: 'CP602',
			name: 'Avaliação em Ciências do Esporte',
			ementa: 'Estudo das medidas, prognóstico e análise de dados obtidos nos testes de controles em Ciência do Esporte e suas diferentes manifestações. Estudo dos controles do estado do esportista, das cargas de treinamento, da técnica de movimentos, dos resultados esportivos e da conduta durante as atividades motoras e a competição. Prescrição do exercício físico.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9CF',
			obligatory: true
		},
		'CP604': {
			code: 'CP604',
			name: 'Pedagogia do Esporte: Esporte Coletivo II',
			ementa: 'Estudos sobre pedagogia do esporte e suas implicações nos métodos de ensino dos jogos esportivos coletivos. Estabelecer relações com os modelos de aprendizagem aplicados à iniciação esportiva nas diferentes formas de expressão do esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B640D9',
			obligatory: true
		},
		'NC300': {
			code: 'NC300',
			name: 'Práticas Sociais nas Organizações',
			ementa: 'Conceito de organização. Tipos de organizações. Instituições e organizações. Racionalidade burocrática, indivíduos e grupos. Conflito e relações de poder. Cultura organizacional. Dinâmica das organizações: continuidade ruptura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94052',
			obligatory: true
		},
		'NC500': {
			code: 'NC500',
			name: 'Lógica',
			ementa: 'Introdução ao estudo da moderna lógica: funções proposicionais, quantificação, função de verdade, verdade lógica, modelo, linguagem formal e método axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408B',
			obligatory: true
		},
		'SL600': {
			code: 'SL600',
			name: 'Introdução à Prática de Ciências',
			ementa: 'Introdução ao pensamento crítico sobre as ciências e ao pensamento científico. Desenvolvimento da mentalidade investigativa e planejamento da pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C3',
			obligatory: true
		},
		'SL601': {
			code: 'SL601',
			name: 'Bioética',
			ementa: 'Conceitos, origem e princípios. Relações ético-terapêuticas com o usuário, família, comunidade e ambiente. A dignidade humana no ciclo vital. O agir profissional. Aspectos bioéticos em pesquisa com seres humanos e animais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC100', 'SL401'],
			color: '#75B367',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D98B40',
			obligatory: true
		},
		'CP701': {
			code: 'CP701',
			name: 'Esporte, Lazer e Sociedade',
			ementa: 'Estudo das Relações Esporte, Lazer e Sociedade e suas implicações contemporâneas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#B6D940',
			obligatory: true
		},
		'CP702': {
			code: 'CP702',
			name: 'Processo de Envelhecimento e Ciência do Esporte',
			ementa: 'Estudo do processo de envelhecimento, elaboração e desenvolvimento de programas específicos para essa fase da vida. Estudo das manifestações esportivas adequadas e adaptadas ao processo de envelhecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#40BDD9',
			obligatory: true
		},
		'CP703': {
			code: 'CP703',
			name: 'Fundamentos de Marketing e Esporte',
			ementa: 'Estudo dos fundamentos de Marketing aplicados ao esporte. Conceitos de Marketing associando estes conhecimentos com situações aplicadas no Esporte. Relações de causa-efeito nas ações de MKT aplicadas ao Esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#40D95F',
			obligatory: true
		},
		'CP704': {
			code: 'CP704',
			name: 'Esporte Adaptado II',
			ementa: 'Estudo das modalidades esportivas adaptadas (histórico e evolução). Avaliação funcional do esporte adaptado. Regulamento e pontuação nas várias modalidades. A organização do Esporte Paraolímpico. Modalidade de Esporte Paraolímpico.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP501'],
			color: '#40D984',
			obligatory: true
		},
		'CP705': {
			code: 'CP705',
			name: 'Estágio em Ciências do Esporte I',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA450'],
			color: '#40D972',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#7ED940',
			obligatory: true
		},
		'CP800': {
			code: 'CP800',
			name: 'Atividade Física e Esporte para Grupos Diferenciados',
			ementa: 'Estudo das concepções e procedimentos para o desenvolvimento de programas de atividades físicas e de Esporte para grupos diferenciados, tais como: gestantes, obesos, cardiopatas, hipertensos e diabéticos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#405FD9',
			obligatory: true
		},
		'CP802': {
			code: 'CP802',
			name: 'Prevenção e Reabilitação em Ciência do Esporte',
			ementa: 'Conceitos, classificação e estudo das lesões desportivas. Implicações do destreinamento no esportista. As doenças crônica-degenerativas não transmissíveis nas Ciências do Esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#40D9AA',
			obligatory: true
		},
		'CP803': {
			code: 'CP803',
			name: 'Estágio em Ciência do Esporte II',
			ementa: 'Atividades de estágio que propiciem ao profissinal em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA450'],
			color: '#D9D640',
			obligatory: true
		},
		'CP804': {
			code: 'CP804',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho monográfico e ser desenvolvido pelo aluno.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA460'],
			color: '#9140D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#404CD9',
			obligatory: true
		}
	}
};

export default catalogue;
