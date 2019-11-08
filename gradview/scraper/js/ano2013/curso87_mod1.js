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
			subjects: ['ST571', 'ST572', 'ST573', 'ST574', 'ST575', 'ELET2']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST671', 'ST672', 'ST673', 'ST674', 'ST675', 'ST676', 'ELET2']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST772', 'ST773', 'ST774', 'ST775', 'ST776', 'ST777', 'ST778']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET14']
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
			requisitos: ['ST109', 'TT101']
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
		'ST571': {
			code: 'ST571',
			name: 'Geologia Ambiental',
			ementa: 'Noções gerais de geologia. Noções gerais de topografia. Processos e produtos sedimentares. Cartografia aplicada a estudos ambientais. Noções gerais de sensoreamento remoto. Mapeamento geotécnico. Poluição de águas subterrâneas. Elementos de geotecnia. Métodos geofísicos aplicados a estudos ambientais. Ambientes deposicionais e sua fisiografia. Estrutura e análise de estudos de impacto ambiental relacionados à geologia. Origem e evolução dos solos.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST572': {
			code: 'ST572',
			name: 'Tratamento de Efluentes Líquidos',
			ementa: 'Caracterização de efluentes líquidos. Tipos de sistemas de tratamento. Seleção de sistema. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405']
		},
		'ST573': {
			code: 'ST573',
			name: 'Toxicologia Ambiental',
			ementa: 'Conceitos básicos de toxicologia, agentes tóxicos, toxicocinética e toxicodinâmica. Principais tipos de poluentes químicos, natureza e modo de ação. Testes de toxicidade e genotoxicidade. Biomarcadores de efeito e exposição. Noções sobre avaliação de risco e derivação de critérios de qualidade ambiental.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['ST405']
		},
		'ST574': {
			code: 'ST574',
			name: 'Processos Industriais',
			ementa: 'Noções sobre processamentos industriais. Fluxogramas de processos. Operações unitárias. Levantamentos industriais. Produção mais Limpa (P+L). Visitas a indústrias.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST211', 'TT101']
		},
		'ST575': {
			code: 'ST575',
			name: 'Química da Poluição Ambiental',
			ementa: 'Fenômenos químicos da poluição: hídrica, atmosférica, do solo e sua dinâmica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'ST671': {
			code: 'ST671',
			name: 'Gerenciamento de Resíduos Sólidos',
			ementa: 'Técnicas de amostragem. Caracterização dos resísuos. Avaliação para definição sobre a disposição final dos resíduos. Controle de resíduos sólidos: acondicionamento, coleta, transporte, armazenamento. Técnicas de tratamento. Normas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST405']
		},
		'ST672': {
			code: 'ST672',
			name: 'Monitoramento Ambiental',
			ementa: 'Monitoramento da qualidade da água; programas de controle. Monitoramento da qualidade do ar; programas de controle. Normas. Amostragem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST575']
		},
		'ST673': {
			code: 'ST673',
			name: 'Estudos Econômicos da Poluição',
			ementa: 'Custos ambientais. Custos de implantação e manutenção de sistemas de controle. Componente ambiental na análise de custos da empresa. Linhas de financiamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST211', 'TT101']
		},
		'ST674': {
			code: 'ST674',
			name: 'Planejamento Ambiental',
			ementa: 'Teoria do planejamento ambiental. Modelos e instrumentos de planejamento ambiental. Inserção do planejamento no sistema de gestão ambiental. Cidades sustentáveis.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450']
		},
		'ST675': {
			code: 'ST675',
			name: 'Controle de Poluição do Ar',
			ementa: 'Caracterização de poluentes atmosféricos. Tipos de equipamentos de controle de poluição do ar. Seleção de equipamento. Controle de operação. Manutenção preventiva e corretiva.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST575']
		},
		'ST676': {
			code: 'ST676',
			name: 'Ecologia Aplicada ao Saneamento',
			ementa: 'Conceitos básicos sobre ecologia, o ambiente físico e suas variações, comunidades biológicas e sua estrutura, ciclagem de nutrientes. Intervenção antrópica, transporte, distribuição e transformação de agentes químicos, bioacumulação e biomagnificação. Avaliação integrada da qualidade ambiental e regulamentação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST207']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'ST772': {
			code: 'ST772',
			name: 'Modelos Computacionais para Sistemas Ambientais',
			ementa: 'Aplicação de modelos computacionais no estudo de sistemas do meio ambiente.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST672']
		},
		'ST773': {
			code: 'ST773',
			name: 'Avaliação de Impacto Ambiental',
			ementa: 'Documentação jurídica na área ambiental: conceitos, tratamentos e aplicação. Estudos de impacto ambiental: exigências legais e métodos de avaliação. Métodos de avaliação EIA/RIMA. Análise de risco e programas de medidas emergenciais. Auditoria ambiental prévia e pós implantação de obras. Remediação e recuperação ambiental.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST671', 'ST672', 'ST675']
		},
		'ST774': {
			code: 'ST774',
			name: 'Gerenciamento Ambiental',
			ementa: 'Modelos de gerenciamento ambiental em empresas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST574', 'ST672', 'ST673']
		},
		'ST775': {
			code: 'ST775',
			name: 'Poluição Industrial: Estudo de Caso',
			ementa: 'Levantamento, diagnóstico e proposição de medidas de controle ambiental na indústria.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST574', 'ST575', 'ST675']
		},
		'ST776': {
			code: 'ST776',
			name: 'Poluição Sonora e Vibrações',
			ementa: 'Noções básicas sobre acústica. Pressão sonora e nível de pressão sonora. Propagação do som. Adição e subtração de níveis de pressão sonora. A audição humana. Influência dos níveis de ruído na saúde humana: perda auditiva. Influência da vibração na saúde humana: sistema esquelético, articulações e sistema circulatório. Fontes de geração de ruídos e vibrações. Metodologia de avaliação (Norma Regulamentadora 15, NHO 01 da Fundacentro, Normas da ABNT). Técnicas de minimização de ruídos e vibrações. Normas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ST209']
		},
		'ST777': {
			code: 'ST777',
			name: 'Legislação Ambiental',
			ementa: 'Fundamentos do direito ambiental e questões de direito ambiental internacional. O meio ambiente na Constituição Federal. O licenciamento ambiental. Infrações e sanções administrativas. O código florestal e a legislação de proteção da flora. Responsabilidade penal. Condutas tipificadas como crime ambiental. Responsabilidade penal da pessoa natural. Das pessoas jurídicas e dos entes coletivos. Sanções penais à luz da lei de crimes ambientais. Ação civil pública.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460']
		},
		'ST778': {
			code: 'ST778',
			name: 'Introdução ao Trabalho de Graduação e ao Estágio Supervisionado',
			ementa: 'Definir o Plano do Trabalho de Graduação Interdisciplinar ou Estágio Supervisionado, contendo a revisão bibliográfica sobre o trabalho a ser desenvolvido, sob a orientação de um professor. Obs.: Não é responsabilidade da Unicamp providenciar estágio para alunos.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465']
		},
		'ELET14': {
			code: 'ELET14',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:14, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: ''
		}
	}
};

export default catalogue;
