const catalogue = {
	totalCredits: 246,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['LE100', 'LE101', 'LE103', 'LE105', 'LE106', 'NC103']
		},
		'sem-2': {
			id: '2',
			subjects: ['LE200', 'LE201', 'LE202', 'LE203', 'LE205', 'LE400', 'NC202']
		},
		'sem-3': {
			id: '3',
			subjects: ['LE300', 'LE301', 'LE302', 'LE303', 'LE500', 'NC301']
		},
		'sem-4': {
			id: '4',
			subjects: ['EU502', 'LE401', 'LE402', 'LE404', 'LE405', 'LE408', 'LE409', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EU501', 'EU503', 'EU604', 'LE406', 'LE501', 'LE503', 'LE504', 'NC400']
		},
		'sem-6': {
			id: '6',
			subjects: ['ER201', 'ER600', 'EU602', 'LE600', 'LE602', 'LE608', 'LE609', 'LE704']
		},
		'sem-7': {
			id: '7',
			subjects: ['ER700', 'EU500', 'EU702', 'LE012', 'LE700', 'LE701', 'LE703', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['LE802', 'LE804', 'LE902', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['ER901', 'ER902', 'EU802', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['ER011', 'ER012', 'ER801', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 20,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['NC---'],
		},
	},

	subjects: {
		'LE100': {
			code: 'LE100',
			name: 'Desenho Técnico Assistido por Computador',
			ementa: 'Instrumentação e normas. Sistemas de projeções e perspectivas. Convenções e construções geométricas. Rebatimento. Mudança de planos. Introdução a um programa computacional de desenho. Desenho de elementos de máquinas. Desenho de conjunto.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404CD9',
			obligatory: true
		},
		'LE101': {
			code: 'LE101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D96340',
			obligatory: true
		},
		'LE103': {
			code: 'LE103',
			name: 'Oficinas',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5740D9',
			obligatory: true
		},
		'LE105': {
			code: 'LE105',
			name: 'Introdução à Engenharia',
			ementa: 'Natureza e formação do Engenheiro. Noções gerais sobre Ciência e Tecnologia. Fundamentos Metodológicos de Engenharia. Origem e Evolução da Engenharia. A Engenharia Brasileira. Atribuições Profissionais e Perspectivas do Mercado de Trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940CD',
			obligatory: true
		},
		'LE106': {
			code: 'LE106',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#7BD940',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D96F',
			obligatory: true
		},
		'LE200': {
			code: 'LE200',
			name: 'Química Geral',
			ementa: 'Grandezas, dimensões e unidades. Balanços materiais. Estrutura atômica. Propriedades dos elementos. Ligação química. Reações químicas. Estequiometria.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C140D9',
			obligatory: true
		},
		'LE201': {
			code: 'LE201',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9ED940',
			obligatory: true
		},
		'LE202': {
			code: 'LE202',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'LE203': {
			code: 'LE203',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE101', '*LE106'],
			color: '#AA9E40',
			obligatory: true
		},
		'LE205': {
			code: 'LE205',
			name: 'Introdução à Metodologia de Projeto',
			ementa: 'Introdução à dinâmica de grupos. Método científico. Conceitos da metodologia de projeto de engenharia. Projeto por funções. Planejamento de projeto. Pesquisa de mercado. Introdução às ferramentas da criatividade. Função desdobramento da qualidade (QFD). Projeto Axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9E40D9',
			obligatory: true
		},
		'LE400': {
			code: 'LE400',
			name: 'Mecânica Geral',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Carregamentos distribuídos. Diagrama dos esforços solicitantes. Cinemática dos corpos rígidos. Princípios básicos da dinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101'],
			color: '#D96340',
			obligatory: true
		},
		'NC202': {
			code: 'NC202',
			name: 'Sociedade e Ambiente',
			ementa: 'As relações recíprocas, e em distintas escalas, entre fenômenos naturais, estruturas sociais, agentes e organizações indutoras de mudanças ambientais. Os elos entre natureza e políticas públicas, gestão estratégica, desenvolvimento tecnológico e demografia ambiental. As mudanças de paradigmas da sociedade e do conhecimento que acarretam, na atualidade, os conceitos e as estratégias de sustentabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4092D9',
			obligatory: true
		},
		'LE300': {
			code: 'LE300',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE203'],
			color: '#AA9E40',
			obligatory: true
		},
		'LE301': {
			code: 'LE301',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE201'],
			color: '#9ED940',
			obligatory: true
		},
		'LE302': {
			code: 'LE302',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica. Viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE202'],
			color: '#40D9D9',
			obligatory: true
		},
		'LE303': {
			code: 'LE303',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Fundamentos de algoritmos e sua representação em linguagens de alto nível. Estudo pormenorizado de uma ou mais linguagens. Desenvolvimento sistemático e implementação de programas. Modularidade, depuração, testes e documentação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101'],
			color: '#D96340',
			obligatory: true
		},
		'LE500': {
			code: 'LE500',
			name: 'Resistência dos Materiais',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangencial. Lei de Hooke generalizada. Esforços solicitantes. Distribuição de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE400'],
			color: '#D96340',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9AA40',
			obligatory: true
		},
		'EU502': {
			code: 'EU502',
			name: 'Metrologia Industrial',
			ementa: 'O sistema brasileiro de normalização. Terminologia normalizada sobre medição, desvios e erros. Sistemas de medição. Erros e incertezas. Calibração de instrumentos. Rastreabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#5740D9',
			obligatory: true
		},
		'LE401': {
			code: 'LE401',
			name: 'Estrutura e Propriedade dos Materiais',
			ementa: 'Princípios da estrutura e defeitos cristalinos aplicados à materiais metálicos. Difusão atômica. Soluções sólidas. Diagramas de fase. Propriedades dos materiais metálicos e não metálicos. Estrutura e propriedade dos materiais cerâmicos. Estrutura e propriedade dos materiais poliméricos. Noções sobre materiais conjugados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE200'],
			color: '#C140D9',
			obligatory: true
		},
		'LE402': {
			code: 'LE402',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101', '*LE106'],
			color: '#AA9E40',
			obligatory: true
		},
		'LE404': {
			code: 'LE404',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampére, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwel.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE301'],
			color: '#9ED940',
			obligatory: true
		},
		'LE405': {
			code: 'LE405',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE302'],
			color: '#40D9D9',
			obligatory: true
		},
		'LE408': {
			code: 'LE408',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE200'],
			color: '#C140D9',
			obligatory: true
		},
		'LE409': {
			code: 'LE409',
			name: 'Estatística e Probabilidade para Engenharia',
			ementa: 'Introdução à estatística descritiva. Probabilidade. Variáveis aleatórias discretas e contínuas. Variáveis aleatórias multidimensionais. Regressão e correlação. Introdução à teoria de estimação: estimadores pontuais e intervalos de confiança. Noções de amostragem. Teste de hipótese. Introdução à análise de variância. Exemplos de aplicação em engenharia.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE101'],
			color: '#D96340',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#7B40D9',
			obligatory: true
		},
		'EU501': {
			code: 'EU501',
			name: 'Transformação de Fase dos Materiais',
			ementa: 'Nucleação e crescimento de fases. Recuperação, recristalização e crescimento de grãos. Solubilização e precipitação. Ligas ferro-carbono. Tratamentos térmicos e termoquímicos das ligas ferro-carbono. Oxidação e corrosão de metais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#5740D9',
			obligatory: true
		},
		'EU503': {
			code: 'EU503',
			name: 'Mecanismos',
			ementa: 'Graus de liberdade dos mecanismos articulados planares. Estudo dos tipos de mecanismos. Modelagem cinemática e dinâmica por coordenadas generalizadas. Modelagem computacional de mecanismos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE400'],
			color: '#D96340',
			obligatory: true
		},
		'EU604': {
			code: 'EU604',
			name: 'Automação Industrial',
			ementa: 'Sensores. Portas Lógicas. CLPs. Estrutura Básica do Sistema Microcontrolado. Programação Básica em Microcontroladores. Teoria Básica de Controle. Aplicações.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B5',
			obligatory: true
		},
		'LE406': {
			code: 'LE406',
			name: 'Eletrotécnica',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE405'],
			color: '#40D9D9',
			obligatory: true
		},
		'LE501': {
			code: 'LE501',
			name: 'Fenômenos de Transporte',
			ementa: 'Sistema e análise dimensional. Balanços baseados em volume de controle. Transporte laminar e turbulento (transferência molecular e convectiva de quantidade de movimento, calor e massa). Propriedade de transporte. Coeficientes de transferência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE408'],
			color: '#C140D9',
			obligatory: true
		},
		'LE503': {
			code: 'LE503',
			name: 'Tecnologia Mecânica',
			ementa: 'Processos de fabricação. Metrologia. Tolerâncias dimensionais e geométricas. Rugosidade superficial. Documentação do processo de fabricação. Tempos padrões. Lista de materiais (BOM).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#5740D9',
			obligatory: true
		},
		'LE504': {
			code: 'LE504',
			name: 'Termodinâmica II',
			ementa: 'Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos. Bomba de calor. Propriedade de misturas. Psicrometria. Aplicações da termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE408'],
			color: '#C140D9',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B5D9',
			obligatory: true
		},
		'ER201': {
			code: 'ER201',
			name: 'Gestão Sustentável',
			ementa: 'Conceito de gestão sustentável e desenvolvimento sustentável. Planejamento, gestão e desempenho sustentável de organizações públicas e privadas. Políticas e legislação para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e metodologias de gestão sustentável. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#40B5D9',
			obligatory: true
		},
		'ER600': {
			code: 'ER600',
			name: 'Operações Unitárias',
			ementa: 'Processos e equipamentos para separação de misturas heterogêneas (filtros, centrífugas, sedimentação, fluidização). Processos e equipamentos envolvendo troca térmica (trocadores de calor, evaporadores, condensadores). Processos e equipamentos para separação de misturas homogêneas (destilação, extração, absorção).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501'],
			color: '#C140D9',
			obligatory: true
		},
		'EU602': {
			code: 'EU602',
			name: 'Elementos de Máquinas',
			ementa: 'Introdução ao projeto de máquinas. Teoria de falhas. Cálculo de dimensionamento de parafusos, eixos, mancais, engrenagens, molas, embreagens e freios.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE500'],
			color: '#D96340',
			obligatory: true
		},
		'LE600': {
			code: 'LE600',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição dos processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE503'],
			color: '#5740D9',
			obligatory: true
		},
		'LE602': {
			code: 'LE602',
			name: 'Usinagem de Materiais',
			ementa: 'Fundamentos da Usinagem. Processos de Usinagem. Escolha de Ferramental e das condições de Usinagem. Programação CN.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#5740D9',
			obligatory: true
		},
		'LE608': {
			code: 'LE608',
			name: 'Processos de Fabricação I',
			ementa: 'Conceitos de fundição e solidificação. Processos da fundição. Tecnologia da fundição em soldagem. Equipamentos e processos de soldagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#5740D9',
			obligatory: true
		},
		'LE609': {
			code: 'LE609',
			name: 'Fundamentos de Finanças e Custos',
			ementa: 'Princípios de finanças. Custo médio de capital. Modelo Contábil Básico. Análise de Balanço. Contabilidade financeira. Contabilidade gerencial. Esquema básico da contabilidade de custos. Métodos de custeio. Custeio por absorção. Custos por departamento. Custeio baseado em atividades (ABC). Custeio variável. Custos para tomada de decisão. Custos fixos e variáveis. Margem de contribuição. Ponto de equilíbrio econômico e financeiro. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e perdidos. Custos controláveis estimados. Custo-padrão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94086',
			obligatory: true
		},
		'LE704': {
			code: 'LE704',
			name: 'Laboratório de Engenharia I',
			ementa: 'Experimentos em transferência de calor, mecânica de fluidos, termodinâmica.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501'],
			color: '#C140D9',
			obligatory: true
		},
		'ER700': {
			code: 'ER700',
			name: 'Seleção de Materiais',
			ementa: 'Critérios de seleção de materiais. Matriz de decisão ponderada. Seleção de materiais (metálicos, poliméricos, cerâmicos e conjugados) para atender às solicitações: resistência mecânica, fadiga, tenacidade, desgaste, altas temperaturas, corrosão. Trabalho prático de seleção de materiais junto à indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE401'],
			color: '#C140D9',
			obligatory: true
		},
		'EU500': {
			code: 'EU500',
			name: 'Introdução aos Métodos Numéricos Aplicados à Engenharia',
			ementa: 'Introdução ao método dos elementos finitos e diferenças finitas, com aplicações da mecânica dos sólidos e condução de calor. Métodos variacionais e de resíduos ponderados. Discretização e funções de interpolação. Matrizes dos elementos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE106', 'LE300', 'LE402'],
			color: '#9AB240',
			obligatory: true
		},
		'EU702': {
			code: 'EU702',
			name: 'Processos de Fabricação II',
			ementa: 'Introdução à metalurgia do pó. Processamento de materiais cerâmicos. Processos de fabricação usando materiais compósitos. Proteção de superfície por métodos físicos. Proteção de superfície por métodos químicos. Caracterização de superfície. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#5740D9',
			obligatory: true
		},
		'LE012': {
			code: 'LE012',
			name: 'Manutenção Industrial',
			ementa: 'Organização, planejamento e controle de manutenção. Manutenção mecânica e elétrica de equipamentos e instalações. Lubrificação. Manutenção produtiva total.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#5740D9',
			obligatory: true
		},
		'LE700': {
			code: 'LE700',
			name: 'Engenharia de Qualidade',
			ementa: 'Conceitos básicos de qualidade. Histórico mundial e brasileiro. Principais correntes e autores. Modelo sistemático de qualidade - Sistema de gestão da qualidade. Organização do sistema da qualidade. Planejamento estratégico da qualidade. Integração dos sistemas na organização. Ciclo da qualidade: mercado, produto, produção. Recursos humanos para a qualidade. Gestão de custos da qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE409'],
			color: '#D96340',
			obligatory: true
		},
		'LE701': {
			code: 'LE701',
			name: 'Gestão de Projetos',
			ementa: 'Introdução ao gerenciamento de projeto para implementação de sistemas e desenvolvimento de produto. Fases do projeto (preparação, planejamento, monitoramento e adaptação). Revisão de técnicas clássicas (CPM e PERT). Matriz de estrutura de projeto. Simulação probabilística de projeto. Modelagem de sistemas dinâmicos aplicada ao projeto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#40D992',
			obligatory: true
		},
		'LE703': {
			code: 'LE703',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Classificação dos sistemas de manufatura. Aplicação de trabalho padrão. Tecnologia de grupo. Métricas da produção. Cálculo de recursos e capacidade produtiva.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#406FD9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D940AA',
			obligatory: true
		},
		'LE802': {
			code: 'LE802',
			name: 'Laboratório de Engenharia II',
			ementa: 'Experimentos das disciplinas específicas do curso de Engenharia de Manufatura.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE704'],
			color: '#C140D9',
			obligatory: true
		},
		'LE804': {
			code: 'LE804',
			name: 'Ergonomia, Saúde e Higiene do Trabalho',
			ementa: 'Ergonomia. Ambiência e condições extremas. Higiene do Trabalho. Situação de trabalho. Carga de trabalho. Organização do Trabalho. Noções básicas de Antropometria e biomecânica. Relação trabalho e saúde. Método da AET (Análise Ergonômica do Trabalho): interdisciplinaridade, participação dos sujeitos, trabalho real, tarefa, atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA465'],
			color: '#57D940',
			obligatory: true
		},
		'LE902': {
			code: 'LE902',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Métodos e técnicas para engenharia assistida por computador. Projeto, processos e produção assistidos por computador. Conceitos de manufatura computacional integrada (CAE, CAD, CAM). Simulação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#5740D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#C1D940',
			obligatory: true
		},
		'ER901': {
			code: 'ER901',
			name: 'Estágio I',
			ementa: 'Estudos de situações reais em engenharia, com acompanhamento de projetos, especificação, fabricação, montagem e implementação de sistemas junto a empresas ou órgãos credenciados pela Universidade.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA450'],
			color: '#40D94C',
			obligatory: true
		},
		'ER902': {
			code: 'ER902',
			name: 'Trabalho de Graduação I',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo os conhecimentos adquiridos nas disciplinas do curso de Engenharia de Produção/Manufatura. O trabalho será desenvolvido sob a orientação de um professor, com apresentação final escrita.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA475'],
			color: '#D9CD40',
			obligatory: true
		},
		'EU802': {
			code: 'EU802',
			name: 'Projeto de Ferramentas para Fabricação',
			ementa: 'Projeto de dispositivos e ferramentas para fabricação. Cálculo de ferramentas, matrizes e dispositivos de fixação. Sistemas de troca rápida de ferramentas. Projeto de ferramentas auxiliado por computador.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE602'],
			color: '#5740D9',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#D94063',
			obligatory: true
		},
		'ER011': {
			code: 'ER011',
			name: 'Estágio II',
			ementa: 'Estudos de situações reais em engenharia, com acompanhamento de projetos, especialização, fabricação, montagem e implementação de sistemas junto a empresas ou órgãos credenciados pela Universidade.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['ER901'],
			color: '#40D94C',
			obligatory: true
		},
		'ER012': {
			code: 'ER012',
			name: 'Trabalho de Graduação II',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia de Produção/Manufatura. Este trabalho deverá ser uma continuação do trabalho iniciado na disciplina ER902, e será desenvolvido sob a orientação de um professor, com apresentação final escrita, analisada por, ao menos, dois professores de áreas relevantes do trabalho.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['ER902'],
			color: '#D9CD40',
			obligatory: true
		},
		'ER801': {
			code: 'ER801',
			name: 'Desenvolvimento de Produtos',
			ementa: 'Introdução ao desenvolvimento de produtos. Estratégia de desenvolvimento de produtos. Engenharia simultânea. Análise do valor. Processo e metodologias de desenvolvimento. Prototipagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE701'],
			color: '#40D992',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D98640',
			obligatory: false
		}
	}
};

export default catalogue;
