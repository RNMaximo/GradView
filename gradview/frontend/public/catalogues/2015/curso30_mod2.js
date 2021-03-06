const catalogue = {
	totalCredits: 212,
	maxCreditsSem: 34,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HG107', 'ELET01', 'HG108']
		},
		'sem-2': {
			id: '2',
			subjects: ['HG207', 'HG208', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HG304', 'ELET03', 'HG301', 'HG302']
		},
		'sem-4': {
			id: '4',
			subjects: ['HG402', 'ELET04', 'HG404', 'HG401']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'HG861', 'HG303', 'EL213']
		},
		'sem-6': {
			id: '6',
			subjects: ['HG403', 'HG862', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL774', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['EL874', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 18,
			hasRestrictions: true,
			subjects: ['EL142', 'EL212', 'EL485', 'EL511', 'EL683'],
		},
		'elet-2': {
			credits: 36,
			hasRestrictions: true,
			subjects: ['HG---'],
		},
		'elet-3': {
			credits: 28,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-4': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['CE---', 'HH---', 'HZ---'],
		},
	},

	subjects: {
		'HG107': {
			code: 'HG107',
			name: 'Redação Filosófica I',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) o exercício de interpretação dos textos segundo métodos de análise conceitual e argumentativa; (2) o exercício de confecção de textos interpretativos, conforme as normas técnicas pertinentes e critérios de clareza e consistência lógica da argumentação; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#7846B9',
			obligatory: true
		},
		'HG108': {
			code: 'HG108',
			name: 'Introdução à Filosofia Geral I',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) a introdução de temas básicos da filosofia; (2) o exercício de ferramentas formais da análise filosófica e da interpretação de textos filosóficos; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia; (4) a introdução de dificuldades básicas ligadas à transmissão da Filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5AB946',
			obligatory: true
		},
		'ELET01': {
			code: 'ELET01',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HG207': {
			code: 'HG207',
			name: 'Redação Filosófica II',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) exercício de interpretação dos textos conforme métodos de análise conceitual e argumentativa; (2) o exercício de confecção de textos interpretativos, conforme as normas técnicas pertinentes e critérios de clareza e consistência lógica de argumentação; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B446B9',
			obligatory: true
		},
		'HG208': {
			code: 'HG208',
			name: 'Introdução à Filosofia Geral II',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) a introdução de temas básicos da filosofia; (2) o exercício de ferramentas formais da análise filosófica e da interpretação de textos filosóficos; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia; (4) a introdução de dificuldades básicas ligadas à transmissão da Filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#46AAB9',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HG301': {
			code: 'HG301',
			name: 'História da Filosofia Antiga I',
			ementa: 'O curso analisará questões fundamentais da história da Filosofia Antiga, a partir da leitura de textos clássicos pertinentes (notadamente, textos de Platão e/ou Aristótoles).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#4650B9',
			obligatory: true
		},
		'HG302': {
			code: 'HG302',
			name: 'História da Filosofia Medieval I',
			ementa: 'O curso analisará questões fundamentais da História da Filosofia Medieval, a partir da leitura de textos clássicos pertinentes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B98246',
			obligatory: true
		},
		'HG304': {
			code: 'HG304',
			name: 'Teoria do Conhecimento I',
			ementa: 'A partir da leitura de textos clássicos ao assunto, o curso analisará os problemas filosóficos fundamentais da teoria do conhecimento (problemas de justificação epistemológica; teoria das explicações científicas; gênese do conhecimento, etc.)',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B94664',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HG401': {
			code: 'HG401',
			name: 'História da Filosofia Moderna I',
			ementa: 'A partir da leitura de textos clássicos pertinentes, a disciplina analisará questões fundamentais da História da Filosofia Moderna.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B9A046',
			obligatory: true
		},
		'HG402': {
			code: 'HG402',
			name: 'História da Filosofia Contemporânea I',
			ementa: 'A partir da leitura de textos clássicos pertinentes, a disciplina analisará questões fundamentais da história da Filosofia Contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B946A0',
			obligatory: true
		},
		'HG404': {
			code: 'HG404',
			name: 'Introdução à Lógica',
			ementa: 'O curso tem por objetivo examinar as noções mais elementares da moderna lógica simbólica, como as funções proposicionais, quantificação, função de verdade, verdade lógica, modelo, linguagem formal e método axiomático. Tratar-se-á também de levantar a questão do alcance e limites da aplicação de tais noções na investigação das línguas naturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#46B98C',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL213': {
			code: 'EL213',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9646B9',
			obligatory: true
		},
		'HG303': {
			code: 'HG303',
			name: 'Ética I',
			ementa: 'A partir da leitura de textos clássicos pertinentes ao assunto, o curso analisará algumas questões centrais da ética, como a teoria da ação, o bem supremo, a justificação da moralidade, etc.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#468CB9',
			obligatory: true
		},
		'HG861': {
			code: 'HG861',
			name: 'Estágio Supervisionado em Filosofia',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de filosofia, através da experiência de observação e interação com atividades de ensino de filosofia no sistema oficial de Ensino, subsidiadas por parâmetros teóricos e discussões coletivas e interdisciplinares.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['AA430', 'HG207', 'HG208'],
			color: '#7D78B9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HG403': {
			code: 'HG403',
			name: 'Estética I',
			ementa: 'A partir da leitura de textos clássicos pertinentes, a disciplina analisará questões fundamentais da Estética.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B96446',
			obligatory: true
		},
		'HG862': {
			code: 'HG862',
			name: 'Estágio Supervisionado em Filosofia II',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de filosofia, através da experiência de observação e interação com atividades de ensino de filosofia no sistema oficial de Ensino, subsidiadas por parâmetros teóricos e discussões coletivas e interdisciplinares.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:6, D:0, HS:8, SL:1, C:8},
			requisitos: ['HG861'],
			color: '#7D78B9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
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
			color: '#B94646',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: '#B94646',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#466EB9',
			obligatory: false
		},
		'EL142': {
			code: 'EL142',
			name: 'Tópicos Especiais em Ciências Sociais Aplicadas à Educação',
			ementa: 'A disciplina aborda temas fundamentais da Educação a partir de aportes teóricos metodológicos das Ciências Sociais numa perspectiva interdisciplinar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B950',
			obligatory: false
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B94682',
			obligatory: false
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#5A46B9',
			obligatory: false
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação dos estudantes em sua área de formação. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#46B9AA',
			obligatory: false
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B4B946',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B96E',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#96B946',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#78B946',
			obligatory: false
		}
	}
};

export default catalogue;
