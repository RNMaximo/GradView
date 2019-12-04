const catalogue = {
	totalCredits: 246,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['LE100', 'LE101', 'LE103', 'LE105', 'LE106', 'NC103']
		},
		'sem-2': {
			id: '2',
			subjects: ['ER200', 'LE200', 'LE201', 'LE202', 'LE203', 'LE204', 'LE205', 'LE303', 'NC202']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL301', 'LE300', 'LE301', 'LE302', 'LE400', 'NC301']
		},
		'sem-4': {
			id: '4',
			subjects: ['GL200', 'LE401', 'LE402', 'LE403', 'LE406', 'LE408', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['ER500', 'GL604', 'LE500', 'LE501', 'LE503', 'LE504', 'NC400']
		},
		'sem-6': {
			id: '6',
			subjects: ['ER600', 'LE012', 'LE600', 'LE602', 'LE607', 'LE608', 'LE704', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ER700', 'ER701', 'LE700', 'LE701', 'LE703', 'LE902', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ER808', 'GL601', 'LE801', 'LE900', 'LE901', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['ER900', 'ER901', 'ER902', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['ER011', 'ER012', 'ELET10']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['ER801', 'LE702'],
		},
		'elet-3': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
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
			color: '#8040D9',
			obligatory: true
		},
		'LE101': {
			code: 'LE101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D97040',
			obligatory: true
		},
		'LE103': {
			code: 'LE103',
			name: 'Oficinas',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C1D9',
			obligatory: true
		},
		'LE105': {
			code: 'LE105',
			name: 'Introdução à Engenharia',
			ementa: 'Natureza e formação do Engenheiro. Noções gerais sobre Ciência e Tecnologia. Fundamentos Metodológicos de Engenharia. Origem e Evolução da Engenharia. A Engenharia Brasileira. Atribuições Profissionais e Perspectivas do Mercado de Trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C1',
			obligatory: true
		},
		'LE106': {
			code: 'LE106',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#5040D9',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940A0',
			obligatory: true
		},
		'ER200': {
			code: 'ER200',
			name: 'Gestão Ambiental',
			ementa: 'Conceituação de Gestão Ambiental, Gestão Sustentável e Desenvolvimento Sustentável. Sistema de Gerenciamento Ambiental. Desempenho sustentável de organizações públicas e privadas e auditoria ambiental. Políticas ambiental e para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e Metodologias de Gestão Sustentável. Normas, selos e certificações socioambientais. Análise de riscos. Gestão Sustentável na Cadeia de Suprimentos. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE105'],
			color: '#40D9C1',
			obligatory: true
		},
		'LE200': {
			code: 'LE200',
			name: 'Química Geral',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Equilíbrio químico. Ligação química, estrutura e propriedades das substâncias. Reações químicas. Estequiometria. Reações redox e estados de oxidação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B040D9',
			obligatory: true
		},
		'LE201': {
			code: 'LE201',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#80D940',
			obligatory: true
		},
		'LE202': {
			code: 'LE202',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'LE203': {
			code: 'LE203',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE101', '*LE106'],
			color: '#95588D',
			obligatory: true
		},
		'LE204': {
			code: 'LE204',
			name: 'Fundamentos de Cálculos em Engenharia',
			ementa: 'Grandezas, dimensões e unidades. Variáveis de processo. Operações e processos unitários. Balanços materiais. Balanços de energia. Balanços material e energético combinados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE105'],
			color: '#40D9C1',
			obligatory: true
		},
		'LE205': {
			code: 'LE205',
			name: 'Introdução à Metodologia de Projeto',
			ementa: 'Introdução à dinâmica de grupos. Método científico. Conceitos da metodologia de projeto de engenharia. Projeto por funções. Planejamento de projeto. Pesquisa de mercado. Introdução às ferramentas da criatividade. Função desdobramento da qualidade (QFD). Projeto Axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94070',
			obligatory: true
		},
		'LE303': {
			code: 'LE303',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Fundamentos de algoritmos e sua representação em linguagens de alto nível. Estudo pormenorizado de uma ou mais linguagens. Desenvolvimento sistemático e implementação de programas. Modularidade, depuração, testes e documentação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101'],
			color: '#D97040',
			obligatory: true
		},
		'NC202': {
			code: 'NC202',
			name: 'Sociedade e Ambiente',
			ementa: 'As relações recíprocas, e em distintas escalas, entre fenômenos naturais, estruturas sociais, agentes e organizações indutoras de mudanças ambientais. Os elos entre natureza e políticas públicas, gestão estratégica, desenvolvimento tecnológico e demografia ambiental. As mudanças de paradigmas da sociedade e do conhecimento que acarretam, na atualidade, os conceitos e as estratégias de sustentabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A040',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Noções de amostragem. Estatística descritiva: métodos gráficos, medidas de tendência central e medidas de dispersão. Introdução à probabilidade. Variáveis aleatórias discretas. Variáveis aleatórias contínuas. Distribuição normal. Análise de correlação. Regressão linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*LE101'],
			color: '#D97040',
			obligatory: true
		},
		'LE300': {
			code: 'LE300',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE203'],
			color: '#95588D',
			obligatory: true
		},
		'LE301': {
			code: 'LE301',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE201'],
			color: '#80D940',
			obligatory: true
		},
		'LE302': {
			code: 'LE302',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica. Viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE202'],
			color: '#D94040',
			obligatory: true
		},
		'LE400': {
			code: 'LE400',
			name: 'Mecânica Geral',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Carregamentos distribuídos. Diagrama dos esforços solicitantes. Cinemática dos corpos rígidos. Princípios básicos da dinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101', 'LE201'],
			color: '#ADA540',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4090D9',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4060D9',
			obligatory: true
		},
		'LE401': {
			code: 'LE401',
			name: 'Estrutura e Propriedade dos Materiais',
			ementa: 'Princípios da estrutura e defeitos cristalinos aplicados à materiais metálicos. Difusão atômica. Soluções sólidas. Diagramas de fase. Propriedades dos materiais metálicos e não metálicos. Estrutura e propriedade dos materiais cerâmicos. Estrutura e propriedade dos materiais poliméricos. Noções sobre materiais conjugados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE200'],
			color: '#B040D9',
			obligatory: true
		},
		'LE402': {
			code: 'LE402',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101', '*LE106'],
			color: '#95588D',
			obligatory: true
		},
		'LE403': {
			code: 'LE403',
			name: 'Ergonomia',
			ementa: 'Histórico, conceitos, domínios e pressupostos da ergonomia. Contribuições da ergonomia para o projeto do trabalho: a organização do trabalho; os postos de trabalho; os sistemas de informação e as ferramentas de trabalho. Situação de Trabalho. Ambiente e principais componentes do trabalho. O homem no trabalho, ritmos humanos e de trabalho. Noções de esforço físico no trabalho, conforto e fadiga. Antropometria e biomecânica. Espaços de trabalho. Cognição, inteligência e o sentido do trabalho. Métodos e técnicas para estudo do homem no ambiente de trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#50D940',
			obligatory: true
		},
		'LE406': {
			code: 'LE406',
			name: 'Eletrotécnica',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D140',
			obligatory: true
		},
		'LE408': {
			code: 'LE408',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE204'],
			color: '#40D9C1',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ER500': {
			code: 'ER500',
			name: 'Programação Linear',
			ementa: 'Formulação de problemas de programação linear. Resolução Gráfica. Método Simplex. Teoria de Dualidade. Análise de sensibilidade e análise paramétrica. Algoritmos de pontos interiores.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE402'],
			color: '#95588D',
			obligatory: true
		},
		'GL604': {
			code: 'GL604',
			name: 'Sistemas de Informação e Gestão do Conhecimento',
			ementa: 'Tecnologia da informação. Sistemas de informação. O conhecimento como ativo da empresa. Gestão do conhecimento: criação, fluxo e disseminação de conhecimento. Aprendizado organizacional. Impactos na competitividade e na organização da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D1',
			obligatory: true
		},
		'LE500': {
			code: 'LE500',
			name: 'Resistência dos Materiais',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangencial. Lei de Hooke generalizada. Esforços solicitantes. Distribuição de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE400'],
			color: '#ADA540',
			obligatory: true
		},
		'LE501': {
			code: 'LE501',
			name: 'Fenômenos de Transporte',
			ementa: 'Sistema e análise dimensional. Balanços baseados em volume de controle. Transporte laminar e turbulento (transferência molecular e convectiva de quantidade de movimento, calor e massa). Propriedade de transporte. Coeficientes de transferência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE408'],
			color: '#40D9C1',
			obligatory: true
		},
		'LE503': {
			code: 'LE503',
			name: 'Tecnologia Mecânica',
			ementa: 'Processos de fabricação. Metrologia. Tolerâncias dimensionais e geométricas. Rugosidade superficial. Documentação do processo de fabricação. Tempos padrões. Lista de materiais (BOM).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE103'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE504': {
			code: 'LE504',
			name: 'Termodinâmica II',
			ementa: 'Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos. Bomba de calor. Propriedade de misturas. Psicrometria. Princípios de equilíbrio químico. Aplicações da termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE408'],
			color: '#40D9C1',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D990',
			obligatory: true
		},
		'ER600': {
			code: 'ER600',
			name: 'Operações Unitárias',
			ementa: 'Processos e equipamentos para separação de misturas heterogêneas (filtros, centrífugas, sedimentação, fluidização). Processos e equipamentos envolvendo troca térmica (trocadores de calor, evaporadores, condensadores). Processos e equipamentos para separação de misturas homogêneas (destilação, extração, absorção).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501'],
			color: '#40D9C1',
			obligatory: true
		},
		'LE012': {
			code: 'LE012',
			name: 'Manutenção Industrial',
			ementa: 'Organização, planejamento e controle de manutenção. Manutenção mecânica e elétrica de equipamentos e instalações. Lubrificação. Manutenção produtiva total.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE600': {
			code: 'LE600',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição dos processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE503'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE602': {
			code: 'LE602',
			name: 'Usinagem de Materiais',
			ementa: 'Fundamentos da Usinagem. Processos de Usinagem. Escolha de Ferramental e das condições de Usinagem. Programação CN.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE103'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE607': {
			code: 'LE607',
			name: 'Análise de Custos',
			ementa: 'Contabilidade financeira. Contabilidade de custos. Contabilidade gerencial. Esquema básico da contabilidade de custos. Métodos de custeio. Custeio por absorção. Custos por departamento. Custeio baseado em atividades (ABC). Custeio variável. Custos para tomada de decisão. Custos fixos. Custos variáveis. Margem de contribuição. Ponto de equilíbrio econômico. Ponto de equilíbrio financeiro. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL200', 'LE503'],
			color: '#4091D9',
			obligatory: true
		},
		'LE608': {
			code: 'LE608',
			name: 'Processos de Fabricação I',
			ementa: 'Conceitos de fundição e solidificação. Processos da fundição. Tecnologia da fundição em soldagem. Equipamentos e processos de soldagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE704': {
			code: 'LE704',
			name: 'Laboratório de Engenharia I',
			ementa: 'Experimentos em transferência de calor, mecânica de fluidos, termodinâmica.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501'],
			color: '#40D9C1',
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
		'ER700': {
			code: 'ER700',
			name: 'Seleção de Materiais',
			ementa: 'Critérios de seleção de materiais. Matriz de decisão ponderada. Seleção de materiais (metálicos, poliméricos, cerâmicos e conjugados) para atender às solicitações: resistência mecânica, fadiga, tenacidade, desgaste, altas temperaturas, corrosão. Trabalho prático de seleção de materiais junto à indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE401'],
			color: '#B040D9',
			obligatory: true
		},
		'ER701': {
			code: 'ER701',
			name: 'Simulação de Sistemas',
			ementa: 'Processos estocásticos, geradores de números aleatórios. Noções de teoria de filas e de teorias de estoques. Simulação de sistemas discretos com lista de eventos futuros.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301', 'LE303', '*ER500'],
			color: '#C2685A',
			obligatory: true
		},
		'LE700': {
			code: 'LE700',
			name: 'Engenharia de Qualidade',
			ementa: 'Conceitos básicos de qualidade. Histórico mundial e brasileiro. Principais correntes e autores. Modelo sistemático de qualidade - Sistema de gestão da qualidade. Organização do sistema da qualidade. Planejamento estratégico da qualidade. Integração dos sistemas na organização. Ciclo da qualidade: mercado, produto, produção. Recursos humanos para a qualidade. Gestão de custos da qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE602'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE701': {
			code: 'LE701',
			name: 'Gestão de Projetos',
			ementa: 'Introdução ao gerenciamento de projeto para implementação de sistemas e desenvolvimento de produto. Fases do projeto (preparação, planejamento, monitoramento e adaptação). Revisão de técnicas clássicas (CPM e PERT). Matriz de estrutura de projeto. Simulação probabilística de projeto. Modelagem de sistemas dinâmicos aplicada ao projeto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE205'],
			color: '#D94070',
			obligatory: true
		},
		'LE703': {
			code: 'LE703',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Classificação dos sistemas de manufatura. Aplicação de trabalho padrão. Tecnologia de grupo. Métricas da produção. Cálculo de recursos e capacidade produtiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE602'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE902': {
			code: 'LE902',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Métodos e técnicas para engenharia assistida por computador. Projeto, processos e produção assistidos por computador. Conceitos de manufatura computacional integrada (CAE, CAD, CAM). Simulação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#40C1D9',
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
		'ER808': {
			code: 'ER808',
			name: 'Projeto de Fábrica',
			ementa: 'Conceitos e metodologias para concepção e projeto de fábricas. Projeto e organização dos processos de produção, movimentação interna e armazenagem. Simulação computacional na concepção e avaliação de alternativas para o projeto de produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE703'],
			color: '#40C1D9',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento. Níveis de planejamento. Estratégias. Modelos de planejamento e gestão estratégica. Formulação, implementação e avaliação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#40D990',
			obligatory: true
		},
		'LE801': {
			code: 'LE801',
			name: 'Planejamento e Controle de Produção',
			ementa: 'Caracterização do problema de planejamento e controle da produção (PCP). Cálculo de Necessidades (MRP). Mapeamento do fluxo de valor. Sistema Kaban. Takt time. Fluxo Contínuo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE602'],
			color: '#40C1D9',
			obligatory: true
		},
		'LE900': {
			code: 'LE900',
			name: 'Higiene e Segurança do Trabalho',
			ementa: 'Conceitos gerais sobre Higiene, Saúde e Segurança no Trabalho. Riscos à saúde relacionados ao ambiente de trabalho: avaliação, prevenção e controle. Normatização e Legislação. Relação Saúde e Trabalho. Toxicologia. Doenças profissionais e do trabalho. Acidentes do Trabalho e métodos de análise.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE403'],
			color: '#50D940',
			obligatory: true
		},
		'LE901': {
			code: 'LE901',
			name: 'Pesquisa Operacional',
			ementa: 'Otimização de fluxo em rede, problemas de transporte, caminho mínimo e fluxo máximo. Programação dinâmica, procedimento forward e backward. Programação por metas e programação inteira-mista. Programação não linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE303'],
			color: '#D97040',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ER900': {
			code: 'ER900',
			name: 'Análise Ergonômica do Trabalho',
			ementa: 'Ação ergonômica e análise do trabalho. Trabalho, tarefa e atividade. Método da Análise Ergonômica do Trabalho. Instrução da demanda e planejamento da intervenção ergonômica. Funcionamento da organização e características da população trabalhadora. Observações abertas e globais das situações de trabalho. Elaboração do pré-diagnóstico e das observações sistemáticas. Validação. Diagnóstico, transformação e acompanhamento das situações de trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE403'],
			color: '#50D940',
			obligatory: true
		},
		'ER901': {
			code: 'ER901',
			name: 'Estágio I',
			ementa: 'Estudos de situações reais em engenharia, com acompanhamento de projetos, especificação, fabricação, montagem e implementação de sistemas junto a empresas ou órgãos credenciados pela Universidade.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA450'],
			color: '#40D960',
			obligatory: true
		},
		'ER902': {
			code: 'ER902',
			name: 'Trabalho de Graduação I',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo os conhecimentos adquiridos nas disciplinas do curso de Engenharia de Produção/Manufatura. O trabalho será desenvolvido sob a orientação de um professor, com apresentação final escrita.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA475'],
			color: '#B0D940',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ER011': {
			code: 'ER011',
			name: 'Estágio II',
			ementa: 'Estudos de situações reais em engenharia, com acompanhamento de projetos, especialização, fabricação, montagem e implementação de sistemas junto a empresas ou órgãos credenciados pela Universidade.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['ER901'],
			color: '#40D960',
			obligatory: true
		},
		'ER012': {
			code: 'ER012',
			name: 'Trabalho de Graduação II',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia de Produção/Manufatura. Este trabalho deverá ser uma continuação do trabalho iniciado na disciplina ER902, e será desenvolvido sob a orientação de um professor, com apresentação final escrita, analisada por, ao menos, dois professores de áreas relevantes do trabalho.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'ER902'],
			color: '#B0D940',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ER801': {
			code: 'ER801',
			name: 'Desenvolvimento de Produtos',
			ementa: 'Introdução ao desenvolvimento de produtos. Estratégia de desenvolvimento de produtos. Engenharia simultânea. Análise do valor. Processo e metodologias de desenvolvimento. Prototipagem.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE205'],
			color: '#D94070',
			obligatory: false
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da Gestão de Pessoas nas empresas. A Gestão de RH, Objetivos, Políticas e Estratégias. Histórico de Gestão de Pessoal de Relações de Trabalho. A Gestão Estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: Qualidade de Vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#40D990',
			obligatory: false
		}
	}
};

export default catalogue;
