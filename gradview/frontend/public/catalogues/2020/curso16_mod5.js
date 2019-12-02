const catalogue = {
	totalCredits: 217,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ141', 'HZ158', 'HZ160']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ248', 'HZ258', 'HZ260', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL105', 'HZ345', 'HZ358', 'HZ360', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['HZ379', 'HZ431', 'LA001', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'HZ369', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL874', 'HZ349', 'HZ631', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'EL511', 'HZ103', 'HZ339', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['HZ104', 'HZ359', 'ELET08']
		}
	},

	subjects: {
		'CE131': {
			code: 'CE131',
			name: 'Introdução à Economia para Ciências Sociais',
			ementa: 'O sistema de produção. Divisão do trabalho. Os três aspectos da produção. Taxa de lucro e movimento do capital. Salário e lucros. Crescimento e ciclo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D0D940'
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender elementos fundamentais da Ciência Política: o objeto da Ciência Política; o poder político; a ação política. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D040D9'
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D97640'
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de natureza e cultura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D9BE'
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender as rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985; o debate existente na bibliografia sobre esses temas; as transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: ''
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#9AD940'
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de troca, sociedade e estrutura. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160'],
			color: ''
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'EL105': {
			code: 'EL105',
			name: 'Tecnologias e Processos Educativos',
			ementa: 'Abordagem interdisciplinar e cultural, propondo-se o tratamento das mídias e das tecnologias de comunicação e informação, como parte dos processos educativos amplos. Os alunos vivenciarão situações práticas que os levarão a refletir, criticamente, as tecnologias na educação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#D94076'
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender os fundamentos teóricos da análise do Estado contemporâneo; a relação entre o Estado e a sociedade civil; a relação entre Estado e classes sociais; a questão da burocracia; as estruturas do Estado moderno. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141'],
			color: ''
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de \"espírito de capitalismo\", fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade. Indicação e desenvolvimento de conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#40D988'
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de etnografias antropológicas recuperando o arco de discussões sobre o fazer etnográfico. Serão ainda indicados e desenvolvidos conteúdos a serem trabalhados pelo futuro docente no ensino de Sociologia no ensino médio, bem como o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260'],
			color: ''
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: ''
		},
		'HZ379': {
			code: 'HZ379',
			name: 'Oficinas de Leitura e Escrita em Humanidades',
			ementa: 'Leitura, interpretação e discussão de textos fundamentais para a teoria social e humanidades. Contextualização histórica dos textos e autores em discussão. Escrita de conteúdos dissertativos (resenhas, sínteses, artigos científicos). Práticas de leitura e organização de oficinas de escrita para o ensino médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#64D940'
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social. Promover o desenvolvimento de habilidades linguísticas referentes ao ensino da Sociologia no ensino médio, com leitura, produção e utilização de diferentes gêneros de textos e práticas de registro e comunicação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160'],
			color: ''
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4088D9'
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200', 'AA445'],
			color: '#6440D9'
		},
		'HZ369': {
			code: 'HZ369',
			name: 'Ensino de Antropologia: Temas e Conceitos Fundamentais',
			ementa: 'Disciplina voltada para a formação didático-pedagógica em Antropologia, abrangendo conteúdos que serão objeto do ensino do futuro docente. Estes incluem um conjunto de temas e conceitos fundamentais. Os temas indicados são: história e cultura afro-brasileira, indígena e africana; educação ambiental; problemas sociais contemporâneos; modos de conhecimento e relações de ensino-aprendizagem. E, os conceitos: cultura, alteridade, raça, gênero e desigualdade. O objetivo é capacitar os alunos no manejo da sala de aula a partir da seleção e avaliação de materiais e métodos para o ensino da Antropologia, estabelecendo a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco em práticas pedagógicas e políticas educacionais que promovam igualdade e inclusão.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#D9AC40'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774'],
			color: ''
		},
		'HZ349': {
			code: 'HZ349',
			name: 'Políticas Públicas Educacionais',
			ementa: 'Disciplina voltada para a formação didático-pedagógica com ênfase no conhecimento de conceitos e noções basilares sobre políticas públicas educacionais; trajetória das políticas educacionais no Brasil e a questão do financiamento; sistemas de ensino, diretrizes curriculares e dimensão federativa; políticas específicas em cada nível de ensino; ensino público e ensino privado; escola, gestão e projeto político-pedagógico como níveis operacionais e espaços de produção de políticas públicas educacionais. Pretende-se estabelecer a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco em práticas pedagógicas e políticas educacionais que promovam igualdade e inclusão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40BED9'
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação. Estímulo e orientação para o uso de Tecnologias de Informação e Comunicação (TICs) como recurso pedagógico e para o desenvolvimento pessoal e profissional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94040'
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160'],
			color: ''
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4052D9'
		},
		'HZ103': {
			code: 'HZ103',
			name: 'Estágio Supervisionado em Ciências Sociais I',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA450'],
			color: '#D940AC'
		},
		'HZ339': {
			code: 'HZ339',
			name: 'Educação e Questões Demográficas',
			ementa: 'Essa disciplina tem como objetivo fornecer aos alunos um conjunto de conteúdos específicos e de ferramentas pedagógicas sobre a relação entre a educação, em seus diversos níveis, e as questões demográficas. A disciplina é composta por módulos que abordam, por um lado, os aspectos principais da dinâmica demográfica (fecundidade, mortalidade e migração); por outro lado, abordam como estes componentes da dinâmica demográfica se relacionam com a Educação, seja em termos de geração de demandas, seja em termos de caracterização e avaliação do atendimento às demandas educacionais. Pretende-se estabelecer a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco nas questões demográficas relacionadas à igualdade e à inclusão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#40D952'
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'HZ104': {
			code: 'HZ104',
			name: 'Estágio Supervisionado em Ciências Sociais II',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HZ103'],
			color: ''
		},
		'HZ359': {
			code: 'HZ359',
			name: 'Educação e Sociedade',
			ementa: 'A educação como objeto de análise e investigação da Sociologia a partir da contribuição de autores clássicos e contemporâneos no que se refere às relações entre educação e sociedade e uma sociologia da educação. Estudo das interpretações relativas à escola, aos sistemas de ensino e aos diferentes processos educacionais existentes na sociedade. A pesquisa sociológica sobre educação no Brasil e em outros contextos escolares. Pretende-se estabelecer a conexão entre teoria e prática, e entre conhecimentos específicos e pedagógicos, com contextualização social da prática educacional e enfatizando as relações entre educação, diferenças, diversidade e desigualdade, com foco nos aspectos sociológicos dos fenômenos da igualdade e da inclusão.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA200'],
			color: '#9A40D9'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
