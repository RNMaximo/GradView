const catalogue = {
	totalCredits: 180,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CS100', 'CS102', 'CS103', 'CS104', 'CS106', 'MC102']
		},
		'sem-2': {
			id: '2',
			subjects: ['CS107', 'CS200', 'CS202', 'CS203', 'CS204', 'CS206']
		},
		'sem-3': {
			id: '3',
			subjects: ['CS039', 'CS052', 'CS300', 'CS301', 'CS302', 'CS303', 'CS304']
		},
		'sem-4': {
			id: '4',
			subjects: ['CS040', 'CS205', 'CS400', 'CS401', 'CS402', 'CS404', 'CS405', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['CS500', 'CS508', 'CS601', 'ELET05']
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

	subjects: {
		'CS100': {
			code: 'CS100',
			name: 'Cultura Moderna e Imagem',
			ementa: 'Analisar e discutir historicamente a configuração da imagem entre os séculos XV - XIX, marcando a elaboração da perspectiva, seus usos e significados simbólicos até a desestruturação desse campo representacional no século XIX. O nascimento do olhar moderno e da imagem indicial.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'CS102': {
			code: 'CS102',
			name: 'Fotografia I',
			ementa: 'Introdução aos conceitos da técnica e da linguagem fotográfica. História da fotografia: a fotografia como arte e como comunicação. Desenvolvimento da criatividade fotográfica, produção e elaboração de um portfólio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94068'
		},
		'CS103': {
			code: 'CS103',
			name: 'Teorias da Comunicação',
			ementa: 'Apresenta as diversas correntes interpretativas e teóricas a propósito dos meios de comunicação e da comunicação social. Enfatiza-se também sua construção histórica e social. As relações entre os meios de comunicação de massas e os processos culturais. As teorias de comunicação e as redes de cultura e de informação. A comunicação social e a cultura brasileira.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404DD9'
		},
		'CS104': {
			code: 'CS104',
			name: 'História da Fotografia',
			ementa: 'Abordagem das múltiplas e simultâneas ações que resultaram nas descobertas fotográficas. O surgimento da fotografia. Os diferentes suportes e processos fotográficos e suas implicações estéticas. A fotografia no Brasil. Os principais fotógrafos do século XIX e do século XX que contribuíram para o desenvolvimento da técnica e novas formas de expressão fotográfica. A história da fotografia vista do ponto de vista autoral.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#409DD9'
		},
		'CS106': {
			code: 'CS106',
			name: 'Métodos e Técnicas de Pesquisa e de Desenvolvimento de Produtos em Midialogia',
			ementa: 'A disciplina tem como objetivos discutir e realizar trabalhos práticos sobre os seguintes assuntos: método científico e técnicas de pesquisa, pesquisa científica, normas da ABNT, a linguagem científica, monografias, artigos, relatórios, realização de projetos e método científico aplicado ao campo da comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99040'
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D96840'
		},
		'CS107': {
			code: 'CS107',
			name: 'Introdução ao Pensamento Computacional',
			ementa: 'Fundamentos matemáticos voltados para aplicação na área de comunicação e tecnologia da informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C5'
		},
		'CS200': {
			code: 'CS200',
			name: 'Captação e Edição de Áudio',
			ementa: 'Discutir sobre os processos de gravação e registro sonoro e de produção sonora em ambiente analógico e digital. Contextualizar sobre a importância do material sonoro nas diversas produções de mídias audiovisuais e/ou suportes digitais, visando a instrumentalização para o conhecimento básico sobre as tecnologias de produção sonora e habilitar para a manipulação básica de material sonoro gravado em ambiente digital e sua utilização nas diversas mídias existentes.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D99D'
		},
		'CS202': {
			code: 'CS202',
			name: 'Antropologia da Imagem',
			ementa: 'Fundamentos metodológicos do uso da fotografia e do cinema na pesquisa antropológica. Origens e pioneiros da Antropologia Visual. Narrativas fotográficas e cinematográficas na Antropologia. Significação e contexto social das imagens técnicas. Imagéticas sociais e comunicação: significações e contextos sócio-estéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8240D9'
		},
		'CS203': {
			code: 'CS203',
			name: 'Planejamento e Produção de Produtos Audiovisuais',
			ementa: 'O resultado e a qualidade dos produtos audiovisuais dependem de minucioso planejamento e organização de todas as fases da realização: pré-produção, produção e pós-produção. Questões como orçamento, financiamento, legislação, divulgação, compõe o corpus e o enfoque principal da disciplina. Discute os diversos modelos de produção, observando os pontos comuns e as especificidades relativos à fotografia, cinema, vídeo, televisão e mídias digitais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: ''
		},
		'CS204': {
			code: 'CS204',
			name: 'Comunicação, Cultura e Sociedade',
			ementa: 'Privilegia-se as relações entre os meios audiovisuais, a cultura de massa, a arte contemporânea, notando de que maneiras tais relações redimensionam, historicamente, o imaginário social entre os séculos XIX - XXI. Estuda-se também os meios audiovisuais, por intermédio da produção, difusão, reapropriação, interpretação e ressignificação das imagens na sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#82D940'
		},
		'CS206': {
			code: 'CS206',
			name: 'Teoria da Imagem',
			ementa: 'Breve diacronia das ciências da linguagem. Da linguística à semiologia: aproximação dualista da linguagem e da comunicação. Pierce: as bases da semiótica filosófica. O projeto semiológico de Barthes e a rentabilidade da leitura. Contribuições de Eco à semiótica e à comunicação. Greimas e a aproximação à semiótica pós-estruturalista. Bakhtin e a leitura da ideologia. Bases da semiótica da comunicação: a construção da semiose e a leitura de discursos. Estudo de narrativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D240D9'
		},
		'CS039': {
			code: 'CS039',
			name: 'Oficina de Roteiro I',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40C5D9'
		},
		'CS052': {
			code: 'CS052',
			name: 'Fotografia II',
			ementa: 'Desenvolve noções de técnicas fotográficas avançadas. Discussões e experimentações com suportes fotográficos: suportes tradicionais, produção de suportes, roteiro e narrativas fotográficas. Fotografia e arte contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: ''
		},
		'CS300': {
			code: 'CS300',
			name: 'Recursos Eletrônicos Aplicados à Produção Sonora',
			ementa: 'Históricos e formatos da publicidade sonora e escuta analítica de material. Breve história da música, do barroco ao século XXI, e suas releituras e citações no universo midiático contemporâneo. Histórico e Conceituação do sound design, sua relação com criação musical e audiovisual e análise de material sonoro. Trabalhos práticos finais. Através destes tópicos, a disciplina procura localizar o aluno em questões fundamentais da criação musical e do sound design na produção audiovisual contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS200'],
			color: ''
		},
		'CS301': {
			code: 'CS301',
			name: 'História do Rádio',
			ementa: 'Estudo do rádio, do ponto de vista da tecnologia, do mercado, das relações socioeconômicas e políticas, da linguagem, dos gêneros e da recepção. Enfoque histórico e teórico, por meio da reflexão conceitual e de experiências, partindo de seu surgimento, passando pelo \"Período de Ouro\", até sua convivência com a televisão e o atual período de convergência digital. A interação entre o rádio e as demais mídias: cinema, televisão e novas mídias. O rádio como um importante mediador da cultura brasileira e da cultura audiovisual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D94D'
		},
		'CS302': {
			code: 'CS302',
			name: 'História da TV e do Vídeo',
			ementa: 'Estudo dos processos de desenvolvimento da televisão, nos contextos mundial e nacional. A disciplina busca compreender a história da televisão do ponto de vista da evolução tecnológica, dos aspectos relativos à linguagem, em suas singularidades e convergências, e de questões de gênero e de recepção. A abordagem do meio contempla também uma visão sobre os determinantes econômicos, sociais e políticos no desenvolvimento da televisão e, por fim, busca estabelecer as diretrizes do papel da TV na definição de uma cultura audiovisual.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D975'
		},
		'CS303': {
			code: 'CS303',
			name: 'Edição de Produtos Audiovisuais',
			ementa: 'A montagem ou edição é uma das etapas principais na produção do sentido na produção audiovisual e sua realização implica em uma análise minuciosa de todo material de imagem e som que deverá compor o produto final. É o momento final da criação, quando se determina a articulação das imagens, entre elas e sua relação com o som. Objetiva fornecer um instrumental, técnico e crítico para a concepção e realização dos procedimentos editoriais. Enfoca as questões de produção de sentido nos diversos meios de comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CS203'],
			color: ''
		},
		'CS304': {
			code: 'CS304',
			name: 'História do Cinema I',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, da irrupção do \"primeiro cinema\" à formação e estabelecimento do cinema clássico. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5A40D9'
		},
		'CS040': {
			code: 'CS040',
			name: 'Oficina de Roteiro II',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#5AD940'
		},
		'CS205': {
			code: 'CS205',
			name: 'Tecnologias da Informação e da Comunicação',
			ementa: 'Estudo das redes de cultura e de comunicação. O aprofundamento conceitual sobre os domínios das tecnologias voltadas para a produção de sistemas computacionais que convergem as diferentes mídias e seu impacto na produção, circulação e recepção dos produtos audiovisuais. Os banco de dados e as redes de produção de conhecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940B7'
		},
		'CS400': {
			code: 'CS400',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos de produção em Computação Gráfica voltada à finalização de produtos audiovisuais.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D2D940'
		},
		'CS401': {
			code: 'CS401',
			name: 'Teoria do Cinema',
			ementa: 'O desenvolvimento do cinema ao longo de mais de um século se fez acompanhar de teorias originais ou derivadas de outros movimentos artísticos. Hoje a teoria do cinema possui uma história sólida cujo conhecimento se tornou básico para o estudo dos meios audiovisuais. O curso aborda alguns dos principais momentos da reflexão teórica em cinema.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9B740'
		},
		'CS402': {
			code: 'CS402',
			name: 'Fotografia e Movimento',
			ementa: 'A aplicação da fotografia em cinema, vídeo e outros meios que se utilizam da imagem em movimento. Princípios conceituais, técnicos e artísticos da direção de fotografia para os meios audiovisuais. A direção de fotografia no Brasil.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: ''
		},
		'CS404': {
			code: 'CS404',
			name: 'História do Cinema II',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, do Pós-Guerra em diante com a irrupção e estabelecimento do cinema moderno até o cinema contemporâneo. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4075D9'
		},
		'CS405': {
			code: 'CS405',
			name: 'Educação e Tecnologia',
			ementa: 'Pretende-se usar, analisar e discutir diferentes softwares usados na Educação, tendo como referencial teórico as abordagens sócio-interacionista de aprendizagem. Os objetivos são discutir as principais teorias sobre o que significa aprender, e explorar como os diferentes usos das Tecnologias da Informação podem contribuir no processo de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AA40D9'
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'CS500': {
			code: 'CS500',
			name: 'História do Cinema Brasileiro',
			ementa: 'Proporcionar uma visão de conjunto da história da realização cinematográfica brasileira, destacando os principais momentos, as obras e os realizadores. Refletir sobre as propostas estéticas, situando-as nos processos histórico, social e político. Discutir as relações entre o cinema e as ideias sobre cultura no Brasil. Estudo sobre a economia do cinema e as ideias sobre o processo de industrialização do cinema. As relações entre cinema, televisão, vídeo e novas mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94090'
		},
		'CS508': {
			code: 'CS508',
			name: 'Redes: Convergência e Sociedade',
			ementa: 'Fundamentos conceituais da convergência tecnológica digital. As questões técnicas e tecnológicas da convergência. As questões políticas, legislativas e mercadológicas na área de telecomunicações. Novos paradigmas de comunicação. O contexto educacional no Brasil e as tecnologias digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AAD940'
		},
		'CS601': {
			code: 'CS601',
			name: 'História e Imagem: Laboratório de Cultura Visual e Mídia',
			ementa: 'Analisar as configurações e funcionamentos das imagens e mídias audiovisuais nos séculos XIX - XXI, percebendo seus sentidos políticos e suas elaborações conceituais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS100'],
			color: ''
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: ''
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:14},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
