const catalogue = {
	totalCredits: 202,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GL100', 'GL101', 'GL604', 'NC103', 'NC400']
		},
		'sem-2': {
			id: '2',
			subjects: ['GL201', 'GL202', 'GL203', 'NC100', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL300', 'GL301', 'GL302', 'GL600', 'NC301']
		},
		'sem-4': {
			id: '4',
			subjects: ['GL200', 'GL400', 'GL403', 'GL603', 'LE702', 'LE803']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL501', 'GL502', 'GL504', 'GL505', 'GL506', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['ER200', 'GL601', 'GL602', 'GL605', 'GL606', 'GL607', 'GL900']
		},
		'sem-7': {
			id: '7',
			subjects: ['AG701', 'AG702', 'AG703', 'AG706', 'GL700', 'GL701', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['AG800', 'AG801', 'AG805', 'GL800', 'GL801', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
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
		'GL100': {
			code: 'GL100',
			name: 'Matemática I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B3D9',
			obligatory: true
		},
		'GL101': {
			code: 'GL101',
			name: 'Introdução à Economia',
			ementa: 'Dimensão histórica e social da economia. Origens e fundamentos da moderna economia capitalista. Microeconomia x Macroeconomia. Estudo dos agregados econômicos: PIB, Demanda Agregada e Renda Nacional. Mercado de trabalho. Consumo. Investimento. Governo: receitas e despesas. Moeda e juros. Setor Externo: balanço de pagamentos e câmbio.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'GL604': {
			code: 'GL604',
			name: 'Sistemas de Informação e Gestão do Conhecimento',
			ementa: 'Tecnologia da informação. Sistemas de informação. O conhecimento como ativo da empresa. Gestão do conhecimento: criação, fluxo e disseminação de conhecimento. Aprendizado organizacional. Impactos na competitividade e na organização da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#66D940',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#408CD9',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Derivada e aplicações. Integral e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#40B3D9',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'Mercado: demanda, oferta e equilíbrio. Teoria do consumidor. Curvas de demanda. Produção: tecnologia e custos. Estruturas de mercado: concorrência perfeita, monopólio, concorrência imperfeita e oligopólio. Modelos de mark-up. Noções de Teoria dos Jogos e estratégia competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#40D940',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial. Novo cenário contábil segundo pronunciamentos do CPC.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8C40D9',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D966',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D9B340',
			obligatory: true
		},
		'GL300': {
			code: 'GL300',
			name: 'Contabilidade II',
			ementa: 'Estrutura das Demonstrações Contábeis. Aplicações da Análise de Balanços e seus usuários. Análise financeira e indicadores. Análise Vertical. Análise Horizontal. Contabilidade de Custos. Contabilidade Gerencial x Financeira. Métodos de Custeio. Custos por Departamento. Custeio baseado em Atividades (ABC). Custos para tomada de decisão. Custeio Variável. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão. Noções de auditoria interna e externa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#8C40D9',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Noções de amostragem. Estatística descritiva: métodos gráficos, medidas de tendência central e medidas de dispersão. Introdução à probabilidade. Variáveis aleatórias discretas. Variáveis aleatórias contínuas. Distribuição normal. Análise de correlação. Regressão linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*GL201'],
			color: '#40B3D9',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Discutir as principais teorias sobre a administração. Avaliar as diferentes abordagens adotadas pelo pensamento em gestão. Conhecer e discutir a base teórica que funda as correntes do pensamento em gestão e estabelecer relações críticas com as ditas correntes, sendo capaz de avaliar o uso de técnicas e instrumentos de gestão nos contextos históricos, econômicos e sociais em que foram gerados e difundidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98C40',
			obligatory: true
		},
		'GL600': {
			code: 'GL600',
			name: 'Estudos de Mercado e Marketing',
			ementa: 'Evolução do pensamento em marketing. Relação do marketing com as outras funções da organização. Comportamento do consumidor. Composto mercadológico. Pesquisa de mercado. Identificação de oportunidades. Dimensões do produto: qualidade, desing, embalagem, marca, preço. Estratégia promocional. Propaganda. Distribuição. Segmentação de mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['GL202'],
			color: '#40D940',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940D9',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'O valor da moeda no tempo. Capitalização simples. Capitalização composta. Desconto. Inflação. Séries de pagamentos. Sistemas de amortização. Decisões e análise de investimentos. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B3D940',
			obligatory: true
		},
		'GL400': {
			code: 'GL400',
			name: 'Estatística II',
			ementa: 'Distribuições amostrais. Estatística Inferencial: introdução à estimação, testes de hipóteses, análise de variância. Controle estatístico de processo. Introdução à teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#40B3D9',
			obligatory: true
		},
		'GL403': {
			code: 'GL403',
			name: 'Instituições de Direito',
			ementa: 'A Sociedade e o Direito.Noções de Direito: direito e justiça. Ramos do Direito. Noções de Direito público, Direito Constitucional, Direito Administrativo, Direito Tributário, Direito Penal. Noções de Direito Privado: Direito Civil, Comercial e do Trabalho.Normas jurídicas: conceito e classificação: vigência e eficácia; irretroatividade e interpretação. Constituição. Conceito. Espécies. Rigidez. Emenda constitucional. Estado. Conceito. Elementos. Fins, Personalidade jurídica. Formas de Estado e de Governo. Regimes governamentais. República como princípio básico do direito brasileiro. Estado de Direito. Garantias do regime republicano-representativo. O princípio da divisão dos poderes. Instrumentos e condições da República. Órgão do Estado. Premissas do regime republicano, no direito positivo brasileiro. os direito humanos. Constituição econômica. Poder de polícia. Pessoa física. Pessoa jurídica. Bens. Conceito. Classificações. Negócio jurídico: existência (categorias do N.J.): validade (requisitos de validade) e eficácia do N.J. (fatores de eficácia ou ineficácia tais como prescrição, decadência, condições, termo). Direitos personalíssimos e patrimoniais; reais e obrigacionais. Propriedade, direitos reais sobre coisas alheias.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94066',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#40D940',
			obligatory: true
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da gestão de pessoas nas empresas. A gestão de RH e seus objetivos, políticas e estratégias. Histórico de gestão de pessoal. Gestão estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: qualidade de vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'LE803': {
			code: 'LE803',
			name: 'Gestão de Qualidade',
			ementa: 'Histórico da qualidade. Conceituação de sistemas de gerenciamento da qualidade. Normas e certificações. Política da qualidade. Custos da qualidade. Novas abordagens sobre qualidade. Ferramentas da qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL301'],
			color: '#40B3D9',
			obligatory: true
		},
		'GL501': {
			code: 'GL501',
			name: 'Mercado Financeiro e de Capitais',
			ementa: 'Estrutura do sistema financeiro brasileiro. Instrumentos de atuação do Banco Central. Mercado bancário e interbancário: principais produtos e serviços. Mercado de renda variável. Mercado de renda fixa. Underwriting, Ações, ADR e BDR. Bolsa de valores. Bolsa de Mercadorias. Derivativos. Commercial papers e Debêntures. Securitização. Captação de recursos no exterior (Eurobonds e Euronotes) Leasing. Factoring. Mercado de câmbio. Fundos de investimento. Seguros. Governança Corporativa. Risco de Mercado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['GL200'],
			color: '#B3D940',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o séc. XIX até os anos 30. O processo de industrialização: criação da indústria de base, restrições e o Plano de Metas. As reformas institucionais e a retomada do crescimento: PAEG, Milagre Econômico e II PND. Anos 80: crise, instabilidade e estagnação. Inflação e planos de estabilização. Anos noventa: abertura da economia e reforma do Estado. O Plano Real. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e padrão de financiamento.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#40D940',
			obligatory: true
		},
		'GL504': {
			code: 'GL504',
			name: 'Direito Empresarial',
			ementa: 'Pessoa Física e Pessoa Jurídica de direito Privado. Pessoa Jurídica de direito Público. Autarquias. Fundações Privadas. Tipos de sociedades no Brasil. Contratos sociais. Holdings, Joint Ventures, incorporações, fusões e cisões. Concordata e Falência. Comércio: modelos de contratos, principais títulos de crédito. Títulos de Capital. Tipos de Ações. Direitos e obrigações dos acionistas. Títulos de dívida. Debêntures. Direitos dos Debenturistas. Propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL403'],
			color: '#D94066',
			obligatory: true
		},
		'GL505': {
			code: 'GL505',
			name: 'Direito Tributário',
			ementa: 'Sistema Tributário Nacional Brasileiro. Competência Tributária. Impostos, Taxas e Contribuições de Melhoria. Contribuições especiais. Empréstimo compulsório. Sistema Previdenciário Nacional. Fato gerador do tributo. Contribuições previdenciárias. Impostos Federais. Impostos Estaduais. Impostos Municipais. Obrigações Acessórias. Obrigação pecuniária. Fiscalização tributária. Princípio da legalidade. Princípio da Anterioridade. Princípio da Anualidade. Créditos tributários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96640',
			obligatory: true
		},
		'GL506': {
			code: 'GL506',
			name: 'Gestão em Sistemas de Produção',
			ementa: 'Tipos e evolução de sistemas de produção e operações. Relação entre bens e serviços. Relacionamento da produção com as demais áreas da organização. Estratégia de Produção. Arranjo físico. Capacidade produtiva. Planejamento e programação da produção. Sistemas de gestão da produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL400'],
			color: '#40B3D9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D940B3',
			obligatory: true
		},
		'ER200': {
			code: 'ER200',
			name: 'Gestão Ambiental',
			ementa: 'Conceituação de Gestão Ambiental, Gestão Sustentável e Desenvolvimento Sustentável. Sistema de Gerenciamento Ambiental. Desempenho sustentável de organizações públicas e privadas e auditoria ambiental. Políticas ambiental e para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e Metodologias de Gestão Sustentável. Normas, selos e certificações socioambientais. Análise de riscos. Gestão Sustentável na Cadeia de Suprimentos. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#D94040',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento estratégico. Níveis de planejamento. Formulação, implementação e avaliação estratégica. Estratégias e vantagem competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#D94040',
			obligatory: true
		},
		'GL602': {
			code: 'GL602',
			name: 'Gestão Financeira',
			ementa: 'Sistema Financeiro Nacional. Valor e Orçamento de Capital. Gestão do capital circulante e da necessidade do capital de giro. Gestão de tesouraria. Papel do crédito. Administração do passivo circulante. Orçamento econômico financeiro. Projeções de receitas, custos e despesas. Orçamento de investimentos. VPL. Critérios de Avaliação de Investimento. Valor Presente Líquido. Taxa Interna de Retorno. Payback simples. Payback descontado. Estrutura de Capital. Políticas de dividendos. Custo do Capital próprio. Custo do capital de terceiros. Custo médio ponderado de capital (WACC).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL501'],
			color: '#B3D940',
			obligatory: true
		},
		'GL605': {
			code: 'GL605',
			name: 'Gestão de Sistemas de Logística',
			ementa: 'Fundamentos de logística. Gestão da cadeia de suprimentos. Controle de estoques. Logística integrada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL506'],
			color: '#40B3D9',
			obligatory: true
		},
		'GL606': {
			code: 'GL606',
			name: 'Direito Trabalhista',
			ementa: 'Contrato Individual de Trabalho. Tipos de Remuneração. Alterações do contrato de trabalho. Direitos e obrigações básicas do trabalhador. Direitos e obrigações básicas do empregador. Suspensão e interrupção do contrato de trabalho. Terminação do contrato de trabalho. Aviso prévio. Justas causas. Fundo de Garantia por Tempo de Serviço. Encargos trabalhistas por conta do empregador. Encargos trabalhistas por conta do empregado. Demissão sem justa causa. Terceirização e subcontratação. Encargos sociais e previdenciários. Cooperativas de trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D940',
			obligatory: true
		},
		'GL607': {
			code: 'GL607',
			name: 'Pesquisa Operacional',
			ementa: 'Otimização de problemas de programação linear e inteira. Resoluções dos modelos com o Solver do Excel.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL100', 'GL400'],
			color: '#40B3D9',
			obligatory: true
		},
		'GL900': {
			code: 'GL900',
			name: 'Metodologia de Pesquisa em Administração',
			ementa: 'Abordagens de pesquisa em Administração. Particularidades e conceitos da pesquisa em Administração. Tipos de pesquisa. Métodos de coleta, processamento e análise de dados e informações. Como escrever um projeto de pesquisa e de monografia: estrutura, objetivos e redação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#40D98C',
			obligatory: true
		},
		'AG701': {
			code: 'AG701',
			name: 'Elaboração de Projetos de Agronegócio I',
			ementa: 'Conceitos básicos sobre projetos, plano de negócios e empreendedorismo. Aspectos administrativos, legais, mercadológicos, técnicos, econômicos e financeiros. Custo e financiamento. Estudo de viabilidade. Análise de risco. Elaboração de projeto ou plano de negócio incluindo aspectos de agronegócio.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL601'],
			color: '#D94040',
			obligatory: true
		},
		'AG702': {
			code: 'AG702',
			name: 'Sistemas e Gestão de Cadeias Agroindustriais',
			ementa: 'Commodity system approach e conceito de agronegócio: Cadeias e sistemas agroinsdustriais. Redes de empresas. Uso de matriz insumo-produto. Resposta eficiente ao consumidor. Coordenação de cadeias e sistemas. Aplicação de instrumentos de desenho e análise de cadeias.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL506'],
			color: '#40B3D9',
			obligatory: true
		},
		'AG703': {
			code: 'AG703',
			name: 'Segurança Alimentar e Ambiental I',
			ementa: 'Conceitos de segurança alimentar e de alimentação segura. Panorama de estudos em segurança alimentar. Política de segurança alimentar e meio ambiente. Experiências internacionais e brasileiras. Análises estatísticas do problema de segurança alimentar.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'AG706': {
			code: 'AG706',
			name: 'Política Agrícola',
			ementa: 'Retrospectiva histórica da agricultura brasileira. Política agrícola para o meio rural: política agrícola e política agrária. Instrumentos de política agrícola: preços mínimos, controle da oferta; estoques reguladores; subsídios, impostos, preços máximos. Evolução da política agrícola no Brasil. Reforma Agrária e Política Fundiária.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B3',
			obligatory: true
		},
		'GL700': {
			code: 'GL700',
			name: 'Trabalho de Conclusão I',
			ementa: 'Orientação, supervisão e avaliação do Estágio realizado nas Organizações. Caracterização da organização. A situação problemática na organização e o Problema de Pesquisa. Relatório parcial de pesquisa na organização.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA458'],
			color: '#4040D9',
			obligatory: true
		},
		'GL701': {
			code: 'GL701',
			name: 'Estágio I',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA458'],
			color: '#6640D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'AG800': {
			code: 'AG800',
			name: 'Organização de Mercados do Agronegócio',
			ementa: 'Caracterização dos empreendimentos rurais e mercados do agronegócio. Particularidades dos produtos agroindustriais: oferta e demanda. Mecanismos de comercialização: transações de commodities em mercados spot, a termos futuros, papel do hedging, contratos de longo prazo. O papel do arcabouço regulatório na organização e evolução dos mercados. Otimização de cadeias de comercialização e o papel das novas tecnologias. Determinantes da competitividade das empresas e das cadeias produtivas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL603'],
			color: '#40D940',
			obligatory: true
		},
		'AG801': {
			code: 'AG801',
			name: 'Elaboração de Projetos de Agronegócio II',
			ementa: 'Continuação da elaboração de projeto ou plano de negócios iniciada na disciplina Elaboração de Projetos de Agronegócio I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AG701'],
			color: '#D94040',
			obligatory: true
		},
		'AG805': {
			code: 'AG805',
			name: 'Prospecção Tecnológica em Sistemas Agroindustriais',
			ementa: 'Princípios metodológicos básicos sobre gestão de C, T e I. Elementos conceituais de economia da tecnologia no agronegócio. Métodos de gestão aplicados ao desenvolvimento tecnológico e inovação na agricultura e na agroindústria.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL603'],
			color: '#40D940',
			obligatory: true
		},
		'GL800': {
			code: 'GL800',
			name: 'Trabalho de Conclusão II',
			ementa: 'Fase complementar de orientação, supervisão e avaliação do Estágio Curricular nas Organizações. A execução do projeto de pesquisa. Coleta de dados. Elaboração de Relatório Final de Pesquisa. Sumário, Resumo e Introdução. Revisão Bibliográfica. Metodologia, análise e interpretação dos dados coletados. Considerações finais. Apêndices e anexos. Normas ABNT para apresentação de trabalhos acadêmicos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['GL700'],
			color: '#4040D9',
			obligatory: true
		},
		'GL801': {
			code: 'GL801',
			name: 'Estágio II',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['GL701'],
			color: '#6640D9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#B340D9',
			obligatory: true
		},
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4066D9',
			obligatory: false
		}
	}
};

export default catalogue;
