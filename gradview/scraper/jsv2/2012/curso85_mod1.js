const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST103', 'ST109', 'TT101', 'ST107', 'ST108']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST212', 'ST209', 'ST211', 'ST207', 'ST008', 'ST210']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST301', 'ST111', 'ST303', 'ST307', 'ST305']
		},
		'sem-4': {
			id: '4',
			subjects: ['ELET04', 'ST403', 'ST306', 'ST304', 'ST405']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST612', 'ST511', 'ST512', 'ST420', 'ST514', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST613', 'ST611', 'ST615', 'ST614', 'ST671']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST713', 'ST711', 'ST601', 'ST712', 'ST714', 'ST778']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'ST501']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST001', 'ST002', 'ST003', 'ST004', 'ST005', 'ST007', 'ST009', 'ST019', 'ST090', 'TT350', 'TT601'],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['ST010', 'ST011', 'ST012', 'ST013', 'ST014', 'ST016', 'ST017', 'ST018', 'ST025', 'ST026', 'ST035', 'ST037', 'ST043', 'ST045', 'ST084', 'ST085', 'ST086', 'ST087', 'ST572', 'ST715'],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-4': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST813', 'ST814'],
		},
	},

	subjects: {
		'ST103': {
			code: 'ST103',
			name: 'Desenho Técnico',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5D46B9',
			obligatory: true
		},
		'ST107': {
			code: 'ST107',
			name: 'Biologia Aplicada I',
			ementa: 'Noções básicas sobre biologia celular e molecular. Principais grupos de organismos de importância no saneamento ambiental (microrganismos, protozoários e metazoários). Principais doenças relacionadas. Noções sobre segurança em laboratórios e controle de microrganismos. Cultura e observação microscópica.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B94674',
			obligatory: true
		},
		'ST108': {
			code: 'ST108',
			name: 'Química Aplicada',
			ementa: 'Desenvolvimento de conceitos fundamentais de química para entendimento de sistemas naturais através de fórmulas e equações químicas. Estrutura atômica. Classificação periódica e propriedades dos elementos. Ligações químicas, estrutura e propriedades das substâncias. Equilíbrio químico. Minerais. Polímeros naturais e sintéticos. Gases e poluentes gasosos. Noções básicas de espectrofotometria. Tratamento de dados analíticos. Experimentos ilustrando o método científico, preparação de soluções, padronização de soluções, equilíbrio ácido-base, determinação de pH de amostras ambientais.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B974',
			obligatory: true
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98B46',
			obligatory: true
		},
		'ST207': {
			code: 'ST207',
			name: 'Biologia Aplicada II',
			ementa: 'Hidrobiologia sanitária. Análises bacteriológicas da água (Colimetria). A água como meio ecológico. Cíclos Biogeoquímicos. Problemas causados por organismos ao abastecimento. Noções de ecossistemas aquáticos. Controle de organismos em águas de abastecimento. Efeitos biológicos da poluição. Depuração Biológica de águas residuárias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST107'],
			color: '#B94674',
			obligatory: true
		},
		'ST209': {
			code: 'ST209',
			name: 'Física Aplicada II',
			ementa: 'Oscilações. Ondas mecânicas. Deformações e elasticidade. Noções de hidrostática e hidrodinâmica. Termologia. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109'],
			color: '#46B974',
			obligatory: true
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#468BB9',
			obligatory: true
		},
		'ST212': {
			code: 'ST212',
			name: 'Química Orgânica Aplicada',
			ementa: 'Estrutura eletrônica e ligação. Ácidos e bases orgânicas. Hidrocarbonetos: nomenclatura, propriedades, HPAs e impactos ambientais. Ésteres, óleos, gorduras e alimentos: classificação, grupos funcionais, características químicas e reações de interesse no saneamento. Fármacos e estrogênios ambientais: estruturas, identificação, características químicas, reações em ETAs. Defensivos agrícolas: principais estruturas, propriedades químicas, predição de compostos derivados. Compostos nitrogenados: nomenclatura, estruturas, propriedades físico-químicas, principais reações, usos e disposição no ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'ST111': {
			code: 'ST111',
			name: 'Ética e Educação Ambiental',
			ementa: 'Educação Ambiental. A relação ser Humano-Natureza e as Relações Sociais. A Responsabilidade Social sobre as Mudanças Globais. Valor social. A interdisciplinaridade como abordagem para a resolução de problemas. Metodologias participativas em trabalhos sociais. Estratégias de trabalho.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B946',
			obligatory: true
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#5D46B9',
			obligatory: true
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101'],
			color: '#808097',
			obligatory: true
		},
		'ST305': {
			code: 'ST305',
			name: 'Química Sanitária e Laboratório de Saneamento I',
			ementa: 'Importância da água. Parâmetros físicos e químicos indicadores de qualidade da água em saneamento ambiental: conceitos, aplicações e métodos para determinação em laboratório.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST108'],
			color: '#4646B9',
			obligatory: true
		},
		'ST307': {
			code: 'ST307',
			name: 'Saúde Pública',
			ementa: 'Conceitos de Saúde. Epidemiologia. Vigilância Epidemiológica. Ecologia das doenças (Vetores). Doenças emergentes e reemergentes. Vigilância Sanitária. Aspectos gerais das grandes epidemias no Brasil. Resíduos sólidos de serviços de saúde. Saúde Ambiental.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207'],
			color: '#B94674',
			obligatory: true
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A246',
			obligatory: true
		},
		'ST306': {
			code: 'ST306',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'TT101'],
			color: '#8069B9',
			obligatory: true
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303'],
			color: '#808097',
			obligatory: true
		},
		'ST405': {
			code: 'ST405',
			name: 'Química Sanitária e Laboratório de Saneamento II',
			ementa: 'Meio aquático. Poluição. Lançamento de águas residuárias: Características físico-químicas dos esgotos domésticos, efluentes industriais e lançamentos. Auto-depuração de corpos d\'água. Legislação ambiental Federal e Estadual aplicada a padrões de lançamentos de efluentes. Análises físico-químicas dos principais parâmetros e Legislação Ambiental. Estações de tratamentos de esgotos e efluentes (ETEs).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST305'],
			color: '#4646B9',
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
		'ST420': {
			code: 'ST420',
			name: 'Materiais de Construção Civil II',
			ementa: 'Concreto de cimento Portland. Aço para concreto armado. Fios e cordoalhas para concreto protendido. Ensaios em laboratórios.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST304'],
			color: '#B9A246',
			obligatory: true
		},
		'ST511': {
			code: 'ST511',
			name: 'Resistência dos Materiais e de Concreto',
			ementa: 'Estática elementar aplicada. Vinculações dos sistemas planos. Esforços solicitantes em estruturas planas. Estudo elementar da resistência. Estudos das tensões e deformações. Pequenas estruturas. Considerações sobre as dimensões e finalidade dos seguintes elementos estruturais: sapatas, blocos e estacas, tubulões, vigas baldrames e invertidas, pilares, lajes e reservatórios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101'],
			color: '#808097',
			obligatory: true
		},
		'ST512': {
			code: 'ST512',
			name: 'Tubulações e Construção de Rede de Água',
			ementa: 'Projetos. Recebimento e aceitação dos materiais. Locação da obra. Abertura de valas. Preparação do material. Tubulações. Aterro das valas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST303'],
			color: '#808097',
			obligatory: true
		},
		'ST514': {
			code: 'ST514',
			name: 'Tratamento de Água',
			ementa: 'Características das águas; padrões de potabilidade (legislações). Seleção de tecnologias de tratamento em função da qualidade da água bruta. Captação. Pré-tratamento e tratamento convencional (ciclo completo). Correção de pH. Teorias da coagulação. Mistura rápida. Floculação. Decantação. Filtração. Flotação. Desinfecção. Rede de distribuição. Tratamento e disposição dos resíduos gerados nas ETAs (lodo). Estações de tratamento de água (ETAs).',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303', 'ST405'],
			color: '#6363A8',
			obligatory: true
		},
		'ST612': {
			code: 'ST612',
			name: 'Tubulações e Construção de Rede de Esgoto',
			ementa: 'Construção dos coletores de esgotos. Valas. Escavação manual e escavação mecânica. Escoramentos. Esgotamento. Coletores de esgotos de secção circular. Materiais empregados. Tipos de juntas. Materiais, equipamentos e ferramentas. Assentamento dos coletores. Alinhamento e declividade. Métodos práticos de controle. Órgãos complementares (poços de visitas, tubos de queda, etc). Higiene e segurança do trabalho.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST301'],
			color: '#5D46B9',
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
		'ST611': {
			code: 'ST611',
			name: 'Obras de Abastecimento',
			ementa: 'Consumo de água. Captação das águas subterrâneas. Captação das águas superficiais. Reservatórios de acumulação e barragens. Linhas adutoras e órgãos acessórios. Reservatórios de distribuição de água. Redes de distribuição de água.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST301', 'ST303'],
			color: '#6F63A8',
			obligatory: true
		},
		'ST613': {
			code: 'ST613',
			name: 'Sistema de Coleta e Disposição de Esgotos',
			ementa: 'Sistemas de esgotos sanitários. Sistemas de esgotamento. Líquidos a serem esgotados. Quantidade de líquidos a esgotar. Hidráulica das redes de esgotos. Condições técnicas a serem satisfeitas pelos coletores. Rede de esgotos. Órgãos acessórios das redes. Interceptores e emissários. Operação e manutenção dos serviços de esgoto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST301', 'ST403'],
			color: '#6F63A8',
			obligatory: true
		},
		'ST614': {
			code: 'ST614',
			name: 'Tratamento de Esgoto',
			ementa: 'Generalidades. Grades. Caixas de areia. Remoção de material graxo. Decantadores de lodo. Secagem do lodo. Filtros biológicos. Processo dos lodos ativados. Lagoas de estabilização. Processos anaeróbios. Despejos líquidos industriais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207', 'ST303'],
			color: '#9D6386',
			obligatory: true
		},
		'ST615': {
			code: 'ST615',
			name: 'Obras Hidráulicas',
			ementa: 'Canais. Regimes de escoamento. Movimento uniforme. Movimento gradualmente variado. Ressalto hidráulico. Curvas de remanso. Vertedores. Barragens tomadas d\'água. Ensecadeiras. Reservatórios.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST306', 'ST403'],
			color: '#8075A8',
			obligatory: true
		},
		'ST671': {
			code: 'ST671',
			name: 'Gerenciamento de Resíduos Sólidos',
			ementa: 'Técnicas de amostragem. Caracterização dos resísuos. Avaliação para definição sobre a disposição final dos resíduos. Controle de resíduos sólidos: acondicionamento, coleta, transporte, armazenamento. Técnicas de tratamento. Normas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: true
		},
		'ST601': {
			code: 'ST601',
			name: 'Instalações Prediais Hidráulico-Sanitárias',
			ementa: 'Instalação predial de água fria. Instalação predial de água quente. Instalação predial de esgoto sanitário. Instalação predial de água pluvial. Instalação predial de combate a incêndio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303'],
			color: '#808097',
			obligatory: true
		},
		'ST711': {
			code: 'ST711',
			name: 'Planejamento de Sistemas de Saneamento',
			ementa: 'Teorias sobre os programas de saneamento, vistas sob os tópicos seguintes: padrões de serviços, situação atual, metas e política governamentais. Recursos Disponíveis. Problemas. Elaboração de Relatório Técnico preliminar sobre os seguintes serviços de uma comunidade urbana: Abastecimento de água. Sistemas de esgotos. Drenagem de águas pluviais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST514', 'ST611', 'ST613'],
			color: '#6B63A8',
			obligatory: true
		},
		'ST712': {
			code: 'ST712',
			name: 'Saneamento Rural e de Pequenas Comunidades',
			ementa: 'Abastecimento de água. Desinfecção. Coleta e disposição dos esgotos em zonas rurais e pequenas comunidades. Disposição dos esgotos sem transporte hídrico. Disposição dos esgotos com transporte hídrico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207', 'ST405'],
			color: '#804697',
			obligatory: true
		},
		'ST713': {
			code: 'ST713',
			name: 'Sistemas de Recalque de Água e Esgoto',
			ementa: 'Bombas. Bombas de pistão. Sistema de \"Air Lift\". Carneiro Hidráulico. Bombas centrífugas. Sistemas de recalque. Instalação de sistemas elevatórios. Operação e manutenção de bombas centrífugas. Especificações técnicas para aquisição de uma bomba centrífuga. Equipamentos elétricos. Sala de máquinas. Sistemas elevatórios para esgotos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST611', 'ST613'],
			color: '#6F63A8',
			obligatory: true
		},
		'ST714': {
			code: 'ST714',
			name: 'Higiene e Segurança Ocupacional',
			ementa: 'O ambiente de trabalho e os riscos à saúde. Segurança e higiene ocupacional. Prevenção de acidentes e doenças relacionadas ao trabalho. Aspectos legais (Normas Regulamentadoras). Noções de toxicologia ocupacional. Controle dos riscos nos ambientes de trabalho e de situações de emergências. Primeiros socorros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946A2',
			obligatory: true
		},
		'ST778': {
			code: 'ST778',
			name: 'Introdução ao Trabalho de Graduação e ao Estágio Supervisionado',
			ementa: 'Definir o Plano do Trabalho de Graduação Interdisciplinar ou Estágio Supervisionado, contendo a revisão bibliográfica sobre o trabalho a ser desenvolvido, sob a orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágio para alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#46B946',
			obligatory: true
		},
		'ST501': {
			code: 'ST501',
			name: 'Gestão de Sistemas de Saneamento',
			ementa: 'Organização de Sistemas de Saneamento. Estruturas de Planejamento e de Administração. Contratação e obras e serviços. Licitações. Gestão de Recursos Humanos. Gestão Financeira. Programas de Qualidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A246B9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ST001': {
			code: 'ST001',
			name: 'Português',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B95D',
			obligatory: false
		},
		'ST002': {
			code: 'ST002',
			name: 'Inglês Técnico',
			ementa: 'Traduções e Interpretações de Textos Técnicos. Vocabulário e Gramática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97446',
			obligatory: false
		},
		'ST003': {
			code: 'ST003',
			name: 'Teorias da Qualidade',
			ementa: 'Conceitos de Qualidade. As Teorias da Qualidade. Normas para a Qualidade. Controle Estatístico do Processo. Evolução Histórica da Administração da Qualidade.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8B46B9',
			obligatory: false
		},
		'ST004': {
			code: 'ST004',
			name: 'Legislação Trabalhista e Segurança do Trabalho',
			ementa: 'Direito Trabalhista: Conceito e formação histórica. O empregador e o empregado. Contrato de trabalho e suas alterações. Salário e remuneração. Estabilidade. Normas gerais de proteção ao trabalho. A justiça do trabalho. Previdência social. Segurança do trabalho: Introdução à segurança, higiene e medicina do trabalho. Avaliação e controle dos riscos profissionais. Normas e leis. Proteção contra incêndios. Responsabilidades sobre acidentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9465D',
			obligatory: false
		},
		'ST005': {
			code: 'ST005',
			name: 'Relações Humanas',
			ementa: 'Das ciências do comportamento: individual e social. Princípios éticos e hierárquicos. Da divisão das pessoas: naturais e jurídicas. Da responsabilidade civil. Direitos Humanos e suas implicações nas relações individuais. Noções de Direito Civil.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#B9468B',
			obligatory: false
		},
		'ST007': {
			code: 'ST007',
			name: 'Humanidades',
			ementa: 'Estrutura do mundo moderno. Ação do indivíduo na atualidade. Os veículos de comunicação em massas. As artes e sua conceituação. O indivíduo como componente de um mundo cultural. O cinema, o teatro e sua importância no mundo moderno. Os grandes conflitos e suas consequências no plano cultural. Relacionamento entre os povos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'ST009': {
			code: 'ST009',
			name: 'Regulamentação e Política Ambiental',
			ementa: 'Legislação ambiental na constituição federal. Legislação ambiental na constituição estadual. Política nacional do meio ambiente. História do movimento ambientalista no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5DB946',
			obligatory: false
		},
		'ST010': {
			code: 'ST010',
			name: 'Casa de Química e Laboratório de ETAs',
			ementa: 'Produtos químicos para tratamento de água. Armazenamento. Preparação de soluções e suspensões. Dosagens. Sulfato de alumínio. Cloreto férrico. Álcalis. Cloro e compostos de cloro. Compostos de flúor. Carvão ativado. Polímeros. Organização de laboratório físico-químico. Organização de laboratório bacteriológico.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:0, HS:3, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST011': {
			code: 'ST011',
			name: 'Tópicos Especiais de Coagulação-Floculação em ETAs',
			ementa: 'Estabilidade das partículas coloidais e substâncias húmicas. Coagulantes e mecanismos de coagulação. Diagramas de coagulação. Auxiliares de floculação. Interação entre partículas na água. Mistura rápida e floculação. Parâmetros de projeto. Unidades de mistura rápida: tipos e dimensionamento. Unidades de floculação: tipos e dimensionamento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST012': {
			code: 'ST012',
			name: 'Tópicos Especiais de Sedimentação em ETAs',
			ementa: 'Teoria da sedimentação. Decantador ideal e não ideal. Decantadores simples. Projeto de decantadores convencionais de escoamento horizontal. Decantadores convencionais com escoamento vertical. Decantadores de alta taxa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST013': {
			code: 'ST013',
			name: 'Tópicos Especiais de Filtração em ETAs',
			ementa: 'Teoria da filtração rápida e da fluidificação. Características dos filtros rápidos. Fundo dos filtros rápidos. Lavagem dos filtros rápidos. Controle dos filtros rápidos. Filtração direta descendente. Filtração direta ascendente. Filtração lenta.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST014': {
			code: 'ST014',
			name: 'Irrigação',
			ementa: 'Introdução. Transferência no sistema solo-água-planta-atmosfera. Demanda de água para irrigação. Estudo de estiagens. Métodos de irrigação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST306', 'ST403'],
			color: '#8075A8',
			obligatory: false
		},
		'ST016': {
			code: 'ST016',
			name: 'Tópicos Especiais em Saneamento Básico',
			ementa: 'Estudo de assuntos relevantes introduzidos em Saneamento Básico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#7446B9',
			obligatory: false
		},
		'ST017': {
			code: 'ST017',
			name: 'Estudos Econômicos do Saneamento Básico',
			ementa: 'Custos do saneamento básico. Custos de implantação e manutenção de sistemas de saneamento básico. Histórico dos programas nacionais de saneamento. Linhas de financiamento.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST211', 'TT101'],
			color: '#8069B9',
			obligatory: false
		},
		'ST018': {
			code: 'ST018',
			name: 'Saneamento Básico e Impacto Ambiental',
			ementa: 'Os impactos ambientais provocados pelas obras de saneamento: caracterização dos problemas. Estudos e medidas mitigadoras. EIA-RIMA.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST207', 'ST405', 'ST613'],
			color: '#7A509C',
			obligatory: false
		},
		'ST019': {
			code: 'ST019',
			name: 'A Sociedade e os Portadores de Necessidades Especiais',
			ementa: 'Histórico. Legislação. Desenho universal. Inclusão. Tecnologia assistiva. O trabalho e a legislação. Trabalho prático.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B9A2',
			obligatory: false
		},
		'ST025': {
			code: 'ST025',
			name: 'Computação Gráfica Aplicada I',
			ementa: 'Desenho técnico auxiliado por computador em duas dimensões.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#5D46B9',
			obligatory: false
		},
		'ST026': {
			code: 'ST026',
			name: 'Computação Gráfica Aplicada II',
			ementa: 'Desenho técnico auxiliado por computador em três dimensões.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST025'],
			color: '#5D46B9',
			obligatory: false
		},
		'ST035': {
			code: 'ST035',
			name: 'Tratamento de Efluentes por Processos Químicos Avançados',
			ementa: 'Tratamento de Efluentes por meio de Processos Oxidativos Avançados (POAs). Estudos dos Processos de Tratamento empregando Ozônio, Peróxido de Hidrogênio, Reação de Fenton. Processos Fotocatalítico, Eletroquímico e Fotoeletroquímico. Estudos mecanísticos de cada método. Práticas empregando Fotocatálise e processos Eletroquímicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A2B9',
			obligatory: false
		},
		'ST037': {
			code: 'ST037',
			name: 'Microbiologia Aplicada',
			ementa: 'Diversidade microbiana. Ecologia Microbiana do solo. Xenobióticos no solo. Biodegradação e Biorremediação. Respirometria.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST207'],
			color: '#B94674',
			obligatory: false
		},
		'ST043': {
			code: 'ST043',
			name: 'Biomatemática',
			ementa: 'Evolução dos modelos. Formulação e estudo de modelos matemáticos ligados à biomatemática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT101'],
			color: '#B946B9',
			obligatory: false
		},
		'ST045': {
			code: 'ST045',
			name: 'Hidrologia das Águas Subterrâneas',
			ementa: 'Recursos hídricos. Tipos de aquífero. Origem e distribuição das águas subterrâneas. Processos físicos do fluxo de água em meios porosos e fraturados. Métodos de investigação das águas subsuperficiais e subterrâneas. Noções de hidrogeoquímica de águas subterrâneas. Físico-química dos processos de contaminação de águas subterrâneas. Processos de descontaminação e remediação de áreas contaminadas. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST306'],
			color: '#8069B9',
			obligatory: false
		},
		'ST084': {
			code: 'ST084',
			name: 'Cromatografia Gasosa Aplicada ao Saneamento',
			ementa: 'Definições básicas da cromatografia gasosa e evolução histórica; Esquema de um cromatógrafo a gás; Instrumentação básica; Parâmentros fundamentais; Fases estacionárias; Colunas cromatográficas; Detectores: Características básicas; Detector por Ionização em Chama (DIC); Análises Quantitativas e Qualitativas aplicadas a amostras ambientais; Coleta e preservação de amostras; Pré-concentração de amostras ambientais; Padronização; Curvas de calibração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST085': {
			code: 'ST085',
			name: 'Tópicos Especiais em Saneamento Básico I',
			ementa: 'Estudos de assuntos relevantes introduzidos em saneamento básico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#465DB9',
			obligatory: false
		},
		'ST086': {
			code: 'ST086',
			name: 'Tópicos Especiais em Saneamento Básico II',
			ementa: 'Estudos de assuntos relevantes introduzidos em saneamento básico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B95D46',
			obligatory: false
		},
		'ST087': {
			code: 'ST087',
			name: 'Tópicos Especiais em Saneamento Básico III',
			ementa: 'Estudos de assuntos relevantes introduzidos em saneamento básico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B98B',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#74B946',
			obligatory: false
		},
		'ST572': {
			code: 'ST572',
			name: 'Tratamento de Efluentes Líquidos',
			ementa: 'Caracterização de efluentes líquidos. Tipos de sistemas de tratamento. Seleção de sistema. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST715': {
			code: 'ST715',
			name: 'Técnicas de Separação e Análises Cromatográficas Aplicadas ao Meio Ambiente',
			ementa: 'Conceitos em separação química. Definições básicas da cromatografia e evolução histórica. Cromatografia líquida. Equipamentos para HPLC. Cromatografia gasosa. Instrumentação básica. Fases estacionárias. Colunas cromatográficas. Detectores: características básicas, análises quantitativas e qualitativas aplicadas às amostras ambientais, pré-concentração de amostras ambientais, extração líquido-líquido (ELL). Extração em fase sólida (SPE). Padronização. Calibração. Validação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#4646B9',
			obligatory: false
		},
		'ST813': {
			code: 'ST813',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Realização do Trabalho de Graduação Interdisciplinar do Curso de Tecnologia em Saneamento Ambiental, com objetivo de aprofundar e aplicar os conhecimentos específicos das disciplinas, sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST778'],
			color: '#46B946',
			obligatory: false
		},
		'ST814': {
			code: 'ST814',
			name: 'Estágio Supervisionado',
			ementa: 'Realização do Estágio Supervisionado do Curso de Tecnologia em Saneamento Ambiental, sob orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST778'],
			color: '#46B946',
			obligatory: false
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8BB946',
			obligatory: false
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		}
	}
};

export default catalogue;
