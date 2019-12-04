const catalogue = {
	totalCredits: 253,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['FA100', 'FA173', 'MA111', 'MA141', 'MC102', 'QG101', 'QG102']
		},
		'sem-2': {
			id: '2',
			subjects: ['BT330', 'F_128', 'F_129', 'FA270', 'FA273', 'MA211', 'ME414']
		},
		'sem-3': {
			id: '3',
			subjects: ['EM306', 'F_328', 'F_329', 'FA370', 'FA373', 'FA374', 'FA379', 'MA311']
		},
		'sem-4': {
			id: '4',
			subjects: ['CV323', 'EM406', 'FA425', 'FA470', 'FA473', 'FA474', 'FA479', 'FA481']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM506', 'FA503', 'FA520', 'FA564', 'FA573', 'FA576', 'FA577', 'FA585', 'FA586', 'FA983']
		},
		'sem-6': {
			id: '6',
			subjects: ['ET016', 'FA622', 'FA665', 'FA670', 'FA673', 'FA676', 'FA679', 'FA680', 'FA682']
		},
		'sem-7': {
			id: '7',
			subjects: ['FA720', 'FA721', 'FA733', 'FA770', 'FA778', 'FA779', 'FA780', 'FA782', 'FA786']
		},
		'sem-8': {
			id: '8',
			subjects: ['FA870', 'FA873', 'FA874', 'FA876', 'FA877', 'FA878', 'FA879', 'FA880']
		},
		'sem-9': {
			id: '9',
			subjects: ['FA070', 'FA972', 'FA979', 'FA984', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['FA071', 'FA985', 'ELET10']
		}
	},

	subjects: {
		'FA100': {
			code: 'FA100',
			name: 'Engenharia Agrícola: Curso e Profissão',
			ementa: 'Universidade Estadual de Campinas e Faculdade de Engenharia Agrícola: histórico e perfil. O profissional Engenheiro Agrícola. Curso de graduação em Engenharia Agrícola da UNICAMP. Inserção da Engenharia Agrícola na Agricultura Brasileira. Mercado de Trabalho. Interação com outros ramos de Engenharia. Conceitos de Engenharia (Regulamentos, Ética Profissional).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D940'
		},
		'FA173': {
			code: 'FA173',
			name: 'Desenho Técnico',
			ementa: 'Introdução aos conceitos básicos de desenho técnico utilizando recursos assistidos por computador. Perspectiva; sistema de projeções, vistas principais, parciais e auxiliares. Cortes e seções. Cotas e tolerâncias. Desenhos de conjunto, detalhamento de conjunto e montagem de peças.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D940'
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#7340D9'
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D9A6'
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Estrutura atômica, classificação periódica e propriedades dos elementos. Ligação química; estrutura e propriedades das substâncias. Noções de físico-química: termodinâmica, equilíbrios químicos e células eletroquímicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A640D9'
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97340'
		},
		'BT330': {
			code: 'BT330',
			name: 'Botânica Básica',
			ementa: 'Aspectos gerais de morfologia de Dicotiledôneas e Monocotiledôneas, raiz, caule, folhas, flores, frutos e sementes. Aspectos gerais da fisiologia de plantas superiores, enfocando relações energéticas, relações hídricas e minerais, relações hormonais e a fisiologia da germinação. Aspectos gerais de taxonomia vegetal, com ênfase nas espécies cultivadas. Ciclo de vida das culturas de maior importância econômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D9'
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4073D9'
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4040D9'
		},
		'FA270': {
			code: 'FA270',
			name: 'Metodologia Científica e do Projeto',
			ementa: 'O conhecimento, ciência e senso comum. O Método Científico. A pesquisa científica; problematização; elaboração de hipóteses; verificação. Metodologia do trabalho científico. Metodologia de Projeto. Exemplo do desenvolvimento de um projeto de engenharia agrícola. Eficiências nas etapas do projeto. Fases e desenvolvimento do projeto.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940A6'
		},
		'FA273': {
			code: 'FA273',
			name: 'Desenho Civil Assistido por Computador',
			ementa: 'Simbologia básica e normas técnicas para a elaboração dos projetos de construção civil. Planta baixa, cortes, fachada, cobertura e implantação. Elementos arquitetônicos. Detalhamento das instalações hidrossanitária e elétrica. Introdução ao projeto estrutural. Maquete eletrônica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA173'],
			color: ''
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
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141'],
			color: ''
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
		'FA370': {
			code: 'FA370',
			name: 'Mecânica dos Fluidos para Engenharia',
			ementa: 'Introdução as principais propriedades físicas dos fluidos. Esforços nos fluidos. Fluidostática. Equilíbrio relativo. Manometria. Cinemática dos fluidos. Viscosidade. Equação da quantidade de movimento. Teorema de Bernoulli (conservação de energia). Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_128', 'F_129'],
			color: ''
		},
		'FA373': {
			code: 'FA373',
			name: 'Pedologia',
			ementa: 'Caracterização da crosta terrestre. Fundamentos de mineralogia, principais minerais e rochas. Intemperismo. O solo como recurso natural. Fatores e processos de formação do solo. O perfil de solo. Definição e notação de horizontes e camadas. Principais atributos morfológicos. Introdução à classificação de solos. Evolução da classificação de solos no Brasil. O sistema brasileiro de classificação de solos. Solos do Brasil e do Estado de São Paulo. Levantamento de solos. Bases para leitura de mapas de solos. Aplicações da Pedologia em Engenharia Agrícola.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['QG101'],
			color: ''
		},
		'FA374': {
			code: 'FA374',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética do ponto flutuante. Zeros de funções reais. Interpolação: Integração numérica. Resolução de sistemas: lineares, não lineares e com restrições. Ajuste de dados e curvas, tratamento numérico de equações diferenciais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211', 'MC102'],
			color: ''
		},
		'FA379': {
			code: 'FA379',
			name: 'Introdução à Termodinâmica',
			ementa: 'História da termodinâmica. Energia e a engenharia agrícola. Conceitos básicos. Propriedades de substâncias puras. Tabelas de vapor. Equações do estado. Trabalho e calor. Primeira Lei. Balanços de energia, eficiências de Primeira Lei. Segunda Lei. Conceitos de exergia e irreversibilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128'],
			color: ''
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211'],
			color: ''
		},
		'CV323': {
			code: 'CV323',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas, introdução, normas NBR 13.133 e NBR 14.144). Planimetria (medições de distâncias e ângulos; taqueometria, topometria, medições eletrônicas de distâncias). Altimetria. Terraço, curvas de nível e locação de canais. Métodos de representação do relevo. Automação topográfica. Terraplanagem. Locação de obras.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA173'],
			color: ''
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211'],
			color: ''
		},
		'FA425': {
			code: 'FA425',
			name: 'Instrumentação Básica',
			ementa: 'Conceitos básicos de instrumentação. Simbologia. Características estáticas de instrumentos. Calibração. Sensores. Condicionamento e aquisição de sinais. Válvulas e atuadores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_329', 'FA370'],
			color: ''
		},
		'FA470': {
			code: 'FA470',
			name: 'Dinâmica de Corpos Rígidos',
			ementa: 'Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton. Conservação dos momentos linear a angular e conservação de energia. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial. Aplicações em linguagem simbólica Matlab.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EM306', 'F_128', 'FA374'],
			color: ''
		},
		'FA473': {
			code: 'FA473',
			name: 'Sistemas de Produção',
			ementa: 'Fatores de produção de plantas. Sistemas de cultivo de vegetais. Equipamentos e instalações para produção animal. Sistemas de produção animal.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['BT330'],
			color: ''
		},
		'FA474': {
			code: 'FA474',
			name: 'Dinâmica de Sistemas',
			ementa: 'Introdução à modelagem de sistemas lineares. Modelagem de sistemas mecânicos, elétricos, térmicos e fluídicos. Linearização de sistemas não-lineares. Curvas de resposta de sistemas de primeira e segunda ordem. Estabilidade de sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329', 'MA311'],
			color: ''
		},
		'FA479': {
			code: 'FA479',
			name: 'Termodinâmica Aplicada',
			ementa: 'Introdução aos Ciclos de Potência. Introdução aos Ciclos de Refrigeração. Bombas de Calor. Misturas. Psicrometria. Combustíveis e Reações Químicas. Introdução ao Equilíbrio Químico. Propriedades Coligativas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA379', 'QG101'],
			color: ''
		},
		'FA481': {
			code: 'FA481',
			name: 'Características e Propriedades do Solo',
			ementa: 'O solo como um sistema sólido, poroso, heterogêneo e anisotrópico. Composição volumétrica do solo. Caracterização e métodos de determinação de atributos físicos, químicos e biológicos do solo. Granulometria e textura do solo. Estrutura e agregação do solo. Cor do solo. Porosidade do solo. Ar do solo. Regime térmico do solo. Densidade do solo e das partículas. Consistência do solo. Água do solo. Atributos químicos e de fertilidade do solo. Matéria orgânica do solo. Organismos do solo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA373'],
			color: ''
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406'],
			color: ''
		},
		'FA503': {
			code: 'FA503',
			name: 'Meteorologia Agrícola',
			ementa: 'Meteorologia, climatologia, atmosfera terrestre, radiação solar, ciclo hidrológico, fotossíntese, posto meteorológico, zoneamento agrícola, planejamento das atividades agrícolas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT330'],
			color: ''
		},
		'FA520': {
			code: 'FA520',
			name: 'História e Desenvolvimento da Agricultura Brasileira',
			ementa: 'Fundamentos históricos da agricultura brasileira. Modernização da agricultura no Brasil. Caracterização da produção agrícola e agroindustrial. Política agrícola. Estrutura Agrária. Relações sociais na agricultura. Desenvolvimento agrícola e agroindustrial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'FA564': {
			code: 'FA564',
			name: 'Barragens e Estradas de Terra',
			ementa: 'Principais elementos de uma barragem de terra. Definição e determinação dos parâmetros a serem considerados em obras de barragens. Determinação das características de resistência ao cisalhamento e deformabilidade dos solos. Anteprojeto de pequena barragem de terra. Introdução ao estudo de estradas vicinais. Dimensionamento do volume de água e de reservatórios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481'],
			color: ''
		},
		'FA573': {
			code: 'FA573',
			name: 'Laboratório de Máquinas Agrícolas',
			ementa: 'Conceitos básicos de motores, máquinas e implementos agrícolas. Princípios, fundamentos e práticas sobre tratores agrícolas, máquinas e implementos de preparo do solo, semeadoras, adubadoras, cultivadores, colhedoras, pulverizadores e tecnologia de aplicação de produtos fitossanitários. Dimensionamento de frota levando em conta capacidade operacional das máquinas agrícolas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA473'],
			color: ''
		},
		'FA576': {
			code: 'FA576',
			name: 'Propriedades Mecânicas de Materiais Biológicos',
			ementa: 'Propriedades mecânicas de produtos agrícolas. Relações tensão-deformação. Lei de Hooke generalizada. Elasticidade e Viscoelasticidade linear. Teorias de ruptura. Índices de firmeza. Variabilidade de medidas em produtos agrícolas. Efeitos da vibração.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406'],
			color: ''
		},
		'FA577': {
			code: 'FA577',
			name: 'Propriedades Físicas dos Produtos Agrícolas',
			ementa: 'Caracterização das matérias-primas. Propriedades higroscópicas, gravimétricas, friccionais, aerodinâmicas e térmicas dos produtos agrícolas. Redução de tamanho.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA425'],
			color: ''
		},
		'FA585': {
			code: 'FA585',
			name: 'Materiais e Tecnologia Mecânica',
			ementa: 'Materiais de construção mecânica, metálicos e não metálicos, obtenção, processamento e propriedades. Ensaios de materiais. Processos de fabricação por conformação mecânica. Fundição. Usinagem. Soldagem. Tratamento térmico. Tratamento superficial.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406'],
			color: ''
		},
		'FA586': {
			code: 'FA586',
			name: 'Materiais de Construção Civil',
			ementa: 'Importância e história dos materiais de construção civil. Materiais cerâmicos, aglomerantes, aditivos, agregados, argamassas, concreto, madeira, aço. Comportamento mecânico e propriedades mecânicas do concreto, da madeira e do aço.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A6D940'
		},
		'FA983': {
			code: 'FA983',
			name: 'Manejo e Conservação do Solo',
			ementa: 'Sustentabilidade e uso sustentável em agricultura. Introdução ao planejamento do uso das terras e ao planejamento conservacionista. Metodologias de avaliação de terras para fins agrícolas. Mecanização, sistemas de manejo agrícola e qualidade do solo. Degradação da qualidade do solo. Erosão do solo. Conservação do solo e da água. Legislação em conservação do solo e da água.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA481'],
			color: ''
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328'],
			color: ''
		},
		'FA622': {
			code: 'FA622',
			name: 'Sistema Solo-Planta-Atmosfera',
			ementa: 'Relação solo-planta-atmosfera. Dinâmica na atmosfera. Radiação solar. Efeito da temperatura no desenvolvimento dos vegetais. Água no sistema vegetal. Balanço de energia, evaporação e transpiração vegetal. Mecanismo de controle de perda de água nos vegetais: controle estomático. Movimentação da água no solo. Absorção da água pelas raízes. Evolução dos mecanismos da tolerância das espécies vegetais à saturação hídrica e ao déficit hídrico no solo. Balanço hídrico. Balanço hidrológico. Modelagem e espacialização das relações solo-planta-atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481', 'FA503'],
			color: ''
		},
		'FA665': {
			code: 'FA665',
			name: 'Geotecnologias I',
			ementa: 'Introdução ao geoprocessamento. Cartografia básica. Fotogrametria e fotointerpretação. Sensoriamento remoto. Sistemas de informações geográficas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV323', 'FA481'],
			color: ''
		},
		'FA670': {
			code: 'FA670',
			name: 'Elementos de Máquinas',
			ementa: 'Resistência dos materiais à fadiga. Eixos e árvores. Chavetas. Elementos de união. Molas. Tolerância e Ajustes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'FA173', 'FA585'],
			color: ''
		},
		'FA673': {
			code: 'FA673',
			name: 'Transferência de Calor e Massa',
			ementa: 'Condução unidimensional em regime permanente. Equações diferenciais. Condução em regime transiente. Transferência de calor por radiação. Transferência de calor por convecção. Trocador de calor. Fundamentos de transferência de massa. Difusão. Transferência interfacial. Transferência de massa convectiva. Equipamentos de transferência de massa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA370', 'FA374', 'FA479'],
			color: ''
		},
		'FA676': {
			code: 'FA676',
			name: 'Hidráulica Geral',
			ementa: 'Condutos forçados. Perdas de carga. Problemas de dois e três reservatórios. Instalações de recalque. Noções sobre Golpe de aríete. Condutos livres. Canais fechados e abertos. Energia específica. Remanso. Ressalto hidráulico. Medidores de velocidade e de vazão.',
			semestre: 1,
			vector: {T:3, P:1, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['FA370'],
			color: ''
		},
		'FA679': {
			code: 'FA679',
			name: 'Tecnologia de Processos Pós-Colheita I',
			ementa: 'Noções de bioquímica relacionadas à tecnologia pós-colheita. Fatores de pré e pós-colheita. Índices de maturação. Respiração. Modelos respiratórios. Relações térmicas e hídricas. Manutenção da qualidade. Operações do beneficiamento. Tecnologia de conservação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA577'],
			color: ''
		},
		'FA680': {
			code: 'FA680',
			name: 'Relação Trator-Implemento',
			ementa: 'Princípios de distribuição de tensões no solo. Determinação da reação do solo devido a ação de implementos de preparo. Sistemas de preparo do solo: plantio convencional, plantio reduzido, plantio ou semeadura direta. Forças atuantes em implementos agrícolas. Acoplamento do implemento ao trator. Mecânica da relação veículo-solo. Compactação de solos sob a ação de máquinas e implementos agrícolas, causas e efeitos. Desempenho de pneus e rodas, resistência ao rolamento, capacidade de carga de um solo, patinagem, desempenho conjunto trator-implemento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA564', 'FA573'],
			color: ''
		},
		'FA682': {
			code: 'FA682',
			name: 'Modelagem Estrutural Aplicada',
			ementa: 'Princípios do projeto estrutural. Tópicos de elasticidade aplicada. Métodos dos deslocamentos. Introdução ao método dos elementos finitos. Utilização de programas computacionais. Simulação do comportamento estrutural de máquinas e estruturas agrícolas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'FA273', 'FA585', 'FA586'],
			color: ''
		},
		'FA720': {
			code: 'FA720',
			name: 'Fundamentos de Economia',
			ementa: 'Introdução à macroeconomia (medidas da atividade econômica: produto, renda, consumo, poupança, investimento, exportações e importações). População, emprego e renda: mercado de trabalho, desigualdades sociais e econômicas. Importância e papel da agricultura no desenvolvimento econômico e social. Mercados e transações. Economia informal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520'],
			color: ''
		},
		'FA721': {
			code: 'FA721',
			name: 'Engenharia Econômica',
			ementa: 'Conceitos econômicos introdutórios. Matemática financeira. Custos. Análise de investimentos. Fluxo de caixa. Métodos de Comparação de alternativas de investimento e métodos de decisão. Efeito da incidência de impostos na avaliação econômica. Análise financeira e alavancagem. Análise de incerteza e de riscos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#40D973'
		},
		'FA733': {
			code: 'FA733',
			name: 'Fundamentos de Microbiologia e Qualidade de Água',
			ementa: 'Conceituação básica sobre microbiologia aplicada à pós-colheita de produtos agrícolas e ao saneamento ambiental. Conhecimentos de fundamentos de hidrobiologia. Conhecimentos fundamentais de química da água.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG101'],
			color: ''
		},
		'FA770': {
			code: 'FA770',
			name: 'Elementos de Transmissões Mecânicas',
			ementa: 'Conceitos de elementos de transmissão, eficiência de transmissão; Correias. Correntes, Engrenagens; elementos reguladores de movimento, eixos flexíveis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA670'],
			color: ''
		},
		'FA778': {
			code: 'FA778',
			name: 'Construções Rurais para a Produção Animal',
			ementa: 'Instalações e equipamentos para a produção animal: aves, suínos, bovinos de leite e corte, ovinos e caprinos, equinos, coelhos e outras instalações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA473', 'FA586'],
			color: ''
		},
		'FA779': {
			code: 'FA779',
			name: 'Tecnologia de Resfriamento para Produtos Hortícolas',
			ementa: 'A refrigeração e a conservação de produtos hortícolas. A Cadeia do Frio. Sistemas de refrigeração e elementos que o compõem. Cálculo de carga térmica em câmaras refrigeradas. Câmaras de armazenamento. Dimensionamento de câmaras. Seleção de equipamentos e acessórios. Sistemas de resfriamento rápido com ar forçado e com água. Dimensionamento. Transporte frigorífico de frutas e hortaliças. Tempo de resfriamento, determinação teórica e experimental. Custos de resfriamento. Seleção de sistemas. Viabilidade econômica.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA673', 'FA679'],
			color: ''
		},
		'FA780': {
			code: 'FA780',
			name: 'Instalações Elétricas para Sistemas Agroindustriais',
			ementa: 'Noções básicas sobre geração, transmissão e distribuição de energia elétrica. Linhas de distribuição e ramais rurais. Instalações elétricas em baixa tensão. Sinalização, comando e proteção de circuitos elétricos em baixa tensão. Instrumentos de medidas elétricas. Sistemas de medição e modalidades tarifárias de energia elétrica.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ET016'],
			color: ''
		},
		'FA782': {
			code: 'FA782',
			name: 'Dimensionamento de Estruturas de Concreto',
			ementa: 'Esquema estático do projeto estrutural; Dimensionamento de lajes, vigas, pilares e fundações; Projeto de estrutura de concreto.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA682'],
			color: ''
		},
		'FA786': {
			code: 'FA786',
			name: 'Hidrologia Ciência e Aplicação',
			ementa: 'Precipitação, infiltração e evapotranspiração em bacias hidrográficas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA622', 'FA676'],
			color: ''
		},
		'FA870': {
			code: 'FA870',
			name: 'Dimensionamento de Estruturas de Madeira',
			ementa: 'Esforços e resistência de projeto; Dimensionamento de peças estruturais submetidas a esforços de tração, compressão, cisalhamento e flexão. Efeito do vento. Projeto de uma estrutura de madeira.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA682'],
			color: ''
		},
		'FA873': {
			code: 'FA873',
			name: 'Ambientes para Animais e Plantas',
			ementa: 'Respostas fisiológicas: animal e vegetal em ambientes protegidos. Cálculo da carga térmica. Ventilação natural. Ventilação forçada. Ambientes para a produção vegetal.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA673', 'FA778'],
			color: ''
		},
		'FA874': {
			code: 'FA874',
			name: 'Saneamento Ambiental',
			ementa: 'Tecnologias e abastecimento de águas. Identificação de fontes de poluição agrícola, zootécnica e agroindustrial. Conceituação das propriedades físicas, químicas e biológicas dos resíduos. Conhecimentos básicos sobre operações e processos unitários. Conceituação e discussão das tecnologias para tratamento de águas residuárias. Discussão de propostas para controle e disposição de resíduos sólidos. Análise e discussão de alternativas para reciclagem de resíduos.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA733'],
			color: ''
		},
		'FA876': {
			code: 'FA876',
			name: 'Técnicas de Irrigação',
			ementa: 'Relação Solo-Água-Planta; Sistemas de irrigação por aspersão, localizada e por superfície; Manejo da irrigação.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA676'],
			color: ''
		},
		'FA877': {
			code: 'FA877',
			name: 'Planejamento Agrícola',
			ementa: 'Gestão da empresa agrícola. O papel do planejamento na gestão (áreas funcionais, níveis e etapas). Produção agrícola. Planejamento agrícola e seus componentes: planejamento do uso do solo (zoneamento), planejamento da produção (setores e variedades) e planejamento anual das atividades. Softwares para planejamento e controle.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA665'],
			color: ''
		},
		'FA878': {
			code: 'FA878',
			name: 'Introdução ao Gerenciamento de Projetos',
			ementa: 'Solução de Problemas Complexos. Conceitos básicos de gerenciamento de projetos. Os macroprocessos de gerenciamento: iniciação, planejamento, execução, controle e encerramento. Áreas de conhecimento do gerenciamento de projetos: escopo, tempo, custo, qualidade, comunicações, riscos, recursos humanos e suprimentos. As relações dentro da equipe. O gerente e seu papel. Os benefícios do gerenciamento de projetos. Utilização de \"software\" para gerenciamento de projetos.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA460'],
			color: '#40A6D9'
		},
		'FA879': {
			code: 'FA879',
			name: 'Tecnologia de Processos Pós-Colheita II',
			ementa: 'Alteração da qualidade na secagem. Psicrometria aplicada à secagem. Teoria de movimentação de ar. Princípios de secagem. Modelos de secagem em leito fixo. Cinética de secagem. Modelo diferencial. Sistemas de Secagem e Secadores. Simulação de secagem. Prática de secagem de grãos. Instalações e custos de secagem.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA577', 'FA673'],
			color: ''
		},
		'FA880': {
			code: 'FA880',
			name: 'Princípios de Operação de Máquinas Agrícolas',
			ementa: 'Princípios mecânicos de corte: cisalhamento, inercial e não-convencionais a laser e jato de água. Fragmentação do solo: arados fixos e rotativos. Fragmentação de fluídos, aspersão e pulverização. Seguimento do perfil do solo para o corte ou catação de produtos agrícolas rasteiros. Rolos convergentes (\"snappers\"): descascadores de arroz e despalhadores. Elevadores de canecas: trajetória. Transporte vibratório: mesa gravitacional. Adensamento de biomassa: enfardamento, briquetagem e pelitização. Dosagem e agitação de agroquímicos fluídos. Dosagem de sementes e agroquímicos granulados.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA470', 'FA573', 'FA576', 'FA577', 'FA770'],
			color: ''
		},
		'FA070': {
			code: 'FA070',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projetos, montagens e execução de equipamentos e sistemas em Engenharia Agrícola, nas áreas Recursos Naturais Renováveis, Máquinas Agrícolas, Tecnologia de Pós-Colheita, Estrutura e Ambiência, Administração e Desenvolvimento e Sustentabilidade Rural, junto a empresas credenciadas pela Coordenadoria de Graduação da Faculdade de Engenharia Agrícola e pelo Serviço de Apoio ao Estudante (SAE) da UNICAMP.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200'],
			color: '#73D940'
		},
		'FA972': {
			code: 'FA972',
			name: 'Drenagem de Solos Agrícolas',
			ementa: 'Estudos básicos para caracterização de problemas de drenagem agrícola; métodos de drenagem e dimensionamento de sistemas de drenagem superficial e subterrânea.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA676', 'FA786'],
			color: ''
		},
		'FA979': {
			code: 'FA979',
			name: 'Tecnologia de Processos Pós-Colheita III',
			ementa: 'Sistema agroindustrial brasileiro. Agentes do sistema. Governo, instituições de pesquisa, indústria, consumidor. Legislação: normas de qualidade para comercialização de produtos agrícolas. Mecanismos de comercialização. Pré-limpeza, limpeza e beneficiamento. Definição, Princípios e equipamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA879'],
			color: ''
		},
		'FA984': {
			code: 'FA984',
			name: 'Introdução ao Trabalho de Conclusão de Curso',
			ementa: 'Idealização dos procedimentos para resolução de um caso (problematização). Elaboração do anteprojeto. Estudo de indicadores de viabilidade técnica e socioeconômica. Cronograma de atividades. Apresentação do anteprojeto.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA200'],
			color: '#D9A640'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'FA071': {
			code: 'FA071',
			name: 'Sociologia e Extensão Rural',
			ementa: 'Realidade rural brasileira. Introdução à sociologia rural. Geração, transferência, difusão e adoção de tecnologias no meio rural. Comunicação rural. Projetos de intervenção na realidade rural. Fundamentos e metodologia de extensão rural.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA475'],
			color: '#D94073'
		},
		'FA985': {
			code: 'FA985',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Desenvolvimento do projeto a partir do anteprojeto definido em FA984 Introdução ao Trabalho de Conclusão de Curso. Elaboração da Monografia. Apresentação da monografia.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['FA984'],
			color: ''
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