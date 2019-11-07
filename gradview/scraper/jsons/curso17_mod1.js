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
			subjects: ['CE442', 'CE562', 'CE572', 'CE582', 'CE591', 'CE671', 'ELET4']
		},
		'sem-6': {
			id: '6',
			subjects: ['CE592', 'CE625', 'CE672', 'CE682', 'CE791', 'CE853', 'ELET4']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE593', 'CE725', 'CE792', 'ELET8']
		},
		'sem-8': {
			id: '8',
			subjects: ['CE542', 'CE825', 'ELET8']
		}
	},

	subjects: {
		'CE105': {
			code: 'CE105',
			name: 'Fundamentos da Teoria Econômica',
			ementa: 'Ciência e modos de conhecimento. Filosofia e teoria do conhecimento. Concepções de ciência. A ciência como prática social. A teoria econômica como ciência, como técnica e como ideologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'CE141': {
			code: 'CE141',
			name: 'Contabilidade e Análise de Balanço',
			ementa: 'A empresa e a tomada de decisões. Funções da contabilidade. Relatórios Contábeis. Balanço Patrimonial. Regimes de contabilidade. Demonstração do Resultado do Exercício. Demonstração dos lucros e prejuízos acumulados. Demonstração das mutações do patrimônio líquido. Demonstração das origens e aplicações de recursos. Demonstração dos fluxos de caixa. Análise das demonstrações financeiras e indicadores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CE142': {
			code: 'CE142',
			name: 'Métodos de Análise Econômica I',
			ementa: 'Determinação de custos. Gasto, custo, despesa, investimento, desembolso. Estrutura de custos. Análise econômica de custos. Métodos para determinação de custos de produtos. Determinação do preço de venda a partir do custo. Valor do dinheiro no tempo. Capitalização simples: juros simples, montante e valor atual. Desconto comercial e desconto racional. Capitalização composta. Juros compostos e montante de pagamento único. Taxas efetivas e equivalentes. Séries não uniformes e uniformes. Anuidades perpétuas. Decisões de investimento e fluxo de caixa. Valor presente líquido e taxa interna de retorno',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CE172': {
			code: 'CE172',
			name: 'Introdução à Economia',
			ementa: 'A economia de mercado, origens e destino da produção. A circulação numa economia de mercado. As relações econômicas internacionais. O setor público. O sistema financeiro. A unidade produtora, sua inserção no sistema. Repartição e apropriação do produto social.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'CE191': {
			code: 'CE191',
			name: 'História Econômica Geral I',
			ementa: 'Feudalismo. Formação do sistema capitalista. O antigo regime econômico: o capital comercial. O antigo regime político e social. O antigo sistema colonial. Revoluções burguesas. Revolução industrial. A hegemonia inglesa e a nova divisão internacional do trabalho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
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
		'CE112': {
			code: 'CE112',
			name: 'Economia Matemática II',
			ementa: 'Operações com vetores. Produto escalar. Equações de reta e plano. Funções de várias variáveis reais. Limites e continuidade. Derivadas parciais de funções de duas ou mais variáveis. Funções diferenciáveis. Diferencial. Vetor gradiente. Teorema das funções implícitas. Derivadas parciais de ordens superiores. Aplicações em análise estática comparativa. Otimização de funções de várias variáveis: não condicionada e condicionada.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'CE205': {
			code: 'CE205',
			name: 'Ciências Sociais para Economia',
			ementa: 'O surgimento do Estado Moderno, os contratualistas e a questão do poder e da legitimidade. O projeto iluminista e a emergência da sociedade capitalista: Marx, Weber e Durkheim. A sociedade contemporânea: mudanças estruturais e a contestação do projeto iluminista. Novos atores, novas identidades, novos conflitos, crise de valores, desafio da ordem e da mudança em sociedades fragmentadas e multiculturais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CE242': {
			code: 'CE242',
			name: 'Métodos de Análise Econômica II',
			ementa: 'Análise de Dados Econômicos-Sociais. Deflacionamento de séries. Índices de Preços. Construção de Indicadores da Situação Econômico-Social: Medidas de Desigualdade, de Concentração e de Pobreza.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE172']
		},
		'CE262': {
			code: 'CE262',
			name: 'Microeconomia I',
			ementa: 'Mercado: oferta, demanda e equilíbrio. Comportamento do consumidor. Demanda individual e de mercado. Produção e custos de produção. Equilíbrio em mercados competitivos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'CE272': {
			code: 'CE272',
			name: 'Contabilidade Social',
			ementa: 'Contabilidade nacional: definição e mensuração dos agregados. Gastos e determinação da renda. Consumo, poupança e investimento. Moeda, crédito e taxa de juros. Preferência pela liquidez. As condições de equilíbrio macroeconômico em uma economia aberta e com governo. Taxas de juros e taxa do câmbio em uma economia aberta. Crescimento e distribuição da renda. Análise aplicada das Contas Econômicas Integradas (CEI) e da Tabela de Recursos e Usos (TRU) divulgadas pelo IBGE.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE172']
		},
		'CE291': {
			code: 'CE291',
			name: 'História Econômica Geral II',
			ementa: 'A construção da hegemonia britânica. Sociedade e política no século XIX. As industrializações atrasadas. Do imperialismo à grande guerra. Revolução russa. Economia mundial no entreguerras. Crise do liberalismo. A segunda-guerra mundial e Bretton Woods. Guerra fria. Economia mundial pós-segunda guerra. Direitos e democracia. Revolução cultural no ocidente. Mundo do trabalho. Socialismo real. Periferia. Década de crise. Fim do socialismo. Balanço e perspectiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE191']
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'CE113': {
			code: 'CE113',
			name: 'Economia Matemática III',
			ementa: 'Vetores e Matrizes. Sistemas de Equações Lineares. Combinação Linear. Dependência e Independência Linear. Transformação Linear. Autovalores e Autovetores. Matriz Diagonalizável. Modelos Dinâmicos e Cálculo Integral. Sistemas Dinâmicos com uma variável de estado. Equações em Diferenças e Equações Diferenciais. Modelos dinâmicos e equações simultâneas: Sistemas de Equações em Diferenças e Sistemas de Equações Diferenciais. Aplicações em Economia: Modelos de Crescimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE112']
		},
		'CE302': {
			code: 'CE302',
			name: 'Instituições de Direito',
			ementa: 'Direito Econômico: regulação jurídica da economia. Meio ambiente, consumidor, concorrência e direito de propriedade. Setores da economia: telecomunicações, gás e petróleo, sistema financeiro, agricultura, indústria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'CE305': {
			code: 'CE305',
			name: 'Economia Política I',
			ementa: 'O nascimento da economia política. Os fisiocratas e a noção de excedente econômico. Smith e a idéia de ordem natural. Smith: teoria do valor e divisão do trabalho. Ricardo: teoria do valor e da distribuição. Ricardo e a visão da crise capitalista. Marx: valor, dinheiro e valorização. Processo de trabalho e valorização em Marx. Reprodução simples e acumulação de capital em Marx. Marx e a lei geral da acumulação capitalista.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE105', 'CE205']
		},
		'CE323': {
			code: 'CE323',
			name: 'Estatística Econômica e Introdução à Econometria',
			ementa: 'Inferência Estatística: Propriedades dos estimadores. Estimadores pontuais. Intervalos de confiança e testes de hipóteses. Análise de variância. Coeficiente de correlação. Regressão linear simples. Análise de variância da regressão. Intervalo de previsão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414']
		},
		'CE362': {
			code: 'CE362',
			name: 'Microeconomia II',
			ementa: 'Monopólio. Oligopólio e concorrência monopolística. Teoria dos jogos. Escolha intertemporal, incerteza e informação. Equilíbrio geral.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE262']
		},
		'CE372': {
			code: 'CE372',
			name: 'Macroeconomia I',
			ementa: 'Determinação do emprego e da produção no modelo clássico. Princípio da demanda efetiva. Determinação da produção, emprego e renda em Keynes. Determinação da renda em Kalecki. Análise macroeconômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE242', 'CE272']
		},
		'CE391': {
			code: 'CE391',
			name: 'Desenvolvimento Socioeconômico',
			ementa: 'Desenvolvimento e subdesenvolvimento. O pensamento cepalino. A questão da revolução democrática burguesa. Teorias da dependência. O desenvolvimento associado. Contribuições teóricas mais recentes sobre desenvolvimento e subdesenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE291']
		},
		'CE342': {
			code: 'CE342',
			name: 'Métodos de Análise Econômica III',
			ementa: 'Modelos macroeconômicos e aplicações. Modelos macroeconômicos híbridos utilizados por bancos centrais e aplicações.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE372']
		},
		'CE405': {
			code: 'CE405',
			name: 'Economia Política II',
			ementa: 'Marx: realização da mais-valia e os esquemas de reprodução. Valores e preços de produção em Marx. Lei da tendência à queda da taxa de lucro em Marx. Dinheiro, capital a juros e capital fictício em Marx. Hilferding e o capital financeiro. A discussão contemporânea sobre o capital fictício e crises financeiras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE305']
		},
		'CE423': {
			code: 'CE423',
			name: 'Econometria I',
			ementa: 'Econometria e economia. Regressão Linear Múltipla. Variáveis Binárias. Violação das Hipóteses. Equações Simultâneas. Estimando e testando hipóteses em modelos de regressão linear. Aplicações em Economia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE113', 'CE323']
		},
		'CE462': {
			code: 'CE462',
			name: 'Microeconomia III',
			ementa: 'Equilíbrio geral e falhas de mercado. Informações assimétricas: seleção adversa, sinalização de mercado, risco moral e o problema da relação agente e principal. Externalidades e bens públicos. Teoria da regulação e defesa da concorrência. A firma nos enfoques neoclássico, transacional e da teoria da agência. Mecanismos de coordenação e preços de transferência. Motivação e incentivos. Estratégia, estrutura e resultado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE362']
		},
		'CE472': {
			code: 'CE472',
			name: 'Macroeconomia II',
			ementa: 'Modelo keynesiano simplificado. Modelo IS-LM em economia fechada e aberta. Curvas de oferta agregada e demanda agregada em economia fechada e aberta. Curva de Phillips. Política econômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE372']
		},
		'CE482': {
			code: 'CE482',
			name: 'Economia Internacional I',
			ementa: 'Origens da teoria do comércio internacional. Modelos de comércio internacional: vantagens corporativas (abordagem ricardiana, Heckscher-Ohlin), modelo de concorrência imperfeita. Visões críticas aos modelos convencionais: cepalina e evolucionista. Instrumentos de política comercial e economia política da política comercial. Institucionalidade e regulação do comércio multilateral. Acordos de integração comercial. Teoria do investimento direto externo. Internacionalização comercial e produtiva e empresas transnacionais. Países em desenvolvimento e as redes globais e regionais de produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE362']
		},
		'CE491': {
			code: 'CE491',
			name: 'Formação Econômica do Brasil I',
			ementa: 'A especificidade de Portugal nos quadros da expansão comercial européia. A economia mercantil-escravista colonial. A crise do antigo sistema colonial. A economia mercantil-escravista cafeeira nacional. A crise do escravismo e a emergência do mercado de trabalho assalariado. Estado, indústria e agricultura. A dinâmica da acumulação: capital cafeeiro e capital industrial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE391']
		},
		'CE442': {
			code: 'CE442',
			name: 'Métodos de Análise Econômica IV',
			ementa: 'Séries Temporais: Estacionariedade, Processo Auto-Regressivo Média Móvel. Raiz Unitária e Cointegração. Simulação de modelos. Desenvolvimento de modelos de séries temporais. Aplicações em economia.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CE423']
		},
		'CE562': {
			code: 'CE562',
			name: 'Microeconomia IV',
			ementa: 'Crítica à abordagem neoclássica da concorrência. A abordagem estrutura-conduta-desempenho e a contribuição de Steindl. Inovação e concorrência na abordagem neo-schumpeteriana. A empresa como agente da concorrência. Estratégias de crescimento das empresas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE462']
		},
		'CE572': {
			code: 'CE572',
			name: 'Macroeconomia III',
			ementa: 'Tópicos da política macroeconômica. Crescimento e ciclo econômico. A contribuição de Harrod e da escola de Cambridge. O modelo de Solow. Modelos de crescimento endógeno. Restrição e comércio exterior. Crescimento e abertura financeira. Crescimento e distribuição da renda. Crescimento em modelos heterodoxos de consistência entre fluxos e estoques. Análises aplicadas dos modelos apresentados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE342', 'CE472']
		},
		'CE582': {
			code: 'CE582',
			name: 'Economia Internacional II',
			ementa: 'O padrão-ouro e a estabilidade do sistema monetário internacional. O período entreguerras e fracionamento da economia mundial: Grande Depressão. Bretton Woods e hegemonia americana após a segunda grande guerra: reorganização do sistema monetário internacional. Padrão de produção das economias avançadas: reconstrução da Europa e do Japão. Processo de internacionalização e nova divisão internacional do trabalho. Euromercado e crise do dólar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE291', 'CE482']
		},
		'CE591': {
			code: 'CE591',
			name: 'Formação Econômica do Brasil II',
			ementa: 'Expansão da economia cafeeira e gênese da industrialização. Crise da divisão internacional do trabalho e mudança no padrão de crescimento. Industrialização restringida. Estado, indústria e agricultura. Internacionalização dos mercados internos e industrialização pesada. Distribuição de renda. A crise dos anos 1960.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE491']
		},
		'CE671': {
			code: 'CE671',
			name: 'Economia Monetária',
			ementa: 'Moeda: caracterização e evolução histórica. Fundamentos da teoria monetária: demanda por moeda e oferta de moeda endógena. Taxa de juros. Moeda e dinâmica econômica: a hipótese de instabilidade financeira. Política monetária: fundamentos, operacionalidade e mecanismos de transmissão. Sistemas e mercados financeiros: mercado de crédito, mercado de capitais, instrumentos de cobertura de riscos, regulamentação e supervisão. Sistema financeiro brasileiro.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE342', 'CE472']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'CE592': {
			code: 'CE592',
			name: 'Economia Brasileira Contemporânea I',
			ementa: 'As reformas institucionais da ditadura militar e a retomada do crescimento. O ciclo expansivo: retomada, auge e inflexão. Estado, indústria e agricultura. Distribuição de renda. o novo quadro internacional e o II PND. Choques externos, crise e ajustamento na primeira metade dos anos 80.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE591']
		},
		'CE625': {
			code: 'CE625',
			name: 'Técnicas de Pesquisa',
			ementa: 'Métodos de investigação científica. Elaboração de projetos de pesquisa. Assessoramento ao aluno na escolha do tema de monografia e orientador. Elaboração do projeto de monografia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450']
		},
		'CE672': {
			code: 'CE672',
			name: 'Estratégias Corporativas e Financeirização',
			ementa: 'Conceitos básicos de finanças das corporações: risco, retorno e orçamento de capital. Decisões de estrutura de capital. Governança corporativa, mercado financeiro e desenvolvimento econômico. Visões alternativas do processo de financeirização. Financeirização e impactos sobre as estratégias das Corporações. Estratégia Shareholder Value. Gestão das estruturas de capital e de ativos das grandes corporações brasileiras. Padrão e instrumentos de financiamento das empresas não financeiras (ENF) no Brasil.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE141', 'CE142', 'CE562']
		},
		'CE682': {
			code: 'CE682',
			name: 'Economia Internacional III',
			ementa: 'Contradições de Bretton Woods e dilemas da economia americana nos anos 1970. Crise do padrão de produção americano. A expansão do capital financeiro internacional nos anos 1970 e a crise da dívida externa dos países em desenvolvimento. Retomada da hegemonia americana: política do dólar forte e coordenação macroeconômica nos anos 1980. Regime dólar flexível e formação de zona monetária européia e da área de influência do iene. Inserção financeira e comercial dos países em desenvolvimento. Principais tendências da economia mundial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE582']
		},
		'CE791': {
			code: 'CE791',
			name: 'História do Pensamento Econômico',
			ementa: 'Significados da história do pensamento econômico. Economia clássica e a matriz liberal. Consolidação da economia neoclássica até os anos 30. Evolução das teorias macroeconômica e microeconômica no século 20.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE405', 'CE671']
		},
		'CE853': {
			code: 'CE853',
			name: 'Economia do Setor Público',
			ementa: 'Política fiscal: visões teóricas. O papel do Estado. Sistema tributário: conceitos básicos, tipos de impostos e carga tributária. Sistema tributário brasileiro: evolução recente. Orçamento público e política orçamentária. Federalismo fiscal. Déficit e dívida pública. Política fiscal e finanças públicas no Brasil: evolução recente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE591']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'CE593': {
			code: 'CE593',
			name: 'Economia Brasileira Contemporânea II',
			ementa: 'Restrição externa, semiestagnação e inflação nos anos oitenta. Reformas estruturais nos anos noventa. Estabilidade monetária e semi-estagnação. Inserção externa. Reestruturação produtiva. Pobreza e distribuição de renda. Movimento recente da economia brasileira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE592']
		},
		'CE725': {
			code: 'CE725',
			name: 'Monografia I',
			ementa: 'O aluno deverá realizar trabalho individual de pesquisa supervisionado por um professor orientador, embasado no projeto elaborado na disciplina Técnicas de Pesquisa.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['CE625']
		},
		'CE792': {
			code: 'CE792',
			name: 'Desenvolvimento Econômico Contemporâneo',
			ementa: 'A problemática do desenvolvimento econômico: conceitos e indicadores. A economia política do desenvolvimento, pioneiros e a tradição cepalina. O resgate do desenvolvimento. Novas visões do desenvolvimento. Variedades do capitalismo. Padrões e estilos de desenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE391', 'CE682']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'CE542': {
			code: 'CE542',
			name: 'Métodos de Análise Econômica V',
			ementa: 'Métodos e Instrumentos de análise de conjuntura econômica. Indicadores de instituições nacionais e multilaterais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE593']
		},
		'CE825': {
			code: 'CE825',
			name: 'Monografia II',
			ementa: 'Continuação do trabalho desenvolvido na disciplina Monografia I.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['CE725']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;
