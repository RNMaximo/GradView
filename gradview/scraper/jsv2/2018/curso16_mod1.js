const catalogue = {
	totalCredits: 170,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['HZ141', 'HZ158', 'HZ160', 'CE131']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ248', 'HZ258', 'HZ260', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['HZ345', 'ELET03', 'HZ360', 'HZ358']
		},
		'sem-4': {
			id: '4',
			subjects: ['ELET04', 'HZ431', 'HZ460']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['HZ631', 'HZ469', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ELET07', 'CE730']
		},
		'sem-8': {
			id: '8',
			subjects: ['ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 24,
			hasRestrictions: true,
			subjects: ['HZ-64', 'HZ062', 'HZ063', 'HZ065', 'HZ066', 'HZ067', 'HZ068', 'HZ069', 'HZ163', 'HZ165', 'HZ166', 'HZ167', 'HZ168', 'HZ169', 'HZ265', 'HZ266', 'HZ267', 'HZ268', 'HZ269', 'HZ365', 'HZ366', 'HZ465', 'HZ466', 'HZ467', 'HZ562', 'HZ565', 'HZ665', 'HZ667', 'HZ669', 'HZ861', 'HZ866', 'HZ962', 'HZ963', 'HZ965', 'HZ966', 'HZ967', 'HZ968', 'HZ969'],
		},
		'elet-2': {
			credits: 10,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'HG---', 'HH---', 'HZ---', 'LA---'],
		},
		'elet-3': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-4': {
			credits: 30,
			hasRestrictions: true,
			subjects: ['CE---', 'EF---', 'EL---', 'EP---', 'GF---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'TL---'],
		},
		'elet-5': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-6': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['HH---'],
		},
		'elet-7': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['HG---'],
		},
	},

	subjects: {
		'CE131': {
			code: 'CE131',
			name: 'Introdução à Economia para Ciências Sociais',
			ementa: 'O sistema de produção. Divisão do trabalho. Os três aspectos da produção. Taxa de lucro e movimento do capital. Salário e lucros. Crescimento e ciclo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946AE',
			obligatory: true
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objeto da Ciência Política. O poder político. A ação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#8346B9',
			obligatory: true
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#9046B9',
			obligatory: true
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de <em>natureza</em> e <em>cultura</em>. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'Rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985. Exame do debate existente na bibliografia sobre esses temas. As transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#8346B9',
			obligatory: true
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#76B946',
			obligatory: true
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de <em>troca, sociedade e estrutura</em>. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160'],
			color: '#B94646',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'Fundamentos teóricos da análise do Estado contemporâneo. A relação entre o Estado e a sociedade civil. Estado e classes sociais. A questão da burocracia. As estruturas do Estado moderno.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: '#8346B9',
			obligatory: true
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B94694',
			obligatory: true
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de <em>etnografias antropológicas</em> recuperando o arco de discussões sobre o fazer etnográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260'],
			color: '#B94646',
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
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160'],
			color: '#994693',
			obligatory: true
		},
		'HZ460': {
			code: 'HZ460',
			name: 'Pesquisa Antropológica',
			ementa: 'O curso tem como objetivo fornecer instrumentos teóricos e práticos sobre a pesquisa de campo. Técnicas de pesquisas, observação participante, entrevistas, histórias de vida, o uso dos microcomputadores, as diferentes perspectivas de interpretacão antropológica, as relações entre sujeito e objeto de pesquisa. A bibliografia incluirá textos clássicos sobre pesquisa de campo e textos contemporâneos que fazem uma leitura crítica de seus objetivos e resultados. O curso contemplará a possibilidade de realização de uma experiência de pesquisa de campo e a elaboração de um breve projeto de pesquisa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#90B946',
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
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'HZ469': {
			code: 'HZ469',
			name: 'Antropologia IV - Antropologia Contemporânea',
			ementa: 'A disciplina explora as perspectivas antropológicas diante dos desafios colocados pelo mundo contemporâneo, sublinhando as redefinições conceituais e as reflexões atuais sobre a prática etnográfica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#B94653',
			obligatory: true
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9D46B9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160'],
			color: '#A1469A',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:22},
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
			color: '#83B946',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96046',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#467EB9',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4698B9',
			obligatory: false
		},
		'GF---': {
			code: 'GF---',
			name: 'Qualquer Disciplina com codigo GF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo GF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B97E',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946A1',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7646B9',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B98746',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B9A5',
			obligatory: false
		},
		'HZ-64': {
			code: 'HZ-64',
			name: 'Qualquer Disciplina com codigo HZ-64',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ-64, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B957',
			obligatory: false
		},
		'HZ062': {
			code: 'HZ062',
			name: 'Gênero e Sexualidade',
			ementa: 'Este curso pretende situar o campo conceitual e as possibilidades de pesquisa abertas pelos estudos de gênero e sexualidade. Nas discussões das diferentes perspectivas deste estudo estarão incluídos temas como desnaturalização das diferenças sexuais, o caráter relacional das definições de gênero e a importância destas perspectivas para as teorias sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B97A46',
			obligatory: false
		},
		'HZ063': {
			code: 'HZ063',
			name: 'Antropologia, Organizações e Burocracia',
			ementa: 'Esta disciplina propõe explorar novos problemas e conceitos para uma antropologia das organizações. Nesse sentido, faz-se fundamental perguntar o que uma abordagem etnográfica terá a acrescentar a temas como: a presença massiva das instituições na vida social; a constituição de redes de relações inter-organizacionais diversas; seus encadeamentos e interrupções; as noções de serviço público e privado; as noções de vigilância e controle burocráticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#9DB946',
			obligatory: false
		},
		'HZ065': {
			code: 'HZ065',
			name: 'Antropologia e Direito',
			ementa: 'A constituição do campo de estudos sobre a relação entre normas, sociedade e cultura, modalidades de administração de conflitos e produção da verdade. Tópicos sugeridos: violência, criminalidade e segurança; história da criminalização de práticas socioculturais; etnografias no campo jurídico; justiça, direitos humanos e diversidade cultural; pluralismo jurídico na América Latina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B971',
			obligatory: false
		},
		'HZ066': {
			code: 'HZ066',
			name: 'Antropologia e História',
			ementa: 'A relação entre perspectivas diacrônicas e sincrônicas na formação das Ciências Sociais, seus desdobramentos e debates atuais. Tópicos sugeridos: Evolucionismo, Etnohistória; Etnografia, história e memória; Estruturalismo e história; Cultura, estrutura e evento; História de longa duração; Microhistória; História cultural.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9A146',
			obligatory: false
		},
		'HZ067': {
			code: 'HZ067',
			name: 'Antropologia Rural',
			ementa: 'Esta disciplina explora as abordagens antropológicas acerca do rural e sua construção como objeto de estudo. Além de tratar das fomulações clássicas sobre sociedades agrárias e camponesas, aborda a crise do próprio conceito de sociedade agrária e do campesinato e as recomposições do rural como objeto através dos processos sociais em curso em contextos nacionais e internacionais que, por um lado, trouxeram para o campo questões como meio-ambiente, etnicidade e gênero e, por outro lado, possibilitaram a emergência de novos atores sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#464AB9',
			obligatory: false
		},
		'HZ068': {
			code: 'HZ068',
			name: 'Corpo, Pessoa e Agência',
			ementa: 'A noção de pessoa e a de técnicas do corpo em Marcel Mauss são referências clássicas. Recentemente, cresce a literatura antropológica sobre pessoa, nome, corpo, agência humana (e pós-humana). Esta disciplina focalizará estas contribuições e discutirá a relação entre corpo e mente o natural e o social (e, ou, cultural), modos de conhecimento e cosmologias, gênero, tecnologias, subjetividade e intersubjetividades.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#69B946',
			obligatory: false
		},
		'HZ069': {
			code: 'HZ069',
			name: 'Raça, Etnicidade e Identidade',
			ementa: 'Raça e etnicidade, como conceitos e como articuladores de diferenças e identidades, indicam distintos embates, como, por exemplo, entre biologia, cultura, e política. Contextualizar estes conceitos, seus usos e embates científicos e políticos, serão os objetivos desta disciplina.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4FB946',
			obligatory: false
		},
		'HZ163': {
			code: 'HZ163',
			name: 'Tópicos Especiais em Antropologia X',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#6946B9',
			obligatory: false
		},
		'HZ165': {
			code: 'HZ165',
			name: 'Tópicos Especiais em Antropologia XI',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B998',
			obligatory: false
		},
		'HZ166': {
			code: 'HZ166',
			name: 'Tópicos Especiais em Antropologia XII',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#AAB946',
			obligatory: false
		},
		'HZ167': {
			code: 'HZ167',
			name: 'Tópicos Especiais em Antropologia XIII',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B99446',
			obligatory: false
		},
		'HZ168': {
			code: 'HZ168',
			name: 'Tópicos Especiais em Antropologia XIV',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9AE46',
			obligatory: false
		},
		'HZ169': {
			code: 'HZ169',
			name: 'Tópicos Especiais em Antropologia XV',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B2B9',
			obligatory: false
		},
		'HZ265': {
			code: 'HZ265',
			name: 'Tópicos Especiais em Antropologia XVI',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo desenvolvidas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4F46B9',
			obligatory: false
		},
		'HZ266': {
			code: 'HZ266',
			name: 'Tópicos Especiais em Antropologia XVII',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9466D',
			obligatory: false
		},
		'HZ267': {
			code: 'HZ267',
			name: 'Tópicos Especiais em Antropologia XVIII',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9B2',
			obligatory: false
		},
		'HZ268': {
			code: 'HZ268',
			name: 'Tópicos Especiais em Antropologia XIX',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B7B946',
			obligatory: false
		},
		'HZ269': {
			code: 'HZ269',
			name: 'Tópicos Especiais em Antropologia XX',
			ementa: 'Esta disciplina terá seu programa definido em função do andamento das pesquisas que estão sendo realizadas no departamento de Antropologia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5CB946',
			obligatory: false
		},
		'HZ365': {
			code: 'HZ365',
			name: 'Antropologia da Religião',
			ementa: 'O estudo da diversidade dos sistemas e experiências religiosas em diferentes tipos de sociedades, incluída aí a atualidade das nossas próprias culturas. O curso envolve também a leitura crítica de Teorias Antropológicas da Religião e o seu diálogo com teorias de Ciências Afins.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B94A',
			obligatory: false
		},
		'HZ366': {
			code: 'HZ366',
			name: 'Modos de Conhecimento e suas Expressões',
			ementa: 'Esta disciplina tem como objetivo aprofundar discussões e estimular pesquisa e invenção conceitual e metodológica sobre os modos de percepção, de compreensão e simbolização do mundo e da vida. Quanto às expressões, serão exploradas, particularmente, mas não unicamente, as expressões narrativas, música, imagens e objetos, e suas relações com a experiência. Biografias, etnografias, coleções e acervos deverão ser explorados nestas discussões em sua parte mais experimental, na forma de um atelier de pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4664B9',
			obligatory: false
		},
		'HZ465': {
			code: 'HZ465',
			name: 'Antropologia no Brasil',
			ementa: 'Curso que visa familiarizar os estudantes com as tradições da disciplina no Brasil, no contexto mais amplo da história da antropologia. A bibliografia incluirá análises dos aspectos institucionais - museus, centros e faculdades onde os antropólogos desenvolveram seus trabalhos de pesquisa e ensino metodológicos e teóricos dessa história.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B96D46',
			obligatory: false
		},
		'HZ466': {
			code: 'HZ466',
			name: 'Mito e Ritual',
			ementa: 'Curso que aborda as principais vertentes teóricas, racionalistas e não racionalistas, na análise antropológica do mito e do rito.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B9467A',
			obligatory: false
		},
		'HZ467': {
			code: 'HZ467',
			name: 'Antropologia e Estudos de Parentesco',
			ementa: 'A emergência dos estudos de parentesco na disciplina antropológica. A teoria dos grupos de unifiliação e a teoria da aliança de casamento. Questões clássicas e recentes, modelos e métodos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#B95346',
			obligatory: false
		},
		'HZ562': {
			code: 'HZ562',
			name: 'Antropologia Econômica',
			ementa: 'O curso deve introduzir o objeto da definição da Antropologia Econômica, seus programas de pesquisa, seus temas, seus métodos e suas aplicações. Abordará a comparação entre sistemas econômicos e aspectos da economia informal moderna.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B746B9',
			obligatory: false
		},
		'HZ565': {
			code: 'HZ565',
			name: 'Antropologia Urbana',
			ementa: 'Esta disciplina visa analisar a formação de uma tradição de estudos sobre \"fenômenos urbanos\" nas ciências sociais e, em particular, na antropologia, a partir das experiências sociais da modernidade. A dicotomia rural/urbano. De uma ciência social do urbano aos estudos sociológicos nas cidades.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B98B',
			obligatory: false
		},
		'HZ665': {
			code: 'HZ665',
			name: 'Etnologia',
			ementa: 'Esta disciplina abordará a construção de um repertório de temas clássicos de estudo, assim como as principais temáticas e debates atuais em etnologia, enfocando, principalmente, as sociedades indígenas. Tópicos sugeridos: estrutura social e parentesco, cosmologia e mitologia, corpo e noção de pessoa, identidades e etnogênese, etnopolítica e transformações contemporâneas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4657B9',
			obligatory: false
		},
		'HZ667': {
			code: 'HZ667',
			name: 'Mídia, Cultura e História',
			ementa: 'Este curso tem como objetivo introduzir os alunos ao estudo antropológico da cultura e da mídia na sociedade brasileira contemporânea. Ênfase especial será dada tanto às questões relacionadas à visualização da antropologia (especialmente à dimensão imagética da pesquisa etnográfica) quanto à emergente \"antropologia do visual\".',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46A5B9',
			obligatory: false
		},
		'HZ669': {
			code: 'HZ669',
			name: 'Etnologia Sul Americana',
			ementa: 'Curso que apresenta uma visão geral e introdutória das sociedades indígenas nas terras baixas sul-americanas. Em perspectiva comparativa, aborda áreas etnográficas com ênfase para estrutura social, bem como os debates teóricos que suscitam no campo americanista.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#468BB9',
			obligatory: false
		},
		'HZ861': {
			code: 'HZ861',
			name: 'Leitura de Monografias Antropológicas',
			ementa: 'Leitura das monografias antropológicas (e suas reeleituras), em suas contextualizações na história da antropologia, atentando, nestas monografias, tanto ao conhecimento das sociedades etnografadas, quanto ao diálogo entre os antropólogos e os nativos e ao diálogo entre os antropólogos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200', 'HZ160'],
			color: '#B94646',
			obligatory: false
		},
		'HZ866': {
			code: 'HZ866',
			name: 'Antropologia e os Grupos de Idade',
			ementa: 'Discussão antropológica sobre as categorias e os grupos de idade. Tendo como base contextos etnográficos distintos, o curso problematizará os estudos sobre grupos de idade nas sociedades urbanas contemporâneas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#AA46B9',
			obligatory: false
		},
		'HZ962': {
			code: 'HZ962',
			name: 'Antropologia Política',
			ementa: 'O estudo dos clássicos deverá mostrar como a disciplina, empregando os métodos da etnografia, ocupou-se inicialmente das estruturas de poder em sociedades sem estado, interessando-se depois pela mudança e conflito. O curso tratará ainda de desenvolvimentos mais recentes, abordando as relações de poder nos interstícios da sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4671B9',
			obligatory: false
		},
		'HZ963': {
			code: 'HZ963',
			name: 'Leitura Dirigida em Antropologia I',
			ementa: 'Realização de programa de leitura sobre tema escolhido na área de Antropologia ou em áreas conexas. A leitura é dirigida por um professor do Departamento de Antropologia. O Coordenador de Graduação em Ciências Sociais exigirá, no ato de matrícula, a carta de aceitação do professor e a apresentação, por escrito, do tema, da bibliografia e da forma de avaliação do programa de leitura a ser desenvolvido.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200', 'HZ360'],
			color: '#B94646',
			obligatory: false
		},
		'HZ965': {
			code: 'HZ965',
			name: 'Leitura Dirigida em Antropologia II',
			ementa: 'Realização de programa de leitura sobre tema escolhido na área de Antropologia ou em áreas conexas. A leitura é dirigida por um professor do Departamento de Antropologia. O Coordenador de Graduação em Ciências Sociais exigirá, no ato de matrícula, a carta de aceitação do professor e a apresentação, por escrito, do tema, da bibliografia e da forma de avaliação do programa de leitura a ser desenvolvido.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA200', 'HZ963'],
			color: '#B94646',
			obligatory: false
		},
		'HZ966': {
			code: 'HZ966',
			name: 'Tópicos Especiais em Teoria Antropológica I',
			ementa: 'Curso monográfico cujo objetivo é aprofundar questões ou autores relevantes na teoria antropológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5C46B9',
			obligatory: false
		},
		'HZ967': {
			code: 'HZ967',
			name: 'Tópicos Especiais em Teoria Antropológica II',
			ementa: 'Curso monográfico cujo objetivo é aprofundar questões ou autores relevantes na teoria antropológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B964',
			obligatory: false
		},
		'HZ968': {
			code: 'HZ968',
			name: 'Monografias Clássicas',
			ementa: 'Estudo em profundidade de monografias antropológicas clássicas; discussão sobre teorias e métodos na antropologia social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200', 'HZ360'],
			color: '#B94646',
			obligatory: false
		},
		'HZ969': {
			code: 'HZ969',
			name: 'Monografias Básicas - Brasil',
			ementa: 'Estudo em profundidade de monografias clássicas sobre o Brasil, como base para discussões de método e teoria em antropologia e em disciplinas afins.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200', 'HZ160', 'HZ260', 'HZ360'],
			color: '#B94646',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94660',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94687',
			obligatory: false
		}
	}
};

export default catalogue;
