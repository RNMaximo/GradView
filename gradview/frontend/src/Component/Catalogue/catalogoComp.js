const sem1 = [
  {
    code: 'F128',
    name: 'Física Geral I',
    ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
    semestre: 1,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'F129',
    name: 'Física Experimental I',
    ementa: 'Grandezas físicas e suas medidas. Erros. Instrumentos de medida. Tabelas, gráficos. Leis de Newton. Lei de Hooke. Estatística de dados, método de mínimos quadrados e propagação de erros. Movimento bidimensional. Conservação de energia. Colisões e conservação do movimento linear.',
    semestre: 1,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ''
  },
  {
    code: 'HZ291',
    name: 'Tópicos Especiais de Humanidades I',
    ementa: 'O curso é dedicado a uma introdução das relações entre ciência, tecnologia e a sociedade contemporânea. Será dada ênfase especial ao caso brasileiro, tentando mostrar como se concretizam essas relações num contexto específico. A abordagem será interdisciplinar, através de uma contribuição da Antropologia, da Ciência Política, da História e da Sociologia.',
    semestre: 1,
    vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ''
  },
  {
    code: 'MA111',
    name: 'Cálculo I',
    ementa: 'Intervalos e desigualdades. Funções. Limites. Continuidade. Derivada e diferencial. Integral. Técnicas de integração.',
    semestre: 1,
    vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ''
  },
  {
    code: 'MA141',
    name: 'Geometria Analítica e Vetores',
    ementa: 'Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.',
    semestre: 1,
    vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'MC102',
    name: 'Algoritmos e Programação de Computadores',
    ementa: 'Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.',
    semestre: 1,
    vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ''
  },
  {
    code: 'QG111',
    name: 'Química Teórica',
    ementa: 'Matéria e radiação eletromagnética; Estrutura atômica; Ligação química; Forças intermoleculares, Metais; Isolantes e semicondutores.',
    semestre: 1,
    vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ''
  },
  {
    code: 'QG122',
    name: 'Química Experimental',
    ementa: 'Funções termodinâmicas; Equilíbrios químicos; Soluções; Eletroquímica; Materiais.',
    semestre: 1,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ''
  },
];

const sem2 = [
  {
    code: 'F228',
    name: 'Física Geral II',
    ementa: 'Oscilações. Gravitação. Ondas em meios elásticos. Ondas sonoras. Hidrostática e hidrodinâmica. Viscosidade. Temperatura. Calorimetria e condução de calor. Leis da termodinâmica; teoria cinética dos gases.',
    semestre: 2,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['F128']
  },
  {
    code: 'F229',
    name: 'Física Experimental II',
    ementa: 'Experiências de laboratório sobre: oscilações, gravitação, ondas em meios elásticos, ondas sonoras, hidrostática e hidrodinâmica, viscosidade, temperatura, calorimetria e condução de calor, leis da termodinâmica e teoria cinética dos gases.',
    semestre: 2,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ['F128', 'F129']
  },
  {
    code: 'LA122',
    name: 'Inglês Instrumental I',
    ementa: 'Leitura de textos em inglês, visando ao desenvolvimento de estratégias globais de leitura e de análise linguística, tendo como base gêneros textuais da esfera acadêmica, jornalística e de divulgação científica, visando a aprimorar a formação acadêmica/profissional do aluno e a promover seu pensamento crítico a partir das realidades sócio-culturais expressas nos textos.',
    semestre: 2,
    vector: {T:2, P:2, L:0, O:0, D:2, HS:6, SL:2, C:4},
    requisitos: ''
  },
  {
    code: 'MA211',
    name: 'Cálculo II',
    ementa: 'Funções de várias variáveis reais. Fórmula de Taylor. Máximos e mínimos. Integrais múltiplas. Integrais de linha. Teorema da divergência. Teorema de Stokes.',
    semestre: 2,
    vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ['MA111', 'MA141']
  },
  {
    code: 'MA327',
    name: 'Álgebra Linear',
    ementa: 'Espaços vetoriais reais. Subespaços. Base e dimensão. Transformações lineares e matrizes. Núcleo e imagem. Projeções. Autovalores e autovetores. Produto interno. Matrizes reais especiais. Diagonalização.',
    semestre: 2,
    vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MA141']
  },
  {
    code: 'MC202',
    name: 'Estruturas de Dados',
    ementa: 'Estruturas básicas para representação de informações: listas, árvores, grafos e suas generalizações. Algoritmos para construção, consulta e manipulação de tais estruturas. Desenvolvimento, implementação e testes de programas usando tais estruturas em aplicações específicas.',
    semestre: 2,
    vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ['MC102']
  },
];

