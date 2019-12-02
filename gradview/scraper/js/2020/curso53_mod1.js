const catalogue = {
	totalCredits: 279,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['GE300', 'GN101', 'GN107', 'GN111', 'MA111', 'MA141', 'QG104']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_128', 'F_129', 'GE207', 'GE406', 'LA122', 'QF331']
		},
		'sem-3': {
			id: '3',
			subjects: ['BD101', 'F_228', 'GE502', 'GE601', 'GF303', 'GF508', 'LA242', 'MA211']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_328', 'GE402', 'GE407', 'GF503', 'GN105', 'GN304', 'ME414']
		},
		'sem-5': {
			id: '5',
			subjects: ['CV323', 'GE503', 'GE506', 'GE507', 'GE512', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['GE117', 'GE511', 'GE603', 'GE606', 'GE804', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['GE703', 'GE704', 'GE708', 'GE802', 'GE903', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['GE706', 'GE711', 'GE803', 'GE805', 'GE806', 'GE910']
		},
		'sem-9': {
			id: '9',
			subjects: ['GE007', 'GE602', 'GE901', 'GE904', 'ELET09']
		},
		'sem-10': {
			id: '10',
			subjects: ['GE001']
		}
	},

	subjects: {
		'GE300': {
			code: 'GE300',
			name: 'Mineralogia I',
			ementa: 'Minerais: conceito, classificação, abundância e ambientes de formação. Cristalo-química. Ligações químicas, número de coordenação e poliedro de coordenação. Substituições iônicas: soluções sólidas, isomorfismo e polimorfismo. Composição química, estrutura cristalina e radiação eletromagnética. Propriedades mecânicas: clivagem, fratura, dureza, traço, hábito e densidade. Propriedades óticas (cor, brilho, luminescência), magnéticas e radiotividade. Cristalografia: cela unitária, retículo cristalino, elementos de simetria, sistemas e classes de simetria. Estruturas cristalinas dos minerais.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940'
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#5E40D9'
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico. Recontextualização dos conceitos e conteúdos da geografia humana desenvolvidos no processo de escolarização e na universidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99C40'
		},
		'GN111': {
			code: 'GN111',
			name: 'Sistema Terra',
			ementa: 'Conceitos básicos de geologia. Origem do universo e origem do Sistema Solar. Estrutura e composição da Terra. Dinâmica interna do planeta Terra e a tectônica de placas. Materiais terrestres: rochas e minerais. O registro geológico e a escala do tempo geológico. Noções dos processos de interações entre os sistemas terrestres (litosfera, hidrosfera, biosfera, atmosfera e antroposfera). Mapas geológicos e noções básicas de trabalhos de campo em geologia. Sistema Terra e a humanidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BA40D9'
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D9409C'
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40ABD9'
		},
		'QG104': {
			code: 'QG104',
			name: 'Química',
			ementa: 'O átomo: forma e energia de orbitais e distribuição dos elétrons. A tabela periódica e propriedades associadas. Ligação química, propriedades associadas, propriedades de mineirais simples. Soluções aquosas: formas de expressar a concentração, pH, constante de equilíbrio. Noções de físico-química: energia, equilíbrio e cinética de processos geológicos. Funções de química orgânica e exemplos relevantes no Sistema Terra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D94F'
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9C940'
		},
		'GE207': {
			code: 'GE207',
			name: 'Introdução ao Sensoriamento Remoto e Fotogeologia',
			ementa: 'Definição, histórico e evolução do sensoriamento remoto. Princípios físicos do sensoriamento remoto. O espectro eletromagnético. Características espectrais de materiais naturais e artificiais. Introdução à espectroscopia de reflectância e interpretação de curvas de reflectância espectral. Sistemas sensores. Camêras aerofotogramétricas e fotografias aéreas. Princípios de estereoscopia e interpretação estereoscópica. Princípios de interpretação de fotografias aéreas.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GN111'],
			color: ''
		},
		'GE406': {
			code: 'GE406',
			name: 'Mineralogia II',
			ementa: 'Princípios de Mineralogia Ótica: Propriedades da luz: polarização, isotropia e anisotropia. O microscópio petrográfico. Propriedades óticas dos minerais sob luz natural e polarizada ao microscópio petrográfico: minerais isotrópicos e anisotrópicos (uniaxiais e biaxiais). Estudo das classes minerais em microscópio petrográfico. Outros métodos analíticos em Mineralogia: Difratometria de raios X, Microscopia Eletrônica de Varredura e Geoquímica Isotópica.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE300'],
			color: ''
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gás real, energia livre de Gibbs, equilíbrios físico e químico, diagrama de fases, cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'QG104'],
			color: ''
		},
		'BD101': {
			code: 'BD101',
			name: 'Biologia',
			ementa: 'Noções básicas de biologia, classificação e ecologia dos seres vivos. Conceitos básicos de evolução e especiação através da seleção natural; aspectos de conservação e manejo do meio ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#404FD9'
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: ''
		},
		'GE502': {
			code: 'GE502',
			name: 'Petrografia Sedimentar',
			ementa: 'Estudo dos componentes físicos, químicos e biológicos dos depósitos sedimentares (recentes e antigos), visando à identificação de estruturas, texturas, evidências genéticas e do arranjo espacial, para compreensão da geometria e dinâmica dos corpos estratiformes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE406'],
			color: ''
		},
		'GE601': {
			code: 'GE601',
			name: 'Sedimentologia',
			ementa: 'Estudo de descrição e classificação das rochas sedimentares. Análise dos processos que geram as rochas sedimentares através da textura, das estruturas sedimentares e das geometrias das camadas. Conceitos básicos de análise de fácies. Atividade prática no campo de análise sedimentológica.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN111'],
			color: ''
		},
		'GF303': {
			code: 'GF303',
			name: 'Geomorfologia',
			ementa: 'Estudos das formas de relevo, gênese e evolução. Análise das inter-relações: rocha X solo X clima X relevo, com ênfase nos aspectos tectono-estruturais. Unidades morfoestruturais do globo terrestre. Processos endógenos no modelado do relevo. Teorias e técnicas de mapeamento geomorfológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GN111'],
			color: ''
		},
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#BAD940'
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Aprimoramento e prática de capacidades de leitura instrumental em língua inglesa em textos de gêneros acadêmico e científico. Aprofundamento no uso de estruturas frasais como promotoras da compreensão textual. Práticas de estratégias de leitura. Aplicação de estratégias de leitura para promover a compreensão textual. Leitura de textos digitais. Estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
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
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: ''
		},
		'GE402': {
			code: 'GE402',
			name: 'Elementos de Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis, bem como nos ambientes onde eles ocorrem. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro em nível mundial e no Brasil, que auxiliem a Geologia, tanto na interpretação de idade quanto nos aspectos do meio abiótico (paleocologia, paleoclimatologia, etc.). Dar bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: ''
		},
		'GE407': {
			code: 'GE407',
			name: 'Desenho Geológico',
			ementa: 'Princípios de Geometria Espacial e Descritiva e Aplicações em Geologia. Fundamentos de projeção estereográfica e exercícios práticos de análise de estruturas planares e lineares. Representação espacial de camadas e feições lineares por métodos gráficos e analíticos. Uso de ábacos. Mergulho real e aparente de camadas, profundidade e espessura: real e aparente. Mapas topográficos, geológicos e estruturais. Leitura e análise de mapas geológicos. Construção de perfis geológicos. Exercícios práticos de interpretação de mapas temáticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GE207'],
			color: ''
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#5ED940'
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40D9AB'
		},
		'GN304': {
			code: 'GN304',
			name: 'Trabalho de Campo',
			ementa: 'Treinamento de campo para entendimento das feições do terreno, dentro de uma visão holística, observando-se as interações de rocha X solo X clima X hidrografia X ocupação humana.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN107', 'GN111'],
			color: ''
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: ''
		},
		'CV323': {
			code: 'CV323',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas, introdução, normas NBR 13.133 e NBR 14.144). Planimetria (medições de distâncias e ângulos; taqueometria, topometria, medições eletrônicas de distâncias). Altimetria. Terraço, curvas de nível e locação de canais. Métodos de representação do relevo. Automação topográfica. Terraplanagem. Locação de obras.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GE207'],
			color: ''
		},
		'GE503': {
			code: 'GE503',
			name: 'Geoquímica',
			ementa: 'Desenvolvimento histórico da Geoquímica. Abundância cósmica dos elementos, estrutura e composição da geosfera. Química da hidrosfera e atmosfera. A biosfera e os depósitos biogênicos. Conceitos básicos de geoquímica superficial aplicáveis ao entendimento da formação de solos e dos depósitos lateríticos. Paisagens geoquímicas, processos naturais e antrópicos. Aplicações de geoquímica em exploração mineral e em estudos ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE406', 'QF331'],
			color: ''
		},
		'GE506': {
			code: 'GE506',
			name: 'Petrografia e Petrologia Ígnea',
			ementa: 'Identificação de minerais, estruturas e texturas de rochas ígneas. Fundamentos da geoquímica de elementos maiores, traços e de isótopos. Classificações das rochas ígneas. Estudo do equilíbrio de fases. Ambientes tectônicos de formação das rochas ígneas. Trabalho de campo para visita a afloramentos de rochas ígneas.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE406'],
			color: ''
		},
		'GE507': {
			code: 'GE507',
			name: 'Sensoriamento Remoto',
			ementa: 'Introdução aos sistemas de sensoriamento remoto orbital multiespectral, hiperespectral e de radar. Interpretação de imagens orbitais pancromáticas, multiespectrais e de radar. Introdução ao processamento digital de imagens de sensoriamento remoto. Aplicações do sensoriamento remoto aéreo e orbital em mapeamento geológico-estrutural, geomorfologia e no estudo do uso e ocupação do solo.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE207'],
			color: ''
		},
		'GE512': {
			code: 'GE512',
			name: 'Gestão, Governança e Sustentabilidade',
			ementa: 'A evolução do conceito de sustentabilidade e suas implicações para a regulação das atividades econômicas de exploração de recursos naturais, com foco em energia e mineração. Gestão e governança sustentáveis das empresas e instituições nesses setores. Papel da inovação como vetor de desenvolvimento sustentável na exploração de recursos naturais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D97D'
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'GE117': {
			code: 'GE117',
			name: 'Geoquímica Analítica',
			ementa: 'A evolução do pensamento geoquímico versus desenvolvimento das técnicas analíticas. Tipos de amostras e elementos analisados. A interação da radiação eletromagnética com a matéria. Principais técnicas analíticas utilizadas em litogeoquímica, geoquímica ambiental e isotópica. Práticas de coleta de amostras no campo, preparação de amostras, uso de equipamentos e controle de qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE503'],
			color: ''
		},
		'GE511': {
			code: 'GE511',
			name: 'Geologia de Campo I',
			ementa: 'Treinamento de campo em mapeamento geológico de sucessões sedimentares em bacias não deformadas. Elaboração de mapas, perfis estratigráficos, seções geológicas e relatórios.',
			semestre: 1,
			vector: {T:1, P:10, L:1, O:0, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE601', 'GN304'],
			color: ''
		},
		'GE603': {
			code: 'GE603',
			name: 'Geologia Estrutural',
			ementa: 'Princípios e mecanismos de deformação das rochas. Categoriais de análise estrutural: descritiva, cinemática e dinâmica. Arranjos estruturais: acamamento, foliação, lineação, dobras, dobramentos e superpostos, transposição, juntas e fraturas, falhas, zonas de cisalhamento, associações estruturais. Níveis estruturais. Relações entre metamorfismo e deformação; Princípios de microtectônica. Exercícios geométricos, projeção estereográfica, análise estatística de dados estruturais, perfis geológico-estruturais complexos. Trabalhos de campo e elaboração de relatórios.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE407'],
			color: ''
		},
		'GE606': {
			code: 'GE606',
			name: 'Petrografia e Petrologia Metamórfica',
			ementa: 'Classificação das rochas metamórficas em escalas macroscópicas e microscópicas. Tipos de metamorfismo e seus ambientes tectônicos. Mineralogia e texturas típicas; relações texturais entre minerais; significado das texturas; reações metamórficas. Fatores condicionantes de metamorfismo e conceito de fácies metamórfica. Análise de gráficos de composições químicas dos minerais e rochas e paragêneses metamórficas. Papel de rochas metamórficas na evolução crustal. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE406'],
			color: ''
		},
		'GE804': {
			code: 'GE804',
			name: 'Sistemas de Informações Georreferenciadas',
			ementa: 'Elementos essenciais de um SIG. Dados espaciais. Projeção de mapas. Captura de dados para SIG. Aquisição, estrutura e análise de dados espaciais. Funções de SIG. Uso de GRASS, IDRISI, ARCINFO.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE507'],
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
		'GE703': {
			code: 'GE703',
			name: 'Geofísica',
			ementa: 'Geofísica geral e aplicada. Aplicações de métodos geofísicos em mapeamento geológico, determinação de feições tectono-estruturais, prospecção mineral, hidrogeologia e estudos ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: ''
		},
		'GE704': {
			code: 'GE704',
			name: 'Estratigrafia',
			ementa: 'Estudo da organização geométrica das rochas sedimentares e de baixo grau metamórfico da crosta terrestre. Análise dos princípios e métodos da lito-, bio- e cronoestratigrafia, da arquitetura deposicional e da Estratigrafia de Sequências aplicadas aos principais sistemas deposicionais. Análise de bacias e relações entre tectônica e sedimentação. Aplicação em campo de todos os métodos estratigráficos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE601', 'GE603'],
			color: ''
		},
		'GE708': {
			code: 'GE708',
			name: 'Geologia de Campo II',
			ementa: 'Treinamento de campo em mapeamento geológico de terrenos com ocorrência de rochas ígneas e metamórficas. Elaboração de mapas e relatórios.',
			semestre: 1,
			vector: {T:1, P:10, L:1, O:0, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE506', 'GE511', 'GE603', 'GE606'],
			color: ''
		},
		'GE802': {
			code: 'GE802',
			name: 'Geotectônica',
			ementa: 'Tectônica de Placas e Tectônica Global. Estudo e caracterização de ambientes geológico-tectônicos. Regimes tectônicos, regime convergente e cinturões de cavalgamento, regime transcorrente e cinturões transcorrentes, regime distensivo e cinturões distensivos, regime intraplaca. Análise de ambientes tectônicos principais no Brasil, América do Sul e África. Neotectônica. Trabalho de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE603', 'GE606'],
			color: ''
		},
		'GE903': {
			code: 'GE903',
			name: 'Geologia Urbana',
			ementa: 'Gestão, supervisão, orientação técnica sobre geologia ambiental. Coleta de dados, planejamento e projeto geológicos do curso e ocupação do solo urbano. Estudo e recuperação ambiental de solos e águas subterrâneas, contaminadas, implantação de aterros de resíduos sólidos e avaliação de impactos ambientais, risco geológico (erosão, inundações, instabilidade de encostas). Cartas geotécnica, planejamento do uso racional de recursos minerais hídricos. Trabalhos de campo e elaboração de relatório referente a casos de tratamento de resíduos, levantamento de contaminação e risco geológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940C9'
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: ''
		},
		'GE706': {
			code: 'GE706',
			name: 'Geologia Histórica e do Brasil',
			ementa: 'Estudo da ordem cronológica dos principais eventos geológicos que afetaram a evolução do planeta, suas causas e reflexos na paleogeografia, com ênfase para os fenômenos que ocorreram no território brasileiro. Trabalho de campo para conhecer exposições de unidades rochosas que refletem a evolução geológica do território brasileiro.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE402', 'GE802'],
			color: ''
		},
		'GE711': {
			code: 'GE711',
			name: 'Geologia de Hidrocarbonetos',
			ementa: 'A disciplina aborda aspectos básicos da dinâmica da Geologia de hidrocarbonetos com ênfase nas jazidas petrolíferas, envolvendo a produção e a acumulação de matéria orgânica, as rochas geradoras, migração, as rochas-reservatório, armadilhas (trapas) e a distribuição das reservas e recursos. São abordados aspectos relativos a caracterização, cálculo e armazenamento em reservatórios naturais. Tópicos relativos à locação, perfuração, instalação, completação, explotação, manutenção e monitoramento de poços também serão abordados no curso.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE603', 'GE704'],
			color: ''
		},
		'GE803': {
			code: 'GE803',
			name: 'Geologia Econômica',
			ementa: 'O curso tem como objetivos principais apresentar: (1) os processos magmáticos, hidrotermais, sedimentares, metamórficos e supergênicos que atuam na concentração de metais e formação de depósitos minerais na crosta terrestre; (2) o arcabouço geológico e as características fundamentais de várias classes de depósitos minerais, enquadrando-os nos seus respectivos ambientes tectônicos; (3) os controles de formação de um determinado depósito mineral e implicações na sua exploração; e (4) as províncias metalogenéticas do Brasil e seus depósitos minerais. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE503', 'GE603', 'GE606'],
			color: ''
		},
		'GE805': {
			code: 'GE805',
			name: 'Hidrogeologia',
			ementa: 'A disciplina visa apresentar os fundamentos da dinâmica das águas subterrâneas, seus princípios, e hidroquímica, visando fazer com que o aluno adquira o conhecimento hidrogeológico, com prática e exercícios. Temas: Ciclo hidrológico; Balanço hídrico, tipos de aquíferos, aquíferos sedimentares e fraturados, parâmetros hidrodinâmicos (porosidade; lei de Darcy; condutividade hidráulica; transmissividade; armazenamento e coeficiente de armazenamento); Potenciometria; Obras de captação; Hidráulica de poços; Hidrogeoquímica e qualidade, contaminação e transporte de massa, hidrogeologia do Brasil; Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: ''
		},
		'GE806': {
			code: 'GE806',
			name: 'Mecânica de Solos e Rochas',
			ementa: 'Constituição, classificação e propriedades dos solos. Compressibilidade e adensamento, Resistência ao cisalhamento e empuxos da terra. Permeabilidade. Propriedades Mecânicas das Rochas. Ensaios de Campo e Laboratório em solos e rocha. Taludes, fundações e aberturas subterrâneas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: ''
		},
		'GE910': {
			code: 'GE910',
			name: 'Geologia de Campo III',
			ementa: 'Treinamento de campo em levantamentos básicos do meio físico, utilizando e integrando os conhecimentos adquiridos em várias disciplinas do curso e objetivando a aplicação dos resultados em mapeamentos geológico, metalogênese e prospecção; planejamento do uso e ocupação do solo, manejo de bacias hidrográficas, planejamento urbano e gestão ambiental, entre outras aplicações.',
			semestre: 1,
			vector: {T:1, P:10, L:1, O:0, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE708'],
			color: ''
		},
		'GE007': {
			code: 'GE007',
			name: 'Estágio Supervisionado',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional, de acordo com as Diretrizes Curriculares Nacionais para os cursos de graduação na área de Geologia. O estágio deve ser realizado junto a empresas credenciadas pela Coordenadoria de Graduação do Instituto de Geociências e pelo Serviço de Apoio ao Estudante (SAE) da UNICAMP.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA440'],
			color: '#D9406E'
		},
		'GE602': {
			code: 'GE602',
			name: 'Economia dos Recursos Minerais e Energéticos',
			ementa: 'Importância dos recursos minerais e energéticos no contexto da economia brasileira e mundial. Escassez de recursos minerais e energéticos, regras de exaustão, produção e consumo de bens minerais, preços e mercados de bens minerais. A pauta brasileira de exportação versus importação. Dotação mineral e desenvolvimento econômico.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#407DD9'
		},
		'GE901': {
			code: 'GE901',
			name: 'Prospecção',
			ementa: 'Estudo das técnicas aplicadas à exploração regional, prospecção, pesquisa e avaliação de recursos minerais. Métodos diretos e indiretos utilizados nas fases de busca a avaliação de jazidas minerais. Discussão das ferramentas quantitativas para estimativa e avaliação de reserva. Análise de custos e otimização de campanhas exploratórias de recursos minerais. Aspectos ambientais relacionados à exploração mineral. Impacto da legislação mineral nas atividades de exploração e produção. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE503', 'GE603', 'GE803'],
			color: ''
		},
		'GE904': {
			code: 'GE904',
			name: 'Geotecnia',
			ementa: 'Conhecimentos sobre os problemas geológicos que afetam as obras de engenharia civil, incluindo o uso de materiais de construção, instabilidade de taludes, erosão e assoreamento. Obras viárias, fundações, barragens, túneis e outras obras subterrâneas, desmonte de rochas. Técnicas de cartografia geotécnica. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['GE806'],
			color: ''
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: ''
		},
		'GE001': {
			code: 'GE001',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Treinamento para executar autonomamente projetos geológicos específicos técnicos ou científicos, procurando aplicar os conhecimentos adquiridos em disciplinas do curso, em escala de detalhe ou regional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480'],
			color: '#D96E40'
		}
	}
};

export default catalogue;
