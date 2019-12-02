const catalogue = {
	totalCredits: 162,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EB101', 'ST103', 'ST112', 'ST114', 'ST216', 'ST362']
		},
		'sem-2': {
			id: '2',
			subjects: ['EB103', 'ST211', 'ST213', 'ST215', 'ST304']
		},
		'sem-3': {
			id: '3',
			subjects: ['EB203', 'ST210', 'ST301', 'ST303', 'ST309']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST401', 'ST403', 'ST410', 'ST420', 'ST423']
		},
		'sem-5': {
			id: '5',
			subjects: ['ST515', 'ST525', 'ST526', 'ST527', 'ST529', 'ST726']
		},
		'sem-6': {
			id: '6',
			subjects: ['ST008', 'ST306', 'ST618', 'ST625', 'ST626', 'ST628', 'ST728']
		},
		'sem-7': {
			id: '7',
			subjects: ['ST722', 'ST723', 'ST729', 'ELET07']
		}
	},

	subjects: {
		'EB101': {
			code: 'EB101',
			name: 'Cálculo I',
			ementa: 'Funções reais de uma variável real. Limite. Continuidade. Derivada. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40D940'
		},
		'ST103': {
			code: 'ST103',
			name: 'Desenho Técnico',
			ementa: 'Noções fundamentais para o desenho técnico. Teoria das projeções ortogonais. Aplicação das projeções nos desenhos de arquitetura. Perspectivas axiométrica e isométrica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: '',
			color: '#8C40D9'
		},
		'ST112': {
			code: 'ST112',
			name: 'Introdução à Construção de Edifícios',
			ementa: 'Estudo de assuntos relevantes na área de Construção de Edifícios.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9D9'
		},
		'ST114': {
			code: 'ST114',
			name: 'Fundamentos de Química Aplicada a Construção Civil',
			ementa: 'Revisão de conceitos básicos de Química. Propriedades Químicas de Materiais utilizados em Construção Civil. Reações Químicas. Equilíbrio Químico. Estudo de Casos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9408C'
		},
		'ST216': {
			code: 'ST216',
			name: 'Geologia Geral',
			ementa: 'Conceitos básicos de geologia. Estrutura e composição da Terra. Tectônica de placas. Rochas e minerais. Processos desenvolvidos nas interfaces do Sistema Terra ao longo do tempo. Circulação atmosférica e clima. Noções de geologia estrutural e de engenharia. Mapas e representação gráfica de processos. Materiais terrestre como fonte de matéria-prima na construção civil. Geologia do Brasil e de São Paulo.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040'
		},
		'ST362': {
			code: 'ST362',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Vetores no R2 e no R3. Produto Escalar e Vetorial. A Reta. O Plano. Distâncias. Cônicas e Quádricas. Dependência e Independência Linear. Espaço Vetorial Real. Transformações Lineares. Autovalores e Autovetores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4040D9'
		},
		'EB103': {
			code: 'EB103',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940'
		},
		'ST211': {
			code: 'ST211',
			name: 'Estatística',
			ementa: 'Estatística descritiva. Probabilidade. Distribuições: Binomial, Poisson e Normal. Amostragem Estimação. Testes de hipótese. Intervalos de confiança. Regressão. Correlação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D98C'
		},
		'ST213': {
			code: 'ST213',
			name: 'Desenho Assistido por Computador',
			ementa: 'Introdução à computação gráfica. Representação gráfica em 2D. Desenho para construção civil.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST103'],
			color: ''
		},
		'ST215': {
			code: 'ST215',
			name: 'Mecânica Geral',
			ementa: 'Estática, conceitos fundamentais. Força. Momento de uma força. Vínculos e ligações. Grau de mobilidade. Trabalhos virtuais. Equilíbrio de fios, catenária e cabos parabólicos. Cinemática. Movimento, velocidade, aceleração. Dinâmica. Conservação de energia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*ST362'],
			color: ''
		},
		'ST304': {
			code: 'ST304',
			name: 'Materiais de Construção Civil I',
			ementa: 'Normas. Agregados. Aglomerantes. Ensaios em Laboratório.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D9'
		},
		'EB203': {
			code: 'EB203',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis de termodinâmica; teoria cinética dos gases.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB103'],
			color: ''
		},
		'ST210': {
			code: 'ST210',
			name: 'Eletrotécnica Aplicada',
			ementa: 'Conceitos de eletrostática. Eletrodinâmica. Geradores. Resistores. Medidas de grandezas elétricas. Leis de Kirchhoff. Campos magnéticos. Tensões e correntes alternadas. Transformadores. Motores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EB101', 'EB103'],
			color: ''
		},
		'ST301': {
			code: 'ST301',
			name: 'Topografia I',
			ementa: 'Conceitos fundamentais. Fundamentos aerofotogramétricos e fotointerpretação. Cartas topográficas e sistemas de projeção. Planimetria e altimetria: Elementos básicos de geodésia. Introdução ao Sistema de Posicionamento Global (GPS). Aplicativos computacionais.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST103'],
			color: ''
		},
		'ST303': {
			code: 'ST303',
			name: 'Hidrotécnica I',
			ementa: 'Fluido. Lei de Viscosidade de Newton. Estática dos fluidos. Manometria. Forças sobre superfícies planas e curvas. Escoamentos dos fluídos. Teorema de Reynolds. Equação da continuidade. Equação da quantidade de movimento. Equação da energia. Análise dimensional e semelhança.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*EB103'],
			color: ''
		},
		'ST309': {
			code: 'ST309',
			name: 'Resistência dos Materiais I',
			ementa: 'Vinculação das estruturas, definições e considerações gerais. Graus de mobilidade e classificação das estruturas. Esforços solicitantes e relações diferenciais. Diagramas de esforços solicitantes. Vigas isostáticas, pórticos e vigas Gerber. Momentos de 1a. e 2a. ordem, centro de gravidade e momentos de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EB101', '*ST215'],
			color: ''
		},
		'ST401': {
			code: 'ST401',
			name: 'Topografia II',
			ementa: 'Sistema de Posicionamento Global (GPS) aplicado. Normas e procedimentos técnicos, analíticos e práticos de georreferenciamento. Processamento de dados georreferenciados. Sensoriamento remoto. Cadastramento de áreas urbanas. Cadastramento de áreas rurais e áreas de preservação ambiental. Demarcação de obras civis: teoria e prática.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST301'],
			color: ''
		},
		'ST403': {
			code: 'ST403',
			name: 'Hidrotécnica II',
			ementa: 'Equação da Energia. Perdas distribuídas. Perdas localizadas. Instalação de recalque. Curva do sistema. Bombas. Curvas Características. Associação de bombas. Escolha de bombas. Medidores de fluidos: Pressão e Vazão.',
			semestre: 1,
			vector: {T:2, P:1, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST303'],
			color: ''
		},
		'ST410': {
			code: 'ST410',
			name: 'Mecânica dos Solos I',
			ementa: 'Propriedades e índices. Identificação tactil-visual. Técnicas de amostragem, ensaios e classificação dos solos. Investigação do subsolo. Permeabilidade, compacidade, limites de consistência. Ensaios e equipamentos de laboratório. Ensaios de controle de compactação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST216'],
			color: ''
		},
		'ST420': {
			code: 'ST420',
			name: 'Materiais de Construção Civil II',
			ementa: 'Concreto de cimento Portland. Aço para concreto armado. Fios e cordoalhas para concreto protendido. Ensaios em laboratórios.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST304'],
			color: ''
		},
		'ST423': {
			code: 'ST423',
			name: 'Resistência dos Materiais II',
			ementa: 'Cargas axiais e tangenciais. Torção em barras de secção circular. Tensões em vigas, flexão simples, composta e oblíqua. Estados de tensão. Circulo de Mohr. Conceito de polo. Combinação de esforços. Critérios de resistência.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST309'],
			color: ''
		},
		'ST515': {
			code: 'ST515',
			name: 'Tecnologia da Construção de Edifícios I',
			ementa: 'Implantação da construção: reconhecimento do terreno, topografia do terreno, interferências, restrições e responsabilidades legais, sondagens, locação da construção. Movimento de terra: terraplenagem, escavação manual. Fundações: definições, fundações rasas, fundações profundas. Concreto: condições de recepção e armazenamento, transporte lançamento, vibração e cura do concreto. Formas: quantificação, reaproveitamento, escoamento. Aço: dobramentos, tabelas de ferros, substituição de tipos e bitolas. Concreto aparente: condições e execução. Gestão da qualidade em obras.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST420'],
			color: ''
		},
		'ST525': {
			code: 'ST525',
			name: 'Instalações Prediais Elétricas',
			ementa: 'Planejamento de uma instalação elétrica. Marcação de pontos. Traçado de tubulação. Dimensionamento de fios e tubulações. Dispositivos de proteção de circuitos. Dispositivos de controle dos circuitos. Luminotécnica. Quadros de distribuição. Cabos de entrada. Instalações de pára-raios e redes telefônicas. Projeto elétrico completo de um edifício.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST210'],
			color: ''
		},
		'ST526': {
			code: 'ST526',
			name: 'Estática das Estruturas',
			ementa: 'Treliças. Processos de equilíbrio dos nós, Ritter e Cremona. Flechas e contra flechas em vigas. Equação da linha elástica. Flambagem. Cisalhamento em rebites e parafusos. Vigas hiperestáticas, resolução pelo processo de Cross. Coeficientes relativos à forma, cargas e condições de extremidades das barras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST423'],
			color: ''
		},
		'ST527': {
			code: 'ST527',
			name: 'Concreto Armado I',
			ementa: 'Fundamentos e princípios básicos de dimensionamento, hipóteses de cálculo. Comportamento das estruturas. Métodos dos Estados Limites. Estados Limites últimos para solicitações. Estados limites de utilização.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST420', '*ST423'],
			color: ''
		},
		'ST529': {
			code: 'ST529',
			name: 'Mecânica dos Solos II',
			ementa: 'Adensamento e compressibilidade. Recalques por adensamento. Resistência ao cisalhamento dos solos. Empuxos. Estruturas de arrimo. CBR. Ensaios. Fluxo de água nos solos. Redes de fluxo. Subpressão das estruturas enterradas. Ensaios.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST410', '*ST423'],
			color: ''
		},
		'ST726': {
			code: 'ST726',
			name: 'Construção e Meio Ambiente',
			ementa: 'Meio ambiente e desenvolvimento sustentável. Impactos Ambientais. Reciclagem de materiais na construção civil. Legislação ambiental.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA440'],
			color: '#D98C40'
		},
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9D940'
		},
		'ST306': {
			code: 'ST306',
			name: 'Hidrologia e Drenagem',
			ementa: 'Ciência hidrologia. Ciclo hidrológico. Precipitação pluviométrica. Chuva crítica. Bacias hidrográficas. Medição de chuva e vazão. Escoamento superficial. Previsão de enchentes. Drenagem superficial. Drenagem subterrânea.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST211', '*ST301'],
			color: ''
		},
		'ST618': {
			code: 'ST618',
			name: 'Tecnologia da Construção de Edifícios II',
			ementa: 'Alvenarias: recepção, armazenamento de materiais e execução. Coberturas: traçado de águas, estruturas de suporte, técnicas de execução. Impermeabilização de lajes. Revestimentos e pavimentações. Esquadrias e ferragens: tipos e materiais usuais. Vidros, tipos e sistemas de colocação. Escadas e rampas. Pinturas. Lesões nas edificações. Segurança no trabalho.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*ST515'],
			color: ''
		},
		'ST625': {
			code: 'ST625',
			name: 'Fundações',
			ementa: 'Introdução ao estudo das fundações. Classificação das fundações. Fundações diretas: conceito de capacidade de carga, tensão admissível dos solos, métodos de avaliação. Dimensionamento de sapatas. Fundações profundas: Tipos. Tubulões: Capacidade de carga, tensão admissível dos solos, dimensionamento de tubulões. Estacas: Capacidade de cargas das estacas, formulações teóricas, métodos empíricos de avaliação. Dimensionamento de fundações por estacas. Projeto de estaqueamento.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST529'],
			color: ''
		},
		'ST626': {
			code: 'ST626',
			name: 'Projetos de Instalações Prediais Hidráulico-Sanitárias',
			ementa: 'Instalação predial de água fria, água quente, esgoto sanitário, água pluvial e combate a incêndio. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST303'],
			color: ''
		},
		'ST628': {
			code: 'ST628',
			name: 'Concreto Armado II',
			ementa: 'Fundamentos e princípios do projeto estrutural. Formas de concreto armado. Cargas atuantes nas estruturas. Fundamentos da técnica de armar. Ancoragem. Peças usuais de concreto armado: lajes, vigas e pilares. Dimensionamento e projeto com uso de programas e computação gráfica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST526', '*ST527'],
			color: ''
		},
		'ST728': {
			code: 'ST728',
			name: 'Introdução ao Trabalho de Graduação e Estágio Supervisionado',
			ementa: 'Definir plano do trabalho de graduação interdisciplinar ou estágio supervisionado e revisão bibliográfica, sob orientação de um professor. Obs: Não é responsabilidade da Unicamp providenciar estágios para alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA460'],
			color: '#408CD9'
		},
		'ST722': {
			code: 'ST722',
			name: 'Estruturas de Aço e Madeira',
			ementa: 'Estruturas de madeira. Estruturas metálicas. Prática.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['*ST526'],
			color: ''
		},
		'ST723': {
			code: 'ST723',
			name: 'Planejamento e Controle da Construção',
			ementa: 'Sistemas de planejamento e controle: metodologia, sistemática de programação e controle, conceituação de WBS (Work Breakdown Structure), programação utilizando técnicas de rede: métodos COM e PERT, Diagrama de Gantt, cronograma físico-financeiro, nivelamento de recursos através de histogramas. Estruturas organizacionais para gerenciamento de operações nas empresas e no canteiro de obras. Utilização de ferramentas de informática no planejamento e controle.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*ST618'],
			color: ''
		},
		'ST729': {
			code: 'ST729',
			name: 'Noções de Concreto Protendido',
			ementa: 'Conceitos de protensão aplicada ao concreto: materiais e sistemas de protensão. Estados limites de serviços e últimos. Aplicações em estruturas de edifícios.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['*ST527'],
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
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
