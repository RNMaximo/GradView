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

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['BT201', 'GE002', 'GE003', 'GE005', 'GE006', 'GE100', 'GE101', 'GE102', 'GE104', 'GE106', 'GE107', 'GE108', 'GE109', 'GE110', 'GE111', 'GE112', 'GE113', 'GE114', 'GE115', 'GE116', 'GE118', 'GE119', 'GE120', 'GE121', 'GE122', 'GE123', 'GE124', 'GE125', 'GE126', 'GE127', 'GE128', 'GE403', 'GE405', 'GE702', 'GE801', 'GE902', 'GE911', 'GE912', 'GE913', 'GE914', 'GE915', 'GE916', 'GF135', 'GF136', 'GF605', 'GM201', 'GM222', 'GM290', 'GN207', 'GN301', 'GT105'],
		},
		'elet-2': {
			credits: 4,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'GE300': {
			code: 'GE300',
			name: 'Mineralogia I',
			ementa: 'Minerais: conceito, classificação, abundância e ambientes de formação. Cristalo-química. Ligações químicas, número de coordenação e poliedro de coordenação. Substituições iônicas: soluções sólidas, isomorfismo e polimorfismo. Composição química, estrutura cristalina e radiação eletromagnética. Propriedades mecânicas: clivagem, fratura, dureza, traço, hábito e densidade. Propriedades óticas (cor, brilho, luminescência), magnéticas e radiotividade. Cristalografia: cela unitária, retículo cristalino, elementos de simetria, sistemas e classes de simetria. Estruturas cristalinas dos minerais.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BAD940',
			obligatory: true
		},
		'GN101': {
			code: 'GN101',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'Esta disciplina apresenta, através de uma perspectiva histórico-comparativa, o debate atual sobre as transformações tecnológicas em curso no nível internacional e suas implicações, tanto para países desenvolvidos como para países latino-americanos. Analisa o desenvolvimento científico e tecnológico desde a primeira Revolução Industrial até os dias de hoje, procurando discutir as relações entre ciência, tecnologia e sociedade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#A0D940',
			obligatory: true
		},
		'GN107': {
			code: 'GN107',
			name: 'Ciência do Sistema Mundo I',
			ementa: 'Definição do objeto da Geografia. Fundamentos teórico-metodológicos para análise do espaço geográfico. Distinção entre espaço natural e espaço geográfico. Técnica e política: as sucessivas transformações do meio geográfico. O processo de planetarização do espaço geográfico. Compartimentação do espaço e indissociabilidade das relações entre lugar, região, território e mundo no atual período histórico. Recontextualização dos conceitos e conteúdos da geografia humana desenvolvidos no processo de escolarização e na universidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D99C40',
			obligatory: true
		},
		'GN111': {
			code: 'GN111',
			name: 'Sistema Terra',
			ementa: 'Conceitos básicos de geologia. Origem do universo e origem do Sistema Solar. Estrutura e composição da Terra. Dinâmica interna do planeta Terra e a tectônica de placas. Materiais terrestres: rochas e minerais. O registro geológico e a escala do tempo geológico. Noções dos processos de interações entre os sistemas terrestres (litosfera, hidrosfera, biosfera, atmosfera e antroposfera). Mapas geológicos e noções básicas de trabalhos de campo em geologia. Sistema Terra e a humanidade.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95A40',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D9408E',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B1D9',
			obligatory: true
		},
		'QG104': {
			code: 'QG104',
			name: 'Química',
			ementa: 'O átomo: forma e energia de orbitais e distribuição dos elétrons. A tabela periódica e propriedades associadas. Ligação química, propriedades associadas, propriedades de mineirais simples. Soluções aquosas: formas de expressar a concentração, pH, constante de equilíbrio. Noções de físico-química: energia, equilíbrio e cinética de processos geológicos. Funções de química orgânica e exemplos relevantes no Sistema Terra.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#86D940',
			obligatory: true
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D970',
			obligatory: true
		},
		'GE207': {
			code: 'GE207',
			name: 'Introdução ao Sensoriamento Remoto e Fotogeologia',
			ementa: 'Definição, histórico e evolução do sensoriamento remoto. Princípios físicos do sensoriamento remoto. O espectro eletromagnético. Características espectrais de materiais naturais e artificiais. Introdução à espectroscopia de reflectância e interpretação de curvas de reflectância espectral. Sistemas sensores. Camêras aerofotogramétricas e fotografias aéreas. Princípios de estereoscopia e interpretação estereoscópica. Princípios de interpretação de fotografias aéreas.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GN111'],
			color: '#D95A40',
			obligatory: true
		},
		'GE406': {
			code: 'GE406',
			name: 'Mineralogia II',
			ementa: 'Princípios de Mineralogia Ótica: Propriedades da luz: polarização, isotropia e anisotropia. O microscópio petrográfico. Propriedades óticas dos minerais sob luz natural e polarizada ao microscópio petrográfico: minerais isotrópicos e anisotrópicos (uniaxiais e biaxiais). Estudo das classes minerais em microscópio petrográfico. Outros métodos analíticos em Mineralogia: Difratometria de raios X, Microscopia Eletrônica de Varredura e Geoquímica Isotópica.',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE300'],
			color: '#BAD940',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
			requisitos: '',
			color: '#D440D9',
			obligatory: true
		},
		'QF331': {
			code: 'QF331',
			name: 'Físico-Química',
			ementa: 'Gás real, energia livre de Gibbs, equilíbrios físico e químico, diagrama de fases, cinética química.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'QG104'],
			color: '#B08D67',
			obligatory: true
		},
		'BD101': {
			code: 'BD101',
			name: 'Biologia',
			ementa: 'Noções básicas de biologia, classificação e ecologia dos seres vivos. Conceitos básicos de evolução e especiação através da seleção natural; aspectos de conservação e manejo do meio ambiente.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#93D940',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#6B40D9',
			obligatory: true
		},
		'GE502': {
			code: 'GE502',
			name: 'Petrografia Sedimentar',
			ementa: 'Estudo dos componentes físicos, químicos e biológicos dos depósitos sedimentares (recentes e antigos), visando à identificação de estruturas, texturas, evidências genéticas e do arranjo espacial, para compreensão da geometria e dinâmica dos corpos estratiformes.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE406'],
			color: '#BAD940',
			obligatory: true
		},
		'GE601': {
			code: 'GE601',
			name: 'Sedimentologia',
			ementa: 'Estudo de descrição e classificação das rochas sedimentares. Análise dos processos que geram as rochas sedimentares através da textura, das estruturas sedimentares e das geometrias das camadas. Conceitos básicos de análise de fácies. Atividade prática no campo de análise sedimentológica.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN111'],
			color: '#D95A40',
			obligatory: true
		},
		'GF303': {
			code: 'GF303',
			name: 'Geomorfologia',
			ementa: 'Estudos das formas de relevo, gênese e evolução. Análise das inter-relações: rocha X solo X clima X relevo, com ênfase nos aspectos tectono-estruturais. Unidades morfoestruturais do globo terrestre. Processos endógenos no modelado do relevo. Teorias e técnicas de mapeamento geomorfológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GN111'],
			color: '#D95A40',
			obligatory: true
		},
		'GF508': {
			code: 'GF508',
			name: 'Pedologia',
			ementa: 'O processo de intemperismo nas diferentes regiões do globo terrestre. Fatores e processos de formação do solo. Principais propriedades físicas e químicas dos solos. Classificações taxonômicas e utilitárias dos solos. Cartografia de solos e suas aplicações em Ciências da Terra. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4056D9',
			obligatory: true
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Aprimoramento e prática de capacidades de leitura instrumental em língua inglesa em textos de gêneros acadêmico e científico. Aprofundamento no uso de estruturas frasais como promotoras da compreensão textual. Práticas de estratégias de leitura. Aplicação de estratégias de leitura para promover a compreensão textual. Leitura de textos digitais. Estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#40D9BF',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#8D79B4',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#8166C0',
			obligatory: true
		},
		'GE402': {
			code: 'GE402',
			name: 'Elementos de Paleontologia',
			ementa: 'Introduzir o aluno no conhecimento e estudo dos fósseis, bem como nos ambientes onde eles ocorrem. Noções básicas de reconhecimento dos principais filos de invertebrados, vertebrados e vegetais encontrados no registro em nível mundial e no Brasil, que auxiliem a Geologia, tanto na interpretação de idade quanto nos aspectos do meio abiótico (paleocologia, paleoclimatologia, etc.). Dar bases para estudos micropaleontológicos e bioestratigráficos, além de treinar os alunos na coleta e interpretação dos fósseis no campo.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: '#D95A40',
			obligatory: true
		},
		'GE407': {
			code: 'GE407',
			name: 'Desenho Geológico',
			ementa: 'Princípios de Geometria Espacial e Descritiva e Aplicações em Geologia. Fundamentos de projeção estereográfica e exercícios práticos de análise de estruturas planares e lineares. Representação espacial de camadas e feições lineares por métodos gráficos e analíticos. Uso de ábacos. Mergulho real e aparente de camadas, profundidade e espessura: real e aparente. Mapas topográficos, geológicos e estruturais. Leitura e análise de mapas geológicos. Construção de perfis geológicos. Exercícios práticos de interpretação de mapas temáticos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['GE207'],
			color: '#D95A40',
			obligatory: true
		},
		'GF503': {
			code: 'GF503',
			name: 'Sociologia',
			ementa: 'Conceitos básicos, fundamentos e constituição da sociologia. Durkheim, Weber e Marx. Comportamento coletivo. Controle e desvio social. Organização social: estrutura, estratificação e mobilidade social. Grupos e Instituições. Mudança social. Política social. Movimentos sociais.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D94067',
			obligatory: true
		},
		'GN105': {
			code: 'GN105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40CCD9',
			obligatory: true
		},
		'GN304': {
			code: 'GN304',
			name: 'Trabalho de Campo',
			ementa: 'Treinamento de campo para entendimento das feições do terreno, dentro de uma visão holística, observando-se as interações de rocha X solo X clima X hidrografia X ocupação humana.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:2, C:6},
			requisitos: ['GN107', 'GN111'],
			color: '#D97B40',
			obligatory: true
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D9408E',
			obligatory: true
		},
		'CV323': {
			code: 'CV323',
			name: 'Topografia',
			ementa: 'Conceitos fundamentais (sistemas de coordenadas, unidades de medidas, plano topográfico local, efeito de curvatura da terra, escalas, introdução, normas NBR 13.133 e NBR 14.144). Planimetria (medições de distâncias e ângulos; taqueometria, topometria, medições eletrônicas de distâncias). Altimetria. Terraço, curvas de nível e locação de canais. Métodos de representação do relevo. Automação topográfica. Terraplanagem. Locação de obras.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['GE207'],
			color: '#D95A40',
			obligatory: true
		},
		'GE503': {
			code: 'GE503',
			name: 'Geoquímica',
			ementa: 'Desenvolvimento histórico da Geoquímica. Abundância cósmica dos elementos, estrutura e composição da geosfera. Química da hidrosfera e atmosfera. A biosfera e os depósitos biogênicos. Conceitos básicos de geoquímica superficial aplicáveis ao entendimento da formação de solos e dos depósitos lateríticos. Paisagens geoquímicas, processos naturais e antrópicos. Aplicações de geoquímica em exploração mineral e em estudos ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE406', 'QF331'],
			color: '#B5B354',
			obligatory: true
		},
		'GE506': {
			code: 'GE506',
			name: 'Petrografia e Petrologia Ígnea',
			ementa: 'Identificação de minerais, estruturas e texturas de rochas ígneas. Fundamentos da geoquímica de elementos maiores, traços e de isótopos. Classificações das rochas ígneas. Estudo do equilíbrio de fases. Ambientes tectônicos de formação das rochas ígneas. Trabalho de campo para visita a afloramentos de rochas ígneas.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE406'],
			color: '#BAD940',
			obligatory: true
		},
		'GE507': {
			code: 'GE507',
			name: 'Sensoriamento Remoto',
			ementa: 'Introdução aos sistemas de sensoriamento remoto orbital multiespectral, hiperespectral e de radar. Interpretação de imagens orbitais pancromáticas, multiespectrais e de radar. Introdução ao processamento digital de imagens de sensoriamento remoto. Aplicações do sensoriamento remoto aéreo e orbital em mapeamento geológico-estrutural, geomorfologia e no estudo do uso e ocupação do solo.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE207'],
			color: '#D95A40',
			obligatory: true
		},
		'GE512': {
			code: 'GE512',
			name: 'Gestão, Governança e Sustentabilidade',
			ementa: 'A evolução do conceito de sustentabilidade e suas implicações para a regulação das atividades econômicas de exploração de recursos naturais, com foco em energia e mineração. Gestão e governança sustentáveis das empresas e instituições nesses setores. Papel da inovação como vetor de desenvolvimento sustentável na exploração de recursos naturais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D997',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GE117': {
			code: 'GE117',
			name: 'Geoquímica Analítica',
			ementa: 'A evolução do pensamento geoquímico versus desenvolvimento das técnicas analíticas. Tipos de amostras e elementos analisados. A interação da radiação eletromagnética com a matéria. Principais técnicas analíticas utilizadas em litogeoquímica, geoquímica ambiental e isotópica. Práticas de coleta de amostras no campo, preparação de amostras, uso de equipamentos e controle de qualidade.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE503'],
			color: '#B5B354',
			obligatory: true
		},
		'GE511': {
			code: 'GE511',
			name: 'Geologia de Campo I',
			ementa: 'Treinamento de campo em mapeamento geológico de sucessões sedimentares em bacias não deformadas. Elaboração de mapas, perfis estratigráficos, seções geológicas e relatórios.',
			semestre: 1,
			vector: {T:1, P:10, L:1, O:0, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE601', 'GN304'],
			color: '#D96B40',
			obligatory: true
		},
		'GE603': {
			code: 'GE603',
			name: 'Geologia Estrutural',
			ementa: 'Princípios e mecanismos de deformação das rochas. Categoriais de análise estrutural: descritiva, cinemática e dinâmica. Arranjos estruturais: acamamento, foliação, lineação, dobras, dobramentos e superpostos, transposição, juntas e fraturas, falhas, zonas de cisalhamento, associações estruturais. Níveis estruturais. Relações entre metamorfismo e deformação; Princípios de microtectônica. Exercícios geométricos, projeção estereográfica, análise estatística de dados estruturais, perfis geológico-estruturais complexos. Trabalhos de campo e elaboração de relatórios.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE407'],
			color: '#D95A40',
			obligatory: true
		},
		'GE606': {
			code: 'GE606',
			name: 'Petrografia e Petrologia Metamórfica',
			ementa: 'Classificação das rochas metamórficas em escalas macroscópicas e microscópicas. Tipos de metamorfismo e seus ambientes tectônicos. Mineralogia e texturas típicas; relações texturais entre minerais; significado das texturas; reações metamórficas. Fatores condicionantes de metamorfismo e conceito de fácies metamórfica. Análise de gráficos de composições químicas dos minerais e rochas e paragêneses metamórficas. Papel de rochas metamórficas na evolução crustal. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:2, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE406'],
			color: '#BAD940',
			obligatory: true
		},
		'GE804': {
			code: 'GE804',
			name: 'Sistemas de Informações Georreferenciadas',
			ementa: 'Elementos essenciais de um SIG. Dados espaciais. Projeção de mapas. Captura de dados para SIG. Aquisição, estrutura e análise de dados espaciais. Funções de SIG. Uso de GRASS, IDRISI, ARCINFO.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE507'],
			color: '#D95A40',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GE703': {
			code: 'GE703',
			name: 'Geofísica',
			ementa: 'Geofísica geral e aplicada. Aplicações de métodos geofísicos em mapeamento geológico, determinação de feições tectono-estruturais, prospecção mineral, hidrogeologia e estudos ambientais.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#8166C0',
			obligatory: true
		},
		'GE704': {
			code: 'GE704',
			name: 'Estratigrafia',
			ementa: 'Estudo da organização geométrica das rochas sedimentares e de baixo grau metamórfico da crosta terrestre. Análise dos princípios e métodos da lito-, bio- e cronoestratigrafia, da arquitetura deposicional e da Estratigrafia de Sequências aplicadas aos principais sistemas deposicionais. Análise de bacias e relações entre tectônica e sedimentação. Aplicação em campo de todos os métodos estratigráficos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE601', 'GE603'],
			color: '#D95A40',
			obligatory: true
		},
		'GE708': {
			code: 'GE708',
			name: 'Geologia de Campo II',
			ementa: 'Treinamento de campo em mapeamento geológico de terrenos com ocorrência de rochas ígneas e metamórficas. Elaboração de mapas e relatórios.',
			semestre: 1,
			vector: {T:1, P:10, L:1, O:0, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE506', 'GE511', 'GE603', 'GE606'],
			color: '#CA9E40',
			obligatory: true
		},
		'GE802': {
			code: 'GE802',
			name: 'Geotectônica',
			ementa: 'Tectônica de Placas e Tectônica Global. Estudo e caracterização de ambientes geológico-tectônicos. Regimes tectônicos, regime convergente e cinturões de cavalgamento, regime transcorrente e cinturões transcorrentes, regime distensivo e cinturões distensivos, regime intraplaca. Análise de ambientes tectônicos principais no Brasil, América do Sul e África. Neotectônica. Trabalho de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE603', 'GE606'],
			color: '#CA9A40',
			obligatory: true
		},
		'GE903': {
			code: 'GE903',
			name: 'Geologia Urbana',
			ementa: 'Gestão, supervisão, orientação técnica sobre geologia ambiental. Coleta de dados, planejamento e projeto geológicos do curso e ocupação do solo urbano. Estudo e recuperação ambiental de solos e águas subterrâneas, contaminadas, implantação de aterros de resíduos sólidos e avaliação de impactos ambientais, risco geológico (erosão, inundações, instabilidade de encostas). Cartas geotécnica, planejamento do uso racional de recursos minerais hídricos. Trabalhos de campo e elaboração de relatório referente a casos de tratamento de resíduos, levantamento de contaminação e risco geológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GE706': {
			code: 'GE706',
			name: 'Geologia Histórica e do Brasil',
			ementa: 'Estudo da ordem cronológica dos principais eventos geológicos que afetaram a evolução do planeta, suas causas e reflexos na paleogeografia, com ênfase para os fenômenos que ocorreram no território brasileiro. Trabalho de campo para conhecer exposições de unidades rochosas que refletem a evolução geológica do território brasileiro.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE402', 'GE802'],
			color: '#D27A40',
			obligatory: true
		},
		'GE711': {
			code: 'GE711',
			name: 'Geologia de Hidrocarbonetos',
			ementa: 'A disciplina aborda aspectos básicos da dinâmica da Geologia de hidrocarbonetos com ênfase nas jazidas petrolíferas, envolvendo a produção e a acumulação de matéria orgânica, as rochas geradoras, migração, as rochas-reservatório, armadilhas (trapas) e a distribuição das reservas e recursos. São abordados aspectos relativos a caracterização, cálculo e armazenamento em reservatórios naturais. Tópicos relativos à locação, perfuração, instalação, completação, explotação, manutenção e monitoramento de poços também serão abordados no curso.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE603', 'GE704'],
			color: '#D95A40',
			obligatory: true
		},
		'GE803': {
			code: 'GE803',
			name: 'Geologia Econômica',
			ementa: 'O curso tem como objetivos principais apresentar: (1) os processos magmáticos, hidrotermais, sedimentares, metamórficos e supergênicos que atuam na concentração de metais e formação de depósitos minerais na crosta terrestre; (2) o arcabouço geológico e as características fundamentais de várias classes de depósitos minerais, enquadrando-os nos seus respectivos ambientes tectônicos; (3) os controles de formação de um determinado depósito mineral e implicações na sua exploração; e (4) as províncias metalogenéticas do Brasil e seus depósitos minerais. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE503', 'GE603', 'GE606'],
			color: '#C3A247',
			obligatory: true
		},
		'GE805': {
			code: 'GE805',
			name: 'Hidrogeologia',
			ementa: 'A disciplina visa apresentar os fundamentos da dinâmica das águas subterrâneas, seus princípios, e hidroquímica, visando fazer com que o aluno adquira o conhecimento hidrogeológico, com prática e exercícios. Temas: Ciclo hidrológico; Balanço hídrico, tipos de aquíferos, aquíferos sedimentares e fraturados, parâmetros hidrodinâmicos (porosidade; lei de Darcy; condutividade hidráulica; transmissividade; armazenamento e coeficiente de armazenamento); Potenciometria; Obras de captação; Hidráulica de poços; Hidrogeoquímica e qualidade, contaminação e transporte de massa, hidrogeologia do Brasil; Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: '#D95A40',
			obligatory: true
		},
		'GE806': {
			code: 'GE806',
			name: 'Mecânica de Solos e Rochas',
			ementa: 'Constituição, classificação e propriedades dos solos. Compressibilidade e adensamento, Resistência ao cisalhamento e empuxos da terra. Permeabilidade. Propriedades Mecânicas das Rochas. Ensaios de Campo e Laboratório em solos e rocha. Taludes, fundações e aberturas subterrâneas. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE601'],
			color: '#D95A40',
			obligatory: true
		},
		'GE910': {
			code: 'GE910',
			name: 'Geologia de Campo III',
			ementa: 'Treinamento de campo em levantamentos básicos do meio físico, utilizando e integrando os conhecimentos adquiridos em várias disciplinas do curso e objetivando a aplicação dos resultados em mapeamentos geológico, metalogênese e prospecção; planejamento do uso e ocupação do solo, manejo de bacias hidrográficas, planejamento urbano e gestão ambiental, entre outras aplicações.',
			semestre: 1,
			vector: {T:1, P:10, L:1, O:0, D:0, HS:12, SL:2, C:12},
			requisitos: ['GE708'],
			color: '#CA9E40',
			obligatory: true
		},
		'GE007': {
			code: 'GE007',
			name: 'Estágio Supervisionado',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional, de acordo com as Diretrizes Curriculares Nacionais para os cursos de graduação na área de Geologia. O estágio deve ser realizado junto a empresas credenciadas pela Coordenadoria de Graduação do Instituto de Geociências e pelo Serviço de Apoio ao Estudante (SAE) da UNICAMP.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA440'],
			color: '#5140D9',
			obligatory: true
		},
		'GE602': {
			code: 'GE602',
			name: 'Economia dos Recursos Minerais e Energéticos',
			ementa: 'Importância dos recursos minerais e energéticos no contexto da economia brasileira e mundial. Escassez de recursos minerais e energéticos, regras de exaustão, produção e consumo de bens minerais, preços e mercados de bens minerais. A pauta brasileira de exportação versus importação. Dotação mineral e desenvolvimento econômico.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AD40D9',
			obligatory: true
		},
		'GE901': {
			code: 'GE901',
			name: 'Prospecção',
			ementa: 'Estudo das técnicas aplicadas à exploração regional, prospecção, pesquisa e avaliação de recursos minerais. Métodos diretos e indiretos utilizados nas fases de busca a avaliação de jazidas minerais. Discussão das ferramentas quantitativas para estimativa e avaliação de reserva. Análise de custos e otimização de campanhas exploratórias de recursos minerais. Aspectos ambientais relacionados à exploração mineral. Impacto da legislação mineral nas atividades de exploração e produção. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ['GE503', 'GE603', 'GE803'],
			color: '#C69049',
			obligatory: true
		},
		'GE904': {
			code: 'GE904',
			name: 'Geotecnia',
			ementa: 'Conhecimentos sobre os problemas geológicos que afetam as obras de engenharia civil, incluindo o uso de materiais de construção, instabilidade de taludes, erosão e assoreamento. Obras viárias, fundações, barragens, túneis e outras obras subterrâneas, desmonte de rochas. Técnicas de cartografia geotécnica. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['GE806'],
			color: '#D95A40',
			obligatory: true
		},
		'ELET09': {
			code: 'ELET09',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'GE001': {
			code: 'GE001',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Treinamento para executar autonomamente projetos geológicos específicos técnicos ou científicos, procurando aplicar os conhecimentos adquiridos em disciplinas do curso, em escala de detalhe ou regional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:4, D:0, HS:12, SL:0, C:12},
			requisitos: ['AA480'],
			color: '#D9C340',
			obligatory: true
		},
		'BT201': {
			code: 'BT201',
			name: 'Biogeografia',
			ementa: 'Biogeografia: conceito, bases teóricas, a perspectiva ecológica e a histórica. A Ecologia na interpretação biogeográfica: variação geográfica no ambiente físico; os limites da distribuição das espécies. Biosfera, fluxo de energia e ciclos biogeoquímicos. Métodos e ferramentas para estudos biogeográficos. Fitogeografia do Brasil. Biomas do mundo. Elaboração de projetos de pesquisa em Biogeografia. Elaboração de relatórios e seminários em Biogeografia. Produção e análise de textos em língua portuguesa. Utilização de tecnologia da informação e comunicação.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D948',
			obligatory: false
		},
		'GE002': {
			code: 'GE002',
			name: 'Estágio Supervisionado I',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4097D9',
			obligatory: false
		},
		'GE003': {
			code: 'GE003',
			name: 'Estágio Supervisionado II',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D9D040',
			obligatory: false
		},
		'GE005': {
			code: 'GE005',
			name: 'Iniciação Científica I',
			ementa: 'Introdução à abordagem científica relacionada à pesquisa de Geologia. Teorias e hipóteses. Levantamentos de dados. Aplicação de técnicas de pesquisa. Análise de resultados. Elaboração de relatórios de pesquisa e outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D940A9',
			obligatory: false
		},
		'GE006': {
			code: 'GE006',
			name: 'Iniciação Científica II',
			ementa: 'Introdução à abordagem científica relacionada à pesquisa de Geologia. Teorias e hipóteses. Levantamentos de dados. Aplicação de técnicas de pesquisa. Análise de resultados. Elaboração de relatórios de pesquisa e outras formas de divulgação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D96740',
			obligatory: false
		},
		'GE100': {
			code: 'GE100',
			name: 'Estratégia e Gestão Organizacional',
			ementa: 'Discussão das teorias emergentes e de construção de um novo paradigma de gestão organizacional que suportam o debate atual sobre a reestruturação estratégica, cultura e mudança organizacional.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#6BD940',
			obligatory: false
		},
		'GE101': {
			code: 'GE101',
			name: 'Geoestatística',
			ementa: 'Conceito de variáveis espaciais (regionalizadas). Aplicação da geoestatística em geociências. Análise variográfica: modelos de anisotropia, estruturas imbricadas, efeito pepita e modelagem global de variogramas. Estimativa de recursos: krigagem simples, ordinária, com deriva. Modelo linear multivariado e cokrigagem.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5ED940',
			obligatory: false
		},
		'GE102': {
			code: 'GE102',
			name: 'Análise Estatística de Dados Geológicos',
			ementa: 'Aplicação de métodos estatísticos univariantes e multivariantes a problemas geológicos, com distribuição aleatória e regionalizada. Estudos de variabilidade. Análise de regressão e correlação linear. Introdução à Geoestatística.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#C740D9',
			obligatory: false
		},
		'GE104': {
			code: 'GE104',
			name: 'Metamorfismo de Alto Grau e Evolução Crustal',
			ementa: 'Características do metamorfismo de alto grau: paragêneses mineralógicas, reações metamórficas e condições físico-químicas atuantes. Exemplos de terrenos típicos de alto grau e sua formação. O papel do metamorfismo na evolução crustal através de processos tectono-metamórficos, magmáticos e ultrametamorfismo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D98140',
			obligatory: false
		},
		'GE106': {
			code: 'GE106',
			name: 'Evolução Metalogenética',
			ementa: 'Conceitos básicos em metalogênese. Evolução das teorias metalogenéticas. Metais através da história geológica. Contextos geológicos nas principais épocas e províncias metalogenéticas. Cartografia metalogenética. Metalogênese exploração mineral.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D956',
			obligatory: false
		},
		'GE107': {
			code: 'GE107',
			name: 'Petrografia de Minérios',
			ementa: 'Prática de laboratório incluindo a observação das propriedades dos minerais de minérios à luz refletida e transmitida. Preparação de amostras. Identificação de fases e texturas minerais mais comuns. Estudo de paragêneses e condições de formação de minérios. Aplicação da petrografia de minérios em tecnologia mineral e ambiental.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#44D940',
			obligatory: false
		},
		'GE108': {
			code: 'GE108',
			name: 'Geoquímica Ambiental',
			ementa: 'Objeto da geoquímica ambiental. Anomalia geoquímica, background natural e ação antrópica. Fontes de elementos tóxicos. Geoquímica de águas, solos e sedimentos. Elementos de biogeoquímica. Monitoramento ambiental e recuperação de áreas degradadas. Técnicas de amostragem.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4048D9',
			obligatory: false
		},
		'GE109': {
			code: 'GE109',
			name: 'Inclusões Fluidas',
			ementa: 'Petrografia de inclusões fluidas: tipos e cronologias. Microtermometria, espectroscopia Raman e fundamentos teóricos de mudanças de fase no sistema C-O-H-N-S-sais. Interpretação dos dados microtermométricos: composição química, salinidade, densidade, pressão, temperatura e evolução de fluidos em ambientes geológicos. Aplicação das inclusões fluidas em modelos genéticos de mineralizações e na exploração mineral.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9405A',
			obligatory: false
		},
		'GE110': {
			code: 'GE110',
			name: 'Indústria dos Minerais Não Metálicos',
			ementa: 'Análise dos principais minerais não-metálicos. Ocorrência, extração, processamento e mercadologia. Organização industrial. Mercados nacional e internacional.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D94081',
			obligatory: false
		},
		'GE111': {
			code: 'GE111',
			name: 'Depósitos Lateríticos',
			ementa: 'Laterização e formação de perfis lateríticos. Depósitos minerais formados por laterização: Al, Fe, Mi, Mn, Au, fosfatos, outros: caracterização, gênese, distribuição no Brasil e no mundo, principais depósitos brasileiros.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8640D9',
			obligatory: false
		},
		'GE112': {
			code: 'GE112',
			name: 'Geocronologia e Geologia Isotópica',
			ementa: 'Os métodos de datação radiométrica principais e aplicações da geologia isotópica em petrogênese, jazidas minerais e ciências ambientais.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#79D940',
			obligatory: false
		},
		'GE113': {
			code: 'GE113',
			name: 'Engenharia Econômica de Recursos Minerais',
			ementa: 'Noções básicas sobre a indústria mineral. Métodos de avaliação econômica de jazidas minerais. Dinâmica de negócios na indústria mineral. Escolha da estratégia competitiva. Noções básicas sobre a atividade empreendedora e organização empresarial. Avaliação global de um projeto de mineração.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#51D940',
			obligatory: false
		},
		'GE114': {
			code: 'GE114',
			name: 'Indústria dos Minerais Metálicos',
			ementa: 'Análise dos principais minerais metálicos. Ocorrência, extração, processamento e mercadologia. Organização industrial. Mercados nacional e internacional.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#BA40D9',
			obligatory: false
		},
		'GE115': {
			code: 'GE115',
			name: 'Técnicas de Microanálise Eletrônica',
			ementa: 'Princípios básicos das técnicas de microanálise eletrônica e suas aplicações em geologia. Microscopia eletrônica de varredura, microssonda eletrônica e iônica. Preparação de amostras, práticas de laboratório e apresentação dos resultados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9404D',
			obligatory: false
		},
		'GE116': {
			code: 'GE116',
			name: 'Política e Administração de Recursos Petrolíferos',
			ementa: 'Evolução da indústria de petróleo mundial. Política de petróleo no Brasil. Modalidades de acordos de exploração e produção de petróleo. Acordo de petróleo e meio ambiente. Legislação e regulamentação do setor de petróleo e meio ambiente. Legislação e regulamentação do setor de petróleo do Brasil. Recursos petrolíferos do Brasil.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#407DD9',
			obligatory: false
		},
		'GE118': {
			code: 'GE118',
			name: 'Planejamento de Recursos Minerais',
			ementa: 'Critérios geológicos, econômicos, políticos e jurídicos para o planejamento sobre o uso dos recursos minerais. Importância dos recursos minerais para a sociedade. Instrumentos de planejamento e os recursos minerais. Planos diretores de mineração.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7940D9',
			obligatory: false
		},
		'GE119': {
			code: 'GE119',
			name: 'Greenstone Belts',
			ementa: 'Definições básicas. Características petrográficas, petrológicas, geoquímicas e estruturais de seus contribuintes. Estratigrafia e evolução dos terrenos granito-greenstone do Canadá, Austrália, África, Índia e Brasil. Importância metalogenética dos greenstone belts.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D9409C',
			obligatory: false
		},
		'GE120': {
			code: 'GE120',
			name: 'Geofísica-Sísmica',
			ementa: 'Fundamentos do método sísmico. Elasticidade. Equação da onda. Reflexão e transmissão de ondas em interfaces. Aquisição, processamento e interpretação de dados sísmicos. Aplicações à indústria de petróleo e geotecnia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D4D940',
			obligatory: false
		},
		'GE121': {
			code: 'GE121',
			name: 'Mineração e Meio Ambiente',
			ementa: 'A mineração como atividade de aproveitamento de recursos ambientais. Consumo de produtos minerais. Princípios de conservação e gestão ambiental. Referencial teórico. Impactos ambientais da mineração. Ferramentas de gestão ambiental.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D9B1',
			obligatory: false
		},
		'GE122': {
			code: 'GE122',
			name: 'Tópicos Especiais em Geologia',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#A040D9',
			obligatory: false
		},
		'GE123': {
			code: 'GE123',
			name: 'Tópicos Avançados em Geologia',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:3, D:0, HS:5, SL:2, C:5},
			requisitos: ['AA200'],
			color: '#C7D940',
			obligatory: false
		},
		'GE124': {
			code: 'GE124',
			name: 'Tópicos Especiais em Geologia I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40BFD9',
			obligatory: false
		},
		'GE125': {
			code: 'GE125',
			name: 'Tópicos Especiais em Geologia II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9CC',
			obligatory: false
		},
		'GE126': {
			code: 'GE126',
			name: 'Tópicos Avançados em Geologia I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40A4D9',
			obligatory: false
		},
		'GE127': {
			code: 'GE127',
			name: 'Tópicos Avançados em Geologia II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940D0',
			obligatory: false
		},
		'GE128': {
			code: 'GE128',
			name: 'Remediação de Áreas Contaminadas',
			ementa: 'Conceitos básicos relacionados com a remediação de áreas contaminadas. Tecnologias de remediação de solos e águas subterrâneas contaminadas. Modelagem hidrogeoquímica. Aspectos legais relacionados a áreas contaminadas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D963',
			obligatory: false
		},
		'GE403': {
			code: 'GE403',
			name: 'Micropalentologia e Palinologia',
			ementa: 'Conceitos básicos de sistemática de microfósseis e palinomorfos (polens, esporos e dinoflagelados) e suas aplicações para bioestratigrafia, paleoclimatologia e paleoecologia. Treinamento no reconhecimento de microfósseis e nas técnicas de preparação para estudo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D97440',
			obligatory: false
		},
		'GE405': {
			code: 'GE405',
			name: 'Direito dos Recursos Naturais',
			ementa: 'Conceitos básicos sobre direito e recursos naturais. Código de Mineração, Código Florestal, Código das Águas. Legislações mineral, paramineral e ambiental e os impactos nas políticas públicas setoriais. Administração pública, recursos naturais e a compatibilização com o meio ambiente. Atuação profissional e legislação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9B640',
			obligatory: false
		},
		'GE702': {
			code: 'GE702',
			name: 'História e Teoria das Organizações',
			ementa: 'Abordagem histórica e comparativa da evolução das principais teorias de administração e gestão organizacional e suas relações com o pensamento econômico e sociológico.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D9A940',
			obligatory: false
		},
		'GE801': {
			code: 'GE801',
			name: 'História das Ciências Naturais',
			ementa: 'O Renascimento e seu impacto na cosmovisão: a releitura do mundo natural. A Revolução Científica e o nascimento da ciência moderna: a Filosofia Natural, a História Natural e a especialização das disciplinas científicas. A 1a. Revolução Industrial, o Naturalismo científico e os viajantes. Colecionismo, Gabinetes e Museus. O processo de institucionalização e profissionalização das ciências naturais com ênfase no Brasil e América Latina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94D40',
			obligatory: false
		},
		'GE902': {
			code: 'GE902',
			name: 'Geologia de Minas, Lavra e Tratamento de Minério',
			ementa: 'Conhecimentos técnicos geológicos utilizados no acompanhamento das operações de desenvolvimento das minas, técnicas de lavra e tratamento de minérios. Planejamento e gerenciamento ambiental relacionado à lavra e beneficiamento de minérios.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['GE511', 'GE601', 'GE603', 'GE806'],
			color: '#D95E40',
			obligatory: false
		},
		'GE911': {
			code: 'GE911',
			name: 'Comunicação Científica em Ciências da Terra',
			ementa: 'Fundamentos de editoração de artigos científicos. Regras básicas de redação e ilustração. Padronização técnica de artigos, relatórios e textos de divulgação. Noções básicas de operação de programas de ilustração técnica. Internet e Ciências da Terra. Evolução histórica dos recursos didáticos em Geociências. Intercâmbio de formatos de arquivo e utilização de ilustrações, diagramas e mapas no ensino. Exercícios de laboratório e gabinete.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:1, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#4440D9',
			obligatory: false
		},
		'GE912': {
			code: 'GE912',
			name: 'Mapas e Linguagem Visual no Ensino de Ciências Naturais',
			ementa: 'Mapas e linguagem visual como ferramentas das ciências naturais. Emergência das representações cartográficas e evolução histórica da representação espacial. Princípios metodológicos da elaboração de mapas geológicos e mapas temáticos. Aquisição de dados espaciais no campo e representação da informação científica por meio de geoinformática. Problemas de escala e técnicas de representação. Questões interdisciplinares de educação em ciências relacionadas a mapas. Exercícios de laboratório e gabinete.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40D98A',
			obligatory: false
		},
		'GE913': {
			code: 'GE913',
			name: 'Ciências Naturais e Ambiente',
			ementa: 'Abordagem epistemológica que busca a construção do entendimento de como as ciências naturais integram-se do ponto de vista de seus objetos de estudo e métodos quando se estuda o ambiente, seja em suas inter-relações no presente - processos e fenômenos atuais, seja em sua evolução ao longo da história da Terra. Natureza do conhecimento geocientífico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: ['AA200'],
			color: '#9340D9',
			obligatory: false
		},
		'GE914': {
			code: 'GE914',
			name: 'Ciência e Linguagens',
			ementa: 'Relações entre linguagem / retórica / discurso e a produção e circulação de conhecimentos científico-tecnológicos; interações discursivas e enunciativas em sala de aula; linguagem e cognição; linguagem e epistemologia; leituras da ciência na escola; linguagens e geociências.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:1, HS:4, SL:2, C:3},
			requisitos: '',
			color: '#D98E40',
			obligatory: false
		},
		'GE915': {
			code: 'GE915',
			name: 'Educação, Ciência, Tecnologia e Sociedade',
			ementa: 'Abordagem CTSA (Ciência, Tecnologia, Sociedade e Ambiente) na Educação básica: princípios pressupostos e elaboração de estratégias de ensino. O papel das Geociências em processos de tomada de decisão e posicionamentos em questões sócio-político-ambientais: impacto ambiental, saúde, riscos naturais e tecnologia para enfrentar esses problemas. Estudos de caso de questões socioambientais envolvendo conhecimentos estudos da Terra.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#40D9D9',
			obligatory: false
		},
		'GE916': {
			code: 'GE916',
			name: 'Ensino de Ciências da Terra e do Ambiente',
			ementa: 'Importância do ensino de Ciências da Terra para o ensino básico. Modelos e dificuldades comuns de ensino e aprendizagem. Importância e perspectiva cognitiva, ambiental e política do ensino de ciclo da água. Papel estratégico do ciclo da água entre temas ensinados em ciências naturais, experimentais e tecnológicas. Inclui levantamentos das condições de ensino de problemas ambientais relativos à circulação da água.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#ADD940',
			obligatory: false
		},
		'GF135': {
			code: 'GF135',
			name: 'Antropologia da Moral e da Ética',
			ementa: 'Economia moral e ética em processos sociais contemporâneos. Antropologia da moral e da ética. Dimensões morais do estado, da ética, da ciência e da tecnologia. Processos de estruturação e de subjetivação do e no Estado, suas variações tecnológicas e formas de vida social.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#4070D9',
			obligatory: false
		},
		'GF136': {
			code: 'GF136',
			name: 'Cartografia Sistemática',
			ementa: 'Introdução à Cartografia. Princípios de Geodésia. Escalas. Sistemas de Coordenadas.Projeções Cartográficas. Sistema Cartográfico Nacional (SCN). Uso de Cartas, Mapas ePlantas em Ciências da Terra. Sistema de Posicionamento Global (GPS). Elementos deTopografia. Cartografia Digital. Trabalhos de campo e elaboração de relatório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#408AD9',
			obligatory: false
		},
		'GF605': {
			code: 'GF605',
			name: 'Geomorfologia do Brasil',
			ementa: 'O relevo brasileiro: os grandes conjuntos geomorfológicos brasileiro. Influências das oscilações climáticas no quaternário. O modelado do Estado de São Paulo: compartimentos geomorfológicos paulistas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#D940C3',
			obligatory: false
		},
		'GM201': {
			code: 'GM201',
			name: 'Geologia e Recursos Minerais',
			ementa: 'A Geologia aplicada à produção mineral. Minerais, rochas e solos. Recursos e reservas minerais. Exploração, produção e consumo de bens minerais. Aspectos políticos, econômicos, sociais e ambientais da mineração. Geologia e recursos minerais do Brasil.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['AA200'],
			color: '#4063D9',
			obligatory: false
		},
		'GM222': {
			code: 'GM222',
			name: 'Direito Ambiental',
			ementa: 'Conceitos básicos sobre direito e ciências ambientais. Legislação ambiental e seus impactos sobre as políticas públicas setoriais. Direito ambiental comparado. A administração pública e o meio ambiente. Crimes contra a natureza e sua previsão legal no direito brasileiro.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D9A4',
			obligatory: false
		},
		'GM290': {
			code: 'GM290',
			name: 'Elementos de Geofísica',
			ementa: 'Introdução. A gravidade da Terra. O magnetismo terrestre. Geofísica nuclear. Calor terrestre. Sismologia. Geodinâmica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D97D',
			obligatory: false
		},
		'GN207': {
			code: 'GN207',
			name: 'Introdução ao Sensoriamento Remoto',
			ementa: 'Definição, histórico e evolução do sensoriamento remoto. Princípios físicos do sensoriamento remoto. O espectro eletromagnético. Características espectrais de materiais naturais e artificiais. Introdução à espectroscopia de reflectância e interpretação de curvas de reflectância espectral. Sistemas sensores. Camêras aerofotogramétricas e fotografias aéreas. Princípios de estereoscopia e interpretação estereoscópica. Princípios de interpretação de fotografias aéreas.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94074',
			obligatory: false
		},
		'GN301': {
			code: 'GN301',
			name: 'História das Teorias Econômicas',
			ementa: 'Elementos de economia. Análise do surgimento e da evolução da Economia Política como ramo do conhecimento científico. As principais escolas do pensamento econômico e suas respectivas contribuições ao entendimento do mundo em que vivemos. Disciplinas propedêuticas para o estudo da Economia dos Recursos Naturais.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D940B6',
			obligatory: false
		},
		'GT105': {
			code: 'GT105',
			name: 'Teorias e Métodos da Ciência',
			ementa: 'A emergência da ciência moderna e seu processo de institucionalização. As características da prática científica e do conhecimento produzido pelas ciências. A disputa pela demarcação de fronteiras entre conhecimento científico e outros modos de conhecer e explicar o mundo. Relações e dissensões entre saberes tradicionais e saberes científicos.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#5E40D9',
			obligatory: false
		}
	}
};

export default catalogue;
