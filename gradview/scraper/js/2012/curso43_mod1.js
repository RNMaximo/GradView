const catalogue = {
	totalCredits: 255,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['F_128', 'MA111', 'MA141', 'QG101', 'TA109']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_228', 'MA211', 'MC102', 'QO427']
		},
		'sem-3': {
			id: '3',
			subjects: ['MA311', 'QA213', 'QF331', 'TA221']
		},
		'sem-4': {
			id: '4',
			subjects: ['BM320', 'TA322', 'TA331', 'TA332', 'TA411']
		},
		'sem-5': {
			id: '5',
			subjects: ['TA421', 'TA431', 'TA513', 'TA514', 'TA516']
		},
		'sem-6': {
			id: '6',
			subjects: ['TA521', 'TA534', 'TA610', 'TA615', 'TA620']
		},
		'sem-7': {
			id: '7',
			subjects: ['ME414', 'MS211', 'TA622', 'TA631', 'TA716', 'TA722']
		},
		'sem-8': {
			id: '8',
			subjects: ['CE138', 'TA611', 'TA619', 'TA726', 'TA731', 'TA824', 'TA826']
		},
		'sem-9': {
			id: '9',
			subjects: ['TA541', 'TA542', 'TA623', 'TA831', 'TA912', 'TA920', 'TA927']
		},
		'sem-10': {
			id: '10',
			subjects: ['F_328', 'TA035', 'TA641', 'TA734']
		},
		'sem-11': {
			id: '11',
			subjects: ['ET016', 'TA030', 'TA725', 'TA729', 'TA736', 'TA741', 'TA832', 'TA836']
		},
		'sem-12': {
			id: '12',
			subjects: ['TA009', 'TA017', 'TA021', 'TA046', 'TA737', 'TA909', 'TA932']
		}
	},

	eletivas: {
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Noções de físico-química: termoquímica, equilíbrios químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9D940',
			obligatory: true
		},
		'TA109': {
			code: 'TA109',
			name: 'Introdução ao Curso de Engenharia de Alimentos',
			ementa: 'Atribuições gerais profissionais e regulamentação das atividades do engenheiro. Conhecimentos e habilidades necessárias. Responsabilidade profissional e social do engenheiro formado na Universidade Pública. Campos de atuação, atualidade e tendências. Contexto sócio-econômico-ambiental do sistema agroindustrial do Brasil; sistemas de gestão da qualidade; pesquisa científica e desenvolvimento tecnológico na produção de alimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8C40D9',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#40D940',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#8D8DB3',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'QO427': {
			code: 'QO427',
			name: 'Química Orgânica I',
			ementa: 'Orbitais híbridos. Hidrocarbonetos. Petróleo. Benzeno e derivados. Haletos orgânicos. Álcoois. Éteres. Ácidos carboxílicos e derivados. Aldeidos e cetonas. Aminas. Compostos heterocílicos. Polímeros. Noções de Estereoquímica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101'],
			color: '#D9D940',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#8D8DB3',
			obligatory: true
		},
		'QA213': {
			code: 'QA213',
			name: 'Química II (Engenharia de Alimentos)',
			ementa: 'Introdução à análise qualitativa. Fenômenos de equilíbrio. Técnicas gerais de análise qualitativa. Separação e classificação de cátions e ânions. Introdução à análise quantitativa. Amostragem. Tratamento dos dados analíticos. Técnicas gerais de análise quantitativa. Gravimetria. Volumetria.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QG101'],
			color: '#D9D940',
			obligatory: true
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gases, termodinâmica, equilíbrios físicos e químicos, cinética química e soluções.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA221': {
			code: 'TA221',
			name: 'Características e Pré-Processamento de Grãos',
			ementa: 'Importância econômica, sistema de comercialização, classificação, composição química, propriedades físicas, estocagem e possibilidades de aproveitamento industrial das matérias-primas, grãos oleaginosos e cereais. Recepção, classificação, limpeza, secagem, e outras operações relativas ao pré-processamento de grãos e cereais. Beneficiamento, extração e degomagem de óleos. Tecnologia da produção de farinha de trigo. Moagem industrial de milho. Produção de amido de milho. Beneficiamento de arroz.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D98C40',
			obligatory: true
		},
		'BM320': {
			code: 'BM320',
			name: 'Biologia (Microbiologia Básica)',
			ementa: 'Biologia Geral. Reações antígeno-anticorpo. Morfologia, sistemática e fisiologia bacteriana. Noções sobre fungos e vírus. Bacteriologia quantitativa e curva de crescimento de bactérias. Genética de microorganismos. Flora normal e mecanismos gerais de patogenicidade, cultivo e identificação de bactérias. Cadeia epidemiológica. Intoxicações alimentares. Anaeróbios. Exames bacteriológicos dos alimentos. Esterilização e desinfecção. Antibióticos e antibiograma.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D9',
			obligatory: true
		},
		'TA322': {
			code: 'TA322',
			name: 'Características e Pré-Processamento de Frutas, Hortaliças, Café, Cacau e Cana',
			ementa: 'Importância econômica, sistemas de comercialização, classificação, propriedades físicas e químicas, estabilidade, maturação, colheita, estocagem, possibilidades de aproveitamento e alterações de frutas e hortaliças, café, cacau e cana-de-açúcar. Operações de pré-processamento, limpeza, operações térmicas, princípios dos principais processos de conservação. Diferenças nas vias de preparo de grãos de café e de matérias-primas semi-manufaturadas de cacau: nibs, torrefação, líquor, manteiga e pó de cacau. Extração e clarificação do caldo de cana para concentração e obtenção de açúcar.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'TA331': {
			code: 'TA331',
			name: 'Termodinâmica',
			ementa: 'Grandezas intensivas e extensivas. Equações de estado. Primeira e segunda leis da termodinâmica. Reversibilidade. Substâncias reais. Ferramentas matemáticas. Gás ideal. Substâncias reais. Equilíbrio. Estabilidade. Equilíbrio de fases. Fugacidade de compostos puros. Misturas. Grandezas parciais molares. Mistura ideal de gases. Mistura ideal. Fugacidade e coeficiente de atividade. Energia livre de Gibbs excedente. Equilíbrio: líquido/vapor, líquido/líquido, líquido/líquido/vapor.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF331'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA332': {
			code: 'TA332',
			name: 'Fundamentos de Cálculos em Processo',
			ementa: 'Grandezas fundamentais. Sistemas de unidade. Variáveis de processo. Propriedades Físicas. Conceitos de Pressão absoluta, manométrica e vácuo. Balanços de massa e energia em processos contínuos ou em batelada com ou sem reação química. Técnicas de resolução envolvendo componentes de amarração, reciclo, by-pass e purga. Pressão de vapor, equilíbrio de fases. Exemplos de balanços envolvendo misturas, solubilidade e cristalização, combustão, fermentação, destilação, evaporação, condensação, extração, umidificação, secagem e torres de resfriamento. Psicrometria e Processamento de ar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF331'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA411': {
			code: 'TA411',
			name: 'Química de Alimentos I',
			ementa: 'Propriedades da água, atividade de água e seus efeitos na estabilidade de alimentos. Estruturas e propriedades de aminoácidos e proteínas. Desnaturação e propriedades funcionais de proteínas. Estruturas, propriedades e funções de carboidratos em alimentos. Reações e modificações químicas de carboidratos. Transformações e interações de proteínas e carboidratos durante processamento e estocagem de alimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QA213', 'QO427'],
			color: '#D9D940',
			obligatory: true
		},
		'TA421': {
			code: 'TA421',
			name: 'Características e Pré-Processamento de Leite e Ovos',
			ementa: 'Importância econômica e sistemas de produção da cadeia de leite e ovos. Estrutura, fisiologia e valor nutricional. Composição e físico-química dos constituintes. Microbiologia de leite e ovos. Operações de pré-processamento, pasteurização e controle de qualidade de leite e ovos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D98C',
			obligatory: true
		},
		'TA431': {
			code: 'TA431',
			name: 'Mecânica dos Materiais',
			ementa: 'Balanço de forças e momento. Tensão: normal e tangencial. Tensão admissível: fator de segurança. Deformação mecânica: axial e em cisalhamento. Problemas estaticamente indeterminados. Deformação térmica. Relação tensão-deformação: lei de Hooke e não-linearidade. Razão de Poisson, tensão residual e fadiga. Propriedades mecânicas de sólidos: tração, compressão, punção, flexão e torção. Lei de Newton de viscosidade. Fluidos não-newtonianos. Tensão-taxa de deformação: classificação de fluidos. Viscoelasticidade e número de Deborah. Reologia a baixas deformações: ensaios transientes e oscilatórios.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['F_128', 'MA311'],
			color: '#67B37A',
			obligatory: true
		},
		'TA513': {
			code: 'TA513',
			name: 'Análise de Alimentos',
			ementa: 'Importânica da análise de alimentos para o engenheiro de alimentos. Técnicas e importância da amostragem. Preparo e preservação de amostras. Fatores relevantes na escolha de um método de análise. Desenvolvimento e validação de métodos de análise para alimentos. Programas de controle de qualidade e segurança de qualidade analítica. Tratamento qualitativo e quantitativo dos dados. Métodos para determinação de macronutrientes: água, sólidos totais, cinzas, proteínas, lipídeos, açúcares e fibras. Aplicações, vantagens e desvantagens das técnicas analíticas. Rotulagem nutricional de alimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA411'],
			color: '#D9D940',
			obligatory: true
		},
		'TA514': {
			code: 'TA514',
			name: 'Bioquímica de Alimentos',
			ementa: 'Avaliação da capacidade tamponante e importânica do pH em organismos vivos e alimentos. Composição e importância de ácidos nucleicos e derivados no metabolismo e em alimentos. Obtenção e detecção de alimentos transgênicos. Enzimas, cinética enzimática, fatores que interferem na ação enzimática, características e funções. Metabolismo de Carboidratos: digestão e absorção carboidratos, Via Glicolítica, Ciclo de Krebs e Fosforilação oxidativa, Via Pentose Fosfato, Degradação e Síntese de glicogênio.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA411'],
			color: '#D9D940',
			obligatory: true
		},
		'TA516': {
			code: 'TA516',
			name: 'Química de Alimentos II',
			ementa: 'Estruturas, propriedades e funções de ácidos graxos e lipídeos. Reações e modificações químicas de lipídeos durante o processamento e estocagem de alimentos. Estruturas e transformações químicas de vitaminas e suas consequências. Estruturas, propriedades e alterações de corantes naturais. Química do aroma e do sabor.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TA411'],
			color: '#D9D940',
			obligatory: true
		},
		'TA521': {
			code: 'TA521',
			name: 'Características e Pré-Processamento de Carnes',
			ementa: 'Introdução à produção animal no Brasil. Estatísticas de produção e exportação. Requisitos sanitários. Descrição dos abatedouros frigoríficos e processos de abate. Bem-estar animal e rastreabilidade. Estrutura da carne. Rigor mortis e cold shortening. Pré-abate e abate de frangos. Atributos de qualidade de carnes. Conservação e qualidade de pescados.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'TA534': {
			code: 'TA534',
			name: 'Fenômenos de Transporte',
			ementa: 'Sistemas e análise dimensional. Princípios de semelhança. Propriedades de transporte (viscosidade, condutividade térmica, difusividade de massa). Balanços diferenciais e integrais de quantidade de movimento, energia e de massa. Leis de Newton da viscosidade e de resfriamento. Leis de Fourier e de Fick. Condução, convecção e radiação. Condução e difusão em regime permanente e transiente. Convecção térmica e de massa. Trocadores de calor.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TA331', 'TA332'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA610': {
			code: 'TA610',
			name: 'Transformações Bioquímicas em Alimentos',
			ementa: 'Esta disciplina se dedica a estudar as transformações bioquímicas em alimentos de origem vegetal e animal. Inicia-se com as alterações bioquímicas \"post mortem\" de animais e peixes e suas implicações no processamento e qualidade final do alimento. Transformações Bioquímicas pós-colheita de frutas e hortaliças são estudadas descrevendo os metabolismos e transformações bioquímicas também no armazenamento. Enzimas importantes no processamento de alimentos são estudadas com relação a modos de ação, inibição ou inativação e aplicações nos processamentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA514'],
			color: '#D9D940',
			obligatory: true
		},
		'TA615': {
			code: 'TA615',
			name: 'Microbiologia de Alimentos',
			ementa: 'Crescimento de microrganismos: curvas e medidas. Contagem direta e indireta. Culturas contínuas. Técnicas microbiológicas aplicadas a microbiologia de alimentos. Metabolismo dos microrganismos de interesse na indústria de alimentos. Fungos filamentosos e leveduras. Micotoxinas. Bactérias lácticas e acéticas. Microrganismos psicrófilos e psicrotróficos associados a deterioração de alimentos refrigerados e congelados. Enterobactérias. Microbiologia da água. Estafilococos e micrococos. Bactérias esporogênicas. Listeria, Campilobacter, Yersinea. Microrganismos emergentes. Toxi-infecções alimentares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM320', 'TA514'],
			color: '#D98D8D',
			obligatory: true
		},
		'TA620': {
			code: 'TA620',
			name: 'Processos Tecnológicos I',
			ementa: 'Processo de fabricação de vegetais fermentados e acidificados. Fermentação acética (vinagre). Produtos orientais fermentados à base de soja. Vinhos: cultivo de uvas, preparação do mosto, fermentação, estabilização, envasamento e controle de qualidade. Cerveja: variedades de cevada, malteação, lúpulo, preparação do mosto, adjuntos, fermentação, maturação, filtração e estabilização, envasamento e controle de qualidade. Produção de refrescos e refrigerantes: preparação de concentrados e xaropes, carbonatação, envasamento e controle de qualidade de refrigerantes.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BM320', 'TA322', 'TA411', 'TA516'],
			color: '#B38D8D',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D9D9',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#8CA68C',
			obligatory: true
		},
		'TA622': {
			code: 'TA622',
			name: 'Processos Tecnológicos II',
			ementa: 'Conservação de alimentos pela redução da atividade de água. Caracterização físico-química de alimentos de baixa atividade de água e determinação da atividade de água. Frutas conservadas pela adição de açúcar para a redução da atividade de água: geleias, frutas açucaradas, doces em massa e balas. Desidratação de frutas e hortaliças. Resfriamento e congelamentos de frutas e hortaliças. Produtos de panificação (pães, bolos e biscoitos) e massas alimentícias (convencionais e instantâneas). Processos, equipamentos, ingredientes, aditivos e qualidade dos produtos finais.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BM320', 'TA221', 'TA322', 'TA411', 'TA516'],
			color: '#BA8C7D',
			obligatory: true
		},
		'TA631': {
			code: 'TA631',
			name: 'Operações Unitárias I',
			ementa: 'Escoamento de fluidos newtonianos e não-newtonianos: sistemas isotérmicos e não-isotérmicos. Energia de atrito de parede e de forma. Tubulações, válvulas e acessórios. Dimensionamento de sistemas de bombeamento, ventilação e agitação. Sistemas particulados: esfericidade, porosidade e velocidade terminal. Distribuição de tamanho de partículas. Escoamento em meios porosos e fluidização. Transporte hidráulico e pneumático. Operações de separação mecânica: peneiragem, filtração, sedimentação, centrifugação, ciclones e hidrociclones. Operações de redução de tamanho: moagem e homogeneização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA431', 'TA534'],
			color: '#54C6AA',
			obligatory: true
		},
		'TA716': {
			code: 'TA716',
			name: 'Microbiologia de Processos',
			ementa: 'Controle do crescimento microbiano em alimentos. Fatores intrínsecos e extrínsecos. Sinergismo e antagonismo. Teoria dos obstáculos. Uso de agentes antimicrobianos em alimentos. Aplicação de sanitizantes na indústria de alimentos. Irradiação de alimentos: tipos e efeitos sobre os microrganismos e alimentos e uso na conservação de alimentos. Técnicas de amostragem e metodologia para avaliar fontes de contaminação em plantas de processamento de alimentos. Padrões microbiológicos para alimentos. Efeito de altas temperaturas nos microrganismos. Resistência de patógenos e deterioradores.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA615'],
			color: '#D98D8D',
			obligatory: true
		},
		'TA722': {
			code: 'TA722',
			name: 'Processos Tecnológicos III',
			ementa: 'Características e uso industrial de culturas lácticas. Processamento de iogurte e leites fermentados. Princípios de fabricação e variedades de queijos. Coagulação ácida e enzimática. Maturação e propriedades de queijos. Processamento de pescados salgados fermentados.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BM320', 'TA411', 'TA421', 'TA516', 'TA521'],
			color: '#BA9C6E',
			obligatory: true
		},
		'CE138': {
			code: 'CE138',
			name: 'Estratégias de Empresas para Engenharia',
			ementa: 'Conceitos básicos de economia. Introdução à macroeconomia. Processo de globalização e de reestruturação produtiva. Estratégias empresariais: inovação, concorrência e estratégias competitivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: '#8D8DB3',
			obligatory: true
		},
		'TA611': {
			code: 'TA611',
			name: 'Toxicologia de Alimentos',
			ementa: 'Fundamentos de toxicologia. Delineamento de estudos de toxicidade. Carcinogênese química. Compostos tóxicos naturais de origem vegetal e animal. Aditivos alimentares, pesticidas, metais tóxicos e micotoxinas em alimentos. Contaminantes ambientais e compostos tóxicos formados durante o processamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA411', 'TA516', 'TA514'],
			color: '#D9D940',
			obligatory: true
		},
		'TA619': {
			code: 'TA619',
			name: 'Análise Instrumental de Alimentos',
			ementa: 'Importância da análise instrumental de alimentos. Avaliação de métodos analíticos. Controle de qualidade analítica. Radiação eletromagnética. Espectrofotometria na região do ultravioleta e do visível. Fluorescência. Análises qualitativas e quantitativas. Aplicações em alimentos. Introdução à cromatografia. Cromatografia planar. Cromatografia líquida clássica e instrumental. Cromatografia gasosa. Procedimentos e aplicações em análise de alimentos. Princípios e aplicações em análise de alimentos da espectroscopia no infravermelho próximo e médio e da espectrometria atômica (absorção e emissão).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA411', 'TA513'],
			color: '#D9D940',
			obligatory: true
		},
		'TA726': {
			code: 'TA726',
			name: 'Segurança dos Alimentos',
			ementa: 'Ferramentas de controle higiênico-sanitário no processamento de alimentos: legislação aplicada ao registro e controle de alimentos. Boas Práticas de Manufatura (BPM), Procedimentos Padrão de Higiene Operacional (PPHO), sistema de Análise de Perigos e Pontos Críticos de Controle (APPCC) e fundamentos de limpeza e sanitização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA615'],
			color: '#D98D8D',
			obligatory: true
		},
		'TA731': {
			code: 'TA731',
			name: 'Operações Unitárias II',
			ementa: 'Propriedades térmicas dos alimentos. Transporte de calor por radiação. Trocadores de calor. Transporte de calor na mudança de fase. Concentração de alimentos por evaporação. Refrigeração e congelamento de alimentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA534'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA824': {
			code: 'TA824',
			name: 'Processos Tecnológicos IV',
			ementa: 'Processos tecnológicos utilizados na elaboração de produtos cárneos emulsionados, conservados por salva, fermentados e reestruturados de carne bovina, suína e de aves. Funções de ingredientes e aditivos em produtos cárneos processados. Fatores que influenciam a estabilidade, qualidade e segurança de produtos cárneos.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BM320', 'TA221', 'TA411', 'TA516', 'TA521'],
			color: '#D98C5F',
			obligatory: true
		},
		'TA826': {
			code: 'TA826',
			name: 'Processos Tecnológicos V',
			ementa: 'Físico-química do glóbulo de gordura do leite. Instabilidade de emulsão. Fabricação de manteiga, cremes de leite pasteurizado e esterilizado. Creme chantilly. Gelados comestíveis. Função dos ingredientes e processamento. Tecnologia do processamento de produtos de base lipídica de origem vegetal: produção de óleos, gorduras comestíveis e margarinas. Refino, clarificação, desodorização, hidrogenação, fracionamento e interesterificação de óleos e gorduras. Formulação de margarinas. Processamento de chocolate.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BM320', 'TA221', 'TA322', 'TA411', 'TA421', 'TA516'],
			color: '#A69980',
			obligatory: true
		},
		'TA541': {
			code: 'TA541',
			name: 'Análise Sensorial de Alimentos',
			ementa: 'O ambiente dos testes sensoriais e outros fatores que influenciam a avaliação sensorial. Métodos Sensoriais: a) métodos discriminativos, b) métodos descritivos, c) métodos afetivos. Análise estatística univariada (ANOVA). Seleção de provadores. Correlação entre medidas sensoriais e instrumentais. Princípios básicos sobre psicofísica: lei de Stevens e Threshold.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA542': {
			code: 'TA542',
			name: 'Economia Agroalimentar',
			ementa: 'Conceitos básicos de economia aplicados ao setor agroalimentar. Análise da oferta e procura. Análise do consumidor e consumo de alimentos. Situação alimentar e nutricional da população. Noções de desenvolvimento. Conceito e coordenação de sistemas agroalimentares. Caracterização do sistema agroalimentar no Brasil. Tipos e avaliação de políticas de segurança alimentar e nutricional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE138'],
			color: '#8D8DB3',
			obligatory: true
		},
		'TA623': {
			code: 'TA623',
			name: 'Embalagem de Alimentos',
			ementa: 'História e função das embalagens na indústria de alimentos. Embalagens plásticas, metálicas, celulósicas e de vidro. Matérias-primas, processos de conversão e transformação, propriedades físicas, químicas e mecânicas. Tampas e processos de fechamento. Sistemas de embalagens. Máquinas e equipamentos de acondicionamento. Controle de qualidade. Distribuição, logística, planejamento e legislação. Reciclagem. Estabilidade de alimentos: mecanismos de transformações físicas, químicas e microbiológicas. Adequação do sistema alimento/embalagem/ambiente; cálculos de vida-de-prateleira.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['TA431', 'TA534', 'TA615'],
			color: '#80B3A0',
			obligatory: true
		},
		'TA831': {
			code: 'TA831',
			name: 'Operações Unitárias III',
			ementa: 'Difusão. Equilíbrio de fases. Coeficientes de transferência de massa. Transferência de massa na interface. Principais operações e equipamentos por estágio ou de contato diferencial. Operações unitárias contínuas ou em batelada. Umidificação. Secagem. Extração sólido-líquido. Extração líquido-líquido. Destilação contínua e em batelada. Absorção e esgotamento. Cálculo do número de estágio e altura de recheio.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA534'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA912': {
			code: 'TA912',
			name: 'Termobacteriologia Aplicada a Alimentos',
			ementa: 'Marcha de FDA para detecção de contaminantes e ensaio de esterilidade comercial. Resistência dos microrganismos ao calor. Modelo de RAHN e ARRHENIUS. Determinação dos parâmetros D, z e Fo requeridos. Penetração de calor. Avaliação de processos de esterilização pelo calor. Taxa letal, método geral e matemático em sistemas contínuos e descontínuos. Tempo de residência para esterilização/pasteurização em processos contínuos. Validação biológica e bioindicadores de esterilização.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA615', 'TA731'],
			color: '#8DB3B3',
			obligatory: true
		},
		'TA920': {
			code: 'TA920',
			name: 'Processos Tecnológicos VI',
			ementa: 'Processos de torrefação e moagem, extração, concentração (por evaporação e crioconcentração), congelamento, secagem em spray-drier e em secadores de rolos, instantaneização, liofilização, cristalização e centrifugação. Tecnologia de processamento de sucos cítricos. Tecnologia de processamento de tomate e seus derivados. Tecnologia de processamento de leites evaporado, condensado açucarado, desidratado (integral e desnatado) e instantaneizado. Tecnologia de processamento de café e chocolate. Tecnologia de processamento de açúcar de cana. Parâmetros de qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BM320', 'TA322', 'TA411', 'TA421', 'TA516'],
			color: '#9C9C8C',
			obligatory: true
		},
		'TA927': {
			code: 'TA927',
			name: 'Processos Tecnológicos VII',
			ementa: 'Processamento térmico de alimentos em autoclaves e sistemas contínuos. Pasteurização e esterilização de vegetais, leite, carnes e produtos mistos. Processamento de alimentos extrusados. Processamento de alimentos por métodos não convencionais (micro-ondas, aquecimento ôhmico, alta pressão, irradiação e pulso elétrico). Parâmetros de qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA411', 'TA516', 'TA521', 'TA615', 'TA731', 'TA421'],
			color: '#A6B373',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#73A68C',
			obligatory: true
		},
		'TA035': {
			code: 'TA035',
			name: 'Laboratório de Operações Unitárias',
			ementa: 'Experimentos em operações unitárias mais relevantes na Engenharia de Alimentos com montagem, medição e interpretação de resultados.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA631', 'TA731', 'TA831'],
			color: '#47D3C9',
			obligatory: true
		},
		'TA641': {
			code: 'TA641',
			name: 'Nutrição e Qualidade Nutricional de Alimentos',
			ementa: 'Descrição dos macro e micronutrientes. Características química, propriedades, funções bioquímicas e nutricionais. Processos de digestão, absorção e transporte dos nutrientes. Recomendações e necessidades nutricionais em função do estágio de vida. Desequilíbrios nutricionais resultantes da ingestão não-criteriosa de alimentos. Alterações desejáveis e indesejáveis de nutrientes durante o processamento e armazenamento. Avaliação nutricional por métodos químicos, bioquímicos e biológicos. Conceitos de formulação. Produtos para fins especiais. Substâncias bioativas e alimentos funcionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA514', 'TA516'],
			color: '#D9D940',
			obligatory: true
		},
		'TA734': {
			code: 'TA734',
			name: 'Instalações Industriais',
			ementa: 'Introdução ao desenho técnico. Fluxogramas de Processo e Mecânico. Elaboração de Anteprojeto de planta para indústria alimentícia. Composição, estrutura e propriedades dos aços Carbono e Inox. Tratamento térmico, corrosão e soldas. Tubulações, válvulas e conexões sanitárias e não sanitárias. Projeto sanitário com válvulas mix-proof. Caldeiras. Linhas de vapor. Tratamento de água primário e para caldeiras. Instalações Sanitárias e Central CIP. Aquecimento e isolamento de tubulações. Traçado e suporte de tubulações. Layout. Desenho em computador de planta isométrico. Lista de materiais.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['TA431', 'TA631'],
			color: '#5EBD92',
			obligatory: true
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328'],
			color: '#73A68C',
			obligatory: true
		},
		'TA030': {
			code: 'TA030',
			name: 'Refrigeração',
			ementa: 'O papel do frio na conservação de alimentos. Refrigerantes. Ciclos teórico e real de refrigeração por compressão. Sistemas de múltiplos estágios. Componentes do sistema e características de desempenho. Automação e controles. Isolamento e câmaras frigoríficas. Carga térmica. Termoacumulação. Cogeração. Conservação e recuperação de energia. Operação, manutenção e segurança. Estocagem, transporte e comercialização frigorificadas. Normas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['TA731'],
			color: '#40D9D9',
			obligatory: true
		},
		'TA725': {
			code: 'TA725',
			name: 'Desenvolvimento de Novos Produtos',
			ementa: 'Expectativas e satisfação do consumidor. Definição e caracterização de novos produtos. Introdução de novos produtos no mercado. Gerenciamento do processo de desenvolvimento de novos produtos: geração de ideias, estratégias industriais, mecanismos de autoavaliação. Caracterização do consumidor de novos produtos. Caracterização do mercado. Condições a serem atendidas pelo novo produto. Relação sucesso x insucesso de um novo produto. Ciclo de vida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA623'],
			color: '#80B3A0',
			obligatory: true
		},
		'TA729': {
			code: 'TA729',
			name: 'Segurança Industrial',
			ementa: 'Conhecimento geral da legislação e das normas regulamentadoras de segurança no trabalho. Legislação profissional e CLT. Conceitos de acidentes e riscos. CIPA, SESMT. Riscos ocupacionais: químicos, físicos e biológicos. Equipamentos de proteção coletiva e individual. Sinalização de segurança. Prevenção e combate a incêndios. Primeiros socorros. Ergonomia.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ['QA213', 'QO427', 'TA726'],
			color: '#D9C05A',
			obligatory: true
		},
		'TA736': {
			code: 'TA736',
			name: 'Engenharia de Bioprocessos',
			ementa: 'Agitação, aeração e ampliação de escala em processos fermentativos. Tecnologia de biorreatores. Cinética dos processos enzimáticos e fermentativos. Biorreatores biológicos e enzimáticos ideais: Processo descontínuos, semicontínuos e contínuos; balanços de massa, cinética e cálculo de reatores. Esterilização de meios, equipamentos e ar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA534', 'TA615'],
			color: '#8DB3B3',
			obligatory: true
		},
		'TA741': {
			code: 'TA741',
			name: 'Controle de Qualidade na Indústria de Alimentos',
			ementa: 'Definição de Qualidade, Conceitos de Inspeção, Controle de Qualidade. Garantia e Sistemas de Gestão de Qualidade. Normas ISO 9000. Gestão de Segurança de Alimentos: APPCC e ISO 22000. Atributos de qualidade de alimentos: cor e textura. Conceitos de Amostragem. Curvas característica de operação. Amostragem por atributos e por variáveis. Controle estatístico e capacidade de processo. Ferramentas de Qualidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TA513', 'TA541', 'TA726'],
			color: '#A6C08D',
			obligatory: true
		},
		'TA832': {
			code: 'TA832',
			name: 'Formulação e Avaliação de Projetos',
			ementa: 'Elementos básicos de projetos e perfis industriais. Avaliação de mercado e projeção de tendências. Estudo e escolha do processo. Quantificação do processamento: requisitos de insumos, energia, etc. Produtividade. Escala e tamanho. Layout de Fábrica. Localização. Avaliação Econômica de Projetos. Custos. Depreciação. Investimento Fixo e Capital de Giro. Composição de custos de um produto alimentício. Análise de rentabilidade de projetos: rentabilidade sobre o patrimônio. Período de recuperação do investimento. Taxa interna de retorno. Valor atual líquido.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA542'],
			color: '#8D8DB3',
			obligatory: true
		},
		'TA836': {
			code: 'TA836',
			name: 'Tratamento de Águas Residuárias',
			ementa: 'Caracterização de águas residuárias da Indústria de Alimentos. Tratamento primário, secundário e terciário. Métodos físicos, químicos e biológicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA716'],
			color: '#D98D8D',
			obligatory: true
		},
		'TA009': {
			code: 'TA009',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho individual e orientado por docente da FEA, constando de desenvolvimento teórico sobre um tema relevante à Engenharia de Alimentos, realizado a partir de pesquisa bibliográfica; segundo normas definidas pela Comissão de Graduação da FEA.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:1, C:4},
			requisitos: ['AA475'],
			color: '#408CD9',
			obligatory: true
		},
		'TA017': {
			code: 'TA017',
			name: 'Biotecnologia de Alimentos',
			ementa: 'Princípios fundamentais de engenharia genética e sua correlação com alimentos in natura e processados. Organismos e vegetais geneticamente modificados. Obtenção de metabólitos de interesse industrial. Biotransformação de produtos por via enzimática e microbiana.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TA610', 'TA615'],
			color: '#D9B367',
			obligatory: true
		},
		'TA021': {
			code: 'TA021',
			name: 'Projeto Tecnológico',
			ementa: 'Execução das etapas do processo de desenvolvimento de um produto alimentício a partir do conceito inicial. Definição teórica e experimental (em laboratório e/ou planta-piloto) de justificativa para o desenvolvimento do produto, definição do público-alvo e do mercado, seleção de matérias-primas (ingredientes e aditivos), formulações, operações de processamento, embalagens, custo-formulação, características de qualidade e aspectos legais relacionados ao produto selecionado.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['TA725', 'TA741'],
			color: '#93BA97',
			obligatory: true
		},
		'TA046': {
			code: 'TA046',
			name: 'Serviços de Alimentação',
			ementa: 'Alimentação fora do lar: histórico; tipos e finalidades; mercado. Programas governamentais: Alimentação Escolar, PAT. Administração: avaliação e controle. Logística em Serviços de Alimentação. Dimensionamento e planejamento de ambientes de refeitórios. Estudos e dimensionamento de equipamentos, áreas e layout e projetos para restaurantes de grande porte. Novos equipamentos e novas tecnologias no processamento de refeições: \"cook-chill\", processamento mínimo. Visitas: praças de alimentação, rostisserias, restaurantes e lanchonetes, centrais de processamento e distribuição de refeições.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['TA332', 'TA615'],
			color: '#8DB3B3',
			obligatory: true
		},
		'TA737': {
			code: 'TA737',
			name: 'Instrumentação e Controle',
			ementa: 'Fluxograma de engenharia, normas para descrever estratégias de controle de processos industriais. Instrumentação de medição de temperatura, pressão, vazão e nível e outros. Medição e controle de parâmetro de processo. Curvas Características de válvulas de controle e atuadores. Apresentação de Controladores Lógicos Programáveis. Noções de linearidades de Processos. Apresentação de noções sobre teoria de controladores P, PI e PID. Ajuste/sintonias de controladores P, PI, PID. Estratégias de controle e malhas de controle feedback, cascata e feedforward.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['F_328', 'TA534'],
			color: '#5AC0B3',
			obligatory: true
		},
		'TA909': {
			code: 'TA909',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado em indústrias e empresas do setor de alimentos ou em outros órgãos credenciados pela FEA.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:1, C:12},
			requisitos: ['TA221', 'TA322', 'TA421', 'TA521'],
			color: '#8D7979',
			obligatory: true
		},
		'TA932': {
			code: 'TA932',
			name: 'Projeto Industrial',
			ementa: 'Elaboração de um anteprojeto de uma indústria de alimentos ou correlata. Identificação dos objetivos e mercados do empreendimento. Definição do Plano de Produção e das estratégias de crescimento. Decisão da localização. Especificação de processos, sistema de qualidade, insumos industriais, equipamentos, instalações e edificações. Elaboração do arranjo físico. Caracterização e quantificação do investimento fixo. Cálculo dos custos de produção, capital de giro e preço de venda. Determinação dos indicadores de rentabilidade e risco. Estudo preliminar de viabilidade econômica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['TA832'],
			color: '#8D8DB3',
			obligatory: true
		}
	}
};

export default catalogue;
