const catalogue = {
	totalCredits: 117,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BG091', 'EF091', 'GM091', 'LA081', 'LA091', 'MA091', 'QG191', 'TL106']
		},
		'sem-2': {
			id: '2',
			subjects: ['BF092', 'EN092', 'FI092', 'HH092', 'LA082', 'LA092', 'MA092']
		},
		'sem-3': {
			id: '3',
			subjects: ['CS093', 'GT001', 'LA093', 'MD163', 'ME093', 'PF093', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['CV043', 'EP094', 'LA094', 'MC001', 'PF094', 'PF095', 'PF096', 'ELET04']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'BG091': {
			code: 'BG091',
			name: 'Evolução',
			ementa: 'Abordagem histórica: as ideias sobre biologia, dos gregos clássicos a Darwin; \"A Origem das Espécies\" de C. Darwin: a abrangência e os impactos da obra em diferentes áreas; Evidências do processo evolutivo: paleontologia, anatomia comparada, embriologia, genética, bioquímica, distribuição geográfica; A síntese evolutiva; Genética de populações - teorema de Hardy-Weinberg; Processos micro e macroevolutivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8C40D9',
			obligatory: true
		},
		'EF091': {
			code: 'EF091',
			name: 'Atividade Física, Promoção da Saúde e Qualidade de Vida',
			ementa: 'Estudam-se os conceitos e as estratégias de promoção da saúde com a valorização da alimentação, atividade física e do relacionamento social visando a capacidade para a vida plena, a competência funcional e a qualidade de vida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96640',
			obligatory: true
		},
		'GM091': {
			code: 'GM091',
			name: 'Planeta Terra',
			ementa: 'A disciplina é ideia integrada das transformações terrestres e entendimento da Terra como sistema. As esferas materiais terrestres e as suas inter-relações: atmosfera, hidrosfera, crosta terrestre, manto, núcleo, biosfera e noosfera. O tempo geológico. A disciplina abrange a natureza do conhecimento e os processos geológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D9',
			obligatory: true
		},
		'LA081': {
			code: 'LA081',
			name: 'Leitura e Produção de Texto I',
			ementa: 'Leitura e produção de textos dissertativos, com ênfase nos aspectos argumentativos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9408C',
			obligatory: true
		},
		'LA091': {
			code: 'LA091',
			name: 'Língua Inglesa I',
			ementa: 'Considerando-se as propostas oficiais para o ensino da língua inglesa, no âmbito do ensino médio e buscando articulá-las e expandi-las às especificidades do campo universitário, o curso tem como objetivo central introduzir o ensino da língua inglesa nesse contexto, ampliando-se o escopo para além dos objetivos gramaticais e estritamente instrumentais do idioma e focalizando-se o desenvolvimento linguístico, cultural e educacional do aluno.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#8CD940',
			obligatory: true
		},
		'MA091': {
			code: 'MA091',
			name: 'Matemática Básica',
			ementa: 'Conjuntos de números (naturais, inteiros, racionais, reais e complexos), sequências reais. Estudo elementar de funções reais: gráficos, operações com funções, tipos de funções. Funções trigonométricas: definições, gráficos. Função exponencial e função logarítmica. Polinômios: raízes. Sequências reais. Progressões. Noções de limite e continuidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'QG191': {
			code: 'QG191',
			name: 'Química',
			ementa: 'Fórmulas e equações químicas. Classificações períodicas e propriedades dos elementos. Noções de físico-química, termoquímica, equilíbrio químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D966',
			obligatory: true
		},
		'TL106': {
			code: 'TL106',
			name: 'Textos Fundamentais de Literatura',
			ementa: 'Leitura de textos básicos da literatura (ficção, poesia e teatro), selecionados de modo a construir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4066D9',
			obligatory: true
		},
		'BF092': {
			code: 'BF092',
			name: 'O Corpo Humano',
			ementa: 'Estudo da estrutura e função do organismo humano. Inter-relação entre os sistemas nervoso, cardíaco, respiratório, renal, digestório e endócrino, proporcionando conhecimento dos processos básicos das relações do corpo humano em relação ao ambiente.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'EN092': {
			code: 'EN092',
			name: 'Primeiros Socorros',
			ementa: 'Ensino teórico-prático de cuidados básicos em situações de urgência e emergência que acontecem em lugares públicos e domicílios. Subsídios teóricos básicos que possibilitem o encaminhamento adequado de vítimas dessas situações.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D9B340',
			obligatory: true
		},
		'FI092': {
			code: 'FI092',
			name: 'Física',
			ementa: 'Força e máquinas simples, locomoção, dinâmica, líquidos, sólidos, e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#408CD9',
			obligatory: true
		},
		'HH092': {
			code: 'HH092',
			name: 'Introdução à História',
			ementa: 'Apresentação geral da história como ambiente de produção de conhecimento específico e polêmico.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'LA082': {
			code: 'LA082',
			name: 'Leitura e Produção de Texto II',
			ementa: 'Leitura e produção de textos ensaísticos ou monográficos com ênfase nos aspectos argumentativos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA081'],
			color: '#D9408C',
			obligatory: true
		},
		'LA092': {
			code: 'LA092',
			name: 'Língua Inglesa II',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser/> </w:WordDocument> </xml><![endif]-->Considerando-se as propostas oficiais para o ensino da língua inglesa no âmbito do ensino médio e buscando articulá-las e expandi-las às especificidades do campo universitário, o curso tem como objetivo central ampliar o ensino da língua inglesa nesse contexto, ampliando-se o escopo para além dos objetivos gramaticais e estritamente instrumentais do idioma e focalizando-se o desenvolvimento linguístico, cultural e educacional do aluno.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['LA091'],
			color: '#8CD940',
			obligatory: true
		},
		'MA092': {
			code: 'MA092',
			name: 'Geometria Plana e Analítica',
			ementa: 'Tratamento axiomático da geometria euclidiana plana. Distância, norma e ângulo. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Introdução às geometrias não euclidianas. Tópicos da história da geometria.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D98C40',
			obligatory: true
		},
		'CS093': {
			code: 'CS093',
			name: 'Comunicação, Arte, Cultura e Sociedade',
			ementa: 'Estudo das relações entre os meios audiovisuais, a cultura de massa e a arte, notando de que maneiras tais relações redimensionam historicamente o imaginário social entre os séculos XIX e XXI, nos contextos nacional e internacional. Estudo dos meios audiovisuais, por intermédio da produção, difusão, reapropriação, interpretação e ressignificação das imagens na sociedade, na passagem do analógico para o digital, e a formação de uma cultura de convergência.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D94066',
			obligatory: true
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D9D940',
			obligatory: true
		},
		'LA093': {
			code: 'LA093',
			name: 'Língua Inglesa III',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser/> </w:WordDocument> </xml><![endif]-->Considerando-se as propostas oficiais para o ensino da língua inglesa no âmbito do ensino médio e buscando articulá-las e expandi-las às especificidades do campo universitário, o curso tem como objetivo central expandir o ensino da língua inglesa nesse contexto, ampliando-se o escopo para além dos objetivos gramaticais e estritamente instrumentais do idioma e focalizando-se o desenvolvimento linguístico, cultural e educacional do aluno.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['LA092'],
			color: '#8CD940',
			obligatory: true
		},
		'MD163': {
			code: 'MD163',
			name: 'Ética e Bioética I',
			ementa: 'Introdução aos conceitos básicos da Ética e suas articulações na sociedade a partir da análise de situações concretas que permitam enfatizar o estudo da posição dos direitos humanos na sociedade brasileira e no contexto internacional. Abordagem filosófica sobre educação, cultura e valores. Globalização e desenvolvimento. Estudo das raízes socioculturais da violência. Espiritualidade e religiosidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B3',
			obligatory: true
		},
		'ME093': {
			code: 'ME093',
			name: 'Introdução à Estatística',
			ementa: 'Introdução à metodologia científica. Conceito de empirismo. Estatística descritiva. Probabilidade. Variáveis aleatórias. Inferência estatística. Atividades de laboratório relacionadas aos conceitos básicos de estatística.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#6640D9',
			obligatory: true
		},
		'PF093': {
			code: 'PF093',
			name: 'Introdução à Prática de Ciências e Artes I',
			ementa: 'Inserção do aluno no cotidiano do processo criativo e no trabalho de um laboratório ou de atividade de arte. Desenvolvimento de um projeto de iniciação científica. Apresentação de um trabalho em um evento acadêmico',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#B3D940',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CV043': {
			code: 'CV043',
			name: 'Engenharia do Ambiente',
			ementa: 'Ambiente: atmosfera e recursos hídricos; Poluição das águas, ar, solo; Impactos ambientais; Alterações climáticas; Gerenciamento de resíduos; Processos de tratamento de resíduos e de recuperação do ambiente; Legislação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B3',
			obligatory: true
		},
		'EP094': {
			code: 'EP094',
			name: 'Juventudes, Cidadania e Psicologia',
			ementa: 'Discute-se as questões que afetam os jovens na sociedade brasileira, como a constituição das subjetividades e das diferenças, as novas sociabilidades, o papel da mídia, a escolha das universidades e suas representações e os impasses dos jovens diante dos obstáculos à condução da construção da cidadania. A partir das contribuições da psicologia, propõe-se promover processos reflexivos e expressivos dos alunos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#66D940',
			obligatory: true
		},
		'LA094': {
			code: 'LA094',
			name: 'Língua Inglesa IV',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser/> </w:WordDocument> </xml><![endif]-->Considerando-se as propostas oficiais para o ensino da língua inglesa no âmbito do ensino médio e buscando articulá-las e expandi-las às especificidades do campo universitário, o curso tem como objetivo central consolidar o ensino da língua inglesa nesse contexto, ampliando-se o escopo para além dos objetivos gramaticais e estritamente instrumentais do idioma e focalizando-se o desenvolvimento linguístico, cultural e educacional do aluno.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['LA093'],
			color: '#8CD940',
			obligatory: true
		},
		'MC001': {
			code: 'MC001',
			name: 'Tecnologias da Informação',
			ementa: 'Organizações de dados, organizações de computadores, estruturas de programas, fundamentos de bancos de dados, noções de redes, internet, interface ser humano-computadores, impacto social da computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B340D9',
			obligatory: true
		},
		'PF094': {
			code: 'PF094',
			name: 'Introdução à Prática de Ciências e Artes II',
			ementa: 'Inserção do aluno no cotidiano do processo criativo e no trabalho de um laboratório ou de atividade de arte. Desenvolvimento de um projeto de iniciação científica. Apresentação de um trabalho em um evento acadêmico',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'PF095': {
			code: 'PF095',
			name: 'As Profissões',
			ementa: 'Seminários sobre as atividades e campos de atuação das profissões associadas aos cursos de graduação oferecidos pela UNICAMP.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D98C',
			obligatory: true
		},
		'PF096': {
			code: 'PF096',
			name: 'Introdução à Economia',
			ementa: 'A economia de mercado, origens e destino da produção. A circulação numa economia de mercado. As relações econômicas internacionais. O setor público. O sistema financeiro. A unidade produtora, sua inserção no sistema. Repartição e apropriação do produto social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40B3D9',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		}
	}
};

export default catalogue;
