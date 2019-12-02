const catalogue = {
	totalCredits: 229,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GF301', 'GN101', 'GN106', 'GN108', 'GN110']
		},
		'sem-2': {
			id: '2',
			subjects: ['GF129', 'GF401', 'GN105', 'GN107', 'GN208', 'GN301']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL511', 'EL683', 'GF303', 'GF305', 'GF507', 'GF603', 'LA122', 'ME173']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'GF402', 'GF410', 'GF411', 'GF503', 'GF601', 'GN304']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'GF501', 'GF506', 'GF508', 'GF509', 'GF604', 'GF607']
		},
		'sem-6': {
			id: '6',
			subjects: ['BT201', 'EL874', 'GF405', 'GF605', 'GF801', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['FN468', 'GF302', 'GF502', 'GF602', 'GF714', 'GF806']
		},
		'sem-8': {
			id: '8',
			subjects: ['GF406', 'GF805', 'GF814', 'GF901', 'ELET08']
		}
	},

	subjects: {
		'GF301': {
			code: 'GF301',
			name: 'História do Pensamento Geográfico',
			ementa: 'O conhecimento geográfico no Mundo Antigo e no Mundo Medieval. Período Renascentista e conhecimento do mundo. Filosofia, Ciência e Geografia dos Modernos. A Institucionalização da Geografia, Estado, colonialismo e conhecimento geográfico. O Pensamento Libertário e a geografia. Determinismo e possibilismo. Difusão das Escolas de Geografia. Renovação da geografia e redefinição do objeto. Geografia Pragmática e planejamento econômico. As geografias radicais. Tendências teórico-metodológicas atuais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#50D940'
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B040D9'
		},
		'GN106': {
			code: 'GN106',
			name: 'Ciência do Sistema Terra I',
			ementa: 'Fundamentos de estudo e campos de aplicação da Geologia. Componentes do Sistema Terra e esferas terrestres (geosfera, atmosfera, hidrosfera, biosfera e esfera social). Tempo geológico, materiais terrestres e Tectônica de Placas. O Homem como agente geológico; situações de risco geológico. Atividades práticas de campo para reconhecimento de processos naturais e da interações destes com a ação humana. Representação e tratamento de informação geológica. Aprendizagem ativa e uso de recursos educacionais em Geociências. Atuação profissional e educacional em Ciências da Terra. Práticas de laboratório e trabalho de campo.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98840'
		},
		'GN108': {
			code: 'GN108',
			name: 'Cartografia Sistemática',
			ementa: 'Introdução à Cartografia. Princípios de Geodésia. Escalas. Sistemas de Coordenadas. Projeções Cartográficas. Sistema Cartográfico Nacional (SCN). Uso de Cartas, Mapas e Plantas em Ciências da Terra. Sistema de Posicionamento Global (GPS). Elementos de Topografia. Cartografia Digital. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C940D9'
		},
		'GN110': {
			code: 'GN110',
			name: 'Ciência do Sistema Mundo',
			ementa: 'Conceitos básicos de Geografia Física. O estrato geográfico e a superfície da Terra como unidade geográfica. Análise e dinâmica dos sistemas geomorfológico, pedológico, climático e hidrográfico. Grandes domínios naturais da Terra. Recontextualização dos conceitos e conteúdos de geografia física desenvolvidos no processo de escolarização e na universidade. Geografia Física e Educação Ambiental no currículo escolar, aproximações, diferenças e disputas. Atividades de campo como práticas contextualizadoras de conhecimentos de geografia física.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B0D940'
		},
		'GF129': {
			code: 'GF129',
			name: 'Geografia Econômica',
			ementa: 'Fornecer instrumental conceitual básico da Economia Política do Território. Para tanto, elencamos os seguintes pontos: o espaço geográfico como condicionante econômico-social; as divisões técnicas, social e territorial do trabalho; centro, periferia e difusão das modernizações; cadeias e circuitos espaciais produtivos; concentração e centralização dos capitais; o território nacional como mediação entre os fluxos globais do capital e as economias regionais; monopólios, oligopólios e alienação dos espaços no Terceiro Mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D990'
		},
		'GF401': {
			code: 'GF401',
			name: 'Metodologia da Geografia',
			ementa: 'Bases epistemológicas. Métodos e conceitos desenvolvidos ao longo da história do pensamento geográfico. Positivismo: determinismo, funcionalismo e estruturalismo. Orientações contemporâneas: positivismo lógico, fenomenologia e marxismo. Materialismo dialético e a Geografia como ciência crítica. O espaço geográfico e a dimensão temporal: forma, processo, estrutura e função no método da Geografia.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GF301'],
			color: ''
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D9A040'
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico. Recontextualização dos conceitos e conteúdos da geografia humana desenvolvidos no processo de escolarização e na universidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D97040'
		},
		'GN208': {
			code: 'GN208',
			name: 'Ciência do Sistema Terra II',
			ementa: 'Métodos de investigação e Aplicações da Geologia. Processos geológicos e a interação das esferas terrestres. Ambientes de formação de rochas na Geosfera e suas interações com as demais esferas (atmosfera, hidrosfera, biosfera e esfera social). O Homem como agente geológico; situações de risco geológico. Atividades práticas de campo para reconhecimento de processos naturais e das interações destes com a ação humana. Mapas, perfis e modelos em Geologia. Atuação profissional e educacional em Ciências da Terra. Aprendizagem ativa e uso de recursos educacionais em Geociências. Práticas de laboratório e trabalho de campo.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GN106'],
			color: ''
		},
		'GN301': {
			code: 'GN301',
			name: 'História das Teorias Econômicas',
			ementa: 'Elementos de economia. Análise do surgimento e da evolução da Economia Política como ramo do conhecimento científico. As principais escolas do pensamento econômico e suas respectivas contribuições ao entendimento do mundo em que vivemos. Disciplinas propedêuticas para o estudo da Economia dos Recursos Naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#80D940'
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940A0'
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9D9'
		},
		'GF303': {
			code: 'GF303',
			name: 'Geomorfologia',
			ementa: 'Estudos das formas de relevo, gênese e evolução. Análise das inter-relações: rocha X solo X clima X relevo, com ênfase nos aspectos tectono-estruturais. Unidades morfoestruturais do globo terrestre. Processos endógenos no modelado do relevo. Teorias e técnicas de mapeamento geomorfológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GN110', 'GN208'],
			color: ''
		},
		'GF305': {
			code: 'GF305',
			name: 'Práticas de Geociências na Educação Básica',
			ementa: 'A disciplina pretende articular fundamentos de Geociências no ensino de Geografia na educação básica, bem como apresentar e desenvolver algumas práticas pedagógicas de geociências que se mostram mais eficazes no ensino. Ademais, serão trabalhadas práticas de ensino em sala de aula com recursos básicos, tecnológicos e audiovisuais, assim como, as práticas de campo como ferramenta de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#D94058'
		},
		'GF507': {
			code: 'GF507',
			name: 'Cartografia Temática',
			ementa: 'Pesquisa, análise e tratamento da informação. Representação cartográfica com temas significativos para o estudo da Terra e as características das variáveis. Formas de representação pontual, linear e zonal, considerando os fenômenos qualitativos, quantitativos, estáticos e dinâmicos. Propriedades perceptivas das variáveis gráficas: execução, leitura e interpretação.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94088'
		},
		'GF603': {
			code: 'GF603',
			name: 'Estudos Populacionais',
			ementa: 'População mundial: história e espaço geográfico. Teoria da transição democrática. Fontes de dados. Movimentos migratórios e mobilidade populacional. Natalidade, mortalidade, crescimento natural e vegetativo. Composição e técnicas de mensuração: etária, por sexo, étnica e estudos de PEA. Medidas de densidade e distribuição populacional. Processos de projeção populacional e tendências de mobilidade. Desigualdades regionais e o Planejamento. Estudos de caso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B940'
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4048D9'
		},
		'ME173': {
			code: 'ME173',
			name: 'Estatística Descritiva',
			ementa: 'População e amostras. Levantamento e apuração de dados. Dados registrados e não registrados: censo e estimativa de população. Descrição de dados amostrais: tabelas, gráficos, medidas de posição e de variabilidade. Noções elementares de probabilidade. Análise de uma distribuição de freqüência de natureza qualitativa: coeficientes e índices mais usados. Elementos de demografia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95840'
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#98D940'
		},
		'GF402': {
			code: 'GF402',
			name: 'História Econômica, Política e Sociedade do Brasil',
			ementa: 'Análise do processo de formação do Brasil contemporâneo. A inserção do país na divisão internacional do trabalho (1850-1930). Os principais fatores de integração da economia nacional (1870-1950). As mudanças políticas e sociais do período republicano.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#5040D9'
		},
		'GF410': {
			code: 'GF410',
			name: 'Climatologia I',
			ementa: 'Tempo atmosférico e clima; Distribuição e balanço global de radiação; Composição e estrutura da atmosfera; Atmosfera pretérita e atual; Elementos do clima (temperatura, pressão atmosférica, umidade do ar, precipitações atmosféricas) - definições, unidades de medição, controles de grande escala, representação das suas variações espaço-temporais e suas influências no condicionamento de aspectos físicos e na vida; Gradiente vertical da atmosfera; Nuvens; Circulação geral da atmosfera (convectiva e meridional); Massas de ar, frentes e perturbações atmosféricas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40A8D9'
		},
		'GF411': {
			code: 'GF411',
			name: 'Didática da Geografia',
			ementa: 'História da geografia escolar brasileira; a construção dos conceitos e das categorias geográficas no ensino de geografia; políticas curriculares e geografia escolar; diferentes abordagens pedagógicas no ensino de geografia; qualidade e diversidade do material didático e paradidático no ensino de geografia.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40C1D9'
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#4090D9'
		},
		'GF601': {
			code: 'GF601',
			name: 'Geografia Regional (Teoria e Regionalização Mundial)',
			ementa: 'A Região como categoria de análise da Geografia. Sistemas políticos, econômicos e quadros naturais na organização do espaço mundial. A formação contemporânea dos grandes blocos econômicos e geopolíticos no contexto da globalização da economia e mundialização da cultura. Análise téorica e através de estudos de casos das divisões: países capitalistas/países socialistas, centro-periferia, desenvolvimento / subdesenvolvimento, Norte/Sul. Potências econômicas mundiais. Analisar detalhadamente um continente (a escolher) como estudo de caso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#40D9C1'
		},
		'GN304': {
			code: 'GN304',
			name: 'Trabalho de Campo',
			ementa: 'Treinamento de campo para entendimento das feições do terreno, dentro de uma visão holística, observando-se as interações de rocha X solo X clima X hidrografia X ocupação humana.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN106', 'GN110'],
			color: ''
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#D940D1'
		},
		'GF501': {
			code: 'GF501',
			name: 'Geografia Agrária',
			ementa: 'Atividade agrícola e interdependência com outros setores da economia. Bases fundiárias e sociais: distribuição e tipos de propriedade, de estabelecimentos, de exploração econômica e de relações de trabalho. Bases econômicas do estabelecimento agrícola. A atividade agrícola e a natureza como recurso e restrição. Fatores da produção: terra, trabalho, capital e informação. Comercialização e mercado. Atributos da atividade. Regionalização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4060D9'
		},
		'GF506': {
			code: 'GF506',
			name: 'Geomorfologia (Climática e Litorânea)',
			ementa: 'Perspectivas e pressuposições teóricas. Zonas morfoclimáticas do globo. O modelado das regiões quentes e úmidas. O sistema morfogenético e os processos denominantes. O sistema morfoclimático das regiões secas. Os mecanismos e as influências geomorfológicas das oscilações paleoclimáticas no quaternário.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4078D9'
		},
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9A8'
		},
		'GF509': {
			code: 'GF509',
			name: 'Climatologia II',
			ementa: 'A Climatologia no contexto das ciências atmosféricas e da ciência geográfica. Escalas climáticas. Variação das condições climáticas ao longo do tempo e variabilidade atual. Análise rítmica; Clima e suas relações com saúde, recursos hídricos, energia, agricultura; A ação antrópica no clima (poluição atmosférica, clima urbano, destruição da camada de ozônio estratosférico, etc.); Modelos de previsão de tempo e clima; A climatologia geográfica no planejamento territorial; O papel da mídia; Discussão das mudanças climáticas nos foros políticos; Ensino da climatologia no ensino fundamental e médio.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GF410'],
			color: ''
		},
		'GF604': {
			code: 'GF604',
			name: 'Geografia Urbana',
			ementa: 'Definição e evolução do fenômeno urbano. As cidades: os sítios, o crescimento horizontal e vertical, a estrutura urbana, as áreas funcionais, o sistema viário e a circulação. A interdisciplinaridade dos estudos urbanos. Centralidade, hierarquia e redes urbanas. Conjuntos urbanos complexos: áreas metropolitanas e conurbação. Valor e renda da terra. Meio ambiente e qualidade de vida no meio urbano. Paisagens, usos do solo e culturas urbanas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#68D940'
		},
		'GF607': {
			code: 'GF607',
			name: 'Representações e Linguagens no Ensino de Geografia',
			ementa: 'Articulação de conhecimentos teóricos e práticos com vista à apropriação educativa da cartografia e das linguagens contemporâneas para o ensino de geografia. Aproximação de práticas escolares e culturais na produção de saberes e conhecimentos geográficos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940B9'
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. 2. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. 3. Biosfera, fluxo de energia e ciclos biogeoquímicos. 4. Métodos e ferramentas para estudos biogeográficos. 5. Fitogeografia do Brasil. 6. Biomas do mundo. 7. Elaboração de projetos de pesquisa em Biogeografia. 8. Elaboração de relatórios e seminários em Biogeografia.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#8040D9'
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: ''
		},
		'GF405': {
			code: 'GF405',
			name: 'Geografia do Brasil',
			ementa: 'As Regiões Brasileiras: contrastes e inter-relações. As especificidades regionais: bases físicas, ocupação e produção do espaço.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D948'
		},
		'GF605': {
			code: 'GF605',
			name: 'Geomorfologia do Brasil',
			ementa: 'O relevo brasileiro: os grandes conjuntos geomorfológicos brasileiro. Influências das oscilações climáticas no quaternário. O modelado do Estado de São Paulo: compartimentos geomorfológicos paulistas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GF506'],
			color: ''
		},
		'GF801': {
			code: 'GF801',
			name: 'Geografia das Relações Internacionais',
			ementa: 'Geografia Política. Organizações Internacionais e Regionais. Os blocos econômicos e os mercados comuns. Conflitos contemporâneos: etnias, religiões, recursos naturais e tecnológicos na disputa do poder político e econômico.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
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
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D978'
		},
		'GF302': {
			code: 'GF302',
			name: 'Sensoriamento Remoto',
			ementa: '1.Sensores remotos fotográficos 2.Sensores remotos orbitais 3.Espectro eletromagnético 4.Comportamento espectral de objetos geográficos 5.Estrutura das imagens orbitais 6.Processamento digital de imagens 7.Classificação digital de imagens 8.Geração de mapas temáticos a partir de imagens classificadas 9.Tópicos especiais de sensoriamento remoto para Geografia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C9D940'
		},
		'GF502': {
			code: 'GF502',
			name: 'Geografia das Indústrias',
			ementa: 'A Primeira e Segunda Revolução Industrial: transição para o capitalismo, o nascimento da fábrica, a etapa monopolista do capitalismo e o surgimento das grandes corporações, gênese e difusão do taylorismo e do fordismo. A crise do fordismo e a emergência de um novo paradigma de organização industrial. A divisão internacional do trabalho. Sistemas industriais e organização do espaço: processos de concentração e desconcentração (nível mundial, nacional, regional e local). Política industrial e planejamento espacial: Estado, indústria e meio ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D960'
		},
		'GF602': {
			code: 'GF602',
			name: 'Análise Redes e Fluxos (Transportes e Comunicação)',
			ementa: 'O aumento da circulação como um primeiro movimento para a mundialização. Os meios de transportes, a ocupação especial e a circulação de mercadorias e pessoas. Os meios de comunicação e as novas tecnologias de informação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#6840D9'
		},
		'GF714': {
			code: 'GF714',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Levantamento de fontes de dados, técnicas, métodos de pesquisa e/ou de elaboração de materiais gráfico e cartográfico sobre o espaço geográfico e/ou educação em geografia, podendo ter como parâmetro um estudo de caso; elaboração de um projeto de pesquisa.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA470'],
			color: '#D9D140'
		},
		'GF806': {
			code: 'GF806',
			name: 'Estágio Supervisionado de Geografia I',
			ementa: 'Enfoque de práticas, a partir da análise e reflexão dos conteúdos propriamente geográficos representativos para os ensinos médio e fundamental; Análise e reflexão sobre o exercício e as práticas da ação administrativa, docente e de supervisão em escolas ou outras instituições; acompanhamento de atividades e/ou instituições educativas e pedagógicas em escolas ou outras instituições.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['EL774', 'EL874'],
			color: ''
		},
		'GF406': {
			code: 'GF406',
			name: 'Geografia Política',
			ementa: 'Definição. Geografia Política, geoestratégia e fronteiras. Organização do espaço como instrumento de poder. O Estado Moderno e as políticas territoriais internas e externas. A Geopolítica do período militar brasileiro. Cenário geopolítico mundial contemporâneo.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D94070'
		},
		'GF805': {
			code: 'GF805',
			name: 'Planejamento Territorial',
			ementa: 'O território como unidade condicionante do planejamento econômico. O planejamento como instrumento de ação política. O papel do estado (Federal, Estadual, Municipal) e das empresas no planejamento do território. A regionalização como instrumento de ação do planejamento. A organização do território impondo-se às ações de planejamento econômico no atual período técnico-científico e informacional. As noções de progresso, desenvolvimento e competitividade como norteadoras do processo de planejamento capitalista. O desenvolvimento geograficamente desigual e os paradoxos do planejamento territorial.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GF401'],
			color: ''
		},
		'GF814': {
			code: 'GF814',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Utilização de métodos e técnicas de pesquisa em geografia e/ou educação em geografia: documentação indireta (dados, documentos, mapas, cartas, imagens), documentação direta (pesquisa de campo, observação, medição, entrevista, questionários fechados e abertos) e outras metodologias, tendo por objetivo a realização de uma dentre quatro categorias de pesquisa: 1) trabalhos teórico-empíricos e/ou síntese bibliográfica de temas afeitos à pesquisa geográfica e/ou educação em geografia (tipo monografia); 2) mapeamentos e suas interpretações e relatórios; 3) relatório final de iniciação científica; 4) relatório final de estágio profissional supervisionado.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480'],
			color: '#9840D9'
		},
		'GF901': {
			code: 'GF901',
			name: 'Estágio Supervisionado de Geografia II',
			ementa: 'Enfoque continuado a partir do percurso iniciado em práticas, a partir da análise e reflexão dos conteúdos propriamente geográficos representativos para os ensinos médio e fundamental; Análise e reflexão e avaliação sobre o exercício e as práticas da ação administrativa, docente e de supervisão escolar, acompanhamento, participação e avaliação do cotidiano de instituições que fundam-se sobre práticas educativas, escolares e de orientação pedagógica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['GF806'],
			color: ''
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
