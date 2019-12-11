const catalogue = {
	totalCredits: 160,
	maxCreditsSem: 32,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['TT108', 'TT110', 'ST109', 'TT107', 'TT109', 'TT101', 'TT106', 'ST008']
		},
		'sem-2': {
			id: '2',
			subjects: ['TT130', 'TT209', 'TT207', 'TT206', 'ELET02', 'TT208', 'TT210', 'TT211']
		},
		'sem-3': {
			id: '3',
			subjects: ['TT308', 'TT301', 'TT307', 'ELET03', 'TT302', 'TT306', 'ST568']
		},
		'sem-4': {
			id: '4',
			subjects: ['TT350', 'TT096', 'TT407', 'TT406', 'TT409', 'TT401', 'ELET04', 'TT408', 'ST668']
		},
		'sem-5': {
			id: '5',
			subjects: ['TT501', 'ELET05', 'TT503', 'TT508', 'TT509', 'TT504', 'TT510']
		},
		'sem-6': {
			id: '6',
			subjects: ['TT603', 'TT601', 'ELET06']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 4,
			hasRestrictions: true,
			subjects: ['ST001', 'ST002', 'ST005', 'ST007', 'ST090', 'TT007', 'TT104', 'TT105'],
		},
		'elet-2': {
			credits: 16,
			hasRestrictions: true,
			subjects: ['ST050', 'ST052', 'ST066', 'ST363', 'ST468', 'ST567', 'ST776', 'TT001', 'TT002', 'TT003', 'TT004', 'TT005', 'TT006', 'TT008', 'TT080', 'TT081', 'TT083', 'TT084', 'TT086', 'TT087', 'TT090', 'TT092', 'TT093', 'TT094', 'TT095', 'TT097', 'TT098', 'TT099', 'TT304', 'TT309'],
		},
		'elet-3': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['TT505', 'TT506', 'TT613', 'TT614'],
		},
		'elet-4': {
			credits: 6,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94699',
			obligatory: true
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B98B46',
			obligatory: true
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Noções básicas sobre circuitos lógicos. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9468B',
			obligatory: true
		},
		'TT107': {
			code: 'TT107',
			name: 'Circuitos Elétricos I',
			ementa: 'Carga elétrica. Campo elétrico. Diferença de potencial, corrente e resistência elétrica. Elementos e leis de circuitos. Equacionamento e Soluções de circuitos por métodos algébricos e matriciais. Teoremas de Thevenin e Norton. Instrumentos de medida.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#9446B9',
			obligatory: true
		},
		'TT108': {
			code: 'TT108',
			name: 'Fundamentos para Telecomunicações',
			ementa: 'Histórico das telecomunicações, introdução aos sinais e sistemas de telecomunicações, atualidades e tendências da tecnologia de telecomunicações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B99946',
			obligatory: true
		},
		'TT109': {
			code: 'TT109',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Vetores no R2 e no R3. Produto Escalar e Vetorial. A Reta. O Plano. Distâncias. Cônicas e Quádricas. Dependência e Independência Linear. Espaço Vetorial Real. Transformações Lineares. Autovalores e Autovetores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5DB946',
			obligatory: true
		},
		'TT110': {
			code: 'TT110',
			name: 'Introdução ao Trabalho em Laboratórios',
			ementa: 'Introdução aos erros, conceitos elementares de estatística, lógica e procedimento experimental, instrumentos e métodos de laboratório do curso de oferecimento da disciplina, processamento de resultados experimentais, noções de segurança de trabalho no laboratório, elaboração de documentos técnicos e científicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96246',
			obligatory: true
		},
		'TT130': {
			code: 'TT130',
			name: 'Linguagem e Técnica de Programação I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estruturas de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'TT206': {
			code: 'TT206',
			name: 'Circuitos Elétricos II',
			ementa: 'Capacitores. Indutores. Equacionamento de circuitos dinâmicos. Circuitos em correntes alternadas. Números complexos. Impedância complexa. Fasores. Transformada de Laplace e Fourier. Circuitos ressonantes. Transitórios. Circuitos monofásicos. Sistemas Polifásicos. Osciloscópios e geradores de funções.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT107'],
			color: '#9446B9',
			obligatory: true
		},
		'TT207': {
			code: 'TT207',
			name: 'Probabilidades e Teoria da Informação',
			ementa: 'Conceitos básicos de estatística. Medidas de tendência central. Medidas de dispersão. Correlação Linear. Teoria elementar de probabilidade. Distribuição Binomial, de Poisson, Exponencial Negativa, Normal, de Rayliehg, Rician e Nakagami. Introdução aos processos estocásticos. Aplicações nas telecomunicações. Conceitos, princípios e fundamentos gerais da teoria dos sistemas de transmissão de informação.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#B9A746',
			obligatory: true
		},
		'TT208': {
			code: 'TT208',
			name: 'Métodos Matemáticos para Telecomunicações',
			ementa: 'Funções de várias variáveis reais. Derivadas e diferenciais. Máximos e Mínimos. Integrais Múltiplas. Séries Numéricas e Séries de Funções. Transformada de Laplace. Equações diferenciais parciais e série de Fourier. Outros temas relevantes para o curso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT101'],
			color: '#A2B946',
			obligatory: true
		},
		'TT209': {
			code: 'TT209',
			name: 'Introdução ao Eletromagnetismo',
			ementa: 'Cálculo vetorial aplicado ao eletromagnetismo. Campos eletrostáticos no vácuo e nos materiais dielétricos. Aplicações das equações de Poisson e Laplace.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B958',
			obligatory: true
		},
		'TT210': {
			code: 'TT210',
			name: 'Circuitos Eletrônicos',
			ementa: 'Semicondutores. Circuitos com diodos semicondutores. Transistores bipolares. O transistor como fonte de corrente. Circuitos polarização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#79B946',
			obligatory: true
		},
		'TT211': {
			code: 'TT211',
			name: 'Oscilações e Ondas',
			ementa: 'Oscilações, Ondas Mecânicas, Ondas Eletromagnéticas, Interferência, Difração, Tópicos Especiais sobre Ondas Eletromagnéticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9467D',
			obligatory: true
		},
		'ELET02': {
			code: 'ELET02',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B9468B',
			obligatory: true
		},
		'TT301': {
			code: 'TT301',
			name: 'Eletromagnetismo',
			ementa: 'Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos. Equações de Maxwell. Redação e propagação de ondas eletromagnéticas no vácuo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT209'],
			color: '#46B958',
			obligatory: true
		},
		'TT302': {
			code: 'TT302',
			name: 'Circuitos Digitais',
			ementa: 'Sistemas de numeração; Portas lógicas e álgebra booleana; Circuitos lógicos combinacionais; Flip-Flops e dispositivos relacionados; Aritmética digital: Operações e circuitos; Famílias lógicas; Contadores e registradores; Contadores binários: tipos, divisor da frequência. Memórias: tipos, expansão, tempo de acesso. Conversores analógicos/digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4666B9',
			obligatory: true
		},
		'TT306': {
			code: 'TT306',
			name: 'Circuitos Eletrônicos II',
			ementa: 'Amplificadores operacionais ideais. Circuitos com amplificadores operacionais. Amplificadores de potência e fontes de alimentação. Princípios de operação e características de FETs. Polarização de FETs. Configurações típicas. Acoplamento entre estágios amplificadores. Resposta de frequência de amplificadores. Amplificadores de potência de AF. Osciladores. Temporizador. Multivibrador astável. Shimitt trigger.',
			semestre: 1,
			vector: {T:3, P:0, L:3, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT210'],
			color: '#79B946',
			obligatory: true
		},
		'TT307': {
			code: 'TT307',
			name: 'Fundamentos dos Materiais Elétricos',
			ementa: 'Elementos de ciência dos materiais. Tecnologia dos materiais elétricos. Materiais condutores e isolantes. Materiais semicondutores. Materiais magnéticos. Principais aplicações. Técnicas de microfabricação. Teoria e Aplicações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4674B9',
			obligatory: true
		},
		'TT308': {
			code: 'TT308',
			name: 'Fundamentos para Processamento Digital de Sinais',
			ementa: 'Familiarização e utilização de ferramenta computacional para simulação de sistemas de telecomunicações. Caracterização de sinais analógicos e digitais. Aplicações da Transformada de Fourier para a Análise Temporal e Espectral de sinais. Transmissão de sinais digitais, conceitos de banda passante e ruído de canal. Amostragem de sinais analógicos, quantização e critério de Nyquist. Conceitos básicos de Modulações Analógicas e Digitais.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT108'],
			color: '#B99946',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'ST668': {
			code: 'ST668',
			name: 'Redes de Comunicação II',
			ementa: 'Protocolos para interconexão de redes. Arquiteturas e Protocolos para comunicação sem fio. Gerência de redes. Introdução a redes móveis e ópticas. Comunicação multimídia. Modelos de tráfego. Desenvolvimento de protocolos de comunicação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568'],
			color: '#B9468B',
			obligatory: true
		},
		'TT096': {
			code: 'TT096',
			name: 'Processamento Digital de Sinais',
			ementa: 'Digitalização de sinais analógicos, sinais e sistemas discretos no tempo. Estrutura de realização de sistemas discretos: equação de diferença e função de transparência, resposta em frequência e estabilidade. Filtros Digitais: classificação e estruturas de realização. Transformada de Fourier: transformada discreta de Fourier e convolução circular, algoritmo da transformada rápida de Fourier e aplicações. Efeitos de quantização de coeficientes e variáveis. Projeto de filtros digitais: projeto de filtros recursivos, projeto de filtros não recursivos, considerações práticas para implementação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT308'],
			color: '#B99946',
			obligatory: true
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9466F',
			obligatory: true
		},
		'TT401': {
			code: 'TT401',
			name: 'Microcontroladores',
			ementa: 'Arquitetura e princípios de operação de microcontroladores. Interfaces. Projeto com microcontroladores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#4666B9',
			obligatory: true
		},
		'TT406': {
			code: 'TT406',
			name: 'Ondas Guiadas',
			ementa: 'Teoria de Linhas de Transmissão: Equação de Onda, Tensão e Corrente na Linha, Constante de Propagação, Impedância Característica, Coeficiente de Reflexão, Razão de Onda Estacionária, Carta de Smith. Casamento de Impedâncias. Guias de Ondas; Modos TE e TM, Perdas em Guias de Ondas, Dispersão. Cavidades Ressonantes. Outros Dispositivos. Parâmetros S. Matriz de parâmetros S. Guias de Ondas Dielétricos: Fibras Ópticas, Propagação, Atenuação e Dispersão em Fibras Ópticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT301'],
			color: '#46B958',
			obligatory: true
		},
		'TT407': {
			code: 'TT407',
			name: 'Laboratório de Ondas Guiadas',
			ementa: 'Técnicas de Medições em Linhas de Transmissão e Guias de Ondas. Medições no domínio do tempo: tempo de trânsito na linha, impedância característica, velocidade de propagação, permissividade relativa do dielétrico. Medições de indutância e capacitância. Diagrama Zig-Zag. Medições no domínio da frequência: defasagem da linha de Transmissão. Medição da atenuação vs frequência. Introdução ao Analisador Vetorial de Redes e ao Refletômetro Óptico. Manuseio de fibras ópticas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT301'],
			color: '#46B958',
			obligatory: true
		},
		'TT408': {
			code: 'TT408',
			name: 'Tecnologias de Radiofrequência e Micro- Ondas',
			ementa: 'Filtros, Casadores de Impedância, Transmissores, Receptores, Amplificadores Sintonizados de Baixo Sinal, Osciladores de RF. Modulação Analógica em Amplitude, Frequência e Fase, Misturadores, PLL e Sintetizadores de Frequência. Parâmetros de Espalhamento (parâmetro S). Dispositivos Passivos de Micro-ondas. Ruído. Diodos de Micro-ondas. Amplificadores de RF e Micro-ondas. Transistorizados. Osciladores de Micro-ondas a Semicondutores. Válvulas de Micro-ondas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TT210'],
			color: '#79B946',
			obligatory: true
		},
		'TT409': {
			code: 'TT409',
			name: 'Laboratório de Radiofrequência e Micro- Ondas',
			ementa: 'Técnicas de Medições em Dispositivos de Radiofrequência e Micro-ondas. Utilização do Analisador Vetorial de Redes, Analisador de Espectros e outros equipamentos de Radiofrequência e Micro-ondas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*TT210'],
			color: '#79B946',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'TT501': {
			code: 'TT501',
			name: 'Propagação de Ondas Eletromagnéticas - Antenas',
			ementa: 'Tipos de propagação. Propagação no espaço livre. Propagação na atmosfera. Influência do solo e de obstáculos. Propagação ionosférica. Efeitos da atmosfera na propagação de micro-ondas e de ondas milimétricas. Características gerais das antenas. Antenas lineares de onda estacionária. Antenas de ondas caminhantes. Redes de antenas. Síntese de redes de antenas. Antenas de abertura. Antenas com refletores. Sistemas de alimentação das antenas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT301'],
			color: '#46B958',
			obligatory: true
		},
		'TT503': {
			code: 'TT503',
			name: 'Dispositivos Fotônicos',
			ementa: 'Introdução. Estado atual da tecnologia. Propagação de Luz em Fibras Ópticas: Propriedades. Tipos de fibra - características: dispersão, atenuação, efeitos não-lineares. Cabos Ópticos. Conectores Ópticos. Emendas, Acopladores. Geradores e receptores Ópticos. Fotodetectores PIN e APD. Amplificação Óptica. Novas tecnologias. Óptica integrada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT307', 'TT406'],
			color: '#469789',
			obligatory: true
		},
		'TT504': {
			code: 'TT504',
			name: 'Economia e Finanças',
			ementa: 'Modelo Keynesiano, Governo: Política Orçamentária, Setor Externo, Mercado: Inflação e Emprego. Análise microeconômica, planejamento econômico. Capacidade de geração de serviços. Noções de custos, formação de preço de venda. Aspectos societários e trabalho autônomo, aspectos trabalhistas, regimes tributários. Gestão do conhecimento e da informação. Sistemas de apoio à decisão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8646B9',
			obligatory: true
		},
		'TT508': {
			code: 'TT508',
			name: 'Sistema de Telecomunicações',
			ementa: 'Modulações analógicas e digitais. Temas escolhidos de Rádio Digital. Comunicação via satélite, arquitetura dos transponders e da estação terrena. Temas escolhidos de transmissão digital, hierarquias digitais PDH e SDH, Sistemas Digitais de Radioenlaces por Micro-ondas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#4666B9',
			obligatory: true
		},
		'TT509': {
			code: 'TT509',
			name: 'Projetos de Sistemas de Telecomunicações',
			ementa: 'Projetos assistidos por computador de sistemas e subsistemas de telecomunicações. Simulação e/ou Projetos das modulações analógicas e digitais de AM, FM e Fase. Projetos de Amplificadores de RF. Projetos de Radioenlaces. Simulação de redes de alta velocidade.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT302'],
			color: '#4666B9',
			obligatory: true
		},
		'TT510': {
			code: 'TT510',
			name: 'Comunicações Móveis',
			ementa: 'Sistemas de comunicações móveis; Técnicas de predição de sinais; Caracterização do canal rádio móvel em ambientes internos e externos; Estudos de interferência; Modulação e sistemas de transmissão; Métodos de acessos em comunicações móveis; Projetos de sistemas móveis; Telefonia móvel celular: descrição dos sistemas (1G, 2G, 2.5G, 3G e 4G), protocolos e sinalização, padrões; Portabilidade Numérica; RFID; WiMAX; Noções de sistemas de comunicação móveis por satélite; Redes de comunicações pessoais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TT408'],
			color: '#79B946',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946B4',
			obligatory: true
		},
		'TT603': {
			code: 'TT603',
			name: 'Comunicações Ópticas',
			ementa: 'Introdução. Propagação em fibras ópticas: degradação de sinal. Sistemas Ponto-Ponto. Sistemas WDM. Tendências Evolutivas. Capacidade e fatores limitantes. Balanço de Potência. Critérios de Projeto. Enlaces com Amplificadores Ópticos. Compensação de dispersão. Efeitos não-lineares. Sistemas Ópticos em rede. Tipos de serviços. Redes locais. Redes metropolitanas. Redes CATV. Redes Integradas. Comutação Óptica. Medidas e caracterização de enlaces. Caracterização de fontes, receptores e sistemas. Ruídos. Tópicos Avançados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT503'],
			color: '#469789',
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
		'ST001': {
			code: 'ST001',
			name: 'Português',
			ementa: 'Desenvolvimento verbal. Organização do pensamento. Linguagem escrita e falada. Redação de textos técnicos. Elaboração de Relatório. Regras de tratamento e utilização de tempos verbais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B99D',
			obligatory: false
		},
		'ST002': {
			code: 'ST002',
			name: 'Inglês Técnico',
			ementa: 'Traduções e Interpretações de Textos Técnicos. Vocabulário e Gramática.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94662',
			obligatory: false
		},
		'ST005': {
			code: 'ST005',
			name: 'Relações Humanas',
			ementa: 'Das ciências do comportamento: individual e social. Princípios éticos e hierárquicos. Da divisão das pessoas: naturais e jurídicas. Da responsabilidade civil. Direitos Humanos e suas implicações nas relações individuais. Noções de Direito Civil.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:2, C:2},
			requisitos: '',
			color: '#94B946',
			obligatory: false
		},
		'ST007': {
			code: 'ST007',
			name: 'Humanidades',
			ementa: 'Estrutura do mundo moderno. Ação do indivíduo na atualidade. Os veículos de comunicação em massas. As artes e sua conceituação. O indivíduo como componente de um mundo cultural. O cinema, o teatro e sua importância no mundo moderno. Os grandes conflitos e suas consequências no plano cultural. Relacionamento entre os povos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B96F46',
			obligatory: false
		},
		'ST050': {
			code: 'ST050',
			name: 'Tópicos Avançados em Redes',
			ementa: 'Disciplina de ementa aberta.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568'],
			color: '#B9468B',
			obligatory: false
		},
		'ST052': {
			code: 'ST052',
			name: 'Introdução ao Processamento Discreto de Sinais',
			ementa: 'Sinais e Sistemas Discretos no Tempo. Amostragem de Sinais Contínuos no Tempo. Transformada de Fourier Discreta. Computação e Análise de Sinais usando Transformada de Fourier Discreta.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#464BB9',
			obligatory: false
		},
		'ST066': {
			code: 'ST066',
			name: 'Tópicos Avançados em Arquitetura de Computadores',
			ementa: 'Tópicos de organização e arquitetura. Máquinas multinível. Máquinas risc. Arquitetura paralela. Arquiteturas avançadas e alternativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B9468B',
			obligatory: false
		},
		'ST090': {
			code: 'ST090',
			name: 'Ergonomia - Aplicação Prática ao Trabalho',
			ementa: 'Conceitos sobre o estudo do espaço, posturas e posições de trabalho. Manipulação de materiais e ferramentas manuais. Movimentação de materiais. Trabalho repetitivo e com computador. Organização do trabalho. A importância da antropometria na adequação do trabalho ao homem. Condições ambientais de trabalho (Norma Regulamentadora 17). Avaliação ergonômica: roteiros e métodos para simplificar a avaliação.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'ST363': {
			code: 'ST363',
			name: 'Linguagem e Técnica de Programação II',
			ementa: 'Estudo e desenvolvimento em uma linguagem de programação Orientada a Objetos. Técnicas de depuração e documentação de programas.',
			semestre: 1,
			vector: {T:0, P:0, L:4, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4690B9',
			obligatory: false
		},
		'ST468': {
			code: 'ST468',
			name: 'Cálculo Numérico',
			ementa: 'Erro de truncamento e arredondamento. Aritmética de ponto flutuante. Zeros de funções. Métodos de solução de sistemas lineares. Resolução de problemas não-lineares. Interpolação. Ajuste de funções. Integração numérica.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B0B946',
			obligatory: false
		},
		'ST567': {
			code: 'ST567',
			name: 'Banco de Dados I',
			ementa: 'Fundamentos de sistemas de bancos de dados e conceitos relacionados com a estrutura conceitual e lógica dos bancos de dados. Modelos de dados e sua aplicação no desenvolvimento de projetos de bancos de dados. Introdução a Sistemas de Gerenciamento de Banco de Dados.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST363'],
			color: '#4690B9',
			obligatory: false
		},
		'ST776': {
			code: 'ST776',
			name: 'Poluição Sonora e Vibrações',
			ementa: 'Noções básicas sobre acústica. Pressão sonora e nível de pressão sonora. Propagação do som. Adição e subtração de níveis de pressão sonora. A audição humana. Influência dos níveis de ruído na saúde humana: perda auditiva. Influência da vibração na saúde humana: sistema esquelético, articulações e sistema circulatório. Fontes de geração de ruídos e vibrações. Metodologia de avaliação (Norma Regulamentadora 15, NHO 01 da Fundacentro, Normas da ABNT). Técnicas de minimização de ruídos e vibrações. Normas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B982',
			obligatory: false
		},
		'TT001': {
			code: 'TT001',
			name: 'Tópicos em Computação e Informática I',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA425'],
			color: '#86B946',
			obligatory: false
		},
		'TT002': {
			code: 'TT002',
			name: 'Tópicos em Computação e Informática II',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA435'],
			color: '#4658B9',
			obligatory: false
		},
		'TT003': {
			code: 'TT003',
			name: 'Tópicos em Computação e Informática III',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#4FB946',
			obligatory: false
		},
		'TT004': {
			code: 'TT004',
			name: 'Tópicos em Computação e Informática IV',
			ementa: 'Estudo de temas relevantes em Computação e Informática. A ementa desta disciplina será definida por ocasião de seu oferecimento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA450'],
			color: '#B946A7',
			obligatory: false
		},
		'TT005': {
			code: 'TT005',
			name: 'Tópicos Especiais em Telecomunicações I',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#6BB946',
			obligatory: false
		},
		'TT006': {
			code: 'TT006',
			name: 'Tópicos Especiais em Telecomunicações II',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B95446',
			obligatory: false
		},
		'TT007': {
			code: 'TT007',
			name: 'Tópicos Especiais em Telecomunicações III',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#46B94B',
			obligatory: false
		},
		'TT008': {
			code: 'TT008',
			name: 'Tópicos Especiais em Telecomunicações IV',
			ementa: 'Estudo de assuntos relevantes em telecomunicações de acordo com a evolução tecnológica.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA200'],
			color: '#B94654',
			obligatory: false
		},
		'TT080': {
			code: 'TT080',
			name: 'Matemática Discreta Aplicada',
			ementa: 'Introdução matemática. Princípio multiplicativo. Princípio aditivo. Permutação, arranjo, combinação. Princípio de inclusão e exclusão. Funções geradoras. Partição de um inteiro. Relações de recorrências. O princípio da casa dos pombos. Noções de teoria dos grafos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B974',
			obligatory: false
		},
		'TT081': {
			code: 'TT081',
			name: 'Teoria da Informação',
			ementa: 'Conceitos, princípios e fundamentos gerais de sistemas de informações.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6B46B9',
			obligatory: false
		},
		'TT083': {
			code: 'TT083',
			name: 'Conceitos de Televisão',
			ementa: 'Introdução. Sistemas de TV acromáticos de baixa resolução e sinais envolvidos. Sistemas de TV a cores e sinais envolvidos. Modulação e demodulação de sinais de TV em AM-VSB. Transmissores e receptores e suas características. Dimensionamento de enlaces em UHF e SHF. Modulação demodulação FM. Análise e dimensionamento de TV a cabo. Fundamentos de TV de alta definição - HDTV: principais sistemas, sinais de áudio e vídeo, digitalização, compressão, correção de erro e multiplexação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B9B446',
			obligatory: false
		},
		'TT084': {
			code: 'TT084',
			name: 'Micro-Ondas',
			ementa: 'Dispositivos ativos de micro-ondas. Diodos especiais. Transistores para micro-ondas. Detectores para micro-ondas. Amplificadores para micro-ondas. Osciladores de micro-ondas. Válvulas de micro-ondas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT501'],
			color: '#46B958',
			obligatory: false
		},
		'TT086': {
			code: 'TT086',
			name: 'Microcontroladores II',
			ementa: 'Projeto utilizando micro-controladores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT401'],
			color: '#4666B9',
			obligatory: false
		},
		'TT087': {
			code: 'TT087',
			name: 'Eletrônica de Potência',
			ementa: 'Diodos de potência. Retificadores. Tiristores. Retificadores controlados. Controladores de tensão AC. Transistores de potência. Retalhadores DC. Inversores. Controle de motores DC. Controle do motores AC. Experimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT206'],
			color: '#9446B9',
			obligatory: false
		},
		'TT090': {
			code: 'TT090',
			name: 'Conversão de Energia',
			ementa: 'Circuitos magnéticos. Transformadores. Princípios de conversão eletromecânica de energia. Introdução às máquinas elétricas rotativas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT301'],
			color: '#46B958',
			obligatory: false
		},
		'TT092': {
			code: 'TT092',
			name: 'Resistência de Materiais',
			ementa: 'Grafostática. Classificação das estruturas. Esforços solicitantes em estruturas planas isostáticas. Centro de gravidade. Momentos de inércia.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5D46B9',
			obligatory: false
		},
		'TT093': {
			code: 'TT093',
			name: 'Fenômenos de Transporte',
			ementa: 'Conceitos fundamentais. Primeira e segunda leis da termodinâmica. Equações gerais da cinemática e dinâmica dos fluidos. Equações básicas de transferência de calor e massa.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B9AB',
			obligatory: false
		},
		'TT094': {
			code: 'TT094',
			name: 'Automação e Controle',
			ementa: 'Análise e síntese de sistemas contínuos e discretos. Obtenção de diagrama de bloco e função de transferência. Modelos e simulação. Controle realimentado. Estabilidade e otimização. Critério de estabilidade de Routh. Análise por frequência. Análise pelo lugar das raízes. Aplicações em filtros e em sistemas industriais. Modos de controle. Controlador programável e sistemas de controle digital. Transdutores e interfaces.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT206'],
			color: '#9446B9',
			obligatory: false
		},
		'TT095': {
			code: 'TT095',
			name: 'Tópicos em Circuitos Digitais',
			ementa: 'Dispositivos lógicos programáveis. Projeto de máquinas sequênciais, máquinas de estados.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302'],
			color: '#4666B9',
			obligatory: false
		},
		'TT097': {
			code: 'TT097',
			name: 'Introdução à Física Moderna',
			ementa: 'Origens da Física Quântica. Radiação de corpo negro. Efeito fotoelétrico. Difração de elétrons. Função de onda de Broglie. Princípio de incerteza. Equação de Schrödinger. Poços de potencial simples. Números quânticos. Tunelamento. Modelos atômicos. Níveis de energia. Transições. Séries espectrais. Átomo de Hidrogênio. Laser.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#4F46B9',
			obligatory: false
		},
		'TT098': {
			code: 'TT098',
			name: 'Programação Orientada a Objetos',
			ementa: 'Programação estruturada e programação orientada a objetos: análise; recursos de C++ equivalentes à linguagem C; modularidade e abstração; tipos abstratos de dados; classes e objetos; encapsulamento, construtores e destrutores; sobrecarga, herança e polimorfismo; programação orientada a eventos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7946B9',
			obligatory: false
		},
		'TT099': {
			code: 'TT099',
			name: 'Fundamentos de Telefonia Fixa',
			ementa: 'Princípios de Telefonia Fixa; Redes Telefônicas; Comutação de Circuitos e Técnicas de Comutação; Centrais Telefônicas; Tráfego telefônico; Técnicas de sinalização; Comutação de pacotes e de células; Voz sobre IP (VoIP); Redes de Acesso; Tecnologias e Sistemas de Banda Larga Fixa; Operadoras de Múltiplos Serviços e Triple Play.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#469DB9',
			obligatory: false
		},
		'TT104': {
			code: 'TT104',
			name: 'Leitura e Redação de Textos Técnicos',
			ementa: 'Linguagem escrita e falada. Redação de textos técnicos. Elaboração de relatório.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B990',
			obligatory: false
		},
		'TT105': {
			code: 'TT105',
			name: 'Introdução às Ciências Humanas',
			ementa: 'Liberdade, igualdade, fraternidade. As promessas e os novos problemas trazidos pelo moderno. Modernidade e sociologia. A emergência do indivíduo moderno. A descoberta da sociedade. A cidade moderna e a pobreza. Classes sociais e conflito social. Tradição, valores e ordem moral. Ciência e desordem: crítica. Indagações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97D46',
			obligatory: false
		},
		'TT304': {
			code: 'TT304',
			name: 'Sistemas Operacionais',
			ementa: 'Linguagem de comando. Noções de sistemas de multiprogramas e multiusuários. Organização interna e externa de sistemas de arquivos e diretórios. Programas de sistema: bibliotecas e utilitários. Chamadas ao sistema. Processos concorrentes. Gerenciamento de memória.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106'],
			color: '#B9468B',
			obligatory: false
		},
		'TT309': {
			code: 'TT309',
			name: 'Projetos de Dispositivos e Sistemas de Telecomunicações',
			ementa: 'Modelagem de dispositivos e sistemas de Telecomunicações utilizando ferramentas computacionais baseadas em softwares comerciais, softwares livres e/ou softwares desenvolvidos em ambientes acadêmicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4682B9',
			obligatory: false
		},
		'TT505': {
			code: 'TT505',
			name: 'Introdução ao Estágio Supervisionado',
			ementa: 'Elaboração do plano de estágio supervisionado, revisão bibliográfica sobre o trabalho a ser desenvolvido.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#46B966',
			obligatory: false
		},
		'TT506': {
			code: 'TT506',
			name: 'Introdução ao Trabalho de Graduação Interdisciplinar',
			ementa: 'Definição do projeto do trabalho de graduação interdisciplinar, revisão bibliográfica sobre o tema da Monografia.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:2, D:0, HS:2, SL:0, C:2},
			requisitos: ['AA465'],
			color: '#46ABB9',
			obligatory: false
		},
		'TT613': {
			code: 'TT613',
			name: 'Estágio Supervisionado',
			ementa: 'Estágio supervisionado na área de Telecomunicações. Obs.: Não é responsabilidade da Unicamp providenciar estágio para os alunos.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA465'],
			color: '#B046B9',
			obligatory: false
		},
		'TT614': {
			code: 'TT614',
			name: 'Trabalho de Graduação Interdisciplinar',
			ementa: 'Desenvolvimento de trabalho de pesquisa na área de Telecomunicações.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:0, C:4},
			requisitos: ['AA465'],
			color: '#A246B9',
			obligatory: false
		}
	}
};

export default catalogue;
