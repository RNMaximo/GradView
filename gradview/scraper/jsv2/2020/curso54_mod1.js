const catalogue = {
	totalCredits: 187,
	maxCreditsSem: 39,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GF301', 'GN107', 'GN111', 'GN101', 'GF129', 'GF136']
		},
		'sem-2': {
			id: '2',
			subjects: ['GN301', 'GN105', 'GF503', 'GF410', 'GF601', 'GF402']
		},
		'sem-3': {
			id: '3',
			subjects: ['GF306', 'GF604', 'GF303', 'GF302', 'ME173', 'LA122']
		},
		'sem-4': {
			id: '4',
			subjects: ['GF401', 'GN304', 'GF413', 'LA242', 'GF412', 'GF507']
		},
		'sem-5': {
			id: '5',
			subjects: ['GF501', 'GF702', 'GF506', 'GF502', 'GF508']
		},
		'sem-6': {
			id: '6',
			subjects: ['GF405', 'BT201', 'GF605', 'GF801', 'ELET06', 'GF606']
		},
		'sem-7': {
			id: '7',
			subjects: ['GF703', 'GF403', 'ELET07', 'GF714', 'GF602', 'GF603']
		},
		'sem-8': {
			id: '8',
			subjects: ['GF805', 'GF803', 'GF406', 'GF814', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['GE403', 'GE405', 'GE702', 'GE801', 'GE911', 'GE912', 'GE913', 'GE914', 'GE915', 'GE916', 'GF001', 'GF002', 'GF003', 'GF100', 'GF102', 'GF105', 'GF106', 'GF107', 'GF111', 'GF112', 'GF115', 'GF120', 'GF121', 'GF123', 'GF124', 'GF125', 'GF126', 'GF130', 'GF131', 'GF132', 'GF133', 'GF134', 'GF135', 'GF505', 'GN110', 'GN207', 'GN208', 'GT105'],
		},
	},

	subjects: {
		'GF129': {
			code: 'GF129',
			name: 'Geografia Econômica',
			ementa: 'Fornecer instrumental conceitual básico da Economia Política do Território. Para tanto, elencamos os seguintes pontos: o espaço geográfico como condicionante econômico-social; as divisões técnicas, social e territorial do trabalho; centro, periferia e difusão das modernizações; cadeias e circuitos espaciais produtivos; concentração e centralização dos capitais; o território nacional como mediação entre os fluxos globais do capital e as economias regionais; monopólios, oligopólios e alienação dos espaços no Terceiro Mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B99646',
			obligatory: true
		},
		'GF136': {
			code: 'GF136',
			name: 'Cartografia Sistemática',
			ementa: 'Introdução à Cartografia. Princípios de Geodésia. Escalas. Sistemas de Coordenadas.Projeções Cartográficas. Sistema Cartográfico Nacional (SCN). Uso de Cartas, Mapas ePlantas em Ciências da Terra. Sistema de Posicionamento Global (GPS). Elementos deTopografia. Cartografia Digital. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B982',
			obligatory: true
		},
		'GF301': {
			code: 'GF301',
			name: 'História do Pensamento Geográfico',
			ementa: 'O conhecimento geográfico no Mundo Antigo e no Mundo Medieval. Período Renascentista e conhecimento do mundo. Filosofia, Ciência e Geografia dos Modernos. A Institucionalização da Geografia, Estado, colonialismo e conhecimento geográfico. O Pensamento Libertário e a geografia. Determinismo e possibilismo. Difusão das Escolas de Geografia. Renovação da geografia e redefinição do objeto. Geografia Pragmática e planejamento econômico. As geografias radicais. Tendências teórico-metodológicas atuais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#82B946',
			obligatory: true
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4678B9',
			obligatory: true
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico. Recontextualização dos conceitos e conteúdos da geografia humana desenvolvidos no processo de escolarização e na universidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6446B9',
			obligatory: true
		},
		'GN111': {
			code: 'GN111',
			name: 'Sistema Terra',
			ementa: 'Conceitos básicos de geologia. Origem do universo e origem do Sistema Solar. Estrutura e composição da Terra. Dinâmica interna do planeta Terra e a tectônica de placas. Materiais terrestres: rochas e minerais. O registro geológico e a escala do tempo geológico. Noções dos processos de interações entre os sistemas terrestres (litosfera, hidrosfera, biosfera, atmosfera e antroposfera). Mapas geológicos e noções básicas de trabalhos de campo em geologia. Sistema Terra e a humanidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94664',
			obligatory: true
		},
		'GF402': {
			code: 'GF402',
			name: 'História Econômica, Política e Sociedade do Brasil',
			ementa: 'Análise do processo de formação do Brasil contemporâneo. A inserção do país na divisão internacional do trabalho (1850-1930). Os principais fatores de integração da economia nacional (1870-1950). As mudanças políticas e sociais do período republicano.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B9468C',
			obligatory: true
		},
		'GF410': {
			code: 'GF410',
			name: 'Climatologia I',
			ementa: 'Tempo atmosférico e clima; Distribuição e balanço global de radiação; Composição e estrutura da atmosfera; Atmosfera pretérita e atual; Elementos do clima (temperatura, pressão atmosférica, umidade do ar, precipitações atmosféricas) - definições, unidades de medição, controles de grande escala, representação das suas variações espaço-temporais e suas influências no condicionamento de aspectos físicos e na vida; Gradiente vertical da atmosfera; Nuvens; Circulação geral da atmosfera (convectiva e meridional); Massas de ar, frentes e perturbações atmosféricas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B9AA',
			obligatory: true
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B9465A',
			obligatory: true
		},
		'GF601': {
			code: 'GF601',
			name: 'Geografia Regional (Teoria e Regionalização Mundial)',
			ementa: 'A Região como categoria de análise da Geografia. Sistemas políticos, econômicos e quadros naturais na organização do espaço mundial. A formação contemporânea dos grandes blocos econômicos e geopolíticos no contexto da globalização da economia e mundialização da cultura. Análise téorica e através de estudos de casos das divisões: países capitalistas/países socialistas, centro-periferia, desenvolvimento / subdesenvolvimento, Norte/Sul. Potências econômicas mundiais. Analisar detalhadamente um continente (a escolher) como estudo de caso.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9AA46',
			obligatory: true
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#46B4B9',
			obligatory: true
		},
		'GN301': {
			code: 'GN301',
			name: 'História das Teorias Econômicas',
			ementa: 'Elementos de economia. Análise do surgimento e da evolução da Economia Política como ramo do conhecimento científico. As principais escolas do pensamento econômico e suas respectivas contribuições ao entendimento do mundo em que vivemos. Disciplinas propedêuticas para o estudo da Economia dos Recursos Naturais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'GF302': {
			code: 'GF302',
			name: 'Sensoriamento Remoto',
			ementa: '1.Sensores remotos fotográficos 2.Sensores remotos orbitais 3.Espectro eletromagnético 4.Comportamento espectral de objetos geográficos 5.Estrutura das imagens orbitais 6.Processamento digital de imagens 7.Classificação digital de imagens 8.Geração de mapas temáticos a partir de imagens classificadas 9.Tópicos especiais de sensoriamento remoto para Geografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#78B946',
			obligatory: true
		},
		'GF303': {
			code: 'GF303',
			name: 'Geomorfologia',
			ementa: 'Estudos das formas de relevo, gênese e evolução. Análise das inter-relações: rocha X solo X clima X relevo, com ênfase nos aspectos tectono-estruturais. Unidades morfoestruturais do globo terrestre. Processos endógenos no modelado do relevo. Teorias e técnicas de mapeamento geomorfológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GN111'],
			color: '#B94664',
			obligatory: true
		},
		'GF306': {
			code: 'GF306',
			name: 'Geografia Regional: América Latina',
			ementa: 'Os atributos naturais do continente americano enquanto recursos materiais de poder: recursos naturais, biodiversidade, recursos hídricos e energéticos. Os territórios e a formação diferenciada dos estados nacionais. A invenção da América Latina como categoria regional. A geopolítica global e a geopolítica da América Latina. América Latina: industrialização, urbanização e metropolização. A integração regional na América Latina. As geografias dos organismos supranacionais na América Latina. As populações tradicionais do continente americano. Atores extra-regionais na América Latina (EUA, EU e Rússia)',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5AB946',
			obligatory: true
		},
		'GF604': {
			code: 'GF604',
			name: 'Geografia Urbana',
			ementa: 'Definição e evolução do fenômeno urbano. As cidades: os sítios, o crescimento horizontal e vertical, a estrutura urbana, as áreas funcionais, o sistema viário e a circulação. A interdisciplinaridade dos estudos urbanos. Centralidade, hierarquia e redes urbanas. Conjuntos urbanos complexos: áreas metropolitanas e conurbação. Valor e renda da terra. Meio ambiente e qualidade de vida no meio urbano. Paisagens, usos do solo e culturas urbanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B946A0',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
			requisitos: '',
			color: '#50B946',
			obligatory: true
		},
		'ME173': {
			code: 'ME173',
			name: 'Estatística Descritiva',
			ementa: 'População e amostras. Levantamento e apuração de dados. Dados registrados e não registrados: censo e estimativa de população. Descrição de dados amostrais: tabelas, gráficos, medidas de posição e de variabilidade. Noções elementares de probabilidade. Análise de uma distribuição de freqüência de natureza qualitativa: coeficientes e índices mais usados. Elementos de demografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9646B9',
			obligatory: true
		},
		'GF401': {
			code: 'GF401',
			name: 'Metodologia da Geografia',
			ementa: 'Bases epistemológicas. Métodos e conceitos desenvolvidos ao longo da história do pensamento geográfico. Positivismo: determinismo, funcionalismo e estruturalismo. Orientações contemporâneas: positivismo lógico, fenomenologia e marxismo. Materialismo dialético e a Geografia como ciência crítica. O espaço geográfico e a dimensão temporal: forma, processo, estrutura e função no método da Geografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF301'],
			color: '#82B946',
			obligatory: true
		},
		'GF412': {
			code: 'GF412',
			name: 'Climatologia Geográfica',
			ementa: 'A variação das condições climáticas ao longo do tempo e variabilidade atual. Climatologia e abordagem escalar; Metodologias de estudo da climatologia e alterações climáticas em diferentes escalas. Classificação Sinótico-Espacial e a Análise Rítmica; Teorias das mudanças climáticas (a teoria de Milankovitch; mudanças no ciclo do carbono; as variações na espacialização dos continentes e oceanos); A ação antrópica no clima (Poluição atmosférica; camada de ozônio e clima e saúde); As mudanças climáticas na escala local (O Clima no meio urbano; meio rural e desastres naturais). Geopolítica e Clima.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4682B9',
			obligatory: true
		},
		'GF413': {
			code: 'GF413',
			name: 'Geografia Regional: África',
			ementa: 'Os atributos naturais do continente africano enquanto recursos materiais de poder: recursos naturais, biodiversidade, recursos hídricos e energéticos. Diásporas. Colonialismo, imperialismo e formação dos Estados nacionais pluriétnicos africanos. A presença do continente africano na geopolítica do mundo contemporâneo. Urbanização, industrialização e metropolização no continente africano. As relações África e Brasil ontem e hoje. Os desafios do ensino de geografia da África no ensino básico brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#96B946',
			obligatory: true
		},
		'GF507': {
			code: 'GF507',
			name: 'Cartografia Temática',
			ementa: 'Pesquisa, análise e tratamento da informação. Representação cartográfica com temas significativos para o estudo da Terra e as características das variáveis. Formas de representação pontual, linear e zonal, considerando os fenômenos qualitativos, quantitativos, estáticos e dinâmicos. Propriedades perceptivas das variáveis gráficas: execução, leitura e interpretação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#AAB946',
			obligatory: true
		},
		'GN304': {
			code: 'GN304',
			name: 'Trabalho de Campo',
			ementa: 'Treinamento de campo para entendimento das feições do terreno, dentro de uma visão holística, observando-se as interações de rocha X solo X clima X hidrografia X ocupação humana.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN107', 'GN111'],
			color: '#8F468F',
			obligatory: true
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Aprimoramento e prática de capacidades de leitura instrumental em língua inglesa em textos de gêneros acadêmico e científico. Aprofundamento no uso de estruturas frasais como promotoras da compreensão textual. Práticas de estratégias de leitura. Aplicação de estratégias de leitura para promover a compreensão textual. Leitura de textos digitais. Estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B946B4',
			obligatory: true
		},
		'GF501': {
			code: 'GF501',
			name: 'Geografia Agrária',
			ementa: 'Atividade agrícola e interdependência com outros setores da economia. Bases fundiárias e sociais: distribuição e tipos de propriedade, de estabelecimentos, de exploração econômica e de relações de trabalho. Bases econômicas do estabelecimento agrícola. A atividade agrícola e a natureza como recurso e restrição. Fatores da produção: terra, trabalho, capital e informação. Comercialização e mercado. Atributos da atividade. Regionalização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A046B9',
			obligatory: true
		},
		'GF502': {
			code: 'GF502',
			name: 'Geografia das Indústrias',
			ementa: 'A Primeira e Segunda Revolução Industrial: transição para o capitalismo, o nascimento da fábrica, a etapa monopolista do capitalismo e o surgimento das grandes corporações, gênese e difusão do taylorismo e do fordismo. A crise do fordismo e a emergência de um novo paradigma de organização industrial. A divisão internacional do trabalho. Sistemas industriais e organização do espaço: processos de concentração e desconcentração (nível mundial, nacional, regional e local). Política industrial e planejamento espacial: Estado, indústria e meio ambiente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#7846B9',
			obligatory: true
		},
		'GF506': {
			code: 'GF506',
			name: 'Geomorfologia (Climática e Litorânea)',
			ementa: 'Perspectivas e pressuposições teóricas. Zonas morfoclimáticas do globo. O modelado das regiões quentes e úmidas. O sistema morfogenético e os processos denominantes. O sistema morfoclimático das regiões secas. Os mecanismos e as influências geomorfológicas das oscilações paleoclimáticas no quaternário.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF303'],
			color: '#B94664',
			obligatory: true
		},
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B98C',
			obligatory: true
		},
		'GF702': {
			code: 'GF702',
			name: 'Meio Ambiente Urbano',
			ementa: 'Produção e consumo da e na Cidade. A metropolização e as redes de relações. Problemáticas urbanas: uso do solo, segregação especial e problemas ambientais da urbanização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF604'],
			color: '#B946A0',
			obligatory: true
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. Biosfera, fluxo de energia e ciclos biogeoquímicos. Métodos e ferramentas para estudos biogeográficos. Fitogeografia do Brasil. Biomas do mundo. Elaboração de projetos de pesquisa em Biogeografia. Elaboração de relatórios e seminários em Biogeografia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46A0B9',
			obligatory: true
		},
		'GF405': {
			code: 'GF405',
			name: 'Geografia do Brasil',
			ementa: 'As Regiões Brasileiras: contrastes e inter-relações. As especificidades regionais: bases físicas, ocupação e produção do espaço.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#465AB9',
			obligatory: true
		},
		'GF605': {
			code: 'GF605',
			name: 'Geomorfologia do Brasil',
			ementa: 'O relevo brasileiro: os grandes conjuntos geomorfológicos brasileiro. Influências das oscilações climáticas no quaternário. O modelado do Estado de São Paulo: compartimentos geomorfológicos paulistas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF506'],
			color: '#B94664',
			obligatory: true
		},
		'GF606': {
			code: 'GF606',
			name: 'Sistemas de Informação Geográfica',
			ementa: 'Introdução ao SIG. Dados geográficos: classes, aquisição e modelagem. Estruturas de representação da informação geográfica. Relações topológicas. Elementos essenciais de um SIG. Funcionalidades de um SIG. Principais áreas de aplicação. Uso de software SIG.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GF136', 'GF507'],
			color: '#78B964',
			obligatory: true
		},
		'GF801': {
			code: 'GF801',
			name: 'Geografia das Relações Internacionais',
			ementa: 'Geografia Política. Organizações Internacionais e Regionais. Os blocos econômicos e os mercados comuns. Conflitos contemporâneos: etnias, religiões, recursos naturais e tecnológicos na disputa do poder político e econômico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B96E46',
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
		'GF403': {
			code: 'GF403',
			name: 'Hidrologia e Oceanografia',
			ementa: 'Fenômenos intervenientes nos fluxos de água. Ciclo hidrológico. Bacia hidrográfica. Precipitação. Interceptação vegetal. Infiltração. Escoamento superficial. Evaporação. Transpiração vegetal. Previsão de enchentes. Propagação de enchentes em reservatórios e canais. Oceanos e mares. Relevo submarino. Movimento das águas oceânicas. Erosão marinha. Problemas ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94682',
			obligatory: true
		},
		'GF602': {
			code: 'GF602',
			name: 'Análise Redes e Fluxos (Transportes e Comunicação)',
			ementa: 'O aumento da circulação como um primeiro movimento para a mundialização. Os meios de transportes, a ocupação especial e a circulação de mercadorias e pessoas. Os meios de comunicação e as novas tecnologias de informação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6EB946',
			obligatory: true
		},
		'GF603': {
			code: 'GF603',
			name: 'Estudos Populacionais',
			ementa: 'População mundial: história e espaço geográfico. Teoria da transição democrática. Fontes de dados. Movimentos migratórios e mobilidade populacional. Natalidade, mortalidade, crescimento natural e vegetativo. Composição e técnicas de mensuração: etária, por sexo, étnica e estudos de PEA. Medidas de densidade e distribuição populacional. Processos de projeção populacional e tendências de mobilidade. Desigualdades regionais e o Planejamento. Estudos de caso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8C46B9',
			obligatory: true
		},
		'GF703': {
			code: 'GF703',
			name: 'Desenvolvimento da Agricultura Brasileira',
			ementa: 'Retrospectiva histórica da agricultura brasileira. Relações sociais na agricultura. Modernização da agricultura no Brasil. Caracterização da produção agrícola e agroindustrial: fatores de produção, estrutura agrária. Comercialização e abastecimento. Desenvolvimento agrícola e agroindustrial.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF501'],
			color: '#A046B9',
			obligatory: true
		},
		'GF714': {
			code: 'GF714',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Levantamento de fontes de dados, técnicas, métodos de pesquisa e/ou de elaboração de materiais gráfico e cartográfico sobre o espaço geográfico e/ou educação em geografia, podendo ter como parâmetro um estudo de caso; elaboração de um projeto de pesquisa.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA470'],
			color: '#B94696',
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
		'GF406': {
			code: 'GF406',
			name: 'Geografia Política',
			ementa: 'Definição. Geografia Política, geoestratégia e fronteiras. Organização do espaço como instrumento de poder. O Estado Moderno e as políticas territoriais internas e externas. A Geopolítica do período militar brasileiro. Cenário geopolítico mundial contemporâneo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46AAB9',
			obligatory: true
		},
		'GF803': {
			code: 'GF803',
			name: 'Análise e Gestão de Bacias Hidrográficas',
			ementa: 'Conceituação, classificação, ocupação e gestão das bacias hidrográficas. Organização regional: a bacia hidrográfica como instrumento de análise regional e dado natural. A ocupação e os poderes público e privado e a organização social. Recursos hídricos: a relatividade da escassez e da abundância diante da tecnologia, da urbanização e da industrialização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8CB946',
			obligatory: true
		},
		'GF805': {
			code: 'GF805',
			name: 'Planejamento Territorial',
			ementa: 'O território como unidade condicionante do planejamento econômico. O planejamento como instrumento de ação política. O papel do estado (Federal, Estadual, Municipal) e das empresas no planejamento do território. A regionalização como instrumento de ação do planejamento. A organização do território impondo-se às ações de planejamento econômico no atual período técnico-científico e informacional. As noções de progresso, desenvolvimento e competitividade como norteadoras do processo de planejamento capitalista. O desenvolvimento geograficamente desigual e os paradoxos do planejamento territorial. Esta disciplina prevê a realização de trabalho de campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF401'],
			color: '#82B946',
			obligatory: true
		},
		'GF814': {
			code: 'GF814',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Utilização de métodos e técnicas de pesquisa em geografia e/ou educação em geografia: documentação indireta (dados, documentos, mapas, cartas, imagens), documentação direta (pesquisa de campo, observação, medição, entrevista, questionários fechados e abertos) e outras metodologias, tendo por objetivo a realização de uma dentre quatro categorias de pesquisa: 1) trabalhos teórico-empíricos e/ou síntese bibliográfica de temas afeitos à pesquisa geográfica e/ou educação em geografia (tipo monografia); 2) mapeamentos e suas interpretações e relatórios; 3) relatório final de iniciação científica; 4) relatório final de estágio profissional supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480'],
			color: '#46B95A',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GE403': {
			code: 'GE403',
			name: 'Micropalentologia e Palinologia',
			ementa: 'Conceitos básicos de sistemática de microfósseis e palinomorfos (polens, esporos e dinoflagelados) e suas aplicações para bioestratigrafia, paleoclimatologia e paleoecologia. Treinamento no reconhecimento de microfósseis e nas técnicas de preparação para estudo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96446',
			obligatory: false
		},
		'GE405': {
			code: 'GE405',
			name: 'Direito dos Recursos Naturais',
			ementa: 'Conceitos básicos sobre direito e recursos naturais. Código de Mineração, Código Florestal, Código das Águas. Legislações mineral, paramineral e ambiental e os impactos nas políticas públicas setoriais. Administração pública, recursos naturais e a compatibilização com o meio ambiente. Atuação profissional e legislação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#468CB9',
			obligatory: false
		},
		'GE702': {
			code: 'GE702',
			name: 'História e Teoria das Organizações',
			ementa: 'Abordagem histórica e comparativa da evolução das principais teorias de administração e gestão organizacional e suas relações com o pensamento econômico e sociológico.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#46B950',
			obligatory: false
		},
		'GE801': {
			code: 'GE801',
			name: 'História das Ciências Naturais',
			ementa: 'O Renascimento e seu impacto na cosmovisão: a releitura do mundo natural. A Revolução Científica e o nascimento da ciência moderna: a Filosofia Natural, a História Natural e a especialização das disciplinas científicas. A 1a. Revolução Industrial, o Naturalismo científico e os viajantes. Colecionismo, Gabinetes e Museus. O processo de institucionalização e profissionalização das ciências naturais com ênfase no Brasil e América Latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B446',
			obligatory: false
		},
		'GE911': {
			code: 'GE911',
			name: 'Comunicação Científica em Ciências da Terra',
			ementa: 'Fundamentos de editoração de artigos científicos. Regras básicas de redação e ilustração. Padronização técnica de artigos, relatórios e textos de divulgação. Noções básicas de operação de programas de ilustração técnica. Internet e Ciências da Terra. Evolução histórica dos recursos didáticos em Geociências. Intercâmbio de formatos de arquivo e utilização de ilustrações, diagramas e mapas no ensino. Exercícios de laboratório e gabinete.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#B446B9',
			obligatory: false
		},
		'GE912': {
			code: 'GE912',
			name: 'Mapas e Linguagem Visual no Ensino de Ciências Naturais',
			ementa: 'Mapas e linguagem visual como ferramentas das ciências naturais. Emergência das representações cartográficas e evolução histórica da representação espacial. Princípios metodológicos da elaboração de mapas geológicos e mapas temáticos. Aquisição de dados espaciais no campo e representação da informação científica por meio de geoinformática. Problemas de escala e técnicas de representação. Questões interdisciplinares de educação em ciências relacionadas a mapas. Exercícios de laboratório e gabinete.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#46B964',
			obligatory: false
		},
		'GE913': {
			code: 'GE913',
			name: 'Ciências Naturais e Ambiente',
			ementa: 'Abordagem epistemológica que busca a construção do entendimento de como as ciências naturais integram-se do ponto de vista de seus objetos de estudo e métodos quando se estuda o ambiente, seja em suas inter-relações no presente - processos e fenômenos atuais, seja em sua evolução ao longo da história da Terra. Natureza do conhecimento geocientífico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#B9A046',
			obligatory: false
		},
		'GE914': {
			code: 'GE914',
			name: 'Ciência e Linguagens',
			ementa: 'Relações entre linguagem / retórica / discurso e a produção e circulação de conhecimentos científico-tecnológicos; interações discursivas e enunciativas em sala de aula; linguagem e cognição; linguagem e epistemologia; leituras da ciência na escola; linguagens e geociências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: '',
			color: '#B946AA',
			obligatory: false
		},
		'GE915': {
			code: 'GE915',
			name: 'Educação, Ciência, Tecnologia e Sociedade',
			ementa: 'Abordagem CTSA (Ciência, Tecnologia, Sociedade e Ambiente) na Educação básica: princípios pressupostos e elaboração de estratégias de ensino. O papel das Geociências em processos de tomada de decisão e posicionamentos em questões sócio-político-ambientais: impacto ambiental, saúde, riscos naturais e tecnologia para enfrentar esses problemas. Estudos de caso de questões socioambientais envolvendo conhecimentos estudos da Terra.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#4650B9',
			obligatory: false
		},
		'GE916': {
			code: 'GE916',
			name: 'Ensino de Ciências da Terra e do Ambiente',
			ementa: 'Importância do ensino de Ciências da Terra para o ensino básico. Modelos e dificuldades comuns de ensino e aprendizagem. Importância e perspectiva cognitiva, ambiental e política do ensino de ciclo da água. Papel estratégico do ciclo da água entre temas ensinados em ciências naturais, experimentais e tecnológicas. Inclui levantamentos das condições de ensino de problemas ambientais relativos à circulação da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#46B9B4',
			obligatory: false
		},
		'GF001': {
			code: 'GF001',
			name: 'Iniciação Científica',
			ementa: 'Introdução à abordagem científica relacionada à pesquisa de Geografia. Teorias e hipóteses. Levantamentos de dados. Aplicação de técnicas de pesquisa. Análise de resultados. Elaboração de relatórios de pesquisa e outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA425'],
			color: '#B98C46',
			obligatory: false
		},
		'GF002': {
			code: 'GF002',
			name: 'Estágio Supervisionado I',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#6E46B9',
			obligatory: false
		},
		'GF003': {
			code: 'GF003',
			name: 'Estágio Supervisionado II',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#B4B946',
			obligatory: false
		},
		'GF100': {
			code: 'GF100',
			name: 'Geomorfologia e Meio Ambiente',
			ementa: 'Conteúdo, semiologia e aplicabilidade das legendas geomorfológicas. Cartografia geomorfológica e planejamento: estudos de caso. Monitoramento ambiental e a questão dos geoindicadores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#64B946',
			obligatory: false
		},
		'GF102': {
			code: 'GF102',
			name: 'Movimentos Sociais',
			ementa: 'Debate sobre as teorias dos Movimentos Sociais. Formas de organização dos Movimentos Urbanos e Rurais. Autonomia, organizações locais, nacionais e internacionais. Movimentos libertários: feministas, ecologistas e estudantis. Organizações não governamentais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		},
		'GF105': {
			code: 'GF105',
			name: 'Metrópoles e Metropolização',
			ementa: 'O surgimento das metrópoles e o processo de metropolização contemporâneo. O fenômeno da urbanização/conurbação e as estratégias de planejamento. Qualidade de vida, sociedade e meio ambiente nas grandes metrópoles. As cidades mundiais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4646B9',
			obligatory: false
		},
		'GF106': {
			code: 'GF106',
			name: 'Turismo e Novas Territorialidades',
			ementa: 'Aspectos históricos do surgimento do turismo (sedentarismo, nomadismo, viajantes e turistas). A atividade turística na produção do espaço: paisagens, valores culturais e meio ambiente. Modalidades de turismo: da indústria do turismo de massa ao turismo ecológico. Planejamento, degradação e sustentabilidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B978',
			obligatory: false
		},
		'GF107': {
			code: 'GF107',
			name: 'América Latina - Novas Relações',
			ementa: 'Geografia, colonização e geopolítica do continente americano. Os regimes militares, as lutas por emancipação e a nova integração econômica. O Mercosul e as identidades regionais. As metrópoles latino-americanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9466E',
			obligatory: false
		},
		'GF111': {
			code: 'GF111',
			name: 'Mudanças Globais no Sistema Terra',
			ementa: 'Abordagem integrada das alterações do Sistema Terra, analisando processos ecológicos e socioeconômicos em perspectiva histórica. Ênfase nos prementes problemas ambientais que atingem o planeta e que refletem o modelo de desenvolvimento e padrões de ocupação diferencial do espaço territorial, definidos em macro escala, mas que se cristalizam em escala local. Discussão de problemas atuais na busca de alternativas cientificamente viáveis e socialmente aceitáveis.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A0B946',
			obligatory: false
		},
		'GF112': {
			code: 'GF112',
			name: 'Organização do Espaço Regional',
			ementa: 'Teorias e conceitos do desenvolvimento regional. Região, regionalização e regionalismos: planejamento e organização do espaço. Transformações econômicas e novas estratégias espaciais. Sociedade e natureza na organização socioespacial. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B996',
			obligatory: false
		},
		'GF115': {
			code: 'GF115',
			name: 'Economia do Desenvolvimento',
			ementa: 'Características estruturais das economias desenvolvidas e subdesenvolvidas. Modelos conceituais de interpretação do processo de desenvolvimento: análise keynesiana e neokeynesiana; e nokeynesiana; teorias do desenvolvimento; enfoque de Schumpeter. Industrialização, subdesenvolvimento e dependência na América Latina. Ecodesenvolvimento e desenvolvimento sustentado.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B97846',
			obligatory: false
		},
		'GF120': {
			code: 'GF120',
			name: 'Tópicos Especiais em Geografia',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#8246B9',
			obligatory: false
		},
		'GF121': {
			code: 'GF121',
			name: 'Tópicos Avançados em Geografia',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#B94678',
			obligatory: false
		},
		'GF123': {
			code: 'GF123',
			name: 'Tópicos Especiais em Geografia I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5A46B9',
			obligatory: false
		},
		'GF124': {
			code: 'GF124',
			name: 'Tópicos Especiais em Geografia II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#466EB9',
			obligatory: false
		},
		'GF125': {
			code: 'GF125',
			name: 'Tópicos Avançados em Geografia I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B95A46',
			obligatory: false
		},
		'GF126': {
			code: 'GF126',
			name: 'Tópicos Avançados em Geografia II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4664B9',
			obligatory: false
		},
		'GF130': {
			code: 'GF130',
			name: 'Geografia Regional do Brasil',
			ementa: 'Fornecer noções metodológicas fundamentais de regionalização do espaço brasileiro. Para tanto, elencamos os seguintes itens: fundamentos teóricos do processo de regionalização brasileiro; identificação dos diferentes critérios de regionalização do território brasileiro; as funções da regionalização para o planejamento; a regionalização como instrumentalização das ações do Estado e do mercado; a região como categoria analítica e como conceito na geografia; fundamentos teóricos do planejamento regional brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B96E',
			obligatory: false
		},
		'GF131': {
			code: 'GF131',
			name: 'Mapeamento Pedológico',
			ementa: 'Sistema Brasileiro de Classificação de Solos. Cartografia de solos. Sistemática de levantamento de solos em campo. Interpretação de análises químicas e físicas para classificação. Geração de mapas geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF508'],
			color: '#46B98C',
			obligatory: false
		},
		'GF132': {
			code: 'GF132',
			name: 'Logística e Território Brasileiro',
			ementa: 'Origem, evolução e abordagens do conceito de logística. Abordagem geográfica da logística. Logística como expressão geográfica da circulação corporativa no período histórico atual e como variável ascendente da globalização. Logística e competitividade regional. As características do território brasileiro como indutora de estratégias, investimentos e organização logística. Logística e planejamento territorial no Brasil.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF508'],
			color: '#46B98C',
			obligatory: false
		},
		'GF133': {
			code: 'GF133',
			name: 'Fundamentos de Micromorfologia de Solos',
			ementa: 'Introdução e histórico. Conceitos e definições. Hierarquias e cronologia das organizações. Os constituintes do fundo matricial. As feições pedológicas. Análise e interpretação de dados micromorfológicos com ênfase em solos tropicais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF508'],
			color: '#46B98C',
			obligatory: false
		},
		'GF134': {
			code: 'GF134',
			name: 'Fotointerpretação e Mapeamento Térmico',
			ementa: 'Introdução à fotogrametria. Histórico da fotogrametria. Elementos de fotogrametria, estereoscopia e fotointerpretação. Fundamentos de restituição aerofotogramétrica. Aplicações de fotografias aéreas na Geografia. Procedimentos e técnicas de fotointerpretação geográfica. Processamento digital de fotos aéreas. Elaboração de mapeamentos temáticos a partir da interpretação de fotos aéreas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94650',
			obligatory: false
		},
		'GF135': {
			code: 'GF135',
			name: 'Antropologia da Moral e da Ética',
			ementa: 'Economia moral e ética em processos sociais contemporâneos. Antropologia da moral e da ética. Dimensões morais do estado, da ética, da ciência e da tecnologia. Processos de estruturação e de subjetivação do e no Estado, suas variações tecnológicas e formas de vida social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B98246',
			obligatory: false
		},
		'GF505': {
			code: 'GF505',
			name: 'Recursos Naturais, Meio Ambiente e Desenvolvimento',
			ementa: 'Os recursos naturais como base para o desenvolvimento, a natureza como recurso. Avaliação socioeconômica e balanço entre oferta e demanda de recursos naturais. Recurso natural, meio ambiente e a mediação tecnológica. A gestão dos recursos naturais sob a ótica ambiental.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5046B9',
			obligatory: false
		},
		'GN110': {
			code: 'GN110',
			name: 'Ciência do Sistema Mundo',
			ementa: 'Conceitos básicos de Geografia Física. O estrato geográfico e a superfície da Terra como unidade geográfica. Análise e dinâmica dos sistemas geomorfológico, pedológico, climático e hidrográfico. Grandes domínios naturais da Terra. Recontextualização dos conceitos e conteúdos de geografia física desenvolvidos no processo de escolarização e na universidade. Geografia Física e Educação Ambiental no currículo escolar, aproximações, diferenças e disputas. Atividades de campo como práticas contextualizadoras de conhecimentos de geografia física.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B9A0',
			obligatory: false
		},
		'GN207': {
			code: 'GN207',
			name: 'Introdução ao Sensoriamento Remoto',
			ementa: 'Definição, histórico e evolução do sensoriamento remoto. Princípios físicos do sensoriamento remoto. O espectro eletromagnético. Características espectrais de materiais naturais e artificiais. Introdução à espectroscopia de reflectância e interpretação de curvas de reflectância espectral. Sistemas sensores. Camêras aerofotogramétricas e fotografias aéreas. Princípios de estereoscopia e interpretação estereoscópica. Princípios de interpretação de fotografias aéreas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AA46B9',
			obligatory: false
		},
		'GN208': {
			code: 'GN208',
			name: 'Ciência do Sistema Terra II',
			ementa: 'Métodos de investigação e Aplicações da Geologia. Processos geológicos e a interação das esferas terrestres. Ambientes de formação de rochas na Geosfera e suas interações com as demais esferas (atmosfera, hidrosfera, biosfera e esfera social). O Homem como agente geológico; situações de risco geológico. Atividades práticas de campo para reconhecimento de processos naturais e das interações destes com a ação humana. Mapas, perfis e modelos em Geologia. Atuação profissional e educacional em Ciências da Terra. Aprendizagem ativa e uso de recursos educacionais em Geociências. Práticas de laboratório e trabalho de campo.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4696B9',
			obligatory: false
		},
		'GT105': {
			code: 'GT105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B95046',
			obligatory: false
		}
	}
};

export default catalogue;
