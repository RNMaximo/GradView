const catalogue = {
	totalCredits: 214,
	maxCreditsSem: 44,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GL100', 'GL101', 'NC103', 'NC400', 'PG100']
		},
		'sem-2': {
			id: '2',
			subjects: ['GL201', 'GL203', 'GL302', 'PG200', 'PG201']
		},
		'sem-3': {
			id: '3',
			subjects: ['GL202', 'GL301', 'NC301', 'PG300', 'PG301']
		},
		'sem-4': {
			id: '4',
			subjects: ['ER201', 'ER401', 'GL400', 'GL603', 'PG400', 'PG800']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL502', 'PG500', 'PG501', 'PG502', 'PG704']
		},
		'sem-6': {
			id: '6',
			subjects: ['GL608', 'GL900', 'NC100', 'PG600', 'PG701', 'PG801']
		},
		'sem-7': {
			id: '7',
			subjects: ['GL601', 'GL700', 'GL701', 'PG709', 'PG710', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['GL800', 'GL801', 'PG810', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
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
			ementa: 'Funções reais de uma variável real. Limite. Continuidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96B40',
			obligatory: true
		},
		'GL101': {
			code: 'GL101',
			name: 'Introdução à Economia',
			ementa: 'Dimensão histórica e social da economia. Origens e fundamentos da moderna economia capitalista. Microeconomia x Macroeconomia. Estudo dos agregados econômicos: PIB, Demanda Agregada e Renda Nacional. Mercado de trabalho. Consumo. Investimento. Governo: receitas e despesas. Moeda e juros. Setor Externo: balanço de pagamentos e câmbio.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C3',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40C3D9',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. Perfil e funções do administrador. Processo administrativo. Tomada de decisão. Planejamento e estratégia. Processo de organização. Direção, coordenação e liderança. Processo de controle. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'PG100': {
			code: 'PG100',
			name: 'Introdução à Ciência Política',
			ementa: 'Fundamentos do pensamento político. Liberalismo e individualismo. A crítica ao liberalismo: a reação conservadora, a visão socialista e as tensões entre democracia e liberdade. Sociedade autorregulada, planejamento e intervencionismo estatal. Natureza, alcance e limites das políticas públicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C340D9',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Derivada e aplicações. Integral e aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#D96B40',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Obrigatoriedade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial. Fundamentação Normativa da práticacontábil no Brasil segundo os pronunciamentos do CPC. Normas contábeis aplicáveis ao mercado de capitais. Obrigatoriedade da Auditoria.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94097',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Discutir as principais teorias sobre a administração. Avaliar as diferentes abordagens adotadas pelo pensamento em gestão. Conhecer e discutir a base teórica que funda as correntes do pensamento em gestão e estabelecer relações críticas com as ditas correntes, sendo capaz de avaliar o uso de técnicas e instrumentos de gestão nos contextos históricos, econômicos e sociais em que foram gerados e difundidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C3',
			obligatory: true
		},
		'PG200': {
			code: 'PG200',
			name: 'Estado, Burocracia e Políticas Públicas',
			ementa: 'Concepções teóricas sobre a conformação do Estado. A Formação do Estado e de seu aparato administrativo. A função pública como instituição. Tipos de capitalismo, sistemas administrativos e mudanças nas funções estatais. Sistemas políticos e partidários. A burocracia e o Estado Moderno. A burocracia pública como ator. Burocracias e Políticas Públicas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['PG100'],
			color: '#C340D9',
			obligatory: true
		},
		'PG201': {
			code: 'PG201',
			name: 'Sistemas de Proteção Social',
			ementa: 'O contexto europeu no início do século XX: a hegemonia do liberalismo. A crise do liberalismo. O debate europeu do pós-guerra. Expansão dos direitos sociais no século XX. Keynesianismo. A trajetória da social-democracia europeia. A proposta neoliberal. Os sistemas de proteção social da Europa e América Latina. Os modelos de Estado de Bem-Estar Social. A crise dos Estados de Bem-Estar. Crise econômica, neoliberalismo e crise dos Estados Nacionais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#406BD9',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'Mercado: demanda, oferta e equilíbrio. Teoria do consumidor. Curvas de demanda. Produção: tecnologia e custos. Estruturas de mercado: concorrência perfeita, monopólio, concorrência imperfeita e oligopólio. Modelos de mark-up. Noções de Teoria dos Jogos e estratégia competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#40D9C3',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Noções de amostragem. Estatística descritiva: métodos gráficos, medidas de tendência central e medidas de dispersão. Introdução à probabilidade. Variáveis aleatórias discretas. Variáveis aleatórias contínuas. Distribuição normal. Análise de correlação. Regressão linear.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*GL201'],
			color: '#D96B40',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'PG300': {
			code: 'PG300',
			name: 'Contabilidade Pública',
			ementa: 'Função e objetivos da contabilidade pública. Objeto da Contabilidade pública. Patrimônio Público. Operações econômicas do setor público. Princípios básicos de contabilidade. Contabilidade pública e orçamento público. Receita e despesa pública. Contabilidade orçamentária, financeira e patrimonial. Demonstrações contábeis aplicadas ao setor público.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#D94097',
			obligatory: true
		},
		'PG301': {
			code: 'PG301',
			name: 'Evolução do Estado e Instituições Públicas no Brasil',
			ementa: 'Relações Estado e sociedade no Brasil: natureza, alcance e limites da intervenção estatal. Regime político e instituições políticas no Brasil: formas de organização e intermediação de interesses. A perspectiva histórica da administração pública no Brasil. Estado Federativo, Instituições e burocracia. Sistema Eleitoral e Partidário no Brasil contemporâneo. Governo, administração e políticas públicas no Brasil. Administração direta e indireta. Tipos de gestão. Processos de reforma recente do Estado brasileiro. Novas relações estado-sociedade: concessões, parceria público-privado, organizações sociais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['PG200'],
			color: '#C340D9',
			obligatory: true
		},
		'ER201': {
			code: 'ER201',
			name: 'Gestão Sustentável',
			ementa: 'Conceito de gestão sustentável e desenvolvimento sustentável. Planejamento, gestão e desempenho sustentável de organizações públicas e privadas. Políticas e legislação para o desenvolvimento sustentável. Indicadores de sustentabilidade. Ferramentas e metodologias de gestão sustentável. Questões atuais de gestão sustentável.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#6B40D9',
			obligatory: true
		},
		'ER401': {
			code: 'ER401',
			name: 'Pesquisa Operacional',
			ementa: 'Revisão de conceitos de álgebra linear e cálculo. Introdução a problemas de otimização e suas propriedades básicas: problemas de otimização irrestritos e com restrição. Programação Linear, formulação, resolução geométrica, o método simplex, dualidade e interpretação econômica. Modelos de fluxo em rede, problemas de transporte, caminho mínimo e fluxo máximo. Programação inteira. Programação por restrições. Programação Multi-objetivo. Simulação de Monte Carlo e de eventos discretos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL201'],
			color: '#D96B40',
			obligatory: true
		},
		'GL400': {
			code: 'GL400',
			name: 'Estatística II',
			ementa: 'Distribuições amostrais. Estatística Inferencial: introdução à estimação, testes de hipóteses, análise de variância. Controle estatístico de processo. Introdução à teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#D96B40',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#40D9C3',
			obligatory: true
		},
		'PG400': {
			code: 'PG400',
			name: 'Teorias do Desenvolvimento',
			ementa: 'Principais contribuições dos teóricos do desenvolvimento. O debate da Cepal sobre os países em desenvolvimento. Abordagem econômica e histórica de temas clássicos do desenvolvimento econômico tais como crescimento, mudança tecnológica, padrões de financiamento público e privado, distribuição de renda, desigualdade (individual, social e regional), políticas públicas, e recursos naturais e meio-ambiente.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['PG100'],
			color: '#C340D9',
			obligatory: true
		},
		'PG800': {
			code: 'PG800',
			name: 'Formulação, Implementação e Avaliação de Políticas Públicas',
			ementa: 'Tipos de políticas públicas. As instituições no processo de políticas públicas. Atores, grupos de interesse e redes de políticas. Instrumentos de políticas públicas. O ciclo de políticas públicas: identificação do problema, formação da agenda, formulação de alternativas, tomada de decisão, implementação, monitoramento e avaliação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9406B',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o séc. XIX até os anos 30. O processo de industrialização: criação da indústria de base, restrições e o Plano de Metas. As reformas institucionais e a retomada do crescimento: PAEG, Milagre Econômico e II PND. Anos 80: crise, instabilidade e estagnação. Inflação e planos de estabilização. Anos noventa: abertura da economia e reforma do Estado. O Plano Real. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e padrão de financiamento.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#40D9C3',
			obligatory: true
		},
		'PG500': {
			code: 'PG500',
			name: 'Direito para Administração Pública I',
			ementa: 'O Direito na evolução do Poder, do Estado e seus elementos fundamentais. Constituição: Conceito, Espécies, Rigidez. Emenda constitucional. Formas de Estado e de Governo. Regimes governamentais. Os fundamentos e os objetivos da República Federativa do Brasil. Princípios, direitos e garantias fundamentais. Normas jurídicas: conceito e classificação: vigência e eficácia; irretroatividade e interpretação. Noções de Direito Público: Direito Constitucional, Direito Administrativo, Direito Tributário , Direito Penal, Direito Eleitoral e Direito Internacional. Noções de Direitos Difusos: Direito Ambiental, Direito Consumidor, Previdenciário, Infância e Juventude e Trabalho. Noções de Direito Privado: Direito Civil, Empresarial e Internacional.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D997',
			obligatory: true
		},
		'PG501': {
			code: 'PG501',
			name: 'Políticas Públicas no Brasil',
			ementa: 'Conceitos e instrumentos da política pública. Abordagem histórica da política pública no Brasil. Abordagem crítica e histórica de diferentes políticas públicas no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG301'],
			color: '#C340D9',
			obligatory: true
		},
		'PG502': {
			code: 'PG502',
			name: 'Seminários em Políticas Públicas',
			ementa: 'Estudo de temas contemporâneos e relevantes para a gestão pública municipal, estadual e federal e políticas públicas em geral.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6BD940',
			obligatory: true
		},
		'PG704': {
			code: 'PG704',
			name: 'Laboratório de Políticas Públicas I',
			ementa: 'Planos, programas e projetos. Elementos constitutivos de um projeto. Processo de elaboração de um projeto. Busca e coleta de dados informações relevantes. Proposição de um projeto de política pública aplicada à realidade local.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'GL608': {
			code: 'GL608',
			name: 'Administração de Sistemas de Informação',
			ementa: 'Tecnologia da Informação: conceitos fundamentais. Sistemas de informação. Gestão do conhecimento. Tecnologia da informação e desempenho empresarial. Negócios na era digital. Segurança da informação. Tecnologias e ferramentas emergentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NC400'],
			color: '#6B40D9',
			obligatory: true
		},
		'GL900': {
			code: 'GL900',
			name: 'Metodologia de Pesquisa em Administração',
			ementa: 'Abordagens de pesquisa em Administração. Particularidades e conceitos da pesquisa em Administração. Tipos de pesquisa. Métodos de coleta, processamento e análise de dados. Como escrever um projeto de pesquisa e um trabalho científico. Normas técnicas para elaboração de um trabalho científico.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#D99740',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C3D940',
			obligatory: true
		},
		'PG600': {
			code: 'PG600',
			name: 'Direito para Administração Pública II',
			ementa: 'Princípios e regras do Direito Administrativo. Processualidade ampla e processo administrativo. Administração direta, indireta e terceiro setor. Legislação aplicada à administração governamental. Princípios do Direito tributário. Direitos e garantias fundamentais ligados aos tributos. Matriz constitucional, as normas gerais do sistema tributário nacional, as limitações e a competências para instituir impostos no pacto federativo. Normas gerais das finanças públicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG500'],
			color: '#40D997',
			obligatory: true
		},
		'PG701': {
			code: 'PG701',
			name: 'Economia do Setor Público',
			ementa: 'O Estado. Funções do setor público. Princípios de tributação. Sistema Tributário: evolução do sistema tributário brasileiro. Gasto público. Déficit e Dívida Pública. Financiamento do gasto público. A evolução das Políticas Públicas no período recente.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL502', 'GL603'],
			color: '#40D9C3',
			obligatory: true
		},
		'PG801': {
			code: 'PG801',
			name: 'Laboratório de Políticas Públicas II',
			ementa: 'Gestão de projetos: aspecto básicos. Gestão do risco, do escopo, do tempo e dos custos. O modelo PMBOK. Proposição das etapas de implementação, monitoramento e avaliação de um projeto de política pública.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG704'],
			color: '#40D940',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento estratégico. Níveis de planejamento. Formulação, implementação e avaliação estratégica. Estratégias e vantagem competitiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#6B40D9',
			obligatory: true
		},
		'GL700': {
			code: 'GL700',
			name: 'Trabalho de Conclusão I',
			ementa: 'Orientação, supervisão e avaliação do Estágio realizado nas Organizações. Caracterização da organização. A situação problemática na organização e o Problema de Pesquisa. Relatório parcial de pesquisa na organização.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA458'],
			color: '#40D96B',
			obligatory: true
		},
		'GL701': {
			code: 'GL701',
			name: 'Estágio I',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA458'],
			color: '#9740D9',
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
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#97D940',
			obligatory: true
		},
		'GL800': {
			code: 'GL800',
			name: 'Trabalho de Conclusão II',
			ementa: 'Fase complementar de orientação, supervisão e avaliação do Estágio Curricular nas Organizações. A execução do projeto de pesquisa. Coleta de dados. Elaboração de Relatório Final de Pesquisa. Sumário, Resumo e Introdução. Revisão Bibliográfica. Metodologia, análise e interpretação dos dados coletados. Considerações finais. Apêndices e anexos. Normas ABNT para apresentação de trabalhos acadêmicos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['GL700'],
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
			color: '#9740D9',
			obligatory: true
		},
		'PG810': {
			code: 'PG810',
			name: 'Administração Financeira e Orçamentária Pública',
			ementa: 'Teoria das finanças públicas. História das finanças públicas no Brasil. Sistema tributário brasileiro. Previdência social no Brasil. Sistema Federativo e descentralização. Elementos de reformas do estado. Dívida pública e necessidade de financiamento do setor público.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['PG300'],
			color: '#D94097',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#D94040',
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
