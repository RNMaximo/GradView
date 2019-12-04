const catalogue = {
	totalCredits: 227,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CP102', 'CP103', 'NC103', 'SL101', 'SL104', 'SL105']
		},
		'sem-2': {
			id: '2',
			subjects: ['CP200', 'CP202', 'CP203', 'SL200', 'SL205', 'ELET02']
		},
		'sem-3': {
			id: '3',
			subjects: ['CP305', 'CP306', 'CP307', 'CP700', 'NC301', 'SL204', 'SL303', 'SL400']
		},
		'sem-4': {
			id: '4',
			subjects: ['CP409', 'CP410', 'CP411', 'CP412', 'CP600', 'CP602', 'SL401']
		},
		'sem-5': {
			id: '5',
			subjects: ['CP502', 'CP505', 'CP506', 'CP507', 'CP508', 'CP702', 'NC400', 'ELET05']
		},
		'sem-6': {
			id: '6',
			subjects: ['CP404', 'CP605', 'CP606', 'CP607', 'CP608', 'NC100', 'SL600']
		},
		'sem-7': {
			id: '7',
			subjects: ['CP304', 'CP701', 'CP705', 'CP706', 'ELET07']
		},
		'sem-8': {
			id: '8',
			subjects: ['CP803', 'CP804', 'CP805', 'CP806', 'ELET08']
		}
	},

	eletivas: {
		'elet-1': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-2': {
			credits: 8,
			hasRestrictions: false,
			subjects: [],
		},
		'elet-3': {
			credits: 10,
			hasRestrictions: false,
			subjects: [],
		},
	},

	subjects: {
		'CP102': {
			code: 'CP102',
			name: 'História da Educação Física e do Esporte',
			ementa: 'Análise reflexiva sobre o conhecimento do processo histórico constitutivo das Ciências do Esporte, compreendendo-se os contextos sócioculturais, econômicos e políticos geradores de demandas sócioindividuais e interpretativas das produções teórico-metodológicas desta especialidade como ciência.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9BA40',
			obligatory: true
		},
		'CP103': {
			code: 'CP103',
			name: 'Metodologia de Treinamento das Ginásticas',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem das ginásticas. Conhecimento e entendimento acerca das possibilidades de intervenção do profissional no universo da ginástica (no ensino não formal), abordando também seu diálogo com os debates contemporâneos (corpo, saúde, beleza, entre outros).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D940D9',
			obligatory: true
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#4040D9',
			obligatory: true
		},
		'SL101': {
			code: 'SL101',
			name: 'Morfofisiologia Humana I',
			ementa: 'Estudo integrado de anatomia, histologia e fisiologia humana, abordando do ponto de vista estrutural e funcional o sistema nervoso e o músculo esquelético. Estudo dos princípios gerais de homeostasia; processos de transporte através de membranas celulares e bioeletrogênese.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#40BAD9',
			obligatory: true
		},
		'SL104': {
			code: 'SL104',
			name: 'Saúde e Sociedade',
			ementa: 'Relação saúde e sociedade nos diferentes momentos históricos. Práticas de saúde como construção social. Racionalidades terapêuticas. Corporeidade. Relações entre o processo saúde-doença e as determinações socioculturais. Identidade e prática dos profissionais de saúde. Aspectos de promoção e prevenção em saúde. Demanda, necessidade de saúde e intervenção social.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9D9',
			obligatory: true
		},
		'SL105': {
			code: 'SL105',
			name: 'Biologia Celular e Molecular',
			ementa: 'Organização molecular da célula. Estrutura e função do núcleo. Estudo dos processos de replicação, transcrição e tradução. Aspectos estruturais e funcionais das biomembranas. Interações celulares, citoesqueleto e transporte. Conhecimentos básicos da estrutura e função celular e das principais organelas citoplasmáticas. Ciclo e morte celular.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BA40D9',
			obligatory: true
		},
		'CP200': {
			code: 'CP200',
			name: 'Fundamentos Metodológicos do Treinamento Desportivo',
			ementa: 'Conceituações e estrutura do treinamento desportivo. Princípios do Treinamento. Meios e Métodos do Treinamento. Caracterização das capacidades físicas. Etapas de preparação desportiva de muitos anos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D94040',
			obligatory: true
		},
		'CP202': {
			code: 'CP202',
			name: 'Metodologia de Treinamento dos Esportes Individuais',
			ementa: 'Estudos teóricos-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem, sobretudo, dos esportes em que há predomínio dos movimentos de corridas, saltos, lançamentos e arremessos com implementos específicos e alternativos. Estudo das combinações de movimentos (andar, marchar, correr, saltar, lançar e arremessar), sempre contextualizando-os no Atletismo, triatlon, provas pedestres, entre outras derivações. Introdução a organização de competições pedagógicas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#405ED9',
			obligatory: true
		},
		'CP203': {
			code: 'CP203',
			name: 'Pedagogia do Jogo',
			ementa: 'A teoria do jogo e suas múltiplas abordagens. O ato de jogar e sua relação com o desenvolvimento e aprendizagem. Estudo do jogo na pedagogia. O jogo no processo de construção da cultura lúdica infantil. O jogo e nas novas tendências pedagogia do esporte.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D940',
			obligatory: true
		},
		'SL200': {
			code: 'SL200',
			name: 'Morfofisiologia Humana II',
			ementa: 'Estudo integrado de anatomia, histologia e fisiologia humana, abordando do ponto de vista estrutural e funcional os sistemas cardiovascular, respiratório, digestório, urinário, endócrino e reprodutor.',
			semestre: 1,
			vector: {T:6, P:0, L:2, O:0, D:0, HS:8, SL:8, C:8},
			requisitos: ['SL101', 'SL105'],
			color: '#7D7DD9',
			obligatory: true
		},
		'SL205': {
			code: 'SL205',
			name: 'Saúde Coletiva',
			ementa: 'Campo e história da Saúde Coletiva. Políticas e modelos assistenciais. SUS e ações de saúde. Saúde da Família. Planejamento em Saúde. Interdisciplinaridade no trabalho em saúde. Produção de serviços de saúde, formação de pessoal de saúde e estrutura social. Possibilidades de intervenção.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL104'],
			color: '#40D9D9',
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
		'CP305': {
			code: 'CP305',
			name: 'Pedagogia do Esporte',
			ementa: 'As relações entre a pedagogia e o esporte. O conceito de pedagogia do esporte. As bases de fundamentação das novas tendências em pedagogia do esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9409C',
			obligatory: true
		},
		'CP306': {
			code: 'CP306',
			name: 'Psicologia da Aprendizagem Aplicada ao Esporte',
			ementa: 'Principais teorias da aprendizagem. Teoria cognitiva, psicogenética e sociocultural. O processo de ensino aprendizagem. Mecanismos psicológicos da aprendizagem.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#9C40D9',
			obligatory: true
		},
		'CP307': {
			code: 'CP307',
			name: 'Bioquímica Metabólica',
			ementa: 'Equilíbrio ácido-base; Estrutura e Metabolismo de Carboidratos (Glicólise, fermentação, glicogenólise, glicogênese, gliconeogênese); Estrutura e Metabolismo de Lipídeos (Oxidação e síntese de ácidos graxos e triacilgliceróis); Estrutura e Metabolismo de Aminoácidos e Proteínas (Síntese de aminoácidos e Ciclo da uréia); Ciclo de Krebs; Cadeia respiratória; Maquinaria Antioxidante. Integração metabólica.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['SL105'],
			color: '#BA40D9',
			obligatory: true
		},
		'CP700': {
			code: 'CP700',
			name: 'Socorros de Urgência',
			ementa: 'Reconhecimento da situação de emergência, prioridade e condutas a serem tomadas. Prevenção de acidentes. Primeiros Socorros em lesões mais frequentes e naquelas relacionadas às práticas de atividades físicas. Atuação do Profissional de Educação Física como educador na prática de primeiro socorrista.',
			semestre: 1,
			vector: {T:1, P:0, L:2, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: '',
			color: '#40D99C',
			obligatory: true
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: '',
			color: '#407DD9',
			obligatory: true
		},
		'SL204': {
			code: 'SL204',
			name: 'Cinesiologia I',
			ementa: 'Estudo dos diversos movimentos do corpo humano com ênfase na estrutura e funções das articulações e grupos musculares.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D99C40',
			obligatory: true
		},
		'SL303': {
			code: 'SL303',
			name: 'Estatística e Bioestatística',
			ementa: 'Estatística descritiva, probabilidade, variáveis aleatórias, distribuição de frequências, distribuições discretas e contínuas, medidas de tendência central, medidas de dispersão, análise de variância, inferência estatística, distribuição gráfica, gráficos de controle, intervalos de confiança, amostragens e testes de hipóteses, regressão e correlação.',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: '',
			color: '#D940BA',
			obligatory: true
		},
		'SL400': {
			code: 'SL400',
			name: 'Crescimento e Desenvolvimento',
			ementa: 'Estudo dos aspectos que envolvem o crescimento e o desenvolvimento nas fases da vida (infância, adolescência e vida adulta), e da influência e importância da atividade física e esporte em cada uma destas fases.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: '',
			color: '#D9407D',
			obligatory: true
		},
		'CP409': {
			code: 'CP409',
			name: 'Metodologia de Treinamento dos Esportes de Combate',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes de combate. A origem comum das artes marciais. As lutas orientais. As lutas ocidentais. A capoeira. O multiculturalismo e os esportes de combate. A esportivização e espetacularização das lutas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP305'],
			color: '#D9409C',
			obligatory: true
		},
		'CP410': {
			code: 'CP410',
			name: 'Fisiologia do Exercício',
			ementa: 'Estudo da fisiologia do exercício. Ajustes e adaptações fisiológicas dos sistemas orgânicos em resposta ao exercício e ao treinamento físico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP307', 'SL200'],
			color: '#9C5FD9',
			obligatory: true
		},
		'CP411': {
			code: 'CP411',
			name: 'Fundamentos da Biomecânica',
			ementa: 'Estudo do movimento do corpo humano nas atividades físicas e esportivas a partir dos conceitos mecânicos básicos. Análises dos movimentos a partir de variáveis obtidas por cinemetria, dinamometria, antropometria e eletromiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5E40D9',
			obligatory: true
		},
		'CP412': {
			code: 'CP412',
			name: 'Metodologia de Treinamento dos Esportes Individuais Combinados',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes combinados, nas modalidades individuais em ambiente de incerteza com o meio e nas modalidades individuais em meio estável, com presença de adversários e mediante utilização de um objeto de intermediação. Estudo dos aspectos relacionados à estrutura e lógica interna destas modalidades individuais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP305'],
			color: '#D9409C',
			obligatory: true
		},
		'CP600': {
			code: 'CP600',
			name: 'Políticas Públicas em Esporte',
			ementa: 'Análise das políticas públicas em Esporte, nos seus mais diversos níveis (municipal, estadual e federal), ao longo do tempo, e seus impactos nas concepções e nos processos de democratização do esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D95E',
			obligatory: true
		},
		'CP602': {
			code: 'CP602',
			name: 'Avaliação em Ciências do Esporte',
			ementa: 'Estudo dos testes, medidas, avaliações e análise de dados em Ciências do Esporte, em suas diferentes manifestações. Métodos de avaliação diversificados, desde utilizados em diagnóstico até envolvidos com a prescrição de intensidade de exercício. Avaliações das capacidades físicas em diversas faixas etárias e condições esportivas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#7DD940',
			obligatory: true
		},
		'SL401': {
			code: 'SL401',
			name: 'Educação e Comunicação em Saúde',
			ementa: 'Fundamentos teóricos e históricos da educação em saúde no Brasil; diferentes abordagens pedagógicas; limites e possibilidades; metodologias alternativas didático-pedagógicas (oficinas). Teorias da comunicação, linguagem. Elementos básicos do processo de comunicação. Diferentes tipos de comunicação (verbal e não-verbal). Subjetividade. A comunicação como ferramenta para estabelecer relações de cuidado. O trabalho em equipes multidisciplinares.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL205'],
			color: '#40D9D9',
			obligatory: true
		},
		'CP502': {
			code: 'CP502',
			name: 'Treinamento Desportivo e Rendimento',
			ementa: 'Estudo dos desportos de acordo com a característica das ações motoras, dos meios e métodos de treinamento, das capacidades motoras e sua relação com o princípio da especificidade. Modelos de estruturação e periodização do treinamento desportivo. Planejamento, diagnóstico, programação e execução de treinamento em Ciência do Esporte. Preparação do desempenho.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D9BA',
			obligatory: true
		},
		'CP505': {
			code: 'CP505',
			name: 'Metodologia de Treinamento dos Esportes Coletivos I',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes coletivos no proceso de iniciação, tendo por referências as competências essenciais dos jogos coletivos, suas características gerais e o desenvolvimento das habilidades abertas em contexto de jogo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP305'],
			color: '#D9409C',
			obligatory: true
		},
		'CP506': {
			code: 'CP506',
			name: 'Biologia Molecular do Exercício',
			ementa: 'Conceitos básicos e atuais em biologia molecular do exercício. Adaptações moleculares ao exercício agudo e ao treinamento.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CP307', 'SL105'],
			color: '#BA40D9',
			obligatory: true
		},
		'CP507': {
			code: 'CP507',
			name: 'Atividade Física e Esporte para Grupos Especiais',
			ementa: 'Estudo das diferentes alterações no corpo humano relacionadas às populações especiais (gestantes, obesos, cardiopatas, hipertensos, diabéticos, etc.) para promoção, manutenção e recuperação da saúde através do exercício físico e do esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP410'],
			color: '#9C5FD9',
			obligatory: true
		},
		'CP508': {
			code: 'CP508',
			name: 'Epidemiologia Básica',
			ementa: 'Conceitos, métodos e aplicações na Epidemiologia. Elementos da Epidemiologia descritiva e os métodos de estudos de agravos à saúde na população. Indicadores de saúde. Análise e interpretação das medidas de risco e associação. Método epidemiológico. Desenhos de estudo epidemiológicos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SL303'],
			color: '#D940BA',
			obligatory: true
		},
		'CP702': {
			code: 'CP702',
			name: 'Processo de Envelhecimento e Ciência do Esporte',
			ementa: 'Estudo do processo de envelhecimento. Estudo do exercício físico e das manifestações esportivas relacionados ao processo de envelhecimento.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP410'],
			color: '#9C5FD9',
			obligatory: true
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. O processo administrativo. Perfil e funções do administrador. Tomada de decisão, planejamento, organização, direção, coordenação e controle. Inovação e empreendedorismo. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#409CD9',
			obligatory: true
		},
		'ELET05': {
			code: 'ELET05',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CP404': {
			code: 'CP404',
			name: 'Biomecânica Aplicada em Ciências do Esporte',
			ementa: 'Estudo e aplicação da metodologia e instrumentação para biomecânica voltadas à análise do movimento humano no contexto esportivo, nas atividades físicas e das atividades da vida diária.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP411'],
			color: '#5E40D9',
			obligatory: true
		},
		'CP605': {
			code: 'CP605',
			name: 'Introdução aos Estudos Adaptados',
			ementa: 'Estudo dos conceitos de Esporte Adaptado. Fundamentos e características das deficiências sensoriais, físicas e cognitivas. Considerações históricas e sociais dos esportes adaptados e o impacto na organização do esporte nacional.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#40D97D',
			obligatory: true
		},
		'CP606': {
			code: 'CP606',
			name: 'Fundamentos do Treinamento Resistido',
			ementa: 'Estudo teórico-prático dos fundamentos básicos do treinamento resistido. Estudo das adaptações fisiológicas e metabólicas que ocorrem no corpo humano em resposta ao exercício físico resistido crônico e agudo. Elaboração de programas de exercício físico resistido.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CP410'],
			color: '#9C5FD9',
			obligatory: true
		},
		'CP607': {
			code: 'CP607',
			name: 'Avaliações Fisiológicas Aplicadas ao Esporte',
			ementa: 'Variáveis fisiológicas e determinação da intensidade de esforço por meio de avaliações aplicadas ao esporte. Estrutura das avaliações embasadas em respostas fisiológicas e adequações ao esporte em suas diversas vertentes, tais como etapas de treinamento a longo prazo, fases da periodização e objetivos diferenciados. Compreensão correta dos resultados fornecidos por avaliações fisiológicas em ciências do esporte.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9D940',
			obligatory: true
		},
		'CP608': {
			code: 'CP608',
			name: 'Metodologia de Treinamento dos Esportes Coletivos II',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem, aperfeiçoamento e treinamento dos esportes coletivos no processo de especialização tendo por referências as competências essenciais dos jogos coletivos e suas manifestações específicas em contexto de jogo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP505'],
			color: '#D9409C',
			obligatory: true
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#5ED940',
			obligatory: true
		},
		'SL600': {
			code: 'SL600',
			name: 'Introdução à Prática de Ciências',
			ementa: 'Introdução ao pensamento crítico sobre as ciências e ao pensamento científico. Desenvolvimento da mentalidade investigativa e planejamento da pesquisa. Apresentar normas para elaboração do trabalho de conclusão de curso. Revisar e discutir o projeto de pesquisa realizado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA450'],
			color: '#7D40D9',
			obligatory: true
		},
		'CP304': {
			code: 'CP304',
			name: 'Psicologia no Esporte',
			ementa: 'Fundamentos teóricos da Psicologia no esporte. Estudos dos conceitos básicos e fenômenos da psicologia nas atividades físicas. A relação mente/corpo e fatores de bem-estar e saúde mental. Formação da personalidade. Normal e patológico. Estudo da relação entre as dimensões psicológicas (motivação, ansiedade, tendências, hábitos, vontade, estresse, dependências, agressividade, reações afetivas e auto-imagem) e a prática de atividades específicas. Compulsão. Perdas.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D9405E',
			obligatory: true
		},
		'CP701': {
			code: 'CP701',
			name: 'Esporte, Lazer e Sociedade',
			ementa: 'Análise acerca dos papéis do esporte e do lazer no desenvolvimento da sociedade ao longo do tempo e na contemporaneidade, especialmente em alguns marcos históricos, estabelecendo relações com os aspectos culturais e educacionais, com vistas a uma transformação da realidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#BAD940',
			obligatory: true
		},
		'CP705': {
			code: 'CP705',
			name: 'Estágio em Ciências do Esporte I',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:0, C:6},
			requisitos: ['AA200', 'AA450'],
			color: '#D97D40',
			obligatory: true
		},
		'CP706': {
			code: 'CP706',
			name: 'Esporte Adaptado',
			ementa: 'Estudo das modalidades esportivas adaptadas (histórico e evolução). Avaliação funcional do esporte adaptado. Regulamento e pontuação nas várias modalidades. A organização do Esporte Paraolímpico. Modalidade de Esporte Paraolímpico.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP605'],
			color: '#40D97D',
			obligatory: true
		},
		'ELET07': {
			code: 'ELET07',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:12},
			requisitos: '',
			color: '#000000',
			obligatory: true
		},
		'CP803': {
			code: 'CP803',
			name: 'Estágio em Ciência do Esporte II',
			ementa: 'Atividades de estágio que propiciem ao profissinal em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA450'],
			color: '#9CD940',
			obligatory: true
		},
		'CP804': {
			code: 'CP804',
			name: 'Trabalho de Conclusão de Curso',
			ementa: 'Revisar as normas e discutir o desenvolvimento do trabalho de conclusão de curso. Habilitar o aluno tanto para pensar criticamente sobre as diferentes etapas do projeto de pesquisa (materiais e métodos, coleta de dados, análise de resultados, discussão e considerações finais) como também, para elaborar poster e apresentações orais.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:3, D:0, HS:4, SL:1, C:4},
			requisitos: ['AA460', 'SL600'],
			color: '#7D40D9',
			obligatory: true
		},
		'CP805': {
			code: 'CP805',
			name: 'Marketing Esportivo',
			ementa: 'Compreensão dos fundamentos do Marketing e sua aplicabilidade no contexto esportivo, analisando diversas interfaces do produto esporte (e o que o esporte gera como produto) e o mercado, preferencialmente por meio de \"cases\"',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: '',
			color: '#D95E40',
			obligatory: true
		},
		'CP806': {
			code: 'CP806',
			name: 'Metodologia de Treinamento dos Esportes Aquáticos',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes aquáticos no processo de iniciação, com ênfase na natação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP305'],
			color: '#D9409C',
			obligatory: true
		},
		'ELET08': {
			code: 'ELET08',
			name: 'Eletiva',
			ementa: 'Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.',
			semestre: 1,
			vector: {T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: '',
			color: '#000000',
			obligatory: true
		}
	}
};

export default catalogue;
