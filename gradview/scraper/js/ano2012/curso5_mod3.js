const catalogue = {
	totalCredits: 215,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'MA141', 'QA112', 'QG005', 'QG108', 'QG109', 'QG362']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_128', 'F_129', 'LA122', 'MA211', 'QA217', 'QI145', 'QO321']
		},
		'sem-3': {
			id: '3',
			subjects: ['F_328', 'F_329', 'MA311', 'QA316', 'QI245', 'QO521']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_428', 'QA416', 'QF431', 'QI345', 'QI445', 'QO423', 'QO424']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM312', 'GM861', 'ME414', 'QF531', 'QG564', 'QO551']
		},
		'sem-6': {
			id: '6',
			subjects: ['EQ481', 'QF536', 'QF632', 'QI545', 'QO622']
		},
		'sem-7': {
			id: '7',
			subjects: ['EQ582', 'QF636', 'QF732', 'QI542', 'TA918']
		},
		'sem-8': {
			id: '8',
			subjects: ['QA815', 'QF661', 'QG080', 'QG835', 'ELET8']
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
		'QA112': {
			code: 'QA112',
			name: 'Química Analítica Fundamental I',
			ementa: 'Introdução à Química Analítica. Estequiometria. Erros e Tratamento estatístico de dados. Amostragem. Equilíbrios químicos de precipitação e ácido-base. Aplicações de reações de precipitação e ácido-base na identificação e determinação de espécies químicas. Gravimetria. Introdução à volumetria. Volumetria de precipitação e neutralização.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
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
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases; noções de termodinâmica; cinética e equilíbrio químico.',
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
			ementa: 'Segurança em Laboratório Químico, Identificação e Usos de Equipamentos de Segurança, Manuseio de Substâncias com Segurança, Estocagem e Descarte de Resíduos de Laboratórios, Treinamento para Atendimento em Situações de Emergência, Contaminação Química, Técnicas de Primeiros Socorros, Legislação sobre Segurança no Trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando o desenvolvimento de estratégias globais de leitura e de análise linguística.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
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
		'QA217': {
			code: 'QA217',
			name: 'Química Analítica Fundamental II',
			ementa: 'Equilíbrios químicos de complexação e oxirredução. Células eletroquímicas. Aplicações de reações de complexação e oxirredução na identificação e quantificação de espécies químicas. Volumetria de complexação e oxirredução. Introdução à potenciometria. Preparo de amostra.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA112', 'QG109']
		},
		'QI145': {
			code: 'QI145',
			name: 'Interações Químicas',
			ementa: 'Teoria dos orbitais moleculares para moléculas poliatômicas. Introdução à teoria de grupo. Ácidos e bases.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
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
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211/*MA251']
		},
		'QA316': {
			code: 'QA316',
			name: 'Química Analítica III',
			ementa: 'Fundamentos da análise instrumental. Métodos espectroanalíticos, métodos eletroanalíticos e métodos de separação. Tratamento estatístico de dados e interpretação de resultados obtidos com métodos instrumentais.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA217']
		},
		'QI245': {
			code: 'QI245',
			name: 'Química de Sólidos',
			ementa: 'Empacotamento. Sistemas cristalinos. Estruturas cristalinas simples. Difração de raios X. Ligação em sólidos. Defeitos e não-estequiometria. Sólidos de baixa dimensionalidade, sólidos organizados. Propriedades eletrônicas, ópticas e magnéticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
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
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328']
		},
		'QA416': {
			code: 'QA416',
			name: 'Química Analítica IV',
			ementa: 'Preparo de amostras. Aplicações de técnicas espectroanalíticas, eletroanalíticas e de separação em metodologias analíticas. Validação de metodologias analíticas.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA316']
		},
		'QF431': {
			code: 'QF431',
			name: 'Físico-Química I',
			ementa: 'Estado gasoso: propriedades PVT de gás ideal e gases reais; equação de Van der Waals; princípio dos estados correspondentes. Conceitos básicos de Termodinâmica: primeira, segunda e terceira leis; funções termodinâmicas; termoquímica; aplicações. Condições de equilíbrio e regra das fases: sistemas de um e de mais de um componente. Propriedades de líquidos e sólidos: tensão superficial, viscosidade. Misturas; propriedades coligativas; atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'QG108']
		},
		'QI345': {
			code: 'QI345',
			name: 'Química de Coordenação',
			ementa: 'Compostos de coordenação. Teorias de Ligação aplicadas aos compostos de coordenação. Introdução à espectroscopia eletrônica. Diagrama de Tanabe-Sugano. Mecanismos de reações de substituição e de reações de transferência de elétrons.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI145']
		},
		'QI445': {
			code: 'QI445',
			name: 'Introdução à Espectroscopia Vibracional',
			ementa: 'Fundamentos de espectroscopia vibracional e interpretação de espectros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI245']
		},
		'QO423': {
			code: 'QO423',
			name: 'Fundamentos da Espectrometria de Massas',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações de espectrometria de massas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO521']
		},
		'QO424': {
			code: 'QO424',
			name: 'Fundamentos em Espectroscopia e Ressonância Magnética Nuclear',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações da Espectroscopia de Ressonância Magnética Nuclear.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO521']
		},
		'EM312': {
			code: 'EM312',
			name: 'Desenho Técnico',
			ementa: 'Instrumentação e normas. Teoria das projeções: Monjeanas, cotadas. Axonometria e perspectiva. Construções geométricas. Ajustes e tolerâncias. Desenho de elementos básicos de máquinas. Métodos de composição e de reprodução de desenhos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'GM861': {
			code: 'GM861',
			name: 'Mineralogia (Química)',
			ementa: 'Geoquímica de crosta terrestre; revisão de cristaloquímica, sistemas cristalinos e simetria; tipos de estruturas cristalinas, cálculo de sítios de ocupação; propriedades e identificação macroscópica de minerais; identificação de minerais por difratometria de raio-X; processos de formação de rochas e físico-química da cristalização magmática; identificação macroscópica das rochas; usos dos minerais na indústria; dinâmica do planeta: interior da terra e tectônica de placas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QI145', 'QI245']
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'QF531': {
			code: 'QF531',
			name: 'Físico-Química II',
			ementa: 'Equilíbrio químico, constantes de equilíbrio. Eletroquímica; propriedades termodinâmicas de íons em solução; coeficientes de atividade; teoria de Debye-Hückel; pilhas e reações eletroquímicas; passivação e corrosão; condutividade de soluções, Lei de Ostwald. Teoria cinética dos gases; equação barométrica; Lei de Maxwell-Boltzmann para a distribuição de velocidades. Cinética química, equações de velocidade; mecanismos; reações rápidas; noções sobre dinâmica molecular; catálises homogênea e heterogênea.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF431']
		},
		'QG564': {
			code: 'QG564',
			name: 'Química Orgânica e Inorgânica Experimental',
			ementa: 'Estudo de estratégias de síntese, purificação e caracterização de substâncias orgânicas e inorgânicas, ilustrando-se o deslocamento do equilíbrio de reações através da remoção dos produtos ou de subprodutos, ou pela precipitação dos mesmos; a utilização de atmosfera inerte; a purificação por destilação, cristalização, sublimação ou cromatografia em coluna; a caracterização por espectroscopia no infravermelho, espectroscopia de ressonância magnética nuclear, ponto de fusão, espectrometria de massa e cromatografia em fase gasosa.',
			semestre: 1,
			vector: {T:0, P:0, L:8, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG109', 'QI145', 'QO521']
		},
		'QO551': {
			code: 'QO551',
			name: 'Bioquímica I',
			ementa: 'Introdução, aminoácidos, proteínas: estrutura, métodos para análise de proteínas, função de proteínas, carboidratos, ácidos nucleicos e estrutura de RNA e DNA, métodos para análise de ácidos nucleicos, princípios da tecnologia de DNA recombinante, lipídeos e membranas biológicas, transporte através de membranas, enzimologia, tópicos selecionados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521']
		},
		'EQ481': {
			code: 'EQ481',
			name: 'Introdução à Engenharia Química',
			ementa: 'A indústria química. Operações e processos unitários. Estequiometria. Balanços de massa e de energia. Aplicações simples a processos de balanço de massa e energia combinados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ101/*QF531']
		},
		'QF536': {
			code: 'QF536',
			name: 'Química Quântica',
			ementa: 'Postulados da Mecânica Quântica. Equação de Schroedinger. Soluções exatas e métodos de aproximação. Átomo de Hidrogênio e átomos multieletrônicos. Métodos de estruturas eletrônicas para sistemas moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'QI245', '*F_328']
		},
		'QF632': {
			code: 'QF632',
			name: 'Físico-Química Experimental I',
			ementa: 'Experimentos relacionados aos temas: termodinâmica química, cinética, eletroquímica, equilíbrio de fases e propriedades coligativas.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QA217', '*QF531']
		},
		'QI545': {
			code: 'QI545',
			name: 'Química de Organometálicos',
			ementa: 'Organometálicos do grupo principal e de metais de transição. Catálise.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI345']
		},
		'QO622': {
			code: 'QO622',
			name: 'Química Orgânica Experimental II',
			ementa: 'Análise qualitativa de compostos orgânicos utilizando métodos químicos e físicos. Projetos de síntese orgânica e de produtos naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG564', 'QO423', 'QO424']
		},
		'EQ582': {
			code: 'EQ582',
			name: 'Fenômenos de Transporte e Operações Unitárias',
			ementa: 'Princípios de transferência de quantidade de movimento, calor e massa e operações unitárias da indústria química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ481']
		},
		'QF636': {
			code: 'QF636',
			name: 'Introdução à Espectroscopia e à Termodinâmica',
			ementa: 'Espectroscopia ótica molecular. Espectroscopia de ressonância paramagnética de elétrons (ERP) e magnética nuclear (RMN). Lasers. Fotoquímica. Ensembles e postulados. Funções de partição e conexão termodinâmica. Sistema de partículas independentes: distinguíveis e indistinguíveis. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF536', '*F_428']
		},
		'QF732': {
			code: 'QF732',
			name: 'Físico-Química Experimental II',
			ementa: 'Experimentos relacionados aos temas: espectroscopia molecular, propriedades de materiais e físico-química de coloides e superfícies.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QF530']
		},
		'QI542': {
			code: 'QI542',
			name: 'Química Inorgânica Experimental II',
			ementa: 'Síntese de complexos de metais de transição (compostos de coordenação e organometálicos), compostos modelos bioinorgânicos e de óxidos e/ou sulfetos. Caracterização dos compostos sintetizados explorando a série nefelauxética, espectros eletrônicos, medidas de magnetismo, de dicroísmo circular, de espectroscopia vibracional, de ressonância magnética nuclear, eletroquímicas e de luminescência. Cinética de substituição de ligantes em complexos de metais de transição. Reações de intercalação. Catálise (homogênea e heterogênea).',
			semestre: 1,
			vector: {T:0, P:0, L:8, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG564', 'QI445', 'QI545']
		},
		'TA918': {
			code: 'TA918',
			name: 'Microbiologia e Fermentações',
			ementa: 'Técnicas microbiológicas. Caracterização e identificação de bactérias, fungos filamentosos e leveduras. Crescimento de microrganismos. Exame microbiológico da água. Fermentações alcoólicas e de ácidos orgânicos. Produção de proteínas unicelulares, enzimas, antibióticos, aminoácidos e vitaminas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO551']
		},
		'QA815': {
			code: 'QA815',
			name: 'Química do Meio Ambiente',
			ementa: 'Química dos solos, águas e atmosfera; sua dinâmica. Poluição ambiental: prevenção e tratamento. Reações químicas e processos de interesse para a saúde humana nas águas, no solo e na atmosfera. Legislação e poluição ambiental. Prevenção e processos de tratamento (remediação).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA475']
		},
		'QF661': {
			code: 'QF661',
			name: 'Química Aplicada',
			ementa: 'Dispersões, emulsões, espumas. Surfactantes: detergentes, emulsionantes, dispersantes, aditivos. Formulações detergentes. Tintas. Adesivos. Óleos lubrificantes. Elastômeros. Gomas. Ceras. Resinas. Termoplásticos e termorrígidos. Fibras. Compósitos. Metais e ligas metálicas. Aço. Materiais cerâmicos. Vidros. Cerâmica. Refratários. Cimento e concreto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QF531', '*QO521/*QF531', '*QO421']
		},
		'QG080': {
			code: 'QG080',
			name: 'Estágio',
			ementa: 'Estágio em Indústria química.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA475']
		},
		'QG835': {
			code: 'QG835',
			name: 'Processos Industriais',
			ementa: 'Cinética de Reatores. Descrição e análise de alguns processos de grande importância encontrados nas indústrias químicas. Fermentações, refino de petróleo, manufatura de papel, etc.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TA635/*TA735/*EQ582']
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
