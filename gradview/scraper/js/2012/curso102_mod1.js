const catalogue = {
	totalCredits: 264,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['LE100', 'LE101', 'LE103', 'LE105', 'LE106', 'NC101', 'NC102']
		},
		'sem-2': {
			id: '2',
			subjects: ['ER200', 'LE200', 'LE201', 'LE202', 'LE203', 'LE204', 'LE205', 'LE303', 'NC202']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL301', 'LE300', 'LE301', 'LE302', 'LE400', 'NC100', 'NC400']
		},
		'sem-4': {
			id: '4',
			subjects: ['GL200', 'LE401', 'LE402', 'LE403', 'LE406', 'LE408', 'NC300', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['ER500', 'GL604', 'LE500', 'LE501', 'LE503', 'LE504', 'NC200']
		},
		'sem-6': {
			id: '6',
			subjects: ['ER602', 'LE012', 'LE600', 'LE602', 'LE604', 'LE607', 'LE608', 'LE704', 'NC500', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ER700', 'ER701', 'LE700', 'LE701', 'LE703', 'LE705', 'LE902', 'ELET07']
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
			credits: 24,
			hasRestrictions: true,
			subjects: ['ER702', 'ER703', 'ER801', 'ER805', 'ER806', 'ER807', 'EU600', 'GL400', 'GL506', 'GL605', 'LE702', 'LE803'],
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
			color: '#D96240',
			obligatory: true
		},
		'LE101': {
			code: 'LE101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940A6',
			obligatory: true
		},
		'LE103': {
			code: 'LE103',
			name: 'Oficinas',
			ementa: 'Medidas lineares com instrumentos de medida direta e indireta. Noções de tolerância ISO. Traçagem de peças, trabalhos de bancada. Operações básicas com máquinas operatrizes, furadeira, plaina limadora, torno mecânico horizontal e fresadora.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9C840',
			obligatory: true
		},
		'LE105': {
			code: 'LE105',
			name: 'Introdução à Engenharia',
			ementa: 'Natureza e formação do Engenheiro. Noções gerais sobre Ciência e Tecnologia. Fundamentos Metodológicos de Engenharia. Origem e Evolução da Engenharia. A Engenharia Brasileira. Atribuições Profissionais e Perspectivas do Mercado de Trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8440D9',
			obligatory: true
		},
		'LE106': {
			code: 'LE106',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#62D940',
			obligatory: true
		},
		'NC101': {
			code: 'NC101',
			name: 'Sociedade e Cultura no Mundo Contemporâneo',
			ementa: 'As mudanças socioculturais nos séculos XX e XXI. Modernidade e pós-modernidade; globalização; nação, estado e mercado; indivíduo e individualismo; o dogma do progresso e a sociedade de risco; as redes na Idade Média.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9A6',
			obligatory: true
		},
		'NC102': {
			code: 'NC102',
			name: 'Língua, Linguagem e Discurso',
			ementa: 'O funcionamento da língua: relações de sentido; referência, predicação e determinação. Discurso e texto: historicidade e sentido; procedimentos de textualidade; sentido do texto. Argumentação: relações de argumentação; construção da argumentação. O discurso da ciência: funcionamento linguístico; descrição; argumentação; demonstração.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D984',
			obligatory: true
		},
		'ER200': {
			code: 'ER200',
			name: 'Gestão Ambiental',
			ementa: 'Conceituação de sistemas de Gerenciamento Ambiental. Normas ISO 14000 e certificação. Política ambiental e de qualidade. Desempenho ambiental de empresas, aspectos e riscos ambientais. Análise de riscos e controle de emergências. Metodologias, Planejamento e Implantação de SGAS. Controle de operação, documentação e registros. Avaliação de fornecedores e prestadores de serviços. Educação ambiental na indústria e comunicação. Auditoria ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A6D9',
			obligatory: true
		},
		'LE200': {
			code: 'LE200',
			name: 'Química Geral',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Equilíbrio químico. Ligação química, estrutura e propriedades das substâncias. Reações químicas. Estequiometria. Reações redox e estados de oxidação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A6D940',
			obligatory: true
		},
		'LE201': {
			code: 'LE201',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C840D9',
			obligatory: true
		},
		'LE202': {
			code: 'LE202',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6240D9',
			obligatory: true
		},
		'LE203': {
			code: 'LE203',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE101'],
			color: '#D940A6',
			obligatory: true
		},
		'LE204': {
			code: 'LE204',
			name: 'Fundamentos de Cálculos em Engenharia',
			ementa: 'Grandezas, dimensões e unidades. Variáveis de processo. Operações e processos unitários. Estequiometria. Balanços materiais; Balanços de energia; Balanços material e energético combinados; Balanços em processos no estado transiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE105'],
			color: '#8440D9',
			obligatory: true
		},
		'LE205': {
			code: 'LE205',
			name: 'Introdução à Metodologia de Projeto',
			ementa: 'Introdução à dinâmica de grupos. Método científico. Conceitos da metodologia de projeto de engenharia. Projeto por funções. Planejamento de projeto. Pesquisa de mercado. Introdução às ferramentas da criatividade. Função desdobramento da qualidade (QFD). Projeto Axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#84D940',
			obligatory: true
		},
		'LE303': {
			code: 'LE303',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Fundamentos de algoritmos e sua representação em linguagens de alto nível. Estudo pormenorizado de uma ou mais linguagens. Desenvolvimento sistemático e implementação de programas. Modularidade, depuração, testes e documentação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101'],
			color: '#D940A6',
			obligatory: true
		},
		'NC202': {
			code: 'NC202',
			name: 'Sociedade e Ambiente',
			ementa: 'As relações recíprocas, e em distintas escalas, entre fenômenos naturais, estruturas sociais, agentes e organizações indutoras de mudanças ambientais. Os elos entre natureza e políticas públicas, gestão estratégica, desenvolvimento tecnológico e demografia ambiental. As mudanças de paradigmas da sociedade e do conhecimento que acarretam, na atualidade, os conceitos e as estratégias de sustentabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A640',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Estatística descritiva. Valores centrais e medidas de dispersão. Probabilidade. Variáveis aleatórias discretas unidimensionais. Modelos probabilísticos. Variáveis aleatórias contínuas unidimensionais. Funções de variáveis aleatórias contínuas. Distribuições uniforme e normal. Outras distribuições importantes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101'],
			color: '#D940A6',
			obligatory: true
		},
		'LE300': {
			code: 'LE300',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE203'],
			color: '#D940A6',
			obligatory: true
		},
		'LE301': {
			code: 'LE301',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE201'],
			color: '#C840D9',
			obligatory: true
		},
		'LE302': {
			code: 'LE302',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica. Viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE202'],
			color: '#6240D9',
			obligatory: true
		},
		'LE400': {
			code: 'LE400',
			name: 'Mecânica Geral',
			ementa: 'Sistemas de forças aplicadas equivalentes. Equilíbrio de corpos rígidos interligados. Treliças planas e espaciais. Carregamentos distribuídos. Diagrama dos esforços solicitantes. Cinemática dos corpos rígidos. Princípios básicos da dinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101', 'LE201'],
			color: '#D140C0',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94084',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C8D9',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C8',
			obligatory: true
		},
		'LE401': {
			code: 'LE401',
			name: 'Estrutura e Propriedade dos Materiais',
			ementa: 'Princípios da estrutura e defeitos cristalinos aplicados à materiais metálicos. Difusão atômica. Soluções sólidas. Diagramas de fase. Propriedades dos materiais metálicos e não metálicos. Estrutura e propriedade dos materiais cerâmicos. Estrutura e propriedade dos materiais poliméricos. Noções sobre materiais conjugados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE200'],
			color: '#A6D940',
			obligatory: true
		},
		'LE402': {
			code: 'LE402',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE101'],
			color: '#D940A6',
			obligatory: true
		},
		'LE403': {
			code: 'LE403',
			name: 'Ergonomia',
			ementa: 'Histórico, conceitos, domínios e pressupostos da ergonomia. Contribuições da ergonomia para o projeto do trabalho: a organização do trabalho; os postos de trabalho; os sistemas de informação e as ferramentas de trabalho. Situação de Trabalho. Ambiente e principais componentes do trabalho. O homem no trabalho, ritmos humanos e de trabalho. Noções de esforço físico no trabalho, conforto e fadiga. Antropometria e biomecânica. Espaços de trabalho. Cognição, inteligência e o sentido do trabalho. Métodos e técnicas para estudo do homem no ambiente de trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'LE406': {
			code: 'LE406',
			name: 'Eletrotécnica',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94062',
			obligatory: true
		},
		'LE408': {
			code: 'LE408',
			name: 'Termodinâmica I',
			ementa: 'Conceitos introdutórios e definições. Energia e Primeira Lei da Termodinâmica. Propriedades de uma substância pura. Balanço de energia em volume de controle. Segunda Lei da Termodinâmica. Entropia. Noções de ciclos motores e refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE204'],
			color: '#8440D9',
			obligatory: true
		},
		'NC300': {
			code: 'NC300',
			name: 'Práticas Sociais nas Organizações',
			ementa: 'Conceito de organização. Tipos de organizações. Instituições e organizações. Racionalidade burocrática, indivíduos e grupos. Conflito e relações de poder. Cultura organizacional. Dinâmica das organizações: continuidade ruptura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C8D940',
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
			color: '#D940A6',
			obligatory: true
		},
		'GL604': {
			code: 'GL604',
			name: 'Sistemas de Informação e Gestão do Conhecimento',
			ementa: 'Tecnologia da informação. Sistemas de informação. O conhecimento como ativo da empresa. Gestão do conhecimento: criação, fluxo e disseminação de conhecimento. Aprendizado organizacional. Impactos na competitividade e na organização da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9C8',
			obligatory: true
		},
		'LE500': {
			code: 'LE500',
			name: 'Resistência dos Materiais',
			ementa: 'Introdução. Solicitação axial. Solicitação geral. Solicitação tangencial. Lei de Hooke generalizada. Esforços solicitantes. Distribuição de tensão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE400'],
			color: '#D140C0',
			obligatory: true
		},
		'LE501': {
			code: 'LE501',
			name: 'Fenômenos de Transporte',
			ementa: 'Sistema e análise dimensional. Balanços baseados em volume de controle. Transporte laminar e turbulento (transferência molecular e convectiva de quantidade de movimento, calor e massa). Propriedade de transporte. Coeficientes de transferência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE408'],
			color: '#8440D9',
			obligatory: true
		},
		'LE503': {
			code: 'LE503',
			name: 'Tecnologia Mecânica',
			ementa: 'Processos de fabricação. Metrologia. Tolerâncias dimensionais e geométricas. Rugosidade superficial. Documentação do processo de fabricação. Tempos padrões. Lista de materiais (BOM).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE103'],
			color: '#D9C840',
			obligatory: true
		},
		'LE504': {
			code: 'LE504',
			name: 'Termodinâmica II',
			ementa: 'Análise exergética. Ciclos motores a vapor. Ciclos padrão-ar. Ciclos de refrigeração e frigoríficos; bomba de calor. Propriedade de misturas. Psicrometria. Reações químicas e combustão. Princípios de equilíbrio químico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE408'],
			color: '#8440D9',
			obligatory: true
		},
		'NC200': {
			code: 'NC200',
			name: 'Epistemologia e Filosofia da Ciência',
			ementa: 'Introdução à filosofia e à epistemologia das ciências naturais. Ruptura e continuidade na história da ciência. A ciência moderna e suas raízes epistemológicas. A cultura e a produção do conhecimento. Os rumos da tecnociência contemporânea e de suas relações com a sociedade, com a política e com a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'ER602': {
			code: 'ER602',
			name: 'Operações Unitárias I',
			ementa: 'Equipamentos para o transporte de fluidos: bombas, válvulas, compressores. Dinâmica de partículas. Colunas de recheio. Fluidização. Transporte hidráulico e pneumático. Filtração. Sedimentação. Centrifugação. Tratamento e separação de sólidos. Precipitação eletrostática. Flotação. Agitação e mistura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501'],
			color: '#8440D9',
			obligatory: true
		},
		'LE012': {
			code: 'LE012',
			name: 'Manutenção Industrial',
			ementa: 'Organização, planejamento e controle de manutenção. Manutenção mecânica e elétrica de equipamentos e instalações. Lubrificação. Manutenção produtiva total.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE103'],
			color: '#D9C840',
			obligatory: true
		},
		'LE600': {
			code: 'LE600',
			name: 'Conformação Mecânica',
			ementa: 'Classificação dos processos de conformação. Metalurgia e mecânica da conformação. Descrição dos processos de conformação. Projetos de ferramentas de estampagem e forjamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE503'],
			color: '#D9C840',
			obligatory: true
		},
		'LE602': {
			code: 'LE602',
			name: 'Usinagem de Materiais',
			ementa: 'Fundamentos da Usinagem. Processos de Usinagem. Escolha de Ferramental e das condições de Usinagem. Programação CN.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE103'],
			color: '#D9C840',
			obligatory: true
		},
		'LE604': {
			code: 'LE604',
			name: 'Iniciação Científica I',
			ementa: 'Esta disciplina tem por objetivos: familiarizar os alunos do curso de graduação com o conhecimento científico e com os processos de trabalho científico; iniciá-los em métodos e técnicas de estudo e de pesquisa no campo da engenharia, através da definição do tema da pesquisa e levantamento bibliográfico.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#40D962',
			obligatory: true
		},
		'LE607': {
			code: 'LE607',
			name: 'Análise de Custos',
			ementa: 'Contabilidade financeira. Contabilidade de custos. Contabilidade gerencial. Esquema básico da contabilidade de custos. Métodos de custeio. Custeio por absorção. Custos por departamento. Custeio baseado em atividades (ABC). Custeio variável. Custos para tomada de decisão. Custos fixos. Custos variáveis. Margem de contribuição. Ponto de equilíbrio econômico. Ponto de equilíbrio financeiro. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL200', 'LE503'],
			color: '#D98484',
			obligatory: true
		},
		'LE608': {
			code: 'LE608',
			name: 'Processos de Fabricação I',
			ementa: 'Conceitos de fundição e solidificação. Processos da fundição. Tecnologia da fundição em soldagem. Equipamentos e processos de soldagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#D9C840',
			obligatory: true
		},
		'LE704': {
			code: 'LE704',
			name: 'Laboratório de Engenharia I',
			ementa: 'Experimentos em transferência de calor, mecânica de fluidos, termodinâmica, processo de produção e propriedades mecânicas.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE201'],
			color: '#C840D9',
			obligatory: true
		},
		'NC500': {
			code: 'NC500',
			name: 'Lógica',
			ementa: 'Introdução ao estudo da moderna lógica: funções proposicionais, quantificação, função de verdade, verdade lógica, modelo, linguagem formal e método axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D940',
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
			color: '#A6D940',
			obligatory: true
		},
		'ER701': {
			code: 'ER701',
			name: 'Simulação de Sistemas',
			ementa: 'Processos estocásticos e estruturas de dados. Noções de teoria de filas e de teorias de estoques. Simulação de sistemas discretos com lista de eventos futuros.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ER500'],
			color: '#D940A6',
			obligatory: true
		},
		'LE700': {
			code: 'LE700',
			name: 'Engenharia de Qualidade',
			ementa: 'Conceitos básicos de qualidade. Histórico mundial e brasileiro. Principais correntes e autores. Modelo sistemático de qualidade - Sistema de gestão da qualidade. Organização do sistema da qualidade. Planejamento estratégico da qualidade. Integração dos sistemas na organização. Ciclo da qualidade: mercado, produto, produção. Recursos humanos para a qualidade. Gestão de custos da qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE602'],
			color: '#D9C840',
			obligatory: true
		},
		'LE701': {
			code: 'LE701',
			name: 'Gestão de Projetos',
			ementa: 'Introdução ao gerenciamento de projeto para implementação de sistemas e desenvolvimento de produto. Fases do projeto (preparação, planejamento, monitoramento e adaptação). Revisão de técnicas clássicas (CPM e PERT). Matriz de estrutura de projeto. Simulação probabilística de projeto. Modelagem de sistemas dinâmicos aplicada ao projeto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE205'],
			color: '#84D940',
			obligatory: true
		},
		'LE703': {
			code: 'LE703',
			name: 'Sistemas Produtivos',
			ementa: 'Conceituação da manufatura. Classificação dos sistemas de manufatura. Aplicação de trabalho padrão. Tecnologia de grupo. Métricas da produção. Cálculo de recursos e capacidade produtiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE602'],
			color: '#D9C840',
			obligatory: true
		},
		'LE705': {
			code: 'LE705',
			name: 'Iniciação Científica II',
			ementa: 'Esta disciplina tem por objetivos: familiarizar os alunos do curso de graduação com o conhecimento científico e com os processos de trabalho científico; iniciá-los em métodos e técnicas de estudo e de pesquisa no campo da engenharia, através da definição do tema da pesquisa e levantamento bibliográfico.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['LE604'],
			color: '#40D962',
			obligatory: true
		},
		'LE902': {
			code: 'LE902',
			name: 'Engenharia Assistida por Computador',
			ementa: 'Métodos e técnicas para engenharia assistida por computador. Projeto, processos e produção assistidos por computador. Conceitos de manufatura computacional integrada (CAE, CAD, CAM). Simulação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE503'],
			color: '#D9C840',
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
			color: '#D9C840',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento. Níveis de planejamento. Estratégias. Modelos de planejamento e gestão estratégica. Formulação, implementação e avaliação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#40C8D9',
			obligatory: true
		},
		'LE801': {
			code: 'LE801',
			name: 'Planejamento e Controle de Produção',
			ementa: 'Caracterização do problema de planejamento e controle da produção (PCP). Cálculo de Necessidades (MRP). Mapeamento do fluxo de valor. Sistema Kaban. Takt time. Fluxo Contínuo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE602'],
			color: '#D9C840',
			obligatory: true
		},
		'LE900': {
			code: 'LE900',
			name: 'Higiene e Segurança do Trabalho',
			ementa: 'Conceitos gerais sobre Higiene, Saúde e Segurança no Trabalho. Riscos à saúde relacionados ao ambiente de trabalho: avaliação, prevenção e controle. Normatização e Legislação. Relação Saúde e Trabalho. Toxicologia. Doenças profissionais e do trabalho. Acidentes do Trabalho e métodos de análise.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['LE403'],
			color: '#4040D9',
			obligatory: true
		},
		'LE901': {
			code: 'LE901',
			name: 'Pesquisa Operacional',
			ementa: 'Introdução a problemas de otimização e suas propriedades básicas. Problemas de otimização irrestritos e com restrição. Programação Linear, formulação, solução geométrica, o método simplex, dualidade e interpretação econômica. Otimização de fluxo em rede, problemas de transporte, caminho mínimo e fluxo máximo. Programação dinâmica, procedimento forward e backward. Programação por metas e programação inteira-mista.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98440',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
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
			color: '#4040D9',
			obligatory: true
		},
		'ER901': {
			code: 'ER901',
			name: 'Estágio I',
			ementa: 'Estudos de situações reais em engenharia, com acompanhamento de projetos, especificação, fabricação, montagem e implementação de sistemas junto a empresas ou órgãos credenciados pela Universidade.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA450'],
			color: '#4084D9',
			obligatory: true
		},
		'ER902': {
			code: 'ER902',
			name: 'Trabalho de Graduação I',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo os conhecimentos adquiridos nas disciplinas do curso de Engenharia de Produção/Manufatura. O trabalho será desenvolvido sob a orientação de um professor, com apresentação final escrita.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'AA475'],
			color: '#A640D9',
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
			color: '#4084D9',
			obligatory: true
		},
		'ER012': {
			code: 'ER012',
			name: 'Trabalho de Graduação II',
			ementa: 'Trabalho de caráter teórico e/ou prático, envolvendo conhecimentos adquiridos em diversas disciplinas do curso de Engenharia de Produção/Manufatura. Este trabalho deverá ser uma continuação do trabalho iniciado na disciplina ER902, e será desenvolvido sob a orientação de um professor, com apresentação final escrita, analisada por, ao menos, dois professores de áreas relevantes do trabalho.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'ER902'],
			color: '#A640D9',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ER702': {
			code: 'ER702',
			name: 'Síntese de Processos Químicos',
			ementa: 'Noções de reatores químicos e cinética de reações químicas. Reações homogêneas. Reações elementares. Reações complexas. O fenômeno catalítico. Desvio de comportamento ideal de reatores químicos. Reatores catalíticos homogêneos. Noções de síntese de processos químicos industriais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE504'],
			color: '#8440D9',
			obligatory: false
		},
		'ER703': {
			code: 'ER703',
			name: 'Operações Unitárias II',
			ementa: 'Trocadores de calor. Combustão e geração de vapor. Caldeiras. Evaporação. Cristalização. Refrigeração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ER602'],
			color: '#8440D9',
			obligatory: false
		},
		'ER801': {
			code: 'ER801',
			name: 'Desenvolvimento de Produtos',
			ementa: 'Introdução ao desenvolvimento de produtos. Estratégia de desenvolvimento de produtos. Engenharia simultânea. Análise do valor. Processo e metodologias de desenvolvimento. Prototipagem.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['LE205'],
			color: '#84D940',
			obligatory: false
		},
		'ER805': {
			code: 'ER805',
			name: 'Operações Unitárias III',
			ementa: 'Destilação. Extração. Lixiviação. Absorção. Operações em estágios e em colunas de recheio.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ER703'],
			color: '#8440D9',
			obligatory: false
		},
		'ER806': {
			code: 'ER806',
			name: 'Laboratório de Processos Químicos',
			ementa: 'Experimentos em fenômenos de transporte e operações unitárias mais relevantes na Indústria Química, com montagem, medição e interpretação de resultados.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501', 'LE504'],
			color: '#8440D9',
			obligatory: false
		},
		'ER807': {
			code: 'ER807',
			name: 'Análise e Simulação de Processos',
			ementa: 'Simulação de processos. Modelos matemáticos e físicos. Simulação de processos por computador. Identificação de parâmetros. Otimização de processos. Análise de dados de entrada/saída.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501', 'LE504'],
			color: '#8440D9',
			obligatory: false
		},
		'EU600': {
			code: 'EU600',
			name: 'Sistemas Fluido Térmicos',
			ementa: 'Introdução a sistemas de: compressão; distribuição de gases e líquidos; ventilação; condicionamento de ar; refrigeração; motores de combustão interna; geração e cogeração de potência; geração, distribuição e utilização de vapor. Unidade de incineração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LE501', 'LE504'],
			color: '#8440D9',
			obligatory: false
		},
		'GL400': {
			code: 'GL400',
			name: 'Estatística II',
			ementa: 'Amostragem. Interferência estatística. Estimação. Teste de hipótese. Correlação. Análise de variância. Análise de regressão. Controle estatístico de processo. Medidas estatísticas de avaliação de risco.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#D940A6',
			obligatory: false
		},
		'GL506': {
			code: 'GL506',
			name: 'Gestão em Sistemas de Produção',
			ementa: 'Tipos e evolução de sistemas de produção. Relacionamento da produção com as demais áreas da organização. Arranjo físico e layout. Capacidade produtiva e produtividade. Planejamento e programação da produção. Sistemas de gestão da produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL400'],
			color: '#D940A6',
			obligatory: false
		},
		'GL605': {
			code: 'GL605',
			name: 'Gestão de Sistemas de Logística',
			ementa: 'Fundamentos de logística. Gestão da cadeia de suprimentos. Controle de estoques. Logística integrada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL506'],
			color: '#D940A6',
			obligatory: false
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da Gestão de Pessoas nas empresas. A Gestão de RH, Objetivos, Políticas e Estratégias. Histórico de Gestão de Pessoal de Relações de Trabalho. A Gestão Estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: Qualidade de Vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC300'],
			color: '#C8D940',
			obligatory: false
		},
		'LE803': {
			code: 'LE803',
			name: 'Gestão de Qualidade',
			ementa: 'Histórico da qualidade. Conceituação de sistemas de gerenciamento da qualidade. Normas ISO 9000 e certificação. Política da qualidade. Custos da qualidade. Novas abordagens sobre qualidade. Ferramentas da qualidade. Modelos de excelência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4062D9',
			obligatory: false
		}
	}
};

export default catalogue;
