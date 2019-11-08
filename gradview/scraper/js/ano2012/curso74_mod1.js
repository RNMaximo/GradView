const catalogue = {
	totalCredits: 160,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['ST008', 'ST109', 'TT101', 'TT106', 'TT107', 'TT108', 'TT109', 'TT110']
		},
		'sem-2': {
			id: '2',
			subjects: ['TT130', 'TT206', 'TT207', 'TT208', 'TT209', 'TT210', 'TT211', 'ELET4']
		},
		'sem-3': {
			id: '3',
			subjects: ['ST568', 'TT301', 'TT302', 'TT306', 'TT307', 'TT308', 'ELET4']
		},
		'sem-4': {
			id: '4',
			subjects: ['ST668', 'TT096', 'TT350', 'TT401', 'TT406', 'TT407', 'TT408', 'TT409', 'ELET4']
		},
		'sem-5': {
			id: '5',
			subjects: ['TT501', 'TT503', 'TT504', 'TT508', 'TT509', 'TT510', 'ELET12']
		},
		'sem-6': {
			id: '6',
			subjects: ['TT601', 'TT603', 'ELET8']
		}
	},

	subjects: {
		'ST008': {
			code: 'ST008',
			name: 'Metodologia do Trabalho Científico',
			ementa: 'Método científico: conceitos e histórico; métodos e técnicas de pesquisa; Pesquisa: conceitos, definições e tipos; elaboração, comunicação e divulgação da pesquisa: fases da elaboração da pesquisa, comunicação da pesquisa (estrutura, forma e conteúdo); normas ABNT; linguagem científica; monografias; dissertações; teses, relatórios técnicos; artigos; eventos científicos.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ST109': {
			code: 'ST109',
			name: 'Física Aplicada I',
			ementa: 'Vetores. Cinemática do ponto. Leis de Newton. Estática. Trabalho, energia e potência. Momento linear. Momento angular. Rotação de corpos rígidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT101': {
			code: 'TT101',
			name: 'Cálculo I',
			ementa: 'Conjuntos numéricos. Função de uma variável real. Limites. Continuidade. Derivadas. Máximos e mínimos de uma função. Diferencial de uma função. Integrais definidas e indefinidas. Técnicas de Integração. Aplicações. Equações diferenciais ordinárias. Sistemas de equações de primeira ordem.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'TT106': {
			code: 'TT106',
			name: 'Organização e Arquitetura de Computadores',
			ementa: 'Histórico do computador. Noções básicas sobre circuitos lógicos. Memórias, unidades centrais de processamento. Endereçamento, barramento, interrupção, comunicações, interfaces e periféricos. Computadores típicos. Implementação de uma CPU. Noções de programação em linguagem assembly.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT107': {
			code: 'TT107',
			name: 'Circuitos Elétricos I',
			ementa: 'Carga elétrica. Campo elétrico. Diferença de potencial, corrente e resistência elétrica. Elementos e leis de circuitos. Equacionamento e Soluções de circuitos por métodos algébricos e matriciais. Teoremas de Thevenin e Norton. Instrumentos de medida.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT108': {
			code: 'TT108',
			name: 'Fundamentos para Telecomunicações',
			ementa: 'Histórico das telecomunicações, introdução aos sinais e sistemas de telecomunicações, atualidades e tendências da tecnologia de telecomunicações.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT109': {
			code: 'TT109',
			name: 'Geometria Analítica e Álgebra Linear',
			ementa: 'Vetores no R2 e no R3. Produto Escalar e Vetorial. A Reta. O Plano. Distâncias. Cônicas e Quádricas. Dependência e Independência Linear. Espaço Vetorial Real. Transformações Lineares. Autovalores e Autovetores.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT110': {
			code: 'TT110',
			name: 'Introdução ao Trabalho em Laboratórios',
			ementa: 'Introdução aos erros, conceitos elementares de estatística, lógica e procedimento experimental, instrumentos e métodos de laboratório do curso de oferecimento da disciplina, processamento de resultados experimentais, noções de segurança de trabalho no laboratório, elaboração de documentos técnicos e científicos.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT130': {
			code: 'TT130',
			name: 'Linguagem e Técnica de Programação I',
			ementa: 'Algoritmos: representações e técnicas de construção. Estruturas de dados e de controle de programas. Introdução a uma linguagem de programação de alto nível. Modularização em linguagem de programação. Recursividade. Implementação de programas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT206': {
			code: 'TT206',
			name: 'Circuitos Elétricos II',
			ementa: 'Capacitores. Indutores. Equacionamento de circuitos dinâmicos. Circuitos em correntes alternadas. Números complexos. Impedância complexa. Fasores. Transformada de Laplace e Fourier. Circuitos ressonantes. Transitórios. Circuitos monofásicos. Sistemas Polifásicos. Osciloscópios e geradores de funções.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT107']
		},
		'TT207': {
			code: 'TT207',
			name: 'Probabilidades e Teoria da Informação',
			ementa: 'Conceitos básicos de estatística. Medidas de tendência central. Medidas de dispersão. Correlação Linear. Teoria elementar de probabilidade. Distribuição Binomial, de Poisson, Exponencial Negativa, Normal, de Rayliehg, Rician e Nakagami. Introdução aos processos estocásticos. Aplicações nas telecomunicações. Conceitos, princípios e fundamentos gerais da teoria dos sistemas de transmissão de informação.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ''
		},
		'TT208': {
			code: 'TT208',
			name: 'Métodos Matemáticos para Telecomunicações',
			ementa: 'Funções de várias variáveis reais. Derivadas e diferenciais. Máximos e Mínimos. Integrais Múltiplas. Séries Numéricas e Séries de Funções. Transformada de Laplace. Equações diferenciais parciais e série de Fourier. Outros temas relevantes para o curso.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT101']
		},
		'TT209': {
			code: 'TT209',
			name: 'Introdução ao Eletromagnetismo',
			ementa: 'Cálculo vetorial aplicado ao eletromagnetismo. Campos eletrostáticos no vácuo e nos materiais dielétricos. Aplicações das equações de Poisson e Laplace.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT210': {
			code: 'TT210',
			name: 'Circuitos Eletrônicos',
			ementa: 'Semicondutores. Circuitos com diodos semicondutores. Transistores bipolares. O transistor como fonte de corrente. Circuitos polarização.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT211': {
			code: 'TT211',
			name: 'Oscilações e Ondas',
			ementa: 'Oscilações, Ondas Mecânicas, Ondas Eletromagnéticas, Interferência, Difração, Tópicos Especiais sobre Ondas Eletromagnéticas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'ST568': {
			code: 'ST568',
			name: 'Redes de Comunicação I',
			ementa: 'Teleprocessamento, comutação e sinalização. Comutação por circuitos. Comutação por pacotes. Enlaces e canais de comunicação. Protocolos e Serviços. Modelos de referência. Camada de Aplicação. Camada de Transporte, Camada de Rede, Camada de Enlace, Camada Física.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT106']
		},
		'TT301': {
			code: 'TT301',
			name: 'Eletromagnetismo',
			ementa: 'Campos magnéticos, correntes estacionárias e materiais não magnéticos. Força eletromotriz induzida e energia magnética. Materiais magnéticos. Equações de Maxwell. Redação e propagação de ondas eletromagnéticas no vácuo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT209']
		},
		'TT302': {
			code: 'TT302',
			name: 'Circuitos Digitais',
			ementa: 'Sistemas de numeração; Portas lógicas e álgebra booleana; Circuitos lógicos combinacionais; Flip-Flops e dispositivos relacionados; Aritmética digital: Operações e circuitos; Famílias lógicas; Contadores e registradores; Contadores binários: tipos, divisor da frequência. Memórias: tipos, expansão, tempo de acesso. Conversores analógicos/digitais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT306': {
			code: 'TT306',
			name: 'Circuitos Eletrônicos II',
			ementa: 'Amplificadores operacionais ideais. Circuitos com amplificadores operacionais. Amplificadores de potência e fontes de alimentação. Princípios de operação e características de FETs. Polarização de FETs. Configurações típicas. Acoplamento entre estágios amplificadores. Resposta de frequência de amplificadores. Amplificadores de potência de AF. Osciladores. Temporizador. Multivibrador astável. Shimitt trigger.',
			semestre: 1,
			vector: {T:3, P:0, L:3, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['TT210']
		},
		'TT307': {
			code: 'TT307',
			name: 'Fundamentos dos Materiais Elétricos',
			ementa: 'Elementos de ciência dos materiais. Tecnologia dos materiais elétricos. Materiais condutores e isolantes. Materiais semicondutores. Materiais magnéticos. Principais aplicações. Técnicas de microfabricação. Teoria e Aplicações.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT308': {
			code: 'TT308',
			name: 'Fundamentos para Processamento Digital de Sinais',
			ementa: 'Familiarização e utilização de ferramenta computacional para simulação de sistemas de telecomunicações. Caracterização de sinais analógicos e digitais. Aplicações da Transformada de Fourier para a Análise Temporal e Espectral de sinais. Transmissão de sinais digitais, conceitos de banda passante e ruído de canal. Amostragem de sinais analógicos, quantização e critério de Nyquist. Conceitos básicos de Modulações Analógicas e Digitais.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT108']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'ST668': {
			code: 'ST668',
			name: 'Redes de Comunicação II',
			ementa: 'Protocolos para interconexão de redes. Arquiteturas e Protocolos para comunicação sem fio. Gerência de redes. Introdução a redes móveis e ópticas. Comunicação multimídia. Modelos de tráfego. Desenvolvimento de protocolos de comunicação.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['ST568']
		},
		'TT096': {
			code: 'TT096',
			name: 'Processamento Digital de Sinais',
			ementa: 'Digitalização de sinais analógicos, sinais e sistemas discretos no tempo. Estrutura de realização de sistemas discretos: equação de diferença e função de transparência, resposta em frequência e estabilidade. Filtros Digitais: classificação e estruturas de realização. Transformada de Fourier: transformada discreta de Fourier e convolução circular, algoritmo da transformada rápida de Fourier e aplicações. Efeitos de quantização de coeficientes e variáveis. Projeto de filtros digitais: projeto de filtros recursivos, projeto de filtros não recursivos, considerações práticas para implementação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT308']
		},
		'TT350': {
			code: 'TT350',
			name: 'Administração de Empresas',
			ementa: 'Evolução do pensamento em administração. Tendências contemporâneas em administração. Processo decisório e estratégia corporativa. Organizações que aprendem. Processos de controle. Administração de marketing. Estrutura do capital. Participação nos lucros e distribuição de dividendos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT401': {
			code: 'TT401',
			name: 'Microcontroladores',
			ementa: 'Arquitetura e princípios de operação de microcontroladores. Interfaces. Projeto com microcontroladores.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302']
		},
		'TT406': {
			code: 'TT406',
			name: 'Ondas Guiadas',
			ementa: 'Teoria de Linhas de Transmissão: Equação de Onda, Tensão e Corrente na Linha, Constante de Propagação, Impedância Característica, Coeficiente de Reflexão, Razão de Onda Estacionária, Carta de Smith. Casamento de Impedâncias. Guias de Ondas; Modos TE e TM, Perdas em Guias de Ondas, Dispersão. Cavidades Ressonantes. Outros Dispositivos. Parâmetros S. Matriz de parâmetros S. Guias de Ondas Dielétricos: Fibras Ópticas, Propagação, Atenuação e Dispersão em Fibras Ópticas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT301']
		},
		'TT407': {
			code: 'TT407',
			name: 'Laboratório de Ondas Guiadas',
			ementa: 'Técnicas de Medições em Linhas de Transmissão e Guias de Ondas. Medições no domínio do tempo: tempo de trânsito na linha, impedância característica, velocidade de propagação, permissividade relativa do dielétrico. Medições de indutância e capacitância. Diagrama Zig-Zag. Medições no domínio da frequência: defasagem da linha de Transmissão. Medição da atenuação vs frequência. Introdução ao Analisador Vetorial de Redes e ao Refletômetro Óptico. Manuseio de fibras ópticas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT301']
		},
		'TT408': {
			code: 'TT408',
			name: 'Tecnologias de Radiofrequência e Micro- Ondas',
			ementa: 'Filtros, Casadores de Impedância, Transmissores, Receptores, Amplificadores Sintonizados de Baixo Sinal, Osciladores de RF. Modulação Analógica em Amplitude, Frequência e Fase, Misturadores, PLL e Sintetizadores de Frequência. Parâmetros de Espalhamento (parâmetro S). Dispositivos Passivos de Micro-ondas. Ruído. Diodos de Micro-ondas. Amplificadores de RF e Micro-ondas. Transistorizados. Osciladores de Micro-ondas a Semicondutores. Válvulas de Micro-ondas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TT210']
		},
		'TT409': {
			code: 'TT409',
			name: 'Laboratório de Radiofrequência e Micro- Ondas',
			ementa: 'Técnicas de Medições em Dispositivos de Radiofrequência e Micro-ondas. Utilização do Analisador Vetorial de Redes, Analisador de Espectros e outros equipamentos de Radiofrequência e Micro-ondas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*TT210']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'TT501': {
			code: 'TT501',
			name: 'Propagação de Ondas Eletromagnéticas - Antenas',
			ementa: 'Tipos de propagação. Propagação no espaço livre. Propagação na atmosfera. Influência do solo e de obstáculos. Propagação ionosférica. Efeitos da atmosfera na propagação de micro-ondas e de ondas milimétricas. Características gerais das antenas. Antenas lineares de onda estacionária. Antenas de ondas caminhantes. Redes de antenas. Síntese de redes de antenas. Antenas de abertura. Antenas com refletores. Sistemas de alimentação das antenas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT301']
		},
		'TT503': {
			code: 'TT503',
			name: 'Dispositivos Fotônicos',
			ementa: 'Introdução. Estado atual da tecnologia. Propagação de Luz em Fibras Ópticas: Propriedades. Tipos de fibra - características: dispersão, atenuação, efeitos não-lineares. Cabos Ópticos. Conectores Ópticos. Emendas, Acopladores. Geradores e receptores Ópticos. Fotodetectores PIN e APD. Amplificação Óptica. Novas tecnologias. Óptica integrada.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT307', 'TT406']
		},
		'TT504': {
			code: 'TT504',
			name: 'Economia e Finanças',
			ementa: 'Modelo Keynesiano, Governo: Política Orçamentária, Setor Externo, Mercado: Inflação e Emprego. Análise microeconômica, planejamento econômico. Capacidade de geração de serviços. Noções de custos, formação de preço de venda. Aspectos societários e trabalho autônomo, aspectos trabalhistas, regimes tributários. Gestão do conhecimento e da informação. Sistemas de apoio à decisão.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'TT508': {
			code: 'TT508',
			name: 'Sistema de Telecomunicações',
			ementa: 'Modulações analógicas e digitais. Temas escolhidos de Rádio Digital. Comunicação via satélite, arquitetura dos transponders e da estação terrena. Temas escolhidos de transmissão digital, hierarquias digitais PDH e SDH, Sistemas Digitais de Radioenlaces por Micro-ondas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT302']
		},
		'TT509': {
			code: 'TT509',
			name: 'Projetos de Sistemas de Telecomunicações',
			ementa: 'Projetos assistidos por computador de sistemas e subsistemas de telecomunicações. Simulação e/ou Projetos das modulações analógicas e digitais de AM, FM e Fase. Projetos de Amplificadores de RF. Projetos de Radioenlaces. Simulação de redes de alta velocidade.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['TT302']
		},
		'TT510': {
			code: 'TT510',
			name: 'Comunicações Móveis',
			ementa: 'Sistemas de comunicações móveis; Técnicas de predição de sinais; Caracterização do canal rádio móvel em ambientes internos e externos; Estudos de interferência; Modulação e sistemas de transmissão; Métodos de acessos em comunicações móveis; Projetos de sistemas móveis; Telefonia móvel celular: descrição dos sistemas (1G, 2G, 2.5G, 3G e 4G), protocolos e sinalização, padrões; Portabilidade Numérica; RFID; WiMAX; Noções de sistemas de comunicação móveis por satélite; Redes de comunicações pessoais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*TT408/*TT405']
		},
		'ELET12': {
			code: 'ELET12',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:12, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: ''
		},
		'TT601': {
			code: 'TT601',
			name: 'Gestão Empreendedora',
			ementa: 'Empreendedorimo, ética profissional, diagnóstico empresarial, modelos de avaliação econômico-financeiros. Plano estratégico, modelos de avaliação de impacto social e ambiental: balanço social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'TT603': {
			code: 'TT603',
			name: 'Comunicações Ópticas',
			ementa: 'Introdução. Propagação em fibras ópticas: degradação de sinal. Sistemas Ponto-Ponto. Sistemas WDM. Tendências Evolutivas. Capacidade e fatores limitantes. Balanço de Potência. Critérios de Projeto. Enlaces com Amplificadores Ópticos. Compensação de dispersão. Efeitos não-lineares. Sistemas Ópticos em rede. Tipos de serviços. Redes locais. Redes metropolitanas. Redes CATV. Redes Integradas. Comutação Óptica. Medidas e caracterização de enlaces. Caracterização de fontes, receptores e sistemas. Ruídos. Tópicos Avançados.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['TT503']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		}
	}
};

export default catalogue;
