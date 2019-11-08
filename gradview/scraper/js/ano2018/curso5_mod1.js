const catalogue = {
	totalCredits: 197,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'MA141', 'QG005', 'QG108', 'QG109', 'QG362']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_128', 'F_129', 'MA211', 'QA282', 'QI145', 'QO321']
		},
		'sem-3': {
			id: '3',
			subjects: ['MA311', 'QA381', 'QA383', 'QF431', 'QI345', 'QO521']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_328', 'QA481', 'QA483', 'QF531', 'QG464', 'QI245', 'QO423', 'QO424']
		},
		'sem-5': {
			id: '5',
			subjects: ['QA583', 'QA584', 'QF536', 'QG564', 'QI545', 'QO551']
		},
		'sem-6': {
			id: '6',
			subjects: ['QA815', 'QF632', 'QF661', 'QG664', 'QO622']
		},
		'sem-7': {
			id: '7',
			subjects: ['QG770', 'QI542', 'QO653', 'ELET8']
		},
		'sem-8': {
			id: '8',
			subjects: ['QG870', 'ELET8']
		}
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'QG005': {
			code: 'QG005',
			name: 'Química e Mercado de Trabalho',
			ementa: 'Aspectos e possibilidades da profissão.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ''
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'QG362': {
			code: 'QG362',
			name: 'Química com Segurança',
			ementa: 'Segurança em laboratório químico; identificação e uso de equipamentos de segurança; manuseio de substâncias com segurança; estocagem e descarte de resíduos de laboratórios. Contaminação química. Treinamento para atendimento em situações de emergência; técnicas de primeiros socorros. Legislação sobre segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141']
		},
		'QA282': {
			code: 'QA282',
			name: 'Química Clássica',
			ementa: 'Técnicas de Análise qualitativa envolvendo a separação e reconhecimento de cátions e ânions. Análise quantitativa. Volumetria. Gravimetria. Equilíbrios iônicos, ácido-base, de íons complexos e de oxidorredução. Solubilidade e produto de solubilidade. Tratamento de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG108', 'QG109']
		},
		'QI145': {
			code: 'QI145',
			name: 'Interações Químicas',
			ementa: 'Teoria dos orbitais moleculares para moléculas poliatômicas. Introdução à teoria de grupo. Ácidos e bases.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['QG108']
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101', 'QG102']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211']
		},
		'QA381': {
			code: 'QA381',
			name: 'Espectroanalítica',
			ementa: 'Introdução aos Métodos Espectroanalíticos. Instrumentos para Espectroscopia Ótica. Espectroscopia de Absorção Molecular no UV-visível. Espectroscopia de Luminescência Molecular. Espectroscopia Atômica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QA282']
		},
		'QA383': {
			code: 'QA383',
			name: 'Eletroanalítica',
			ementa: 'Introdução à química eletroanalítica. Potenciometria. Eletrogravimetria. Coulometria. Voltametria. Amperometria.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QA282']
		},
		'QF431': {
			code: 'QF431',
			name: 'Físico-Química I',
			ementa: 'Estado gasoso: propriedades PVT de gases ideal e real; equação de van der Waals; princípio dos estados correspondentes. Conceitos básicos de Termodinâmica: primeira, segunda e terceira Leis; funções termodinâmicas; termoquímica; aplicações. Condições de equilíbrio e regra das fases: sistemas de um e de mais componente. Propriedades coligativas; atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'QG108']
		},
		'QI345': {
			code: 'QI345',
			name: 'Química de Coordenação',
			ementa: 'Compostos de coordenação. Teorias de Ligação aplicadas aos compostos de coordenação. Introdução à espectroscopia eletrônica. Diagrama de Tanabe-Sugano. Mecanismos de reações de substituição e de reações de transferência de elétrons.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['QI145']
		},
		'QO521': {
			code: 'QO521',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos e derivados. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático, substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas. Em todos os casos, relação entre características estruturais e reatividade, com ênfase em mecanismos, relações estereoquímicas envolvidas e ampla exemplificação de aplicações.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO321']
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'QA481': {
			code: 'QA481',
			name: 'Métodos de Separação',
			ementa: 'Introdução aos métodos de separação. Cromatografia em camada delgada e em coluna. Cromatografia gasosa. Cromatografia líquida de alta eficiência e ultra-alta eficiência. Eletroforese capilar.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QA282']
		},
		'QA483': {
			code: 'QA483',
			name: 'Estatística Aplicada à Química Analítica',
			ementa: 'Erros em análises químicas. Tratamento e avaliação estatística de dados. Amostragem. Métodos de padronização. Planejamento experimental. Introdução aos métodos multivariados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QA282']
		},
		'QF531': {
			code: 'QF531',
			name: 'Físico-Química II',
			ementa: 'Teoria cinética dos gases: equação barométrica, Lei de Maxwell-Boltzmann para a distribuição de velocidades; potencial intermolecular. Cinética química: equações de velocidade; catálises homogênea e heterogênea; reações rápidas, noções sobre dinâmica molecular. Eletroquímica: condutividade de soluções, Lei de Ostwald; equilíbrio iônico; propriedades termodinâmicas; coeficientes de atividade; teoria de Debye-Hückel; pilhas e reações eletroquímicas; passivação e corrosão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF431']
		},
		'QG464': {
			code: 'QG464',
			name: 'Laboratório Integrado',
			ementa: 'Experimentos de natureza interdisciplinar abrangendo diferentes métodos de preparação, caracterização e análises de fenômenos envolvidos na preparação de produtos de tais como preparação de biodiesel e de solvente industrial, síntese e fomulação de fármacos, etc... utilizando técnicas e procedimentos tais como espectroscopia de IV, RMN, fluorescência de raios X, espectrometria de massa, reologia, análise termogravimétrica, determinação de área superficial, entre outros.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108', 'QG109']
		},
		'QI245': {
			code: 'QI245',
			name: 'Química de Sólidos',
			ementa: 'Empacotamento. Sistemas cristalinos. Estruturas cristalinas simples. Difração de raios X. Defeitos e não-estequiometria. Propriedades eletrônicas, ópticas e magnéticas de sólidos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI145']
		},
		'QO423': {
			code: 'QO423',
			name: 'Fundamentos da Espectrometria de Massas',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações de espectrometria de massas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO321']
		},
		'QO424': {
			code: 'QO424',
			name: 'Fundamentos em Espectroscopia e Ressonância Magnética Nuclear',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações da Espectroscopia de Ressonância Magnética Nuclear.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO321']
		},
		'QA583': {
			code: 'QA583',
			name: 'Preparo de Amostras',
			ementa: 'Fundamentos das técnicas de preparo de amostras para analitos inorgânicos e orgânicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QA381', 'QA383', 'QA481', 'QA483']
		},
		'QA584': {
			code: 'QA584',
			name: 'Laboratório de Química Analítica Instrumental',
			ementa: 'Aplicações de técnicas espectroanalíticas, eletroanalíticas e de separação em métodosanalíticos. Tratamento de amostras.',
			semestre: 1,
			vector: {T:0, P:2, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QA381', 'QA383', 'QA481', 'QA483']
		},
		'QF536': {
			code: 'QF536',
			name: 'Química Quântica',
			ementa: 'Postulados da Mecânica Quântica. Equação de Schroedinger. Soluções exatas e métodos de aproximação. Átomo de Hidrogênio e átomos multieletrônicos. Métodos de estruturas eletrônicas para sistemas moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'QI245', '*F_328']
		},
		'QG564': {
			code: 'QG564',
			name: 'Química Orgânica e Inorgânica Experimental',
			ementa: 'Estudo de estratégias de síntese, purificação e caracterização de substâncias orgânicas e inorgânicas, ilustrando-se o deslocamento do equilíbrio de reações através da remoção dos produtos ou de subprodutos, ou pela precipitação dos mesmos; a utilização de atmosfera inerte; a purificação por destilação, cristalização, sublimação ou cromatografia em coluna; a caracterização por espectroscopia no infravermelho, espectroscopia de ressonância magnética nuclear, ponto de fusão, espectrometria de massa e cromatografia em fase gasosa.',
			semestre: 1,
			vector: {T:0, P:0, L:8, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG109', 'QI145', 'QO521']
		},
		'QI545': {
			code: 'QI545',
			name: 'Química de Organometálicos',
			ementa: 'Organometálicos do grupo principal e de metais de transição. Catálise.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI345']
		},
		'QO551': {
			code: 'QO551',
			name: 'Bioquímica I',
			ementa: 'Introdução, aminoácidos, proteínas: estrutura, métodos para análise de proteínas, função de proteínas, carboidratos, ácidos nucleicos e estrutura de RNA e DNA, métodos para análise de ácidos nucleicos, princípios da tecnologia de DNA recombinante, lipídeos e membranas biológicas, transporte através de membranas, enzimologia, tópicos selecionados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521']
		},
		'QA815': {
			code: 'QA815',
			name: 'Química do Meio Ambiente',
			ementa: 'Química dos solos, águas e atmosfera; sua dinâmica. Poluição ambiental: prevenção e tratamento. Reações químicas e processos de interesse para a saúde humana nas águas, no solo e na atmosfera. Legislação e poluição ambiental. Prevenção e processos de tratamento (remediação).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QA282', '*QF531']
		},
		'QF632': {
			code: 'QF632',
			name: 'Físico-Química Experimental I',
			ementa: 'Experimentos relacionados aos temas: termodinâmica química, cinética, eletroquímica, equilíbrio de fases e propriedades coligativas.',
			semestre: 1,
			vector: {T:0, P:0, L:6, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['QA217', '*QF531']
		},
		'QF661': {
			code: 'QF661',
			name: 'Química Aplicada',
			ementa: 'Materiais: polímeros, metais, cerâmicas e vidros. Colóides e superfícies: surfactantes, espumas, molhabilidade, detergência, estabilidade e propriedade de dispersões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QF531', '*QO521/*QF531', '*QO421']
		},
		'QG664': {
			code: 'QG664',
			name: 'Espectroscopia Molecular',
			ementa: 'Teoria de Grupo. Espectroscopia rotacional, roto-vibracional e eletrônica. Experimentos selecionados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF536', 'QI145']
		},
		'QO622': {
			code: 'QO622',
			name: 'Química Orgânica Experimental II',
			ementa: 'Análise qualitativa de compostos orgânicos utilizando métodos químicos e físicos. Projetos de síntese orgânica e de produtos naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG564', 'QO423', 'QO424']
		},
		'QG770': {
			code: 'QG770',
			name: 'Projetos de Pesquisa em Química I',
			ementa: 'Elaboração de projeto de pesquisa em Química a ser desenvolvido sob a supervisão de membros do corpo docente do IQ. Definição de projeto, levantamento bibliográfico, planejamento de atividades.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:0, HS:4, SL:1, C:4},
			requisitos: ['AA460']
		},
		'QI542': {
			code: 'QI542',
			name: 'Química Inorgânica Experimental II',
			ementa: 'Síntese de complexos de metais de transição (compostos de coordenação e organometálicos), compostos modelos bioinorgânicos e de óxidos e/ou sulfetos. Caracterização dos compostos sintetizados explorando a série nefelauxética, espectros eletrônicos, medidas de magnetismo, de dicroísmo circular, de espectroscopia vibracional, de ressonância magnética nuclear, eletroquímicas e de luminescência. Cinética de substituição de ligantes em complexos de metais de transição. Reações de intercalação. Catálise (homogênea e heterogênea).',
			semestre: 1,
			vector: {T:0, P:0, L:6, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['QG564', 'QI545']
		},
		'QO653': {
			code: 'QO653',
			name: 'Bioquímica II',
			ementa: 'Introdução ao metabolismo, catabolismo da glicose, transdução de sinal, metabolismo do glicogênio, ciclo do ácido cítrico, gliconeogênese e via das pentoses, transporte de elétrons e fosforilação oxidativa, fotossíntese, metabolismo dos lipídeos, metabolismo dos aminoácidos, metabolismo dos nucleotídeos, integração e regulação do metabolismo, fluxo da informação gênica, expressão e enovelamento celular de proteínas, controle de expressão e princípios para engenharia de proteínas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO551']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'QG870': {
			code: 'QG870',
			name: 'Projetos de Pesquisa em Química II',
			ementa: 'Desenvolvimento de projeto de pesquisa em Química sob a supervisão de membros do corpo docente do IQ.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:14, D:0, HS:16, SL:2, C:16},
			requisitos: ['QG770']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;
