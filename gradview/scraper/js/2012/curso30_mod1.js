const catalogue = {
	totalCredits: 188,
	maxCreditsSem: 33,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HG107', 'HG108', 'ELET01']
		},
		'sem-2': {
			id: '2',
			subjects: ['HG207', 'HG208', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HG301', 'HG302', 'HG304', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HG401', 'HG402', 'HG404', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['HG303', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HG403', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 60,
			hasRestrictions: true,
			subjects: ['HG---'],
		},
		'elet-2': {
			credits: 32,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
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
			color: '#40D98C',
			obligatory: true
		},
		'HG108': {
			code: 'HG108',
			name: 'Introdução à Filosofia Geral I',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) a introdução de temas básicos da filosofia; (2) o exercício de ferramentas formais da análise filosófica e da interpretação de textos filosóficos; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia; (4) a introdução de dificuldades básicas ligadas à transmissão da Filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#B340D9',
			obligatory: true
		},
		'ELET01': {
			code: 'ELET01',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D9D940',
			obligatory: true
		},
		'HG207': {
			code: 'HG207',
			name: 'Redação Filosófica II',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) exercício de interpretação dos textos conforme métodos de análise conceitual e argumentativa; (2) o exercício de confecção de textos interpretativos, conforme as normas técnicas pertinentes e critérios de clareza e consistência lógica de argumentação; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40B3D9',
			obligatory: true
		},
		'HG208': {
			code: 'HG208',
			name: 'Introdução à Filosofia Geral II',
			ementa: 'A partir da leitura de textos clássicos da História da Filosofia, esta disciplina tem por objetivo: (1) a introdução de temas básicos da filosofia; (2) o exercício de ferramentas formais da análise filosófica e da interpretação de textos filosóficos; (3) o exercício de habilidades discursivas (de exposição e discussão) ligadas à interpretação e transmissão da filosofia; (4) a introdução de dificuldades básicas ligadas à transmissão da Filosofia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D9408C',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D940B3',
			obligatory: true
		},
		'HG301': {
			code: 'HG301',
			name: 'História da Filosofia Antiga I',
			ementa: 'O curso analisará questões fundamentais da história da Filosofia Antiga, a partir da leitura de textos clássicos pertinentes (notadamente, textos de Platão e/ou Aristótoles).',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B3D940',
			obligatory: true
		},
		'HG302': {
			code: 'HG302',
			name: 'História da Filosofia Medieval I',
			ementa: 'O curso analisará questões fundamentais da História da Filosofia Medieval, a partir da leitura de textos clássicos pertinentes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: true
		},
		'HG304': {
			code: 'HG304',
			name: 'Teoria do Conhecimento I',
			ementa: 'A partir da leitura de textos clássicos ao assunto, o curso analisará os problemas filosóficos fundamentais da teoria do conhecimento (problemas de justificação epistemológica; teoria das explicações científicas; gênese do conhecimento, etc.)',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#4066D9',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D98C40',
			obligatory: true
		},
		'HG401': {
			code: 'HG401',
			name: 'História da Filosofia Moderna I',
			ementa: 'A partir da leitura de textos clássicos pertinentes, a disciplina analisará questões fundamentais da História da Filosofia Moderna.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#8CD940',
			obligatory: true
		},
		'HG402': {
			code: 'HG402',
			name: 'História da Filosofia Contemporânea I',
			ementa: 'A partir da leitura de textos clássicos pertinentes, a disciplina analisará questões fundamentais da história da Filosofia Contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40D9B3',
			obligatory: true
		},
		'HG404': {
			code: 'HG404',
			name: 'Introdução à Lógica',
			ementa: 'O curso tem por objetivo examinar as noções mais elementares da moderna lógica simbólica, como as funções proposicionais, quantificação, função de verdade, verdade lógica, modelo, linguagem formal e método axiomático. Tratar-se-á também de levantar a questão do alcance e limites da aplicação de tais noções na investigação das línguas naturais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94040',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#D94066',
			obligatory: true
		},
		'HG303': {
			code: 'HG303',
			name: 'Ética I',
			ementa: 'A partir da leitura de textos clássicos pertinentes ao assunto, o curso analisará algumas questões centrais da ética, como a teoria da ação, o bem supremo, a justificação da moralidade, etc.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#66D940',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'HG403': {
			code: 'HG403',
			name: 'Estética I',
			ementa: 'A partir da leitura de textos clássicos pertinentes, a disciplina analisará questões fundamentais da Estética.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#8C40D9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#408CD9',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:30},
			requisitos: '',
			color: '#D96640',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:30},
			requisitos: '',
			color: '#6640D9',
			obligatory: true
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D966',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#40D940',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D940D9',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#D9B340',
			obligatory: false
		}
	}
};

export default catalogue;
