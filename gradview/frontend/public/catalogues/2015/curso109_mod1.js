const catalogue = {
	totalCredits: 220,
	maxCreditsSem: 46,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GL101', 'GL403', 'GL100', 'NC400', 'MG100', 'NC103']
		},
		'sem-2': {
			id: '2',
			subjects: ['ELET02', 'GL203', 'GL201', 'GL302', 'GL200']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL202', 'GL300', 'GL301', 'ELET03', 'NC301']
		},
		'sem-4': {
			id: '4',
			subjects: ['GL600', 'GL603', 'ER401', 'GL400', 'ER201', 'MG400']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL502', 'ELET05', 'MG500', 'LE702', 'MG501']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'NC100', 'MG600', 'GL608', 'MG601', 'GL900']
		},
		'sem-7': {
			id: '7',
			subjects: ['GL700', 'GL701', 'MG900', 'GL601', 'ELET07', 'GL702', 'GL501']
		},
		'sem-8': {
			id: '8',
			subjects: ['GL800', 'GL801', 'LE803', 'MG810', 'MG811', 'MG812', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['NC---'],
		},
		'elet-2': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['AG---', 'CG---', 'GL---', 'MG---', 'PG---'],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'GL100': {
			code: 'GL100',
			name: 'Matemática I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8046B9',
			obligatory: true
		},
		'GL101': {
			code: 'GL101',
			name: 'Introdução à Economia',
			ementa: 'Dimensão histórica e social da economia. Origens e fundamentos da moderna economia capitalista. Microeconomia x Macroeconomia. Estudo dos agregados econômicos: PIB, Demanda Agregada e Renda Nacional. Mercado de trabalho. Consumo. Investimento. Governo: receitas e despesas. Moeda e juros. Setor Externo: balanço de pagamentos e câmbio.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94680',
			obligatory: true
		},
		'GL403': {
			code: 'GL403',
			name: 'Instituições de Direito',
			ementa: 'A Sociedade e o Direito.Noções de Direito: direito e justiça. Ramos do Direito. Noções de Direito público, Direito Constitucional, Direito Administrativo, Direito Tributário, Direito Penal. Noções de Direito Privado: Direito Civil, Comercial e do Trabalho.Normas jurídicas: conceito e classificação: vigência e eficácia; irretroatividade e interpretação. Constituição. Conceito. Espécies. Rigidez. Emenda constitucional. Estado. Conceito. Elementos. Fins, Personalidade jurídica. Formas de Estado e de Governo. Regimes governamentais. República como princípio básico do direito brasileiro. Estado de Direito. Garantias do regime republicano-representativo. O princípio da divisão dos poderes. Instrumentos e condições da República. Órgão do Estado. Premissas do regime republicano, no direito positivo brasileiro. os direito humanos. Constituição econômica. Poder de polícia. Pessoa física. Pessoa jurídica. Bens. Conceito. Classificações. Negócio jurídico: existência (categorias do N.J.): validade (requisitos de validade) e eficácia do N.J. (fatores de eficácia ou ineficácia tais como prescrição, decadência, condições, termo). Direitos personalíssimos e patrimoniais; reais e obrigacionais. Propriedade, direitos reais sobre coisas alheias.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'MG100': {
			code: 'MG100',
			name: 'Introdução a Administração',
			ementa: 'História da administração no Brasil. A profissão do administrador. Regulamentação da profissão no Brasil. Áreas de atuação do administrador. A importância do agronegócio e o gestor do agronegócio no Brasil. O administrador empreendedor. A importância do comércio internacional e o gestor de negócios internacionais no Brasil. Tendências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B946',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B99C',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9CB946',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'O valor da moeda no tempo. Capitalização simples. Capitalização composta. Desconto. Inflação. Séries de pagamentos. Sistemas de amortização. Decisões e análise de investimentos. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94663',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Derivada e aplicações. Integral e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#8046B9',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial. Novo cenário contábil segundo pronunciamentos do CPC.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B980',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Discutir as principais teorias sobre a administração. Avaliar as diferentes abordagens adotadas pelo pensamento em gestão. Conhecer e discutir a base teórica que funda as correntes do pensamento em gestão e estabelecer relações críticas com as ditas correntes, sendo capaz de avaliar o uso de técnicas e instrumentos de gestão nos contextos históricos, econômicos e sociais em que foram gerados e difundidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'Mercado: demanda, oferta e equilíbrio. Teoria do consumidor. Curvas de demanda. Produção: tecnologia e custos. Estruturas de mercado: concorrência perfeita, monopólio, concorrência imperfeita e oligopólio. Modelos de mark-up. Noções de Teoria dos Jogos e estratégia competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#B94680',
			obligatory: true
		},
		'GL300': {
			code: 'GL300',
			name: 'Contabilidade II',
			ementa: 'Estrutura das Demonstrações Contábeis. Aplicações da Análise de Balanços e seus usuários. Análise financeira e indicadores. Análise Vertical. Análise Horizontal. Contabilidade de Custos. Contabilidade Gerencial x Financeira. Métodos de Custeio. Custos por Departamento. Custeio baseado em Atividades (ABC). Custos para tomada de decisão. Custeio Variável. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão. Noções de auditoria interna e externa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#46B980',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Noções de amostragem. Estatística descritiva: métodos gráficos, medidas de tendência central e medidas de dispersão. Introdução à probabilidade. Variáveis aleatórias discretas. Variáveis aleatórias contínuas. Distribuição normal. Análise de correlação. Regressão linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*GL201'],
			color: '#8046B9',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#63B946',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ER201': {
			code: 'ER201',
			name: 'Gestão Sustentável',
			ementa: 'Conceito de gestão sustentável e desenvolvimento sustentável. Planejamento, gestão e desempenho sustentável de organizações públicas e privadas. Políticas e legislação para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e metodologias de gestão sustentável. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#9CB946',
			obligatory: true
		},
		'ER401': {
			code: 'ER401',
			name: 'Pesquisa Operacional',
			ementa: 'Revisão de conceitos de álgebra linear e cálculo. Introdução a problemas de otimização e suas propriedades básicas: problemas de otimização irrestritos e com restrição. Programação Linear, formulação, resolução geométrica, o método simplex, dualidade e interpretação econômica. Modelos de fluxo em rede, problemas de transporte, caminho mínimo e fluxo máximo. Programação inteira. Programação por restrições. Programação Multi-objetivo. Simulação de Monte Carlo e de eventos discretos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL201'],
			color: '#8046B9',
			obligatory: true
		},
		'GL400': {
			code: 'GL400',
			name: 'Estatística II',
			ementa: 'Distribuições amostrais. Estatística Inferencial: introdução à estimação, testes de hipóteses, análise de variância. Controle estatístico de processo. Introdução à teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#8046B9',
			obligatory: true
		},
		'GL600': {
			code: 'GL600',
			name: 'Estudos de Mercado e Marketing',
			ementa: 'Evolução do pensamento em marketing. Relação do marketing com as outras funções da organização. Comportamento do consumidor. Composto mercadológico. Pesquisa de mercado. Identificação de oportunidades. Dimensões do produto: qualidade, desing, embalagem, marca, preço. Estratégia promocional. Propaganda. Distribuição. Segmentação de mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['GL202'],
			color: '#B94680',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#B94680',
			obligatory: true
		},
		'MG400': {
			code: 'MG400',
			name: 'Direito para Administração I',
			ementa: 'O direito comercial no Brasil: Conceito e regime jurídico da empresa mercantil; Atividade empresarial. Empresa, empresário e estabelecimento. Regime jurídico da contabilidade comercial. Sociedade e empresa. Direito e deveres dos sócios. Direito Societário. Noções de Direito falimentar. Mercado de Capitais. Legislação Tributária: conceito, objeto e conteúdo. O Sistema Tributário nacional. Incidência, não incidência, imunidade e isenção tributária. Os impostos. As taxas. O poder de polícia. Os serviços, sua especificidade e divisibilidade. Contribuições especiais. Contribuição de melhoria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4680B9',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o séc. XIX até os anos 30. O processo de industrialização: criação da indústria de base, restrições e o Plano de Metas. As reformas institucionais e a retomada do crescimento: PAEG, Milagre Econômico e II PND. Anos 80: crise, instabilidade e estagnação. Inflação e planos de estabilização. Anos noventa: abertura da economia e reforma do Estado. O Plano Real. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e padrão de financiamento.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#B94680',
			obligatory: true
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da gestão de pessoas nas empresas. A gestão de RH e seus objetivos, políticas e estratégias. Histórico de gestão de pessoal. Gestão estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: qualidade de vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4663B9',
			obligatory: true
		},
		'MG500': {
			code: 'MG500',
			name: 'Gestão de Operações',
			ementa: 'Tipos e evolução de sistemas de produção. Gestão de operações em serviços. Relacionamento da produção com as demais áreas da organização. Projeto de produto e processo. Arranjo físico e fluxo. Capacidade produtiva. Planejamento, programação e controle da produção. Previsão de demanda. Gestão de estoques. Sistemas de gestão da produção.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#8046B9',
			obligatory: true
		},
		'MG501': {
			code: 'MG501',
			name: 'Administração Financeira I',
			ementa: 'Introdução às finanças corporativas. Papel do gestor financeiro. Sistema Financeiro Nacional. Produtos financeiros e financiamento corporativo. Avaliação de papéis de renda fixa e variável. Gestão do capital circulante e da necessidade do capital de giro. Gestão de tesouraria. Papel do crédito. Administração do passivo circulante. Análise de demonstrações financeiras. Medidas de criação de valor.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL200'],
			color: '#B94663',
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
		'GL608': {
			code: 'GL608',
			name: 'Administração de Sistemas de Informação',
			ementa: 'Introdução à Tecnologia da informação (TI). Introdução aos conceitos de Sistemas e de Sistemas de informação (SI). Relação entre os SI e os processos de negócio e o desempenho organizacional. Elementos básicos da utilização de SI e nos novos ambientes eletrônicos de negócios. Oportunidades, limitações e desafios para o desenvolvimento de atividades e negócios na era digital. Tipologias de SI. Planejamento e a gestão dos investimentos e da implantação de TI e SI na organização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#9CB946',
			obligatory: true
		},
		'GL900': {
			code: 'GL900',
			name: 'Metodologia de Pesquisa em Administração',
			ementa: 'Abordagens de pesquisa em Administração. Particularidades e conceitos da pesquisa em Administração. Tipos de pesquisa. Métodos de coleta, processamento e análise de dados e informações. Como escrever um projeto de pesquisa e de monografia: estrutura, objetivos e redação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#6346B9',
			obligatory: true
		},
		'MG600': {
			code: 'MG600',
			name: 'Gestão da Cadeia de Suprimentos',
			ementa: 'Fundamentos de logística e de logística integrada. Gestão de redes e integração da cadeia de suprimentos. Iniciativas, práticas e medição de desempenho. Papel da tecnologia na gestão da cadeia de suprimentos. Efeito Chicote. Gesta&#771;o da cadeia de suprimentos global e riscos. Tendências em gestão da cadeia de suprimentos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MG500'],
			color: '#8046B9',
			obligatory: true
		},
		'MG601': {
			code: 'MG601',
			name: 'Administração Financeira II',
			ementa: 'Orçamento de Capital. Projeções de receitas, custos e despesas. Orçamento de investimentos. Critérios de Avaliação de Investimento. Valor Presente Líquido. Taxa Interna de Retorno. Payback simples. Payback descontado. Estrutura de Capital. Políticas de dividendos. Custo do Capital próprio. Custo do capital de terceiros. Custo médio ponderado de capital (WACC). Avaliação de Empresas. Introdução aos Derivativos. Fusões e aquisições.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MG501'],
			color: '#B94663',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99C46',
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
		'GL501': {
			code: 'GL501',
			name: 'Mercado Financeiro e de Capitais',
			ementa: 'Estrutura do sistema financeiro brasileiro. Instrumentos de atuação do Banco Central. Mercado bancário e interbancário: principais produtos e serviços. Mercado de renda variável. Mercado de renda fixa. Underwriting, Ações, ADR e BDR. Bolsa de valores. Bolsa de Mercadorias. Derivativos. Commercial papers e Debêntures. Securitização. Captação de recursos no exterior (Eurobonds e Euronotes) Leasing. Factoring. Mercado de câmbio. Fundos de investimento. Seguros. Governança Corporativa. Risco de Mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['GL200'],
			color: '#B94663',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento estratégico. Níveis de planejamento. Formulação, implementação e avaliação estratégica. Estratégias e vantagem competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#9CB946',
			obligatory: true
		},
		'GL700': {
			code: 'GL700',
			name: 'Trabalho de Conclusão I',
			ementa: 'Orientação, supervisão e avaliação do Estágio realizado nas Organizações. Caracterização da organização. A situação problemática na organização e o Problema de Pesquisa. Relatório parcial de pesquisa na organização.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA458'],
			color: '#B96346',
			obligatory: true
		},
		'GL701': {
			code: 'GL701',
			name: 'Estágio I',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA458'],
			color: '#4646B9',
			obligatory: true
		},
		'GL702': {
			code: 'GL702',
			name: 'Elaboração de Projetos',
			ementa: 'Conceitos básicos sobre projetos, planos de negócios e empreendedorismo. Aspectos administrativos, legais, mercadológicos, técnicos, econômicos e financeiros. Custo e financiamento. Estudo de viabilidade. Análise de risco. Elaboração de projeto ou plano de negócio.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA450'],
			color: '#B9469C',
			obligatory: true
		},
		'MG900': {
			code: 'MG900',
			name: 'Empreendedorismo',
			ementa: 'O empreendimento e o empreendedor. Tipos de empreendimentos. Processo de empreender. Modelo de negócios. Plano de negócios. Novas tendências em empreendedorismo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#9CB946',
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
		'GL800': {
			code: 'GL800',
			name: 'Trabalho de Conclusão II',
			ementa: 'Fase complementar de orientação, supervisão e avaliação do Estágio Curricular nas Organizações. A execução do projeto de pesquisa. Coleta de dados. Elaboração de Relatório Final de Pesquisa. Sumário, Resumo e Introdução. Revisão Bibliográfica. Metodologia, análise e interpretação dos dados coletados. Considerações finais. Apêndices e anexos. Normas ABNT para apresentação de trabalhos acadêmicos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['GL700'],
			color: '#B96346',
			obligatory: true
		},
		'GL801': {
			code: 'GL801',
			name: 'Estágio II',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['GL701'],
			color: '#4646B9',
			obligatory: true
		},
		'LE803': {
			code: 'LE803',
			name: 'Gestão de Qualidade',
			ementa: 'Histórico da qualidade. Conceituação de sistemas de gerenciamento da qualidade. Normas e certificações. Política da qualidade. Custos da qualidade. Novas abordagens sobre qualidade. Ferramentas da qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL301'],
			color: '#8046B9',
			obligatory: true
		},
		'MG810': {
			code: 'MG810',
			name: 'Gestão da Inovação',
			ementa: 'Inovação como instrumento de concorrência. Tipos de inovação: condicionantes e impactos. Desenvolvimento, incorporação e difusão de inovações. Sistemas de inovação. Propriedade intelectual. Financiamento da inovação. Instrumentos e ferramentas de gestão da inovação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL601'],
			color: '#9CB946',
			obligatory: true
		},
		'MG811': {
			code: 'MG811',
			name: 'Direito para Administração II',
			ementa: 'Direito do Trabalho: conceito, características. Contrato de emprego: denominação, conceito, classificação, caracterização. Trabalho ilícito e trabalho proibido. Direitos intelectuais. Função de confiança. Repousos. Remuneração e salário: conceito, distinções. Gorjetas. Caracteres e classificação do salário. Desvio de função. Alteração do contrato de emprego. Alteração unilateral e bilateral. Transferência de local de trabalho. Promoção e rebaixamento. Alteração de horário de trabalho. Redução de remuneração. Interrupção e suspensão do contrato de trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9C46B9',
			obligatory: true
		},
		'MG812': {
			code: 'MG812',
			name: 'Controladoria',
			ementa: 'Função da controladoria. Modelos de gestão e controladoria. Teoria da agência e governança corporativa. Sistemas de informação gerencial. Métodos de custeio e controle gerencial.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['MG501'],
			color: '#B94663',
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
		'AG---': {
			code: 'AG---',
			name: 'Qualquer Disciplina com codigo AG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B963',
			obligatory: false
		},
		'CG---': {
			code: 'CG---',
			name: 'Qualquer Disciplina com codigo CG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B98046',
			obligatory: false
		},
		'GL---': {
			code: 'GL---',
			name: 'Qualquer Disciplina com codigo GL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'MG---': {
			code: 'MG---',
			name: 'Qualquer Disciplina com codigo MG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#469CB9',
			obligatory: false
		},
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		},
		'PG---': {
			code: 'PG---',
			name: 'Qualquer Disciplina com codigo PG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo PG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946B9',
			obligatory: false
		}
	}
};

export default catalogue;
