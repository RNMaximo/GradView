const catalogue = {
	totalCredits: 270,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BA133', 'BB123', 'BB125', 'BH125', 'BH127', 'EN112', 'EN280', 'EN390']
		},
		'sem-2': {
			id: '2',
			subjects: ['BF284', 'BI214', 'BM215', 'EN212', 'EN230', 'EN242', 'EN490', 'MD212', 'MD311', 'ME176']
		},
		'sem-3': {
			id: '3',
			subjects: ['BP323', 'EN312', 'EN321', 'EN322', 'EN470', 'MD231', 'MD362', 'ELET03']
		},
		'sem-4': {
			id: '4',
			subjects: ['EN232', 'EN412', 'EN421', 'EN430', 'EN442', 'EN465', 'MD214', 'MD430', 'MD462', 'ELET04']
		},
		'sem-5': {
			id: '5',
			subjects: ['EN433', 'EN504', 'EN532', 'EN555', 'MD636', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['EN590', 'EN604', 'EN665', 'EN704', 'EN780', 'ELET06']
		},
		'sem-7': {
			id: '7',
			subjects: ['EN690', 'EN720', 'EN766', 'ELET07']
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

	subjects: {
		'BA133': {
			code: 'BA133',
			name: 'Anatomia Humana Básica II',
			ementa: 'Métodos de estudo em Anatomia. Planos de construção do corpo humano. Leis gerais de crescimento e fatores gerais de variação. Estudo dos sistemas tegumentar, ósseo, articular, muscular, cardiovascular, respiratório, digestório, urinário, reprodutor masculino e feminino. Sistema nervoso e órgãos dos sentidos.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94068'
		},
		'BB123': {
			code: 'BB123',
			name: 'Bioquímica Básica I',
			ementa: 'Aminoácidos. Proteínas: estrutura e função. Sistemas tampão, transporte de gases e equilíbrio ácido-base do sangue. Cinética enzimática. Metabolismo de carboidratos, lipídeos e proteínas. Aspectos bioquímicos da ação hormonal. Integração metabólica.',
			semestre: 1,
			vector: {T:3, P:1, L:1, O:0, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#D9B740'
		},
		'BB125': {
			code: 'BB125',
			name: 'Fundamentos de Biologia Molecular',
			ementa: 'Estrutura do DNA e replicação. Mutações e reparo do DNA. Estrutura do RNA e transcrição. Síntese e endereçamento de proteínas. Regulação da expressão gênica. Uso de técnicas recombinantes no diagnóstico e tratamento de saúde (sequenciamento de DNA, southern/northern/western blotting, clonagem, PCR, e outros).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5AD940'
		},
		'BH125': {
			code: 'BH125',
			name: 'Citologia e Histologia',
			ementa: 'Noções básicas sobre citologia e histologia geral e especial, compreendendo o estudo histológico dos principais órgãos e sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#409DD9'
		},
		'BH127': {
			code: 'BH127',
			name: 'Embriologia',
			ementa: 'Embriologia geral: introdução à embriologia, fecundação, implantação, gastrulação, neurulação, dobramentos e fechamento do corpo do embrião, anexos fetais, período fetal e malformações congênitas. Embriologia dos sistemas: digestivo, respiratório, urinário, cardiovascular, cabeça e pescoço.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AA40D9'
		},
		'EN112': {
			code: 'EN112',
			name: 'Enfermagem em Saúde Coletiva I',
			ementa: 'Promover a integração do estudante à vida universitária, ao contexto particular de formação profissional e à prática de enfermagem. Saúde-doença como expressão das condições concretas de existência. Introdução ao estudo e aplicação de métodos de apreensão do processo saúde-doença mediante a identificação, análise e discussão das condições sociais, econômicas, políticas e culturais de sua produção. Planejamento, desenvolvimento e avaliação de inquérito de saúde e construção do perfil demográfico e epidemiológico de uma dada população. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: '',
			color: '#5A40D9'
		},
		'EN280': {
			code: 'EN280',
			name: 'Exercício da Enfermagem I',
			ementa: 'Evolução da prática de enfermagem no contexto histórico, político e social. Lei do exercício profissional. Fundamentos da ética e código de ética.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94090'
		},
		'EN390': {
			code: 'EN390',
			name: 'Metodologia de Pesquisa I',
			ementa: 'Caminhos metodológicos e científicos, na estruturação de um projeto de pesquisa. Etapas de um projeto de pesquisa: delimitação do tema, pergunta, introdução, justificativa, objetivos, métodos e técnicas de pesquisa. Revisão bibliográfica: bases de dados, organização de referências e citação no texto. Diferenças e complementariedades entre as metodologias qualitativas e quantitativas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D2D940'
		},
		'BF284': {
			code: 'BF284',
			name: 'Fisiologia e Biofísica Humana Básica',
			ementa: 'Estudo do funcionamento do organismo humano. Fisiologia e biofísica dos sistemas neurovascular e neurovegetativo; sistema nervoso central; órgãos dos sentidos; sangue e líquidos corporais; sistema cardiovascular; aparelhos respiratório, digestivo e renal; temperatura e metabolismo, glândulas endócrinas e reprodução.',
			semestre: 1,
			vector: {T:3, P:0, L:4, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['BA133', 'BB123'],
			color: ''
		},
		'BI214': {
			code: 'BI214',
			name: 'Imunologia',
			ementa: 'Mecanismos naturais de resistência. Fisiologia da resposta imune. Resposta humoral. Resposta celular. Reações antígeno-anticorpo. Imunopatologia.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BB123', 'BH125'],
			color: ''
		},
		'BM215': {
			code: 'BM215',
			name: 'Microbiologia',
			ementa: 'Morfologia das bactérias, vírus e fungos. Fisiologia dos microrganismos. Genética bacteriana. Métodos de controle dos microrganismos. Epidemiologia das doenças infecto-contagiosas. Principais grupos de microrganismos causadores de doenças no homem.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['*BB123', '*BH125'],
			color: ''
		},
		'EN212': {
			code: 'EN212',
			name: 'Enfermagem em Saúde Coletiva II',
			ementa: 'Planejamento, desenvolvimento e avaliação de método de apreensão do processo saúde-doença em instituições sociais. Estudo da estrutura e funcionamento das instituições e suas relações com os serviços de saúde. Caracterização social, econômica e sanitária da população abrangida. Vigilância Sanitária. Proposição e participação na implementação de medidas de intervenção no campo de saúde, em âmbito coletivo e individual, com ênfase na diminuição da pobreza, violência e abuso do tabaco, álcool e outras drogas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN112'],
			color: ''
		},
		'EN230': {
			code: 'EN230',
			name: 'Enfermagem em Saúde Mental I',
			ementa: 'Estudo dos elementos teórico-metodológicos envolvidos na organização da assistência de enfermagem: linguagem, comunicação, relação intersubjetiva. Relação enfermeiro-paciente. Instrumentos básicos do cuidado de enfermagem em saúde mental e psiquiátrica: entrevistas preliminares, construção de caso clínico. As diferentes concepções de loucura e sua historicidade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN112'],
			color: ''
		},
		'EN242': {
			code: 'EN242',
			name: 'Alimentação e Qualidade de Vida',
			ementa: 'Alimentação na promoção da saúde e prevenção das doenças. Influências socioculturais sobre o comportamento alimentar. Aplicação dos conhecimentos de nutrição nas intervenções sobre alimentação. Acesso à alimentação como direito humano que preenche necessidades biológicas, psicológicas e sociais, garantindo qualidade de vida a indivíduos, grupos e coletividade.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99040'
		},
		'EN490': {
			code: 'EN490',
			name: 'Metodologia de Pesquisa II',
			ementa: 'Elaborar as etapas de um projeto de pesquisa, apresentando relatório final.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN390'],
			color: ''
		},
		'MD212': {
			code: 'MD212',
			name: 'Psicologia Geral e do Desenvolvimento',
			ementa: 'Desenvolvimento mental normal do ser humano, num contexto evolutivo e dinâmico. Conceitos básicos do desenvolvimento mental em suas várias etapas desde a concepção até a morte. A prática da enfermagem e sua relação com a psicologia. Conceitos fundamentais da Psicologia geral (inteligência, memória, humor, afetividade, pensamento e orientação).',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#D240D9'
		},
		'MD311': {
			code: 'MD311',
			name: 'Genética para Enfermagem I',
			ementa: 'O material genético, constituição dos cromossomos, ação gênica e análise do DNA. Estudo do cariótipo humano normal e das aberrações cromossômicas. Genética e câncer. Padrões de herança clássicos e não clássicos. Determinação e diferenciação do sexo. Os genes nas populações. Princípios de teratogênese e mutagênese.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#404DD9'
		},
		'ME176': {
			code: 'ME176',
			name: 'Introdução à Estatística Vital',
			ementa: 'Levantamentos e apurações de dados. Introdução à medidas de epidemiologia. Coeficiente e índices mais usados em saúde pública. População e amostra. Descrição de dados amostrais: tabelas, gráficos, medidas de posição e dispersão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#40C5D9'
		},
		'BP323': {
			code: 'BP323',
			name: 'Parasitologia Médica II',
			ementa: 'Relação parasito-hospedeiro e ecologia parasitária. Estudo dos principais protozoários e helmintos de interesse médico. Classificação zoológica, biologia, patogenia, quadro clínico, diagnóstico, epidemiologia e profilaxia. Estudo dos principais artrópodes transmissores e veiculadores de doenças no homem. Acidentes por animais peçonhentos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D94D'
		},
		'EN312': {
			code: 'EN312',
			name: 'Enfermagem na Organização do Sistema de Saúde',
			ementa: 'Políticas e modelos de atenção à saúde. Diretrizes do Sistema Único de Saúde (SUS). Vigilância e educação em saúde. Reconhecimento do perfil sócio-sanitário da população do território dos serviços básicos de saúde. Estrutura, gestão e processo de trabalho. Trabalho de enfermagem. Análise e intervenção em problemas de saúde pública.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EN212'],
			color: ''
		},
		'EN321': {
			code: 'EN321',
			name: 'Semiologia Aplicada à Enfermagem I',
			ementa: 'Capacitação do aluno para a primeira etapa do processo de enfermagem com ênfase no exame físico. Realização do exame físico geral no adulto e idoso. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BF284'],
			color: ''
		},
		'EN322': {
			code: 'EN322',
			name: 'Aspectos Fundamentais do Processo de Cuidar em Enfermagem',
			ementa: 'Ensino teórico-prático dos procedimentos fundamentais ao cuidado de enfermagem aos usuários adultos e idosos atendidos em serviços de saúde. Aplicação do processo de enfermagem com vistas ao planejamento e execução dos cuidados de enfermagem. Implementação de práticas educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:5, P:4, L:4, O:0, D:0, HS:13, SL:13, C:13},
			requisitos: ['BF284', 'BM215'],
			color: ''
		},
		'EN470': {
			code: 'EN470',
			name: 'Processo de Enfermagem',
			ementa: 'As gerações do Processo de Enfermagem e suas etapas. Introdução às Teorias de Enfermagem. Elementos da Prática de Enfermagem e Classificações de Enfermagem (NANDA, NIC, NOC, CIPE, CCC). Raciocínio Clínico, Pensamento Crítico e Acurácia Diagnóstica. Elaboração e discussão de estudos de caso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D96840'
		},
		'MD231': {
			code: 'MD231',
			name: 'Patologia Geral',
			ementa: 'Introdução à patologia geral: métodos de estudos, finalidade, conceito de doença, etiologia, patogenia. Alterações metabólicas e processsos regressivos. Alterações circulatórias. Inflamações agudas e crônicas: inflamações específicas. Cicatrização. Alterações de crescimento celular: conceito de neoplasia.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BH125'],
			color: ''
		},
		'MD362': {
			code: 'MD362',
			name: 'Farmacologia Básica',
			ementa: 'Farmacologia geral (princípios que regem absorção, distribuição, metabolização e eliminação de drogas). Noções de Farmacodinâmica. Farmacologia do Sistema Nervoso Autônomo (agonistas colinérgicos e adrenérgicos e seus respectivos antagonistas: anticolinesterásticos). Farmacologia do Sistema Cardiovascular (drogas anti-hipertensivas e glicosídeos cardiotônicos). Farmacologia do processo inflamatório e drogas anti-inflamatórias, tais como glicocorticoides e anti-inflamatórios não esteroidais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['BB123', 'BF284'],
			color: ''
		},
		'ELET03': {
			code: 'ELET03',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: ''
		},
		'EN232': {
			code: 'EN232',
			name: 'Elementos das Ciências Sociais Aplicados à Enfermagem',
			ementa: 'As relações entre saúde, sociedade e enfermagem: evolução histórica e o momento atual, abordando cinco eixos temáticos: a relação entre o cuidar e o curar, a divisão do trabalho na enfermagem, relação enfermeiro(a), paciente, ideais éticos e prática profissional, relação enfermeiro(a) e outros profissionais. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D94040'
		},
		'EN412': {
			code: 'EN412',
			name: 'Enfermagem em Saúde Coletiva III',
			ementa: 'Abordagem epidemiológica e assistencial nos serviços básicos de saúde. Vigilância epidemiológica e sanitária. Programa de Imunização. Educação em saúde, planejamento, execução e avaliação de ações de enfermagem em serviços de saúde. Desenvolvimento de atividades práticas em serviços básicos de saúde. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN312'],
			color: ''
		},
		'EN421': {
			code: 'EN421',
			name: 'Semiologia Aplicada à Enfermagem II',
			ementa: 'Capacitação do aluno para a primeira etapa do processo de enfermagem. Realização do exame físico (geral e específico) do adulto e idoso.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EN321', 'MD231'],
			color: ''
		},
		'EN430': {
			code: 'EN430',
			name: 'Enfermagem em Saúde Mental II',
			ementa: 'A enfermagem psiquiátrica como prática técnica e social e sua inserção em serviços de saúde mental de referência. Os meios de aproximação do objeto de trabalho da enfermagem em saúde mental e a participação do enfermeiro no tratamento e na reabilitação psicossocial dos sujeitos em sofrimento psíquico. Políticas de saúde mental e trabalho em equipe. Desenvolvimento de atividades práticas em serviços de referência de atenção à saúde mental. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN230', 'EN322'],
			color: ''
		},
		'EN442': {
			code: 'EN442',
			name: 'Processo de Cuidado Nutricional',
			ementa: 'Estudo da nutrição, dietética e dietoterapia aplicadas ao processo de cuidado nutricional ao cliente em nível primário, secundário e terciário. Trabalho em equipe multiprofissional.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN242'],
			color: ''
		},
		'EN465': {
			code: 'EN465',
			name: 'Assistência de Enfermagem à Saúde da Mulher',
			ementa: 'Estudo dos fatores que fundamentam a Saúde da Mulher contemplando aspectos sociais e culturais, gênero e sexualidade. Assistência de Enfermagem na saúde reprodutiva, incluindo atenção pré-natal e contracepção. Atenção no climatério. Identificação e intervenções nas afecções ginecológicas benignas mais frequentes. Reabilitação do assoalho pélvico. Prevenção e detecção precoce do câncer genital e mamário. Preparo da mulher e família para o parto, nascimento e amamentação. Desenvolvimento de atividades educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['EN322'],
			color: ''
		},
		'MD214': {
			code: 'MD214',
			name: 'Epidemiologia, Enfermagem e Saúde',
			ementa: 'Definição e usos da Epidemiologia. Conceitos básicos. População e saúde: noções de demografia, crescimento populacional. Transição demográfica e epidemiológica. A medida das condições de saúde: Fontes de informações. Principais indicadores de mortalidade. Letalidade. Mortalidade infantil e principais componentes. Incidência. Prevalência. Diagnóstico descritivo em Epidemiologia. Medidas de risco. A Epidemiologia e o controle das doenças. Epidemias e endemias. Investigação epidemiológica. Vigilância epidemiológica. Validação de testes diagnósticos. Desenhos epidemiológicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#8240D9'
		},
		'MD430': {
			code: 'MD430',
			name: 'Psicologia Aplicada à Saúde',
			ementa: 'Saúde e Relações mente/corpo. Concepção psicossomática do binômio saúde/doença. O papel do enfermeiro no lidar com o doente e os mecanismos psicológicos subjacentes à doença.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#82D940'
		},
		'MD462': {
			code: 'MD462',
			name: 'Farmacologia Aplicada',
			ementa: 'Farmacologia do Sistema Nervoso Central (sedativos e hipnóticos, hipnoanalgésicos, antidepressivos, antipsicóticos e farmacodependência). Farmacologia do Aparelho Digestivo. Farmacologia Endócrina. Farmacologia Clínica (reações adversas, uso racional de medicamentos, interações entre drogas). Farmacologia de grupos especiais de pacientes (crianças, idosas e gestantes).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD362'],
			color: ''
		},
		'ELET04': {
			code: 'ELET04',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: ''
		},
		'EN433': {
			code: 'EN433',
			name: 'Antropologia Filosófica, Educação e Enfermagem',
			ementa: 'Contribuições da antropologia para o campo da saúde, suas interfaces e temas específicos. Abrangência e métodos de investigação da antropologia da saúde. Relação entre crença e verdade. Eficácia simbólica na cura. Relação entre cultura, saúde, doença, cuidado, cura e educação.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#AAD940'
		},
		'EN504': {
			code: 'EN504',
			name: 'Processo de Cuidar do Adulto e Idoso',
			ementa: 'Desenvolvimento do processo de cuidar em enfermagem à adultos e idosos em seguimento ambulatorial e internados em unidades clínicas e cirúrgicas de média complexidade e instituições de longa permanência para idosos. Assistência à família e cuidadores. Prevenção de acidentes no hospital. Aspectos éticos na assistência. Desenvolvimento de práticas educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:4, P:6, L:0, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['EN322', 'EN421', 'EN430', 'EN442', 'MD462'],
			color: ''
		},
		'EN532': {
			code: 'EN532',
			name: 'Processo de Cuidar em Enfermagem Psiquiátrica',
			ementa: 'Estudo do objeto e dos instrumentos de trabalho da enfermagem psquiátrica e em saúde mental, visando a atuação do enfermeiro no tratamento de sujeitos em sofrimento psíquico que requeiram cuidados contínuos e intensivos em serviços de saúde de nível secundário e terciário. Desenvolvimento do processo de cuidar em enfermagem psiquiátrica mediante a realização de atividades práticas em serviços de saúde mental. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:4, L:0, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['EN322', 'EN421', 'EN430'],
			color: ''
		},
		'EN555': {
			code: 'EN555',
			name: 'Assistência de Enfermagem à Criança e Adolescente I',
			ementa: 'Ensino teórico e prático da assistência de enfermagem à saúde da criança e adolescente sadios com doenças de baixa e média complexidade, seus familiares e as repercussões do processo de adoecer no crescimento e desenvolvimento. Desenvolvimento de atividades práticas educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['BP323', 'EN212', 'EN322', 'EN421', 'MD430'],
			color: ''
		},
		'MD636': {
			code: 'MD636',
			name: 'Genética para Enfermagem II',
			ementa: 'Dismorfologia. Citogenética clínica. Etiologia ambiental dos defeitos congênitos. Deficiência mental. Erros inatos do metabolismo. Erros da diferenciação sexual. Infertilidade. Aconselhamento genético. Diagnóstico pré-natal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD311'],
			color: ''
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: ''
		},
		'EN590': {
			code: 'EN590',
			name: 'Administração em Enfermagem',
			ementa: 'Ensino teórico-prático de aspectos fundamentais para a organização, direção e controle do gerenciamento de enfermagem na atenção hospitalar: modelos de planejamento; gestão de recursos materiais; gestão de custo; serviços de apoio; mudança e negociação; supervisão, liderança e trabalho em equipe; auditoria de processos assistenciais; gerenciamento de risco e segurança na saúde. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EN280', 'EN322', 'EN312'],
			color: ''
		},
		'EN604': {
			code: 'EN604',
			name: 'Processo de Cuidar em Enfermagem Perioperatória',
			ementa: 'Atuação em unidade de Centro Cirúrgico, Centro de Recuperação Pós-anestésica e Centro de Material Esterilizado. Processamento e controle de qualidade de artigos de saúde. Processo de cuidar em enfermagem ao adulto e idoso no período perioperatório de cirurgias ambulatoriais, de cirurgias de médio e grande porte. Preparo para alta. Aspectos administrativos na unidade de Centro Cirúrgico, Centro de Recuperação Pós-anestésica e Centro de Material Esterilizado. Aspectos éticos na assistência ao cliente cirúrgico e família. Desenvolvimento de práticas educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:4, L:0, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['EN322', 'EN421', 'EN504', 'MD462'],
			color: ''
		},
		'EN665': {
			code: 'EN665',
			name: 'Assistência de Enfermagem a Criança e Adolescente II',
			ementa: 'Ensino teórico e prático da assistência de enfermagem à criança e adolescente sadios com doenças de média e alta complexidade e as repercussões da doença e do tratamento na vida da criança, adolescente e família. Desenvolvimento de práticas educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:5, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['EN504', 'EN555'],
			color: ''
		},
		'EN704': {
			code: 'EN704',
			name: 'Processo de Cuidar em Enfermagem do Adulto e Idoso de Alto Risco',
			ementa: 'Cuidado de enfermagem sistematizado ao cliente adulto e idoso internado em situações de alto risco, urgência e emergência. Atendimento Pré Hospitalar - APH. Assistência à família. Prevenção de acidentes nas situações de atuação prática. Aspectos éticos no processo de cuidar do cliente e família.',
			semestre: 1,
			vector: {T:1, P:3, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['EN504'],
			color: ''
		},
		'EN780': {
			code: 'EN780',
			name: 'Exercício da Enfermagem II',
			ementa: 'Retomada e aprofundamento do conteúdo abordado na disciplina Exercício de Enfermagem I, considerando as experiências vivenciadas pelo aluno no decorrer do curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D940B7'
		},
		'ELET06': {
			code: 'ELET06',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: ''
		},
		'EN690': {
			code: 'EN690',
			name: 'Estágio Supervisionado de Administração em Enfermagem Hospitalar',
			ementa: 'Ensino teórico-prático de aspectos fundamentais para a organização, direção e controle do gerenciamento de enfermagem na atenção hospitalar: modelos de planejamento; gestão de recursos materiais; gestão de custo; serviços de apoio; mudança e negociação; supervisão, liderança e trabalho em equipe; auditoria de processos assistenciais; gerenciamento de risco e segurança na saúde. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:8, L:0, O:0, D:0, HS:11, SL:3, C:11},
			requisitos: ['EN421', 'EN465', 'EN590', 'EN665', 'EN704'],
			color: ''
		},
		'EN720': {
			code: 'EN720',
			name: 'Enfermagem em Geriatria e Gerontologia',
			ementa: 'A sociedade que envelhece. Conceitos fundamentais em geriatria e gerontologia. Legislação brasileira. Modalidades de atenção ao idoso. O gerenciamento do cuidado de enfermagem ao idoso em diferentes contextos. Principais Síndromes geriátricas. Emergências Geriátricas. Cuidados paliativos. Avaliação geriátrica abrangente. Atenção à família e cuidadores. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN421'],
			color: ''
		},
		'EN766': {
			code: 'EN766',
			name: 'Assistência de Enfermagem à Saúde da Mulher e Recém-Nascido',
			ementa: 'Assistência à mulher e seu filho nos processos de nascimento e puerpério (alojamento conjunto). Cuidado ao recém-nascido de risco e à sua família em processo de alta. Intervenção nas intercorrências mamárias, na promoção e manutenção da lactação. Assistência a mulheres portadoras de câncer ginecológico/mamário em atendimento especializado. Desenvolvimento de atividades educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:5, P:6, L:0, O:0, D:0, HS:11, SL:11, C:11},
			requisitos: ['EN465', 'EN504', 'EN604', 'EN704'],
			color: ''
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: ''
		},
		'EN790': {
			code: 'EN790',
			name: 'Tópicos de Administração em Enfermagem',
			ementa: 'Seminário sobre tópicos de administração em serviços de saúde e serviços de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN690'],
			color: ''
		},
		'EN791': {
			code: 'EN791',
			name: 'Estágio Supervisionado I',
			ementa: 'Estágio Supervisionado a ser cumprido no campo de atuação profissional do enfermeiro. Atividades educativas de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:18, D:0, HS:22, SL:2, C:22},
			requisitos: ['AA470', 'EN604', 'EN665', 'EN690', 'EN704', 'EN766'],
			color: '#40D99D'
		},
		'EN792': {
			code: 'EN792',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Desenvolvimento de trabalho monográfico de final de curso.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ['AA200'],
			color: '#4075D9'
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: '',
			color: ''
		},
		'EN891': {
			code: 'EN891',
			name: 'Estágio Supervisionado II',
			ementa: 'Estágio Supervisionado a ser cumprido no campo de atuação profissional do enfermeiro. Atividades educativas de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:19, D:0, HS:23, SL:2, C:23},
			requisitos: ['AA475', 'EN604', 'EN704', 'EN665', 'EN690', 'EN766'],
			color: '#40D975'
		},
		'EN892': {
			code: 'EN892',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento de trabalho monográfico de final de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200'],
			color: '#40D9C5'
		}
	}
};

export default catalogue;
