const catalogue = {
	totalCredits: 203,
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
			subjects: ['LA242', 'MA311', 'ME310', 'ME319', 'ELET6']
		},
		'sem-4': {
			id: '4',
			subjects: ['ME419', 'ME430', 'ME501', 'MS211', 'ELET8']
		},
		'sem-5': {
			id: '5',
			subjects: ['ME524', 'ME613', 'ME623', 'ME639', 'MS512', 'ELET8']
		},
		'sem-6': {
			id: '6',
			subjects: ['ME607', 'ME610', 'ME651', 'ME731', 'ELET8']
		},
		'sem-7': {
			id: '7',
			subjects: ['ME705', 'ME710', 'ME714', 'ELET12']
		},
		'sem-8': {
			id: '8',
			subjects: ['ME810', 'ELET12']
		}
	},

	subjects: {
		'MA111': {
			code: 'MA111',
			name: 'Cálculo I',
			ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'MA141': {
			code: 'MA141',
			name: 'Geometria Analítica e Vetores',
			ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ME110': {
			code: 'ME110',
			name: 'Noções de Estatística',
			ementa: 'Respostas binárias: experimentos aleatorizados, teste exato de Fisher, valor de significância. Aproximação de distribuições: histograma, momentos, curva normal. Distribuições de Bernoulli e binomial. Inferência para proporção em uma população. Respostas multicategóricas: apresentação dos dados e medidas resumo, estimação, teste qui-quadrado de adequação de ajuste, testes de independência e homogeneidade. Respostas numéricas: estatísticas descritivas, ramos e folhas, gráficos e histogramas. Medidas de posição e dispersão. Regressão. Séries temporais: autocorrelação e alisamento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ME111': {
			code: 'ME111',
			name: 'Laboratório de Estatística',
			ementa: 'Atividades de laboratório relacionadas aos conceitos básicos de Estatística, a informática básica e pelo menos um pacote estatístico, incluindo um trabalho final de coleta e análise de dados.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'MS149': {
			code: 'MS149',
			name: 'Complementos de Matemática',
			ementa: 'Noções básicas de lógica. Elementos da teoria dos conjuntos. Princípio da indução. A demonstração em matemática. Conjuntos dos números naturais, inteiros e racionais. Noções de números reais e números complexos. Funções e sequências de números reais. Elementos de análise combinatória.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'LA122': {
			code: 'LA122',
			name: 'Inglês Instrumental I',
			ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', '*MA141']
		},
		'MA327': {
			code: 'MA327',
			name: 'Álgebra Linear',
			ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA141']
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'ME210': {
			code: 'ME210',
			name: 'Probabilidade I',
			ementa: 'Espaço de probabilidade. Axiomas de Kolmogorov, propriedades, independência, probalidade condicional, Teorema de Bayes. Espaços amostrais equiprováveis. Espaços amostrais infinitos. Variáveis e vetores aleatórios discretos bi e tri dimensionais; distribuições marginais, conjuntas e condicionais e independência. Transformações. Momentos. Modelos: uniforme, binomial, geométrica, binomial negativa, hipergeométrica e Poisson. Funções geratrizes. Aproximação da binomial. Variáveis aleatórias contínuas, distribuição, densidade e momentos. Modelos uniformes, exponencial e normal. Simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MS149']
		},
		'LA242': {
			code: 'LA242',
			name: 'Inglês Instrumental à Distância',
			ementa: 'Curso de leitura, à distância, de textos em inglês para fins acadêmicos, com ênfase no desenvolvimento de estratégias de compreensão de leitura em língua estrangeira e estratégias de aquisição de língua através de interação com gêneros de textos da esfera acadêmica, jornalística e de divulgação de ciência, envolvendo o aluno em atividades que demandam estudo autônomo.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:3, D:3, HS:7, SL:0, C:4},
			requisitos: ['LA122']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['*MA211/*MA251']
		},
		'ME310': {
			code: 'ME310',
			name: 'Probabilidade II',
			ementa: 'Vetores Aleatórios, distribuições conjuntas, marginais e condicionais. Independência. Modelos gama, beta, Cauchy, multinomial, multinormal. Transformações. Distribuições t de student, qui-quadrado e F de Snedecor. Conjuntos e condicionais. Desigualdades de Markov, Tchebychev, Jensen e Cauchy-Schwartz. Elementos básicos e aplicações da função característica. Simulações. Teoremas limites básicos: modos de convergência, sequência de ensaios independentes, lei dos grandes números, Teorema Central do Limite.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'ME210']
		},
		'ME319': {
			code: 'ME319',
			name: 'Noções de Inferência',
			ementa: 'Distribuição dos momentos amostrais. Noções de estimação pontual e por intervalo. Métodos de estimação: momentos, máxima verossimilhança, mínimos quadrados. Intervalos de confiança para proporções. Intervalos de confiança para média e variância no caso de normalidade. Noções de teste de hipóteses. Erros de tipo I e II, nível de significância, tamanho e poder do teste. Testes sobre médias e variâncias de distribuições normais. Testes sobre proporções. Tamanho de amostra. Testes não paramétricos baseados em postos para uma e duas amostras.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA211', 'ME210']
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		},
		'ME419': {
			code: 'ME419',
			name: 'Inferência',
			ementa: 'Distribuição Normal bivariada e distribuição de Wishart. Distribuição conjunta do vetor de médias e matriz de convariância amostrais. Estimação pontual: momentos, máxima verossimilhança, mínimos quadrados. Teorema de Gauss-Markov. Estimadores não viciados uniformemente de variância mínima. A família exponencial. Suficiência e completitude. Intervalos de Confiança e regiões de confiança. Testes de hipóteses. Erros tipo I e II, região crítica, nível de significância p-valor, tamanho e poder do teste. Testes UMP. Lema de Neyman-Pearson. Noções de inferência bayesiana e de teoria da decisão.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310', 'ME319']
		},
		'ME430': {
			code: 'ME430',
			name: 'Técnicas de Amostragem',
			ementa: 'Amostragem aleatória simples para se estimar médias, totais, proporções e razões populacionais; amostragem sistemática. Amostragem aleatória estratificada para se estimar médias, totais, proporções e razões populacionais. Estimadores de razão e de regressão. Amostragem por conglomerado em um e dois estágios. Planejamento de amostras.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME319']
		},
		'ME501': {
			code: 'ME501',
			name: 'Processos Estocásticos',
			ementa: 'Cadeias de Markov a tempo discreto. Classificação de estados, noções de recorrência e transiência. Medida estacionária. Reversibilidade. Processo de Poisson. Cadeias de Markov a tempo contínuo, processos de nascimento e morte. Aplicações: noções de teoria de renovação e teoria de filas, simulações.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME310']
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC111']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'ME524': {
			code: 'ME524',
			name: 'Computação Aplicada à Estatística',
			ementa: 'Representação de números em base binária. Erros de truncamento e arredondamento. Organização e manipulação de banco de dados em pelo menos um pacote estatístico. Geração de números pseudo-aleatórios uniformes e não uniformes. Métodos de inversão, aceitação-rejeição e por transformações de variáveis aleatórios. Métodos de Monte Carlo. Método de resolução de sistemas lineares (decomposições QR, Householder, valores singulares, equivalência Gram-Schmidt-QR, número condição). Mínimos quadrados: aplicação à regressão linear. Método de Newton-Raphson. Bootstrap, validação cruzada, jacknife. Aspectos estatísticos em redes neurais. Métodos de simulação usando cadeias de Markov.',
			semestre: 1,
			vector: {T:4, P:0, L:1, O:1, D:0, HS:6, SL:5, C:6},
			requisitos: ['MC102', 'ME310', 'ME319', 'MS211']
		},
		'ME613': {
			code: 'ME613',
			name: 'Análise de Regressão',
			ementa: 'Correlação. Ajuste de modelos de Regressão Linear Simples e Múltipla. Procedimentos de diagnóstico do modelo: Análise de resíduos, influência, multicolinearidade. Modelos polinomiais. Variáveis indicadoras. Seleção de variáveis e construção de modelos. Noções de regressão não linear. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['MA327', 'ME419']
		},
		'ME623': {
			code: 'ME623',
			name: 'Planejamento e Pesquisa',
			ementa: 'Princípios de experimentação: replicação, aleatorização e blocagem. Experimentos completamente aleatorizados. Diagnóstico do modelo. Contrastes e comparações múltiplas. Experimento em blocos. Quadrado Latino. Tamanho amostral. Experimentos fatoriais. Fatoriais 2(n). Fatoriais fracionados 2(n-p). Fatores fixo e aleatórios. Estrutura entre fatores: cruzados e hierárquicos. Componentes da variância. Experimentos em blocos incompletos. Análise de covariância. Split-Plot. Superfície de respostas. Experimentos não balanceados. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME419']
		},
		'ME639': {
			code: 'ME639',
			name: 'Metodologias e Técnicas de Pesquisa',
			ementa: 'Introdução à metodologia científica. Conceito de empirismo. Elaboração de projetos de pesquisa.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MS512': {
			code: 'MS512',
			name: 'Análise Numérica I',
			ementa: 'Fatoração de Choleski. Fatorações ortogonais. Quadrados mínimos lineares. Decomposição em valores singulares. Métodos iterativos para resolução de sistemas lineares. Introdução à resolução de sistemas não-lineares. Cálculo de autovalores e autovetores.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA327', 'MS211']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'ME607': {
			code: 'ME607',
			name: 'Séries Temporais',
			ementa: 'Elementos de processos estocásticos. Estacionaridade. Funções média, correlação e correlação parcial. Equações de diferenças. Distância quadrática média. Aproximação linear ótima. Tendências e sazonalidade. Processos autoregressivos e de média móvel. Não estacionariedade. Métodos: regressão e médias móveis. Processos autoregressivos integrados médias móveis. Estimação da média e correlação parcial. Identificação de modelos. Estimação de parâmetros. Diagnósticos. Critérios de seleção. Previsão. Modelos sazonais. Função de transferência. Modelo ARMAX. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613']
		},
		'ME610': {
			code: 'ME610',
			name: 'Estatística Aplicada',
			ementa: 'Elaboração de relatórios, levando em consideração as normas para construção de tabelas, gráficos e os tipos de "clientes". Análise exploratória de dados. Colocar os alunos diante de situações práticas tentando encontrar soluções estatísticas. Elaboração de relatórios de análise estatística com dados fornecidos pelo professor.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['ME613', 'ME623']
		},
		'ME651': {
			code: 'ME651',
			name: 'Controle Estatístico de Qualidade',
			ementa: 'Ferramentas da Qualidade. Causas de variação. Bases para a construção de Cartas de Controle: Grupos racionais. Cartas de Controle para Variáveis e para Atributos. Análise de padrões em Cartas de Controle. Cartas CUSUM e EWMA. CEP para pequenos lotes. CEP Multivariado. Capacidade de Processo. Análise do Sistema de medição. Planos de aceitação de lotes. Confiabilidade: conceitos, distribuições, tipos de dados e análise não paramétrica. Gestão da Qualidade: Normas e Prêmios. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME319']
		},
		'ME731': {
			code: 'ME731',
			name: 'Métodos em Análise Multivariada',
			ementa: 'Distribuição normal multivariada; análise de variância multivariada; análise de componentes principais; análise fatorial; análise de correspondências; análise de correlações canônicas e análise discriminante. Elaboração de um relatório final que inclua análise de dados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME524', 'ME613']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'ME705': {
			code: 'ME705',
			name: 'Inferência Bayesiana',
			ementa: 'Distribuições a priori e posteriori. Princípios gerais da inferência bayesiana e vínculo com a inferência clássica. Conflito entre priori e posteriori. Utilidade e perda. Permutabilidade: Teorema de De Finetti. Distribuições a priori: próprias, impróprias, conjugadas, informativas e não informativas. Fator de Bayes: comparação de modelos, sensibilidade. Teste de hipóteses bayesianos e regiões de credibilidade. Métodos clássicos de aproximação: integração numérica, integração por Monte Carlo e aproximação analítica de Laplace. Amostragem bayesiana e MCMC.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME419']
		},
		'ME710': {
			code: 'ME710',
			name: 'Assessoria Estatística',
			ementa: 'Interação com um "cliente" de assessoria estatística. Aspectos humanos e técnicos da assessoria estatística. Análise de dados com apresentações e elaborações de relatórios, sob orientação de professores do Departamento de Estatística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['ME610']
		},
		'ME714': {
			code: 'ME714',
			name: 'Análise de Dados Discretos',
			ementa: 'Distribuições discretas e funções geratrizes: Binomial, Multinomial, Poisson, Geométrica, Hipergeométrica, Binomial Negativa. Tabelas de Contingência: Teste de Homogeneidade e independência; Teste exato de Fisher; Teste de McNemar; Medidas de associação. Regressão com variáveis categóricas na matriz X: Codificações para a matriz X. Modelos lineares generalizados e a função de ligação. Regressão logística: dados binários e politômicos. Probito. Mínimos quadrados ponderados. Regressão de Poisson.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['ME613']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'ME810': {
			code: 'ME810',
			name: 'Estágio Supervisionado',
			ementa: 'Desenvolvimento de projeto com análise de dados, apresentações e elaboração de monografia de final de curso, sob orientação de um professor do Departamento de Estatística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['ME710']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		}
	}
};

export default catalogue;
