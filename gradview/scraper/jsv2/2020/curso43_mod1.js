const catalogue = {
	totalCredits: 272,
	maxCreditsSem: 34,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'F_128', 'FT100', 'QG101', 'MA141']
		},
		'sem-2': {
			id: '2',
			subjects: ['MA211', 'F_228', 'F_129', 'QO427', 'MC102']
		},
		'sem-3': {
			id: '3',
			subjects: ['MA311', 'FT210', 'QA218']
		},
		'sem-4': {
			id: '4',
			subjects: ['CE138', 'FT310', 'BM320', 'FT311', 'F_328']
		},
		'sem-5': {
			id: '5',
			subjects: ['FT410', 'FT411', 'FT430', 'FT412', 'MS211', 'ET016']
		},
		'sem-6': {
			id: '6',
			subjects: ['FT510', 'FT511', 'FT540', 'FT530', 'FT512']
		},
		'sem-7': {
			id: '7',
			subjects: ['ME414', 'FT621', 'FT622', 'FT620', 'FT630']
		},
		'sem-8': {
			id: '8',
			subjects: ['FT720', 'FT721', 'FT531', 'FT722', 'FT723']
		},
		'sem-9': {
			id: '9',
			subjects: ['FT820', 'FT550', 'FT640', 'FT821', 'FT822', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['ELET10', 'FT740', 'FT742', 'FT552', 'FT741']
		},
		'sem-11': {
			id: '11',
			subjects: ['FT901', 'FT841', 'FT840', 'FT551', 'FT830']
		},
		'sem-12': {
			id: '12',
			subjects: ['FT902', 'FT900']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B0',
			obligatory: true
		},
		'FT100': {
			code: 'FT100',
			name: 'Introdução à Engenharia de Alimentos',
			ementa: 'Campos de atuação do engenheiro de alimentos. Responsabilidade profissional, ética e social do engenheiro formado na Universidade Pública. Compreensão da trajetória academica e Conhecimentos e habilidades necessárias. Contexto sócio-econômico-ambiental do sistema agroindustrial e do desenvolvimento tecnológico na produção de alimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9467B',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B99E',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Estrutura atômica, classificação periódica e propriedades dos elementos. Ligação química; estrutura e propriedades das substâncias. Noções de físico-química: termodinâmica, equilíbrios químicos e células eletroquímicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B046',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5846B9',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#B946B0',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#808072',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#58B946',
			obligatory: true
		},
		'QO427': {
			code: 'QO427',
			name: 'Química Orgânica I',
			ementa: '1) Reações entre ácidos e bases (Arrhenius, Brønsted e Lewis)2) Alcanos e a análise conformacional3) Estereoquímica4) Reações de adição, substituição e eliminação5) Propriedades e reatividade de nucleófilos (álcoois, aminas, enóis, enaminas, reagentes de Grignard, organolítiados e carbânions)6) Propriedades e reatividade de eletrófilos (aldeídos, cetonas, iminas, ácidos carboxílicos e derivados, haletos de alquila e carbocátions)7) Conjugação e aromaticidade (derivados do benzeno e heteroaromáticos)',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101'],
			color: '#B9B046',
			obligatory: true
		},
		'FT210': {
			code: 'FT210',
			name: 'Fundamentos do Processamento de Alimentos',
			ementa: 'Introdução ao processamento de alimentos com enfoque nos princípios de preservação, nos balanços de massa e mols envolvidos, na composição das matérias-primas e nos fluxos gerais de processo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*F_128', '*MA111'],
			color: '#B9467B',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211'],
			color: '#808072',
			obligatory: true
		},
		'QA218': {
			code: 'QA218',
			name: 'Química Analítica',
			ementa: 'Equilíbrio Químico. Equilíbrio ácido-base. Equilíbrio de solubilidade. Equilíbrio de complexação. Equilíbrio de óxido-redução. Análise qualitativa e quantitativa. Gravimetria. Volumetria. Expressão de resultados analíticos.',
			semestre: 1,
			vector: {T:2, P:1, L:3, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QG101'],
			color: '#B9B046',
			obligatory: true
		},
		'BM320': {
			code: 'BM320',
			name: 'Biologia (Microbiologia Básica)',
			ementa: 'Biologia Geral. Reações antígeno-anticorpo. Morfologia, sistemática e fisiologia bacteriana. Noções sobre fungos e vírus. Bacteriologia quantitativa e curva de crescimento de bactérias. Genética de microorganismos. Flora normal e mecanismos gerais de patogenicidade, cultivo e identificação de bactérias. Cadeia epidemiológica. Intoxicações alimentares. Anaeróbios. Exames bacteriológicos dos alimentos. Esterilização e desinfecção. Antibióticos e antibiograma.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97B46',
			obligatory: true
		},
		'CE138': {
			code: 'CE138',
			name: 'Estratégias de Empresas para Engenharia',
			ementa: 'Conceitos básicos de economia. Introdução à macroeconomia. Processo de globalização e de reestruturação produtiva. Estratégias empresariais: inovação, concorrência e estratégias competitivas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA211'],
			color: '#808072',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#936C87',
			obligatory: true
		},
		'FT310': {
			code: 'FT310',
			name: 'Termodinâmica dos Processos',
			ementa: 'Grandezas intensivas e extensivas. Equações de estado. Primeira e segunda leis da termodinâmica. Reversibilidade. Substâncias reais. Ferramentas matemáticas. Gás ideal. Substâncias reais. Equilíbrio. Estabilidade. Equilíbrio de fases. Fugacidade de compostos puros. Misturas. Grandezas parciais molares. Mistura ideal de gases. Mistura ideal. Fugacidade e coeficiente de atividade. Energia livre de Gibbs excedente. Equilíbrio: líquido/vapor, líquido/líquido, líquido/líquido/vapor.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['F_228', 'FT210', 'MA211'],
			color: '#A6598A',
			obligatory: true
		},
		'FT311': {
			code: 'FT311',
			name: 'Química de Alimentos',
			ementa: 'Estruturas e propriedades dos principais constituintes dos alimentos (Água, Carboidratos, Lipídeos, Proteínas, Vitaminas e Pigmentos). Transformações químicas e físico-químicas relevantes no processamento e estocagem de alimentos. Química do aroma e gosto.',
			semestre: 1,
			vector: {T:4, P:1, L:1, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO427'],
			color: '#B9B046',
			obligatory: true
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328'],
			color: '#936C87',
			obligatory: true
		},
		'FT410': {
			code: 'FT410',
			name: 'Fenômenos de Transporte I',
			ementa: 'Propriedades de transporte (viscosidade, condutividade térmica, difusividade de massa). Balanços diferenciais e integrais de quantidade de movimento e energia. Lei de Fourier: Condução em regime permanente. Lei de resfriamento de Newton: Convecção. Coeficiente global de transferência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT310', 'MA311'],
			color: '#936D7E',
			obligatory: true
		},
		'FT411': {
			code: 'FT411',
			name: 'Mecânica e Ciência de Materiais',
			ementa: 'Balanço de forças e momento. Tensão: normal e tangencial. Tensão admissível: fator de segurança. Deformação mecânica: axial e em cisalhamento. Problemas estaticamente indeterminados. Deformação térmica. Relação tensão-deformação: lei de Hooke e não-linearidade. Razão de Poisson, tensão residual e fadiga. Propriedades mecânicas de sólidos: tração, compressão, punção, flexão e torção. Lei de Newton de viscosidade. Fluidos não-newtonianos. Tensão-taxa de deformação: classificação de fluidos. Viscoelasticidade e número de Deborah. Reologia a baixas deformações: ensaios transientes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_129', 'F_228', 'FT210'],
			color: '#9946A1',
			obligatory: true
		},
		'FT412': {
			code: 'FT412',
			name: 'Bioquímica Básica',
			ementa: 'Conceitos básicos sobre enzimas. Cofatores e sua importância no metabolismo. Metabolismo de carboidratos, aminoácidos e triacilglicerois.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BM320', 'FT311'],
			color: '#B99646',
			obligatory: true
		},
		'FT430': {
			code: 'FT430',
			name: 'Microbiologia de Alimentos',
			ementa: 'Fatores intrínsecos e extrínsecos que controlam o desenvolvimento microbiano. Teoria dos obstáculos. Influência das operações unitárias no crescimento microbiano. Micro-organismos patogênicos, deteriorantes e indicadores. Microbiologia de água. Plano de amostragem e padrões microbiológicos de alimentos. Métodos rápidos de análise de micro-organismos em alimentos. Importância individual das etapas de processamento para a segurança e qualidade microbiológica dos alimentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM320'],
			color: '#B97B46',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#729363',
			obligatory: true
		},
		'FT510': {
			code: 'FT510',
			name: 'Fenômenos de Transporte II',
			ementa: 'Convecção em escoamento externo e interno. Radiação. Condução em regime transiente com e sem resistência interna. Difusão e convecção de massa em regime estacionário. Lei de Fick. Modelos de difusividade. Difusão de massa em regime transiente com e sem resistência externa. Teoria da película. Coeficientes de transferência de massa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT410'],
			color: '#936D7E',
			obligatory: true
		},
		'FT511': {
			code: 'FT511',
			name: 'Transformações Enzimáticas em Alimentos',
			ementa: 'Princípios de enzimologia. Propriedades, mecanismo de ação e aplicação das principais enzimas relacionadas ao processamento de alimentos. Mercado de enzimas. Produção, purificação e imobilização de enzimas.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT412'],
			color: '#B99646',
			obligatory: true
		},
		'FT512': {
			code: 'FT512',
			name: 'Nutrição e Qualidade Nutricional dos Alimentos',
			ementa: 'Digestão, absorção, transporte, metabolismo celular e qualidade nutricional de nutrientes e substâncias bioativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT412'],
			color: '#B99646',
			obligatory: true
		},
		'FT530': {
			code: 'FT530',
			name: 'Métodos de Análise Físico-Química de Alimentos',
			ementa: 'Métodos de análise para controle de qualidade físico-químico de alimentos. Fatores relevantes na escolha de um método de análise. Controle de qualidade analítica. Desenvolvimento e validação de métodos de análise para alimentos. Técnicas básicas de amostragem e de preparo de amostra. Métodos para determinação de macronutrientes, micronutrientes, compostos bioativos e tóxicos e parâmetros de qualidade. Análise de composição centesimal (umidade, cinzas, proteínas, lipídeos, açúcares, fibra alimentar); acidez; pH, densidade e textura. Métodos Instrumentais: Espectrofotometria na região do ultravioleta e do visível. Espectroscopia de Fluorescência Molecular. Espectroscopia no infravermelho próximo e médio. Espectrometria de Massas. Espectrometria atômica (absorção e emissão). Introdução à cromatografia. Métodos cromatográficos clássicos. Cromatografia Líquida de Alta Eficiência. Cromatografia gasosa. Aplicações e análises de alimentos. Tratamento qualitativo e quantitativo dos dados.',
			semestre: 1,
			vector: {T:4, P:1, L:1, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['FT311'],
			color: '#B9B046',
			obligatory: true
		},
		'FT540': {
			code: 'FT540',
			name: 'Alimentos e Sociedade',
			ementa: 'Aspectos culturais, econômicos, tecnológicos, políticos, legais e ambientais que impactam historicamente a relação Alimento-Sociedade: Hábitos Alimentares; Sistema Alimentar e Cadeias Alimentares; Alimento e Saúde; Produção e Consumo de Alimentos; Sustentabilidade; Segurança Alimentar.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FT100'],
			color: '#B9467B',
			obligatory: true
		},
		'FT620': {
			code: 'FT620',
			name: 'Processos com Aplicação de Calor',
			ementa: 'Processos térmicos na Indústria de Alimentos. Determinação da resistência e inativação térmica de micro-organismos e enzimas. Tempo de tratamento térmico. Processos com aplicação indireta de calor: Trocadores de calor, evaporadores, tanques agitados. Processos com aplicação direta de calor. Processos térmicos não convencionais.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['FT311', 'FT430', 'FT510'],
			color: '#AC8859',
			obligatory: true
		},
		'FT621': {
			code: 'FT621',
			name: 'Processos Mecânicos',
			ementa: 'Dimensionamento de tubulações e acessórios, equipamentos para transporte de fluidos compressíveis e incompressíveis. Sistemas de agitação. Dimensionamento de equipamentos para redução de tamanho, separação mecânica e transporte de sólidos particulados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT410', 'FT411'],
			color: '#965A90',
			obligatory: true
		},
		'FT622': {
			code: 'FT622',
			name: 'Processamento de Cereais, Raízes e Tubérculos',
			ementa: 'Cadeia produtiva de cereais, raízes e tubérculos. Processamento de grãos, raízes e tubérculos até farinhas. Moagem do trigo e do milho. Beneficiamento de arroz. Produção de amidos. Processamento de produtos de panificação com e sem glúten. Processamento de alimentos por extrusão: massas alimentícias e cereais matinais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT412'],
			color: '#B9A346',
			obligatory: true
		},
		'FT630': {
			code: 'FT630',
			name: 'Toxicologia de Alimentos',
			ementa: 'Histórico e importância da Toxicologia de Alimentos. Fundamentos de Toxicologia e delineamento de estudos de toxicidade. Carcinogênese química. Compostos tóxicos naturais de origem vegetal, animal e fúngica. Metais tóxicos, contaminantes ambientais e agrotóxicos. Aditivos alimentares e contaminantes formados durante o processamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FT512'],
			color: '#B99646',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#B94646',
			obligatory: true
		},
		'FT531': {
			code: 'FT531',
			name: 'Análise Sensorial de Alimentos',
			ementa: 'Fisiologia dos sentidos. Estimulação, sensação e percepção. Boas práticas de planejamento, aplicação e análise estatística de dados sensoriais. Testes discriminativos. Testes com escalas. Perfil sensorial descritivo. Métodos afetivos. Estudos com consumidores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'ME414'],
			color: '#B97B46',
			obligatory: true
		},
		'FT720': {
			code: 'FT720',
			name: 'Processos com Remoção de Calor',
			ementa: 'Fundamentos de resfriamento e congelamento: tempo de processo. Dimensionamento de sistemas de refrigeração e congelamento de alimentos. Armazenamento e transporte: carga térmica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT430', 'FT510'],
			color: '#AC8859',
			obligatory: true
		},
		'FT721': {
			code: 'FT721',
			name: 'Processos Biotecnológicos',
			ementa: 'Obtenção, melhoramento e uso de micro-organismos em bioprocessos industriais. Rotas metabólicas envolvidas em bioprocessos industriais. Micro-organismos e meios de cultivo industriais. Cinética de crescimento microbiano. Classificação dos bioprocessos quanto ao crescimento microbiano e produção de metabólitos. Aspectos tecnológicos e classificação de biorreatores. Formas de condução de um processo fermentativo. Biorreatores enzimáticos. Agitação, Aeração e Respiração Microbiana. Recuperação e purificação de bioprodutos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT310', 'FT411', 'FT430', 'FT510', 'FT511'],
			color: '#A76C71',
			obligatory: true
		},
		'FT722': {
			code: 'FT722',
			name: 'Processamento de Óleos e Gorduras',
			ementa: 'Introdução à indústria de óleos e gorduras. Preparo de matérias-primas oleaginosas para extração. Extração e degomagem de óleos vegetais. Refino químico e físico. Processos de modificação lipídica. Gorduras especiais: formulação e aplicação. Produtos de base lipídica. Processo de fritura.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT412', 'FT620'],
			color: '#B59A4C',
			obligatory: true
		},
		'FT723': {
			code: 'FT723',
			name: 'Processamento de Leite e Ovos',
			ementa: 'Cadeia produtiva do leite no Brasil. Obtenção e composição do leite. Tratamento térmico do leite: processamento de leite fluido e efeito do calor sobre os constituintes do leite. Produtos lácteos processados: leites fermentados, queijos, manteiga e gelados. Cadeia produtiva de ovos no Brasil. Obtenção, composição e tratamento térmico para produção de ovo líquido.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT412', 'FT620'],
			color: '#B59A4C',
			obligatory: true
		},
		'FT550': {
			code: 'FT550',
			name: 'Atividades de Extensão Científica',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de extensão científica.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:7, D:0, HS:7, SL:0, C:7},
			requisitos: ['AA440'],
			color: '#4669B9',
			obligatory: true
		},
		'FT640': {
			code: 'FT640',
			name: 'Embalagem e Estabilidade de Alimentos',
			ementa: 'Histórico e funções das embalagens, plásticos, vidros, latas e celulósicas. Sistemas, máquinas e equipamentos de acondicionamento. Controle e garantia da qualidade; logística, transporte e distribuição. Estabilidade de alimentos: estudos de vida útil prolongada e testes acelerados e cálculo de vida útil; interação alimento-embalagem; embalagens ativas, inteligentes e biodegradáveis; legislação; inovação e desenvolvimento de embalagens; reciclagem e reutilização de embalagens e ciclo de vida de embalagens.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT411', 'FT412', 'FT430'],
			color: '#B1825D',
			obligatory: true
		},
		'FT820': {
			code: 'FT820',
			name: 'Processos de Transferência de Massa e Redução de Atividade de Água',
			ementa: 'Operações de Transferência de massa batelada e contínuo. Absorção/esgotamento. Destilação. Extração líquido-líquido e sólido-líquido. Membranas.Cristalização.Secagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['FT311', 'FT510'],
			color: '#A68F62',
			obligatory: true
		},
		'FT821': {
			code: 'FT821',
			name: 'Processamento de Frutas, Hortaliças e Leguminosas',
			ementa: 'Cadeia produtiva, pós-colheita e processamento de frutas, hortaliças e leguminosas. Pós-colheita e Processamento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT412', 'FT620'],
			color: '#B59A4C',
			obligatory: true
		},
		'FT822': {
			code: 'FT822',
			name: 'Processamento de Carnes',
			ementa: 'Aspectos básicos da produção animal. Bem-estar animal e rastreabilidade. Requisitos sanitários e processo de abate das espécies de açougue (bovinos, suínos, aves e pescado). Estrutura e composição da carne. Atributos de qualidade e conservação de carnes e produtos cárneos. Funções de ingredientes e aditivos em produtos cárneos processados. Processamento de produtos cárneos emulsionados, conservados por salga, fermentados e reestruturados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FT311', 'FT412', 'FT620'],
			color: '#B59A4C',
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
		'FT552': {
			code: 'FT552',
			name: 'Atividades de Extensão Comunitária',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de extensão comunitária.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:8, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA440'],
			color: '#46B969',
			obligatory: true
		},
		'FT740': {
			code: 'FT740',
			name: 'Instalações Industriais',
			ementa: 'Materiais utilizados em instalações industriais alimentícias. Elementos da instalação e distribuição de utilidades industriais. Fundamentos de higienização, métodos e fatores que influenciam sua eficiência.Agentes de limpeza e sanitização. Desenho sanitário de equipamentos e instalação. Desenho técnico aplicado ao projeto de instalações alimentícias, seus equipamentos, tubulações e lay-out. Elaboração de um projeto de instalação industrial para processamento de alimentos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['FT411', 'FT430', 'FT621', 'FT622'],
			color: '#A8706F',
			obligatory: true
		},
		'FT741': {
			code: 'FT741',
			name: 'Instrumentação e Controle de Processos',
			ementa: 'Principais sensores e transmissores industriais. Sensores especiais utilizados na indústria de alimentos. Atuadores industriais. Sistemas de transmissão. Identificação e simbologia dos instrumentos e sistemas de controle. Estratégias de controle de processos. Tipos de controladores. Ações básicas de controle.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ET016', 'F_328', 'MS211'],
			color: '#88797B',
			obligatory: true
		},
		'FT742': {
			code: 'FT742',
			name: 'Formulação e Avaliação de Projetos',
			ementa: 'Elementos básicos de projetos e perfis industriais. Avaliação de mercado e projeção de tendências. Quantificação do volume de produção. Estudo e escolha do processo. Quantificação do processamento: requisitos de insumos, energia, etc. Produtividade. Estudo da escala e tamanho. Estudo da localização. Avaliação Econômica de Projetos. Custos. Depreciação. Investimento Fixo e Capital de Giro. Composição de custos de um produto alimentício. Análise de rentabilidade de projetos: rentabilidade sobre o patrimônio. Período de recuperação do investimento. Taxa interna de retorno. Valor atual líquido.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE138', 'FT540', 'FT620', 'FT622'],
			color: '#A87C63',
			obligatory: true
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'FT551': {
			code: 'FT551',
			name: 'Atividades de Extensão Industrial',
			ementa: 'Atividades acadêmico-científicas: participação do aluno em atividades de extensão industrial.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:11, D:0, HS:11, SL:0, C:11},
			requisitos: ['AA440'],
			color: '#8DB946',
			obligatory: true
		},
		'FT830': {
			code: 'FT830',
			name: 'Gestão da Segurança e da Qualidade de Alimentos',
			ementa: 'Introdução aos sistemas de gestão e qualidade. Assuntos regulatórios e normas de segurança do trabalho. Estudos Epidemiológicos de doenças veiculadas por alimentos e sua importância para a gestão de risco na cadeia produtiva de alimentos. Sistemas de gestão da segurança dos alimentos: Boas práticas de fabricação. Análise de Perigos e Pontos críticos de controle. Análise de risco. Princípios da Qualidade. Ferramentas da Qualidade. Gestão da Qualidade. Normas da Qualidade e certificação. Fraude, Autenticidade e Rastreabilidade. Normas de segurança de trabalho.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['FT430', 'FT531', 'FT622', 'FT630', 'FT723', 'FT741'],
			color: '#B08B50',
			obligatory: true
		},
		'FT840': {
			code: 'FT840',
			name: 'Desenvolvimento de Produtos e Processos',
			ementa: 'Desenvolvimento de produtos no setor de alimentos: Inovação, Marketing, Consumidor, Mercado e Ciclo de vida. Elaboração de projeto de desenvolvimento de produtos incluindo abordagem prática.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['FT531', 'FT540', 'FT622', 'FT722', 'FT742'],
			color: '#B57F58',
			obligatory: true
		},
		'FT841': {
			code: 'FT841',
			name: 'Projeto Industrial',
			ementa: 'Elaboração de um anteprojeto de uma indústria de alimentos ou correlata. Identificação dos objetivos e mercados do empreendimento. Definição do Plano de Produção e das estratégias de crescimento. Decisão da localização. Especificação de processos, sistema de qualidade, insumos industriais, equipamentos, instalações e edificações. Elaboração do arranjo físico. Caracterização e quantificação do investimento fixo. Cálculo dos custos de produção, capital de giro e preço de venda. Determinação dos indicadores de rentabilidade e risco. Estudo preliminar de viabilidade econômica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['FT742'],
			color: '#A87C63',
			obligatory: true
		},
		'FT901': {
			code: 'FT901',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Trabalho individual e orientado por docente da FEA, constando da elaboração de proposta de trabalho, respectivo plano de atividades e sugestão de bibliografia, para o desenvolvimento teórico sobre um tema relevante à Engenharia de Alimentos, a ser realizado a partir de pesquisa bibliográfica, segundo normas definidas pela Comissão de Graduação da FEA.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['AA475'],
			color: '#8D46B9',
			obligatory: true
		},
		'FT900': {
			code: 'FT900',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado em indústrias e empresas do setor de alimentos ou em outros órgãos credenciados pela FEA.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:22, D:0, HS:24, SL:2, C:24},
			requisitos: ['AA490'],
			color: '#469EB9',
			obligatory: true
		},
		'FT902': {
			code: 'FT902',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Trabalho individual e orientado por docente da FEA, constando da execução da proposta de trabalho e respectivo plano de atividades aprovados na disciplina pré-requisito FT901.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:1, C:2},
			requisitos: ['FT901'],
			color: '#8D46B9',
			obligatory: true
		}
	}
};

export default catalogue;
