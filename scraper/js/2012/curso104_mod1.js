const catalogue = {
	totalCredits: 200,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['NC102', 'NC101', 'GL604', 'GL101', 'GL100', 'NC400']
		},
		'sem-2': {
			id: '2',
			subjects: ['NC202', 'GL203', 'GL202', 'GL201', 'NC300']
		},
		'sem-3': {
			id: '3',
			subjects: ['NC100', 'GL300', 'GL600', 'GL301', 'GL302']
		},
		'sem-4': {
			id: '4',
			subjects: ['GL200', 'GL403', 'LE803', 'GL603', 'GL400', 'LE702']
		},
		'sem-5': {
			id: '5',
			subjects: ['GL501', 'GL504', 'NC200', 'GL502', 'GL506', 'GL505']
		},
		'sem-6': {
			id: '6',
			subjects: ['NC500', 'GL602', 'GL606', 'GL605', 'GL607', 'ER200', 'GL601']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'CG800', 'CG706', 'MG702', 'CG702', 'GL700', 'GL701']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'CG705', 'CG806', 'CG700', 'GL800', 'GL801']
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
		'GL100': {
			code: 'GL100',
			name: 'Matemática I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6BB946',
			obligatory: true
		},
		'GL101': {
			code: 'GL101',
			name: 'Introdução à Economia',
			ementa: 'A economia de mercado. Produção e acumulação de riqueza. Determinação do nível de emprego e preços. Agregados macroeconômicos. Investimento e consumo. Oferta e demanda por moeda. Receitas e despesas do governo. Setor externo: balanço de pagamentos. Indicadores econômicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'GL604': {
			code: 'GL604',
			name: 'Sistemas de Informação e Gestão do Conhecimento',
			ementa: 'Tecnologia da informação. Sistemas de informação. O conhecimento como ativo da empresa. Gestão do conhecimento: criação, fluxo e disseminação de conhecimento. Aprendizado organizacional. Impactos na competitividade e na organização da empresa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B446',
			obligatory: true
		},
		'NC101': {
			code: 'NC101',
			name: 'Sociedade e Cultura no Mundo Contemporâneo',
			ementa: 'As mudanças socioculturais nos séculos XX e XXI. Modernidade e pós-modernidade; globalização; nação, estado e mercado; indivíduo e individualismo; o dogma do progresso e a sociedade de risco; as redes na Idade Média.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#86B946',
			obligatory: true
		},
		'NC102': {
			code: 'NC102',
			name: 'Língua, Linguagem e Discurso',
			ementa: 'O funcionamento da língua: relações de sentido; referência, predicação e determinação. Discurso e texto: historicidade e sentido; procedimentos de textualidade; sentido do texto. Argumentação: relações de argumentação; construção da argumentação. O discurso da ciência: funcionamento linguístico; descrição; argumentação; demonstração.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97D46',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8646B9',
			obligatory: true
		},
		'GL201': {
			code: 'GL201',
			name: 'Matemática II',
			ementa: 'Integral. Noções de Equações diferenciais ordinárias de 1a. ordem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#6BB946',
			obligatory: true
		},
		'GL202': {
			code: 'GL202',
			name: 'Microeconomia',
			ementa: 'Teoria do consumidor. Curvas de demanda. Produção: tecnologia e custos. Estruturas de mercado: concorrência pura, monopólio e concorrência imperfeita. Oligopólio. Noções de teoria dos jogos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96246',
			obligatory: true
		},
		'GL203': {
			code: 'GL203',
			name: 'Contabilidade I',
			ementa: 'Finalidades pelas quais se usa Contabilidade. Ativo. Passivo Líquido. Receitas. Despesas. Resultado. Equação Fundamental do Patrimônio. Configurações do estado Patrimonial. Procedimentos contábeis básicos. Método das Partidas dobradas. Operações com mercadorias. Avaliação dos estoques. Demonstrações Contábeis. Balanço Patrimonial. Demonstração de Resultado do Exercício. Demonstração das Mutações do Patrimônio Líquido. Demonstração dos Fluxos de Caixa. Demonstração do Valor Adicionado. Notas Explicativas. Diferenças básicas da Contabilidade Financeira e da Contabilidade Gerencial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4658B9',
			obligatory: true
		},
		'NC202': {
			code: 'NC202',
			name: 'Sociedade e Ambiente',
			ementa: 'As relações recíprocas, e em distintas escalas, entre fenômenos naturais, estruturas sociais, agentes e organizações indutoras de mudanças ambientais. Os elos entre natureza e políticas públicas, gestão estratégica, desenvolvimento tecnológico e demografia ambiental. As mudanças de paradigmas da sociedade e do conhecimento que acarretam, na atualidade, os conceitos e as estratégias de sustentabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6B46B9',
			obligatory: true
		},
		'NC300': {
			code: 'NC300',
			name: 'Práticas Sociais nas Organizações',
			ementa: 'Conceito de organização. Tipos de organizações. Instituições e organizações. Racionalidade burocrática, indivíduos e grupos. Conflito e relações de poder. Cultura organizacional. Dinâmica das organizações: continuidade ruptura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A246B9',
			obligatory: true
		},
		'GL300': {
			code: 'GL300',
			name: 'Contabilidade II',
			ementa: 'Estrutura das Demonstrações Contábeis. Aplicações da Análise de Balanços e seus usuários. Análise financeira e indicadores. Análise Vertical. Análise Horizontal. Contabilidade de Custos. Contabilidade Gerencial x Financeira. Métodos de Custeio. Custos por Departamento. Custeio baseado em Atividades (ABC). Custos para tomada de decisão. Custeio Variável. Relação custo-volume-lucro. Fixação de preço de venda e decisão sobre compra ou produção. Custos imputados e custos perdidos. Custos controláveis e custos estimados. Custo-padrão. Noções de auditoria interna e externa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL203'],
			color: '#4658B9',
			obligatory: true
		},
		'GL301': {
			code: 'GL301',
			name: 'Estatística I',
			ementa: 'Estatística descritiva. Valores centrais e medidas de dispersão. Probabilidade. Variáveis aleatórias discretas unidimensionais. Modelos probabilísticos. Variáveis aleatórias contínuas unidimensionais. Funções de variáveis aleatórias contínuas. Distribuições uniforme e normal. Outras distribuições importantes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL100'],
			color: '#6BB946',
			obligatory: true
		},
		'GL302': {
			code: 'GL302',
			name: 'Evolução do Pensamento em Gestão',
			ementa: 'Principais abordagens no campo da administração sob uma perspectiva histórica. Objeto, abrangência e limites das diversas abordagens. Administração e gestão no contexto contemporâneo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B974',
			obligatory: true
		},
		'GL600': {
			code: 'GL600',
			name: 'Estudos de Mercado e Marketing',
			ementa: 'Evolução do pensamento em marketing. O espaço do marketing na estrutura da empresa. Comportamento do consumidor. Composto mercadológico. Caracterização do mercado. Pesquisa de mercado. Identificação de oportunidades. Dimensões do produto: qualidade, desing, embalagem, marca, preço. Estratégia promocional. Propaganda. Distribuição. Segmentação de mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#B96246',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94699',
			obligatory: true
		},
		'GL200': {
			code: 'GL200',
			name: 'Matemática Financeira',
			ementa: 'Matemática financeira. Custos. Análise de investimentos. Noções de contabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9467D',
			obligatory: true
		},
		'GL400': {
			code: 'GL400',
			name: 'Estatística II',
			ementa: 'Amostragem. Interferência estatística. Estimação. Teste de hipótese. Correlação. Análise de variância. Análise de regressão. Controle estatístico de processo. Medidas estatísticas de avaliação de risco.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL301'],
			color: '#6BB946',
			obligatory: true
		},
		'GL403': {
			code: 'GL403',
			name: 'Instituições de Direito',
			ementa: 'Origens do direito. Direito como regulador da vida social. Direito constitucional. Normas sociais. Moral. Equidade e justiça. Direito objetivo. Direito subjetivo. Relação jurídica. Objeto de direito. Direito público e privado. Conceito e subdivisões. Direito civil. Capacidade. Personalidade. Fatos jurídicos. Direito de família e sucessões. Direito comercial. Ato de comércio. Sociedades comerciais. Títulos de crédito. Direito constitucional. Estado e sociedade. Direitos políticos. Direitos e garantias individuais. Direito penal. Culpabilidade. Pena. Direito administrativo. Licitação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B4',
			obligatory: true
		},
		'GL603': {
			code: 'GL603',
			name: 'Mercado, Concorrência e Competitividade',
			ementa: 'Construção de vantagens competitivas. Dimensões, formas e dinamismo da concorrência. A empresa, seus limites, sua expansão, seu núcleo de competência. Conceitos de indústria, mercado, setor. Tipologia de mercados. Fatores determinantes da competitividade: sistêmicos, setoriais e empresariais. Estratégias de concorrência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL202'],
			color: '#B96246',
			obligatory: true
		},
		'LE702': {
			code: 'LE702',
			name: 'Gestão de Recursos Humanos',
			ementa: 'Políticas e práticas da Gestão de Pessoas nas empresas. A Gestão de RH, Objetivos, Políticas e Estratégias. Histórico de Gestão de Pessoal de Relações de Trabalho. A Gestão Estratégica de RH. A Gestão de Pessoas por competências. A Atração de Competências para as Organizações. Recrutando e Selecionando Pessoas. Formação Profissional e Desenvolvimento de Pessoas. Sistema de Desenvolvimento de Pessoas. Avaliação de Performance. Outras dimensões da Gestão de Pessoas: Qualidade de Vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC300'],
			color: '#A246B9',
			obligatory: true
		},
		'LE803': {
			code: 'LE803',
			name: 'Gestão de Qualidade',
			ementa: 'Histórico da qualidade. Conceituação de sistemas de gerenciamento da qualidade. Normas ISO 9000 e certificação. Política da qualidade. Custos da qualidade. Novas abordagens sobre qualidade. Ferramentas da qualidade. Modelos de excelência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B990',
			obligatory: true
		},
		'GL501': {
			code: 'GL501',
			name: 'Mercado Financeiro e de Capitais',
			ementa: 'Estrutura do sistema financeiro brasileiro. Instrumentos de atuação do Banco Central. Mercado bancário e interbancário: principais produtos e serviços. Mercado de renda variável. Mercado de renda fixa. Underwriting, Ações, ADR e BDR. Bolsa de valores. Bolsa de Mercadorias. Derivativos. Commercial papers e Debêntures. Securitização. Captação de recursos no exterior (Eurobonds e Euronotes) Leasing. Factoring. Mercado de câmbio. Fundos de investimento. Seguros. Governança Corporativa. Risco de Mercado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL200'],
			color: '#B9467D',
			obligatory: true
		},
		'GL502': {
			code: 'GL502',
			name: 'Economia Brasileira',
			ementa: 'A inserção da economia brasileira no mundo desde o século XIX até os anos 30. A industrialização. A crise da dívida dos anos 80: crise fiscal do Estado brasileiro, superavits comerciais, instabilidade e estagnação. Os planos de estabilização. A abertura da economia e a reforma do Estado. O Plano Real. A crise de 1999. A herança dos anos noventa: vulnerabilidade externa e endividamento público. Características da economia brasileira que condicionam o crescimento no século XXI: competitividade, capacitação tecnológica, distribuição de renda e financiamento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101'],
			color: '#4674B9',
			obligatory: true
		},
		'GL504': {
			code: 'GL504',
			name: 'Direito Empresarial',
			ementa: 'Pessoa Física e Pessoa Jurídica de direito Privado. Pessoa Jurídica de direito Público. Autarquias. Fundações Privadas. Tipos de sociedades no Brasil. Contratos sociais. Holdings, Joint Ventures, incorporações, fusões e cisões. Concordata e Falência. Comércio: modelos de contratos, principais títulos de crédito. Títulos de Capital. Tipos de Ações. Direitos e obrigações dos acionistas. Títulos de dívida. Debêntures. Direitos dos Debenturistas. Propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL403'],
			color: '#B946B4',
			obligatory: true
		},
		'GL505': {
			code: 'GL505',
			name: 'Direito Tributário',
			ementa: 'Sistema Tributário Nacional Brasileiro. Competência Tributária. Impostos, Taxas e Contribuições de Melhoria. Contribuições especiais. Empréstimo compulsório. Sistema Previdenciário Nacional. Fato gerador do tributo. Contribuições previdenciárias. Impostos Federais. Impostos Estaduais. Impostos Municipais. Obrigações Acessórias. Obrigação pecuniária. Fiscalização tributária. Princípio da legalidade. Princípio da Anterioridade. Princípio da Anualidade. Créditos tributários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4690B9',
			obligatory: true
		},
		'GL506': {
			code: 'GL506',
			name: 'Gestão em Sistemas de Produção',
			ementa: 'Tipos e evolução de sistemas de produção. Relacionamento da produção com as demais áreas da organização. Arranjo físico e layout. Capacidade produtiva e produtividade. Planejamento e programação da produção. Sistemas de gestão da produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL400'],
			color: '#6BB946',
			obligatory: true
		},
		'NC200': {
			code: 'NC200',
			name: 'Epistemologia e Filosofia da Ciência',
			ementa: 'Introdução à filosofia e à epistemologia das ciências naturais. Ruptura e continuidade na história da ciência. A ciência moderna e suas raízes epistemológicas. A cultura e a produção do conhecimento. Os rumos da tecnociência contemporânea e de suas relações com a sociedade, com a política e com a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AB',
			obligatory: true
		},
		'ER200': {
			code: 'ER200',
			name: 'Gestão Ambiental',
			ementa: 'Conceituação de sistemas de Gerenciamento Ambiental. Normas ISO 14000 e certificação. Política ambiental e de qualidade. Desempenho ambiental de empresas, aspectos e riscos ambientais. Análise de riscos e controle de emergências. Metodologias, Planejamento e Implantação de SGAS. Controle de operação, documentação e registros. Avaliação de fornecedores e prestadores de serviços. Educação ambiental na indústria e comunicação. Auditoria ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4FB946',
			obligatory: true
		},
		'GL601': {
			code: 'GL601',
			name: 'Estratégia e Planejamento',
			ementa: 'O processo de planejamento. Conceitos, metodologias e ferramentas de planejamento. Níveis de planejamento. Estratégias. Modelos de planejamento e gestão estratégica. Formulação, implementação e avaliação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400'],
			color: '#8646B9',
			obligatory: true
		},
		'GL602': {
			code: 'GL602',
			name: 'Gestão Financeira',
			ementa: 'Sistema Financeiro Nacional. Valor e Orçamento de Capital. Gestão do capital circulante e da necessidade do capital de giro. Gestão de tesouraria. Papel do crédito. Administração do passivo circulante. Orçamento econômico financeiro. Projeções de receitas, custos e despesas. Orçamento de investimentos. VPL. Critérios de Avaliação de Investimento. Valor Presente Líquido. Taxa Interna de Retorno. Payback simples. Payback descontado. Estrutura de Capital. Políticas de dividendos. Custo do Capital próprio. Custo do capital de terceiros. Custo médio ponderado de capital (WACC).',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL501'],
			color: '#B9467D',
			obligatory: true
		},
		'GL605': {
			code: 'GL605',
			name: 'Gestão de Sistemas de Logística',
			ementa: 'Fundamentos de logística. Gestão da cadeia de suprimentos. Controle de estoques. Logística integrada.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL506'],
			color: '#6BB946',
			obligatory: true
		},
		'GL606': {
			code: 'GL606',
			name: 'Direito Trabalhista',
			ementa: 'Contrato Individual de Trabalho. Tipos de Remuneração. Alterações do contrato de trabalho. Direitos e obrigações básicas do trabalhador. Direitos e obrigações básicas do empregador. Suspensão e interrupção do contrato de trabalho. Terminação do contrato de trabalho. Aviso prévio. Justas causas. Fundo de Garantia por Tempo de Serviço. Encargos trabalhistas por conta do empregador. Encargos trabalhistas por conta do empregado. Demissão sem justa causa. Terceirização e subcontratação. Encargos sociais e previdenciários. Cooperativas de trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99946',
			obligatory: true
		},
		'GL607': {
			code: 'GL607',
			name: 'Pesquisa Operacional',
			ementa: 'Elementos da análise de decisões, simulação de Monte Carlo, delineamento de experimentos. Otimização de problemas de programação linear e inteira. Modelos de rede. Teoria das filas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['GL100', 'GL400'],
			color: '#6BB946',
			obligatory: true
		},
		'NC500': {
			code: 'NC500',
			name: 'Lógica',
			ementa: 'Introdução ao estudo da moderna lógica: funções proposicionais, quantificação, função de verdade, verdade lógica, modelo, linguagem formal e método axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94662',
			obligatory: true
		},
		'CG702': {
			code: 'CG702',
			name: 'Gestão do Comércio Internacional',
			ementa: 'Sistema brasileiro de comércio exterior: instituições e políticas. Classificação de mercadorias. Tipologias. Composição da pauta de exportações e de importações do Brasil: principais produtos e perfil das empresas exportadoras e importadoras. Destino das exportações e origem das importações. Infraestrutura brasileira de comércio exterior: principais pontos de entrada/saída. Características das operações de comércio internacional. Incoterms. Crédito no comércio exterior. Tributação. Indicadores de desempenho.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL603'],
			color: '#B96246',
			obligatory: true
		},
		'CG706': {
			code: 'CG706',
			name: 'Elaboração de Projeto de Comércio Internacional I',
			ementa: 'Conceitos básicos sobre projetos, planos de negócios e empreendedorismo. Aspectos administrativos, legais, mercadológicos, técnicos, econômicos e financeiros. Custo e financiamento. Estudo de viabilidade. Análise de risco. Elaboração de projeto ou plano de negócio incluindo aspectos de comércio internacional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4F46B9',
			obligatory: true
		},
		'CG800': {
			code: 'CG800',
			name: 'Direito Internacional',
			ementa: 'Globalização econômica e direito econômico internacional; Sistema financeiro internacional; tributação internacional. Investimento direto estrangeiro no Brasil e investimento brasileiro no exterior; Comércio internacional; Concorrência global e regulação em mercados integrados; Contratos internacionais e Arbitragem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL403'],
			color: '#B946B4',
			obligatory: true
		},
		'GL700': {
			code: 'GL700',
			name: 'Trabalho de Conclusão I',
			ementa: 'Orientação, supervisão e avaliação do Estágio realizado nas Organizações. Caracterização da organização. A situação problemática na organização e o Problema de Pesquisa. Relatório parcial de pesquisa na organização.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA460'],
			color: '#B94646',
			obligatory: true
		},
		'GL701': {
			code: 'GL701',
			name: 'Estágio I',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['AA460'],
			color: '#46B958',
			obligatory: true
		},
		'MG702': {
			code: 'MG702',
			name: 'Economia Internacional',
			ementa: 'Comércio internacional: teorias e políticas. Investimento direto e comércio. Empresas multinacionais e sistemas internacionais de produção. Evolução do regime de comércio internacional. Acordos regionais de comércio. Crédito no comércio exterior. Tributação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL101', 'GL202'],
			color: '#806B80',
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
		'CG700': {
			code: 'CG700',
			name: 'Comércio e Finanças Internacionais',
			ementa: 'Comércio internacional: teoria e políticas. Instituições multilaterais que regulam o comércio internacional. Acordos regionais de comércio. Investimentos internacionais. Acordos sobre investimentos estrangeiros. Macroeconomia aberta: determinação das taxas de juros e de câmbio. Paridade de poder de compra. Sistema financeiro internacional contemporâneo. O Brasil nos fluxos de comércio e de investimentos internacionais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GL603'],
			color: '#B96246',
			obligatory: true
		},
		'CG705': {
			code: 'CG705',
			name: 'Estratégia e Competitividade Internacional',
			ementa: 'Internacionalização da produção ou de outras funções. Estratégias de crescimento das empresas: possibilidades e limites. Empresas multinacionais. Formas de internacionalização. Vantagens competitivas. Marketing internacional.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46ABB9',
			obligatory: true
		},
		'CG806': {
			code: 'CG806',
			name: 'Elaboração de Projeto de Comércio Internacional II',
			ementa: 'Continuação da elaboração de projeto ou plano de negócios iniciada na disciplina Elaboração de Projetos de Comércio Internacional I.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'GL800': {
			code: 'GL800',
			name: 'Trabalho de Conclusão II',
			ementa: 'Fase complementar de orientação, supervisão e avaliação do Estágio Curricular nas Organizações. A execução do projeto de pesquisa. Coleta de dados. Elaboração de Relatório Final de Pesquisa. Sumário, Resumo e Introdução. Revisão Bibliográfica. Metodologia, análise e interpretação dos dados coletados. Considerações finais. Apêndices e anexos. Normas ABNT para apresentação de trabalhos acadêmicos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['GL700'],
			color: '#B94646',
			obligatory: true
		},
		'GL801': {
			code: 'GL801',
			name: 'Estágio II',
			ementa: 'Estágio supervisionado em atividades de gestão em organizações privadas ou públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:18, D:0, HS:20, SL:0, C:20},
			requisitos: ['GL701'],
			color: '#46B958',
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
		}
	}
};

export default catalogue;
