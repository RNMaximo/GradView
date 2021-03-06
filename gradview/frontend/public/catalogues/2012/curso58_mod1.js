const catalogue = {
	totalCredits: 254,
	maxCreditsSem: 37,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MD223', 'FN104', 'HL111', 'BS180', 'F_105', 'FN101', 'FN103', 'FN102']
		},
		'sem-2': {
			id: '2',
			subjects: ['FN203', 'FN208', 'FN504', 'FN710', 'HL221', 'FN205', 'ELET02', 'FN209', 'BS280', 'HL201', 'FN207']
		},
		'sem-3': {
			id: '3',
			subjects: ['BF180', 'FN304', 'HL304', 'FN604', 'HL321', 'FN307', 'FN306', 'MD215', 'MD350', 'FN301', 'FN302']
		},
		'sem-4': {
			id: '4',
			subjects: ['FN400', 'FN404', 'FN401', 'HL832', 'HL311', 'FN408', 'FN409', 'MD207', 'FN406', 'FN407']
		},
		'sem-5': {
			id: '5',
			subjects: ['FN500', 'FN501', 'FN506', 'FN507', 'FN509', 'FN510', 'FN511', 'HL503', 'MD600', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['FN601', 'FN606', 'HL053', 'FN607', 'FN609', 'FN611', 'FN600', 'FN708']
		},
		'sem-7': {
			id: '7',
			subjects: ['FN706', 'FN705', 'FN502', 'FN711', 'FN206', 'FN701', 'FN700']
		},
		'sem-8': {
			id: '8',
			subjects: ['FN805', 'FN800', 'FN811', 'FN806', 'FN801']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'BS180': {
			code: 'BS180',
			name: 'Anatomia, Histologia e Embriologia',
			ementa: 'Noções dos sistemas que compõem os segmentos da cabeça e pescoço e estudo detalhado daqueles envolvidos nos processos fonoarticulatórios. Programa integrado de anatomia, histologia e embriologia. Noções básicas de Histologia. Organização morfo-funcional dos tecidos orgânicos da cabeça, pescoço e tórax. Princípios gerais da organização do corpo humano, em especial de cabeça, pescoço e tórax. Principais etapas do desenvolvimento do embrião humano, procurando correlacionar alterações fisiológicas no organismo materno, o desenvolvimento das funções básicas embrionárias e o desenvolvimento da forma.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#6946B9',
			obligatory: true
		},
		'F_105': {
			code: 'F_105',
			name: 'Física da Fala e Audição',
			ementa: 'Elementos básicos da física acústica: movimento harmônico simples, fenômenos ondulatórios e características das ondas sonoras. Teoria da audição e fonação: princípios físicos e eletroacústica. Elementos básicos de eletroacústicas para a compreenção dos aparelhos eletrônicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A546B9',
			obligatory: true
		},
		'FN101': {
			code: 'FN101',
			name: 'Perspectivas no Desenvolvimento Humano',
			ementa: 'Grandes questões da história da Psicologia em relação ao desenvolvimento desde a primeira infância até a idade adulta. Hereditariedade e meio ambiente. Estabilidade e mudança em Psicologia. Normalidade e anormalidade dos processos de desenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946AF',
			obligatory: true
		},
		'FN102': {
			code: 'FN102',
			name: 'História da Fonoaudiologia',
			ementa: 'A história da fonoaudiologia no Brasil e no mundo. Visão geral das áreas de atuação da fonoaudiologia e suas inter-relações com outras profissões. O papel social do fonoaudiólogo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4BB946',
			obligatory: true
		},
		'FN103': {
			code: 'FN103',
			name: 'Políticas Públicas, Direitos e Cidadania',
			ementa: 'Introdução de conceitos das Ciências Sociais para a compreensão das relações sociais que se estabelecem entre a Sociedade, Estado e Políticas Sociais. Neste contexto enfoca as questões ligadas à saúde, cidadania e direitos, considerando a especificidade dos diferentes grupos populacionais. Analisa especificamente as Políticas de Saúde e seu rebatimento na prática do profissional de Fonoaudiologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9646B9',
			obligatory: true
		},
		'FN104': {
			code: 'FN104',
			name: 'Fundamentos Teóricos do Trabalho com Família',
			ementa: 'Fundamentos teóricos para a compreensão da família. Discussão crítica de modelos e de tipos de família contemporânea. Estudo da dinâmica familiar, considerando as noções de ciclo vital e crises familiares, relacionando tais conhecimentos à prática fonoaudiológica, dirigida à realização de entrevistas e aos primeiros atendimentos à família.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94682',
			obligatory: true
		},
		'HL111': {
			code: 'HL111',
			name: 'Introdução aos Estudos da Linguagem I',
			ementa: 'Visão geral do Fenômeno da linguagem e de seus métodos de investigação científica, considerando temas como: Linguagem e sociedade, linguagem e línguas naturais, a língua como objeto de estudo, o problema do objeto e do método, áreas da linguística, a linguística e outras ciências. Apresentação e problematização de fatos de linguagem pertinentes para as teorias linguísticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94655',
			obligatory: true
		},
		'MD223': {
			code: 'MD223',
			name: 'Atenção à Saúde no Brasil',
			ementa: 'Estudo do sistema de saúde brasileiro, destacando o papel da Saúde Pública, os problemas que enfrenta, suas tecnologias, organização em serviços e políticas. Política de saúde pública atual e processos de trabalho junto aos serviços de saúde.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99146',
			obligatory: true
		},
		'BS280': {
			code: 'BS280',
			name: 'Neurociências para a Fonoaudiologia',
			ementa: 'Conceituação geral do sistema nervoso, organização e função. Estruturas e organização do sistema nervoso central e periférico. Estudos dos órgãos dos sentidos e processamento sensorial relacionados com a visão, audição e equilíbrio. Estudo da anatomia e fisiologia dos principais sistemas corticais e subcorticais envolvidos no processo de fonação e audição. Integração entre sistema nervoso autônomo, límbico e a organização da linguagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469BB9',
			obligatory: true
		},
		'FN203': {
			code: 'FN203',
			name: 'Introdução à Ciência e ao Conhecimento',
			ementa: 'Perspectiva histórica e filosófica da ciência relacionada a uma reflexão sobre o método e sobre a questão da objetividade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97346',
			obligatory: true
		},
		'FN205': {
			code: 'FN205',
			name: 'Fundamentos da Audiologia I',
			ementa: 'Noções de psicoacústica aplicadas a audiologia. Introdução à Audiologia. Apresentação dos equipamentos utilizados na avaliação audiológica básica, calibração. Procedimentos de avaliação audiológica em adultos: anamnese, meatoscopia, testes acumétricos, audiometria tonal por via aérea e óssea. Classificação das perdas auditivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_105'],
			color: '#A546B9',
			obligatory: true
		},
		'FN207': {
			code: 'FN207',
			name: 'Desenvolvimento Motor na Infância',
			ementa: 'Teorias do desenvolvimento motor. Desenvolvimento motor e sensorial ao longo da infância. Padrões posturais que caracterizam o desenvolvimento motor de crianças com alterações centrais. Procedimentos de avaliação do desenvolvimento motor e da postura na interface com as ações fonoaudiológicas no campo das alterações de linguagem e da motricidade oral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95546',
			obligatory: true
		},
		'FN208': {
			code: 'FN208',
			name: 'Promoção e Prática em Saúde Comunitária',
			ementa: 'Aprofundar o aprendizado nos conteúdos e na dinâmica da Saúde Pública permitindo aos alunos desenvolverem projetos de intervenção pactuados com usuários e/ou equipe em Unidades Básicas de Saúde.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD223'],
			color: '#B99146',
			obligatory: true
		},
		'FN209': {
			code: 'FN209',
			name: 'Motricidade Orofacial I',
			ementa: 'Noções básicas de motricidade orofacial na fonoaudiologia. Introdução às bases teóricas do desenvolvimento do sistema estomatognático e das funções orofaciais na motricidade orofacial. Compreensão do padrão de normalidade e principais desvios ao longo do desenvolvimento. Procedimentos de avaliação, intervenção terapêutica e interface interdisciplinar na motricidade orofacial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96446',
			obligatory: true
		},
		'FN504': {
			code: 'FN504',
			name: 'Metodologia da Pesquisa I',
			ementa: 'Elementos teóricos e operacionais básicos da pesquisa clássica. Tipos e controle de variáveis. Delineamento de grupos e de sujeito único. Metodologia observacional. Estudos experimentais e correlacionais. Análise quantitativa de dados - fundamentos da análise estatística. A questão da divulgação dos resultados de pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B950',
			obligatory: true
		},
		'FN710': {
			code: 'FN710',
			name: 'A Interdisciplinaridade na Reabilitação das Deficiências Sensoriais.',
			ementa: 'Aborda conteúdos teóricos e práticos referentes às deficiências sensoriais (visão subnormal, cegueira e surdez). Introduz e conceitua procedimentos metodológicos de avaliação em intervenção e recursos utilizados nos processos terapêuticos, sob uma perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7846B9',
			obligatory: true
		},
		'HL201': {
			code: 'HL201',
			name: 'Introdução à Semântica e à Pragmática',
			ementa: 'Dimensões da significação: sentido, referência. Significado lexical e relações de sentido. Enunciação, subjetividade e sentido. Significação e uso da linguagem: O papel do contexto e do cotexto. A construção dos sentidos implícitos na interlocução. Performatividade e atos da fala.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#467DB9',
			obligatory: true
		},
		'HL221': {
			code: 'HL221',
			name: 'Fonética e Fonologia',
			ementa: 'Os aspectos fônicos da linguagem; a produção da fala; aparelho fonador; processos aerodinâmicos, fonatórios e articulatórios; modos e pontos de articulação; consoantes e vogais; articulações secundárias; a sílaba; a prosódia do ritmo e da entoação; prática de produção, reconhecimento e transcrição dos sons da linguagem; a organização dos sons da fala em sistemas fonológicos; fonema, alofone, arquifonema: as noções de oposição, contraste, distribuição complementar, neutralização; traços distintivos; processos e representações fonológicas; prática de análise fonológica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B96E',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BF180': {
			code: 'BF180',
			name: 'Fisiologia Humana Geral',
			ementa: 'Estudo da fisiologia dos sistemas digestório, respiratório, cardiovascular, renal, endócrino e reprodutor, destacando-se os aspectos fundamentais da respiração, fonação, audição e fisiologia oral, correlacionando à lactação, à cronologia da erupção dentária, à mastigação, à articulação temporomandibular e à deglutição. Relação entre os diversos sistemas orgânicos e a fisiologia dos órgãos da fala e da audição.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#69B946',
			obligatory: true
		},
		'FN301': {
			code: 'FN301',
			name: 'Desenvolvimento da Infância à Idade Adulta II',
			ementa: 'Desenvolvimento da cognição ao longo da vida. Teorias de desenvolvimento humano: primeira infância, anos pré-escolares e escolares, adolescência, vida adulta, velhice. Processos cognitivos. Função simbólica. Inteligência, atenção e memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946A0',
			obligatory: true
		},
		'FN302': {
			code: 'FN302',
			name: 'Genética Médica Aplicada à Fonoaudiologia I',
			ementa: 'Genes e cromossomos. Mitose e meiose. Estudo do cariótipo humano; origem e quadro clínico das principais cromossomopatias. A transmissão hereditária dos caracteres: reconhecimento dos padrões de herança autossômicos dominante e recessivo, ligados ao X e herança mitocondrial. Padrões não clássicos de herança. Consanguinidade. Herança multifatorial. Princípio de genética de populações. Princípios de genética molecular. Fatores genéticos na deficiência auditiva e outras condições determinantes de distúrbios da linguagem. Agentes teratogênicos e fatores peri e pós-natais associados à surdez.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94664',
			obligatory: true
		},
		'FN304': {
			code: 'FN304',
			name: 'Relações Interpessoais e Dinâmica de Grupo',
			ementa: 'Estudo das relações interpessoais: evolução histórica e concepções atuais. Principais correntes de dinâmica de grupo e suas implicações práticas. Diferentes vivências de grupo e análise desse processo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8746B9',
			obligatory: true
		},
		'FN306': {
			code: 'FN306',
			name: 'Introdução à Ética',
			ementa: 'Diferentes noções sobre ética, formuladas tanto por filósofos gregos quanto por autores contemporâneos, enfatizando a reflexão sobre valores e normas, para introduzir o estudo da ética no campo profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#468CB9',
			obligatory: true
		},
		'FN307': {
			code: 'FN307',
			name: 'Fundamentos da Audiologia II',
			ementa: 'Procedimentos de avaliação audiológica em adultos: logoaudiometria, medidas de imitância acústica, testes supraliminares. Características audiológicas das principais alterações que acometem a orelha externa, média e interna e VIII par craniano.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN205'],
			color: '#A546B9',
			obligatory: true
		},
		'FN604': {
			code: 'FN604',
			name: 'Metodologia da Pesquisa II',
			ementa: 'Estudo das abordagens qualitativas de pesquisa, discutindo suas características e especificidades. Trabalha as etapas e os instrumentos deste tipo de pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A046',
			obligatory: true
		},
		'HL304': {
			code: 'HL304',
			name: 'Introdução à Teoria Gramatical',
			ementa: 'Introdução ao estudo teórico das relações gramaticais: 1. Conceitos de gramática. 2. Propriedades dos itens lexicais e funcionais. 3. Funções sintáticas e estrutura de constituintes. 4. Papéis temáticos. 5. Análise e representação de estruturas gramaticais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4B46B9',
			obligatory: true
		},
		'HL321': {
			code: 'HL321',
			name: 'Fonética Experimental',
			ementa: 'Observação, experimento e medida. Instrumentos de medida em Fonética. O papel da Fonética Acústica para tornar a fala acessível à mensuração. Elementos de Fonética Acústica: onda sonora, espectro. A teoria fonte-filtro da produção da fala. Principais características acústicas das vogais. Principais características acústicas das consoantes. Acústica dos traços prosódicos. O papel das pistas acústicas na percepção de fala. Aspectos cognitivos e linguísticos da percepção de fala.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['HL221'],
			color: '#46B96E',
			obligatory: true
		},
		'MD215': {
			code: 'MD215',
			name: 'Epidemiologia e Saúde',
			ementa: 'Definição de uso da Epidemiologia. População e saúde. Noções de demografia. Transição demográfica e epidemiológica. A medida das condições de saúde - fontes de informações. Indicadores epidemiológicos. Mortalidade geral e proporcional. Mortalidade Infantil. A medida das doenças, incidência, prevalência, letalidade. Diagnóstico descritivo em Epidemiologia. Medidas de associação e efeito. A Epidemiologia e o controle das doenças. Epidemia e endemias. Investigação epidemiológica. Banco de dados. Vigilância Epidemiológica. Programas de controle de doenças. Validação de testes diagnósticos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46AAB9',
			obligatory: true
		},
		'MD350': {
			code: 'MD350',
			name: 'Funções Corticais na Infância',
			ementa: 'Fornecer conhecimentos básicos sobre neuropsicologia infantil e funções corticais superiores, bem como relacionar tais conhecimentos com o desenvolvimento e a aprendizagem da criança.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS280'],
			color: '#469BB9',
			obligatory: true
		},
		'FN400': {
			code: 'FN400',
			name: 'Patologias dos Órgãos da Fala e Audição',
			ementa: 'Estudo das afecções otorrinolaringológicas e seus impactos funcionais, na respiração, sucção, mastigação, deglutição, audição e fonação. Estudo sistemático das afecções otorrinolaringológicas com interpretação fisiopatológica, descrição sumária das situações clínicas com alterações funcionais e dos procedimentos terapêuticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF180'],
			color: '#69B946',
			obligatory: true
		},
		'FN401': {
			code: 'FN401',
			name: 'Audiologia I',
			ementa: 'Apresentação da clínica e seus equipamentos. Realização da meatoscopia, anamnese, testes da avaliação audiológica básica de um aluno no outro (audiometria tonal por via área e óssea, logoaudiometria, testes acumétricos e supraliminares e medidas de imitância acústica). Discussão de casos clínicos com levantamento das características audiológicas das desordens do sistema auditivo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN307'],
			color: '#A546B9',
			obligatory: true
		},
		'FN404': {
			code: 'FN404',
			name: 'Aspectos Teóricos e Metodológicos da Avaliação de Linguagem',
			ementa: 'Objetivos, funções e limites da avaliação de linguagem. Visão crítica das baterias de testes-padrão relacionada à especificidade da oralidade e da escrita e ao funcionamento discursivo da linguagem. Análise de fatos e dados de linguagem diferenciando-os de erros e déficits. Discussão sobre os vários procedimentos avaliativos, aplicados a crianças e a adultos, do ponto de vista filosófico, epistemológico e metodológico. A relação da linguagem com outros processos cognitivos. Apresentação e discussão de princípios e versões protocolares discursivamente informados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'FN406': {
			code: 'FN406',
			name: 'Fundamentos para Prática Comunitária',
			ementa: 'Subsídios teóricos relativos à intervenção fonoaudiológica nos níveis primários e segundários de prevenção. Conceituação, tipologia e finalidade das instituições. A Fonoaudiologia preventiva e a atuação do fonoaudiólogo em serviços públicos e privados. Introdução à pesquisa em saúde pública na área fonoaudiológica: Os estudos da vigilância e epidemiologia. Observação da atuação do profissional em instituições e organizações sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5A46B9',
			obligatory: true
		},
		'FN407': {
			code: 'FN407',
			name: 'Estágio de Observação de Prática Fonoaudiológica',
			ementa: 'Observação da atuação fonoaudiológica na clínica-escola e nos serviços fonoaudiológicos oferecidos na Instituição.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#B9AF46',
			obligatory: true
		},
		'FN408': {
			code: 'FN408',
			name: 'Fundamentos da Língua Brasileira de Sinais',
			ementa: 'Abordar aspectos linguísticos da Língua Brasileira de Sinais (LIBRAS) como a fonologia, morfologia e sintaxe, possibilitando ao aluno o uso desta língua em contextos reais de comunicação. Os alunos terão oportunidade e interação com professores surdos por meio de um curso introdutório da LIBRAS.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#96B946',
			obligatory: true
		},
		'FN409': {
			code: 'FN409',
			name: 'Motricidade Orofacial II',
			ementa: 'Produção teórica das principais doenças, distúrbios e desvios na motricidade orofacial. Subsídios teóricos para a compreensão das alterações miofuncionais fonoaudiológicas, procedimentos de avaliação, intervenção terapêutica e alta.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN209'],
			color: '#B96446',
			obligatory: true
		},
		'HL311': {
			code: 'HL311',
			name: 'Fundamentos da Aquisição de Linguagem',
			ementa: 'A disciplina visa levar a uma reflexão sobre a fala da criança, sobre a escrita inicial e sobre certos fenômenos que, genericamente, podem ser compreendidos como patologias da fala infantil, mas que no curso serão debatidos e interrogados à luz de uma teorização sobre a aquisição de linguagem. As questões empíricas serão tratadas a partir da análise de corpora da fala e escrita da criança. Serão estudados aspectos estruturais da fala da criança no processo de aquisição da língua materna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#466EB9',
			obligatory: true
		},
		'HL832': {
			code: 'HL832',
			name: 'Análise do Discurso',
			ementa: 'Análise linguística e análise discursiva. Análise do Discurso e Pragmática. Enunciação. Condições de produção, história, ideologia. A questão da subjetividade. A questão do sentido e a da leitura. Metodologias de análise. Discurso e gêneros textuais. Intertextualidade e interdiscursividade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B97D',
			obligatory: true
		},
		'MD207': {
			code: 'MD207',
			name: 'Aspectos Neurológicos da Deficiência Mental',
			ementa: 'Definição e classificação da Deficiência Mental, distúrbios do desenvolvimento neuropsicológico, semiologia neurológica do deficiente mental, aspectos neurológicos das principais síndromes genéticas: Síndrome de Down, Síndrome do X-Frágil e das principais síndromes neurológicas: Epilepsia, Distúrbios Neurossensoriais, Paralisia Cerebral, etc. Repercussão neuropsicológica dos erros inatos do metabolismo. Distúrbios de Aprendizagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98246',
			obligatory: true
		},
		'FN500': {
			code: 'FN500',
			name: 'Estágio em Fonoaudiologia Comunitária I',
			ementa: 'Estágio em instituições para diagnósticos e planejamento da ação fonoaudiológica em nível primário e secundário. A prática fonoaudiológica em diferentes espaços como centro de referência em saúde do trabalhador, sindicatos, UBS, creches, escolas e indústrias. Levantamento do organograma, da equipe de profissionais, da população atendida e de trabalhos fonoaudiológicos já existentes. A interdisciplinaridade nas equipes de educação e saúde.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN400', 'FN404', 'FN409'],
			color: '#9E7646',
			obligatory: true
		},
		'FN501': {
			code: 'FN501',
			name: 'Audiologia II',
			ementa: 'Desenvolvimento da função auditiva. A Avaliação audiológica na infância. Triagem auditiva neo-natal. Discussão de políticas de saúde auditiva.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN401'],
			color: '#A546B9',
			obligatory: true
		},
		'FN506': {
			code: 'FN506',
			name: 'Estágio em Audiologia I',
			ementa: 'Avaliação audiológica em pacientes adultos e crianças.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN401'],
			color: '#A546B9',
			obligatory: true
		},
		'FN507': {
			code: 'FN507',
			name: 'Estágio em Avaliação de Linguagem I',
			ementa: 'Aplicação de procedimentos avaliativos referentes à alteração de voz, linguagem oral, linguagem escrita e/ou audição em crianças, adolescentes, adultos e idosos. Análise de exames complementares. Elaboração de diagnóstico fonoaudiológico e relatórios de avaliação com indicação para o processo terapêutico. Discussão sobre o diagnóstico e o encaminhamento.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN404'],
			color: '#B94646',
			obligatory: true
		},
		'FN509': {
			code: 'FN509',
			name: 'Estágio em Fonoaudiologia Clínica I',
			ementa: 'Início do atendimento clínico. As etapas frente ao processo clínico: levantamento dos dados de prontuário, levantamento bibliográfico para estudo de caso, apresentação e análise de exames complementares, planejamento terapêutico, elaboração de relatórios de avaliação clínica e de acompanhamento terapêutico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: '',
			color: '#B4B946',
			obligatory: true
		},
		'FN510': {
			code: 'FN510',
			name: 'Aquisição, Desenvolvimento e Processos Terapêuticos da Surdez',
			ementa: 'Fornecer subsídios teóricos e práticos sobre o processo de aquisição e desenvolvimento de linguagem oral, leitura-escrita e língua de sinais do sujeito surdo, relacionando-se o processo clínico-terapêutico ao educacional. E, partindo das questões linguísticas, abordar a relação sujeito/língua/identidade na surdez.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN408'],
			color: '#96B946',
			obligatory: true
		},
		'FN511': {
			code: 'FN511',
			name: 'Linguagem e Intervenção Fonoaudiológica I',
			ementa: 'O acompanhamento fonoaudiológico das alterações de fala e da gagueira. Discussão dos conceitos de fluência e de disfluência. A prevenção, e avaliação e o acompanhamento clínico-terapêutico das alterações de fala e de gagueira. A intervenção terapêutica individual e em grupo. Atuação multi e interdisciplinar e em diferentes contextos - familiar, escolar e outros. Atuação fonoaudiológica na atenção básica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4650B9',
			obligatory: true
		},
		'HL503': {
			code: 'HL503',
			name: 'Processamento de Linguagem',
			ementa: 'Percepção e produção da fala. Leitura e processamento da linguagem: processamento lexical, parsing e processamento do sentido.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#87B946',
			obligatory: true
		},
		'MD600': {
			code: 'MD600',
			name: 'A Relação Profissional/Paciente',
			ementa: 'As condições psicossociais do estudante de fonoaudiologia: gratificações emocionais, idealizações, expectativas, questionamentos e receios. Ansiedades frente às atividades de contato com os pacientes. Relações interpessoais e seus aspectos facilitadores e complicadores.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B98C',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'FN600': {
			code: 'FN600',
			name: 'Estágio em Fonoaudiologia Comunitária II',
			ementa: 'Estágio em instituições e em serviços públicos (UBS, centros de saúde, EMEI, CEMEI, creches) para diagnóstico e planejamento da ação fonoaudiológica em nível primário e secundário. Trabalho em entidades, levantamento do organograma, da equipe de profissionais, da população atendida e de trabalhos fonoaudiológicos já existentes. A interdisciplinaridade nas equipes de educação e saúde.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'FN601': {
			code: 'FN601',
			name: 'Audiologia III',
			ementa: 'Processamento auditivo, noções teóricas de exames eletrofisológicos da audição. Fundamentação teórica da avaliação e reabilitação da função vestibular.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN401'],
			color: '#A546B9',
			obligatory: true
		},
		'FN606': {
			code: 'FN606',
			name: 'Estágio em Audiologia II',
			ementa: 'Avaliação audiológica em pacientes adultos e crianças.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN506'],
			color: '#A546B9',
			obligatory: true
		},
		'FN607': {
			code: 'FN607',
			name: 'Estágio em Avaliação de Linguagem II',
			ementa: 'Aplicação de procedimentos avaliativos referentes a alteração de voz, linguagem oral, linguaguem escrita e/ou audição em crianças, adolescentes, adultos ou idosos. Análise de exames complementares. Elaboração de diagnóstico fonoaudiológico e relatórios de avaliação com indicação para o processo terapêutico. Discussão sobre o diagnóstico e encaminhamento.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN507'],
			color: '#B94646',
			obligatory: true
		},
		'FN609': {
			code: 'FN609',
			name: 'Estágio em Fonoaudiologia Clínica II',
			ementa: 'Continuidade no acompanhamento terapêutico de sujeitos já avaliados. Análise do processo terapêutico: evolução e prognóstico. Discussão em grupo dos casos atendidos pelos alunos sob a orientação de um docente. Elaboração de relatórios de acompanhamento terapêutico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AA',
			obligatory: true
		},
		'FN611': {
			code: 'FN611',
			name: 'Linguagem e Intervenção Fonoaudiológica II',
			ementa: 'O acompanhamento fonoaudiológico das alterações de linguagem decorrentes de lesões ou disfunções neurológicas (afasia, paralisia cerebral, Doença de Parkinson e outras) e das alterações de escrita. A avaliação e acompanhamento clínico-terapêutico. Intervenção fonoaudiológica e comunicação suplementar e/ou alternativa. Atuação multi e interdisciplinar e em diferentes contextos-familiar, escolar e outros. Atuação fonoaudiológica na atenção básica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B446B9',
			obligatory: true
		},
		'FN708': {
			code: 'FN708',
			name: 'Fonoaudiologia: Voz',
			ementa: 'Discussão do conceito de voz no contexto normal e patológico. Bases teóricas da avaliação e habilitação da voz. Processo terapêutico em indivíduos com alterações de voz.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#465FB9',
			obligatory: true
		},
		'HL053': {
			code: 'HL053',
			name: 'Neurolinguística',
			ementa: 'A disciplina pretende desenvolver os seguintes aspectos: a)histórico do nascimento da Neurolinguística e suas implicações para as relações entre a Linguística, as Neurociências e outros domínios do estudo da cognição humana; b)aspectos biológicos e socioculturais do funcionamento cerebral e da linguagem; c)discussão em torno das relações entre o normal e o patológico nos estudos da linguagem; d)análise do método clínico e de procedimentos avaliativos relativos à linguagem; e)teorização linguística das afasias e outras patologias linguístico-cognitivas; f)a relação entre oralidade e escrita.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5AB946',
			obligatory: true
		},
		'FN206': {
			code: 'FN206',
			name: 'Sistemas de Linguagem Não-Verbal e Linguagens Alternativas',
			ementa: 'Apresenta fundamentos de linguagens não-verbais e discute sua relação com a atuação fonoaudiológica. Analisa os processos de representação como modalidades culturais de constituição de significado. Apresenta fundamentos sobre as linguagens da arte (artes visuais, dança, teatro e música), e discute práticas de aplicação nos estágios em fonoaudiologia para as várias faixas etárias. Estuda os fundamentos de desenvolvimento do desenho na criança e no adolescente. Discute sistemas de comunicação suplementar e alternativa e sua aplicação nos estágios supervisionados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A5B946',
			obligatory: true
		},
		'FN502': {
			code: 'FN502',
			name: 'Fonoaudiologia e Saúde do Trabalhador',
			ementa: 'Noções teóricas da atuação do fonoaudiólogo na saúde do trabalhador.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN401'],
			color: '#A546B9',
			obligatory: true
		},
		'FN700': {
			code: 'FN700',
			name: 'Estágio em Fonoaudiologia Comunitária III',
			ementa: 'Conhecimento de instituições, de serviços públicos e planejamento de atividades relativas à atenção terciária. Estágio em instituições e em serviços públicos: escolas e hospitais (berçários e ambulatórios).',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: '',
			color: '#46B95F',
			obligatory: true
		},
		'FN701': {
			code: 'FN701',
			name: 'Audiologia IV',
			ementa: 'Características físicas e eletroacústicas de próteses auditivas. Seleção e adaptação de próteses auditivas em crianças, adultos e idosos. Procedimentos audiológicos para verificação do desempenho e benefício da prótese auditiva.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B99B',
			obligatory: true
		},
		'FN705': {
			code: 'FN705',
			name: 'Monografia I',
			ementa: 'Planejamento e desenvolvimento de trabalho de conclusão de curso em fonoaudiologia.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['FN504', 'FN604'],
			color: '#80AD4B',
			obligatory: true
		},
		'FN706': {
			code: 'FN706',
			name: 'Estágio em Audiologia III',
			ementa: 'Triagem auditiva neonatal. Avaliação do procedimento auditivo. Avaliação otoneurológica e reabilitação vestibular.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN606'],
			color: '#A546B9',
			obligatory: true
		},
		'FN711': {
			code: 'FN711',
			name: 'Estágio em Avaliação e Terapia Fonoaudiológica I',
			ementa: 'Avaliação e terapia da voz, linguagem oral e/ou escrita. Etapas frente ao processo clínico: levantamento dos dados de prontuário, planejamento e acompanhamento terapêutico e encaminhamentos. Atuação integrada com a família. Discussão dos casos atendidos sob o ponto de vista da ética profissional, na interface interdiscliplinar.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:0, D:0, HS:10, SL:10, C:13},
			requisitos: ['FN607', 'FN609'],
			color: '#808078',
			obligatory: true
		},
		'FN800': {
			code: 'FN800',
			name: 'Estágio em Fonoaudiologia Comunitária IV',
			ementa: 'Conhecimento de instituições, de serviços públicos e planejamento de atividades relativas à atenção terciária. Estágio em instituições e em serviços públicos: escolas e hospitais (berçários e ambulatórios).',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#78B946',
			obligatory: true
		},
		'FN801': {
			code: 'FN801',
			name: 'Audiologia V',
			ementa: 'Estágio prático na seleção e adaptação de próteses auditivas em crianças, adultos e idosos',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94673',
			obligatory: true
		},
		'FN805': {
			code: 'FN805',
			name: 'Monografia II',
			ementa: 'Desenvolvimento e finalização de trabalho de conclusão de curso em fonoaudiologia.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['FN705'],
			color: '#80AD4B',
			obligatory: true
		},
		'FN806': {
			code: 'FN806',
			name: 'Estágio de Audiologia IV',
			ementa: 'Triagem auditiva neonatal. Avaliação do processamento auditivo. Avaliação audiológica básica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94691',
			obligatory: true
		},
		'FN811': {
			code: 'FN811',
			name: 'Estágio em Avaliação e Terapia Fonoaudiológica II',
			ementa: 'Avaliação e terapia da voz, linguagem oral e/ou escrita. Etapas frente ao processo clínico: levantamento dos dados de prontuário, planejamento e acompanhamento terapêutico e encaminhamentos. Atuação integrada com a família. Discussão dos casos atendidos sob o ponto de vista da ética profissional, na interface interdisciplinar.',
			semestre: 1,
			vector: {T:0, P:10, L:0, O:0, D:0, HS:10, SL:10, C:11},
			requisitos: ['FN711'],
			color: '#808078',
			obligatory: true
		}
	}
};

export default catalogue;
