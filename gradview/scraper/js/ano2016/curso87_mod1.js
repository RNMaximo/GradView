const catalogue = {
	totalCredits: 160,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EB101', 'EB105', 'EB205', 'EB303', 'ST108', 'ST571']
		},
		'sem-2': {
			id: '2',
			subjects: ['EB103', 'EB207', 'EB305', 'EB306', 'EB502', 'ST305']
		},
		'sem-3': {
			id: '3',
			subjects: ['EB203', 'EB403', 'EB705', 'ST303', 'ST310', 'ST314', 'ST405']
		},
		'sem-4': {
			id: '4',
			subjects: ['EB606', 'EB701', 'EB706', 'ST403', 'ST411', 'ST676', 'ELET8']
		},
		'sem-5': {
			id: '5',
			subjects: ['EB604', 'EB803', 'EB904', 'ST516', 'ST517', 'ELET8']
		},
		'sem-6': {
			id: '6',
			subjects: ['EB506', 'EB903', 'EB907', 'ST616', 'ST620', 'ST777', 'ELET12']
		}
	},

	subjects: {
		'EB101': {
			code: 'EB101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'EB105': {
			code: 'EB105',
			name: 'Biologia Geral',
			ementa: 'Classificação dos organismos, nomenclatura. Células procarióticas e eucarióticas. Microscopia e noções de grandeza. Noções de Biologia Molecular Principais grupos de organismos (vírus, bactérias, algas, fungos protozoários e metazoários). Noções sobre segurança em laboratórios e controle de microrganismos. Coloração de gram, cultivo de microrganismos, plaqueamento e microrganismos do ar, desinfecção e observação de organismos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EB205': {
			code: 'EB205',
			name: 'Metodologia Científica e Tecnológica',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos. Redação de textos técnicos. Elaboração de Relatórios. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EB303': {
			code: 'EB303',
			name: 'Expressão Gráfica',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ST108': {
			code: 'ST108',
			name: 'Química Aplicada',
			ementa: 'Estrutura atômica. Periodicidade Química. Ligações Químicas. Geometria e Interações Intermoleculares. Propriedades físicas da matéria. Teorias ácido-base e funções inorgânicas. Gases e poluentes atmosféricos. Balanceamento de reações químicas. Equilíbrio Químico. Processos de óxido redução. Grandezas químicas e cálculos estequiométricos. Preparo e padronização de soluções. Instrumentação elementar para análises sanitário-ambientais. Tratamento e apresentação de dados de análises químicas. Noções de cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'ST571': {
			code: 'ST571',
			name: 'Geologia Ambiental',
			ementa: 'Noções gerais de geologia. Noções gerais de topografia. Processos e produtos sedimentares. Cartografia aplicada a estudos ambientais. Noções gerais de sensoreamento remoto. Mapeamento geotécnico. Poluição de águas subterrâneas. Elementos de geotecnia. Métodos geofísicos aplicados a estudos ambientais. Ambientes deposicionais e sua fisiografia. Estrutura e análise de estudos de impacto ambiental relacionados à geologia. Origem e evolução dos solos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EB103': {
			code: 'EB103',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EB207': {
			code: 'EB207',
			name: 'Microbiologia Aplicada',
			ementa: 'Diversidade Microbiana. Microbiologia da água: Poluição da água. Análises microbiológicas da água e legislação. Noções de ecossistemas aquáticos. Depuração Biológica de águas residuárias. Microbiologia do tratamento de águas residuárias. Ecologia Microbiana do solo. Ciclos Biogeoquímicos. Biodegradação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB105']
		},
		'EB305': {
			code: 'EB305',
			name: 'Química Orgânica Aplicada',
			ementa: 'Nomenclatura geral dos compostos orgânicos. Ácidos e bases orgânicas. Hidrocarbonetos: Orbitais híbridos, propriedades, benzeno e seus derivados, principais reações, noções de estereoquímica, reações radicalares e impactos ambientais. Reações de haletos orgânicos. Álcoois. Éteres. Ácidos carboxílicos e derivados. Ésteres, óleos, gorduras relacionados aos alimentos: classificação, grupos funcionais, características químicas e reações de interesse ambiental. Aldeídos e cetonas. Fármacos e estrogênios ambientais: estruturas, identificação, características químicas e principais reações. Defensivos agrícolas: principais estruturas, propriedades químicas, predição de compostos derivados. Compostos nitrogenados: estruturas, propriedades físico-químicas, principais reações, usos e disposição no ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB202']
		},
		'EB306': {
			code: 'EB306',
			name: 'Ética, Educação e Ambiente',
			ementa: 'Educação Ambiental. A relação ser Humano-Natureza e as Relações Sociais. A Responsabilidade Social sobre as Mudanças Globais. Valor social. A interdisciplinaridade como abordagem para a resolução de problemas. Metodologias participativas em trabalhos sociais. Estratégias de trabalho.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EB502': {
			code: 'EB502',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB303']
		},
		'ST305': {
			code: 'ST305',
			name: 'Química Sanitária e Laboratório de Saneamento I',
			ementa: 'Importância da água. Parâmetros físicos e químicos indicadores de qualidade da água em saneamento ambiental: conceitos, aplicações e métodos para determinação em laboratório. Amostragem de corpos hídricos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST108']
		},
		'EB203': {
			code: 'EB203',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB103']
		},
		'EB403': {
			code: 'EB403',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101']
		},
		'EB705': {
			code: 'EB705',
			name: 'Recursos Energéticos e Meio Ambiente',
			ementa: 'Recursos energéticos e matriz energética do Brasil. Atividades antrópicas, demanda de energia e desenvolvimento socioeconômico. Disponibilidade de fontes e avaliação do potencial de geração de energia. Energia elétrica: fundamentos sobre geração, transmissão e distribuição. Usinas hidroelétricas, termoelétricas e nucleares. Energia solar. Energia eólica. Energia fóssil. Energia da biomassa. Impactos ambientais decorrentes da geração, transmissão, disponibilidade e oferta de energia no desenvolvimento regional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430']
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*EB103/*ST209', '*TT101']
		},
		'ST310': {
			code: 'ST310',
			name: 'Caracterização e Monitoramento de Poluentes do Ar e do Solo',
			ementa: 'Poluentes orgânicos e inorgânicos. Fenômenos químicos da poluição do ar, solo e águas subterrâneas. Monitoramento da qualidade do ar. Monitoramento do solo e águas subterrâneas. Noções sobre processos de recuperação de solos e águas subterrâneas contaminadas. Normas técnicas e legislação específica.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST108']
		},
		'ST314': {
			code: 'ST314',
			name: 'Segurança, Saúde e Meio Ambiente',
			ementa: 'Meio ambiente do trabalho e social: riscos à saúde das pessoas. Segurança, higiene e saúde. Prevenção de acidentes e doenças relacionadas ao meio ambiente do trabalho. Controle dos riscos no meio ambiente do trabalho com ênfase em ruído e vibrações. Ruído e vibrações no meio ambiente social. Aspectos legais - Normas Regulamentadoras. Situações de emergências e primeiros socorros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST405': {
			code: 'ST405',
			name: 'Química Sanitária e Laboratório de Saneamento II',
			ementa: 'Lançamento de águas residuárias: Características físico-químicas. Legislação ambiental Federal e Estadual aplicada a padrões de lançamento. Análises físico-químicas dos principais parâmetros. Amostragem em estações de tratamento de águas residuárias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST305']
		},
		'EB606': {
			code: 'EB606',
			name: 'Gerenciamento de Resíduos Sólidos',
			ementa: 'Classificação de Resíduos. Política Nacional de Resíudos. Técnicas de amostragem e caracterização dos resíduos. Etapas do gerenciamento de resíduos sólidos: urbanos, de serviços de saúde, industriais e especiais. Avaliação para definição sobre a disposição final dos resíduos. Normas técnicas e legislação específica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB304', 'EB404']
		},
		'EB701': {
			code: 'EB701',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB304', 'EB404/*ST211', '*ST301']
		},
		'EB706': {
			code: 'EB706',
			name: 'Recuperação de Áreas Degradadas',
			ementa: 'Conceitos de degradação e recuperação; ecologia florestal, restauração de processos ecológicos, procedimentos para recuperação de áreas degradadas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA400']
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST303']
		},
		'ST411': {
			code: 'ST411',
			name: 'Sistemas de Abastecimento de Água',
			ementa: 'Mananciais Superficiais e Subterrâneos. Unidades Constituintes de um Sistema de Abastecimento de Água: Captação, Adução, Recalque e Distribuição. Normas e requisitos para o dimensionamento de sistemas de abastecimento de água.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303', 'ST405']
		},
		'ST676': {
			code: 'ST676',
			name: 'Ecologia Aplicada ao Saneamento',
			ementa: 'Conceitos básicos sobre ecologia, o ambiente físico e suas variações, comunidades biológicas e sua estrutura, ciclagem de nutrientes. Intervenção antrópica, transporte, distribuição e transformação de agentes químicos, bioacumulação e biomagnificação. Avaliação integrada da qualidade ambiental e regulamentação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB207']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'EB604': {
			code: 'EB604',
			name: 'Toxicologia Regulatória',
			ementa: 'Conceitos básicos de toxicologia, agentes tóxicos, avaliação da toxicidade e da exposição. Principais tipos de contaminantes químicos, natureza e modo de ação. Noções sobre avaliação de risco, doses de referência e derivação de critérios de qualidade ambiental. Principais regulamentações brasileiras e internacionais e suas interfaces com a toxicologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB304']
		},
		'EB803': {
			code: 'EB803',
			name: 'Controle da Poluição do Ar',
			ementa: 'Caracterização de poluentes atmosféricos. Tipos de equipamentos de controle de poluição do ar. Seleção de equipamento. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB605']
		},
		'EB904': {
			code: 'EB904',
			name: 'Planejamento e Gestão Ambiental',
			ementa: 'Conceitos de gestão planejamento ambiental. Etapas e estrutura do planejamento. Gestão ambiental territorial e seus instrumentos. Instrumentos de gerenciamento ambiental e sistemas de gestão ambiental. Normas ISO 14.000, auditorias e certificações ambientais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB605', 'EB606']
		},
		'ST516': {
			code: 'ST516',
			name: 'Tratamento de Águas Residuárias I',
			ementa: 'Sistema de coleta e afastamento de esgoto doméstico. Tratamentos Preliminares e Primários. Processos aeróbios, anaeróbios e combinados aplicados a tratamentos secundários. Seleção de processo. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405']
		},
		'ST517': {
			code: 'ST517',
			name: 'Tratamento de Água de Abastecimento',
			ementa: 'Tecnologias de Tratamento de Água; Sistema de Tratamento de Água de Ciclo Completo; Mistura Rápida; Tipos de coagulantes primários e auxiliares de coagulação, Unidades de mistura rápida mecanizada e hidráulica, Ensaios de Jartest. Unidades de floculação hidráulica e mecanizada. Decantação convencional de alta taxa. Flotação. Unidades de filtração. Desinfecção. Unidades de tratamento de lodos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST411']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'EB506': {
			code: 'EB506',
			name: 'Saúde Ambiental',
			ementa: 'Conceitos de Saúde. Epidemiologia. Vigilância Epidemiológica. Ecologia das doenças (vetores). Doenças emergentes e reemergentes. Vigilância Sanitária. Aspectos gerais das grandes epidemias no Brasil. Resíduos sólidos de serviços de saúde. Saúde ambiental.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB207']
		},
		'EB903': {
			code: 'EB903',
			name: 'Avaliação dos Impactos Ambientais',
			ementa: 'Documentação jurídica na área ambiental: conceitos, tratamentos e aplicação. Estudos de impacto ambiental: exigências legais e métodos de avaliação. Métodos de avaliação EIA/RIMA. Análise de risco e programas de medidasemergenciais. Auditoria ambiental prévia e pós implantação de obras. Remediação e recuperação ambiental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB605', 'EB606', 'EB803']
		},
		'EB907': {
			code: 'EB907',
			name: 'Produção Mais Limpa',
			ementa: 'Identificação de aspectos e impactos ambientais em processos industriais. Fluxogramas de processos. Balanços materiais. Identificação de oportunidades de Produção mais Limpa (P+L). Avaliação técnica e econômica da viabilidade de implantação de alternativas de P+L. Desenvolvimento de projetos de P+L.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB602']
		},
		'ST616': {
			code: 'ST616',
			name: 'Tratamento de Águas Residuárias II',
			ementa: 'Tratamentos terciários. Tecnologias Avançadas de Tratamento. Reuso de efluentes. Critérios de seleção de tecnologias. Controle operacional. Tratamento de lodos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST516']
		},
		'ST620': {
			code: 'ST620',
			name: 'Biorremediação de Áreas Contaminadas',
			ementa: 'Estudo da Microbiologia. Diversidade dos micro-organismos. Ecologia microbiana do solo e a recuperação de áreas degradadas. Biodegradação e Biorremediação. Métodos de avaliação da atividade microbiana no solo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EB207']
		},
		'ST777': {
			code: 'ST777',
			name: 'Legislação Ambiental',
			ementa: 'Fundamentos do direito ambiental e questões de direito ambiental internacional. O meio ambiente na Constituição Federal. O licenciamento ambiental. Infrações e sanções administrativas. O código florestal e a legislação de proteção da flora. Responsabilidade penal. Condutas tipificadas como crime ambiental. Responsabilidade penal da pessoa natural. Das pessoas jurídicas e dos entes coletivos. Sanções penais à luz da lei de crimes ambientais. Ação civil pública.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		}
	}
};

export default catalogue;