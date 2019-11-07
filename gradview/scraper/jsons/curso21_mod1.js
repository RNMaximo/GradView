const catalogue = {
	totalCredits: 270,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['BA133', 'BB123', 'BB125', 'BH125', 'EN112', 'EN280', 'EN390', 'ME176']
		},
		'sem-2': {
			id: '2',
			subjects: ['BF284', 'BI214', 'BM215', 'BP223', 'EN212', 'EN230', 'EN321', 'MD212', 'MD311']
		},
		'sem-3': {
			id: '3',
			subjects: ['EN232', 'EN322', 'EN421', 'EN470', 'EN490', 'MD231', 'MD362', 'ELET4']
		},
		'sem-4': {
			id: '4',
			subjects: ['EN405', 'EN430', 'EN445', 'MD214', 'MD430', 'MD462', 'ELET3']
		},
		'sem-5': {
			id: '5',
			subjects: ['EN312', 'EN505', 'EN532', 'MD636', 'ELET2']
		},
		'sem-6': {
			id: '6',
			subjects: ['BH127', 'EN605', 'ELET3']
		},
		'sem-7': {
			id: '7',
			subjects: ['EN590', 'EN665', 'EN766', 'ELET3']
		},
		'sem-8': {
			id: '8',
			subjects: ['EN433', 'EN690', 'EN780', 'ELET3']
		},
		'sem-9': {
			id: '9',
			subjects: ['EN790', 'EN791', 'EN792']
		},
		'sem-10': {
			id: '10',
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
			requisitos: ''
		},
		'BB123': {
			code: 'BB123',
			name: 'Bioquímica Básica I',
			ementa: 'Aminoácidos. Proteínas: estrutura e função. Sistemas tampão, transporte de gases e equilíbrio ácido-base do sangue. Cinética enzimática. Metabolismo de carboidratos, lipídeos e proteínas. Aspectos bioquímicos da ação hormonal. Integração metabólica.',
			semestre: 1,
			vector: {T:2, P:2, L:1, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ''
		},
		'BB125': {
			code: 'BB125',
			name: 'Fundamentos de Biologia Molecular',
			ementa: 'Estrutura do DNA e replicação. Mutações e reparo do DNA. Estrutura do RNA e transcrição. Síntese e endereçamento de proteínas. Regulação da expressão gênica. Uso de técnicas recombinantes no diagnóstico e tratamento de saúde (sequenciamento de DNA, southern/northern/western blotting, clonagem, PCR, e outros).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'BH125': {
			code: 'BH125',
			name: 'Citologia e Histologia',
			ementa: 'Noções básicas sobre citologia e histologia geral e especial, compreendendo o estudo histológico dos principais órgãos e sistemas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'EN112': {
			code: 'EN112',
			name: 'Enfermagem em Saúde Coletiva I',
			ementa: 'Integração do estudante à vida universitária, ao contexto particular de formação profissional e à prática de enfermagem na Saúde Coletiva. Processo saúde-doença-cuidado como construção histórica e social, resultante das condições sociais, econômicas, políticas e culturais das sociedades. Sistema Único de Saúde (SUS): história da saúde pública, princípios e diretrizes do SUS. Introdução ao estudo do perfil sócio sanitário de uma dada população. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'EN280': {
			code: 'EN280',
			name: 'Exercício da Enfermagem I',
			ementa: 'Evolução da prática de enfermagem no contexto histórico, político e social, tendo em vista a segurança e a integralidade do cuidado. Diretrizes curriculares nacionais e Projeto pedagógico do curso de graduação em enfermagem da Unicamp. Lei do exercício profissional. Fundamentos da ética e código de ética. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EN390': {
			code: 'EN390',
			name: 'Metodologia de Pesquisa I',
			ementa: 'Reflexão sobre ciência, pesquisa e ética. Análise de textos didáticos e científicos. Exercício de síntese e elaboração de relatórios. Bases de dados bibliográficos, descritores, normas para organização de referências e citação no texto. Diferenças e complementariedades entre estudos qualitativos e quantitativos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ME176': {
			code: 'ME176',
			name: 'Introdução à Estatística Vital',
			ementa: 'Levantamentos e apurações de dados. Introdução à medidas de epidemiologia. Coeficiente e índices mais usados em saúde pública. População e amostra. Descrição de dados amostrais: tabelas, gráficos, medidas de posição e dispersão.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'BF284': {
			code: 'BF284',
			name: 'Fisiologia e Biofísica Humana Básica',
			ementa: 'Estudo do funcionamento do organismo humano. Fisiologia e biofísica dos sistemas neurovascular e neurovegetativo; sistema nervoso central; órgãos dos sentidos; sangue e líquidos corporais; sistema cardiovascular; aparelhos respiratório, digestivo e renal; temperatura e metabolismo, glândulas endócrinas e reprodução.',
			semestre: 1,
			vector: {T:3, P:0, L:4, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['BA133', 'BB123']
		},
		'BI214': {
			code: 'BI214',
			name: 'Imunologia',
			ementa: 'Mecanismos naturais de resistência. Fisiologia da resposta imune. Resposta humoral. Resposta celular. Reações antígeno-anticorpo. Imunopatologia.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BB123', 'BH125']
		},
		'BM215': {
			code: 'BM215',
			name: 'Microbiologia',
			ementa: 'Morfologia das bactérias, vírus e fungos. Fisiologia dos microrganismos. Crescimento bacteriano &quot;in vitro&quot;. Genética bacteriana. Métodos de controle dos microrganismos. Microbiota. Mecanismos de patogenicidade. Epidemiologia das doenças infecto contagiosas. Principais grupos de microrganismos causadores de doenças no homem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['*BB123', '*BH125']
		},
		'BP223': {
			code: 'BP223',
			name: 'Parasitologia',
			ementa: 'Relação parasito-hospedeiro e ecologia parasitária. Estudo dos principais protozoários e helmintos de interesse médico. Classificação zoológica, biologia, patogenia, quadro clínico, diagnóstico, epidemiologia e profilaxia. Estudo dos principais artrópodes transmissores e veiculadores de doenças no homem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['BA133', 'BH125']
		},
		'EN212': {
			code: 'EN212',
			name: 'Enfermagem em Saúde Coletiva II',
			ementa: 'Políticas Públicas no contexto da Atenção Primária à Saúde no SUS. Promoção da Saúde. Estudo do território e caracterização social, econômica e sanitária da população adscrita à uma Unidade Básica de Saúde. Equipamentos sociais do território e intersetorialidade. Educação em Saúde para a promoção da qualidade de vida. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN112']
		},
		'EN230': {
			code: 'EN230',
			name: 'Enfermagem em Saúde Mental I',
			ementa: 'Estudo das diferentes concepções de loucura e sua historicidade. Política Nacional de Saúde Mental. Estudo dos elementos teórico-metodológicos envolvidos na organização da assistência de enfermagem psiquiátrica e de saúde mental: linguagem, comunicação, relação enfermeiro-paciente. Instrumentos básicos do cuidado de enfermagem psiquiátrica e de saúde mental: entrevista psiquiátrica. Introdução ao Processo de Enfermagem Psiquiátrica. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN112']
		},
		'EN321': {
			code: 'EN321',
			name: 'Semiologia Aplicada à Enfermagem I',
			ementa: 'Introdução ao Processo de Enfermagem, com ênfase na anamnese e no exame físico, considerando as características do indivíduo. Técnicas de entrevista. Subsídios teóricos e práticos do exame físico geral. Abordagem dos aspectos éticos relacionados à anamnese e exame físico. Registro da anamnese e do exame físico. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BA133']
		},
		'MD212': {
			code: 'MD212',
			name: 'Psicologia Geral e do Desenvolvimento',
			ementa: 'Desenvolvimento mental normal do ser humano, num contexto evolutivo e dinâmico. Conceitos básicos do desenvolvimento mental em suas várias etapas desde a concepção até a morte. A prática da enfermagem e sua relação com a psicologia. Conceitos fundamentais da Psicologia geral (inteligência, memória, humor, afetividade, pensamento e orientação).',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'MD311': {
			code: 'MD311',
			name: 'Genética para Enfermagem I',
			ementa: 'O material genético, constituição dos cromossomos, ação gênica e análise do DNA. Estudo do cariótipo humano normal e das aberrações cromossômicas. Genética e câncer. Padrões de herança clássicos e não clássicos. Determinação e diferenciação do sexo. Os genes nas populações. Princípios de teratogênese e mutagênese.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EN232': {
			code: 'EN232',
			name: 'Elementos das Ciências Sociais Aplicados à Enfermagem',
			ementa: 'As relações entre saúde, sociedade, cultura e enfermagem. Valores, dilemas e princípios éticos na prática profissional; relação enfermeiro(a) e outros profissionais. Reflexões sobre gênero e cultura de paz. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EN322': {
			code: 'EN322',
			name: 'Aspectos Fundamentais do Processo de Cuidar em Enfermagem',
			ementa: 'Ensino teórico-prático dos procedimentos fundamentais ao cuidado de enfermagem aos usuários adultos atendidos em serviços de saúde, considerando suas características individuais. Aplicação do processo de enfermagem com vistas ao planejamento e execução dos cuidados de enfermagem. Abordagem dos aspectos éticos relacionados à assistência de enfermagem. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:5, P:4, L:4, O:0, D:0, HS:13, SL:13, C:13},
			requisitos: ['BF284', 'BM215']
		},
		'EN421': {
			code: 'EN421',
			name: 'Semiologia Aplicada à Enfermagem II',
			ementa: 'Capacitação do aluno para aplicação do Processo de Enfermagem, considerando as características do indivíduo. Realização do exame físico (geral e específico) do adulto e idoso. Abordagem dos aspectos éticos relacionados à anamnese e exame físico. Registro da anamnese e do exame físico.',
			semestre: 1,
			vector: {T:1, P:2, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BF284', 'EN321']
		},
		'EN470': {
			code: 'EN470',
			name: 'Processo de Enfermagem',
			ementa: 'As gerações do Processo de Enfermagem. Etapas do Processo de Enfermagem. Introdução às Teorias de Enfermagem. Elementos da prática de Enfermagem (diagnósticos, resultados esperados e intervenções) e Linguagem padronizada de enfermagem (NANDA, NIC, NOC, CIPE, CCC). Raciocínio Clínico, Pensamento Crítico e Acurácia Diagnóstica. Registros de enfermagem considerando aspectos ético-legais e os princípios de segurança do paciente, família e comunidade. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['BF284', 'BI214', 'BM215', 'EN212']
		},
		'EN490': {
			code: 'EN490',
			name: 'Metodologia de Pesquisa II',
			ementa: 'Processo de construção de um projeto de pesquisa: definição de problema e pergunta de pesquisa, introdução (com revisão bibliográfica), objetivos, método, aspectos éticos, cronograma e elaboração de lista de referências. Plágio em pesquisa. Apresentação de anexos e apêndices.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN390']
		},
		'MD231': {
			code: 'MD231',
			name: 'Patologia Geral',
			ementa: 'Introdução à patologia geral: métodos de estudos, finalidade, conceito de doença, etiologia, patogenia. Alterações metabólicas e processsos regressivos. Alterações circulatórias. Inflamações agudas e crônicas: inflamações específicas. Cicatrização. Alterações de crescimento celular: conceito de neoplasia.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['BH125']
		},
		'MD362': {
			code: 'MD362',
			name: 'Farmacologia Básica',
			ementa: 'Farmacologia geral (princípios que regem absorção, distribuição, metabolização e eliminação de drogas). Noções de Farmacodinâmica. Farmacologia do Sistema Nervoso Autônomo (agonistas colinérgicos e adrenérgicos e seus respectivos antagonistas: anticolinesterásticos). Farmacologia do Sistema Cardiovascular (drogas anti-hipertensivas e glicosídeos cardiotônicos). Farmacologia do processo inflamatório e drogas anti-inflamatórias, tais como glicocorticoides e anti-inflamatórios não esteroidais.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['BB123', 'BF284']
		},
		'ELET4': {
			code: 'ELET4',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:0, SL:0, C:4},
			requisitos: ''
		},
		'EN405': {
			code: 'EN405',
			name: 'Processo de Cuidar do Adulto e Idoso I',
			ementa: 'Desenvolvimento do processo de cuidar em enfermagem à adultos e idosos nos diferentes níveis de atenção à saúde. Assistência à família e cuidadores. Síndromes geriátricas. Avaliação geriátrica multidimensional. Cuidados paliativos. Segurança do paciente. Ética. Promoção, proteção e reabilitação da saúde. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:5, P:5, L:2, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['EN322', 'EN421', 'EN470']
		},
		'EN430': {
			code: 'EN430',
			name: 'Enfermagem em Saúde Mental II',
			ementa: 'A enfermagem psiquiátrica como prática técnica e social e sua inserção em serviços de saúde mental de referência. Os meios de aproximação do objeto de trabalho da enfermagem em saúde mental e a participação do enfermeiro no tratamento e na reabilitação psicossocial dos sujeitos em sofrimento psíquico. Políticas de saúde mental e trabalho em equipe. Desenvolvimento de atividades práticas em serviços de referência de atenção à saúde mental. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['EN230', 'EN322']
		},
		'EN445': {
			code: 'EN445',
			name: 'Nutrição e Cuidado Nutricional',
			ementa: 'Estudo da nutrição, dietética e dietoterapia aplicadas ao processo de cuidado alimentar e nutricional (PCAN) na promoção à saúde e prevenção de doenças nos ciclos da vida. Acesso à alimentação como direito humano que preenche necessidades biológicas, psicológicas e sociais, garantindo qualidade de vida a indivíduos, grupos e coletividades. Papel do enfermeiro (a) no PCAN e sua atuação em equipe multiprofissional.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'MD214': {
			code: 'MD214',
			name: 'Epidemiologia, Enfermagem e Saúde',
			ementa: 'Definição e usos da Epidemiologia. Conceitos básicos. População e saúde: noções de demografia, crescimento populacional. Transição demográfica e epidemiológica. A medida das condições de saúde: Fontes de informações. Principais indicadores de mortalidade. Letalidade. Mortalidade infantil e principais componentes. Incidência. Prevalência. Diagnóstico descritivo em Epidemiologia. Medidas de risco. A Epidemiologia e o controle das doenças. Epidemias e endemias. Investigação epidemiológica. Vigilância epidemiológica. Validação de testes diagnósticos. Desenhos epidemiológicos.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'MD430': {
			code: 'MD430',
			name: 'Psicologia Aplicada à Saúde',
			ementa: 'Saúde e Relações mente/corpo. Concepção psicossomática do binômio saúde/doença. O papel do enfermeiro no lidar com o doente e os mecanismos psicológicos subjacentes à doença.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'MD462': {
			code: 'MD462',
			name: 'Farmacologia Aplicada',
			ementa: 'Farmacologia do Sistema Nervoso Central (sedativos e hipnóticos, hipnoanalgésicos, antidepressivos, antipsicóticos e farmacodependência). Farmacologia do Aparelho Digestivo. Farmacologia Endócrina. Farmacologia Clínica (reações adversas, uso racional de medicamentos, interações entre drogas). Farmacologia de grupos especiais de pacientes (crianças, idosas e gestantes).',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD362']
		},
		'ELET3': {
			code: 'ELET3',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: ''
		},
		'EN312': {
			code: 'EN312',
			name: 'Enfermagem na Organização do Sistema de Saúde',
			ementa: 'Políticas e modelos de atenção à saúde. Estrutura e organização do Sistema Único de Saúde. Vigilância da Saúde e Estratégia da Saúde da Família. Gestão, planejamento e processo de trabalho em Unidade Básica de Saúde. Planejamento Estratégico Situacional em Saúde para intervenção no território. Práticas de enfermagem em Saúde Coletiva. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:4, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['EN212']
		},
		'EN505': {
			code: 'EN505',
			name: 'Processo de Cuidar do Adulto e Idoso II',
			ementa: 'Desenvolvimento do processo de cuidar em enfermagem a adultos e idosos no Centro Cirúrgico,na Sala de Recuperação Pós-anestésica e em situações de alto risco: Unidade de TerapiaIntensiva e Emergência. Preparo para alta. Atuação em Centro de Material e Esterilização.Processamento e controle de qualidade de artigos de saúde. Assistência à família ecuidadores. Catástrofes. Ética na assistência. Desenvolvimento de atividadesdidático-pedagógica que subsidiam a formação do professor para profissionais de nívelmédio de enfermagem',
			semestre: 1,
			vector: {T:5, P:5, L:2, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['EN405', 'EN430', 'EN445', 'MD462']
		},
		'EN532': {
			code: 'EN532',
			name: 'Processo de Cuidar em Enfermagem Psiquiátrica',
			ementa: 'Estudo da psicopatologia e da relação enfermeiro – paciente e sua aplicação no Processo de Enfermagem, visando a atuação do enfermeiro junto ao tratamento de sujeitos em sofrimento psíquico que requeiram cuidados contínuos e intensivos em serviços especializados na rede de saúde mental. Desenvolvimento do processo de cuidar em enfermagem psiquiátrica e em emergências psiquiátricas mediante a realização de atividades práticas em serviços de saúde mental. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:4, L:0, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['EN322', 'EN421', 'EN430']
		},
		'MD636': {
			code: 'MD636',
			name: 'Genética para Enfermagem II',
			ementa: 'Dismorfologia. Citogenética clínica. Etiologia ambiental dos defeitos congênitos. Deficiência mental. Erros inatos do metabolismo. Erros da diferenciação sexual. Infertilidade. Aconselhamento genético. Diagnóstico pré-natal.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['MD311']
		},
		'ELET2': {
			code: 'ELET2',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:0, SL:0, C:2},
			requisitos: ''
		},
		'BH127': {
			code: 'BH127',
			name: 'Embriologia',
			ementa: 'Embriologia geral: introdução à embriologia, fecundação, implantação, gastrulação, neurulação, dobramentos e fechamento do corpo do embrião, anexos fetais, período fetal e malformações congênitas. Embriologia dos sistemas: digestivo, respiratório, urinário, cardiovascular, cabeça e pescoço.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'EN605': {
			code: 'EN605',
			name: 'Enfermagem na Atenção Integral à Saúde da Família',
			ementa: 'EMENTA Educação em saúde, planejamento, execução e avaliação de ações de enfermagem ao indivíduo inserido na família e na comunidade. Desenvolvimento de atividades práticas em serviços de saúde, contemplando a integralidade do cuidado nas dimensões que constituem o ser humano. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem',
			semestre: 1,
			vector: {T:8, P:12, L:0, O:0, D:0, HS:20, SL:15, C:20},
			requisitos: ['BP223', 'EN212', 'EN312', 'EN322', 'EN421', 'MD430']
		},
		'ELET3': {
			code: 'ELET3',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: ''
		},
		'EN590': {
			code: 'EN590',
			name: 'Administração em Enfermagem',
			ementa: 'Fundamentos teóricos para a prática do trabalho gerencial e assistencial em enfermagem embasada em princípios éticos e na integralidade do cuidado: teorias administrativas e modelos de gestão; processo de trabalho; gestão de conflitos; tomada de decisão e resolução de problemas; modelo de organização do atendimento ao paciente; dimensionamento e distribuição de pessoal; recrutamento e seleção de pessoal; avaliação de desempenho; educação permanente e segurança na saúde. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['EN280', 'EN322', 'EN312']
		},
		'EN665': {
			code: 'EN665',
			name: 'Assistência de Enfermagem a Criança e Adolescente II',
			ementa: 'Ensino teórico e prático da assistência de enfermagem à criança e adolescente portadores de doenças de média e alta complexidade e as repercussões da doença e do tratamento na vida da criança, adolescente e família. Ética e segurança na abordagem ao paciente pediátrico e sua família. Desenvolvimento de práticas educativas. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:4, P:4, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['EN405', 'EN605']
		},
		'EN766': {
			code: 'EN766',
			name: 'Assistência de Enfermagem à Saúde da Mulher e Recém-Nascido',
			ementa: 'Assistência à mulher e família nos processos de parto, nascimento e puerpério. Cuidado ao recém-nascido de risco e família em processo de alta e perda perinatal. Intervenção nas intercorrências mamárias, na manutenção da lactação e relactação. Assistência a mulheres com câncer ginecológico/mamário em atendimento especializado. Reconhecimento das vulnerabilidades. Desenvolvimento de práticas educativas em saúde. Cuidados paliativos. Aspectos éticos na assistência de enfermagem a Saúde da Mulher e do Recém-nascido. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:5, P:6, L:0, O:0, D:0, HS:11, SL:11, C:11},
			requisitos: ['EN505', 'EN605']
		},
		'ELET3': {
			code: 'ELET3',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: ''
		},
		'EN433': {
			code: 'EN433',
			name: 'Antropologia Filosófica, Educação e Enfermagem',
			ementa: 'Contribuições da antropologia para o campo da saúde, suas interfaces e temas específicos para a enfermagem. Relação entre crença e verdade. Eficácia simbólica na cura. Relação entre cultura, vulnerabilidade, saúde, doença, cuidado, cura, educação e relações de poder. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN232']
		},
		'EN690': {
			code: 'EN690',
			name: 'Estágio Supervisionado de Administração em Enfermagem Hospitalar',
			ementa: 'Ensino teórico-prático de aspectos fundamentais para a organização, direção e controle na gestão em enfermagem embasada em princípios éticos e na integralidade do cuidado: planejamento estratégico; gestão de recursos materiais; gestão de custo; serviços de apoio; mudança, gestão de conflitos, negociação e relações de poder; delegação, supervisão, liderança e trabalho em equipe; auditoria de processos assistenciais; gerenciamento de risco e segurança na saúde. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:3, P:8, L:0, O:0, D:0, HS:11, SL:3, C:11},
			requisitos: ['EN421', 'EN505', 'EN590', 'EN605', 'EN665']
		},
		'EN780': {
			code: 'EN780',
			name: 'Exercício da Enfermagem II',
			ementa: 'Fundamentos ético-filosóficos. Estudo das inter-relações existentes entre a Ética, a Bioética, a Moral e os Valores. Código de Ética dos Profissionais de Enfermagem. Reflexão sobre os aspectos éticos envolvidos nas questões relativas aos direitos dos pacientes, privacidade e confidencialidade, nascimento e final de vida, morte e morrer, gênero, políticas públicas, segurança do paciente, pesquisas envolvendo seres humanos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'ELET3': {
			code: 'ELET3',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:0, SL:0, C:3},
			requisitos: ''
		},
		'EN790': {
			code: 'EN790',
			name: 'Tópicos de Administração em Enfermagem',
			ementa: 'Seminário sobre tópicos de gestão em serviços de saúde e serviços de enfermagem embasada em princípios éticos e na integralidade do cuidado: processo de trabalho, supervisão, práticas de educação em saúde, gestão de recursos materiais e financeiros, segurança do paciente, ética, integralidade, vigilância em saúde e gestão da equipe. Desenvolvimento de atividades didático-pedagógicas que subsidiam a formação do enfermeiro-professor para profissionais de nível médio de enfermagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['EN690']
		},
		'EN791': {
			code: 'EN791',
			name: 'Estágio Supervisionado I',
			ementa: 'Estágio Supervisionado a ser cumprido no campo de atuação profissional do enfermeiro. Atividades educativas de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:18, D:0, HS:22, SL:2, C:22},
			requisitos: ['AA475', 'EN505', 'EN665', 'EN690', 'EN766']
		},
		'EN792': {
			code: 'EN792',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Desenvolvimento de trabalho monográfico de final de curso.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:0, D:0, HS:1, SL:1, C:1},
			requisitos: ['AA200']
		},
		'EN891': {
			code: 'EN891',
			name: 'Estágio Supervisionado II',
			ementa: 'Estágio Supervisionado a ser cumprido no campo de atuação profissional do enfermeiro. Atividades educativas de enfermagem.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:19, D:0, HS:23, SL:2, C:23},
			requisitos: ['AA475', 'EN505', 'EN665', 'EN690', 'EN766']
		},
		'EN892': {
			code: 'EN892',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Desenvolvimento de trabalho monográfico de final de curso.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['AA200']
		}
	}
};

export default catalogue;