const sem3 = [
  {
    code: 'EA513',
    name: 'Circuitos Elétricos',
    ementa: 'Elementos e Leis de Circuitos. Equacionamento e Soluções de Circuitos por métodos Algébricos e Matriciais. Equacionamento de Circuitos Dinâmicos. Circuitos Monofásicos.',
    semestre: 3,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MA111']
  },
  {
    code: 'F315',
    name: 'Mecânica Geral I',
    ementa: 'Revisão de matrizes e cálculo vetorial. Mecânica Newtoniana. Oscilações lineares. Oscilações não lineares e Caos. Gravitação. Cálculo variacional. Equações de Lagrange e de Hamilton.',
    semestre: 3,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['F128', 'MA211']
  },
  {
    code: 'F328',
    name: 'Física Geral III',
    ementa: 'Lei de Coulomb, Campo Elétrico, Lei de Gauss, Potencial Elétrico, Capacitância, Corrente e Resistência, Força Eletromotriz e Circuitos Elétricos, Campo Magnético, Lei de Ampère, Lei da Indução de Faraday, Indutância, Propriedades Magnéticas da Matéria, Oscilações Eletromagnéticas, Correntes Alternadas, Equações de Maxwell.',
    semestre: 3,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['F128', 'MA111', 'MA141']
  },
  {
    code: 'F329',
    name: 'Física Experimental III',
    ementa: 'Experiências de laboratório sobre: lei de Coulomb e campo elétrico, lei de Gauss, potencial elétrico, capacitores e dielétricos, corrente, resistência e força eletromotriz, circuitos e instrumentos de corrente contínua, campo magnético de uma corrente, forças magnéticas sobre correntes, força eletromotriz induzida e circuitos de corrente alternada.',
    semestre: 3,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ['F129', 'MA111']
  },
  {
    code: 'MA311',
    name: 'Cálculo III',
    ementa: 'Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.',
    semestre: 3,
    vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ['MA211']
  },
  {
    code: 'MC322',
    name: 'Programação Orientada a Objetos',
    ementa: 'Conceitos básicos e avançados de programação orientada a objetos. Aplicação dos conceitos usando uma linguagem orientada a objetos.',
    semestre: 3,
    vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC202']
  },

];

