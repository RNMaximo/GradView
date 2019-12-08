const catalogue = {
	totalCredits: 268,
	maxCreditsSem: 40,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AD021', 'AD135', 'AD030', 'AD041', 'AR101', 'AD013', 'AD421', 'AD116']
		},
		'sem-2': {
			id: '2',
			subjects: ['ELET02', 'AD022', 'AD015', 'AD042', 'AD014', 'EL683', 'AD521', 'BF223']
		},
		'sem-3': {
			id: '3',
			subjects: ['ELET03', 'AD023', 'AD335', 'AD016', 'EL511', 'AR301', 'EF920', 'AD601', 'AD051']
		},
		'sem-4': {
			id: '4',
			subjects: ['AD213', 'AD017', 'AD435', 'AD044', 'ELET04', 'AD052', 'EL212', 'EL213', 'EF921']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'AD025', 'AD045', 'EL774', 'AD071', 'AD053', 'AR601']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06', 'AD026', 'AD046', 'EL874', 'AD072', 'AD621', 'AD054']
		},
		'sem-7': {
			id: '7',
			subjects: ['AD061', 'AD047', 'AD083', 'AD055', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['AD062', 'AD048', 'AD084', 'AD056']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AP---', 'AR---', 'CS---', 'ML---', 'MP---', 'MU---'],
		},
		'elet-2': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 2,
			hasRestrictions: true,
			subjects: ['AC---', 'AP---', 'AR---', 'CS---', 'ML---', 'MP---', 'MU---'],
		},
	},

	subjects: {
		'AD013': {
			code: 'AD013',
			name: 'Ateliê de Prática e Ensino da Dança I',
			ementa: 'Desenvolvimento teórico-prático de atividades de sensibilização, consciência e expressão corporal. Estudos da interação corpo-espaço e dos fundamentos estruturais e funcionais que organizam conhecimentos específicos na dança. Investigação e reflexão crítica sobre a contribuição dos princípios somáticos nas práticas pedagógicas da dança, considerando o contexto de ensino formal e não formal.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: '',
			color: '#9546B9',
			obligatory: true
		},
		'AD021': {
			code: 'AD021',
			name: 'Ateliê de Criação I',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos através da improvisação como meio de pesquisa corporal. Exercícios individuais e em grupos de percepção, abordando conteúdos concernentes ao espaço, peso e forma na dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9465C',
			obligatory: true
		},
		'AD030': {
			code: 'AD030',
			name: 'Ateliê de Produção Cênica',
			ementa: 'Refletir o que seja uma produção artística em dança por meio de estudos prático-teóricos. Conhecer as etapas que envolvem o processo de criação, desde sua concepção até a apresentação cênica. Desenvolver habilidades técnicas e criativas para a elaboração de textos e redação de projetos de produção cênica.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4678B9',
			obligatory: true
		},
		'AD041': {
			code: 'AD041',
			name: 'Técnica I: Investigação e Percepção',
			ementa: 'Introduzir os três elementos básicos da dança: eixo, equilíbrio e alinhamento dinâmico. Organização do corpo em movimento enfatizando o apoio da musculatura profunda nos trabalhos de transferência de peso. Mobilidade do eixo central em suas direções básicas - frente, trás e lados. Adequação do tônus muscular através de variadas dinâmicas, buscando a construção de uma percepção tridimensional do corpo no espaço. Investigação da dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#95B946',
			obligatory: true
		},
		'AD116': {
			code: 'AD116',
			name: 'Anatomia e Fisiologia Humana Básica',
			ementa: 'Desenvolvimento de conceitos morfológicos e fisiológicos fundamentais dos sistemas orgânicos do homem. Os aspectos relacionados ao aparelho locomotor e sistema nervoso serão enfatizados devido à especificidade desta disciplina aos alunos interessados na dança e por ser ela pré-requisito das demais disciplinas que visam ao estudo do movimento. O curso prevê a atualização de saberes pré-adquiridos sobre a temática da disciplina através do desenvolvimento de aulas teóricas e práticas com ênfase na relação forma-função em todos os aspectos abordados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'AD135': {
			code: 'AD135',
			name: 'Dança do Brasil I',
			ementa: 'Iniciação ao estudo do movimento e aprendizado de um vocabulário provindo de manifestações tradicionais e populares brasileiras. Investigação de manifestações culturais que envolvem a história pessoal do aluno. Atualização dos saberes pré-adquiridos sobre a temática da disciplina',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4663B9',
			obligatory: true
		},
		'AD421': {
			code: 'AD421',
			name: 'História da Dança I',
			ementa: 'Traçar um panorama sobre a história da dança em sua relação com aspectos teóricos das artes e da cultura. Recorte na cronologia da dança cênica ocidental: dos primórdios do Balé até os movimentos emergentes do final do século XIX na Europa e Américas. Apontamentos sobre novas perspectivas de estudo historiográfico (pós-colonial e de-colonial) da dança. Pesquisa documental, análise de obras coreográficas e produção de textos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#ABB946',
			obligatory: true
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Atualização dos saberes pré-adquiridos sobre a temática da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B97146',
			obligatory: true
		},
		'AD014': {
			code: 'AD014',
			name: 'Ateliê de Prática e Ensino da Dança II',
			ementa: 'Desenvolvimento de atividades em Consciência Corporal e Expressão e Movimento, de modo que seus conteúdos sejam integrados as técnicas de dança. Realização de outros trabalhos que propiciem leituras corporais e ênfase na fundamentação estética das relações entre as linguagens artísticas. Abordagem dessas temáticas – corpo, movimento, a dança e as artes – no contexto pedagógico e escolar. Aprofundamento e desenvolvimento do Ateliê de Prática em Dança I.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AD013'],
			color: '#9546B9',
			obligatory: true
		},
		'AD015': {
			code: 'AD015',
			name: 'Dança do Brasil II: Prática e Ensino',
			ementa: 'Desenvolvimento de um ensino da dança que contemple as manifestações tradicionais populares brasileiras e seus respectivos segmentos sociais. Investigação dos processos de ensino-aprendizagem relacionados aos corpos diferenciados presentes nas festividades existentes no Brasil, considerando suas especificidades culturais. Enfoque sobre o corpo em movimento que reflita uma condição não etnocêntrica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AD135'],
			color: '#4663B9',
			obligatory: true
		},
		'AD022': {
			code: 'AD022',
			name: 'Ateliê de Criação II',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos, através de estruturas auxiliares no processo de composição em dança.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD021'],
			color: '#B9465C',
			obligatory: true
		},
		'AD042': {
			code: 'AD042',
			name: 'Técnica II: Investigação e Percepção',
			ementa: 'Construção de uma relação ativa com a gravidade. Prática de alongamento e sustentação baseado na oposição de forças que participam do movimento. Iniciação e sequência do movimento como preparação para o trabalho de independência das partes do corpo. Introdução aos conceitos elucidados em AD041 sob o enfoque do vocabulário da dança clássica. Investigação da dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AD041'],
			color: '#95B946',
			obligatory: true
		},
		'AD521': {
			code: 'AD521',
			name: 'História da Dança II',
			ementa: 'Traçar um panorama sobre a história da dança cênica no século XX em sua relação com aspectos teóricos das artes e da cultura, considerando também a perspectiva pós colonial e de-colonial. Dança moderna, dança pós-moderna, <em>happening</em> e <em>performance</em>, dança-teatro, novas tendências, dança e novas mídias. Pesquisa documental, análise de obras coreográficas e produção de textos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AD421'],
			color: '#ABB946',
			obligatory: true
		},
		'BF223': {
			code: 'BF223',
			name: 'Fisiologia do Movimento',
			ementa: 'Estudo dos mecanismos neurofisiológicos relacionados à organização da função motora no homem. Os aspectos referentes às vias de transmissão periférica e ao aparelho locomotor são abordados conforme as necessidades do curso. São enfatizadas as questões relacionadas à produção de movimentos voluntários complexos e à aquisição de habilidades motoras. O curso será desenvolvido através de aulas teóricas e práticas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AD116'],
			color: '#80B946',
			obligatory: true
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9A3',
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
		'AD016': {
			code: 'AD016',
			name: 'Técnica III: Prática, Análise e Ensino da Dança',
			ementa: 'Desenvolvimento dos conteúdos das técnicas clássica e contemporânea. Enfoque de vocabulários, dinâmicas e organizações espaço-temporais específicas às técnicas abordadas. Estudo de metodologias voltadas ao ensino técnico da dança para diferentes contextos e faixa etárias, visando a formação do futuro artista-educador da dança.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AD042'],
			color: '#95B946',
			obligatory: true
		},
		'AD023': {
			code: 'AD023',
			name: 'Ateliê de Criação III',
			ementa: 'A disciplina tem por objetivo fornecer subsídios para o desenvolvimento criativo de estudos coreográficos, através da improvisação com ênfase na investigação de focos, relação entre as partes do corpo e a interação deste com o outro. Aprofundamento e desenvolvimento do Ateliê de Criação II. Estudos prático-teóricos mediados por tecnologias de informação e comunicação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD022'],
			color: '#B9465C',
			obligatory: true
		},
		'AD051': {
			code: 'AD051',
			name: 'Atividade Científico Cultural I',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: '',
			color: '#46B94D',
			obligatory: true
		},
		'AD335': {
			code: 'AD335',
			name: 'Dança do Brasil III',
			ementa: 'A partir de um tema específico proposto sobre realidades míticas, da percepção de rituais populares e religiosos de povos brasileiros, desenvolver de forma criativa, interdisciplinar o trabalho de expressividade do intérprete na Dança do Brasil. Atualização dos saberes pré-adquiridos sobre a temática da disciplina',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AD015'],
			color: '#4663B9',
			obligatory: true
		},
		'AD601': {
			code: 'AD601',
			name: 'História da Dança no Brasil',
			ementa: 'Estudo da dança e de sua história no Brasil, do Brasil e sobre o Brasil. Atualização dos saberes pré-adquiridos sobre nação e folclore, dança e nação, as questões do nacional-popular. Pré-românticos, balé romântico e nação, dança moderna e contemporânea: o século XX no Brasil. O mundial e o topológico: o Brasil na rede da dança.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AD521'],
			color: '#ABB946',
			obligatory: true
		},
		'AR301': {
			code: 'AR301',
			name: 'Psicologia do Desenvolvimento Aplicado às Artes I',
			ementa: 'A compreensão do desenvolvimento do ser humano em relação aos aspectos da habilidade motora, da ampliação do conhecimento e da capacidade criadora, levando-se em conta a expressão lúdica e o aprofundamento da percepção corporal, visual e auditiva do indivíduo. A experiência do fenômeno da arte, tanto em sua aproximação do material concreto quanto na realização de composições mais elaboradas, permitindo a compreensão do processo criativo e evidenciando a necessidade da expressão individual, experiência essa adequada às diversas fases evolutivas e variadas formas de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B94671',
			obligatory: true
		},
		'EF920': {
			code: 'EF920',
			name: 'Cinesiologia I',
			ementa: 'Estudo dos métodos de análise do movimento. Visão geral dos aspectos cinesiológicos fundamentais que deverão ser usados de forma coerente na avaliação e/ou proposta de solução para problemas específicos na prática de dança. Estudo dos movimentos dos membros superiores.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B98E',
			obligatory: true
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD017': {
			code: 'AD017',
			name: 'Ateliê de Criação IV: Prática e Ensino',
			ementa: 'A disciplina aprofunda os estudos do Ateliê de Criação III. Fornece subsídios para o desenvolvimento de estudos coreográficos, por meio da análise e construção de métodos de composição em dança. Explora a relação entre estrutura musical e movimento corporal. Aborda a inter-relação entre criação em dança e seus processos de ensino-aprendizagem, propondo práticas e reflexões sobre a ação docente em diferentes ciclos e contextos educacionais.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD023'],
			color: '#B9465C',
			obligatory: true
		},
		'AD044': {
			code: 'AD044',
			name: 'Técnica IV: Prática e Análise',
			ementa: 'Abordagem dos elementos da dança clássica, anteriormente estudados, integrados a outras linguagens de dança. Aprofundamento dos conceitos que trabalham com peso e espaço: queda e recuperação e a relação com o impulso. Flexibilização do uso de diferentes direções no espaço tridimensional, a partir da projeção da organização do espaço interno. Análise da dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:8, C:10},
			requisitos: ['AD016'],
			color: '#95B946',
			obligatory: true
		},
		'AD052': {
			code: 'AD052',
			name: 'Atividade Científico Cultural II',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'AD213': {
			code: 'AD213',
			name: 'Introdução à Metodologia de Pesquisa',
			ementa: 'Relação entre ciência e arte. Noções básicas de metodologia de pesquisa. A pesquisa em dança. Desenvolver habilidades técnicas e criativas para a elaboração de textos e redação de projetos de pesquisa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'AD435': {
			code: 'AD435',
			name: 'Dança do Brasil IV',
			ementa: 'Desenvolvimento de processo criativo e interdisciplinar em trabalho de expressividade do intérprete. Pesquisa de campo e estabelecimento de tema específico a partir de rituais de manifestações e/ou de segmentos sociais pesquisados.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AD335'],
			color: '#4663B9',
			obligatory: true
		},
		'EF921': {
			code: 'EF921',
			name: 'Cinesiologia II',
			ementa: 'Estudo cinesiológico da coluna vertebral e membros inferiores. São enfatizados aspectos relacionados à maneira mais eficaz de utilização do corpo nos movimentos cotidianos e de dança, visando ao melhor desempenho e prevenção de traumas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EF920'],
			color: '#46B98E',
			obligatory: true
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B946B2',
			obligatory: true
		},
		'EL213': {
			code: 'EL213',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B246',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD025': {
			code: 'AD025',
			name: 'Ateliê de Criação V',
			ementa: 'A disciplina tem por objetivo realizar pesquisa visando uma síntese coreográfica através dos conteúdos abordados nos Ateliês de Criação anteriores. Pretende estabelecer relações entre concepção coreográfica e outras áreas do conhecimento artístico, incluindo-se as tecnologias de informação e comunicação. Desenvolver um olhar analítico e crítico, através da realização de um processo criativo, considerando que os processos artísticos carregam em si a dimensão prático-pedagógica.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AD017'],
			color: '#B9465C',
			obligatory: true
		},
		'AD045': {
			code: 'AD045',
			name: 'Técnica V: Variação e Exploração',
			ementa: 'Estudos e ênfase no uso dos apoios no solo que propiciem um ativo suporte nas quedas e recuperação. Relação do peso, do tempo e do contratempo. Importância da respiração integrada ao movimento e a percepção do uso consistente da energia durante a aula. Exploração do espaço com ritmos variados e dinâmicos. Aprofundamento na dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD044'],
			color: '#95B946',
			obligatory: true
		},
		'AD053': {
			code: 'AD053',
			name: 'Atividade Científico Cultural III',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#6AB946',
			obligatory: true
		},
		'AD071': {
			code: 'AD071',
			name: 'Estágio I',
			ementa: 'Instrumentalização do aluno para o desenvolvimento de atividade supervisionada de ensino, no ambiente formal (ensino infantil, fundamental e médio) e não formal, baseada no levantamento do meio sociocultural onde se encontra inserida a instituição educacional e no conhecimento da população por ela atendida. Pesquisa sobre as experiências educativas dos alunos e contextualização dos seus conhecimentos artístico-pedagógicos a partir de leituras do corpo, noções de dança e educação. Orientação da futura ação docente por meio de reflexões sobre as instâncias pedagógica e administrativa que atravessam as relações de ensino-aprendizagem. Reflexão sobre a relação entre as novas tecnologias e a educação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:5, D:0, HS:7, SL:2, C:7},
			requisitos: ['AR101', 'AR301', 'EL212', 'EL511', 'EL683'],
			color: '#8B7D7D',
			obligatory: true
		},
		'AR601': {
			code: 'AR601',
			name: 'Processos Pedagógicos Voltados para o Corpo na Arte',
			ementa: 'Discute conhecimentos e problemáticas que integram corpo, arte, educação e sociedade, apresentando fundamentos histórico-contextuais, teóricos, práticos e metodológicos direcionados ao ensino. Prepara o aluno para refletir e atuar no ensino da arte em ambientes de educação formal e não formal, dando suporte ao ensino-aprendizado dos conteúdos necessários à condução dos estágios e demais práticas de ensino. Estuda processos educacionais e produções artísticas de diferentes públicos, propondo também estratégias de inclusão para alunos com deficiência e comunidades com demandas educativas especiais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#B9469C',
			obligatory: true
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#8046B9',
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
		'AD026': {
			code: 'AD026',
			name: 'Ateliê de Criação VI',
			ementa: 'A disciplina tem por objetivo realizar pesquisa visando uma síntese coreográfica através dos conteúdos abordados nos Ateliês de Criação anteriores. Pretende estabelecer relações entre o indivíduo, o coletivo e seus espaços de atuação. Considerando que os processos artísticos carregam em si a dimensão prático-pedagógica, enfatizar a interação entre outras áreas de investigação, incluindo-se as tecnologias de comunicação e informação, na composição de poéticas cênicas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AD025'],
			color: '#B9465C',
			obligatory: true
		},
		'AD046': {
			code: 'AD046',
			name: 'Técnica VI: Variação e Exploração',
			ementa: 'Trabalhos enfatizando o registro dos movimentos em sequências e variações. Maior atenção na aplicação da memória espacial anteriormente construída através do trabalho de percepção tridimensional do corpo no espaço. Estudo da utilização do foco e sua projeção no movimento. Desenvolvimento das estruturas de movimento levando em consideração as complexidades rítmicas. Aprofundamento na dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD045'],
			color: '#95B946',
			obligatory: true
		},
		'AD054': {
			code: 'AD054',
			name: 'Atividade Científico Cultural IV',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#468EB9',
			obligatory: true
		},
		'AD072': {
			code: 'AD072',
			name: 'Estágio II',
			ementa: 'Desenvolvimento, finalização e avaliação das atividades supervisionadas de ensino iniciadas em Estágio I. Instrumentalização do aluno para construção pedagógica de planejamentos de ensino. Conhecimento de abordagens avaliativas do rendimento escolar.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['AD071'],
			color: '#8B7D7D',
			obligatory: true
		},
		'AD621': {
			code: 'AD621',
			name: 'Pedagogia e Didática da Dança',
			ementa: 'A disciplina abrange os componentes da atividade pedagógica para o ensino da dança e suas relações com o processo histórico-social. Investiga as condições, formas e dinâmicas dos processos didáticos que vigoram no ensino e orientam a ação docente. Estuda as diferentes tendências teórico-metodológicas da prática educativa da dança, abordando os requisitos para o planejamento dos processos de ensino-aprendizagem.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#46B978',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#8046B9',
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
		'AD047': {
			code: 'AD047',
			name: 'Técnica VII: Expressão e Integração',
			ementa: 'Fluência em variações elaboradas. Ênfase no domínio do movimento e a capacidade de responder a sequências, que integrem além de complexidade técnica, o expressividade e desempenho performático. Apropriação da dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD046'],
			color: '#95B946',
			obligatory: true
		},
		'AD055': {
			code: 'AD055',
			name: 'Atividade Científico Cultural V',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#6A46B9',
			obligatory: true
		},
		'AD061': {
			code: 'AD061',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Configura-se numa atividade de orientação específica para o desenvolvimento de pesquisa, criação e atuação em Dança que deverá evidenciar a integração dos conteúdos desenvolvidos durante o curso. Propõe a interação com outras áreas artísticas e de investigação, incluindo-se as tecnologias de informação e comunicação, na composição de poéticas cênicas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:0, C:10},
			requisitos: ['AD014', 'AD026', 'AD030', 'AD046', 'AD435'],
			color: '#7D6D8F',
			obligatory: true
		},
		'AD083': {
			code: 'AD083',
			name: 'Trabalho de Conclusão de Curso I: Licenciatura em Dança',
			ementa: 'Orientação específica para o desenvolvimento de monografia, onde haja uma reflexão sobre a realidade sociocultural dos alunos, o papel da arte no seu desenvolvimento educacional e a relação entre arte, educação e sociedade. Aprimoramento dos estudos de língua portuguesa. Será indicada bibliografia pertinente e serão realizados grupos de estudo para o debate sobre estes temas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AD013', 'AD026', 'AD030', 'AD046', 'AD072', 'AD435', 'EL874'],
			color: '#7F6A93',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'AD048': {
			code: 'AD048',
			name: 'Técnica VIII: Expressão e Integração',
			ementa: 'Qualidades performáticas, disponibilidade, prontidão técnica e expressiva respondendo a integração dos elementos desenvolvidos ao longo das disciplinas AD041, AD042, AD043, AD044, AD045, AD046 e AD047. Apropriação da dimensão artística considerando os aspectos prático-pedagógicos desse conteúdo curricular.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AD047'],
			color: '#95B946',
			obligatory: true
		},
		'AD056': {
			code: 'AD056',
			name: 'Atividade Científico Cultural VI',
			ementa: 'Disciplina que normatiza a participação do aluno em atividades teórico práticas de ampliação e aprofundamento artístico, cultural, científico e educacional como parte de sua formação profissional, enfocando preferencialmente problemáticas emergentes na vida social contemporânea.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200'],
			color: '#46A3B9',
			obligatory: true
		},
		'AD062': {
			code: 'AD062',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Prosseguimento e término das atividades que se iniciaram em Trabalho de Conclusão de Curso I, resultando em apresentação cênica, aberta ao público, da criação coreográfica.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:2, D:0, HS:10, SL:0, C:10},
			requisitos: ['AD061'],
			color: '#7D6D8F',
			obligatory: true
		},
		'AD084': {
			code: 'AD084',
			name: 'Trabalho de Conclusão de Curso II: Licenciatura em Dança',
			ementa: 'Prosseguimento e término das atividades que se iniciaram em Trabalho de Conclusão de Curso em Arte Educação I.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:1, C:4},
			requisitos: ['AD083'],
			color: '#7F6A93',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94687',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B99C46',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#464DB9',
			obligatory: false
		},
		'AR---': {
			code: 'AR---',
			name: 'Qualquer Disciplina com codigo AR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5446B9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#54B946',
			obligatory: false
		},
		'ML---': {
			code: 'ML---',
			name: 'Qualquer Disciplina com codigo ML---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ML---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#AB46B9',
			obligatory: false
		},
		'MP---': {
			code: 'MP---',
			name: 'Qualquer Disciplina com codigo MP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B95C46',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B98746',
			obligatory: false
		}
	}
};

export default catalogue;
