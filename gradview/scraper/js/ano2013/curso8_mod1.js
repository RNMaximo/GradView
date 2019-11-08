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
			subjects: ['EM506', 'FA503', 'FA520', 'FA564', 'FA573', 'FA576', 'FA577', 'FA585', 'FA586']
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
			subjects: ['FA070', 'FA972', 'FA978', 'FA979', 'FA983', 'ELET12']
		},
		'sem-10': {
			id: '10',
			subjects: ['FA071', 'FA072', 'ELET12']
		}
	},

	subjects: {
		'FA100': {
			code: 'FA100',
			name: 'Engenharia Agrícola: Curso e Profissão',
			ementa: 'Universidade Estadual de Campinas e Faculdade de Engenharia Agrícola: histórico e perfil. O profissional Engenheiro Agrícola. Curso de graduação em Engenharia Agrícola da UNICAMP. Inserção da Engenharia Agrícola na Agricultura Brasileira. Mercado de Trabalho. Interação com outros ramos de Engenharia. Conceitos de Engenharia (Regulamentos, Ética Profissional).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'FA173': {
			code: 'FA173',
			name: 'Desenho Técnico',
			ementa: 'Introdução aos conceitos básicos de desenho técnico utilizando recursos assistidos por computador. Perspectiva; sistema de projeções, vistas principais, parciais e auxiliares. Cortes e seções. Cotas e tolerâncias. Desenhos de conjunto, detalhamento de conjunto e montagem de peças.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Noções de físico-química: termoquímica, equilíbrios químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'BT330': {
			code: 'BT330',
			name: 'Botânica Básica',
			ementa: 'Aspectos gerais de morfologia de Dicotiledôneas e Monocotiledôneas, raiz, caule, folhas, flores, frutos e sementes. Aspectos gerais da fisiologia de plantas superiores, enfocando relações energéticas, relações hídricas e minerais, relações hormonais e a fisiologia da germinação. Aspectos gerais de taxonomia vegetal, com ênfase nas espécies cultivadas. Ciclo de vida das culturas de maior importância econômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'FA270': {
			code: 'FA270',
			name: 'Metodologia Científica e do Projeto',
			ementa: 'O conhecimento, ciência e senso comum. O Método Científico. A pesquisa científica; problematização; elaboração de hipóteses; verificação. Metodologia do trabalho científico. Metodologia de Projeto. Exemplo do desenvolvimento de um projeto de engenharia agrícola. Eficiências nas etapas do projeto. Fases e desenvolvimento do projeto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'FA273': {
			code: 'FA273',
			name: 'Desenho Civil Assistido por Computador',
			ementa: 'Simbologia básica e normas técnicas para a representação do projeto arquitetônico; Modelagem tridimensional de maquete arquitetônica e sistemas estruturais. Introdução à compatibilização tridimensional de projeto arquitetônico e estrutural. Detalhamento arquitetônico de anteprojeto.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA173']
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141']
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'EM306': {
			code: 'EM306',
			name: 'Estática',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de um corpo rígido. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Baricentro e carregamento distribuído. Esforços internos em elementos estruturais. Diagrama dos esforços solicitantes. Momento de inércia de figuras planas. Atrito',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141']
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111']
		},
		'FA370': {
			code: 'FA370',
			name: 'Mecânica dos Fluidos para Engenharia',
			ementa: 'Introdução as principais propriedades físicas dos fluidos. Esforços nos fluidos. Fluidostática. Equilibrio relativo. Manometria. Cinemática dos fluidos. Viscosidade. Equação da quantidade de movimento. Teorema de Bernoulli (conservação de energia). Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_128', 'F_129']
		},
		'FA373': {
			code: 'FA373',
			name: 'Pedologia',
			ementa: 'Caracterização da crosta terrestre. Fundamentos de mineralogia, principais minerais e rochas. Intemperismo. O solo como recurso natural. Fatores e processos de formação do solo. O perfil de solo. Definição e notação de horizontes e camadas. Principais atributos morfológicos. Introdução à classificação de solos. Evolução da classificação de solos no Brasil. O sistema brasileiro de classificação de solos. Solos do Brasil e do Estado de São Paulo. Levantamento de solos. Bases para leitura de mapas de solos. Aplicações da Pedagogia em Engenharia Agrícola.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['QG101']
		},
		'FA374': {
			code: 'FA374',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética do ponto flutuante. Zeros de funções reais. Interpolação: Integração numérica. Resolução de sistemas: lineares, não lineares e com restrições. Ajuste de dados e curvas, tratamento numérico de equações diferenciais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211', 'MC102']
		},
		'FA379': {
			code: 'FA379',
			name: 'Introdução à Termodinâmica',
			ementa: 'História da termodinâmica. Conceitos básicos. Propriedades de substâncias puras. Equações de estado. Trabalho e calor. Primeira Lei. Balanços de energia, eficiências de Primeira Lei. Segunda Lei. Exergia e Irreversibilidade. Análises energéticas e exergéticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211/*MA251']
		},
		'CV323': {
			code: 'CV323',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas, introdução, normas NBR 13.133 e NBR 14.144). Planimetria (medições de distâncias e ângulos; taqueometria, topometria, medições eletrônicas de distâncias). Altimetria. Terraço, curvas de nível e locação de canais. Métodos de representação do relevo. Automação topográfica. Terraplanagem. Locação de obras.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GN108']
		},
		'EM406': {
			code: 'EM406',
			name: 'Resistência dos Materiais I',
			ementa: 'Introdução a mecânica dos sólidos. Esforços solicitantes e Equações diferenciais de equilíbrio. Análise de Tensão. Análise de Deformação. Leis constitutivas. Modelos de barra, torção de eixos de seção circular e flexão de vigas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM306', 'MA211']
		},
		'FA425': {
			code: 'FA425',
			name: 'Instrumentação Básica',
			ementa: 'Conceitos básicos de instrumentação. Simbologia. Características estáticas de instrumentos. Calibração. Sensores. Condicionamento e aquisição de sinais. Válvulas e atuadores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328', 'F_329', 'FA370']
		},
		'FA470': {
			code: 'FA470',
			name: 'Dinâmica de Corpos Rígidos',
			ementa: 'Estudo vetorial de curvas. Cinemática da partícula. Movimento relativo. Cinemática dos corpos rígidos nos movimentos plano e espacial. Princípios básicos da dinâmica: Leis de Newton. Conservação dos momentos linear e angular e conservação de energia. Cinética da partícula. Cinética dos sistemas de partículas. Cinética dos corpos rígidos nos movimentos plano e espacial. Aplicações em linguagem simbólica Matlab.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EM306', 'F_128', 'FA374']
		},
		'FA473': {
			code: 'FA473',
			name: 'Sistemas de Produção',
			ementa: 'Roteiros e equipamentos para a produção vegetal. Sistemas de cultivo de vegetais. Equipamentos e instalações para produção animal. Sistemas de produção animal.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['BT330']
		},
		'FA474': {
			code: 'FA474',
			name: 'Dinâmica de Sistemas',
			ementa: 'Sistemas mecânicos, elétricos, térmicos e fluídicos. Elementos ideais e puros. Modelos com parâmetros concentrados e distribuídos. Dinâmica de sistemas lineares. Sistemas de primeira e segunda ordem. Estabilidade de sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329', 'MA311']
		},
		'FA479': {
			code: 'FA479',
			name: 'Termodinâmica Aplicada',
			ementa: 'Introdução aos ciclos de potência. Introdução aos ciclos de refrigeração. Bombas de calor. Misturas. Psicrometria. Combustíveis e reações químicas. Introdução ao equilíbrio químico. Propriedades coligativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA379', 'QG101']
		},
		'FA481': {
			code: 'FA481',
			name: 'Características e Propriedades do Solo',
			ementa: 'O solo como um sistema sólido, poroso, heterogêneo e anisotrópico. Composição volumétrica do solo. Caracterização e métodos de determinação de atributos físicos, químicos e biológicos do solo. Granulometria e textura do solo. Estrutura e agregação do solo. Cor do solo. Porosidade do solo. Ar do solo. Regime térmico do solo. Densidade do solo e das partículas. Consistência do solo. Água do solo. Atributos químicos e de fertilidade do solo. Matéria orgânica do solo. Organismos do solo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA373']
		},
		'EM506': {
			code: 'EM506',
			name: 'Resistência dos Materiais II',
			ementa: 'Tensões de cisalhamento em vigas. Vigas de material composto. Estado de tensão e deformação. Tensões e deformações principais. Carregamentos combinados. Critérios de resistência. Métodos de energia. Flambagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EM406']
		},
		'FA503': {
			code: 'FA503',
			name: 'Meteorologia Agrícola',
			ementa: 'Meteorologia, climatologia, atmosfera terrestre, radiação solar, ciclo hidrológico, fotossíntese, posto meteorológico, zoneamento agrícola, planejamento das atividades agrícolas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT330', 'F_328']
		},
		'FA520': {
			code: 'FA520',
			name: 'História e Desenvolvimento da Agricultura Brasileira',
			ementa: 'Fundamentos históricos da agricultura brasileira. Modernização da agricultura no Brasil. Caracterização da produção agrícola e agroindustrial. Política agrícola. Estrutura Agrária. Relações sociais na agricultura. Desenvolvimento agrícola e agroindustrial.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'FA564': {
			code: 'FA564',
			name: 'Barragens e Estradas de Terra',
			ementa: 'Principais elementos de uma barragem de terra. Definição e determinação dos parâmetros a serem considerados em obras de barragens. Determinação das características de resistência ao cisalhamento e deformabilidade dos solos. Anteprojeto de pequena barragem de terra. Introdução ao estudo de estradas vicinais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481']
		},
		'FA573': {
			code: 'FA573',
			name: 'Laboratório de Máquinas Agrícolas',
			ementa: 'Conceitos básicos de motores, máquinas e implementos agrícolas. Princípios, fundamentos e práticas sobre tratores agrícolas, máquinas e implementos de preparo do solo, semeadoras, adubadoras, cultivadores, colhedoras, pulverizadores e tecnologia de aplicação de produtos fitossanitários.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA425']
		},
		'FA576': {
			code: 'FA576',
			name: 'Propriedades Mecânicas de Materiais Biológicos',
			ementa: 'Propriedades mecânicas de produtos agrícolas. Relações tensão-deformação. Lei de Hooke generalizada. Elasticidade e Viscoelasticidade linear. Teorias de ruptura. Índices de firmeza. Variabilidade de medidas em produtos agrícolas. Efeitos da vibração.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406']
		},
		'FA577': {
			code: 'FA577',
			name: 'Propriedades Físicas dos Produtos Agrícolas',
			ementa: 'Caracterização das matérias-primas. Propriedades higroscópicas, gravimétricas, friccionais, aerodinâmicas e térmicas dos produtos agrícolas. Redução de tamanho.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA425']
		},
		'FA585': {
			code: 'FA585',
			name: 'Materiais e Tecnologia Mecânica',
			ementa: 'Materiais de construção mecânica, metálicos e não metálicos, obtenção, processamento e propriedades. Ensaios de materiais. Processos de fabricação por conformação mecânica. Fundição. Usinagem. Soldagem. Tratamento térmico. Tratamento superficial.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM406']
		},
		'FA586': {
			code: 'FA586',
			name: 'Materiais de Construção Civil',
			ementa: 'Introdução. Materiais cerâmicos. Aglomerantes. Agregados. Argamassas. Concreto simples. Madeiras. Outros materiais.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328']
		},
		'FA622': {
			code: 'FA622',
			name: 'Sistema Solo-Planta-Atmosfera',
			ementa: 'Relação solo-planta-atmosfera. Dinâmica na atmosfera. Radiação solar. Efeito da temperatura no desenvolvimento dos vegetais. Água no sistema vegetal. Balanço de energia, evaporação e transpiração vegetal. Mecanismo de controle de perda de água nos vegetais: controle estomático. Movimentação da água no solo. Absorção da água pelas raízes. Evolução dos mecanismos da tolerância das espécies vegetais à saturação hídrica e ao déficit hídrico no solo. Balanço hídrico. Balanço hidrológico. Modelagem e espacialização das relações solo-planta-atmosfera.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA481', 'FA503']
		},
		'FA665': {
			code: 'FA665',
			name: 'Geotecnologias I',
			ementa: 'Introdução ao geoprocessamento. Cartografia básica. Fotogrametria e fotointerpretação. Sensoriamento remoto. Sistemas de informações geográficas.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['CV323', 'FA481']
		},
		'FA670': {
			code: 'FA670',
			name: 'Elementos de Máquinas',
			ementa: 'Resistência dos materiais à fadiga. Eixos e árvores. Chavetas. Elementos de união. Molas. Tolerância e Ajustes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'FA173', 'FA585']
		},
		'FA673': {
			code: 'FA673',
			name: 'Transferência de Calor e Massa',
			ementa: 'Condução unidimensional em regime permanente. Equações diferenciais. Condução em regime transiente. Transferência de calor por radiação. Transferência de calor por convecção. Trocador de calor. Fundamentos de transferência de massa. Difusão. Transferência interfacial. Transferência de massa convectiva. Equipamentos de transferência de massa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA370', 'FA374', 'FA479']
		},
		'FA676': {
			code: 'FA676',
			name: 'Hidráulica Geral',
			ementa: 'Condutos forçados. Perdas de carga. Problemas de dois e três reservatórios. Instalações de recalque. Noções sobre Golpe de aríete. Condutos livres. Canais fechados e abertos. Energia específica. Remanso. Ressalto hidráulico. Medidores de velocidade e de vazão.',
			semestre: 1,
			vector: {T:3, P:1, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['FA370']
		},
		'FA679': {
			code: 'FA679',
			name: 'Tecnologia de Processos Pós-Colheita I',
			ementa: 'Noções de bioquímica relacionadas à tecnologia pós-colheita. Fatores de pré e pós-colheita. Índices de maturação. Respiração. Modelos respiratórios. Relações térmicas e hídricas. Manutenção da qualidade. Operações do beneficiamento. Tecnologia de conservação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA577']
		},
		'FA680': {
			code: 'FA680',
			name: 'Relação Trator-Implemento',
			ementa: 'Princípios de distribuição de tensões no solo. Determinação da reação do solo devido a ação de implementos de preparo. Sistemas de preparo do solo: plantio convencional, plantio reduzido, plantio ou semeadura direta. Forças atuantes em implementos agrícolas. Acoplamento do implemento ao trator. Mecânica da relação veículo-solo. Compactação de solos sob a ação de máquinas e implementos agrícolas, causas e efeitos. Desempenho de pneus e rodas, resistência ao rolamento, capacidade de carga de um solo, patinagem, desempenho conjunto trator-implemento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA564', 'FA573']
		},
		'FA682': {
			code: 'FA682',
			name: 'Modelagem Estrutural Aplicada',
			ementa: 'Princípios do projeto estrutural. Tópicos de elasticidade aplicada. Métodos dos deslocamentos. Introdução ao método dos elementos finitos. Utilização de programas computacionais. Simulação do comportamento estrutural de máquinas e estruturas agrícolas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EM506', 'FA273', 'FA585', 'FA586']
		},
		'FA720': {
			code: 'FA720',
			name: 'Fundamentos de Economia',
			ementa: 'Introdução à macroeconomia (medidas da atividade econômica: produto, renda, consumo, poupança, investimento, exportações e importações). População, emprego e renda: mercado de trabalho, desigualdades sociais e econômicas. Importância e papel da agricultura no desenvolvimento econômico e social. Mercados e transações. Economia informal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA520']
		},
		'FA721': {
			code: 'FA721',
			name: 'Engenharia Econômica',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de Contabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450', 'MA311']
		},
		'FA733': {
			code: 'FA733',
			name: 'Fundamentos de Microbiologia e Qualidade de Água',
			ementa: 'Conceituação básica sobre microbiologia aplicada à pós-colheita de produtos agrícolas e ao saneamento ambiental. Conhecimentos de fundamentos de hidrobiologia. Conhecimentos fundamentais de química da água.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG101']
		},
		'FA770': {
			code: 'FA770',
			name: 'Elementos de Transmissões Mecânicas',
			ementa: 'Elementos de transmisão; Correias; Correntes. Engrenagens. Elementos reguladores de movimento. Eixos flexíveis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA670']
		},
		'FA778': {
			code: 'FA778',
			name: 'Construções Rurais para a Produção Animal',
			ementa: 'Instalações e equipamentos para a produção animal: aves, suínos, bovinos de leite e corte, ovinos e caprinos, equinos, coelhos e outras instalações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA473', 'FA586']
		},
		'FA779': {
			code: 'FA779',
			name: 'Tecnologia de Resfriamento para Produtos Hortícolas',
			ementa: 'A refrigeração e a conservação de produtos hortícolas. A Cadeia do Frio. Sistemas de refrigeração e elementos que o compõem. Cálculo de carga térmica em câmaras refrigeradas. Câmaras de armazenamento. Dimensionamento de câmaras. Seleção de equipamentos e acessórios. Sistemas de resfriamento rápido com ar forçado e com água. Dimensionamento. Transporte frigorífico de frutas e hortaliças. Tempo de resfriamento, determinação teórica e experimental. Custos de resfriamento. Seleção de sistemas. Viabilidade econômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA673', 'FA679']
		},
		'FA780': {
			code: 'FA780',
			name: 'Instalações Elétricas para Sistemas Agroindustriais',
			ementa: 'Noções básicas sobre geração, transmissão e distribuição de energia elétrica. Linhas de distribuição e ramais rurais. Instalações elétricas em baixa tensão. Sinalização, comando e proteção de circuitos elétricos em baixa tensão. Instrumentos de medidas elétricas. Sistemas de medição e modalidades tarifárias de energia elétrica.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ET016']
		},
		'FA782': {
			code: 'FA782',
			name: 'Dimensionamento de Estruturas de Concreto',
			ementa: 'Esquema estático do projeto estrutural; Dimensionamento de lajes, vigas, pilares e fundações; Projeto de estrutura de concreto.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA682']
		},
		'FA786': {
			code: 'FA786',
			name: 'Hidrologia Ciência e Aplicação',
			ementa: 'Precipitação, infiltração e evapotranspiração em bacias hidrográficas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA622', 'FA676']
		},
		'FA870': {
			code: 'FA870',
			name: 'Dimensionamento de Estruturas de Madeira',
			ementa: 'Esforços e resistência de projeto; Dimensionamento de peças estruturais submetidas a esforços de tração, compressão, cisalhamento e flexão. Efeito do vento. Projeto de uma estrutura de madeira.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA682']
		},
		'FA873': {
			code: 'FA873',
			name: 'Ambientes para Animais e Plantas',
			ementa: 'Respostas fisiológicas: Animal e vegetal em ambientes protegidos. Cálculo da carga térmica. Ventilação natural. Ventilação forçada. Ambientes para a produção vegetal.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA673', 'FA778']
		},
		'FA874': {
			code: 'FA874',
			name: 'Saneamento Ambiental',
			ementa: 'Conceituação básica sobre impactos ambientais. Identificação de fontes de poluição agrícola, zootécnica e agroindustrial. Conceituação das propriedades físicas, químicas e biológicas dos resíduos. Conhecimentos básicos sobre operações e processos unitários. Conceituação e discussão das tecnologias para tratamento de águas residuárias. Discussão de propostas para controle e disposição de resíduos sólidos. Análise e discussão de alternativas para reciclagem de resíduos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA733']
		},
		'FA876': {
			code: 'FA876',
			name: 'Técnicas de Irrigação',
			ementa: 'Conceitos básicos da relação solo-água-planta. Métodos de manejo da irrigação: princípios e prática. Qualidade da água para irrigação. Hidráulica de linhas de irrigação pressurizadas. Métodos de irrigação pressurizados: aspersão e localizada. Irrigação por superfície: inundação e sulcos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA786']
		},
		'FA877': {
			code: 'FA877',
			name: 'Planejamento Agrícola',
			ementa: 'Gestão da empresa agrícola. O papel do planejamento na gestão (áreas funcionais, níveis e etapas). Produção agrícola. Planejamento agrícola e seus componentes: planejamento do uso do solo (zoneamento), planejamento da produção (setores e variedades) e planejamento anual das atividades. Softwares para planejamento e controle.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA665']
		},
		'FA878': {
			code: 'FA878',
			name: 'Introdução ao Gerenciamento de Projetos',
			ementa: 'Conceitos básicos de gerenciamento de projetos. Os macroprocessos de gerenciamento: iniciação, planejamento, execução, controle e encerramento. Áreas de conhecimento do gerenciamento de projetos: escopo, tempo, custo, qualidade, comunicações, riscos, recursos humanos e suprimentos. As relações dentro da equipe. O gerente e seu papel. Os benefícios do gerenciamento de projetos. Utilização de "software" para gerenciamento de projetos.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA460']
		},
		'FA879': {
			code: 'FA879',
			name: 'Tecnologia de Processos Pós-Colheita II',
			ementa: 'Alteração da qualidade na secagem. Psicrometria aplicada à secagem. Teoria de movimentação de ar. Princípios de secagem. Modelos de secagem em leito fixo. Cinética de secagem. Modelo diferencial. Sistemas de Secagem e Secadores. Simulação de secagem. Prática de secagem de grãos. Instalações e custos de secagem.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA577', 'FA673']
		},
		'FA880': {
			code: 'FA880',
			name: 'Princípios de Operação de Máquinas Agrícolas',
			ementa: 'Princípios mecânicos de corte: cisalhamento, inercial e não-convencionais a laser e jato de água. Fragmentação do solo: arados fixos e rotativos. Fragmentação de fluídos, aspersão e pulverização. Seguimento do perfil do solo para o corte ou catação de produtos agrícolas rasteiros. Rolos convergentes ("snappers"): decascadores de arroz e despalhadores. Elevadores de canecas: trajetória. Transporte vibratório: mesa gravitacional. Adensamento de biomassa: enfardamento, briquetagem e pelitização. Dosagem e agitação de agroquímicos fluídos. Dosagem de sementes e agroquímicos granulados.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA470', 'FA573', 'FA576', 'FA577', 'FA770']
		},
		'FA070': {
			code: 'FA070',
			name: 'Estágio Supervisionado',
			ementa: 'Acompanhamento de projeto, montagens e execução de equipamentos e sistemas em Engenharia Agrícola junto a um órgão credenciado pela Coordenadoria de Graduação da Faculdade de Engenharia Agrícola.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA200']
		},
		'FA972': {
			code: 'FA972',
			name: 'Drenagem de Solos Agrícolas',
			ementa: 'Caracterização básica de solos de terras baixas, várzeas e matas ciliares. Drenagem superficial e subterrânea. Dimensionamento de drenos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FA786']
		},
		'FA978': {
			code: 'FA978',
			name: 'Projeto Integrado I',
			ementa: 'Idealização dos procedimentos na resolução de um caso real. Elaboração do anteprojeto. Estudo da viabilidade técnico, sócio e econômico. Cronograma de atividades. Apresentação do anteprojeto.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['FA878']
		},
		'FA979': {
			code: 'FA979',
			name: 'Tecnologia de Processos Pós-Colheita III',
			ementa: 'Introdução à armazenagem de grãos. Rede armazenadora. Classificação: armazéns e silos. Aspectos do produto relacionados com o dimensionamento de silos e armazéns. Características dos grãos armazenados. Fatores que afetam na deterioração de grãos armazenados. Pragas dos grãos armazenados: fungos, insetos, roedores. Conservação da qualidade do grão armazenado: expurgo, termometria, aeração. Equipamentos para manuseio, transporte e beneficiamento de grãos. Controle de pó. Sistemas de armazenamento. Projeto e dimensionamento de unidades de beneficiamento de grãos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FA879']
		},
		'FA983': {
			code: 'FA983',
			name: 'Manejo e Conservação do Solo',
			ementa: 'Sustentabilidade e uso sustentável em agricultura. Introdução ao planejamento do uso das terras e ao planejamento conservacionista. Metodologias de avaliação de terras para fins agrícolas. Manejo agrícola e qualidade do solo. Degradação da qualidade do solo. Erosão do solo. Conservação do solo e da água. Legislação em conservação do solo e da água.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['FA680', 'FA786']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'FA071': {
			code: 'FA071',
			name: 'Sociologia e Extensão Rural',
			ementa: 'Realidade rural brasileira. Introdução à sociologia rural. Geração, transferência, difusão e adoção de tecnologias no meio rural. Comunicação rural. Projetos de intervenção na realidade rural. Fundamentos e metodologia de extensão rural.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA475']
		},
		'FA072': {
			code: 'FA072',
			name: 'Projeto Integrado II',
			ementa: 'Execução do projeto desenvolvido na disciplina FA978 - Projeto Integrado I. Apresentação do projeto.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['FA978']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		}
	}
};

export default catalogue;
