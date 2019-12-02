const catalogue = {
	totalCredits: 242,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EB101', 'EB102', 'EB105', 'EB106', 'EB205']
		},
		'sem-2': {
			id: '2',
			subjects: ['EB103', 'EB104', 'EB201', 'EB202', 'EB207']
		},
		'sem-3': {
			id: '3',
			subjects: ['EB203', 'EB204', 'EB301', 'EB304', 'EB401', 'EB407']
		},
		'sem-4': {
			id: '4',
			subjects: ['EB303', 'EB305', 'EB306', 'EB404', 'EB405']
		},
		'sem-5': {
			id: '5',
			subjects: ['EB206', 'EB302', 'EB402', 'EB502', 'EB504', 'EB802']
		},
		'sem-6': {
			id: '6',
			subjects: ['EB403', 'EB406', 'EB501', 'EB503', 'EB506']
		},
		'sem-7': {
			id: '7',
			subjects: ['EB505', 'EB601', 'EB701', 'EB704', 'EB705', 'EB706']
		},
		'sem-8': {
			id: '8',
			subjects: ['EB602', 'EB603', 'EB605', 'EB702', 'EB805']
		},
		'sem-9': {
			id: '9',
			subjects: ['EB604', 'EB804', 'EB907', 'ST314', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['EB606', 'EB801', 'EB803', 'EB902', 'ELET10']
		},
		'sem-11': {
			id: '11',
			subjects: ['EB703', 'EB901', 'EB903', 'EB904', 'EB905', 'ELET11']
		},
		'sem-12': {
			id: '12',
			subjects: ['EB910', 'EB920', 'EB930']
		}
	},

	subjects: {
		'EB101': {
			code: 'EB101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#6640D9'
		},
		'EB102': {
			code: 'EB102',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Matrizes, Sistemas Lineares e Determinantes. Espaços Vetoriais de Dimensão Finita. Produto Escalar e Vetorial. Retas e Planos. Projeção Ortogonal. Distâncias. Transformações Lineares, Autovalores e Autovetores. Diagonalização. Classificação das Cônicas.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D9D9'
		},
		'EB105': {
			code: 'EB105',
			name: 'Biologia Geral',
			ementa: 'Classificação dos organismos, nomenclatura. Células procarióticas e eucarióticas. Microscopia e noções de grandeza. Noções de Biologia Molecular Principais grupos de organismos (vírus, bactérias, algas, fungos protozoários e metazoários). Noções sobre segurança em laboratórios e controle de microrganismos. Coloração de gram, cultivo de microrganismos, plaqueamento e microrganismos do ar, desinfecção e observação de organismos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96640'
		},
		'EB106': {
			code: 'EB106',
			name: 'Introdução à Engenharia Ambiental',
			ementa: 'A crise ambiental. Noções sobre poluição. Fontes de poluição ambiental. Ciclos biogeoquímicos. Problemas ambientais locais, regionais e globais. A Engenharia Ambiental: origem, evolução e situação atual. Atribuições e competências do engenheiro ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B3D9'
		},
		'EB205': {
			code: 'EB205',
			name: 'Metodologia Científica e Tecnológica',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos. Redação de textos técnicos. Elaboração de Relatórios. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D966'
		},
		'EB103': {
			code: 'EB103',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D98C'
		},
		'EB104': {
			code: 'EB104',
			name: 'Laboratório de Física I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B340'
		},
		'EB201': {
			code: 'EB201',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EB101'],
			color: ''
		},
		'EB202': {
			code: 'EB202',
			name: 'Química Geral',
			ementa: 'Fórmulas e equações químicas. Classificação periódica e propriedades dos elementos. Equilíbrio químico. Ligação química, estrutura e propriedades das substâncias. Reações químicas. Estequiometria. Reações redox e estados de oxidação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9B3'
		},
		'EB207': {
			code: 'EB207',
			name: 'Microbiologia Aplicada',
			ementa: 'Diversidade Microbiana. Microbiologia da água: Poluição da água. Análises microbiológicas da água e legislação. Noções de ecossistemas aquáticos. Depuração Biológica de águas residuárias. Microbiologia do tratamento de águas residuárias. Ecologia Microbiana do solo. Ciclos Biogeoquímicos. Biodegradação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB105'],
			color: ''
		},
		'EB203': {
			code: 'EB203',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB103'],
			color: ''
		},
		'EB204': {
			code: 'EB204',
			name: 'Laboratório de Física II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica. Viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB103', 'EB104'],
			color: ''
		},
		'EB301': {
			code: 'EB301',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EB201'],
			color: ''
		},
		'EB304': {
			code: 'EB304',
			name: 'Química Ambiental e Experimental',
			ementa: 'Características das águas de abastecimento. Padrões de Potabilidade. Análises físico-químicas de águas de abastecimento. Caracterização de Águas Residuárias: técnicas de amostragem, preservação de amostra e métodos de análise. Análises físico-químicas de águas residuárias. Padrões de lançamento.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB202'],
			color: ''
		},
		'EB401': {
			code: 'EB401',
			name: 'Comunicação e Expressão',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D940'
		},
		'EB407': {
			code: 'EB407',
			name: 'Climatologia',
			ementa: 'Elementos e Fatores Climáticos. Tipos de Classificação de Climas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB106'],
			color: ''
		},
		'EB303': {
			code: 'EB303',
			name: 'Expressão Gráfica',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8C40D9'
		},
		'EB305': {
			code: 'EB305',
			name: 'Química Orgânica Aplicada',
			ementa: 'Nomenclatura geral dos compostos orgânicos. Ácidos e bases orgânicas. Hidrocarbonetos: Orbitais híbridos, propriedades, benzeno e seus derivados, principais reações, noções de estereoquímica, reações radicalares e impactos ambientais. Reações de haletos orgânicos. Álcoois. Éteres. Ácidos carboxílicos e derivados. Ésteres, óleos, gorduras relacionados aos alimentos: classificação, grupos funcionais, características químicas e reações de interesse ambiental. Aldeídos e cetonas. Fármacos e estrogênios ambientais: estruturas, identificação, características químicas e principais reações. Defensivos agrícolas: principais estruturas, propriedades químicas, predição de compostos derivados. Compostos nitrogenados: estruturas, propriedades físico-químicas, principais reações, usos e disposição no ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB202'],
			color: ''
		},
		'EB306': {
			code: 'EB306',
			name: 'Ética, Educação e Ambiente',
			ementa: 'Educação Ambiental. A relação ser Humano-Natureza e as Relações Sociais. A Responsabilidade Social sobre as Mudanças Globais. Valor social. A interdisciplinaridade como abordagem para a resolução de problemas. Metodologias participativas em trabalhos sociais. Estratégias de trabalho.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94066'
		},
		'EB404': {
			code: 'EB404',
			name: 'Geologia e Pedologia',
			ementa: 'Noções gerais de geologia. Identificação de rochas. Mapeamento geotécnico. Métodos geofísicos aplicados a estudos ambientais. Decomposição das rochas e formação dos solos. Pedologia dos solos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4040D9'
		},
		'EB405': {
			code: 'EB405',
			name: 'Mecânica dos Sólidos',
			ementa: 'Estática, conceitos fundamentais. Equilíbrio de um ponto material. Forças concentradas e distribuídas. Momento de uma força. Centro de gravidade e centroide. Momentos de inércia. Vínculos e ligações. Equilíbrio de corpos rígidos. Análise de estruturas. Forças internas. Dinâmica. Cinemática e cinética de partículas e de um corpo rígido.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB103', 'EB201'],
			color: ''
		},
		'EB206': {
			code: 'EB206',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Revisão de conceitos básicos. Elementos e leis de circuitos elétricos. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB103'],
			color: ''
		},
		'EB302': {
			code: 'EB302',
			name: 'Algoritmos e Programação e Computadores I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estruturas de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4066D9'
		},
		'EB402': {
			code: 'EB402',
			name: 'Fenômenos de Transporte',
			ementa: 'Estática e cinemática de fluidos. Equações gerais da dinâmica dos fluidos. Fluidos Newtonianos e não Newtonianos. Escoamento laminar e turbulento Escoamento em dutos. Condução de calor. Convecção natural e forçada. Transferência de calor com mudança de fase. Radiação. Transferência de massa difusiva, convectiva. Transferência simultânea de calor, massa e movimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB203', 'EB301'],
			color: ''
		},
		'EB502': {
			code: 'EB502',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB303'],
			color: ''
		},
		'EB504': {
			code: 'EB504',
			name: 'Resistência dos Materiais I',
			ementa: 'Vinculação das estruturas, definições e considerações gerais. Análise de Tensões e deformações. Propriedades mecânicas dos materiais. Torção de eixos. Flexão de Vigas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB201', 'EB405'],
			color: ''
		},
		'EB802': {
			code: 'EB802',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940'
		},
		'EB403': {
			code: 'EB403',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101'],
			color: ''
		},
		'EB406': {
			code: 'EB406',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101'],
			color: ''
		},
		'EB501': {
			code: 'EB501',
			name: 'Hidráulica I',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB402'],
			color: ''
		},
		'EB503': {
			code: 'EB503',
			name: 'Mecânica dos Solos',
			ementa: 'Propriedades e índices. Identificação tactil-visual. Técnicas de amostragem, ensaios e classificação dos solos. Investigação do subsolo. Permeabilidade, compacidade, limites de consistência. Ensaios e equipamentos de laboratório. Ensaios de controle de compactação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101', 'EB404'],
			color: ''
		},
		'EB506': {
			code: 'EB506',
			name: 'Saúde Ambiental',
			ementa: 'Conceitos de Saúde. Noções de Epidemiologia. Epidemiologia Ambiental. Mudanças climáticas e o impacto na Saúde Pública. Doenças emergentes e reemergentes. Aspectos gerais das grandes endemias transmitidas por vetores no Brasil. Principais Zoonoses de interesse em Saúde Pública. Controle de vetores e da fauna sinantrópica. Noções de Vigilância Sanitária.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB207'],
			color: ''
		},
		'EB505': {
			code: 'EB505',
			name: 'Ecologia Geral e Aplicada',
			ementa: 'História da ecologia. Ecologia Evolutiva e Comportamental. Ecologia de Populações. Ecologia de Comunidade. Ecologia de Ecossistemas. Biologia da Conservação e Diversidade Biológica. Mudanças Globais e Desenvolvimento Sustentável.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB105'],
			color: ''
		},
		'EB601': {
			code: 'EB601',
			name: 'Hidráulica II',
			ementa: 'Canais. Regimes de escoamento. Movimento uniforme. Movimento gradualmente variado. Ressalto hidráulico. Curvas de remanso. Vertedores. Barragens tomadas d\'água. Ensecadeiras. Reservatórios.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB501'],
			color: ''
		},
		'EB701': {
			code: 'EB701',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB304', 'EB404'],
			color: ''
		},
		'EB704': {
			code: 'EB704',
			name: 'Economia e Finanças',
			ementa: 'Introdução à Economia; economia política e marxista. Introdução à teoria do consumidor e teoria do mercado. Introdução à engenharia econômica. Tipos de investimento e métodos de análise de investimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA440'],
			color: '#D940B3'
		},
		'EB705': {
			code: 'EB705',
			name: 'Recursos Energéticos e Meio Ambiente',
			ementa: 'Recursos energéticos e matriz energética do Brasil. Atividades antrópicas, demanda de energia e desenvolvimento socioeconômico. Disponibilidade de fontes e avaliação do potencial de geração de energia. Energia elétrica: fundamentos sobre geração, transmissão e distribuição. Usinas hidroelétricas, termoelétricas e nucleares. Energia solar. Energia eólica. Energia fóssil. Energia da biomassa. Impactos ambientais decorrentes da geração, transmissão, disponibilidade e oferta de energia no desenvolvimento regional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#B340D9'
		},
		'EB706': {
			code: 'EB706',
			name: 'Recuperação de Áreas Degradadas',
			ementa: 'Conceitos de degradação e recuperação; ecologia florestal, restauração de processos ecológicos, procedimentos para recuperação de áreas degradadas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#8CD940'
		},
		'EB602': {
			code: 'EB602',
			name: 'Operações Unitárias',
			ementa: 'Operações de separação como adsorção, absorção, troca de íons, processos com membranas. Operações unitárias no transporte de gases diversos e ar comprimido: ventiladores, sopradores e compressores. Operações unitárias de troca térmica: trocadores de calor, evaporadores, tipos de caldeiras. Princípios básicos envolvidos nas operações de: psicrometria e secagem, agitação e mistura de fluídos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB402'],
			color: ''
		},
		'EB603': {
			code: 'EB603',
			name: 'Ciência e Tecnologia dos Materiais',
			ementa: 'Introdução a Ciência dos Materiais. Materiais de construção. Aglomerantes. Agregados. Argamassas. Concreto: propriedades, produção e dosagem. Aço. Aplicação de materiais reciclados. Ensaios de laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98C40'
		},
		'EB605': {
			code: 'EB605',
			name: 'Monitoramento Ambiental',
			ementa: 'Monitoramento da qualidade da água; programas de controle. Monitoramento da qualidade do ar; programas de controle. Amostragem do solo e de águas subterrâneas. Relatórios de Qualidade do Ar, das Águas e do Solo. Normas. Amostragem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB106'],
			color: ''
		},
		'EB702': {
			code: 'EB702',
			name: 'Sistemas de Abastecimento e Tratamento de Água',
			ementa: 'Sistemas de Abastecimento de Água; Tecnologias de Tratamento de Água; Tratamento de Água em Ciclo Completo; Desinfecção; Filtração Direta Ascendente; Filtração Direta Descendente; Dupla Filtração; Floto-Filtração; Filtração em Múltiplas Etapas; Tratamento dos Resíduos Gerados nas Estações de Tratamento de Água.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EB501', 'EB601'],
			color: ''
		},
		'EB805': {
			code: 'EB805',
			name: 'Hidrologia das Águas Subterrâneas',
			ementa: 'Recursos hídricos. Tipos de aqüífero. Origem e distribuição das águas subterrâneas. Processos físicos do fluxo de água em meios porosos e fraturados. Métodos de investigação das águas subsuperficiais e subterrâneas. Noções de hidrogeoquímica de águas subterrâneas. Físico-química dos processos de contaminação de águas subterrâneas. Processos de descontaminação e remediação de áreas contaminadas. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB701'],
			color: ''
		},
		'EB604': {
			code: 'EB604',
			name: 'Toxicologia Regulatória',
			ementa: 'Conceitos básicos de toxicologia, agentes tóxicos, avaliação da toxicidade e da exposição. Principais tipos de contaminantes químicos, natureza e modo de ação. Noções sobre avaliação de risco, doses de referência e derivação de critérios de qualidade ambiental. Principais regulamentações brasileiras e internacionais e suas interfaces com a toxicologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB304'],
			color: ''
		},
		'EB804': {
			code: 'EB804',
			name: 'Sistemas de Esgotamento e Tratamento de Águas Residuárias',
			ementa: 'Sistemas de Esgotamento. Alternativas para tratamento de águas residuárias. Caracterização de águas residuárias. Transferência de oxigênio. Processos biológicos para tratamento de águas residuárias: Processos aeróbios, anaeróbios e combinados. Processos químicos e físico-químicos para tratamento de águas residuárias. Desinfecção de águas residuárias. Tratamento e disposição de lodos gerados em estações de tratamento de águas residuárias.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EB501', 'EB601'],
			color: ''
		},
		'EB907': {
			code: 'EB907',
			name: 'Produção Mais Limpa',
			ementa: 'Identificação de aspectos e impactos ambientais em processos industriais. Fluxogramas de processos. Balanços materiais. Identificação de oportunidades de Produção mais Limpa (P+L). Avaliação técnica e econômica da viabilidade de implantação de alternativas de P+L. Desenvolvimento de projetos de P+L.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB602'],
			color: ''
		},
		'ST314': {
			code: 'ST314',
			name: 'Segurança, Saúde e Meio Ambiente',
			ementa: 'Meio ambiente do trabalho e social: riscos à saúde das pessoas. Segurança, higiene e saúde. Prevenção de acidentes e doenças relacionadas ao meio ambiente do trabalho. Controle dos riscos no meio ambiente do trabalho com ênfase em ruído e vibrações. Ruído e vibrações no meio ambiente social. Aspectos legais - Normas Regulamentadoras. Situações de emergências e primeiros socorros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#408CD9'
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'EB606': {
			code: 'EB606',
			name: 'Gerenciamento de Resíduos Sólidos',
			ementa: 'Classificação de Resíduos. Política Nacional de Resíduos. Técnicas de amostragem e caracterização dos resíduos. Etapas do gerenciamento de resíduos sólidos: urbanos, de serviços de saúde, industriais e especiais. Avaliação para definição sobre a disposição final dos resíduos. Normas técnicas e legislação específica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB304', 'EB404'],
			color: ''
		},
		'EB801': {
			code: 'EB801',
			name: 'Sistemas de Informações Geográficas',
			ementa: 'Elementos essenciais do SIG. Estrutura de dados. Vetorial e Matricial. Aquisição de dados. Gerenciamento de dados. Análise de dados. Fundamentos e técnicas de análise espacial. Exemplos e aplicações de uso do SIG em engenharia ambiental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB502'],
			color: ''
		},
		'EB803': {
			code: 'EB803',
			name: 'Controle da Poluição do Ar',
			ementa: 'Caracterização de poluentes atmosféricos. Tipos de equipamentos de controle de poluição do ar. Seleção de equipamento. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB605'],
			color: ''
		},
		'EB902': {
			code: 'EB902',
			name: 'Direito e Legislação Ambiental',
			ementa: 'Fundamentos do direito ambiental e questões de direito ambiental internacional. O meio ambiente na Constituição Federal. O licenciamento ambiental. Infrações e sanções administrativas. O código florestal e a legislação de proteção da flora. Responsabilidade penal. Condutas tipificadas como crime ambiental. Responsabilidade penal da pessoa natural. Das pessoas jurídicas e dos entes coletivos. Sanções penais à luz da lei de crimes ambientais. Ação civil pública.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA460'],
			color: '#D940D9'
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'EB703': {
			code: 'EB703',
			name: 'Construção e Meio Ambiente',
			ementa: 'Impactos ambientais da construção civil. Resíduos de Construção Civil: definições, gerenciamento e legislação. Reciclagem de RCC. Projetos de Áreas de transbordo, usinas de reciclagem e aterros de RCC.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#D94040'
		},
		'EB901': {
			code: 'EB901',
			name: 'Modelos Computacionais para Sistemas Ambientais',
			ementa: 'Aplicação de modelos computacionais no estudo de sistemas do meio ambiente.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB302', 'EB406'],
			color: ''
		},
		'EB903': {
			code: 'EB903',
			name: 'Avaliação dos Impactos Ambientais',
			ementa: 'Documentação jurídica na área ambiental: conceitos, tratamentos e aplicação. Estudos de impacto ambiental: exigências legais e métodos de avaliação. Métodos de avaliação EIA/RIMA. Análise de risco e programas de medidasemergenciais. Auditoria ambiental prévia e pós implantação de obras. Remediação e recuperação ambiental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB605', 'EB606', 'EB803'],
			color: ''
		},
		'EB904': {
			code: 'EB904',
			name: 'Planejamento e Gestão Ambiental',
			ementa: 'Conceitos de gestão planejamento ambiental. Etapas e estrutura do planejamento. Gestão ambiental territorial e seus instrumentos. Instrumentos de gerenciamento ambiental e sistemas de gestão ambiental. Normas ISO 14.000, auditorias e certificações ambientais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB605', 'EB606'],
			color: ''
		},
		'EB905': {
			code: 'EB905',
			name: 'Introdução ao Trabalho de Conclusão de Curso',
			ementa: 'Definir o Plano do Trabalho do Trabalho de Conclusão de Curso, contendo a revisão bibliográfica, objetivos e metodologia sobre o trabalho a ser desenvolvido, sob a orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#D9408C'
		},
		'ELET11': {
			code: 'ELET11',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'EB910': {
			code: 'EB910',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Realização do Trabalho de Conclusão de Curso, com objetivo de aprofundar e aplicar os conhecimentos específicos das disciplinas, sob orientação de um professor.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['EB905'],
			color: ''
		},
		'EB920': {
			code: 'EB920',
			name: 'Estágio Supervisionado',
			ementa: 'Realização do Estágio Supervisionado em Engenharia Ambiental, sob orientação de um professor e um supervisor na empresa ou instituição onde o estágio será desenvolvido.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA440'],
			color: '#B3D940'
		},
		'EB930': {
			code: 'EB930',
			name: 'Atividades Complementares',
			ementa: 'Participação em Atividades Complementares. A matrícula nesta disciplina será autorizada pela Coordenação do Curso mediante apresentação de documentos comprobatórios da execução de atividades complementares por parte do aluno, de acordo com regras internas do curso, visando a contabilização, em créditos, das atividades efetuadas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA470'],
			color: '#66D940'
		}
	}
};

export default catalogue;
