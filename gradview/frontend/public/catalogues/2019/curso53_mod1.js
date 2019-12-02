const catalogue = {
	totalCredits: 304,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['F_128', 'F_129', 'GE300', 'GN106', 'GN108', 'GN110', 'MA111', 'QG104']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_228', 'F_229', 'GE406', 'GN107', 'GN207', 'GN208', 'MA141']
		},
		'sem-3': {
			id: '3',
			subjects: ['BD101', 'F_328', 'F_329', 'GE502', 'GE601', 'GN101', 'MA211']
		},
		'sem-4': {
			id: '4',
			subjects: ['GE402', 'GE407', 'GF410', 'GN105', 'GN304', 'LA122', 'ME414', 'QF331']
		},
		'sem-5': {
			id: '5',
			subjects: ['CV323', 'GE503', 'GE506', 'GF303', 'GF508', 'LA242', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['GE117', 'GE511', 'GE603', 'GE606', 'GE801', 'GF503', 'GN301']
		},
		'sem-7': {
			id: '7',
			subjects: ['GE702', 'GE703', 'GE704', 'GE707', 'GE708', 'GE802', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['GE706', 'GE711', 'GE803', 'GE804', 'GE805', 'GE806', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['GE602', 'GE901', 'GE903', 'GE904', 'GE910', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['GE001', 'GE007']
		}
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404CD9'
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D98640'
		},
		'GE300': {
			code: 'GE300',
			name: 'Mineralogia I',
			ementa: 'Minerais: conceito, classificação, abundância e ambientes de formação. Cristalo-química. Ligações químicas, número de coordenação e poliedro de coordenação. Substituições iônicas: soluções sólidas, isomorfismo e polimorfismo. Composição química, estrutura cristalina e radiação eletromagnética. Propriedades mecânicas: clivagem, fratura, dureza, traço, hábito e densidade. Propriedades óticas (cor, brilho, luminescência), magnéticas e radiotividade. Cristalografia: cela unitária, retículo cristalino, elementos de simetria, sistemas e classes de simetria. Estruturas cristalinas dos minerais.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9ED940'
		},
		'GN106': {
			code: 'GN106',
			name: 'Ciência do Sistema Terra I',
			ementa: 'Fundamentos de estudo e campos de aplicação da Geologia. Componentes do Sistema Terra e esferas terrestres (geosfera, atmosfera, hidrosfera, biosfera e esfera social). Tempo geológico, materiais terrestres e Tectônica de Placas. O Homem como agente geológico; situações de risco geológico. Atividades práticas de campo para reconhecimento de processos naturais e da interações destes com a ação humana. Representação e tratamento de informação geológica. Aprendizagem ativa e uso de recursos educacionais em Geociências. Atuação profissional e educacional em Ciências da Terra. Práticas de laboratório e trabalho de campo.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4092D9'
		},
		'GN108': {
			code: 'GN108',
			name: 'Cartografia Sistemática',
			ementa: 'Introdução à Cartografia. Princípios de Geodésia. Escalas. Sistemas de Coordenadas. Projeções Cartográficas. Sistema Cartográfico Nacional (SCN). Uso de Cartas, Mapas e Plantas em Ciências da Terra. Sistema de Posicionamento Global (GPS). Elementos de Topografia. Cartografia Digital. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'GN110': {
			code: 'GN110',
			name: 'Ciência do Sistema Mundo',
			ementa: 'Conceitos básicos de Geografia Física. O estrato geográfico e a superfície da Terra como unidade geográfica. Análise e dinâmica dos sistemas geomorfológico, pedológico, climático e hidrográfico. Grandes domínios naturais da Terra. Recontextualização dos conceitos e conteúdos de geografia física desenvolvidos no processo de escolarização e na universidade. Geografia Física e Educação Ambiental no currículo escolar, aproximações, diferenças e disputas. Atividades de campo como práticas contextualizadoras de conhecimentos de geografia física.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7BD940'
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D94C'
		},
		'QG104': {
			code: 'QG104',
			name: 'Química',
			ementa: 'O átomo: forma e energia de orbitais e distribuição dos elétrons. A tabela periódica e propriedades associadas. Ligação química, propriedades associadas, propriedades de mineirais simples. Soluções aquosas: formas de expressar a concentração, pH, constante de equilíbrio. Noções de físico-química: energia, equilíbrio e cinética de processos geológicos. Funções de química orgânica e exemplos relevantes no Sistema Terra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5740D9'
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: ''
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: ''
		},
		'GE406': {
			code: 'GE406',
			name: 'Mineralogia II',
			ementa: 'Princípios de Mineralogia Ótica: Propriedades da luz: polarização, isotropia e anisotropia. O microscópio petrográfico. Propriedades óticas dos minerais sob luz natural e polarizada ao microscópio petrográfico: minerais isotrópicos e anisotrópicos (uniaxiais e biaxiais). Estudo das classes minerais em microscópio petrográfico. Outros métodos analíticos em Mineralogia: Difratometria de raios X, Microscopia Eletrônica de Varredura e Geoquímica Isotópica.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE300'],
			color: ''
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico. Recontextualização dos conceitos e conteúdos da geografia humana desenvolvidos no processo de escolarização e na universidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#406FD9'
		},
		'GN207': {
			code: 'GN207',
			name: 'Introdução ao Sensoriamento Remoto',
			ementa: 'Definição, histórico e evolução do sensoriamento remoto. Princípios físicos do sensoriamento remoto. O espectro eletromagnético. Características espectrais de materiais naturais e artificiais. Introdução à espectroscopia de reflectância e interpretação de curvas de reflectância espectral. Sistemas sensores. Camêras aerofotogramétricas e fotografias aéreas. Princípios de estereoscopia e interpretação estereoscópica. Princípios de interpretação de fotografias aéreas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GN108'],
			color: ''
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
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B5'
		},
		'BD101': {
			code: 'BD101',
			name: 'Biologia',
			ementa: 'Noções básicas de biologia, classificação e ecologia dos seres vivos. Conceitos básicos de evolução e especiação através da seleção natural; aspectos de conservação e manejo do meio ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D992'
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: ''
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: ''
		},
		'GE502': {
			code: 'GE502',
			name: 'Petrografia Sedimentar',
			ementa: 'Estudo dos componentes físicos, químicos e biológicos dos depósitos sedimentares (recentes e antigos), visando à identificação de estruturas, texturas, evidências genéticas e do arranjo espacial, para compreensão da geometria e dinâmica dos corpos estratiformes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE406'],
			color: ''
		},
		'GE601': {
			code: 'GE601',
			name: 'Sedimentologia',
			ementa: 'Estudo de descrição e classificação das rochas sedimentares. Análise dos processos que geram as rochas sedimentares através da textura, das estruturas sedimentares e das geometrias das camadas. Conceitos básicos de análise de fácies. Atividade prática no campo de análise sedimentológica.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:1, HS:7, SL:3, C:6},
			requisitos: ['GN106', 'GN208'],
			color: ''
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: ''
		},
		'GE402': {
			code: 'GE402',
			name: 'Elementos de Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis, bem como nos ambientes onde eles ocorrem. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nivel mundial e no Brasil, que auxiliam a Geologia, tanto na interpretação de idade quanto nos aspectos do meio abiótico (paleocologia, paleoclimatologia, etc.). Dar bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: ''
		},
		'GE407': {
			code: 'GE407',
			name: 'Desenho Geológico',
			ementa: 'Princípios de Geometria Espacial e Descritiva e Aplicações em Geologia. Fundamentos de projeção estereográfica e exercícios práticos de análise de estruturas planares e lineares. Representação espacial de camadas e feições lineares por métodos gráficos e analíticos. Uso de ábacos. Mergulho real e aparente de camadas, profundidade e espessura: real e aparente. Mapas topográficos, geológicos e estruturais. Leitura e análise de mapas geológicos. Construção de perfis geológicos. Exercícios práticos de interpretação de mapas temáticos.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GN108'],
			color: ''
		},
		'GF410': {
			code: 'GF410',
			name: 'Climatologia I',
			ementa: 'Tempo atmosférico e clima; Distribuição e balanço global de radiação; Composição e estrutura da atmosfera; Atmosfera pretérita e atual; Elementos do clima (temperatura, pressão atmosférica, umidade do ar, precipitações atmosféricas) - definições, unidades de medição, controles de grande escala, representação das suas variações espaço-temporais e suas influências no condicionamento de aspectos físicos e na vida; Gradiente vertical da atmosfera; Nuvens; Circulação geral da atmosfera (convectiva e meridional); Massas de ar, frentes e perturbações atmosféricas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C140D9'
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#7B40D9'
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
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
			requisitos: '',
			color: '#40B5D9'
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gás real, energia livre de Gibbs, equilíbrios físico e químico, diagrama de fases, cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'CV323': {
			code: 'CV323',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas, introdução, normas NBR 13.133 e NBR 14.144). Planimetria (medições de distâncias e ângulos; taqueometria, topometria, medições eletrônicas de distâncias). Altimetria. Terraço, curvas de nível e locação de canais. Métodos de representação do relevo. Automação topográfica. Terraplanagem. Locação de obras.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GN108'],
			color: ''
		},
		'GE503': {
			code: 'GE503',
			name: 'Geoquímica',
			ementa: 'Desenvolvimento histórico da Geoquímica. Abundância cósmica dos elementos, estrutura e composição da geosfera. Química da hidrosfera e atmosfera. A biosfera e os depósitos biogênicos. Conceitos básicos de geoquímica superficial aplicáveis ao entendimento da formação de solos e dos depósitos lateríticos. Paisagens geoquímicas, processos naturais e antrópicos. Aplicações de geoquímica em exploração mineral e em estudos ambientais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE406', 'QF331'],
			color: ''
		},
		'GE506': {
			code: 'GE506',
			name: 'Petrografia e Petrologia Ígnea',
			ementa: 'Identificação de minerais, estruturas e texturas de rochas ígneas. Fundamentos da geoquímica de elementos maiores, traços e de isótopos. Classificações das rochas ígneas. Estudo do equilíbrio de fases. Ambientes tectônicos de formação das rochas ígneas. Trabalho de campo para visita a afloramentos de rochas ígneas.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE406'],
			color: ''
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
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94063'
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Aprimoramento e prática de capacidades de leitura instrumental em língua inglesa em textos de gêneros acadêmico e científico. Aprofundamento no uso de estruturas frasais como promotoras da compreensão textual. Práticas de estratégias de leitura. Aplicação de estratégias de leitura para promover a compreensão textual. Leitura de textos digitais. Estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#9E40D9'
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
		'GE117': {
			code: 'GE117',
			name: 'Geoquímica Analítica',
			ementa: 'A evolução do pensamento geoquímico versus desenvolvimento das técnicas analíticas. Tipos de amostras e elementos analisados. A interação da radiação eletromagnética com a matéria. Principais técnicas analíticas utilizadas em litogeoquímica, geoquímica ambiental e isotópica. Práticas de coleta de amostras no campo, preparação de amostras, uso de equipamentos e controle de qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE503'],
			color: ''
		},
		'GE511': {
			code: 'GE511',
			name: 'Geologia de Campo I',
			ementa: 'Treinamento de campo em mapeamento geológico de sucessões sedimentares em bacias não deformadas. Elaboração de mapas, perfis estratigráficos, seções geológicas e relatórios.',
			semestre: 1,
			vector: {T:1, P:8, L:1, O:2, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE601', 'GN304'],
			color: ''
		},
		'GE603': {
			code: 'GE603',
			name: 'Geologia Estrutural',
			ementa: 'Princípios e mecanismos de deformação das rochas. Categoriais de análise estrutural: descritiva, cinemática e dinâmica. Arranjos estruturais: acamamento, foliação, lineação, dobras, dobramentos e superpostos, transposição, juntas e fraturas, falhas, zonas de cisalhamento, associações estruturais. Níveis estruturais. Relações entre metamorfismo e deformação; Princípios de microtectônica. Exercícios geométricos, projeção estereográfica, análise estatística de dados estruturais, perfis geológico-estruturais complexos. Trabalhos de campo e elaboração de relatórios.',
			semestre: 1,
			vector: {T:1, P:4, L:1, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['GE407'],
			color: ''
		},
		'GE606': {
			code: 'GE606',
			name: 'Petrografia e Petrologia Metamórfica',
			ementa: 'Classificação das rochas metamórficas em escalas macroscópicas e microscópicas. Tipos de metamorfismo e seus ambientes tectônicos. Mineralogia e texturas típicas; relações texturais entre minerais; significado das texturas; reações metamórficas. Fatores condicionantes de metamorfismo e conceito de fácies metamórfica. Análise de gráficos de composições químicas dos minerais e rochas e paragêneses metamórficas. Papel de rochas metamórficas na evolução crustal. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE406'],
			color: ''
		},
		'GE801': {
			code: 'GE801',
			name: 'História das Ciências Naturais',
			ementa: 'O Renascimento e seu impacto na cosmovisão: a releitura do mundo natural. A Revolução Científica e o nascimento da ciência moderna: a Filosofia Natural, a História Natural e a especialização das disciplinas científicas. A 1a. Revolução Industrial, o Naturalismo científico e os viajantes. Colecionismo, Gabinetes e Museus. O processo de institucionalização e profissionalização das ciências naturais com ênfase no Brasil e América Latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9CD40'
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#C1D940'
		},
		'GN301': {
			code: 'GN301',
			name: 'História das Teorias Econômicas',
			ementa: 'Elementos de economia. Análise do surgimento e da evolução da Economia Política como ramo do conhecimento científico. As principais escolas do pensamento econômico e suas respectivas contribuições ao entendimento do mundo em que vivemos. Disciplinas propedêuticas para o estudo da Economia dos Recursos Naturais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D940AA'
		},
		'GE702': {
			code: 'GE702',
			name: 'História e Teoria das Organizações',
			ementa: 'Abordagem histórica e comparativa da evolução das principais teorias de administração e gestão organizacional e suas relações com o pensamento econômico e sociológico.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D9AA40'
		},
		'GE703': {
			code: 'GE703',
			name: 'Geofísica',
			ementa: 'Geofísica geral e aplicada. Aplicações de métodos geofísicos em mapeamento geológico, determinação de feições tectono-estruturais, prospecção mineral, hidrogeologia e estudos ambientais.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328', 'F_329'],
			color: ''
		},
		'GE704': {
			code: 'GE704',
			name: 'Estratigrafia',
			ementa: 'Estudo da organização geométrica das rochas sedimentares e de baixo grau metamórfico da crosta terrestre. Análise dos princípios e métodos da lito-, bio- e cronoestratigrafia, da arquitetura deposicional e da Estratigrafia de Sequências aplicadas aos principais sistemas deposicionais. Análise de bacias e relações entre tectônica e sedimentação. Aplicação em campo de todos os métodos estratigráficos.',
			semestre: 1,
			vector: {T:3, P:2, L:0, O:1, D:1, HS:7, SL:3, C:6},
			requisitos: ['GE601', 'GE603'],
			color: ''
		},
		'GE707': {
			code: 'GE707',
			name: 'Sensoriamento Remoto e Fotogeologia',
			ementa: 'Princípios de interpretação geológica de fotografias aéreas. Introdução aos sistemas de sensoriamento remoto orbital multiespectral, hiperespectral e de radar. Interpretação de imagens orbitais pancromáticas, multiespectrais e de radar. Introdução ao processamento digital de imagens de sensoriamento remoto. Aplicações do sensoriamento remoto aéreo e orbital em mapeamento geológico-estrutural, geomorfologia e no estudo do uso e ocupação do solo.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['GN207'],
			color: ''
		},
		'GE708': {
			code: 'GE708',
			name: 'Geologia de Campo II',
			ementa: 'Treinamento de campo em mapeamento geológico de terrenos com ocorrência de rochas ígneas e metamórficas. Elaboração de mapas e relatórios.',
			semestre: 1,
			vector: {T:1, P:8, L:1, O:2, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE506', 'GE511', 'GE603', 'GE606'],
			color: ''
		},
		'GE802': {
			code: 'GE802',
			name: 'Geotectônica',
			ementa: 'Tectônica de Placas e Tectônica Global. Estudo e caracterização de ambientes geológico-tectônicos. Regimes tectônicos, regime convergente e cinturões de cavalgamento, regime transcorrente e cinturões transcorrentes, regime distensivo e cinturões distensivos, regime intraplaca. Análise de ambientes tectônicos principais no Brasil, América do Sul e África. Neotectônica. Trabalho de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE603', 'GE606'],
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'GE706': {
			code: 'GE706',
			name: 'Geologia Histórica e do Brasil',
			ementa: 'Estudo da ordem cronológica dos principais eventos geológicos que afetaram a evolução do planeta, suas causas e reflexos na paleogeografia, com ênfase para os fenômenos que ocorreram no território brasileiro. Trabalho de campo para conhecer exposições de unidades rochosas que refletem a evolução geológica do território brasileiro.',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE402', '*GE802'],
			color: ''
		},
		'GE711': {
			code: 'GE711',
			name: 'Geologia de Hidrocarbonetos',
			ementa: 'A disciplina aborda aspectos básicos da dinâmica da Geologia de hidrocarbonetos com ênfase nas jazidas petrolíferas, envolvendo a produção e a acumulação de matéria orgânica, as rochas geradoras, migração, as rochas-reservatório, armadilhas (trapas) e a distribuição das reservas e recursos. São abordados aspectos relativos a caracterização, cálculo e armazenamento em reservatórios naturais. Tópicos relativos à locação, perfuração, instalação, completação, explotação, manutenção e monitoramento de poços também serão abordados no curso.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE603', 'GE704'],
			color: ''
		},
		'GE803': {
			code: 'GE803',
			name: 'Geologia Econômica',
			ementa: 'O curso tem como objetivos principais apresentar: (1) os processos magmáticos, hidrotermais, sedimentares, metamórficos e supergênicos que atuam na concentração de metais e formação de depósitos minerais na crosta terrestre; (2) o arcabouço geológico e as características fundamentais de várias classes de depósitos minerais, enquadrando-os nos seus respectivos ambientes tectônicos; (3) os controles de formação de um determinado depósito mineral e implicações na sua exploração; e (4) as províncias metalogenéticas do Brasil e seus depósitos minerais. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE503', 'GE603', 'GE606'],
			color: ''
		},
		'GE804': {
			code: 'GE804',
			name: 'Sistemas de Informações Georreferenciadas',
			ementa: 'Elementos essenciais de um SIG. Dados espaciais. Projeção de mapas. Captura de dados para SIG. Aquisição, estrutura e análise de dados espaciais. Funções de SIG. Uso de GRASS, IDRISI, ARCINFO.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA480'],
			color: '#40D96F'
		},
		'GE805': {
			code: 'GE805',
			name: 'Hidrogeologia',
			ementa: 'A disciplina visa apresentar os fundamentos da dinâmica das águas subterrâneas, seus princípios, e hidroquímica, visando fazer com que o aluno adquira o conhecimento hidrogeológico, com prática e exercícios. Temas: Ciclo hidrológico; Balanço hídrico, tipos de aquíferos, aquíferos sedimentares e fraturados, parâmetros hidrodinâmicos (porosidade; lei de Darcy; condutividade hidráulica; transmissividade; armazenamento e coeficiente de armazenamento); Potenciometria; Obras de captação; Hidráulica de poços; Hidrogeoquímica e qualidade, contaminação e transporte de massa, hidrogeologia do Brasil; Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: ''
		},
		'GE806': {
			code: 'GE806',
			name: 'Mecânica de Solos e Rochas',
			ementa: 'Constituição, classificação e propriedades dos solos. Compressibilidade e adensamento, Resistência ao cisalhamento e empuxos da terra. Permeabilidade. Propriedades Mecânicas das Rochas. Ensaios de Campo e Laboratório em solos e rocha. Taludes, fundações e aberturas subterrâneas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: ''
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'GE602': {
			code: 'GE602',
			name: 'Economia dos Recursos Minerais e Energéticos',
			ementa: 'Importância dos recursos minerais e energéticos no contexto da economia brasileira e mundial. Escassez de recursos minerais e energéticos, regras de exaustão, produção e consumo de bens minerais, preços e mercados de bens minerais. A pauta brasileira de exportação versus importação. Dotação mineral e desenvolvimento econômico.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#57D940'
		},
		'GE901': {
			code: 'GE901',
			name: 'Prospecção',
			ementa: 'Estudo das técnicas aplicadas à exploração regional, prospecção, pesquisa e avaliação de recursos minerais. Métodos diretos e indiretos utilizados nas fases de busca a avaliação de jazidas minerais. Discussão das ferramentas quantitativas para estimativa e avaliação de reserva. Análise de custos e otimização de campanhas exploratórias de recursos minerais. Aspectos ambientais relacionados à exploração mineral. Impacto da legislação mineral nas atividades de exploração e produção. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE503', 'GE603', 'GE803'],
			color: ''
		},
		'GE903': {
			code: 'GE903',
			name: 'Geologia Urbana',
			ementa: 'Gestão, supervisão, orientação técnica sobre geologia ambiental. Coleta de dados, planejamento e projeto geológicos do curso e ocupação do solo urbano. Estudo e recuperação ambiental de solos e águas subterrâneas, contaminadas, implantação de aterros de resíduos sólidos e avaliação de impactos ambientais, risco geológico (erosão, inundações, instabilidade de encostas). Cartas geotécnica, planejamento do uso racional de recursos minerais hídricos. Trabalhos de campo e elaboração de relatório referente a casos de tratamento de resíduos, levantamento de contaminação e risco geológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940CD'
		},
		'GE904': {
			code: 'GE904',
			name: 'Geotecnia',
			ementa: 'Conhecimentos sobre os problemas geológicos que afetam as obras de engenharia civil, incluindo o uso de materiais de construção, instabilidade de taludes, erosão e assoreamento. Obras viárias, fundações, barragens, túneis e outras obras subterrâneas, desmonte de rochas. Técnicas de cartografia geotécnica. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['GE806'],
			color: ''
		},
		'GE910': {
			code: 'GE910',
			name: 'Geologia de Campo III',
			ementa: 'Treinamento de campo em levantamentos básicos do meio físico, utilizando e integrando os conhecimentos adquiridos em várias disciplinas do curso e objetivando a aplicação dos resultados em mapeamentos geológico, metalogênese e prospecção; planejamento do uso e ocupação do solo, manejo de bacias hidrográficas, planejamento urbano e gestão ambiental, entre outras aplicações.',
			semestre: 1,
			vector: {T:1, P:8, L:1, O:2, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE708'],
			color: ''
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'GE001': {
			code: 'GE001',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Treinamento para executar autonomamente projetos geológicos específicos técnicos ou científicos, procurando aplicar os conhecimentos adquiridos em disciplinas do curso, em escala de detalhe ou regional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480'],
			color: '#D94086'
		},
		'GE007': {
			code: 'GE007',
			name: 'Estágio Supervisionado',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional, de acordo com as Diretrizes Curriculares Nacionais para os cursos de graduação na área de Geologia. O estágio deve ser realizado junto a empresas credenciadas pela Coordenadoria de Graduação do Instituto de Geociências e pelo Serviço de Apoio ao Estudante (SAE) da UNICAMP.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA440'],
			color: '#D96340'
		}
	}
};

export default catalogue;
