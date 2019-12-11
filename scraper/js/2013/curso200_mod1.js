const catalogue = {
	totalCredits: 117,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['TL106', 'QG191', 'LA091', 'EF091', 'BG091', 'LA083', 'GM091', 'MA091']
		},
		'sem-2': {
			id: '2',
			subjects: ['FI092', 'MA092', 'LA092', 'EN092', 'BF092', 'LA084', 'HH092']
		},
		'sem-3': {
			id: '3',
			subjects: ['MD163', 'PF093', 'LA093', 'GT001', 'ME093', 'ELET03', 'CS093']
		},
		'sem-4': {
			id: '4',
			subjects: ['PF094', 'PF096', 'LA094', 'CV043', 'MC001', 'PF095', 'EP094', 'ELET04']
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
			color: '#B94680',
			obligatory: true
		},
		'EF091': {
			code: 'EF091',
			name: 'Atividade Física, Promoção da Saúde e Qualidade de Vida',
			ementa: 'Estudam-se os conceitos e as estratégias de promoção da saúde com a valorização da alimentação, atividade física e do relacionamento social visando a capacidade para a vida plena, a competência funcional e a qualidade de vida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6346B9',
			obligatory: true
		},
		'GM091': {
			code: 'GM091',
			name: 'Planeta Terra',
			ementa: 'A disciplina pretende fornecer uma ideia integrada das transformações terrestres e do entendimento sistêmico da Terra. Trata das esferas materiais terrestres e das suas inter-relações: atmosfera, hidrosfera, crosta terrestre, manto, núcleo, biosfera e noosfera. Inclui tempo geológico. A disciplina abrange a natureza do conhecimento e os processos geológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9C46B9',
			obligatory: true
		},
		'LA083': {
			code: 'LA083',
			name: 'Leitura e Produção de Textos Acadêmicos I',
			ementa: 'Introdução à leitura de gêneros prestigiados na esfera acadêmica, em suas diferentes áreas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469CB9',
			obligatory: true
		},
		'LA091': {
			code: 'LA091',
			name: 'Língua Inglesa I',
			ementa: 'Expandindo as orientações curriculares do Ensino Médio às especificidades do campo universitário, a disciplina prioriza a sensibilização ao papel do inglês no mundo, focalizando o desenvolvimento linguístico-discursivo, sociocultural e educacional do aluno, por meio do trabalho de interpretação de texto como letramento crítico, voltado às bases discursivas e textuais de descrição, narração e expressão de opinião, envolvendo gêneros orais, escritos e multimodais das esferas do cotidiano, das artes musicais, do entretenimento, da divulgação científica, além da jornalística e publicitária.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'MA091': {
			code: 'MA091',
			name: 'Matemática Básica',
			ementa: 'Conjuntos de números (naturais, inteiros, racionais, reais e complexos), sequências reais. Estudo elementar de funções reais: gráficos, operações com funções, tipos de funções. Funções trigonométricas: definições, gráficos. Função exponencial e função logarítmica. Polinômios: raízes. Sequências reais. Progressões. Noções de limite e continuidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B98046',
			obligatory: true
		},
		'QG191': {
			code: 'QG191',
			name: 'Química',
			ementa: 'Fórmulas e equações químicas. Classificações períodicas e propriedades dos elementos. Noções de físico-química, termoquímica, equilíbrio químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#9CB946',
			obligatory: true
		},
		'TL106': {
			code: 'TL106',
			name: 'Textos Fundamentais de Literatura',
			ementa: 'Leitura de textos básicos da literatura (ficção, poesia e teatro), selecionados de modo a construir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#80B946',
			obligatory: true
		},
		'BF092': {
			code: 'BF092',
			name: 'O Corpo Humano',
			ementa: 'Estudo da estrutura e função do organismo humano. Inter-relação entre os sistemas nervoso, cardíaco, respiratório, renal, digestório e endócrino, proporcionando conhecimento dos processos básicos das relações do corpo humano em relação ao ambiente.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8046B9',
			obligatory: true
		},
		'EN092': {
			code: 'EN092',
			name: 'Primeiros Socorros',
			ementa: 'Ensino teórico-prático de cuidados básicos em situações de urgência e emergência que acontecem em lugares públicos e domicílios. Subsídios teóricos básicos que possibilitem o encaminhamento adequado de vítimas dessas situações.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B96346',
			obligatory: true
		},
		'FI092': {
			code: 'FI092',
			name: 'Física',
			ementa: 'Força e máquinas simples, locomoção, dinâmica, líquidos, sólidos, e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'HH092': {
			code: 'HH092',
			name: 'Introdução à História',
			ementa: 'Apresentação geral da história como ambiente de produção de conhecimento específico e polêmico.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B99C',
			obligatory: true
		},
		'LA084': {
			code: 'LA084',
			name: 'Leitura e Produção de Textos Acadêmicos II',
			ementa: 'Leitura e Produção de gêneros prestigiados na esfera acadêmica, em suas diferentes áreas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA083'],
			color: '#469CB9',
			obligatory: true
		},
		'LA092': {
			code: 'LA092',
			name: 'Língua Inglesa II',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser /> </w:WordDocument> </xml><![endif]-->Expandindo as orientações curriculares do Ensino Médio ao contexto universitário, a disciplina amplia conteúdo da LA091 nos domínios linguístico-discursivo, sociocultural e educacional e prioriza a reflexão sobre práticas no âmbito das redes sociais, das artes, do cinema e da música e sua relação com o inglês, através de prática de letramento crítico, articuladas às bases discursivas e textuais de descrição, narração, instrução e emissão de opinião, envolvendo gêneros orais, escritos e multimodais das esferas jornalísticas, acadêmica, das artes, do entretenimento e da divulgação científica.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['LA091'],
			color: '#46B9B9',
			obligatory: true
		},
		'MA092': {
			code: 'MA092',
			name: 'Geometria Plana e Analítica',
			ementa: 'Tratamento axiomático da geometria euclidiana plana. Distância, norma e ângulo. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Introdução às geometrias não euclidianas. Tópicos da história da geometria.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'CS093': {
			code: 'CS093',
			name: 'Comunicação, Arte, Cultura e Sociedade',
			ementa: 'Estudo das relações entre os meios audiovisuais, a cultura de massa e a arte, notando de que maneiras tais relações redimensionam historicamente o imaginário social entre os séculos XIX e XXI, nos contextos nacional e internacional. Estudo dos meios audiovisuais, por intermédio da produção, difusão, reapropriação, interpretação e ressignificação das imagens na sociedade, na passagem do analógico para o digital, e a formação de uma cultura de convergência.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B963',
			obligatory: true
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#B94663',
			obligatory: true
		},
		'LA093': {
			code: 'LA093',
			name: 'Língua Inglesa III',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser /> </w:WordDocument> </xml><![endif]-->Expandindo as orientações curriculares do Ensino Médios às especificidades da educação superior, a disciplina amplia conteúdos da LA092 nos domínios linguístico-discursivo, sociocultural e educacional e prioriza a reflexão sobre ciência, tecnologia e suas relações com a língua inglesa, aspectos identitários, vida acadêmica e mercado de trabalho, através de práticas de letramento digitais e críticos, articuladas às bases discursivas e textuais de descrição, narração e argumentação, envolvento gêneros orais, escritos e multimodais das esferas acadêmica, jornalística e da divulgação científica.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['LA092'],
			color: '#46B9B9',
			obligatory: true
		},
		'MD163': {
			code: 'MD163',
			name: 'Ética e Bioética I',
			ementa: 'Introdução aos conceitos básicos da Ética e suas articulações na sociedade a partir da análise de situações concretas que permitam enfatizar o estudo da posição dos direitos humanos na sociedade brasileira e no contexto internacional. Abordagem filosófica sobre educação, cultura e valores. Globalização e desenvolvimento. Estudo das raízes socioculturais da violência. Espiritualidade e religiosidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9B946',
			obligatory: true
		},
		'ME093': {
			code: 'ME093',
			name: 'Introdução à Estatística',
			ementa: 'Introdução à metodologia científica. Conceito de empirismo. Estatística descritiva. Probabilidade. Variáveis aleatórias. Inferência estatística. Atividades de laboratório relacionadas aos conceitos básicos de estatística.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B99C46',
			obligatory: true
		},
		'PF093': {
			code: 'PF093',
			name: 'Introdução à Prática de Ciências e Artes I',
			ementa: 'Inserção do aluno no cotidiano do processo criativo e no trabalho de um laboratório ou de atividade de arte. Desenvolvimento de um projeto de iniciação científica. Apresentação de um trabalho em um evento acadêmico',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#63B946',
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
			color: '#4680B9',
			obligatory: true
		},
		'EP094': {
			code: 'EP094',
			name: 'Juventudes, Cidadania e Psicologia',
			ementa: 'Discute-se as questões que afetam os jovens na sociedade brasileira, como a constituição das subjetividades e das diferenças, as novas sociabilidades, o papel da mídia, a escolha das universidades e suas representações e os impasses dos jovens diante dos obstáculos à condução da construção da cidadania. A partir das contribuições da psicologia, propõe-se promover processos reflexivos e expressivos dos alunos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#46B980',
			obligatory: true
		},
		'LA094': {
			code: 'LA094',
			name: 'Língua Inglesa IV',
			ementa: '<!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:HyphenationZone>21</w:HyphenationZone> <w:DoNotOptimizeForBrowser /> </w:WordDocument> </xml><![endif]-->Expandindo as orientações curriculares do Ensino Médio ao campo universitário, a disciplina amplia conteúdo da LA093 nos domínios linguístico-discursivo, sociocultural e educacional e prioriza a reflexão sobre ensino superior, pesquisa, cidadania ativa e suas relações com o inglês na sociedade globalizada, através de práticas de letramentos digitais e críticos, articuladas às bases discursivas e textuais de narração, expressão de opinião, argumentação, envolvendo gêneros orais, escritos e multimodais das esferas acadêmica, política, jornalística e da divulgação científica.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['LA093'],
			color: '#46B9B9',
			obligatory: true
		},
		'MC001': {
			code: 'MC001',
			name: 'Tecnologias da Informação',
			ementa: 'Organizações de dados, organizações de computadores, estruturas de programas, fundamentos de bancos de dados, noções de redes, internet, interface ser humano-computadores, impacto social da computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'PF094': {
			code: 'PF094',
			name: 'Introdução à Prática de Ciências e Artes II',
			ementa: 'Inserção do aluno no cotidiano do processo criativo e no trabalho de um laboratório ou de atividade de arte. Desenvolvimento de um projeto de iniciação científica. Apresentação de um trabalho em um evento acadêmico',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:8},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'PF095': {
			code: 'PF095',
			name: 'As Profissões',
			ementa: 'Seminários sobre as atividades e campos de atuação das profissões associadas aos cursos de graduação oferecidos pela UNICAMP.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9469C',
			obligatory: true
		},
		'PF096': {
			code: 'PF096',
			name: 'Introdução à Economia',
			ementa: 'A economia de mercado, origens e destino da produção. A circulação numa economia de mercado. As relações econômicas internacionais. O setor público. O sistema financeiro. A unidade produtora, sua inserção no sistema. Repartição e apropriação do produto social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4663B9',
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
