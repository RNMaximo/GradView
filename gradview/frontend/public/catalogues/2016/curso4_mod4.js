const catalogue = {
	totalCredits: 180,
	maxCreditsSem: 29,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['FM003', 'F_128', 'F_129', 'MA111', 'MA141', 'MS149']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_228', 'F_229', 'MA211', 'MC102', 'MA327']
		},
		'sem-3': {
			id: '3',
			subjects: ['MA311', 'F_328', 'F_329', 'MS211', 'ME210']
		},
		'sem-4': {
			id: '4',
			subjects: ['F_428', 'F_315', 'F_429', 'MA044', 'QG101', 'QG102']
		},
		'sem-5': {
			id: '5',
			subjects: ['F_415', 'F_540', 'BS580', 'F_502', 'F_520', 'F_589']
		},
		'sem-6': {
			id: '6',
			subjects: ['F_320', 'BS681', 'F_550', 'F_602', 'F_620', 'F_689']
		},
		'sem-7': {
			id: '7',
			subjects: ['F_604', 'F_740', 'F_758', 'F_755', 'F_752', 'F_789']
		},
		'sem-8': {
			id: '8',
			subjects: ['F_837', 'F_896', 'ELET08', 'F_887']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 8,
			hasRestrictions: true,
			subjects: ['F_852', 'F_853', 'F_854', 'F_856'],
		},
	},

	subjects: {
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#93B946',
			obligatory: true
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9346B9',
			obligatory: true
		},
		'FM003': {
			code: 'FM003',
			name: 'Seminários sobre a Profissão',
			ementa: 'Palestras sobre temas de ciências físicas e matemáticas e de suas interfaces com outras ciências, visando o direcionamento da formação acadêmica dos alunos ingressantes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6C46B9',
			obligatory: true
		},
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B946B9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6CB946',
			obligatory: true
		},
		'F_228': {
			code: 'F_228',
			name: 'Física Geral II',
			ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.Obs.: Recomenda-se que seja cursada previamente MA151 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*F_128'],
			color: '#93B946',
			obligatory: true
		},
		'F_229': {
			code: 'F_229',
			name: 'Física Experimental II',
			ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_128', 'F_129'],
			color: '#938080',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#808080',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#46B946',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#466CB9',
			obligatory: true
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141'],
			color: '#86936C',
			obligatory: true
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111'],
			color: '#A646B9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#808080',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149'],
			color: '#938080',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#6C7993',
			obligatory: true
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211'],
			color: '#8A9D63',
			obligatory: true
		},
		'F_428': {
			code: 'F_428',
			name: 'Física Geral IV',
			ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.Obs.: Recomenda-se que seja cursada previamente MA351 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_328'],
			color: '#86936C',
			obligatory: true
		},
		'F_429': {
			code: 'F_429',
			name: 'Física Experimental IV',
			ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_329'],
			color: '#A646B9',
			obligatory: true
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MA211'],
			color: '#808080',
			obligatory: true
		},
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Estrutura atômica, classificação periódica e propriedades dos elementos. Ligação química; estrutura e propriedades das substâncias. Noções de físico-química: termodinâmica, equilíbrios químicos e células eletroquímicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B96C46',
			obligatory: true
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94693',
			obligatory: true
		},
		'BS580': {
			code: 'BS580',
			name: 'Fundamentos de Biologia Celular e Molecular para Física Médica',
			ementa: 'Introdução ao estudo da célula. Noções de Metabolismo. Genética molecular. Organização interna da célula. A célula em seu contexto.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_429'],
			color: '#A646B9',
			obligatory: true
		},
		'F_415': {
			code: 'F_415',
			name: 'Mecânica Geral II',
			ementa: 'Forças centrais. Sistemas de partículas. Referenciais não inerciais. Dinâmica de corpos rígidos. Oscilações acopladas. Meios contínuos e ondas. Teoria especial da Relatividade.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos da Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B9B9',
			obligatory: true
		},
		'F_502': {
			code: 'F_502',
			name: 'Eletromagnetismo I',
			ementa: 'Campos eletrostáticos no vácuo e nos materiais dielétricos. Resolução das equações de Poisson e Laplace. Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4646B9',
			obligatory: true
		},
		'F_520': {
			code: 'F_520',
			name: 'Métodos Matemáticos da Física I',
			ementa: 'Análise Vetorial (revisão), o operador nabla, sistemas de coordenadas (revisão), determinantes e matrizes, equações diferenciais, teoria de Sturm-Liouville funções ortogonais, a função gama, funções de Bessel, funções de Legendre, funções especiais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: true
		},
		'F_540': {
			code: 'F_540',
			name: 'Métodos da Física Experimental I',
			ementa: 'Circuitos básicos DC-AC. Componentes passivos. Instrumentos de medida. Diodos. Transistores. Amplificação. Amplificadores operacionais. Realimentação. Osciladores. Circuitos digitais básicos. Textos de laboratório.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B993',
			obligatory: true
		},
		'F_589': {
			code: 'F_589',
			name: 'Estrutura da Matéria',
			ementa: 'Introdução à teoria da relatividade restrita. Radiação térmica e o postulado de Planck. Fótons e as propriedades corpusculares da radiação. Propriedades ondulatórias das partículas e o postulado de De Broglie. O átomo de Bohr. Introdução à equação de Schrödinger e soluções de problemas unidimensionais. O átomo de hidrogênio.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#46B96C',
			obligatory: true
		},
		'BS681': {
			code: 'BS681',
			name: 'Fundamentos de Anatomia, Histologia e Fisiologia Humana para Física Médica',
			ementa: 'Anatomia Básica: estudo dos sistemas tegumentares, ósseos, articulares e musculares, cardiovasculares, respiratórios, digestivos, renais, reprodutor masculino e feminino. Histologia: bases morfofuncionais dos tecidos fundamentais e dos sistemas. Fisiologia básica: estudos dos sistemas cardiovasculares, digestivos, renais, reprodutor masculino e feminino. Sistema nervos e órgãos dos sentidos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS580'],
			color: '#A646B9',
			obligatory: true
		},
		'F_320': {
			code: 'F_320',
			name: 'Termodinâmica',
			ementa: 'Sistemas termodinâmicos, reversibilidade, termometria. Variáveis e equações de estado, diagramas PVT. Trabalho e primeira lei da termodinâmica. Equivalente mecânico de calor. Energia interna, entalpia, ciclo de Carnot. Mudanças de fase. Segunda lei da termodinâmica e entropia. Funções termodinâmicas. Aplicações práticas de termodinâmica. Teoria cinética dos gases. Distribuição de velocidades moleculares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_228', 'MA211'],
			color: '#8A9D63',
			obligatory: true
		},
		'F_550': {
			code: 'F_550',
			name: 'Radiação: Interação e Detecção',
			ementa: 'Elementos de teoria de espalhamento. Interação da radiação gama com a matéria. Efeitos de atenuação. Método Monte Carlo. Detecção de radiação. Tipos de detetores. Espectroscopia Gama e de raio-x. Análise de dados.Obs.: Recomenda-se cursar junto a disciplina F 502.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_429', 'F_589'],
			color: '#768093',
			obligatory: true
		},
		'F_602': {
			code: 'F_602',
			name: 'Eletromagnetismo II',
			ementa: 'Equações de Maxwell. Propagação de ondas eletromagnéticas. Reflexão. Refração. Guias de onda. Radiação. Antenas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_502'],
			color: '#4646B9',
			obligatory: true
		},
		'F_620': {
			code: 'F_620',
			name: 'Métodos Matemáticos da Física II',
			ementa: 'Funções de variáveis complexas I (revisão), funções de variáveis complexas II: cálculo de resíduos (revisão), séries de Fourier, transformações integrais, equações integrais, cálculo de variações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_520'],
			color: '#4693B9',
			obligatory: true
		},
		'F_689': {
			code: 'F_689',
			name: 'Mecânica Quântica I',
			ementa: 'Introdução às idéias fundamentais da teoria quântica. O aparato matemática da mecânica quântica de Schrödinger. Formalização da Mecânica Quântica enunciado-se os postulados. Spin 1/2 e sistemas de dois níveis. O oscilador harmônico unidimensional. Momento angular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589', 'MA327'],
			color: '#46B959',
			obligatory: true
		},
		'F_604': {
			code: 'F_604',
			name: 'Física Estatística',
			ementa: 'Introdução às propriedades de sistemas macroscópicos. Conceitos básicos de probabilidade. Interação térmica. Fator de Boltzmann. Relação entre conceitos atômicos e medidas macroscópicas \"Ensemble\" microcanônico. Distribuição canônica na aproximação clássica. Aplicações. Teorema da equipartição da energia. Interação termodinâmica. Termodinâmica estatística. Interação entre sistemas com troca de partículas: o \"Ensemble\" grande canônico. Estatística quântica de gases ideais: estatísticas de fótons, estatísticas de Fermi-Dirac e de Bose-Einstein. Teoria cinética e processos de transporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B9B946',
			obligatory: true
		},
		'F_740': {
			code: 'F_740',
			name: 'Métodos da Física Experimental III',
			ementa: 'Experimentos de Física Moderna: Medidas de constantes fundamentais da Física: Emissão Termoiônica. Espectroscopia atômica e nuclear. Movimentos semicondutores. Ressonância magnética.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B99346',
			obligatory: true
		},
		'F_752': {
			code: 'F_752',
			name: 'Ressonância Magnética Aplicada à Medicina',
			ementa: 'Fundamentos de Ressonância Magnética. Geração de Sinais e Detecção. Sequências de Pulso Características. Localização de Sinais e Reconstrução de Imagens. Contraste, Resolução, Ruído e Artefatos. Técnicas para Imageamento Rápido. Imagens por Difusão e Perfusão. Espectroscopia por RM.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_520', 'F_589'],
			color: '#46A693',
			obligatory: true
		},
		'F_755': {
			code: 'F_755',
			name: 'Física Aplicada à Medicina e Biologia I',
			ementa: 'Mecânica aplicada a problemas de músculos e circulação sanguínea. Transporte em um meio infinito. Transporte através de membranas neutras. Impulsos elétricos em células nervosas e músculos. Eletrocardiograma. Biomagmetismo. Eletricidade e magnetismo ao nível celular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_502'],
			color: '#4646B9',
			obligatory: true
		},
		'F_758': {
			code: 'F_758',
			name: 'Radiobiologia e Radioproteção',
			ementa: 'Radioquímica. Teorias e modelos de sobrevivência celular. Fatores que modificam a resposta da radiação. Radiobiologia de tecidos normais e neoplásicos. Carcinogênese e efeitos genéticos da radiação ionizante. Radiação ionizante e saúde pública. Princípios de proteção radiológica. Cálculos de dose de radiação. Normas de proteção radiológica. Cálculos de blindagens. Medidas de radiação. Proteção radiológica em instalações médicas e laboratórios de pesquisa. Gerenciamento de rejeitos radioativos. Transporte de materiais radioativos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS580', 'F_550'],
			color: '#8E63A6',
			obligatory: true
		},
		'F_789': {
			code: 'F_789',
			name: 'Mecânica Quântica II',
			ementa: 'Forças centrais e o átomo de Hidrogênio. Teoria de Espalhamento de uma partícula por um potencial. Spinores na teoria quântica não-relativística. Adição de momentos angulares. Teoria de perturbação independente do tempo. Estruturas fina e hiperfina do átomo de hidrogênio. Teoria de perturbação dependente do tempo. Partículas idênticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#46B959',
			obligatory: true
		},
		'F_837': {
			code: 'F_837',
			name: 'Laboratório de Física Médica',
			ementa: 'Experimentos de Física Médica e Radiação. Espalhamento Compton. Efeito fotoelétrico. Caracterização de detectores de radiação. Lei de Poisson e distribuição normal em processos de decaimento radioativo. Fonte de neutrons e radioatividade induzida. Formação de imagens utilizando simuladores. Formação da imagem por raios-X: Contraste de absorção e contraste de fase. Ressonância Magnética Nuclear. Dosímetros termoluminescentes.Obs.: A autorização AA200 não será aplicada aos alunos dos cursos de Física.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94646',
			obligatory: true
		},
		'F_887': {
			code: 'F_887',
			name: 'Física Nuclear',
			ementa: 'O átomo nuclear e o núcleo atômico. O modelo de gás de Fermi. O modelo de partícula independente. Aplicações do modelo de partícula independente. Núcleos com mais que um nucleon fora de camadas fechadas. Supercondutividade nuclear. O modelo coletivo. O modelo unificado. Aplicações do modelo unificado: vibrações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_689'],
			color: '#46B959',
			obligatory: true
		},
		'F_896': {
			code: 'F_896',
			name: 'Monografia',
			ementa: 'Esta disciplina consistirá de aulas em sala, enfatizando a organização e o formalismo do desenvolvimento do trabalho científico, incluindo técnicas de redação científica, ferramentas de busca, referências bibliográficas, estruturas formais de divulgação científica, etc.. Na parte prática, deverá ser desenvolvido um tema de pesquisa individualmente pelo aluno, com o formato de um trabalho de Iniciação Científica, sob a orientação de um professor ou pesquisador autorizado pela Comissão de Graduação. A Monografia será avaliada no final da disciplina.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA480'],
			color: '#B9466C',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'F_852': {
			code: 'F_852',
			name: 'Física da Radiologia',
			ementa: 'Produção de raios-x. Interação dos raios-x com a matéria. Formação da imagem radiográfica. Outras modalidades de imagens analógicas. Modalidades de imagens radiográficas digitais. Controle de qualidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_758'],
			color: '#8E63A6',
			obligatory: false
		},
		'F_853': {
			code: 'F_853',
			name: 'Física da Medicina Nuclear',
			ementa: 'Grandezas e unidades. Decaimento radioativo. Espectrometria. Estatística aplicada à medicina nuclear. Produção de radionuclídeos. Dosimetria interna. Instrumentação. Deteção e medidas da radiação. Sistemas de contagem. Câmaras de cintilação. Qualidade de imagem em Medicina Nuclear. Tomografias tipo SPECT e PET.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_758'],
			color: '#8E63A6',
			obligatory: false
		},
		'F_854': {
			code: 'F_854',
			name: 'Física da Radioterapia',
			ementa: 'Produção e qualidade dos raios-x. Aparelhos de radioterapia. Cálculo de dose. Planejamento de tratamento. Técnicas especiais de radioterapia. Terapia com feixe de elétrons. Braquiterapia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_758'],
			color: '#8E63A6',
			obligatory: false
		},
		'F_856': {
			code: 'F_856',
			name: 'Biofotônica',
			ementa: 'Óptica geométrica e instrumentos ópticos - microscópios. Guias de onda e fibras ópticas. Detectores de luz: fotomultiplicadores, APD, e câmeras CCD. Interação da luz com a matéria. Marcadores fluorescentes: proteínas e quantum dots. Funcionalização de interfaces. Espectroscopias de infravermelho e Raman. Óptica não linear. Biossensores fotônicos. Lasers. Cirurgias e terapias com laser. Visualizações fotônicas: OCT, NIR-DOT. Microscopias de fluorescência. Microscopias Multifotônicas. Microscopias Raman. Microscopias com resolução subdifração. Pinças ópticas e medidas biomecânicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_589'],
			color: '#46B96C',
			obligatory: false
		}
	}
};

export default catalogue;
