const catalogue = {
	totalCredits: 262,
	maxCreditsSem: 39,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BH132', 'FN104', 'FN102', 'F_105', 'FN103', 'BA132', 'MD223', 'HL111', 'FN101', 'BH131']
		},
		'sem-2': {
			id: '2',
			subjects: ['FN203', 'BS280', 'FN207', 'HL201', 'FN205', 'FN209', 'FN208', 'FN504', 'HL221', 'FN710', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HL304', 'MD350', 'MD215', 'BF180', 'FN307', 'FN301', 'FN304', 'FN604', 'HL321', 'FN302', 'FN306']
		},
		'sem-4': {
			id: '4',
			subjects: ['HL311', 'FN401', 'HL832', 'FN400', 'FN420', 'FN408', 'FN409', 'FN413', 'FN404', 'FN407', 'FN904', 'MD410']
		},
		'sem-5': {
			id: '5',
			subjects: ['FN501', 'FN506', 'FN507', 'FN509', 'FN510', 'FN511', 'FN512', 'FN513', 'HL503', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['FN601', 'FN606', 'FN607', 'FN609', 'FN611', 'FN612', 'FN613', 'FN906', 'HL053']
		},
		'sem-7': {
			id: '7',
			subjects: ['FN715', 'FN704', 'FN706', 'FN714', 'FN713', 'FN701', 'FN712', 'FN705', 'FN502', 'FN206']
		},
		'sem-8': {
			id: '8',
			subjects: ['FN804', 'FN813', 'FN908', 'FN812', 'FN806', 'FN814', 'FN805', 'FN815']
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
		'BA132': {
			code: 'BA132',
			name: 'Anatomia',
			ementa: 'Nomenclatura anatômica, princípios gerais da construção do corpo humano, anatomia do esqueleto cefálico, orelha, músculos da cabeça e pescoço, faringe, nariz, seios paranasais, laringe, traquéia e pulmões.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B968',
			obligatory: true
		},
		'BH131': {
			code: 'BH131',
			name: 'Biologia Tecidual',
			ementa: 'Noções básicas sobre Biologia Tecidual geral e dos segmentos da cabeça e pescoço envolvidos nos processos fono-articulatórios.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B94B',
			obligatory: true
		},
		'BH132': {
			code: 'BH132',
			name: 'Embriologia Humana',
			ementa: 'Embriologia geral: introdução à embriologia e aos defeitos congênitos, gametogênese, fecundação, fenômenos pré-implantacionais, implantação, gastrulação, neurulação, dobramentos e fechamento do corpo do embrião, anexos fetais e período fetal. Embriologia da cabeça, face, cavidade bucal, orelha, pescoço e aparelho respiratório.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98146',
			obligatory: true
		},
		'F_105': {
			code: 'F_105',
			name: 'Física da Fala e Audição',
			ementa: 'Elementos básicos da física acústica: movimento harmônico simples, fenômenos ondulatórios e características das ondas sonoras. Teoria da audição e fonação: princípios físicos e eletroacústica. Elementos básicos de eletroacústicas para a compreenção dos aparelhos eletrônicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94655',
			obligatory: true
		},
		'FN101': {
			code: 'FN101',
			name: 'Perspectivas no Desenvolvimento Humano',
			ementa: 'Grandes questões da história da Psicologia em relação ao desenvolvimento desde a primeira infância até a idade adulta. Hereditariedade e meio ambiente. Estabilidade e mudança em Psicologia. Normalidade e anormalidade dos processos de desenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B95A',
			obligatory: true
		},
		'FN102': {
			code: 'FN102',
			name: 'História da Fonoaudiologia',
			ementa: 'A história da fonoaudiologia no Brasil e no mundo. Visão geral das áreas de atuação da fonoaudiologia e suas inter-relações com outras profissões. O papel social do fonoaudiólogo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B6B946',
			obligatory: true
		},
		'FN103': {
			code: 'FN103',
			name: 'Políticas Públicas, Direitos e Cidadania',
			ementa: 'Introdução de conceitos das Ciências Sociais para a compreensão das relações sociais que se estabelecem entre a Sociedade, Estado e Políticas Sociais. Neste contexto enfoca as questões ligadas à saúde, cidadania e direitos, considerando a especificidade dos diferentes grupos populacionais. Analisa especificamente as Políticas de Saúde e seu rebatimento na prática do profissional de Fonoaudiologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96346',
			obligatory: true
		},
		'FN104': {
			code: 'FN104',
			name: 'Fundamentos Teóricos do Trabalho com Família',
			ementa: 'Fundamentos teóricos para a compreensão da família. Discussão crítica de modelos e de tipos de família contemporânea. Estudo da dinâmica familiar, considerando as noções de ciclo vital e crises familiares, relacionando tais conhecimentos à prática fonoaudiológica, dirigida à realização de entrevistas e aos primeiros atendimentos à família.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99E46',
			obligatory: true
		},
		'HL111': {
			code: 'HL111',
			name: 'Introdução aos Estudos da Linguagem I',
			ementa: 'Visão geral do Fenômeno da linguagem e de seus métodos de investigação científica, considerando temas como: Linguagem e sociedade, linguagem e línguas naturais, a língua como objeto de estudo, o problema do objeto e do método, áreas da linguística, a linguística e outras ciências. Apresentação e problematização de fatos de linguagem pertinentes para as teorias linguísticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A846B9',
			obligatory: true
		},
		'MD223': {
			code: 'MD223',
			name: 'Atenção à Saúde no Brasil',
			ementa: 'Estudo do sistema de saúde brasileiro, destacando o papel da Saúde Pública, os problemas que enfrenta, suas tecnologias, organização em serviços e políticas. Política de saúde pública atual e processos de trabalho junto aos serviços de saúde.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#50B946',
			obligatory: true
		},
		'BS280': {
			code: 'BS280',
			name: 'Neurociências para a Fonoaudiologia',
			ementa: 'Conceituação geral do sistema nervoso, organização e função. Estruturas e organização do sistema nervoso central e periférico. Estudos dos órgãos dos sentidos e processamento sensorial relacionados com a visão, audição e equilíbrio. Estudo da anatomia e fisiologia dos principais sistemas corticais e subcorticais envolvidos no processo de fonação e audição. Integração entre sistema nervoso autônomo, límbico e a organização da linguagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4677B9',
			obligatory: true
		},
		'FN203': {
			code: 'FN203',
			name: 'Introdução à Ciência e ao Conhecimento',
			ementa: 'Perspectiva histórica e filosófica da ciência relacionada a uma reflexão sobre o método e sobre a questão da objetividade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9AD46',
			obligatory: true
		},
		'FN205': {
			code: 'FN205',
			name: 'Fundamentos da Audiologia I',
			ementa: 'Conceitos de acústica e de psicoacústica aplicados à audiologia. Revisão de anatomia e fisiologia do sistema auditivo periférico. Introdução à Audiologia. Apresentação dos equipamentos utilizados na avaliação audiológica básica. Calibração. Procedimentos de avaliação audiológica em adultos: anamnese, meatoscopia, testes acumétricos, audiometria tonal por via aérea e óssea, logoaudiometria. Classificação das perdas auditivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_105'],
			color: '#B94655',
			obligatory: true
		},
		'FN207': {
			code: 'FN207',
			name: 'Desenvolvimento Motor na Infância',
			ementa: 'Teorias do desenvolvimento motor. Desenvolvimento motor e sensorial ao longo da infância. Padrões posturais que caracterizam o desenvolvimento motor de crianças com alterações centrais. Procedimentos de avaliação do desenvolvimento motor e da postura na interface com as ações fonoaudiológicas no campo das alterações de linguagem e da motricidade oral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4694B9',
			obligatory: true
		},
		'FN208': {
			code: 'FN208',
			name: 'Promoção e Prática em Saúde Comunitária',
			ementa: 'Aprofundar o aprendizado nos conteúdos e na dinâmica da Saúde Pública permitindo aos alunos desenvolverem projetos de intervenção pactuados com usuários e/ou equipe em Unidades Básicas de Saúde.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD223'],
			color: '#50B946',
			obligatory: true
		},
		'FN209': {
			code: 'FN209',
			name: 'Motricidade Orofacial I',
			ementa: 'Noções básicas de motricidade orofacial na fonoaudiologia. Introdução às bases teóricas do desenvolvimento do sistema estomatognático e das funções orofaciais na motricidade orofacial. Compreensão do padrão de normalidade e principais desvios ao longo do desenvolvimento. Procedimentos de avaliação, intervenção terapêutica e interface interdisciplinar na motricidade orofacial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94663',
			obligatory: true
		},
		'FN504': {
			code: 'FN504',
			name: 'Metodologia da Pesquisa I',
			ementa: 'Elementos teóricos e operacionais básicos da pesquisa clássica. Tipos e controle de variáveis. Delineamento de grupos e de sujeito único. Metodologia observacional. Estudos experimentais e correlacionais. Análise quantitativa de dados - fundamentos da análise estatística. A questão da divulgação dos resultados de pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6DB946',
			obligatory: true
		},
		'FN710': {
			code: 'FN710',
			name: 'A Interdisciplinaridade na Reabilitação das Deficiências Sensoriais',
			ementa: 'Aborda conteúdos teóricos e práticos referentes às deficiências sensoriais (visão subnormal, cegueira e surdez). Introduz e conceitua procedimentos metodológicos de avaliação em intervenção e recursos utilizados nos processos terapêuticos, sob uma perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A8B946',
			obligatory: true
		},
		'HL201': {
			code: 'HL201',
			name: 'Introdução à Semântica e à Pragmática',
			ementa: 'Dimensões da significação: sentido, referência. Significado lexical e relações de sentido. Enunciação, subjetividade e sentido. Significação e uso da linguagem: O papel do contexto e do cotexto. A construção dos sentidos implícitos na interlocução. Performatividade e atos da fala.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5FB946',
			obligatory: true
		},
		'HL221': {
			code: 'HL221',
			name: 'Fonética e Fonologia',
			ementa: 'Os aspectos fônicos da linguagem; a produção da fala; aparelho fonador; processos aerodinâmicos, fonatórios e articulatórios; modos e pontos de articulação; consoantes e vogais; articulações secundárias; a sílaba; a prosódia do ritmo e da entoação; prática de produção, reconhecimento e transcrição dos sons da linguagem; a organização dos sons da fala em sistemas fonológicos; fonema, alofone, arquifonema: as noções de oposição, contraste, distribuição complementar, neutralização; traços distintivos; processos e representações fonológicas; prática de análise fonológica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7CB946',
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
			color: '#B97246',
			obligatory: true
		},
		'FN301': {
			code: 'FN301',
			name: 'Desenvolvimento da Infância à Idade Adulta II',
			ementa: 'Desenvolvimento da cognição ao longo da vida. Teorias de desenvolvimento humano: primeira infância, anos pré-escolares e escolares, adolescência, vida adulta, velhice. Processos cognitivos. Função simbólica. Inteligência, atenção e memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B2',
			obligatory: true
		},
		'FN302': {
			code: 'FN302',
			name: 'Genética Médica Aplicada à Fonoaudiologia I',
			ementa: 'Genes e cromossomos. Mitose e meiose. Estudo do cariótipo humano; origem e quadro clínico das principais cromossomopatias. A transmissão hereditária dos caracteres: reconhecimento dos padrões de herança autossômicos dominante e recessivo, ligados ao X e herança mitocondrial. Padrões não clássicos de herança. Consanguinidade. Herança multifatorial. Princípio de genética de populações. Princípios de genética molecular. Fatores genéticos na deficiência auditiva e outras condições determinantes de distúrbios da linguagem. Agentes teratogênicos e fatores peri e pós-natais associados à surdez.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'FN304': {
			code: 'FN304',
			name: 'Relações Interpessoais e Dinâmica de Grupo',
			ementa: 'Estudo das relações interpessoais: evolução histórica e concepções atuais. Principais correntes de dinâmica de grupo e suas implicações práticas. Diferentes vivências de grupo e análise desse processo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7C46B9',
			obligatory: true
		},
		'FN306': {
			code: 'FN306',
			name: 'Introdução à Ética',
			ementa: 'Diferentes noções sobre ética, formuladas tanto por filósofos gregos quanto por autores contemporâneos, enfatizando a reflexão sobre valores e normas, para introduzir o estudo da ética no campo profissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8AB946',
			obligatory: true
		},
		'FN307': {
			code: 'FN307',
			name: 'Fundamentos da Audiologia II',
			ementa: 'Procedimentos de avaliação audiológica em adultos: logoaudiometria, medidas de imitância acústica, testes supraliminares. Características audiológicas das principais alterações que acometem a orelha externa, média e interna e VIII par craniano. Treino prático nos equipamentos audiológicos (audiômetro, imitanciômetro clínico e portátil e equipamento para captação das EOA) dos testes da avaliação audiológica em adultos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['FN205'],
			color: '#B94655',
			obligatory: true
		},
		'FN604': {
			code: 'FN604',
			name: 'Metodologia da Pesquisa II',
			ementa: 'Estudo das abordagens qualitativas de pesquisa, discutindo suas características e especificidades. Trabalha as etapas e os instrumentos deste tipo de pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464BB9',
			obligatory: true
		},
		'HL304': {
			code: 'HL304',
			name: 'Introdução à Teoria Gramatical',
			ementa: 'Introdução ao estudo teórico das relações gramaticais: 1. Conceitos de gramática. 2. Propriedades dos itens lexicais e funcionais. 3. Funções sintáticas e estrutura de constituintes. 4. Papéis temáticos. 5. Análise e representação de estruturas gramaticais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9469E',
			obligatory: true
		},
		'HL321': {
			code: 'HL321',
			name: 'Fonética Experimental',
			ementa: 'Observação, experimento e medida. Instrumentos de medida em Fonética. O papel da Fonética Acústica para tornar a fala acessível à mensuração. Elementos de Fonética Acústica: onda sonora, espectro. A teoria fonte-filtro da produção da fala. Principais características acústicas das vogais. Principais características acústicas das consoantes. Acústica dos traços prosódicos. O papel das pistas acústicas na percepção de fala. Aspectos cognitivos e linguísticos da percepção de fala.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['HL221'],
			color: '#7CB946',
			obligatory: true
		},
		'MD215': {
			code: 'MD215',
			name: 'Epidemiologia e Saúde',
			ementa: 'Definição de uso da Epidemiologia. População e saúde. Noções de demografia. Transição demográfica e epidemiológica. A medida das condições de saúde - fontes de informações. Indicadores epidemiológicos. Mortalidade geral e proporcional. Mortalidade Infantil. A medida das doenças, incidência, prevalência, letalidade. Diagnóstico descritivo em Epidemiologia. Medidas de associação e efeito. A Epidemiologia e o controle das doenças. Epidemia e endemias. Investigação epidemiológica. Banco de dados. Vigilância Epidemiológica. Programas de controle de doenças. Validação de testes diagnósticos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A3',
			obligatory: true
		},
		'MD350': {
			code: 'MD350',
			name: 'Funções Corticais na Infância',
			ementa: 'Fornecer conhecimentos básicos sobre neuropsicologia infantil e funções corticais superiores, bem como relacionar tais conhecimentos com o desenvolvimento e a aprendizagem da criança.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS280'],
			color: '#4677B9',
			obligatory: true
		},
		'FN400': {
			code: 'FN400',
			name: 'Patologias dos Órgãos da Fala e Audição',
			ementa: 'Estudo das afecções otorrinolaringológicas e seus impactos funcionais, na respiração, sucção, mastigação, deglutição, audição e fonação. Estudo sistemático das afecções otorrinolaringológicas com interpretação fisiopatológica, descrição sumária das situações clínicas com alterações funcionais e dos procedimentos terapêuticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF180'],
			color: '#B97246',
			obligatory: true
		},
		'FN401': {
			code: 'FN401',
			name: 'Audiologia I',
			ementa: 'Observação dos atendimentos realizados em adultos com queixas auditivas. Discussão dos casos clínicos considerando-se a compatibilidade dos resultados obtidos entre os testes aplicados e as características audiológicas relacionadas às alterações do sistema auditivo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN307'],
			color: '#B94655',
			obligatory: true
		},
		'FN404': {
			code: 'FN404',
			name: 'Aspectos Teóricos e Metodológicos da Avaliação de Linguagem',
			ementa: 'Objetivos, funções e limites da avaliação de linguagem. Visão crítica das baterias de testes-padrão relacionada à especificidade da oralidade e da escrita e ao funcionamento discursivo da linguagem. Análise de fatos e dados de linguagem diferenciando-os de erros e déficits. Discussão sobre os vários procedimentos avaliativos, aplicados a crianças e a adultos, do ponto de vista filosófico, epistemológico e metodológico. A relação da linguagem com outros processos cognitivos. Apresentação e discussão de princípios e versões protocolares discursivamente informados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#99B946',
			obligatory: true
		},
		'FN407': {
			code: 'FN407',
			name: 'Estágio de Observação de Prática Fonoaudiológica',
			ementa: 'Observação da atuação fonoaudiológica na clínica-escola e nos serviços fonoaudiológicos oferecidos na Instituição.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#B946AD',
			obligatory: true
		},
		'FN408': {
			code: 'FN408',
			name: 'Fundamentos da Língua Brasileira de Sinais',
			ementa: 'Abordar aspectos linguísticos da Língua Brasileira de Sinais (LIBRAS) como a fonologia, morfologia e sintaxe, possibilitando ao aluno o uso desta língua em contextos reais de comunicação. Os alunos terão oportunidade e interação com professores surdos por meio de um curso introdutório da LIBRAS.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6D46B9',
			obligatory: true
		},
		'FN409': {
			code: 'FN409',
			name: 'Motricidade Orofacial II',
			ementa: 'Produção teórica das principais doenças, distúrbios e desvios na motricidade orofacial. Subsídios teóricos para a compreensão das alterações miofuncionais fonoaudiológicas, procedimentos de avaliação, intervenção terapêutica e alta.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN209'],
			color: '#B94663',
			obligatory: true
		},
		'FN413': {
			code: 'FN413',
			name: 'Fundamentos para a Prática em Saúde Coletiva',
			ementa: 'Conceituação, tipologia e finalidade das organizações sociais. Análises das instituições e a atuação do fonoaudiólogo em serviços públicos, com ênfase no seu papel de promotor da saúde atuando em equipes multidisciplinares. Abordagem comunitária. A saúde e a prevenção da doença. A inserção da fonoaudiologia na saúde pública no Brasil. A prevenção e promoção de saúde em fonoaudiologia. A pesquisa em saúde pública na área fonoaudiológica: os estudos epidemiológicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD223'],
			color: '#50B946',
			obligatory: true
		},
		'FN420': {
			code: 'FN420',
			name: 'Estudo de Casos na Clínica Fonoaudiológica: Enfoque Multidisciplinar',
			ementa: 'Discussão multidisciplinar e desenvolvimento do raciocínio clínico de casos na fonoaudiologia',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#46B986',
			obligatory: true
		},
		'FN904': {
			code: 'FN904',
			name: 'Atividades para o Aprimoramento Cultural, Acadêmico e Científico I',
			ementa: 'Participação em atividades complementares ao ensino e aprendizagem (palestras, cursos, congressos, iniciação científica, atividades de monitoria, atividades no centro acadêmico, participação em ligas, empresas Júnior, representação discente e organização de atividades na Universidade, atividades sociais, voluntariado, visitas técnicas, atividades culturais, participação em campanhas promovidas pelo curso e outros).',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:2, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#465AB9',
			obligatory: true
		},
		'HL311': {
			code: 'HL311',
			name: 'Fundamentos da Aquisição de Linguagem',
			ementa: 'A disciplina visa levar a uma reflexão sobre a fala da criança, sobre a escrita inicial e sobre certos fenômenos que, genericamente, podem ser compreendidos como patologias da fala infantil, mas que no curso serão debatidos e interrogados à luz de uma teorização sobre a aquisição de linguagem. As questões empíricas serão tratadas a partir da análise de corpora da fala e escrita da criança. Serão estudados aspectos estruturais da fala da criança no processo de aquisição da língua materna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4668B9',
			obligatory: true
		},
		'HL832': {
			code: 'HL832',
			name: 'Análise do Discurso',
			ementa: 'Análise linguística e análise discursiva. Análise do Discurso e Pragmática. Enunciação. Condições de produção, história, ideologia. A questão da subjetividade. A questão do sentido e a da leitura. Metodologias de análise. Discurso e gêneros textuais. Intertextualidade e interdiscursividade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8A46B9',
			obligatory: true
		},
		'MD410': {
			code: 'MD410',
			name: 'Aspectos Neurológicos do Desenvolvimento e seus Distúrbios',
			ementa: 'Cérebro e linguagem. Semiologia neurológica. Escalas de neurodesenvolvimento. Definição e classificação da deficiência intelectual. Epilepsia. Paralisia Cerebral. Etiologias do retardo do desenvolvimento neuropsicomotor. Distúrbio específico de linguagem. A interseção entre neurologia e fonoaudiologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9468F',
			obligatory: true
		},
		'FN501': {
			code: 'FN501',
			name: 'Audiologia II',
			ementa: 'Desenvolvimento da função auditiva. Avaliação audiológica na infância. Triagem auditiva neonatal. Discussão de políticas de saúde auditiva.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN401'],
			color: '#B94655',
			obligatory: true
		},
		'FN506': {
			code: 'FN506',
			name: 'Estágio em Audiologia I',
			ementa: 'Avaliação audiológica em pacientes adultos e crianças.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN401'],
			color: '#B94655',
			obligatory: true
		},
		'FN507': {
			code: 'FN507',
			name: 'Estágio em Avaliação de Linguagem I',
			ementa: 'Aplicação de procedimentos avaliativos referentes à alteração de voz, linguagem oral, linguagem escrita e/ou audição em crianças, adolescentes, adultos e idosos. Análise de exames complementares. Elaboração de diagnóstico fonoaudiológico e relatórios de avaliação com indicação para o processo terapêutico. Discussão sobre o diagnóstico e o encaminhamento.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN404'],
			color: '#99B946',
			obligatory: true
		},
		'FN509': {
			code: 'FN509',
			name: 'Estágio em Fonoaudiologia Clínica I',
			ementa: 'Início do atendimento clínico. As etapas frente ao processo clínico: levantamento dos dados de prontuário, levantamento bibliográfico para estudo de caso, apresentação e análise de exames complementares, planejamento terapêutico, elaboração de relatórios de avaliação clínica e de acompanhamento terapêutico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: '',
			color: '#4686B9',
			obligatory: true
		},
		'FN510': {
			code: 'FN510',
			name: 'Aquisição, Desenvolvimento e Processos Terapêuticos da Surdez',
			ementa: 'Fornecer subsídios teóricos e práticos sobre o processo de aquisição e desenvolvimento de linguagem oral, leitura-escrita e língua de sinais do sujeito surdo, relacionando-se o processo clínico-terapêutico ao educacional. E, partindo das questões linguísticas, abordar a relação sujeito/língua/identidade na surdez.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN408'],
			color: '#6D46B9',
			obligatory: true
		},
		'FN511': {
			code: 'FN511',
			name: 'Linguagem e Intervenção Fonoaudiológica I',
			ementa: 'O acompanhamento fonoaudiológico das alterações de fala e da gagueira. Discussão dos conceitos de fluência e de disfluência. A prevenção, e avaliação e o acompanhamento clínico-terapêutico das alterações de fala e de gagueira. A intervenção terapêutica individual e em grupo. Atuação multi e interdisciplinar e em diferentes contextos - familiar, escolar e outros. Atuação fonoaudiológica na atenção básica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5F46B9',
			obligatory: true
		},
		'FN512': {
			code: 'FN512',
			name: 'Fonoaudiologia - Voz I',
			ementa: 'Discussão do conceito de voz em processos normais e alterados. Revisão da fisiologia fonatória. Conceitos de avaliação clínica, laringológica e acústica da voz.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN400'],
			color: '#B97246',
			obligatory: true
		},
		'FN513': {
			code: 'FN513',
			name: 'Estágio em Fonoaudiologia e Saúde Coletiva I',
			ementa: 'Estágio em instituições e em serviços públicos de saúde e educação, para diagnóstico, planejamento e realização de ação fonoaudiológica, contemplando atividades de prevenção, promoção à saúde, diagnóstico e reabilitação, respeitando as características loco-regionais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:5},
			requisitos: ['FN404', 'FN409'],
			color: '#A98055',
			obligatory: true
		},
		'HL503': {
			code: 'HL503',
			name: 'Processamento de Linguagem',
			ementa: 'Percepção e produção da fala. Leitura e processamento da linguagem: processamento lexical, parsing e processamento do sentido.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94672',
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
		'FN601': {
			code: 'FN601',
			name: 'Audiologia III',
			ementa: 'Anatomia e fisiologia do sistema nervoso auditivo central. Processamento auditivo: conceito, testes utilizados para avaliação, análise dos resultados, clsssificação dos distúrbios do processamento auditivo e orientação a pais e escola. Noções teóricas de exames eletrofisiológicos da audição. Fundamentação teórica da avaliação e reabilitação da função vestibular.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN401'],
			color: '#B94655',
			obligatory: true
		},
		'FN606': {
			code: 'FN606',
			name: 'Estágio em Audiologia II',
			ementa: 'Avaliação audiológica em pacientes adultos e crianças.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN506'],
			color: '#B94655',
			obligatory: true
		},
		'FN607': {
			code: 'FN607',
			name: 'Estágio em Avaliação de Linguagem II',
			ementa: 'Aplicação de procedimentos avaliativos referentes a alteração de voz, linguagem oral, linguaguem escrita e/ou audição em crianças, adolescentes, adultos ou idosos. Análise de exames complementares. Elaboração de diagnóstico fonoaudiológico e relatórios de avaliação com indicação para o processo terapêutico. Discussão sobre o diagnóstico e encaminhamento.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN507'],
			color: '#99B946',
			obligatory: true
		},
		'FN609': {
			code: 'FN609',
			name: 'Estágio em Fonoaudiologia Clínica II',
			ementa: 'Continuidade no acompanhamento terapêutico de sujeitos já avaliados. Análise do processo terapêutico: evolução e prognóstico. Discussão em grupo dos casos atendidos pelos alunos sob a orientação de um docente. Elaboração de relatórios de acompanhamento terapêutico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B994',
			obligatory: true
		},
		'FN611': {
			code: 'FN611',
			name: 'Linguagem e Intervenção Fonoaudiológica II',
			ementa: 'O acompanhamento fonoaudiológico das alterações de linguagem decorrentes de lesões ou disfunções neurológicas (afasia, paralisia cerebral, Doença de Parkinson e outras) e das alterações de escrita. A avaliação e acompanhamento clínico-terapêutico. Intervenção fonoaudiológica e comunicação suplementar e/ou alternativa. Atuação multi e interdisciplinar e em diferentes contextos-familiar, escolar e outros. Atuação fonoaudiológica na atenção básica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94681',
			obligatory: true
		},
		'FN612': {
			code: 'FN612',
			name: 'Fonoaudiologia - Voz II',
			ementa: 'Discussão do conceito de voz em processos normais e alterados. Revisão da fisiologia fonatória. Conceitos de avaliação clínica, laringológica e acústica da voz.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN512'],
			color: '#B97246',
			obligatory: true
		},
		'FN613': {
			code: 'FN613',
			name: 'Estágio em Fonoaudiologia e Saúde Coletiva II',
			ementa: 'Estágio em instituições e em serviços públicos de saúde e educação, para diagnóstico, planejamento e realização de ação fonoaudiológica, contemplando atividades de prevenção, promoção à saúde, diagnóstico e reabilitação, respeitando as características loco-regionais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['FN513'],
			color: '#A98055',
			obligatory: true
		},
		'FN906': {
			code: 'FN906',
			name: 'Atividades para o Aprimoramento Cultural, Acadêmico e Científico II',
			ementa: 'Participação em atividades complementares ao ensino e aprendizagem (palestras, cursos, congressos, iniciação científica, atividades de monitoria, atividades no centro acadêmico, participação em ligas, empresas Júnior, representação discente e organização de atividades na Universidade, atividades sociais, voluntariado, visitas técnicas, atividades culturais, participação em campanhas promovidas pelo curso e outros).',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:2, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#5046B9',
			obligatory: true
		},
		'HL053': {
			code: 'HL053',
			name: 'Neurolinguística',
			ementa: 'A disciplina pretende desenvolver os seguintes aspectos: a)histórico do nascimento da Neurolinguística e suas implicações para as relações entre a Linguística, as Neurociências e outros domínios do estudo da cognição humana; b)aspectos biológicos e socioculturais do funcionamento cerebral e da linguagem; c)discussão em torno das relações entre o normal e o patológico nos estudos da linguagem; d)análise do método clínico e de procedimentos avaliativos relativos à linguagem; e)teorização linguística das afasias e outras patologias linguístico-cognitivas; f)a relação entre oralidade e escrita.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9946B9',
			obligatory: true
		},
		'FN206': {
			code: 'FN206',
			name: 'Sistemas de Linguagem Não-Verbal e Linguagens Alternativas',
			ementa: 'Apresenta fundamentos de linguagens não-verbais e discute sua relação com a atuação fonoaudiológica. Analisa os processos de representação como modalidades culturais de constituição de significado. Apresenta fundamentos sobre as linguagens da arte (artes visuais, dança, teatro e música), e discute práticas de aplicação nos estágios em fonoaudiologia para as várias faixas etárias. Estuda os fundamentos de desenvolvimento do desenho na criança e no adolescente. Discute sistemas de comunicação suplementar e alternativa e sua aplicação nos estágios supervisionados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95546',
			obligatory: true
		},
		'FN502': {
			code: 'FN502',
			name: 'Fonoaudiologia e Saúde do Trabalhador',
			ementa: 'A relação saúde-trabalho: conceitos de trabalho, processo e organização do trabalho. Histórico e paradigma da relação saúde-trabalho. Políticas em Saúde do Trabalhador(a), vigilância e informação em saúde do trabalhador(a). Organização de serviços para a Saúde do Trabalhador(a).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN307'],
			color: '#B94655',
			obligatory: true
		},
		'FN701': {
			code: 'FN701',
			name: 'Audiologia IV',
			ementa: 'Características físicas e eletroacústicas de próteses auditivas. Etapas do processo de seleção e adaptação de próteses auditivas em diferentes faixas etárias. Procedimentos audiológicos inerentes a este processo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B977',
			obligatory: true
		},
		'FN704': {
			code: 'FN704',
			name: 'Disfagia I',
			ementa: 'Anatomia e Fisiologia da deglutição orofaríngea normal e alterada. Conceito de disfagia. Disfagia Mecânica e Disfagia Neurogênica. Dificuldades de deglutição nos diferentes ciclos de vida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN400'],
			color: '#B97246',
			obligatory: true
		},
		'FN705': {
			code: 'FN705',
			name: 'Monografia I',
			ementa: 'Planejamento e desenvolvimento de trabalho de conclusão de curso em fonoaudiologia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['FN504', 'FN604'],
			color: '#5A8280',
			obligatory: true
		},
		'FN706': {
			code: 'FN706',
			name: 'Estágio em Audiologia III',
			ementa: 'Triagem auditiva <i>neonatal</i>. Avaliação audiológica básica. Procedimento avançados do diagnóstico audiológico.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:5},
			requisitos: ['FN606'],
			color: '#B94655',
			obligatory: true
		},
		'FN712': {
			code: 'FN712',
			name: 'Estágio em Avaliação e Terapia Fonoaudiológica em Voz I',
			ementa: 'Avaliação e acompanhamento fonoaudiológico de sujeitos com queixas vocais, orientação e aprimoramento vocal de sujeitos profissionais da voz. Etapas frente ao processo clínico: levantamento dos dados de prontuário, planejamento terapêutico, elaboração de relatórios de acompanhamento terapêutico e encaminhamentos.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:5},
			requisitos: ['FN512'],
			color: '#B97246',
			obligatory: true
		},
		'FN713': {
			code: 'FN713',
			name: 'Estágio em Avaliação e Terapia Fonoaudiológica em Linguagem I',
			ementa: 'Acompanhamento fonoaudiológico em linguagem, especialmente em gagueira e neurologia. Etapas frente ao processo clínico em uma abordagem integral e humanizada: estudo de caso, avaliação e planejamento terapêutico, registro e análise do material terapêutico, processo terapêutico, atuação junto à família, escola e outros contextos, condutas e encaminhamentos. Formas de atendimento: individual ou grupal. Abordagem multi e interdisciplinar.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:4},
			requisitos: ['FN511', 'FN611'],
			color: '#8C469D',
			obligatory: true
		},
		'FN714': {
			code: 'FN714',
			name: 'Estágio em Motricidade Orofacial I',
			ementa: 'Intervenção clínica fonoaudiológica na área da motricidade orofacial em crianças, adolescentes, adultos e idosos. Compreensão sobre o processo envolvido na prática clínica, entrevista, anamnese, avaliação, diagnóstico, prognóstico, encaminhamento e alta.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:4},
			requisitos: ['FN607'],
			color: '#99B946',
			obligatory: true
		},
		'FN715': {
			code: 'FN715',
			name: 'Estágio em Fonoaudiologia aplicada à Neonatologia e Saúde do Trabalhador I',
			ementa: 'Desenvolver conhecimentos, habilidades e atitudes em relação à atuação fonoaudiológica em instituições prioritariamente públicas. Atividades teórico-práticas em Unidade Hospitalar-Unidade de Neonatologia, unidades de saúde da rede SUS Campinas e outros equipamentos sociais.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:5},
			requisitos: ['FN401'],
			color: '#B94655',
			obligatory: true
		},
		'FN804': {
			code: 'FN804',
			name: 'Disfagia II',
			ementa: 'Avaliação fonoaudiológica clínica e instrumental das disfagias. Bases da intervenção fonoaudiológica em disfagia mecânica. Atuação fonoaudiológica em disfagia neonatal e em disfagias neurogênicas. Atuação interdisciplinar em disfagias orofaríngeas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FN704'],
			color: '#B97246',
			obligatory: true
		},
		'FN805': {
			code: 'FN805',
			name: 'Monografia II',
			ementa: 'Desenvolvimento e finalização de trabalho de conclusão de curso em fonoaudiologia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['FN705'],
			color: '#5A8280',
			obligatory: true
		},
		'FN806': {
			code: 'FN806',
			name: 'Estágio de Audiologia IV',
			ementa: 'Triagem auditiva neonatal. Avaliação do processamento auditivo. Processo de seleção e adaptação de próteses auditivas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FN701'],
			color: '#46B977',
			obligatory: true
		},
		'FN812': {
			code: 'FN812',
			name: 'Estágio em Avaliação e Terapia Fonoaudiológica em Voz II',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser /> </w:WordDocument> </xml><![endif]--> Avaliação e acompanhamento fonoaudiológico de sujeitos com queixas vocais e orientação e aprimoramento vocal de sujeitos profissionais da voz. Etapas frente ao processo clínico: levantamento dos dados de prontuário, planejamento terapêutico, elaboração de relatórios de acompanhamento terapêutico e encaminhamentos.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#46A3B9',
			obligatory: true
		},
		'FN813': {
			code: 'FN813',
			name: 'Estágio em Avaliação e Terapia Fonoaudiológica em Linguagem II',
			ementa: 'Acompanhamento fonoaudiológico em linguagem, especialmente em gagueira e neurologia. Etapas frente ao processo clínico em uma abordagem integral e humanizada: estudo de caso, avaliação e planejamento terapêutico, registro e análise do material terapêutico, processo terapêutico, atuação junto à família, escola e outros contextos, condutas e encaminhamentos. Formas de atendimento: individual ou grupal. Abordagem multi e interdisciplinar.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#B646B9',
			obligatory: true
		},
		'FN814': {
			code: 'FN814',
			name: 'Estágio em Motricidade Orofacial II',
			ementa: 'Intervenção clínica fonoaudiológica na área da motricidade orofacial em crianças, adolescentes, adultos e idosos. Compreensão sobre o processo envolvido na prática clínica, entrevista, anamnese, avaliação, diagnóstico, prognóstico, encaminhamento e alta.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: '',
			color: '#B98F46',
			obligatory: true
		},
		'FN815': {
			code: 'FN815',
			name: 'Estágio em Fonoaudiologia Aplicada à Neonatologia e Saúde do Trabalhador II',
			ementa: 'Desenvolver conhecimentos, habilidades e atitudes em relação à atuação fonoaudiológica em instituições prioritariamente públicas. Atividades teórico-práticas em Unidade Hospitalar-Unidade de Neonatologia, unidades de saúde da rede SUS Campinas e outros equipamentos sociais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:1, C:4},
			requisitos: ['FN502'],
			color: '#B94655',
			obligatory: true
		},
		'FN908': {
			code: 'FN908',
			name: 'Atividades para o Aprimoramento Cultural, Acadêmico e Científico III',
			ementa: 'Participação em atividades complementares ao ensino e aprendizagem (palestras, cursos, congressos, iniciação científica, atividades de monitoria, atividades no centro acadêmico, participação em ligas, empresas Júnior, representação discente e organização de atividades na Universidade, atividades sociais, voluntariado, visitas técnicas, atividades culturais, participação em campanhas promovidas pelo curso e outros).',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#46B2B9',
			obligatory: true
		}
	}
};

export default catalogue;
