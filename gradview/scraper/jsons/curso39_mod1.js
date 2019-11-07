const catalogue = {
	totalCredits: 257,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['EQ101', 'F_128', 'MA111', 'MA141', 'QG101']
		},
		'sem-2': {
			id: '2',
			subjects: ['F_129', 'MA211', 'ME414', 'QG102', 'QO427']
		},
		'sem-3': {
			id: '3',
			subjects: ['CE304', 'EQ481', 'MA311', 'QO327']
		},
		'sem-4': {
			id: '4',
			subjects: ['EM312', 'F_315', 'F_328', 'QA313']
		},
		'sem-5': {
			id: '5',
			subjects: ['EM423', 'EQ415', 'EQ541', 'F_329', 'MC102']
		},
		'sem-6': {
			id: '6',
			subjects: ['EQ515', 'EQ583', 'GT001', 'MS211', 'QI242', 'QI244']
		},
		'sem-7': {
			id: '7',
			subjects: ['EQ502', 'EQ601', 'EQ641', 'EQ651', 'EQ712']
		},
		'sem-8': {
			id: '8',
			subjects: ['EQ701', 'EQ741', 'EQ751', 'EQ791', 'EQ812']
		},
		'sem-9': {
			id: '9',
			subjects: ['EQ531', 'EQ771', 'EQ801', 'EQ852', 'ET016']
		},
		'sem-10': {
			id: '10',
			subjects: ['EQ622', 'EQ817', 'EQ861', 'EQ991', 'ELET4']
		},
		'sem-11': {
			id: '11',
			subjects: ['EQ883', 'EQ922', 'EQ950', 'ELET8']
		},
		'sem-12': {
			id: '12',
			subjects: ['EQ004', 'EQ050', 'EQ902']
		}
	},

	subjects: {
		'EQ101': {
			code: 'EQ101',
			name: 'Introdução a Processos e Indústrias Químicas',
			ementa: 'O que é Engenharia Química? Desenvolvimento de um Processo. Ciências da Engenharia Química. Operações Unitárias. Indústria Química.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'F_128': {
			code: 'F_128',
			name: 'Física Geral I',
			ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
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
		'QG101': {
			code: 'QG101',
			name: 'Química I',
			ementa: 'Estrutura atômica, classificação periódica e propriedades dos elementos. Ligação química; estrutura e propriedades das substâncias. Noções de físico-química: termodinâmica, equilíbrios químicos e células eletroquímicas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_129': {
			code: 'F_129',
			name: 'Física Experimental I',
			ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MA211': {
			code: 'MA211',
			name: 'Cálculo II',
			ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA111', 'MA141']
		},
		'ME414': {
			code: 'ME414',
			name: 'Estatística para Experimentalistas',
			ementa: 'Conceitos básicos de probabilidade e estatística descritiva. Principais distribuições discretas e contínuas: Binomial, Hipergeométrica, Poisson, Normal, t, F, qui-quadrado. Amostragem. Estimação, teste de hipótese e intervalo de confiança para médias, proporções e variâncias. Regressão e correlação. Análise de variância.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111']
		},
		'QG102': {
			code: 'QG102',
			name: 'Química Experimental I',
			ementa: 'Experiências ilustrando o método científico, os conceitos de mol e de ligação química, óxido-redução, equilíbrio químico, pH, produto de solubilidade, preparação e purificação de substâncias.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'QO427': {
			code: 'QO427',
			name: 'Química Orgânica I',
			ementa: '1) Reações entre ácidos e bases (Arrhenius, Brønsted e Lewis)2) Alcanos e a análise conformacional3) Estereoquímica4) Reações de adição, substituição e eliminação5) Propriedades e reatividade de nucleófilos (álcoois, aminas, enóis, enaminas, reagentes de Grignard, organolítiados e carbânions)6) Propriedades e reatividade de eletrófilos (aldeídos, cetonas, iminas, ácidos carboxílicos e derivados, haletos de alquila e carbocátions)7) Conjugação e aromaticidade (derivados do benzeno e heteroaromáticos)',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101']
		},
		'CE304': {
			code: 'CE304',
			name: 'Direito',
			ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EQ481': {
			code: 'EQ481',
			name: 'Introdução à Engenharia Química',
			ementa: 'A indústria química. Operações e processos unitários. Estequiometria. Balanços de massa e de energia. Aplicações simples a processos de balanço de massa e energia combinados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ101/*QF531']
		},
		'MA311': {
			code: 'MA311',
			name: 'Cálculo III',
			ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['MA211']
		},
		'QO327': {
			code: 'QO327',
			name: 'Química Orgânica II (Engenharia Química)',
			ementa: 'Técnicas de Laboratório em Química Orgânica. Diferenciações entre hidrocarbonetos. Obtenção de alcenos, cetonas, ésteres, haletos de alquila, fenóis e aminas. Condensação aldólica. Polímeros. Corantes. Sabão. Introdução à cromatografia e a espectroscopia de absorção.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QO427']
		},
		'EM312': {
			code: 'EM312',
			name: 'Desenho Técnico',
			ementa: 'Instrumentação e normas. Teoria das projeções: Monjeanas, cotadas. Axonometria e perspectiva. Construções geométricas. Ajustes e tolerâncias. Desenho de elementos básicos de máquinas. Métodos de composição e de reprodução de desenhos.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'F_315': {
			code: 'F_315',
			name: 'Mecânica Geral I',
			ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA211']
		},
		'F_328': {
			code: 'F_328',
			name: 'Física Geral III',
			ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.Obs.: Recomenda-se que seja cursada previamente MA251 ou disciplina equivalente.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['F_128', 'MA111', 'MA141']
		},
		'QA313': {
			code: 'QA313',
			name: 'Química III (Engenharia Química)',
			ementa: 'Erros e tratamento dos dados analíticos. Gravimetria. Volumetria. Fundamentos dos métodos de análise instrumental (espectrofotometria e potenciometria). Cromatografia.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['QG101', 'QG102']
		},
		'EM423': {
			code: 'EM423',
			name: 'Resistência dos Materiais',
			ementa: 'Noções sobre o material. Conceituação de tensões, solicitação axial. Cisalhamento puro. Torção em eixos circulares. Flexão pura, simples e oblíqua. Deflexão em vigas retas. Estado triplo de tensões e deformações. Círculo de Mohr. Cisalhamento puro. Estado hidrostático de tensões.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*F_313/*F_315']
		},
		'EQ415': {
			code: 'EQ415',
			name: 'Termodinâmica I',
			ementa: 'Revisão e aprofundamento de balanço material e de energia - estados estacionáro e transiente. Entropia - definição e aplicação em processos. Descrição de sistemas simples heterogêneos contendo apenas um componente.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['EQ481', 'MA211']
		},
		'EQ541': {
			code: 'EQ541',
			name: 'Fenômenos de Transporte I',
			ementa: 'Estática e cinemática de fluidos. Equações gerais da dinâmica dos fluidos. Relações integrais e diferenciais. Fluidos Newtonianos e não Newtonianos. Análise dimensional e similaridade. Escoamento laminar e turbulento de fluidos Newtonianos. Camada limite. Escoamento em dutos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*MA311/*F_315']
		},
		'F_329': {
			code: 'F_329',
			name: 'Física Experimental III',
			ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_129', 'MA111']
		},
		'MC102': {
			code: 'MC102',
			name: 'Algoritmos e Programação de Computadores',
			ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'EQ515': {
			code: 'EQ515',
			name: 'Termodinâmica II',
			ementa: 'Cálculo de Grandezas Termodinâmicas de Sistemas Multicomponentes. Equilíbrio de Fases: Líquido-Vapor, Líquido-Líquido, Líquido-Líquido-Vapor, Sólido-Líquido. Equilíbrio Osmótico. Equilíbrio Químico.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ['EQ415']
		},
		'EQ583': {
			code: 'EQ583',
			name: 'Bioengenharia I',
			ementa: 'Introdução à Bioengenharia; Conceitos Básicos de Biologia, Bioquímica e Microbiologia; Enzimas; Mecanismos de Funcionamento das Células; Principais Caminhos Metabólicos; Estequiometria do Crescimento Microbiano e Formação de Produto.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*QO323/*QO427']
		},
		'GT001': {
			code: 'GT001',
			name: 'Ciência, Tecnologia e Sociedade',
			ementa: 'A disciplina visa contribuir para a formação básica dos alunos de graduação dos vários cursos da Unicamp, através da análise das implicações sociais e políticas do desenvolvimento tecnológico nas sociedades contemporâneas, bem como seus determinantes econômicos gerais, com ênfase nas especificidades estruturais do Brasil.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'MS211': {
			code: 'MS211',
			name: 'Cálculo Numérico',
			ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA111', 'MA141', 'MC102']
		},
		'QI242': {
			code: 'QI242',
			name: 'Química Inorgânica Teórica',
			ementa: 'Estrutura Atômica. Periodicidade. Modelos de ligações químicas. Conceitos de acidez e basicidade. Compostos de coordenação. Introdução a compostos organometálicos e à catálise.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101', 'QG102']
		},
		'QI244': {
			code: 'QI244',
			name: 'Química Inorgânica Experimental',
			ementa: 'Conceitos fundamentais envolvidos em reações químicas: reatividade de espécies envolvidas, equilíbrio, estequiometria, oxirredução, rendimento de reação, cinética química e catálise. Reatividade de metais. Preparação de complexos de metais de transição ilustrando a teoria do campo cristalino (efeito do ligante, número de coordenação e cor).',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['QG101', 'QG102']
		},
		'EQ502': {
			code: 'EQ502',
			name: 'Introdução à Análise de Processos',
			ementa: 'Simulação e análise de processos. Modelos. Solução de equações diferenciais ordinárias. Métodos numéricos. Solução em séries de potências. Funções de Bessel. Transformação de Laplace. Séries de Fourier. Casos típicos de equações diferenciais parciais; separação de variáveis; métodos numéricos. Técnicas simples de otimização e sua aplicação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MA311', '*EQ481', '*MS211']
		},
		'EQ601': {
			code: 'EQ601',
			name: 'Laboratório de Engenharia Química I',
			ementa: 'Experiências em laboratório de caráter interdisciplinar, envolvendo programação, montagem, medidas e interpretação de resultados, nos domínios da termodinâmica, transferência de momentum.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414', 'MS211', '*EQ541']
		},
		'EQ641': {
			code: 'EQ641',
			name: 'Fenômenos de Transporte II',
			ementa: 'Condução de calor, regime estacionário e transiente. Convecção natural e forçada. Transferência de calor com mudança de fase. Radiação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ541']
		},
		'EQ651': {
			code: 'EQ651',
			name: 'Operações Unitárias I',
			ementa: 'Equipamentos para o transporte de fluidos: bombas, válvulas, compressores. Caracterização de partículas sólidas. Dinâmica de partículas. Colunas de recheio. Fluidização. Transporte hidráulico e pneumático. Filtração. Sedimentação. Centrifugação. Tratamento e separação de sólidos. Agitação e mistura.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ541']
		},
		'EQ712': {
			code: 'EQ712',
			name: 'Cinética Química Aplicada',
			ementa: 'Cinética química. Cinética das reações homogêneas. Teoria da cinética de reações elementares em fase gasosa e líquida. Reações complexas. Catálise homogênea. Adsorção e catálise heterogênea.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ515']
		},
		'EQ701': {
			code: 'EQ701',
			name: 'Laboratório de Engenharia Química II',
			ementa: 'Experiências em laboratório de caráter interdisciplinar, envolvendo programação, montagem, medidas e interpretação de resultados, nos domínios da transferência de Momentum, Operações Unitárias e Materiais.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ME414', '*EQ651']
		},
		'EQ741': {
			code: 'EQ741',
			name: 'Fenômenos de Transporte III',
			ementa: 'Introdução. Transferência de massa difusiva. Modelos de difusão em gases, líquidos e sólidos. Transferência de massa convectiva. Transferência de massa em regime transiente. Transferência de massa com reação química. Transferência simultânea de calor e massa. Transferência de massa entre fases.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ541', '*EQ502', '*EQ641']
		},
		'EQ751': {
			code: 'EQ751',
			name: 'Operações Unitárias II',
			ementa: 'Trocadores de calor bitubulares, casco e tubos e de placas paralelas. Trocadores com mudança de fase. Redes de trocadores de calor. Cristalização. Refrigeração. Umidificação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ641']
		},
		'EQ791': {
			code: 'EQ791',
			name: 'Análise Técnico-Econômica',
			ementa: 'As três revoluções industriais. Variáveis científico-técnicas e econômicas. Crescimento econômico e desenvolvimento tecnológico. Resíduo. Inovação tecnológica. Micro e macroeconomia. Balanços contabilísticos. Custo de fábrica e preço de venda. Investimentos. Riscos. Técnicas de estimativa de custos e de análise de rentabilidade. Diagnóstico de empresa. Previsão tecnológica.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ481']
		},
		'EQ812': {
			code: 'EQ812',
			name: 'Reatores Químicos',
			ementa: 'Reatores químicos. Reatores químicos de comportamento ideal. Desvios do comportamento ideal. Reatores catalíticos heterogêneos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ515', '*EQ712']
		},
		'EQ531': {
			code: 'EQ531',
			name: 'Aplicações dos Materiais em Engenharia Química',
			ementa: 'Materiais usados em Engenharia Química. Elementos da ciência dos materiais. Metais, polímeros, vidros e cerâmicas. Estrutura, propriedades e comportamento de materiais. Tecnologia dos materiais e tratamento de proteção.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*QI242', '*QI244', '*QO323/*QI242', '*QI244', '*QO427/*QI242', '*QI244', '*QO321', '*QO421/*QG108', '*QI145', '*QI245', '*QO321', '*QO421/*QG108', '*QI145', '*QI245', '*QO321', '*QO521']
		},
		'EQ771': {
			code: 'EQ771',
			name: 'Instrumentação na Indústria Química',
			ementa: 'Diagrama de instrumentação. Instrumentação industrial: medidas de pressão, temperatura, vazão, nível e densidade. Transmissores pneumáticos e eletrônicos. Atuadores industriais. Controladores lógicos programáveis. Sistemas supervisórios.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MS211', '*EQ502', '*EQ541']
		},
		'EQ801': {
			code: 'EQ801',
			name: 'Laboratório de Engenharia Química III',
			ementa: 'Experiências de caráter interdisciplinar envolvendo programação, montagem, medidas e interpretação de resultados, nos domínios das operações unitárias e das reações químicas.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ515', '*EQ601', '*EQ712', 'QA313']
		},
		'EQ852': {
			code: 'EQ852',
			name: 'Operações Unitárias III',
			ementa: 'Destilação. Extração. Lixiviação. Absorção. Adsorção. Secagem.',
			semestre: 1,
			vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EQ515', '*EQ741', '*EQ751']
		},
		'ET016': {
			code: 'ET016',
			name: 'Eletrotécnica',
			ementa: 'Elementos e Leis dos circuitos em C.C. e C.A. Potência e Energia. Circuitos monofásicos e trifásicos. Transformadores. Máquinas elétricas de indução, síncronas e de corrente contínua. Instalações elétricas e dispositivos de proteção.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['F_328']
		},
		'EQ622': {
			code: 'EQ622',
			name: 'Eletroquímica e Corrosão',
			ementa: 'Reações eletroquímicas. Soluções de eletrólitos. Transporte de íons. Células eletroquímicas. Armazenamento de energia. Formas e classificação da corrosão. Corrosão eletroquímica. Corrosão na indústria química e petroquímica.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*EQ531']
		},
		'EQ817': {
			code: 'EQ817',
			name: 'Controle de Processos',
			ementa: 'Introdução ao controle de processos, exemplos, malha aberta e malha fechada. Modelos de sistemas dinâmicos: exemplos e análise. Resposta dinâmica. Transformada de Laplace e resposta temporal. Propriedades básicas de sistemas realimentados. Comportamento em regime permanente, estabilidade e estudo de casos. Projeto e controladores industriais, controladores P, PI e PID.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ502', '*EQ771']
		},
		'EQ861': {
			code: 'EQ861',
			name: 'Preservação do Meio Ambiente',
			ementa: 'Conceitos de poluição e poluentes. Visão histórica. Poluição atmosférica: efeitos regionais e globais, inventário de emissões, controle de emissões. Poluição das águas: qualidade, processo de tratamento, reuso e conservação da água. Resíduos sólidos: classificação, gerenciamento e processos de tratamento e disposição final. Legislação e Normas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ651', '*EQ712', '*EQ741']
		},
		'EQ991': {
			code: 'EQ991',
			name: 'Análise e Simulação de Processos',
			ementa: 'Simulação de processos. Modelos matemáticos e físicos. Simulação de processos por computador. Identificação de parâmetros. Otimização de processos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ502', 'EQ712', '*EQ812']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'EQ883': {
			code: 'EQ883',
			name: 'Bioengenharia II',
			ementa: 'Cinética Enzimática; Cinética Microbiana; Biorreatores; Separação e Purificação de Produtos; Culturas Mistas, Culturas de Células Vegetais e Animais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EQ583', '*EQ712']
		},
		'EQ922': {
			code: 'EQ922',
			name: 'Projeto Químico',
			ementa: 'Planejamento e projeto. Tipo e estrutura de projetos. Balanços de massa e energia, seleção e especificação dos equipamentos e análise econômica de um processo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:6, D:0, HS:10, SL:4, C:10},
			requisitos: ['*EQ791', '*EQ812', '*EQ852', '*EQ817', '*EQ861']
		},
		'EQ950': {
			code: 'EQ950',
			name: 'Introdução ao Trabalho de Conclusão de Curso',
			ementa: 'Apresentação da atividade de Trabalho de Conclusão de Curso e das suas normas. Proposta de tema de trabalho e atribuição de supervisor.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA472']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'EQ004': {
			code: 'EQ004',
			name: 'Estágio de Engenharia Química II',
			ementa: 'Acompanhamento de projetos, montagens e execuções no âmbito da Engenharia Química, junto ao órgão credenciado pelo departamento. O estágio é concluído com a apresentação de um relatório.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
			requisitos: ['EQ481', 'EQ515', '*EQ651']
		},
		'EQ050': {
			code: 'EQ050',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Trabalho individual ou em grupo designado por uma Comissão de Trabalho de Conclusão de Curso da Faculdade de Engenharia Química, e supervisionado por um professor, com apresentação final para uma banca examinadora.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:7, D:0, HS:9, SL:0, C:9},
			requisitos: ['EQ950', '*EQ812', '*EQ852', '*EQ861']
		},
		'EQ902': {
			code: 'EQ902',
			name: 'Laboratório de Engenharia Química IV',
			ementa: 'Experiências de caráter multidisciplinar envolvendo programação, montagem, medidas e interpretações de resultados, no domínio das operações unitárias, reações químicas e bioprocessos.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EQ751', '*EQ701', '*EQ812', '*EQ817', '*EQ852', '*EQ883']
		}
	}
};

export default catalogue;
