const catalogue = {
	totalCredits: 200,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE105', 'CE141', 'CE142', 'CE172', 'CE191', 'MA111']
		},
		'sem-2': {
			id: '2',
			subjects: ['CE112', 'CE205', 'CE242', 'CE262', 'CE272', 'CE291', 'ME414']
		},
		'sem-3': {
			id: '3',
			subjects: ['CE113', 'CE302', 'CE305', 'CE323', 'CE362', 'CE372', 'CE391']
		},
		'sem-4': {
			id: '4',
			subjects: ['CE342', 'CE405', 'CE423', 'CE462', 'CE472', 'CE482', 'CE491']
		},
		'sem-5': {
			id: '5',
			subjects: ['CE442', 'CE562', 'CE572', 'CE582', 'CE591', 'CE671', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['CE592', 'CE625', 'CE672', 'CE682', 'CE791', 'CE853', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE593', 'CE725', 'CE792', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['CE542', 'CE825', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['CE181', 'CE243', 'CE281', 'CE351', 'CE414', 'CE451', 'CE505', 'CE526', 'CE539', 'CE623', 'CE641', 'CE651', 'CE652', 'CE653', 'CE654', 'CE712', 'CE723', 'CE731', 'CE742', 'CE751', 'CE753', 'CE782', 'CE783', 'CE823', 'CE841', 'CE856', 'CE857', 'CE858', 'CE859', 'CE860', 'CE861', 'CE862', 'CE863', 'CE864', 'CE865', 'CE866', 'CE867', 'CE868', 'CE869', 'CE870', 'CE872', 'CE891', 'CE892', 'CE923', 'CE939'],
		},
		'elet-2': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'CE105': {
			code: 'CE105',
			name: 'Fundamentos da Teoria Econômica',
			ementa: 'Ciência e modos de conhecimento. Filosofia e teoria do conhecimento. Concepções de ciência. A ciência como prática social. A teoria econômica como ciência, como técnica e como ideologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7240D9',
			obligatory: true
		},
		'CE141': {
			code: 'CE141',
			name: 'Contabilidade e Análise de Balanço',
			ementa: 'A empresa e a tomada de decisões. Funções da contabilidade. Relatórios Contábeis. Balanço Patrimonial. Regimes de contabilidade. Demonstração do Resultado do Exercício. Demonstração dos lucros e prejuízos acumulados. Demonstração das mutações do patrimônio líquido. Demonstração das origens e aplicações de recursos. Demonstração dos fluxos de caixa. Análise das demonstrações financeiras e indicadores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95540',
			obligatory: true
		},
		'CE142': {
			code: 'CE142',
			name: 'Métodos de Análise Econômica I',
			ementa: 'Determinação de custos. Gasto, custo, despesa, investimento, desembolso. Estrutura de custos. Análise econômica de custos. Métodos para determinação de custos de produtos. Determinação do preço de venda a partir do custo. Valor do dinheiro no tempo. Capitalização simples: juros simples, montante e valor atual. Desconto comercial e desconto racional. Capitalização composta. Juros compostos e montante de pagamento único. Taxas efetivas e equivalentes. Séries não uniformes e uniformes. Anuidades perpétuas. Decisões de investimento e fluxo de caixa. Valor presente líquido e taxa interna de retorno',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9406A',
			obligatory: true
		},
		'CE172': {
			code: 'CE172',
			name: 'Introdução à Economia',
			ementa: 'A economia de mercado, origens e destino da produção. A circulação numa economia de mercado. As relações econômicas internacionais. O setor público. O sistema financeiro. A unidade produtora, sua inserção no sistema. Repartição e apropriação do produto social.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940AA',
			obligatory: true
		},
		'CE191': {
			code: 'CE191',
			name: 'História Econômica Geral I',
			ementa: 'Feudalismo. Formação do sistema capitalista. O antigo regime econômico: o capital comercial. O antigo regime político e social. O antigo sistema colonial. Revoluções burguesas. Revolução industrial. A hegemonia inglesa e a nova divisão internacional do trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94095',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D979',
			obligatory: true
		},
		'CE112': {
			code: 'CE112',
			name: 'Economia Matemática II',
			ementa: 'Operações com vetores. Produto escalar. Equações de reta e plano. Funções de várias variáveis reais. Limites e continuidade. Derivadas parciais de funções de duas ou mais variáveis. Funções diferenciáveis. Diferencial. Vetor gradiente. Teorema das funções implícitas. Derivadas parciais de ordens superiores. Aplicações em análise estática comparativa. Otimização de funções de várias variáveis: não condicionada e condicionada.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D979',
			obligatory: true
		},
		'CE205': {
			code: 'CE205',
			name: 'Ciências Sociais para Economia',
			ementa: 'O surgimento do Estado Moderno, os contratualistas e a questão do poder e da legitimidade. O projeto iluminista e a emergência da sociedade capitalista: Marx, Weber e Durkheim. A sociedade contemporânea: mudanças estruturais e a contestação do projeto iluminista. Novos atores, novas identidades, novos conflitos, crise de valores, desafio da ordem e da mudança em sociedades fragmentadas e multiculturais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B240D9',
			obligatory: true
		},
		'CE242': {
			code: 'CE242',
			name: 'Métodos de Análise Econômica II',
			ementa: 'Análise de Dados Econômicos-Sociais. Deflacionamento de séries. Índices de Preços. Construção de Indicadores da Situação Econômico-Social: Medidas de Desigualdade, de Concentração e de Pobreza.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE172'],
			color: '#D940AA',
			obligatory: true
		},
		'CE262': {
			code: 'CE262',
			name: 'Microeconomia I',
			ementa: 'Mercado: oferta, demanda e equilíbrio. Comportamento do consumidor. Demanda individual e de mercado. Produção e custos de produção. Equilíbrio em mercados competitivos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D979',
			obligatory: true
		},
		'CE272': {
			code: 'CE272',
			name: 'Contabilidade Social',
			ementa: 'Contabilidade nacional: definição e mensuração dos agregados. Gastos e determinação da renda. Consumo, poupança e investimento. Moeda, crédito e taxa de juros. Preferência pela liquidez. As condições de equilíbrio macroeconômico em uma economia aberta e com governo. Taxas de juros e taxa do câmbio em uma economia aberta. Crescimento e distribuição da renda. Análise aplicada das Contas Econômicas Integradas (CEI) e da Tabela de Recursos e Usos (TRU) divulgadas pelo IBGE.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE172'],
			color: '#D940AA',
			obligatory: true
		},
		'CE291': {
			code: 'CE291',
			name: 'História Econômica Geral II',
			ementa: 'A construção da hegemonia britânica. Sociedade e política no século XIX. As industrializações atrasadas. Do imperialismo à grande guerra. Revolução russa. Economia mundial no entreguerras. Crise do liberalismo. A segunda-guerra mundial e Bretton Woods. Guerra fria. Economia mundial pós-segunda guerra. Direitos e democracia. Revolução cultural no ocidente. Mundo do trabalho. Socialismo real. Periferia. Década de crise. Fim do socialismo. Balanço e perspectiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE191'],
			color: '#D94095',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D979',
			obligatory: true
		},
		'CE113': {
			code: 'CE113',
			name: 'Economia Matemática III',
			ementa: 'Vetores e Matrizes. Sistemas de Equações Lineares. Combinação Linear. Dependência e Independência Linear. Transformação Linear. Autovalores e Autovetores. Matriz Diagonalizável. Modelos Dinâmicos e Cálculo Integral. Sistemas Dinâmicos com uma variável de estado. Equações em Diferenças e Equações Diferenciais. Modelos dinâmicos e equações simultâneas: Sistemas de Equações em Diferenças e Sistemas de Equações Diferenciais. Aplicações em Economia: Modelos de Crescimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE112'],
			color: '#40D979',
			obligatory: true
		},
		'CE302': {
			code: 'CE302',
			name: 'Instituições de Direito',
			ementa: 'Direito Econômico: regulação jurídica da economia. Meio ambiente, consumidor, concorrência e direito de propriedade. Setores da economia: telecomunicações, gás e petróleo, sistema financeiro, agricultura, indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B2D940',
			obligatory: true
		},
		'CE305': {
			code: 'CE305',
			name: 'Economia Política I',
			ementa: 'O nascimento da economia política. Os fisiocratas e a noção de excedente econômico. Smith e a idéia de ordem natural. Smith: teoria do valor e divisão do trabalho. Ricardo: teoria do valor e da distribuição. Ricardo e a visão da crise capitalista. Marx: valor, dinheiro e valorização. Processo de trabalho e valorização em Marx. Reprodução simples e acumulação de capital em Marx. Marx e a lei geral da acumulação capitalista.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9AA40',
			obligatory: true
		},
		'CE323': {
			code: 'CE323',
			name: 'Estatística Econômica e Introdução à Econometria',
			ementa: 'Inferência Estatística: Propriedades dos estimadores. Estimadores pontuais. Intervalos de confiança e testes de hipóteses. Análise de variância. Coeficiente de correlação. Regressão linear simples. Análise de variância da regressão. Intervalo de previsão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414'],
			color: '#40D979',
			obligatory: true
		},
		'CE362': {
			code: 'CE362',
			name: 'Microeconomia II',
			ementa: 'Monopólio. Oligopólio e concorrência monopolística. Teoria dos jogos. Escolha intertemporal, incerteza e informação. Equilíbrio geral.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE262'],
			color: '#40D979',
			obligatory: true
		},
		'CE372': {
			code: 'CE372',
			name: 'Macroeconomia I',
			ementa: 'Determinação do emprego e da produção no modelo clássico. Princípio da demanda efetiva. Determinação da produção, emprego e renda em Keynes. Determinação da renda em Kalecki. Análise macroeconômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE242', 'CE272'],
			color: '#D940AA',
			obligatory: true
		},
		'CE391': {
			code: 'CE391',
			name: 'Desenvolvimento Socioeconômico',
			ementa: 'Desenvolvimento e subdesenvolvimento. O pensamento cepalino. A questão da revolução democrática burguesa. Teorias da dependência. O desenvolvimento associado. Contribuições teóricas mais recentes sobre desenvolvimento e subdesenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE291'],
			color: '#D94095',
			obligatory: true
		},
		'CE342': {
			code: 'CE342',
			name: 'Métodos de Análise Econômica III',
			ementa: 'Modelos macroeconômicos e aplicações. Modelos macroeconômicos híbridos utilizados por bancos centrais e aplicações.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE372'],
			color: '#D940AA',
			obligatory: true
		},
		'CE405': {
			code: 'CE405',
			name: 'Economia Política II',
			ementa: 'Marx: realização da mais-valia e os esquemas de reprodução. Valores e preços de produção em Marx. Lei da tendência à queda da taxa de lucro em Marx. Dinheiro, capital a juros e capital fictício em Marx. Hilferding e o capital financeiro. A discussão contemporânea sobre o capital fictício e crises financeiras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE305'],
			color: '#D9AA40',
			obligatory: true
		},
		'CE423': {
			code: 'CE423',
			name: 'Econometria I',
			ementa: 'Econometria e economia. Regressão Linear Múltipla. Variáveis Binárias. Violação das Hipóteses. Equações Simultâneas. Estimando e testando hipóteses em modelos de regressão linear. Aplicações em Economia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE113', 'CE323'],
			color: '#40D979',
			obligatory: true
		},
		'CE462': {
			code: 'CE462',
			name: 'Microeconomia III',
			ementa: 'Equilíbrio geral e falhas de mercado. Informações assimétricas: seleção adversa, sinalização de mercado, risco moral e o problema da relação agente e principal. Externalidades e bens públicos. Teoria da regulação e defesa da concorrência. A firma nos enfoques neoclássico, transacional e da teoria da agência. Mecanismos de coordenação e preços de transferência. Motivação e incentivos. Estratégia, estrutura e resultado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE362'],
			color: '#40D979',
			obligatory: true
		},
		'CE472': {
			code: 'CE472',
			name: 'Macroeconomia II',
			ementa: 'Modelo keynesiano simplificado. Modelo IS-LM em economia fechada e aberta. Curvas de oferta agregada e demanda agregada em economia fechada e aberta. Curva de Phillips. Política econômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE372'],
			color: '#D940AA',
			obligatory: true
		},
		'CE482': {
			code: 'CE482',
			name: 'Economia Internacional I',
			ementa: 'Origens da teoria do comércio internacional. Modelos de comércio internacional: vantagens corporativas (abordagem ricardiana, Heckscher-Ohlin), modelo de concorrência imperfeita. Visões críticas aos modelos convencionais: cepalina e evolucionista. Instrumentos de política comercial e economia política da política comercial. Institucionalidade e regulação do comércio multilateral. Acordos de integração comercial. Teoria do investimento direto externo. Internacionalização comercial e produtiva e empresas transnacionais. Países em desenvolvimento e as redes globais e regionais de produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE362'],
			color: '#40D979',
			obligatory: true
		},
		'CE491': {
			code: 'CE491',
			name: 'Formação Econômica do Brasil I',
			ementa: 'A especificidade de Portugal nos quadros da expansão comercial européia. A economia mercantil-escravista colonial. A crise do antigo sistema colonial. A economia mercantil-escravista cafeeira nacional. A crise do escravismo e a emergência do mercado de trabalho assalariado. Estado, indústria e agricultura. A dinâmica da acumulação: capital cafeeiro e capital industrial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE391'],
			color: '#D94095',
			obligatory: true
		},
		'CE442': {
			code: 'CE442',
			name: 'Métodos de Análise Econômica IV',
			ementa: 'Séries Temporais: Estacionariedade, Processo Auto-Regressivo Média Móvel. Raiz Unitária e Cointegração. Simulação de modelos. Desenvolvimento de modelos de séries temporais. Aplicações em economia.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE423'],
			color: '#40D979',
			obligatory: true
		},
		'CE562': {
			code: 'CE562',
			name: 'Microeconomia IV',
			ementa: 'Crítica à abordagem neoclássica da concorrência. A abordagem estrutura-conduta-desempenho e a contribuição de Steindl. Inovação e concorrência na abordagem neo-schumpeteriana. A empresa como agente da concorrência. Estratégias de crescimento das empresas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE462'],
			color: '#40D979',
			obligatory: true
		},
		'CE572': {
			code: 'CE572',
			name: 'Macroeconomia III',
			ementa: 'Tópicos da política macroeconômica. Crescimento e ciclo econômico. A contribuição de Harrod e da escola de Cambridge. O modelo de Solow. Modelos de crescimento endógeno. Restrição e comércio exterior. Crescimento e abertura financeira. Crescimento e distribuição da renda. Crescimento em modelos heterodoxos de consistência entre fluxos e estoques. Análises aplicadas dos modelos apresentados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE342', 'CE472'],
			color: '#D940AA',
			obligatory: true
		},
		'CE582': {
			code: 'CE582',
			name: 'Economia Internacional II',
			ementa: 'O padrão-ouro e a estabilidade do sistema monetário internacional. O período entreguerras e fracionamento da economia mundial: Grande Depressão. Bretton Woods e hegemonia americana após a segunda grande guerra: reorganização do sistema monetário internacional. Padrão de produção das economias avançadas: reconstrução da Europa e do Japão. Processo de internacionalização e nova divisão internacional do trabalho. Euromercado e crise do dólar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE291', 'CE482'],
			color: '#8D8D87',
			obligatory: true
		},
		'CE591': {
			code: 'CE591',
			name: 'Formação Econômica do Brasil II',
			ementa: 'Expansão da economia cafeeira e gênese da industrialização. Crise da divisão internacional do trabalho e mudança no padrão de crescimento. Industrialização restringida. Estado, indústria e agricultura. Internacionalização dos mercados internos e industrialização pesada. Distribuição de renda. A crise dos anos 1960.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE491'],
			color: '#D94095',
			obligatory: true
		},
		'CE671': {
			code: 'CE671',
			name: 'Economia Monetária',
			ementa: 'Moeda: caracterização e evolução histórica. Fundamentos da teoria monetária: demanda por moeda e oferta de moeda endógena. Taxa de juros. Moeda e dinâmica econômica: a hipótese de instabilidade financeira. Política monetária: fundamentos, operacionalidade e mecanismos de transmissão. Sistemas e mercados financeiros: mercado de crédito, mercado de capitais, instrumentos de cobertura de riscos, regulamentação e supervisão. Sistema financeiro brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE342', 'CE472'],
			color: '#D940AA',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE592': {
			code: 'CE592',
			name: 'Economia Brasileira Contemporânea I',
			ementa: 'As reformas institucionais da ditadura militar e a retomada do crescimento. O ciclo expansivo: retomada, auge e inflexão. Estado, indústria e agricultura. Distribuição de renda. o novo quadro internacional e o II PND. Choques externos, crise e ajustamento na primeira metade dos anos 80.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE591'],
			color: '#D94095',
			obligatory: true
		},
		'CE625': {
			code: 'CE625',
			name: 'Técnicas de Pesquisa',
			ementa: 'Métodos de investigação científica. Elaboração de projetos de pesquisa. Assessoramento ao aluno na escolha do tema de monografia e orientador. Elaboração do projeto de monografia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#40D9CE',
			obligatory: true
		},
		'CE672': {
			code: 'CE672',
			name: 'Estratégias Corporativas e Financeirização',
			ementa: 'Conceitos básicos de finanças das corporações: risco, retorno e orçamento de capital. Decisões de estrutura de capital. Governança corporativa, mercado financeiro e desenvolvimento econômico. Visões alternativas do processo de financeirização. Financeirização e impactos sobre as estratégias das Corporações. Estratégia Shareholder Value. Gestão das estruturas de capital e de ativos das grandes corporações brasileiras. Padrão e instrumentos de financiamento das empresas não financeiras (ENF) no Brasil.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE141', 'CE142', 'CE562'],
			color: '#A67A61',
			obligatory: true
		},
		'CE682': {
			code: 'CE682',
			name: 'Economia Internacional III',
			ementa: 'Contradições de Bretton Woods e dilemas da economia americana nos anos 1970. Crise do padrão de produção americano. A expansão do capital financeiro internacional nos anos 1970 e a crise da dívida externa dos países em desenvolvimento. Retomada da hegemonia americana: política do dólar forte e coordenação macroeconômica nos anos 1980. Regime dólar flexível e formação de zona monetária européia e da área de influência do iene. Inserção financeira e comercial dos países em desenvolvimento. Principais tendências da economia mundial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE582'],
			color: '#8D8D87',
			obligatory: true
		},
		'CE791': {
			code: 'CE791',
			name: 'História do Pensamento Econômico',
			ementa: 'Significados da história do pensamento econômico. Economia clássica e a matriz liberal. Consolidação da economia neoclássica até os anos 30. Evolução das teorias macroeconômica e microeconômica no século 20.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE405', 'CE671'],
			color: '#D97575',
			obligatory: true
		},
		'CE853': {
			code: 'CE853',
			name: 'Economia do Setor Público',
			ementa: 'Política fiscal: visões teóricas. O papel do Estado. Sistema tributário: conceitos básicos, tipos de impostos e carga tributária. Sistema tributário brasileiro: evolução recente. Orçamento público e política orçamentária. Federalismo fiscal. Déficit e dívida pública. Política fiscal e finanças públicas no Brasil: evolução recente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE591'],
			color: '#D94095',
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
		'CE593': {
			code: 'CE593',
			name: 'Economia Brasileira Contemporânea II',
			ementa: 'Restrição externa, semiestagnação e inflação nos anos oitenta. Reformas estruturais nos anos noventa. Estabilidade monetária e semi-estagnação. Inserção externa. Reestruturação produtiva. Pobreza e distribuição de renda. Movimento recente da economia brasileira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE592'],
			color: '#D94095',
			obligatory: true
		},
		'CE725': {
			code: 'CE725',
			name: 'Monografia I',
			ementa: 'O aluno deverá realizar trabalho individual de pesquisa supervisionado por um professor orientador, embasado no projeto elaborado na disciplina Técnicas de Pesquisa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['CE625'],
			color: '#40D9CE',
			obligatory: true
		},
		'CE792': {
			code: 'CE792',
			name: 'Desenvolvimento Econômico Contemporâneo',
			ementa: 'A problemática do desenvolvimento econômico: conceitos e indicadores. A economia política do desenvolvimento, pioneiros e a tradição cepalina. O resgate do desenvolvimento. Novas visões do desenvolvimento. Variedades do capitalismo. Padrões e estilos de desenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE391', 'CE682'],
			color: '#B3678E',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE542': {
			code: 'CE542',
			name: 'Métodos de Análise Econômica V',
			ementa: 'Métodos e Instrumentos de análise de conjuntura econômica. Indicadores de instituições nacionais e multilaterais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE593'],
			color: '#D94095',
			obligatory: true
		},
		'CE825': {
			code: 'CE825',
			name: 'Monografia II',
			ementa: 'Continuação do trabalho desenvolvido na disciplina Monografia I.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['CE725'],
			color: '#40D9CE',
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
		'CE181': {
			code: 'CE181',
			name: 'Intérpretes do Brasil',
			ementa: 'Leitura e discussão de clássicos do pensamento brasileiro. Identidade Nacional. Pensamento político e social brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D98040',
			obligatory: false
		},
		'CE243': {
			code: 'CE243',
			name: 'Ciência Política',
			ementa: 'Estado e Industrialização: nacionalismo e desenvolvimento. O significado histórico da Revolução de 64. O sentido da abertura prática e da redemocratização. O tempo do neo-liberalismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE592'],
			color: '#D94095',
			obligatory: false
		},
		'CE281': {
			code: 'CE281',
			name: 'Fundamentos de História Econômica do Brasil',
			ementa: 'A organização do Estado nacional: Estado nação no século XIX. Independência e unidade nacional na América. Processo de independência no Brasil. Economia, sociedade e identidade nacional no Brasil: Economia nacional e organização social. Escravismo e identidade nacional. Liberalismo e instituições políticas. Abolição e República. Estado e modernização no Brasil: origens do Brasil moderno. Revolução de 30 e a redefinição da questão nacional. Desenvolvimento e sociabilidade na segunda metade do século XX.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#C740D9',
			obligatory: false
		},
		'CE351': {
			code: 'CE351',
			name: 'Matemática Financeira',
			ementa: 'Regime de capitalização simples, composto e contínuo. Taxas equivalentes. Operações e desconto. Taxa nominal, taxa efetiva e taxa real. Série de pagamentos uniformes. Sistemas de amortização. Operações financeiras mais comuns. Critério de avaliação de investimento: taxa interna de retorno e valor presente líquido. Títulos de renda fixa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D99540',
			obligatory: false
		},
		'CE414': {
			code: 'CE414',
			name: 'Política e Políticas Sociais no Brasil',
			ementa: 'Políticas públicas e seu papel no mundo contemporâneo. Instrumental analítico da análise e da avaliação de políticas públicas na área social. Processo de constituição do Estado do Bem-Estar Social na perspectiva histórica e internacional. Evolução do sistema de proteção social brasileiro desde os anos trinta até a atualidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40B9D9',
			obligatory: false
		},
		'CE451': {
			code: 'CE451',
			name: 'Métodos Quantitativos Aplicados à Economia Financeira',
			ementa: 'Processo decisório em condições de risco. Risco e retorno de um ativo e de uma carteira. Seleção de carteiras e teoria de Markowitz. Modelo de índice único. Modelo de índice múltiplo. Outros modelos de escolha de carteiras. Análise da utilidade do investidor. Modelo de precificação de ativos. Modelo de formação de preços por arbritagem. Eficiência de mercado. Mercado de opções e métodos de apreçamento. Mercado de renda fixa: formação de preços e administração de carteiras.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE423'],
			color: '#40D979',
			obligatory: false
		},
		'CE505': {
			code: 'CE505',
			name: 'Economia Política Contemporânea',
			ementa: 'As corporações capitalistas produtivas e suas estratégias de acumulação. Dinâmica da renda e do emprego e a dinâmica da riqueza. Impactos da financeirização do capitalismo. Análise das expansões e crises. Identificação e avaliação das diferentes abordagens vigentes desde o enfoque da Economia Política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE405'],
			color: '#D9AA40',
			obligatory: false
		},
		'CE526': {
			code: 'CE526',
			name: 'Teoria do Desenvolvimento',
			ementa: 'Teorias sobre o desenvolvimento do capitalismo no século XX. O capital financeiro. O imperialismo. O capitalismo monopolista de Estado. Classes sociais no capitalismo de hoje.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D96A40',
			obligatory: false
		},
		'CE539': {
			code: 'CE539',
			name: 'Métodos Quantitativos Aplicados à Administração de Empresas I',
			ementa: 'Processo e sistema integrado de informações para gestão empresarial estratégica. Métodos para o controle e dimensionamento do capital produtivo. Métodos para dimensionamento do mercado, controle de vendas, controle da utilização e reposição dinâmica dos recursos produtivos. Conceituação de custos e processo de custeio. Métodos para determinação dos custos, preços e lucros unitários dos produtos. Sistemas de custeio: formação do preço devenda. Ferramentas para utilização das informações de custos e preços no processo estratégico. Métodos para avaliação dos resultados econômico e financeiro das empresas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940C0',
			obligatory: false
		},
		'CE623': {
			code: 'CE623',
			name: 'Sistema Monetário Internacional',
			ementa: 'A evolução do sistema financeiro internacional de 1870 até o presente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE671'],
			color: '#D940AA',
			obligatory: false
		},
		'CE641': {
			code: 'CE641',
			name: 'Introdução à Administração',
			ementa: 'Organização do trabalho e revolução industrial. Organizações e administração. Teorias da administração clássicas e modernas. Processo administrativo e as aplicações nas empresas: planejamento, organização, liderança e controle. Administração de projetos. Administração de operações. Empresa classe mundial, toyotismo, qualidade total. Modelos de melhoria. Administração da tecnologia e da informação. Responsabilidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9C40D9',
			obligatory: false
		},
		'CE651': {
			code: 'CE651',
			name: 'Economia Agrícola',
			ementa: 'Desenvolvimento recente da agricultura e agroindústria no Brasil: situação e persperctivas. Estrutura fundiária. Financiamento e comercialização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4079D9',
			obligatory: false
		},
		'CE652': {
			code: 'CE652',
			name: 'Economia Industrial',
			ementa: 'A indústria de transformação na economia mundial contemporânea. Diagnóstico da atual indústria brasileira. Evolução e transformação da indústria brasileira. Panorama recente de setores, empresas e grupos industriais. Política industrial, tecnológica e de comércio exterior no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4740D9',
			obligatory: false
		},
		'CE653': {
			code: 'CE653',
			name: 'Economia Regional e Urbana',
			ementa: 'Fundamentos históricos dos desequilíbrios regionais no Brasil. Integração do mercado nacional. Processo de urbanização. Políticas de desenvolvimento regional.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5CD940',
			obligatory: false
		},
		'CE654': {
			code: 'CE654',
			name: 'Economia do Trabalho',
			ementa: 'População e força de trabalho. Estrutura do emprego e formas de organização da produção. Estrutura do emprego no Brasil. Nível e distribuição dos salários. Políticas de salários e emprego. Relações de trabalho e sindicalismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#47D940',
			obligatory: false
		},
		'CE712': {
			code: 'CE712',
			name: 'Teoria Monetária e Financeira',
			ementa: 'Moeda, crédito e ciclo do capital em Marx. Hilferding e o capital financeiro. Keynes: Moeda, riqueza e composição da carteira dos agentes. Instabilidade financeira e ciclo econômico. Abordagens convencionais e neutralidade da moeda. Institucionalidade e papel dos sistemas financeiros. Teorias da regulação financeira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE671'],
			color: '#D940AA',
			obligatory: false
		},
		'CE723': {
			code: 'CE723',
			name: 'Economia Financeira',
			ementa: 'Inovações financeiras. Instrumentos derivativos. Processos de Securitização. Agentes e participantes dos mercados. Instrumentos de tomada de decisões e gestão de riscos. Práticas financeiras: internacionalização dos fluxos de capitais, alavancagem, arbitragem e especulação. Os riscos financeiros contemporâneos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE671'],
			color: '#D940AA',
			obligatory: false
		},
		'CE731': {
			code: 'CE731',
			name: 'Econometria II',
			ementa: 'Modelos Univariados de Séries de Tempo e suas aplicações. Processos Estacionários versus Processos não Estacionários. Modelos de volatilidade condicional e heterocedastico. Modelos Multivariados de Séries de Tempo e suas aplicações. Análise de Painel.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE423'],
			color: '#40D979',
			obligatory: false
		},
		'CE742': {
			code: 'CE742',
			name: 'Economia e Estratégia das Empresas',
			ementa: 'Empresa: caracterização e objetivos. Processo de administração estratégica: Análise do Ambiente. Estabelecimento da diretriz organizacional. Missão. Formulação da estratégia. Implementação da estratégia. Controle estratégico. Concorrência e processo competitivo. Inovação, desperdício e expansão de mercados. Estratégia competitiva. Vantagem competitiva. Análise da concorrência. Decisões estratégicas. Estratégia como inovação e ruptura. Estratégias para pequenas empresas. Estratégias para empreendimentos associativos e populares.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9C040',
			obligatory: false
		},
		'CE751': {
			code: 'CE751',
			name: 'Elaboração e Análise de Projetos',
			ementa: 'Crescimento, planejamento econômico e projetos. Estudos do mercado e dos aspectos técnicos do projeto. Estrutura organizacional. Aspectos legais e ambientais. Dimensionamento das grandezas econômicas e financeiras para o período de vigência do projeto. Projeção de receitas e custos. Estimativas de resultados e do investimento. Estudo das fontes de financiamento. Projeção do fluxo de caixa. Métodos de avaliação de projetos: taxa de retorno, análise do fluxo de caixa capitalizado, valor presente líquido, taxa interna de retorno. Avaliação sob a ótima do investidor privado e sob a ótica social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE141', 'CE142', 'CE362'],
			color: '#A67A61',
			obligatory: false
		},
		'CE753': {
			code: 'CE753',
			name: 'Economia do Meio Ambiente',
			ementa: 'Serviços ecossistêmicos e insumos: sustentabilidade e disponibilidade. Falha de mercado e meio ambiente. Elementos para uma macroeconomia ambiental. Valoração de serviços ecossistêmicos. Desenvolvimento econômico e meio ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9D540',
			obligatory: false
		},
		'CE782': {
			code: 'CE782',
			name: 'Economia Internacional IV',
			ementa: 'Globalização produtiva e financeira. A evolução da mobilidade do capital e dos regimes cambiais. O debate sobre a abertura financeira. Hierarquia das moedas. O papel do dólar. Os ciclos de liquidez e os países em desenvolvimento. Crises cambiais. Temas contemporâneos em finanças internacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE682'],
			color: '#8D8D87',
			obligatory: false
		},
		'CE783': {
			code: 'CE783',
			name: 'Metodologia Econômica',
			ementa: 'Introdução à metodologia econômica. Revisão histórica da metodologia econômica. Popper e o falsificacionismo em debate. Realismo dos pressupostos e a economia como instrumento de previsão. Novas perspectivas em racionalidade econômica. Economia como construção de modelos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94055',
			obligatory: false
		},
		'CE823': {
			code: 'CE823',
			name: 'Mercado Bancário',
			ementa: 'Sistema financeiro no Brasil. Bancos privados e públicos no Brasil. Dinâmica dos sistemas financeiros e tendências da regulamentação. Tipologia e gestão de riscos da intermediação financeira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE671'],
			color: '#D940AA',
			obligatory: false
		},
		'CE841': {
			code: 'CE841',
			name: 'Finanças das Empresas',
			ementa: 'Função financeira. Risco e retorno. Ciclo operacional e fundos gerados. Interpretação e análise das demonstrações financeiras. Lucro e valor econômico agregado. Alavancagem operacional e financeira. Administração financeira no curto prazo. Capital de giro na perspectiva estática e na perspectiva dinâmica. Planejamento financeiro no longo prazo. Fluxos de caixa. Métodos de análise de investimentos. Planejamento periódico: orçamento empresarial. Impacto das decisões financeiras na Economia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9B9',
			obligatory: false
		},
		'CE856': {
			code: 'CE856',
			name: 'Tópicos Especiais de Economia I',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94080',
			obligatory: false
		},
		'CE857': {
			code: 'CE857',
			name: 'Tópicos Especiais de Economia II',
			ementa: 'Estudo de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D963',
			obligatory: false
		},
		'CE858': {
			code: 'CE858',
			name: 'Tópicos Especiais de Economia III',
			ementa: 'Estudo de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D940D5',
			obligatory: false
		},
		'CE859': {
			code: 'CE859',
			name: 'Tópicos Especiais de Economia IV',
			ementa: 'Estudo de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#8740D9',
			obligatory: false
		},
		'CE860': {
			code: 'CE860',
			name: 'Tópicos Especiais de Economia V',
			ementa: 'Estudo de tópicos específicos de qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D98E',
			obligatory: false
		},
		'CE861': {
			code: 'CE861',
			name: 'Tópicos Especiais de Economia VI',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9A3',
			obligatory: false
		},
		'CE862': {
			code: 'CE862',
			name: 'Tópicos Especiais de Economia VII',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'CE863': {
			code: 'CE863',
			name: 'Tópicos Especiais de Economia VIII',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40CED9',
			obligatory: false
		},
		'CE864': {
			code: 'CE864',
			name: 'Tópicos Especiais de Economia IX',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40A3D9',
			obligatory: false
		},
		'CE865': {
			code: 'CE865',
			name: 'Tópicos Especiais de Economia X',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser ficado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#404ED9',
			obligatory: false
		},
		'CE866': {
			code: 'CE866',
			name: 'Tópicos Especiais de Economia XI',
			ementa: 'Estudo de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D94E',
			obligatory: false
		},
		'CE867': {
			code: 'CE867',
			name: 'Tópicos Especiais de Economia XII',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5C40D9',
			obligatory: false
		},
		'CE868': {
			code: 'CE868',
			name: 'Tópicos Especiais de Economia XIII',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9CD940',
			obligatory: false
		},
		'CE869': {
			code: 'CE869',
			name: 'Tópicos Especiais de Economia XIV',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#87D940',
			obligatory: false
		},
		'CE870': {
			code: 'CE870',
			name: 'Tópicos Especiais de Economia XV',
			ementa: 'Estudos de tópicos específicos em qualquer área da ciência econômica e da economia brasileira. Conteúdo a ser fixado pelos departamentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#C7D940',
			obligatory: false
		},
		'CE872': {
			code: 'CE872',
			name: 'Macroeconomia Pós-Keynesiana',
			ementa: 'Fundamentos da escola pós-keynesiana. Incerteza e probabilidade. Expectativas e confiança. Convenções. Princípio da Demanda efetiva. Escolha de ativos e acumulação de riqueza. Preferência pela liquidez. Determinantes do investimento. A hipótese da instabilidade financeira. Formação de preços. Inflação. Macroeconomia da economia aberta. Crescimento econômico com restrição do balanço de pagamentos. Política econômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE572'],
			color: '#D940AA',
			obligatory: false
		},
		'CE891': {
			code: 'CE891',
			name: 'Economia Latino-Americana',
			ementa: 'Inserção na divisão internacional do trabalho. Tipologia das economias primário-exportadoras. O pós-guerra e a presença dos Estados Unidos. A atualidade. Características sub-regionais. Alternativas de desenvolvimento. Os anos 80: crise e respostas. Anos 90 e 2000: liberalização e crise.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4063D9',
			obligatory: false
		},
		'CE892': {
			code: 'CE892',
			name: 'Estado e Políticas Públicas',
			ementa: 'Breve abordagem das teorias do Estado. Diversidade de padrões de intervenção estatal. Experiências e instrumentos de políticas públicas setoriais (industrial, infraestrutura, social, agrícola, regional, urbana, etc).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#408ED9',
			obligatory: false
		},
		'CE923': {
			code: 'CE923',
			name: 'Finanças e Mercado de Capitais',
			ementa: 'Teorias microeconômicas das decisões financeiras em situações de incerteza. Teorias das resultantes macroeconômicas no mercado de capitais. Aplicações da teoria da instabilidade financeira a crises. Mercado de capitais brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE671'],
			color: '#D940AA',
			obligatory: false
		},
		'CE939': {
			code: 'CE939',
			name: 'Gestão de Marketing',
			ementa: 'Conceito de Marketing. Mercados e estruturas de mercado. O composto mercadológico. Abordagem a partir da análise, adaptação, ativação e avaliação. Abordagem a partir do produto, preço, promoção, ponto de vista e pós-venda. Mercados específicos: caracterização, análise, tendências. Plano de marketing.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#72D940',
			obligatory: false
		}
	}
};

export default catalogue;
