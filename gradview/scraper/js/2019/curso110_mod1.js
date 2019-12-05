const catalogue = {
	totalCredits: 214,
	maxCreditsSem: 48,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GL100', 'GL203', 'NC103', 'NC400', 'PG100']
		},
		'sem-2': {
			id: '2',
			subjects: ['GL201', 'GL302', 'PG200', 'PG201', 'PG300']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL102', 'GL202', 'NC104', 'NC301', 'PG301']
		},
		'sem-4': {
			id: '4',
			subjects: ['ER201', 'GL303', 'GL603', 'GL608', 'PG400', 'PG800']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL507', 'PG500', 'PG501', 'PG502', 'PG710']
		},
		'sem-6': {
			id: '6',
			subjects: ['ER401', 'GL304', 'GL502', 'PG600', 'PG701']
		},
		'sem-7': {
			id: '7',
			subjects: ['GL701', 'GL710', 'PG704', 'PG709', 'PG810', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['GL801', 'PG801', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['NC---'],
		},
		'elet-2': {
			credits: 8,
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
			color: '#D94040',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Obrigatoriedade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial. Fundamentação Normativa da práticacontábil no Brasil segundo os pronunciamentos do CPC. Normas contábeis aplicáveis ao mercado de capitais. Obrigatoriedade da Auditoria.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40D9C3',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. Perfil e funções do administrador. Processo administrativo. Tomada de decisão. Planejamento e estratégia. Processo de organização. Direção, coordenação e liderança. Processo de controle. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99740',
			obligatory: true
		},
		'PG100': {
			code: 'PG100',
			name: 'Introdução à Ciência Política',
			ementa: 'Fundamentos do pensamento poli&#769;tico. Etnocentrismo: o eu e o outro. Indivíduo, sociedade e política. Democracia e participação. Autoritarismo e ditadura. Teorias de Estado: Liberalismo, Marxismo, Pluralismo, Elitismo. Problemas contemporaneos. Conservadorismo, individualismo, consumismo. Regulação da mídia e liberdade. Cidadania. Educação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C3D9',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Definição de derivada. Regras de derivação. Aplicações de derivada para Administração. Integração. Teorema Fundamental do Cálculo. Técnicas de Integração. Aplicações de Integral em Administração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#D94040',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Discutir as principais teorias sobre a administração. Avaliar as diferentes abordagens adotadas pelo pensamento em gestão. Conhecer e discutir a base teórica que funda as correntes do pensamento em gestão e estabelecer relações críticas com as ditas correntes, sendo capaz de avaliar o uso de técnicas e instrumentos de gestão nos contextos históricos, econômicos e sociais em que foram gerados e difundidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C340D9',
			obligatory: true
		},
		'PG200': {
			code: 'PG200',
			name: 'Estado, Burocracia e Políticas Públicas',
			ementa: 'A Formação do Estado e de seu aparato administrativo. A burocracia e o Estado Moderno. Weber e burocracia (tipo ideal e formas de dominação). Burocracia pública como ator e seu papel nas políticas públicas. Dilemas entre burocracia e política. Discricionariedade, controle e accountability. Burocracias de alto e médio escalão. Insulamento burocrático. Burocracia de linha de frente e o ciclo de políticas públicas. Reformas do Estado e serviço público. Cargos, funções, carreira, formação, mérito e avaliação de desempenho de servidores. O papel das escolas de governo.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['PG100'],
			color: '#40C3D9',
			obligatory: true
		},
		'PG201': {
			code: 'PG201',
			name: 'Sistemas de Proteção Social',
			ementa: 'Estudos sobre expansa&#771;o dos Direitos Sociais no Se&#769;culo XX. O surgimento do Welfare State e suas interpretações. Desigualdade e a questão social no sistema capitalista. O conceito de cidadania. Os Sistemas de Protec&#807;a&#771;o Social Europeus e Latinoamericanos. Relações entre Política econômica e Política social. O tripé da seguridade social no Brasil. Crise Econo&#770;mica, Neoliberalismo e Crise dos Estados de Bem-Estar.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#97D940',
			obligatory: true
		},
		'PG300': {
			code: 'PG300',
			name: 'Contabilidade Pública',
			ementa: 'Serviço Público. Administração Pública. Função e objetivos da contabilidade pública. Regimes Contábeis. Patrimônio Público. Dívida Pública. Orçamento público. Receita e despesa pública. Demonstrações contábeis aplicadas ao setor público. Análise das Demonstrações Contábeis Aplicadas ao setor público.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#6BD940',
			obligatory: true
		},
		'GL102': {
			code: 'GL102',
			name: 'Integridade Acadêmica e Metodologia Científica',
			ementa: 'Integridade acadêmica. Boas práticas na vida acadêmica. Gestão do Tempo. Citação e paráfrase. Particularidades e conceitos da pesquisa em Administração. Tipos de pesquisa. Métodos de coleta, processamento e análise de dados. Normas técnicas para elaboração de um trabalho científico. Portal de Periódicos Capes e Sistema de Biblioteca da Unicamp (SBU).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94097',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'A Ciência Econômica. O papel da microeconomia na Ciência Econômica. Mercado: demanda, oferta e equilíbrio. Teoria do consumidor. Teoria da Firma. Produção: tecnologia e custos. Estruturas de mercado: concorrência perfeita, monopólio, concorrência imperfeita e oligopólio. Modelos de mark-up. Noções de organização industrial. Incerteza e decisões.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'NC104': {
			code: 'NC104',
			name: 'Introdução à Ciência dos Dados e à Informação',
			ementa: 'Contingência e probabilidade no mundo contemporâneo. Sentido dos dados e informação. Os diferentes tipos de informação. A informação estatística e o dilúvio de dados. Análise exploratória de dados. Medidas de tendência central e de dispersão. Representação gráfica de dados. Medidas de correlação. Correlação e causalidade. Introdução à Probabilidade. Regra de Bayes. Exemplos de aplicações nas diferentes Ciências Aplicadas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D997',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D96B40',
			obligatory: true
		},
		'PG301': {
			code: 'PG301',
			name: 'Evolução do Estado e Instituições Públicas no Brasil',
			ementa: 'Relações Estado e sociedade no Brasil. A perspectiva histórica da administração pública no Brasil: instituições e sua transformação. Federalismo no Brasil: conformação histórica e desafios contemporâneos. Governo, administração e políticas públicas no Brasil. Administração direta e indireta. Processos de reforma recente do Estado brasileiro. Novas relações estado-sociedade: concessões, parceria público-privado, organizações sociais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['PG200'],
			color: '#40C3D9',
			obligatory: true
		},
		'ER201': {
			code: 'ER201',
			name: 'Gestão Sustentável',
			ementa: 'Conceito de gestão sustentável e desenvolvimento sustentável. Planejamento, gestão e desempenho sustentável de organizações públicas e privadas. Políticas e legislação para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e metodologias de gestão sustentável. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['NC400'],
			color: '#D99740',
			obligatory: true
		},
		'GL303': {
			code: 'GL303',
			name: 'Estatística para Administração',
			ementa: 'Revisão de probabilidade e aplicações. Variáveis aleatórias discretas e contínuas. Distribuição normal. Distribuições amostrais. Estimação pontual. Estimação intervalar. Noções de amostragem. Teste de hipótese. Análise de variância. Análise de regressão e correlação. Aplicações em administração.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL201', 'NC104'],
			color: '#8D8D6C',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GL202'],
			color: '#40D940',
			obligatory: true
		},
		'GL608': {
			code: 'GL608',
			name: 'Administração de Sistemas de Informação',
			ementa: 'Tecnologia da Informação: conceitos fundamentais. Sistemas de informação. Gestão do conhecimento. Tecnologia da informação e desempenho empresarial. Negócios na era digital. Segurança da informação. Tecnologias e ferramentas emergentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'PG400': {
			code: 'PG400',
			name: 'Teorias do Desenvolvimento',
			ementa: 'Principais contribuições dos teóricos do desenvolvimento. O debate da Cepal sobre os países em desenvolvimento. Abordagem econômica e histórica de temas clássicos do desenvolvimento econômico tais como crescimento, mudança tecnológica, padrões de financiamento público e privado, distribuição de renda, desigualdade (individual, social e regional), políticas públicas, e recursos naturais e meio-ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['PG100'],
			color: '#40C3D9',
			obligatory: true
		},
		'PG800': {
			code: 'PG800',
			name: 'Formulação, Implementação e Avaliação de Políticas Públicas',
			ementa: 'Tipos e instrumentos de políticas públicas. As instituições no processo de elaboração de políticas públicas. Atores, grupos de interesse e redes de políticas. Ferramentas de Planejamento e Construção de Cenários. O ciclo de políticas públicas: identificação do problema, formação da agenda, formulação de alternativas, tomada de decisão, implementação, monitoramento e avaliação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9406B',
			obligatory: true
		},
		'GL507': {
			code: 'GL507',
			name: 'Macroeconomia',
			ementa: 'Ementa: Dimensão histórica e social da economia. Origens e fundamentos da moderna economia capitalista. O papel da macroeconomia na Ciência Econômica. Fluxo da Renda. Renda e Produção. Estudo dos agregados econômicos: PIB, Demanda Agregada e Renda Nacional. Mercado de trabalho. Consumo. Investimento. Governo: receitas e despesas. Moeda e juros. Setor Externo: balanço de pagamentos e câmbio.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GL603'],
			color: '#40D940',
			obligatory: true
		},
		'PG500': {
			code: 'PG500',
			name: 'Direito para Administração Pública I',
			ementa: 'O Direito na evolução do Poder, do Estado e seus elementos fundamentais. Constituição: Conceito, Espécies, Rigidez. Emenda constitucional. Formas de Estado e de Governo. Regimes governamentais. Os fundamentos e os objetivos da República Federativa do Brasil. Princípios, direitos e garantias fundamentais. Normas jurídicas: conceito e classificação: vigência e eficácia; irretroatividade e interpretação. Noções de Direito Público: Direito Constitucional, Direito Administrativo, Direito Tributário , Direito Penal, Direito Eleitoral e Direito Internacional. Noções de Direitos Difusos: Direito Ambiental, Direito Consumidor, Previdenciário, Infância e Juventude e Trabalho. Noções de Direito Privado: Direito Civil, Empresarial e Internacional.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C3',
			obligatory: true
		},
		'PG501': {
			code: 'PG501',
			name: 'Políticas Públicas no Brasil',
			ementa: 'Abordagem crítica e histórica de diferentes políticas públicas no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG301'],
			color: '#40C3D9',
			obligatory: true
		},
		'PG502': {
			code: 'PG502',
			name: 'Seminários em Políticas Públicas',
			ementa: 'Estudo de temas contemporâneos e relevantes para a gestão pública municipal, estadual e federal e políticas públicas em geral.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C3D940',
			obligatory: true
		},
		'PG710': {
			code: 'PG710',
			name: 'Comunicação e Marketing no Setor Público',
			ementa: 'Conceitos básicos de Marketing e Comunicação. Marketing, Comunicação e Sociedade: novas tendências, ética e responsabilidade, interação com o ambiente, etc. Gestão Operacional de Marketing e Comunicação. Sistemas de Informação e Pesquisa. Comunicação, prestação de contas e transparência das ações governamentais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4097D9',
			obligatory: true
		},
		'ER401': {
			code: 'ER401',
			name: 'Pesquisa Operacional',
			ementa: 'A pesquisa operacional como método de apoio à decisão. Problemas de otimização. Problemas de programação linear. Solução gráfica e noções geométricas do método simplex. Uso de softwares para resolução de PL. Noções de dualidade. Métodos de apoio à decisão multicritério. Análise envoltória de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL201'],
			color: '#D94040',
			obligatory: true
		},
		'GL304': {
			code: 'GL304',
			name: 'Métodos Quantitativos Aplicados',
			ementa: 'Apresentação e estudos de casos importantes de aplicação de métodos quantitativos em Administração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL303'],
			color: '#8D8D6C',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o séc. XIX até os anos 30. O processo de industrialização: criação da indústria de base, restrições e o Plano de Metas. As reformas institucionais e a retomada do crescimento: PAEG, Milagre Econômico e II PND. Anos 80: crise, instabilidade e estagnação. Inflação e planos de estabilização. Anos noventa: abertura da economia e reforma do Estado. O Plano Real. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e padrão de financiamento.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['GL507'],
			color: '#40D940',
			obligatory: true
		},
		'PG600': {
			code: 'PG600',
			name: 'Direito para Administração Pública II',
			ementa: 'Princípios e regras do Direito Administrativo. Processualidade ampla e processo administrativo. Administração direta, indireta e terceiro setor. Legislação aplicada à administração governamental. Princípios do Direito tributário. Direitos e garantias fundamentais ligados aos tributos. Matriz constitucional, as normas gerais do sistema tributário nacional, as limitações e a competências para instituir impostos no pacto federativo. Normas gerais das finanças públicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG500'],
			color: '#D940C3',
			obligatory: true
		},
		'PG701': {
			code: 'PG701',
			name: 'Economia do Setor Público',
			ementa: 'O Estado. Funções do setor público. Princípios de tributação. Sistema Tributário: evolução do sistema tributário brasileiro. Gasto público. Déficit e Dívida Pública. Financiamento do gasto público. A evolução das Políticas Públicas no período recente.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL507'],
			color: '#40D940',
			obligatory: true
		},
		'GL701': {
			code: 'GL701',
			name: 'Estágio I',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA456'],
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
			color: '#406BD9',
			obligatory: true
		},
		'PG704': {
			code: 'PG704',
			name: 'Laboratório de Políticas Públicas I',
			ementa: 'Identificação de problemas. Construção e usos de indicadores. Planejamento Estratégico Situacional. Metodologia de Diagnósticos de Situações. Mapa Cognitivo. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG600'],
			color: '#D940C3',
			obligatory: true
		},
		'PG709': {
			code: 'PG709',
			name: 'Governança em Políticas Públicas',
			ementa: 'Principais características das relações entre Estado e sociedade no período recente. Instituições públicas não estatais. Capital social e comunidade cívica. Governança: principais conceitos e modelos. Tipos de Governança: corporativa, pública e global. Estado em rede. Descentralização e coordenação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG800'],
			color: '#D9406B',
			obligatory: true
		},
		'PG810': {
			code: 'PG810',
			name: 'Administração Financeira e Orçamentária Pública',
			ementa: '1.Integrando o Planejamento à execução financeira; 2. SIAFI – Instrumento para execução orçamentária-financeira; 3. Execução das Receitas Públicas; 4. Execução das Despesas Públicas; 5. Vinculações de Receitas e Transferências Intergovernamentais; 6. Programação Financeira; 7. Restos a pagar, Despesas de Exercícios Anteriores e Suprimentos de Fundos; 8. Controle na Gestão Pública.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG300'],
			color: '#6BD940',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#40D96B',
			obligatory: true
		},
		'GL801': {
			code: 'GL801',
			name: 'Estágio II',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['GL701'],
			color: '#4040D9',
			obligatory: true
		},
		'PG801': {
			code: 'PG801',
			name: 'Laboratório de Políticas Públicas II',
			ementa: 'Metodologia de Planejamento de Situações. Construção de cenários. Gestão de projetos. Gestão do risco, do escopo, do tempo e dos custos. Proposição das etapas de implementação, monitoramento e avaliação de um projeto de política pública.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG704'],
			color: '#D940C3',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#9740D9',
			obligatory: true
		},
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9C340',
			obligatory: false
		}
	}
};

export default catalogue;
