const catalogue = {
	totalCredits: 219,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AD011', 'AD021', 'AD030', 'AD041', 'AD116', 'AD135', 'AD421', 'AR101']
		},
		'sem-2': {
			id: '2',
			subjects: ['AD022', 'AD012', 'BF223', 'AD042', 'AD235', 'AD521', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['AD023', 'ELET03', 'AD051', 'AD335', 'AD043', 'AD601', 'EF920', 'AR301']
		},
		'sem-4': {
			id: '4',
			subjects: ['AD024', 'ELET04', 'AD435', 'AD044', 'AD052', 'EF921']
		},
		'sem-5': {
			id: '5',
			subjects: ['AD025', 'ELET05', 'AD045', 'AD053']
		},
		'sem-6': {
			id: '6',
			subjects: ['AD026', 'ELET06', 'AD046', 'AD054']
		},
		'sem-7': {
			id: '7',
			subjects: ['AD061', 'AD055', 'AD047', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['AD062', 'AD056', 'AD048']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---', 'ML---', 'MP---', 'MU---'],
		},
	},

	subjects: {
		'AD011': {
			code: 'AD011',
			name: 'Ateliê de Prática em Dança I',
			ementa: 'Desenvolvimento de atividades em Consciência Corporal, Expressão e Movimento e estudos de organização física do espaço. Realização de outros trabalhos que propiciem leituras corporais e de exercícios rítmicos, onde haja integração entre música e dança. Objetiva reunir organicamente as habilidades e competências, teóricas e práticas, de refletir e compreender criticamente os fundamentos que organizam o conhecimento específico na dança.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'AD021': {
			code: 'AD021',
			name: 'Ateliê de Criação I',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos através da improvisação como meio de pesquisa corporal. Exercícios individuais e em grupos de percepção, abordando conteúdos concernentes ao espaço, peso e forma na dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'AD030': {
			code: 'AD030',
			name: 'Ateliê de Produção Cênica',
			ementa: 'Refletir o que seja uma produção artística em dança. As etapas que envolvem o processo de criação, desde concepção até apresentação cênica. Desenvolver habilidades técnicas e criativas para a elaboração de projetos de produção cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B96346',
			obligatory: true
		},
		'AD041': {
			code: 'AD041',
			name: 'Técnica I: Investigação e Percepção',
			ementa: 'Introduzir os três elementos básicos da dança: eixo, equilíbrio e alinhamento dinâmico. Organização do corpo em movimento enfatizando o apoio da musculatura profunda nos trabalhos de transferência de peso. Mobilidade do eixo central em suas direções básicas - frente, trás e lado. Adequação do tônus muscular através de variadas dinâmicas, buscando a construção de uma percepção tridimensional do corpo no espaço.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94680',
			obligatory: true
		},
		'AD116': {
			code: 'AD116',
			name: 'Anatomia e Fisiologia Humana Básica',
			ementa: 'Desenvolvimento de conceitos morfológicos e fisiológicos fundamentais dos sistemas orgânicos do homem. Os aspectos relacionados ao aparelho locomotor e sistema nervoso serão enfatizados devido à especificidade desta disciplina aos alunos interessados na dança e por ser ela pré-requisito das demais disciplinas que visam ao estudo do movimento. O curso é desenvolvido através de aulas teóricas e práticas com ênfase na relação forma-função em todos os aspectos abordados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'AD135': {
			code: 'AD135',
			name: 'Dança do Brasil I',
			ementa: 'Iniciação ao estudo do movimento e aprendizado de um vocabulário provindo de manifestações tradicionais e populares brasileiras. Investigação de manifestações culturais que envolvem a história pessoal do aluno.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'AD421': {
			code: 'AD421',
			name: 'História da Dança I',
			ementa: 'Traçar um panorama sobre a história da dança em sua relação com aspectos teóricos das artes e da cultura. Balé e primórdios: renascença, dança de corte, balé barroco, ópera e comédia-balé, balé de ação, os pré-românticos, o romântico, dança cênica ocidental do final do século XIX; a revolução russa, balé moderno na Europa e Américas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9C46B9',
			obligatory: true
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4663B9',
			obligatory: true
		},
		'AD012': {
			code: 'AD012',
			name: 'Ateliê de Prática em Dança II',
			ementa: 'Desenvolvimento de atividades em Consciência Corporal e Expressão e Movimento, de modo que seus conteúdos sejam integrados as técnicas de dança. Realização de outros trabalhos que propiciem leituras corporais e ênfase na fundamentação estética das relações entre as linguagens musicais e a dança. Aprofundamento e desenvolvimento do Ateliê de Prática em Dança I.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AD011'],
			color: '#46B963',
			obligatory: true
		},
		'AD022': {
			code: 'AD022',
			name: 'Ateliê de Criação II',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos, através de estruturas auxiliares no processo de composição em dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD021'],
			color: '#B94646',
			obligatory: true
		},
		'AD042': {
			code: 'AD042',
			name: 'Técnica II: Investigação e Percepção',
			ementa: 'Construção de uma relação ativa com a gravidade. Prática de alongamento e sustentação baseado na oposição de forças que participam do movimento. Iniciação e sequência do movimento como preparação para o trabalho de independência das partes do corpo. Introdução aos conceitos elucidados em AD041 sob o enfoque do vocabulário da dança clássica.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AD041'],
			color: '#B94680',
			obligatory: true
		},
		'AD235': {
			code: 'AD235',
			name: 'Dança do Brasil II',
			ementa: 'Aprofundamento dos estudos do movimento provindo de manifestações tradicionais e populares brasileiras. Estudo coreográfico de uma manifestação específica. Primeiras experiências em pesquisa de campo.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AD135'],
			color: '#80B946',
			obligatory: true
		},
		'AD521': {
			code: 'AD521',
			name: 'História da Dança II',
			ementa: 'Traçar um panorama sobre a história da dança em sua relação com aspectos teóricos das artes e da cultura. Dança moderna no século XX, dança pós-moderna, happenign e performance, novas danças (new dance norte-americana e nouvelles danses francesa, belga, canadense), dança-teatro no mundo, novas tendências, dança e novas mídias.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AD421'],
			color: '#9C46B9',
			obligatory: true
		},
		'BF223': {
			code: 'BF223',
			name: 'Fisiologia do Movimento',
			ementa: 'Estudo dos mecanismos neurofisiológicos relacionados à organização da função motora no homem. Os aspectos referentes às vias de transmissão periférica e ao aparelho locomotor são abordados conforme as necessidades do curso. São enfatizadas as questões relacionadas à produção de movimentos voluntários complexos e à aquisição de habilidades motoras. O curso será desenvolvido através de aulas teóricas e práticas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AD116'],
			color: '#B946B9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD023': {
			code: 'AD023',
			name: 'Ateliê de Criação III',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos, através da improvisação com ênfase na investigação de focos, relação entre as partes do corpo e a interação deste com o outro. Estudo da temporalidade na música e na dança. Aprofundamento e desenvolvimento do Ateliê de Criação I.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD022'],
			color: '#B94646',
			obligatory: true
		},
		'AD043': {
			code: 'AD043',
			name: 'Técnica III: Prática e Análise',
			ementa: 'Desenvolvimento dos conteúdos da dança clássica, acrescentando o uso de dinâmicas e sequências estruturadas. Trabalhos relacionados a independência articular visando a qualidade do movimento e coordenação motora. Práticas variadas de movimentos com ênfase em deslocamentos no espaço, uso de espirais, saltos e giros. Introdução à contração.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AD042'],
			color: '#B94680',
			obligatory: true
		},
		'AD051': {
			code: 'AD051',
			name: 'Atividade Científico Cultural I',
			ementa: 'Esta disciplina terá seu programa definido em função das atividades e pesquisas que se realizam no Curso de Dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#9CB946',
			obligatory: true
		},
		'AD335': {
			code: 'AD335',
			name: 'Dança do Brasil III',
			ementa: 'A partir de um tema específico proposto sobre realidades míticas, da percepção de rituais populares e religiosos de povos brasileiros, desenvolver de forma criativa, interdisciplinar o trabalho de expressividade do intérprete na Dança do Brasil.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AD235'],
			color: '#80B946',
			obligatory: true
		},
		'AD601': {
			code: 'AD601',
			name: 'História da Dança no Brasil',
			ementa: 'Estudo da dança e de sua história no Brasil, do Brasil e sobre o Brasil. Nação e folclore, dança e nação, as questões do nacional-popular; Balé romântico e nação, pré-românticos: temas, danças e gestos, dança moderna e contemporânea: o século XX no Brasil; o mundial e o topológico: o Brasil na rede da dança.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AD521'],
			color: '#9C46B9',
			obligatory: true
		},
		'AR301': {
			code: 'AR301',
			name: 'Psicologia do Desenvolvimento Aplicado às Artes I',
			ementa: 'A compreensão do desenvolvimento do ser humano em relação aos aspectos da habilidade motora, da ampliação do conhecimento e da capacidade criadora, levando-se em conta a expressão lúdica e o aprofundamento da percepção corporal, visual e auditiva do indivíduo. A experiência do fenômeno da arte, tanto em sua aproximação do material concreto quanto na realização de composições mais elaboradas, permitindo a compreensão do processo criativo e evidenciando a necessidade da expressão individual, experiência essa adequada às diversas fases evolutivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#469CB9',
			obligatory: true
		},
		'EF920': {
			code: 'EF920',
			name: 'Cinesiologia I',
			ementa: 'Estudo dos métodos de análise do movimento. Visão geral dos aspectos cinesiológicos fundamentais que deverão ser usados de forma coerente na avaliação e/ou proposta de solução para problemas específicos na prática de dança. Estudo dos movimentos dos membros superiores.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#63B946',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD024': {
			code: 'AD024',
			name: 'Ateliê de Criação IV',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos, através da análise e construção de métodos de composição em dança. Desenvolvimento da relação entre a estrutura música e da dança. Aprofundamento e desenvolvimento do Ateliê de Criação II.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD023'],
			color: '#B94646',
			obligatory: true
		},
		'AD044': {
			code: 'AD044',
			name: 'Técnica IV: Prática e Análise',
			ementa: 'Abordagem dos elementos da dança clássica, anteriormente estudados, integrados a outras linguagens de dança. Aprofundamento dos conceitos que trabalham com peso e espaço: queda e recuperação e a relação com o impulso. Flexibilização do uso de diferentes direções no espaço tridimensional, a partir da projeção da organização do espaço interno.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AD043'],
			color: '#B94680',
			obligatory: true
		},
		'AD052': {
			code: 'AD052',
			name: 'Atividade Científico Cultural II',
			ementa: 'Esta disciplina terá seu programa definido em função das atividades e pesquisas que se realizam no Curso de Dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B98046',
			obligatory: true
		},
		'AD435': {
			code: 'AD435',
			name: 'Dança do Brasil IV',
			ementa: 'Desenvolvimento de processo criativo e interdisciplinar em trabalho de expressividade do intérprete. Pesquisa de campo e estabelecimento de tema específico a partir de rituais de manifestações e/ou de segmentos sociais pesquisados.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AD335'],
			color: '#80B946',
			obligatory: true
		},
		'EF921': {
			code: 'EF921',
			name: 'Cinesiologia II',
			ementa: 'Estudo cinesiológico da coluna vertebral e membros inferiores. São enfatizados aspectos relacionados à maneira mais eficaz de utilização do corpo nos movimentos cotidianos e de dança, visando ao melhor desempenho e prevenção de traumas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF920'],
			color: '#63B946',
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
		'AD025': {
			code: 'AD025',
			name: 'Ateliê de Criação V',
			ementa: 'A disciplina tem por objetivo realizar pesquisa visando uma síntese coreográfica através dos conteúdos abordados nos Ateliês de Criação anteriores. Pretende estabelecer relações entre as linguagens musicais e a concepção coreográfica. Desenvolver um olhar analítico e crítico, através da observação de um processo criativo em andamento, das linhas de pesquisa dos docentes do Curso de Graduação em Dança.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AD024'],
			color: '#B94646',
			obligatory: true
		},
		'AD045': {
			code: 'AD045',
			name: 'Técnica V: Variação e Exploração',
			ementa: 'Estudos e ênfase no uso dos apoios no solo que propiciem um ativo suporte nas quedas e recuperação. Relação do peso, do tempo e do contratempo. Importância da respiração integrada ao movimento e a percepção do uso consistente da energia durante a aula. Exploração do espaço com ritmos variados e dinâmica.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD044'],
			color: '#B94680',
			obligatory: true
		},
		'AD053': {
			code: 'AD053',
			name: 'Atividade Científico Cultural III',
			ementa: 'Esta disciplina terá seu programa definido em função das atividades e pesquisas que se realizam no Curso de Dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#8046B9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD026': {
			code: 'AD026',
			name: 'Ateliê de Criação VI',
			ementa: 'A disciplina tem por objetivo realizar pesquisa visando uma síntese coreográfica através dos conteúdos abordados nos Ateliês de Criação anteriores. Pretende estabelecer relações entre o indivíduo com seu espaço de atuação, e enfatizar a interação entre outras áreas de investigação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AD025'],
			color: '#B94646',
			obligatory: true
		},
		'AD046': {
			code: 'AD046',
			name: 'Técnica VI: Variação e Exploração',
			ementa: 'Trabalhos enfatizando o registro dos movimentos em sequências e variações. Maior atenção na aplicação da memória espacial anteriormente construída através do trabalho de percepção tridimensional do corpo no espaço. Estudo da utilização do foco e sua projeção no movimento. Desenvolvimento das estruturas de movimento levando em consideração as complexidades rítmicas.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD045'],
			color: '#B94680',
			obligatory: true
		},
		'AD054': {
			code: 'AD054',
			name: 'Atividade Científico Cultural IV',
			ementa: 'Esta disciplina terá seu programa definido em função das atividades e pesquisas que se realizam no Curso de Dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46B99C',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD047': {
			code: 'AD047',
			name: 'Técnica VII: Expressão e Integração',
			ementa: 'Fluência em variações elaboradas. Ênfase no domínio do movimento e a capacidade de responder a sequências, que integrem além de complexidade técnica, expressividade e desempenho performático.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD046'],
			color: '#B94680',
			obligatory: true
		},
		'AD055': {
			code: 'AD055',
			name: 'Atividade Científico Cultural V',
			ementa: 'Esta disciplina terá seu programa definido em função das atividades e pesquisas que se realizam no Curso de Dança.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#46B9B9',
			obligatory: true
		},
		'AD061': {
			code: 'AD061',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Configura-se numa atividade de orientação específica para o desenvolvimento de pesquisa e criação em Dança que deverá evidenciar a integração dos conteúdos desenvolvidos durante o curso. É o resultado de estudos coreográficos de um tema ou de uma questão específica sobre determinado assunto. É em seu próprio corpo que o aluno realizará a sua síntese, a dança é a sua escrita.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:0, C:10},
			requisitos: ['AD012', 'AD026', 'AD030', 'AD046', 'AD435'],
			color: '#977A57',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD048': {
			code: 'AD048',
			name: 'Técnica VIII: Expressão e Integração',
			ementa: 'Qualidades performáticas, disponibilidade, prontidão técnica e expressiva respondendo a integração dos elementos desenvolvidos ao longo das disciplinas AD041, AD042, AD043, AD044, AD045, AD046 e AD047.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD047'],
			color: '#B94680',
			obligatory: true
		},
		'AD056': {
			code: 'AD056',
			name: 'Atividade Científico Cultural VI',
			ementa: 'Esta disciplina terá seu programa definido em função das atividades e pesquisas que se realizam no Curso de Dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B94663',
			obligatory: true
		},
		'AD062': {
			code: 'AD062',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Prosseguimento e término das atividades que se iniciaram em Trabalho de Conclusão de Curso I, tendo por resultado final uma apresentação pública (a ser avaliada por uma banca).',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:0, C:10},
			requisitos: ['AD061'],
			color: '#977A57',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#6346B9',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4646B9',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4680B9',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9B946',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B99C46',
			obligatory: false
		},
		'ML---': {
			code: 'ML---',
			name: 'Qualquer Disciplina com codigo ML---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ML---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B980',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9469C',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B946',
			obligatory: false
		}
	}
};

export default catalogue;
