const catalogue = {
	totalCredits: 160,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST103', 'ST107', 'ST108', 'ST109', 'TT101']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST008', 'ST207', 'ST209', 'ST210', 'ST211', 'ST212']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST111', 'ST301', 'ST303', 'ST305', 'ST307']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST304', 'ST306', 'ST403', 'ST405', 'ELET4']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST420', 'ST511', 'ST512', 'ST514', 'ST612', 'ELET4']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST611', 'ST613', 'ST614', 'ST615', 'ST671']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST601', 'ST711', 'ST712', 'ST713', 'ST714', 'ST778']
		},
		'sem-8': {
			id: '8',
			subjects: ['ST501', 'ELET10']
		}
	},

	subjects: {
		'ST103': {
			code: 'ST103',
			name: 'Desenho Técnico',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST107': {
			code: 'ST107',
			name: 'Biologia Aplicada I',
			ementa: 'Noções básicas sobre biologia celular e molecular. Principais grupos de organismos de importância no saneamento ambiental (microrganismos, protozoários e metazoários). Principais doenças relacionadas. Noções sobre segurança em laboratórios e controle de microrganismos. Cultura e observação microscópica.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ''
		},
		'ST108': {
			code: 'ST108',
			name: 'Química Aplicada',
			ementa: 'Desenvolvimento de conceitos fundamentais de química para entendimento de sistemas naturais através de fórmulas e equações químicas. Estrutura atômica. Classificação periódica e propriedades dos elementos. Ligações químicas, estrutura e propriedades das substâncias. Equilíbrio químico. Minerais. Polímeros naturais e sintéticos. Gases e poluentes gasosos. Noções básicas de espectrofotometria. Tratamento de dados analíticos. Experimentos ilustrando o método científico, preparação de soluções, padronização de soluções, equilíbrio ácido-base, determinação de pH de amostras ambientais.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST207': {
			code: 'ST207',
			name: 'Biologia Aplicada II',
			ementa: 'Hidrobiologia sanitária. Análises bacteriológicas da água (Colimetria). A água como meio ecológico. Cíclos Biogeoquímicos. Problemas causados por organismos ao abastecimento. Noções de ecossistemas aquáticos. Controle de organismos em águas de abastecimento. Efeitos biológicos da poluição. Depuração Biológica de águas residuárias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST107']
		},
		'ST209': {
			code: 'ST209',
			name: 'Física Aplicada II',
			ementa: 'Oscilações. Ondas mecânicas. Deformações e elasticidade. Noções de hidrostática e hidrodinâmica. Termologia. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109']
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST212': {
			code: 'ST212',
			name: 'Química Orgânica Aplicada',
			ementa: 'Estrutura eletrônica e ligação. Ácidos e bases orgânicas. Hidrocarbonetos: nomenclatura, propriedades, HPAs e impactos ambientais. Ésteres, óleos, gorduras e alimentos: classificação, grupos funcionais, características químicas e reações de interesse no saneamento. Fármacos e estrogênios ambientais: estruturas, identificação, características químicas, reações em ETAs. Defensivos agrícolas: principais estruturas, propriedades químicas, predição de compostos derivados. Compostos nitrogenados: nomenclatura, estruturas, propriedades físico-químicas, principais reações, usos e disposição no ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST111': {
			code: 'ST111',
			name: 'Ética e Educação Ambiental',
			ementa: 'Educação Ambiental. A relação ser Humano-Natureza e as Relações Sociais. A Responsabilidade Social sobre as Mudanças Globais. Valor social. A interdisciplinaridade como abordagem para a resolução de problemas. Metodologias participativas em trabalhos sociais. Estratégias de trabalho.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103']
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101']
		},
		'ST305': {
			code: 'ST305',
			name: 'Química Sanitária e Laboratório de Saneamento I',
			ementa: 'Importância da água. Parâmetros físicos e químicos indicadores de qualidade da água em saneamento ambiental: conceitos, aplicações e métodos para determinação em laboratório.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST108']
		},
		'ST307': {
			code: 'ST307',
			name: 'Saúde Pública',
			ementa: 'Conceitos de Saúde. Epidemiologia. Vigilância Epidemiológica. Ecologia das doenças (Vetores). Doenças emergentes e reemergentes. Vigilância Sanitária. Aspectos gerais das grandes epidemias no Brasil. Resíduos sólidos de serviços de saúde. Saúde Ambiental.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207']
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST306': {
			code: 'ST306',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'TT101']
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303']
		},
		'ST405': {
			code: 'ST405',
			name: 'Química Sanitária e Laboratório de Saneamento II',
			ementa: 'Meio aquático. Poluição. Lançamento de águas residuárias: Características físico-químicas dos esgotos domésticos, efluentes industriais e lançamentos. Auto-depuração de corpos d'água. Legislação ambiental Federal e Estadual aplicada a padrões de lançamentos de efluentes. Análises físico-químicas dos principais parâmetros e Legislação Ambiental. Estações de tratamentos de esgotos e efluentes (ETEs).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST305']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'ST420': {
			code: 'ST420',
			name: 'Materiais de Construção Civil II',
			ementa: 'Concreto de cimento Portland. Aço para concreto armado. Fios e cordoalhas para concreto protendido. Ensaios em laboratórios.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST304']
		},
		'ST511': {
			code: 'ST511',
			name: 'Resistência dos Materiais e de Concreto',
			ementa: 'Estática elementar aplicada. Vinculações dos sistemas planos. Esforços solicitantes em estruturas planas. Estudo elementar da resistência. Estudos das tensões e deformações. Pequenas estruturas. Considerações sobre as dimensões e finalidade dos seguintes elementos estruturais: sapatas, blocos e estacas, tubulões, vigas baldrames e invertidas, pilares, lajes e reservatórios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101']
		},
		'ST512': {
			code: 'ST512',
			name: 'Tubulações e Construção de Rede de Água',
			ementa: 'Projetos. Recebimento e aceitação dos materiais. Locação da obra. Abertura de valas. Preparação do material. Tubulações. Aterro das valas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST303']
		},
		'ST514': {
			code: 'ST514',
			name: 'Tratamento de Água',
			ementa: 'Características das águas; padrões de potabilidade (legislações). Seleção de tecnologias de tratamento em função da qualidade da água bruta. Captação. Pré-tratamento e tratamento convencional (ciclo completo). Correção de pH. Teorias da coagulação. Mistura rápida. Floculação. Decantação. Filtração. Flotação. Desinfecção. Rede de distribuição. Tratamento e disposição dos resíduos gerados nas ETAs (lodo). Estações de tratamento de água (ETAs).',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303', 'ST405']
		},
		'ST612': {
			code: 'ST612',
			name: 'Tubulações e Construção de Rede de Esgoto',
			ementa: 'Construção dos coletores de esgotos. Valas. Escavação manual e escavação mecânica. Escoramentos. Esgotamento. Coletores de esgotos de secção circular. Materiais empregados. Tipos de juntas. Materiais, equipamentos e ferramentas. Assentamento dos coletores. Alinhamento e declividade. Métodos práticos de controle. Órgãos complementares (poços de visitas, tubos de queda, etc). Higiene e segurança do trabalho.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST301']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'ST611': {
			code: 'ST611',
			name: 'Obras de Abastecimento',
			ementa: 'Consumo de água. Captação das águas subterrâneas. Captação das águas superficiais. Reservatórios de acumulação e barragens. Linhas adutoras e órgãos acessórios. Reservatórios de distribuição de água. Redes de distribuição de água.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST301', 'ST303']
		},
		'ST613': {
			code: 'ST613',
			name: 'Sistema de Coleta e Disposição de Esgotos',
			ementa: 'Sistemas de esgotos sanitários. Sistemas de esgotamento. Líquidos a serem esgotados. Quantidade de líquidos a esgotar. Hidráulica das redes de esgotos. Condições técnicas a serem satisfeitas pelos coletores. Rede de esgotos. Órgãos acessórios das redes. Interceptores e emissários. Operação e manutenção dos serviços de esgoto.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST301', 'ST403']
		},
		'ST614': {
			code: 'ST614',
			name: 'Tratamento de Esgoto',
			ementa: 'Generalidades. Grades. Caixas de areia. Remoção de material graxo. Decantadores de lodo. Secagem do lodo. Filtros biológicos. Processo dos lodos ativados. Lagoas de estabilização. Processos anaeróbios. Despejos líquidos industriais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207', 'ST303']
		},
		'ST615': {
			code: 'ST615',
			name: 'Obras Hidráulicas',
			ementa: 'Canais. Regimes de escoamento. Movimento uniforme. Movimento gradualmente variado. Ressalto hidráulico. Curvas de remanso. Vertedores. Barragens tomadas d'água. Ensecadeiras. Reservatórios.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST306', 'ST403']
		},
		'ST671': {
			code: 'ST671',
			name: 'Gerenciamento de Resíduos Sólidos',
			ementa: 'Técnicas de amostragem. Caracterização dos resísuos. Avaliação para definição sobre a disposição final dos resíduos. Controle de resíduos sólidos: acondicionamento, coleta, transporte, armazenamento. Técnicas de tratamento. Normas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405']
		},
		'ST601': {
			code: 'ST601',
			name: 'Instalações Prediais Hidráulico-Sanitárias',
			ementa: 'Instalação predial de água fria. Instalação predial de água quente. Instalação predial de esgoto sanitário. Instalação predial de água pluvial. Instalação predial de combate a incêndio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303']
		},
		'ST711': {
			code: 'ST711',
			name: 'Planejamento de Sistemas de Saneamento',
			ementa: 'Teorias sobre os programas de saneamento, vistas sob os tópicos seguintes: padrões de serviços, situação atual, metas e política governamentais. Recursos Disponíveis. Problemas. Elaboração de Relatório Técnico preliminar sobre os seguintes serviços de uma comunidade urbana: Abastecimento de água. Sistemas de esgotos. Drenagem de águas pluviais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST514', 'ST611', 'ST613']
		},
		'ST712': {
			code: 'ST712',
			name: 'Saneamento Rural e de Pequenas Comunidades',
			ementa: 'Abastecimento de água. Desinfecção. Coleta e disposição dos esgotos em zonas rurais e pequenas comunidades. Disposição dos esgotos sem transporte hídrico. Disposição dos esgotos com transporte hídrico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207', 'ST405']
		},
		'ST713': {
			code: 'ST713',
			name: 'Sistemas de Recalque de Água e Esgoto',
			ementa: 'Bombas. Bombas de pistão. Sistema de "Air Lift". Carneiro Hidráulico. Bombas centrífugas. Sistemas de recalque. Instalação de sistemas elevatórios. Operação e manutenção de bombas centrífugas. Especificações técnicas para aquisição de uma bomba centrífuga. Equipamentos elétricos. Sala de máquinas. Sistemas elevatórios para esgotos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST611', 'ST613']
		},
		'ST714': {
			code: 'ST714',
			name: 'Higiene e Segurança Ocupacional',
			ementa: 'O ambiente de trabalho e os riscos à saúde. Segurança e higiene ocupacional. Prevenção de acidentes e doenças relacionadas ao trabalho. Aspectos legais (Normas Regulamentadoras). Noções de toxicologia ocupacional. Controle dos riscos nos ambientes de trabalho e de situações de emergências. Primeiros socorros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST778': {
			code: 'ST778',
			name: 'Introdução ao Trabalho de Graduação e ao Estágio Supervisionado',
			ementa: 'Definir o Plano do Trabalho de Graduação Interdisciplinar ou Estágio Supervisionado, contendo a revisão bibliográfica sobre o trabalho a ser desenvolvido, sob a orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágio para alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465']
		},
		'ST501': {
			code: 'ST501',
			name: 'Gestão de Sistemas de Saneamento',
			ementa: 'Organização de Sistemas de Saneamento. Estruturas de Planejamento e de Administração. Contratação e obras e serviços. Licitações. Gestão de Recursos Humanos. Gestão Financeira. Programas de Qualidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:10, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: ''
		}
	}
};

export default catalogue;
