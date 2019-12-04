const catalogue = {
	totalCredits: 320,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['DB011', 'DM011', 'DM012', 'DM013', 'DS011']
		},
		'sem-2': {
			id: '2',
			subjects: ['DB021', 'DM021', 'DM022', 'DM024']
		},
		'sem-3': {
			id: '3',
			subjects: ['DM031', 'DM032', 'DM034', 'DM035', 'DM036']
		},
		'sem-4': {
			id: '4',
			subjects: ['DM041', 'DM042', 'DM043', 'DM045', 'DM046']
		},
		'sem-5': {
			id: '5',
			subjects: ['DC052', 'DM051', 'DM052', 'DM057']
		},
		'sem-6': {
			id: '6',
			subjects: ['DC062', 'DM067', 'DM068', 'DS061', 'DS062']
		},
		'sem-7': {
			id: '7',
			subjects: ['DC072', 'DC073', 'DM074', 'DM075', 'DM078', 'DS071']
		},
		'sem-8': {
			id: '8',
			subjects: ['DC082', 'DC083', 'DM083', 'DM084', 'DM085']
		},
		'sem-9': {
			id: '9',
			subjects: ['DC092', 'DC093', 'DE091', 'DS091']
		},
		'sem-10': {
			id: '10',
			subjects: ['DC102', 'DC103', 'DE101', 'DS101']
		}
	},

	eletivas: {
	},

	subjects: {
		'DB011': {
			code: 'DB011',
			name: 'Biociências I',
			ementa: 'Programa Integrado de Anatomia, Bioquímica, Histologia e Fisiologia para o estudo e conhecimento da estrutura e função das biomoléculas e seu metabolismo, citologia e biologia molecular, excitabilidade celular, homeostasia; conhecimento das estruturas macro e microscópica e da função dos sistemas esquelético, articular, muscular e nervoso e seus respectivos tecidos.',
			semestre: 1,
			vector: {T:8, P:0, L:8, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: '',
			color: '#BA40D9',
			obligatory: true
		},
		'DM011': {
			code: 'DM011',
			name: 'Cárie I',
			ementa: 'Conhecer a anatomia dos músculos da face, lábios, palato e língua, da mastigação, A.T.M., boca e anexos e a histologia e histofisiologia das estruturas moles da boca e anexos, da articulação temporomandibular e dos aspectos embriológicos, microscópicos e bioquímicos das estruturas dentais e tecidos de sustentação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5ED940',
			obligatory: true
		},
		'DM012': {
			code: 'DM012',
			name: 'Diagnóstico Oral I',
			ementa: 'Programa integrado de Microbiologia e Genética para o estudo da biologia molecular de células humanas e microrganismos (eucarióticos, bacterianos e vírus) e suas principais aplicações no diagnóstico e/ou controle de doenças genéticas e microbianas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'DM013': {
			code: 'DM013',
			name: 'Terapêutica Cirúrgica I',
			ementa: 'Estudo das estruturas do crânio, suas variações anatômicas e aplicações clínicas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D99C40',
			obligatory: true
		},
		'DS011': {
			code: 'DS011',
			name: 'Bioestatística e Metodologia da Pesquisa',
			ementa: 'Programa integrado de Bioestatística e Metodologia da Pesquisa para aplicação dos conhecimentos teóricos adquiridos. Conhecimento dos tipos de pesquisa. Passos para a sua realização, procedimentos éticos numa pesquisa e sobre as características de uma monografia. Pesquisa por amostragem. Pesquisa por experimentação. Princípios básicos de experimentação. Análise exploratória e descritiva de dados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#BAD940',
			obligatory: true
		},
		'DB021': {
			code: 'DB021',
			name: 'Biociências II',
			ementa: 'Programa Integrado de Anatomia, Bioquímica, Histologia, Fisiologia e Farmacologia. Conhecimento das estruturas macro e microscópica e função dos sistema nervoso autônomo, cardiovascular, respiratório, digestório, urinário, endócrino e reprodutor; conhecimento dos ritmos biológicos, metabolismo e termoregulação; conhecimento do mecanismo de ação de drogas no organismo humano, através do estudo da farmacocinética, farmacodinâmica, ação de drogas sobre o sistema nervoso central e sistema nervoso autônomo.',
			semestre: 1,
			vector: {T:8, P:0, L:8, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DB011'],
			color: '#BA40D9',
			obligatory: true
		},
		'DM021': {
			code: 'DM021',
			name: 'Cárie II',
			ementa: 'Programa integrado de Anatomia, Bioquímica, Histologia, Fisiologia, Patologia, Microbiologia e Odontologia Preventiva, para o estudo da anatomia e bioquímica das estruturas dentárias, das glândulas salivares, dos aspectos clínicos, microbiológicos, bioquímicos e histopatológicos do biofilme e cárie dentária, seus determinantes psicossociais e formas de prevenção e estudo do metabolismo, mecanismo de ação e toxidade do flúor.',
			semestre: 1,
			vector: {T:6, P:0, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DM011'],
			color: '#5ED940',
			obligatory: true
		},
		'DM022': {
			code: 'DM022',
			name: 'Diagnóstico Oral II',
			ementa: 'Estudo integrado de Imunologia e Genética para o estudo das bases moleculares de genética voltada à área de saúde, suas implicações no desenvolvimento de doenças com manifestações sistêmicas e bucais e às principais aplicações da biologia molecular no diagnóstico das doenças; bem como compreender os principais mecanismos pelos quais o organismo humano responde às agressões e enfrenta agentes infecciosos e os principais fenômenos imunológicos que afetam o organismo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'DM024': {
			code: 'DM024',
			name: 'Reabilitação Oral I',
			ementa: 'Programa integrado de Anatomia e Escultura Dental para o estudo e reprodução da anatomia dos dentes anteriores em manequim montado em articulador semi-ajustável, correlacionada funcionalmente com o Sistema Estomatognático.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9409C',
			obligatory: true
		},
		'DM031': {
			code: 'DM031',
			name: 'Cárie III',
			ementa: 'Programa integrado de Anatomia, Bioquímica, Odontologia Infantil, Odontologia Preventiva, Orientação profissional, Psicologia, Radiologia, Materiais Dentários e Semiologia para o estudo dos procedimentos e métodos clínicos e comportamentais de atuação para a prevenção da cárie dentária e preparo para o exercício das atividades clínicas necessárias ao tratamento da doença.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DB021', 'DM021'],
			color: '#8C8D8D',
			obligatory: true
		},
		'DM032': {
			code: 'DM032',
			name: 'Diagnóstico Oral III',
			ementa: 'Programa integrado de Patologia, Histologia e Radiologia para o estudo dos princípios básicos envolvidos na lesão, adaptação e morte celular e nos processos inflamatórios e de reparo e adquirir a fundação básica e biológica sobre a formação da face e estruturas bucais e suas anomalias e malformações.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DB021', 'DM012', 'DM022'],
			color: '#9C73A6',
			obligatory: true
		},
		'DM034': {
			code: 'DM034',
			name: 'Reabilitação Oral II',
			ementa: 'Programa integrado de Anatomia e Escultura Dental para o estudo da anatomia dos dentes posteriores em modelo montado em articulador semi-ajustável, correlacionando com os aspectos fisiológicos e funcionais.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM024'],
			color: '#D9409C',
			obligatory: true
		},
		'DM035': {
			code: 'DM035',
			name: 'Periodonto I',
			ementa: 'Programa integrado de Periodontia, Histologia, Bioquímica, Microbiologia, Patologia e Radiologia, para realizar o diagnóstico, o tratamento e prevenção das doenças periodontais.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#407DD9',
			obligatory: true
		},
		'DM036': {
			code: 'DM036',
			name: 'Procedimentos Comuns I',
			ementa: 'Programa integrado de Anatomia, Radiologia e Terapêutica Medicamentosa para o estudo de técnicas para a realização de radiografias intrabucais, interpretação radiográfica das estruturas maxilomandibulares, nervo trigêmeo, irrigação e drenagem da cabeça e pescoço. Estudo das emergências médico-odontológicas, cuidados preventivos e medidas de pronto atendimento em nível ambulatorial. Estudo da farmacologia e uso clínico de medicamentos.',
			semestre: 1,
			vector: {T:4, P:0, L:6, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: '',
			color: '#5E40D9',
			obligatory: true
		},
		'DM041': {
			code: 'DM041',
			name: 'Cárie IV',
			ementa: 'Programa integrado de Dentística Restauradora e Materiais Dentários, para a aplicação dos princípios e técnicas para o diagnóstico e tratamento da cárie dental, classificação das cavidades, preparos cavitários e procedimentos restauradores. Estudo dos tipos, composição, propriedades, preparo e indicação dos materiais dentários.',
			semestre: 1,
			vector: {T:4, P:0, L:6, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['DM031'],
			color: '#8C8D8D',
			obligatory: true
		},
		'DM042': {
			code: 'DM042',
			name: 'Diagnóstico Oral IV',
			ementa: 'Programa integrado de Patologia, Semiologia e Radiologia para o estudo dos princípios de patologia do aparelho circulatório, características das lesões buco-dentais e analisar seu desenvolvimento e o prognóstico, considerando o diagnóstico e o tratamento indicado.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM022', 'DM032'],
			color: '#6EA6C0',
			obligatory: true
		},
		'DM043': {
			code: 'DM043',
			name: 'Terapêutica Cirúrgica II',
			ementa: 'Programa integrado de Cirurgia e Farmacologia conhecimento dos princípios de biossegurança, antissépticos e desinfetantes, equipamentos, instrumentos e materiais necessários à realização de exodontias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM013'],
			color: '#D99C40',
			obligatory: true
		},
		'DM045': {
			code: 'DM045',
			name: 'Periodonto II',
			ementa: 'Programa integrado de Periodontia e Farmacologia para a execução do diagnóstico, classificação, etiopatogenia, tratamento e prevenção das doenças periodontais, ajuste oclusal e a relação da Periodontia com as demais especialidades.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['DM035'],
			color: '#407DD9',
			obligatory: true
		},
		'DM046': {
			code: 'DM046',
			name: 'Procedimentos Comuns II',
			ementa: 'Programa integrado de Anestesiologia, Orientação Profissional, Psicologia, Radiologia e Terapêutica Medicamentosa para manipulação do equipamento odontológico, planejamento clínico e organização do prontuário do paciente. Estudo dos aspectos psicossociais da relação profissional-paciente e dos princípios éticos relacionados à intervenção em saúde. Estudo das técnicas anestésicas e possíveis complicações devidas aos anestésicos locais. Realização e interpretação de radiografias extra bucais. Estágio clínico supervisionado de 30 horas para realização de procedimentos relacionados à Cirurgia e Periodontia.',
			semestre: 1,
			vector: {T:4, P:2, L:6, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DM013', 'DM032', 'DM036'],
			color: '#9C7095',
			obligatory: true
		},
		'DC052': {
			code: 'DC052',
			name: 'Clínica Odontológica Integrada I',
			ementa: 'Aplicação prática, através de atividades de estágio clínico, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas relacionados à Cirurgia, Periodontia e Dentística.Estágio Clínico Supervisionado de 60 horas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM041', 'DM042', 'DM043', 'DM045', 'DM046'],
			color: '#898C99',
			obligatory: true
		},
		'DM051': {
			code: 'DM051',
			name: 'Cárie V',
			ementa: 'Programa integrado de Dentística e Materiais Dentários para a execução de restaurações metálicas fundidas e coroas totais, preparos intra-radiculares e proteção dos dentes preparados, utilizando os materiais adequados.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DM041'],
			color: '#8C8D8D',
			obligatory: true
		},
		'DM052': {
			code: 'DM052',
			name: 'Diagnóstico Oral V',
			ementa: 'Programa integrado de Patologia, Microbiologia e Semiologia para o estudo dos aspectos gerais e manifestações bucais da Aids, faz infecções por vírus da família herpes humano, fúngicas e virais, neoplasias benignas, tumores odontogencios, doençs e tumores ósseos, cicstos odontogenicos e não-odontogêncios, carcinoma espinocelular, consequências odontológicas do tratamento de câncer bucal e análise do desenvolvimento e o prognóstico destas lesões.',
			semestre: 1,
			vector: {T:6, P:0, L:4, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['DM042'],
			color: '#6EA6C0',
			obligatory: true
		},
		'DM057': {
			code: 'DM057',
			name: 'Polpa e Periapice I',
			ementa: 'Programa integrado de Endodontia, Histologia, Patologia, Fisiologia, Anatomia e Radiologia para o desenvolvimento de conhecimentos e habilidades necessárias e indispensáveis para a execução de todas as etapas do tratamento de canais radiculares.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'DC062': {
			code: 'DC062',
			name: 'Clínica Odontológica Integrada II',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos relacionados à Cirurgia, Periodontia, Dentística, Semiologia, Endodontia e Prótese Parcial Removivel (Planejamento). Estágio Clínico Supervisionado de 120 horas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DC052', 'DM051', 'DM052', 'DM057'],
			color: '#71A699',
			obligatory: true
		},
		'DM067': {
			code: 'DM067',
			name: 'Polpa e Periapice II',
			ementa: 'Programa integrado de Endodontia, Farmacologia, Prótese, Dentística, Periodontia e Cirurgia, para o treinamento e a execução de todas as fases do tratamento de canais radiculares de molares permanentes.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM057'],
			color: '#40D97D',
			obligatory: true
		},
		'DM068': {
			code: 'DM068',
			name: 'Odontologia Infantil I',
			ementa: 'Programa integrado de Ortodontia, Odontopediatria, Fisiologia, Radiologia, Patologia, Psicologia, Anatomia e Farmacologia, para desenvolvimento de conhecimentos e habilidades necessários às tarefas de atendimento da criança.',
			semestre: 1,
			vector: {T:4, P:0, L:4, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DM013', 'DM034', 'DM046'],
			color: '#C56F7B',
			obligatory: true
		},
		'DS061': {
			code: 'DS061',
			name: 'Odontologia Social I',
			ementa: 'Programa integrado de Bioestatística, Psicologia, Odontologia Legal e Deontologia para o estudo dos fatores comportamentais envolvidos no atendimento odontológico; estudo de princípios deontológicos e diceológicos que regulamentam o exercício da profissão, de ética profissional, das obrigações e direitos a que estão sujeitos no exercício da profissão perante as leis civil, penal e trabalhista e normas regulamentares dos Conselhos Federal e Regionais de Odontologia. Compreensão e conhecimento de técnicas estatísticas para análise de dados.',
			semestre: 1,
			vector: {T:6, P:0, L:4, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['DC052'],
			color: '#898C99',
			obligatory: true
		},
		'DS062': {
			code: 'DS062',
			name: 'Odontologia Preventiva e Saúde Pública',
			ementa: 'Estudo do principais problemas odontológicos da população, os métodos de mensuração, a hierarquia dos problemas e a aplicação de métodos preventivos que objetivem a melhoria da saúde bucal.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DC052'],
			color: '#898C99',
			obligatory: true
		},
		'DC072': {
			code: 'DC072',
			name: 'Clínica Odontológica Integrada III',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos relacionados à Cirurgia, Periodontia, Endodontia, Dentística, Semiologia e Prótese Parcial Removível. Plantão de Urgência de 20 horas. Estágio Clínico Supervisionado de 100 horas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DC062', 'DM067'],
			color: '#59C08B',
			obligatory: true
		},
		'DC073': {
			code: 'DC073',
			name: 'Clínica Odontológica Integrada Infantil I',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos de Odontopediatria e Ortodontia. Estágio Clínico Supervisionado de 60 horas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM068'],
			color: '#C56F7B',
			obligatory: true
		},
		'DM074': {
			code: 'DM074',
			name: 'Reabilitação Oral III',
			ementa: 'Programa de Prótese Parcial Removível e Materiais Dentários para promover a reabilitação da oclusão através de próteses parciais removíveis.',
			semestre: 1,
			vector: {T:2, P:0, L:3, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['DC062', 'DM034'],
			color: '#A5739B',
			obligatory: true
		},
		'DM075': {
			code: 'DM075',
			name: 'Reabilitação Oral IV',
			ementa: 'Programa Prótese Total e Materiais Dentários para promover a reabilitação da oclusão através de próteses totais mediatas e imediatas.',
			semestre: 1,
			vector: {T:3, P:0, L:4, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['DC062', 'DM034'],
			color: '#A5739B',
			obligatory: true
		},
		'DM078': {
			code: 'DM078',
			name: 'Odontologia Infantil II',
			ementa: 'Programa integrado de Odontopediatria, Cirurgia, Endodontia Farmacologia e Psicologia, para desenvolvimento de conhecimentos e habilidades necessários às cirurgias e/ou tratamentos endodônticos, protéticos que envolvam procedimentos odontopediátricos. Estudo das urgências e emergências médicas em odontopediatria.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['DM068'],
			color: '#C56F7B',
			obligatory: true
		},
		'DS071': {
			code: 'DS071',
			name: 'Odontologia Social II',
			ementa: 'Estudo do planejamento, instalação, organização, gestão e administração de clínica de atendimento ododntológico. Seleção do equipamento odontológico. Tipos de atividades profissionais em Odontologia. Atendimento em equipe, com delegação de atividades para pessoal auxiliar em Odontologia. Noções de seleção e treinamento de pessoal auxiliar em Odontologia. Princípios de Ergonomia aplicados às diferentes especialidades odontológicas. Noções de cálculo para os honorários profissionais. Noções de marketing aplicado ao atendimento odontológico. Biossegurança aplicada ao trabalho.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['DS061'],
			color: '#898C99',
			obligatory: true
		},
		'DC082': {
			code: 'DC082',
			name: 'Clínica Odontológica Integrada IV',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e procedimentos relacionados à Cirurgia, Periodontia, Endodontia, Dentística, Prótese Total e Prótese Parcial Removível. Plantão de Urgência de 20 horas. Estágio Clínico Supervisionado de 100 horas.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DC072', 'DM074', 'DM075'],
			color: '#8C8D96',
			obligatory: true
		},
		'DC083': {
			code: 'DC083',
			name: 'Clínica Odontológica Integrada Infantil II',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos de Odontopediatria e Ortodontia. Estágio Clínico Supervisionado de 60 horas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DC073', 'DM078'],
			color: '#C56F7B',
			obligatory: true
		},
		'DM083': {
			code: 'DM083',
			name: 'Terapêutica Cirúrgica III',
			ementa: 'Programa integrado de Cirurgia, Anatomia e Patologia, para o estudo dos aspectos anatômicos do sistema nervoso periférico da cabeça e conhecimentos de propedêutica clínica e cirúrgica, com ênfase às técnicas de exodontia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM043'],
			color: '#D99C40',
			obligatory: true
		},
		'DM084': {
			code: 'DM084',
			name: 'Reabilitação Oral V',
			ementa: 'Programa Integrado de Prótese Fixa e Materiais Dentários desenvolvido para a confecção de Próteses Parciais Fixas.',
			semestre: 1,
			vector: {T:6, P:0, L:6, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DM074', 'DM075'],
			color: '#A5739B',
			obligatory: true
		},
		'DM085': {
			code: 'DM085',
			name: 'Reabilitação Oral VI',
			ementa: 'Programa integrado de Prótese Fixa, Prótese Parcial Removível, Dentística Restauradora, Fisiologia para o estudo da oclusão dental fisiológica e patológica, diagnóstico e tratamento de desordens craniomandibulares e reabilitações orais envolvendo implantes osseointegrados.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM074', 'DM075'],
			color: '#A5739B',
			obligatory: true
		},
		'DC092': {
			code: 'DC092',
			name: 'Clínica Odontológica Integrada V',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos de: Cirurgia, Periodontia, Dentística, Endodontia, Prótese Total, Parcial Removível e Prótese Fixa. Plantões de Urgência de 20hs. Estágio Clínico Supervisionado de 220 horas.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DC082'],
			color: '#8C8D96',
			obligatory: true
		},
		'DC093': {
			code: 'DC093',
			name: 'Clínica Odontológica Integrada Infantil III',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos de Odontopediatria e Ortodontia. Estágio Clínico Supervisionado de 60 horas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DC083'],
			color: '#C56F7B',
			obligatory: true
		},
		'DE091': {
			code: 'DE091',
			name: 'Estágio Clínico Multidisciplinar Supervisionado I',
			ementa: 'Estágio Clínico Multidisciplinar Supervisionado realizado nas diferentes áreas e especialidades clínicas oferecidas na faculdade, visando complementar o desenvolvimento de experiência estruturada com base no conhecimento prático e vivências de situações reais, capacitando o aluno para solucionar problemas frequentes da atuação clínica profissional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DC082', 'DC083'],
			color: '#A97E89',
			obligatory: true
		},
		'DS091': {
			code: 'DS091',
			name: 'Odontologia Social III',
			ementa: 'Ciências Sociais e sua importância para o planejamento de intervenções no campo da saúde; a influência dos determinantes sociais sobre os comportamentos e estilos de vida da população; teorias de educação e educação em saúde; o movimento da Promoção da Saúde a partir da carta de Ottawa; elaboração de materiais educativos e recursos didáticos em saúde; a escola promotora de saúde; educação e promoção de saúde nos diversos ciclos de vida e grupos sociais; avaliações em educação e promoção de saúde; seminários em educação e promoção da saúde.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DS071'],
			color: '#898C99',
			obligatory: true
		},
		'DC102': {
			code: 'DC102',
			name: 'Clínica Odontológica Integrada VI',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e procedimentos relacionados à Cirurgia, Periodontia, Endodontia, Dentística, Prótese Total, Prótese Parcial Removível e Prótese Fixa. Plantões de Urgência de 20 horas. Estágio Clínico Supervisionado de 160 horas.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DC092'],
			color: '#8C8D96',
			obligatory: true
		},
		'DC103': {
			code: 'DC103',
			name: 'Clínica Odontológica Integrada Infantil IV',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos de Odontopediatria e Ortodontia. Estágio Clínico Supervisionado de 60 horas.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DC093'],
			color: '#C56F7B',
			obligatory: true
		},
		'DE101': {
			code: 'DE101',
			name: 'Estágio Clínico Multidisciplinar Supervisionado II',
			ementa: 'Estágio Clínico Multidisciplinar Supervisionado realizado em diferentes áreas e especialidades clínicas oferecidas na faculdade, visando complementar o desenvolvimento de experiência estruturada com base no conhecimento prático e vivências de situações reais, capacitando o aluno para solucionar problemas frequentes da atuação clínica profissional.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DC082', 'DC083'],
			color: '#A97E89',
			obligatory: true
		},
		'DS101': {
			code: 'DS101',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Pesquisa a ser desenvolvida individualmente pelo aluno sob orientação, atendendo ao artigo 12 das Diretrizes Curriculares do Curso de Graduação em Odontologia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['DS011'],
			color: '#BAD940',
			obligatory: true
		}
	}
};

export default catalogue;
