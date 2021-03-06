const catalogue = {
	totalCredits: 255,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['SL110', 'NT102', 'NC103', 'SL109', 'NT100', 'SL105']
		},
		'sem-2': {
			id: '2',
			subjects: ['SL205', 'SL209', 'NT203', 'SL108', 'NT206', 'NT205', 'NT306']
		},
		'sem-3': {
			id: '3',
			subjects: ['SL303', 'NC301', 'SL208', 'NT304', 'NT402', 'NT305']
		},
		'sem-4': {
			id: '4',
			subjects: ['NT503', 'ELET04', 'NT600', 'NT202', 'NT405', 'NT408', 'NT407']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'NT507', 'NT508', 'NT509', 'NT603', 'NT512', 'NT511', 'NT501']
		},
		'sem-6': {
			id: '6',
			subjects: ['NT611', 'NT610', 'NT607', 'NT608', 'NT606', 'NC100', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['NT706', 'NT707', 'NT609', 'NT708', 'ELET07', 'NT801']
		},
		'sem-8': {
			id: '8',
			subjects: ['NT807', 'NT808', 'NT806', 'SL800']
		},
		'sem-9': {
			id: '9',
			subjects: ['NT809', 'NT804', 'NT802']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['NC---'],
		},
	},

	subjects: {
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9469C',
			obligatory: true
		},
		'NT100': {
			code: 'NT100',
			name: 'Nutrição: Ciência e Profissão',
			ementa: 'Conhecimento do processo histórico constitutivo da Nutrição como Ciência e da Nutrição como profissão, análise histórica da emergência e evolução dos cursos de Nutrição em nível superior e da atuação do profissional nutricionista em diversas áreas, discussão sobre o perfil do profissional nutricionista em suas áreas de atuação no mercado atual, conhecimento sobre os órgãos que são responsáveis pela regulamentação da profissão de nutricionista.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99C46',
			obligatory: true
		},
		'NT102': {
			code: 'NT102',
			name: 'Bioquímica I',
			ementa: 'Equilíbrio ácido-base. Estrutura de carboidratos, lipídeos, aminoácidos e proteínas. Enzimas e coenzimas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'SL105': {
			code: 'SL105',
			name: 'Biologia Celular e Molecular',
			ementa: 'Organização molecular da célula. Estrutura e função do núcleo. Estudo dos processos de replicação, transcrição e tradução. Aspectos estruturais e funcionais das biomembranas. Interações celulares, citoesqueleto e transporte. Conhecimentos básicos da estrutura e função celular e das principais organelas citoplasmáticas. Ciclo e morte celular.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4680B9',
			obligatory: true
		},
		'SL109': {
			code: 'SL109',
			name: 'Anatomia e Histologia Aplicadas à Nutrição',
			ementa: 'Oferecimento de treinamento teórico-prático em anatomia e histologia dos sistemas nervoso, muscular esquelético, circulatório, respiratório, urinário, digestório, endócrino e reprodutor. Ênfase nos aspectos histológicos e anatômicos que repercutem nas patologias dos diversos sistemas abordados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B946',
			obligatory: true
		},
		'SL110': {
			code: 'SL110',
			name: 'Saúde e Sociedade',
			ementa: 'Relação saúde e sociedade nos diferentes momentos históricos. Práticas de saúde como construção social. Racionalidades terapêuticas. Corporeidade. Relações entre o processo saúde-doença e as determinações socioculturais. Identidade e prática dos profissionais de saúde. Aspectos de promoção e prevenção em saúde. Demanda, necessidade de saúde e intervenção social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B99C',
			obligatory: true
		},
		'NT203': {
			code: 'NT203',
			name: 'Bioquímica II',
			ementa: 'Glicólise, glicogenólise, glicogênese, gliconeogênese. Ciclo de Krebs. Oxidação de ácidos graxos e síntese de ácidos graxos. Cadeia respiratória. Metabolismo de aminoácidos e compostos nitrogenados. Inter-relações metabólicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT102'],
			color: '#B946B9',
			obligatory: true
		},
		'NT205': {
			code: 'NT205',
			name: 'Microbiologia e Higiene dos Alimentos I',
			ementa: 'Micro-organismos de importância em alimentos: patogênicos, deterioradores , ou empregados para obtenção de produtos. Fatores que interferem no crescimento de micro-organismos nos alimentos. Microbiota natural do corpo humano e saúde do manipulador de alimentos. Agentes sanitizantes. Doenças transmitidas por alimentos: diagnóstico, prevenção e investigação de surtos epidemiológicos. Manual de Boas Práticas e Procedimentos Operacionais Padronizados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL105'],
			color: '#4680B9',
			obligatory: true
		},
		'NT206': {
			code: 'NT206',
			name: 'Composição e Análise de Alimentos',
			ementa: 'Conceitos de química. Propriedades da água. Macro e micronutrientes. Pigmentos naturais. Enzimas. Compostos de aroma e sabor. Composição de alimentos: Açúcares e produtos açucarados. Óleos, gorduras e derivados. Grãos oleaginosos e cereais. Frutas e Hortaliças. Carnes e derivados. Leite e derivados. Ovos. Alimentos enriquecidos e para fins especiais. Preparo e padronização de amostras e soluções. Técnicas de amostragem. Determinação de parâmetros físico-químicos e da composição centesimal de alimentos. Métodos físicos. Técnicas cromatográficas. Análise de compostos bioativos em alimentos.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'NT306': {
			code: 'NT306',
			name: 'Metodologia de Pesquisa Aplicada à Nutrição',
			ementa: 'Construção do conhecimento. História da ciência e abordagem crítica de sua evolução. Evolução da ciência da nutrição. Conceitos da metodologia da pesquisa científica. Elaboração de projeto de pesquisa. As bases de dados científicos e pesquisa bibliográfica. Leitura crítica de artigos científicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'SL108': {
			code: 'SL108',
			name: 'Fisiologia Humana I',
			ementa: 'Estudo da fisiologia humana do sistema nervoso e a sua relação com os diferentes sistemas orgânicos. Estudo da fisiologia do sistema músculo-esquelético. Introdução aos conceitos gerais de homeostasia e bioeletrogênese.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL109'],
			color: '#B9B946',
			obligatory: true
		},
		'SL205': {
			code: 'SL205',
			name: 'Saúde Coletiva',
			ementa: 'Campo e história da Saúde Coletiva. Políticas e modelos assistenciais. SUS e ações de saúde. Saúde da Família. Planejamento em Saúde. Interdisciplinaridade no trabalho em saúde. Produção de serviços de saúde, formação de pessoal de saúde e estrutura social. Possibilidades de intervenção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL110'],
			color: '#46B99C',
			obligatory: true
		},
		'SL209': {
			code: 'SL209',
			name: 'Matemática para Ciências da Saúde',
			ementa: 'Funções de uma variável. Aspectos gráficos de funções. Introdução às funções vetoriais. Noções de derivada e integral. Aplicações de funções em problemas práticos da Nutrição e Ciências do Esporte. Introdução à probabilidade e suas aplicações em saúde.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6346B9',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'NT304': {
			code: 'NT304',
			name: 'Tecnologia de Alimentos',
			ementa: 'Conceito de Tecnologia de Alimentos. Principais alterações em alimentos. Princípios de conservação de alimentos. Conservação de alimentos pelo uso de calor. Conservação de alimentos pelo uso do frio. Conservação de alimentos por controle de umidade. Conservação de alimentos por incorporação de solutos. Conservação de alimentos por fermentação. Aditivos em alimentos. Embalagens. Processamento de leite e derivados. Processamento de carnes e derivados. Processamento de frutas e hortaliças. Processamento de óleos e gorduras. Processamento de cereais e derivados. Processamento de produtos açucarados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT206'],
			color: '#80B946',
			obligatory: true
		},
		'NT305': {
			code: 'NT305',
			name: 'Microbiologia e Higiene dos Alimentos II',
			ementa: 'Plano de amostragem. Micro-organismos indicadores. Vigilância Sanitária. Legislação e padrões microbiológicos para alimentos e água. Probióticos. Determinação de micro-organismos por métodos físicos, químicos, moleculares e imunológicos. Noções de toxicologia de alimentos. Análise de perigos e pontos críticos de controle de alimentos (APPCC). Qualidade total. ISO 9000.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT205'],
			color: '#4680B9',
			obligatory: true
		},
		'NT402': {
			code: 'NT402',
			name: 'Técnica Dietética',
			ementa: 'Sistematização dos procedimentos e das técnicas adequadas para a aquisição, seleção, conservação, preparação e armazenamento dos alimentos. Utilização de Ficha Técnica para padronização de receitas. Pesos e medidas. Fator de correção, índice de conversão e índice de reidratação e custos. Cálculo do valor nutricional (total e porção). Estudo das tranformações físico-químicas e sensoriais durante o processamento de gorduras, cereais e derivados, leite, ovos, hortaliças e frutas, carnes, aves e pescados, leguminosas, bebidas, massas, açúcares, caldos e molhos. Rótulos e embalagens.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#9C46B9',
			obligatory: true
		},
		'SL208': {
			code: 'SL208',
			name: 'Fisiologia Humana II',
			ementa: 'Estudo de fisiologia humana, abordando do ponto de vista funcional os sistemas cardiovascular, respiratório, digestório, urinário, endócrino e reprodutor.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT203', 'SL108'],
			color: '#B98080',
			obligatory: true
		},
		'SL303': {
			code: 'SL303',
			name: 'Estatística e Bioestatística',
			ementa: 'Estatística descritiva, probabilidade, variáveis aleatórias, distribuição de frequências, distribuições discretas e contínuas, medidas de tendência central, medidas de dispersão, análise de variância, inferência estatística, distribuição gráfica, gráficos de controle, intervalos de confiança, amostragens e testes de hipóteses, regressão e correlação.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['SL209'],
			color: '#6346B9',
			obligatory: true
		},
		'NT202': {
			code: 'NT202',
			name: 'Parasitologia',
			ementa: 'Principais agentes etiológicos de doenças parasitárias humanas, vetores e reservatórios no Brasil. Interações: parasita-hospedeiro (transmissão, ciclo biológico, patogenia e formas clínicas). Diagnóstico laboratorial e epidemiológico. Manejo de pacientes infectados. Medidas de controle e profilaxia individuais e coletivas.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'NT405': {
			code: 'NT405',
			name: 'Nutrição e Dietética',
			ementa: 'Conceitos de alimentos, alimentação e nutrição. Energia e Nutrientes: propriedades, funções, fontes, biodisponibilidade e metabolismo, recomendações e necessidades. Utilização de tabelas de composição química de alimentos. Princípios gerais e leis da alimentação. Guias alimentares e ferramentas de recomendações nutricionais.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT206', 'NT402', 'SL208'],
			color: '#9C8080',
			obligatory: true
		},
		'NT407': {
			code: 'NT407',
			name: 'Planejamento em Alimentação Coletiva',
			ementa: 'Conceitos e caracterização acerca da organização e funcionamento da Alimentação Coletiva. Planejamento de recursos físicos e funcionais em Unidades de Alimentação e Nutrição. Legislações envolvidas no Planejamento em Alimentação Coletiva.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT305', 'NT402'],
			color: '#7163B9',
			obligatory: true
		},
		'NT408': {
			code: 'NT408',
			name: 'Metodologias Pedagógicas em Saúde',
			ementa: 'Fundamentos teóricos e práticos de metodologias pedagógicas para o trabalho em saúde. Abordagens pedagógicas; limites e possibilidades; metodologias participativas didático-pedagógicas. A comunicação como ferramenta para estabelecer relações de cuidado. O trabalho em equipes multidisciplinares. Conhecimento e prática de diversas metodologias.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B94680',
			obligatory: true
		},
		'NT503': {
			code: 'NT503',
			name: 'Epidemiologia Aplicada à Nutrição',
			ementa: 'Conceitos básicos de Epidemiologia; História Natural da Doença. Indicadores de Saúde. Sistemas de Informação em Saúde (SIM, SINASC, SISVAN). Transição Demográfica e Epidemiológica. Epidemiologia Descritiva. Delineamento de estudos em Epidemiologia Nutricional. Introdução à análise de dados em Epidemiologia Nutricional. Vigilância Epidemiológica.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL303'],
			color: '#6346B9',
			obligatory: true
		},
		'NT600': {
			code: 'NT600',
			name: 'Avaliação do Estado Nutricional',
			ementa: 'Determinantes do estado nutricional da população. Indicadores antropométricos, clínicos, bioquímicos, demográfico, sócio-econômicos e culturais. Avaliação do estado e situação nutricional da população.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT203', 'SL208'],
			color: '#B9639D',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'NT501': {
			code: 'NT501',
			name: 'Alimentos Funcionais: Modo de Ação',
			ementa: 'Alimentos com alegação de propriedade funcional, nutracêuticos e compostos bioativos. Conceituação e definição de prébiótico e próbiótico, seus possíveis efeitos benefícios e mecanismos de ação. Composto ou substância bioativa presentes nos alimentos, fontes e seus possíveis mecanismos de ação na prevenção e promoção da saúde.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT405'],
			color: '#9C8080',
			obligatory: true
		},
		'NT507': {
			code: 'NT507',
			name: 'Segurança Alimentar e Nutricional',
			ementa: 'Fome, Segurança Alimentar e Nutricional (SAN) e Direito Humano à Alimentação Adequada (DHAA). Determinantes da Insegurança Alimentar Nutricional (IAN). Modelo de desenvolvimento e crises econômicas. Sistema Alimentar brasileiro. Política, reforma agrária, agricultura familiar, ecológica, tradicional, insumos e sementes geneticamente modificadas. Produção, disponibilidade, desperdício de alimentos e suas implicações ambientes. Água como Direito Humano. Leis e políticas que estruturam programas de SAN. Caracterização e avaliação de intervenções e programas emergenciais e estruturais de SAN.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT503'],
			color: '#6346B9',
			obligatory: true
		},
		'NT508': {
			code: 'NT508',
			name: 'Nutrição e Dietética nos Ciclos da Vida',
			ementa: 'Conceitos básicos da alimentação e nutrição em situações fisiológicas: Nutrição e planejamento da dieta do pré-escolar. Nutrição e planejamento da dieta do escolar. Nutrição e planejamento da dieta do adolescente. Nutrição e planejamento da dieta do adulto. Nutrição e planejamento da dieta do idoso. Nutrição e planejamento da dieta do vegetariano.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT405', 'NT600'],
			color: '#AB728F',
			obligatory: true
		},
		'NT509': {
			code: 'NT509',
			name: 'Farmacologia Aplicada à Nutrição',
			ementa: 'Estudo da interação fármaco-nutrientes. Efeito dos fármacos sobre biodisponibilidade de macro e micro-nutrientes. Ação dos fármacos sobre nutrição humana, apetite, sistema endócrino. Fitoterápicos e homeopáticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT203', 'NT405'],
			color: '#AB639D',
			obligatory: true
		},
		'NT511': {
			code: 'NT511',
			name: 'Gestão em Alimentação Coletiva',
			ementa: 'Gestão de Restaurantes Comerciais e de Unidades de Alimentação e Nutrição. Planejamento e elaboraçãoo de cardápios para coletividades. Gestão financeira e logística de suprimentos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT405', 'NT407'],
			color: '#87729D',
			obligatory: true
		},
		'NT512': {
			code: 'NT512',
			name: 'Educação Alimentar e Nutricional',
			ementa: 'Fundamentos teóricos e históricos da Educação Alimentar e Nutricional no Brasil e no Mundo. Educação Alimentar e Nutricional e Promoção da Saúde. Planejamento e avaliação de Programas de Educação Alimentar e Nutricional. Educação Alimentar e Nutricional e Políticas Públicas. Educomunicação em Nutrição, Alimentação e Cultura.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['NT405', 'NT408', 'NT600'],
			color: '#AF638A',
			obligatory: true
		},
		'NT603': {
			code: 'NT603',
			name: 'Avaliação do Consumo Alimentar',
			ementa: 'Métodos de inquérito alimentar. Validade, reprodutibilidade e fontes de erro na avaliação do consumo alimentar. Marcadores bioquímicos da ingestão alimentar. Aplicação das recomendações nutricionais para grupos populacionais e indivíduos. Aplicação dos métodos de inquérito alimentar em diferentes tipos de estudos epidemiológicos. Análise e interpretação de dados de consumo alimentar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT304'],
			color: '#80B946',
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
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469CB9',
			obligatory: true
		},
		'NT606': {
			code: 'NT606',
			name: 'Nutrição Materno-Infantil',
			ementa: 'Avaliação e recomendações para planejamento de atividades de orientação nutricional para mulheres no ciclo gravídico-puerperal e o bebê no primeiro ano de vida.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT508', 'NT512', 'NT603'],
			color: '#9E8575',
			obligatory: true
		},
		'NT607': {
			code: 'NT607',
			name: 'Dietoterapia I',
			ementa: 'Conceitos de dietoterapia. Terapia nutricional enteral e parenteral. Dietoterapia na desnutrição energético-protéica, nas enfermidades orais, esofágicas, gástricas, intestinais, hepáticas, pancreáticas, das vias biliares, nas alergias alimentares, no estresse fisiológico e no câncer.',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT508', 'NT600', 'NT603'],
			color: '#A1857B',
			obligatory: true
		},
		'NT608': {
			code: 'NT608',
			name: 'Fisiopatologia da Nutrição I',
			ementa: 'Introdução à imunologia e reação inflamatória. Fisiopatologia de doenças associadas à nutrição: desnutrição energético-protéica, enfermidades orais, esofágicas, gástricas, intestinais, hepáticas, pancreáticas e das vias biliares. Fisiopatologia das alergias alimentares e de neoplasias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL208'],
			color: '#B98080',
			obligatory: true
		},
		'NT610': {
			code: 'NT610',
			name: 'Nutrição em Saúde Coletiva',
			ementa: 'Transição Nutricional. Epidemiologia Nutricional: caracterização e análise do padrão alimentar e dos distúrbios nutricionais com implicações em Saúde Coletiva (sobrepeso/obesidade, desnutrição, anemia, deficiência de vitamina A, dentre outros). Leis e políticas que estruturam os programas de Nutrição em Saúde Coletiva. Caracterização e avaliação de intervenções e programas de Nutrição em Saúde Coletiva.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT507', 'NT508', 'NT603'],
			color: '#857B85',
			obligatory: true
		},
		'NT611': {
			code: 'NT611',
			name: 'Psicologia da Nutrição I',
			ementa: 'Conhecimentos básicos em psicologia. Subjetividade. Interação humana e relações interpessoais. Formação da personalidade. Concepções do normal e patológico. Aspectos biopsicossociais envolvidos no comportamento alimentar e nos transtornos alimentares. Fatores emocionais que interferem no comportamento alimentar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B980',
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
		'NT609': {
			code: 'NT609',
			name: 'Erros Inatos do Metabolismo e Nutrição',
			ementa: 'Conceitos básicos de genética, biologia molecular, mutações e leis da hereditariedade. Alterações bioquímicas, matabólicas e tratamento nutricional adequado nos erros inatos do metabolismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT203', 'NT405', 'SL208'],
			color: '#AF6D93',
			obligatory: true
		},
		'NT706': {
			code: 'NT706',
			name: 'Psicologia e Nutrição II',
			ementa: 'Instrumentalização do nutricionista para a escuta psicológica na sua prática. Teoria de grupo. Trabalho com coletivos. Trabalho em equipe. Relação nutricionista paciente (cliente e família). Implicações dos modelos familiares no desenvolvimento de hábitos alimentares. Atendimento hospitalar. Reabilitação. Perdas/morte. Seleção de pessoal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT611'],
			color: '#46B980',
			obligatory: true
		},
		'NT707': {
			code: 'NT707',
			name: 'Dietoterapia II',
			ementa: 'Dietoterapia na obesidade e na magreza, nos distúrbios alimentares, no Diabetes Mellitus, nas doenças cardiovasculares, na Síndrome Metabólica, nas doenças renais, na Doença Pulmonar Obstrutiva Crônica (DPOC), nas anemias, e na Síndrome da Imunodeficiência Adquirida (AIDS).',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT607'],
			color: '#A1857B',
			obligatory: true
		},
		'NT708': {
			code: 'NT708',
			name: 'Fisiopatologia da Nutrição II',
			ementa: 'Fisiopatologia de doenças associadas à nutrição: obesidade, magreza, distúrbios alimentares, diabetes mellitus, doenças cardiovasculares, síndrome metabólica, doenças renais, pulmonares, anemias e na Síndrome da Imunodeficiência Adquirida (AIDS).',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT608'],
			color: '#B98080',
			obligatory: true
		},
		'NT801': {
			code: 'NT801',
			name: 'Nutrigenômica',
			ementa: 'Constituintes da dieta que podem afetar a expressão gênica e ou a estrutura do gene. Diversidade genética e a população humana. Métodos em genômica nutricional: sequenciamento, genotipagem, expressão gênica. Genética e epidemiologia molecular. Metabolômica. Genética Vs determinismo nutricional, cultural e individual. Métodos de nutrição personalizada destinada aos casos de má nutrição. Implicações éticas, legais e sociais da nutrigenômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#B98046',
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
		'NT806': {
			code: 'NT806',
			name: 'Estágio em Nutrição Clínica I',
			ementa: 'Estágio desenvolvido em hospitais, clínicas e ambulatórios, onde os alunos aplicam os conhecimentos teóricos da dietoterapia nas unidades de internação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475'],
			color: '#B94663',
			obligatory: true
		},
		'NT807': {
			code: 'NT807',
			name: 'Estágio em Nutrição e Saúde Coletiva I',
			ementa: 'Estágio em Ambulatórios de Especialidades, na Atenção Básica à Saúde, em Instituições de Atenção à Saúde, em Programas de Alimentação Escolar e em equipamentos de Segurança Alimentar e Nutricional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475'],
			color: '#46B9B9',
			obligatory: true
		},
		'NT808': {
			code: 'NT808',
			name: 'Estágio em Unidades de Alimentação e Nutrição I',
			ementa: 'Disciplina prática conduzida sob a forma de estágio em unidades de alimentação que aplicam métodos e técnicas de gerenciamento para o atendimento nutricional de grupos populacionais sadios.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475'],
			color: '#B96346',
			obligatory: true
		},
		'SL800': {
			code: 'SL800',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho Monográfico a ser conduzido pelo aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:3, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA465'],
			color: '#4646B9',
			obligatory: true
		},
		'NT802': {
			code: 'NT802',
			name: 'Estágio em Nutrição Clínica II',
			ementa: 'Estágio desenvolvido em hospitais, clínicas e ambulatórios, onde os alunos aplicam os conhecimentos teóricos da dietoterapia nas unidades de internação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475'],
			color: '#9CB946',
			obligatory: true
		},
		'NT804': {
			code: 'NT804',
			name: 'Estágio em Nutrição e Saúde Coletiva II',
			ementa: 'Estágio em Ambulatórios de Especialidades, na Atenção Básica à Saúde, em Instituições de Atenção à Saúde, em Programas de Alimentação Escolar e em equipamentos de Segurança Alimentar e Nutricional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475'],
			color: '#8046B9',
			obligatory: true
		},
		'NT809': {
			code: 'NT809',
			name: 'Estágio em Unidades de Alimentação e Nutrição II',
			ementa: 'Disciplina prática conduzida sob a forma de estágio em unidades de alimentação que aplicam métodos e técnicas de gerenciamento para o atendimento nutricional de grupos populacionais sadios.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475'],
			color: '#4663B9',
			obligatory: true
		},
		'NC---': {
			code: 'NC---',
			name: 'Qualquer Disciplina com codigo NC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo NC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#63B946',
			obligatory: false
		}
	}
};

export default catalogue;
