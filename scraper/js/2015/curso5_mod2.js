const catalogue = {
	totalCredits: 216,
	maxCreditsSem: 36,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['QG362', 'QG005', 'MA141', 'MA111', 'QG109', 'QA112', 'QG108']
		},
		'sem-2': {
			id: '2',
			subjects: ['EL683', 'F_128', 'MA211', 'F_129', 'QA217', 'QO321']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL511', 'F_328', 'MA311', 'F_329', 'QO521']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'F_428', 'QF431', 'QI246', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'QF531', 'GM861', 'QG565']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL874', 'QF535', 'ELET06', 'EL485']
		},
		'sem-7': {
			id: '7',
			subjects: ['QG680', 'GT001', 'QF732', 'QG760', 'QO551']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08', 'QG880', 'EL213', 'QF661', 'QL701', 'QA815']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['AM---', 'EL---', 'EP---', 'HG---', 'HZ---', 'LA---', 'QL702', 'QL703'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['QG981', 'QG982', 'QG983', 'QG984'],
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
			color: '#4646B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A2',
			obligatory: true
		},
		'QA112': {
			code: 'QA112',
			name: 'Química Analítica Fundamental I',
			ementa: 'Introdução à Química Analítica. Estequiometria. Erros e Tratamento estatístico de dados. Amostragem. Equilíbrios químicos de precipitação e ácido-base. Aplicações de reações de precipitação e ácido-base na identificação e determinação de espécies químicas. Gravimetria. Introdução à volumetria. Volumetria de precipitação e neutralização.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#7446B9',
			obligatory: true
		},
		'QG005': {
			code: 'QG005',
			name: 'Química e Mercado de Trabalho',
			ementa: 'Aspectos e possibilidades da profissão.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8B46B9',
			obligatory: true
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'QG362': {
			code: 'QG362',
			name: 'Química com Segurança',
			ementa: 'Segurança em laboratório químico; identificação e uso de equipamentos de segurança; manuseio de substâncias com segurança; estocagem e descarte de resíduos de laboratórios. Contaminação química. Treinamento para atendimento em situações de emergência; técnicas de primeiros socorros. Legislação sobre segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A246',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#74B946',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#4680AE',
			obligatory: true
		},
		'QA217': {
			code: 'QA217',
			name: 'Química Analítica Fundamental II',
			ementa: 'Equilíbrios químicos de complexação e oxirredução. Células eletroquímicas. Aplicações de reações de complexação e oxirredução na identificação e quantificação de espécies químicas. Volumetria de complexação e oxirredução. Introdução à potenciometria. Preparo de amostra.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QA112', 'QG109'],
			color: '#5D5DB9',
			obligatory: true
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#8B46B9',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9468B',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#46938B',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#8046B9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#4680AE',
			obligatory: true
		},
		'QO521': {
			code: 'QO521',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos e derivados. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático, substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas. Em todos os casos, relação entre características estruturais e reatividade, com ênfase em mecanismos, relações estereoquímicas envolvidas e ampla exemplificação de aplicações.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO321'],
			color: '#8B46B9',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9465D',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#46938B',
			obligatory: true
		},
		'QF431': {
			code: 'QF431',
			name: 'Físico-Química I',
			ementa: 'Estado gasoso: propriedades PVT de gases ideal e real; equação de van der Waals; princípio dos estados correspondentes. Conceitos básicos de Termodinâmica: primeira, segunda e terceira Leis; funções termodinâmicas; termoquímica; aplicações. Condições de equilíbrio e regra das fases: sistemas de um e de mais componente. Propriedades coligativas; atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'QG108'],
			color: '#6963B4',
			obligatory: true
		},
		'QI246': {
			code: 'QI246',
			name: 'Química Inorgânica',
			ementa: 'Acidez e basicidade de Lewis: conceitos de dureza e moleza; química de coordenação e de organometálicos de metais de transição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108', 'QG109'],
			color: '#695DB9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#468BB9',
			obligatory: true
		},
		'GM861': {
			code: 'GM861',
			name: 'Mineralogia (Química)',
			ementa: 'Geoquímica de crosta terrestre; revisão de cristaloquímica, sistemas cristalinos e simetria; tipos de estruturas cristalinas, cálculo de sítios de ocupação; propriedades e identificação macroscópica de minerais; identificação de minerais por difratometria de raio-X; processos de formação de rochas e físico-química da cristalização magmática; identificação macroscópica das rochas; usos dos minerais na indústria; dinâmica do planeta: interior da terra e tectônica de placas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QI246'],
			color: '#695DB9',
			obligatory: true
		},
		'QF531': {
			code: 'QF531',
			name: 'Físico-Química II',
			ementa: 'Teoria cinética dos gases: equação barométrica, Lei de Maxwell-Boltzmann para a distribuição de velocidades; potencial intermolecular. Cinética química: equações de velocidade; catálises homogênea e heterogênea; reações rápidas, noções sobre dinâmica molecular. Eletroquímica: condutividade de soluções, Lei de Ostwald; equilíbrio iônico; propriedades termodinâmicas; coeficientes de atividade; teoria de Debye-Hückel; pilhas e reações eletroquímicas; passivação e corrosão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF431'],
			color: '#6963B4',
			obligatory: true
		},
		'QG565': {
			code: 'QG565',
			name: 'Química Orgânica e Inorgânica Experimental',
			ementa: 'Estudo de estratégias de síntese, purificação e caracterização, ilustrando-se o deslocamento do equilíbrio de reações através da remoção dos produtos ou de subprodutos, ou pela precipitação dos mesmos; a utilização de atmosfera inerte; a purificação por destilação, cristalização, sublimação ou cromatografia em coluna; a caracterização por espectroscopia no infravermelho, espectroscopia de ressonância magnética nuclear, ponto de fusão, espectroscopia de massa e cromatografia em fase gasosa. Articulação de conceito teóricos e prático, recursos de informática e outras mídias para elaboração de proposta de ensino para apresentação oral e escrita.',
			semestre: 1,
			vector: {T:0, P:2, L:8, O:2, D:0, HS:12, SL:8, C:12},
			requisitos: ['QG109', 'QI246', 'QO521'],
			color: '#695DB9',
			obligatory: true
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#468BB9',
			obligatory: true
		},
		'QF535': {
			code: 'QF535',
			name: 'Introdução à Química Quântica',
			ementa: 'Evolução histórica da descrição da luz e da matéria. A antiga mecânica quântica, quantização da energia da radiação e mecânica. Os postulados da mecânica quântica ondulatória. Aplicações a sistemas simples. Química quântica: estruturas atômicas e estruturas moleculares de sistemas simples. Ensino de química quântica: atividades orientadas utilizando recursos de informática e outras mídias. Avaliação crítica de bibliografia relacionada com material instrucional e produção de conhecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['MA311', 'QI246', '*F_328'],
			color: '#527BA6',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B946A2',
			obligatory: true
		},
		'QF732': {
			code: 'QF732',
			name: 'Físico-Química Experimental II',
			ementa: 'Experimentos relacionados aos temas: espectroscopia molecular, propriedades de materiais e físico-química de coloides e superfícies.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QF535'],
			color: '#527BA6',
			obligatory: true
		},
		'QG680': {
			code: 'QG680',
			name: 'Estágio Supervisionado I',
			ementa: 'Atividades formativas supervisionadas para promover interação com experiências, práticas e conhecimentos relacionados com o ensino de Química e o material instrucional disponível em escolas e espaços de educação não formal. As ações desenvolvidas incluem a inserção na dinâmica da escola e seus processos de organização, gestão e interação com a comunidade.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:5, D:0, HS:6, SL:1, C:6},
			requisitos: ['AA460', 'EL774'],
			color: '#468BB9',
			obligatory: true
		},
		'QG760': {
			code: 'QG760',
			name: 'Projetos de Ensino em Química',
			ementa: 'Discussões presenciais (3 horas-aula semanais) envolvendo aspectos teóricos e conceituais para fundamentar a elaboração de projetos experimentais ou teóricos relacionados ao ensino de Química, com foco na educação básica ou não formal. Os projetos serão executados durante o semestre letivo, acompanhados pela leitura crítica de textos diversos envolvendo a temática do Ensino de Química e da Educação, aplicação de recursos de informática e outra mídias, visando a elaboração de apresentação oral e relatórios que serão compartilhados com a turma nos encontros em sala de aula. O resultado de cada projeto, devidamente fundamentado com literatura específica e registrado numa monografia, que pode incluir material instrucional, será também apresentado em forma oral.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:5, D:0, HS:8, SL:3, C:8},
			requisitos: ['AA470'],
			color: '#465DB9',
			obligatory: true
		},
		'QO551': {
			code: 'QO551',
			name: 'Bioquímica I',
			ementa: 'Introdução, aminoácidos, proteínas: estrutura, métodos para análise de proteínas, função de proteínas, carboidratos, ácidos nucleicos e estrutura de RNA e DNA, métodos para análise de ácidos nucleicos, princípios da tecnologia de DNA recombinante, lipídeos e membranas biológicas, transporte através de membranas, enzimologia, tópicos selecionados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521'],
			color: '#8B46B9',
			obligatory: true
		},
		'EL213': {
			code: 'EL213',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A246B9',
			obligatory: true
		},
		'QA815': {
			code: 'QA815',
			name: 'Química do Meio Ambiente',
			ementa: 'Química dos solos, águas e atmosfera; sua dinâmica. Poluição ambiental: prevenção e tratamento. Reações químicas e processos de interesse para a saúde humana nas águas, no solo e na atmosfera. Legislação e poluição ambiental. Prevenção e processos de tratamento (remediação).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA475'],
			color: '#B94674',
			obligatory: true
		},
		'QF661': {
			code: 'QF661',
			name: 'Química Aplicada',
			ementa: 'Materiais: polímeros, metais, cerâmicas e vidros. Colóides e superfícies: surfactantes, espumas, molhabilidade, detergência, estabilidade e propriedade de dispersões.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QF531', '*QO521'],
			color: '#7A55B7',
			obligatory: true
		},
		'QG880': {
			code: 'QG880',
			name: 'Estágio Supervisionado II',
			ementa: 'Execução de projetos supervisionados de práticas de Ensino de Química em escola ou espaço não formal de educação para articulação de habilidades e competências desenvolvidas nas atividades de formação química e didático-pedagógica. As ações desenvolvidas incluem a inserção na dinâmica da escola e seus processo de organização, gestão e interação com a comunidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['EL874', 'QG680'],
			color: '#468BB9',
			obligatory: true
		},
		'QL701': {
			code: 'QL701',
			name: 'Projetos Integrados',
			ementa: 'Execução de projetos de Ensino de Química, com articulação de aspectos conceituais desenvolvidos com abordagem teórica e/ou experimental e/ou com aplicação de recursos de informática e outras mídias, direcionados para o ensino médio. A fundamentação dos projetos envolve levantamento bibliográfico crítico e dirigido, com posterior elaboração de texto descritivo da proposta executada. As atividades são orientadas de maneira integrada por profissionais do Instituto de Química e da Faculdade da Educação da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['QG760'],
			color: '#465DB9',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AM---': {
			code: 'AM---',
			name: 'Qualquer Disciplina com codigo AM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B98B46',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5DB946',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B98B',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46A2B9',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B95D46',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B974',
			obligatory: false
		},
		'QG981': {
			code: 'QG981',
			name: 'Tópicos Especiais em Ensino de Química I',
			ementa: 'Abordagem de temas contemporâneos direta ou indiretamente relacionados ao Ensino de Química, com articulação de conhecimento científico, produções bibliográficas e material instrucional. Especificidades seráo decritas por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B9B9',
			obligatory: false
		},
		'QG982': {
			code: 'QG982',
			name: 'Tópicos Especiais em Ensino de Química II',
			ementa: 'Abordagem de temas contemporâneos direta ou indiretamente relacionados ao Ensino de Química, com articulação de conhecimento científico, produções bibliográficas e material instrucional. Especificidades seráo decritas por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B97446',
			obligatory: false
		},
		'QG983': {
			code: 'QG983',
			name: 'Tópicos Especiais em Ensino de Química III',
			ementa: 'Abordagem de temas contemporâneos direta ou indiretamente relacionados ao Ensino de Química, com articulação de conhecimento científico, produções bibliográficas e material instrucional. Especificidades seráo decritas por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B9B946',
			obligatory: false
		},
		'QG984': {
			code: 'QG984',
			name: 'Tópicos Especiais em Ensino de Química IV',
			ementa: 'Abordagem de temas contemporâneos direta ou indiretamente relacionados ao Ensino de Química, com articulação de conhecimento científico, produções bibliográficas e material instrucional. Especificidades seráo decritas por ocasião do oferecimento da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#8BB946',
			obligatory: false
		},
		'QL702': {
			code: 'QL702',
			name: 'Atividades Científico-Culturais I',
			ementa: 'Contato com a produção e divulgação de conhecimentos da Química, da Educação e de áreas afins em atividades científicas e culturais, a partir da participação em eventos como congressos, seminários, palestras e oficinas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B95D',
			obligatory: false
		},
		'QL703': {
			code: 'QL703',
			name: 'Atividades Científico-Culturais II',
			ementa: 'Interação com a produção e a divulgação de conhecimentos da Química, da Educação e de áreas afins em atividades científicas e culturais, mediante a participação em eventos como congressos, seminários, palestras e oficinas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#5D46B9',
			obligatory: false
		}
	}
};

export default catalogue;
