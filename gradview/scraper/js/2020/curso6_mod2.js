const catalogue = {
	totalCredits: 235,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BC182', 'BE180', 'BG180', 'BZ183', 'MS380', 'QG107']
		},
		'sem-2': {
			id: '2',
			subjects: ['BA281', 'BB281', 'BC282', 'BG200', 'BG282', 'BH282', 'BT285', 'BZ285', 'F_107']
		},
		'sem-3': {
			id: '3',
			subjects: ['BB381', 'BF381', 'BG380', 'BI381', 'BM382', 'BT385', 'BZ385', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['BD520', 'BE480', 'BF481', 'BG480', 'BH420', 'BT485', 'BV481', 'BZ485', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['BD621', 'BH520', 'BL300', 'BP582', 'BV581', 'GM280', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['GM450', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['BT205', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['BT681', 'ELET08']
		}
	},

	subjects: {
		'BC182': {
			code: 'BC182',
			name: 'Biologia Celular I',
			ementa: 'Revisão de conteúdos básicos. Principais componentes bioquímicos da célula. Métodos de estudo da célula. Estrutura, ultraestrutura, composição e fisiologia dos componentes celulares: biomembranas, envoltório nuclear, cromatina e cromossomos, nucléolo, ribossomos (com ênfase em síntese proteica), proteossomo, retículo endoplasmático, complexo de Golgi, sistema endossômico-lisossômico, mitocôndrias, peroxissomos. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9AE40'
		},
		'BE180': {
			code: 'BE180',
			name: 'Introdução à Ecologia',
			ementa: 'Revisão de conteúdos básicos em ecologia e ciências ambientais. A ecologia no nível do indivíduo, populações, comunidades e ecossistemas. Propriedades de sistemas ecológicos. Biomas. O ambiente físico, adaptações, distribuição e abundância. Introdução às interações ecológicas. Aplicação da ecologia a problemas e desafios ambientais atuais. Método científico e formulação de hipóteses em ecologia e fundamentos teórico-práticos. Excursões obrigatórias. Produção e análise de textos em língua portuguesa, incluindo elaboração de projetos, relatórios científicos e apresentações orais e de painel.',
			semestre: 1,
			vector: {T:1, P:5, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D98940'
		},
		'BG180': {
			code: 'BG180',
			name: 'Introdução à Evolução',
			ementa: 'Revisão de conteúdos básicos. Conceitos introdutórios da teoria de Darwin e a \"Origem das espécies\", a síntese evolutiva. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9540D9'
		},
		'BZ183': {
			code: 'BZ183',
			name: 'Sistemática Zoológica e Biodiversidade',
			ementa: 'Revisão de conteúdos básicos. Diversidade Biológica, definição e origem e evolução dos metazoários, conceitos de sistemática filogenética, taxonomia e nomenclatura, os ambientes da terra, biogeografia, métodos de preservação de animais, Museus e coleções zoológicas. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#71D940'
		},
		'MS380': {
			code: 'MS380',
			name: 'Matemática Aplicada para Biologia',
			ementa: 'Elementos de matemática discreta: recursão, probabilidade e combinatória. Sistemas lineares. Conceitos básicos do cálculo elementar: estudo gráfico e computacional. Aplicações à biologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9C6'
		},
		'QG107': {
			code: 'QG107',
			name: 'Química I (Biologia)',
			ementa: 'Estequiometria. Ligação química. Funções da química orgânica. Experimentos que ilustram o método científico, conceito de mol, ligação química, equilíbrio, pH, ácidos e bases, titulação, purificação de substâncias.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D958'
		},
		'BA281': {
			code: 'BA281',
			name: 'Anatomia Humana Geral',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Nomina anatômica e fatores gerais de variação. Conceitos anatômicos fundamentais dos sistemas orgânicos: ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino, nervoso central e periférico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4058D9'
		},
		'BB281': {
			code: 'BB281',
			name: 'Bioquímica de Proteínas',
			ementa: 'Sistemas-Tampão Biológicos. Proteínas: Composição, Estrutura e Função. Enzimas: Cinética, Regulação e Inibição. Métodos Experimentais Básicos em Bioquímica de proteínas, cromatografia, eletroforese, cinética enzimática. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94064'
		},
		'BC282': {
			code: 'BC282',
			name: 'Biologia Celular II',
			ementa: 'Matriz extracelular, citoesqueleto (microtúbulos, microfilamentos e filamentos intermediários), movimentação celular, sinalização celular, ciclo celular (mecanismos e controle molecular), meiose, diferenciação celular, morte celular e câncer como modelo para o estudo de alteraçoes nos processos celulares. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BC182'],
			color: ''
		},
		'BG200': {
			code: 'BG200',
			name: 'Bioestatística',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalos de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS380'],
			color: ''
		},
		'BG282': {
			code: 'BG282',
			name: 'Genética I',
			ementa: 'Ciclos de vida. Bases da hereditariedade. Segregações, ligações, interações gênicas e mapa genético. Herança extranuclear, determinação do sexo. Herança ligada ao sexo. Mutações. Noções de citogenética e de genética quantitativa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BG180'],
			color: ''
		},
		'BH282': {
			code: 'BH282',
			name: 'Fundamentos da Biologia Tecidual',
			ementa: 'Identificação e compreensão da diversidade morfofuncional das células. Biologia das associações e interações celulares para a composição dos diversos tecidos animais. Biologia do tecido epitelial na delimitação de ambientes e secreção celular. Biologia da matriz extracelular e sua organização na variedade dos tecidos conjuntivos. Biologia e integração das células dos tecidos conjuntivos. Biologia das diversidades e organizações morfofuncionais das células musculares. Biologia do tecido nervoso - citofisiologia dos neurônios e das células da glia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC182'],
			color: ''
		},
		'BT285': {
			code: 'BT285',
			name: 'Sistemática de Criptógamas e Gimnospermas',
			ementa: 'Apresentação da diversidade e evolução de organismos fotossintetizantes. Origem da fotossíntese e tipos de cloroplastos. Morfologia dos principais grupos de algas e plantas terrestres (não angiospermas). Ciclos de vida. Estratégias adaptativas para a conquista do ambiente terrestre. Evolução do sistema reprodutivo. Evolução do sistema vascular. Evolução da semente. Introdução às técnicas de coleta e preparação de amostras de plantas. Treinamento em observações e experimentação no campo. Produção e análise de texos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40A2D9'
		},
		'BZ285': {
			code: 'BZ285',
			name: 'Zoologia de Invertebrados I',
			ementa: 'Evolução e diversidade dos invertebrados metazoários, incluindo Placozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes, Nemertea, Rotifera, Gastrotricha, Kinorhyncha, Nematoda, Nematomorpha, Priapula, Acanthocephala, Ento-procta, Gnathostomulida, Loricifera, Annelida e Mollusca, embasando-se em propostas de filogenias. Estudo comparativo dos diferentes grupos, relacionando a anatomia aos aspectos da biologia, como ocupação de ambientes (mar, terra, água doce), locomoção e suporte, mecanismos de alimentação, excreção, circulação, trocas gasosas, percepção de estímulos do meio e reprodução.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D9D340'
		},
		'F_107': {
			code: 'F_107',
			name: 'Física (Biologia)',
			ementa: 'Introdução. Medidas e unidades. Conceitos de erro experimental e método científico. Princípios de Mecânica Quântica. Radiação. Física Atômica. Física Nuclear e aplicações biomédicas. Conservação de energia. Calor e temperatura: introdução à termodinâmica. Fluidos viscosos. Aplicações biológicas. Eletricidade: carga, campo elétrico e corrente elétrica. Bioeletricidade. Introdução ao magnetismo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D96440'
		},
		'BB381': {
			code: 'BB381',
			name: 'Metabolismo',
			ementa: 'Metabolismo de carboidratos. Metabolismo de Lipídeos. Metabolismo de Aminoácidos. Transporte de Elétrons e Fosforilação Oxidativa. Integração Metabólica. Estratégias de Regulação do Metabolismo. Bancos de dados de vias metabólicas. Estudo comparado de vias metabólicas. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D3'
		},
		'BF381': {
			code: 'BF381',
			name: 'Biofísica e Fisiologia Humana I',
			ementa: 'Estudo do funcionamento dos sistemas nervoso, neuromuscular e endócrino em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistema nervoso, neuromuscular e endócrino. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D97D'
		},
		'BG380': {
			code: 'BG380',
			name: 'Genética Fisiológica e Molecular',
			ementa: 'DNA: Características e propriedades. Base molecular da mutação e recombinação. Transcrição e tradução. Sistemas de regulação. Mecanismos de recombinação em microorganismos. DNA recombinante. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios na área de Genética. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG282'],
			color: ''
		},
		'BI381': {
			code: 'BI381',
			name: 'Imunologia Básica',
			ementa: 'Propriedades gerais das respostas imunes, abordando os componentes do sistema imune inato e do sistema imune adaptativo, com ênfase na organização estrutural e funcional. Bases moleculares celulares do reconhecimento de antígenos pelos linfócitos B e T. Desenvolvimento, amadurecimento e ativação de linfócitos. Mecanismos efetores das respostas imunológicas que mantêm a integridade e a homeostasia do hospedeiro. Elaboração de relatórios de aulas práticas e apresentação de seminários em tópicos de Imunologia.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BC282'],
			color: ''
		},
		'BM382': {
			code: 'BM382',
			name: 'Microbiologia I',
			ementa: 'Estrutura e função das células procarióticas. Características dos principais grupos de procarióticos. Características gerais dos vírus e dos fungos. Metabolismo microbiano. Controle dos microrganismos. Microbiota. Relações micro-organismos e seus hospedeiros. Relações vírus e seus hospedeiros. Métodos de visualização de bactérias. Crescimento bacteriano \"in vitro\". Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4C40D9'
		},
		'BT385': {
			code: 'BT385',
			name: 'Morfologia e Anatomia de Angiospermas',
			ementa: 'Ciclo de vida das angiospermas e estratégias reprodutivas. Aspectos gerais da morfologia de Angiospermas: raiz, caule, folhas, inflorescências, flores, frutos e sementes. Aspectos gerais de célula vegetal e anatomia dos diferentes tecidos e órgãos vegetativos de Angiospermas. Elaboração de relatórios em aula prática dos conteúdos ministrados. Treinamento em observações e experimentação no campo e elaboração de trabalho escrito sobre morfologia vegetal. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#407DD9'
		},
		'BZ385': {
			code: 'BZ385',
			name: 'Zoologia de Invertebrados II',
			ementa: 'Origens evolutivas, diversidade, forma, função e organização dos Ecdysozoa e Deuterostomia. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['BZ285'],
			color: ''
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'BD520': {
			code: 'BD520',
			name: 'Fundamentos Éticos para o Exercício Profissional do Biólogo',
			ementa: 'Deontologia. Bem comum, proteção do meio ambiente, melhoria da qualidade de vida. O Código de Ética do Profissional Biólogo. Legislação referente ao exercício profissional do biólogo. Conselhos Federal e Regionais de Biologia. A responsabilidade profissional do biólogo. Exemplos e análises de prática profissional.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BAD940'
		},
		'BE480': {
			code: 'BE480',
			name: 'Ecologia Básica',
			ementa: 'Fluxo de energia e produtividade primária. Decomposição. Funcionamento de ecossistemas. Estrutura de comunidades ecológicas, riqueza e diversidade de espécies. Interações interespecíficas: predação, competição, mutualismo. Dinâmica populacional e competição intraespecífica. Distribuição e abundância de espécies. Metapopulações. Condições, recursos e adaptações. Ecofisiologia. Serviços ecossistêmicos e aplicação do conhecimento ecológico. Produção e análise de textos em língua portuguesa, incluindo elaboração de projetos e relatórios científicos. Treinamento em apresentações orais e seminários.',
			semestre: 1,
			vector: {T:4, P:1, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['BE180'],
			color: ''
		},
		'BF481': {
			code: 'BF481',
			name: 'Biofísica e Fisiologia Humana II',
			ementa: 'Estudo do funcionamento dos sistemas digestório, cardiovascular, respiratório e renal em diferentes condições ambientais a que são expostos os seres humanos. Elaboração de relatórios referentes às atividades de laboratório para cada tema abordado na disciplina, sistemas digestório, cardiovascular, respiratório e renal. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BF381'],
			color: ''
		},
		'BG480': {
			code: 'BG480',
			name: 'Genética e Evolução',
			ementa: 'O processo evolutivo. Mecanismos de evolução: diversificação gênica e formação da reserva gênica. Equilíbrio de Hardy-Weinberg. Noções de genética de populações. Seleção natural e artificial. Mecanismos de isolamento e modos de reprodução. Fixação filogenética e tendências evolutivas. Filogenia em plantas, animais e no homem. Elaboração e apresentação de projetos científicos na área de Genética. Elaboração de relatórios e análise de textos na área de Genética em Língua Portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BG380'],
			color: ''
		},
		'BH420': {
			code: 'BH420',
			name: 'Embriologia Comparada',
			ementa: 'Estudo da embriologia comparada, com ênfase nos processos comuns ao desenvolvimento animal. Os tópicos incluem gametogênese, fecundação e embriogênese inicial de organismos-modelo invertebrados (ouriço-do-mar e drosófila) e vertebrados (peixe-zebra, Xenopus, galinha e camundongo), bem como o estudo do desenvolvimento embrionário humano. As aulas-práticas consistirão na observação de lâminas de embriões de galinha em diferentes estágios do desenvolvimento. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BH282'],
			color: ''
		},
		'BT485': {
			code: 'BT485',
			name: 'Sistemática de Angiospermas I',
			ementa: 'Sistemas de classificação dos vegetais. Bases dos sistemas filogenéticos. Angiospermas: caracterização, origem, classificação tradicional e filogenética. Principais famílias: caracterização e identificação. Práticas em taxonomia: uso e elaboração de chaves de identificação e de descrições botânicas; regras de nomenclatura botânica; coleta, preservação e documentação de amostras botânicas. Noções sobre coleções botânicas com ênfase na organização e funcionamento de Herbário Científico. Treinamento em observações e experimentação no campo. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:1, L:2, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: ['BT385'],
			color: ''
		},
		'BV481': {
			code: 'BV481',
			name: 'Fisiologia Vegetal Básica: Metabolismo',
			ementa: 'Relações hídricas, absorção iônica e transporte de solutos, nutrição mineral, assimilação de nitrogênio, fixação simbiótica do nitrogênio, fotossíntese, relações fonte-dreno, respiração. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9A2'
		},
		'BZ485': {
			code: 'BZ485',
			name: 'Zoologia de Vertebrados',
			ementa: 'Introdução ao estudo de vertebrados: noções sobre variedade de formas, funções, ambiente e modos de vida de peixes, anfíbios, répteis, aves e mamíferos. (Excursão obrigatória, elaboração de trabalhos com apresentação oral e relatório). Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:3, L:0, O:1, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D940AE'
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
		'BD621': {
			code: 'BD621',
			name: 'Legislação e Normas para o Profissional de Biologia',
			ementa: 'Análise e estudo das normas e legislação para o profissional em Biologia.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BD520'],
			color: ''
		},
		'BH520': {
			code: 'BH520',
			name: 'Biologia do Desenvolvimento',
			ementa: 'Princípios celulares e moleculares do desenvolvimento. Controle genético e molecular da diferenciação celular. Estabelecimento dos eixos corporais. Organogênese e desenvolvimento de estruturas especializadas. Evolução e Desenvolvimento. Questões éticas e de biossegurança relacionadas à Biologia do Desenvolvimento. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['BG380', 'BH420'],
			color: ''
		},
		'BL300': {
			code: 'BL300',
			name: 'Introdução à Filosofia das Ciências Naturais',
			ementa: 'Apresentação dos pontos de vista dos principais filósofos, dos pré-socráticos aos atuais, e dos principais problemas abordados pela filosofia das ciências naturais. Análise de textos em língua portuguesa publicados na imprensa e em periódicos especializados. Elaboração de questões-guia e de exposições audiovisuais. Apresentação de seminários e debate das questões-guia. Discussão de filmes sob diferentes pontos de vista da filosofia das ciências naturais.Discussão dos principais pontos de vista da filosofia das ciências naturais com vistas à sua aplicação no ensino de Ciências e Biologia.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#7140D9'
		},
		'BP582': {
			code: 'BP582',
			name: 'Parasitologia Animal I',
			ementa: 'Conceito de parasitismo. Relação parasito-hospedeiro. Ciclos biológicos. Exemplos de protozoários, helmintos e artró-podes parasitas. Vetores. Epidemiologia das principais parasitoses de interesse médico. Elaboração de relatórios ou seminários sobre temas de protozologia, helmintologia e ectoparasitologia. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'BV581': {
			code: 'BV581',
			name: 'Fisiologia Vegetal Básica: Desenvolvimento',
			ementa: 'Hormônios Vegetais. Fotomorfogênese. Embriogênese e Germinação. Florescimento. Frutificação. Senescência. Abscisão. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#95D940'
		},
		'GM280': {
			code: 'GM280',
			name: 'Elementos de Geologia',
			ementa: 'Abrange a natureza do conhecimento geológico e o estudo do processo histórico-geológico. Investiga o desenvolvimento das esferas terrestres (atmosfera, hidrosfera, biosfera, noosfera, litosfera, manto e núcleo) sob o ponto de vista do tempo geológico. Inclui estudos da interação de processos terrestres e seu entendimento ao longo do passado da terra. Envolve atividades de campos para reconhecimento de processos geológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94089'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:15},
			requisitos: '',
			color: ''
		},
		'GM450': {
			code: 'GM450',
			name: 'Fundamentos da Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro a nível mundial e no Brasil, que auxiliam tanto na interpretação da idade quanto nos aspectos do meio abiótico (paleoecologia, paleoclimatologia, etc.) e acerca da evolução da vida no planeta. Fornecer bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40C6D9'
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
		'BT205': {
			code: 'BT205',
			name: 'Biogeografia',
			ementa: 'Biogeografia: histórico e bases teóricas. Geologia da América do Sul e influência na distribuição de plantas. Correntes atmosféricas e marítimas e influência sobre o clima. Flutuações climáticas históricas. Pressões ecológicas que influenciam a distribuição de espécies. Biogeografia insular. Biomas e regionalização da biota. Distribuição individual das espécies . Biodiversidade e gradientes de distribuição. Especiação, extinção e adaptação radiativa. Biogeografia molecular. Filogeografia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#4CD940'
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
		'BT681': {
			code: 'BT681',
			name: 'Botânica Econômica',
			ementa: 'Origens da agricultura e bases do melhoramento genético de plantas. Aspectos econômicos e botânicos (taxonômicos, fisiológicos, genéticos e ecológicos) de plantas cultivadas (alimentícias, medicinais, tóxicas, fitorremediadoras, invasoras, biocombustíveis, de uso industrial, etc). Conservação de recursos genéticos (em ambientes naturais, bancos de germoplasma, jardins botânicos, etc) de plantas cultivadas e de potencial econômico. Noções sobre recuperação de terras degradadas, de planejamento ambiental e legislação ambiental. Discussão de temas atuais em Botânica Aplicada. Condução de seminário e apresentação de relatório sobre tema relacionado à disciplina. Produção e análise de textos em língua portuguesa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA460'],
			color: '#BA40D9'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: ''
		}
	}
};

export default catalogue;
