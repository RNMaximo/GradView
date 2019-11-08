const catalogue = {
	totalCredits: 234,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GF129', 'GF136', 'GF301', 'GN101', 'GN107', 'GN111']
		},
		'sem-2': {
			id: '2',
			subjects: ['GF402', 'GF410', 'GF411', 'GF503', 'GF601', 'GN105']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL511', 'EL683', 'GF302', 'GF303', 'GF306', 'GF604', 'LA122']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'GF305', 'GF401', 'GF413', 'GF507', 'GN304']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'GF501', 'GF502', 'GF506', 'GF508', 'GF607']
		},
		'sem-6': {
			id: '6',
			subjects: ['BT201', 'EL874', 'GF405', 'GF605', 'GF801', 'ELET4']
		},
		'sem-7': {
			id: '7',
			subjects: ['FN468', 'GF602', 'GF603', 'GF714', 'GF806', 'GF902']
		},
		'sem-8': {
			id: '8',
			subjects: ['GF406', 'GF805', 'GF814', 'GF901', 'GF903', 'ELET8']
		}
	},

	subjects: {
		'GF129': {
			code: 'GF129',
			name: 'Geografia Econômica',
			ementa: 'Fornecer instrumental conceitual básico da Economia Política do Território. Para tanto, elencamos os seguintes pontos: o espaço geográfico como condicionante econômico-social; as divisões técnicas, social e territorial do trabalho; centro, periferia e difusão das modernizações; cadeias e circuitos espaciais produtivos; concentração e centralização dos capitais; o território nacional como mediação entre os fluxos globais do capital e as economias regionais; monopólios, oligopólios e alienação dos espaços no Terceiro Mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF136': {
			code: 'GF136',
			name: 'Cartografia Sistemática',
			ementa: 'Introdução à Cartografia. Princípios de Geodésia. Escalas. Sistemas de Coordenadas.Projeções Cartográficas. Sistema Cartográfico Nacional (SCN). Uso de Cartas, Mapas ePlantas em Ciências da Terra. Sistema de Posicionamento Global (GPS). Elementos deTopografia. Cartografia Digital. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'GF301': {
			code: 'GF301',
			name: 'História do Pensamento Geográfico',
			ementa: 'O conhecimento geográfico no Mundo Antigo e no Mundo Medieval. Período Renascentista e conhecimento do mundo. Filosofia, Ciência e Geografia dos Modernos. A Institucionalização da Geografia, Estado, colonialismo e conhecimento geográfico. O Pensamento Libertário e a geografia. Determinismo e possibilismo. Difusão das Escolas de Geografia. Renovação da geografia e redefinição do objeto. Geografia Pragmática e planejamento econômico. As geografias radicais. Tendências teórico-metodológicas atuais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico. Recontextualização dos conceitos e conteúdos da geografia humana desenvolvidos no processo de escolarização e na universidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GN111': {
			code: 'GN111',
			name: 'Sistema Terra',
			ementa: 'Conceitos básicos de geologia. Origem do universo e origem do Sistema Solar. Estrutura e composição da Terra. Dinâmica interna do planeta Terra e a tectônica de placas. Materiais terrestres: rochas e minerais. O registro geológico e a escala do tempo geológico. Noções dos processos de interações entre os sistemas terrestres (litosfera, hidrosfera, biosfera, atmosfera e antroposfera). Mapas geológicos e noções básicas de trabalhos de campo em geologia. Sistema Terra e a humanidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'GF402': {
			code: 'GF402',
			name: 'História Econômica, Política e Sociedade do Brasil',
			ementa: 'Análise do processo de formação do Brasil contemporâneo. A inserção do país na divisão internacional do trabalho (1850-1930). Os principais fatores de integração da economia nacional (1870-1950). As mudanças políticas e sociais do período republicano.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'GF410': {
			code: 'GF410',
			name: 'Climatologia I',
			ementa: 'Tempo atmosférico e clima; Distribuição e balanço global de radiação; Composição e estrutura da atmosfera; Atmosfera pretérita e atual; Elementos do clima (temperatura, pressão atmosférica, umidade do ar, precipitações atmosféricas) - definições, unidades de medição, controles de grande escala, representação das suas variações espaço-temporais e suas influências no condicionamento de aspectos físicos e na vida; Gradiente vertical da atmosfera; Nuvens; Circulação geral da atmosfera (convectiva e meridional); Massas de ar, frentes e perturbações atmosféricas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF411': {
			code: 'GF411',
			name: 'Didática da Geografia',
			ementa: 'História da geografia escolar brasileira; a construção dos conceitos e das categorias geográficas no ensino de geografia; políticas curriculares e geografia escolar; diferentes abordagens pedagógicas no ensino de geografia; qualidade e diversidade do material didático e paradidático no ensino de geografia.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'GF601': {
			code: 'GF601',
			name: 'Geografia Regional (Teoria e Regionalização Mundial)',
			ementa: 'A Região como categoria de análise da Geografia. Sistemas políticos, econômicos e quadros naturais na organização do espaço mundial. A formação contemporânea dos grandes blocos econômicos e geopolíticos no contexto da globalização da economia e mundialização da cultura. Análise téorica e através de estudos de casos das divisões: países capitalistas/países socialistas, centro-periferia, desenvolvimento / subdesenvolvimento, Norte/Sul. Potências econômicas mundiais. Analisar detalhadamente um continente (a escolher) como estudo de caso.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'GF302': {
			code: 'GF302',
			name: 'Sensoriamento Remoto',
			ementa: '1.Sensores remotos fotográficos 2.Sensores remotos orbitais 3.Espectro eletromagnético 4.Comportamento espectral de objetos geográficos 5.Estrutura das imagens orbitais 6.Processamento digital de imagens 7.Classificação digital de imagens 8.Geração de mapas temáticos a partir de imagens classificadas 9.Tópicos especiais de sensoriamento remoto para Geografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF303': {
			code: 'GF303',
			name: 'Geomorfologia',
			ementa: 'Estudos das formas de relevo, gênese e evolução. Análise das inter-relações: rocha X solo X clima X relevo, com ênfase nos aspectos tectono-estruturais. Unidades morfoestruturais do globo terrestre. Processos endógenos no modelado do relevo. Teorias e técnicas de mapeamento geomorfológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GN111']
		},
		'GF306': {
			code: 'GF306',
			name: 'Geografia Regional: América Latina',
			ementa: 'Os atributos naturais do continente americano enquanto recursos materiais de poder: recursos naturais, biodiversidade, recursos hídricos e energéticos. Os territórios e a formação diferenciada dos estados nacionais. A invenção da América Latina como categoria regional. A geopolítica global e a geopolítica da América Latina. América Latina: industrialização, urbanização e metropolização. A integração regional na América Latina. As geografias dos organismos supranacionais na América Latina. As populações tradicionais do continente americano. Atores extra-regionais na América Latina (EUA, EU e Rússia)',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF604': {
			code: 'GF604',
			name: 'Geografia Urbana',
			ementa: 'Definição e evolução do fenômeno urbano. As cidades: os sítios, o crescimento horizontal e vertical, a estrutura urbana, as áreas funcionais, o sistema viário e a circulação. A interdisciplinaridade dos estudos urbanos. Centralidade, hierarquia e redes urbanas. Conjuntos urbanos complexos: áreas metropolitanas e conurbação. Valor e renda da terra. Meio ambiente e qualidade de vida no meio urbano. Paisagens, usos do solo e culturas urbanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
			requisitos: ''
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'GF305': {
			code: 'GF305',
			name: 'Práticas de Geociências na Educação Básica',
			ementa: 'A disciplina pretende articular fundamentos de Geociências no ensino de Geografia na educação básica, bem como apresentar e desenvolver algumas práticas pedagógicas de geociências que se mostram mais eficazes no ensino. Ademais, serão trabalhadas práticas de ensino em sala de aula com recursos básicos, tecnológicos e audiovisuais, assim como, as práticas de campo como ferramenta de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ''
		},
		'GF401': {
			code: 'GF401',
			name: 'Metodologia da Geografia',
			ementa: 'Bases epistemológicas. Métodos e conceitos desenvolvidos ao longo da história do pensamento geográfico. Positivismo: determinismo, funcionalismo e estruturalismo. Orientações contemporâneas: positivismo lógico, fenomenologia e marxismo. Materialismo dialético e a Geografia como ciência crítica. O espaço geográfico e a dimensão temporal: forma, processo, estrutura e função no método da Geografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF301']
		},
		'GF413': {
			code: 'GF413',
			name: 'Geografia Regional: África',
			ementa: 'Os atributos naturais do continente africano enquanto recursos materiais de poder: recursos naturais, biodiversidade, recursos hídricos e energéticos. Diásporas. Colonialismo, imperialismo e formação dos Estados nacionais pluriétnicos africanos. A presença do continente africano na geopolítica do mundo contemporâneo. Urbanização, industrialização e metropolização no continente africano. As relações África e Brasil ontem e hoje. Os desafios do ensino de geografia da África no ensino básico brasileiro.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF507': {
			code: 'GF507',
			name: 'Cartografia Temática',
			ementa: 'Pesquisa, análise e tratamento da informação. Representação cartográfica com temas significativos para o estudo da Terra e as características das variáveis. Formas de representação pontual, linear e zonal, considerando os fenômenos qualitativos, quantitativos, estáticos e dinâmicos. Propriedades perceptivas das variáveis gráficas: execução, leitura e interpretação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GN304': {
			code: 'GN304',
			name: 'Trabalho de Campo',
			ementa: 'Treinamento de campo para entendimento das feições do terreno, dentro de uma visão holística, observando-se as interações de rocha X solo X clima X hidrografia X ocupação humana.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN107', 'GN111']
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445']
		},
		'GF501': {
			code: 'GF501',
			name: 'Geografia Agrária',
			ementa: 'Atividade agrícola e interdependência com outros setores da economia. Bases fundiárias e sociais: distribuição e tipos de propriedade, de estabelecimentos, de exploração econômica e de relações de trabalho. Bases econômicas do estabelecimento agrícola. A atividade agrícola e a natureza como recurso e restrição. Fatores da produção: terra, trabalho, capital e informação. Comercialização e mercado. Atributos da atividade. Regionalização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF502': {
			code: 'GF502',
			name: 'Geografia das Indústrias',
			ementa: 'A Primeira e Segunda Revolução Industrial: transição para o capitalismo, o nascimento da fábrica, a etapa monopolista do capitalismo e o surgimento das grandes corporações, gênese e difusão do taylorismo e do fordismo. A crise do fordismo e a emergência de um novo paradigma de organização industrial. A divisão internacional do trabalho. Sistemas industriais e organização do espaço: processos de concentração e desconcentração (nível mundial, nacional, regional e local). Política industrial e planejamento espacial: Estado, indústria e meio ambiente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF506': {
			code: 'GF506',
			name: 'Geomorfologia (Climática e Litorânea)',
			ementa: 'Perspectivas e pressuposições teóricas. Zonas morfoclimáticas do globo. O modelado das regiões quentes e úmidas. O sistema morfogenético e os processos denominantes. O sistema morfoclimático das regiões secas. Os mecanismos e as influências geomorfológicas das oscilações paleoclimáticas no quaternário.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF303']
		},
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF607': {
			code: 'GF607',
			name: 'Representações e Linguagens no Ensino de Geografia',
			ementa: 'Articulação de conhecimentos teóricos e práticos com vista à apropriação educativa da cartografia e das linguagens contemporâneas para o ensino de geografia. Aproximação de práticas escolares e culturais na produção de saberes e conhecimentos geográficos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. Biosfera, fluxo de energia e ciclos biogeoquímicos. Métodos e ferramentas para estudos biogeográficos. Fitogeografia do Brasil. Biomas do mundo. Elaboração de projetos de pesquisa em Biogeografia. Elaboração de relatórios e seminários em Biogeografia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774']
		},
		'GF405': {
			code: 'GF405',
			name: 'Geografia do Brasil',
			ementa: 'As Regiões Brasileiras: contrastes e inter-relações. As especificidades regionais: bases físicas, ocupação e produção do espaço.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF605': {
			code: 'GF605',
			name: 'Geomorfologia do Brasil',
			ementa: 'O relevo brasileiro: os grandes conjuntos geomorfológicos brasileiro. Influências das oscilações climáticas no quaternário. O modelado do Estado de São Paulo: compartimentos geomorfológicos paulistas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF506']
		},
		'GF801': {
			code: 'GF801',
			name: 'Geografia das Relações Internacionais',
			ementa: 'Geografia Política. Organizações Internacionais e Regionais. Os blocos econômicos e os mercados comuns. Conflitos contemporâneos: etnias, religiões, recursos naturais e tecnológicos na disputa do poder político e econômico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'GF602': {
			code: 'GF602',
			name: 'Análise Redes e Fluxos (Transportes e Comunicação)',
			ementa: 'O aumento da circulação como um primeiro movimento para a mundialização. Os meios de transportes, a ocupação especial e a circulação de mercadorias e pessoas. Os meios de comunicação e as novas tecnologias de informação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF603': {
			code: 'GF603',
			name: 'Estudos Populacionais',
			ementa: 'População mundial: história e espaço geográfico. Teoria da transição democrática. Fontes de dados. Movimentos migratórios e mobilidade populacional. Natalidade, mortalidade, crescimento natural e vegetativo. Composição e técnicas de mensuração: etária, por sexo, étnica e estudos de PEA. Medidas de densidade e distribuição populacional. Processos de projeção populacional e tendências de mobilidade. Desigualdades regionais e o Planejamento. Estudos de caso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'GF714': {
			code: 'GF714',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Levantamento de fontes de dados, técnicas, métodos de pesquisa e/ou de elaboração de materiais gráfico e cartográfico sobre o espaço geográfico e/ou educação em geografia, podendo ter como parâmetro um estudo de caso; elaboração de um projeto de pesquisa.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA470']
		},
		'GF806': {
			code: 'GF806',
			name: 'Estágio Supervisionado de Geografia I',
			ementa: 'Enfoque de práticas, a partir da análise e reflexão dos conteúdos propriamente geográficos representativos para os ensinos médio e fundamental; Análise e reflexão sobre o exercício e as práticas da ação administrativa, docente e de supervisão em escolas ou outras instituições; acompanhamento de atividades e/ou instituições educativas e pedagógicas em escolas ou outras instituições.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:2, C:6},
			requisitos: ['EL774', 'EL874']
		},
		'GF902': {
			code: 'GF902',
			name: 'Tópicos Especiais em Atividades Científicas e Culturais I',
			ementa: 'A formação científico-cultural objetiva aprofundar conhecimentos relativos a áreas relacionadas ao trabalho pedagógico na educação, tendo especial atenção com a ampliação e enriquecimento geral incluindo experiências extra-curriculares diversificadas que propiciem acesso, conhecimento e familiaridade com linguagens culturais, artísticas, corporais e científicas, indispensáveis para o trabalho em sala de aula.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:4, D:0, HS:7, SL:0, C:7},
			requisitos: ''
		},
		'GF406': {
			code: 'GF406',
			name: 'Geografia Política',
			ementa: 'Definição. Geografia Política, geoestratégia e fronteiras. Organização do espaço como instrumento de poder. O Estado Moderno e as políticas territoriais internas e externas. A Geopolítica do período militar brasileiro. Cenário geopolítico mundial contemporâneo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'GF805': {
			code: 'GF805',
			name: 'Planejamento Territorial',
			ementa: 'O território como unidade condicionante do planejamento econômico. O planejamento como instrumento de ação política. O papel do estado (Federal, Estadual, Municipal) e das empresas no planejamento do território. A regionalização como instrumento de ação do planejamento. A organização do território impondo-se às ações de planejamento econômico no atual período técnico-científico e informacional. As noções de progresso, desenvolvimento e competitividade como norteadoras do processo de planejamento capitalista. O desenvolvimento geograficamente desigual e os paradoxos do planejamento territorial. Esta disciplina prevê a realização de trabalho de campo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF401']
		},
		'GF814': {
			code: 'GF814',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Utilização de métodos e técnicas de pesquisa em geografia e/ou educação em geografia: documentação indireta (dados, documentos, mapas, cartas, imagens), documentação direta (pesquisa de campo, observação, medição, entrevista, questionários fechados e abertos) e outras metodologias, tendo por objetivo a realização de uma dentre quatro categorias de pesquisa: 1) trabalhos teórico-empíricos e/ou síntese bibliográfica de temas afeitos à pesquisa geográfica e/ou educação em geografia (tipo monografia); 2) mapeamentos e suas interpretações e relatórios; 3) relatório final de iniciação científica; 4) relatório final de estágio profissional supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480']
		},
		'GF901': {
			code: 'GF901',
			name: 'Estágio Supervisionado de Geografia II',
			ementa: 'Enfoque continuado a partir do percurso iniciado em práticas, a partir da análise e reflexão dos conteúdos propriamente geográficos representativos para os ensinos médio e fundamental; Análise e reflexão e avaliação sobre o exercício e as práticas da ação administrativa, docente e de supervisão escolar, acompanhamento, participação e avaliação do cotidiano de instituições que fundam-se sobre práticas educativas, escolares e de orientação pedagógica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:2, C:8},
			requisitos: ['GF806']
		},
		'GF903': {
			code: 'GF903',
			name: 'Tópicos Especiais em Atividades Científicas e Culturais II',
			ementa: 'A formação científico-cultural objetiva aprofundar conhecimentos relativos a áreas relacionadas ao trabalho pedagógico na educação, tendo especial atenção com a ampliação e enriquecimento geral incluindo experiências extra-curriculares diversificadas que propiciem acesso, conhecimento e familiaridade com linguagens culturais, artísticas, corporais e científicas, indispensáveis para o trabalho em sala de aula.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:4, D:0, HS:7, SL:0, C:7},
			requisitos: ''
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;
