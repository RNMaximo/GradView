const catalogue = {
	totalCredits: 288,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BS115', 'F_107', 'FR102', 'FR103', 'FR104', 'FR105', 'FR106', 'MS380', 'QG108', 'QG109']
		},
		'sem-2': {
			id: '2',
			subjects: ['BS215', 'FR202', 'FR205', 'FR206', 'FR207', 'QI246', 'QO321']
		},
		'sem-3': {
			id: '3',
			subjects: ['BI315', 'BT315', 'FR302', 'FR305', 'FR306', 'FR307', 'QF331', 'QO421']
		},
		'sem-4': {
			id: '4',
			subjects: ['BB315', 'BM415', 'FR402', 'FR404', 'ME414', 'QA218']
		},
		'sem-5': {
			id: '5',
			subjects: ['BP515', 'FR502', 'FR507', 'FR508', 'FR511', 'FR512', 'QO623']
		},
		'sem-6': {
			id: '6',
			subjects: ['FR604', 'FR610', 'FR611', 'FR612', 'FR613', 'FR614', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['FR704', 'FR706', 'FR708', 'FR709', 'FR710', 'FR711', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['FR806', 'FR809', 'FR810', 'FR811', 'FR812', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['FR901', 'FR904', 'FR905']
		},
		'sem-10': {
			id: '10',
			subjects: ['FR902', 'FR906']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['BS615', 'BT925', 'BV915', 'EI---', 'FR006', 'FR009', 'FR014', 'FR015', 'FR018', 'FR021', 'FR022', 'FR026', 'FR035', 'FR037', 'FR038', 'FR039', 'FR040', 'FR041', 'FR042', 'FR043', 'FR044', 'FR046', 'FR047', 'FR048', 'FR050', 'FR325', 'FR326', 'MD182', 'MD183', 'MD187', 'MD188', 'MD189', 'MD190', 'QI445', 'QO423', 'QO424', 'QO721'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'BS115': {
			code: 'BS115',
			name: 'Estrutura e Função de Células e Tecidos',
			ementa: 'Aspectos estruturais e funcionais de moléculas, células e tecidos fundamentais. Métodos de estudo de células, das diferentes organelas celulares, sua estrutura e função. Interações celulares e transporte intracelular. Principais tecidos humanos e sua organização. Introdução à Embriologia.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40ADD9',
			obligatory: true
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94062',
			obligatory: true
		},
		'FR102': {
			code: 'FR102',
			name: 'Boas Práticas de Laboratório e Gestão de Resíduos',
			ementa: 'Segurança nas práticas do exercício de atividades de cunho químico ou biológico e boas práticas em laboratórios de pesquisa e de desenvolvimento tecnológico-farmacêutico. Familiarização com produtos, materiais, equipamentos, procedimentos e hábitos seguros para a prevenção, minimização e eliminação de riscos inerentes às atividades nestes ambientes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5DD940',
			obligatory: true
		},
		'FR103': {
			code: 'FR103',
			name: 'Introdução à Profissão Farmacêutica',
			ementa: 'Resumo histórico da Farmácia no Brasil. As diretrizes curriculares dos cursos de Graduação em Farmácia e o perfil profissional do farmacêutico. Âmbito profissional. Novas perspectivas profissionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7FD940',
			obligatory: true
		},
		'FR104': {
			code: 'FR104',
			name: 'Ética e Bioética',
			ementa: 'Conceitos e suas articulações na sociedade com foco os direitos humanos, a sociedade brasileira e o contexto internacional. Bioética. Pesquisa envolvendo seres humanos e animais. Comissão Nacional de Ética em Pesquisa (CONEPE) e Comitês de Ética em Pesquisa. Reflexão sobre os aspectos éticos envolvidos nas questões relativas a privacidade e confidencialidade, problemas de início e final de vida, alocação de recursos escassos, respeito à pessoa e tomada de decisão e pesquisa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940CA',
			obligatory: true
		},
		'FR105': {
			code: 'FR105',
			name: 'Saúde Pública nas Ciências Farmacêuticas',
			ementa: 'Saúde como direito, direito à saúde. Reforma sanitária brasileira. Sistema Único de Saúde (SUS). Atenção básica. Política de assistência farmacêutica. Propriedade intelectual e insumos estratégicos. Iniquidades e determinantes sociais em saúde. Estado de bem-estar social. Sistemas de saúde comparados. Profissionais da saúde e humanização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94051',
			obligatory: true
		},
		'FR106': {
			code: 'FR106',
			name: 'Metodologia e Informação Científica',
			ementa: 'Compreender o papel da ciência e do cientista na sociedade. A construção do conhecimento científico: juízos de realidade e de valor, o método científico, paradigmas da ciência, influência da atividade do cientista na sociedade. O trabalho científico: resumo e apresentação em congressos, simpósios e eventos similares. Os tipos de monografias científicas: para graduação e especialização (monografia), para Mestrado (dissertação) e para Doutorado (tese). Relatórios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940A8',
			obligatory: true
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5D40D9',
			obligatory: true
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9140D9',
			obligatory: true
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4046D9',
			obligatory: true
		},
		'BS215': {
			code: 'BS215',
			name: 'Estrutura e Função de Órgãos e Sistemas',
			ementa: 'Abordagem da estrutura e função de órgãos e sistemas em humanos, em um enfoque transdisciplinar, integrando conceitos fundamentais de anatomia, histologia e fisiologia.',
			semestre: 1,
			vector: {T:6, P:0, L:6, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['*BS115'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR202': {
			code: 'FR202',
			name: 'Estágio em Assistência Farmacêutica na Atenção Básica',
			ementa: 'Atenção Primária à Saúde e Estratégia de Saúde da Família (ESF). Controle social na atenção básica. Organização da atenção básica no Sistema Único de Saúde (SUS). Linhas de cuidados em doenças crônicas e projeto terapêutico singular. Programas na atenção básica: tabagismo, tuberculose, hanseníase, hipertensão e diabetes. Componente básico da assistência farmacêutica. Componente estratégico da assistência farmacêutica. Processo saúde-doença-cuidado no território. Agentes comunitários de saúde e visita domiciliar. Assistência Farmacêutica na Atenção Básica. Atenção Farmacêutica na ESF. Cuidado farmacêutico na atenção básica',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#40D979',
			obligatory: true
		},
		'FR205': {
			code: 'FR205',
			name: 'Princípios de Farmacocinética',
			ementa: 'Conceitos fundamentais de Farmacocinética de medicamentos (absorção, distribuição, metabolização e excreção). Farmacodinâmica: princípios básicos da interação fármaco receptor e sinalização intracelular.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C5D940',
			obligatory: true
		},
		'FR206': {
			code: 'FR206',
			name: 'Assistência e Atenção Farmacêutica',
			ementa: 'Atenção Farmacêutica: objetivos, organização e estratégias para a promoção do uso racional de medicamentos. Problemas Relacionados a Medicamentos (PRM). Dispensação com ou sem receita (medicamentos isentos de prescrição). Habilidades de comunicação em Atenção Farmacêutica. Planejamento da Atenção Farmacêutica. Metodologias de seguimento/ acompanhamento farmacoterapêutico. Atenção Farmacêutica na atenção básica de saúde.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR103', 'FR104', 'FR105'],
			color: '#BB7374',
			obligatory: true
		},
		'FR207': {
			code: 'FR207',
			name: 'Genética Humana',
			ementa: 'O gene como unidade de herança. Leis de Mendel e tipos de herança gênica. Interações gênicas e estudos de ligação. Estudo do cariótipo humano. Agentes teratogênicos. Erros Inatos do metabolismo. Noções de genética quantitativa e evolução.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94085',
			obligatory: true
		},
		'QI246': {
			code: 'QI246',
			name: 'Química Inorgânica',
			ementa: 'Acidez e basicidade de Lewis: conceitos de dureza e moleza; química de coordenação e de organometálicos de metais de transição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#9140D9',
			obligatory: true
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#9140D9',
			obligatory: true
		},
		'BI315': {
			code: 'BI315',
			name: 'Imunologia',
			ementa: 'Resposta imune inata e adaptativa. Órgãos e células envolvidas na resposta imune. Imunopatologias. Imunoprofilaxia. Diagnóstico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS115'],
			color: '#40ADD9',
			obligatory: true
		},
		'BT315': {
			code: 'BT315',
			name: 'Farmacobotânica',
			ementa: 'Morfologia externa de plantas vasculares.Tipos celulares e tecidos vegetais. Fundamentos de taxonomia e sistemática vegetal. Estudos biossistemáticos para identificação de táxons. Principais grupos taxonômicos, com enfoque em plantas medicinais. Análises farmacopéicas. Importância de estudos botânicos para a pesquisa de produtos naturais.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B340D9',
			obligatory: true
		},
		'FR302': {
			code: 'FR302',
			name: 'Gestão Farmacêutica',
			ementa: 'Princípios de economia e administração na área da saúde. Liderança e criatividade no ramo farmacêutico. Organização de empresas farmacêuticas. Aspectos administrativos nas áreas operacional, financeira, mercadológica e de recursos humanos de empresas farmacêuticas. Leis trabalhistas e finanças pessoais. Farmacoeconomia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D957',
			obligatory: true
		},
		'FR305': {
			code: 'FR305',
			name: 'Deontologia e Legislação Farmacêutica',
			ementa: 'O Código de Ética da profissão farmacêutica. Legislação farmacêutica. Leis que regulamentam o exercício profissional do farmacêutico. Conselho Federal e Conselhos Regionais de Farmácia. As responsabilidades do profissional farmacêutico. Exemplos de má prática. Simulação de julgamento pelo CRF. Agência Nacional de Vigilância Sanitária (ANVISA) e Centros de Vigilância Sanitárias Estaduais e Municipais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D946',
			obligatory: true
		},
		'FR306': {
			code: 'FR306',
			name: 'Farmacologia',
			ementa: 'Farmacologia do sistema nervoso periférico, do sistema cardiovascular e do sistema nervoso central. (1) Sistema nervoso periférico: Conceitos da transmissão autonômica e somática. Farmacologia da transmissão adrenérgica e muscarínica. Farmacologia da junção neuromuscular, de bloqueadores neuromusculares e de anticolinesterásicos. Anestésicos locais. (2) Sistema cardiovascular: Princípios do controle da pressão arterial. Farmacologia dos principais grupos de fármacos anti-hipertensivas (antagonistas adrenérgicos, do sistema renina angiotensina e de canais de cálcio; diuréticos; óxido nítrico e antianginosos). Tratamento farmacológico da insuficiência cardíaca, de deficiências no metabolismo de lipoproteínas e metabolismo glicídico. Farmacologia da coagulação sanguínea e do processo inflamatório, incluindo asma e artrite reumatoide. (3) Sistema nervoso central (SNC): Farmacologia das principais classes de drogas que modulam distúrbios no SNC (ansiolíticos/hipnóticos, antidepressivos, anticonvulsivantes, antipsicóticos, anti-parkinsonianos) e das substâncias usadas no tratamento da dor, além de inibidores de apetite de ação central e drogas de abuso. Farmacologia dos antibióticos e antivirais. Para os diferentes grupos haverá discussão das características farmacocinéticas e farmacodinâmicas, dos usos clínicos e dos eventuais efeitos adversos e interações medicamentosas.',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['FR205'],
			color: '#C5D940',
			obligatory: true
		},
		'FR307': {
			code: 'FR307',
			name: 'Estágio em Farmácia',
			ementa: 'Gestão e administração da farmácia. Ciclo da assistência farmacêutica no estabelecimento. Armazenamento e controle de estoque. Conferência e avaliação técnica e legal das prescrições. Dispensação e orientação ao usuário. Boas Práticas Farmacêuticas. Controle de antimicrobianos. Controle de medicamentos e substâncias sujeitos a controle especial (Portaria SVS/MS 344/1998). Gerenciamento de resíduos em farmácia. Prática em farmácia: atendimento farmacêutico, aplicação de injetáveis, aferição de parâmetros fisiológicos e bioquímicos, perfuração de lóbulo auricular, fracionamento de medicamentos. Procedimento Operacional Padrão (POP) e Manual de Boas Práticas Farmacêuticas. Farmacovigilância. Para farmácias com manipulação: Boas Práticas de Manipulação. Manipulação e controle de qualidade de produtos manipulados.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['FR104', 'FR105', 'FR206'],
			color: '#CF5185',
			obligatory: true
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gás real, energia livre de Gibbs, equilíbrios físico e químico, diagrama de fases, cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380', 'QG108'],
			color: '#7740D9',
			obligatory: true
		},
		'QO421': {
			code: 'QO421',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos. Derivados dos ácidos carboxílicos. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático. Substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO321'],
			color: '#9140D9',
			obligatory: true
		},
		'BB315': {
			code: 'BB315',
			name: 'Bioquímica',
			ementa: 'Estrutura e função de proteínas. Cinética e regulação enzimática. Metabolismo de carboidratos, lipídeos e proteínas. Regulação hormonal do metabolismo. Aspectos farmacológicos do metabolismo de lipídeos, carboidratos e proteínas. Integração do metabolismo.',
			semestre: 1,
			vector: {T:3, P:2, L:3, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['*QO321'],
			color: '#9140D9',
			obligatory: true
		},
		'BM415': {
			code: 'BM415',
			name: 'Microbiologia',
			ementa: 'Estrutura e função das células procarióticas. Características gerais dos vírus e fungos. Classificação, crescimento e morte dos micro-organismos. Genética bacteriana. Microbiota. Mecanismos de patogenicidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BI315', 'BS115'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR402': {
			code: 'FR402',
			name: 'Tecnologia Farmacêutica I',
			ementa: 'Introdução aos conceitos farmacotécnicos e às formas farmacêuticas convencionais para veiculação de medicamentos; desenvolvimento, produção e controle magistral e industrial de ingredientes farmacêuticos.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR205', 'FR307', 'QF331'],
			color: '#AE798A',
			obligatory: true
		},
		'FR404': {
			code: 'FR404',
			name: 'Estágio em Farmácia Hospitalar',
			ementa: 'Estrutura organizacional e funcional dos hospitais. Ciclo da assistência farmacêutica em ambientes hospitalares: seleção, programação, aquisição, armazenamento, distribuição e dispensação. Sistema de distribuição de medicamentos por dose unitária. Manipulação de medicamentos estéreis e não estéreis. Nutrição parenteral. Farmácia oncológica. Comissões multidisciplinares de apoio ao uso racional de medicamentos.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:3, D:0, HS:6, SL:0, C:6},
			requisitos: ['FR104', 'FR105', 'FR206'],
			color: '#CF5185',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: '#5D40D9',
			obligatory: true
		},
		'QA218': {
			code: 'QA218',
			name: 'Química Analítica',
			ementa: 'Equilíbrio Químico. Equilíbrio ácido-base. Equilíbrio de solubilidade. Equilíbrio de complexação. Equilíbrio de óxido-redução. Análise qualitativa e quantitativa. Gravimetria. Volumetria. Expressão de resultados analíticos.',
			semestre: 1,
			vector: {T:2, P:1, L:3, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QG109'],
			color: '#4046D9',
			obligatory: true
		},
		'BP515': {
			code: 'BP515',
			name: 'Parasitologia',
			ementa: 'Estudo de protozoários, artrópodes e helmintos parasitas de interesse humano: ciclo de vida, transmissão, epidemiologia, diagnóstico, patogenia, tratamento e profilaxia. Estudo dos principais vetores de doenças parasitárias humanas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS115'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR502': {
			code: 'FR502',
			name: 'Epidemiologia para Ciências Farmacêuticas',
			ementa: 'Epidemiologia: definições, histórico, usos. População e saúde. Medidas de frequência de doenças. Indicadores de saúde. Vigilância epidemiológica e sanitária. O laboratório de saúde pública e seu papel na vigilância sanitária e epidemiológica. Investigação epidemiológica. Validação e validade de estudos epidemiológicos. Medidas de risco e causalidade. Estudos epidemiológicos experimentais e observacionais. Fármaco-epidemiologia. Estudos sobre a utilização de medicamentos: conceito, métodos, e aplicações. Farmacovigilância: conceito, métodos e aplicações. Farmacovigilância no Brasil e no mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414'],
			color: '#5D40D9',
			obligatory: true
		},
		'FR507': {
			code: 'FR507',
			name: 'Introdução à Química Farmacêutica',
			ementa: 'Aspectos gerais sobre fármacos e medicamentos. Bases moleculares da ação dos fármacos e biotransformação e latenciação. Descoberta e planejamento racional. Estereoquímica e análise conformacional. Noções de QSAR e modelagem molecular.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QO421'],
			color: '#9140D9',
			obligatory: true
		},
		'FR508': {
			code: 'FR508',
			name: 'Análise Instrumental',
			ementa: 'Técnicas de preparação de amostra. Princípios de cromatografia e introdução às técnicas clássicas de cromatografia. Fundamentos de ultravioleta-visível (UV/VIS). Fundamentos de infravermelho (IV). Fundamentos de ressonância magnética nuclear (RMN). Fundamentos de espectrometria de massas (EM).',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QA218', 'QO421'],
			color: '#6943D9',
			obligatory: true
		},
		'FR511': {
			code: 'FR511',
			name: 'Bromatologia',
			ementa: 'Introdução a bromatologia. Princípios em tecnologia de alimentos. Tecnologia dos alimentos ricos em carboidratos, alimentos gordurosos, alimentos protéicos. Alteração dos alimentos. Constituintes, composição centesimal e valor nutritivo dos alimentos. Minerais em alimentos. Aditivos e contaminantes em alimentos. Legislação bromatológica. Boas práticas higiênico-sanitárias.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB315'],
			color: '#9140D9',
			obligatory: true
		},
		'FR512': {
			code: 'FR512',
			name: 'Biologia Molecular',
			ementa: 'Características e propriedades do DNA, base molecular da mutação e recombinação, código genético (transcrição e tradução), noções de tecnologia do DNA recombinante, controle da expressão gênica em procariotos e eucariotos, elementos de transposição, mecanismos de recombinação em microrganismos e noções sobre biologia do desenvolvimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BB315', 'FR306'],
			color: '#AB8D8D',
			obligatory: true
		},
		'QO623': {
			code: 'QO623',
			name: 'Química Orgânica Experimental',
			ementa: 'Experimentos englobando extração ácido-base, isolamento de produtos naturais, preparação de compostos orgânicos e fármacos, conhecimentos básicos de isolamento, purificação e caracterização de produtos de síntese por meios espectroscópicos tais como infravermelho, ultravioleta, ressonância magnética nuclear e espectrometria de massas. Métodos cromatográficos. Princípios de análise orgânica. Projetos de síntese orgânica e de produtos naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO321'],
			color: '#9140D9',
			obligatory: true
		},
		'FR604': {
			code: 'FR604',
			name: 'Química Farmacêutica Aplicada',
			ementa: 'Química Farmacêutica e planejamento de fármacos para o tratamento de doenças parasitárias e infecciosas causadas por vírus, fungos e bactérias, para a quimioterapia do câncer e para o controle de afecções do sistema nervoso central, hormonal, ósteo-articular, cardiorrespiratório e digestório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR507'],
			color: '#9140D9',
			obligatory: true
		},
		'FR610': {
			code: 'FR610',
			name: 'Laboratório Clínico I',
			ementa: 'Aspectos teóricos sobre organização e metodologias desenvolvidas nas áreas de Bioquímica, Hematologia, Microbiologia e Parasitologia do Laboratório de Patologia Clínica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM415', 'BP515', 'BS215'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR611': {
			code: 'FR611',
			name: 'Estágio Supervisionado em Laboratório Clínico I',
			ementa: 'Estágio supervisionado em laboratório de análises clínicas nas áreas de Coleta e Recepção de exames, Bioquímica Clínica, Urinálises, Hematologia Laboratorial, Microbiologia e Parasitologia Clínicas.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:3, D:0, HS:6, SL:0, C:6},
			requisitos: ['BM415', 'BP515', 'BS215'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR612': {
			code: 'FR612',
			name: 'Tecnologia Farmacêutica II',
			ementa: 'Desenvolvimento, produção e controle magistral e industrial de formas farmacêuticas sólidas.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR402'],
			color: '#AE798A',
			obligatory: true
		},
		'FR613': {
			code: 'FR613',
			name: 'Tecnologia Farmacêutica III',
			ementa: 'Desenvolvimento, produção e controle magistral e industrial de formas farmacêuticas líquidas e semissólidas.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR402'],
			color: '#AE798A',
			obligatory: true
		},
		'FR614': {
			code: 'FR614',
			name: 'Farmacognosia',
			ementa: 'Farmacognosia: conceitos e métodos. Extração, identificação e doseamento de princípios ativos naturais e estudo de plantas medicinais e drogas vegetais contendo os principais metabólitos de interesse farmacêutico: terpenos, óleos essenciais e fixos, resinas, alcalóides, taninos, heterosídeos (flavonóides, antraderivados, cardiotônicos, saponinas). Conceituação, identificação e legislação de fitoterápicos. Estudo de príncipios ativos de origem vegetal e sua utillização como matéria prima de medicamentos e cosméticos.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BB315', 'BT315', 'FR508', '*QO623'],
			color: '#9041D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#4057D9',
			obligatory: true
		},
		'FR704': {
			code: 'FR704',
			name: 'Cosmetologia',
			ementa: 'Conceitos teóricos referentes a legislação, avaliação de segurança / eficácia e matérias primas cosméticas. Conceito e prática laboratorial de cosméticos: coloridos, infantis; para celulite e estrias; epilatórios; depilatórios e pós depilação; clareadores e despigmentantes; acne; hidratação cutânea; envelhecimento cutâneo; produtos de higiene; fotoprotetores; desodorantes e antitranspirantes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR402', 'FR612'],
			color: '#AE798A',
			obligatory: true
		},
		'FR706': {
			code: 'FR706',
			name: 'Fitoterapia',
			ementa: 'Legislação brasileira e prescrição de fitoterápicos. Formulações e controle de qualidade. Alimentos com propriedades funcionais ou de saúde. Farmacologia e fitoquímica de fitoterápicos que atuam no sitema nervoso central, sistema cardiovascular, sistema respiratório, sistema digestório e trato genito-urinário. Processo inflamatório e doloroso, imunoestimulantes e adaptógenos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR306', 'FR614'],
			color: '#AB8D8D',
			obligatory: true
		},
		'FR708': {
			code: 'FR708',
			name: 'Toxicologia',
			ementa: 'História da toxicologia, epidemiologia das intoxicações, conceitos gerais em toxicologia, toxicocinética, toxicodinâmica, avaliação de toxicidade, avaliação de risco, toxicologia de medicamentos, toxinologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['FR306', 'FR508'],
			color: '#978E8D',
			obligatory: true
		},
		'FR709': {
			code: 'FR709',
			name: 'Controle de Qualidade Biológico',
			ementa: 'Gerenciamento da qualidade na fabricação de insumos farmacêuticos. Contaminação microbiana de insumos farmacêuticos. Controle do crescimento microbiano. Controle microbiológico de matéria-prima e de produtos acabados. Controle microbiológico de embalagens. Contagem de microrganismos. Agentes químicos conservantes. Testes específicos de controle de identificação de microrganismos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM415'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR710': {
			code: 'FR710',
			name: 'Laboratório Clínico II',
			ementa: 'Aspectos teóricos sobre organização e metodologias desenvolvidas nas áreas de Fisiologia, Líquidos Biológicos e Imunologia do Laboratório de Patologia Clínica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR610'],
			color: '#40ADD9',
			obligatory: true
		},
		'FR711': {
			code: 'FR711',
			name: 'Estágio Supervisionado em Laboratório Clínico II',
			ementa: ': Estágio supervisionado em Laboratório de Análises Clínicas nas áreas de Líquidos Biológicos (líquor e derrames cavitários), Imunologia e Fisiologia Clínica (hormônios e marcadores tumorais)',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:3, D:0, HS:6, SL:0, C:6},
			requisitos: ['FR610', 'FR611'],
			color: '#40ADD9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D94096',
			obligatory: true
		},
		'FR806': {
			code: 'FR806',
			name: 'Farmacoterapia e Interações Medicamentosas',
			ementa: 'Definição e classificação das interações medicamentosas. Interações medicamento-medicamento, medicamento-alimento, medicamento-álcool e outras drogas. Grupos de Risco. Discussão de Casos clínicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR306'],
			color: '#C5D940',
			obligatory: true
		},
		'FR809': {
			code: 'FR809',
			name: 'Análises Toxicológicas',
			ementa: 'Toxicologia de alimentos, toxicologia ocupacional, toxicologia ambiental, toxicologia social, toxicologia forense. Análises toxicológicas, fluidos biológicos utilizados em análises toxicológicas, técnicas de preparo de amostras, técnicas analíticas utilizadas em análises toxicológicas, validação de métodos em análises toxiocológicas.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR708'],
			color: '#978E8D',
			obligatory: true
		},
		'FR810': {
			code: 'FR810',
			name: 'Biotecnologia',
			ementa: 'Princípios e aplicações da biotecnologia. Ferramentas para a obtenção de DNA recombinante e construção de vetores. Fermentação: Enzimas e microrganismos na obtenção de produtos biotecnológicos. Biorreatores: Imobilização, otimização e escalas. Biossensores. Legislação de Biossegurança.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BM415', 'FR512'],
			color: '#769DB3',
			obligatory: true
		},
		'FR811': {
			code: 'FR811',
			name: 'Tecnologia Farmacêutica IV',
			ementa: 'Desenvolvimento, produção e controle magistral e industrial de formas farmacêuticas líquidas e semissólidas.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR612', 'FR613'],
			color: '#AE798A',
			obligatory: true
		},
		'FR812': {
			code: 'FR812',
			name: 'Cuidado Farmacêutico',
			ementa: 'Definição e caracterização do cuidado farmacêutico. Estudo das características étnico raciais, religiosas, culturais e sócio-econômicas da população. Dispensação, prescrição e seguimento farmacoterapêutico. Estudo dos PRMs (problemas relacionados ao medicamento). Avaliação de parâmetros biológicos e sinais vitais. Uso adequado de formas farmacêuticas complexas (insulinas e dispositivos inalatórios). Estudo da farmacoterapia racional. Discute sobre a influência de fatores individuais na terapia. Avalia histórico de doenças pré-existentes e de sensibilidade a fármacos. Prescrição de MIPs. Simulação realística dos tópicos descritos anteriormente voltados ao cuidado farmacêutico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR105', 'FR206'],
			color: '#CA5A63',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D98540',
			obligatory: true
		},
		'FR901': {
			code: 'FR901',
			name: 'Estágio Supervisionado Profissionalizante I',
			ementa: 'Estágio Supervisionado por docente do Curso de Farmácia desenvolvido em estabelecimentos públicos ou privados, legalmente constituídos em atividades regulamentadas para o profissional farmacêutico.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:13, D:0, HS:15, SL:0, C:15},
			requisitos: ['AA200'],
			color: '#40D0D9',
			obligatory: true
		},
		'FR904': {
			code: 'FR904',
			name: 'Atividades Complementares',
			ementa: 'Participação em atividades complementares ao ensino e aprendizado (Palestras, cursos, congressos, iniciação científica, atividades de monitoria, atividades no centro acadêmico e Empresa Júnior, organização de atividades e eventos na Universidade, atividades sociais, visitas técnicas, e outros).',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:9, D:0, HS:10, SL:0, C:10},
			requisitos: '',
			color: '#7F40D9',
			obligatory: true
		},
		'FR905': {
			code: 'FR905',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Acompanhamento, discussão e avaliação, em conjunto com os respectivos orientadores, da concepção, planejamento, execução, análise e redação de monografia que será apresentada como trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B3D940',
			obligatory: true
		},
		'FR902': {
			code: 'FR902',
			name: 'Estágio Supervisionado Profissionalizante II',
			ementa: 'Estágio supervisionado por docente do Curso de Farmácia desenvolvido em estabelecimentos públicos ou privados, legalmente constituídos em atividades complementares ou em continuidade ao do Estágio Supervisionado Profissionalizante I.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:13, D:0, HS:15, SL:0, C:15},
			requisitos: ['AA460'],
			color: '#409CD9',
			obligatory: true
		},
		'FR906': {
			code: 'FR906',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Acompanhamento, discussão e avaliação, em conjunto com os respectivos orientadores, da concepção, planejamento, execução, análise e redação de monografia que será apresentada como trabalho de conclusão de curso.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#4BD940',
			obligatory: true
		},
		'BS615': {
			code: 'BS615',
			name: 'Cultivo de Células Animais - Aplicações em Ensaios Biológicos',
			ementa: 'Infraestrutura e biossegurança em laboratório de cultura celular. Esterilização e avaliação da eficácia. Meios de cultura e soluções complementares. Cultivo celular primário e de linhagens estabelecidas. Estabelecimento de inóculos e avaliação de viabilidade celular. Protocolos de descontaminação de culturas. Medidas de crescimento populacional. Criopreservação; imortalização. Caracterização de linhagens. Princípios, aplicações e técnicas de bioensaios em cultivo celular. Considerações teóricas sobre transformação celular e neoplasias, células tronco, terapia celular e medicina regenerativa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA430'],
			color: '#C540D9',
			obligatory: false
		},
		'BT925': {
			code: 'BT925',
			name: 'Etnobotânica de Plantas de Interesse Farmacêutico',
			ementa: 'Conceituação, aspectos botânicos, diversidade biológica, distribuição geográfica, importância econômica, uso popular e etnobotânica de plantas medicinais e de interesse farmacêutico. Histórico da Etnobotânica em diferentes culturas. Metodologia de coleta e registros das informações etnobotânicas. Identificação botânica. Aspectos éticos e legais do direito de propriedade intelectual adquirida. Contexto integrado em conservação e usos de recursos genéticos. Valor medicinal e socioeconômico de espécies nativas e exóticas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BT315'],
			color: '#B340D9',
			obligatory: false
		},
		'BV915': {
			code: 'BV915',
			name: 'Metabolismo Vegetal e Produção de Fitofármacos',
			ementa: 'Propagação e domesticação de plantas. Manutenção da biodiversidade. Fatores ambientais e crescimento das plantas. Fotossíntese. Respiração. Hormônios vegetais. Biossíntese e metabolismo secundário: fenil-propanoides, terpenoides, alcaloides. Manipulação genética. Biofábrica. Extração, análise e bioatividade de fitoderivados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D968',
			obligatory: false
		},
		'EI---': {
			code: 'EI---',
			name: 'Qualquer Disciplina com codigo EI---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EI---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4079D9',
			obligatory: false
		},
		'FR006': {
			code: 'FR006',
			name: 'Estudo de Biodisponibilidade e Bioquivalência de Medicamentos',
			ementa: 'Etapa clínico-histórica: novos medicamentos, biodisponibilidade e bioequivalência, estudos clínicos, aspectos de segurança. Administração do medicamento, coleta de material biológico, manuseio de amostras biológicas, documentação, responsabilidades. Etapa analítica: fundamentação teórica e método bioanalítico. Etapa estatística: métodos estatísticos em bioequivalência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D97440',
			obligatory: false
		},
		'FR009': {
			code: 'FR009',
			name: 'Biotecnologia Microbiana na Indústria Farmacêutica',
			ementa: 'Compostos farmacologicamente ativos de origem microbiana e suas aplicações em medicina humana e veterinária, assim como na agricultura. Antibióticos, compostos antitumorais, moduladores de resposta imunológica e anti-inflamatórios, entre outros. Biodiversidade microbiana e estratégias de bioprospecção. Isolamento seletivo e caracterização preliminar de bactérias, fungos e leveduras. Bioensaios para detecção de atividade. Preservação e coleções de microrganismos. Utilização de microrganismos como biorreatores. Patentes e proteção de propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4068D9',
			obligatory: false
		},
		'FR014': {
			code: 'FR014',
			name: 'Tecnologia de Produção de Plantas Medicinais',
			ementa: 'A formação da planta medicinal. Biodiversidade - trajetória, produtos e interações. Sistemas produtivos: extrativismo, manejo, cultivo orgânico e permacultura. Acesso legal à biodiversidade. Bancos de germoplasma. Produção sustentável de drogas vegetais. Estudos de casos: processos de seleção e de domesticação de espécies nativas. Meio ambiente e controle dos processos produtivos e de pós-colheita.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D95140',
			obligatory: false
		},
		'FR015': {
			code: 'FR015',
			name: 'Plantas Medicinais e Tóxicas',
			ementa: 'Descrição de espécies de plantas tóxicas comumente encontradas no Brasil, identificação botânica das espécies e mecanismos de sua atividade. Plantas medicinais comumente encontradas no Brasil, identificação botânica das espécies e mecanismos de sua atividade. Uso tradicional das espécies descritas. Visita a canteiros de plantas medicinais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D640D9',
			obligatory: false
		},
		'FR018': {
			code: 'FR018',
			name: 'Empreendedorismo',
			ementa: 'O empreendedorismo será abordado com aulas dedicadas a plano de negócios, incubadoras e propriedade intelectual.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9B940',
			obligatory: false
		},
		'FR021': {
			code: 'FR021',
			name: 'Farmacologia Quantitativa',
			ementa: 'Aspectos quantitativos da farmacologia usados no estudo e caracterização de drogas e de novos medicamentos. Conceitos básicos de interação droga-receptor, como curvas dose-resposta, agonistas e antagonistas, atividade intrínseca, eficácia, reserva de receptores, sinergismo, taquifilaxia, desensibilização, tipos de antagonismo. Modelos teóricos. Serão discutidos os métodos utilizados na determinação de parâmetros tais como DE50, CI50, KD, pA2, e na quantificação e classificação de receptores. Também será discutido o uso de modelos teóricos no desenvolvimento de novos medicamentos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: false
		},
		'FR022': {
			code: 'FR022',
			name: 'Farmacologia Clínica e Terapêutica',
			ementa: 'Esta disciplina introduzirá o aluno a estudos clínicos e terapêuticos onde serão discutidos os seguintes tópicos: o que é um estudo clínico, tipos de estudos clínicos, delineamento de um estudo clínico, os aspectos éticos envolvidos nestes estudos (incluindo a legislação vigente), a escolha de voluntários, conflito de interesse e interpretação de dados dentre outros.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94074',
			obligatory: false
		},
		'FR026': {
			code: 'FR026',
			name: 'Seminários Gerais',
			ementa: 'Tópicos avançados de integração entre Química, Biologia e Medicina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6E40D9',
			obligatory: false
		},
		'FR035': {
			code: 'FR035',
			name: 'Farmácia Homeopática',
			ementa: 'A disciplina Farmácia Homeopática visa transmitir aos alunos os fundamentos que alicerçam a terapêutica homeopática e as técnicas a serem aplicadas no desempenho das atividades na Farmácia Homeopática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D0',
			obligatory: false
		},
		'FR037': {
			code: 'FR037',
			name: 'Planejamento Estratégico de Carreira',
			ementa: 'Elementos para currículos, carta de apresentação, pesquisa sobre empresa, marketing pessoal, entrevistas, dinâmicas de grupo, gerenciamento de carreira, novo emprego e progresso na carreira.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9CA40',
			obligatory: false
		},
		'FR038': {
			code: 'FR038',
			name: 'Radiofarmácia',
			ementa: 'A disciplina Radiofarmácia visa transmitir aos alunos os fundamentos e as técnicas envolvidas na produção e aplicação clínica e diagnóstica de radiofármacos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9BF',
			obligatory: false
		},
		'FR039': {
			code: 'FR039',
			name: 'Tópicos Especiais em Ciências Farmacêuticas I',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A2D940',
			obligatory: false
		},
		'FR040': {
			code: 'FR040',
			name: 'Tópicos Especiais em Ciências Farmacêuticas II',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#D6D940',
			obligatory: false
		},
		'FR041': {
			code: 'FR041',
			name: 'Tópicos Especiais em Ciências Farmacêuticas III',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#6ED940',
			obligatory: false
		},
		'FR042': {
			code: 'FR042',
			name: 'Tópicos Especiais em Ciências Farmacêuticas IV',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D98B',
			obligatory: false
		},
		'FR043': {
			code: 'FR043',
			name: 'Tópicos Especiais em Ciências Farmacêuticas V',
			ementa: 'Estudos em temas/conteúdos em Ciências Farmacêuticas.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#40BFD9',
			obligatory: false
		},
		'FR044': {
			code: 'FR044',
			name: 'Ferramentas de Estudo de Bioprocessos',
			ementa: 'Estudo de caso: escolha de um produto do metabolismo microbiano de interesse para a indústria. Estudo e compreensão do processo de forma global. Planejamento experimental para o desenvolvimento e otimização de produção.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A240D9',
			obligatory: false
		},
		'FR046': {
			code: 'FR046',
			name: 'Farmácia Clínica I',
			ementa: 'Farmácia Clínica: histórico, conceitos e perspectivas. Utilização racional de medicamentos, seleção de tratamentos de eleição e alternativos: critérios. Fontes de informação sobre medicamentos (Bases de dados para pesquisa sobre medicamentos – medicina baseada em evidências). Pesquisa sobre interações medicamentosas e possíveis efeitos adversos. Perfil farmacoterapêutico de pacientes. Estudo de guideliness e Diretrizes em ambiente ambulatorial e hospitalar. Manejo e Monitorização farmacoterapêutica de indivíduos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#91D940',
			obligatory: false
		},
		'FR047': {
			code: 'FR047',
			name: 'Métodos Modernos Aplicados à Análise de Medicamentos',
			ementa: 'Avanços recentes na análise de insumos farmacêuticos e medicamentos e estudos de pré-formulação e estabilidade por métodos de separação por cromatografia e eletroforese, análise térmica e métodos espectrométricos e espectroscópicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR508'],
			color: '#6943D9',
			obligatory: false
		},
		'FR048': {
			code: 'FR048',
			name: 'Farmácia Clínica II',
			ementa: 'Perfil e acompanhamento farmacoterapêutico de pacientes internados e ambulatoriais. Manejo e Monitorização farmacoterapêutica de indivíduos. Intervenções farmacêuticas Farmacêutico-Médico-Paciente. Aplicar os conhecimentos teóricos em ambiente de aprendizado real e prático. Trabalhar em equipe multiprofissional.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['FR046'],
			color: '#91D940',
			obligatory: false
		},
		'FR050': {
			code: 'FR050',
			name: 'Farmacogenética e Farmacogenômica',
			ementa: 'Base Genética de resposta e de eventos adversos aos medicamentos, epigenética, modelos experimentais em farmacogenômica, proteômica, técnicas utilizadas, estudo da medicina personalizada.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#408BD9',
			obligatory: false
		},
		'FR325': {
			code: 'FR325',
			name: 'Iniciação Científica em Ciências Farmacêuticas I',
			ementa: 'Estágio supervisionado a ser cumprido por aluno do curso de Farmácia em laboratório de pesquisa biológica, química ou médica da Unicamp.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#4B40D9',
			obligatory: false
		},
		'FR326': {
			code: 'FR326',
			name: 'Iniciação Científica em Ciências Farmacêuticas II',
			ementa: 'Estágio supervisionado a ser cumprido por alunos do curso de Farmácia em laboratórios de pesquisa biológica, química ou médica da Unicamp.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:0, C:4},
			requisitos: '',
			color: '#40D99C',
			obligatory: false
		},
		'MD182': {
			code: 'MD182',
			name: 'Líquidos Biológicos',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em urinálise, derrames cavitários, líquido cefaloraquidiano, sinovial e seminal. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D99640',
			obligatory: false
		},
		'MD183': {
			code: 'MD183',
			name: 'Bioquímica Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em bioquímica clínica e toxicologia. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200', 'BB315'],
			color: '#9140D9',
			obligatory: false
		},
		'MD187': {
			code: 'MD187',
			name: 'Fisiologia Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames para avaliação funcional de glândulas endócrinas e para determinação de marcadores tumoriais séricos. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D940B9',
			obligatory: false
		},
		'MD188': {
			code: 'MD188',
			name: 'Hematologia Clínica',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em hematologia clínica. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A840',
			obligatory: false
		},
		'MD189': {
			code: 'MD189',
			name: 'Microbiologia Clínica',
			ementa: 'Preparação de meios de cultura e reagentes. Coleta de espécimes clínicos para exames microbiológicos. Avaliação pré-analítica, realização e interpretação de exames de rotina de pequena, média e alta complexidades em Microbiologia Clínica, cumpridas as normas setoriais de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AD',
			obligatory: false
		},
		'MD190': {
			code: 'MD190',
			name: 'Imunologia e Parasitologia Clínicas',
			ementa: 'Coleta de espécimes clínicos, realização e interpretação de exames em imunologia e parasitologia clínicas. Rotinas de pequena, média e alta complexidade. Cumprimento das normas de controle de qualidade e as normas da ANVISA.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96240',
			obligatory: false
		},
		'QI445': {
			code: 'QI445',
			name: 'Introdução à Espectroscopia Vibracional',
			ementa: 'Fundamentos de espectroscopia vibracional e interpretação de espectros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI246'],
			color: '#9140D9',
			obligatory: false
		},
		'QO423': {
			code: 'QO423',
			name: 'Fundamentos da Espectrometria de Massas',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações de espectrometria de massas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO321'],
			color: '#9140D9',
			obligatory: false
		},
		'QO424': {
			code: 'QO424',
			name: 'Fundamentos em Espectroscopia e Ressonância Magnética Nuclear',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações da Espectroscopia de Ressonância Magnética Nuclear.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO321'],
			color: '#9140D9',
			obligatory: false
		},
		'QO721': {
			code: 'QO721',
			name: 'Química Orgânica III',
			ementa: 'Diferenças entre heteroaromáticos e heterociclos. Principais reações envolvendo heteroaromáticos de 5 e 6 membros contendo um ou dois heteroátomos (N, O, S). Síntese de heteroaromáticos de 5 e 6 membros contendo um ou dois heteroátomos. Síntese de heteroaromáticos fundidos. Exemplos de sínteses de fármacos contendo anéis heterocíclicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO421'],
			color: '#9140D9',
			obligatory: false
		}
	}
};

export default catalogue;
