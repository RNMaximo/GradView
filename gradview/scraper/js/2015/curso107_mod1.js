const catalogue = {
	totalCredits: 255,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['NC103', 'NT100', 'NT102', 'NT103', 'SL101', 'SL104', 'SL105']
		},
		'sem-2': {
			id: '2',
			subjects: ['GL100', 'NT203', 'NT204', 'NT205', 'SL200', 'SL205']
		},
		'sem-3': {
			id: '3',
			subjects: ['NC301', 'NC400', 'NT304', 'NT305', 'NT306', 'NT402', 'SL303']
		},
		'sem-4': {
			id: '4',
			subjects: ['NT202', 'NT405', 'NT406', 'NT503', 'NT603', 'SL401', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['NT506', 'NT507', 'NT508', 'NT509', 'NT510', 'NT600', 'NT606', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['NC100', 'NT501', 'NT607', 'NT608', 'NT609', 'NT610', 'NT611']
		},
		'sem-7': {
			id: '7',
			subjects: ['NT706', 'NT707', 'NT708', 'NT801', 'SL800', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['NT806', 'NT807', 'NT808']
		},
		'sem-9': {
			id: '9',
			subjects: ['NT802', 'NT804', 'NT809']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
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
			color: '#50D940',
			obligatory: true
		},
		'NT100': {
			code: 'NT100',
			name: 'Nutrição: Ciência e Profissão',
			ementa: 'Conhecimento do processo histórico constitutivo da Nutrição como Ciência e da Nutrição como profissão, análise histórica da emergência e evolução dos cursos de Nutrição em nível superior e da atuação do profissional nutricionista em diversas áreas, discussão sobre o perfil do profissional nutricionista em suas áreas de atuação no mercado atual, conhecimento sobre os órgãos que são responsáveis pela regulamentação da profissão de nutricionista.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#80D940',
			obligatory: true
		},
		'NT102': {
			code: 'NT102',
			name: 'Bioquímica I',
			ementa: 'Equilíbrio ácido-base. Estrutura de carboidratos, lipídeos, aminoácidos e proteínas. Enzimas e coenzimas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4090D9',
			obligatory: true
		},
		'NT103': {
			code: 'NT103',
			name: 'Composição de Alimentos',
			ementa: 'Conceitos de química geral e experimental. Propriedades da água, atividade de água e seus efeitos na estabilidade de alimentos. Carboidratos. Proteínas. Lipídios. Vitaminas e Minerais. Pigmentos naturais. Enzimas. Compostos de aroma e sabor. Composição de alimentos: Açúcares e produtos açucarados. Óleos, gorduras e derivados. Grãos oleaginosos e cereais. Frutas e Hortaliças. Carnes e derivados. Leite e derivados. Ovos. Alimentos enriquecidos e alimentos para fins especiais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'SL101': {
			code: 'SL101',
			name: 'Morfofisiologia Humana I',
			ementa: 'Estudo integrado de anatomia, histologia e fisiologia humana, abordando do ponto de vista estrutural e funcional o sistema nervoso e o músculo esquelético. Estudo dos princípios gerais de homeostasia; processos de transporte através de membranas celulares e bioeletrogênese.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940A0',
			obligatory: true
		},
		'SL104': {
			code: 'SL104',
			name: 'Saúde e Sociedade',
			ementa: 'Relação saúde e sociedade nos diferentes momentos históricos. Práticas de saúde como construção social. Racionalidades terapêuticas. Corporeidade. Relações entre o processo saúde-doença e as determinações socioculturais. Identidade e prática dos profissionais de saúde. Aspectos de promoção e prevenção em saúde. Demanda, necessidade de saúde e intervenção social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94070',
			obligatory: true
		},
		'SL105': {
			code: 'SL105',
			name: 'Biologia Celular e Molecular',
			ementa: 'Organização molecular da célula. Estrutura e função do núcleo. Estudo dos processos de replicação, transcrição e tradução. Aspectos estruturais e funcionais das biomembranas. Interações celulares, citoesqueleto e transporte. Conhecimentos básicos da estrutura e função celular e das principais organelas citoplasmáticas. Ciclo e morte celular.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C1',
			obligatory: true
		},
		'GL100': {
			code: 'GL100',
			name: 'Matemática I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A040',
			obligatory: true
		},
		'NT203': {
			code: 'NT203',
			name: 'Bioquímica II',
			ementa: 'Glicólise, glicogenólise, glicogênese, gliconeogênese. Ciclo de Krebs. Oxidação de ácidos graxos e síntese de ácidos graxos. Cadeia respiratória. Metabolismo de aminoácidos e compostos nitrogenados. Inter-relações metabólicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT102'],
			color: '#4090D9',
			obligatory: true
		},
		'NT204': {
			code: 'NT204',
			name: 'Análise de Alimentos',
			ementa: 'Noções de química analítica e quantitativa. Preparo e padronização de amostras e soluções. Importância da análise de alimentos. Técnicas de amostragem. Tratamento qualitativo e quantitativo dos dados. Determinação de parâmetros físico-químicos em alimentos. Determinação da composição centesimal de alimentos. Métodos físicos aplicados à análise de alimentos. Técnicas cromatográficas em análise de alimentos.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT103'],
			color: '#D94040',
			obligatory: true
		},
		'NT205': {
			code: 'NT205',
			name: 'Microbiologia e Higiene dos Alimentos I',
			ementa: 'Micro-organismos de importância em alimentos: patogênicos, deterioradores , ou empregados para obtenção de produtos. Fatores que interferem no crescimento de micro-organismos nos alimentos. Microbiota natural do corpo humano e saúde do manipulador de alimentos. Agentes sanitizantes. Doenças transmitidas por alimentos: diagnóstico, prevenção e investigação de surtos epidemiológicos. Manual de Boas Práticas e Procedimentos Operacionais Padronizados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL105'],
			color: '#40D9C1',
			obligatory: true
		},
		'SL200': {
			code: 'SL200',
			name: 'Morfofisiologia Humana II',
			ementa: 'Estudo integrado de anatomia, histologia e fisiologia humana, abordando do ponto de vista estrutural e funcional os sistemas cardiovascular, respiratório, digestório, urinário, endócrino e reprodutor.',
			semestre: 1,
			vector: {T:6, P:0, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['SL101', 'SL105'],
			color: '#8D8DB1',
			obligatory: true
		},
		'SL205': {
			code: 'SL205',
			name: 'Saúde Coletiva',
			ementa: 'Campo e história da Saúde Coletiva. Políticas e modelos assistenciais. SUS e ações de saúde. Saúde da Família. Planejamento em Saúde. Interdisciplinaridade no trabalho em saúde. Produção de serviços de saúde, formação de pessoal de saúde e estrutura social. Possibilidades de intervenção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL104'],
			color: '#D94070',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B040D9',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B0D940',
			obligatory: true
		},
		'NT304': {
			code: 'NT304',
			name: 'Tecnologia de Alimentos',
			ementa: 'Conceito de Tecnologia de Alimentos. Principais alterações em alimentos. Princípios de conservação de alimentos. Conservação de alimentos pelo uso de calor. Conservação de alimentos pelo uso do frio. Conservação de alimentos por controle de umidade. Conservação de alimentos por incorporação de solutos. Conservação de alimentos por fermentação. Aditivos em alimentos. Embalagens. Processamento de leite e derivados. Processamento de carnes e derivados. Processamento de frutas e hortaliças. Processamento de óleos e gorduras. Processamento de cereais e derivados. Processamento de produtos açucarados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT204'],
			color: '#D94040',
			obligatory: true
		},
		'NT305': {
			code: 'NT305',
			name: 'Microbiologia e Higiene dos Alimentos II',
			ementa: 'Plano de amostragem. Micro-organismos indicadores. Vigilância Sanitária. Legislação e padrões microbiológicos para alimentos e água. Probióticos. Determinação de micro-organismos por métodos físicos, químicos, moleculares e imunológicos. Noções de toxicologia de alimentos. Análise de perigos e pontos críticos de controle de alimentos (APPCC). Qualidade total. ISO 9000.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT205'],
			color: '#40D9C1',
			obligatory: true
		},
		'NT306': {
			code: 'NT306',
			name: 'Metodologia de Pesquisa Aplicada à Nutrição',
			ementa: 'Construção do conhecimento. História da ciência e abordagem crítica de sua evolução. Evolução da ciência da nutrição. Conceitos da metodologia da pesquisa científica. Elaboração de projeto de pesquisa. As bases de dados científicos e pesquisa bibliográfica. Leitura crítica de artigos científicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D990',
			obligatory: true
		},
		'NT402': {
			code: 'NT402',
			name: 'Técnica Dietética',
			ementa: 'Sistematização dos procedimentos e das técnicas adequadas para a aquisição, seleção, conservação, preparação e armazenamento dos alimentos. Utilização de Ficha Técnica para padronização de receitas. Pesos e medidas. Fator de correção, índice de conversão e índice de reidratação e custos. Cálculo do valor nutricional (total e porção). Estudo das tranformações físico-químicas e sensoriais durante o processamento de gorduras, cereais e derivados, leite, ovos, hortaliças e frutas, carnes, aves e pescados, leguminosas, bebidas, massas, açúcares, caldos e molhos. Rótulos e embalagens.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940D1',
			obligatory: true
		},
		'SL303': {
			code: 'SL303',
			name: 'Estatística e Bioestatística',
			ementa: 'Estatística descritiva, probabilidade, variáveis aleatórias, distribuição de frequências, distribuições discretas e contínuas, medidas de tendência central, medidas de dispersão, análise de variância, inferência estatística, distribuição gráfica, gráficos de controle, intervalos de confiança, amostragens e testes de hipóteses, regressão e correlação.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D960',
			obligatory: true
		},
		'NT202': {
			code: 'NT202',
			name: 'Parasitologia',
			ementa: 'Principais agentes etiológicos de doenças parasitárias humanas, vetores e reservatórios no Brasil. Interações: parasita-hospedeiro (transmissão, ciclo biológico, patogenia e formas clínicas). Diagnóstico laboratorial e epidemiológico. Manejo de pacientes infectados. Medidas de controle e profilaxia individuais e coletivas.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#8040D9',
			obligatory: true
		},
		'NT405': {
			code: 'NT405',
			name: 'Nutrição e Dietética',
			ementa: 'Conceitos de alimento, alimentação e nutrição. Energia e Nutrientes: propriedades, funções, fontes, metabolismo, recomendações e necessidades. Biodisponibilidade dos nutrientes nos alimentos. Utilização de tabelas de composição química de alimentos. Princípios gerais e leis da alimentação. Guias alimentares. Diferentes tipos de dietas e suas implicações nutricionais. Planejamento de dietas. Cálculo do valor energético total e micronutrientes das dietas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT304', 'NT402'],
			color: '#D94089',
			obligatory: true
		},
		'NT406': {
			code: 'NT406',
			name: 'Administração de Serviços de Alimentação e Nutrição I',
			ementa: 'Identificação, finalidade, tipos e características das unidades de alimentação e nutrição (UAN). Planejamento de uma UAN: dimensionamento de área e equipamentos específicos para o recebimento e armazenagem de alimentos, para a produção e para a distribuição de refeições. Dimensionamento e administração de Unidades de Alimentação e Nutrição: administração de recursos humanos, administração de materiais, administração financeira e administração de produção.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT103', 'NT305'],
			color: '#8D8D81',
			obligatory: true
		},
		'NT503': {
			code: 'NT503',
			name: 'Epidemiologia Aplicada à Nutrição',
			ementa: 'Conceitos básicos de Epidemiologia; História Natural da Doença. Indicadores de Saúde. Sistemas de Informação em Saúde (SIM, SINASC, SISVAN). Transição Demográfica e Epidemiológica. Epidemiologia Descritiva. Delineamento de estudos em Epidemiologia Nutricional. Introdução à análise de dados em Epidemiologia Nutricional. Vigilância Epidemiológica.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL303'],
			color: '#40D960',
			obligatory: true
		},
		'NT603': {
			code: 'NT603',
			name: 'Avaliação do Consumo Alimentar',
			ementa: 'Métodos de inquérito alimentar. Validade, reprodutibilidade e fontes de erro na avaliação do consumo alimentar. Marcadores bioquímicos da ingestão alimentar. Aplicação das recomendações nutricionais para grupos populacionais e indivíduos. Aplicação dos métodos de inquérito alimentar em diferentes tipos de estudos epidemiológicos. Análise e interpretação de dados de consumo alimentar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT304'],
			color: '#D94040',
			obligatory: true
		},
		'SL401': {
			code: 'SL401',
			name: 'Educação e Comunicação em Saúde',
			ementa: 'Fundamentos teóricos e históricos da educação em saúde no Brasil; diferentes abordagens pedagógicas; limites e possibilidades; metodologias alternativas didático-pedagógicas (oficinas). Teorias da comunicação, linguagem. Elementos básicos do processo de comunicação. Diferentes tipos de comunicação (verbal e não-verbal). Subjetividade. A comunicação como ferramenta para estabelecer relações de cuidado. O trabalho em equipes multidisciplinares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL205'],
			color: '#D94070',
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
		'NT506': {
			code: 'NT506',
			name: 'Administração dos Serviços de Alimentação e Nutrição II',
			ementa: 'Planejamento de cardápios e de compras em UANs. Planejamento e organização de lactário. Código de ética do nutricionista.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT406'],
			color: '#8D8D81',
			obligatory: true
		},
		'NT507': {
			code: 'NT507',
			name: 'Segurança Alimentar e Nutricional',
			ementa: 'Fome, Segurança Alimentar e Nutricional (SAN) e Direito Humano à Alimentação Adequada (DHAA). Determinantes da Insegurança Alimentar Nutricional (IAN). Modelo de desenvolvimento e crises econômicas. Sistema Alimentar brasileiro. Política, reforma agrária, agricultura familiar, ecológica, tradicional, insumos e sementes geneticamente modificadas. Produção, disponibilidade, desperdício de alimentos e suas implicações ambientes. Água como Direito Humano. Leis e políticas que estruturam programas de SAN. Caracterização e avaliação de intervenções e programas emergenciais e estruturais de SAN.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT503'],
			color: '#40D960',
			obligatory: true
		},
		'NT508': {
			code: 'NT508',
			name: 'Nutrição e Dietética nos Ciclos da Vida',
			ementa: 'Conceitos básicos da alimentação e nutrição em situações fisiológicas: Nutrição e planejamento da dieta da gestante; Nutrição e planejamento da dieta da nutriz; Nutrição e planejamento da dieta do lactente; Nutrição e planejamento da dieta do pré-escolar; Nutrição e planejamento da dieta do escolar; Nutrição e planejamento da dieta do adolescente; Nutrição e planejamento da dieta do adulto; Nutrição e planejamento da dieta do idoso.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT405'],
			color: '#D94089',
			obligatory: true
		},
		'NT509': {
			code: 'NT509',
			name: 'Farmacologia Aplicada à Nutrição',
			ementa: 'Estudo da interação fármaco-nutrientes. Efeito dos fármacos sobre biodisponibilidade de macro e micro-nutrientes. Ação dos fármacos sobre nutrição humana, apetite, sistema endócrino. Fitoterápicos e homeopáticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT203', 'NT405'],
			color: '#8D68B1',
			obligatory: true
		},
		'NT510': {
			code: 'NT510',
			name: 'Educação e Comunicação em Nutrição, Alimentação e Cultura',
			ementa: 'Fundamentos teóricos e históricos da Educação Alimentar e Nutricional no Brasil e no Mundo. Aspectos históricos, geográficos, sociais e culturais da alimentação. Educação Nutricional e Promoção da Saúde. Planejamento e avaliação de Programas de Educação Nutricional. Educomunicação em Nutrição, Alimentação e Cultura.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SL401'],
			color: '#D94070',
			obligatory: true
		},
		'NT600': {
			code: 'NT600',
			name: 'Avaliação do Estado Nutricional',
			ementa: 'Determinantes do estado nutricional da população. Indicadores antropométricos, clínicos, bioquímicos, de consumo alimentar, demográfico, sócio-econômicos e culturais. Avaliação do estado e situação nutricional da população.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT203', 'SL200'],
			color: '#678FC5',
			obligatory: true
		},
		'NT606': {
			code: 'NT606',
			name: 'Nutrição Materno-Infantil',
			ementa: 'Nutrição na gravidez e na lactação. Fatores epidemiológicos no prognóstico da gravidez e na lactação; gestação de risco, aleitamento materno - fisiologia e técnicas; excreção de drogas no leite humano; alimentação complementar; orientação para o desmame; aleitamento artificial; alimentação no primeiro ano de vida; guia alimentar para crianças de seis meses a 24 meses.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT405', 'NT503'],
			color: '#8D8D75',
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
			color: '#4060D9',
			obligatory: true
		},
		'NT501': {
			code: 'NT501',
			name: 'Alimentos Funcionais: Modo de Ação',
			ementa: 'Moléculas bioativas presentes nos alimentos: carotenóides, fibras, fibras solúveis e insolúveis. Presença de pré e pró-bióticos nos alimentos, antioxidantes. Ação dos ácidos graxos mono e polinsaturados, papel das vitaminas antioxidantes e minerais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5040D9',
			obligatory: true
		},
		'NT607': {
			code: 'NT607',
			name: 'Dietoterapia I',
			ementa: 'Evolução histórica. Conceitos e objetivos da dietoterapia. Avaliação nutricional de pacientes internados: exame clínico, bioquímico, antropométricos e anamnese alimentar, Tratamento dietético para pacientes com doença do sistema digestivo e alergias alimentares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT508', 'NT600', 'NT603'],
			color: '#B35A85',
			obligatory: true
		},
		'NT608': {
			code: 'NT608',
			name: 'Fisiopatologia da Nutrição I',
			ementa: 'Introdução à imunologia e reação inflamatória. Fisiopatologia de doenças associadas à nutrição: doenças pépticas e inflamatórias intestinais, insuficiência hepática e pancreática.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL200'],
			color: '#8D8DB1',
			obligatory: true
		},
		'NT609': {
			code: 'NT609',
			name: 'Erros Inatos do Metabolismo e Nutrição',
			ementa: 'Conceitos básicos de genética, biologia molecular, mutações e leis da hereditariedade. Alterações bioquímicas, matabólicas e tratamento nutricional adequado nos erros inatos do metabolismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT203', 'NT405', 'SL200'],
			color: '#8D74B1',
			obligatory: true
		},
		'NT610': {
			code: 'NT610',
			name: 'Nutrição em Saúde Coletiva',
			ementa: 'Transição Nutricional. Epidemiologia Nutricional: caracterização e análise do padrão alimentar e dos distúrbios nutricionais com implicações em Saúde Coletiva (sobrepeso/obesidade, desnutrição, anemia, deficiência de vitamina A, dentre outros). Leis e políticas que estruturam os programas de Nutrição em Saúde Coletiva. Caracterização e avaliação de intervenções e programas de Nutrição em Saúde Coletiva.',
			semestre: 1,
			vector: {T:3, P:0, L:3, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT507', 'NT508', 'NT603'],
			color: '#A67363',
			obligatory: true
		},
		'NT611': {
			code: 'NT611',
			name: 'Psicologia da Nutrição I',
			ementa: 'Conhecimentos básicos em psicologia. Subjetividade. Interação humana e relações interpessoais. Formação da personalidade. Concepções do normal e patológico. Aspectos biopsicossociais envolvidos no comportamento alimentar e nos transtornos alimentares. Fatores emocionais que interferem no comportamento alimentar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D140',
			obligatory: true
		},
		'NT706': {
			code: 'NT706',
			name: 'Psicologia e Nutrição II',
			ementa: 'Instrumentalização do nutricionista para a escuta psicológica na sua prática. Teoria de grupo. Trabalho com coletivos. Trabalho em equipe. Relação nutricionista paciente (cliente e família). Implicações dos modelos familiares no desenvolvimento de hábitos alimentares. Atendimento hospitalar. Reabilitação. Perdas/morte. Seleção de pessoal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT611'],
			color: '#D9D140',
			obligatory: true
		},
		'NT707': {
			code: 'NT707',
			name: 'Dietoterapia II',
			ementa: 'Tratamento dietético para pacientes com: doenças endócrinas, cardiovasculares, renais, pulmonares, infecciosas, queimaduras graves, neoplasias e imunodeprimidos. Teoria nutricional enteral.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT607'],
			color: '#B35A85',
			obligatory: true
		},
		'NT708': {
			code: 'NT708',
			name: 'Fisiopatologia da Nutrição II',
			ementa: 'Fisiopatologia de doenças associadas à nutrição: doença renal aguda e crônica, doenças pulmonares e cardiovasculares, diabetes mellitus, obesidade e neoplasias.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT608'],
			color: '#8D8DB1',
			obligatory: true
		},
		'NT801': {
			code: 'NT801',
			name: 'Nutrigenômica',
			ementa: 'Constituintes da dieta que podem afetar a expressão gênica e ou a estrutura do gene. Diversidade genética e a população humana. Métodos em genômica nutricional: sequenciamento, genotipagem, expressão gênica. Genética e epidemiologia molecular. Metabolômica. Genética Vs determinismo nutricional, cultural e individual. Métodos de nutrição personalizada destinada aos casos de má nutrição. Implicações éticas, legais e sociais da nutrigenômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#D97040',
			obligatory: true
		},
		'SL800': {
			code: 'SL800',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho Monográfico a ser conduzido pelo aluno.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#40C1D9',
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
			requisitos: ['NT706', 'NT707', 'NT708'],
			color: '#B3937D',
			obligatory: true
		},
		'NT807': {
			code: 'NT807',
			name: 'Estágio em Nutrição e Saúde Coletiva I',
			ementa: 'Estágio em Unidades Básicas de Saúde (UBS).',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['NT610', 'NT707'],
			color: '#AD6774',
			obligatory: true
		},
		'NT808': {
			code: 'NT808',
			name: 'Estágio em Unidades de Alimentação e Nutrição I',
			ementa: 'Disciplina prática conduzida sob a forma de estágio em unidades de alimentação que aplicam métodos e técnicas de gerenciamento para o atendimento nutricional de grupos populacionais sadios.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475', 'NT506'],
			color: '#8D8D81',
			obligatory: true
		},
		'NT802': {
			code: 'NT802',
			name: 'Estágio em Nutrição Clínica II',
			ementa: 'Estágio desenvolvido em hospitais, clínicas e ambulatórios, onde os alunos aplicam os conhecimentos teóricos da dietoterapia nas unidades de internação.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['NT706', 'NT707', 'NT708'],
			color: '#B3937D',
			obligatory: true
		},
		'NT804': {
			code: 'NT804',
			name: 'Estágio em Nutrição e Saúde Coletiva II',
			ementa: 'Estágio em Unidades Básicas de Saúde (UBS).',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['NT610', 'NT707'],
			color: '#AD6774',
			obligatory: true
		},
		'NT809': {
			code: 'NT809',
			name: 'Estágio em Unidades de Alimentação e Nutrição II',
			ementa: 'Disciplina prática conduzida sob a forma de estágio em unidades de alimentação que aplicam métodos e técnicas de gerenciamento para o atendimento nutricional de grupos populacionais sadios.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:10, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA475', 'NT506'],
			color: '#8D8D81',
			obligatory: true
		}
	}
};

export default catalogue;
