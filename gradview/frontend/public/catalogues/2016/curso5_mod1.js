const catalogue = {
	totalCredits: 211,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['QA112', 'MA111', 'MA141', 'QG108', 'QG109', 'QG362', 'QG005']
		},
		'sem-2': {
			id: '2',
			subjects: ['QA217', 'F_128', 'MA211', 'QI145', 'LA122', 'QO321', 'F_129']
		},
		'sem-3': {
			id: '3',
			subjects: ['QA316', 'F_328', 'MA311', 'QI245', 'QO521', 'F_329']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_428', 'QA416', 'QF431', 'QI345', 'QI446', 'QO424', 'QO423']
		},
		'sem-5': {
			id: '5',
			subjects: ['ME414', 'QF531', 'GM861', 'QG564', 'QO551']
		},
		'sem-6': {
			id: '6',
			subjects: ['QF632', 'QF536', 'QI545', 'QO652', 'QO621', 'QO622']
		},
		'sem-7': {
			id: '7',
			subjects: ['QF637', 'QF732', 'QI542', 'QO653']
		},
		'sem-8': {
			id: '8',
			subjects: ['QG860', 'QA815', 'ELET08', 'QF661']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['QA91-', 'QA92-', 'QF93-', 'QF94-', 'QG96-', 'QG97-', 'QI94-', 'QI95-', 'QO92-', 'QO93-'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B946A4',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AEB946',
			obligatory: true
		},
		'QA112': {
			code: 'QA112',
			name: 'Química Analítica Fundamental I',
			ementa: 'Introdução à Química Analítica. Estequiometria. Erros e Tratamento estatístico de dados. Amostragem. Equilíbrios químicos de precipitação e ácido-base. Aplicações de reações de precipitação e ácido-base na identificação e determinação de espécies químicas. Gravimetria. Introdução à volumetria. Volumetria de precipitação e neutralização.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#8F46B9',
			obligatory: true
		},
		'QG005': {
			code: 'QG005',
			name: 'Química e Mercado de Trabalho',
			ementa: 'Aspectos e possibilidades da profissão.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#5146B9',
			obligatory: true
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98546',
			obligatory: true
		},
		'QG362': {
			code: 'QG362',
			name: 'Química com Segurança',
			ementa: 'Segurança em laboratório químico; identificação e uso de equipamentos de segurança; manuseio de substâncias com segurança; estocagem e descarte de resíduos de laboratórios. Contaminação química. Treinamento para atendimento em situações de emergência; técnicas de primeiros socorros. Legislação sobre segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#465BB9',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8FB946',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#51B946',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B97A',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#B48075',
			obligatory: true
		},
		'QA217': {
			code: 'QA217',
			name: 'Química Analítica Fundamental II',
			ementa: 'Equilíbrios químicos de complexação e oxirredução. Células eletroquímicas. Aplicações de reações de complexação e oxirredução na identificação e quantificação de espécies químicas. Volumetria de complexação e oxirredução. Introdução à potenciometria. Preparo de amostra.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA112', 'QG109'],
			color: '#A46680',
			obligatory: true
		},
		'QI145': {
			code: 'QI145',
			name: 'Interações Químicas',
			ementa: 'Teoria dos orbitais moleculares para moléculas poliatômicas. Introdução à teoria de grupo. Ácidos e bases.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG108'],
			color: '#46B9B9',
			obligatory: true
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#46B9B9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#A79365',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#858075',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#B48075',
			obligatory: true
		},
		'QA316': {
			code: 'QA316',
			name: 'Química Analítica III',
			ementa: 'Fundamentos da análise instrumental. Métodos espectroanalíticos, métodos eletroanalíticos e métodos de separação. Tratamento estatístico de dados e interpretação de resultados obtidos com métodos instrumentais.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA217'],
			color: '#A46680',
			obligatory: true
		},
		'QI245': {
			code: 'QI245',
			name: 'Química de Sólidos',
			ementa: 'Empacotamento. Sistemas cristalinos. Estruturas cristalinas simples. Difração de raios X. Defeitos e não-estequiometria. Propriedades eletrônicas, ópticas e magnéticas de sólidos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI145'],
			color: '#46B9B9',
			obligatory: true
		},
		'QO521': {
			code: 'QO521',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos e derivados. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático, substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas. Em todos os casos, relação entre características estruturais e reatividade, com ênfase em mecanismos, relações estereoquímicas envolvidas e ampla exemplificação de aplicações.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO321'],
			color: '#46B9B9',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#A79365',
			obligatory: true
		},
		'QA416': {
			code: 'QA416',
			name: 'Química Analítica IV',
			ementa: 'Preparo de amostras. Aplicações de técnicas espectroanalíticas, eletroanalíticas e de separação em metodologias analíticas. Validação de metodologias analíticas.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA316'],
			color: '#A46680',
			obligatory: true
		},
		'QF431': {
			code: 'QF431',
			name: 'Físico-Química I',
			ementa: 'Estado gasoso: propriedades PVT de gases ideal e real; equação de van der Waals; princípio dos estados correspondentes. Conceitos básicos de Termodinâmica: primeira, segunda e terceira Leis; funções termodinâmicas; termoquímica; aplicações. Condições de equilíbrio e regra das fases: sistemas de um e de mais componente. Propriedades coligativas; atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'QG108'],
			color: '#7D9D97',
			obligatory: true
		},
		'QI345': {
			code: 'QI345',
			name: 'Química de Coordenação',
			ementa: 'Compostos de coordenação. Teorias de Ligação aplicadas aos compostos de coordenação. Introdução à espectroscopia eletrônica. Diagrama de Tanabe-Sugano. Mecanismos de reações de substituição e de reações de transferência de elétrons.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI145'],
			color: '#46B9B9',
			obligatory: true
		},
		'QI446': {
			code: 'QI446',
			name: 'Aplicação de Teoria de Grupo em Espectroscopia Eletrônica e Vibracional',
			ementa: 'Teoria de Grupo. Espectroscopias eletrônica e vibracional aplicadas a compostos inorgânicos. Interpretação de espectros.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI245'],
			color: '#46B9B9',
			obligatory: true
		},
		'QO423': {
			code: 'QO423',
			name: 'Fundamentos da Espectrometria de Massas',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações de espectrometria de massas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO521'],
			color: '#46B9B9',
			obligatory: true
		},
		'QO424': {
			code: 'QO424',
			name: 'Fundamentos em Espectroscopia e Ressonância Magnética Nuclear',
			ementa: 'Fundamentos experimentais, interpretação de dados e aplicações da Espectroscopia de Ressonância Magnética Nuclear.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QO521'],
			color: '#46B9B9',
			obligatory: true
		},
		'GM861': {
			code: 'GM861',
			name: 'Mineralogia (Química)',
			ementa: 'Geoquímica de crosta terrestre; revisão de cristaloquímica, sistemas cristalinos e simetria; tipos de estruturas cristalinas, cálculo de sítios de ocupação; propriedades e identificação macroscópica de minerais; identificação de minerais por difratometria de raio-X; processos de formação de rochas e físico-química da cristalização magmática; identificação macroscópica das rochas; usos dos minerais na indústria; dinâmica do planeta: interior da terra e tectônica de placas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QI145', 'QI245'],
			color: '#46B9B9',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#B946A4',
			obligatory: true
		},
		'QF531': {
			code: 'QF531',
			name: 'Físico-Química II',
			ementa: 'Teoria cinética dos gases: equação barométrica, Lei de Maxwell-Boltzmann para a distribuição de velocidades; potencial intermolecular. Cinética química: equações de velocidade; catálises homogênea e heterogênea; reações rápidas, noções sobre dinâmica molecular. Eletroquímica: condutividade de soluções, Lei de Ostwald; equilíbrio iônico; propriedades termodinâmicas; coeficientes de atividade; teoria de Debye-Hückel; pilhas e reações eletroquímicas; passivação e corrosão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF431'],
			color: '#7D9D97',
			obligatory: true
		},
		'QG564': {
			code: 'QG564',
			name: 'Química Orgânica e Inorgânica Experimental',
			ementa: 'Estudo de estratégias de síntese, purificação e caracterização de substâncias orgânicas e inorgânicas, ilustrando-se o deslocamento do equilíbrio de reações através da remoção dos produtos ou de subprodutos, ou pela precipitação dos mesmos; a utilização de atmosfera inerte; a purificação por destilação, cristalização, sublimação ou cromatografia em coluna; a caracterização por espectroscopia no infravermelho, espectroscopia de ressonância magnética nuclear, ponto de fusão, espectrometria de massa e cromatografia em fase gasosa.',
			semestre: 1,
			vector: {T:0, P:0, L:8, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG109', 'QI145', 'QO521'],
			color: '#6CA893',
			obligatory: true
		},
		'QO551': {
			code: 'QO551',
			name: 'Bioquímica I',
			ementa: 'Introdução, aminoácidos, proteínas: estrutura, métodos para análise de proteínas, função de proteínas, carboidratos, ácidos nucleicos e estrutura de RNA e DNA, métodos para análise de ácidos nucleicos, princípios da tecnologia de DNA recombinante, lipídeos e membranas biológicas, transporte através de membranas, enzimologia, tópicos selecionados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521'],
			color: '#46B9B9',
			obligatory: true
		},
		'QF536': {
			code: 'QF536',
			name: 'Química Quântica',
			ementa: 'Postulados da Mecânica Quântica. Equação de Schroedinger. Soluções exatas e métodos de aproximação. Átomo de Hidrogênio e átomos multieletrônicos. Métodos de estruturas eletrônicas para sistemas moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'QI245', '*F_328'],
			color: '#8B9986',
			obligatory: true
		},
		'QF632': {
			code: 'QF632',
			name: 'Físico-Química Experimental I',
			ementa: 'Experimentos relacionados aos temas: termodinâmica química, cinética, eletroquímica, equilíbrio de fases e propriedades coligativas.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QA217', '*QF531'],
			color: '#91828C',
			obligatory: true
		},
		'QI545': {
			code: 'QI545',
			name: 'Química de Organometálicos',
			ementa: 'Organometálicos do grupo principal e de metais de transição. Catálise.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI345'],
			color: '#46B9B9',
			obligatory: true
		},
		'QO621': {
			code: 'QO621',
			name: 'Química Orgânica III',
			ementa: 'Introdução à filosofia e prática de sínteses orgânicas: principais transformações de grupos funcionais; grupos de proteção. Uso de compostos polifuncionais na formação de ligações carbono-carbono ou outras ligações. Métodos específicos de formação de ligações carbono-carbono. Reações pericíclicas: orbitais moleculares de fronteira; reações de cicloadição; rearranjo sigmatrópico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521'],
			color: '#46B9B9',
			obligatory: true
		},
		'QO622': {
			code: 'QO622',
			name: 'Química Orgânica Experimental II',
			ementa: 'Análise qualitativa de compostos orgânicos utilizando métodos químicos e físicos. Projetos de síntese orgânica e de produtos naturais.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG564', 'QO423', 'QO424'],
			color: '#53B3AC',
			obligatory: true
		},
		'QO652': {
			code: 'QO652',
			name: 'Bioquímica Experimental',
			ementa: 'Fundamentos de bioquímica experimental. Conhecimentos de técnicas utilizadas no isolamento e caracterização de biomoléculas: proteínas, lipídeos, sacarídeos e ácidos nucléicos (RNA e DNA). Princípios de biologia molecular: material biológico, biossegurança, do gene à proteína recombinante, ferramentas computacionais.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO551'],
			color: '#46B9B9',
			obligatory: true
		},
		'QF637': {
			code: 'QF637',
			name: 'Introdução à Espectroscopia e à Termodinâmica Estatística',
			ementa: 'Espectroscopia molecular. Espectroscopia de ressonância paramagnética de elétrons (ERP) e magnética nuclear (RMN). Lasers. Fotoquímica. Ensembles e postulados. Funções de partição e termodinâmica. Sistemas de partículas independentes: distinguíveis e indistinguíveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF536', '*F_428'],
			color: '#999676',
			obligatory: true
		},
		'QF732': {
			code: 'QF732',
			name: 'Físico-Química Experimental II',
			ementa: 'Experimentos relacionados aos temas: espectroscopia molecular, propriedades de materiais e físico-química de coloides e superfícies.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QF536'],
			color: '#8B9986',
			obligatory: true
		},
		'QI542': {
			code: 'QI542',
			name: 'Química Inorgânica Experimental II',
			ementa: 'Síntese de complexos de metais de transição (compostos de coordenação e organometálicos), compostos modelos bioinorgânicos e de óxidos e/ou sulfetos. Caracterização dos compostos sintetizados explorando a série nefelauxética, espectros eletrônicos, medidas de magnetismo, de dicroísmo circular, de espectroscopia vibracional, de ressonância magnética nuclear, eletroquímicas e de luminescência. Cinética de substituição de ligantes em complexos de metais de transição. Reações de intercalação. Catálise (homogênea e heterogênea).',
			semestre: 1,
			vector: {T:0, P:0, L:8, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG564', 'QI446', 'QI545'],
			color: '#53B3AC',
			obligatory: true
		},
		'QO653': {
			code: 'QO653',
			name: 'Bioquímica II',
			ementa: 'Introdução ao metabolismo, catabolismo da glicose, transdução de sinal, metabolismo do glicogênio, ciclo do ácido cítrico, gliconeogênese e via das pentoses, transporte de elétrons e fosforilação oxidativa, fotossíntese, metabolismo dos lipídeos, metabolismo dos aminoácidos, metabolismo dos nucleotídeos, integração e regulação do metabolismo, fluxo da informação gênica, expressão e enovelamento celular de proteínas, controle de expressão e princípios para engenharia de proteínas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO551'],
			color: '#46B9B9',
			obligatory: true
		},
		'QA815': {
			code: 'QA815',
			name: 'Química do Meio Ambiente',
			ementa: 'Química dos solos, águas e atmosfera; sua dinâmica. Poluição ambiental: prevenção e tratamento. Reações químicas e processos de interesse para a saúde humana nas águas, no solo e na atmosfera. Legislação e poluição ambiental. Prevenção e processos de tratamento (remediação).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA470'],
			color: '#B94665',
			obligatory: true
		},
		'QF661': {
			code: 'QF661',
			name: 'Química Aplicada',
			ementa: 'Materiais: polímeros, metais, cerâmicas e vidros. Colóides e superfícies: surfactantes, espumas, molhabilidade, detergência, estabilidade e propriedade de dispersões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QF531', '*QO521'],
			color: '#62ABA8',
			obligatory: true
		},
		'QG860': {
			code: 'QG860',
			name: 'Projetos de Pesquisa em Química',
			ementa: 'Desenvolvimento de projetos científicos sob a supervisão de membros do corpo docente do IQ.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:7, D:0, HS:8, SL:1, C:8},
			requisitos: ['AA475'],
			color: '#AE46B9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'QA91-': {
			code: 'QA91-',
			name: 'Qualquer Disciplina com codigo QA91-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QA91-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#70B946',
			obligatory: false
		},
		'QA92-': {
			code: 'QA92-',
			name: 'Qualquer Disciplina com codigo QA92-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QA92-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'QF93-': {
			code: 'QF93-',
			name: 'Qualquer Disciplina com codigo QF93-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QF93-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B95B',
			obligatory: false
		},
		'QF94-': {
			code: 'QF94-',
			name: 'Qualquer Disciplina com codigo QF94-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QF94-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96546',
			obligatory: false
		},
		'QG96-': {
			code: 'QG96-',
			name: 'Qualquer Disciplina com codigo QG96-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QG96-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7046B9',
			obligatory: false
		},
		'QG97-': {
			code: 'QG97-',
			name: 'Qualquer Disciplina com codigo QG97-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QG97-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94685',
			obligatory: false
		},
		'QI94-': {
			code: 'QI94-',
			name: 'Qualquer Disciplina com codigo QI94-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QI94-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9A446',
			obligatory: false
		},
		'QI95-': {
			code: 'QI95-',
			name: 'Qualquer Disciplina com codigo QI95-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QI95-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B99A',
			obligatory: false
		},
		'QO92-': {
			code: 'QO92-',
			name: 'Qualquer Disciplina com codigo QO92-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QO92-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#469AB9',
			obligatory: false
		},
		'QO93-': {
			code: 'QO93-',
			name: 'Qualquer Disciplina com codigo QO93-',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo QO93-, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#467AB9',
			obligatory: false
		}
	}
};

export default catalogue;
