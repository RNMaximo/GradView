const catalogue = {
	totalCredits: 200,
	maxCreditsSem: 38,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'MA141', 'ME110', 'ME111', 'MS149']
		},
		'sem-2': {
			id: '2',
			subjects: ['LA122', 'MA211', 'MA327', 'MC102', 'ME210']
		},
		'sem-3': {
			id: '3',
			subjects: ['LA242', 'MA311', 'ME115', 'ME310', 'ME322']
		},
		'sem-4': {
			id: '4',
			subjects: ['ME315', 'ME415', 'ME430', 'ME501', 'ME613', 'MS211']
		},
		'sem-5': {
			id: '5',
			subjects: ['ME607', 'ME623', 'ME705', 'MS512', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['ME524', 'ME731', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ME712', 'ME714', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ME812', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 26,
			hasRestrictions: true,
			subjects: ['BB125', 'CE138', 'CE451', 'CE738', 'CE939', 'EU502', 'MA044', 'MA502', 'MA602', 'MC---', 'ME502', 'ME601', 'ME612', 'ME630', 'ME651', 'ME652', 'ME661', 'ME701', 'ME706', 'ME715', 'ME716', 'ME720', 'ME721', 'ME730', 'ME732', 'ME820', 'ME821', 'ME850', 'ME860', 'ME861', 'ME904', 'ME905', 'ME906', 'ME907', 'ME908', 'ME909', 'ME910', 'ME911', 'ME912', 'ME913', 'ME914', 'ME915', 'ME916', 'ME917', 'ME918', 'ME919', 'ME920', 'MS317', 'MS428', 'MS515', 'MS580', 'MS614', 'MS680', 'MS714', 'MS715', 'TA541'],
		},
		'elet-2': {
			credits: 24,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D98140',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#AD40D9',
			obligatory: true
		},
		'ME110': {
			code: 'ME110',
			name: 'Noções de Estatística',
			ementa: 'Respostas binárias: experimentos aleatorizados, teste exato de Fisher, valor de significância. Aproximação de distribuições: histograma, momentos, curva normal. Distribuições de Bernoulli e binomial. Inferência para proporção em uma população. Respostas multicategóricas: apresentação dos dados e medidas resumo, estimação, teste qui-quadrado de adequação de ajuste, testes de independência e homogeneidade. Respostas numéricas: estatísticas descritivas, ramos e folhas, gráficos e histogramas. Medidas de posição e dispersão. Regressão. Séries temporais: autocorrelação e alisamento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940A2',
			obligatory: true
		},
		'ME111': {
			code: 'ME111',
			name: 'Laboratório de Estatística',
			ementa: 'Atividades de laboratório relacionadas aos conceitos básicos de Estatística, a informática básica e pelo menos um pacote estatístico, incluindo um trabalho final de coleta e análise de dados.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#6B40D9',
			obligatory: true
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D9B8',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141'],
			color: '#C3618D',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141'],
			color: '#AD40D9',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#CE40D9',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D98140',
			obligatory: true
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Aprimoramento e prática de capacidades de leitura instrumental em língua inglesa em textos de gêneros acadêmico e científico. Aprofundamento no uso de estruturas frasais como promotoras da compreensão textual. Práticas de estratégias de leitura. Aplicação de estratégias de leitura para promover a compreensão textual. Leitura de textos digitais. Estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4BD940',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211'],
			color: '#C3618D',
			obligatory: true
		},
		'ME115': {
			code: 'ME115',
			name: 'Linguagem R',
			ementa: 'Introdução ao uso do software R e suas estruturas de dados. Importação e exportação de dados empregando o R. Manipulação de subconjuntos de dados. Formatação e operações vetoriais com diferentes tipos de variáveis inteiros, reais, fatores e data/hora). Criação de funções, introdução à vetorização e estratégias para debugging. Estruturas de controle de fluxo. Introdução à programação paralela.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D940C3',
			obligatory: true
		},
		'ME310': {
			code: 'ME310',
			name: 'Probabilidade II',
			ementa: 'Vetores Aleatórios, distribuições conjuntas, marginais e condicionais. Independência. Modelos gama, beta, Cauchy, multinomial, multinormal. Transformações. Distribuições t de student, qui-quadrado e F de Snedecor. Conjuntos e condicionais. Desigualdades de Markov, Tchebychev, Jensen e Cauchy-Schwartz. Elementos básicos e aplicações da função característica. Simulações. Teoremas limites básicos: modos de convergência, sequência de ensaios independentes, lei dos grandes números, Teorema Central do Limite.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'ME210'],
			color: '#CE7167',
			obligatory: true
		},
		'ME322': {
			code: 'ME322',
			name: 'Inferência',
			ementa: 'Distribuição dos momentos amostrais. Estimação pontual. Métodos de estimação: momentos, máxima verossimilhança, mínimos quadrados. Teorema de Gauss-Markov. A família exponencial e Suficiência. Estimação por intervalos através do método de pivô. Testes de hipóteses. Erros tipo I e II, região crítica, nível de significância p-valor, tamanho e poder do teste.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211', 'ME210'],
			color: '#CE7167',
			obligatory: true
		},
		'ME315': {
			code: 'ME315',
			name: 'Manipulação de Banco de Dados',
			ementa: 'Introdução ao uso de software: R, Python, SAS, Excel. Importação e leitura de dados em diversos formatos. Operadores. Funções. Estruturas de controle. Obtenção, organização e manipulação de dados. Visualização de dados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['MC102', 'ME115'],
			color: '#D440CE',
			obligatory: true
		},
		'ME415': {
			code: 'ME415',
			name: 'Método Científico e Técnicas de Pesquisa',
			ementa: 'Elaboração de relatórios, levando em consideração as normas para construção de tabelas, gráficos e os tipos de “clientes”. Análise exploratória de dados. Elaboração de relatórios de análise estatística com dados fornecidos pelo professor. Introdução à metodologia científica. Conceito de empirismo. Elaboração de projetos de pesquisa.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME110', 'ME111', 'ME322'],
			color: '#B150A1',
			obligatory: true
		},
		'ME430': {
			code: 'ME430',
			name: 'Técnicas de Amostragem',
			ementa: 'Amostragem aleatória simples para se estimar médias, totais, proporções e razões populacionais; amostragem sistemática. Amostragem aleatória estratificada para se estimar médias, totais, proporções e razões populacionais. Estimadores de razão e de regressão. Amostragem por conglomerado em um e dois estágios. Planejamento de amostras. Elaboração de projeto com coleta de dados e análise estatística utilizando as técnicas de amostragem.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME310'],
			color: '#CE7167',
			obligatory: true
		},
		'ME501': {
			code: 'ME501',
			name: 'Processos Estocásticos',
			ementa: 'Cadeias de Markov a tempo discreto. Classificação de estados, noções de recorrência e transiência. Medida estacionária. Reversibilidade. Processo de Poisson. Cadeias de Markov a tempo contínuo, processos de nascimento e morte. Aplicações: noções de teoria de renovação e teoria de filas, simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310'],
			color: '#CE7167',
			obligatory: true
		},
		'ME613': {
			code: 'ME613',
			name: 'Análise de Regressão',
			ementa: 'Correlação. Ajuste de modelos de Regressão Linear Simples e Múltipla. Procedimentos de diagnóstico do modelo: Análise de resíduos, influência, multicolinearidade. Modelos polinomiais. Variáveis indicadoras. Seleção de variáveis e construção de modelos. Noções de regressão não linear. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['MA327', 'ME310', 'ME322'],
			color: '#C3618D',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#C756A6',
			obligatory: true
		},
		'ME607': {
			code: 'ME607',
			name: 'Séries Temporais',
			ementa: 'Elementos de processos estocásticos. Estacionaridade. Funções média, correlação e correlação parcial. Equações de diferenças. Distância quadrática média. Aproximação linear ótima. Tendências e sazonalidade. Processos autoregressivos e de média móvel. Não estacionariedade. Métodos: regressão e médias móveis. Processos autoregressivos integrados médias móveis. Estimação da média e correlação parcial. Identificação de modelos. Estimação de parâmetros. Diagnósticos. Critérios de seleção. Previsão. Modelos sazonais. Função de transferência. Modelo ARMAX. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: true
		},
		'ME623': {
			code: 'ME623',
			name: 'Planejamento e Pesquisa',
			ementa: 'Princípios de experimentação: replicação, aleatorização e blocagem. Experimentos completamente aleatorizados. Diagnóstico do modelo. Contrastes e comparações múltiplas. Experimento em blocos. Quadrado Latino. Tamanho amostral. Experimentos fatoriais. Fatoriais 2(n). Fatoriais fracionados 2(n-p). Fatores fixo e aleatórios. Estrutura entre fatores: cruzados e hierárquicos. Componentes da variância. Experimentos em blocos incompletos. Análise de covariância. Split-Plot. Superfície de respostas. Experimentos não balanceados. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME322'],
			color: '#CE7167',
			obligatory: true
		},
		'ME705': {
			code: 'ME705',
			name: 'Inferência Bayesiana',
			ementa: 'Distribuições a priori e posteriori. Princípios gerais da inferência bayesiana e vínculo com a inferência clássica. Conflito entre priori e posteriori. Utilidade e perda. Permutabilidade: Teorema de De Finetti. Distribuições a priori: próprias, impróprias, conjugadas, informativas e não informativas. Fator de Bayes: comparação de modelos, sensibilidade. Teste de hipóteses bayesianos e regiões de credibilidade. Métodos clássicos de aproximação: integração numérica, integração por Monte Carlo e aproximação analítica de Laplace. Amostragem bayesiana e MCMC.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME322'],
			color: '#CE7167',
			obligatory: true
		},
		'MS512': {
			code: 'MS512',
			name: 'Análise Numérica I',
			ementa: 'Fatoração de Choleski. Fatorações ortogonais. Quadrados mínimos lineares. Decomposição em valores singulares. Métodos iterativos para resolução de sistemas lineares. Introdução à resolução de sistemas não-lineares. Cálculo de autovalores e autovetores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MS211'],
			color: '#BA4BC0',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: '',
			color: '#D96140',
			obligatory: true
		},
		'ME524': {
			code: 'ME524',
			name: 'Computação Aplicada à Estatística',
			ementa: 'Representação de números em base binária. Erros de truncamento e arredondamento. Geração de números pseudo-aleatórios uniformes e não uniformes. Métodos de inversão, aceitação-rejeição e por transformações de variáveis aleatórios. Métodos de Monte Carlo. Método de resolução de sistemas lineares (decomposições QR, Householder, valores singulares, equivalência Gram-Schmidt-QR, número condição). Mínimos quadrados: aplicação à regressão linear. Método de Newton-Raphson. Bootstrap, validação cruzada, jacknife. Aspectos estatísticos em redes neurais. Métodos de simulação usando cadeias de Markov.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['ME115', 'ME322', 'MS211'],
			color: '#CF589B',
			obligatory: true
		},
		'ME731': {
			code: 'ME731',
			name: 'Métodos em Análise Multivariada',
			ementa: 'Distribuição normal multivariada; análise de variância multivariada; análise de componentes principais; análise fatorial; análise de correspondências; análise de correlações canônicas e análise discriminante. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:20},
			requisitos: '',
			color: '#4B40D9',
			obligatory: true
		},
		'ME712': {
			code: 'ME712',
			name: 'Consultoria Estatística I',
			ementa: 'Consultoria estatística realizada sob supervisão de docentes do Departamento de Estatística.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['ME415', 'ME613'],
			color: '#BA5997',
			obligatory: true
		},
		'ME714': {
			code: 'ME714',
			name: 'Análise de Dados Discretos',
			ementa: 'Distribuições discretas e funções geratrizes: Binomial, Multinomial, Poisson, Geométrica, Hipergeométrica, Binomial Negativa. Tabelas de Contingência: Teste de Homogeneidade e independência; Teste exato de Fisher; Teste de McNemar; Medidas de associação. Regressão com variáveis categóricas na matriz X: Codificações para a matriz X. Modelos lineares generalizados e a função de ligação. Regressão logística: dados binários e politômicos. Probito. Mínimos quadrados ponderados. Regressão de Poisson.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:15},
			requisitos: '',
			color: '#40D997',
			obligatory: true
		},
		'ME812': {
			code: 'ME812',
			name: 'Consultoria Estatística II',
			ementa: 'Consultoria estatística realizada sob supervisão de docentes do Departamento de Estatística.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:8, D:0, HS:12, SL:4, C:12},
			requisitos: ['ME712'],
			color: '#BA5997',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:5},
			requisitos: '',
			color: '#D94061',
			obligatory: true
		},
		'BB125': {
			code: 'BB125',
			name: 'Fundamentos de Biologia Molecular',
			ementa: 'Estrutura do DNA e replicação. Mutações e reparo do DNA. Estrutura do RNA e transcrição. Síntese e endereçamento de proteínas. Regulação da expressão gênica. Uso de técnicas recombinantes no diagnóstico e tratamento de saúde (sequenciamento de DNA, southern/northern/western blotting, clonagem, PCR, e outros).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9C340',
			obligatory: false
		},
		'CE138': {
			code: 'CE138',
			name: 'Estratégias de Empresas para Engenharia',
			ementa: 'Conceitos básicos de economia. Introdução à macroeconomia. Processo de globalização e de reestruturação produtiva. Estratégias empresariais: inovação, concorrência e estratégias competitivas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA211'],
			color: '#C3618D',
			obligatory: false
		},
		'CE451': {
			code: 'CE451',
			name: 'Métodos Quantitativos Aplicados à Economia Financeira',
			ementa: 'Processo decisório em condições de risco. Risco e retorno de um ativo e de uma carteira. Seleção de carteiras e teoria de Markowitz. Modelo de índice único. Modelo de índice múltiplo. Outros modelos de escolha de carteiras. Análise da utilidade do investidor. Modelo de precificação de ativos. Modelo de formação de preços por arbritagem. Eficiência de mercado. Mercado de opções e métodos de apreçamento. Mercado de renda fixa: formação de preços e administração de carteiras.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D9D9',
			obligatory: false
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9A240',
			obligatory: false
		},
		'CE939': {
			code: 'CE939',
			name: 'Gestão de Marketing',
			ementa: 'Conceito de Marketing. Mercados e estruturas de mercado. O composto mercadológico. Abordagem a partir da análise, adaptação, ativação e avaliação. Abordagem a partir do produto, preço, promoção, ponto de vista e pós-venda. Mercados específicos: caracterização, análise, tendências. Plano de marketing.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#CED940',
			obligatory: false
		},
		'EU502': {
			code: 'EU502',
			name: 'Metrologia Industrial',
			ementa: 'O sistema brasileiro de normalização. Terminologia normalizada sobre medição, desvios e erros. Sistemas de medição. Erros e incertezas. Calibração de instrumentos. Rastreabilidade.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40D976',
			obligatory: false
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA141', 'MA211'],
			color: '#B851B3',
			obligatory: false
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#8CD940',
			obligatory: false
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D956',
			obligatory: false
		},
		'MC---': {
			code: 'MC---',
			name: 'Qualquer Disciplina com codigo MC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MC---, onde o - indica um caracter ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4097D9',
			obligatory: false
		},
		'ME502': {
			code: 'ME502',
			name: 'Processos Estocásticos II',
			ementa: 'Passeio aleatório simples: leis de arcoseno, recorrência/transiência, funções de Green. Martingais: desigualdades básicas, convergência, teorema de parada opcional. Aplicações. Movimento Browniano. Processos estacionários.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME501'],
			color: '#CE7167',
			obligatory: false
		},
		'ME601': {
			code: 'ME601',
			name: 'Tópicos Especiais em Estatística Aplicada I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#4056D9',
			obligatory: false
		},
		'ME612': {
			code: 'ME612',
			name: 'Métodos Estatísticos para Ciências Biológicas',
			ementa: 'Conceitos básicos de epidemiologia. Ensaios clínicos aleatorizados. Função de sobrevivência e função risco. Principais distribuições utilizadas em análise de sobrevivência. Tabelas de vida em análise de sobrevivência. Comparações de curva de sobrevivência. Modelos paramétricos e semi-paramétricos em análise de sobrevivência. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME630': {
			code: 'ME630',
			name: 'Iniciação Científica I',
			ementa: 'Atividades de iniciação científica em estatística e/ou probabilidade supervisionadas por docentes do curso e aprovadas pela comissão de docentes responsáveis pela disciplina, resultando em apresentação de seminário(s) e relatório técnico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#4076D9',
			obligatory: false
		},
		'ME651': {
			code: 'ME651',
			name: 'Controle Estatístico de Qualidade',
			ementa: 'Ferramentas da Qualidade. Causas de variação. Bases para a construção de Cartas de Controle: Grupos racionais. Cartas de Controle para Variáveis e para Atributos. Análise de padrões em Cartas de Controle. Cartas CUSUM e EWMA. CEP para pequenos lotes. CEP Multivariado. Capacidade de Processo. Análise do Sistema de medição. Planos de aceitação de lotes. Confiabilidade: conceitos, distribuições, tipos de dados e análise não paramétrica. Gestão da Qualidade: Normas e Prêmios. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME322'],
			color: '#CE7167',
			obligatory: false
		},
		'ME652': {
			code: 'ME652',
			name: 'Controle Estatístico de Qualidade II',
			ementa: 'Pressupostos e limitações do CEP básico. Técnicas especiais de CEP univariado. CEP para processos multivariados. Controle de engenharia de processos. Experimentos planejados para melhoria de processos. Otimização de processos com experimentos. Amostragem de aceitação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME661': {
			code: 'ME661',
			name: 'Métodos Não Paramétricos',
			ementa: 'Teoria e aplicação de testes estatísticos não-paramétricos mais comumente usados, tais como testes do sinal e Wilcoxon, e comparação com suas correspondentes versões paramétricas. Testes para locação de uma e duas amostras, medidas de correlação, testes de aderência, testes de independência, testes para igualdade de variâncias, testes de Kruskal-Wallis e Friedman para análise de variância e outros tópicos selecionados. Ferramentas computacionais para realizar tais testes. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME701': {
			code: 'ME701',
			name: 'Tópicos Especiais em Estatística Aplicada II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D94081',
			obligatory: false
		},
		'ME706': {
			code: 'ME706',
			name: 'Robustez',
			ementa: 'Modelos normal e de locação-escala. Estimação parâmetros, interesse no outlier e suas causas. Propriedades ótimas de estimadores tradicionais sob hipóteses estritas e impacto dos outliers. Distribuição normal: otimalidade da média amostral sob normalidade. Resistência. Alternativas resistentes aos estimadores tradicionais. Invariância e equivariância dos estimadores de locação e de escala. Curva de sensibilidade e ponto de ruptura. Noção ingênua de robustez qualitativa. Relação entre resistência e robustez qualitativa. Robustez em eficiência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME715': {
			code: 'ME715',
			name: 'Econometria',
			ementa: 'Revisão de técnicas de regressão. Extensões. Equações simultâneas. Mínimos quadrados generalizados. Variáveis instrumentais. Identificação. Estimação em sistemas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME716': {
			code: 'ME716',
			name: 'Teoria da Informação',
			ementa: 'Entropia, entropia relativa e informação mútua. Taxas de entropia de um processo estocástico: cadeias de Markov, taxas de entropia de um passeio aleatório. Compressão de dados. Exemplos de códigos. Desigualdade de Kraft. Código de Huffman. Shannon-Fano-Elias coding. Complexidade de Kolmogorov. Modelos de Computação. Complexidade de Kolmogorov e entropia. Algoritmos aleatórios e sequências incompreensíveis. A estatística suficiente de Kolmogorov. Introdução à Channel Capacity. Entropia máxima e estimação espectral. Introdução à teoria da taxa de distorção. Desigualdades em teoria da informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME720': {
			code: 'ME720',
			name: 'Modelos Lineares Generalizados',
			ementa: 'Revisão de Modelos Lineares. Conceitos básicos, terminologia e notações. Família exponencial de distribuições e Modelos Lineares Generalizados. Estimação e Inferência. Verificação do ajuste do modelo. Modelos para dados binários. Modelos para dados de contagem. Sobredispersão e modelo binomial negativa. Modelos para dados de contagem com excesso de zeros. Modelos não lineares e Modelos lineares mistos. Elaboração de relatórios que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME721': {
			code: 'ME721',
			name: 'Demografia',
			ementa: 'Estudo de população. Recenseamento: normas, erros, composição por sexo, idade, etc. Natalidade, migrações, mortalidade. Tábuas de mortalidade. Modelos estocásticos de crescimento populacional. Projeções.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME730': {
			code: 'ME730',
			name: 'Iniciação Científica II',
			ementa: 'Atividades de iniciação científica em estatística e/ou probabilidade supervisionadas por docentes do curso e aprovadas pela comissão de docentes responsáveis pela disciplina, resultando em apresentação de seminário(s) e relatório técnico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:5, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200', 'ME630'],
			color: '#4076D9',
			obligatory: false
		},
		'ME732': {
			code: 'ME732',
			name: 'Métodos em Análise Multivariada II',
			ementa: 'Análise de agrupamentos: tipos de algoritmos, similaridade, \"k-means\", hierárquicos e outros, métodos de validação. Análise de Associação: conjuntos de itens frequentes, regras booleanas, outros tipos de regras, avaliação de padrões de associação. Classificação: árvores de decisão, aprendizado de máquina, vizinho mais próximo, bayesiano, métodos de grupos e avaliação de classificadores. Detecção de anomalias. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME820': {
			code: 'ME820',
			name: 'Estágio em Empresa I',
			ementa: 'Estágio que seja válido de acordo com normas internas definidas pela Coordenação de Graduação do Departamento de Estatística.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:4, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#ADD940',
			obligatory: false
		},
		'ME821': {
			code: 'ME821',
			name: 'Estágio em Empresa II',
			ementa: 'Estágio que seja válido de acordo com normas internas definidas pela Coordenação de Graduação do Departamento de Estatística.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:4, D:0, HS:5, SL:0, C:5},
			requisitos: ['AA200', 'ME820'],
			color: '#ADD940',
			obligatory: false
		},
		'ME850': {
			code: 'ME850',
			name: 'Seminários de Estatística',
			ementa: 'Palestras sobre temas em diversas áreas da estatística, apresentados por profissionais internos e externos ao âmbito acadêmico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME860': {
			code: 'ME860',
			name: 'Métodos Computacionais',
			ementa: 'Criação e manipulação de arquivos de dados. Estudo de erros. Computações numéricas. Modelos lineares e não lineares. Geração de números aleatórios. Princípios de simulação.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#8C40D9',
			obligatory: false
		},
		'ME861': {
			code: 'ME861',
			name: 'Análise de Regressão II',
			ementa: 'Regressão linear simples e múltipla. Diagnóstico e análise de resíduos. Mínimos quadrados ponderados. Transformações de variáveis. Técnicas de seleção de variáveis. Critérios alternativos a mínimos quadrados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AA200'],
			color: '#6BD940',
			obligatory: false
		},
		'ME904': {
			code: 'ME904',
			name: 'Inferência Estatística na Era Computacional',
			ementa: 'Método de Bayes Empírico. Regressão ridge. Modelos lineares generalizados. Árvores de regressão. Análise de sobrevivência. Algoritmo EM. Jacknife. Bootstrap. Validação Cruzada. Erro de predição. Inferência Bayesiana Objetiva.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME905': {
			code: 'ME905',
			name: 'Inferência Estatística para Dados de Alta Dimensão',
			ementa: 'Hipóteses em grande escala. Modelagem de dados esparsos. LASSO. LARS. Florestas aleatórias. Boosting. Redes neurais. Deep learning. SVM. Frameworks de Aprendizado de Máquina.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME906': {
			code: 'ME906',
			name: 'Métodos em Aprendizado Supervisionado de Máquina',
			ementa: 'Estratégias de aprendizado supervisionado de máquina para problemas de regressão e classificação. Métodos de reamostragem, SVM e árvores de decisão. Expor os alunos a estratégias modernas de modelagem, focando em modelos preditivos. Elaboração de um produto de dados empregando ferramentas computacionais.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME907': {
			code: 'ME907',
			name: 'Geoestatística',
			ementa: 'Revisa&#771;o de processos estoca&#769;sticos em tempo conti&#769;nuo, estacionariedade e isotropia, processos Gaussianos. Ana&#769;lise explorato&#769;ria de dados espaciais e espac&#807;o-temporais. Variogramas e covariogramas. Estimac&#807;a&#771;o do variograma. Kriging (ordina&#769;rio, simples, universal). Anisotropia. Kriging com covaria&#769;veis e cokriging. Planejamento de experimentos espaciais. Diagno&#769;sticos. Thin-plate splines e me&#769;todos na&#771;o-parame&#769;tricos. Kriging espaço-temporal, modelos de covariância separa&#769;veis e na&#771;o-separa&#769;veis. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME908': {
			code: 'ME908',
			name: 'Análise de Sobrevivência',
			ementa: 'Situac&#807;o&#771;es de estudo de ana&#769;lise de sobrevive&#770;ncia, notac&#807;o&#771;es e conceitos ba&#769;sicos. Principais distribuições utilizadas em análise de sobrevivência. Tabelas de vida, estimador produto-limite, testes para comparac&#807;o&#771;es de duas ou mais func&#807;o&#771;es de sobrevive&#770;ncia. Modelos paramétricos e semi-paramétricos em análise de sobrevivência. Ana&#769;lise de riscos competitivos. Apresentação de seminários com metodologia e aplicações em análise de sobrevivência.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME909': {
			code: 'ME909',
			name: 'Fundamentos de Modelagem via Cópulas',
			ementa: 'Propriedades básicas das cópulas. Teorema de Sklar. Limitantes de Fréchet-Hoeffding para distribuições conjuntas. Métodos de construção de cópulas. Cópulas Arquimedianas. Geradores de cópulas Arquimedianas e suas propriedades. Medidas de Dependência: noções de concordância e medidas. Cópula empírica e processos empíricos de cópula.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME910': {
			code: 'ME910',
			name: 'Teoria de Resposta ao Item',
			ementa: 'Revisão de modelos de regressão. Conceitos básicos, terminologia e notações. Exemplos de variáveis latentes, construtos e instrumentos de medida. Principais modelos unidimensionais e multidimensionais para respostas dicotômicas e politômicas. Principais métodos de estimação. Principais métodos de equalização. Construção e interpretação de escalas para os traços latentes. Modelos de desdobramento. Distribuições não gaussianas para os traços latentes. Funções de resposta ao item assimétricas e/ou de caudas pesadas. Recursos computacionais. Tópicos adicionais para pesquisa.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME911': {
			code: 'ME911',
			name: 'Modelagem de Equações Estruturais',
			ementa: 'Introdução as variáveis latentes. Análise exploratória envolvendo variáveis latentes. Conceitos básicos, terminologia e notações. Análise de caminho. Modelos de análise fatorial exploratório e confirmatório. Introdução à modelagem de equações estruturais. Modelos de equações estruturais multiníveis, modelos híbridos e efeitos de interação. Estimação, análise de resíduos, comparação de modelos e testes de hipótese sob a ótica clássica. Inferência Bayesiana. Modelos não lineares. Modelos de classes latentes. Inclusão de variáveis qualitativas. Modelos de mistura finita. Modelos de múltiplos grupos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME912': {
			code: 'ME912',
			name: 'Modelagem de Variáveis Latentes',
			ementa: 'Introdução as variáveis latentes. Análise exploratória envolvendo variáveis latentes. Análise fatorial. Análise de perfis latentes. Análise do traço latente. Teoria da Resposta ao Item. Análise de classes latentes. Estimação, análise de resíduos, comparação de modelos e testes de hipótese sob a ótica frequentista. Inferência Bayesiana. Múltiplos grupos. Modelos multidimensionais e multivariados. Dados longitudinais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME913': {
			code: 'ME913',
			name: 'Análise de Dados Hierárquicos',
			ementa: 'Introdução aos dados hierárquicos. Análise exploratória de dados hierárquicos. Conceitos básicos, terminologia e notações. Modelos lineares hierárquicos gaussianos de um, dois e vários níveis. Modelos lineares hierárquicos não gaussianos de um, dois e vários níveis. Estimação, análise de resíduos, comparação de modelos e testes de hipótese sob a ótica frequentista. Inferência Bayesiana. Modelos não lineares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME914': {
			code: 'ME914',
			name: 'Introdução à Teoria dos Jogos',
			ementa: 'Jogo de soma zero para dois jogadores. Teoria da Utilidade. Jogo com soma não-nula para dois jogadores. Jogos para n jogadores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME915': {
			code: 'ME915',
			name: 'Teoria da Decisão',
			ementa: 'Elementos de teoria princi&#769;pio da perda esperada; informac&#807;a&#771;o perfeita, experimentac&#807;a&#771;o. Elementos de teoria de decisa&#771;o cla&#769;ssica: func&#807;a&#771;o de risco, estati&#769;sticas suficientes, admissibilidade, princi&#769;pio minimax. Derivac&#807;a&#771;o axioma&#769;tica da teoria de decisa&#771;o: func&#807;a&#771;o de utilidade, loteria de von Neumann- Morgenstern; prefere&#770;ncia e indiferenc&#807;a; princi&#769;pios do resultado certo, da continuidade, da domina&#770;ncia, da prefere&#770;ncia condicional. Coeficiente de aversa&#771;o ao risco; valor da experimentac&#807;a&#771;o com utilidade; loteria conti&#769;nuas. Aplicac&#807;o&#771;es: problema do seguro; divisa&#771;o do risco.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME916': {
			code: 'ME916',
			name: 'Regressão Quantílica',
			ementa: 'Revisão de Modelos Lineares. Conceitos básicos, terminologia e notações. Definição geral de quantil. Modelo de regressão quantílica linear simples. Modelo de regressão quantílica linear múltiplo. Modelos de regressão quantílica não lineares. Regressão quantílica com censura. Estimação, análise de resíduos, comparação de modelos e testes de hipótese sob as óticas clássica e bayesiana.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME917': {
			code: 'ME917',
			name: 'Introdução a Métodos Não Paramétricos para Estimação de Curvas',
			ementa: 'O histograma. Histograma como um estimador de máxima verossimilhança. Estatísticas do histograma. Estimação de densidades pelo método de Kernel. Estatísticas do estimador por Kernel. A escolha do parâmetro de suavização. Outros estimadores de densidade: séries ortogonais, máxima verossimilhança penalizada. O estimador de Nadaraya-Watson. O método K-nn. Técnicas de regressão não paramétrica para dados correlacionados. Conjunto de dados com outliers: Lowess, L-suavização, R-suavização. Técnicas de regressão não paramétrica por funções de base. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME918': {
			code: 'ME918',
			name: 'Produtos de Dados',
			ementa: 'Importação de dados. Formatação e representação de dados.Dados relacionais. Fluxos de trabalho. Desenvolvimento de produtos utilizando Shiny. Distribuição de produtos Shiny. Criação e distribuição de pacotes R.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME919': {
			code: 'ME919',
			name: 'Introdução a Modelos Lineares',
			ementa: 'Revisa&#771;o de a&#769;lgebra de matrizes; generalizada; tipos de modelos lineares; modelos classificato&#769;rios e modelos funcionais; estimac&#807;a&#771;o por mi&#769;nimos quadrados: equac&#807;o&#771;es normais; valor esperado e varia&#770;ncia dos estimadores; identificabilidade e estimabilidade; teorema de Gauss-Markov e teorema de Gauss-Markov-Aitken; reparametrizac&#807;a&#771;o; forma cano&#770;nica do modelo linear; modelos lineares com restric&#807;o&#771;es nos para&#770;metros; relac&#807;a&#771;o entre OLS e BLUE; distribuic&#807;a&#771;o normal multivariada; distribuic&#807;o&#771;es T, qui- quadrado e F na&#771;o-centrais; distribuic&#807;o&#771;es de formas quadra&#769;ticas; teorema de Cochran; teste de hipo&#769;teses e intervalos de confianc&#807;a para func&#807;o&#771;es estima&#769;veis; aplicac&#807;o&#771;es do modelo linear geral: modelos com n crite&#769;rios de classificac&#807;a&#771;o (efeitos fixos, efeitos aleato&#769;rios e modelo misto), componentes da varia&#770;ncia, modelo de regressa&#771;o; as somas de quadrados tipo I, tipo II, tipo III e tipo IV.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'ME920': {
			code: 'ME920',
			name: 'Introdução à Inferência Causal',
			ementa: 'Conceitos basais; Definic&#807;a&#771;o de Causalidade; Infere&#770;ncia de Causalidade; Equac&#807;o&#771;es estruturais; Grafos e Intervenc&#807;o&#771;es; Teoria de Decisa&#771;o e Infere&#770;ncia Causal; Infere&#770;ncia Causal como um Problema de Predic&#807;a&#771;o; Estrate&#769;gias de tratamento dina&#770;micas; Classificac&#807;a&#771;o cruzada; Estimac&#807;a&#771;o de efeitos diretos e indiretos; Caminhos causais em modelos. na&#771;o lineares; Infere&#770;ncia causal em Se&#769;ries Temporais.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#C3618D',
			obligatory: false
		},
		'MS317': {
			code: 'MS317',
			name: 'Matemática Financeira',
			ementa: 'Noção de taxa de juros. Fluxos de caixa. A calculadora financeira. Operações financeiras. Mercado financeiro. Sistemas de amortização e planilhas financeiras. Comparação entre alternativas de investimento. Extensões.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#D98140',
			obligatory: false
		},
		'MS428': {
			code: 'MS428',
			name: 'Programação Linear',
			ementa: 'Formulação de problemas de programação linear. Resolução Gráfica. Método Simplex. Teoria de dualidade. Análise de sensibilidade e análise paramétrica. Algoritmos de pontos interiores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327', 'MS211'],
			color: '#BD52AF',
			obligatory: false
		},
		'MS515': {
			code: 'MS515',
			name: 'Métodos Probabilísticos em Pesquisa Operacional',
			ementa: 'Programação dinâmica determinística e estocástica. Modelos determinísticos e probabilísticos de estoques.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME210'],
			color: '#D98140',
			obligatory: false
		},
		'MS580': {
			code: 'MS580',
			name: 'Introdução à Teoria Fuzzy',
			ementa: 'Reticulados completos. Conjuntos fuzzy e extensões. Álgebra de conjuntos fuzzy. Números fuzzy. Relações fuzzy. Equações relacionais. Sistemas baseados em regras. Medidas fuzzy. Integrais fuzzy. Esperança fuzzy. Aplicações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MS211'],
			color: '#C756A6',
			obligatory: false
		},
		'MS614': {
			code: 'MS614',
			name: 'Simulação de Sistemas',
			ementa: 'Técnicas de simulação. Planejamento de experiências de simulação. Técnicas de geração de variáveis aleatórias. Modelos de filas, estoques e programação de sistemas. Simulação versus técnicas Analíticas. Simulação de sistemas econômicos. Linguagens de simulação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MC102', 'ME210'],
			color: '#D4618D',
			obligatory: false
		},
		'MS680': {
			code: 'MS680',
			name: 'Modelos Matemáticos para Biologia',
			ementa: 'Modelos de dinâmica de populações homogêneas: ecologia de presa-predador. Exploração e otimização de recursos. Modelos clássicos de Epidemiologia. Modelos em Fisiologia e reações enzimáticas. Equações de diferenças, diferenciais ordinárias e com retardamento. Análise de estabilidade, bifurcação e soluções periódicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['MA211'],
			color: '#C3618D',
			obligatory: false
		},
		'MS714': {
			code: 'MS714',
			name: 'Laboratório de Simulação de Sistemas',
			ementa: 'Desenvolvimento de projetos computacionais, em temas relacionados com teoria de filas, teoria de estoques, planejamento de produção, etc., utilizando pacotes de simulação de sistemas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MS614'],
			color: '#D4618D',
			obligatory: false
		},
		'MS715': {
			code: 'MS715',
			name: 'Planejamento e Controle de Produção',
			ementa: 'A função de produção e seus parâmetros básicos. Custos. Critérios de decisão. Medidas de trabalho. Sistemas de produção. Estoques. Planos e programas integrados. Programação e controle de operações. Será dada ênfase aos modelos matemáticos e aos problemas de planejamento e controle de produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS428'],
			color: '#BD52AF',
			obligatory: false
		},
		'TA541': {
			code: 'TA541',
			name: 'Análise Sensorial de Alimentos',
			ementa: 'O ambiente dos testes sensoriais e outros fatores que influenciam a avaliação sensorial. Métodos Sensoriais: a) métodos discriminativos, b) métodos descritivos, c) métodos afetivos. Análise estatística univariada (ANOVA). Seleção de provadores. Correlação entre medidas sensoriais e instrumentais. Princípios básicos sobre psicofísica: lei de Stevens e Threshold.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40B8D9',
			obligatory: false
		}
	}
};

export default catalogue;
