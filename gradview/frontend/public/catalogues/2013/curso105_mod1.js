const catalogue = {
	totalCredits: 202,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['NC103', 'GL100', 'GL101', 'GL604', 'NC400']
		},
		'sem-2': {
			id: '2',
			subjects: ['NC100', 'GL201', 'GL202', 'GL203', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL302', 'GL301', 'GL600', 'GL300', 'NC301']
		},
		'sem-4': {
			id: '4',
			subjects: ['GL403', 'LE803', 'GL400', 'GL603', 'GL200', 'LE702']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL504', 'GL502', 'GL506', 'GL505', 'GL501', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['GL900', 'GL606', 'GL607', 'GL605', 'GL602', 'GL601', 'ER200']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'GL701', 'GL700', 'MG702', 'MG707', 'MG703', 'MG804']
		},
		'sem-8': {
			id: '8',
			subjects: ['GL801', 'MG801', 'GL800', 'MG802', 'MG800', 'ELET08']
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
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98F46',
			obligatory: true
		},
		'GL101': {
			code: 'GL101',
			name: 'Introdução à Economia',
			ementa: 'A economia de mercado. Produção e acumulação de riqueza. Determinação do nível de emprego e preços. Agregados macroeconômicos. Investimento e consumo. Oferta e demanda por moeda. Receitas e despesas do governo. Setor externo: balanço de pagamentos. Indicadores econômicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A7B9',
			obligatory: true
		},
		'GL604': {
			code: 'GL604',
			name: 'Sistemas de Informação e Gestão do Conhecimento',
			ementa: 'Tecnologia da informação. Sistemas de informação. O conhecimento como ativo da empresa. Gestão do conhecimento: criação, fluxo e disseminação de conhecimento. Aprendizado organizacional. Impactos na competitividade e na organização da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A7',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#52B946',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B346',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Derivada e aplicações. Integral e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#B98F46',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'Teoria do consumidor. Curvas de demanda. Produção: tecnologia e custos. Estruturas de mercado: concorrência pura, monopólio e concorrência imperfeita. Oligopólio. Noções de teoria dos jogos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B95E',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7646B9',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#465EB9',
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
		'GL300': {
			code: 'GL300',
			name: 'Contabilidade II',
			ementa: 'Estrutura das Demonstrações Contábeis. Aplicações da Análise de Balanços e seus usuários. Análise financeira e indicadores. Análise Vertical. Análise Horizontal. Contabilidade de Custos. Contabilidade Gerencial x Financeira. Métodos de Custeio. Custos por Departamento. Custeio baseado em Atividades (ABC). Custos para tomada de decisão. Custeio Variável. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão. Noções de auditoria interna e externa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#7646B9',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Noções de amostragem. Estatística descritiva: métodos gráficos, medidas de tendência central e medidas de dispersão. Introdução à probabilidade. Variáveis aleatórias discretas. Variáveis aleatórias contínuas. Distribuição normal. Análise de correlação. Regressão linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*GL201'],
			color: '#B98F46',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Principais abordagens no campo da administração sob uma perspectiva histórica. Objeto, abrangência e limites das diversas abordagens. Administração e gestão no contexto contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96A46',
			obligatory: true
		},
		'GL600': {
			code: 'GL600',
			name: 'Estudos de Mercado e Marketing',
			ementa: 'Evolução do pensamento em marketing. O espaço do marketing na estrutura da empresa. Comportamento do consumidor. Composto mercadológico. Caracterização do mercado. Pesquisa de mercado. Identificação de oportunidades. Dimensões do produto: qualidade, desing, embalagem, marca, preço. Estratégia promocional. Propaganda. Distribuição. Segmentação de mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#46B95E',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B983',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466A',
			obligatory: true
		},
		'GL400': {
			code: 'GL400',
			name: 'Estatística II',
			ementa: 'Distribuições amostrais. Estatística Inferencial: introdução à estimação, testes de hipóteses, análise de variância. Controle estatístico de processo. Introdução à teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#B98F46',
			obligatory: true
		},
		'GL403': {
			code: 'GL403',
			name: 'Instituições de Direito',
			ementa: 'Origens do direito. Direito como regulador da vida social. Direito constitucional. Normas sociais. Moral. Equidade e justiça. Direito objetivo. Direito subjetivo. Relação jurídica. Objeto de direito. Direito público e privado. Conceito e subdivisões. Direito civil. Capacidade. Personalidade. Fatos jurídicos. Direito de família e sucessões. Direito comercial. Ato de comércio. Sociedades comerciais. Títulos de crédito. Direito constitucional. Estado e sociedade. Direitos políticos. Direitos e garantias individuais. Direito penal. Culpabilidade. Pena. Direito administrativo. Licitação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B3',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#46B95E',
			obligatory: true
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da Gestão de Pessoas nas empresas. A Gestão de RH, Objetivos, Políticas e Estratégias. Histórico de Gestão de Pessoal de Relações de Trabalho. A Gestão Estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: Qualidade de Vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#B9B346',
			obligatory: true
		},
		'LE803': {
			code: 'LE803',
			name: 'Gestão de Qualidade',
			ementa: 'Histórico da qualidade. Conceituação de sistemas de gerenciamento da qualidade. Normas ISO 9000 e certificação. Política da qualidade. Custos da qualidade. Novas abordagens sobre qualidade. Ferramentas da qualidade. Modelos de excelência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL301'],
			color: '#B98F46',
			obligatory: true
		},
		'GL501': {
			code: 'GL501',
			name: 'Mercado Financeiro e de Capitais',
			ementa: 'Estrutura do sistema financeiro brasileiro. Instrumentos de atuação do Banco Central. Mercado bancário e interbancário: principais produtos e serviços. Mercado de renda variável. Mercado de renda fixa. Underwriting, Ações, ADR e BDR. Bolsa de valores. Bolsa de Mercadorias. Derivativos. Commercial papers e Debêntures. Securitização. Captação de recursos no exterior (Eurobonds e Euronotes) Leasing. Factoring. Mercado de câmbio. Fundos de investimento. Seguros. Governança Corporativa. Risco de Mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL200'],
			color: '#B9466A',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o século XIX até os anos 30. A industrialização. A crise da dívida dos anos 80: crise fiscal do Estado brasileiro, superavits comerciais, instabilidade e estagnação. Os planos de estabilização. A abertura da economia e a reforma do Estado. O Plano Real. A crise de 1999. A herança dos anos noventa: vulnerabilidade externa e endividamento público. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e financiamento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#46A7B9',
			obligatory: true
		},
		'GL504': {
			code: 'GL504',
			name: 'Direito Empresarial',
			ementa: 'Pessoa Física e Pessoa Jurídica de direito Privado. Pessoa Jurídica de direito Público. Autarquias. Fundações Privadas. Tipos de sociedades no Brasil. Contratos sociais. Holdings, Joint Ventures, incorporações, fusões e cisões. Concordata e Falência. Comércio: modelos de contratos, principais títulos de crédito. Títulos de Capital. Tipos de Ações. Direitos e obrigações dos acionistas. Títulos de dívida. Debêntures. Direitos dos Debenturistas. Propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL403'],
			color: '#B946B3',
			obligatory: true
		},
		'GL505': {
			code: 'GL505',
			name: 'Direito Tributário',
			ementa: 'Sistema Tributário Nacional Brasileiro. Competência Tributária. Impostos, Taxas e Contribuições de Melhoria. Contribuições especiais. Empréstimo compulsório. Sistema Previdenciário Nacional. Fato gerador do tributo. Contribuições previdenciárias. Impostos Federais. Impostos Estaduais. Impostos Municipais. Obrigações Acessórias. Obrigação pecuniária. Fiscalização tributária. Princípio da legalidade. Princípio da Anterioridade. Princípio da Anualidade. Créditos tributários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4683B9',
			obligatory: true
		},
		'GL506': {
			code: 'GL506',
			name: 'Gestão em Sistemas de Produção',
			ementa: 'Tipos e evolução de sistemas de produção e operações. Relação entre bens e serviços. Relacionamento da produção com as demais áreas da organização. Estratégia de Produção. Arranjo físico. Capacidade produtiva. Planejamento e programação da produção. Sistemas de gestão da produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL400'],
			color: '#B98F46',
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
		'ER200': {
			code: 'ER200',
			name: 'Gestão Ambiental',
			ementa: 'Conceituação de Gestão Ambiental, Gestão Sustentável e Desenvolvimento Sustentável. Sistema de Gerenciamento Ambiental. Desempenho sustentável de organizações públicas e privadas e auditoria ambiental. Políticas ambiental e para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e Metodologias de Gestão Sustentável. Normas, selos e certificações socioambientais. Análise de riscos. Gestão Sustentável na Cadeia de Suprimentos. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#B9B346',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento. Níveis de planejamento. Estratégias. Modelos de planejamento e gestão estratégica. Formulação, implementação e avaliação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#B9B346',
			obligatory: true
		},
		'GL602': {
			code: 'GL602',
			name: 'Gestão Financeira',
			ementa: 'Sistema Financeiro Nacional. Valor e Orçamento de Capital. Gestão do capital circulante e da necessidade do capital de giro. Gestão de tesouraria. Papel do crédito. Administração do passivo circulante. Orçamento econômico financeiro. Projeções de receitas, custos e despesas. Orçamento de investimentos. VPL. Critérios de Avaliação de Investimento. Valor Presente Líquido. Taxa Interna de Retorno. Payback simples. Payback descontado. Estrutura de Capital. Políticas de dividendos. Custo do Capital próprio. Custo do capital de terceiros. Custo médio ponderado de capital (WACC).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL501'],
			color: '#B9466A',
			obligatory: true
		},
		'GL605': {
			code: 'GL605',
			name: 'Gestão de Sistemas de Logística',
			ementa: 'Fundamentos de logística. Gestão da cadeia de suprimentos. Controle de estoques. Logística integrada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL506'],
			color: '#B98F46',
			obligatory: true
		},
		'GL606': {
			code: 'GL606',
			name: 'Direito Trabalhista',
			ementa: 'Contrato Individual de Trabalho. Tipos de Remuneração. Alterações do contrato de trabalho. Direitos e obrigações básicas do trabalhador. Direitos e obrigações básicas do empregador. Suspensão e interrupção do contrato de trabalho. Terminação do contrato de trabalho. Aviso prévio. Justas causas. Fundo de Garantia por Tempo de Serviço. Encargos trabalhistas por conta do empregador. Encargos trabalhistas por conta do empregado. Demissão sem justa causa. Terceirização e subcontratação. Encargos sociais e previdenciários. Cooperativas de trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'GL607': {
			code: 'GL607',
			name: 'Pesquisa Operacional',
			ementa: 'Otimização de problemas de programação linear e inteira. Resoluções dos modelos com o Solver do Excel.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL100', 'GL400'],
			color: '#B98F46',
			obligatory: true
		},
		'GL900': {
			code: 'GL900',
			name: 'Metodologia de Pesquisa em Administração',
			ementa: 'Abordagens de pesquisa em Administração. Particularidades e conceitos da pesquisa em Administração. Tipos de pesquisa. Métodos de coleta, processamento e análise de dados e informações. Como escrever um projeto de pesquisa e de monografia: estrutura, objetivos e redação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9BB946',
			obligatory: true
		},
		'GL700': {
			code: 'GL700',
			name: 'Trabalho de Conclusão I',
			ementa: 'Orientação, supervisão e avaliação do Estágio realizado nas Organizações. Caracterização da organização. A situação problemática na organização e o Problema de Pesquisa. Relatório parcial de pesquisa na organização.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA458'],
			color: '#B9468F',
			obligatory: true
		},
		'GL701': {
			code: 'GL701',
			name: 'Estágio I',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA458'],
			color: '#76B946',
			obligatory: true
		},
		'MG702': {
			code: 'MG702',
			name: 'Economia Internacional',
			ementa: 'Comércio internacional: teorias e políticas. Investimento direto e comércio. Empresas multinacionais e sistemas internacionais de produção. Evolução do regime de comércio internacional. Acordos regionais de comércio. Crédito no comércio exterior. Tributação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101', 'GL202'],
			color: '#46B08C',
			obligatory: true
		},
		'MG703': {
			code: 'MG703',
			name: 'Elaboração e Análise de Projetos I',
			ementa: 'Conceitos básicos sobre projetos, planos de negócios e empreendedorismo. Aspectos administrativos, legais, mercadológicos, técnicos, econômicos e financeiros. Custo e financiamento. Estudo de viabilidade. Análise de risco. Elaboração de projeto ou plano de negócio.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL601'],
			color: '#B9B346',
			obligatory: true
		},
		'MG707': {
			code: 'MG707',
			name: 'Controladoria e Finanças Corporativas',
			ementa: 'Função da controladoria. Tesouraria e fluxo de caixa. Previsões. Avaliação de ativos. Risco e hedging.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL602'],
			color: '#B9466A',
			obligatory: true
		},
		'MG804': {
			code: 'MG804',
			name: 'Gestão da Inovação',
			ementa: 'Inovação como instrumento de concorrência. Tipos de inovação: condicionantes e impactos. Desenvolvimento, incorporação e difusão de inovações. Sistemas de inovação. Instrumentos de transferência de tecnologia. Propriedade intelectual. Financiamento da inovação. Principais instrumentos de gestão da inovação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL601'],
			color: '#B9B346',
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
		'GL800': {
			code: 'GL800',
			name: 'Trabalho de Conclusão II',
			ementa: 'Fase complementar de orientação, supervisão e avaliação do Estágio Curricular nas Organizações. A execução do projeto de pesquisa. Coleta de dados. Elaboração de Relatório Final de Pesquisa. Sumário, Resumo e Introdução. Revisão Bibliográfica. Metodologia, análise e interpretação dos dados coletados. Considerações finais. Apêndices e anexos. Normas ABNT para apresentação de trabalhos acadêmicos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['GL700'],
			color: '#B9468F',
			obligatory: true
		},
		'GL801': {
			code: 'GL801',
			name: 'Estágio II',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['GL701'],
			color: '#76B946',
			obligatory: true
		},
		'MG800': {
			code: 'MG800',
			name: 'Elaboração e Análise de Projetos II',
			ementa: 'Continuação da elaboração do projeto ou plano de negócio iniciado na disciplina Elaboração e Análise de Projetos I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MG703'],
			color: '#B9B346',
			obligatory: true
		},
		'MG801': {
			code: 'MG801',
			name: 'Empresas e Políticas Governamentais',
			ementa: 'Agências e órgãos do governo brasileiro responsáveis pelo fomento à atividades econômicas. Linhas de fomento, requisitos e condições de acesso a fundos reembolsáveis e não-reembolsáveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9B46B9',
			obligatory: true
		},
		'MG802': {
			code: 'MG802',
			name: 'Modelos e Técnicas de Simulação',
			ementa: 'Aplicação de modelos e técnicas de simulação a problemas de gestão de empresas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL603'],
			color: '#46B95E',
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
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5246B9',
			obligatory: false
		}
	}
};

export default catalogue;
