const catalogue = {
	totalCredits: 314,
	maxCreditsSem: 41,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['DB011', 'DM011', 'DS011', 'DM012', 'DM013']
		},
		'sem-2': {
			id: '2',
			subjects: ['DB021', 'DM021', 'DM024', 'DM022']
		},
		'sem-3': {
			id: '3',
			subjects: ['DM035', 'DM031', 'DM034', 'DM032', 'DM036']
		},
		'sem-4': {
			id: '4',
			subjects: ['DM045', 'DM041', 'DM042', 'DM046', 'DM043']
		},
		'sem-5': {
			id: '5',
			subjects: ['DM057', 'DM051', 'DM052', 'DC051']
		},
		'sem-6': {
			id: '6',
			subjects: ['DM067', 'DC061', 'DM068', 'DS062', 'DS061']
		},
		'sem-7': {
			id: '7',
			subjects: ['DC071', 'DM075', 'DM074', 'DM078', 'DS071']
		},
		'sem-8': {
			id: '8',
			subjects: ['DC081', 'DM084', 'DM085', 'DM083']
		},
		'sem-9': {
			id: '9',
			subjects: ['DE091', 'DC091', 'DS091']
		},
		'sem-10': {
			id: '10',
			subjects: ['DC101', 'DE101', 'DS101']
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
			color: '#4674B9',
			obligatory: true
		},
		'DM011': {
			code: 'DM011',
			name: 'Cárie I',
			ementa: 'Programa Integrado de Anatomia, Histologia e Bioquímica para o estudo da anatomia dental, anatomia dos músculos da face, lábios, palato e língua, da mastigação, A. T. M., boca e anexos e a histologia e histofisiologia das estruturas moles da boca e anexos, da articulação temporomandibular e dos aspectos embriológicos, microscópicos e bioquímicos das estruturas dentais e tecidos de sustentação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#B94646',
			obligatory: true
		},
		'DM012': {
			code: 'DM012',
			name: 'Diagnóstico Oral I',
			ementa: 'Programa integrado de Microbiologia e Genética para o estudo da biologia molecular de células humanas e microrganismos (eucarióticos, bacterianos e vírus) e suas principais aplicações no diagnóstico e/ou controle de doenças genéticas e microbianas.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#A246B9',
			obligatory: true
		},
		'DM013': {
			code: 'DM013',
			name: 'Terapêutica Cirúrgica I',
			ementa: 'Estudo das estruturas do crânio, suas variações anatômicas e aplicações clínicas.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#5D46B9',
			obligatory: true
		},
		'DS011': {
			code: 'DS011',
			name: 'Bioestatística e Metodologia da Pesquisa',
			ementa: 'Programa integrado de Bioestatística e Metodologia da Pesquisa para aplicação dos conhecimentos teóricos adquiridos. Conhecimento dos tipos de pesquisa. Passos para a sua realização, procedimentos éticos numa pesquisa e sobre as características de uma monografia. Pesquisa por amostragem. Pesquisa por experimentação. Princípios básicos de experimentação. Análise exploratória e descritiva de dados.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#A2B946',
			obligatory: true
		},
		'DB021': {
			code: 'DB021',
			name: 'Biociências II',
			ementa: 'Programa Integrado de Anatomia, Bioquímica, Histologia, Fisiologia e Farmacologia. Conhecimento das estruturas macro e microscópica e função dos sistema nervoso autônomo, cardiovascular, respiratório, digestório, urinário, endócrino e reprodutor; conhecimento dos ritmos biológicos, metabolismo e termoregulação; conhecimento do mecanismo de ação de drogas no organismo humano, através do estudo da farmacocinética, farmacodinâmica, ação de drogas sobre o sistema nervoso central.',
			semestre: 1,
			vector: {T:8, P:0, L:8, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DB011'],
			color: '#4674B9',
			obligatory: true
		},
		'DM021': {
			code: 'DM021',
			name: 'Cárie II',
			ementa: 'Programa integrado de Anatomia, Bioquímica, Histologia, Fisiologia, Patologia, Microbiologia e Odontologia Preventiva, para o estudo da anatomia e bioquímica das estruturas dentárias, das glândulas salivares, dos aspectos clínicos, microbiológicos, bioquímicos e histopatológicos do biofilme e cárie dentária, seus determinantes psicossociais e formas de prevenção e estudo do metabolismo, mecanismo de ação e toxidade do flúor.',
			semestre: 1,
			vector: {T:6, P:0, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DM011'],
			color: '#B94646',
			obligatory: true
		},
		'DM022': {
			code: 'DM022',
			name: 'Diagnóstico Oral II',
			ementa: 'Estudo integrado de Imunologia e Genética para o estudo das bases moleculares de genética voltada à área de saúde, suas implicações no desenvolvimento de doenças com manifestações sistêmicas e bucais e às principais aplicações da biologia molecular no diagnóstico das doenças; bem como compreender os principais mecanismos pelos quais o organismo humano responde às agressões e enfrenta agentes infecciosos e os principais fenômenos imunológicos que afetam o organismo.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5DB946',
			obligatory: true
		},
		'DM024': {
			code: 'DM024',
			name: 'Reabilitação Oral I',
			ementa: 'Programa integrado de Anatomia e Escultura Dental para o estudo e reprodução da anatomia dos dentes anteriores em manequim montado em articulador semi-ajustável, correlacionada funcionalmente com o Sistema Estomatognático.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#46B974',
			obligatory: true
		},
		'DM031': {
			code: 'DM031',
			name: 'Cárie III',
			ementa: 'Programa integrado de Odontologia Preventiva, Bioquímica, Psicologia, Dentística, Radiologia, Odontologia Infantil e Materiais Dentários para o estudo dos procedimentos e métodos clínicos e comportamentais de atuação para a prevenção da cárie dentária e preparar-se para exercer as atividades clínicas necessárias para o tratamento da doença.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DB021', 'DM021'],
			color: '#805D80',
			obligatory: true
		},
		'DM032': {
			code: 'DM032',
			name: 'Diagnóstico Oral III',
			ementa: 'Programa integrado de Patologia, Histologia e Radiologia para o estudo dos princípios básicos envolvidos na lesão, adaptação e morte celular e nos processos inflamatórios e de reparo e adquirir a fundação básica e biológica sobre a formação da face e estruturas bucais e suas anomalias e malformações.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DB021', 'DM012', 'DM022'],
			color: '#6C7C93',
			obligatory: true
		},
		'DM034': {
			code: 'DM034',
			name: 'Reabilitação Oral II',
			ementa: 'Programa integrado de Anatomia e Escultura Dental para o estudo da anatomia dos dentes posteriores em modelo montado em articulador semi-ajustável, correlacionando com os aspectos fisiológicos e funcionais.',
			semestre: 1,
			vector: {T:1, P:0, L:3, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM024'],
			color: '#46B974',
			obligatory: true
		},
		'DM035': {
			code: 'DM035',
			name: 'Periodonto I',
			ementa: 'Programa integrado de Periodontia, Histologia, Bioquímica, Microbiologia, Patologia e Radiologia, para realizar o diagnóstico, o tratamento e prevenção das doenças periodontais.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#46B9B9',
			obligatory: true
		},
		'DM036': {
			code: 'DM036',
			name: 'Procedimentos Comuns I',
			ementa: 'Programa integrado de Radiologia, Anatomia, Terapeutica Medicamentosa e Anestesiologia para o estudo das técnicas existentes para a realização de radiografias intra-bucais, adquirir noções de interpretação das estruturas maxilo-mandibulares, assim como estudar nervo trigêmeo, filmes e processamento radiográfico e soluções processadoras. Estudo das emergências médico-odontológicas, cuidados preventivos e medidas de pronto atendimento em nível ambulatorial. Estudo da farmacologia dos anestésicos locais.',
			semestre: 1,
			vector: {T:4, P:0, L:6, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: '',
			color: '#B9468B',
			obligatory: true
		},
		'DM041': {
			code: 'DM041',
			name: 'Cárie IV',
			ementa: 'Programa integrado de Dentística Restauradora e Materiais Dentários, para a aplicação dos princípios e técnicas para o diagnóstico e tratamento da cárie dental, classificação das cavidades, preparos cavitários e procedimentos restauradores. Estudo dos tipos, composição, propriedades, preparo e indicação dos materiais dentários.',
			semestre: 1,
			vector: {T:4, P:0, L:6, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['DM031'],
			color: '#805D80',
			obligatory: true
		},
		'DM042': {
			code: 'DM042',
			name: 'Diagnóstico Oral IV',
			ementa: 'Programa integrado de Patologia, Semiologia, Radiologia e Fisiologia para o estudo dos princípios de patologia do aparelho circulatório, características das lesões buco-dentais e analisar seu desenvolvimento e o prognóstico, considerando o diagnóstico e o tratamento indicado.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM032'],
			color: '#6C7C93',
			obligatory: true
		},
		'DM043': {
			code: 'DM043',
			name: 'Terapêutica Cirúrgica II',
			ementa: 'Programa integrado de Cirurgia e Farmacologia conhecimento dos princípios de biossegurança, antissépticos e desinfetantes, equipamentos, instrumentos e materiais necessários à realização de exodontias.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM013'],
			color: '#5D46B9',
			obligatory: true
		},
		'DM045': {
			code: 'DM045',
			name: 'Periodonto II',
			ementa: 'Programa integrado de Periodontia e Farmacologia para a execução do diagnóstico, classificação, etiopatogenia, tratamento e prevenção das doenças periodontais, ajuste oclusal e a relação da Periodontia com as demais especialidades.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['DM035'],
			color: '#46B9B9',
			obligatory: true
		},
		'DM046': {
			code: 'DM046',
			name: 'Procedimentos Comuns II',
			ementa: 'Programa integrado de Terapêutica Mendicamentosa, Anestesiologia e Orientação Profissional e Psicologia para manipulação do equipamento odontológico, planejamento clínico e organização do prontuário do paciente. Estudo dos aspectos psicossociais da relação profissional-paciente e os princípios éticos relacionados à intervenção em saúde. Estudo das técnicas anestésicas e possíveis complicações devidas aos anestésicos locais. Estágio clínico supevisionado de 30 hoas para realização de procedimentos relacionados à Cirurgia e Periodontia.',
			semestre: 1,
			vector: {T:4, P:2, L:6, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DM013', 'DM032', 'DM036'],
			color: '#81589D',
			obligatory: true
		},
		'DC051': {
			code: 'DC051',
			name: 'Clínica Odontológica Integrada I',
			ementa: 'Aplicação prática, através de atividades de estágio clínico, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas relacionados à Cirurgia, Periodontia e Dentística.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM041', 'DM042', 'DM043', 'DM045', 'DM046'],
			color: '#6A70A0',
			obligatory: true
		},
		'DM051': {
			code: 'DM051',
			name: 'Cárie V',
			ementa: 'Programa integrado de Dentística e Materiais Dentários para a execução de restaurações metálicas fundidas e coroas totais, preparos intra-radiculares e proteção dos dentes preparados, utilizando os materiais adequados.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DM041'],
			color: '#805D80',
			obligatory: true
		},
		'DM052': {
			code: 'DM052',
			name: 'Diagnóstico Oral V',
			ementa: 'Programa integrado de Patologia, Microbiologia e Semiologia para o estudo dos aspectos gerais e manifetações bucais da Aids, faz infecções por vírus da família herpes humano, fúngicas e virais, neoplasias benignas, tumores odontogencios, doenças e tumores ósseos, cistos odontogênicos e não-odontogêncios, carcinoma espinocelular, consequências odontológicas do tratamento de câncer bucal e análise do desenvolvimento e o prognóstico destas lesões.',
			semestre: 1,
			vector: {T:6, P:0, L:4, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['DM042'],
			color: '#6C7C93',
			obligatory: true
		},
		'DM057': {
			code: 'DM057',
			name: 'Polpa e Periapice I',
			ementa: 'Programa integrado de Endodontia, Histologia, Patologia, Fisiologia, Anatomia e Radiologia para o desenvolvimento de conhecimentos e habilidades necessárias e indispensáveis para a execução de todas as etapas do tratamento de canais radiculares.',
			semestre: 1,
			vector: {T:2, P:0, L:6, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: '',
			color: '#B98B46',
			obligatory: true
		},
		'DC061': {
			code: 'DC061',
			name: 'Clínica Odontológica Integrada II',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos relacionados à Cirurgia, Periodontia, Dentística e Endodontia.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DC051', 'DM051', 'DM052', 'DM057'],
			color: '#84757E',
			obligatory: true
		},
		'DM067': {
			code: 'DM067',
			name: 'Polpa e Periapice II',
			ementa: 'Programa integrado de Endodontia, Farmacologia, Prótese, Dentística, Periodontia e Cirurgia, para o treinamento e a execução de todas as fases do tratamento de canais radiculares de molares permanentes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['DM057'],
			color: '#B98B46',
			obligatory: true
		},
		'DM068': {
			code: 'DM068',
			name: 'Odontologia Infantil I',
			ementa: 'Programa integrado de Ortodontia, Odontopediatria, Fisiologia, Radiologia, Patologia, Psicologia, Anatomia e Farmacologia, para desenvolvimento de conhecimentos e habilidades necessários às tarefas de atendimento da criança.',
			semestre: 1,
			vector: {T:6, P:0, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DM013', 'DM034', 'DM046'],
			color: '#617299',
			obligatory: true
		},
		'DS061': {
			code: 'DS061',
			name: 'Odontologia Social I',
			ementa: 'Programa integrado de Bioestatística, Psicologia, Odontologia Legal e Deontologia para o estudo dos fatores comportamentais envolvidos no atendimento odontológico; estudo de princípios deontológicos e diceológicos que regulamentam o exercício da profissão, de ética profissional, das obrigações e direitos a que estão sujeitos no exercício da profissão perante as leis civil, penal e trabalhista e normas regulamentares dos Conselhos Federal e Regionais de Odontologia. Compreensão e conhecimento de técnicas estatísticas para análise de dados.',
			semestre: 1,
			vector: {T:6, P:0, L:4, O:0, D:0, HS:10, SL:10, C:10},
			requisitos: ['DC051'],
			color: '#6A70A0',
			obligatory: true
		},
		'DS062': {
			code: 'DS062',
			name: 'Odontologia Preventiva e Saúde Pública',
			ementa: 'Estudo do principais problemas odontológicos da população, os métodos de mensuração, a hierarquia dos problemas e a aplicação de métodos preventivos que objetivem a melhoria da saúde bucal.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DC051'],
			color: '#6A70A0',
			obligatory: true
		},
		'DC071': {
			code: 'DC071',
			name: 'Clínica Odontológica Integrada III',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos relacionados à Cirurgia, Periodontia, Endodontia, Dentística, Odontopediatria, Ortodontia e Prótese Parcial Removível.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DC061', 'DM067', 'DM068'],
			color: '#8A7B74',
			obligatory: true
		},
		'DM074': {
			code: 'DM074',
			name: 'Reabilitação Oral III',
			ementa: 'Programa de Prótese Parcial Removível para promover a reabilitação da oclusão através de próteses parciais removíveis.',
			semestre: 1,
			vector: {T:3, P:0, L:2, O:0, D:0, HS:5, SL:5, C:5},
			requisitos: ['DC061', 'DM034'],
			color: '#659779',
			obligatory: true
		},
		'DM075': {
			code: 'DM075',
			name: 'Reabilitação Oral IV',
			ementa: 'Programa de Prótese Total para promover a reabilitação da oclusão através de próteses totais mediatas e imediatas.',
			semestre: 1,
			vector: {T:3, P:0, L:4, O:0, D:0, HS:7, SL:7, C:7},
			requisitos: ['DC061', 'DM034'],
			color: '#659779',
			obligatory: true
		},
		'DM078': {
			code: 'DM078',
			name: 'Odontologia Infantil II',
			ementa: 'Programa integrado de Odontopediatria, Cirurgia, Endodontia Farmacologia e Psicologia, para desenvolvimento de conhecimentos e habilidades necessários às cirurgias e/ou tratamentos endodônticos, protéicos que envolvam procedimentos odontopediátricos. Estudo das urgências e emergências médicas em odontopediatria.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['DM068'],
			color: '#617299',
			obligatory: true
		},
		'DS071': {
			code: 'DS071',
			name: 'Odontologia Social II',
			ementa: 'Estudo do planejamento, instalação, organização, gestão e administração de clínica de atendimento ododntológico. Seleção do equipamento odontológico. Tipos de atividades profissionais em Odontologia. Atendimento em equipe, com delegação de atividades para pessoal auxiliar em Odontologia. Noções de seleção e treinamento de pessoal auxiliar em Odontologia. Princípios de Ergonomia aplicados às diferentes especialidades odontológicas. Noções de cálculo para os honorários profissionais. Noções de marketing aplicado ao atendimento odontológico. Biossegurança aplicada ao trabalho.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ['DS061'],
			color: '#6A70A0',
			obligatory: true
		},
		'DC081': {
			code: 'DC081',
			name: 'Clínica Odontológica Integrada IV',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e procedimentos relacionados à Cirurgia, Periodontia, Endodontia, Dentística, Odontopediatria, Ortodontia, Prótese Total e Prótese Parcial Removível.',
			semestre: 1,
			vector: {T:0, P:12, L:0, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DC071', 'DM074', 'DM075', 'DM078'],
			color: '#6D8780',
			obligatory: true
		},
		'DM083': {
			code: 'DM083',
			name: 'Terapêutica Cirúrgica III',
			ementa: 'Programa integrado de Cirurgia, Anatomia, Patologia e Radiologia, para o estudo dos aspectos anatômicos do sistema nervoso periférico da cabeça, técnicas radiográficas de localização e conhecimentos de propedêutica clínica e cirúrgica, com ênfase às técnicas de exodontia.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM043'],
			color: '#5D46B9',
			obligatory: true
		},
		'DM084': {
			code: 'DM084',
			name: 'Reabilitação Oral V',
			ementa: 'Programa desenvolvido para a confecção de Próteses Parciais Fixas.',
			semestre: 1,
			vector: {T:8, P:0, L:4, O:0, D:0, HS:12, SL:12, C:12},
			requisitos: ['DM074', 'DM075'],
			color: '#659779',
			obligatory: true
		},
		'DM085': {
			code: 'DM085',
			name: 'Reabilitação Oral VI',
			ementa: 'Programa integrado de Prótese Fixa, Prótese Parcial Removível, Dentística Restauradora, Fisiologia para o estudo da oclusão dental fisiológica e patológica, diagnóstico e tratamento de desordens craniomandibulares e reabilitações orais envolvendo implantes osseointegrados.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DM074', 'DM075'],
			color: '#659779',
			obligatory: true
		},
		'DC091': {
			code: 'DC091',
			name: 'Clínica Odontológica Integrada V',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e realização de procedimentos de: Cirurgia, Periodontia, Dentística, Endodontia, Odontopediatria, Ortodontia, Prótese Total, Parcial Removível e Parcial Fixa. Plantões de Urgência de 20hs.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DC081', 'DM083', 'DM084', 'DM085'],
			color: '#657F8B',
			obligatory: true
		},
		'DE091': {
			code: 'DE091',
			name: 'Estágio Clínico Multidisciplinar Supervisionado I',
			ementa: 'Vivência de situações reais nos estágios multidisciplinares realizados no CEPAE, CETASE, OROCENTRO, CDDISP, Odontopediatria, Ortodontia, Plantão, Cirurgia, Extra-muro, para observação de como são solucionados os problemas frequentes ocorridos na atuação clínica profissional.',
			semestre: 1,
			vector: {T:0, P:8, L:0, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['DC081'],
			color: '#6D8780',
			obligatory: true
		},
		'DS091': {
			code: 'DS091',
			name: 'Odontologia Social III',
			ementa: 'Ciências Sociais e sua importância para o planejamento de intervenções no campo da saúde; a influência dos determinantes sociais sobre os comportamentos e estilos de vida da população; teorias de educação e educação em saúde; o movimento da Promoção da Saúde a partir da carta de Ottawa; elaboração de materiais educativos e recursos didáticos em saúde; a escola promotora de saúde; educação e promoção de saúde nos diversos ciclos de vida e grupos sociais; avaliações em educação e promoção de saúde; seminários em educação e promoção da saúde. Estágio clínico extra-mural de 08 horas.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['DS071'],
			color: '#6A70A0',
			obligatory: true
		},
		'DC101': {
			code: 'DC101',
			name: 'Clínica Odontológica Integrada VI',
			ementa: 'Aplicação prática, através de atividades clínicas, dos conhecimentos adquiridos nas disciplinas pré-requisitos, objetivando a prevenção e/ou tratamento de anormalidades odontológicas e procedimentos relacionados à Cirurgia, Periodontia, Endodontia, Dentística, Odontopediatria, Ortodontia e Prótese Total, Parcial Fixa e Parcial Removível. Plantões de Urgência de 20 horas.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DC091'],
			color: '#657F8B',
			obligatory: true
		},
		'DE101': {
			code: 'DE101',
			name: 'Estágio Clínico Multidisciplinar Supervisionado II',
			ementa: 'Continuar a vivência de situações reais nos estágios multidisciplinares realizados no CEPAE, CETASE, OROCENTRO, CDDISP, Odontopediatria, Ortodontia, Plantão, Cirurgia, Extra-muro, para observação de como são solucionados os problemas frequentes ocorridos na atuação clínica profissional.',
			semestre: 1,
			vector: {T:0, P:16, L:0, O:0, D:0, HS:16, SL:16, C:16},
			requisitos: ['DC091'],
			color: '#657F8B',
			obligatory: true
		},
		'DS101': {
			code: 'DS101',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Pesquisa a ser desenvolvida individualmente pelo aluno sob orientação, atendendo ao artigo 12 das Diretrizes Curriculares do Curso de Graduação em Odontologia.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['DS011'],
			color: '#A2B946',
			obligatory: true
		}
	}
};

export default catalogue;
