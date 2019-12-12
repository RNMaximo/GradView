const catalogue = {
	totalCredits: 216,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GN101', 'GF301', 'GN110', 'GN106', 'GN108']
		},
		'sem-2': {
			id: '2',
			subjects: ['GF129', 'GF401', 'GN105', 'GN208', 'GN301', 'GN107']
		},
		'sem-3': {
			id: '3',
			subjects: ['GF507', 'ME173', 'LA122', 'EL683', 'GF303', 'GF603', 'EL511', 'BD101']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'LA242', 'GF601', 'GF402', 'GN304', 'GN207', 'GF410', 'GF503']
		},
		'sem-5': {
			id: '5',
			subjects: ['GF508', 'GF501', 'GF604', 'EL774', 'GF506', 'GF509']
		},
		'sem-6': {
			id: '6',
			subjects: ['GF801', 'BT201', 'GF405', 'EL874', 'GF605', 'GE801', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['GF502', 'GF602', 'GF703', 'GF806', 'GF302', 'ELET07', 'FN468']
		},
		'sem-8': {
			id: '8',
			subjects: ['GF805', 'ELET08', 'GF901', 'GF406']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['EL---', 'EP---'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['GE403', 'GE405', 'GE911', 'GE912', 'GE913', 'GE914', 'GE915', 'GE916', 'GF001', 'GF002', 'GF003', 'GF100', 'GF102', 'GF105', 'GF106', 'GF107', 'GF111', 'GF112', 'GF115', 'GF120', 'GF121', 'GF123', 'GF124', 'GF125', 'GF126', 'GF130', 'GF131', 'GF132', 'GF133', 'GF134', 'GF505'],
		},
	},

	subjects: {
		'GF301': {
			code: 'GF301',
			name: 'História do Pensamento Geográfico',
			ementa: 'O conhecimento geográfico no Mundo Antigo e no Mundo Medieval. Período Renascentista e conhecimento do mundo. Filosofia, Ciência e Geografia dos Modernos. A Institucionalização da Geografia, Estado, colonialismo e conhecimento geográfico. O Pensamento Libertário e a geografia. Determinismo e possibilismo. Difusão das Escolas de Geografia. Renovação da geografia e redefinição do objeto. Geografia Pragmática e planejamento econômico. As geografias radicais. Tendências teórico-metodológicas atuais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A4B946',
			obligatory: true
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B98546',
			obligatory: true
		},
		'GN106': {
			code: 'GN106',
			name: 'Ciência do Sistema Terra I',
			ementa: 'Métodos de investigação, História e Epistemologia da Geologia. A terra como um sistema. Esferas materiais terrestres e suas interações: atmosfera, hidrosfera, geosfera (crosta, manto e núcleo), biosfera e esfera social. O Homem como agente geológico. Atividades de campo para reconhecimento de processos naturais e suas interações com a ação humana, em situações concretas. Representação e tratamento de informação geológica. Atuação profissional e educacional em Ciências da Terra. Práticas de Laboratório e excursões.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97046',
			obligatory: true
		},
		'GN108': {
			code: 'GN108',
			name: 'Cartografia Sistemática',
			ementa: 'Introdução à Cartografia. Princípios de Geodésia. Escalas. Sistemas de Coordenadas. Projeções Cartográficas. Sistema Cartográfico Nacional (SCN). Uso de Cartas, Mapas e Plantas em Ciências da Terra. Sistema de Posicionamento Global (GPS). Elementos de Topografia. Cartografia Digital.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4665B9',
			obligatory: true
		},
		'GN110': {
			code: 'GN110',
			name: 'Ciência do Sistema Mundo',
			ementa: 'Conceitos básicos de Geografia Física. Análise e dinâmica dos sistemas geomorfológico, pedológico, climático e hidrográfico. Grandes domínios naturais da Terra.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#70B946',
			obligatory: true
		},
		'GF129': {
			code: 'GF129',
			name: 'Geografia Econômica',
			ementa: 'Fornecer instrumental conceitual básico da Economia Política do Território. Para tanto, elencamos os seguintes pontos: o espaço geográfico como condicionante econômico-social; as divisões técnicas, social e territorial do trabalho; centro, periferia e difusão das modernizações; cadeias e circuitos espaciais produtivos; concentração e centralização dos capitais; o território nacional como mediação entre os fluxos globais do capital e as economias regionais; monopólios, oligopólios e alienação dos espaços no Terceiro Mundo.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#46B985',
			obligatory: true
		},
		'GF401': {
			code: 'GF401',
			name: 'Metodologia da Geografia',
			ementa: 'Bases epistemológicas. Métodos e conceitos desenvolvidos ao longo da história do pensamento geográfico. Positivismo: determinismo, funcionalismo e estruturalismo. Orientações contemporâneas: positivismo lógico, fenomenologia e marxismo. Materialismo dialético e a Geografia como ciência crítica. O espaço geográfico e a dimensão temporal: forma, processo, estrutura e função no método da Geografia.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GF301'],
			color: '#A4B946',
			obligatory: true
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'Fundamentos filosóficos da ciência moderna. Ciência e senso comum. O conhecimento científico, objeto e método. Pesquisa científica.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9468F',
			obligatory: true
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B9467A',
			obligatory: true
		},
		'GN208': {
			code: 'GN208',
			name: 'Ciência do Sistema Terra II',
			ementa: 'Métodos de investigação e Aplicações da Geologia. Componentes do Sistema Terra. Ambientes de formação de rochas na Geosfera e suas interações com as demais esferas terrestres (atmosfera, hidrosfera, biosfera e esferasocial). O Homem como agente geológico; situações de risco geológico. Atividades práticas de campo para reconhecimento de processos naturais e das interações destes com a ação humana. Representação e tratamento de informação geológica. Atuação profissional e educacional em Ciências da Terra. Práticas de laboratório e excursões.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GN106'],
			color: '#B97046',
			obligatory: true
		},
		'GN301': {
			code: 'GN301',
			name: 'História das Teorias Econômicas',
			ementa: 'Elementos de economia. Análise do surgimento e da evolução da Economia Política como ramo do conhecimento científico. As principais escolas do pensamento econômico e suas respectivas contribuições ao entendimento do mundo em que vivemos. Disciplinas propedêuticas para o estudo da Economia dos Recursos Naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B99A',
			obligatory: true
		},
		'BD101': {
			code: 'BD101',
			name: 'Biologia',
			ementa: 'Noções básicas de biologia, classificação e ecologia dos seres vivos. Conceitos básicos de evolução e especiação através da seleção natural; aspectos de conservação e manejo do meio ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5BB946',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B98F',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#465BB9',
			obligatory: true
		},
		'GF303': {
			code: 'GF303',
			name: 'Geomorfologia',
			ementa: 'Estudos das formas de relevo, gênese e evolução. Análise das inter-relações: rocha X solo X clima X relevo, com ênfase nos aspectos tectono-estruturais. Unidades morfoestruturais do globo terrestre. Processos endógenos no modelado do relevo. Teorias e técnicas de mapeamento geomorfológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['GN110', 'GN208'],
			color: '#959546',
			obligatory: true
		},
		'GF507': {
			code: 'GF507',
			name: 'Cartografia Temática',
			ementa: 'Pesquisa, análise e tratamento da informação. Representação cartográfica com temas significativos para o estudo da Terra e as características das variáveis. Formas de representação pontual, linear e zonal, considerando os fenômenos qualitativos, quantitativos, estáticos e dinâmicos. Propriedades perceptivas das variáveis gráficas: execução, leitura e interpretação.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A4',
			obligatory: true
		},
		'GF603': {
			code: 'GF603',
			name: 'Estudos Populacionais',
			ementa: 'População mundial: história e espaço geográfico. Teoria da transição democrática. Fontes de dados. Movimentos migratórios e mobilidade populacional. Natalidade, mortalidade, crescimento natural e vegetativo. Composição e técnicas de mensuração: etária, por sexo, étnica e estudos de PEA. Medidas de densidade e distribuição populacional. Processos de projeção populacional e tendências de mobilidade. Desigualdades regionais e o Planejamento. Estudos de caso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95B46',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9AB946',
			obligatory: true
		},
		'ME173': {
			code: 'ME173',
			name: 'Estatística Descritiva',
			ementa: 'População e amostras. Levantamento e apuração de dados. Dados registrados e não registrados: censo e estimativa de população. Descrição de dados amostrais: tabelas, gráficos, medidas de posição e de variabilidade. Noções elementares de probabilidade. Análise de uma distribuição de freqüência de natureza qualitativa: coeficientes e índices mais usados. Elementos de demografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B97A',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'GF402': {
			code: 'GF402',
			name: 'História Econômica, Política e Sociedade do Brasil',
			ementa: 'Análise do processo de formação do Brasil contemporâneo. A inserção do país na divisão internacional do trabalho (1850-1930). Os principais fatores de integração da economia nacional (1870-1950). As mudanças políticas e sociais do período republicano.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#65B946',
			obligatory: true
		},
		'GF410': {
			code: 'GF410',
			name: 'Climatologia I',
			ementa: 'Tempo atmosférico e clima; Distribuição e balanço global de radiação; Composição e estrutura da atmosfera; Atmosfera pretérita e atual; Elementos do clima (temperatura, pressão atmosférica, umidade do ar, precipitações atmosféricas) - definições, unidades de medição, controles de grande escala, representação das suas variações espaço-temporais e suas influências no condicionamento de aspectos físicos e na vida; Gradiente vertical da atmosfera; Nuvens; Circulação geral da atmosfera (convectiva e meridional); Massas de ar, frentes e pertubações atmosféricas.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B951',
			obligatory: true
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#8FB946',
			obligatory: true
		},
		'GF601': {
			code: 'GF601',
			name: 'Geografia Regional (Teoria e Regionalização Mundial)',
			ementa: 'A Região como categoria de análise da Geografia. Sistemas políticos, econômicos e quadros naturais na organização do espaço mundial. A formação contemporânea dos grandes blocos econômicos e geopolíticos no contexto da globalização da economia e mundialização da cultura. Análise téorica e através de estudos de casos das divisões: países capitalistas/países socialistas, centro-periferia, desenvolvimento / subdesenvolvimento, Norte/Sul. Potências econômicas mundiais. Analisar detalhadamente um continente (a escolher) como estudo de caso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9469A',
			obligatory: true
		},
		'GN207': {
			code: 'GN207',
			name: 'Introdução ao Sensoriamento Remoto',
			ementa: 'Definição, histórico e evolução do sensoriamento remoto. Princípios físicos do sensoriamento remoto. O espectro eletromagnético. Características espectrais de materiais naturais e artificiais. Introdução à espectroscopia de reflectância e interpretação de curvas de reflectância espectral. Sistemas sensores. Camêras aerofotogramétricas e fotografias aéreas. Princípios de estereoscopia e interpretação estereoscópica. Princípios de interpretação de fotografias aéreas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GN108'],
			color: '#4665B9',
			obligatory: true
		},
		'GN304': {
			code: 'GN304',
			name: 'Trabalho de Campo',
			ementa: 'Treinamento de campo para entendimento das feições do terreno, dentro de uma visão holística, observando-se as interações de rocha X solo X clima X hidrografia X ocupação humana.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN106', 'GN110'],
			color: '#959546',
			obligatory: true
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Curso de leitura, à distância, de textos em inglês para fins acadêmicos, com ênfase no desenvolvimento de estratégias de compreensão de leitura em língua estrangeira e estratégias de aquisição de língua através de interação com gêneros de textos da esfera acadêmica, jornalística e de divulgação de ciência, envolvendo o aluno em atividades que demandam estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#8546B9',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#85B946',
			obligatory: true
		},
		'GF501': {
			code: 'GF501',
			name: 'Geografia Agrária',
			ementa: 'Atividade agrícola e interdependência com outros setores da economia. Bases fundiárias e sociais: distribuição e tipos de propriedade, de estabelecimentos, de exploração econômica e de relações de trabalho. Bases econômicas do estabelecimento agrícola. A atividade agrícola e a natureza como recurso e restrição. Fatores da produção: terra, trabalho, capital e informação. Comercialização e mercado. Atributos da atividade. Regionalização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4651B9',
			obligatory: true
		},
		'GF506': {
			code: 'GF506',
			name: 'Geomorfologia (Climática e Litorânea)',
			ementa: 'Perspectivas e pressuposições teóricas. Zonas morfoclimáticas do globo. O modelado das regiões quentes e úmidas. O sistema morfogenético e os processos denominantes. O sistema morfoclimático das regiões secas. Os mecanismos e as influências geomorfológicas das oscilações paleoclimáticas no quaternário.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94685',
			obligatory: true
		},
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8F46B9',
			obligatory: true
		},
		'GF509': {
			code: 'GF509',
			name: 'Climatologia II',
			ementa: 'A Climatologia no contexto das ciências atmosféricas e da ciência geográfica. Escalas climáticas. Variação das condições climáticas ao longo do tempo e variabilidade atual. Análise rítmica; Clima e suas relações com saúde, recursos hídricos, energia, agricultura; A ação antrópica no clima (poluição atmosférica, clima urbano, destruição da camada de ozônio estratosférico, etc.); Modelos de previsão de tempo e clima; A climatologia geográfica no planejamento territorial; O papel da mídia; Discussão das mudanças climáticas nos foros políticos; Ensino da climatologia no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GF410'],
			color: '#46B951',
			obligatory: true
		},
		'GF604': {
			code: 'GF604',
			name: 'Geografia Urbana',
			ementa: 'Definição e evolução do fenômeno urbano. As cidades: os sítios, o crescimento horizontal e vertical, a estrutura urbana, as áreas funcionais, o sistema viário e a circulação. A interdisciplinaridade dos estudos urbanos. Centralidade, hierarquia e redes urbanas. Conjuntos urbanos complexos: áreas metropolitanas e conurbação. Valor e renda da terra. Meio ambiente e qualidade de vida no meio urbano. Paisagens, usos do solo e culturas urbanas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46AEB9',
			obligatory: true
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. 2. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. 3. Biosfera, fluxo de energia e ciclos biogeoquímicos. 4. Métodos e ferramentas para estudos biogeográficos. 5. Fitogeografia do Brasil. 6. Biomas do mundo. 7. Elaboração de projetos de pesquisa em Biogeografia. 8. Elaboração de relatórios e seminários em Biogeografia.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#5146B9',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#85B946',
			obligatory: true
		},
		'GE801': {
			code: 'GE801',
			name: 'História das Ciências Naturais',
			ementa: 'O Renascimento e seu impacto na cosmovisão: a releitura do mundo natural. A Revolução Científica e o nascimento da ciência moderna: a Filosofia Natural, a História Natural e a especialização das disciplinas científicas. A 1a. Revolução Industrial, o Naturalismo científico e os viajantes. Colecionismo, Gabinetes e Museus. O processo de institucionalização e profissionalização das ciências naturais com ênfase no Brasil e América Latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7046B9',
			obligatory: true
		},
		'GF405': {
			code: 'GF405',
			name: 'Geografia do Brasil',
			ementa: 'As Regiões Brasileiras: contrastes e inter-relações. As especificidades regionais: bases físicas, ocupação e produção do espaço.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98F46',
			obligatory: true
		},
		'GF605': {
			code: 'GF605',
			name: 'Geomorfologia do Brasil',
			ementa: 'O relevo brasileiro: os grandes conjuntos geomorfológicos brasileiro. Influências das oscilações climáticas no quaternário. O modelado do Estado de São Paulo: compartimentos geomorfológicos paulistas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GF506'],
			color: '#B94685',
			obligatory: true
		},
		'GF801': {
			code: 'GF801',
			name: 'Geografia das Relações Internacionais',
			ementa: 'Geografia Política. Organizações Internacionais e Regionais. Os blocos econômicos e os mercados comuns. Conflitos contemporâneos: etnias, religiões, recursos naturais e tecnológicos na disputa do poder político e econômico.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4670B9',
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
		'GF302': {
			code: 'GF302',
			name: 'Sensoriamento Remoto',
			ementa: '1.Sensores remotos fotográficos 2.Sensores remotos orbitais 3.Espectro eletromagnético 4.Comportamento espectral de objetos geográficos 5.Estrutura das imagens orbitais 6.Processamento digital de imagens 7.Classificação digital de imagens 8.Geração de mapas temáticos a partir de imagens classificadas 9.Tópicos especiais de sensoriamento remoto para Geografia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GN207'],
			color: '#4665B9',
			obligatory: true
		},
		'GF502': {
			code: 'GF502',
			name: 'Geografia das Indústrias',
			ementa: 'A Primeira e Segunda Revolução Industrial: transição para o capitalismo, o nascimento da fábrica, a etapa monopolista do capitalismo e o surgimento das grandes corporações, gênese e difusão do taylorismo e do fordismo. A crise do fordismo e a emergência de um novo paradigma de organização industrial. A divisão internacional do trabalho. Sistemas industriais e organização do espaço: processos de concentração e desconcentração (nível mundial, nacional, regional e local). Política industrial e planejamento espacial: Estado, indústria e meio ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B9B946',
			obligatory: true
		},
		'GF602': {
			code: 'GF602',
			name: 'Análise Redes e Fluxos (Transportes e Comunicação)',
			ementa: 'O aumento da circulação como um primeiro movimento para a mundialização. Os meios de transportes, a ocupação especial e a circulação de mercadorias e pessoas. Os meios de comunicação e as novas tecnologias de informação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'GF703': {
			code: 'GF703',
			name: 'Desenvolvimento da Agricultura Brasileira',
			ementa: 'Retrospectiva histórica da agricultura brasileira. Relações sociais na agricultura. Modernização da agricultura no Brasil. Caracterização da produção agrícola e agroindustrial: fatores de produção, estrutura agrária. Comercialização e abastecimento. Desenvolvimento agrícola e agroindustrial.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['GF501'],
			color: '#4651B9',
			obligatory: true
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B965',
			obligatory: true
		},
		'GF806': {
			code: 'GF806',
			name: 'Estágio Supervisionado de Geografia I',
			ementa: 'Enfoque de práticas, a partir da análise e reflexão dos conteúdos propriamente geográficos representativos para os ensinos médio e fundamental; Análise e reflexão sobre o exercício e as práticas da ação administrativa, docente e de supervisão em escolas ou outras instituições; acompanhamento de atividades e/ou instituições educativas e pedagógicas em escolas ou outras instituições.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['AA460'],
			color: '#46B946',
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
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#467AB9',
			obligatory: true
		},
		'GF805': {
			code: 'GF805',
			name: 'Planejamento Territorial',
			ementa: 'O território como unidade condicionante do planejamento econômico. O planejamento como instrumento de ação política. O papel do estado (Federal, Estadual, Municipal) e das empresas no planejamento do território. A regionalização como instrumento de ação do planejamento. A organização do território impondo-se às ações de planejamento econômico no atual período técnico-científico e informacional. As noções de progresso, desenvolvimento e competitividade como norteadoras do processo de planejamento capitalista. O desenvolvimento geograficamente desigual e os paradoxos do planejamento territorial.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF401'],
			color: '#A4B946',
			obligatory: true
		},
		'GF901': {
			code: 'GF901',
			name: 'Estágio Supervisionado de Geografia II',
			ementa: 'Enfoque continuado a partir do percurso iniciado em práticas, a partir da análise e reflexão dos conteúdos propriamente geográficos representativos para os ensinos médio e fundamental; Análise e reflexão e avaliação sobre o exercício e as práticas da ação administrativa, docente e de supervisão escolar, acompanhamento, participação e avaliação do cotidiano de instituições que fundam-se sobre práticas educativas, escolares e de orientação pedagógica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['GF806'],
			color: '#46B946',
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
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#AEB946',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#51B946',
			obligatory: false
		},
		'GE403': {
			code: 'GE403',
			name: 'Micropalentologia e Palinologia',
			ementa: 'Conceitos básicos de sistemática de microfósseis e palinomorfos (polens, esporos e dinoflagelados) e suas aplicações para bioestratigrafia, paleoclimatologia e paleoecologia. Treinamento no reconhecimento de microfósseis e nas técnicas de preparação para estudo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AE',
			obligatory: false
		},
		'GE405': {
			code: 'GE405',
			name: 'Direito dos Recursos Naturais',
			ementa: 'Conceitos básicos sobre direito e recursos naturais. Código de Mineração, Código Florestal, Código das Águas. Legislações mineral, paramineral e ambiental e os impactos nas políticas públicas setoriais. Administração pública, recursos naturais e a compatibilização com o meio ambiente. Atuação profissional e legislação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4685B9',
			obligatory: false
		},
		'GE911': {
			code: 'GE911',
			name: 'Comunicação Científica em Ciências da Terra',
			ementa: 'Fundamentos de editoração de artigos científicos. Regras básicas de redação e ilustração. Padronização técnica de artigos, relatórios e textos de divulgação. Noções básicas de operação de programas de ilustração técnica. Internet e Ciências da Terra. Evolução histórica dos recursos didáticos em Geociências. Intercâmbio de formatos de arquivo e utilização de ilustrações, diagramas e mapas no ensino. Exercícios de laboratório e gabinete.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#B94665',
			obligatory: false
		},
		'GE912': {
			code: 'GE912',
			name: 'Mapas e Linguagem Visual no Ensino de Ciências Naturais',
			ementa: 'Mapas e linguagem visual como ferramentas das ciências naturais. Emergência das representações cartográficas e evolução histórica da representação espacial. Princípios metodológicos da elaboração de mapas geológicos e mapas temáticos. Aquisição de dados espaciais no campo e representação da informação científica por meio de geoinformática. Problemas de escala e técnicas de representação. Questões interdisciplinares de educação em ciências relacionadas a mapas. Exercícios de laboratório e gabinete.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'GE913': {
			code: 'GE913',
			name: 'Ciências Naturais e Ambiente',
			ementa: 'Abordagem epistemológica que busca a construção do entendimento de como as ciências naturais integram-se do ponto de vista de seus objetos de estudo e métodos quando se estuda o ambiente, seja em suas inter-relações no presente - processos e fenômenos atuais, seja em sua evolução ao longo da história da Terra. Natureza do conhecimento geocientífico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#B95146',
			obligatory: false
		},
		'GE914': {
			code: 'GE914',
			name: 'Ciência e Linguagens',
			ementa: 'Relações entre linguagem / retórica / discurso e a produção e circulação de conhecimentos científico-tecnológicos; interações discursivas e enunciativas em sala de aula; linguagem e cognição; linguagem e epistemologia; leituras da ciência na escola; linguagens e geociências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: '',
			color: '#469AB9',
			obligatory: false
		},
		'GE915': {
			code: 'GE915',
			name: 'Educação, Ciência, Tecnologia e Sociedade',
			ementa: 'Abordagem CTSA (Ciência, Tecnologia, Sociedade e Ambiente) na Educação básica: princípios pressupostos e elaboração de estratégias de ensino. O papel das Geociências em processos de tomada de decisão e posicionamentos em questões sócio-político-ambientais: impacto ambiental, saúde, riscos naturais e tecnologia para enfrentar esses problemas. Estudos de caso de questões socioambientais envolvendo conhecimentos estudos da Terra.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B9A446',
			obligatory: false
		},
		'GE916': {
			code: 'GE916',
			name: 'Ensino de Ciências da Terra e do Ambiente',
			ementa: 'Importância do ensino de Ciências da Terra para o ensino básico. Modelos e dificuldades comuns de ensino e aprendizagem. Importância e perspectiva cognitiva, ambiental e política do ensino de ciclo da água. Papel estratégico do ciclo da água entre temas ensinados em ciências naturais, experimentais e tecnológicas. Inclui levantamentos das condições de ensino de problemas ambientais relativos à circulação da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#5B46B9',
			obligatory: false
		},
		'GF001': {
			code: 'GF001',
			name: 'Iniciação Científica',
			ementa: 'Introdução à abordagem científica relacionada à pesquisa de Geografia. Teorias e hipóteses. Levantamentos de dados. Aplicação de técnicas de pesquisa. Análise de resultados. Elaboração de relatórios de pesquisa e outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA425'],
			color: '#B94670',
			obligatory: false
		},
		'GF002': {
			code: 'GF002',
			name: 'Estágio Supervisionado I',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#9A46B9',
			obligatory: false
		},
		'GF003': {
			code: 'GF003',
			name: 'Estágio Supervisionado II',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#A446B9',
			obligatory: false
		},
		'GF100': {
			code: 'GF100',
			name: 'Geomorfologia e Meio Ambiente',
			ementa: 'Conteúdo, semiologia e aplicabilidade das legendas geomorfológicas. Cartografia geomorfológica e planejamento: estudos de caso. Monitoramento ambiental e a questão dos geoindicadores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6546B9',
			obligatory: false
		},
		'GF102': {
			code: 'GF102',
			name: 'Movimentos Sociais',
			ementa: 'Debate sobre as teorias dos Movimentos Sociais. Formas de organização dos Movimentos Urbanos e Rurais. Autonomia, organizações locais, nacionais e internacionais. Movimentos libertários: feministas, ecologistas e estudantis. Organizações não governamentais.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A4B9',
			obligatory: false
		},
		'GF105': {
			code: 'GF105',
			name: 'Metrópoles e Metropolização',
			ementa: 'O surgimento das metrópoles e o processo de metropolização contemporâneo. O fenômeno da urbanização/conurbação e as estratégias de planejamento. Qualidade de vida, sociedade e meio ambiente nas grandes metrópoles. As cidades mundiais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946AE',
			obligatory: false
		},
		'GF106': {
			code: 'GF106',
			name: 'Turismo e Novas Territorialidades',
			ementa: 'Aspectos históricos do surgimento do turismo (sedentarismo, nomadismo, viajantes e turistas). A atividade turística na produção do espaço: paisagens, valores culturais e meio ambiente. Modalidades de turismo: da indústria do turismo de massa ao turismo ecológico. Planejamento, degradação e sustentabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7A46B9',
			obligatory: false
		},
		'GF107': {
			code: 'GF107',
			name: 'América Latina - Novas Relações',
			ementa: 'Geografia, colonização e geopolítica do continente americano. Os regimes militares, as lutas por emancipação e a nova integração econômica. O Mercosul e as identidades regionais. As metrópoles latino-americanas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9AE46',
			obligatory: false
		},
		'GF111': {
			code: 'GF111',
			name: 'Mudanças Globais no Sistema Terra',
			ementa: 'Abordagem integrada das alterações do Sistema Terra, analisando processos ecológicos e socioeconômicos em perspectiva histórica. Ênfase nos prementes problemas ambientais que atingem o planeta e que refletem o modelo de desenvolvimento e padrões de ocupação diferencial do espaço territorial, definidos em macro escala, mas que se cristalizam em escala local. Discussão de problemas atuais na busca de alternativas cientificamente viáveis e socialmente aceitáveis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AE46B9',
			obligatory: false
		},
		'GF112': {
			code: 'GF112',
			name: 'Organização do Espaço Regional',
			ementa: 'Teorias e conceitos do desenvolvimento regional. Região, regionalização e regionalismos: planejamento e organização do espaço. Transformações econômicas e novas estratégias espaciais. Sociedade e natureza na organização socioespacial. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'GF115': {
			code: 'GF115',
			name: 'Economia do Desenvolvimento',
			ementa: 'Características estruturais das economias desenvolvidas e subdesenvolvidas. Modelos conceituais de interpretação do processo de desenvolvimento: análise keynesiana e neokeynesiana; e nokeynesiana; teorias do desenvolvimento; enfoque de Schumpeter. Industrialização, subdesenvolvimento e dependência na América Latina. Ecodesenvolvimento e desenvolvimento sustentado.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96546',
			obligatory: false
		},
		'GF120': {
			code: 'GF120',
			name: 'Tópicos Especiais em Geografia',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B97A46',
			obligatory: false
		},
		'GF121': {
			code: 'GF121',
			name: 'Tópicos Avançados em Geografia',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94651',
			obligatory: false
		},
		'GF123': {
			code: 'GF123',
			name: 'Tópicos Especiais em Geografia I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9465B',
			obligatory: false
		},
		'GF124': {
			code: 'GF124',
			name: 'Tópicos Especiais em Geografia II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946A4',
			obligatory: false
		},
		'GF125': {
			code: 'GF125',
			name: 'Tópicos Avançados em Geografia I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B95B',
			obligatory: false
		},
		'GF126': {
			code: 'GF126',
			name: 'Tópicos Avançados em Geografia II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7AB946',
			obligatory: false
		},
		'GF130': {
			code: 'GF130',
			name: 'Geografia Regional do Brasil',
			ementa: 'Fornecer noções metodológicas fundamentais de regionalização do espaço brasileiro. Para tanto, elencamos os seguintes itens: fundamentos teóricos do processo de regionalização brasileiro; identificação dos diferentes critérios de regionalização do território brasileiro; as funções da regionalização para o planejamento; a regionalização como instrumentalização das ações do Estado e do mercado; a região como categoria analítica e como conceito na geografia; fundamentos teóricos do planejamento regional brasileiro.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B99A46',
			obligatory: false
		},
		'GF131': {
			code: 'GF131',
			name: 'Mapeamento Pedológico',
			ementa: 'Sistema Brasileiro de Classificação de Solos. Cartografia de solos. Sistemática de levantamento de solos em campo. Interpretação de análises químicas e físicas para classificação. Geração de mapas geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF508'],
			color: '#8F46B9',
			obligatory: false
		},
		'GF132': {
			code: 'GF132',
			name: 'Logística e Território Brasileiro',
			ementa: 'Origem, evolução e abordagens do conceito de logística. Abordagem geográfica da logística. Logística como expressão geográfica da circulação corporativa no período histórico atual e como variável ascendente da globalização. Logística e competitividade regional. As características do território brasileiro como indutora de estratégias, investimentos e organização logística. Logística e planejamento territorial no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GF508'],
			color: '#8F46B9',
			obligatory: false
		},
		'GF133': {
			code: 'GF133',
			name: 'Fundamentos de Micromorfologia de Solos',
			ementa: 'Introdução e histórico. Conceitos e definições. Hierarquias e cronologia das organizações. Os constituintes do fundo matricial. As feições pedológicas. Análise e interpretação de dados micromorfológicos com ênfase em solos tropicais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF508'],
			color: '#8F46B9',
			obligatory: false
		},
		'GF134': {
			code: 'GF134',
			name: 'Fotointerpretação e Mapeamento Térmico',
			ementa: 'Introdução à fotogrametria. Histórico da fotogrametria. Elementos de fotogrametria, estereoscopia e fotointerpretação. Fundamentos de restituição aerofotogramétrica. Aplicações de fotografias aéreas na Geografia. Procedimentos e técnicas de fotointerpretação geográfica. Processamento digital de fotos aéreas. Elaboração de mapeamentos temáticos a partir da interpretação de fotos aéreas.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B970',
			obligatory: false
		},
		'GF505': {
			code: 'GF505',
			name: 'Recursos Naturais, Meio Ambiente e Desenvolvimento',
			ementa: 'Os recursos naturais como base para o desenvolvimento, a natureza como recurso. Avaliação socioeconômica e balanço entre oferta e demanda de recursos naturais. Recurso natural, meio ambiente e a mediação tecnológica. A gestão dos recursos naturais sob a ótica ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#468FB9',
			obligatory: false
		}
	}
};

export default catalogue;
