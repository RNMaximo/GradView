const catalogue = {
	totalCredits: 576,
	maxCreditsSem: 1000000000,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['MD141', 'MD148', 'BS110', 'BS111', 'MD142']
		},
		'sem-2': {
			id: '2',
			subjects: ['MD241', 'MD243', 'BS210', 'MD248', 'MD244', 'MD242']
		},
		'sem-3': {
			id: '3',
			subjects: ['MD542', 'BS330', 'MD344', 'BS320', 'MD348', 'BS340', 'MD343', 'MD342']
		},
		'sem-4': {
			id: '4',
			subjects: ['BS430', 'BS440', 'MD642', 'MD444', 'MD443', 'MD448', 'MD445', 'MD447', 'MD442', 'BS420']
		},
		'sem-5': {
			id: '5',
			subjects: ['MD543', 'MD544', 'MD548', 'MD546']
		},
		'sem-6': {
			id: '6',
			subjects: ['MD643', 'MD644', 'MD648', 'MD646']
		},
		'sem-7': {
			id: '7',
			subjects: ['MD758', 'MD754', 'MD753', 'MD752', 'MD748']
		},
		'sem-8': {
			id: '8',
			subjects: ['MD944', 'MD941', 'MD945', 'MD942', 'MD943']
		},
		'sem-9': {
			id: '9',
			subjects: ['MD136', 'MD132', 'MD138', 'MD131', 'MD135', 'MD134', 'MD139', 'MD127', 'MD133']
		}
	},

	eletivas: {
	},

	subjects: {
		'BS110': {
			code: 'BS110',
			name: 'Morfofisiologia Humana I',
			ementa: 'Estudo integrado de anatomia, histologia, embriologia, bioquímica (metabolismo) e fisiologia do corpo humano, abordando do ponto de vista estrutural e funcional os sistemas ósteo-muscular, neuromuscular e cardiovascular. Estudo histofisiológico do sangue e dos órgãos linfoides. Biologia do desenvolvimento humano e correlações com os defeitos congênitos. Vias catabólicas principais. Ciclo de Krebs e cadeia respiratória. Anatomia radiológica do aparelho locomotor.Obs.: Esta disciplina terá a duração de 09 semanas.',
			semestre: 1,
			vector: {T:13, P:0, L:13, O:0, D:0, HS:26, SL:26, C:16},
			requisitos: '',
			color: '#4646B9',
			obligatory: true
		},
		'BS111': {
			code: 'BS111',
			name: 'A Célula',
			ementa: 'Integração entre conhecimentos de bioquímica, biologia celular e molecular, genética médica, fisiologia e biofísica, histologia e clínica médica na compreensão da célula como unidade funcional dos diversos sistemas e como elemento essencial à vida. Desenvolvimento de habilidades em microscopia óptica e informática.Obs.: Esta disciplina terá a duração de 6 semanas.',
			semestre: 1,
			vector: {T:12, P:10, L:5, O:0, D:0, HS:27, SL:26, C:11},
			requisitos: '',
			color: '#B946AC',
			obligatory: true
		},
		'MD141': {
			code: 'MD141',
			name: 'Prática de Ciências I',
			ementa: 'Iniciação ao pensamento crítico relativo ao conhecimento científico e senso comum. A pesquisa científica e suas características. Desenvolvimento e habilidades para a análise crítica e construção do conhecimento científico. A busca da informação e suas evidências científicas. Fundamentos para análise de dados. Estruturação de um projeto de pesquisa.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7946B9',
			obligatory: true
		},
		'MD142': {
			code: 'MD142',
			name: 'Ações de Saúde Pública I',
			ementa: 'Introdução ao estudo da saúde coletiva, do sistema de saúde brasileiro, e dos determinantes do processo de saúde-doença - atenção com ênfase no território. Realização da primeira experiência de estágio em serviços de saúde, possibilitando uma visão crítica tanto dos papéis desempenhados pelas instituições e profissionais da área quanto da política da saúde do Brasil.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#6046B9',
			obligatory: true
		},
		'MD148': {
			code: 'MD148',
			name: 'Ética I',
			ementa: 'Introdução aos conceitos básicos da ética e suas articulações na sociedade a partir de análise de situações concretas que permitam enfatizar o estudo da posição e dos direitos humanos na Sociedade Brasileira e no contexto internacional. Ética e pesquisa em seres humanos. Atuação dos comitês de ética em pesquisa. Noções de políticas públicas em saúde.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B946',
			obligatory: true
		},
		'BS210': {
			code: 'BS210',
			name: 'Morfofisiologia Humana II',
			ementa: 'Estudo integrado de anatomia, histologia, embriologia, bioquímica (metabolismo) e fisiologia do corpo humano, abordando, do ponto de vista estrutural e funcional os sistemas respiratório, digestório, urinário, neuroendócrino e reprodutor. Biologia do desenvolvimento dos órgãos e sistemas e correlações com os defeitos congênitos. Principais vias anabólicas e integração do metabolismo. Anatomia radiológica de órgãos e sistemas.',
			semestre: 1,
			vector: {T:7, P:12, L:7, O:0, D:0, HS:26, SL:26, C:23},
			requisitos: ['BS110'],
			color: '#4646B9',
			obligatory: true
		},
		'MD241': {
			code: 'MD241',
			name: 'Prática de Ciências II',
			ementa: 'Análise crítica e construção do conhecimento científico. A busca da informação e suas evidências científicas. Conceitos, definições e aplicações da estatística na pesquisa científica. Análise exploratória de dados. Teste de Hipótese. Probabilidade e variável aleatória. Medidas de frequência e de associação/efeito. Caracteristícas gerais dos delineamentos de estudos epidemiológicos. Medidas de ocorrência, associação, efeito e impacto. Validação do instrumental epidemiológico.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD141'],
			color: '#7946B9',
			obligatory: true
		},
		'MD242': {
			code: 'MD242',
			name: 'Ações de Saúde Pública II',
			ementa: 'Aprofundar a compreensão de alguns conteúdos básicos e introdutórios da Saúde Coletiva, com ênfase nas competências e habilidades que os alunos adquirirão para desenvolver projetos em relação com equipes e comunidades.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD142'],
			color: '#6046B9',
			obligatory: true
		},
		'MD243': {
			code: 'MD243',
			name: 'Medicina e Saúde',
			ementa: 'Estudo de comportamento humano relacionado com o adoecer, tanto na perspectiva do doente quanto do médico. Desenvolvimento de habilidades e competências de comunicação interpessoal e de observação fundamentais para o exercício da Medicina.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD148'],
			color: '#46B946',
			obligatory: true
		},
		'MD244': {
			code: 'MD244',
			name: 'Introdução à Imunologia Médica',
			ementa: 'Apresenta conceitos básicos de estrutura, organização e resposta imune. Caracteriza a função das principais moléculas e células envolvidas nas respostas imunes inata e adaptativa. Apresenta mecanismos envolvidos nas respostas humorais e celulares. Apresenta e discute casos clínicos que ilustram a importância da resposta imune em Medicina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'MD248': {
			code: 'MD248',
			name: 'Ética II',
			ementa: 'Continuidade dos estudos iniciados na MD148. Abordagem médica e filosófica sobre educação, cultura e valor. Parâmetros legais, cultura e religiosidade dos pacientes. Introdução ao código de ética médica.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4679B9',
			obligatory: true
		},
		'BS320': {
			code: 'BS320',
			name: 'Neurociências I',
			ementa: 'Abordagem da organização anatômica e da função do sistema nervoso num enfoque transdisciplinar, integrando conceitos fundamentais da anatomia, neurofisiologia, embriologia, farmacologia do sistema nervoso central e problemas da clinica neurológica. Estudo da anatomia macroscópica, microscópica e morfofuncional do sistema nervoso central e periférico, em correlação com os dados de neuroimagem estrutural e funcional. Estudo da neurofisiologia, analisando mecanismos sinápticos, sistemas de neurotransmissores e sinalização intracelular, funções de codificação, integração, organização e controle da percepção sensorial, motricidade, comportamento e cognição; plasticidade neural.',
			semestre: 1,
			vector: {T:7, P:2, L:5, O:0, D:0, HS:14, SL:14, C:14},
			requisitos: ['BS110', 'BS111', 'BS210'],
			color: '#6C46B5',
			obligatory: true
		},
		'BS330': {
			code: 'BS330',
			name: 'Relação Patógeno-Hospedeiro I',
			ementa: 'Aspectos básicos da biologia de bactérias, vírus e fungos. Introdução sobre fisiologia, estrutura e função de micro-organismos e sua relação com a patogenicidade. Epidemiologia, prevenção e controle dos principais micro-organismos causadores de infecções em humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS111'],
			color: '#B946AC',
			obligatory: true
		},
		'BS340': {
			code: 'BS340',
			name: 'Relação Patógeno-Hospedeiro II',
			ementa: 'Conteúdos de imunologia básica para a compreensão dos mecanismos fundamentais do desenvolvimento, funcionamento e regulação do sistema imunológico e sua inter-relação com outros sistemas fisiológicos. Será dado enfoque especial aos aspectos médico e laboratorial da imunologia, buscando correlação entre o aprendizado fundamental e as perspectivas da sua aplicação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS111'],
			color: '#B946AC',
			obligatory: true
		},
		'MD342': {
			code: 'MD342',
			name: 'Saúde e Sociedade I',
			ementa: 'Relaçõs entre Saúde e Sociedade, estudadas do ponto de vista da integralidade da assistência nos níveis de complexidade da rede de serviços de saúde, considerando a especificidade de um determinado problema de saúde, no âmbito das políticas públicas de saúde dirigidas ao problema abordado. A estratégia básica do Módulo pressupõe o atendimento a demandas da rede pública de serviços de saúde, num processo de estreita colaboração entre os vários atores envolvidos na construção, desenvolvimento e avaliação das atividades.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD142', 'MD242'],
			color: '#6046B9',
			obligatory: true
		},
		'MD343': {
			code: 'MD343',
			name: 'Princípios de Farmacologia',
			ementa: 'Conhecimentos gerais de Farmacocinética (princípios que regem absorção, distribuição, metabolização e eliminação de fármacos) e de Farmacodinâmica. Farmacologia do sistema nervoso autônomo (agonistas colinérgicos adrenérgicos e seus respectivos antagonistas e Anticolinesterásticos) e da junção neuromuscular.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS111'],
			color: '#B946AC',
			obligatory: true
		},
		'MD344': {
			code: 'MD344',
			name: 'Laboratório de Habilidades I',
			ementa: 'Identificação de vítimas em situação crítica. Paciente traumatizado. Medidas básicas de reanimação, suporte de vida e primeiros socorros. Princípios de atendimento pré-hospitalar.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46ACB9',
			obligatory: true
		},
		'MD348': {
			code: 'MD348',
			name: 'Bioética I',
			ementa: 'Introdução à Bioética. Discussão de conceitos básicos a partir de casos concretos. Análise de temas como morte encefálica, distanásia, transplante de órgãos, aborto e clonagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9AC46',
			obligatory: true
		},
		'MD542': {
			code: 'MD542',
			name: 'Epidemiologia e Saúde I',
			ementa: 'História e aplicações da Epidemiologia. Tendências demográficas; estrutura populacional, transição demográfica. Mortalidade-indicadores usuais; proporções, índices e coeficientes; indicadores gerais e específicos. Comparação de indicadores; mortes precoces, excessivas e evitáveis. Eventos sentinela. Vigilância Epidemiológica. Medidas de frequência e de associação. Distribuição das doenças: pessoa, tempo e lugar. Doenças de notificação compulsória. Estudo de epidemias. Diagrama de controle. Sistema Nacional de Vigilância Epidemiológica. Introdução aos desenhos de estudos epidemiológicos: estudos transversais, inquéritos e estudos ecológicos.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B979',
			obligatory: true
		},
		'BS420': {
			code: 'BS420',
			name: 'Relação Patógeno-Hospedeiro III',
			ementa: 'Introdução à Parasitologia: conceitos básicos, ciclos evolutivos das principais parasitoses em humanos, patogenia, controle e profilaxia. Resposta imune nas parasitoses.',
			semestre: 1,
			vector: {T:2, P:0, L:4, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['BS340'],
			color: '#B946AC',
			obligatory: true
		},
		'BS430': {
			code: 'BS430',
			name: 'Relação Patógeno-Hospedeiro IV',
			ementa: 'Modelos de infecções virais, bacterianas e fúngicas. Resposta imune nas infecções virais, bacterianas e fúngicas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS330', 'BS340'],
			color: '#B946AC',
			obligatory: true
		},
		'BS440': {
			code: 'BS440',
			name: 'Neurociências II',
			ementa: 'Estudo integrativo de problemas da neurofisiologia, psiquiatria, farmacologia e neurologia, como base para a visão biopsico-social do homem. Processos neurais integrativos da motivação, comportamento alimentar, sexual e emoções. Aprendizagem e memória. Ritmos biológicos e ciclo sono-vigília. Dependência de drogas. Introdução à genética do comportamento, doenças neurológicas e transtornos psiquiátricos. Transtornos psiquiátricos da ansiedade e depressão; transtorno afetivo bipolar; psicoses; comportamento sexual; atenção. Drogas usadas no tratamento de transtornos psiquiátricos, epilepsia e dependência de drogas. Bases neurológicas da consciência, epilepsia e demências.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BS320'],
			color: '#6C46B5',
			obligatory: true
		},
		'MD442': {
			code: 'MD442',
			name: 'Saúde e Sociedade II',
			ementa: 'Relações entre Saúde e Sociedade, estudadas do ponto de vista da integralidade da assistência nos níveis de complexidade da rede de serviços de saúde, considerando a especificidade de um determinado problema de saúde, no âmbito das políticas públicas de saúde dirigidas ao problema abordado. Dando continuidade à MD342, ministrada no primeiro semestre, a MD442 deverá aprofundar e sistematizar os conhecimentos e experiências acumulados no primeiro semestre, restituindo os resultados do trabalho às unidades de saúde nas quais os temas foram desenvolvidos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD142', 'MD242', 'MD342'],
			color: '#6046B9',
			obligatory: true
		},
		'MD443': {
			code: 'MD443',
			name: 'Introdução à Patologia',
			ementa: 'Alterações morfológicas macro e microscópicas dos processos patológicos gerais que fundamentam as doenças mais prevalentes em nosso meio correlacionando-as com a fisiopatologia, etiopatogênese, sinais, sintomas e aspectos laboratoriais. Mecanismos básicos que levam às mutações genéticas sejam elas cromossômicas ou gênicas e relacioná-las com as doenças mais comuns no campo das anomalias cromossômicas, dos erros inatos de metabolismo e do câncer.',
			semestre: 1,
			vector: {T:2, P:6, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['BS210', 'BS320'],
			color: '#5946B7',
			obligatory: true
		},
		'MD444': {
			code: 'MD444',
			name: 'Laboratório de Habilidades II',
			ementa: 'Prática médica por meio de anamnese, enfatizando no atendimento os aspectos sociais, históricos e ambientais do paciente. Técnicas e procedimentos básicos de enfermagem. Princípios de técnicas cirúrgicas em modelo experimental.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['MD344'],
			color: '#46ACB9',
			obligatory: true
		},
		'MD445': {
			code: 'MD445',
			name: 'Anatomia Aplicada à Prática Médica I',
			ementa: 'Estudos complementares de anatomia topográfica e cirúrgica, aspectos radiológicos e de imagem, correlação anátomo-cirúrgica-radiológica dos orgãos das regiões cervical, tóracica e abdominal, medicina legal, enfatizando doenças mais prevalentes e alguns procedimentos básicos e iniciais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BS210', 'BS320'],
			color: '#5946B7',
			obligatory: true
		},
		'MD447': {
			code: 'MD447',
			name: 'Farmacologia',
			ementa: 'Farmacologia do Sistema Cardiovascular com ênfase nos fármacos anti-hipertensivos, inotrópicos cardíados antiarrítmicos, fibrinolíticos e antiplaquetários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD343'],
			color: '#B946AC',
			obligatory: true
		},
		'MD448': {
			code: 'MD448',
			name: 'Bioética II',
			ementa: 'Continuidade do estudo iniciado na MD348, com discussão de aspectos médicos e filosóficos de temas de Bioética, a partir de situações concretas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4660B9',
			obligatory: true
		},
		'MD642': {
			code: 'MD642',
			name: 'Epidemiologia e Saúde II',
			ementa: 'Modelo Geral de Investigação de hipóteses em Epidemiologia. Epidemiologia analítica: estudos experimentais e observacionais. Entre os observacionais estão os estudos transversais e longitudinais (estudos de coorte prospectivos e retrospectivos e estudos de caso-controle). Meta-análise de estudos epidemiológicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD542'],
			color: '#46B979',
			obligatory: true
		},
		'MD543': {
			code: 'MD543',
			name: 'Semiotécnica da Observação Clínica',
			ementa: 'Estudo dos principais sinais e sintomas clínicos em Medicina Interna, com suas respectivas patogênese e fisiopatologia, em matéria teórico-prática capacitando o aluno a examinar o paciente adulto, colher dados semiológicos para uma observação clínica completa e posterior interpretação e elaboração diagnóstica.',
			semestre: 1,
			vector: {T:4, P:8, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['BS210', 'BS320', 'BS440', 'MD243'],
			color: '#59639A',
			obligatory: true
		},
		'MD544': {
			code: 'MD544',
			name: 'Fisiopatologia Integrada',
			ementa: 'Estudar nos diferentes aparelhos e sistemas do organismo humano (pele; osteoarticular; glândulas endócrinas; sistema cárdiovascular; trato respiratório; trato gastrointestinal; fígado; pâncreas e sistema nervoso) as doenças mais prevalentes em nosso meio no que se refere às manifestações clínicas, fisiopatologia, etiopatogenia, anatomia patológica, patologia clínica, imagenologia, genética médica, evolução, prognóstico e princípios terapêuticos.',
			semestre: 1,
			vector: {T:8, P:8, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['MD443'],
			color: '#5946B7',
			obligatory: true
		},
		'MD546': {
			code: 'MD546',
			name: 'Anatomia Aplicada à Prática Médica II',
			ementa: 'Estudos complementares de anatomia topográfica, imagens, anatomia cirúrgica, medicina legal, medicina fetal, enfatizando as doenças mais prevalentes.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD445'],
			color: '#5946B7',
			obligatory: true
		},
		'MD548': {
			code: 'MD548',
			name: 'Ética Médica I',
			ementa: 'Normas éticas a serem seguidas no exercício da Medicina, com ênfase no Código de Ética Médica. Introdução a Deontologia Médica. Atribuições do Conselho Federal e dos Conselhos Regionais de Medicina. Discussão dos aspectos da Ética Médica relacionados a temas diversos como responsabilidade profissional, segredo médico, relação com pacientes e familiares, direitos dos usuários dos serviços de saúde, direitos humanos, impacto do avanço tecnológico da prática médica, direitos e deveres nas relações entre médicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#93B946',
			obligatory: true
		},
		'MD643': {
			code: 'MD643',
			name: 'Semiologia e Propedêutica',
			ementa: 'Atividades teóricas e práticas em Semiologia e Propedêutica Clínica com participação na assistência diária aos pacientes do Hospital de Clínicas da Unicamp. Atividades teórico-práticas de semiologia e propedêutica pediátrica e ginecológica.',
			semestre: 1,
			vector: {T:4, P:16, L:0, O:0, D:0, HS:20, SL:20, C:20},
			requisitos: ['MD543'],
			color: '#59639A',
			obligatory: true
		},
		'MD644': {
			code: 'MD644',
			name: 'Fisiopatologia Integrada II',
			ementa: 'Estudar nos diferentes aparelhos e sistemas do organismo humano (trato genital feminino; hematopoiético; aparelho urinário e genital masculino) as doenças mais prevalentes em nosso meio no que se refere às manifestações clínicas, fisiopatologia, etiopatologia, anatomia patológica, patologia clínica, imagenologia, genética médica, evolução, prognóstico e princípios terapêuticos.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['MD443'],
			color: '#5946B7',
			obligatory: true
		},
		'MD646': {
			code: 'MD646',
			name: 'Anatomia Aplicada à Prática Médica III',
			ementa: 'Oferecer treinamento teórico-prático em anatomia topográfica, relacionada a estudos com imagens, anatomia cirúrgica, medicina legal, enfatizando as doenças mais prevalentes em oftalmologia, otorrinolaringologia e cabeça e pescoço. Será oferecido treinamento em aspectos de anatomia e fisiologia. Serão correlacionados aos aspectos clínicos relevantes à audição, equilíbrio, gustação, olfato, visão, via aerodigestiva superior, trauma de face e cabeça e pescoço e acessos cirúrgicos para as variadas formas de tratamento de patologias otorrinolaringológicas e oftalmológicas.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD546'],
			color: '#5946B7',
			obligatory: true
		},
		'MD648': {
			code: 'MD648',
			name: 'Ética Médica II',
			ementa: 'Continuidade do estudo iniciado na MD548, incluindo discussão do Código de Ética médica a partir de situações concretes. Direitos do usuário do sistema público e privado de saúde. Responsabilidade Civil e Penal do Médico.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#60B946',
			obligatory: true
		},
		'MD748': {
			code: 'MD748',
			name: 'Medicina Legal I',
			ementa: 'A Medicina Legal será abordada visando a aplicabilidade de conhecimentos específicos na prática médica geral. Introdução à Medicina Legal; a Medicina Legal na prática médica; tanatologia; traumatologia; psicopatologia forense; deontologia médica; imputabilidade penal e capacidade civil; sexologia forense; morte súbita; identificação médico-previdenciária; toxicologia forense; infortunística do trabalho; legislação trabalhista e previdenciária; notificação compulsória; perícia em medicina legal; declaração de óbitos. Cada aluno participará de pelo menos uma necropsia, assim como do estudo de caso , de forma completa, do ponto de vista legal, de anatomia patológica e abordagens teóricas. Preparação e apresentação de caso para a classe.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:4},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD448', 'MD548', 'MD648'],
			color: '#6A9D6C',
			obligatory: true
		},
		'MD752': {
			code: 'MD752',
			name: 'Atenção Clínico-Cirúrgica Integradas I',
			ementa: 'Fundamentos teórico e prático de Bases da Cirurgia Geral, incluindo conceitos anatômicos e cirúrgicos, técnica cirúrgica, fios de sutura, cicatrização, metabolismo, infecções, sondas e drenos e as afecções mais importantes e prevalentes das demais especialidades cirúrgicas, de forma a permitir a integração dos conteúdos afins, procurando favorecer o ato profissional e a formação geral do médico. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:20, L:0, O:0, D:0, HS:20, SL:0, C:15},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644', 'MD648', 'MD444'],
			color: '#5F8C86',
			obligatory: true
		},
		'MD753': {
			code: 'MD753',
			name: 'Atenção Clínico-Cirúrgica Integrada II',
			ementa: 'Fundamentos teóricos e práticos das seguintes áreas do conhecimento médico: Otorrinolaringologia, Oftalmologia, Dermatologia e Genética Clínica. Serão abordadas as afecções mais importantes e prevalentes de forma a permitir a integração dos conteúdos afins, procurando favorecer o ato profissional e a formação geral do médico. As atividades serão desenvolvidas nos 7º e 8º semestres. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 09 semanas.',
			semestre: 1,
			vector: {T:0, P:21, L:0, O:0, D:0, HS:21, SL:0, C:13},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD448', 'MD544', 'MD548', 'MD643', 'MD644', 'MD642', 'MD648', 'MD444'],
			color: '#5F8C86',
			obligatory: true
		},
		'MD754': {
			code: 'MD754',
			name: 'Atenção Clínico-Cirúrgica Integrada III',
			ementa: 'Fundamentos teóricos e práticos das seguintes áreas do conhecimento médico: Neurologia, Ortopedia e Psiquiatria. Serão abordadas as afecções mais importantes e prevalentes de forma a permitir a integração dos conteúdos afins, procurando favorecer ao ato profissional e a formação geral do médico. As atividades serão desenvolvidas nos 7º e 8º semestres. Esta disciplina será oferecida em 33 semanas sob forma de rodízio, onde o aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:20, L:0, O:0, D:0, HS:20, SL:0, C:15},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644', 'MD648', 'MD444'],
			color: '#5F8C86',
			obligatory: true
		},
		'MD758': {
			code: 'MD758',
			name: 'Atenção Integral à Saúde',
			ementa: 'Atendimento ambulatorial, supervisionado, em Unidades Básicas de Saúde, contemplando o atendimento integral à saúde da criança, do adolescente e do adulto, incluindo as especificidades da saúde da mulher. Abordagem clínica, diagnóstica e terapêutica das doenças e sintomas mais prevalentes nas diferentes faixas etárias. Saúde Coletiva, Saúde Ocupacional, Saúde Ambiental, Patologia Clínica e Radiologia.',
			semestre: 1,
			vector: {T:6, P:12, L:0, O:0, D:0, HS:18, SL:6, C:40},
			requisitos: ['MD148', 'MD248', 'MD348', 'MD444', 'MD448', 'MD544', 'MD548', 'MD642', 'MD643', 'MD644', 'MD648'],
			color: '#5F8C86',
			obligatory: true
		},
		'MD941': {
			code: 'MD941',
			name: 'Atenção Integral à Saúde da Criança e do Adolescente I',
			ementa: 'Propiciar condições para a aquisição de conhecimentos, habilidades e atitudes para os cuidados de saúde da criança e do adolescente. Para este propósito, serão realizadas atividades teóricas e práticas em serviços com atuação em Pediatria Clínica abrangendo Atenção Primária, Ambulatório e Enfermaria Geral, Urgência, além de Neonatologia. Ética. Dos 45 créditos, 29 referem-se às atividades do Internato e 16 créditos aos plantões obrigatórios. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:62, L:0, O:0, D:0, HS:62, SL:0, C:45},
			requisitos: ['AA200'],
			color: '#B96046',
			obligatory: true
		},
		'MD942': {
			code: 'MD942',
			name: 'Atenção Integral à Saúde da Mulher I',
			ementa: 'Aplicação do conhecimento da fisiologia do sistema reprodutor feminino nas diversas fases, para adequada orientação terapêutica das patologias mais prevalentes na prática médica diária. Os objetivos são alcançados através de aprendizado em serviço, realizado em ambulatórios, unidades de internação, Centro Cirúrgico, Centro Obstétrico e unidades de emergência. Dos 51 créditos, 29 créditos referem-se às atividades do Internato e 22 créditos aos plantões obrigatórios. Esta disciplina será oferecida em 48 semanas sob forma de rodízio, onde cada aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:69, L:0, O:0, D:0, HS:69, SL:0, C:51},
			requisitos: ['AA200'],
			color: '#46B960',
			obligatory: true
		},
		'MD943': {
			code: 'MD943',
			name: 'Atenção Integral à Saúde do Adulto I',
			ementa: 'Treinamento prático nas áreas de cardiologia clínica e cirúrgica, moléstias infecciosas, DST, dermatologia com ênfase em hanseníase, oncologia geral e imunologia. Serão realizados atendimentos clínicos, ambulatoriais e acompanhamento de pacientes internados. Familiarização com doenças prevalentes e importantes em cada área, sendo orientados quanto a história clínica, exame físico, propedêutica e terapêutica. Atendimento a pacientes nas Unidades Básicas de Saúde. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 11 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:29},
			requisitos: ['AA200'],
			color: '#9346B9',
			obligatory: true
		},
		'MD944': {
			code: 'MD944',
			name: 'Atenção Clínico-Cirúrgica I',
			ementa: 'Participar dos atendimentos a pacientes internados em serviço de complexidade secundária. Desenvolver atividades teóricas e práticas visando à formação geral do médico em clínica, geriatria e cirurgia. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 06 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:16},
			requisitos: ['AA200'],
			color: '#46B9AC',
			obligatory: true
		},
		'MD945': {
			code: 'MD945',
			name: 'Saúde Coletiva',
			ementa: 'Abordagem da saúde ambiental e do trabalhador e gestão de serviços da saúde. Contato com portadores de doenças do trabalho em atividade ambulatorial e ambientes de trabalho que podem contribuir na gênese dessas doenças. Diferentes aspectos da organização e gestão do trabalho em saúde (trabalho em equipe, gestão do cuidado, clínica ampliada, integralidade no sistema de saúde) e à gestão do trabalho médico (mercado de trabalho público e privado); educação permanente em saúde. Ética. Esta disciplina será oferecida em 48 semanas sob forma de rodízio, onde cada aluno deverá cumprir 02 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#B99346',
			obligatory: true
		},
		'MD127': {
			code: 'MD127',
			name: 'Plantão de Emergência Médica',
			ementa: 'Desenvolver habilidades e competências para o atendimento integrado nas áreas de emergência e urgências médico-cirúrgicas do adulto. Primeiras medidas de atendimento e diagnóstico sindrômico. As atividades serão desenvolvidas em períodos noturnos, feriados e finais de semana no decorrer dos 11º e 12º semestres. Esta disciplina será oferecida em 37 semanas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:0, C:20},
			requisitos: ['AA200'],
			color: '#4693B9',
			obligatory: true
		},
		'MD131': {
			code: 'MD131',
			name: 'Atenção Integral à Saúde da Criança e do Adolescente II',
			ementa: 'Desenvolver conhecimentos, habilidades e atitudes em relação ao cuidado da saúde do recém-nascido, da criança e do adolescente. Atividades em serviço em Unidades de Emergência Pediátrica de complexidade secundária e terciária e prática de internação em Enfermaria Geral Pediátrica e Unidade de Neonatologia de complexidades secundárias. Atividades teórico-práticas sobre as doenças pediátricas mais prevalentes. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 6 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:16},
			requisitos: ['AA200'],
			color: '#AC46B9',
			obligatory: true
		},
		'MD132': {
			code: 'MD132',
			name: 'Atenção Integral à Saúde da Mulher II',
			ementa: 'Treinamento em serviços ambulatoriais e hospitalares com pacientes ginecológicos e obstétricos de nível secundário e terciário de atenção. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 04 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:11},
			requisitos: ['AA200'],
			color: '#79B946',
			obligatory: true
		},
		'MD133': {
			code: 'MD133',
			name: 'Atenção Clínico-Cirúrgica II',
			ementa: 'Desenvolver atividades teórico-práticas nas áreas de pneumologia, cirurgia vascular - moléstias vasculares -, cirurgia de cabeça e pescoço e cirurgia torácica. Os alunos deverão desenvolver capacidade para diagnosticar, solicitar exames diagnósticos, e desenvolver competência para atendimento das doenças mais prevalentes em cada área. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 05 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:13},
			requisitos: ['AA200'],
			color: '#B94660',
			obligatory: true
		},
		'MD134': {
			code: 'MD134',
			name: 'Atenção Clínico-Cirúrgica III',
			ementa: 'Desenvolver atividades teórico-práticos nas áreas Clínicas de Reumatologia, Hematologia, Nefrologia, Endocrinologia e Urologia. Os alunos deverão desenvolver competências para o atendimento das doenças mais prevalentes em cada área. Ética. Esta disciplina será oferecida em 48 semanas, sob a forma de rodízio, onde cada aluno deverá cumprir 8 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:21},
			requisitos: ['AA200'],
			color: '#B97946',
			obligatory: true
		},
		'MD135': {
			code: 'MD135',
			name: 'Anestesiologia',
			ementa: 'Visita pré-anestésica em cirurgias eletivas. Anestesia geral e bloqueios espinhais. Manuseio de drogas depressoras do SNC, bloqueadores neuromusculares, anestésicos locais. Complicações anestésicas. Assistência ventilatória, práticas de ventilação e intubação traqueal. Monitorização intra-operatória. Prática de acessos venosos periféricos. Reanimação cardiorespiratória. Princípios de anestesia obstétrica e dor. Ética. Esta disciplina será oferecida em 48 semanas sob forma de rodízio, onde cada aluno deverá cumprir 3 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:8},
			requisitos: ['AA200'],
			color: '#ACB946',
			obligatory: true
		},
		'MD136': {
			code: 'MD136',
			name: 'Emergência',
			ementa: 'Desenvolver competências para o atendimento integrado nas áreas de emergência e urgência médicas do adulto: Diagnóstico sindrômico, primeiras medidas de atendimento e acompanhamento clínico e cirúrgico. Ética. Esta disciplina será oferecida em 48 semanas, sob forma de rodízio, onde cada aluno deverá cumprir 8 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:21},
			requisitos: ['AA200'],
			color: '#B94693',
			obligatory: true
		},
		'MD138': {
			code: 'MD138',
			name: 'Cirurgia do Trauma',
			ementa: 'Atividades práticas na Unidade de Emergência Referenciada e na Enfermaria, Centro Cirúrgico, UTI, Ambulatório e SAMU-Campinas, em clínica cirúrgica e urgências cirúrgicas, realizando acompanhamento aos doentes críticos, participando do diagnóstico e do tratamento. Indicar e interpretar exames subsidiários, conduzir o pré e pós-operatório, reconhecer as principais complicações pós-operatórios. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde cada aluno deverá cumprir 02 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:5},
			requisitos: ['AA200'],
			color: '#46B993',
			obligatory: true
		},
		'MD139': {
			code: 'MD139',
			name: 'Atenção Clínico-Cirúrgica IV',
			ementa: 'Desenvolver atividades teórico-prático nas áreas de Gastroenterologia Clínica e Cirúrgica, adquirindo e consolidando conhecimentos sobre as doenças mais comuns do aparelho digestivo em nosso meio, tanto no tratamento clínico como cirúrgico. Os alunos deverão desenvolver competências para o atendimento das doenças mais prevalentes em cada área. Ética. Esta disciplina será oferecida em 48 semanas sob a forma de rodízio, onde o aluno deverá cumprir 06 semanas.',
			semestre: 1,
			vector: {T:0, P:40, L:0, O:0, D:0, HS:40, SL:0, C:16},
			requisitos: ['AA200'],
			color: '#B94679',
			obligatory: true
		}
	}
};

export default catalogue;
