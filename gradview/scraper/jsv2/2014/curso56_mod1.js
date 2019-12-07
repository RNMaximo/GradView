const catalogue = {
	totalCredits: 193,
	maxCreditsSem: 24,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EL103', 'QG108', 'F_129', 'MA111', 'EL136']
		},
		'sem-2': {
			id: '2',
			subjects: ['EL683', 'F_128', 'MA141', 'QG109', 'EL203']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL204', 'F_228', 'F_229', 'QA282', 'EL303']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL511', 'ELET04', 'EL403', 'MA211']
		},
		'sem-5': {
			id: '5',
			subjects: ['QI145', 'F_328', 'F_329', 'QF431', 'MA311', 'GT001']
		},
		'sem-6': {
			id: '6',
			subjects: ['QI245', 'F_428', 'F_429', 'QF531', 'EL212']
		},
		'sem-7': {
			id: '7',
			subjects: ['GM861', 'QO321', 'EL774']
		},
		'sem-8': {
			id: '8',
			subjects: ['QO521', 'QF530', 'EL874', 'QF952']
		},
		'sem-9': {
			id: '9',
			subjects: ['QA815', 'QG760', 'QG680']
		},
		'sem-10': {
			id: '10',
			subjects: ['QG650', 'QL701', 'QG880', 'QO551']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'EL103': {
			code: 'EL103',
			name: 'Colóquios I',
			ementa: 'Conjunto de atividades oferecidas na forma de seminários, palestras e oficinas, abordando temas da produção científica e cultural, que são de interesse da Educação, da Física, da Química e da Educação em Ciências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96A46',
			obligatory: true
		},
		'EL136': {
			code: 'EL136',
			name: 'Problemas do Ensino de Física e Química',
			ementa: 'Reconhecimento, análise e proposta de solução para os principais problemas do Ensino de Física e Química nas escolas de ensino médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B3',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Experiências de laboratório sobre: cinemática do ponto, Leis de Newton, estática e dinâmica da partícula, trabalho e energia, conservação da energia, momento linear e sua conservação, colisões, momento angular da partícula e de sistemas de partículas e rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#465EB9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B9468F',
			obligatory: true
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#52B946',
			obligatory: true
		},
		'EL203': {
			code: 'EL203',
			name: 'Colóquios II',
			ementa: 'Atividades na forma de seminários, palestras de oficinas com temas de interesse da Educação, Física, Química, Educação em Ciências e/ou outras áreas afins, como: Música, Fonoaudiologia, Farmácia, Bioquímica, Biologia, etc.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#76B946',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9A7',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5246B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98F46',
			obligatory: true
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B95E',
			obligatory: true
		},
		'EL204': {
			code: 'EL204',
			name: 'Seminários Integrados de Atividades em Física e Química',
			ementa: 'Conjunto de Seminários com a participação de pesquisadores do IFGW e do IQ, com exposição de características e peculiaridades de seus trabalhos de pesquisa.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B983',
			obligatory: true
		},
		'EL303': {
			code: 'EL303',
			name: 'Colóquios III',
			ementa: 'Conjunto de atividades oferecidas na forma de seminários, palestras e oficinas, abordando temas da produção científica e cultural, que são de interesse da Educação, da Física, da Química e da Educação em Ciências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9BB946',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#5246B9',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#4C52B9',
			obligatory: true
		},
		'QA282': {
			code: 'QA282',
			name: 'Química Clássica',
			ementa: 'Técnicas de Análise qualitativa envolvendo a separação e reconhecimento de cátions e ânions. Análise quantitativa. Volumetria. Gravimetria. Equilíbrios iônicos, ácido-base, de íons complexos e de oxidorredução. Solubilidade e produto de solubilidade. Tratamento de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG109'],
			color: '#46B95E',
			obligatory: true
		},
		'EL403': {
			code: 'EL403',
			name: 'Colóquios IV',
			ementa: 'Conjunto de atividades oferecidas na forma de seminários, palestras e oficinas, abordando temas da produção científica e cultural, que são de interesse da Educação, da Física, da Química e da Educação em Ciências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4683B9',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#B96B6B',
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
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#975E85',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#8052A4',
			obligatory: true
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#46A7B9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#B96B6B',
			obligatory: true
		},
		'QF431': {
			code: 'QF431',
			name: 'Físico-Química I',
			ementa: 'Estado gasoso: propriedades PVT de gases ideal e real; equação de van der Waals; princípio dos estados correspondentes. Conceitos básicos de Termodinâmica: primeira, segunda e terceira Leis; funções termodinâmicas; termoquímica; aplicações. Condições de equilíbrio e regra das fases: sistemas de um e de mais componente. Propriedades coligativas; atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'QG108'],
			color: '#869259',
			obligatory: true
		},
		'QI145': {
			code: 'QI145',
			name: 'Interações Químicas',
			ementa: 'Teoria dos orbitais moleculares para moléculas poliatômicas. Introdução à teoria de grupo. Ácidos e bases.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QG108'],
			color: '#52B946',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B9B346',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#975E85',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#8052A4',
			obligatory: true
		},
		'QF531': {
			code: 'QF531',
			name: 'Físico-Química II',
			ementa: 'Teoria cinética dos gases: equação barométrica, Lei de Maxwell-Boltzmann para a distribuição de velocidades; potencial intermolecular. Cinética química: equações de velocidade; catálises homogênea e heterogênea; reações rápidas, noções sobre dinâmica molecular. Eletroquímica: condutividade de soluções, Lei de Ostwald; equilíbrio iônico; propriedades termodinâmicas; coeficientes de atividade; teoria de Debye-Hückel; pilhas e reações eletroquímicas; passivação e corrosão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF431'],
			color: '#869259',
			obligatory: true
		},
		'QI245': {
			code: 'QI245',
			name: 'Química de Sólidos',
			ementa: 'Empacotamento. Sistemas cristalinos. Estruturas cristalinas simples. Difração de raios X. Ligação em sólidos. Defeitos e não-estequiometria. Sólidos de baixa dimensionalidade, sólidos organizados. Propriedades eletrônicas, ópticas e magnéticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['QI145'],
			color: '#52B946',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200', 'AA445'],
			color: '#B9466A',
			obligatory: true
		},
		'GM861': {
			code: 'GM861',
			name: 'Mineralogia (Química)',
			ementa: 'Geoquímica de crosta terrestre; revisão de cristaloquímica, sistemas cristalinos e simetria; tipos de estruturas cristalinas, cálculo de sítios de ocupação; propriedades e identificação macroscópica de minerais; identificação de minerais por difratometria de raio-X; processos de formação de rochas e físico-química da cristalização magmática; identificação macroscópica das rochas; usos dos minerais na indústria; dinâmica do planeta: interior da terra e tectônica de placas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QI145', 'QI245'],
			color: '#52B946',
			obligatory: true
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: '#52B946',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho, que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#B9466A',
			obligatory: true
		},
		'QF530': {
			code: 'QF530',
			name: 'Introdução à Química Quântica e Espectroscopia Molecular',
			ementa: 'Noções de Espectroscopia e Postulados da mecânica quântica. Partícula na caixa e estrutura eletrônica. Rotor rígido e espectroscopia rotacional de moléculas diatômicas. Oscilador harmônico e espectroscopia vibracional de moléculas diatômicas. Espectroscopia roto-vibracional de moléculas diatômicas. Estrutura eletrônica, estados fundamental e excitados. Fotoquímica e fotofísica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', '*F_428', 'QI145'],
			color: '#8B8167',
			obligatory: true
		},
		'QF952': {
			code: 'QF952',
			name: 'Físico-Química Experimental',
			ementa: 'Experimentos relacionados aos tópicos: termodinâmica química, cinética, eletroquímica, equilíbrio de fases, propriedades coligativas, propriedades de materiais e físico-química de coloides e superfícies.',
			semestre: 1,
			vector: {T:0, P:0, L:6, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*QF531'],
			color: '#869259',
			obligatory: true
		},
		'QO521': {
			code: 'QO521',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos e derivados. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático, substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas. Em todos os casos, relação entre características estruturais e reatividade, com ênfase em mecanismos, relações estereoquímicas envolvidas e ampla exemplificação de aplicações.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO321'],
			color: '#52B946',
			obligatory: true
		},
		'QA815': {
			code: 'QA815',
			name: 'Química do Meio Ambiente',
			ementa: 'Química dos solos, águas e atmosfera; sua dinâmica. Poluição ambiental: prevenção e tratamento. Reações químicas e processos de interesse para a saúde humana nas águas, no solo e na atmosfera. Legislação e poluição ambiental. Prevenção e processos de tratamento (remediação).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA475'],
			color: '#7646B9',
			obligatory: true
		},
		'QG680': {
			code: 'QG680',
			name: 'Estágio Supervisionado I',
			ementa: 'Execução de projetos através de práticas supervisionadas.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:5, D:0, HS:6, SL:1, C:6},
			requisitos: ['AA460', 'EL774'],
			color: '#B9466A',
			obligatory: true
		},
		'QG760': {
			code: 'QG760',
			name: 'Projetos de Ensino em Química',
			ementa: 'Discussões presenciais (3 horas-aula semanais) envolvendo aspectos teóricos e conceituais para fundamentar a elaboração de projetos experimentais ou teóricos relacionados ao ensino de Química, que serão executados durante o semestre letivo, que serão apresentados em forma oral e escrita.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:5, D:0, HS:8, SL:3, C:8},
			requisitos: ['AA470'],
			color: '#9B46B9',
			obligatory: true
		},
		'QG650': {
			code: 'QG650',
			name: 'Laboratório de Síntese Orgânica e Inorgânica',
			ementa: 'Aprendizado das técnicas de preparação, isolamento, purificação e caracterização de substâncias orgânicas e inorgânicas, de manipulação de substâcias tóxicas e inflamáveis, e da montagem de aparelhagens necessárias para diversas finalidades. São estudadas diversas estratégias de síntese, purificação e caracterização, incluindo a utilização de atmosfera inerte.',
			semestre: 1,
			vector: {T:0, P:0, L:6, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QI145', 'QI245', 'QO521'],
			color: '#52B946',
			obligatory: true
		},
		'QG880': {
			code: 'QG880',
			name: 'Estágio Supervisionado II',
			ementa: 'Execução de projetos supervisionados.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['EL874', 'QG680'],
			color: '#B9466A',
			obligatory: true
		},
		'QL701': {
			code: 'QL701',
			name: 'Projetos Integrados',
			ementa: 'Desenvolvimento de projetos de ensino de Química, com articulação de aspectos conceituais com abordagem teórica e/ou experimental, direcionados para o nível médio. Atividades orientadas de maneira integrada por profissionais do Instituto de Química e da Faculdade da Educação da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['QG760'],
			color: '#9B46B9',
			obligatory: true
		},
		'QO551': {
			code: 'QO551',
			name: 'Bioquímica I',
			ementa: 'Introdução, aminoácidos, proteínas: estrutura, métodos para análise de proteínas, função de proteínas, carboidratos, ácidos nucleicos e estrutura de RNA e DNA, métodos para análise de ácidos nucleicos, princípios da tecnologia de DNA recombinante, lipídeos e membranas biológicas, transporte através de membranas, enzimologia, tópicos selecionados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521'],
			color: '#52B946',
			obligatory: true
		}
	}
};

export default catalogue;
