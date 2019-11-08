const catalogue = {
	totalCredits: 240,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['NC101', 'NC102', 'NT100', 'NT102', 'SL100', 'SL101', 'SL104']
		},
		'sem-2': {
			id: '2',
			subjects: ['NC202', 'NT202', 'NT203', 'NT403', 'SL200', 'SL205']
		},
		'sem-3': {
			id: '3',
			subjects: ['NC100', 'NT300', 'NT302', 'NT303', 'NT404', 'NT502', 'SL303']
		},
		'sem-4': {
			id: '4',
			subjects: ['NT400', 'NT401', 'NT402', 'NT500', 'NT600', 'SL401']
		},
		'sem-5': {
			id: '5',
			subjects: ['NC200', 'NC400', 'NT501', 'NT505', 'NT602', 'NT603', 'NT605', 'SL500']
		},
		'sem-6': {
			id: '6',
			subjects: ['NC300', 'NC500', 'NT601', 'NT606', 'NT700', 'SL601']
		},
		'sem-7': {
			id: '7',
			subjects: ['NT704', 'NT801', 'SL600', 'ELET4']
		},
		'sem-8': {
			id: '8',
			subjects: ['NT703', 'NT800', 'SL800']
		}
	},

	subjects: {
		'NC101': {
			code: 'NC101',
			name: 'Sociedade e Cultura no Mundo Contemporâneo',
			ementa: 'As mudanças socioculturais nos séculos XX e XXI. Modernidade e pós-modernidade; globalização; nação, estado e mercado; indivíduo e individualismo; o dogma do progresso e a sociedade de risco; as redes na Idade Média.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC102': {
			code: 'NC102',
			name: 'Língua, Linguagem e Discurso',
			ementa: 'O funcionamento da língua: relações de sentido; referência, predicação e determinação. Discurso e texto: historicidade e sentido; procedimentos de textualidade; sentido do texto. Argumentação: relações de argumentação; construção da argumentação. O discurso da ciência: funcionamento linguístico; descrição; argumentação; demonstração.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'NT100': {
			code: 'NT100',
			name: 'Nutrição: Ciência e Profissão',
			ementa: 'Análise reflexiva sobre o conhecimento do processo histórico constitutivo da Nutrição, compreendendo-se os conhecimentos sócio-culturais, econômicos e políticos geradores de demandas sócio-individuais e interpretativas das produções teórico-metodológicas da Nutrição como ciência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT102': {
			code: 'NT102',
			name: 'Bioquímica I',
			ementa: 'Introdução à bioquímica. Introdução à bioenergética. Metabolismo dos carboidratos, lipídeos, aminoácidos e peptídeos, proteínas, vitaminas lipossolúveis e hidrossolúveis, enzimas e co-enzimas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL100': {
			code: 'SL100',
			name: 'A Célula',
			ementa: 'Aspectos estruturais e funcionais de moléculas, células e tecidos. Métodos de estudo, organização de Pró e Eucarióticos. Organelas celulares; biologia do desenvolvimento; interações celulares e transporte; principais tecidos humanos. Ênfase nos principais aspectos do funcionamento normal e anormal dos diversos sistemas, nos níveis celular e molecular; conhecimentos básicos da estrutura e função celular; técnicas diagnósticas e terapêuticas. Integração entre conhecimentos de bioquímica, biologia celular e molecular, genética, fisiologia e biofísica, histologia e as diferentes áreas da saúde.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL101': {
			code: 'SL101',
			name: 'Morfofisiologia Humana I',
			ementa: 'Introdução aos tecidos básicos, a biologia do desenvolvimento e a organização anatômica do corpo humano. Estudo integrado de anatomia, histologia, embriologia, bioquímica e fisiologia humana, abordando do ponto de vista estrutural e funcional os sistemas osteomuscular, neuromuscular, nervoso e cardiovascular.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'SL104': {
			code: 'SL104',
			name: 'Saúde e Sociedade',
			ementa: 'Relação saúde e sociedade nos diferentes momentos históricos. Práticas de saúde como construção social. Racionalidades terapêuticas. Corporeidade. Relações entre o processo saúde-doença e as determinações socioculturais. Identidade e prática dos profissionais de saúde. Aspectos de promoção e prevenção em saúde. Demanda, necessidade de saúde e intervenção social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC202': {
			code: 'NC202',
			name: 'Sociedade e Ambiente',
			ementa: 'As relações recíprocas, e em distintas escalas, entre fenômenos naturais, estruturas sociais, agentes e organizações indutoras de mudanças ambientais. Os elos entre natureza e políticas públicas, gestão estratégica, desenvolvimento tecnológico e demografia ambiental. As mudanças de paradigmas da sociedade e do conhecimento que acarretam, na atualidade, os conceitos e as estratégias de sustentabilidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT202': {
			code: 'NT202',
			name: 'Parasitologia',
			ementa: 'Principais agentes etiológicos de doenças parasitárias humanas, vetores e reservatórios no Brasil. Interações: parasita-hospedeiro (transmissão, ciclo biológico, patogenia e formas clínicas). Diagnóstico laboratorial e epidemiológico. Manejo de pacientes infectados. Medidas de controle e profilaxia individuais e coletivas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT203': {
			code: 'NT203',
			name: 'Bioquímica II',
			ementa: 'Glicólise, glicogênese, gliconeogênese. Ciclo de Krebs. Oxidação de ácidos graxos e síntese de ácidos graxos. Cadeia respiratória. Metabolismo de aminoácidos e compostos nitrogenados. Estudo do sistema tampão. Influência das alterações bioquímicas dos alimentos sobre o estado nutricional. Inter-relações metabólicas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT102']
		},
		'NT403': {
			code: 'NT403',
			name: 'Nutrição Educacional',
			ementa: 'Educação/ Educação em Saúde/ Promoção da Saúde. Planejamento e Educação Nutricional. Comunicação e Nutrição. Estratégia da Educação Nutricional. A questão da percepção. Nutrição como campo social e ideológico. Instituições envolvidas. Atores envolvidos. Relação entre os atores. Sentido da nutrição através das análises de mensagens da mídia. Planejamento de atividades educacionais. Relato de experiências. Desenvolvimento e avaliação de atividades educacionais em Nutrição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL200': {
			code: 'SL200',
			name: 'Morfofisiologia Humana II',
			ementa: 'Estudo integrado de anatomia, histologia, embriologia, bioquímica e fisiologia humana, abordando, do ponto de vista estrutural e funcional os sistema sanguíneo, linfático, respiratório, digestório, urinário, neuro-endócrino e reprodutor feminino e masculino.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['SL101']
		},
		'SL205': {
			code: 'SL205',
			name: 'Saúde Coletiva',
			ementa: 'Campo e história da Saúde Coletiva. Políticas e modelos assistenciais. SUS e ações de saúde. Saúde da Família. Planejamento em Saúde. Interdisciplinaridade no trabalho em saúde. Produção de serviços de saúde, formação de pessoal de saúde e estrutura social. Possibilidades de intervenção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT300': {
			code: 'NT300',
			name: 'Bromatologia e Tecnologia de Alimentos',
			ementa: 'Noções de química analítica e quantitativa. Determinação da composição centesimal de um alimento. Tabela de composição de alimentos, noções sobre a legislação de alimentos. Conceito de tecnologia de alimentos. A indústria de alimentos. Operações unitárias. Conservação pelo calor (pasteurização e esterilização); pelo controle da umidade (concentração, secagem e desidratação); pelo frio (refrigeração, congelamento). Uso de aditivos e processamento de frutas e hortaliças, do leite, de carnes e de lipídeos.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:1, HS:7, SL:6, C:6},
			requisitos: ''
		},
		'NT302': {
			code: 'NT302',
			name: 'Genética do Metabolismo',
			ementa: 'Bases genéticas da hereditariedade, suas causas e consequências. Doenças genéticas de interesse em Nutrição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NT102']
		},
		'NT303': {
			code: 'NT303',
			name: 'Psicologia na Nutrição',
			ementa: 'Conhecimentos básicos em psicologia. Interação humana e relações interpessoais. Aspectos interatuantes na relação do nutricionista com o paciente (cliente e família). Instrumentalização do nutricionista para a escuta psicológica na sua prática. Formação da personalidade. Concepções do normal e patológico. Aspectos biopsicossociais envolvidos no comportamento alimentar e nos transtornos alimentares. Implicações dos modelos familiares no desenvolvimento de hábitos alimentares, compulsão. Perdas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT404': {
			code: 'NT404',
			name: 'Interação Fármaco-Nutriente',
			ementa: 'Estudo da interação fármaco-nutrientes. Efeito dos fármacos sobre biodisponibilidade de macro e micro-nutrientes. Ação dos fármacos sobre nutrição humana, apetite, sistema endócrino. Fitoterápicos e homeopáticos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['NT203']
		},
		'NT502': {
			code: 'NT502',
			name: 'Geografia da Fome e Segurança Alimentar',
			ementa: 'Avaliação e Caracterização sócio-econômica das regiões brasileiras. Disponibilidade regional de alimentos in natura e alimentos minimamente processados. Rede de distribuição de alimentos e programas emergenciais de combate à fome. Políticas públicas de acesso ao alimento. Importância e aplicação dos inquéritos alimentares. Relação entre a Geografia e a Economia. Introdução à Geografia da Agricultura. Tipos de agricultura e problemas locais. O problema alimentar: fome, desnutrição no Brasil. Dívida política econômica e a fome . Novas alternativas de nutrição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL303': {
			code: 'SL303',
			name: 'Estatística e Bioestatística',
			ementa: 'Estatística descritiva, probabilidade, variáveis aleatórias, distribuição de frequências, distribuições discretas e contínuas, medidas de tendência central, medidas de dispersão, análise de variância, inferência estatística, distribuição gráfica, gráficos de controle, intervalos de confiança, amostragens e testes de hipóteses, regressão e correlação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT400': {
			code: 'NT400',
			name: 'Nutrição Normal e Dietética',
			ementa: 'Dieta e nutrientes: essenciais e não essenciais; lipídeos como elemento de consumo. Requerimento de energia. Proteína química e biológica, fatores que condicionam a qualidade da proteína; relação protéico-calórica. Valor protéico. Oligoelementos microconstituintes e índice de qualidade do alimento. Conceituações da terminologia dietética, cálculos dietéticos, determinação do VET e distribuição percentual dos nutrientes. Alimentação nas diferentes fases da vida: criança, adolescente, adulto e idoso.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ''
		},
		'NT401': {
			code: 'NT401',
			name: 'Patologia e Nutrição',
			ementa: 'Introdução à patologia, reação inflamatória, reação imunológica. Distúrbios circulatórios, distúrbios gastrointestinais, intestino irritável, doenças genéticas e neoplasia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT402': {
			code: 'NT402',
			name: 'Técnica Dietética',
			ementa: 'Sistematização dos procedimentos e das técnicas adequadas para a aquisição, seleção, conservação, preparação e armazenamento dos alimentos. Rótulos e embalagens. Pesos e medidas. Redação de receitas e glossários de termos. Execução, avaliação e degustação das preparações com os seguintes alimentos: gorduras, cereais e derivados, leite, ovos, hortaliças e frutas, carnes, aves e pescados, leguminosas, bebidas, massas, açúcares, caldos e molhos. Cálculo do valor nutricional (total e porção). Fator de correção, índice de conversão e índice de reidratação e custos.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'NT500': {
			code: 'NT500',
			name: 'Higiene dos Alimentos',
			ementa: 'Noção de processo infeccioso. Situação dos alimentos na cadeia do processo infeccioso. Doenças humanas e zoonoses. Aspectos epidemiológicos e clínicos das doenças que podem ser transmitidas por alimento de origem animal e vegetal. Perfil das toxi-infecções alimentares. Controle dos manipuladores de alimentos. Doenças transmitidas por alimentos: diagnóstico, prevenção e investigação de surtos epidemiológicos. Análise de perigos em pontos críticos de controle de alimentos (APPCC). Qualidade total, ISO 9000. Implantação do sistema APPCC em uma UAN.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT600': {
			code: 'NT600',
			name: 'Avaliação do Estado Nutricional',
			ementa: 'Determinantes do estado nutricional da população. Indicadores antropométricos, clínicos, bioquímicos, de consumo alimentar, demográfico, sócio-econômicos e culturais. Avaliação do estado e situação nutricional da população.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA420']
		},
		'SL401': {
			code: 'SL401',
			name: 'Educação e Comunicação em Saúde',
			ementa: 'Fundamentos teóricos e históricos da educação em saúde no Brasil; diferentes abordagens pedagógicas; limites e possibilidades; metodologias alternativas didático-pedagógicas (oficinas). Teorias da comunicação, linguagem. Elementos básicos do processo de comunicação. Diferentes tipos de comunicação (verbal e não-verbal). Subjetividade. A comunicação como ferramenta para estabelecer relações de cuidado. O trabalho em equipes multidisciplinares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL104', 'SL205']
		},
		'NC200': {
			code: 'NC200',
			name: 'Epistemologia e Filosofia da Ciência',
			ementa: 'Introdução à filosofia e à epistemologia das ciências naturais. Ruptura e continuidade na história da ciência. A ciência moderna e suas raízes epistemológicas. A cultura e a produção do conhecimento. Os rumos da tecnociência contemporânea e de suas relações com a sociedade, com a política e com a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT501': {
			code: 'NT501',
			name: 'Alimentos Funcionais: Modo de Ação',
			ementa: 'Moléculas bioativas presentes nos alimentos: carotenóides, fibras, fibras solúveis e insolúveis. Presença de pré e pró-bióticos nos alimentos, antioxidantes. Ação dos ácidos graxos mono e polinsaturados, papel das vitaminas antioxidantes e minerais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT505': {
			code: 'NT505',
			name: 'Microbiologia dos Alimentos',
			ementa: 'Microrganismos de importância em alimentos patogênicos, deterioradores, ou empregados para obtenção de produtos. Fatores que interferem no crescimento de microrganismos nos alimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT602': {
			code: 'NT602',
			name: 'Administração dos Serviços de Alimentação',
			ementa: 'Identificação, finalidade, tipos e características das unidades de alimentação e nutrição (UAM). Planejamento de uma UAM: dimensionamento de área e equipamentos específicos para recebimento e armazenagem de alimentos, para a produção e distribuição de refeições. Planejamento de cardápios e de compras, dimensionamento e administração de pessoal. Planejamento e organização de lactário. Código de ética do nutricionista.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'NT603': {
			code: 'NT603',
			name: 'Avaliação do Consumo Alimentar',
			ementa: 'Métodos de inquérito alimentar; Validade, reprodutibilidade e fontes de erro na avaliação do consumo alimentar; Marcadores bioquímicos da ingestão alimentar; Aplicação das recomendações nnutricionais para grupos populacionais e indivíduos; Aplicação dos métodos de inquérito alimentar, nos diferentes tipos de estudo; Análise e interpretação de dados de consumo alimentar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'NT605': {
			code: 'NT605',
			name: 'Nutrição Aplicada aos Esportes',
			ementa: 'Avaliação nutricional do esportista. Nutrição e rendimento esportivo nas diferentes modalidades de esporte. Alimentos ergogênicos, drogas lícitas e ilícitas, doping.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL500': {
			code: 'SL500',
			name: 'Epidemiologia',
			ementa: 'Conceitos, métodos e aplicabilidade. Epidemiologia descritiva. História natural das doenças. Distribuição de doenças e agravos à saúde. Coeficientes e índices. Indicadores de saúde. Método epidemiológico. Vigilância epidemiológica. Delineamentos de Pesquisa. Análises e interpretação das medidas de risco e associação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL303', 'SL401']
		},
		'NC300': {
			code: 'NC300',
			name: 'Práticas Sociais nas Organizações',
			ementa: 'Conceito de organização. Tipos de organizações. Instituições e organizações. Racionalidade burocrática, indivíduos e grupos. Conflito e relações de poder. Cultura organizacional. Dinâmica das organizações: continuidade ruptura.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC500': {
			code: 'NC500',
			name: 'Lógica',
			ementa: 'Introdução ao estudo da moderna lógica: funções proposicionais, quantificação, função de verdade, verdade lógica, modelo, linguagem formal e método axiomático.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'NT601': {
			code: 'NT601',
			name: 'Nutrição em Saúde Pública',
			ementa: 'Análise dos distúrbios nutricionais como problemas de Saúde Pública (desnutrição protéico-energética, anemia, hipovitaminose A, bócio endêmico e obesidade). Perfil alimentar e nutricional da população brasileira. Desenvolvimento de um modelo geral de determinação do estado nutricional e sua aplicação no caso brasileiro. Estratégias alternativas de intervenção para o controle de distúrbios nutricionais. Avaliação do estado nutricional em nível individual e de população.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200', 'AA430']
		},
		'NT606': {
			code: 'NT606',
			name: 'Nutrição Materno-Infantil',
			ementa: 'Bases fundamentais da Nutrição para planejamento de atividades de orientação nutricional que atendam a mulher no ciclo gravídico-puerperal e o bebê no primeiro ano de vida.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NT700': {
			code: 'NT700',
			name: 'Dietoterapia',
			ementa: 'Evolução histórica. Conceitos e objetivos da dietoterapia. Avaliação nutricional de pacientes: exames clínicos, bioquímicos, antropométricos e anamnese alimentar. Tratamento dietético para pacientes com: doenças do sistema digestório, doenças endócrinas, cardiovasculares, renais, pulmonares, carenciais, infecciosas, alergias alimentares, queimaduras graves, neoplasias e imunodeprimidos. Terapia nutricional enteral.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['AA450']
		},
		'SL601': {
			code: 'SL601',
			name: 'Bioética',
			ementa: 'Conceitos, origem e princípios. Relações ético-terapêuticas com o usuário, família, comunidade e ambiente. A dignidade humana no ciclo vital. O agir profissional. Aspectos bioéticos em pesquisa com seres humanos e animais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC100', 'SL401']
		},
		'NT704': {
			code: 'NT704',
			name: 'Estágio em Nutrição e Saúde Coletiva I',
			ementa: 'Estágio em unidades básicas de Saúde (UBS).',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:14, D:0, HS:16, SL:2, C:16},
			requisitos: ['AA450']
		},
		'NT801': {
			code: 'NT801',
			name: 'Nutrigenômica',
			ementa: 'Constituintes da dieta que podem afetar a expressão gênica e ou a estrutura do gene. Diversidade genética e a população humana. Métodos em genômica nutricional: sequenciamento, genotipagem, expressão gênica. Genética e epidemiologia molecular. Metabolômica. Genética Vs determinismo nutricional, cultural e individual. Métodos de nutrição personalizada destinada aos casos de má nutrição. Implicações éticas, legais e sociais da nutrigenômica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450']
		},
		'SL600': {
			code: 'SL600',
			name: 'Introdução à Prática de Ciências',
			ementa: 'Introdução ao pensamento crítico sobre as ciências e ao pensamento científico. Desenvolvimento da mentalidade investigativa e planejamento da pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'NT703': {
			code: 'NT703',
			name: 'Estágio em Nutrição Clínica I',
			ementa: 'Estágio desenvolvido em hospitais, clínicas e ambulatórios, onde os alunos aplicam os conhecimentos teóricos da dietoterapia nas unidades de internação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:15, D:0, HS:17, SL:2, C:17},
			requisitos: ['AA450']
		},
		'NT800': {
			code: 'NT800',
			name: 'Alimentação e Nutrição Institucional',
			ementa: 'Disciplina prática conduzida sob a forma de estágio em unidades de alimentação que aplicam métodos e técnicas de gerenciamento para o atendimento nutricional de grupos populacionais sadios.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:15, D:0, HS:17, SL:0, C:17},
			requisitos: ['AA450']
		},
		'SL800': {
			code: 'SL800',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho Monográfico a ser conduzido pelo aluno.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:0, C:4},
			requisitos: ''
		}
	}
};

export default catalogue;
