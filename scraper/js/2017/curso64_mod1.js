const catalogue = {
	totalCredits: 180,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MC001', 'CS104', 'CS107', 'CS102', 'CS100', 'CS106', 'CS103']
		},
		'sem-2': {
			id: '2',
			subjects: ['CS205', 'CS200', 'CS206', 'CS203', 'CS202', 'CS204']
		},
		'sem-3': {
			id: '3',
			subjects: ['CS301', 'CS039', 'CS300', 'CS052', 'CS303', 'CS302', 'CS304']
		},
		'sem-4': {
			id: '4',
			subjects: ['CS404', 'CS400', 'CS401', 'CS402', 'CS405', 'ELET04', 'CS040']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'CS508', 'CS601', 'CS500']
		},
		'sem-6': {
			id: '6',
			subjects: ['ELET06']
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
			credits: 24,
			hasRestrictions: true,
			subjects: ['CS001', 'CS041', 'CS042', 'CS043', 'CS044', 'CS045', 'CS046', 'CS047', 'CS060', 'CS061', 'CS062', 'CS063', 'CS064', 'CS065', 'CS066', 'CS067', 'CS068', 'CS069', 'CS070', 'CS071', 'CS072', 'CS073', 'CS074'],
		},
		'elet-2': {
			credits: 34,
			hasRestrictions: true,
			subjects: ['AR130', 'CS006', 'CS007', 'CS008', 'CS009', 'CS011', 'CS014', 'CS015', 'CS017', 'CS018', 'CS019', 'CS020', 'CS021', 'CS024', 'CS025', 'CS026', 'CS027', 'CS028', 'CS029', 'CS030', 'CS031', 'CS032', 'CS033', 'CS034', 'CS035', 'CS036', 'CS037', 'CS038', 'CS048', 'CS049', 'CS054', 'CS055', 'CS059', 'CS305', 'CS504', 'CS505', 'CS506', 'CS507', 'CS800', 'CS801'],
		},
		'elet-3': {
			credits: 12,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'CS100': {
			code: 'CS100',
			name: 'Cultura Moderna e Imagem',
			ementa: 'Analisar e discutir historicamente a configuração da imagem entre os séculos XV - XIX, marcando a elaboração da perspectiva, seus usos e significados simbólicos até a desestruturação desse campo representacional no século XIX. O nascimento do olhar moderno e da imagem indicial.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94F46',
			obligatory: true
		},
		'CS102': {
			code: 'CS102',
			name: 'Fotografia I',
			ementa: 'Introdução aos conceitos da técnica e da linguagem fotográfica. História da fotografia: a fotografia como arte e como comunicação. Desenvolvimento da criatividade fotográfica, produção e elaboração de um portfólio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4652B9',
			obligatory: true
		},
		'CS103': {
			code: 'CS103',
			name: 'Teorias da Comunicação',
			ementa: 'Apresenta as diversas correntes interpretativas e teóricas a propósito dos meios de comunicação e da comunicação social. Enfatiza-se também sua construção histórica e social. As relações entre os meios de comunicação de massas e os processos culturais. As teorias de comunicação e as redes de cultura e de informação. A comunicação social e a cultura brasileira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B4B9',
			obligatory: true
		},
		'CS104': {
			code: 'CS104',
			name: 'História da Fotografia',
			ementa: 'Abordagem das múltiplas e simultâneas ações que resultaram nas descobertas fotográficas. O surgimento da fotografia. Os diferentes suportes e processos fotográficos e suas implicações estéticas. A fotografia no Brasil. Os principais fotógrafos do século XIX e do século XX que contribuíram para o desenvolvimento da técnica e novas formas de expressão fotográfica. A história da fotografia vista do ponto de vista autoral.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94658',
			obligatory: true
		},
		'CS106': {
			code: 'CS106',
			name: 'Métodos e Técnicas de Pesquisa e de Desenvolvimento de Produtos em Midialogia',
			ementa: 'A disciplina tem como objetivos discutir e realizar trabalhos práticos sobre os seguintes assuntos: método científico e técnicas de pesquisa, pesquisa científica, normas da ABNT, a linguagem científica, monografias, artigos, relatórios, realização de projetos e método científico aplicado ao campo da comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A3',
			obligatory: true
		},
		'CS107': {
			code: 'CS107',
			name: 'Introdução ao Pensamento Computacional',
			ementa: 'Fundamentos matemáticos voltados para aplicação na área de comunicação e tecnologia da informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B991',
			obligatory: true
		},
		'MC001': {
			code: 'MC001',
			name: 'Tecnologias da Informação',
			ementa: 'Organizações de dados, organizações de computadores, estruturas de programas, fundamentos de bancos de dados, noções de redes, internet, interface ser humano-computadores, impacto social da computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#467FB9',
			obligatory: true
		},
		'CS200': {
			code: 'CS200',
			name: 'Captação e Edição de Áudio',
			ementa: 'Discutir sobre os processos de gravação e registro sonoro e de produção sonora em ambiente analógico e digital. Contextualizar sobre a importância do material sonoro nas diversas produções de mídias audiovisuais e/ou suportes digitais, visando a instrumentalização para o conhecimento básico sobre as tecnologias de produção sonora e habilitar para a manipulação básica de material sonoro gravado em ambiente digital e sua utilização nas diversas mídias existentes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466A',
			obligatory: true
		},
		'CS202': {
			code: 'CS202',
			name: 'Antropologia da Imagem',
			ementa: 'Fundamentos metodológicos do uso da fotografia e do cinema na pesquisa antropológica. Origens e pioneiros da Antropologia Visual. Narrativas fotográficas e cinematográficas na Antropologia. Significação e contexto social das imagens técnicas. Imagéticas sociais e comunicação: significações e contextos sócio-estéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5EB946',
			obligatory: true
		},
		'CS203': {
			code: 'CS203',
			name: 'Planejamento e Produção de Produtos Audiovisuais',
			ementa: 'O resultado e a qualidade dos produtos audiovisuais dependem de minucioso planejamento e organização de todas as fases da realização: pré-produção, produção e pós-produção. Questões como orçamento, financiamento, legislação, divulgação, compõe o corpus e o enfoque principal da disciplina. Discute os diversos modelos de produção, observando os pontos comuns e as especificidades relativos à fotografia, cinema, vídeo, televisão e mídias digitais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: '#4652B9',
			obligatory: true
		},
		'CS204': {
			code: 'CS204',
			name: 'Comunicação, Cultura e Sociedade',
			ementa: 'Privilegia-se as relações entre os meios audiovisuais, a cultura de massa, a arte contemporânea, notando de que maneiras tais relações redimensionam, historicamente, o imaginário social entre os séculos XIX - XXI. Estuda-se também os meios audiovisuais, por intermédio da produção, difusão, reapropriação, interpretação e ressignificação das imagens na sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B946B1',
			obligatory: true
		},
		'CS205': {
			code: 'CS205',
			name: 'Tecnologias da Informação e da Comunicação',
			ementa: 'Estudo das redes de cultura e de comunicação. O aprofundamento conceitual sobre os domínios das tecnologias voltadas para a produção de sistemas computacionais que convergem as diferentes mídias e seu impacto na produção, circulação e recepção dos produtos audiovisuais. Os banco de dados e as redes de produção de conhecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8246B9',
			obligatory: true
		},
		'CS206': {
			code: 'CS206',
			name: 'Teoria da Imagem',
			ementa: 'Breve diacronia das ciências da linguagem. Da linguística à semiologia: aproximação dualista da linguagem e da comunicação. Pierce: as bases da semiótica filosófica. O projeto semiológico de Barthes e a rentabilidade da leitura. Contribuições de Eco à semiótica e à comunicação. Greimas e a aproximação à semiótica pós-estruturalista. Bakhtin e a leitura da ideologia. Bases da semiótica da comunicação: a construção da semiose e a leitura de discursos. Estudo de narrativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96A46',
			obligatory: true
		},
		'CS039': {
			code: 'CS039',
			name: 'Oficina de Roteiro I',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#465BB9',
			obligatory: true
		},
		'CS052': {
			code: 'CS052',
			name: 'Fotografia II',
			ementa: 'Desenvolve noções de técnicas fotográficas avançadas. Discussões e experimentações com suportes fotográficos: suportes tradicionais, produção de suportes, roteiro e narrativas fotográficas. Fotografia e arte contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: '#4652B9',
			obligatory: true
		},
		'CS300': {
			code: 'CS300',
			name: 'Recursos Eletrônicos Aplicados à Produção Sonora',
			ementa: 'Históricos e formatos da publicidade sonora e escuta analítica de material. Breve história da música, do barroco ao século XXI, e suas releituras e citações no universo midiático contemporâneo. Histórico e Conceituação do sound design, sua relação com criação musical e audiovisual e análise de material sonoro. Trabalhos práticos finais. Através destes tópicos, a disciplina procura localizar o aluno em questões fundamentais da criação musical e do sound design na produção audiovisual contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS200'],
			color: '#B9466A',
			obligatory: true
		},
		'CS301': {
			code: 'CS301',
			name: 'História do Rádio',
			ementa: 'Estudo do rádio, do ponto de vista da tecnologia, do mercado, das relações socioeconômicas e políticas, da linguagem, dos gêneros e da recepção. Enfoque histórico e teórico, por meio da reflexão conceitual e de experiências, partindo de seu surgimento, passando pelo \"Período de Ouro\", até sua convivência com a televisão e o atual período de convergência digital. A interação entre o rádio e as demais mídias: cinema, televisão e novas mídias. O rádio como um importante mediador da cultura brasileira e da cultura audiovisual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B95B',
			obligatory: true
		},
		'CS302': {
			code: 'CS302',
			name: 'História da TV e do Vídeo',
			ementa: 'Estudo dos processos de desenvolvimento da televisão, nos contextos mundial e nacional. A disciplina busca compreender a história da televisão do ponto de vista da evolução tecnológica, dos aspectos relativos à linguagem, em suas singularidades e convergências, e de questões de gênero e de recepção. A abordagem do meio contempla também uma visão sobre os determinantes econômicos, sociais e políticos no desenvolvimento da televisão e, por fim, busca estabelecer as diretrizes do papel da TV na definição de uma cultura audiovisual.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#55B946',
			obligatory: true
		},
		'CS303': {
			code: 'CS303',
			name: 'Edição de Produtos Audiovisuais',
			ementa: 'A montagem ou edição é uma das etapas principais na produção do sentido na produção audiovisual e sua realização implica em uma análise minuciosa de todo material de imagem e som que deverá compor o produto final. É o momento final da criação, quando se determina a articulação das imagens, entre elas e sua relação com o som. Objetiva fornecer um instrumental, técnico e crítico para a concepção e realização dos procedimentos editoriais. Enfoca as questões de produção de sentido nos diversos meios de comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CS203'],
			color: '#4652B9',
			obligatory: true
		},
		'CS304': {
			code: 'CS304',
			name: 'História do Cinema I',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, da irrupção do \"primeiro cinema\" à formação e estabelecimento do cinema clássico. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8BB946',
			obligatory: true
		},
		'CS040': {
			code: 'CS040',
			name: 'Oficina de Roteiro II',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#5546B9',
			obligatory: true
		},
		'CS400': {
			code: 'CS400',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos de produção em Computação Gráfica voltada à finalização de produtos audiovisuais.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#5E46B9',
			obligatory: true
		},
		'CS401': {
			code: 'CS401',
			name: 'Teoria do Cinema',
			ementa: 'O desenvolvimento do cinema ao longo de mais de um século se fez acompanhar de teorias originais ou derivadas de outros movimentos artísticos. Hoje a teoria do cinema possui uma história sólida cujo conhecimento se tornou básico para o estudo dos meios audiovisuais. O curso aborda alguns dos principais momentos da reflexão teórica em cinema.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94661',
			obligatory: true
		},
		'CS402': {
			code: 'CS402',
			name: 'Fotografia e Movimento',
			ementa: 'A aplicação da fotografia em cinema, vídeo e outros meios que se utilizam da imagem em movimento. Princípios conceituais, técnicos e artísticos da direção de fotografia para os meios audiovisuais. A direção de fotografia no Brasil.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: '#4652B9',
			obligatory: true
		},
		'CS404': {
			code: 'CS404',
			name: 'História do Cinema II',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, do Pós-Guerra em diante com a irrupção e estabelecimento do cinema moderno até o cinema contemporâneo. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4649B9',
			obligatory: true
		},
		'CS405': {
			code: 'CS405',
			name: 'Educação e Tecnologia',
			ementa: 'Pretende-se usar, analisar e discutir diferentes softwares usados na Educação, tendo como referencial teórico as abordagens sócio-interacionista de aprendizagem. Os objetivos são discutir as principais teorias sobre o que significa aprender, e explorar como os diferentes usos das Tecnologias da Informação podem contribuir no processo de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B988',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CS500': {
			code: 'CS500',
			name: 'História do Cinema Brasileiro',
			ementa: 'Proporcionar uma visão de conjunto da história da realização cinematográfica brasileira, destacando os principais momentos, as obras e os realizadores. Refletir sobre as propostas estéticas, situando-as nos processos histórico, social e político. Discutir as relações entre o cinema e as ideias sobre cultura no Brasil. Estudo sobre a economia do cinema e as ideias sobre o processo de industrialização do cinema. As relações entre cinema, televisão, vídeo e novas mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95846',
			obligatory: true
		},
		'CS508': {
			code: 'CS508',
			name: 'Redes: Convergência e Sociedade',
			ementa: 'Fundamentos conceituais da convergência tecnológica digital. As questões técnicas e tecnológicas da convergência. As questões políticas, legislativas e mercadológicas na área de telecomunicações. Novos paradigmas de comunicação. O contexto educacional no Brasil e as tecnologias digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9D46B9',
			obligatory: true
		},
		'CS601': {
			code: 'CS601',
			name: 'História e Imagem: Laboratório de Cultura Visual e Mídia',
			ementa: 'Analisar as configurações e funcionamentos das imagens e mídias audiovisuais nos séculos XIX - XXI, percebendo seus sentidos políticos e suas elaborações conceituais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS100'],
			color: '#B94F46',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#000000',
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
		'AR130': {
			code: 'AR130',
			name: 'Arte e Produção',
			ementa: 'Abordagens interdisciplinares sobre o processo de produção em arte. As relações entre a arte e os sistemas de difusão e exibição. Analisar as tendências contemporâneas na área de produção em artes visuais, artes cênicas, música erudita e popular, e no audiovisual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#94B946',
			obligatory: false
		},
		'CS001': {
			code: 'CS001',
			name: 'Projeto em Fotografia',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#46B99A',
			obligatory: false
		},
		'CS006': {
			code: 'CS006',
			name: 'Tópicos Especiais em Cinema I',
			ementa: 'Propiciar abordagens temáticas e de gêneros diferenciadas em relação ao cinema; discussão e interpretação de filmografias fundamentais neste meio audiovisual. Dedica-se aos estudos de obras tanto quanto à realização de produtos cinematográficos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98E46',
			obligatory: false
		},
		'CS007': {
			code: 'CS007',
			name: 'Tópicos Especiais em Cinema II',
			ementa: 'Propiciar abordagem temáticas e de gêneros diferenciadas em relação ao cinema; discussão e interpretação de filmografias fundamentais neste meio audiovisual. Dedica-se a estudos de obras tanto quanto à realização de produtos cinematográficos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4CB946',
			obligatory: false
		},
		'CS008': {
			code: 'CS008',
			name: 'Tópicos Especiais em Cinema Brasileiro I',
			ementa: 'Proporcionar a reflexão sobre aspectos da cultura brasileira, por meio do discurso cinematográfico. Realizar recortes no imaginário produzido/refletido na produção cinematográfica, visando compreender suas relações com os processos histórico, social e político. Por meio dos filmes, explorar as questões que envolvem os conceitos de nacional, popular e as políticas de identidade nas representações audiovisuais. Discutir as relações entre cultura de massa, cultura de rede e sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#82B946',
			obligatory: false
		},
		'CS009': {
			code: 'CS009',
			name: 'Tópicos Especiais em Cinema Brasileiro II',
			ementa: 'Proporcionar a reflexão sobre aspectos da cultura brasileira, por meio do discurso cinematográfico. Realizar recortes no imaginário produzido/refletido na produção cinematográfica, visando compreender suas relações com os processos histórico, social e político. Por meio dos filmes, explorar as questões que envolvem os conceitos de nacional, popular e as políticas de identidade nas representações audiovisuais. Discutir as relações entre cultura de massa, cultura de rede e sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A646B9',
			obligatory: false
		},
		'CS011': {
			code: 'CS011',
			name: 'Tópicos Especiais em Fotografia',
			ementa: 'Propiciar abordagens de temáticas e de gêneros diferenciados em relação à fotografia. A questão autoral na fotografia; apresentação do trabalho de fotógrafos referenciais no conjunto da expressão fotográfica. Estudo do conjunto do trabalho de um fotógrafo ou de uma época específica da História da Fotografia. Aprofundamento técnico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4C46B9',
			obligatory: false
		},
		'CS014': {
			code: 'CS014',
			name: 'Tópicos Especiais em Internet/Multimídia',
			ementa: 'Estudo do desenvolvimento de produtos para ambientes virtuais na Web. Integração das mídias e suas possíveis convergências. Desenvolvimento dos aplicativos de multimídia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9A046',
			obligatory: false
		},
		'CS015': {
			code: 'CS015',
			name: 'Tópicos Especiais em Midialogia I',
			ementa: 'Analisar situações de configuração contemporânea das redes de comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8B46B9',
			obligatory: false
		},
		'CS017': {
			code: 'CS017',
			name: 'Projeto de Iniciação Científica',
			ementa: 'Destina-se ao desenvolvimento de projeto de Iniciação Científica com bolsa de agência de fomento.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:7, D:0, HS:8, SL:1, C:8},
			requisitos: ['AA200'],
			color: '#67B946',
			obligatory: false
		},
		'CS018': {
			code: 'CS018',
			name: 'Arte e Tecnologia',
			ementa: 'Nesta disciplina pretende-se traçar um panorama e fazer uma reflexão sobre as diferentes utilizações e manifestações artísticas possibilitadas pelas novas mídias audiovisuais.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B949',
			obligatory: false
		},
		'CS019': {
			code: 'CS019',
			name: 'Tópicos Especiais em Midialogia III',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9DB946',
			obligatory: false
		},
		'CS020': {
			code: 'CS020',
			name: 'Tópicos Especiais em Midialogia IV',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'CS021': {
			code: 'CS021',
			name: 'Tópicos Especiais em Fotografia II',
			ementa: 'Propiciar abordagens de temáticas e de gêneros diferenciados em relação à fotografia. A questão autoral na fotografia; apresentação do trabalho de fotógrafos referenciais no conjunto da expressão fotográfica. Estudo do conjunto do trabalho de um fotógrafo ou de uma época específica da História da Fotografia. Aprofundamento técnico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9468E',
			obligatory: false
		},
		'CS024': {
			code: 'CS024',
			name: 'Tópicos Especiais em Internet/Multimídia II',
			ementa: 'A empresa de televisão (mídia), os compromissos entre as atividades lucrativas e a geração da informação. Produto da televisão (mídia) e mercadoria da televisão (mídia). Mídia e informação no século XX. O papel das mídias corporativas, populares e comunitárias na construção da informação. Informação e mercado. Informação e Estado. As tecnologias da informação. Educação à distância e mídias emergentes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B976',
			obligatory: false
		},
		'CS025': {
			code: 'CS025',
			name: 'Oficina de Produção Audiovisual',
			ementa: 'Gestão das demandas operacionais e financeiras do produto audiovisual.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97C46',
			obligatory: false
		},
		'CS026': {
			code: 'CS026',
			name: 'Oficina de Direção de Fotografia',
			ementa: 'Projeto e realização da produção fotográfica dentro da obra audiovisual. Técnica, linguagem e projeto estético em direção de fotografia para imagem e som em movimento. A direção de fotografia e o audiovisual brasileiro.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9467C',
			obligatory: false
		},
		'CS027': {
			code: 'CS027',
			name: 'Oficina de Direção de Arte',
			ementa: 'Disciplina oferecida de par com um projeto integrado. Projeto e realização de todos os elementos visuais da obra audiovisual.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A6B946',
			obligatory: false
		},
		'CS028': {
			code: 'CS028',
			name: 'Tópicos Especiais em Midialogia III',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B97F',
			obligatory: false
		},
		'CS029': {
			code: 'CS029',
			name: 'Tópicos Especiais em Midialogia V',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#7046B9',
			obligatory: false
		},
		'CS030': {
			code: 'CS030',
			name: 'Estudos Dirigidos II',
			ementa: 'Conjunto de leituras, atividades e orientação correlato aos projetos de pesquisa em andamento, propostos pelos professores do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B7B946',
			obligatory: false
		},
		'CS031': {
			code: 'CS031',
			name: 'Estudos Dirigidos I',
			ementa: 'Conjunto de leituras, atividades e orientações correlato aos projetos de pesquisa em andamento, propostas pelos professores do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B146',
			obligatory: false
		},
		'CS032': {
			code: 'CS032',
			name: 'Monitoria',
			ementa: 'Trabalho de Monitoria para auxiliar o docente responsável pela disciplina CS, na orientação de atividades didáticas, exercícios práticos e/ou em laboratório, leituras, seminários, pesquisas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#4676B9',
			obligatory: false
		},
		'CS033': {
			code: 'CS033',
			name: 'Difusão Cultural e Tecnológica em Midialogia',
			ementa: 'Seminários e/ou Palestras sobre temas culturais, conceituais, tecnológicos relativos à área das Mídias Audiovisuais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#70B946',
			obligatory: false
		},
		'CS034': {
			code: 'CS034',
			name: 'Tópicos Especiais em Midialogia VI',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94673',
			obligatory: false
		},
		'CS035': {
			code: 'CS035',
			name: 'Tópicos Especiais em Midialogia VII',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'CS036': {
			code: 'CS036',
			name: 'Tópicos Especiais em Midialogia VIII',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A846',
			obligatory: false
		},
		'CS037': {
			code: 'CS037',
			name: 'Tópicos Especiais em Midialogia IX',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9464F',
			obligatory: false
		},
		'CS038': {
			code: 'CS038',
			name: 'Tópicos Especiais em Midialogia X',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98546',
			obligatory: false
		},
		'CS041': {
			code: 'CS041',
			name: 'Projeto de Cinema I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B96146',
			obligatory: false
		},
		'CS042': {
			code: 'CS042',
			name: 'Projeto de Cinema II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B97346',
			obligatory: false
		},
		'CS043': {
			code: 'CS043',
			name: 'Projetos Especiais',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B746B9',
			obligatory: false
		},
		'CS044': {
			code: 'CS044',
			name: 'Projeto em Produção Sonora I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B946A0',
			obligatory: false
		},
		'CS045': {
			code: 'CS045',
			name: 'Projeto em Produção Sonora II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94697',
			obligatory: false
		},
		'CS046': {
			code: 'CS046',
			name: 'Projeto em TV e Vídeo I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção, pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#4664B9',
			obligatory: false
		},
		'CS047': {
			code: 'CS047',
			name: 'Projeto em TV e Vídeo II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizads no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#7946B9',
			obligatory: false
		},
		'CS048': {
			code: 'CS048',
			name: 'Tópicos Especiais em Midialogia XI',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B952',
			obligatory: false
		},
		'CS049': {
			code: 'CS049',
			name: 'Tópicos Especiais em Midialogia XII',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#466DB9',
			obligatory: false
		},
		'CS054': {
			code: 'CS054',
			name: 'Teleficção',
			ementa: 'A televisão em sua dinâmica de programação necessita de um leque grande de formatos televisivos. Desde muito cedo a televisão incorporou e se adaptou as mais diversas artes e mídias narrativas: a literatura, o rádio, o cinema, o folhetim. Aos poucos desenvolveu determinados formatos de características ficcionais em sua grade de programação. A disciplina discute o papel da produção ficcional da televisão, à disposição do público.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9446B9',
			obligatory: false
		},
		'CS055': {
			code: 'CS055',
			name: 'Poéticas da Imagem',
			ementa: 'O poético e a imagem planar; recodificação e intertextualidade; o projeto criativo e a imagem-máquina. Teorias da imagem: modernidade e pós-modernidade. Processos de produção de imagens técnicas e digitais. Visionamento e interpretação de imagens.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AEB946',
			obligatory: false
		},
		'CS059': {
			code: 'CS059',
			name: 'Documentário: História, Teoria e Análise',
			ementa: 'Abordagem teórica e histórica sobre o desenvolvimento do filme documentário, nos contextos mundial e nacional. As fases e modalidades do documentário. O documentário e a ideia de vanguarda. A institucionalização do documentário. As revoluções do Cinema Direto e Cinema Verdade. O documentário no contexto do cinema moderno. Autoria e documentário. O documentário e a televisão. O papel do vídeo na linguagem e nas apropriações contemporâneas do formato. O documentário e as mídias digitais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B96D',
			obligatory: false
		},
		'CS060': {
			code: 'CS060',
			name: 'Projetos Especiais II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina pode ser oferecida por 1 ou mais professores simultaneamente.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#AE46B9',
			obligatory: false
		},
		'CS061': {
			code: 'CS061',
			name: 'Projetos Especiais III - I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina pode ser oferecida por 1 ou mais professores simultaneamente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B9B4',
			obligatory: false
		},
		'CS062': {
			code: 'CS062',
			name: 'Projetos Especiais III - II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina pode ser oferecida por 1 ou mais professores simultaneamente. A disciplina é um desdobramento da CS061.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS061'],
			color: '#46B9B4',
			obligatory: false
		},
		'CS063': {
			code: 'CS063',
			name: 'Projetos Especiais IV - I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina pode ser oferecida por 1 ou mais professores simultaneamente.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B9AB',
			obligatory: false
		},
		'CS064': {
			code: 'CS064',
			name: 'Projetos Especiais IV - II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina pode ser oferecida por 1 ou mais professores simultaneamente. A disciplina é um desdobramento da CS063.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS063'],
			color: '#46B9AB',
			obligatory: false
		},
		'CS065': {
			code: 'CS065',
			name: 'Projetos Integrados I - I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#469AB9',
			obligatory: false
		},
		'CS066': {
			code: 'CS066',
			name: 'Projetos Integrados I - II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas. A disciplina é um desdobramento da CS065.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS065'],
			color: '#469AB9',
			obligatory: false
		},
		'CS067': {
			code: 'CS067',
			name: 'Projetos Integrados II - I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#6746B9',
			obligatory: false
		},
		'CS068': {
			code: 'CS068',
			name: 'Projetos Integrados II - II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas. A disciplina é um desdobramento da CS067.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS067'],
			color: '#6746B9',
			obligatory: false
		},
		'CS069': {
			code: 'CS069',
			name: 'Projetos Integrados III - I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B964',
			obligatory: false
		},
		'CS070': {
			code: 'CS070',
			name: 'Projetos Integrados III - II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas. A disciplina é um desdobramento da CS069.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS069'],
			color: '#46B964',
			obligatory: false
		},
		'CS071': {
			code: 'CS071',
			name: 'Projetos Integrados IV',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#79B946',
			obligatory: false
		},
		'CS072': {
			code: 'CS072',
			name: 'Projetos Integrados V',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores. A disciplina deve ser oferecida por 2 ou mais professores simultaneamente, integrando duas ou mais áreas.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#B946A8',
			obligatory: false
		},
		'CS073': {
			code: 'CS073',
			name: 'Projeto em Narrativas Digitais I',
			ementa: 'Compreensão da integração das mídias digitais emergentes e suas possíveis convergências. Fundamentação voltada ao desenvolvimento de aplicativos para os suportes digitais. Análise e discussão das concepções de produção de narrativas digitais com as mídias emergentes. Avaliação das implicações cognitivas e no campo do conhecimento dessas tecnologias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94685',
			obligatory: false
		},
		'CS074': {
			code: 'CS074',
			name: 'Projeto em Narrativas Digitais II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação utilizando os suportes digitais - pré produção, produção e pós-produção, conhecimento técnico e de planejamento administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS073'],
			color: '#B94685',
			obligatory: false
		},
		'CS305': {
			code: 'CS305',
			name: 'Redes Convergentes',
			ementa: 'Fundamentos conceituais da convergência tecnológica digital. As questões técnicas e tecnológicas da convergência. As questões políticas, legislativas e mercadológicas na área de telecomunicações. Novos paradigmas de comunicação. O contexto educacional no Brasil e as tecnologias digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS205'],
			color: '#8246B9',
			obligatory: false
		},
		'CS504': {
			code: 'CS504',
			name: 'Realização Audiovisual I',
			ementa: 'A disciplina oferece conteúdo voltado para os princípios da direção de produtos audiovisuais em cinema, TV, vídeo e novas mídias, com foco na ficção.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS039', 'CS040', 'CS203', 'CS303', 'CS402'],
			color: '#4951B9',
			obligatory: false
		},
		'CS505': {
			code: 'CS505',
			name: 'Realização Audiovisual II',
			ementa: 'A disciplina oferece conteúdo voltado para os princípios da direção de produtos audiovisuais em cinema, TV, vídeo e novas mídias, com foco no documentário.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS504'],
			color: '#4951B9',
			obligatory: false
		},
		'CS506': {
			code: 'CS506',
			name: 'Direção de Atores',
			ementa: 'Conceitos fundamentais de direção de atores para produtos audiovisuais (cinema e televisão). As singularidades da interpretação para o audiovisual. Atores, atrizes e câmeras. Os não-atores e o contingente na filmagem da ficção. Como compor um casting. Métodos de interpretação em produtos audiovisuais. Procedimentos de ensaios. Análises de interpretação em produtos audiovisuais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A3B9',
			obligatory: false
		},
		'CS507': {
			code: 'CS507',
			name: 'Narrativas Audiovisuais: Teorias, Análises e Processos',
			ementa: 'Trata-se do estudo conceitual da narrativa voltado para sua manifestação nos produtos em mídias audiovisuais (cinema, televisão, vídeo e novas mídias), por meio de abordagens distintas. Os gêneros e os formatos narrativos e a expressão audiovisual. Narrativas clássicas, modernas e contemporâneas. Narrativas e os domínios das telas expandidas no contexto do digital. Narrativas, identidades e alteridades.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B99746',
			obligatory: false
		},
		'CS800': {
			code: 'CS800',
			name: 'Estágio Supervisionado em Midialogia I',
			ementa: 'Estágio supervisionado a ser cumprido pelo graduando em Comunicação Social na área de produção e/ou crítica cultural.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#4691B9',
			obligatory: false
		},
		'CS801': {
			code: 'CS801',
			name: 'Estágio Supervisionado em Midialogia II',
			ementa: 'Estágio supervisionado a ser cumprido pelo graduando em Comunicação Social na área de produção e/ou crítica cultural.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:10, D:0, HS:12, SL:2, C:12},
			requisitos: ['AA200'],
			color: '#46ABB9',
			obligatory: false
		}
	}
};

export default catalogue;
