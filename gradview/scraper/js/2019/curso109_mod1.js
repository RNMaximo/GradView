const catalogue = {
	totalCredits: 202,
	maxCreditsSem: 46,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GL100', 'GL102', 'GL203', 'GL403', 'NC103', 'NC400']
		},
		'sem-2': {
			id: '2',
			subjects: ['GL201', 'GL300', 'GL302', 'GL608', 'MG400', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL202', 'LE702', 'NC104', 'NC301', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['ER401', 'GL200', 'GL303', 'GL603', 'MG500']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL507', 'GL600', 'GL601', 'MG501', 'MG600']
		},
		'sem-6': {
			id: '6',
			subjects: ['ER201', 'GL502', 'GL609', 'MG601', 'MG813', 'MG900', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['GL710', 'MG811', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['GL304', 'GL704', 'GL803', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['NC---'],
		},
		'elet-2': {
			credits: 20,
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
			ementa: 'Revisão de matemática elementar. Funções e modelos matemáticos. Estudo de funções de uma variável. Limites. Noções de derivada. Modelos e aplicações em administração.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9C40D9',
			obligatory: true
		},
		'GL102': {
			code: 'GL102',
			name: 'Integridade Acadêmica e Metodologia Científica',
			ementa: 'Integridade acadêmica. Boas práticas na vida acadêmica. Gestão do Tempo. Citação e paráfrase. Particularidades e conceitos da pesquisa em Administração. Tipos de pesquisa. Métodos de coleta, processamento e análise de dados. Normas técnicas para elaboração de um trabalho científico. Portal de Periódicos Capes e Sistema de Biblioteca da Unicamp (SBU).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#409CD9',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Obrigatoriedade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial. Fundamentação Normativa da práticacontábil no Brasil segundo os pronunciamentos do CPC. Normas contábeis aplicáveis ao mercado de capitais. Obrigatoriedade da Auditoria.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#405ED9',
			obligatory: true
		},
		'GL403': {
			code: 'GL403',
			name: 'Instituições de Direito',
			ementa: 'Origens e conceito do Direito. Direito como regulador da vida social. Normas sociais. Moral. Equidade e justiça. Direito objetivo. Direito subjetivo. Relação jurídica. Fatos jurídicos. Objeto de Direito. Direito público, privado e difuso: Conceito e subdivisões. Direito Constitucional: Estado e sociedade. Direitos políticos. Direitos e garantias individuais. Direito Civil: Capacidade. Personalidade. Direito de família e sucessões. Direito Empresarial: Ato de comércio. Sociedades comerciais. Títulos de crédito. Direito Penal. Culpabilidade. Pena. Direito Administrativo. Licitação. Direito Consumidor. Direito Ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940D9',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D95E',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. Perfil e funções do administrador. Processo administrativo. Tomada de decisão. Planejamento e estratégia. Processo de organização. Direção, coordenação e liderança. Processo de controle. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9CD940',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Definição de derivada. Regras de derivação. Aplicações de derivada para Administração. Integração. Teorema Fundamental do Cálculo. Técnicas de Integração. Aplicações de Integral em Administração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#9C40D9',
			obligatory: true
		},
		'GL300': {
			code: 'GL300',
			name: 'Contabilidade II',
			ementa: 'Estrutura das Demonstrações Contábeis segundo o pronunciamento do CPC 00. Aplicação da projeção das demonstrações financeiras para fins de planejamento e plano de negócios. Projeção das demonstrações Financeiras, premissas e cenários. Aplicações da Análise de Balanços e seus usuários. Análise financeira e indicadores. Análise Vertical. Análise Horizontal. Contabilidade de Custos. Contabilidade Gerencial x Financeira. Métodos de Custeio. Custos por Departamento. Custeio baseado em Atividades (ABC). Custos para tomada de decisão. Custeio Variável. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão. Noções de auditoria interna e externa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#405ED9',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Discutir as principais teorias sobre a administração. Avaliar as diferentes abordagens adotadas pelo pensamento em gestão. Conhecer e discutir a base teórica que funda as correntes do pensamento em gestão e estabelecer relações críticas com as ditas correntes, sendo capaz de avaliar o uso de técnicas e instrumentos de gestão nos contextos históricos, econômicos e sociais em que foram gerados e difundidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9405E',
			obligatory: true
		},
		'GL608': {
			code: 'GL608',
			name: 'Administração de Sistemas de Informação',
			ementa: 'Tecnologia da Informação: conceitos fundamentais. Sistemas de informação. Gestão do conhecimento. Tecnologia da informação e desempenho empresarial. Negócios na era digital. Segurança da informação. Tecnologias e ferramentas emergentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D97D40',
			obligatory: true
		},
		'MG400': {
			code: 'MG400',
			name: 'Direito para Administração I',
			ementa: 'O Direito Empresarial no Brasil: Conceito e regime jurídico da empresa mercantil; Atividade empresarial. Empresa, empresário e estabelecimento. Regime jurídico da contabilidade comercial. Sociedade e empresa. Direito e deveres dos sócios. Direito Societário. Noções de Direito falimentar. Mercado de Capitais. Legislação Tributária: conceito, objeto e conteúdo. O Sistema Tributário nacional. Incidência, não incidência, imunidade e isenção tributária. Os impostos. As taxas. O poder de polícia. Os serviços, sua especificidade e divisibilidade. Contribuições especiais. Contribuição de melhoria.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GL403'],
			color: '#D940D9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D9BA40',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'A Ciência Econômica. O papel da microeconomia na Ciência Econômica. Mercado: demanda, oferta e equilíbrio. Teoria do consumidor. Teoria da Firma. Produção: tecnologia e custos. Estruturas de mercado: concorrência perfeita, monopólio, concorrência imperfeita e oligopólio. Modelos de mark-up. Noções de organização industrial. Incerteza e decisões.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D9BA',
			obligatory: true
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da gestão de pessoas nas organizações públicas e privadas. A gestão de RH e seus objetivos, políticas e estratégias. Histórico de gestão de pessoal. Gestão estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: qualidade de vida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'NC104': {
			code: 'NC104',
			name: 'Introdução à Ciência dos Dados e à Informação',
			ementa: 'Contingência e probabilidade no mundo contemporâneo. Sentido dos dados e informação. Os diferentes tipos de informação. A informação estatística e o dilúvio de dados. Análise exploratória de dados. Medidas de tendência central e de dispersão. Representação gráfica de dados. Medidas de correlação. Correlação e causalidade. Introdução à Probabilidade. Regra de Bayes. Exemplos de aplicações nas diferentes Ciências Aplicadas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99C40',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#7DD940',
			obligatory: true
		},
		'ER401': {
			code: 'ER401',
			name: 'Pesquisa Operacional',
			ementa: 'A pesquisa operacional como método de apoio à decisão. Problemas de otimização. Problemas de programação linear. Solução gráfica e noções geométricas do método simplex. Uso de softwares para resolução de PL. Noções de dualidade. Métodos de apoio à decisão multicritério. Análise envoltória de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL201'],
			color: '#9C40D9',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'O valor da moeda no tempo. Capitalização simples. Capitalização composta. Desconto. Inflação. Séries de pagamentos. Sistemas de amortização. Decisões e análise de investimentos. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BA40D9',
			obligatory: true
		},
		'GL303': {
			code: 'GL303',
			name: 'Estatística para Administração',
			ementa: 'Revisão de probabilidade e aplicações. Variáveis aleatórias discretas e contínuas. Distribuição normal. Distribuições amostrais. Estimação pontual. Estimação intervalar. Noções de amostragem. Teste de hipótese. Análise de variância. Análise de regressão e correlação. Aplicações em administração.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL201', 'NC104'],
			color: '#BB6E8D',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GL202'],
			color: '#40D9BA',
			obligatory: true
		},
		'MG500': {
			code: 'MG500',
			name: 'Gestão de Operações',
			ementa: 'Tipos e evolução de sistemas de produção. Gestão de operações em serviços. Relacionamento da produção com as demais áreas da organização. Projeto de produto e processo. Arranjo físico e fluxo. Capacidade produtiva. Planejamento, programação e controle da produção. Previsão de demanda. Gestão de estoques. Sistemas de gestão da produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D99C',
			obligatory: true
		},
		'GL507': {
			code: 'GL507',
			name: 'Macroeconomia',
			ementa: 'Ementa: Dimensão histórica e social da economia. Origens e fundamentos da moderna economia capitalista. O papel da macroeconomia na Ciência Econômica. Fluxo da Renda. Renda e Produção. Estudo dos agregados econômicos: PIB, Demanda Agregada e Renda Nacional. Mercado de trabalho. Consumo. Investimento. Governo: receitas e despesas. Moeda e juros. Setor Externo: balanço de pagamentos e câmbio.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GL603'],
			color: '#40D9BA',
			obligatory: true
		},
		'GL600': {
			code: 'GL600',
			name: 'Estudos de Mercado e Marketing',
			ementa: 'Evolução do pensamento em marketing. Relação do marketing com as outras funções da organização. Comportamento do consumidor. Composto mercadológico. Pesquisa de mercado. Identificação de oportunidades. Dimensões do produto: qualidade, desing, embalagem, marca, preço. Estratégia promocional. Propaganda. Distribuição. Segmentação de mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40BAD9',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento estratégico. Níveis de planejamento. Formulação, implementação e avaliação estratégica. Estratégias e vantagem competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#9CD940',
			obligatory: true
		},
		'MG501': {
			code: 'MG501',
			name: 'Administração Financeira I',
			ementa: 'Introdução às finanças corporativas. Papel do gestor financeiro. Sistema Financeiro Nacional. Produtos financeiros e financiamento corporativo. Avaliação de papéis de renda fixa e variável. Gestão do capital circulante e da necessidade do capital de giro. Gestão de tesouraria. Papel do crédito. Administração do passivo circulante. Análise de demonstrações financeiras. Medidas de criação de valor.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL200'],
			color: '#BA40D9',
			obligatory: true
		},
		'MG600': {
			code: 'MG600',
			name: 'Gestão da Cadeia de Suprimentos',
			ementa: 'Fundamentos de logística e de logística integrada. Gestão de redes e integração da cadeia de suprimentos. Iniciativas, práticas e medição de desempenho. Papel da tecnologia na gestão da cadeia de suprimentos. Efeito Chicote. Gesta&#771;o da cadeia de suprimentos global e riscos. Tendências em gestão da cadeia de suprimentos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MG500'],
			color: '#40D99C',
			obligatory: true
		},
		'ER201': {
			code: 'ER201',
			name: 'Gestão Sustentável',
			ementa: 'Conceito de gestão sustentável e desenvolvimento sustentável. Planejamento, gestão e desempenho sustentável de organizações públicas e privadas. Políticas e legislação para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e metodologias de gestão sustentável. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['NC400'],
			color: '#9CD940',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o séc. XIX até os anos 30. O processo de industrialização: criação da indústria de base, restrições e o Plano de Metas. As reformas institucionais e a retomada do crescimento: PAEG, Milagre Econômico e II PND. Anos 80: crise, instabilidade e estagnação. Inflação e planos de estabilização. Anos noventa: abertura da economia e reforma do Estado. O Plano Real. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e padrão de financiamento.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GL507'],
			color: '#40D9BA',
			obligatory: true
		},
		'GL609': {
			code: 'GL609',
			name: 'Comportamento do Consumidor',
			ementa: 'O consumidor: perspectivas e pontos de vistas. Segmentação de Mercado e análise demográfica. Os mercados consumidores globais: estrutura e estratégia. Os processos decisórios do consumidor. O reconhecimento de necessidade e a busca. Avaliação de alternativas a pré compra. Compra. Consumo, satisfação e descarte. Recursos do consumidor. Conhecimento. Atitudes. Motivação e autoconceito. Personalidade, valores e estilo de vida. O processamento de informação. Aprendizagem.Influenciando atitudes e comportamento. A influência da cultura no comportamento do consumidor. Influências étnicas sobre comportamento do consumidor. Classe social e status. Influência pessoal. Influência da família e do domicilio. Influência situacional. Varejo e consumidor. A difusão de inovação. O consumerismo e a responsabilidade ética. Métodos e modelos de análise e de pesquisa com consumidor.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL600'],
			color: '#40BAD9',
			obligatory: true
		},
		'MG601': {
			code: 'MG601',
			name: 'Administração Financeira II',
			ementa: 'Orçamento de Capital. Projeções de receitas, custos e despesas. Orçamento de investimentos. Critérios de Avaliação de Investimento. Valor Presente Líquido. Taxa Interna de Retorno. Payback simples. Payback descontado. Estrutura de Capital. Políticas de dividendos. Custo do Capital próprio. Custo do capital de terceiros. Custo médio ponderado de capital (WACC). Avaliação de Empresas. Introdução aos Derivativos. Fusões e aquisições.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MG501'],
			color: '#BA40D9',
			obligatory: true
		},
		'MG813': {
			code: 'MG813',
			name: 'Gestão da Inovação',
			ementa: 'Inovação como instrumento de concorrência. Tipos de inovação: condicionantes e impactos. Desenvolvimento, incorporação e difusão de inovações. Sistemas de inovação. Propriedade intelectual. Financiamento da inovação. Instrumentos e ferramentas de gestão da inovação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL601'],
			color: '#9CD940',
			obligatory: true
		},
		'MG900': {
			code: 'MG900',
			name: 'Empreendedorismo',
			ementa: 'O empreendimento e o empreendedor. Tipos de empreendimentos. Processo de empreender. Modelo de negócios. Plano de negócios. Ambiente e instituições de apoio. Tendências em empreendedorismo.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5E40D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'GL710': {
			code: 'GL710',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Orientação, supervisão e avaliação do Estágio realizado nas Organizações. Caracterização da organização. A situação problemática na organização e o Problema de Pesquisa. Relatório parcial de pesquisa na organização.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA460'],
			color: '#407DD9',
			obligatory: true
		},
		'MG811': {
			code: 'MG811',
			name: 'Direito para Administração II',
			ementa: 'Direito do Trabalho: conceito, características. Contrato de emprego: denominação, conceito, classificação, caracterização. Trabalho ilícito e trabalho proibido. Direitos intelectuais. Função de confiança. Repousos. Remuneração e salário: conceito, distinções. Gorjetas. Caracteres e classificação do salário. Desvio de função. Alteração do contrato de emprego. Alteração unilateral e bilateral. Transferência de local de trabalho. Promoção e rebaixamento. Alteração de horário de trabalho. Redução de remuneração. Interrupção e suspensão do contrato de trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL403'],
			color: '#D940D9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'GL304': {
			code: 'GL304',
			name: 'Métodos Quantitativos Aplicados',
			ementa: 'Apresentação e estudos de casos importantes de aplicação de métodos quantitativos em Administração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL303'],
			color: '#BB6E8D',
			obligatory: true
		},
		'GL704': {
			code: 'GL704',
			name: 'Estágio em Administração',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:2, C:20},
			requisitos: ['AA475'],
			color: '#D9407D',
			obligatory: true
		},
		'GL803': {
			code: 'GL803',
			name: 'Temas Contemporâneos de Direito',
			ementa: 'Política Nacional das relações de consumo. Da Qualidade de Produtos e Serviços, da Prevenção e da Reparação dos Danos. Da Responsabilidade por Vício do Produto e do Serviço. Da desconsideração da personalidade jurídica do Fornecedor. Da publicidade e das praticas abusivas no Direito do consumidor. Responsabilidade pós consumo. Logística reversa. Política Nacional de Meio Ambiente. Responsabilidade constitucional ambiental. Controle da poluição ambiental. Gestão ambiental empresarial para a sustentabilidade. Atualidades legislativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5ED940',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'AG---': {
			code: 'AG---',
			name: 'Qualquer Disciplina com codigo AG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D95E40',
			obligatory: false
		},
		'CG---': {
			code: 'CG---',
			name: 'Qualquer Disciplina com codigo CG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9409C',
			obligatory: false
		},
		'GL---': {
			code: 'GL---',
			name: 'Qualquer Disciplina com codigo GL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GL---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7D40D9',
			obligatory: false
		},
		'MG---': {
			code: 'MG---',
			name: 'Qualquer Disciplina com codigo MG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9D940',
			obligatory: false
		},
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#BAD940',
			obligatory: false
		},
		'PG---': {
			code: 'PG---',
			name: 'Qualquer Disciplina com codigo PG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo PG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940BA',
			obligatory: false
		}
	}
};

export default catalogue;
