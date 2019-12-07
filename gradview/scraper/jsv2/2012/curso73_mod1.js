const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST103', 'ST107', 'ST111', 'ST109', 'ST108', 'TT101']
		},
		'sem-2': {
			id: '2',
			subjects: ['ST210', 'ST207', 'ST008', 'ST305', 'ST212', 'ST209', 'ST211']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST301', 'ST307', 'ELET03', 'ST405', 'ST304', 'ST303']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST571', 'ST676', 'ST575', 'ST573', 'ST403', 'ST574', 'ST673', 'ST306']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST778', 'ST675', 'ST671', 'ST672', 'ST572', 'ST674', 'ST776', 'ELET05', 'ST777']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'ST775', 'ST773', 'ST772', 'ST774']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST001', 'ST002', 'ST003', 'ST004', 'ST005', 'ST007', 'ST009', 'ST019', 'ST090', 'TT350', 'TT601'],
		},
		'elet-2': {
			credits: 2,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['ST025', 'ST026', 'ST035', 'ST037', 'ST043', 'ST045', 'ST070', 'ST071', 'ST072', 'ST073', 'ST074', 'ST075', 'ST077', 'ST078', 'ST080', 'ST081', 'ST083', 'ST084', 'ST088', 'ST089', 'ST100', 'ST714', 'ST715'],
		},
		'elet-4': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST873', 'ST874'],
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
			color: '#97B946',
			obligatory: true
		},
		'ST107': {
			code: 'ST107',
			name: 'Biologia Aplicada I',
			ementa: 'Noções básicas sobre biologia celular e molecular. Principais grupos de organismos de importância no saneamento ambiental (microrganismos, protozoários e metazoários). Principais doenças relacionadas. Noções sobre segurança em laboratórios e controle de microrganismos. Cultura e observação microscópica.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#5FB946',
			obligatory: true
		},
		'ST108': {
			code: 'ST108',
			name: 'Química Aplicada',
			ementa: 'Desenvolvimento de conceitos fundamentais de química para entendimento de sistemas naturais através de fórmulas e equações químicas. Estrutura atômica. Classificação periódica e propriedades dos elementos. Ligações químicas, estrutura e propriedades das substâncias. Equilíbrio químico. Minerais. Polímeros naturais e sintéticos. Gases e poluentes gasosos. Noções básicas de espectrofotometria. Tratamento de dados analíticos. Experimentos ilustrando o método científico, preparação de soluções, padronização de soluções, equilíbrio ácido-base, determinação de pH de amostras ambientais.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#469DB9',
			obligatory: true
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B0',
			obligatory: true
		},
		'ST111': {
			code: 'ST111',
			name: 'Ética e Educação Ambiental',
			ementa: 'Educação Ambiental. A relação ser Humano-Natureza e as Relações Sociais. A Responsabilidade Social sobre as Mudanças Globais. Valor social. A interdisciplinaridade como abordagem para a resolução de problemas. Metodologias participativas em trabalhos sociais. Estratégias de trabalho.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A9B946',
			obligatory: true
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#8446B9',
			obligatory: true
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B95946',
			obligatory: true
		},
		'ST207': {
			code: 'ST207',
			name: 'Biologia Aplicada II',
			ementa: 'Hidrobiologia sanitária. Análises bacteriológicas da água (Colimetria). A água como meio ecológico. Cíclos Biogeoquímicos. Problemas causados por organismos ao abastecimento. Noções de ecossistemas aquáticos. Controle de organismos em águas de abastecimento. Efeitos biológicos da poluição. Depuração Biológica de águas residuárias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST107'],
			color: '#5FB946',
			obligatory: true
		},
		'ST209': {
			code: 'ST209',
			name: 'Física Aplicada II',
			ementa: 'Oscilações. Ondas mecânicas. Deformações e elasticidade. Noções de hidrostática e hidrodinâmica. Termologia. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST109'],
			color: '#46B9B0',
			obligatory: true
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97E46',
			obligatory: true
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466B',
			obligatory: true
		},
		'ST212': {
			code: 'ST212',
			name: 'Química Orgânica Aplicada',
			ementa: 'Estrutura eletrônica e ligação. Ácidos e bases orgânicas. Hidrocarbonetos: nomenclatura, propriedades, HPAs e impactos ambientais. Ésteres, óleos, gorduras e alimentos: classificação, grupos funcionais, características químicas e reações de interesse no saneamento. Fármacos e estrogênios ambientais: estruturas, identificação, características químicas, reações em ETAs. Defensivos agrícolas: principais estruturas, propriedades químicas, predição de compostos derivados. Compostos nitrogenados: nomenclatura, estruturas, propriedades físico-químicas, principais reações, usos e disposição no ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4C46B9',
			obligatory: true
		},
		'ST305': {
			code: 'ST305',
			name: 'Química Sanitária e Laboratório de Saneamento I',
			ementa: 'Importância da água. Parâmetros físicos e químicos indicadores de qualidade da água em saneamento ambiental: conceitos, aplicações e métodos para determinação em laboratório.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST108'],
			color: '#469DB9',
			obligatory: true
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#97B946',
			obligatory: true
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST209', 'TT101'],
			color: '#6580B5',
			obligatory: true
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4665B9',
			obligatory: true
		},
		'ST307': {
			code: 'ST307',
			name: 'Saúde Pública',
			ementa: 'Conceitos de Saúde. Epidemiologia. Vigilância Epidemiológica. Ecologia das doenças (Vetores). Doenças emergentes e reemergentes. Vigilância Sanitária. Aspectos gerais das grandes epidemias no Brasil. Resíduos sólidos de serviços de saúde. Saúde Ambiental.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST207'],
			color: '#5FB946',
			obligatory: true
		},
		'ST405': {
			code: 'ST405',
			name: 'Química Sanitária e Laboratório de Saneamento II',
			ementa: 'Meio aquático. Poluição. Lançamento de águas residuárias: Características físico-químicas dos esgotos domésticos, efluentes industriais e lançamentos. Auto-depuração de corpos d\'água. Legislação ambiental Federal e Estadual aplicada a padrões de lançamentos de efluentes. Análises físico-químicas dos principais parâmetros e Legislação Ambiental. Estações de tratamentos de esgotos e efluentes (ETEs).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST305'],
			color: '#469DB9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ST306': {
			code: 'ST306',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'TT101'],
			color: '#9F4692',
			obligatory: true
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST303'],
			color: '#6580B5',
			obligatory: true
		},
		'ST571': {
			code: 'ST571',
			name: 'Geologia Ambiental',
			ementa: 'Noções gerais de geologia. Noções gerais de topografia. Processos e produtos sedimentares. Cartografia aplicada a estudos ambientais. Noções gerais de sensoreamento remoto. Mapeamento geotécnico. Poluição de águas subterrâneas. Elementos de geotecnia. Métodos geofísicos aplicados a estudos ambientais. Ambientes deposicionais e sua fisiografia. Estrutura e análise de estudos de impacto ambiental relacionados à geologia. Origem e evolução dos solos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B98A',
			obligatory: true
		},
		'ST573': {
			code: 'ST573',
			name: 'Toxicologia Ambiental',
			ementa: 'Conceitos básicos de toxicologia, agentes tóxicos, toxicocinética e toxicodinâmica. Principais tipos de poluentes químicos, natureza e modo de ação. Testes de toxicidade e genotoxicidade. Biomarcadores de efeito e exposição. Noções sobre avaliação de risco e derivação de critérios de qualidade ambiental.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: true
		},
		'ST574': {
			code: 'ST574',
			name: 'Processos Industriais',
			ementa: 'Noções sobre processamentos industriais. Fluxogramas de processos. Operações unitárias. Levantamentos industriais. Produção mais Limpa (P+L). Visitas a indústrias.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'TT101'],
			color: '#9F4692',
			obligatory: true
		},
		'ST575': {
			code: 'ST575',
			name: 'Química da Poluição Ambiental',
			ementa: 'Fenômenos químicos da poluição: hídrica, atmosférica, do solo e sua dinâmica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: true
		},
		'ST673': {
			code: 'ST673',
			name: 'Estudos Econômicos da Poluição',
			ementa: 'Custos ambientais. Custos de implantação e manutenção de sistemas de controle. Componente ambiental na análise de custos da empresa. Linhas de financiamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST211', 'TT101'],
			color: '#9F4692',
			obligatory: true
		},
		'ST676': {
			code: 'ST676',
			name: 'Ecologia Aplicada ao Saneamento',
			ementa: 'Conceitos básicos sobre ecologia, o ambiente físico e suas variações, comunidades biológicas e sua estrutura, ciclagem de nutrientes. Intervenção antrópica, transporte, distribuição e transformação de agentes químicos, bioacumulação e biomagnificação. Avaliação integrada da qualidade ambiental e regulamentação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST207'],
			color: '#5FB946',
			obligatory: true
		},
		'ST572': {
			code: 'ST572',
			name: 'Tratamento de Efluentes Líquidos',
			ementa: 'Caracterização de efluentes líquidos. Tipos de sistemas de tratamento. Seleção de sistema. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: true
		},
		'ST671': {
			code: 'ST671',
			name: 'Gerenciamento de Resíduos Sólidos',
			ementa: 'Técnicas de amostragem. Caracterização dos resísuos. Avaliação para definição sobre a disposição final dos resíduos. Controle de resíduos sólidos: acondicionamento, coleta, transporte, armazenamento. Técnicas de tratamento. Normas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: true
		},
		'ST672': {
			code: 'ST672',
			name: 'Monitoramento Ambiental',
			ementa: 'Monitoramento da qualidade da água; programas de controle. Monitoramento da qualidade do ar; programas de controle. Normas. Amostragem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST575'],
			color: '#469DB9',
			obligatory: true
		},
		'ST674': {
			code: 'ST674',
			name: 'Planejamento Ambiental',
			ementa: 'Teoria do planejamento ambiental. Modelos e instrumentos de planejamento ambiental. Inserção do planejamento no sistema de gestão ambiental. Cidades sustentáveis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#B96B46',
			obligatory: true
		},
		'ST675': {
			code: 'ST675',
			name: 'Controle de Poluição do Ar',
			ementa: 'Caracterização de poluentes atmosféricos. Tipos de equipamentos de controle de poluição do ar. Seleção de equipamento. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST575'],
			color: '#469DB9',
			obligatory: true
		},
		'ST776': {
			code: 'ST776',
			name: 'Poluição Sonora e Vibrações',
			ementa: 'Noções básicas sobre acústica. Pressão sonora e nível de pressão sonora. Propagação do som. Adição e subtração de níveis de pressão sonora. A audição humana. Influência dos níveis de ruído na saúde humana: perda auditiva. Influência da vibração na saúde humana: sistema esquelético, articulações e sistema circulatório. Fontes de geração de ruídos e vibrações. Metodologia de avaliação (Norma Regulamentadora 15, NHO 01 da Fundacentro, Normas da ABNT). Técnicas de minimização de ruídos e vibrações. Normas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST209'],
			color: '#46B9B0',
			obligatory: true
		},
		'ST777': {
			code: 'ST777',
			name: 'Legislação Ambiental',
			ementa: 'Fundamentos do direito ambiental e questões de direito ambiental internacional. O meio ambiente na Constituição Federal. O licenciamento ambiental. Infrações e sanções administrativas. O código florestal e a legislação de proteção da flora. Responsabilidade penal. Condutas tipificadas como crime ambiental. Responsabilidade penal da pessoa natural. Das pessoas jurídicas e dos entes coletivos. Sanções penais à luz da lei de crimes ambientais. Ação civil pública.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#A946B9',
			obligatory: true
		},
		'ST778': {
			code: 'ST778',
			name: 'Introdução ao Trabalho de Graduação e ao Estágio Supervisionado',
			ementa: 'Definir o Plano do Trabalho de Graduação Interdisciplinar ou Estágio Supervisionado, contendo a revisão bibliográfica sobre o trabalho a ser desenvolvido, sob a orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágio para alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#46B965',
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
		'ST772': {
			code: 'ST772',
			name: 'Modelos Computacionais para Sistemas Ambientais',
			ementa: 'Aplicação de modelos computacionais no estudo de sistemas do meio ambiente.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST672'],
			color: '#469DB9',
			obligatory: true
		},
		'ST773': {
			code: 'ST773',
			name: 'Avaliação de Impacto Ambiental',
			ementa: 'Documentação jurídica na área ambiental: conceitos, tratamentos e aplicação. Estudos de impacto ambiental: exigências legais e métodos de avaliação. Métodos de avaliação EIA/RIMA. Análise de risco e programas de medidas emergenciais. Auditoria ambiental prévia e pós implantação de obras. Remediação e recuperação ambiental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST671', 'ST672', 'ST675'],
			color: '#469DB9',
			obligatory: true
		},
		'ST774': {
			code: 'ST774',
			name: 'Gerenciamento Ambiental',
			ementa: 'Modelos de gerenciamento ambiental em empresas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST574', 'ST672', 'ST673'],
			color: '#81639F',
			obligatory: true
		},
		'ST775': {
			code: 'ST775',
			name: 'Poluição Industrial: Estudo de Caso',
			ementa: 'Levantamento, diagnóstico e proposição de medidas de controle ambiental na indústria.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST574', 'ST575', 'ST675'],
			color: '#6480AC',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
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
			color: '#5F46B9',
			obligatory: false
		},
		'ST002': {
			code: 'ST002',
			name: 'Inglês Técnico',
			ementa: 'Traduções e Interpretações de Textos Técnicos. Vocabulário e Gramática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B953',
			obligatory: false
		},
		'ST003': {
			code: 'ST003',
			name: 'Teorias da Qualidade',
			ementa: 'Conceitos de Qualidade. As Teorias da Qualidade. Normas para a Qualidade. Controle Estatístico do Processo. Evolução Histórica da Administração da Qualidade.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B978',
			obligatory: false
		},
		'ST004': {
			code: 'ST004',
			name: 'Legislação Trabalhista e Segurança do Trabalho',
			ementa: 'Direito Trabalhista: Conceito e formação histórica. O empregador e o empregado. Contrato de trabalho e suas alterações. Salário e remuneração. Estabilidade. Normas gerais de proteção ao trabalho. A justiça do trabalho. Previdência social. Segurança do trabalho: Introdução à segurança, higiene e medicina do trabalho. Avaliação e controle dos riscos profissionais. Normas e leis. Proteção contra incêndios. Responsabilidades sobre acidentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4678B9',
			obligatory: false
		},
		'ST005': {
			code: 'ST005',
			name: 'Relações Humanas',
			ementa: 'Das ciências do comportamento: individual e social. Princípios éticos e hierárquicos. Da divisão das pessoas: naturais e jurídicas. Da responsabilidade civil. Direitos Humanos e suas implicações nas relações individuais. Noções de Direito Civil.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#46B0B9',
			obligatory: false
		},
		'ST007': {
			code: 'ST007',
			name: 'Humanidades',
			ementa: 'Estrutura do mundo moderno. Ação do indivíduo na atualidade. Os veículos de comunicação em massas. As artes e sua conceituação. O indivíduo como componente de um mundo cultural. O cinema, o teatro e sua importância no mundo moderno. Os grandes conflitos e suas consequências no plano cultural. Relacionamento entre os povos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4CB946',
			obligatory: false
		},
		'ST009': {
			code: 'ST009',
			name: 'Regulamentação e Política Ambiental',
			ementa: 'Legislação ambiental na constituição federal. Legislação ambiental na constituição estadual. Política nacional do meio ambiente. História do movimento ambientalista no Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9467E',
			obligatory: false
		},
		'ST019': {
			code: 'ST019',
			name: 'A Sociedade e os Portadores de Necessidades Especiais',
			ementa: 'Histórico. Legislação. Desenho universal. Inclusão. Tecnologia assistiva. O trabalho e a legislação. Trabalho prático.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#468AB9',
			obligatory: false
		},
		'ST025': {
			code: 'ST025',
			name: 'Computação Gráfica Aplicada I',
			ementa: 'Desenho técnico auxiliado por computador em duas dimensões.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST103'],
			color: '#97B946',
			obligatory: false
		},
		'ST026': {
			code: 'ST026',
			name: 'Computação Gráfica Aplicada II',
			ementa: 'Desenho técnico auxiliado por computador em três dimensões.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST025'],
			color: '#97B946',
			obligatory: false
		},
		'ST035': {
			code: 'ST035',
			name: 'Tratamento de Efluentes por Processos Químicos Avançados',
			ementa: 'Tratamento de Efluentes por meio de Processos Oxidativos Avançados (POAs). Estudos dos Processos de Tratamento empregando Ozônio, Peróxido de Hidrogênio, Reação de Fenton. Processos Fotocatalítico, Eletroquímico e Fotoeletroquímico. Estudos mecanísticos de cada método. Práticas empregando Fotocatálise e processos Eletroquímicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST572'],
			color: '#469DB9',
			obligatory: false
		},
		'ST037': {
			code: 'ST037',
			name: 'Microbiologia Aplicada',
			ementa: 'Diversidade microbiana. Ecologia Microbiana do solo. Xenobióticos no solo. Biodegradação e Biorremediação. Respirometria.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST207'],
			color: '#5FB946',
			obligatory: false
		},
		'ST043': {
			code: 'ST043',
			name: 'Biomatemática',
			ementa: 'Evolução dos modelos. Formulação e estudo de modelos matemáticos ligados à biomatemática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT101'],
			color: '#8446B9',
			obligatory: false
		},
		'ST045': {
			code: 'ST045',
			name: 'Hidrologia das Águas Subterrâneas',
			ementa: 'Recursos hídricos. Tipos de aquífero. Origem e distribuição das águas subterrâneas. Processos físicos do fluxo de água em meios porosos e fraturados. Métodos de investigação das águas subsuperficiais e subterrâneas. Noções de hidrogeoquímica de águas subterrâneas. Físico-química dos processos de contaminação de águas subterrâneas. Processos de descontaminação e remediação de áreas contaminadas. Estudos de casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST306'],
			color: '#9F4692',
			obligatory: false
		},
		'ST070': {
			code: 'ST070',
			name: 'Radiações Não Ionizantes',
			ementa: 'Terminologia utilizada. Campo elétrico, campo magnético e campo eletromagnético. Influência da distância nos campos eletromagnéticos. Campo próximo e campo distante. Radiofreqüência, microondas, radiações infravermelhas, radiações ultravioletas, laser - conceituação, limites de tolerância e medidas de controle. Normas internacionais. Avaliação da exposição a radiações não-ionizantes. Efeitos biológicos das radiações não-ionizantes nos seres humanos. Exemplo de trabalhos e processos utilizando radiação não-ionizante e seu controle.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST209'],
			color: '#46B9B0',
			obligatory: false
		},
		'ST071': {
			code: 'ST071',
			name: 'Ciência da Mudança Global',
			ementa: 'Histórico das mudanças globais. Clima e Sistemas hidrológicos. Processos estratosféricos e influência solar. Ciclos biogeoquímicos. Sistemas ecológicos e seu desenvolvimento. Evolução humana e sua interação com o meio ambiente.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#46B99D',
			obligatory: false
		},
		'ST072': {
			code: 'ST072',
			name: 'Recursos Energéticos e Meio Ambiente',
			ementa: 'Recursos energéticos e matriz energética do Brasil. Atividades antrópicas, demanda de energia e desenvolvimento socioeconômico. Disponibilidade de fontes e avaliação do potencial de geração de energia. Energia elétrica: fundamentos sobre geração, transmissão e distribuição. Usinas hidroelétricas, termoelétricas e nucleares. Energia solar. Energia eólica. Energia fóssil. Energia da biomassa. Impactos ambientais decorrentes da geração, transmissão, disponibilidade e oferta de energia no desenvolvimento regional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA430'],
			color: '#B9B646',
			obligatory: false
		},
		'ST073': {
			code: 'ST073',
			name: 'Qualidade do Meio Ambiente e Normas Específicas',
			ementa: 'Noções sobre qualidade. Desenvolvimento histórico da qualidade nas organizações. Noções sobre as normas ISO 9000. Planejamento estratégico nas organizações e sua importância para a gestão ambiental. Técnicas de qualidade aplicadas ao meio ambiente. Normas internacionais: Responsable Care (Atuação Responsável - ABIQUIM), ISO 14001.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'ST074': {
			code: 'ST074',
			name: 'Técnica de Amostragem de Poluentes Atmosféricos',
			ementa: 'Metodologia de avaliação das características qualitativas e quantitativas de amostragem. Normas técnicas específicas de amostragem. Realização prática de amostragem de chaminé.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST675'],
			color: '#469DB9',
			obligatory: false
		},
		'ST075': {
			code: 'ST075',
			name: 'Tópicos Especiais em Controle Ambiental',
			ementa: 'Estudos de assuntos relevantes introduzidos na área de interesse.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B99146',
			obligatory: false
		},
		'ST077': {
			code: 'ST077',
			name: 'Preservação e Conservação de Recursos Hídricos',
			ementa: 'Usos múltiplos dos recursos hídricos. Planejamento territorial e conservação dos recursos hídricos. Uso múltiplo e integrado de recursos hídricos. Avaliação de impactos ambientais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: false
		},
		'ST078': {
			code: 'ST078',
			name: 'Meio Ambiente e Desenvolvimento',
			ementa: 'Temas ligados aos grandes desafios atuais envolvendo questões ambientais: aquecimento global e clima mundial, matriz energética, consumo consciente, geração de resíduos, consumo da água, preservação de florestas naturais, sustentabilidade (Agenda 21, Relatório Brundtland, Protocolo de Kyoto).',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#7246B9',
			obligatory: false
		},
		'ST080': {
			code: 'ST080',
			name: 'Radiação Ionizante',
			ementa: 'Terminologia utilizada. Conceituação de acidente, irradiação, contaminação, monitoração e dose. Limites de doses. Normas da CNEN - Comissão Nacional de Energia Nuclear. Introdução à proteção radiológica. Avaliação da exposição a radiações ionizantes. Efeitos biológicos das radiações ionizantes nos seres humanos. Métodos de controle da exposição. Exemplo de trabalhos e processos utilizando radiação ionizante e seu controle. O descarte de fontes radioativas e do lixo nuclear. Principais acidentes ambientais envolvendo materiais radioativos registrados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST209'],
			color: '#46B9B0',
			obligatory: false
		},
		'ST081': {
			code: 'ST081',
			name: 'Cidade e Meio Ambiente',
			ementa: 'Urbanização brasileira: políticas e influência no meio ambiente. Iniciativas locais de desenvolvimento sustentável. Desenvolvimento e políticas públicas de sucesso. Riscos ambientais. Dimensões sociais e econômicas. Pesquisa de campo.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#9746B9',
			obligatory: false
		},
		'ST083': {
			code: 'ST083',
			name: 'Recuperação de Áreas Degradadas',
			ementa: 'Conceitos de degradação e recuperação; ecologia florestal, restauração de processos ecológicos, procedimentos para recuperação de áreas degradadas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B9A346',
			obligatory: false
		},
		'ST084': {
			code: 'ST084',
			name: 'Cromatografia Gasosa Aplicada ao Saneamento',
			ementa: 'Definições básicas da cromatografia gasosa e evolução histórica; Esquema de um cromatógrafo a gás; Instrumentação básica; Parâmentros fundamentais; Fases estacionárias; Colunas cromatográficas; Detectores: Características básicas; Detector por Ionização em Chama (DIC); Análises Quantitativas e Qualitativas aplicadas a amostras ambientais; Coleta e preservação de amostras; Pré-concentração de amostras ambientais; Padronização; Curvas de calibração.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: false
		},
		'ST088': {
			code: 'ST088',
			name: 'Tópicos Especiais em Controle Ambiental I',
			ementa: 'Estudos de assuntos relevantes introduzidos na área de interesse.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#84B946',
			obligatory: false
		},
		'ST089': {
			code: 'ST089',
			name: 'Tópicos Especiais em Controle Ambiental II',
			ementa: 'Estudos de assuntos relevantes introduzidos na área de interesse.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B94691',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B6',
			obligatory: false
		},
		'ST100': {
			code: 'ST100',
			name: 'Tópicos Especiais em Controle Ambiental III',
			ementa: 'Estudos de assuntos relevantes introduzidos na área de interesse.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#72B946',
			obligatory: false
		},
		'ST714': {
			code: 'ST714',
			name: 'Higiene e Segurança Ocupacional',
			ementa: 'O ambiente de trabalho e os riscos à saúde. Segurança e higiene ocupacional. Prevenção de acidentes e doenças relacionadas ao trabalho. Aspectos legais (Normas Regulamentadoras). Noções de toxicologia ocupacional. Controle dos riscos nos ambientes de trabalho e de situações de emergências. Primeiros socorros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946A3',
			obligatory: false
		},
		'ST715': {
			code: 'ST715',
			name: 'Técnicas de Separação e Análises Cromatográficas Aplicadas ao Meio Ambiente',
			ementa: 'Conceitos em separação química. Definições básicas da cromatografia e evolução histórica. Cromatografia líquida. Equipamentos para HPLC. Cromatografia gasosa. Instrumentação básica. Fases estacionárias. Colunas cromatográficas. Detectores: características básicas, análises quantitativas e qualitativas aplicadas às amostras ambientais, pré-concentração de amostras ambientais, extração líquido-líquido (ELL). Extração em fase sólida (SPE). Padronização. Calibração. Validação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST405'],
			color: '#469DB9',
			obligatory: false
		},
		'ST873': {
			code: 'ST873',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Realização do Trabalho de Graduação Interdisciplinar do Curso de Tecnologia em Controle Ambiental, com objetivo de aprofundar e aplicar os conhecimentos específicos das disciplinas, sob orientação do professor.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST778'],
			color: '#46B965',
			obligatory: false
		},
		'ST874': {
			code: 'ST874',
			name: 'Estágio Supervisionado',
			ementa: 'Realização do Estágio Supervisionado do Curso de Tecnologia em Controle Ambiental, sob orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar o estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['ST778'],
			color: '#46B965',
			obligatory: false
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94659',
			obligatory: false
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4653B9',
			obligatory: false
		}
	}
};

export default catalogue;