const sem4 = [
  {
    code: 'EA772',
    name: 'Circuitos Lógicos',
    ementa: 'Conceitos lógicos. Circuitos básicos. Minimização de funções Booleanas. Sistemas de numeração. Aritmética binária. Códigos. Circuitos a contato. Síntese de circuitos combinacionais. Circuitos de memória. Circuitos sequenciais. Projeto de circuitos sequenciais. Considerações sobre a velocidade de operação dos circuitos digitais.',
    semestre: 4,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'EM423',
    name: 'Resistência dos Materiais',
    ementa: 'Noções sobre o material. Conceituação de tensões, solicitação axial. Cisalhamento puro. Torção em eixos circulares. Flexão pura, simples e oblíqua. Deflexão em vigas retas. Estado triplo de tensões e deformações. Círculo de Mohr. Cisalhamento puro. Estado hidrostático de tensões.',
    semestre: 4,
    vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
    requisitos: ['F315']
  },
  {
    code: 'F428',
    name: 'Física Geral IV',
    ementa: 'Ondas Eletromagnéticas, Óptica Geométrica, Interferência, Difração, Teoria da Relatividade, Física Quântica, Modelos Atômicos, Condução de Eletricidade em Sólidos, Física Nuclear, Quarks, Léptons, e o Big-Bang.',
    semestre: 4,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['F328']
  },
  {
    code: 'F429',
    name: 'Física Experimental IV',
    ementa: 'Experiências de laboratório sobre: propriedades magnéticas da matéria, correntes alternadas, ondas eletromagnéticas, reflexão e refração da luz, polarização, interferência e difração da luz e introdução à física atômica e nuclear.',
    semestre: 4,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ['F329']
  },
  {
    code: 'MC358',
    name: 'Fundamentos Matemáticos da Computação',
    ementa: 'Conceitos básicos de matemática discreta e de lógica para computação. Técnicas de provas, indução matemática. Relações e conceitos de teoria de grafos. Modelagem de problemas usando grafos.',
    semestre: 4,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'MC404',
    name: 'Organização Básica de Computadores e Linguagem de Montagem',
    ementa: 'Introdução à organização de computadores e representação de informação na memória. Estudo do conjunto de instruções de processadores relevantes. Desenvolvimento, implementação e testes de programas usando linguagens de montagem. Espaço de endereçamento físico e mapeamento de endereços para memória e periféricos. Programação de dispositivos de entrada e saída. Tratamento de interrupções.',
    semestre: 4,
    vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC202']
  },
];
const sem5 = [
  {
    code: 'EE400',
    name: 'Métodos da Engenharia Elétrica',
    ementa: 'Sistemas de coordenadas e vetores. Gradiente, divergente, rotacional e laplaciano. Teoremas de Gauss e de Stokes. Funções de variáveis complexas. Resíduos e pólos. Método de transformação conforme; método de separação de variáveis na solução da equação de Laplace.',
    semestre: 5,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MA311']
  },
  {
    code: 'EE532',
    name: 'Eletrônica Aplicada',
    ementa: 'Dispositivos semicondutores: diodos, transistores BJT e MOS. Circuitos com amplificadores operacionais. Conversão de dados: características, amostragem e análise de ruído. Sensores: características e condicionamento de seus sinais. Atuadores.',
    semestre: 5,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['EA513']
  },
  {
    code: 'MC458',
    name: 'Projeto e Análise de Algoritmos I',
    ementa: 'Técnicas de projeto e análise de algoritmos. Ferramental Matemático para Análise de Algoritmos. Projeto de algoritmos por indução. Busca, ordenação e estatísticas de ordem. Programação Dinâmica. Algoritmos Gulosos.',
    semestre: 5,
    vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC202', 'MC358']
  },
  {
    code: 'MC613',
    name: 'Laboratório de Circuitos Digitais',
    ementa: 'Metodologia de projeto digital. Técnicas de projeto usando lógica programável. Características elétricas de circuitos digitais. Projeto e implementação de lógica combinacional: decodificadores e seletores. Flip-flops. Contadores. Circuitos aritméticos. Memórias. Projeto e implementação de lógica seqüencial. Máquinas de estados. Via de dados. Introdução a VHDL.',
    semestre: 5,
    vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['EA772']
  },
  {
    code: 'MC750',
    name: 'Construção de Interfaces Homem',
    ementa: 'Introdução a Interfaces Humano-Computador (IHC). Aspectos humanos. Aspectos tecnológicos. Processos, métodos e técnicas de pesquisa, design e avaliação. Ferramentas de suporte. Concepção, modelagem e prototipação de soluções em interfaces de usuário.',
    semestre: 5,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC322']
  },
  {
    code: 'ME323',
    name: 'Introdução aos Modelos Probabilísticos',
    ementa: 'Introdução à probabilidade. Variáveis aleatórias. Esperança de variável aleatória. Vetor aleatório. Noções de inferência estatística. Introdução aos processos estocásticos.',
    semestre: 5,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MA211']
  },
];
const sem6 = [
  {
    code: 'EE534',
    name: 'Laboratório de Eletrônica Aplicada',
    ementa: 'Análise e síntese de circuitos eletrônicos utilizando: diodos, transistores BJT e MOS, amplificadores operacionais, conversores de dados, sensores e atuadores.',
    semestre: 6,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ['EE532']
  },
  {
    code: 'MC426',
    name: 'Engenharia de Software',
    ementa: 'Paradigmas da Engenharia de Software. Processos de Software. Modelos de Processo de Software. Extração e Especificação de Requisitos. Análise e Projeto de Sistemas de Software. Padrões de Arquitetura e Padrões de Projeto.',
    semestre: 6,
    vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC322']
  },
  {
    code: 'MC536',
    name: 'Bancos de Dados: Teoria e Prática',
    ementa: 'Arquiteturas de sistemas de gerenciamento de bancos de dados. Modelagem de dados: modelos conceituais e lógicos, incluindo o modelo relacional e normalização. Álgebra relacional. Linguagens de definição e de manipulação de dados. Otimização de consultas. Mecanismos de proteção, recuperação e segurança. Controle de concorrência. Bancos de dados não relacionais. Projeto e desenvolvimento de ferramentas e técnicas utilizadas na solução de problemas de sistemas de informação, utilizando bancos de dados. Modelagem, especificação, projeto e implementação de aplicações em sistemas de informação.',
    semestre: 6,
    vector: {T:3, P:3, L:0, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ['MC322']
  },
  {
    code: 'MC558',
    name: 'Projeto e Análise de Algoritmos II',
    ementa: 'Grafos: conceitos e algoritmos. Reduções entre problemas. Programação Linear. Classes de Problemas.',
    semestre: 6,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MA327', 'MC458']
  },
  {
    code: 'MC732',
    name: 'Projeto de Sistemas Computacionais',
    ementa: 'Uma introdução à arquitetura e organização de computadores. Tecnologias e perspectiva histórica. Medidas de desempenho. Conjunto de instruções. Memória. Unidades de aritmética e lógica. Projeto básico de um processador. Pipeline. Hierarquia da memória: cache e memória virtual. Dispositivos de Entrada/Saída.',
    semestre: 6,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC404', 'EA772']
  },
  {
    code: 'MS211',
    name: 'Cálculo Numérico',
    ementa: 'Aritmética de ponto flutuante. Zeros de funções reais. Sistemas lineares. Interpolação polinomial. Integração numérica. Quadrados mínimos lineares. Tratamento numérico de equações diferenciais ordinárias.',
    semestre: 6,
    vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MA111', 'MA141', 'MC102']
  },
];
const sem7 = [
  {
    code: 'ELET7',
    name: 'Eletiva',
    ementa: '',
    semestre: 7,
    vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
    requisitos: ''
  },
  {
  code: 'BE310',
  name: 'Ciências do Ambiente',
  ementa: 'População humana e recursos naturais renováveis e não renováveis. Interação entre o homem e ambientes naturais ou construídos. Ambientes brasileiros terrestres e aquáticos. Análise de ambientes: diagramas energéticos e modelos. O homem como modificador do ambiente. População, energia, clima, ecotoxicologia, extinção, biodiversidade e sustentabilidade. Direito ecológico e política ambiental. Responsabilidade do profissional com relação à sociedade e ao ambiente.',
  semestre: 7,
  vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
  requisitos: ['AA430']
},
  {
    code: 'CE304',
    name: 'Direito',
    ementa: 'Fundamento de direito público e privado. Aplicação de normas jurídicas aos fatos econômicos.',
    semestre: 7,
    vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ''
  },
  {
    code: 'MC504',
    name: 'Sistemas Operacionais',
    ementa: 'Conceito de processos: concorrências, regiões críticas, escalonamento. Conceitos de espaços de endereçamento e de gerenciamento de memória virtual, paginação, segmentação. Sistemas de arquivos: hierarquia, proteção, organização, segurança. Gerenciamento de Entrada/Saída. Estudos de caso.',
    semestre: 7,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC404']
  },
];
const sem8 = [
  {
    code: 'ELET8',
    name: 'Eletiva',
    ementa: '',
    semestre: 8,
    vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:16},
    requisitos: ''
  },
  {
    code: 'CE838',
    name: 'Contabilidade para Engenharia',
    ementa: 'A empresa e a tomada de decisões. Funções da contabilidade. Relatórios Contábeis. Análise aplicada das demonstrações financeiras e indicadores nas empresas.',
    semestre: 8,
    vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ['MA311']
  },
  {
    code: 'CE839',
    name: 'Introdução à Administração para Computação',
    ementa: 'Administração pública e privada. Funções e princípios da administração. O planejamento da empresa.',
    semestre: 8,
    vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ''
  },
  {
    code: 'MC832',
    name: 'Redes de Computadores',
    ementa: 'Redes de Computadores e a Internet. Terminologia e aplicações, topologias, modelos de arquitetura e protocolos. Camadas de Aplicação, Transporte, Rede, Enlace e Física. Redes sem Fio.',
    semestre: 8,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC504']
  },
];
const sem9 = [
  {
    code: 'ELET9',
    name: 'Eletiva',
    ementa: '',
    semestre: 9,
    vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:9},
    requisitos: ''
  },
  {
    code: 'CE738',
    name: 'Economia para Engenharia',
    ementa: 'O processo de produção visto pelas óticas micro e macroeconômicas. Produção e propriedade. Produção como técnica e como processo social. Agregação da produção. Mercados. Papel do governo.',
    semestre: 9,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'MC714',
    name: 'Sistemas Distribuídos',
    ementa: 'Sistemas Distribuídos. Comunicação entre processos. Sistemas de arquivos distribuídos. Nomes. Tempo e Coordenação. Replicação. Segurança.',
    semestre: 9,
    vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ['MC504']
  },
  {
    code: 'MC833',
    name: 'Programação de Redes de Computadores',
    ementa: 'Programação utilizando diferentes tecnologias de comunicação: sockets, TCP e UDP, e chamada de método remoto.',
    semestre: 9,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
    requisitos: ['MC832']
  },
  {
    code: 'MC921',
    name: 'Projeto e Construção de Compiladores',
    ementa: 'Métodos de análise sintática. Sistemas de execução. Geração e Otimização de códigos objeto. Recuperação de erros. Implementação de um projeto prático na área de Compiladores.',
    semestre: 9,
    vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ['MC504']
  },
];
const sem10 = [
  {
    code: 'ELET10',
    name: 'Eletiva',
    ementa: '',
    semestre: 10,
    vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
    requisitos: ''
  },
  {
    code: 'MC030',
    name: 'Projeto Final de Graduação',
    ementa: 'Projeto teórico ou prático orientado por um ou mais docentes do Instituto de Computação, acompanhado por monografia redigida pelo aluno.',
    semestre: 10,
    vector: {T:0, P:2, L:0, O:10, D:0, HS:12, SL:0, C:12},
    requisitos: ['AA200', 'AA480']
  },
];
const catalogoComp = [...sem1, ...sem2, ...sem3, ...sem4, ...sem5, ...sem6, ...sem7, ...sem8, ...sem9, ...sem10]
export default catalogoComp;
