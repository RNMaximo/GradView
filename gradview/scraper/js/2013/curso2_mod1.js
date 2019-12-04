const catalogue = {
	totalCredits: 205,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MA111', 'MA141', 'ME100', 'ME110', 'ME111']
		},
		'sem-2': {
			id: '2',
			subjects: ['LA122', 'MA211', 'MA327', 'MC102', 'ME210']
		},
		'sem-3': {
			id: '3',
			subjects: ['LA242', 'MA311', 'ME310', 'ME319', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['ME419', 'ME430', 'ME501', 'MS211', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['ME524', 'ME613', 'ME623', 'ME639', 'MS512', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['ME607', 'ME610', 'ME651', 'ME731', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['ME705', 'ME710', 'ME714', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['ME810', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 42,
			hasRestrictions: true,
			subjects: ['BB125', 'CE138', 'CE451', 'CE738', 'CE939', 'EU502', 'MA044', 'MA502', 'MA602', 'ME502', 'ME601', 'ME612', 'ME630', 'ME652', 'ME661', 'ME701', 'ME706', 'ME715', 'ME716', 'ME720', 'ME721', 'ME730', 'ME732', 'ME850', 'MS317', 'MS428', 'MS515', 'MS580', 'MS614', 'MS680', 'MS714', 'MS715', 'TA541'],
		},
		'elet-2': {
			credits: 12,
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
			color: '#40D9D9',
			obligatory: true
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940BD',
			obligatory: true
		},
		'ME100': {
			code: 'ME100',
			name: 'Fundamentos de Cálculo',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em Matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9AF',
			obligatory: true
		},
		'ME110': {
			code: 'ME110',
			name: 'Noções de Estatística',
			ementa: 'Respostas binárias: experimentos aleatorizados, teste exato de Fisher, valor de significância. Aproximação de distribuições: histograma, momentos, curva normal. Distribuições de Bernoulli e binomial. Inferência para proporção em uma população. Respostas multicategóricas: apresentação dos dados e medidas resumo, estimação, teste qui-quadrado de adequação de ajuste, testes de independência e homogeneidade. Respostas numéricas: estatísticas descritivas, ramos e folhas, gráficos e histogramas. Medidas de posição e dispersão. Regressão. Séries temporais: autocorrelação e alisamento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99340',
			obligatory: true
		},
		'ME111': {
			code: 'ME111',
			name: 'Laboratório de Estatística',
			ementa: 'Atividades de laboratório relacionadas aos conceitos básicos de Estatística, a informática básica e pelo menos um pacote estatístico, incluindo um trabalho final de coleta e análise de dados.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando o desenvolvimento de estratégias globais de leitura e de análise linguística.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4085D9',
			obligatory: true
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141'],
			color: '#8D8DCB',
			obligatory: true
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141'],
			color: '#D940BD',
			obligatory: true
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#CB40D9',
			obligatory: true
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'ME100'],
			color: '#40D9C4',
			obligatory: true
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Curso de leitura, à distância, de textos em inglês para fins acadêmicos, com ênfase no desenvolvimento de estratégias de compreensão de leitura em língua estrangeira e estratégias de aquisição de língua através de interação com textos escritos.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#4E40D9',
			obligatory: true
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211'],
			color: '#8D8DCB',
			obligatory: true
		},
		'ME310': {
			code: 'ME310',
			name: 'Probabilidade II',
			ementa: 'Vetores Aleatórios, distribuições conjuntas, marginais e condicionais. Independência. Modelos gama, beta, Cauchy, multinomial, multinormal. Transformações. Distribuições t de student, qui-quadrado e F de Snedecor. Conjuntos e condicionais. Desigualdades de Markov, Tchebychev, Jensen e Cauchy-Schwartz. Elementos básicos e aplicações da função característica. Simulações. Teoremas limites básicos: modos de convergência, sequência de ensaios independentes, lei dos grandes números, Teorema Central do Limite.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'ME210'],
			color: '#67B3C8',
			obligatory: true
		},
		'ME319': {
			code: 'ME319',
			name: 'Noções de Inferência',
			ementa: 'Distribuição dos momentos amostrais. Noções de estimação pontual e por intervalo. Métodos de estimação: momentos, máxima verossimilhança, mínimos quadrados. Intervalos de confiança para proporções. Intervalos de confiança para média e variância no caso de normalidade. Noções de teste de hipóteses. Erros de tipo I e II, nível de significância, tamanho e poder do teste. Testes sobre médias e variâncias de distribuições normais. Testes sobre proporções. Tamanho de amostra. Testes não paramétricos baseados em postos para uma e duas amostras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200', 'MA211', 'ME210'],
			color: '#67B3C8',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ME419': {
			code: 'ME419',
			name: 'Inferência',
			ementa: 'Distribuição Normal bivariada e distribuição de Wishart. Distribuição conjunta do vetor de médias e matriz de convariância amostrais. Estimação pontual: momentos, máxima verossimilhança, mínimos quadrados. Teorema de Gauss-Markov. Estimadores não viciados uniformemente de variância mínima. A família exponencial. Suficiência e completitude. Intervalos de Confiança e regiões de confiança. Testes de hipóteses. Erros tipo I e II, região crítica, nível de significância p-valor, tamanho e poder do teste. Testes UMP. Lema de Neyman-Pearson. Noções de inferência bayesiana e de teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310', 'ME319'],
			color: '#67B3C8',
			obligatory: true
		},
		'ME430': {
			code: 'ME430',
			name: 'Técnicas de Amostragem',
			ementa: 'Amostragem aleatória simples para se estimar médias, totais, proporções e razões populacionais; amostragem sistemática. Amostragem aleatória estratificada para se estimar médias, totais, proporções e razões populacionais. Estimadores de razão e de regressão. Amostragem por conglomerado em um e dois estágios. Planejamento de amostras.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME319'],
			color: '#67B3C8',
			obligatory: true
		},
		'ME501': {
			code: 'ME501',
			name: 'Processos Estocásticos',
			ementa: 'Cadeias de Markov a tempo discreto. Classificação de estados, noções de recorrência e transiência. Medida estacionária. Reversibilidade. Processo de Poisson. Cadeias de Markov a tempo contínuo, processos de nascimento e morte. Aplicações: noções de teoria de renovação e teoria de filas, simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310'],
			color: '#67B3C8',
			obligatory: true
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102'],
			color: '#A173D0',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ME524': {
			code: 'ME524',
			name: 'Computação Aplicada à Estatística',
			ementa: 'Representação de números em base binária. Erros de truncamento e arredondamento. Organização e manipulação de banco de dados em pelo menos um pacote estatístico. Geração de números pseudo-aleatórios uniformes e não uniformes. Métodos de inversão, aceitação-rejeição e por transformações de variáveis aleatórios. Métodos de Monte Carlo. Método de resolução de sistemas lineares (decomposições QR, Householder, valores singulares, equivalência Gram-Schmidt-QR, número condição). Mínimos quadrados: aplicação à regressão linear. Método de Newton-Raphson. Bootstrap, validação cruzada, jacknife. Aspectos estatísticos em redes neurais. Métodos de simulação usando cadeias de Markov.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['MC102', 'ME310', 'ME319', 'MS211'],
			color: '#8F86CE',
			obligatory: true
		},
		'ME613': {
			code: 'ME613',
			name: 'Análise de Regressão',
			ementa: 'Correlação. Ajuste de modelos de Regressão Linear Simples e Múltipla. Procedimentos de diagnóstico do modelo: Análise de resíduos, influência, multicolinearidade. Modelos polinomiais. Variáveis indicadoras. Seleção de variáveis e construção de modelos. Noções de regressão não linear. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['MA327', 'ME419'],
			color: '#A07AC3',
			obligatory: true
		},
		'ME623': {
			code: 'ME623',
			name: 'Planejamento e Pesquisa',
			ementa: 'Princípios de experimentação: replicação, aleatorização e blocagem. Experimentos completamente aleatorizados. Diagnóstico do modelo. Contrastes e comparações múltiplas. Experimento em blocos. Quadrado Latino. Tamanho amostral. Experimentos fatoriais. Fatoriais 2(n). Fatoriais fracionados 2(n-p). Fatores fixo e aleatórios. Estrutura entre fatores: cruzados e hierárquicos. Componentes da variância. Experimentos em blocos incompletos. Análise de covariância. Split-Plot. Superfície de respostas. Experimentos não balanceados. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME419'],
			color: '#67B3C8',
			obligatory: true
		},
		'ME639': {
			code: 'ME639',
			name: 'Metodologias e Técnicas de Pesquisa',
			ementa: 'Introdução à metodologia científica. Conceito de empirismo. Elaboração de projetos de pesquisa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A1D940',
			obligatory: true
		},
		'MS512': {
			code: 'MS512',
			name: 'Análise Numérica I',
			ementa: 'Fatoração de Choleski. Fatorações ortogonais. Quadrados mínimos lineares. Decomposição em valores singulares. Métodos iterativos para resolução de sistemas lineares. Introdução à resolução de sistemas não-lineares. Cálculo de autovalores e autovetores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MS211'],
			color: '#BD5AC7',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ME607': {
			code: 'ME607',
			name: 'Séries Temporais',
			ementa: 'Elementos de processos estocásticos. Estacionaridade. Funções média, correlação e correlação parcial. Equações de diferenças. Distância quadrática média. Aproximação linear ótima. Tendências e sazonalidade. Processos autoregressivos e de média móvel. Não estacionariedade. Métodos: regressão e médias móveis. Processos autoregressivos integrados médias móveis. Estimação da média e correlação parcial. Identificação de modelos. Estimação de parâmetros. Diagnósticos. Critérios de seleção. Previsão. Modelos sazonais. Função de transferência. Modelo ARMAX. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#A07AC3',
			obligatory: true
		},
		'ME610': {
			code: 'ME610',
			name: 'Estatística Aplicada',
			ementa: 'Elaboração de relatórios, levando em consideração as normas para construção de tabelas, gráficos e os tipos de \"clientes\". Análise exploratória de dados. Colocar os alunos diante de situações práticas tentando encontrar soluções estatísticas. Elaboração de relatórios de análise estatística com dados fornecidos pelo professor.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['ME613', 'ME623'],
			color: '#8497C6',
			obligatory: true
		},
		'ME651': {
			code: 'ME651',
			name: 'Controle Estatístico de Qualidade',
			ementa: 'Ferramentas da Qualidade. Causas de variação. Bases para a construção de Cartas de Controle: Grupos racionais. Cartas de Controle para Variáveis e para Atributos. Análise de padrões em Cartas de Controle. Cartas CUSUM e EWMA. CEP para pequenos lotes. CEP Multivariado. Capacidade de Processo. Análise do Sistema de medição. Planos de aceitação de lotes. Confiabilidade: conceitos, distribuições, tipos de dados e análise não paramétrica. Gestão da Qualidade: Normas e Prêmios. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME319'],
			color: '#67B3C8',
			obligatory: true
		},
		'ME731': {
			code: 'ME731',
			name: 'Métodos em Análise Multivariada',
			ementa: 'Distribuição normal multivariada; análise de variância multivariada; análise de componentes principais; análise fatorial; análise de correspondências; análise de correlações canônicas e análise discriminante. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME524', 'ME613'],
			color: '#9880C9',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ME705': {
			code: 'ME705',
			name: 'Inferência Bayesiana',
			ementa: 'Distribuições a priori e posteriori. Princípios gerais da inferência bayesiana e vínculo com a inferência clássica. Conflito entre priori e posteriori. Utilidade e perda. Permutabilidade: Teorema de De Finetti. Distribuições a priori: próprias, impróprias, conjugadas, informativas e não informativas. Fator de Bayes: comparação de modelos, sensibilidade. Teste de hipóteses bayesianos e regiões de credibilidade. Métodos clássicos de aproximação: integração numérica, integração por Monte Carlo e aproximação analítica de Laplace. Amostragem bayesiana e MCMC.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME419'],
			color: '#67B3C8',
			obligatory: true
		},
		'ME710': {
			code: 'ME710',
			name: 'Assessoria Estatística',
			ementa: 'Interação com um \"cliente\" de assessoria estatística. Aspectos humanos e técnicos da assessoria estatística. Análise de dados com apresentações e elaborações de relatórios, sob orientação de professores do Departamento de Estatística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['ME610'],
			color: '#8497C6',
			obligatory: true
		},
		'ME714': {
			code: 'ME714',
			name: 'Análise de Dados Discretos',
			ementa: 'Distribuições discretas e funções geratrizes: Binomial, Multinomial, Poisson, Geométrica, Hipergeométrica, Binomial Negativa. Tabelas de Contingência: Teste de Homogeneidade e independência; Teste exato de Fisher; Teste de McNemar; Medidas de associação. Regressão com variáveis categóricas na matriz X: Codificações para a matriz X. Modelos lineares generalizados e a função de ligação. Regressão logística: dados binários e politômicos. Probito. Mínimos quadrados ponderados. Regressão de Poisson.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#A07AC3',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ME810': {
			code: 'ME810',
			name: 'Estágio Supervisionado',
			ementa: 'Desenvolvimento de projeto com análise de dados, apresentações e elaboração de monografia de final de curso, sob orientação de um professor do Departamento de Estatística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['ME710'],
			color: '#8497C6',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'BB125': {
			code: 'BB125',
			name: 'Fundamentos de Biologia Molecular',
			ementa: 'Estrutura do DNA e replicação. Mutações e reparo do DNA. Estrutura do RNA e transcrição. Síntese e endereçamento de proteínas. Regulação da expressão gênica. Uso de técnicas recombinantes no diagnóstico e tratamento de saúde (sequenciamento de DNA, southern/northern/western blotting, clonagem, PCR, e outros).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#405CD9',
			obligatory: false
		},
		'CE138': {
			code: 'CE138',
			name: 'Estratégias de Empresas para Engenharia',
			ementa: 'Conceitos básicos de economia. Introdução à macroeconomia. Processo de globalização e de reestruturação produtiva. Estratégias empresariais: inovação, concorrência e estratégias competitivas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MA311'],
			color: '#8D8DCB',
			obligatory: false
		},
		'CE451': {
			code: 'CE451',
			name: 'Métodos Quantitativos Aplicados à Economia Financeira',
			ementa: 'Processo decisório em condições de risco. Risco e retorno de um ativo e de uma carteira. Seleção de carteiras e teoria de Markowitz. Modelo de índice único. Modelo de índice múltiplo. Outros modelos de escolha de carteiras. Análise da utilidade do investidor. Modelo de precificação de ativos. Modelo de formação de preços por arbritagem. Eficiência de mercado. Mercado de opções e métodos de apreçamento. Mercado de renda fixa: formação de preços e administração de carteiras.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#CBD940',
			obligatory: false
		},
		'CE738': {
			code: 'CE738',
			name: 'Economia para Engenharia',
			ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7740D9',
			obligatory: false
		},
		'CE939': {
			code: 'CE939',
			name: 'Gestão de Marketing',
			ementa: 'Conceito de Marketing. Mercados e estruturas de mercado. O composto mercadológico. Abordagem a partir da análise, adaptação, ativação e avaliação. Abordagem a partir do produto, preço, promoção, ponto de vista e pós-venda. Mercados específicos: caracterização, análise, tendências. Plano de marketing.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#D9BD40',
			obligatory: false
		},
		'EU502': {
			code: 'EU502',
			name: 'Metrologia Industrial',
			ementa: 'O sistema brasileiro de normalização. Terminologia normalizada sobre medição, desvios e erros. Sistemas de medição. Erros e incertezas. Calibração de instrumentos. Rastreabilidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ME319'],
			color: '#67B3C8',
			obligatory: false
		},
		'MA044': {
			code: 'MA044',
			name: 'Matemática IV',
			ementa: 'Números complexos. Funções de variável complexa. Equações de Cauchy-Riemann. Integral de linha. Sequências e séries de números complexos. Séries de potências. Teorema dos resíduos. Transformações conformes.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#77D940',
			obligatory: false
		},
		'MA502': {
			code: 'MA502',
			name: 'Análise I',
			ementa: 'Conjuntos finitos e infinitos. Números reais. Sequências e séries numéricas. Funções contínuas. Funções deriváveis.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['AA200'],
			color: '#D94069',
			obligatory: false
		},
		'MA602': {
			code: 'MA602',
			name: 'Análise II',
			ementa: 'Integral de Riemann. Integral imprópria. Sequências e séries de funções. Convergência uniforme. Teorema de aproximação de Weierstrass. Teorema de Ascoli.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40D95C',
			obligatory: false
		},
		'ME502': {
			code: 'ME502',
			name: 'Processos Estocásticos II',
			ementa: 'Passeio aleatório simples: leis de arcoseno, recorrência/transiência, funções de Green. Martingais: desigualdades básicas, convergência, teorema de parada opcional. Aplicações. Movimento Browniano. Processos estacionários.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME501'],
			color: '#67B3C8',
			obligatory: false
		},
		'ME601': {
			code: 'ME601',
			name: 'Tópicos Especiais em Estatística Aplicada I',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#40AFD9',
			obligatory: false
		},
		'ME612': {
			code: 'ME612',
			name: 'Métodos Estatísticos para Ciências Biológicas',
			ementa: 'Conceitos básicos de epidemiologia. Ensaios clínicos aleatorizados. Função de sobrevivência e função risco. Principais distribuições utilizadas em análise de sobrevivência. Tabelas de vida em análise de sobrevivência. Comparações de curva de sobrevivência. Modelos paramétricos e semi-paramétricos em análise de sobrevivência. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613'],
			color: '#A07AC3',
			obligatory: false
		},
		'ME630': {
			code: 'ME630',
			name: 'Iniciação Científica I',
			ementa: 'Atividades de iniciação científica em estatística e/ou probabilidade supervisionadas por docentes do curso e aprovadas pela comissão de docentes responsáveis pela disciplina, resultando em apresentação de seminário(s) e relatório técnico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D96940',
			obligatory: false
		},
		'ME652': {
			code: 'ME652',
			name: 'Controle Estatístico de Qualidade II',
			ementa: 'Pressupostos e limitações do CEP básico. Técnicas especiais de CEP univariado. CEP para processos multivariados. Controle de engenharia de processos. Experimentos planejados para melhoria de processos. Otimização de processos com experimentos. Amostragem de aceitação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME623', 'ME651', 'ME731'],
			color: '#77A2C8',
			obligatory: false
		},
		'ME661': {
			code: 'ME661',
			name: 'Métodos Não Paramétricos',
			ementa: 'O histograma. Histograma como um estimador de máxima verossimilhança. Estatísticas do histograma. Estimação de densidades pelo método de Kernel. Estatísticas do estimador por Kernel. A escolha do parâmetro de suavização. Outros estimadores de densidade: séries ortogonais, máxima verossimilhança penalizada. O estimador de Nadaraya-Watson. O método K-nn. Técnicas de regressão não paramétrica para dados correlacionados. Conjunto de dados com outliers: Lowess, L-suavização, R-suavização. Técnicas de regressão não paramétrica por funções de base.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#A07AC3',
			obligatory: false
		},
		'ME701': {
			code: 'ME701',
			name: 'Tópicos Especiais em Estatística Aplicada II',
			ementa: 'A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#A140D9',
			obligatory: false
		},
		'ME706': {
			code: 'ME706',
			name: 'Robustez',
			ementa: 'Modelos normal e de locação-escala. Estimação parâmetros, interesse no outlier e suas causas. Propriedades ótimas de estimadores tradicionais sob hipóteses estritas e impacto dos outliers. Distribuição normal: otimalidade da média amostral sob normalidade. Resistência. Alternativas resistentes aos estimadores tradicionais. Invariância e equivariância dos estimadores de locação e de escala. Curva de sensibilidade e ponto de ruptura. Noção ingênua de robustez qualitativa. Relação entre resistência e robustez qualitativa. Robustez em eficiência.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#A07AC3',
			obligatory: false
		},
		'ME715': {
			code: 'ME715',
			name: 'Econometria',
			ementa: 'Revisão de técnicas de regressão. Extensões. Equações simultâneas. Mínimos quadrados generalizados. Variáveis instrumentais. Identificação. Estimação em sistemas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME613'],
			color: '#A07AC3',
			obligatory: false
		},
		'ME716': {
			code: 'ME716',
			name: 'Teoria da Informação',
			ementa: 'Entropia, entropia relativa e informação mútua. Taxas de entropia de um processo estocástico: cadeias de Markov, taxas de entropia de um passeio aleatório. Compressão de dados. Exemplos de códigos. Desigualdade de Kraft. Código de Huffman. Shannon-Fano-Elias coding. Complexidade de Kolmogorov. Modelos de Computação. Complexidade de Kolmogorov e entropia. Algoritmos aleatórios e sequências incompreensíveis. A estatística suficiente de Kolmogorov. Introdução à Channel Capacity. Entropia máxima e estimação espectral. Introdução à teoria da taxa de distorção. Desigualdades em teoria da informação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME419'],
			color: '#67B3C8',
			obligatory: false
		},
		'ME720': {
			code: 'ME720',
			name: 'Modelos Lineares Generalizados',
			ementa: 'Revisão de Modelos Lineares. Conceitos básicos, terminologia e notações. Família exponencial de distribuições e Modelos Lineares Generalizados. Estimação e Inferência. Verificação do ajuste do modelo. Modelos para dados binários. Modelos para dados de contagem. Sobredispersão e modelo binomial negativa. Modelos para dados de contagem com excesso de zeros. Modelos não lineares e Modelos lineares mistos. Elaboração de relatórios que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME524', 'ME613'],
			color: '#9880C9',
			obligatory: false
		},
		'ME721': {
			code: 'ME721',
			name: 'Demografia',
			ementa: 'Estudo de população. Recenseamento: normas, erros, composição por sexo, idade, etc. Natalidade, migrações, mortalidade. Tábuas de mortalidade. Modelos estocásticos de crescimento populacional. Projeções.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME419'],
			color: '#67B3C8',
			obligatory: false
		},
		'ME730': {
			code: 'ME730',
			name: 'Iniciação Científica II',
			ementa: 'Atividades de iniciação científica em estatística e/ou probabilidade supervisionadas por docentes do curso e aprovadas pela comissão de docentes responsáveis pela disciplina, resultando em apresentação de seminário(s) e relatório técnico.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:4, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA200'],
			color: '#D94093',
			obligatory: false
		},
		'ME732': {
			code: 'ME732',
			name: 'Métodos em Análise Multivariada II',
			ementa: 'Análise de agrupamentos: tipos de algoritmos, similaridade, \"k-means\", hierárquicos e outros, métodos de validação. Análise de Associação: conjuntos de itens frequentes, regras booleanas, outros tipos de regras, avaliação de padrões de associação. Classificação: árvores de decisão, aprendizado de máquina, vizinho mais próximo, bayesiano, métodos de grupos e avaliação de classificadores. Detecção de anomalias. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: '',
			color: '#4ED940',
			obligatory: false
		},
		'ME850': {
			code: 'ME850',
			name: 'Seminários de Estatística',
			ementa: 'Palestras sobre temas em diversas áreas da estatística, apresentados por profissionais internos e externos ao âmbito acadêmico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['ME419'],
			color: '#67B3C8',
			obligatory: false
		},
		'MS317': {
			code: 'MS317',
			name: 'Matemática Financeira',
			ementa: 'Noção de taxa de juros. Fluxos de caixa. A calculadora financeira. Operações financeiras. Mercado financeiro. Sistemas de amortização e planilhas financeiras. Comparação entre alternativas de investimento. Extensões.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111'],
			color: '#40D9D9',
			obligatory: false
		},
		'MS428': {
			code: 'MS428',
			name: 'Programação Linear',
			ementa: 'Formulação de problemas de programação linear. Resolução Gráfica. Método Simplex. Teoria de dualidade. Análise de sensibilidade e análise paramétrica. Algoritmos de pontos interiores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'MA327'],
			color: '#B367C4',
			obligatory: false
		},
		'MS515': {
			code: 'MS515',
			name: 'Métodos Probabilísticos em Pesquisa Operacional',
			ementa: 'Programação dinâmica determinística e estocástica. Modelos determinísticos e probabilísticos de estoques.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME210'],
			color: '#40D9C4',
			obligatory: false
		},
		'MS580': {
			code: 'MS580',
			name: 'Introdução à Teoria Fuzzy',
			ementa: 'O conceito de subjetividade e os conjuntos fuzzy. Álgebra de conjuntos fuzzy. Números fuzzy. Relações binárias fuzzy. Composição. Equações relacionais. Medidas fuzzy. Integrais fuzzy. Esperança fuzzy. Sistemas variacionais fuzzy. Aplicações em biomatemática.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', 'MS211', 'ME210'],
			color: '#7A9ECA',
			obligatory: false
		},
		'MS614': {
			code: 'MS614',
			name: 'Simulação de Sistemas',
			ementa: 'Noções de estruturas de dados, cadeias de Markov, teoria de filas e teoria de estoques. Geração de variáveis aleatórias: números aleatórios, métodos da transformação inversa, da convolução e da rejeição, métodos para distribuições clássicas. Simulação de sistemas discretos com lista de eventos futuros. Simulação de sistemas contínuos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MC102', 'ME210'],
			color: '#868DCF',
			obligatory: false
		},
		'MS680': {
			code: 'MS680',
			name: 'Modelos Matemáticos para Biologia',
			ementa: 'Formulação e estudo de modelos matemáticos para dinâmica populacional, processos bioquímicos e fisiologia, por meio de equações recursivas e equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211'],
			color: '#8D8DCB',
			obligatory: false
		},
		'MS714': {
			code: 'MS714',
			name: 'Laboratório de Simulação de Sistemas',
			ementa: 'Desenvolvimento de projetos computacionais, em temas relacionados com teoria de filas, teoria de estoques, planejamento de produção, etc., utilizando pacotes de simulação de sistemas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MS614'],
			color: '#868DCF',
			obligatory: false
		},
		'MS715': {
			code: 'MS715',
			name: 'Planejamento e Controle de Produção',
			ementa: 'A função de produção e seus parâmetros básicos. Custos. Critérios de decisão. Medidas de trabalho. Sistemas de produção. Estoques. Planos e programas integrados. Programação e controle de operações. Será dada ênfase aos modelos matemáticos e aos problemas de planejamento e controle de produção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS428'],
			color: '#B367C4',
			obligatory: false
		},
		'TA541': {
			code: 'TA541',
			name: 'Análise Sensorial de Alimentos',
			ementa: 'O ambiente dos testes sensoriais e outros fatores que influenciam a avaliação sensorial. Métodos Sensoriais: a) métodos discriminativos, b) métodos descritivos, c) métodos afetivos. Análise estatística univariada (ANOVA). Seleção de provadores. Correlação entre medidas sensoriais e instrumentais. Princípios básicos sobre psicofísica: lei de Stevens e Threshold.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D985',
			obligatory: false
		}
	}
};

export default catalogue;
