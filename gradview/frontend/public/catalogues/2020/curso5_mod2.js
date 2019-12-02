const catalogue = {
	totalCredits: 224,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'MA141', 'QG005', 'QG108', 'QG109', 'QG362']
		},
		'sem-2': {
			id: '2',
			subjects: ['EL683', 'F_128', 'F_129', 'MA211', 'QA282', 'QO321']
		},
		'sem-3': {
			id: '3',
			subjects: ['EL111', 'EL511', 'EP152', 'QF431', 'QG331', 'QO521']
		},
		'sem-4': {
			id: '4',
			subjects: ['EL212', 'EP372', 'F_328', 'QF531', 'QG464', 'QI246', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EL774', 'QG551', 'QG565', 'QO551']
		},
		'sem-6': {
			id: '6',
			subjects: ['EL485', 'EL874', 'QF535', 'QF632', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EL109', 'EL213', 'QG680', 'QG760']
		},
		'sem-8': {
			id: '8',
			subjects: ['EP094', 'EP879', 'QA815', 'QG771', 'QG880', 'QL701']
		}
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D9B3'
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D966'
		},
		'QG005': {
			code: 'QG005',
			name: 'Química e Mercado de Trabalho',
			ementa: 'Aspectos e possibilidades da profissão.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: '',
			color: '#408CD9'
		},
		'QG108': {
			code: 'QG108',
			name: 'Química Geral Teórica',
			ementa: 'Estrutura atômica; periodicidade das propriedades atômicas; modelos de ligação química (iônica e covalente); geometria molecular; interações intermoleculares, propriedades gerais de sólidos, líquidos e gases. Noções de termodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'QG109': {
			code: 'QG109',
			name: 'Química Geral Experimental',
			ementa: 'Experimentos que ilustram técnicas e conceitos básicos em química.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B3D940'
		},
		'QG362': {
			code: 'QG362',
			name: 'Química com Segurança',
			ementa: 'Segurança em laboratório químico; identificação e uso de equipamentos de segurança; manuseio de substâncias com segurança; estocagem e descarte de resíduos de laboratórios. Contaminação química. Treinamento para atendimento em situações de emergência; técnicas de primeiros socorros. Legislação sobre segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B3'
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4040D9'
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D9'
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8C40D9'
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: ''
		},
		'QA282': {
			code: 'QA282',
			name: 'Química Clássica',
			ementa: 'Equilíbrios iônicos, ácido-base, de íons complexos e de óxido-redução. Solubilidade e produto de solubilidade. Análise qualitativa e quantitativa. Volumetria. Gravimetria. Expressão de resultados analíticos.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG108', 'QG109'],
			color: ''
		},
		'QO321': {
			code: 'QO321',
			name: 'Química Orgânica I',
			ementa: 'Introdução da disciplina: alguns aspectos históricos e de teoria estrutural. Estrutura Eletrônica e Ligação Química. Estruturas Orgânicas. Reações Orgânicas. Alcanos. Reações de alcanos. Estereoquímica. Haletos de alquila e organometálicos. Estrutura e propriedades físicas de haletos de alquila. Uso de hidrocarbonetos halogenados, nomenclatura e estrutura de substâncias organometálicas, propriedades físicas e preparação de organometálicos, reações de organometálicos. Substituição nucleofílica e eliminações. Álcoois e éteres. Alcenos (alquenos). Alcinos (alquinos) e nitrilas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: ''
		},
		'EL111': {
			code: 'EL111',
			name: 'Leitura, Produção de Textos e Docência',
			ementa: 'Práticas de leitura e escrita no contexto da formação inicial em nível superior, em seus diferentes gêneros que performam o universo de significação, a história do modo de viver contemporâneo e a produção de conhecimento. Práticas de leitura e de produção em diferentes linguagens, principalmente aquelas que movimentam a esfera acadêmica da atividade humana.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#8CD940'
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#40B3D9'
		},
		'EP152': {
			code: 'EP152',
			name: 'Didática - Teoria Pedagógica',
			ementa: 'As características da instituição escolar no contexto socioeconômico cultural brasileiro: objetivos, finalidades, organização, política educacional, recursos humanos e materiais. As diferentes formas de ensino como planos de organização e processos de interação. Identificação e análise de estratégias de ensino, da natureza dos conteúdos e das formas de avaliação em consonância com as características da clientela escolar.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4066D9'
		},
		'QF431': {
			code: 'QF431',
			name: 'Físico-Química I',
			ementa: 'Estado gasoso: propriedades PVT de gases ideal e real; equação de van der Waals; princípio dos estados correspondentes. Conceitos básicos de Termodinâmica: primeira, segunda e terceira Leis; funções termodinâmicas; termoquímica; aplicações. Condições de equilíbrio e regra das fases: sistemas de um e de mais componente. Propriedades coligativas; atividade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'QG108'],
			color: ''
		},
		'QG331': {
			code: 'QG331',
			name: 'Estudos de Problemas de Ensino de Química',
			ementa: 'Aprendizagem significativa. Concepções alternativas e mudança conceitual no ensino de química, estudo e análise de casos. O papel da linguagem e das formas de representação no ensino de química. Estratégias para educação inclusiva Conhecimentos conceituais, procedimentais e atitudinais. Transposição didática. Contextualização no ensino de química, abordagem CTSA, possibilidades e limitações. O papel da avaliação como instrumento de reconhecimento, estruturação da prática profissional e construção de conhecimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040'
		},
		'QO521': {
			code: 'QO521',
			name: 'Química Orgânica II',
			ementa: 'Aldeídos e cetonas. Ácidos carboxílicos e derivados. Conjugação, sistemas alílicos, dienos e polienos, compostos carbonílicos insaturados, reações do tipo Diels-Alder. Benzeno e o anel aromático, substituição eletrofílica aromática. Haletos de arila e substituição nucleofílica aromática. Fenóis. Aminas. Outras funções nitrogenadas. Em todos os casos, relação entre características estruturais e reatividade, com ênfase em mecanismos, relações estereoquímicas envolvidas e ampla exemplificação de aplicações.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['QO321'],
			color: ''
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#6640D9'
		},
		'EP372': {
			code: 'EP372',
			name: 'Avaliação',
			ementa: 'A disciplina toma a escola como objeto de estudo, do ponto de vista de sua organização do trabalho pedagógico; insere a avaliação nesse contexto e discute a função ideológica da escola e dos processos de avaliação. São examinados os vários níveis de avaliação - em sala de aula, institucional e de redes de ensino. Discutem-se novas abordagens para o trabalho pedagógico que permitam visualizar novas formas de avaliação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B340D9'
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: ''
		},
		'QF531': {
			code: 'QF531',
			name: 'Físico-Química II',
			ementa: 'Teoria cinética dos gases: equação barométrica, Lei de Maxwell-Boltzmann para a distribuição de velocidades; potencial intermolecular. Cinética química: equações de velocidade; catálises homogênea e heterogênea; reações rápidas, noções sobre dinâmica molecular. Eletroquímica: condutividade de soluções, Lei de Ostwald; equilíbrio iônico; propriedades termodinâmicas; coeficientes de atividade; teoria de Debye-Hückel; pilhas e reações eletroquímicas; passivação e corrosão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QF431'],
			color: ''
		},
		'QG464': {
			code: 'QG464',
			name: 'Laboratório Integrado',
			ementa: 'Experimentos de natureza interdisciplinar abrangendo diferentes métodos de preparação, caracterização e análises de fenômenos envolvidos na preparação de produtos de tais como preparação de biodiesel e de solvente industrial, síntese e fomulação de fármacos, etc... utilizando técnicas e procedimentos tais como espectroscopia de IV, RMN, fluorescência de raios X, espectrometria de massa, reologia, análise termogravimétrica, determinação de área superficial, entre outros.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108', 'QG109'],
			color: ''
		},
		'QI246': {
			code: 'QI246',
			name: 'Química Inorgânica',
			ementa: 'Acidez e basicidade de Lewis: conceitos de dureza e moleza; química de coordenação e de organometálicos de metais de transição.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG108'],
			color: ''
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
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
			color: '#40D98C'
		},
		'QG551': {
			code: 'QG551',
			name: 'Didática e Metodologia do Ensino de Química',
			ementa: 'Estratégias metodológicas para o ensino de química com abordagens teórica, histórica, fenomenológica e representacional, inclusive voltadas para educação inclusiva. Abordagens investigativas, metodologias ativas e assistivas. Tendências atuais no ensino de química. Estratégias para o ensino inclusivo em química. Sequências didáticas no ensino de química: currículo, planejamento, ação e avaliação da prática profissional. O papel do processo reflexivo sobre a prática. Articulação entre teoria e prática na formação inicial de professores',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL212', 'EL511', 'EL683', 'EP152', 'EP372', 'QG108', 'QG109'],
			color: ''
		},
		'QG565': {
			code: 'QG565',
			name: 'Química Orgânica e Inorgânica Experimental',
			ementa: 'Estudo de estratégias de síntese, purificação e caracterização, ilustrando-se o deslocamento do equilíbrio de reações através da remoção dos produtos ou de subprodutos, ou pela precipitação dos mesmos; a utilização de atmosfera inerte; a purificação por destilação, cristalização, sublimação ou cromatografia em coluna; a caracterização por espectroscopia no infravermelho, espectroscopia de ressonância magnética nuclear, ponto de fusão, espectroscopia de massa e cromatografia em fase gasosa. Articulação de conceitos teóricos e práticos, recursos de informática e outras mídias para elaboração de proposta de ensino para apresentação oral e escrita.',
			semestre: 1,
			vector: {T:0, P:2, L:8, O:2, D:0, HS:12, SL:8, C:12},
			requisitos: ['QG109', 'QI246', 'QO521'],
			color: ''
		},
		'QO551': {
			code: 'QO551',
			name: 'Bioquímica I',
			ementa: 'Introdução, aminoácidos, proteínas: estrutura, métodos para análise de proteínas, função de proteínas, carboidratos, ácidos nucleicos e estrutura de RNA e DNA, métodos para análise de ácidos nucleicos, princípios da tecnologia de DNA recombinante, lipídeos e membranas biológicas, transporte através de membranas, enzimologia, tópicos selecionados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QO521'],
			color: ''
		},
		'EL485': {
			code: 'EL485',
			name: 'Filosofia e História da Educação',
			ementa: 'Introdução à Filosofia e História da Educação, consideradas à luz de suas diferenças frente à Ciência e à Pedagogia: estudo e discussões das origens históricas da Filosofia e dos processos, narrativas e ideias que se relacionam com as configurações assumidas pela Educação no Brasil, principalmente em seu período de formação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#D94066'
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
		'QF535': {
			code: 'QF535',
			name: 'Introdução à Química Quântica',
			ementa: 'Evolução histórica da descrição da luz e da matéria. A antiga mecânica quântica, quantização da energia da radiação e mecânica. Os postulados da mecânica quântica ondulatória. Aplicações a sistemas simples. Química quântica: estruturas atômicas e estruturas moleculares de sistemas simples. Ensino de química quântica: atividades orientadas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['F_328'],
			color: ''
		},
		'QF632': {
			code: 'QF632',
			name: 'Físico-Química Experimental I',
			ementa: 'Experimentos relacionados aos temas: termodinâmica química, cinética, eletroquímica, equilíbrio de fases e propriedades coligativas.',
			semestre: 1,
			vector: {T:0, P:0, L:6, O:2, D:0, HS:8, SL:6, C:8},
			requisitos: ['QA282', '*QF531'],
			color: ''
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'EL109': {
			code: 'EL109',
			name: 'Introdução à Pesquisa no Ensino de Ciências',
			ementa: 'Educação em Ciências como campo de pesquisa. Relações entre pesquisa e docência na Educação em Ciências. Introdução às metodologias de pesquisa em Ensino de Ciências. Práticas de pesquisa em Ensino de Ciências.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:2, C:6},
			requisitos: '',
			color: '#D9B340'
		},
		'EL213': {
			code: 'EL213',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940'
		},
		'QG680': {
			code: 'QG680',
			name: 'Estágio Supervisionado I',
			ementa: 'Atividades formativas supervisionadas para promover interação com experiências, práticas e conhecimentos relacionados com o ensino de Química e o material instrucional disponível em escolas e espaços de educação não formal. As ações desenvolvidas incluem a inserção na dinâmica da escola e seus processos de organização, gestão e interação com a comunidade.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:5, D:0, HS:6, SL:1, C:6},
			requisitos: ['AA450', 'EL874'],
			color: '#66D940'
		},
		'QG760': {
			code: 'QG760',
			name: 'Projetos de Ensino em Química',
			ementa: 'Discussões presenciais (3 horas-aula semanais) envolvendo aspectos teóricos e conceituais para fundamentar a elaboração de projetos experimentais ou teóricos relacionados ao Ensino de Química, com foco na educação básica ou não formal. Os projetos serão executados durante o semestre letivo, acompanhados pela leitura crítica de textos diversos envolvendo a temática do Ensino de Química e da Educação, aplicação de recursos de informática e outras mídias, visando a elaboração de apresentação oral e relatórios que serão compartilhados com a turma nos encontros em sala de aula. O resultado de cada projeto, devidamente fundamentado com literatura específica e registrado numa monografia, que pode incluir material instrucional, será também apresentado em forma oral.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:5, D:0, HS:8, SL:3, C:8},
			requisitos: ['AA470'],
			color: '#D9D940'
		},
		'EP094': {
			code: 'EP094',
			name: 'Juventudes, Cidadania e Psicologia',
			ementa: 'Discute-se as questões que afetam os jovens na sociedade brasileira, como a constituição das subjetividades e das diferenças, as novas sociabilidades, o papel da mídia, a escolha das universidades e suas representações e os impasses dos jovens diante dos obstáculos à condução da construção da cidadania. A partir das contribuições da psicologia, propõe-se promover processos reflexivos e expressivos dos alunos.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: '',
			color: '#D9408C'
		},
		'EP879': {
			code: 'EP879',
			name: 'Educação de Jovens e Adultos',
			ementa: 'Reflexões sobre a perspectiva histórica do direito à Educação para jovens e adultos: direitos, concepções e funções sociais. Abordagem da Educação de Jovens e Adultos enquanto campo de direitos e suas singularidades. As políticas educacionais para Educação de Jovens e Adultos. Cursos ofertados nos diferentes níveis de ensino (Fundamental e Médio) e articulação com a Educação Profissional. Projetos e experiências desenvolvidos na proposta para a modalidade EJA.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D98C40'
		},
		'QA815': {
			code: 'QA815',
			name: 'Química do Meio Ambiente',
			ementa: 'Química dos solos, águas e atmosfera. Poluição ambiental: prevenção e processos de tratamento (remediação). Reações químicas e processos de interesse para a saúde humana nas águas, nos solos e na atmosfera. Legislação e poluição ambiental.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QA282', '*QF531'],
			color: ''
		},
		'QG771': {
			code: 'QG771',
			name: 'Tecnologias de Informação e Comunicação Aplicadas ao Ensino de Química',
			ementa: 'Perspectivas históricas, disciplinares e conceituais das Tecnologias e suas relações e com as práticas de ensino-aprendizagem em Ciências/Química, possibilidades e limitações. Tecnologias da informação e comunicação (TICs) e sociedade atual, evolução da web e novas tecnologias. Cultura escolar e cultura digital. Legislação Educacional sobre uso e formação com Tecnologias. Levantamento e problematização dos principais suportes tecnológicos: softwares educacionais, aplicativos, simulações, vídeos, sites cooperativos, laboratórios remotos e virtuais. TICs como ferramenta de avaliação. Ensino a distância e semipresencial e tecnologias assistivas. Articulação dos conteúdos com práticas em sala de aula.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA450'],
			color: '#D96640'
		},
		'QG880': {
			code: 'QG880',
			name: 'Estágio Supervisionado II',
			ementa: 'Execução de projetos supervisionados de práticas de Ensino de Química em escola ou espaço não formal de educação para articulação de habilidades e competências desenvolvidas nas atividades de formação química e didático-pedagógica. As ações desenvolvidas incluem a inserção na dinâmica da escola e seus processos de organização, gestão e interação com a comunidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['QG680'],
			color: ''
		},
		'QL701': {
			code: 'QL701',
			name: 'Projetos Integrados',
			ementa: 'Execução de projetos de Ensino de Química, com articulação de aspectos conceituais desenvolvidos com abordagem teórica e/ou experimental e/ou com aplicação de recursos de informática e outras mídias, direcionados para o ensino médio. A fundamentação dos projetos envolve levantamento bibliográfico crítico e dirigido, com posterior elaboração de texto descritivo da proposta executada. As atividades são orientadas de maneira integrada por profissionais do Instituto de Química e da Faculdade da Educação da Unicamp.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['QG760'],
			color: ''
		}
	}
};

export default catalogue;
