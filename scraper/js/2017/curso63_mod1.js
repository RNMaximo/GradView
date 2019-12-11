const catalogue = {
	totalCredits: 323,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['FR103', 'BS115', 'QG362', 'MS380', 'QG108', 'QG109', 'F_107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BS215', 'QO321', 'ME414', 'QI246', 'FR204']
		},
		'sem-3': {
			id: '3',
			subjects: ['BT315', 'BI315', 'BP515', 'QO421', 'FR510', 'QF331', 'FR304', 'BG515']
		},
		'sem-4': {
			id: '4',
			subjects: ['BB315', 'BM415', 'QO721', 'FR406', 'QA282', 'FR509', 'FR407']
		},
		'sem-5': {
			id: '5',
			subjects: ['FR605', 'FR505', 'QO623', 'FR504', 'FR508', 'FR507', 'FR608', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['FR415', 'ELET06', 'FR157', 'FR606', 'FR602', 'FR603', 'FR609', 'FR607']
		},
		'sem-7': {
			id: '7',
			subjects: ['FR706', 'MD191', 'FR725', 'FR704', 'FR158', 'FR705', 'FR707', 'FR703', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['FR900', 'FR805', 'ELET08', 'FR808', 'FR807', 'FR804', 'FR806']
		},
		'sem-9': {
			id: '9',
			subjects: ['FR901']
		},
		'sem-10': {
			id: '10',
			subjects: ['FR904', 'FR903', 'FR902']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['BB415', 'BH515', 'BM915', 'BM925', 'BP584', 'BP915', 'BS615', 'BT925', 'BV915', 'EI---', 'FR006', 'FR009', 'FR014', 'FR018', 'FR021', 'FR022', 'FR026', 'FR035', 'FR037', 'FR038', 'FR039', 'FR040', 'FR041', 'FR042', 'FR043', 'FR044', 'FR046', 'FR047', 'FR048', 'FR325', 'FR326', 'MD182', 'MD183', 'MD187', 'MD188', 'MD189', 'MD190', 'QG863', 'QI445', 'QO423', 'QO424'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'BS115': {
			code: 'BS115',
			name: 'Estrutura e Função de Células e Tecidos',
			ementa: 'Aspectos estruturais e funcionais de moléculas, células e tecidos fundamentais. Métodos de estudo. Organização de procariotos e de eucariotos. Organelas celulares. Interações celulares e transporte. Principais tecidos humanos. Biologia do desenvolvimento.',
			semestre: 1,
			vector: {T:6, P:4, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: '',
			color: '#46ABB9',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'FR103': {
			code: 'FR103',
			name: 'Introdução à Profissão Farmacêutica',
			ementa: 'Resumo histórico da Farmácia no Brasil. As diretrizes curriculares dos cursos de Graduação em Farmácia e o perfil profissional do farmacêutico. Âmbito profissional. Novas perspectivas profissionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B954',
			obligatory: true
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98E46',
			obligatory: true
		},
		'QG362': {
			code: 'QG362',
			name: 'Química com Segurança',
			ementa: 'Segurança em laboratório químico; identificação e uso de equipamentos de segurança; manuseio de substâncias com segurança; estocagem e descarte de resíduos de laboratórios. Contaminação química. Treinamento para atendimento em situações de emergência; técnicas de primeiros socorros. Legislação sobre segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B980',
			obligatory: true
		},
		'BS215': {
			code: 'BS215',
			name: 'Estrutura e Função de Órgãos e Sistemas',
			ementa: 'Estudo integrado da estrutura e função de órgãos e sistemas em humanos.',
			semestre: 1,
			vector: {T:8, P:8, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['*BS115'],
			color: '#46ABB9',
			obligatory: true
		},
		'FR204': {
			code: 'FR204',
			name: 'Ética e Bioética',
			ementa: 'Conceitos e suas articulações na sociedade com foco os direitos humanos, a sociedade brasileira e o contexto internacional. Bioética. Pesquisa envolvendo seres humanos e animais. Comissão Nacional de Ética em Pesquisa (CONEPE) e Comitês de Ética em Pesquisa. Reflexão sobre os aspectos éticos envolvidos nas questões relativas a privacidade e confidencialidade, problemas de início e final de vida, alocação de recursos escassos, respeito à pessoa e tomada de decisão e pesquisa',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#468EB9',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#46B954',
			obligatory: true
		},
		'QI246': {
			code: 'QI246',
			name: 'Química Inorgânica',
			ementa: 'Acidez e basicidade de Lewis: conceitos de dureza e moleza; química de coordenação e de organometálicos de metais de transição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#46B963',
			obligatory: true
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#46B963',
			obligatory: true
		},
		'BG515': {
			code: 'BG515',
			name: 'Genética Básica e Molecular',
			ementa: 'O gene como unidade de herança. Interações gênicas. Natureza molecular do gene. Mecanismo de regulação da expressão gênica. Engenharia genética e suas aplicações.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8E46B9',
			obligatory: true
		},
		'BI315': {
			code: 'BI315',
			name: 'Imunologia',
			ementa: 'Resposta imune inata e adaptativa. Órgãos e células envolvidas na resposta imune. Imunopatologias. Imunoprofilaxia. Diagnóstico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS115'],
			color: '#46ABB9',
			obligatory: true
		},
		'BP515': {
			code: 'BP515',
			name: 'Parasitologia',
			ementa: 'Estudo de helmintos e protozoários de interesse humano: ciclo de vida, transmissão, epidemiologia, diagnóstico, patogenia, atuação dos principais fármacos contra parasitos, tratamento e profilaxia. Estudo dos principais vetores de doenças parasitárias humanas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BS115'],
			color: '#46ABB9',
			obligatory: true
		},
		'BT315': {
			code: 'BT315',
			name: 'Farmacobotânica',
			ementa: 'Morfologia externa de plantas vasculares. Noções sobre tipos celulares e tecidos vegetais. Fundamentos de taxonomia e sistemática vegetal. Estudos biossistemáticos para identificação de táxons. Principais grupos taxonômicos, com enfoque em plantas medicinais. Importância de estudos botânicos para a pesquisa de produtos naturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5446B9',
			obligatory: true
		},
		'FR304': {
			code: 'FR304',
			name: 'Políticas de Saúde',
			ementa: 'Diretrizes, justificativas, prioridades e estratégias. Programa de medicamentos essenciais. Relação Nacional de Medicamentos (RENAME). A política de genéricos. A produção de medicamentos no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94654',
			obligatory: true
		},
		'FR510': {
			code: 'FR510',
			name: 'Metodologia e Informação Científica',
			ementa: 'Compreender o papel da ciência e do cientista na sociedade. A construção do conhecimento científico: juízos de realidade e de valor, o método científico, paradigmas da ciência, influência da atividade do cientista na sociedade. O trabalho científico: resumo e apresentação em congressos, simpósios e eventos similares. Os tipos de monografias científicas: para graduação e especialização (monografia), para Mestrado (dissertação) e para Doutorado (tese). Relatórios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4680B9',
			obligatory: true
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gás real, energia livre de Gibbs, equilíbrios físico e químico, diagrama de fases, cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#46B963',
			obligatory: true
		},
		'QO421': {
			code: 'QO421',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos. Derivados dos ácidos carboxílicos. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático. Substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO321'],
			color: '#46B963',
			obligatory: true
		},
		'BB315': {
			code: 'BB315',
			name: 'Bioquímica',
			ementa: 'Estrutura e função de proteínas. Cinética e regulação enzimática. Metabolismo de carboidratos, lipídeos e proteínas. Regulação hormonal do metabolismo. Aspectos farmacológicos do metabolismo de lipídeos, carboidratos e proteínas. Integração do metabolismo.',
			semestre: 1,
			vector: {T:3, P:2, L:3, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['*QO321'],
			color: '#46B963',
			obligatory: true
		},
		'BM415': {
			code: 'BM415',
			name: 'Microbiologia',
			ementa: 'Classificação, crescimento e morte dos microrganismos. Genética bacteriana. Microbiota. Mecanismos de patogenicidade. Principais infecções bacterianas, fúngicas e virais em humanos.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BI315', 'BS115'],
			color: '#46ABB9',
			obligatory: true
		},
		'FR406': {
			code: 'FR406',
			name: 'Deontologia e Legislação Farmacêutica',
			ementa: 'O Código de Ética da profissão farmacêutica. Legislação farmacêutica. Leis que regulamentam o exercício profissional do farmacêutico. Conselho Federal e Conselhos Regionais de Farmácia. As responsabilidades do profissional farmacêutico. Exemplos de má prática. Simulação de julgamento pelo CRF. Agência Nacional de Vigilância Sanitária (ANVISA) e Centros de Vigilância Sanitárias Estaduais e Municipais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AB46B9',
			obligatory: true
		},
		'FR407': {
			code: 'FR407',
			name: 'Genética Médica',
			ementa: 'Estudo do cariótipo humano. Agentes teratogênicos. Erros Inatos do metabolismo. Hemoglobinopatias. Câncer. Terapia Gênica. Genética Molecular e Aconselhamento Genético.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG515'],
			color: '#8E46B9',
			obligatory: true
		},
		'FR509': {
			code: 'FR509',
			name: 'Princípios de Farmacocinética',
			ementa: 'Conceitos fundamentais de Farmacocinética de medicamentos (absorção, distribuição, metabolização e excreção). Farmacodinâmica: princípios básicos da interação fármaco receptor e sinalização intracelular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9C46B9',
			obligatory: true
		},
		'QA282': {
			code: 'QA282',
			name: 'Química Clássica',
			ementa: 'Técnicas de Análise qualitativa envolvendo a separação e reconhecimento de cátions e ânions. Análise quantitativa. Volumetria. Gravimetria. Equilíbrios iônicos, ácido-base, de íons complexos e de oxidorredução. Solubilidade e produto de solubilidade. Tratamento de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG108', 'QG109'],
			color: '#80A455',
			obligatory: true
		},
		'QO721': {
			code: 'QO721',
			name: 'Química Orgânica III',
			ementa: 'Orbitais moleculares de fronteira. Introdução e revisão de aromaticidade. Diferenças entre heteroaromáticos e heterociclos. Principais reações envolvendo heteroaromáticos de 5 e 6 membros contendo um ou dois heteroátomos (N,O,S). Síntese de heteroaromáticos de 5 e 6 membros contendo um ou dois heteroátomos. Síntese de heteroaromáticos fundidos. Exemplos de sínteses de fármacos contendo anéis heterocíclicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO421'],
			color: '#46B963',
			obligatory: true
		},
		'FR504': {
			code: 'FR504',
			name: 'Gestão Farmacêutica',
			ementa: 'Princípios de economia e administração na área da saúde. Liderança e criatividade no ramo farmacêutico. Organização de empresas farmacêuticas. Aspectos administrativos nas áreas operacional, financeira, mercadológica e de recursos humanos de empresas farmacêuticas. Leis trabalhistas e finanças pessoais. Farmacoeconomia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94680',
			obligatory: true
		},
		'FR505': {
			code: 'FR505',
			name: 'Anatomia Patológica',
			ementa: 'Introdução à Patologia: inflamação, distúrbios circulatórios, morte celular, neoplasias, autoimunidade e imunodeficiência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS215'],
			color: '#46ABB9',
			obligatory: true
		},
		'FR507': {
			code: 'FR507',
			name: 'Introdução à Química Farmacêutica',
			ementa: 'Aspectos gerais sobre fármacos e medicamentos. Bases moleculares da ação dos fármacos e biotransformação e latenciação. Descoberta e planejamento racional. Estereoquímica e análise conformacional. Noções de QSAR e modelagem molecular.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QO421'],
			color: '#46B963',
			obligatory: true
		},
		'FR508': {
			code: 'FR508',
			name: 'Análise Instrumental',
			ementa: 'Técnicas de preparação de amostra. Princípios de cromatografia e introdução às técnicas clássicas de cromatografia. Fundamentos de ultravioleta-visível (UV/VIS). Fundamentos de infravermelho (IV). Fundamentos de ressonância magnética nuclear (RMN). Fundamentos de espectrometria de massas (EM).',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QA282', 'QO421'],
			color: '#63AF5C',
			obligatory: true
		},
		'FR605': {
			code: 'FR605',
			name: 'Biologia Molecular',
			ementa: 'Características e propriedades do DNA, base molecular da mutação e recombinação, código genético (transcrição e tradução), noções de tecnologia do DNA recombinante, controle da expressão gênica em procariotos e eucariotos, elementos de transposição, mecanismos de recombinação em microrganismos e noções sobre biologia do desenvolvimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB315'],
			color: '#46B963',
			obligatory: true
		},
		'FR608': {
			code: 'FR608',
			name: 'Farmacologia Básica I',
			ementa: 'Esta disciplina aborda a farmacodinâmica e a farmacocinética das principais classes de drogas que agem no sistema cardiovascular. São abordados fármacos usados para hipertensão que agem nos receptores adrenérgicos, muscarínicos, sistema renina angiotensina e no controle direto da diurese. Também são abordados os fármacos que controlam distúrbios em hemodinâmica, insuficiência cardíaca e deficiências no metabolismo de lipoproteínas e metabolismo glicídico. Todos estes aspectos são abordados em conjunto com uma apresentação dos conceitos da transmissão autonômica e do controle da pressão arterial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR509'],
			color: '#9C46B9',
			obligatory: true
		},
		'QO623': {
			code: 'QO623',
			name: 'Química Orgânica Experimental',
			ementa: 'Experimentos englobando extração ácido-base, isolamento de produtos naturais, preparação de compostos orgânicos e fármacos, conhecimentos básicos de isolamento, purificação e caracterização de produtos de síntese por meios espectroscópicos tais como infra-vermelho, ultravioleta, ressônancia magnética nuclear e espectrometria de massas. Métodos cromatográficos. Princípios de análise orgânica. Projetos de síntese orgânica e de produtos naturais.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QO321'],
			color: '#46B963',
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
		'FR157': {
			code: 'FR157',
			name: 'Laboratório Clínico I',
			ementa: 'Aspectos teóricos e práticos sobre organização e metodologias empregadas nas diferentes áreas do Laboratório de Análises Clínicas. Conhecimento dos exames laboratoriais mais utilizados para avaliação dos sistemas cardiovascular, digestório, hematológico, imunológico, ósteo-articular, respiratório, tegumentar e urinário. Análise crítica e interpretação dos resultados de exames laboratoriais.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BM415', 'BP515', 'BS215'],
			color: '#46ABB9',
			obligatory: true
		},
		'FR415': {
			code: 'FR415',
			name: 'Farmacognosia',
			ementa: 'FARMACOGNOSIA: conceitos e métodos. Extração, identificação e doseamento de princípios ativos naturais e estudo de plantas medicinais e drogas vegetais contendo os principais metabólitos de interesse farmacêutico: terpenos, óleos essenciais e fixos, resinas, alcalóides, taninos, heterosídeos (flavonóides, antraderivados, cardiotônicos, saponinas). Conceituação, identificação e legislação de fitoterápicos. Estudo de príncipios ativos de origem vegetal e sua utillização como matéria prima de medicamentos e cosméticos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BB315', 'BT315', 'QO623', 'FR508'],
			color: '#519A77',
			obligatory: true
		},
		'FR602': {
			code: 'FR602',
			name: 'Farmacotécnica',
			ementa: 'Introdução à farmacotécnica e às formas farmacêuticas, abordando aspectos fundamentais do planejamento, preparo, estabilidade, acondicionamento de medicamentos sob diferentes formas farmacêuticas. Farmácia Magistral. Operações unitárias aplicadas à Farmácia. Formas farmacêuticas líquidas, semi-sólidas, sólidas, estéreis, moldáveis e de liberação controlada.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QF331'],
			color: '#46B963',
			obligatory: true
		},
		'FR603': {
			code: 'FR603',
			name: 'Assistência e Atenção Farmacêutica',
			ementa: 'Atenção Farmacêutica: objetivos, organização e estratégias para a promoção do uso racional de medicamentos. Problemas Relacionados a Medicamentos (PRM). Dispensação com ou sem receita (medicamentos isentos de prescrição). Habilidades de comunicação em Atenção Farmacêutica. Planejamento da Atenção Farmacêutica. Metodologias de seguimento/acompanhamento farmacoterapêutico. Atenção Farmacêutica na atenção básica de saúde.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR304', 'FR406'],
			color: '#B24687',
			obligatory: true
		},
		'FR606': {
			code: 'FR606',
			name: 'Bromatologia',
			ementa: 'Introdução a bromatologia. Princípios em tecnologia de alimentos. Tecnologia dos alimentos ricos em carboidratos, alimentos gordurosos, alimentos protéicos. Alteração dos alimentos. Constituintes, composição centesimal e valor nutritivo dos alimentos. Minerais em alimentos. Aditivos e contaminantes em alimentos. Legislação bromatológica. Boas práticas higiênico-sanitárias.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB315', 'FR508'],
			color: '#55B460',
			obligatory: true
		},
		'FR607': {
			code: 'FR607',
			name: 'Química Farmacêutica Aplicada I',
			ementa: 'Química Farmacêutica e Planejamento de fármacos para o tratamento de doenças infecciosas e dos sistemas ósteo-articular, cardio-respiratório e digestório.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR507'],
			color: '#46B963',
			obligatory: true
		},
		'FR609': {
			code: 'FR609',
			name: 'Farmacologia Básica II',
			ementa: 'A ser incluída.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR608'],
			color: '#9C46B9',
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
		'FR158': {
			code: 'FR158',
			name: 'Laboratório Clínico II',
			ementa: 'Na disciplina será abordada a fisiopatologia e o diagnóstico laboratorial das doenças do sistema endócrino e do sistema reprodutor, às afecções do sistema nervoso central e distúrbios psiquiátricos, assim como das doenças sexualmente transmissíveis e das doenças virais. Aspectos fisiopatológicos e clínicos na área de Oncologia também serão abordados.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['FR157'],
			color: '#46ABB9',
			obligatory: true
		},
		'FR703': {
			code: 'FR703',
			name: 'Operações Unitárias para Ciências Farmacêuticas',
			ementa: 'Introdução a operações unitárias e princípios físicos regentes. Introdução ao processo farmacêutico e seus parâmetros de controle/qualidade. Conceito, equipamento e aplicação das operações unitárias de secagem, separação, modificação de tamanho de partículas, misturas e esterilização.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_107', 'MS380'],
			color: '#80804D',
			obligatory: true
		},
		'FR704': {
			code: 'FR704',
			name: 'Cosmetologia',
			ementa: 'Conceitos teóricos referentes a legislação, avaliação de segurança / eficácia e matérias primas cosméticas. Conceito e prática laboratorial de cosméticos: coloridos, infantis; para celulite e estrias; epilatórios; depilatórios e pós depilação; clareadores e despigmentantes; acne; hidratação cutânea; envelhecimento cutâneo; produtos de higiene; fotoprotetores; desodorantes e antitranspirantes.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR602'],
			color: '#46B963',
			obligatory: true
		},
		'FR705': {
			code: 'FR705',
			name: 'Controle de Qualidade de Produtos I',
			ementa: 'Amostragem. Padrões e material de referência certificado. Controle da matéria-prima. Controle físico-químico. Validação de métodos. Ensaios clássicos e instrumentais. Estabilidade físico-química de medicamentos. Requisitos e funcionamento de um sistema de qualidade. Sistemas BPL e ISO.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602', 'FR606'],
			color: '#4EB762',
			obligatory: true
		},
		'FR706': {
			code: 'FR706',
			name: 'Fitoterapia',
			ementa: 'Legislação brasileira e prescrição de fitoterápicos. Formulações e controle de qualidade. Alimentos com propriedades funcionais ou de saúde. Farmacologia e fitoquímica de fitoterápicos que atuam no sitema nervoso central, sistema cardiovascular, sistema respiratório, sistema digestório e trato genito-urinário. Processo inflamatório e doloroso, imunoestimulantes e adaptógenos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7146B9',
			obligatory: true
		},
		'FR707': {
			code: 'FR707',
			name: 'Química Farmacêutica Aplicada II',
			ementa: 'Química Farmacêutica e Planejamento de fármacos para o tratamento de afecções do sistema nervoso central. Quimioterapia oncológica e antiviral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR609', 'FR507'],
			color: '#71808E',
			obligatory: true
		},
		'FR725': {
			code: 'FR725',
			name: 'Biotecnologia',
			ementa: 'Princípios e aplicações da biotecnologia. Ferramentas para a obtenção de DNA recombinante e construção de vetores. Fermentação: Enzimas e microrganismos na obtenção de produtos biotecnológicos. Biorreatores: Imobilização, otimização e escalas. Biossensores. Legislação de Biossegurança.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM415', 'FR605'],
			color: '#46B28E',
			obligatory: true
		},
		'MD191': {
			code: 'MD191',
			name: 'Saúde Pública nas Ciências Farmacêuticas',
			ementa: 'Introdução ao estudo do sistema de saúde brasileiro. Programas e políticas de saúde pública e seus condicionantes sócio-políticos, históricos e econômicos. Visão crítica dos papéis desempenhados por instituições e profissionais da área, seja pela produção do planejamento de saúde no Brasil. Assistência farmacêutica no âmbito do SUS. Noções de Farmacoeconomia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96346',
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
		'FR804': {
			code: 'FR804',
			name: 'Toxicologia Geral',
			ementa: 'História da toxicologia, epidemiologia das intoxicações, conceitos gerais em toxicologia, toxicocinética, toxicodinâmica, avaliação de toxicidade, avaliação de risco, toxicologia de medicamentos, interações medicamentosas, toxicologia de alimentos, toxicologia ocupacional, toxicologia ambiental, toxicologia social, toxinologia (animais peçonhentos) e análises toxicológicas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['FR609', 'FR508'],
			color: '#807B8B',
			obligatory: true
		},
		'FR805': {
			code: 'FR805',
			name: 'Controle de Qualidade de Produtos II',
			ementa: 'Gerenciamento da qualidade na fabricação de insumos farmacêuticos. Contaminação microbiana de insumos farmacêuticos. Controle do crescimento microbiano. Controle microbiológico de matéria-prima e de produtos acabados. Controle microbiológico de embalagens. Contagem de microrganismos. Agentes químicos conservantes. Testes específicos de controle de identificação de microrganismos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BP515', 'BM415'],
			color: '#46ABB9',
			obligatory: true
		},
		'FR806': {
			code: 'FR806',
			name: 'Farmacoterapia e Interações Medicamentosas',
			ementa: 'Definição e classificação das interações medicamentosas. Interações medicamento-medicamento, medicamento-alimento, medicamento-álcool e outras drogas. Grupos de Risco. Discussão de Casos clínicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR608'],
			color: '#9C46B9',
			obligatory: true
		},
		'FR807': {
			code: 'FR807',
			name: 'Tecnologia Farmacêutica',
			ementa: 'Permitir ao aluno a aplicação de recursos tecnológicos e conceitos farmacocinéticos e de biodisponibilidade na idealização e elaboração de formas farmacêuticas tradicionais e inovadoras. Fornecer o conhecimento e propiciar o manuseio de técnicas, normas e equipamentos utilizados nos processos industriais, visando a capacitação do aluno para o planejamento, desenvolvimento, licenciamento de produtos e legalização de instalações físicas junto à Indústria Farmacêutica e Farmácia Hospitalar. Processos e operações unitárias.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602'],
			color: '#46B963',
			obligatory: true
		},
		'FR808': {
			code: 'FR808',
			name: 'Farmacoepidemiologia',
			ementa: '<span style=\"color:rgb(0, 0, 0)',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414'],
			color: '#46B954',
			obligatory: true
		},
		'FR900': {
			code: 'FR900',
			name: 'Estágio Supervisionado em Farmácia',
			ementa: 'Estágio supervisionado por docente do Curso de Farmácia em atividade profissional nas modalidades de: farmácia pública e/ou hospitalar, assistência farmacêutica, controle de qualidade de medicamentos, administração e economia, legislação, deontologia, dispensação e atendimento ao público. Seleção, aquisição, distribuição e uso de medicamentos em farmácias públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA455'],
			color: '#B9B946',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'FR901': {
			code: 'FR901',
			name: 'Estágio Supervisionado Profissionalizante I',
			ementa: 'Estágio Supervisionado por docente do Curso de Farmácia desenvolvido em estabelecimentos públicos ou privados, legalmente constituídos em atividades regulamentadas para o profissional farmacêutico.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:24, D:0, HS:26, SL:0, C:26},
			requisitos: ['AA200'],
			color: '#469CB9',
			obligatory: true
		},
		'FR902': {
			code: 'FR902',
			name: 'Estágio Supervisionado Profissionalizante II',
			ementa: 'Estágio supervisionado por docente do Curso de Farmácia desenvolvido em estabelecimentos públicos ou privados, legalmente constituídos em atividades complementares ou em continuidade ao do Estágio Supervisionado Profissionalizante I.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:23, D:0, HS:25, SL:0, C:25},
			requisitos: ['AA460'],
			color: '#ABB946',
			obligatory: true
		},
		'FR903': {
			code: 'FR903',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Acompanhamento, discussão e avaliação, em conjunto com os respectivos orientadores, da concepção, planejamento, execução, análise e redação de monografia que será apresentada como trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#9CB946',
			obligatory: true
		},
		'FR904': {
			code: 'FR904',
			name: 'Atividades Complementares',
			ementa: 'Participação em atividades complementares ao ensino e aprendizado (Palestras, cursos, congressos, iniciação científica, atividades de monitoria, atividades no centro acadêmico e Empresa Júnior, organização de atividades e eventos na Universidade, atividades sociais, visitas técnicas, e outros).',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'BB415': {
			code: 'BB415',
			name: 'Bioquímica Farmacêutica',
			ementa: 'Aspectos bioquímicos da interação, metabolização e da resistência medicamentosa. Influência da nutrição na biodisponibilidade de drogas. Monitoramento enzimático da ação medicamentosa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['BB315'],
			color: '#46B963',
			obligatory: false
		},
		'BH515': {
			code: 'BH515',
			name: 'Citotécnicas e Histotécnicas em Ciências Farmacêuticas',
			ementa: 'Introdução às técnicas de histoprocessamento e histotécnicas de materiais de origem animal e vegetal. Fundamentos da Citoquímica. Cultivo celular primário e de linhagens estabelecidas de origem animal para fins de bioensaios. Princípios de microscopia de luz e processamento de imagens.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BS215', '*BT315'],
			color: '#4D79B9',
			obligatory: false
		},
		'BM915': {
			code: 'BM915',
			name: 'Metabólitos e Proteínas de Origem Microbiana: Identificação, Obtenção e Purif.',
			ementa: 'Cultivo de microorganismos para produção de proteínas e metabólicos tóxicos ou famacologicamente ativos. Meios de cultura, condições de cultivo e diferenças na produção em pequena, média e grande escala. Estratégias de identificação, extração, purificação e ensaios de atividades. Bioensaios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99C46',
			obligatory: false
		},
		'BM925': {
			code: 'BM925',
			name: 'Identificação e Caracterização de Microrganismos',
			ementa: 'Noções de taxonomia e classificação de microrganismos: bactérias, fungos filamentosos e leveduras e arqueas. Metodologias de caracterização taxanômica convencional: morfologia e micromorfologia, caracterização fenotípica e bioquímica. Quimiotaxonomia. Métodos de caracterização molecular: métodos de tipagem, sequenciamento e análise filogenética de DNA. Utilização de chaves e esquemas de identificação. Sistemas semiautomatizados e automatizados de caracterização e identificação para microrganismos clínicos e ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#63B946',
			obligatory: false
		},
		'BP584': {
			code: 'BP584',
			name: 'Animais de Laboratório',
			ementa: 'Importância dos animais de laboratório na pesquisa biomédica. Ciência e tecnologia em animais de laboratório. Modelos animais. Infraestrutura de biotérios no Brasil. Caracterização de linhagens de camundongos e ratos. Classificação sanitária e monitoramento da saúde animal. Monitoramento genético de colônias de camundongos. Bioética e Legislação. Biossegurança em biotérios. Práticas sobre ciclo estral, histerectomia, sangria e inoculação, obtenção de embriões murinos e congelamento de embriões de camundongos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:1, D:1, HS:5, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#B97146',
			obligatory: false
		},
		'BP915': {
			code: 'BP915',
			name: 'Qualidade de Água, Saúde e Saneamento',
			ementa: 'A água e o meio ambiente. Água e parasitos. Água de abastecimento público: tipos de estações de tratamento de água, controles físico-químico, microbiológico e parasitológico das águas de consumo humano incluindo bactérias, algas, fungos, vírus e protozoários patogênicos. Águas residuais: disposição nos ambientes rural e urbano, processos de tratamento. Fármacos no ambiente. Qualidade de água e Portaria 2914, de 14 de dezembro de 2011 (revogada a Portaria 518).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#71B946',
			obligatory: false
		},
		'BS615': {
			code: 'BS615',
			name: 'Cultivo de Células Animais - Aplicações em Ensaios Biológicos',
			ementa: 'Infraestrutura e biossegurança em laboratório de cultura celular. Esterilização e avaliação da eficácia. Meios de cultura e soluções complementares. Cultivo celular primário e de linhagens estabelecidas. Estabelecimento de inóculos e avaliação de viabilidade celular. Protocolos de descontaminação de culturas. Medidas de crescimento populacional. Criopreservação; imortalização. Caracterização de linhagens. Princípios, aplicações e técnicas de bioensaios em cultivo celular. Considerações teóricas sobre transformação celular e neoplasias, células tronco, terapia celular e medicina regenerativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA430'],
			color: '#6346B9',
			obligatory: false
		},
		'BT925': {
			code: 'BT925',
			name: 'Etnobotânica de Plantas de Interesse Farmacêutico',
			ementa: 'Conceituação, aspectos botânicos, diversidade biológica, distribuição geográfica, importância econômica, uso popular e etnobotânica de plantas medicinais e de interesse farmacêutico. Histórico da Etnobotânica em diferentes culturas. Metodologia de coleta e registros das informações etnobotânicas. Identificação botânica. Aspectos éticos e legais do direito de propriedade intelectual adquirida. Contexto integrado em conservação e usos de recursos genéticos. Valor medicinal e socioeconômico de espécies nativas e exóticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BT315'],
			color: '#5446B9',
			obligatory: false
		},
		'BV915': {
			code: 'BV915',
			name: 'Metabolismo Vegetal e Produção de Fitofármacos',
			ementa: 'Propagação e domesticação de plantas. Manutenção da biodiversidade. Fatores ambientais e crescimento das plantas. Fotossíntese. Respiração. Hormônios vegetais. Biossíntese e metabolismo secundário: fenil-propanoides, terpenoides, alcaloides. Manipulação genética.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BT315'],
			color: '#5446B9',
			obligatory: false
		},
		'EI---': {
			code: 'EI---',
			name: 'Qualquer Disciplina com codigo EI---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EI---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946B9',
			obligatory: false
		},
		'FR006': {
			code: 'FR006',
			name: 'Estudo de Biodisponibilidade e Bioquivalência de Medicamentos',
			ementa: 'Etapa clínico-histórica: novos medicamentos, biodisponibilidade e bioequivalência, estudos clínicos, aspectos de segurança. Administração do medicamento, coleta de material biológico, manuseio de amostras biológicas, documentação, responsabilidades. Etapa analítica: fundamentação teórica e método bioanalítico. Etapa estatística: métodos estatísticos em bioequivalência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9AB46',
			obligatory: false
		},
		'FR009': {
			code: 'FR009',
			name: 'Biotecnologia Microbiana na Indústria Farmacêutica',
			ementa: 'Compostos farmacologicamente ativos de origem microbiana e suas aplicações em medicina humana e veterinária, assim como na agricultura. Antibióticos, compostos antitumorais, moduladores de resposta imunológica e anti-inflamatórios, entre outros. Biodiversidade microbiana e estratégias de bioprospecção. Isolamento seletivo e caracterização preliminar de bactérias, fungos e leveduras. Bioensaios para detecção de atividade. Preservação e coleções de microrganismos. Utilização de microrganismos como biorreatores. Patentes e proteção de propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR725'],
			color: '#46B28E',
			obligatory: false
		},
		'FR014': {
			code: 'FR014',
			name: 'Tecnologia de Produção de Plantas Medicinais',
			ementa: 'A formação da planta medicinal. Biodiversidade - trajetória, produtos e interações. Sistemas produtivos: extrativismo, manejo, cultivo orgânico e permacultura. Acesso legal à biodiversidade. Bancos de germoplasma. Produção sustentável de drogas vegetais. Estudos de casos: processos de seleção e de domesticação de espécies nativas. Meio ambiente e controle dos processos produtivos e de pós-colheita.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR415'],
			color: '#519A77',
			obligatory: false
		},
		'FR018': {
			code: 'FR018',
			name: 'Empreendedorismo',
			ementa: 'O empreendedorismo será abordado com aulas dedicadas a plano de negócios, incubadoras e propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4663B9',
			obligatory: false
		},
		'FR021': {
			code: 'FR021',
			name: 'Farmacologia Quantitativa',
			ementa: 'Aspectos quantitativos da farmacologia usados no estudo e caracterização de drogas e de novos medicamentos. Conceitos básicos de interação droga-receptor, como curvas dose-resposta, agonistas e antagonistas, atividade intrínseca, eficácia, reserva de receptores, sinergismo, taquifilaxia, desensibilização, tipos de antagonismo. Modelos teóricos. Serão discutidos os métodos utilizados na determinação de parâmetros tais como DE50, CI50, KD, pA2, e na quantificação e classificação de receptores. Também será discutido o uso de modelos teóricos no desenvolvimento de novos medicamentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#80B946',
			obligatory: false
		},
		'FR022': {
			code: 'FR022',
			name: 'Farmacologia Clínica e Terapêutica',
			ementa: 'Esta disciplina introduzirá o aluno a estudos clínicos e terapêuticos onde serão discutidos os seguintes tópicos: o que é um estudo clínico, tipos de estudos clínicos, delineamento de um estudo clínico, os aspectos éticos envolvidos nestes estudos (incluindo a legislação vigente), a escolha de voluntários, conflito de interesse e interpretação de dados dentre outros.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#54B946',
			obligatory: false
		},
		'FR026': {
			code: 'FR026',
			name: 'Seminários Gerais',
			ementa: 'Tópicos avançados de integração entre Química, Biologia e Medicina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95446',
			obligatory: false
		},
		'FR035': {
			code: 'FR035',
			name: 'Farmácia Homeopática',
			ementa: 'A disciplina Farmácia Homeopática visa transmitir aos alunos os fundamentos que alicerçam a terapêutica homeopática e as técnicas a serem aplicadas no desempenho das atividades na Farmácia Homeopática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602'],
			color: '#46B963',
			obligatory: false
		},
		'FR037': {
			code: 'FR037',
			name: 'Planejamento Estratégico de Carreira',
			ementa: 'Elementos para currículos, carta de apresentação, pesquisa sobre empresa, marketing pessoal, entrevistas, dinâmicas de grupo, gerenciamento de carreira, novo emprego e progresso na carreira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:2, HS:4, SL:2, C:2},
			requisitos: '',
			color: '#B94671',
			obligatory: false
		},
		'FR038': {
			code: 'FR038',
			name: 'Radiofarmácia',
			ementa: 'A disciplina Radiofarmácia visa transmitir aos alunos os fundamentos e as técnicas envolvidas na produção e aplicação clínica e diagnóstica de radiofármacos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94663',
			obligatory: false
		},
		'FR039': {
			code: 'FR039',
			name: 'Tópicos Especiais em Ciências Farmacêuticas I',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#8EB946',
			obligatory: false
		},
		'FR040': {
			code: 'FR040',
			name: 'Tópicos Especiais em Ciências Farmacêuticas II',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946AB',
			obligatory: false
		},
		'FR041': {
			code: 'FR041',
			name: 'Tópicos Especiais em Ciências Farmacêuticas III',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#4671B9',
			obligatory: false
		},
		'FR042': {
			code: 'FR042',
			name: 'Tópicos Especiais em Ciências Farmacêuticas IV',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#46B98E',
			obligatory: false
		},
		'FR043': {
			code: 'FR043',
			name: 'Tópicos Especiais em Ciências Farmacêuticas V',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#B98046',
			obligatory: false
		},
		'FR044': {
			code: 'FR044',
			name: 'Ferramentas de Estudo de Bioprocessos',
			ementa: 'Estudo de caso: escolha de um produto do metabolismo microbiano de interesse para a indústria. Estudo e compreensão do processo de forma global. Planejamento experimental para o desenvolvimento e otimização de produção.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR725'],
			color: '#46B28E',
			obligatory: false
		},
		'FR046': {
			code: 'FR046',
			name: 'Farmácia Clínica I',
			ementa: 'Farmácia Clínica: histórico, conceitos e perspectivas. Utilização racional de medicamentos, seleção de tratamentos de eleição e alternativos: critérios. Fontes de informação sobre medicamentos (Bases de dados para pesquisa sobre medicamentos – medicina baseada em evidências). Pesquisa sobre interações medicamentosas e possíveis efeitos adversos. Perfil farmacoterapêutico de pacientes. Estudo de guideliness e Diretrizes em ambiente ambulatorial e hospitalar. Manejo e Monitorização farmacoterapêutica de indivíduos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR603'],
			color: '#B24687',
			obligatory: false
		},
		'FR047': {
			code: 'FR047',
			name: 'Métodos Modernos Aplicados à Análise de Medicamentos',
			ementa: 'Avanços recentes na análise de insumos farmacêuticos e medicamentos e estudos de pré-formulação e estabilidade por métodos de separação por cromatografia e eletroforese, análise térmica e métodos espectrométricos e espectroscópicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR508'],
			color: '#63AF5C',
			obligatory: false
		},
		'FR048': {
			code: 'FR048',
			name: 'Farmácia Clínica II',
			ementa: 'Perfil e acompanhamento farmacoterapêutico de pacientes internados e ambulatoriais. Manejo e Monitorização farmacoterapêutica de indivíduos. Intervenções farmacêuticas Farmacêutico-Médico-Paciente. Aplicar os conhecimentos teóricos em ambiente de aprendizado real e prático. Trabalhar em equipe multiprofissional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR046'],
			color: '#B24687',
			obligatory: false
		},
		'FR325': {
			code: 'FR325',
			name: 'Iniciação Científica em Ciências Farmacêuticas I',
			ementa: 'Estágio supervisionado a ser cumprido por aluno do curso de Farmácia em laboratório de pesquisa biológica, química ou médica da Unicamp.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#B9468E',
			obligatory: false
		},
		'FR326': {
			code: 'FR326',
			name: 'Iniciação Científica em Ciências Farmacêuticas II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Farmácia em laboratórios de pesquisa biológica, química ou médica da Unicamp.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		},
		'MD182': {
			code: 'MD182',
			name: 'Líquidos Biológicos',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em urinálise, derrames cavitários, líquido cefaloraquidiano, sinovial e seminal. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#46B99C',
			obligatory: false
		},
		'MD183': {
			code: 'MD183',
			name: 'Bioquímica Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em bioquímica clínica e toxicologia. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200', 'BB315'],
			color: '#46B963',
			obligatory: false
		},
		'MD187': {
			code: 'MD187',
			name: 'Fisiologia Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames para avaliação funcional de glândulas endócrinas e para determinação de marcadores tumoriais séricos. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#8046B9',
			obligatory: false
		},
		'MD188': {
			code: 'MD188',
			name: 'Hematologia Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em hematologia clínica. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9469C',
			obligatory: false
		},
		'MD189': {
			code: 'MD189',
			name: 'Microbiologia Clínica',
			ementa: 'Preparação de meios de cultura e reagentes. Coleta de espécimes clínicos para exames microbiológicos. Avaliação pré-analítica, realização e interpretação de exames de rotina de pequena, média e alta complexidades em Microbiologia Clínica, cumpridas as normas setoriais de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4654B9',
			obligatory: false
		},
		'MD190': {
			code: 'MD190',
			name: 'Imunologia e Parasitologia Clínicas',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em imunologia e parasitologia clínicas. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B971',
			obligatory: false
		},
		'QG863': {
			code: 'QG863',
			name: 'Projetos de Pesquisa em Ciências Farmacêuticas',
			ementa: 'Desenvolvimento de projetos científicos de interesse das Ciências Farmacêuticas sob a supervisão de membros do corpo docente do Instituto de Química. O docente responsável pela disciplina será o representante do Instituto de Química na Comissão de Graduação do curso de Farmácia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['AA200'],
			color: '#46B9AB',
			obligatory: false
		},
		'QI445': {
			code: 'QI445',
			name: 'Introdução à Espectroscopia Vibracional',
			ementa: 'Fundamentos de espectroscopia vibracional e interpretação de espectros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI246'],
			color: '#46B963',
			obligatory: false
		},
		'QO423': {
			code: 'QO423',
			name: 'Fundamentos da Espectrometria de Massas',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações de espectrometria de massas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO421'],
			color: '#46B963',
			obligatory: false
		},
		'QO424': {
			code: 'QO424',
			name: 'Fundamentos em Espectroscopia e Ressonância Magnética Nuclear',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações da Espectroscopia de Ressonância Magnética Nuclear.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO421'],
			color: '#46B963',
			obligatory: false
		}
	}
};

export default catalogue;
