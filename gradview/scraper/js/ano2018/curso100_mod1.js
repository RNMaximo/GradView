const catalogue = {
	totalCredits: 235,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['CP102', 'CP103', 'CP202', 'CP203', 'NC103', 'SL104', 'SL105', 'SL106']
		},
		'sem-2': {
			id: '2',
			subjects: ['CP200', 'CP205', 'CP305', 'CP307', 'CP700', 'NC104', 'SL108', 'SL206', 'SL209', 'ELET4']
		},
		'sem-3': {
			id: '3',
			subjects: ['CP306', 'CP409', 'NC301', 'SL204', 'SL208', 'SL303', 'SL400']
		},
		'sem-4': {
			id: '4',
			subjects: ['CP410', 'CP411', 'CP412', 'CP505', 'CP600', 'CP602', 'SL403']
		},
		'sem-5': {
			id: '5',
			subjects: ['CP506', 'CP507', 'CP607', 'CP702', 'NC400', 'ELET6']
		},
		'sem-6': {
			id: '6',
			subjects: ['CP026', 'CP404', 'CP502', 'CP606', 'CP608', 'CP609', 'NC100', 'SL600']
		},
		'sem-7': {
			id: '7',
			subjects: ['CP701', 'CP705', 'CP706', 'CP707', 'CP708', 'ELET10']
		},
		'sem-8': {
			id: '8',
			subjects: ['CP801', 'CP803', 'CP806', 'CP807', 'CP808', 'ELET6']
		}
	},

	subjects: {
		'CP102': {
			code: 'CP102',
			name: 'História da Educação Física e do Esporte',
			ementa: 'Análise reflexiva sobre o conhecimento do processo histórico constitutivo das Ciências do Esporte, compreendendo-se os contextos sócioculturais, econômicos e políticos geradores de demandas sócioindividuais e interpretativas das produções teórico-metodológicas desta especialidade como ciência.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ''
		},
		'CP103': {
			code: 'CP103',
			name: 'Metodologia de Treinamento das Ginásticas',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem das ginásticas. Conhecimento e entendimento acerca das possibilidades de intervenção do profissional no universo da ginástica (no ensino não formal), abordando também seu diálogo com os debates contemporâneos (corpo, saúde, beleza, entre outros).',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP202': {
			code: 'CP202',
			name: 'Metodologia de Treinamento dos Esportes Individuais',
			ementa: 'Estudos teóricos-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem, sobretudo, dos esportes em que há predomínio dos movimentos de corridas, saltos, lançamentos e arremessos com implementos específicos e alternativos. Estudo das combinações de movimentos (andar, marchar, correr, saltar, lançar e arremessar), sempre contextualizando-os no Atletismo, triatlon, provas pedestres, entre outras derivações. Introdução a organização de competições pedagógicas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP203': {
			code: 'CP203',
			name: 'Pedagogia do Jogo',
			ementa: 'A teoria do jogo e suas múltiplas abordagens. O ato de jogar e sua relação com o desenvolvimento e aprendizagem. Estudo do jogo na pedagogia. O jogo no processo de construção da cultura lúdica infantil. O jogo e nas novas tendências pedagogia do esporte.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC103': {
			code: 'NC103',
			name: 'Natureza e Tecnologia na Sociedade Contemporânea',
			ementa: 'A sociedade contemporânea, seus fundamentos históricos, sociais e culturais e suas problemáticas latentes. Fundamentos da modernidade e modernidade líquida. Relações entre ciência, natureza e sociedade. Tecnologia, comunicação e conhecimento. Questões ambientais, políticas, econômicas e culturais da contemporaneidade.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'SL104': {
			code: 'SL104',
			name: 'Saúde e Sociedade',
			ementa: 'Relação saúde e sociedade nos diferentes momentos históricos. Práticas de saúde como construção social. Racionalidades terapêuticas. Corporeidade. Relações entre o processo saúde-doença e as determinações socioculturais. Identidade e prática dos profissionais de saúde. Aspectos de promoção e prevenção em saúde. Demanda, necessidade de saúde e intervenção social.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'SL105': {
			code: 'SL105',
			name: 'Biologia Celular e Molecular',
			ementa: 'Organização molecular da célula. Estrutura e função do núcleo. Estudo dos processos de replicação, transcrição e tradução. Aspectos estruturais e funcionais das biomembranas. Interações celulares, citoesqueleto e transporte. Conhecimentos básicos da estrutura e função celular e das principais organelas citoplasmáticas. Ciclo e morte celular.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL106': {
			code: 'SL106',
			name: 'Anatomia e Histologia Aplicadas ao Esporte I',
			ementa: 'Estudo integrado de anatomia e histologia humana, abordando do ponto de vista estrutural o sistema nervoso central e periférico, órgãos dos sentidos com ênfase aos relacionados à visão e equilíbrio, neuromuscular, ósseo e articular. Planos de construção do corpo humano e nomenclatura anatômica.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'CP200': {
			code: 'CP200',
			name: 'Fundamentos Metodológicos do Treinamento Desportivo',
			ementa: 'Conceituações e estrutura do treinamento desportivo. Princípios do Treinamento. Meios e Métodos do Treinamento. Caracterização das capacidades físicas. Etapas de preparação desportiva de muitos anos.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP205': {
			code: 'CP205',
			name: 'Temas Contemporâneos de Ginásticas',
			ementa: 'Debates sobre as tendências e os dilemas vividos nas manifestações ginásticas na contemporaneidade, em diferentes contextos de intervenção profissional.',
			semestre: 1,
			vector: {T:1, P:0, L:1, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CP103']
		},
		'CP305': {
			code: 'CP305',
			name: 'Pedagogia do Esporte',
			ementa: 'As relações entre a pedagogia e o esporte. O conceito de pedagogia do esporte. As bases de fundamentação das novas tendências em pedagogia do esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'CP307': {
			code: 'CP307',
			name: 'Bioquímica Metabólica',
			ementa: 'Equilíbrio ácido-base; Estrutura e Metabolismo de Carboidratos (Glicólise, fermentação, glicogenólise, glicogênese, gliconeogênese); Estrutura e Metabolismo de Lipídeos (Oxidação e síntese de ácidos graxos e triacilgliceróis); Estrutura e Metabolismo de Aminoácidos e Proteínas (Síntese de aminoácidos e Ciclo da uréia); Ciclo de Krebs; Cadeia respiratória; Maquinaria Antioxidante. Integração metabólica.',
			semestre: 1,
			vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['SL105']
		},
		'CP700': {
			code: 'CP700',
			name: 'Socorros de Urgência',
			ementa: 'Reconhecimento da situação de emergência, prioridade e condutas a serem tomadas. Prevenção de acidentes. Primeiros Socorros em lesões mais frequentes e naquelas relacionadas às práticas de atividades físicas. Atuação do Profissional de Educação Física como educador na prática de primeiro socorrista.',
			semestre: 1,
			vector: {T:2, P:1, L:0, O:0, D:0, HS:3, SL:3, C:3},
			requisitos: ''
		},
		'NC104': {
			code: 'NC104',
			name: 'Introdução à Ciência dos Dados e à Informação',
			ementa: 'Contingência e probabilidade no mundo contemporâneo. Sentido dos dados e informação. Os diferentes tipos de informação. A informação estatística e o dilúvio de dados. Análise exploratória de dados. Medidas de tendência central e de dispersão. Representação gráfica de dados. Medidas de correlação. Correlação e causalidade. Introdução à Probabilidade. Regra de Bayes. Exemplos de aplicações nas diferentes Ciências Aplicadas.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'SL108': {
			code: 'SL108',
			name: 'Fisiologia Humana I',
			ementa: 'Estudo da fisiologia humana do sistema nervoso e a sua relação com os diferentes sistemas orgânicos. Estudo da fisiologia do sistema músculo-esquelético. Introdução aos conceitos gerais de homeostasia e bioeletrogênese.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL106']
		},
		'SL206': {
			code: 'SL206',
			name: 'Anatomia e Histologia Aplicadas ao Esporte II',
			ementa: 'Estudo integrado de anatomia e histologia, fornecendo os conceitos necessários para a identificação e localização e constituição dos órgãos e tecidos que constituem o corpo humano, dando subsídios para entender os processos fisiológicos desempenhados pelo corpo humano.',
			semestre: 1,
			vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['SL106']
		},
		'SL209': {
			code: 'SL209',
			name: 'Matemática para Ciências da Saúde',
			ementa: 'Funções de uma variável. Aspectos gráficos de funções. Introdução às funções vetoriais. Noções de derivada e integral. Aplicações de funções em problemas práticos da Nutrição e Ciências do Esporte. Introdução à probabilidade e suas aplicações em saúde.',
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
		'CP306': {
			code: 'CP306',
			name: 'Psicologia da Aprendizagem Aplicada ao Esporte',
			ementa: 'Principais teorias da aprendizagem. Teoria cognitiva, psicogenética e sociocultural. O processo de ensino aprendizagem. Mecanismos psicológicos da aprendizagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ''
		},
		'CP409': {
			code: 'CP409',
			name: 'Metodologia de Treinamento dos Esportes de Combate',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes de combate. A origem comum das artes marciais. As lutas orientais. As lutas ocidentais. A capoeira. O multiculturalismo e os esportes de combate. A esportivização e espetacularização das lutas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC301': {
			code: 'NC301',
			name: 'Filosofia e Ciências Humanas',
			ementa: 'Introdução ao pensamento humanista, em uma perspectiva filosófica. O sentido de natureza e da condição humana. Estética, ética e subjetividade. Relações entre arte e ciência: literatura, música e cinema. O sujeito no mundo contemporâneo.',
			semestre: 1,
			vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'SL204': {
			code: 'SL204',
			name: 'Cinesiologia I',
			ementa: 'Estudo dos diversos movimentos do corpo humano com ênfase na estrutura e funções das articulações e grupos musculares.',
			semestre: 1,
			vector: {T:2, P:0, L:1, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['SL106']
		},
		'SL208': {
			code: 'SL208',
			name: 'Fisiologia Humana II',
			ementa: 'Estudo de fisiologia humana, abordando do ponto de vista funcional os sistemas cardiovascular, respiratório, digestório, urinário, endócrino e reprodutor.',
			semestre: 1,
			vector: {T:5, P:1, L:0, O:0, D:0, HS:6, SL:6, C:6},
			requisitos: ['NT203', 'SL108', 'SL109']
		},
		'SL303': {
			code: 'SL303',
			name: 'Estatística e Bioestatística',
			ementa: 'Estatística descritiva, probabilidade, variáveis aleatórias, distribuição de frequências, distribuições discretas e contínuas, medidas de tendência central, medidas de dispersão, análise de variância, inferência estatística, distribuição gráfica, gráficos de controle, intervalos de confiança, amostragens e testes de hipóteses, regressão e correlação.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL209']
		},
		'SL400': {
			code: 'SL400',
			name: 'Crescimento e Desenvolvimento',
			ementa: 'Estudo dos aspectos que envolvem o crescimento e o desenvolvimento nas fases da vida (infância, adolescência e vida adulta), e da influência e importância da atividade física e esporte em cada uma destas fases.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP410': {
			code: 'CP410',
			name: 'Fisiologia do Exercício',
			ementa: 'Estudo da fisiologia do exercício. Ajustes e adaptações fisiológicas dos sistemas orgânicos em resposta ao exercício e ao treinamento físico.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL208']
		},
		'CP411': {
			code: 'CP411',
			name: 'Fundamentos da Biomecânica',
			ementa: 'Estudo do movimento do corpo humano nas atividades físicas e esportivas a partir dos conceitos mecânicos básicos. Análises dos movimentos a partir de variáveis obtidas por cinemetria, dinamometria, antropometria e eletromiografia.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL209']
		},
		'CP412': {
			code: 'CP412',
			name: 'Metodologia de Treinamento dos Esportes Individuais Combinados',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes combinados, nas modalidades individuais em ambiente de incerteza com o meio e nas modalidades individuais em meio estável, com presença de adversários e mediante utilização de um objeto de intermediação. Estudo dos aspectos relacionados à estrutura e lógica interna destas modalidades individuais.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP505': {
			code: 'CP505',
			name: 'Metodologia de Treinamento dos Esportes Coletivos I',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes coletivos no proceso de iniciação, tendo por referências as competências essenciais dos jogos coletivos, suas características gerais e o desenvolvimento das habilidades abertas em contexto de jogo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP600': {
			code: 'CP600',
			name: 'Políticas Públicas em Esporte',
			ementa: 'Análise das políticas públicas em Esporte, nos seus mais diversos níveis (municipal, estadual e federal), ao longo do tempo, e seus impactos nas concepções e nos processos de democratização do esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['AA425']
		},
		'CP602': {
			code: 'CP602',
			name: 'Avaliação em Ciências do Esporte',
			ementa: 'Estudo dos testes, medidas, avaliações e análise de dados em Ciências do Esporte, em suas diferentes manifestações. Métodos de avaliação diversificados, desde utilizados em diagnóstico até envolvidos com a prescrição de intensidade de exercício. Avaliações das capacidades físicas em diversas faixas etárias e condições esportivas.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP200']
		},
		'SL403': {
			code: 'SL403',
			name: 'Saúde Coletiva e Epidemiologia',
			ementa: 'Campo e história da Saúde Coletiva. Interdisciplinaridade no trabalho em saúde Políticas e modelos assistenciais. SUS e ações de saúde. Saúde da Família e a Ciências do Esporte. Intervenção em saúde. Introdução à Epidemiologia. Medidas de frequência de doenças e indicadores de saúde. Desenhos de estudos epidemiológicos.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:2, C:4},
			requisitos: ['SL104']
		},
		'CP506': {
			code: 'CP506',
			name: 'Biologia Molecular do Exercício',
			ementa: 'Conceitos básicos e atuais em biologia molecular do exercício. Adaptações moleculares ao exercício agudo e ao treinamento.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['SL208']
		},
		'CP507': {
			code: 'CP507',
			name: 'Atividade Física e Esporte para Grupos Especiais',
			ementa: 'Estudo das diferentes alterações no corpo humano relacionadas às populações especiais (gestantes, obesos, cardiopatas, hipertensos, diabéticos, etc.) para promoção, manutenção e recuperação da saúde através do exercício físico e do esporte.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP410']
		},
		'CP607': {
			code: 'CP607',
			name: 'Avaliações Fisiológicas Aplicadas ao Esporte',
			ementa: 'Variáveis fisiológicas e determinação da intensidade de esforço por meio de avaliações aplicadas ao esporte. Estrutura das avaliações embasadas em respostas fisiológicas e adequações ao esporte em suas diversas vertentes, tais como etapas de treinamento a longo prazo, fases da periodização e objetivos diferenciados. Compreensão correta dos resultados fornecidos por avaliações fisiológicas em ciências do esporte.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP410', 'CP602']
		},
		'CP702': {
			code: 'CP702',
			name: 'Processo de Envelhecimento e Ciência do Esporte',
			ementa: 'Estudo do processo de envelhecimento. Estudo do exercício físico e das manifestações esportivas relacionados ao processo de envelhecimento.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP410']
		},
		'NC400': {
			code: 'NC400',
			name: 'Noções de Administração e Gestão',
			ementa: 'Gestão e administração. Perfil e funções do administrador. Processo administrativo. Tomada de decisão. Planejamento e estratégia. Processo de organização. Direção, coordenação e liderança. Processo de controle. Tendências da gestão e administração no Brasil e no mundo.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		},
		'CP026': {
			code: 'CP026',
			name: 'Treinador Desportivo',
			ementa: 'O treinador desportivo como gestor de campo e líder de equipe. Suas principais características e funções. Os diferentes perfis de liderança e a gestão de grupos heterogêneos. A gestão de pessoas nos esportes individuais e coletivos. O planejamento e logística de equipes.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'CP404': {
			code: 'CP404',
			name: 'Biomecânica Aplicada em Ciências do Esporte',
			ementa: 'Estudo e aplicação da metodologia e instrumentação para biomecânica voltadas à análise do movimento humano no contexto esportivo, nas atividades físicas e das atividades da vida diária.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP411']
		},
		'CP502': {
			code: 'CP502',
			name: 'Treinamento Desportivo e Rendimento',
			ementa: 'Estudo dos desportos de acordo com a característica das ações motoras, dos meios e métodos de treinamento, das capacidades motoras e sua relação com o princípio da especificidade. Modelos de estruturação e periodização do treinamento desportivo. Planejamento, diagnóstico, programação e execução de treinamento em Ciência do Esporte. Preparação do desempenho.',
			semestre: 1,
			vector: {T:3, P:0, L:1, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP607']
		},
		'CP606': {
			code: 'CP606',
			name: 'Fundamentos do Treinamento Resistido',
			ementa: 'Estudo teórico-prático dos fundamentos básicos do treinamento resistido. Estudo das adaptações fisiológicas e metabólicas que ocorrem no corpo humano em resposta ao exercício físico resistido crônico e agudo. Elaboração de programas de exercício físico resistido.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CP410']
		},
		'CP608': {
			code: 'CP608',
			name: 'Metodologia de Treinamento dos Esportes Coletivos II',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem, aperfeiçoamento e treinamento dos esportes coletivos no processo de especialização tendo por referências as competências essenciais dos jogos coletivos e suas manifestações específicas em contexto de jogo.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP505']
		},
		'CP609': {
			code: 'CP609',
			name: 'Introdução aos Esportes Adaptados',
			ementa: 'Estudo dos conceitos de Esporte Adaptado. Fundamentos e características das deficiências sensoriais, físicas e cognitivas. Considerações históricas e sociais dos esportes adaptados e o impacto na organização do esporte nacional.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'NC100': {
			code: 'NC100',
			name: 'Ética e Cidadania',
			ementa: 'Reflexão teórico-crítica da ética, da moral e da cidadania no mundo contemporâneo; origens da ética; a relação entre a moral e a ética; os costumes, os hábitos, as virtudes; direito e deveres cidadãos; o cuidado como elemento norteador da cidadania; respeito, alteridade; o público e o privado; as políticas públicas; cidadania e convivência social; inclusão social; indivíduo e coletividade; subjetividade. Flagelos sociais (fome, desemprego, violência, entre outros). Movimentos e intervenções sociais. Bioética.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'SL600': {
			code: 'SL600',
			name: 'Introdução à Prática de Ciências',
			ementa: 'Introdução ao pensamento crítico sobre as ciências e ao pensamento científico. Desenvolvimento da mentalidade investigativa e planejamento da pesquisa. Apresentar normas para elaboração do trabalho de conclusão de curso. Revisar e discutir o projeto de pesquisa realizado.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA450']
		},
		'CP701': {
			code: 'CP701',
			name: 'Esporte, Lazer e Sociedade',
			ementa: 'Análise acerca dos papéis do esporte e do lazer no desenvolvimento da sociedade ao longo do tempo e na contemporaneidade, especialmente em alguns marcos históricos, estabelecendo relações com os aspectos culturais e educacionais, com vistas a uma transformação da realidade.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP705': {
			code: 'CP705',
			name: 'Estágio em Ciências do Esporte I',
			ementa: 'Atividades de estágio que propiciem ao profissional em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:5, D:0, HS:6, SL:1, C:6},
			requisitos: ['AA200', 'AA450']
		},
		'CP706': {
			code: 'CP706',
			name: 'Esporte Adaptado',
			ementa: 'Estudo das modalidades esportivas adaptadas (histórico e evolução). Avaliação funcional do esporte adaptado. Regulamento e pontuação nas várias modalidades. A organização do Esporte Paraolímpico. Modalidade de Esporte Paraolímpico.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'CP707': {
			code: 'CP707',
			name: 'Trabalho de Conclusão de Curso I',
			ementa: 'Supervisão do desenvolvimento dos trabalhos monográficos de conclusão de curso, ofertando suporte aos docentes e discentes. Orientações para a composição do trabalho monográfico, em seus diferentes aspectos: formatação, normalização (ABNT), estrutura, metodologia da pesquisa, coesão textual e fundamentação acadêmico-científica. Finalização do trabalho e dos textos e execução das bancas de defesa pública dos trabalhos monográficos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['AA470', 'SL600']
		},
		'CP708': {
			code: 'CP708',
			name: 'Psicologia no Esporte e na Atividade Física I',
			ementa: 'Nesta disciplina serão apresentados e discutidos conceitos introdutórios da psicologia do esporte, fundamentos da psicologia do esporte e do exercício físico. Conceitos básicos da área da psicologia e implicações éticas envolvidas no esporte e na atividade física. O comportamento humano no contexto do esporte e da atividade física. Teorias da personalidade. Personalidade e esporte. Percepção no esporte. Regulação psicológica da ação esportiva. Teorias da motivação. Conceitos de ativação, estresse e ansiedade e sua relação com o desempenho no contexto esportivo e da atividade física. Pesquisas em psicologia do esporte e do exercício.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CP306']
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:10, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: ''
		},
		'CP801': {
			code: 'CP801',
			name: 'Organização e Gestão em Esporte',
			ementa: 'Estudo da administração, gestão e do planejamento das estruturas e sistemas esportistas. Introdução aos estudos de economia e esporte.',
			semestre: 1,
			vector: {T:4, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['NC400']
		},
		'CP803': {
			code: 'CP803',
			name: 'Estágio em Ciência do Esporte II',
			ementa: 'Atividades de estágio que propiciem ao profissinal em formação o contato com experiências, práticas e conhecimentos próprios ao campo profissional.',
			semestre: 1,
			vector: {T:1, P:0, L:0, O:7, D:0, HS:8, SL:1, C:8},
			requisitos: ['AA200', 'AA450']
		},
		'CP806': {
			code: 'CP806',
			name: 'Metodologia de Treinamento dos Esportes Aquáticos',
			ementa: 'Estudos teórico-práticos relativos à pedagogia do esporte, que permitam abordar e desenvolver procedimentos metodológicos para aprendizagem dos esportes aquáticos no processo de iniciação, com ênfase na natação.',
			semestre: 1,
			vector: {T:2, P:0, L:2, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ['CP305']
		},
		'CP807': {
			code: 'CP807',
			name: 'Trabalho de Conclusão de Curso II',
			ementa: 'Supervisão do desenvolvimento dos trabalhos monográficos de conclusão de curso, ofertando suporte aos docentes e discentes. Orientações para a composição do trabalho monográfico, em seus diferentes aspectos: formatação, normalização (ABNT), estrutura, metodologia da pesquisa, coesão textual e fundamentação acadêmico-científica. Finalização do trabalho e dos textos e execução das bancas de defesa pública dos trabalhos monográficos.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ['CP707']
		},
		'CP808': {
			code: 'CP808',
			name: 'Psicologia no Esporte e na Atividade Física II',
			ementa: 'Nesta disciplina serão discutidos temas relacionados com: aspectos psicológicos que interferem no desempenho esportivo e na atividade física. Tomada de decisão no esporte. Processos de grupo (grupos e equipe; liderança; coesão de grupo; comunicação). Emoções no esporte. Saúde e bem-estar (exercício e bem-estar psicológico; comportamento e adesão ao exercício; reações psicológicas associadas à lesão esportiva; comportamentos dependentes e patológicos; Burnout; excesso de exercício; compulsões e perdas). Agressividade. A criança no esporte. Desenvolvimento do caráter e espírito esportivo. Expertise. Planejamento da carreira esportiva.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:0, D:0, HS:2, SL:2, C:2},
			requisitos: ['CP708']
		},
		'ELET6': {
			code: 'ELET6',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:6, P:0, L:0, O:0, D:0, HS:0, SL:0, C:6},
			requisitos: ''
		}
	}
};

export default catalogue;
