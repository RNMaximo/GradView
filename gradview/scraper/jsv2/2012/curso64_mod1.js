const catalogue = {
	totalCredits: 182,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CS100', 'CS103', 'CS104', 'CS102', 'CS105', 'MC001', 'CS101']
		},
		'sem-2': {
			id: '2',
			subjects: ['CS200', 'CS201', 'CS204', 'CS203', 'CS202', 'CS205']
		},
		'sem-3': {
			id: '3',
			subjects: ['CS300', 'CS304', 'CS303', 'CS306', 'CS301', 'CS305', 'CS302']
		},
		'sem-4': {
			id: '4',
			subjects: ['ELET04', 'CS401', 'CS405', 'CS402', 'CS400', 'CS403', 'CS404']
		},
		'sem-5': {
			id: '5',
			subjects: ['CS502', 'CS040', 'ELET05', 'CS039', 'CS500', 'CS503']
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
			subjects: ['CS001', 'CS005', 'CS041', 'CS042', 'CS043', 'CS044', 'CS045', 'CS046', 'CS047'],
		},
		'elet-2': {
			credits: 28,
			hasRestrictions: true,
			subjects: ['AR130', 'CS007', 'CS009', 'CS011', 'CS012', 'CS013', 'CS014', 'CS015', 'CS017', 'CS018', 'CS020', 'CS025', 'CS026', 'CS027', 'CS028', 'CS029', 'CS030', 'CS031', 'CS032', 'CS033', 'CS034', 'CS035', 'CS036', 'CS037', 'CS038', 'CS050', 'CS052', 'CS053', 'CS055', 'CS056', 'CS057', 'CS058', 'CS700', 'CS701', 'CS702', 'CS703', 'CS704', 'CS705', 'CS706', 'CS707', 'CS708', 'CS709', 'CS800', 'CS801'],
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
			color: '#A846B9',
			obligatory: true
		},
		'CS101': {
			code: 'CS101',
			name: 'Métodos e Técnicas de Pesquisa em Midialogia',
			ementa: 'A disciplina tem como objetivos discutir e realizar trabalhos práticos sobre os seguintes assuntos: método científico e técnicas de pesquisa, pesquisa científica, normas da ABNT, a linguagem científica, monografias, artigos, relatórios, realização de projetos e método científico aplicado ao campo da comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464AB9',
			obligatory: true
		},
		'CS102': {
			code: 'CS102',
			name: 'Fotografia I',
			ementa: 'Introdução aos conceitos da técnica e da linguagem fotográfica. História da fotografia: a fotografia como arte e como comunicação. Desenvolvimento da criatividade fotográfica, produção e elaboração de um portfólio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4668B9',
			obligatory: true
		},
		'CS103': {
			code: 'CS103',
			name: 'Teorias da Comunicação',
			ementa: 'Apresenta as diversas correntes interpretativas e teóricas a propósito dos meios de comunicação e da comunicação social. Enfatiza-se também sua construção histórica e social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9AB46',
			obligatory: true
		},
		'CS104': {
			code: 'CS104',
			name: 'História da Fotografia',
			ementa: 'Abordagem das múltiplas e simultâneas ações que resultaram nas descobertas fotográficas. O surgimento da fotografia. Os diferentes suportes e processos fotográficos e suas implicações estéticas. A fotografia no Brasil. Os principais fotógrafos do século XIX e do século XX que contribuíram para o desenvolvimento da técnica e novas formas de expressão fotográfica. A história da fotografia vista do ponto de vista autoral.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9A146',
			obligatory: true
		},
		'CS105': {
			code: 'CS105',
			name: 'Elementos Fundamentais de Matemática',
			ementa: 'Fundamentos matemáticos voltados para aplicação na área de comunicação e tecnologia da informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98D46',
			obligatory: true
		},
		'MC001': {
			code: 'MC001',
			name: 'Tecnologias da Informação',
			ementa: 'Organizações de dados, organizações de computadores, estruturas de programas, fundamentos de bancos de dados, noções de redes, internet, interface ser humano-computadores, impacto social da computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B954',
			obligatory: true
		},
		'CS200': {
			code: 'CS200',
			name: 'Captação e Edição de Áudio',
			ementa: 'Conceituação de microfones, mesas de som, gravadores e editores digitais de áudio, e suas técnicas de utilização. Recursos técnicos e estéticos oferecidos por esses equipamentos na criação sonora e musical.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8AB946',
			obligatory: true
		},
		'CS201': {
			code: 'CS201',
			name: 'Teorias do Signo',
			ementa: 'Breve diacronia das ciências da linguagem. Da linguística à semiologia: aproximação dualista da linguagem e da comunicação. Pierce: as bases da semiótica filosófica. O projeto semiológico de Barthes e a rentabilidade da leitura. Contribuições de Eco à semiótica e à comunicação. Greimas e a aproximação à semiótica pós-estruturalista. Bakhtin e a leitura da ideologia. Bases da semiótica da comunicação: a construção da semiose e a leitura de discursos. Estudo de narrativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9A5',
			obligatory: true
		},
		'CS202': {
			code: 'CS202',
			name: 'Antropologia da Imagem',
			ementa: 'Fundamentos metodológicos do uso da fotografia e do cinema na pesquisa antropológica. Origens e precursores. O visualismo nas Ciências Humanas. Narrativas fotográficas e cinematográficas na Antropologia. Significação e contexto social das imagens técnicas. Construções sociais imagéticas: significações e usos sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94679',
			obligatory: true
		},
		'CS203': {
			code: 'CS203',
			name: 'Planejamento e Produção de Produtos Audiovisuais',
			ementa: 'O resultado e a qualidade dos produtos audiovisuais dependem de minucioso planejamento e organização de todas as fases da realização: pré-produção, produção e pós-produção. Questões como orçamento, financiamento, legislação, divulgação, compõe o corpus e o enfoque principal da disciplina. Discute os diversos modelos de produção, observando os pontos comuns e as especificidades relativos à fotografia, cinema, vídeo, televisão e mídias digitais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: '#4668B9',
			obligatory: true
		},
		'CS204': {
			code: 'CS204',
			name: 'Comunicação, Cultura e Sociedade',
			ementa: 'Privilegia-se as relações entre os meios audiovisuais, a cultura de massa, a arte contemporânea, notando de que maneiras tais relações redimensionam, historicamente, o imaginário social entre os séculos XIX - XXI. Estuda-se também os meios audiovisuais, por intermédio da produção, difusão, reapropriação, interpretação e ressignificação das imagens na sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AF',
			obligatory: true
		},
		'CS205': {
			code: 'CS205',
			name: 'Tecnologias da Informação e da Comunicação',
			ementa: 'E-learning, e-comerce e bancos de dados voltados para essas aplicações. Tendências de tecnologia voltadas para a produção de sistemas computacionais que convergem as diferentes mídias. Introdução à computação gráfica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#75B946',
			obligatory: true
		},
		'CS300': {
			code: 'CS300',
			name: 'Recursos Eletrônicos Aplicados à Produção Sonora',
			ementa: 'Histórico das tecnologias aplicadas à produção sonora. Conceituação de equipamentos e evolução dos mesmos. Técnicas de gravação analógicas e digitais. Masterização e remasterização. Utilização dos recursos informatizados na produção sonora. Fornecer ao aluno ferramentas teóricas e práticas que habilitem a manipular tanto os recursos analógicos quanto os recursos digitais aplicados à produção sonora.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS200'],
			color: '#8AB946',
			obligatory: true
		},
		'CS301': {
			code: 'CS301',
			name: 'História do Rádio',
			ementa: 'Estudo sobre o desenvolvimento do rádio, do ponto de vista da tecnologia, das relações socioeconômicas e políticas, da linguagem, dos gêneros e da recepção. O enfoque histórico se alia ao teórico, por meio da reflexão a partir de textos-chave, investigando o meio desde seu surgimento, passando pelo \"Período de Ouro\", até seu papel de coadjuvante pós-televisão. A disciplina dialoga com as mídias - cinema, televisão e novas mídias - e busca inserir o rádio numa discussão sobre a cultura audiovisual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#57B946',
			obligatory: true
		},
		'CS302': {
			code: 'CS302',
			name: 'História da TV e do Vídeo',
			ementa: 'Estudo dos processos de desenvolvimento da televisão, nos contextos mundial e nacional. A disciplina busca compreender a história da televisão do ponto de vista da evolução tecnológica, dos aspectos relativos à linguagem, em suas singularidades e convergências, e de questões de gênero e de recepção. A abordagem do meio contempla também uma visão sobre os determinantes econômicos, sociais e políticos no desenvolvimento da televisão e, por fim, busca estabelecer as diretrizes do papel da TV na definição de uma cultura audiovisual.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46A5B9',
			obligatory: true
		},
		'CS303': {
			code: 'CS303',
			name: 'Edição de Produtos Audiovisuais',
			ementa: 'A edição é uma das etapas principais na produção do sentido na produção audiovisual, e sua realização implica em uma análise minuciosa de todo material de imagem e som que deverá compor o produto final. É o momento final da criação, quando se determina a articulação das imagens, entre elas e sua relação com o som. Objetiva fornecer um instrumental, técnico e crítico para a concepção e realização dos procedimentos editoriais. Enfoca as questões de produção de sentido nos diversos meios de comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['CS203'],
			color: '#4668B9',
			obligatory: true
		},
		'CS304': {
			code: 'CS304',
			name: 'História do Cinema I',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, da irrupção do \"primeiro cinema\" à formação e estabelecimento do cinema clássico. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A8B946',
			obligatory: true
		},
		'CS305': {
			code: 'CS305',
			name: 'Redes Convergentes',
			ementa: 'A convergência entre o telefone, a televisão e o computador. Fundamentos tecnológicos da convergência. Fundamentos políticos e mercadológicos na área de telecomunicações. Novos paradigmas de comunicação. O contexto brasileiro e educacional. Tendências contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS205'],
			color: '#75B946',
			obligatory: true
		},
		'CS306': {
			code: 'CS306',
			name: 'Fotografia Digital',
			ementa: 'Introdução e conceitos gerais sobre a Imagem Digital. As razões para utilização da Fotografia Digital. Processos de Captação de Imagens. Processos de manipulação de Imagens (utilização do Adobe Photoshop). A câmara clara digital. A geração do produto final para imagens digitalizadas. Análise Comparativa e utilização do hardware existente. A evolução dos equipamentos digitais. A linguagem Fotográfica Digital. O novo olhar fotográfico. Estudos e trabalhos de campo e laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: '#4668B9',
			obligatory: true
		},
		'CS400': {
			code: 'CS400',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos de produção em Computação Gráfica voltada à realização de material audiovisual.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#B94683',
			obligatory: true
		},
		'CS401': {
			code: 'CS401',
			name: 'Teoria do Cinema',
			ementa: 'O desenvolvimento do cinema ao longo de mais de um século se fez acompanhar de teorias originais ou derivadas de outros movimentos artísticos. Hoje a teoria do cinema possui uma história sólida cujo conhecimento se tornou básico para o estudo dos meios audiovisuais. O curso aborda alguns dos principais momentos da reflexão teórica em cinema.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9465A',
			obligatory: true
		},
		'CS402': {
			code: 'CS402',
			name: 'Fotografia e Movimento',
			ementa: 'A aplicação da fotografia em cinema, vídeo e outros meios que se utilizam da imagem em movimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: '#4668B9',
			obligatory: true
		},
		'CS403': {
			code: 'CS403',
			name: 'Multimídia',
			ementa: 'Compreensão da integração das mídias e suas possíveis convergências. Fundamentação voltada ao desenvolvimento dos aplicativos de multimídia. Análise e discussão das concepções de hipermídia. Avaliação das implicações cognitivas e no campo do conhecimento dessas tecnologias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS305'],
			color: '#75B946',
			obligatory: true
		},
		'CS404': {
			code: 'CS404',
			name: 'História do Cinema II',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, do Pós-Guerra em diante com a irrupção e estabelecimento do cinema moderno até o cinema contemporâneo. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96F46',
			obligatory: true
		},
		'CS405': {
			code: 'CS405',
			name: 'Educação e Tecnologia',
			ementa: 'Pretende-se usar, analisar e discutir diferentes softwares usados na Educação, tendo como referencial teórico as abordagens sócio-interacionista de aprendizagem. Os objetivos são discutir as principais teorias sobre o que significa aprender, e explorar como os diferentes usos das Tecnologias da Informação podem contribuir no processo de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B97946',
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
		'CS039': {
			code: 'CS039',
			name: 'Oficina de Roteiro I',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#B2B946',
			obligatory: true
		},
		'CS040': {
			code: 'CS040',
			name: 'Oficina de Roteiro II',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#8046B9',
			obligatory: true
		},
		'CS500': {
			code: 'CS500',
			name: 'História do Cinema Brasileiro',
			ementa: 'Proporcionar uma visão de conjunto da história da produção cinematográfica brasileira, destacando os principais momentos, as obras e os realizadores. Refletir sobre as propostas estéticas e econômicas, situando-as no processo histórico, social e político. Discutir as relações entre o cinema e as culturas do Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B990',
			obligatory: true
		},
		'CS502': {
			code: 'CS502',
			name: 'História Social da Cultura',
			ementa: 'Analisar as configurações e funcionamentos das imagens e mídias audiovisuais nos séculos XIX - XXI, percebendo seus sentidos políticos e suas elaborações conceituais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS100'],
			color: '#A846B9',
			obligatory: true
		},
		'CS503': {
			code: 'CS503',
			name: 'Web/Internet',
			ementa: 'Conceituação técnica e a terminologia utilizada no desenvolvimento de produtos voltados para Web Internet. Discussão sobre a estética nos produtos desenvolvidos para Web Internet, bem como a eficiência dos mesmos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS305'],
			color: '#75B946',
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
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: '#000000',
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
			color: '#B946A1',
			obligatory: false
		},
		'CS001': {
			code: 'CS001',
			name: 'Projeto em Fotografia',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#B94650',
			obligatory: false
		},
		'CS005': {
			code: 'CS005',
			name: 'Projeto em Multimídia',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['AA200'],
			color: '#465EB9',
			obligatory: false
		},
		'CS007': {
			code: 'CS007',
			name: 'Tópicos Especiais em Cinema II',
			ementa: 'Propiciar abordagem temáticas e de gêneros diferenciadas em relação ao cinema; discussão e interpretação de filmografias fundamentais neste meio audiovisual. Dedica-se a estudos de obras tanto quanto à realização de produtos cinematográficos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94697',
			obligatory: false
		},
		'CS009': {
			code: 'CS009',
			name: 'Tópicos Especiais em Cinema Brasileiro II',
			ementa: 'Proporcionar a reflexão sobre aspectos da cultura brasileira através do discurso cinematográfico. Realizar recortes no imaginário produzido/refletido na produção cinematográfica, visando compreender suas relações com os processos histórico, social e político. Através dos filmes, explorar as questões que envolvem os conceitos de nacional e de popular nas representações audiovisuais. Discutir as relações entre cultura de massa e sociedade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6146B9',
			obligatory: false
		},
		'CS011': {
			code: 'CS011',
			name: 'Tópicos Especiais em Fotografia',
			ementa: 'Propiciar abordagens de temáticas e de gêneros diferenciados em relação à fotografia. A questão autoral na fotografia; apresentação do trabalho de fotógrafos referenciais no conjunto da expressão fotográfica. Estudo do conjunto do trabalho de um fotógrafo ou de uma época específica da História da Fotografia. Aprofundamento técnico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102', 'CS104'],
			color: '#808580',
			obligatory: false
		},
		'CS012': {
			code: 'CS012',
			name: 'Tópicos Especiais em Cinema',
			ementa: 'Propiciar abordagens de temáticas e de gêneros diferenciados em relação ao cinema; discussão e interpretação de filmografias fundamentais neste audiovisual. Dedica-se a estudos de obras tanto quanto à realização de produtos cinematográficos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS401', 'CS404'],
			color: '#B95B50',
			obligatory: false
		},
		'CS013': {
			code: 'CS013',
			name: 'Tópicos Especiais em Cinema Brasileiro',
			ementa: 'Propiciar a reflexão sobre aspectos da cultura brasileira através do discurso cinematográfico. Realizar recortes na produção cinematográfica, visando compreender suas relações com os processos históricos e sociais. Através dos filmes, explorar as questões que envolvem os conceitos sociais e do campo simbólico nas representações audiovisuais. Discutir as relações entre cultura de massa e sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS500'],
			color: '#46B990',
			obligatory: false
		},
		'CS014': {
			code: 'CS014',
			name: 'Tópicos Especiais em Internet/Multimídia',
			ementa: 'Desenvolvimento de produtos para ambientes virtuais na Web. Integração das mídias e suas possíveis convergências. Desenvolvimento dos aplicativos de multimídia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS403', 'CS503'],
			color: '#75B946',
			obligatory: false
		},
		'CS015': {
			code: 'CS015',
			name: 'Tópicos Especiais em Midialogia I',
			ementa: 'Analisar situações de configuração contemporânea das redes de comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B95E',
			obligatory: false
		},
		'CS017': {
			code: 'CS017',
			name: 'Projeto de Iniciação Científica',
			ementa: 'Destina-se ao desenvolvimento de projeto de Iniciação Científica.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:7, D:0, HS:8, SL:1, C:8},
			requisitos: ['AA200'],
			color: '#B96546',
			obligatory: false
		},
		'CS018': {
			code: 'CS018',
			name: 'Arte e Tecnologia',
			ementa: 'Nesta disciplina pretende-se traçar um panorama e fazer uma reflexão sobre as diferentes utilizações e manifestações artísticas possibilitadas pelas novas mídias audiovisuais.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4690B9',
			obligatory: false
		},
		'CS020': {
			code: 'CS020',
			name: 'Tópicos Especiais em Midialogia IV',
			ementa: 'Analisar situações de configuração contemporânea das redes de comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8A46B9',
			obligatory: false
		},
		'CS025': {
			code: 'CS025',
			name: 'Oficina de Produção Audiovisual',
			ementa: 'Gestão das demandas operacionais e financeiras do produto audiovisual.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4686B9',
			obligatory: false
		},
		'CS026': {
			code: 'CS026',
			name: 'Oficina de Direção de Fotografia',
			ementa: 'Projeto e realização da produção fotográfica dentro da obra audiovisual.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#467CB9',
			obligatory: false
		},
		'CS027': {
			code: 'CS027',
			name: 'Oficina de Direção de Arte',
			ementa: 'Disciplina oferecida de par com um projeto integrado. Projeto e realização de todos os elementos visuais da obra audiovisual.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99746',
			obligatory: false
		},
		'CS028': {
			code: 'CS028',
			name: 'Tópicos Especiais em Midialogia III',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#469BB9',
			obligatory: false
		},
		'CS029': {
			code: 'CS029',
			name: 'Tópicos Especiais em Midialogia V',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AA200'],
			color: '#B9468D',
			obligatory: false
		},
		'CS030': {
			code: 'CS030',
			name: 'Estudos Dirigidos II',
			ementa: 'Conjunto de leituras, atividades e orientação correlato aos projetos de pesquisa em andamento, propostos pelos professores do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98346',
			obligatory: false
		},
		'CS031': {
			code: 'CS031',
			name: 'Estudos Dirigidos I',
			ementa: 'Conjunto de leituras, atividades e orientações correlato aos projetos de pesquisa em andamento, propostas pelos professores do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7546B9',
			obligatory: false
		},
		'CS032': {
			code: 'CS032',
			name: 'Monitoria',
			ementa: 'Trabalho de Monitoria para auxiliar o docente responsável pela disciplina CS, na orientação de atividades didáticas, exercícios práticos e/ou em laboratório, leituras, seminários, pesquisas.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:1, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA200'],
			color: '#80B946',
			obligatory: false
		},
		'CS033': {
			code: 'CS033',
			name: 'Difusão Cultural e Tecnológica em Midialogia',
			ementa: 'Seminários e/ou Palestras sobre temas culturais, conceituais, tecnológicos relativos à área das Mídias Audiovisuais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4DB946',
			obligatory: false
		},
		'CS034': {
			code: 'CS034',
			name: 'Tópicos Especiais em Midialogia VI',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95046',
			obligatory: false
		},
		'CS035': {
			code: 'CS035',
			name: 'Tópicos Especiais em Midialogia VII',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46AFB9',
			obligatory: false
		},
		'CS036': {
			code: 'CS036',
			name: 'Tópicos Especiais em Midialogia VIII',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466F',
			obligatory: false
		},
		'CS037': {
			code: 'CS037',
			name: 'Tópicos Especiais em Midialogia IX',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'CS038': {
			code: 'CS038',
			name: 'Tópicos Especiais em Midialogia X',
			ementa: 'Esta disciplina terá seu programa definido em função das pesquisas que se realizam no Departamento de Multimeios, Mídia e Comunicação e das discussões prévias entre alunos e professores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4D46B9',
			obligatory: false
		},
		'CS041': {
			code: 'CS041',
			name: 'Projeto de Cinema I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B986',
			obligatory: false
		},
		'CS042': {
			code: 'CS042',
			name: 'Projeto de Cinema II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#5746B9',
			obligatory: false
		},
		'CS043': {
			code: 'CS043',
			name: 'Projetos Especiais',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:6, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B94A',
			obligatory: false
		},
		'CS044': {
			code: 'CS044',
			name: 'Projeto em Produção Sonora I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#6B46B9',
			obligatory: false
		},
		'CS045': {
			code: 'CS045',
			name: 'Projeto em Produção Sonora II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham individualmelte as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção; conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B946AB',
			obligatory: false
		},
		'CS046': {
			code: 'CS046',
			name: 'Projeto em TV e Vídeo I',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção, pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizadas no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#61B946',
			obligatory: false
		},
		'CS047': {
			code: 'CS047',
			name: 'Projeto em TV e Vídeo II',
			ementa: 'Disciplina de caráter experimental. Os alunos formam equipes de trabalho e/ou desempenham, individualmente as funções de cada projeto. O curso possibilita vivência em um processo de criação nesta área - pré-produção, produção e pós-produção, conhecimento técnico e de planejamentos administrativo, econômico e executivo. Seu programa é definido em função das pesquisas realizads no DMM/IA e/ou discussões entre alunos e professores.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B95A46',
			obligatory: false
		},
		'CS050': {
			code: 'CS050',
			name: 'Teledramaturgia',
			ementa: 'A televisão em sua dinâmica de programação necessita de um leque grande de formatos televisivos. Desde muito cedo a televisão incorporou e se adaptou as mais diversas artes e mídias narrativas: a literatura, o rádio, o cinema, o folhetim. Aos poucos desenvolveu determinados formatos de características ficcionais em sua grade de programação. A disciplina discute o papel da produção ficcional na televisão, à disposição do público.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS302'],
			color: '#46A5B9',
			obligatory: false
		},
		'CS052': {
			code: 'CS052',
			name: 'Fotografia II',
			ementa: 'Desenvolve noções de técnicas fotográficas avançadas. Discussões e experimentações com suportes fotográficos: suportes tradicionais, produção de suportes, roteiro e narrativas fotográficas. Fotografia e arte contemporânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102', 'CS104'],
			color: '#808580',
			obligatory: false
		},
		'CS053': {
			code: 'CS053',
			name: 'Mídia e Documentário',
			ementa: 'Abordagem teórica e histórica sobre o desenvolvimento do filme documentário, nos contextos mundial e nacional. As fases e modalidades do documentário. O documentário e a ideia de vanguarda. A institucionalização do documentário. As revoluções do Cinema Direto e Cinema Verdade. O documentário no contexto do cinema moderno. Autoria e documentário. O documentário e a televisão. O papel do vídeo na linguagem e nas apropriações contemporâneas do formato. O documentário e as mídias digitais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9EB946',
			obligatory: false
		},
		'CS055': {
			code: 'CS055',
			name: 'Poéticas da Imagem',
			ementa: 'O poético e a imagem planar; recodificação e intertextualidade; o projeto criativo e a imagem-máquina. Teorias da imagem: modernidade e pós-modernidade. Processos de produção de imagens técnicas e digitais. Visionamento e interpretação de imagens.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9446B9',
			obligatory: false
		},
		'CS056': {
			code: 'CS056',
			name: 'RTVC',
			ementa: 'O entendimento, a análise, a reflexão e a prática de três meios audiovisuais: rádio, televisão e cinema. As etapas de concepção e realização: ideia, pesquisa, roteiro, pré-produção, produção e pós-produção. A inter-relação e a interpenetração dos meios.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS301', 'CS302'],
			color: '#4FAF80',
			obligatory: false
		},
		'CS057': {
			code: 'CS057',
			name: 'Marketing e Propaganda',
			ementa: 'Introdução geral aos conceitos de Marketing e de Publicidade e Propaganda. Breve diacronia da publicidade no contexto da estética da mercadoria. A propaganda no Marketing Mix. Linguagem publicitária e tecnologia da comunicação. Organograma de uma agência publicitária e o fluxograma de um anúncio. Conceito e aplicação de mídia e veiculação publicitária. Consumidor, consumo e consumismo. Criação e criatividade em propaganda e marketing. O processo de produção em publicidade: do briefing à veiculação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4654B9',
			obligatory: false
		},
		'CS058': {
			code: 'CS058',
			name: 'Tendências de Telecomunicação',
			ementa: 'Discussão das tendências de telecomunicação na área de comunicação, pensamento a convergência dos meios.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#94B946',
			obligatory: false
		},
		'CS700': {
			code: 'CS700',
			name: 'Estágio Supervisionado em Produção Sonora',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de produção sonora.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#46B97C',
			obligatory: false
		},
		'CS701': {
			code: 'CS701',
			name: 'Estágio Supervisionado em Produção Sonora II',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de produção sonora.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#4672B9',
			obligatory: false
		},
		'CS702': {
			code: 'CS702',
			name: 'Estágio Supervisionado em Fotografia',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de fotografia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#B9B646',
			obligatory: false
		},
		'CS703': {
			code: 'CS703',
			name: 'Estágio Supervisionado em Fotografia II',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de fotografia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#46B9B9',
			obligatory: false
		},
		'CS704': {
			code: 'CS704',
			name: 'Estágio Supervisionado em Cinema',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de cinema.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#46B972',
			obligatory: false
		},
		'CS705': {
			code: 'CS705',
			name: 'Estágio Supervisionado em Cinema II',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de cinema.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#B946B6',
			obligatory: false
		},
		'CS706': {
			code: 'CS706',
			name: 'Estágio Supervisionado em Televisão/Vídeo',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de Televisão/Vídeo.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#46B99B',
			obligatory: false
		},
		'CS707': {
			code: 'CS707',
			name: 'Estágio Supervisionado em Televisão/Vídeo II',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de Televisão/Vídeo.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#46B968',
			obligatory: false
		},
		'CS708': {
			code: 'CS708',
			name: 'Estágio Supervisionado em Internet/Multimídia I',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de Internet/Multimídia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#6BB946',
			obligatory: false
		},
		'CS709': {
			code: 'CS709',
			name: 'Estágio Supervisionado em Internet/Multimídia II',
			ementa: 'Estágio supervisionado a ser cumprido por graduandos em Comunicação Social na área de Internet/Multimídia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#B246B9',
			obligatory: false
		},
		'CS800': {
			code: 'CS800',
			name: 'Estágio Supervisionado em Midialogia I',
			ementa: 'Estágio supervisionado a ser cumprido pelo graduando em Comunicação Social na área de produção e/ou crítica cultural.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AA200'],
			color: '#9E46B9',
			obligatory: false
		},
		'CS801': {
			code: 'CS801',
			name: 'Estágio Supervisionado em Midialogia II',
			ementa: 'Estágio supervisionado a ser cumprido pelo graduando em Comunicação Social na área de produção e/ou crítica cultural.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:10, D:0, HS:12, SL:2, C:12},
			requisitos: ['AA200'],
			color: '#B94665',
			obligatory: false
		}
	}
};

export default catalogue;
