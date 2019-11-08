const catalogue = {
	totalCredits: 217,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CE131', 'HZ141', 'HZ158', 'HZ160']
		},
		'sem-2': {
			id: '2',
			subjects: ['HZ248', 'HZ258', 'HZ260', 'ELET12']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL105', 'HZ345', 'HZ358', 'HZ360', 'ELET8']
		},
		'sem-4': {
			id: '4',
			subjects: ['HZ379', 'HZ431', 'LA001', 'ELET12']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'HZ369', 'ELET12']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL874', 'HZ349', 'HZ631', 'ELET10']
		},
		'sem-7': {
			id: '7',
			subjects: ['CE730', 'EL511', 'HZ103', 'HZ339', 'ELET6']
		},
		'sem-8': {
			id: '8',
			subjects: ['HZ104', 'HZ359', 'ELET12']
		}
	},

	subjects: {
		'CE131': {
			code: 'CE131',
			name: 'Introdução à Economia para Ciências Sociais',
			ementa: 'O sistema de produção. Divisão do trabalho. Os três aspectos da produção. Taxa de lucro e movimento do capital. Salário e lucros. Crescimento e ciclo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'HZ141': {
			code: 'HZ141',
			name: 'Política I: Introdução à Ciência Política',
			ementa: 'O objeto da Ciência Política. O poder político. A ação política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ158': {
			code: 'HZ158',
			name: 'Sociologia de Durkheim',
			ementa: 'Num primeiro momento pretende-se passar ao aluno uma breve introdução à Sociologia e, posteriormente, o curso terá como foco a teoria da objetividade do fato social, a teoria da representação coletiva como consequência da organização social e a teoria dos princípios básicos que constituem a organização e montam os diferentes tipos de sociedade. Essas teorias serão seguidas até as leituras recentes de Durkheim no atual debate sobre o social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ160': {
			code: 'HZ160',
			name: 'Introdução a Antropologia: Natureza e Cultura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de <em>natureza</em> e <em>cultura</em>. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ248': {
			code: 'HZ248',
			name: 'Política II: Política Brasileira',
			ementa: 'Rupturas políticas no Brasil contemporâneo: 1891, 1930, 1937, 1945, 1964 e 1985. Exame do debate existente na bibliografia sobre esses temas. As transformações verificadas no Estado e no regime político e suas relações com a sociedade e a economia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141']
		},
		'HZ258': {
			code: 'HZ258',
			name: 'Sociologia de Marx',
			ementa: 'O curso pretende apresentar pontos fundamentais da formulação teórica de Marx, através da leitura de textos clássicos. Tratamento da gênese do pensamento, de aspectos centrais de sua crítica de economia política e de sua produção propriamente política.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ260': {
			code: 'HZ260',
			name: 'Antropologia II: Troca, Sociedade e Estrutura',
			ementa: 'Esta disciplina pretende apresentar as principais discussões antropológicas em torno de <em>troca, sociedade e estrutura</em>. Como se trata de uma disciplina de formação, enfatiza-se o compromisso com os tópicos basilares da antropologia e a leitura de pelo menos uma etnografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ160']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'EL105': {
			code: 'EL105',
			name: 'Tecnologias e Processos Educativos',
			ementa: 'Abordagem interdisciplinar e cultural, propondo-se o tratamento das mídias e das tecnologias de comunicação e informação, como parte dos processos educativos amplos. Os alunos vivenciarão situações práticas que os levarão a refletir, criticamente, as tecnologias na educação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ''
		},
		'HZ345': {
			code: 'HZ345',
			name: 'Política III: Teorias do Estado',
			ementa: 'Fundamentos teóricos da análise do Estado contemporâneo. A relação entre o Estado e a sociedade civil. Estado e classes sociais. A questão da burocracia. As estruturas do Estado moderno.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ141']
		},
		'HZ358': {
			code: 'HZ358',
			name: 'Sociologia de Weber',
			ementa: 'O curso sobre o pensamento de Weber aborda alguns aspectos da obra desse autor mais diretamente relacionados à tradição do pensamento sociológico. Os temas abordados são ideologias, onde se discutem a concepção weberiana de &quot;espírito de capitalismo&quot;, fundamentos de teoria social, política e metodológica. Pretende-se também utilizar textos de cientistas sociais brasileiros que utilizam categorias de Weber na análise de nossa sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'HZ360': {
			code: 'HZ360',
			name: 'Antropologia III: Teorias e Experimentações Etnográficas',
			ementa: 'O objetivo desta disciplina é permitir aos alunos compreender a antropologia a partir da prática etnográfica. Trata-se de disponibilizar aos alunos a leitura de <em>etnografias antropológicas</em> recuperando o arco de discussões sobre o fazer etnográfico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['HZ260']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'HZ379': {
			code: 'HZ379',
			name: 'Oficinas de Leitura e Escrita em Humanidades',
			ementa: 'Leitura, interpretação e discussão de textos fundamentais para a teoria social e humanidades. Contextualização histórica dos textos e autores em discussão. Escrita de conteúdos dissertativos (resenhas, sínteses, artigos científicos). Práticas de leitura e organização de oficinas de escrita para o ensino médio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'HZ431': {
			code: 'HZ431',
			name: 'Metodologia e Técnicas de Pesquisa I',
			ementa: 'Inserir os estudantes de Ciências Sociais no exercício da pesquisa científica, focalizando aspectos relacionados às dimensões teórico-metodológicas, às etapas básicas da pesquisa e da elaboração de projeto de pesquisa, bem como o delineamento e procedimentos para a reconstrução da realidade social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ141', 'HZ158', 'HZ160']
		},
		'LA001': {
			code: 'LA001',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA445', 'EL211', 'EL511', 'EL683']
		},
		'HZ369': {
			code: 'HZ369',
			name: 'Ensino de Antropologia: Temas e Conceitos Fundamentais',
			ementa: 'Disciplina voltada para a formação didático-pedagógica em Antropologia, abrangendo conteúdos que serão objeto do ensino do futuro docente. Estes incluem um conjunto de temas e conceitos fundamentais. Os temas indicados são: história e cultura afro-brasileira, indígena e africana; educação ambiental; problemas sociais contemporâneos; modos de conhecimento e relações de ensino-aprendizagem. E, os conceitos: cultura, alteridade, raça, gênero e desigualdade. O objetivo é capacitar os alunos no manejo da sala de aula a partir da seleção e avaliação de materiais e métodos para o ensino da Antropologia.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ345', 'HZ358', 'HZ360']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774']
		},
		'HZ349': {
			code: 'HZ349',
			name: 'Políticas Públicas Educacionais',
			ementa: 'Políticas públicas educacionais: conceitos e noções basilares. Trajetória das políticas educacionais no Brasil e a questão do financiamento. Sistemas de ensino, diretrizes curriculares e dimensão federativa. Políticas específicas em cada nível de ensino. Ensino público e ensino privado. Escola, gestão e projeto político-pedagógico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ345', 'HZ358', 'HZ360']
		},
		'HZ631': {
			code: 'HZ631',
			name: 'Estatística para Ciências Sociais',
			ementa: 'Introduzir conceitos e técnicas básicas da estatística como instrumentos para o desenvolvimento de pesquisas em ciências sociais. Da definição das questões da pesquisa ao levantamento dos dados. Fontes de dados secundárias e fontes primárias. Tratamento e organização das informações. Distribuição de frequência. Medidas de tendência e de variabilidade. Representação gráfica e tabular. Princípios da amostragem nas ciências sociais. Introdução à probabilidade e suas principais distribuições. Medidas de correlação e associação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['HZ431']
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:10, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: ''
		},
		'CE730': {
			code: 'CE730',
			name: 'Economia Brasileira',
			ementa: 'Formação econômica do Brasil até meados do século XIX. Economia cafeeira e industrialização. Evolução da economia no pós-guerra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CE131', 'HZ141', 'HZ158', 'HZ160']
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'HZ103': {
			code: 'HZ103',
			name: 'Estágio Supervisionado em Ciências Sociais I',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HZ352']
		},
		'HZ339': {
			code: 'HZ339',
			name: 'Educação e Questões Demográficas',
			ementa: 'Essa disciplina tem como objetivo fornecer aos alunos um conjunto de conteúdos específicos e de ferramentas pedagógicas sobre a relação entre a educação, em seus diversos níveis, e as questões demográficas. A disciplina é composta por módulos que abordam, por um lado, os aspectos principais da dinâmica demográfica (fecundidade, mortalidade e migração); por outro lado, abordam como estes componentes da dinâmica demográfica se relacionam com a Educação, seja em termos de geração de demandas, seja em termos de caracterização e avaliação do atendimento às demandas educacionais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['HZ345', 'HZ358', 'HZ360']
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		},
		'HZ104': {
			code: 'HZ104',
			name: 'Estágio Supervisionado em Ciências Sociais II',
			ementa: 'A disciplina tem por objetivo desenvolver habilidades no ensino de Ciências Sociais, através da prática de atividades de ensino, tanto no sistema oficial de ensino como em espaços não formais, quando autorizados pela Comissão de Graduação em Ciências Sociais, e da reflexão sobre essas experiências, sob orientação de docente responsável pela disciplina.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['HZ103']
		},
		'HZ359': {
			code: 'HZ359',
			name: 'Educação e Sociedade',
			ementa: 'A educação como objeto de análise e investigação da Sociologia a partir da contribuição de autores clássicos e contemporâneos no que se refere às relações entre educação e sociedade e uma sociologia da educação. Estudo das interpretações relativas à escola, aos sistemas de ensino e aos diferentes processos educacionais existentes na sociedade. A pesquisa sociológica sobre educação no Brasil e em outros contextos escolares.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:2, D:0, HS:8, SL:4, C:8},
			requisitos: ['HZ345', 'HZ358', 'HZ360']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		}
	}
};

export default catalogue;
