const catalogue = {
	totalCredits: 182,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CS100', 'CS101', 'CS102', 'CS103', 'CS104', 'CS105', 'MC001']
		},
		'sem-2': {
			id: '2',
			subjects: ['CS200', 'CS201', 'CS202', 'CS203', 'CS204', 'CS205']
		},
		'sem-3': {
			id: '3',
			subjects: ['CS300', 'CS301', 'CS302', 'CS303', 'CS304', 'CS305', 'CS306']
		},
		'sem-4': {
			id: '4',
			subjects: ['CS400', 'CS401', 'CS402', 'CS403', 'CS404', 'CS405', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['CS039', 'CS040', 'CS500', 'CS502', 'CS503', 'ELET05']
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
			color: '#7740D9'
		},
		'CS101': {
			code: 'CS101',
			name: 'Métodos e Técnicas de Pesquisa em Midialogia',
			ementa: 'A disciplina tem como objetivos discutir e realizar trabalhos práticos sobre os seguintes assuntos: método científico e técnicas de pesquisa, pesquisa científica, normas da ABNT, a linguagem científica, monografias, artigos, relatórios, realização de projetos e método científico aplicado ao campo da comunicação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4E40D9'
		},
		'CS102': {
			code: 'CS102',
			name: 'Fotografia I',
			ementa: 'Introdução aos conceitos da técnica e da linguagem fotográfica. História da fotografia: a fotografia como arte e como comunicação. Desenvolvimento da criatividade fotográfica, produção e elaboração de um portfólio.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94069'
		},
		'CS103': {
			code: 'CS103',
			name: 'Teorias da Comunicação',
			ementa: 'Apresenta as diversas correntes interpretativas e teóricas a propósito dos meios de comunicação e da comunicação social. Enfatiza-se também sua construção histórica e social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AF'
		},
		'CS104': {
			code: 'CS104',
			name: 'História da Fotografia',
			ementa: 'Abordagem das múltiplas e simultâneas ações que resultaram nas descobertas fotográficas. O surgimento da fotografia. Os diferentes suportes e processos fotográficos e suas implicações estéticas. A fotografia no Brasil. Os principais fotógrafos do século XIX e do século XX que contribuíram para o desenvolvimento da técnica e novas formas de expressão fotográfica. A história da fotografia vista do ponto de vista autoral.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#77D940'
		},
		'CS105': {
			code: 'CS105',
			name: 'Elementos Fundamentais de Matemática',
			ementa: 'Fundamentos matemáticos voltados para aplicação na área de comunicação e tecnologia da informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940BD'
		},
		'MC001': {
			code: 'MC001',
			name: 'Tecnologias da Informação',
			ementa: 'Organizações de dados, organizações de computadores, estruturas de programas, fundamentos de bancos de dados, noções de redes, internet, interface ser humano-computadores, impacto social da computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94093'
		},
		'CS200': {
			code: 'CS200',
			name: 'Captação e Edição de Áudio',
			ementa: 'Conceituação de microfones, mesas de som, gravadores e editores digitais de áudio, e suas técnicas de utilização. Recursos técnicos e estéticos oferecidos por esses equipamentos na criação sonora e musical.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#A140D9'
		},
		'CS201': {
			code: 'CS201',
			name: 'Teorias do Signo',
			ementa: 'Breve diacronia das ciências da linguagem. Da linguística à semiologia: aproximação dualista da linguagem e da comunicação. Pierce: as bases da semiótica filosófica. O projeto semiológico de Barthes e a rentabilidade da leitura. Contribuições de Eco à semiótica e à comunicação. Greimas e a aproximação à semiótica pós-estruturalista. Bakhtin e a leitura da ideologia. Bases da semiótica da comunicação: a construção da semiose e a leitura de discursos. Estudo de narrativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'CS202': {
			code: 'CS202',
			name: 'Antropologia da Imagem',
			ementa: 'Fundamentos metodológicos do uso da fotografia e do cinema na pesquisa antropológica. Origens e precursores. O visualismo nas Ciências Humanas. Narrativas fotográficas e cinematográficas na Antropologia. Significação e contexto social das imagens técnicas. Construções sociais imagéticas: significações e usos sociais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#CB40D9'
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
			color: '#D94040'
		},
		'CS205': {
			code: 'CS205',
			name: 'Tecnologias da Informação e da Comunicação',
			ementa: 'E-learning, e-comerce e bancos de dados voltados para essas aplicações. Tendências de tecnologia voltadas para a produção de sistemas computacionais que convergem as diferentes mídias. Introdução à computação gráfica.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40AFD9'
		},
		'CS300': {
			code: 'CS300',
			name: 'Recursos Eletrônicos Aplicados à Produção Sonora',
			ementa: 'Histórico das tecnologias aplicadas à produção sonora. Conceituação de equipamentos e evolução dos mesmos. Técnicas de gravação analógicas e digitais. Masterização e remasterização. Utilização dos recursos informatizados na produção sonora. Fornecer ao aluno ferramentas teóricas e práticas que habilitem a manipular tanto os recursos analógicos quanto os recursos digitais aplicados à produção sonora.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS200'],
			color: ''
		},
		'CS301': {
			code: 'CS301',
			name: 'História do Rádio',
			ementa: 'Estudo sobre o desenvolvimento do rádio, do ponto de vista da tecnologia, das relações socioeconômicas e políticas, da linguagem, dos gêneros e da recepção. O enfoque histórico se alia ao teórico, por meio da reflexão a partir de textos-chave, investigando o meio desde seu surgimento, passando pelo \"Período de Ouro\", até seu papel de coadjuvante pós-televisão. A disciplina dialoga com as mídias - cinema, televisão e novas mídias - e busca inserir o rádio numa discussão sobre a cultura audiovisual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96940'
		},
		'CS302': {
			code: 'CS302',
			name: 'História da TV e do Vídeo',
			ementa: 'Estudo dos processos de desenvolvimento da televisão, nos contextos mundial e nacional. A disciplina busca compreender a história da televisão do ponto de vista da evolução tecnológica, dos aspectos relativos à linguagem, em suas singularidades e convergências, e de questões de gênero e de recepção. A abordagem do meio contempla também uma visão sobre os determinantes econômicos, sociais e políticos no desenvolvimento da televisão e, por fim, busca estabelecer as diretrizes do papel da TV na definição de uma cultura audiovisual.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4085D9'
		},
		'CS303': {
			code: 'CS303',
			name: 'Edição de Produtos Audiovisuais',
			ementa: 'A edição é uma das etapas principais na produção do sentido na produção audiovisual, e sua realização implica em uma análise minuciosa de todo material de imagem e som que deverá compor o produto final. É o momento final da criação, quando se determina a articulação das imagens, entre elas e sua relação com o som. Objetiva fornecer um instrumental, técnico e crítico para a concepção e realização dos procedimentos editoriais. Enfoca as questões de produção de sentido nos diversos meios de comunicação.',
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
			color: '#D9BD40'
		},
		'CS305': {
			code: 'CS305',
			name: 'Redes Convergentes',
			ementa: 'A convergência entre o telefone, a televisão e o computador. Fundamentos tecnológicos da convergência. Fundamentos políticos e mercadológicos na área de telecomunicações. Novos paradigmas de comunicação. O contexto brasileiro e educacional. Tendências contemporâneas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS205'],
			color: ''
		},
		'CS306': {
			code: 'CS306',
			name: 'Fotografia Digital',
			ementa: 'Introdução e conceitos gerais sobre a Imagem Digital. As razões para utilização da Fotografia Digital. Processos de Captação de Imagens. Processos de manipulação de Imagens (utilização do Adobe Photoshop). A câmara clara digital. A geração do produto final para imagens digitalizadas. Análise Comparativa e utilização do hardware existente. A evolução dos equipamentos digitais. A linguagem Fotográfica Digital. O novo olhar fotográfico. Estudos e trabalhos de campo e laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: ''
		},
		'CS400': {
			code: 'CS400',
			name: 'Computação Gráfica',
			ementa: 'Conceitos básicos de produção em Computação Gráfica voltada à realização de material audiovisual.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#4ED940'
		},
		'CS401': {
			code: 'CS401',
			name: 'Teoria do Cinema',
			ementa: 'O desenvolvimento do cinema ao longo de mais de um século se fez acompanhar de teorias originais ou derivadas de outros movimentos artísticos. Hoje a teoria do cinema possui uma história sólida cujo conhecimento se tornou básico para o estudo dos meios audiovisuais. O curso aborda alguns dos principais momentos da reflexão teórica em cinema.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D95C'
		},
		'CS402': {
			code: 'CS402',
			name: 'Fotografia e Movimento',
			ementa: 'A aplicação da fotografia em cinema, vídeo e outros meios que se utilizam da imagem em movimento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS102'],
			color: ''
		},
		'CS403': {
			code: 'CS403',
			name: 'Multimídia',
			ementa: 'Compreensão da integração das mídias e suas possíveis convergências. Fundamentação voltada ao desenvolvimento dos aplicativos de multimídia. Análise e discussão das concepções de hipermídia. Avaliação das implicações cognitivas e no campo do conhecimento dessas tecnologias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS305'],
			color: ''
		},
		'CS404': {
			code: 'CS404',
			name: 'História do Cinema II',
			ementa: 'A disciplina apresenta um panorama abrangente da história do cinema, do Pós-Guerra em diante com a irrupção e estabelecimento do cinema moderno até o cinema contemporâneo. O método inclui o estudo de escolas e gêneros, análises de filmes e reflexões sobre a forma, o texto e o contexto de produção, bem como a inter-relação entre filme e outras artes e mídias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D985'
		},
		'CS405': {
			code: 'CS405',
			name: 'Educação e Tecnologia',
			ementa: 'Pretende-se usar, analisar e discutir diferentes softwares usados na Educação, tendo como referencial teórico as abordagens sócio-interacionista de aprendizagem. Os objetivos são discutir as principais teorias sobre o que significa aprender, e explorar como os diferentes usos das Tecnologias da Informação podem contribuir no processo de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#CBD940'
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: ''
		},
		'CS039': {
			code: 'CS039',
			name: 'Oficina de Roteiro I',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#405CD9'
		},
		'CS040': {
			code: 'CS040',
			name: 'Oficina de Roteiro II',
			ementa: 'Oferecer noções teóricas, técnicas e artísticas que capacitem à elaboração de textos (argumentos, roteiros, estruturas dramáticas) para meios audiovisuais. Desenvolver a imaginação com disciplina técnica. Exercícios práticos. Desenvolvimento de projetos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A1D940'
		},
		'CS500': {
			code: 'CS500',
			name: 'História do Cinema Brasileiro',
			ementa: 'Proporcionar uma visão de conjunto da história da produção cinematográfica brasileira, destacando os principais momentos, as obras e os realizadores. Refletir sobre as propostas estéticas e econômicas, situando-as no processo histórico, social e político. Discutir as relações entre o cinema e as culturas do Brasil.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99340'
		},
		'CS502': {
			code: 'CS502',
			name: 'História Social da Cultura',
			ementa: 'Analisar as configurações e funcionamentos das imagens e mídias audiovisuais nos séculos XIX - XXI, percebendo seus sentidos políticos e suas elaborações conceituais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS100'],
			color: ''
		},
		'CS503': {
			code: 'CS503',
			name: 'Web/Internet',
			ementa: 'Conceituação técnica e a terminologia utilizada no desenvolvimento de produtos voltados para Web Internet. Discussão sobre a estética nos produtos desenvolvidos para Web Internet, bem como a eficiência dos mesmos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CS305'],
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
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:18},
			requisitos: '',
			color: ''
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
