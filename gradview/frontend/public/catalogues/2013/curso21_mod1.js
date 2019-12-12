const catalogue = {
	totalCredits: 270,
	maxCreditsSem: 42,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BH125', 'EN280', 'BB123', 'BA133', 'EN112', 'BH127', 'EN390', 'BB125']
		},
		'sem-2': {
			id: '2',
			subjects: ['BI214', 'EN242', 'MD212', 'BM215', 'BF284', 'EN230', 'EN212', 'MD311', 'ME176', 'EN490']
		},
		'sem-3': {
			id: '3',
			subjects: ['MD231', 'EN312', 'MD362', 'EN322', 'EN321', 'EN470', 'BP323', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['MD214', 'EN442', 'EN412', 'EN421', 'MD462', 'EN430', 'MD430', 'EN465', 'ELET04', 'MD232']
		},
		'sem-5': {
			id: '5',
			subjects: ['ELET05', 'EN532', 'EN504', 'EN555', 'EN433', 'MD636']
		},
		'sem-6': {
			id: '6',
			subjects: ['EN590', 'EN704', 'EN604', 'EN665', 'ELET06', 'EN780']
		},
		'sem-7': {
			id: '7',
			subjects: ['EN690', 'EN766', 'ELET07', 'EN720']
		},
		'sem-8': {
			id: '8',
			subjects: ['EN790', 'EN791', 'EN792', 'ELET08']
		},
		'sem-9': {
			id: '9',
			subjects: ['EN891', 'EN892']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 12,
			hasRestrictions: true,
			subjects: ['AC---', 'AD---', 'AM---', 'AP---', 'AU---', 'CE---', 'CS---', 'EA---', 'EC---', 'EE---', 'EF---', 'EL---', 'EM---', 'EP---', 'EQ---', 'ES---', 'ET---', 'F_---', 'FA---', 'FN---', 'FP---', 'FR---', 'HG---', 'HH---', 'HL---', 'HZ---', 'LA---', 'MA---', 'MC---', 'MD---', 'ME---', 'MH---', 'MS---', 'MU---', 'TA---', 'TL---'],
		},
		'elet-2': {
			credits: 6,
			hasRestrictions: true,
			subjects: ['EN303', 'EN304', 'EN902', 'EN903', 'EN904', 'EN905', 'EN906', 'EN907', 'EN908', 'EN909', 'EN910', 'EN911', 'EN912', 'EN913', 'EN914', 'EN915', 'EN916', 'EN917', 'EN918', 'EN919', 'EN920'],
		},
	},

	subjects: {
		'BA133': {
			code: 'BA133',
			name: 'Anatomia Humana Básica II',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Leis gerais de crescimento e fatores gerais de variação. Estudo dos sistemas tegumentar, ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino. Sistema nervoso e órgãos dos sentidos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B976',
			obligatory: true
		},
		'BB123': {
			code: 'BB123',
			name: 'Bioquímica Básica I',
			ementa: 'Aminoácidos. Proteínas: estrutura e função. Sistemas tampão, transporte de gases e equilíbrio ácido-base do sangue. Cinética enzimática. Metabolismo de carboidratos, lipídeos e proteínas. Aspectos bioquímicos da ação hormonal. Integração metabólica.',
			semestre: 1,
			vector: {T:3, P:1, L:1, O:0, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B7B946',
			obligatory: true
		},
		'BB125': {
			code: 'BB125',
			name: 'Fundamentos de Biologia Molecular',
			ementa: 'Estrutura do DNA e replicação. Mutações e reparo do DNA. Estrutura do RNA e transcrição. Síntese e endereçamento de proteínas. Regulação da expressão gênica. Uso de técnicas recombinantes no diagnóstico e tratamento de saúde (sequenciamento de DNA, southern/northern/western blotting, clonagem, PCR, e outros).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B988',
			obligatory: true
		},
		'BH125': {
			code: 'BH125',
			name: 'Citologia e Histologia',
			ementa: 'Noções básicas sobre citologia e histologia geral e especial, compreendendo o estudo histológico dos principais órgãos e sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94697',
			obligatory: true
		},
		'BH127': {
			code: 'BH127',
			name: 'Embriologia',
			ementa: 'Embriologia geral: introdução à embriologia, fecundação, implantação, gastrulação, neurulação, dobramentos e fechamento do corpo do embrião, anexos fetais, período fetal e malformações congênitas. Embriologia dos sistemas: digestivo, respiratório, urinário, cardiovascular, cabeça e pescoço.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B9A3',
			obligatory: true
		},
		'EN112': {
			code: 'EN112',
			name: 'Enfermagem em Saúde Coletiva I',
			ementa: 'Integrar o estudante à vida universitária, à formação profissional e à prática de enfermagem. Políticas públicas e saúde. Introdução ao estudo e aplicação de métodos de apreensão do processo saúde-doença mediante a identificação, análise e discussão das condições sociais, políticas e culturais de sua produção. Construção de perfil demográfico e epidemiológico de uma dada população. Introdução às práticas educativas em saúde.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#B9464F',
			obligatory: true
		},
		'EN280': {
			code: 'EN280',
			name: 'Exercício da Enfermagem I',
			ementa: 'Evolução da prática de enfermagem no contexto histórico, político e social. Lei do exercício profissional. Fundamentos da ética e código de ética.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5E46B9',
			obligatory: true
		},
		'EN390': {
			code: 'EN390',
			name: 'Metodologia de Pesquisa I',
			ementa: 'Caminhos metodológicos e científicos, na estruturação de um projeto de pesquisa. Etapas de um projeto de pesquisa: delimitação do tema, pergunta, introdução, justificativa, objetivos, métodos e técnicas de pesquisa. Revisão bibliográfica: bases de dados, organização de referências e citação no texto. Diferenças e complementariedades entre as metodologias qualitativas e quantitativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B964',
			obligatory: true
		},
		'BF284': {
			code: 'BF284',
			name: 'Fisiologia e Biofísica Humana Básica',
			ementa: 'Estudo do funcionamento do organismo humano. Fisiologia e biofísica dos sistemas neurovascular e neurovegetativo; sistema nervoso central; órgãos dos sentidos; sangue e líquidos corporais; sistema cardiovascular; aparelhos respiratório, digestivo e renal; temperatura e metabolismo, glândulas endócrinas e reprodução.',
			semestre: 1,
			vector: {T:3, P:0, L:4, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['BA133', 'BB123'],
			color: '#7FB95E',
			obligatory: true
		},
		'BI214': {
			code: 'BI214',
			name: 'Imunologia',
			ementa: 'Mecanismos naturais de resistência. Fisiologia da resposta imune. Resposta humoral. Resposta celular. Reações antígeno-anticorpo. Imunopatologia.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BB123', 'BH125'],
			color: '#B8806F',
			obligatory: true
		},
		'BM215': {
			code: 'BM215',
			name: 'Microbiologia',
			ementa: 'Morfologia das bactérias, vírus e fungos. Fisiologia dos microrganismos. Genética bacteriana. Métodos de controle dos microrganismos. Epidemiologia das doenças infecto-contagiosas. Principais grupos de microrganismos causadores de doenças no homem.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*BB123', '*BH125'],
			color: '#B8806F',
			obligatory: true
		},
		'EN212': {
			code: 'EN212',
			name: 'Enfermagem em Saúde Coletiva II',
			ementa: 'Planejamento, desenvolvimento e avaliação de método de apreensão do processo saúde-doença em instituições sociais. Estudo da estrutura e funcionamento das instituições e suas relações com os serviços de saúde. Caracterização social, econômica e sanitária da população abrangida. Proposição e participação em intervenções no campo da saúde, em âmbito coletivo e individual, com ênfase na diminuição da pobreza, violência e abuso do tabaco, álcool e outras drogas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN112'],
			color: '#B9464F',
			obligatory: true
		},
		'EN230': {
			code: 'EN230',
			name: 'Enfermagem em Saúde Mental I',
			ementa: 'Estudo dos elementos teórico-metodológicos envolvidos na organização da assistência de enfermagem: linguagem, comunicação, relação intersubjetiva. Relação enfermeiro-paciente. Instrumentos básicos do cuidado de enfermagem em saúde mental e psiquiátrica: entrevistas preliminares, construção de caso clínico. As diferentes concepções de loucura e sua historicidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN112'],
			color: '#B9464F',
			obligatory: true
		},
		'EN242': {
			code: 'EN242',
			name: 'Alimentação e Qualidade de Vida',
			ementa: 'Alimentação na promoção da saúde e prevenção das doenças. Influências socioculturais sobre o comportamento alimentar. Aplicação dos conhecimentos de nutrição nas intervenções sobre alimentação. Acesso à alimentação como direito humano que preenche necessidades biológicas, psicológicas e sociais, garantindo qualidade de vida a indivíduos, grupos e coletividade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B97346',
			obligatory: true
		},
		'EN490': {
			code: 'EN490',
			name: 'Metodologia de Pesquisa II',
			ementa: 'Elaborar as etapas de um projeto de pesquisa, apresentando relatório final.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN390'],
			color: '#46B964',
			obligatory: true
		},
		'MD212': {
			code: 'MD212',
			name: 'Psicologia Geral e do Desenvolvimento',
			ementa: 'Desenvolvimento mental normal do ser humano, num contexto evolutivo e dinâmico. Conceitos básicos do desenvolvimento mental em suas várias etapas desde a concepção até a morte. A prática da enfermagem e sua relação com a psicologia. Conceitos fundamentais da Psicologia geral (inteligência, memória, humor, afetividade, pensamento e orientação).',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9A046',
			obligatory: true
		},
		'MD311': {
			code: 'MD311',
			name: 'Genética para Enfermagem I',
			ementa: 'O material genético, constituição dos cromossomos, ação gênica e análise do DNA. Estudo do cariótipo humano normal e das aberrações cromossômicas. Genética e câncer. Padrões de herança clássicos e não clássicos. Determinação e diferenciação do sexo. Os genes nas populações. Princípios de teratogênese e mutagênese.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#4691B9',
			obligatory: true
		},
		'ME176': {
			code: 'ME176',
			name: 'Introdução à Estatística Vital',
			ementa: 'Levantamentos e apurações de dados. Introdução à medidas de epidemiologia. Coeficiente e índices mais usados em saúde pública. População e amostra. Descrição de dados amostrais: tabelas, gráficos, medidas de posição e dispersão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#7946B9',
			obligatory: true
		},
		'BP323': {
			code: 'BP323',
			name: 'Parasitologia Médica II',
			ementa: 'Relação parasito-hospedeiro e ecologia parasitária. Estudo dos principais protozoários e helmintos de interesse médico. Classificação zoológica, biologia, patogenia, quadro clínico, diagnóstico, epidemiologia e profilaxia. Estudo dos principais artrópodes transmissores e veiculadores de doenças no homem. Acidentes por animais peçonhentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#70B946',
			obligatory: true
		},
		'EN312': {
			code: 'EN312',
			name: 'Enfermagem na Organização do Sistema de Saúde',
			ementa: 'Políticas e modelos de atenção à saúde. Diretrizes do Sistema Único de Saúde. Vigilância, imunização e educação em saúde. Reconhecimento do perfil sócio-sanitário da população e do território dos serviços básicos de saúde. Estrutura, gestão e processo. Trabalho de Enfermagem. Análise e intervenção em problemas de saúde pública.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EN212'],
			color: '#B9464F',
			obligatory: true
		},
		'EN321': {
			code: 'EN321',
			name: 'Semiologia Aplicada à Enfermagem I',
			ementa: 'Introdução ao processo de enfermagem, com ênfase no exame físico. Subsídios teóricos e práticos do exame físico geral.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BF284'],
			color: '#7FB95E',
			obligatory: true
		},
		'EN322': {
			code: 'EN322',
			name: 'Aspectos Fundamentais do Processo de Cuidar em Enfermagem',
			ementa: 'Ensino teórico-prático de aspectos e procedimentos fundamentais à assistência de enfermagem ao usuário atendido em serviços de saúde. Introdução à aplicação do Processo de Enfermagem com vistas ao planejamento e execução de cuidados de enfermagem. Desenvolvimento de práticas educativas de enfermagem.',
			semestre: 1,
			vector: {T:5, P:4, L:4, O:0, D:0, HS:13, SL:13, C:13},
			requisitos: ['BF284', 'BM215'],
			color: '#9C9D67',
			obligatory: true
		},
		'EN470': {
			code: 'EN470',
			name: 'Processo de Enfermagem',
			ementa: 'As gerações do Processo de Enfermagem e suas etapas. Teorias de Enfermagem. Elementos da Prática de Enfermagem e Classificações de Enfermagem (NANDA, NIC, NOC, CIPE, CCC). Raciocínio Clínico, Pensamento Crítico e Acurácia Diagnóstica. Elaboração e discussão de estudos de caso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#79B946',
			obligatory: true
		},
		'MD231': {
			code: 'MD231',
			name: 'Patologia Geral',
			ementa: 'Introdução à patologia geral: métodos de estudos, finalidade, conceito de doença, etiologia, patogenia. Alterações metabólicas e processsos regressivos. Alterações circulatórias. Inflamações agudas e crônicas: inflamações específicas. Cicatrização. Alterações de crescimento celular: conceito de neoplasia.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BH125'],
			color: '#B94697',
			obligatory: true
		},
		'MD362': {
			code: 'MD362',
			name: 'Farmacologia Básica',
			ementa: 'Farmacologia geral (princípios que regem absorção, distribuição, metabolização e eliminação de drogas). Noções de Farmacodinâmica. Farmacologia do Sistema Nervoso Autônomo (agonistas colinérgicos e adrenérgicos e seus respectivos antagonistas: anticolinesterásticos). Farmacologia do Sistema Cardiovascular (drogas anti-hipertensivas e glicosídeos cardiotônicos). Farmacologia do processo inflamatório e drogas anti-inflamatórias, tais como glicocorticoides e anti-inflamatórios não esteroidais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['BB123', 'BF284'],
			color: '#9BB952',
			obligatory: true
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EN412': {
			code: 'EN412',
			name: 'Enfermagem em Saúde Coletiva III',
			ementa: 'Abordagem epidemiológica e assistencial nos serviços básicos de saúde. Vigilância epidemiológica e sanitária. Programa de Imunização. Educação em saúde, planejamento, execução e avaliação de ações de enfermagem em serviços de saúde. Desenvolvimento de atividades práticas em serviços básicos de saúde.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN312'],
			color: '#B9464F',
			obligatory: true
		},
		'EN421': {
			code: 'EN421',
			name: 'Semiologia Aplicada à Enfermagem II',
			ementa: 'Capacitação do aluno para a primeira etapa do processo de enfermagem. Realização do exame físico (geral e específico) do adulto e idoso.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EN321', 'MD231'],
			color: '#9C807B',
			obligatory: true
		},
		'EN430': {
			code: 'EN430',
			name: 'Enfermagem em Saúde Mental II',
			ementa: 'A enfermagem psiquiátrica como prática técnica e social e sua inserção em serviços de saúde mental de referência. Os meios de aproximação do objeto de trabalho da enfermagem em saúde mental e a participação do enfermeiro no tratamento e na reabilitação psicossocial dos sujeitos em sofrimento psíquico. Políticas de saúde mental e trabalho em equipe. Desenvolvimento de atividades práticas em serviços de referência de atenção à saúde mental.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN230'],
			color: '#B9464F',
			obligatory: true
		},
		'EN442': {
			code: 'EN442',
			name: 'Processo de Cuidado Nutricional',
			ementa: 'Estudo da nutrição, dietética e dietoterapia aplicadas ao processo de cuidado nutricional ao cliente em nível primário, secundário e terciário. Atuação em equipe multiprofissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN242'],
			color: '#B97346',
			obligatory: true
		},
		'EN465': {
			code: 'EN465',
			name: 'Assistência de Enfermagem à Saúde da Mulher',
			ementa: 'Estudo dos fatores que fundamentam a Saúde da Mulher contemplando aspectos sociais e culturais, gênero e sexualidade. Assistência de Enfermagem na saúde reprodutiva, incluindo atenção pré-natal e contracepção. Atenção no climatério. Identificação e intervenções nas afecções ginecológicas benignas mais frequentes. Reabilitação do assoalho pélvico. Prevenção e detecção precoce do câncer genital e mamário. Preparo da mulher e família para o parto, nascimento e amamentação. Desenvolvimento de atividades educativas.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['EN322'],
			color: '#9C9D67',
			obligatory: true
		},
		'MD214': {
			code: 'MD214',
			name: 'Epidemiologia, Enfermagem e Saúde',
			ementa: 'Definição e usos da Epidemiologia. Conceitos básicos. População e saúde: noções de demografia, crescimento populacional. Transição demográfica e epidemiológica. A medida das condições de saúde: Fontes de informações. Principais indicadores de mortalidade. Letalidade. Mortalidade infantil e principais componentes. Incidência. Prevalência. Diagnóstico descritivo em Epidemiologia. Medidas de risco. A Epidemiologia e o controle das doenças. Epidemias e endemias. Investigação epidemiológica. Vigilância epidemiológica. Validação de testes diagnósticos. Desenhos epidemiológicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9DB946',
			obligatory: true
		},
		'MD232': {
			code: 'MD232',
			name: 'Elementos de Ciências Sociais Aplicados à Saúde',
			ementa: 'As relações entre saúde, sociedade e enfermagem: evolução histórica e o momento atual, abordando cinco eixos temáticos: a relação entre o cuidar e o curar, a divisão do trabalho na enfermagem, relação enfermeiro(a), paciente, ideais éticos e prática profissional, relação enfermeiro(a) e outros profissionais.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9466A',
			obligatory: true
		},
		'MD430': {
			code: 'MD430',
			name: 'Psicologia Aplicada à Saúde',
			ementa: 'Saúde e Relações mente/corpo. Concepção psicossomática do binômio saúde/doença. O papel do enfermeiro no lidar com o doente e os mecanismos psicológicos subjacentes à doença.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#469AB9',
			obligatory: true
		},
		'MD462': {
			code: 'MD462',
			name: 'Farmacologia Aplicada',
			ementa: 'Farmacologia do Sistema Nervoso Central (sedativos e hipnóticos, hipnoanalgésicos, antidepressivos, antipsicóticos e farmacodependência). Farmacologia do Aparelho Digestivo. Farmacologia Endócrina. Farmacologia Clínica (reações adversas, uso racional de medicamentos, interações entre drogas). Farmacologia de grupos especiais de pacientes (crianças, idosas e gestantes).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD362'],
			color: '#9BB952',
			obligatory: true
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EN433': {
			code: 'EN433',
			name: 'Antropologia Filosófica, Educação e Enfermagem',
			ementa: 'Contribuições da antropologia para o campo da saúde, suas interfaces e temas específicos. Abrangência e métodos de investigação da antropologia da saúde. Relação entre crença e verdade. Eficácia simbólica na cura. Relação entre cultura, saúde, doença, cuidado, cura e educação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B98546',
			obligatory: true
		},
		'EN504': {
			code: 'EN504',
			name: 'Processo de Cuidar do Adulto e Idoso',
			ementa: 'Desenvolvimento do processo de cuidar em enfermagem à adultos e idosos em seguimento ambulatorial e internados em unidades clínicas e cirúrgicas de média complexidade e instituições de longa permanência para idosos. Assistência à família e cuidadores. Prevenção de acidentes no hospital. Aspectos éticos na assistência. Desenvolvimento de práticas educativas.',
			semestre: 1,
			vector: {T:4, P:6, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['EN322', 'EN421', 'EN430', 'EN442', 'MD462'],
			color: '#A7835B',
			obligatory: true
		},
		'EN532': {
			code: 'EN532',
			name: 'Processo de Cuidar em Enfermagem Psiquiátrica',
			ementa: 'Estudo do objeto e dos instrumentos de trabalho da enfermagem psiquiátrica e em saúde mental, visando a atuação do enfermeiro no tratamento de sujeitos em sofrimento mental que requeiram cuidados contínuos e intensivos em serviços de saúde de nível secundário e terciário, particularmente de Saúde Mental. Desenvolvimento do processo de cuidar em enfermagem psiquiátrica e em emergências psiquiátricas mediante a realização de atividades práticas em serviços de saúde mental.',
			semestre: 1,
			vector: {T:3, P:4, L:0, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['EN430'],
			color: '#B9464F',
			obligatory: true
		},
		'EN555': {
			code: 'EN555',
			name: 'Assistência de Enfermagem à Criança e Adolescente I',
			ementa: 'Ensino teórico e prático da assistência de enfermagem à saude da criança e adolescente sadios e portadores de doenças de baixa e média complexidade, seus familiares e as repercussões do processo de adoecer no crescimento e desenvolvimento. Desenvolvimento de atividades práticas educativas.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['BP323', 'MD430', 'EN212', 'EN321', 'EN322', 'EN421'],
			color: '#86936D',
			obligatory: true
		},
		'MD636': {
			code: 'MD636',
			name: 'Genética para Enfermagem II',
			ementa: 'Dismorfologia. Citogenética clínica. Etiologia ambiental dos defeitos congênitos. Deficiência mental. Erros inatos do metabolismo. Erros da diferenciação sexual. Infertilidade. Aconselhamento genético. Diagnóstico pré-natal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD311'],
			color: '#4691B9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EN590': {
			code: 'EN590',
			name: 'Administração em Enfermagem',
			ementa: 'Fundamentos teóricos para a prática do trabalho gerencial e assistencia em enfermagem. Teorias administrativas, modelo de organização do atendimento ao paciente, processo de trabalho, tomada de decisão, trabalho em equipe, dimensionamento de pessoal, recrutamento e seleção de pessoal, avaliação de desempenho, educação permanente e política de gestão.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EN280', 'EN322', 'EN312'],
			color: '#91637A',
			obligatory: true
		},
		'EN604': {
			code: 'EN604',
			name: 'Processo de Cuidar em Enfermagem Perioperatória',
			ementa: 'Atuação em unidade de Centro Cirúrgico, Centro de Recuperação Pós-anestésica e Central de Material e Esterilização. Processamento e controle de qualidade de artigos de saúde. Processo de cuidar em enfermagem ao adulto e idoso no período perioperatório de cirurgias ambulatoriais, de cirurgias de médio e grande porte. Preparo para alta. Aspectos administrativos na unidade de Centro Cirúrgico, Centro de Recuperação Pós-anestésica e Central de Material e Esterilização. Aspectos éticos na assistência ao cliente cirúrgico e família. Desenvolvimento de práticas educativas.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['EN322', 'EN421', 'EN504', 'MD462'],
			color: '#9F9664',
			obligatory: true
		},
		'EN665': {
			code: 'EN665',
			name: 'Assistência de Enfermagem a Criança e Adolescente II',
			ementa: 'Ensino teórico e prático da assistência de enfermagem à criança e adolescente portadores de doenças de média e alta complexidade e as repercussões da doença e do tratamento na vida da criança, adolescente e família. Desenvolvimento de práticas educativas.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['EN504', 'EN555'],
			color: '#978B64',
			obligatory: true
		},
		'EN704': {
			code: 'EN704',
			name: 'Processo de Cuidar em Enfermagem do Adulto e Idoso de Alto Risco',
			ementa: 'Cuidado de enfermagem sistematizado ao cliente adulto e idoso internado em situações de alto risco, urgência e emergência. Assistência à família. Prevenção de acidentes nas situações de atuação prática. Aspectos éticos no processo de cuidar do cliente e família',
			semestre: 1,
			vector: {T:1, P:2, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN504'],
			color: '#A7835B',
			obligatory: true
		},
		'EN780': {
			code: 'EN780',
			name: 'Exercício da Enfermagem II',
			ementa: 'Retomada e aprofundamento do conteúdo abordado na disciplina Exercício de Enfermagem I, considerando as experiências vivenciadas pelo aluno no decorrer do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94685',
			obligatory: true
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EN690': {
			code: 'EN690',
			name: 'Estágio Supervisionado de Administração em Enfermagem Hospitalar',
			ementa: 'Ensino teórico-prático de aspectos fundamentais para a administração da unidade de saúde: teoria geral de administração, planejamento, organização, direção, avaliação, modelos de gestão e serviços de apoio. Atividades Educativas de Enfermagem. Estágio Supervisionado de Administração em Enfermagem Hospitalar.',
			semestre: 1,
			vector: {T:3, P:8, L:0, O:0, D:0, HS:11, SL:3, C:11},
			requisitos: ['EN421', 'EN590'],
			color: '#97727B',
			obligatory: true
		},
		'EN720': {
			code: 'EN720',
			name: 'Enfermagem em Geriatria e Gerontologia',
			ementa: 'A sociedade que envelhece. Conceitos fundamentais em geriatria e gerontologia. Legislação brasileira. Modalidades de atenção ao idoso. O gerenciamento do cuidado de enfermagem ao idoso em diferentes contextos. Principais Síndromes geriátricas. Cuidados paliativos. Avaliação geriátrica abrangente. Atenção à família e cuidadores.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94661',
			obligatory: true
		},
		'EN766': {
			code: 'EN766',
			name: 'Assistência de Enfermagem à Saúde da Mulher e Recém-Nascido',
			ementa: 'Assistência à mulher e seu filho nos processos de nascimento e puerpério (alojamento conjunto). Cuidado ao recém-nascido de risco e à sua família em processo de alta. Intervenção nas intercorrências mamárias, na manutenção da lactação e relactação. Assistência a mulheres portadoras de câncer ginecológico/mamário em atendimento especializado. Desenvolvimento de atividades educativas.',
			semestre: 1,
			vector: {T:5, P:6, L:0, O:0, D:0, HS:11, SL:11, C:11},
			requisitos: ['EN465'],
			color: '#9C9D67',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EN790': {
			code: 'EN790',
			name: 'Tópicos de Administração em Enfermagem',
			ementa: 'Seminário sobre tópicos de administração em serviços de saúde e serviços de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN690'],
			color: '#97727B',
			obligatory: true
		},
		'EN791': {
			code: 'EN791',
			name: 'Estágio Supervisionado I',
			ementa: 'Estágio Supervisionado a ser cumprido no campo de atuação profissional do enfermeiro. Atividades educativas de enfermagem.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:18, D:0, HS:22, SL:4, C:22},
			requisitos: ['AA475', 'EN604', 'EN704', 'EN665', 'EN690', 'EN766'],
			color: '#9D8A67',
			obligatory: true
		},
		'EN792': {
			code: 'EN792',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Desenvolvimento de trabalho monográfico de final de curso.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ['AA200'],
			color: '#B94658',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'EN891': {
			code: 'EN891',
			name: 'Estágio Supervisionado II',
			ementa: 'Estágio Supervisionado a ser cumprido no campo de atuação profissional do enfermeiro. Atividades educativas de enfermagem.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:19, D:0, HS:23, SL:0, C:23},
			requisitos: ['AA475', 'EN604', 'EN704', 'EN665', 'EN690', 'EN766'],
			color: '#9D8A67',
			obligatory: true
		},
		'EN892': {
			code: 'EN892',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento de trabalho monográfico de final de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#55B946',
			obligatory: true
		},
		'AC---': {
			code: 'AC---',
			name: 'Qualquer Disciplina com codigo AC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9D46B9',
			obligatory: false
		},
		'AD---': {
			code: 'AD---',
			name: 'Qualquer Disciplina com codigo AD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4649B9',
			obligatory: false
		},
		'AM---': {
			code: 'AM---',
			name: 'Qualquer Disciplina com codigo AM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4CB946',
			obligatory: false
		},
		'AP---': {
			code: 'AP---',
			name: 'Qualquer Disciplina com codigo AP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B97F',
			obligatory: false
		},
		'AU---': {
			code: 'AU---',
			name: 'Qualquer Disciplina com codigo AU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo AU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4664B9',
			obligatory: false
		},
		'CE---': {
			code: 'CE---',
			name: 'Qualquer Disciplina com codigo CE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CE---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4C46B9',
			obligatory: false
		},
		'CS---': {
			code: 'CS---',
			name: 'Qualquer Disciplina com codigo CS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo CS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#AEB946',
			obligatory: false
		},
		'EA---': {
			code: 'EA---',
			name: 'Qualquer Disciplina com codigo EA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#82B946',
			obligatory: false
		},
		'EC---': {
			code: 'EC---',
			name: 'Qualquer Disciplina com codigo EC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#465BB9',
			obligatory: false
		},
		'EE---': {
			code: 'EE---',
			name: 'Qualquer Disciplina com codigo EE---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EE---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8B46B9',
			obligatory: false
		},
		'EF---': {
			code: 'EF---',
			name: 'Qualquer Disciplina com codigo EF---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EF---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46A3B9',
			obligatory: false
		},
		'EL---': {
			code: 'EL---',
			name: 'Qualquer Disciplina com codigo EL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B98E46',
			obligatory: false
		},
		'EM---': {
			code: 'EM---',
			name: 'Qualquer Disciplina com codigo EM---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EM---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94646',
			obligatory: false
		},
		'EN303': {
			code: 'EN303',
			name: 'Diagnóstico de Enfermagem',
			ementa: 'Classificações diagnósticas. O processo diagnóstico. Elaboração e discussão de estudos de caso.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#8BB946',
			obligatory: false
		},
		'EN304': {
			code: 'EN304',
			name: 'Informática em Saúde',
			ementa: 'O uso da informática na área de saúde. Aplicações no ensino, pesquisa, assistência e administração em enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B9A846',
			obligatory: false
		},
		'EN902': {
			code: 'EN902',
			name: 'Família como Unidade de Cuidado',
			ementa: 'Processo de aproximação do aluno para abordar a família como unidade de cuidado, utilizando ferramentas para avaliar o sistema familiar.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B746B9',
			obligatory: false
		},
		'EN903': {
			code: 'EN903',
			name: 'Iniciação Científica em Enfermagem I',
			ementa: 'Levantamento de dados, execução de projetos e técnicas de pesquisa, análise dos resultados, elaboração de relatórios e outras formas de divulgação da produção de conhecimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B94F46',
			obligatory: false
		},
		'EN904': {
			code: 'EN904',
			name: 'Iniciação Científica em Enfermagem II',
			ementa: 'Levantamento de dados, execução de projetos e técnicas de pesquisa, análise dos resultados, elaboração de relatórios e outras formas de divulgação da produção de conhecimentos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A646B9',
			obligatory: false
		},
		'EN905': {
			code: 'EN905',
			name: 'Tópicos em Enfermagem I',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B99746',
			obligatory: false
		},
		'EN906': {
			code: 'EN906',
			name: 'Tópicos em Enfermagem II',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9467C',
			obligatory: false
		},
		'EN907': {
			code: 'EN907',
			name: 'Tópicos de Enfermagem III',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#466DB9',
			obligatory: false
		},
		'EN908': {
			code: 'EN908',
			name: 'Tópicos de Enfermagem IV',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#B946A0',
			obligatory: false
		},
		'EN909': {
			code: 'EN909',
			name: 'Tópicos de Enfermagem V',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:0, P:3, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46ABB9',
			obligatory: false
		},
		'EN910': {
			code: 'EN910',
			name: 'Tópicos de Enfermagem VI',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B952',
			obligatory: false
		},
		'EN911': {
			code: 'EN911',
			name: 'Tópicos de Enfermagem VII',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:1, P:1, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#B9B146',
			obligatory: false
		},
		'EN912': {
			code: 'EN912',
			name: 'Tópicos de Enfermagem VIII',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B95846',
			obligatory: false
		},
		'EN913': {
			code: 'EN913',
			name: 'Tópicos de Enfermagem IX',
			ementa: 'Abordagem de conteúdos e temas relacionados à assistência a saúde, em particular à assistência de enfermagem.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#467FB9',
			obligatory: false
		},
		'EN914': {
			code: 'EN914',
			name: 'Preparação Psicológica e Física da Gestante',
			ementa: 'O estado atual da preparação dos casais grávidos, o pré-natal e as principais modificações físicas e psíquicas da mulher grávida.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:2, D:0, HS:3, SL:1, C:3},
			requisitos: ['EN465'],
			color: '#9C9D67',
			obligatory: false
		},
		'EN915': {
			code: 'EN915',
			name: 'Tópicos de Enfermagem em Saúde Coletiva',
			ementa: 'Teorização da prática de enfermagem em saúde coletiva.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#6746B9',
			obligatory: false
		},
		'EN916': {
			code: 'EN916',
			name: 'Saúde do Trabalhador: Aspectos Gerais',
			ementa: 'Aspectos gerais do trabalho no Brasil. Saúde do trabalhador no Brasil: legislação e Normas Regulamentadoras. Saúde do trabalhador de enfermagem no Brasil.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#46B949',
			obligatory: false
		},
		'EN917': {
			code: 'EN917',
			name: 'Manejo Clínico em Aleitamento Materno',
			ementa: 'Abordagem das políticas públicas relacionadas ao aleitamento materno. Estudo do manejo clínico do aleitamento materno a mães e crianças no Alojamento Conjunto, em situação de pré-alta da UTI neonatal, nas dificuldades das primeiras semanas após o nascimento e na introdução da alimentação complementar. Aleitamento materno em situações especiais. Desenvolvimento da habilidade de acolhimento nas questões relacionadas ao aleitamento materno.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:1, C:2},
			requisitos: '',
			color: '#B97C46',
			obligatory: false
		},
		'EN918': {
			code: 'EN918',
			name: 'Introdução a Tanatologia',
			ementa: 'Dignidade Humana e os Direitos Fundamentais. O processo de viver e envelhecer e o sentido da vida. Tanatologia. Perda, Pesar e o Processo de Luto. A morte e o morrer. Ortotanásia. Eutanásia, Distanásia, Suicídio, Cuidados Paliativos. A dor e o sofrimento humano. Angústia. Espiritualidade.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#A6B946',
			obligatory: false
		},
		'EN919': {
			code: 'EN919',
			name: 'Toxicologia Clínica: Aspectos Básicos',
			ementa: 'Epidemiologia das exposições tóxicas às substâncias químicas e dos acidentes por animais peçonhentos no Brasil, com maior prevalência e maior gravidade na Região de Campinas - SP. Manifestações clínicas, alterações laboratoriais e principais complicações: 1) das exposições tóxicas (medicamentos, pesticidas inibidores da acetilcolinesterase, drogas de abuso, produtos com ação cáustica e plantas tóxicas) e 2) dos acidentes por animais peçonhentos. Medidas terapêuticas (descontaminação gastrintestinal, aumento da eliminação, antídotos, antagonistas e antivenenos).',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ['EN322'],
			color: '#9C9D67',
			obligatory: false
		},
		'EN920': {
			code: 'EN920',
			name: 'Cuidados Paliativos - Noções Básicas',
			ementa: 'Estudo da História, conceitos, princípios e aspectos ético-legais dos Cuidados Paliativos. Assistência de enfermagem contemplando os aspectos biopsicosocioespirituais da pessoa portadora de enfermidade progressiva, limitante, que evoluirá para a morte, bem como sua família.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#46B95B',
			obligatory: false
		},
		'EP---': {
			code: 'EP---',
			name: 'Qualquer Disciplina com codigo EP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B9B4',
			obligatory: false
		},
		'EQ---': {
			code: 'EQ---',
			name: 'Qualquer Disciplina com codigo EQ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo EQ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4676B9',
			obligatory: false
		},
		'ES---': {
			code: 'ES---',
			name: 'Qualquer Disciplina com codigo ES---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ES---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96146',
			obligatory: false
		},
		'ET---': {
			code: 'ET---',
			name: 'Qualquer Disciplina com codigo ET---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ET---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B4B9',
			obligatory: false
		},
		'FA---': {
			code: 'FA---',
			name: 'Qualquer Disciplina com codigo FA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo FA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#8246B9',
			obligatory: false
		},
		'FN---': {
			code: 'FN---',
			name: 'Qualquer Disciplina com codigo FN---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo FN---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B94673',
			obligatory: false
		},
		'FP---': {
			code: 'FP---',
			name: 'Qualquer Disciplina com codigo FP---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo FP---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5EB946',
			obligatory: false
		},
		'FR---': {
			code: 'FR---',
			name: 'Qualquer Disciplina com codigo FR---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo FR---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946A8',
			obligatory: false
		},
		'F_---': {
			code: 'F_---',
			name: 'Qualquer Disciplina com codigo F_---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo F_---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#AE46B9',
			obligatory: false
		},
		'HG---': {
			code: 'HG---',
			name: 'Qualquer Disciplina com codigo HG---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HG---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#9446B9',
			obligatory: false
		},
		'HH---': {
			code: 'HH---',
			name: 'Qualquer Disciplina com codigo HH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B96D',
			obligatory: false
		},
		'HL---': {
			code: 'HL---',
			name: 'Qualquer Disciplina com codigo HL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B9468E',
			obligatory: false
		},
		'HZ---': {
			code: 'HZ---',
			name: 'Qualquer Disciplina com codigo HZ---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo HZ---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B9AB',
			obligatory: false
		},
		'LA---': {
			code: 'LA---',
			name: 'Qualquer Disciplina com codigo LA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo LA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4688B9',
			obligatory: false
		},
		'MA---': {
			code: 'MA---',
			name: 'Qualquer Disciplina com codigo MA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#94B946',
			obligatory: false
		},
		'MC---': {
			code: 'MC---',
			name: 'Qualquer Disciplina com codigo MC---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MC---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#5546B9',
			obligatory: false
		},
		'MD---': {
			code: 'MD---',
			name: 'Qualquer Disciplina com codigo MD---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MD---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#67B946',
			obligatory: false
		},
		'ME---': {
			code: 'ME---',
			name: 'Qualquer Disciplina com codigo ME---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ME---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B99A',
			obligatory: false
		},
		'MH---': {
			code: 'MH---',
			name: 'Qualquer Disciplina com codigo MH---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MH---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B946B1',
			obligatory: false
		},
		'MS---': {
			code: 'MS---',
			name: 'Qualquer Disciplina com codigo MS---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MS---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#4652B9',
			obligatory: false
		},
		'MU---': {
			code: 'MU---',
			name: 'Qualquer Disciplina com codigo MU---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo MU---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#46B991',
			obligatory: false
		},
		'TA---': {
			code: 'TA---',
			name: 'Qualquer Disciplina com codigo TA---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TA---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#B96A46',
			obligatory: false
		},
		'TL---': {
			code: 'TL---',
			name: 'Qualquer Disciplina com codigo TL---',
			ementa: 'Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo TL---, onde o - indica uma letra ou numero.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1},
			requisitos: '',
			color: '#7046B9',
			obligatory: false
		}
	}
};

export default catalogue;
