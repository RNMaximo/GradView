const catalogue = {
	totalCredits: 99,
	maxCreditsSem: 30,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GM091', 'LA083', 'BG091', 'TL106', 'QG191', 'MA091']
		},
		'sem-2': {
			id: '2',
			subjects: ['MA093', 'LA084', 'FI092', 'BF092', 'HH092', 'EN092']
		},
		'sem-3': {
			id: '3',
			subjects: ['PF093', 'MD163', 'EF091', 'PF095', 'LA091', 'CS093', 'GT001']
		},
		'sem-4': {
			id: '4',
			subjects: ['PF096', 'MC001', 'EP094', 'PF094', 'LA092', 'CV043']
		}
	},

	eletivas: {
	},

	subjects: {
		'BG091': {
			code: 'BG091',
			name: 'Evolução',
			ementa: 'Abordagem histórica: as ideias sobre biologia, dos gregos clássicos a Darwin; \"A Origem das Espécies\" de C. Darwin: a abrangência e os impactos da obra em diferentes áreas; Evidências do processo evolutivo: paleontologia, anatomia comparada, embriologia, genética, bioquímica, distribuição geográfica; A síntese evolutiva; Genética de populações - teorema de Hardy-Weinberg; Processos micro e macroevolutivos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AA',
			obligatory: true
		},
		'GM091': {
			code: 'GM091',
			name: 'Planeta Terra',
			ementa: 'A disciplina pretende fornecer uma ideia integrada das transformações terrestres e do entendimento sistêmico da Terra. Trata das esferas materiais terrestres e das suas inter-relações: atmosfera, hidrosfera, crosta terrestre, manto, núcleo, biosfera e noosfera. Inclui tempo geológico. A disciplina abrange a natureza do conhecimento e os processos geológicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9646B9',
			obligatory: true
		},
		'LA083': {
			code: 'LA083',
			name: 'Leitura e Produção de Textos Acadêmicos I',
			ementa: 'Introdução à leitura e à produção de gêneros prestigiados na esfera acadêmica, em suas diferentes áreas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B446B9',
			obligatory: true
		},
		'MA091': {
			code: 'MA091',
			name: 'Matemática Básica',
			ementa: 'Conjuntos de números, operações aritméticas. Equações e Inequações. Regra de três. Estudo de funções reais: gráficos, operações com funções, tipos de funções. Funções polinomiais, raízes. Função exponencial e função logarítmica. Sequências. Progressões. Modelagem de problemas reais.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#466EB9',
			obligatory: true
		},
		'QG191': {
			code: 'QG191',
			name: 'Química',
			ementa: 'Fórmulas e equações químicas. Classificações períodicas e propriedades dos elementos. Noções de físico-química, termoquímica, equilíbrio químicos e células eletroquímicas. Ligação química, estrutura e propriedades das substâncias. Minerais. Polímeros naturais e sintéticos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B946A0',
			obligatory: true
		},
		'TL106': {
			code: 'TL106',
			name: 'Textos Fundamentais de Literatura',
			ementa: 'Leitura de textos básicos da literatura (ficção, poesia e teatro), selecionados de modo a construir repertório formativo.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5AB946',
			obligatory: true
		},
		'BF092': {
			code: 'BF092',
			name: 'O Corpo Humano',
			ementa: 'Estudo da estrutura e função do organismo humano. Inter-relação entre os sistemas nervoso, cardíaco, respiratório, renal, digestório e endócrino, proporcionando conhecimento dos processos básicos das relações do corpo humano em relação ao ambiente.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46AAB9',
			obligatory: true
		},
		'EN092': {
			code: 'EN092',
			name: 'Primeiros Socorros',
			ementa: 'Ensino teórico-prático de cuidados básicos em situações de urgência e emergência que acontecem em lugares públicos e domicílios. Subsídios teóricos básicos que possibilitem o encaminhamento adequado de vítimas dessas situações.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9A046',
			obligatory: true
		},
		'FI092': {
			code: 'FI092',
			name: 'Física',
			ementa: 'Força e máquinas simples, locomoção, dinâmica, líquidos, sólidos, e materiais biológicos. Ondas e fenômenos de interface, polarização, lentes e instrumentos óticos. Corrente elétrica, eletromagnetismo. Átomo de Bohr, núcleo e radioatividade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B96E',
			obligatory: true
		},
		'HH092': {
			code: 'HH092',
			name: 'Introdução à História',
			ementa: 'Apresentação geral da história como ambiente de produção de conhecimento específico e polêmico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#468CB9',
			obligatory: true
		},
		'LA084': {
			code: 'LA084',
			name: 'Leitura e Produção de Textos Acadêmicos II',
			ementa: 'Leitura e Produção de gêneros prestigiados na esfera acadêmica, em suas diferentes áreas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA083'],
			color: '#B446B9',
			obligatory: true
		},
		'MA093': {
			code: 'MA093',
			name: 'Matemática Básica 2',
			ementa: 'Axiomas básicos da geometria Euclidiana plana. Polígonos. Circunferência e círculo. Teorema de Tales. Semelhança de triângulos. Triângulos retângulos. Área de figuras planas. Funções trigonométricas. Trigonometria do triângulo retângulo. Trigonometria analítica. Matrizes e determinantes. Sistemas lineares. Pontos, retas e circunferências no plano. Posições relativas, interseções, distâncias e ângulos.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B94664',
			obligatory: true
		},
		'CS093': {
			code: 'CS093',
			name: 'Comunicação, Arte, Cultura e Sociedade',
			ementa: 'Estudo das relações entre os meios audiovisuais, a cultura de massa e a arte, notando de que maneiras tais relações redimensionam historicamente o imaginário social entre os séculos XIX e XXI, nos contextos nacional e internacional. Estudo dos meios audiovisuais, por intermédio da produção, difusão, reapropriação, interpretação e ressignificação das imagens na sociedade, na passagem do analógico para o digital, e a formação de uma cultura de convergência.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B4B946',
			obligatory: true
		},
		'EF091': {
			code: 'EF091',
			name: 'Atividade Física, Promoção da Saúde e Qualidade de Vida',
			ementa: 'Estudam-se os conceitos e as estratégias de promoção da saúde com a valorização da alimentação, atividade física e do relacionamento social visando a capacidade para a vida plena, a competência funcional e a qualidade de vida.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96446',
			obligatory: true
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#4650B9',
			obligatory: true
		},
		'LA091': {
			code: 'LA091',
			name: 'Língua Inglesa I',
			ementa: 'Introdução à compreensão e produção de textos orais e escritos básicos em língua inglesa em suas diversas modalidades relacionados à vida acadêmica; ensino e prática de estruturas frasais simples e vocabulário visando promover o domínio da língua inglesa nos diversos níveis de proficiência; utilização de eixos temáticos específicos a fim de estimular a reflexão crítica sobre cidadania e participação social, tendo a língua inglesa como ferramenta de comunicação e expressão; preparação do aluno para inserção no contexto dos cursos de graduação oferecidos pela UNICAMP.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7846B9',
			obligatory: true
		},
		'MD163': {
			code: 'MD163',
			name: 'Ética e Bioética I',
			ementa: 'Introdução aos conceitos básicos da Ética e suas articulações na sociedade a partir da análise de situações concretas que permitam enfatizar o estudo da posição dos direitos humanos na sociedade brasileira e no contexto internacional. Abordagem filosófica sobre educação, cultura e valores. Globalização e desenvolvimento. Estudo das raízes socioculturais da violência. Espiritualidade e religiosidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'PF093': {
			code: 'PF093',
			name: 'Introdução à Prática de Ciências e Artes I',
			ementa: 'Iniciação ao pensamento crítico relativo ao conhecimento científico e senso comum. Inserção do aluno no cotidiano do processo criativo, em atividades de pesquisa laboratoriais ou artísticas. Noções sobre a pesquisa científica e suas características. Apresentação do trabalho de Iniciação Científica - IC na Mostra Científica do ProFIS e opcional a apresentação em qualquer outro evento científico.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:7, D:0, HS:8, SL:1, C:8},
			requisitos: '',
			color: '#B98246',
			obligatory: true
		},
		'PF095': {
			code: 'PF095',
			name: 'As Profissões',
			ementa: 'Desenvolvimento de carreira e identidade profissional. Estrutura da Educação Superior. Atividades de autoconhecimento e informações sobre variáveis presentes na escolha de um de curso de graduação. Seminários sobre as atividades e campos de atuação das profissões associadas aos cursos de graduação oferecidos pela UNICAMP.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94682',
			obligatory: true
		},
		'CV043': {
			code: 'CV043',
			name: 'Engenharia do Ambiente',
			ementa: 'Ambiente: atmosfera e recursos hídricos; Poluição das águas, ar, solo; Impactos ambientais; Alterações climáticas; Gerenciamento de resíduos; Processos de tratamento de resíduos e de recuperação do ambiente; Legislação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#96B946',
			obligatory: true
		},
		'EP094': {
			code: 'EP094',
			name: 'Juventudes, Cidadania e Psicologia',
			ementa: 'Discute-se as questões que afetam os jovens na sociedade brasileira, como a constituição das subjetividades e das diferenças, as novas sociabilidades, o papel da mídia, a escolha das universidades e suas representações e os impasses dos jovens diante dos obstáculos à condução da construção da cidadania. A partir das contribuições da psicologia, propõe-se promover processos reflexivos e expressivos dos alunos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#5A46B9',
			obligatory: true
		},
		'LA092': {
			code: 'LA092',
			name: 'Língua Inglesa II',
			ementa: 'Expansão da prática de compreensão e produção de textos orais e escritos em língua inglesa em suas diversas modalidades relacionados à vida acadêmica; ensino e prática de estruturas frasais mais complexas e vocabulário visando promover o domínio da língua inglesa nos diversos níveis de proficiência; utilização de eixos temáticos específicos a fim de estimular a reflexão crítica sobre cidadania e participação social, tendo a língua inglesa como ferramenta de comunicação e expressão; dar sequência na preparação do aluno iniciada em LA091 Língua Inglesa para ProFis 1 a fim de promover sua inserção no contexto dos cursos de graduação oferecidos pela UNICAMP.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['LA091'],
			color: '#7846B9',
			obligatory: true
		},
		'MC001': {
			code: 'MC001',
			name: 'Tecnologias da Informação',
			ementa: 'Organizações de dados, organizações de computadores, estruturas de programas, fundamentos de bancos de dados, noções de redes, internet, interface ser humano-computadores, impacto social da computação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#78B946',
			obligatory: true
		},
		'PF094': {
			code: 'PF094',
			name: 'Introdução à Prática de Ciências e Artes II',
			ementa: 'Iniciação ao pensamento crítico relativo ao conhecimento científico e senso comum. Inserção do aluno no cotidiano do processo criativo, em atividades de pesquisa laboratoriais ou artísticas. Noções sobre a pesquisa científica e suas características. Apresentação obrigatória do trabalho de Iniciação Científica - IC na Mostra Científica do ProFIS e opcional a apresentação em qualquer outro evento científico.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:7, D:0, HS:8, SL:1, C:8},
			requisitos: '',
			color: '#46B98C',
			obligatory: true
		},
		'PF096': {
			code: 'PF096',
			name: 'Introdução à Economia',
			ementa: 'Economia de mercado: principais elementos, origens e destino da produção. A circulação em uma economia de mercado. As relações econômicas internacionais. O setor público. O sistema financeiro. A unidade produtora e sua inserção no sistema. Repartição da renda e apropriação do produto social. Economia como ciência social. Crescimento e transformação estrutural: desenvolvimento e subdesenvolvimento. Alguns indicadores econômicos e sociais: comparações internacionais históricas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B950',
			obligatory: true
		}
	}
};

export default catalogue;
