const catalogue = {
	totalCredits: 577,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BS111', 'BS121', 'BS122', 'BS123', 'BS124', 'MD141', 'MD142', 'MD148']
		},
		'sem-2': {
			id: '2',
			subjects: ['BS221', 'BS222', 'BS223', 'BS224', 'BS340', 'MD241', 'MD242', 'MD243', 'MD248']
		},
		'sem-3': {
			id: '3',
			subjects: ['BS320', 'BS330', 'MD244', 'MD342', 'MD343', 'MD344', 'MD348', 'MD542']
		},
		'sem-4': {
			id: '4',
			subjects: ['BS420', 'BS430', 'MD442', 'MD443', 'MD444', 'MD445', 'MD448', 'MD449', 'MD642']
		},
		'sem-5': {
			id: '5',
			subjects: ['MD543', 'MD544', 'MD546', 'MD548']
		},
		'sem-6': {
			id: '6',
			subjects: ['MD643', 'MD644', 'MD646', 'MD748']
		},
		'sem-7': {
			id: '7',
			subjects: ['MD447', 'MD752', 'MD753', 'MD754', 'MD758', 'MD759']
		},
		'sem-8': {
			id: '8',
			subjects: ['MD941', 'MD942', 'MD943', 'MD944', 'MD945', 'MD951', 'MD952']
		},
		'sem-9': {
			id: '9',
			subjects: ['MD126', 'MD127', 'MD131', 'MD132', 'MD133', 'MD134', 'MD135', 'MD136', 'MD138', 'MD139']
		}
	},

	subjects: {
		'BS111': {
			code: 'BS111',
			name: 'A Célula',
			ementa: 'Integração entre conhecimentos de bioquímica, biologia celular e molecular, genética médica, fisiologia e biofísica, histologia e clínica médica na compreensão da célula como unidade funcional dos diversos sistemas e como elemento essencial à vida. Desenvolvimento de habilidades em microscopia óptica e informática.Obs.: Esta disciplina terá a duração de 6 semanas.',
			semestre: 1,
			vector: {T:12, P:10, L:5, O:0, D:0, HS:27, SL:26, C:11},
			requisitos: '',
			color: '#70D940'
		},
		'BS121': {
			code: 'BS121',
			name: 'Embriologia Humana',
			ementa: 'Estudo da biologia do desenvolvimento humano: gametogênese, fecundação, implantação, gastrulação, neurulação, dobramentos do embrião, placenta e destino dos folhetos embrionários; correlação do desenvolvimento humano com anomalias congênitas.',
			semestre: 1,
			vector: {T:2, P:13, L:0, O:0, D:0, HS:15, SL:2, C:2},
			requisitos: '',
			color: '#4083D9'
		},
		'BS122': {
			code: 'BS122',
			name: 'Biologia Tecidual',
			ementa: 'Biologia dos tecidos epitelial, conjuntivo, muscular e neural, tecidos e órgãos linfóides.',
			semestre: 1,
			vector: {T:2, P:13, L:0, O:0, D:0, HS:15, SL:2, C:2},
			requisitos: '',
			color: '#40D99F'
		},
		'BS123': {
			code: 'BS123',
			name: 'Aparelho Locomotor',
			ementa: 'Estudo da Anatomia Sistêmica e Topográfica, Histologia, Imaginologia, Bioquímica e Fisiologia dos Sistemas Ósseo, Articular e Muscular humanos, com correlações clínicas que auxiliem no entendimento do funcionamento normal dos sistemas; anatomia e fisiologia do sistema nervoso periférico; fosfocreatina e catabolismo de carboidratos.',
			semestre: 1,
			vector: {T:2, P:22, L:0, O:0, D:0, HS:24, SL:2, C:8},
			requisitos: '',
			color: '#D9B340'
		},
		'BS124': {
			code: 'BS124',
			name: 'Sistema Cardiovascular',
			ementa: 'Estudo da Anatomia Sistêmica e Topográfica, Histologia, Embriologia, Imaginologia e Fisiologia do Sistema Cardiovascular humano, com correlações clínicas que auxiliem no entendimento do funcionamento normal do sistema; fisiologia do músculo liso, produção aeróbia de ATP a partir de lipídios e proteína.',
			semestre: 1,
			vector: {T:2, P:23, L:0, O:0, D:0, HS:25, SL:2, C:5},
			requisitos: '',
			color: '#D940CF'
		},
		'MD141': {
			code: 'MD141',
			name: 'Prática de Ciências I',
			ementa: 'Iniciação ao pensamento crítico relativo ao conhecimento científico e senso comum. A pesquisa científica e suas características. Desenvolvimento e habilidades para a análise crítica e construção do conhecimento científico. A busca da informação e suas evidências científicas. Fundamentos para análise de dados. Estruturação de um projeto de pesquisa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#53D940'
		},
		'MD142': {
			code: 'MD142',
			name: 'Ações de Saúde Pública I',
			ementa: 'Introdução ao estudo da saúde coletiva, do sistema de saúde brasileiro, e dos determinantes do processo de saúde-doença - atenção com ênfase no território. Realização da primeira experiência de estágio em serviços de saúde, possibilitando uma visão crítica tanto dos papéis desempenhados pelas instituições e profissionais da área quanto da política da saúde do Brasil.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8CD940'
		},
		'MD148': {
			code: 'MD148',
			name: 'Ética I',
			ementa: 'Introdução aos conceitos básicos da ética e suas articulações na sociedade a partir de análise de situações concretas que permitam enfatizar o estudo da posição e dos direitos humanos na Sociedade Brasileira e no contexto internacional. Ética e pesquisa em seres humanos. Atuação dos comitês de ética em pesquisa. Noções de políticas públicas em saúde.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#C6D940'
		},
		'BS221': {
			code: 'BS221',
			name: 'Sistema Respiratório',
			ementa: 'Estudo da Anatomia Sistêmica e Topográfica, Histologia, Embriologia, Fisiologia e Imaginologia do Sistema Respiratório humano, com correlações clínicas que auxiliem no entendimento do funcionamento normal do sistema; construção e interpretação de curva glicêmica, vias metabólicas que ocorrem no período absortivo; glicogênese.',
			semestre: 1,
			vector: {T:7, P:12, L:0, O:0, D:0, HS:19, SL:7, C:5},
			requisitos: ['*BS111', '*BS121', '*BS122', '*BS123', '*BS124'],
			color: ''
		},
		'BS222': {
			code: 'BS222',
			name: 'Sistema Digestório',
			ementa: 'Estudo da Anatomia Sistêmica e Topográfica, Histologia, Embriologia, Imaginologia, Bioquímica e Fisiologia do Sistema Digestório humano, com correlações clínicas que auxiliem no entendimento do funcionamento normal do sistema; vias anabólicas (síntese da uréia, lipogênese e via das pentoses-fosfato).',
			semestre: 1,
			vector: {T:7, P:12, L:0, O:0, D:0, HS:19, SL:7, C:5},
			requisitos: ['*BS111', '*BS121', '*BS122', '*BS123', '*BS124'],
			color: ''
		},
		'BS223': {
			code: 'BS223',
			name: 'Sistema Endócrino',
			ementa: 'Estudo da Anatomia, Histologia Imaginologia, Bioquímica e Fisiologia do Sistema Neuro-endócrino, com correlações clínicas que auxiliem no entendimento do funcionamento normal do sistema; sinalização celular de hormônios metabólicos; integração: das vias anabólicas, interórgãos e regulação integrada do metabolismo.',
			semestre: 1,
			vector: {T:7, P:13, L:0, O:0, D:0, HS:20, SL:7, C:4},
			requisitos: ['*BS111', '*BS121', '*BS122', '*BS123', '*BS124'],
			color: ''
		},
		'BS224': {
			code: 'BS224',
			name: 'Sistema Urogenital',
			ementa: 'Estudo da Anatomia Sistêmica e Topográfica, Embriologia, Histologia, Imaginologia e Fisiologia dos Sistemas Urinário e Genital Masculino e Feminino, com correlações clínicas que auxiliem no entendimento do funcionamento normal dos sistemas.',
			semestre: 1,
			vector: {T:7, P:16, L:0, O:0, D:0, HS:23, SL:7, C:6},
			requisitos: ['*BS111', '*BS121', '*BS122', '*BS123', '*BS124'],
			color: ''
		},
		'BS340': {
			code: 'BS340',
			name: 'Relação Patógeno-Hospedeiro II',
			ementa: 'Conteúdos de imunologia básica para a compreensão dos mecanismos fundamentais do desenvolvimento, funcionamento e regulação do sistema imunológico e sua inter-relação com outros sistemas fisiológicos. Será dado enfoque especial aos aspectos médico e laboratorial da imunologia, buscando correlação entre o aprendizado fundamental e as perspectivas da sua aplicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS111'],
			color: ''
		},
		'MD241': {
			code: 'MD241',
			name: 'Prática de Ciências II',
			ementa: 'Conceitos, definições e aplicações da estatística na pesquisa científica. Análise exploratória de dados. Teste de Hipótese. Probabilidade e variável aleatória. Medidas de frequência e de associação/efeito. Caracteristícas gerais dos delineamentos de estudos epidemiológicos. Medidas de ocorrência, associação, efeito e impacto. Validação do instrumental epidemiológico.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['MD141'],
			color: ''
		},
		'MD242': {
			code: 'MD242',
			name: 'Ações de Saúde Pública II',
			ementa: 'Aprofundar a compreensão de alguns conteúdos básicos e introdutórios da Saúde Coletiva, com ênfase nas competências e habilidades que os alunos adquirirão para desenvolver projetos em relação com equipes e comunidades.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD142'],
			color: ''
		},
		'MD243': {
			code: 'MD243',
			name: 'Medicina e Saúde',
			ementa: 'Estudo de comportamento humano relacionado com o adoecer, tanto na perspectiva do doente quanto do médico. Desenvolvimento de habilidades e competências de comunicação interpessoal e de observação fundamentais para o exercício da Medicina.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD148'],
			color: ''
		},
		'MD248': {
			code: 'MD248',
			name: 'Ética II',
			ementa: 'Continuidade dos estudos iniciados na MD148. Abordagem médica e filosófica sobre educação, cultura e valor. Parâmetros legais, cultura e religiosidade dos pacientes. Introdução ao código de ética médica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A9D940'
		},
		'BS320': {
			code: 'BS320',
			name: 'Neurociências I',
			ementa: 'Abordagem da organização anatômica e da função do sistema nervoso num enfoque transdisciplinar, integrando conceitos fundamentais da anatomia, neurofisiologia, embriologia, farmacologia do sistema nervoso central e problemas da clinica neurológica. Estudo da anatomia macroscópica, microscópica e morfofuncional do sistema nervoso central e periférico, em correlação com os dados de neuroimagem estrutural e funcional. Estudo da neurofisiologia, analisando mecanismos sinápticos, sistemas de neurotransmissores e sinalização intracelular, funções de codificação, integração, organização e controle da percepção sensorial, motricidade, comportamento e cognição; plasticidade neural.',
			semestre: 1,
			vector: {T:7, P:2, L:5, O:0, D:0, HS:14, SL:14, C:14},
			requisitos: ['*BS111', '*BS121', '*BS122', '*BS123', '*BS124', '*BS221', '*BS222', '*BS223', '*BS224'],
			color: ''
		},
		'BS330': {
			code: 'BS330',
			name: 'Relação Patógeno-Hospedeiro I',
			ementa: 'Aspectos básicos da biologia e estrutura de bactérias. Principais micro-organismos causadores de infecção e seus mecanismos de patogenicidade. Epidemiologia. Resposta imunológica do hospedeiro frente a bactérias patogênicas. Prevenção e controle dos principais micro-organismos bacterianos causadores de infecções.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS111'],
			color: ''
		},
		'MD244': {
			code: 'MD244',
			name: 'Introdução à Imunologia Médica',
			ementa: 'Apresenta conceitos básicos de estrutura, organização e resposta imune. Caracteriza a função das principais moléculas e células envolvidas nas respostas imunes inata e adaptativa. Apresenta mecanismos envolvidos nas respostas humorais e celulares. Apresenta e discute casos clínicos que ilustram a importância da resposta imune em Medicina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A940D9'
		},
		'MD342': {
			code: 'MD342',
			name: 'Saúde e Sociedade I',
			ementa: 'Relaçõs entre Saúde e Sociedade, estudadas do ponto de vista da integralidade da assistência nos níveis de complexidade da rede de serviços de saúde, considerando a especificidade de um determinado problema de saúde, no âmbito das políticas públicas de saúde dirigidas ao problema abordado. A estratégia básica do Módulo pressupõe o atendimento a demandas da rede pública de serviços de saúde, num processo de estreita colaboração entre os vários atores envolvidos na construção, desenvolvimento e avaliação das atividades.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD142', 'MD242'],
			color: ''
		},
		'MD343': {
			code: 'MD343',
			name: 'Princípios de Farmacologia',
			ementa: 'Conhecimentos gerais de Farmacocinética (princípios que regem absorção, distribuição, metabolização e eliminação de fármacos) e de Farmacodinâmica. Farmacologia do sistema nervoso autônomo (agonistas colinérgicos adrenérgicos e seus respectivos antagonistas e Anticolinesterásticos) e da junção neuromuscular.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BS111'],
			color: ''
		},
		'MD344': {
			code: 'MD344',
			name: 'Laboratório de Habilidades I',
			ementa: 'Identificação de vítimas em situação crítica. Paciente traumatizado. Medidas básicas de reanimação, suporte de vida e primeiros socorros. Princípios de atendimento pré-hospitalar.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D97940'
		},
		'MD348': {
			code: 'MD348',
			name: 'Bioética I',
			ementa: 'Introdução à Bioética. Discussão de conceitos básicos a partir de casos concretos. Análise de temas como morte encefálica, distanásia, transplante de órgãos, aborto e clonagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B3'
		},
		'MD542': {
			code: 'MD542',
			name: 'Epidemiologia e Saúde I',
			ementa: 'História e aplicações da Epidemiologia. Tendências demográficas; estrutura populacional, transição demográfica. Mortalidade-indicadores usuais; proporções, índices e coeficientes; indicadores gerais e específicos. Comparação de indicadores; mortes precoces, excessivas e evitáveis. Eventos sentinela. Vigilância Epidemiológica. Medidas de frequência e de associação. Distribuição das doenças: pessoa, tempo e lugar. Doenças de notificação compulsória. Estudo de epidemias. Diagrama de controle. Sistema Nacional de Vigilância Epidemiológica. Introdução aos desenhos de estudos epidemiológicos: estudos transversais, inquéritos e estudos ecológicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9'
		},
		'BS420': {
			code: 'BS420',
			name: 'Relação Patógeno-Hospedeiro III',
			ementa: 'Introdução à Parasitologia: conceitos básicos, ciclos evolutivos das principais parasitoses em humanos, patogenia, controle e profilaxia. Resposta imune nas parasitoses. Aspectos básicos da biologia e estrutura de fungos, principais micro-organismos causadores de infecção e seus mecanismos de patogenicidade.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BS340'],
			color: ''
		},
		'BS430': {
			code: 'BS430',
			name: 'Relação Patógeno-Hospedeiro IV',
			ementa: 'Aspectos básicos da estrutura, diversidade e patogênese dos vírus que acometem humanos. Principais vírus causadores de infecção e os mecanismos patogênicos dos vírus. Epidemiologia. Resposta imunológica aos vírus. Prevenção e controle.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS330', 'BS340'],
			color: ''
		},
		'MD442': {
			code: 'MD442',
			name: 'Saúde e Sociedade II',
			ementa: 'Relações entre Saúde e Sociedade, estudadas do ponto de vista da integralidade da assistência nos níveis de complexidade da rede de serviços de saúde, considerando a especificidade de um determinado problema de saúde, no âmbito das políticas públicas de saúde dirigidas ao problema abordado. Dando continuidade à MD342, ministrada no primeiro semestre, a MD442 deverá aprofundar e sistematizar os conhecimentos e experiências acumulados no primeiro semestre, restituindo os resultados do trabalho às unidades de saúde nas quais os temas foram desenvolvidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD142', 'MD242', 'MD342'],
			color: ''
		},
		'MD443': {
			code: 'MD443',
			name: 'Introdução à Patologia',
			ementa: 'Alterações morfológicas macro e microscópicas dos processos patológicos gerais que fundamentam as doenças mais prevalentes em nosso meio correlacionando-as com a fisiopatologia, etiopatogênese, sinais, sintomas e aspectos laboratoriais. Mecanismos básicos que levam às mutações genéticas sejam elas cromossômicas ou gênicas e relacioná-las com as doenças mais comuns no campo das anomalias cromossômicas, dos erros inatos de metabolismo e do câncer.',
			semestre: 1,
			vector: {T:2, P:6, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['*BS221', '*BS222', '*BS223', '*BS224', '*BS320'],
			color: ''
		},
		'MD444': {
			code: 'MD444',
			name: 'Laboratório de Habilidades II',
			ementa: 'Prática médica por meio de anamnese, enfatizando no atendimento os aspectos sociais, históricos e ambientais do paciente. Técnicas e procedimentos básicos de enfermagem. Princípios de técnicas cirúrgicas em modelo experimental.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD344'],
			color: ''
		},
		'MD445': {
			code: 'MD445',
			name: 'Anatomia Aplicada à Prática Médica I',
			ementa: 'Estudos complementares de anatomia topográfica e cirúrgica, aspectos radiológicos e de imagem, correlação anátomo-cirúrgica-radiológica dos orgãos das regiões cervical, tóracica e abdominal, medicina legal, enfatizando doenças mais prevalentes e alguns procedimentos básicos e iniciais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['*BS221', '*BS222', '*BS223', '*BS224', '*BS320'],
			color: ''
		},
		'MD448': {
			code: 'MD448',
			name: 'Bioética II',
			ementa: 'Continuidade do estudo iniciado na MD348, com discussão de aspectos médicos e filosóficos de temas de Bioética, a partir de situações concretas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D95C40'
		},
		'MD449': {
			code: 'MD449',
			name: 'Neurociências Clínicas',
			ementa: 'Introdução e fundamentos de neurociências relacionados às condições clínicas da neurologia, neuropsicologia e psiquiatria, assim como seus tratamentos, iniciando o aluno no conhecimento dos processos comportamentais e mentais que estão na base da neurologia, psiquiatria e neuropsicofarmacologia, com uma visão integrada do homem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS320'],
			color: ''
		},
		'MD642': {
			code: 'MD642',
			name: 'Epidemiologia e Saúde II',
			ementa: 'Modelo Geral de Investigação de hipóteses em Epidemiologia. Epidemiologia analítica: estudos experimentais e observacionais. Entre os observacionais estão os estudos transversais e longitudinais (estudos de coorte prospectivos e retrospectivos e estudos de caso-controle). Meta-análise de estudos epidemiológicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD542'],
			color: ''
		},
		'MD543': {
			code: 'MD543',
			name: 'Semiotécnica da Observação Clínica',
			ementa: 'Estudo dos principais sinais e sintomas clínicos em Medicina Interna, com suas respectivas patogênese e fisiopatologia, em matéria teórico-prática capacitando o aluno a examinar o paciente adulto, colher dados semiológicos para uma observação clínica completa e posterior interpretação e elaboração diagnóstica.',
			semestre: 1,
			vector: {T:4, P:16, L:0, O:0, D:0, HS:20, SL:20, C:20},
			requisitos: ['BS121', 'BS122', 'BS123', 'BS124', 'BS222', 'BS221', 'BS223', 'BS224', 'BS320', 'MD449'],
			color: ''
		},
		'MD544': {
			code: 'MD544',
			name: 'Fisiopatologia Integrada',
			ementa: 'Estudar nos diferentes aparelhos e sistemas do organismo humano (pele; osteoarticular; glândulas endócrinas; sistema cárdiovascular; trato respiratório; trato gastrointestinal; fígado; pâncreas e sistema nervoso) as doenças mais prevalentes em nosso meio no que se refere às manifestações clínicas, fisiopatologia, etiopatogenia, anatomia patológica, patologia clínica, imagenologia, genética médica, evolução, prognóstico e princípios terapêuticos.',
			semestre: 1,
			vector: {T:6, P:6, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['MD443'],
			color: ''
		},
		'MD546': {
			code: 'MD546',
			name: 'Anatomia Aplicada à Prática Médica II',
			ementa: 'Revisão da Anatomia de superfície e anatomia topográfica do tórax, nariz, orelha e cabeça e pescoço. Anatomia torácica e cervical, de seus órgãos mais importantes e suas correlações clínicas. Aplicações de conceitos na avaliação clínica e no tratamento cirúrgico de afecções clínicas mais comuns que acometem tórax, e cabeça e pescoço.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD445'],
			color: ''
		},
		'MD548': {
			code: 'MD548',
			name: 'Ética Médica I',
			ementa: 'Normas éticas a serem seguidas no exercício da Medicina, com ênfase no Código de Ética Médica. Introdução a Deontologia Médica. Atribuições do Conselho Federal e dos Conselhos Regionais de Medicina. Discussão dos aspectos da Ética Médica relacionados a temas diversos como responsabilidade profissional, segredo médico, relação com pacientes e familiares, direitos dos usuários dos serviços de saúde, direitos humanos, impacto do avanço tecnológico da prática médica, direitos e deveres nas relações entre médicos. Direitos do usuário do sistema público e privado de saúde. Responsabilidade Civil e Penal do Médico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#409FD9'
		},
		'MD643': {
			code: 'MD643',
			name: 'Semiologia e Propedêutica',
			ementa: 'Atividades teóricas e práticas em Semiologia e Propedêutica Clínica com participação na assistência diária aos pacientes do Hospital de Clínicas da Unicamp. Atividades teórico-práticas de semiologia e propedêutica pediátrica e ginecológica.',
			semestre: 1,
			vector: {T:4, P:16, L:0, O:0, D:0, HS:20, SL:20, C:20},
			requisitos: ['MD543'],
			color: ''
		},
		'MD644': {
			code: 'MD644',
			name: 'Fisiopatologia Integrada II',
			ementa: 'Estudar nos diferentes aparelhos e sistemas do organismo humano (trato genital feminino; hematopoiético; aparelho urinário e genital masculino) as doenças mais prevalentes em nosso meio no que se refere às manifestações clínicas, fisiopatologia, etiopatologia, anatomia patológica, patologia clínica, imagenologia, genética médica, evolução, prognóstico e princípios terapêuticos.',
			semestre: 1,
			vector: {T:6, P:6, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['MD443'],
			color: ''
		},
		'MD646': {
			code: 'MD646',
			name: 'Anatomia Aplicada à Prática Médica III',
			ementa: 'Estudos de anatomia topográfica na área da Medicina do Exercício e do Esporte, Ortopedia e Traumatologia, Radiologia com foco nas lesões mais prevalentes do sistema musculoesquelético. Oferecer treinamento teórico-prático em anatomia topográfica e radiológica relacionada à biomecânica do sistema musculoesquelético e às lesões do esporte.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD546'],
			color: ''
		},
		'MD748': {
			code: 'MD748',
			name: 'Medicina Legal I',
			ementa: 'A Medicina Legal será abordada por meio de temas específicos envolvendo a aplicação de conhecimentos médicos e jurídicos na prática médica geral e pericial. Os seguintes tópicos serão desenvolvidos: Introdução à Medicina Legal, Perícias Médicas, Tanatologia, Traumatologia Médico Legal, Documentos Médico Legais: Declaração de Óbito, Atestado e Laudo Médico, Antropologia Médico Legal, Identificação pelo DNA, Psicopatologia Forense, Imputabilidade Penal e Capacidade Civil, Deontologia Médica, Sexologia Forense, Aborto Legal, Tratamento ambulatorial na UNICAMP de mulheres vítimas de violência sexual, Programa Iluminar: atendimento a vítimas de abuso sexual, Aspectos Legais da Fertilização Assistida: soluções de problemas práticos, SISNOV: banco de dados sobre violência de Campinas, Aspectos Legais da Utilização da Célula Tronco no Brasil, Toxicologia Forense, Infortunística do Trabalho, Erro Médico, Impactos da Violência na Saúde, Terminalidade da Vida, Acidentes de Transporte e Exames de Embriaguez, Descriminalização das drogas no Brasil.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD448', 'MD548'],
			color: ''
		},
		'MD447': {
			code: 'MD447',
			name: 'Farmacologia',
			ementa: 'Abordagem da terapêutica das doenças mais prevalentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:3},
			requisitos: ['MD343'],
			color: ''
		},
		'MD752': {
			code: 'MD752',
			name: 'Atenção Clínico-Cirúrgica Integradas I',
			ementa: 'Fundamentos teórico e prático de Bases da Cirurgia Geral, incluindo conceitos anatômicos e cirúrgicos, técnica cirúrgica, fios de sutura, cicatrização, metabolismo, infecções, sondas e drenos e as afecções mais importantes e prevalentes das demais especialidades cirúrgicas, de forma a permitir a integração dos conteúdos afins, procurando favorecer o ato profissional e a formação geral do médico. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:20, L:0, O:0, D:0, HS:20, SL:0, C:15},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD444', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644'],
			color: ''
		},
		'MD753': {
			code: 'MD753',
			name: 'Atenção Clínico-Cirúrgica Integrada II',
			ementa: 'Fundamentos teóricos e práticos das seguintes áreas do conhecimento médico: Otorrinolaringologia, Oftalmologia, Dermatologia e Genética Clínica. Serão abordadas as afecções mais importantes e prevalentes de forma a permitir a integração dos conteúdos afins, procurando favorecer o ato profissional e a formação geral do médico. As atividades serão desenvolvidas nos 7º e 8º semestres. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 08 semanas.',
			semestre: 1,
			vector: {T:0, P:22, L:0, O:0, D:0, HS:22, SL:0, C:12},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD444', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644'],
			color: ''
		},
		'MD754': {
			code: 'MD754',
			name: 'Atenção Clínico-Cirúrgica Integrada III',
			ementa: 'Fundamentos teóricos e práticos das seguintes áreas do conhecimento médico: Neurologia, Ortopedia e Psiquiatria. Serão abordadas as afecções mais importantes e prevalentes de forma a permitir a integração dos conteúdos afins, procurando favorecer ao ato profissional e a formação geral do médico. As atividades serão desenvolvidas nos 7º e 8º semestres. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:20, L:0, O:0, D:0, HS:20, SL:0, C:15},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD444', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644'],
			color: ''
		},
		'MD758': {
			code: 'MD758',
			name: 'Atenção Integral à Saúde',
			ementa: 'Atendimento ambulatorial, supervisionado, em Unidades Básicas de Saúde, contemplando o atendimento integral à saúde da criança, do adolescente e do adulto, incluindo as especificidades da saúde da mulher. Abordagem clínica, diagnóstica e terapêutica das doenças e sintomas mais prevalentes nas diferentes faixas etárias. Saúde Coletiva, Saúde Ocupacional, Saúde Ambiental, Patologia Clínica, Radiologia, Saúde Mental, Saúde da Família e Ética.',
			semestre: 1,
			vector: {T:4, P:14, L:0, O:0, D:0, HS:18, SL:4, C:40},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD444', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644'],
			color: ''
		},
		'MD759': {
			code: 'MD759',
			name: 'Atenção Clínica Hospitalar',
			ementa: 'Coleta de materiais biológicos e discussão sobre os principais erros pré-analíticos que causam interferência nos resultados dos exames laboratoriais. Atividade de ensino supervisionada no atendimento a pacientes internados em enfermarias clínicas e assistência para pacientes com doença grave, em progressão e fora da possibilidade terapêutica de cura. Geriatria. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 03 semanas.',
			semestre: 1,
			vector: {T:0, P:15, L:0, O:0, D:0, HS:15, SL:0, C:3},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD444', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644'],
			color: ''
		},
		'MD941': {
			code: 'MD941',
			name: 'Atenção Integral à Saúde da Criança e do Adolescente I',
			ementa: 'Propiciar condições para a aquisição de conhecimentos, habilidades e atitudes para os cuidados de saúde da criança e do adolescente. Para este propósito, serão realizadas atividades teóricas e práticas em serviços com atuação em Pediatria Clínica abrangendo Atenção Primária, Ambulatório e Enfermaria Geral, Urgência, além de Neonatologia. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 11 semanas e será oferecida concomitante à disciplina MD951.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:29},
			requisitos: ['AA200'],
			color: '#7040D9'
		},
		'MD942': {
			code: 'MD942',
			name: 'Atenção Integral à Saúde da Mulher I',
			ementa: 'Aplicação do conhecimento da fisiologia do sistema reprodutor feminino nas diversas fases, para adequada orientação terapêutica das patologias mais prevalentes na prática médica diária. Os objetivos são alcançados através de aprendizado em serviço, realizado em ambulatórios, unidades de internação, Centro Cirúrgico, Centro Obstétrico e unidades de emergência. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 11 semanas e será oferecida concomitante à disciplina MD952.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:29},
			requisitos: ['AA200'],
			color: '#D94079'
		},
		'MD943': {
			code: 'MD943',
			name: 'Atenção Integral à Saúde do Adulto I',
			ementa: 'Treinamento prático nas áreas de cardiologia clínica e cirúrgica, moléstias infecciosas, DST, dermatologia com ênfase em hanseníase, oncologia geral e imunologia. Serão realizados atendimentos clínicos, ambulatoriais e acompanhamento de pacientes internados. Familiarização com doenças prevalentes e importantes em cada área, sendo orientados quanto a história clínica, exame físico, propedêutica e terapêutica. Atendimento a pacientes nas Unidades Básicas de Saúde. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:29},
			requisitos: ['AA200'],
			color: '#D94040'
		},
		'MD944': {
			code: 'MD944',
			name: 'Atenção Clínico-Cirúrgica I',
			ementa: 'Participar dos atendimentos a pacientes internados em serviço de complexidade secundária. Desenvolver atividades teóricas e práticas visando à formação geral do médico em clínica, geriatria e cirurgia. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 06 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:16},
			requisitos: ['AA200'],
			color: '#40D966'
		},
		'MD945': {
			code: 'MD945',
			name: 'Saúde Coletiva',
			ementa: 'Abordagem da saúde ambiental e do trabalhador e gestão de serviços da saúde. Contato com portadores de doenças do trabalho em atividade ambulatorial e ambientes de trabalho que podem contribuir na gênese dessas doenças. Diferentes aspectos da organização e gestão do trabalho em saúde (trabalho em equipe, gestão do cuidado, clínica ampliada, integralidade no sistema de saúde) e à gestão do trabalho médico (mercado de trabalho público e privado); educação permanente em saúde. Ética. Esta disciplina será oferecida em 48 semanas sob forma de rodízio, onde cada aluno deverá cumprir 02 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#D99640'
		},
		'MD951': {
			code: 'MD951',
			name: 'Plantão em Pediatria',
			ementa: 'Desenvolver habilidades e competências para o atendimento integrado nas áreas de emergência e urgências pediátricas. Primeiras medidas de atendimento e diagnóstico sindrômico. As atividades serão desenvolvidas em períodos noturnos, feriados e finais de semana no decorrer dos 9º e 10º semestres. Esta disciplina será oferecida em 52 semanas sob forma de rodízio, onde cada aluno deverá cumprir 11 semanas e será oferecida concomitante à disciplina MD941.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:3, D:0, HS:5, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#D94096'
		},
		'MD952': {
			code: 'MD952',
			name: 'Plantão em Tocoginecologia',
			ementa: 'Desenvolver habilidades e competências para o atendimento integrado nas áreas de emergência e urgências obstétricas e ginecológicas. Primeiras medidas de atendimento e diagnóstico sindrômico. As atividades serão desenvolvidas em períodos noturnos, feriados e finais de semana no decorrer dos 9º e 10º semestres. Esta disciplina será oferecida em 52 semanas sob forma de rodízio, onde cada aluno deverá cumprir 11 semanas e será oferecida concomitante à disciplina MD942.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:3, D:0, HS:6, SL:0, C:21},
			requisitos: ['AA200'],
			color: '#D9CF40'
		},
		'MD126': {
			code: 'MD126',
			name: 'Plantão de Emergência Cirúrgica',
			ementa: 'Desenvolver habilidades e competências para o atendimento integrado nas áreas de emergência e urgências cirúrgicas do adulto. Primeiras medidas de atendimento e diagnóstico sindrômico. As atividades serão desenvolvidas em períodos noturnos, feriados e finais de semana no decorrer dos 11º e 12º semestres. Esta disciplina será oferecida em 52 semanas.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:0, D:0, HS:1, SL:0, C:3},
			requisitos: ['AA200'],
			color: '#5340D9'
		},
		'MD127': {
			code: 'MD127',
			name: 'Plantão de Emergência Médica',
			ementa: 'Desenvolver habilidades e competências para o atendimento integrado nas áreas de emergência e urgências médico-cirúrgicas do adulto. Primeiras medidas de atendimento e diagnóstico sindrômico. As atividades serão desenvolvidas em períodos noturnos, feriados e finais de semana no decorrer dos 11º e 12º semestres. Esta disciplina será oferecida em 52 semanas.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:3, D:0, HS:5, SL:0, C:17},
			requisitos: ['AA200'],
			color: '#40BCD9'
		},
		'MD131': {
			code: 'MD131',
			name: 'Atenção Integral à Saúde da Criança e do Adolescente II',
			ementa: 'Desenvolver conhecimentos, habilidades e atitudes em relação ao cuidado da saúde do recém-nascido, da criança e do adolescente. Atividades em serviço em Unidades de Emergência Pediátrica de complexidade secundária e terciária e prática de internação em Enfermaria Geral Pediátrica e Unidade de Neonatologia de complexidades secundárias. Atividades teórico-práticas sobre as doenças pediátricas mais prevalentes. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 6 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:16},
			requisitos: ['AA200'],
			color: '#C640D9'
		},
		'MD132': {
			code: 'MD132',
			name: 'Atenção Integral à Saúde da Mulher II',
			ementa: 'Treinamento em serviços ambulatoriais e hospitalares com pacientes ginecológicos e obstétricos de nível secundário e terciário de atenção. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 04 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:11},
			requisitos: ['AA200'],
			color: '#8C40D9'
		},
		'MD133': {
			code: 'MD133',
			name: 'Atenção Clínico-Cirúrgica II',
			ementa: 'Desenvolver atividades teórico-práticas nas áreas de cirurgia vascular, moléstias vasculares, cirurgia de cabeça e pescoço e urologia. Os alunos deverão desenvolver capacidade para diagnosticar, solicitar exames diagnósticos, e desenvolver competência para atendimento das doenças mais prevalentes em cada área. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 05 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:13},
			requisitos: ['AA200'],
			color: '#40D983'
		},
		'MD134': {
			code: 'MD134',
			name: 'Atenção Clínico-Cirúrgica III',
			ementa: 'Desenvolver atividades teórico-práticas nas áreas Clínicas de Reumatologia, Hematologia, Nefrologia, Endocrinologia, Pneumologia e Cirurgia Torácica. Os alunos deverão desenvolver competências para o atendimento das doenças mais prevalentes em cada área. Ética. Esta disciplina será oferecida em 48 semanas, sob a forma de rodízio, onde cada aluno deverá cumprir 8 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:21},
			requisitos: ['AA200'],
			color: '#40D9BC'
		},
		'MD135': {
			code: 'MD135',
			name: 'Anestesiologia',
			ementa: 'Visita pré-anestésica em cirurgias eletivas. Anestesia geral e bloqueios espinhais. Manuseio de drogas depressoras do SNC, bloqueadores neuromusculares, anestésicos locais. Complicações anestésicas. Assistência ventilatória, práticas de ventilação e intubação traqueal. Monitorização intra-operatória. Prática de acessos venosos periféricos. Reanimação cardiorespiratória. Princípios de anestesia obstétrica. Dor aguda e crônica: fisiopatologia e tratamento. Ética. Esta disciplina será oferecida em 48 semanas sob forma de rodízio, onde cada aluno deverá cumprir 3 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:8},
			requisitos: ['AA200'],
			color: '#40D949'
		},
		'MD136': {
			code: 'MD136',
			name: 'Emergência',
			ementa: 'Desenvolver competências para o atendimento integrado nas áreas de emergência e urgência médicas do adulto: Diagnóstico sindrômico, primeiras medidas de atendimento e acompanhamento clínico e cirúrgico. Ética. Esta disciplina será oferecida em 48 semanas, sob forma de rodízio, onde cada aluno deverá cumprir 8 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:21},
			requisitos: ['AA200'],
			color: '#D9405C'
		},
		'MD138': {
			code: 'MD138',
			name: 'Cirurgia do Trauma',
			ementa: 'Atividades práticas na Unidade de Emergência Referenciada e na Enfermaria, Centro Cirúrgico, UTI, Ambulatório e SAMU-Campinas, em clínica cirúrgica e urgências cirúrgicas, realizando acompanhamento aos doentes críticos, participando do diagnóstico e do tratamento. Indicar e interpretar exames subsidiários, conduzir o pré e pós-operatório, reconhecer as principais complicações pós-operatórios. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 02 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#4066D9'
		},
		'MD139': {
			code: 'MD139',
			name: 'Atenção Clínico-Cirúrgica IV',
			ementa: 'Desenvolver atividades teórico-prático nas áreas de Gastroenterologia Clínica e Cirúrgica, adquirindo e consolidando conhecimentos sobre as doenças mais comuns do aparelho digestivo em nosso meio, tanto no tratamento clínico como cirúrgico. Os alunos deverão desenvolver competências para o atendimento das doenças mais prevalentes em cada área. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde o aluno deverá cumprir 06 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:16},
			requisitos: ['AA200'],
			color: '#4049D9'
		}
	}
};

export default catalogue;
