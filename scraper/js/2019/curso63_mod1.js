const catalogue = {
	totalCredits: 325,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BS115', 'F_107', 'MS380', 'QG109', 'QG108', 'FR103', 'QG362']
		},
		'sem-2': {
			id: '2',
			subjects: ['BS215', 'ME414', 'QO321', 'QI246', 'FR204']
		},
		'sem-3': {
			id: '3',
			subjects: ['BI315', 'BP515', 'BT315', 'QO421', 'BG515', 'QF331', 'FR304', 'FR510']
		},
		'sem-4': {
			id: '4',
			subjects: ['BM415', 'BB315', 'QO721', 'QA282', 'FR407', 'FR509', 'FR406']
		},
		'sem-5': {
			id: '5',
			subjects: ['FR504', 'FR605', 'QO623', 'FR508', 'FR505', 'FR608', 'FR507', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['FR606', 'FR157', 'FR415', 'ELET06', 'FR602', 'FR609', 'FR603', 'FR607']
		},
		'sem-7': {
			id: '7',
			subjects: ['FR725', 'FR705', 'FR158', 'FR703', 'FR704', 'FR706', 'FR707', 'MD191', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['FR805', 'ELET08', 'FR808', 'FR807', 'FR804', 'FR806', 'FR900']
		},
		'sem-9': {
			id: '9',
			subjects: ['FR901', 'FR904']
		},
		'sem-10': {
			id: '10',
			subjects: ['FR903', 'FR902']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['BS615', 'BT925', 'BV915', 'EI---', 'FR006', 'FR009', 'FR014', 'FR018', 'FR021', 'FR022', 'FR026', 'FR035', 'FR037', 'FR038', 'FR039', 'FR040', 'FR041', 'FR042', 'FR043', 'FR044', 'FR046', 'FR047', 'FR048', 'FR050', 'FR325', 'FR326', 'MD182', 'MD183', 'MD187', 'MD188', 'MD189', 'MD190', 'QI445', 'QO423', 'QO424'],
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
			color: '#93B946',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946A2',
			obligatory: true
		},
		'FR103': {
			code: 'FR103',
			name: 'Introdução à Profissão Farmacêutica',
			ementa: 'Resumo histórico da Farmácia no Brasil. As diretrizes curriculares dos cursos de Graduação em Farmácia e o perfil profissional do farmacêutico. Âmbito profissional. Novas perspectivas profissionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B983',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8346B9',
			obligatory: true
		},
		'QG362': {
			code: 'QG362',
			name: 'Química com Segurança',
			ementa: 'Segurança em laboratório químico; identificação e uso de equipamentos de segurança; manuseio de substâncias com segurança; estocagem e descarte de resíduos de laboratórios. Contaminação química. Treinamento para atendimento em situações de emergência; técnicas de primeiros socorros. Legislação sobre segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97446',
			obligatory: true
		},
		'BS215': {
			code: 'BS215',
			name: 'Estrutura e Função de Órgãos e Sistemas',
			ementa: 'Estudo integrado da estrutura e função de órgãos e sistemas em humanos.',
			semestre: 1,
			vector: {T:8, P:8, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['*BS115'],
			color: '#93B946',
			obligatory: true
		},
		'FR204': {
			code: 'FR204',
			name: 'Ética e Bioética',
			ementa: 'Conceitos e suas articulações na sociedade com foco os direitos humanos, a sociedade brasileira e o contexto internacional. Bioética. Pesquisa envolvendo seres humanos e animais. Comissão Nacional de Ética em Pesquisa (CONEPE) e Comitês de Ética em Pesquisa. Reflexão sobre os aspectos éticos envolvidos nas questões relativas a privacidade e confidencialidade, problemas de início e final de vida, alocação de recursos escassos, respeito à pessoa e tomada de decisão e pesquisa',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B1B9',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#4646B9',
			obligatory: true
		},
		'QI246': {
			code: 'QI246',
			name: 'Química Inorgânica',
			ementa: 'Acidez e basicidade de Lewis: conceitos de dureza e moleza; química de coordenação e de organometálicos de metais de transição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#A2B946',
			obligatory: true
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#A2B946',
			obligatory: true
		},
		'BG515': {
			code: 'BG515',
			name: 'Genética Básica e Molecular',
			ementa: 'O gene como unidade de herança. Interações gênicas. Natureza molecular do gene. Mecanismo de regulação da expressão gênica. Engenharia genética e suas aplicações.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95546',
			obligatory: true
		},
		'BI315': {
			code: 'BI315',
			name: 'Imunologia',
			ementa: 'Resposta imune inata e adaptativa. Órgãos e células envolvidas na resposta imune. Imunopatologias. Imunoprofilaxia. Diagnóstico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS115'],
			color: '#93B946',
			obligatory: true
		},
		'BP515': {
			code: 'BP515',
			name: 'Parasitologia',
			ementa: 'Estudo de helmintos e protozoários de interesse humano: ciclo de vida, transmissão, epidemiologia, diagnóstico, patogenia, atuação dos principais fármacos contra parasitos, tratamento e profilaxia. Estudo dos principais vetores de doenças parasitárias humanas.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BS115'],
			color: '#93B946',
			obligatory: true
		},
		'BT315': {
			code: 'BT315',
			name: 'Farmacobotânica',
			ementa: 'Morfologia externa de plantas vasculares.Tipos celulares e tecidos vegetais. Fundamentos de taxonomia e sistemática vegetal. Estudos biossistemáticos para identificação de táxons. Principais grupos taxonômicos, com enfoque em plantas medicinais. Análises farmacopéicas. Importância de estudos botânicos para a pesquisa de produtos naturais.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B993',
			obligatory: true
		},
		'FR304': {
			code: 'FR304',
			name: 'Políticas de Saúde',
			ementa: 'Diretrizes, justificativas, prioridades e estratégias. Programa de medicamentos essenciais. Relação Nacional de Medicamentos (RENAME). A política de genéricos. A produção de medicamentos no Brasil.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94655',
			obligatory: true
		},
		'FR510': {
			code: 'FR510',
			name: 'Metodologia e Informação Científica',
			ementa: 'Compreender o papel da ciência e do cientista na sociedade. A construção do conhecimento científico: juízos de realidade e de valor, o método científico, paradigmas da ciência, influência da atividade do cientista na sociedade. O trabalho científico: resumo e apresentação em congressos, simpósios e eventos similares. Os tipos de monografias científicas: para graduação e especialização (monografia), para Mestrado (dissertação) e para Doutorado (tese). Relatórios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#55B946',
			obligatory: true
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gás real, energia livre de Gibbs, equilíbrios físico e químico, diagrama de fases, cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#A2B946',
			obligatory: true
		},
		'QO421': {
			code: 'QO421',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos. Derivados dos ácidos carboxílicos. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático. Substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO321'],
			color: '#A2B946',
			obligatory: true
		},
		'BB315': {
			code: 'BB315',
			name: 'Bioquímica',
			ementa: 'Estrutura e função de proteínas. Cinética e regulação enzimática. Metabolismo de carboidratos, lipídeos e proteínas. Regulação hormonal do metabolismo. Aspectos farmacológicos do metabolismo de lipídeos, carboidratos e proteínas. Integração do metabolismo.',
			semestre: 1,
			vector: {T:3, P:2, L:3, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['*QO321'],
			color: '#A2B946',
			obligatory: true
		},
		'BM415': {
			code: 'BM415',
			name: 'Microbiologia',
			ementa: 'Classificação, crescimento e morte dos microrganismos. Genética bacteriana. Microbiota. Mecanismos de patogenicidade. Principais infecções bacterianas, fúngicas e virais em humanos.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BI315', 'BS115'],
			color: '#93B946',
			obligatory: true
		},
		'FR406': {
			code: 'FR406',
			name: 'Deontologia e Legislação Farmacêutica',
			ementa: 'O Código de Ética da profissão farmacêutica. Legislação farmacêutica. Leis que regulamentam o exercício profissional do farmacêutico. Conselho Federal e Conselhos Regionais de Farmácia. As responsabilidades do profissional farmacêutico. Exemplos de má prática. Simulação de julgamento pelo CRF. Agência Nacional de Vigilância Sanitária (ANVISA) e Centros de Vigilância Sanitárias Estaduais e Municipais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A2',
			obligatory: true
		},
		'FR407': {
			code: 'FR407',
			name: 'Genética Médica',
			ementa: 'Estudo do cariótipo humano. Agentes teratogênicos. Erros Inatos do metabolismo. Hemoglobinopatias. Câncer. Terapia Gênica. Genética Molecular e Aconselhamento Genético.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG515'],
			color: '#B95546',
			obligatory: true
		},
		'FR509': {
			code: 'FR509',
			name: 'Princípios de Farmacocinética',
			ementa: 'Conceitos fundamentais de Farmacocinética de medicamentos (absorção, distribuição, metabolização e excreção). Farmacodinâmica: princípios básicos da interação fármaco receptor e sinalização intracelular.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9346B9',
			obligatory: true
		},
		'QA282': {
			code: 'QA282',
			name: 'Química Clássica',
			ementa: 'Equilíbrios iônicos, ácido-base, de íons complexos e de óxido-redução. Solubilidade e produto de solubilidade. Análise qualitativa e quantitativa. Volumetria. Gravimetria. Expressão de resultados analíticos.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG108', 'QG109'],
			color: '#938080',
			obligatory: true
		},
		'QO721': {
			code: 'QO721',
			name: 'Química Orgânica III',
			ementa: 'Orbitais moleculares de fronteira. Introdução e revisão de aromaticidade. Diferenças entre heteroaromáticos e heterociclos. Principais reações envolvendo heteroaromáticos de 5 e 6 membros contendo um ou dois heteroátomos (N,O,S). Síntese de heteroaromáticos de 5 e 6 membros contendo um ou dois heteroátomos. Síntese de heteroaromáticos fundidos. Exemplos de sínteses de fármacos contendo anéis heterocíclicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO421'],
			color: '#A2B946',
			obligatory: true
		},
		'FR504': {
			code: 'FR504',
			name: 'Gestão Farmacêutica',
			ementa: 'Princípios de economia e administração na área da saúde. Liderança e criatividade no ramo farmacêutico. Organização de empresas farmacêuticas. Aspectos administrativos nas áreas operacional, financeira, mercadológica e de recursos humanos de empresas farmacêuticas. Leis trabalhistas e finanças pessoais. Farmacoeconomia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99346',
			obligatory: true
		},
		'FR505': {
			code: 'FR505',
			name: 'Anatomia Patológica',
			ementa: 'Introdução à Patologia: inflamação, distúrbios circulatórios, morte celular, neoplasias, autoimunidade e imunodeficiência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS215'],
			color: '#93B946',
			obligatory: true
		},
		'FR507': {
			code: 'FR507',
			name: 'Introdução à Química Farmacêutica',
			ementa: 'Aspectos gerais sobre fármacos e medicamentos. Bases moleculares da ação dos fármacos e biotransformação e latenciação. Descoberta e planejamento racional. Estereoquímica e análise conformacional. Noções de QSAR e modelagem molecular.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QO421'],
			color: '#A2B946',
			obligatory: true
		},
		'FR508': {
			code: 'FR508',
			name: 'Análise Instrumental',
			ementa: 'Técnicas de preparação de amostra. Princípios de cromatografia e introdução às técnicas clássicas de cromatografia. Fundamentos de ultravioleta-visível (UV/VIS). Fundamentos de infravermelho (IV). Fundamentos de ressonância magnética nuclear (RMN). Fundamentos de espectrometria de massas (EM).',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QA282', 'QO421'],
			color: '#9B9D63',
			obligatory: true
		},
		'FR605': {
			code: 'FR605',
			name: 'Biologia Molecular',
			ementa: 'Características e propriedades do DNA, base molecular da mutação e recombinação, código genético (transcrição e tradução), noções de tecnologia do DNA recombinante, controle da expressão gênica em procariotos e eucariotos, elementos de transposição, mecanismos de recombinação em microrganismos e noções sobre biologia do desenvolvimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB315'],
			color: '#A2B946',
			obligatory: true
		},
		'FR608': {
			code: 'FR608',
			name: 'Farmacologia Básica I',
			ementa: 'Esta disciplina aborda a farmacodinâmica e a farmacocinética das principais classes de drogas que agem no sistema cardiovascular. São abordados fármacos usados para hipertensão que agem nos receptores adrenérgicos, muscarínicos, sistema renina angiotensina e no controle direto da diurese. Também são abordados os fármacos que controlam distúrbios em hemodinâmica, insuficiência cardíaca e deficiências no metabolismo de lipoproteínas e metabolismo glicídico. Todos estes aspectos são abordados em conjunto com uma apresentação dos conceitos da transmissão autonômica e do controle da pressão arterial.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR509'],
			color: '#9346B9',
			obligatory: true
		},
		'QO623': {
			code: 'QO623',
			name: 'Química Orgânica Experimental',
			ementa: 'Experimentos englobando extração ácido-base, isolamento de produtos naturais, preparação de compostos orgânicos e fármacos, conhecimentos básicos de isolamento, purificação e caracterização de produtos de síntese por meios espectroscópicos tais como infra-vermelho, ultravioleta, ressônancia magnética nuclear e espectrometria de massas. Métodos cromatográficos. Princípios de análise orgânica. Projetos de síntese orgânica e de produtos naturais.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QO321'],
			color: '#A2B946',
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
			color: '#93B946',
			obligatory: true
		},
		'FR415': {
			code: 'FR415',
			name: 'Farmacognosia',
			ementa: 'FARMACOGNOSIA: conceitos e métodos. Extração, identificação e doseamento de princípios ativos naturais e estudo de plantas medicinais e drogas vegetais contendo os principais metabólitos de interesse farmacêutico: terpenos, óleos essenciais e fixos, resinas, alcalóides, taninos, heterosídeos (flavonóides, antraderivados, cardiotônicos, saponinas). Conceituação, identificação e legislação de fitoterápicos. Estudo de príncipios ativos de origem vegetal e sua utillização como matéria prima de medicamentos e cosméticos.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BB315', 'BT315', 'FR508', '*QO623'],
			color: '#89B261',
			obligatory: true
		},
		'FR602': {
			code: 'FR602',
			name: 'Farmacotécnica',
			ementa: 'Introdução à farmacotécnica e às formas farmacêuticas, abordando aspectos fundamentais do planejamento, preparo, estabilidade, acondicionamento de medicamentos sob diferentes formas farmacêuticas. Farmácia Magistral. Operações unitárias aplicadas à Farmácia. Formas farmacêuticas líquidas, semi-sólidas, sólidas, estéreis, moldáveis e de liberação controlada.',
			semestre: 1,
			vector: {T:4, P:1, L:3, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QF331'],
			color: '#A2B946',
			obligatory: true
		},
		'FR603': {
			code: 'FR603',
			name: 'Assistência e Atenção Farmacêutica',
			ementa: 'Atenção Farmacêutica: objetivos, organização e estratégias para a promoção do uso racional de medicamentos. Problemas Relacionados a Medicamentos (PRM). Dispensação com ou sem receita (medicamentos isentos de prescrição). Habilidades de comunicação em Atenção Farmacêutica. Planejamento da Atenção Farmacêutica. Metodologias de seguimento/acompanhamento farmacoterapêutico. Atenção Farmacêutica na atenção básica de saúde.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR304', 'FR406'],
			color: '#80807C',
			obligatory: true
		},
		'FR606': {
			code: 'FR606',
			name: 'Bromatologia',
			ementa: 'Introdução a bromatologia. Princípios em tecnologia de alimentos. Tecnologia dos alimentos ricos em carboidratos, alimentos gordurosos, alimentos protéicos. Alteração dos alimentos. Constituintes, composição centesimal e valor nutritivo dos alimentos. Minerais em alimentos. Aditivos e contaminantes em alimentos. Legislação bromatológica. Boas práticas higiênico-sanitárias.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB315', 'FR508'],
			color: '#9FAB55',
			obligatory: true
		},
		'FR607': {
			code: 'FR607',
			name: 'Química Farmacêutica Aplicada I',
			ementa: 'Química Farmacêutica e Planejamento de fármacos para o tratamento de doenças infecciosas e dos sistemas ósteo-articular, cardio-respiratório e digestório.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR507'],
			color: '#A2B946',
			obligatory: true
		},
		'FR609': {
			code: 'FR609',
			name: 'Farmacologia Básica II',
			ementa: 'Esta disciplina aborda a farmacodinâmica e a farmacocinética das principais classes de drogas que agem no sistema nervoso central (anticonvulsivantes, drogas de abuso, anti-psicóticos, ansiolíticos, anti-parkinsonianos) e no trato gastrointestinal. Também são abordados os principais fármacos contraceptivos, anti-bacterianos, anti-virais, anti-neoplásicos e anti-inflamatórios. É dado foco também para os efeitos colaterais, interações medicamentosas características farmacocinéticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR608'],
			color: '#9346B9',
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
			color: '#93B946',
			obligatory: true
		},
		'FR703': {
			code: 'FR703',
			name: 'Operações Unitárias para Ciências Farmacêuticas',
			ementa: 'Introdução a operações unitárias e princípios físicos regentes. Introdução ao processo farmacêutico e seus parâmetros de controle/qualidade. Conceito, equipamento e aplicação das operações unitárias de secagem, separação, modificação de tamanho de partículas, misturas e esterilização.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_107', 'MS380'],
			color: '#8046AE',
			obligatory: true
		},
		'FR704': {
			code: 'FR704',
			name: 'Cosmetologia',
			ementa: 'Conceitos teóricos referentes a legislação, avaliação de segurança / eficácia e matérias primas cosméticas. Conceito e prática laboratorial de cosméticos: coloridos, infantis; para celulite e estrias; epilatórios; depilatórios e pós depilação; clareadores e despigmentantes; acne; hidratação cutânea; envelhecimento cutâneo; produtos de higiene; fotoprotetores; desodorantes e antitranspirantes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602'],
			color: '#A2B946',
			obligatory: true
		},
		'FR705': {
			code: 'FR705',
			name: 'Controle de Qualidade de Produtos I',
			ementa: 'Amostragem. Padrões e material de referência certificado. Controle da matéria-prima. Controle físico-químico. Validação de métodos. Ensaios clássicos e instrumentais. Estabilidade físico-química de medicamentos. Requisitos e funcionamento de um sistema de qualidade. Sistemas BPL e ISO.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602', 'FR606'],
			color: '#A1B24E',
			obligatory: true
		},
		'FR706': {
			code: 'FR706',
			name: 'Fitoterapia',
			ementa: 'Legislação brasileira e prescrição de fitoterápicos. Formulações e controle de qualidade. Alimentos com propriedades funcionais ou de saúde. Farmacologia e fitoquímica de fitoterápicos que atuam no sitema nervoso central, sistema cardiovascular, sistema respiratório, sistema digestório e trato genito-urinário. Processo inflamatório e doloroso, imunoestimulantes e adaptógenos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'FR707': {
			code: 'FR707',
			name: 'Química Farmacêutica Aplicada II',
			ementa: 'Química Farmacêutica e Planejamento de fármacos para o tratamento de afecções do sistema nervoso central. Quimioterapia oncológica e antiviral.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR507', 'FR609'],
			color: '#9B8080',
			obligatory: true
		},
		'FR725': {
			code: 'FR725',
			name: 'Biotecnologia',
			ementa: 'Princípios e aplicações da biotecnologia. Ferramentas para a obtenção de DNA recombinante e construção de vetores. Fermentação: Enzimas e microrganismos na obtenção de produtos biotecnológicos. Biorreatores: Imobilização, otimização e escalas. Biossensores. Legislação de Biossegurança.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM415', 'FR605'],
			color: '#9BB946',
			obligatory: true
		},
		'MD191': {
			code: 'MD191',
			name: 'Saúde Pública nas Ciências Farmacêuticas',
			ementa: 'Introdução ao estudo do sistema de saúde brasileiro. Programas e políticas de saúde pública e seus condicionantes sócio-políticos, históricos e econômicos. Visão crítica dos papéis desempenhados por instituições e profissionais da área, seja pela produção do planejamento de saúde no Brasil. Assistência farmacêutica no âmbito do SUS. Noções de Farmacoeconomia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7446B9',
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
			requisitos: ['FR508', 'FR609'],
			color: '#97728E',
			obligatory: true
		},
		'FR805': {
			code: 'FR805',
			name: 'Controle de Qualidade de Produtos II',
			ementa: 'Gerenciamento da qualidade na fabricação de insumos farmacêuticos. Contaminação microbiana de insumos farmacêuticos. Controle do crescimento microbiano. Controle microbiológico de matéria-prima e de produtos acabados. Controle microbiológico de embalagens. Contagem de microrganismos. Agentes químicos conservantes. Testes específicos de controle de identificação de microrganismos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM415', 'BP515'],
			color: '#93B946',
			obligatory: true
		},
		'FR806': {
			code: 'FR806',
			name: 'Farmacoterapia e Interações Medicamentosas',
			ementa: 'Definição e classificação das interações medicamentosas. Interações medicamento-medicamento, medicamento-alimento, medicamento-álcool e outras drogas. Grupos de Risco. Discussão de Casos clínicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR608'],
			color: '#9346B9',
			obligatory: true
		},
		'FR807': {
			code: 'FR807',
			name: 'Tecnologia Farmacêutica',
			ementa: 'Teoria e prática do desenvolvimento e produção industrial de medicamentos: pré-formulação e deformulação; mecanismos de liberação de fármacos, produção de sólidos, líquidos e semissólidos, escalonamento de produção, tecnologia analítica e validação de processos, <em>quality by design</em>, boas práticas de fabricação, garantia de qualidade, política de medicamentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602', 'FR703'],
			color: '#91807A',
			obligatory: true
		},
		'FR808': {
			code: 'FR808',
			name: 'Farmacoepidemiologia',
			ementa: 'Epidemiologia: definições, histórico, usos. População e saúde. Medidas de frequência de doenças. Indicadores de saúde. Vigilância epidemiológica e sanitária. O laboratório de saúde pública e seu papel na vigilância sanitária e epidemiológica. Investigação epidemiológica. Validação e validade de estudos epidemiológicos. Medidas de risco e causalidade. Estudos epidemiológicos experimentais e observacionais. Fármaco-epidemiologia. Estudos sobre a utilização de medicamentos: conceito, métodos, e aplicações. Farmacovigilância: conceito, métodos e aplicações. Farmacovigilância no Brasil e no mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414'],
			color: '#4646B9',
			obligatory: true
		},
		'FR900': {
			code: 'FR900',
			name: 'Estágio Supervisionado em Farmácia',
			ementa: 'Estágio supervisionado por docente do Curso de Farmácia em atividade profissional nas modalidades de: farmácia pública e/ou hospitalar, assistência farmacêutica, controle de qualidade de medicamentos, administração e economia, legislação, deontologia, dispensação e atendimento ao público. Seleção, aquisição, distribuição e uso de medicamentos em farmácias públicas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:8, D:0, HS:10, SL:0, C:10},
			requisitos: ['AA455'],
			color: '#74B946',
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
			vector: {T:0, P:2, L:0, O:25, D:0, HS:27, SL:0, C:27},
			requisitos: ['AA200'],
			color: '#B1B946',
			obligatory: true
		},
		'FR904': {
			code: 'FR904',
			name: 'Atividades Complementares',
			ementa: 'Participação em atividades complementares ao ensino e aprendizado (Palestras, cursos, congressos, iniciação científica, atividades de monitoria, atividades no centro acadêmico e Empresa Júnior, organização de atividades e eventos na Universidade, atividades sociais, visitas técnicas, e outros).',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: '',
			color: '#B946B1',
			obligatory: true
		},
		'FR902': {
			code: 'FR902',
			name: 'Estágio Supervisionado Profissionalizante II',
			ementa: 'Estágio supervisionado por docente do Curso de Farmácia desenvolvido em estabelecimentos públicos ou privados, legalmente constituídos em atividades complementares ou em continuidade ao do Estágio Supervisionado Profissionalizante I.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:26, D:0, HS:28, SL:0, C:28},
			requisitos: ['AA460'],
			color: '#B94683',
			obligatory: true
		},
		'FR903': {
			code: 'FR903',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Acompanhamento, discussão e avaliação, em conjunto com os respectivos orientadores, da concepção, planejamento, execução, análise e redação de monografia que será apresentada como trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#46B965',
			obligatory: true
		},
		'BS615': {
			code: 'BS615',
			name: 'Cultivo de Células Animais - Aplicações em Ensaios Biológicos',
			ementa: 'Infraestrutura e biossegurança em laboratório de cultura celular. Esterilização e avaliação da eficácia. Meios de cultura e soluções complementares. Cultivo celular primário e de linhagens estabelecidas. Estabelecimento de inóculos e avaliação de viabilidade celular. Protocolos de descontaminação de culturas. Medidas de crescimento populacional. Criopreservação; imortalização. Caracterização de linhagens. Princípios, aplicações e técnicas de bioensaios em cultivo celular. Considerações teóricas sobre transformação celular e neoplasias, células tronco, terapia celular e medicina regenerativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA430'],
			color: '#B94693',
			obligatory: false
		},
		'BT925': {
			code: 'BT925',
			name: 'Etnobotânica de Plantas de Interesse Farmacêutico',
			ementa: 'Conceituação, aspectos botânicos, diversidade biológica, distribuição geográfica, importância econômica, uso popular e etnobotânica de plantas medicinais e de interesse farmacêutico. Histórico da Etnobotânica em diferentes culturas. Metodologia de coleta e registros das informações etnobotânicas. Identificação botânica. Aspectos éticos e legais do direito de propriedade intelectual adquirida. Contexto integrado em conservação e usos de recursos genéticos. Valor medicinal e socioeconômico de espécies nativas e exóticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BT315'],
			color: '#46B993',
			obligatory: false
		},
		'BV915': {
			code: 'BV915',
			name: 'Metabolismo Vegetal e Produção de Fitofármacos',
			ementa: 'Propagação e domesticação de plantas. Manutenção da biodiversidade. Fatores ambientais e crescimento das plantas. Fotossíntese. Respiração. Hormônios vegetais. Biossíntese e metabolismo secundário: fenil-propanoides, terpenoides, alcaloides. Manipulação genética. Biofábrica. Extração, análise e bioatividade de fitoderivados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B974',
			obligatory: false
		},
		'EI---': {
			code: 'EI---',
			name: 'Qualquer Disciplina com codigo EI---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EI---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4674B9',
			obligatory: false
		},
		'FR006': {
			code: 'FR006',
			name: 'Estudo de Biodisponibilidade e Bioquivalência de Medicamentos',
			ementa: 'Etapa clínico-histórica: novos medicamentos, biodisponibilidade e bioequivalência, estudos clínicos, aspectos de segurança. Administração do medicamento, coleta de material biológico, manuseio de amostras biológicas, documentação, responsabilidades. Etapa analítica: fundamentação teórica e método bioanalítico. Etapa estatística: métodos estatísticos em bioequivalência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4683B9',
			obligatory: false
		},
		'FR009': {
			code: 'FR009',
			name: 'Biotecnologia Microbiana na Indústria Farmacêutica',
			ementa: 'Compostos farmacologicamente ativos de origem microbiana e suas aplicações em medicina humana e veterinária, assim como na agricultura. Antibióticos, compostos antitumorais, moduladores de resposta imunológica e anti-inflamatórios, entre outros. Biodiversidade microbiana e estratégias de bioprospecção. Isolamento seletivo e caracterização preliminar de bactérias, fungos e leveduras. Bioensaios para detecção de atividade. Preservação e coleções de microrganismos. Utilização de microrganismos como biorreatores. Patentes e proteção de propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR725'],
			color: '#9BB946',
			obligatory: false
		},
		'FR014': {
			code: 'FR014',
			name: 'Tecnologia de Produção de Plantas Medicinais',
			ementa: 'A formação da planta medicinal. Biodiversidade - trajetória, produtos e interações. Sistemas produtivos: extrativismo, manejo, cultivo orgânico e permacultura. Acesso legal à biodiversidade. Bancos de germoplasma. Produção sustentável de drogas vegetais. Estudos de casos: processos de seleção e de domesticação de espécies nativas. Meio ambiente e controle dos processos produtivos e de pós-colheita.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B9B146',
			obligatory: false
		},
		'FR018': {
			code: 'FR018',
			name: 'Empreendedorismo',
			ementa: 'O empreendedorismo será abordado com aulas dedicadas a plano de negócios, incubadoras e propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94674',
			obligatory: false
		},
		'FR021': {
			code: 'FR021',
			name: 'Farmacologia Quantitativa',
			ementa: 'Aspectos quantitativos da farmacologia usados no estudo e caracterização de drogas e de novos medicamentos. Conceitos básicos de interação droga-receptor, como curvas dose-resposta, agonistas e antagonistas, atividade intrínseca, eficácia, reserva de receptores, sinergismo, taquifilaxia, desensibilização, tipos de antagonismo. Modelos teóricos. Serão discutidos os métodos utilizados na determinação de parâmetros tais como DE50, CI50, KD, pA2, e na quantificação e classificação de receptores. Também será discutido o uso de modelos teóricos no desenvolvimento de novos medicamentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#65B946',
			obligatory: false
		},
		'FR022': {
			code: 'FR022',
			name: 'Farmacologia Clínica e Terapêutica',
			ementa: 'Esta disciplina introduzirá o aluno a estudos clínicos e terapêuticos onde serão discutidos os seguintes tópicos: o que é um estudo clínico, tipos de estudos clínicos, delineamento de um estudo clínico, os aspectos éticos envolvidos nestes estudos (incluindo a legislação vigente), a escolha de voluntários, conflito de interesse e interpretação de dados dentre outros.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B98346',
			obligatory: false
		},
		'FR026': {
			code: 'FR026',
			name: 'Seminários Gerais',
			ementa: 'Tópicos avançados de integração entre Química, Biologia e Medicina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A246',
			obligatory: false
		},
		'FR035': {
			code: 'FR035',
			name: 'Farmácia Homeopática',
			ementa: 'A disciplina Farmácia Homeopática visa transmitir aos alunos os fundamentos que alicerçam a terapêutica homeopática e as técnicas a serem aplicadas no desempenho das atividades na Farmácia Homeopática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR602'],
			color: '#A2B946',
			obligatory: false
		},
		'FR037': {
			code: 'FR037',
			name: 'Planejamento Estratégico de Carreira',
			ementa: 'Elementos para currículos, carta de apresentação, pesquisa sobre empresa, marketing pessoal, entrevistas, dinâmicas de grupo, gerenciamento de carreira, novo emprego e progresso na carreira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9B1',
			obligatory: false
		},
		'FR038': {
			code: 'FR038',
			name: 'Radiofarmácia',
			ementa: 'A disciplina Radiofarmácia visa transmitir aos alunos os fundamentos e as técnicas envolvidas na produção e aplicação clínica e diagnóstica de radiofármacos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6546B9',
			obligatory: false
		},
		'FR039': {
			code: 'FR039',
			name: 'Tópicos Especiais em Ciências Farmacêuticas I',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: false
		},
		'FR040': {
			code: 'FR040',
			name: 'Tópicos Especiais em Ciências Farmacêuticas II',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A246B9',
			obligatory: false
		},
		'FR041': {
			code: 'FR041',
			name: 'Tópicos Especiais em Ciências Farmacêuticas III',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46A2B9',
			obligatory: false
		},
		'FR042': {
			code: 'FR042',
			name: 'Tópicos Especiais em Ciências Farmacêuticas IV',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4655B9',
			obligatory: false
		},
		'FR043': {
			code: 'FR043',
			name: 'Tópicos Especiais em Ciências Farmacêuticas V',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#5546B9',
			obligatory: false
		},
		'FR044': {
			code: 'FR044',
			name: 'Ferramentas de Estudo de Bioprocessos',
			ementa: 'Estudo de caso: escolha de um produto do metabolismo microbiano de interesse para a indústria. Estudo e compreensão do processo de forma global. Planejamento experimental para o desenvolvimento e otimização de produção.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR725'],
			color: '#9BB946',
			obligatory: false
		},
		'FR046': {
			code: 'FR046',
			name: 'Farmácia Clínica I',
			ementa: 'Farmácia Clínica: histórico, conceitos e perspectivas. Utilização racional de medicamentos, seleção de tratamentos de eleição e alternativos: critérios. Fontes de informação sobre medicamentos (Bases de dados para pesquisa sobre medicamentos – medicina baseada em evidências). Pesquisa sobre interações medicamentosas e possíveis efeitos adversos. Perfil farmacoterapêutico de pacientes. Estudo de guideliness e Diretrizes em ambiente ambulatorial e hospitalar. Manejo e Monitorização farmacoterapêutica de indivíduos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR603'],
			color: '#80807C',
			obligatory: false
		},
		'FR047': {
			code: 'FR047',
			name: 'Métodos Modernos Aplicados à Análise de Medicamentos',
			ementa: 'Avanços recentes na análise de insumos farmacêuticos e medicamentos e estudos de pré-formulação e estabilidade por métodos de separação por cromatografia e eletroforese, análise térmica e métodos espectrométricos e espectroscópicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR508'],
			color: '#9B9D63',
			obligatory: false
		},
		'FR048': {
			code: 'FR048',
			name: 'Farmácia Clínica II',
			ementa: 'Perfil e acompanhamento farmacoterapêutico de pacientes internados e ambulatoriais. Manejo e Monitorização farmacoterapêutica de indivíduos. Intervenções farmacêuticas Farmacêutico-Médico-Paciente. Aplicar os conhecimentos teóricos em ambiente de aprendizado real e prático. Trabalhar em equipe multiprofissional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR046'],
			color: '#80807C',
			obligatory: false
		},
		'FR050': {
			code: 'FR050',
			name: 'Farmacogenética e Farmacogenômica',
			ementa: 'Base Genética de resposta e de eventos adversos aos medicamentos, epigenética, modelos experimentais em farmacogenômica, proteômica, técnicas utilizadas, estudo da medicina personalizada.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR509', 'FR605'],
			color: '#9B8080',
			obligatory: false
		},
		'FR325': {
			code: 'FR325',
			name: 'Iniciação Científica em Ciências Farmacêuticas I',
			ementa: 'Estágio supervisionado a ser cumprido por aluno do curso de Farmácia em laboratório de pesquisa biológica, química ou médica da Unicamp.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#B96546',
			obligatory: false
		},
		'FR326': {
			code: 'FR326',
			name: 'Iniciação Científica em Ciências Farmacêuticas II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Farmácia em laboratórios de pesquisa biológica, química ou médica da Unicamp.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#46B955',
			obligatory: false
		},
		'MD182': {
			code: 'MD182',
			name: 'Líquidos Biológicos',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em urinálise, derrames cavitários, líquido cefaloraquidiano, sinovial e seminal. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#4665B9',
			obligatory: false
		},
		'MD183': {
			code: 'MD183',
			name: 'Bioquímica Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em bioquímica clínica e toxicologia. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200', 'BB315'],
			color: '#A2B946',
			obligatory: false
		},
		'MD187': {
			code: 'MD187',
			name: 'Fisiologia Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames para avaliação funcional de glândulas endócrinas e para determinação de marcadores tumoriais séricos. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B146B9',
			obligatory: false
		},
		'MD188': {
			code: 'MD188',
			name: 'Hematologia Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em hematologia clínica. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94665',
			obligatory: false
		},
		'MD189': {
			code: 'MD189',
			name: 'Microbiologia Clínica',
			ementa: 'Preparação de meios de cultura e reagentes. Coleta de espécimes clínicos para exames microbiológicos. Avaliação pré-analítica, realização e interpretação de exames de rotina de pequena, média e alta complexidades em Microbiologia Clínica, cumpridas as normas setoriais de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		},
		'MD190': {
			code: 'MD190',
			name: 'Imunologia e Parasitologia Clínicas',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em imunologia e parasitologia clínicas. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#83B946',
			obligatory: false
		},
		'QI445': {
			code: 'QI445',
			name: 'Introdução à Espectroscopia Vibracional',
			ementa: 'Fundamentos de espectroscopia vibracional e interpretação de espectros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI246'],
			color: '#A2B946',
			obligatory: false
		},
		'QO423': {
			code: 'QO423',
			name: 'Fundamentos da Espectrometria de Massas',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações de espectrometria de massas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO321'],
			color: '#A2B946',
			obligatory: false
		},
		'QO424': {
			code: 'QO424',
			name: 'Fundamentos em Espectroscopia e Ressonância Magnética Nuclear',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações da Espectroscopia de Ressonância Magnética Nuclear.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO321'],
			color: '#A2B946',
			obligatory: false
		}
	}
};

export default catalogue;
